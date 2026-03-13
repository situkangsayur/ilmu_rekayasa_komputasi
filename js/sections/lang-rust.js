// ============================================================
// RUST DEEP DIVE - Comprehensive Interactive Learning
// ============================================================

sections['lang-rust'] = () => `
<h1 class="section-title animate-in">Rust Deep Dive</h1>
<p class="section-subtitle animate-in">Bahasa sistem modern dengan jaminan memory safety tanpa garbage collector — dari dasar hingga REST API dan interoperabilitas Python</p>

<!-- ===================== 1. PENGENALAN RUST ===================== -->
<h2 class="animate-in">1. Pengenalan Rust</h2>

<div class="card animate-in">
    <h3>Sejarah Singkat</h3>
    <p>Rust dimulai sebagai proyek pribadi <strong>Graydon Hoare</strong> di Mozilla pada tahun 2006. Mozilla mulai mendanai proyek ini pada 2009, dan versi <strong>1.0 dirilis pada 15 Mei 2015</strong>. Sejak saat itu, Rust berkembang pesat dan konsisten menjadi <strong>"bahasa pemrograman paling dicintai"</strong> di survei Stack Overflow selama bertahun-tahun berturut-turut.</p>
    <p>Pada 2021, <strong>Rust Foundation</strong> didirikan oleh AWS, Google, Huawei, Microsoft, dan Mozilla untuk mengelola bahasa ini secara independen. Saat ini, Rust digunakan di kernel Linux, Android, Windows, Chromium, dan banyak infrastruktur kritis lainnya.</p>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h4>Mengapa Rust?</h4>
        <ul>
            <li><strong>Memory Safety tanpa GC</strong> — Tidak ada null pointer, dangling pointer, atau data race di compile time</li>
            <li><strong>Zero-Cost Abstractions</strong> — Abstraksi tingkat tinggi tanpa overhead runtime</li>
            <li><strong>Fearless Concurrency</strong> — Compiler mencegah data race secara statis</li>
            <li><strong>Performa C/C++</strong> — Tidak ada garbage collector, kontrol memori langsung</li>
            <li><strong>Ekosistem Modern</strong> — Cargo (package manager), crates.io, rustfmt, clippy</li>
        </ul>
    </div>
    <div class="card">
        <h4>Use Cases</h4>
        <ul>
            <li><strong>Systems Programming</strong> — OS kernel, driver, embedded</li>
            <li><strong>WebAssembly</strong> — Performa native di browser</li>
            <li><strong>CLI Tools</strong> — ripgrep, bat, fd, exa</li>
            <li><strong>Web Backend</strong> — Actix-web, Axum, Rocket</li>
            <li><strong>Game Engines</strong> — Bevy, Amethyst</li>
            <li><strong>Blockchain</strong> — Solana, Polkadot (Substrate)</li>
            <li><strong>Database</strong> — TiKV, SurrealDB</li>
        </ul>
    </div>
</div>

<div class="info-box animate-in">
    <strong>Filosofi Inti Rust:</strong> "Jika program berhasil di-compile, maka ia bebas dari memory bug." Ini dicapai melalui <strong>ownership system</strong> — sebuah pendekatan unik yang tidak dimiliki bahasa lain. Rust tidak menggunakan garbage collector seperti Java/Go, dan tidak membiarkan programmer mengelola memori secara manual seperti C/C++. Ownership adalah jalan tengah yang revolusioner.
</div>

<div class="card animate-in">
    <h4>Hello World</h4>
    <div class="code-block"><span class="cm">// hello.rs</span>
<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="fn">println!</span>(<span class="str">"Halo, Dunia!"</span>);
}

<span class="cm">// Compile dan jalankan:</span>
<span class="cm">// $ rustc hello.rs</span>
<span class="cm">// $ ./hello</span>
<span class="cm">//</span>
<span class="cm">// Atau menggunakan Cargo:</span>
<span class="cm">// $ cargo new hello_project</span>
<span class="cm">// $ cd hello_project</span>
<span class="cm">// $ cargo run</span></div>
</div>

<!-- ===================== 2. VARIABEL & KONSTANTA ===================== -->
<h2 class="animate-in">2. Variabel & Konstanta</h2>

<div class="card animate-in">
    <h3>Immutable by Default</h3>
    <p>Di Rust, variabel bersifat <strong>immutable (tidak bisa diubah) secara default</strong>. Ini adalah keputusan desain yang disengaja untuk mendorong kode yang lebih aman dan mudah di-reason. Jika kamu ingin variabel yang bisa diubah, kamu harus secara eksplisit menandainya dengan <code>mut</code>.</p>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Immutable — tidak bisa diubah setelah inisialisasi</span>
    <span class="kw">let</span> x = <span class="num">5</span>;
    <span class="cm">// x = 6; // ERROR: cannot assign twice to immutable variable</span>

    <span class="cm">// Mutable — bisa diubah</span>
    <span class="kw">let mut</span> y = <span class="num">10</span>;
    <span class="fn">println!</span>(<span class="str">"y sebelum: {}"</span>, y);
    y = <span class="num">20</span>;
    <span class="fn">println!</span>(<span class="str">"y sesudah: {}"</span>, y);
}</div>
</div>

<div class="card animate-in">
    <h3>const vs static</h3>
    <div class="code-block"><span class="cm">// const: nilai harus diketahui saat compile time, selalu immutable</span>
<span class="cm">// HARUS memiliki type annotation</span>
<span class="kw">const</span> MAX_POINTS: <span class="type">u32</span> = <span class="num">100_000</span>;
<span class="kw">const</span> PI: <span class="type">f64</span> = <span class="num">3.14159265358979</span>;

<span class="cm">// static: mirip const tapi punya alamat memori tetap</span>
<span class="cm">// Bisa mutable (unsafe), hidup sepanjang program</span>
<span class="kw">static</span> LANGUAGE: &amp;<span class="type">str</span> = <span class="str">"Rust"</span>;
<span class="kw">static mut</span> COUNTER: <span class="type">u32</span> = <span class="num">0</span>; <span class="cm">// memerlukan unsafe untuk akses</span>

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="fn">println!</span>(<span class="str">"Max: {}, Lang: {}"</span>, MAX_POINTS, LANGUAGE);

    <span class="cm">// Akses static mut memerlukan unsafe block</span>
    <span class="kw">unsafe</span> {
        COUNTER += <span class="num">1</span>;
        <span class="fn">println!</span>(<span class="str">"Counter: {}"</span>, COUNTER);
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Shadowing</h3>
    <p>Rust memungkinkan <strong>shadowing</strong> — mendeklarasikan variabel baru dengan nama yang sama. Ini berbeda dari <code>mut</code> karena kamu bisa mengubah tipe data. Variabel lama "tertutupi" oleh yang baru.</p>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> x = <span class="num">5</span>;
    <span class="kw">let</span> x = x + <span class="num">1</span>;       <span class="cm">// x = 6 (shadow pertama)</span>
    <span class="kw">let</span> x = x * <span class="num">2</span>;       <span class="cm">// x = 12 (shadow kedua)</span>

    <span class="cm">// Shadowing bisa mengubah tipe!</span>
    <span class="kw">let</span> spaces = <span class="str">"   "</span>;           <span class="cm">// &amp;str</span>
    <span class="kw">let</span> spaces = spaces.<span class="fn">len</span>();    <span class="cm">// usize — tipe berubah!</span>

    <span class="fn">println!</span>(<span class="str">"x = {}, spaces = {}"</span>, x, spaces);
}</div>
</div>

<div class="card animate-in">
    <h3>Type Annotations</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Rust bisa melakukan type inference...</span>
    <span class="kw">let</span> a = <span class="num">42</span>;              <span class="cm">// inferred: i32</span>
    <span class="kw">let</span> b = <span class="num">3.14</span>;            <span class="cm">// inferred: f64</span>
    <span class="kw">let</span> c = <span class="kw">true</span>;            <span class="cm">// inferred: bool</span>

    <span class="cm">// ...tapi kamu bisa menentukan tipe secara eksplisit</span>
    <span class="kw">let</span> d: <span class="type">i64</span> = <span class="num">42</span>;
    <span class="kw">let</span> e: <span class="type">f32</span> = <span class="num">3.14</span>;
    <span class="kw">let</span> f: <span class="type">u8</span> = <span class="num">255</span>;

    <span class="cm">// Type annotation WAJIB saat compiler tidak bisa infer</span>
    <span class="kw">let</span> guess: <span class="type">u32</span> = <span class="str">"42"</span>.<span class="fn">parse</span>().<span class="fn">expect</span>(<span class="str">"Bukan angka!"</span>);
}</div>
</div>

<!-- ===================== 3. TIPE DATA ===================== -->
<h2 class="animate-in">3. Tipe Data</h2>

<div class="card animate-in">
    <h3>Scalar Types</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Kategori</th><th>Tipe</th><th>Ukuran</th><th>Range / Keterangan</th></tr>
            <tr><td rowspan="5"><strong>Integer (Signed)</strong></td><td><code>i8</code></td><td>1 byte</td><td>-128 s/d 127</td></tr>
            <tr><td><code>i16</code></td><td>2 byte</td><td>-32,768 s/d 32,767</td></tr>
            <tr><td><code>i32</code></td><td>4 byte</td><td>~-2.1B s/d ~2.1B (default integer)</td></tr>
            <tr><td><code>i64</code></td><td>8 byte</td><td>~-9.2 quintillion s/d ~9.2 quintillion</td></tr>
            <tr><td><code>i128</code></td><td>16 byte</td><td>Sangat besar</td></tr>
            <tr><td rowspan="5"><strong>Integer (Unsigned)</strong></td><td><code>u8</code></td><td>1 byte</td><td>0 s/d 255</td></tr>
            <tr><td><code>u16</code></td><td>2 byte</td><td>0 s/d 65,535</td></tr>
            <tr><td><code>u32</code></td><td>4 byte</td><td>0 s/d ~4.2B</td></tr>
            <tr><td><code>u64</code></td><td>8 byte</td><td>0 s/d ~18.4 quintillion</td></tr>
            <tr><td><code>u128</code></td><td>16 byte</td><td>Sangat besar</td></tr>
            <tr><td><strong>Arch-dependent</strong></td><td><code>isize / usize</code></td><td>4/8 byte</td><td>Tergantung arsitektur (32/64 bit). usize digunakan untuk indexing.</td></tr>
            <tr><td rowspan="2"><strong>Float</strong></td><td><code>f32</code></td><td>4 byte</td><td>Single precision (IEEE 754)</td></tr>
            <tr><td><code>f64</code></td><td>8 byte</td><td>Double precision (default float)</td></tr>
            <tr><td><strong>Boolean</strong></td><td><code>bool</code></td><td>1 byte</td><td><code>true</code> atau <code>false</code></td></tr>
            <tr><td><strong>Character</strong></td><td><code>char</code></td><td>4 byte</td><td>Unicode scalar value (U+0000 s/d U+D7FF, U+E000 s/d U+10FFFF)</td></tr>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Compound Types: Tuple & Array</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// TUPLE — kumpulan nilai dengan tipe berbeda, ukuran tetap</span>
    <span class="kw">let</span> tup: (<span class="type">i32</span>, <span class="type">f64</span>, <span class="type">bool</span>) = (<span class="num">500</span>, <span class="num">6.4</span>, <span class="kw">true</span>);

    <span class="cm">// Destructuring</span>
    <span class="kw">let</span> (x, y, z) = tup;
    <span class="fn">println!</span>(<span class="str">"x={}, y={}, z={}"</span>, x, y, z);

    <span class="cm">// Akses dengan index</span>
    <span class="kw">let</span> first = tup.<span class="num">0</span>;
    <span class="kw">let</span> second = tup.<span class="num">1</span>;

    <span class="cm">// Unit tuple — tuple kosong, tipe () (mirip void)</span>
    <span class="kw">let</span> unit: () = ();

    <span class="cm">// ARRAY — semua elemen tipe sama, ukuran tetap (di stack)</span>
    <span class="kw">let</span> arr = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
    <span class="kw">let</span> arr2: [<span class="type">i32</span>; <span class="num">5</span>] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]; <span class="cm">// type annotation</span>
    <span class="kw">let</span> arr3 = [<span class="num">0</span>; <span class="num">10</span>]; <span class="cm">// [0, 0, 0, ...] 10 elemen</span>

    <span class="cm">// Akses array — bounds-checked saat runtime!</span>
    <span class="kw">let</span> first = arr[<span class="num">0</span>];
    <span class="cm">// arr[10]; // PANIC: index out of bounds</span>
}</div>
</div>

<div class="card animate-in">
    <h3>String vs &amp;str</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// &amp;str — string slice, referensi ke data string (immutable, di stack)</span>
    <span class="cm">// Biasanya string literal, disimpan di binary program</span>
    <span class="kw">let</span> s1: &amp;<span class="type">str</span> = <span class="str">"hello"</span>;

    <span class="cm">// String — owned string, heap-allocated, growable</span>
    <span class="kw">let</span> s2 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="kw">let mut</span> s3 = <span class="type">String</span>::<span class="fn">new</span>();
    s3.<span class="fn">push_str</span>(<span class="str">"hello"</span>);
    s3.<span class="fn">push</span>(<span class="str">' '</span>);
    s3.<span class="fn">push_str</span>(<span class="str">"world"</span>);

    <span class="cm">// Konversi</span>
    <span class="kw">let</span> owned: <span class="type">String</span> = s1.<span class="fn">to_string</span>();     <span class="cm">// &amp;str -&gt; String</span>
    <span class="kw">let</span> borrowed: &amp;<span class="type">str</span> = &amp;s2;              <span class="cm">// String -&gt; &amp;str (deref coercion)</span>

    <span class="cm">// String concatenation</span>
    <span class="kw">let</span> hello = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Hello, "</span>);
    <span class="kw">let</span> world = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"World!"</span>);
    <span class="kw">let</span> greeting = <span class="fn">format!</span>(<span class="str">"{}{}"</span>, hello, world); <span class="cm">// recommended</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Vec, HashMap, Option, Result</h3>
    <div class="code-block"><span class="kw">use</span> std::collections::<span class="type">HashMap</span>;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Vec&lt;T&gt; — dynamic array (seperti ArrayList di Java)</span>
    <span class="kw">let mut</span> v: <span class="type">Vec</span>&lt;<span class="type">i32</span>&gt; = <span class="type">Vec</span>::<span class="fn">new</span>();
    v.<span class="fn">push</span>(<span class="num">1</span>);
    v.<span class="fn">push</span>(<span class="num">2</span>);
    v.<span class="fn">push</span>(<span class="num">3</span>);

    <span class="kw">let</span> v2 = <span class="fn">vec!</span>[<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>]; <span class="cm">// macro shorthand</span>
    <span class="kw">let</span> first = &amp;v2[<span class="num">0</span>];          <span class="cm">// panic jika out of bounds</span>
    <span class="kw">let</span> safe = v2.<span class="fn">get</span>(<span class="num">0</span>);        <span class="cm">// returns Option&lt;&amp;i32&gt;</span>

    <span class="cm">// HashMap&lt;K, V&gt;</span>
    <span class="kw">let mut</span> scores = <span class="type">HashMap</span>::<span class="fn">new</span>();
    scores.<span class="fn">insert</span>(<span class="str">"Alice"</span>, <span class="num">100</span>);
    scores.<span class="fn">insert</span>(<span class="str">"Bob"</span>, <span class="num">85</span>);
    scores.<span class="fn">entry</span>(<span class="str">"Charlie"</span>).<span class="fn">or_insert</span>(<span class="num">90</span>);

    <span class="kw">if let</span> <span class="type">Some</span>(score) = scores.<span class="fn">get</span>(<span class="str">"Alice"</span>) {
        <span class="fn">println!</span>(<span class="str">"Alice: {}"</span>, score);
    }

    <span class="cm">// Option&lt;T&gt; — bisa bernilai Some(T) atau None</span>
    <span class="kw">let</span> some_number: <span class="type">Option</span>&lt;<span class="type">i32</span>&gt; = <span class="type">Some</span>(<span class="num">42</span>);
    <span class="kw">let</span> no_number: <span class="type">Option</span>&lt;<span class="type">i32</span>&gt; = <span class="type">None</span>;

    <span class="cm">// Result&lt;T, E&gt; — bisa bernilai Ok(T) atau Err(E)</span>
    <span class="kw">let</span> parsed: <span class="type">Result</span>&lt;<span class="type">i32</span>, _&gt; = <span class="str">"42"</span>.<span class="fn">parse</span>();
    <span class="kw">let</span> failed: <span class="type">Result</span>&lt;<span class="type">i32</span>, _&gt; = <span class="str">"abc"</span>.<span class="fn">parse</span>();

    <span class="kw">match</span> parsed {
        <span class="type">Ok</span>(n) =&gt; <span class="fn">println!</span>(<span class="str">"Parsed: {}"</span>, n),
        <span class="type">Err</span>(e) =&gt; <span class="fn">println!</span>(<span class="str">"Error: {}"</span>, e),
    }
}</div>
</div>

<!-- ===================== 4. PRINT & LOGGING ===================== -->
<h2 class="animate-in">4. Print & Logging</h2>

<div class="card animate-in">
    <h3>Print Macros</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// println! — print dengan newline ke stdout</span>
    <span class="fn">println!</span>(<span class="str">"Hello, World!"</span>);
    <span class="fn">println!</span>(<span class="str">"Nama: {}, Umur: {}"</span>, <span class="str">"Budi"</span>, <span class="num">25</span>);

    <span class="cm">// print! — tanpa newline</span>
    <span class="fn">print!</span>(<span class="str">"Loading"</span>);
    <span class="fn">print!</span>(<span class="str">"..."</span>);
    <span class="fn">println!</span>(); <span class="cm">// newline saja</span>

    <span class="cm">// eprintln! — print ke stderr (untuk error messages)</span>
    <span class="fn">eprintln!</span>(<span class="str">"Error: file tidak ditemukan!"</span>);

    <span class="cm">// format! — menghasilkan String, tidak print</span>
    <span class="kw">let</span> msg = <span class="fn">format!</span>(<span class="str">"Halo, {}!"</span>, <span class="str">"Rust"</span>);

    <span class="cm">// Format specifiers</span>
    <span class="fn">println!</span>(<span class="str">"{:&gt;10}"</span>, <span class="str">"right"</span>);      <span class="cm">// right-aligned, 10 chars</span>
    <span class="fn">println!</span>(<span class="str">"{:&lt;10}"</span>, <span class="str">"left"</span>);       <span class="cm">// left-aligned</span>
    <span class="fn">println!</span>(<span class="str">"{:^10}"</span>, <span class="str">"center"</span>);    <span class="cm">// center-aligned</span>
    <span class="fn">println!</span>(<span class="str">"{:0&gt;5}"</span>, <span class="num">42</span>);          <span class="cm">// 00042</span>
    <span class="fn">println!</span>(<span class="str">"{:.2}"</span>, <span class="num">3.14159</span>);     <span class="cm">// 3.14</span>
    <span class="fn">println!</span>(<span class="str">"{:#b}"</span>, <span class="num">42</span>);          <span class="cm">// 0b101010 (binary)</span>
    <span class="fn">println!</span>(<span class="str">"{:#x}"</span>, <span class="num">255</span>);         <span class="cm">// 0xff (hex)</span>
    <span class="fn">println!</span>(<span class="str">"{:#o}"</span>, <span class="num">8</span>);            <span class="cm">// 0o10 (octal)</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Debug dan Display Traits</h3>
    <div class="code-block"><span class="kw">use</span> std::fmt;

<span class="cm">// Derive Debug — untuk {:?} formatting (developer-facing)</span>
<span class="cm">// Ini adalah cara termudah, cukup tambahkan #[derive(Debug)]</span>
#[derive(Debug)]
<span class="kw">struct</span> <span class="type">Point</span> {
    x: <span class="type">f64</span>,
    y: <span class="type">f64</span>,
}

<span class="cm">// Implement Display — untuk {} formatting (user-facing)</span>
<span class="kw">impl</span> fmt::<span class="type">Display</span> <span class="kw">for</span> <span class="type">Point</span> {
    <span class="kw">fn</span> <span class="fn">fmt</span>(&amp;<span class="kw">self</span>, f: &amp;<span class="kw">mut</span> fmt::<span class="type">Formatter</span>) -&gt; fmt::<span class="type">Result</span> {
        <span class="fn">write!</span>(f, <span class="str">"({}, {})"</span>, <span class="kw">self</span>.x, <span class="kw">self</span>.y)
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> p = <span class="type">Point</span> { x: <span class="num">1.0</span>, y: <span class="num">2.5</span> };
    <span class="fn">println!</span>(<span class="str">"Debug:   {:?}"</span>, p);   <span class="cm">// Point { x: 1.0, y: 2.5 }</span>
    <span class="fn">println!</span>(<span class="str">"Pretty:  {:#?}"</span>, p);  <span class="cm">// multi-line formatted</span>
    <span class="fn">println!</span>(<span class="str">"Display: {}"</span>, p);    <span class="cm">// (1.0, 2.5)</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Log Crate & env_logger</h3>
    <div class="code-block"><span class="cm">// Cargo.toml:</span>
<span class="cm">// [dependencies]</span>
<span class="cm">// log = "0.4"</span>
<span class="cm">// env_logger = "0.11"</span>

<span class="kw">use</span> log::{error, warn, info, debug, trace};

<span class="kw">fn</span> <span class="fn">main</span>() {
    env_logger::<span class="fn">init</span>(); <span class="cm">// set RUST_LOG=debug untuk mengaktifkan</span>

    <span class="fn">error!</span>(<span class="str">"Ini error — selalu ditampilkan"</span>);
    <span class="fn">warn!</span>(<span class="str">"Ini warning"</span>);
    <span class="fn">info!</span>(<span class="str">"Info: server berjalan di port {}"</span>, <span class="num">8080</span>);
    <span class="fn">debug!</span>(<span class="str">"Debug: variabel x = {}"</span>, <span class="num">42</span>);
    <span class="fn">trace!</span>(<span class="str">"Trace: sangat detail"</span>);
}

<span class="cm">// Jalankan dengan: RUST_LOG=debug cargo run</span>
<span class="cm">// Level: error &gt; warn &gt; info &gt; debug &gt; trace</span></div>
</div>

<!-- ===================== 5. CONTROL FLOW ===================== -->
<h2 class="animate-in">5. Control Flow</h2>

<div class="card animate-in">
    <h3>if/else sebagai Expression</h3>
    <p>Di Rust, <code>if/else</code> adalah <strong>expression</strong>, bukan statement. Artinya ia mengembalikan nilai dan bisa digunakan di sisi kanan assignment. Ini mirip ternary operator di bahasa lain, tapi lebih powerful.</p>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> angka = <span class="num">7</span>;

    <span class="cm">// if/else biasa</span>
    <span class="kw">if</span> angka &lt; <span class="num">0</span> {
        <span class="fn">println!</span>(<span class="str">"Negatif"</span>);
    } <span class="kw">else if</span> angka == <span class="num">0</span> {
        <span class="fn">println!</span>(<span class="str">"Nol"</span>);
    } <span class="kw">else</span> {
        <span class="fn">println!</span>(<span class="str">"Positif"</span>);
    }

    <span class="cm">// if sebagai expression (mengembalikan nilai)</span>
    <span class="kw">let</span> status = <span class="kw">if</span> angka &gt; <span class="num">0</span> { <span class="str">"positif"</span> } <span class="kw">else</span> { <span class="str">"non-positif"</span> };
    <span class="fn">println!</span>(<span class="str">"Status: {}"</span>, status);
}</div>
</div>

<div class="card animate-in">
    <h3>Loop, While, For</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// loop — infinite loop, bisa return nilai dengan break</span>
    <span class="kw">let mut</span> counter = <span class="num">0</span>;
    <span class="kw">let</span> result = <span class="kw">loop</span> {
        counter += <span class="num">1</span>;
        <span class="kw">if</span> counter == <span class="num">10</span> {
            <span class="kw">break</span> counter * <span class="num">2</span>; <span class="cm">// return 20</span>
        }
    };
    <span class="fn">println!</span>(<span class="str">"Result: {}"</span>, result); <span class="cm">// 20</span>

    <span class="cm">// Loop labels — untuk nested loops</span>
    <span class="kw">'outer</span>: <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">5</span> {
        <span class="kw">for</span> j <span class="kw">in</span> <span class="num">0</span>..<span class="num">5</span> {
            <span class="kw">if</span> i + j == <span class="num">6</span> {
                <span class="fn">println!</span>(<span class="str">"Break at i={}, j={}"</span>, i, j);
                <span class="kw">break 'outer</span>;
            }
        }
    }

    <span class="cm">// while</span>
    <span class="kw">let mut</span> n = <span class="num">3</span>;
    <span class="kw">while</span> n &gt; <span class="num">0</span> {
        <span class="fn">println!</span>(<span class="str">"{}!"</span>, n);
        n -= <span class="num">1</span>;
    }

    <span class="cm">// for — paling idiomatis di Rust</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">5</span> {          <span class="cm">// 0, 1, 2, 3, 4</span>
        <span class="fn">print!</span>(<span class="str">"{} "</span>, i);
    }
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..=<span class="num">5</span> {         <span class="cm">// 0, 1, 2, 3, 4, 5 (inclusive)</span>
        <span class="fn">print!</span>(<span class="str">"{} "</span>, i);
    }

    <span class="cm">// Iterasi collection</span>
    <span class="kw">let</span> names = <span class="fn">vec!</span>[<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Charlie"</span>];
    <span class="kw">for</span> name <span class="kw">in</span> &amp;names {
        <span class="fn">println!</span>(<span class="str">"Halo, {}!"</span>, name);
    }
    <span class="kw">for</span> (i, name) <span class="kw">in</span> names.<span class="fn">iter</span>().<span class="fn">enumerate</span>() {
        <span class="fn">println!</span>(<span class="str">"{}. {}"</span>, i + <span class="num">1</span>, name);
    }
}</div>
</div>

<div class="card animate-in">
    <h3>match — Pattern Matching</h3>
    <p><code>match</code> adalah salah satu fitur terkuat Rust. Ia <strong>exhaustive</strong> — compiler memastikan semua kemungkinan di-handle. Ini menggantikan switch/case dan jauh lebih powerful.</p>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> x = <span class="num">3</span>;

    <span class="kw">match</span> x {
        <span class="num">1</span> =&gt; <span class="fn">println!</span>(<span class="str">"satu"</span>),
        <span class="num">2</span> | <span class="num">3</span> =&gt; <span class="fn">println!</span>(<span class="str">"dua atau tiga"</span>),
        <span class="num">4</span>..=<span class="num">10</span> =&gt; <span class="fn">println!</span>(<span class="str">"empat sampai sepuluh"</span>),
        _ =&gt; <span class="fn">println!</span>(<span class="str">"lainnya"</span>), <span class="cm">// wildcard (default)</span>
    }

    <span class="cm">// match sebagai expression</span>
    <span class="kw">let</span> label = <span class="kw">match</span> x {
        <span class="num">1</span> =&gt; <span class="str">"one"</span>,
        <span class="num">2</span> =&gt; <span class="str">"two"</span>,
        _ =&gt; <span class="str">"other"</span>,
    };

    <span class="cm">// Match dengan destructuring</span>
    <span class="kw">let</span> point = (<span class="num">0</span>, <span class="num">7</span>);
    <span class="kw">match</span> point {
        (<span class="num">0</span>, y) =&gt; <span class="fn">println!</span>(<span class="str">"di sumbu y, y={}"</span>, y),
        (x, <span class="num">0</span>) =&gt; <span class="fn">println!</span>(<span class="str">"di sumbu x, x={}"</span>, x),
        (x, y) =&gt; <span class="fn">println!</span>(<span class="str">"({}, {})"</span>, x, y),
    }

    <span class="cm">// Match dengan guard</span>
    <span class="kw">let</span> num = <span class="type">Some</span>(<span class="num">42</span>);
    <span class="kw">match</span> num {
        <span class="type">Some</span>(n) <span class="kw">if</span> n &gt; <span class="num">100</span> =&gt; <span class="fn">println!</span>(<span class="str">"besar"</span>),
        <span class="type">Some</span>(n) <span class="kw">if</span> n &gt; <span class="num">0</span> =&gt; <span class="fn">println!</span>(<span class="str">"positif: {}"</span>, n),
        <span class="type">Some</span>(_) =&gt; <span class="fn">println!</span>(<span class="str">"non-positif"</span>),
        <span class="type">None</span> =&gt; <span class="fn">println!</span>(<span class="str">"tidak ada"</span>),
    }
}</div>
</div>

<div class="card animate-in">
    <h3>if let & while let</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// if let — shorthand untuk match satu pola</span>
    <span class="kw">let</span> config_max: <span class="type">Option</span>&lt;<span class="type">u32</span>&gt; = <span class="type">Some</span>(<span class="num">100</span>);

    <span class="cm">// Tanpa if let (verbose):</span>
    <span class="kw">match</span> config_max {
        <span class="type">Some</span>(max) =&gt; <span class="fn">println!</span>(<span class="str">"Max: {}"</span>, max),
        _ =&gt; (),
    }

    <span class="cm">// Dengan if let (ringkas):</span>
    <span class="kw">if let</span> <span class="type">Some</span>(max) = config_max {
        <span class="fn">println!</span>(<span class="str">"Max: {}"</span>, max);
    }

    <span class="cm">// while let — loop selama pola cocok</span>
    <span class="kw">let mut</span> stack = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
    <span class="kw">while let</span> <span class="type">Some</span>(top) = stack.<span class="fn">pop</span>() {
        <span class="fn">println!</span>(<span class="str">"Popped: {}"</span>, top); <span class="cm">// 3, 2, 1</span>
    }
}</div>
</div>

<!-- ===================== 6. ERROR HANDLING ===================== -->
<h2 class="animate-in">6. Error Handling (Alternatif Try-Catch)</h2>

<div class="warn-box animate-in">
    <strong>Rust TIDAK memiliki exceptions!</strong> Tidak ada try-catch. Sebagai gantinya, Rust menggunakan tipe <code>Result&lt;T, E&gt;</code> dan <code>Option&lt;T&gt;</code> yang dipaksakan oleh type system. Ini membuat error handling menjadi <strong>eksplisit</strong> — kamu tidak bisa lupa menangani error karena compiler akan mengingatkanmu.
</div>

<div class="card animate-in">
    <h3>Result&lt;T, E&gt; dan Option&lt;T&gt;</h3>
    <div class="code-block"><span class="cm">// Option&lt;T&gt; — untuk nilai yang mungkin tidak ada</span>
<span class="kw">enum</span> <span class="type">Option</span>&lt;T&gt; {
    <span class="type">Some</span>(T),   <span class="cm">// ada nilai</span>
    <span class="type">None</span>,      <span class="cm">// tidak ada nilai (pengganti null)</span>
}

<span class="cm">// Result&lt;T, E&gt; — untuk operasi yang bisa gagal</span>
<span class="kw">enum</span> <span class="type">Result</span>&lt;T, E&gt; {
    <span class="type">Ok</span>(T),     <span class="cm">// berhasil dengan nilai T</span>
    <span class="type">Err</span>(E),    <span class="cm">// gagal dengan error E</span>
}

<span class="kw">fn</span> <span class="fn">bagi</span>(a: <span class="type">f64</span>, b: <span class="type">f64</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">f64</span>, <span class="type">String</span>&gt; {
    <span class="kw">if</span> b == <span class="num">0.0</span> {
        <span class="type">Err</span>(<span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Pembagian dengan nol!"</span>))
    } <span class="kw">else</span> {
        <span class="type">Ok</span>(a / b)
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">match</span> <span class="fn">bagi</span>(<span class="num">10.0</span>, <span class="num">3.0</span>) {
        <span class="type">Ok</span>(result) =&gt; <span class="fn">println!</span>(<span class="str">"Hasil: {:.2}"</span>, result),
        <span class="type">Err</span>(msg) =&gt; <span class="fn">println!</span>(<span class="str">"Error: {}"</span>, msg),
    }
}</div>
</div>

<div class="card animate-in">
    <h3>? Operator — Propagasi Error yang Elegan</h3>
    <div class="code-block"><span class="kw">use</span> std::fs;
<span class="kw">use</span> std::io;

<span class="cm">// ? operator: jika Ok, ambil nilainya. Jika Err, return Err langsung.</span>
<span class="cm">// Ini menggantikan banyak match/unwrap yang verbose</span>

<span class="kw">fn</span> <span class="fn">baca_file</span>(path: &amp;<span class="type">str</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">String</span>, io::<span class="type">Error</span>&gt; {
    <span class="kw">let</span> content = fs::<span class="fn">read_to_string</span>(path)?; <span class="cm">// ? = return Err jika gagal</span>
    <span class="type">Ok</span>(content)
}

<span class="cm">// Chaining ? operator</span>
<span class="kw">fn</span> <span class="fn">baca_angka_dari_file</span>(path: &amp;<span class="type">str</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">i32</span>, <span class="type">Box</span>&lt;<span class="kw">dyn</span> std::error::<span class="type">Error</span>&gt;&gt; {
    <span class="kw">let</span> content = fs::<span class="fn">read_to_string</span>(path)?;
    <span class="kw">let</span> number = content.<span class="fn">trim</span>().<span class="fn">parse</span>::&lt;<span class="type">i32</span>&gt;()?;
    <span class="type">Ok</span>(number)
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">match</span> <span class="fn">baca_angka_dari_file</span>(<span class="str">"angka.txt"</span>) {
        <span class="type">Ok</span>(n) =&gt; <span class="fn">println!</span>(<span class="str">"Angka: {}"</span>, n),
        <span class="type">Err</span>(e) =&gt; <span class="fn">eprintln!</span>(<span class="str">"Gagal: {}"</span>, e),
    }
}</div>
</div>

<div class="card animate-in">
    <h3>unwrap, expect, dan Kapan Menggunakannya</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// unwrap() — ambil nilai, PANIC jika None/Err</span>
    <span class="cm">// Hanya gunakan untuk prototyping atau saat 100% yakin aman</span>
    <span class="kw">let</span> x: <span class="type">Option</span>&lt;<span class="type">i32</span>&gt; = <span class="type">Some</span>(<span class="num">42</span>);
    <span class="kw">let</span> val = x.<span class="fn">unwrap</span>(); <span class="cm">// 42</span>

    <span class="cm">// expect() — seperti unwrap tapi dengan pesan custom</span>
    <span class="kw">let</span> port: <span class="type">u16</span> = std::env::<span class="fn">var</span>(<span class="str">"PORT"</span>)
        .<span class="fn">expect</span>(<span class="str">"PORT env var harus di-set"</span>)
        .<span class="fn">parse</span>()
        .<span class="fn">expect</span>(<span class="str">"PORT harus berupa angka"</span>);

    <span class="cm">// unwrap_or — nilai default jika None/Err</span>
    <span class="kw">let</span> y: <span class="type">Option</span>&lt;<span class="type">i32</span>&gt; = <span class="type">None</span>;
    <span class="kw">let</span> val = y.<span class="fn">unwrap_or</span>(<span class="num">0</span>); <span class="cm">// 0</span>

    <span class="cm">// unwrap_or_else — lazy default</span>
    <span class="kw">let</span> val = y.<span class="fn">unwrap_or_else</span>(|| <span class="fn">compute_default</span>());

    <span class="cm">// map — transformasi nilai di dalam Option/Result</span>
    <span class="kw">let</span> len = <span class="type">Some</span>(<span class="str">"hello"</span>).<span class="fn">map</span>(|s| s.<span class="fn">len</span>()); <span class="cm">// Some(5)</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Custom Error Types dengan thiserror dan anyhow</h3>
    <div class="code-block"><span class="cm">// ---- thiserror: untuk library code (custom error types) ----</span>
<span class="cm">// Cargo.toml: thiserror = "2"</span>

<span class="kw">use</span> thiserror::<span class="type">Error</span>;

#[derive(Error, Debug)]
<span class="kw">enum</span> <span class="type">AppError</span> {
    #[error(<span class="str">"Database error: {0}"</span>)]
    Database(#[from] sqlx::<span class="type">Error</span>),

    #[error(<span class="str">"Item tidak ditemukan: {id}"</span>)]
    NotFound { id: <span class="type">i64</span> },

    #[error(<span class="str">"Validasi gagal: {0}"</span>)]
    Validation(<span class="type">String</span>),
}

<span class="cm">// ---- anyhow: untuk application code (ergonomis) ----</span>
<span class="cm">// Cargo.toml: anyhow = "1"</span>

<span class="kw">use</span> anyhow::{Context, <span class="type">Result</span>};

<span class="kw">fn</span> <span class="fn">load_config</span>() -&gt; <span class="type">Result</span>&lt;<span class="type">Config</span>&gt; {
    <span class="kw">let</span> content = fs::<span class="fn">read_to_string</span>(<span class="str">"config.toml"</span>)
        .<span class="fn">context</span>(<span class="str">"Gagal membaca config.toml"</span>)?;
    <span class="kw">let</span> config: <span class="type">Config</span> = toml::<span class="fn">from_str</span>(&amp;content)
        .<span class="fn">context</span>(<span class="str">"Format config tidak valid"</span>)?;
    <span class="type">Ok</span>(config)
}</div>
</div>

<div class="info-box animate-in">
    <strong>Kapan Pakai Apa?</strong><br>
    <span class="badge-blue">thiserror</span> untuk <strong>library</strong> — ketika kamu ingin error type yang jelas dan terstruktur agar pengguna library bisa match error-nya.<br>
    <span class="badge-green">anyhow</span> untuk <strong>aplikasi</strong> — ketika kamu hanya ingin propagasi error dengan context yang baik tanpa mendefinisikan custom type untuk setiap kasus.
</div>

<!-- ===================== 7. FUNCTIONS & CLOSURES ===================== -->
<h2 class="animate-in">7. Functions & Closures</h2>

<div class="card animate-in">
    <h3>Function Declaration</h3>
    <div class="code-block"><span class="cm">// Fungsi dasar — tipe parameter dan return WAJIB ditulis</span>
<span class="kw">fn</span> <span class="fn">tambah</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    a + b  <span class="cm">// expression terakhir = return value (tanpa semicolon!)</span>
}

<span class="cm">// Fungsi tanpa return value (return ())</span>
<span class="kw">fn</span> <span class="fn">sapa</span>(nama: &amp;<span class="type">str</span>) {
    <span class="fn">println!</span>(<span class="str">"Halo, {}!"</span>, nama);
}

<span class="cm">// Early return dengan keyword return</span>
<span class="kw">fn</span> <span class="fn">abs</span>(x: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    <span class="kw">if</span> x &lt; <span class="num">0</span> {
        <span class="kw">return</span> -x;
    }
    x
}

<span class="cm">// Multiple return values dengan tuple</span>
<span class="kw">fn</span> <span class="fn">swap</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; (<span class="type">i32</span>, <span class="type">i32</span>) {
    (b, a)
}

<span class="cm">// Generic function</span>
<span class="kw">fn</span> <span class="fn">terbesar</span>&lt;T: <span class="type">PartialOrd</span>&gt;(a: T, b: T) -&gt; T {
    <span class="kw">if</span> a &gt; b { a } <span class="kw">else</span> { b }
}</div>
</div>

<div class="card animate-in">
    <h3>Closures (Fn, FnMut, FnOnce)</h3>
    <p>Closure adalah <strong>anonymous function</strong> yang bisa menangkap variabel dari lingkungan sekitarnya. Di Rust, closure secara otomatis mengimplementasikan satu atau lebih trait: <code>Fn</code>, <code>FnMut</code>, atau <code>FnOnce</code>.</p>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Closure dasar</span>
    <span class="kw">let</span> add = |a: <span class="type">i32</span>, b: <span class="type">i32</span>| -&gt; <span class="type">i32</span> { a + b };
    <span class="kw">let</span> add_short = |a, b| a + b; <span class="cm">// tipe di-infer</span>

    <span class="fn">println!</span>(<span class="str">"3 + 4 = {}"</span>, <span class="fn">add</span>(<span class="num">3</span>, <span class="num">4</span>));

    <span class="cm">// Closure menangkap variabel dari scope luar</span>
    <span class="kw">let</span> offset = <span class="num">10</span>;
    <span class="kw">let</span> add_offset = |x| x + offset; <span class="cm">// Fn — borrow &amp;offset</span>

    <span class="cm">// FnMut — mengubah variabel yang ditangkap</span>
    <span class="kw">let mut</span> count = <span class="num">0</span>;
    <span class="kw">let mut</span> increment = || {
        count += <span class="num">1</span>;  <span class="cm">// &amp;mut count</span>
        count
    };
    <span class="fn">println!</span>(<span class="str">"Count: {}"</span>, <span class="fn">increment</span>()); <span class="cm">// 1</span>
    <span class="fn">println!</span>(<span class="str">"Count: {}"</span>, <span class="fn">increment</span>()); <span class="cm">// 2</span>

    <span class="cm">// FnOnce — mengambil ownership (hanya bisa dipanggil sekali)</span>
    <span class="kw">let</span> name = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Rust"</span>);
    <span class="kw">let</span> consume = <span class="kw">move</span> || {
        <span class="fn">println!</span>(<span class="str">"Consumed: {}"</span>, name); <span class="cm">// takes ownership of name</span>
        <span class="fn">drop</span>(name);
    };
    <span class="fn">consume</span>();
    <span class="cm">// consume(); // ERROR: sudah di-consume</span>
    <span class="cm">// println!("{}", name); // ERROR: name sudah di-move</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Higher-Order Functions & Iterator Adapters</h3>
    <div class="code-block"><span class="cm">// Fungsi yang menerima closure sebagai parameter</span>
<span class="kw">fn</span> <span class="fn">apply_twice</span>&lt;F: <span class="type">Fn</span>(<span class="type">i32</span>) -&gt; <span class="type">i32</span>&gt;(f: F, x: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    <span class="fn">f</span>(<span class="fn">f</span>(x))
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> double = |x| x * <span class="num">2</span>;
    <span class="fn">println!</span>(<span class="str">"Apply twice: {}"</span>, <span class="fn">apply_twice</span>(double, <span class="num">5</span>)); <span class="cm">// 20</span>

    <span class="cm">// Iterator adapters — functional programming di Rust</span>
    <span class="kw">let</span> numbers = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>, <span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span>, <span class="num">10</span>];

    <span class="cm">// map — transformasi setiap elemen</span>
    <span class="kw">let</span> doubled: <span class="type">Vec</span>&lt;<span class="type">i32</span>&gt; = numbers.<span class="fn">iter</span>().<span class="fn">map</span>(|&amp;x| x * <span class="num">2</span>).<span class="fn">collect</span>();

    <span class="cm">// filter — pilih elemen yang memenuhi kondisi</span>
    <span class="kw">let</span> evens: <span class="type">Vec</span>&lt;&amp;<span class="type">i32</span>&gt; = numbers.<span class="fn">iter</span>().<span class="fn">filter</span>(|&amp;&amp;x| x % <span class="num">2</span> == <span class="num">0</span>).<span class="fn">collect</span>();

    <span class="cm">// fold — akumulasi (seperti reduce)</span>
    <span class="kw">let</span> sum = numbers.<span class="fn">iter</span>().<span class="fn">fold</span>(<span class="num">0</span>, |acc, &amp;x| acc + x);

    <span class="cm">// Chaining — ini adalah Rust idiomatis!</span>
    <span class="kw">let</span> result: <span class="type">i32</span> = (<span class="num">1</span>..=<span class="num">100</span>)
        .<span class="fn">filter</span>(|x| x % <span class="num">3</span> == <span class="num">0</span> || x % <span class="num">5</span> == <span class="num">0</span>)
        .<span class="fn">sum</span>();
    <span class="fn">println!</span>(<span class="str">"FizzBuzz sum: {}"</span>, result);

    <span class="cm">// any, all, find, position, take, skip, zip, enumerate...</span>
    <span class="kw">let</span> has_negative = numbers.<span class="fn">iter</span>().<span class="fn">any</span>(|&amp;x| x &lt; <span class="num">0</span>);
    <span class="kw">let</span> all_positive = numbers.<span class="fn">iter</span>().<span class="fn">all</span>(|&amp;x| x &gt; <span class="num">0</span>);
    <span class="kw">let</span> first_even = numbers.<span class="fn">iter</span>().<span class="fn">find</span>(|&amp;&amp;x| x % <span class="num">2</span> == <span class="num">0</span>);
}</div>
</div>

<!-- ===================== 8. OWNERSHIP & BORROWING ===================== -->
<h2 class="animate-in">8. Ownership & Borrowing</h2>

<div class="success-box animate-in">
    <strong>Ini adalah konsep TERPENTING di Rust!</strong> Ownership system adalah fitur yang membuat Rust unik. Memahami ini adalah kunci untuk menjadi produktif di Rust. Ownership memungkinkan Rust menjamin memory safety tanpa garbage collector.
</div>

<div class="card animate-in">
    <h3>3 Aturan Ownership</h3>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Setiap nilai memiliki tepat satu owner.</strong> Variabel yang menyimpan nilai tersebut adalah owner-nya.</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>Hanya boleh ada satu owner pada satu waktu.</strong> Ketika ownership dipindahkan (move), pemilik lama tidak bisa mengakses nilainya lagi.</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Ketika owner keluar dari scope, nilainya di-drop (dealokasi).</strong> Ini seperti destructor otomatis — tidak perlu free() manual.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Move Semantics</h3>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Tipe sederhana (i32, f64, bool, char) di-COPY, bukan move</span>
    <span class="kw">let</span> a = <span class="num">5</span>;
    <span class="kw">let</span> b = a;  <span class="cm">// a di-copy, keduanya valid</span>
    <span class="fn">println!</span>(<span class="str">"a={}, b={}"</span>, a, b); <span class="cm">// OK!</span>

    <span class="cm">// Tipe heap (String, Vec, dll) di-MOVE</span>
    <span class="kw">let</span> s1 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="kw">let</span> s2 = s1;  <span class="cm">// s1 di-MOVE ke s2</span>
    <span class="cm">// println!("{}", s1); // ERROR: value used after move</span>
    <span class="fn">println!</span>(<span class="str">"{}"</span>, s2); <span class="cm">// OK, s2 adalah owner baru</span>

    <span class="cm">// Clone — deep copy eksplisit</span>
    <span class="kw">let</span> s3 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"world"</span>);
    <span class="kw">let</span> s4 = s3.<span class="fn">clone</span>(); <span class="cm">// deep copy, keduanya valid</span>
    <span class="fn">println!</span>(<span class="str">"s3={}, s4={}"</span>, s3, s4); <span class="cm">// OK!</span>

    <span class="cm">// Move saat passing ke function</span>
    <span class="kw">let</span> s5 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"move me"</span>);
    <span class="fn">takes_ownership</span>(s5);
    <span class="cm">// println!("{}", s5); // ERROR: s5 sudah di-move</span>
}

<span class="kw">fn</span> <span class="fn">takes_ownership</span>(s: <span class="type">String</span>) {
    <span class="fn">println!</span>(<span class="str">"Got: {}"</span>, s);
} <span class="cm">// s di-drop di sini, memori dibebaskan</span></div>
</div>

<div class="card animate-in">
    <h3>Borrowing — References</h3>
    <p>Daripada memindahkan ownership, kamu bisa <strong>meminjam (borrow)</strong> nilai melalui references. Ada dua jenis:</p>
    <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> s = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);

    <span class="cm">// Shared reference (&amp;T) — baca saja, boleh banyak sekaligus</span>
    <span class="kw">let</span> len = <span class="fn">hitung_panjang</span>(&amp;s); <span class="cm">// pinjam, tidak ambil ownership</span>
    <span class="fn">println!</span>(<span class="str">"'{}' panjangnya {}"</span>, s, len); <span class="cm">// s masih valid!</span>

    <span class="cm">// Mutable reference (&amp;mut T) — bisa modifikasi, HANYA SATU</span>
    <span class="kw">let mut</span> s2 = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hello"</span>);
    <span class="fn">tambah_world</span>(&amp;<span class="kw">mut</span> s2);
    <span class="fn">println!</span>(<span class="str">"{}"</span>, s2); <span class="cm">// "hello world"</span>
}

<span class="kw">fn</span> <span class="fn">hitung_panjang</span>(s: &amp;<span class="type">String</span>) -&gt; <span class="type">usize</span> {
    s.<span class="fn">len</span>()
    <span class="cm">// s hanya dipinjam, tidak di-drop saat fungsi selesai</span>
}

<span class="kw">fn</span> <span class="fn">tambah_world</span>(s: &amp;<span class="kw">mut</span> <span class="type">String</span>) {
    s.<span class="fn">push_str</span>(<span class="str">" world"</span>);
}

<span class="cm">// ATURAN BORROWING:</span>
<span class="cm">// 1. Boleh punya BANYAK shared references (&amp;T) ATAU</span>
<span class="cm">// 2. Boleh punya SATU mutable reference (&amp;mut T)</span>
<span class="cm">// TIDAK boleh keduanya bersamaan!</span></div>
</div>

<div class="card animate-in">
    <h3>Visual: Ownership & Memory</h3>
    <div class="anim-container">
        <canvas id="rust-ownership-canvas" width="700" height="400"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="rust-own-move">Move</button>
            <button class="anim-btn" id="rust-own-borrow">Borrow</button>
            <button class="anim-btn" id="rust-own-mutborrow">Mut Borrow</button>
            <button class="anim-btn secondary" id="rust-own-reset">Reset</button>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Lifetimes ('a)</h3>
    <p>Lifetime adalah cara Rust memastikan references tidak outlive data yang dirujuknya. Kebanyakan waktu, compiler bisa infer lifetime secara otomatis (lifetime elision). Tapi kadang kamu harus menulisnya secara eksplisit.</p>
    <div class="code-block"><span class="cm">// Tanpa lifetime annotation — compiler error!</span>
<span class="cm">// fn longest(x: &amp;str, y: &amp;str) -&gt; &amp;str { ... }</span>

<span class="cm">// Dengan lifetime annotation</span>
<span class="cm">// 'a berarti: reference yang di-return hidup selama</span>
<span class="cm">// waktu terpendek antara x dan y</span>
<span class="kw">fn</span> <span class="fn">longest</span>&lt;<span class="kw">'a</span>&gt;(x: &amp;<span class="kw">'a</span> <span class="type">str</span>, y: &amp;<span class="kw">'a</span> <span class="type">str</span>) -&gt; &amp;<span class="kw">'a</span> <span class="type">str</span> {
    <span class="kw">if</span> x.<span class="fn">len</span>() &gt; y.<span class="fn">len</span>() { x } <span class="kw">else</span> { y }
}

<span class="cm">// Lifetime di struct — struct tidak boleh outlive reference-nya</span>
<span class="kw">struct</span> <span class="type">Excerpt</span>&lt;<span class="kw">'a</span>&gt; {
    part: &amp;<span class="kw">'a</span> <span class="type">str</span>,
}

<span class="cm">// 'static lifetime — hidup sepanjang program</span>
<span class="kw">let</span> s: &amp;<span class="kw">'static</span> <span class="type">str</span> = <span class="str">"Saya hidup selamanya"</span>;</div>
</div>

<div class="card animate-in">
    <h3>Stack vs Heap — Visual</h3>
    <div class="mem-layout">
        <h4>Contoh: let s = String::from("hello")</h4>
        <div class="mem-row">
            <div class="mem-addr">STACK</div>
            <div class="mem-cell stack">s.ptr &rarr;</div>
            <div class="mem-cell stack">s.len = 5</div>
            <div class="mem-cell stack">s.cap = 5</div>
        </div>
        <div class="mem-row">
            <div class="mem-addr">HEAP</div>
            <div class="mem-cell heap">h</div>
            <div class="mem-cell heap">e</div>
            <div class="mem-cell heap">l</div>
            <div class="mem-cell heap">l</div>
            <div class="mem-cell heap">o</div>
        </div>
    </div>
    <div class="info-box" style="margin-top:12px;">
        <strong>Stack</strong> menyimpan metadata (pointer, length, capacity) — ukuran tetap, cepat.<br>
        <strong>Heap</strong> menyimpan data aktual — ukuran dinamis, lebih lambat.<br>
        Ketika <code>s</code> keluar dari scope, Rust memanggil <code>drop()</code> yang membebaskan memori heap.
    </div>
</div>

<!-- ===================== 9. STRUCT, ENUM, TRAIT ===================== -->
<h2 class="animate-in">9. Struct, Enum, Trait</h2>

<div class="card animate-in">
    <h3>Struct & impl Blocks</h3>
    <div class="code-block"><span class="cm">// Struct — custom data type (seperti class tanpa inheritance)</span>
#[derive(Debug, Clone)]
<span class="kw">struct</span> <span class="type">User</span> {
    name: <span class="type">String</span>,
    email: <span class="type">String</span>,
    age: <span class="type">u32</span>,
    active: <span class="type">bool</span>,
}

<span class="cm">// impl block — methods dan associated functions</span>
<span class="kw">impl</span> <span class="type">User</span> {
    <span class="cm">// Associated function (constructor) — dipanggil dengan ::</span>
    <span class="kw">fn</span> <span class="fn">new</span>(name: <span class="type">String</span>, email: <span class="type">String</span>, age: <span class="type">u32</span>) -&gt; <span class="kw">Self</span> {
        <span class="type">User</span> { name, email, age, active: <span class="kw">true</span> }
    }

    <span class="cm">// Method — pertama parameter adalah &amp;self, &amp;mut self, atau self</span>
    <span class="kw">fn</span> <span class="fn">greet</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> {
        <span class="fn">format!</span>(<span class="str">"Halo, saya {} ({})"</span>, <span class="kw">self</span>.name, <span class="kw">self</span>.age)
    }

    <span class="kw">fn</span> <span class="fn">deactivate</span>(&amp;<span class="kw">mut</span> <span class="kw">self</span>) {
        <span class="kw">self</span>.active = <span class="kw">false</span>;
    }
}

<span class="cm">// Tuple struct</span>
<span class="kw">struct</span> <span class="type">Color</span>(<span class="type">u8</span>, <span class="type">u8</span>, <span class="type">u8</span>);
<span class="kw">struct</span> <span class="type">Meters</span>(<span class="type">f64</span>); <span class="cm">// Newtype pattern</span>

<span class="cm">// Unit struct (untuk marker types)</span>
<span class="kw">struct</span> <span class="type">Marker</span>;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let mut</span> user = <span class="type">User</span>::<span class="fn">new</span>(
        <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Budi"</span>),
        <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"budi@email.com"</span>),
        <span class="num">25</span>,
    );
    <span class="fn">println!</span>(<span class="str">"{}"</span>, user.<span class="fn">greet</span>());
    user.<span class="fn">deactivate</span>();

    <span class="cm">// Struct update syntax</span>
    <span class="kw">let</span> user2 = <span class="type">User</span> {
        name: <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"Ani"</span>),
        ..user.<span class="fn">clone</span>()
    };
}</div>
</div>

<div class="card animate-in">
    <h3>Enum dengan Data (Algebraic Data Types)</h3>
    <div class="code-block"><span class="cm">// Enum di Rust JAUH lebih powerful daripada enum di bahasa lain</span>
<span class="cm">// Setiap variant bisa menyimpan data berbeda!</span>

#[derive(Debug)]
<span class="kw">enum</span> <span class="type">Shape</span> {
    Circle { radius: <span class="type">f64</span> },
    Rectangle { width: <span class="type">f64</span>, height: <span class="type">f64</span> },
    Triangle(<span class="type">f64</span>, <span class="type">f64</span>, <span class="type">f64</span>), <span class="cm">// tuple variant</span>
    Point,                        <span class="cm">// unit variant</span>
}

<span class="kw">impl</span> <span class="type">Shape</span> {
    <span class="kw">fn</span> <span class="fn">area</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span> {
        <span class="kw">match</span> <span class="kw">self</span> {
            <span class="type">Shape</span>::Circle { radius } =&gt;
                std::f64::consts::PI * radius * radius,
            <span class="type">Shape</span>::Rectangle { width, height } =&gt;
                width * height,
            <span class="type">Shape</span>::Triangle(a, b, c) =&gt; {
                <span class="kw">let</span> s = (a + b + c) / <span class="num">2.0</span>;
                (s * (s - a) * (s - b) * (s - c)).<span class="fn">sqrt</span>()
            },
            <span class="type">Shape</span>::Point =&gt; <span class="num">0.0</span>,
        }
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> shapes = <span class="fn">vec!</span>[
        <span class="type">Shape</span>::Circle { radius: <span class="num">5.0</span> },
        <span class="type">Shape</span>::Rectangle { width: <span class="num">4.0</span>, height: <span class="num">6.0</span> },
    ];
    <span class="kw">for</span> s <span class="kw">in</span> &amp;shapes {
        <span class="fn">println!</span>(<span class="str">"{:?} area = {:.2}"</span>, s, s.<span class="fn">area</span>());
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Traits — Interface di Rust</h3>
    <div class="code-block"><span class="cm">// Trait mendefinisikan shared behavior (mirip interface)</span>
<span class="kw">trait</span> <span class="type">Summary</span> {
    <span class="kw">fn</span> <span class="fn">summarize</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span>;

    <span class="cm">// Default implementation</span>
    <span class="kw">fn</span> <span class="fn">preview</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> {
        <span class="fn">format!</span>(<span class="str">"{}..."</span>, &amp;<span class="kw">self</span>.<span class="fn">summarize</span>()[..<span class="num">50</span>.min(<span class="kw">self</span>.<span class="fn">summarize</span>().<span class="fn">len</span>())])
    }
}

<span class="kw">struct</span> <span class="type">Article</span> { title: <span class="type">String</span>, content: <span class="type">String</span> }

<span class="kw">impl</span> <span class="type">Summary</span> <span class="kw">for</span> <span class="type">Article</span> {
    <span class="kw">fn</span> <span class="fn">summarize</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">String</span> {
        <span class="fn">format!</span>(<span class="str">"{}: {}"</span>, <span class="kw">self</span>.title, &amp;<span class="kw">self</span>.content[..<span class="num">100</span>.min(<span class="kw">self</span>.content.<span class="fn">len</span>())])
    }
}

<span class="cm">// Trait bounds — generic function yang membutuhkan trait tertentu</span>
<span class="kw">fn</span> <span class="fn">notify</span>(item: &amp;<span class="kw">impl</span> <span class="type">Summary</span>) {
    <span class="fn">println!</span>(<span class="str">"Breaking: {}"</span>, item.<span class="fn">summarize</span>());
}

<span class="cm">// Syntax alternatif (lebih eksplisit)</span>
<span class="kw">fn</span> <span class="fn">notify2</span>&lt;T: <span class="type">Summary</span>&gt;(item: &amp;T) {
    <span class="fn">println!</span>(<span class="str">"Breaking: {}"</span>, item.<span class="fn">summarize</span>());
}

<span class="cm">// Multiple trait bounds</span>
<span class="kw">fn</span> <span class="fn">display_and_summarize</span>&lt;T: <span class="type">Summary</span> + std::fmt::<span class="type">Display</span>&gt;(item: &amp;T) { }

<span class="cm">// where clause (lebih bersih untuk bound yang kompleks)</span>
<span class="kw">fn</span> <span class="fn">complex</span>&lt;T, U&gt;(t: &amp;T, u: &amp;U) -&gt; <span class="type">String</span>
<span class="kw">where</span>
    T: <span class="type">Summary</span> + <span class="type">Clone</span>,
    U: <span class="type">Summary</span> + std::fmt::<span class="type">Debug</span>,
{
    <span class="fn">format!</span>(<span class="str">"{} | {:?}"</span>, t.<span class="fn">summarize</span>(), u)
}

<span class="cm">// Dynamic dispatch dengan dyn Trait (trait object)</span>
<span class="kw">fn</span> <span class="fn">print_summary</span>(item: &amp;<span class="kw">dyn</span> <span class="type">Summary</span>) {
    <span class="fn">println!</span>(<span class="str">"{}"</span>, item.<span class="fn">summarize</span>());
}</div>
</div>

<div class="card animate-in">
    <h3>Derive Macros</h3>
    <div class="code-block"><span class="cm">// Derive macros menghasilkan implementasi trait secara otomatis</span>
#[derive(
    Debug,       <span class="cm">// {:?} formatting</span>
    Clone,       <span class="cm">// .clone() deep copy</span>
    Copy,        <span class="cm">// implicit copy (hanya untuk tipe kecil)</span>
    PartialEq,   <span class="cm">// == dan !=</span>
    Eq,          <span class="cm">// full equality</span>
    PartialOrd,  <span class="cm">// &lt;, &gt;, &lt;=, &gt;=</span>
    Ord,         <span class="cm">// total ordering</span>
    Hash,        <span class="cm">// bisa digunakan sebagai HashMap key</span>
    Default,     <span class="cm">// Default::default() menghasilkan nilai default</span>
)]
<span class="kw">struct</span> <span class="type">Point</span> {
    x: <span class="type">i32</span>,
    y: <span class="type">i32</span>,
}

<span class="cm">// Serde derives (serialization/deserialization)</span>
<span class="cm">// Cargo.toml: serde = { version = "1", features = ["derive"] }</span>
<span class="kw">use</span> serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
<span class="kw">struct</span> <span class="type">Config</span> {
    host: <span class="type">String</span>,
    port: <span class="type">u16</span>,
    debug: <span class="type">bool</span>,
}</div>
</div>

<!-- ===================== 10. OOP IN RUST ===================== -->
<h2 class="animate-in">10. OOP di Rust</h2>

<div class="warn-box animate-in">
    <strong>Rust BUKAN bahasa OOP tradisional!</strong> Tidak ada class, tidak ada inheritance. Tapi Rust mendukung prinsip-prinsip OOP melalui mekanisme yang berbeda dan seringkali lebih baik.
</div>

<div class="card animate-in">
    <h3>Encapsulation dengan pub</h3>
    <div class="code-block"><span class="cm">// Modul dan visibility</span>
<span class="kw">mod</span> bank {
    <span class="kw">pub struct</span> <span class="type">Account</span> {
        owner: <span class="type">String</span>,       <span class="cm">// private — tidak bisa diakses dari luar</span>
        balance: <span class="type">f64</span>,       <span class="cm">// private</span>
    }

    <span class="kw">impl</span> <span class="type">Account</span> {
        <span class="kw">pub fn</span> <span class="fn">new</span>(owner: <span class="type">String</span>, initial: <span class="type">f64</span>) -&gt; <span class="kw">Self</span> {
            <span class="type">Account</span> { owner, balance: initial }
        }

        <span class="kw">pub fn</span> <span class="fn">deposit</span>(&amp;<span class="kw">mut</span> <span class="kw">self</span>, amount: <span class="type">f64</span>) {
            <span class="kw">if</span> amount &gt; <span class="num">0.0</span> {
                <span class="kw">self</span>.balance += amount;
            }
        }

        <span class="kw">pub fn</span> <span class="fn">balance</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span> {
            <span class="kw">self</span>.balance <span class="cm">// getter — readonly access</span>
        }

        <span class="cm">// Private helper method</span>
        <span class="kw">fn</span> <span class="fn">validate_amount</span>(&amp;<span class="kw">self</span>, amount: <span class="type">f64</span>) -&gt; <span class="type">bool</span> {
            amount &gt; <span class="num">0.0</span> &amp;&amp; amount &lt;= <span class="kw">self</span>.balance
        }
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Polymorphism via Traits (bukan Inheritance)</h3>
    <div class="code-block"><span class="kw">trait</span> <span class="type">Drawable</span> {
    <span class="kw">fn</span> <span class="fn">draw</span>(&amp;<span class="kw">self</span>);
    <span class="kw">fn</span> <span class="fn">area</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span>;
}

<span class="kw">struct</span> <span class="type">Circle</span> { radius: <span class="type">f64</span> }
<span class="kw">struct</span> <span class="type">Rect</span> { w: <span class="type">f64</span>, h: <span class="type">f64</span> }

<span class="kw">impl</span> <span class="type">Drawable</span> <span class="kw">for</span> <span class="type">Circle</span> {
    <span class="kw">fn</span> <span class="fn">draw</span>(&amp;<span class="kw">self</span>) { <span class="fn">println!</span>(<span class="str">"Drawing circle r={}"</span>, <span class="kw">self</span>.radius); }
    <span class="kw">fn</span> <span class="fn">area</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span> { std::f64::consts::PI * <span class="kw">self</span>.radius.<span class="fn">powi</span>(<span class="num">2</span>) }
}

<span class="kw">impl</span> <span class="type">Drawable</span> <span class="kw">for</span> <span class="type">Rect</span> {
    <span class="kw">fn</span> <span class="fn">draw</span>(&amp;<span class="kw">self</span>) { <span class="fn">println!</span>(<span class="str">"Drawing rect {}x{}"</span>, <span class="kw">self</span>.w, <span class="kw">self</span>.h); }
    <span class="kw">fn</span> <span class="fn">area</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span> { <span class="kw">self</span>.w * <span class="kw">self</span>.h }
}

<span class="cm">// Polymorphism — trait objects memungkinkan dynamic dispatch</span>
<span class="kw">fn</span> <span class="fn">draw_all</span>(shapes: &amp;[&amp;<span class="kw">dyn</span> <span class="type">Drawable</span>]) {
    <span class="kw">for</span> shape <span class="kw">in</span> shapes {
        shape.<span class="fn">draw</span>();
        <span class="fn">println!</span>(<span class="str">"  Area: {:.2}"</span>, shape.<span class="fn">area</span>());
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> c = <span class="type">Circle</span> { radius: <span class="num">5.0</span> };
    <span class="kw">let</span> r = <span class="type">Rect</span> { w: <span class="num">4.0</span>, h: <span class="num">6.0</span> };
    <span class="fn">draw_all</span>(&amp;[&amp;c, &amp;r]);
}</div>
</div>

<div class="card animate-in">
    <h3>Composition over Inheritance</h3>
    <div class="code-block"><span class="cm">// BUKAN inheritance — Rust tidak mendukung inheritance</span>
<span class="cm">// GUNAKAN composition (embed struct di dalam struct)</span>

<span class="kw">struct</span> <span class="type">Engine</span> {
    horsepower: <span class="type">u32</span>,
    fuel_type: <span class="type">String</span>,
}

<span class="kw">impl</span> <span class="type">Engine</span> {
    <span class="kw">fn</span> <span class="fn">start</span>(&amp;<span class="kw">self</span>) { <span class="fn">println!</span>(<span class="str">"Engine {}HP started!"</span>, <span class="kw">self</span>.horsepower); }
}

<span class="kw">struct</span> <span class="type">Car</span> {
    model: <span class="type">String</span>,
    engine: <span class="type">Engine</span>,     <span class="cm">// composition, bukan inheritance</span>
}

<span class="kw">impl</span> <span class="type">Car</span> {
    <span class="kw">fn</span> <span class="fn">drive</span>(&amp;<span class="kw">self</span>) {
        <span class="kw">self</span>.engine.<span class="fn">start</span>(); <span class="cm">// delegasi ke komponen</span>
        <span class="fn">println!</span>(<span class="str">"{} is driving!"</span>, <span class="kw">self</span>.model);
    }
}</div>
</div>

<div class="card animate-in">
    <h3>SOLID Principles di Rust</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Prinsip</th><th>OOP Tradisional</th><th>Pendekatan Rust</th></tr>
            <tr><td><strong>S</strong> — Single Responsibility</td><td>Satu class = satu tanggung jawab</td><td>Satu struct/module = satu tanggung jawab. Module system Rust sangat mendukung ini.</td></tr>
            <tr><td><strong>O</strong> — Open/Closed</td><td>Terbuka untuk ekstensi, tertutup untuk modifikasi</td><td>Trait bisa diimplementasikan untuk tipe yang sudah ada tanpa mengubahnya (extension traits).</td></tr>
            <tr><td><strong>L</strong> — Liskov Substitution</td><td>Subclass harus bisa menggantikan parent</td><td>Trait objects (<code>dyn Trait</code>) menjamin kontrak behavior diikuti.</td></tr>
            <tr><td><strong>I</strong> — Interface Segregation</td><td>Interface kecil lebih baik</td><td>Trait Rust secara alami kecil. Supertrait untuk komposisi: <code>trait A: B + C</code>.</td></tr>
            <tr><td><strong>D</strong> — Dependency Inversion</td><td>Depend on abstractions</td><td>Gunakan trait sebagai parameter: <code>fn process(repo: &dyn Repository)</code>.</td></tr>
        </table>
    </div>
</div>

<!-- ===================== 11. CONCURRENCY ===================== -->
<h2 class="animate-in">11. Concurrency</h2>

<div class="info-box animate-in">
    <strong>Fearless Concurrency!</strong> Rust menjamin di compile time bahwa tidak ada data race. Jika kodenya compile, maka tidak ada data race. Ini dimungkinkan oleh trait <code>Send</code> (bisa dipindah antar thread) dan <code>Sync</code> (bisa diakses dari multiple thread).
</div>

<div class="card animate-in">
    <h3>std::thread::spawn</h3>
    <div class="code-block"><span class="kw">use</span> std::thread;
<span class="kw">use</span> std::time::<span class="type">Duration</span>;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Spawn thread baru</span>
    <span class="kw">let</span> handle = thread::<span class="fn">spawn</span>(|| {
        <span class="kw">for</span> i <span class="kw">in</span> <span class="num">1</span>..=<span class="num">5</span> {
            <span class="fn">println!</span>(<span class="str">"Thread anak: {}"</span>, i);
            thread::<span class="fn">sleep</span>(<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">100</span>));
        }
        <span class="num">42</span> <span class="cm">// return value</span>
    });

    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">1</span>..=<span class="num">3</span> {
        <span class="fn">println!</span>(<span class="str">"Thread utama: {}"</span>, i);
        thread::<span class="fn">sleep</span>(<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">100</span>));
    }

    <span class="cm">// join() menunggu thread selesai dan mengambil return value</span>
    <span class="kw">let</span> result = handle.<span class="fn">join</span>().<span class="fn">unwrap</span>();
    <span class="fn">println!</span>(<span class="str">"Thread selesai dengan: {}"</span>, result);

    <span class="cm">// move closure — pindahkan ownership ke thread</span>
    <span class="kw">let</span> data = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
    <span class="kw">let</span> handle = thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
        <span class="fn">println!</span>(<span class="str">"Data di thread: {:?}"</span>, data);
    });
    handle.<span class="fn">join</span>().<span class="fn">unwrap</span>();
    <span class="cm">// println!("{:?}", data); // ERROR: data sudah di-move</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Shared State: Arc&lt;Mutex&lt;T&gt;&gt;</h3>
    <div class="code-block"><span class="kw">use</span> std::sync::{Arc, Mutex, RwLock};
<span class="kw">use</span> std::thread;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Arc = Atomic Reference Counted (shared ownership antar thread)</span>
    <span class="cm">// Mutex = Mutual Exclusion (hanya satu thread bisa akses)</span>
    <span class="kw">let</span> counter = <span class="type">Arc</span>::<span class="fn">new</span>(<span class="type">Mutex</span>::<span class="fn">new</span>(<span class="num">0</span>));
    <span class="kw">let mut</span> handles = <span class="fn">vec!</span>[];

    <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">0</span>..<span class="num">10</span> {
        <span class="kw">let</span> counter = <span class="type">Arc</span>::<span class="fn">clone</span>(&amp;counter);
        <span class="kw">let</span> handle = thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            <span class="kw">let mut</span> num = counter.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
            *num += <span class="num">1</span>;
            <span class="cm">// lock otomatis dilepas saat num keluar scope</span>
        });
        handles.<span class="fn">push</span>(handle);
    }

    <span class="kw">for</span> h <span class="kw">in</span> handles { h.<span class="fn">join</span>().<span class="fn">unwrap</span>(); }
    <span class="fn">println!</span>(<span class="str">"Counter: {}"</span>, *counter.<span class="fn">lock</span>().<span class="fn">unwrap</span>()); <span class="cm">// 10</span>

    <span class="cm">// RwLock — multiple readers OR satu writer</span>
    <span class="kw">let</span> data = <span class="type">Arc</span>::<span class="fn">new</span>(<span class="type">RwLock</span>::<span class="fn">new</span>(<span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]));

    <span class="cm">// Reader — banyak thread bisa baca bersamaan</span>
    <span class="kw">let</span> reader = data.<span class="fn">read</span>().<span class="fn">unwrap</span>();
    <span class="fn">println!</span>(<span class="str">"Data: {:?}"</span>, *reader);
    <span class="fn">drop</span>(reader); <span class="cm">// lepas read lock</span>

    <span class="cm">// Writer — hanya satu thread bisa tulis</span>
    <span class="kw">let mut</span> writer = data.<span class="fn">write</span>().<span class="fn">unwrap</span>();
    writer.<span class="fn">push</span>(<span class="num">4</span>);
}</div>
</div>

<div class="card animate-in">
    <h3>Message Passing: Channels (mpsc)</h3>
    <div class="code-block"><span class="kw">use</span> std::sync::mpsc; <span class="cm">// multi-producer, single-consumer</span>
<span class="kw">use</span> std::thread;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> (tx, rx) = mpsc::<span class="fn">channel</span>();

    <span class="cm">// Banyak producer (clone tx)</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">3</span> {
        <span class="kw">let</span> tx = tx.<span class="fn">clone</span>();
        thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            tx.<span class="fn">send</span>(<span class="fn">format!</span>(<span class="str">"Pesan dari thread {}"</span>, i)).<span class="fn">unwrap</span>();
        });
    }
    <span class="fn">drop</span>(tx); <span class="cm">// drop original tx agar rx tahu kapan selesai</span>

    <span class="cm">// Consumer — terima semua pesan</span>
    <span class="kw">for</span> msg <span class="kw">in</span> rx {
        <span class="fn">println!</span>(<span class="str">"Diterima: {}"</span>, msg);
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Rayon — Data Parallelism</h3>
    <div class="code-block"><span class="cm">// Cargo.toml: rayon = "1.10"</span>
<span class="kw">use</span> rayon::prelude::*;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> data: <span class="type">Vec</span>&lt;<span class="type">i64</span>&gt; = (<span class="num">0</span>..<span class="num">1_000_000</span>).<span class="fn">collect</span>();

    <span class="cm">// Parallel iterator — otomatis dibagi ke semua CPU core</span>
    <span class="kw">let</span> sum: <span class="type">i64</span> = data.<span class="fn">par_iter</span>().<span class="fn">sum</span>();

    <span class="cm">// Parallel map + filter</span>
    <span class="kw">let</span> result: <span class="type">Vec</span>&lt;<span class="type">i64</span>&gt; = data
        .<span class="fn">par_iter</span>()
        .<span class="fn">filter</span>(|&amp;&amp;x| x % <span class="num">2</span> == <span class="num">0</span>)
        .<span class="fn">map</span>(|&amp;x| x * x)
        .<span class="fn">collect</span>();

    <span class="fn">println!</span>(<span class="str">"Sum: {}, Even squares: {}"</span>, sum, result.<span class="fn">len</span>());
}</div>
</div>

<div class="card animate-in">
    <h3>async/await dengan Tokio</h3>
    <div class="code-block"><span class="cm">// Cargo.toml: tokio = { version = "1", features = ["full"] }</span>

<span class="kw">use</span> tokio::time::{sleep, <span class="type">Duration</span>};

<span class="kw">async fn</span> <span class="fn">fetch_data</span>(id: <span class="type">u32</span>) -&gt; <span class="type">String</span> {
    <span class="fn">sleep</span>(<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">100</span>)).<span class="kw">await</span>;
    <span class="fn">format!</span>(<span class="str">"Data-{}"</span>, id)
}

#[tokio::main]
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="cm">// Sequential</span>
    <span class="kw">let</span> a = <span class="fn">fetch_data</span>(<span class="num">1</span>).<span class="kw">await</span>;
    <span class="kw">let</span> b = <span class="fn">fetch_data</span>(<span class="num">2</span>).<span class="kw">await</span>;

    <span class="cm">// Concurrent! — jalankan bersamaan</span>
    <span class="kw">let</span> (c, d) = tokio::<span class="fn">join!</span>(
        <span class="fn">fetch_data</span>(<span class="num">3</span>),
        <span class="fn">fetch_data</span>(<span class="num">4</span>),
    );
    <span class="fn">println!</span>(<span class="str">"{}, {}, {}, {}"</span>, a, b, c, d);

    <span class="cm">// Spawn task (seperti goroutine ringan)</span>
    <span class="kw">let</span> handle = tokio::<span class="fn">spawn</span>(<span class="kw">async</span> {
        <span class="fn">fetch_data</span>(<span class="num">5</span>).<span class="kw">await</span>
    });
    <span class="kw">let</span> result = handle.<span class="kw">await</span>.<span class="fn">unwrap</span>();
}</div>
</div>

<div class="card animate-in">
    <h3>Send & Sync Traits</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Trait</th><th>Artinya</th><th>Contoh</th></tr>
            <tr><td><code>Send</code></td><td>Tipe aman dipindahkan antar thread</td><td>Hampir semua tipe Rust. <strong>Bukan</strong>: Rc&lt;T&gt;, raw pointer</td></tr>
            <tr><td><code>Sync</code></td><td>Tipe aman diakses dari multiple thread via shared reference</td><td>Tipe yang &amp;T-nya Send. <strong>Bukan</strong>: Cell&lt;T&gt;, RefCell&lt;T&gt;</td></tr>
            <tr><td><code>Send + Sync</code></td><td>Aman untuk shared ownership lintas thread</td><td>Arc&lt;Mutex&lt;T&gt;&gt;, Arc&lt;RwLock&lt;T&gt;&gt;</td></tr>
        </table>
    </div>
    <div class="info-box" style="margin-top:12px;">
        Jika kamu mencoba mengirim tipe yang <strong>tidak Send</strong> ke thread lain, compiler akan menolak. Ini adalah bagaimana Rust mencegah data race di compile time.
    </div>
</div>

<!-- ===================== 12. REST API - SIMPLE ===================== -->
<h2 class="animate-in">12. REST API — Versi Sederhana</h2>

<div class="card animate-in">
    <h3>Setup Project</h3>
    <div class="code-block"><span class="cm"># Cargo.toml</span>
[package]
name = <span class="str">"simple-api"</span>
version = <span class="str">"0.1.0"</span>
edition = <span class="str">"2021"</span>

[dependencies]
axum = <span class="str">"0.8"</span>
tokio = { version = <span class="str">"1"</span>, features = [<span class="str">"full"</span>] }
serde = { version = <span class="str">"1"</span>, features = [<span class="str">"derive"</span>] }
serde_json = <span class="str">"1"</span></div>
</div>

<div class="card animate-in">
    <h3>Simple CRUD API dengan Axum</h3>
    <div class="code-block"><span class="kw">use</span> axum::{
    routing::{get, post, put, delete},
    extract::{Path, State, Json},
    http::<span class="type">StatusCode</span>,
    <span class="type">Router</span>,
};
<span class="kw">use</span> serde::{Deserialize, Serialize};
<span class="kw">use</span> std::sync::{Arc, Mutex};
<span class="kw">use</span> std::collections::<span class="type">HashMap</span>;

<span class="cm">// Model</span>
#[derive(Debug, Clone, Serialize, Deserialize)]
<span class="kw">struct</span> <span class="type">Todo</span> {
    id: <span class="type">u64</span>,
    title: <span class="type">String</span>,
    completed: <span class="type">bool</span>,
}

#[derive(Debug, Deserialize)]
<span class="kw">struct</span> <span class="type">CreateTodo</span> {
    title: <span class="type">String</span>,
}

<span class="cm">// Shared state</span>
<span class="kw">type</span> <span class="type">Db</span> = Arc&lt;Mutex&lt;HashMap&lt;<span class="type">u64</span>, <span class="type">Todo</span>&gt;&gt;&gt;;

<span class="cm">// Handlers</span>
<span class="kw">async fn</span> <span class="fn">list_todos</span>(State(db): State&lt;<span class="type">Db</span>&gt;) -&gt; Json&lt;Vec&lt;<span class="type">Todo</span>&gt;&gt; {
    <span class="kw">let</span> db = db.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
    Json(db.<span class="fn">values</span>().<span class="fn">cloned</span>().<span class="fn">collect</span>())
}

<span class="kw">async fn</span> <span class="fn">create_todo</span>(
    State(db): State&lt;<span class="type">Db</span>&gt;,
    Json(input): Json&lt;<span class="type">CreateTodo</span>&gt;,
) -&gt; (<span class="type">StatusCode</span>, Json&lt;<span class="type">Todo</span>&gt;) {
    <span class="kw">let mut</span> db = db.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
    <span class="kw">let</span> id = db.<span class="fn">len</span>() <span class="kw">as</span> <span class="type">u64</span> + <span class="num">1</span>;
    <span class="kw">let</span> todo = <span class="type">Todo</span> { id, title: input.title, completed: <span class="kw">false</span> };
    db.<span class="fn">insert</span>(id, todo.<span class="fn">clone</span>());
    (<span class="type">StatusCode</span>::CREATED, Json(todo))
}

<span class="kw">async fn</span> <span class="fn">get_todo</span>(
    State(db): State&lt;<span class="type">Db</span>&gt;,
    Path(id): Path&lt;<span class="type">u64</span>&gt;,
) -&gt; <span class="type">Result</span>&lt;Json&lt;<span class="type">Todo</span>&gt;, <span class="type">StatusCode</span>&gt; {
    <span class="kw">let</span> db = db.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
    db.<span class="fn">get</span>(&amp;id)
        .<span class="fn">cloned</span>()
        .<span class="fn">map</span>(Json)
        .<span class="fn">ok_or</span>(<span class="type">StatusCode</span>::NOT_FOUND)
}

<span class="kw">async fn</span> <span class="fn">delete_todo</span>(
    State(db): State&lt;<span class="type">Db</span>&gt;,
    Path(id): Path&lt;<span class="type">u64</span>&gt;,
) -&gt; <span class="type">StatusCode</span> {
    <span class="kw">let mut</span> db = db.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
    <span class="kw">if</span> db.<span class="fn">remove</span>(&amp;id).<span class="fn">is_some</span>() {
        <span class="type">StatusCode</span>::NO_CONTENT
    } <span class="kw">else</span> {
        <span class="type">StatusCode</span>::NOT_FOUND
    }
}

#[tokio::main]
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> db: <span class="type">Db</span> = Arc::new(Mutex::new(HashMap::new()));

    <span class="kw">let</span> app = <span class="type">Router</span>::<span class="fn">new</span>()
        .<span class="fn">route</span>(<span class="str">"/todos"</span>, get(list_todos).post(create_todo))
        .<span class="fn">route</span>(<span class="str">"/todos/{id}"</span>, get(get_todo).delete(delete_todo))
        .<span class="fn">with_state</span>(db);

    <span class="kw">let</span> listener = tokio::net::<span class="type">TcpListener</span>::<span class="fn">bind</span>(<span class="str">"0.0.0.0:3000"</span>)
        .<span class="kw">await</span>.<span class="fn">unwrap</span>();
    <span class="fn">println!</span>(<span class="str">"Server berjalan di http://localhost:3000"</span>);
    axum::<span class="fn">serve</span>(listener, app).<span class="kw">await</span>.<span class="fn">unwrap</span>();
}</div>
</div>

<!-- ===================== 13. REST API - BEST PRACTICE ===================== -->
<h2 class="animate-in">13. REST API — Best Practice</h2>

<div class="card animate-in">
    <h3>Project Structure (Layered Architecture)</h3>
    <div class="code-block"><span class="cm">my-api/</span>
<span class="cm">\u251c\u2500\u2500 Cargo.toml</span>
<span class="cm">\u251c\u2500\u2500 src/</span>
<span class="cm">\u2502   \u251c\u2500\u2500 main.rs          # entrypoint, setup server</span>
<span class="cm">\u2502   \u251c\u2500\u2500 config.rs        # konfigurasi (env vars, dotenv)</span>
<span class="cm">\u2502   \u251c\u2500\u2500 error.rs         # custom error types</span>
<span class="cm">\u2502   \u251c\u2500\u2500 routes/</span>
<span class="cm">\u2502   \u2502   \u251c\u2500\u2500 mod.rs       # route definitions</span>
<span class="cm">\u2502   \u2502   \u2514\u2500\u2500 todo.rs      # todo routes</span>
<span class="cm">\u2502   \u251c\u2500\u2500 handlers/</span>
<span class="cm">\u2502   \u2502   \u251c\u2500\u2500 mod.rs</span>
<span class="cm">\u2502   \u2502   \u2514\u2500\u2500 todo.rs      # request/response handling</span>
<span class="cm">\u2502   \u251c\u2500\u2500 services/</span>
<span class="cm">\u2502   \u2502   \u251c\u2500\u2500 mod.rs</span>
<span class="cm">\u2502   \u2502   \u2514\u2500\u2500 todo.rs      # business logic</span>
<span class="cm">\u2502   \u251c\u2500\u2500 repositories/</span>
<span class="cm">\u2502   \u2502   \u251c\u2500\u2500 mod.rs</span>
<span class="cm">\u2502   \u2502   \u2514\u2500\u2500 todo.rs      # database queries</span>
<span class="cm">\u2502   \u2514\u2500\u2500 models/</span>
<span class="cm">\u2502       \u251c\u2500\u2500 mod.rs</span>
<span class="cm">\u2502       \u2514\u2500\u2500 todo.rs      # data structures</span>
<span class="cm">\u2514\u2500\u2500 migrations/          # SQL migrations</span></div>
</div>

<div class="card animate-in">
    <h3>Cargo.toml — Dependencies</h3>
    <div class="code-block">[dependencies]
axum = <span class="str">"0.8"</span>
tokio = { version = <span class="str">"1"</span>, features = [<span class="str">"full"</span>] }
serde = { version = <span class="str">"1"</span>, features = [<span class="str">"derive"</span>] }
serde_json = <span class="str">"1"</span>
sqlx = { version = <span class="str">"0.8"</span>, features = [<span class="str">"runtime-tokio"</span>, <span class="str">"postgres"</span>, <span class="str">"migrate"</span>] }
tower = <span class="str">"0.5"</span>
tower-http = { version = <span class="str">"0.6"</span>, features = [<span class="str">"cors"</span>, <span class="str">"trace"</span>] }
tracing = <span class="str">"0.1"</span>
tracing-subscriber = <span class="str">"0.3"</span>
thiserror = <span class="str">"2"</span>
dotenvy = <span class="str">"0.15"</span>
uuid = { version = <span class="str">"1"</span>, features = [<span class="str">"v4"</span>, <span class="str">"serde"</span>] }</div>
</div>

<div class="card animate-in">
    <h3>Error Handling Layer</h3>
    <div class="code-block"><span class="cm">// src/error.rs</span>
<span class="kw">use</span> axum::{http::<span class="type">StatusCode</span>, response::{IntoResponse, Json}};
<span class="kw">use</span> serde_json::<span class="fn">json</span>;

#[derive(Debug, thiserror::Error)]
<span class="kw">pub enum</span> <span class="type">AppError</span> {
    #[error(<span class="str">"Not found: {0}"</span>)]
    NotFound(<span class="type">String</span>),

    #[error(<span class="str">"Validation: {0}"</span>)]
    Validation(<span class="type">String</span>),

    #[error(<span class="str">"Database error"</span>)]
    Database(#[from] sqlx::<span class="type">Error</span>),

    #[error(<span class="str">"Internal error"</span>)]
    Internal(#[from] anyhow::<span class="type">Error</span>),
}

<span class="cm">// Konversi AppError ke HTTP response secara otomatis</span>
<span class="kw">impl</span> <span class="type">IntoResponse</span> <span class="kw">for</span> <span class="type">AppError</span> {
    <span class="kw">fn</span> <span class="fn">into_response</span>(<span class="kw">self</span>) -&gt; axum::response::<span class="type">Response</span> {
        <span class="kw">let</span> (status, message) = <span class="kw">match</span> &amp;<span class="kw">self</span> {
            <span class="type">AppError</span>::NotFound(msg) =&gt;
                (<span class="type">StatusCode</span>::NOT_FOUND, msg.<span class="fn">clone</span>()),
            <span class="type">AppError</span>::Validation(msg) =&gt;
                (<span class="type">StatusCode</span>::BAD_REQUEST, msg.<span class="fn">clone</span>()),
            <span class="type">AppError</span>::Database(_) =&gt;
                (<span class="type">StatusCode</span>::INTERNAL_SERVER_ERROR, <span class="str">"Database error"</span>.<span class="fn">into</span>()),
            <span class="type">AppError</span>::Internal(_) =&gt;
                (<span class="type">StatusCode</span>::INTERNAL_SERVER_ERROR, <span class="str">"Internal error"</span>.<span class="fn">into</span>()),
        };

        (status, Json(<span class="fn">json!</span>({ <span class="str">"error"</span>: message }))).<span class="fn">into_response</span>()
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Full Layered Example — Main & Routes</h3>
    <div class="code-block"><span class="cm">// src/main.rs</span>
<span class="kw">use</span> axum::<span class="type">Router</span>;
<span class="kw">use</span> sqlx::postgres::<span class="type">PgPoolOptions</span>;
<span class="kw">use</span> tower_http::cors::<span class="type">CorsLayer</span>;
<span class="kw">use</span> tower_http::trace::<span class="type">TraceLayer</span>;

<span class="kw">mod</span> config;
<span class="kw">mod</span> error;
<span class="kw">mod</span> handlers;
<span class="kw">mod</span> models;
<span class="kw">mod</span> repositories;
<span class="kw">mod</span> routes;
<span class="kw">mod</span> services;

#[derive(Clone)]
<span class="kw">pub struct</span> <span class="type">AppState</span> {
    <span class="kw">pub</span> db: sqlx::<span class="type">PgPool</span>,
}

#[tokio::main]
<span class="kw">async fn</span> <span class="fn">main</span>() -&gt; anyhow::<span class="type">Result</span>&lt;()&gt; {
    dotenvy::<span class="fn">dotenv</span>().<span class="fn">ok</span>();
    tracing_subscriber::fmt::<span class="fn">init</span>();

    <span class="kw">let</span> db_url = std::env::<span class="fn">var</span>(<span class="str">"DATABASE_URL"</span>)?;
    <span class="kw">let</span> pool = <span class="type">PgPoolOptions</span>::<span class="fn">new</span>()
        .<span class="fn">max_connections</span>(<span class="num">10</span>)
        .<span class="fn">connect</span>(&amp;db_url)
        .<span class="kw">await</span>?;

    sqlx::<span class="fn">migrate!</span>().<span class="fn">run</span>(&amp;pool).<span class="kw">await</span>?;

    <span class="kw">let</span> state = <span class="type">AppState</span> { db: pool };
    <span class="kw">let</span> app = <span class="type">Router</span>::<span class="fn">new</span>()
        .<span class="fn">nest</span>(<span class="str">"/api"</span>, routes::<span class="fn">create_routes</span>())
        .<span class="fn">layer</span>(<span class="type">TraceLayer</span>::<span class="fn">new_for_http</span>())
        .<span class="fn">layer</span>(<span class="type">CorsLayer</span>::<span class="fn">permissive</span>())
        .<span class="fn">with_state</span>(state);

    <span class="kw">let</span> listener = tokio::net::<span class="type">TcpListener</span>::<span class="fn">bind</span>(<span class="str">"0.0.0.0:3000"</span>)
        .<span class="kw">await</span>?;
    tracing::<span class="fn">info!</span>(<span class="str">"Server listening on :3000"</span>);
    axum::<span class="fn">serve</span>(listener, app).<span class="kw">await</span>?;
    <span class="type">Ok</span>(())
}</div>
</div>

<div class="card animate-in">
    <h3>Repository Layer (Database)</h3>
    <div class="code-block"><span class="cm">// src/repositories/todo.rs</span>
<span class="kw">use</span> sqlx::<span class="type">PgPool</span>;
<span class="kw">use</span> uuid::<span class="type">Uuid</span>;
<span class="kw">use</span> crate::models::todo::<span class="type">Todo</span>;
<span class="kw">use</span> crate::error::<span class="type">AppError</span>;

<span class="kw">pub struct</span> <span class="type">TodoRepository</span>;

<span class="kw">impl</span> <span class="type">TodoRepository</span> {
    <span class="kw">pub async fn</span> <span class="fn">find_all</span>(pool: &amp;<span class="type">PgPool</span>) -&gt; <span class="type">Result</span>&lt;Vec&lt;<span class="type">Todo</span>&gt;, <span class="type">AppError</span>&gt; {
        <span class="kw">let</span> todos = <span class="fn">sqlx::query_as!</span>(
            <span class="type">Todo</span>,
            <span class="str">"SELECT id, title, completed, created_at FROM todos ORDER BY created_at DESC"</span>
        )
        .<span class="fn">fetch_all</span>(pool)
        .<span class="kw">await</span>?;
        <span class="type">Ok</span>(todos)
    }

    <span class="kw">pub async fn</span> <span class="fn">find_by_id</span>(pool: &amp;<span class="type">PgPool</span>, id: <span class="type">Uuid</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">Todo</span>, <span class="type">AppError</span>&gt; {
        <span class="fn">sqlx::query_as!</span>(
            <span class="type">Todo</span>,
            <span class="str">"SELECT id, title, completed, created_at FROM todos WHERE id = $1"</span>,
            id
        )
        .<span class="fn">fetch_optional</span>(pool)
        .<span class="kw">await</span>?
        .<span class="fn">ok_or_else</span>(|| <span class="type">AppError</span>::NotFound(<span class="fn">format!</span>(<span class="str">"Todo {} not found"</span>, id)))
    }

    <span class="kw">pub async fn</span> <span class="fn">create</span>(pool: &amp;<span class="type">PgPool</span>, title: &amp;<span class="type">str</span>) -&gt; <span class="type">Result</span>&lt;<span class="type">Todo</span>, <span class="type">AppError</span>&gt; {
        <span class="kw">let</span> todo = <span class="fn">sqlx::query_as!</span>(
            <span class="type">Todo</span>,
            <span class="str">"INSERT INTO todos (title) VALUES ($1) RETURNING id, title, completed, created_at"</span>,
            title
        )
        .<span class="fn">fetch_one</span>(pool)
        .<span class="kw">await</span>?;
        <span class="type">Ok</span>(todo)
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Middleware (Tower Layers)</h3>
    <div class="code-block"><span class="kw">use</span> axum::{middleware, extract::<span class="type">Request</span>, response::<span class="type">Response</span>};
<span class="kw">use</span> std::time::<span class="type">Instant</span>;

<span class="cm">// Custom middleware — logging request duration</span>
<span class="kw">async fn</span> <span class="fn">logging_middleware</span>(
    req: <span class="type">Request</span>,
    next: axum::middleware::<span class="type">Next</span>,
) -&gt; <span class="type">Response</span> {
    <span class="kw">let</span> method = req.<span class="fn">method</span>().<span class="fn">clone</span>();
    <span class="kw">let</span> uri = req.<span class="fn">uri</span>().<span class="fn">clone</span>();
    <span class="kw">let</span> start = <span class="type">Instant</span>::<span class="fn">now</span>();

    <span class="kw">let</span> response = next.<span class="fn">run</span>(req).<span class="kw">await</span>;

    <span class="kw">let</span> duration = start.<span class="fn">elapsed</span>();
    tracing::<span class="fn">info!</span>(
        <span class="str">"{} {} - {} - {:?}"</span>,
        method, uri, response.<span class="fn">status</span>(), duration
    );
    response
}

<span class="cm">// Gunakan di router:</span>
<span class="cm">// Router::new()</span>
<span class="cm">//     .route(...)</span>
<span class="cm">//     .layer(middleware::from_fn(logging_middleware))</span></div>
</div>

<!-- ===================== 14. RUST LOADING PYTHON ===================== -->
<h2 class="animate-in">14. Rust Loading Python (PyO3)</h2>

<div class="info-box animate-in">
    <strong>PyO3</strong> adalah crate yang memungkinkan interoperasi antara Rust dan Python. Kamu bisa memanggil Python dari Rust, atau membuat extension module Python yang ditulis di Rust. Ini berguna untuk menggabungkan performa Rust dengan ekosistem ML/data science Python.
</div>

<div class="card animate-in">
    <h3>Setup PyO3</h3>
    <div class="code-block"><span class="cm"># Cargo.toml</span>
[dependencies]
pyo3 = { version = <span class="str">"0.23"</span>, features = [<span class="str">"auto-initialize"</span>] }

<span class="cm"># Untuk membuat Python module (extension):</span>
[lib]
name = <span class="str">"my_rust_module"</span>
crate-type = [<span class="str">"cdylib"</span>]

[dependencies]
pyo3 = { version = <span class="str">"0.23"</span>, features = [<span class="str">"extension-module"</span>] }

<span class="cm"># Atau gunakan maturin untuk build:</span>
<span class="cm"># pip install maturin</span>
<span class="cm"># maturin develop  (build dan install di venv)</span>
<span class="cm"># maturin build    (build wheel)</span></div>
</div>

<div class="card animate-in">
    <h3>Memanggil Python dari Rust</h3>
    <div class="code-block"><span class="kw">use</span> pyo3::prelude::*;
<span class="kw">use</span> pyo3::types::<span class="type">PyDict</span>;

<span class="kw">fn</span> <span class="fn">main</span>() -&gt; <span class="type">PyResult</span>&lt;()&gt; {
    <span class="cm">// Inisialisasi Python interpreter</span>
    <span class="type">Python</span>::<span class="fn">with_gil</span>(|py| {
        <span class="cm">// Jalankan kode Python langsung</span>
        py.<span class="fn">run</span>(<span class="str">"print('Hello from Python!')"</span>, <span class="type">None</span>, <span class="type">None</span>)?;

        <span class="cm">// Import module Python</span>
        <span class="kw">let</span> math = py.<span class="fn">import</span>(<span class="str">"math"</span>)?;
        <span class="kw">let</span> result: <span class="type">f64</span> = math.<span class="fn">getattr</span>(<span class="str">"sqrt"</span>)?.<span class="fn">call1</span>((<span class="num">144.0</span>,))?.<span class="fn">extract</span>()?;
        <span class="fn">println!</span>(<span class="str">"sqrt(144) = {}"</span>, result); <span class="cm">// 12.0</span>

        <span class="cm">// Jalankan fungsi Python dengan arguments</span>
        <span class="kw">let</span> json = py.<span class="fn">import</span>(<span class="str">"json"</span>)?;
        <span class="kw">let</span> data = <span class="type">PyDict</span>::<span class="fn">new</span>(py);
        data.<span class="fn">set_item</span>(<span class="str">"name"</span>, <span class="str">"Rust"</span>)?;
        data.<span class="fn">set_item</span>(<span class="str">"version"</span>, <span class="num">2024</span>)?;
        <span class="kw">let</span> json_str: <span class="type">String</span> = json.<span class="fn">call_method1</span>(<span class="str">"dumps"</span>, (data,))?.<span class="fn">extract</span>()?;
        <span class="fn">println!</span>(<span class="str">"JSON: {}"</span>, json_str);

        <span class="type">Ok</span>(())
    })
}</div>
</div>

<div class="card animate-in">
    <h3>Membuat Python Module dari Rust</h3>
    <div class="code-block"><span class="kw">use</span> pyo3::prelude::*;

<span class="cm">// Fungsi Rust yang bisa dipanggil dari Python</span>
#[pyfunction]
<span class="kw">fn</span> <span class="fn">fibonacci</span>(n: <span class="type">u64</span>) -&gt; <span class="type">u64</span> {
    <span class="kw">match</span> n {
        <span class="num">0</span> =&gt; <span class="num">0</span>,
        <span class="num">1</span> =&gt; <span class="num">1</span>,
        _ =&gt; {
            <span class="kw">let</span> (<span class="kw">mut</span> a, <span class="kw">mut</span> b) = (<span class="num">0u64</span>, <span class="num">1u64</span>);
            <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">2</span>..=n {
                <span class="kw">let</span> temp = b;
                b = a + b;
                a = temp;
            }
            b
        }
    }
}

<span class="cm">// Class Python yang diimplementasikan di Rust</span>
#[pyclass]
<span class="kw">struct</span> <span class="type">DataProcessor</span> {
    data: Vec&lt;<span class="type">f64</span>&gt;,
}

#[pymethods]
<span class="kw">impl</span> <span class="type">DataProcessor</span> {
    #[new]
    <span class="kw">fn</span> <span class="fn">new</span>() -&gt; <span class="kw">Self</span> {
        <span class="type">DataProcessor</span> { data: Vec::<span class="fn">new</span>() }
    }

    <span class="kw">fn</span> <span class="fn">add</span>(&amp;<span class="kw">mut</span> <span class="kw">self</span>, value: <span class="type">f64</span>) {
        <span class="kw">self</span>.data.<span class="fn">push</span>(value);
    }

    <span class="kw">fn</span> <span class="fn">mean</span>(&amp;<span class="kw">self</span>) -&gt; <span class="type">f64</span> {
        <span class="kw">let</span> sum: <span class="type">f64</span> = <span class="kw">self</span>.data.<span class="fn">iter</span>().<span class="fn">sum</span>();
        sum / <span class="kw">self</span>.data.<span class="fn">len</span>() <span class="kw">as</span> <span class="type">f64</span>
    }

    <span class="kw">fn</span> <span class="fn">sorted</span>(&amp;<span class="kw">self</span>) -&gt; Vec&lt;<span class="type">f64</span>&gt; {
        <span class="kw">let mut</span> sorted = <span class="kw">self</span>.data.<span class="fn">clone</span>();
        sorted.<span class="fn">sort_by</span>(|a, b| a.<span class="fn">partial_cmp</span>(b).<span class="fn">unwrap</span>());
        sorted
    }
}

<span class="cm">// Register sebagai Python module</span>
#[pymodule]
<span class="kw">fn</span> <span class="fn">my_rust_module</span>(m: &amp;<span class="type">Bound</span>&lt;<span class="str">'_</span>, <span class="type">PyModule</span>&gt;) -&gt; <span class="type">PyResult</span>&lt;()&gt; {
    m.<span class="fn">add_function</span>(<span class="fn">wrap_pyfunction!</span>(fibonacci, m)?)?;
    m.<span class="fn">add_class</span>::&lt;<span class="type">DataProcessor</span>&gt;()?;
    <span class="type">Ok</span>(())
}

<span class="cm">// Penggunaan dari Python:</span>
<span class="cm">// import my_rust_module</span>
<span class="cm">// print(my_rust_module.fibonacci(40))  # blazing fast!</span>
<span class="cm">// dp = my_rust_module.DataProcessor()</span>
<span class="cm">// dp.add(3.14)</span>
<span class="cm">// dp.add(2.71)</span>
<span class="cm">// print(dp.mean())</span></div>
</div>

<div class="card animate-in">
    <h3>Memanggil Script Python</h3>
    <div class="code-block"><span class="kw">use</span> pyo3::prelude::*;
<span class="kw">use</span> pyo3::types::<span class="type">PyList</span>;

<span class="kw">fn</span> <span class="fn">call_python_ml</span>() -&gt; <span class="type">PyResult</span>&lt;Vec&lt;<span class="type">f64</span>&gt;&gt; {
    <span class="type">Python</span>::<span class="fn">with_gil</span>(|py| {
        <span class="cm">// Tambahkan path ke sys.path</span>
        <span class="kw">let</span> sys = py.<span class="fn">import</span>(<span class="str">"sys"</span>)?;
        <span class="kw">let</span> path: &amp;<span class="type">PyList</span> = sys.<span class="fn">getattr</span>(<span class="str">"path"</span>)?.<span class="fn">downcast</span>()?;
        path.<span class="fn">insert</span>(<span class="num">0</span>, <span class="str">"./python_scripts"</span>)?;

        <span class="cm">// Import custom module</span>
        <span class="kw">let</span> ml_module = py.<span class="fn">import</span>(<span class="str">"my_ml_model"</span>)?;
        <span class="kw">let</span> predictions = ml_module
            .<span class="fn">call_method1</span>(<span class="str">"predict"</span>, (<span class="fn">vec!</span>[<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>],))?;

        <span class="cm">// Konversi Python list ke Rust Vec</span>
        <span class="kw">let</span> result: Vec&lt;<span class="type">f64</span>&gt; = predictions.<span class="fn">extract</span>()?;
        <span class="type">Ok</span>(result)
    })
}

<span class="cm">// Use case: Rust web server yang memanggil Python ML model</span>
<span class="cm">// Rust menangani HTTP, routing, validation</span>
<span class="cm">// Python menangani inference dengan sklearn/pytorch</span></div>
</div>

<div class="card animate-in">
    <h3>Data Conversion: Rust &harr; Python</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Rust Type</th><th>Python Type</th><th>Keterangan</th></tr>
            <tr><td><code>i32, i64, u32, u64</code></td><td><code>int</code></td><td>Otomatis</td></tr>
            <tr><td><code>f32, f64</code></td><td><code>float</code></td><td>Otomatis</td></tr>
            <tr><td><code>bool</code></td><td><code>bool</code></td><td>Otomatis</td></tr>
            <tr><td><code>String, &str</code></td><td><code>str</code></td><td>Otomatis</td></tr>
            <tr><td><code>Vec&lt;T&gt;</code></td><td><code>list</code></td><td>Otomatis via extract/into_py</td></tr>
            <tr><td><code>HashMap&lt;K,V&gt;</code></td><td><code>dict</code></td><td>Otomatis via extract/into_py</td></tr>
            <tr><td><code>Option&lt;T&gt;</code></td><td><code>Optional[T]</code></td><td>None &harr; None</td></tr>
            <tr><td><code>(A, B, C)</code></td><td><code>tuple</code></td><td>Otomatis</td></tr>
            <tr><td><code>#[pyclass] struct</code></td><td><code>class</code></td><td>Custom class</td></tr>
        </table>
    </div>
</div>

<!-- ===================== 15. GO vs RUST LOADING PYTHON ===================== -->
<h2 class="animate-in">15. Perbandingan: Go Loading Python vs Rust Loading Python</h2>

<div class="card animate-in">
    <h3>Perbandingan Komprehensif</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Aspek</th><th>Go (cgo + CPython)</th><th>Rust (PyO3)</th></tr>
            <tr>
                <td><strong>Mekanisme</strong></td>
                <td>Menggunakan <code>cgo</code> untuk memanggil C API dari CPython. Perlu header Python dan linking manual.</td>
                <td><code>PyO3</code> menyediakan safe Rust bindings. Crate <code>maturin</code> untuk build tooling.</td>
            </tr>
            <tr>
                <td><strong>Safety</strong></td>
                <td><span class="badge-orange">Rendah</span> — cgo melewati semua safety guarantees Go. Manual reference counting, potensi segfault.</td>
                <td><span class="badge-green">Tinggi</span> — PyO3 menggunakan Rust type system. GIL management otomatis, memory-safe.</td>
            </tr>
            <tr>
                <td><strong>Performa Interop</strong></td>
                <td><span class="badge-orange">Sedang</span> — overhead cgo cukup signifikan (~200ns per call). Goroutine dan GIL Python bisa konflik.</td>
                <td><span class="badge-green">Tinggi</span> — overhead minimal, direct FFI. Lebih mudah mengelola GIL.</td>
            </tr>
            <tr>
                <td><strong>Ease of Use</strong></td>
                <td><span class="badge-red">Sulit</span> — Harus menulis C wrapper, manual memory management, compile flags rumit.</td>
                <td><span class="badge-green">Mudah</span> — API ergonomis, derive macros, type conversion otomatis.</td>
            </tr>
            <tr>
                <td><strong>Ekosistem</strong></td>
                <td>go-python3, gopy (terbatas). Komunitas kecil.</td>
                <td>PyO3 sangat aktif, maturin, banyak contoh. Komunitas besar.</td>
            </tr>
            <tr>
                <td><strong>Cross-compile</strong></td>
                <td><span class="badge-red">Sulit</span> — cgo membuat cross-compile Go sangat rumit.</td>
                <td><span class="badge-orange">Sedang</span> — Perlu Python development headers untuk target platform.</td>
            </tr>
            <tr>
                <td><strong>GIL Handling</strong></td>
                <td>Manual, error-prone. Goroutines dan GIL bisa deadlock.</td>
                <td>PyO3 mengelola GIL secara otomatis. <code>Python::with_gil()</code> idiomatis.</td>
            </tr>
            <tr>
                <td><strong>Create Python Module</strong></td>
                <td><span class="badge-red">Tidak langsung</span> — Perlu wrapper layer, tidak native.</td>
                <td><span class="badge-green">Native support</span> — <code>#[pymodule]</code>, <code>#[pyfunction]</code>, <code>#[pyclass]</code>.</td>
            </tr>
            <tr>
                <td><strong>Binary Size</strong></td>
                <td>Lebih kecil (Go binary + Python runtime)</td>
                <td>Serupa (Rust binary + Python runtime)</td>
            </tr>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Contoh Kode Side-by-Side</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="go-py">Go + Python</button>
        <button class="tab-btn" data-tab="rust-py">Rust + Python</button>
    </div>
    <div class="tab-content active" data-tab-content="go-py">
        <div class="code-block"><span class="cm">// Go: memanggil Python dengan cgo (RUMIT!)</span>
<span class="cm">// #cgo pkg-config: python3</span>
<span class="cm">// #include &lt;Python.h&gt;</span>
<span class="kw">import</span> <span class="str">"C"</span>
<span class="kw">import</span> <span class="str">"unsafe"</span>

<span class="kw">func</span> <span class="fn">callPython</span>() {
    C.<span class="fn">Py_Initialize</span>()
    <span class="kw">defer</span> C.<span class="fn">Py_Finalize</span>()

    code := C.<span class="fn">CString</span>(<span class="str">"print('hello from python')"</span>)
    <span class="kw">defer</span> C.<span class="fn">free</span>(unsafe.<span class="fn">Pointer</span>(code))
    C.<span class="fn">PyRun_SimpleString</span>(code)

    <span class="cm">// Manual reference counting...</span>
    <span class="cm">// Error handling sangat verbose...</span>
    <span class="cm">// Tipe tidak aman...</span>
}</div>
    </div>
    <div class="tab-content" data-tab-content="rust-py">
        <div class="code-block"><span class="cm">// Rust: memanggil Python dengan PyO3 (BERSIH!)</span>
<span class="kw">use</span> pyo3::prelude::*;

<span class="kw">fn</span> <span class="fn">call_python</span>() -&gt; <span class="type">PyResult</span>&lt;()&gt; {
    <span class="type">Python</span>::<span class="fn">with_gil</span>(|py| {
        py.<span class="fn">run</span>(<span class="str">"print('hello from python')"</span>, <span class="type">None</span>, <span class="type">None</span>)?;

        <span class="cm">// Type-safe, auto reference counting</span>
        <span class="kw">let</span> math = py.<span class="fn">import</span>(<span class="str">"math"</span>)?;
        <span class="kw">let</span> result: <span class="type">f64</span> = math
            .<span class="fn">getattr</span>(<span class="str">"sqrt"</span>)?
            .<span class="fn">call1</span>((<span class="num">144.0</span>,))?
            .<span class="fn">extract</span>()?;

        <span class="fn">println!</span>(<span class="str">"sqrt(144) = {}"</span>, result);
        <span class="type">Ok</span>(())
    })
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3>Kapan Menggunakan Apa?</h3>
    <div class="card-grid">
        <div class="card">
            <h4><span class="badge-blue">Pilih Go + Python Jika:</span></h4>
            <ul>
                <li>Tim sudah familiar dengan Go ecosystem</li>
                <li>Interaksi Python minimal (jarang dipanggil)</li>
                <li>Menggunakan subprocess/exec lebih praktis</li>
                <li>Microservice terpisah (Go service + Python service via gRPC/HTTP)</li>
            </ul>
            <div class="info-box" style="margin-top:8px;">
                <strong>Rekomendasi:</strong> Lebih baik jalankan Python sebagai service terpisah dan komunikasi via gRPC/HTTP daripada embed Python di Go.
            </div>
        </div>
        <div class="card">
            <h4><span class="badge-green">Pilih Rust + Python (PyO3) Jika:</span></h4>
            <ul>
                <li>Butuh performa tinggi di kedua sisi</li>
                <li>Ingin membuat Python extension module yang cepat</li>
                <li>Memproses data besar (NumPy interop via numpy crate)</li>
                <li>Membangun CLI tool yang memanfaatkan library Python</li>
                <li>Safety adalah prioritas utama</li>
            </ul>
            <div class="success-box" style="margin-top:8px;">
                <strong>Rekomendasi:</strong> PyO3 + maturin adalah gold standard untuk Rust-Python interop.
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Performance Benchmark (Fibonacci)</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Implementasi</th><th>fib(40)</th><th>Catatan</th></tr>
            <tr><td>Pure Python</td><td>~25,000 ms</td><td>Rekursif, sangat lambat</td></tr>
            <tr><td>Go (native)</td><td>~0.5 ms</td><td>Iteratif, compiled</td></tr>
            <tr><td>Rust (native)</td><td>~0.3 ms</td><td>Iteratif, compiled, zero overhead</td></tr>
            <tr><td>Rust via PyO3 (dari Python)</td><td>~0.3 ms + ~0.001 ms overhead</td><td>Overhead interop sangat kecil</td></tr>
            <tr><td>Go via cgo (dari Python)</td><td>~0.5 ms + ~0.2 ms overhead</td><td>cgo overhead signifikan</td></tr>
        </table>
    </div>
</div>

<!-- ===================== RINGKASAN ===================== -->
<h2 class="animate-in">Ringkasan & Cheat Sheet</h2>

<div class="card animate-in">
    <h3>Rust Quick Reference</h3>
    <div class="card-grid-3">
        <div class="card">
            <h4>Variabel</h4>
            <div class="code-block"><span class="kw">let</span> x = <span class="num">5</span>;
<span class="kw">let mut</span> y = <span class="num">10</span>;
<span class="kw">const</span> C: <span class="type">i32</span> = <span class="num">42</span>;
<span class="kw">let</span> x = x + <span class="num">1</span>; <span class="cm">// shadow</span></div>
        </div>
        <div class="card">
            <h4>Functions</h4>
            <div class="code-block"><span class="kw">fn</span> <span class="fn">add</span>(a: <span class="type">i32</span>, b: <span class="type">i32</span>) -&gt; <span class="type">i32</span> {
    a + b
}
<span class="kw">let</span> f = |x| x * <span class="num">2</span>;</div>
        </div>
        <div class="card">
            <h4>Error Handling</h4>
            <div class="code-block"><span class="kw">let</span> r = risky()?;
<span class="kw">match</span> result {
  <span class="type">Ok</span>(v) =&gt; v,
  <span class="type">Err</span>(e) =&gt; <span class="kw">return</span> <span class="type">Err</span>(e),
}</div>
        </div>
        <div class="card">
            <h4>Ownership</h4>
            <div class="code-block"><span class="kw">let</span> s = <span class="type">String</span>::<span class="fn">from</span>(<span class="str">"hi"</span>);
<span class="kw">let</span> s2 = s; <span class="cm">// move</span>
<span class="kw">let</span> r = &amp;s2; <span class="cm">// borrow</span>
<span class="kw">let</span> m = &amp;<span class="kw">mut</span> s2; <span class="cm">// mut borrow</span></div>
        </div>
        <div class="card">
            <h4>Struct & Trait</h4>
            <div class="code-block"><span class="kw">struct</span> <span class="type">S</span> { x: <span class="type">i32</span> }
<span class="kw">impl</span> <span class="type">S</span> {
  <span class="kw">fn</span> <span class="fn">new</span>() -&gt; <span class="kw">Self</span> { <span class="type">S</span>{x:<span class="num">0</span>} }
}
<span class="kw">trait</span> <span class="type">T</span> { <span class="kw">fn</span> <span class="fn">f</span>(&amp;<span class="kw">self</span>); }</div>
        </div>
        <div class="card">
            <h4>Concurrency</h4>
            <div class="code-block"><span class="kw">let</span> h = thread::<span class="fn">spawn</span>(|| {});
h.<span class="fn">join</span>().<span class="fn">unwrap</span>();
<span class="kw">let</span> m = Arc::new(Mutex::new(<span class="num">0</span>));
<span class="cm">// async/await + tokio</span></div>
        </div>
    </div>
</div>

<div class="flow-diagram animate-in" style="margin-top:20px;">
    <h3 style="text-align:center;margin-bottom:15px;">Alur Belajar Rust</h3>
    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;align-items:center;">
        <div class="flow-node" style="background:var(--card);border:2px solid var(--accent);">Variabel & Tipe Data</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card);border:2px solid var(--green);">Control Flow</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card);border:2px solid var(--orange);">Ownership & Borrowing</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card);border:2px solid var(--purple);">Struct, Enum, Trait</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card);border:2px solid var(--red);">Error Handling</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card);border:2px solid var(--accent);">Concurrency</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card);border:2px solid var(--green);">Web/API</div>
    </div>
</div>
`;

// ============================================================
// RUST ANIMATIONS
// ============================================================
function initRustAnimations() {
    const dpr = window.devicePixelRatio || 1;

    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr;
        c.height = h * dpr;
        c.style.width = w + 'px';
        c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }

    // ---- Ownership/Borrowing Animation ----
    const ownSetup = setupCanvas('rust-ownership-canvas', 700, 400);
    if (ownSetup) {
        const { ctx, w, h } = ownSetup;
        let animState = 'idle'; // idle, move, borrow, mutborrow
        let animFrame = 0;
        let animId = null;

        const colors = {
            bg: '#0f172a',
            card: '#1e293b',
            accent: '#38bdf8',
            green: '#34d399',
            orange: '#fb923c',
            red: '#f87171',
            purple: '#a78bfa',
            text: '#e2e8f0',
            text2: '#94a3b8',
            heap: '#164e63',
            stack: '#1e3a5f',
        };

        function drawRoundRect(x, y, w, h, r, fill, stroke) {
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
            if (fill) { ctx.fillStyle = fill; ctx.fill(); }
            if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
        }

        function drawArrow(x1, y1, x2, y2, color, dashed) {
            ctx.beginPath();
            if (dashed) ctx.setLineDash([6, 4]);
            else ctx.setLineDash([]);
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.setLineDash([]);
            // arrowhead
            const angle = Math.atan2(y2 - y1, x2 - x1);
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - 10 * Math.cos(angle - 0.4), y2 - 10 * Math.sin(angle - 0.4));
            ctx.lineTo(x2 - 10 * Math.cos(angle + 0.4), y2 - 10 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        function drawVariable(x, y, name, value, color, alpha) {
            ctx.globalAlpha = alpha || 1;
            drawRoundRect(x, y, 140, 65, 8, colors.card, color);
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(name, x + 70, y + 22);
            ctx.font = '12px JetBrains Mono, monospace';
            ctx.fillStyle = colors.text;
            ctx.fillText(value, x + 70, y + 48);
            ctx.globalAlpha = 1;
        }

        function drawHeapBlock(x, y, value, color) {
            drawRoundRect(x, y, 160, 55, 8, colors.heap, color);
            ctx.font = 'bold 13px JetBrains Mono, monospace';
            ctx.fillStyle = colors.text;
            ctx.textAlign = 'center';
            ctx.fillText(value, x + 80, y + 22);
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = colors.text2;
            ctx.fillText('(heap data)', x + 80, y + 42);
        }

        function drawLabel(x, y, text, color) {
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.fillStyle = color || colors.text2;
            ctx.textAlign = 'center';
            ctx.fillText(text, x, y);
        }

        function drawStatusBox(text, color) {
            drawRoundRect(w / 2 - 180, h - 55, 360, 40, 8, color + '22', color);
            ctx.font = 'bold 13px Inter, sans-serif';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(text, w / 2, h - 30);
        }

        function drawIdle() {
            ctx.clearRect(0, 0, w, h);
            // background
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            // Title
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillStyle = colors.accent;
            ctx.textAlign = 'center';
            ctx.fillText('Ownership & Borrowing Visualization', w / 2, 30);

            // Stack label
            drawLabel(100, 60, 'STACK', colors.accent);
            drawRoundRect(20, 68, 300, 260, 10, null, colors.accent + '44');

            // Heap label
            drawLabel(520, 60, 'HEAP', colors.green);
            drawRoundRect(400, 68, 280, 260, 10, null, colors.green + '44');

            // Variable s1
            drawVariable(50, 90, 'let s1', 'String::from("hello")', colors.accent, 1);
            // Heap data
            drawHeapBlock(440, 90, '"hello"', colors.green);
            // Arrow from s1 to heap
            drawArrow(190, 122, 440, 117, colors.accent, false);

            drawLabel(w / 2, h - 60, 'Klik tombol untuk melihat animasi', colors.text2);
        }

        function drawMoveAnim() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillStyle = colors.orange;
            ctx.textAlign = 'center';
            ctx.fillText('Move Semantics: let s2 = s1;', w / 2, 30);

            drawLabel(100, 60, 'STACK', colors.accent);
            drawRoundRect(20, 68, 300, 260, 10, null, colors.accent + '44');
            drawLabel(520, 60, 'HEAP', colors.green);
            drawRoundRect(400, 68, 280, 260, 10, null, colors.green + '44');

            const progress = Math.min(animFrame / 60, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            // s1 fading out
            drawVariable(50, 90, 'let s1', 'String::from("hello")', colors.red, 1 - ease * 0.7);

            // s2 appearing
            drawVariable(50, 190, 'let s2', '= s1 (moved!)', colors.orange, ease);

            // Heap data
            drawHeapBlock(440, 90, '"hello"', colors.green);

            // Old arrow fading
            if (progress < 0.5) {
                ctx.globalAlpha = 1 - progress * 2;
                drawArrow(190, 122, 440, 117, colors.accent, false);
                ctx.globalAlpha = 1;
            }

            // New arrow appearing
            if (progress > 0.3) {
                ctx.globalAlpha = (progress - 0.3) / 0.7;
                drawArrow(190, 222, 440, 117, colors.orange, false);
                ctx.globalAlpha = 1;
            }

            // Cross out s1
            if (progress > 0.5) {
                ctx.strokeStyle = colors.red;
                ctx.lineWidth = 3;
                ctx.globalAlpha = (progress - 0.5) * 2;
                ctx.beginPath();
                ctx.moveTo(50, 90);
                ctx.lineTo(190, 155);
                ctx.moveTo(190, 90);
                ctx.lineTo(50, 155);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                drawStatusBox('s1 tidak valid lagi! Ownership berpindah ke s2.', colors.orange);
            } else {
                animFrame++;
                animId = requestAnimationFrame(drawMoveAnim);
            }
        }

        function drawBorrowAnim() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillStyle = colors.green;
            ctx.textAlign = 'center';
            ctx.fillText('Borrowing: let r = &s1;', w / 2, 30);

            drawLabel(100, 60, 'STACK', colors.accent);
            drawRoundRect(20, 68, 300, 260, 10, null, colors.accent + '44');
            drawLabel(520, 60, 'HEAP', colors.green);
            drawRoundRect(400, 68, 280, 260, 10, null, colors.green + '44');

            const progress = Math.min(animFrame / 60, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            // s1 stays valid!
            drawVariable(50, 90, 'let s1', 'String::from("hello")', colors.accent, 1);

            // r1 reference
            drawVariable(50, 180, 'let r1', '= &s1 (borrow)', colors.green, ease);

            // r2 reference
            drawVariable(50, 260, 'let r2', '= &s1 (borrow)', colors.purple, ease * (progress > 0.4 ? 1 : 0));

            // Heap
            drawHeapBlock(440, 90, '"hello"', colors.green);
            drawArrow(190, 122, 440, 117, colors.accent, false);

            // Borrow arrows (dashed)
            if (progress > 0.2) {
                ctx.globalAlpha = (progress - 0.2) / 0.8;
                drawArrow(50, 212, 50, 155, colors.green, true);
                ctx.globalAlpha = 1;
            }
            if (progress > 0.5) {
                ctx.globalAlpha = (progress - 0.5) / 0.5;
                drawArrow(50, 292, 50, 155, colors.purple, true);
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                drawStatusBox('Multiple shared borrows (&T) OK! s1 tetap valid.', colors.green);
            } else {
                animFrame++;
                animId = requestAnimationFrame(drawBorrowAnim);
            }
        }

        function drawMutBorrowAnim() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillStyle = colors.red;
            ctx.textAlign = 'center';
            ctx.fillText('Mutable Borrow: let m = &mut s1;', w / 2, 30);

            drawLabel(100, 60, 'STACK', colors.accent);
            drawRoundRect(20, 68, 300, 260, 10, null, colors.accent + '44');
            drawLabel(520, 60, 'HEAP', colors.green);
            drawRoundRect(400, 68, 280, 260, 10, null, colors.green + '44');

            const progress = Math.min(animFrame / 60, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            // s1 locked
            drawVariable(50, 90, 'let mut s1', 'String (locked!)', colors.text2, 0.5 + 0.5 * (1 - ease));

            // m mutable ref
            drawVariable(50, 200, 'let m', '= &mut s1', colors.red, ease);

            // Heap
            drawHeapBlock(440, 90, '"hello"', colors.green);
            drawArrow(190, 122, 440, 117, colors.text2, true);

            // Mutable borrow arrow
            if (progress > 0.3) {
                const a = (progress - 0.3) / 0.7;
                ctx.globalAlpha = a;
                drawArrow(190, 232, 440, 117, colors.red, false);
                ctx.globalAlpha = 1;
            }

            // Lock icon on s1
            if (progress > 0.5) {
                ctx.globalAlpha = (progress - 0.5) * 2;
                ctx.font = '24px serif';
                ctx.fillStyle = colors.orange;
                ctx.textAlign = 'center';
                ctx.fillText('\u{1F512}', 210, 125);
                ctx.globalAlpha = 1;
            }

            if (progress >= 1) {
                drawStatusBox('Hanya SATU &mut borrow! s1 tidak bisa diakses selama m aktif.', colors.red);
            } else {
                animFrame++;
                animId = requestAnimationFrame(drawMutBorrowAnim);
            }
        }

        function startAnim(drawFn) {
            if (animId) cancelAnimationFrame(animId);
            animFrame = 0;
            animState = drawFn.name;
            drawFn();
        }

        // Buttons
        const btnMove = document.getElementById('rust-own-move');
        const btnBorrow = document.getElementById('rust-own-borrow');
        const btnMutBorrow = document.getElementById('rust-own-mutborrow');
        const btnReset = document.getElementById('rust-own-reset');

        if (btnMove) btnMove.addEventListener('click', () => startAnim(drawMoveAnim));
        if (btnBorrow) btnBorrow.addEventListener('click', () => startAnim(drawBorrowAnim));
        if (btnMutBorrow) btnMutBorrow.addEventListener('click', () => startAnim(drawMutBorrowAnim));
        if (btnReset) btnReset.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            drawIdle();
        });

        // Initial draw
        drawIdle();
    }
}
