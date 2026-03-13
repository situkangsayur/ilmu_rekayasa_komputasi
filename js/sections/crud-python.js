// ====================== PYTHON CRUD: FastAPI + gRPC ======================
// Comprehensive tutorial: RESTful API (FastAPI), gRPC, production project structure,
// security best practices, testing, Docker deployment

sections['crud-python'] = () => `
<section class="animate-in">
<h1 class="section-title animate-in">Python CRUD: FastAPI &amp; gRPC</h1>
<p class="section-subtitle animate-in">Production-Ready RESTful API, gRPC Services, Security Best Practices, Testing &amp; Deployment</p>
<p class="animate-in"><em>Ref: FastAPI Docs (tiangolo); SQLAlchemy 2.0 Docs; gRPC Python Guide; OWASP API Security Top 10; "Architecture Patterns with Python" (Percival &amp; Gregory, 2020)</em></p>

<!-- ==================== 1. PRODUCTION PROJECT STRUCTURE ==================== -->
<h2 class="animate-in">1. Production-Ready Project Structure</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Struktur Direktori</h3>
<p>Arsitektur berlapis (<strong>Layered Architecture</strong>) memisahkan concern menjadi: <strong>Router</strong> (HTTP/gRPC handler) &rarr; <strong>Service</strong> (business logic) &rarr; <strong>Repository</strong> (data access) &rarr; <strong>Database</strong>. Ini memudahkan testing, maintenance, dan scaling.</p>
<div class="code-block"><span class="cm"># Production-ready project layout</span>
myapp/
&boxv;&boxh;&boxh; app/
&boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;&boxh;&boxh; main.py               <span class="cm"># FastAPI app entry point</span>
&boxv;   &boxv;&boxh;&boxh; config.py              <span class="cm"># Settings (pydantic-settings)</span>
&boxv;   &boxv;&boxh;&boxh; database.py            <span class="cm"># SQLAlchemy engine &amp; session</span>
&boxv;   &boxv;&boxh;&boxh; models/
&boxv;   &boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;   &boxvr;&boxh;&boxh; user.py            <span class="cm"># SQLAlchemy ORM models</span>
&boxv;   &boxv;&boxh;&boxh; schemas/
&boxv;   &boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;   &boxvr;&boxh;&boxh; user.py            <span class="cm"># Pydantic schemas (validation)</span>
&boxv;   &boxv;&boxh;&boxh; repositories/
&boxv;   &boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;   &boxvr;&boxh;&boxh; user.py            <span class="cm"># Data access layer</span>
&boxv;   &boxv;&boxh;&boxh; services/
&boxv;   &boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;   &boxvr;&boxh;&boxh; user.py            <span class="cm"># Business logic layer</span>
&boxv;   &boxv;&boxh;&boxh; routers/
&boxv;   &boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;   &boxvr;&boxh;&boxh; user.py            <span class="cm"># FastAPI route handlers</span>
&boxv;   &boxv;&boxh;&boxh; middleware/
&boxv;   &boxv;   &boxv;&boxh;&boxh; __init__.py
&boxv;   &boxv;   &boxvr;&boxh;&boxh; auth.py            <span class="cm"># JWT auth middleware</span>
&boxv;   &boxvr;&boxh;&boxh; proto/
&boxv;       &boxvr;&boxh;&boxh; user.proto         <span class="cm"># gRPC service definitions</span>
&boxv;&boxh;&boxh; alembic/                   <span class="cm"># Database migrations</span>
&boxv;   &boxvr;&boxh;&boxh; versions/
&boxv;&boxh;&boxh; tests/
&boxv;   &boxv;&boxh;&boxh; conftest.py            <span class="cm"># Shared fixtures</span>
&boxv;   &boxvr;&boxh;&boxh; test_user.py           <span class="cm"># User API tests</span>
&boxv;&boxh;&boxh; Dockerfile
&boxv;&boxh;&boxh; docker-compose.yml
&boxv;&boxh;&boxh; requirements.txt
&boxv;&boxh;&boxh; pyproject.toml
&boxvr;&boxh;&boxh; alembic.ini</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">Mengapa Layered Architecture?</h3>
<div class="table-wrapper">
<table>
<tr><th>Layer</th><th>Tanggung Jawab</th><th>Contoh File</th></tr>
<tr><td><span class="badge badge-blue">Router</span></td><td>HTTP/gRPC request handling, response formatting</td><td>routers/user.py</td></tr>
<tr><td><span class="badge badge-green">Service</span></td><td>Business logic, orchestration, validation rules</td><td>services/user.py</td></tr>
<tr><td><span class="badge badge-yellow">Repository</span></td><td>Database queries, CRUD operations</td><td>repositories/user.py</td></tr>
<tr><td><span class="badge badge-orange">Model</span></td><td>ORM mapping, table definitions</td><td>models/user.py</td></tr>
<tr><td><span class="badge badge-red">Schema</span></td><td>Input/output validation, serialization</td><td>schemas/user.py</td></tr>
</table>
</div>
<div class="info-box">
<strong>Prinsip:</strong> Setiap layer hanya bergantung pada layer di bawahnya. Router bergantung pada Service, Service bergantung pada Repository, Repository bergantung pada Model. Ini membuat unit testing sangat mudah karena dependency bisa di-mock.
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Dependencies &amp; requirements.txt</h3>
<div class="code-block"><span class="cm"># requirements.txt</span>
fastapi==0.115.6
uvicorn[standard]==0.34.0
sqlalchemy[asyncio]==2.0.36
asyncpg==0.30.0              <span class="cm"># PostgreSQL async driver</span>
alembic==1.14.0               <span class="cm"># Database migrations</span>
pydantic-settings==2.7.0      <span class="cm"># Environment config</span>
python-jose[cryptography]==3.3.0  <span class="cm"># JWT tokens</span>
passlib[bcrypt]==1.7.4         <span class="cm"># Password hashing</span>
python-multipart==0.0.19       <span class="cm"># Form data parsing</span>
slowapi==0.1.9                 <span class="cm"># Rate limiting</span>
httpx==0.28.1                  <span class="cm"># Async HTTP client (testing)</span>
grpcio==1.69.0                 <span class="cm"># gRPC runtime</span>
grpcio-tools==1.69.0           <span class="cm"># protoc compiler</span>
grpclib==0.4.7                 <span class="cm"># Async gRPC</span>
protobuf==5.29.2               <span class="cm"># Protocol buffers</span>
pytest==8.3.4                  <span class="cm"># Testing framework</span>
pytest-asyncio==0.25.0         <span class="cm"># Async test support</span>
factory-boy==3.3.1             <span class="cm"># Test data factories</span></div>
</div>

<!-- ==================== 2. CONFIG & DATABASE ==================== -->
<h2 class="animate-in">2. Configuration &amp; Database Setup</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/config.py &mdash; Pydantic Settings</h3>
<p>Menggunakan <strong>pydantic-settings</strong> untuk type-safe environment variable loading. Ini memastikan semua konfigurasi tervalidasi saat startup, bukan saat runtime.</p>
<div class="code-block"><span class="cm"># app/config.py</span>
<span class="kw">from</span> pydantic_settings <span class="kw">import</span> BaseSettings, SettingsConfigDict
<span class="kw">from</span> functools <span class="kw">import</span> lru_cache

<span class="kw">class</span> <span class="fn">Settings</span>(BaseSettings):
    <span class="cm"># Database</span>
    DATABASE_URL: <span class="type">str</span> = <span class="str">"postgresql+asyncpg://user:pass@localhost:5432/mydb"</span>
    DB_POOL_SIZE: <span class="type">int</span> = <span class="num">20</span>
    DB_MAX_OVERFLOW: <span class="type">int</span> = <span class="num">10</span>

    <span class="cm"># JWT</span>
    SECRET_KEY: <span class="type">str</span> = <span class="str">"change-me-in-production"</span>
    ALGORITHM: <span class="type">str</span> = <span class="str">"HS256"</span>
    ACCESS_TOKEN_EXPIRE_MINUTES: <span class="type">int</span> = <span class="num">30</span>
    REFRESH_TOKEN_EXPIRE_DAYS: <span class="type">int</span> = <span class="num">7</span>

    <span class="cm"># App</span>
    APP_NAME: <span class="type">str</span> = <span class="str">"MyApp API"</span>
    DEBUG: <span class="type">bool</span> = <span class="kw">False</span>
    ALLOWED_ORIGINS: <span class="type">list</span>[<span class="type">str</span>] = [<span class="str">"http://localhost:3000"</span>]

    <span class="cm"># Rate Limiting</span>
    RATE_LIMIT: <span class="type">str</span> = <span class="str">"100/minute"</span>

    model_config = SettingsConfigDict(
        env_file=<span class="str">".env"</span>,
        env_file_encoding=<span class="str">"utf-8"</span>,
        case_sensitive=<span class="kw">True</span>,
    )

<span class="cm">@</span><span class="fn">lru_cache</span>
<span class="kw">def</span> <span class="fn">get_settings</span>() -&gt; Settings:
    <span class="kw">return</span> Settings()</div>
<div class="info-box">
<strong>Keamanan:</strong> Jangan pernah hardcode SECRET_KEY di kode. Gunakan file <code>.env</code> yang tidak di-commit ke git. Tambahkan <code>.env</code> ke <code>.gitignore</code>.
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">app/database.py &mdash; Async SQLAlchemy</h3>
<p>SQLAlchemy 2.0 mendukung async secara native. Kita gunakan <strong>asyncpg</strong> sebagai driver PostgreSQL async untuk performa tinggi.</p>
<div class="code-block"><span class="cm"># app/database.py</span>
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> (
    create_async_engine,
    async_sessionmaker,
    AsyncSession,
)
<span class="kw">from</span> sqlalchemy.orm <span class="kw">import</span> DeclarativeBase
<span class="kw">from</span> app.config <span class="kw">import</span> get_settings

settings = get_settings()

<span class="cm"># Async engine dengan connection pooling</span>
engine = create_async_engine(
    settings.DATABASE_URL,
    pool_size=settings.DB_POOL_SIZE,
    max_overflow=settings.DB_MAX_OVERFLOW,
    echo=settings.DEBUG,
)

<span class="cm"># Session factory</span>
async_session = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=<span class="kw">False</span>,
)

<span class="cm"># Base class untuk semua ORM models</span>
<span class="kw">class</span> <span class="fn">Base</span>(DeclarativeBase):
    <span class="kw">pass</span>

<span class="cm"># Dependency injection untuk FastAPI</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_db</span>():
    <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
        <span class="kw">try</span>:
            <span class="kw">yield</span> session
            <span class="kw">await</span> session.commit()
        <span class="kw">except</span> Exception:
            <span class="kw">await</span> session.rollback()
            <span class="kw">raise</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">.env &mdash; Environment Variables</h3>
<div class="code-block"><span class="cm"># .env (JANGAN commit ke git!)</span>
DATABASE_URL=postgresql+asyncpg://appuser:s3cureP@ss@db:5432/myapp
SECRET_KEY=super-secret-key-change-in-production-min-32-chars
DEBUG=false
ALLOWED_ORIGINS=["https://myapp.com","https://admin.myapp.com"]
RATE_LIMIT=100/minute</div>
<div class="warning-box">
<strong>PENTING:</strong> Pastikan file <code>.env</code> ada di <code>.gitignore</code>. Untuk production, gunakan secrets manager seperti AWS Secrets Manager, HashiCorp Vault, atau Docker secrets.
</div>
</div>

<!-- ==================== 3. ORM MODELS ==================== -->
<h2 class="animate-in">3. SQLAlchemy ORM Models</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/models/user.py</h3>
<p>SQLAlchemy 2.0 menggunakan <strong>Mapped</strong> type annotations untuk definisi kolom yang type-safe.</p>
<div class="code-block"><span class="cm"># app/models/user.py</span>
<span class="kw">from</span> datetime <span class="kw">import</span> datetime
<span class="kw">from</span> uuid <span class="kw">import</span> uuid4
<span class="kw">from</span> sqlalchemy <span class="kw">import</span> String, Boolean, DateTime, func
<span class="kw">from</span> sqlalchemy.orm <span class="kw">import</span> Mapped, mapped_column
<span class="kw">from</span> sqlalchemy.dialects.postgresql <span class="kw">import</span> UUID
<span class="kw">from</span> app.database <span class="kw">import</span> Base

<span class="kw">class</span> <span class="fn">User</span>(Base):
    __tablename__ = <span class="str">"users"</span>

    id: Mapped[<span class="type">str</span>] = mapped_column(
        UUID(as_uuid=<span class="kw">False</span>),
        primary_key=<span class="kw">True</span>,
        default=<span class="kw">lambda</span>: <span class="fn">str</span>(uuid4()),
    )
    email: Mapped[<span class="type">str</span>] = mapped_column(
        String(<span class="num">255</span>),
        unique=<span class="kw">True</span>,
        index=<span class="kw">True</span>,
        nullable=<span class="kw">False</span>,
    )
    username: Mapped[<span class="type">str</span>] = mapped_column(
        String(<span class="num">100</span>),
        unique=<span class="kw">True</span>,
        index=<span class="kw">True</span>,
        nullable=<span class="kw">False</span>,
    )
    hashed_password: Mapped[<span class="type">str</span>] = mapped_column(
        String(<span class="num">255</span>),
        nullable=<span class="kw">False</span>,
    )
    full_name: Mapped[<span class="type">str</span> | <span class="kw">None</span>] = mapped_column(
        String(<span class="num">200</span>),
        nullable=<span class="kw">True</span>,
    )
    is_active: Mapped[<span class="type">bool</span>] = mapped_column(
        Boolean,
        default=<span class="kw">True</span>,
    )
    is_superuser: Mapped[<span class="type">bool</span>] = mapped_column(
        Boolean,
        default=<span class="kw">False</span>,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=<span class="kw">True</span>),
        server_default=func.now(),
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=<span class="kw">True</span>),
        server_default=func.now(),
        onupdate=func.now(),
    )

    <span class="kw">def</span> <span class="fn">__repr__</span>(self) -&gt; <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"User(id={self.id}, email={self.email})"</span></div>
</div>

<!-- ==================== 4. PYDANTIC SCHEMAS ==================== -->
<h2 class="animate-in">4. Pydantic Schemas (Validation &amp; Serialization)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/schemas/user.py</h3>
<p>Pydantic secara otomatis melakukan <strong>input validation</strong>, <strong>type coercion</strong>, dan <strong>serialization</strong>. Ini adalah garis pertahanan pertama terhadap data tidak valid.</p>
<div class="code-block"><span class="cm"># app/schemas/user.py</span>
<span class="kw">from</span> datetime <span class="kw">import</span> datetime
<span class="kw">from</span> pydantic <span class="kw">import</span> BaseModel, EmailStr, Field, field_validator
<span class="kw">import</span> re

<span class="cm"># ---- Base Schema ----</span>
<span class="kw">class</span> <span class="fn">UserBase</span>(BaseModel):
    email: EmailStr
    username: <span class="type">str</span> = Field(
        min_length=<span class="num">3</span>,
        max_length=<span class="num">50</span>,
        pattern=<span class="str">r"^[a-zA-Z0-9_-]+$"</span>,
        description=<span class="str">"Alphanumeric, underscore, hyphen only"</span>,
    )
    full_name: <span class="type">str</span> | <span class="kw">None</span> = Field(
        default=<span class="kw">None</span>,
        max_length=<span class="num">200</span>,
    )

<span class="cm"># ---- Create Schema ----</span>
<span class="kw">class</span> <span class="fn">UserCreate</span>(UserBase):
    password: <span class="type">str</span> = Field(
        min_length=<span class="num">8</span>,
        max_length=<span class="num">128</span>,
        description=<span class="str">"Min 8 chars, must contain upper, lower, digit"</span>,
    )

    <span class="cm">@</span><span class="fn">field_validator</span>(<span class="str">"password"</span>)
    <span class="cm">@</span><span class="fn">classmethod</span>
    <span class="kw">def</span> <span class="fn">validate_password_strength</span>(cls, v: <span class="type">str</span>) -&gt; <span class="type">str</span>:
        <span class="kw">if not</span> re.search(<span class="str">r"[A-Z]"</span>, v):
            <span class="kw">raise</span> ValueError(<span class="str">"Must contain uppercase letter"</span>)
        <span class="kw">if not</span> re.search(<span class="str">r"[a-z]"</span>, v):
            <span class="kw">raise</span> ValueError(<span class="str">"Must contain lowercase letter"</span>)
        <span class="kw">if not</span> re.search(<span class="str">r"[0-9]"</span>, v):
            <span class="kw">raise</span> ValueError(<span class="str">"Must contain digit"</span>)
        <span class="kw">return</span> v

<span class="cm"># ---- Update Schema ----</span>
<span class="kw">class</span> <span class="fn">UserUpdate</span>(BaseModel):
    email: EmailStr | <span class="kw">None</span> = <span class="kw">None</span>
    username: <span class="type">str</span> | <span class="kw">None</span> = Field(
        default=<span class="kw">None</span>,
        min_length=<span class="num">3</span>,
        max_length=<span class="num">50</span>,
        pattern=<span class="str">r"^[a-zA-Z0-9_-]+$"</span>,
    )
    full_name: <span class="type">str</span> | <span class="kw">None</span> = <span class="kw">None</span>
    password: <span class="type">str</span> | <span class="kw">None</span> = Field(
        default=<span class="kw">None</span>,
        min_length=<span class="num">8</span>,
        max_length=<span class="num">128</span>,
    )

<span class="cm"># ---- Response Schema ----</span>
<span class="kw">class</span> <span class="fn">UserResponse</span>(UserBase):
    id: <span class="type">str</span>
    is_active: <span class="type">bool</span>
    created_at: datetime
    updated_at: datetime

    model_config = {<span class="str">"from_attributes"</span>: <span class="kw">True</span>}

<span class="cm"># ---- List Response ----</span>
<span class="kw">class</span> <span class="fn">UserListResponse</span>(BaseModel):
    users: <span class="type">list</span>[UserResponse]
    total: <span class="type">int</span>
    page: <span class="type">int</span>
    per_page: <span class="type">int</span>

<span class="cm"># ---- Token Schemas ----</span>
<span class="kw">class</span> <span class="fn">Token</span>(BaseModel):
    access_token: <span class="type">str</span>
    refresh_token: <span class="type">str</span>
    token_type: <span class="type">str</span> = <span class="str">"bearer"</span>

<span class="kw">class</span> <span class="fn">TokenPayload</span>(BaseModel):
    sub: <span class="type">str</span>
    exp: <span class="type">int</span>
    type: <span class="type">str</span> = <span class="str">"access"</span></div>
<div class="info-box">
<strong>Pydantic Auto-Validation:</strong> Input yang tidak sesuai schema akan otomatis ditolak dengan error 422 Unprocessable Entity. Anda tidak perlu menulis validasi manual — Pydantic menangani semuanya.
</div>
</div>

<!-- ==================== 5. REPOSITORY LAYER ==================== -->
<h2 class="animate-in">5. Repository Layer (Data Access)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/repositories/user.py</h3>
<p>Repository layer mengisolasi semua database queries. Ini membuat kode mudah di-test (bisa di-mock) dan memudahkan perpindahan database engine jika diperlukan.</p>
<div class="code-block"><span class="cm"># app/repositories/user.py</span>
<span class="kw">from</span> sqlalchemy <span class="kw">import</span> select, func, update, delete
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> AsyncSession
<span class="kw">from</span> app.models.user <span class="kw">import</span> User

<span class="kw">class</span> <span class="fn">UserRepository</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, session: AsyncSession):
        self.session = session

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">create</span>(self, user: User) -&gt; User:
        self.session.add(user)
        <span class="kw">await</span> self.session.flush()
        <span class="kw">await</span> self.session.refresh(user)
        <span class="kw">return</span> user

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_by_id</span>(self, user_id: <span class="type">str</span>) -&gt; User | <span class="kw">None</span>:
        stmt = select(User).where(User.id == user_id)
        result = <span class="kw">await</span> self.session.execute(stmt)
        <span class="kw">return</span> result.scalar_one_or_none()

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_by_email</span>(self, email: <span class="type">str</span>) -&gt; User | <span class="kw">None</span>:
        stmt = select(User).where(User.email == email)
        result = <span class="kw">await</span> self.session.execute(stmt)
        <span class="kw">return</span> result.scalar_one_or_none()

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_by_username</span>(self, username: <span class="type">str</span>) -&gt; User | <span class="kw">None</span>:
        stmt = select(User).where(User.username == username)
        result = <span class="kw">await</span> self.session.execute(stmt)
        <span class="kw">return</span> result.scalar_one_or_none()

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">list_users</span>(
        self, skip: <span class="type">int</span> = <span class="num">0</span>, limit: <span class="type">int</span> = <span class="num">20</span>
    ) -&gt; <span class="type">tuple</span>[<span class="type">list</span>[User], <span class="type">int</span>]:
        <span class="cm"># Count total</span>
        count_stmt = select(func.count()).select_from(User)
        total = <span class="kw">await</span> self.session.scalar(count_stmt) <span class="kw">or</span> <span class="num">0</span>

        <span class="cm"># Fetch page</span>
        stmt = (
            select(User)
            .order_by(User.created_at.desc())
            .offset(skip)
            .limit(limit)
        )
        result = <span class="kw">await</span> self.session.execute(stmt)
        <span class="kw">return</span> result.scalars().all(), total

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">update</span>(
        self, user_id: <span class="type">str</span>, data: <span class="type">dict</span>
    ) -&gt; User | <span class="kw">None</span>:
        stmt = (
            update(User)
            .where(User.id == user_id)
            .values(**data)
            .returning(User)
        )
        result = <span class="kw">await</span> self.session.execute(stmt)
        <span class="kw">return</span> result.scalar_one_or_none()

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">delete</span>(self, user_id: <span class="type">str</span>) -&gt; <span class="type">bool</span>:
        stmt = delete(User).where(User.id == user_id)
        result = <span class="kw">await</span> self.session.execute(stmt)
        <span class="kw">return</span> result.rowcount &gt; <span class="num">0</span></div>
<div class="info-box">
<strong>SQL Injection Prevention:</strong> SQLAlchemy menggunakan parameterized queries secara internal. Setiap <code>.where(User.id == user_id)</code> menghasilkan parameterized SQL, bukan string concatenation. Ini mencegah SQL injection secara otomatis.
</div>
</div>

<!-- ==================== 6. SERVICE LAYER ==================== -->
<h2 class="animate-in">6. Service Layer (Business Logic)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/middleware/auth.py &mdash; JWT &amp; Password Utilities</h3>
<div class="code-block"><span class="cm"># app/middleware/auth.py</span>
<span class="kw">from</span> datetime <span class="kw">import</span> datetime, timedelta, timezone
<span class="kw">from</span> jose <span class="kw">import</span> JWTError, jwt
<span class="kw">from</span> passlib.context <span class="kw">import</span> CryptContext
<span class="kw">from</span> fastapi <span class="kw">import</span> Depends, HTTPException, status
<span class="kw">from</span> fastapi.security <span class="kw">import</span> OAuth2PasswordBearer
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> AsyncSession
<span class="kw">from</span> app.config <span class="kw">import</span> get_settings
<span class="kw">from</span> app.database <span class="kw">import</span> get_db
<span class="kw">from</span> app.repositories.user <span class="kw">import</span> UserRepository
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> TokenPayload

settings = get_settings()

<span class="cm"># Password hashing context (bcrypt)</span>
pwd_context = CryptContext(schemes=[<span class="str">"bcrypt"</span>], deprecated=<span class="str">"auto"</span>)

<span class="cm"># OAuth2 scheme — auto-configures Swagger UI</span>
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=<span class="str">"/api/v1/auth/login"</span>)

<span class="kw">def</span> <span class="fn">hash_password</span>(password: <span class="type">str</span>) -&gt; <span class="type">str</span>:
    <span class="kw">return</span> pwd_context.hash(password)

<span class="kw">def</span> <span class="fn">verify_password</span>(plain: <span class="type">str</span>, hashed: <span class="type">str</span>) -&gt; <span class="type">bool</span>:
    <span class="kw">return</span> pwd_context.verify(plain, hashed)

<span class="kw">def</span> <span class="fn">create_access_token</span>(
    subject: <span class="type">str</span>, expires_delta: timedelta | <span class="kw">None</span> = <span class="kw">None</span>
) -&gt; <span class="type">str</span>:
    expire = datetime.now(timezone.utc) + (
        expires_delta <span class="kw">or</span> timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    payload = {<span class="str">"sub"</span>: subject, <span class="str">"exp"</span>: expire, <span class="str">"type"</span>: <span class="str">"access"</span>}
    <span class="kw">return</span> jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

<span class="kw">def</span> <span class="fn">create_refresh_token</span>(subject: <span class="type">str</span>) -&gt; <span class="type">str</span>:
    expire = datetime.now(timezone.utc) + timedelta(
        days=settings.REFRESH_TOKEN_EXPIRE_DAYS
    )
    payload = {<span class="str">"sub"</span>: subject, <span class="str">"exp"</span>: expire, <span class="str">"type"</span>: <span class="str">"refresh"</span>}
    <span class="kw">return</span> jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_current_user</span>(
    token: <span class="type">str</span> = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=<span class="str">"Invalid authentication credentials"</span>,
        headers={<span class="str">"WWW-Authenticate"</span>: <span class="str">"Bearer"</span>},
    )
    <span class="kw">try</span>:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        token_data = TokenPayload(**payload)
        <span class="kw">if</span> token_data.type != <span class="str">"access"</span>:
            <span class="kw">raise</span> credentials_exception
    <span class="kw">except</span> JWTError:
        <span class="kw">raise</span> credentials_exception

    repo = UserRepository(db)
    user = <span class="kw">await</span> repo.get_by_id(token_data.sub)
    <span class="kw">if</span> user <span class="kw">is</span> <span class="kw">None</span> <span class="kw">or not</span> user.is_active:
        <span class="kw">raise</span> credentials_exception
    <span class="kw">return</span> user

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_current_superuser</span>(
    current_user = Depends(get_current_user),
):
    <span class="kw">if not</span> current_user.is_superuser:
        <span class="kw">raise</span> HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=<span class="str">"Not enough permissions"</span>,
        )
    <span class="kw">return</span> current_user</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">app/services/user.py &mdash; Business Logic</h3>
<div class="code-block"><span class="cm"># app/services/user.py</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> HTTPException, status
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> AsyncSession
<span class="kw">from</span> app.models.user <span class="kw">import</span> User
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> UserCreate, UserUpdate
<span class="kw">from</span> app.repositories.user <span class="kw">import</span> UserRepository
<span class="kw">from</span> app.middleware.auth <span class="kw">import</span> (
    hash_password, verify_password,
    create_access_token, create_refresh_token,
)

<span class="kw">class</span> <span class="fn">UserService</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, session: AsyncSession):
        self.repo = UserRepository(session)

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">create_user</span>(self, data: UserCreate) -&gt; User:
        <span class="cm"># Check if email or username already exists</span>
        <span class="kw">if await</span> self.repo.get_by_email(data.email):
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=<span class="str">"Email already registered"</span>,
            )
        <span class="kw">if await</span> self.repo.get_by_username(data.username):
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=<span class="str">"Username already taken"</span>,
            )

        user = User(
            email=data.email,
            username=data.username,
            full_name=data.full_name,
            hashed_password=hash_password(data.password),
        )
        <span class="kw">return await</span> self.repo.create(user)

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_user</span>(self, user_id: <span class="type">str</span>) -&gt; User:
        user = <span class="kw">await</span> self.repo.get_by_id(user_id)
        <span class="kw">if not</span> user:
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=<span class="str">"User not found"</span>,
            )
        <span class="kw">return</span> user

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">list_users</span>(
        self, page: <span class="type">int</span> = <span class="num">1</span>, per_page: <span class="type">int</span> = <span class="num">20</span>
    ) -&gt; <span class="type">tuple</span>[<span class="type">list</span>[User], <span class="type">int</span>]:
        skip = (page - <span class="num">1</span>) * per_page
        <span class="kw">return await</span> self.repo.list_users(skip=skip, limit=per_page)

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">update_user</span>(
        self, user_id: <span class="type">str</span>, data: UserUpdate
    ) -&gt; User:
        update_data = data.model_dump(exclude_unset=<span class="kw">True</span>)
        <span class="kw">if</span> <span class="str">"password"</span> <span class="kw">in</span> update_data:
            update_data[<span class="str">"hashed_password"</span>] = hash_password(
                update_data.pop(<span class="str">"password"</span>)
            )
        <span class="kw">if not</span> update_data:
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=<span class="str">"No fields to update"</span>,
            )
        user = <span class="kw">await</span> self.repo.update(user_id, update_data)
        <span class="kw">if not</span> user:
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=<span class="str">"User not found"</span>,
            )
        <span class="kw">return</span> user

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">delete_user</span>(self, user_id: <span class="type">str</span>) -&gt; <span class="type">bool</span>:
        deleted = <span class="kw">await</span> self.repo.delete(user_id)
        <span class="kw">if not</span> deleted:
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=<span class="str">"User not found"</span>,
            )
        <span class="kw">return</span> <span class="kw">True</span>

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">authenticate</span>(
        self, email: <span class="type">str</span>, password: <span class="type">str</span>
    ) -&gt; <span class="type">dict</span>:
        user = <span class="kw">await</span> self.repo.get_by_email(email)
        <span class="kw">if not</span> user <span class="kw">or not</span> verify_password(password, user.hashed_password):
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=<span class="str">"Incorrect email or password"</span>,
            )
        <span class="kw">if not</span> user.is_active:
            <span class="kw">raise</span> HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=<span class="str">"Account is disabled"</span>,
            )
        <span class="kw">return</span> {
            <span class="str">"access_token"</span>: create_access_token(user.id),
            <span class="str">"refresh_token"</span>: create_refresh_token(user.id),
            <span class="str">"token_type"</span>: <span class="str">"bearer"</span>,
        }</div>
</div>

<!-- ==================== 7. FASTAPI ROUTER ==================== -->
<h2 class="animate-in">7. FastAPI Router (RESTful Endpoints)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/routers/user.py</h3>
<p>FastAPI router menggunakan <strong>Depends()</strong> untuk dependency injection. Setiap endpoint secara otomatis terdokumentasi di OpenAPI/Swagger.</p>
<div class="code-block"><span class="cm"># app/routers/user.py</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> APIRouter, Depends, Query, status
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> AsyncSession
<span class="kw">from</span> app.database <span class="kw">import</span> get_db
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> (
    UserCreate, UserUpdate, UserResponse,
    UserListResponse, Token,
)
<span class="kw">from</span> app.services.user <span class="kw">import</span> UserService
<span class="kw">from</span> app.middleware.auth <span class="kw">import</span> (
    get_current_user, get_current_superuser,
)

router = APIRouter(prefix=<span class="str">"/api/v1"</span>, tags=[<span class="str">"users"</span>])

<span class="cm"># ---- Helper: get service ----</span>
<span class="kw">def</span> <span class="fn">get_user_service</span>(
    db: AsyncSession = Depends(get_db),
) -&gt; UserService:
    <span class="kw">return</span> UserService(db)

<span class="cm"># ---- POST /users ----</span>
<span class="cm">@</span>router.post(
    <span class="str">"/users"</span>,
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary=<span class="str">"Create a new user"</span>,
)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">create_user</span>(
    data: UserCreate,
    svc: UserService = Depends(get_user_service),
):
    user = <span class="kw">await</span> svc.create_user(data)
    <span class="kw">return</span> user

<span class="cm"># ---- GET /users ----</span>
<span class="cm">@</span>router.get(
    <span class="str">"/users"</span>,
    response_model=UserListResponse,
    summary=<span class="str">"List users with pagination"</span>,
)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">list_users</span>(
    page: <span class="type">int</span> = Query(default=<span class="num">1</span>, ge=<span class="num">1</span>),
    per_page: <span class="type">int</span> = Query(default=<span class="num">20</span>, ge=<span class="num">1</span>, le=<span class="num">100</span>),
    svc: UserService = Depends(get_user_service),
    _current_user = Depends(get_current_user),
):
    users, total = <span class="kw">await</span> svc.list_users(page, per_page)
    <span class="kw">return</span> UserListResponse(
        users=users, total=total, page=page, per_page=per_page
    )

<span class="cm"># ---- GET /users/{user_id} ----</span>
<span class="cm">@</span>router.get(
    <span class="str">"/users/{user_id}"</span>,
    response_model=UserResponse,
    summary=<span class="str">"Get user by ID"</span>,
)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">get_user</span>(
    user_id: <span class="type">str</span>,
    svc: UserService = Depends(get_user_service),
    _current_user = Depends(get_current_user),
):
    <span class="kw">return await</span> svc.get_user(user_id)

<span class="cm"># ---- PUT /users/{user_id} ----</span>
<span class="cm">@</span>router.put(
    <span class="str">"/users/{user_id}"</span>,
    response_model=UserResponse,
    summary=<span class="str">"Update user"</span>,
)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">update_user</span>(
    user_id: <span class="type">str</span>,
    data: UserUpdate,
    svc: UserService = Depends(get_user_service),
    _current_user = Depends(get_current_user),
):
    <span class="kw">return await</span> svc.update_user(user_id, data)

<span class="cm"># ---- DELETE /users/{user_id} ----</span>
<span class="cm">@</span>router.delete(
    <span class="str">"/users/{user_id}"</span>,
    status_code=status.HTTP_204_NO_CONTENT,
    summary=<span class="str">"Delete user (admin only)"</span>,
)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">delete_user</span>(
    user_id: <span class="type">str</span>,
    svc: UserService = Depends(get_user_service),
    _current_user = Depends(get_current_superuser),
):
    <span class="kw">await</span> svc.delete_user(user_id)

<span class="cm"># ---- POST /auth/login ----</span>
<span class="cm">@</span>router.post(
    <span class="str">"/auth/login"</span>,
    response_model=Token,
    summary=<span class="str">"Login and get JWT tokens"</span>,
)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">login</span>(
    email: <span class="type">str</span>,
    password: <span class="type">str</span>,
    svc: UserService = Depends(get_user_service),
):
    <span class="kw">return await</span> svc.authenticate(email, password)</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">RESTful API Endpoints Summary</h3>
<div class="table-wrapper">
<table>
<tr><th>Method</th><th>Endpoint</th><th>Auth</th><th>Description</th></tr>
<tr><td><span class="badge badge-green">POST</span></td><td>/api/v1/users</td><td>None</td><td>Register user baru</td></tr>
<tr><td><span class="badge badge-blue">GET</span></td><td>/api/v1/users</td><td>JWT</td><td>List users (paginated)</td></tr>
<tr><td><span class="badge badge-blue">GET</span></td><td>/api/v1/users/{id}</td><td>JWT</td><td>Get user detail</td></tr>
<tr><td><span class="badge badge-yellow">PUT</span></td><td>/api/v1/users/{id}</td><td>JWT</td><td>Update user data</td></tr>
<tr><td><span class="badge badge-red">DELETE</span></td><td>/api/v1/users/{id}</td><td>Admin</td><td>Delete user</td></tr>
<tr><td><span class="badge badge-green">POST</span></td><td>/api/v1/auth/login</td><td>None</td><td>Login, get tokens</td></tr>
</table>
</div>
</div>

<!-- ==================== 8. MAIN APP ==================== -->
<h2 class="animate-in">8. FastAPI Main Application</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">app/main.py &mdash; Application Entry</h3>
<p>Main entry point yang merangkai semua komponen: CORS middleware, rate limiting, routers, dan exception handlers.</p>
<div class="code-block"><span class="cm"># app/main.py</span>
<span class="kw">from</span> contextlib <span class="kw">import</span> asynccontextmanager
<span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI, Request
<span class="kw">from</span> fastapi.middleware.cors <span class="kw">import</span> CORSMiddleware
<span class="kw">from</span> fastapi.responses <span class="kw">import</span> JSONResponse
<span class="kw">from</span> slowapi <span class="kw">import</span> Limiter, _rate_limit_exceeded_handler
<span class="kw">from</span> slowapi.util <span class="kw">import</span> get_remote_address
<span class="kw">from</span> slowapi.errors <span class="kw">import</span> RateLimitExceeded
<span class="kw">from</span> app.config <span class="kw">import</span> get_settings
<span class="kw">from</span> app.database <span class="kw">import</span> engine
<span class="kw">from</span> app.routers <span class="kw">import</span> user <span class="kw">as</span> user_router

settings = get_settings()

<span class="cm"># Rate limiter</span>
limiter = Limiter(key_func=get_remote_address)

<span class="cm"># Lifespan: startup/shutdown events</span>
<span class="cm">@</span><span class="fn">asynccontextmanager</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">lifespan</span>(app: FastAPI):
    <span class="cm"># Startup</span>
    <span class="kw">yield</span>
    <span class="cm"># Shutdown</span>
    <span class="kw">await</span> engine.dispose()

<span class="cm"># Create FastAPI app</span>
app = FastAPI(
    title=settings.APP_NAME,
    version=<span class="str">"1.0.0"</span>,
    docs_url=<span class="str">"/docs"</span>,       <span class="cm"># Swagger UI</span>
    redoc_url=<span class="str">"/redoc"</span>,     <span class="cm"># ReDoc</span>
    lifespan=lifespan,
)

<span class="cm"># ---- Middleware ----</span>
<span class="cm"># CORS</span>
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=<span class="kw">True</span>,
    allow_methods=[<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>],
    allow_headers=[<span class="str">"Authorization"</span>, <span class="str">"Content-Type"</span>],
)

<span class="cm"># Rate limiting</span>
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

<span class="cm"># ---- Routers ----</span>
app.include_router(user_router.router)

<span class="cm"># ---- Health Check ----</span>
<span class="cm">@</span>app.get(<span class="str">"/health"</span>)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">health_check</span>():
    <span class="kw">return</span> {<span class="str">"status"</span>: <span class="str">"healthy"</span>}

<span class="cm"># ---- Global Exception Handler ----</span>
<span class="cm">@</span>app.exception_handler(Exception)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">global_exception_handler</span>(request: Request, exc: Exception):
    <span class="kw">return</span> JSONResponse(
        status_code=<span class="num">500</span>,
        content={<span class="str">"detail"</span>: <span class="str">"Internal server error"</span>},
    )</div>
<div class="info-box">
<strong>Swagger UI:</strong> FastAPI secara otomatis menghasilkan dokumentasi API di <code>/docs</code> (Swagger UI) dan <code>/redoc</code> (ReDoc). Semua endpoint, schemas, dan response codes terdokumentasi dari type annotations.
</div>
</div>

<!-- ==================== 9. gRPC ==================== -->
<h2 class="animate-in">9. gRPC CRUD Implementation</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Proto File &mdash; app/proto/user.proto</h3>
<p>Protocol Buffers mendefinisikan service interface dan message format secara language-neutral. gRPC menggunakan HTTP/2 untuk komunikasi yang lebih efisien dibanding REST.</p>
<div class="code-block"><span class="cm">// app/proto/user.proto</span>
syntax = <span class="str">"proto3"</span>;

package user;

<span class="cm">// Service definition</span>
<span class="kw">service</span> <span class="fn">UserService</span> {
    <span class="kw">rpc</span> <span class="fn">CreateUser</span> (CreateUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">GetUser</span> (GetUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">ListUsers</span> (ListUsersRequest) <span class="kw">returns</span> (ListUsersResponse);
    <span class="kw">rpc</span> <span class="fn">UpdateUser</span> (UpdateUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">DeleteUser</span> (DeleteUserRequest) <span class="kw">returns</span> (DeleteUserResponse);
}

<span class="cm">// Messages</span>
<span class="kw">message</span> <span class="fn">CreateUserRequest</span> {
    <span class="type">string</span> email = <span class="num">1</span>;
    <span class="type">string</span> username = <span class="num">2</span>;
    <span class="type">string</span> password = <span class="num">3</span>;
    <span class="type">string</span> full_name = <span class="num">4</span>;
}

<span class="kw">message</span> <span class="fn">GetUserRequest</span> {
    <span class="type">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> <span class="fn">ListUsersRequest</span> {
    <span class="type">int32</span> page = <span class="num">1</span>;
    <span class="type">int32</span> per_page = <span class="num">2</span>;
}

<span class="kw">message</span> <span class="fn">UpdateUserRequest</span> {
    <span class="type">string</span> id = <span class="num">1</span>;
    <span class="type">string</span> email = <span class="num">2</span>;
    <span class="type">string</span> username = <span class="num">3</span>;
    <span class="type">string</span> full_name = <span class="num">4</span>;
    <span class="type">string</span> password = <span class="num">5</span>;
}

<span class="kw">message</span> <span class="fn">DeleteUserRequest</span> {
    <span class="type">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> <span class="fn">UserResponse</span> {
    <span class="type">string</span> id = <span class="num">1</span>;
    <span class="type">string</span> email = <span class="num">2</span>;
    <span class="type">string</span> username = <span class="num">3</span>;
    <span class="type">string</span> full_name = <span class="num">4</span>;
    <span class="type">bool</span> is_active = <span class="num">5</span>;
    <span class="type">string</span> created_at = <span class="num">6</span>;
}

<span class="kw">message</span> <span class="fn">ListUsersResponse</span> {
    <span class="kw">repeated</span> UserResponse users = <span class="num">1</span>;
    <span class="type">int32</span> total = <span class="num">2</span>;
    <span class="type">int32</span> page = <span class="num">3</span>;
    <span class="type">int32</span> per_page = <span class="num">4</span>;
}

<span class="kw">message</span> <span class="fn">DeleteUserResponse</span> {
    <span class="type">bool</span> success = <span class="num">1</span>;
    <span class="type">string</span> message = <span class="num">2</span>;
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Generate Python Code dari Proto</h3>
<div class="code-block"><span class="cm"># Generate Python gRPC stubs</span>
python -m grpc_tools.protoc \
    -I app/proto \
    --python_out=app/proto \
    --grpc_python_out=app/proto \
    app/proto/user.proto

<span class="cm"># Ini akan menghasilkan:</span>
<span class="cm"># app/proto/user_pb2.py        (message classes)</span>
<span class="cm"># app/proto/user_pb2_grpc.py   (service stubs)</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">gRPC Servicer Implementation</h3>
<p>Servicer mengimplementasikan interface yang didefinisikan di proto file. Ini mirip dengan FastAPI router, tapi menggunakan Protocol Buffers alih-alih JSON.</p>
<div class="code-block"><span class="cm"># app/grpc_server.py</span>
<span class="kw">import</span> grpc
<span class="kw">from</span> concurrent <span class="kw">import</span> futures
<span class="kw">from</span> app.proto <span class="kw">import</span> user_pb2, user_pb2_grpc
<span class="kw">from</span> app.database <span class="kw">import</span> async_session
<span class="kw">from</span> app.services.user <span class="kw">import</span> UserService
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> UserCreate, UserUpdate
<span class="kw">import</span> asyncio

<span class="kw">class</span> <span class="fn">UserServicer</span>(user_pb2_grpc.UserServiceServicer):
    <span class="kw">def</span> <span class="fn">_run_async</span>(self, coro):
        <span class="cm"># Bridge async/sync for grpcio</span>
        loop = asyncio.new_event_loop()
        <span class="kw">try</span>:
            <span class="kw">return</span> loop.run_until_complete(coro)
        <span class="kw">finally</span>:
            loop.close()

    <span class="kw">def</span> <span class="fn">_user_to_proto</span>(self, user) -&gt; user_pb2.UserResponse:
        <span class="kw">return</span> user_pb2.UserResponse(
            id=user.id,
            email=user.email,
            username=user.username,
            full_name=user.full_name <span class="kw">or</span> <span class="str">""</span>,
            is_active=user.is_active,
            created_at=user.created_at.isoformat(),
        )

    <span class="kw">def</span> <span class="fn">CreateUser</span>(self, request, context):
        <span class="kw">async def</span> <span class="fn">_create</span>():
            <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
                svc = UserService(session)
                data = UserCreate(
                    email=request.email,
                    username=request.username,
                    password=request.password,
                    full_name=request.full_name <span class="kw">or</span> <span class="kw">None</span>,
                )
                user = <span class="kw">await</span> svc.create_user(data)
                <span class="kw">await</span> session.commit()
                <span class="kw">return</span> self._user_to_proto(user)
        <span class="kw">try</span>:
            <span class="kw">return</span> self._run_async(_create())
        <span class="kw">except</span> Exception <span class="kw">as</span> e:
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(<span class="fn">str</span>(e))
            <span class="kw">return</span> user_pb2.UserResponse()

    <span class="kw">def</span> <span class="fn">GetUser</span>(self, request, context):
        <span class="kw">async def</span> <span class="fn">_get</span>():
            <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
                svc = UserService(session)
                user = <span class="kw">await</span> svc.get_user(request.id)
                <span class="kw">return</span> self._user_to_proto(user)
        <span class="kw">try</span>:
            <span class="kw">return</span> self._run_async(_get())
        <span class="kw">except</span> Exception <span class="kw">as</span> e:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details(<span class="str">"User not found"</span>)
            <span class="kw">return</span> user_pb2.UserResponse()

    <span class="kw">def</span> <span class="fn">ListUsers</span>(self, request, context):
        <span class="kw">async def</span> <span class="fn">_list</span>():
            <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
                svc = UserService(session)
                users, total = <span class="kw">await</span> svc.list_users(
                    page=request.page, per_page=request.per_page
                )
                <span class="kw">return</span> user_pb2.ListUsersResponse(
                    users=[self._user_to_proto(u) <span class="kw">for</span> u <span class="kw">in</span> users],
                    total=total,
                    page=request.page,
                    per_page=request.per_page,
                )
        <span class="kw">return</span> self._run_async(_list())

    <span class="kw">def</span> <span class="fn">UpdateUser</span>(self, request, context):
        <span class="kw">async def</span> <span class="fn">_update</span>():
            <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
                svc = UserService(session)
                data = UserUpdate(
                    email=request.email <span class="kw">or</span> <span class="kw">None</span>,
                    username=request.username <span class="kw">or</span> <span class="kw">None</span>,
                    full_name=request.full_name <span class="kw">or</span> <span class="kw">None</span>,
                    password=request.password <span class="kw">or</span> <span class="kw">None</span>,
                )
                user = <span class="kw">await</span> svc.update_user(request.id, data)
                <span class="kw">await</span> session.commit()
                <span class="kw">return</span> self._user_to_proto(user)
        <span class="kw">try</span>:
            <span class="kw">return</span> self._run_async(_update())
        <span class="kw">except</span> Exception <span class="kw">as</span> e:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details(<span class="fn">str</span>(e))
            <span class="kw">return</span> user_pb2.UserResponse()

    <span class="kw">def</span> <span class="fn">DeleteUser</span>(self, request, context):
        <span class="kw">async def</span> <span class="fn">_delete</span>():
            <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
                svc = UserService(session)
                <span class="kw">await</span> svc.delete_user(request.id)
                <span class="kw">await</span> session.commit()
                <span class="kw">return</span> user_pb2.DeleteUserResponse(
                    success=<span class="kw">True</span>, message=<span class="str">"User deleted"</span>
                )
        <span class="kw">try</span>:
            <span class="kw">return</span> self._run_async(_delete())
        <span class="kw">except</span> Exception <span class="kw">as</span> e:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details(<span class="fn">str</span>(e))
            <span class="kw">return</span> user_pb2.DeleteUserResponse(
                success=<span class="kw">False</span>, message=<span class="fn">str</span>(e)
            )

<span class="kw">def</span> <span class="fn">serve_grpc</span>(port: <span class="type">int</span> = <span class="num">50051</span>):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=<span class="num">10</span>))
    user_pb2_grpc.add_UserServiceServicer_to_server(
        UserServicer(), server
    )
    server.add_insecure_port(<span class="str">f"[::]:{port}"</span>)
    server.start()
    <span class="fn">print</span>(<span class="str">f"gRPC server listening on port {port}"</span>)
    server.wait_for_termination()

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    serve_grpc()</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Async gRPC dengan grpclib</h3>
<p><strong>grpclib</strong> mendukung async secara native, cocok untuk integrasi dengan async SQLAlchemy tanpa bridge sync/async.</p>
<div class="code-block"><span class="cm"># app/grpc_async_server.py (menggunakan grpclib)</span>
<span class="kw">import</span> asyncio
<span class="kw">from</span> grpclib.server <span class="kw">import</span> Server
<span class="kw">from</span> grpclib.utils <span class="kw">import</span> graceful_exit
<span class="kw">from</span> app.proto.user_grpc <span class="kw">import</span> UserServiceBase
<span class="kw">from</span> app.proto <span class="kw">import</span> user_pb2
<span class="kw">from</span> app.database <span class="kw">import</span> async_session
<span class="kw">from</span> app.services.user <span class="kw">import</span> UserService
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> UserCreate

<span class="kw">class</span> <span class="fn">AsyncUserServicer</span>(UserServiceBase):

    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">CreateUser</span>(self, stream):
        request = <span class="kw">await</span> stream.recv_message()
        <span class="kw">async with</span> async_session() <span class="kw">as</span> session:
            svc = UserService(session)
            data = UserCreate(
                email=request.email,
                username=request.username,
                password=request.password,
                full_name=request.full_name <span class="kw">or</span> <span class="kw">None</span>,
            )
            user = <span class="kw">await</span> svc.create_user(data)
            <span class="kw">await</span> session.commit()
            <span class="kw">await</span> stream.send_message(
                user_pb2.UserResponse(
                    id=user.id,
                    email=user.email,
                    username=user.username,
                    full_name=user.full_name <span class="kw">or</span> <span class="str">""</span>,
                    is_active=user.is_active,
                    created_at=user.created_at.isoformat(),
                )
            )

    <span class="cm"># ... other methods follow the same async pattern</span>

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">main</span>():
    server = Server([AsyncUserServicer()])
    <span class="kw">with</span> graceful_exit([server]):
        <span class="kw">await</span> server.start(<span class="str">"0.0.0.0"</span>, <span class="num">50051</span>)
        <span class="fn">print</span>(<span class="str">"Async gRPC server on :50051"</span>)
        <span class="kw">await</span> server.wait_closed()

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    asyncio.run(main())</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">gRPC Client Example</h3>
<div class="code-block"><span class="cm"># client.py</span>
<span class="kw">import</span> grpc
<span class="kw">from</span> app.proto <span class="kw">import</span> user_pb2, user_pb2_grpc

<span class="kw">def</span> <span class="fn">run_client</span>():
    channel = grpc.insecure_channel(<span class="str">"localhost:50051"</span>)
    stub = user_pb2_grpc.UserServiceStub(channel)

    <span class="cm"># Create user</span>
    response = stub.CreateUser(user_pb2.CreateUserRequest(
        email=<span class="str">"alice@example.com"</span>,
        username=<span class="str">"alice"</span>,
        password=<span class="str">"SecurePass123"</span>,
        full_name=<span class="str">"Alice Wonderland"</span>,
    ))
    <span class="fn">print</span>(<span class="str">f"Created user: {response.id}"</span>)

    <span class="cm"># Get user</span>
    user = stub.GetUser(user_pb2.GetUserRequest(id=response.id))
    <span class="fn">print</span>(<span class="str">f"Got user: {user.username} ({user.email})"</span>)

    <span class="cm"># List users</span>
    users = stub.ListUsers(user_pb2.ListUsersRequest(
        page=<span class="num">1</span>, per_page=<span class="num">10</span>
    ))
    <span class="fn">print</span>(<span class="str">f"Total users: {users.total}"</span>)
    <span class="kw">for</span> u <span class="kw">in</span> users.users:
        <span class="fn">print</span>(<span class="str">f"  - {u.username}: {u.email}"</span>)

    <span class="cm"># Update user</span>
    updated = stub.UpdateUser(user_pb2.UpdateUserRequest(
        id=response.id,
        full_name=<span class="str">"Alice Updated"</span>,
    ))
    <span class="fn">print</span>(<span class="str">f"Updated: {updated.full_name}"</span>)

    <span class="cm"># Delete user</span>
    result = stub.DeleteUser(user_pb2.DeleteUserRequest(id=response.id))
    <span class="fn">print</span>(<span class="str">f"Deleted: {result.success} - {result.message}"</span>)

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    run_client()</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">REST vs gRPC Comparison</h3>
<div class="table-wrapper">
<table>
<tr><th>Aspek</th><th>REST (FastAPI)</th><th>gRPC</th></tr>
<tr><td>Protocol</td><td>HTTP/1.1 atau HTTP/2</td><td>HTTP/2 (wajib)</td></tr>
<tr><td>Format Data</td><td>JSON (text)</td><td>Protocol Buffers (binary)</td></tr>
<tr><td>Performa</td><td>Baik</td><td><span class="badge badge-green">Sangat baik (5-10x)</span></td></tr>
<tr><td>Streaming</td><td>SSE, WebSocket</td><td><span class="badge badge-green">Bidirectional native</span></td></tr>
<tr><td>Browser Support</td><td><span class="badge badge-green">Langsung</span></td><td>Perlu grpc-web proxy</td></tr>
<tr><td>Code Generation</td><td>Manual / OpenAPI</td><td><span class="badge badge-green">Otomatis dari .proto</span></td></tr>
<tr><td>Debugging</td><td><span class="badge badge-green">Mudah (JSON)</span></td><td>Perlu tools khusus</td></tr>
<tr><td>Documentation</td><td><span class="badge badge-green">Swagger/OpenAPI</span></td><td>.proto file</td></tr>
<tr><td>Use Case</td><td>Public API, web frontend</td><td>Internal microservices</td></tr>
</table>
</div>
<div class="info-box">
<strong>Kapan pakai gRPC?</strong> Gunakan gRPC untuk komunikasi antar microservice internal di mana performa kritis. Gunakan REST/FastAPI untuk public-facing API yang akan diakses browser atau third-party.
</div>
</div>

<!-- ==================== 10. SECURITY BEST PRACTICES ==================== -->
<h2 class="animate-in">10. Security Best Practices</h2>

<div class="card animate-in">
<h3 style="color:var(--red)">OWASP API Security Top 10 &mdash; Coverage</h3>
<div class="table-wrapper">
<table>
<tr><th>OWASP Risk</th><th>Mitigasi</th><th>Implementasi</th></tr>
<tr><td>API1: Broken Object Level Auth</td><td>Cek ownership di service layer</td><td>get_current_user + ownership check</td></tr>
<tr><td>API2: Broken Authentication</td><td>JWT + bcrypt + rate limiting</td><td>passlib + python-jose + slowapi</td></tr>
<tr><td>API3: Excessive Data Exposure</td><td>Response schema filtering</td><td>Pydantic UserResponse (no password)</td></tr>
<tr><td>API4: Lack of Resources</td><td>Rate limiting + pagination</td><td>slowapi + Query(le=100)</td></tr>
<tr><td>API5: Broken Function Level Auth</td><td>Role-based access</td><td>get_current_superuser dependency</td></tr>
<tr><td>API6: Mass Assignment</td><td>Explicit field definitions</td><td>Pydantic UserUpdate schema</td></tr>
<tr><td>API7: Security Misconfiguration</td><td>Strict CORS + env config</td><td>CORSMiddleware + pydantic-settings</td></tr>
<tr><td>API8: Injection</td><td>ORM + parameterized queries</td><td>SQLAlchemy (auto-parameterized)</td></tr>
<tr><td>API9: Improper Assets Management</td><td>API versioning</td><td>/api/v1/ prefix</td></tr>
<tr><td>API10: Insufficient Logging</td><td>Structured logging</td><td>Python logging + middleware</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Password Hashing &mdash; bcrypt</h3>
<p>Jangan pernah simpan password plaintext. <strong>bcrypt</strong> secara otomatis menambahkan salt dan menggunakan adaptive hashing (cost factor dapat ditingkatkan seiring waktu).</p>
<div class="code-block"><span class="cm"># Password hashing flow</span>
<span class="kw">from</span> passlib.context <span class="kw">import</span> CryptContext

pwd_ctx = CryptContext(
    schemes=[<span class="str">"bcrypt"</span>],
    deprecated=<span class="str">"auto"</span>,
    bcrypt__rounds=<span class="num">12</span>,  <span class="cm"># Cost factor (default: 12)</span>
)

<span class="cm"># Register: hash password</span>
hashed = pwd_ctx.hash(<span class="str">"MySecurePassword123"</span>)
<span class="cm"># Result: "$2b$12$LJ3m4ys..."</span>
<span class="cm">#          ^   ^   ^</span>
<span class="cm">#          |   |   salt + hash</span>
<span class="cm">#          |   cost factor</span>
<span class="cm">#          algorithm (2b = bcrypt)</span>

<span class="cm"># Login: verify password</span>
is_valid = pwd_ctx.verify(<span class="str">"MySecurePassword123"</span>, hashed)  <span class="cm"># True</span>
is_valid = pwd_ctx.verify(<span class="str">"wrong_password"</span>, hashed)      <span class="cm"># False</span>

<span class="cm"># Auto-upgrade: jika cost factor berubah, hash otomatis di-update</span>
needs_update = pwd_ctx.needs_update(hashed)  <span class="cm"># True jika rounds lama</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">JWT Access &amp; Refresh Token Flow</h3>
<div class="code-block"><span class="cm"># JWT Token Flow</span>
<span class="cm">#</span>
<span class="cm"># 1. Login: POST /api/v1/auth/login</span>
<span class="cm">#    Request:  { email, password }</span>
<span class="cm">#    Response: { access_token, refresh_token }</span>
<span class="cm">#</span>
<span class="cm"># 2. Access API: GET /api/v1/users</span>
<span class="cm">#    Header: Authorization: Bearer &lt;access_token&gt;</span>
<span class="cm">#    access_token expires in 30 minutes</span>
<span class="cm">#</span>
<span class="cm"># 3. Refresh: POST /api/v1/auth/refresh</span>
<span class="cm">#    Body: { refresh_token }</span>
<span class="cm">#    Response: { access_token (new), refresh_token (new) }</span>
<span class="cm">#    refresh_token expires in 7 days</span>

<span class="cm"># Token structure (JWT payload)</span>
{
    <span class="str">"sub"</span>: <span class="str">"user-uuid-here"</span>,    <span class="cm"># Subject (user ID)</span>
    <span class="str">"exp"</span>: <span class="num">1700000000</span>,           <span class="cm"># Expiration timestamp</span>
    <span class="str">"type"</span>: <span class="str">"access"</span>              <span class="cm"># Token type (access/refresh)</span>
}

<span class="cm"># Security rules:</span>
<span class="cm"># - Access token: short-lived (30 min), used for API calls</span>
<span class="cm"># - Refresh token: long-lived (7 days), used only to get new access token</span>
<span class="cm"># - Never send refresh token in Authorization header</span>
<span class="cm"># - Store refresh token in httpOnly cookie (browser) or secure storage</span>
<span class="cm"># - Rotate refresh token on every use (prevent token replay)</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">CORS Configuration</h3>
<div class="code-block"><span class="cm"># CORS - Cross-Origin Resource Sharing</span>
<span class="cm"># Kontrol domain mana yang boleh mengakses API</span>

app.add_middleware(
    CORSMiddleware,
    <span class="cm"># JANGAN gunakan allow_origins=["*"] di production!</span>
    allow_origins=[
        <span class="str">"https://myapp.com"</span>,
        <span class="str">"https://admin.myapp.com"</span>,
    ],
    allow_credentials=<span class="kw">True</span>,
    <span class="cm"># Batasi methods yang diizinkan</span>
    allow_methods=[<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>],
    <span class="cm"># Batasi headers yang diizinkan</span>
    allow_headers=[<span class="str">"Authorization"</span>, <span class="str">"Content-Type"</span>],
    <span class="cm"># Cache preflight response (seconds)</span>
    max_age=<span class="num">600</span>,
)</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Rate Limiting dengan slowapi</h3>
<div class="code-block"><span class="cm"># Rate limiting per endpoint</span>
<span class="kw">from</span> slowapi <span class="kw">import</span> Limiter
<span class="kw">from</span> slowapi.util <span class="kw">import</span> get_remote_address

limiter = Limiter(key_func=get_remote_address)

<span class="cm">@</span>app.get(<span class="str">"/api/v1/users"</span>)
<span class="cm">@</span>limiter.limit(<span class="str">"100/minute"</span>)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">list_users</span>(request: Request):
    ...

<span class="cm"># Login endpoint - lebih ketat</span>
<span class="cm">@</span>app.post(<span class="str">"/api/v1/auth/login"</span>)
<span class="cm">@</span>limiter.limit(<span class="str">"5/minute"</span>)  <span class="cm"># Hanya 5 attempt per menit</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">login</span>(request: Request):
    ...

<span class="cm"># Rate limit strategies:</span>
<span class="cm"># "100/minute"   - 100 requests per menit</span>
<span class="cm"># "10/second"    - 10 requests per detik</span>
<span class="cm"># "1000/hour"    - 1000 requests per jam</span>
<span class="cm"># "5/minute;100/hour" - Combined limits</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--red)">Security Checklist</h3>
<div class="code-block"><span class="cm"># Production Security Checklist</span>

<span class="cm"># [x] Password hashing (bcrypt, cost factor &gt;= 12)</span>
<span class="cm"># [x] JWT tokens (access + refresh, short expiry)</span>
<span class="cm"># [x] Input validation (Pydantic auto-validation)</span>
<span class="cm"># [x] SQL injection prevention (SQLAlchemy ORM)</span>
<span class="cm"># [x] CORS (explicit origins, no wildcard)</span>
<span class="cm"># [x] Rate limiting (slowapi)</span>
<span class="cm"># [x] Environment variables (.env, not hardcoded)</span>
<span class="cm"># [x] Response filtering (Pydantic excludes sensitive fields)</span>
<span class="cm"># [x] Role-based access control (user vs superuser)</span>
<span class="cm"># [x] HTTPS (TLS termination at reverse proxy)</span>
<span class="cm"># [x] No debug mode in production (DEBUG=false)</span>
<span class="cm"># [x] Global exception handler (no stack traces leaked)</span>
<span class="cm"># [x] UUID primary keys (not sequential integers)</span>
<span class="cm"># [x] Connection pooling (prevent connection exhaustion)</span>

<span class="cm"># Additional (not covered here):</span>
<span class="cm"># [ ] API key management for service-to-service</span>
<span class="cm"># [ ] Request ID tracing (correlation ID)</span>
<span class="cm"># [ ] Content Security Policy headers</span>
<span class="cm"># [ ] Dependency vulnerability scanning (pip-audit)</span></div>
</div>

<!-- ==================== 11. TESTING ==================== -->
<h2 class="animate-in">11. Testing</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">tests/conftest.py &mdash; Shared Fixtures</h3>
<p>Menggunakan <strong>pytest-asyncio</strong> untuk async test support dan <strong>httpx.AsyncClient</strong> untuk testing FastAPI endpoints tanpa server.</p>
<div class="code-block"><span class="cm"># tests/conftest.py</span>
<span class="kw">import</span> pytest
<span class="kw">import</span> pytest_asyncio
<span class="kw">from</span> httpx <span class="kw">import</span> AsyncClient, ASGITransport
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> (
    create_async_engine, async_sessionmaker, AsyncSession,
)
<span class="kw">from</span> app.main <span class="kw">import</span> app
<span class="kw">from</span> app.database <span class="kw">import</span> Base, get_db
<span class="kw">from</span> app.middleware.auth <span class="kw">import</span> hash_password

<span class="cm"># Test database (SQLite async for speed)</span>
TEST_DB_URL = <span class="str">"sqlite+aiosqlite:///./test.db"</span>

test_engine = create_async_engine(TEST_DB_URL, echo=<span class="kw">False</span>)
TestSession = async_sessionmaker(
    test_engine, class_=AsyncSession, expire_on_commit=<span class="kw">False</span>
)

<span class="cm">@</span><span class="fn">pytest_asyncio.fixture</span>(autouse=<span class="kw">True</span>)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">setup_db</span>():
    <span class="cm"># Create tables before each test</span>
    <span class="kw">async with</span> test_engine.begin() <span class="kw">as</span> conn:
        <span class="kw">await</span> conn.run_sync(Base.metadata.create_all)
    <span class="kw">yield</span>
    <span class="cm"># Drop tables after each test</span>
    <span class="kw">async with</span> test_engine.begin() <span class="kw">as</span> conn:
        <span class="kw">await</span> conn.run_sync(Base.metadata.drop_all)

<span class="cm">@</span><span class="fn">pytest_asyncio.fixture</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">db_session</span>():
    <span class="kw">async with</span> TestSession() <span class="kw">as</span> session:
        <span class="kw">yield</span> session

<span class="cm">@</span><span class="fn">pytest_asyncio.fixture</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">client</span>(db_session):
    <span class="cm"># Override dependency to use test database</span>
    <span class="kw">async</span> <span class="kw">def</span> <span class="fn">override_get_db</span>():
        <span class="kw">yield</span> db_session

    app.dependency_overrides[get_db] = override_get_db
    transport = ASGITransport(app=app)
    <span class="kw">async with</span> AsyncClient(
        transport=transport,
        base_url=<span class="str">"http://test"</span>,
    ) <span class="kw">as</span> ac:
        <span class="kw">yield</span> ac
    app.dependency_overrides.clear()

<span class="cm">@</span><span class="fn">pytest_asyncio.fixture</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_user</span>(db_session):
    <span class="kw">from</span> app.models.user <span class="kw">import</span> User
    user = User(
        email=<span class="str">"test@example.com"</span>,
        username=<span class="str">"testuser"</span>,
        hashed_password=hash_password(<span class="str">"TestPass123"</span>),
        full_name=<span class="str">"Test User"</span>,
    )
    db_session.add(user)
    <span class="kw">await</span> db_session.commit()
    <span class="kw">await</span> db_session.refresh(user)
    <span class="kw">return</span> user

<span class="cm">@</span><span class="fn">pytest_asyncio.fixture</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">auth_headers</span>(client, test_user):
    response = <span class="kw">await</span> client.post(<span class="str">"/api/v1/auth/login"</span>, json={
        <span class="str">"email"</span>: <span class="str">"test@example.com"</span>,
        <span class="str">"password"</span>: <span class="str">"TestPass123"</span>,
    })
    token = response.json()[<span class="str">"access_token"</span>]
    <span class="kw">return</span> {<span class="str">"Authorization"</span>: <span class="str">f"Bearer {token}"</span>}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">tests/test_user.py &mdash; API Tests</h3>
<div class="code-block"><span class="cm"># tests/test_user.py</span>
<span class="kw">import</span> pytest
<span class="kw">from</span> httpx <span class="kw">import</span> AsyncClient

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_create_user</span>(client: AsyncClient):
    response = <span class="kw">await</span> client.post(<span class="str">"/api/v1/users"</span>, json={
        <span class="str">"email"</span>: <span class="str">"alice@example.com"</span>,
        <span class="str">"username"</span>: <span class="str">"alice"</span>,
        <span class="str">"password"</span>: <span class="str">"SecurePass123"</span>,
        <span class="str">"full_name"</span>: <span class="str">"Alice Wonderland"</span>,
    })
    <span class="kw">assert</span> response.status_code == <span class="num">201</span>
    data = response.json()
    <span class="kw">assert</span> data[<span class="str">"email"</span>] == <span class="str">"alice@example.com"</span>
    <span class="kw">assert</span> data[<span class="str">"username"</span>] == <span class="str">"alice"</span>
    <span class="kw">assert</span> <span class="str">"password"</span> <span class="kw">not in</span> data  <span class="cm"># Password must not leak!</span>
    <span class="kw">assert</span> <span class="str">"id"</span> <span class="kw">in</span> data

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_create_user_weak_password</span>(client: AsyncClient):
    response = <span class="kw">await</span> client.post(<span class="str">"/api/v1/users"</span>, json={
        <span class="str">"email"</span>: <span class="str">"bob@example.com"</span>,
        <span class="str">"username"</span>: <span class="str">"bob"</span>,
        <span class="str">"password"</span>: <span class="str">"weak"</span>,  <span class="cm"># Too short, no uppercase/digit</span>
    })
    <span class="kw">assert</span> response.status_code == <span class="num">422</span>  <span class="cm"># Validation error</span>

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_duplicate_email</span>(client: AsyncClient, test_user):
    response = <span class="kw">await</span> client.post(<span class="str">"/api/v1/users"</span>, json={
        <span class="str">"email"</span>: <span class="str">"test@example.com"</span>,  <span class="cm"># Already exists</span>
        <span class="str">"username"</span>: <span class="str">"newuser"</span>,
        <span class="str">"password"</span>: <span class="str">"SecurePass123"</span>,
    })
    <span class="kw">assert</span> response.status_code == <span class="num">409</span>

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_login</span>(client: AsyncClient, test_user):
    response = <span class="kw">await</span> client.post(<span class="str">"/api/v1/auth/login"</span>, json={
        <span class="str">"email"</span>: <span class="str">"test@example.com"</span>,
        <span class="str">"password"</span>: <span class="str">"TestPass123"</span>,
    })
    <span class="kw">assert</span> response.status_code == <span class="num">200</span>
    data = response.json()
    <span class="kw">assert</span> <span class="str">"access_token"</span> <span class="kw">in</span> data
    <span class="kw">assert</span> <span class="str">"refresh_token"</span> <span class="kw">in</span> data

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_get_user_authenticated</span>(
    client: AsyncClient, test_user, auth_headers
):
    response = <span class="kw">await</span> client.get(
        <span class="str">f"/api/v1/users/{test_user.id}"</span>,
        headers=auth_headers,
    )
    <span class="kw">assert</span> response.status_code == <span class="num">200</span>
    <span class="kw">assert</span> response.json()[<span class="str">"email"</span>] == <span class="str">"test@example.com"</span>

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_get_user_unauthenticated</span>(client: AsyncClient, test_user):
    response = <span class="kw">await</span> client.get(<span class="str">f"/api/v1/users/{test_user.id}"</span>)
    <span class="kw">assert</span> response.status_code == <span class="num">401</span>  <span class="cm"># No token</span>

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_update_user</span>(
    client: AsyncClient, test_user, auth_headers
):
    response = <span class="kw">await</span> client.put(
        <span class="str">f"/api/v1/users/{test_user.id}"</span>,
        headers=auth_headers,
        json={<span class="str">"full_name"</span>: <span class="str">"Updated Name"</span>},
    )
    <span class="kw">assert</span> response.status_code == <span class="num">200</span>
    <span class="kw">assert</span> response.json()[<span class="str">"full_name"</span>] == <span class="str">"Updated Name"</span>

<span class="cm">@</span><span class="fn">pytest.mark.asyncio</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">test_list_users_paginated</span>(
    client: AsyncClient, test_user, auth_headers
):
    response = <span class="kw">await</span> client.get(
        <span class="str">"/api/v1/users?page=1&amp;per_page=10"</span>,
        headers=auth_headers,
    )
    <span class="kw">assert</span> response.status_code == <span class="num">200</span>
    data = response.json()
    <span class="kw">assert</span> data[<span class="str">"total"</span>] &gt;= <span class="num">1</span>
    <span class="kw">assert</span> data[<span class="str">"page"</span>] == <span class="num">1</span>
    <span class="kw">assert</span> <span class="fn">len</span>(data[<span class="str">"users"</span>]) &gt;= <span class="num">1</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Factory Boy &mdash; Test Data Factories</h3>
<div class="code-block"><span class="cm"># tests/factories.py</span>
<span class="kw">import</span> factory
<span class="kw">from</span> app.models.user <span class="kw">import</span> User
<span class="kw">from</span> app.middleware.auth <span class="kw">import</span> hash_password

<span class="kw">class</span> <span class="fn">UserFactory</span>(factory.Factory):
    <span class="kw">class</span> <span class="fn">Meta</span>:
        model = User

    email = factory.Sequence(<span class="kw">lambda</span> n: <span class="str">f"user{n}@example.com"</span>)
    username = factory.Sequence(<span class="kw">lambda</span> n: <span class="str">f"user{n}"</span>)
    hashed_password = factory.LazyFunction(
        <span class="kw">lambda</span>: hash_password(<span class="str">"TestPass123"</span>)
    )
    full_name = factory.Faker(<span class="str">"name"</span>)
    is_active = <span class="kw">True</span>
    is_superuser = <span class="kw">False</span>

<span class="cm"># Usage in tests:</span>
<span class="cm"># user = UserFactory()                    # Single user</span>
<span class="cm"># users = UserFactory.create_batch(10)    # 10 users</span>
<span class="cm"># admin = UserFactory(is_superuser=True)  # Override field</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">Running Tests</h3>
<div class="code-block"><span class="cm"># Run all tests</span>
pytest tests/ -v

<span class="cm"># Run with coverage</span>
pytest tests/ --cov=app --cov-report=html

<span class="cm"># Run specific test</span>
pytest tests/test_user.py::test_create_user -v

<span class="cm"># Run async tests only</span>
pytest tests/ -v -k "asyncio"

<span class="cm"># pyproject.toml config for pytest</span>
[tool.pytest.ini_options]
asyncio_mode = <span class="str">"auto"</span>
testpaths = [<span class="str">"tests"</span>]
addopts = <span class="str">"-v --tb=short"</span></div>
</div>

<!-- ==================== 12. ALEMBIC MIGRATIONS ==================== -->
<h2 class="animate-in">12. Database Migrations (Alembic)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Setup &amp; Usage</h3>
<div class="code-block"><span class="cm"># Initialize alembic</span>
alembic init alembic

<span class="cm"># Edit alembic/env.py to use async engine</span>
<span class="cm"># and import your Base.metadata</span>

<span class="cm"># Generate migration</span>
alembic revision --autogenerate -m <span class="str">"create users table"</span>

<span class="cm"># Run migration</span>
alembic upgrade head

<span class="cm"># Rollback one step</span>
alembic downgrade -1

<span class="cm"># View migration history</span>
alembic history --verbose

<span class="cm"># View current revision</span>
alembic current</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">alembic/env.py (Async Version)</h3>
<div class="code-block"><span class="cm"># alembic/env.py (async support)</span>
<span class="kw">import</span> asyncio
<span class="kw">from</span> logging.config <span class="kw">import</span> fileConfig
<span class="kw">from</span> sqlalchemy <span class="kw">import</span> pool
<span class="kw">from</span> sqlalchemy.ext.asyncio <span class="kw">import</span> async_engine_from_config
<span class="kw">from</span> alembic <span class="kw">import</span> context
<span class="kw">from</span> app.database <span class="kw">import</span> Base
<span class="kw">from</span> app.config <span class="kw">import</span> get_settings

config = context.config
<span class="kw">if</span> config.config_file_name:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata

<span class="kw">def</span> <span class="fn">run_migrations_offline</span>():
    url = get_settings().DATABASE_URL
    context.configure(url=url, target_metadata=target_metadata)
    <span class="kw">with</span> context.begin_transaction():
        context.run_migrations()

<span class="kw">def</span> <span class="fn">do_run_migrations</span>(connection):
    context.configure(connection=connection, target_metadata=target_metadata)
    <span class="kw">with</span> context.begin_transaction():
        context.run_migrations()

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">run_async_migrations</span>():
    cfg = config.get_section(config.config_ini_section)
    cfg[<span class="str">"sqlalchemy.url"</span>] = get_settings().DATABASE_URL
    connectable = async_engine_from_config(
        cfg, prefix=<span class="str">"sqlalchemy."</span>, poolclass=pool.NullPool,
    )
    <span class="kw">async with</span> connectable.connect() <span class="kw">as</span> connection:
        <span class="kw">await</span> connection.run_sync(do_run_migrations)
    <span class="kw">await</span> connectable.dispose()

<span class="kw">def</span> <span class="fn">run_migrations_online</span>():
    asyncio.run(run_async_migrations())

<span class="kw">if</span> context.is_offline_mode():
    run_migrations_offline()
<span class="kw">else</span>:
    run_migrations_online()</div>
</div>

<!-- ==================== 13. DOCKER DEPLOYMENT ==================== -->
<h2 class="animate-in">13. Docker Deployment</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Dockerfile</h3>
<p>Multi-stage build untuk image yang kecil dan aman.</p>
<div class="code-block"><span class="cm"># Dockerfile</span>
<span class="kw">FROM</span> python:3.12-slim <span class="kw">AS</span> builder

<span class="cm"># Install build dependencies</span>
<span class="kw">RUN</span> apt-get update &amp;&amp; apt-get install -y --no-install-recommends \
    build-essential \
    &amp;&amp; rm -rf /var/lib/apt/lists/*

<span class="kw">WORKDIR</span> /app

<span class="cm"># Install Python dependencies</span>
<span class="kw">COPY</span> requirements.txt .
<span class="kw">RUN</span> pip install --no-cache-dir --prefix=/install -r requirements.txt

<span class="cm"># ---- Production Stage ----</span>
<span class="kw">FROM</span> python:3.12-slim

<span class="cm"># Create non-root user</span>
<span class="kw">RUN</span> groupadd -r appuser &amp;&amp; useradd -r -g appuser appuser

<span class="kw">WORKDIR</span> /app

<span class="cm"># Copy installed packages</span>
<span class="kw">COPY</span> --from=builder /install /usr/local

<span class="cm"># Copy application code</span>
<span class="kw">COPY</span> app/ ./app/
<span class="kw">COPY</span> alembic/ ./alembic/
<span class="kw">COPY</span> alembic.ini .

<span class="cm"># Switch to non-root user</span>
<span class="kw">USER</span> appuser

<span class="cm"># Expose port</span>
<span class="kw">EXPOSE</span> 8000

<span class="cm"># Health check</span>
<span class="kw">HEALTHCHECK</span> --interval=30s --timeout=10s --retries=3 \
    CMD python -c "import httpx; httpx.get('http://localhost:8000/health')"

<span class="cm"># Run with uvicorn</span>
<span class="kw">CMD</span> ["uvicorn", "app.main:app", \
     "--host", "0.0.0.0", \
     "--port", "8000", \
     "--workers", "4", \
     "--access-log"]</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">docker-compose.yml</h3>
<div class="code-block"><span class="cm"># docker-compose.yml</span>
version: <span class="str">"3.9"</span>

services:
  app:
    build: .
    ports:
      - <span class="str">"8000:8000"</span>
    environment:
      - DATABASE_URL=postgresql+asyncpg://appuser:s3cure@db:5432/myapp
      - SECRET_KEY=\${SECRET_KEY}
      - DEBUG=false
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: <span class="str">"1.0"</span>

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: s3cure
      POSTGRES_DB: myapp
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - <span class="str">"5432:5432"</span>
    healthcheck:
      test: [<span class="str">"CMD-SHELL"</span>, <span class="str">"pg_isready -U appuser -d myapp"</span>]
      interval: 10s
      timeout: 5s
      retries: 5

  grpc:
    build: .
    command: [<span class="str">"python"</span>, <span class="str">"-m"</span>, <span class="str">"app.grpc_server"</span>]
    ports:
      - <span class="str">"50051:50051"</span>
    environment:
      - DATABASE_URL=postgresql+asyncpg://appuser:s3cure@db:5432/myapp
      - SECRET_KEY=\${SECRET_KEY}
    depends_on:
      db:
        condition: service_healthy

volumes:
  pgdata:</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Deployment Commands</h3>
<div class="code-block"><span class="cm"># Build and start all services</span>
docker compose up -d --build

<span class="cm"># Run migrations</span>
docker compose exec app alembic upgrade head

<span class="cm"># View logs</span>
docker compose logs -f app

<span class="cm"># Scale API workers</span>
docker compose up -d --scale app=3

<span class="cm"># Stop all services</span>
docker compose down

<span class="cm"># Clean up (including volumes)</span>
docker compose down -v</div>
</div>

<!-- ==================== 14. ARCHITECTURE DIAGRAM ==================== -->
<h2 class="animate-in">14. Architecture Visualization</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">FastAPI Request Flow</h3>
<p>Visualisasi alur request dari client melalui semua layer hingga database dan kembali.</p>
<div style="text-align:center;margin:16px 0;">
<canvas id="canvas-crud-python-arch" width="720" height="400" style="width:100%;max-width:720px;height:400px;border-radius:8px;"></canvas>
</div>
<div style="text-align:center;margin:8px 0;">
<button id="crudPyStartBtn" class="btn" style="margin-right:8px;">Start Animation</button>
<button id="crudPyResetBtn" class="btn btn-secondary">Reset</button>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">Flow Diagram (Text)</h3>
<div class="code-block"><span class="cm"># Request Flow: POST /api/v1/users</span>

Client
  &boxv;
  &boxvr;&boxh;&boxh; HTTP Request (JSON body)
  &boxv;
<span class="fn">[CORS Middleware]</span> &boxh;&boxh; check origin allowed
  &boxv;
<span class="fn">[Rate Limiter]</span> &boxh;&boxh; check rate limit (100/min)
  &boxv;
<span class="fn">[FastAPI Router]</span>
  &boxv;&boxh;&boxh; <span class="kw">Pydantic Validation</span> &boxh;&boxh; auto-validate input
  &boxv;&boxh;&boxh; Dependency Injection (Depends)
  &boxv;
<span class="fn">[Service Layer]</span>
  &boxv;&boxh;&boxh; Business logic (check duplicates)
  &boxv;&boxh;&boxh; Password hashing (bcrypt)
  &boxv;
<span class="fn">[Repository Layer]</span>
  &boxv;&boxh;&boxh; SQLAlchemy query (parameterized)
  &boxv;
<span class="fn">[Database]</span> &boxh;&boxh; PostgreSQL
  &boxv;
  &boxvr;&boxh;&boxh; Return ORM object
  &boxv;
<span class="fn">[Pydantic Response]</span> &boxh;&boxh; serialize &amp; filter fields
  &boxv;
Client &boxh;&boxh; JSON response (no password!)</div>
</div>

<!-- ==================== 15. ADVANCED PATTERNS ==================== -->
<h2 class="animate-in">15. Advanced Patterns</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Custom Exception Handler</h3>
<div class="code-block"><span class="cm"># app/exceptions.py</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> Request
<span class="kw">from</span> fastapi.responses <span class="kw">import</span> JSONResponse

<span class="kw">class</span> <span class="fn">AppException</span>(Exception):
    <span class="kw">def</span> <span class="fn">__init__</span>(
        self,
        status_code: <span class="type">int</span>,
        detail: <span class="type">str</span>,
        error_code: <span class="type">str</span> | <span class="kw">None</span> = <span class="kw">None</span>,
    ):
        self.status_code = status_code
        self.detail = detail
        self.error_code = error_code

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">app_exception_handler</span>(
    request: Request, exc: AppException
) -&gt; JSONResponse:
    <span class="kw">return</span> JSONResponse(
        status_code=exc.status_code,
        content={
            <span class="str">"error"</span>: {
                <span class="str">"code"</span>: exc.error_code <span class="kw">or</span> <span class="str">"UNKNOWN"</span>,
                <span class="str">"message"</span>: exc.detail,
            }
        },
    )

<span class="cm"># Register in main.py:</span>
<span class="cm"># app.add_exception_handler(AppException, app_exception_handler)</span></div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">Structured Logging</h3>
<div class="code-block"><span class="cm"># app/logging_config.py</span>
<span class="kw">import</span> logging
<span class="kw">import</span> json
<span class="kw">from</span> datetime <span class="kw">import</span> datetime, timezone

<span class="kw">class</span> <span class="fn">JSONFormatter</span>(logging.Formatter):
    <span class="kw">def</span> <span class="fn">format</span>(self, record):
        log_data = {
            <span class="str">"timestamp"</span>: datetime.now(timezone.utc).isoformat(),
            <span class="str">"level"</span>: record.levelname,
            <span class="str">"message"</span>: record.getMessage(),
            <span class="str">"module"</span>: record.module,
            <span class="str">"function"</span>: record.funcName,
        }
        <span class="kw">if</span> record.exc_info:
            log_data[<span class="str">"exception"</span>] = self.formatException(record.exc_info)
        <span class="kw">return</span> json.dumps(log_data)

<span class="cm"># Usage</span>
handler = logging.StreamHandler()
handler.setFormatter(JSONFormatter())
logger = logging.getLogger(<span class="str">"app"</span>)
logger.addHandler(handler)
logger.setLevel(logging.INFO)

<span class="cm"># Middleware for request logging</span>
<span class="cm">@</span>app.middleware(<span class="str">"http"</span>)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">log_requests</span>(request: Request, call_next):
    <span class="kw">import</span> time
    start = time.perf_counter()
    response = <span class="kw">await</span> call_next(request)
    duration = time.perf_counter() - start
    logger.info(
        <span class="str">f"{request.method} {request.url.path}"</span>,
        extra={
            <span class="str">"duration_ms"</span>: <span class="fn">round</span>(duration * <span class="num">1000</span>, <span class="num">2</span>),
            <span class="str">"status"</span>: response.status_code,
        },
    )
    <span class="kw">return</span> response</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Background Tasks</h3>
<div class="code-block"><span class="cm"># FastAPI Background Tasks - for non-blocking operations</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> BackgroundTasks

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">send_welcome_email</span>(email: <span class="type">str</span>, name: <span class="type">str</span>):
    <span class="cm"># Simulate sending email</span>
    <span class="kw">import</span> asyncio
    <span class="kw">await</span> asyncio.sleep(<span class="num">2</span>)
    <span class="fn">print</span>(<span class="str">f"Welcome email sent to {email}"</span>)

<span class="cm">@</span>router.post(<span class="str">"/users"</span>, status_code=<span class="num">201</span>)
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">create_user</span>(
    data: UserCreate,
    background_tasks: BackgroundTasks,
    svc: UserService = Depends(get_user_service),
):
    user = <span class="kw">await</span> svc.create_user(data)
    <span class="cm"># Non-blocking: email sent after response</span>
    background_tasks.add_task(
        send_welcome_email, user.email, user.full_name
    )
    <span class="kw">return</span> user</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">Middleware Chain Overview</h3>
<div class="table-wrapper">
<table>
<tr><th>Order</th><th>Middleware</th><th>Purpose</th></tr>
<tr><td>1</td><td>TrustedHostMiddleware</td><td>Validate Host header</td></tr>
<tr><td>2</td><td>CORSMiddleware</td><td>Cross-origin policy</td></tr>
<tr><td>3</td><td>RateLimitMiddleware</td><td>Throttle requests</td></tr>
<tr><td>4</td><td>RequestLoggingMiddleware</td><td>Log all requests</td></tr>
<tr><td>5</td><td>AuthMiddleware</td><td>JWT verification</td></tr>
<tr><td>6</td><td>Router Handler</td><td>Business logic</td></tr>
</table>
</div>
<div class="info-box">
<strong>Middleware Order:</strong> FastAPI middleware dieksekusi dalam urutan terbalik (LIFO). Middleware yang didaftarkan terakhir akan dieksekusi pertama untuk request masuk. Pastikan CORS dan Rate Limiting didaftarkan sebelum auth.
</div>
</div>

<!-- ==================== 16. SUMMARY ==================== -->
<h2 class="animate-in">16. Ringkasan &amp; Best Practices</h2>

<div class="card-grid animate-in">
<div class="card">
<h3 style="color:var(--accent)">Architecture</h3>
<ul>
<li>Layered architecture (Router &rarr; Service &rarr; Repository)</li>
<li>Dependency injection dengan <code>Depends()</code></li>
<li>Pydantic for input/output contracts</li>
<li>Async everywhere (SQLAlchemy, FastAPI)</li>
</ul>
</div>
<div class="card">
<h3 style="color:var(--green)">Security</h3>
<ul>
<li>bcrypt password hashing (cost &gt;= 12)</li>
<li>JWT access + refresh tokens</li>
<li>Strict CORS (no wildcard)</li>
<li>Rate limiting per endpoint</li>
<li>Pydantic auto-validation</li>
</ul>
</div>
<div class="card">
<h3 style="color:var(--yellow)">Testing</h3>
<ul>
<li>pytest-asyncio for async tests</li>
<li>httpx.AsyncClient (no server needed)</li>
<li>Factory Boy for test data</li>
<li>Dependency override for test DB</li>
</ul>
</div>
<div class="card">
<h3 style="color:var(--red)">Deployment</h3>
<ul>
<li>Multi-stage Docker build</li>
<li>Non-root user in container</li>
<li>Health checks</li>
<li>Alembic migrations</li>
<li>docker-compose for orchestration</li>
</ul>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">Quick Reference &mdash; curl Commands</h3>
<div class="code-block"><span class="cm"># Register</span>
curl -X POST http://localhost:8000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@x.com","username":"alice","password":"SecurePass123"}'

<span class="cm"># Login</span>
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@x.com","password":"SecurePass123"}'

<span class="cm"># Get user (with token)</span>
curl http://localhost:8000/api/v1/users/USER_ID \
  -H "Authorization: Bearer ACCESS_TOKEN"

<span class="cm"># Update user</span>
curl -X PUT http://localhost:8000/api/v1/users/USER_ID \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Alice Updated"}'

<span class="cm"># Delete user (admin only)</span>
curl -X DELETE http://localhost:8000/api/v1/users/USER_ID \
  -H "Authorization: Bearer ADMIN_TOKEN"

<span class="cm"># Swagger docs</span>
open http://localhost:8000/docs</div>
</div>

</section>
`;

// ==================== CRUD PYTHON ANIMATIONS ====================
function initCrudPythonAnimations() {
    var dpr = window.devicePixelRatio || 1;

    function setupCanvas(id, w, h) {
        var c = document.getElementById(id);
        if (!c) return null;
        var ctx = c.getContext('2d');
        c.width = w * dpr;
        c.height = h * dpr;
        c.style.width = w + 'px';
        c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c: c, ctx: ctx, w: w, h: h };
    }

    function getStyle(prop) {
        return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
    }

    // ======================================================
    // Architecture Flow Animation
    // ======================================================
    (function initArchFlow() {
        var cv = setupCanvas('canvas-crud-python-arch', 720, 400);
        if (!cv) return;

        var ctx = cv.ctx, w = cv.w, h = cv.h;
        var animId = null;
        var running = false;
        var tick = 0;
        var currentStep = -1;
        var totalSteps = 7;
        var stepDuration = 40;

        var bg = '#0f172a';
        var text1 = '#e2e8f0';
        var text2 = '#94a3b8';
        var accent = '#38bdf8';
        var green = '#34d399';
        var yellow = '#fbbf24';
        var orange = '#fb923c';
        var red = '#f87171';
        var purple = '#a78bfa';

        var layers = [
            { label: 'Client', color: text1, x: 360, y: 30, w: 120, h: 36 },
            { label: 'CORS', color: purple, x: 360, y: 80, w: 120, h: 30 },
            { label: 'Rate Limiter', color: red, x: 360, y: 120, w: 120, h: 30 },
            { label: 'Pydantic', color: yellow, x: 360, y: 160, w: 120, h: 30 },
            { label: 'Router', color: accent, x: 360, y: 200, w: 120, h: 30 },
            { label: 'Service', color: green, x: 360, y: 248, w: 120, h: 30 },
            { label: 'Repository', color: orange, x: 360, y: 296, w: 120, h: 30 },
            { label: 'PostgreSQL', color: '#60a5fa', x: 360, y: 350, w: 120, h: 36 },
        ];

        var descriptions = [
            'HTTP Request (JSON)',
            'Check origin allowed',
            'Check rate limit',
            'Validate input data',
            'Route to handler',
            'Business logic',
            'SQL query (parameterized)',
            'Database write',
        ];

        function drawFrame() {
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            // Title
            ctx.fillStyle = text1;
            ctx.font = 'bold 14px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('FastAPI Request Flow: POST /api/v1/users', w / 2, 18);

            // Draw layers
            layers.forEach(function(layer, i) {
                var isActive = i <= currentStep;
                var isCurrent = i === currentStep;
                var lx = layer.x - layer.w / 2;
                var ly = layer.y;

                // Box
                ctx.globalAlpha = isActive ? 1 : 0.3;
                ctx.fillStyle = layer.color;
                if (isCurrent) {
                    ctx.shadowColor = layer.color;
                    ctx.shadowBlur = 16;
                }
                ctx.beginPath();
                ctx.roundRect(lx, ly, layer.w, layer.h, 6);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Label
                ctx.fillStyle = isActive ? '#000' : text2;
                ctx.font = (isCurrent ? 'bold ' : '') + '12px Inter, system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(layer.label, layer.x, ly + layer.h / 2 + 4);

                ctx.globalAlpha = 1;

                // Arrow between layers
                if (i < layers.length - 1) {
                    var nextY = layers[i + 1].y;
                    var arrowActive = i < currentStep;
                    ctx.strokeStyle = arrowActive ? green : (isActive && isCurrent ? layer.color : '#334155');
                    ctx.lineWidth = arrowActive ? 2 : 1;
                    ctx.globalAlpha = arrowActive ? 1 : 0.4;
                    ctx.beginPath();
                    ctx.moveTo(layer.x, ly + layer.h);
                    ctx.lineTo(layer.x, nextY);
                    ctx.stroke();

                    // Arrow head
                    if (arrowActive) {
                        ctx.fillStyle = green;
                        ctx.beginPath();
                        ctx.moveTo(layer.x - 4, nextY - 6);
                        ctx.lineTo(layer.x + 4, nextY - 6);
                        ctx.lineTo(layer.x, nextY);
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1;
                }
            });

            // Description for current step
            if (currentStep >= 0 && currentStep < descriptions.length) {
                ctx.fillStyle = layers[currentStep].color;
                ctx.font = '13px Inter, system-ui, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(descriptions[currentStep], 480, layers[currentStep].y + layers[currentStep].h / 2 + 4);
            }

            // Pydantic validation badges (left side)
            if (currentStep >= 3) {
                ctx.globalAlpha = 0.85;
                ctx.fillStyle = yellow;
                ctx.font = 'bold 11px Inter, system-ui, sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText('Validated', 280, 175);
                ctx.fillStyle = '#fef08a';
                ctx.font = '10px Inter, system-ui, sans-serif';
                ctx.fillText('email: EmailStr', 280, 190);
                ctx.fillText('password: min 8 chars', 280, 203);
                ctx.fillText('username: [a-zA-Z0-9_-]', 280, 216);
                ctx.globalAlpha = 1;
            }

            // Response path indicator
            if (currentStep >= totalSteps) {
                ctx.strokeStyle = accent;
                ctx.lineWidth = 2;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(layers[7].x + 70, layers[7].y + 18);
                ctx.lineTo(layers[7].x + 110, layers[7].y + 18);
                ctx.lineTo(layers[7].x + 110, layers[0].y + 18);
                ctx.lineTo(layers[0].x + 70, layers[0].y + 18);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = accent;
                ctx.font = 'bold 11px Inter, system-ui, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('Response', layers[7].x + 115, h / 2 - 10);
                ctx.fillStyle = text2;
                ctx.font = '10px Inter, system-ui, sans-serif';
                ctx.fillText('Pydantic serializes', layers[7].x + 115, h / 2 + 5);
                ctx.fillText('(password excluded)', layers[7].x + 115, h / 2 + 18);
            }

            // Async indicator
            ctx.fillStyle = text2;
            ctx.font = '10px Inter, system-ui, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('async/await  |  non-blocking  |  connection pooling', 20, h - 10);
        }

        function animate() {
            tick++;
            if (tick % stepDuration === 0) {
                currentStep++;
            }
            drawFrame();
            if (currentStep <= totalSteps && running) {
                animId = requestAnimationFrame(animate);
            } else if (currentStep > totalSteps) {
                running = false;
                drawFrame();
            }
        }

        function startAnim() {
            if (running) return;
            if (currentStep > totalSteps) resetAnim();
            running = true;
            animate();
        }

        function resetAnim() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            tick = 0;
            currentStep = -1;
            drawFrame();
        }

        var btnStart = document.getElementById('crudPyStartBtn');
        var btnReset = document.getElementById('crudPyResetBtn');
        if (btnStart) btnStart.addEventListener('click', startAnim);
        if (btnReset) btnReset.addEventListener('click', resetAnim);

        drawFrame();
    })();
}
