// ============================================================
// RUST DEEP DIVE - Comprehensive Interactive Learning
// Reference: Dasar Pemrograman Rust by Novalagung
//            https://dasarpemrogramanrust.novalagung.com
// ============================================================

sections['lang-rust'] = () => `
<section class="animate-in">
<h1 class="section-title animate-in">Rust Deep Dive</h1>
<p class="section-subtitle animate-in">Bahasa sistem modern — memory safety tanpa garbage collector, zero-cost abstractions, fearless concurrency. Referensi utama: <strong>Dasar Pemrograman Rust</strong> by Novalagung.</p>

<!-- ===================== 1. MENGAPA RUST ===================== -->
<h2 class="animate-in">1. Mengapa Rust?</h2>

<div class="card animate-in">
<h3>Sejarah &amp; Latar Belakang</h3>
<p>Rust dimulai sebagai proyek pribadi <strong>Graydon Hoare</strong> di Mozilla Research pada tahun <strong>2006</strong>. Mozilla mulai mendanai proyek ini pada 2009, dan versi stabil <strong>1.0 dirilis 15 Mei 2015</strong>. Pada 2021, <strong>Rust Foundation</strong> didirikan oleh AWS, Google, Huawei, Microsoft, dan Mozilla untuk mengelola bahasa ini secara independen.</p>
<p>Rust dirancang untuk memecahkan masalah yang sudah puluhan tahun menghantui C/C++: <em>segmentation fault</em>, <em>buffer overflow</em>, <em>use-after-free</em>, dan <em>data race</em> — semuanya tanpa mengorbankan performa.</p>
<div class="info-box">
<strong>Filosofi Inti:</strong> "Jika program berhasil dikompilasi, maka ia bebas dari memory bug." Rust mencapai ini melalui <strong>ownership system</strong> yang diverifikasi saat compile time — bukan runtime. Hasilnya: performa setara C/C++ dengan keamanan sekelas bahasa managed.
</div>
</div>

<div class="card-grid animate-in">
<div class="card">
<h4>Desain Goals</h4>
<ul>
<li><strong>Memory Safety tanpa GC</strong> — No null pointer, no dangling ref, no double-free</li>
<li><strong>Zero-Cost Abstractions</strong> — Abstraksi tinggi tanpa overhead runtime</li>
<li><strong>Fearless Concurrency</strong> — Data race mustahil di safe Rust</li>
<li><strong>Performa C/C++</strong> — Deterministic memory, no GC pause</li>
<li><strong>Ekosistem Modern</strong> — Cargo, crates.io, rustfmt, clippy</li>
</ul>
</div>
<div class="card">
<h4>Use Cases Nyata</h4>
<ul>
<li><strong>OS &amp; Kernel</strong> — Linux kernel (2022+), Redox OS</li>
<li><strong>WebAssembly</strong> — Performa native di browser</li>
<li><strong>Web Backend</strong> — Discord (dari Go ke Rust, 10x lebih efisien)</li>
<li><strong>Networking</strong> — Cloudflare, Deno, Fastly</li>
<li><strong>Embedded</strong> — Firmware, microcontroller</li>
<li><strong>Game Engine</strong> — Bevy Engine</li>
<li><strong>Browser</strong> — Firefox (Servo, stylo engine)</li>
</ul>
</div>
</div>

<div class="card animate-in">
<h3>Rust vs C++ — Perbandingan</h3>
<div class="table-wrapper">
<table>
<tr><th>Aspek</th><th>C++</th><th>Rust</th></tr>
<tr><td>Performa</td><td>Sangat cepat (bare metal)</td><td>Setara C++ (zero-cost abstraction)</td></tr>
<tr><td>Memory Safety</td><td>Manual, rawan bug</td><td>Dijamin compiler (ownership)</td></tr>
<tr><td>Data Race</td><td>Mungkin terjadi</td><td>Tidak mungkin di safe Rust</td></tr>
<tr><td>Null Pointer</td><td>Ada (UB)</td><td>Tidak ada — gunakan Option&lt;T&gt;</td></tr>
<tr><td>Error Handling</td><td>Exception / errno</td><td>Result&lt;T,E&gt; — tipe, bukan exception</td></tr>
<tr><td>Package Manager</td><td>Tidak ada standar</td><td>Cargo (official, excellent)</td></tr>
<tr><td>Build System</td><td>CMake, Make, dll</td><td>Cargo (terintegrasi)</td></tr>
<tr><td>Learning Curve</td><td>Tinggi (UB overhang)</td><td>Tinggi (borrow checker, tetapi benar)</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Rust Editions</h3>
<p>Rust menggunakan sistem <strong>edition</strong> untuk memperkenalkan perubahan bahasa tanpa merusak backward compatibility. Setiap crate menentukan edition-nya sendiri di <code>Cargo.toml</code>.</p>
<div class="table-wrapper">
<table>
<tr><th>Edition</th><th>Tahun</th><th>Perubahan Utama</th></tr>
<tr><td>Rust 2015</td><td>2015</td><td>Edition pertama (default lama)</td></tr>
<tr><td>Rust 2018</td><td>2018</td><td>NLL (Non-Lexical Lifetimes), async/await prep</td></tr>
<tr><td>Rust 2021</td><td>2021</td><td>Resolver 2.0, or-patterns, panic macro changes — <strong>Recommended</strong></td></tr>
</table>
</div>
<div class="code-block"><span class="cm"># Cargo.toml — gunakan Rust 2021</span>
[package]
name = <span class="str">"my_project"</span>
version = <span class="str">"0.1.0"</span>
edition = <span class="str">"2021"</span></div>
</div>

<!-- ===================== 2. OWNERSHIP SYSTEM ===================== -->
<h2 class="animate-in">2. Ownership System — Inti Rust</h2>

<div class="card animate-in">
<h3>Tiga Aturan Ownership</h3>
<div class="info-box">
<ol>
<li>Setiap nilai (<em>value</em>) di Rust memiliki tepat <strong>satu pemilik</strong> (<em>owner</em>)</li>
<li>Hanya bisa ada <strong>satu owner</strong> pada satu waktu</li>
<li>Ketika owner keluar dari <em>scope</em>, nilai <strong>otomatis di-drop</strong> (memori dibebaskan)</li>
</ol>
</div>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// s1 adalah owner dari String "hello"</span>
    <span class="kw">let</span> s1 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);

    <span class="cm">// MOVE: ownership berpindah ke s2</span>
    <span class="cm">// s1 tidak lagi valid setelah baris ini!</span>
    <span class="kw">let</span> s2 = s1;

    <span class="cm">// println!("{}", s1); // ERROR: value borrowed here after move</span>
    <span class="fn">println!</span>(<span class="str">"s2 = {}"</span>, s2); <span class="cm">// OK</span>

    <span class="cm">// Tipe Copy (stack-only) TIDAK di-move, melainkan COPY</span>
    <span class="kw">let</span> x = <span class="num">5</span>;
    <span class="kw">let</span> y = x; <span class="cm">// x masih valid karena i32 implements Copy</span>
    <span class="fn">println!</span>(<span class="str">"x={}, y={}"</span>, x, y);
} <span class="cm">// s2 di-drop di sini — memori otomatis bebas</span></div>
</div>

<div class="card animate-in">
<h3>Move vs Copy</h3>
<div class="card-grid">
<div class="card">
<h4>Move Semantics (Heap types)</h4>
<p>Tipe yang mengalokasikan heap (String, Vec, Box, dll.) menggunakan <strong>move semantics</strong>. Ownership berpindah, yang lama tidak valid.</p>
<div class="code-block"><span class="kw">let</span> v1 = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">let</span> v2 = v1; <span class="cm">// moved</span>
<span class="cm">// v1 sudah tidak valid</span>

<span class="cm">// Clone untuk membuat deep copy:</span>
<span class="kw">let</span> s1 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hi"</span>);
<span class="kw">let</span> s2 = s1.<span class="fn">clone</span>(); <span class="cm">// deep copy</span>
<span class="fn">println!</span>(<span class="str">"{} {}"</span>, s1, s2); <span class="cm">// keduanya valid</span></div>
</div>
<div class="card">
<h4>Copy Trait (Stack types)</h4>
<p>Tipe stack-only yang murah untuk di-copy mengimplementasikan <strong>Copy trait</strong>. Assignment membuat copy otomatis.</p>
<div class="code-block"><span class="cm">// Semua tipe ini Copy:</span>
<span class="cm">// i8, i16, i32, i64, i128, isize</span>
<span class="cm">// u8, u16, u32, u64, u128, usize</span>
<span class="cm">// f32, f64, bool, char</span>
<span class="cm">// Tuple/array dari Copy types</span>

<span class="kw">let</span> a: <span class="type">i32</span> = <span class="num">42</span>;
<span class="kw">let</span> b = a; <span class="cm">// copy, bukan move</span>
<span class="fn">println!</span>(<span class="str">"{} {}"</span>, a, b); <span class="cm">// keduanya OK</span></div>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Ownership &amp; Functions</h3>
<div class="code-block"><span class="kw">fn</span> <span class="fn">takes_ownership</span>(s: <span class="type">String</span>) {
    <span class="fn">println!</span>(<span class="str">"Got: {}"</span>, s);
} <span class="cm">// s di-drop di sini</span>

<span class="kw">fn</span> <span class="fn">makes_copy</span>(x: <span class="type">i32</span>) {
    <span class="fn">println!</span>(<span class="str">"Got: {}"</span>, x);
} <span class="cm">// x keluar scope, tidak ada efek pada caller</span>

<span class="kw">fn</span> <span class="fn">gives_ownership</span>() -&gt; <span class="type">String</span> {
    <span class="kw">let</span> s = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"owned"</span>);
    s <span class="cm">// ownership dikembalikan ke caller</span>
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> s = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="fn">takes_ownership</span>(s); <span class="cm">// s pindah ke fungsi</span>
    <span class="cm">// s tidak valid lagi</span>

    <span class="kw">let</span> x = <span class="num">5</span>;
    <span class="fn">makes_copy</span>(x); <span class="cm">// x di-copy</span>
    <span class="fn">println!</span>(<span class="str">"x masih valid: {}"</span>, x);

    <span class="kw">let</span> returned = <span class="fn">gives_ownership</span>();
    <span class="fn">println!</span>(<span class="str">"returned: {}"</span>, returned);
}</div>
</div>

<!-- Canvas Ownership Animation -->
<div class="card animate-in">
<h3>Visualisasi Ownership &amp; Borrow Checker</h3>
<div class="anim-container">
<canvas id="canvas-rust-ownership" width="700" height="340" style="width:100%;max-width:700px;border-radius:8px;"></canvas>
</div>
<div class="anim-controls">
<button class="anim-btn" id="rust-own-move">Move Semantics</button>
<button class="anim-btn" id="rust-own-borrow">Immutable Borrow (&amp;T)</button>
<button class="anim-btn" id="rust-own-mutborrow">Mutable Borrow (&amp;mut T)</button>
<button class="anim-btn" id="rust-own-reset">Reset</button>
</div>
</div>

<!-- ===================== 3. BORROWING & REFERENCES ===================== -->
<h2 class="animate-in">3. Borrowing &amp; References</h2>

<div class="card animate-in">
<h3>Aturan Borrowing</h3>
<div class="info-box">
Pada satu waktu, kamu bisa memiliki <strong>SALAH SATU</strong> dari:
<ul>
<li>Satu <code>&amp;mut T</code> (mutable reference) — exclusive access</li>
<li>Banyak <code>&amp;T</code> (immutable reference) — shared read access</li>
</ul>
Reference selalu harus valid — tidak ada dangling reference di safe Rust.
</div>
<div class="code-block"><span class="kw">fn</span> <span class="fn">calculate_length</span>(s: &amp;<span class="type">String</span>) -&gt; <span class="type">usize</span> {
    s.<span class="fn">len</span>() <span class="cm">// hanya meminjam, tidak mengambil ownership</span>
}

<span class="kw">fn</span> <span class="fn">change</span>(s: &amp;<span class="kw">mut</span> <span class="type">String</span>) {
    s.<span class="fn">push_str</span>(<span class="str">" world"</span>);
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> s = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="kw">let</span> len = <span class="fn">calculate_length</span>(&amp;s); <span class="cm">// borrow s</span>
    <span class="fn">println!</span>(<span class="str">"'{}' punya panjang {}"</span>, s, len); <span class="cm">// s masih valid</span>

    <span class="kw">let mut</span> ms = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="fn">change</span>(&amp;<span class="kw">mut</span> ms); <span class="cm">// mutable borrow</span>
    <span class="fn">println!</span>(<span class="str">"{}"</span>, ms); <span class="cm">// "hello world"</span>

    <span class="cm">// ERROR: tidak bisa 2 &amp;mut sekaligus</span>
    <span class="cm">// let r1 = &amp;mut ms;</span>
    <span class="cm">// let r2 = &amp;mut ms; // compile error!</span>
}</div>
</div>

<div class="card animate-in">
<h3>Lifetime Annotations</h3>
<p>Lifetime memastikan reference tidak hidup lebih lama dari data yang dirujuknya. Biasanya compiler bisa <em>infer</em> lifetime (elision rules), tapi kadang perlu anotasi eksplisit.</p>
<div class="code-block"><span class="cm">// Tanpa anotasi lifetime — compiler bingung:</span>
<span class="cm">// fn longest(x: &str, y: &str) -&gt; &str { ... } // ERROR</span>

<span class="cm">// Dengan anotasi lifetime 'a:</span>
<span class="kw">fn</span> <span class="fn">longest</span>&lt;<span class="num">'a</span>&gt;(x: &amp;<span class="num">'a</span> <span class="type">str</span>, y: &amp;<span class="num">'a</span> <span class="type">str</span>) -&gt; &amp;<span class="num">'a</span> <span class="type">str</span> {
    <span class="kw">if</span> x.<span class="fn">len</span>() &gt; y.<span class="fn">len</span>() { x } <span class="kw">else</span> { y }
}

<span class="cm">// Struct dengan lifetime:</span>
<span class="kw">struct</span> <span class="type">Excerpt</span>&lt;<span class="num">'a</span>&gt; {
    part: &amp;<span class="num">'a</span> <span class="type">str</span>,
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> s1 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"long string"</span>);
    <span class="kw">let</span> result;
    {
        <span class="kw">let</span> s2 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"xy"</span>);
        result = <span class="fn">longest</span>(s1.<span class="fn">as_str</span>(), s2.<span class="fn">as_str</span>());
        <span class="fn">println!</span>(<span class="str">"longest: {}"</span>, result);
    } <span class="cm">// s2 di-drop — result tidak boleh digunakan lagi</span>

    <span class="cm">// 'static: hidup sepanjang program</span>
    <span class="kw">let</span> lit: &amp;<span class="num">'static</span> <span class="type">str</span> = <span class="str">"string literal"</span>;
}</div>
</div>

<div class="card animate-in">
<h3>Borrow Checker Visualisasi</h3>
<div class="anim-container">
<canvas id="canvas-rust-borrow" width="700" height="300" style="width:100%;max-width:700px;border-radius:8px;"></canvas>
</div>
<div class="anim-controls">
<button class="anim-btn" id="rust-borrow-shared">Shared Borrows (&amp;T)</button>
<button class="anim-btn" id="rust-borrow-exclusive">Exclusive Borrow (&amp;mut T)</button>
<button class="anim-btn" id="rust-borrow-conflict">Conflict Error</button>
</div>
</div>

<!-- ===================== 4. BASIC SYNTAX ===================== -->
<h2 class="animate-in">4. Sintaks Dasar</h2>

<div class="card animate-in">
<h3>Variabel &amp; Tipe Data</h3>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// let = immutable by default</span>
    <span class="kw">let</span> x = <span class="num">5</span>;               <span class="cm">// type inference: i32</span>
    <span class="kw">let mut</span> y = <span class="num">10</span>;          <span class="cm">// mutable</span>
    y = <span class="num">20</span>;

    <span class="cm">// Explicit type annotation</span>
    <span class="kw">let</span> a: <span class="type">i64</span> = <span class="num">-9_000_000</span>;  <span class="cm">// underscore = digit separator</span>
    <span class="kw">let</span> b: <span class="type">u8</span>  = <span class="num">255</span>;
    <span class="kw">let</span> c: <span class="type">f64</span> = <span class="num">3.14159</span>;
    <span class="kw">let</span> d: <span class="type">bool</span> = <span class="kw">true</span>;
    <span class="kw">let</span> e: <span class="type">char</span> = <span class="str">'Z'</span>;       <span class="cm">// 4-byte Unicode scalar</span>

    <span class="cm">// Shadowing — re-declare dengan nama sama (boleh ganti tipe)</span>
    <span class="kw">let</span> spaces = <span class="str">"   "</span>;              <span class="cm">// &amp;str</span>
    <span class="kw">let</span> spaces = spaces.<span class="fn">len</span>();       <span class="cm">// usize</span>

    <span class="cm">// const — selalu immutable, compile-time value</span>
    <span class="kw">const</span> MAX: <span class="type">u32</span> = <span class="num">100_000</span>;
}</div>
</div>

<div class="card animate-in">
<h3>Tipe Data Scalar &amp; Compound</h3>
<div class="table-wrapper">
<table>
<tr><th>Kategori</th><th>Tipe</th><th>Ukuran</th><th>Keterangan</th></tr>
<tr><td rowspan="6"><strong>Integer Signed</strong></td><td><code>i8</code></td><td>1 byte</td><td>-128..127</td></tr>
<tr><td><code>i16</code></td><td>2 byte</td><td>-32,768..32,767</td></tr>
<tr><td><code>i32</code></td><td>4 byte</td><td>Default integer</td></tr>
<tr><td><code>i64</code></td><td>8 byte</td><td></td></tr>
<tr><td><code>i128</code></td><td>16 byte</td><td></td></tr>
<tr><td><code>isize</code></td><td>arch</td><td>Pointer-sized signed</td></tr>
<tr><td rowspan="6"><strong>Integer Unsigned</strong></td><td><code>u8</code></td><td>1 byte</td><td>0..255</td></tr>
<tr><td><code>u16</code></td><td>2 byte</td><td>0..65,535</td></tr>
<tr><td><code>u32</code></td><td>4 byte</td><td></td></tr>
<tr><td><code>u64</code></td><td>8 byte</td><td></td></tr>
<tr><td><code>u128</code></td><td>16 byte</td><td></td></tr>
<tr><td><code>usize</code></td><td>arch</td><td>Pointer-sized, index type</td></tr>
<tr><td><strong>Float</strong></td><td><code>f32</code>, <code>f64</code></td><td>4/8 byte</td><td>Default: f64</td></tr>
<tr><td><strong>Bool</strong></td><td><code>bool</code></td><td>1 byte</td><td>true / false</td></tr>
<tr><td><strong>Char</strong></td><td><code>char</code></td><td>4 byte</td><td>Unicode scalar value</td></tr>
<tr><td><strong>Tuple</strong></td><td><code>(T1, T2, ...)</code></td><td>sum</td><td>Fixed-size, mixed types</td></tr>
<tr><td><strong>Array</strong></td><td><code>[T; N]</code></td><td>N*size(T)</td><td>Fixed-length, same type</td></tr>
</table>
</div>
<div class="code-block"><span class="cm">// Tuple</span>
<span class="kw">let</span> tup: (<span class="type">i32</span>, <span class="type">f64</span>, <span class="type">bool</span>) = (<span class="num">500</span>, <span class="num">6.4</span>, <span class="kw">true</span>);
<span class="kw">let</span> (x, y, z) = tup;        <span class="cm">// destructuring</span>
<span class="kw">let</span> first = tup.<span class="num">0</span>;          <span class="cm">// index access</span>

<span class="cm">// Array — fixed size</span>
<span class="kw">let</span> arr: [<span class="type">i32</span>; <span class="num">5</span>] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="kw">let</span> zeros = [<span class="num">0</span>; <span class="num">10</span>]; <span class="cm">// [0, 0, 0, ..., 0] (10 elemen)</span>
<span class="fn">println!</span>(<span class="str">"arr[0] = {}"</span>, arr[<span class="num">0</span>]);</div>
</div>

<div class="card animate-in">
<h3>String: &amp;str vs String</h3>
<div class="card-grid">
<div class="card">
<h4><code>&amp;str</code> — String Slice</h4>
<p>Referensi ke data UTF-8 yang sudah ada. Immutable, tidak punya ownership. String literal selalu <code>&amp;'static str</code>.</p>
<div class="code-block"><span class="kw">let</span> s: &amp;<span class="type">str</span> = <span class="str">"hello world"</span>;
<span class="kw">let</span> hello = &amp;s[<span class="num">0</span>..<span class="num">5</span>]; <span class="cm">// slice</span>
<span class="cm">// Tidak bisa dimodifikasi</span></div>
</div>
<div class="card">
<h4><code>String</code> — Owned String</h4>
<p>String heap-allocated yang bisa di-mutasi. Digunakan saat butuh ownership atau modifikasi.</p>
<div class="code-block"><span class="kw">let mut</span> s = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
s.<span class="fn">push_str</span>(<span class="str">" world"</span>);
s.<span class="fn">push</span>(<span class="str">'!'</span>);
<span class="kw">let</span> len = s.<span class="fn">len</span>();
<span class="kw">let</span> slice: &amp;<span class="type">str</span> = &amp;s; <span class="cm">// deref coercion</span></div>
</div>
</div>
</div>

<!-- ===================== 5. CONTROL FLOW ===================== -->
<h2 class="animate-in">5. Control Flow</h2>

<div class="card animate-in">
<h3>if / else — Sebagai Ekspresi</h3>
<p>Di Rust, <code>if</code> adalah <strong>expression</strong> (bukan statement), artinya ia menghasilkan nilai dan bisa digunakan di sisi kanan assignment.</p>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> number = <span class="num">7</span>;

    <span class="cm">// Standard if/else</span>
    <span class="kw">if</span> number &lt; <span class="num">5</span> {
        <span class="fn">println!</span>(<span class="str">"lebih kecil dari 5"</span>);
    } <span class="kw">else if</span> number == <span class="num">5</span> {
        <span class="fn">println!</span>(<span class="str">"sama dengan 5"</span>);
    } <span class="kw">else</span> {
        <span class="fn">println!</span>(<span class="str">"lebih besar dari 5"</span>);
    }

    <span class="cm">// if sebagai expression — seperti ternary</span>
    <span class="kw">let</span> label = <span class="kw">if</span> number % <span class="num">2</span> == <span class="num">0</span> { <span class="str">"genap"</span> } <span class="kw">else</span> { <span class="str">"ganjil"</span> };
    <span class="fn">println!</span>(<span class="str">"{} adalah {}"</span>, number, label);
}</div>
</div>

<div class="card animate-in">
<h3>loop, while, for</h3>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// loop — infinite loop dengan break</span>
    <span class="kw">let mut</span> count = <span class="num">0</span>;
    <span class="kw">let</span> result = <span class="kw">loop</span> {
        count += <span class="num">1</span>;
        <span class="kw">if</span> count == <span class="num">10</span> {
            <span class="kw">break</span> count * <span class="num">2</span>; <span class="cm">// break dengan nilai</span>
        }
    };
    <span class="fn">println!</span>(<span class="str">"result = {}"</span>, result); <span class="cm">// 20</span>

    <span class="cm">// while</span>
    <span class="kw">let mut</span> n = <span class="num">3</span>;
    <span class="kw">while</span> n != <span class="num">0</span> {
        <span class="fn">println!</span>(<span class="str">"{}!"</span>, n);
        n -= <span class="num">1</span>;
    }

    <span class="cm">// for — iterasi koleksi</span>
    <span class="kw">let</span> arr = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>];
    <span class="kw">for</span> elem <span class="kw">in</span> arr.<span class="fn">iter</span>() {
        <span class="fn">println!</span>(<span class="str">"nilai: {}"</span>, elem);
    }

    <span class="cm">// for dengan range</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">5</span> { <span class="fn">print!</span>(<span class="str">"{} "</span>, i); } <span class="cm">// 0 1 2 3 4</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..=<span class="num">5</span> { <span class="fn">print!</span>(<span class="str">"{} "</span>, i); } <span class="cm">// 0 1 2 3 4 5</span>

    <span class="cm">// enumerate</span>
    <span class="kw">for</span> (idx, val) <span class="kw">in</span> arr.<span class="fn">iter</span>().<span class="fn">enumerate</span>() {
        <span class="fn">println!</span>(<span class="str">"arr[{}] = {}"</span>, idx, val);
    }
}</div>
</div>

<div class="card animate-in">
<h3>match — Pattern Matching Unggulan Rust</h3>
<p><code>match</code> di Rust adalah <strong>exhaustive</strong> — compiler memaksa kamu menangani semua kemungkinan. Ini jauh lebih kuat dari switch di bahasa lain.</p>
<div class="code-block"><span class="kw">fn</span> <span class="fn">describe</span>(n: <span class="type">i32</span>) -&gt; &amp;<span class="num">'static</span> <span class="type">str</span> {
    <span class="kw">match</span> n {
        <span class="num">1</span>         =&gt; <span class="str">"satu"</span>,
        <span class="num">2</span> | <span class="num">3</span>     =&gt; <span class="str">"dua atau tiga"</span>,    <span class="cm">// OR pattern</span>
        <span class="num">4</span>..=<span class="num">9</span>     =&gt; <span class="str">"empat hingga sembilan"</span>, <span class="cm">// range</span>
        n <span class="kw">if</span> n &lt; <span class="num">0</span> =&gt; <span class="str">"negatif"</span>,            <span class="cm">// guard</span>
        _          =&gt; <span class="str">"lainnya"</span>,             <span class="cm">// wildcard (harus ada)</span>
    }
}

<span class="cm">// if let — match sederhana untuk satu pola</span>
<span class="kw">let</span> val = <span class="type">Some</span>(<span class="num">7</span>);
<span class="kw">if let</span> <span class="type">Some</span>(x) = val {
    <span class="fn">println!</span>(<span class="str">"nilai: {}"</span>, x);
}

<span class="cm">// while let</span>
<span class="kw">let mut</span> stack = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">while let</span> <span class="type">Some</span>(top) = stack.<span class="fn">pop</span>() {
    <span class="fn">println!</span>(<span class="str">"popped: {}"</span>, top);
}</div>
</div>

<!-- ===================== 6. STRUCTS & ENUMS ===================== -->
<h2 class="animate-in">6. Structs &amp; Enums</h2>

<div class="card animate-in">
<h3>Struct</h3>
<div class="code-block"><span class="cm">// Named struct</span>
<span class="kw">struct</span> <span class="type">User</span> {
    username: <span class="type">String</span>,
    email:    <span class="type">String</span>,
    age:      <span class="type">u32</span>,
    active:   <span class="type">bool</span>,
}

<span class="cm">// Tuple struct</span>
<span class="kw">struct</span> <span class="type">Point</span>(<span class="type">f64</span>, <span class="type">f64</span>);

<span class="cm">// Unit struct (marker)</span>
<span class="kw">struct</span> <span class="type">AlwaysEqual</span>;

<span class="cm">// Derived traits</span>
#[<span class="fn">derive</span>(Debug, Clone, PartialEq)]
<span class="kw">struct</span> <span class="type">Rect</span> { width: <span class="type">f64</span>, height: <span class="type">f64</span> }

<span class="cm">// impl block — methods &amp; associated functions</span>
<span class="kw">impl</span> <span class="type">Rect</span> {
    <span class="cm">// Associated function (constructor) — bukan method</span>
    <span class="kw">fn</span> <span class="fn">new</span>(w: <span class="type">f64</span>, h: <span class="type">f64</span>) -&gt; <span class="type">Self</span> {
        <span class="type">Rect</span> { width: w, height: h }
    }

    <span class="cm">// Method — &amp;self = immutable borrow of self</span>
    <span class="kw">fn</span> <span class="fn">area</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span> {
        <span class="kw">self</span>.width * <span class="kw">self</span>.height
    }

    <span class="cm">// Mutable method</span>
    <span class="kw">fn</span> <span class="fn">scale</span>(&amp;<span class="kw">mut self</span>, factor: <span class="type">f64</span>) {
        <span class="kw">self</span>.width  *= factor;
        <span class="kw">self</span>.height *= factor;
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> r = <span class="type">Rect</span>::<span class="fn">new</span>(<span class="num">10.0</span>, <span class="num">5.0</span>);
    <span class="fn">println!</span>(<span class="str">"area = {}, {:?}"</span>, r.<span class="fn">area</span>(), r);
}</div>
</div>

<div class="card animate-in">
<h3>Enum — Lebih dari Sekadar C Enum</h3>
<p>Enum Rust bisa menyimpan data di setiap variant. Ini menjadi fondasi <code>Option</code> dan <code>Result</code>.</p>
<div class="code-block"><span class="cm">// Enum dengan data di setiap variant</span>
<span class="kw">enum</span> <span class="type">Message</span> {
    <span class="type">Quit</span>,                          <span class="cm">// unit</span>
    <span class="type">Move</span> { x: <span class="type">i32</span>, y: <span class="type">i32</span> },      <span class="cm">// named fields</span>
    <span class="type">Write</span>(<span class="type">String</span>),                  <span class="cm">// tuple-like</span>
    <span class="type">ChangeColor</span>(<span class="type">i32</span>, <span class="type">i32</span>, <span class="type">i32</span>),   <span class="cm">// multiple values</span>
}

<span class="kw">impl</span> <span class="type">Message</span> {
    <span class="kw">fn</span> <span class="fn">call</span>(&amp;<span class="kw">self</span>) {
        <span class="kw">match</span> <span class="kw">self</span> {
            <span class="type">Message</span>::<span class="type">Quit</span>            =&gt; <span class="fn">println!</span>(<span class="str">"Quit"</span>),
            <span class="type">Message</span>::<span class="type">Move</span> { x, y }  =&gt; <span class="fn">println!</span>(<span class="str">"Move ({}, {})"</span>, x, y),
            <span class="type">Message</span>::<span class="type">Write</span>(text)    =&gt; <span class="fn">println!</span>(<span class="str">"Write: {}"</span>, text),
            <span class="type">Message</span>::<span class="type">ChangeColor</span>(r,g,b) =&gt; <span class="fn">println!</span>(<span class="str">"Color({},{},{})"</span>,r,g,b),
        }
    }
}

<span class="cm">// Option&lt;T&gt; = pengganti null pointer</span>
<span class="kw">let</span> some_number: <span class="type">Option</span>&lt;<span class="type">i32</span>&gt; = <span class="type">Some</span>(<span class="num">5</span>);
<span class="kw">let</span> no_number:   <span class="type">Option</span>&lt;<span class="type">i32</span>&gt; = <span class="type">None</span>;

<span class="cm">// Result&lt;T, E&gt; = pengganti exception</span>
<span class="kw">fn</span> <span class="fn">divide</span>(a: <span class="type">f64</span>, b: <span class="type">f64</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">f64</span>, <span class="type">String</span>&gt; {
    <span class="kw">if</span> b == <span class="num">0.0</span> {
        <span class="type">Err</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"division by zero"</span>))
    } <span class="kw">else</span> {
        <span class="type">Ok</span>(a / b)
    }
}</div>
</div>

<!-- ===================== 7. PATTERN MATCHING ===================== -->
<h2 class="animate-in">7. Pattern Matching Lanjutan</h2>

<div class="card animate-in">
<h3>Destructuring &amp; Guards</h3>
<div class="code-block"><span class="kw">struct</span> <span class="type">Point</span> { x: <span class="type">i32</span>, y: <span class="type">i32</span> }

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Destructuring struct</span>
    <span class="kw">let</span> p = <span class="type">Point</span> { x: <span class="num">3</span>, y: <span class="num">-5</span> };
    <span class="kw">let</span> <span class="type">Point</span> { x, y } = p;
    <span class="fn">println!</span>(<span class="str">"x={} y={}"</span>, x, y);

    <span class="cm">// Match dengan guard</span>
    <span class="kw">let</span> num = <span class="type">Some</span>(<span class="num">4</span>);
    <span class="kw">match</span> num {
        <span class="type">Some</span>(x) <span class="kw">if</span> x &lt; <span class="num">5</span> =&gt; <span class="fn">println!</span>(<span class="str">"kecil: {}"</span>, x),
        <span class="type">Some</span>(x)           =&gt; <span class="fn">println!</span>(<span class="str">"besar: {}"</span>, x),
        <span class="type">None</span>              =&gt; <span class="fn">println!</span>(<span class="str">"tidak ada"</span>),
    }

    <span class="cm">// @ bindings — tangkap nilai DAN cek pola</span>
    <span class="kw">let</span> val = <span class="num">15</span>;
    <span class="kw">match</span> val {
        n @ <span class="num">1</span>..=<span class="num">12</span>  =&gt; <span class="fn">println!</span>(<span class="str">"bulan {}"</span>, n),
        n @ <span class="num">13</span>..=<span class="num">19</span> =&gt; <span class="fn">println!</span>(<span class="str">"remaja {}"</span>, n),
        _           =&gt; <span class="fn">println!</span>(<span class="str">"lainnya"</span>),
    }

    <span class="cm">// Nested destructuring</span>
    <span class="kw">let</span> pairs = [(<span class="num">0</span>, <span class="num">-2</span>), (<span class="num">3</span>, <span class="num">5</span>), (<span class="num">0</span>, <span class="num">0</span>)];
    <span class="kw">for</span> &amp;(x, y) <span class="kw">in</span> &amp;pairs {
        <span class="kw">match</span> (x, y) {
            (<span class="num">0</span>, y) =&gt; <span class="fn">println!</span>(<span class="str">"sumbu Y: {}"</span>, y),
            (x, <span class="num">0</span>) =&gt; <span class="fn">println!</span>(<span class="str">"sumbu X: {}"</span>, x),
            (x, y) =&gt; <span class="fn">println!</span>(<span class="str">"titik ({}, {})"</span>, x, y),
        }
    }
}</div>
</div>

<!-- ===================== 8. ERROR HANDLING ===================== -->
<h2 class="animate-in">8. Error Handling</h2>

<div class="card animate-in">
<h3>Result&lt;T, E&gt; &amp; Operator ?</h3>
<p>Rust tidak menggunakan exception. Error adalah nilai biasa bertipe <code>Result&lt;T, E&gt;</code>. Operator <code>?</code> adalah shorthand untuk meneruskan (propagate) error ke caller.</p>
<div class="code-block"><span class="kw">use</span> std::fs;
<span class="kw">use</span> std::io::<span class="type">Error</span>;

<span class="cm">// Cara manual:</span>
<span class="kw">fn</span> <span class="fn">read_manual</span>() -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, <span class="type">Error</span>&gt; {
    <span class="kw">let</span> s = <span class="kw">match</span> fs::<span class="fn">read_to_string</span>(<span class="str">"file.txt"</span>) {
        <span class="type">Ok</span>(s)  =&gt; s,
        <span class="type">Err</span>(e) =&gt; <span class="kw">return</span> <span class="type">Err</span>(e),
    };
    <span class="type">Ok</span>(s)
}

<span class="cm">// Dengan operator ? — jauh lebih ringkas:</span>
<span class="kw">fn</span> <span class="fn">read_with_q</span>() -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, <span class="type">Error</span>&gt; {
    <span class="kw">let</span> s = fs::<span class="fn">read_to_string</span>(<span class="str">"file.txt"</span>)?; <span class="cm">// propagate error jika Err</span>
    <span class="type">Ok</span>(s)
}

<span class="cm">// Chaining ? operators:</span>
<span class="kw">fn</span> <span class="fn">complex_io</span>() -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, <span class="type">Error</span>&gt; {
    <span class="kw">let</span> content = fs::<span class="fn">read_to_string</span>(<span class="str">"config.txt"</span>)?
        .<span class="fn">trim</span>()
        .<span class="fn">to_string</span>();
    <span class="type">Ok</span>(content)
}

<span class="cm">// Mengonsumsi Result:</span>
<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">match</span> <span class="fn">read_with_q</span>() {
        <span class="type">Ok</span>(content) =&gt; <span class="fn">println!</span>(<span class="str">"Isi: {}"</span>, content),
        <span class="type">Err</span>(e)      =&gt; <span class="fn">eprintln!</span>(<span class="str">"Error: {}"</span>, e),
    }

    <span class="cm">// unwrap() — panic jika Err (hanya untuk prototyping/test)</span>
    <span class="cm">// let s = read_with_q().unwrap();</span>

    <span class="cm">// expect() — seperti unwrap tapi dengan pesan</span>
    <span class="cm">// let s = read_with_q().expect("gagal baca file");</span>

    <span class="cm">// unwrap_or — nilai default jika Err</span>
    <span class="kw">let</span> s = <span class="fn">read_with_q</span>().<span class="fn">unwrap_or</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"default"</span>));
}</div>
</div>

<div class="card animate-in">
<h3>Custom Error Types</h3>
<div class="code-block"><span class="kw">use</span> std::fmt;

<span class="cm">// Definisi custom error</span>
#[<span class="fn">derive</span>(Debug)]
<span class="kw">enum</span> <span class="type">AppError</span> {
    <span class="type">IoError</span>(std::io::<span class="type">Error</span>),
    <span class="type">ParseError</span>(<span class="type">String</span>),
    <span class="type">NotFound</span>,
}

<span class="kw">impl</span> fmt::<span class="type">Display</span> <span class="kw">for</span> <span class="type">AppError</span> {
    <span class="kw">fn</span> <span class="fn">fmt</span>(&amp;<span class="kw">self</span>, f: &amp;<span class="kw">mut</span> fmt::<span class="type">Formatter</span>) -&gt; fmt::<span class="type">Result</span> {
        <span class="kw">match</span> <span class="kw">self</span> {
            <span class="type">AppError</span>::<span class="type">IoError</span>(e)     =&gt; <span class="fn">write!</span>(f, <span class="str">"IO error: {}"</span>, e),
            <span class="type">AppError</span>::<span class="type">ParseError</span>(s) =&gt; <span class="fn">write!</span>(f, <span class="str">"Parse error: {}"</span>, s),
            <span class="type">AppError</span>::<span class="type">NotFound</span>       =&gt; <span class="fn">write!</span>(f, <span class="str">"Not found"</span>),
        }
    }
}

<span class="cm">// Konversi otomatis dari io::Error ke AppError</span>
<span class="kw">impl</span> <span class="type">From</span>&lt;std::io::<span class="type">Error</span>&gt; <span class="kw">for</span> <span class="type">AppError</span> {
    <span class="kw">fn</span> <span class="fn">from</span>(e: std::io::<span class="type">Error</span>) -&gt; <span class="type">Self</span> {
        <span class="type">AppError</span>::<span class="type">IoError</span>(e)
    }
}

<span class="cm">// Dengan crate anyhow (praktis untuk aplikasi):</span>
<span class="cm">// use anyhow::{Result, Context};</span>
<span class="cm">// fn main() -&gt; Result&lt;()&gt; {</span>
<span class="cm">//     let s = fs::read_to_string("f.txt").context("gagal baca")?;</span>
<span class="cm">//     Ok(())</span>
<span class="cm">// }</span>

<span class="cm">// panic! — unrecoverable error</span>
<span class="cm">// Gunakan hanya untuk bug programmer, bukan kondisi runtime</span>
<span class="kw">fn</span> <span class="fn">always_positive</span>(x: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    <span class="kw">if</span> x &lt; <span class="num">0</span> { <span class="fn">panic!</span>(<span class="str">"x must be positive, got {}"</span>, x) }
    x
}</div>
</div>

<!-- ===================== 9. TRAITS ===================== -->
<h2 class="animate-in">9. Traits</h2>

<div class="card animate-in">
<h3>Mendefinisikan &amp; Mengimplementasikan Trait</h3>
<p>Trait di Rust mirip dengan interface — mereka mendefinisikan perilaku yang bisa di-share antar tipe. Berbeda dari interface biasa, trait Rust mendukung <strong>default implementation</strong>.</p>
<div class="code-block"><span class="cm">// Definisi trait</span>
<span class="kw">trait</span> <span class="type">Summary</span> {
    <span class="kw">fn</span> <span class="fn">summarize_author</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span>;

    <span class="cm">// Default implementation</span>
    <span class="kw">fn</span> <span class="fn">summarize</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> {
        <span class="fn">format!</span>(<span class="str">"(Baca lebih dari {}...)"</span>, <span class="kw">self</span>.<span class="fn">summarize_author</span>())
    }
}

<span class="kw">struct</span> <span class="type">Article</span> { author: <span class="type">String</span>, title: <span class="type">String</span> }
<span class="kw">struct</span> <span class="type">Tweet</span>   { username: <span class="type">String</span>, content: <span class="type">String</span> }

<span class="kw">impl</span> <span class="type">Summary</span> <span class="kw">for</span> <span class="type">Article</span> {
    <span class="kw">fn</span> <span class="fn">summarize_author</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> { <span class="kw">self</span>.author.<span class="fn">clone</span>() }
    <span class="kw">fn</span> <span class="fn">summarize</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> {
        <span class="fn">format!</span>(<span class="str">"{} oleh {}"</span>, <span class="kw">self</span>.title, <span class="kw">self</span>.author)
    }
}

<span class="kw">impl</span> <span class="type">Summary</span> <span class="kw">for</span> <span class="type">Tweet</span> {
    <span class="kw">fn</span> <span class="fn">summarize_author</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> {
        <span class="fn">format!</span>(<span class="str">"@{}"</span>, <span class="kw">self</span>.username)
    }
    <span class="cm">// summarize() menggunakan default implementation</span>
}

<span class="cm">// Trait bounds — fungsi generik yang menerima tipe apapun yang impl Summary</span>
<span class="kw">fn</span> <span class="fn">notify</span>(item: &amp;<span class="kw">impl</span> <span class="type">Summary</span>) {
    <span class="fn">println!</span>(<span class="str">"Breaking: {}"</span>, item.<span class="fn">summarize</span>());
}

<span class="cm">// Sintaks generik lengkap:</span>
<span class="kw">fn</span> <span class="fn">notify_generic</span>&lt;T: <span class="type">Summary</span> + <span class="type">std</span>::fmt::<span class="type">Debug</span>&gt;(item: &amp;T) {
    <span class="fn">println!</span>(<span class="str">"{:?} says: {}"</span>, item, item.<span class="fn">summarize</span>());
}

<span class="cm">// where clause — lebih readable untuk banyak bounds</span>
<span class="kw">fn</span> <span class="fn">complex</span>&lt;T, U&gt;(t: &amp;T, u: &amp;U)
<span class="kw">where</span>
    T: <span class="type">std</span>::fmt::<span class="type">Display</span> + <span class="type">Clone</span>,
    U: <span class="type">std</span>::fmt::<span class="type">Debug</span>  + <span class="type">Summary</span>,
{
    <span class="fn">println!</span>(<span class="str">"{} - {:?}"</span>, t, u);
}</div>
</div>

<div class="card animate-in">
<h3>Trait Objects vs impl Trait</h3>
<div class="card-grid">
<div class="card">
<h4>impl Trait — Static Dispatch</h4>
<p>Compiler menggenerasi kode terpisah untuk setiap tipe konkret (<em>monomorphization</em>). Zero-cost tapi ukuran binary lebih besar.</p>
<div class="code-block"><span class="cm">// Return type bisa berbeda tapi TIDAK</span>
<span class="cm">// bisa conditional berdasarkan runtime:</span>
<span class="kw">fn</span> <span class="fn">make_summary</span>() -&gt; <span class="kw">impl</span> <span class="type">Summary</span> {
    <span class="type">Article</span> {
        author: <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Ali"</span>),
        title:  <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Rust"</span>),
    }
}</div>
</div>
<div class="card">
<h4>Box&lt;dyn Trait&gt; — Dynamic Dispatch</h4>
<p>Dispatch lewat vtable di runtime. Ada sedikit overhead tapi memungkinkan koleksi tipe heterogen.</p>
<div class="code-block"><span class="cm">// Vec dari berbagai tipe:</span>
<span class="kw">let</span> items: <span class="type">Vec</span>&lt;<span class="type">Box</span>&lt;<span class="kw">dyn</span> <span class="type">Summary</span>&gt;&gt; = <span class="fn">vec!</span>[
    <span class="type">Box</span>::<span class="fn">new</span>(<span class="type">Article</span> { .. }),
    <span class="type">Box</span>::<span class="fn">new</span>(<span class="type">Tweet</span>   { .. }),
];
<span class="kw">for</span> item <span class="kw">in</span> &amp;items {
    <span class="fn">println!</span>(<span class="str">"{}"</span>, item.<span class="fn">summarize</span>());
}</div>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Standard Library Traits Penting</h3>
<div class="table-wrapper">
<table>
<tr><th>Trait</th><th>Fungsi</th><th>Auto-derive?</th></tr>
<tr><td><code>Debug</code></td><td>Format debug <code>{:?}</code></td><td>Ya</td></tr>
<tr><td><code>Display</code></td><td>Format user-facing <code>{}</code></td><td>Tidak</td></tr>
<tr><td><code>Clone</code></td><td>Deep copy eksplisit (<code>.clone()</code>)</td><td>Ya</td></tr>
<tr><td><code>Copy</code></td><td>Bit-for-bit copy otomatis (stack types)</td><td>Ya (jika semua fields Copy)</td></tr>
<tr><td><code>PartialEq</code> / <code>Eq</code></td><td>Perbandingan <code>==</code></td><td>Ya</td></tr>
<tr><td><code>PartialOrd</code> / <code>Ord</code></td><td>Perbandingan <code>&lt;</code>, <code>&gt;</code>, dsb</td><td>Ya</td></tr>
<tr><td><code>Hash</code></td><td>Hashing (diperlukan HashMap key)</td><td>Ya</td></tr>
<tr><td><code>Iterator</code></td><td>Iterasi dengan <code>next()</code></td><td>Tidak</td></tr>
<tr><td><code>From</code> / <code>Into</code></td><td>Konversi antar tipe</td><td>Tidak</td></tr>
<tr><td><code>Default</code></td><td>Nilai default (<code>Default::default()</code>)</td><td>Ya</td></tr>
<tr><td><code>Drop</code></td><td>Custom cleanup saat out-of-scope</td><td>Tidak</td></tr>
</table>
</div>
</div>

<!-- ===================== 10. GENERICS & LIFETIMES ===================== -->
<h2 class="animate-in">10. Generics &amp; Lifetimes</h2>

<div class="card animate-in">
<h3>Generics — Zero-Cost Abstraction</h3>
<p>Generics di Rust menggunakan <strong>monomorphization</strong>: compiler menghasilkan kode terpisah untuk setiap tipe konkret yang digunakan. Tidak ada boxing, tidak ada vtable — performa identik dengan kode spesifik.</p>
<div class="code-block"><span class="cm">// Generic function</span>
<span class="kw">fn</span> <span class="fn">largest</span>&lt;T: PartialOrd&gt;(list: &amp;[T]) -&gt; &amp;T {
    <span class="kw">let mut</span> largest = &amp;list[<span class="num">0</span>];
    <span class="kw">for</span> item <span class="kw">in</span> list {
        <span class="kw">if</span> item &gt; largest { largest = item; }
    }
    largest
}

<span class="cm">// Generic struct</span>
<span class="kw">struct</span> <span class="type">Pair</span>&lt;T&gt; {
    first:  T,
    second: T,
}

<span class="kw">impl</span>&lt;T: std::fmt::<span class="type">Display</span> + <span class="type">PartialOrd</span>&gt; <span class="type">Pair</span>&lt;T&gt; {
    <span class="kw">fn</span> <span class="fn">cmp_display</span>(&amp;<span class="kw">self</span>) {
        <span class="kw">if</span> <span class="kw">self</span>.first &gt;= <span class="kw">self</span>.second {
            <span class="fn">println!</span>(<span class="str">"first = {}"</span>, <span class="kw">self</span>.first);
        } <span class="kw">else</span> {
            <span class="fn">println!</span>(<span class="str">"second = {}"</span>, <span class="kw">self</span>.second);
        }
    }
}

<span class="cm">// Generic enum (seperti Option dan Result di std):</span>
<span class="kw">enum</span> <span class="type">MyOption</span>&lt;T&gt; {
    <span class="type">Some</span>(T),
    <span class="type">None</span>,
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> nums = <span class="fn">vec!</span>[<span class="num">34</span>, <span class="num">50</span>, <span class="num">25</span>, <span class="num">100</span>];
    <span class="fn">println!</span>(<span class="str">"terbesar: {}"</span>, <span class="fn">largest</span>(&amp;nums));
}</div>
</div>

<!-- ===================== 11. COLLECTIONS ===================== -->
<h2 class="animate-in">11. Collections</h2>

<div class="card animate-in">
<h3>Vec&lt;T&gt; — Dynamic Array</h3>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Membuat Vec</span>
    <span class="kw">let mut</span> v: <span class="type">Vec</span>&lt;<span class="type">i32</span>&gt; = <span class="type">Vec</span>::<span class="fn">new</span>();
    <span class="kw">let mut</span> v2 = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

    v.<span class="fn">push</span>(<span class="num">1</span>);
    v.<span class="fn">push</span>(<span class="num">2</span>);
    v.<span class="fn">push</span>(<span class="num">3</span>);

    <span class="cm">// Akses elemen</span>
    <span class="kw">let</span> third = &amp;v[<span class="num">2</span>];           <span class="cm">// panic jika out-of-bounds</span>
    <span class="kw">let</span> third = v.<span class="fn">get</span>(<span class="num">2</span>);        <span class="cm">// Option&lt;&amp;i32&gt; — aman</span>

    <span class="cm">// Iterasi</span>
    <span class="kw">for</span> i <span class="kw">in</span> &amp;v { <span class="fn">print!</span>(<span class="str">"{} "</span>, i); }
    <span class="kw">for</span> i <span class="kw">in</span> &amp;<span class="kw">mut</span> v2 { *i *= <span class="num">2</span>; }   <span class="cm">// mutasi lewat iter</span>

    <span class="cm">// Operasi penting</span>
    v.<span class="fn">pop</span>();                      <span class="cm">// hapus dan kembalikan elemen akhir</span>
    v.<span class="fn">len</span>();                      <span class="cm">// jumlah elemen</span>
    v.<span class="fn">is_empty</span>();                  <span class="cm">// cek kosong</span>
    v.<span class="fn">contains</span>(&amp;<span class="num">2</span>);               <span class="cm">// cek keberadaan</span>
    v.<span class="fn">sort</span>();                      <span class="cm">// sort in-place</span>
    v.<span class="fn">dedup</span>();                     <span class="cm">// hapus duplikat berurutan</span>
    v.<span class="fn">retain</span>(|&amp;x| x &gt; <span class="num">1</span>);         <span class="cm">// filter in-place</span>
    v.<span class="fn">extend</span>([<span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>]);           <span class="cm">// extend dengan iterator</span>
}</div>
</div>

<div class="card animate-in">
<h3>HashMap&lt;K, V&gt;</h3>
<div class="code-block"><span class="kw">use</span> std::collections::<span class="type">HashMap</span>;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let mut</span> scores: <span class="type">HashMap</span>&lt;<span class="type">String</span>, <span class="type">i32</span>&gt; = <span class="type">HashMap</span>::<span class="fn">new</span>();

    scores.<span class="fn">insert</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Alice"</span>), <span class="num">100</span>);
    scores.<span class="fn">insert</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Bob"</span>),   <span class="num">80</span>);

    <span class="cm">// Akses</span>
    <span class="kw">let</span> alice = scores.<span class="fn">get</span>(<span class="str">"Alice"</span>); <span class="cm">// Option&lt;&amp;i32&gt;</span>

    <span class="cm">// Entry API — insert hanya jika belum ada</span>
    scores.<span class="fn">entry</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Charlie"</span>)).<span class="fn">or_insert</span>(<span class="num">50</span>);

    <span class="cm">// Update berdasarkan nilai lama</span>
    <span class="kw">let</span> count = scores.<span class="fn">entry</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Alice"</span>)).<span class="fn">or_insert</span>(<span class="num">0</span>);
    *count += <span class="num">10</span>; <span class="cm">// Alice sekarang 110</span>

    <span class="cm">// Iterasi</span>
    <span class="kw">for</span> (key, value) <span class="kw">in</span> &amp;scores {
        <span class="fn">println!</span>(<span class="str">"{}: {}"</span>, key, value);
    }

    <span class="cm">// Membuat dari iterator of tuples</span>
    <span class="kw">let</span> map: <span class="type">HashMap</span>&lt;_, _&gt; = <span class="fn">vec!</span>[(<span class="str">"a"</span>, <span class="num">1</span>), (<span class="str">"b"</span>, <span class="num">2</span>)]
        .<span class="fn">into_iter</span>()
        .<span class="fn">collect</span>();
}</div>
</div>

<div class="card animate-in">
<h3>Iterator Adapters — Lazy &amp; Zero-Cost</h3>
<p>Iterator Rust bersifat <strong>lazy</strong> — tidak melakukan komputasi sampai dikonsumsi. Adaptor bisa di-chain tanpa alokasi intermediate.</p>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> v = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>];

    <span class="cm">// map + filter + collect</span>
    <span class="kw">let</span> result: <span class="type">Vec</span>&lt;<span class="type">i32</span>&gt; = v.<span class="fn">iter</span>()
        .<span class="fn">filter</span>(|&&amp;x| x % <span class="num">2</span> == <span class="num">0</span>)   <span class="cm">// ambil genap</span>
        .<span class="fn">map</span>(|&amp;x| x * x)              <span class="cm">// kuadratkan</span>
        .<span class="fn">collect</span>();
    <span class="cm">// [4, 16, 36]</span>

    <span class="cm">// fold — reduce</span>
    <span class="kw">let</span> sum: <span class="type">i32</span> = v.<span class="fn">iter</span>().<span class="fn">fold</span>(<span class="num">0</span>, |acc, &amp;x| acc + x);

    <span class="cm">// sum, product, min, max</span>
    <span class="kw">let</span> total: <span class="type">i32</span>   = v.<span class="fn">iter</span>().<span class="fn">sum</span>();
    <span class="kw">let</span> product: <span class="type">i32</span> = v.<span class="fn">iter</span>().<span class="fn">product</span>();
    <span class="kw">let</span> min = v.<span class="fn">iter</span>().<span class="fn">min</span>();
    <span class="kw">let</span> max = v.<span class="fn">iter</span>().<span class="fn">max</span>();

    <span class="cm">// zip, enumerate, chain, take, skip, flat_map</span>
    <span class="kw">let</span> pairs: <span class="type">Vec</span>&lt;_&gt; = v.<span class="fn">iter</span>().<span class="fn">zip</span>(v.<span class="fn">iter</span>().<span class="fn">skip</span>(<span class="num">1</span>)).<span class="fn">collect</span>();
    <span class="kw">let</span> nested = <span class="fn">vec!</span>[<span class="fn">vec!</span>[<span class="num">1</span>,<span class="num">2</span>], <span class="fn">vec!</span>[<span class="num">3</span>,<span class="num">4</span>]];
    <span class="kw">let</span> flat: <span class="type">Vec</span>&lt;<span class="type">i32</span>&gt; = nested.<span class="fn">into_iter</span>().<span class="fn">flatten</span>().<span class="fn">collect</span>();
    <span class="cm">// [1, 2, 3, 4]</span>

    <span class="cm">// any, all, find, position, count</span>
    <span class="kw">let</span> has_even = v.<span class="fn">iter</span>().<span class="fn">any</span>(|&amp;x| x % <span class="num">2</span> == <span class="num">0</span>);
    <span class="kw">let</span> all_pos  = v.<span class="fn">iter</span>().<span class="fn">all</span>(|&amp;x| x &gt; <span class="num">0</span>);
}</div>
</div>

<!-- ===================== 12. CLOSURES ===================== -->
<h2 class="animate-in">12. Closures</h2>

<div class="card animate-in">
<h3>Sintaks &amp; Capturing</h3>
<div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Closure syntax: |params| body</span>
    <span class="kw">let</span> square   = |x: <span class="type">i32</span>| x * x;
    <span class="kw">let</span> add      = |a, b| a + b;       <span class="cm">// type inferred</span>
    <span class="kw">let</span> greet    = |name: &amp;<span class="type">str</span>| <span class="fn">format!</span>(<span class="str">"Hello, {}!"</span>, name);
    <span class="kw">let</span> multi_ln = |x| {              <span class="cm">// multi-line</span>
        <span class="kw">let</span> y = x * <span class="num">2</span>;
        y + <span class="num">1</span>
    };

    <span class="cm">// Capturing dari environment</span>
    <span class="kw">let</span> multiplier = <span class="num">3</span>;
    <span class="kw">let</span> times = |x| x * multiplier;   <span class="cm">// capture by reference</span>
    <span class="fn">println!</span>(<span class="str">"5 * 3 = {}"</span>, <span class="fn">times</span>(<span class="num">5</span>));

    <span class="cm">// move closure — ambil ownership dari captured values</span>
    <span class="kw">let</span> text = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="kw">let</span> contains_h = <span class="kw">move</span> || text.<span class="fn">contains</span>(<span class="str">'h'</span>);
    <span class="cm">// text tidak bisa digunakan lagi di sini</span>
    <span class="fn">println!</span>(<span class="str">"contains h: {}"</span>, <span class="fn">contains_h</span>());
}

<span class="cm">// Closures sebagai argumen fungsi:</span>
<span class="kw">fn</span> <span class="fn">apply</span>&lt;F: <span class="type">Fn</span>(<span class="type">i32</span>) -&gt; <span class="type">i32</span>&gt;(f: F, x: <span class="type">i32</span>) -&gt; <span class="type">i32</span> { f(x) }

<span class="cm">// Return closure:</span>
<span class="kw">fn</span> <span class="fn">make_adder</span>(n: <span class="type">i32</span>) -&gt; <span class="kw">impl</span> <span class="type">Fn</span>(<span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    <span class="kw">move</span> |x| x + n
}

<span class="cm">// FnOnce — dapat dipanggil sekali (mengkonsumsi captured vars)</span>
<span class="cm">// FnMut  — dapat dipanggil berkali-kali, modifikasi environment</span>
<span class="cm">// Fn     — dapat dipanggil berkali-kali, tidak modifikasi</span></div>
</div>

<!-- ===================== 13. SMART POINTERS ===================== -->
<h2 class="animate-in">13. Smart Pointers</h2>

<div class="card animate-in">
<h3>Box, Rc, Arc, RefCell</h3>
<div class="table-wrapper">
<table>
<tr><th>Tipe</th><th>Thread-safe?</th><th>Mutability</th><th>Use Case</th></tr>
<tr><td><code>Box&lt;T&gt;</code></td><td>Ya</td><td>Normal</td><td>Heap allocation, recursive types, large data</td></tr>
<tr><td><code>Rc&lt;T&gt;</code></td><td>Tidak</td><td>Read-only</td><td>Multiple owners, single-thread</td></tr>
<tr><td><code>Arc&lt;T&gt;</code></td><td>Ya</td><td>Read-only</td><td>Multiple owners, multi-thread</td></tr>
<tr><td><code>RefCell&lt;T&gt;</code></td><td>Tidak</td><td>Interior mutability</td><td>Runtime borrow check (panic jika dilanggar)</td></tr>
<tr><td><code>Mutex&lt;T&gt;</code></td><td>Ya</td><td>Interior mutability</td><td>Thread-safe mutable shared state (blocking)</td></tr>
<tr><td><code>RwLock&lt;T&gt;</code></td><td>Ya</td><td>Interior mutability</td><td>Multiple readers XOR single writer</td></tr>
<tr><td><code>Cell&lt;T&gt;</code></td><td>Tidak</td><td>Interior mutability</td><td>Copy types, no runtime check</td></tr>
</table>
</div>
<div class="code-block"><span class="kw">use</span> std::rc::<span class="type">Rc</span>;
<span class="kw">use</span> std::cell::<span class="type">RefCell</span>;
<span class="kw">use</span> std::sync::{<span class="type">Arc</span>, <span class="type">Mutex</span>};

<span class="cm">// Box&lt;T&gt; — recursive type (linked list)</span>
<span class="kw">enum</span> <span class="type">List</span> {
    <span class="type">Cons</span>(<span class="type">i32</span>, <span class="type">Box</span>&lt;<span class="type">List</span>&gt;),
    <span class="type">Nil</span>,
}

<span class="cm">// Rc&lt;T&gt; — multiple ownership (single-thread)</span>
<span class="kw">let</span> a = <span class="type">Rc</span>::<span class="fn">new</span>(<span class="num">5</span>);
<span class="kw">let</span> b = <span class="type">Rc</span>::<span class="fn">clone</span>(&amp;a); <span class="cm">// increment reference count</span>
<span class="fn">println!</span>(<span class="str">"refs: {}"</span>, <span class="type">Rc</span>::<span class="fn">strong_count</span>(&amp;a)); <span class="cm">// 2</span>

<span class="cm">// Rc&lt;RefCell&lt;T&gt;&gt; — pattern mutability + multiple owners</span>
<span class="kw">let</span> shared = <span class="type">Rc</span>::<span class="fn">new</span>(<span class="type">RefCell</span>::<span class="fn">new</span>(<span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]));
<span class="kw">let</span> clone = <span class="type">Rc</span>::<span class="fn">clone</span>(&amp;shared);
shared.<span class="fn">borrow_mut</span>().<span class="fn">push</span>(<span class="num">4</span>); <span class="cm">// borrow check di runtime</span>

<span class="cm">// Arc&lt;Mutex&lt;T&gt;&gt; — pola standar untuk shared state antar thread</span>
<span class="kw">let</span> counter = <span class="type">Arc</span>::<span class="fn">new</span>(<span class="type">Mutex</span>::<span class="fn">new</span>(<span class="num">0</span>));
<span class="kw">let</span> c2 = <span class="type">Arc</span>::<span class="fn">clone</span>(&amp;counter);
std::thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
    <span class="kw">let mut</span> lock = c2.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
    *lock += <span class="num">1</span>;
}).<span class="fn">join</span>().<span class="fn">unwrap</span>();</div>
</div>

<!-- ===================== 14. CONCURRENCY ===================== -->
<h2 class="animate-in">14. Concurrency — Fearless</h2>

<div class="card animate-in">
<h3>Thread &amp; Channels</h3>
<p>Rust membuktikan keamanan concurrency secara statik: tipe <code>Send</code> dan <code>Sync</code> memastikan data tidak pernah di-share secara tidak aman antar thread. Data race adalah <strong>compile error</strong>, bukan runtime crash.</p>
<div class="code-block"><span class="kw">use</span> std::thread;
<span class="kw">use</span> std::sync::mpsc; <span class="cm">// multi-producer, single-consumer</span>

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Spawn thread</span>
    <span class="kw">let</span> handle = thread::<span class="fn">spawn</span>(|| {
        <span class="kw">for</span> i <span class="kw">in</span> <span class="num">1</span>..<span class="num">5</span> {
            <span class="fn">println!</span>(<span class="str">"thread: {}"</span>, i);
            thread::<span class="fn">sleep</span>(std::time::<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">50</span>));
        }
    });
    handle.<span class="fn">join</span>().<span class="fn">unwrap</span>(); <span class="cm">// tunggu thread selesai</span>

    <span class="cm">// Channel (message passing)</span>
    <span class="kw">let</span> (tx, rx) = mpsc::<span class="fn">channel</span>();
    <span class="kw">let</span> tx2 = tx.<span class="fn">clone</span>(); <span class="cm">// multi-producer</span>

    thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
        tx.<span class="fn">send</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"dari thread 1"</span>)).<span class="fn">unwrap</span>();
    });
    thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
        tx2.<span class="fn">send</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"dari thread 2"</span>)).<span class="fn">unwrap</span>();
    });

    <span class="kw">for</span> msg <span class="kw">in</span> rx { <span class="cm">// rx.recv() blokir sampai ada pesan</span>
        <span class="fn">println!</span>(<span class="str">"diterima: {}"</span>, msg);
    }
}</div>
</div>

<div class="card animate-in">
<h3>Async/Await dengan Tokio</h3>
<p>Untuk I/O-bound concurrency (network, file), Rust menggunakan <strong>async/await</strong> dengan runtime seperti Tokio. Berbeda dari thread OS, async task sangat ringan.</p>
<div class="code-block"><span class="cm">// Cargo.toml:</span>
<span class="cm">// [dependencies]</span>
<span class="cm">// tokio = { version = "1", features = ["full"] }</span>

<span class="kw">use</span> tokio::time::{sleep, <span class="type">Duration</span>};

<span class="kw">async fn</span> <span class="fn">fetch_data</span>(id: <span class="type">u32</span>) -&gt; <span class="type">String</span> {
    sleep(<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">100</span>)).<span class="kw">await</span>;
    <span class="fn">format!</span>(<span class="str">"data-{}"</span>, id)
}

#[tokio::<span class="fn">main</span>]
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="cm">// Jalankan secara concurrent dengan join!</span>
    <span class="kw">let</span> (r1, r2, r3) = tokio::<span class="fn">join!</span>(
        <span class="fn">fetch_data</span>(<span class="num">1</span>),
        <span class="fn">fetch_data</span>(<span class="num">2</span>),
        <span class="fn">fetch_data</span>(<span class="num">3</span>),
    );
    <span class="fn">println!</span>(<span class="str">"{} {} {}"</span>, r1, r2, r3);

    <span class="cm">// Spawn task (seperti goroutine)</span>
    <span class="kw">let</span> handle = tokio::task::<span class="fn">spawn</span>(<span class="kw">async</span> {
        sleep(<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">50</span>)).<span class="kw">await</span>;
        <span class="str">"task done"</span>
    });
    <span class="fn">println!</span>(<span class="str">"{}"</span>, handle.<span class="kw">await</span>.<span class="fn">unwrap</span>());
}</div>
</div>

<div class="card animate-in">
<h3>Send &amp; Sync — Marker Traits</h3>
<div class="info-box">
<ul>
<li><strong>Send</strong>: Tipe aman untuk di-<em>transfer</em> ke thread lain. Hampir semua tipe Send, kecuali <code>Rc&lt;T&gt;</code>, raw pointer.</li>
<li><strong>Sync</strong>: Tipe aman untuk di-<em>share</em> antar thread via referensi (<code>&amp;T</code> harus Send). <code>Mutex&lt;T&gt;</code> adalah Sync, <code>RefCell&lt;T&gt;</code> tidak.</li>
</ul>
Compiler secara otomatis derive Send dan Sync — kamu tidak perlu (dan tidak bisa) memalsukan ini. Data race adalah <strong>compile-time error</strong>.
</div>
</div>

<!-- ===================== 15. MODULES & CARGO ===================== -->
<h2 class="animate-in">15. Modules &amp; Cargo</h2>

<div class="card animate-in">
<h3>Module System</h3>
<div class="code-block"><span class="cm">// src/main.rs</span>
<span class="kw">mod</span> garden; <span class="cm">// load dari src/garden.rs atau src/garden/mod.rs</span>

<span class="kw">use</span> garden::vegetables::<span class="type">Asparagus</span>;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> plant = <span class="type">Asparagus</span> {};
    <span class="fn">println!</span>(<span class="str">"plant: {:?}"</span>, plant);
}

<span class="cm">// ---- src/garden.rs ----</span>
<span class="kw">pub mod</span> vegetables;  <span class="cm">// public submodule</span>

<span class="cm">// ---- src/garden/vegetables.rs ----</span>
#[<span class="fn">derive</span>(Debug)]
<span class="kw">pub struct</span> <span class="type">Asparagus</span> {}  <span class="cm">// pub = visible dari luar modul</span>

<span class="cm">// Inline module:</span>
<span class="kw">mod</span> math {
    <span class="kw">pub fn</span> <span class="fn">add</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; <span class="type">i32</span> { a + b }

    <span class="cm">// Akses sibling modul:</span>
    <span class="kw">pub mod</span> advanced {
        <span class="kw">pub fn</span> <span class="fn">sqrt</span>(x: <span class="type">f64</span>) -&gt; <span class="type">f64</span> { x.<span class="fn">sqrt</span>() }
    }
}

<span class="kw">use</span> math::<span class="fn">add</span>;
<span class="kw">use</span> math::advanced::*; <span class="cm">// glob import</span>
<span class="kw">use</span> std::collections::{<span class="type">HashMap</span>, <span class="type">HashSet</span>}; <span class="cm">// grouped use</span></div>
</div>

<div class="card animate-in">
<h3>Cargo — Package Manager &amp; Build Tool</h3>
<div class="code-block"><span class="cm"># Membuat project baru</span>
cargo new my_project          <span class="cm"># binary</span>
cargo new my_lib --lib         <span class="cm"># library</span>

<span class="cm"># Build &amp; run</span>
cargo build                   <span class="cm"># debug build</span>
cargo build --release          <span class="cm"># optimized build</span>
cargo run                      <span class="cm"># build + run</span>
cargo run -- --arg1 val1       <span class="cm"># dengan argumen</span>

<span class="cm"># Testing</span>
cargo test                     <span class="cm"># semua test</span>
cargo test nama_test           <span class="cm"># filter test</span>
cargo test -- --nocapture      <span class="cm"># tampilkan output</span>

<span class="cm"># Quality tools</span>
cargo clippy                   <span class="cm"># linter</span>
cargo fmt                      <span class="cm"># formatter</span>
cargo doc --open               <span class="cm"># generate &amp; buka docs</span>
cargo audit                    <span class="cm"># security vulnerability check</span>
cargo bench                    <span class="cm"># benchmarking</span></div>
<div class="code-block"><span class="cm"># Cargo.toml</span>
[package]
name    = <span class="str">"my_project"</span>
version = <span class="str">"0.1.0"</span>
edition = <span class="str">"2021"</span>

[dependencies]
serde       = { version = <span class="str">"1"</span>, features = [<span class="str">"derive"</span>] }
tokio       = { version = <span class="str">"1"</span>, features = [<span class="str">"full"</span>] }
anyhow      = <span class="str">"1"</span>
thiserror   = <span class="str">"1"</span>

[dev-dependencies]  <span class="cm"># hanya untuk test</span>
criterion = <span class="str">"0.5"</span>

[profile.release]
opt-level = <span class="num">3</span>
lto       = <span class="kw">true</span>
codegen-units = <span class="num">1</span></div>
</div>

<!-- ===================== 16. MEMORY MODEL ===================== -->
<h2 class="animate-in">16. Memory Model &amp; RAII</h2>

<div class="card animate-in">
<h3>Stack vs Heap &amp; RAII</h3>
<div class="anim-container">
<canvas id="canvas-rust-memory" width="700" height="340" style="width:100%;max-width:700px;border-radius:8px;"></canvas>
</div>
<div class="anim-controls">
<button class="anim-btn" id="rust-mem-alloc">Alokasi Memory</button>
<button class="anim-btn" id="rust-mem-drop">RAII Drop</button>
<button class="anim-btn" id="rust-mem-reset">Reset</button>
</div>
</div>

<div class="card animate-in">
<h3>RAII &amp; Drop Trait</h3>
<p><strong>RAII</strong> (Resource Acquisition Is Initialization): resource diperoleh saat inisialisasi dan dibebaskan saat objek keluar scope. Rust menjamin ini lewat <code>Drop</code> trait — tidak ada resource leak di safe Rust.</p>
<div class="code-block"><span class="kw">struct</span> <span class="type">DbConnection</span> {
    name: <span class="type">String</span>,
}

<span class="kw">impl</span> <span class="type">DbConnection</span> {
    <span class="kw">fn</span> <span class="fn">new</span>(name: &amp;<span class="type">str</span>) -&gt; <span class="type">Self</span> {
        <span class="fn">println!</span>(<span class="str">"Koneksi '{}' dibuka"</span>, name);
        <span class="type">DbConnection</span> { name: name.<span class="fn">to_string</span>() }
    }
}

<span class="kw">impl</span> <span class="type">Drop</span> <span class="kw">for</span> <span class="type">DbConnection</span> {
    <span class="kw">fn</span> <span class="fn">drop</span>(&amp;<span class="kw">mut self</span>) {
        <span class="fn">println!</span>(<span class="str">"Koneksi '{}' ditutup otomatis!"</span>, <span class="kw">self</span>.name);
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> conn = <span class="type">DbConnection</span>::<span class="fn">new</span>(<span class="str">"primary"</span>);
    <span class="cm">// ... gunakan conn ...</span>
    {
        <span class="kw">let</span> temp = <span class="type">DbConnection</span>::<span class="fn">new</span>(<span class="str">"temp"</span>);
        <span class="cm">// temp di-drop di sini (akhir scope dalam)</span>
    }
    <span class="cm">// conn di-drop di sini (akhir main)</span>
    <span class="cm">// Output:</span>
    <span class="cm">// Koneksi 'primary' dibuka</span>
    <span class="cm">// Koneksi 'temp' dibuka</span>
    <span class="cm">// Koneksi 'temp' ditutup otomatis!</span>
    <span class="cm">// Koneksi 'primary' ditutup otomatis!</span>
}</div>
</div>

<!-- ===================== 17. UNSAFE RUST & FFI ===================== -->
<h2 class="animate-in">17. Unsafe Rust &amp; FFI</h2>

<div class="card animate-in">
<h3>Unsafe Rust</h3>
<div class="warn-box">
<strong>Perhatian:</strong> <code>unsafe</code> tidak berarti "tidak aman" — ia berarti "programmer bertanggung jawab menjamin invariant yang tidak bisa diverifikasi compiler." Gunakan sesedikit mungkin dan isolasi di fungsi/modul tersendiri.
</div>
<div class="code-block"><span class="cm">// unsafe memungkinkan 5 hal tambahan:</span>
<span class="cm">// 1. Dereference raw pointer</span>
<span class="cm">// 2. Panggil fungsi unsafe</span>
<span class="cm">// 3. Akses/modifikasi static mut</span>
<span class="cm">// 4. Implementasi unsafe trait</span>
<span class="cm">// 5. Akses union fields</span>

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> x = <span class="num">5</span>;
    <span class="kw">let</span> raw = &amp;x <span class="kw">as</span> *<span class="kw">const</span> <span class="type">i32</span>; <span class="cm">// raw pointer — safe to create</span>

    <span class="kw">unsafe</span> {
        <span class="fn">println!</span>(<span class="str">"raw ptr: {}"</span>, *raw); <span class="cm">// dereference — unsafe!</span>
    }
}

<span class="cm">// FFI — Calling C dari Rust:</span>
<span class="kw">extern</span> <span class="str">"C"</span> {
    <span class="kw">fn</span> <span class="fn">strlen</span>(s: *<span class="kw">const</span> <span class="type">i8</span>) -&gt; <span class="type">usize</span>;
    <span class="kw">fn</span> <span class="fn">abs</span>(x: <span class="type">i32</span>) -&gt; <span class="type">i32</span>;
}

<span class="kw">fn</span> <span class="fn">main2</span>() {
    <span class="kw">unsafe</span> {
        <span class="fn">println!</span>(<span class="str">"abs(-5) = {}"</span>, <span class="fn">abs</span>(-<span class="num">5</span>));
    }
}

<span class="cm">// Expose fungsi Rust ke C:</span>
#[<span class="fn">no_mangle</span>]
<span class="kw">pub extern</span> <span class="str">"C"</span> <span class="kw">fn</span> <span class="fn">rust_add</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    a + b
}

<span class="cm">// PyO3 — Python extension (Cargo.toml: pyo3 = { version="0.21", features=["extension-module"] })</span>
<span class="cm">// use pyo3::prelude::*;</span>
<span class="cm">// #[pyfunction]</span>
<span class="cm">// fn fibonacci(n: u64) -&gt; u64 { if n &lt;= 1 { n } else { fibonacci(n-1) + fibonacci(n-2) } }</span>
<span class="cm">// #[pymodule]</span>
<span class="cm">// fn my_module(_py: Python, m: &amp;PyModule) -&gt; PyResult&lt;()&gt; {</span>
<span class="cm">//     m.add_function(wrap_pyfunction!(fibonacci, m)?)?;</span>
<span class="cm">//     Ok(())</span>
<span class="cm">// }</span></div>
</div>

<!-- ===================== 18. MACROS ===================== -->
<h2 class="animate-in">18. Macros</h2>

<div class="card animate-in">
<h3>Declarative Macros — macro_rules!</h3>
<p>Macros di Rust beroperasi pada token (AST-level), bukan string substitution. Ini menghindari bug macro yang umum di C.</p>
<div class="code-block"><span class="cm">// Definisi macro</span>
<span class="fn">macro_rules!</span> <span class="fn">say_hello</span> {
    () =&gt; { <span class="fn">println!</span>(<span class="str">"Hello!"</span>) };
    ($name:expr) =&gt; { <span class="fn">println!</span>(<span class="str">"Hello, {}!"</span>, $name) };
}

<span class="cm">// Macro variadic</span>
<span class="fn">macro_rules!</span> <span class="fn">my_vec</span> {
    ( $( $x:expr ),* ) =&gt; {
        {
            <span class="kw">let mut</span> temp = <span class="type">Vec</span>::<span class="fn">new</span>();
            $( temp.<span class="fn">push</span>($x); )*
            temp
        }
    };
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="fn">say_hello!</span>();
    <span class="fn">say_hello!</span>(<span class="str">"Rust"</span>);

    <span class="kw">let</span> v = <span class="fn">my_vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
    <span class="fn">println!</span>(<span class="str">"{:?}"</span>, v);

    <span class="cm">// Macros standar yang sering digunakan:</span>
    <span class="fn">todo!</span>()        <span class="cm">// panic dengan "not yet implemented"</span>
    <span class="fn">unimplemented!</span>() <span class="cm">// similar, lebih spesifik</span>
    <span class="fn">unreachable!</span>()   <span class="cm">// tandai kode yang tidak harusnya dicapai</span>
    <span class="fn">dbg!</span>(&amp;v)         <span class="cm">// debug print + kembalikan nilai</span>
    <span class="fn">assert!</span>(<span class="kw">true</span>)    <span class="cm">// assertion</span>
    <span class="fn">assert_eq!</span>(<span class="num">1</span>+<span class="num">1</span>, <span class="num">2</span>) <span class="cm">// equality assertion</span>
}</div>
</div>

<div class="card animate-in">
<h3>Derive Macros — serde sebagai Contoh</h3>
<div class="code-block"><span class="cm">// Cargo.toml: serde = { version="1", features=["derive"] }</span>
<span class="cm">//             serde_json = "1"</span>
<span class="kw">use</span> serde::{<span class="type">Serialize</span>, <span class="type">Deserialize</span>};

#[<span class="fn">derive</span>(<span class="type">Debug</span>, <span class="type">Serialize</span>, <span class="type">Deserialize</span>)]
<span class="kw">struct</span> <span class="type">Person</span> {
    name:  <span class="type">String</span>,
    age:   <span class="type">u32</span>,
    email: <span class="type">String</span>,
}

<span class="kw">fn</span> <span class="fn">main</span>() -&gt; <span class="type">Result</span>&lt;(), serde_json::<span class="type">Error</span>&gt; {
    <span class="kw">let</span> person = <span class="type">Person</span> {
        name:  <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Alice"</span>),
        age:   <span class="num">30</span>,
        email: <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"alice@example.com"</span>),
    };

    <span class="cm">// Serialize ke JSON</span>
    <span class="kw">let</span> json = serde_json::<span class="fn">to_string_pretty</span>(&amp;person)?;
    <span class="fn">println!</span>(<span class="str">"{}"</span>, json);

    <span class="cm">// Deserialize dari JSON</span>
    <span class="kw">let</span> json_str = <span class="str">r#"{"name":"Bob","age":25,"email":"bob@ex.com"}"#</span>;
    <span class="kw">let</span> p2: <span class="type">Person</span> = serde_json::<span class="fn">from_str</span>(json_str)?;
    <span class="fn">println!</span>(<span class="str">"{:?}"</span>, p2);
    <span class="type">Ok</span>(())
}</div>
</div>

<!-- ===================== 19. TESTING ===================== -->
<h2 class="animate-in">19. Testing</h2>

<div class="card animate-in">
<h3>Unit Test, Integration Test &amp; Doc Test</h3>
<div class="code-block"><span class="cm">// src/lib.rs</span>
<span class="kw">pub fn</span> <span class="fn">add</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; <span class="type">i32</span> { a + b }

<span class="kw">pub fn</span> <span class="fn">divide</span>(a: <span class="type">f64</span>, b: <span class="type">f64</span>) -&gt; <span class="type">Option</span>&lt;<span class="type">f64</span>&gt; {
    <span class="kw">if</span> b == <span class="num">0.0</span> { <span class="type">None</span> } <span class="kw">else</span> { <span class="type">Some</span>(a / b) }
}

<span class="cm">/// Menghitung kuadrat dari bilangan.</span>
<span class="cm">///</span>
<span class="cm">/// # Examples</span>
<span class="cm">/// &#96;&#96;&#96;</span>
<span class="cm">/// assert_eq!(my_crate::square(4), 16);</span>
<span class="cm">/// &#96;&#96;&#96;</span>
<span class="kw">pub fn</span> <span class="fn">square</span>(x: <span class="type">i32</span>) -&gt; <span class="type">i32</span> { x * x }

<span class="cm">// Unit tests (dalam file yang sama)</span>
#[<span class="fn">cfg</span>(test)]
<span class="kw">mod</span> tests {
    <span class="kw">use super</span>::*;

    #[<span class="fn">test</span>]
    <span class="kw">fn</span> <span class="fn">test_add_positive</span>() {
        <span class="fn">assert_eq!</span>(<span class="fn">add</span>(<span class="num">2</span>, <span class="num">3</span>), <span class="num">5</span>);
    }

    #[<span class="fn">test</span>]
    <span class="kw">fn</span> <span class="fn">test_add_negative</span>() {
        <span class="fn">assert_eq!</span>(<span class="fn">add</span>(-<span class="num">1</span>, -<span class="num">2</span>), -<span class="num">3</span>);
    }

    #[<span class="fn">test</span>]
    <span class="kw">fn</span> <span class="fn">test_divide_by_zero</span>() {
        <span class="fn">assert_eq!</span>(<span class="fn">divide</span>(<span class="num">10.0</span>, <span class="num">0.0</span>), <span class="type">None</span>);
    }

    #[<span class="fn">test</span>]
    #[<span class="fn">should_panic</span>(expected = <span class="str">"division by zero"</span>)]
    <span class="kw">fn</span> <span class="fn">test_panic</span>() {
        <span class="kw">let</span> _ = <span class="num">1</span> / <span class="num">0</span>; <span class="cm">// integer division by zero panics</span>
    }

    #[<span class="fn">test</span>]
    <span class="kw">fn</span> <span class="fn">test_with_result</span>() -&gt; <span class="type">Result</span>&lt;(), <span class="type">String</span>&gt; {
        <span class="kw">let</span> r = <span class="fn">divide</span>(<span class="num">10.0</span>, <span class="num">2.0</span>).<span class="fn">ok_or</span>(<span class="str">"div zero"</span>.<span class="fn">to_string</span>())?;
        <span class="fn">assert_eq!</span>(r, <span class="num">5.0</span>);
        <span class="type">Ok</span>(())
    }
}

<span class="cm">// Integration tests: tests/integration_test.rs</span>
<span class="cm">// use my_crate::add;</span>
<span class="cm">// #[test]</span>
<span class="cm">// fn integration_add() { assert_eq!(add(10, 20), 30); }</span></div>
</div>

<!-- ===================== 20. POPULAR CRATES ===================== -->
<h2 class="animate-in">20. Ekosistem Crates Populer</h2>

<div class="card animate-in">
<h3>Web Framework — Axum</h3>
<p>Axum adalah web framework modern berbasis Tokio dengan type-safe routing dan extractor system.</p>
<div class="code-block"><span class="cm">// Cargo.toml: axum = "0.7", tokio = { version="1", features=["full"] }</span>
<span class="kw">use</span> axum::{routing::{get, post}, <span class="type">Router</span>, <span class="type">Json</span>, extract::<span class="type">Path</span>};
<span class="kw">use</span> serde::{<span class="type">Deserialize</span>, <span class="type">Serialize</span>};

#[<span class="fn">derive</span>(<span class="type">Serialize</span>, <span class="type">Deserialize</span>)]
<span class="kw">struct</span> <span class="type">CreateUser</span> { username: <span class="type">String</span>, email: <span class="type">String</span> }

#[<span class="fn">derive</span>(<span class="type">Serialize</span>)]
<span class="kw">struct</span> <span class="type">User</span> { id: <span class="type">u64</span>, username: <span class="type">String</span> }

<span class="kw">async fn</span> <span class="fn">create_user</span>(<span class="type">Json</span>(payload): <span class="type">Json</span>&lt;<span class="type">CreateUser</span>&gt;) -&gt; <span class="type">Json</span>&lt;<span class="type">User</span>&gt; {
    <span class="type">Json</span>(<span class="type">User</span> { id: <span class="num">1</span>, username: payload.username })
}

<span class="kw">async fn</span> <span class="fn">get_user</span>(<span class="type">Path</span>(id): <span class="type">Path</span>&lt;<span class="type">u64</span>&gt;) -&gt; <span class="type">String</span> {
    <span class="fn">format!</span>(<span class="str">"user {}"</span>, id)
}

#[tokio::<span class="fn">main</span>]
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> app = <span class="type">Router</span>::<span class="fn">new</span>()
        .<span class="fn">route</span>(<span class="str">"/users"</span>,     <span class="fn">post</span>(<span class="fn">create_user</span>))
        .<span class="fn">route</span>(<span class="str">"/users/:id"</span>, <span class="fn">get</span>(<span class="fn">get_user</span>));

    <span class="kw">let</span> listener = tokio::net::<span class="type">TcpListener</span>::<span class="fn">bind</span>(<span class="str">"0.0.0.0:3000"</span>)
        .<span class="kw">await</span>.<span class="fn">unwrap</span>();
    axum::<span class="fn">serve</span>(listener, app).<span class="kw">await</span>.<span class="fn">unwrap</span>();
}</div>
</div>

<div class="card animate-in">
<h3>Ekosistem Crates — Ringkasan</h3>
<div class="table-wrapper">
<table>
<tr><th>Kategori</th><th>Crate</th><th>Keterangan</th></tr>
<tr><td rowspan="3"><strong>Web Framework</strong></td><td><code>axum</code></td><td>Modular, type-safe, berbasis Tokio</td></tr>
<tr><td><code>actix-web</code></td><td>Sangat cepat, actor model</td></tr>
<tr><td><code>rocket</code></td><td>Developer-friendly, ergonomis</td></tr>
<tr><td rowspan="2"><strong>Async Runtime</strong></td><td><code>tokio</code></td><td>De-facto standard async runtime</td></tr>
<tr><td><code>async-std</code></td><td>Async versi std library</td></tr>
<tr><td rowspan="2"><strong>Serialization</strong></td><td><code>serde</code></td><td>Framework serialisasi universal</td></tr>
<tr><td><code>serde_json</code></td><td>JSON support untuk serde</td></tr>
<tr><td rowspan="2"><strong>CLI</strong></td><td><code>clap</code></td><td>Argument parsing modern, derive-based</td></tr>
<tr><td><code>indicatif</code></td><td>Progress bars &amp; spinner</td></tr>
<tr><td rowspan="2"><strong>Error Handling</strong></td><td><code>anyhow</code></td><td>Flexible error handling untuk aplikasi</td></tr>
<tr><td><code>thiserror</code></td><td>Custom error types untuk library</td></tr>
<tr><td rowspan="2"><strong>HTTP Client</strong></td><td><code>reqwest</code></td><td>Async HTTP client, ergonomis</td></tr>
<tr><td><code>ureq</code></td><td>Blocking HTTP client, minimal deps</td></tr>
<tr><td rowspan="2"><strong>Database</strong></td><td><code>sqlx</code></td><td>Async SQL, compile-time query check</td></tr>
<tr><td><code>diesel</code></td><td>ORM &amp; query builder</td></tr>
<tr><td rowspan="2"><strong>WASM</strong></td><td><code>wasm-bindgen</code></td><td>Interop Rust-JavaScript</td></tr>
<tr><td><code>leptos</code></td><td>Full-stack web framework (WASM)</td></tr>
<tr><td rowspan="2"><strong>Data Parallelism</strong></td><td><code>rayon</code></td><td>Data parallelism — parallel iterator</td></tr>
<tr><td><code>crossbeam</code></td><td>Concurrency primitives &amp; channels</td></tr>
<tr><td><strong>Python Interop</strong></td><td><code>pyo3</code></td><td>Rust-Python FFI (extension modules)</td></tr>
</table>
</div>
</div>

<!-- ===================== CHEAT SHEET ===================== -->
<h2 class="animate-in">Cheat Sheet Rust</h2>

<div class="card animate-in">
<h3>Quick Reference</h3>
<div class="card-grid-3">
<div class="card">
<h4>Variabel &amp; Tipe</h4>
<div class="code-block"><span class="kw">let</span> x = <span class="num">5</span>;
<span class="kw">let mut</span> y = <span class="num">10</span>;
<span class="kw">const</span> C: <span class="type">u32</span> = <span class="num">100</span>;
<span class="kw">let</span> s: <span class="type">String</span> = <span class="str">"hi"</span>.<span class="fn">to_string</span>();
<span class="kw">let</span> r: &amp;<span class="type">str</span> = <span class="str">"literal"</span>;</div>
</div>
<div class="card">
<h4>Functions &amp; Closures</h4>
<div class="code-block"><span class="kw">fn</span> <span class="fn">add</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    a + b
}
<span class="kw">let</span> f = |x| x * <span class="num">2</span>;
<span class="kw">let</span> g = <span class="kw">move</span> |x| x + n;</div>
</div>
<div class="card">
<h4>Ownership</h4>
<div class="code-block"><span class="kw">let</span> s2 = s1;        <span class="cm">// move</span>
<span class="kw">let</span> s2 = s1.<span class="fn">clone</span>(); <span class="cm">// copy</span>
<span class="kw">let</span> r = &amp;s1;        <span class="cm">// borrow</span>
<span class="kw">let</span> r = &amp;<span class="kw">mut</span> s1;    <span class="cm">// mut borrow</span></div>
</div>
<div class="card">
<h4>Error Handling</h4>
<div class="code-block"><span class="kw">let</span> r = <span class="fn">risky</span>()?;   <span class="cm">// propagate</span>
<span class="kw">match</span> result {
  <span class="type">Ok</span>(v)  =&gt; v,
  <span class="type">Err</span>(e) =&gt; <span class="fn">handle</span>(e),
}
result.<span class="fn">unwrap_or</span>(default)</div>
</div>
<div class="card">
<h4>Collections</h4>
<div class="code-block"><span class="kw">let</span> v = <span class="fn">vec!</span>[<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>];
<span class="kw">let</span> s: <span class="type">HashSet</span>&lt;_&gt; = v.<span class="fn">iter</span>().<span class="fn">collect</span>();
v.<span class="fn">iter</span>().<span class="fn">map</span>(|x| x*<span class="num">2</span>)
 .<span class="fn">filter</span>(|x| x&gt;&amp;<span class="num">2</span>)
 .<span class="fn">collect</span>::&lt;<span class="type">Vec</span>&lt;_&gt;&gt;()</div>
</div>
<div class="card">
<h4>Traits &amp; Generics</h4>
<div class="code-block"><span class="kw">impl</span> <span class="type">Display</span> <span class="kw">for</span> <span class="type">MyType</span> { .. }
<span class="kw">fn</span> <span class="fn">f</span>&lt;T: <span class="type">Trait</span>&gt;(x: T) { .. }
<span class="kw">fn</span> <span class="fn">g</span>(x: &amp;<span class="kw">impl</span> <span class="type">Trait</span>) { .. }
<span class="kw">fn</span> <span class="fn">h</span>(x: &amp;<span class="kw">dyn</span> <span class="type">Trait</span>) { .. }</div>
</div>
</div>
</div>

<!-- ===================== REFERENCES ===================== -->
<h2 class="animate-in">Referensi &amp; Sumber Belajar</h2>

<div class="card animate-in">
<h3>Referensi Utama</h3>
<div class="table-wrapper">
<table>
<tr><th>Sumber</th><th>URL</th><th>Keterangan</th></tr>
<tr><td><strong>Dasar Pemrograman Rust</strong> (Novalagung)</td><td>https://dasarpemrogramanrust.novalagung.com</td><td>Referensi utama — Bahasa Indonesia, komprehensif</td></tr>
<tr><td><strong>The Rust Programming Language</strong> (Klabnik &amp; Nichols)</td><td>https://doc.rust-lang.org/book/</td><td>"The Book" — resmi, sangat direkomendasikan</td></tr>
<tr><td><strong>Rust Reference</strong></td><td>https://doc.rust-lang.org/reference/</td><td>Spesifikasi bahasa formal</td></tr>
<tr><td><strong>Rust by Example</strong></td><td>https://doc.rust-lang.org/rust-by-example/</td><td>Belajar lewat kode contoh</td></tr>
<tr><td><strong>Rustonomicon</strong></td><td>https://doc.rust-lang.org/nomicon/</td><td>Unsafe Rust — untuk advanced users</td></tr>
<tr><td><strong>crates.io</strong></td><td>https://crates.io</td><td>Package registry Rust</td></tr>
<tr><td><strong>docs.rs</strong></td><td>https://docs.rs</td><td>Dokumentasi semua crate</td></tr>
<tr><td><strong>Rust Playground</strong></td><td>https://play.rust-lang.org</td><td>Coba Rust di browser</td></tr>
</table>
</div>
</div>

</section>
`;

function initRustAnimations() {
    // ===================== CANVAS 1: OWNERSHIP =====================
    const ownershipCanvas = document.getElementById('canvas-rust-ownership');
    if (ownershipCanvas && ownershipCanvas.getContext) {
        const ctx = ownershipCanvas.getContext('2d');
        const w = ownershipCanvas.width;
        const h = ownershipCanvas.height;
        let animId = null;
        let animFrame = 0;

        const colors = {
            bg:     '#1e1e2e',
            text:   '#cdd6f4',
            text2:  '#6c7086',
            accent: '#89b4fa',
            green:  '#a6e3a1',
            red:    '#f38ba8',
            orange: '#fab387',
            purple: '#cba6f7',
            yellow: '#f9e2af',
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
            if (fill)   { ctx.fillStyle = fill;   ctx.fill();   }
            if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
        }

        function drawLabel(x, y, text, color) {
            ctx.font = 'bold 12px monospace';
            ctx.fillStyle = color;
            ctx.textAlign = 'left';
            ctx.fillText(text, x, y);
        }

        function drawVariable(x, y, label, value, color, alpha) {
            ctx.globalAlpha = alpha;
            drawRoundRect(x, y, 200, 40, 6, color, color + '22');
            ctx.font = '11px monospace';
            ctx.fillStyle = color;
            ctx.textAlign = 'left';
            ctx.fillText(label, x + 8, y + 15);
            ctx.fillStyle = colors.text;
            ctx.fillText(value, x + 8, y + 30);
            ctx.globalAlpha = 1;
        }

        function drawHeapBlock(x, y, value, color) {
            drawRoundRect(x, y, 180, 50, 6, color, color + '22');
            ctx.font = 'bold 13px monospace';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText('HEAP', x + 90, y + 18);
            ctx.fillStyle = colors.text;
            ctx.font = '12px monospace';
            ctx.fillText(value, x + 90, y + 36);
        }

        function drawArrow(x1, y1, x2, y2, color, dashed) {
            ctx.beginPath();
            if (dashed) {
                ctx.setLineDash([5, 3]);
            } else {
                ctx.setLineDash([]);
            }
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.setLineDash([]);

            // Arrowhead
            const angle = Math.atan2(y2 - y1, x2 - x1);
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - 10 * Math.cos(angle - 0.4), y2 - 10 * Math.sin(angle - 0.4));
            ctx.lineTo(x2 - 10 * Math.cos(angle + 0.4), y2 - 10 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        function drawStatusBox(msg, color) {
            drawRoundRect(10, h - 45, w - 20, 34, 6, color, color + '22');
            ctx.font = '12px monospace';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(msg, w / 2, h - 22);
        }

        function drawIdle() {
            clearCanvas();
            drawLabel(80, 55, 'STACK', colors.accent);
            drawRoundRect(10, 62, 260, 200, 8, null, colors.accent + '22');
            drawLabel(450, 55, 'HEAP', colors.green);
            drawRoundRect(380, 62, 210, 200, 8, null, colors.green + '22');

            drawVariable(30, 80, 'let s1', 'String::from("hello")', colors.accent, 1);
            drawHeapBlock(390, 80, '"hello"', colors.green);
            drawArrow(230, 100, 390, 105, colors.accent, false);

            ctx.font = '13px monospace';
            ctx.fillStyle = colors.text2;
            ctx.textAlign = 'center';
            ctx.fillText('Klik tombol di bawah untuk melihat animasi', w / 2, 200);
            ctx.fillText('ownership, borrow, dan mutable borrow', w / 2, 218);
        }

        function drawMoveAnim() {
            clearCanvas();

            ctx.font = 'bold 14px monospace';
            ctx.fillStyle = colors.orange;
            ctx.textAlign = 'center';
            ctx.fillText('Move: let s2 = s1;  (ownership berpindah)', w / 2, 28);

            drawLabel(80, 55, 'STACK', colors.accent);
            drawRoundRect(10, 62, 260, 240, 8, null, colors.accent + '22');
            drawLabel(450, 55, 'HEAP', colors.green);
            drawRoundRect(380, 62, 210, 240, 8, null, colors.green + '22');

            const progress = Math.min(animFrame / 70, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            // s1 — becomes invalid after move
            const s1Alpha = progress < 0.5 ? 1 : 1 - ((progress - 0.5) / 0.5);
            drawVariable(30, 80, 'let s1', 'String (moved away)', progress < 0.5 ? colors.accent : colors.red, Math.max(s1Alpha, 0.3));

            // s2 — appears
            if (progress > 0.3) {
                const s2Alpha = (progress - 0.3) / 0.7;
                drawVariable(30, 150, 'let s2', 'String::from("hello")', colors.green, s2Alpha * ease);
            }

            // Heap block
            drawHeapBlock(390, 100, '"hello"', colors.green);

            // Arrow from s1 initially, then from s2
            if (progress < 0.5) {
                drawArrow(230, 100, 390, 125, colors.accent, false);
            } else {
                ctx.globalAlpha = (progress - 0.5) * 2;
                drawArrow(230, 170, 390, 125, colors.green, false);
                ctx.globalAlpha = 1;
            }

            // X mark on s1 when invalid
            if (progress > 0.6) {
                ctx.globalAlpha = (progress - 0.6) / 0.4;
                ctx.font = 'bold 20px sans-serif';
                ctx.fillStyle = colors.red;
                ctx.textAlign = 'center';
                ctx.fillText('\u2717', 250, 104);
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                drawStatusBox('s1 tidak valid lagi! Hanya s2 yang bisa akses data.', colors.red);
            } else {
                animFrame++;
                animId = requestAnimationFrame(drawMoveAnim);
            }
        }

        function drawBorrowAnim() {
            clearCanvas();

            ctx.font = 'bold 14px monospace';
            ctx.fillStyle = colors.green;
            ctx.textAlign = 'center';
            ctx.fillText('Immutable Borrow: let r1 = &s1; let r2 = &s1;', w / 2, 28);

            drawLabel(80, 55, 'STACK', colors.accent);
            drawRoundRect(10, 62, 260, 260, 8, null, colors.accent + '22');
            drawLabel(450, 55, 'HEAP', colors.green);
            drawRoundRect(380, 62, 210, 260, 8, null, colors.green + '22');

            const progress = Math.min(animFrame / 60, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            drawVariable(30, 80, 'let s1', 'String::from("hello")', colors.accent, 1);
            drawVariable(30, 150, 'let r1 = &s1', '(borrow)', colors.green, ease);
            drawVariable(30, 220, 'let r2 = &s1', '(borrow)', colors.purple, ease * (progress > 0.4 ? 1 : 0));

            drawHeapBlock(390, 90, '"hello"', colors.green);
            drawArrow(230, 100, 390, 115, colors.accent, false);

            if (progress > 0.2) {
                ctx.globalAlpha = (progress - 0.2) / 0.8;
                drawArrow(30, 168, 30, 100, colors.green, true);
                ctx.globalAlpha = 1;
            }
            if (progress > 0.5) {
                ctx.globalAlpha = (progress - 0.5) / 0.5;
                drawArrow(50, 238, 50, 100, colors.purple, true);
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                drawStatusBox('Multiple &T borrows OK! s1 tetap valid dan bisa digunakan.', colors.green);
            } else {
                animFrame++;
                animId = requestAnimationFrame(drawBorrowAnim);
            }
        }

        function drawMutBorrowAnim() {
            clearCanvas();

            ctx.font = 'bold 14px monospace';
            ctx.fillStyle = colors.red;
            ctx.textAlign = 'center';
            ctx.fillText('Mutable Borrow: let m = &mut s1; (exclusive!)', w / 2, 28);

            drawLabel(80, 55, 'STACK', colors.accent);
            drawRoundRect(10, 62, 260, 260, 8, null, colors.accent + '22');
            drawLabel(450, 55, 'HEAP', colors.green);
            drawRoundRect(380, 62, 210, 260, 8, null, colors.green + '22');

            const progress = Math.min(animFrame / 60, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            // s1 — locked (dimmed)
            drawVariable(30, 80, 'let mut s1', 'String (LOCKED)', colors.text2, 0.4 + 0.3 * (1 - ease));
            // m — appears
            drawVariable(30, 180, 'let m = &mut s1', '(exclusive borrow)', colors.red, ease);

            drawHeapBlock(390, 100, '"hello"', colors.green);
            drawArrow(230, 95, 390, 125, colors.text2, true);

            if (progress > 0.3) {
                const a = (progress - 0.3) / 0.7;
                ctx.globalAlpha = a;
                drawArrow(230, 198, 390, 125, colors.red, false);
                ctx.globalAlpha = 1;
            }

            // Lock icon
            if (progress > 0.5) {
                ctx.globalAlpha = Math.min((progress - 0.5) * 2, 1);
                ctx.font = '22px sans-serif';
                ctx.fillStyle = colors.orange;
                ctx.textAlign = 'center';
                ctx.fillText('\uD83D\uDD12', 248, 100);
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                drawStatusBox('Hanya SATU &mut borrow diizinkan — s1 tidak bisa diakses.', colors.red);
            } else {
                animFrame++;
                animId = requestAnimationFrame(drawMutBorrowAnim);
            }
        }

        function startAnim(drawFn) {
            if (animId) cancelAnimationFrame(animId);
            animFrame = 0;
            drawFn();
        }

        const btnMove     = document.getElementById('rust-own-move');
        const btnBorrow   = document.getElementById('rust-own-borrow');
        const btnMutBorrow = document.getElementById('rust-own-mutborrow');
        const btnReset    = document.getElementById('rust-own-reset');

        if (btnMove)      btnMove.addEventListener('click',      () => startAnim(drawMoveAnim));
        if (btnBorrow)    btnBorrow.addEventListener('click',    () => startAnim(drawBorrowAnim));
        if (btnMutBorrow) btnMutBorrow.addEventListener('click', () => startAnim(drawMutBorrowAnim));
        if (btnReset)     btnReset.addEventListener('click',     () => { if (animId) cancelAnimationFrame(animId); drawIdle(); });

        drawIdle();
    }

    // ===================== CANVAS 2: BORROW CHECKER TIMELINE =====================
    const borrowCanvas = document.getElementById('canvas-rust-borrow');
    if (borrowCanvas && borrowCanvas.getContext) {
        const ctx = borrowCanvas.getContext('2d');
        const w = borrowCanvas.width;
        const h = borrowCanvas.height;
        let animId2 = null;
        let animFrame2 = 0;
        let currentMode = 'shared';

        const C = {
            bg:     '#1e1e2e',
            text:   '#cdd6f4',
            text2:  '#6c7086',
            green:  '#a6e3a1',
            red:    '#f38ba8',
            yellow: '#f9e2af',
            blue:   '#89b4fa',
            purple: '#cba6f7',
        };

        function clearC2() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = C.bg;
            ctx.fillRect(0, 0, w, h);
        }

        function drawBorrowTimeline(mode) {
            clearC2();
            const margin = 60;
            const lineY  = h / 2 - 20;
            const tlW    = w - margin * 2;

            ctx.font = 'bold 14px monospace';
            ctx.textAlign = 'center';

            if (mode === 'shared') {
                ctx.fillStyle = C.green;
                ctx.fillText('Multiple Shared Borrows (&T) — Semua boleh!', w / 2, 28);
            } else if (mode === 'exclusive') {
                ctx.fillStyle = C.yellow;
                ctx.fillText('Single Exclusive Borrow (&mut T) — Satu saja!', w / 2, 28);
            } else {
                ctx.fillStyle = C.red;
                ctx.fillText('Konflik: &mut T + &T sekaligus — COMPILE ERROR!', w / 2, 28);
            }

            // Timeline base
            ctx.beginPath();
            ctx.moveTo(margin, lineY);
            ctx.lineTo(margin + tlW, lineY);
            ctx.strokeStyle = C.text2;
            ctx.lineWidth = 2;
            ctx.setLineDash([]);
            ctx.stroke();

            // Time labels
            ['t=0', 't=1', 't=2', 't=3', 't=4'].forEach((t, i) => {
                const x = margin + (tlW / 4) * i;
                ctx.fillStyle = C.text2;
                ctx.font = '11px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(t, x, lineY + 20);
                ctx.beginPath();
                ctx.moveTo(x, lineY - 5);
                ctx.lineTo(x, lineY + 5);
                ctx.strokeStyle = C.text2;
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            const progress = Math.min(animFrame2 / 80, 1);
            const segW = tlW / 4;

            function drawBorrowBar(label, y, startT, endT, color, active) {
                const x1 = margin + startT * segW;
                const x2 = margin + endT   * segW;
                const bw = (x2 - x1) * (active ? Math.min(progress * (4 / endT), 1) : 1);

                ctx.globalAlpha = active ? Math.min(progress * 2, 1) : 1;

                // Bar
                ctx.beginPath();
                ctx.rect(x1, y - 12, bw, 24);
                ctx.fillStyle = color + '44';
                ctx.fill();
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.stroke();

                // Label
                ctx.font = '11px monospace';
                ctx.fillStyle = color;
                ctx.textAlign = 'left';
                ctx.fillText(label, x1 + 5, y + 4);
                ctx.globalAlpha = 1;
            }

            if (mode === 'shared') {
                drawBorrowBar('let r1 = &val  (read)',   lineY - 55, 0, 3, C.green,  true);
                drawBorrowBar('let r2 = &val  (read)',   lineY - 20, 1, 4, C.blue,   true);
                drawBorrowBar('let r3 = &val  (read)',   lineY + 15, 2, 4, C.purple, true);

                if (progress > 0.7) {
                    ctx.globalAlpha = (progress - 0.7) / 0.3;
                    ctx.font = 'bold 13px monospace';
                    ctx.fillStyle = C.green;
                    ctx.textAlign = 'center';
                    ctx.fillText('\u2713 Compiler OK — semua &T bisa hidup bersamaan', w / 2, h - 25);
                    ctx.globalAlpha = 1;
                }
            } else if (mode === 'exclusive') {
                drawBorrowBar('let m = &mut val  (write)', lineY - 25, 0, 4, C.yellow, true);

                if (progress > 0.7) {
                    ctx.globalAlpha = (progress - 0.7) / 0.3;
                    ctx.font = 'bold 13px monospace';
                    ctx.fillStyle = C.yellow;
                    ctx.textAlign = 'center';
                    ctx.fillText('\u2713 OK — satu &mut selama scope-nya, tidak ada &T lain', w / 2, h - 25);
                    ctx.globalAlpha = 1;
                }
            } else {
                // Conflict
                drawBorrowBar('let r = &val     (read)',  lineY - 40, 0, 3, C.green,  false);
                drawBorrowBar('let m = &mut val (write)', lineY,      1, 4, C.red,    false);

                // Conflict marker
                const conflictX = margin + 1 * segW;
                ctx.globalAlpha = Math.min(progress * 3, 1);
                ctx.font = 'bold 28px sans-serif';
                ctx.fillStyle = C.red;
                ctx.textAlign = 'center';
                ctx.fillText('\u2757', conflictX, lineY - 60);
                ctx.font = '12px monospace';
                ctx.fillStyle = C.red;
                ctx.fillText('error[E0502]: cannot borrow as mutable', conflictX + 60, lineY - 55);
                ctx.fillText('because it is also borrowed as immutable', conflictX + 60, lineY - 40);
                ctx.globalAlpha = 1;

                if (progress > 0.7) {
                    ctx.globalAlpha = (progress - 0.7) / 0.3;
                    ctx.font = 'bold 13px monospace';
                    ctx.fillStyle = C.red;
                    ctx.textAlign = 'center';
                    ctx.fillText('\u2717 COMPILE ERROR — &mut dan & tidak boleh bersamaan!', w / 2, h - 25);
                    ctx.globalAlpha = 1;
                }
            }

            if (progress < 1) {
                animFrame2++;
                animId2 = requestAnimationFrame(() => drawBorrowTimeline(mode));
            }
        }

        function startBorrowAnim(mode) {
            if (animId2) cancelAnimationFrame(animId2);
            animFrame2 = 0;
            currentMode = mode;
            drawBorrowTimeline(mode);
        }

        const btnShared    = document.getElementById('rust-borrow-shared');
        const btnExclusive = document.getElementById('rust-borrow-exclusive');
        const btnConflict  = document.getElementById('rust-borrow-conflict');

        if (btnShared)    btnShared.addEventListener('click',    () => startBorrowAnim('shared'));
        if (btnExclusive) btnExclusive.addEventListener('click', () => startBorrowAnim('exclusive'));
        if (btnConflict)  btnConflict.addEventListener('click',  () => startBorrowAnim('conflict'));

        startBorrowAnim('shared');
    }

    // ===================== CANVAS 3: STACK / HEAP / RAII MEMORY =====================
    const memCanvas = document.getElementById('canvas-rust-memory');
    if (memCanvas && memCanvas.getContext) {
        const ctx = memCanvas.getContext('2d');
        const w = memCanvas.width;
        const h = memCanvas.height;
        let animId3 = null;
        let animFrame3 = 0;
        let memMode = 'idle';

        const MC = {
            bg:     '#1e1e2e',
            text:   '#cdd6f4',
            text2:  '#6c7086',
            stack:  '#89b4fa',
            heap:   '#a6e3a1',
            red:    '#f38ba8',
            orange: '#fab387',
            yellow: '#f9e2af',
        };

        function clearM() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = MC.bg;
            ctx.fillRect(0, 0, w, h);
        }

        function drawRR(x, y, bw, bh, r, stroke, fill) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + bw - r, y);
            ctx.quadraticCurveTo(x + bw, y, x + bw, y + r);
            ctx.lineTo(x + bw, y + bh - r);
            ctx.quadraticCurveTo(x + bw, y + bh, x + bw - r, y + bh);
            ctx.lineTo(x + r, y + bh);
            ctx.quadraticCurveTo(x, y + bh, x, y + bh - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            if (fill)   { ctx.fillStyle = fill;   ctx.fill();   }
            if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
        }

        function drawMemArrow(x1, y1, x2, y2, color) {
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
            const angle = Math.atan2(y2 - y1, x2 - x1);
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - 9 * Math.cos(angle - 0.4), y2 - 9 * Math.sin(angle - 0.4));
            ctx.lineTo(x2 - 9 * Math.cos(angle + 0.4), y2 - 9 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        function drawMemoryIdle() {
            clearM();

            // Stack region
            ctx.font = 'bold 13px monospace';
            ctx.fillStyle = MC.stack;
            ctx.textAlign = 'center';
            ctx.fillText('STACK', 150, 30);
            drawRR(10, 40, 280, h - 60, 8, MC.stack, MC.stack + '18');

            // Heap region
            ctx.fillStyle = MC.heap;
            ctx.fillText('HEAP', 530, 30);
            drawRR(380, 40, 300, h - 60, 8, MC.heap, MC.heap + '18');

            // Stack frames
            const frames = [
                { label: 'x: i32 = 42',          y: 60 },
                { label: 'flag: bool = true',      y: 100 },
                { label: 'ptr: *String --',        y: 140 },
                { label: 'len: usize = 5',         y: 180 },
                { label: 'cap: usize = 8',         y: 220 },
            ];
            frames.forEach(f => {
                drawRR(20, f.y, 260, 32, 4, MC.stack + '88', MC.stack + '18');
                ctx.font = '11px monospace';
                ctx.fillStyle = MC.text;
                ctx.textAlign = 'left';
                ctx.fillText(f.label, 30, f.y + 20);
            });

            // Heap blocks
            drawRR(390, 60,  220, 60, 6, MC.heap, MC.heap + '22');
            ctx.font = '11px monospace';
            ctx.fillStyle = MC.heap;
            ctx.textAlign = 'center';
            ctx.fillText('String data: "hello"', 500, 85);
            ctx.fillText('cap=8, len=5', 500, 105);

            drawRR(390, 135, 220, 55, 6, MC.orange, MC.orange + '22');
            ctx.fillStyle = MC.orange;
            ctx.fillText('Vec<i32>: [1,2,3,4]', 500, 158);
            ctx.fillText('heap-allocated', 500, 178);

            // Arrow from stack ptr to heap
            drawMemArrow(280, 155, 390, 90, MC.stack);
            drawMemArrow(280, 215, 390, 162, MC.orange);

            ctx.font = '12px monospace';
            ctx.fillStyle = MC.text2;
            ctx.textAlign = 'center';
            ctx.fillText('Klik tombol untuk melihat animasi alokasi & RAII drop', w / 2, h - 10);
        }

        function drawAllocAnim() {
            clearM();

            const progress = Math.min(animFrame3 / 90, 1);

            ctx.font = 'bold 13px monospace';
            ctx.fillStyle = MC.yellow;
            ctx.textAlign = 'center';
            ctx.fillText('Alokasi Memory — Stack dan Heap', w / 2, 28);

            // Stack
            ctx.fillStyle = MC.stack;
            ctx.fillText('STACK', 150, 50);
            drawRR(10, 58, 280, h - 80, 8, MC.stack, MC.stack + '18');

            // Heap
            ctx.fillStyle = MC.heap;
            ctx.fillText('HEAP', 530, 50);
            drawRR(380, 58, 300, h - 80, 8, MC.heap, MC.heap + '18');

            const items = [
                { label: 'let x: i32 = 10',     y: 75,  color: MC.stack, alpha: Math.min(progress / 0.2, 1) },
                { label: 'let flag: bool = true', y: 115, color: MC.stack, alpha: Math.min((progress - 0.2) / 0.2, 1) },
                { label: 'let s: String',         y: 155, color: MC.stack, alpha: Math.min((progress - 0.4) / 0.2, 1) },
            ];

            items.forEach(item => {
                if (item.alpha > 0) {
                    ctx.globalAlpha = Math.max(item.alpha, 0);
                    drawRR(20, item.y, 260, 32, 4, item.color + '88', item.color + '18');
                    ctx.font = '11px monospace';
                    ctx.fillStyle = item.color;
                    ctx.textAlign = 'left';
                    ctx.fillText(item.label, 30, item.y + 20);
                    ctx.globalAlpha = 1;
                }
            });

            // Heap allocation for String
            if (progress > 0.5) {
                const ha = (progress - 0.5) / 0.3;
                ctx.globalAlpha = Math.min(ha, 1);
                drawRR(390, 80, 220, 65, 6, MC.heap, MC.heap + '22');
                ctx.font = '11px monospace';
                ctx.fillStyle = MC.heap;
                ctx.textAlign = 'center';
                ctx.fillText('"hello" (5 bytes)', 500, 105);
                ctx.fillText('heap-allocated', 500, 125);
                ctx.globalAlpha = 1;
            }

            if (progress > 0.7) {
                const aa = (progress - 0.7) / 0.3;
                ctx.globalAlpha = Math.min(aa, 1);
                drawMemArrow(280, 172, 390, 112, MC.stack);
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                ctx.font = 'bold 12px monospace';
                ctx.fillStyle = MC.heap;
                ctx.textAlign = 'center';
                ctx.fillText('Stack: ukuran tetap, cepat. Heap: dinamis, melalui pointer.', w / 2, h - 15);
            } else {
                animFrame3++;
                animId3 = requestAnimationFrame(drawAllocAnim);
            }
        }

        function drawDropAnim() {
            clearM();

            const progress = Math.min(animFrame3 / 100, 1);

            ctx.font = 'bold 13px monospace';
            ctx.fillStyle = MC.red;
            ctx.textAlign = 'center';
            ctx.fillText('RAII Drop — memory dibebaskan saat scope berakhir', w / 2, 28);

            // Stack
            ctx.fillStyle = MC.stack;
            ctx.fillText('STACK', 150, 50);
            drawRR(10, 58, 280, h - 80, 8, MC.stack, MC.stack + '18');

            // Heap
            ctx.fillStyle = MC.heap;
            ctx.fillText('HEAP', 530, 50);
            drawRR(380, 58, 300, h - 80, 8, MC.heap, MC.heap + '18');

            const items = [
                { label: 's3: String (inner scope)', y: 75,  heapY: 75 },
                { label: 's2: String',               y: 115, heapY: 155 },
                { label: 's1: String',               y: 155, heapY: 225 },
            ];

            // Drop in reverse order: s3 first, then s2, then s1
            items.forEach((item, i) => {
                const dropAt = i * 0.3;
                const dropped = progress > dropAt;
                const dropProgress = dropped ? Math.min((progress - dropAt) / 0.2, 1) : 0;

                ctx.globalAlpha = 1 - dropProgress;
                drawRR(20, item.y, 260, 32, 4, dropped && dropProgress > 0 ? MC.red + '88' : MC.stack + '88',
                                               dropped && dropProgress > 0 ? MC.red + '18' : MC.stack + '18');
                ctx.font = '11px monospace';
                ctx.fillStyle = dropped && dropProgress > 0 ? MC.red : MC.stack;
                ctx.textAlign = 'left';
                ctx.fillText(item.label, 30, item.y + 20);

                // Heap block
                drawRR(390, item.heapY, 200, 50, 6,
                    dropped && dropProgress > 0 ? MC.red : MC.heap,
                    dropped && dropProgress > 0 ? MC.red + '18' : MC.heap + '22');
                ctx.font = '11px monospace';
                ctx.fillStyle = dropped && dropProgress > 0 ? MC.red : MC.heap;
                ctx.textAlign = 'center';
                ctx.fillText(dropped && dropProgress > 0 ? 'FREED' : '"data"', 490, item.heapY + 28);
                ctx.globalAlpha = 1;

                if (!dropped || dropProgress < 1) {
                    drawMemArrow(280, item.y + 16, 390, item.heapY + 25, dropped ? MC.red : MC.stack);
                }

                if (dropped && dropProgress > 0.5) {
                    ctx.globalAlpha = Math.min((dropProgress - 0.5) * 2, 1);
                    ctx.font = 'bold 16px sans-serif';
                    ctx.fillStyle = MC.red;
                    ctx.textAlign = 'center';
                    ctx.fillText('drop()', 350, item.y + 20);
                    ctx.globalAlpha = 1;
                }
            });

            if (progress >= 0.95) {
                ctx.font = 'bold 12px monospace';
                ctx.fillStyle = MC.red;
                ctx.textAlign = 'center';
                ctx.fillText('RAII: Drop dipanggil otomatis, reverse order, no leaks!', w / 2, h - 15);
            } else {
                animFrame3++;
                animId3 = requestAnimationFrame(drawDropAnim);
            }
        }

        const btnAlloc = document.getElementById('rust-mem-alloc');
        const btnDrop  = document.getElementById('rust-mem-drop');
        const btnReset = document.getElementById('rust-mem-reset');

        if (btnAlloc) btnAlloc.addEventListener('click', () => {
            if (animId3) cancelAnimationFrame(animId3);
            animFrame3 = 0;
            memMode = 'alloc';
            drawAllocAnim();
        });
        if (btnDrop) btnDrop.addEventListener('click', () => {
            if (animId3) cancelAnimationFrame(animId3);
            animFrame3 = 0;
            memMode = 'drop';
            drawDropAnim();
        });
        if (btnReset) btnReset.addEventListener('click', () => {
            if (animId3) cancelAnimationFrame(animId3);
            drawMemoryIdle();
        });

        drawMemoryIdle();
    }
}
