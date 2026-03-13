// ============================================================
// JAVASCRIPT & NEXT.JS - Comprehensive Deep Dive
// ============================================================

sections['lang-javascript'] = () => `
<section class="animate-in">

<h1 class="section-title">JavaScript &amp; Next.js Deep Dive</h1>
<p class="section-subtitle">Dari ES6+ Modern JS hingga Full-Stack React/Next.js &mdash; Panduan Komprehensif</p>

<!-- ==================== SECTION 1: INTRODUCTION ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">1. Mengapa JavaScript?</h2>

<div class="card animate-in">
    <h3>Sejarah &amp; Evolusi JavaScript</h3>
    <p><strong>JavaScript</strong> diciptakan oleh <strong>Brendan Eich</strong> di Netscape pada tahun <strong>1995</strong> hanya dalam 10 hari. Awalnya bernama <em>Mocha</em>, lalu <em>LiveScript</em>, akhirnya <em>JavaScript</em>. Meskipun namanya mirip Java, keduanya sangat berbeda.</p>

    <div class="info-box">
        <strong>JavaScript adalah satu-satunya bahasa yang berjalan native di browser.</strong> Dengan hadirnya Node.js (Ryan Dahl, 2009), JavaScript juga bisa berjalan di server, CLI, IoT, desktop (Electron), dan mobile (React Native).
    </div>

    <div class="table-wrapper">
    <table>
    <tr><th>Tahun</th><th>Versi</th><th>Fitur Utama</th></tr>
    <tr><td>1997</td><td>ES1</td><td>Standar pertama ECMAScript</td></tr>
    <tr><td>2009</td><td>ES5</td><td>strict mode, JSON, Array methods (forEach, map, filter)</td></tr>
    <tr><td><strong>2015</strong></td><td><strong>ES6/ES2015</strong></td><td><strong>Revolusi: let/const, arrow fn, class, Promise, modules, template literal, destructuring</strong></td></tr>
    <tr><td>2016</td><td>ES2016</td><td>Array.includes, ** operator</td></tr>
    <tr><td>2017</td><td>ES2017</td><td>async/await, Object.values/entries</td></tr>
    <tr><td>2018</td><td>ES2018</td><td>Rest/spread for objects, Promise.finally</td></tr>
    <tr><td>2019</td><td>ES2019</td><td>Array.flat, Object.fromEntries, optional catch</td></tr>
    <tr><td>2020</td><td>ES2020</td><td>Optional chaining ?., nullish coalescing ??, BigInt, Promise.allSettled</td></tr>
    <tr><td>2021</td><td>ES2021</td><td>String.replaceAll, Promise.any, Logical assignment</td></tr>
    <tr><td>2022</td><td>ES2022</td><td>Top-level await, .at(), Error cause, class fields &amp; private #</td></tr>
    <tr><td>2023</td><td>ES2023</td><td>Array findLast, Hashbang, Change Array by copy (toSorted, toReversed)</td></tr>
    <tr><td>2024</td><td>ES2024</td><td>Object.groupBy, Promise.withResolvers, ArrayBuffer transfer</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>JavaScript vs Bahasa Lain</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>JavaScript</th><th>Go</th><th>Rust</th><th>Python</th></tr>
    <tr><td>Typing</td><td>Dynamic, weak</td><td>Static, strong</td><td>Static, strong</td><td>Dynamic, strong</td></tr>
    <tr><td>Runtime</td><td>V8/SpiderMonkey/JSC</td><td>Native binary</td><td>Native binary</td><td>CPython interpreter</td></tr>
    <tr><td>Concurrency</td><td>Event loop (single-thread)</td><td>Goroutines</td><td>async/await + threads</td><td>GIL (asyncio)</td></tr>
    <tr><td>Memory</td><td>GC (V8)</td><td>GC</td><td>Ownership (no GC)</td><td>GC (ref counting)</td></tr>
    <tr><td>Kecepatan</td><td>Medium (JIT)</td><td>Fast</td><td>Very Fast</td><td>Slow</td></tr>
    <tr><td>Ekosistem</td><td>npm (terbesar)</td><td>Go modules</td><td>crates.io</td><td>PyPI</td></tr>
    <tr><td>Use Case Utama</td><td>Web, Full-stack</td><td>Backend, CLI</td><td>Systems, WASM</td><td>ML, scripting</td></tr>
    </table>
    </div>

    <div class="info-box">
        <strong>TypeScript = JavaScript + Types.</strong> Dibuat oleh Anders Hejlsberg (Microsoft, 2012). TypeScript di-compile ke JavaScript. Saat ini menjadi standar de facto untuk proyek JavaScript besar, termasuk Next.js yang default menggunakan TypeScript.
    </div>
</div>

<!-- ==================== SECTION 2: FUNDAMENTALS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">2. JavaScript Fundamentals</h2>

<div class="card animate-in">
    <h3>Variables: var vs let vs const</h3>
    <div class="code-block">
<span class="cm">// var: function-scoped, hoisted, HINDARI di modern JS</span>
<span class="kw">var</span> name = <span class="str">"old style"</span>;

<span class="cm">// let: block-scoped, bisa di-reassign</span>
<span class="kw">let</span> count = <span class="num">0</span>;
count = <span class="num">1</span>;  <span class="cm">// OK</span>

<span class="cm">// const: block-scoped, TIDAK bisa di-reassign (tapi object bisa dimutasi)</span>
<span class="kw">const</span> PI = <span class="num">3.14159</span>;
<span class="cm">// PI = 3; // ERROR: Assignment to constant variable</span>

<span class="kw">const</span> user = { name: <span class="str">"Alice"</span> };
user.name = <span class="str">"Bob"</span>;  <span class="cm">// OK! Object dimutasi, bukan di-reassign</span>

<span class="cm">// Best practice: gunakan const by default, let jika perlu reassign, HINDARI var</span>
    </div>

    <div class="warn-box">
        <strong>Hoisting:</strong> <code>var</code> di-hoist (deklarasi dipindah ke atas scope), tapi nilainya undefined. <code>let</code>/<code>const</code> juga di-hoist tapi tidak bisa diakses sebelum deklarasi &mdash; disebut <strong>Temporal Dead Zone (TDZ)</strong>.
    </div>
</div>

<div class="card animate-in">
    <h3>Data Types &amp; Type Coercion</h3>
    <div class="code-block">
<span class="cm">// 7 Primitive Types</span>
<span class="kw">const</span> str    = <span class="str">"hello"</span>;      <span class="cm">// string</span>
<span class="kw">const</span> num    = <span class="num">42</span>;            <span class="cm">// number (IEEE 754 float64)</span>
<span class="kw">const</span> big    = <span class="num">9007199254740993n</span>; <span class="cm">// bigint (ES2020)</span>
<span class="kw">const</span> bool   = <span class="kw">true</span>;          <span class="cm">// boolean</span>
<span class="kw">const</span> nul    = <span class="kw">null</span>;          <span class="cm">// null (intentional absence)</span>
<span class="kw">const</span> undef  = <span class="kw">undefined</span>;     <span class="cm">// undefined (uninitialized)</span>
<span class="kw">const</span> sym    = <span class="fn">Symbol</span>(<span class="str">"id"</span>); <span class="cm">// symbol (unique identifier)</span>

<span class="cm">// 1 Reference Type</span>
<span class="kw">const</span> obj = { key: <span class="str">"value"</span> }; <span class="cm">// object (arrays, functions, dates, etc.)</span>

<span class="cm">// Type Coercion (HATI-HATI!)</span>
<span class="str">"5"</span> + <span class="num">3</span>     <span class="cm">// "53" (string concatenation)</span>
<span class="str">"5"</span> - <span class="num">3</span>     <span class="cm">// 2 (numeric subtraction)</span>
<span class="str">"5"</span> == <span class="num">5</span>    <span class="cm">// true (coercion!)</span>
<span class="str">"5"</span> === <span class="num">5</span>   <span class="cm">// false (strict: no coercion)</span>

<span class="cm">// SELALU gunakan === (strict equality)</span>
    </div>

    <div class="table-wrapper">
    <table>
    <tr><th>Falsy Values</th><th>Truthy (semua selain falsy)</th></tr>
    <tr><td><code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code></td><td><code>"0"</code>, <code>[]</code>, <code>{}</code>, <code>"false"</code>, semua object</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Destructuring &amp; Modern Syntax</h3>
    <div class="code-block">
<span class="cm">// Array Destructuring</span>
<span class="kw">const</span> [a, b, ...rest] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="cm">// a=1, b=2, rest=[3,4,5]</span>

<span class="cm">// Object Destructuring</span>
<span class="kw">const</span> { name, age, city = <span class="str">"Jakarta"</span> } = { name: <span class="str">"Ali"</span>, age: <span class="num">25</span> };
<span class="cm">// name="Ali", age=25, city="Jakarta" (default value)</span>

<span class="cm">// Rename saat destructuring</span>
<span class="kw">const</span> { name: userName, age: userAge } = user;

<span class="cm">// Spread Operator</span>
<span class="kw">const</span> arr1 = [<span class="num">1</span>, <span class="num">2</span>];
<span class="kw">const</span> arr2 = [...arr1, <span class="num">3</span>, <span class="num">4</span>]; <span class="cm">// [1, 2, 3, 4]</span>
<span class="kw">const</span> obj2 = { ...obj, extra: <span class="kw">true</span> }; <span class="cm">// shallow copy + add</span>

<span class="cm">// Optional Chaining ?. (ES2020)</span>
<span class="kw">const</span> street = user?.address?.street; <span class="cm">// undefined jika null/undefined di chain</span>

<span class="cm">// Nullish Coalescing ?? (ES2020)</span>
<span class="kw">const</span> val = input ?? <span class="str">"default"</span>; <span class="cm">// hanya jika null/undefined (bukan 0 atau "")</span>
    </div>
</div>

<!-- ==================== SECTION 3: FUNCTIONS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">3. Functions &amp; Closures</h2>

<div class="card animate-in">
    <h3>Function Types</h3>
    <div class="code-block">
<span class="cm">// 1. Function Declaration (hoisted)</span>
<span class="kw">function</span> <span class="fn">greet</span>(name) {
    <span class="kw">return</span> <span class="str">"Hello "</span> + name;
}

<span class="cm">// 2. Function Expression (NOT hoisted)</span>
<span class="kw">const</span> greet2 = <span class="kw">function</span>(name) { <span class="kw">return</span> <span class="str">"Hi "</span> + name; };

<span class="cm">// 3. Arrow Function (ES6) - lexical 'this'</span>
<span class="kw">const</span> <span class="fn">greet3</span> = (name) =&gt; <span class="str">"Hey "</span> + name;

<span class="cm">// Arrow function: single param tanpa ()</span>
<span class="kw">const</span> <span class="fn">double</span> = x =&gt; x * <span class="num">2</span>;

<span class="cm">// Arrow function: multi-line perlu {} dan return</span>
<span class="kw">const</span> <span class="fn">add</span> = (a, b) =&gt; {
    <span class="kw">const</span> result = a + b;
    <span class="kw">return</span> result;
};

<span class="cm">// Default Parameters</span>
<span class="kw">const</span> <span class="fn">power</span> = (base, exp = <span class="num">2</span>) =&gt; base ** exp;
<span class="fn">power</span>(<span class="num">3</span>);    <span class="cm">// 9</span>
<span class="fn">power</span>(<span class="num">3</span>, <span class="num">3</span>); <span class="cm">// 27</span>

<span class="cm">// Rest Parameters</span>
<span class="kw">const</span> <span class="fn">sum</span> = (...nums) =&gt; nums.<span class="fn">reduce</span>((a, b) =&gt; a + b, <span class="num">0</span>);
<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>); <span class="cm">// 10</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Closures &amp; Higher-Order Functions</h3>
    <div class="code-block">
<span class="cm">// Closure: fungsi yang "mengingat" scope di mana ia didefinisikan</span>
<span class="kw">function</span> <span class="fn">createCounter</span>() {
    <span class="kw">let</span> count = <span class="num">0</span>;
    <span class="kw">return</span> {
        <span class="fn">increment</span>: () =&gt; ++count,
        <span class="fn">getCount</span>: () =&gt; count
    };
}
<span class="kw">const</span> counter = <span class="fn">createCounter</span>();
counter.<span class="fn">increment</span>(); <span class="cm">// 1</span>
counter.<span class="fn">increment</span>(); <span class="cm">// 2</span>
counter.<span class="fn">getCount</span>(); <span class="cm">// 2 (count "tersimpan" di closure)</span>

<span class="cm">// Higher-Order Functions: fungsi yang menerima/mengembalikan fungsi</span>
<span class="kw">const</span> numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
numbers.<span class="fn">map</span>(n =&gt; n * <span class="num">2</span>);         <span class="cm">// [2, 4, 6, 8, 10]</span>
numbers.<span class="fn">filter</span>(n =&gt; n % <span class="num">2</span> === <span class="num">0</span>); <span class="cm">// [2, 4]</span>
numbers.<span class="fn">reduce</span>((sum, n) =&gt; sum + n, <span class="num">0</span>); <span class="cm">// 15</span>
numbers.<span class="fn">find</span>(n =&gt; n &gt; <span class="num">3</span>);         <span class="cm">// 4</span>
numbers.<span class="fn">some</span>(n =&gt; n &gt; <span class="num">4</span>);         <span class="cm">// true</span>
numbers.<span class="fn">every</span>(n =&gt; n &gt; <span class="num">0</span>);        <span class="cm">// true</span>
    </div>
</div>

<!-- ==================== SECTION 4: OOP ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">4. OOP &amp; Prototype</h2>

<div class="card animate-in">
    <h3>ES6 Classes &amp; Prototype Chain</h3>
    <div class="code-block">
<span class="cm">// ES6 Class (syntactic sugar over prototype)</span>
<span class="kw">class</span> <span class="fn">Animal</span> {
    <span class="cm">// Private field (ES2022)</span>
    #sound;

    <span class="kw">constructor</span>(name, sound) {
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.#sound = sound;
    }

    <span class="fn">speak</span>() {
        <span class="kw">return</span> <span class="str">"</span><span class="kw">$</span>{<span class="kw">this</span>.name} says <span class="kw">$</span>{<span class="kw">this</span>.#sound}<span class="str">"</span>;
    }

    <span class="cm">// Getter</span>
    <span class="kw">get</span> <span class="fn">info</span>() {
        <span class="kw">return</span> <span class="str">"</span><span class="kw">$</span>{<span class="kw">this</span>.name} (<span class="kw">$</span>{<span class="kw">this</span>.#sound})<span class="str">"</span>;
    }

    <span class="cm">// Static method</span>
    <span class="kw">static</span> <span class="fn">create</span>(name, sound) {
        <span class="kw">return new</span> <span class="fn">Animal</span>(name, sound);
    }
}

<span class="cm">// Inheritance</span>
<span class="kw">class</span> <span class="fn">Dog</span> <span class="kw">extends</span> <span class="fn">Animal</span> {
    <span class="kw">constructor</span>(name) {
        <span class="kw">super</span>(name, <span class="str">"Woof"</span>);
    }

    <span class="fn">fetch</span>(item) {
        <span class="kw">return</span> <span class="str">"</span><span class="kw">$</span>{<span class="kw">this</span>.name} fetches <span class="kw">$</span>{item}<span class="str">"</span>;
    }
}

<span class="kw">const</span> dog = <span class="kw">new</span> <span class="fn">Dog</span>(<span class="str">"Rex"</span>);
dog.<span class="fn">speak</span>();      <span class="cm">// "Rex says Woof"</span>
dog.<span class="fn">fetch</span>(<span class="str">"ball"</span>); <span class="cm">// "Rex fetches ball"</span>
dog <span class="kw">instanceof</span> Dog;    <span class="cm">// true</span>
dog <span class="kw">instanceof</span> Animal; <span class="cm">// true (prototype chain)</span>
    </div>

    <div class="info-box">
        <strong>Prototype Chain:</strong> Setiap object JS memiliki internal <code>[[Prototype]]</code>. Saat property tidak ditemukan di object, JS mencari di prototype chain ke atas hingga <code>null</code>. <code>class</code> adalah syntactic sugar &mdash; di bawah tetap menggunakan prototype.
    </div>
</div>

<!-- ==================== SECTION 5: ASYNC ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">5. Asynchronous JavaScript</h2>

<div class="card animate-in">
    <h3>Event Loop &mdash; Jantung JavaScript</h3>
    <p>JavaScript adalah <strong>single-threaded</strong> tapi bisa menjalankan operasi asinkron berkat <strong>Event Loop</strong>. Memahami event loop sangat penting untuk menulis kode JS yang benar.</p>

    <div class="anim-container">
        <canvas id="canvas-event-loop" width="750" height="400" style="width:100%;max-width:750px;border-radius:10px;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="btn-eventloop-start">Jalankan Event Loop</button>
            <button class="anim-btn" id="btn-eventloop-reset">Reset</button>
        </div>
    </div>

    <div class="code-block">
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"1: Start"</span>);

<span class="fn">setTimeout</span>(() =&gt; {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"2: Timeout (macro task)"</span>);
}, <span class="num">0</span>);

<span class="fn">Promise</span>.<span class="fn">resolve</span>().<span class="fn">then</span>(() =&gt; {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"3: Promise (micro task)"</span>);
});

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"4: End"</span>);

<span class="cm">// Output: 1: Start, 4: End, 3: Promise, 2: Timeout</span>
<span class="cm">// Urutan: sync code &gt; microtask (Promise) &gt; macrotask (setTimeout)</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Promises &amp; async/await</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="js-promise">Promise</button>
        <button class="tab-btn" data-tab="js-async">async/await</button>
        <button class="tab-btn" data-tab="js-promise-combinators">Combinators</button>
    </div>

    <div data-tab-content="js-promise" class="tab-content active">
    <div class="code-block">
<span class="cm">// Creating a Promise</span>
<span class="kw">const</span> <span class="fn">fetchUser</span> = (id) =&gt; <span class="kw">new</span> <span class="fn">Promise</span>((resolve, reject) =&gt; {
    <span class="fn">setTimeout</span>(() =&gt; {
        <span class="kw">if</span> (id &gt; <span class="num">0</span>) {
            <span class="fn">resolve</span>({ id, name: <span class="str">"User"</span> + id });
        } <span class="kw">else</span> {
            <span class="fn">reject</span>(<span class="kw">new</span> <span class="fn">Error</span>(<span class="str">"Invalid ID"</span>));
        }
    }, <span class="num">1000</span>);
});

<span class="cm">// Chaining</span>
<span class="fn">fetchUser</span>(<span class="num">1</span>)
    .<span class="fn">then</span>(user =&gt; {
        <span class="fn">console</span>.<span class="fn">log</span>(user.name);
        <span class="kw">return</span> <span class="fn">fetchUser</span>(<span class="num">2</span>);
    })
    .<span class="fn">then</span>(user2 =&gt; <span class="fn">console</span>.<span class="fn">log</span>(user2.name))
    .<span class="fn">catch</span>(err =&gt; <span class="fn">console</span>.<span class="fn">error</span>(err.message))
    .<span class="fn">finally</span>(() =&gt; <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Done"</span>));
    </div>
    </div>

    <div data-tab-content="js-async" class="tab-content">
    <div class="code-block">
<span class="cm">// async/await: syntactic sugar untuk Promise</span>
<span class="kw">async function</span> <span class="fn">loadUsers</span>() {
    <span class="kw">try</span> {
        <span class="kw">const</span> user1 = <span class="kw">await</span> <span class="fn">fetchUser</span>(<span class="num">1</span>);
        <span class="kw">const</span> user2 = <span class="kw">await</span> <span class="fn">fetchUser</span>(<span class="num">2</span>);
        <span class="fn">console</span>.<span class="fn">log</span>(user1, user2);
    } <span class="kw">catch</span> (err) {
        <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">"Error:"</span>, err.message);
    }
}

<span class="cm">// Parallel execution (MUCH faster)</span>
<span class="kw">async function</span> <span class="fn">loadUsersParallel</span>() {
    <span class="kw">const</span> [u1, u2] = <span class="kw">await</span> <span class="fn">Promise</span>.<span class="fn">all</span>([
        <span class="fn">fetchUser</span>(<span class="num">1</span>),
        <span class="fn">fetchUser</span>(<span class="num">2</span>)
    ]);
    <span class="fn">console</span>.<span class="fn">log</span>(u1, u2);
}
    </div>
    </div>

    <div data-tab-content="js-promise-combinators" class="tab-content">
    <div class="code-block">
<span class="cm">// Promise.all: semua harus resolve, satu reject = semua reject</span>
<span class="kw">await</span> <span class="fn">Promise</span>.<span class="fn">all</span>([p1, p2, p3]);

<span class="cm">// Promise.allSettled: tunggu semua selesai (resolve/reject)</span>
<span class="kw">const</span> results = <span class="kw">await</span> <span class="fn">Promise</span>.<span class="fn">allSettled</span>([p1, p2, p3]);
<span class="cm">// [{status:'fulfilled', value:...}, {status:'rejected', reason:...}]</span>

<span class="cm">// Promise.race: hasil dari yang PERTAMA selesai</span>
<span class="kw">await</span> <span class="fn">Promise</span>.<span class="fn">race</span>([p1, p2, p3]);

<span class="cm">// Promise.any: hasil dari yang PERTAMA berhasil (resolve)</span>
<span class="kw">await</span> <span class="fn">Promise</span>.<span class="fn">any</span>([p1, p2, p3]);
    </div>
    </div>
</div>

<!-- ==================== SECTION 6: ES6+ FEATURES ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">6. ES6+ Modern Features</h2>

<div class="card animate-in">
    <h3>Modules, Map/Set, Iterators &amp; Generators</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="js-modules">Modules</button>
        <button class="tab-btn" data-tab="js-collections">Map/Set</button>
        <button class="tab-btn" data-tab="js-generators">Generators</button>
    </div>

    <div data-tab-content="js-modules" class="tab-content active">
    <div class="code-block">
<span class="cm">// Named export (math.js)</span>
<span class="kw">export const</span> PI = <span class="num">3.14159</span>;
<span class="kw">export function</span> <span class="fn">add</span>(a, b) { <span class="kw">return</span> a + b; }

<span class="cm">// Default export (logger.js)</span>
<span class="kw">export default class</span> <span class="fn">Logger</span> {
    <span class="fn">log</span>(msg) { <span class="fn">console</span>.<span class="fn">log</span>(msg); }
}

<span class="cm">// Import</span>
<span class="kw">import</span> Logger <span class="kw">from</span> <span class="str">"./logger.js"</span>;         <span class="cm">// default</span>
<span class="kw">import</span> { PI, add } <span class="kw">from</span> <span class="str">"./math.js"</span>;      <span class="cm">// named</span>
<span class="kw">import</span> * <span class="kw">as</span> math <span class="kw">from</span> <span class="str">"./math.js"</span>;       <span class="cm">// namespace</span>
<span class="kw">import</span> { add <span class="kw">as</span> sum } <span class="kw">from</span> <span class="str">"./math.js"</span>; <span class="cm">// rename</span>

<span class="cm">// Dynamic import (lazy loading)</span>
<span class="kw">const</span> module = <span class="kw">await</span> <span class="fn">import</span>(<span class="str">"./heavy-module.js"</span>);
    </div>
    </div>

    <div data-tab-content="js-collections" class="tab-content">
    <div class="code-block">
<span class="cm">// Map: key-value pairs (keys bisa type apapun)</span>
<span class="kw">const</span> map = <span class="kw">new</span> <span class="fn">Map</span>();
map.<span class="fn">set</span>(<span class="str">"name"</span>, <span class="str">"Alice"</span>);
map.<span class="fn">set</span>(<span class="num">42</span>, <span class="str">"answer"</span>);      <span class="cm">// number as key</span>
map.<span class="fn">set</span>(user, <span class="str">"data"</span>);       <span class="cm">// object as key!</span>
map.<span class="fn">get</span>(<span class="str">"name"</span>);              <span class="cm">// "Alice"</span>
map.size;                      <span class="cm">// 3</span>

<span class="cm">// Set: unique values only</span>
<span class="kw">const</span> set = <span class="kw">new</span> <span class="fn">Set</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>]);
<span class="cm">// Set {1, 2, 3} - duplicates removed</span>
set.<span class="fn">add</span>(<span class="num">4</span>);
set.<span class="fn">has</span>(<span class="num">2</span>);       <span class="cm">// true</span>
set.<span class="fn">delete</span>(<span class="num">1</span>);

<span class="cm">// Array dedup dengan Set</span>
<span class="kw">const</span> unique = [...<span class="kw">new</span> <span class="fn">Set</span>([<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>])]; <span class="cm">// [1, 2, 3]</span>

<span class="cm">// WeakMap/WeakSet: keys are weakly referenced (GC-friendly)</span>
    </div>
    </div>

    <div data-tab-content="js-generators" class="tab-content">
    <div class="code-block">
<span class="cm">// Generator: fungsi yang bisa di-pause dan di-resume</span>
<span class="kw">function</span>* <span class="fn">fibonacci</span>() {
    <span class="kw">let</span> a = <span class="num">0</span>, b = <span class="num">1</span>;
    <span class="kw">while</span> (<span class="kw">true</span>) {
        <span class="kw">yield</span> a;
        [a, b] = [b, a + b];
    }
}

<span class="kw">const</span> fib = <span class="fn">fibonacci</span>();
fib.<span class="fn">next</span>().value; <span class="cm">// 0</span>
fib.<span class="fn">next</span>().value; <span class="cm">// 1</span>
fib.<span class="fn">next</span>().value; <span class="cm">// 1</span>
fib.<span class="fn">next</span>().value; <span class="cm">// 2</span>

<span class="cm">// Generator bisa dipakai dengan for...of</span>
<span class="kw">for</span> (<span class="kw">const</span> num <span class="kw">of</span> <span class="fn">fibonacci</span>()) {
    <span class="kw">if</span> (num &gt; <span class="num">100</span>) <span class="kw">break</span>;
    <span class="fn">console</span>.<span class="fn">log</span>(num);
}
    </div>
    </div>
</div>

<!-- ==================== SECTION 7: DOM & BROWSER ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">7. DOM &amp; Browser APIs</h2>

<div class="card animate-in">
    <h3>DOM Manipulation &amp; Fetch API</h3>
    <div class="code-block">
<span class="cm">// DOM Query</span>
<span class="kw">const</span> el = document.<span class="fn">querySelector</span>(<span class="str">".my-class"</span>);
<span class="kw">const</span> all = document.<span class="fn">querySelectorAll</span>(<span class="str">"li.item"</span>);

<span class="cm">// Event Listener</span>
el.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (e) =&gt; {
    e.<span class="fn">preventDefault</span>();
    el.textContent = <span class="str">"Clicked!"</span>;
    el.classList.<span class="fn">toggle</span>(<span class="str">"active"</span>);
});

<span class="cm">// Fetch API (modern AJAX)</span>
<span class="kw">async function</span> <span class="fn">fetchData</span>() {
    <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/data"</span>, {
        method: <span class="str">"POST"</span>,
        headers: { <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span> },
        body: <span class="fn">JSON</span>.<span class="fn">stringify</span>({ name: <span class="str">"test"</span> })
    });
    <span class="kw">if</span> (!res.ok) <span class="kw">throw new</span> <span class="fn">Error</span>(res.statusText);
    <span class="kw">return</span> res.<span class="fn">json</span>();
}

<span class="cm">// LocalStorage</span>
localStorage.<span class="fn">setItem</span>(<span class="str">"key"</span>, <span class="fn">JSON</span>.<span class="fn">stringify</span>({ a: <span class="num">1</span> }));
<span class="kw">const</span> data = <span class="fn">JSON</span>.<span class="fn">parse</span>(localStorage.<span class="fn">getItem</span>(<span class="str">"key"</span>));
    </div>
</div>

<!-- ==================== SECTION 8: TYPESCRIPT ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">8. TypeScript</h2>

<div class="card animate-in">
    <h3>TypeScript: JavaScript + Type Safety</h3>
    <div class="code-block">
<span class="cm">// Basic Types</span>
<span class="kw">let</span> name: <span class="num">string</span> = <span class="str">"Alice"</span>;
<span class="kw">let</span> age: <span class="num">number</span> = <span class="num">25</span>;
<span class="kw">let</span> active: <span class="num">boolean</span> = <span class="kw">true</span>;
<span class="kw">let</span> items: <span class="num">string</span>[] = [<span class="str">"a"</span>, <span class="str">"b"</span>];
<span class="kw">let</span> pair: [<span class="num">string</span>, <span class="num">number</span>] = [<span class="str">"age"</span>, <span class="num">25</span>]; <span class="cm">// Tuple</span>

<span class="cm">// Interface</span>
<span class="kw">interface</span> <span class="fn">User</span> {
    id: <span class="num">number</span>;
    name: <span class="num">string</span>;
    email?: <span class="num">string</span>;        <span class="cm">// optional</span>
    <span class="kw">readonly</span> createdAt: Date; <span class="cm">// immutable</span>
}

<span class="cm">// Type Alias (bisa union, intersection)</span>
<span class="kw">type</span> Status = <span class="str">"active"</span> | <span class="str">"inactive"</span> | <span class="str">"banned"</span>; <span class="cm">// Union</span>
<span class="kw">type</span> AdminUser = User &amp; { role: <span class="str">"admin"</span> };       <span class="cm">// Intersection</span>

<span class="cm">// Generics</span>
<span class="kw">function</span> <span class="fn">first</span>&lt;T&gt;(arr: T[]): T | <span class="kw">undefined</span> {
    <span class="kw">return</span> arr[<span class="num">0</span>];
}
<span class="fn">first</span>&lt;<span class="num">number</span>&gt;([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]); <span class="cm">// 1 (type: number)</span>
<span class="fn">first</span>([<span class="str">"a"</span>, <span class="str">"b"</span>]);          <span class="cm">// "a" (type inferred: string)</span>

<span class="cm">// Utility Types</span>
<span class="kw">type</span> PartialUser = Partial&lt;User&gt;;       <span class="cm">// semua field optional</span>
<span class="kw">type</span> RequiredUser = Required&lt;User&gt;;     <span class="cm">// semua field required</span>
<span class="kw">type</span> ReadonlyUser = Readonly&lt;User&gt;;     <span class="cm">// semua field readonly</span>
<span class="kw">type</span> NameOnly = Pick&lt;User, <span class="str">"name"</span>&gt;;    <span class="cm">// hanya field "name"</span>
<span class="kw">type</span> NoEmail = Omit&lt;User, <span class="str">"email"</span>&gt;;    <span class="cm">// semua kecuali "email"</span>
    </div>
</div>

<!-- ==================== SECTION 9: NODE.JS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">9. Node.js Ecosystem</h2>

<div class="card animate-in">
    <h3>Node.js &amp; Package Management</h3>
    <div class="code-block">
<span class="cm">// CommonJS (Node.js traditional)</span>
<span class="kw">const</span> fs = <span class="fn">require</span>(<span class="str">"fs"</span>);
module.exports = { <span class="fn">myFunc</span> };

<span class="cm">// ES Modules (modern, .mjs or "type":"module" in package.json)</span>
<span class="kw">import</span> fs <span class="kw">from</span> <span class="str">"node:fs/promises"</span>;
<span class="kw">export</span> <span class="kw">const</span> <span class="fn">myFunc</span> = () =&gt; {};

<span class="cm">// Express.js minimal server</span>
<span class="kw">import</span> express <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">const</span> app = <span class="fn">express</span>();

app.<span class="fn">get</span>(<span class="str">"/api/users"</span>, <span class="kw">async</span> (req, res) =&gt; {
    <span class="kw">const</span> users = <span class="kw">await</span> <span class="fn">getUsers</span>();
    res.<span class="fn">json</span>(users);
});

app.<span class="fn">listen</span>(<span class="num">3000</span>, () =&gt; <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Server running on :3000"</span>));
    </div>

    <div class="table-wrapper">
    <table>
    <tr><th>Package Manager</th><th>Lockfile</th><th>Kelebihan</th></tr>
    <tr><td><strong>npm</strong></td><td>package-lock.json</td><td>Default, terbesar</td></tr>
    <tr><td><strong>yarn</strong></td><td>yarn.lock</td><td>Plug'n'Play, workspace support</td></tr>
    <tr><td><strong>pnpm</strong></td><td>pnpm-lock.yaml</td><td>Hemat disk (content-addressable), strict</td></tr>
    <tr><td><strong>bun</strong></td><td>bun.lockb</td><td>Ultra-fast (Zig runtime), all-in-one</td></tr>
    </table>
    </div>
</div>

<!-- ==================== SECTION 10: REACT ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">10. React Fundamentals</h2>

<div class="card animate-in">
    <h3>Component, Props, State &amp; Hooks</h3>
    <div class="code-block">
<span class="cm">// Function Component (modern React)</span>
<span class="kw">function</span> <span class="fn">UserCard</span>({ name, email, onDelete }: {
    name: <span class="num">string</span>;
    email: <span class="num">string</span>;
    onDelete: () =&gt; <span class="num">void</span>;
}) {
    <span class="cm">// State</span>
    <span class="kw">const</span> [isEditing, setIsEditing] = <span class="fn">useState</span>(<span class="kw">false</span>);

    <span class="cm">// Effect (side effects: fetch, subscription, timer)</span>
    <span class="fn">useEffect</span>(() =&gt; {
        <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Component mounted or name changed"</span>);
        <span class="kw">return</span> () =&gt; <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Cleanup"</span>); <span class="cm">// unmount</span>
    }, [name]); <span class="cm">// dependency array</span>

    <span class="kw">return</span> (
        &lt;div className=<span class="str">"user-card"</span>&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;{email}&lt;/p&gt;
            &lt;button onClick={() =&gt; setIsEditing(!isEditing)}&gt;
                {isEditing ? <span class="str">"Save"</span> : <span class="str">"Edit"</span>}
            &lt;/button&gt;
            &lt;button onClick={onDelete}&gt;Delete&lt;/button&gt;
        &lt;/div&gt;
    );
}
    </div>
</div>

<div class="card animate-in">
    <h3>Virtual DOM &amp; Reconciliation</h3>
    <p>React menggunakan <strong>Virtual DOM</strong> untuk efisiensi. Saat state berubah, React membuat vDOM tree baru, membandingkan dengan tree lama (<strong>diffing</strong>), lalu hanya mengupdate DOM asli yang berubah (<strong>reconciliation</strong>).</p>

    <div class="anim-container">
        <canvas id="canvas-react-vdom" width="750" height="350" style="width:100%;max-width:750px;border-radius:10px;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="btn-vdom-start">Jalankan Reconciliation</button>
            <button class="anim-btn" id="btn-vdom-reset">Reset</button>
        </div>
    </div>

    <div class="table-wrapper">
    <table>
    <tr><th>Hook</th><th>Fungsi</th><th>Contoh</th></tr>
    <tr><td><code>useState</code></td><td>State lokal component</td><td>const [count, setCount] = useState(0)</td></tr>
    <tr><td><code>useEffect</code></td><td>Side effects (fetch, timer)</td><td>useEffect(() =&gt; {...}, [deps])</td></tr>
    <tr><td><code>useContext</code></td><td>Akses context tanpa prop drilling</td><td>const theme = useContext(ThemeCtx)</td></tr>
    <tr><td><code>useReducer</code></td><td>Complex state logic</td><td>const [state, dispatch] = useReducer(fn, init)</td></tr>
    <tr><td><code>useMemo</code></td><td>Memoize expensive computation</td><td>const val = useMemo(() =&gt; compute(), [dep])</td></tr>
    <tr><td><code>useCallback</code></td><td>Memoize function reference</td><td>const fn = useCallback(() =&gt; {...}, [dep])</td></tr>
    <tr><td><code>useRef</code></td><td>Mutable ref (DOM access, persist value)</td><td>const ref = useRef(null)</td></tr>
    </table>
    </div>
</div>

<!-- ==================== SECTION 11: NEXT.JS ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">11. Next.js &mdash; The React Framework</h2>

<div class="card animate-in">
    <h3>Next.js App Router (13+)</h3>
    <p>Next.js adalah framework React yang memberikan SSR, SSG, routing, dan optimisasi out-of-the-box. Sejak Next.js 13, <strong>App Router</strong> menggantikan Pages Router sebagai pendekatan utama.</p>

    <div class="anim-container">
        <canvas id="canvas-nextjs-rendering" width="750" height="350" style="width:100%;max-width:750px;border-radius:10px;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="btn-rendering-start">Bandingkan Rendering</button>
            <button class="anim-btn" id="btn-rendering-reset">Reset</button>
        </div>
    </div>

    <div class="info-box">
        <strong>Routing Convention di App Router:</strong><br>
        <code>app/page.tsx</code> &rarr; Route <code>/</code><br>
        <code>app/about/page.tsx</code> &rarr; Route <code>/about</code><br>
        <code>app/blog/[slug]/page.tsx</code> &rarr; Dynamic route <code>/blog/my-post</code><br>
        <code>app/blog/[...slug]/page.tsx</code> &rarr; Catch-all <code>/blog/a/b/c</code><br>
        <code>app/(marketing)/page.tsx</code> &rarr; Route group (tidak mempengaruhi URL)<br>
        <code>app/layout.tsx</code> &rarr; Shared layout (nested)<br>
        <code>app/loading.tsx</code> &rarr; Loading UI (Suspense boundary)<br>
        <code>app/error.tsx</code> &rarr; Error boundary
    </div>
</div>

<div class="card animate-in">
    <h3>Server Components vs Client Components</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="nextjs-server">Server Component</button>
        <button class="tab-btn" data-tab="nextjs-client">Client Component</button>
        <button class="tab-btn" data-tab="nextjs-action">Server Action</button>
        <button class="tab-btn" data-tab="nextjs-fetch">Data Fetching</button>
    </div>

    <div data-tab-content="nextjs-server" class="tab-content active">
    <div class="code-block">
<span class="cm">// app/users/page.tsx (Server Component by DEFAULT)</span>
<span class="cm">// TIDAK perlu "use client" - berjalan di server</span>
<span class="cm">// Bisa langsung akses database, file system, env vars</span>
<span class="cm">// TIDAK bisa pakai useState, useEffect, onClick, browser API</span>

<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;

<span class="kw">export default async function</span> <span class="fn">UsersPage</span>() {
    <span class="cm">// Langsung query database di server!</span>
    <span class="kw">const</span> users = <span class="kw">await</span> db.user.<span class="fn">findMany</span>();

    <span class="kw">return</span> (
        &lt;div&gt;
            &lt;h1&gt;Users&lt;/h1&gt;
            {users.<span class="fn">map</span>(user =&gt; (
                &lt;div key={user.id}&gt;{user.name}&lt;/div&gt;
            ))}
        &lt;/div&gt;
    );
}

<span class="cm">// Metadata API (SEO)</span>
<span class="kw">export const</span> metadata = {
    title: <span class="str">"Users"</span>,
    description: <span class="str">"List of all users"</span>,
};
    </div>
    </div>

    <div data-tab-content="nextjs-client" class="tab-content">
    <div class="code-block">
<span class="cm">// app/users/user-search.tsx (Client Component)</span>
<span class="str">"use client"</span>; <span class="cm">// Directive WAJIB di baris pertama</span>

<span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">export function</span> <span class="fn">UserSearch</span>() {
    <span class="kw">const</span> [query, setQuery] = <span class="fn">useState</span>(<span class="str">""</span>);
    <span class="kw">const</span> [results, setResults] = <span class="fn">useState</span>([]);

    <span class="kw">const</span> <span class="fn">handleSearch</span> = <span class="kw">async</span> () =&gt; {
        <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"/api/users?q="</span> + query);
        setResults(<span class="kw">await</span> res.<span class="fn">json</span>());
    };

    <span class="kw">return</span> (
        &lt;div&gt;
            &lt;input
                value={query}
                onChange={e =&gt; setQuery(e.target.value)}
                placeholder=<span class="str">"Search users..."</span>
            /&gt;
            &lt;button onClick={handleSearch}&gt;Search&lt;/button&gt;
            {results.<span class="fn">map</span>(u =&gt; &lt;p key={u.id}&gt;{u.name}&lt;/p&gt;)}
        &lt;/div&gt;
    );
}
    </div>
    </div>

    <div data-tab-content="nextjs-action" class="tab-content">
    <div class="code-block">
<span class="cm">// app/actions.ts (Server Actions - Next.js 14+)</span>
<span class="str">"use server"</span>;

<span class="kw">import</span> { db } <span class="kw">from</span> <span class="str">"@/lib/db"</span>;
<span class="kw">import</span> { <span class="fn">revalidatePath</span> } <span class="kw">from</span> <span class="str">"next/cache"</span>;

<span class="kw">export async function</span> <span class="fn">createUser</span>(formData: FormData) {
    <span class="kw">const</span> name = formData.<span class="fn">get</span>(<span class="str">"name"</span>) <span class="kw">as</span> <span class="num">string</span>;
    <span class="kw">const</span> email = formData.<span class="fn">get</span>(<span class="str">"email"</span>) <span class="kw">as</span> <span class="num">string</span>;

    <span class="kw">await</span> db.user.<span class="fn">create</span>({ data: { name, email } });
    <span class="fn">revalidatePath</span>(<span class="str">"/users"</span>); <span class="cm">// refresh data</span>
}

<span class="cm">// Digunakan di component:</span>
<span class="cm">// &lt;form action={createUser}&gt;</span>
<span class="cm">//   &lt;input name="name" /&gt;</span>
<span class="cm">//   &lt;input name="email" /&gt;</span>
<span class="cm">//   &lt;button type="submit"&gt;Create&lt;/button&gt;</span>
<span class="cm">// &lt;/form&gt;</span>
    </div>
    </div>

    <div data-tab-content="nextjs-fetch" class="tab-content">
    <div class="code-block">
<span class="cm">// Data fetching strategies di Next.js App Router:</span>

<span class="cm">// 1. SSG (Static): data di-fetch saat build</span>
<span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/posts"</span>, {
    cache: <span class="str">"force-cache"</span> <span class="cm">// default: cache forever</span>
});

<span class="cm">// 2. SSR (Dynamic): data di-fetch setiap request</span>
<span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/posts"</span>, {
    cache: <span class="str">"no-store"</span> <span class="cm">// selalu fresh</span>
});

<span class="cm">// 3. ISR (Incremental Static Regeneration)</span>
<span class="kw">const</span> data = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/posts"</span>, {
    next: { revalidate: <span class="num">60</span> } <span class="cm">// revalidate tiap 60 detik</span>
});

<span class="cm">// Dynamic route generation</span>
<span class="kw">export async function</span> <span class="fn">generateStaticParams</span>() {
    <span class="kw">const</span> posts = <span class="kw">await</span> <span class="fn">getPosts</span>();
    <span class="kw">return</span> posts.<span class="fn">map</span>(p =&gt; ({ slug: p.slug }));
}
    </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Next.js Rendering Strategies Comparison</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Strategy</th><th>Kapan Render</th><th>Cache</th><th>Use Case</th></tr>
    <tr><td><strong>SSG</strong> (Static Site Generation)</td><td>Build time</td><td>CDN-cached</td><td>Blog, docs, marketing page</td></tr>
    <tr><td><strong>SSR</strong> (Server-Side Rendering)</td><td>Setiap request</td><td>Tidak di-cache</td><td>Dashboard, data real-time</td></tr>
    <tr><td><strong>ISR</strong> (Incremental Static Regen)</td><td>Build + revalidate</td><td>Stale-while-revalidate</td><td>E-commerce, news, blog+comments</td></tr>
    <tr><td><strong>CSR</strong> (Client-Side Rendering)</td><td>Browser (client)</td><td>No server render</td><td>SPA interaktif, admin panel</td></tr>
    </table>
    </div>
</div>

<!-- ==================== SECTION 12: STATE MANAGEMENT ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">12. State Management</h2>

<div class="card animate-in">
    <h3>Modern State Management</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="state-zustand">Zustand</button>
        <button class="tab-btn" data-tab="state-tanstack">TanStack Query</button>
        <button class="tab-btn" data-tab="state-context">Context API</button>
    </div>

    <div data-tab-content="state-zustand" class="tab-content active">
    <div class="code-block">
<span class="cm">// Zustand: minimalist state management (most popular, 2024)</span>
<span class="kw">import</span> { create } <span class="kw">from</span> <span class="str">"zustand"</span>;

<span class="kw">interface</span> <span class="fn">CounterStore</span> {
    count: <span class="num">number</span>;
    increment: () =&gt; <span class="num">void</span>;
    decrement: () =&gt; <span class="num">void</span>;
    reset: () =&gt; <span class="num">void</span>;
}

<span class="kw">const</span> useCounterStore = <span class="fn">create</span>&lt;<span class="fn">CounterStore</span>&gt;((set) =&gt; ({
    count: <span class="num">0</span>,
    increment: () =&gt; <span class="fn">set</span>((s) =&gt; ({ count: s.count + <span class="num">1</span> })),
    decrement: () =&gt; <span class="fn">set</span>((s) =&gt; ({ count: s.count - <span class="num">1</span> })),
    reset: () =&gt; <span class="fn">set</span>({ count: <span class="num">0</span> }),
}));

<span class="cm">// Dalam component:</span>
<span class="kw">function</span> <span class="fn">Counter</span>() {
    <span class="kw">const</span> { count, increment } = <span class="fn">useCounterStore</span>();
    <span class="kw">return</span> &lt;button onClick={increment}&gt;{count}&lt;/button&gt;;
}
    </div>
    </div>

    <div data-tab-content="state-tanstack" class="tab-content">
    <div class="code-block">
<span class="cm">// TanStack Query (React Query): server state management</span>
<span class="kw">import</span> { useQuery, useMutation, useQueryClient } <span class="kw">from</span> <span class="str">"@tanstack/react-query"</span>;

<span class="kw">function</span> <span class="fn">UsersList</span>() {
    <span class="kw">const</span> { data, isLoading, error } = <span class="fn">useQuery</span>({
        queryKey: [<span class="str">"users"</span>],
        queryFn: () =&gt; <span class="fn">fetch</span>(<span class="str">"/api/users"</span>).<span class="fn">then</span>(r =&gt; r.<span class="fn">json</span>()),
        staleTime: <span class="num">60_000</span>, <span class="cm">// data fresh selama 60s</span>
    });

    <span class="kw">const</span> queryClient = <span class="fn">useQueryClient</span>();
    <span class="kw">const</span> mutation = <span class="fn">useMutation</span>({
        mutationFn: (newUser) =&gt; <span class="fn">fetch</span>(<span class="str">"/api/users"</span>, {
            method: <span class="str">"POST"</span>,
            body: <span class="fn">JSON</span>.<span class="fn">stringify</span>(newUser),
        }),
        onSuccess: () =&gt; queryClient.<span class="fn">invalidateQueries</span>({ queryKey: [<span class="str">"users"</span>] }),
    });

    <span class="kw">if</span> (isLoading) <span class="kw">return</span> &lt;p&gt;Loading...&lt;/p&gt;;
    <span class="kw">return</span> data.<span class="fn">map</span>(u =&gt; &lt;div key={u.id}&gt;{u.name}&lt;/div&gt;);
}
    </div>
    </div>

    <div data-tab-content="state-context" class="tab-content">
    <div class="code-block">
<span class="cm">// React Context: built-in, no library</span>
<span class="kw">import</span> { createContext, useContext, useReducer } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">const</span> ThemeContext = <span class="fn">createContext</span>(<span class="str">"light"</span>);

<span class="kw">function</span> <span class="fn">ThemeProvider</span>({ children }) {
    <span class="kw">const</span> [theme, setTheme] = <span class="fn">useState</span>(<span class="str">"light"</span>);

    <span class="kw">return</span> (
        &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
            {children}
        &lt;/ThemeContext.Provider&gt;
    );
}

<span class="cm">// Anywhere in the tree:</span>
<span class="kw">function</span> <span class="fn">ThemedButton</span>() {
    <span class="kw">const</span> { theme, setTheme } = <span class="fn">useContext</span>(ThemeContext);
    <span class="kw">return</span> &lt;button onClick={() =&gt; setTheme(<span class="str">"dark"</span>)}&gt;{theme}&lt;/button&gt;;
}
    </div>
    </div>
</div>

<!-- ==================== SECTION 13: STYLING ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">13. Styling di Next.js</h2>

<div class="card animate-in">
    <h3>Tailwind CSS + shadcn/ui</h3>
    <div class="code-block">
<span class="cm">// Tailwind CSS: utility-first CSS framework</span>
<span class="cm">// Paling populer digunakan dengan Next.js</span>

&lt;div className=<span class="str">"flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg"</span>&gt;
    &lt;img
        src=<span class="str">"/avatar.png"</span>
        className=<span class="str">"w-12 h-12 rounded-full"</span>
        alt=<span class="str">"avatar"</span>
    /&gt;
    &lt;div&gt;
        &lt;h3 className=<span class="str">"text-lg font-semibold text-gray-900"</span>&gt;
            John Doe
        &lt;/h3&gt;
        &lt;p className=<span class="str">"text-sm text-gray-500"</span>&gt;
            Software Engineer
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

<span class="cm">// shadcn/ui: component library yang bisa di-copy ke project</span>
<span class="cm">// Berdasarkan Radix UI (headless) + Tailwind CSS</span>
<span class="cm">// npx shadcn@latest init</span>
<span class="cm">// npx shadcn@latest add button dialog card</span>

<span class="kw">import</span> { Button } <span class="kw">from</span> <span class="str">"@/components/ui/button"</span>;
<span class="kw">import</span> { Card, CardContent, CardHeader } <span class="kw">from</span> <span class="str">"@/components/ui/card"</span>;

<span class="kw">function</span> <span class="fn">MyPage</span>() {
    <span class="kw">return</span> (
        &lt;Card&gt;
            &lt;CardHeader&gt;Title&lt;/CardHeader&gt;
            &lt;CardContent&gt;Content&lt;/CardContent&gt;
            &lt;Button variant=<span class="str">"outline"</span>&gt;Click Me&lt;/Button&gt;
        &lt;/Card&gt;
    );
}
    </div>

    <div class="table-wrapper">
    <table>
    <tr><th>Pendekatan</th><th>Kelebihan</th><th>Kekurangan</th></tr>
    <tr><td><strong>Tailwind CSS</strong></td><td>Cepat, konsisten, small bundle (purge unused)</td><td>Class panjang, learning curve</td></tr>
    <tr><td><strong>CSS Modules</strong></td><td>Scoped CSS, native, no runtime</td><td>Kurang fleksibel</td></tr>
    <tr><td><strong>styled-components</strong></td><td>CSS-in-JS, dynamic styling</td><td>Runtime cost, larger bundle</td></tr>
    <tr><td><strong>shadcn/ui</strong></td><td>Copy-paste, fully customizable, accessible</td><td>Manual updates, setup</td></tr>
    </table>
    </div>
</div>

<!-- ==================== SECTION 14: TESTING ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">14. Testing</h2>

<div class="card animate-in">
    <h3>Testing Pyramid di JavaScript</h3>
    <div class="code-block">
<span class="cm">// Jest + React Testing Library (unit/integration)</span>
<span class="kw">import</span> { render, screen, fireEvent } <span class="kw">from</span> <span class="str">"@testing-library/react"</span>;
<span class="kw">import</span> { Counter } <span class="kw">from</span> <span class="str">"./Counter"</span>;

<span class="fn">describe</span>(<span class="str">"Counter"</span>, () =&gt; {
    <span class="fn">it</span>(<span class="str">"increments when button clicked"</span>, () =&gt; {
        <span class="fn">render</span>(&lt;Counter /&gt;);

        <span class="kw">const</span> button = screen.<span class="fn">getByRole</span>(<span class="str">"button"</span>, { name: /increment/i });
        <span class="fn">fireEvent</span>.<span class="fn">click</span>(button);

        <span class="fn">expect</span>(screen.<span class="fn">getByText</span>(<span class="str">"Count: 1"</span>)).<span class="fn">toBeInTheDocument</span>();
    });
});

<span class="cm">// Playwright (E2E testing)</span>
<span class="kw">import</span> { test, expect } <span class="kw">from</span> <span class="str">"@playwright/test"</span>;

<span class="fn">test</span>(<span class="str">"user can login"</span>, <span class="kw">async</span> ({ page }) =&gt; {
    <span class="kw">await</span> page.<span class="fn">goto</span>(<span class="str">"/login"</span>);
    <span class="kw">await</span> page.<span class="fn">fill</span>(<span class="str">'[name="email"]'</span>, <span class="str">"test@example.com"</span>);
    <span class="kw">await</span> page.<span class="fn">fill</span>(<span class="str">'[name="password"]'</span>, <span class="str">"password123"</span>);
    <span class="kw">await</span> page.<span class="fn">click</span>(<span class="str">'button[type="submit"]'</span>);
    <span class="kw">await</span> <span class="fn">expect</span>(page).<span class="fn">toHaveURL</span>(<span class="str">"/dashboard"</span>);
});
    </div>
</div>

<!-- ==================== SECTION 15: DEPLOYMENT ==================== -->
<h2 class="section-title" style="font-size:1.5rem;">15. Deployment &amp; Best Practices</h2>

<div class="card animate-in">
    <h3>Deploy Next.js</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Platform</th><th>Kelebihan</th><th>Command</th></tr>
    <tr><td><strong>Vercel</strong></td><td>Optimized for Next.js (by Vercel), auto preview deploy</td><td><code>vercel deploy</code></td></tr>
    <tr><td><strong>Docker</strong></td><td>Portable, self-hosted</td><td><code>docker build -t app . &amp;&amp; docker run -p 3000:3000 app</code></td></tr>
    <tr><td><strong>Cloudflare Pages</strong></td><td>Edge runtime, free tier</td><td><code>npx wrangler pages deploy</code></td></tr>
    <tr><td><strong>AWS Amplify</strong></td><td>Full AWS integration</td><td>Git-based deploy</td></tr>
    </table>
    </div>

    <div class="code-block">
<span class="cm">// next.config.ts (Next.js 15+)</span>
<span class="kw">import type</span> { NextConfig } <span class="kw">from</span> <span class="str">"next"</span>;

<span class="kw">const</span> config: NextConfig = {
    images: {
        remotePatterns: [{ hostname: <span class="str">"cdn.example.com"</span> }],
    },
    experimental: {
        ppr: <span class="kw">true</span>,         <span class="cm">// Partial Prerendering</span>
    },
};
<span class="kw">export default</span> config;

<span class="cm">// middleware.ts (runs on EVERY request)</span>
<span class="kw">import</span> { NextResponse } <span class="kw">from</span> <span class="str">"next/server"</span>;
<span class="kw">import type</span> { NextRequest } <span class="kw">from</span> <span class="str">"next/server"</span>;

<span class="kw">export function</span> <span class="fn">middleware</span>(req: NextRequest) {
    <span class="kw">const</span> token = req.cookies.<span class="fn">get</span>(<span class="str">"token"</span>);
    <span class="kw">if</span> (!token &amp;&amp; req.nextUrl.pathname.<span class="fn">startsWith</span>(<span class="str">"/dashboard"</span>)) {
        <span class="kw">return</span> NextResponse.<span class="fn">redirect</span>(<span class="kw">new</span> <span class="fn">URL</span>(<span class="str">"/login"</span>, req.url));
    }
}

<span class="kw">export const</span> config = {
    matcher: [<span class="str">"/dashboard/:path*"</span>],
};
    </div>
</div>

<!-- ==================== REFERENCES ==================== -->
<div class="card animate-in" style="border-left: 3px solid var(--accent);">
    <h3>Referensi &amp; Sumber</h3>
    <ul>
        <li><strong>MDN Web Docs</strong> &mdash; <a href="https://developer.mozilla.org/" target="_blank" style="color:var(--accent)">developer.mozilla.org</a> (the canonical JS reference)</li>
        <li><strong>Next.js Documentation</strong> &mdash; <a href="https://nextjs.org/docs" target="_blank" style="color:var(--accent)">nextjs.org/docs</a></li>
        <li><strong>React Documentation</strong> &mdash; <a href="https://react.dev" target="_blank" style="color:var(--accent)">react.dev</a></li>
        <li><strong>TypeScript Handbook</strong> &mdash; <a href="https://www.typescriptlang.org/docs/" target="_blank" style="color:var(--accent)">typescriptlang.org/docs</a></li>
        <li><strong>JavaScript.info</strong> &mdash; <a href="https://javascript.info" target="_blank" style="color:var(--accent)">javascript.info</a> (modern JS tutorial)</li>
        <li>Kyle Simpson, <em>"You Don't Know JS"</em> (book series)</li>
        <li>Marijn Haverbeke, <em>"Eloquent JavaScript"</em> (3rd ed.)</li>
        <li>Douglas Crockford, <em>"JavaScript: The Good Parts"</em></li>
        <li><strong>Node.js Docs</strong> &mdash; <a href="https://nodejs.org/docs" target="_blank" style="color:var(--accent)">nodejs.org/docs</a></li>
    </ul>
</div>

</section>
`;

// ============================================================
// JAVASCRIPT ANIMATIONS
// ============================================================

function initJavaScriptAnimations() {
    const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

    // ── CANVAS 1: EVENT LOOP ──
    (function() {
        const canvas = document.getElementById('canvas-event-loop');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        let animId = null;
        let tick = 0;
        let running = false;

        const tasks = [];
        const microtasks = [];
        const callStack = [];
        let phase = 0; // 0=idle, 1=sync, 2=microtask, 3=macrotask, 4=done
        let timer = 0;

        const steps = [
            { type: 'sync', label: 'console.log("Start")', color: '#00b894' },
            { type: 'macro', label: 'setTimeout(cb, 0)', color: '#e17055', delay: 40 },
            { type: 'micro', label: 'Promise.then(cb)', color: '#6c5ce7', delay: 0 },
            { type: 'sync', label: 'console.log("End")', color: '#00b894' },
        ];
        let stepIdx = 0;
        let output = [];

        function reset() {
            if (animId) cancelAnimationFrame(animId);
            running = false;
            tick = 0;
            phase = 0;
            timer = 0;
            stepIdx = 0;
            output = [];
            tasks.length = 0;
            microtasks.length = 0;
            callStack.length = 0;
            drawFrame();
        }

        function roundRect(x, y, w, h, r) {
            ctx.beginPath();
            ctx.moveTo(x+r, y);
            ctx.lineTo(x+w-r, y);
            ctx.quadraticCurveTo(x+w, y, x+w, y+r);
            ctx.lineTo(x+w, y+h-r);
            ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
            ctx.lineTo(x+r, y+h);
            ctx.quadraticCurveTo(x, y+h, x, y+h-r);
            ctx.lineTo(x, y+r);
            ctx.quadraticCurveTo(x, y, x+r, y);
            ctx.closePath();
        }

        function drawFrame() {
            const dark = isDark();
            const bg = dark ? '#0a0a1a' : '#f5f5f5';
            const text = dark ? '#e0e0e0' : '#1a1a2e';
            const text2 = dark ? '#8888aa' : '#666';
            const border = dark ? '#333' : '#ccc';

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Columns
            const cols = [
                { x: 20, w: 170, title: 'Call Stack', items: callStack, color: '#00b894' },
                { x: 210, w: 170, title: 'Web APIs', items: tasks.filter(t=>!t.ready), color: '#fdcb6e' },
                { x: 400, w: 160, title: 'Microtask Q', items: microtasks, color: '#6c5ce7' },
                { x: 580, w: 160, title: 'Macro Task Q', items: tasks.filter(t=>t.ready), color: '#e17055' },
            ];

            cols.forEach(col => {
                ctx.strokeStyle = border;
                ctx.lineWidth = 1;
                roundRect(col.x, 35, col.w, H - 75, 8);
                ctx.stroke();

                ctx.fillStyle = col.color;
                ctx.font = 'bold 12px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(col.title, col.x + col.w/2, 28);

                col.items.forEach((item, i) => {
                    const iy = 50 + i * 36;
                    ctx.fillStyle = item.color || col.color;
                    ctx.globalAlpha = 0.2;
                    roundRect(col.x + 8, iy, col.w - 16, 30, 6);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = item.color || col.color;
                    ctx.lineWidth = 1;
                    roundRect(col.x + 8, iy, col.w - 16, 30, 6);
                    ctx.stroke();

                    ctx.fillStyle = text;
                    ctx.font = '10px JetBrains Mono, monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(item.label.substring(0, 20), col.x + col.w/2, iy + 19);
                });
            });

            // Output
            ctx.fillStyle = text2;
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Output:', 20, H - 28);
            ctx.fillStyle = text;
            ctx.font = '11px JetBrains Mono, monospace';
            const outStr = output.join(' > ');
            ctx.fillText(outStr.substring(0, 90), 80, H - 28);
        }

        function animate() {
            tick++;

            if (tick % 30 === 0 && stepIdx < steps.length) {
                const s = steps[stepIdx];
                if (s.type === 'sync') {
                    callStack.push({ label: s.label, color: s.color });
                } else if (s.type === 'macro') {
                    tasks.push({ label: s.label, color: s.color, ready: false, readyAt: tick + 60 });
                } else if (s.type === 'micro') {
                    microtasks.push({ label: s.label, color: s.color });
                }
                stepIdx++;
            }

            // Process callstack
            if (tick % 40 === 0 && callStack.length > 0) {
                const item = callStack.pop();
                output.push(item.label.replace(/console\.log\("|"\)/g, '').replace(/"/g, ''));
            }

            // Timer for macrotask
            tasks.forEach(t => { if (!t.ready && tick >= t.readyAt) t.ready = true; });

            // After sync done: process microtasks
            if (stepIdx >= steps.length && callStack.length === 0 && tick % 50 === 0) {
                if (microtasks.length > 0) {
                    const m = microtasks.shift();
                    output.push('Promise');
                } else if (tasks.some(t => t.ready)) {
                    const idx = tasks.findIndex(t => t.ready);
                    if (idx >= 0) {
                        output.push('Timeout');
                        tasks.splice(idx, 1);
                    }
                }
            }

            drawFrame();

            if (output.length < 4 || tasks.length > 0 || microtasks.length > 0 || callStack.length > 0) {
                animId = requestAnimationFrame(animate);
            } else {
                running = false;
            }
        }

        const btnStart = document.getElementById('btn-eventloop-start');
        const btnReset = document.getElementById('btn-eventloop-reset');
        if (btnStart) btnStart.addEventListener('click', () => {
            if (running) return;
            reset();
            running = true;
            animate();
        });
        if (btnReset) btnReset.addEventListener('click', reset);
        reset();
    })();

    // ── CANVAS 2: REACT VDOM ──
    (function() {
        const canvas = document.getElementById('canvas-react-vdom');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        let animId = null;
        let tick = 0;
        let running = false;

        const oldTree = [
            { x: 375, y: 40, label: '<App>', children: [0, 1] },
            { x: 225, y: 130, label: '<Header>', children: [2] },
            { x: 525, y: 130, label: '<List>', children: [3, 4] },
            { x: 150, y: 220, label: '"Hello"', children: [] },
            { x: 425, y: 220, label: '<Item a>', children: [] },
            { x: 575, y: 220, label: '<Item b>', children: [] },
        ];

        const newTree = [
            { x: 375, y: 40, label: '<App>', children: [0, 1], status: 'same' },
            { x: 225, y: 130, label: '<Header>', children: [2], status: 'same' },
            { x: 525, y: 130, label: '<List>', children: [3, 4, 5], status: 'updated' },
            { x: 150, y: 220, label: '"World"', children: [], status: 'updated' },
            { x: 425, y: 220, label: '<Item a>', children: [], status: 'same' },
            { x: 575, y: 220, label: '<Item b>', children: [], status: 'same' },
            { x: 675, y: 220, label: '<Item c>', children: [], status: 'added' },
        ];

        let showPhase = 0; // 0=old, 1=diff, 2=new

        function drawTree(tree, offsetX, phase) {
            const dark = isDark();
            const bg = dark ? '#0a0a1a' : '#f5f5f5';
            const text = dark ? '#e0e0e0' : '#1a1a2e';
            const border = dark ? '#555' : '#aaa';

            tree.forEach((node, i) => {
                node.children.forEach(ci => {
                    if (ci < tree.length) {
                        ctx.beginPath();
                        ctx.moveTo(node.x + offsetX, node.y + 18);
                        ctx.lineTo(tree[ci].x + offsetX, tree[ci].y - 2);
                        ctx.strokeStyle = border;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                });
            });

            tree.forEach((node, i) => {
                let fill = dark ? '#1a2332' : '#e0e8f0';
                let stroke = '#6c5ce7';
                if (phase > 0 && node.status === 'updated') { fill = 'rgba(253,203,110,0.3)'; stroke = '#fdcb6e'; }
                if (phase > 0 && node.status === 'added') { fill = 'rgba(0,184,148,0.3)'; stroke = '#00b894'; }

                ctx.fillStyle = fill;
                ctx.strokeStyle = stroke;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(node.x + offsetX - 42, node.y - 14, 84, 28, 8);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = text;
                ctx.font = '11px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(node.label, node.x + offsetX, node.y + 4);
            });
        }

        function drawFrame() {
            const dark = isDark();
            ctx.fillStyle = dark ? '#0a0a1a' : '#f5f5f5';
            ctx.fillRect(0, 0, W, H);

            ctx.fillStyle = dark ? '#e0e0e0' : '#1a1a2e';
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';

            if (showPhase === 0) {
                ctx.fillText('Old Virtual DOM', W/2, H - 20);
                drawTree(oldTree, 0, 0);
            } else if (showPhase === 1) {
                ctx.fillText('Diffing: yellow=changed, green=added', W/2, H - 20);
                drawTree(newTree, 0, 1);
            } else {
                ctx.fillText('Reconciled: only changed nodes updated in real DOM', W/2, H - 20);
                drawTree(newTree, 0, 2);
            }
        }

        function animate() {
            tick++;
            if (tick % 90 === 0) {
                showPhase++;
                if (showPhase > 2) { running = false; return; }
            }
            drawFrame();
            if (running) animId = requestAnimationFrame(animate);
        }

        function reset() {
            if (animId) cancelAnimationFrame(animId);
            running = false;
            tick = 0;
            showPhase = 0;
            drawFrame();
        }

        const btnStart = document.getElementById('btn-vdom-start');
        const btnReset = document.getElementById('btn-vdom-reset');
        if (btnStart) btnStart.addEventListener('click', () => {
            if (running) return;
            reset();
            running = true;
            animate();
        });
        if (btnReset) btnReset.addEventListener('click', reset);
        reset();
    })();

    // ── CANVAS 3: NEXT.JS RENDERING ──
    (function() {
        const canvas = document.getElementById('canvas-nextjs-rendering');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        let animId = null;
        let tick = 0;
        let running = false;

        const strategies = [
            { name: 'SSG', color: '#00b894', desc: 'Build Time', steps: ['Build', 'CDN Cache', 'Instant Response'] },
            { name: 'SSR', color: '#e17055', desc: 'Per Request', steps: ['Request', 'Server Render', 'Send HTML'] },
            { name: 'ISR', color: '#6c5ce7', desc: 'Revalidate', steps: ['Cache Hit', 'Background Regen', 'Fresh Cache'] },
            { name: 'CSR', color: '#fdcb6e', desc: 'Client', steps: ['Empty HTML', 'Download JS', 'Client Render'] },
        ];

        let progress = [0, 0, 0, 0];
        const rowH = 70;
        const startY = 60;

        function drawFrame() {
            const dark = isDark();
            ctx.fillStyle = dark ? '#0a0a1a' : '#f5f5f5';
            ctx.fillRect(0, 0, W, H);

            ctx.fillStyle = dark ? '#e0e0e0' : '#1a1a2e';
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Next.js Rendering Strategies', W/2, 30);

            strategies.forEach((s, i) => {
                const y = startY + i * rowH;

                // Label
                ctx.fillStyle = s.color;
                ctx.font = 'bold 13px Inter, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(s.name, 20, y + 20);
                ctx.fillStyle = dark ? '#8888aa' : '#666';
                ctx.font = '10px Inter, sans-serif';
                ctx.fillText(s.desc, 20, y + 35);

                // Timeline bar
                const barX = 110, barW = W - 140;
                ctx.fillStyle = dark ? '#1a2332' : '#e0e8f0';
                ctx.beginPath();
                ctx.roundRect(barX, y + 8, barW, 30, 6);
                ctx.fill();

                // Progress
                const pw = Math.min(progress[i], 1) * barW;
                ctx.fillStyle = s.color;
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.roundRect(barX, y + 8, pw, 30, 6);
                ctx.fill();
                ctx.globalAlpha = 1;

                // Step labels
                s.steps.forEach((step, si) => {
                    const sx = barX + (si + 0.5) * (barW / 3);
                    const stepProgress = progress[i] * 3;
                    ctx.fillStyle = stepProgress > si ? s.color : (dark ? '#555' : '#bbb');
                    ctx.font = '10px JetBrains Mono, monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(step, sx, y + 27);
                });
            });
        }

        function animate() {
            tick++;
            const speed = [0.025, 0.012, 0.018, 0.008];
            strategies.forEach((s, i) => {
                if (progress[i] < 1) progress[i] += speed[i];
                if (progress[i] > 1) progress[i] = 1;
            });

            drawFrame();

            if (progress.every(p => p >= 1)) {
                running = false;
                return;
            }
            if (running) animId = requestAnimationFrame(animate);
        }

        function reset() {
            if (animId) cancelAnimationFrame(animId);
            running = false;
            tick = 0;
            progress = [0, 0, 0, 0];
            drawFrame();
        }

        const btnStart = document.getElementById('btn-rendering-start');
        const btnReset = document.getElementById('btn-rendering-reset');
        if (btnStart) btnStart.addEventListener('click', () => {
            if (running) return;
            reset();
            running = true;
            animate();
        });
        if (btnReset) btnReset.addEventListener('click', reset);
        reset();
    })();
}
