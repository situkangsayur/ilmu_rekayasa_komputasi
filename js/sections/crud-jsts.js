// ============================================================
// CRUD JavaScript/TypeScript - RESTful API & gRPC
// Comprehensive Tutorial Section
// ============================================================

sections['crud-jsts'] = () => `
<section class="animate-in">

<h1 class="section-title">CRUD: RESTful API &amp; gRPC ${t('dengan', 'with')} TypeScript</h1>
<p class="section-subtitle">Production-Ready Backend &mdash; Express, Hono, gRPC, Prisma, Zod, JWT, Docker</p>

<!-- ==================== SECTION 1: PROJECT STRUCTURE ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">1. Production-Ready Project Structure</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">${t('Struktur Folder TypeScript Backend', 'TypeScript Backend Folder Structure')}</h3>
    <p>${t('Berikut adalah struktur folder yang digunakan di', 'Below is the folder structure used in')} <strong>production-grade</strong> TypeScript API. ${t('Pola ini mengikuti prinsip', 'This pattern follows the principles of')} <strong>Separation of Concerns</strong> ${t('dan', 'and')} <strong>Clean Architecture</strong>.</p>

    <div class="code-block">
<span class="cm">// Struktur folder production-ready TypeScript API</span>
myapp/
&boxvr;&boxh;&boxh; src/
&boxv;   &boxvr;&boxh;&boxh; index.ts               <span class="cm">// Entry point (bootstrap server)</span>
&boxv;   &boxvr;&boxh;&boxh; app.ts                 <span class="cm">// Express/Hono app setup + middleware</span>
&boxv;   &boxvr;&boxh;&boxh; config/
&boxv;   &boxv;   &boxul;&boxh;&boxh; index.ts           <span class="cm">// Environment validation (Zod)</span>
&boxv;   &boxvr;&boxh;&boxh; controllers/
&boxv;   &boxv;   &boxul;&boxh;&boxh; user.controller.ts <span class="cm">// HTTP handlers (req/res)</span>
&boxv;   &boxvr;&boxh;&boxh; services/
&boxv;   &boxv;   &boxul;&boxh;&boxh; user.service.ts    <span class="cm">// Business logic</span>
&boxv;   &boxvr;&boxh;&boxh; repositories/
&boxv;   &boxv;   &boxul;&boxh;&boxh; user.repository.ts <span class="cm">// Database queries (Prisma)</span>
&boxv;   &boxvr;&boxh;&boxh; models/
&boxv;   &boxv;   &boxul;&boxh;&boxh; user.model.ts      <span class="cm">// Prisma/Drizzle schema</span>
&boxv;   &boxvr;&boxh;&boxh; middleware/
&boxv;   &boxv;   &boxvr;&boxh;&boxh; auth.ts            <span class="cm">// JWT authentication</span>
&boxv;   &boxv;   &boxvr;&boxh;&boxh; validate.ts        <span class="cm">// Zod request validation</span>
&boxv;   &boxv;   &boxul;&boxh;&boxh; error-handler.ts   <span class="cm">// Centralized error handling</span>
&boxv;   &boxvr;&boxh;&boxh; schemas/
&boxv;   &boxv;   &boxul;&boxh;&boxh; user.schema.ts     <span class="cm">// Zod validation schemas</span>
&boxv;   &boxvr;&boxh;&boxh; types/
&boxv;   &boxv;   &boxul;&boxh;&boxh; index.ts           <span class="cm">// Shared TypeScript types</span>
&boxv;   &boxul;&boxh;&boxh; proto/
&boxv;       &boxul;&boxh;&boxh; user.proto         <span class="cm">// gRPC Protocol Buffer</span>
&boxvr;&boxh;&boxh; prisma/
&boxv;   &boxul;&boxh;&boxh; schema.prisma          <span class="cm">// Database schema + migrations</span>
&boxvr;&boxh;&boxh; tests/
&boxv;   &boxul;&boxh;&boxh; user.test.ts           <span class="cm">// Integration + unit tests</span>
&boxvr;&boxh;&boxh; Dockerfile                 <span class="cm">// Multi-stage build</span>
&boxvr;&boxh;&boxh; docker-compose.yml         <span class="cm">// Full stack (app + db + redis)</span>
&boxvr;&boxh;&boxh; tsconfig.json
&boxvr;&boxh;&boxh; package.json
&boxul;&boxh;&boxh; .env.example
    </div>

    <div class="info-box">
        <strong>${t('Mengapa layered architecture?', 'Why layered architecture?')}</strong> ${t('Pola', 'The')} <strong>Controller &rarr; Service &rarr; Repository</strong> ${t('memisahkan tanggung jawab: Controller menangani HTTP, Service mengandung bisnis logic, Repository mengakses database. Ini membuat kode mudah di-test, di-maintain, dan di-scale.', 'pattern separates concerns: Controller handles HTTP, Service contains business logic, Repository accesses the database. This makes the code easy to test, maintain, and scale.')}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">${t('Alur Request dalam Layered Architecture', 'Request Flow in Layered Architecture')}</h3>
    <canvas id="canvas-crud-jsts-arch" width="800" height="380" style="width:100%;border-radius:12px;background:#0a0a1a;"></canvas>
    <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);">${t('Visualisasi alur request:', 'Request flow visualization:')} Client &rarr; Middleware (Zod Validation) &rarr; Controller &rarr; Service &rarr; Repository &rarr; Prisma &rarr; Database</p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">${t('Setup Awal', 'Initial Setup')}: package.json &amp; tsconfig.json</h3>
    <div class="code-block">
<span class="cm">// package.json</span>
{
  <span class="str">"name"</span>: <span class="str">"myapp"</span>,
  <span class="str">"version"</span>: <span class="str">"1.0.0"</span>,
  <span class="str">"scripts"</span>: {
    <span class="str">"dev"</span>: <span class="str">"tsx watch src/index.ts"</span>,
    <span class="str">"build"</span>: <span class="str">"tsc"</span>,
    <span class="str">"start"</span>: <span class="str">"node dist/index.js"</span>,
    <span class="str">"test"</span>: <span class="str">"vitest"</span>,
    <span class="str">"db:migrate"</span>: <span class="str">"prisma migrate dev"</span>,
    <span class="str">"db:generate"</span>: <span class="str">"prisma generate"</span>,
    <span class="str">"lint"</span>: <span class="str">"eslint src/"</span>
  },
  <span class="str">"dependencies"</span>: {
    <span class="str">"express"</span>: <span class="str">"^4.18.0"</span>,
    <span class="str">"@prisma/client"</span>: <span class="str">"^5.0.0"</span>,
    <span class="str">"zod"</span>: <span class="str">"^3.22.0"</span>,
    <span class="str">"bcryptjs"</span>: <span class="str">"^2.4.3"</span>,
    <span class="str">"jsonwebtoken"</span>: <span class="str">"^9.0.0"</span>,
    <span class="str">"helmet"</span>: <span class="str">"^7.0.0"</span>,
    <span class="str">"cors"</span>: <span class="str">"^2.8.5"</span>,
    <span class="str">"express-rate-limit"</span>: <span class="str">"^7.0.0"</span>,
    <span class="str">"pino"</span>: <span class="str">"^8.0.0"</span>,
    <span class="str">"pino-pretty"</span>: <span class="str">"^10.0.0"</span>
  },
  <span class="str">"devDependencies"</span>: {
    <span class="str">"typescript"</span>: <span class="str">"^5.3.0"</span>,
    <span class="str">"tsx"</span>: <span class="str">"^4.0.0"</span>,
    <span class="str">"prisma"</span>: <span class="str">"^5.0.0"</span>,
    <span class="str">"vitest"</span>: <span class="str">"^1.0.0"</span>,
    <span class="str">"supertest"</span>: <span class="str">"^6.3.0"</span>,
    <span class="str">"@types/express"</span>: <span class="str">"^4.17.0"</span>,
    <span class="str">"@types/bcryptjs"</span>: <span class="str">"^2.4.0"</span>,
    <span class="str">"@types/jsonwebtoken"</span>: <span class="str">"^9.0.0"</span>,
    <span class="str">"@types/cors"</span>: <span class="str">"^2.8.0"</span>
  }
}
    </div>

    <div class="code-block">
<span class="cm">// tsconfig.json</span>
{
  <span class="str">"compilerOptions"</span>: {
    <span class="str">"target"</span>: <span class="str">"ES2022"</span>,
    <span class="str">"module"</span>: <span class="str">"commonjs"</span>,
    <span class="str">"lib"</span>: [<span class="str">"ES2022"</span>],
    <span class="str">"outDir"</span>: <span class="str">"./dist"</span>,
    <span class="str">"rootDir"</span>: <span class="str">"./src"</span>,
    <span class="str">"strict"</span>: <span class="kw">true</span>,                    <span class="cm">// WAJIB: enable all strict checks</span>
    <span class="str">"esModuleInterop"</span>: <span class="kw">true</span>,
    <span class="str">"skipLibCheck"</span>: <span class="kw">true</span>,
    <span class="str">"forceConsistentCasingInFileNames"</span>: <span class="kw">true</span>,
    <span class="str">"resolveJsonModule"</span>: <span class="kw">true</span>,
    <span class="str">"declaration"</span>: <span class="kw">true</span>,
    <span class="str">"declarationMap"</span>: <span class="kw">true</span>,
    <span class="str">"sourceMap"</span>: <span class="kw">true</span>,
    <span class="str">"noUnusedLocals"</span>: <span class="kw">true</span>,
    <span class="str">"noUnusedParameters"</span>: <span class="kw">true</span>,
    <span class="str">"noImplicitReturns"</span>: <span class="kw">true</span>,
    <span class="str">"noFallthroughCasesInSwitch"</span>: <span class="kw">true</span>
  },
  <span class="str">"include"</span>: [<span class="str">"src/**/*"</span>],
  <span class="str">"exclude"</span>: [<span class="str">"node_modules"</span>, <span class="str">"dist"</span>, <span class="str">"tests"</span>]
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Config: Environment Validation ${t('dengan', 'with')} Zod</h3>
    <p>${t('Jangan pernah langsung menggunakan', 'Never directly use')} <code>process.env</code> ${t('tanpa validasi. Gunakan Zod untuk memvalidasi dan memberikan type-safety pada environment variables.', 'without validation. Use Zod to validate and provide type-safety for environment variables.')}</p>
    <div class="code-block">
<span class="cm">// src/config/index.ts</span>
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="kw">const</span> envSchema = z.<span class="fn">object</span>({
  NODE_ENV: z.<span class="fn">enum</span>([<span class="str">"development"</span>, <span class="str">"production"</span>, <span class="str">"test"</span>]),
  PORT: z.<span class="fn">string</span>().<span class="fn">transform</span>(Number).<span class="fn">default</span>(<span class="str">"3000"</span>),
  DATABASE_URL: z.<span class="fn">string</span>().<span class="fn">url</span>(),
  JWT_SECRET: z.<span class="fn">string</span>().<span class="fn">min</span>(<span class="num">32</span>, <span class="str">"JWT secret minimal 32 karakter"</span>),
  JWT_EXPIRES_IN: z.<span class="fn">string</span>().<span class="fn">default</span>(<span class="str">"15m"</span>),
  REFRESH_TOKEN_EXPIRES_IN: z.<span class="fn">string</span>().<span class="fn">default</span>(<span class="str">"7d"</span>),
  BCRYPT_ROUNDS: z.<span class="fn">string</span>().<span class="fn">transform</span>(Number).<span class="fn">default</span>(<span class="str">"12"</span>),
  CORS_ORIGIN: z.<span class="fn">string</span>().<span class="fn">default</span>(<span class="str">"http://localhost:3000"</span>),
  RATE_LIMIT_MAX: z.<span class="fn">string</span>().<span class="fn">transform</span>(Number).<span class="fn">default</span>(<span class="str">"100"</span>),
});

<span class="kw">const</span> parsed = envSchema.<span class="fn">safeParse</span>(process.env);

<span class="kw">if</span> (!parsed.success) {
  console.<span class="fn">error</span>(<span class="str">"Invalid environment variables:"</span>, parsed.error.<span class="fn">format</span>());
  process.<span class="fn">exit</span>(<span class="num">1</span>);
}

<span class="kw">export const</span> config = parsed.data;
<span class="kw">export type</span> Config = z.infer&lt;<span class="kw">typeof</span> envSchema&gt;;
    </div>
    <div class="warn-box">
        <strong>${t('Penting!', 'Important!')}</strong> ${t('Jika ada env variable yang salah atau missing, aplikasi akan', 'If any env variable is incorrect or missing, the application will')} <strong>${t('gagal start', 'fail to start')}</strong> ${t('dengan pesan error yang jelas &mdash; jauh lebih baik daripada crash di tengah runtime.', 'with a clear error message &mdash; much better than crashing in the middle of runtime.')}
    </div>
</div>

<!-- ==================== SECTION 2: REST CRUD EXPRESS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">2. RESTful CRUD ${t('dengan', 'with')} Express.js + TypeScript</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Zod Schemas &mdash; Runtime Validation</h3>
    <p>${t('TypeScript hanya melakukan type-checking saat', 'TypeScript only performs type-checking at')} <strong>compile time</strong>. ${t('Untuk validasi data dari client saat', 'For validating client data at')} <strong>runtime</strong>, ${t('gunakan', 'use')} <strong>Zod</strong>. ${t('Ini adalah pertahanan utama terhadap data invalid.', 'This is the primary defense against invalid data.')}</p>
    <div class="code-block">
<span class="cm">// src/schemas/user.schema.ts</span>
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="cm">// Schema untuk CREATE user</span>
<span class="kw">export const</span> createUserSchema = z.<span class="fn">object</span>({
  body: z.<span class="fn">object</span>({
    email: z.<span class="fn">string</span>()
      .<span class="fn">email</span>(<span class="str">"Format email tidak valid"</span>)
      .<span class="fn">toLowerCase</span>()
      .<span class="fn">trim</span>(),
    password: z.<span class="fn">string</span>()
      .<span class="fn">min</span>(<span class="num">8</span>, <span class="str">"Password minimal 8 karakter"</span>)
      .<span class="fn">regex</span>(<span class="str">/[A-Z]/</span>, <span class="str">"Harus mengandung huruf besar"</span>)
      .<span class="fn">regex</span>(<span class="str">/[0-9]/</span>, <span class="str">"Harus mengandung angka"</span>)
      .<span class="fn">regex</span>(<span class="str">/[^A-Za-z0-9]/</span>, <span class="str">"Harus mengandung karakter spesial"</span>),
    name: z.<span class="fn">string</span>()
      .<span class="fn">min</span>(<span class="num">2</span>, <span class="str">"Nama minimal 2 karakter"</span>)
      .<span class="fn">max</span>(<span class="num">100</span>, <span class="str">"Nama maksimal 100 karakter"</span>)
      .<span class="fn">trim</span>(),
    role: z.<span class="fn">enum</span>([<span class="str">"USER"</span>, <span class="str">"ADMIN"</span>]).<span class="fn">default</span>(<span class="str">"USER"</span>),
  }),
});

<span class="cm">// Schema untuk UPDATE user (semua field optional)</span>
<span class="kw">export const</span> updateUserSchema = z.<span class="fn">object</span>({
  body: z.<span class="fn">object</span>({
    email: z.<span class="fn">string</span>().<span class="fn">email</span>().<span class="fn">toLowerCase</span>().<span class="fn">trim</span>().<span class="fn">optional</span>(),
    name: z.<span class="fn">string</span>().<span class="fn">min</span>(<span class="num">2</span>).<span class="fn">max</span>(<span class="num">100</span>).<span class="fn">trim</span>().<span class="fn">optional</span>(),
    role: z.<span class="fn">enum</span>([<span class="str">"USER"</span>, <span class="str">"ADMIN"</span>]).<span class="fn">optional</span>(),
  }),
  params: z.<span class="fn">object</span>({
    id: z.<span class="fn">string</span>().<span class="fn">uuid</span>(<span class="str">"ID harus format UUID"</span>),
  }),
});

<span class="cm">// Schema untuk GET by ID</span>
<span class="kw">export const</span> getUserSchema = z.<span class="fn">object</span>({
  params: z.<span class="fn">object</span>({
    id: z.<span class="fn">string</span>().<span class="fn">uuid</span>(),
  }),
});

<span class="cm">// Schema untuk LIST (pagination + filter)</span>
<span class="kw">export const</span> listUsersSchema = z.<span class="fn">object</span>({
  query: z.<span class="fn">object</span>({
    page: z.<span class="fn">string</span>().<span class="fn">transform</span>(Number).<span class="fn">default</span>(<span class="str">"1"</span>),
    limit: z.<span class="fn">string</span>().<span class="fn">transform</span>(Number).<span class="fn">default</span>(<span class="str">"10"</span>),
    search: z.<span class="fn">string</span>().<span class="fn">optional</span>(),
    role: z.<span class="fn">enum</span>([<span class="str">"USER"</span>, <span class="str">"ADMIN"</span>]).<span class="fn">optional</span>(),
    sortBy: z.<span class="fn">enum</span>([<span class="str">"name"</span>, <span class="str">"email"</span>, <span class="str">"createdAt"</span>]).<span class="fn">default</span>(<span class="str">"createdAt"</span>),
    order: z.<span class="fn">enum</span>([<span class="str">"asc"</span>, <span class="str">"desc"</span>]).<span class="fn">default</span>(<span class="str">"desc"</span>),
  }),
});

<span class="cm">// Infer TypeScript types dari Zod schemas</span>
<span class="kw">export type</span> CreateUserInput = z.infer&lt;<span class="kw">typeof</span> createUserSchema&gt;[<span class="str">"body"</span>];
<span class="kw">export type</span> UpdateUserInput = z.infer&lt;<span class="kw">typeof</span> updateUserSchema&gt;[<span class="str">"body"</span>];
    </div>
    <div class="success-box">
        <strong>Zod = Single Source of Truth.</strong> ${t('Dari satu Zod schema, kamu mendapatkan: runtime validation, TypeScript types, dan error messages. Tidak perlu menulis type dan validasi terpisah!', 'From a single Zod schema, you get: runtime validation, TypeScript types, and error messages. No need to write types and validation separately!')}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Types &mdash; Shared Type Definitions</h3>
    <div class="code-block">
<span class="cm">// src/types/index.ts</span>
<span class="kw">import</span> { Request } <span class="kw">from</span> <span class="str">"express"</span>;

<span class="kw">export interface</span> ApiResponse&lt;T&gt; {
  success: <span class="num">boolean</span>;
  data?: T;
  message?: <span class="num">string</span>;
  errors?: Record&lt;<span class="num">string</span>, <span class="num">string</span>[]&gt;;
  pagination?: {
    page: <span class="num">number</span>;
    limit: <span class="num">number</span>;
    total: <span class="num">number</span>;
    totalPages: <span class="num">number</span>;
  };
}

<span class="kw">export interface</span> JwtPayload {
  userId: <span class="num">string</span>;
  email: <span class="num">string</span>;
  role: <span class="str">"USER"</span> | <span class="str">"ADMIN"</span>;
}

<span class="kw">export interface</span> AuthRequest <span class="kw">extends</span> Request {
  user?: JwtPayload;
}

<span class="kw">export class</span> <span class="fn">AppError</span> <span class="kw">extends</span> Error {
  <span class="kw">constructor</span>(
    <span class="kw">public</span> statusCode: <span class="num">number</span>,
    <span class="kw">public</span> message: <span class="num">string</span>,
    <span class="kw">public</span> isOperational = <span class="kw">true</span>,
  ) {
    <span class="kw">super</span>(message);
    Object.<span class="fn">setPrototypeOf</span>(<span class="kw">this</span>, AppError.prototype);
  }
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Repository Layer &mdash; Database Access</h3>
    <p>${t('Repository bertanggung jawab HANYA untuk interaksi database. Tidak ada bisnis logic di sini.', 'Repository is responsible ONLY for database interaction. No business logic belongs here.')}</p>
    <div class="code-block">
<span class="cm">// src/repositories/user.repository.ts</span>
<span class="kw">import</span> { PrismaClient, User, Prisma } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">const</span> prisma = <span class="kw">new</span> <span class="fn">PrismaClient</span>();

<span class="kw">export class</span> <span class="fn">UserRepository</span> {
  <span class="kw">async</span> <span class="fn">findById</span>(id: <span class="num">string</span>): Promise&lt;User | <span class="kw">null</span>&gt; {
    <span class="kw">return</span> prisma.user.<span class="fn">findUnique</span>({
      where: { id },
      select: {
        id: <span class="kw">true</span>,
        email: <span class="kw">true</span>,
        name: <span class="kw">true</span>,
        role: <span class="kw">true</span>,
        createdAt: <span class="kw">true</span>,
        updatedAt: <span class="kw">true</span>,
        <span class="cm">// password TIDAK di-select (security!)</span>
      },
    });
  }

  <span class="kw">async</span> <span class="fn">findByEmail</span>(email: <span class="num">string</span>): Promise&lt;User | <span class="kw">null</span>&gt; {
    <span class="kw">return</span> prisma.user.<span class="fn">findUnique</span>({ where: { email } });
  }

  <span class="kw">async</span> <span class="fn">findMany</span>(params: {
    skip: <span class="num">number</span>;
    take: <span class="num">number</span>;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    <span class="kw">const</span> [users, total] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
      prisma.user.<span class="fn">findMany</span>({
        skip: params.skip,
        take: params.take,
        where: params.where,
        orderBy: params.orderBy,
        select: {
          id: <span class="kw">true</span>, email: <span class="kw">true</span>, name: <span class="kw">true</span>,
          role: <span class="kw">true</span>, createdAt: <span class="kw">true</span>, updatedAt: <span class="kw">true</span>,
        },
      }),
      prisma.user.<span class="fn">count</span>({ where: params.where }),
    ]);
    <span class="kw">return</span> { users, total };
  }

  <span class="kw">async</span> <span class="fn">create</span>(data: Prisma.UserCreateInput): Promise&lt;User&gt; {
    <span class="kw">return</span> prisma.user.<span class="fn">create</span>({ data });
  }

  <span class="kw">async</span> <span class="fn">update</span>(id: <span class="num">string</span>, data: Prisma.UserUpdateInput): Promise&lt;User&gt; {
    <span class="kw">return</span> prisma.user.<span class="fn">update</span>({ where: { id }, data });
  }

  <span class="kw">async</span> <span class="fn">delete</span>(id: <span class="num">string</span>): Promise&lt;User&gt; {
    <span class="kw">return</span> prisma.user.<span class="fn">delete</span>({ where: { id } });
  }
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Service Layer &mdash; Business Logic</h3>
    <p>${t('Service mengandung semua bisnis logic: validasi aturan bisnis, hashing password, transformasi data.', 'Service contains all business logic: business rule validation, password hashing, data transformation.')}</p>
    <div class="code-block">
<span class="cm">// src/services/user.service.ts</span>
<span class="kw">import</span> bcrypt <span class="kw">from</span> <span class="str">"bcryptjs"</span>;
<span class="kw">import</span> jwt <span class="kw">from</span> <span class="str">"jsonwebtoken"</span>;
<span class="kw">import</span> { UserRepository } <span class="kw">from</span> <span class="str">"../repositories/user.repository"</span>;
<span class="kw">import</span> { AppError } <span class="kw">from</span> <span class="str">"../types"</span>;
<span class="kw">import</span> { config } <span class="kw">from</span> <span class="str">"../config"</span>;
<span class="kw">import</span> { CreateUserInput, UpdateUserInput } <span class="kw">from</span> <span class="str">"../schemas/user.schema"</span>;
<span class="kw">import</span> { JwtPayload } <span class="kw">from</span> <span class="str">"../types"</span>;

<span class="kw">export class</span> <span class="fn">UserService</span> {
  <span class="kw">private</span> repo = <span class="kw">new</span> <span class="fn">UserRepository</span>();

  <span class="kw">async</span> <span class="fn">createUser</span>(input: CreateUserInput) {
    <span class="cm">// 1. Check apakah email sudah ada</span>
    <span class="kw">const</span> existing = <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">findByEmail</span>(input.email);
    <span class="kw">if</span> (existing) {
      <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">409</span>, <span class="str">"Email sudah terdaftar"</span>);
    }

    <span class="cm">// 2. Hash password</span>
    <span class="kw">const</span> hashedPassword = <span class="kw">await</span> bcrypt.<span class="fn">hash</span>(
      input.password,
      config.BCRYPT_ROUNDS
    );

    <span class="cm">// 3. Create user di database</span>
    <span class="kw">const</span> user = <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">create</span>({
      email: input.email,
      password: hashedPassword,
      name: input.name,
      role: input.role,
    });

    <span class="cm">// 4. Hapus password dari response</span>
    <span class="kw">const</span> { password, ...userWithoutPassword } = user;
    <span class="kw">return</span> userWithoutPassword;
  }

  <span class="kw">async</span> <span class="fn">getUserById</span>(id: <span class="num">string</span>) {
    <span class="kw">const</span> user = <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">findById</span>(id);
    <span class="kw">if</span> (!user) {
      <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">404</span>, <span class="str">"User tidak ditemukan"</span>);
    }
    <span class="kw">return</span> user;
  }

  <span class="kw">async</span> <span class="fn">listUsers</span>(params: {
    page: <span class="num">number</span>;
    limit: <span class="num">number</span>;
    search?: <span class="num">string</span>;
    role?: <span class="str">"USER"</span> | <span class="str">"ADMIN"</span>;
    sortBy: <span class="num">string</span>;
    order: <span class="str">"asc"</span> | <span class="str">"desc"</span>;
  }) {
    <span class="kw">const</span> where: <span class="kw">any</span> = {};
    <span class="kw">if</span> (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: <span class="str">"insensitive"</span> } },
        { email: { contains: params.search, mode: <span class="str">"insensitive"</span> } },
      ];
    }
    <span class="kw">if</span> (params.role) where.role = params.role;

    <span class="kw">const</span> { users, total } = <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">findMany</span>({
      skip: (params.page - <span class="num">1</span>) * params.limit,
      take: params.limit,
      where,
      orderBy: { [params.sortBy]: params.order },
    });

    <span class="kw">return</span> {
      users,
      pagination: {
        page: params.page,
        limit: params.limit,
        total,
        totalPages: Math.<span class="fn">ceil</span>(total / params.limit),
      },
    };
  }

  <span class="kw">async</span> <span class="fn">updateUser</span>(id: <span class="num">string</span>, input: UpdateUserInput) {
    <span class="kw">await</span> <span class="kw">this</span>.<span class="fn">getUserById</span>(id); <span class="cm">// Throws 404 if not found</span>
    <span class="kw">const</span> updated = <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">update</span>(id, input);
    <span class="kw">const</span> { password, ...result } = updated;
    <span class="kw">return</span> result;
  }

  <span class="kw">async</span> <span class="fn">deleteUser</span>(id: <span class="num">string</span>) {
    <span class="kw">await</span> <span class="kw">this</span>.<span class="fn">getUserById</span>(id);
    <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">delete</span>(id);
    <span class="kw">return</span> { message: <span class="str">"User berhasil dihapus"</span> };
  }

  <span class="kw">async</span> <span class="fn">login</span>(email: <span class="num">string</span>, password: <span class="num">string</span>) {
    <span class="kw">const</span> user = <span class="kw">await</span> <span class="kw">this</span>.repo.<span class="fn">findByEmail</span>(email);
    <span class="kw">if</span> (!user) <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">401</span>, <span class="str">"Email atau password salah"</span>);

    <span class="kw">const</span> valid = <span class="kw">await</span> bcrypt.<span class="fn">compare</span>(password, user.password);
    <span class="kw">if</span> (!valid) <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">401</span>, <span class="str">"Email atau password salah"</span>);

    <span class="cm">// Generate JWT tokens</span>
    <span class="kw">const</span> payload: JwtPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    <span class="kw">const</span> accessToken = jwt.<span class="fn">sign</span>(payload, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN,
    });

    <span class="kw">const</span> refreshToken = jwt.<span class="fn">sign</span>(
      { userId: user.id },
      config.JWT_SECRET,
      { expiresIn: config.REFRESH_TOKEN_EXPIRES_IN }
    );

    <span class="kw">return</span> { accessToken, refreshToken, user: { id: user.id, email: user.email, role: user.role } };
  }
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Controller Layer &mdash; HTTP Handlers</h3>
    <div class="code-block">
<span class="cm">// src/controllers/user.controller.ts</span>
<span class="kw">import</span> { Request, Response, NextFunction } <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> { UserService } <span class="kw">from</span> <span class="str">"../services/user.service"</span>;
<span class="kw">import</span> { ApiResponse, AuthRequest } <span class="kw">from</span> <span class="str">"../types"</span>;

<span class="kw">export class</span> <span class="fn">UserController</span> {
  <span class="kw">private</span> service = <span class="kw">new</span> <span class="fn">UserService</span>();

  <span class="cm">// POST /api/users (Create)</span>
  <span class="fn">create</span> = <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> user = <span class="kw">await</span> <span class="kw">this</span>.service.<span class="fn">createUser</span>(req.body);
      <span class="kw">const</span> response: ApiResponse&lt;<span class="kw">typeof</span> user&gt; = {
        success: <span class="kw">true</span>,
        data: user,
        message: <span class="str">"User berhasil dibuat"</span>,
      };
      res.<span class="fn">status</span>(<span class="num">201</span>).<span class="fn">json</span>(response);
    } <span class="kw">catch</span> (error) {
      <span class="fn">next</span>(error);
    }
  };

  <span class="cm">// GET /api/users/:id (Read)</span>
  <span class="fn">getById</span> = <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> user = <span class="kw">await</span> <span class="kw">this</span>.service.<span class="fn">getUserById</span>(req.params.id);
      res.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: user });
    } <span class="kw">catch</span> (error) {
      <span class="fn">next</span>(error);
    }
  };

  <span class="cm">// GET /api/users (List)</span>
  <span class="fn">list</span> = <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> result = <span class="kw">await</span> <span class="kw">this</span>.service.<span class="fn">listUsers</span>(req.query <span class="kw">as any</span>);
      res.<span class="fn">json</span>({
        success: <span class="kw">true</span>,
        data: result.users,
        pagination: result.pagination,
      });
    } <span class="kw">catch</span> (error) {
      <span class="fn">next</span>(error);
    }
  };

  <span class="cm">// PUT /api/users/:id (Update)</span>
  <span class="fn">update</span> = <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> user = <span class="kw">await</span> <span class="kw">this</span>.service.<span class="fn">updateUser</span>(req.params.id, req.body);
      res.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: user, message: <span class="str">"User berhasil diupdate"</span> });
    } <span class="kw">catch</span> (error) {
      <span class="fn">next</span>(error);
    }
  };

  <span class="cm">// DELETE /api/users/:id (Delete)</span>
  <span class="fn">remove</span> = <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> result = <span class="kw">await</span> <span class="kw">this</span>.service.<span class="fn">deleteUser</span>(req.params.id);
      res.<span class="fn">json</span>({ success: <span class="kw">true</span>, message: result.message });
    } <span class="kw">catch</span> (error) {
      <span class="fn">next</span>(error);
    }
  };

  <span class="cm">// POST /api/auth/login</span>
  <span class="fn">login</span> = <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> { email, password } = req.body;
      <span class="kw">const</span> result = <span class="kw">await</span> <span class="kw">this</span>.service.<span class="fn">login</span>(email, password);
      res.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: result });
    } <span class="kw">catch</span> (error) {
      <span class="fn">next</span>(error);
    }
  };
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Middleware: Auth, Validation, Error Handler</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="mw-auth">Auth Middleware</button>
        <button class="tab-btn" data-tab="mw-validate">Validate Middleware</button>
        <button class="tab-btn" data-tab="mw-error">Error Handler</button>
    </div>

    <div data-tab-content="mw-auth" class="tab-content active">
    <div class="code-block">
<span class="cm">// src/middleware/auth.ts</span>
<span class="kw">import</span> { Response, NextFunction } <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> jwt <span class="kw">from</span> <span class="str">"jsonwebtoken"</span>;
<span class="kw">import</span> { config } <span class="kw">from</span> <span class="str">"../config"</span>;
<span class="kw">import</span> { AppError, AuthRequest, JwtPayload } <span class="kw">from</span> <span class="str">"../types"</span>;

<span class="kw">export function</span> <span class="fn">authenticate</span>(
  req: AuthRequest, res: Response, next: NextFunction
) {
  <span class="kw">const</span> authHeader = req.headers.authorization;

  <span class="kw">if</span> (!authHeader || !authHeader.<span class="fn">startsWith</span>(<span class="str">"Bearer "</span>)) {
    <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">401</span>, <span class="str">"Token tidak ditemukan"</span>);
  }

  <span class="kw">const</span> token = authHeader.<span class="fn">split</span>(<span class="str">" "</span>)[<span class="num">1</span>];

  <span class="kw">try</span> {
    <span class="kw">const</span> decoded = jwt.<span class="fn">verify</span>(token, config.JWT_SECRET) <span class="kw">as</span> JwtPayload;
    req.user = decoded;
    <span class="fn">next</span>();
  } <span class="kw">catch</span> (err) {
    <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">401</span>, <span class="str">"Token tidak valid atau sudah expired"</span>);
  }
}

<span class="cm">// Role-based access control</span>
<span class="kw">export function</span> <span class="fn">authorize</span>(...roles: (<span class="str">"USER"</span> | <span class="str">"ADMIN"</span>)[]) {
  <span class="kw">return</span> (req: AuthRequest, res: Response, next: NextFunction) =&gt; {
    <span class="kw">if</span> (!req.user || !roles.<span class="fn">includes</span>(req.user.role)) {
      <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">403</span>, <span class="str">"Tidak memiliki akses"</span>);
    }
    <span class="fn">next</span>();
  };
}
    </div>
    </div>

    <div data-tab-content="mw-validate" class="tab-content">
    <div class="code-block">
<span class="cm">// src/middleware/validate.ts</span>
<span class="kw">import</span> { Request, Response, NextFunction } <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> { AnyZodObject, ZodError } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="kw">export function</span> <span class="fn">validate</span>(schema: AnyZodObject) {
  <span class="kw">return</span> <span class="kw">async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span class="kw">try</span> {
      <span class="kw">const</span> result = <span class="kw">await</span> schema.<span class="fn">parseAsync</span>({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      <span class="cm">// Replace req data with validated + transformed data</span>
      req.body = result.body;
      req.query = result.query;
      req.params = result.params;
      <span class="fn">next</span>();
    } <span class="kw">catch</span> (error) {
      <span class="kw">if</span> (error <span class="kw">instanceof</span> ZodError) {
        <span class="kw">const</span> errors = error.issues.<span class="fn">map</span>((issue) =&gt; ({
          field: issue.path.<span class="fn">join</span>(<span class="str">"."</span>),
          message: issue.message,
        }));
        res.<span class="fn">status</span>(<span class="num">400</span>).<span class="fn">json</span>({
          success: <span class="kw">false</span>,
          message: <span class="str">"Validation error"</span>,
          errors,
        });
        <span class="kw">return</span>;
      }
      <span class="fn">next</span>(error);
    }
  };
}
    </div>
    </div>

    <div data-tab-content="mw-error" class="tab-content">
    <div class="code-block">
<span class="cm">// src/middleware/error-handler.ts</span>
<span class="kw">import</span> { Request, Response, NextFunction } <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> { AppError } <span class="kw">from</span> <span class="str">"../types"</span>;
<span class="kw">import</span> { Prisma } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;
<span class="kw">import</span> { logger } <span class="kw">from</span> <span class="str">"../config/logger"</span>;

<span class="kw">export function</span> <span class="fn">errorHandler</span>(
  err: Error, req: Request, res: Response, _next: NextFunction
) {
  <span class="cm">// Log error</span>
  logger.<span class="fn">error</span>({
    err,
    method: req.method,
    url: req.url,
    body: req.body,
  });

  <span class="cm">// AppError (known operational error)</span>
  <span class="kw">if</span> (err <span class="kw">instanceof</span> AppError) {
    res.<span class="fn">status</span>(err.statusCode).<span class="fn">json</span>({
      success: <span class="kw">false</span>,
      message: err.message,
    });
    <span class="kw">return</span>;
  }

  <span class="cm">// Prisma known errors</span>
  <span class="kw">if</span> (err <span class="kw">instanceof</span> Prisma.PrismaClientKnownRequestError) {
    <span class="kw">if</span> (err.code === <span class="str">"P2002"</span>) {
      res.<span class="fn">status</span>(<span class="num">409</span>).<span class="fn">json</span>({
        success: <span class="kw">false</span>,
        message: <span class="str">"Data sudah ada (unique constraint violation)"</span>,
      });
      <span class="kw">return</span>;
    }
    <span class="kw">if</span> (err.code === <span class="str">"P2025"</span>) {
      res.<span class="fn">status</span>(<span class="num">404</span>).<span class="fn">json</span>({
        success: <span class="kw">false</span>,
        message: <span class="str">"Data tidak ditemukan"</span>,
      });
      <span class="kw">return</span>;
    }
  }

  <span class="cm">// Unknown error (jangan expose detail ke client!)</span>
  res.<span class="fn">status</span>(<span class="num">500</span>).<span class="fn">json</span>({
    success: <span class="kw">false</span>,
    message: <span class="str">"Internal server error"</span>,
  });
}
    </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Express App Setup &amp; Router</h3>
    <div class="code-block">
<span class="cm">// src/app.ts</span>
<span class="kw">import</span> express <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> helmet <span class="kw">from</span> <span class="str">"helmet"</span>;
<span class="kw">import</span> cors <span class="kw">from</span> <span class="str">"cors"</span>;
<span class="kw">import</span> rateLimit <span class="kw">from</span> <span class="str">"express-rate-limit"</span>;
<span class="kw">import</span> pino <span class="kw">from</span> <span class="str">"pino-http"</span>;
<span class="kw">import</span> { config } <span class="kw">from</span> <span class="str">"./config"</span>;
<span class="kw">import</span> { errorHandler } <span class="kw">from</span> <span class="str">"./middleware/error-handler"</span>;
<span class="kw">import</span> { userRouter } <span class="kw">from</span> <span class="str">"./routes/user.routes"</span>;

<span class="kw">const</span> app = <span class="fn">express</span>();

<span class="cm">// === SECURITY MIDDLEWARE ===</span>
app.<span class="fn">use</span>(<span class="fn">helmet</span>());           <span class="cm">// Security headers (X-Frame, HSTS, etc)</span>
app.<span class="fn">use</span>(<span class="fn">cors</span>({
  origin: config.CORS_ORIGIN,
  credentials: <span class="kw">true</span>,
  methods: [<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>],
}));
app.<span class="fn">use</span>(<span class="fn">rateLimit</span>({
  windowMs: <span class="num">15</span> * <span class="num">60</span> * <span class="num">1000</span>,   <span class="cm">// 15 menit</span>
  max: config.RATE_LIMIT_MAX,   <span class="cm">// max requests per window</span>
  standardHeaders: <span class="kw">true</span>,
  legacyHeaders: <span class="kw">false</span>,
  message: { success: <span class="kw">false</span>, message: <span class="str">"Terlalu banyak request"</span> },
}));

<span class="cm">// === PARSING &amp; LOGGING ===</span>
app.<span class="fn">use</span>(express.<span class="fn">json</span>({ limit: <span class="str">"10kb"</span> })); <span class="cm">// Limit body size!</span>
app.<span class="fn">use</span>(express.<span class="fn">urlencoded</span>({ extended: <span class="kw">true</span>, limit: <span class="str">"10kb"</span> }));
app.<span class="fn">use</span>(<span class="fn">pino</span>({ autoLogging: <span class="kw">true</span> }));

<span class="cm">// === ROUTES ===</span>
app.<span class="fn">use</span>(<span class="str">"/api/users"</span>, userRouter);

<span class="cm">// === HEALTH CHECK ===</span>
app.<span class="fn">get</span>(<span class="str">"/health"</span>, (_req, res) =&gt; {
  res.<span class="fn">json</span>({ status: <span class="str">"ok"</span>, timestamp: <span class="kw">new</span> <span class="fn">Date</span>().<span class="fn">toISOString</span>() });
});

<span class="cm">// === ERROR HANDLER (harus terakhir!) ===</span>
app.<span class="fn">use</span>(errorHandler);

<span class="kw">export default</span> app;
    </div>

    <div class="code-block">
<span class="cm">// src/routes/user.routes.ts</span>
<span class="kw">import</span> { Router } <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> { UserController } <span class="kw">from</span> <span class="str">"../controllers/user.controller"</span>;
<span class="kw">import</span> { validate } <span class="kw">from</span> <span class="str">"../middleware/validate"</span>;
<span class="kw">import</span> { authenticate, authorize } <span class="kw">from</span> <span class="str">"../middleware/auth"</span>;
<span class="kw">import</span> {
  createUserSchema, updateUserSchema,
  getUserSchema, listUsersSchema,
} <span class="kw">from</span> <span class="str">"../schemas/user.schema"</span>;

<span class="kw">const</span> router = <span class="fn">Router</span>();
<span class="kw">const</span> ctrl = <span class="kw">new</span> <span class="fn">UserController</span>();

<span class="cm">// Public routes</span>
router.<span class="fn">post</span>(<span class="str">"/auth/login"</span>, ctrl.login);
router.<span class="fn">post</span>(<span class="str">"/"</span>, <span class="fn">validate</span>(createUserSchema), ctrl.create);

<span class="cm">// Protected routes (require authentication)</span>
router.<span class="fn">use</span>(authenticate);  <span class="cm">// Semua route di bawah butuh JWT</span>
router.<span class="fn">get</span>(<span class="str">"/"</span>, <span class="fn">validate</span>(listUsersSchema), ctrl.list);
router.<span class="fn">get</span>(<span class="str">"/:id"</span>, <span class="fn">validate</span>(getUserSchema), ctrl.getById);
router.<span class="fn">put</span>(<span class="str">"/:id"</span>, <span class="fn">validate</span>(updateUserSchema), ctrl.update);

<span class="cm">// Admin only</span>
router.<span class="fn">delete</span>(<span class="str">"/:id"</span>, <span class="fn">authorize</span>(<span class="str">"ADMIN"</span>), <span class="fn">validate</span>(getUserSchema), ctrl.remove);

<span class="kw">export</span> { router <span class="kw">as</span> userRouter };
    </div>

    <div class="code-block">
<span class="cm">// src/index.ts (Entry Point)</span>
<span class="kw">import</span> app <span class="kw">from</span> <span class="str">"./app"</span>;
<span class="kw">import</span> { config } <span class="kw">from</span> <span class="str">"./config"</span>;
<span class="kw">import</span> { logger } <span class="kw">from</span> <span class="str">"./config/logger"</span>;

<span class="kw">const</span> server = app.<span class="fn">listen</span>(config.PORT, () =&gt; {
  logger.<span class="fn">info</span>(<span class="str">"Server running on port "</span> + config.PORT);
});

<span class="cm">// Graceful shutdown</span>
<span class="kw">const</span> <span class="fn">gracefulShutdown</span> = (signal: <span class="num">string</span>) =&gt; {
  logger.<span class="fn">info</span>(<span class="str">"Received "</span> + signal + <span class="str">", shutting down..."</span>);
  server.<span class="fn">close</span>(() =&gt; {
    logger.<span class="fn">info</span>(<span class="str">"Server closed"</span>);
    process.<span class="fn">exit</span>(<span class="num">0</span>);
  });
};
process.<span class="fn">on</span>(<span class="str">"SIGTERM"</span>, () =&gt; <span class="fn">gracefulShutdown</span>(<span class="str">"SIGTERM"</span>));
process.<span class="fn">on</span>(<span class="str">"SIGINT"</span>, () =&gt; <span class="fn">gracefulShutdown</span>(<span class="str">"SIGINT"</span>));
    </div>
</div>

<!-- ==================== SECTION 3: HONO ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">3. ${t('Alternatif Modern', 'Modern Alternative')}: Hono.js</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Hono &mdash; Ultra-Fast, Edge-First Framework</h3>
    <p><strong>Hono</strong> (&ldquo;flame&rdquo; ${t('dalam bahasa Jepang', 'in Japanese')}) ${t('adalah web framework modern yang dirancang untuk', 'is a modern web framework designed for')} <strong>edge computing</strong> (Cloudflare Workers, Deno Deploy, Bun). ${t('TypeScript-first, sangat cepat, dan ringan.', 'TypeScript-first, extremely fast, and lightweight.')}</p>

    <div class="table-wrapper">
    <table>
    <tr><th>${t('Aspek', 'Aspect')}</th><th>Express.js</th><th>Hono</th></tr>
    <tr><td>TypeScript</td><td>${t('Butuh', 'Needs')} @types/express</td><td><span class="badge badge-green">Built-in, first-class</span></td></tr>
    <tr><td>${t('Performa', 'Performance')}</td><td>~15K req/s</td><td><span class="badge badge-green">~130K req/s (Bun)</span></td></tr>
    <tr><td>Bundle Size</td><td>~550KB</td><td><span class="badge badge-green">~14KB (core)</span></td></tr>
    <tr><td>Runtime</td><td>Node.js</td><td>Node, Bun, Deno, CF Workers, Lambda</td></tr>
    <tr><td>Middleware</td><td>${t('Ecosystem besar, third-party', 'Large ecosystem, third-party')}</td><td>Built-in (cors, jwt, logger, validator)</td></tr>
    <tr><td>Validation</td><td>${t('Perlu middleware custom', 'Needs custom middleware')}</td><td>${t('@hono/zod-validator terintegrasi', '@hono/zod-validator integrated')}</td></tr>
    <tr><td>Maturity</td><td><span class="badge badge-green">${t('10+ tahun, battle-tested', '10+ years, battle-tested')}</span></td><td>${t('Baru (2022), tapi growing fast', 'New (2022), but growing fast')}</td></tr>
    <tr><td>Ecosystem</td><td><span class="badge badge-green">${t('Sangat besar', 'Very large')}</span></td><td>${t('Lebih kecil, tapi cukup', 'Smaller, but sufficient')}</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">CRUD ${t('dengan', 'with')} Hono + Zod Validator</h3>
    <div class="code-block">
<span class="cm">// src/app.ts (Hono version)</span>
<span class="kw">import</span> { Hono } <span class="kw">from</span> <span class="str">"hono"</span>;
<span class="kw">import</span> { cors } <span class="kw">from</span> <span class="str">"hono/cors"</span>;
<span class="kw">import</span> { logger } <span class="kw">from</span> <span class="str">"hono/logger"</span>;
<span class="kw">import</span> { secureHeaders } <span class="kw">from</span> <span class="str">"hono/secure-headers"</span>;
<span class="kw">import</span> { rateLimiter } <span class="kw">from</span> <span class="str">"hono-rate-limiter"</span>;
<span class="kw">import</span> { jwt } <span class="kw">from</span> <span class="str">"hono/jwt"</span>;
<span class="kw">import</span> { zValidator } <span class="kw">from</span> <span class="str">"@hono/zod-validator"</span>;
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="kw">const</span> app = <span class="kw">new</span> <span class="fn">Hono</span>();

<span class="cm">// Built-in middleware (no extra packages!)</span>
app.<span class="fn">use</span>(<span class="str">"*"</span>, <span class="fn">logger</span>());
app.<span class="fn">use</span>(<span class="str">"*"</span>, <span class="fn">secureHeaders</span>());
app.<span class="fn">use</span>(<span class="str">"*"</span>, <span class="fn">cors</span>({ origin: <span class="str">"http://localhost:3000"</span> }));

<span class="cm">// Zod schema untuk user</span>
<span class="kw">const</span> createUserBody = z.<span class="fn">object</span>({
  email: z.<span class="fn">string</span>().<span class="fn">email</span>(),
  password: z.<span class="fn">string</span>().<span class="fn">min</span>(<span class="num">8</span>),
  name: z.<span class="fn">string</span>().<span class="fn">min</span>(<span class="num">2</span>).<span class="fn">max</span>(<span class="num">100</span>),
});

<span class="kw">const</span> idParam = z.<span class="fn">object</span>({
  id: z.<span class="fn">string</span>().<span class="fn">uuid</span>(),
});

<span class="cm">// === CRUD Routes ===</span>

<span class="cm">// CREATE: validasi langsung terintegrasi di route!</span>
app.<span class="fn">post</span>(
  <span class="str">"/api/users"</span>,
  <span class="fn">zValidator</span>(<span class="str">"json"</span>, createUserBody),
  <span class="kw">async</span> (c) =&gt; {
    <span class="kw">const</span> body = c.req.<span class="fn">valid</span>(<span class="str">"json"</span>); <span class="cm">// Fully typed!</span>
    <span class="cm">// body.email  -&gt; string (autocomplete!)</span>
    <span class="cm">// body.name   -&gt; string</span>
    <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">createUser</span>(body);
    <span class="kw">return</span> c.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: user }, <span class="num">201</span>);
  }
);

<span class="cm">// READ by ID</span>
app.<span class="fn">get</span>(
  <span class="str">"/api/users/:id"</span>,
  <span class="fn">zValidator</span>(<span class="str">"param"</span>, idParam),
  <span class="kw">async</span> (c) =&gt; {
    <span class="kw">const</span> { id } = c.req.<span class="fn">valid</span>(<span class="str">"param"</span>);
    <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">getUserById</span>(id);
    <span class="kw">return</span> c.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: user });
  }
);

<span class="cm">// LIST with pagination</span>
app.<span class="fn">get</span>(<span class="str">"/api/users"</span>, <span class="kw">async</span> (c) =&gt; {
  <span class="kw">const</span> page = Number(c.req.<span class="fn">query</span>(<span class="str">"page"</span>) || <span class="str">"1"</span>);
  <span class="kw">const</span> limit = Number(c.req.<span class="fn">query</span>(<span class="str">"limit"</span>) || <span class="str">"10"</span>);
  <span class="kw">const</span> result = <span class="kw">await</span> userService.<span class="fn">listUsers</span>({ page, limit });
  <span class="kw">return</span> c.<span class="fn">json</span>({ success: <span class="kw">true</span>, ...result });
});

<span class="cm">// UPDATE</span>
app.<span class="fn">put</span>(
  <span class="str">"/api/users/:id"</span>,
  <span class="fn">zValidator</span>(<span class="str">"param"</span>, idParam),
  <span class="fn">zValidator</span>(<span class="str">"json"</span>, createUserBody.<span class="fn">partial</span>()),
  <span class="kw">async</span> (c) =&gt; {
    <span class="kw">const</span> { id } = c.req.<span class="fn">valid</span>(<span class="str">"param"</span>);
    <span class="kw">const</span> body = c.req.<span class="fn">valid</span>(<span class="str">"json"</span>);
    <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">updateUser</span>(id, body);
    <span class="kw">return</span> c.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: user });
  }
);

<span class="cm">// DELETE (protected route)</span>
app.<span class="fn">delete</span>(
  <span class="str">"/api/users/:id"</span>,
  <span class="fn">jwt</span>({ secret: config.JWT_SECRET }),
  <span class="fn">zValidator</span>(<span class="str">"param"</span>, idParam),
  <span class="kw">async</span> (c) =&gt; {
    <span class="kw">const</span> { id } = c.req.<span class="fn">valid</span>(<span class="str">"param"</span>);
    <span class="kw">await</span> userService.<span class="fn">deleteUser</span>(id);
    <span class="kw">return</span> c.<span class="fn">json</span>({ success: <span class="kw">true</span>, message: <span class="str">"Deleted"</span> });
  }
);

<span class="cm">// Error handler bawaan Hono</span>
app.<span class="fn">onError</span>((err, c) =&gt; {
  console.<span class="fn">error</span>(err);
  <span class="kw">return</span> c.<span class="fn">json</span>({ success: <span class="kw">false</span>, message: err.message }, <span class="num">500</span>);
});

<span class="kw">export default</span> app;
    </div>
    <div class="success-box">
        <strong>Hono + Zod = Type-safe ${t('dari request sampai response.', 'from request to response.')}</strong> ${t('Perhatikan bahwa', 'Notice that')} <code>c.req.valid("json")</code> ${t('sudah ter-type secara otomatis dari Zod schema &mdash; autocomplete di IDE tanpa perlu casting manual!', 'is automatically typed from the Zod schema &mdash; IDE autocomplete without manual casting!')}
    </div>
</div>

<!-- ==================== SECTION 4: gRPC ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">4. gRPC ${t('dengan', 'with')} @grpc/grpc-js</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">${t('Apa Itu gRPC?', 'What Is gRPC?')}</h3>
    <p><strong>gRPC</strong> (Google Remote Procedure Call) ${t('adalah framework komunikasi antar service yang menggunakan', 'is an inter-service communication framework that uses')} <strong>Protocol Buffers</strong> (protobuf) ${t('sebagai format data dan', 'as the data format and')} <strong>HTTP/2</strong> ${t('sebagai transport. gRPC sangat populer untuk', 'as the transport. gRPC is very popular for')} <strong>microservices</strong> ${t('internal karena performanya yang jauh lebih tinggi dibanding REST+JSON.', 'internally due to its much higher performance compared to REST+JSON.')}</p>

    <div class="table-wrapper">
    <table>
    <tr><th>${t('Aspek', 'Aspect')}</th><th>REST + JSON</th><th>gRPC + Protobuf</th></tr>
    <tr><td>Format Data</td><td>JSON (text-based)</td><td><span class="badge badge-green">Protobuf (binary, ${t('~10x lebih kecil', '~10x smaller')})</span></td></tr>
    <tr><td>Transport</td><td>HTTP/1.1</td><td><span class="badge badge-green">HTTP/2 (multiplexing, bidirectional)</span></td></tr>
    <tr><td>Contract</td><td>OpenAPI/Swagger (${t('opsional', 'optional')})</td><td><span class="badge badge-green">Proto file (${t('wajib', 'required')}, strongly typed)</span></td></tr>
    <tr><td>Streaming</td><td>${t('Tidak', 'No')} (workaround: SSE/WS)</td><td><span class="badge badge-green">Unary, Server, Client, Bidirectional</span></td></tr>
    <tr><td>Code Generation</td><td>Manual / codegen ${t('opsional', 'optional')}</td><td><span class="badge badge-green">Auto-generate types ${t('dan', 'and')} client</span></td></tr>
    <tr><td>Browser Support</td><td><span class="badge badge-green">Native</span></td><td>${t('Perlu', 'Needs')} grpc-web proxy</td></tr>
    <tr><td>Debugging</td><td><span class="badge badge-green">${t('Mudah', 'Easy')} (curl, browser)</span></td><td>${t('Butuh tools khusus', 'Needs special tools')} (grpcurl, BloomRPC)</td></tr>
    <tr><td>Use Case</td><td>Public API, Web/Mobile</td><td>Internal microservices, IoT, real-time</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Proto File &mdash; Service Definition</h3>
    <div class="code-block">
<span class="cm">// src/proto/user.proto</span>
<span class="kw">syntax</span> = <span class="str">"proto3"</span>;

<span class="kw">package</span> user;

<span class="cm">// Service definition - mendefinisikan RPC methods</span>
<span class="kw">service</span> <span class="fn">UserService</span> {
  <span class="kw">rpc</span> <span class="fn">CreateUser</span> (CreateUserRequest)  <span class="kw">returns</span> (UserResponse);
  <span class="kw">rpc</span> <span class="fn">GetUser</span>    (GetUserRequest)     <span class="kw">returns</span> (UserResponse);
  <span class="kw">rpc</span> <span class="fn">ListUsers</span>  (ListUsersRequest)   <span class="kw">returns</span> (ListUsersResponse);
  <span class="kw">rpc</span> <span class="fn">UpdateUser</span> (UpdateUserRequest)  <span class="kw">returns</span> (UserResponse);
  <span class="kw">rpc</span> <span class="fn">DeleteUser</span> (DeleteUserRequest)  <span class="kw">returns</span> (DeleteUserResponse);
  <span class="cm">// Server streaming: real-time updates</span>
  <span class="kw">rpc</span> <span class="fn">WatchUsers</span> (WatchUsersRequest)  <span class="kw">returns</span> (<span class="kw">stream</span> UserResponse);
}

<span class="cm">// Messages (seperti TypeScript interfaces)</span>
<span class="kw">message</span> User {
  <span class="num">string</span> id       = <span class="num">1</span>;
  <span class="num">string</span> email    = <span class="num">2</span>;
  <span class="num">string</span> name     = <span class="num">3</span>;
  <span class="num">string</span> role     = <span class="num">4</span>;
  <span class="num">string</span> created_at = <span class="num">5</span>;
}

<span class="kw">message</span> CreateUserRequest {
  <span class="num">string</span> email    = <span class="num">1</span>;
  <span class="num">string</span> password = <span class="num">2</span>;
  <span class="num">string</span> name     = <span class="num">3</span>;
  <span class="num">string</span> role     = <span class="num">4</span>;
}

<span class="kw">message</span> GetUserRequest {
  <span class="num">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> ListUsersRequest {
  <span class="num">int32</span> page   = <span class="num">1</span>;
  <span class="num">int32</span> limit  = <span class="num">2</span>;
  <span class="num">string</span> search = <span class="num">3</span>;
}

<span class="kw">message</span> ListUsersResponse {
  <span class="kw">repeated</span> User users = <span class="num">1</span>;
  <span class="num">int32</span> total           = <span class="num">2</span>;
  <span class="num">int32</span> page            = <span class="num">3</span>;
  <span class="num">int32</span> total_pages     = <span class="num">4</span>;
}

<span class="kw">message</span> UpdateUserRequest {
  <span class="num">string</span> id             = <span class="num">1</span>;
  <span class="kw">optional</span> <span class="num">string</span> email = <span class="num">2</span>;
  <span class="kw">optional</span> <span class="num">string</span> name  = <span class="num">3</span>;
  <span class="kw">optional</span> <span class="num">string</span> role  = <span class="num">4</span>;
}

<span class="kw">message</span> DeleteUserRequest {
  <span class="num">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> DeleteUserResponse {
  <span class="num">bool</span> success   = <span class="num">1</span>;
  <span class="num">string</span> message = <span class="num">2</span>;
}

<span class="kw">message</span> UserResponse {
  User user = <span class="num">1</span>;
}

<span class="kw">message</span> WatchUsersRequest {}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">TypeScript Code Generation &amp; gRPC Server</h3>
    <div class="code-block">
<span class="cm">// Generate TypeScript types dari proto file</span>
<span class="cm">// Jalankan: npx protoc --ts_proto_out=./src/generated \</span>
<span class="cm">//   --ts_proto_opt=outputServices=grpc-js \</span>
<span class="cm">//   --ts_proto_opt=esModuleInterop=true \</span>
<span class="cm">//   ./src/proto/user.proto</span>

<span class="cm">// package.json script:</span>
<span class="cm">// "proto:gen": "protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/generated --ts_proto_opt=outputServices=grpc-js src/proto/*.proto"</span>
    </div>

    <div class="code-block">
<span class="cm">// src/grpc/server.ts</span>
<span class="kw">import</span> * <span class="kw">as</span> grpc <span class="kw">from</span> <span class="str">"@grpc/grpc-js"</span>;
<span class="kw">import</span> {
  UserServiceService,
  UserServiceServer,
} <span class="kw">from</span> <span class="str">"../generated/user"</span>;
<span class="kw">import</span> { UserService } <span class="kw">from</span> <span class="str">"../services/user.service"</span>;

<span class="kw">const</span> userService = <span class="kw">new</span> <span class="fn">UserService</span>();

<span class="cm">// Implement gRPC service handlers</span>
<span class="kw">const</span> userServer: UserServiceServer = {
  <span class="cm">// CREATE</span>
  <span class="kw">async</span> <span class="fn">createUser</span>(call, callback) {
    <span class="kw">try</span> {
      <span class="kw">const</span> { email, password, name, role } = call.request;
      <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">createUser</span>({
        email, password, name, role: role || <span class="str">"USER"</span>,
      });
      <span class="fn">callback</span>(<span class="kw">null</span>, { user });
    } <span class="kw">catch</span> (err) {
      <span class="fn">callback</span>({
        code: grpc.status.INTERNAL,
        message: (err <span class="kw">as</span> Error).message,
      });
    }
  },

  <span class="cm">// READ</span>
  <span class="kw">async</span> <span class="fn">getUser</span>(call, callback) {
    <span class="kw">try</span> {
      <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">getUserById</span>(call.request.id);
      <span class="fn">callback</span>(<span class="kw">null</span>, { user });
    } <span class="kw">catch</span> (err) {
      <span class="fn">callback</span>({
        code: grpc.status.NOT_FOUND,
        message: <span class="str">"User tidak ditemukan"</span>,
      });
    }
  },

  <span class="cm">// LIST</span>
  <span class="kw">async</span> <span class="fn">listUsers</span>(call, callback) {
    <span class="kw">try</span> {
      <span class="kw">const</span> { page, limit, search } = call.request;
      <span class="kw">const</span> result = <span class="kw">await</span> userService.<span class="fn">listUsers</span>({
        page: page || <span class="num">1</span>,
        limit: limit || <span class="num">10</span>,
        search: search || <span class="kw">undefined</span>,
        sortBy: <span class="str">"createdAt"</span>,
        order: <span class="str">"desc"</span>,
      });
      <span class="fn">callback</span>(<span class="kw">null</span>, {
        users: result.users,
        total: result.pagination.total,
        page: result.pagination.page,
        totalPages: result.pagination.totalPages,
      });
    } <span class="kw">catch</span> (err) {
      <span class="fn">callback</span>({ code: grpc.status.INTERNAL, message: (err <span class="kw">as</span> Error).message });
    }
  },

  <span class="cm">// UPDATE</span>
  <span class="kw">async</span> <span class="fn">updateUser</span>(call, callback) {
    <span class="kw">try</span> {
      <span class="kw">const</span> { id, ...data } = call.request;
      <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">updateUser</span>(id, data);
      <span class="fn">callback</span>(<span class="kw">null</span>, { user });
    } <span class="kw">catch</span> (err) {
      <span class="fn">callback</span>({ code: grpc.status.INTERNAL, message: (err <span class="kw">as</span> Error).message });
    }
  },

  <span class="cm">// DELETE</span>
  <span class="kw">async</span> <span class="fn">deleteUser</span>(call, callback) {
    <span class="kw">try</span> {
      <span class="kw">await</span> userService.<span class="fn">deleteUser</span>(call.request.id);
      <span class="fn">callback</span>(<span class="kw">null</span>, { success: <span class="kw">true</span>, message: <span class="str">"Deleted"</span> });
    } <span class="kw">catch</span> (err) {
      <span class="fn">callback</span>({ code: grpc.status.INTERNAL, message: (err <span class="kw">as</span> Error).message });
    }
  },

  <span class="cm">// SERVER STREAMING: Watch for user changes</span>
  <span class="fn">watchUsers</span>(call) {
    <span class="cm">// Simulasi: kirim update setiap 5 detik</span>
    <span class="kw">const</span> interval = <span class="fn">setInterval</span>(<span class="kw">async</span> () =&gt; {
      <span class="kw">try</span> {
        <span class="kw">const</span> result = <span class="kw">await</span> userService.<span class="fn">listUsers</span>({
          page: <span class="num">1</span>, limit: <span class="num">1</span>, sortBy: <span class="str">"createdAt"</span>, order: <span class="str">"desc"</span>,
        });
        <span class="kw">if</span> (result.users[<span class="num">0</span>]) {
          call.<span class="fn">write</span>({ user: result.users[<span class="num">0</span>] });
        }
      } <span class="kw">catch</span> (err) {
        call.<span class="fn">destroy</span>(err <span class="kw">as</span> Error);
      }
    }, <span class="num">5000</span>);
    call.<span class="fn">on</span>(<span class="str">"cancelled"</span>, () =&gt; <span class="fn">clearInterval</span>(interval));
  },
};

<span class="cm">// Start gRPC server</span>
<span class="kw">function</span> <span class="fn">startGrpcServer</span>() {
  <span class="kw">const</span> server = <span class="kw">new</span> grpc.<span class="fn">Server</span>();
  server.<span class="fn">addService</span>(UserServiceService, userServer);
  server.<span class="fn">bindAsync</span>(
    <span class="str">"0.0.0.0:50051"</span>,
    grpc.ServerCredentials.<span class="fn">createInsecure</span>(),
    (err, port) =&gt; {
      <span class="kw">if</span> (err) { console.<span class="fn">error</span>(err); <span class="kw">return</span>; }
      console.<span class="fn">log</span>(<span class="str">"gRPC server running on port "</span> + port);
    }
  );
}
<span class="fn">startGrpcServer</span>();
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">gRPC Client</h3>
    <div class="code-block">
<span class="cm">// src/grpc/client.ts</span>
<span class="kw">import</span> * <span class="kw">as</span> grpc <span class="kw">from</span> <span class="str">"@grpc/grpc-js"</span>;
<span class="kw">import</span> { UserServiceClient } <span class="kw">from</span> <span class="str">"../generated/user"</span>;

<span class="cm">// Create client instance</span>
<span class="kw">const</span> client = <span class="kw">new</span> <span class="fn">UserServiceClient</span>(
  <span class="str">"localhost:50051"</span>,
  grpc.credentials.<span class="fn">createInsecure</span>(),
);

<span class="cm">// === Contoh penggunaan ===</span>

<span class="cm">// Create User</span>
client.<span class="fn">createUser</span>(
  { email: <span class="str">"andi@mail.com"</span>, password: <span class="str">"Secret123!"</span>, name: <span class="str">"Andi"</span>, role: <span class="str">"USER"</span> },
  (err, response) =&gt; {
    <span class="kw">if</span> (err) { console.<span class="fn">error</span>(<span class="str">"Error:"</span>, err.message); <span class="kw">return</span>; }
    console.<span class="fn">log</span>(<span class="str">"Created:"</span>, response?.user);
  },
);

<span class="cm">// Get User</span>
client.<span class="fn">getUser</span>({ id: <span class="str">"uuid-here"</span> }, (err, response) =&gt; {
  <span class="kw">if</span> (err) { console.<span class="fn">error</span>(err.message); <span class="kw">return</span>; }
  console.<span class="fn">log</span>(<span class="str">"User:"</span>, response?.user);
});

<span class="cm">// List Users</span>
client.<span class="fn">listUsers</span>({ page: <span class="num">1</span>, limit: <span class="num">10</span>, search: <span class="str">""</span> }, (err, response) =&gt; {
  <span class="kw">if</span> (err) { console.<span class="fn">error</span>(err.message); <span class="kw">return</span>; }
  console.<span class="fn">log</span>(<span class="str">"Users:"</span>, response?.users);
  console.<span class="fn">log</span>(<span class="str">"Total:"</span>, response?.total);
});

<span class="cm">// Server Streaming: Watch for changes</span>
<span class="kw">const</span> stream = client.<span class="fn">watchUsers</span>({});
stream.<span class="fn">on</span>(<span class="str">"data"</span>, (response) =&gt; {
  console.<span class="fn">log</span>(<span class="str">"New update:"</span>, response.user);
});
stream.<span class="fn">on</span>(<span class="str">"error"</span>, (err) =&gt; console.<span class="fn">error</span>(err.message));
stream.<span class="fn">on</span>(<span class="str">"end"</span>, () =&gt; console.<span class="fn">log</span>(<span class="str">"Stream ended"</span>));
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">gRPC Error Handling</h3>
    <div class="code-block">
<span class="cm">// gRPC menggunakan status codes sendiri (bukan HTTP)</span>
<span class="cm">// Mapping umum:</span>
<span class="cm">//</span>
<span class="cm">// grpc.status.OK             = 0   (HTTP 200)</span>
<span class="cm">// grpc.status.CANCELLED      = 1   (HTTP 499)</span>
<span class="cm">// grpc.status.INVALID_ARGUMENT = 3  (HTTP 400)</span>
<span class="cm">// grpc.status.NOT_FOUND      = 5   (HTTP 404)</span>
<span class="cm">// grpc.status.ALREADY_EXISTS = 6   (HTTP 409)</span>
<span class="cm">// grpc.status.PERMISSION_DENIED = 7 (HTTP 403)</span>
<span class="cm">// grpc.status.UNAUTHENTICATED = 16  (HTTP 401)</span>
<span class="cm">// grpc.status.INTERNAL       = 13  (HTTP 500)</span>

<span class="cm">// Best practice: custom error helper</span>
<span class="kw">function</span> <span class="fn">grpcError</span>(code: grpc.status, message: <span class="num">string</span>): grpc.ServiceError {
  <span class="kw">return</span> {
    code,
    message,
    details: message,
    metadata: <span class="kw">new</span> grpc.<span class="fn">Metadata</span>(),
    name: <span class="str">"ServiceError"</span>,
  };
}

<span class="cm">// Usage di handler:</span>
<span class="kw">async</span> <span class="fn">getUser</span>(call, callback) {
  <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">getUserById</span>(call.request.id);
  <span class="kw">if</span> (!user) {
    <span class="kw">return</span> <span class="fn">callback</span>(<span class="fn">grpcError</span>(
      grpc.status.NOT_FOUND,
      <span class="str">"User dengan ID tersebut tidak ditemukan"</span>
    ));
  }
  <span class="fn">callback</span>(<span class="kw">null</span>, { user });
}
    </div>
</div>

<!-- ==================== SECTION 5: SECURITY ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">5. ${t('Keamanan', 'Security')} Best Practices (Node.js)</h2>

<div class="card animate-in">
    <h3 style="color:var(--red, #e74c3c)">${t('Checklist Keamanan Node.js Backend', 'Node.js Backend Security Checklist')}</h3>
    <div class="card-grid">
        <div class="card" style="border-left:3px solid var(--green)">
            <h4>1. Helmet (Security Headers)</h4>
            <p>${t('Mengatur HTTP headers untuk mencegah serangan umum: XSS, clickjacking, MIME sniffing.', 'Sets HTTP headers to prevent common attacks: XSS, clickjacking, MIME sniffing.')}</p>
            <div class="code-block">
<span class="kw">import</span> helmet <span class="kw">from</span> <span class="str">"helmet"</span>;
app.<span class="fn">use</span>(<span class="fn">helmet</span>()); <span class="cm">// Sets 11 security headers</span>
<span class="cm">// X-Content-Type-Options: nosniff</span>
<span class="cm">// X-Frame-Options: DENY</span>
<span class="cm">// Strict-Transport-Security: max-age=...</span>
<span class="cm">// Content-Security-Policy: ...</span>
            </div>
        </div>
        <div class="card" style="border-left:3px solid var(--yellow)">
            <h4>2. Rate Limiting</h4>
            <p>${t('Mencegah brute force dan DDoS attack.', 'Prevents brute force and DDoS attacks.')}</p>
            <div class="code-block">
<span class="kw">import</span> rateLimit <span class="kw">from</span> <span class="str">"express-rate-limit"</span>;

<span class="cm">// General limiter</span>
app.<span class="fn">use</span>(<span class="fn">rateLimit</span>({ windowMs: <span class="num">15</span>*<span class="num">60</span>*<span class="num">1000</span>, max: <span class="num">100</span> }));

<span class="cm">// Stricter untuk auth endpoints</span>
<span class="kw">const</span> authLimiter = <span class="fn">rateLimit</span>({
  windowMs: <span class="num">15</span> * <span class="num">60</span> * <span class="num">1000</span>,
  max: <span class="num">5</span>, <span class="cm">// 5 login attempts per 15 min</span>
  message: <span class="str">"Too many login attempts"</span>,
});
app.<span class="fn">use</span>(<span class="str">"/api/auth"</span>, authLimiter);
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">3. Input Validation &mdash; Runtime, ${t('Bukan Hanya Types!', 'Not Just Types!')}</h3>
    <div class="info-box">
        <strong>${t('TypeScript types DIHAPUS saat compile!', 'TypeScript types are REMOVED at compile time!')}</strong> ${t('Mereka TIDAK melindungi runtime. Tanpa Zod (atau library validasi lain), user bisa mengirim data apapun ke API kamu. Zod memberikan validasi', 'They do NOT protect at runtime. Without Zod (or another validation library), users can send any data to your API. Zod provides')} <strong>runtime</strong> ${t('yang terintegrasi dengan TypeScript types.', 'validation integrated with TypeScript types.')}
    </div>
    <div class="code-block">
<span class="cm">// SALAH: hanya mengandalkan TypeScript types</span>
<span class="kw">interface</span> CreateUser {
  email: <span class="num">string</span>;
  password: <span class="num">string</span>;
}
<span class="cm">// Setelah compile, interface HILANG! Tidak ada validasi runtime.</span>
<span class="cm">// Client bisa kirim: { email: 123, password: "" }</span>

<span class="cm">// BENAR: Zod = validasi runtime + TypeScript types</span>
<span class="kw">const</span> schema = z.<span class="fn">object</span>({
  email: z.<span class="fn">string</span>().<span class="fn">email</span>(),             <span class="cm">// Validasi format email</span>
  password: z.<span class="fn">string</span>().<span class="fn">min</span>(<span class="num">8</span>).<span class="fn">max</span>(<span class="num">128</span>),  <span class="cm">// Validasi panjang</span>
});
<span class="kw">type</span> CreateUser = z.infer&lt;<span class="kw">typeof</span> schema&gt;; <span class="cm">// Auto-generate type!</span>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">4. SQL Injection Prevention</h3>
    <div class="code-block">
<span class="cm">// SALAH: Raw SQL query dengan interpolasi string</span>
<span class="kw">const</span> query = <span class="str">"SELECT * FROM users WHERE email = '"</span> + email + <span class="str">"'"</span>;
<span class="cm">// Attacker bisa kirim: email = "'; DROP TABLE users; --"</span>

<span class="cm">// BENAR: Prisma ORM (parameterized queries otomatis)</span>
<span class="kw">const</span> user = <span class="kw">await</span> prisma.user.<span class="fn">findUnique</span>({
  where: { email },  <span class="cm">// Prisma auto-escape semua input</span>
});

<span class="cm">// Jika perlu raw SQL, gunakan parameterized query:</span>
<span class="kw">const</span> result = <span class="kw">await</span> prisma.<span class="fn">$queryRaw</span>(
  Prisma.<span class="fn">sql</span><span class="str">"SELECT * FROM users WHERE email = ${email}"</span>
);
<span class="cm">// Prisma.sql tag menangani escaping secara aman</span>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">5. JWT + Refresh Token Rotation</h3>
    <div class="code-block">
<span class="cm">// JANGAN: JWT access token dengan expiry panjang</span>
<span class="cm">// jwt.sign(payload, secret, { expiresIn: "30d" }) // BAHAYA!</span>

<span class="cm">// BENAR: Short-lived access token + Refresh token rotation</span>
<span class="cm">//</span>
<span class="cm">// Access Token:  15 menit (pendek, disimpan di memory)</span>
<span class="cm">// Refresh Token: 7 hari (disimpan di httpOnly cookie/DB)</span>
<span class="cm">//</span>
<span class="cm">// Flow:</span>
<span class="cm">// 1. Login -&gt; dapat access_token + refresh_token</span>
<span class="cm">// 2. Access token expired -&gt; kirim refresh token ke /refresh</span>
<span class="cm">// 3. Server validasi refresh token, issue access_token BARU</span>
<span class="cm">//    DAN refresh_token BARU (rotation!)</span>
<span class="cm">// 4. Refresh token lama di-invalidate di DB</span>

<span class="kw">async function</span> <span class="fn">refreshTokenHandler</span>(req: Request, res: Response) {
  <span class="kw">const</span> { refreshToken } = req.body;

  <span class="cm">// 1. Verify refresh token</span>
  <span class="kw">const</span> decoded = jwt.<span class="fn">verify</span>(refreshToken, config.JWT_SECRET);

  <span class="cm">// 2. Check apakah token masih valid di database</span>
  <span class="kw">const</span> storedToken = <span class="kw">await</span> prisma.refreshToken.<span class="fn">findUnique</span>({
    where: { token: refreshToken, revoked: <span class="kw">false</span> },
  });
  <span class="kw">if</span> (!storedToken) <span class="kw">throw new</span> <span class="fn">AppError</span>(<span class="num">401</span>, <span class="str">"Invalid refresh token"</span>);

  <span class="cm">// 3. Revoke old refresh token (rotation!)</span>
  <span class="kw">await</span> prisma.refreshToken.<span class="fn">update</span>({
    where: { id: storedToken.id },
    data: { revoked: <span class="kw">true</span> },
  });

  <span class="cm">// 4. Generate new tokens</span>
  <span class="kw">const</span> newAccessToken = jwt.<span class="fn">sign</span>(payload, config.JWT_SECRET, {
    expiresIn: <span class="str">"15m"</span>,
  });
  <span class="kw">const</span> newRefreshToken = jwt.<span class="fn">sign</span>({ userId: decoded.userId }, config.JWT_SECRET, {
    expiresIn: <span class="str">"7d"</span>,
  });

  <span class="cm">// 5. Store new refresh token</span>
  <span class="kw">await</span> prisma.refreshToken.<span class="fn">create</span>({
    data: { token: newRefreshToken, userId: decoded.userId },
  });

  res.<span class="fn">json</span>({ accessToken: newAccessToken, refreshToken: newRefreshToken });
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">6. Password Hashing &amp; CORS</h3>
    <div class="code-block">
<span class="cm">// === BCRYPT: Password Hashing ===</span>
<span class="kw">import</span> bcrypt <span class="kw">from</span> <span class="str">"bcryptjs"</span>;

<span class="cm">// Hash password (saat register)</span>
<span class="kw">const</span> saltRounds = <span class="num">12</span>; <span class="cm">// Cost factor: 2^12 = 4096 iterations</span>
<span class="kw">const</span> hashedPassword = <span class="kw">await</span> bcrypt.<span class="fn">hash</span>(<span class="str">"UserPassword123!"</span>, saltRounds);
<span class="cm">// Hasil: "$2a$12$LJ3m4ys3..."  (salt included!)</span>

<span class="cm">// Verify password (saat login)</span>
<span class="kw">const</span> isValid = <span class="kw">await</span> bcrypt.<span class="fn">compare</span>(<span class="str">"UserPassword123!"</span>, hashedPassword);
<span class="cm">// isValid = true</span>

<span class="cm">// === CORS: Cross-Origin Resource Sharing ===</span>
<span class="kw">import</span> cors <span class="kw">from</span> <span class="str">"cors"</span>;

<span class="cm">// Production CORS config</span>
app.<span class="fn">use</span>(<span class="fn">cors</span>({
  origin: [<span class="str">"https://myapp.com"</span>, <span class="str">"https://admin.myapp.com"</span>],
  methods: [<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>],
  allowedHeaders: [<span class="str">"Content-Type"</span>, <span class="str">"Authorization"</span>],
  credentials: <span class="kw">true</span>,          <span class="cm">// Allow cookies</span>
  maxAge: <span class="num">86400</span>,               <span class="cm">// Cache preflight 24h</span>
}));

<span class="cm">// JANGAN di production:</span>
<span class="cm">// app.use(cors()); // Allows ALL origins = TIDAK AMAN</span>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">7. XSS Prevention &amp; Dependencies Audit</h3>
    <div class="code-block">
<span class="cm">// === XSS Prevention ===</span>
<span class="cm">// 1. Helmet sudah set Content-Security-Policy</span>
<span class="cm">// 2. Jangan pernah render user input tanpa sanitasi</span>
<span class="cm">// 3. Gunakan DOMPurify di frontend jika render HTML</span>
<span class="cm">// 4. Set httpOnly dan secure pada cookies</span>

res.<span class="fn">cookie</span>(<span class="str">"refreshToken"</span>, token, {
  httpOnly: <span class="kw">true</span>,   <span class="cm">// Tidak bisa diakses JavaScript</span>
  secure: <span class="kw">true</span>,     <span class="cm">// Hanya via HTTPS</span>
  sameSite: <span class="str">"strict"</span>,
  maxAge: <span class="num">7</span> * <span class="num">24</span> * <span class="num">60</span> * <span class="num">60</span> * <span class="num">1000</span>, <span class="cm">// 7 hari</span>
  path: <span class="str">"/api/auth/refresh"</span>,
});

<span class="cm">// === Dependencies Audit ===</span>
<span class="cm">// Jalankan secara berkala:</span>
<span class="cm">//   npm audit</span>
<span class="cm">//   npm audit fix</span>
<span class="cm">//   npx npm-check-updates -u  (update deps)</span>
<span class="cm">//</span>
<span class="cm">// CI/CD: tambahkan npm audit ke pipeline</span>
<span class="cm">// GitHub: enable Dependabot alerts</span>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">${t('Ringkasan Security Checklist', 'Security Checklist Summary')}</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Layer</th><th>${t('Tindakan', 'Action')}</th><th>Tool</th></tr>
    <tr><td>Transport</td><td>HTTPS everywhere</td><td>TLS cert (Let's Encrypt)</td></tr>
    <tr><td>Headers</td><td>Security headers</td><td>helmet</td></tr>
    <tr><td>Rate Limit</td><td>Throttle requests</td><td>express-rate-limit</td></tr>
    <tr><td>Input</td><td>Runtime validation</td><td>Zod</td></tr>
    <tr><td>Auth</td><td>JWT + refresh rotation</td><td>jsonwebtoken</td></tr>
    <tr><td>Password</td><td>Bcrypt hashing (cost 12+)</td><td>bcryptjs</td></tr>
    <tr><td>Database</td><td>Parameterized queries</td><td>Prisma ORM</td></tr>
    <tr><td>CORS</td><td>Whitelist origins</td><td>cors</td></tr>
    <tr><td>XSS</td><td>CSP + httpOnly cookies</td><td>helmet + cookie options</td></tr>
    <tr><td>Dependencies</td><td>Regular audit</td><td>npm audit, Dependabot</td></tr>
    <tr><td>Env</td><td>${t('Validasi env vars', 'Validate env vars')}</td><td>Zod env schema</td></tr>
    <tr><td>Logging</td><td>Structured logging</td><td>pino / winston</td></tr>
    </table>
    </div>
</div>

<!-- ==================== SECTION 6: PRISMA ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">6. Database ${t('dengan', 'with')} Prisma ORM</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Prisma Schema</h3>
    <p><strong>Prisma</strong> ${t('adalah ORM TypeScript-first yang memberikan', 'is a TypeScript-first ORM that provides')} <strong>type-safe database queries</strong>. ${t('Schema mendefinisikan models, relasi, dan constraint database.', 'The schema defines models, relations, and database constraints.')}</p>
    <div class="code-block">
<span class="cm">// prisma/schema.prisma</span>

generator client {
  provider = <span class="str">"prisma-client-js"</span>
}

datasource db {
  provider = <span class="str">"postgresql"</span>
  url      = <span class="fn">env</span>(<span class="str">"DATABASE_URL"</span>)
}

<span class="kw">model</span> <span class="fn">User</span> {
  id          String   @id @<span class="fn">default</span>(<span class="fn">uuid</span>())
  email       String   @unique
  password    String
  name        String
  role        Role     @<span class="fn">default</span>(USER)
  posts       Post[]   <span class="cm">// Relasi one-to-many</span>
  profile     Profile? <span class="cm">// Relasi one-to-one</span>
  createdAt   DateTime @<span class="fn">default</span>(<span class="fn">now</span>())
  updatedAt   DateTime @updatedAt

  refreshTokens RefreshToken[]

  @@<span class="fn">index</span>([email])
  @@<span class="fn">map</span>(<span class="str">"users"</span>)   <span class="cm">// Nama tabel di database</span>
}

<span class="kw">model</span> <span class="fn">Profile</span> {
  id     String  @id @<span class="fn">default</span>(<span class="fn">uuid</span>())
  bio    String?
  avatar String?
  userId String  @unique
  user   User    @<span class="fn">relation</span>(fields: [userId], references: [id], onDelete: Cascade)

  @@<span class="fn">map</span>(<span class="str">"profiles"</span>)
}

<span class="kw">model</span> <span class="fn">Post</span> {
  id        String   @id @<span class="fn">default</span>(<span class="fn">uuid</span>())
  title     String
  content   String?
  published Boolean  @<span class="fn">default</span>(<span class="kw">false</span>)
  authorId  String
  author    User     @<span class="fn">relation</span>(fields: [authorId], references: [id], onDelete: Cascade)
  tags      Tag[]    <span class="cm">// Relasi many-to-many (implicit)</span>
  createdAt DateTime @<span class="fn">default</span>(<span class="fn">now</span>())
  updatedAt DateTime @updatedAt

  @@<span class="fn">index</span>([authorId])
  @@<span class="fn">map</span>(<span class="str">"posts"</span>)
}

<span class="kw">model</span> <span class="fn">Tag</span> {
  id    String @id @<span class="fn">default</span>(<span class="fn">uuid</span>())
  name  String @unique
  posts Post[]

  @@<span class="fn">map</span>(<span class="str">"tags"</span>)
}

<span class="kw">model</span> <span class="fn">RefreshToken</span> {
  id        String   @id @<span class="fn">default</span>(<span class="fn">uuid</span>())
  token     String   @unique
  userId    String
  user      User     @<span class="fn">relation</span>(fields: [userId], references: [id], onDelete: Cascade)
  revoked   Boolean  @<span class="fn">default</span>(<span class="kw">false</span>)
  expiresAt DateTime
  createdAt DateTime @<span class="fn">default</span>(<span class="fn">now</span>())

  @@<span class="fn">index</span>([token])
  @@<span class="fn">index</span>([userId])
  @@<span class="fn">map</span>(<span class="str">"refresh_tokens"</span>)
}

<span class="kw">enum</span> Role {
  USER
  ADMIN
}
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Prisma: Migrations &amp; Type-Safe Queries</h3>
    <div class="code-block">
<span class="cm">// === MIGRATIONS ===</span>
<span class="cm">// Buat migration dari schema:</span>
<span class="cm">//   npx prisma migrate dev --name init</span>
<span class="cm">//   npx prisma migrate dev --name add_profile_table</span>
<span class="cm">//</span>
<span class="cm">// Deploy ke production:</span>
<span class="cm">//   npx prisma migrate deploy</span>
<span class="cm">//</span>
<span class="cm">// Reset database (WARNING: hapus semua data!):</span>
<span class="cm">//   npx prisma migrate reset</span>
<span class="cm">//</span>
<span class="cm">// View database di browser:</span>
<span class="cm">//   npx prisma studio</span>
    </div>

    <div class="code-block">
<span class="cm">// === TYPE-SAFE QUERIES ===</span>
<span class="kw">import</span> { PrismaClient } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">const</span> prisma = <span class="kw">new</span> <span class="fn">PrismaClient</span>();

<span class="cm">// CREATE with relation</span>
<span class="kw">const</span> user = <span class="kw">await</span> prisma.user.<span class="fn">create</span>({
  data: {
    email: <span class="str">"andi@mail.com"</span>,
    password: hashedPassword,
    name: <span class="str">"Andi"</span>,
    profile: {
      create: { bio: <span class="str">"Developer"</span> },  <span class="cm">// Nested create!</span>
    },
  },
  include: { profile: <span class="kw">true</span> },  <span class="cm">// Include relation di response</span>
});
<span class="cm">// user.profile?.bio  -&gt; "Developer" (typed!)</span>

<span class="cm">// QUERY with filters</span>
<span class="kw">const</span> admins = <span class="kw">await</span> prisma.user.<span class="fn">findMany</span>({
  where: {
    role: <span class="str">"ADMIN"</span>,
    email: { contains: <span class="str">"@company.com"</span> },
    createdAt: { gte: <span class="kw">new</span> <span class="fn">Date</span>(<span class="str">"2024-01-01"</span>) },
  },
  orderBy: { createdAt: <span class="str">"desc"</span> },
  take: <span class="num">10</span>,
  skip: <span class="num">0</span>,
  select: {
    id: <span class="kw">true</span>,
    email: <span class="kw">true</span>,
    name: <span class="kw">true</span>,
    _count: { select: { posts: <span class="kw">true</span> } },  <span class="cm">// Count relations</span>
  },
});

<span class="cm">// TRANSACTION: atomic operations</span>
<span class="kw">const</span> [post, updateUser] = <span class="kw">await</span> prisma.<span class="fn">$transaction</span>([
  prisma.post.<span class="fn">create</span>({
    data: { title: <span class="str">"New Post"</span>, content: <span class="str">"..."</span>, authorId: userId },
  }),
  prisma.user.<span class="fn">update</span>({
    where: { id: userId },
    data: { name: <span class="str">"Updated Name"</span> },
  }),
]);
<span class="cm">// Jika salah satu gagal, keduanya di-rollback</span>
    </div>
</div>

<!-- ==================== SECTION 7: TESTING ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">7. Testing</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">${t('Vitest + Supertest: Pengujian Integrasi', 'Vitest + Supertest: Integration Testing')}</h3>
    <div class="code-block">
<span class="cm">// tests/user.test.ts</span>
<span class="kw">import</span> { describe, it, expect, beforeAll, afterAll, beforeEach } <span class="kw">from</span> <span class="str">"vitest"</span>;
<span class="kw">import</span> request <span class="kw">from</span> <span class="str">"supertest"</span>;
<span class="kw">import</span> app <span class="kw">from</span> <span class="str">"../src/app"</span>;
<span class="kw">import</span> { PrismaClient } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">const</span> prisma = <span class="kw">new</span> <span class="fn">PrismaClient</span>();

<span class="fn">describe</span>(<span class="str">"User API"</span>, () =&gt; {
  <span class="kw">let</span> authToken: <span class="num">string</span>;
  <span class="kw">let</span> userId: <span class="num">string</span>;

  <span class="fn">beforeAll</span>(<span class="kw">async</span> () =&gt; {
    <span class="cm">// Setup: gunakan test database</span>
    <span class="kw">await</span> prisma.user.<span class="fn">deleteMany</span>();
  });

  <span class="fn">afterAll</span>(<span class="kw">async</span> () =&gt; {
    <span class="kw">await</span> prisma.user.<span class="fn">deleteMany</span>();
    <span class="kw">await</span> prisma.<span class="fn">$disconnect</span>();
  });

  <span class="fn">describe</span>(<span class="str">"POST /api/users"</span>, () =&gt; {
    <span class="fn">it</span>(<span class="str">"should create a new user"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">post</span>(<span class="str">"/api/users"</span>)
        .<span class="fn">send</span>({
          email: <span class="str">"test@example.com"</span>,
          password: <span class="str">"Test123!@#"</span>,
          name: <span class="str">"Test User"</span>,
        })
        .<span class="fn">expect</span>(<span class="num">201</span>);

      <span class="fn">expect</span>(res.body.success).<span class="fn">toBe</span>(<span class="kw">true</span>);
      <span class="fn">expect</span>(res.body.data.email).<span class="fn">toBe</span>(<span class="str">"test@example.com"</span>);
      <span class="fn">expect</span>(res.body.data.password).<span class="fn">toBeUndefined</span>(); <span class="cm">// Password TIDAK boleh ada!</span>
      userId = res.body.data.id;
    });

    <span class="fn">it</span>(<span class="str">"should reject duplicate email"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">post</span>(<span class="str">"/api/users"</span>)
        .<span class="fn">send</span>({
          email: <span class="str">"test@example.com"</span>,
          password: <span class="str">"Test123!@#"</span>,
          name: <span class="str">"Duplicate"</span>,
        })
        .<span class="fn">expect</span>(<span class="num">409</span>);

      <span class="fn">expect</span>(res.body.success).<span class="fn">toBe</span>(<span class="kw">false</span>);
    });

    <span class="fn">it</span>(<span class="str">"should validate input"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">post</span>(<span class="str">"/api/users"</span>)
        .<span class="fn">send</span>({
          email: <span class="str">"not-an-email"</span>,
          password: <span class="str">"short"</span>,
          name: <span class="str">""</span>,
        })
        .<span class="fn">expect</span>(<span class="num">400</span>);

      <span class="fn">expect</span>(res.body.errors).<span class="fn">toBeDefined</span>();
      <span class="fn">expect</span>(res.body.errors.length).<span class="fn">toBeGreaterThan</span>(<span class="num">0</span>);
    });
  });

  <span class="fn">describe</span>(<span class="str">"POST /api/users/auth/login"</span>, () =&gt; {
    <span class="fn">it</span>(<span class="str">"should login and return tokens"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">post</span>(<span class="str">"/api/users/auth/login"</span>)
        .<span class="fn">send</span>({ email: <span class="str">"test@example.com"</span>, password: <span class="str">"Test123!@#"</span> })
        .<span class="fn">expect</span>(<span class="num">200</span>);

      <span class="fn">expect</span>(res.body.data.accessToken).<span class="fn">toBeDefined</span>();
      <span class="fn">expect</span>(res.body.data.refreshToken).<span class="fn">toBeDefined</span>();
      authToken = res.body.data.accessToken;
    });
  });

  <span class="fn">describe</span>(<span class="str">"GET /api/users/:id"</span>, () =&gt; {
    <span class="fn">it</span>(<span class="str">"should return user by ID"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">get</span>(<span class="str">"/api/users/"</span> + userId)
        .<span class="fn">set</span>(<span class="str">"Authorization"</span>, <span class="str">"Bearer "</span> + authToken)
        .<span class="fn">expect</span>(<span class="num">200</span>);

      <span class="fn">expect</span>(res.body.data.id).<span class="fn">toBe</span>(userId);
    });

    <span class="fn">it</span>(<span class="str">"should return 401 without token"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">get</span>(<span class="str">"/api/users/"</span> + userId)
        .<span class="fn">expect</span>(<span class="num">401</span>);
    });
  });

  <span class="fn">describe</span>(<span class="str">"PUT /api/users/:id"</span>, () =&gt; {
    <span class="fn">it</span>(<span class="str">"should update user"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">put</span>(<span class="str">"/api/users/"</span> + userId)
        .<span class="fn">set</span>(<span class="str">"Authorization"</span>, <span class="str">"Bearer "</span> + authToken)
        .<span class="fn">send</span>({ name: <span class="str">"Updated Name"</span> })
        .<span class="fn">expect</span>(<span class="num">200</span>);

      <span class="fn">expect</span>(res.body.data.name).<span class="fn">toBe</span>(<span class="str">"Updated Name"</span>);
    });
  });

  <span class="fn">describe</span>(<span class="str">"DELETE /api/users/:id"</span>, () =&gt; {
    <span class="fn">it</span>(<span class="str">"should delete user (admin only)"</span>, <span class="kw">async</span> () =&gt; {
      <span class="kw">await</span> <span class="fn">request</span>(app)
        .<span class="fn">delete</span>(<span class="str">"/api/users/"</span> + userId)
        .<span class="fn">set</span>(<span class="str">"Authorization"</span>, <span class="str">"Bearer "</span> + authToken)
        .<span class="fn">expect</span>(<span class="num">200</span>);
    });
  });
});
    </div>

    <div class="code-block">
<span class="cm">// vitest.config.ts</span>
<span class="kw">import</span> { defineConfig } <span class="kw">from</span> <span class="str">"vitest/config"</span>;

<span class="kw">export default</span> <span class="fn">defineConfig</span>({
  test: {
    globals: <span class="kw">true</span>,
    environment: <span class="str">"node"</span>,
    setupFiles: [<span class="str">"./tests/setup.ts"</span>],
    coverage: {
      provider: <span class="str">"v8"</span>,
      reporter: [<span class="str">"text"</span>, <span class="str">"html"</span>],
      exclude: [<span class="str">"node_modules"</span>, <span class="str">"dist"</span>, <span class="str">"tests"</span>],
    },
  },
});
    </div>

    <div class="code-block">
<span class="cm">// tests/setup.ts</span>
<span class="kw">import</span> { beforeAll } <span class="kw">from</span> <span class="str">"vitest"</span>;

<span class="fn">beforeAll</span>(() =&gt; {
  <span class="cm">// Pastikan menggunakan test database!</span>
  process.env.DATABASE_URL = <span class="str">"postgresql://user:pass@localhost:5432/myapp_test"</span>;
  process.env.JWT_SECRET = <span class="str">"test-secret-minimum-32-characters-long!!"</span>;
  process.env.NODE_ENV = <span class="str">"test"</span>;
});
    </div>
</div>

<!-- ==================== SWAGGER/OPENAPI ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">8. ${t('Dokumentasi', 'Documentation')}: Swagger / OpenAPI</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Express: swagger-jsdoc + swagger-ui-express</h3>
<div class="code-block">
<span class="cm">// npm install swagger-jsdoc swagger-ui-express @types/swagger-jsdoc @types/swagger-ui-express</span>

<span class="cm">// src/swagger.ts</span>
<span class="kw">import</span> swaggerJSDoc <span class="kw">from</span> <span class="str">"swagger-jsdoc"</span>;
<span class="kw">import</span> swaggerUi <span class="kw">from</span> <span class="str">"swagger-ui-express"</span>;

<span class="kw">const</span> options: swaggerJSDoc.Options = {
    definition: {
        openapi: <span class="str">"3.0.0"</span>,
        info: {
            title: <span class="str">"User Management API"</span>,
            version: <span class="str">"1.0.0"</span>,
            description: <span class="str">"Production CRUD API with TypeScript"</span>,
        },
        servers: [{ url: <span class="str">"http://localhost:3000"</span> }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: <span class="str">"http"</span>,
                    scheme: <span class="str">"bearer"</span>,
                    bearerFormat: <span class="str">"JWT"</span>,
                },
            },
            schemas: {
                User: {
                    type: <span class="str">"object"</span>,
                    properties: {
                        id: { type: <span class="str">"string"</span>, format: <span class="str">"uuid"</span> },
                        name: { type: <span class="str">"string"</span>, example: <span class="str">"Alice"</span> },
                        email: { type: <span class="str">"string"</span>, format: <span class="str">"email"</span> },
                        createdAt: { type: <span class="str">"string"</span>, format: <span class="str">"date-time"</span> },
                    },
                },
            },
        },
    },
    apis: [<span class="str">"./src/controllers/*.ts"</span>],
};

<span class="kw">const</span> swaggerSpec = <span class="fn">swaggerJSDoc</span>(options);

<span class="cm">// Mount di Express app</span>
app.<span class="fn">use</span>(<span class="str">"/api-docs"</span>, swaggerUi.<span class="fn">serve</span>, swaggerUi.<span class="fn">setup</span>(swaggerSpec));
<span class="cm">// Akses: http://localhost:3000/api-docs</span>

<span class="cm">// Controller annotations (JSDoc)</span>
<span class="cm">/**</span>
<span class="cm"> * @openapi</span>
<span class="cm"> * /api/v1/users:</span>
<span class="cm"> *   post:</span>
<span class="cm"> *     tags: [Users]</span>
<span class="cm"> *     summary: Create a new user</span>
<span class="cm"> *     security:</span>
<span class="cm"> *       - bearerAuth: []</span>
<span class="cm"> *     requestBody:</span>
<span class="cm"> *       required: true</span>
<span class="cm"> *       content:</span>
<span class="cm"> *         application/json:</span>
<span class="cm"> *           schema:</span>
<span class="cm"> *             $ref: '#/components/schemas/CreateUser'</span>
<span class="cm"> *     responses:</span>
<span class="cm"> *       201:</span>
<span class="cm"> *         description: User created</span>
<span class="cm"> *       400:</span>
<span class="cm"> *         description: Validation error</span>
<span class="cm"> */</span>
</div>
</div>

<div class="card animate-in">
<h3 style="color:var(--accent)">Hono: @hono/swagger-ui + zod-openapi</h3>
<div class="code-block">
<span class="cm">// npm install @hono/swagger-ui @hono/zod-openapi</span>

<span class="kw">import</span> { <span class="fn">OpenAPIHono</span>, createRoute, z } <span class="kw">from</span> <span class="str">"@hono/zod-openapi"</span>;
<span class="kw">import</span> { swaggerUI } <span class="kw">from</span> <span class="str">"@hono/swagger-ui"</span>;

<span class="kw">const</span> app = <span class="kw">new</span> <span class="fn">OpenAPIHono</span>();

<span class="cm">// Define route with Zod schema (auto-generates OpenAPI spec!)</span>
<span class="kw">const</span> createUserRoute = <span class="fn">createRoute</span>({
    method: <span class="str">"post"</span>,
    path: <span class="str">"/api/v1/users"</span>,
    request: {
        body: { content: { <span class="str">"application/json"</span>: { schema: CreateUserSchema } } },
    },
    responses: {
        <span class="num">201</span>: { content: { <span class="str">"application/json"</span>: { schema: UserResponseSchema } }, description: <span class="str">"Created"</span> },
        <span class="num">400</span>: { description: <span class="str">"Validation error"</span> },
    },
});

app.<span class="fn">openapi</span>(createUserRoute, <span class="kw">async</span> (c) =&gt; {
    <span class="kw">const</span> body = c.req.<span class="fn">valid</span>(<span class="str">"json"</span>); <span class="cm">// type-safe + validated!</span>
    <span class="kw">const</span> user = <span class="kw">await</span> userService.<span class="fn">create</span>(body);
    <span class="kw">return</span> c.<span class="fn">json</span>(user, <span class="num">201</span>);
});

<span class="cm">// Mount Swagger UI</span>
app.<span class="fn">doc</span>(<span class="str">"/api-docs/openapi.json"</span>, { openapi: <span class="str">"3.0.0"</span>, info: { title: <span class="str">"API"</span>, version: <span class="str">"1.0"</span> } });
app.<span class="fn">get</span>(<span class="str">"/swagger"</span>, swaggerUI({ url: <span class="str">"/api-docs/openapi.json"</span> }));
</div>

<div class="info-box">
    <strong>Prisma + PostgreSQL:</strong> Prisma auto-generates TypeScript types ${t('dari schema.', 'from the schema.')}<br>
    <code>DATABASE_URL="postgresql://user:pass@localhost:5432/mydb?schema=public"</code><br>
    <code>npx prisma migrate dev --name init</code> &rarr; creates tables<br>
    <code>npx prisma generate</code> &rarr; generates Prisma Client<br>
    <code>npx prisma studio</code> &rarr; visual database browser
</div>
</div>

<!-- ==================== SECTION 9: DOCKER ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">9. ${t('Deployment dengan Docker', 'Docker Deployment')}</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Multi-Stage Dockerfile</h3>
    <p>${t('Multi-stage build menghasilkan image yang', 'Multi-stage build produces')} <strong>${t('lebih kecil', 'smaller images')}</strong> ${t('karena hanya menyertakan file production yang dibutuhkan, tanpa devDependencies dan source code.', 'because it only includes the required production files, without devDependencies and source code.')}</p>
    <div class="code-block">
<span class="cm"># Dockerfile</span>

<span class="cm"># === Stage 1: Build ===</span>
<span class="kw">FROM</span> node:<span class="num">20</span>-alpine <span class="kw">AS</span> builder
<span class="kw">WORKDIR</span> /app

<span class="cm"># Install dependencies (cache layer)</span>
<span class="kw">COPY</span> package*.json ./
<span class="kw">COPY</span> prisma ./prisma/
<span class="kw">RUN</span> npm ci

<span class="cm"># Generate Prisma client</span>
<span class="kw">RUN</span> npx prisma generate

<span class="cm"># Copy source and build</span>
<span class="kw">COPY</span> tsconfig.json ./
<span class="kw">COPY</span> src ./src/
<span class="kw">RUN</span> npm run build

<span class="cm"># === Stage 2: Production ===</span>
<span class="kw">FROM</span> node:<span class="num">20</span>-alpine <span class="kw">AS</span> production
<span class="kw">WORKDIR</span> /app

<span class="cm"># Security: non-root user</span>
<span class="kw">RUN</span> addgroup -g <span class="num">1001</span> -S nodejs
<span class="kw">RUN</span> adduser -S appuser -u <span class="num">1001</span>

<span class="cm"># Copy only production files</span>
<span class="kw">COPY</span> --from=builder /app/dist ./dist
<span class="kw">COPY</span> --from=builder /app/node_modules ./node_modules
<span class="kw">COPY</span> --from=builder /app/package*.json ./
<span class="kw">COPY</span> --from=builder /app/prisma ./prisma

<span class="cm"># Remove devDependencies</span>
<span class="kw">RUN</span> npm prune --production

<span class="kw">USER</span> appuser

<span class="kw">EXPOSE</span> <span class="num">3000</span>

<span class="kw">HEALTHCHECK</span> --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

<span class="kw">CMD</span> [<span class="str">"node"</span>, <span class="str">"dist/index.js"</span>]
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Docker Compose: Full Stack</h3>
    <div class="code-block">
<span class="cm"># docker-compose.yml</span>
<span class="kw">version</span>: <span class="str">"3.9"</span>

services:
  <span class="fn">app</span>:
    build: .
    ports:
      - <span class="str">"3000:3000"</span>
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:secret@db:5432/myapp
      - JWT_SECRET=your-super-secret-jwt-key-min-32-chars
      - CORS_ORIGIN=https://myapp.com
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    restart: unless-stopped
    networks:
      - app-network

  <span class="fn">db</span>:
    image: postgres:<span class="num">16</span>-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - <span class="str">"5432:5432"</span>
    healthcheck:
      test: [<span class="str">"CMD-SHELL"</span>, <span class="str">"pg_isready -U postgres"</span>]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  <span class="fn">redis</span>:
    image: redis:<span class="num">7</span>-alpine
    ports:
      - <span class="str">"6379:6379"</span>
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes
    networks:
      - app-network

  <span class="fn">migrate</span>:
    build: .
    command: npx prisma migrate deploy
    environment:
      - DATABASE_URL=postgresql://postgres:secret@db:5432/myapp
    depends_on:
      db:
        condition: service_healthy
    networks:
      - app-network

volumes:
  postgres_data:
  redis_data:

networks:
  app-network:
    driver: bridge
    </div>

    <div class="code-block">
<span class="cm"># Deployment commands:</span>
<span class="cm"># Build dan start semua services:</span>
docker-compose up -d --build

<span class="cm"># Run migrations:</span>
docker-compose run --rm migrate

<span class="cm"># View logs:</span>
docker-compose logs -f app

<span class="cm"># Scale app (horizontal):</span>
docker-compose up -d --scale app=3

<span class="cm"># Stop everything:</span>
docker-compose down

<span class="cm"># Stop dan hapus volumes (WARNING: hapus data!):</span>
docker-compose down -v
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">.env.example</h3>
    <div class="code-block">
<span class="cm"># .env.example</span>
<span class="cm"># Copy ke .env dan isi dengan values sesungguhnya</span>
<span class="cm"># JANGAN commit .env ke git!</span>

NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/myapp
JWT_SECRET=your-secret-key-minimum-32-characters-for-security
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_MAX=100
    </div>
</div>

<!-- ==================== SECTION 9: QUICK REFERENCE ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">10. ${t('Referensi Cepat', 'Quick Reference')}: REST API Endpoints</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">${t('Ringkasan CRUD Endpoints', 'CRUD Endpoints Summary')}</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Method</th><th>Endpoint</th><th>Auth</th><th>Body</th><th>${t('Deskripsi', 'Description')}</th></tr>
    <tr><td><span class="badge badge-green">POST</span></td><td>/api/users</td><td>No</td><td>email, password, name</td><td>${t('Register user baru', 'Register new user')}</td></tr>
    <tr><td><span class="badge badge-green">POST</span></td><td>/api/auth/login</td><td>No</td><td>email, password</td><td>${t('Login, dapat JWT tokens', 'Login, get JWT tokens')}</td></tr>
    <tr><td><span class="badge badge-blue">GET</span></td><td>/api/users</td><td>JWT</td><td>-</td><td>List users (pagination)</td></tr>
    <tr><td><span class="badge badge-blue">GET</span></td><td>/api/users/:id</td><td>JWT</td><td>-</td><td>Get user by ID</td></tr>
    <tr><td><span class="badge badge-yellow">PUT</span></td><td>/api/users/:id</td><td>JWT</td><td>name?, email?, role?</td><td>Update user</td></tr>
    <tr><td><span class="badge badge-red">DELETE</span></td><td>/api/users/:id</td><td>JWT + Admin</td><td>-</td><td>${t('Hapus user', 'Delete user')}</td></tr>
    <tr><td><span class="badge badge-green">POST</span></td><td>/api/auth/refresh</td><td>No</td><td>refreshToken</td><td>Refresh access token</td></tr>
    </table>
    </div>

    <div class="code-block">
<span class="cm">// Contoh request dengan curl:</span>

<span class="cm">// Register</span>
curl -X POST http://localhost:3000/api/users \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{"email":"andi@mail.com","password":"Secret123!","name":"Andi"}'</span>

<span class="cm">// Login</span>
curl -X POST http://localhost:3000/api/auth/login \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{"email":"andi@mail.com","password":"Secret123!"}'</span>

<span class="cm">// Get user (authenticated)</span>
curl http://localhost:3000/api/users/UUID_HERE \
  -H <span class="str">"Authorization: Bearer YOUR_JWT_TOKEN"</span>

<span class="cm">// Update user</span>
curl -X PUT http://localhost:3000/api/users/UUID_HERE \
  -H <span class="str">"Authorization: Bearer YOUR_JWT_TOKEN"</span> \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{"name":"Andi Updated"}'</span>

<span class="cm">// Delete user (admin only)</span>
curl -X DELETE http://localhost:3000/api/users/UUID_HERE \
  -H <span class="str">"Authorization: Bearer ADMIN_JWT_TOKEN"</span>
    </div>
</div>

</section>
`;

// ============================================================
// CRUD JS/TS CANVAS ANIMATION
// ============================================================

function initCrudJstsAnimations() {
    var isDark = function() {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    };

    // Canvas: Architecture Flow
    (function() {
        var canvas = document.getElementById('canvas-crud-jsts-arch');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var W = canvas.width, H = canvas.height;
        var time = 0;
        var animFrame;

        var layers = [
            { label: 'Client', sub: 'Browser/Mobile', x: 30, color: '#74b9ff' },
            { label: 'Middleware', sub: 'Zod + Auth', x: 145, color: '#e17055' },
            { label: 'Controller', sub: 'HTTP Handler', x: 275, color: '#6c5ce7' },
            { label: 'Service', sub: 'Business Logic', x: 400, color: '#00b894' },
            { label: 'Repository', sub: 'Data Access', x: 530, color: '#fdcb6e' },
            { label: 'Prisma', sub: 'ORM', x: 645, color: '#fd79a8' },
            { label: 'PostgreSQL', sub: 'Database', x: 735, color: '#00cec9' },
        ];

        function draw() {
            var dark = isDark();
            var bg = dark ? '#0a0a1a' : '#f0f0f5';
            var textCol = dark ? '#e0e0e0' : '#1a1a2e';
            var textSub = dark ? '#8888aa' : '#666';
            var lineCol = dark ? '#333355' : '#ccccdd';

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Title
            ctx.fillStyle = textCol;
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Layered Architecture: Request Flow', W / 2, 28);

            // Draw layers
            var boxW = 100;
            var boxH = 70;
            var topY = 60;

            layers.forEach(function(layer, i) {
                // Box background
                ctx.fillStyle = layer.color;
                ctx.globalAlpha = 0.12;
                ctx.beginPath();
                ctx.roundRect(layer.x, topY, boxW, boxH, 10);
                ctx.fill();
                ctx.globalAlpha = 1;

                // Box border
                ctx.strokeStyle = layer.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(layer.x, topY, boxW, boxH, 10);
                ctx.stroke();

                // Label
                ctx.fillStyle = textCol;
                ctx.font = 'bold 12px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(layer.label, layer.x + boxW / 2, topY + 30);

                // Sub-label
                ctx.fillStyle = textSub;
                ctx.font = '10px Inter, sans-serif';
                ctx.fillText(layer.sub, layer.x + boxW / 2, topY + 48);

                // Arrows between boxes
                if (i < layers.length - 1) {
                    var nextX = layers[i + 1].x;
                    var fromX = layer.x + boxW;
                    var toX = nextX;
                    var arrowY = topY + boxH / 2;

                    ctx.strokeStyle = lineCol;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(fromX + 2, arrowY);
                    ctx.lineTo(toX - 8, arrowY);
                    ctx.stroke();

                    // Arrowhead
                    ctx.fillStyle = lineCol;
                    ctx.beginPath();
                    ctx.moveTo(toX - 8, arrowY - 5);
                    ctx.lineTo(toX - 1, arrowY);
                    ctx.lineTo(toX - 8, arrowY + 5);
                    ctx.closePath();
                    ctx.fill();
                }
            });

            // Animated request packet
            var totalPathLen = layers[layers.length - 1].x + boxW - layers[0].x;
            var packetPhase = (time % 300) / 300;
            var packetX;
            var packetColor;
            var packetLabel;
            if (packetPhase < 0.5) {
                // Request going right
                var progress = packetPhase * 2;
                packetX = layers[0].x + progress * totalPathLen;
                packetColor = '#74b9ff';
                packetLabel = 'Request';
            } else {
                // Response going left
                var progress2 = (packetPhase - 0.5) * 2;
                packetX = layers[layers.length - 1].x + boxW - progress2 * totalPathLen;
                packetColor = '#00b894';
                packetLabel = 'Response';
            }

            var packetY = topY + boxH / 2;
            ctx.fillStyle = packetColor;
            ctx.globalAlpha = 0.85;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;

            ctx.fillStyle = packetColor;
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(packetLabel, packetX, packetY - 14);

            // Bottom section: TypeScript type-checking zones
            var zoneY = topY + boxH + 35;
            ctx.fillStyle = textCol;
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Type Safety Boundaries:', 30, zoneY);

            var zones = [
                { label: 'Zod Runtime Validation', x: 145, w: 100, color: '#e17055' },
                { label: 'TypeScript Compile-Time', x: 275, w: 250, color: '#6c5ce7' },
                { label: 'Prisma Type-Safe', x: 530, w: 215, color: '#fd79a8' },
            ];

            zones.forEach(function(zone) {
                ctx.fillStyle = zone.color;
                ctx.globalAlpha = 0.08;
                ctx.fillRect(zone.x, zoneY + 8, zone.w, 28);
                ctx.globalAlpha = 1;

                ctx.strokeStyle = zone.color;
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.strokeRect(zone.x, zoneY + 8, zone.w, 28);
                ctx.setLineDash([]);

                ctx.fillStyle = zone.color;
                ctx.font = '10px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(zone.label, zone.x + zone.w / 2, zoneY + 26);
            });

            // Zod validation animation at entry
            var zodPhase = (time % 120) / 120;
            var zodPulse = Math.sin(zodPhase * Math.PI * 2) * 0.3 + 0.7;
            ctx.strokeStyle = '#e17055';
            ctx.lineWidth = 2;
            ctx.globalAlpha = zodPulse;
            ctx.beginPath();
            ctx.roundRect(141, topY - 4, boxW + 8, boxH + 8, 13);
            ctx.stroke();
            ctx.globalAlpha = 1;

            // Bottom info box: data flow description
            var infoY = zoneY + 55;

            var flowSteps = [
                { icon: '1', text: 'Client sends JSON request', color: '#74b9ff' },
                { icon: '2', text: 'Zod validates & transforms data at runtime', color: '#e17055' },
                { icon: '3', text: 'Controller extracts params, calls Service', color: '#6c5ce7' },
                { icon: '4', text: 'Service applies business rules', color: '#00b894' },
                { icon: '5', text: 'Repository builds Prisma query', color: '#fdcb6e' },
                { icon: '6', text: 'Prisma generates type-safe SQL', color: '#fd79a8' },
                { icon: '7', text: 'PostgreSQL executes query', color: '#00cec9' },
            ];

            ctx.fillStyle = textCol;
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Data Flow Steps:', 30, infoY);

            flowSteps.forEach(function(step, i) {
                var sx = 30 + (i % 4) * 195;
                var sy = infoY + 16 + Math.floor(i / 4) * 24;

                // Circle with number
                ctx.fillStyle = step.color;
                ctx.globalAlpha = 0.2;
                ctx.beginPath();
                ctx.arc(sx + 8, sy, 9, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;

                ctx.fillStyle = step.color;
                ctx.font = 'bold 10px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(step.icon, sx + 8, sy + 4);

                ctx.fillStyle = textSub;
                ctx.font = '10px Inter, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(step.text, sx + 22, sy + 4);
            });

            // Response format example
            var resY = infoY + 80;
            ctx.fillStyle = dark ? '#111122' : '#e8e8f0';
            ctx.beginPath();
            ctx.roundRect(30, resY, W - 60, 75, 8);
            ctx.fill();

            ctx.strokeStyle = dark ? '#2a2a4a' : '#ccccdd';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(30, resY, W - 60, 75, 8);
            ctx.stroke();

            ctx.fillStyle = textSub;
            ctx.font = '10px JetBrains Mono, monospace';
            ctx.textAlign = 'left';
            var resLines = [
                '// API Response Format (consistent)',
                '{ "success": true, "data": { "id": "uuid", "email": "...", "name": "..." },',
                '  "pagination": { "page": 1, "limit": 10, "total": 42, "totalPages": 5 },',
                '  "message": "User berhasil dibuat" }',
            ];
            resLines.forEach(function(line, li) {
                var lColor = li === 0 ? (dark ? '#555577' : '#999') : textSub;
                ctx.fillStyle = lColor;
                ctx.fillText(line, 42, resY + 18 + li * 16);
            });

            time++;
            animFrame = requestAnimationFrame(draw);
        }

        draw();

        // Cleanup when navigating away
        var observer = new MutationObserver(function() {
            if (!document.getElementById('canvas-crud-jsts-arch')) {
                cancelAnimationFrame(animFrame);
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Redraw on theme change
        var themeObserver = new MutationObserver(function() {
            // theme change triggers redraw via animation loop
        });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    })();
}
