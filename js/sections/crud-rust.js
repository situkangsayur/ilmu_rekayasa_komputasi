// ============================================================
// RUST CRUD TUTORIAL — RESTful API (Axum) & gRPC (Tonic)
// Production-ready project structure, security best practices
// ============================================================

sections['crud-rust'] = () => `
<section class="animate-in">
<h1 class="section-title animate-in">Rust CRUD — RESTful API &amp; gRPC</h1>
<p class="section-subtitle animate-in">Tutorial komprehensif membangun production-ready CRUD application di Rust menggunakan <strong>Axum</strong> (REST) dan <strong>Tonic</strong> (gRPC), lengkap dengan security best practices, async runtime, dan Docker deployment.</p>

<!-- ===================== 1. PROJECT STRUCTURE ===================== -->
<h2 class="animate-in">1. Production-Ready Project Structure</h2>

<div class="card animate-in">
<h3>Arsitektur Proyek</h3>
<p>Struktur proyek Rust yang baik mengikuti prinsip <strong>separation of concerns</strong> dengan layer yang jelas: handler (controller), service (business logic), dan repository (data access). Setiap layer berkomunikasi melalui trait, memungkinkan dependency injection dan testability yang tinggi.</p>
<div class="info-box">
<strong>Prinsip:</strong> Rust tidak memiliki framework "batteries-included" seperti Django atau Rails. Sebagai gantinya, ekosistem Rust mengandalkan komposisi crate-crate kecil yang masing-masing melakukan satu hal dengan baik — sesuai dengan filosofi Unix.
</div>
</div>

<div class="card animate-in">
<h3>Struktur Direktori</h3>
<div class="code-block"><span class="cm">// Production-ready Rust project structure</span>
myapp/
├── src/
│   ├── main.rs                <span class="cm">// Entry point, server setup</span>
│   ├── lib.rs                 <span class="cm">// Library root, re-exports</span>
│   ├── config.rs              <span class="cm">// Configuration dari env vars</span>
│   ├── error.rs               <span class="cm">// Custom error types (AppError)</span>
│   ├── handlers/              <span class="cm">// HTTP/gRPC request handlers</span>
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── services/              <span class="cm">// Business logic layer</span>
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── repositories/          <span class="cm">// Database access layer</span>
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── models/                <span class="cm">// Data structures &amp; DTOs</span>
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── middleware/             <span class="cm">// Auth, logging, rate limiting</span>
│   │   ├── mod.rs
│   │   ├── auth.rs
│   │   └── logging.rs
│   └── proto/                 <span class="cm">// Protocol Buffer definitions</span>
│       └── user.proto
├── migrations/                <span class="cm">// SQL migration files</span>
│   └── 001_create_users.sql
├── build.rs                   <span class="cm">// tonic-build untuk gRPC</span>
├── Cargo.toml                 <span class="cm">// Dependencies</span>
├── Dockerfile                 <span class="cm">// Multi-stage build</span>
├── docker-compose.yml         <span class="cm">// Orchestration</span>
└── .env                       <span class="cm">// Environment variables (jangan commit!)</span></div>
</div>

<div class="card animate-in">
<h3>Cargo.toml — Dependencies</h3>
<p>Berikut dependency lengkap untuk proyek REST + gRPC dengan semua fitur keamanan:</p>
<div class="code-block"><span class="cm"># Cargo.toml</span>
[package]
name = <span class="str">"myapp"</span>
version = <span class="str">"0.1.0"</span>
edition = <span class="str">"2021"</span>

[dependencies]
<span class="cm"># Web framework</span>
axum = { version = <span class="str">"0.7"</span>, features = [<span class="str">"macros"</span>] }
tower = <span class="str">"0.4"</span>
tower-http = { version = <span class="str">"0.5"</span>, features = [<span class="str">"cors"</span>, <span class="str">"trace"</span>, <span class="str">"limit"</span>] }

<span class="cm"># Async runtime</span>
tokio = { version = <span class="str">"1"</span>, features = [<span class="str">"full"</span>] }

<span class="cm"># Serialization</span>
serde = { version = <span class="str">"1"</span>, features = [<span class="str">"derive"</span>] }
serde_json = <span class="str">"1"</span>

<span class="cm"># Database</span>
sqlx = { version = <span class="str">"0.7"</span>, features = [
    <span class="str">"runtime-tokio"</span>, <span class="str">"tls-rustls"</span>,
    <span class="str">"postgres"</span>, <span class="str">"uuid"</span>, <span class="str">"chrono"</span>
] }

<span class="cm"># gRPC</span>
tonic = <span class="str">"0.11"</span>
prost = <span class="str">"0.12"</span>

<span class="cm"># Security</span>
argon2 = <span class="str">"0.5"</span>
jsonwebtoken = <span class="str">"9"</span>
validator = { version = <span class="str">"0.16"</span>, features = [<span class="str">"derive"</span>] }

<span class="cm"># Utilities</span>
uuid = { version = <span class="str">"1"</span>, features = [<span class="str">"v4"</span>, <span class="str">"serde"</span>] }
chrono = { version = <span class="str">"0.4"</span>, features = [<span class="str">"serde"</span>] }
dotenvy = <span class="str">"0.15"</span>
tracing = <span class="str">"0.1"</span>
tracing-subscriber = { version = <span class="str">"0.3"</span>, features = [<span class="str">"env-filter"</span>] }
thiserror = <span class="str">"1"</span>

[build-dependencies]
tonic-build = <span class="str">"0.11"</span></div>
</div>

<div class="card animate-in">
<h3>config.rs — Konfigurasi Aman</h3>
<p>Konfigurasi diambil dari environment variables, bukan hardcoded. Ini memungkinkan deployment yang fleksibel dan aman.</p>
<div class="code-block"><span class="kw">use</span> std::env;

<span class="cm">/// Application configuration loaded from environment</span>
<span class="kw">pub struct</span> <span class="type">Config</span> {
    <span class="kw">pub</span> database_url: <span class="type">String</span>,
    <span class="kw">pub</span> jwt_secret:   <span class="type">String</span>,
    <span class="kw">pub</span> server_host:  <span class="type">String</span>,
    <span class="kw">pub</span> server_port:  <span class="type">u16</span>,
    <span class="kw">pub</span> grpc_port:    <span class="type">u16</span>,
}

<span class="kw">impl</span> <span class="type">Config</span> {
    <span class="cm">/// Load config from environment variables.</span>
    <span class="cm">/// Panics on startup if required vars are missing.</span>
    <span class="kw">pub fn</span> <span class="fn">from_env</span>() -&gt; <span class="type">Self</span> {
        dotenvy::dotenv().ok(); <span class="cm">// .env file optional</span>

        <span class="type">Config</span> {
            database_url: env::var(<span class="str">"DATABASE_URL"</span>)
                .expect(<span class="str">"DATABASE_URL must be set"</span>),
            jwt_secret: env::var(<span class="str">"JWT_SECRET"</span>)
                .expect(<span class="str">"JWT_SECRET must be set"</span>),
            server_host: env::var(<span class="str">"HOST"</span>)
                .unwrap_or_else(|_| <span class="str">"0.0.0.0"</span>.into()),
            server_port: env::var(<span class="str">"PORT"</span>)
                .unwrap_or_else(|_| <span class="str">"3000"</span>.into())
                .parse()
                .expect(<span class="str">"PORT must be a number"</span>),
            grpc_port: env::var(<span class="str">"GRPC_PORT"</span>)
                .unwrap_or_else(|_| <span class="str">"50051"</span>.into())
                .parse()
                .expect(<span class="str">"GRPC_PORT must be a number"</span>),
        }
    }
}</div>
</div>

<div class="card animate-in">
<h3>Alur Arsitektur (Canvas)</h3>
<canvas id="canvas-crud-rust-arch" width="900" height="420" style="width:100%;max-width:900px;border-radius:12px;background:#1e1e2e;display:block;margin:1rem auto;"></canvas>
<p style="text-align:center;opacity:0.7;font-size:0.9rem;">Alur request dari client melalui Axum handler, service layer, repository, hingga database. Setiap layer memiliki type safety.</p>
</div>

<!-- ===================== 2. ERROR HANDLING ===================== -->
<h2 class="animate-in">2. Custom Error Handling</h2>

<div class="card animate-in">
<h3>error.rs — AppError dengan thiserror</h3>
<p>Rust tidak menggunakan exception. Semua error ditangani melalui <code>Result&lt;T, E&gt;</code>. Kita membuat custom error type yang mengimplementasikan <code>IntoResponse</code> dari Axum agar error otomatis dikonversi menjadi HTTP response yang tepat.</p>
<div class="code-block"><span class="kw">use</span> axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
<span class="kw">use</span> serde_json::json;

<span class="cm">/// Semua error dalam aplikasi dikumpulkan di sini.</span>
<span class="cm">/// thiserror menghasilkan impl Display secara otomatis.</span>
#[derive(Debug, thiserror::Error)]
<span class="kw">pub enum</span> <span class="type">AppError</span> {
    #[error(<span class="str">"Resource not found: {0}"</span>)]
    NotFound(<span class="type">String</span>),

    #[error(<span class="str">"Validation error: {0}"</span>)]
    Validation(<span class="type">String</span>),

    #[error(<span class="str">"Authentication required"</span>)]
    Unauthorized,

    #[error(<span class="str">"Forbidden"</span>)]
    Forbidden,

    #[error(<span class="str">"Duplicate entry: {0}"</span>)]
    Conflict(<span class="type">String</span>),

    #[error(<span class="str">"Database error: {0}"</span>)]
    Database(#[from] sqlx::Error),

    #[error(<span class="str">"Internal error: {0}"</span>)]
    Internal(<span class="type">String</span>),
}

<span class="cm">/// Konversi AppError menjadi HTTP response secara otomatis.</span>
<span class="cm">/// Axum memanggil ini ketika handler mengembalikan Err(AppError).</span>
<span class="kw">impl</span> IntoResponse <span class="kw">for</span> <span class="type">AppError</span> {
    <span class="kw">fn</span> <span class="fn">into_response</span>(self) -&gt; Response {
        <span class="kw">let</span> (status, message) = <span class="kw">match</span> &amp;self {
            <span class="type">AppError</span>::NotFound(msg) =&gt;
                (StatusCode::NOT_FOUND, msg.clone()),
            <span class="type">AppError</span>::Validation(msg) =&gt;
                (StatusCode::BAD_REQUEST, msg.clone()),
            <span class="type">AppError</span>::Unauthorized =&gt;
                (StatusCode::UNAUTHORIZED, <span class="str">"Unauthorized"</span>.into()),
            <span class="type">AppError</span>::Forbidden =&gt;
                (StatusCode::FORBIDDEN, <span class="str">"Forbidden"</span>.into()),
            <span class="type">AppError</span>::Conflict(msg) =&gt;
                (StatusCode::CONFLICT, msg.clone()),
            <span class="type">AppError</span>::Database(_) =&gt; {
                <span class="cm">// Jangan expose detail DB error ke client!</span>
                tracing::error!(<span class="str">"Database error: {:?}"</span>, self);
                (StatusCode::INTERNAL_SERVER_ERROR,
                 <span class="str">"Internal server error"</span>.into())
            }
            <span class="type">AppError</span>::Internal(_) =&gt; {
                tracing::error!(<span class="str">"Internal error: {:?}"</span>, self);
                (StatusCode::INTERNAL_SERVER_ERROR,
                 <span class="str">"Internal server error"</span>.into())
            }
        };

        <span class="kw">let</span> body = Json(json!({
            <span class="str">"error"</span>: message,
            <span class="str">"status"</span>: status.as_u16(),
        }));

        (status, body).into_response()
    }
}</div>
</div>

<div class="card animate-in">
<h3>Kenapa Ini Lebih Baik dari Exception?</h3>
<div class="card-grid">
<div class="card">
<h4 style="color:var(--green)">Rust (Result&lt;T, AppError&gt;)</h4>
<ul>
<li><strong>Compile-time checked</strong> — compiler memaksa kita menangani error</li>
<li><strong>Explicit</strong> — dari signature fungsi, jelas error apa yang mungkin terjadi</li>
<li><strong>No hidden control flow</strong> — tidak ada exception yang bisa "terbang" melewati call stack tanpa ketahuan</li>
<li><strong>Pattern matching</strong> — enum error di-match secara exhaustive</li>
</ul>
</div>
<div class="card">
<h4 style="color:var(--red)">Exception (Java/Python)</h4>
<ul>
<li><strong>Runtime error</strong> — crash bisa terjadi di production</li>
<li><strong>Implicit</strong> — siapapun bisa throw tanpa deklarasi</li>
<li><strong>Hidden control flow</strong> — exception bisa skip banyak frame</li>
<li><strong>Easy to forget</strong> — catch yang terlewat menyebabkan crash</li>
</ul>
</div>
</div>
</div>

<!-- ===================== 3. MODELS ===================== -->
<h2 class="animate-in">3. Models &amp; Data Transfer Objects</h2>

<div class="card animate-in">
<h3>models/user.rs — User Model</h3>
<p>Model dipisah menjadi beberapa struct: model database, request DTO, dan response DTO. Ini mencegah data sensitif (seperti password hash) bocor ke response.</p>
<div class="code-block"><span class="kw">use</span> chrono::{DateTime, Utc};
<span class="kw">use</span> serde::{Deserialize, Serialize};
<span class="kw">use</span> sqlx::FromRow;
<span class="kw">use</span> uuid::Uuid;
<span class="kw">use</span> validator::Validate;

<span class="cm">/// Database model — includes password_hash, never sent to client</span>
#[derive(Debug, Clone, FromRow)]
<span class="kw">pub struct</span> <span class="type">User</span> {
    <span class="kw">pub</span> id:            <span class="type">Uuid</span>,
    <span class="kw">pub</span> username:      <span class="type">String</span>,
    <span class="kw">pub</span> email:         <span class="type">String</span>,
    <span class="kw">pub</span> password_hash: <span class="type">String</span>,  <span class="cm">// NEVER serialize this!</span>
    <span class="kw">pub</span> full_name:     <span class="type">String</span>,
    <span class="kw">pub</span> is_active:     <span class="type">bool</span>,
    <span class="kw">pub</span> created_at:    DateTime&lt;Utc&gt;,
    <span class="kw">pub</span> updated_at:    DateTime&lt;Utc&gt;,
}

<span class="cm">/// Request DTO — input validation with validator crate</span>
#[derive(Debug, Deserialize, Validate)]
<span class="kw">pub struct</span> <span class="type">CreateUserRequest</span> {
    #[validate(length(min = 3, max = 50,
        message = <span class="str">"Username must be 3-50 characters"</span>))]
    <span class="kw">pub</span> username:  <span class="type">String</span>,

    #[validate(email(message = <span class="str">"Invalid email format"</span>))]
    <span class="kw">pub</span> email:     <span class="type">String</span>,

    #[validate(length(min = 8, max = 128,
        message = <span class="str">"Password must be 8-128 characters"</span>))]
    <span class="kw">pub</span> password:  <span class="type">String</span>,

    #[validate(length(min = 1, max = 100))]
    <span class="kw">pub</span> full_name: <span class="type">String</span>,
}

<span class="cm">/// Update DTO — all fields optional</span>
#[derive(Debug, Deserialize, Validate)]
<span class="kw">pub struct</span> <span class="type">UpdateUserRequest</span> {
    #[validate(length(min = 1, max = 100))]
    <span class="kw">pub</span> full_name: <span class="type">Option</span>&lt;<span class="type">String</span>&gt;,

    #[validate(email)]
    <span class="kw">pub</span> email:     <span class="type">Option</span>&lt;<span class="type">String</span>&gt;,
}

<span class="cm">/// Response DTO — safe to send to client (no password_hash!)</span>
#[derive(Debug, Serialize)]
<span class="kw">pub struct</span> <span class="type">UserResponse</span> {
    <span class="kw">pub</span> id:         <span class="type">Uuid</span>,
    <span class="kw">pub</span> username:   <span class="type">String</span>,
    <span class="kw">pub</span> email:      <span class="type">String</span>,
    <span class="kw">pub</span> full_name:  <span class="type">String</span>,
    <span class="kw">pub</span> is_active:  <span class="type">bool</span>,
    <span class="kw">pub</span> created_at: DateTime&lt;Utc&gt;,
}

<span class="cm">/// Konversi User (DB) menjadi UserResponse (safe)</span>
<span class="kw">impl</span> <span class="type">From</span>&lt;<span class="type">User</span>&gt; <span class="kw">for</span> <span class="type">UserResponse</span> {
    <span class="kw">fn</span> <span class="fn">from</span>(u: <span class="type">User</span>) -&gt; <span class="type">Self</span> {
        <span class="type">UserResponse</span> {
            id:         u.id,
            username:   u.username,
            email:      u.email,
            full_name:  u.full_name,
            is_active:  u.is_active,
            created_at: u.created_at,
        }
    }
}

<span class="cm">/// Login request</span>
#[derive(Debug, Deserialize)]
<span class="kw">pub struct</span> <span class="type">LoginRequest</span> {
    <span class="kw">pub</span> username: <span class="type">String</span>,
    <span class="kw">pub</span> password: <span class="type">String</span>,
}

<span class="cm">/// Login response with JWT token</span>
#[derive(Debug, Serialize)]
<span class="kw">pub struct</span> <span class="type">LoginResponse</span> {
    <span class="kw">pub</span> token:      <span class="type">String</span>,
    <span class="kw">pub</span> token_type: <span class="type">String</span>,
    <span class="kw">pub</span> expires_in: <span class="type">u64</span>,
}

<span class="cm">/// JWT Claims</span>
#[derive(Debug, Serialize, Deserialize)]
<span class="kw">pub struct</span> <span class="type">Claims</span> {
    <span class="kw">pub</span> sub: <span class="type">String</span>,   <span class="cm">// user id</span>
    <span class="kw">pub</span> exp: <span class="type">usize</span>,   <span class="cm">// expiry timestamp</span>
    <span class="kw">pub</span> iat: <span class="type">usize</span>,   <span class="cm">// issued at</span>
    <span class="kw">pub</span> role: <span class="type">String</span>, <span class="cm">// user role</span>
}</div>
</div>

<div class="card animate-in">
<h3>Kenapa Pisahkan Model, Request DTO, Response DTO?</h3>
<div class="info-box">
<strong>Security by Design:</strong> Struct <code>User</code> (database model) mengandung <code>password_hash</code>. Jika kita langsung serialize <code>User</code> ke JSON response, hash password akan bocor! Dengan memisahkan <code>UserResponse</code>, Rust <em>compiler</em> memastikan bahwa field sensitif tidak pernah terkirim ke client. Ini bukan konvensi — ini <strong>dijamin oleh type system</strong>.
</div>
<div class="table-wrapper">
<table>
<tr><th>Struct</th><th>Derive</th><th>Tujuan</th><th>Field password</th></tr>
<tr><td>User</td><td>FromRow</td><td>Baca dari DB</td><td>Ada (password_hash)</td></tr>
<tr><td>CreateUserRequest</td><td>Deserialize, Validate</td><td>Input dari client</td><td>Ada (plaintext, di-hash)</td></tr>
<tr><td>UserResponse</td><td>Serialize</td><td>Output ke client</td><td><strong>Tidak ada!</strong></td></tr>
</table>
</div>
</div>

<!-- ===================== 4. REPOSITORY LAYER ===================== -->
<h2 class="animate-in">4. Repository Layer — Database Access</h2>

<div class="card animate-in">
<h3>repositories/user.rs — sqlx with Compile-Time Checked Queries</h3>
<p>Repository layer bertugas mengelola akses database. Dengan <code>sqlx</code>, query SQL diperiksa saat <strong>compile time</strong> — typo di nama kolom atau tipe data yang salah akan ditangkap sebelum program berjalan.</p>
<div class="code-block"><span class="kw">use</span> sqlx::PgPool;
<span class="kw">use</span> uuid::Uuid;
<span class="kw">use</span> crate::error::AppError;
<span class="kw">use</span> crate::models::user::{User, CreateUserRequest, UpdateUserRequest};

<span class="kw">pub struct</span> <span class="type">UserRepository</span> {
    pool: PgPool,
}

<span class="kw">impl</span> <span class="type">UserRepository</span> {
    <span class="kw">pub fn</span> <span class="fn">new</span>(pool: PgPool) -&gt; <span class="type">Self</span> {
        <span class="type">Self</span> { pool }
    }

    <span class="cm">/// CREATE — Insert user ke database</span>
    <span class="kw">pub async fn</span> <span class="fn">create</span>(
        &amp;self,
        id: Uuid,
        req: &amp;CreateUserRequest,
        password_hash: &amp;<span class="type">str</span>,
    ) -&gt; <span class="type">Result</span>&lt;User, AppError&gt; {
        <span class="kw">let</span> user = sqlx::query_as::&lt;_, User&gt;(
            <span class="str">"INSERT INTO users
                (id, username, email, password_hash, full_name)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *"</span>
        )
        .bind(id)
        .bind(&amp;req.username)
        .bind(&amp;req.email)
        .bind(password_hash)
        .bind(&amp;req.full_name)
        .fetch_one(&amp;self.pool)
        .<span class="kw">await</span>
        .map_err(|e| <span class="kw">match</span> e {
            sqlx::Error::Database(ref db_err)
                <span class="kw">if</span> db_err.constraint() == Some(<span class="str">"users_email_key"</span>) =&gt;
            {
                AppError::Conflict(<span class="str">"Email already exists"</span>.into())
            }
            sqlx::Error::Database(ref db_err)
                <span class="kw">if</span> db_err.constraint() == Some(<span class="str">"users_username_key"</span>) =&gt;
            {
                AppError::Conflict(<span class="str">"Username already exists"</span>.into())
            }
            _ =&gt; AppError::Database(e),
        })?;

        Ok(user)
    }

    <span class="cm">/// READ — Get user by ID</span>
    <span class="kw">pub async fn</span> <span class="fn">find_by_id</span>(
        &amp;self,
        id: Uuid,
    ) -&gt; <span class="type">Result</span>&lt;User, AppError&gt; {
        sqlx::query_as::&lt;_, User&gt;(
            <span class="str">"SELECT * FROM users WHERE id = $1 AND is_active = true"</span>
        )
        .bind(id)
        .fetch_optional(&amp;self.pool)
        .<span class="kw">await</span>?
        .ok_or_else(|| AppError::NotFound(
            format!(<span class="str">"User {} not found"</span>, id)
        ))
    }

    <span class="cm">/// READ — Get user by username (for login)</span>
    <span class="kw">pub async fn</span> <span class="fn">find_by_username</span>(
        &amp;self,
        username: &amp;<span class="type">str</span>,
    ) -&gt; <span class="type">Result</span>&lt;User, AppError&gt; {
        sqlx::query_as::&lt;_, User&gt;(
            <span class="str">"SELECT * FROM users
             WHERE username = $1 AND is_active = true"</span>
        )
        .bind(username)
        .fetch_optional(&amp;self.pool)
        .<span class="kw">await</span>?
        .ok_or(AppError::NotFound(<span class="str">"User not found"</span>.into()))
    }

    <span class="cm">/// READ — List all users with pagination</span>
    <span class="kw">pub async fn</span> <span class="fn">find_all</span>(
        &amp;self,
        limit: <span class="type">i64</span>,
        offset: <span class="type">i64</span>,
    ) -&gt; <span class="type">Result</span>&lt;<span class="type">Vec</span>&lt;User&gt;, AppError&gt; {
        <span class="kw">let</span> users = sqlx::query_as::&lt;_, User&gt;(
            <span class="str">"SELECT * FROM users
             WHERE is_active = true
             ORDER BY created_at DESC
             LIMIT $1 OFFSET $2"</span>
        )
        .bind(limit)
        .bind(offset)
        .fetch_all(&amp;self.pool)
        .<span class="kw">await</span>?;

        Ok(users)
    }

    <span class="cm">/// UPDATE — Partial update user</span>
    <span class="kw">pub async fn</span> <span class="fn">update</span>(
        &amp;self,
        id: Uuid,
        req: &amp;UpdateUserRequest,
    ) -&gt; <span class="type">Result</span>&lt;User, AppError&gt; {
        <span class="kw">let</span> user = sqlx::query_as::&lt;_, User&gt;(
            <span class="str">"UPDATE users SET
                full_name  = COALESCE($2, full_name),
                email      = COALESCE($3, email),
                updated_at = NOW()
             WHERE id = $1 AND is_active = true
             RETURNING *"</span>
        )
        .bind(id)
        .bind(&amp;req.full_name)
        .bind(&amp;req.email)
        .fetch_optional(&amp;self.pool)
        .<span class="kw">await</span>?
        .ok_or(AppError::NotFound(format!(<span class="str">"User {} not found"</span>, id)))?;

        Ok(user)
    }

    <span class="cm">/// DELETE — Soft delete (set is_active = false)</span>
    <span class="kw">pub async fn</span> <span class="fn">soft_delete</span>(
        &amp;self,
        id: Uuid,
    ) -&gt; <span class="type">Result</span>&lt;(), AppError&gt; {
        <span class="kw">let</span> result = sqlx::query(
            <span class="str">"UPDATE users SET is_active = false, updated_at = NOW()
             WHERE id = $1 AND is_active = true"</span>
        )
        .bind(id)
        .execute(&amp;self.pool)
        .<span class="kw">await</span>?;

        <span class="kw">if</span> result.rows_affected() == <span class="num">0</span> {
            <span class="kw">return</span> Err(AppError::NotFound(
                format!(<span class="str">"User {} not found"</span>, id)
            ));
        }
        Ok(())
    }
}</div>
</div>

<div class="card animate-in">
<h3>SQL Migration — 001_create_users.sql</h3>
<div class="code-block"><span class="cm">-- migrations/001_create_users.sql</span>
<span class="kw">CREATE EXTENSION IF NOT EXISTS</span> <span class="str">"uuid-ossp"</span>;

<span class="kw">CREATE TABLE</span> users (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username      VARCHAR(50) UNIQUE NOT NULL,
    email         VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name     VARCHAR(100) NOT NULL,
    is_active     BOOLEAN NOT NULL DEFAULT <span class="num">true</span>,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

<span class="cm">-- Index for login queries</span>
<span class="kw">CREATE INDEX</span> idx_users_username ON users(username);
<span class="kw">CREATE INDEX</span> idx_users_email ON users(email);</div>
</div>

<div class="card animate-in">
<h3>Compile-Time Query Checking (sqlx)</h3>
<div class="info-box">
<strong>Bagaimana sqlx mencegah SQL injection?</strong>
<ol>
<li><strong>Parameterized queries</strong> — Semua input user diikat melalui <code>.bind()</code>, bukan string concatenation. Database driver meng-escape secara otomatis.</li>
<li><strong>Compile-time verification</strong> — Dengan <code>sqlx::query!</code> macro, sqlx terkoneksi ke database saat compile dan memverifikasi: (a) SQL syntax valid, (b) nama kolom ada, (c) tipe data cocok dengan struct Rust.</li>
<li><strong>Type system</strong> — Nilai <code>Uuid</code> tidak bisa mengandung SQL injection. Rust type system memastikan input di-cast ke tipe yang benar sebelum dikirim ke database.</li>
</ol>
</div>
</div>

<!-- ===================== 5. SERVICE LAYER ===================== -->
<h2 class="animate-in">5. Service Layer — Business Logic</h2>

<div class="card animate-in">
<h3>services/user.rs — Password Hashing &amp; JWT</h3>
<p>Service layer berisi business logic yang tidak boleh berada di handler maupun repository. Di sini kita melakukan password hashing, JWT token generation, dan validasi bisnis.</p>
<div class="code-block"><span class="kw">use</span> argon2::{
    password_hash::{PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
<span class="kw">use</span> jsonwebtoken::{encode, decode, Header, Validation, EncodingKey, DecodingKey};
<span class="kw">use</span> uuid::Uuid;
<span class="kw">use</span> chrono::Utc;
<span class="kw">use</span> std::sync::Arc;

<span class="kw">use</span> crate::config::Config;
<span class="kw">use</span> crate::error::AppError;
<span class="kw">use</span> crate::models::user::*;
<span class="kw">use</span> crate::repositories::user::UserRepository;

<span class="kw">pub struct</span> <span class="type">UserService</span> {
    repo:   <span class="type">UserRepository</span>,
    config: Arc&lt;Config&gt;,
}

<span class="kw">impl</span> <span class="type">UserService</span> {
    <span class="kw">pub fn</span> <span class="fn">new</span>(repo: UserRepository, config: Arc&lt;Config&gt;) -&gt; <span class="type">Self</span> {
        <span class="type">Self</span> { repo, config }
    }

    <span class="cm">/// Register new user with password hashing</span>
    <span class="kw">pub async fn</span> <span class="fn">create_user</span>(
        &amp;self,
        req: CreateUserRequest,
    ) -&gt; <span class="type">Result</span>&lt;UserResponse, AppError&gt; {
        <span class="cm">// 1. Hash password with Argon2 (memory-hard, GPU-resistant)</span>
        <span class="kw">let</span> password_hash = self.hash_password(&amp;req.password)?;

        <span class="cm">// 2. Generate UUID</span>
        <span class="kw">let</span> id = Uuid::new_v4();

        <span class="cm">// 3. Save to DB</span>
        <span class="kw">let</span> user = self.repo
            .create(id, &amp;req, &amp;password_hash)
            .<span class="kw">await</span>?;

        <span class="cm">// 4. Convert to safe response (no password_hash)</span>
        Ok(UserResponse::from(user))
    }

    <span class="cm">/// Login: verify password and return JWT token</span>
    <span class="kw">pub async fn</span> <span class="fn">login</span>(
        &amp;self,
        req: LoginRequest,
    ) -&gt; <span class="type">Result</span>&lt;LoginResponse, AppError&gt; {
        <span class="cm">// 1. Find user by username</span>
        <span class="kw">let</span> user = self.repo
            .find_by_username(&amp;req.username)
            .<span class="kw">await</span>
            .map_err(|_| AppError::Unauthorized)?;

        <span class="cm">// 2. Verify password (constant-time comparison)</span>
        self.verify_password(&amp;req.password, &amp;user.password_hash)?;

        <span class="cm">// 3. Generate JWT token</span>
        <span class="kw">let</span> token = self.generate_jwt(&amp;user)?;
        <span class="kw">let</span> expires_in = <span class="num">3600</span> * <span class="num">24</span>; <span class="cm">// 24 hours</span>

        Ok(LoginResponse {
            token,
            token_type: <span class="str">"Bearer"</span>.into(),
            expires_in,
        })
    }

    <span class="cm">/// Get user by ID</span>
    <span class="kw">pub async fn</span> <span class="fn">get_user</span>(
        &amp;self, id: Uuid,
    ) -&gt; <span class="type">Result</span>&lt;UserResponse, AppError&gt; {
        <span class="kw">let</span> user = self.repo.find_by_id(id).<span class="kw">await</span>?;
        Ok(UserResponse::from(user))
    }

    <span class="cm">/// List users with pagination</span>
    <span class="kw">pub async fn</span> <span class="fn">list_users</span>(
        &amp;self, limit: <span class="type">i64</span>, offset: <span class="type">i64</span>,
    ) -&gt; <span class="type">Result</span>&lt;<span class="type">Vec</span>&lt;UserResponse&gt;, AppError&gt; {
        <span class="kw">let</span> users = self.repo.find_all(limit, offset).<span class="kw">await</span>?;
        Ok(users.into_iter().map(UserResponse::from).collect())
    }

    <span class="cm">/// Update user</span>
    <span class="kw">pub async fn</span> <span class="fn">update_user</span>(
        &amp;self, id: Uuid, req: UpdateUserRequest,
    ) -&gt; <span class="type">Result</span>&lt;UserResponse, AppError&gt; {
        <span class="kw">let</span> user = self.repo.update(id, &amp;req).<span class="kw">await</span>?;
        Ok(UserResponse::from(user))
    }

    <span class="cm">/// Soft delete user</span>
    <span class="kw">pub async fn</span> <span class="fn">delete_user</span>(
        &amp;self, id: Uuid,
    ) -&gt; <span class="type">Result</span>&lt;(), AppError&gt; {
        self.repo.soft_delete(id).<span class="kw">await</span>
    }

    <span class="cm">// ============ Private helpers ============</span>

    <span class="cm">/// Hash password menggunakan Argon2id</span>
    <span class="kw">fn</span> <span class="fn">hash_password</span>(&amp;self, password: &amp;<span class="type">str</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, AppError&gt; {
        <span class="kw">let</span> salt = SaltString::generate(&amp;<span class="kw">mut</span> rand::thread_rng());
        <span class="kw">let</span> argon2 = Argon2::default();
        <span class="kw">let</span> hash = argon2
            .hash_password(password.as_bytes(), &amp;salt)
            .map_err(|e| AppError::Internal(
                format!(<span class="str">"Password hashing failed: {}"</span>, e)
            ))?;
        Ok(hash.to_string())
    }

    <span class="cm">/// Verify password against stored hash</span>
    <span class="kw">fn</span> <span class="fn">verify_password</span>(
        &amp;self,
        password: &amp;<span class="type">str</span>,
        hash: &amp;<span class="type">str</span>,
    ) -&gt; <span class="type">Result</span>&lt;(), AppError&gt; {
        <span class="kw">let</span> parsed = PasswordHash::new(hash)
            .map_err(|_| AppError::Internal(<span class="str">"Invalid hash"</span>.into()))?;
        Argon2::default()
            .verify_password(password.as_bytes(), &amp;parsed)
            .map_err(|_| AppError::Unauthorized)
    }

    <span class="cm">/// Generate JWT token</span>
    <span class="kw">fn</span> <span class="fn">generate_jwt</span>(&amp;self, user: &amp;User) -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, AppError&gt; {
        <span class="kw">let</span> now = Utc::now().timestamp() <span class="kw">as</span> <span class="type">usize</span>;
        <span class="kw">let</span> claims = Claims {
            sub:  user.id.to_string(),
            iat:  now,
            exp:  now + (<span class="num">3600</span> * <span class="num">24</span>), <span class="cm">// 24h</span>
            role: <span class="str">"user"</span>.into(),
        };

        encode(
            &amp;Header::default(),
            &amp;claims,
            &amp;EncodingKey::from_secret(
                self.config.jwt_secret.as_bytes()
            ),
        )
        .map_err(|e| AppError::Internal(
            format!(<span class="str">"JWT generation failed: {}"</span>, e)
        ))
    }

    <span class="cm">/// Validate JWT token and extract claims</span>
    <span class="kw">pub fn</span> <span class="fn">validate_jwt</span>(&amp;self, token: &amp;<span class="type">str</span>) -&gt; <span class="type">Result</span>&lt;Claims, AppError&gt; {
        <span class="kw">let</span> data = decode::&lt;Claims&gt;(
            token,
            &amp;DecodingKey::from_secret(
                self.config.jwt_secret.as_bytes()
            ),
            &amp;Validation::default(),
        )
        .map_err(|_| AppError::Unauthorized)?;

        Ok(data.claims)
    }
}</div>
</div>

<div class="card animate-in">
<h3>Argon2 — Kenapa Bukan bcrypt?</h3>
<div class="table-wrapper">
<table>
<tr><th>Algoritma</th><th>Tahun</th><th>Memory-Hard</th><th>GPU-Resistant</th><th>Rekomendasi</th></tr>
<tr><td>MD5/SHA</td><td>1990an</td><td>Tidak</td><td>Tidak</td><td style="color:var(--red)">JANGAN PERNAH untuk password</td></tr>
<tr><td>bcrypt</td><td>1999</td><td>Tidak</td><td>Parsial</td><td>Masih aman, tapi ada yang lebih baik</td></tr>
<tr><td>scrypt</td><td>2009</td><td>Ya</td><td>Ya</td><td>Bagus, tapi parameter tuning sulit</td></tr>
<tr><td style="color:var(--green)"><strong>Argon2id</strong></td><td>2015</td><td><strong>Ya</strong></td><td><strong>Ya</strong></td><td style="color:var(--green)"><strong>Rekomendasi OWASP &amp; PHC winner</strong></td></tr>
</table>
</div>
<div class="info-box">
<strong>Argon2id</strong> adalah pemenang Password Hashing Competition (2015). Ia menggabungkan kelebihan Argon2d (resistance terhadap GPU) dan Argon2i (resistance terhadap side-channel attack). Memory-hardness membuatnya sangat mahal untuk di-brute-force bahkan dengan hardware khusus.
</div>
</div>

<!-- ===================== 6. HANDLERS ===================== -->
<h2 class="animate-in">6. Handlers — Axum Request Handlers</h2>

<div class="card animate-in">
<h3>handlers/user.rs — RESTful CRUD Endpoints</h3>
<p>Handlers menerima HTTP request, melakukan validasi input, memanggil service layer, dan mengembalikan response. Axum menggunakan <strong>extractors</strong> untuk parsing otomatis.</p>
<div class="code-block"><span class="kw">use</span> axum::{
    extract::{Json, Path, Query, State},
    http::StatusCode,
    response::IntoResponse,
};
<span class="kw">use</span> uuid::Uuid;
<span class="kw">use</span> validator::Validate;
<span class="kw">use</span> std::sync::Arc;
<span class="kw">use</span> serde::Deserialize;

<span class="kw">use</span> crate::error::AppError;
<span class="kw">use</span> crate::models::user::*;
<span class="kw">use</span> crate::services::user::UserService;

<span class="cm">/// Shared application state</span>
<span class="kw">pub struct</span> <span class="type">AppState</span> {
    <span class="kw">pub</span> user_service: UserService,
}

<span class="cm">/// Pagination query parameters</span>
#[derive(Debug, Deserialize)]
<span class="kw">pub struct</span> <span class="type">Pagination</span> {
    <span class="kw">pub</span> limit:  <span class="type">Option</span>&lt;<span class="type">i64</span>&gt;,
    <span class="kw">pub</span> offset: <span class="type">Option</span>&lt;<span class="type">i64</span>&gt;,
}

<span class="cm">// ====== POST /api/users — Create User ======</span>
<span class="kw">pub async fn</span> <span class="fn">create_user</span>(
    State(state): State&lt;Arc&lt;AppState&gt;&gt;,
    Json(req): Json&lt;CreateUserRequest&gt;,
) -&gt; <span class="type">Result</span>&lt;<span class="kw">impl</span> IntoResponse, AppError&gt; {
    <span class="cm">// Validate input (runs all #[validate] rules)</span>
    req.validate().map_err(|e| {
        AppError::Validation(e.to_string())
    })?;

    <span class="kw">let</span> user = state.user_service
        .create_user(req)
        .<span class="kw">await</span>?;

    Ok((StatusCode::CREATED, Json(user)))
}

<span class="cm">// ====== GET /api/users — List Users ======</span>
<span class="kw">pub async fn</span> <span class="fn">list_users</span>(
    State(state): State&lt;Arc&lt;AppState&gt;&gt;,
    Query(pagination): Query&lt;Pagination&gt;,
) -&gt; <span class="type">Result</span>&lt;Json&lt;<span class="type">Vec</span>&lt;UserResponse&gt;&gt;, AppError&gt; {
    <span class="kw">let</span> limit = pagination.limit.unwrap_or(<span class="num">20</span>).min(<span class="num">100</span>);
    <span class="kw">let</span> offset = pagination.offset.unwrap_or(<span class="num">0</span>);
    <span class="kw">let</span> users = state.user_service
        .list_users(limit, offset)
        .<span class="kw">await</span>?;
    Ok(Json(users))
}

<span class="cm">// ====== GET /api/users/:id — Get User by ID ======</span>
<span class="kw">pub async fn</span> <span class="fn">get_user</span>(
    State(state): State&lt;Arc&lt;AppState&gt;&gt;,
    Path(id): Path&lt;Uuid&gt;,
) -&gt; <span class="type">Result</span>&lt;Json&lt;UserResponse&gt;, AppError&gt; {
    <span class="kw">let</span> user = state.user_service.get_user(id).<span class="kw">await</span>?;
    Ok(Json(user))
}

<span class="cm">// ====== PUT /api/users/:id — Update User ======</span>
<span class="kw">pub async fn</span> <span class="fn">update_user</span>(
    State(state): State&lt;Arc&lt;AppState&gt;&gt;,
    Path(id): Path&lt;Uuid&gt;,
    Json(req): Json&lt;UpdateUserRequest&gt;,
) -&gt; <span class="type">Result</span>&lt;Json&lt;UserResponse&gt;, AppError&gt; {
    req.validate().map_err(|e| {
        AppError::Validation(e.to_string())
    })?;
    <span class="kw">let</span> user = state.user_service
        .update_user(id, req)
        .<span class="kw">await</span>?;
    Ok(Json(user))
}

<span class="cm">// ====== DELETE /api/users/:id — Soft Delete ======</span>
<span class="kw">pub async fn</span> <span class="fn">delete_user</span>(
    State(state): State&lt;Arc&lt;AppState&gt;&gt;,
    Path(id): Path&lt;Uuid&gt;,
) -&gt; <span class="type">Result</span>&lt;StatusCode, AppError&gt; {
    state.user_service.delete_user(id).<span class="kw">await</span>?;
    Ok(StatusCode::NO_CONTENT)
}

<span class="cm">// ====== POST /api/auth/login — Login ======</span>
<span class="kw">pub async fn</span> <span class="fn">login</span>(
    State(state): State&lt;Arc&lt;AppState&gt;&gt;,
    Json(req): Json&lt;LoginRequest&gt;,
) -&gt; <span class="type">Result</span>&lt;Json&lt;LoginResponse&gt;, AppError&gt; {
    <span class="kw">let</span> resp = state.user_service.login(req).<span class="kw">await</span>?;
    Ok(Json(resp))
}</div>
</div>

<div class="card animate-in">
<h3>Axum Extractors — Parsing Otomatis</h3>
<p>Axum menggunakan <strong>extractors</strong> yang memanfaatkan Rust type system untuk parsing request secara otomatis dan type-safe:</p>
<div class="table-wrapper">
<table>
<tr><th>Extractor</th><th>Sumber</th><th>Contoh</th></tr>
<tr><td><code>Json&lt;T&gt;</code></td><td>Request body (JSON)</td><td><code>Json(req): Json&lt;CreateUserRequest&gt;</code></td></tr>
<tr><td><code>Path&lt;T&gt;</code></td><td>URL path parameter</td><td><code>Path(id): Path&lt;Uuid&gt;</code></td></tr>
<tr><td><code>Query&lt;T&gt;</code></td><td>Query string (?key=val)</td><td><code>Query(p): Query&lt;Pagination&gt;</code></td></tr>
<tr><td><code>State&lt;T&gt;</code></td><td>Shared application state</td><td><code>State(s): State&lt;Arc&lt;AppState&gt;&gt;</code></td></tr>
<tr><td><code>Extension&lt;T&gt;</code></td><td>Middleware-injected data</td><td><code>Extension(claims): Extension&lt;Claims&gt;</code></td></tr>
<tr><td><code>HeaderMap</code></td><td>All request headers</td><td><code>headers: HeaderMap</code></td></tr>
</table>
</div>
<div class="info-box">
<strong>Type Safety:</strong> Jika client mengirim body JSON yang tidak sesuai dengan struct <code>CreateUserRequest</code>, Axum otomatis mengembalikan <code>422 Unprocessable Entity</code> — sebelum handler dipanggil. Tidak perlu validasi tipe manual!
</div>
</div>

<!-- ===================== 7. MIDDLEWARE ===================== -->
<h2 class="animate-in">7. Middleware — Auth, CORS, Rate Limiting</h2>

<div class="card animate-in">
<h3>middleware/auth.rs — JWT Authentication Middleware</h3>
<p>Middleware ini mengekstrak dan memvalidasi JWT token dari header <code>Authorization: Bearer &lt;token&gt;</code>, lalu menyisipkan <code>Claims</code> ke request extensions agar handler bisa mengaksesnya.</p>
<div class="code-block"><span class="kw">use</span> axum::{
    extract::Request,
    http::header::AUTHORIZATION,
    middleware::Next,
    response::Response,
};
<span class="kw">use</span> std::sync::Arc;

<span class="kw">use</span> crate::error::AppError;
<span class="kw">use</span> crate::handlers::user::AppState;

<span class="cm">/// JWT Auth middleware — validates Bearer token</span>
<span class="kw">pub async fn</span> <span class="fn">auth_middleware</span>(
    State(state): axum::extract::State&lt;Arc&lt;AppState&gt;&gt;,
    <span class="kw">mut</span> req: Request,
    next: Next,
) -&gt; <span class="type">Result</span>&lt;Response, AppError&gt; {
    <span class="cm">// 1. Extract Authorization header</span>
    <span class="kw">let</span> auth_header = req.headers()
        .get(AUTHORIZATION)
        .and_then(|v| v.to_str().ok())
        .ok_or(AppError::Unauthorized)?;

    <span class="cm">// 2. Strip "Bearer " prefix</span>
    <span class="kw">let</span> token = auth_header
        .strip_prefix(<span class="str">"Bearer "</span>)
        .ok_or(AppError::Unauthorized)?;

    <span class="cm">// 3. Validate token and extract claims</span>
    <span class="kw">let</span> claims = state.user_service
        .validate_jwt(token)?;

    <span class="cm">// 4. Insert claims into request extensions</span>
    req.extensions_mut().insert(claims);

    <span class="cm">// 5. Continue to next handler</span>
    Ok(next.run(req).<span class="kw">await</span>)
}</div>
</div>

<div class="card animate-in">
<h3>middleware/logging.rs — Request Tracing</h3>
<div class="code-block"><span class="kw">use</span> axum::{
    extract::Request,
    middleware::Next,
    response::Response,
};
<span class="kw">use</span> std::time::Instant;

<span class="cm">/// Log request method, path, status, and duration</span>
<span class="kw">pub async fn</span> <span class="fn">logging_middleware</span>(
    req: Request,
    next: Next,
) -&gt; Response {
    <span class="kw">let</span> method = req.method().clone();
    <span class="kw">let</span> path = req.uri().path().to_string();
    <span class="kw">let</span> start = Instant::now();

    <span class="kw">let</span> response = next.run(req).<span class="kw">await</span>;

    <span class="kw">let</span> duration = start.elapsed();
    <span class="kw">let</span> status = response.status();

    tracing::info!(
        <span class="str">"{} {} -&gt; {} ({:?})"</span>,
        method, path, status, duration
    );

    response
}</div>
</div>

<div class="card animate-in">
<h3>Tower Middleware Stack — CORS &amp; Rate Limiting</h3>
<div class="code-block"><span class="kw">use</span> tower_http::cors::{CorsLayer, Any};
<span class="kw">use</span> tower_http::trace::TraceLayer;
<span class="kw">use</span> tower_http::limit::RequestBodyLimitLayer;
<span class="kw">use</span> std::time::Duration;
<span class="kw">use</span> axum::http::{Method, HeaderValue};

<span class="cm">/// Build CORS layer with security best practices</span>
<span class="kw">fn</span> <span class="fn">cors_layer</span>() -&gt; CorsLayer {
    CorsLayer::new()
        <span class="cm">// Allow specific origins in production</span>
        .allow_origin(<span class="str">"https://yourdomain.com"</span>
            .parse::&lt;HeaderValue&gt;()
            .unwrap())
        <span class="cm">// Only allowed HTTP methods</span>
        .allow_methods([
            Method::GET,
            Method::POST,
            Method::PUT,
            Method::DELETE,
        ])
        <span class="cm">// Allow Authorization header</span>
        .allow_headers([
            axum::http::header::CONTENT_TYPE,
            axum::http::header::AUTHORIZATION,
        ])
        <span class="cm">// Preflight cache: 1 hour</span>
        .max_age(Duration::from_secs(<span class="num">3600</span>))
}

<span class="cm">/// Body size limit: 1MB (prevents DoS via large payloads)</span>
<span class="kw">fn</span> <span class="fn">body_limit</span>() -&gt; RequestBodyLimitLayer {
    RequestBodyLimitLayer::new(<span class="num">1024</span> * <span class="num">1024</span>) <span class="cm">// 1 MB</span>
}</div>
</div>

<!-- ===================== 8. MAIN.RS ===================== -->
<h2 class="animate-in">8. main.rs — Server Setup &amp; Graceful Shutdown</h2>

<div class="card animate-in">
<h3>main.rs — Entry Point</h3>
<p>Entry point menginisialisasi konfigurasi, database pool, service layer, router dengan middleware, dan menjalankan server dengan graceful shutdown.</p>
<div class="code-block"><span class="kw">use</span> axum::{
    Router,
    routing::{get, post, put, delete},
    middleware,
};
<span class="kw">use</span> sqlx::postgres::PgPoolOptions;
<span class="kw">use</span> std::sync::Arc;
<span class="kw">use</span> tokio::net::TcpListener;
<span class="kw">use</span> tower_http::trace::TraceLayer;

<span class="kw">mod</span> config;
<span class="kw">mod</span> error;
<span class="kw">mod</span> handlers;
<span class="kw">mod</span> middleware <span class="kw">as</span> mw;
<span class="kw">mod</span> models;
<span class="kw">mod</span> repositories;
<span class="kw">mod</span> services;

<span class="kw">use</span> handlers::user::AppState;

#[tokio::main]
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="cm">// 1. Initialize tracing (structured logging)</span>
    tracing_subscriber::fmt()
        .with_env_filter(<span class="str">"myapp=debug,tower_http=debug"</span>)
        .init();

    <span class="cm">// 2. Load configuration from env</span>
    <span class="kw">let</span> config = Arc::new(config::Config::from_env());

    <span class="cm">// 3. Create database connection pool</span>
    <span class="kw">let</span> pool = PgPoolOptions::new()
        .max_connections(<span class="num">20</span>)           <span class="cm">// Max 20 connections</span>
        .min_connections(<span class="num">5</span>)            <span class="cm">// Keep 5 alive</span>
        .acquire_timeout(
            std::time::Duration::from_secs(<span class="num">5</span>)
        )
        .connect(&amp;config.database_url)
        .<span class="kw">await</span>
        .expect(<span class="str">"Failed to connect to database"</span>);

    <span class="cm">// 4. Run migrations</span>
    sqlx::migrate!(<span class="str">"./migrations"</span>)
        .run(&amp;pool)
        .<span class="kw">await</span>
        .expect(<span class="str">"Failed to run migrations"</span>);

    <span class="cm">// 5. Build application layers</span>
    <span class="kw">let</span> repo = repositories::user::UserRepository::new(pool.clone());
    <span class="kw">let</span> service = services::user::UserService::new(
        repo, config.clone()
    );

    <span class="kw">let</span> state = Arc::new(AppState {
        user_service: service,
    });

    <span class="cm">// 6. Build router with middleware</span>
    <span class="kw">let</span> app = Router::new()
        <span class="cm">// Public routes (no auth required)</span>
        .route(<span class="str">"/api/auth/login"</span>, post(handlers::user::login))
        .route(<span class="str">"/api/users"</span>, post(handlers::user::create_user))
        <span class="cm">// Protected routes (auth required)</span>
        .route(<span class="str">"/api/users"</span>, get(handlers::user::list_users))
        .route(<span class="str">"/api/users/:id"</span>,
            get(handlers::user::get_user)
            .put(handlers::user::update_user)
            .delete(handlers::user::delete_user)
        )
        .route_layer(middleware::from_fn_with_state(
            state.clone(),
            mw::auth::auth_middleware,
        ))
        <span class="cm">// Global middleware (applied to all routes)</span>
        .layer(TraceLayer::new_for_http())
        .layer(cors_layer())
        .layer(body_limit())
        .layer(middleware::from_fn(mw::logging::logging_middleware))
        .with_state(state);

    <span class="cm">// 7. Start server with graceful shutdown</span>
    <span class="kw">let</span> addr = format!(
        <span class="str">"{}:{}"</span>, config.server_host, config.server_port
    );
    tracing::info!(<span class="str">"Server starting on {}"</span>, addr);

    <span class="kw">let</span> listener = TcpListener::bind(&amp;addr)
        .<span class="kw">await</span>
        .expect(<span class="str">"Failed to bind address"</span>);

    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .<span class="kw">await</span>
        .expect(<span class="str">"Server error"</span>);
}

<span class="cm">/// Graceful shutdown — wait for SIGINT or SIGTERM</span>
<span class="kw">async fn</span> <span class="fn">shutdown_signal</span>() {
    <span class="kw">let</span> ctrl_c = <span class="kw">async</span> {
        tokio::signal::ctrl_c()
            .<span class="kw">await</span>
            .expect(<span class="str">"Failed to install Ctrl+C handler"</span>);
    };

    #[cfg(unix)]
    <span class="kw">let</span> terminate = <span class="kw">async</span> {
        tokio::signal::unix::signal(
            tokio::signal::unix::SignalKind::terminate()
        )
        .expect(<span class="str">"Failed to install SIGTERM handler"</span>)
        .recv()
        .<span class="kw">await</span>;
    };

    tokio::select! {
        _ = ctrl_c =&gt; {},
        _ = terminate =&gt; {},
    }

    tracing::info!(<span class="str">"Shutdown signal received, finishing requests..."</span>);
}</div>
</div>

<div class="card animate-in">
<h3>Router Architecture</h3>
<div class="info-box">
<strong>Middleware Order Matters!</strong> Middleware dalam Axum diterapkan dari bawah ke atas (LIFO). Pada contoh di atas:
<ol>
<li><strong>Logging</strong> (paling luar) — mencatat semua request</li>
<li><strong>Body Limit</strong> — menolak payload &gt; 1MB</li>
<li><strong>CORS</strong> — menangani preflight dan origin check</li>
<li><strong>Tracing</strong> — structured logging dari tower-http</li>
<li><strong>Auth</strong> (paling dalam, hanya di protected routes) — validasi JWT</li>
</ol>
</div>
</div>

<!-- ===================== 9. gRPC ===================== -->
<h2 class="animate-in">9. gRPC CRUD dengan Tonic</h2>

<div class="card animate-in">
<h3>Apa Itu gRPC?</h3>
<p><strong>gRPC</strong> (Google Remote Procedure Call) adalah framework RPC modern yang menggunakan <strong>Protocol Buffers</strong> (protobuf) untuk serialisasi dan <strong>HTTP/2</strong> sebagai transport. Dibanding REST + JSON, gRPC menawarkan:</p>
<div class="card-grid">
<div class="card">
<h4 style="color:var(--green)">Keunggulan gRPC</h4>
<ul>
<li><strong>Performa tinggi</strong> — protobuf binary jauh lebih kecil dan cepat dari JSON</li>
<li><strong>Strong typing</strong> — schema didefinisikan di .proto file, code generation otomatis</li>
<li><strong>HTTP/2</strong> — multiplexing, server push, header compression</li>
<li><strong>Streaming</strong> — unary, server-stream, client-stream, bidirectional</li>
<li><strong>Cross-language</strong> — satu .proto file generate code untuk Go, Rust, Java, Python, dll</li>
</ul>
</div>
<div class="card">
<h4 style="color:var(--yellow)">Kapan Gunakan gRPC?</h4>
<ul>
<li><strong>Microservices</strong> — internal service-to-service communication</li>
<li><strong>Latency-sensitive</strong> — gaming, real-time data</li>
<li><strong>Polyglot</strong> — services dalam bahasa berbeda</li>
<li><strong>Streaming</strong> — chat, live feed, IoT telemetry</li>
<li><strong>Mobile backend</strong> — bandwidth-efficient</li>
</ul>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Proto File — proto/user.proto</h3>
<p>Definisi service dan message di Protocol Buffers:</p>
<div class="code-block"><span class="cm">// proto/user.proto</span>
<span class="kw">syntax</span> = <span class="str">"proto3"</span>;
<span class="kw">package</span> user;

<span class="cm">// Service definition — defines all RPC methods</span>
<span class="kw">service</span> <span class="type">UserService</span> {
    <span class="cm">// Unary RPCs (like REST endpoints)</span>
    <span class="kw">rpc</span> <span class="fn">CreateUser</span> (CreateUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">GetUser</span>    (GetUserRequest)    <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">UpdateUser</span> (UpdateUserRequest) <span class="kw">returns</span> (UserResponse);
    <span class="kw">rpc</span> <span class="fn">DeleteUser</span> (DeleteUserRequest) <span class="kw">returns</span> (Empty);

    <span class="cm">// Server streaming — returns multiple users</span>
    <span class="kw">rpc</span> <span class="fn">ListUsers</span>  (ListUsersRequest)  <span class="kw">returns</span> (<span class="kw">stream</span> UserResponse);
}

<span class="cm">// Messages — strongly typed data structures</span>
<span class="kw">message</span> <span class="type">CreateUserRequest</span> {
    <span class="type">string</span> username  = <span class="num">1</span>;
    <span class="type">string</span> email     = <span class="num">2</span>;
    <span class="type">string</span> password  = <span class="num">3</span>;
    <span class="type">string</span> full_name = <span class="num">4</span>;
}

<span class="kw">message</span> <span class="type">GetUserRequest</span> {
    <span class="type">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> <span class="type">UpdateUserRequest</span> {
    <span class="type">string</span> id        = <span class="num">1</span>;
    <span class="type">string</span> full_name = <span class="num">2</span>;
    <span class="type">string</span> email     = <span class="num">3</span>;
}

<span class="kw">message</span> <span class="type">DeleteUserRequest</span> {
    <span class="type">string</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> <span class="type">ListUsersRequest</span> {
    <span class="type">int32</span> limit  = <span class="num">1</span>;
    <span class="type">int32</span> offset = <span class="num">2</span>;
}

<span class="kw">message</span> <span class="type">UserResponse</span> {
    <span class="type">string</span> id         = <span class="num">1</span>;
    <span class="type">string</span> username   = <span class="num">2</span>;
    <span class="type">string</span> email      = <span class="num">3</span>;
    <span class="type">string</span> full_name  = <span class="num">4</span>;
    <span class="type">bool</span>   is_active  = <span class="num">5</span>;
    <span class="type">string</span> created_at = <span class="num">6</span>;
}

<span class="kw">message</span> <span class="type">Empty</span> {}</div>
</div>

<div class="card animate-in">
<h3>build.rs — Code Generation dengan tonic-build</h3>
<p>tonic-build membaca file .proto dan menghasilkan Rust code secara otomatis saat <code>cargo build</code>:</p>
<div class="code-block"><span class="cm">// build.rs — dieksekusi SEBELUM kompilasi</span>
<span class="kw">fn</span> <span class="fn">main</span>() -&gt; <span class="type">Result</span>&lt;(), Box&lt;<span class="kw">dyn</span> std::error::Error&gt;&gt; {
    <span class="cm">// Compile .proto file menjadi Rust types &amp; service traits</span>
    tonic_build::compile_protos(<span class="str">"src/proto/user.proto"</span>)?;

    <span class="cm">// Ini menghasilkan code yang bisa di-include! di main.rs:</span>
    <span class="cm">// - user::user_service_server::UserService trait</span>
    <span class="cm">// - user::user_service_server::UserServiceServer struct</span>
    <span class="cm">// - user::user_service_client::UserServiceClient struct</span>
    <span class="cm">// - Semua message types (CreateUserRequest, UserResponse, etc.)</span>

    Ok(())
}</div>
</div>

<div class="card animate-in">
<h3>gRPC Server Implementation</h3>
<p>Implementasi gRPC service menggunakan trait yang di-generate oleh tonic-build:</p>
<div class="code-block"><span class="kw">use</span> tonic::{Request, Response, Status};
<span class="kw">use</span> tokio_stream::wrappers::ReceiverStream;
<span class="kw">use</span> std::sync::Arc;

<span class="cm">// Import generated code from build.rs</span>
<span class="kw">pub mod</span> user_proto {
    tonic::include_proto!(<span class="str">"user"</span>);
}

<span class="kw">use</span> user_proto::user_service_server::UserService;
<span class="kw">use</span> user_proto::*;

<span class="cm">/// gRPC service implementation</span>
<span class="kw">pub struct</span> <span class="type">UserGrpcService</span> {
    user_service: Arc&lt;crate::services::user::UserService&gt;,
}

#[tonic::async_trait]
<span class="kw">impl</span> UserService <span class="kw">for</span> <span class="type">UserGrpcService</span> {

    <span class="cm">/// Create user via gRPC</span>
    <span class="kw">async fn</span> <span class="fn">create_user</span>(
        &amp;self,
        request: Request&lt;CreateUserRequest&gt;,
    ) -&gt; <span class="type">Result</span>&lt;Response&lt;UserResponse&gt;, Status&gt; {
        <span class="kw">let</span> req = request.into_inner();

        <span class="cm">// Convert protobuf request to domain model</span>
        <span class="kw">let</span> create_req = crate::models::user::CreateUserRequest {
            username:  req.username,
            email:     req.email,
            password:  req.password,
            full_name: req.full_name,
        };

        <span class="kw">let</span> user = self.user_service
            .create_user(create_req)
            .<span class="kw">await</span>
            .map_err(|e| Status::internal(e.to_string()))?;

        Ok(Response::new(UserResponse {
            id:         user.id.to_string(),
            username:   user.username,
            email:      user.email,
            full_name:  user.full_name,
            is_active:  user.is_active,
            created_at: user.created_at.to_rfc3339(),
        }))
    }

    <span class="cm">/// Get single user via gRPC</span>
    <span class="kw">async fn</span> <span class="fn">get_user</span>(
        &amp;self,
        request: Request&lt;GetUserRequest&gt;,
    ) -&gt; <span class="type">Result</span>&lt;Response&lt;UserResponse&gt;, Status&gt; {
        <span class="kw">let</span> id = uuid::Uuid::parse_str(&amp;request.into_inner().id)
            .map_err(|_| Status::invalid_argument(<span class="str">"Invalid UUID"</span>))?;

        <span class="kw">let</span> user = self.user_service
            .get_user(id)
            .<span class="kw">await</span>
            .map_err(|e| Status::not_found(e.to_string()))?;

        Ok(Response::new(UserResponse {
            id:         user.id.to_string(),
            username:   user.username,
            email:      user.email,
            full_name:  user.full_name,
            is_active:  user.is_active,
            created_at: user.created_at.to_rfc3339(),
        }))
    }

    <span class="cm">/// Update user via gRPC</span>
    <span class="kw">async fn</span> <span class="fn">update_user</span>(
        &amp;self,
        request: Request&lt;UpdateUserRequest&gt;,
    ) -&gt; <span class="type">Result</span>&lt;Response&lt;UserResponse&gt;, Status&gt; {
        <span class="kw">let</span> req = request.into_inner();
        <span class="kw">let</span> id = uuid::Uuid::parse_str(&amp;req.id)
            .map_err(|_| Status::invalid_argument(<span class="str">"Invalid UUID"</span>))?;

        <span class="kw">let</span> update = crate::models::user::UpdateUserRequest {
            full_name: <span class="kw">if</span> req.full_name.is_empty() {
                None
            } <span class="kw">else</span> {
                Some(req.full_name)
            },
            email: <span class="kw">if</span> req.email.is_empty() {
                None
            } <span class="kw">else</span> {
                Some(req.email)
            },
        };

        <span class="kw">let</span> user = self.user_service
            .update_user(id, update)
            .<span class="kw">await</span>
            .map_err(|e| Status::internal(e.to_string()))?;

        Ok(Response::new(UserResponse {
            id:         user.id.to_string(),
            username:   user.username,
            email:      user.email,
            full_name:  user.full_name,
            is_active:  user.is_active,
            created_at: user.created_at.to_rfc3339(),
        }))
    }

    <span class="cm">/// Delete user via gRPC</span>
    <span class="kw">async fn</span> <span class="fn">delete_user</span>(
        &amp;self,
        request: Request&lt;DeleteUserRequest&gt;,
    ) -&gt; <span class="type">Result</span>&lt;Response&lt;Empty&gt;, Status&gt; {
        <span class="kw">let</span> id = uuid::Uuid::parse_str(
            &amp;request.into_inner().id
        )
        .map_err(|_| Status::invalid_argument(<span class="str">"Invalid UUID"</span>))?;

        self.user_service
            .delete_user(id)
            .<span class="kw">await</span>
            .map_err(|e| Status::internal(e.to_string()))?;

        Ok(Response::new(Empty {}))
    }

    <span class="cm">/// Server streaming — list users one by one</span>
    <span class="kw">type</span> ListUsersStream = ReceiverStream&lt;
        <span class="type">Result</span>&lt;UserResponse, Status&gt;
    &gt;;

    <span class="kw">async fn</span> <span class="fn">list_users</span>(
        &amp;self,
        request: Request&lt;ListUsersRequest&gt;,
    ) -&gt; <span class="type">Result</span>&lt;Response&lt;<span class="type">Self</span>::ListUsersStream&gt;, Status&gt; {
        <span class="kw">let</span> req = request.into_inner();
        <span class="kw">let</span> limit  = req.limit  <span class="kw">as</span> i64;
        <span class="kw">let</span> offset = req.offset <span class="kw">as</span> i64;

        <span class="kw">let</span> users = self.user_service
            .list_users(limit, offset)
            .<span class="kw">await</span>
            .map_err(|e| Status::internal(e.to_string()))?;

        <span class="kw">let</span> (tx, rx) = tokio::sync::mpsc::channel(<span class="num">128</span>);

        tokio::spawn(<span class="kw">async move</span> {
            <span class="kw">for</span> user <span class="kw">in</span> users {
                <span class="kw">let</span> resp = UserResponse {
                    id:         user.id.to_string(),
                    username:   user.username,
                    email:      user.email,
                    full_name:  user.full_name,
                    is_active:  user.is_active,
                    created_at: user.created_at.to_rfc3339(),
                };
                <span class="kw">if</span> tx.send(Ok(resp)).<span class="kw">await</span>.is_err() {
                    <span class="kw">break</span>; <span class="cm">// Client disconnected</span>
                }
            }
        });

        Ok(Response::new(ReceiverStream::new(rx)))
    }
}</div>
</div>

<div class="card animate-in">
<h3>gRPC Client Example</h3>
<div class="code-block"><span class="kw">use</span> user_proto::user_service_client::UserServiceClient;
<span class="kw">use</span> user_proto::CreateUserRequest;

#[tokio::main]
<span class="kw">async fn</span> <span class="fn">main</span>() -&gt; <span class="type">Result</span>&lt;(), Box&lt;<span class="kw">dyn</span> std::error::Error&gt;&gt; {
    <span class="cm">// 1. Connect to gRPC server</span>
    <span class="kw">let mut</span> client = UserServiceClient::connect(
        <span class="str">"http://127.0.0.1:50051"</span>
    ).<span class="kw">await</span>?;

    <span class="cm">// 2. Create a user</span>
    <span class="kw">let</span> request = tonic::Request::new(CreateUserRequest {
        username:  <span class="str">"alice"</span>.into(),
        email:     <span class="str">"alice@example.com"</span>.into(),
        password:  <span class="str">"secure_p@ssw0rd"</span>.into(),
        full_name: <span class="str">"Alice Wonderland"</span>.into(),
    });

    <span class="kw">let</span> response = client.create_user(request).<span class="kw">await</span>?;
    println!(<span class="str">"Created: {:?}"</span>, response.into_inner());

    <span class="cm">// 3. List users (server streaming)</span>
    <span class="kw">let</span> request = tonic::Request::new(
        user_proto::ListUsersRequest {
            limit: <span class="num">10</span>,
            offset: <span class="num">0</span>,
        }
    );

    <span class="kw">let mut</span> stream = client
        .list_users(request)
        .<span class="kw">await</span>?
        .into_inner();

    <span class="kw">while let</span> Some(user) = stream.message().<span class="kw">await</span>? {
        println!(<span class="str">"User: {} ({})"</span>, user.username, user.email);
    }

    Ok(())
}</div>
</div>

<div class="card animate-in">
<h3>gRPC Interceptor untuk Auth</h3>
<p>Interceptor di Tonic mirip dengan middleware di Axum — ia meng-intercept request sebelum sampai ke handler:</p>
<div class="code-block"><span class="kw">use</span> tonic::{Request, Status};

<span class="cm">/// Auth interceptor — validates JWT dari metadata</span>
<span class="kw">fn</span> <span class="fn">auth_interceptor</span>(
    <span class="kw">mut</span> req: Request&lt;()&gt;,
) -&gt; <span class="type">Result</span>&lt;Request&lt;()&gt;, Status&gt; {
    <span class="cm">// 1. Get token from gRPC metadata</span>
    <span class="kw">let</span> token = req.metadata()
        .get(<span class="str">"authorization"</span>)
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.strip_prefix(<span class="str">"Bearer "</span>))
        .ok_or(Status::unauthenticated(<span class="str">"Missing token"</span>))?;

    <span class="cm">// 2. Validate JWT (simplified)</span>
    <span class="kw">let</span> claims = validate_jwt(token)
        .map_err(|_| Status::unauthenticated(<span class="str">"Invalid token"</span>))?;

    <span class="cm">// 3. Add user_id to request extensions</span>
    req.extensions_mut().insert(claims.sub);

    Ok(req)
}

<span class="cm">// Gunakan interceptor saat membuat server:</span>
<span class="cm">// let svc = UserServiceServer::with_interceptor(</span>
<span class="cm">//     user_grpc_service,</span>
<span class="cm">//     auth_interceptor,</span>
<span class="cm">// );</span></div>
</div>

<div class="card animate-in">
<h3>REST vs gRPC — Perbandingan</h3>
<div class="table-wrapper">
<table>
<tr><th>Aspek</th><th>REST (Axum + JSON)</th><th>gRPC (Tonic + Protobuf)</th></tr>
<tr><td>Format data</td><td>JSON (text)</td><td>Protobuf (binary, ~10x lebih kecil)</td></tr>
<tr><td>Transport</td><td>HTTP/1.1 atau HTTP/2</td><td>HTTP/2 (wajib)</td></tr>
<tr><td>Schema</td><td>Opsional (OpenAPI)</td><td>Wajib (.proto file)</td></tr>
<tr><td>Code generation</td><td>Opsional</td><td>Otomatis (tonic-build)</td></tr>
<tr><td>Streaming</td><td>WebSocket (terpisah)</td><td>Built-in (4 mode)</td></tr>
<tr><td>Browser support</td><td>Native</td><td>Butuh grpc-web proxy</td></tr>
<tr><td>Tooling debug</td><td>curl, Postman</td><td>grpcurl, Bloom RPC</td></tr>
<tr><td>Use case</td><td>Public API, web apps</td><td>Internal services, microservices</td></tr>
</table>
</div>
</div>

<!-- ===================== 10. SECURITY ===================== -->
<h2 class="animate-in">10. Security Best Practices (Rust-Specific)</h2>

<div class="card animate-in">
<h3>Keunggulan Keamanan Rust</h3>
<p>Rust memberikan keamanan yang tidak dimiliki bahasa lain pada level <strong>compiler</strong>. Banyak kategori bug yang lazim di C/C++/Java/Python secara <em>struktural mustahil</em> di safe Rust.</p>
<div class="card-grid">
<div class="card">
<h4 style="color:var(--green)">Dijamin oleh Compiler</h4>
<ul>
<li><strong>No null pointer dereference</strong> — Option&lt;T&gt; menggantikan null</li>
<li><strong>No buffer overflow</strong> — bounds checking otomatis</li>
<li><strong>No use-after-free</strong> — ownership system mencegahnya</li>
<li><strong>No data races</strong> — Send + Sync traits memastikan thread safety</li>
<li><strong>No SQL injection</strong> (via sqlx) — parameterized queries + compile-time check</li>
</ul>
</div>
<div class="card">
<h4 style="color:var(--yellow)">Perlu Implementasi Manual</h4>
<ul>
<li><strong>Password hashing</strong> — gunakan argon2 (jangan bcrypt/MD5)</li>
<li><strong>JWT validation</strong> — periksa expiry, issuer, audience</li>
<li><strong>Input validation</strong> — validator crate dengan derive macro</li>
<li><strong>CORS policy</strong> — jangan gunakan allow_any_origin di production</li>
<li><strong>Rate limiting</strong> — tower-http atau custom middleware</li>
<li><strong>TLS</strong> — gunakan rustls (pure Rust, no OpenSSL dependency)</li>
</ul>
</div>
</div>
</div>

<div class="card animate-in">
<h3>SQL Injection — Mustahil dengan sqlx</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="sql-safe">Rust (Aman)</button>
<button class="tab-btn" data-tab="sql-unsafe">Python (Rawan)</button>
</div>
<div class="tab-content active" id="sql-safe">
<div class="code-block"><span class="cm">// Rust + sqlx: AMAN — parameterized query</span>
<span class="kw">let</span> user = sqlx::query_as::&lt;_, User&gt;(
    <span class="str">"SELECT * FROM users WHERE username = $1"</span>
)
.bind(&amp;input_username) <span class="cm">// &lt;-- di-escape oleh driver</span>
.fetch_one(&amp;pool)
.<span class="kw">await</span>?;

<span class="cm">// Bahkan jika input_username = "'; DROP TABLE users; --"</span>
<span class="cm">// sqlx mengirimnya sebagai STRING PARAMETER, bukan SQL.</span>
<span class="cm">// Database melihat: WHERE username = $1</span>
<span class="cm">// Dengan $1 = "'; DROP TABLE users; --" (string biasa)</span></div>
</div>
<div class="tab-content" id="sql-unsafe">
<div class="code-block"><span class="cm"># Python tanpa parameterized query: BAHAYA!</span>
username = request.form[<span class="str">"username"</span>]

<span class="cm"># JANGAN PERNAH lakukan ini:</span>
query = f<span class="str">"SELECT * FROM users WHERE username = '{username}'"</span>
<span class="cm"># Jika username = "'; DROP TABLE users; --"</span>
<span class="cm"># Query menjadi:</span>
<span class="cm"># SELECT * FROM users WHERE username = ''; DROP TABLE users; --'</span>
<span class="cm"># TABEL TERHAPUS!</span>

<span class="cm"># Yang benar (parameterized):</span>
cursor.execute(
    <span class="str">"SELECT * FROM users WHERE username = %s"</span>,
    (username,)
)</div>
</div>
</div>

<div class="card animate-in">
<h3>Password Hashing — Argon2id Implementation</h3>
<div class="code-block"><span class="kw">use</span> argon2::{
    password_hash::{
        PasswordHash, PasswordHasher,
        PasswordVerifier, SaltString,
    },
    Argon2, Algorithm, Params, Version,
};

<span class="cm">/// Production Argon2id configuration</span>
<span class="cm">/// OWASP recommendation: m=19456 (19 MiB), t=2, p=1</span>
<span class="kw">fn</span> <span class="fn">argon2_config</span>() -&gt; Argon2&lt;<span class="str">'static</span>&gt; {
    <span class="kw">let</span> params = Params::new(
        <span class="num">19456</span>,  <span class="cm">// memory cost: 19 MiB</span>
        <span class="num">2</span>,      <span class="cm">// time cost: 2 iterations</span>
        <span class="num">1</span>,      <span class="cm">// parallelism: 1 thread</span>
        None,   <span class="cm">// output length: default (32 bytes)</span>
    ).expect(<span class="str">"Invalid Argon2 params"</span>);

    Argon2::new(Algorithm::Argon2id, Version::V0x13, params)
}

<span class="cm">/// Hash password — returns PHC string format</span>
<span class="cm">/// Example: $argon2id$v=19$m=19456,t=2,p=1$...</span>
<span class="kw">fn</span> <span class="fn">hash_password</span>(password: &amp;[<span class="type">u8</span>]) -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, AppError&gt; {
    <span class="kw">let</span> salt = SaltString::generate(&amp;<span class="kw">mut</span> rand::thread_rng());
    <span class="kw">let</span> argon2 = argon2_config();
    <span class="kw">let</span> hash = argon2
        .hash_password(password, &amp;salt)
        .map_err(|e| AppError::Internal(e.to_string()))?;
    Ok(hash.to_string())
}

<span class="cm">/// Verify password — constant-time comparison</span>
<span class="cm">/// Prevents timing attacks (attacker cannot deduce</span>
<span class="cm">/// which character is wrong from response time)</span>
<span class="kw">fn</span> <span class="fn">verify_password</span>(
    password: &amp;[<span class="type">u8</span>],
    hash_str: &amp;<span class="type">str</span>,
) -&gt; <span class="type">Result</span>&lt;(), AppError&gt; {
    <span class="kw">let</span> hash = PasswordHash::new(hash_str)
        .map_err(|_| AppError::Internal(<span class="str">"Invalid hash format"</span>.into()))?;
    argon2_config()
        .verify_password(password, &amp;hash)
        .map_err(|_| AppError::Unauthorized)
}</div>
</div>

<div class="card animate-in">
<h3>JWT Security Checklist</h3>
<div class="code-block"><span class="kw">use</span> jsonwebtoken::{
    encode, decode, Header, Algorithm,
    Validation, EncodingKey, DecodingKey,
};

<span class="cm">/// Secure JWT configuration</span>
<span class="kw">fn</span> <span class="fn">jwt_validation</span>() -&gt; Validation {
    <span class="kw">let mut</span> v = Validation::new(Algorithm::HS256);

    <span class="cm">// WAJIB: periksa expiry</span>
    v.validate_exp = <span class="num">true</span>;

    <span class="cm">// Leeway 60 detik untuk clock skew</span>
    v.leeway = <span class="num">60</span>;

    <span class="cm">// Opsional: validasi issuer dan audience</span>
    v.set_issuer(&amp;[<span class="str">"myapp"</span>]);
    v.set_audience(&amp;[<span class="str">"myapp-api"</span>]);

    v
}

<span class="cm">/// JWT security best practices:</span>
<span class="cm">/// 1. Gunakan secret minimal 256-bit (32 bytes)</span>
<span class="cm">/// 2. Set expiry pendek (15min - 24h)</span>
<span class="cm">/// 3. Jangan simpan data sensitif di payload</span>
<span class="cm">/// 4. Gunakan HTTPS only (token bisa di-intercept via HTTP)</span>
<span class="cm">/// 5. Implementasi token refresh mechanism</span>
<span class="cm">/// 6. Blacklist token saat logout (jika perlu)</span></div>
</div>

<div class="card animate-in">
<h3>TLS dengan rustls</h3>
<div class="code-block"><span class="kw">use</span> axum_server::tls_rustls::RustlsConfig;

<span class="cm">/// Setup TLS server dengan rustls (pure Rust, no OpenSSL)</span>
<span class="kw">async fn</span> <span class="fn">start_tls_server</span>(app: Router) {
    <span class="kw">let</span> tls_config = RustlsConfig::from_pem_file(
        <span class="str">"certs/server.crt"</span>,
        <span class="str">"certs/server.key"</span>,
    )
    .<span class="kw">await</span>
    .expect(<span class="str">"Failed to load TLS config"</span>);

    <span class="kw">let</span> addr = std::net::SocketAddr::from(
        ([<span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span>], <span class="num">443</span>)
    );

    tracing::info!(<span class="str">"HTTPS server on {}"</span>, addr);

    axum_server::bind_rustls(addr, tls_config)
        .serve(app.into_make_service())
        .<span class="kw">await</span>
        .expect(<span class="str">"TLS server failed"</span>);
}

<span class="cm">/// Keuntungan rustls vs OpenSSL:</span>
<span class="cm">/// - Pure Rust: no C dependency, no CVE dari C code</span>
<span class="cm">/// - Memory safe: no buffer overflow di TLS stack</span>
<span class="cm">/// - Audited: audit keamanan oleh Cure53</span>
<span class="cm">/// - Smaller binary: hanya TLS 1.2 &amp; 1.3 (no legacy)</span></div>
</div>

<div class="card animate-in">
<h3>Security Checklist — No Unsafe!</h3>
<div class="info-box">
<strong>Aturan #1:</strong> Jangan gunakan <code>unsafe</code> di application code. Semua crate yang kita gunakan (axum, sqlx, tonic, argon2, jsonwebtoken) adalah <strong>100% safe Rust</strong>. <code>unsafe</code> hanya diperlukan di level library/runtime untuk FFI atau optimasi low-level — dan bahkan di sana, ia di-audit dan di-encapsulate di balik API yang safe.
</div>
<div class="table-wrapper">
<table>
<tr><th>Ancaman</th><th>Mitigasi</th><th>Implementasi</th></tr>
<tr><td>SQL Injection</td><td>Parameterized queries</td><td>sqlx .bind() + compile-time check</td></tr>
<tr><td>Password cracking</td><td>Argon2id hashing</td><td>argon2 crate, OWASP params</td></tr>
<tr><td>Token theft</td><td>JWT + HTTPS + short expiry</td><td>jsonwebtoken + rustls</td></tr>
<tr><td>XSS via API</td><td>JSON-only responses</td><td>Axum Json() serializer</td></tr>
<tr><td>CSRF</td><td>CORS + SameSite cookies</td><td>tower-http CorsLayer</td></tr>
<tr><td>DoS (large payload)</td><td>Body size limit</td><td>RequestBodyLimitLayer (1MB)</td></tr>
<tr><td>Brute force</td><td>Rate limiting</td><td>tower-http atau custom middleware</td></tr>
<tr><td>Memory bugs</td><td>Ownership system</td><td>Rust compiler (borrow checker)</td></tr>
<tr><td>Data races</td><td>Send + Sync</td><td>Rust compiler (concurrency safety)</td></tr>
<tr><td>Panic in production</td><td>Result&lt;T, E&gt; everywhere</td><td>No .unwrap() in handlers</td></tr>
</table>
</div>
</div>

<!-- ===================== 11. ASYNC & CONCURRENCY ===================== -->
<h2 class="animate-in">11. Async Runtime &amp; Concurrency</h2>

<div class="card animate-in">
<h3>Tokio Runtime</h3>
<p>Rust async runtime tidak built-in — kita memilih <strong>Tokio</strong>, runtime paling populer yang digunakan oleh Axum, Tonic, sqlx, dan hampir semua crate async di ekosistem Rust.</p>
<div class="code-block"><span class="cm">// #[tokio::main] adalah macro yang membungkus</span>
<span class="cm">// async main dalam Tokio runtime:</span>

<span class="cm">// Macro ini:</span>
#[tokio::main]
<span class="kw">async fn</span> <span class="fn">main</span>() {
    server_start().<span class="kw">await</span>;
}

<span class="cm">// Setara dengan:</span>
<span class="kw">fn</span> <span class="fn">main</span>() {
    tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .build()
        .expect(<span class="str">"Failed building Tokio runtime"</span>)
        .block_on(<span class="kw">async</span> {
            server_start().<span class="kw">await</span>;
        });
}

<span class="cm">// Tokio menggunakan work-stealing scheduler:</span>
<span class="cm">// - N worker threads (default = jumlah CPU core)</span>
<span class="cm">// - Setiap thread punya local queue + shared global queue</span>
<span class="cm">// - Idle thread "mencuri" task dari thread lain</span>
<span class="cm">// - Sangat efisien untuk I/O-bound workload (web server)</span></div>
</div>

<div class="card animate-in">
<h3>Connection Pooling — sqlx::PgPool</h3>
<div class="code-block"><span class="cm">// Connection pool menghindari overhead membuat koneksi</span>
<span class="cm">// baru untuk setiap request (TCP handshake + auth = ~5ms)</span>

<span class="kw">let</span> pool = PgPoolOptions::new()
    <span class="cm">// Maximum connections in pool</span>
    .max_connections(<span class="num">20</span>)

    <span class="cm">// Minimum idle connections (pre-warmed)</span>
    .min_connections(<span class="num">5</span>)

    <span class="cm">// Max time to wait for available connection</span>
    .acquire_timeout(Duration::from_secs(<span class="num">5</span>))

    <span class="cm">// Max idle time before connection is closed</span>
    .idle_timeout(Duration::from_secs(<span class="num">600</span>))

    <span class="cm">// Max lifetime of any connection</span>
    .max_lifetime(Duration::from_secs(<span class="num">1800</span>))

    <span class="cm">// Test connection health before use</span>
    .test_before_acquire(<span class="num">true</span>)

    .connect(&amp;database_url)
    .<span class="kw">await</span>?;

<span class="cm">// PgPool implements Clone — cloning is cheap (Arc internally)</span>
<span class="cm">// Share pool across handlers via AppState</span></div>
</div>

<div class="card animate-in">
<h3>Graceful Shutdown</h3>
<p>Server production harus mendukung <strong>graceful shutdown</strong> — menyelesaikan request yang sedang berjalan sebelum berhenti. Ini penting untuk:</p>
<ul>
<li><strong>Kubernetes rolling updates</strong> — Pod menerima SIGTERM, harus selesaikan request dalam grace period</li>
<li><strong>Database transactions</strong> — Transaction yang sedang berjalan tidak boleh terputus</li>
<li><strong>Connection cleanup</strong> — Tutup pool connections dengan benar</li>
</ul>
<div class="code-block"><span class="cm">/// Graceful shutdown with multiple signal support</span>
<span class="kw">async fn</span> <span class="fn">shutdown_signal</span>() {
    <span class="kw">let</span> ctrl_c = <span class="kw">async</span> {
        tokio::signal::ctrl_c().<span class="kw">await</span>
            .expect(<span class="str">"Ctrl+C handler failed"</span>);
    };

    #[cfg(unix)]
    <span class="kw">let</span> sigterm = <span class="kw">async</span> {
        tokio::signal::unix::signal(
            tokio::signal::unix::SignalKind::terminate(),
        )
        .expect(<span class="str">"SIGTERM handler failed"</span>)
        .recv()
        .<span class="kw">await</span>;
    };

    <span class="cm">// Wait for either signal</span>
    tokio::select! {
        _ = ctrl_c =&gt; tracing::info!(<span class="str">"Ctrl+C received"</span>),
        _ = sigterm =&gt; tracing::info!(<span class="str">"SIGTERM received"</span>),
    }

    tracing::info!(<span class="str">"Shutting down gracefully..."</span>);
    <span class="cm">// axum::serve will finish in-flight requests</span>
    <span class="cm">// then return from .await</span>
}

<span class="cm">// Structured concurrency: run REST &amp; gRPC servers together</span>
<span class="kw">async fn</span> <span class="fn">run_servers</span>() {
    <span class="kw">let</span> rest = tokio::spawn(start_rest_server());
    <span class="kw">let</span> grpc = tokio::spawn(start_grpc_server());

    <span class="cm">// tokio::select! cancels the other when one completes</span>
    tokio::select! {
        r = rest =&gt; {
            <span class="kw">if let</span> Err(e) = r {
                tracing::error!(<span class="str">"REST server error: {}"</span>, e);
            }
        }
        r = grpc =&gt; {
            <span class="kw">if let</span> Err(e) = r {
                tracing::error!(<span class="str">"gRPC server error: {}"</span>, e);
            }
        }
    }
}</div>
</div>

<!-- ===================== SWAGGER/OPENAPI ===================== -->
<h2 class="animate-in">12. Swagger / OpenAPI dengan utoipa</h2>

<div class="card animate-in">
<h3 style="color:var(--accent)">Auto-Generated API Docs</h3>
<p>Gunakan <strong>utoipa</strong> + <strong>utoipa-swagger-ui</strong> untuk auto-generate Swagger UI dari Rust code annotations.</p>

<div class="code-block">
<span class="cm">// Cargo.toml</span>
[dependencies]
utoipa = { version = <span class="str">"4"</span>, features = [<span class="str">"axum_extras"</span>] }
utoipa-swagger-ui = { version = <span class="str">"7"</span>, features = [<span class="str">"axum"</span>] }

<span class="cm">// Model dengan ToSchema derive</span>
#[derive(Serialize, Deserialize, <span class="fn">ToSchema</span>)]
<span class="kw">pub struct</span> <span class="fn">CreateUserRequest</span> {
    #[schema(example = <span class="str">"Alice"</span>, min_length = <span class="num">2</span>)]
    <span class="kw">pub</span> name: String,
    #[schema(example = <span class="str">"alice@example.com"</span>)]
    <span class="kw">pub</span> email: String,
    #[schema(min_length = <span class="num">8</span>)]
    <span class="kw">pub</span> password: String,
}

<span class="cm">// Handler dengan path annotations</span>
#[utoipa::path(
    post,
    path = <span class="str">"/api/v1/users"</span>,
    request_body = CreateUserRequest,
    responses(
        (<span class="num">201</span>, description = <span class="str">"User created"</span>, body = UserResponse),
        (<span class="num">400</span>, description = <span class="str">"Validation error"</span>),
        (<span class="num">409</span>, description = <span class="str">"Email already exists"</span>),
    ),
    security((<span class="str">"bearer"</span> = []))
)]
<span class="kw">pub async fn</span> <span class="fn">create_user</span>(...) -&gt; ... { }

<span class="cm">// OpenAPI spec + Swagger UI mount</span>
#[derive(<span class="fn">OpenApi</span>)]
#[openapi(
    paths(create_user, get_users, get_user, update_user, delete_user),
    components(schemas(CreateUserRequest, UserResponse, UpdateUserRequest)),
    tags((name = <span class="str">"users"</span>, description = <span class="str">"User CRUD operations"</span>)),
    modifiers(&amp;SecurityAddon)
)]
<span class="kw">struct</span> <span class="fn">ApiDoc</span>;

<span class="cm">// Di router</span>
<span class="kw">let</span> app = Router::new()
    .merge(SwaggerUi::new(<span class="str">"/swagger-ui"</span>)
        .url(<span class="str">"/api-docs/openapi.json"</span>, ApiDoc::openapi()));
<span class="cm">// Akses: http://localhost:8080/swagger-ui/</span>
</div>

<div class="info-box">
    <strong>PostgreSQL dengan sqlx (compile-time checked):</strong> sqlx memeriksa query SQL saat compile time terhadap schema database. Typo di kolom? Salah tipe? Compiler langsung error!<br>
    <code>DATABASE_URL=postgres://user:pass@localhost:5432/mydb</code><br>
    Jalankan <code>cargo sqlx prepare</code> untuk offline mode (CI tanpa database).
</div>
</div>

<!-- ===================== 13. DOCKER ===================== -->
<h2 class="animate-in">13. Docker Deployment</h2>

<div class="card animate-in">
<h3>Multi-Stage Dockerfile dengan cargo-chef</h3>
<p>Rust compile time terkenal lambat. Dengan <strong>cargo-chef</strong>, kita memisahkan dependency compilation dari source compilation, sehingga Docker layer cache bisa dimanfaatkan secara optimal.</p>
<div class="code-block"><span class="cm"># ===== Stage 1: Chef — prepare dependency recipe =====</span>
FROM rust:1.77 AS chef
RUN cargo install cargo-chef
WORKDIR /app

<span class="cm"># ===== Stage 2: Planner — create recipe.json =====</span>
FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

<span class="cm"># ===== Stage 3: Builder — compile dependencies first =====</span>
FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json

<span class="cm"># Compile HANYA dependencies (cached layer!)</span>
RUN cargo chef cook --release --recipe-path recipe.json

<span class="cm"># Lalu compile source code</span>
COPY . .
RUN cargo build --release

<span class="cm"># ===== Stage 4: Runtime — minimal image =====</span>
FROM gcr.io/distroless/cc-debian12 AS runtime

COPY --from=builder /app/target/release/myapp /usr/local/bin/

<span class="cm"># Non-root user (distroless default: nonroot)</span>
USER nonroot

EXPOSE <span class="num">3000</span> <span class="num">50051</span>

ENTRYPOINT [<span class="str">"/usr/local/bin/myapp"</span>]</div>
</div>

<div class="card animate-in">
<h3>Kenapa cargo-chef?</h3>
<div class="info-box">
<strong>Masalah:</strong> Tanpa cargo-chef, setiap perubahan source code menyebabkan <em>semua dependencies</em> dikompilasi ulang (~5-15 menit). Dengan cargo-chef, dependencies di-cache di Docker layer terpisah. Perubahan source code hanya mengompilasi ulang kode kita (~30 detik).
</div>
<div class="table-wrapper">
<table>
<tr><th>Pendekatan</th><th>Edit source code</th><th>Edit Cargo.toml</th></tr>
<tr><td>Tanpa cache</td><td style="color:var(--red)">~10 menit (full rebuild)</td><td style="color:var(--red)">~10 menit</td></tr>
<tr><td>cargo-chef</td><td style="color:var(--green)">~30 detik (hanya source)</td><td>~10 menit (rare)</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>docker-compose.yml</h3>
<div class="code-block"><span class="cm"># docker-compose.yml</span>
version: <span class="str">"3.9"</span>

services:
  app:
    build: .
    ports:
      - <span class="str">"3000:3000"</span>    <span class="cm"># REST API</span>
      - <span class="str">"50051:50051"</span>  <span class="cm"># gRPC</span>
    environment:
      DATABASE_URL: <span class="str">"postgres://myapp:secret@db:5432/myapp"</span>
      JWT_SECRET: <span class="str">"change-this-in-production-use-256-bit-key"</span>
      RUST_LOG: <span class="str">"myapp=info,tower_http=info"</span>
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: myapp
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - <span class="str">"5432:5432"</span>
    healthcheck:
      test: [<span class="str">"CMD-SHELL"</span>, <span class="str">"pg_isready -U myapp"</span>]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  pgdata:</div>
</div>

<div class="card animate-in">
<h3>Runtime Image — Distroless</h3>
<p>Kita menggunakan <strong>distroless</strong> sebagai runtime image karena:</p>
<ul>
<li><strong>Minimal attack surface</strong> — tidak ada shell, package manager, atau tool lain yang bisa dieksploitasi</li>
<li><strong>Ukuran kecil</strong> — image ~20MB vs ~200MB untuk debian</li>
<li><strong>Non-root default</strong> — container berjalan sebagai user nonroot</li>
<li><strong>No CVE baggage</strong> — tidak ada library/tool yang tidak digunakan</li>
</ul>
<div class="info-box">
<strong>Ukuran Image Final:</strong> Binary Rust yang di-compile static (~10-20MB) + distroless base (~20MB) = total <strong>~30-40MB</strong>. Bandingkan dengan: Node.js (~900MB), Python (~1GB), Java (~500MB).
</div>
</div>

<!-- ===================== 13. TESTING ===================== -->
<h2 class="animate-in">13. Testing</h2>

<div class="card animate-in">
<h3>Integration Test untuk API</h3>
<div class="code-block"><span class="cm">// tests/api_test.rs</span>
<span class="kw">use</span> axum::http::StatusCode;
<span class="kw">use</span> axum_test::TestServer;
<span class="kw">use</span> serde_json::json;

#[tokio::test]
<span class="kw">async fn</span> <span class="fn">test_create_user</span>() {
    <span class="cm">// 1. Setup test server</span>
    <span class="kw">let</span> app = create_test_app().<span class="kw">await</span>;
    <span class="kw">let</span> server = TestServer::new(app).unwrap();

    <span class="cm">// 2. Create user</span>
    <span class="kw">let</span> response = server
        .post(<span class="str">"/api/users"</span>)
        .json(&amp;json!({
            <span class="str">"username"</span>: <span class="str">"testuser"</span>,
            <span class="str">"email"</span>: <span class="str">"test@example.com"</span>,
            <span class="str">"password"</span>: <span class="str">"secure_p@ss123"</span>,
            <span class="str">"full_name"</span>: <span class="str">"Test User"</span>
        }))
        .<span class="kw">await</span>;

    <span class="cm">// 3. Assert</span>
    assert_eq!(response.status_code(), StatusCode::CREATED);

    <span class="kw">let</span> body: serde_json::Value = response.json();
    assert_eq!(body[<span class="str">"username"</span>], <span class="str">"testuser"</span>);
    assert_eq!(body[<span class="str">"email"</span>], <span class="str">"test@example.com"</span>);

    <span class="cm">// Password hash TIDAK boleh ada di response!</span>
    assert!(body.get(<span class="str">"password_hash"</span>).is_none());
    assert!(body.get(<span class="str">"password"</span>).is_none());
}

#[tokio::test]
<span class="kw">async fn</span> <span class="fn">test_login_and_protected_route</span>() {
    <span class="kw">let</span> app = create_test_app().<span class="kw">await</span>;
    <span class="kw">let</span> server = TestServer::new(app).unwrap();

    <span class="cm">// 1. Create user first</span>
    server.post(<span class="str">"/api/users"</span>).json(&amp;json!({
        <span class="str">"username"</span>: <span class="str">"alice"</span>,
        <span class="str">"email"</span>: <span class="str">"alice@test.com"</span>,
        <span class="str">"password"</span>: <span class="str">"p@ssword123"</span>,
        <span class="str">"full_name"</span>: <span class="str">"Alice"</span>
    })).<span class="kw">await</span>;

    <span class="cm">// 2. Login</span>
    <span class="kw">let</span> login_resp = server.post(<span class="str">"/api/auth/login"</span>)
        .json(&amp;json!({
            <span class="str">"username"</span>: <span class="str">"alice"</span>,
            <span class="str">"password"</span>: <span class="str">"p@ssword123"</span>
        }))
        .<span class="kw">await</span>;

    assert_eq!(login_resp.status_code(), StatusCode::OK);
    <span class="kw">let</span> token: serde_json::Value = login_resp.json();
    <span class="kw">let</span> jwt = token[<span class="str">"token"</span>].as_str().unwrap();

    <span class="cm">// 3. Access protected route with token</span>
    <span class="kw">let</span> users_resp = server.get(<span class="str">"/api/users"</span>)
        .add_header(
            <span class="str">"Authorization"</span>,
            format!(<span class="str">"Bearer {}"</span>, jwt),
        )
        .<span class="kw">await</span>;

    assert_eq!(users_resp.status_code(), StatusCode::OK);
}

#[tokio::test]
<span class="kw">async fn</span> <span class="fn">test_unauthorized_without_token</span>() {
    <span class="kw">let</span> app = create_test_app().<span class="kw">await</span>;
    <span class="kw">let</span> server = TestServer::new(app).unwrap();

    <span class="cm">// Try accessing protected route without token</span>
    <span class="kw">let</span> response = server.get(<span class="str">"/api/users"</span>).<span class="kw">await</span>;
    assert_eq!(response.status_code(), StatusCode::UNAUTHORIZED);
}

#[tokio::test]
<span class="kw">async fn</span> <span class="fn">test_validation_error</span>() {
    <span class="kw">let</span> app = create_test_app().<span class="kw">await</span>;
    <span class="kw">let</span> server = TestServer::new(app).unwrap();

    <span class="cm">// Short username should fail validation</span>
    <span class="kw">let</span> response = server.post(<span class="str">"/api/users"</span>).json(&amp;json!({
        <span class="str">"username"</span>: <span class="str">"ab"</span>,     <span class="cm">// too short! (min 3)</span>
        <span class="str">"email"</span>: <span class="str">"bad-email"</span>, <span class="cm">// invalid email!</span>
        <span class="str">"password"</span>: <span class="str">"short"</span>,   <span class="cm">// too short! (min 8)</span>
        <span class="str">"full_name"</span>: <span class="str">""</span>        <span class="cm">// empty!</span>
    })).<span class="kw">await</span>;

    assert_eq!(response.status_code(), StatusCode::BAD_REQUEST);
}</div>
</div>

<!-- ===================== 14. API REFERENCE ===================== -->
<h2 class="animate-in">14. API Reference</h2>

<div class="card animate-in">
<h3>RESTful API Endpoints</h3>
<div class="table-wrapper">
<table>
<tr><th>Method</th><th>Path</th><th>Auth</th><th>Description</th><th>Body</th></tr>
<tr><td><span class="badge badge-green">POST</span></td><td>/api/users</td><td>No</td><td>Register user</td><td>CreateUserRequest</td></tr>
<tr><td><span class="badge badge-blue">POST</span></td><td>/api/auth/login</td><td>No</td><td>Login, get JWT</td><td>LoginRequest</td></tr>
<tr><td><span class="badge badge-yellow">GET</span></td><td>/api/users</td><td>Yes</td><td>List users (paginated)</td><td>Query: ?limit=20&amp;offset=0</td></tr>
<tr><td><span class="badge badge-yellow">GET</span></td><td>/api/users/:id</td><td>Yes</td><td>Get user by ID</td><td>-</td></tr>
<tr><td><span class="badge badge-purple">PUT</span></td><td>/api/users/:id</td><td>Yes</td><td>Update user</td><td>UpdateUserRequest</td></tr>
<tr><td><span class="badge badge-red">DELETE</span></td><td>/api/users/:id</td><td>Yes</td><td>Soft delete user</td><td>-</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Contoh Request &amp; Response</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="api-create">Create User</button>
<button class="tab-btn" data-tab="api-login">Login</button>
<button class="tab-btn" data-tab="api-list">List Users</button>
<button class="tab-btn" data-tab="api-error">Error Response</button>
</div>
<div class="tab-content active" id="api-create">
<div class="code-block"><span class="cm"># POST /api/users</span>
<span class="cm"># Request:</span>
{
    <span class="str">"username"</span>: <span class="str">"alice"</span>,
    <span class="str">"email"</span>: <span class="str">"alice@example.com"</span>,
    <span class="str">"password"</span>: <span class="str">"secure_p@ssw0rd"</span>,
    <span class="str">"full_name"</span>: <span class="str">"Alice Wonderland"</span>
}

<span class="cm"># Response: 201 Created</span>
{
    <span class="str">"id"</span>: <span class="str">"550e8400-e29b-41d4-a716-446655440000"</span>,
    <span class="str">"username"</span>: <span class="str">"alice"</span>,
    <span class="str">"email"</span>: <span class="str">"alice@example.com"</span>,
    <span class="str">"full_name"</span>: <span class="str">"Alice Wonderland"</span>,
    <span class="str">"is_active"</span>: <span class="num">true</span>,
    <span class="str">"created_at"</span>: <span class="str">"2024-01-15T10:30:00Z"</span>
}
<span class="cm">// Perhatikan: TIDAK ada password_hash di response!</span></div>
</div>
<div class="tab-content" id="api-login">
<div class="code-block"><span class="cm"># POST /api/auth/login</span>
<span class="cm"># Request:</span>
{
    <span class="str">"username"</span>: <span class="str">"alice"</span>,
    <span class="str">"password"</span>: <span class="str">"secure_p@ssw0rd"</span>
}

<span class="cm"># Response: 200 OK</span>
{
    <span class="str">"token"</span>: <span class="str">"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI..."</span>,
    <span class="str">"token_type"</span>: <span class="str">"Bearer"</span>,
    <span class="str">"expires_in"</span>: <span class="num">86400</span>
}</div>
</div>
<div class="tab-content" id="api-list">
<div class="code-block"><span class="cm"># GET /api/users?limit=2&amp;offset=0</span>
<span class="cm"># Header: Authorization: Bearer eyJhbGci...</span>
<span class="cm"># Response: 200 OK</span>
[
    {
        <span class="str">"id"</span>: <span class="str">"550e8400-e29b-41d4-a716-446655440000"</span>,
        <span class="str">"username"</span>: <span class="str">"alice"</span>,
        <span class="str">"email"</span>: <span class="str">"alice@example.com"</span>,
        <span class="str">"full_name"</span>: <span class="str">"Alice Wonderland"</span>,
        <span class="str">"is_active"</span>: <span class="num">true</span>,
        <span class="str">"created_at"</span>: <span class="str">"2024-01-15T10:30:00Z"</span>
    },
    {
        <span class="str">"id"</span>: <span class="str">"6ba7b810-9dad-11d1-80b4-00c04fd430c8"</span>,
        <span class="str">"username"</span>: <span class="str">"bob"</span>,
        <span class="str">"email"</span>: <span class="str">"bob@example.com"</span>,
        <span class="str">"full_name"</span>: <span class="str">"Bob Builder"</span>,
        <span class="str">"is_active"</span>: <span class="num">true</span>,
        <span class="str">"created_at"</span>: <span class="str">"2024-01-14T08:00:00Z"</span>
    }
]</div>
</div>
<div class="tab-content" id="api-error">
<div class="code-block"><span class="cm"># POST /api/users (duplicate email)</span>
<span class="cm"># Response: 409 Conflict</span>
{
    <span class="str">"error"</span>: <span class="str">"Email already exists"</span>,
    <span class="str">"status"</span>: <span class="num">409</span>
}

<span class="cm"># POST /api/users (validation error)</span>
<span class="cm"># Response: 400 Bad Request</span>
{
    <span class="str">"error"</span>: <span class="str">"Username must be 3-50 characters"</span>,
    <span class="str">"status"</span>: <span class="num">400</span>
}

<span class="cm"># GET /api/users (no token)</span>
<span class="cm"># Response: 401 Unauthorized</span>
{
    <span class="str">"error"</span>: <span class="str">"Unauthorized"</span>,
    <span class="str">"status"</span>: <span class="num">401</span>
}</div>
</div>
</div>

<!-- ===================== 15. RINGKASAN ===================== -->
<h2 class="animate-in">15. Ringkasan &amp; Best Practices</h2>

<div class="card animate-in">
<h3>Architecture Decision Records</h3>
<div class="table-wrapper">
<table>
<tr><th>Keputusan</th><th>Pilihan</th><th>Alasan</th></tr>
<tr><td>Web Framework</td><td>Axum</td><td>Tokio-native, type-safe extractors, modular middleware</td></tr>
<tr><td>gRPC</td><td>Tonic</td><td>Pure Rust, async, code generation, interceptors</td></tr>
<tr><td>Database</td><td>sqlx + PostgreSQL</td><td>Compile-time checked queries, async, connection pooling</td></tr>
<tr><td>Password Hashing</td><td>Argon2id</td><td>OWASP recommended, PHC winner, memory-hard</td></tr>
<tr><td>Auth</td><td>JWT (jsonwebtoken)</td><td>Stateless, scalable, cross-service</td></tr>
<tr><td>Validation</td><td>validator crate</td><td>Derive macro, declarative, composable</td></tr>
<tr><td>Error Handling</td><td>thiserror + AppError</td><td>Compile-time checked, IntoResponse, no panic</td></tr>
<tr><td>TLS</td><td>rustls</td><td>Pure Rust, no OpenSSL CVEs, memory safe</td></tr>
<tr><td>Serialization</td><td>serde + protobuf</td><td>JSON for REST, protobuf for gRPC</td></tr>
<tr><td>Runtime</td><td>Tokio</td><td>Industry standard, work-stealing, full-featured</td></tr>
<tr><td>Container</td><td>Distroless</td><td>Minimal attack surface, ~30MB total image</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Rust CRUD — Alur Lengkap</h3>
<div class="code-block"><span class="cm">// Ringkasan alur request dalam 10 langkah:</span>

<span class="cm">// 1. Client mengirim HTTP request</span>
<span class="cm">//    POST /api/users  { "username": "alice", ... }</span>

<span class="cm">// 2. Tower middleware stack memproses:</span>
<span class="cm">//    Logging -&gt; BodyLimit -&gt; CORS -&gt; Tracing -&gt; Auth</span>

<span class="cm">// 3. Axum router mencocokkan route</span>
<span class="cm">//    "/api/users" + POST -&gt; handlers::user::create_user</span>

<span class="cm">// 4. Extractors parsing otomatis:</span>
<span class="cm">//    Json(req): Json&lt;CreateUserRequest&gt;</span>
<span class="cm">//    &lt;-- Axum deserialize JSON body ke struct Rust</span>

<span class="cm">// 5. Handler memanggil validator:</span>
<span class="cm">//    req.validate()? &lt;-- cek email, username length, etc.</span>

<span class="cm">// 6. Handler memanggil service layer:</span>
<span class="cm">//    state.user_service.create_user(req).await?</span>

<span class="cm">// 7. Service hashes password:</span>
<span class="cm">//    Argon2id::hash_password(password) -&gt; "$argon2id$..."</span>

<span class="cm">// 8. Service memanggil repository:</span>
<span class="cm">//    repo.create(id, &amp;req, &amp;hash).await?</span>

<span class="cm">// 9. Repository menjalankan SQL via sqlx:</span>
<span class="cm">//    INSERT INTO users ... RETURNING * (parameterized!)</span>

<span class="cm">// 10. Response dikembalikan:</span>
<span class="cm">//     User -&gt; UserResponse (tanpa password_hash)</span>
<span class="cm">//     -&gt; Json(user) -&gt; 201 Created</span></div>
</div>

<div class="card animate-in">
<h3>Production Checklist</h3>
<div class="card-grid">
<div class="card">
<h4 style="color:var(--green)">Keamanan</h4>
<ul>
<li>Password di-hash dengan Argon2id</li>
<li>JWT dengan expiry pendek</li>
<li>HTTPS via rustls</li>
<li>CORS terkonfigurasi ketat</li>
<li>Input validation di setiap endpoint</li>
<li>SQL injection mustahil (sqlx parameterized)</li>
<li>No unsafe di application code</li>
<li>Error tidak expose detail internal</li>
</ul>
</div>
<div class="card">
<h4 style="color:var(--accent)">Performa &amp; Reliability</h4>
<ul>
<li>Connection pooling (sqlx PgPool)</li>
<li>Async I/O (Tokio work-stealing)</li>
<li>Graceful shutdown (SIGTERM)</li>
<li>Structured logging (tracing)</li>
<li>Rate limiting (tower-http)</li>
<li>Body size limit (1MB)</li>
<li>Pagination di list endpoints</li>
<li>Soft delete (data tidak hilang)</li>
</ul>
</div>
<div class="card">
<h4 style="color:var(--yellow)">Deployment</h4>
<ul>
<li>Multi-stage Docker build</li>
<li>cargo-chef untuk fast rebuilds</li>
<li>Distroless runtime image (~30MB)</li>
<li>Non-root container user</li>
<li>Health check endpoint</li>
<li>Environment-based config</li>
<li>docker-compose untuk local dev</li>
<li>Database migration otomatis</li>
</ul>
</div>
</div>
</div>

</section>
`;

// ============================================================
// CANVAS ANIMATION: CRUD Rust Architecture Flow
// ============================================================
function initCrudRustAnimations() {
    var canvas = document.getElementById('canvas-crud-rust-arch');
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var animFrame = 0;
    var animId = null;

    var colors = {
        bg:     '#1e1e2e',
        text:   '#cdd6f4',
        text2:  '#6c7086',
        accent: '#89b4fa',
        green:  '#a6e3a1',
        red:    '#f38ba8',
        orange: '#fab387',
        purple: '#cba6f7',
        yellow: '#f9e2af',
        teal:   '#94e2d5',
        surface:'#313244'
    };

    function clearCanvas() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, w, h);
    }

    function drawRoundRect(x, y, width, height, radius, stroke, fill) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill)   { ctx.fillStyle = fill;     ctx.fill();   }
        if (stroke) { ctx.strokeStyle = stroke;  ctx.lineWidth = 2; ctx.stroke(); }
    }

    function drawArrow(x1, y1, x2, y2, color, progress) {
        var px = x1 + (x2 - x1) * progress;
        var py = y1 + (y2 - y1) * progress;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(px, py);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        if (progress > 0.95) {
            var angle = Math.atan2(y2 - y1, x2 - x1);
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px - 12 * Math.cos(angle - 0.4), py - 12 * Math.sin(angle - 0.4));
            ctx.lineTo(px - 12 * Math.cos(angle + 0.4), py - 12 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    function drawBox(x, y, bw, bh, label, sublabel, color, glow) {
        if (glow) {
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
        }
        drawRoundRect(x, y, bw, bh, 8, color, color + '22');
        ctx.shadowBlur = 0;

        ctx.font = 'bold 13px monospace';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(label, x + bw / 2, y + bh / 2 - (sublabel ? 4 : 0));

        if (sublabel) {
            ctx.font = '10px monospace';
            ctx.fillStyle = colors.text2;
            ctx.fillText(sublabel, x + bw / 2, y + bh / 2 + 14);
        }
    }

    function drawTypeSafetyBadge(x, y, text, color) {
        var tw = ctx.measureText(text).width + 16;
        drawRoundRect(x - tw / 2, y - 8, tw, 16, 4, color, color + '33');
        ctx.font = '9px monospace';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(text, x, y + 3);
    }

    function drawDataPacket(x, y, phase, color) {
        var size = 6 + Math.sin(phase * 3) * 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    function drawErrorHighlight(x, y, bw, bh, alpha) {
        ctx.strokeStyle = colors.red;
        ctx.lineWidth = 3;
        ctx.globalAlpha = alpha;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(x - 4, y - 4, bw + 8, bh + 8);
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
    }

    function drawCompilerMessage(x, y, msg, alpha) {
        ctx.globalAlpha = alpha;
        ctx.font = '10px monospace';
        ctx.fillStyle = colors.red;
        ctx.textAlign = 'left';
        ctx.fillText(msg, x, y);
        ctx.globalAlpha = 1;
    }

    function draw() {
        clearCanvas();
        animFrame++;

        var cycle = (animFrame % 360) / 360;
        var phase = cycle * Math.PI * 2;

        // Title
        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = colors.text;
        ctx.textAlign = 'center';
        ctx.fillText('Rust CRUD Architecture — Type-Safe Request Flow', w / 2, 30);

        // Layer boxes
        var boxW = 130;
        var boxH = 55;
        var startY = 70;
        var gap = 150;

        // Client
        var cx = 30, cy = startY + 80;
        drawBox(cx, cy, 90, boxH, 'Client', 'HTTP / gRPC', colors.accent, false);

        // Middleware
        var mx = cx + 90 + 40, my = startY + 30;
        drawBox(mx, my, boxW, boxH, 'Middleware', 'Auth + CORS + Log', colors.purple, cycle > 0.05 && cycle < 0.2);

        // Handler
        var hx = mx + gap, hy = startY + 30;
        drawBox(hx, hy, boxW, boxH, 'Handler', 'Axum Extractors', colors.accent, cycle > 0.2 && cycle < 0.35);

        // Service
        var sx = hx + gap, sy = startY + 30;
        drawBox(sx, sy, boxW, boxH, 'Service', 'Business Logic', colors.green, cycle > 0.35 && cycle < 0.5);

        // Repository
        var rx = sx + gap, ry = startY + 30;
        drawBox(rx, ry, boxW, boxH, 'Repository', 'sqlx Queries', colors.orange, cycle > 0.5 && cycle < 0.65);

        // Database
        var dx = rx + gap + 20, dy = startY + 80;
        drawBox(dx, dy, 100, boxH, 'PostgreSQL', 'Database', colors.teal, cycle > 0.65 && cycle < 0.8);

        // Type safety badges between layers
        var badgeY = startY + 105;
        drawTypeSafetyBadge(mx + boxW / 2, badgeY, 'Claims verified', colors.purple);
        drawTypeSafetyBadge(hx + boxW / 2, badgeY, 'Json<T> parsed', colors.accent);
        drawTypeSafetyBadge(sx + boxW / 2, badgeY, 'Argon2 hash', colors.green);
        drawTypeSafetyBadge(rx + boxW / 2, badgeY, 'Parameterized', colors.orange);

        // Arrows between boxes
        var arrowY = startY + 57;

        // Animate arrows based on cycle
        var a1 = Math.min(1, Math.max(0, (cycle - 0.0) * 8));
        var a2 = Math.min(1, Math.max(0, (cycle - 0.12) * 8));
        var a3 = Math.min(1, Math.max(0, (cycle - 0.25) * 8));
        var a4 = Math.min(1, Math.max(0, (cycle - 0.38) * 8));
        var a5 = Math.min(1, Math.max(0, (cycle - 0.50) * 8));

        drawArrow(cx + 90, cy + boxH / 2, mx, my + boxH / 2, colors.accent, a1);
        drawArrow(mx + boxW, arrowY, hx, arrowY, colors.purple, a2);
        drawArrow(hx + boxW, arrowY, sx, arrowY, colors.accent, a3);
        drawArrow(sx + boxW, arrowY, rx, arrowY, colors.green, a4);
        drawArrow(rx + boxW, ry + boxH / 2, dx, dy + boxH / 2, colors.orange, a5);

        // Data packet animation
        if (cycle > 0.0 && cycle < 0.12) {
            var t = (cycle - 0.0) / 0.12;
            var px = cx + 90 + (mx - cx - 90) * t;
            var py = cy + boxH / 2 + (my + boxH / 2 - cy - boxH / 2) * t;
            drawDataPacket(px, py, phase, colors.accent);
        }
        if (cycle > 0.12 && cycle < 0.25) {
            var t = (cycle - 0.12) / 0.13;
            drawDataPacket(mx + boxW + (hx - mx - boxW) * t, arrowY, phase, colors.purple);
        }
        if (cycle > 0.25 && cycle < 0.38) {
            var t = (cycle - 0.25) / 0.13;
            drawDataPacket(hx + boxW + (sx - hx - boxW) * t, arrowY, phase, colors.accent);
        }
        if (cycle > 0.38 && cycle < 0.50) {
            var t = (cycle - 0.38) / 0.12;
            drawDataPacket(sx + boxW + (rx - sx - boxW) * t, arrowY, phase, colors.green);
        }
        if (cycle > 0.50 && cycle < 0.65) {
            var t = (cycle - 0.50) / 0.15;
            var px = rx + boxW + (dx - rx - boxW) * t;
            var py = ry + boxH / 2 + (dy + boxH / 2 - ry - boxH / 2) * t;
            drawDataPacket(px, py, phase, colors.orange);
        }

        // Response flow (reverse direction)
        if (cycle > 0.70) {
            var revCycle = (cycle - 0.70) / 0.30;

            // DB -> Repo -> Service -> Handler -> Middleware -> Client
            if (revCycle < 0.2) {
                var t = revCycle / 0.2;
                var px = dx + (rx + boxW - dx) * t;
                var py = dy + boxH / 2 + (ry + boxH / 2 - dy - boxH / 2) * t;
                drawDataPacket(px, py, phase, colors.teal);
            } else if (revCycle < 0.4) {
                var t = (revCycle - 0.2) / 0.2;
                drawDataPacket(rx + (sx + boxW - rx) * (1 - t), arrowY, phase, colors.green);
            } else if (revCycle < 0.6) {
                var t = (revCycle - 0.4) / 0.2;
                drawDataPacket(sx + (hx + boxW - sx) * (1 - t), arrowY, phase, colors.accent);
            } else if (revCycle < 0.8) {
                var t = (revCycle - 0.6) / 0.2;
                drawDataPacket(hx + (mx + boxW - hx) * (1 - t), arrowY, phase, colors.purple);
            } else {
                var t = (revCycle - 0.8) / 0.2;
                var px = mx + (cx + 90 - mx) * t;
                var py = my + boxH / 2 + (cy + boxH / 2 - my - boxH / 2) * t;
                drawDataPacket(px, py, phase, colors.accent);
            }
        }

        // Error highlight demonstration (shows compiler catching errors)
        var errorCycle = (animFrame % 600) / 600;
        if (errorCycle > 0.82 && errorCycle < 0.95) {
            var errAlpha = Math.sin((errorCycle - 0.82) / 0.13 * Math.PI);

            // Error box around a "bad" attempt
            var errX = 30;
            var errY = startY + 200;
            drawRoundRect(errX, errY, 250, 90, 8, colors.red + '44', colors.red + '0a');
            drawErrorHighlight(errX, errY, 250, 90, errAlpha * 0.8);

            ctx.globalAlpha = errAlpha;
            ctx.font = 'bold 11px monospace';
            ctx.fillStyle = colors.red;
            ctx.textAlign = 'left';
            ctx.fillText('COMPILE ERROR:', errX + 10, errY + 20);
            ctx.font = '10px monospace';
            ctx.fillStyle = colors.text;
            ctx.fillText('let x: String = user.password_hash;', errX + 10, errY + 38);
            ctx.fillStyle = colors.red;
            ctx.fillText('  ^^ field is private, cannot', errX + 10, errY + 54);
            ctx.fillText('     leak to UserResponse', errX + 10, errY + 68);
            ctx.globalAlpha = 1;

            // Compiler shield icon
            var shieldX = 310;
            var shieldY = errY + 20;
            drawRoundRect(shieldX, shieldY, 180, 55, 6, colors.green, colors.green + '15');
            ctx.globalAlpha = errAlpha;
            ctx.font = 'bold 11px monospace';
            ctx.fillStyle = colors.green;
            ctx.textAlign = 'center';
            ctx.fillText('COMPILER PREVENTS', shieldX + 90, shieldY + 20);
            ctx.font = '10px monospace';
            ctx.fillText('Type system catches bug', shieldX + 90, shieldY + 38);
            ctx.fillText('BEFORE deployment!', shieldX + 90, shieldY + 52);
            ctx.globalAlpha = 1;
        }

        // Bottom legend
        var legendY = h - 40;
        ctx.font = '10px monospace';
        ctx.fillStyle = colors.text2;
        ctx.textAlign = 'center';
        ctx.fillText('Request flows left-to-right, Response flows right-to-left', w / 2, legendY);
        ctx.fillText('Each layer enforces type safety — invalid state is a compile error', w / 2, legendY + 16);

        // Layer labels at top
        ctx.font = '9px monospace';
        ctx.fillStyle = colors.text2;
        ctx.textAlign = 'center';
        ctx.fillText('TOWER', mx + boxW / 2, startY + 18);
        ctx.fillText('AXUM', hx + boxW / 2, startY + 18);
        ctx.fillText('DOMAIN', sx + boxW / 2, startY + 18);
        ctx.fillText('SQLX', rx + boxW / 2, startY + 18);

        animId = requestAnimationFrame(draw);
    }

    // Intersection Observer — only animate when visible
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
}
