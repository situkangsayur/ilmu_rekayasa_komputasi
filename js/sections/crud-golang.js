// ============================================================
// GO CRUD TUTORIAL — RESTful API & gRPC with Production-Ready
// Project Structure and Security Best Practices
// ============================================================

sections['crud-golang'] = () => `
<section class="animate-in">
<h1 class="section-title animate-in">Go CRUD: RESTful API &amp; gRPC</h1>
<p class="section-subtitle animate-in">${t('Panduan komprehensif membangun CRUD production-ready di Go &mdash; Clean Architecture, REST dengan Gin, gRPC, Security, Docker, dan deployment best practices','A comprehensive guide to building production-ready CRUD in Go &mdash; Clean Architecture, REST with Gin, gRPC, Security, Docker, and deployment best practices')}</p>

<!-- ===================== 1. PROJECT STRUCTURE ===================== -->
<h2 class="animate-in">1. Production-Ready Project Structure</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">${t('Struktur Clean Architecture','Clean Architecture Structure')}</h3>
<p>${t('Struktur project Go yang production-ready mengikuti prinsip <strong>Clean Architecture</strong> dan konvensi komunitas Go. Setiap layer memiliki tanggung jawab yang jelas dan dependency hanya mengalir ke dalam (Handler &rarr; Service &rarr; Repository).','A production-ready Go project structure follows <strong>Clean Architecture</strong> principles and Go community conventions. Each layer has clear responsibilities and dependencies only flow inward (Handler &rarr; Service &rarr; Repository).')}</p>
<div class="code-block"><span class="cm">// Production-Ready Go Project Structure</span>
myapp/
&boxur;&boxh;&boxh; cmd/
&boxv;   &boxur;&boxh;&boxh; server/
&boxv;       &boxur;&boxh;&boxh; main.go           <span class="cm">// Entry point, wire dependencies</span>
&boxur;&boxh;&boxh; internal/                     <span class="cm">// Private packages (Go enforced!)</span>
&boxv;   &boxur;&boxh;&boxh; handler/              <span class="cm">// HTTP/gRPC handlers (presentation)</span>
&boxv;   &boxv;   &boxur;&boxh;&boxh; user_handler.go
&boxv;   &boxv;   &boxur;&boxh;&boxh; middleware.go
&boxv;   &boxur;&boxh;&boxh; service/              <span class="cm">// Business logic (use cases)</span>
&boxv;   &boxv;   &boxur;&boxh;&boxh; user_service.go
&boxv;   &boxur;&boxh;&boxh; repository/           <span class="cm">// Database access (data layer)</span>
&boxv;   &boxv;   &boxur;&boxh;&boxh; user_repo.go
&boxv;   &boxur;&boxh;&boxh; model/                <span class="cm">// Domain models (entities)</span>
&boxv;   &boxv;   &boxur;&boxh;&boxh; user.go
&boxv;   &boxur;&boxh;&boxh; config/               <span class="cm">// Configuration management</span>
&boxv;       &boxur;&boxh;&boxh; config.go
&boxur;&boxh;&boxh; pkg/                          <span class="cm">// Shared/public packages</span>
&boxv;   &boxur;&boxh;&boxh; validator/
&boxv;   &boxur;&boxh;&boxh; logger/
&boxur;&boxh;&boxh; api/
&boxv;   &boxur;&boxh;&boxh; proto/                <span class="cm">// gRPC .proto definitions</span>
&boxv;       &boxur;&boxh;&boxh; user.proto
&boxur;&boxh;&boxh; migrations/               <span class="cm">// SQL migration files</span>
&boxur;&boxh;&boxh; Dockerfile
&boxur;&boxh;&boxh; docker-compose.yml
&boxur;&boxh;&boxh; Makefile
&boxur;&boxh;&boxh; go.mod
&boxur;&boxh;&boxh; go.sum</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">${t('Mengapa Struktur Ini?','Why This Structure?')}</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
<div>
<h4>${t('Direktori Penting','Key Directories')}</h4>
<ul>
<li><strong>cmd/</strong> &mdash; ${t('Entry point aplikasi. Satu folder per binary yang dihasilkan. Di sini kita melakukan <em>dependency injection</em> (wiring)','Application entry point. One folder per produced binary. This is where we perform <em>dependency injection</em> (wiring)')}</li>
<li><strong>internal/</strong> &mdash; ${t('Package privat yang <em>dikunci oleh Go compiler</em>. Package lain di luar module tidak bisa meng-import path internal/. Ini enforcement access control di level bahasa','Private packages <em>locked by the Go compiler</em>. Other packages outside the module cannot import internal/ paths. This is language-level access control enforcement')}</li>
<li><strong>pkg/</strong> &mdash; ${t('Package yang boleh digunakan oleh project lain. Gunakan untuk utility yang reusable (validator, logger)','Packages that can be used by other projects. Use for reusable utilities (validator, logger)')}</li>
<li><strong>api/proto/</strong> &mdash; ${t('Definisi gRPC protobuf. Menjadi single source of truth untuk contract API','gRPC protobuf definitions. Serves as the single source of truth for API contracts')}</li>
</ul>
</div>
<div>
<h4>${t('Prinsip Clean Architecture','Clean Architecture Principles')}</h4>
<ul>
<li><strong>Separation of Concerns</strong> &mdash; ${t('Setiap layer punya tanggung jawab tunggal','Each layer has a single responsibility')}</li>
<li><strong>Dependency Inversion</strong> &mdash; ${t('Layer atas bergantung pada interface, bukan implementasi konkret','Upper layers depend on interfaces, not concrete implementations')}</li>
<li><strong>Testability</strong> &mdash; ${t('Setiap layer bisa di-mock dan di-test secara independen','Each layer can be mocked and tested independently')}</li>
<li><strong>Flexibility</strong> &mdash; ${t('Ganti database/framework tanpa mengubah business logic','Switch database/framework without changing business logic')}</li>
</ul>
<div class="info-box">
<strong>${t('Aturan Dependency:','Dependency Rule:')}</strong> Handler &rarr; Service (interface) &rarr; Repository (interface). ${t('Handler tidak boleh langsung akses database. Service tidak boleh tahu tentang HTTP.','Handler must not directly access the database. Service must not know about HTTP.')}
</div>
</div>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Dependency Flow &amp; Layer Responsibility</h3>
<div class="table-wrapper">
<table>
<tr><th>Layer</th><th>${t('Tanggung Jawab','Responsibility')}</th><th>${t('Tahu Tentang','Knows About')}</th><th>${t('Tidak Tahu Tentang','Does Not Know About')}</th></tr>
<tr><td><strong>Handler</strong></td><td>Parse request, validate input, return response</td><td>HTTP/gRPC, Service interface</td><td>Database, SQL, business rules</td></tr>
<tr><td><strong>Service</strong></td><td>Business logic, orchestration, validation rules</td><td>Model, Repository interface</td><td>HTTP, gRPC, SQL query detail</td></tr>
<tr><td><strong>Repository</strong></td><td>Database operations, query execution</td><td>Database driver, SQL, Model</td><td>HTTP, business rules</td></tr>
<tr><td><strong>Model</strong></td><td>Domain entities, value objects</td><td>${t('Dirinya sendiri','Itself')}</td><td>${t('Semua layer lain','All other layers')}</td></tr>
</table>
</div>
</div>

<!-- ===================== 2. MODEL & CONFIG ===================== -->
<h2 class="animate-in">2. Domain Model &amp; Configuration</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">User Model (internal/model/user.go)</h3>
<div class="code-block"><span class="kw">package</span> model

<span class="kw">import</span> (
    <span class="str">"time"</span>

    <span class="str">"github.com/google/uuid"</span>
)

<span class="cm">// User represents the domain entity for a user</span>
<span class="kw">type</span> User <span class="kw">struct</span> {
    ID        uuid.UUID  <span class="str">"json:&#34;id&#34; db:&#34;id&#34;"</span>
    Name      <span class="kw">string</span>     <span class="str">"json:&#34;name&#34; db:&#34;name&#34; validate:&#34;required,min=2,max=100&#34;"</span>
    Email     <span class="kw">string</span>     <span class="str">"json:&#34;email&#34; db:&#34;email&#34; validate:&#34;required,email&#34;"</span>
    Password  <span class="kw">string</span>     <span class="str">"json:&#34;-&#34; db:&#34;password_hash&#34;"</span>
    CreatedAt time.Time  <span class="str">"json:&#34;created_at&#34; db:&#34;created_at&#34;"</span>
    UpdatedAt time.Time  <span class="str">"json:&#34;updated_at&#34; db:&#34;updated_at&#34;"</span>
}

<span class="cm">// CreateUserRequest is the DTO for creating a user</span>
<span class="kw">type</span> CreateUserRequest <span class="kw">struct</span> {
    Name     <span class="kw">string</span> <span class="str">"json:&#34;name&#34; validate:&#34;required,min=2,max=100&#34;"</span>
    Email    <span class="kw">string</span> <span class="str">"json:&#34;email&#34; validate:&#34;required,email&#34;"</span>
    Password <span class="kw">string</span> <span class="str">"json:&#34;password&#34; validate:&#34;required,min=8,max=72&#34;"</span>
}

<span class="cm">// UpdateUserRequest is the DTO for updating a user</span>
<span class="kw">type</span> UpdateUserRequest <span class="kw">struct</span> {
    Name  *<span class="kw">string</span> <span class="str">"json:&#34;name&#34; validate:&#34;omitempty,min=2,max=100&#34;"</span>
    Email *<span class="kw">string</span> <span class="str">"json:&#34;email&#34; validate:&#34;omitempty,email&#34;"</span>
}

<span class="cm">// UserResponse is the safe DTO (no password) returned to client</span>
<span class="kw">type</span> UserResponse <span class="kw">struct</span> {
    ID        uuid.UUID <span class="str">"json:&#34;id&#34;"</span>
    Name      <span class="kw">string</span>    <span class="str">"json:&#34;name&#34;"</span>
    Email     <span class="kw">string</span>    <span class="str">"json:&#34;email&#34;"</span>
    CreatedAt time.Time <span class="str">"json:&#34;created_at&#34;"</span>
    UpdatedAt time.Time <span class="str">"json:&#34;updated_at&#34;"</span>
}

<span class="cm">// ToResponse converts User to safe UserResponse (strips password)</span>
<span class="kw">func</span> (u *User) <span class="fn">ToResponse</span>() UserResponse {
    <span class="kw">return</span> UserResponse{
        ID:        u.ID,
        Name:      u.Name,
        Email:     u.Email,
        CreatedAt: u.CreatedAt,
        UpdatedAt: u.UpdatedAt,
    }
}</div>
<div class="info-box">
<strong>${t('Penting:','Important:')}</strong> ${t('Field <code>Password</code> menggunakan tag <code>json:&quot;-&quot;</code> agar <em>tidak pernah</em> dikirim ke client saat marshaling JSON. Kita juga memisahkan DTO (Data Transfer Object) untuk request dan response agar tidak ada kebocoran data sensitif.','The <code>Password</code> field uses the <code>json:&quot;-&quot;</code> tag so it is <em>never</em> sent to the client during JSON marshaling. We also separate DTOs (Data Transfer Objects) for request and response to prevent sensitive data leakage.')}
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Custom Error Types (internal/model/errors.go)</h3>
<div class="code-block"><span class="kw">package</span> model

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// AppError is a custom error type with HTTP status code</span>
<span class="kw">type</span> AppError <span class="kw">struct</span> {
    Code    <span class="kw">int</span>    <span class="str">"json:&#34;code&#34;"</span>
    Message <span class="kw">string</span> <span class="str">"json:&#34;message&#34;"</span>
}

<span class="kw">func</span> (e *AppError) <span class="fn">Error</span>() <span class="kw">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"[%d] %s"</span>, e.Code, e.Message)
}

<span class="kw">var</span> (
    ErrNotFound      = &amp;AppError{Code: <span class="num">404</span>, Message: <span class="str">"resource not found"</span>}
    ErrDuplicate     = &amp;AppError{Code: <span class="num">409</span>, Message: <span class="str">"resource already exists"</span>}
    ErrBadRequest    = &amp;AppError{Code: <span class="num">400</span>, Message: <span class="str">"invalid request"</span>}
    ErrUnauthorized  = &amp;AppError{Code: <span class="num">401</span>, Message: <span class="str">"unauthorized"</span>}
    ErrForbidden     = &amp;AppError{Code: <span class="num">403</span>, Message: <span class="str">"forbidden"</span>}
    ErrInternal      = &amp;AppError{Code: <span class="num">500</span>, Message: <span class="str">"internal server error"</span>}
)

<span class="kw">func</span> <span class="fn">NewAppError</span>(code <span class="kw">int</span>, msg <span class="kw">string</span>) *AppError {
    <span class="kw">return</span> &amp;AppError{Code: code, Message: msg}
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">Configuration (internal/config/config.go)</h3>
<div class="code-block"><span class="kw">package</span> config

<span class="kw">import</span> (
    <span class="str">"log"</span>
    <span class="str">"time"</span>

    <span class="str">"github.com/kelseyhightower/envconfig"</span>
)

<span class="cm">// Config holds all configuration from environment variables</span>
<span class="kw">type</span> Config <span class="kw">struct</span> {
    Server   ServerConfig
    Database DatabaseConfig
    JWT      JWTConfig
    Redis    RedisConfig
}

<span class="kw">type</span> ServerConfig <span class="kw">struct</span> {
    HTTPPort     <span class="kw">string</span>        <span class="str">"envconfig:&#34;HTTP_PORT&#34; default:&#34;8080&#34;"</span>
    GRPCPort     <span class="kw">string</span>        <span class="str">"envconfig:&#34;GRPC_PORT&#34; default:&#34;9090&#34;"</span>
    ReadTimeout  time.Duration <span class="str">"envconfig:&#34;READ_TIMEOUT&#34; default:&#34;10s&#34;"</span>
    WriteTimeout time.Duration <span class="str">"envconfig:&#34;WRITE_TIMEOUT&#34; default:&#34;10s&#34;"</span>
    IdleTimeout  time.Duration <span class="str">"envconfig:&#34;IDLE_TIMEOUT&#34; default:&#34;120s&#34;"</span>
}

<span class="kw">type</span> DatabaseConfig <span class="kw">struct</span> {
    Host         <span class="kw">string</span> <span class="str">"envconfig:&#34;DB_HOST&#34; default:&#34;localhost&#34;"</span>
    Port         <span class="kw">string</span> <span class="str">"envconfig:&#34;DB_PORT&#34; default:&#34;5432&#34;"</span>
    User         <span class="kw">string</span> <span class="str">"envconfig:&#34;DB_USER&#34; required:&#34;true&#34;"</span>
    Password     <span class="kw">string</span> <span class="str">"envconfig:&#34;DB_PASSWORD&#34; required:&#34;true&#34;"</span>
    Name         <span class="kw">string</span> <span class="str">"envconfig:&#34;DB_NAME&#34; required:&#34;true&#34;"</span>
    SSLMode      <span class="kw">string</span> <span class="str">"envconfig:&#34;DB_SSLMODE&#34; default:&#34;require&#34;"</span>
    MaxOpenConns <span class="kw">int</span>    <span class="str">"envconfig:&#34;DB_MAX_OPEN&#34; default:&#34;25&#34;"</span>
    MaxIdleConns <span class="kw">int</span>    <span class="str">"envconfig:&#34;DB_MAX_IDLE&#34; default:&#34;5&#34;"</span>
}

<span class="kw">type</span> JWTConfig <span class="kw">struct</span> {
    Secret          <span class="kw">string</span>        <span class="str">"envconfig:&#34;JWT_SECRET&#34; required:&#34;true&#34;"</span>
    AccessExpiry    time.Duration <span class="str">"envconfig:&#34;JWT_ACCESS_EXPIRY&#34; default:&#34;15m&#34;"</span>
    RefreshExpiry   time.Duration <span class="str">"envconfig:&#34;JWT_REFRESH_EXPIRY&#34; default:&#34;168h&#34;"</span>
}

<span class="kw">type</span> RedisConfig <span class="kw">struct</span> {
    Addr     <span class="kw">string</span> <span class="str">"envconfig:&#34;REDIS_ADDR&#34; default:&#34;localhost:6379&#34;"</span>
    Password <span class="kw">string</span> <span class="str">"envconfig:&#34;REDIS_PASSWORD&#34;"</span>
    DB       <span class="kw">int</span>    <span class="str">"envconfig:&#34;REDIS_DB&#34; default:&#34;0&#34;"</span>
}

<span class="kw">func</span> <span class="fn">Load</span>() *Config {
    <span class="kw">var</span> cfg Config
    <span class="kw">if</span> err := envconfig.<span class="fn">Process</span>(<span class="str">""</span>, &amp;cfg); err != <span class="kw">nil</span> {
        log.<span class="fn">Fatalf</span>(<span class="str">"failed to load config: %v"</span>, err)
    }
    <span class="kw">return</span> &amp;cfg
}</div>
<div class="warn-box">
<strong>${t('Jangan pernah hardcode secrets!','Never hardcode secrets!')}</strong> ${t('Gunakan environment variables atau secret manager (AWS Secrets Manager, HashiCorp Vault). File <code>.env</code> hanya untuk development dan harus ada di <code>.gitignore</code>.','Use environment variables or a secret manager (AWS Secrets Manager, HashiCorp Vault). The <code>.env</code> file is only for development and must be in <code>.gitignore</code>.')}
</div>
</div>

<!-- ===================== 3. REPOSITORY LAYER ===================== -->
<h2 class="animate-in">3. Repository Layer (Database Access)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">PostgreSQL Connection (internal/repository/postgres.go)</h3>
<div class="code-block"><span class="kw">package</span> repository

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"time"</span>

    <span class="str">"github.com/jmoiron/sqlx"</span>
    _ <span class="str">"github.com/lib/pq"</span>
    <span class="str">"myapp/internal/config"</span>
)

<span class="kw">func</span> <span class="fn">NewPostgresDB</span>(cfg config.DatabaseConfig) (*sqlx.DB, <span class="kw">error</span>) {
    dsn := fmt.<span class="fn">Sprintf</span>(
        <span class="str">"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s"</span>,
        cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Name, cfg.SSLMode,
    )

    db, err := sqlx.<span class="fn">Connect</span>(<span class="str">"postgres"</span>, dsn)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"failed to connect to database: %w"</span>, err)
    }

    <span class="cm">// Connection pool settings</span>
    db.<span class="fn">SetMaxOpenConns</span>(cfg.MaxOpenConns)
    db.<span class="fn">SetMaxIdleConns</span>(cfg.MaxIdleConns)
    db.<span class="fn">SetConnMaxLifetime</span>(<span class="num">5</span> * time.Minute)
    db.<span class="fn">SetConnMaxIdleTime</span>(<span class="num">1</span> * time.Minute)

    <span class="cm">// Verify connection</span>
    <span class="kw">if</span> err := db.<span class="fn">Ping</span>(); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"failed to ping database: %w"</span>, err)
    }

    <span class="kw">return</span> db, <span class="kw">nil</span>
}</div>
<div class="info-box">
<strong>Connection Pooling:</strong> ${t('<code>MaxOpenConns</code> membatasi koneksi aktif ke DB (default 25), <code>MaxIdleConns</code> menyimpan koneksi idle untuk reuse. <code>ConnMaxLifetime</code> mencegah koneksi stale. Ini krusial untuk mencegah connection exhaustion di production.','<code>MaxOpenConns</code> limits active connections to the DB (default 25), <code>MaxIdleConns</code> keeps idle connections for reuse. <code>ConnMaxLifetime</code> prevents stale connections. This is crucial for preventing connection exhaustion in production.')}
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">User Repository Interface &amp; Implementation</h3>
<div class="code-block"><span class="kw">package</span> repository

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"database/sql"</span>
    <span class="str">"fmt"</span>

    <span class="str">"github.com/google/uuid"</span>
    <span class="str">"github.com/jmoiron/sqlx"</span>
    <span class="str">"github.com/lib/pq"</span>
    <span class="str">"myapp/internal/model"</span>
)

<span class="cm">// UserRepository defines the interface for user data access</span>
<span class="kw">type</span> UserRepository <span class="kw">interface</span> {
    <span class="fn">Create</span>(ctx context.Context, user *model.User) <span class="kw">error</span>
    <span class="fn">GetByID</span>(ctx context.Context, id uuid.UUID) (*model.User, <span class="kw">error</span>)
    <span class="fn">GetByEmail</span>(ctx context.Context, email <span class="kw">string</span>) (*model.User, <span class="kw">error</span>)
    <span class="fn">List</span>(ctx context.Context, limit, offset <span class="kw">int</span>) ([]model.User, <span class="kw">error</span>)
    <span class="fn">Update</span>(ctx context.Context, user *model.User) <span class="kw">error</span>
    <span class="fn">Delete</span>(ctx context.Context, id uuid.UUID) <span class="kw">error</span>
}

<span class="cm">// userRepo implements UserRepository using PostgreSQL</span>
<span class="kw">type</span> userRepo <span class="kw">struct</span> {
    db *sqlx.DB
}

<span class="kw">func</span> <span class="fn">NewUserRepository</span>(db *sqlx.DB) UserRepository {
    <span class="kw">return</span> &amp;userRepo{db: db}
}

<span class="kw">func</span> (r *userRepo) <span class="fn">Create</span>(ctx context.Context, user *model.User) <span class="kw">error</span> {
    user.ID = uuid.<span class="fn">New</span>()
    query := <span class="str">"INSERT INTO users (id, name, email, password_hash, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING created_at, updated_at"</span>

    err := r.db.<span class="fn">QueryRowContext</span>(ctx, query,
        user.ID, user.Name, user.Email, user.Password,
    ).<span class="fn">Scan</span>(&amp;user.CreatedAt, &amp;user.UpdatedAt)

    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">if</span> pqErr, ok := err.(*pq.Error); ok &amp;&amp; pqErr.Code == <span class="str">"23505"</span> {
            <span class="kw">return</span> model.ErrDuplicate <span class="cm">// unique constraint violation</span>
        }
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"create user: %w"</span>, err)
    }
    <span class="kw">return</span> <span class="kw">nil</span>
}

<span class="kw">func</span> (r *userRepo) <span class="fn">GetByID</span>(ctx context.Context, id uuid.UUID) (*model.User, <span class="kw">error</span>) {
    <span class="kw">var</span> user model.User
    query := <span class="str">"SELECT id, name, email, password_hash, created_at, updated_at FROM users WHERE id = $1"</span>

    err := r.db.<span class="fn">GetContext</span>(ctx, &amp;user, query, id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">if</span> err == sql.ErrNoRows {
            <span class="kw">return</span> <span class="kw">nil</span>, model.ErrNotFound
        }
        <span class="kw">return</span> <span class="kw">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"get user by id: %w"</span>, err)
    }
    <span class="kw">return</span> &amp;user, <span class="kw">nil</span>
}

<span class="kw">func</span> (r *userRepo) <span class="fn">GetByEmail</span>(ctx context.Context, email <span class="kw">string</span>) (*model.User, <span class="kw">error</span>) {
    <span class="kw">var</span> user model.User
    query := <span class="str">"SELECT id, name, email, password_hash, created_at, updated_at FROM users WHERE email = $1"</span>

    err := r.db.<span class="fn">GetContext</span>(ctx, &amp;user, query, email)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">if</span> err == sql.ErrNoRows {
            <span class="kw">return</span> <span class="kw">nil</span>, model.ErrNotFound
        }
        <span class="kw">return</span> <span class="kw">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"get user by email: %w"</span>, err)
    }
    <span class="kw">return</span> &amp;user, <span class="kw">nil</span>
}

<span class="kw">func</span> (r *userRepo) <span class="fn">List</span>(ctx context.Context, limit, offset <span class="kw">int</span>) ([]model.User, <span class="kw">error</span>) {
    <span class="kw">var</span> users []model.User
    query := <span class="str">"SELECT id, name, email, created_at, updated_at FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2"</span>

    err := r.db.<span class="fn">SelectContext</span>(ctx, &amp;users, query, limit, offset)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"list users: %w"</span>, err)
    }
    <span class="kw">return</span> users, <span class="kw">nil</span>
}

<span class="kw">func</span> (r *userRepo) <span class="fn">Update</span>(ctx context.Context, user *model.User) <span class="kw">error</span> {
    query := <span class="str">"UPDATE users SET name=$1, email=$2, updated_at=NOW() WHERE id=$3 RETURNING updated_at"</span>
    err := r.db.<span class="fn">QueryRowContext</span>(ctx, query, user.Name, user.Email, user.ID).<span class="fn">Scan</span>(&amp;user.UpdatedAt)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">if</span> err == sql.ErrNoRows {
            <span class="kw">return</span> model.ErrNotFound
        }
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"update user: %w"</span>, err)
    }
    <span class="kw">return</span> <span class="kw">nil</span>
}

<span class="kw">func</span> (r *userRepo) <span class="fn">Delete</span>(ctx context.Context, id uuid.UUID) <span class="kw">error</span> {
    query := <span class="str">"DELETE FROM users WHERE id = $1"</span>
    result, err := r.db.<span class="fn">ExecContext</span>(ctx, query, id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"delete user: %w"</span>, err)
    }
    rows, _ := result.<span class="fn">RowsAffected</span>()
    <span class="kw">if</span> rows == <span class="num">0</span> {
        <span class="kw">return</span> model.ErrNotFound
    }
    <span class="kw">return</span> <span class="kw">nil</span>
}</div>
<div class="warn-box">
<strong>SQL Injection Prevention:</strong> ${t('Perhatikan semua query menggunakan <strong>parameterized queries</strong> ($1, $2, ...) bukan string concatenation. Jangan pernah tulis <code>&quot;WHERE id = &#39;&quot; + id + &quot;&#39;&quot;</code> &mdash; ini membuka celah SQL injection!','Notice all queries use <strong>parameterized queries</strong> ($1, $2, ...) instead of string concatenation. Never write <code>&quot;WHERE id = &#39;&quot; + id + &quot;&#39;&quot;</code> &mdash; this opens an SQL injection vulnerability!')}
</div>
</div>

<!-- ===================== 4. SERVICE LAYER ===================== -->
<h2 class="animate-in">4. Service Layer (Business Logic)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">User Service (internal/service/user_service.go)</h3>
<div class="code-block"><span class="kw">package</span> service

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"log/slog"</span>

    <span class="str">"github.com/google/uuid"</span>
    <span class="str">"golang.org/x/crypto/bcrypt"</span>
    <span class="str">"myapp/internal/model"</span>
    <span class="str">"myapp/internal/repository"</span>
)

<span class="cm">// UserService defines business operations for users</span>
<span class="kw">type</span> UserService <span class="kw">interface</span> {
    <span class="fn">CreateUser</span>(ctx context.Context, req model.CreateUserRequest) (*model.UserResponse, <span class="kw">error</span>)
    <span class="fn">GetUser</span>(ctx context.Context, id uuid.UUID) (*model.UserResponse, <span class="kw">error</span>)
    <span class="fn">ListUsers</span>(ctx context.Context, limit, offset <span class="kw">int</span>) ([]model.UserResponse, <span class="kw">error</span>)
    <span class="fn">UpdateUser</span>(ctx context.Context, id uuid.UUID, req model.UpdateUserRequest) (*model.UserResponse, <span class="kw">error</span>)
    <span class="fn">DeleteUser</span>(ctx context.Context, id uuid.UUID) <span class="kw">error</span>
}

<span class="kw">type</span> userService <span class="kw">struct</span> {
    repo   repository.UserRepository
    logger *slog.Logger
}

<span class="kw">func</span> <span class="fn">NewUserService</span>(repo repository.UserRepository, logger *slog.Logger) UserService {
    <span class="kw">return</span> &amp;userService{repo: repo, logger: logger}
}

<span class="kw">func</span> (s *userService) <span class="fn">CreateUser</span>(ctx context.Context, req model.CreateUserRequest) (*model.UserResponse, <span class="kw">error</span>) {
    <span class="cm">// 1. Hash password with bcrypt (cost 12)</span>
    hashedPassword, err := bcrypt.<span class="fn">GenerateFromPassword</span>(
        []<span class="kw">byte</span>(req.Password), <span class="num">12</span>,
    )
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        s.logger.<span class="fn">Error</span>(<span class="str">"failed to hash password"</span>, <span class="str">"error"</span>, err)
        <span class="kw">return</span> <span class="kw">nil</span>, model.ErrInternal
    }

    <span class="cm">// 2. Check if email already exists</span>
    existing, _ := s.repo.<span class="fn">GetByEmail</span>(ctx, req.Email)
    <span class="kw">if</span> existing != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, model.<span class="fn">NewAppError</span>(<span class="num">409</span>, <span class="str">"email already registered"</span>)
    }

    <span class="cm">// 3. Create user entity</span>
    user := &amp;model.User{
        Name:     req.Name,
        Email:    req.Email,
        Password: <span class="kw">string</span>(hashedPassword),
    }

    <span class="cm">// 4. Persist to database</span>
    <span class="kw">if</span> err := s.repo.<span class="fn">Create</span>(ctx, user); err != <span class="kw">nil</span> {
        s.logger.<span class="fn">Error</span>(<span class="str">"failed to create user"</span>, <span class="str">"error"</span>, err)
        <span class="kw">return</span> <span class="kw">nil</span>, err
    }

    s.logger.<span class="fn">Info</span>(<span class="str">"user created"</span>, <span class="str">"user_id"</span>, user.ID, <span class="str">"email"</span>, user.Email)
    resp := user.<span class="fn">ToResponse</span>()
    <span class="kw">return</span> &amp;resp, <span class="kw">nil</span>
}

<span class="kw">func</span> (s *userService) <span class="fn">GetUser</span>(ctx context.Context, id uuid.UUID) (*model.UserResponse, <span class="kw">error</span>) {
    user, err := s.repo.<span class="fn">GetByID</span>(ctx, id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, err
    }
    resp := user.<span class="fn">ToResponse</span>()
    <span class="kw">return</span> &amp;resp, <span class="kw">nil</span>
}

<span class="kw">func</span> (s *userService) <span class="fn">ListUsers</span>(ctx context.Context, limit, offset <span class="kw">int</span>) ([]model.UserResponse, <span class="kw">error</span>) {
    <span class="cm">// Business rule: max 100 items per page</span>
    <span class="kw">if</span> limit &lt;= <span class="num">0</span> || limit &gt; <span class="num">100</span> {
        limit = <span class="num">20</span>
    }
    <span class="kw">if</span> offset &lt; <span class="num">0</span> {
        offset = <span class="num">0</span>
    }

    users, err := s.repo.<span class="fn">List</span>(ctx, limit, offset)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, err
    }

    responses := <span class="kw">make</span>([]model.UserResponse, <span class="fn">len</span>(users))
    <span class="kw">for</span> i, u := <span class="kw">range</span> users {
        responses[i] = u.<span class="fn">ToResponse</span>()
    }
    <span class="kw">return</span> responses, <span class="kw">nil</span>
}

<span class="kw">func</span> (s *userService) <span class="fn">UpdateUser</span>(ctx context.Context, id uuid.UUID, req model.UpdateUserRequest) (*model.UserResponse, <span class="kw">error</span>) {
    user, err := s.repo.<span class="fn">GetByID</span>(ctx, id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, err
    }

    <span class="cm">// Partial update: only update provided fields</span>
    <span class="kw">if</span> req.Name != <span class="kw">nil</span> {
        user.Name = *req.Name
    }
    <span class="kw">if</span> req.Email != <span class="kw">nil</span> {
        <span class="cm">// Check email uniqueness for new email</span>
        existing, _ := s.repo.<span class="fn">GetByEmail</span>(ctx, *req.Email)
        <span class="kw">if</span> existing != <span class="kw">nil</span> &amp;&amp; existing.ID != id {
            <span class="kw">return</span> <span class="kw">nil</span>, model.<span class="fn">NewAppError</span>(<span class="num">409</span>, <span class="str">"email already in use"</span>)
        }
        user.Email = *req.Email
    }

    <span class="kw">if</span> err := s.repo.<span class="fn">Update</span>(ctx, user); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, err
    }

    s.logger.<span class="fn">Info</span>(<span class="str">"user updated"</span>, <span class="str">"user_id"</span>, id)
    resp := user.<span class="fn">ToResponse</span>()
    <span class="kw">return</span> &amp;resp, <span class="kw">nil</span>
}

<span class="kw">func</span> (s *userService) <span class="fn">DeleteUser</span>(ctx context.Context, id uuid.UUID) <span class="kw">error</span> {
    <span class="kw">if</span> err := s.repo.<span class="fn">Delete</span>(ctx, id); err != <span class="kw">nil</span> {
        <span class="kw">return</span> err
    }
    s.logger.<span class="fn">Info</span>(<span class="str">"user deleted"</span>, <span class="str">"user_id"</span>, id)
    <span class="kw">return</span> <span class="kw">nil</span>
}</div>
<div class="info-box">
<strong>${t('Kenapa Service Layer?','Why a Service Layer?')}</strong> ${t('Layer ini memisahkan business logic dari transport (HTTP/gRPC). Keuntungannya: (1) handler REST dan gRPC bisa pakai service yang sama, (2) mudah di-test dengan mock repository, (3) business rules terpusat di satu tempat.','This layer separates business logic from transport (HTTP/gRPC). The benefits: (1) REST and gRPC handlers can use the same service, (2) easy to test with mock repository, (3) business rules are centralized in one place.')}
</div>
</div>

<!-- ===================== 5. REST HANDLER ===================== -->
<h2 class="animate-in">5. RESTful CRUD Handler (Gin Framework)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">User Handler (internal/handler/user_handler.go)</h3>
<div class="code-block"><span class="kw">package</span> handler

<span class="kw">import</span> (
    <span class="str">"net/http"</span>
    <span class="str">"strconv"</span>

    <span class="str">"github.com/gin-gonic/gin"</span>
    <span class="str">"github.com/go-playground/validator/v10"</span>
    <span class="str">"github.com/google/uuid"</span>
    <span class="str">"myapp/internal/model"</span>
    <span class="str">"myapp/internal/service"</span>
)

<span class="kw">type</span> UserHandler <span class="kw">struct</span> {
    svc      service.UserService
    validate *validator.Validate
}

<span class="kw">func</span> <span class="fn">NewUserHandler</span>(svc service.UserService) *UserHandler {
    <span class="kw">return</span> &amp;UserHandler{
        svc:      svc,
        validate: validator.<span class="fn">New</span>(),
    }
}

<span class="cm">// RegisterRoutes sets up the user CRUD endpoints</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">RegisterRoutes</span>(r *gin.RouterGroup) {
    users := r.<span class="fn">Group</span>(<span class="str">"/users"</span>)
    {
        users.<span class="fn">POST</span>(<span class="str">""</span>, h.CreateUser)
        users.<span class="fn">GET</span>(<span class="str">""</span>, h.ListUsers)
        users.<span class="fn">GET</span>(<span class="str">"/:id"</span>, h.GetUser)
        users.<span class="fn">PUT</span>(<span class="str">"/:id"</span>, h.UpdateUser)
        users.<span class="fn">DELETE</span>(<span class="str">"/:id"</span>, h.DeleteUser)
    }
}

<span class="cm">// POST /api/v1/users</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">CreateUser</span>(c *gin.Context) {
    <span class="kw">var</span> req model.CreateUserRequest
    <span class="kw">if</span> err := c.<span class="fn">ShouldBindJSON</span>(&amp;req); err != <span class="kw">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"error"</span>: <span class="str">"invalid JSON body"</span>})
        <span class="kw">return</span>
    }

    <span class="cm">// Validate with go-playground/validator</span>
    <span class="kw">if</span> err := h.validate.<span class="fn">Struct</span>(req); err != <span class="kw">nil</span> {
        errors := <span class="fn">formatValidationErrors</span>(err)
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"errors"</span>: errors})
        <span class="kw">return</span>
    }

    resp, err := h.svc.<span class="fn">CreateUser</span>(c.Request.<span class="fn">Context</span>(), req)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="fn">handleError</span>(c, err)
        <span class="kw">return</span>
    }

    c.<span class="fn">JSON</span>(http.StatusCreated, resp)
}

<span class="cm">// GET /api/v1/users/:id</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">GetUser</span>(c *gin.Context) {
    id, err := uuid.<span class="fn">Parse</span>(c.<span class="fn">Param</span>(<span class="str">"id"</span>))
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"error"</span>: <span class="str">"invalid UUID"</span>})
        <span class="kw">return</span>
    }

    resp, err := h.svc.<span class="fn">GetUser</span>(c.Request.<span class="fn">Context</span>(), id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="fn">handleError</span>(c, err)
        <span class="kw">return</span>
    }

    c.<span class="fn">JSON</span>(http.StatusOK, resp)
}

<span class="cm">// GET /api/v1/users?limit=20&amp;offset=0</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">ListUsers</span>(c *gin.Context) {
    limit, _ := strconv.<span class="fn">Atoi</span>(c.<span class="fn">DefaultQuery</span>(<span class="str">"limit"</span>, <span class="str">"20"</span>))
    offset, _ := strconv.<span class="fn">Atoi</span>(c.<span class="fn">DefaultQuery</span>(<span class="str">"offset"</span>, <span class="str">"0"</span>))

    resp, err := h.svc.<span class="fn">ListUsers</span>(c.Request.<span class="fn">Context</span>(), limit, offset)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="fn">handleError</span>(c, err)
        <span class="kw">return</span>
    }

    c.<span class="fn">JSON</span>(http.StatusOK, gin.H{<span class="str">"data"</span>: resp, <span class="str">"limit"</span>: limit, <span class="str">"offset"</span>: offset})
}

<span class="cm">// PUT /api/v1/users/:id</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">UpdateUser</span>(c *gin.Context) {
    id, err := uuid.<span class="fn">Parse</span>(c.<span class="fn">Param</span>(<span class="str">"id"</span>))
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"error"</span>: <span class="str">"invalid UUID"</span>})
        <span class="kw">return</span>
    }

    <span class="kw">var</span> req model.UpdateUserRequest
    <span class="kw">if</span> err := c.<span class="fn">ShouldBindJSON</span>(&amp;req); err != <span class="kw">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"error"</span>: <span class="str">"invalid JSON body"</span>})
        <span class="kw">return</span>
    }

    <span class="kw">if</span> err := h.validate.<span class="fn">Struct</span>(req); err != <span class="kw">nil</span> {
        errors := <span class="fn">formatValidationErrors</span>(err)
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"errors"</span>: errors})
        <span class="kw">return</span>
    }

    resp, err := h.svc.<span class="fn">UpdateUser</span>(c.Request.<span class="fn">Context</span>(), id, req)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="fn">handleError</span>(c, err)
        <span class="kw">return</span>
    }

    c.<span class="fn">JSON</span>(http.StatusOK, resp)
}

<span class="cm">// DELETE /api/v1/users/:id</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">DeleteUser</span>(c *gin.Context) {
    id, err := uuid.<span class="fn">Parse</span>(c.<span class="fn">Param</span>(<span class="str">"id"</span>))
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.H{<span class="str">"error"</span>: <span class="str">"invalid UUID"</span>})
        <span class="kw">return</span>
    }

    <span class="kw">if</span> err := h.svc.<span class="fn">DeleteUser</span>(c.Request.<span class="fn">Context</span>(), id); err != <span class="kw">nil</span> {
        <span class="fn">handleError</span>(c, err)
        <span class="kw">return</span>
    }

    c.<span class="fn">JSON</span>(http.StatusOK, gin.H{<span class="str">"message"</span>: <span class="str">"user deleted successfully"</span>})
}

<span class="cm">// handleError maps AppError to HTTP response</span>
<span class="kw">func</span> <span class="fn">handleError</span>(c *gin.Context, err <span class="kw">error</span>) {
    <span class="kw">if</span> appErr, ok := err.(*model.AppError); ok {
        c.<span class="fn">JSON</span>(appErr.Code, gin.H{<span class="str">"error"</span>: appErr.Message})
        <span class="kw">return</span>
    }
    c.<span class="fn">JSON</span>(http.StatusInternalServerError, gin.H{<span class="str">"error"</span>: <span class="str">"internal server error"</span>})
}

<span class="cm">// formatValidationErrors converts validator errors to readable messages</span>
<span class="kw">func</span> <span class="fn">formatValidationErrors</span>(err <span class="kw">error</span>) []<span class="kw">string</span> {
    <span class="kw">var</span> errors []<span class="kw">string</span>
    <span class="kw">for</span> _, e := <span class="kw">range</span> err.(validator.ValidationErrors) {
        errors = <span class="fn">append</span>(errors, e.<span class="fn">Field</span>() + <span class="str">": "</span> + e.<span class="fn">Tag</span>())
    }
    <span class="kw">return</span> errors
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">REST API Endpoints Summary</h3>
<div class="table-wrapper">
<table>
<tr><th>Method</th><th>Endpoint</th><th>Description</th><th>Auth</th><th>Status Codes</th></tr>
<tr><td><span class="badge badge-green">POST</span></td><td>/api/v1/users</td><td>Create new user</td><td>No</td><td>201, 400, 409</td></tr>
<tr><td><span class="badge badge-blue">GET</span></td><td>/api/v1/users</td><td>List users (paginated)</td><td>Yes</td><td>200, 401</td></tr>
<tr><td><span class="badge badge-blue">GET</span></td><td>/api/v1/users/:id</td><td>Get user by ID</td><td>Yes</td><td>200, 401, 404</td></tr>
<tr><td><span class="badge badge-orange">PUT</span></td><td>/api/v1/users/:id</td><td>Update user</td><td>Yes</td><td>200, 400, 401, 404, 409</td></tr>
<tr><td><span class="badge badge-red">DELETE</span></td><td>/api/v1/users/:id</td><td>Delete user</td><td>Yes</td><td>200, 401, 404</td></tr>
</table>
</div>
</div>

<!-- ===================== 6. MIDDLEWARE ===================== -->
<h2 class="animate-in">6. Middleware (Security &amp; Observability)</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">JWT Authentication Middleware</h3>
<div class="code-block"><span class="kw">package</span> handler

<span class="kw">import</span> (
    <span class="str">"net/http"</span>
    <span class="str">"strings"</span>
    <span class="str">"time"</span>

    <span class="str">"github.com/gin-gonic/gin"</span>
    <span class="str">"github.com/golang-jwt/jwt/v5"</span>
)

<span class="kw">type</span> Claims <span class="kw">struct</span> {
    UserID <span class="kw">string</span> <span class="str">"json:&#34;user_id&#34;"</span>
    Email  <span class="kw">string</span> <span class="str">"json:&#34;email&#34;"</span>
    jwt.RegisteredClaims
}

<span class="cm">// GenerateTokenPair creates access + refresh tokens</span>
<span class="kw">func</span> <span class="fn">GenerateTokenPair</span>(userID, email, secret <span class="kw">string</span>, accessExp, refreshExp time.Duration) (<span class="kw">string</span>, <span class="kw">string</span>, <span class="kw">error</span>) {
    <span class="cm">// Access token (short-lived, 15 min)</span>
    accessClaims := Claims{
        UserID: userID,
        Email:  email,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.<span class="fn">NewNumericDate</span>(time.<span class="fn">Now</span>().<span class="fn">Add</span>(accessExp)),
            IssuedAt:  jwt.<span class="fn">NewNumericDate</span>(time.<span class="fn">Now</span>()),
            Issuer:    <span class="str">"myapp"</span>,
        },
    }
    accessToken := jwt.<span class="fn">NewWithClaims</span>(jwt.SigningMethodHS256, accessClaims)
    accessStr, err := accessToken.<span class="fn">SignedString</span>([]<span class="kw">byte</span>(secret))
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="str">""</span>, <span class="str">""</span>, err
    }

    <span class="cm">// Refresh token (long-lived, 7 days)</span>
    refreshClaims := jwt.RegisteredClaims{
        ExpiresAt: jwt.<span class="fn">NewNumericDate</span>(time.<span class="fn">Now</span>().<span class="fn">Add</span>(refreshExp)),
        IssuedAt:  jwt.<span class="fn">NewNumericDate</span>(time.<span class="fn">Now</span>()),
        Subject:   userID,
    }
    refreshToken := jwt.<span class="fn">NewWithClaims</span>(jwt.SigningMethodHS256, refreshClaims)
    refreshStr, err := refreshToken.<span class="fn">SignedString</span>([]<span class="kw">byte</span>(secret))
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="str">""</span>, <span class="str">""</span>, err
    }

    <span class="kw">return</span> accessStr, refreshStr, <span class="kw">nil</span>
}

<span class="cm">// JWTAuthMiddleware validates Bearer token on protected routes</span>
<span class="kw">func</span> <span class="fn">JWTAuthMiddleware</span>(secret <span class="kw">string</span>) gin.HandlerFunc {
    <span class="kw">return</span> <span class="kw">func</span>(c *gin.Context) {
        authHeader := c.<span class="fn">GetHeader</span>(<span class="str">"Authorization"</span>)
        <span class="kw">if</span> authHeader == <span class="str">""</span> {
            c.<span class="fn">AbortWithStatusJSON</span>(http.StatusUnauthorized,
                gin.H{<span class="str">"error"</span>: <span class="str">"missing authorization header"</span>})
            <span class="kw">return</span>
        }

        parts := strings.<span class="fn">SplitN</span>(authHeader, <span class="str">" "</span>, <span class="num">2</span>)
        <span class="kw">if</span> <span class="fn">len</span>(parts) != <span class="num">2</span> || parts[<span class="num">0</span>] != <span class="str">"Bearer"</span> {
            c.<span class="fn">AbortWithStatusJSON</span>(http.StatusUnauthorized,
                gin.H{<span class="str">"error"</span>: <span class="str">"invalid authorization format"</span>})
            <span class="kw">return</span>
        }

        claims := &amp;Claims{}
        token, err := jwt.<span class="fn">ParseWithClaims</span>(parts[<span class="num">1</span>], claims,
            <span class="kw">func</span>(t *jwt.Token) (<span class="kw">interface</span>{}, <span class="kw">error</span>) {
                <span class="kw">return</span> []<span class="kw">byte</span>(secret), <span class="kw">nil</span>
            })

        <span class="kw">if</span> err != <span class="kw">nil</span> || !token.Valid {
            c.<span class="fn">AbortWithStatusJSON</span>(http.StatusUnauthorized,
                gin.H{<span class="str">"error"</span>: <span class="str">"invalid or expired token"</span>})
            <span class="kw">return</span>
        }

        <span class="cm">// Store user info in context for downstream handlers</span>
        c.<span class="fn">Set</span>(<span class="str">"user_id"</span>, claims.UserID)
        c.<span class="fn">Set</span>(<span class="str">"email"</span>, claims.Email)
        c.<span class="fn">Next</span>()
    }
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">CORS, Rate Limiting &amp; Request Logging</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-cors">CORS</button>
<button class="tab-btn" data-tab="go-ratelimit">Rate Limiting</button>
<button class="tab-btn" data-tab="go-reqlog">Request Logging</button>
</div>

<div class="tab-content active" id="go-cors">
<div class="code-block"><span class="kw">import</span> <span class="str">"github.com/gin-contrib/cors"</span>

<span class="kw">func</span> <span class="fn">CORSMiddleware</span>() gin.HandlerFunc {
    <span class="kw">return</span> cors.<span class="fn">New</span>(cors.Config{
        AllowOrigins:     []<span class="kw">string</span>{<span class="str">"https://yourdomain.com"</span>},
        AllowMethods:     []<span class="kw">string</span>{<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>, <span class="str">"OPTIONS"</span>},
        AllowHeaders:     []<span class="kw">string</span>{<span class="str">"Authorization"</span>, <span class="str">"Content-Type"</span>},
        ExposeHeaders:    []<span class="kw">string</span>{<span class="str">"Content-Length"</span>},
        AllowCredentials: <span class="kw">true</span>,
        MaxAge:           <span class="num">12</span> * time.Hour,
    })
}

<span class="cm">// JANGAN gunakan AllowOrigins: []string{"*"} di production!</span>
<span class="cm">// Ini membuka API Anda untuk semua domain (CSRF risk)</span></div>
<div class="warn-box"><strong>Production:</strong> ${t('Selalu whitelist domain spesifik. Wildcard (*) hanya untuk development.','Always whitelist specific domains. Wildcard (*) is only for development.')}</div>
</div>

<div class="tab-content" id="go-ratelimit">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"net/http"</span>
    <span class="str">"sync"</span>
    <span class="str">"time"</span>

    <span class="str">"github.com/gin-gonic/gin"</span>
    <span class="str">"golang.org/x/time/rate"</span>
)

<span class="kw">type</span> clientLimiter <span class="kw">struct</span> {
    limiter  *rate.Limiter
    lastSeen time.Time
}

<span class="kw">type</span> RateLimiter <span class="kw">struct</span> {
    clients <span class="kw">map</span>[<span class="kw">string</span>]*clientLimiter
    mu      sync.Mutex
    rps     rate.Limit  <span class="cm">// requests per second</span>
    burst   <span class="kw">int</span>
}

<span class="kw">func</span> <span class="fn">NewRateLimiter</span>(rps rate.Limit, burst <span class="kw">int</span>) *RateLimiter {
    rl := &amp;RateLimiter{
        clients: <span class="kw">make</span>(<span class="kw">map</span>[<span class="kw">string</span>]*clientLimiter),
        rps:     rps,
        burst:   burst,
    }
    <span class="cm">// Cleanup stale entries every minute</span>
    <span class="kw">go</span> rl.<span class="fn">cleanup</span>()
    <span class="kw">return</span> rl
}

<span class="kw">func</span> (rl *RateLimiter) <span class="fn">getLimiter</span>(ip <span class="kw">string</span>) *rate.Limiter {
    rl.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> rl.mu.<span class="fn">Unlock</span>()

    <span class="kw">if</span> cl, exists := rl.clients[ip]; exists {
        cl.lastSeen = time.<span class="fn">Now</span>()
        <span class="kw">return</span> cl.limiter
    }

    limiter := rate.<span class="fn">NewLimiter</span>(rl.rps, rl.burst)
    rl.clients[ip] = &amp;clientLimiter{limiter: limiter, lastSeen: time.<span class="fn">Now</span>()}
    <span class="kw">return</span> limiter
}

<span class="kw">func</span> (rl *RateLimiter) <span class="fn">Middleware</span>() gin.HandlerFunc {
    <span class="kw">return</span> <span class="kw">func</span>(c *gin.Context) {
        limiter := rl.<span class="fn">getLimiter</span>(c.<span class="fn">ClientIP</span>())
        <span class="kw">if</span> !limiter.<span class="fn">Allow</span>() {
            c.<span class="fn">AbortWithStatusJSON</span>(http.StatusTooManyRequests,
                gin.H{<span class="str">"error"</span>: <span class="str">"rate limit exceeded, try again later"</span>})
            <span class="kw">return</span>
        }
        c.<span class="fn">Next</span>()
    }
}</div>
</div>

<div class="tab-content" id="go-reqlog">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"log/slog"</span>
    <span class="str">"time"</span>

    <span class="str">"github.com/gin-gonic/gin"</span>
)

<span class="cm">// RequestLoggerMiddleware logs each request with structured logging</span>
<span class="kw">func</span> <span class="fn">RequestLoggerMiddleware</span>(logger *slog.Logger) gin.HandlerFunc {
    <span class="kw">return</span> <span class="kw">func</span>(c *gin.Context) {
        start := time.<span class="fn">Now</span>()
        path := c.Request.URL.Path
        method := c.Request.Method

        c.<span class="fn">Next</span>()

        logger.<span class="fn">Info</span>(<span class="str">"request completed"</span>,
            <span class="str">"method"</span>, method,
            <span class="str">"path"</span>, path,
            <span class="str">"status"</span>, c.Writer.<span class="fn">Status</span>(),
            <span class="str">"latency_ms"</span>, time.<span class="fn">Since</span>(start).<span class="fn">Milliseconds</span>(),
            <span class="str">"client_ip"</span>, c.<span class="fn">ClientIP</span>(),
            <span class="str">"user_agent"</span>, c.Request.<span class="fn">UserAgent</span>(),
        )
    }
}

<span class="cm">// Output: {"time":"...","level":"INFO","msg":"request completed",</span>
<span class="cm">//          "method":"GET","path":"/api/v1/users","status":200,</span>
<span class="cm">//          "latency_ms":3,"client_ip":"::1"}</span></div>
<div class="info-box"><strong>Go 1.21+ slog:</strong> ${t('Package <code>log/slog</code> adalah structured logger bawaan Go. Output JSON yang bisa diparsing oleh ELK, Grafana Loki, atau Datadog. Alternatif populer: zerolog, zap.','The <code>log/slog</code> package is Go&#39;s built-in structured logger. It outputs JSON that can be parsed by ELK, Grafana Loki, or Datadog. Popular alternatives: zerolog, zap.')}</div>
</div>
</div>

<!-- ===================== 7. gRPC ===================== -->
<h2 class="animate-in">7. gRPC CRUD Implementation</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Proto File (api/proto/user.proto)</h3>
<div class="code-block"><span class="kw">syntax</span> = <span class="str">"proto3"</span>;
<span class="kw">package</span> user;
<span class="kw">option</span> go_package = <span class="str">"myapp/api/proto/userpb"</span>;

<span class="kw">import</span> <span class="str">"google/protobuf/timestamp.proto"</span>;
<span class="kw">import</span> <span class="str">"google/protobuf/empty.proto"</span>;

<span class="cm">// User service definition with full CRUD RPCs</span>
<span class="kw">service</span> UserService {
    <span class="kw">rpc</span> <span class="fn">CreateUser</span>(CreateUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">GetUser</span>(GetUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">ListUsers</span>(ListUsersRequest) <span class="kw">returns</span> (ListUsersResponse);
    <span class="kw">rpc</span> <span class="fn">UpdateUser</span>(UpdateUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">DeleteUser</span>(DeleteUserRequest) <span class="kw">returns</span> (google.protobuf.Empty);
}

<span class="kw">message</span> CreateUserRequest {
    <span class="kw">string</span> name = <span class="num">1</span>;
    <span class="kw">string</span> email = <span class="num">2</span>;
    <span class="kw">string</span> password = <span class="num">3</span>;
}

<span class="kw">message</span> GetUserRequest {
    <span class="kw">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> ListUsersRequest {
    <span class="kw">int32</span> limit = <span class="num">1</span>;
    <span class="kw">int32</span> offset = <span class="num">2</span>;
}

<span class="kw">message</span> UpdateUserRequest {
    <span class="kw">string</span> id = <span class="num">1</span>;
    <span class="kw">string</span> name = <span class="num">2</span>;
    <span class="kw">string</span> email = <span class="num">3</span>;
}

<span class="kw">message</span> DeleteUserRequest {
    <span class="kw">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> UserResponse {
    <span class="kw">string</span> id = <span class="num">1</span>;
    <span class="kw">string</span> name = <span class="num">2</span>;
    <span class="kw">string</span> email = <span class="num">3</span>;
    google.protobuf.Timestamp created_at = <span class="num">4</span>;
    google.protobuf.Timestamp updated_at = <span class="num">5</span>;
}

<span class="kw">message</span> ListUsersResponse {
    <span class="kw">repeated</span> UserResponse users = <span class="num">1</span>;
    <span class="kw">int32</span> total = <span class="num">2</span>;
}</div>
<div class="info-box">
<strong>${t('Generate Go code:','Generate Go code:')}</strong> ${t('Jalankan <code>protoc --go_out=. --go-grpc_out=. api/proto/user.proto</code>. Ini menghasilkan <code>user.pb.go</code> (message types) dan <code>user_grpc.pb.go</code> (service interface). Anda perlu install <code>protoc-gen-go</code> dan <code>protoc-gen-go-grpc</code>.','Run <code>protoc --go_out=. --go-grpc_out=. api/proto/user.proto</code>. This generates <code>user.pb.go</code> (message types) and <code>user_grpc.pb.go</code> (service interface). You need to install <code>protoc-gen-go</code> and <code>protoc-gen-go-grpc</code>.')}
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">gRPC Server Implementation</h3>
<div class="code-block"><span class="kw">package</span> handler

<span class="kw">import</span> (
    <span class="str">"context"</span>

    <span class="str">"github.com/google/uuid"</span>
    <span class="str">"google.golang.org/grpc/codes"</span>
    <span class="str">"google.golang.org/grpc/status"</span>
    <span class="str">"google.golang.org/protobuf/types/known/emptypb"</span>
    <span class="str">"google.golang.org/protobuf/types/known/timestamppb"</span>
    pb <span class="str">"myapp/api/proto/userpb"</span>
    <span class="str">"myapp/internal/model"</span>
    <span class="str">"myapp/internal/service"</span>
)

<span class="cm">// GRPCUserServer implements the generated UserServiceServer interface</span>
<span class="kw">type</span> GRPCUserServer <span class="kw">struct</span> {
    pb.UnimplementedUserServiceServer
    svc service.UserService
}

<span class="kw">func</span> <span class="fn">NewGRPCUserServer</span>(svc service.UserService) *GRPCUserServer {
    <span class="kw">return</span> &amp;GRPCUserServer{svc: svc}
}

<span class="kw">func</span> (s *GRPCUserServer) <span class="fn">CreateUser</span>(ctx context.Context, req *pb.CreateUserRequest) (*pb.UserResponse, <span class="kw">error</span>) {
    result, err := s.svc.<span class="fn">CreateUser</span>(ctx, model.CreateUserRequest{
        Name:     req.Name,
        Email:    req.Email,
        Password: req.Password,
    })
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, <span class="fn">mapErrorToGRPC</span>(err)
    }
    <span class="kw">return</span> <span class="fn">toProtoUser</span>(result), <span class="kw">nil</span>
}

<span class="kw">func</span> (s *GRPCUserServer) <span class="fn">GetUser</span>(ctx context.Context, req *pb.GetUserRequest) (*pb.UserResponse, <span class="kw">error</span>) {
    id, err := uuid.<span class="fn">Parse</span>(req.Id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, status.<span class="fn">Error</span>(codes.InvalidArgument, <span class="str">"invalid UUID"</span>)
    }
    result, err := s.svc.<span class="fn">GetUser</span>(ctx, id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, <span class="fn">mapErrorToGRPC</span>(err)
    }
    <span class="kw">return</span> <span class="fn">toProtoUser</span>(result), <span class="kw">nil</span>
}

<span class="kw">func</span> (s *GRPCUserServer) <span class="fn">ListUsers</span>(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, <span class="kw">error</span>) {
    results, err := s.svc.<span class="fn">ListUsers</span>(ctx, <span class="kw">int</span>(req.Limit), <span class="kw">int</span>(req.Offset))
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, <span class="fn">mapErrorToGRPC</span>(err)
    }
    users := <span class="kw">make</span>([]*pb.UserResponse, <span class="fn">len</span>(results))
    <span class="kw">for</span> i, u := <span class="kw">range</span> results {
        users[i] = <span class="fn">toProtoUser</span>(&amp;u)
    }
    <span class="kw">return</span> &amp;pb.ListUsersResponse{Users: users, Total: <span class="kw">int32</span>(<span class="fn">len</span>(results))}, <span class="kw">nil</span>
}

<span class="kw">func</span> (s *GRPCUserServer) <span class="fn">UpdateUser</span>(ctx context.Context, req *pb.UpdateUserRequest) (*pb.UserResponse, <span class="kw">error</span>) {
    id, err := uuid.<span class="fn">Parse</span>(req.Id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, status.<span class="fn">Error</span>(codes.InvalidArgument, <span class="str">"invalid UUID"</span>)
    }
    updateReq := model.UpdateUserRequest{Name: &amp;req.Name, Email: &amp;req.Email}
    result, err := s.svc.<span class="fn">UpdateUser</span>(ctx, id, updateReq)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, <span class="fn">mapErrorToGRPC</span>(err)
    }
    <span class="kw">return</span> <span class="fn">toProtoUser</span>(result), <span class="kw">nil</span>
}

<span class="kw">func</span> (s *GRPCUserServer) <span class="fn">DeleteUser</span>(ctx context.Context, req *pb.DeleteUserRequest) (*emptypb.Empty, <span class="kw">error</span>) {
    id, err := uuid.<span class="fn">Parse</span>(req.Id)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, status.<span class="fn">Error</span>(codes.InvalidArgument, <span class="str">"invalid UUID"</span>)
    }
    <span class="kw">if</span> err := s.svc.<span class="fn">DeleteUser</span>(ctx, id); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, <span class="fn">mapErrorToGRPC</span>(err)
    }
    <span class="kw">return</span> &amp;emptypb.Empty{}, <span class="kw">nil</span>
}

<span class="cm">// mapErrorToGRPC converts AppError to gRPC status codes</span>
<span class="kw">func</span> <span class="fn">mapErrorToGRPC</span>(err <span class="kw">error</span>) <span class="kw">error</span> {
    <span class="kw">if</span> appErr, ok := err.(*model.AppError); ok {
        <span class="kw">switch</span> appErr.Code {
        <span class="kw">case</span> <span class="num">400</span>: <span class="kw">return</span> status.<span class="fn">Error</span>(codes.InvalidArgument, appErr.Message)
        <span class="kw">case</span> <span class="num">401</span>: <span class="kw">return</span> status.<span class="fn">Error</span>(codes.Unauthenticated, appErr.Message)
        <span class="kw">case</span> <span class="num">403</span>: <span class="kw">return</span> status.<span class="fn">Error</span>(codes.PermissionDenied, appErr.Message)
        <span class="kw">case</span> <span class="num">404</span>: <span class="kw">return</span> status.<span class="fn">Error</span>(codes.NotFound, appErr.Message)
        <span class="kw">case</span> <span class="num">409</span>: <span class="kw">return</span> status.<span class="fn">Error</span>(codes.AlreadyExists, appErr.Message)
        }
    }
    <span class="kw">return</span> status.<span class="fn">Error</span>(codes.Internal, <span class="str">"internal server error"</span>)
}

<span class="cm">// toProtoUser converts domain UserResponse to protobuf UserResponse</span>
<span class="kw">func</span> <span class="fn">toProtoUser</span>(u *model.UserResponse) *pb.UserResponse {
    <span class="kw">return</span> &amp;pb.UserResponse{
        Id:        u.ID.<span class="fn">String</span>(),
        Name:      u.Name,
        Email:     u.Email,
        CreatedAt: timestamppb.<span class="fn">New</span>(u.CreatedAt),
        UpdatedAt: timestamppb.<span class="fn">New</span>(u.UpdatedAt),
    }
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">gRPC Interceptors (Logging &amp; Auth)</h3>
<div class="code-block"><span class="kw">package</span> handler

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"log/slog"</span>
    <span class="str">"time"</span>

    <span class="str">"google.golang.org/grpc"</span>
    <span class="str">"google.golang.org/grpc/codes"</span>
    <span class="str">"google.golang.org/grpc/metadata"</span>
    <span class="str">"google.golang.org/grpc/status"</span>
)

<span class="cm">// UnaryLoggingInterceptor logs every gRPC call</span>
<span class="kw">func</span> <span class="fn">UnaryLoggingInterceptor</span>(logger *slog.Logger) grpc.UnaryServerInterceptor {
    <span class="kw">return</span> <span class="kw">func</span>(ctx context.Context, req <span class="kw">interface</span>{},
        info *grpc.UnaryServerInfo, handler grpc.UnaryHandler,
    ) (<span class="kw">interface</span>{}, <span class="kw">error</span>) {
        start := time.<span class="fn">Now</span>()
        resp, err := <span class="fn">handler</span>(ctx, req)

        logger.<span class="fn">Info</span>(<span class="str">"gRPC call"</span>,
            <span class="str">"method"</span>, info.FullMethod,
            <span class="str">"duration_ms"</span>, time.<span class="fn">Since</span>(start).<span class="fn">Milliseconds</span>(),
            <span class="str">"error"</span>, err,
        )
        <span class="kw">return</span> resp, err
    }
}

<span class="cm">// UnaryAuthInterceptor validates JWT from gRPC metadata</span>
<span class="kw">func</span> <span class="fn">UnaryAuthInterceptor</span>(secret <span class="kw">string</span>) grpc.UnaryServerInterceptor {
    <span class="kw">return</span> <span class="kw">func</span>(ctx context.Context, req <span class="kw">interface</span>{},
        info *grpc.UnaryServerInfo, handler grpc.UnaryHandler,
    ) (<span class="kw">interface</span>{}, <span class="kw">error</span>) {
        <span class="cm">// Skip auth for certain methods (e.g., CreateUser)</span>
        <span class="kw">if</span> info.FullMethod == <span class="str">"/user.UserService/CreateUser"</span> {
            <span class="kw">return</span> <span class="fn">handler</span>(ctx, req)
        }

        md, ok := metadata.<span class="fn">FromIncomingContext</span>(ctx)
        <span class="kw">if</span> !ok {
            <span class="kw">return</span> <span class="kw">nil</span>, status.<span class="fn">Error</span>(codes.Unauthenticated, <span class="str">"missing metadata"</span>)
        }

        tokens := md.<span class="fn">Get</span>(<span class="str">"authorization"</span>)
        <span class="kw">if</span> <span class="fn">len</span>(tokens) == <span class="num">0</span> {
            <span class="kw">return</span> <span class="kw">nil</span>, status.<span class="fn">Error</span>(codes.Unauthenticated, <span class="str">"missing token"</span>)
        }

        <span class="cm">// Validate JWT token (reuse same logic as HTTP)</span>
        <span class="cm">// ... parse and validate token ...</span>

        <span class="kw">return</span> <span class="fn">handler</span>(ctx, req)
    }
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">gRPC Client Example</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"log"</span>
    <span class="str">"time"</span>

    <span class="str">"google.golang.org/grpc"</span>
    <span class="str">"google.golang.org/grpc/credentials/insecure"</span>
    pb <span class="str">"myapp/api/proto/userpb"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Connect to gRPC server</span>
    conn, err := grpc.<span class="fn">Dial</span>(<span class="str">"localhost:9090"</span>,
        grpc.<span class="fn">WithTransportCredentials</span>(insecure.<span class="fn">NewCredentials</span>()),
    )
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        log.<span class="fn">Fatal</span>(err)
    }
    <span class="kw">defer</span> conn.<span class="fn">Close</span>()

    client := pb.<span class="fn">NewUserServiceClient</span>(conn)
    ctx, cancel := context.<span class="fn">WithTimeout</span>(context.<span class="fn">Background</span>(), <span class="num">5</span>*time.Second)
    <span class="kw">defer</span> <span class="fn">cancel</span>()

    <span class="cm">// Create user via gRPC</span>
    created, err := client.<span class="fn">CreateUser</span>(ctx, &amp;pb.CreateUserRequest{
        Name:     <span class="str">"Alice"</span>,
        Email:    <span class="str">"alice@example.com"</span>,
        Password: <span class="str">"securePassword123"</span>,
    })
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        log.<span class="fn">Fatal</span>(err)
    }
    fmt.<span class="fn">Printf</span>(<span class="str">"Created: %s (%s)\n"</span>, created.Name, created.Id)

    <span class="cm">// List users via gRPC</span>
    list, err := client.<span class="fn">ListUsers</span>(ctx, &amp;pb.ListUsersRequest{
        Limit:  <span class="num">10</span>,
        Offset: <span class="num">0</span>,
    })
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        log.<span class="fn">Fatal</span>(err)
    }
    <span class="kw">for</span> _, u := <span class="kw">range</span> list.Users {
        fmt.<span class="fn">Printf</span>(<span class="str">"- %s (%s)\n"</span>, u.Name, u.Email)
    }
}</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">${t('REST vs gRPC: Perbandingan','REST vs gRPC: Comparison')}</h3>
<div class="table-wrapper">
<table>
<tr><th>${t('Aspek','Aspect')}</th><th>REST (HTTP/JSON)</th><th>gRPC (HTTP/2 + Protobuf)</th></tr>
<tr><td>${t('Format Data','Data Format')}</td><td>JSON (text-based, human-readable)</td><td>Protobuf (binary, compact)</td></tr>
<tr><td>Performance</td><td>${t('Baik untuk web clients','Good for web clients')}</td><td>${t('~10x lebih cepat (serialization)','~10x faster (serialization)')}</td></tr>
<tr><td>Streaming</td><td>${t('Limited (SSE, WebSocket terpisah)','Limited (SSE, separate WebSocket)')}</td><td>Native bidirectional streaming</td></tr>
<tr><td>Code Generation</td><td>Manual / OpenAPI codegen</td><td>${t('Otomatis dari .proto','Automatic from .proto')}</td></tr>
<tr><td>Browser Support</td><td>Native (fetch/XMLHttpRequest)</td><td>${t('Butuh gRPC-Web proxy','Requires gRPC-Web proxy')}</td></tr>
<tr><td>Use Case</td><td>Public API, web frontend</td><td>Microservice-to-microservice</td></tr>
<tr><td>Tooling</td><td>Postman, curl, browser</td><td>grpcurl, BloomRPC, Evans</td></tr>
</table>
</div>
<div class="info-box">
<strong>gRPC-Gateway:</strong> ${t('Dengan <code>grpc-gateway</code>, Anda bisa serve REST dan gRPC dari satu server. Client web mengakses via REST, sementara microservice internal berkomunikasi via gRPC. Ini pola yang sangat umum di production.','With <code>grpc-gateway</code>, you can serve REST and gRPC from a single server. Web clients access via REST, while internal microservices communicate via gRPC. This is a very common pattern in production.')}
</div>
</div>

<!-- ===================== 8. ENTRY POINT ===================== -->
<h2 class="animate-in">8. Entry Point &amp; Graceful Shutdown</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Main Server (cmd/server/main.go)</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"log/slog"</span>
    <span class="str">"net"</span>
    <span class="str">"net/http"</span>
    <span class="str">"os"</span>
    <span class="str">"os/signal"</span>
    <span class="str">"syscall"</span>
    <span class="str">"time"</span>

    <span class="str">"github.com/gin-gonic/gin"</span>
    <span class="str">"google.golang.org/grpc"</span>
    pb <span class="str">"myapp/api/proto/userpb"</span>
    <span class="str">"myapp/internal/config"</span>
    <span class="str">"myapp/internal/handler"</span>
    <span class="str">"myapp/internal/repository"</span>
    <span class="str">"myapp/internal/service"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// 1. Load configuration</span>
    cfg := config.<span class="fn">Load</span>()

    <span class="cm">// 2. Setup structured logger</span>
    logger := slog.<span class="fn">New</span>(slog.<span class="fn">NewJSONHandler</span>(os.Stdout, &amp;slog.HandlerOptions{
        Level: slog.LevelInfo,
    }))
    slog.<span class="fn">SetDefault</span>(logger)

    <span class="cm">// 3. Connect to database</span>
    db, err := repository.<span class="fn">NewPostgresDB</span>(cfg.Database)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        logger.<span class="fn">Error</span>(<span class="str">"database connection failed"</span>, <span class="str">"error"</span>, err)
        os.<span class="fn">Exit</span>(<span class="num">1</span>)
    }
    <span class="kw">defer</span> db.<span class="fn">Close</span>()
    logger.<span class="fn">Info</span>(<span class="str">"database connected"</span>)

    <span class="cm">// 4. Wire dependencies (Manual DI)</span>
    userRepo := repository.<span class="fn">NewUserRepository</span>(db)
    userSvc := service.<span class="fn">NewUserService</span>(userRepo, logger)
    userHandler := handler.<span class="fn">NewUserHandler</span>(userSvc)
    grpcUserSvc := handler.<span class="fn">NewGRPCUserServer</span>(userSvc)

    <span class="cm">// 5. Setup HTTP server (Gin)</span>
    gin.<span class="fn">SetMode</span>(gin.ReleaseMode)
    router := gin.<span class="fn">New</span>()

    <span class="cm">// Apply middleware</span>
    rl := handler.<span class="fn">NewRateLimiter</span>(<span class="num">10</span>, <span class="num">20</span>) <span class="cm">// 10 req/s, burst 20</span>
    router.<span class="fn">Use</span>(handler.<span class="fn">CORSMiddleware</span>())
    router.<span class="fn">Use</span>(handler.<span class="fn">RequestLoggerMiddleware</span>(logger))
    router.<span class="fn">Use</span>(rl.<span class="fn">Middleware</span>())
    router.<span class="fn">Use</span>(gin.<span class="fn">Recovery</span>())

    <span class="cm">// Health check (no auth required)</span>
    router.<span class="fn">GET</span>(<span class="str">"/health"</span>, <span class="kw">func</span>(c *gin.Context) {
        c.<span class="fn">JSON</span>(<span class="num">200</span>, gin.H{<span class="str">"status"</span>: <span class="str">"ok"</span>})
    })

    <span class="cm">// API routes</span>
    v1 := router.<span class="fn">Group</span>(<span class="str">"/api/v1"</span>)
    public := v1.<span class="fn">Group</span>(<span class="str">""</span>)
    userHandler.<span class="fn">RegisterPublicRoutes</span>(public) <span class="cm">// POST /users, POST /login</span>

    protected := v1.<span class="fn">Group</span>(<span class="str">""</span>)
    protected.<span class="fn">Use</span>(handler.<span class="fn">JWTAuthMiddleware</span>(cfg.JWT.Secret))
    userHandler.<span class="fn">RegisterRoutes</span>(protected) <span class="cm">// CRUD with auth</span>

    httpServer := &amp;http.Server{
        Addr:         <span class="str">":"</span> + cfg.Server.HTTPPort,
        Handler:      router,
        ReadTimeout:  cfg.Server.ReadTimeout,
        WriteTimeout: cfg.Server.WriteTimeout,
        IdleTimeout:  cfg.Server.IdleTimeout,
    }

    <span class="cm">// 6. Setup gRPC server</span>
    grpcServer := grpc.<span class="fn">NewServer</span>(
        grpc.<span class="fn">ChainUnaryInterceptor</span>(
            handler.<span class="fn">UnaryLoggingInterceptor</span>(logger),
            handler.<span class="fn">UnaryAuthInterceptor</span>(cfg.JWT.Secret),
        ),
    )
    pb.<span class="fn">RegisterUserServiceServer</span>(grpcServer, grpcUserSvc)

    <span class="cm">// 7. Start servers in goroutines</span>
    <span class="kw">go</span> <span class="kw">func</span>() {
        logger.<span class="fn">Info</span>(<span class="str">"HTTP server starting"</span>, <span class="str">"port"</span>, cfg.Server.HTTPPort)
        <span class="kw">if</span> err := httpServer.<span class="fn">ListenAndServe</span>(); err != <span class="kw">nil</span> &amp;&amp; err != http.ErrServerClosed {
            logger.<span class="fn">Error</span>(<span class="str">"HTTP server error"</span>, <span class="str">"error"</span>, err)
        }
    }()

    <span class="kw">go</span> <span class="kw">func</span>() {
        lis, err := net.<span class="fn">Listen</span>(<span class="str">"tcp"</span>, <span class="str">":"</span>+cfg.Server.GRPCPort)
        <span class="kw">if</span> err != <span class="kw">nil</span> {
            logger.<span class="fn">Error</span>(<span class="str">"gRPC listen error"</span>, <span class="str">"error"</span>, err)
            <span class="kw">return</span>
        }
        logger.<span class="fn">Info</span>(<span class="str">"gRPC server starting"</span>, <span class="str">"port"</span>, cfg.Server.GRPCPort)
        <span class="kw">if</span> err := grpcServer.<span class="fn">Serve</span>(lis); err != <span class="kw">nil</span> {
            logger.<span class="fn">Error</span>(<span class="str">"gRPC server error"</span>, <span class="str">"error"</span>, err)
        }
    }()

    <span class="cm">// 8. Graceful shutdown</span>
    quit := <span class="kw">make</span>(<span class="kw">chan</span> os.Signal, <span class="num">1</span>)
    signal.<span class="fn">Notify</span>(quit, syscall.SIGINT, syscall.SIGTERM)
    sig := &lt;-quit
    logger.<span class="fn">Info</span>(<span class="str">"shutdown signal received"</span>, <span class="str">"signal"</span>, sig)

    <span class="cm">// Give in-flight requests 30 seconds to complete</span>
    ctx, cancel := context.<span class="fn">WithTimeout</span>(context.<span class="fn">Background</span>(), <span class="num">30</span>*time.Second)
    <span class="kw">defer</span> <span class="fn">cancel</span>()

    grpcServer.<span class="fn">GracefulStop</span>()
    logger.<span class="fn">Info</span>(<span class="str">"gRPC server stopped"</span>)

    <span class="kw">if</span> err := httpServer.<span class="fn">Shutdown</span>(ctx); err != <span class="kw">nil</span> {
        logger.<span class="fn">Error</span>(<span class="str">"HTTP shutdown error"</span>, <span class="str">"error"</span>, err)
    }
    logger.<span class="fn">Info</span>(<span class="str">"HTTP server stopped"</span>)
    logger.<span class="fn">Info</span>(<span class="str">"server exited cleanly"</span>)
}</div>
<div class="info-box">
<strong>Graceful Shutdown:</strong> ${t('Server menangkap SIGINT (Ctrl+C) dan SIGTERM (docker stop). In-flight request diberi waktu 30 detik untuk selesai sebelum server benar-benar berhenti. Ini mencegah data corruption dan connection reset ke client.','The server catches SIGINT (Ctrl+C) and SIGTERM (docker stop). In-flight requests are given 30 seconds to complete before the server fully stops. This prevents data corruption and connection resets to clients.')}
</div>
</div>

<!-- ===================== 9. SECURITY ===================== -->
<h2 class="animate-in">9. Security Best Practices</h2>

<div class="card animate-in">
<h3 style="color:var(--red)">${t('Security Checklist Production','Production Security Checklist')}</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
<div>
<h4>Input &amp; Data</h4>
<ul>
<li><strong>Input Validation</strong> &mdash; ${t('Gunakan <code>go-playground/validator</code> untuk setiap request. Jangan pernah trust user input','Use <code>go-playground/validator</code> for every request. Never trust user input')}</li>
<li><strong>SQL Injection Prevention</strong> &mdash; ${t('Selalu gunakan parameterized queries ($1, $2). Jangan pernah string concatenation untuk SQL','Always use parameterized queries ($1, $2). Never use string concatenation for SQL')}</li>
<li><strong>Password Hashing</strong> &mdash; ${t('bcrypt (cost 12+) atau argon2id. Jangan pernah simpan plaintext','bcrypt (cost 12+) or argon2id. Never store plaintext')}</li>
<li><strong>XSS Prevention</strong> &mdash; ${t('Escape output HTML. Go template sudah auto-escape','Escape HTML output. Go templates already auto-escape')}</li>
</ul>
</div>
<div>
<h4>Transport &amp; Auth</h4>
<ul>
<li><strong>HTTPS/TLS</strong> &mdash; ${t('Selalu gunakan TLS di production. Gunakan Let&#39;s Encrypt untuk cert gratis','Always use TLS in production. Use Let&#39;s Encrypt for free certificates')}</li>
<li><strong>JWT Best Practices</strong> &mdash; ${t('Access token pendek (15m), refresh token panjang (7d), simpan di httpOnly cookie','Short access token (15m), long refresh token (7d), store in httpOnly cookie')}</li>
<li><strong>Rate Limiting</strong> &mdash; ${t('Per IP dan per user. Cegah brute force dan DDoS','Per IP and per user. Prevent brute force and DDoS')}</li>
<li><strong>CORS</strong> &mdash; ${t('Whitelist domain, jangan gunakan wildcard (*)','Whitelist domains, do not use wildcard (*)')}</li>
</ul>
</div>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">Password Hashing: bcrypt vs argon2</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-bcrypt">bcrypt</button>
<button class="tab-btn" data-tab="go-argon2">argon2id</button>
</div>

<div class="tab-content active" id="go-bcrypt">
<div class="code-block"><span class="kw">import</span> <span class="str">"golang.org/x/crypto/bcrypt"</span>

<span class="cm">// Hash password (cost 12 = ~250ms on modern hardware)</span>
<span class="kw">func</span> <span class="fn">HashPassword</span>(password <span class="kw">string</span>) (<span class="kw">string</span>, <span class="kw">error</span>) {
    bytes, err := bcrypt.<span class="fn">GenerateFromPassword</span>(
        []<span class="kw">byte</span>(password), <span class="num">12</span>,
    )
    <span class="kw">return</span> <span class="kw">string</span>(bytes), err
}

<span class="cm">// Verify password against hash</span>
<span class="kw">func</span> <span class="fn">CheckPassword</span>(password, hash <span class="kw">string</span>) <span class="kw">bool</span> {
    err := bcrypt.<span class="fn">CompareHashAndPassword</span>(
        []<span class="kw">byte</span>(hash), []<span class="kw">byte</span>(password),
    )
    <span class="kw">return</span> err == <span class="kw">nil</span>
}

<span class="cm">// bcrypt automatically handles salt generation</span>
<span class="cm">// Output: "$2a$12$LJ3m4ys..." (60 chars, includes algorithm+cost+salt+hash)</span>
<span class="cm">// Max input: 72 bytes (bcrypt limitation)</span></div>
</div>

<div class="tab-content" id="go-argon2">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"crypto/rand"</span>
    <span class="str">"crypto/subtle"</span>
    <span class="str">"encoding/base64"</span>
    <span class="str">"fmt"</span>

    <span class="str">"golang.org/x/crypto/argon2"</span>
)

<span class="kw">type</span> Argon2Params <span class="kw">struct</span> {
    Memory      <span class="kw">uint32</span> <span class="cm">// KB (64*1024 = 64MB)</span>
    Iterations  <span class="kw">uint32</span> <span class="cm">// time cost (3)</span>
    Parallelism <span class="kw">uint8</span>  <span class="cm">// threads (2)</span>
    SaltLength  <span class="kw">uint32</span> <span class="cm">// 16 bytes</span>
    KeyLength   <span class="kw">uint32</span> <span class="cm">// 32 bytes</span>
}

<span class="kw">func</span> <span class="fn">HashPasswordArgon2</span>(password <span class="kw">string</span>, p Argon2Params) (<span class="kw">string</span>, <span class="kw">error</span>) {
    salt := <span class="kw">make</span>([]<span class="kw">byte</span>, p.SaltLength)
    _, err := rand.<span class="fn">Read</span>(salt)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="str">""</span>, err
    }

    hash := argon2.<span class="fn">IDKey</span>(
        []<span class="kw">byte</span>(password), salt,
        p.Iterations, p.Memory, p.Parallelism, p.KeyLength,
    )

    <span class="cm">// Encode as: $argon2id$v=19$m=65536,t=3,p=2$salt$hash</span>
    encoded := fmt.<span class="fn">Sprintf</span>(<span class="str">"$argon2id$v=%d$m=%d,t=%d,p=%d$%s$%s"</span>,
        argon2.Version, p.Memory, p.Iterations, p.Parallelism,
        base64.RawStdEncoding.<span class="fn">EncodeToString</span>(salt),
        base64.RawStdEncoding.<span class="fn">EncodeToString</span>(hash),
    )
    <span class="kw">return</span> encoded, <span class="kw">nil</span>
}

<span class="cm">// argon2id is the recommended variant (resists side-channel + GPU attacks)</span>
<span class="cm">// No 72-byte limit like bcrypt</span>
<span class="cm">// OWASP recommended params: memory=64MB, iterations=3, parallelism=2</span></div>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">${t('Environment Variables &amp; Secrets','Environment Variables &amp; Secrets')}</h3>
<div class="code-block"><span class="cm">// .env file (JANGAN commit ke git!)</span>
DB_HOST=localhost
DB_PORT=5432
DB_USER=myapp
DB_PASSWORD=super_secret_password_here
DB_NAME=myapp_db
DB_SSLMODE=require

JWT_SECRET=your-256-bit-secret-key-here
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=168h

REDIS_ADDR=localhost:6379

HTTP_PORT=8080
GRPC_PORT=9090</div>
<div class="code-block"><span class="cm">// .gitignore - WAJIB tambahkan:</span>
.env
.env.local
.env.production
*.pem
*.key</div>
<div class="warn-box">
<strong>${t('Production Secrets:','Production Secrets:')}</strong> ${t('Jangan gunakan .env file di production. Gunakan:','Do not use .env files in production. Use:')}<br>
&bull; <strong>Docker secrets</strong> atau <strong>Kubernetes secrets</strong><br>
&bull; <strong>HashiCorp Vault</strong> ${t('untuk secret rotation','for secret rotation')}<br>
&bull; <strong>AWS Secrets Manager</strong> / <strong>GCP Secret Manager</strong><br>
&bull; ${t('Environment variables yang di-inject oleh CI/CD pipeline','Environment variables injected by CI/CD pipeline')}
</div>
</div>

<!-- ===================== 10. DATABASE MIGRATION ===================== -->
<h2 class="animate-in">10. Database &amp; Migrations</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">SQL Migration (migrations/)</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-migrate-up">000001_create_users.up.sql</button>
<button class="tab-btn" data-tab="go-migrate-down">000001_create_users.down.sql</button>
<button class="tab-btn" data-tab="go-migrate-cmd">Makefile Commands</button>
</div>

<div class="tab-content active" id="go-migrate-up">
<div class="code-block"><span class="cm">-- 000001_create_users.up.sql</span>
<span class="kw">CREATE EXTENSION IF NOT EXISTS</span> <span class="str">"uuid-ossp"</span>;

<span class="kw">CREATE TABLE IF NOT EXISTS</span> users (
    id           UUID <span class="kw">PRIMARY KEY DEFAULT</span> uuid_generate_v4(),
    name         VARCHAR(<span class="num">100</span>) <span class="kw">NOT NULL</span>,
    email        VARCHAR(<span class="num">255</span>) <span class="kw">NOT NULL UNIQUE</span>,
    password_hash VARCHAR(<span class="num">255</span>) <span class="kw">NOT NULL</span>,
    created_at   TIMESTAMPTZ <span class="kw">NOT NULL DEFAULT</span> NOW(),
    updated_at   TIMESTAMPTZ <span class="kw">NOT NULL DEFAULT</span> NOW()
);

<span class="cm">-- Index for email lookups (login)</span>
<span class="kw">CREATE INDEX</span> idx_users_email <span class="kw">ON</span> users(email);

<span class="cm">-- Auto-update updated_at on row modification</span>
<span class="kw">CREATE OR REPLACE FUNCTION</span> update_updated_at()
<span class="kw">RETURNS</span> TRIGGER <span class="kw">AS</span> $$
<span class="kw">BEGIN</span>
    NEW.updated_at = NOW();
    <span class="kw">RETURN</span> NEW;
<span class="kw">END</span>;
$$ <span class="kw">LANGUAGE</span> plpgsql;

<span class="kw">CREATE TRIGGER</span> trigger_users_updated_at
    <span class="kw">BEFORE UPDATE ON</span> users
    <span class="kw">FOR EACH ROW EXECUTE FUNCTION</span> update_updated_at();</div>
</div>

<div class="tab-content" id="go-migrate-down">
<div class="code-block"><span class="cm">-- 000001_create_users.down.sql</span>
<span class="kw">DROP TRIGGER IF EXISTS</span> trigger_users_updated_at <span class="kw">ON</span> users;
<span class="kw">DROP FUNCTION IF EXISTS</span> update_updated_at();
<span class="kw">DROP TABLE IF EXISTS</span> users;</div>
</div>

<div class="tab-content" id="go-migrate-cmd">
<div class="code-block"><span class="cm"># Makefile migration commands</span>

<span class="cm"># Install golang-migrate CLI</span>
<span class="kw">install-migrate</span>:
    go install -tags <span class="str">"postgres"</span> github.com/golang-migrate/migrate/v4/cmd/migrate@latest

<span class="cm"># Create new migration</span>
<span class="kw">migrate-create</span>:
    migrate create -ext sql -dir migrations -seq $(name)

<span class="cm"># Run migrations up</span>
<span class="kw">migrate-up</span>:
    migrate -path migrations -database <span class="str">"$(DB_URL)"</span> up

<span class="cm"># Rollback last migration</span>
<span class="kw">migrate-down</span>:
    migrate -path migrations -database <span class="str">"$(DB_URL)"</span> down 1

<span class="cm"># Check current migration version</span>
<span class="kw">migrate-version</span>:
    migrate -path migrations -database <span class="str">"$(DB_URL)"</span> version

<span class="cm"># Usage: make migrate-create name=add_user_roles</span>
<span class="cm"># Usage: DB_URL="postgres://user:pass@localhost/db?sslmode=disable" make migrate-up</span></div>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">Transaction Handling</h3>
<div class="code-block"><span class="cm">// Transaction wrapper for multi-step operations</span>
<span class="kw">func</span> (r *userRepo) <span class="fn">CreateWithProfile</span>(ctx context.Context, user *model.User, profile *model.Profile) <span class="kw">error</span> {
    tx, err := r.db.<span class="fn">BeginTxx</span>(ctx, <span class="kw">nil</span>)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"begin tx: %w"</span>, err)
    }
    <span class="cm">// Rollback on any error (no-op if committed)</span>
    <span class="kw">defer</span> tx.<span class="fn">Rollback</span>()

    <span class="cm">// Step 1: Insert user</span>
    _, err = tx.<span class="fn">ExecContext</span>(ctx,
        <span class="str">"INSERT INTO users (id, name, email, password_hash) VALUES ($1, $2, $3, $4)"</span>,
        user.ID, user.Name, user.Email, user.Password,
    )
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"insert user: %w"</span>, err)
    }

    <span class="cm">// Step 2: Insert profile</span>
    _, err = tx.<span class="fn">ExecContext</span>(ctx,
        <span class="str">"INSERT INTO profiles (user_id, bio, avatar_url) VALUES ($1, $2, $3)"</span>,
        user.ID, profile.Bio, profile.AvatarURL,
    )
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"insert profile: %w"</span>, err) <span class="cm">// triggers defer Rollback</span>
    }

    <span class="cm">// Both succeeded, commit</span>
    <span class="kw">return</span> tx.<span class="fn">Commit</span>()
}</div>
<div class="info-box">
<strong>Pattern:</strong> ${t('Selalu gunakan <code>defer tx.Rollback()</code> setelah <code>BeginTx</code>. Jika <code>Commit()</code> berhasil, Rollback menjadi no-op. Jika ada error sebelum Commit, transaction otomatis di-rollback saat function return.','Always use <code>defer tx.Rollback()</code> after <code>BeginTx</code>. If <code>Commit()</code> succeeds, Rollback becomes a no-op. If there is an error before Commit, the transaction is automatically rolled back when the function returns.')}
</div>
</div>

<!-- ===================== 11. DOCKER ===================== -->
<h2 class="animate-in">11. Docker &amp; Deployment</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Multi-Stage Dockerfile</h3>
<div class="code-block"><span class="cm"># Stage 1: Build</span>
<span class="kw">FROM</span> golang:1.22-alpine <span class="kw">AS</span> builder

<span class="kw">WORKDIR</span> /app

<span class="cm"># Cache dependencies</span>
<span class="kw">COPY</span> go.mod go.sum ./
<span class="kw">RUN</span> go mod download

<span class="cm"># Copy source and build</span>
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> CGO_ENABLED=0 GOOS=linux go build \
    -ldflags=<span class="str">"-w -s"</span> \
    -o /app/server ./cmd/server/

<span class="cm"># Stage 2: Runtime (minimal image)</span>
<span class="kw">FROM</span> alpine:3.19

<span class="kw">RUN</span> apk --no-cache add ca-certificates tzdata

<span class="cm"># Non-root user for security</span>
<span class="kw">RUN</span> addgroup -S app &amp;&amp; adduser -S app -G app
<span class="kw">USER</span> app

<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> --from=builder /app/server .
<span class="kw">COPY</span> --from=builder /app/migrations ./migrations

<span class="kw">EXPOSE</span> 8080 9090

<span class="kw">HEALTHCHECK</span> --interval=30s --timeout=3s --retries=3 \
    CMD wget -qO- http://localhost:8080/health || exit 1

<span class="kw">ENTRYPOINT</span> [<span class="str">"./server"</span>]</div>
<div class="info-box">
<strong>Multi-stage build:</strong> ${t('Stage 1 (builder) menggunakan image Go penuh (~800MB) untuk compile. Stage 2 hanya menyalin binary ke Alpine (~5MB). Hasil akhir: image ~15-20MB vs ~800MB. Flags <code>-ldflags=&quot;-w -s&quot;</code> menghilangkan debug info untuk binary lebih kecil.','Stage 1 (builder) uses the full Go image (~800MB) to compile. Stage 2 only copies the binary to Alpine (~5MB). Final result: image ~15-20MB vs ~800MB. Flags <code>-ldflags=&quot;-w -s&quot;</code> strip debug info for a smaller binary.')}
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">docker-compose.yml</h3>
<div class="code-block"><span class="kw">version</span>: <span class="str">"3.9"</span>

<span class="kw">services</span>:
  <span class="fn">app</span>:
    build: .
    ports:
      - <span class="str">"8080:8080"</span>   <span class="cm"># REST API</span>
      - <span class="str">"9090:9090"</span>   <span class="cm"># gRPC</span>
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USER=myapp
      - DB_PASSWORD=secret
      - DB_NAME=myapp_db
      - DB_SSLMODE=disable
      - JWT_SECRET=dev-secret-change-in-production
      - REDIS_ADDR=redis:6379
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
    restart: unless-stopped

  <span class="fn">postgres</span>:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: myapp
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: myapp_db
    ports:
      - <span class="str">"5432:5432"</span>
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: [<span class="str">"CMD-SHELL"</span>, <span class="str">"pg_isready -U myapp"</span>]
      interval: 5s
      timeout: 5s
      retries: 5

  <span class="fn">redis</span>:
    image: redis:7-alpine
    ports:
      - <span class="str">"6379:6379"</span>
    volumes:
      - redisdata:/data

<span class="kw">volumes</span>:
  pgdata:
  redisdata:</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--yellow)">Makefile</h3>
<div class="code-block"><span class="cm"># Makefile - Common commands</span>

<span class="kw">.PHONY</span>: build run test lint docker-up docker-down

<span class="kw">build</span>:
    go build -o bin/server ./cmd/server/

<span class="kw">run</span>:
    go run ./cmd/server/

<span class="kw">test</span>:
    go test -v -race -cover ./...

<span class="kw">lint</span>:
    golangci-lint run ./...

<span class="kw">docker-up</span>:
    docker-compose up -d --build

<span class="kw">docker-down</span>:
    docker-compose down -v

<span class="kw">proto</span>:
    protoc --go_out=. --go-grpc_out=. api/proto/*.proto

<span class="kw">mock</span>:
    mockgen -source=internal/repository/user_repo.go -destination=internal/repository/mock/user_repo_mock.go</div>
</div>

<!-- ===================== 12. TESTING ===================== -->
<h2 class="animate-in">12. Testing Strategy</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Unit Test: Service Layer</h3>
<div class="code-block"><span class="kw">package</span> service_test

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"log/slog"</span>
    <span class="str">"os"</span>
    <span class="str">"testing"</span>

    <span class="str">"github.com/google/uuid"</span>
    <span class="str">"github.com/stretchr/testify/assert"</span>
    <span class="str">"github.com/stretchr/testify/mock"</span>
    <span class="str">"myapp/internal/model"</span>
    <span class="str">"myapp/internal/service"</span>
)

<span class="cm">// MockUserRepo implements repository.UserRepository for testing</span>
<span class="kw">type</span> MockUserRepo <span class="kw">struct</span> {
    mock.Mock
}

<span class="kw">func</span> (m *MockUserRepo) <span class="fn">Create</span>(ctx context.Context, user *model.User) <span class="kw">error</span> {
    args := m.<span class="fn">Called</span>(ctx, user)
    <span class="kw">return</span> args.<span class="fn">Error</span>(<span class="num">0</span>)
}

<span class="kw">func</span> (m *MockUserRepo) <span class="fn">GetByEmail</span>(ctx context.Context, email <span class="kw">string</span>) (*model.User, <span class="kw">error</span>) {
    args := m.<span class="fn">Called</span>(ctx, email)
    <span class="kw">if</span> args.<span class="fn">Get</span>(<span class="num">0</span>) == <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="kw">nil</span>, args.<span class="fn">Error</span>(<span class="num">1</span>)
    }
    <span class="kw">return</span> args.<span class="fn">Get</span>(<span class="num">0</span>).(*model.User), args.<span class="fn">Error</span>(<span class="num">1</span>)
}

<span class="cm">// ... implement other interface methods ...</span>

<span class="kw">func</span> <span class="fn">TestCreateUser_Success</span>(t *testing.T) {
    mockRepo := <span class="kw">new</span>(MockUserRepo)
    logger := slog.<span class="fn">New</span>(slog.<span class="fn">NewTextHandler</span>(os.Stdout, <span class="kw">nil</span>))
    svc := service.<span class="fn">NewUserService</span>(mockRepo, logger)

    ctx := context.<span class="fn">Background</span>()
    req := model.CreateUserRequest{
        Name:     <span class="str">"Alice"</span>,
        Email:    <span class="str">"alice@example.com"</span>,
        Password: <span class="str">"securePass123"</span>,
    }

    <span class="cm">// Setup expectations</span>
    mockRepo.<span class="fn">On</span>(<span class="str">"GetByEmail"</span>, ctx, req.Email).<span class="fn">Return</span>(<span class="kw">nil</span>, model.ErrNotFound)
    mockRepo.<span class="fn">On</span>(<span class="str">"Create"</span>, ctx, mock.AnythingOfType(<span class="str">"*model.User"</span>)).<span class="fn">Return</span>(<span class="kw">nil</span>)

    <span class="cm">// Execute</span>
    result, err := svc.<span class="fn">CreateUser</span>(ctx, req)

    <span class="cm">// Assert</span>
    assert.<span class="fn">NoError</span>(t, err)
    assert.<span class="fn">NotNil</span>(t, result)
    assert.<span class="fn">Equal</span>(t, <span class="str">"Alice"</span>, result.Name)
    assert.<span class="fn">Equal</span>(t, <span class="str">"alice@example.com"</span>, result.Email)
    mockRepo.<span class="fn">AssertExpectations</span>(t)
}

<span class="kw">func</span> <span class="fn">TestCreateUser_DuplicateEmail</span>(t *testing.T) {
    mockRepo := <span class="kw">new</span>(MockUserRepo)
    logger := slog.<span class="fn">New</span>(slog.<span class="fn">NewTextHandler</span>(os.Stdout, <span class="kw">nil</span>))
    svc := service.<span class="fn">NewUserService</span>(mockRepo, logger)

    existingUser := &amp;model.User{ID: uuid.<span class="fn">New</span>(), Email: <span class="str">"alice@example.com"</span>}
    mockRepo.<span class="fn">On</span>(<span class="str">"GetByEmail"</span>, mock.Anything, <span class="str">"alice@example.com"</span>).<span class="fn">Return</span>(existingUser, <span class="kw">nil</span>)

    _, err := svc.<span class="fn">CreateUser</span>(context.<span class="fn">Background</span>(), model.CreateUserRequest{
        Name:     <span class="str">"Alice2"</span>,
        Email:    <span class="str">"alice@example.com"</span>,
        Password: <span class="str">"pass12345678"</span>,
    })

    assert.<span class="fn">Error</span>(t, err)
    appErr, ok := err.(*model.AppError)
    assert.<span class="fn">True</span>(t, ok)
    assert.<span class="fn">Equal</span>(t, <span class="num">409</span>, appErr.Code)
}</div>
<div class="info-box">
<strong>${t('Testing Strategy:','Testing Strategy:')}</strong> ${t('Mock repository untuk unit test service. Gunakan <code>testcontainers-go</code> untuk integration test dengan PostgreSQL asli. Jalankan <code>go test -race</code> untuk detect race conditions.','Mock the repository for unit testing services. Use <code>testcontainers-go</code> for integration tests with a real PostgreSQL. Run <code>go test -race</code> to detect race conditions.')}
</div>
</div>

<!-- ===================== 13. CANVAS ===================== -->
<h2 class="animate-in">13. Clean Architecture Flow</h2>

<div class="card animate-in">
<h3>${t('Visualisasi: Request Flow melalui Architecture Layers','Visualization: Request Flow through Architecture Layers')}</h3>
<p>${t('Animasi ini menunjukkan bagaimana sebuah HTTP/gRPC request mengalir melalui layer Clean Architecture: dari client, melalui Handler, Service, Repository, hingga Database, dan kembali sebagai response.','This animation shows how an HTTP/gRPC request flows through Clean Architecture layers: from client, through Handler, Service, Repository, to Database, and back as a response.')}</p>
<div class="anim-container">
<canvas id="canvas-crud-go-arch" width="800" height="400" style="width:100%;height:auto;border-radius:8px;"></canvas>
</div>
</div>

<!-- ===================== SWAGGER/OPENAPI ===================== -->
<h2 class="animate-in">14. Swagger / OpenAPI Documentation</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">${t('Auto-Generated API Docs dengan swaggo','Auto-Generated API Docs with swaggo')}</h3>
<p>${t('Gunakan <strong>swaggo/swag</strong> untuk auto-generate Swagger/OpenAPI docs dari Go annotations. Swagger UI tersedia di <code>/swagger/index.html</code>.','Use <strong>swaggo/swag</strong> to auto-generate Swagger/OpenAPI docs from Go annotations. Swagger UI is available at <code>/swagger/index.html</code>.')}</p>

<div class="code-block">
<span class="cm">// 1. Install swaggo</span>
<span class="cm">// go install github.com/swaggo/swag/cmd/swag@latest</span>

<span class="cm">// 2. Tambahkan annotations di handler</span>
<span class="cm">// @Summary      Create a new user</span>
<span class="cm">// @Description  Register a new user with name, email, password</span>
<span class="cm">// @Tags         users</span>
<span class="cm">// @Accept       json</span>
<span class="cm">// @Produce      json</span>
<span class="cm">// @Param        user body CreateUserRequest true "User data"</span>
<span class="cm">// @Success      201 {object} UserResponse</span>
<span class="cm">// @Failure      400 {object} ErrorResponse</span>
<span class="cm">// @Failure      409 {object} ErrorResponse</span>
<span class="cm">// @Security     BearerAuth</span>
<span class="cm">// @Router       /api/v1/users [post]</span>
<span class="kw">func</span> (h *UserHandler) <span class="fn">CreateUser</span>(c *gin.Context) {
    <span class="cm">// ... handler code</span>
}

<span class="cm">// 3. Main annotations (cmd/server/main.go)</span>
<span class="cm">// @title           User Management API</span>
<span class="cm">// @version         1.0</span>
<span class="cm">// @description     Production-ready CRUD API with Go</span>
<span class="cm">// @host            localhost:8080</span>
<span class="cm">// @BasePath        /api/v1</span>
<span class="cm">// @securityDefinitions.apikey BearerAuth</span>
<span class="cm">// @in header</span>
<span class="cm">// @name Authorization</span>

<span class="cm">// 4. Generate docs</span>
<span class="cm">// swag init -g cmd/server/main.go -o docs</span>

<span class="cm">// 5. Mount Swagger UI di router</span>
<span class="kw">import</span> swaggerFiles <span class="str">"github.com/swaggo/files"</span>
<span class="kw">import</span> ginSwagger <span class="str">"github.com/swaggo/gin-swagger"</span>
<span class="kw">import</span> _ <span class="str">"myapp/docs"</span> <span class="cm">// generated docs</span>

router.<span class="fn">GET</span>(<span class="str">"/swagger/*any"</span>, ginSwagger.<span class="fn">WrapHandler</span>(swaggerFiles.Handler))
<span class="cm">// Akses: http://localhost:8080/swagger/index.html</span>
</div>

<div class="info-box">
    <strong>PostgreSQL Connection:</strong> ${t('Gunakan <code>pgx</code> driver (native Go PostgreSQL driver, lebih cepat dari lib/pq) atau <code>sqlx</code> (extension database/sql dengan named params, struct scanning).','Use the <code>pgx</code> driver (native Go PostgreSQL driver, faster than lib/pq) or <code>sqlx</code> (database/sql extension with named params, struct scanning).')}
    <br><br>
    Connection string: <code>postgres://user:pass@localhost:5432/mydb?sslmode=disable</code><br>
    ${t('Production: selalu gunakan <code>sslmode=require</code> atau <code>verify-full</code>','Production: always use <code>sslmode=require</code> or <code>verify-full</code>')}
</div>
</div>

<!-- ===================== 15. QUICK REFERENCE ===================== -->
<h2 class="animate-in">15. Quick Reference: curl Commands</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">${t('Testing REST API dengan curl','Testing REST API with curl')}</h3>
<div class="code-block"><span class="cm"># 1. Create user</span>
curl -X POST http://localhost:8080/api/v1/users \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{"name":"Alice","email":"alice@example.com","password":"securePass123"}'</span>

<span class="cm"># Response: {"id":"uuid...","name":"Alice","email":"alice@example.com",...}</span>

<span class="cm"># 2. Login (get JWT token)</span>
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{"email":"alice@example.com","password":"securePass123"}'</span>

<span class="cm"># Response: {"access_token":"eyJ...","refresh_token":"eyJ..."}</span>

<span class="cm"># 3. List users (with auth)</span>
curl http://localhost:8080/api/v1/users \
  -H <span class="str">"Authorization: Bearer eyJhbGciOiJI..."</span>

<span class="cm"># 4. Get single user</span>
curl http://localhost:8080/api/v1/users/550e8400-e29b-41d4-a716-446655440000 \
  -H <span class="str">"Authorization: Bearer eyJ..."</span>

<span class="cm"># 5. Update user</span>
curl -X PUT http://localhost:8080/api/v1/users/550e8400-... \
  -H <span class="str">"Authorization: Bearer eyJ..."</span> \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{"name":"Alice Updated"}'</span>

<span class="cm"># 6. Delete user</span>
curl -X DELETE http://localhost:8080/api/v1/users/550e8400-... \
  -H <span class="str">"Authorization: Bearer eyJ..."</span>

<span class="cm"># 7. Health check</span>
curl http://localhost:8080/health

<span class="cm"># 8. Test gRPC with grpcurl</span>
grpcurl -plaintext -d <span class="str">'{"name":"Bob","email":"bob@test.com","password":"pass123456"}'</span> \
  localhost:9090 user.UserService/CreateUser</div>
</div>

<!-- ===================== 15. COMMON PITFALLS ===================== -->
<h2 class="animate-in">15. Common Pitfalls &amp; Anti-Patterns</h2>

<div class="card animate-in">
<h3 style="color:var(--red)">${t('Kesalahan Umum yang Harus Dihindari','Common Mistakes to Avoid')}</h3>
<div class="table-wrapper">
<table>
<tr><th>Anti-Pattern</th><th>${t('Masalah','Problem')}</th><th>${t('Solusi','Solution')}</th></tr>
<tr><td><code>db.Query("SELECT * FROM users WHERE id=&#39;" + id + "&#39;")</code></td><td>SQL Injection!</td><td>${t('Gunakan parameterized query: <code>db.Query(&quot;...WHERE id=$1&quot;, id)</code>','Use parameterized query: <code>db.Query(&quot;...WHERE id=$1&quot;, id)</code>')}</td></tr>
<tr><td>${t('Simpan password plaintext','Store password plaintext')}</td><td>${t('Data breach = semua password bocor','Data breach = all passwords leaked')}</td><td>${t('Selalu hash dengan bcrypt/argon2','Always hash with bcrypt/argon2')}</td></tr>
<tr><td>${t('Return User struct langsung (termasuk password hash)','Return User struct directly (including password hash)')}</td><td>${t('Password hash terekspos ke client','Password hash exposed to client')}</td><td>${t('Gunakan DTO terpisah (UserResponse tanpa password)','Use a separate DTO (UserResponse without password)')}</td></tr>
<tr><td>${t('Hardcode JWT secret di source code','Hardcode JWT secret in source code')}</td><td>${t('Secret terekspos di Git repository','Secret exposed in Git repository')}</td><td>${t('Gunakan environment variables','Use environment variables')}</td></tr>
<tr><td>${t('Tidak ada rate limiting','No rate limiting')}</td><td>Brute force login, DDoS</td><td>${t('Implementasi per-IP rate limiter','Implement per-IP rate limiter')}</td></tr>
<tr><td>CORS AllowOrigins: ["*"]</td><td>${t('Semua domain bisa akses API','All domains can access API')}</td><td>${t('Whitelist domain spesifik','Whitelist specific domains')}</td></tr>
<tr><td>${t('Tidak handle context cancellation','No context cancellation handling')}</td><td>${t('Request timeout tapi query masih jalan','Request timeout but query still runs')}</td><td>${t('Selalu gunakan <code>context.Context</code> dan pass ke DB','Always use <code>context.Context</code> and pass to DB')}</td></tr>
<tr><td>${t('Tidak ada graceful shutdown','No graceful shutdown')}</td><td>${t('In-flight request terputus saat deploy','In-flight requests interrupted during deploy')}</td><td>Handle SIGTERM, drain connections</td></tr>
<tr><td>Log sensitive data (password, token)</td><td>${t('Credentials di log files','Credentials in log files')}</td><td>${t('Hanya log non-sensitive fields','Only log non-sensitive fields')}</td></tr>
<tr><td>${t('Tidak ada connection pooling','No connection pooling')}</td><td>Connection exhaustion ${t('di production','in production')}</td><td>Set MaxOpenConns, MaxIdleConns</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--green)">${t('Summary: Checklist Production','Summary: Production Checklist')}</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
<div>
<h4>Code &amp; Architecture</h4>
<ul>
<li>Clean Architecture (Handler/Service/Repository)</li>
<li>Interface-based dependency injection</li>
<li>Custom error types with HTTP status codes</li>
<li>Input validation (go-playground/validator)</li>
<li>Structured logging (slog/zerolog)</li>
<li>Unit tests + integration tests</li>
<li>Graceful shutdown</li>
</ul>
</div>
<div>
<h4>Security &amp; Infrastructure</h4>
<ul>
<li>bcrypt/argon2 password hashing</li>
<li>JWT with access + refresh tokens</li>
<li>Rate limiting per IP</li>
<li>CORS whitelist</li>
<li>Parameterized SQL queries</li>
<li>Multi-stage Docker build</li>
<li>Database migrations</li>
<li>Health check endpoint</li>
<li>Environment-based configuration</li>
</ul>
</div>
</div>
</div>

</section>
`;

// ============================================================
// Canvas Animation: Clean Architecture Flow
// ============================================================
function initCrudGolangAnimations() {
    (function() {
        var canvas = document.getElementById('canvas-crud-go-arch');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        var animId = null;
        var tick = 0;

        var colors = {
            bg: '#1e1e2e',
            text: '#cdd6f4',
            accent: '#89b4fa',
            green: '#a6e3a1',
            yellow: '#f9e2af',
            red: '#f38ba8',
            peach: '#fab387',
            mauve: '#cba6f7',
            teal: '#94e2d5',
            surface: '#313244',
            overlay: '#45475a'
        };

        // Architecture layers
        var layers = [
            { label: 'Client', color: colors.accent, x: 60, y: 40, w: 120, h: 50 },
            { label: 'Handler', color: colors.green, x: 60, y: 120, w: 120, h: 50 },
            { label: 'Service', color: colors.yellow, x: 60, y: 200, w: 120, h: 50 },
            { label: 'Repository', color: colors.peach, x: 60, y: 280, w: 120, h: 50 },
            { label: 'Database', color: colors.red, x: 60, y: 355, w: 120, h: 40 }
        ];

        // REST path
        var restLayers = [
            { label: 'REST Client', color: colors.accent, x: 280, y: 40, w: 100, h: 45 },
            { label: 'Gin Router', color: '#74b9ff', x: 280, y: 100, w: 100, h: 40 },
            { label: 'Middleware', color: colors.teal, x: 280, y: 150, w: 100, h: 35 },
            { label: 'Handler', color: colors.green, x: 280, y: 200, w: 100, h: 40 },
            { label: 'Service', color: colors.yellow, x: 280, y: 255, w: 100, h: 40 },
            { label: 'Repository', color: colors.peach, x: 280, y: 310, w: 100, h: 40 },
            { label: 'PostgreSQL', color: colors.red, x: 280, y: 360, w: 100, h: 35 }
        ];

        // gRPC path
        var grpcLayers = [
            { label: 'gRPC Client', color: colors.mauve, x: 530, y: 40, w: 100, h: 45 },
            { label: 'Interceptor', color: colors.teal, x: 530, y: 100, w: 100, h: 40 },
            { label: 'gRPC Server', color: '#a29bfe', x: 530, y: 150, w: 100, h: 35 },
            { label: 'Handler', color: colors.green, x: 530, y: 200, w: 100, h: 40 },
            { label: 'Service', color: colors.yellow, x: 530, y: 255, w: 100, h: 40 },
            { label: 'Repository', color: colors.peach, x: 530, y: 310, w: 100, h: 40 },
            { label: 'PostgreSQL', color: colors.red, x: 530, y: 360, w: 100, h: 35 }
        ];

        // Request particles
        var restParticles = [];
        var grpcParticles = [];
        var particleTimer = 0;

        function createParticle(pathLayers, color) {
            return {
                layerIdx: 0,
                progress: 0,
                color: color,
                size: 6,
                going_down: true,
                layers: pathLayers,
                alpha: 1
            };
        }

        function roundRect(x, y, rw, rh, r) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + rw - r, y);
            ctx.quadraticCurveTo(x + rw, y, x + rw, y + r);
            ctx.lineTo(x + rw, y + rh - r);
            ctx.quadraticCurveTo(x + rw, y + rh, x + rw - r, y + rh);
            ctx.lineTo(x + r, y + rh);
            ctx.quadraticCurveTo(x, y + rh, x, y + rh - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
        }

        function drawLayer(layer, pulse) {
            var p = pulse || 0;
            ctx.save();
            ctx.globalAlpha = 0.85 + p * 0.15;
            ctx.fillStyle = layer.color + '33';
            ctx.strokeStyle = layer.color;
            ctx.lineWidth = 1.5 + p;
            roundRect(layer.x, layer.y, layer.w, layer.h, 8);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = layer.color;
            ctx.font = 'bold 11px Inter, monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(layer.label, layer.x + layer.w / 2, layer.y + layer.h / 2);
            ctx.restore();
        }

        function drawArrow(fromLayer, toLayer, color) {
            var fx = fromLayer.x + fromLayer.w / 2;
            var fy = fromLayer.y + fromLayer.h;
            var tx = toLayer.x + toLayer.w / 2;
            var ty = toLayer.y;

            ctx.strokeStyle = color + '55';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(tx, ty);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        function updateParticle(p) {
            p.progress += 0.02;
            if (p.progress >= 1) {
                p.progress = 0;
                if (p.going_down) {
                    p.layerIdx++;
                    if (p.layerIdx >= p.layers.length - 1) {
                        p.going_down = false;
                    }
                } else {
                    p.layerIdx--;
                    if (p.layerIdx <= 0) {
                        p.going_down = true;
                        p.alpha -= 0.3;
                    }
                }
            }
        }

        function drawParticle(p) {
            if (p.alpha <= 0) return;
            var fromLayer = p.layers[p.layerIdx];
            var toIdx = p.going_down ? p.layerIdx + 1 : p.layerIdx - 1;
            if (toIdx < 0 || toIdx >= p.layers.length) return;
            var toLayer = p.layers[toIdx];

            var fx = fromLayer.x + fromLayer.w / 2;
            var fy = p.going_down ? fromLayer.y + fromLayer.h : fromLayer.y;
            var tx = toLayer.x + toLayer.w / 2;
            var ty = p.going_down ? toLayer.y : toLayer.y + toLayer.h;

            var px = fx + (tx - fx) * p.progress;
            var py = fy + (ty - fy) * p.progress;

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Trail
            ctx.globalAlpha = p.alpha * 0.3;
            ctx.beginPath();
            ctx.arc(px, py, p.size * 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            // Title
            ctx.fillStyle = colors.accent;
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Clean Architecture: Request Flow', w / 2, 22);

            // Section labels
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Layers', layers[0].x + layers[0].w / 2, 32);
            ctx.fillStyle = '#74b9ff';
            ctx.fillText('REST Path', restLayers[0].x + restLayers[0].w / 2, 32);
            ctx.fillStyle = colors.mauve;
            ctx.fillText('gRPC Path', grpcLayers[0].x + grpcLayers[0].w / 2, 32);

            // Draw generic layers
            for (var i = 0; i < layers.length; i++) {
                var pulse = 0;
                drawLayer(layers[i], pulse);
                if (i < layers.length - 1) {
                    drawArrow(layers[i], layers[i + 1], layers[i].color);
                }
            }

            // Draw REST layers
            for (var j = 0; j < restLayers.length; j++) {
                var rPulse = 0;
                // Check if any particle is on this layer
                for (var rp = 0; rp < restParticles.length; rp++) {
                    if (restParticles[rp].layerIdx === j && restParticles[rp].alpha > 0) {
                        rPulse = 0.5;
                    }
                }
                drawLayer(restLayers[j], rPulse);
                if (j < restLayers.length - 1) {
                    drawArrow(restLayers[j], restLayers[j + 1], restLayers[j].color);
                }
            }

            // Draw gRPC layers
            for (var k = 0; k < grpcLayers.length; k++) {
                var gPulse = 0;
                for (var gp = 0; gp < grpcParticles.length; gp++) {
                    if (grpcParticles[gp].layerIdx === k && grpcParticles[gp].alpha > 0) {
                        gPulse = 0.5;
                    }
                }
                drawLayer(grpcLayers[k], gPulse);
                if (k < grpcLayers.length - 1) {
                    drawArrow(grpcLayers[k], grpcLayers[k + 1], grpcLayers[k].color);
                }
            }

            // Shared service label
            ctx.save();
            ctx.strokeStyle = colors.yellow + '44';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            roundRect(265, 245, 380, 50, 6);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = colors.yellow + '88';
            ctx.font = '9px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Shared Service Layer', 455, 290);
            ctx.restore();

            // Shared repo label
            ctx.save();
            ctx.strokeStyle = colors.peach + '44';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            roundRect(265, 300, 380, 50, 6);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = colors.peach + '88';
            ctx.font = '9px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Shared Repository Layer', 455, 345);
            ctx.restore();

            // Update and draw particles
            for (var m = restParticles.length - 1; m >= 0; m--) {
                updateParticle(restParticles[m]);
                drawParticle(restParticles[m]);
                if (restParticles[m].alpha <= 0) {
                    restParticles.splice(m, 1);
                }
            }

            for (var n = grpcParticles.length - 1; n >= 0; n--) {
                updateParticle(grpcParticles[n]);
                drawParticle(grpcParticles[n]);
                if (grpcParticles[n].alpha <= 0) {
                    grpcParticles.splice(n, 1);
                }
            }

            // Spawn new particles periodically
            particleTimer++;
            if (particleTimer % 120 === 0) {
                restParticles.push(createParticle(restLayers, '#74b9ff'));
            }
            if (particleTimer % 120 === 60) {
                grpcParticles.push(createParticle(grpcLayers, colors.mauve));
            }

            // Legend
            ctx.save();
            ctx.fillStyle = colors.surface;
            roundRect(660, 50, 130, 100, 6);
            ctx.fill();
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillStyle = colors.text;
            ctx.fillText('Legend:', 670, 68);

            var legendItems = [
                { color: '#74b9ff', label: 'REST request' },
                { color: colors.mauve, label: 'gRPC request' },
                { color: colors.green, label: 'Handler layer' },
                { color: colors.yellow, label: 'Service layer' },
                { color: colors.peach, label: 'Repository layer' }
            ];
            for (var li = 0; li < legendItems.length; li++) {
                ctx.fillStyle = legendItems[li].color;
                ctx.beginPath();
                ctx.arc(678, 84 + li * 14, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = colors.text;
                ctx.font = '9px Inter, sans-serif';
                ctx.fillText(legendItems[li].label, 688, 87 + li * 14);
            }
            ctx.restore();

            tick++;
            animId = requestAnimationFrame(draw);
        }

        // Intersection observer for performance
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    if (!animId) draw();
                } else {
                    if (animId) {
                        cancelAnimationFrame(animId);
                        animId = null;
                    }
                }
            });
        }, { threshold: 0.1 });

        observer.observe(canvas);
    })();
}

// Wire up animations to section loader
if (typeof initSectionAnimations === 'function') {
    var _origInitCrudGolang = initSectionAnimations;
    initSectionAnimations = function(sectionId) {
        _origInitCrudGolang(sectionId);
        if (sectionId === 'crud-golang') initCrudGolangAnimations();
    };
} else {
    document.addEventListener('DOMContentLoaded', function() {
        var obs = new MutationObserver(function() {
            if (document.getElementById('canvas-crud-go-arch')) {
                initCrudGolangAnimations();
                obs.disconnect();
            }
        });
        obs.observe(document.body, { childList: true, subtree: true });
    });
}
