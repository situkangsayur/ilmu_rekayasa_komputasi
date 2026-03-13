// ============================================================
// GO / GOLANG DEEP DIVE — Comprehensive Interactive Learning
// Reference: https://dasarpemrogramangolang.novalagung.com
// ============================================================

sections['lang-golang'] = () => `
<section class="animate-in">
<h1 class="section-title animate-in">Go (Golang) Deep Dive</h1>
<p class="section-subtitle animate-in">${t('Panduan komprehensif bahasa Go dari dasar hingga concurrency, generics, dan tooling — berdasarkan Dasar Pemrograman Golang (Novalagung) &amp; Effective Go', 'A comprehensive guide to Go from basics to concurrency, generics, and tooling — based on Dasar Pemrograman Golang (Novalagung) &amp; Effective Go')}</p>

<!-- ===================== 1. MENGAPA GO? ===================== -->
<h2 class="animate-in">${t('1. Mengapa Go?', '1. Why Go?')}</h2>

<div class="card animate-in">
<h3>${t('Sejarah &amp; Filosofi', 'History &amp; Philosophy')}</h3>
<p>${t('Go diciptakan di <strong>Google pada tahun 2007</strong> oleh <strong>Robert Griesemer, Rob Pike, dan Ken Thompson</strong> — tiga legenda dunia sistem. Dirilis sebagai open-source pada November 2009. Go lahir dari frustrasi para penciptanya terhadap kompleksitas C++, lambatnya kompilasi, dan sulitnya menulis program konkuren yang aman.', 'Go was created at <strong>Google in 2007</strong> by <strong>Robert Griesemer, Rob Pike, and Ken Thompson</strong> — three legends of systems programming. Released as open-source in November 2009. Go was born from its creators&#39; frustration with C++ complexity, slow compilation, and the difficulty of writing safe concurrent programs.')}</p>
<div class="info-box">
<strong>${t('Filosofi Go:', 'Go Philosophy:')}</strong> "Simplicity is complicated." — Rob Pike. ${t('Go sengaja <em>menghilangkan</em> fitur yang dianggap menambah kompleksitas: tidak ada inheritance, tidak ada exceptions tradisional, tidak ada operator overloading, dan baru menambahkan generics di versi 1.18 (2022).', 'Go intentionally <em>removes</em> features considered to add complexity: no inheritance, no traditional exceptions, no operator overloading, and only added generics in version 1.18 (2022).')}
</div>
</div>

<div class="card animate-in">
<h3>${t('Tujuan Desain', 'Design Goals')}</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
<div>
<h4>${t('Keunggulan Go', 'Go Advantages')}</h4>
<ul>
<li><strong>${t('Kompilasi sangat cepat', 'Very fast compilation')}</strong> — ${t('seluruh project selesai dalam detik', 'entire project compiles in seconds')}</li>
<li><strong>Concurrency built-in</strong> — ${t('goroutine &amp; channel sebagai first-class citizen', 'goroutine &amp; channel as first-class citizens')}</li>
<li><strong>Single binary</strong> — ${t('tidak butuh VM/runtime, deploy hanya copy file', 'no VM/runtime needed, deploy by copying a single file')}</li>
<li><strong>Garbage collected</strong> — ${t('tanpa manual memory management', 'no manual memory management')}</li>
<li><strong>Static typing + type inference</strong> — ${t('aman sekaligus ringkas', 'safe yet concise')}</li>
<li><strong>${t('Standard library kaya', 'Rich standard library')}</strong> — ${t('HTTP, JSON, crypto, testing, sudah built-in', 'HTTP, JSON, crypto, testing, all built-in')}</li>
<li><strong>Cross compilation</strong> — ${t('build untuk OS/arch berbeda dengan satu perintah', 'build for different OS/arch with a single command')}</li>
</ul>
</div>
<div>
<h4>${t('Use Cases Utama', 'Primary Use Cases')}</h4>
<ul>
<li><strong>Cloud &amp; Infrastructure</strong> — Docker, Kubernetes, Terraform, Prometheus</li>
<li><strong>Microservices &amp; API</strong> — ${t('performan tinggi, startup cepat', 'high performance, fast startup')}</li>
<li><strong>CLI Tools</strong> — gh (GitHub CLI), cobra, hugo, fzf</li>
<li><strong>Web Services</strong> — net/http, Gin, Echo, Fiber</li>
<li><strong>DevOps &amp; SRE</strong> — ${t('scripting pengganti shell untuk program kompleks', 'scripting replacement for shell in complex programs')}</li>
<li><strong>Networking</strong> — proxy, load balancer, gRPC services</li>
</ul>
</div>
</div>
</div>

<div class="card animate-in">
<h3>${t('Perbandingan Bahasa', 'Language Comparison')}</h3>
<div class="table-wrapper">
<table>
<tr><th>${t('Aspek', 'Aspect')}</th><th>Go</th><th>Java</th><th>Python</th><th>Rust</th></tr>
<tr><td>${t('Kecepatan eksekusi', 'Execution speed')}</td><td>${t('Sangat cepat (native)', 'Very fast (native)')}</td><td>${t('Cepat (JIT JVM)', 'Fast (JIT JVM)')}</td><td>${t('Lambat (interpreter)', 'Slow (interpreter)')}</td><td>${t('Sangat cepat (native)', 'Very fast (native)')}</td></tr>
<tr><td>${t('Model memori', 'Memory model')}</td><td>GC (low pause)</td><td>GC (JVM)</td><td>GC (CPython)</td><td>Ownership (no GC)</td></tr>
<tr><td>Concurrency</td><td>Goroutine + channel (CSP)</td><td>Thread + synchronized</td><td>asyncio / GIL</td><td>async/await + Send/Sync</td></tr>
<tr><td>${t('Waktu kompilasi', 'Compile time')}</td><td>${t('Sangat cepat', 'Very fast')}</td><td>${t('Lambat', 'Slow')}</td><td>N/A</td><td>${t('Sangat lambat', 'Very slow')}</td></tr>
<tr><td>Learning curve</td><td>${t('Rendah–Menengah', 'Low–Medium')}</td><td>${t('Menengah–Tinggi', 'Medium–High')}</td><td>${t('Rendah', 'Low')}</td><td>${t('Tinggi', 'High')}</td></tr>
<tr><td>Binary output</td><td>${t('Ya, single binary', 'Yes, single binary')}</td><td>${t('Butuh JRE', 'Requires JRE')}</td><td>${t('Butuh Python', 'Requires Python')}</td><td>${t('Ya, single binary', 'Yes, single binary')}</td></tr>
<tr><td>Error handling</td><td>${t('Explicit (nilai error)', 'Explicit (error values)')}</td><td>Exception</td><td>Exception</td><td>Result&lt;T,E&gt;</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>${t('Instalasi &amp; Hello World', 'Installation &amp; Hello World')}</h3>
<div class="code-block"><span class="cm">// 1. Download dari https://go.dev/dl/ lalu install</span>
<span class="cm">// Linux: sudo tar -C /usr/local -xzf go1.22.linux-amd64.tar.gz</span>
<span class="cm">// Tambah ke PATH: export PATH=$PATH:/usr/local/go/bin</span>

<span class="cm">// 2. Buat project baru</span>
go mod init github.com/user/hello

<span class="cm">// 3. main.go</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    fmt.<span class="fn">Println</span>(<span class="str">"Hello, Go!"</span>)
}

<span class="cm">// Jalankan: go run main.go</span>
<span class="cm">// Build:   go build -o hello main.go</span>
<span class="cm">// Verifikasi: go version</span></div>
</div>

<!-- ===================== 2. BASIC SYNTAX ===================== -->
<h2 class="animate-in">${t('2. Sintaks Dasar', '2. Basic Syntax')}</h2>

<div class="card animate-in">
<h3>${t('Variabel', 'Variables')}</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-var-var">var</button>
<button class="tab-btn" data-tab="go-var-short">:= (short)</button>
<button class="tab-btn" data-tab="go-var-zero">Zero Values</button>
<button class="tab-btn" data-tab="go-var-multi">Multiple</button>
</div>
<div data-tab-content="go-var-var" class="active">
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// var di level package (global)</span>
<span class="kw">var</span> appName <span class="num">string</span> = <span class="str">"MyApp"</span>
<span class="kw">var</span> version = <span class="str">"1.0.0"</span>  <span class="cm">// type inference</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// var dengan type eksplisit</span>
    <span class="kw">var</span> nama <span class="num">string</span> = <span class="str">"Tazkia"</span>
    <span class="kw">var</span> umur  <span class="num">int</span>    = <span class="num">25</span>

    <span class="cm">// var dengan type inference</span>
    <span class="kw">var</span> tinggi = <span class="num">170.5</span>  <span class="cm">// float64</span>
    <span class="kw">var</span> aktif  = <span class="num">true</span>   <span class="cm">// bool</span>

    fmt.<span class="fn">Println</span>(nama, umur, tinggi, aktif)
    fmt.<span class="fn">Println</span>(appName, version)
}</div>
</div>
<div data-tab-content="go-var-short">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// := hanya bisa di dalam fungsi (tidak di level package)</span>
    kota  := <span class="str">"Jakarta"</span>    <span class="cm">// string</span>
    skor  := <span class="num">99.5</span>         <span class="cm">// float64</span>
    aktif := <span class="num">true</span>         <span class="cm">// bool</span>

    <span class="cm">// := bisa redeclare jika minimal satu variabel baru</span>
    x, err := <span class="fn">someFunc</span>()
    y, err := <span class="fn">anotherFunc</span>()  <span class="cm">// err redeclared — OK karena y baru</span>

    <span class="cm">// PENTING: semua variabel yang dideklarasikan WAJIB digunakan</span>
    <span class="cm">// jika tidak, compiler akan ERROR</span>
    _ = aktif  <span class="cm">// blank identifier untuk "buang" nilai</span>
    fmt.<span class="fn">Println</span>(kota, skor, x, y, err)
}</div>
<div class="info-box"><strong>var vs :=</strong><br>${t('<code>var</code> bisa digunakan di level package maupun fungsi. <code>:=</code> hanya di dalam fungsi. Gunakan <code>:=</code> untuk sebagian besar deklarasi lokal karena lebih ringkas.', '<code>var</code> can be used at both package and function level. <code>:=</code> is only available inside functions. Use <code>:=</code> for most local declarations as it is more concise.')}</div>
</div>
<div data-tab-content="go-var-zero">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="kw">var</span> i   <span class="num">int</span>         <span class="cm">// 0</span>
    <span class="kw">var</span> f   <span class="num">float64</span>     <span class="cm">// 0.0</span>
    <span class="kw">var</span> b   <span class="num">bool</span>        <span class="cm">// false</span>
    <span class="kw">var</span> s   <span class="num">string</span>      <span class="cm">// "" (string kosong)</span>
    <span class="kw">var</span> p  *<span class="num">int</span>         <span class="cm">// nil</span>
    <span class="kw">var</span> sl []<span class="num">int</span>        <span class="cm">// nil slice</span>
    <span class="kw">var</span> m  <span class="kw">map</span>[<span class="num">string</span>]<span class="num">int</span>  <span class="cm">// nil map</span>
    <span class="kw">var</span> ch <span class="kw">chan</span> <span class="num">int</span>     <span class="cm">// nil channel</span>

    fmt.<span class="fn">Printf</span>(<span class="str">"int=%d float=%f bool=%t\\n"</span>, i, f, b)
    fmt.<span class="fn">Printf</span>(<span class="str">"string=%q ptr=%v\\n"</span>, s, p)
    fmt.<span class="fn">Printf</span>(<span class="str">"slice=%v map=%v chan=%v\\n"</span>, sl, m, ch)
}</div>
<div class="table-wrapper"><table>
<tr><th>${t('Tipe', 'Type')}</th><th>Zero Value</th></tr>
<tr><td>int, int8..int64, uint...</td><td><code>0</code></td></tr>
<tr><td>float32, float64</td><td><code>0.0</code></td></tr>
<tr><td>bool</td><td><code>false</code></td></tr>
<tr><td>string</td><td><code>""</code></td></tr>
<tr><td>pointer, slice, map, chan, func, interface</td><td><code>nil</code></td></tr>
<tr><td>struct</td><td>${t('semua field zero value masing-masing', 'each field gets its own zero value')}</td></tr>
</table></div>
</div>
<div data-tab-content="go-var-multi">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Multiple var dalam satu blok</span>
    <span class="kw">var</span> (
        x <span class="num">int</span>    = <span class="num">10</span>
        y <span class="num">int</span>    = <span class="num">20</span>
        z <span class="num">string</span> = <span class="str">"hello"</span>
    )

    <span class="cm">// Multiple short declaration</span>
    a, b, c := <span class="num">1</span>, <span class="num">2</span>, <span class="str">"tiga"</span>

    <span class="cm">// Swap nilai tanpa temp variable</span>
    a, b = b, a

    <span class="cm">// Multiple assignment dari fungsi</span>
    q, r := <span class="fn">divmod</span>(<span class="num">17</span>, <span class="num">5</span>)  <span class="cm">// q=3, r=2</span>

    fmt.<span class="fn">Println</span>(x, y, z, a, b, c, q, r)
}

<span class="kw">func</span> <span class="fn">divmod</span>(a, b <span class="num">int</span>) (<span class="num">int</span>, <span class="num">int</span>) {
    <span class="kw">return</span> a / b, a % b
}</div>
</div>
</div>

<div class="card animate-in">
<h3>${t('Tipe Data', 'Data Types')}</h3>
<div class="table-wrapper">
<table>
<tr><th>${t('Kategori', 'Category')}</th><th>${t('Tipe', 'Type')}</th><th>${t('Ukuran', 'Size')}</th><th>${t('Keterangan', 'Description')}</th></tr>
<tr><td>Integer signed</td><td>int8, int16, int32, int64</td><td>1–8 byte</td><td>${t('Bilangan bulat bertanda', 'Signed integers')}</td></tr>
<tr><td>Integer unsigned</td><td>uint8, uint16, uint32, uint64</td><td>1–8 byte</td><td>${t('Bilangan bulat tak bertanda', 'Unsigned integers')}</td></tr>
<tr><td>Platform int</td><td>int, uint, uintptr</td><td>4/8 byte</td><td>${t('Menyesuaikan arsitektur CPU', 'Matches CPU architecture')}</td></tr>
<tr><td>Float</td><td>float32, float64</td><td>4/8 byte</td><td>IEEE 754 single/double precision</td></tr>
<tr><td>Complex</td><td>complex64, complex128</td><td>8/16 byte</td><td>${t('Bilangan kompleks (real+imag)', 'Complex numbers (real+imag)')}</td></tr>
<tr><td>Boolean</td><td>bool</td><td>1 byte</td><td>${t('true atau false', 'true or false')}</td></tr>
<tr><td>String</td><td>string</td><td>varies</td><td>Immutable, UTF-8 encoded bytes</td></tr>
<tr><td>Byte</td><td>byte (= uint8)</td><td>1 byte</td><td>${t('Alias uint8, untuk raw data', 'Alias for uint8, used for raw data')}</td></tr>
<tr><td>Rune</td><td>rune (= int32)</td><td>4 byte</td><td>${t('Alias int32, Unicode code point', 'Alias for int32, Unicode code point')}</td></tr>
</table>
</div>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Type conversion harus EKSPLISIT di Go</span>
    <span class="kw">var</span> i <span class="num">int</span>     = <span class="num">42</span>
    <span class="kw">var</span> f <span class="num">float64</span> = <span class="num">float64</span>(i)  <span class="cm">// harus konversi eksplisit</span>
    <span class="kw">var</span> u <span class="num">uint</span>    = <span class="num">uint</span>(f)

    <span class="cm">// string &lt;-&gt; []byte &lt;-&gt; []rune</span>
    s := <span class="str">"Halo, 世界"</span>
    b := []<span class="num">byte</span>(s)   <span class="cm">// utf-8 bytes</span>
    r := []<span class="num">rune</span>(s)   <span class="cm">// unicode code points</span>
    fmt.<span class="fn">Println</span>(i, f, u, <span class="fn">len</span>(b), <span class="fn">len</span>(r))

    <span class="cm">// string formatting</span>
    name := <span class="str">"Go"</span>
    msg  := fmt.<span class="fn">Sprintf</span>(<span class="str">"Belajar %s versi %d seru!"</span>, name, <span class="num">1</span>)
    fmt.<span class="fn">Println</span>(msg)
}</div>
</div>

<div class="card animate-in">
<h3>${t('Konstanta &amp; Iota', 'Constants &amp; Iota')}</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// Konstanta sederhana — dievaluasi saat compile time</span>
<span class="kw">const</span> Pi      = <span class="num">3.14159265358979</span>
<span class="kw">const</span> AppName = <span class="str">"MyApp"</span>

<span class="cm">// iota — auto-increment dalam blok const (mulai dari 0)</span>
<span class="kw">type</span> Weekday <span class="num">int</span>
<span class="kw">const</span> (
    Sunday    Weekday = <span class="kw">iota</span>  <span class="cm">// 0</span>
    Monday                       <span class="cm">// 1</span>
    Tuesday                      <span class="cm">// 2</span>
    Wednesday                    <span class="cm">// 3</span>
    Thursday                     <span class="cm">// 4</span>
    Friday                       <span class="cm">// 5</span>
    Saturday                     <span class="cm">// 6</span>
)

<span class="cm">// iota dengan ekspresi — bit flags</span>
<span class="kw">const</span> (
    FlagRead    = <span class="num">1</span> &lt;&lt; <span class="kw">iota</span>  <span class="cm">// 1  (1 &lt;&lt; 0)</span>
    FlagWrite                   <span class="cm">// 2  (1 &lt;&lt; 1)</span>
    FlagExecute                 <span class="cm">// 4  (1 &lt;&lt; 2)</span>
)

<span class="cm">// iota untuk byte sizes</span>
<span class="kw">const</span> (
    _  = <span class="kw">iota</span>               <span class="cm">// 0 — dibuang</span>
    KB = <span class="num">1</span> &lt;&lt; (<span class="num">10</span> * <span class="kw">iota</span>)  <span class="cm">// 1 &lt;&lt; 10 = 1024</span>
    MB                         <span class="cm">// 1 &lt;&lt; 20</span>
    GB                         <span class="cm">// 1 &lt;&lt; 30</span>
    TB                         <span class="cm">// 1 &lt;&lt; 40</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    fmt.<span class="fn">Println</span>(<span class="str">"Hari ke-1:"</span>, Monday)
    fmt.<span class="fn">Println</span>(<span class="str">"Read|Write:"</span>, FlagRead|FlagWrite)  <span class="cm">// 3</span>
    fmt.<span class="fn">Println</span>(<span class="str">"1 MB ="</span>, MB, <span class="str">"bytes"</span>)
}</div>
</div>

<!-- ===================== 3. CONTROL FLOW ===================== -->
<h2 class="animate-in">3. Control Flow</h2>

<div class="card animate-in">
<h3>if / else</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">classify</span>(n <span class="num">int</span>) <span class="num">string</span> {
    <span class="kw">if</span> n &lt; <span class="num">0</span> {
        <span class="kw">return</span> <span class="str">"negatif"</span>
    } <span class="kw">else if</span> n == <span class="num">0</span> {
        <span class="kw">return</span> <span class="str">"nol"</span>
    } <span class="kw">else</span> {
        <span class="kw">return</span> <span class="str">"positif"</span>
    }
}

<span class="cm">// if dengan initialization statement — pola idiomatis Go</span>
<span class="kw">func</span> <span class="fn">openFile</span>(path <span class="num">string</span>) {
    <span class="kw">if</span> f, err := os.<span class="fn">Open</span>(path); err != <span class="kw">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Error:"</span>, err)
    } <span class="kw">else</span> {
        <span class="kw">defer</span> f.<span class="fn">Close</span>()
        <span class="cm">// f tersedia di sini</span>
    }
    <span class="cm">// f tidak tersedia di sini (scope terbatas)</span>
}

<span class="cm">// Pola paling umum: early return</span>
<span class="kw">func</span> <span class="fn">process</span>(data []<span class="num">byte</span>) <span class="kw">error</span> {
    <span class="kw">if</span> <span class="fn">len</span>(data) == <span class="num">0</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"data kosong"</span>)
    }
    <span class="cm">// proses data...</span>
    <span class="kw">return</span> <span class="kw">nil</span>
}</div>
</div>

<div class="card animate-in">
<h3>${t('for Loop — Satu-satunya Loop di Go', 'for Loop — The Only Loop in Go')}</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// 1. for klasik (while-style)</span>
    n := <span class="num">1</span>
    <span class="kw">for</span> n &lt; <span class="num">1000</span> {
        n *= <span class="num">2</span>
    }

    <span class="cm">// 2. for dengan index (C-style)</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; <span class="num">5</span>; i++ {
        fmt.<span class="fn">Println</span>(i)
    }

    <span class="cm">// 3. for range — iterasi collection</span>
    fruits := []<span class="num">string</span>{<span class="str">"apel"</span>, <span class="str">"mangga"</span>, <span class="str">"jeruk"</span>}
    <span class="kw">for</span> i, v := <span class="kw">range</span> fruits {
        fmt.<span class="fn">Printf</span>(<span class="str">"%d: %s\\n"</span>, i, v)
    }

    <span class="cm">// 4. for range map</span>
    scores := <span class="kw">map</span>[<span class="num">string</span>]<span class="num">int</span>{<span class="str">"Alice"</span>: <span class="num">90</span>, <span class="str">"Bob"</span>: <span class="num">85</span>}
    <span class="kw">for</span> k, v := <span class="kw">range</span> scores {
        fmt.<span class="fn">Printf</span>(<span class="str">"%s: %d\\n"</span>, k, v)
    }

    <span class="cm">// 5. for range string — iterasi per rune</span>
    <span class="kw">for</span> i, r := <span class="kw">range</span> <span class="str">"Halo"</span> {
        fmt.<span class="fn">Printf</span>(<span class="str">"[%d]=%c "</span>, i, r)
    }

    <span class="cm">// 6. infinite loop</span>
    <span class="kw">for</span> {
        <span class="cm">// loop selamanya sampai break/return</span>
        <span class="kw">break</span>
    }

    <span class="cm">// 7. labeled break/continue</span>
outer:
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; <span class="num">3</span>; i++ {
        <span class="kw">for</span> j := <span class="num">0</span>; j &lt; <span class="num">3</span>; j++ {
            <span class="kw">if</span> i+j &gt; <span class="num">2</span> { <span class="kw">break</span> outer }
        }
    }
}</div>
</div>

<div class="card animate-in">
<h3>switch</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    day := <span class="str">"Monday"</span>

    <span class="cm">// switch — tidak butuh break (default no-fallthrough)</span>
    <span class="kw">switch</span> day {
    <span class="kw">case</span> <span class="str">"Monday"</span>, <span class="str">"Tuesday"</span>, <span class="str">"Wednesday"</span>, <span class="str">"Thursday"</span>, <span class="str">"Friday"</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Hari kerja"</span>)
    <span class="kw">case</span> <span class="str">"Saturday"</span>, <span class="str">"Sunday"</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Weekend!"</span>)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Tidak dikenal"</span>)
    }

    <span class="cm">// switch tanpa expression — mirip if-else chain</span>
    x := <span class="num">42</span>
    <span class="kw">switch</span> {
    <span class="kw">case</span> x &lt; <span class="num">0</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"negatif"</span>)
    <span class="kw">case</span> x == <span class="num">0</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"nol"</span>)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"positif"</span>)
    }

    <span class="cm">// fallthrough eksplisit jika diperlukan</span>
    <span class="kw">switch</span> <span class="num">1</span> {
    <span class="kw">case</span> <span class="num">1</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"satu"</span>)
        <span class="kw">fallthrough</span>
    <span class="kw">case</span> <span class="num">2</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"dua (juga tercetak)"</span>)
    }

    <span class="cm">// type switch — untuk interface{}</span>
    <span class="kw">var</span> val <span class="kw">interface</span>{} = <span class="num">3.14</span>
    <span class="kw">switch</span> v := val.(<span class="kw">type</span>) {
    <span class="kw">case</span> <span class="num">int</span>:
        fmt.<span class="fn">Printf</span>(<span class="str">"int: %d\\n"</span>, v)
    <span class="kw">case</span> <span class="num">float64</span>:
        fmt.<span class="fn">Printf</span>(<span class="str">"float64: %f\\n"</span>, v)
    <span class="kw">case</span> <span class="num">string</span>:
        fmt.<span class="fn">Printf</span>(<span class="str">"string: %s\\n"</span>, v)
    <span class="kw">default</span>:
        fmt.<span class="fn">Printf</span>(<span class="str">"tipe tidak dikenal: %T\\n"</span>, v)
    }
}</div>
</div>

<div class="card animate-in">
<h3>defer, panic, recover</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-defer">defer</button>
<button class="tab-btn" data-tab="go-panic">panic &amp; recover</button>
</div>
<div data-tab-content="go-defer" class="active">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"os"</span>
)

<span class="kw">func</span> <span class="fn">readFile</span>(path <span class="num">string</span>) <span class="kw">error</span> {
    f, err := os.<span class="fn">Open</span>(path)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> err }
    <span class="kw">defer</span> f.<span class="fn">Close</span>()  <span class="cm">// dijamin dipanggil saat fungsi return</span>

    <span class="cm">// baca file...</span>
    <span class="kw">return</span> <span class="kw">nil</span>
}

<span class="cm">// defer bersifat LIFO — stack</span>
<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="kw">defer</span> fmt.<span class="fn">Println</span>(<span class="str">"pertama defer (terakhir run)"</span>)
    <span class="kw">defer</span> fmt.<span class="fn">Println</span>(<span class="str">"kedua defer"</span>)
    <span class="kw">defer</span> fmt.<span class="fn">Println</span>(<span class="str">"ketiga defer (pertama run)"</span>)
    fmt.<span class="fn">Println</span>(<span class="str">"fungsi body"</span>)
    <span class="cm">// Output: fungsi body → ketiga → kedua → pertama</span>
}

<span class="cm">// defer dengan mutex — pola common</span>
<span class="kw">func</span> (c *Counter) <span class="fn">Increment</span>() {
    c.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()  <span class="cm">// dijamin unlock</span>
    c.val++
}</div>
<div class="info-box"><strong>${t('Kapan pakai defer?', 'When to use defer?')}</strong> ${t('Setiap kali ada resource yang perlu dibersihkan: Close file, Unlock mutex, menutup koneksi DB, menutup HTTP response body. Defer memastikan cleanup terjadi bahkan saat ada error/return awal.', 'Whenever a resource needs cleanup: Close file, Unlock mutex, close DB connections, close HTTP response body. Defer ensures cleanup happens even with early error/return.')}</div>
</div>
<div data-tab-content="go-panic">
<div class="code-block"><span class="kw">func</span> <span class="fn">divide</span>(a, b <span class="num">int</span>) <span class="num">int</span> {
    <span class="kw">if</span> b == <span class="num">0</span> {
        <span class="kw">panic</span>(<span class="str">"division by zero!"</span>)  <span class="cm">// menghentikan goroutine</span>
    }
    <span class="kw">return</span> a / b
}

<span class="cm">// recover — hanya bisa di dalam defer</span>
<span class="kw">func</span> <span class="fn">safeDivide</span>(a, b <span class="num">int</span>) (result <span class="num">int</span>, err <span class="kw">error</span>) {
    <span class="kw">defer</span> <span class="kw">func</span>() {
        <span class="kw">if</span> r := <span class="fn">recover</span>(); r != <span class="kw">nil</span> {
            err = fmt.<span class="fn">Errorf</span>(<span class="str">"recovered: %v"</span>, r)
        }
    }()
    result = <span class="fn">divide</span>(a, b)
    <span class="kw">return</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    r, err := <span class="fn">safeDivide</span>(<span class="num">10</span>, <span class="num">0</span>)
    fmt.<span class="fn">Println</span>(r, err)  <span class="cm">// 0 recovered: division by zero!</span>
}</div>
<div class="warn-box"><strong>panic vs error:</strong> ${t('Gunakan <code>error</code> untuk kondisi yang bisa dipulihkan (file tidak ditemukan, input invalid). Gunakan <code>panic</code> hanya untuk kondisi yang benar-benar tidak bisa pulih (programming bug, invariant yang dilanggar). Jangan gunakan panic sebagai exception handler!', 'Use <code>error</code> for recoverable conditions (file not found, invalid input). Use <code>panic</code> only for truly unrecoverable conditions (programming bugs, violated invariants). Do not use panic as an exception handler!')}</div>
</div>
</div>

<!-- ===================== 4. FUNCTIONS ===================== -->
<h2 class="animate-in">${t('4. Fungsi', '4. Functions')}</h2>

<div class="card animate-in">
<h3>Multiple Return &amp; Named Return</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"errors"</span>
    <span class="str">"fmt"</span>
    <span class="str">"math"</span>
)

<span class="cm">// Multiple return values — idiom khas Go</span>
<span class="kw">func</span> <span class="fn">divide</span>(a, b <span class="num">float64</span>) (<span class="num">float64</span>, <span class="kw">error</span>) {
    <span class="kw">if</span> b == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">0</span>, errors.<span class="fn">New</span>(<span class="str">"division by zero"</span>)
    }
    <span class="kw">return</span> a / b, <span class="kw">nil</span>
}

<span class="cm">// Named return values — dokumentasi sekaligus nilai default</span>
<span class="kw">func</span> <span class="fn">minMax</span>(arr []<span class="num">int</span>) (min, max <span class="num">int</span>) {
    min, max = arr[<span class="num">0</span>], arr[<span class="num">0</span>]
    <span class="kw">for</span> _, v := <span class="kw">range</span> arr {
        <span class="kw">if</span> v &lt; min { min = v }
        <span class="kw">if</span> v &gt; max { max = v }
    }
    <span class="kw">return</span>  <span class="cm">// naked return — return min, max</span>
}

<span class="cm">// Variadic function</span>
<span class="kw">func</span> <span class="fn">sum</span>(nums ...<span class="num">int</span>) <span class="num">int</span> {
    total := <span class="num">0</span>
    <span class="kw">for</span> _, n := <span class="kw">range</span> nums {
        total += n
    }
    <span class="kw">return</span> total
}

<span class="kw">func</span> <span class="fn">main</span>() {
    r, err := <span class="fn">divide</span>(<span class="num">10</span>, <span class="num">3</span>)
    <span class="kw">if</span> err != <span class="kw">nil</span> { fmt.<span class="fn">Println</span>(<span class="str">"Error:"</span>, err); <span class="kw">return</span> }
    fmt.<span class="fn">Printf</span>(<span class="str">"%.2f\\n"</span>, r)

    lo, hi := <span class="fn">minMax</span>([]<span class="num">int</span>{<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>})
    fmt.<span class="fn">Println</span>(lo, hi)   <span class="cm">// 1 9</span>

    fmt.<span class="fn">Println</span>(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>))  <span class="cm">// 15</span>

    nums := []<span class="num">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>}
    fmt.<span class="fn">Println</span>(<span class="fn">sum</span>(nums...))  <span class="cm">// unpack slice ke variadic</span>

    _ = math.<span class="fn">Sqrt</span>(<span class="num">2</span>)
}</div>
</div>

<div class="card animate-in">
<h3>First-Class Functions &amp; Closures</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// Fungsi sebagai nilai</span>
<span class="kw">func</span> <span class="fn">apply</span>(nums []<span class="num">int</span>, f <span class="kw">func</span>(<span class="num">int</span>) <span class="num">int</span>) []<span class="num">int</span> {
    result := <span class="fn">make</span>([]<span class="num">int</span>, <span class="fn">len</span>(nums))
    <span class="kw">for</span> i, v := <span class="kw">range</span> nums {
        result[i] = <span class="fn">f</span>(v)
    }
    <span class="kw">return</span> result
}

<span class="cm">// Closure — fungsi yang "menangkap" variabel dari scope luar</span>
<span class="kw">func</span> <span class="fn">makeCounter</span>() <span class="kw">func</span>() <span class="num">int</span> {
    count := <span class="num">0</span>
    <span class="kw">return</span> <span class="kw">func</span>() <span class="num">int</span> {
        count++
        <span class="kw">return</span> count
    }
}

<span class="cm">// init() — dipanggil otomatis sebelum main()</span>
<span class="kw">func</span> <span class="fn">init</span>() {
    fmt.<span class="fn">Println</span>(<span class="str">"init() dipanggil sebelum main()"</span>)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    doubled := <span class="fn">apply</span>([]<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}, <span class="kw">func</span>(n <span class="num">int</span>) <span class="num">int</span> {
        <span class="kw">return</span> n * <span class="num">2</span>
    })
    fmt.<span class="fn">Println</span>(doubled)  <span class="cm">// [2 4 6]</span>

    counter := <span class="fn">makeCounter</span>()
    fmt.<span class="fn">Println</span>(counter(), counter(), counter())  <span class="cm">// 1 2 3</span>

    counter2 := <span class="fn">makeCounter</span>()  <span class="cm">// state terpisah</span>
    fmt.<span class="fn">Println</span>(counter2())     <span class="cm">// 1</span>
}</div>
</div>

<!-- ===================== 5. COLLECTIONS ===================== -->
<h2 class="animate-in">5. Collections</h2>

<div class="card animate-in">
<h3>Array &amp; Slice</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-arr">Array</button>
<button class="tab-btn" data-tab="go-slice">Slice</button>
<button class="tab-btn" data-tab="go-tricks">Slice Tricks</button>
</div>
<div data-tab-content="go-arr" class="active">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Array: ukuran tetap, value type (di-copy saat assignment)</span>
    <span class="kw">var</span> arr [<span class="num">5</span>]<span class="num">int</span>                    <span class="cm">// [0 0 0 0 0]</span>
    arr[<span class="num">0</span>] = <span class="num">10</span>

    nums := [<span class="num">3</span>]<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}           <span class="cm">// literal</span>
    auto := [...]<span class="num">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>}      <span class="cm">// size dihitung compiler</span>

    a := nums  <span class="cm">// COPY — modifikasi a tidak mempengaruhi nums</span>
    a[<span class="num">0</span>] = <span class="num">999</span>
    fmt.<span class="fn">Println</span>(nums[<span class="num">0</span>])  <span class="cm">// 1 (tidak berubah)</span>
    fmt.<span class="fn">Println</span>(arr, auto)
}</div>
</div>
<div data-tab-content="go-slice">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Slice: dinamis, reference ke underlying array</span>
    sl := []<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}
    sl = <span class="fn">append</span>(sl, <span class="num">4</span>, <span class="num">5</span>)           <span class="cm">// [1 2 3 4 5]</span>

    <span class="cm">// make(type, len, cap) — pre-allocate untuk performa</span>
    s := <span class="fn">make</span>([]<span class="num">int</span>, <span class="num">0</span>, <span class="num">100</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"len=%d cap=%d\\n"</span>, <span class="fn">len</span>(s), <span class="fn">cap</span>(s))

    <span class="cm">// Slicing: s[low:high:max]</span>
    data := []<span class="num">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>}
    a := data[<span class="num">1</span>:<span class="num">3</span>]   <span class="cm">// [20 30] — sama underlying array!</span>
    b := data[:<span class="num">2</span>]    <span class="cm">// [10 20]</span>
    c := data[<span class="num">2</span>:]    <span class="cm">// [30 40 50]</span>

    <span class="cm">// copy — buat copy independen</span>
    dst := <span class="fn">make</span>([]<span class="num">int</span>, <span class="fn">len</span>(data))
    <span class="fn">copy</span>(dst, data)
    dst[<span class="num">0</span>] = <span class="num">999</span>
    fmt.<span class="fn">Println</span>(data[<span class="num">0</span>])  <span class="cm">// 10 (tidak berubah)</span>
    _ = a; _ = b; _ = c
}</div>
</div>
<div data-tab-content="go-tricks">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    s := []<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>}

    <span class="cm">// Delete elemen di index i (tidak menjaga urutan)</span>
    i := <span class="num">2</span>
    s[i] = s[<span class="fn">len</span>(s)-<span class="num">1</span>]
    s = s[:<span class="fn">len</span>(s)-<span class="num">1</span>]  <span class="cm">// [1 2 5 4]</span>

    <span class="cm">// Delete elemen di index i (menjaga urutan)</span>
    s2 := []<span class="num">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>}
    j := <span class="num">2</span>
    s2 = <span class="fn">append</span>(s2[:<span class="num">j</span>], s2[j+<span class="num">1</span>:]...)  <span class="cm">// [10 20 40 50]</span>

    <span class="cm">// Insert di index i</span>
    s3 := []<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">4</span>, <span class="num">5</span>}
    k := <span class="num">2</span>
    s3 = <span class="fn">append</span>(s3[:<span class="num">k</span>+<span class="num">1</span>], s3[k:]...)
    s3[k] = <span class="num">3</span>  <span class="cm">// [1 2 3 4 5]</span>

    <span class="cm">// Filter in-place</span>
    evens := s3[:<span class="num">0</span>]
    <span class="kw">for</span> _, v := <span class="kw">range</span> s3 {
        <span class="kw">if</span> v%<span class="num">2</span> == <span class="num">0</span> { evens = <span class="fn">append</span>(evens, v) }
    }

    fmt.<span class="fn">Println</span>(s, s2, s3, evens)
}</div>
</div>
</div>

<div class="card animate-in">
<h3>Map</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Map: hash map key-value</span>
    m := <span class="kw">map</span>[<span class="num">string</span>]<span class="num">int</span>{
        <span class="str">"Alice"</span>: <span class="num">90</span>,
        <span class="str">"Bob"</span>:   <span class="num">85</span>,
        <span class="str">"Charlie"</span>: <span class="num">92</span>,
    }

    <span class="cm">// Tambah / update</span>
    m[<span class="str">"Diana"</span>] = <span class="num">88</span>

    <span class="cm">// Check existence — idiom Go: comma-ok</span>
    val, ok := m[<span class="str">"Eve"</span>]
    <span class="kw">if</span> !ok {
        fmt.<span class="fn">Println</span>(<span class="str">"Eve tidak ditemukan, nilai default:"</span>, val)  <span class="cm">// 0</span>
    }

    <span class="cm">// Delete</span>
    <span class="kw">delete</span>(m, <span class="str">"Bob"</span>)

    <span class="cm">// Iterasi (urutan TIDAK dijamin)</span>
    <span class="kw">for</span> k, v := <span class="kw">range</span> m {
        fmt.<span class="fn">Printf</span>(<span class="str">"%s: %d\\n"</span>, k, v)
    }

    <span class="cm">// PITFALL: nil map — bisa dibaca tapi TIDAK bisa ditulis</span>
    <span class="kw">var</span> nilMap <span class="kw">map</span>[<span class="num">string</span>]<span class="num">int</span>
    _ = nilMap[<span class="str">"key"</span>]          <span class="cm">// OK — returns 0</span>
    <span class="cm">// nilMap["key"] = 1        // PANIC: assignment to entry in nil map</span>

    <span class="cm">// Selalu gunakan make atau literal untuk map yang ditulis</span>
    safeMap := <span class="fn">make</span>(<span class="kw">map</span>[<span class="num">string</span>]<span class="num">int</span>)
    safeMap[<span class="str">"key"</span>] = <span class="num">1</span>  <span class="cm">// OK</span>
    fmt.<span class="fn">Println</span>(safeMap)
}</div>
<div class="warn-box"><strong>${t('Map tidak aman untuk akses concurrent!', 'Maps are not safe for concurrent access!')}</strong> ${t('Untuk akses dari beberapa goroutine, gunakan <code>sync.RWMutex</code> untuk melindungi map, atau gunakan <code>sync.Map</code> yang sudah thread-safe bawaan.', 'For access from multiple goroutines, use <code>sync.RWMutex</code> to protect the map, or use the built-in thread-safe <code>sync.Map</code>.')}</div>
</div>

<div class="card animate-in">
<h3>Struct</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// Struct — kumpulan field, value type</span>
<span class="kw">type</span> Person <span class="kw">struct</span> {
    Name string
    Age  int
    Email string
}

<span class="cm">// Embedding — bukan inheritance, tapi komposisi</span>
<span class="kw">type</span> Employee <span class="kw">struct</span> {
    Person              <span class="cm">// embedded — field Person bisa diakses langsung</span>
    Department string
    Salary     float64
}

<span class="cm">// Anonymous struct</span>
<span class="kw">type</span> Config <span class="kw">struct</span> {
    DB <span class="kw">struct</span> {
        Host string
        Port int
    }
    Debug bool
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Inisialisasi struct</span>
    p1 := Person{Name: <span class="str">"Tazkia"</span>, Age: <span class="num">25</span>, Email: <span class="str">"tazkia@email.com"</span>}
    p2 := Person{<span class="str">"Bob"</span>, <span class="num">30</span>, <span class="str">"bob@email.com"</span>}  <span class="cm">// positional (tidak direkomendasikan)</span>
    <span class="kw">var</span> p3 Person   <span class="cm">// zero value: Name="", Age=0, Email=""</span>
    p3.Name = <span class="str">"Charlie"</span>

    <span class="cm">// Embedded struct</span>
    emp := Employee{
        Person:     Person{Name: <span class="str">"Diana"</span>, Age: <span class="num">28</span>},
        Department: <span class="str">"Engineering"</span>,
        Salary:     <span class="num">15000000</span>,
    }
    fmt.<span class="fn">Println</span>(emp.Name)  <span class="cm">// akses field embedded langsung</span>
    fmt.<span class="fn">Println</span>(emp.Person.Name)  <span class="cm">// juga bisa eksplisit</span>

    <span class="cm">// Struct adalah value type — di-copy saat assignment</span>
    p4 := p1
    p4.Name = <span class="str">"Xander"</span>
    fmt.<span class="fn">Println</span>(p1.Name)  <span class="cm">// "Tazkia" (tidak berubah)</span>

    fmt.<span class="fn">Println</span>(p1, p2, p3)
}</div>
</div>

<!-- ===================== 6. POINTERS ===================== -->
<h2 class="animate-in">${t('6. Pointer', '6. Pointers')}</h2>

<div class="card animate-in">
<h3>${t('Address, Dereference, &amp; Penggunaan', 'Address, Dereference, &amp; Usage')}</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">incrementByValue</span>(n <span class="num">int</span>) {
    n++  <span class="cm">// modifikasi copy — tidak mempengaruhi asli</span>
}

<span class="kw">func</span> <span class="fn">incrementByPointer</span>(n *<span class="num">int</span>) {
    *n++  <span class="cm">// dereference — modifikasi nilai asli</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    x := <span class="num">42</span>

    <span class="fn">incrementByValue</span>(x)
    fmt.<span class="fn">Println</span>(x)  <span class="cm">// 42 (tidak berubah)</span>

    <span class="fn">incrementByPointer</span>(&amp;x)  <span class="cm">// &amp;x = alamat memori x</span>
    fmt.<span class="fn">Println</span>(x)  <span class="cm">// 43</span>

    <span class="cm">// Pointer langsung</span>
    p := &amp;x       <span class="cm">// p bertipe *int</span>
    fmt.<span class="fn">Println</span>(*p)  <span class="cm">// 43 — dereference pointer</span>
    *p = <span class="num">100</span>
    fmt.<span class="fn">Println</span>(x)   <span class="cm">// 100</span>

    <span class="cm">// new() — alokasi zero value, return pointer</span>
    pn := <span class="kw">new</span>(<span class="num">int</span>)  <span class="cm">// *int pointing ke 0</span>
    *pn = <span class="num">55</span>

    <span class="cm">// &amp;T{} — idiom lebih umum untuk struct</span>
    type Point <span class="kw">struct</span>{ X, Y <span class="num">int</span> }
    pt := &amp;Point{X: <span class="num">10</span>, Y: <span class="num">20</span>}  <span class="cm">// *Point</span>
    pt.X = <span class="num">30</span>  <span class="cm">// Go auto-dereference: tidak perlu (*pt).X</span>

    <span class="cm">// Go TIDAK punya pointer arithmetic — lebih aman dari C</span>
    <span class="cm">// p++ atau p+1 tidak diizinkan</span>
    fmt.<span class="fn">Println</span>(pt, pn)
}</div>
<div class="info-box"><strong>${t('Kapan pakai pointer?', 'When to use pointers?')}</strong> ${t('(1) Saat fungsi perlu memodifikasi argumen. (2) Saat struct besar — hindari copy mahal. (3) Untuk nil-able value (pointer bisa nil, value tidak). Go tidak punya pointer arithmetic, jadi aman dari buffer overflow.', '(1) When a function needs to modify its argument. (2) For large structs — avoid expensive copies. (3) For nil-able values (pointers can be nil, values cannot). Go has no pointer arithmetic, so it is safe from buffer overflow.')}</div>
</div>

<!-- ===================== 7. METHODS & INTERFACES ===================== -->
<h2 class="animate-in">7. Methods &amp; Interfaces</h2>

<div class="card animate-in">
<h3>Methods: Value Receiver vs Pointer Receiver</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"math"</span>
)

<span class="kw">type</span> Circle <span class="kw">struct</span> {
    Radius float64
}

<span class="cm">// Value receiver — bekerja pada COPY, cocok untuk read-only</span>
<span class="kw">func</span> (c Circle) <span class="fn">Area</span>() float64 {
    <span class="kw">return</span> math.Pi * c.Radius * c.Radius
}

<span class="cm">// Pointer receiver — bekerja pada ASLI, cocok untuk mutasi</span>
<span class="kw">func</span> (c *Circle) <span class="fn">Scale</span>(factor float64) {
    c.Radius *= factor  <span class="cm">// memodifikasi Circle asli</span>
}

<span class="kw">type</span> Rectangle <span class="kw">struct</span> { Width, Height float64 }

<span class="kw">func</span> (r Rectangle) <span class="fn">Area</span>() float64 { <span class="kw">return</span> r.Width * r.Height }
<span class="kw">func</span> (r Rectangle) <span class="fn">Perimeter</span>() float64 { <span class="kw">return</span> <span class="num">2</span> * (r.Width + r.Height) }

<span class="kw">func</span> <span class="fn">main</span>() {
    c := Circle{Radius: <span class="num">5</span>}
    fmt.<span class="fn">Printf</span>(<span class="str">"Area: %.2f\\n"</span>, c.<span class="fn">Area</span>())  <span class="cm">// 78.54</span>
    c.<span class="fn">Scale</span>(<span class="num">2</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"After scale: %.2f\\n"</span>, c.Radius)  <span class="cm">// 10</span>
}</div>
<div class="info-box"><strong>${t('Aturan receiver:', 'Receiver rules:')}</strong> ${t('Jika <em>salah satu</em> method butuh pointer receiver, sebaiknya <em>semua</em> method pakai pointer receiver untuk konsistensi. Pointer receiver lebih umum digunakan.', 'If <em>any</em> method needs a pointer receiver, it is best to use pointer receivers for <em>all</em> methods for consistency. Pointer receivers are more commonly used.')}</div>
</div>

<div class="card animate-in">
<h3>Interface — Duck Typing</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"math"</span>
)

<span class="cm">// Interface — mendefinisikan behavior, bukan tipe konkret</span>
<span class="kw">type</span> Shape <span class="kw">interface</span> {
    <span class="fn">Area</span>() float64
    <span class="fn">Perimeter</span>() float64
}

<span class="cm">// Implementasi IMPLISIT — tidak perlu "implements Shape"</span>
<span class="kw">type</span> Circle <span class="kw">struct</span>{ Radius float64 }
<span class="kw">func</span> (c Circle) <span class="fn">Area</span>() float64      { <span class="kw">return</span> math.Pi * c.Radius * c.Radius }
<span class="kw">func</span> (c Circle) <span class="fn">Perimeter</span>() float64 { <span class="kw">return</span> <span class="num">2</span> * math.Pi * c.Radius }

<span class="kw">type</span> Rect <span class="kw">struct</span>{ W, H float64 }
<span class="kw">func</span> (r Rect) <span class="fn">Area</span>() float64      { <span class="kw">return</span> r.W * r.H }
<span class="kw">func</span> (r Rect) <span class="fn">Perimeter</span>() float64 { <span class="kw">return</span> <span class="num">2</span> * (r.W + r.H) }

<span class="cm">// Stringer interface dari package fmt</span>
<span class="kw">func</span> (c Circle) <span class="fn">String</span>() string {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"Circle(r=%.1f)"</span>, c.Radius)
}

<span class="kw">func</span> <span class="fn">printInfo</span>(s Shape) {
    fmt.<span class="fn">Printf</span>(<span class="str">"Area=%.2f  Perimeter=%.2f\\n"</span>, s.<span class="fn">Area</span>(), s.<span class="fn">Perimeter</span>())
}

<span class="kw">func</span> <span class="fn">main</span>() {
    shapes := []Shape{
        Circle{Radius: <span class="num">5</span>},
        Rect{W: <span class="num">4</span>, H: <span class="num">6</span>},
    }
    <span class="kw">for</span> _, s := <span class="kw">range</span> shapes {
        <span class="fn">printInfo</span>(s)
    }

    <span class="cm">// Type assertion</span>
    <span class="kw">var</span> s Shape = Circle{Radius: <span class="num">3</span>}
    c, ok := s.(Circle)
    <span class="kw">if</span> ok {
        fmt.<span class="fn">Println</span>(<span class="str">"Radius:"</span>, c.Radius)
    }

    <span class="cm">// empty interface — menerima tipe apa saja</span>
    <span class="kw">var</span> anything <span class="kw">interface</span>{} = <span class="str">"hello"</span>
    anything = <span class="num">42</span>
    anything = []<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}
    fmt.<span class="fn">Println</span>(anything)
}</div>
<div class="info-box"><strong>Interface composition:</strong> ${t('Interface bisa di-embed di interface lain. <code>io.ReadWriter</code> = <code>io.Reader</code> + <code>io.Writer</code>. Ini adalah cara Go mencapai polimorfisme tanpa inheritance.', 'Interfaces can be embedded in other interfaces. <code>io.ReadWriter</code> = <code>io.Reader</code> + <code>io.Writer</code>. This is how Go achieves polymorphism without inheritance.')}</div>
</div>

<!-- ===================== 8. ERROR HANDLING ===================== -->
<h2 class="animate-in">8. Error Handling</h2>

<div class="card animate-in">
<h3>Error: errors.New, fmt.Errorf, Custom Error</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"errors"</span>
    <span class="str">"fmt"</span>
)

<span class="cm">// Custom error type</span>
<span class="kw">type</span> ValidationError <span class="kw">struct</span> {
    Field   string
    Message string
}

<span class="kw">func</span> (e *ValidationError) <span class="fn">Error</span>() string {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"validation error on field '%s': %s"</span>, e.Field, e.Message)
}

<span class="cm">// Sentinel error — error yang bisa dibandingkan</span>
<span class="kw">var</span> ErrNotFound = errors.<span class="fn">New</span>(<span class="str">"not found"</span>)
<span class="kw">var</span> ErrUnauthorized = errors.<span class="fn">New</span>(<span class="str">"unauthorized"</span>)

<span class="kw">func</span> <span class="fn">findUser</span>(id <span class="num">int</span>) (<span class="num">string</span>, <span class="kw">error</span>) {
    <span class="kw">if</span> id &lt;= <span class="num">0</span> {
        <span class="kw">return</span> <span class="str">""</span>, &amp;ValidationError{Field: <span class="str">"id"</span>, Message: <span class="str">"must be positive"</span>}
    }
    <span class="kw">if</span> id &gt; <span class="num">1000</span> {
        <span class="kw">return</span> <span class="str">""</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"findUser(%d): %w"</span>, id, ErrNotFound)  <span class="cm">// %w = wrap error</span>
    }
    <span class="kw">return</span> <span class="str">"Alice"</span>, <span class="kw">nil</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Pengecekan error dasar</span>
    user, err := <span class="fn">findUser</span>(<span class="num">-1</span>)
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Error:"</span>, err)
    }
    _ = user

    <span class="cm">// errors.Is — cek apakah error (atau wrapped error) cocok</span>
    _, err = <span class="fn">findUser</span>(<span class="num">9999</span>)
    <span class="kw">if</span> errors.<span class="fn">Is</span>(err, ErrNotFound) {
        fmt.<span class="fn">Println</span>(<span class="str">"User tidak ditemukan!"</span>)
    }

    <span class="cm">// errors.As — ekstrak ke tipe error tertentu</span>
    _, err = <span class="fn">findUser</span>(<span class="num">0</span>)
    <span class="kw">var</span> ve *ValidationError
    <span class="kw">if</span> errors.<span class="fn">As</span>(err, &amp;ve) {
        fmt.<span class="fn">Printf</span>(<span class="str">"Field: %s, Msg: %s\\n"</span>, ve.Field, ve.Message)
    }

    <span class="cm">// Unwrap chain: fmt.Errorf %w membuat chain</span>
    <span class="cm">// errors.Unwrap(err) untuk akses error di bawahnya</span>
    fmt.<span class="fn">Println</span>(<span class="str">"Unwrapped:"</span>, errors.<span class="fn">Unwrap</span>(err))
}</div>
</div>

<!-- ===================== 9. GOROUTINES & CHANNELS ===================== -->
<h2 class="animate-in">9. Goroutines &amp; Channels (Concurrency)</h2>

<div class="info-box animate-in">
<strong>${t('Model Concurrency Go: CSP (Communicating Sequential Processes)', 'Go Concurrency Model: CSP (Communicating Sequential Processes)')}</strong><br>
"Do not communicate by sharing memory; instead, share memory by communicating." — Rob Pike<br>
${t('Go mengimplementasikan model CSP: goroutine saling berkomunikasi via channel, bukan berbagi memori langsung.', 'Go implements the CSP model: goroutines communicate via channels instead of sharing memory directly.')}
</div>

<div class="card animate-in">
<h3>Goroutines</h3>
<div class="anim-container">
<canvas id="canvas-goroutines" width="800" height="380" style="width:100%;height:auto;border-radius:8px;"></canvas>
<div class="anim-controls">
<button class="anim-btn" id="grBtnStart">Start</button>
<button class="anim-btn" id="grBtnPause">Pause</button>
<button class="anim-btn" id="grBtnAddG">+ Goroutines</button>
<button class="anim-btn" id="grBtnReset">Reset</button>
</div>
</div>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"sync"</span>
    <span class="str">"time"</span>
)

<span class="kw">func</span> <span class="fn">worker</span>(id <span class="num">int</span>, wg *sync.WaitGroup) {
    <span class="kw">defer</span> wg.<span class="fn">Done</span>()  <span class="cm">// kurangi counter saat selesai</span>
    fmt.<span class="fn">Printf</span>(<span class="str">"Worker %d mulai\\n"</span>, id)
    time.<span class="fn">Sleep</span>(<span class="num">100</span> * time.Millisecond)  <span class="cm">// simulasi kerja</span>
    fmt.<span class="fn">Printf</span>(<span class="str">"Worker %d selesai\\n"</span>, id)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="kw">var</span> wg sync.WaitGroup

    <span class="kw">for</span> i := <span class="num">1</span>; i &lt;= <span class="num">5</span>; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go</span> <span class="fn">worker</span>(i, &amp;wg)  <span class="cm">// go keyword — spawn goroutine</span>
    }

    wg.<span class="fn">Wait</span>()  <span class="cm">// tunggu semua goroutine selesai</span>
    fmt.<span class="fn">Println</span>(<span class="str">"Semua worker selesai"</span>)
}</div>
<div class="info-box"><strong>Goroutine vs OS Thread:</strong> ${t('Goroutine sangat ringan (~2KB stack awal, tumbuh dinamis). Satu program Go bisa menjalankan jutaan goroutine. Go runtime mengelola M:N threading — banyak goroutine dipetakan ke beberapa OS thread melalui scheduler (G-M-P model).', 'Goroutines are very lightweight (~2KB initial stack, grows dynamically). A single Go program can run millions of goroutines. The Go runtime manages M:N threading — many goroutines are mapped to a few OS threads through the scheduler (G-M-P model).')}</div>
</div>

<div class="card animate-in">
<h3>Channels</h3>
<div class="anim-container">
<canvas id="canvas-go-channels" width="800" height="300" style="width:100%;height:auto;border-radius:8px;"></canvas>
<div class="anim-controls">
<button class="anim-btn" id="chBtnUnbuffered">Unbuffered</button>
<button class="anim-btn" id="chBtnBuffered">Buffered</button>
<button class="anim-btn" id="chBtnReset">Reset</button>
</div>
</div>
<div class="tabs">
<button class="tab-btn active" data-tab="go-ch-basic">${t('Dasar', 'Basics')}</button>
<button class="tab-btn" data-tab="go-ch-select">select</button>
<button class="tab-btn" data-tab="go-ch-patterns">Patterns</button>
</div>
<div data-tab-content="go-ch-basic" class="active">
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Unbuffered channel — sinkronisasi ketat</span>
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>)

    <span class="kw">go</span> <span class="kw">func</span>() {
        ch &lt;- <span class="num">42</span>  <span class="cm">// blok sampai ada yang menerima</span>
    }()
    val := &lt;-ch  <span class="cm">// blok sampai ada yang mengirim</span>
    fmt.<span class="fn">Println</span>(<span class="str">"Received:"</span>, val)

    <span class="cm">// Buffered channel — tidak blok sampai buffer penuh</span>
    bch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">string</span>, <span class="num">3</span>)  <span class="cm">// buffer 3</span>
    bch &lt;- <span class="str">"a"</span>
    bch &lt;- <span class="str">"b"</span>
    bch &lt;- <span class="str">"c"</span>
    <span class="cm">// bch &lt;- "d"  // blok — buffer penuh</span>
    fmt.<span class="fn">Println</span>(&lt;-bch)  <span class="cm">// "a"</span>

    <span class="cm">// Tutup channel — beri sinyal tidak ada data lagi</span>
    done := <span class="fn">make</span>(<span class="kw">chan</span> <span class="kw">struct</span>{})
    <span class="kw">go</span> <span class="kw">func</span>() {
        <span class="kw">defer</span> <span class="fn">close</span>(done)
        <span class="cm">// kerja...</span>
    }()
    &lt;-done  <span class="cm">// tunggu goroutine selesai</span>

    <span class="cm">// Range atas channel — baca sampai channel ditutup</span>
    nums := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>, <span class="num">5</span>)
    <span class="kw">go</span> <span class="kw">func</span>() {
        <span class="kw">for</span> i := <span class="num">1</span>; i &lt;= <span class="num">5</span>; i++ { nums &lt;- i }
        <span class="fn">close</span>(nums)
    }()
    <span class="kw">for</span> n := <span class="kw">range</span> nums {
        fmt.<span class="fn">Print</span>(n, <span class="str">" "</span>)
    }
}</div>
</div>
<div data-tab-content="go-ch-select">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"time"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    ch1 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">string</span>)
    ch2 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">string</span>)

    <span class="kw">go</span> <span class="kw">func</span>() { time.<span class="fn">Sleep</span>(<span class="num">100</span>*time.Ms); ch1 &lt;- <span class="str">"satu"</span> }()
    <span class="kw">go</span> <span class="kw">func</span>() { time.<span class="fn">Sleep</span>(<span class="num">200</span>*time.Ms); ch2 &lt;- <span class="str">"dua"</span>  }()

    <span class="cm">// select — tunggu channel mana yang siap lebih dulu</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; <span class="num">2</span>; i++ {
        <span class="kw">select</span> {
        <span class="kw">case</span> msg := &lt;-ch1:
            fmt.<span class="fn">Println</span>(<span class="str">"ch1:"</span>, msg)
        <span class="kw">case</span> msg := &lt;-ch2:
            fmt.<span class="fn">Println</span>(<span class="str">"ch2:"</span>, msg)
        <span class="kw">case</span> &lt;-time.<span class="fn">After</span>(<span class="num">1</span> * time.Second):
            fmt.<span class="fn">Println</span>(<span class="str">"timeout!"</span>)
            <span class="kw">return</span>
        }
    }

    <span class="cm">// select dengan default — non-blocking</span>
    ch3 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>)
    <span class="kw">select</span> {
    <span class="kw">case</span> v := &lt;-ch3:
        fmt.<span class="fn">Println</span>(v)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"tidak ada data (non-blocking)"</span>)
    }
}</div>
</div>
<div data-tab-content="go-ch-patterns">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"sync"</span>
)

<span class="cm">// Pipeline pattern</span>
<span class="kw">func</span> <span class="fn">generate</span>(nums ...<span class="num">int</span>) &lt;-<span class="kw">chan</span> <span class="num">int</span> {
    out := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>)
    <span class="kw">go</span> <span class="kw">func</span>() {
        <span class="kw">for</span> _, n := <span class="kw">range</span> nums { out &lt;- n }
        <span class="fn">close</span>(out)
    }()
    <span class="kw">return</span> out
}

<span class="kw">func</span> <span class="fn">square</span>(in &lt;-<span class="kw">chan</span> <span class="num">int</span>) &lt;-<span class="kw">chan</span> <span class="num">int</span> {
    out := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>)
    <span class="kw">go</span> <span class="kw">func</span>() {
        <span class="kw">for</span> n := <span class="kw">range</span> in { out &lt;- n * n }
        <span class="fn">close</span>(out)
    }()
    <span class="kw">return</span> out
}

<span class="cm">// Worker Pool pattern</span>
<span class="kw">func</span> <span class="fn">workerPool</span>(jobs &lt;-<span class="kw">chan</span> <span class="num">int</span>, results <span class="kw">chan</span>&lt;- <span class="num">int</span>, numWorkers <span class="num">int</span>) {
    <span class="kw">var</span> wg sync.WaitGroup
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; numWorkers; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go</span> <span class="kw">func</span>() {
            <span class="kw">defer</span> wg.<span class="fn">Done</span>()
            <span class="kw">for</span> j := <span class="kw">range</span> jobs {
                results &lt;- j * j  <span class="cm">// process job</span>
            }
        }()
    }
    <span class="kw">go</span> <span class="kw">func</span>() { wg.<span class="fn">Wait</span>(); <span class="fn">close</span>(results) }()
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Pipeline</span>
    c := <span class="fn">square</span>(<span class="fn">square</span>(<span class="fn">generate</span>(<span class="num">2</span>, <span class="num">3</span>)))
    <span class="kw">for</span> v := <span class="kw">range</span> c { fmt.<span class="fn">Println</span>(v) }  <span class="cm">// 16, 81</span>

    <span class="cm">// Context cancellation</span>
    ctx, cancel := context.<span class="fn">WithTimeout</span>(context.<span class="fn">Background</span>(), <span class="num">5</span>*time.Second)
    <span class="kw">defer</span> <span class="fn">cancel</span>()
    _ = ctx
}</div>
</div>
</div>

<div class="card animate-in">
<h3>sync.Mutex, sync.RWMutex, sync/atomic</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"sync"</span>
    <span class="str">"sync/atomic"</span>
)

<span class="cm">// Counter dengan Mutex — safe untuk concurrent</span>
<span class="kw">type</span> SafeCounter <span class="kw">struct</span> {
    mu  sync.Mutex
    val <span class="num">int</span>
}

<span class="kw">func</span> (c *SafeCounter) <span class="fn">Inc</span>() {
    c.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()
    c.val++
}

<span class="kw">func</span> (c *SafeCounter) <span class="fn">Value</span>() <span class="num">int</span> {
    c.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()
    <span class="kw">return</span> c.val
}

<span class="cm">// RWMutex — banyak pembaca, satu penulis</span>
<span class="kw">type</span> Cache <span class="kw">struct</span> {
    mu   sync.RWMutex
    data <span class="kw">map</span>[<span class="num">string</span>]<span class="num">string</span>
}
<span class="kw">func</span> (c *Cache) <span class="fn">Get</span>(k <span class="num">string</span>) <span class="num">string</span> {
    c.mu.<span class="fn">RLock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">RUnlock</span>()
    <span class="kw">return</span> c.data[k]
}
<span class="kw">func</span> (c *Cache) <span class="fn">Set</span>(k, v <span class="num">string</span>) {
    c.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()
    c.data[k] = v
}

<span class="cm">// sync/atomic — operasi lock-free untuk tipe primitif</span>
<span class="kw">var</span> atomicCounter int64

<span class="kw">func</span> <span class="fn">main</span>() {
    c := &amp;SafeCounter{}
    <span class="kw">var</span> wg sync.WaitGroup
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; <span class="num">1000</span>; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go</span> <span class="kw">func</span>() { <span class="kw">defer</span> wg.<span class="fn">Done</span>(); c.<span class="fn">Inc</span>() }()
    }
    wg.<span class="fn">Wait</span>()
    fmt.<span class="fn">Println</span>(<span class="str">"SafeCounter:"</span>, c.<span class="fn">Value</span>())  <span class="cm">// 1000</span>

    <span class="cm">// atomic increment</span>
    atomic.<span class="fn">AddInt64</span>(&amp;atomicCounter, <span class="num">1</span>)
    v := atomic.<span class="fn">LoadInt64</span>(&amp;atomicCounter)
    fmt.<span class="fn">Println</span>(<span class="str">"Atomic:"</span>, v)

    <span class="cm">// Deteksi race condition: go run -race main.go</span>
}</div>
<div class="warn-box"><strong>Race Condition:</strong> ${t('Gunakan <code>go run -race main.go</code> atau <code>go test -race ./...</code> untuk mendeteksi race condition secara otomatis. Go race detector adalah alat yang sangat powerful dan sebaiknya selalu dijalankan saat testing.', 'Use <code>go run -race main.go</code> or <code>go test -race ./...</code> to automatically detect race conditions. The Go race detector is a very powerful tool and should always be run during testing.')}</div>
</div>

<div class="card animate-in">
<h3>Context — Cancellation, Timeout, Deadline</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"time"</span>
)

<span class="kw">func</span> <span class="fn">doWork</span>(ctx context.Context, id <span class="num">int</span>) <span class="kw">error</span> {
    <span class="kw">for</span> {
        <span class="kw">select</span> {
        <span class="kw">case</span> &lt;-ctx.<span class="fn">Done</span>():
            fmt.<span class="fn">Printf</span>(<span class="str">"worker %d berhenti: %v\\n"</span>, id, ctx.<span class="fn">Err</span>())
            <span class="kw">return</span> ctx.<span class="fn">Err</span>()
        <span class="kw">default</span>:
            <span class="cm">// simulasi kerja</span>
            time.<span class="fn">Sleep</span>(<span class="num">50</span> * time.Millisecond)
            fmt.<span class="fn">Printf</span>(<span class="str">"worker %d bekerja...\\n"</span>, id)
        }
    }
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// WithTimeout — otomatis cancel setelah durasi</span>
    ctx, cancel := context.<span class="fn">WithTimeout</span>(context.<span class="fn">Background</span>(), <span class="num">200</span>*time.Millisecond)
    <span class="kw">defer</span> <span class="fn">cancel</span>()  <span class="cm">// SELALU defer cancel untuk hindari leak</span>
    <span class="kw">go</span> <span class="fn">doWork</span>(ctx, <span class="num">1</span>)

    <span class="cm">// WithCancel — cancel manual</span>
    ctx2, cancel2 := context.<span class="fn">WithCancel</span>(context.<span class="fn">Background</span>())
    <span class="kw">go</span> <span class="fn">doWork</span>(ctx2, <span class="num">2</span>)
    time.<span class="fn">Sleep</span>(<span class="num">150</span> * time.Millisecond)
    <span class="fn">cancel2</span>()  <span class="cm">// batalkan worker 2</span>

    <span class="cm">// WithValue — propagasi nilai (gunakan hati-hati)</span>
    type key <span class="kw">struct</span>{}
    ctx3 := context.<span class="fn">WithValue</span>(context.<span class="fn">Background</span>(), key{}, <span class="str">"user-123"</span>)
    val := ctx3.<span class="fn">Value</span>(key{})
    fmt.<span class="fn">Println</span>(<span class="str">"user ID:"</span>, val)

    time.<span class="fn">Sleep</span>(<span class="num">300</span> * time.Millisecond)
}</div>
</div>

<!-- ===================== 10. PACKAGES & MODULES ===================== -->
<h2 class="animate-in">10. Packages &amp; Modules</h2>

<div class="card animate-in">
<h3>Go Modules</h3>
<div class="code-block"><span class="cm">// 1. Inisialisasi module baru</span>
go mod init github.com/user/myapp

<span class="cm">// 2. go.mod — manifest module</span>
module github.com/user/myapp

go 1.22

require (
    github.com/gin-gonic/gin v1.9.1
    golang.org/x/crypto    v0.20.0
)

<span class="cm">// 3. Tambah dependency</span>
go get github.com/gin-gonic/gin@latest
go get github.com/gin-gonic/gin@v1.9.1

<span class="cm">// 4. Tidy — hapus unused, tambah missing</span>
go mod tidy

<span class="cm">// 5. go.sum — checksum untuk keamanan</span>
<span class="cm">// File ini di-commit ke git — jangan diedit manual</span>

<span class="cm">// 6. Vendor — untuk offline / reproducible build</span>
go mod vendor
go build -mod=vendor ./...</div>
<div class="table-wrapper">
<table>
<tr><th>${t('Perintah', 'Command')}</th><th>${t('Fungsi', 'Function')}</th></tr>
<tr><td><code>go get pkg@version</code></td><td>${t('Tambah/update dependency', 'Add/update dependency')}</td></tr>
<tr><td><code>go mod tidy</code></td><td>${t('Bersihkan go.mod &amp; go.sum', 'Clean up go.mod &amp; go.sum')}</td></tr>
<tr><td><code>go mod vendor</code></td><td>${t('Copy deps ke vendor/', 'Copy deps to vendor/')}</td></tr>
<tr><td><code>go list -m all</code></td><td>${t('List semua module dependencies', 'List all module dependencies')}</td></tr>
<tr><td><code>go mod graph</code></td><td>${t('Tampilkan dependency graph', 'Show dependency graph')}</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>${t('Konvensi Package', 'Package Conventions')}</h3>
<div class="code-block"><span class="cm">// Struktur project yang umum:</span>
myapp/
├── go.mod
├── go.sum
├── main.go
├── cmd/
│   └── server/
│       └── main.go       <span class="cm">// entry point</span>
├── internal/             <span class="cm">// tidak bisa diimport dari luar module</span>
│   ├── config/
│   └── database/
├── pkg/                  <span class="cm">// library yang bisa digunakan ulang</span>
│   └── utils/
└── api/                  <span class="cm">// HTTP handlers, protobuf definitions</span>

<span class="cm">// Konvensi nama package:</span>
<span class="cm">// - lowercase, singkat, satu kata jika bisa</span>
<span class="cm">// - sama dengan nama direktori</span>
<span class="cm">// - hindari util, common, misc — terlalu generik</span>

<span class="cm">// Import alias</span>
<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    myjson <span class="str">"encoding/json"</span>    <span class="cm">// alias</span>
    _ <span class="str">"github.com/lib/pq"</span>      <span class="cm">// blank import — hanya untuk side effect (init())</span>
    . <span class="str">"math"</span>                   <span class="cm">// dot import — ekspor langsung ke namespace (jarang dipakai)</span>
)</div>
</div>

<div class="card animate-in">
<h3>${t('Sorotan Standard Library', 'Standard Library Highlights')}</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-pkg-http">net/http</button>
<button class="tab-btn" data-tab="go-pkg-json">encoding/json</button>
<button class="tab-btn" data-tab="go-pkg-others">${t('Lainnya', 'Others')}</button>
</div>
<div data-tab-content="go-pkg-http" class="active">
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"encoding/json"</span>
    <span class="str">"fmt"</span>
    <span class="str">"net/http"</span>
)

<span class="kw">type</span> Response <span class="kw">struct</span> {
    Message string <span class="cm">\`json:"message"\`</span>
    Status  int    <span class="cm">\`json:"status"\`</span>
}

<span class="kw">func</span> <span class="fn">helloHandler</span>(w http.ResponseWriter, r *http.Request) {
    w.<span class="fn">Header</span>().<span class="fn">Set</span>(<span class="str">"Content-Type"</span>, <span class="str">"application/json"</span>)
    json.<span class="fn">NewEncoder</span>(w).<span class="fn">Encode</span>(Response{Message: <span class="str">"Hello, Go!"</span>, Status: <span class="num">200</span>})
}

<span class="kw">func</span> <span class="fn">main</span>() {
    mux := http.<span class="fn">NewServeMux</span>()
    mux.<span class="fn">HandleFunc</span>(<span class="str">"GET /hello"</span>, helloHandler)  <span class="cm">// Go 1.22: method routing</span>
    mux.<span class="fn">HandleFunc</span>(<span class="str">"GET /users/{id}"</span>, <span class="kw">func</span>(w http.ResponseWriter, r *http.Request) {
        id := r.PathValue(<span class="str">"id"</span>)  <span class="cm">// Go 1.22: path parameter</span>
        fmt.<span class="fn">Fprintf</span>(w, <span class="str">"User ID: %s"</span>, id)
    })

    fmt.<span class="fn">Println</span>(<span class="str">"Server berjalan di :8080"</span>)
    http.<span class="fn">ListenAndServe</span>(<span class="str">":8080"</span>, mux)

    <span class="cm">// HTTP Client</span>
    resp, err := http.<span class="fn">Get</span>(<span class="str">"https://api.example.com/data"</span>)
    <span class="kw">if</span> err != <span class="kw">nil</span> { panic(err) }
    <span class="kw">defer</span> resp.Body.<span class="fn">Close</span>()  <span class="cm">// PENTING: selalu close response body</span>
}</div>
</div>
<div data-tab-content="go-pkg-json">
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"encoding/json"</span>
    <span class="str">"fmt"</span>
)

<span class="kw">type</span> User <span class="kw">struct</span> {
    ID       int    <span class="cm">\`json:"id"\`</span>
    Name     string <span class="cm">\`json:"name"\`</span>
    Email    string <span class="cm">\`json:"email,omitempty"\`</span>   <span class="cm">// omit if empty</span>
    Password string <span class="cm">\`json:"-"\`</span>                  <span class="cm">// selalu disembunyikan dari JSON</span>
    internal string <span class="cm">// lowercase = private, tidak di-marshal</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    u := User{ID: <span class="num">1</span>, Name: <span class="str">"Tazkia"</span>, Email: <span class="str">"tazkia@example.com"</span>, Password: <span class="str">"secret"</span>}

    <span class="cm">// Marshal: struct -&gt; JSON</span>
    data, err := json.<span class="fn">MarshalIndent</span>(u, <span class="str">""</span>, <span class="str">"  "</span>)
    <span class="kw">if</span> err != <span class="kw">nil</span> { panic(err) }
    fmt.<span class="fn">Println</span>(string(data))
    <span class="cm">// {"id":1,"name":"Tazkia","email":"tazkia@example.com"}</span>
    <span class="cm">// Password tidak muncul karena tag "-"</span>

    <span class="cm">// Unmarshal: JSON -&gt; struct</span>
    jsonStr := <span class="str">"{\"id\":2,\"name\":\"Bob\",\"email\":\"\"}"</span>
    <span class="kw">var</span> u2 User
    json.<span class="fn">Unmarshal</span>([]<span class="num">byte</span>(jsonStr), &amp;u2)
    fmt.<span class="fn">Println</span>(u2.Name)  <span class="cm">// Bob</span>

    <span class="cm">// Dynamic JSON dengan map</span>
    <span class="kw">var</span> m <span class="kw">map</span>[<span class="num">string</span>]<span class="kw">interface</span>{}
    json.<span class="fn">Unmarshal</span>([]<span class="num">byte</span>(<span class="str">"{\"key\":\"val\",\"num\":42}"</span>), &amp;m)
    fmt.<span class="fn">Println</span>(m[<span class="str">"key"</span>], m[<span class="str">"num"</span>])
}</div>
</div>
<div data-tab-content="go-pkg-others">
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"bufio"</span>
    <span class="str">"io"</span>
    <span class="str">"os"</span>
    <span class="str">"path/filepath"</span>
    <span class="str">"strconv"</span>
    <span class="str">"strings"</span>
    <span class="str">"time"</span>
)

<span class="kw">func</span> <span class="fn">examples</span>() {
    <span class="cm">// strings</span>
    s := <span class="str">"Hello, World!"</span>
    strings.<span class="fn">Contains</span>(s, <span class="str">"World"</span>)    <span class="cm">// true</span>
    strings.<span class="fn">ToUpper</span>(s)               <span class="cm">// "HELLO, WORLD!"</span>
    strings.<span class="fn">Split</span>(s, <span class="str">","</span>)            <span class="cm">// ["Hello" " World!"]</span>
    strings.<span class="fn">TrimSpace</span>(<span class="str">"  hi  "</span>)     <span class="cm">// "hi"</span>

    <span class="cm">// strconv</span>
    n, _ := strconv.<span class="fn">Atoi</span>(<span class="str">"42"</span>)       <span class="cm">// string -&gt; int</span>
    strconv.<span class="fn">Itoa</span>(<span class="num">42</span>)                  <span class="cm">// int -&gt; string</span>
    strconv.<span class="fn">ParseFloat</span>(<span class="str">"3.14"</span>, <span class="num">64</span>)   <span class="cm">// string -&gt; float64</span>
    _ = n

    <span class="cm">// time</span>
    now := time.<span class="fn">Now</span>()
    time.<span class="fn">Sleep</span>(<span class="num">100</span> * time.Millisecond)
    fmt.<span class="fn">Println</span>(now.<span class="fn">Format</span>(<span class="str">"2006-01-02 15:04:05"</span>))  <span class="cm">// Go magic date</span>

    <span class="cm">// filepath</span>
    filepath.<span class="fn">Join</span>(<span class="str">"/home"</span>, <span class="str">"user"</span>, <span class="str">"file.txt"</span>)
    filepath.<span class="fn">Ext</span>(<span class="str">"file.go"</span>)  <span class="cm">// ".go"</span>
    filepath.<span class="fn">Base</span>(<span class="str">"/a/b/c.go"</span>)  <span class="cm">// "c.go"</span>

    <span class="cm">// bufio — buffered I/O</span>
    f, _ := os.<span class="fn">Open</span>(<span class="str">"file.txt"</span>)
    <span class="kw">defer</span> f.<span class="fn">Close</span>()
    scanner := bufio.<span class="fn">NewScanner</span>(f)
    <span class="kw">for</span> scanner.<span class="fn">Scan</span>() {
        fmt.<span class="fn">Println</span>(scanner.<span class="fn">Text</span>())
    }

    <span class="cm">// io.Reader / io.Writer — composable I/O</span>
    <span class="kw">var</span> r io.Reader = strings.<span class="fn">NewReader</span>(<span class="str">"hello"</span>)
    io.<span class="fn">Copy</span>(os.Stdout, r)
}</div>
</div>
</div>
</div>

<!-- ===================== 11. GENERICS ===================== -->
<h2 class="animate-in">11. Generics (Go 1.18+)</h2>

<div class="card animate-in">
<h3>Type Parameters &amp; Constraints</h3>
<div class="code-block"><span class="kw">package</span> main
<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"golang.org/x/exp/constraints"</span>
)

<span class="cm">// Generic function — T adalah type parameter</span>
<span class="kw">func</span> <span class="fn">Map</span>[T, U any](s []T, f <span class="kw">func</span>(T) U) []U {
    result := <span class="fn">make</span>([]U, <span class="fn">len</span>(s))
    <span class="kw">for</span> i, v := <span class="kw">range</span> s {
        result[i] = <span class="fn">f</span>(v)
    }
    <span class="kw">return</span> result
}

<span class="cm">// Constraint: comparable — tipe yang bisa dibandingkan dengan ==</span>
<span class="kw">func</span> <span class="fn">Contains</span>[T comparable](s []T, v T) bool {
    <span class="kw">for</span> _, x := <span class="kw">range</span> s {
        <span class="kw">if</span> x == v { <span class="kw">return</span> <span class="num">true</span> }
    }
    <span class="kw">return</span> <span class="num">false</span>
}

<span class="cm">// Constraint dengan interface</span>
<span class="kw">type</span> Number <span class="kw">interface</span> {
    ~int | ~int8 | ~int16 | ~int32 | ~int64 |
    ~float32 | ~float64
}

<span class="kw">func</span> <span class="fn">Sum</span>[T Number](nums []T) T {
    <span class="kw">var</span> total T
    <span class="kw">for</span> _, n := <span class="kw">range</span> nums { total += n }
    <span class="kw">return</span> total
}

<span class="cm">// Generic Stack</span>
<span class="kw">type</span> Stack[T any] <span class="kw">struct</span> {
    items []T
}
<span class="kw">func</span> (s *Stack[T]) <span class="fn">Push</span>(item T) { s.items = <span class="fn">append</span>(s.items, item) }
<span class="kw">func</span> (s *Stack[T]) <span class="fn">Pop</span>() (T, bool) {
    <span class="kw">var</span> zero T
    <span class="kw">if</span> <span class="fn">len</span>(s.items) == <span class="num">0</span> { <span class="kw">return</span> zero, <span class="num">false</span> }
    n := <span class="fn">len</span>(s.items) - <span class="num">1</span>
    item := s.items[n]
    s.items = s.items[:n]
    <span class="kw">return</span> item, <span class="num">true</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    doubled := <span class="fn">Map</span>([]<span class="num">int</span>{<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>}, <span class="kw">func</span>(n <span class="num">int</span>) <span class="num">int</span> { <span class="kw">return</span> n*<span class="num">2</span> })
    fmt.<span class="fn">Println</span>(doubled)  <span class="cm">// [2 4 6]</span>

    fmt.<span class="fn">Println</span>(<span class="fn">Contains</span>([]<span class="num">string</span>{<span class="str">"a"</span>,<span class="str">"b"</span>,<span class="str">"c"</span>}, <span class="str">"b"</span>))  <span class="cm">// true</span>
    fmt.<span class="fn">Println</span>(<span class="fn">Sum</span>([]<span class="num">float64</span>{<span class="num">1.1</span>, <span class="num">2.2</span>, <span class="num">3.3</span>}))  <span class="cm">// 6.6</span>

    s := &amp;Stack[int]{}
    s.<span class="fn">Push</span>(<span class="num">1</span>); s.<span class="fn">Push</span>(<span class="num">2</span>); s.<span class="fn">Push</span>(<span class="num">3</span>)
    v, _ := s.<span class="fn">Pop</span>()
    fmt.<span class="fn">Println</span>(v)  <span class="cm">// 3</span>
}</div>
<div class="info-box"><strong>${t('Kapan pakai generics?', 'When to use generics?')}</strong> ${t('Gunakan generics saat menulis fungsi/tipe yang bekerja pada banyak tipe berbeda dengan logika yang <em>sama persis</em> (seperti Map, Filter, Reduce, Stack). Jangan terlalu cepat reach for generics — sering kali interface atau code generation lebih tepat.', 'Use generics when writing functions/types that work on many different types with <em>exactly the same</em> logic (like Map, Filter, Reduce, Stack). Do not reach for generics too quickly — often interfaces or code generation are more appropriate.')}</div>
</div>

<!-- ===================== 12. TESTING ===================== -->
<h2 class="animate-in">12. Testing</h2>

<div class="card animate-in">
<h3>Unit Test &amp; Table-Driven Test</h3>
<div class="code-block"><span class="cm">// math/math.go</span>
<span class="kw">package</span> math

<span class="kw">func</span> <span class="fn">Add</span>(a, b <span class="num">int</span>) <span class="num">int</span> { <span class="kw">return</span> a + b }

<span class="kw">func</span> <span class="fn">Fibonacci</span>(n <span class="num">int</span>) <span class="num">int</span> {
    <span class="kw">if</span> n &lt;= <span class="num">1</span> { <span class="kw">return</span> n }
    <span class="kw">return</span> <span class="fn">Fibonacci</span>(n-<span class="num">1</span>) + <span class="fn">Fibonacci</span>(n-<span class="num">2</span>)
}</div>
<div class="code-block"><span class="cm">// math/math_test.go</span>
<span class="kw">package</span> math

<span class="kw">import</span> <span class="str">"testing"</span>

<span class="cm">// Test dasar</span>
<span class="kw">func</span> <span class="fn">TestAdd</span>(t *testing.T) {
    result := <span class="fn">Add</span>(<span class="num">2</span>, <span class="num">3</span>)
    <span class="kw">if</span> result != <span class="num">5</span> {
        t.<span class="fn">Errorf</span>(<span class="str">"Add(2,3) = %d; want 5"</span>, result)
    }
}

<span class="cm">// Table-driven test — idiom terbaik di Go</span>
<span class="kw">func</span> <span class="fn">TestFibonacci</span>(t *testing.T) {
    tests := []<span class="kw">struct</span>{
        name  string
        input <span class="num">int</span>
        want  <span class="num">int</span>
    }{
        {<span class="str">"n=0"</span>, <span class="num">0</span>, <span class="num">0</span>},
        {<span class="str">"n=1"</span>, <span class="num">1</span>, <span class="num">1</span>},
        {<span class="str">"n=5"</span>, <span class="num">5</span>, <span class="num">5</span>},
        {<span class="str">"n=10"</span>, <span class="num">10</span>, <span class="num">55</span>},
    }

    <span class="kw">for</span> _, tc := <span class="kw">range</span> tests {
        t.<span class="fn">Run</span>(tc.name, <span class="kw">func</span>(t *testing.T) {
            got := <span class="fn">Fibonacci</span>(tc.input)
            <span class="kw">if</span> got != tc.want {
                t.<span class="fn">Errorf</span>(<span class="str">"Fibonacci(%d) = %d; want %d"</span>, tc.input, got, tc.want)
            }
        })
    }
}

<span class="cm">// Benchmark</span>
<span class="kw">func</span> <span class="fn">BenchmarkFibonacci</span>(b *testing.B) {
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; b.N; i++ {
        <span class="fn">Fibonacci</span>(<span class="num">20</span>)
    }
}

<span class="cm">// Fuzz test (Go 1.18+)</span>
<span class="kw">func</span> <span class="fn">FuzzAdd</span>(f *testing.F) {
    f.<span class="fn">Add</span>(<span class="num">1</span>, <span class="num">2</span>)    <span class="cm">// seed corpus</span>
    f.<span class="fn">Fuzz</span>(<span class="kw">func</span>(t *testing.T, a, b <span class="num">int</span>) {
        result := <span class="fn">Add</span>(a, b)
        <span class="kw">if</span> result != a+b {
            t.<span class="fn">Errorf</span>(<span class="str">"Add(%d,%d) = %d; want %d"</span>, a, b, result, a+b)
        }
    })
}</div>
<div class="table-wrapper">
<table>
<tr><th>${t('Perintah', 'Command')}</th><th>${t('Fungsi', 'Function')}</th></tr>
<tr><td><code>go test ./...</code></td><td>${t('Jalankan semua test', 'Run all tests')}</td></tr>
<tr><td><code>go test -v ./...</code></td><td>Verbose output</td></tr>
<tr><td><code>go test -cover ./...</code></td><td>Code coverage</td></tr>
<tr><td><code>go test -race ./...</code></td><td>${t('Deteksi race condition', 'Detect race conditions')}</td></tr>
<tr><td><code>go test -bench=. ./...</code></td><td>${t('Jalankan benchmark', 'Run benchmarks')}</td></tr>
<tr><td><code>go test -run TestName</code></td><td>${t('Jalankan test tertentu', 'Run specific test')}</td></tr>
<tr><td><code>go test -fuzz FuzzName</code></td><td>${t('Jalankan fuzz testing', 'Run fuzz testing')}</td></tr>
</table>
</div>
</div>

<!-- ===================== 13. GO TOOLS ===================== -->
<h2 class="animate-in">13. Go Build System &amp; Tools</h2>

<div class="card animate-in">
<h3>${t('Toolchain Penting', 'Essential Toolchain')}</h3>
<div class="code-block"><span class="cm">// Build &amp; Run</span>
go run main.go              <span class="cm">// compile &amp; run langsung</span>
go build -o app ./cmd/...  <span class="cm">// build binary</span>
go install ./...            <span class="cm">// install ke $GOPATH/bin</span>

<span class="cm">// Cross compilation (GOOS &amp; GOARCH)</span>
GOOS=linux   GOARCH=amd64 go build -o app-linux   .
GOOS=windows GOARCH=amd64 go build -o app-win.exe .
GOOS=darwin  GOARCH=arm64 go build -o app-mac     .

<span class="cm">// Formatting</span>
go fmt ./...                <span class="cm">// format semua file Go</span>
goimports -w .             <span class="cm">// format + perbaiki imports otomatis</span>

<span class="cm">// Static Analysis</span>
go vet ./...                <span class="cm">// deteksi bug umum</span>
golangci-lint run          <span class="cm">// linter komprehensif (install terpisah)</span>

<span class="cm">// Dokumentasi</span>
go doc fmt.Println          <span class="cm">// lihat docs di terminal</span>
godoc -http=:6060          <span class="cm">// server docs lokal</span>

<span class="cm">// Build tags</span>
<span class="cm">// go:build linux &amp;&amp; amd64</span>
<span class="kw">package</span> main

<span class="cm">// Escape analysis (lihat apa yang di-allocate di heap)</span>
go build -gcflags=<span class="str">"-m"</span> .

<span class="cm">// pprof — profiling</span>
<span class="kw">import</span> _ <span class="str">"net/http/pprof"</span>  <span class="cm">// aktifkan endpoint /debug/pprof/</span>
go tool pprof http://localhost:6060/debug/pprof/profile</div>
</div>

<!-- ===================== 14. PERFORMANCE & BEST PRACTICES ===================== -->
<h2 class="animate-in">${t('14. Performa &amp; Best Practices', '14. Performance &amp; Best Practices')}</h2>

<div class="card animate-in">
<h3>${t('Memory Model &amp; Visualisasi', 'Memory Model &amp; Visualization')}</h3>
<div class="anim-container">
<canvas id="canvas-go-memory" width="800" height="320" style="width:100%;height:auto;border-radius:8px;"></canvas>
<div class="anim-controls">
<button class="anim-btn" id="memBtnStack">Stack</button>
<button class="anim-btn" id="memBtnHeap">Heap GC</button>
<button class="anim-btn" id="memBtnReset">Reset</button>
</div>
</div>
</div>

<div class="card animate-in">
<h3>${t('Effective Go — Pola &amp; Anti-Pattern', 'Effective Go — Patterns &amp; Anti-Patterns')}</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="go-bp-alloc">Allocation</button>
<button class="tab-btn" data-tab="go-bp-slice">Slice/String</button>
<button class="tab-btn" data-tab="go-bp-goroutine">Goroutine</button>
</div>
<div data-tab-content="go-bp-alloc" class="active">
<div class="code-block"><span class="cm">// BAD: append tanpa pre-allocate — reallocate berkali-kali</span>
<span class="kw">func</span> <span class="fn">badSlice</span>(n <span class="num">int</span>) []<span class="num">int</span> {
    <span class="kw">var</span> s []<span class="num">int</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; n; i++ {
        s = <span class="fn">append</span>(s, i)  <span class="cm">// multiple reallocations</span>
    }
    <span class="kw">return</span> s
}

<span class="cm">// GOOD: pre-allocate dengan make</span>
<span class="kw">func</span> <span class="fn">goodSlice</span>(n <span class="num">int</span>) []<span class="num">int</span> {
    s := <span class="fn">make</span>([]<span class="num">int</span>, <span class="num">0</span>, n)  <span class="cm">// cap=n, tidak perlu reallocate</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; n; i++ {
        s = <span class="fn">append</span>(s, i)
    }
    <span class="kw">return</span> s
}

<span class="cm">// BAD: nil slice vs empty slice (tidak sama!)</span>
<span class="kw">var</span> nilSlice []<span class="num">int</span>         <span class="cm">// nil == true, len == 0</span>
emptySlice := []<span class="num">int</span>{}      <span class="cm">// nil == false, len == 0</span>
<span class="cm">// json.Marshal: nilSlice -&gt; null, emptySlice -&gt; []</span>

<span class="cm">// GOOD: strings.Builder untuk string concatenation</span>
<span class="kw">func</span> <span class="fn">buildString</span>(words []<span class="num">string</span>) <span class="num">string</span> {
    <span class="kw">var</span> sb strings.Builder
    <span class="kw">for</span> _, w := <span class="kw">range</span> words {
        sb.<span class="fn">WriteString</span>(w)
    }
    <span class="kw">return</span> sb.<span class="fn">String</span>()
    <span class="cm">// JANGAN: result += word — O(n²) karena string immutable</span>
}
_ = nilSlice; _ = emptySlice</div>
</div>
<div data-tab-content="go-bp-slice">
<div class="code-block"><span class="cm">// BAHAYA: slice sharing underlying array</span>
<span class="kw">func</span> <span class="fn">dangerousSlice</span>() {
    original := []<span class="num">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>}
    sub := original[<span class="num">1</span>:<span class="num">3</span>]  <span class="cm">// [2, 3] — SAMA underlying array!</span>
    sub[<span class="num">0</span>] = <span class="num">99</span>
    fmt.<span class="fn">Println</span>(original)  <span class="cm">// [1 99 3 4 5] — BERUBAH!</span>

    <span class="cm">// Solusi: copy</span>
    safe := <span class="fn">make</span>([]<span class="num">int</span>, <span class="num">len</span>(original[<span class="num">1</span>:<span class="num">3</span>]))
    <span class="fn">copy</span>(safe, original[<span class="num">1</span>:<span class="num">3</span>])
    safe[<span class="num">0</span>] = <span class="num">999</span>
    fmt.<span class="fn">Println</span>(original)  <span class="cm">// tidak berubah</span>

    <span class="cm">// three-index slice: s[low:high:max] — batasi capacity</span>
    limited := original[<span class="num">1</span>:<span class="num">3</span>:<span class="num">3</span>]  <span class="cm">// cap=2, append tidak bisa overwrite</span>
    _ = limited
}

<span class="cm">// BAHAYA: loop goroutine dengan closure capture</span>
<span class="kw">func</span> <span class="fn">goroutineCaptureBug</span>() {
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; <span class="num">3</span>; i++ {
        <span class="kw">go</span> <span class="kw">func</span>() {
            fmt.<span class="fn">Println</span>(i)  <span class="cm">// BUG: selalu print 3 3 3</span>
        }()
    }
    <span class="cm">// Fix: pass i sebagai argumen</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; <span class="num">3</span>; i++ {
        <span class="kw">go</span> <span class="kw">func</span>(n <span class="num">int</span>) {
            fmt.<span class="fn">Println</span>(n)  <span class="cm">// 0, 1, 2 (urutan tidak dijamin)</span>
        }(i)
    }
}</div>
</div>
<div data-tab-content="go-bp-goroutine">
<div class="code-block"><span class="cm">// BAHAYA: goroutine leak</span>
<span class="kw">func</span> <span class="fn">leakyFunc</span>() {
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>)
    <span class="kw">go</span> <span class="kw">func</span>() {
        ch &lt;- <span class="num">42</span>  <span class="cm">// goroutine blok selamanya jika tidak ada receiver</span>
    }()
    <span class="cm">// jika kita return tanpa menerima dari ch — goroutine LEAK</span>
}

<span class="cm">// FIX: gunakan context atau buffered channel</span>
<span class="kw">func</span> <span class="fn">safeFunc</span>(ctx context.Context) {
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="num">int</span>, <span class="num">1</span>)  <span class="cm">// buffered — goroutine tidak blok</span>
    <span class="kw">go</span> <span class="kw">func</span>() {
        <span class="kw">select</span> {
        <span class="kw">case</span> ch &lt;- <span class="fn">compute</span>():
        <span class="kw">case</span> &lt;-ctx.<span class="fn">Done</span>():
            <span class="kw">return</span>  <span class="cm">// keluar jika context dibatalkan</span>
        }
    }()
}

<span class="cm">// JANGAN lupakan: interface dengan pointer vs value</span>
<span class="cm">// Jika method ada di pointer receiver, hanya *T yang implement interface</span>
<span class="kw">type</span> Doer <span class="kw">interface</span> { <span class="fn">Do</span>() }
<span class="kw">type</span> Thing <span class="kw">struct</span>{}
<span class="kw">func</span> (t *Thing) <span class="fn">Do</span>() {}  <span class="cm">// pointer receiver</span>

<span class="kw">var</span> d Doer = &amp;Thing{}   <span class="cm">// OK: *Thing implements Doer</span>
<span class="cm">// var d2 Doer = Thing{}  // ERROR: Thing does not implement Doer</span>
_ = d</div>
</div>
</div>

<!-- ===================== 15. RESOURCES & REFERENSI ===================== -->
<h2 class="animate-in">${t('15. Referensi &amp; Sumber Belajar', '15. References &amp; Learning Resources')}</h2>

<div class="card animate-in">
<h3>${t('Sumber Terpercaya', 'Trusted Resources')}</h3>
<div class="table-wrapper">
<table>
<tr><th>${t('Sumber', 'Source')}</th><th>${t('Keterangan', 'Description')}</th><th>URL</th></tr>
<tr><td><strong>Dasar Pemrograman Golang</strong> — Novalagung</td><td>${t('Tutorial bahasa Indonesia paling lengkap, cocok untuk pemula hingga menengah', 'The most comprehensive Indonesian-language tutorial, suitable for beginners to intermediate')}</td><td>dasarpemrogramangolang.novalagung.com</td></tr>
<tr><td><strong>The Go Programming Language</strong> — Donovan &amp; Kernighan (2015)</td><td>${t('Buku referensi definitif, penjelasan mendalam konsep Go', 'The definitive reference book, in-depth explanation of Go concepts')}</td><td>${t('Tersedia di toko buku / ebook', 'Available at bookstores / ebook')}</td></tr>
<tr><td><strong>Go Official Docs</strong></td><td>${t('Dokumentasi resmi, tutorial, FAQ', 'Official documentation, tutorials, FAQ')}</td><td>go.dev/doc</td></tr>
<tr><td><strong>Effective Go</strong></td><td>${t('Panduan idiom dan best practices dari tim Go', 'Idiom and best practices guide from the Go team')}</td><td>go.dev/doc/effective_go</td></tr>
<tr><td><strong>Go Spec</strong></td><td>${t('Spesifikasi bahasa Go secara formal', 'Formal Go language specification')}</td><td>go.dev/ref/spec</td></tr>
<tr><td><strong>Go by Example</strong></td><td>${t('Contoh-contoh kode per topik, sangat praktis', 'Code examples by topic, very practical')}</td><td>gobyexample.com</td></tr>
<tr><td><strong>Go Playground</strong></td><td>${t('Coba Go langsung di browser', 'Try Go directly in your browser')}</td><td>go.dev/play</td></tr>
<tr><td><strong>pkg.go.dev</strong></td><td>${t('Dokumentasi seluruh package Go dan ekosistem', 'Documentation for all Go packages and ecosystem')}</td><td>pkg.go.dev</td></tr>
</table>
</div>
</div>

<div class="info-box animate-in">
<strong>${t('Langkah Belajar Go yang Disarankan:', 'Recommended Go Learning Path:')}</strong>
<ol>
<li>${t('Install Go, buat project dengan <code>go mod init</code>, jalankan Hello World', 'Install Go, create a project with <code>go mod init</code>, run Hello World')}</li>
<li>${t('Pelajari tipe data dasar, variabel, fungsi, control flow', 'Learn basic data types, variables, functions, control flow')}</li>
<li>${t('Pahami slice, map, struct dengan baik — fondasi penting', 'Understand slice, map, struct well — an essential foundation')}</li>
<li>${t('Pelajari interface dan error handling — kunci idiom Go', 'Learn interface and error handling — key Go idioms')}</li>
<li>${t('Kuasai goroutine dan channel — pembeda utama Go', 'Master goroutine and channel — Go&#39;s main differentiator')}</li>
<li>${t('Tulis test dari awal — budaya testing sangat kuat di ekosistem Go', 'Write tests from the start — testing culture is very strong in the Go ecosystem')}</li>
<li>${t('Baca kode open source Go (Docker, Kubernetes source code) untuk belajar idiom nyata', 'Read Go open source code (Docker, Kubernetes source code) to learn real-world idioms')}</li>
</ol>
</div>

</section>
`;

function initGolangAnimations() {
    // ============================================================
    // CANVAS 1: Goroutines — GMP Model Visualization
    // ============================================================
    (function() {
        const canvas = document.getElementById('canvas-goroutines');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        let animId = null;
        let paused = false;
        let tick = 0;

        const colors = {
            bg: '#1e1e2e',
            goroutine: ['#6c5ce7','#a29bfe','#74b9ff','#55efc4','#ffeaa7','#fd79a8','#e17055','#00cec9'],
            processor: '#00b894',
            machine: '#e17055',
            cpu: '#636e72',
            text: '#cdd6f4',
            accent: '#89b4fa',
        };

        const processors = [
            { id: 'P0', x: 200, y: 80 },
            { id: 'P1', x: 400, y: 80 },
            { id: 'P2', x: 600, y: 80 },
        ];

        const machines = [
            { id: 'M0', x: 200, y: 200 },
            { id: 'M1', x: 400, y: 200 },
            { id: 'M2', x: 600, y: 200 },
        ];

        const cpus = [
            { id: 'CPU0', x: 200, y: 300 },
            { id: 'CPU1', x: 400, y: 300 },
            { id: 'CPU2', x: 600, y: 300 },
        ];

        let goroutines = [];
        let gIdCounter = 0;

        function createGoroutine() {
            goroutines.push({
                id: gIdCounter++,
                x: 50 + Math.random() * 20,
                y: 60 + Math.random() * 260,
                targetX: 0,
                targetY: 0,
                color: colors.goroutine[gIdCounter % colors.goroutine.length],
                state: 'runqueue',
                assignedP: -1,
                progress: 0,
                lifetime: 100 + Math.floor(Math.random() * 180),
                radius: 13,
            });
        }

        for (let i = 0; i < 8; i++) createGoroutine();

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

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            // Title
            ctx.fillStyle = colors.accent;
            ctx.font = 'bold 13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Go Runtime: G-M-P Scheduler Model', w / 2, 22);

            // Run Queue label
            ctx.fillStyle = '#89b4fa';
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('Run Queue', 55, 45);
            roundRect(20, 52, 80, 290, 8);
            ctx.strokeStyle = '#89b4fa44';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Processors
            processors.forEach(p => {
                roundRect(p.x - 40, p.y - 30, 80, 55, 8);
                ctx.fillStyle = colors.processor + '33';
                ctx.fill();
                ctx.strokeStyle = colors.processor;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = colors.processor;
                ctx.font = 'bold 12px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(p.id, p.x, p.y);
                ctx.fillStyle = '#cdd6f4';
                ctx.font = '9px monospace';
                ctx.fillText('Processor', p.x, p.y + 14);
            });

            // Machines (OS Threads)
            machines.forEach(m => {
                roundRect(m.x - 38, m.y - 28, 76, 50, 8);
                ctx.fillStyle = colors.machine + '33';
                ctx.fill();
                ctx.strokeStyle = colors.machine;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = colors.machine;
                ctx.font = 'bold 12px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(m.id, m.x, m.y - 4);
                ctx.fillStyle = '#cdd6f4';
                ctx.font = '9px monospace';
                ctx.fillText('OS Thread', m.x, m.y + 10);
            });

            // CPUs
            cpus.forEach(c => {
                roundRect(c.x - 40, c.y - 22, 80, 40, 8);
                ctx.fillStyle = colors.cpu + '55';
                ctx.fill();
                ctx.strokeStyle = colors.cpu;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.fillStyle = '#cdd6f4';
                ctx.font = 'bold 10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(c.id, c.x, c.y + 5);
            });

            // Connections P->M->CPU
            ctx.strokeStyle = '#ffffff22';
            ctx.lineWidth = 1.5;
            processors.forEach((p, i) => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y + 25);
                ctx.lineTo(machines[i].x, machines[i].y - 28);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(machines[i].x, machines[i].y + 22);
                ctx.lineTo(cpus[i].x, cpus[i].y - 22);
                ctx.stroke();
            });

            if (!paused) {
                tick++;

                goroutines.forEach(g => {
                    if (g.state === 'runqueue') {
                        for (let i = 0; i < processors.length; i++) {
                            const running = goroutines.filter(x => x.state === 'running' && x.assignedP === i);
                            if (running.length === 0) {
                                g.state = 'running';
                                g.assignedP = i;
                                g.targetX = processors[i].x;
                                g.targetY = processors[i].y - 48;
                                break;
                            }
                        }
                    }
                    if (g.state === 'running') {
                        g.progress++;
                        if (g.progress >= g.lifetime) {
                            g.state = 'done';
                        }
                    }
                });

                const before = goroutines.length;
                goroutines = goroutines.filter(g => g.state !== 'done');
                const removed = before - goroutines.length;
                for (let i = 0; i < removed; i++) createGoroutine();
            }

            const runQueue = goroutines.filter(g => g.state === 'runqueue');
            runQueue.forEach((g, i) => {
                g.targetX = 57;
                g.targetY = 68 + i * 30;
            });

            goroutines.forEach(g => {
                g.x += (g.targetX - g.x) * 0.1;
                g.y += (g.targetY - g.y) * 0.1;

                ctx.beginPath();
                ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
                ctx.fillStyle = g.color;
                ctx.fill();

                if (g.state === 'running') {
                    const pct = g.progress / g.lifetime;
                    ctx.beginPath();
                    ctx.arc(g.x, g.y, g.radius + 3, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct);
                    ctx.strokeStyle = '#55efc4';
                    ctx.lineWidth = 2.5;
                    ctx.stroke();
                }

                ctx.fillStyle = '#fff';
                ctx.font = 'bold 8px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('G' + g.id, g.x, g.y + 3);
            });

            // Legend
            ctx.font = '10px monospace';
            ctx.textAlign = 'left';
            const legendY = h - 20;
            const items = [
                { color: '#6c5ce7', label: 'G: Goroutine' },
                { color: '#00b894', label: 'P: Processor' },
                { color: '#e17055', label: 'M: OS Thread' },
                { color: '#636e72', label: 'CPU Core' },
            ];
            items.forEach((it, i) => {
                const lx = 90 + i * 175;
                ctx.beginPath();
                ctx.arc(lx, legendY, 5, 0, Math.PI * 2);
                ctx.fillStyle = it.color;
                ctx.fill();
                ctx.fillStyle = '#cdd6f4';
                ctx.fillText(it.label, lx + 9, legendY + 4);
            });

            ctx.fillStyle = '#89b4fa';
            ctx.textAlign = 'right';
            ctx.font = '10px monospace';
            const running = goroutines.filter(g => g.state === 'running').length;
            const queued = goroutines.filter(g => g.state === 'runqueue').length;
            ctx.fillText('Running: ' + running + '  Queued: ' + queued + '  Total: ' + goroutines.length, w - 15, h - 10);

            animId = requestAnimationFrame(draw);
        }

        draw();

        const btnStart = document.getElementById('grBtnStart');
        const btnPause = document.getElementById('grBtnPause');
        const btnReset = document.getElementById('grBtnReset');
        const btnAddG  = document.getElementById('grBtnAddG');

        if (btnStart) btnStart.addEventListener('click', () => { paused = false; });
        if (btnPause) btnPause.addEventListener('click', () => { paused = true; });
        if (btnReset) btnReset.addEventListener('click', () => {
            goroutines = [];
            gIdCounter = 0;
            tick = 0;
            paused = false;
            for (let i = 0; i < 8; i++) createGoroutine();
        });
        if (btnAddG) btnAddG.addEventListener('click', () => {
            for (let i = 0; i < 3; i++) createGoroutine();
        });
    })();

    // ============================================================
    // CANVAS 2: Go Memory Model — Stack vs Heap + GC
    // ============================================================
    (function() {
        const canvas = document.getElementById('canvas-go-memory');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        let animId = null;
        let mode = 'idle';
        let tick = 0;
        let gcPhase = 0;

        const colors = {
            bg: '#1e1e2e',
            stack: '#4a90e2',
            heap: '#27ae60',
            gc: '#e74c3c',
            goroutine: '#9b59b6',
            text: '#cdd6f4',
            accent: '#89b4fa',
            dim: '#45475a',
        };

        const goroutines = [
            { id: 0, stackFrames: [], x: 80,  y: 140, color: '#6c5ce7' },
            { id: 1, stackFrames: [], x: 260, y: 140, color: '#a29bfe' },
            { id: 2, stackFrames: [], x: 440, y: 140, color: '#74b9ff' },
        ];

        const heapObjects = [];
        let heapTick = 0;

        function drawRR(x, y, rw, rh, r, fill, stroke) {
            ctx.beginPath();
            ctx.moveTo(x+r, y);
            ctx.lineTo(x+rw-r, y);
            ctx.quadraticCurveTo(x+rw, y, x+rw, y+r);
            ctx.lineTo(x+rw, y+rh-r);
            ctx.quadraticCurveTo(x+rw, y+rh, x+rw-r, y+rh);
            ctx.lineTo(x+r, y+rh);
            ctx.quadraticCurveTo(x, y+rh, x, y+rh-r);
            ctx.lineTo(x, y+r);
            ctx.quadraticCurveTo(x, y, x+r, y);
            ctx.closePath();
            if (fill) { ctx.fillStyle = fill; ctx.fill(); }
            if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
        }

        function drawBase() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = colors.accent;
            ctx.font = 'bold 13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Go Memory Model: Stack (per Goroutine) vs Heap (GC)', w / 2, 22);

            // Stack section label
            ctx.fillStyle = colors.stack;
            ctx.font = 'bold 11px monospace';
            ctx.fillText('GOROUTINE STACKS', 270, 42);
            drawRR(30, 50, 500, 230, 10, null, colors.stack + '44');
            ctx.strokeStyle = colors.stack + '44';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Heap section label
            ctx.fillStyle = colors.heap;
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('HEAP (Garbage Collected)', 660, 42);
            drawRR(560, 50, 215, 230, 10, null, colors.heap + '44');
            ctx.strokeStyle = colors.heap + '44';
            ctx.stroke();

            // Draw goroutine stacks
            goroutines.forEach(g => {
                ctx.fillStyle = g.color;
                ctx.font = 'bold 10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('G' + g.id + ' Stack', g.x, g.y - 5);
                drawRR(g.x - 55, g.y, 110, 200, 6, g.color + '22', g.color + '88');
            });
        }

        function animStack() {
            mode = 'stack';
            tick = 0;
            goroutines.forEach(g => { g.stackFrames = []; });

            let frame = 0;
            function step() {
                drawBase();
                frame++;

                // Push stack frames per goroutine over time
                goroutines.forEach((g, gi) => {
                    const maxFrames = 3 + gi;
                    const cur = Math.min(Math.floor(frame / 15), maxFrames);
                    const frameLabels = ['main()', 'handleReq()', 'parseJSON()', 'doWork()', 'compute()'];
                    const fh = 30;
                    for (let i = 0; i < cur; i++) {
                        const fy = g.y + 185 - i * (fh + 4);
                        drawRR(g.x - 48, fy - fh + 5, 96, fh, 4, g.color + '55', g.color + 'aa');
                        ctx.fillStyle = colors.text;
                        ctx.font = '9px monospace';
                        ctx.textAlign = 'center';
                        ctx.fillText(frameLabels[i] || 'fn' + i + '()', g.x, fy - fh / 2 + 9);
                    }
                });

                ctx.fillStyle = '#89b4fa';
                ctx.font = '11px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Stack tumbuh per call, shrink per return. Goroutine stack mulai ~2KB, tumbuh otomatis.', w / 2, h - 15);

                if (frame < 60) animId = requestAnimationFrame(step);
            }
            step();
        }

        function animGC() {
            mode = 'gc';
            tick = 0;
            heapObjects.length = 0;

            const objColors = ['#27ae60','#2ecc71','#16a085','#1abc9c'];
            for (let i = 0; i < 12; i++) {
                heapObjects.push({
                    x: 575 + (i % 4) * 48,
                    y: 70 + Math.floor(i / 4) * 55,
                    w: 38, h: 38,
                    alive: Math.random() > 0.4,
                    marked: false,
                    color: objColors[i % objColors.length],
                    label: 'obj' + i,
                });
            }

            let phase = 0;
            let phFrame = 0;
            const phaseLabels = ['Mark Phase: trace reachable objects', 'Sweep Phase: reclaim unreachable', 'Done: memory freed!'];

            function step() {
                drawBase();
                phFrame++;

                if (phFrame > 40 && phase < 2) {
                    phase++;
                    phFrame = 0;
                    if (phase === 1) {
                        heapObjects.forEach(o => { if (o.alive) o.marked = true; });
                    }
                }

                heapObjects.forEach(o => {
                    let fill = o.color + '99';
                    let stroke = o.color;
                    if (phase >= 1 && o.marked) { fill = '#27ae6099'; stroke = '#27ae60'; }
                    if (phase >= 1 && !o.marked) { fill = '#e74c3c33'; stroke = '#e74c3c'; }
                    if (phase >= 2 && !o.alive) { fill = '#45475a33'; stroke = '#45475a'; }
                    drawRR(o.x, o.y, o.w, o.h, 4, fill, stroke);
                    ctx.fillStyle = colors.text;
                    ctx.font = '8px monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(o.label, o.x + o.w / 2, o.y + o.h / 2 + 3);
                    if (phase >= 1 && o.marked) {
                        ctx.fillStyle = '#55efc4';
                        ctx.font = '14px serif';
                        ctx.fillText('\u2713', o.x + o.w - 8, o.y + 14);
                    }
                });

                // Phase label
                ctx.fillStyle = phase === 2 ? '#55efc4' : '#ffeaa7';
                ctx.font = 'bold 11px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('GC: ' + phaseLabels[phase], w / 2, h - 15);

                if (phFrame < 45 || phase < 2) animId = requestAnimationFrame(step);
            }
            step();
        }

        drawBase();
        ctx.fillStyle = colors.dim;
        ctx.font = '11px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Pilih animasi: Stack atau Heap GC', w / 2, h - 15);

        const btnStack = document.getElementById('memBtnStack');
        const btnHeap  = document.getElementById('memBtnHeap');
        const btnReset = document.getElementById('memBtnReset');

        if (btnStack) btnStack.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            animStack();
        });
        if (btnHeap) btnHeap.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            animGC();
        });
        if (btnReset) btnReset.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            drawBase();
            ctx.fillStyle = colors.dim;
            ctx.font = '11px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Pilih animasi: Stack atau Heap GC', w / 2, h - 15);
        });
    })();

    // ============================================================
    // CANVAS 3: Channel Communication Animation
    // ============================================================
    (function() {
        const canvas = document.getElementById('canvas-go-channels');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        let animId = null;
        let mode = 'unbuffered';
        let tick = 0;
        let particles = [];
        let bufferSlots = [];
        let senderState = 'idle';
        let receiverState = 'idle';

        const colors = {
            bg: '#1e1e2e',
            sender: '#6c5ce7',
            receiver: '#00b894',
            channel: '#89b4fa',
            particle: '#ffeaa7',
            text: '#cdd6f4',
            accent: '#89b4fa',
            blocked: '#e17055',
            active: '#55efc4',
        };

        function drawRR(x, y, rw, rh, r, fill, stroke) {
            ctx.beginPath();
            ctx.moveTo(x+r,y); ctx.lineTo(x+rw-r,y);
            ctx.quadraticCurveTo(x+rw,y,x+rw,y+r); ctx.lineTo(x+rw,y+rh-r);
            ctx.quadraticCurveTo(x+rw,y+rh,x+rw-r,y+rh); ctx.lineTo(x+r,y+rh);
            ctx.quadraticCurveTo(x,y+rh,x,y+rh-r); ctx.lineTo(x,y+r);
            ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
            if (fill) { ctx.fillStyle = fill; ctx.fill(); }
            if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
        }

        function setupUnbuffered() {
            mode = 'unbuffered';
            tick = 0;
            particles = [];
            bufferSlots = [];
            senderState = 'sending';
            receiverState = 'waiting';
        }

        function setupBuffered() {
            mode = 'buffered';
            tick = 0;
            particles = [];
            bufferSlots = [
                { x: 310, y: 115, filled: false, val: null },
                { x: 360, y: 115, filled: false, val: null },
                { x: 410, y: 115, filled: false, val: null },
            ];
            senderState = 'sending';
            receiverState = 'waiting';
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(0, 0, w, h);

            const title = mode === 'unbuffered' ? 'Unbuffered Channel: make(chan int)' : 'Buffered Channel: make(chan int, 3)';
            ctx.fillStyle = colors.accent;
            ctx.font = 'bold 13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(title, w / 2, 25);

            // Sender goroutine
            const sColor = senderState === 'blocked' ? colors.blocked : senderState === 'done' ? colors.active : colors.sender;
            drawRR(40, 80, 120, 120, 10, sColor + '33', sColor);
            ctx.fillStyle = sColor;
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('Sender', 100, 130);
            ctx.fillStyle = colors.text;
            ctx.font = '10px monospace';
            ctx.fillText('Goroutine', 100, 147);
            ctx.font = '9px monospace';
            ctx.fillText(senderState, 100, 165);

            // Receiver goroutine
            const rColor = receiverState === 'blocked' ? colors.blocked : receiverState === 'received' ? colors.active : colors.receiver;
            drawRR(640, 80, 120, 120, 10, rColor + '33', rColor);
            ctx.fillStyle = rColor;
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('Receiver', 700, 130);
            ctx.fillStyle = colors.text;
            ctx.font = '10px monospace';
            ctx.fillText('Goroutine', 700, 147);
            ctx.font = '9px monospace';
            ctx.fillText(receiverState, 700, 165);

            // Channel pipe
            const chX = 200, chY = 115, chW = 400, chH = 50;
            drawRR(chX, chY, chW, chH, 8, colors.channel + '22', colors.channel);
            ctx.fillStyle = colors.channel;
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(mode === 'unbuffered' ? 'chan int (no buffer)' : 'chan int (buf: 3)', w / 2, chY + 28);

            // Buffer slots for buffered
            if (mode === 'buffered' && bufferSlots.length) {
                bufferSlots.forEach(slot => {
                    const fill = slot.filled ? colors.particle + 'cc' : '#45475a55';
                    const stroke = slot.filled ? colors.particle : '#636e72';
                    drawRR(slot.x, slot.y, 40, 40, 6, fill, stroke);
                    if (slot.filled) {
                        ctx.fillStyle = '#1e1e2e';
                        ctx.font = 'bold 11px monospace';
                        ctx.textAlign = 'center';
                        ctx.fillText(String(slot.val), slot.x + 20, slot.y + 25);
                    }
                });
            }

            // Particles (messages in transit)
            particles.forEach((p, i) => {
                p.x += (p.targetX - p.x) * 0.08;
                p.y += (p.targetY - p.y) * 0.08;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = colors.particle;
                ctx.fill();
                ctx.fillStyle = '#1e1e2e';
                ctx.font = 'bold 9px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(String(p.val), p.x, p.y + 3);
            });

            // Animation logic
            tick++;

            if (mode === 'unbuffered') {
                // Phase 1: sender tries to send
                if (tick === 20) {
                    particles.push({ x: 160, y: 140, targetX: 400, targetY: 140, val: 42, radius: 14, sent: false });
                    senderState = 'blocked';
                    receiverState = 'waiting';
                }
                // Phase 2: receiver picks up
                if (tick === 60) {
                    receiverState = 'receiving';
                }
                if (tick === 80 && particles.length > 0) {
                    particles[0].targetX = 640;
                    particles[0].targetY = 140;
                }
                if (tick === 110 && particles.length > 0) {
                    particles = [];
                    senderState = 'done';
                    receiverState = 'received';
                }
                if (tick > 150) {
                    setupUnbuffered();
                }

                // Status messages
                const msgs = {
                    idle: 'Klik "Unbuffered" untuk mulai',
                    sending: 'Mengirim 42...',
                    blocked: 'BLOCKED: menunggu receiver',
                    done: 'Selesai mengirim',
                };
                const rmsgs = {
                    waiting: 'Menunggu data...',
                    receiving: 'Menerima...',
                    received: 'Diterima: 42',
                    idle: '',
                };
                ctx.fillStyle = senderState === 'blocked' ? colors.blocked : '#cdd6f4';
                ctx.font = '10px Inter';
                ctx.textAlign = 'center';
                ctx.fillText(msgs[senderState] || '', 100, 215);
                ctx.fillStyle = receiverState === 'received' ? colors.active : '#cdd6f4';
                ctx.fillText(rmsgs[receiverState] || '', 700, 215);

                // Key insight
                ctx.fillStyle = '#ffeaa7';
                ctx.font = '11px Inter';
                ctx.textAlign = 'center';
                ctx.fillText('Unbuffered: Sender BLOCK sampai receiver siap (sinkronisasi ketat)', w / 2, h - 20);

            } else { // buffered
                // Fill buffer slots one by one
                if (tick === 20 && bufferSlots.length) {
                    particles.push({ x: 160, y: 140, targetX: bufferSlots[0].x + 20, targetY: bufferSlots[0].y + 20, val: 1, radius: 12, slotIdx: 0 });
                }
                if (tick === 40 && bufferSlots.length) {
                    particles.push({ x: 160, y: 140, targetX: bufferSlots[1].x + 20, targetY: bufferSlots[1].y + 20, val: 2, radius: 12, slotIdx: 1 });
                    if (!bufferSlots[0].filled) { bufferSlots[0].filled = true; bufferSlots[0].val = 1; }
                }
                if (tick === 60 && bufferSlots.length) {
                    particles.push({ x: 160, y: 140, targetX: bufferSlots[2].x + 20, targetY: bufferSlots[2].y + 20, val: 3, radius: 12, slotIdx: 2 });
                    if (!bufferSlots[1].filled) { bufferSlots[1].filled = true; bufferSlots[1].val = 2; }
                }
                if (tick === 80 && bufferSlots.length) {
                    if (!bufferSlots[2].filled) { bufferSlots[2].filled = true; bufferSlots[2].val = 3; }
                    particles = [];
                    senderState = 'buffer full';
                }
                // Receiver reads
                if (tick === 100) {
                    receiverState = 'reading...';
                    particles.push({ x: bufferSlots[0].x + 20, y: bufferSlots[0].y + 20, targetX: 640, targetY: 140, val: 1, radius: 12 });
                    if (bufferSlots[0]) { bufferSlots[0].filled = false; }
                }
                if (tick === 130) {
                    particles = [];
                    receiverState = 'received 1';
                }
                if (tick > 170) {
                    setupBuffered();
                }

                ctx.fillStyle = senderState === 'buffer full' ? colors.blocked : '#cdd6f4';
                ctx.font = '10px Inter';
                ctx.textAlign = 'center';
                ctx.fillText(senderState, 100, 215);
                ctx.fillStyle = receiverState === 'received 1' ? colors.active : '#cdd6f4';
                ctx.fillText(receiverState, 700, 215);

                ctx.fillStyle = '#ffeaa7';
                ctx.font = '11px Inter';
                ctx.textAlign = 'center';
                ctx.fillText('Buffered: Sender tidak block sampai buffer penuh (' + bufferSlots.filter(s => s.filled).length + '/3 terisi)', w / 2, h - 20);
            }

            animId = requestAnimationFrame(draw);
        }

        setupUnbuffered();
        draw();

        const btnUnbuf = document.getElementById('chBtnUnbuffered');
        const btnBuf   = document.getElementById('chBtnBuffered');
        const btnReset = document.getElementById('chBtnReset');

        if (btnUnbuf) btnUnbuf.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            setupUnbuffered();
            draw();
        });
        if (btnBuf) btnBuf.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            setupBuffered();
            draw();
        });
        if (btnReset) btnReset.addEventListener('click', () => {
            if (animId) cancelAnimationFrame(animId);
            if (mode === 'buffered') setupBuffered(); else setupUnbuffered();
            draw();
        });
    })();

    // ============================================================
    // TAB INITIALIZATION
    // ============================================================
    document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const parent = this.closest('.card, .tabs-container');
            if (!parent) return;
            const tabGroup = this.closest('.tabs');
            if (!tabGroup) return;
            const section = tabGroup.nextElementSibling;

            tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            let el = section;
            while (el) {
                if (el.hasAttribute('data-tab-content')) {
                    el.classList.remove('active');
                    el.style.display = 'none';
                }
                el = el.nextElementSibling;
            }

            const target = document.querySelector('[data-tab-content="' + tabId + '"]');
            if (target) {
                target.classList.add('active');
                target.style.display = '';
            }
        });
    });

    // Ensure first tab content is visible in each group
    document.querySelectorAll('.tabs').forEach(tabsEl => {
        const activeBtn = tabsEl.querySelector('.tab-btn.active');
        if (activeBtn) {
            const tabId = activeBtn.getAttribute('data-tab');
            let el = tabsEl.nextElementSibling;
            while (el) {
                if (el.hasAttribute('data-tab-content')) {
                    const isActive = el.getAttribute('data-tab-content') === tabId;
                    el.style.display = isActive ? '' : 'none';
                    if (isActive) el.classList.add('active');
                    else el.classList.remove('active');
                }
                el = el.nextElementSibling;
            }
        }
    });
}

if (typeof initSectionAnimations === 'function') {
    const _origInit = initSectionAnimations;
    initSectionAnimations = function(sectionId) {
        _origInit(sectionId);
        if (sectionId === 'lang-golang') initGolangAnimations();
    };
} else {
    document.addEventListener('DOMContentLoaded', function() {
        const obs = new MutationObserver(function() {
            if (document.getElementById('canvas-goroutines')) {
                initGolangAnimations();
                obs.disconnect();
            }
        });
        obs.observe(document.body, { childList: true, subtree: true });
    });
}
