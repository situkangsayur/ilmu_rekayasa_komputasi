// ============================================================
// TYPESCRIPT DEEP DIVE - Comprehensive Section
// ============================================================

sections['lang-typescript'] = () => `
<section class="animate-in">

<h1 class="section-title">TypeScript Deep Dive</h1>
<p class="section-subtitle">Dari Type System hingga Advanced Patterns &mdash; JavaScript yang Aman &amp; Scalable</p>

<!-- ==================== SECTION 1: WHY TYPESCRIPT ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">1. Mengapa TypeScript?</h2>

<div class="card animate-in">
    <h3>TypeScript = JavaScript + Static Types</h3>
    <p><strong>TypeScript</strong> diciptakan oleh <strong>Anders Hejlsberg</strong> (pencipta C#, Turbo Pascal, Delphi) di <strong>Microsoft</strong>, rilis pertama tahun <strong>2012</strong>. TypeScript adalah <em>superset</em> dari JavaScript &mdash; setiap kode JavaScript valid adalah TypeScript valid.</p>

    <div class="info-box">
        <strong>TypeScript di-compile ke JavaScript.</strong> Browser dan Node.js tidak menjalankan TypeScript secara langsung. TypeScript compiler (<code>tsc</code>) menghapus semua type annotations dan menghasilkan JavaScript biasa. Ini berarti <strong>zero runtime overhead</strong>.
    </div>

    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>JavaScript</th><th>TypeScript</th></tr>
    <tr><td>Typing</td><td>Dynamic (runtime errors)</td><td>Static (compile-time errors)</td></tr>
    <tr><td>Error Detection</td><td>Saat runtime di browser/server</td><td>Saat menulis kode (di IDE)</td></tr>
    <tr><td>Refactoring</td><td>Berisiko (silent bugs)</td><td>Aman (compiler akan komplain)</td></tr>
    <tr><td>IDE Support</td><td>Basic autocomplete</td><td>Full IntelliSense, go-to-definition, rename</td></tr>
    <tr><td>Learning Curve</td><td>Lebih mudah awal</td><td>Sedikit lebih sulit, tapi jangka panjang lebih produktif</td></tr>
    <tr><td>Ecosystem</td><td>Semua npm packages</td><td>Semua npm + @types/* untuk type definitions</td></tr>
    <tr><td>Adopsi</td><td>Universal</td><td>Default di Next.js, Angular, Deno. 78% developer (SO Survey 2024)</td></tr>
    </table>
    </div>

    <div class="code-block">
<span class="cm">// JavaScript: error baru ketahuan saat runtime</span>
<span class="kw">function</span> <span class="fn">greet</span>(name) {
    <span class="kw">return</span> <span class="str">"Hello "</span> + name.<span class="fn">toUpperCase</span>(); <span class="cm">// runtime crash jika name = null</span>
}

<span class="cm">// TypeScript: error terdeteksi SAAT MENULIS KODE</span>
<span class="kw">function</span> <span class="fn">greet</span>(name: <span class="num">string</span>): <span class="num">string</span> {
    <span class="kw">return</span> <span class="str">"Hello "</span> + name.<span class="fn">toUpperCase</span>();
}
<span class="fn">greet</span>(<span class="kw">null</span>); <span class="cm">// ERROR: Argument of type 'null' is not assignable to 'string'</span>
    </div>
</div>

<!-- ==================== SECTION 2: BASIC TYPES ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">2. Type System Fundamentals</h2>

<div class="card animate-in">
    <h3>Primitive &amp; Basic Types</h3>
    <div class="code-block">
<span class="cm">// Primitive Types</span>
<span class="kw">let</span> name: <span class="num">string</span> = <span class="str">"Alice"</span>;
<span class="kw">let</span> age: <span class="num">number</span> = <span class="num">25</span>;          <span class="cm">// int dan float sama: number</span>
<span class="kw">let</span> active: <span class="num">boolean</span> = <span class="kw">true</span>;
<span class="kw">let</span> big: <span class="num">bigint</span> = <span class="num">9007199254740993n</span>;
<span class="kw">let</span> sym: <span class="num">symbol</span> = <span class="fn">Symbol</span>(<span class="str">"id"</span>);

<span class="cm">// Arrays</span>
<span class="kw">let</span> nums: <span class="num">number</span>[] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">let</span> strs: Array&lt;<span class="num">string</span>&gt; = [<span class="str">"a"</span>, <span class="str">"b"</span>]; <span class="cm">// alternatif syntax</span>

<span class="cm">// Tuples (fixed-length, typed)</span>
<span class="kw">let</span> pair: [<span class="num">string</span>, <span class="num">number</span>] = [<span class="str">"age"</span>, <span class="num">25</span>];
<span class="kw">let</span> rgb: [<span class="num">number</span>, <span class="num">number</span>, <span class="num">number</span>] = [<span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>];

<span class="cm">// Special Types</span>
<span class="kw">let</span> anything: <span class="num">any</span> = <span class="str">"bisa apa saja"</span>;    <span class="cm">// HINDARI! Mematikan type checking</span>
<span class="kw">let</span> unknown1: <span class="num">unknown</span> = <span class="str">"harus di-check"</span>; <span class="cm">// Lebih aman dari any</span>
<span class="kw">let</span> nothing: <span class="num">void</span> = <span class="kw">undefined</span>;          <span class="cm">// Function tanpa return</span>
<span class="kw">let</span> impossible: <span class="num">never</span>;                   <span class="cm">// Nilai yang TIDAK PERNAH ada</span>
    </div>

    <div class="warn-box">
        <strong>any vs unknown:</strong> <code>any</code> mematikan semua type checking (escape hatch). <code>unknown</code> jauh lebih aman &mdash; kamu HARUS melakukan type check sebelum menggunakannya. <strong>Gunakan <code>unknown</code> bukan <code>any</code></strong> kapanpun memungkinkan.
    </div>
</div>

<div class="card animate-in">
    <h3>Union, Intersection &amp; Literal Types</h3>
    <div class="code-block">
<span class="cm">// Union Type: "A atau B"</span>
<span class="kw">type</span> StringOrNumber = <span class="num">string</span> | <span class="num">number</span>;
<span class="kw">let</span> id: StringOrNumber = <span class="str">"abc"</span>;  <span class="cm">// OK</span>
id = <span class="num">123</span>;                          <span class="cm">// OK</span>
id = <span class="kw">true</span>;                         <span class="cm">// ERROR</span>

<span class="cm">// Literal Types: nilai spesifik sebagai type</span>
<span class="kw">type</span> Direction = <span class="str">"up"</span> | <span class="str">"down"</span> | <span class="str">"left"</span> | <span class="str">"right"</span>;
<span class="kw">type</span> HTTPMethod = <span class="str">"GET"</span> | <span class="str">"POST"</span> | <span class="str">"PUT"</span> | <span class="str">"DELETE"</span>;
<span class="kw">type</span> StatusCode = <span class="num">200</span> | <span class="num">201</span> | <span class="num">400</span> | <span class="num">404</span> | <span class="num">500</span>;

<span class="kw">function</span> <span class="fn">move</span>(dir: Direction) { <span class="cm">/* ... */</span> }
<span class="fn">move</span>(<span class="str">"up"</span>);     <span class="cm">// OK</span>
<span class="fn">move</span>(<span class="str">"diagonal"</span>); <span class="cm">// ERROR: tidak ada di union</span>

<span class="cm">// Intersection Type: "A dan B" (gabungan semua property)</span>
<span class="kw">type</span> Person = { name: <span class="num">string</span>; age: <span class="num">number</span> };
<span class="kw">type</span> Employee = { company: <span class="num">string</span>; role: <span class="num">string</span> };
<span class="kw">type</span> WorkingPerson = Person &amp; Employee;
<span class="cm">// WorkingPerson = { name, age, company, role } — semua field wajib</span>
    </div>
</div>

<!-- ==================== SECTION 3: INTERFACES ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">3. Interface vs Type Alias</h2>

<div class="card animate-in">
    <h3>Interface &amp; Type Alias</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="ts-interface">Interface</button>
        <button class="tab-btn" data-tab="ts-type">Type Alias</button>
        <button class="tab-btn" data-tab="ts-compare">Perbandingan</button>
    </div>

    <div data-tab-content="ts-interface" class="tab-content active">
    <div class="code-block">
<span class="cm">// Interface: mendefinisikan "bentuk" object</span>
<span class="kw">interface</span> <span class="fn">User</span> {
    id: <span class="num">number</span>;
    name: <span class="num">string</span>;
    email: <span class="num">string</span>;
    avatar?: <span class="num">string</span>;            <span class="cm">// optional property (bisa undefined)</span>
    <span class="kw">readonly</span> createdAt: Date;     <span class="cm">// tidak bisa di-reassign</span>
}

<span class="cm">// Extending interface (inheritance)</span>
<span class="kw">interface</span> <span class="fn">AdminUser</span> <span class="kw">extends</span> <span class="fn">User</span> {
    role: <span class="str">"admin"</span> | <span class="str">"superadmin"</span>;
    permissions: <span class="num">string</span>[];
}

<span class="cm">// Interface dengan method</span>
<span class="kw">interface</span> <span class="fn">Repository</span>&lt;T&gt; {
    <span class="fn">findById</span>(id: <span class="num">string</span>): Promise&lt;T | <span class="kw">null</span>&gt;;
    <span class="fn">findAll</span>(): Promise&lt;T[]&gt;;
    <span class="fn">create</span>(data: Omit&lt;T, <span class="str">"id"</span>&gt;): Promise&lt;T&gt;;
    <span class="fn">update</span>(id: <span class="num">string</span>, data: Partial&lt;T&gt;): Promise&lt;T&gt;;
    <span class="fn">delete</span>(id: <span class="num">string</span>): Promise&lt;<span class="num">void</span>&gt;;
}

<span class="cm">// Declaration merging (hanya interface, BUKAN type)</span>
<span class="kw">interface</span> <span class="fn">User</span> {
    phone?: <span class="num">string</span>;  <span class="cm">// ditambahkan ke User yang sudah ada!</span>
}
    </div>
    </div>

    <div data-tab-content="ts-type" class="tab-content">
    <div class="code-block">
<span class="cm">// Type Alias: bisa untuk semua jenis type</span>
<span class="kw">type</span> ID = <span class="num">string</span> | <span class="num">number</span>;                     <span class="cm">// union</span>
<span class="kw">type</span> Callback = (data: <span class="num">string</span>) =&gt; <span class="num">void</span>;       <span class="cm">// function type</span>
<span class="kw">type</span> Pair&lt;T&gt; = [T, T];                           <span class="cm">// generic tuple</span>
<span class="kw">type</span> Result&lt;T, E&gt; = { ok: <span class="kw">true</span>; data: T } | { ok: <span class="kw">false</span>; error: E }; <span class="cm">// discriminated union</span>

<span class="cm">// Object type (mirip interface)</span>
<span class="kw">type</span> Point = {
    x: <span class="num">number</span>;
    y: <span class="num">number</span>;
};

<span class="cm">// Mapped types (HANYA type, bukan interface)</span>
<span class="kw">type</span> Optional&lt;T&gt; = {
    [K <span class="kw">in</span> <span class="kw">keyof</span> T]?: T[K];
};

<span class="cm">// Conditional types</span>
<span class="kw">type</span> IsString&lt;T&gt; = T <span class="kw">extends</span> <span class="num">string</span> ? <span class="kw">true</span> : <span class="kw">false</span>;
<span class="kw">type</span> A = IsString&lt;<span class="str">"hello"</span>&gt;;  <span class="cm">// true</span>
<span class="kw">type</span> B = IsString&lt;<span class="num">42</span>&gt;;       <span class="cm">// false</span>
    </div>
    </div>

    <div data-tab-content="ts-compare" class="tab-content">
    <div class="table-wrapper">
    <table>
    <tr><th>Fitur</th><th>interface</th><th>type</th></tr>
    <tr><td>Object shape</td><td style="color:var(--green)">Ya</td><td style="color:var(--green)">Ya</td></tr>
    <tr><td>Extends / inheritance</td><td style="color:var(--green)">extends keyword</td><td style="color:var(--green)">&amp; intersection</td></tr>
    <tr><td>Union types</td><td style="color:var(--red)">Tidak</td><td style="color:var(--green)">Ya</td></tr>
    <tr><td>Mapped types</td><td style="color:var(--red)">Tidak</td><td style="color:var(--green)">Ya</td></tr>
    <tr><td>Conditional types</td><td style="color:var(--red)">Tidak</td><td style="color:var(--green)">Ya</td></tr>
    <tr><td>Declaration merging</td><td style="color:var(--green)">Ya</td><td style="color:var(--red)">Tidak</td></tr>
    <tr><td>Primitive aliases</td><td style="color:var(--red)">Tidak</td><td style="color:var(--green)">Ya (type ID = string)</td></tr>
    <tr><td>Implements (class)</td><td style="color:var(--green)">Ya</td><td style="color:var(--green)">Ya</td></tr>
    </table>
    </div>
    <div class="info-box">
        <strong>Best Practice:</strong> Gunakan <code>interface</code> untuk object shapes dan API contracts. Gunakan <code>type</code> untuk unions, intersections, mapped types, conditional types, dan alias primitif.
    </div>
    </div>
</div>

<!-- ==================== SECTION 4: GENERICS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">4. Generics</h2>

<div class="card animate-in">
    <h3>Generic Functions, Types &amp; Constraints</h3>
    <div class="code-block">
<span class="cm">// Generic Function: type parameter T</span>
<span class="kw">function</span> <span class="fn">identity</span>&lt;T&gt;(value: T): T {
    <span class="kw">return</span> value;
}
<span class="fn">identity</span>&lt;<span class="num">string</span>&gt;(<span class="str">"hello"</span>); <span class="cm">// explicit: T = string</span>
<span class="fn">identity</span>(<span class="num">42</span>);               <span class="cm">// inferred: T = number</span>

<span class="cm">// Generic with Constraint</span>
<span class="kw">interface</span> <span class="fn">HasLength</span> {
    length: <span class="num">number</span>;
}
<span class="kw">function</span> <span class="fn">logLength</span>&lt;T <span class="kw">extends</span> <span class="fn">HasLength</span>&gt;(item: T): T {
    <span class="fn">console</span>.<span class="fn">log</span>(item.length);
    <span class="kw">return</span> item;
}
<span class="fn">logLength</span>(<span class="str">"hello"</span>);  <span class="cm">// OK: string has .length</span>
<span class="fn">logLength</span>([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>]); <span class="cm">// OK: array has .length</span>
<span class="fn">logLength</span>(<span class="num">42</span>);       <span class="cm">// ERROR: number has no .length</span>

<span class="cm">// Generic Type</span>
<span class="kw">type</span> ApiResponse&lt;T&gt; = {
    data: T;
    status: <span class="num">number</span>;
    message: <span class="num">string</span>;
    timestamp: Date;
};

<span class="kw">type</span> UserResponse = ApiResponse&lt;User&gt;;
<span class="kw">type</span> PostsResponse = ApiResponse&lt;Post[]&gt;;

<span class="cm">// Generic Class</span>
<span class="kw">class</span> <span class="fn">Stack</span>&lt;T&gt; {
    <span class="kw">private</span> items: T[] = [];
    <span class="fn">push</span>(item: T): <span class="num">void</span> { <span class="kw">this</span>.items.<span class="fn">push</span>(item); }
    <span class="fn">pop</span>(): T | <span class="kw">undefined</span> { <span class="kw">return</span> <span class="kw">this</span>.items.<span class="fn">pop</span>(); }
    <span class="fn">peek</span>(): T | <span class="kw">undefined</span> { <span class="kw">return</span> <span class="kw">this</span>.items[<span class="kw">this</span>.items.length - <span class="num">1</span>]; }
}

<span class="kw">const</span> numStack = <span class="kw">new</span> <span class="fn">Stack</span>&lt;<span class="num">number</span>&gt;();
numStack.<span class="fn">push</span>(<span class="num">1</span>);
numStack.<span class="fn">push</span>(<span class="str">"hello"</span>); <span class="cm">// ERROR: type 'string' not assignable to 'number'</span>

<span class="cm">// Multiple type parameters</span>
<span class="kw">function</span> <span class="fn">merge</span>&lt;T, U&gt;(a: T, b: U): T &amp; U {
    <span class="kw">return</span> { ...a, ...b };
}
    </div>
</div>

<!-- ==================== SECTION 5: UTILITY TYPES ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">5. Built-in Utility Types</h2>

<div class="card animate-in">
    <h3>Utility Types yang Paling Sering Digunakan</h3>
    <div class="code-block">
<span class="kw">interface</span> <span class="fn">User</span> {
    id: <span class="num">number</span>;
    name: <span class="num">string</span>;
    email: <span class="num">string</span>;
    age: <span class="num">number</span>;
}

<span class="cm">// Partial&lt;T&gt;: semua property jadi optional</span>
<span class="kw">type</span> UpdateUser = Partial&lt;User&gt;;
<span class="cm">// { id?: number; name?: string; email?: string; age?: number }</span>

<span class="cm">// Required&lt;T&gt;: semua property jadi required</span>
<span class="kw">type</span> StrictUser = Required&lt;User&gt;;

<span class="cm">// Readonly&lt;T&gt;: semua property jadi readonly</span>
<span class="kw">type</span> FrozenUser = Readonly&lt;User&gt;;

<span class="cm">// Pick&lt;T, Keys&gt;: ambil beberapa property saja</span>
<span class="kw">type</span> UserPreview = Pick&lt;User, <span class="str">"id"</span> | <span class="str">"name"</span>&gt;;
<span class="cm">// { id: number; name: string }</span>

<span class="cm">// Omit&lt;T, Keys&gt;: buang beberapa property</span>
<span class="kw">type</span> CreateUser = Omit&lt;User, <span class="str">"id"</span>&gt;;
<span class="cm">// { name: string; email: string; age: number }</span>

<span class="cm">// Record&lt;Keys, Type&gt;: object dengan key dan value type</span>
<span class="kw">type</span> UserMap = Record&lt;<span class="num">string</span>, User&gt;;
<span class="kw">type</span> StatusMap = Record&lt;<span class="str">"active"</span> | <span class="str">"inactive"</span>, User[]&gt;;

<span class="cm">// Exclude&lt;T, U&gt;: hapus type dari union</span>
<span class="kw">type</span> Status = <span class="str">"active"</span> | <span class="str">"inactive"</span> | <span class="str">"banned"</span>;
<span class="kw">type</span> GoodStatus = Exclude&lt;Status, <span class="str">"banned"</span>&gt;; <span class="cm">// "active" | "inactive"</span>

<span class="cm">// Extract&lt;T, U&gt;: ambil type dari union yang match</span>
<span class="kw">type</span> ActiveStatus = Extract&lt;Status, <span class="str">"active"</span>&gt;; <span class="cm">// "active"</span>

<span class="cm">// NonNullable&lt;T&gt;: hapus null dan undefined</span>
<span class="kw">type</span> MaybeStr = <span class="num">string</span> | <span class="kw">null</span> | <span class="kw">undefined</span>;
<span class="kw">type</span> DefiniteStr = NonNullable&lt;MaybeStr&gt;; <span class="cm">// string</span>

<span class="cm">// ReturnType&lt;T&gt;: extract return type dari function</span>
<span class="kw">function</span> <span class="fn">getUser</span>() { <span class="kw">return</span> { id: <span class="num">1</span>, name: <span class="str">"Alice"</span> }; }
<span class="kw">type</span> UserResult = ReturnType&lt;<span class="kw">typeof</span> getUser&gt;;
<span class="cm">// { id: number; name: string }</span>

<span class="cm">// Parameters&lt;T&gt;: extract parameter types</span>
<span class="kw">type</span> Params = Parameters&lt;<span class="kw">typeof</span> <span class="fn">fetch</span>&gt;;
<span class="cm">// [input: RequestInfo | URL, init?: RequestInit]</span>

<span class="cm">// Awaited&lt;T&gt;: unwrap Promise type</span>
<span class="kw">type</span> UserData = Awaited&lt;ReturnType&lt;<span class="kw">typeof</span> getUser&gt;&gt;;
    </div>
</div>

<!-- ==================== SECTION 6: TYPE NARROWING ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">6. Type Narrowing &amp; Type Guards</h2>

<div class="card animate-in">
    <h3>Narrowing: Mempersempit Type</h3>
    <div class="code-block">
<span class="cm">// typeof narrowing</span>
<span class="kw">function</span> <span class="fn">process</span>(value: <span class="num">string</span> | <span class="num">number</span>) {
    <span class="kw">if</span> (<span class="kw">typeof</span> value === <span class="str">"string"</span>) {
        <span class="cm">// TypeScript tahu: value adalah string di sini</span>
        <span class="kw">return</span> value.<span class="fn">toUpperCase</span>();
    }
    <span class="cm">// TypeScript tahu: value adalah number di sini</span>
    <span class="kw">return</span> value.<span class="fn">toFixed</span>(<span class="num">2</span>);
}

<span class="cm">// Discriminated Unions (PATTERN PENTING!)</span>
<span class="kw">type</span> Shape =
    | { kind: <span class="str">"circle"</span>; radius: <span class="num">number</span> }
    | { kind: <span class="str">"rectangle"</span>; width: <span class="num">number</span>; height: <span class="num">number</span> }
    | { kind: <span class="str">"triangle"</span>; base: <span class="num">number</span>; height: <span class="num">number</span> };

<span class="kw">function</span> <span class="fn">area</span>(shape: Shape): <span class="num">number</span> {
    <span class="kw">switch</span> (shape.kind) {
        <span class="kw">case</span> <span class="str">"circle"</span>:
            <span class="kw">return</span> Math.PI * shape.radius ** <span class="num">2</span>; <span class="cm">// TS knows: radius exists</span>
        <span class="kw">case</span> <span class="str">"rectangle"</span>:
            <span class="kw">return</span> shape.width * shape.height;
        <span class="kw">case</span> <span class="str">"triangle"</span>:
            <span class="kw">return</span> <span class="num">0.5</span> * shape.base * shape.height;
    }
}

<span class="cm">// Custom Type Guard (is keyword)</span>
<span class="kw">function</span> <span class="fn">isUser</span>(obj: <span class="num">unknown</span>): obj <span class="kw">is</span> User {
    <span class="kw">return</span> <span class="kw">typeof</span> obj === <span class="str">"object"</span> &amp;&amp; obj !== <span class="kw">null</span>
        &amp;&amp; <span class="str">"name"</span> <span class="kw">in</span> obj &amp;&amp; <span class="str">"email"</span> <span class="kw">in</span> obj;
}

<span class="kw">function</span> <span class="fn">greetUser</span>(input: <span class="num">unknown</span>) {
    <span class="kw">if</span> (<span class="fn">isUser</span>(input)) {
        <span class="fn">console</span>.<span class="fn">log</span>(input.name); <span class="cm">// TS knows: input is User</span>
    }
}

<span class="cm">// Exhaustive check with never</span>
<span class="kw">function</span> <span class="fn">assertNever</span>(x: <span class="num">never</span>): <span class="num">never</span> {
    <span class="kw">throw new</span> <span class="fn">Error</span>(<span class="str">"Unexpected value: "</span> + x);
}
    </div>
</div>

<!-- ==================== SECTION 7: ADVANCED TYPES ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">7. Advanced Type Patterns</h2>

<div class="card animate-in">
    <h3>Mapped, Conditional &amp; Template Literal Types</h3>
    <div class="code-block">
<span class="cm">// Mapped Type: transform setiap property</span>
<span class="kw">type</span> Nullable&lt;T&gt; = {
    [K <span class="kw">in</span> <span class="kw">keyof</span> T]: T[K] | <span class="kw">null</span>;
};
<span class="kw">type</span> NullableUser = Nullable&lt;User&gt;;
<span class="cm">// { id: number|null; name: string|null; ... }</span>

<span class="cm">// Conditional Type: type-level if/else</span>
<span class="kw">type</span> Flatten&lt;T&gt; = T <span class="kw">extends</span> Array&lt;<span class="kw">infer</span> U&gt; ? U : T;
<span class="kw">type</span> A = Flatten&lt;<span class="num">string</span>[]&gt;;  <span class="cm">// string</span>
<span class="kw">type</span> B = Flatten&lt;<span class="num">number</span>&gt;;    <span class="cm">// number</span>

<span class="cm">// Template Literal Types (string manipulation di type level)</span>
<span class="kw">type</span> EventName = <span class="str">"click"</span> | <span class="str">"scroll"</span> | <span class="str">"mousemove"</span>;
<span class="kw">type</span> Handler = <span class="str">"on</span><span class="kw">$</span>{Capitalize&lt;EventName&gt;}<span class="str">"</span>;
<span class="cm">// "onClick" | "onScroll" | "onMousemove"</span>

<span class="cm">// keyof &amp; typeof</span>
<span class="kw">const</span> config = { host: <span class="str">"localhost"</span>, port: <span class="num">3000</span> } <span class="kw">as const</span>;
<span class="kw">type</span> ConfigKey = <span class="kw">keyof typeof</span> config; <span class="cm">// "host" | "port"</span>

<span class="cm">// Indexed Access Types</span>
<span class="kw">type</span> UserName = User[<span class="str">"name"</span>]; <span class="cm">// string</span>
<span class="kw">type</span> UserValues = User[<span class="kw">keyof</span> User]; <span class="cm">// string | number</span>

<span class="cm">// satisfies operator (TS 4.9+)</span>
<span class="kw">const</span> palette = {
    red: [<span class="num">255</span>, <span class="num">0</span>, <span class="num">0</span>],
    green: <span class="str">"#00ff00"</span>,
    blue: [<span class="num">0</span>, <span class="num">0</span>, <span class="num">255</span>],
} <span class="kw">satisfies</span> Record&lt;<span class="num">string</span>, <span class="num">string</span> | <span class="num">number</span>[]&gt;;
<span class="cm">// Type masih preserved: palette.green is string, palette.red is number[]</span>
    </div>
</div>

<!-- ==================== SECTION 8: DECORATORS & ENUMS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">8. Enums, Decorators &amp; Assertions</h2>

<div class="card animate-in">
    <h3>Enums &amp; const assertions</h3>
    <div class="code-block">
<span class="cm">// Numeric Enum</span>
<span class="kw">enum</span> Direction {
    Up,        <span class="cm">// 0</span>
    Down,      <span class="cm">// 1</span>
    Left,      <span class="cm">// 2</span>
    Right      <span class="cm">// 3</span>
}

<span class="cm">// String Enum (RECOMMENDED - no reverse mapping confusion)</span>
<span class="kw">enum</span> Status {
    Active = <span class="str">"ACTIVE"</span>,
    Inactive = <span class="str">"INACTIVE"</span>,
    Banned = <span class="str">"BANNED"</span>,
}

<span class="cm">// const enum (inlined, zero runtime cost)</span>
<span class="kw">const enum</span> Color {
    Red = <span class="str">"RED"</span>,
    Blue = <span class="str">"BLUE"</span>,
}

<span class="cm">// LEBIH BAIK: union type daripada enum (modern best practice)</span>
<span class="kw">type</span> Status = <span class="str">"active"</span> | <span class="str">"inactive"</span> | <span class="str">"banned"</span>;

<span class="cm">// as const (immutable + literal types)</span>
<span class="kw">const</span> ROLES = [<span class="str">"admin"</span>, <span class="str">"user"</span>, <span class="str">"guest"</span>] <span class="kw">as const</span>;
<span class="kw">type</span> Role = (<span class="kw">typeof</span> ROLES)[<span class="num">number</span>]; <span class="cm">// "admin" | "user" | "guest"</span>

<span class="cm">// Type Assertion</span>
<span class="kw">const</span> input = document.<span class="fn">getElementById</span>(<span class="str">"name"</span>) <span class="kw">as</span> HTMLInputElement;
input.value; <span class="cm">// OK: TypeScript treats as HTMLInputElement</span>

<span class="cm">// Non-null assertion (!)</span>
<span class="kw">const</span> el = document.<span class="fn">querySelector</span>(<span class="str">".card"</span>)!; <span class="cm">// assert non-null</span>
    </div>

    <div class="warn-box">
        <strong>Type Assertions vs Type Guards:</strong> Assertions (<code>as</code>) memberi tahu compiler "percaya saya". Type Guards (typeof, instanceof, custom guards) <strong>aman karena dicek saat runtime</strong>. Selalu prefer type guards!
    </div>
</div>

<!-- ==================== SECTION 9: TS WITH REACT ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">9. TypeScript + React/Next.js</h2>

<div class="card animate-in">
    <h3>TypeScript Patterns untuk React</h3>
    <div class="code-block">
<span class="cm">// Component Props typing</span>
<span class="kw">interface</span> <span class="fn">ButtonProps</span> {
    variant: <span class="str">"primary"</span> | <span class="str">"secondary"</span> | <span class="str">"danger"</span>;
    size?: <span class="str">"sm"</span> | <span class="str">"md"</span> | <span class="str">"lg"</span>;
    children: React.ReactNode;
    onClick?: () =&gt; <span class="num">void</span>;
    disabled?: <span class="num">boolean</span>;
}

<span class="kw">function</span> <span class="fn">Button</span>({ variant, size = <span class="str">"md"</span>, children, onClick, disabled }: ButtonProps) {
    <span class="kw">return</span> (
        &lt;button
            className={<span class="str">"btn btn-</span><span class="kw">$</span>{variant} btn-<span class="kw">$</span>{size}<span class="str">"</span>}
            onClick={onClick}
            disabled={disabled}
        &gt;
            {children}
        &lt;/button&gt;
    );
}

<span class="cm">// Extending HTML element props</span>
<span class="kw">interface</span> <span class="fn">InputProps</span> <span class="kw">extends</span> React.InputHTMLAttributes&lt;HTMLInputElement&gt; {
    label: <span class="num">string</span>;
    error?: <span class="num">string</span>;
}

<span class="cm">// Generic component</span>
<span class="kw">interface</span> <span class="fn">ListProps</span>&lt;T&gt; {
    items: T[];
    renderItem: (item: T, index: <span class="num">number</span>) =&gt; React.ReactNode;
    keyExtractor: (item: T) =&gt; <span class="num">string</span>;
}

<span class="kw">function</span> <span class="fn">List</span>&lt;T&gt;({ items, renderItem, keyExtractor }: ListProps&lt;T&gt;) {
    <span class="kw">return</span> &lt;ul&gt;{items.<span class="fn">map</span>((item, i) =&gt;
        &lt;li key={keyExtractor(item)}&gt;{renderItem(item, i)}&lt;/li&gt;
    )}&lt;/ul&gt;;
}

<span class="cm">// Usage: type-safe!</span>
&lt;List
    items={users}
    renderItem={(user) =&gt; &lt;span&gt;{user.name}&lt;/span&gt;}
    keyExtractor={(user) =&gt; user.id.toString()}
/&gt;

<span class="cm">// Hooks typing</span>
<span class="kw">const</span> [user, setUser] = <span class="fn">useState</span>&lt;User | <span class="kw">null</span>&gt;(<span class="kw">null</span>);
<span class="kw">const</span> inputRef = <span class="fn">useRef</span>&lt;HTMLInputElement&gt;(<span class="kw">null</span>);
    </div>
</div>

<div class="card animate-in">
    <h3>Zod: Runtime Validation + TypeScript</h3>
    <div class="code-block">
<span class="cm">// Zod: define schema once, get TypeScript type + runtime validation</span>
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="cm">// Define schema</span>
<span class="kw">const</span> UserSchema = z.<span class="fn">object</span>({
    name: z.<span class="fn">string</span>().<span class="fn">min</span>(<span class="num">2</span>).<span class="fn">max</span>(<span class="num">50</span>),
    email: z.<span class="fn">string</span>().<span class="fn">email</span>(),
    age: z.<span class="fn">number</span>().<span class="fn">int</span>().<span class="fn">min</span>(<span class="num">0</span>).<span class="fn">max</span>(<span class="num">150</span>),
    role: z.<span class="fn">enum</span>([<span class="str">"admin"</span>, <span class="str">"user"</span>, <span class="str">"guest"</span>]),
    tags: z.<span class="fn">array</span>(z.<span class="fn">string</span>()).<span class="fn">optional</span>(),
});

<span class="cm">// Infer TypeScript type from schema!</span>
<span class="kw">type</span> User = z.<span class="fn">infer</span>&lt;<span class="kw">typeof</span> UserSchema&gt;;
<span class="cm">// { name: string; email: string; age: number; role: "admin"|"user"|"guest"; tags?: string[] }</span>

<span class="cm">// Validate at runtime</span>
<span class="kw">const</span> result = UserSchema.<span class="fn">safeParse</span>(unknownData);
<span class="kw">if</span> (result.success) {
    <span class="fn">console</span>.<span class="fn">log</span>(result.data.name); <span class="cm">// fully typed!</span>
} <span class="kw">else</span> {
    <span class="fn">console</span>.<span class="fn">error</span>(result.error.issues);
}

<span class="cm">// Dengan Next.js Server Actions</span>
<span class="str">"use server"</span>;
<span class="kw">export async function</span> <span class="fn">createUser</span>(formData: FormData) {
    <span class="kw">const</span> parsed = UserSchema.<span class="fn">safeParse</span>({
        name: formData.<span class="fn">get</span>(<span class="str">"name"</span>),
        email: formData.<span class="fn">get</span>(<span class="str">"email"</span>),
        age: Number(formData.<span class="fn">get</span>(<span class="str">"age"</span>)),
        role: formData.<span class="fn">get</span>(<span class="str">"role"</span>),
    });
    <span class="kw">if</span> (!parsed.success) <span class="kw">return</span> { error: parsed.error.<span class="fn">flatten</span>() };
    <span class="kw">await</span> db.user.<span class="fn">create</span>({ data: parsed.data });
}
    </div>
</div>

<!-- ==================== SECTION 10: TYPE-SAFE PATTERNS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">10. Type Visualization</h2>

<div class="card animate-in">
    <h3>TypeScript Type System &mdash; Visual Map</h3>
    <div class="anim-container">
        <canvas id="canvas-ts-types" width="750" height="400" style="width:100%;max-width:750px;border-radius:10px;"></canvas>
    </div>
    <p style="text-align:center;color:var(--text2);font-size:0.85rem;margin-top:8px;">Hierarchy of TypeScript types &mdash; <code>unknown</code> is the top type, <code>never</code> is the bottom type</p>
</div>

<!-- ==================== SECTION 11: TSCONFIG ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">11. tsconfig.json Best Practices</h2>

<div class="card animate-in">
    <h3>Recommended tsconfig.json</h3>
    <div class="code-block">
{
    <span class="str">"compilerOptions"</span>: {
        <span class="cm">// Target &amp; Module</span>
        <span class="str">"target"</span>: <span class="str">"ES2022"</span>,
        <span class="str">"module"</span>: <span class="str">"ESNext"</span>,
        <span class="str">"moduleResolution"</span>: <span class="str">"bundler"</span>,
        <span class="str">"lib"</span>: [<span class="str">"ES2022"</span>, <span class="str">"DOM"</span>, <span class="str">"DOM.Iterable"</span>],

        <span class="cm">// STRICT MODE (enable all!)</span>
        <span class="str">"strict"</span>: <span class="kw">true</span>,
        <span class="str">"noUncheckedIndexedAccess"</span>: <span class="kw">true</span>,
        <span class="str">"noUnusedLocals"</span>: <span class="kw">true</span>,
        <span class="str">"noUnusedParameters"</span>: <span class="kw">true</span>,
        <span class="str">"noFallthroughCasesInSwitch"</span>: <span class="kw">true</span>,

        <span class="cm">// Path aliases (import @ )</span>
        <span class="str">"baseUrl"</span>: <span class="str">"."</span>,
        <span class="str">"paths"</span>: { <span class="str">"@/*"</span>: [<span class="str">"./src/*"</span>] },

        <span class="cm">// Output</span>
        <span class="str">"outDir"</span>: <span class="str">"./dist"</span>,
        <span class="str">"declaration"</span>: <span class="kw">true</span>,
        <span class="str">"sourceMap"</span>: <span class="kw">true</span>,
        <span class="str">"skipLibCheck"</span>: <span class="kw">true</span>,

        <span class="cm">// JSX (for React/Next.js)</span>
        <span class="str">"jsx"</span>: <span class="str">"react-jsx"</span>,
        <span class="str">"esModuleInterop"</span>: <span class="kw">true</span>,
        <span class="str">"resolveJsonModule"</span>: <span class="kw">true</span>,
        <span class="str">"isolatedModules"</span>: <span class="kw">true</span>
    },
    <span class="str">"include"</span>: [<span class="str">"src/**/*"</span>],
    <span class="str">"exclude"</span>: [<span class="str">"node_modules"</span>, <span class="str">"dist"</span>]
}
    </div>
</div>

<!-- ==================== REFERENCES ==================== -->
<div class="card animate-in" style="border-left: 3px solid var(--accent);">
    <h3>Referensi &amp; Sumber</h3>
    <ul>
        <li><strong>TypeScript Handbook</strong> &mdash; <a href="https://www.typescriptlang.org/docs/handbook/" target="_blank" style="color:var(--accent)">typescriptlang.org/docs/handbook</a></li>
        <li><strong>TypeScript Playground</strong> &mdash; <a href="https://www.typescriptlang.org/play" target="_blank" style="color:var(--accent)">typescriptlang.org/play</a></li>
        <li><strong>Total TypeScript</strong> by Matt Pocock &mdash; <a href="https://www.totaltypescript.com" target="_blank" style="color:var(--accent)">totaltypescript.com</a></li>
        <li>Boris Cherny, <em>"Programming TypeScript"</em> (O'Reilly, 2019)</li>
        <li><strong>Type Challenges</strong> &mdash; <a href="https://github.com/type-challenges/type-challenges" target="_blank" style="color:var(--accent)">github.com/type-challenges</a></li>
        <li><strong>ts-reset</strong> by Matt Pocock &mdash; fix built-in TS quirks</li>
        <li><strong>Zod</strong> &mdash; <a href="https://zod.dev" target="_blank" style="color:var(--accent)">zod.dev</a></li>
    </ul>
</div>

</section>
`;

// ============================================================
// TYPESCRIPT ANIMATIONS
// ============================================================

function initTypeScriptAnimations() {
    const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

    // ── CANVAS: TYPE HIERARCHY ──
    (function() {
        const canvas = document.getElementById('canvas-ts-types');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;

        function draw() {
            const dark = isDark();
            const bg = dark ? '#0a0a1a' : '#f5f5f5';
            const text = dark ? '#e0e0e0' : '#1a1a2e';
            const text2 = dark ? '#8888aa' : '#666';

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Type hierarchy levels
            const levels = [
                { y: 40, items: [{ label: 'unknown', color: '#e17055', w: 680 }] },
                { y: 110, items: [
                    { label: 'object', color: '#6c5ce7', w: 200 },
                    { label: 'string', color: '#00b894', w: 100 },
                    { label: 'number', color: '#00b894', w: 100 },
                    { label: 'boolean', color: '#00b894', w: 100 },
                    { label: 'symbol', color: '#fdcb6e', w: 80 },
                    { label: 'bigint', color: '#fdcb6e', w: 70 },
                ]},
                { y: 180, items: [
                    { label: 'Array<T>', color: '#74b9ff', w: 100 },
                    { label: 'Function', color: '#74b9ff', w: 100 },
                    { label: 'Date', color: '#74b9ff', w: 70 },
                    { label: '"hello"', color: '#55efc4', w: 80 },
                    { label: '42', color: '#55efc4', w: 50 },
                    { label: 'true', color: '#55efc4', w: 60 },
                    { label: 'null', color: '#fd79a8', w: 60 },
                    { label: 'undefined', color: '#fd79a8', w: 100 },
                ]},
                { y: 250, items: [
                    { label: 'Tuple [T, U]', color: '#a29bfe', w: 110 },
                    { label: 'Record<K,V>', color: '#a29bfe', w: 120 },
                    { label: 'Union A|B', color: '#ffeaa7', w: 100 },
                    { label: 'Intersection A&B', color: '#ffeaa7', w: 140 },
                    { label: 'void', color: '#fd79a8', w: 60 },
                ]},
                { y: 340, items: [{ label: 'never', color: '#e17055', w: 680 }] },
            ];

            // Labels
            ctx.fillStyle = text2;
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'right';
            const labels = ['Top Type', 'Primitive & Object', 'Specific Types', 'Composite Types', 'Bottom Type'];

            levels.forEach((level, li) => {
                ctx.fillStyle = text2;
                ctx.font = '10px Inter, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(labels[li], 10, level.y + 22);

                let startX = 120;
                const totalW = level.items.reduce((s, it) => s + it.w + 8, -8);
                if (level.items.length === 1) {
                    startX = (W - level.items[0].w) / 2;
                } else {
                    startX = (W - totalW) / 2;
                }

                level.items.forEach((item, i) => {
                    ctx.fillStyle = item.color;
                    ctx.globalAlpha = 0.15;
                    ctx.beginPath();
                    ctx.roundRect(startX, level.y, item.w, 35, 8);
                    ctx.fill();
                    ctx.globalAlpha = 1;

                    ctx.strokeStyle = item.color;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.roundRect(startX, level.y, item.w, 35, 8);
                    ctx.stroke();

                    ctx.fillStyle = text;
                    ctx.font = '12px JetBrains Mono, monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(item.label, startX + item.w / 2, level.y + 22);

                    startX += item.w + 8;
                });

                // Draw arrows between levels
                if (li < levels.length - 1) {
                    ctx.strokeStyle = dark ? '#333' : '#ccc';
                    ctx.lineWidth = 1;
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath();
                    ctx.moveTo(W / 2, level.y + 38);
                    ctx.lineTo(W / 2, levels[li + 1].y - 3);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    // Arrow
                    ctx.fillStyle = dark ? '#555' : '#999';
                    ctx.beginPath();
                    ctx.moveTo(W/2 - 5, levels[li+1].y - 3);
                    ctx.lineTo(W/2, levels[li+1].y + 2);
                    ctx.lineTo(W/2 + 5, levels[li+1].y - 3);
                    ctx.fill();
                }
            });

            // Legend
            ctx.fillStyle = text2;
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('unknown = accepts all values | never = accepts no values | unknown is assignable TO nothing, everything is assignable FROM unknown', W/2, H - 15);
        }

        draw();
        // Redraw on theme change
        const observer = new MutationObserver(draw);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    })();
}
