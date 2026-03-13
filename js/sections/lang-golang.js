// ====================== GOLANG DEEP DIVE ======================
sections['lang-golang'] = () => `
<h1 class="section-title animate-in">Golang Deep Dive</h1>
<p class="section-subtitle animate-in">Panduan komprehensif bahasa Go — dari dasar hingga REST API, Concurrency & FFI</p>

<!-- ============ BAB 1: PENGENALAN GO ============ -->
<h2 class="animate-in">1. Pengenalan Go</h2>

<div class="card animate-in">
<h3>Sejarah & Filosofi Go</h3>
<p>Go (atau Golang) diciptakan di <strong>Google pada tahun 2007</strong> oleh <strong>Robert Griesemer, Rob Pike, dan Ken Thompson</strong>. Bahasa ini dirilis sebagai open source pada November 2009. Go lahir dari frustrasi para penciptanya terhadap kompleksitas bahasa-bahasa yang ada seperti C++ dan Java saat membangun sistem berskala besar di Google.</p>

<div class="info-box">
<strong>Filosofi Go:</strong> Simplicity, readability, dan productivity. Go sengaja menghilangkan fitur-fitur yang dianggap menambah kompleksitas: tidak ada inheritance, tidak ada generics (hingga Go 1.18), tidak ada exception tradisional, dan tidak ada operator overloading.
</div>

<h4>Mengapa Go?</h4>
<ul>
<li><strong>Kompilasi cepat</strong> — Go mengkompilasi seluruh project dalam hitungan detik</li>
<li><strong>Concurrency built-in</strong> — Goroutine dan channel menjadi first-class citizen</li>
<li><strong>Static typing dengan type inference</strong> — Aman dan ringkas</li>
<li><strong>Single binary</strong> — Tidak butuh runtime/VM, deploy sangat mudah</li>
<li><strong>Garbage collected</strong> — Tidak perlu manual memory management</li>
<li><strong>Standard library yang kaya</strong> — HTTP server, JSON, crypto, dll built-in</li>
</ul>
</div>

<div class="card animate-in">
<h3>Use Cases Go</h3>
<div class="card-grid-3">
<div class="card">
<h4><span class="badge-blue">Cloud & DevOps</span></h4>
<p>Docker, Kubernetes, Terraform, Prometheus — semua ditulis dalam Go. Go adalah bahasa utama cloud-native development.</p>
</div>
<div class="card">
<h4><span class="badge-green">Microservices</span></h4>
<p>Performa tinggi, binary kecil, startup cepat — ideal untuk microservices dan containerized apps.</p>
</div>
<div class="card">
<h4><span class="badge-purple">CLI Tools</span></h4>
<p>Single binary tanpa dependencies. Tools seperti gh (GitHub CLI), cobra, dan hugo dibuat dengan Go.</p>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Instalasi Go</h3>
<div class="code-block"><span class="cm">// Download dari https://go.dev/dl/</span>
<span class="cm">// Linux/macOS:</span>
<span class="fn">wget</span> https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
<span class="fn">sudo</span> tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
<span class="fn">export</span> PATH=<span class="str">$PATH:/usr/local/go/bin</span>

<span class="cm">// Verifikasi instalasi</span>
<span class="fn">go</span> version
<span class="cm">// go version go1.22.0 linux/amd64</span>

<span class="cm">// Inisialisasi project baru</span>
<span class="fn">mkdir</span> myproject && <span class="fn">cd</span> myproject
<span class="fn">go</span> mod init github.com/user/myproject</div>
</div>

<div class="card animate-in">
<h3>Hello World</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    fmt.<span class="fn">Println</span>(<span class="str">"Hello, World!"</span>)
    fmt.<span class="fn">Println</span>(<span class="str">"Selamat datang di Go!"</span>)
}

<span class="cm">// Jalankan: go run main.go</span>
<span class="cm">// Build:   go build -o myapp main.go</span>
<span class="cm">// Run:     ./myapp</span></div>

<div class="info-box">
<strong>Penjelasan:</strong>
<ul>
<li><code>package main</code> — setiap executable Go harus memiliki package main</li>
<li><code>import "fmt"</code> — mengimpor package formatting dari standard library</li>
<li><code>func main()</code> — entry point program, dipanggil otomatis saat program dijalankan</li>
</ul>
</div>
</div>

<!-- ============ BAB 2: VARIABEL & KONSTANTA ============ -->
<h2 class="animate-in">2. Variabel & Konstanta</h2>

<div class="card animate-in">
<h3>Deklarasi Variabel</h3>
<p>Go memiliki beberapa cara mendeklarasikan variabel. Setiap variabel harus digunakan — jika tidak, compiler akan error.</p>

<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// 1. Deklarasi dengan var + tipe eksplisit</span>
    <span class="kw">var</span> nama <span class="type">string</span> = <span class="str">"Tazkia"</span>
    <span class="kw">var</span> umur <span class="type">int</span> = <span class="num">25</span>

    <span class="cm">// 2. Deklarasi dengan var + type inference</span>
    <span class="kw">var</span> tinggi = <span class="num">170.5</span>  <span class="cm">// otomatis float64</span>
    <span class="kw">var</span> aktif = <span class="num">true</span>    <span class="cm">// otomatis bool</span>

    <span class="cm">// 3. Short declaration := (HANYA di dalam fungsi)</span>
    kota := <span class="str">"Jakarta"</span>       <span class="cm">// otomatis string</span>
    skor := <span class="num">99.5</span>             <span class="cm">// otomatis float64</span>

    <span class="cm">// 4. Deklarasi multiple variabel</span>
    <span class="kw">var</span> (
        x <span class="type">int</span>    = <span class="num">10</span>
        y <span class="type">int</span>    = <span class="num">20</span>
        z <span class="type">string</span> = <span class="str">"hello"</span>
    )

    <span class="cm">// 5. Multiple short declaration</span>
    a, b, c := <span class="num">1</span>, <span class="num">2</span>, <span class="str">"tiga"</span>

    fmt.<span class="fn">Println</span>(nama, umur, tinggi, aktif)
    fmt.<span class="fn">Println</span>(kota, skor)
    fmt.<span class="fn">Println</span>(x, y, z)
    fmt.<span class="fn">Println</span>(a, b, c)
}</div>

<div class="warn-box">
<strong>Perbedaan var vs :=</strong><br>
<code>var</code> bisa digunakan di level package (global) maupun fungsi.<br>
<code>:=</code> hanya bisa digunakan di dalam fungsi. Ini adalah shorthand yang paling sering dipakai.
</div>
</div>

<div class="card animate-in">
<h3>Zero Values</h3>
<p>Di Go, variabel yang dideklarasikan tanpa nilai awal akan mendapat <strong>zero value</strong> sesuai tipenya.</p>

<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="kw">var</span> i <span class="type">int</span>        <span class="cm">// 0</span>
    <span class="kw">var</span> f <span class="type">float64</span>    <span class="cm">// 0.0</span>
    <span class="kw">var</span> b <span class="type">bool</span>       <span class="cm">// false</span>
    <span class="kw">var</span> s <span class="type">string</span>     <span class="cm">// "" (string kosong)</span>
    <span class="kw">var</span> p *<span class="type">int</span>       <span class="cm">// nil</span>
    <span class="kw">var</span> sl []<span class="type">int</span>     <span class="cm">// nil (slice kosong)</span>
    <span class="kw">var</span> m <span class="kw">map</span>[<span class="type">string</span>]<span class="type">int</span>  <span class="cm">// nil</span>

    fmt.<span class="fn">Printf</span>(<span class="str">"int: %d, float: %f, bool: %t\\n"</span>, i, f, b)
    fmt.<span class="fn">Printf</span>(<span class="str">"string: %q, pointer: %v\\n"</span>, s, p)
    fmt.<span class="fn">Printf</span>(<span class="str">"slice: %v, map: %v\\n"</span>, sl, m)
}</div>

<div class="table-wrapper">
<table>
<tr><th>Tipe</th><th>Zero Value</th></tr>
<tr><td>int, int8, int16, int32, int64</td><td><code>0</code></td></tr>
<tr><td>float32, float64</td><td><code>0.0</code></td></tr>
<tr><td>bool</td><td><code>false</code></td></tr>
<tr><td>string</td><td><code>""</code> (empty string)</td></tr>
<tr><td>pointer, slice, map, channel, func, interface</td><td><code>nil</code></td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Konstanta & Iota</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// Konstanta sederhana</span>
<span class="kw">const</span> Pi = <span class="num">3.14159</span>
<span class="kw">const</span> AppName = <span class="str">"MyApp"</span>

<span class="cm">// Konstanta group</span>
<span class="kw">const</span> (
    StatusActive   = <span class="num">1</span>
    StatusInactive = <span class="num">2</span>
    StatusBanned   = <span class="num">3</span>
)

<span class="cm">// iota — auto-increment enumerator</span>
<span class="kw">type</span> <span class="type">Weekday</span> <span class="type">int</span>

<span class="kw">const</span> (
    Sunday    <span class="type">Weekday</span> = <span class="kw">iota</span>  <span class="cm">// 0</span>
    Monday                       <span class="cm">// 1</span>
    Tuesday                      <span class="cm">// 2</span>
    Wednesday                    <span class="cm">// 3</span>
    Thursday                     <span class="cm">// 4</span>
    Friday                       <span class="cm">// 5</span>
    Saturday                     <span class="cm">// 6</span>
)

<span class="cm">// iota dengan ekspresi — bit flags</span>
<span class="kw">const</span> (
    Read    = <span class="num">1</span> << <span class="kw">iota</span>  <span class="cm">// 1  (1 << 0)</span>
    Write                     <span class="cm">// 2  (1 << 1)</span>
    Execute                   <span class="cm">// 4  (1 << 2)</span>
)

<span class="cm">// iota skip dengan blank identifier</span>
<span class="kw">const</span> (
    _  = <span class="kw">iota</span>              <span class="cm">// 0 (skip)</span>
    KB = <span class="num">1</span> << (<span class="num">10</span> * <span class="kw">iota</span>) <span class="cm">// 1 << 10 = 1024</span>
    MB                        <span class="cm">// 1 << 20 = 1048576</span>
    GB                        <span class="cm">// 1 << 30</span>
    TB                        <span class="cm">// 1 << 40</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    fmt.<span class="fn">Println</span>(<span class="str">"Pi:"</span>, Pi)
    fmt.<span class="fn">Println</span>(<span class="str">"Monday:"</span>, Monday)
    fmt.<span class="fn">Println</span>(<span class="str">"Permissions:"</span>, Read|Write) <span class="cm">// 3</span>
    fmt.<span class="fn">Println</span>(<span class="str">"1 KB ="</span>, KB, <span class="str">"bytes"</span>)
    fmt.<span class="fn">Println</span>(<span class="str">"1 MB ="</span>, MB, <span class="str">"bytes"</span>)
}</div>
</div>

<!-- ============ BAB 3: TIPE DATA ============ -->
<h2 class="animate-in">3. Tipe Data</h2>

<div class="card animate-in">
<h3>Tipe Data Dasar</h3>
<div class="table-wrapper">
<table>
<tr><th>Kategori</th><th>Tipe</th><th>Ukuran</th><th>Keterangan</th></tr>
<tr><td>Integer</td><td>int8, int16, int32, int64</td><td>1-8 bytes</td><td>Signed integer</td></tr>
<tr><td>Unsigned</td><td>uint8, uint16, uint32, uint64</td><td>1-8 bytes</td><td>Unsigned integer</td></tr>
<tr><td>Platform</td><td>int, uint</td><td>4/8 bytes</td><td>Sesuai arsitektur (32/64 bit)</td></tr>
<tr><td>Float</td><td>float32, float64</td><td>4/8 bytes</td><td>IEEE 754</td></tr>
<tr><td>Complex</td><td>complex64, complex128</td><td>8/16 bytes</td><td>Bilangan kompleks</td></tr>
<tr><td>Boolean</td><td>bool</td><td>1 byte</td><td>true / false</td></tr>
<tr><td>String</td><td>string</td><td>varies</td><td>UTF-8 encoded, immutable</td></tr>
<tr><td>Byte</td><td>byte (alias uint8)</td><td>1 byte</td><td>Untuk data mentah</td></tr>
<tr><td>Rune</td><td>rune (alias int32)</td><td>4 bytes</td><td>Unicode code point</td></tr>
</table>
</div>

<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// String & Rune</span>
    s := <span class="str">"Hello, Dunia! 🌍"</span>
    fmt.<span class="fn">Println</span>(<span class="str">"len (bytes):"</span>, <span class="fn">len</span>(s))          <span class="cm">// byte count</span>

    <span class="cm">// Iterasi per rune (karakter Unicode)</span>
    <span class="kw">for</span> i, r := <span class="kw">range</span> s {
        fmt.<span class="fn">Printf</span>(<span class="str">"index=%d rune=%c\\n"</span>, i, r)
    }

    <span class="cm">// byte vs rune</span>
    <span class="kw">var</span> b <span class="type">byte</span> = <span class="str">'A'</span>       <span class="cm">// 65</span>
    <span class="kw">var</span> r <span class="type">rune</span> = <span class="str">'🌍'</span>     <span class="cm">// 127757</span>
    fmt.<span class="fn">Printf</span>(<span class="str">"byte: %d, rune: %d\\n"</span>, b, r)
}</div>
</div>

<div class="card animate-in">
<h3>Array & Slice</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// === ARRAY (fixed size) ===</span>
    <span class="kw">var</span> arr [<span class="num">5</span>]<span class="type">int</span>                    <span class="cm">// [0 0 0 0 0]</span>
    arr[<span class="num">0</span>] = <span class="num">10</span>
    arr[<span class="num">1</span>] = <span class="num">20</span>

    nums := [<span class="num">3</span>]<span class="type">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}           <span class="cm">// literal</span>
    auto := [...]<span class="type">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>}  <span class="cm">// compiler hitung size</span>

    fmt.<span class="fn">Println</span>(arr, nums, auto)

    <span class="cm">// === SLICE (dynamic, backed by array) ===</span>
    sl := []<span class="type">int</span>{<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}              <span class="cm">// slice literal</span>
    sl = <span class="fn">append</span>(sl, <span class="num">4</span>, <span class="num">5</span>)             <span class="cm">// [1 2 3 4 5]</span>

    <span class="cm">// make(type, length, capacity)</span>
    s2 := <span class="fn">make</span>([]<span class="type">int</span>, <span class="num">3</span>, <span class="num">10</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"len=%d cap=%d %v\\n"</span>, <span class="fn">len</span>(s2), <span class="fn">cap</span>(s2), s2)

    <span class="cm">// Slicing</span>
    data := []<span class="type">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>}
    sub := data[<span class="num">1</span>:<span class="num">4</span>]                   <span class="cm">// [20 30 40]</span>
    fmt.<span class="fn">Println</span>(<span class="str">"sub:"</span>, sub)

    <span class="cm">// Copy slice</span>
    dst := <span class="fn">make</span>([]<span class="type">int</span>, <span class="fn">len</span>(data))
    <span class="fn">copy</span>(dst, data)

    <span class="cm">// Delete element at index 2</span>
    idx := <span class="num">2</span>
    data = <span class="fn">append</span>(data[:idx], data[idx+<span class="num">1</span>:]...)
    fmt.<span class="fn">Println</span>(<span class="str">"after delete:"</span>, data)
}</div>

<div class="info-box">
<strong>Slice vs Array:</strong> Array memiliki ukuran tetap dan merupakan value type (di-copy saat di-assign). Slice adalah reference type yang menunjuk ke underlying array, memiliki length dan capacity, dan bisa grow secara dinamis dengan <code>append()</code>.
</div>
</div>

<div class="card animate-in">
<h3>Map</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Membuat map</span>
    m := <span class="kw">map</span>[<span class="type">string</span>]<span class="type">int</span>{
        <span class="str">"alice"</span>: <span class="num">90</span>,
        <span class="str">"bob"</span>:   <span class="num">85</span>,
        <span class="str">"charlie"</span>: <span class="num">92</span>,
    }

    <span class="cm">// Akses & set</span>
    m[<span class="str">"dave"</span>] = <span class="num">88</span>
    fmt.<span class="fn">Println</span>(<span class="str">"alice:"</span>, m[<span class="str">"alice"</span>])

    <span class="cm">// Cek key exists (comma ok idiom)</span>
    val, ok := m[<span class="str">"eve"</span>]
    <span class="kw">if</span> ok {
        fmt.<span class="fn">Println</span>(<span class="str">"eve:"</span>, val)
    } <span class="kw">else</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"eve tidak ditemukan"</span>)
    }

    <span class="cm">// Delete</span>
    <span class="fn">delete</span>(m, <span class="str">"bob"</span>)

    <span class="cm">// Iterasi</span>
    <span class="kw">for</span> key, value := <span class="kw">range</span> m {
        fmt.<span class="fn">Printf</span>(<span class="str">"%s: %d\\n"</span>, key, value)
    }

    <span class="cm">// Map dengan make</span>
    m2 := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">string</span>][]<span class="type">string</span>) <span class="cm">// map of string slices</span>
    m2[<span class="str">"fruits"</span>] = []<span class="type">string</span>{<span class="str">"apple"</span>, <span class="str">"banana"</span>}
    m2[<span class="str">"vegs"</span>] = []<span class="type">string</span>{<span class="str">"carrot"</span>}
    fmt.<span class="fn">Println</span>(m2)
}</div>
</div>

<div class="card animate-in">
<h3>Pointer</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    x := <span class="num">42</span>
    p := &x              <span class="cm">// p adalah pointer ke x</span>
    fmt.<span class="fn">Println</span>(<span class="str">"value:"</span>, *p)   <span class="cm">// dereference: 42</span>
    fmt.<span class="fn">Println</span>(<span class="str">"addr:"</span>, p)    <span class="cm">// alamat memori</span>

    *p = <span class="num">100</span>             <span class="cm">// ubah nilai via pointer</span>
    fmt.<span class="fn">Println</span>(<span class="str">"x:"</span>, x)    <span class="cm">// 100</span>

    <span class="cm">// Pointer to struct</span>
    <span class="kw">type</span> <span class="type">Point</span> <span class="kw">struct</span> { X, Y <span class="type">int</span> }
    pt := &<span class="type">Point</span>{<span class="num">10</span>, <span class="num">20</span>}
    pt.X = <span class="num">30</span>            <span class="cm">// Go auto-dereference untuk struct</span>
    fmt.<span class="fn">Println</span>(*pt)      <span class="cm">// {30 20}</span>

    <span class="cm">// new() — mengalokasikan dan return pointer</span>
    n := <span class="fn">new</span>(<span class="type">int</span>)        <span class="cm">// *int, zero value = 0</span>
    *n = <span class="num">77</span>
    fmt.<span class="fn">Println</span>(*n)      <span class="cm">// 77</span>
}

<span class="cm">// Fungsi dengan pointer parameter</span>
<span class="kw">func</span> <span class="fn">increment</span>(val *<span class="type">int</span>) {
    *val++
}

<span class="cm">// Penggunaan:</span>
<span class="cm">// x := 5</span>
<span class="cm">// increment(&x)  // x sekarang 6</span></div>

<div class="warn-box">
<strong>Go tidak memiliki pointer arithmetic!</strong> Berbeda dengan C/C++, Anda tidak bisa melakukan <code>p++</code> atau <code>p + 4</code> pada pointer di Go. Ini membuat Go lebih aman dari bug memory.
</div>
</div>

<div class="card animate-in">
<h3>Type Conversion</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Go TIDAK melakukan implicit conversion</span>
    <span class="kw">var</span> i <span class="type">int</span> = <span class="num">42</span>
    <span class="kw">var</span> f <span class="type">float64</span> = <span class="type">float64</span>(i)    <span class="cm">// explicit conversion</span>
    <span class="kw">var</span> u <span class="type">uint</span> = <span class="type">uint</span>(f)         <span class="cm">// float64 → uint</span>

    <span class="cm">// String ↔ []byte</span>
    s := <span class="str">"hello"</span>
    b := []<span class="type">byte</span>(s)              <span class="cm">// string → byte slice</span>
    s2 := <span class="type">string</span>(b)              <span class="cm">// byte slice → string</span>

    <span class="cm">// String ↔ int (strconv package)</span>
    <span class="kw">import</span> <span class="str">"strconv"</span>
    num, err := strconv.<span class="fn">Atoi</span>(<span class="str">"123"</span>)     <span class="cm">// string → int</span>
    str := strconv.<span class="fn">Itoa</span>(<span class="num">456</span>)              <span class="cm">// int → string</span>

    fmt.<span class="fn">Println</span>(i, f, u, s, b, s2, num, err, str)
}</div>
</div>

<!-- ============ BAB 4: PRINT & LOGGING ============ -->
<h2 class="animate-in">4. Print & Logging</h2>

<div class="card animate-in">
<h3>Package fmt</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    Name <span class="type">string</span>
    Age  <span class="type">int</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    u := <span class="type">User</span>{<span class="str">"Alice"</span>, <span class="num">30</span>}

    <span class="cm">// Print functions</span>
    fmt.<span class="fn">Print</span>(<span class="str">"no newline"</span>)
    fmt.<span class="fn">Println</span>(<span class="str">"with newline"</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"formatted: %s is %d\\n"</span>, u.Name, u.Age)

    <span class="cm">// Sprintf — return string, tidak print</span>
    s := fmt.<span class="fn">Sprintf</span>(<span class="str">"User: %s (%d)"</span>, u.Name, u.Age)
    fmt.<span class="fn">Println</span>(s)

    <span class="cm">// Fprintf — write ke io.Writer</span>
    fmt.<span class="fn">Fprintf</span>(os.Stderr, <span class="str">"error: %s\\n"</span>, <span class="str">"something wrong"</span>)
}</div>

<h4>Format Verbs</h4>
<div class="table-wrapper">
<table>
<tr><th>Verb</th><th>Deskripsi</th><th>Contoh Output</th></tr>
<tr><td><code>%v</code></td><td>Default format</td><td><code>{Alice 30}</code></td></tr>
<tr><td><code>%+v</code></td><td>Struct dengan field names</td><td><code>{Name:Alice Age:30}</code></td></tr>
<tr><td><code>%#v</code></td><td>Go syntax representation</td><td><code>main.User{Name:"Alice", Age:30}</code></td></tr>
<tr><td><code>%T</code></td><td>Tipe data</td><td><code>main.User</code></td></tr>
<tr><td><code>%d</code></td><td>Integer desimal</td><td><code>42</code></td></tr>
<tr><td><code>%b</code></td><td>Binary</td><td><code>101010</code></td></tr>
<tr><td><code>%x</code></td><td>Hexadecimal</td><td><code>2a</code></td></tr>
<tr><td><code>%o</code></td><td>Octal</td><td><code>52</code></td></tr>
<tr><td><code>%f</code></td><td>Float</td><td><code>3.141593</code></td></tr>
<tr><td><code>%.2f</code></td><td>Float 2 desimal</td><td><code>3.14</code></td></tr>
<tr><td><code>%e</code></td><td>Scientific notation</td><td><code>3.141593e+00</code></td></tr>
<tr><td><code>%s</code></td><td>String</td><td><code>Alice</code></td></tr>
<tr><td><code>%q</code></td><td>Quoted string</td><td><code>"Alice"</code></td></tr>
<tr><td><code>%p</code></td><td>Pointer</td><td><code>0xc0000b4000</code></td></tr>
<tr><td><code>%t</code></td><td>Boolean</td><td><code>true</code></td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Package log</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"log"</span>
    <span class="str">"os"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Default logger — prefix dengan timestamp</span>
    log.<span class="fn">Println</span>(<span class="str">"Server started"</span>)
    <span class="cm">// 2024/01/15 10:30:45 Server started</span>

    <span class="cm">// Custom logger</span>
    logger := log.<span class="fn">New</span>(os.Stdout, <span class="str">"[APP] "</span>, log.Ldate|log.Ltime|log.Lshortfile)
    logger.<span class="fn">Println</span>(<span class="str">"Custom log message"</span>)
    <span class="cm">// [APP] 2024/01/15 10:30:45 main.go:15: Custom log message</span>

    <span class="cm">// Log ke file</span>
    f, err := os.<span class="fn">OpenFile</span>(<span class="str">"app.log"</span>, os.O_APPEND|os.O_CREATE|os.O_WRONLY, <span class="num">0644</span>)
    <span class="kw">if</span> err != <span class="num">nil</span> {
        log.<span class="fn">Fatal</span>(err)
    }
    <span class="kw">defer</span> f.<span class="fn">Close</span>()
    log.<span class="fn">SetOutput</span>(f)
    log.<span class="fn">Println</span>(<span class="str">"Logged to file"</span>)

    <span class="cm">// log.Fatal — log + os.Exit(1)</span>
    <span class="cm">// log.Panic — log + panic()</span>
}</div>
</div>

<!-- ============ BAB 5: CONTROL FLOW ============ -->
<h2 class="animate-in">5. Control Flow</h2>

<div class="card animate-in">
<h3>If / Else</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    x := <span class="num">42</span>

    <span class="cm">// Standard if/else</span>
    <span class="kw">if</span> x > <span class="num">50</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"besar"</span>)
    } <span class="kw">else if</span> x > <span class="num">20</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"sedang"</span>)
    } <span class="kw">else</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"kecil"</span>)
    }

    <span class="cm">// If dengan init statement (sangat idiomatic Go!)</span>
    <span class="kw">if</span> val, err := <span class="fn">strconv</span>.Atoi(<span class="str">"123"</span>); err == <span class="num">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"parsed:"</span>, val)
    } <span class="kw">else</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"error:"</span>, err)
    }
    <span class="cm">// val dan err hanya tersedia di dalam blok if/else ini</span>

    <span class="cm">// Pattern: check file exists</span>
    <span class="kw">if</span> _, err := os.<span class="fn">Stat</span>(<span class="str">"config.json"</span>); os.<span class="fn">IsNotExist</span>(err) {
        fmt.<span class="fn">Println</span>(<span class="str">"file tidak ada"</span>)
    }
}</div>
</div>

<div class="card animate-in">
<h3>For Loop</h3>
<p>Go hanya memiliki <strong>satu keyword loop: <code>for</code></strong>. Tidak ada while, do-while, atau foreach — semuanya dilakukan dengan for.</p>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// 1. Classic for</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">5</span>; i++ {
        fmt.<span class="fn">Print</span>(i, <span class="str">" "</span>)
    }
    <span class="cm">// 0 1 2 3 4</span>

    <span class="cm">// 2. While-style</span>
    n := <span class="num">1</span>
    <span class="kw">for</span> n < <span class="num">100</span> {
        n *= <span class="num">2</span>
    }
    fmt.<span class="fn">Println</span>(<span class="str">"n:"</span>, n) <span class="cm">// 128</span>

    <span class="cm">// 3. Infinite loop</span>
    counter := <span class="num">0</span>
    <span class="kw">for</span> {
        counter++
        <span class="kw">if</span> counter >= <span class="num">10</span> {
            <span class="kw">break</span>
        }
    }

    <span class="cm">// 4. Range over slice</span>
    fruits := []<span class="type">string</span>{<span class="str">"apel"</span>, <span class="str">"jeruk"</span>, <span class="str">"mangga"</span>}
    <span class="kw">for</span> index, fruit := <span class="kw">range</span> fruits {
        fmt.<span class="fn">Printf</span>(<span class="str">"%d: %s\\n"</span>, index, fruit)
    }

    <span class="cm">// 5. Range over map</span>
    m := <span class="kw">map</span>[<span class="type">string</span>]<span class="type">int</span>{<span class="str">"a"</span>: <span class="num">1</span>, <span class="str">"b"</span>: <span class="num">2</span>}
    <span class="kw">for</span> k, v := <span class="kw">range</span> m {
        fmt.<span class="fn">Printf</span>(<span class="str">"%s=%d\\n"</span>, k, v)
    }

    <span class="cm">// 6. Range over string (iterasi per rune)</span>
    <span class="kw">for</span> i, ch := <span class="kw">range</span> <span class="str">"Go🚀"</span> {
        fmt.<span class="fn">Printf</span>(<span class="str">"byte %d: %c\\n"</span>, i, ch)
    }

    <span class="cm">// 7. Skip index/value dengan _</span>
    <span class="kw">for</span> _, fruit := <span class="kw">range</span> fruits {
        fmt.<span class="fn">Println</span>(fruit)
    }

    <span class="cm">// 8. Continue & break with label</span>
    outer:
    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">3</span>; i++ {
        <span class="kw">for</span> j := <span class="num">0</span>; j < <span class="num">3</span>; j++ {
            <span class="kw">if</span> i == <span class="num">1</span> && j == <span class="num">1</span> {
                <span class="kw">break</span> outer <span class="cm">// keluar dari kedua loop</span>
            }
        }
    }
}</div>
</div>

<div class="card animate-in">
<h3>Switch</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Expression switch</span>
    day := <span class="str">"Monday"</span>
    <span class="kw">switch</span> day {
    <span class="kw">case</span> <span class="str">"Monday"</span>, <span class="str">"Tuesday"</span>, <span class="str">"Wednesday"</span>,
         <span class="str">"Thursday"</span>, <span class="str">"Friday"</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Hari kerja"</span>)
    <span class="kw">case</span> <span class="str">"Saturday"</span>, <span class="str">"Sunday"</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Hari libur"</span>)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Tidak valid"</span>)
    }
    <span class="cm">// Go switch TIDAK perlu break — otomatis berhenti</span>
    <span class="cm">// Gunakan fallthrough jika ingin lanjut ke case berikutnya</span>

    <span class="cm">// Switch tanpa expression (pengganti if/else chain)</span>
    score := <span class="num">85</span>
    <span class="kw">switch</span> {
    <span class="kw">case</span> score >= <span class="num">90</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"A"</span>)
    <span class="kw">case</span> score >= <span class="num">80</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"B"</span>)
    <span class="kw">case</span> score >= <span class="num">70</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"C"</span>)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"D"</span>)
    }

    <span class="cm">// Switch dengan init statement</span>
    <span class="kw">switch</span> os := runtime.GOOS; os {
    <span class="kw">case</span> <span class="str">"linux"</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Linux"</span>)
    <span class="kw">case</span> <span class="str">"darwin"</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"macOS"</span>)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(os)
    }

    <span class="cm">// Type switch</span>
    <span class="kw">var</span> i <span class="kw">interface</span>{} = <span class="str">"hello"</span>
    <span class="kw">switch</span> v := i.(<span class="kw">type</span>) {
    <span class="kw">case</span> <span class="type">int</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"int:"</span>, v)
    <span class="kw">case</span> <span class="type">string</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"string:"</span>, v)
    <span class="kw">case</span> <span class="type">bool</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"bool:"</span>, v)
    <span class="kw">default</span>:
        fmt.<span class="fn">Printf</span>(<span class="str">"unknown: %T\\n"</span>, v)
    }
}</div>
</div>

<div class="card animate-in">
<h3>Defer, Panic & Recover</h3>
<p>Go tidak memiliki try-catch-finally. Sebagai gantinya, Go menggunakan <code>defer</code>, <code>panic</code>, dan <code>recover</code>.</p>
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"os"</span>
)

<span class="cm">// defer — eksekusi saat fungsi return (LIFO order)</span>
<span class="kw">func</span> <span class="fn">readFile</span>(path <span class="type">string</span>) {
    f, err := os.<span class="fn">Open</span>(path)
    <span class="kw">if</span> err != <span class="num">nil</span> {
        log.<span class="fn">Fatal</span>(err)
    }
    <span class="kw">defer</span> f.<span class="fn">Close</span>()  <span class="cm">// PASTI dipanggil saat fungsi selesai</span>

    <span class="cm">// ... proses file ...</span>
    <span class="cm">// f.Close() otomatis dipanggil di sini</span>
}

<span class="cm">// Defer ordering — LIFO (Last In, First Out)</span>
<span class="kw">func</span> <span class="fn">deferOrder</span>() {
    fmt.<span class="fn">Println</span>(<span class="str">"start"</span>)
    <span class="kw">defer</span> fmt.<span class="fn">Println</span>(<span class="str">"first defer"</span>)
    <span class="kw">defer</span> fmt.<span class="fn">Println</span>(<span class="str">"second defer"</span>)
    <span class="kw">defer</span> fmt.<span class="fn">Println</span>(<span class="str">"third defer"</span>)
    fmt.<span class="fn">Println</span>(<span class="str">"end"</span>)
    <span class="cm">// Output: start, end, third defer, second defer, first defer</span>
}

<span class="cm">// Panic & Recover — setara try-catch</span>
<span class="kw">func</span> <span class="fn">safeDivide</span>(a, b <span class="type">int</span>) (<span class="type">int</span>, <span class="type">error</span>) {
    <span class="kw">defer func</span>() {
        <span class="kw">if</span> r := <span class="fn">recover</span>(); r != <span class="num">nil</span> {
            fmt.<span class="fn">Println</span>(<span class="str">"Recovered from panic:"</span>, r)
        }
    }()

    <span class="kw">if</span> b == <span class="num">0</span> {
        <span class="fn">panic</span>(<span class="str">"division by zero"</span>)
    }
    <span class="kw">return</span> a / b, <span class="num">nil</span>
}

<span class="cm">// Penggunaan defer untuk mutex unlock</span>
<span class="kw">func</span> <span class="fn">safeIncrement</span>(mu *sync.Mutex, counter *<span class="type">int</span>) {
    mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> mu.<span class="fn">Unlock</span>()  <span class="cm">// pasti unlock meski panic</span>
    *counter++
}</div>

<div class="success-box">
<strong>Best Practice:</strong> Gunakan <code>defer</code> untuk cleanup resources (close file, unlock mutex, close DB connection). <code>panic</code> hanya untuk error yang benar-benar fatal. Untuk error biasa, gunakan return error (lihat Bab 9).
</div>
</div>

<!-- ============ BAB 6: FUNCTIONS ============ -->
<h2 class="animate-in">6. Functions</h2>

<div class="card animate-in">
<h3>Fungsi Dasar & Multiple Return</h3>
<div class="code-block"><span class="cm">// Fungsi sederhana</span>
<span class="kw">func</span> <span class="fn">add</span>(a <span class="type">int</span>, b <span class="type">int</span>) <span class="type">int</span> {
    <span class="kw">return</span> a + b
}

<span class="cm">// Parameter tipe sama bisa disingkat</span>
<span class="kw">func</span> <span class="fn">multiply</span>(a, b <span class="type">int</span>) <span class="type">int</span> {
    <span class="kw">return</span> a * b
}

<span class="cm">// Multiple return values — sangat umum di Go</span>
<span class="kw">func</span> <span class="fn">divide</span>(a, b <span class="type">float64</span>) (<span class="type">float64</span>, <span class="type">error</span>) {
    <span class="kw">if</span> b == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">0</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"cannot divide by zero"</span>)
    }
    <span class="kw">return</span> a / b, <span class="num">nil</span>
}

<span class="cm">// Named return values</span>
<span class="kw">func</span> <span class="fn">rectProps</span>(length, width <span class="type">float64</span>) (area, perimeter <span class="type">float64</span>) {
    area = length * width
    perimeter = <span class="num">2</span> * (length + width)
    <span class="kw">return</span> <span class="cm">// naked return — otomatis return area & perimeter</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    result, err := <span class="fn">divide</span>(<span class="num">10</span>, <span class="num">3</span>)
    <span class="kw">if</span> err != <span class="num">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Error:"</span>, err)
    } <span class="kw">else</span> {
        fmt.<span class="fn">Printf</span>(<span class="str">"Result: %.2f\\n"</span>, result)
    }

    a, p := <span class="fn">rectProps</span>(<span class="num">5</span>, <span class="num">3</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"Area: %.1f, Perimeter: %.1f\\n"</span>, a, p)
}</div>
</div>

<div class="card animate-in">
<h3>Variadic Functions</h3>
<div class="code-block"><span class="cm">// Variadic — menerima sejumlah argumen tak terbatas</span>
<span class="kw">func</span> <span class="fn">sum</span>(nums ...<span class="type">int</span>) <span class="type">int</span> {
    total := <span class="num">0</span>
    <span class="kw">for</span> _, n := <span class="kw">range</span> nums {
        total += n
    }
    <span class="kw">return</span> total
}

<span class="kw">func</span> <span class="fn">main</span>() {
    fmt.<span class="fn">Println</span>(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>))        <span class="cm">// 6</span>
    fmt.<span class="fn">Println</span>(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>)) <span class="cm">// 15</span>

    <span class="cm">// Spread slice ke variadic</span>
    numbers := []<span class="type">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>}
    fmt.<span class="fn">Println</span>(<span class="fn">sum</span>(numbers...))     <span class="cm">// 60</span>
}</div>
</div>

<div class="card animate-in">
<h3>First-Class Functions & Closures</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// Function sebagai parameter</span>
<span class="kw">func</span> <span class="fn">apply</span>(nums []<span class="type">int</span>, fn <span class="kw">func</span>(<span class="type">int</span>) <span class="type">int</span>) []<span class="type">int</span> {
    result := <span class="fn">make</span>([]<span class="type">int</span>, <span class="fn">len</span>(nums))
    <span class="kw">for</span> i, n := <span class="kw">range</span> nums {
        result[i] = <span class="fn">fn</span>(n)
    }
    <span class="kw">return</span> result
}

<span class="cm">// Function yang return function (closure)</span>
<span class="kw">func</span> <span class="fn">multiplier</span>(factor <span class="type">int</span>) <span class="kw">func</span>(<span class="type">int</span>) <span class="type">int</span> {
    <span class="kw">return func</span>(x <span class="type">int</span>) <span class="type">int</span> {
        <span class="kw">return</span> x * factor  <span class="cm">// closure — capture factor</span>
    }
}

<span class="cm">// Counter dengan closure</span>
<span class="kw">func</span> <span class="fn">newCounter</span>() <span class="kw">func</span>() <span class="type">int</span> {
    count := <span class="num">0</span>
    <span class="kw">return func</span>() <span class="type">int</span> {
        count++
        <span class="kw">return</span> count
    }
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Anonymous function</span>
    greet := <span class="kw">func</span>(name <span class="type">string</span>) {
        fmt.<span class="fn">Printf</span>(<span class="str">"Halo, %s!\\n"</span>, name)
    }
    <span class="fn">greet</span>(<span class="str">"Go"</span>)

    <span class="cm">// Immediately invoked</span>
    result := <span class="kw">func</span>(a, b <span class="type">int</span>) <span class="type">int</span> {
        <span class="kw">return</span> a + b
    }(<span class="num">3</span>, <span class="num">4</span>)
    fmt.<span class="fn">Println</span>(result) <span class="cm">// 7</span>

    <span class="cm">// Higher-order function</span>
    doubled := <span class="fn">apply</span>([]<span class="type">int</span>{<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>}, <span class="kw">func</span>(n <span class="type">int</span>) <span class="type">int</span> { <span class="kw">return</span> n*<span class="num">2</span> })
    fmt.<span class="fn">Println</span>(doubled) <span class="cm">// [2 4 6]</span>

    <span class="cm">// Closure</span>
    triple := <span class="fn">multiplier</span>(<span class="num">3</span>)
    fmt.<span class="fn">Println</span>(<span class="fn">triple</span>(<span class="num">5</span>))  <span class="cm">// 15</span>
    fmt.<span class="fn">Println</span>(<span class="fn">triple</span>(<span class="num">10</span>)) <span class="cm">// 30</span>

    <span class="cm">// Stateful closure</span>
    c := <span class="fn">newCounter</span>()
    fmt.<span class="fn">Println</span>(<span class="fn">c</span>()) <span class="cm">// 1</span>
    fmt.<span class="fn">Println</span>(<span class="fn">c</span>()) <span class="cm">// 2</span>
    fmt.<span class="fn">Println</span>(<span class="fn">c</span>()) <span class="cm">// 3</span>
}</div>
</div>

<div class="card animate-in">
<h3>Methods — Value vs Pointer Receiver</h3>
<div class="code-block"><span class="kw">type</span> <span class="type">Circle</span> <span class="kw">struct</span> {
    Radius <span class="type">float64</span>
}

<span class="cm">// Value receiver — TIDAK mengubah struct asli</span>
<span class="kw">func</span> (c <span class="type">Circle</span>) <span class="fn">Area</span>() <span class="type">float64</span> {
    <span class="kw">return</span> math.Pi * c.Radius * c.Radius
}

<span class="cm">// Pointer receiver — BISA mengubah struct asli</span>
<span class="kw">func</span> (c *<span class="type">Circle</span>) <span class="fn">Scale</span>(factor <span class="type">float64</span>) {
    c.Radius *= factor  <span class="cm">// mengubah aslinya</span>
}

<span class="cm">// Stringer interface — setara toString() di Java</span>
<span class="kw">func</span> (c <span class="type">Circle</span>) <span class="fn">String</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"Circle(r=%.2f)"</span>, c.Radius)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    c := <span class="type">Circle</span>{Radius: <span class="num">5</span>}
    fmt.<span class="fn">Println</span>(c.<span class="fn">Area</span>())    <span class="cm">// 78.54</span>
    c.<span class="fn">Scale</span>(<span class="num">2</span>)
    fmt.<span class="fn">Println</span>(c.Radius)   <span class="cm">// 10</span>
    fmt.<span class="fn">Println</span>(c)           <span class="cm">// Circle(r=10.00)</span>
}</div>

<div class="info-box">
<strong>Kapan pakai pointer receiver?</strong>
<ul>
<li>Method perlu mengubah state struct</li>
<li>Struct berukuran besar (hindari copy)</li>
<li>Konsistensi — jika salah satu method pakai pointer, sebaiknya semua pakai pointer</li>
</ul>
</div>
</div>

<!-- ============ BAB 7: STRUCT & INTERFACE ============ -->
<h2 class="animate-in">7. Struct & Interface</h2>

<div class="card animate-in">
<h3>Struct — Definisi & Embedding</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// Definisi struct</span>
<span class="kw">type</span> <span class="type">Address</span> <span class="kw">struct</span> {
    Street string
    City   <span class="type">string</span>
    Zip    <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">Person</span> <span class="kw">struct</span> {
    Name    <span class="type">string</span>
    Age     <span class="type">int</span>
    Email   <span class="type">string</span>
    Address <span class="type">Address</span>  <span class="cm">// nested struct</span>
}

<span class="cm">// Struct embedding (composition — bukan inheritance!)</span>
<span class="kw">type</span> <span class="type">Employee</span> <span class="kw">struct</span> {
    <span class="type">Person</span>             <span class="cm">// embedded — "inherits" fields & methods</span>
    Company  <span class="type">string</span>
    Position <span class="type">string</span>
    Salary   <span class="type">float64</span>
}

<span class="kw">func</span> (p <span class="type">Person</span>) <span class="fn">Greet</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"Halo, saya %s (%d tahun)"</span>, p.Name, p.Age)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Membuat struct</span>
    p := <span class="type">Person</span>{
        Name:  <span class="str">"Alice"</span>,
        Age:   <span class="num">30</span>,
        Email: <span class="str">"alice@mail.com"</span>,
        Address: <span class="type">Address</span>{
            Street: <span class="str">"Jl. Sudirman 123"</span>,
            City:   <span class="str">"Jakarta"</span>,
            Zip:    <span class="str">"10220"</span>,
        },
    }
    fmt.<span class="fn">Println</span>(p.<span class="fn">Greet</span>())
    fmt.<span class="fn">Println</span>(p.Address.City)

    <span class="cm">// Employee dengan embedding</span>
    e := <span class="type">Employee</span>{
        Person:   <span class="type">Person</span>{Name: <span class="str">"Bob"</span>, Age: <span class="num">28</span>},
        Company:  <span class="str">"Google"</span>,
        Position: <span class="str">"SWE"</span>,
        Salary:   <span class="num">50000</span>,
    }
    <span class="cm">// Akses langsung field dari embedded struct</span>
    fmt.<span class="fn">Println</span>(e.Name)     <span class="cm">// "Bob" — promoted dari Person</span>
    fmt.<span class="fn">Println</span>(e.<span class="fn">Greet</span>())  <span class="cm">// method dari Person juga promoted</span>

    <span class="cm">// Struct tags — untuk JSON, DB, validasi</span>
    <span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
        ID       <span class="type">int</span>    \`json:"id" db:"user_id"\`
        Username <span class="type">string</span> \`json:"username" validate:"required"\`
        Password <span class="type">string</span> \`json:"-"\`  <span class="cm">// skip di JSON</span>
    }
}</div>
</div>

<div class="card animate-in">
<h3>Interface — Implicit Implementation</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"math"</span>
)

<span class="cm">// Interface — kumpulan method signatures</span>
<span class="kw">type</span> <span class="type">Shape</span> <span class="kw">interface</span> {
    <span class="fn">Area</span>() <span class="type">float64</span>
    <span class="fn">Perimeter</span>() <span class="type">float64</span>
}

<span class="cm">// Implementasi IMPLICIT — tidak perlu keyword "implements"</span>
<span class="kw">type</span> <span class="type">Rectangle</span> <span class="kw">struct</span> {
    Width, Height <span class="type">float64</span>
}

<span class="kw">func</span> (r <span class="type">Rectangle</span>) <span class="fn">Area</span>() <span class="type">float64</span>      { <span class="kw">return</span> r.Width * r.Height }
<span class="kw">func</span> (r <span class="type">Rectangle</span>) <span class="fn">Perimeter</span>() <span class="type">float64</span> { <span class="kw">return</span> <span class="num">2</span> * (r.Width + r.Height) }

<span class="kw">type</span> <span class="type">Circle</span> <span class="kw">struct</span> {
    Radius <span class="type">float64</span>
}

<span class="kw">func</span> (c <span class="type">Circle</span>) <span class="fn">Area</span>() <span class="type">float64</span>      { <span class="kw">return</span> math.Pi * c.Radius * c.Radius }
<span class="kw">func</span> (c <span class="type">Circle</span>) <span class="fn">Perimeter</span>() <span class="type">float64</span> { <span class="kw">return</span> <span class="num">2</span> * math.Pi * c.Radius }

<span class="cm">// Fungsi yang menerima interface</span>
<span class="kw">func</span> <span class="fn">printShapeInfo</span>(s <span class="type">Shape</span>) {
    fmt.<span class="fn">Printf</span>(<span class="str">"Type: %T\\n"</span>, s)
    fmt.<span class="fn">Printf</span>(<span class="str">"Area: %.2f\\n"</span>, s.<span class="fn">Area</span>())
    fmt.<span class="fn">Printf</span>(<span class="str">"Perimeter: %.2f\\n"</span>, s.<span class="fn">Perimeter</span>())
}

<span class="cm">// Empty interface — menerima tipe apapun</span>
<span class="kw">func</span> <span class="fn">describe</span>(i <span class="kw">interface</span>{}) {
    fmt.<span class="fn">Printf</span>(<span class="str">"(%v, %T)\\n"</span>, i, i)
}
<span class="cm">// Go 1.18+: bisa pakai 'any' sebagai alias interface{}</span>
<span class="kw">func</span> <span class="fn">describeAny</span>(i <span class="type">any</span>) {
    fmt.<span class="fn">Printf</span>(<span class="str">"(%v, %T)\\n"</span>, i, i)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    shapes := []<span class="type">Shape</span>{
        <span class="type">Rectangle</span>{<span class="num">5</span>, <span class="num">3</span>},
        <span class="type">Circle</span>{<span class="num">7</span>},
    }
    <span class="kw">for</span> _, s := <span class="kw">range</span> shapes {
        <span class="fn">printShapeInfo</span>(s)
        fmt.<span class="fn">Println</span>(<span class="str">"---"</span>)
    }

    <span class="cm">// Type assertion</span>
    <span class="kw">var</span> s <span class="type">Shape</span> = <span class="type">Circle</span>{<span class="num">5</span>}
    c, ok := s.(<span class="type">Circle</span>)
    <span class="kw">if</span> ok {
        fmt.<span class="fn">Println</span>(<span class="str">"Circle radius:"</span>, c.Radius)
    }

    <span class="cm">// Type switch</span>
    <span class="kw">switch</span> v := s.(<span class="kw">type</span>) {
    <span class="kw">case</span> <span class="type">Circle</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Circle, r="</span>, v.Radius)
    <span class="kw">case</span> <span class="type">Rectangle</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"Rect, w="</span>, v.Width)
    }
}</div>
</div>

<!-- ============ BAB 8: OOP IN GO ============ -->
<h2 class="animate-in">8. OOP in Go</h2>

<div class="card animate-in">
<h3>Go & Object-Oriented Programming</h3>
<div class="warn-box">
<strong>Go BUKAN bahasa OOP tradisional!</strong> Go tidak memiliki class, inheritance, atau constructor. Namun Go mendukung konsep OOP melalui: struct (data), methods (behavior), interface (abstraction), dan embedding (composition).
</div>

<h4>Encapsulation — Exported vs Unexported</h4>
<div class="code-block"><span class="kw">package</span> user

<span class="cm">// Huruf KAPITAL = exported (public)</span>
<span class="cm">// Huruf kecil = unexported (private ke package)</span>

<span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    Name     <span class="type">string</span>  <span class="cm">// exported — bisa diakses dari luar package</span>
    Email    <span class="type">string</span>  <span class="cm">// exported</span>
    password <span class="type">string</span>  <span class="cm">// unexported — hanya bisa diakses di package ini</span>
    age      <span class="type">int</span>     <span class="cm">// unexported</span>
}

<span class="cm">// Constructor pattern — Go convention: NewXxx()</span>
<span class="kw">func</span> <span class="fn">NewUser</span>(name, email, password <span class="type">string</span>, age <span class="type">int</span>) *<span class="type">User</span> {
    <span class="kw">return</span> &<span class="type">User</span>{
        Name:     name,
        Email:    email,
        password: password,
        age:      age,
    }
}

<span class="cm">// Getter untuk field private</span>
<span class="kw">func</span> (u *<span class="type">User</span>) <span class="fn">Age</span>() <span class="type">int</span> {
    <span class="kw">return</span> u.age
}

<span class="cm">// Setter dengan validasi</span>
<span class="kw">func</span> (u *<span class="type">User</span>) <span class="fn">SetPassword</span>(pw <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">if</span> <span class="fn">len</span>(pw) < <span class="num">8</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"password min 8 characters"</span>)
    }
    u.password = pw
    <span class="kw">return</span> <span class="num">nil</span>
}</div>
</div>

<div class="card animate-in">
<h3>Composition over Inheritance</h3>
<div class="code-block"><span class="cm">// Daripada inheritance hierarchy yang dalam,</span>
<span class="cm">// Go lebih memilih composition (embedding).</span>

<span class="kw">type</span> <span class="type">Logger</span> <span class="kw">struct</span> {}

<span class="kw">func</span> (l <span class="type">Logger</span>) <span class="fn">Log</span>(msg <span class="type">string</span>) {
    fmt.<span class="fn">Printf</span>(<span class="str">"[LOG] %s\\n"</span>, msg)
}

<span class="kw">type</span> <span class="type">Validator</span> <span class="kw">struct</span> {}

<span class="kw">func</span> (v <span class="type">Validator</span>) <span class="fn">Validate</span>(data <span class="type">string</span>) <span class="type">bool</span> {
    <span class="kw">return</span> <span class="fn">len</span>(data) > <span class="num">0</span>
}

<span class="cm">// Compose kemampuan Logger + Validator</span>
<span class="kw">type</span> <span class="type">UserService</span> <span class="kw">struct</span> {
    <span class="type">Logger</span>     <span class="cm">// embed Logger</span>
    <span class="type">Validator</span>  <span class="cm">// embed Validator</span>
    db *<span class="type">Database</span>
}

<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">CreateUser</span>(name <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">if</span> !s.<span class="fn">Validate</span>(name) {  <span class="cm">// dari Validator</span>
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"invalid name"</span>)
    }
    s.<span class="fn">Log</span>(<span class="str">"Creating user: "</span> + name) <span class="cm">// dari Logger</span>
    <span class="cm">// ... create user in DB ...</span>
    <span class="kw">return</span> <span class="num">nil</span>
}</div>
</div>

<div class="card animate-in">
<h3>Polymorphism via Interface</h3>
<div class="code-block"><span class="cm">// Interface kecil & fokus — sesuai Interface Segregation Principle</span>
<span class="kw">type</span> <span class="type">Reader</span> <span class="kw">interface</span> {
    <span class="fn">Read</span>(p []<span class="type">byte</span>) (n <span class="type">int</span>, err <span class="type">error</span>)
}

<span class="kw">type</span> <span class="type">Writer</span> <span class="kw">interface</span> {
    <span class="fn">Write</span>(p []<span class="type">byte</span>) (n <span class="type">int</span>, err <span class="type">error</span>)
}

<span class="cm">// Interface composition</span>
<span class="kw">type</span> <span class="type">ReadWriter</span> <span class="kw">interface</span> {
    <span class="type">Reader</span>
    <span class="type">Writer</span>
}

<span class="cm">// ========= SOLID in Go =========</span>

<span class="cm">// S — Single Responsibility</span>
<span class="kw">type</span> <span class="type">UserRepository</span> <span class="kw">struct</span> {} <span class="cm">// hanya urusan data</span>
<span class="kw">type</span> <span class="type">EmailService</span> <span class="kw">struct</span> {}   <span class="cm">// hanya urusan email</span>

<span class="cm">// O — Open/Closed (extend via interface)</span>
<span class="kw">type</span> <span class="type">Notifier</span> <span class="kw">interface</span> {
    <span class="fn">Notify</span>(msg <span class="type">string</span>) <span class="type">error</span>
}
<span class="kw">type</span> <span class="type">EmailNotifier</span> <span class="kw">struct</span> {}
<span class="kw">func</span> (e <span class="type">EmailNotifier</span>) <span class="fn">Notify</span>(msg <span class="type">string</span>) <span class="type">error</span> { <span class="kw">return</span> <span class="num">nil</span> }
<span class="kw">type</span> <span class="type">SMSNotifier</span> <span class="kw">struct</span> {}
<span class="kw">func</span> (s <span class="type">SMSNotifier</span>) <span class="fn">Notify</span>(msg <span class="type">string</span>) <span class="type">error</span> { <span class="kw">return</span> <span class="num">nil</span> }
<span class="cm">// Bisa tambah notifier baru tanpa ubah kode existing</span>

<span class="cm">// L — Liskov Substitution (interface menjamin ini)</span>
<span class="kw">func</span> <span class="fn">sendAlert</span>(n <span class="type">Notifier</span>, msg <span class="type">string</span>) {
    n.<span class="fn">Notify</span>(msg) <span class="cm">// works with any Notifier</span>
}

<span class="cm">// I — Interface Segregation</span>
<span class="cm">// Go sudah mendorong ini — interface kecil-kecil</span>
<span class="cm">// io.Reader, io.Writer, io.Closer — masing-masing 1 method</span>

<span class="cm">// D — Dependency Inversion</span>
<span class="kw">type</span> <span class="type">Storage</span> <span class="kw">interface</span> {
    <span class="fn">Save</span>(data []<span class="type">byte</span>) <span class="type">error</span>
}
<span class="kw">type</span> <span class="type">App</span> <span class="kw">struct</span> {
    store <span class="type">Storage</span> <span class="cm">// bergantung pada abstraksi, bukan implementasi</span>
}
<span class="kw">func</span> <span class="fn">NewApp</span>(s <span class="type">Storage</span>) *<span class="type">App</span> {
    <span class="kw">return</span> &<span class="type">App</span>{store: s}
}</div>
</div>

<!-- ============ BAB 9: ERROR HANDLING ============ -->
<h2 class="animate-in">9. Error Handling</h2>

<div class="card animate-in">
<h3>Error Interface & Pattern</h3>
<p>Error handling di Go sangat eksplisit — error adalah <strong>value</strong>, bukan exception. Setiap fungsi yang bisa gagal mengembalikan error sebagai return value terakhir.</p>

<div class="code-block"><span class="kw">import</span> (
    <span class="str">"errors"</span>
    <span class="str">"fmt"</span>
)

<span class="cm">// error interface bawaan Go:</span>
<span class="cm">// type error interface {</span>
<span class="cm">//     Error() string</span>
<span class="cm">// }</span>

<span class="cm">// Membuat error sederhana</span>
<span class="kw">func</span> <span class="fn">divide</span>(a, b <span class="type">float64</span>) (<span class="type">float64</span>, <span class="type">error</span>) {
    <span class="kw">if</span> b == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">0</span>, errors.<span class="fn">New</span>(<span class="str">"division by zero"</span>)
    }
    <span class="kw">return</span> a / b, <span class="num">nil</span>
}

<span class="cm">// Error dengan formatting</span>
<span class="kw">func</span> <span class="fn">findUser</span>(id <span class="type">int</span>) (*<span class="type">User</span>, <span class="type">error</span>) {
    <span class="kw">if</span> id <= <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"invalid user id: %d"</span>, id)
    }
    <span class="cm">// ... query DB ...</span>
    <span class="kw">return</span> <span class="num">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"user %d not found"</span>, id)
}

<span class="cm">// Pattern: selalu cek error!</span>
<span class="kw">func</span> <span class="fn">main</span>() {
    result, err := <span class="fn">divide</span>(<span class="num">10</span>, <span class="num">0</span>)
    <span class="kw">if</span> err != <span class="num">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Error:"</span>, err)
        <span class="kw">return</span>
    }
    fmt.<span class="fn">Println</span>(result)
}</div>
</div>

<div class="card animate-in">
<h3>Custom Error Types</h3>
<div class="code-block"><span class="cm">// Custom error type</span>
<span class="kw">type</span> <span class="type">ValidationError</span> <span class="kw">struct</span> {
    Field   <span class="type">string</span>
    Message <span class="type">string</span>
}

<span class="kw">func</span> (e *<span class="type">ValidationError</span>) <span class="fn">Error</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"validation error: %s — %s"</span>, e.Field, e.Message)
}

<span class="cm">// Custom error dengan kode</span>
<span class="kw">type</span> <span class="type">AppError</span> <span class="kw">struct</span> {
    Code    <span class="type">int</span>
    Message <span class="type">string</span>
    Err     <span class="type">error</span>  <span class="cm">// wrapped error</span>
}

<span class="kw">func</span> (e *<span class="type">AppError</span>) <span class="fn">Error</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"[%d] %s"</span>, e.Code, e.Message)
}

<span class="kw">func</span> (e *<span class="type">AppError</span>) <span class="fn">Unwrap</span>() <span class="type">error</span> {
    <span class="kw">return</span> e.Err <span class="cm">// untuk errors.Is / errors.As</span>
}

<span class="cm">// Sentinel errors — error yang sudah ditentukan sebelumnya</span>
<span class="kw">var</span> (
    ErrNotFound     = errors.<span class="fn">New</span>(<span class="str">"not found"</span>)
    ErrUnauthorized = errors.<span class="fn">New</span>(<span class="str">"unauthorized"</span>)
    ErrForbidden    = errors.<span class="fn">New</span>(<span class="str">"forbidden"</span>)
)

<span class="kw">func</span> <span class="fn">getUser</span>(id <span class="type">int</span>) (*<span class="type">User</span>, <span class="type">error</span>) {
    <span class="cm">// ... query ...</span>
    <span class="kw">return</span> <span class="num">nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"getUser(%d): %w"</span>, id, ErrNotFound) <span class="cm">// wrap with %w</span>
}</div>
</div>

<div class="card animate-in">
<h3>errors.Is & errors.As (Go 1.13+)</h3>
<div class="code-block"><span class="kw">import</span> <span class="str">"errors"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    _, err := <span class="fn">getUser</span>(<span class="num">999</span>)

    <span class="cm">// errors.Is — cek apakah error (atau wrapped error) sama</span>
    <span class="kw">if</span> errors.<span class="fn">Is</span>(err, ErrNotFound) {
        fmt.<span class="fn">Println</span>(<span class="str">"User tidak ditemukan"</span>)
    }

    <span class="cm">// errors.As — extract error type tertentu</span>
    <span class="kw">var</span> appErr *<span class="type">AppError</span>
    <span class="kw">if</span> errors.<span class="fn">As</span>(err, &appErr) {
        fmt.<span class="fn">Printf</span>(<span class="str">"App error code: %d\\n"</span>, appErr.Code)
    }

    <span class="cm">// Error wrapping chain</span>
    err1 := errors.<span class="fn">New</span>(<span class="str">"database connection failed"</span>)
    err2 := fmt.<span class="fn">Errorf</span>(<span class="str">"query user: %w"</span>, err1)         <span class="cm">// wrap</span>
    err3 := fmt.<span class="fn">Errorf</span>(<span class="str">"service.GetUser: %w"</span>, err2)     <span class="cm">// wrap lagi</span>

    fmt.<span class="fn">Println</span>(err3)
    <span class="cm">// service.GetUser: query user: database connection failed</span>

    fmt.<span class="fn">Println</span>(errors.<span class="fn">Is</span>(err3, err1)) <span class="cm">// true — bisa cari di chain</span>
}</div>

<div class="success-box">
<strong>Best Practice Error Handling Go:</strong>
<ul>
<li>Selalu cek error — jangan abaikan dengan <code>_</code></li>
<li>Wrap error dengan konteks: <code>fmt.Errorf("doing X: %w", err)</code></li>
<li>Gunakan sentinel errors untuk error yang bisa dicek oleh caller</li>
<li>Gunakan custom error types untuk error yang membawa data tambahan</li>
<li>Jangan pakai panic untuk flow control — hanya untuk bug yang benar-benar fatal</li>
</ul>
</div>
</div>

<!-- ============ BAB 10: CONCURRENCY ============ -->
<h2 class="animate-in">10. Concurrency</h2>

<div class="card animate-in">
<h3>Goroutines</h3>
<p>Goroutine adalah <strong>lightweight thread</strong> yang dikelola oleh Go runtime. Satu goroutine hanya membutuhkan ~2KB stack memory (vs ~1MB untuk OS thread). Anda bisa menjalankan jutaan goroutine secara bersamaan.</p>

<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"sync"</span>
    <span class="str">"time"</span>
)

<span class="kw">func</span> <span class="fn">worker</span>(id <span class="type">int</span>, wg *sync.<span class="type">WaitGroup</span>) {
    <span class="kw">defer</span> wg.<span class="fn">Done</span>()  <span class="cm">// tandai selesai</span>
    fmt.<span class="fn">Printf</span>(<span class="str">"Worker %d mulai\\n"</span>, id)
    time.<span class="fn">Sleep</span>(<span class="num">100</span> * time.Millisecond) <span class="cm">// simulasi kerja</span>
    fmt.<span class="fn">Printf</span>(<span class="str">"Worker %d selesai\\n"</span>, id)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Jalankan goroutine dengan keyword 'go'</span>
    <span class="kw">go</span> fmt.<span class="fn">Println</span>(<span class="str">"dari goroutine"</span>)

    <span class="cm">// WaitGroup — menunggu semua goroutine selesai</span>
    <span class="kw">var</span> wg sync.<span class="type">WaitGroup</span>

    <span class="kw">for</span> i := <span class="num">1</span>; i <= <span class="num">5</span>; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)       <span class="cm">// tambah counter</span>
        <span class="kw">go</span> <span class="fn">worker</span>(i, &wg)
    }

    wg.<span class="fn">Wait</span>()  <span class="cm">// tunggu semua Done()</span>
    fmt.<span class="fn">Println</span>(<span class="str">"Semua worker selesai"</span>)
}</div>
</div>

<div class="card animate-in">
<h3>Channels</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// === Unbuffered Channel ===</span>
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">string</span>)

    <span class="kw">go func</span>() {
        ch <- <span class="str">"hello"</span>  <span class="cm">// kirim ke channel (blocking)</span>
    }()

    msg := <-ch         <span class="cm">// terima dari channel (blocking)</span>
    fmt.<span class="fn">Println</span>(msg)    <span class="cm">// "hello"</span>

    <span class="cm">// === Buffered Channel ===</span>
    bufCh := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">3</span>)  <span class="cm">// buffer size 3</span>
    bufCh <- <span class="num">1</span>  <span class="cm">// tidak blocking — buffer belum penuh</span>
    bufCh <- <span class="num">2</span>
    bufCh <- <span class="num">3</span>
    <span class="cm">// bufCh <- 4  // ini akan blocking — buffer penuh!</span>

    fmt.<span class="fn">Println</span>(<-bufCh) <span class="cm">// 1</span>
    fmt.<span class="fn">Println</span>(<-bufCh) <span class="cm">// 2</span>

    <span class="cm">// === Directional Channels ===</span>
    <span class="cm">// chan<- int  : send-only</span>
    <span class="cm">// <-chan int  : receive-only</span>

    <span class="cm">// === Producer-Consumer Pattern ===</span>
    jobs := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">10</span>)
    results := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">10</span>)

    <span class="cm">// 3 worker goroutines</span>
    <span class="kw">for</span> w := <span class="num">0</span>; w < <span class="num">3</span>; w++ {
        <span class="kw">go func</span>(id <span class="type">int</span>) {
            <span class="kw">for</span> j := <span class="kw">range</span> jobs {
                fmt.<span class="fn">Printf</span>(<span class="str">"worker %d processing job %d\\n"</span>, id, j)
                results <- j * <span class="num">2</span>
            }
        }(w)
    }

    <span class="cm">// Kirim 5 jobs</span>
    <span class="kw">for</span> j := <span class="num">1</span>; j <= <span class="num">5</span>; j++ {
        jobs <- j
    }
    <span class="fn">close</span>(jobs)

    <span class="cm">// Ambil 5 results</span>
    <span class="kw">for</span> r := <span class="num">0</span>; r < <span class="num">5</span>; r++ {
        fmt.<span class="fn">Println</span>(<span class="str">"result:"</span>, <-results)
    }
}</div>
</div>

<div class="card animate-in">
<h3>Select Statement</h3>
<div class="code-block"><span class="kw">func</span> <span class="fn">main</span>() {
    ch1 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">string</span>)
    ch2 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">string</span>)

    <span class="kw">go func</span>() {
        time.<span class="fn">Sleep</span>(<span class="num">100</span> * time.Millisecond)
        ch1 <- <span class="str">"from ch1"</span>
    }()
    <span class="kw">go func</span>() {
        time.<span class="fn">Sleep</span>(<span class="num">200</span> * time.Millisecond)
        ch2 <- <span class="str">"from ch2"</span>
    }()

    <span class="cm">// Select — switch untuk channels</span>
    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">2</span>; i++ {
        <span class="kw">select</span> {
        <span class="kw">case</span> msg := <-ch1:
            fmt.<span class="fn">Println</span>(<span class="str">"Received:"</span>, msg)
        <span class="kw">case</span> msg := <-ch2:
            fmt.<span class="fn">Println</span>(<span class="str">"Received:"</span>, msg)
        <span class="kw">case</span> <-time.<span class="fn">After</span>(<span class="num">500</span> * time.Millisecond):
            fmt.<span class="fn">Println</span>(<span class="str">"Timeout!"</span>)
        }
    }

    <span class="cm">// Non-blocking select dengan default</span>
    <span class="kw">select</span> {
    <span class="kw">case</span> msg := <-ch1:
        fmt.<span class="fn">Println</span>(msg)
    <span class="kw">default</span>:
        fmt.<span class="fn">Println</span>(<span class="str">"no message ready"</span>)
    }
}</div>
</div>

<div class="card animate-in">
<h3>sync.Mutex & sync.RWMutex</h3>
<div class="code-block"><span class="kw">import</span> <span class="str">"sync"</span>

<span class="cm">// Thread-safe counter dengan Mutex</span>
<span class="kw">type</span> <span class="type">SafeCounter</span> <span class="kw">struct</span> {
    mu    sync.<span class="type">Mutex</span>
    count <span class="type">int</span>
}

<span class="kw">func</span> (c *<span class="type">SafeCounter</span>) <span class="fn">Increment</span>() {
    c.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()
    c.count++
}

<span class="kw">func</span> (c *<span class="type">SafeCounter</span>) <span class="fn">Value</span>() <span class="type">int</span> {
    c.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()
    <span class="kw">return</span> c.count
}

<span class="cm">// RWMutex — multiple readers OR single writer</span>
<span class="kw">type</span> <span class="type">SafeCache</span> <span class="kw">struct</span> {
    mu   sync.<span class="type">RWMutex</span>
    data <span class="kw">map</span>[<span class="type">string</span>]<span class="type">string</span>
}

<span class="kw">func</span> (c *<span class="type">SafeCache</span>) <span class="fn">Get</span>(key <span class="type">string</span>) (<span class="type">string</span>, <span class="type">bool</span>) {
    c.mu.<span class="fn">RLock</span>()          <span class="cm">// read lock — multiple goroutine bisa</span>
    <span class="kw">defer</span> c.mu.<span class="fn">RUnlock</span>()
    val, ok := c.data[key]
    <span class="kw">return</span> val, ok
}

<span class="kw">func</span> (c *<span class="type">SafeCache</span>) <span class="fn">Set</span>(key, val <span class="type">string</span>) {
    c.mu.<span class="fn">Lock</span>()           <span class="cm">// write lock — exclusive</span>
    <span class="kw">defer</span> c.mu.<span class="fn">Unlock</span>()
    c.data[key] = val
}

<span class="kw">func</span> <span class="fn">main</span>() {
    counter := &<span class="type">SafeCounter</span>{}
    <span class="kw">var</span> wg sync.<span class="type">WaitGroup</span>

    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">1000</span>; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go func</span>() {
            <span class="kw">defer</span> wg.<span class="fn">Done</span>()
            counter.<span class="fn">Increment</span>()
        }()
    }
    wg.<span class="fn">Wait</span>()
    fmt.<span class="fn">Println</span>(<span class="str">"Count:"</span>, counter.<span class="fn">Value</span>()) <span class="cm">// 1000 — race-free!</span>
}</div>
</div>

<div class="card animate-in">
<h3>Context Package</h3>
<div class="code-block"><span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"time"</span>
)

<span class="cm">// Context untuk cancellation, timeout, dan passing values</span>
<span class="kw">func</span> <span class="fn">fetchData</span>(ctx context.<span class="type">Context</span>, url <span class="type">string</span>) (<span class="type">string</span>, <span class="type">error</span>) {
    <span class="cm">// Simulasi long-running operation</span>
    <span class="kw">select</span> {
    <span class="kw">case</span> <-time.<span class="fn">After</span>(<span class="num">2</span> * time.Second):
        <span class="kw">return</span> <span class="str">"data from "</span> + url, <span class="num">nil</span>
    <span class="kw">case</span> <-ctx.<span class="fn">Done</span>():
        <span class="kw">return</span> <span class="str">""</span>, ctx.<span class="fn">Err</span>() <span class="cm">// context cancelled/timeout</span>
    }
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Context dengan timeout</span>
    ctx, cancel := context.<span class="fn">WithTimeout</span>(context.<span class="fn">Background</span>(), <span class="num">1</span>*time.Second)
    <span class="kw">defer</span> <span class="fn">cancel</span>()

    result, err := <span class="fn">fetchData</span>(ctx, <span class="str">"https://api.example.com"</span>)
    <span class="kw">if</span> err != <span class="num">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Error:"</span>, err) <span class="cm">// context deadline exceeded</span>
        <span class="kw">return</span>
    }
    fmt.<span class="fn">Println</span>(result)

    <span class="cm">// Context dengan cancel manual</span>
    ctx2, cancel2 := context.<span class="fn">WithCancel</span>(context.<span class="fn">Background</span>())
    <span class="kw">go func</span>() {
        time.<span class="fn">Sleep</span>(<span class="num">500</span> * time.Millisecond)
        <span class="fn">cancel2</span>() <span class="cm">// cancel semua goroutine yang pakai ctx2</span>
    }()
    <span class="fn">fetchData</span>(ctx2, <span class="str">"https://api.example.com"</span>)

    <span class="cm">// Context dengan value (gunakan hemat!)</span>
    ctx3 := context.<span class="fn">WithValue</span>(context.<span class="fn">Background</span>(), <span class="str">"userID"</span>, <span class="num">42</span>)
    userID := ctx3.<span class="fn">Value</span>(<span class="str">"userID"</span>).(<span class="type">int</span>)
    fmt.<span class="fn">Println</span>(<span class="str">"User:"</span>, userID)
}</div>
</div>

<div class="card animate-in">
<h3>Goroutine Scheduler — Visualisasi</h3>
<p>Go menggunakan <strong>M:N threading model</strong>: M goroutine di-schedule ke N OS threads. Komponen utamanya: <strong>G</strong> (goroutine), <strong>M</strong> (machine/OS thread), <strong>P</strong> (processor/logical CPU).</p>
<div class="anim-container">
    <canvas id="goroutineCanvas" width="800" height="400" style="width:100%;max-width:800px;background:#1e1e2e;border-radius:12px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="grBtnStart">Start</button>
        <button class="anim-btn" id="grBtnPause">Pause</button>
        <button class="anim-btn" id="grBtnReset">Reset</button>
        <button class="anim-btn" id="grBtnAddG">+ Goroutine</button>
    </div>
</div>

<div class="flow-diagram" style="margin-top:16px;">
    <div class="flow-node" style="background:#6c5ce7;color:#fff;">G (Goroutine)</div>
    <div class="flow-arrow">scheduled on</div>
    <div class="flow-node" style="background:#00b894;color:#fff;">P (Processor)</div>
    <div class="flow-arrow">runs on</div>
    <div class="flow-node" style="background:#e17055;color:#fff;">M (OS Thread)</div>
    <div class="flow-arrow">mapped to</div>
    <div class="flow-node" style="background:#636e72;color:#fff;">CPU Core</div>
</div>
</div>

<!-- ============ BAB 11: REST API - SIMPLE ============ -->
<h2 class="animate-in">11. REST API — Simple Version</h2>

<div class="card animate-in">
<h3>HTTP Server Dasar dengan net/http</h3>
<div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"encoding/json"</span>
    <span class="str">"fmt"</span>
    <span class="str">"log"</span>
    <span class="str">"net/http"</span>
    <span class="str">"strconv"</span>
    <span class="str">"sync"</span>
)

<span class="cm">// Model</span>
<span class="kw">type</span> <span class="type">Todo</span> <span class="kw">struct</span> {
    ID        <span class="type">int</span>    \`json:"id"\`
    Title     <span class="type">string</span> \`json:"title"\`
    Completed <span class="type">bool</span>   \`json:"completed"\`
}

<span class="cm">// In-memory store</span>
<span class="kw">var</span> (
    todos  = []<span class="type">Todo</span>{}
    nextID = <span class="num">1</span>
    mu     sync.<span class="type">Mutex</span>
)

<span class="cm">// Handler: GET /todos</span>
<span class="kw">func</span> <span class="fn">getTodos</span>(w http.<span class="type">ResponseWriter</span>, r *http.<span class="type">Request</span>) {
    mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> mu.<span class="fn">Unlock</span>()

    w.<span class="fn">Header</span>().<span class="fn">Set</span>(<span class="str">"Content-Type"</span>, <span class="str">"application/json"</span>)
    json.<span class="fn">NewEncoder</span>(w).<span class="fn">Encode</span>(todos)
}

<span class="cm">// Handler: POST /todos</span>
<span class="kw">func</span> <span class="fn">createTodo</span>(w http.<span class="type">ResponseWriter</span>, r *http.<span class="type">Request</span>) {
    <span class="kw">var</span> t <span class="type">Todo</span>
    <span class="kw">if</span> err := json.<span class="fn">NewDecoder</span>(r.Body).<span class="fn">Decode</span>(&t); err != <span class="num">nil</span> {
        http.<span class="fn">Error</span>(w, err.<span class="fn">Error</span>(), http.StatusBadRequest)
        <span class="kw">return</span>
    }

    mu.<span class="fn">Lock</span>()
    t.ID = nextID
    nextID++
    todos = <span class="fn">append</span>(todos, t)
    mu.<span class="fn">Unlock</span>()

    w.<span class="fn">Header</span>().<span class="fn">Set</span>(<span class="str">"Content-Type"</span>, <span class="str">"application/json"</span>)
    w.<span class="fn">WriteHeader</span>(http.StatusCreated)
    json.<span class="fn">NewEncoder</span>(w).<span class="fn">Encode</span>(t)
}

<span class="cm">// Simple router</span>
<span class="kw">func</span> <span class="fn">todosHandler</span>(w http.<span class="type">ResponseWriter</span>, r *http.<span class="type">Request</span>) {
    <span class="kw">switch</span> r.Method {
    <span class="kw">case</span> http.MethodGet:
        <span class="fn">getTodos</span>(w, r)
    <span class="kw">case</span> http.MethodPost:
        <span class="fn">createTodo</span>(w, r)
    <span class="kw">default</span>:
        http.<span class="fn">Error</span>(w, <span class="str">"Method not allowed"</span>, http.StatusMethodNotAllowed)
    }
}

<span class="kw">func</span> <span class="fn">main</span>() {
    http.<span class="fn">HandleFunc</span>(<span class="str">"/todos"</span>, todosHandler)

    fmt.<span class="fn">Println</span>(<span class="str">"Server running at :8080"</span>)
    log.<span class="fn">Fatal</span>(http.<span class="fn">ListenAndServe</span>(<span class="str">":8080"</span>, <span class="num">nil</span>))
}

<span class="cm">// Test:</span>
<span class="cm">// curl -X POST http://localhost:8080/todos \\</span>
<span class="cm">//   -H "Content-Type: application/json" \\</span>
<span class="cm">//   -d '{"title":"Belajar Go","completed":false}'</span>
<span class="cm">// curl http://localhost:8080/todos</span></div>
</div>

<div class="card animate-in">
<h3>JSON Encoding & Decoding</h3>
<div class="code-block"><span class="kw">import</span> <span class="str">"encoding/json"</span>

<span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    Name     <span class="type">string</span>   \`json:"name"\`
    Age      <span class="type">int</span>      \`json:"age"\`
    Email    <span class="type">string</span>   \`json:"email,omitempty"\`   <span class="cm">// skip jika kosong</span>
    Password <span class="type">string</span>   \`json:"-"\`                 <span class="cm">// selalu skip</span>
    Hobbies  []<span class="type">string</span> \`json:"hobbies"\`
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Struct → JSON (Marshal)</span>
    u := <span class="type">User</span>{
        Name: <span class="str">"Alice"</span>, Age: <span class="num">30</span>,
        Email: <span class="str">"alice@mail.com"</span>, Password: <span class="str">"secret"</span>,
        Hobbies: []<span class="type">string</span>{<span class="str">"coding"</span>, <span class="str">"reading"</span>},
    }

    jsonBytes, _ := json.<span class="fn">Marshal</span>(u)
    fmt.<span class="fn">Println</span>(<span class="type">string</span>(jsonBytes))
    <span class="cm">// {"name":"Alice","age":30,"email":"alice@mail.com","hobbies":["coding","reading"]}</span>

    <span class="cm">// Pretty print</span>
    pretty, _ := json.<span class="fn">MarshalIndent</span>(u, <span class="str">""</span>, <span class="str">"  "</span>)
    fmt.<span class="fn">Println</span>(<span class="type">string</span>(pretty))

    <span class="cm">// JSON → Struct (Unmarshal)</span>
    jsonStr := \`{"name":"Bob","age":25,"hobbies":["gaming"]}\`
    <span class="kw">var</span> u2 <span class="type">User</span>
    json.<span class="fn">Unmarshal</span>([]<span class="type">byte</span>(jsonStr), &u2)
    fmt.<span class="fn">Println</span>(u2.Name, u2.Hobbies)

    <span class="cm">// Dynamic JSON dengan map</span>
    <span class="kw">var</span> data <span class="kw">map</span>[<span class="type">string</span>]<span class="kw">interface</span>{}
    json.<span class="fn">Unmarshal</span>([]<span class="type">byte</span>(jsonStr), &data)
    fmt.<span class="fn">Println</span>(data[<span class="str">"name"</span>])
}</div>
</div>

<!-- ============ BAB 12: REST API - BEST PRACTICE ============ -->
<h2 class="animate-in">12. REST API — Best Practice</h2>

<div class="card animate-in">
<h3>Project Structure — Clean Architecture</h3>
<div class="code-block"><span class="cm">// Struktur project yang direkomendasikan:</span>
<span class="cm">//</span>
<span class="cm">// myapi/</span>
<span class="cm">// ├── cmd/</span>
<span class="cm">// │   └── server/</span>
<span class="cm">// │       └── main.go           # entry point</span>
<span class="cm">// ├── internal/</span>
<span class="cm">// │   ├── config/</span>
<span class="cm">// │   │   └── config.go         # konfigurasi (env, yaml)</span>
<span class="cm">// │   ├── domain/</span>
<span class="cm">// │   │   ├── user.go           # entity / model</span>
<span class="cm">// │   │   └── errors.go         # domain errors</span>
<span class="cm">// │   ├── handler/</span>
<span class="cm">// │   │   └── user_handler.go   # HTTP handlers</span>
<span class="cm">// │   ├── middleware/</span>
<span class="cm">// │   │   ├── auth.go           # JWT auth</span>
<span class="cm">// │   │   ├── cors.go           # CORS</span>
<span class="cm">// │   │   └── logging.go        # request logging</span>
<span class="cm">// │   ├── repository/</span>
<span class="cm">// │   │   ├── user_repo.go      # interface</span>
<span class="cm">// │   │   └── postgres/</span>
<span class="cm">// │   │       └── user_repo.go  # PostgreSQL implementation</span>
<span class="cm">// │   └── service/</span>
<span class="cm">// │       └── user_service.go   # business logic</span>
<span class="cm">// ├── pkg/</span>
<span class="cm">// │   └── response/</span>
<span class="cm">// │       └── json.go           # standard JSON response</span>
<span class="cm">// ├── go.mod</span>
<span class="cm">// ├── go.sum</span>
<span class="cm">// └── Dockerfile</span></div>
</div>

<div class="card animate-in">
<h3>Gin Framework — Full Example</h3>
<div class="code-block"><span class="cm">// go get -u github.com/gin-gonic/gin</span>

<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"net/http"</span>
    <span class="str">"github.com/gin-gonic/gin"</span>
)

<span class="cm">// === Domain Layer ===</span>
<span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    ID    <span class="type">int</span>    \`json:"id"\`
    Name  <span class="type">string</span> \`json:"name" binding:"required"\`
    Email <span class="type">string</span> \`json:"email" binding:"required,email"\`
}

<span class="cm">// === Repository Layer (interface) ===</span>
<span class="kw">type</span> <span class="type">UserRepository</span> <span class="kw">interface</span> {
    <span class="fn">FindAll</span>() ([]<span class="type">User</span>, <span class="type">error</span>)
    <span class="fn">FindByID</span>(id <span class="type">int</span>) (*<span class="type">User</span>, <span class="type">error</span>)
    <span class="fn">Create</span>(user *<span class="type">User</span>) <span class="type">error</span>
    <span class="fn">Update</span>(user *<span class="type">User</span>) <span class="type">error</span>
    <span class="fn">Delete</span>(id <span class="type">int</span>) <span class="type">error</span>
}

<span class="cm">// === Service Layer ===</span>
<span class="kw">type</span> <span class="type">UserService</span> <span class="kw">struct</span> {
    repo <span class="type">UserRepository</span>
}

<span class="kw">func</span> <span class="fn">NewUserService</span>(repo <span class="type">UserRepository</span>) *<span class="type">UserService</span> {
    <span class="kw">return</span> &<span class="type">UserService</span>{repo: repo}
}

<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">GetAllUsers</span>() ([]<span class="type">User</span>, <span class="type">error</span>) {
    <span class="kw">return</span> s.repo.<span class="fn">FindAll</span>()
}

<span class="cm">// === Handler Layer ===</span>
<span class="kw">type</span> <span class="type">UserHandler</span> <span class="kw">struct</span> {
    service *<span class="type">UserService</span>
}

<span class="kw">func</span> <span class="fn">NewUserHandler</span>(s *<span class="type">UserService</span>) *<span class="type">UserHandler</span> {
    <span class="kw">return</span> &<span class="type">UserHandler</span>{service: s}
}

<span class="kw">func</span> (h *<span class="type">UserHandler</span>) <span class="fn">GetAll</span>(c *gin.<span class="type">Context</span>) {
    users, err := h.service.<span class="fn">GetAllUsers</span>()
    <span class="kw">if</span> err != <span class="num">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusInternalServerError, gin.<span class="type">H</span>{<span class="str">"error"</span>: err.<span class="fn">Error</span>()})
        <span class="kw">return</span>
    }
    c.<span class="fn">JSON</span>(http.StatusOK, gin.<span class="type">H</span>{<span class="str">"data"</span>: users})
}

<span class="kw">func</span> (h *<span class="type">UserHandler</span>) <span class="fn">Create</span>(c *gin.<span class="type">Context</span>) {
    <span class="kw">var</span> user <span class="type">User</span>
    <span class="kw">if</span> err := c.<span class="fn">ShouldBindJSON</span>(&user); err != <span class="num">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusBadRequest, gin.<span class="type">H</span>{<span class="str">"error"</span>: err.<span class="fn">Error</span>()})
        <span class="kw">return</span>
    }
    <span class="kw">if</span> err := h.service.repo.<span class="fn">Create</span>(&user); err != <span class="num">nil</span> {
        c.<span class="fn">JSON</span>(http.StatusInternalServerError, gin.<span class="type">H</span>{<span class="str">"error"</span>: err.<span class="fn">Error</span>()})
        <span class="kw">return</span>
    }
    c.<span class="fn">JSON</span>(http.StatusCreated, gin.<span class="type">H</span>{<span class="str">"data"</span>: user})
}

<span class="cm">// === Middleware ===</span>
<span class="kw">func</span> <span class="fn">LoggingMiddleware</span>() gin.<span class="type">HandlerFunc</span> {
    <span class="kw">return func</span>(c *gin.<span class="type">Context</span>) {
        start := time.<span class="fn">Now</span>()
        c.<span class="fn">Next</span>()
        duration := time.<span class="fn">Since</span>(start)
        log.<span class="fn">Printf</span>(<span class="str">"[%s] %s %d %v"</span>,
            c.Request.Method, c.Request.URL.Path,
            c.Writer.<span class="fn">Status</span>(), duration)
    }
}

<span class="kw">func</span> <span class="fn">CORSMiddleware</span>() gin.<span class="type">HandlerFunc</span> {
    <span class="kw">return func</span>(c *gin.<span class="type">Context</span>) {
        c.<span class="fn">Header</span>(<span class="str">"Access-Control-Allow-Origin"</span>, <span class="str">"*"</span>)
        c.<span class="fn">Header</span>(<span class="str">"Access-Control-Allow-Methods"</span>, <span class="str">"GET,POST,PUT,DELETE"</span>)
        c.<span class="fn">Header</span>(<span class="str">"Access-Control-Allow-Headers"</span>, <span class="str">"Content-Type,Authorization"</span>)
        <span class="kw">if</span> c.Request.Method == <span class="str">"OPTIONS"</span> {
            c.<span class="fn">AbortWithStatus</span>(<span class="num">204</span>)
            <span class="kw">return</span>
        }
        c.<span class="fn">Next</span>()
    }
}

<span class="kw">func</span> <span class="fn">AuthMiddleware</span>() gin.<span class="type">HandlerFunc</span> {
    <span class="kw">return func</span>(c *gin.<span class="type">Context</span>) {
        token := c.<span class="fn">GetHeader</span>(<span class="str">"Authorization"</span>)
        <span class="kw">if</span> token == <span class="str">""</span> {
            c.<span class="fn">JSON</span>(http.StatusUnauthorized, gin.<span class="type">H</span>{<span class="str">"error"</span>: <span class="str">"unauthorized"</span>})
            c.<span class="fn">Abort</span>()
            <span class="kw">return</span>
        }
        <span class="cm">// ... validate JWT token ...</span>
        c.<span class="fn">Set</span>(<span class="str">"userID"</span>, <span class="num">123</span>) <span class="cm">// simpan di context</span>
        c.<span class="fn">Next</span>()
    }
}

<span class="cm">// === Main — Dependency Injection ===</span>
<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// DI: wire dependencies</span>
    repo := <span class="fn">NewInMemoryUserRepo</span>()  <span class="cm">// bisa diganti PostgresRepo</span>
    service := <span class="fn">NewUserService</span>(repo)
    handler := <span class="fn">NewUserHandler</span>(service)

    r := gin.<span class="fn">Default</span>()
    r.<span class="fn">Use</span>(<span class="fn">CORSMiddleware</span>())
    r.<span class="fn">Use</span>(<span class="fn">LoggingMiddleware</span>())

    <span class="cm">// Public routes</span>
    r.<span class="fn">GET</span>(<span class="str">"/health"</span>, <span class="kw">func</span>(c *gin.<span class="type">Context</span>) {
        c.<span class="fn">JSON</span>(<span class="num">200</span>, gin.<span class="type">H</span>{<span class="str">"status"</span>: <span class="str">"ok"</span>})
    })

    <span class="cm">// Protected routes</span>
    api := r.<span class="fn">Group</span>(<span class="str">"/api/v1"</span>)
    api.<span class="fn">Use</span>(<span class="fn">AuthMiddleware</span>())
    {
        api.<span class="fn">GET</span>(<span class="str">"/users"</span>, handler.GetAll)
        api.<span class="fn">POST</span>(<span class="str">"/users"</span>, handler.Create)
    }

    r.<span class="fn">Run</span>(<span class="str">":8080"</span>)
}</div>
</div>

<div class="card animate-in">
<h3>Configuration Management</h3>
<div class="code-block"><span class="cm">// internal/config/config.go</span>
<span class="kw">package</span> config

<span class="kw">import</span> (
    <span class="str">"os"</span>
    <span class="str">"strconv"</span>
)

<span class="kw">type</span> <span class="type">Config</span> <span class="kw">struct</span> {
    Port        <span class="type">string</span>
    DatabaseURL <span class="type">string</span>
    JWTSecret   <span class="type">string</span>
    Environment <span class="type">string</span>
}

<span class="kw">func</span> <span class="fn">Load</span>() *<span class="type">Config</span> {
    <span class="kw">return</span> &<span class="type">Config</span>{
        Port:        <span class="fn">getEnv</span>(<span class="str">"PORT"</span>, <span class="str">"8080"</span>),
        DatabaseURL: <span class="fn">getEnv</span>(<span class="str">"DATABASE_URL"</span>, <span class="str">"postgres://localhost/mydb"</span>),
        JWTSecret:   <span class="fn">getEnv</span>(<span class="str">"JWT_SECRET"</span>, <span class="str">"dev-secret"</span>),
        Environment: <span class="fn">getEnv</span>(<span class="str">"ENV"</span>, <span class="str">"development"</span>),
    }
}

<span class="kw">func</span> <span class="fn">getEnv</span>(key, fallback <span class="type">string</span>) <span class="type">string</span> {
    <span class="kw">if</span> val := os.<span class="fn">Getenv</span>(key); val != <span class="str">""</span> {
        <span class="kw">return</span> val
    }
    <span class="kw">return</span> fallback
}</div>
</div>

<!-- ============ BAB 13: GO LOADING PYTHON ============ -->
<h2 class="animate-in">13. Go Loading Python (CGO + Python C API)</h2>

<div class="card animate-in">
<h3>Memanggil Python dari Go via CGO</h3>
<p>Go bisa memanggil kode Python melalui <strong>cgo</strong> dan <strong>Python C API</strong>. Ini berguna ketika Anda ingin memanfaatkan library Python (misalnya ML/AI) dari service Go yang performant.</p>

<div class="warn-box">
<strong>Prerequisites:</strong> Install Python development headers: <code>sudo apt install python3-dev</code> (Linux) atau <code>brew install python3</code> (macOS). Anda butuh <code>pkg-config</code> juga.
</div>

<div class="code-block"><span class="cm">// main.go — Go memanggil Python</span>
<span class="kw">package</span> main

<span class="cm">/*
#cgo pkg-config: python3-embed
#include &lt;Python.h&gt;
*/</span>
<span class="kw">import</span> <span class="str">"C"</span>

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"unsafe"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Inisialisasi Python interpreter</span>
    C.<span class="fn">Py_Initialize</span>()
    <span class="kw">defer</span> C.<span class="fn">Py_Finalize</span>()

    <span class="cm">// Jalankan kode Python sederhana</span>
    code := C.<span class="fn">CString</span>(<span class="str">"print('Hello from Python inside Go!')"</span>)
    <span class="kw">defer</span> C.<span class="fn">free</span>(unsafe.<span class="fn">Pointer</span>(code))
    C.<span class="fn">PyRun_SimpleString</span>(code)

    <span class="cm">// Import module Python & panggil fungsi</span>
    moduleName := C.<span class="fn">CString</span>(<span class="str">"math"</span>)
    <span class="kw">defer</span> C.<span class="fn">free</span>(unsafe.<span class="fn">Pointer</span>(moduleName))

    pyModule := C.<span class="fn">PyImport_ImportModule</span>(moduleName)
    <span class="kw">if</span> pyModule == <span class="num">nil</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Failed to import module"</span>)
        <span class="kw">return</span>
    }
    <span class="kw">defer</span> C.<span class="fn">Py_DecRef</span>(pyModule)

    <span class="cm">// Panggil math.sqrt(144)</span>
    fnName := C.<span class="fn">CString</span>(<span class="str">"sqrt"</span>)
    <span class="kw">defer</span> C.<span class="fn">free</span>(unsafe.<span class="fn">Pointer</span>(fnName))

    pyFunc := C.<span class="fn">PyObject_GetAttrString</span>(pyModule, fnName)
    <span class="kw">defer</span> C.<span class="fn">Py_DecRef</span>(pyFunc)

    args := C.<span class="fn">PyTuple_New</span>(<span class="num">1</span>)
    C.<span class="fn">PyTuple_SetItem</span>(args, <span class="num">0</span>, C.<span class="fn">PyFloat_FromDouble</span>(<span class="num">144.0</span>))

    result := C.<span class="fn">PyObject_CallObject</span>(pyFunc, args)
    <span class="kw">defer</span> C.<span class="fn">Py_DecRef</span>(result)
    <span class="kw">defer</span> C.<span class="fn">Py_DecRef</span>(args)

    val := C.<span class="fn">PyFloat_AsDouble</span>(result)
    fmt.<span class="fn">Printf</span>(<span class="str">"Python math.sqrt(144) = %f\\n"</span>, val)
    <span class="cm">// Output: Python math.sqrt(144) = 12.000000</span>
}</div>
</div>

<div class="card animate-in">
<h3>Memanggil Custom Python Script dari Go</h3>
<div class="code-block"><span class="cm">// predict.py — Python ML script</span>
<span class="cm"># def predict(features):</span>
<span class="cm">#     """Dummy ML prediction"""</span>
<span class="cm">#     import numpy as np</span>
<span class="cm">#     weights = np.array([0.3, 0.5, 0.2])</span>
<span class="cm">#     features_np = np.array(features)</span>
<span class="cm">#     return float(np.dot(weights, features_np))</span>

<span class="cm">// main.go — Wrapper yang lebih bersih</span>
<span class="kw">package</span> main

<span class="cm">/*
#cgo pkg-config: python3-embed
#include &lt;Python.h&gt;

// Helper C function to call Python
static double callPythonPredict(const char* module, const char* func,
                                double a, double b, double c) {
    PyObject *pModule, *pFunc, *pArgs, *pResult;

    pModule = PyImport_ImportModule(module);
    if (!pModule) return -1;

    pFunc = PyObject_GetAttrString(pModule, func);
    if (!pFunc) { Py_DECREF(pModule); return -1; }

    pArgs = PyTuple_New(1);
    PyObject* pList = PyList_New(3);
    PyList_SetItem(pList, 0, PyFloat_FromDouble(a));
    PyList_SetItem(pList, 1, PyFloat_FromDouble(b));
    PyList_SetItem(pList, 2, PyFloat_FromDouble(c));
    PyTuple_SetItem(pArgs, 0, pList);

    pResult = PyObject_CallObject(pFunc, pArgs);
    double result = PyFloat_AsDouble(pResult);

    Py_DECREF(pResult);
    Py_DECREF(pArgs);
    Py_DECREF(pFunc);
    Py_DECREF(pModule);
    return result;
}
*/</span>
<span class="kw">import</span> <span class="str">"C"</span>

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    C.<span class="fn">Py_Initialize</span>()
    <span class="kw">defer</span> C.<span class="fn">Py_Finalize</span>()

    <span class="cm">// Tambah current directory ke Python path</span>
    C.<span class="fn">PyRun_SimpleString</span>(C.<span class="fn">CString</span>(<span class="str">"import sys; sys.path.insert(0, '.')"</span>))

    result := C.<span class="fn">callPythonPredict</span>(
        C.<span class="fn">CString</span>(<span class="str">"predict"</span>),
        C.<span class="fn">CString</span>(<span class="str">"predict"</span>),
        <span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>,
    )
    fmt.<span class="fn">Printf</span>(<span class="str">"ML Prediction: %f\\n"</span>, result)
    <span class="cm">// 0.3*1 + 0.5*2 + 0.2*3 = 1.9</span>
}

<span class="cm">// Build: go build -o app main.go</span>
<span class="cm">// Run:   ./app</span></div>

<div class="info-box">
<strong>Use Cases:</strong> Pattern ini digunakan saat Go service perlu memanfaatkan ekosistem Python ML (TensorFlow, PyTorch, scikit-learn) tanpa harus rewrite model di Go. Go menangani HTTP/concurrency, Python menangani ML inference.
</div>
</div>

<!-- ============ BAB 14: GO LOADING RUST ============ -->
<h2 class="animate-in">14. Go Loading Rust (via C FFI)</h2>

<div class="card animate-in">
<h3>Arsitektur: Go + Rust via FFI</h3>
<p>Go bisa memanggil fungsi Rust melalui <strong>C ABI (Foreign Function Interface)</strong>. Rust mengkompilasi ke shared library (.so/.dylib/.dll), lalu Go memanggilnya via cgo.</p>

<div class="flow-diagram">
    <div class="flow-node" style="background:#00b894;color:#fff;">Go Code</div>
    <div class="flow-arrow">cgo FFI</div>
    <div class="flow-node" style="background:#636e72;color:#fff;">C ABI</div>
    <div class="flow-arrow">links to</div>
    <div class="flow-node" style="background:#e17055;color:#fff;">Rust .so/.dylib</div>
</div>

<h4>Step 1: Rust Library (cdylib)</h4>
<div class="code-block"><span class="cm">// Cargo.toml</span>
<span class="cm">// [package]</span>
<span class="cm">// name = "mathlib"</span>
<span class="cm">// version = "0.1.0"</span>
<span class="cm">//</span>
<span class="cm">// [lib]</span>
<span class="cm">// crate-type = ["cdylib"]</span>

<span class="cm">// src/lib.rs</span>
<span class="kw">use</span> std::os::raw::c_char;
<span class="kw">use</span> std::ffi::{CStr, CString};

<span class="cm">// Export fungsi dengan C ABI</span>
#[no_mangle]
<span class="kw">pub</span> <span class="kw">extern</span> <span class="str">"C"</span> <span class="kw">fn</span> <span class="fn">rust_add</span>(a: <span class="type">i64</span>, b: <span class="type">i64</span>) -> <span class="type">i64</span> {
    a + b
}

#[no_mangle]
<span class="kw">pub</span> <span class="kw">extern</span> <span class="str">"C"</span> <span class="kw">fn</span> <span class="fn">rust_fibonacci</span>(n: <span class="type">u64</span>) -> <span class="type">u64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> n; }
    <span class="kw">let</span> (<span class="kw">mut</span> a, <span class="kw">mut</span> b) = (<span class="num">0u64</span>, <span class="num">1u64</span>);
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">2</span>..=n {
        <span class="kw">let</span> tmp = a + b;
        a = b;
        b = tmp;
    }
    b
}

#[no_mangle]
<span class="kw">pub</span> <span class="kw">extern</span> <span class="str">"C"</span> <span class="kw">fn</span> <span class="fn">rust_greet</span>(name: *<span class="kw">const</span> <span class="type">c_char</span>) -> *<span class="kw">mut</span> <span class="type">c_char</span> {
    <span class="kw">let</span> c_str = <span class="kw">unsafe</span> { CStr::from_ptr(name) };
    <span class="kw">let</span> name_str = c_str.to_str().unwrap_or(<span class="str">"unknown"</span>);
    <span class="kw">let</span> greeting = <span class="fn">format!</span>(<span class="str">"Hello {} from Rust!"</span>, name_str);
    CString::new(greeting).unwrap().into_raw()
}

#[no_mangle]
<span class="kw">pub</span> <span class="kw">extern</span> <span class="str">"C"</span> <span class="kw">fn</span> <span class="fn">rust_free_string</span>(s: *<span class="kw">mut</span> <span class="type">c_char</span>) {
    <span class="kw">unsafe</span> { <span class="kw">let</span> _ = CString::from_raw(s); }
}

<span class="cm">// Build: cargo build --release</span>
<span class="cm">// Output: target/release/libmathlib.so (Linux)</span>
<span class="cm">//         target/release/libmathlib.dylib (macOS)</span></div>

<h4>Step 2: Go Calling Rust</h4>
<div class="code-block"><span class="cm">// main.go</span>
<span class="kw">package</span> main

<span class="cm">/*
#cgo LDFLAGS: -L./rust/target/release -lmathlib
#include &lt;stdlib.h&gt;

// Deklarasi fungsi Rust
extern long long rust_add(long long a, long long b);
extern unsigned long long rust_fibonacci(unsigned long long n);
extern char* rust_greet(const char* name);
extern void rust_free_string(char* s);
*/</span>
<span class="kw">import</span> <span class="str">"C"</span>

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"unsafe"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Panggil Rust add</span>
    sum := C.<span class="fn">rust_add</span>(<span class="num">10</span>, <span class="num">32</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"Rust add(10, 32) = %d\\n"</span>, sum)

    <span class="cm">// Panggil Rust fibonacci</span>
    fib := C.<span class="fn">rust_fibonacci</span>(<span class="num">50</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"Rust fibonacci(50) = %d\\n"</span>, fib)

    <span class="cm">// Panggil Rust greet (string handling)</span>
    name := C.<span class="fn">CString</span>(<span class="str">"Gopher"</span>)
    <span class="kw">defer</span> C.<span class="fn">free</span>(unsafe.<span class="fn">Pointer</span>(name))

    greeting := C.<span class="fn">rust_greet</span>(name)
    goStr := C.<span class="fn">GoString</span>(greeting)
    C.<span class="fn">rust_free_string</span>(greeting) <span class="cm">// PENTING: free memory dari Rust</span>

    fmt.<span class="fn">Println</span>(goStr) <span class="cm">// "Hello Gopher from Rust!"</span>
}

<span class="cm">// Build & Run:</span>
<span class="cm">// cd rust && cargo build --release && cd ..</span>
<span class="cm">// CGO_ENABLED=1 go build -o app main.go</span>
<span class="cm">// LD_LIBRARY_PATH=./rust/target/release ./app</span></div>
</div>

<div class="card animate-in">
<h3>Kapan Menggunakan Go + Rust?</h3>
<div class="card-grid">
<div class="card">
<h4><span class="badge-green">Go Handles</span></h4>
<ul>
<li>HTTP server & routing</li>
<li>Concurrency orchestration</li>
<li>Business logic</li>
<li>JSON serialization</li>
<li>Service mesh & networking</li>
</ul>
</div>
<div class="card">
<h4><span class="badge-orange">Rust Handles</span></h4>
<ul>
<li>Performance-critical computation</li>
<li>Cryptography</li>
<li>Image/video processing</li>
<li>Parsing binary protocols</li>
<li>SIMD-optimized operations</li>
</ul>
</div>
</div>

<div class="success-box">
<strong>Real-world Example:</strong> Cloudflare menggunakan Go untuk HTTP handling dan Rust untuk performance-critical packet processing. Discord menulis ulang bagian message storage dari Go ke Rust untuk mengurangi latency spikes dari GC.
</div>
</div>

<!-- ============ RINGKASAN ============ -->
<h2 class="animate-in">Ringkasan</h2>

<div class="card animate-in">
<h3>Go Cheat Sheet</h3>
<div class="table-wrapper">
<table>
<tr><th>Konsep</th><th>Go Way</th><th>Contoh</th></tr>
<tr><td>OOP</td><td>Struct + Interface + Composition</td><td>Tidak ada class/inheritance</td></tr>
<tr><td>Error handling</td><td>Return error value</td><td><code>val, err := fn()</code></td></tr>
<tr><td>Concurrency</td><td>Goroutine + Channel</td><td><code>go fn()</code>, <code>ch <- val</code></td></tr>
<tr><td>Generics</td><td>Type parameters (Go 1.18+)</td><td><code>func F[T any](x T)</code></td></tr>
<tr><td>Null safety</td><td>Zero values + explicit nil check</td><td><code>if x != nil</code></td></tr>
<tr><td>Enum</td><td>const + iota</td><td><code>const (A = iota; B; C)</code></td></tr>
<tr><td>Constructor</td><td>NewXxx() function</td><td><code>func NewUser() *User</code></td></tr>
<tr><td>Visibility</td><td>Capital = public</td><td><code>Name</code> vs <code>name</code></td></tr>
<tr><td>Testing</td><td>Built-in testing package</td><td><code>func TestX(t *testing.T)</code></td></tr>
<tr><td>Package mgmt</td><td>Go modules</td><td><code>go mod init</code></td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Ekosistem & Tools Penting</h3>
<div class="pipeline">
    <div class="pipeline-stage"><strong>Format</strong><br>gofmt / goimports</div>
    <div class="pipeline-stage"><strong>Lint</strong><br>golangci-lint</div>
    <div class="pipeline-stage"><strong>Test</strong><br>go test ./...</div>
    <div class="pipeline-stage"><strong>Build</strong><br>go build</div>
    <div class="pipeline-stage"><strong>Deploy</strong><br>Docker scratch</div>
</div>

<div class="step-list" style="margin-top:16px;">
    <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Web Framework:</strong> Gin, Echo, Fiber, Chi</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>ORM:</strong> GORM, sqlx, Ent</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>gRPC:</strong> google.golang.org/grpc</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Testing:</strong> testify, gomock, httptest</div></div>
    <div class="step-item"><div class="step-num">5</div><div class="step-text"><strong>Config:</strong> viper, envconfig</div></div>
    <div class="step-item"><div class="step-num">6</div><div class="step-text"><strong>Logging:</strong> zap, zerolog, slog (Go 1.21+)</div></div>
    <div class="step-item"><div class="step-num">7</div><div class="step-text"><strong>CLI:</strong> cobra, urfave/cli</div></div>
    <div class="step-item"><div class="step-num">8</div><div class="step-text"><strong>Container:</strong> Docker multi-stage build → scratch image (~10MB)</div></div>
</div>
</div>
`;

// ====================== GOROUTINE SCHEDULER ANIMATION ======================
function initGolangAnimations() {
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

    // Goroutine Scheduler Visualization
    const cv = setupCanvas('goroutineCanvas', 800, 400);
    if (!cv) return;
    const { ctx, w, h } = cv;

    let animId = null;
    let paused = false;
    let tick = 0;

    // Processors (P)
    const processors = [
        { id: 'P0', x: 200, y: 80, color: '#00b894' },
        { id: 'P1', x: 400, y: 80, color: '#00b894' },
        { id: 'P2', x: 600, y: 80, color: '#00b894' },
    ];

    // OS Threads (M)
    const machines = [
        { id: 'M0', x: 200, y: 200, color: '#e17055' },
        { id: 'M1', x: 400, y: 200, color: '#e17055' },
        { id: 'M2', x: 600, y: 200, color: '#e17055' },
    ];

    // Goroutines (G)
    let goroutines = [];
    let gIdCounter = 0;

    function createGoroutine() {
        const colors = ['#6c5ce7', '#a29bfe', '#74b9ff', '#55efc4', '#ffeaa7', '#fd79a8', '#e17055'];
        goroutines.push({
            id: gIdCounter++,
            x: 50 + Math.random() * 30,
            y: 50 + Math.random() * 300,
            targetX: 0,
            targetY: 0,
            color: colors[gIdCounter % colors.length],
            state: 'runqueue', // runqueue, running, done
            assignedP: -1,
            progress: 0,
            lifetime: 120 + Math.floor(Math.random() * 200),
            radius: 14,
        });
    }

    // Initial goroutines
    for (let i = 0; i < 8; i++) createGoroutine();

    function roundRect(ctx, x, y, w, h, r) {
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

    function draw() {
        ctx.clearRect(0, 0, w, h);

        // Background
        ctx.fillStyle = '#1e1e2e';
        ctx.fillRect(0, 0, w, h);

        // Title
        ctx.fillStyle = '#cdd6f4';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Go Runtime Scheduler — M:N Threading Model', w / 2, 25);

        // Labels
        ctx.font = '12px monospace';
        ctx.fillStyle = '#89b4fa';
        ctx.textAlign = 'left';
        ctx.fillText('Run Queue (G)', 10, 55);

        // Draw CPU cores at bottom
        ctx.fillStyle = '#636e72';
        ctx.textAlign = 'center';
        ctx.font = '11px monospace';
        for (let i = 0; i < 3; i++) {
            const cx = 200 + i * 200;
            roundRect(ctx, cx - 40, 300, 80, 36, 6);
            ctx.fillStyle = '#636e72';
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.fillText('CPU Core ' + i, cx, 323);
        }

        // Draw M (OS Threads)
        machines.forEach(m => {
            roundRect(ctx, m.x - 35, m.y - 16, 70, 32, 6);
            ctx.fillStyle = m.color;
            ctx.fill();
            ctx.strokeStyle = '#fab387';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 13px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(m.id, m.x, m.y + 5);
        });

        // Draw lines M -> CPU
        ctx.strokeStyle = 'rgba(99,110,114,0.5)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        machines.forEach((m, i) => {
            ctx.beginPath();
            ctx.moveTo(m.x, m.y + 16);
            ctx.lineTo(200 + i * 200, 300);
            ctx.stroke();
        });
        ctx.setLineDash([]);

        // Draw P (Processors)
        processors.forEach(p => {
            roundRect(ctx, p.x - 35, p.y - 16, 70, 32, 8);
            ctx.fillStyle = p.color;
            ctx.fill();
            ctx.strokeStyle = '#55efc4';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 13px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(p.id, p.x, p.y + 5);
        });

        // Draw lines P -> M
        ctx.strokeStyle = 'rgba(0,184,148,0.4)';
        ctx.lineWidth = 1.5;
        processors.forEach((p, i) => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y + 16);
            ctx.lineTo(machines[i].x, machines[i].y - 16);
            ctx.stroke();
        });

        // Schedule goroutines
        if (!paused) {
            tick++;

            goroutines.forEach(g => {
                if (g.state === 'runqueue') {
                    // Try to assign to a P
                    for (let i = 0; i < processors.length; i++) {
                        const running = goroutines.filter(x => x.state === 'running' && x.assignedP === i);
                        if (running.length === 0) {
                            g.state = 'running';
                            g.assignedP = i;
                            g.targetX = processors[i].x;
                            g.targetY = processors[i].y - 50;
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

            // Remove done goroutines and spawn new
            const before = goroutines.length;
            goroutines = goroutines.filter(g => g.state !== 'done');
            const removed = before - goroutines.length;
            for (let i = 0; i < removed; i++) {
                createGoroutine();
            }
        }

        // Draw goroutines
        const runQueue = goroutines.filter(g => g.state === 'runqueue');
        runQueue.forEach((g, i) => {
            g.targetX = 50;
            g.targetY = 70 + i * 34;
        });

        goroutines.forEach(g => {
            // Smooth movement
            g.x += (g.targetX - g.x) * 0.12;
            g.y += (g.targetY - g.y) * 0.12;

            // Draw goroutine circle
            ctx.beginPath();
            ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
            ctx.fillStyle = g.color;
            ctx.fill();

            // Progress ring for running
            if (g.state === 'running') {
                const pct = g.progress / g.lifetime;
                ctx.beginPath();
                ctx.arc(g.x, g.y, g.radius + 3, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct);
                ctx.strokeStyle = '#55efc4';
                ctx.lineWidth = 2.5;
                ctx.stroke();
            }

            // Label
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 9px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('G' + g.id, g.x, g.y + 3.5);
        });

        // Legend
        ctx.font = '11px monospace';
        ctx.textAlign = 'left';
        const legendY = h - 30;
        const items = [
            { color: '#6c5ce7', label: 'G: Goroutine' },
            { color: '#00b894', label: 'P: Processor' },
            { color: '#e17055', label: 'M: OS Thread' },
            { color: '#636e72', label: 'CPU Core' },
        ];
        items.forEach((it, i) => {
            const lx = 100 + i * 180;
            ctx.beginPath();
            ctx.arc(lx, legendY, 6, 0, Math.PI * 2);
            ctx.fillStyle = it.color;
            ctx.fill();
            ctx.fillStyle = '#cdd6f4';
            ctx.fillText(it.label, lx + 12, legendY + 4);
        });

        // Stats
        ctx.fillStyle = '#89b4fa';
        ctx.textAlign = 'right';
        ctx.font = '11px monospace';
        const running = goroutines.filter(g => g.state === 'running').length;
        const queued = goroutines.filter(g => g.state === 'runqueue').length;
        ctx.fillText(`Running: ${running}  |  Queued: ${queued}  |  Total: ${goroutines.length}`, w - 20, h - 10);

        animId = requestAnimationFrame(draw);
    }

    draw();

    // Controls
    const btnStart = document.getElementById('grBtnStart');
    const btnPause = document.getElementById('grBtnPause');
    const btnReset = document.getElementById('grBtnReset');
    const btnAddG = document.getElementById('grBtnAddG');

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
}
