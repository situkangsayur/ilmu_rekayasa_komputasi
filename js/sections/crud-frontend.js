// ============================================================
// FRONTEND CRUD TUTORIAL — Next.js & Nuxt.js
// Comprehensive CRUD implementation with best practices
// ============================================================

sections['crud-frontend'] = () => `
<section class="animate-in">

<h1 class="section-title">Frontend CRUD: Next.js &amp; Nuxt.js</h1>
<p class="section-subtitle">Panduan lengkap membangun aplikasi CRUD modern dengan Next.js (React) dan Nuxt.js (Vue) &mdash; Server Components, Server Actions, SSR, TypeScript, dan Best Practices</p>

<!-- ============================================================
     BAGIAN 1: OVERVIEW & COMPARISON
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">1. Next.js vs Nuxt.js &mdash; Overview</h2>

<div class="card animate-in">
    <h3>Mengapa Next.js dan Nuxt.js?</h3>
    <p>Kedua framework ini adalah <strong>meta-framework</strong> yang dibangun di atas library UI populer (React dan Vue). Mereka menyediakan fitur-fitur yang tidak tersedia di React/Vue vanilla: <em>file-based routing</em>, <em>server-side rendering</em>, <em>API routes</em>, dan banyak lagi.</p>

    <div class="info-box">
        <strong>Meta-Framework</strong> = Framework yang dibangun di atas framework lain. Next.js dibangun di atas React, Nuxt.js dibangun di atas Vue. Mereka menambahkan fitur seperti routing, SSR, data fetching, dan build tooling yang tidak disediakan oleh React/Vue secara default.
    </div>

    <div class="table-wrapper">
    <table>
    <tr>
        <th>Aspek</th>
        <th>Next.js 14+</th>
        <th>Nuxt.js 3</th>
    </tr>
    <tr>
        <td><strong>Base Framework</strong></td>
        <td>React 18+</td>
        <td>Vue 3</td>
    </tr>
    <tr>
        <td><strong>Routing</strong></td>
        <td>File-based (app/ directory)</td>
        <td>File-based (pages/ directory)</td>
    </tr>
    <tr>
        <td><strong>Data Fetching</strong></td>
        <td>Server Components, fetch()</td>
        <td>useFetch, useAsyncData</td>
    </tr>
    <tr>
        <td><strong>Mutations</strong></td>
        <td>Server Actions</td>
        <td>Server API routes (H3)</td>
    </tr>
    <tr>
        <td><strong>State Management</strong></td>
        <td>Zustand, Context API</td>
        <td>Pinia, useState composable</td>
    </tr>
    <tr>
        <td><strong>Styling</strong></td>
        <td>Tailwind CSS + shadcn/ui</td>
        <td>Tailwind CSS + Nuxt UI</td>
    </tr>
    <tr>
        <td><strong>Authentication</strong></td>
        <td>NextAuth.js (Auth.js v5)</td>
        <td>nuxt-auth-utils / Sidebase Auth</td>
    </tr>
    <tr>
        <td><strong>ORM</strong></td>
        <td>Prisma / Drizzle</td>
        <td>Prisma / Drizzle</td>
    </tr>
    <tr>
        <td><strong>Rendering</strong></td>
        <td>SSR, SSG, ISR, PPR</td>
        <td>SSR, SSG, SWR, Hybrid</td>
    </tr>
    <tr>
        <td><strong>Auto-imports</strong></td>
        <td>Tidak (manual import)</td>
        <td>Ya (components, composables, utils)</td>
    </tr>
    <tr>
        <td><strong>API Layer</strong></td>
        <td>Route Handlers (app/api/)</td>
        <td>Server Routes (server/api/) via Nitro/H3</td>
    </tr>
    <tr>
        <td><strong>TypeScript</strong></td>
        <td>First-class support</td>
        <td>First-class support</td>
    </tr>
    </table>
    </div>
</div>

<!-- ============================================================
     BAGIAN 2: NEXT.JS PROJECT STRUCTURE
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">2. Next.js CRUD &mdash; Project Structure</h2>

<div class="card animate-in">
    <h3>Struktur Proyek Next.js (App Router + TypeScript)</h3>
    <p>Next.js 14+ menggunakan <strong>App Router</strong> yang berbasis React Server Components. Setiap file dalam folder <code>app/</code> secara default adalah Server Component &mdash; dirender di server tanpa JavaScript di client.</p>

    <div class="code-block">
<span class="cm">// Struktur folder Next.js CRUD App</span>
nextjs-crud/
├── app/
│   ├── layout.tsx                <span class="cm">// Root layout (wraps seluruh app)</span>
│   ├── page.tsx                  <span class="cm">// Home / Dashboard</span>
│   ├── loading.tsx               <span class="cm">// Global loading UI (Suspense)</span>
│   ├── error.tsx                 <span class="cm">// Global error boundary</span>
│   ├── users/
│   │   ├── page.tsx              <span class="cm">// GET /users - List users (Server Component)</span>
│   │   ├── loading.tsx           <span class="cm">// Loading state untuk /users</span>
│   │   ├── error.tsx             <span class="cm">// Error boundary untuk /users</span>
│   │   ├── [id]/
│   │   │   ├── page.tsx          <span class="cm">// GET /users/:id - User detail</span>
│   │   │   └── edit/
│   │   │       └── page.tsx      <span class="cm">// GET /users/:id/edit - Edit user form</span>
│   │   └── create/
│   │       └── page.tsx          <span class="cm">// GET /users/create - Create user form</span>
│   ├── api/
│   │   └── users/
│   │       └── route.ts          <span class="cm">// API route (opsional, untuk external API)</span>
│   └── actions/
│       └── user.ts               <span class="cm">// Server Actions (mutations)</span>
├── components/
│   ├── ui/                       <span class="cm">// shadcn/ui components (Button, Input, Table, dll)</span>
│   ├── UserForm.tsx              <span class="cm">// Form reusable (create &amp; edit)</span>
│   ├── UserTable.tsx             <span class="cm">// Tabel daftar user</span>
│   ├── DeleteButton.tsx          <span class="cm">// Tombol delete dengan konfirmasi</span>
│   └── SearchFilter.tsx          <span class="cm">// Client component: search &amp; filter</span>
├── lib/
│   ├── db.ts                     <span class="cm">// Prisma client singleton</span>
│   ├── auth.ts                   <span class="cm">// NextAuth.js config</span>
│   └── validations.ts            <span class="cm">// Zod schemas</span>
├── prisma/
│   └── schema.prisma             <span class="cm">// Database schema</span>
├── middleware.ts                  <span class="cm">// Auth middleware (protect routes)</span>
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json</div>

    <div class="warn-box">
        <strong>Konvensi Penting:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li><code>page.tsx</code> &mdash; Membuat route yang bisa diakses</li>
            <li><code>layout.tsx</code> &mdash; Shared layout (tidak re-render saat navigasi)</li>
            <li><code>loading.tsx</code> &mdash; Loading UI otomatis (Suspense boundary)</li>
            <li><code>error.tsx</code> &mdash; Error boundary otomatis</li>
            <li><code>not-found.tsx</code> &mdash; 404 page</li>
            <li><code>[param]</code> &mdash; Dynamic route segment</li>
        </ul>
    </div>
</div>

<!-- ============================================================
     BAGIAN 3: PRISMA SCHEMA & DB SETUP
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">3. Database Setup &mdash; Prisma Schema</h2>

<div class="card animate-in">
    <h3>Prisma Schema (Shared antara Next.js dan Nuxt.js)</h3>
    <p>Prisma adalah ORM type-safe untuk TypeScript. Schema berikut mendefinisikan model User yang akan kita gunakan untuk CRUD.</p>

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
    id        <span class="num">String</span>   @id @default(<span class="fn">cuid</span>())
    name      <span class="num">String</span>
    email     <span class="num">String</span>   @unique
    role      <span class="num">Role</span>     @default(USER)
    avatar    <span class="num">String</span>?
    bio       <span class="num">String</span>?
    createdAt <span class="num">DateTime</span> @default(<span class="fn">now</span>())
    updatedAt <span class="num">DateTime</span> @updatedAt
    posts     <span class="fn">Post</span>[]

    @@map(<span class="str">"users"</span>)
}

<span class="kw">model</span> <span class="fn">Post</span> {
    id        <span class="num">String</span>   @id @default(<span class="fn">cuid</span>())
    title     <span class="num">String</span>
    content   <span class="num">String</span>?
    published <span class="num">Boolean</span>  @default(<span class="kw">false</span>)
    authorId  <span class="num">String</span>
    author    <span class="fn">User</span>     @relation(fields: [authorId], references: [id], onDelete: Cascade)
    createdAt <span class="num">DateTime</span> @default(<span class="fn">now</span>())
    updatedAt <span class="num">DateTime</span> @updatedAt

    @@map(<span class="str">"posts"</span>)
}

<span class="kw">enum</span> <span class="fn">Role</span> {
    USER
    ADMIN
    MODERATOR
}</div>
</div>

<div class="card animate-in">
    <h3>Prisma Client Singleton</h3>
    <p>Di development, hot-reload bisa membuat banyak instance Prisma. Pattern singleton mencegah hal ini.</p>

    <div class="code-block">
<span class="cm">// lib/db.ts</span>
<span class="kw">import</span> { PrismaClient } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="cm">// Declare global type untuk development hot-reload</span>
<span class="kw">const</span> globalForPrisma = globalThis <span class="kw">as</span> <span class="kw">unknown</span> <span class="kw">as</span> {
    prisma: PrismaClient | <span class="kw">undefined</span>;
};

<span class="kw">export const</span> db = globalForPrisma.prisma ?? <span class="kw">new</span> <span class="fn">PrismaClient</span>({
    log: process.env.NODE_ENV === <span class="str">"development"</span>
        ? [<span class="str">"query"</span>, <span class="str">"error"</span>, <span class="str">"warn"</span>]
        : [<span class="str">"error"</span>],
});

<span class="kw">if</span> (process.env.NODE_ENV !== <span class="str">"production"</span>) {
    globalForPrisma.prisma = db;
}</div>
</div>

<div class="card animate-in">
    <h3>Zod Validation Schemas</h3>
    <p>Zod digunakan untuk validasi data di <strong>client dan server</strong> &mdash; satu schema untuk keduanya. Ini memastikan data selalu valid sebelum masuk ke database.</p>

    <div class="code-block">
<span class="cm">// lib/validations.ts</span>
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="kw">export const</span> userSchema = z.<span class="fn">object</span>({
    name: z.<span class="fn">string</span>()
        .<span class="fn">min</span>(<span class="num">2</span>, { message: <span class="str">"Nama minimal 2 karakter"</span> })
        .<span class="fn">max</span>(<span class="num">100</span>, { message: <span class="str">"Nama maksimal 100 karakter"</span> }),
    email: z.<span class="fn">string</span>()
        .<span class="fn">email</span>({ message: <span class="str">"Format email tidak valid"</span> }),
    role: z.<span class="fn">enum</span>([<span class="str">"USER"</span>, <span class="str">"ADMIN"</span>, <span class="str">"MODERATOR"</span>], {
        errorMap: () =&gt; ({ message: <span class="str">"Role harus USER, ADMIN, atau MODERATOR"</span> }),
    }),
    bio: z.<span class="fn">string</span>().<span class="fn">max</span>(<span class="num">500</span>).<span class="fn">optional</span>(),
    avatar: z.<span class="fn">string</span>().<span class="fn">url</span>().<span class="fn">optional</span>(),
});

<span class="cm">// Type inference dari Zod schema</span>
<span class="kw">export type</span> UserFormData = z.<span class="fn">infer</span>&lt;<span class="kw">typeof</span> userSchema&gt;;

<span class="cm">// Schema untuk update (semua field optional)</span>
<span class="kw">export const</span> updateUserSchema = userSchema.<span class="fn">partial</span>();

<span class="cm">// Schema untuk search/filter</span>
<span class="kw">export const</span> searchSchema = z.<span class="fn">object</span>({
    query: z.<span class="fn">string</span>().<span class="fn">optional</span>(),
    role: z.<span class="fn">enum</span>([<span class="str">"ALL"</span>, <span class="str">"USER"</span>, <span class="str">"ADMIN"</span>, <span class="str">"MODERATOR"</span>]).<span class="fn">optional</span>(),
    page: z.<span class="fn">coerce</span>.<span class="fn">number</span>().<span class="fn">min</span>(<span class="num">1</span>).<span class="fn">default</span>(<span class="num">1</span>),
    limit: z.<span class="fn">coerce</span>.<span class="fn">number</span>().<span class="fn">min</span>(<span class="num">1</span>).<span class="fn">max</span>(<span class="num">100</span>).<span class="fn">default</span>(<span class="num">10</span>),
});</div>
</div>

<!-- ============================================================
     BAGIAN 4: NEXT.JS SERVER ACTIONS
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">4. Next.js Server Actions &mdash; CRUD Mutations</h2>

<div class="card animate-in">
    <h3>Server Actions: Create, Update, Delete</h3>
    <p>Server Actions adalah fungsi async yang berjalan di <strong>server</strong>. Mereka bisa dipanggil langsung dari Client Components melalui form action atau event handler. Tidak perlu membuat API route terpisah!</p>

    <div class="info-box">
        <strong>Server Actions vs API Routes:</strong> Server Actions lebih sederhana &mdash; tidak perlu fetch(), tidak perlu endpoint URL, langsung panggil fungsi. Next.js otomatis membuat POST endpoint di balik layar dan menangani serialisasi data.
    </div>

    <div class="code-block">
<span class="cm">// app/actions/user.ts</span>
<span class="str">"use server"</span>;

<span class="kw">import</span> { <span class="fn">revalidatePath</span> } <span class="kw">from</span> <span class="str">"next/cache"</span>;
<span class="kw">import</span> { <span class="fn">redirect</span> } <span class="kw">from</span> <span class="str">"next/navigation"</span>;
<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;
<span class="kw">import</span> { userSchema, updateUserSchema } <span class="kw">from</span> <span class="str">"@/lib/validations"</span>;

<span class="cm">// Type untuk form state (dipakai useFormState)</span>
<span class="kw">export type</span> FormState = {
    errors?: Record&lt;<span class="num">string</span>, <span class="num">string</span>[]&gt;;
    message?: <span class="num">string</span>;
    success?: <span class="num">boolean</span>;
};

<span class="cm">// ========== CREATE USER ==========</span>
<span class="kw">export async function</span> <span class="fn">createUser</span>(
    prevState: FormState,
    formData: FormData
): Promise&lt;FormState&gt; {
    <span class="cm">// 1. Parse dan validasi data</span>
    <span class="kw">const</span> rawData = {
        name: formData.<span class="fn">get</span>(<span class="str">"name"</span>) <span class="kw">as</span> <span class="num">string</span>,
        email: formData.<span class="fn">get</span>(<span class="str">"email"</span>) <span class="kw">as</span> <span class="num">string</span>,
        role: formData.<span class="fn">get</span>(<span class="str">"role"</span>) <span class="kw">as</span> <span class="num">string</span>,
        bio: formData.<span class="fn">get</span>(<span class="str">"bio"</span>) <span class="kw">as</span> <span class="num">string</span> || <span class="kw">undefined</span>,
    };

    <span class="kw">const</span> validated = userSchema.<span class="fn">safeParse</span>(rawData);

    <span class="kw">if</span> (!validated.success) {
        <span class="kw">return</span> {
            errors: validated.error.<span class="fn">flatten</span>().fieldErrors,
            message: <span class="str">"Validasi gagal. Periksa kembali form Anda."</span>,
        };
    }

    <span class="cm">// 2. Cek duplicate email</span>
    <span class="kw">const</span> existingUser = <span class="kw">await</span> db.user.<span class="fn">findUnique</span>({
        where: { email: validated.data.email },
    });

    <span class="kw">if</span> (existingUser) {
        <span class="kw">return</span> {
            errors: { email: [<span class="str">"Email sudah terdaftar"</span>] },
            message: <span class="str">"Email sudah digunakan."</span>,
        };
    }

    <span class="cm">// 3. Insert ke database</span>
    <span class="kw">try</span> {
        <span class="kw">await</span> db.user.<span class="fn">create</span>({
            data: validated.data,
        });
    } <span class="kw">catch</span> (error) {
        <span class="kw">return</span> {
            message: <span class="str">"Gagal membuat user. Coba lagi."</span>,
        };
    }

    <span class="cm">// 4. Revalidate cache dan redirect</span>
    <span class="fn">revalidatePath</span>(<span class="str">"/users"</span>);
    <span class="fn">redirect</span>(<span class="str">"/users"</span>);
}

<span class="cm">// ========== UPDATE USER ==========</span>
<span class="kw">export async function</span> <span class="fn">updateUser</span>(
    id: <span class="num">string</span>,
    prevState: FormState,
    formData: FormData
): Promise&lt;FormState&gt; {
    <span class="kw">const</span> rawData = {
        name: formData.<span class="fn">get</span>(<span class="str">"name"</span>) <span class="kw">as</span> <span class="num">string</span>,
        email: formData.<span class="fn">get</span>(<span class="str">"email"</span>) <span class="kw">as</span> <span class="num">string</span>,
        role: formData.<span class="fn">get</span>(<span class="str">"role"</span>) <span class="kw">as</span> <span class="num">string</span>,
        bio: formData.<span class="fn">get</span>(<span class="str">"bio"</span>) <span class="kw">as</span> <span class="num">string</span> || <span class="kw">undefined</span>,
    };

    <span class="kw">const</span> validated = updateUserSchema.<span class="fn">safeParse</span>(rawData);

    <span class="kw">if</span> (!validated.success) {
        <span class="kw">return</span> {
            errors: validated.error.<span class="fn">flatten</span>().fieldErrors,
            message: <span class="str">"Validasi gagal."</span>,
        };
    }

    <span class="kw">try</span> {
        <span class="kw">await</span> db.user.<span class="fn">update</span>({
            where: { id },
            data: validated.data,
        });
    } <span class="kw">catch</span> (error) {
        <span class="kw">return</span> { message: <span class="str">"Gagal memperbarui user."</span> };
    }

    <span class="fn">revalidatePath</span>(<span class="str">"/users"</span>);
    <span class="fn">revalidatePath</span>(<span class="str">"/users/"</span> + id);
    <span class="fn">redirect</span>(<span class="str">"/users/"</span> + id);
}

<span class="cm">// ========== DELETE USER ==========</span>
<span class="kw">export async function</span> <span class="fn">deleteUser</span>(id: <span class="num">string</span>): Promise&lt;FormState&gt; {
    <span class="kw">try</span> {
        <span class="kw">await</span> db.user.<span class="fn">delete</span>({
            where: { id },
        });
    } <span class="kw">catch</span> (error) {
        <span class="kw">return</span> { message: <span class="str">"Gagal menghapus user."</span> };
    }

    <span class="fn">revalidatePath</span>(<span class="str">"/users"</span>);
    <span class="fn">redirect</span>(<span class="str">"/users"</span>);
}</div>

    <div class="warn-box">
        <strong>Penting tentang Server Actions:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li><code>"use server"</code> di baris pertama file menandai SEMUA export sebagai Server Action</li>
            <li>Server Actions bisa menerima <code>FormData</code> (dari form) atau argumen biasa (dari event handler)</li>
            <li><code>revalidatePath()</code> membersihkan cache Next.js sehingga data terbaru ditampilkan</li>
            <li><code>redirect()</code> harus dipanggil di LUAR try/catch (karena redirect melempar error khusus)</li>
            <li>Server Actions otomatis menangani CSRF protection</li>
        </ul>
    </div>
</div>

<!-- ============================================================
     BAGIAN 5: NEXT.JS LIST PAGE (SERVER COMPONENT)
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">5. Next.js &mdash; Read (List Users)</h2>

<div class="card animate-in">
    <h3>Server Component: List Users Page</h3>
    <p>Halaman list menggunakan <strong>Server Component</strong> &mdash; data di-fetch langsung dari database tanpa API call. Ini lebih cepat dan lebih aman karena query database tidak pernah sampai ke client.</p>

    <div class="code-block">
<span class="cm">// app/users/page.tsx (Server Component - default)</span>
<span class="kw">import</span> { Suspense } <span class="kw">from</span> <span class="str">"react"</span>;
<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;
<span class="kw">import</span> { UserTable } <span class="kw">from</span> <span class="str">"@/components/UserTable"</span>;
<span class="kw">import</span> { SearchFilter } <span class="kw">from</span> <span class="str">"@/components/SearchFilter"</span>;
<span class="kw">import</span> Link <span class="kw">from</span> <span class="str">"next/link"</span>;

<span class="kw">interface</span> UsersPageProps {
    searchParams: {
        query?: <span class="num">string</span>;
        role?: <span class="num">string</span>;
        page?: <span class="num">string</span>;
    };
}

<span class="kw">export default async function</span> <span class="fn">UsersPage</span>({ searchParams }: UsersPageProps) {
    <span class="kw">const</span> query = searchParams.query || <span class="str">""</span>;
    <span class="kw">const</span> role = searchParams.role || <span class="str">"ALL"</span>;
    <span class="kw">const</span> page = <span class="fn">Number</span>(searchParams.page) || <span class="num">1</span>;
    <span class="kw">const</span> limit = <span class="num">10</span>;

    <span class="cm">// Build where clause</span>
    <span class="kw">const</span> where = {
        ...(query &amp;&amp; {
            OR: [
                { name: { contains: query, mode: <span class="str">"insensitive"</span> } },
                { email: { contains: query, mode: <span class="str">"insensitive"</span> } },
            ],
        }),
        ...(role !== <span class="str">"ALL"</span> &amp;&amp; { role: role }),
    };

    <span class="cm">// Parallel queries: data + count</span>
    <span class="kw">const</span> [users, totalCount] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
        db.user.<span class="fn">findMany</span>({
            where,
            orderBy: { createdAt: <span class="str">"desc"</span> },
            skip: (page - <span class="num">1</span>) * limit,
            take: limit,
        }),
        db.user.<span class="fn">count</span>({ where }),
    ]);

    <span class="kw">const</span> totalPages = Math.<span class="fn">ceil</span>(totalCount / limit);

    <span class="kw">return</span> (
        &lt;div className=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
            &lt;div className=<span class="str">"flex justify-between items-center mb-6"</span>&gt;
                &lt;h1 className=<span class="str">"text-3xl font-bold"</span>&gt;Users&lt;/h1&gt;
                &lt;Link
                    href=<span class="str">"/users/create"</span>
                    className=<span class="str">"bg-blue-600 text-white px-4 py-2 rounded-lg"</span>
                &gt;
                    + Tambah User
                &lt;/Link&gt;
            &lt;/div&gt;

            {<span class="cm">/* Client Component untuk search */</span>}
            &lt;SearchFilter /&gt;

            {<span class="cm">/* Suspense boundary untuk loading state */</span>}
            &lt;Suspense fallback={&lt;TableSkeleton /&gt;}&gt;
                &lt;UserTable
                    users={users}
                    totalPages={totalPages}
                    currentPage={page}
                /&gt;
            &lt;/Suspense&gt;
        &lt;/div&gt;
    );
}

<span class="cm">// Skeleton loading component</span>
<span class="kw">function</span> <span class="fn">TableSkeleton</span>() {
    <span class="kw">return</span> (
        &lt;div className=<span class="str">"animate-pulse space-y-3"</span>&gt;
            {Array.<span class="fn">from</span>({ length: <span class="num">5</span> }).<span class="fn">map</span>((_, i) =&gt; (
                &lt;div key={i} className=<span class="str">"h-16 bg-gray-200 rounded"</span> /&gt;
            ))}
        &lt;/div&gt;
    );
}</div>
</div>

<div class="card animate-in">
    <h3>Loading State: loading.tsx</h3>
    <p>Next.js secara otomatis membungkus page dengan <code>Suspense</code>. Buat file <code>loading.tsx</code> untuk menampilkan skeleton saat data loading.</p>

    <div class="code-block">
<span class="cm">// app/users/loading.tsx</span>
<span class="kw">export default function</span> <span class="fn">UsersLoading</span>() {
    <span class="kw">return</span> (
        &lt;div className=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
            &lt;div className=<span class="str">"animate-pulse"</span>&gt;
                &lt;div className=<span class="str">"h-10 bg-gray-200 rounded w-48 mb-6"</span> /&gt;
                &lt;div className=<span class="str">"h-12 bg-gray-200 rounded mb-4"</span> /&gt;
                &lt;div className=<span class="str">"space-y-3"</span>&gt;
                    {Array.<span class="fn">from</span>({ length: <span class="num">5</span> }).<span class="fn">map</span>((_, i) =&gt; (
                        &lt;div key={i} className=<span class="str">"h-16 bg-gray-200 rounded"</span> /&gt;
                    ))}
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    );
}</div>
</div>

<div class="card animate-in">
    <h3>Error Boundary: error.tsx</h3>

    <div class="code-block">
<span class="cm">// app/users/error.tsx</span>
<span class="str">"use client"</span>; <span class="cm">// Error boundaries HARUS client component</span>

<span class="kw">interface</span> ErrorProps {
    error: Error &amp; { digest?: <span class="num">string</span> };
    reset: () =&gt; <span class="num">void</span>;
}

<span class="kw">export default function</span> <span class="fn">UsersError</span>({ error, reset }: ErrorProps) {
    <span class="kw">return</span> (
        &lt;div className=<span class="str">"container mx-auto py-8 px-4 text-center"</span>&gt;
            &lt;h2 className=<span class="str">"text-2xl font-bold text-red-600 mb-4"</span>&gt;
                Terjadi Kesalahan
            &lt;/h2&gt;
            &lt;p className=<span class="str">"text-gray-600 mb-4"</span>&gt;
                {error.message || <span class="str">"Tidak dapat memuat data users."</span>}
            &lt;/p&gt;
            &lt;button
                onClick={() =&gt; <span class="fn">reset</span>()}
                className=<span class="str">"bg-blue-600 text-white px-4 py-2 rounded-lg"</span>
            &gt;
                Coba Lagi
            &lt;/button&gt;
        &lt;/div&gt;
    );
}</div>
</div>

<!-- ============================================================
     BAGIAN 6: NEXT.JS CREATE & EDIT FORMS
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">6. Next.js &mdash; Create &amp; Edit Forms</h2>

<div class="card animate-in">
    <h3>Reusable UserForm Component (Client Component)</h3>
    <p>Form ini digunakan untuk Create dan Edit. Menggunakan <code>useFormState</code> untuk menangani Server Action response dan <code>useFormStatus</code> untuk loading state tombol submit.</p>

    <div class="code-block">
<span class="cm">// components/UserForm.tsx</span>
<span class="str">"use client"</span>;

<span class="kw">import</span> { useFormState, useFormStatus } <span class="kw">from</span> <span class="str">"react-dom"</span>;
<span class="kw">import</span> { useRef } <span class="kw">from</span> <span class="str">"react"</span>;
<span class="kw">import</span> <span class="kw">type</span> { User } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;
<span class="kw">import</span> <span class="kw">type</span> { FormState } <span class="kw">from</span> <span class="str">"@/app/actions/user"</span>;

<span class="kw">interface</span> UserFormProps {
    user?: User;                   <span class="cm">// undefined = create mode, ada = edit mode</span>
    action: (
        prevState: FormState,
        formData: FormData
    ) =&gt; Promise&lt;FormState&gt;;
}

<span class="kw">const</span> initialState: FormState = {
    errors: {},
    message: <span class="str">""</span>,
};

<span class="kw">export function</span> <span class="fn">UserForm</span>({ user, action }: UserFormProps) {
    <span class="kw">const</span> [state, formAction] = <span class="fn">useFormState</span>(action, initialState);
    <span class="kw">const</span> formRef = <span class="fn">useRef</span>&lt;HTMLFormElement&gt;(<span class="kw">null</span>);

    <span class="kw">return</span> (
        &lt;form ref={formRef} action={formAction} className=<span class="str">"space-y-6 max-w-lg"</span>&gt;
            {<span class="cm">/* Error message */</span>}
            {state.message &amp;&amp; (
                &lt;div className=<span class="str">"bg-red-50 text-red-600 p-3 rounded-lg"</span>&gt;
                    {state.message}
                &lt;/div&gt;
            )}

            {<span class="cm">/* Name field */</span>}
            &lt;div&gt;
                &lt;label htmlFor=<span class="str">"name"</span> className=<span class="str">"block font-medium mb-1"</span>&gt;
                    Nama
                &lt;/label&gt;
                &lt;input
                    id=<span class="str">"name"</span>
                    name=<span class="str">"name"</span>
                    type=<span class="str">"text"</span>
                    defaultValue={user?.name || <span class="str">""</span>}
                    className=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
                    required
                /&gt;
                {state.errors?.name &amp;&amp; (
                    &lt;p className=<span class="str">"text-red-500 text-sm mt-1"</span>&gt;
                        {state.errors.name[<span class="num">0</span>]}
                    &lt;/p&gt;
                )}
            &lt;/div&gt;

            {<span class="cm">/* Email field */</span>}
            &lt;div&gt;
                &lt;label htmlFor=<span class="str">"email"</span> className=<span class="str">"block font-medium mb-1"</span>&gt;
                    Email
                &lt;/label&gt;
                &lt;input
                    id=<span class="str">"email"</span>
                    name=<span class="str">"email"</span>
                    type=<span class="str">"email"</span>
                    defaultValue={user?.email || <span class="str">""</span>}
                    className=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
                    required
                /&gt;
                {state.errors?.email &amp;&amp; (
                    &lt;p className=<span class="str">"text-red-500 text-sm mt-1"</span>&gt;
                        {state.errors.email[<span class="num">0</span>]}
                    &lt;/p&gt;
                )}
            &lt;/div&gt;

            {<span class="cm">/* Role field */</span>}
            &lt;div&gt;
                &lt;label htmlFor=<span class="str">"role"</span> className=<span class="str">"block font-medium mb-1"</span>&gt;
                    Role
                &lt;/label&gt;
                &lt;select
                    id=<span class="str">"role"</span>
                    name=<span class="str">"role"</span>
                    defaultValue={user?.role || <span class="str">"USER"</span>}
                    className=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
                &gt;
                    &lt;option value=<span class="str">"USER"</span>&gt;User&lt;/option&gt;
                    &lt;option value=<span class="str">"ADMIN"</span>&gt;Admin&lt;/option&gt;
                    &lt;option value=<span class="str">"MODERATOR"</span>&gt;Moderator&lt;/option&gt;
                &lt;/select&gt;
            &lt;/div&gt;

            {<span class="cm">/* Bio field */</span>}
            &lt;div&gt;
                &lt;label htmlFor=<span class="str">"bio"</span> className=<span class="str">"block font-medium mb-1"</span>&gt;
                    Bio (opsional)
                &lt;/label&gt;
                &lt;textarea
                    id=<span class="str">"bio"</span>
                    name=<span class="str">"bio"</span>
                    rows={<span class="num">3</span>}
                    defaultValue={user?.bio || <span class="str">""</span>}
                    className=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
                /&gt;
            &lt;/div&gt;

            {<span class="cm">/* Submit button with loading state */</span>}
            &lt;SubmitButton isEdit={!!user} /&gt;
        &lt;/form&gt;
    );
}

<span class="cm">// Komponen terpisah untuk memanfaatkan useFormStatus</span>
<span class="kw">function</span> <span class="fn">SubmitButton</span>({ isEdit }: { isEdit: <span class="num">boolean</span> }) {
    <span class="kw">const</span> { pending } = <span class="fn">useFormStatus</span>();

    <span class="kw">return</span> (
        &lt;button
            type=<span class="str">"submit"</span>
            disabled={pending}
            className=<span class="str">"bg-blue-600 text-white px-6 py-2 rounded-lg
                       disabled:opacity-50 disabled:cursor-not-allowed"</span>
        &gt;
            {pending
                ? <span class="str">"Menyimpan..."</span>
                : isEdit
                    ? <span class="str">"Update User"</span>
                    : <span class="str">"Buat User"</span>
            }
        &lt;/button&gt;
    );
}</div>
</div>

<div class="card animate-in">
    <h3>Create Page</h3>
    <div class="code-block">
<span class="cm">// app/users/create/page.tsx</span>
<span class="kw">import</span> { UserForm } <span class="kw">from</span> <span class="str">"@/components/UserForm"</span>;
<span class="kw">import</span> { createUser } <span class="kw">from</span> <span class="str">"@/app/actions/user"</span>;

<span class="kw">export default function</span> <span class="fn">CreateUserPage</span>() {
    <span class="kw">return</span> (
        &lt;div className=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
            &lt;h1 className=<span class="str">"text-3xl font-bold mb-6"</span>&gt;Buat User Baru&lt;/h1&gt;
            &lt;UserForm action={createUser} /&gt;
        &lt;/div&gt;
    );
}</div>
</div>

<div class="card animate-in">
    <h3>Edit Page (Pre-filled Form)</h3>
    <div class="code-block">
<span class="cm">// app/users/[id]/edit/page.tsx</span>
<span class="kw">import</span> { <span class="fn">notFound</span> } <span class="kw">from</span> <span class="str">"next/navigation"</span>;
<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;
<span class="kw">import</span> { UserForm } <span class="kw">from</span> <span class="str">"@/components/UserForm"</span>;
<span class="kw">import</span> { updateUser } <span class="kw">from</span> <span class="str">"@/app/actions/user"</span>;

<span class="kw">interface</span> EditPageProps {
    params: { id: <span class="num">string</span> };
}

<span class="kw">export default async function</span> <span class="fn">EditUserPage</span>({ params }: EditPageProps) {
    <span class="kw">const</span> user = <span class="kw">await</span> db.user.<span class="fn">findUnique</span>({
        where: { id: params.id },
    });

    <span class="kw">if</span> (!user) <span class="fn">notFound</span>();

    <span class="cm">// Bind user ID ke Server Action menggunakan .bind()</span>
    <span class="kw">const</span> updateUserWithId = updateUser.<span class="fn">bind</span>(<span class="kw">null</span>, user.id);

    <span class="kw">return</span> (
        &lt;div className=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
            &lt;h1 className=<span class="str">"text-3xl font-bold mb-6"</span>&gt;
                Edit: {user.name}
            &lt;/h1&gt;
            &lt;UserForm user={user} action={updateUserWithId} /&gt;
        &lt;/div&gt;
    );
}</div>

    <div class="info-box">
        <strong>Pattern: .bind() untuk Server Actions</strong> &mdash; Ketika Server Action membutuhkan parameter tambahan (seperti ID), gunakan <code>.bind(null, id)</code> untuk membuat versi baru dari action yang sudah ter-bind dengan ID. Ini aman karena ID dikirim sebagai argumen terenkripsi, bukan sebagai hidden input yang bisa dimanipulasi.
    </div>
</div>

<!-- ============================================================
     BAGIAN 7: NEXT.JS DELETE & OPTIMISTIC UPDATES
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">7. Next.js &mdash; Delete &amp; Optimistic Updates</h2>

<div class="card animate-in">
    <h3>Delete Button dengan Konfirmasi</h3>

    <div class="code-block">
<span class="cm">// components/DeleteButton.tsx</span>
<span class="str">"use client"</span>;

<span class="kw">import</span> { useTransition } <span class="kw">from</span> <span class="str">"react"</span>;
<span class="kw">import</span> { deleteUser } <span class="kw">from</span> <span class="str">"@/app/actions/user"</span>;

<span class="kw">interface</span> DeleteButtonProps {
    userId: <span class="num">string</span>;
    userName: <span class="num">string</span>;
}

<span class="kw">export function</span> <span class="fn">DeleteButton</span>({ userId, userName }: DeleteButtonProps) {
    <span class="kw">const</span> [isPending, startTransition] = <span class="fn">useTransition</span>();

    <span class="kw">function</span> <span class="fn">handleDelete</span>() {
        <span class="kw">const</span> confirmed = <span class="fn">confirm</span>(
            <span class="str">"Hapus user "</span> + userName + <span class="str">"? Aksi ini tidak bisa dibatalkan."</span>
        );
        <span class="kw">if</span> (!confirmed) <span class="kw">return</span>;

        <span class="fn">startTransition</span>(<span class="kw">async</span> () =&gt; {
            <span class="kw">await</span> <span class="fn">deleteUser</span>(userId);
        });
    }

    <span class="kw">return</span> (
        &lt;button
            onClick={handleDelete}
            disabled={isPending}
            className=<span class="str">"text-red-600 hover:text-red-800 disabled:opacity-50"</span>
        &gt;
            {isPending ? <span class="str">"Menghapus..."</span> : <span class="str">"Hapus"</span>}
        &lt;/button&gt;
    );
}</div>
</div>

<div class="card animate-in">
    <h3>Optimistic Updates dengan useOptimistic</h3>
    <p><code>useOptimistic</code> memungkinkan UI diperbarui <strong>sebelum</strong> Server Action selesai, memberikan pengalaman yang lebih responsif. Jika action gagal, React otomatis revert ke state sebelumnya.</p>

    <div class="code-block">
<span class="cm">// components/UserTable.tsx (dengan Optimistic Delete)</span>
<span class="str">"use client"</span>;

<span class="kw">import</span> { useOptimistic, useTransition } <span class="kw">from</span> <span class="str">"react"</span>;
<span class="kw">import</span> { deleteUser } <span class="kw">from</span> <span class="str">"@/app/actions/user"</span>;
<span class="kw">import</span> Link <span class="kw">from</span> <span class="str">"next/link"</span>;
<span class="kw">import</span> <span class="kw">type</span> { User } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">interface</span> UserTableProps {
    users: User[];
    totalPages: <span class="num">number</span>;
    currentPage: <span class="num">number</span>;
}

<span class="kw">export function</span> <span class="fn">UserTable</span>({ users, totalPages, currentPage }: UserTableProps) {
    <span class="kw">const</span> [isPending, startTransition] = <span class="fn">useTransition</span>();

    <span class="cm">// Optimistic state: langsung hapus dari UI</span>
    <span class="kw">const</span> [optimisticUsers, removeOptimistic] = <span class="fn">useOptimistic</span>(
        users,
        (currentUsers: User[], deletedId: <span class="num">string</span>) =&gt;
            currentUsers.<span class="fn">filter</span>((u) =&gt; u.id !== deletedId)
    );

    <span class="kw">function</span> <span class="fn">handleDelete</span>(id: <span class="num">string</span>, name: <span class="num">string</span>) {
        <span class="kw">if</span> (!<span class="fn">confirm</span>(<span class="str">"Hapus "</span> + name + <span class="str">"?"</span>)) <span class="kw">return</span>;

        <span class="fn">startTransition</span>(<span class="kw">async</span> () =&gt; {
            <span class="fn">removeOptimistic</span>(id);  <span class="cm">// Langsung hapus dari UI</span>
            <span class="kw">await</span> <span class="fn">deleteUser</span>(id);   <span class="cm">// Kemudian hapus dari DB</span>
        });
    }

    <span class="kw">return</span> (
        &lt;div className=<span class="str">"overflow-x-auto"</span>&gt;
            &lt;table className=<span class="str">"w-full border-collapse"</span>&gt;
                &lt;thead&gt;
                    &lt;tr className=<span class="str">"border-b bg-gray-50"</span>&gt;
                        &lt;th className=<span class="str">"text-left p-3"</span>&gt;Nama&lt;/th&gt;
                        &lt;th className=<span class="str">"text-left p-3"</span>&gt;Email&lt;/th&gt;
                        &lt;th className=<span class="str">"text-left p-3"</span>&gt;Role&lt;/th&gt;
                        &lt;th className=<span class="str">"text-left p-3"</span>&gt;Tanggal&lt;/th&gt;
                        &lt;th className=<span class="str">"text-right p-3"</span>&gt;Aksi&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/thead&gt;
                &lt;tbody&gt;
                    {optimisticUsers.<span class="fn">map</span>((user) =&gt; (
                        &lt;tr key={user.id} className=<span class="str">"border-b hover:bg-gray-50"</span>&gt;
                            &lt;td className=<span class="str">"p-3 font-medium"</span>&gt;
                                &lt;Link href={<span class="str">"/users/"</span> + user.id}
                                       className=<span class="str">"text-blue-600 hover:underline"</span>&gt;
                                    {user.name}
                                &lt;/Link&gt;
                            &lt;/td&gt;
                            &lt;td className=<span class="str">"p-3"</span>&gt;{user.email}&lt;/td&gt;
                            &lt;td className=<span class="str">"p-3"</span>&gt;
                                &lt;span className=<span class="str">"px-2 py-1 rounded text-xs font-medium bg-blue-100"</span>&gt;
                                    {user.role}
                                &lt;/span&gt;
                            &lt;/td&gt;
                            &lt;td className=<span class="str">"p-3 text-gray-500"</span>&gt;
                                {<span class="kw">new</span> <span class="fn">Date</span>(user.createdAt).<span class="fn">toLocaleDateString</span>(<span class="str">"id-ID"</span>)}
                            &lt;/td&gt;
                            &lt;td className=<span class="str">"p-3 text-right space-x-2"</span>&gt;
                                &lt;Link href={<span class="str">"/users/"</span> + user.id + <span class="str">"/edit"</span>}
                                       className=<span class="str">"text-blue-600 hover:underline"</span>&gt;
                                    Edit
                                &lt;/Link&gt;
                                &lt;button
                                    onClick={() =&gt; <span class="fn">handleDelete</span>(user.id, user.name)}
                                    className=<span class="str">"text-red-600 hover:underline"</span>
                                &gt;
                                    Hapus
                                &lt;/button&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                    ))}
                &lt;/tbody&gt;
            &lt;/table&gt;
        &lt;/div&gt;
    );
}</div>
</div>

<!-- ============================================================
     BAGIAN 8: NEXT.JS SEARCH & FILTER
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">8. Next.js &mdash; Search &amp; Filter (Client Component)</h2>

<div class="card animate-in">
    <h3>Debounced Search with URL Params</h3>
    <p>Search menggunakan URL search params (bukan local state) sehingga bisa di-bookmark dan shareable. Menggunakan <strong>debounce</strong> agar tidak mengirim request setiap keystroke.</p>

    <div class="code-block">
<span class="cm">// components/SearchFilter.tsx</span>
<span class="str">"use client"</span>;

<span class="kw">import</span> { useSearchParams, useRouter, usePathname } <span class="kw">from</span> <span class="str">"next/navigation"</span>;
<span class="kw">import</span> { useCallback, useRef } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">export function</span> <span class="fn">SearchFilter</span>() {
    <span class="kw">const</span> searchParams = <span class="fn">useSearchParams</span>();
    <span class="kw">const</span> router = <span class="fn">useRouter</span>();
    <span class="kw">const</span> pathname = <span class="fn">usePathname</span>();
    <span class="kw">const</span> timerRef = <span class="fn">useRef</span>&lt;NodeJS.Timeout&gt;();

    <span class="cm">// Debounced URL update</span>
    <span class="kw">const</span> updateSearch = <span class="fn">useCallback</span>(
        (key: <span class="num">string</span>, value: <span class="num">string</span>) =&gt; {
            <span class="kw">const</span> params = <span class="kw">new</span> <span class="fn">URLSearchParams</span>(searchParams.<span class="fn">toString</span>());
            <span class="kw">if</span> (value) {
                params.<span class="fn">set</span>(key, value);
            } <span class="kw">else</span> {
                params.<span class="fn">delete</span>(key);
            }
            params.<span class="fn">set</span>(<span class="str">"page"</span>, <span class="str">"1"</span>); <span class="cm">// Reset ke page 1 saat search berubah</span>
            router.<span class="fn">push</span>(pathname + <span class="str">"?"</span> + params.<span class="fn">toString</span>());
        },
        [searchParams, router, pathname]
    );

    <span class="kw">function</span> <span class="fn">handleSearch</span>(value: <span class="num">string</span>) {
        <span class="fn">clearTimeout</span>(timerRef.current);
        timerRef.current = <span class="fn">setTimeout</span>(() =&gt; {
            <span class="fn">updateSearch</span>(<span class="str">"query"</span>, value);
        }, <span class="num">300</span>); <span class="cm">// Debounce 300ms</span>
    }

    <span class="kw">return</span> (
        &lt;div className=<span class="str">"flex gap-4 mb-6"</span>&gt;
            &lt;input
                type=<span class="str">"search"</span>
                placeholder=<span class="str">"Cari nama atau email..."</span>
                defaultValue={searchParams.<span class="fn">get</span>(<span class="str">"query"</span>) || <span class="str">""</span>}
                onChange={(e) =&gt; <span class="fn">handleSearch</span>(e.target.value)}
                className=<span class="str">"flex-1 border rounded-lg px-3 py-2"</span>
            /&gt;
            &lt;select
                defaultValue={searchParams.<span class="fn">get</span>(<span class="str">"role"</span>) || <span class="str">"ALL"</span>}
                onChange={(e) =&gt; <span class="fn">updateSearch</span>(<span class="str">"role"</span>, e.target.value)}
                className=<span class="str">"border rounded-lg px-3 py-2"</span>
            &gt;
                &lt;option value=<span class="str">"ALL"</span>&gt;Semua Role&lt;/option&gt;
                &lt;option value=<span class="str">"USER"</span>&gt;User&lt;/option&gt;
                &lt;option value=<span class="str">"ADMIN"</span>&gt;Admin&lt;/option&gt;
                &lt;option value=<span class="str">"MODERATOR"</span>&gt;Moderator&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
    );
}</div>
</div>

<!-- ============================================================
     BAGIAN 9: NEXT.JS AUTH (NextAuth.js v5)
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">9. Next.js &mdash; Authentication (NextAuth.js v5)</h2>

<div class="card animate-in">
    <h3>Setup NextAuth.js v5 (Auth.js)</h3>
    <p>NextAuth.js v5 (juga disebut Auth.js) menyediakan autentikasi yang terintegrasi dengan Next.js App Router, termasuk support untuk Server Components dan middleware.</p>

    <div class="code-block">
<span class="cm">// lib/auth.ts</span>
<span class="kw">import</span> NextAuth <span class="kw">from</span> <span class="str">"next-auth"</span>;
<span class="kw">import</span> Credentials <span class="kw">from</span> <span class="str">"next-auth/providers/credentials"</span>;
<span class="kw">import</span> GitHub <span class="kw">from</span> <span class="str">"next-auth/providers/github"</span>;
<span class="kw">import</span> Google <span class="kw">from</span> <span class="str">"next-auth/providers/google"</span>;
<span class="kw">import</span> { PrismaAdapter } <span class="kw">from</span> <span class="str">"@auth/prisma-adapter"</span>;
<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;
<span class="kw">import</span> bcrypt <span class="kw">from</span> <span class="str">"bcryptjs"</span>;

<span class="kw">export const</span> { handlers, auth, signIn, signOut } = <span class="fn">NextAuth</span>({
    adapter: <span class="fn">PrismaAdapter</span>(db),
    session: { strategy: <span class="str">"jwt"</span> },
    pages: {
        signIn: <span class="str">"/login"</span>,
    },
    providers: [
        <span class="fn">GitHub</span>({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        <span class="fn">Google</span>({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        <span class="fn">Credentials</span>({
            name: <span class="str">"credentials"</span>,
            credentials: {
                email: { label: <span class="str">"Email"</span>, type: <span class="str">"email"</span> },
                password: { label: <span class="str">"Password"</span>, type: <span class="str">"password"</span> },
            },
            <span class="kw">async</span> <span class="fn">authorize</span>(credentials) {
                <span class="kw">if</span> (!credentials?.email || !credentials?.password) {
                    <span class="kw">return null</span>;
                }

                <span class="kw">const</span> user = <span class="kw">await</span> db.user.<span class="fn">findUnique</span>({
                    where: { email: credentials.email <span class="kw">as</span> <span class="num">string</span> },
                });

                <span class="kw">if</span> (!user || !user.password) <span class="kw">return null</span>;

                <span class="kw">const</span> isValid = <span class="kw">await</span> bcrypt.<span class="fn">compare</span>(
                    credentials.password <span class="kw">as</span> <span class="num">string</span>,
                    user.password
                );

                <span class="kw">if</span> (!isValid) <span class="kw">return null</span>;

                <span class="kw">return</span> {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        <span class="kw">async</span> <span class="fn">jwt</span>({ token, user }) {
            <span class="kw">if</span> (user) {
                token.role = user.role;
            }
            <span class="kw">return</span> token;
        },
        <span class="kw">async</span> <span class="fn">session</span>({ session, token }) {
            <span class="kw">if</span> (session.user) {
                session.user.id = token.sub;
                session.user.role = token.role;
            }
            <span class="kw">return</span> session;
        },
    },
});</div>
</div>

<div class="card animate-in">
    <h3>Middleware: Protect Routes</h3>

    <div class="code-block">
<span class="cm">// middleware.ts (root of project)</span>
<span class="kw">import</span> { auth } <span class="kw">from</span> <span class="str">"@/lib/auth"</span>;
<span class="kw">import</span> { NextResponse } <span class="kw">from</span> <span class="str">"next/server"</span>;

<span class="kw">export default</span> <span class="fn">auth</span>((req) =&gt; {
    <span class="kw">const</span> isLoggedIn = !!req.auth;
    <span class="kw">const</span> isOnDashboard = req.nextUrl.pathname.<span class="fn">startsWith</span>(<span class="str">"/users"</span>);
    <span class="kw">const</span> isOnLogin = req.nextUrl.pathname.<span class="fn">startsWith</span>(<span class="str">"/login"</span>);

    <span class="cm">// Redirect unauthenticated users ke login</span>
    <span class="kw">if</span> (isOnDashboard &amp;&amp; !isLoggedIn) {
        <span class="kw">return</span> NextResponse.<span class="fn">redirect</span>(
            <span class="kw">new</span> <span class="fn">URL</span>(<span class="str">"/login"</span>, req.nextUrl)
        );
    }

    <span class="cm">// Redirect authenticated users dari login ke dashboard</span>
    <span class="kw">if</span> (isOnLogin &amp;&amp; isLoggedIn) {
        <span class="kw">return</span> NextResponse.<span class="fn">redirect</span>(
            <span class="kw">new</span> <span class="fn">URL</span>(<span class="str">"/users"</span>, req.nextUrl)
        );
    }

    <span class="kw">return</span> NextResponse.<span class="fn">next</span>();
});

<span class="kw">export const</span> config = {
    matcher: [<span class="str">"/users/:path*"</span>, <span class="str">"/login"</span>],
};</div>
</div>

<div class="card animate-in">
    <h3>Session di Server Component</h3>

    <div class="code-block">
<span class="cm">// app/users/page.tsx - Menggunakan session di Server Component</span>
<span class="kw">import</span> { auth } <span class="kw">from</span> <span class="str">"@/lib/auth"</span>;
<span class="kw">import</span> { <span class="fn">redirect</span> } <span class="kw">from</span> <span class="str">"next/navigation"</span>;

<span class="kw">export default async function</span> <span class="fn">UsersPage</span>() {
    <span class="kw">const</span> session = <span class="kw">await</span> <span class="fn">auth</span>();

    <span class="kw">if</span> (!session) <span class="fn">redirect</span>(<span class="str">"/login"</span>);

    <span class="cm">// session.user.role tersedia karena callback jwt/session</span>
    <span class="kw">const</span> isAdmin = session.user.role === <span class="str">"ADMIN"</span>;

    <span class="kw">return</span> (
        &lt;div&gt;
            &lt;p&gt;Selamat datang, {session.user.name}!&lt;/p&gt;
            {isAdmin &amp;&amp; (
                &lt;p className=<span class="str">"text-yellow-600"</span>&gt;
                    Anda memiliki akses Admin
                &lt;/p&gt;
            )}
            {<span class="cm">/* ... rest of the page */</span>}
        &lt;/div&gt;
    );
}</div>
</div>

<!-- ============================================================
     BAGIAN 10: NEXT.JS API ROUTE (OPTIONAL)
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">10. Next.js &mdash; API Routes (Route Handlers)</h2>

<div class="card animate-in">
    <h3>Route Handlers (untuk External API / Mobile)</h3>
    <p>Jika aplikasi Anda juga dikonsumsi oleh mobile app atau pihak ketiga, gunakan Route Handlers. Untuk internal CRUD, Server Actions lebih disarankan.</p>

    <div class="code-block">
<span class="cm">// app/api/users/route.ts</span>
<span class="kw">import</span> { NextRequest, NextResponse } <span class="kw">from</span> <span class="str">"next/server"</span>;
<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;
<span class="kw">import</span> { userSchema } <span class="kw">from</span> <span class="str">"@/lib/validations"</span>;

<span class="cm">// GET /api/users - List all users</span>
<span class="kw">export async function</span> <span class="fn">GET</span>(request: NextRequest) {
    <span class="kw">const</span> searchParams = request.nextUrl.searchParams;
    <span class="kw">const</span> query = searchParams.<span class="fn">get</span>(<span class="str">"query"</span>) || <span class="str">""</span>;
    <span class="kw">const</span> page = <span class="fn">Number</span>(searchParams.<span class="fn">get</span>(<span class="str">"page"</span>)) || <span class="num">1</span>;
    <span class="kw">const</span> limit = <span class="num">10</span>;

    <span class="kw">try</span> {
        <span class="kw">const</span> users = <span class="kw">await</span> db.user.<span class="fn">findMany</span>({
            where: query ? {
                OR: [
                    { name: { contains: query, mode: <span class="str">"insensitive"</span> } },
                    { email: { contains: query, mode: <span class="str">"insensitive"</span> } },
                ],
            } : <span class="kw">undefined</span>,
            skip: (page - <span class="num">1</span>) * limit,
            take: limit,
            orderBy: { createdAt: <span class="str">"desc"</span> },
        });

        <span class="kw">return</span> NextResponse.<span class="fn">json</span>({ users, page, limit });
    } <span class="kw">catch</span> (error) {
        <span class="kw">return</span> NextResponse.<span class="fn">json</span>(
            { error: <span class="str">"Gagal mengambil data"</span> },
            { status: <span class="num">500</span> }
        );
    }
}

<span class="cm">// POST /api/users - Create user</span>
<span class="kw">export async function</span> <span class="fn">POST</span>(request: NextRequest) {
    <span class="kw">try</span> {
        <span class="kw">const</span> body = <span class="kw">await</span> request.<span class="fn">json</span>();
        <span class="kw">const</span> validated = userSchema.<span class="fn">safeParse</span>(body);

        <span class="kw">if</span> (!validated.success) {
            <span class="kw">return</span> NextResponse.<span class="fn">json</span>(
                { errors: validated.error.<span class="fn">flatten</span>().fieldErrors },
                { status: <span class="num">400</span> }
            );
        }

        <span class="kw">const</span> user = <span class="kw">await</span> db.user.<span class="fn">create</span>({
            data: validated.data,
        });

        <span class="kw">return</span> NextResponse.<span class="fn">json</span>(user, { status: <span class="num">201</span> });
    } <span class="kw">catch</span> (error) {
        <span class="kw">return</span> NextResponse.<span class="fn">json</span>(
            { error: <span class="str">"Gagal membuat user"</span> },
            { status: <span class="num">500</span> }
        );
    }
}</div>
</div>

<!-- ============================================================
     BAGIAN 11: NEXT.JS BEST PRACTICES SUMMARY
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">11. Next.js &mdash; Best Practices Checklist</h2>

<div class="card animate-in">
    <h3>Ringkasan Best Practices</h3>

    <div class="table-wrapper">
    <table>
    <tr>
        <th>Practice</th>
        <th>Penjelasan</th>
    </tr>
    <tr>
        <td><strong>Server Components by default</strong></td>
        <td>Hanya tambahkan "use client" jika butuh interaktivitas (event handlers, hooks, browser APIs)</td>
    </tr>
    <tr>
        <td><strong>Server Actions untuk mutations</strong></td>
        <td>Lebih sederhana dan aman daripada API routes. Otomatis handle CSRF.</td>
    </tr>
    <tr>
        <td><strong>Zod validasi dual</strong></td>
        <td>Validasi di client (UX cepat) DAN server (keamanan). Satu schema untuk keduanya.</td>
    </tr>
    <tr>
        <td><strong>Prisma type-safe DB</strong></td>
        <td>Auto-generated types dari schema. Typo = compile error, bukan runtime bug.</td>
    </tr>
    <tr>
        <td><strong>loading.tsx + error.tsx</strong></td>
        <td>Setiap route segment punya loading dan error state built-in.</td>
    </tr>
    <tr>
        <td><strong>URL-based state</strong></td>
        <td>Search, filter, pagination via URL params (shareable, bookmarkable).</td>
    </tr>
    <tr>
        <td><strong>Optimistic updates</strong></td>
        <td>useOptimistic untuk UX responsif. Auto-revert jika gagal.</td>
    </tr>
    <tr>
        <td><strong>Revalidation</strong></td>
        <td>revalidatePath() setelah mutation. Jangan lupa revalidate semua affected routes.</td>
    </tr>
    <tr>
        <td><strong>Middleware auth</strong></td>
        <td>Protect routes di edge level, sebelum page render. Efisien.</td>
    </tr>
    <tr>
        <td><strong>Tailwind + shadcn/ui</strong></td>
        <td>UI konsisten, accessible, customizable. Copy-paste components, bukan dependency.</td>
    </tr>
    </table>
    </div>
</div>

<!-- ============================================================
     BAGIAN 12: NUXT.JS PROJECT STRUCTURE
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">12. Nuxt.js 3 CRUD &mdash; Project Structure</h2>

<div class="card animate-in">
    <h3>Struktur Proyek Nuxt.js 3 (TypeScript)</h3>
    <p>Nuxt.js 3 menggunakan <strong>auto-imports</strong> secara agresif &mdash; components, composables, dan utils tidak perlu di-import manual. Nuxt juga memisahkan server code secara jelas dalam folder <code>server/</code>.</p>

    <div class="code-block">
<span class="cm">// Struktur folder Nuxt.js 3 CRUD App</span>
nuxt-crud/
├── pages/
│   ├── index.vue                 <span class="cm">// Dashboard (route: /)</span>
│   ├── users/
│   │   ├── index.vue             <span class="cm">// List users (route: /users)</span>
│   │   ├── [id].vue              <span class="cm">// Detail user (route: /users/:id)</span>
│   │   ├── create.vue            <span class="cm">// Create user (route: /users/create)</span>
│   │   └── [id]/
│   │       └── edit.vue          <span class="cm">// Edit user (route: /users/:id/edit)</span>
├── server/
│   ├── api/
│   │   └── users/
│   │       ├── index.get.ts      <span class="cm">// GET /api/users</span>
│   │       ├── index.post.ts     <span class="cm">// POST /api/users</span>
│   │       ├── [id].get.ts       <span class="cm">// GET /api/users/:id</span>
│   │       ├── [id].put.ts       <span class="cm">// PUT /api/users/:id</span>
│   │       └── [id].delete.ts    <span class="cm">// DELETE /api/users/:id</span>
│   ├── middleware/
│   │   └── auth.ts               <span class="cm">// Server middleware (setiap request)</span>
│   └── utils/
│       └── db.ts                 <span class="cm">// Prisma client</span>
├── components/
│   ├── UserForm.vue              <span class="cm">// Form create/edit (auto-imported)</span>
│   ├── UserTable.vue             <span class="cm">// Tabel user (auto-imported)</span>
│   └── DeleteConfirm.vue         <span class="cm">// Dialog konfirmasi hapus</span>
├── composables/
│   ├── useAuth.ts                <span class="cm">// Auth composable (auto-imported)</span>
│   └── useUsers.ts               <span class="cm">// Users CRUD composable</span>
├── middleware/
│   └── auth.ts                   <span class="cm">// Route middleware (navigation guard)</span>
├── types/
│   └── index.ts                  <span class="cm">// Shared TypeScript types</span>
├── utils/
│   └── validations.ts            <span class="cm">// Zod schemas (auto-imported)</span>
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json</div>

    <div class="info-box">
        <strong>Nuxt.js Auto-Imports:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li><code>components/</code> &mdash; Semua .vue files otomatis tersedia sebagai komponen global</li>
            <li><code>composables/</code> &mdash; Semua exported functions otomatis tersedia</li>
            <li><code>utils/</code> &mdash; Semua exported functions otomatis tersedia</li>
            <li>Vue APIs (<code>ref</code>, <code>computed</code>, <code>watch</code>) otomatis tersedia</li>
            <li>Nuxt composables (<code>useFetch</code>, <code>useRoute</code>, <code>useState</code>) otomatis tersedia</li>
        </ul>
    </div>
</div>

<!-- ============================================================
     BAGIAN 13: NUXT.JS SERVER API ROUTES
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">13. Nuxt.js &mdash; Server API Routes (H3)</h2>

<div class="card animate-in">
    <h3>Nuxt Server Routes menggunakan H3</h3>
    <p>Nuxt menggunakan <strong>Nitro</strong> sebagai server engine dan <strong>H3</strong> sebagai HTTP framework. Nama file menentukan HTTP method: <code>index.get.ts</code> = GET, <code>index.post.ts</code> = POST.</p>

    <div class="code-block">
<span class="cm">// server/utils/db.ts - Prisma client untuk Nuxt server</span>
<span class="kw">import</span> { PrismaClient } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">let</span> prisma: PrismaClient;

<span class="kw">export function</span> <span class="fn">useDB</span>() {
    <span class="kw">if</span> (!prisma) {
        prisma = <span class="kw">new</span> <span class="fn">PrismaClient</span>();
    }
    <span class="kw">return</span> prisma;
}</div>

    <div class="code-block">
<span class="cm">// server/api/users/index.get.ts - GET /api/users</span>
<span class="kw">import</span> { <span class="fn">useDB</span> } <span class="kw">from</span> <span class="str">"~~/server/utils/db"</span>;

<span class="kw">export default</span> <span class="fn">defineEventHandler</span>(<span class="kw">async</span> (event) =&gt; {
    <span class="kw">const</span> db = <span class="fn">useDB</span>();
    <span class="kw">const</span> query = <span class="fn">getQuery</span>(event);

    <span class="kw">const</span> page = <span class="fn">Number</span>(query.page) || <span class="num">1</span>;
    <span class="kw">const</span> limit = <span class="fn">Number</span>(query.limit) || <span class="num">10</span>;
    <span class="kw">const</span> search = (query.search <span class="kw">as</span> <span class="num">string</span>) || <span class="str">""</span>;
    <span class="kw">const</span> role = (query.role <span class="kw">as</span> <span class="num">string</span>) || <span class="str">""</span>;

    <span class="kw">const</span> where = {
        ...(search &amp;&amp; {
            OR: [
                { name: { contains: search, mode: <span class="str">"insensitive"</span> } },
                { email: { contains: search, mode: <span class="str">"insensitive"</span> } },
            ],
        }),
        ...(role &amp;&amp; role !== <span class="str">"ALL"</span> &amp;&amp; { role }),
    };

    <span class="kw">const</span> [users, total] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
        db.user.<span class="fn">findMany</span>({
            where,
            skip: (page - <span class="num">1</span>) * limit,
            take: limit,
            orderBy: { createdAt: <span class="str">"desc"</span> },
        }),
        db.user.<span class="fn">count</span>({ where }),
    ]);

    <span class="kw">return</span> {
        users,
        total,
        page,
        totalPages: Math.<span class="fn">ceil</span>(total / limit),
    };
});</div>

    <div class="code-block">
<span class="cm">// server/api/users/index.post.ts - POST /api/users</span>
<span class="kw">import</span> { <span class="fn">useDB</span> } <span class="kw">from</span> <span class="str">"~~/server/utils/db"</span>;
<span class="kw">import</span> { userSchema } <span class="kw">from</span> <span class="str">"~~/utils/validations"</span>;

<span class="kw">export default</span> <span class="fn">defineEventHandler</span>(<span class="kw">async</span> (event) =&gt; {
    <span class="kw">const</span> db = <span class="fn">useDB</span>();
    <span class="kw">const</span> body = <span class="kw">await</span> <span class="fn">readBody</span>(event);

    <span class="cm">// Validasi dengan Zod</span>
    <span class="kw">const</span> validated = userSchema.<span class="fn">safeParse</span>(body);
    <span class="kw">if</span> (!validated.success) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">400</span>,
            statusMessage: <span class="str">"Validation Error"</span>,
            data: validated.error.<span class="fn">flatten</span>().fieldErrors,
        });
    }

    <span class="cm">// Cek duplicate email</span>
    <span class="kw">const</span> existing = <span class="kw">await</span> db.user.<span class="fn">findUnique</span>({
        where: { email: validated.data.email },
    });

    <span class="kw">if</span> (existing) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">409</span>,
            statusMessage: <span class="str">"Email sudah terdaftar"</span>,
        });
    }

    <span class="kw">const</span> user = <span class="kw">await</span> db.user.<span class="fn">create</span>({
        data: validated.data,
    });

    <span class="fn">setResponseStatus</span>(event, <span class="num">201</span>);
    <span class="kw">return</span> user;
});</div>

    <div class="code-block">
<span class="cm">// server/api/users/[id].get.ts - GET /api/users/:id</span>
<span class="kw">import</span> { <span class="fn">useDB</span> } <span class="kw">from</span> <span class="str">"~~/server/utils/db"</span>;

<span class="kw">export default</span> <span class="fn">defineEventHandler</span>(<span class="kw">async</span> (event) =&gt; {
    <span class="kw">const</span> db = <span class="fn">useDB</span>();
    <span class="kw">const</span> id = <span class="fn">getRouterParam</span>(event, <span class="str">"id"</span>);

    <span class="kw">const</span> user = <span class="kw">await</span> db.user.<span class="fn">findUnique</span>({
        where: { id },
        include: { posts: <span class="kw">true</span> },
    });

    <span class="kw">if</span> (!user) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">404</span>,
            statusMessage: <span class="str">"User tidak ditemukan"</span>,
        });
    }

    <span class="kw">return</span> user;
});</div>

    <div class="code-block">
<span class="cm">// server/api/users/[id].put.ts - PUT /api/users/:id</span>
<span class="kw">import</span> { <span class="fn">useDB</span> } <span class="kw">from</span> <span class="str">"~~/server/utils/db"</span>;
<span class="kw">import</span> { updateUserSchema } <span class="kw">from</span> <span class="str">"~~/utils/validations"</span>;

<span class="kw">export default</span> <span class="fn">defineEventHandler</span>(<span class="kw">async</span> (event) =&gt; {
    <span class="kw">const</span> db = <span class="fn">useDB</span>();
    <span class="kw">const</span> id = <span class="fn">getRouterParam</span>(event, <span class="str">"id"</span>);
    <span class="kw">const</span> body = <span class="kw">await</span> <span class="fn">readBody</span>(event);

    <span class="kw">const</span> validated = updateUserSchema.<span class="fn">safeParse</span>(body);
    <span class="kw">if</span> (!validated.success) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">400</span>,
            data: validated.error.<span class="fn">flatten</span>().fieldErrors,
        });
    }

    <span class="kw">try</span> {
        <span class="kw">const</span> user = <span class="kw">await</span> db.user.<span class="fn">update</span>({
            where: { id },
            data: validated.data,
        });
        <span class="kw">return</span> user;
    } <span class="kw">catch</span> (error) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">404</span>,
            statusMessage: <span class="str">"User tidak ditemukan"</span>,
        });
    }
});</div>

    <div class="code-block">
<span class="cm">// server/api/users/[id].delete.ts - DELETE /api/users/:id</span>
<span class="kw">import</span> { <span class="fn">useDB</span> } <span class="kw">from</span> <span class="str">"~~/server/utils/db"</span>;

<span class="kw">export default</span> <span class="fn">defineEventHandler</span>(<span class="kw">async</span> (event) =&gt; {
    <span class="kw">const</span> db = <span class="fn">useDB</span>();
    <span class="kw">const</span> id = <span class="fn">getRouterParam</span>(event, <span class="str">"id"</span>);

    <span class="kw">try</span> {
        <span class="kw">await</span> db.user.<span class="fn">delete</span>({ where: { id } });
        <span class="kw">return</span> { success: <span class="kw">true</span>, message: <span class="str">"User berhasil dihapus"</span> };
    } <span class="kw">catch</span> (error) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">404</span>,
            statusMessage: <span class="str">"User tidak ditemukan"</span>,
        });
    }
});</div>
</div>

<!-- ============================================================
     BAGIAN 14: NUXT.JS COMPOSABLES
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">14. Nuxt.js &mdash; Composables (Data Fetching)</h2>

<div class="card animate-in">
    <h3>useUsers Composable</h3>
    <p>Composables di Nuxt adalah fungsi reusable yang menggunakan Vue Composition API. Mereka otomatis di-import dari folder <code>composables/</code>.</p>

    <div class="code-block">
<span class="cm">// composables/useUsers.ts</span>
<span class="kw">import type</span> { User } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">interface</span> UsersResponse {
    users: User[];
    total: <span class="num">number</span>;
    page: <span class="num">number</span>;
    totalPages: <span class="num">number</span>;
}

<span class="kw">export function</span> <span class="fn">useUsers</span>() {
    <span class="cm">// Reactive search params</span>
    <span class="kw">const</span> search = <span class="fn">ref</span>(<span class="str">""</span>);
    <span class="kw">const</span> role = <span class="fn">ref</span>(<span class="str">"ALL"</span>);
    <span class="kw">const</span> page = <span class="fn">ref</span>(<span class="num">1</span>);

    <span class="cm">// Debounced search</span>
    <span class="kw">let</span> debounceTimer: ReturnType&lt;<span class="kw">typeof</span> setTimeout&gt;;
    <span class="kw">const</span> debouncedSearch = <span class="fn">ref</span>(<span class="str">""</span>);

    <span class="fn">watch</span>(search, (val) =&gt; {
        <span class="fn">clearTimeout</span>(debounceTimer);
        debounceTimer = <span class="fn">setTimeout</span>(() =&gt; {
            debouncedSearch.value = val;
            page.value = <span class="num">1</span>;
        }, <span class="num">300</span>);
    });

    <span class="cm">// useFetch dengan reactive params</span>
    <span class="kw">const</span> { data, pending, error, refresh } = <span class="fn">useFetch</span>&lt;UsersResponse&gt;(
        <span class="str">"/api/users"</span>,
        {
            query: {
                search: debouncedSearch,
                role: role,
                page: page,
            },
            watch: [debouncedSearch, role, page], <span class="cm">// Auto-refetch saat berubah</span>
        }
    );

    <span class="cm">// Computed properties</span>
    <span class="kw">const</span> users = <span class="fn">computed</span>(() =&gt; data.value?.users || []);
    <span class="kw">const</span> totalPages = <span class="fn">computed</span>(() =&gt; data.value?.totalPages || <span class="num">1</span>);
    <span class="kw">const</span> total = <span class="fn">computed</span>(() =&gt; data.value?.total || <span class="num">0</span>);

    <span class="cm">// CRUD functions</span>
    <span class="kw">async function</span> <span class="fn">createUser</span>(userData: <span class="kw">Partial</span>&lt;User&gt;) {
        <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users"</span>, {
            method: <span class="str">"POST"</span>,
            body: userData,
        });
        <span class="kw">await</span> <span class="fn">refresh</span>();
    }

    <span class="kw">async function</span> <span class="fn">updateUser</span>(id: <span class="num">string</span>, userData: <span class="kw">Partial</span>&lt;User&gt;) {
        <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users/"</span> + id, {
            method: <span class="str">"PUT"</span>,
            body: userData,
        });
        <span class="kw">await</span> <span class="fn">refresh</span>();
    }

    <span class="kw">async function</span> <span class="fn">removeUser</span>(id: <span class="num">string</span>) {
        <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users/"</span> + id, {
            method: <span class="str">"DELETE"</span>,
        });
        <span class="kw">await</span> <span class="fn">refresh</span>();
    }

    <span class="kw">return</span> {
        <span class="cm">// State</span>
        users,
        total,
        totalPages,
        pending,
        error,
        search,
        role,
        page,
        <span class="cm">// Actions</span>
        createUser,
        updateUser,
        removeUser,
        refresh,
    };
}</div>

    <div class="warn-box">
        <strong>useFetch vs $fetch:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li><code>useFetch</code> &mdash; Untuk data fetching di components. SSR-friendly, auto-dedup, caching, reactive.</li>
            <li><code>$fetch</code> &mdash; Untuk mutations (POST, PUT, DELETE). Seperti fetch() tapi dengan interceptors dan error handling bawaan Nuxt.</li>
            <li><code>useAsyncData</code> &mdash; Versi lebih fleksibel dari useFetch. Bisa pakai data source apa saja.</li>
        </ul>
    </div>
</div>

<!-- ============================================================
     BAGIAN 15: NUXT.JS PAGES (VUE SFC)
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">15. Nuxt.js &mdash; Pages (Vue SFC)</h2>

<div class="card animate-in">
    <h3>List Users Page</h3>
    <p>Halaman Vue menggunakan <code>&lt;script setup&gt;</code> syntax yang ringkas. Composables dari folder <code>composables/</code> otomatis tersedia tanpa import.</p>

    <div class="code-block">
<span class="cm">&lt;!-- pages/users/index.vue --&gt;</span>
&lt;script setup lang=<span class="str">"ts"</span>&gt;
<span class="cm">// useUsers() auto-imported dari composables/useUsers.ts</span>
<span class="kw">const</span> {
    users,
    total,
    totalPages,
    pending,
    search,
    role,
    page,
    removeUser,
} = <span class="fn">useUsers</span>();

<span class="cm">// SEO metadata</span>
<span class="fn">useHead</span>({
    title: <span class="str">"Daftar Users"</span>,
    meta: [
        { name: <span class="str">"description"</span>, content: <span class="str">"Kelola semua user"</span> },
    ],
});

<span class="cm">// Delete handler</span>
<span class="kw">const</span> deleting = <span class="fn">ref</span>&lt;<span class="num">string</span> | <span class="kw">null</span>&gt;(<span class="kw">null</span>);

<span class="kw">async function</span> <span class="fn">handleDelete</span>(id: <span class="num">string</span>, name: <span class="num">string</span>) {
    <span class="kw">if</span> (!<span class="fn">confirm</span>(<span class="str">"Hapus "</span> + name + <span class="str">"?"</span>)) <span class="kw">return</span>;
    deleting.value = id;
    <span class="kw">try</span> {
        <span class="kw">await</span> <span class="fn">removeUser</span>(id);
    } <span class="kw">finally</span> {
        deleting.value = <span class="kw">null</span>;
    }
}
&lt;/script&gt;

&lt;template&gt;
    &lt;div class=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
        &lt;!-- Header --&gt;
        &lt;div class=<span class="str">"flex justify-between items-center mb-6"</span>&gt;
            &lt;h1 class=<span class="str">"text-3xl font-bold"</span>&gt;
                Users ({{ total }})
            &lt;/h1&gt;
            &lt;NuxtLink
                to=<span class="str">"/users/create"</span>
                class=<span class="str">"bg-blue-600 text-white px-4 py-2 rounded-lg"</span>
            &gt;
                + Tambah User
            &lt;/NuxtLink&gt;
        &lt;/div&gt;

        &lt;!-- Search &amp; Filter --&gt;
        &lt;div class=<span class="str">"flex gap-4 mb-6"</span>&gt;
            &lt;input
                v-model=<span class="str">"search"</span>
                type=<span class="str">"search"</span>
                placeholder=<span class="str">"Cari nama atau email..."</span>
                class=<span class="str">"flex-1 border rounded-lg px-3 py-2"</span>
            /&gt;
            &lt;select
                v-model=<span class="str">"role"</span>
                class=<span class="str">"border rounded-lg px-3 py-2"</span>
            &gt;
                &lt;option value=<span class="str">"ALL"</span>&gt;Semua Role&lt;/option&gt;
                &lt;option value=<span class="str">"USER"</span>&gt;User&lt;/option&gt;
                &lt;option value=<span class="str">"ADMIN"</span>&gt;Admin&lt;/option&gt;
                &lt;option value=<span class="str">"MODERATOR"</span>&gt;Moderator&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;

        &lt;!-- Loading State --&gt;
        &lt;div v-if=<span class="str">"pending"</span> class=<span class="str">"animate-pulse space-y-3"</span>&gt;
            &lt;div v-for=<span class="str">"i in 5"</span> :key=<span class="str">"i"</span>
                 class=<span class="str">"h-16 bg-gray-200 rounded"</span> /&gt;
        &lt;/div&gt;

        &lt;!-- User Table --&gt;
        &lt;UserTable
            v-else
            :users=<span class="str">"users"</span>
            :deleting=<span class="str">"deleting"</span>
            @delete=<span class="str">"handleDelete"</span>
        /&gt;

        &lt;!-- Pagination --&gt;
        &lt;div v-if=<span class="str">"totalPages &gt; 1"</span> class=<span class="str">"flex gap-2 mt-6 justify-center"</span>&gt;
            &lt;button
                v-for=<span class="str">"p in totalPages"</span>
                :key=<span class="str">"p"</span>
                :class=<span class="str">"p === page ? 'bg-blue-600 text-white' : 'bg-gray-200'"</span>
                class=<span class="str">"px-3 py-1 rounded"</span>
                @click=<span class="str">"page = p"</span>
            &gt;
                {{ p }}
            &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</div>
</div>

<div class="card animate-in">
    <h3>UserTable Component</h3>

    <div class="code-block">
<span class="cm">&lt;!-- components/UserTable.vue --&gt;</span>
&lt;script setup lang=<span class="str">"ts"</span>&gt;
<span class="kw">import type</span> { User } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">interface</span> Props {
    users: User[];
    deleting: <span class="num">string</span> | <span class="kw">null</span>;
}

<span class="fn">defineProps</span>&lt;Props&gt;();

<span class="kw">const</span> emit = <span class="fn">defineEmits</span>&lt;{
    delete: [id: <span class="num">string</span>, name: <span class="num">string</span>];
}&gt;();

<span class="kw">function</span> <span class="fn">formatDate</span>(date: <span class="num">string</span> | Date) {
    <span class="kw">return new</span> <span class="fn">Date</span>(date).<span class="fn">toLocaleDateString</span>(<span class="str">"id-ID"</span>, {
        year: <span class="str">"numeric"</span>,
        month: <span class="str">"short"</span>,
        day: <span class="str">"numeric"</span>,
    });
}
&lt;/script&gt;

&lt;template&gt;
    &lt;div class=<span class="str">"overflow-x-auto"</span>&gt;
        &lt;table class=<span class="str">"w-full border-collapse"</span>&gt;
            &lt;thead&gt;
                &lt;tr class=<span class="str">"border-b bg-gray-50"</span>&gt;
                    &lt;th class=<span class="str">"text-left p-3"</span>&gt;Nama&lt;/th&gt;
                    &lt;th class=<span class="str">"text-left p-3"</span>&gt;Email&lt;/th&gt;
                    &lt;th class=<span class="str">"text-left p-3"</span>&gt;Role&lt;/th&gt;
                    &lt;th class=<span class="str">"text-left p-3"</span>&gt;Tanggal&lt;/th&gt;
                    &lt;th class=<span class="str">"text-right p-3"</span>&gt;Aksi&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
                &lt;tr v-for=<span class="str">"user in users"</span> :key=<span class="str">"user.id"</span>
                    class=<span class="str">"border-b hover:bg-gray-50"</span>&gt;
                    &lt;td class=<span class="str">"p-3 font-medium"</span>&gt;
                        &lt;NuxtLink
                            :to=<span class="str">"'/users/' + user.id"</span>
                            class=<span class="str">"text-blue-600 hover:underline"</span>
                        &gt;
                            {{ user.name }}
                        &lt;/NuxtLink&gt;
                    &lt;/td&gt;
                    &lt;td class=<span class="str">"p-3"</span>&gt;{{ user.email }}&lt;/td&gt;
                    &lt;td class=<span class="str">"p-3"</span>&gt;
                        &lt;span class=<span class="str">"px-2 py-1 rounded text-xs font-medium bg-blue-100"</span>&gt;
                            {{ user.role }}
                        &lt;/span&gt;
                    &lt;/td&gt;
                    &lt;td class=<span class="str">"p-3 text-gray-500"</span>&gt;
                        {{ <span class="fn">formatDate</span>(user.createdAt) }}
                    &lt;/td&gt;
                    &lt;td class=<span class="str">"p-3 text-right space-x-2"</span>&gt;
                        &lt;NuxtLink
                            :to=<span class="str">"'/users/' + user.id + '/edit'"</span>
                            class=<span class="str">"text-blue-600 hover:underline"</span>
                        &gt;
                            Edit
                        &lt;/NuxtLink&gt;
                        &lt;button
                            :disabled=<span class="str">"deleting === user.id"</span>
                            class=<span class="str">"text-red-600 hover:underline disabled:opacity-50"</span>
                            @click=<span class="str">"emit('delete', user.id, user.name)"</span>
                        &gt;
                            {{ deleting === user.id ? <span class="str">"..."</span> : <span class="str">"Hapus"</span> }}
                        &lt;/button&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;

        &lt;!-- Empty state --&gt;
        &lt;div v-if=<span class="str">"users.length === 0"</span>
             class=<span class="str">"text-center py-12 text-gray-500"</span>&gt;
            Tidak ada user ditemukan.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</div>
</div>

<div class="card animate-in">
    <h3>Create User Page</h3>

    <div class="code-block">
<span class="cm">&lt;!-- pages/users/create.vue --&gt;</span>
&lt;script setup lang=<span class="str">"ts"</span>&gt;
<span class="kw">const</span> router = <span class="fn">useRouter</span>();

<span class="fn">useHead</span>({ title: <span class="str">"Buat User Baru"</span> });

<span class="kw">const</span> loading = <span class="fn">ref</span>(<span class="kw">false</span>);
<span class="kw">const</span> errors = <span class="fn">ref</span>&lt;Record&lt;<span class="num">string</span>, <span class="num">string</span>[]&gt;&gt;({});

<span class="kw">async function</span> <span class="fn">handleSubmit</span>(formData: Record&lt;<span class="num">string</span>, <span class="kw">unknown</span>&gt;) {
    loading.value = <span class="kw">true</span>;
    errors.value = {};

    <span class="kw">try</span> {
        <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users"</span>, {
            method: <span class="str">"POST"</span>,
            body: formData,
        });
        router.<span class="fn">push</span>(<span class="str">"/users"</span>);
    } <span class="kw">catch</span> (err: <span class="kw">any</span>) {
        <span class="kw">if</span> (err.data?.data) {
            errors.value = err.data.data;
        }
    } <span class="kw">finally</span> {
        loading.value = <span class="kw">false</span>;
    }
}
&lt;/script&gt;

&lt;template&gt;
    &lt;div class=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
        &lt;h1 class=<span class="str">"text-3xl font-bold mb-6"</span>&gt;Buat User Baru&lt;/h1&gt;
        &lt;UserForm
            :loading=<span class="str">"loading"</span>
            :errors=<span class="str">"errors"</span>
            @submit=<span class="str">"handleSubmit"</span>
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</div>
</div>

<div class="card animate-in">
    <h3>Edit User Page (Pre-filled Form)</h3>

    <div class="code-block">
<span class="cm">&lt;!-- pages/users/[id]/edit.vue --&gt;</span>
&lt;script setup lang=<span class="str">"ts"</span>&gt;
<span class="kw">const</span> route = <span class="fn">useRoute</span>();
<span class="kw">const</span> router = <span class="fn">useRouter</span>();
<span class="kw">const</span> id = route.params.id <span class="kw">as</span> <span class="num">string</span>;

<span class="cm">// Fetch existing user data (SSR-friendly)</span>
<span class="kw">const</span> { data: user, error: fetchError } = <span class="kw">await</span> <span class="fn">useFetch</span>(
    <span class="str">"/api/users/"</span> + id
);

<span class="kw">if</span> (fetchError.value) {
    <span class="kw">throw</span> <span class="fn">createError</span>({
        statusCode: <span class="num">404</span>,
        statusMessage: <span class="str">"User tidak ditemukan"</span>,
    });
}

<span class="fn">useHead</span>({ title: <span class="str">"Edit: "</span> + (user.value?.name || <span class="str">""</span>) });

<span class="kw">const</span> loading = <span class="fn">ref</span>(<span class="kw">false</span>);
<span class="kw">const</span> errors = <span class="fn">ref</span>&lt;Record&lt;<span class="num">string</span>, <span class="num">string</span>[]&gt;&gt;({});

<span class="kw">async function</span> <span class="fn">handleSubmit</span>(formData: Record&lt;<span class="num">string</span>, <span class="kw">unknown</span>&gt;) {
    loading.value = <span class="kw">true</span>;
    errors.value = {};

    <span class="kw">try</span> {
        <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users/"</span> + id, {
            method: <span class="str">"PUT"</span>,
            body: formData,
        });
        router.<span class="fn">push</span>(<span class="str">"/users/"</span> + id);
    } <span class="kw">catch</span> (err: <span class="kw">any</span>) {
        <span class="kw">if</span> (err.data?.data) {
            errors.value = err.data.data;
        }
    } <span class="kw">finally</span> {
        loading.value = <span class="kw">false</span>;
    }
}
&lt;/script&gt;

&lt;template&gt;
    &lt;div class=<span class="str">"container mx-auto py-8 px-4"</span>&gt;
        &lt;h1 class=<span class="str">"text-3xl font-bold mb-6"</span>&gt;
            Edit: {{ user?.name }}
        &lt;/h1&gt;
        &lt;UserForm
            :user=<span class="str">"user"</span>
            :loading=<span class="str">"loading"</span>
            :errors=<span class="str">"errors"</span>
            @submit=<span class="str">"handleSubmit"</span>
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</div>
</div>

<div class="card animate-in">
    <h3>UserForm Component (Reusable)</h3>

    <div class="code-block">
<span class="cm">&lt;!-- components/UserForm.vue --&gt;</span>
&lt;script setup lang=<span class="str">"ts"</span>&gt;
<span class="kw">import type</span> { User } <span class="kw">from</span> <span class="str">"@prisma/client"</span>;

<span class="kw">interface</span> Props {
    user?: User | <span class="kw">null</span>;
    loading?: <span class="num">boolean</span>;
    errors?: Record&lt;<span class="num">string</span>, <span class="num">string</span>[]&gt;;
}

<span class="kw">const</span> props = <span class="fn">withDefaults</span>(<span class="fn">defineProps</span>&lt;Props&gt;(), {
    user: <span class="kw">null</span>,
    loading: <span class="kw">false</span>,
    errors: () =&gt; ({}),
});

<span class="kw">const</span> emit = <span class="fn">defineEmits</span>&lt;{
    submit: [data: Record&lt;<span class="num">string</span>, <span class="kw">unknown</span>&gt;];
}&gt;();

<span class="cm">// Form state</span>
<span class="kw">const</span> form = <span class="fn">reactive</span>({
    name: props.user?.name || <span class="str">""</span>,
    email: props.user?.email || <span class="str">""</span>,
    role: props.user?.role || <span class="str">"USER"</span>,
    bio: props.user?.bio || <span class="str">""</span>,
});

<span class="kw">function</span> <span class="fn">handleSubmit</span>() {
    <span class="fn">emit</span>(<span class="str">"submit"</span>, { ...form });
}
&lt;/script&gt;

&lt;template&gt;
    &lt;form @submit.prevent=<span class="str">"handleSubmit"</span> class=<span class="str">"space-y-6 max-w-lg"</span>&gt;
        &lt;!-- Name --&gt;
        &lt;div&gt;
            &lt;label for=<span class="str">"name"</span> class=<span class="str">"block font-medium mb-1"</span>&gt;Nama&lt;/label&gt;
            &lt;input
                id=<span class="str">"name"</span>
                v-model=<span class="str">"form.name"</span>
                type=<span class="str">"text"</span>
                required
                class=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
            /&gt;
            &lt;p v-if=<span class="str">"errors?.name"</span> class=<span class="str">"text-red-500 text-sm mt-1"</span>&gt;
                {{ errors.name[0] }}
            &lt;/p&gt;
        &lt;/div&gt;

        &lt;!-- Email --&gt;
        &lt;div&gt;
            &lt;label for=<span class="str">"email"</span> class=<span class="str">"block font-medium mb-1"</span>&gt;Email&lt;/label&gt;
            &lt;input
                id=<span class="str">"email"</span>
                v-model=<span class="str">"form.email"</span>
                type=<span class="str">"email"</span>
                required
                class=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
            /&gt;
            &lt;p v-if=<span class="str">"errors?.email"</span> class=<span class="str">"text-red-500 text-sm mt-1"</span>&gt;
                {{ errors.email[0] }}
            &lt;/p&gt;
        &lt;/div&gt;

        &lt;!-- Role --&gt;
        &lt;div&gt;
            &lt;label for=<span class="str">"role"</span> class=<span class="str">"block font-medium mb-1"</span>&gt;Role&lt;/label&gt;
            &lt;select
                id=<span class="str">"role"</span>
                v-model=<span class="str">"form.role"</span>
                class=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
            &gt;
                &lt;option value=<span class="str">"USER"</span>&gt;User&lt;/option&gt;
                &lt;option value=<span class="str">"ADMIN"</span>&gt;Admin&lt;/option&gt;
                &lt;option value=<span class="str">"MODERATOR"</span>&gt;Moderator&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;

        &lt;!-- Bio --&gt;
        &lt;div&gt;
            &lt;label for=<span class="str">"bio"</span> class=<span class="str">"block font-medium mb-1"</span>&gt;Bio (opsional)&lt;/label&gt;
            &lt;textarea
                id=<span class="str">"bio"</span>
                v-model=<span class="str">"form.bio"</span>
                rows=<span class="str">"3"</span>
                class=<span class="str">"w-full border rounded-lg px-3 py-2"</span>
            /&gt;
        &lt;/div&gt;

        &lt;!-- Submit --&gt;
        &lt;button
            type=<span class="str">"submit"</span>
            :disabled=<span class="str">"loading"</span>
            class=<span class="str">"bg-blue-600 text-white px-6 py-2 rounded-lg
                   disabled:opacity-50 disabled:cursor-not-allowed"</span>
        &gt;
            {{ loading ? <span class="str">"Menyimpan..."</span> : (user ? <span class="str">"Update User"</span> : <span class="str">"Buat User"</span>) }}
        &lt;/button&gt;
    &lt;/form&gt;
&lt;/template&gt;</div>
</div>

<!-- ============================================================
     BAGIAN 16: NUXT.JS AUTH & MIDDLEWARE
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">16. Nuxt.js &mdash; Authentication &amp; Middleware</h2>

<div class="card animate-in">
    <h3>Auth Composable</h3>

    <div class="code-block">
<span class="cm">// composables/useAuth.ts</span>
<span class="kw">interface</span> AuthUser {
    id: <span class="num">string</span>;
    name: <span class="num">string</span>;
    email: <span class="num">string</span>;
    role: <span class="str">"USER"</span> | <span class="str">"ADMIN"</span> | <span class="str">"MODERATOR"</span>;
}

<span class="kw">export function</span> <span class="fn">useAuth</span>() {
    <span class="kw">const</span> user = <span class="fn">useState</span>&lt;AuthUser | <span class="kw">null</span>&gt;(<span class="str">"auth-user"</span>, () =&gt; <span class="kw">null</span>);
    <span class="kw">const</span> isLoggedIn = <span class="fn">computed</span>(() =&gt; !!user.value);
    <span class="kw">const</span> isAdmin = <span class="fn">computed</span>(() =&gt; user.value?.role === <span class="str">"ADMIN"</span>);

    <span class="kw">async function</span> <span class="fn">login</span>(email: <span class="num">string</span>, password: <span class="num">string</span>) {
        <span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/auth/login"</span>, {
            method: <span class="str">"POST"</span>,
            body: { email, password },
        });
        user.value = data.user;
    }

    <span class="kw">async function</span> <span class="fn">logout</span>() {
        <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/auth/logout"</span>, { method: <span class="str">"POST"</span> });
        user.value = <span class="kw">null</span>;
        <span class="fn">navigateTo</span>(<span class="str">"/login"</span>);
    }

    <span class="kw">async function</span> <span class="fn">fetchUser</span>() {
        <span class="kw">try</span> {
            <span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/auth/me"</span>);
            user.value = data.user;
        } <span class="kw">catch</span> {
            user.value = <span class="kw">null</span>;
        }
    }

    <span class="kw">return</span> { user, isLoggedIn, isAdmin, login, logout, fetchUser };
}</div>
</div>

<div class="card animate-in">
    <h3>Route Middleware (Navigation Guard)</h3>

    <div class="code-block">
<span class="cm">// middleware/auth.ts (Route middleware - client-side navigation guard)</span>
<span class="kw">export default</span> <span class="fn">defineNuxtRouteMiddleware</span>((to, from) =&gt; {
    <span class="kw">const</span> { isLoggedIn } = <span class="fn">useAuth</span>();

    <span class="kw">if</span> (!isLoggedIn.value) {
        <span class="kw">return</span> <span class="fn">navigateTo</span>(<span class="str">"/login"</span>);
    }
});

<span class="cm">// Gunakan di page:</span>
<span class="cm">// &lt;script setup&gt;</span>
<span class="cm">// definePageMeta({ middleware: "auth" });</span>
<span class="cm">// &lt;/script&gt;</span></div>
</div>

<div class="card animate-in">
    <h3>Server Middleware (setiap request)</h3>

    <div class="code-block">
<span class="cm">// server/middleware/auth.ts</span>
<span class="cm">// Berjalan di setiap request ke server API</span>
<span class="kw">export default</span> <span class="fn">defineEventHandler</span>((event) =&gt; {
    <span class="kw">const</span> protectedRoutes = [<span class="str">"/api/users"</span>];
    <span class="kw">const</span> isProtected = protectedRoutes.<span class="fn">some</span>(
        (route) =&gt; event.path.<span class="fn">startsWith</span>(route)
    );

    <span class="kw">if</span> (!isProtected) <span class="kw">return</span>;

    <span class="cm">// Cek session/token dari cookie</span>
    <span class="kw">const</span> session = <span class="fn">getCookie</span>(event, <span class="str">"session-token"</span>);

    <span class="kw">if</span> (!session) {
        <span class="kw">throw</span> <span class="fn">createError</span>({
            statusCode: <span class="num">401</span>,
            statusMessage: <span class="str">"Unauthorized"</span>,
        });
    }

    <span class="cm">// Attach user info ke event context</span>
    event.context.auth = { sessionToken: session };
});</div>
</div>

<div class="card animate-in">
    <h3>Nuxt Config</h3>

    <div class="code-block">
<span class="cm">// nuxt.config.ts</span>
<span class="kw">export default</span> <span class="fn">defineNuxtConfig</span>({
    devtools: { enabled: <span class="kw">true</span> },

    modules: [
        <span class="str">"@nuxt/ui"</span>,            <span class="cm">// Nuxt UI components</span>
        <span class="str">"@nuxtjs/tailwindcss"</span>,  <span class="cm">// Tailwind CSS</span>
        <span class="str">"@pinia/nuxt"</span>,          <span class="cm">// Pinia state management</span>
        <span class="str">"nuxt-auth-utils"</span>,      <span class="cm">// Auth utilities</span>
    ],

    runtimeConfig: {
        <span class="cm">// Server-only (tidak terekspos ke client)</span>
        databaseUrl: process.env.DATABASE_URL,
        authSecret: process.env.AUTH_SECRET,

        <span class="cm">// Public (tersedia di client)</span>
        public: {
            appName: <span class="str">"Nuxt CRUD App"</span>,
        },
    },

    <span class="cm">// TypeScript strict mode</span>
    typescript: {
        strict: <span class="kw">true</span>,
    },

    <span class="cm">// SSR enabled by default</span>
    ssr: <span class="kw">true</span>,

    <span class="cm">// Route rules untuk caching</span>
    routeRules: {
        <span class="str">"/api/**"</span>: { cors: <span class="kw">true</span> },
        <span class="str">"/"</span>: { prerender: <span class="kw">true</span> },
    },
});</div>
</div>

<!-- ============================================================
     BAGIAN 17: NUXT.JS SPECIFIC FEATURES
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">17. Nuxt.js &mdash; Specific Features</h2>

<div class="card animate-in">
    <h3>useFetch vs useAsyncData vs $fetch</h3>
    <p>Tiga cara fetching data di Nuxt, masing-masing untuk use case berbeda:</p>

    <div class="table-wrapper">
    <table>
    <tr>
        <th>Method</th>
        <th>SSR</th>
        <th>Auto-refresh</th>
        <th>Use Case</th>
    </tr>
    <tr>
        <td><code>useFetch</code></td>
        <td>Ya</td>
        <td>Ya (watch)</td>
        <td>Data fetching di components/pages</td>
    </tr>
    <tr>
        <td><code>useAsyncData</code></td>
        <td>Ya</td>
        <td>Ya</td>
        <td>Custom async logic, multiple sources</td>
    </tr>
    <tr>
        <td><code>$fetch</code></td>
        <td>Tidak</td>
        <td>Tidak</td>
        <td>Mutations (POST, PUT, DELETE), event handlers</td>
    </tr>
    </table>
    </div>

    <div class="code-block">
<span class="cm">// useFetch - Simple API call (SSR + CSR)</span>
<span class="kw">const</span> { data, pending, error, refresh } = <span class="kw">await</span> <span class="fn">useFetch</span>(<span class="str">"/api/users"</span>);

<span class="cm">// useFetch dengan reactive params (auto-refetch saat berubah)</span>
<span class="kw">const</span> page = <span class="fn">ref</span>(<span class="num">1</span>);
<span class="kw">const</span> { data } = <span class="kw">await</span> <span class="fn">useFetch</span>(<span class="str">"/api/users"</span>, {
    query: { page },          <span class="cm">// Reactive - berubah saat page.value berubah</span>
    watch: [page],             <span class="cm">// Trigger refetch</span>
});

<span class="cm">// useAsyncData - Custom async logic</span>
<span class="kw">const</span> { data } = <span class="kw">await</span> <span class="fn">useAsyncData</span>(
    <span class="str">"user-detail"</span>,             <span class="cm">// Unique key untuk caching</span>
    () =&gt; <span class="fn">$fetch</span>(<span class="str">"/api/users/"</span> + route.params.id)
);

<span class="cm">// $fetch - Mutations (tidak perlu SSR)</span>
<span class="kw">async function</span> <span class="fn">handleCreate</span>(data) {
    <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users"</span>, {
        method: <span class="str">"POST"</span>,
        body: data,
    });
    <span class="fn">refresh</span>(); <span class="cm">// Manual refresh setelah mutation</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Nuxt useState vs Pinia</h3>

    <div class="code-block">
<span class="cm">// useState - SSR-safe shared state (simple cases)</span>
<span class="kw">const</span> counter = <span class="fn">useState</span>(<span class="str">"counter"</span>, () =&gt; <span class="num">0</span>);
<span class="cm">// Tersedia di semua components, SSR-safe, hydrated di client</span>

<span class="cm">// Pinia Store - Complex state management</span>
<span class="cm">// stores/users.ts</span>
<span class="kw">import</span> { <span class="fn">defineStore</span> } <span class="kw">from</span> <span class="str">"pinia"</span>;

<span class="kw">export const</span> useUsersStore = <span class="fn">defineStore</span>(<span class="str">"users"</span>, () =&gt; {
    <span class="kw">const</span> users = <span class="fn">ref</span>&lt;User[]&gt;([]);
    <span class="kw">const</span> loading = <span class="fn">ref</span>(<span class="kw">false</span>);

    <span class="kw">const</span> activeUsers = <span class="fn">computed</span>(() =&gt;
        users.value.<span class="fn">filter</span>(u =&gt; u.role !== <span class="str">"INACTIVE"</span>)
    );

    <span class="kw">async function</span> <span class="fn">fetchUsers</span>() {
        loading.value = <span class="kw">true</span>;
        <span class="kw">try</span> {
            <span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">$fetch</span>(<span class="str">"/api/users"</span>);
            users.value = data.users;
        } <span class="kw">finally</span> {
            loading.value = <span class="kw">false</span>;
        }
    }

    <span class="kw">return</span> { users, loading, activeUsers, fetchUsers };
});</div>
</div>

<!-- ============================================================
     BAGIAN 18: DEEP COMPARISON TABLE
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">18. Next.js vs Nuxt.js &mdash; Deep Comparison</h2>

<div class="card animate-in">
    <h3>Perbandingan Detail Pattern CRUD</h3>

    <div class="table-wrapper">
    <table>
    <tr>
        <th style="width:20%">Operasi</th>
        <th style="width:40%">Next.js (App Router)</th>
        <th style="width:40%">Nuxt.js 3</th>
    </tr>
    <tr>
        <td><strong>READ (List)</strong></td>
        <td>Server Component + async/await langsung query DB. Tidak perlu API endpoint.</td>
        <td>useFetch() ke server API route. Server route query DB.</td>
    </tr>
    <tr>
        <td><strong>READ (Detail)</strong></td>
        <td>Server Component dengan params. DB query langsung.</td>
        <td>useFetch("/api/users/" + id) di page.</td>
    </tr>
    <tr>
        <td><strong>CREATE</strong></td>
        <td>Server Action dipanggil dari form action. useFormState untuk error handling.</td>
        <td>$fetch POST ke server API route. Manual error handling.</td>
    </tr>
    <tr>
        <td><strong>UPDATE</strong></td>
        <td>Server Action + .bind(null, id). Pre-fill dari Server Component.</td>
        <td>$fetch PUT ke server API route. Pre-fill via useFetch.</td>
    </tr>
    <tr>
        <td><strong>DELETE</strong></td>
        <td>Server Action + useTransition/useOptimistic.</td>
        <td>$fetch DELETE + manual refresh().</td>
    </tr>
    <tr>
        <td><strong>Search</strong></td>
        <td>URL searchParams + Server Component re-render.</td>
        <td>Reactive ref + useFetch watch option.</td>
    </tr>
    <tr>
        <td><strong>Loading</strong></td>
        <td>loading.tsx (automatic Suspense), useFormStatus.</td>
        <td>pending dari useFetch, manual loading ref.</td>
    </tr>
    <tr>
        <td><strong>Error</strong></td>
        <td>error.tsx (automatic error boundary).</td>
        <td>error dari useFetch, NuxtErrorBoundary component.</td>
    </tr>
    <tr>
        <td><strong>Validation</strong></td>
        <td>Zod di Server Action. useFormState returns errors.</td>
        <td>Zod di server route. createError() returns to client.</td>
    </tr>
    <tr>
        <td><strong>Auth Guard</strong></td>
        <td>middleware.ts (Edge Runtime).</td>
        <td>middleware/ folder (route guard) + server/middleware/.</td>
    </tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Kapan Pilih Next.js vs Nuxt.js?</h3>

    <div class="table-wrapper">
    <table>
    <tr>
        <th>Pilih Next.js jika...</th>
        <th>Pilih Nuxt.js jika...</th>
    </tr>
    <tr>
        <td>Tim sudah familiar dengan React</td>
        <td>Tim sudah familiar dengan Vue</td>
    </tr>
    <tr>
        <td>Butuh React ecosystem (shadcn, Radix, dll)</td>
        <td>Butuh Vue ecosystem (Nuxt UI, VueUse, dll)</td>
    </tr>
    <tr>
        <td>Menginginkan Server Components (zero JS ke client)</td>
        <td>Menginginkan auto-imports dan DX yang "magical"</td>
    </tr>
    <tr>
        <td>Enterprise scale, banyak hiring React devs</td>
        <td>Startup/prototyping cepat, learning curve rendah</td>
    </tr>
    <tr>
        <td>Vercel hosting (optimized deployment)</td>
        <td>Self-hosting atau Cloudflare Workers/Edge</td>
    </tr>
    <tr>
        <td>Server Actions untuk mutations tanpa API layer</td>
        <td>Preferensi explicit API routes yang jelas</td>
    </tr>
    </table>
    </div>
</div>

<!-- ============================================================
     BAGIAN 19: CANVAS ANIMATION
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">19. Visualisasi &mdash; CRUD Flow Animation</h2>

<div class="card animate-in">
    <h3>Next.js vs Nuxt.js CRUD Flow</h3>
    <p>Animasi berikut menunjukkan alur CRUD request di kedua framework secara berdampingan.</p>

    <div style="text-align:center;margin:1rem 0;">
        <canvas id="canvas-crud-frontend-flow" width="700" height="400" style="width:100%;max-width:700px;background:var(--surface);border-radius:8px"></canvas>
    </div>
    <div style="text-align:center;margin-top:0.5rem;">
        <button class="anim-btn" onclick="crudFrontendFlowAnim.start()">Play Animation</button>
        <button class="anim-btn" onclick="crudFrontendFlowAnim.reset()">Reset</button>
    </div>
</div>

<!-- ============================================================
     BAGIAN 20: DEPLOYMENT & BEST PRACTICES
     ============================================================ -->
<h2 class="section-title animate-in" style="font-size:1.5rem;">20. Deployment &amp; Production Best Practices</h2>

<div class="card animate-in">
    <h3>Deployment Checklist</h3>

    <div class="table-wrapper">
    <table>
    <tr>
        <th>Aspek</th>
        <th>Next.js</th>
        <th>Nuxt.js</th>
    </tr>
    <tr>
        <td><strong>Hosting</strong></td>
        <td>Vercel (optimal), AWS, Docker, Node.js server</td>
        <td>Cloudflare, AWS, Docker, Node.js server, Edge</td>
    </tr>
    <tr>
        <td><strong>Build</strong></td>
        <td><code>next build</code> (output: .next/)</td>
        <td><code>nuxi build</code> (output: .output/)</td>
    </tr>
    <tr>
        <td><strong>Env Variables</strong></td>
        <td>.env.local, NEXT_PUBLIC_ prefix untuk client</td>
        <td>runtimeConfig di nuxt.config.ts</td>
    </tr>
    <tr>
        <td><strong>Database</strong></td>
        <td>Connection pooling (PgBouncer, Prisma Accelerate)</td>
        <td>Connection pooling (PgBouncer, Prisma Accelerate)</td>
    </tr>
    <tr>
        <td><strong>Caching</strong></td>
        <td>ISR, revalidate, unstable_cache</td>
        <td>routeRules, SWR, CDN caching</td>
    </tr>
    </table>
    </div>

    <div class="warn-box">
        <strong>Production Checklist:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li>Validasi SEMUA input di server (jangan percaya client)</li>
            <li>Rate limiting pada API endpoints</li>
            <li>CSRF protection (Next.js Server Actions otomatis, Nuxt perlu setup)</li>
            <li>Sanitize output (XSS prevention)</li>
            <li>Database connection pooling</li>
            <li>Error logging (Sentry, LogRocket)</li>
            <li>Environment variables &mdash; JANGAN commit secrets ke git</li>
            <li>HTTPS everywhere</li>
            <li>Content Security Policy headers</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3>Performance Optimization</h3>

    <div class="code-block">
<span class="cm">// === NEXT.JS Performance ===</span>

<span class="cm">// 1. Parallel data fetching (jangan sequential)</span>
<span class="cm">// BURUK - Sequential (lambat)</span>
<span class="kw">const</span> users = <span class="kw">await</span> db.user.<span class="fn">findMany</span>();
<span class="kw">const</span> posts = <span class="kw">await</span> db.post.<span class="fn">findMany</span>(); <span class="cm">// Menunggu users selesai!</span>

<span class="cm">// BAIK - Parallel (cepat)</span>
<span class="kw">const</span> [users, posts] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
    db.user.<span class="fn">findMany</span>(),
    db.post.<span class="fn">findMany</span>(),
]);

<span class="cm">// 2. Streaming dengan Suspense (progressive rendering)</span>
<span class="cm">// layout.tsx membungkus slow component dengan Suspense</span>
<span class="cm">// &lt;Suspense fallback={&lt;Loading /&gt;}&gt;</span>
<span class="cm">//     &lt;SlowComponent /&gt;</span>
<span class="cm">// &lt;/Suspense&gt;</span>

<span class="cm">// 3. Static generation untuk halaman yang jarang berubah</span>
<span class="kw">export const</span> dynamic = <span class="str">"force-static"</span>;
<span class="cm">// atau</span>
<span class="kw">export const</span> revalidate = <span class="num">3600</span>; <span class="cm">// ISR setiap 1 jam</span></div>

    <div class="code-block">
<span class="cm">// === NUXT.JS Performance ===</span>

<span class="cm">// 1. useFetch dengan key caching</span>
<span class="kw">const</span> { data } = <span class="kw">await</span> <span class="fn">useFetch</span>(<span class="str">"/api/users"</span>, {
    key: <span class="str">"users-list"</span>,        <span class="cm">// Cache key</span>
    <span class="cm">// Data di-cache di client setelah SSR, tidak refetch saat navigasi</span>
});

<span class="cm">// 2. Lazy loading components</span>
<span class="cm">// Prefix "Lazy" untuk load on-demand</span>
<span class="cm">// &lt;LazyUserTable :users="users" /&gt;</span>

<span class="cm">// 3. Route rules untuk caching</span>
<span class="cm">// nuxt.config.ts</span>
routeRules: {
    <span class="str">"/users"</span>: { swr: <span class="num">3600</span> },        <span class="cm">// Stale-while-revalidate 1 jam</span>
    <span class="str">"/api/users"</span>: { cache: { maxAge: <span class="num">60</span> } }, <span class="cm">// Cache API 60 detik</span>
}

<span class="cm">// 4. Payload optimization</span>
<span class="cm">// Nuxt otomatis serialize payload SSR dan hydrate di client</span>
<span class="cm">// Gunakan pick option untuk mengurangi payload size</span>
<span class="kw">const</span> { data } = <span class="kw">await</span> <span class="fn">useFetch</span>(<span class="str">"/api/users"</span>, {
    pick: [<span class="str">"users"</span>, <span class="str">"total"</span>],  <span class="cm">// Hanya ambil field yang dibutuhkan</span>
});</div>
</div>

<div class="card animate-in">
    <h3>Full-Stack CRUD Summary</h3>
    <div class="info-box">
        <strong>Kesimpulan:</strong> Baik Next.js maupun Nuxt.js adalah pilihan excellent untuk membangun aplikasi CRUD full-stack. <strong>Next.js</strong> unggul dengan Server Components dan Server Actions yang menghilangkan boundary antara server/client code. <strong>Nuxt.js</strong> unggul dengan auto-imports, DX yang intuitif, dan server API routes yang explicit. Pilihan tergantung pada preferensi tim (React vs Vue) dan kebutuhan proyek.
    </div>
</div>

</section>
`;

// ============================================================
// CANVAS ANIMATION: CRUD Frontend Flow
// ============================================================
function initCrudFrontendAnimations() {
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

    function getColor(name) {
        var styles = getComputedStyle(document.documentElement);
        var map = {
            accent: styles.getPropertyValue('--accent').trim() || '#38bdf8',
            green: styles.getPropertyValue('--green').trim() || '#34d399',
            red: styles.getPropertyValue('--red').trim() || '#f87171',
            orange: styles.getPropertyValue('--orange').trim() || '#fb923c',
            yellow: styles.getPropertyValue('--yellow').trim() || '#fbbf24',
            accent3: styles.getPropertyValue('--accent3').trim() || '#a78bfa',
            text: styles.getPropertyValue('--text').trim() || '#e2e8f0',
            text2: styles.getPropertyValue('--text2').trim() || '#94a3b8',
            surface: styles.getPropertyValue('--surface').trim() || '#1e293b',
            surface2: styles.getPropertyValue('--surface2').trim() || '#334155',
            bg: styles.getPropertyValue('--bg').trim() || '#0f172a'
        };
        return map[name] || '#38bdf8';
    }

    function drawRoundedRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    function drawBox(ctx, x, y, w, h, color, label, fontSize) {
        if (!fontSize) fontSize = 11;
        drawRoundedRect(ctx, x, y, w, h, 6);
        ctx.fillStyle = color + '22';
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = 'bold ' + fontSize + 'px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, x + w / 2, y + h / 2);
    }

    function drawArrow(ctx, x1, y1, x2, y2, color, progress) {
        if (progress === undefined) progress = 1;
        var dx = x2 - x1;
        var dy = y2 - y1;
        var ex = x1 + dx * progress;
        var ey = y1 + dy * progress;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (progress >= 0.95) {
            var angle = Math.atan2(dy, dx);
            ctx.beginPath();
            ctx.moveTo(ex, ey);
            ctx.lineTo(ex - 8 * Math.cos(angle - 0.4), ey - 8 * Math.sin(angle - 0.4));
            ctx.lineTo(ex - 8 * Math.cos(angle + 0.4), ey - 8 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    function drawDot(ctx, x1, y1, x2, y2, color, progress) {
        var cx = x1 + (x2 - x1) * progress;
        var cy = y1 + (y2 - y1) * progress;
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // ---- CRUD Frontend Flow Animation ----
    (function() {
        var setup = setupCanvas('canvas-crud-frontend-flow', 700, 400);
        if (!setup) return;
        var ctx = setup.ctx;
        var w = setup.w;
        var h = setup.h;

        var running = false;
        var animId = null;
        var step = -1;
        var progress = 0;

        // Layout positions
        var midX = w / 2;
        var leftX = midX / 2;       // Next.js side center
        var rightX = midX + midX / 2; // Nuxt.js side center

        // Box dimensions
        var bw = 110;
        var bh = 30;

        // Y positions for each layer
        var y0 = 30;   // Title row
        var y1 = 70;   // Browser
        var y2 = 130;  // Framework layer (Server Component / useFetch)
        var y3 = 190;  // Action layer (Server Action / Server API)
        var y4 = 250;  // Database
        var y5 = 310;  // Revalidate / Refresh
        var y6 = 360;  // UI Update

        var nextSteps = [
            { from: 'browser', to: 'server', desc: 'Next.js: Browser sends request' },
            { from: 'server', to: 'action', desc: 'Next.js: Server Component calls Server Action' },
            { from: 'action', to: 'db', desc: 'Next.js: Server Action queries Database (Prisma)' },
            { from: 'db', to: 'revalidate', desc: 'Next.js: revalidatePath() clears cache' },
            { from: 'revalidate', to: 'ui', desc: 'Next.js: UI re-renders with fresh data' },
        ];

        var nuxtSteps = [
            { from: 'browser', to: 'fetch', desc: 'Nuxt.js: Browser calls useFetch()' },
            { from: 'fetch', to: 'api', desc: 'Nuxt.js: useFetch hits Server API route' },
            { from: 'api', to: 'db', desc: 'Nuxt.js: Server API queries Database (Prisma)' },
            { from: 'db', to: 'refresh', desc: 'Nuxt.js: refresh() re-fetches data' },
            { from: 'refresh', to: 'ui', desc: 'Nuxt.js: UI reactively updates' },
        ];

        function draw() {
            ctx.clearRect(0, 0, w, h);

            // Divider line
            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.moveTo(midX, 20);
            ctx.lineTo(midX, h - 10);
            ctx.strokeStyle = getColor('surface2');
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);

            // Titles
            ctx.font = 'bold 14px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = getColor('accent');
            ctx.fillText('Next.js (React)', leftX, y0);
            ctx.fillStyle = getColor('green');
            ctx.fillText('Nuxt.js (Vue)', rightX, y0);

            // SSR indicator
            ctx.font = '10px system-ui, sans-serif';
            ctx.fillStyle = getColor('text2');
            ctx.fillText('SSR Zone', leftX, y0 + 14);
            ctx.fillText('SSR Zone', rightX, y0 + 14);

            // ---- NEXT.JS SIDE ----
            var nBx = leftX - bw / 2;
            drawBox(ctx, nBx, y1, bw, bh, getColor('accent'), 'Browser', 11);
            drawBox(ctx, nBx, y2, bw, bh, getColor('accent3'), 'Server Component', 10);
            drawBox(ctx, nBx, y3, bw, bh, getColor('orange'), 'Server Action', 10);
            drawBox(ctx, nBx, y4, bw, bh, getColor('yellow'), 'Database', 11);
            drawBox(ctx, nBx, y5, bw, bh, getColor('green'), 'revalidatePath', 10);
            drawBox(ctx, nBx, y6, bw, bh, getColor('accent'), 'UI Update', 11);

            // Static arrows (faded)
            var fadedAlpha = '44';
            var nextArrows = [
                [leftX, y1 + bh, leftX, y2],
                [leftX, y2 + bh, leftX, y3],
                [leftX, y3 + bh, leftX, y4],
                [leftX, y4 + bh, leftX, y5],
                [leftX, y5 + bh, leftX, y6],
            ];

            for (var i = 0; i < nextArrows.length; i++) {
                var a = nextArrows[i];
                ctx.beginPath();
                ctx.moveTo(a[0], a[1]);
                ctx.lineTo(a[2], a[3]);
                ctx.strokeStyle = getColor('surface2');
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // ---- NUXT.JS SIDE ----
            var uBx = rightX - bw / 2;
            drawBox(ctx, uBx, y1, bw, bh, getColor('green'), 'Browser', 11);
            drawBox(ctx, uBx, y2, bw, bh, getColor('accent3'), 'useFetch()', 11);
            drawBox(ctx, uBx, y3, bw, bh, getColor('orange'), 'Server API (H3)', 10);
            drawBox(ctx, uBx, y4, bw, bh, getColor('yellow'), 'Database', 11);
            drawBox(ctx, uBx, y5, bw, bh, getColor('green'), 'refresh()', 11);
            drawBox(ctx, uBx, y6, bw, bh, getColor('green'), 'UI Update', 11);

            // Static arrows (faded)
            var nuxtArrows = [
                [rightX, y1 + bh, rightX, y2],
                [rightX, y2 + bh, rightX, y3],
                [rightX, y3 + bh, rightX, y4],
                [rightX, y4 + bh, rightX, y5],
                [rightX, y5 + bh, rightX, y6],
            ];

            for (var j = 0; j < nuxtArrows.length; j++) {
                var b = nuxtArrows[j];
                ctx.beginPath();
                ctx.moveTo(b[0], b[1]);
                ctx.lineTo(b[2], b[3]);
                ctx.strokeStyle = getColor('surface2');
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Animated arrows and dots
            if (step >= 0) {
                var nextColors = [
                    getColor('accent'), getColor('accent3'),
                    getColor('orange'), getColor('yellow'), getColor('green')
                ];
                var nuxtColors = [
                    getColor('green'), getColor('accent3'),
                    getColor('orange'), getColor('yellow'), getColor('green')
                ];

                // Draw completed steps
                for (var s = 0; s < step && s < 5; s++) {
                    var na = nextArrows[s];
                    drawArrow(ctx, na[0], na[1], na[2], na[3], nextColors[s], 1);
                    var ua = nuxtArrows[s];
                    drawArrow(ctx, ua[0], ua[1], ua[2], ua[3], nuxtColors[s], 1);
                }

                // Draw current step with progress
                if (step < 5) {
                    var cna = nextArrows[step];
                    drawArrow(ctx, cna[0], cna[1], cna[2], cna[3], nextColors[step], progress);
                    drawDot(ctx, cna[0], cna[1], cna[2], cna[3], nextColors[step], progress);

                    var cua = nuxtArrows[step];
                    drawArrow(ctx, cua[0], cua[1], cua[2], cua[3], nuxtColors[step], progress);
                    drawDot(ctx, cua[0], cua[1], cua[2], cua[3], nuxtColors[step], progress);
                }
            }

            // Description text
            if (step >= 0 && step < 5) {
                ctx.font = '12px system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillStyle = getColor('text');
                ctx.fillText(nextSteps[step].desc, leftX, h - 10);
                ctx.fillText(nuxtSteps[step].desc, rightX, h - 10);
            }

            if (step >= 5 || (step === 4 && progress >= 1)) {
                ctx.font = 'bold 12px system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillStyle = getColor('green');
                ctx.fillText('CRUD Operation Complete!', midX, h - 10);
            }
        }

        function animate() {
            if (!running) return;
            progress += 0.025;
            if (progress >= 1) {
                progress = 1;
                draw();
                if (step < 4) {
                    setTimeout(function() {
                        step++;
                        progress = 0;
                        if (running) animId = requestAnimationFrame(animate);
                    }, 400);
                    return;
                } else {
                    step = 5;
                    running = false;
                    draw();
                    return;
                }
            }
            draw();
            animId = requestAnimationFrame(animate);
        }

        window.crudFrontendFlowAnim = {};
        window.crudFrontendFlowAnim.start = function() {
            if (running) return;
            step = 0;
            progress = 0;
            running = true;
            animate();
        };
        window.crudFrontendFlowAnim.reset = function() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            step = -1;
            progress = 0;
            draw();
        };
        draw();
    })();
}
