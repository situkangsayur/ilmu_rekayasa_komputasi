// ====================== CLEAN CODE, ARCHITECTURE PATTERNS & DDD ======================
// Covers: Clean Code, Layered, Hexagonal, Onion, Clean Architecture,
//         CQRS, Event Sourcing, CQRS+ES, DDD, Architecture Comparison

sections.cleancode = () => `
<h1 class="section-title animate-in">Clean Code & Software Architecture</h1>
<p class="section-subtitle animate-in">Prinsip Clean Code, Arsitektur Berlapis, Hexagonal, Onion, Clean Architecture, CQRS, Event Sourcing, dan Domain-Driven Design dalam Go</p>

<!-- =====================================================================
     BAGIAN 1: CLEAN CODE PRINCIPLES
     ===================================================================== -->
<h2 class="animate-in">1. Clean Code Principles — Robert C. Martin</h2>

<div class="info-box animate-in">
    <strong>Apa itu Clean Code?</strong> Clean code adalah kode yang mudah dibaca, dipahami, dan dimodifikasi oleh developer lain (termasuk diri sendiri di masa depan). Robert C. Martin ("Uncle Bob") mendefinisikan clean code sebagai kode yang <em>"does one thing well"</em> — setiap unit melakukan satu hal dengan baik dan jelas.
</div>

<!-- 1.1 Meaningful Names -->
<div class="card animate-in">
    <h3 style="color:var(--accent)"><span class="badge-blue">1.1</span> Meaningful Names (Penamaan yang Bermakna)</h3>
    <p>Nama variabel, fungsi, dan kelas harus mengungkapkan <strong>niat</strong> bukan sekadar tipe atau posisi. Nama yang baik menghilangkan kebutuhan komentar penjelasan.</p>

    <div class="warn-box">
        <strong>Prinsip Utama:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li>Gunakan nama yang mengungkapkan tujuan (intention-revealing names)</li>
            <li>Hindari disinformasi (jangan sebut sesuatu yang bukan daftar sebagai <code>list</code>)</li>
            <li>Buat perbedaan yang bermakna (bukan <code>a1</code>, <code>a2</code>)</li>
            <li>Gunakan nama yang bisa diucapkan (<code>genDatestamp</code> bukan <code>genymdhms</code>)</li>
            <li>Gunakan nama yang bisa dicari</li>
            <li>Hindari encoding/prefix (<code>m_</code>, <code>I</code> untuk interface)</li>
            <li>Nama class = noun, nama method = verb</li>
        </ul>
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="names-bad">Contoh Buruk</button>
        <button class="tab-btn" data-tab="names-good">Contoh Baik (Go)</button>
    </div>

    <div data-tab-content="names-bad" class="tab-content active">
        <p style="color:#ef4444;font-weight:600">Kode buruk — nama tidak bermakna:</p>
        <div class="code-block"><span class="kw">func</span> <span class="fn">getThem</span>() [][]<span class="type">int</span> {
    list1 := [][]<span class="type">int</span>{}
    <span class="kw">for</span> _, x := <span class="kw">range</span> theList {
        <span class="kw">if</span> x[<span class="num">0</span>] == <span class="num">4</span> {
            list1 = <span class="fn">append</span>(list1, x)
        }
    }
    <span class="kw">return</span> list1
}

<span class="cm">// Apa itu theList? Apa signifikansi 0? Apa arti nilai 4? Apa list1 ini?</span>
<span class="cm">// Pembaca kode harus menebak-nebak semuanya.</span>

<span class="kw">var</span> d <span class="type">int</span> <span class="cm">// elapsed time in days</span>

<span class="kw">func</span> <span class="fn">calcIt</span>(a, b, c <span class="type">float64</span>) <span class="type">float64</span> {
    <span class="kw">return</span> a * b * c / <span class="num">100</span>
}

<span class="kw">type</span> <span class="type">DtaRcrd102</span> <span class="kw">struct</span> {
    genymdhms <span class="type">time.Time</span>
    modymdhms <span class="type">time.Time</span>
    pszqint   <span class="type">string</span>
}</div>
    </div>

    <div data-tab-content="names-good" class="tab-content">
        <p style="color:#22c55e;font-weight:600">Kode baik — nama mengungkapkan niat:</p>
        <div class="code-block"><span class="kw">func</span> <span class="fn">getFlaggedCells</span>() []<span class="type">Cell</span> {
    flaggedCells := []<span class="type">Cell</span>{}
    <span class="kw">for</span> _, cell := <span class="kw">range</span> gameBoard {
        <span class="kw">if</span> cell.<span class="fn">IsFlagged</span>() {
            flaggedCells = <span class="fn">append</span>(flaggedCells, cell)
        }
    }
    <span class="kw">return</span> flaggedCells
}

<span class="cm">// Sekarang jelas: iterasi papan game, ambil cell yang sudah diflag</span>

<span class="kw">var</span> elapsedTimeInDays <span class="type">int</span>

<span class="kw">func</span> <span class="fn">calculateTaxAmount</span>(price, taxRate, quantity <span class="type">float64</span>) <span class="type">float64</span> {
    <span class="kw">return</span> price * taxRate * quantity / <span class="num">100</span>
}

<span class="kw">type</span> <span class="type">Customer</span> <span class="kw">struct</span> {
    CreatedAt  <span class="type">time.Time</span>
    ModifiedAt <span class="type">time.Time</span>
    AccountID  <span class="type">string</span>
}</div>
    </div>
</div>

<!-- 1.2 Small Functions -->
<div class="card animate-in">
    <h3 style="color:var(--accent)"><span class="badge-green">1.2</span> Small Functions — Do One Thing</h3>
    <p>Fungsi harus <strong>kecil</strong>. Seberapa kecil? Uncle Bob menyarankan tidak lebih dari 20 baris, idealnya 5-10 baris. Fungsi harus melakukan <em>satu hal</em>, melakukannya dengan <em>baik</em>, dan hanya melakukan itu saja.</p>

    <div class="info-box">
        <strong>Aturan Satu Level Abstraksi:</strong> Semua pernyataan dalam fungsi harus berada pada level abstraksi yang sama. Mencampur level abstraksi tinggi (memanggil use case) dengan level rendah (manipulasi string) dalam satu fungsi adalah tanda fungsi melakukan terlalu banyak hal.
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="func-bad">Fungsi Besar (Buruk)</button>
        <button class="tab-btn" data-tab="func-good">Fungsi Kecil (Baik)</button>
    </div>

    <div data-tab-content="func-bad" class="tab-content active">
        <div class="code-block"><span class="kw">func</span> <span class="fn">processOrder</span>(order <span class="type">Order</span>) <span class="type">error</span> {
    <span class="cm">// Validasi</span>
    <span class="kw">if</span> order.UserID == <span class="str">""</span> {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"user id kosong"</span>)
    }
    <span class="kw">if</span> <span class="fn">len</span>(order.Items) == <span class="num">0</span> {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"items kosong"</span>)
    }
    <span class="kw">if</span> order.TotalAmount <= <span class="num">0</span> {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"total tidak valid"</span>)
    }
    <span class="cm">// Cek stok</span>
    <span class="kw">for</span> _, item := <span class="kw">range</span> order.Items {
        stock, err := db.<span class="fn">QueryRow</span>(<span class="str">"SELECT stock FROM products WHERE id=?"</span>, item.ProductID)
        <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> err }
        <span class="kw">if</span> stock < item.Quantity {
            <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"stok %s tidak cukup"</span>, item.ProductID)
        }
    }
    <span class="cm">// Proses pembayaran</span>
    resp, err := paymentGateway.<span class="fn">Charge</span>(order.UserID, order.TotalAmount)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> err }
    <span class="kw">if</span> !resp.Success { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"pembayaran gagal"</span>) }
    <span class="cm">// Simpan order</span>
    <span class="kw">if</span> err := db.<span class="fn">Insert</span>(<span class="str">"orders"</span>, order); err != <span class="kw">nil</span> { <span class="kw">return</span> err }
    <span class="cm">// Kirim email</span>
    email.<span class="fn">Send</span>(order.UserEmail, <span class="str">"Order berhasil"</span>, buildEmailBody(order))
    <span class="kw">return nil</span>
    <span class="cm">// Fungsi ini melakukan: validasi, cek stok, pembayaran, simpan DB, kirim email = 5 hal!</span>
}</div>
    </div>

    <div data-tab-content="func-good" class="tab-content">
        <div class="code-block"><span class="kw">func</span> <span class="fn">processOrder</span>(order <span class="type">Order</span>) <span class="type">error</span> {
    <span class="kw">if</span> err := <span class="fn">validateOrder</span>(order); err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"validasi gagal: %w"</span>, err)
    }
    <span class="kw">if</span> err := <span class="fn">checkInventory</span>(order.Items); err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"cek stok gagal: %w"</span>, err)
    }
    <span class="kw">if</span> err := <span class="fn">chargePayment</span>(order); err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"pembayaran gagal: %w"</span>, err)
    }
    <span class="kw">if</span> err := <span class="fn">saveOrder</span>(order); err != <span class="kw">nil</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"simpan order gagal: %w"</span>, err)
    }
    <span class="fn">notifyCustomer</span>(order)
    <span class="kw">return nil</span>
    <span class="cm">// Setiap fungsi memiliki satu tanggung jawab yang jelas</span>
}

<span class="kw">func</span> <span class="fn">validateOrder</span>(order <span class="type">Order</span>) <span class="type">error</span> {
    <span class="kw">if</span> order.UserID == <span class="str">""</span>     { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"user id kosong"</span>) }
    <span class="kw">if</span> <span class="fn">len</span>(order.Items) == <span class="num">0</span>  { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"items kosong"</span>) }
    <span class="kw">if</span> order.TotalAmount <= <span class="num">0</span> { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"total tidak valid"</span>) }
    <span class="kw">return nil</span>
}

<span class="kw">func</span> <span class="fn">checkInventory</span>(items []<span class="type">OrderItem</span>) <span class="type">error</span> {
    <span class="kw">for</span> _, item := <span class="kw">range</span> items {
        <span class="kw">if</span> err := <span class="fn">ensureStockAvailable</span>(item); err != <span class="kw">nil</span> {
            <span class="kw">return</span> err
        }
    }
    <span class="kw">return nil</span>
}</div>
    </div>
</div>

<!-- 1.3 DRY, KISS, YAGNI -->
<div class="card animate-in">
    <h3 style="color:var(--accent)"><span class="badge-purple">1.3</span> DRY, KISS, dan YAGNI</h3>

    <div class="card-grid">
        <div class="card" style="border-left:4px solid #3b82f6">
            <h4 style="color:#3b82f6">DRY — Don't Repeat Yourself</h4>
            <p>Setiap pengetahuan harus memiliki <strong>satu, tidak ambigu, representasi otoritatif</strong> dalam sistem. Duplikasi adalah akar dari banyak masalah software. Ketika logika yang sama berulang di banyak tempat, perubahan harus dilakukan di banyak tempat — ini sumber bug.</p>
            <div class="warn-box" style="margin-top:0.5rem">Duplikasi bukan hanya duplikasi kode (copy-paste), tapi juga duplikasi pengetahuan/logika bisnis.</div>
        </div>
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">KISS — Keep It Simple, Stupid</h4>
            <p>Kebanyakan sistem bekerja paling baik jika dibuat <strong>sederhana</strong> daripada kompleks. Kompleksitas yang tidak perlu harus dihindari. Jika ada dua solusi, pilih yang lebih sederhana jika efeknya sama.</p>
            <div class="info-box" style="margin-top:0.5rem">"Simplicity is the ultimate sophistication" — Leonardo da Vinci. Kode yang sederhana lebih mudah di-debug, di-test, dan di-maintain.</div>
        </div>
        <div class="card" style="border-left:4px solid #f59e0b">
            <h4 style="color:#f59e0b">YAGNI — You Aren't Gonna Need It</h4>
            <p>Jangan menambahkan fungsionalitas sampai benar-benar dibutuhkan. Programmer sering menambahkan fitur "karena nanti pasti dibutuhkan" — ini membuang-buang waktu dan menciptakan kode yang tidak terpakai.</p>
            <div class="warn-box" style="margin-top:0.5rem">Implementasi yang tidak digunakan memperbesar codebase, menambah kompleksitas, dan perlu di-maintain meski tidak dipakai.</div>
        </div>
    </div>

    <div class="tabs" style="margin-top:1.5rem">
        <button class="tab-btn active" data-tab="dry-bad">DRY Violation</button>
        <button class="tab-btn" data-tab="dry-good">DRY Applied</button>
        <button class="tab-btn" data-tab="yagni-ex">YAGNI Violation</button>
    </div>

    <div data-tab-content="dry-bad" class="tab-content active">
        <p style="color:#ef4444;font-weight:600">Melanggar DRY — logika validasi email diulang:</p>
        <div class="code-block"><span class="kw">func</span> <span class="fn">registerUser</span>(email, password <span class="type">string</span>) <span class="type">error</span> {
    <span class="cm">// Validasi email</span>
    <span class="kw">if</span> !strings.<span class="fn">Contains</span>(email, <span class="str">"@"</span>) || !strings.<span class="fn">Contains</span>(email, <span class="str">"."</span>) {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"email tidak valid"</span>)
    }
    <span class="cm">// ... lanjut proses register</span>
}

<span class="kw">func</span> <span class="fn">updateUserEmail</span>(userID, newEmail <span class="type">string</span>) <span class="type">error</span> {
    <span class="cm">// Validasi email — DUPLIKASI!</span>
    <span class="kw">if</span> !strings.<span class="fn">Contains</span>(newEmail, <span class="str">"@"</span>) || !strings.<span class="fn">Contains</span>(newEmail, <span class="str">"."</span>) {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"email tidak valid"</span>)
    }
    <span class="cm">// ... lanjut proses update</span>
}

<span class="kw">func</span> <span class="fn">resetPassword</span>(email <span class="type">string</span>) <span class="type">error</span> {
    <span class="cm">// Validasi email — DUPLIKASI LAGI!</span>
    <span class="kw">if</span> !strings.<span class="fn">Contains</span>(email, <span class="str">"@"</span>) || !strings.<span class="fn">Contains</span>(email, <span class="str">"."</span>) {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"email tidak valid"</span>)
    }
    <span class="cm">// Jika aturan validasi email berubah, harus ubah di 3 tempat!</span>
}</div>
    </div>

    <div data-tab-content="dry-good" class="tab-content">
        <p style="color:#22c55e;font-weight:600">Menerapkan DRY — satu sumber kebenaran:</p>
        <div class="code-block"><span class="kw">func</span> <span class="fn">isValidEmail</span>(email <span class="type">string</span>) <span class="type">bool</span> {
    <span class="cm">// Satu tempat untuk logika validasi email</span>
    _, err := mail.<span class="fn">ParseAddress</span>(email)
    <span class="kw">return</span> err == <span class="kw">nil</span>
}

<span class="kw">func</span> <span class="fn">registerUser</span>(email, password <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">if</span> !<span class="fn">isValidEmail</span>(email) {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"email tidak valid"</span>)
    }
    <span class="cm">// ...</span>
}

<span class="kw">func</span> <span class="fn">updateUserEmail</span>(userID, newEmail <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">if</span> !<span class="fn">isValidEmail</span>(newEmail) {
        <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"email tidak valid"</span>)
    }
    <span class="cm">// ...</span>
}

<span class="cm">// Jika aturan berubah, cukup ubah isValidEmail() — satu tempat saja!</span></div>
    </div>

    <div data-tab-content="yagni-ex" class="tab-content">
        <p style="color:#ef4444;font-weight:600">Melanggar YAGNI — fitur tidak diperlukan sekarang:</p>
        <div class="code-block"><span class="kw">type</span> <span class="type">UserService</span> <span class="kw">struct</span> { <span class="cm">/* ... */</span> }

<span class="cm">// Fitur yang diminta: simpan dan ambil user</span>
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">SaveUser</span>(u <span class="type">User</span>) <span class="type">error</span>    { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">GetUser</span>(id <span class="type">string</span>) <span class="type">User</span> { <span class="cm">/* ... */</span> }

<span class="cm">// Fitur yang TIDAK diminta tapi ditambahkan "untuk nanti":</span>
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">ExportToCSV</span>() <span class="type">string</span>             { <span class="cm">/* belum dibutuhkan */</span> }
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">ImportFromExcel</span>(file <span class="type">[]byte</span>) {} { <span class="cm">/* belum dibutuhkan */</span> }
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">SyncWithLDAP</span>() <span class="type">error</span>             { <span class="cm">/* belum dibutuhkan */</span> }
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">GenerateReport</span>() <span class="type">Report</span>          { <span class="cm">/* belum dibutuhkan */</span> }

<span class="cm">// Semua kode di atas harus di-maintain, di-test, dan berkontribusi</span>
<span class="cm">// pada kompleksitas meski belum/tidak pernah digunakan</span></div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 2: LAYERED ARCHITECTURE
     ===================================================================== -->
<h2 class="animate-in">2. Layered Architecture (Arsitektur Berlapis)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Konsep Dasar</h3>
    <p>Arsitektur berlapis mengorganisasi sistem menjadi lapisan-lapisan horizontal yang masing-masing memiliki tanggung jawab spesifik. Setiap lapisan hanya boleh berkomunikasi dengan lapisan di bawah (atau di atasnya secara terbatas).</p>

    <div class="layer-diagram" style="margin:1.5rem 0">
        <div class="layer-item" style="background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border-radius:8px;padding:1rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:1rem">
            <div class="layer-num" style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">1</div>
            <div class="layer-info">
                <strong>Presentation Layer</strong>
                <span style="display:block;font-size:0.85rem;opacity:0.9">HTTP Handler, REST Controller, GraphQL Resolver, CLI — menangani input/output user</span>
            </div>
        </div>
        <div style="text-align:center;font-size:1.2rem;color:#6b7280;margin:0.2rem 0">&#8595; memanggil</div>
        <div class="layer-item" style="background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:#fff;border-radius:8px;padding:1rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:1rem">
            <div class="layer-num" style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">2</div>
            <div class="layer-info">
                <strong>Business Logic Layer (Service Layer)</strong>
                <span style="display:block;font-size:0.85rem;opacity:0.9">Use Case, Service, Domain Logic — inti logika bisnis aplikasi</span>
            </div>
        </div>
        <div style="text-align:center;font-size:1.2rem;color:#6b7280;margin:0.2rem 0">&#8595; memanggil</div>
        <div class="layer-item" style="background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;border-radius:8px;padding:1rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:1rem">
            <div class="layer-num" style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">3</div>
            <div class="layer-info">
                <strong>Data Access Layer (Repository)</strong>
                <span style="display:block;font-size:0.85rem;opacity:0.9">Repository Pattern, DAO — abstraksi akses data, query, CRUD</span>
            </div>
        </div>
        <div style="text-align:center;font-size:1.2rem;color:#6b7280;margin:0.2rem 0">&#8595; mengakses</div>
        <div class="layer-item" style="background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;border-radius:8px;padding:1rem;display:flex;align-items:center;gap:1rem">
            <div class="layer-num" style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">4</div>
            <div class="layer-info">
                <strong>Infrastructure / Database Layer</strong>
                <span style="display:block;font-size:0.85rem;opacity:0.9">PostgreSQL, MySQL, Redis, MongoDB, External API — penyimpanan data aktual</span>
            </div>
        </div>
    </div>

    <div class="card-grid">
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">Kelebihan</h4>
            <ul style="margin-left:1.2rem">
                <li>Mudah dipahami dan familiar bagi sebagian besar developer</li>
                <li>Separation of concerns yang jelas</li>
                <li>Mudah di-develop secara paralel per lapisan</li>
                <li>Testing per lapisan lebih mudah dengan mock</li>
                <li>Cocok untuk aplikasi CRUD sederhana hingga menengah</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid #ef4444">
            <h4 style="color:#ef4444">Kekurangan</h4>
            <ul style="margin-left:1.2rem">
                <li><strong>Tight coupling</strong>: Business layer bergantung langsung pada implementasi Data layer</li>
                <li>Sulit swap database (PostgreSQL → MongoDB) tanpa ubah service</li>
                <li>Sulit di-test tanpa database aktual</li>
                <li><strong>Sinkhole anti-pattern</strong>: request hanya lewat lapisan tanpa logika</li>
                <li>Tidak ideal untuk domain yang kompleks</li>
            </ul>
        </div>
    </div>

    <div class="code-block" style="margin-top:1rem"><span class="cm">// Struktur folder Layered Architecture (Go)</span>
my-app/
├── handler/          <span class="cm">// Presentation Layer</span>
│   ├── user_handler.go
│   └── product_handler.go
├── service/          <span class="cm">// Business Logic Layer</span>
│   ├── user_service.go
│   └── product_service.go
├── repository/       <span class="cm">// Data Access Layer</span>
│   ├── user_repo.go
│   └── product_repo.go
└── db/               <span class="cm">// Infrastructure</span>
    └── postgres.go</div>
</div>

<!-- =====================================================================
     BAGIAN 3: HEXAGONAL ARCHITECTURE
     ===================================================================== -->
<h2 class="animate-in">3. Hexagonal Architecture (Ports &amp; Adapters)</h2>

<div class="info-box animate-in">
    <strong>Diciptakan oleh Alistair Cockburn (2005).</strong> Ide utama: <em>isolasi domain bisnis dari semua hal eksternal</em> (database, UI, API eksternal, message queue). Domain berada di tengah, berkomunikasi dengan dunia luar hanya melalui <strong>Ports</strong> (interface) dan <strong>Adapters</strong> (implementasi konkret).
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Konsep Inti</h3>

    <div class="card-grid-3">
        <div class="card" style="border-left:4px solid #8b5cf6;text-align:center">
            <div style="font-size:2rem;margin-bottom:0.5rem">&#9711;</div>
            <h4 style="color:#8b5cf6">Domain (Core)</h4>
            <p style="font-size:0.9rem">Logika bisnis murni. Tidak tahu apa-apa tentang database, HTTP, atau framework. Berisi Entity, Value Object, Domain Service.</p>
        </div>
        <div class="card" style="border-left:4px solid #3b82f6;text-align:center">
            <div style="font-size:2rem;margin-bottom:0.5rem">&#9671;</div>
            <h4 style="color:#3b82f6">Port (Interface)</h4>
            <p style="font-size:0.9rem">Interface Go yang didefinisikan oleh domain. Ada dua jenis: <strong>Driving Port</strong> (digunakan driver untuk masuk ke domain) dan <strong>Driven Port</strong> (domain menggunakannya ke luar).</p>
        </div>
        <div class="card" style="border-left:4px solid #22c55e;text-align:center">
            <div style="font-size:2rem;margin-bottom:0.5rem">&#9633;</div>
            <h4 style="color:#22c55e">Adapter (Implementasi)</h4>
            <p style="font-size:0.9rem">Implementasi konkret dari port. Contoh: <code>PostgresUserRepository</code> mengimplementasikan <code>UserRepository</code> port. Bisa diswap tanpa mengubah domain.</p>
        </div>
    </div>

    <!-- SVG Hexagon Diagram -->
    <div style="text-align:center;margin:2rem 0">
        <svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;width:100%">
            <!-- Outer hexagon (Adapters) -->
            <polygon points="250,20 440,120 440,220 250,320 60,220 60,120" fill="none" stroke="#6b7280" stroke-width="2" stroke-dasharray="6,3"/>
            <!-- Middle hexagon (Ports) -->
            <polygon points="250,60 400,140 400,200 250,280 100,200 100,140" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
            <!-- Inner hexagon (Domain) -->
            <polygon points="250,110 360,160 360,180 250,230 140,180 140,160" fill="#1e3a5f" stroke="#3b82f6" stroke-width="2"/>
            <!-- Domain label -->
            <text x="250" y="168" text-anchor="middle" fill="#93c5fd" font-size="13" font-weight="bold">DOMAIN</text>
            <text x="250" y="184" text-anchor="middle" fill="#93c5fd" font-size="10">(Business Logic)</text>
            <!-- Port labels -->
            <text x="250" y="52" text-anchor="middle" fill="#3b82f6" font-size="10">Driving Port</text>
            <text x="250" y="296" text-anchor="middle" fill="#3b82f6" font-size="10">Driven Port</text>
            <!-- Left Port -->
            <text x="90" y="172" text-anchor="middle" fill="#3b82f6" font-size="9">Port</text>
            <!-- Right Port -->
            <text x="410" y="172" text-anchor="middle" fill="#3b82f6" font-size="9">Port</text>
            <!-- Adapter boxes - Top (HTTP) -->
            <rect x="195" y="5" width="110" height="32" rx="5" fill="#1d4ed8" opacity="0.8"/>
            <text x="250" y="25" text-anchor="middle" fill="#fff" font-size="11">HTTP Adapter</text>
            <!-- Adapter boxes - Bottom (Postgres) -->
            <rect x="195" y="303" width="110" height="32" rx="5" fill="#166534" opacity="0.8"/>
            <text x="250" y="324" text-anchor="middle" fill="#fff" font-size="11">Postgres Adapter</text>
            <!-- Adapter boxes - Left (CLI) -->
            <rect x="12" y="152" width="80" height="32" rx="5" fill="#7c3aed" opacity="0.8"/>
            <text x="52" y="172" text-anchor="middle" fill="#fff" font-size="11">CLI Adapter</text>
            <!-- Adapter boxes - Right (Redis) -->
            <rect x="408" y="152" width="80" height="32" rx="5" fill="#b91c1c" opacity="0.8"/>
            <text x="448" y="172" text-anchor="middle" fill="#fff" font-size="11">Redis Adapter</text>
            <!-- Arrows -->
            <line x1="250" y1="37" x2="250" y2="58" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
            <line x1="250" y1="282" x2="250" y2="301" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
            <line x1="92" y1="168" x2="100" y2="168" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
            <line x1="408" y1="168" x2="400" y2="168" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
            <defs>
                <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <path d="M0,0 L0,8 L8,4 z" fill="#6b7280"/>
                </marker>
            </defs>
        </svg>
        <p style="color:#6b7280;font-size:0.85rem;margin-top:0.5rem">Diagram Hexagonal Architecture — Domain di tengah, terisolasi dari adapter luar</p>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Implementasi Go — UserRepository Port &amp; Adapters</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="hex-port">Port (Interface)</button>
        <button class="tab-btn" data-tab="hex-postgres">Postgres Adapter</button>
        <button class="tab-btn" data-tab="hex-memory">InMemory Adapter</button>
        <button class="tab-btn" data-tab="hex-domain">Domain Service</button>
        <button class="tab-btn" data-tab="hex-struct">Folder Structure</button>
    </div>

    <div data-tab-content="hex-port" class="tab-content active">
        <p>Port didefinisikan <strong>di dalam</strong> package domain, bukan di package infrastruktur:</p>
        <div class="code-block"><span class="cm">// internal/domain/user.go</span>
<span class="kw">package</span> domain

<span class="kw">import</span> <span class="str">"context"</span>

<span class="cm">// Entity</span>
<span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    ID       <span class="type">string</span>
    Name     <span class="type">string</span>
    Email    <span class="type">string</span>
    Password <span class="type">string</span>
    Active   <span class="type">bool</span>
}

<span class="cm">// Driven Port — didefinisikan domain, diimplementasikan infrastruktur</span>
<span class="kw">type</span> <span class="type">UserRepository</span> <span class="kw">interface</span> {
    <span class="fn">Save</span>(ctx <span class="type">context.Context</span>, user <span class="type">User</span>) <span class="type">error</span>
    <span class="fn">FindByID</span>(ctx <span class="type">context.Context</span>, id <span class="type">string</span>) (<span class="type">User</span>, <span class="type">error</span>)
    <span class="fn">FindByEmail</span>(ctx <span class="type">context.Context</span>, email <span class="type">string</span>) (<span class="type">User</span>, <span class="type">error</span>)
    <span class="fn">Update</span>(ctx <span class="type">context.Context</span>, user <span class="type">User</span>) <span class="type">error</span>
    <span class="fn">Delete</span>(ctx <span class="type">context.Context</span>, id <span class="type">string</span>) <span class="type">error</span>
}

<span class="cm">// Driven Port — untuk notifikasi</span>
<span class="kw">type</span> <span class="type">EmailNotifier</span> <span class="kw">interface</span> {
    <span class="fn">SendWelcome</span>(ctx <span class="type">context.Context</span>, to, name <span class="type">string</span>) <span class="type">error</span>
    <span class="fn">SendPasswordReset</span>(ctx <span class="type">context.Context</span>, to, token <span class="type">string</span>) <span class="type">error</span>
}

<span class="cm">// Driving Port — didefinisikan domain, diimplementasikan di application layer</span>
<span class="kw">type</span> <span class="type">UserService</span> <span class="kw">interface</span> {
    <span class="fn">Register</span>(ctx <span class="type">context.Context</span>, name, email, password <span class="type">string</span>) (<span class="type">User</span>, <span class="type">error</span>)
    <span class="fn">Authenticate</span>(ctx <span class="type">context.Context</span>, email, password <span class="type">string</span>) (<span class="type">User</span>, <span class="type">error</span>)
    <span class="fn">GetProfile</span>(ctx <span class="type">context.Context</span>, userID <span class="type">string</span>) (<span class="type">User</span>, <span class="type">error</span>)
}</div>
    </div>

    <div data-tab-content="hex-postgres" class="tab-content">
        <p>Postgres Adapter mengimplementasikan port <code>UserRepository</code>:</p>
        <div class="code-block"><span class="cm">// internal/adapters/postgres/user_repository.go</span>
<span class="kw">package</span> postgres

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"database/sql"</span>
    <span class="str">"fmt"</span>

    <span class="str">"myapp/internal/domain"</span>
)

<span class="kw">type</span> <span class="type">PostgresUserRepository</span> <span class="kw">struct</span> {
    db *<span class="type">sql.DB</span>
}

<span class="kw">func</span> <span class="fn">NewPostgresUserRepository</span>(db *<span class="type">sql.DB</span>) domain.<span class="type">UserRepository</span> {
    <span class="kw">return</span> &<span class="type">PostgresUserRepository</span>{db: db}
}

<span class="kw">func</span> (r *<span class="type">PostgresUserRepository</span>) <span class="fn">Save</span>(ctx <span class="type">context.Context</span>, user domain.<span class="type">User</span>) <span class="type">error</span> {
    query := <span class="str">"INSERT INTO users (id, name, email, password, active) VALUES ($1,$2,$3,$4,$5)"</span>
    _, err := r.db.<span class="fn">ExecContext</span>(ctx, query, user.ID, user.Name, user.Email, user.Password, user.Active)
    <span class="kw">return</span> err
}

<span class="kw">func</span> (r *<span class="type">PostgresUserRepository</span>) <span class="fn">FindByID</span>(ctx <span class="type">context.Context</span>, id <span class="type">string</span>) (domain.<span class="type">User</span>, <span class="type">error</span>) {
    <span class="kw">var</span> user domain.<span class="type">User</span>
    query := <span class="str">"SELECT id, name, email, password, active FROM users WHERE id = $1"</span>
    err := r.db.<span class="fn">QueryRowContext</span>(ctx, query, id).<span class="fn">Scan</span>(
        &user.ID, &user.Name, &user.Email, &user.Password, &user.Active,
    )
    <span class="kw">if</span> err == sql.<span class="type">ErrNoRows</span> {
        <span class="kw">return</span> domain.<span class="type">User</span>{}, fmt.<span class="fn">Errorf</span>(<span class="str">"user %s tidak ditemukan"</span>, id)
    }
    <span class="kw">return</span> user, err
}

<span class="kw">func</span> (r *<span class="type">PostgresUserRepository</span>) <span class="fn">FindByEmail</span>(ctx <span class="type">context.Context</span>, email <span class="type">string</span>) (domain.<span class="type">User</span>, <span class="type">error</span>) {
    <span class="kw">var</span> user domain.<span class="type">User</span>
    query := <span class="str">"SELECT id, name, email, password, active FROM users WHERE email = $1"</span>
    err := r.db.<span class="fn">QueryRowContext</span>(ctx, query, email).<span class="fn">Scan</span>(
        &user.ID, &user.Name, &user.Email, &user.Password, &user.Active,
    )
    <span class="kw">if</span> err == sql.<span class="type">ErrNoRows</span> {
        <span class="kw">return</span> domain.<span class="type">User</span>{}, fmt.<span class="fn">Errorf</span>(<span class="str">"user dengan email %s tidak ditemukan"</span>, email)
    }
    <span class="kw">return</span> user, err
}

<span class="kw">func</span> (r *<span class="type">PostgresUserRepository</span>) <span class="fn">Update</span>(ctx <span class="type">context.Context</span>, user domain.<span class="type">User</span>) <span class="type">error</span> {
    query := <span class="str">"UPDATE users SET name=$1, email=$2, active=$3 WHERE id=$4"</span>
    _, err := r.db.<span class="fn">ExecContext</span>(ctx, query, user.Name, user.Email, user.Active, user.ID)
    <span class="kw">return</span> err
}

<span class="kw">func</span> (r *<span class="type">PostgresUserRepository</span>) <span class="fn">Delete</span>(ctx <span class="type">context.Context</span>, id <span class="type">string</span>) <span class="type">error</span> {
    _, err := r.db.<span class="fn">ExecContext</span>(ctx, <span class="str">"DELETE FROM users WHERE id = $1"</span>, id)
    <span class="kw">return</span> err
}</div>
    </div>

    <div data-tab-content="hex-memory" class="tab-content">
        <p>InMemory Adapter — untuk testing tanpa database:</p>
        <div class="code-block"><span class="cm">// internal/adapters/memory/user_repository.go</span>
<span class="kw">package</span> memory

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"fmt"</span>
    <span class="str">"sync"</span>

    <span class="str">"myapp/internal/domain"</span>
)

<span class="kw">type</span> <span class="type">InMemoryUserRepository</span> <span class="kw">struct</span> {
    mu    sync.<span class="type">RWMutex</span>
    users <span class="kw">map</span>[<span class="type">string</span>]domain.<span class="type">User</span>
}

<span class="kw">func</span> <span class="fn">NewInMemoryUserRepository</span>() domain.<span class="type">UserRepository</span> {
    <span class="kw">return</span> &<span class="type">InMemoryUserRepository</span>{
        users: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">string</span>]domain.<span class="type">User</span>),
    }
}

<span class="kw">func</span> (r *<span class="type">InMemoryUserRepository</span>) <span class="fn">Save</span>(ctx <span class="type">context.Context</span>, user domain.<span class="type">User</span>) <span class="type">error</span> {
    r.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> r.mu.<span class="fn">Unlock</span>()
    r.users[user.ID] = user
    <span class="kw">return nil</span>
}

<span class="kw">func</span> (r *<span class="type">InMemoryUserRepository</span>) <span class="fn">FindByID</span>(ctx <span class="type">context.Context</span>, id <span class="type">string</span>) (domain.<span class="type">User</span>, <span class="type">error</span>) {
    r.mu.<span class="fn">RLock</span>()
    <span class="kw">defer</span> r.mu.<span class="fn">RUnlock</span>()
    user, ok := r.users[id]
    <span class="kw">if</span> !ok {
        <span class="kw">return</span> domain.<span class="type">User</span>{}, fmt.<span class="fn">Errorf</span>(<span class="str">"user %s tidak ditemukan"</span>, id)
    }
    <span class="kw">return</span> user, <span class="kw">nil</span>
}

<span class="cm">// ... implementasi FindByEmail, Update, Delete mirip</span>

<span class="cm">// KEUNTUNGAN UTAMA HEXAGONAL:</span>
<span class="cm">// Test unit domain service menggunakan InMemoryUserRepository</span>
<span class="cm">// Produksi menggunakan PostgresUserRepository</span>
<span class="cm">// Domain service TIDAK BERUBAH — hanya injeksi dependency yang berbeda!</span>

<span class="cm">// Contoh Test:</span>
<span class="kw">func</span> <span class="fn">TestRegisterUser</span>(t *testing.<span class="type">T</span>) {
    repo := memory.<span class="fn">NewInMemoryUserRepository</span>()   <span class="cm">// tidak perlu DB!</span>
    notifier := &<span class="type">MockEmailNotifier</span>{}
    svc := domain.<span class="fn">NewUserService</span>(repo, notifier)

    user, err := svc.<span class="fn">Register</span>(<span class="fn">context.Background</span>(), <span class="str">"Budi"</span>, <span class="str">"budi@test.com"</span>, <span class="str">"password"</span>)
    assert.<span class="fn">NoError</span>(t, err)
    assert.<span class="fn">Equal</span>(t, <span class="str">"Budi"</span>, user.Name)
}</div>
    </div>

    <div data-tab-content="hex-domain" class="tab-content">
        <p>Domain Service menggunakan port, tidak tahu tentang implementasi konkret:</p>
        <div class="code-block"><span class="cm">// internal/domain/user_service.go</span>
<span class="kw">package</span> domain

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"errors"</span>
    <span class="str">"golang.org/x/crypto/bcrypt"</span>
    <span class="str">"github.com/google/uuid"</span>
)

<span class="kw">type</span> <span class="type">userService</span> <span class="kw">struct</span> {
    repo     <span class="type">UserRepository</span>   <span class="cm">// driven port — interface!</span>
    notifier <span class="type">EmailNotifier</span>    <span class="cm">// driven port — interface!</span>
}

<span class="kw">func</span> <span class="fn">NewUserService</span>(repo <span class="type">UserRepository</span>, notifier <span class="type">EmailNotifier</span>) <span class="type">UserService</span> {
    <span class="kw">return</span> &<span class="type">userService</span>{repo: repo, notifier: notifier}
}

<span class="kw">func</span> (s *<span class="type">userService</span>) <span class="fn">Register</span>(ctx <span class="type">context.Context</span>, name, email, password <span class="type">string</span>) (<span class="type">User</span>, <span class="type">error</span>) {
    existing, _ := s.repo.<span class="fn">FindByEmail</span>(ctx, email)
    <span class="kw">if</span> existing.ID != <span class="str">""</span> {
        <span class="kw">return</span> <span class="type">User</span>{}, <span class="fn">errors.New</span>(<span class="str">"email sudah terdaftar"</span>)
    }

    hashedPw, err := bcrypt.<span class="fn">GenerateFromPassword</span>([]<span class="type">byte</span>(password), bcrypt.<span class="type">DefaultCost</span>)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> <span class="type">User</span>{}, err }

    user := <span class="type">User</span>{
        ID:       uuid.<span class="fn">NewString</span>(),
        Name:     name,
        Email:    email,
        Password: <span class="type">string</span>(hashedPw),
        Active:   <span class="kw">true</span>,
    }

    <span class="kw">if</span> err := s.repo.<span class="fn">Save</span>(ctx, user); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="type">User</span>{}, err
    }

    <span class="cm">// Domain tidak tahu apakah ini SMTP, SendGrid, atau mock</span>
    _ = s.notifier.<span class="fn">SendWelcome</span>(ctx, email, name)

    <span class="kw">return</span> user, <span class="kw">nil</span>
}</div>
    </div>

    <div data-tab-content="hex-struct" class="tab-content">
        <div class="code-block"><span class="cm">// Struktur folder Hexagonal Architecture (Go)</span>
myapp/
├── cmd/
│   └── api/
│       └── main.go              <span class="cm">// Wiring: sambungkan adapter ke domain</span>
├── internal/
│   ├── domain/                  <span class="cm">// DOMAIN — inti, tidak ada dependency eksternal</span>
│   │   ├── user.go              <span class="cm">// Entity + Ports (interface)</span>
│   │   ├── user_service.go      <span class="cm">// Domain Service</span>
│   │   └── errors.go            <span class="cm">// Domain errors</span>
│   ├── adapters/
│   │   ├── http/                <span class="cm">// Driving Adapter (masuk ke domain)</span>
│   │   │   ├── user_handler.go
│   │   │   └── router.go
│   │   ├── grpc/                <span class="cm">// Driving Adapter alternatif</span>
│   │   │   └── user_server.go
│   │   ├── postgres/            <span class="cm">// Driven Adapter (domain keluar ke DB)</span>
│   │   │   └── user_repository.go
│   │   ├── redis/               <span class="cm">// Driven Adapter (cache)</span>
│   │   │   └── cache.go
│   │   ├── smtp/                <span class="cm">// Driven Adapter (email)</span>
│   │   │   └── email_notifier.go
│   │   └── memory/              <span class="cm">// In-Memory Adapter (untuk testing)</span>
│   │       └── user_repository.go
│   └── config/
│       └── config.go
└── go.mod</div>
        <div class="success-box" style="margin-top:1rem">
            <strong>Kenapa Hexagonal Superior?</strong>
            <ul style="margin:0.5rem 0 0 1.2rem">
                <li><strong>Testability</strong>: Test domain tanpa database aktual menggunakan InMemory adapter</li>
                <li><strong>Flexibility</strong>: Ganti PostgreSQL ke MySQL hanya ubah satu file adapter</li>
                <li><strong>Isolation</strong>: Domain tidak bergantung pada framework, library, atau infrastruktur apapun</li>
                <li><strong>Multiple Entry Points</strong>: Sama-sama expose via REST, gRPC, atau CLI tanpa ubah domain</li>
            </ul>
        </div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 4: ONION ARCHITECTURE
     ===================================================================== -->
<h2 class="animate-in">4. Onion Architecture</h2>

<div class="info-box animate-in">
    <strong>Diciptakan oleh Jeffrey Palermo (2008).</strong> Mirip dengan Hexagonal tetapi lebih eksplisit tentang lapisan dalam domain. Aturan utama: <strong>dependency hanya boleh mengarah ke dalam</strong> — lapisan luar boleh bergantung pada lapisan dalam, tapi lapisan dalam tidak boleh bergantung pada lapisan luar.
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Lapisan Konsentris</h3>

    <!-- SVG Concentric Circles Diagram -->
    <div style="text-align:center;margin:2rem 0">
        <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" style="max-width:420px;width:100%">
            <!-- Infrastructure (outermost) -->
            <circle cx="210" cy="210" r="195" fill="#1c1c2e" stroke="#6b7280" stroke-width="2"/>
            <!-- Application Services -->
            <circle cx="210" cy="210" r="145" fill="#1e2a3a" stroke="#f59e0b" stroke-width="2.5"/>
            <!-- Domain Services -->
            <circle cx="210" cy="210" r="95" fill="#162032" stroke="#8b5cf6" stroke-width="2.5"/>
            <!-- Domain Model (innermost) -->
            <circle cx="210" cy="210" r="55" fill="#0d1f35" stroke="#22c55e" stroke-width="3"/>
            <!-- Labels -->
            <text x="210" y="195" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">Domain</text>
            <text x="210" y="210" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">Model</text>
            <text x="210" y="225" text-anchor="middle" fill="#22c55e" font-size="9">Entity, Value Object</text>
            <text x="210" y="135" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="bold">Domain Services</text>
            <text x="210" y="150" text-anchor="middle" fill="#8b5cf6" font-size="9">Business Rules</text>
            <text x="210" y="85" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Application Services</text>
            <text x="210" y="100" text-anchor="middle" fill="#f59e0b" font-size="9">Use Cases, Orchestration</text>
            <text x="210" y="30" text-anchor="middle" fill="#9ca3af" font-size="11" font-weight="bold">Infrastructure</text>
            <text x="210" y="45" text-anchor="middle" fill="#9ca3af" font-size="9">DB, UI, API, Framework</text>
            <!-- Dependency arrows (pointing inward) -->
            <path d="M 210,390 L 210,360" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrowIn)"/>
            <path d="M 210,355 L 210,310" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrowIn)"/>
            <path d="M 210,305 L 210,270" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrowIn)"/>
            <!-- Arrow label -->
            <text x="225" y="345" fill="#9ca3af" font-size="9">dependency</text>
            <text x="225" y="357" fill="#9ca3af" font-size="9">ke dalam</text>
            <defs>
                <marker id="arrowIn" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <path d="M0,0 L0,8 L8,4 z" fill="#6b7280"/>
                </marker>
            </defs>
        </svg>
        <p style="color:#6b7280;font-size:0.85rem">Onion Architecture — Lingkaran terluar bergantung ke dalam, bukan sebaliknya</p>
    </div>

    <div class="card-grid">
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">Domain Model (Inti)</h4>
            <p>Entity dan Value Object murni. Tidak ada dependency ke framework apapun. Berisi state dan behavior domain bisnis. Contoh: <code>User</code>, <code>Order</code>, <code>Money</code>.</p>
        </div>
        <div class="card" style="border-left:4px solid #8b5cf6">
            <h4 style="color:#8b5cf6">Domain Services</h4>
            <p>Business rules yang tidak alami milik satu entity. Interface Repository didefinisikan di sini. Contoh: <code>TransferService</code>, <code>PricingService</code>.</p>
        </div>
        <div class="card" style="border-left:4px solid #f59e0b">
            <h4 style="color:#f59e0b">Application Services</h4>
            <p>Mengorkestrasikan domain services untuk menyelesaikan use case. Tidak berisi business logic. Mengelola transaksi. Contoh: <code>PlaceOrderUseCase</code>.</p>
        </div>
        <div class="card" style="border-left:4px solid #6b7280">
            <h4 style="color:#9ca3af">Infrastructure</h4>
            <p>Semua hal teknis: database, UI, API eksternal, framework. Mengimplementasikan interface yang didefinisikan di lapisan dalam. Boleh bergantung ke semua lapisan dalam.</p>
        </div>
    </div>

    <div class="code-block" style="margin-top:1rem"><span class="cm">// Struktur Folder Onion Architecture (Go)</span>
myapp/
├── domain/
│   ├── model/
│   │   ├── user.go           <span class="cm">// Entity</span>
│   │   └── money.go          <span class="cm">// Value Object</span>
│   └── repository/
│       └── user_repository.go <span class="cm">// Interface (didefinisikan di domain)</span>
├── domain_services/
│   ├── user_domain_service.go <span class="cm">// Business rules lintas entity</span>
│   └── pricing_service.go
├── application/
│   ├── commands/
│   │   └── register_user.go  <span class="cm">// Command/Use Case</span>
│   └── queries/
│       └── get_user.go
└── infrastructure/
    ├── persistence/
    │   └── postgres_user_repo.go <span class="cm">// Implementasi interface domain</span>
    ├── web/
    │   └── user_controller.go
    └── config/
        └── db.go</div>
</div>

<!-- =====================================================================
     BAGIAN 5: CLEAN ARCHITECTURE
     ===================================================================== -->
<h2 class="animate-in">5. Clean Architecture — Uncle Bob</h2>

<div class="info-box animate-in">
    <strong>Dipopulerkan Robert C. Martin dalam bukunya "Clean Architecture" (2017).</strong> Clean Architecture adalah generalisasi dari Hexagonal dan Onion Architecture. Memiliki <strong>Dependency Rule</strong>: source code dependencies hanya boleh mengarah ke dalam — lapisan dalam tidak boleh tahu apapun tentang lapisan luar.
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Empat Lapisan Clean Architecture</h3>

    <!-- SVG Clean Architecture Diagram -->
    <div style="text-align:center;margin:2rem 0">
        <svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" style="max-width:520px;width:100%">
            <!-- Frameworks & Drivers (outermost) -->
            <ellipse cx="230" cy="190" rx="218" ry="178" fill="#1a1a2e" stroke="#6b7280" stroke-width="2"/>
            <!-- Interface Adapters -->
            <ellipse cx="230" cy="190" rx="168" ry="135" fill="#16213e" stroke="#3b82f6" stroke-width="2.5"/>
            <!-- Use Cases -->
            <ellipse cx="230" cy="190" rx="118" ry="95" fill="#0f3460" stroke="#f59e0b" stroke-width="2.5"/>
            <!-- Entities (innermost) -->
            <ellipse cx="230" cy="190" rx="68" ry="55" fill="#533483" stroke="#22c55e" stroke-width="3"/>
            <!-- Text labels -->
            <text x="230" y="183" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="bold">Entities</text>
            <text x="230" y="199" text-anchor="middle" fill="#22c55e" font-size="9">Enterprise Business Rules</text>
            <text x="230" y="128" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Use Cases</text>
            <text x="230" y="143" text-anchor="middle" fill="#f59e0b" font-size="9">Application Business Rules</text>
            <text x="230" y="73" text-anchor="middle" fill="#3b82f6" font-size="11" font-weight="bold">Interface Adapters</text>
            <text x="230" y="88" text-anchor="middle" fill="#3b82f6" font-size="9">Controllers, Gateways, Presenters</text>
            <text x="230" y="23" text-anchor="middle" fill="#9ca3af" font-size="11" font-weight="bold">Frameworks &amp; Drivers</text>
            <text x="230" y="38" text-anchor="middle" fill="#9ca3af" font-size="9">DB, UI, Web, Devices</text>
            <!-- Right side annotation -->
            <text x="400" y="150" fill="#9ca3af" font-size="9">&#8592; dependency</text>
            <text x="400" y="162" fill="#9ca3af" font-size="9">rule: ke dalam</text>
        </svg>
        <p style="color:#6b7280;font-size:0.85rem">Clean Architecture — The Dependency Rule</p>
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="ca-entities">Entities</button>
        <button class="tab-btn" data-tab="ca-usecases">Use Cases</button>
        <button class="tab-btn" data-tab="ca-adapters">Interface Adapters</button>
        <button class="tab-btn" data-tab="ca-frameworks">Frameworks</button>
    </div>

    <div data-tab-content="ca-entities" class="tab-content active">
        <p><strong>Entities</strong> — Enterprise Business Rules. Objek bisnis paling fundamental. Tidak bergantung apapun.</p>
        <div class="code-block"><span class="cm">// entities/user.go</span>
<span class="kw">package</span> entities

<span class="kw">import</span> (<span class="str">"errors"</span>; <span class="str">"strings"</span>)

<span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    ID    <span class="type">UserID</span>
    Name  <span class="type">string</span>
    Email <span class="type">Email</span>
}

<span class="kw">type</span> <span class="type">UserID</span>  <span class="type">string</span>
<span class="kw">type</span> <span class="type">Email</span>   <span class="type">string</span>

<span class="kw">func</span> <span class="fn">NewEmail</span>(s <span class="type">string</span>) (<span class="type">Email</span>, <span class="type">error</span>) {
    <span class="kw">if</span> !strings.<span class="fn">Contains</span>(s, <span class="str">"@"</span>) {
        <span class="kw">return</span> <span class="str">""</span>, <span class="fn">errors.New</span>(<span class="str">"format email tidak valid"</span>)
    }
    <span class="kw">return</span> <span class="type">Email</span>(s), <span class="kw">nil</span>
}

<span class="kw">func</span> (u <span class="type">User</span>) <span class="fn">Validate</span>() <span class="type">error</span> {
    <span class="kw">if</span> u.Name == <span class="str">""</span> { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"nama tidak boleh kosong"</span>) }
    <span class="kw">if</span> u.Email == <span class="str">""</span> { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"email tidak boleh kosong"</span>) }
    <span class="kw">return nil</span>
}</div>
    </div>

    <div data-tab-content="ca-usecases" class="tab-content">
        <p><strong>Use Cases</strong> — Application Business Rules. Mengorkestrasi entitas untuk menjalankan alur bisnis spesifik.</p>
        <div class="code-block"><span class="cm">// usecases/register_user.go</span>
<span class="kw">package</span> usecases

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"myapp/entities"</span>
)

<span class="cm">// Output port (interface) — use case mendefinisikan apa yang dibutuhkan dari luar</span>
<span class="kw">type</span> <span class="type">UserRepository</span> <span class="kw">interface</span> {
    <span class="fn">Save</span>(ctx <span class="type">context.Context</span>, user entities.<span class="type">User</span>) <span class="type">error</span>
    <span class="fn">FindByEmail</span>(ctx <span class="type">context.Context</span>, email <span class="type">string</span>) (*entities.<span class="type">User</span>, <span class="type">error</span>)
}

<span class="cm">// Input port (interface) — cara dunia luar memanggil use case</span>
<span class="kw">type</span> <span class="type">RegisterUserInput</span> <span class="kw">struct</span> {
    Name     <span class="type">string</span>
    Email    <span class="type">string</span>
    Password <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">RegisterUserOutput</span> <span class="kw">struct</span> {
    UserID <span class="type">string</span>
    Name   <span class="type">string</span>
    Email  <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">RegisterUserUseCase</span> <span class="kw">struct</span> {
    userRepo <span class="type">UserRepository</span>
}

<span class="kw">func</span> <span class="fn">NewRegisterUserUseCase</span>(r <span class="type">UserRepository</span>) *<span class="type">RegisterUserUseCase</span> {
    <span class="kw">return</span> &<span class="type">RegisterUserUseCase</span>{userRepo: r}
}

<span class="kw">func</span> (uc *<span class="type">RegisterUserUseCase</span>) <span class="fn">Execute</span>(ctx <span class="type">context.Context</span>, in <span class="type">RegisterUserInput</span>) (<span class="type">RegisterUserOutput</span>, <span class="type">error</span>) {
    email, err := entities.<span class="fn">NewEmail</span>(in.Email)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> <span class="type">RegisterUserOutput</span>{}, err }

    existing, _ := uc.userRepo.<span class="fn">FindByEmail</span>(ctx, in.Email)
    <span class="kw">if</span> existing != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="type">RegisterUserOutput</span>{}, <span class="fn">errors.New</span>(<span class="str">"email sudah digunakan"</span>)
    }

    user := entities.<span class="type">User</span>{ID: <span class="type">entities.UserID</span>(<span class="fn">newUUID</span>()), Name: in.Name, Email: email}
    <span class="kw">if</span> err := uc.userRepo.<span class="fn">Save</span>(ctx, user); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="type">RegisterUserOutput</span>{}, err
    }
    <span class="kw">return</span> <span class="type">RegisterUserOutput</span>{UserID: <span class="type">string</span>(user.ID), Name: user.Name, Email: <span class="type">string</span>(user.Email)}, <span class="kw">nil</span>
}</div>
    </div>

    <div data-tab-content="ca-adapters" class="tab-content">
        <p><strong>Interface Adapters</strong> — mengkonversi data antara format yang paling nyaman untuk use case/entity dengan format yang paling nyaman untuk agen eksternal (DB, Web).</p>
        <div class="code-block"><span class="cm">// adapters/http/user_controller.go</span>
<span class="kw">package</span> http

<span class="kw">import</span> (
    <span class="str">"encoding/json"</span>
    <span class="str">"net/http"</span>
    <span class="str">"myapp/usecases"</span>
)

<span class="kw">type</span> <span class="type">UserController</span> <span class="kw">struct</span> {
    registerUC *usecases.<span class="type">RegisterUserUseCase</span>
}

<span class="kw">type</span> <span class="type">registerRequest</span> <span class="kw">struct</span> {
    Name     <span class="type">string</span> <span class="str">// json: "name"</span>
    Email    <span class="type">string</span> <span class="str">// json: "email"</span>
    Password <span class="type">string</span> <span class="str">// json: "password"</span>
}

<span class="kw">func</span> (c *<span class="type">UserController</span>) <span class="fn">Register</span>(w http.<span class="type">ResponseWriter</span>, r *http.<span class="type">Request</span>) {
    <span class="kw">var</span> req <span class="type">registerRequest</span>
    <span class="kw">if</span> err := json.<span class="fn">NewDecoder</span>(r.Body).<span class="fn">Decode</span>(&req); err != <span class="kw">nil</span> {
        http.<span class="fn">Error</span>(w, err.<span class="fn">Error</span>(), http.<span class="type">StatusBadRequest</span>)
        <span class="kw">return</span>
    }
    <span class="cm">// Konversi HTTP request → use case input</span>
    out, err := c.registerUC.<span class="fn">Execute</span>(r.<span class="fn">Context</span>(), usecases.<span class="type">RegisterUserInput</span>{
        Name:     req.Name,
        Email:    req.Email,
        Password: req.Password,
    })
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        http.<span class="fn">Error</span>(w, err.<span class="fn">Error</span>(), http.<span class="type">StatusBadRequest</span>)
        <span class="kw">return</span>
    }
    <span class="cm">// Konversi use case output → HTTP response</span>
    w.<span class="fn">Header</span>().<span class="fn">Set</span>(<span class="str">"Content-Type"</span>, <span class="str">"application/json"</span>)
    json.<span class="fn">NewEncoder</span>(w).<span class="fn">Encode</span>(out)
}</div>
    </div>

    <div data-tab-content="ca-frameworks" class="tab-content">
        <p><strong>Frameworks &amp; Drivers</strong> — lapisan paling luar berisi framework (Gin, GORM) dan driver (database driver). Kode di sini minimal, hanya "glue code".</p>
        <div class="code-block"><span class="cm">// cmd/api/main.go — Wiring semua layer</span>
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"database/sql"</span>
    <span class="str">"net/http"</span>
    _ <span class="str">"github.com/lib/pq"</span>

    adapthttp <span class="str">"myapp/adapters/http"</span>
    adaptpg   <span class="str">"myapp/adapters/postgres"</span>
    <span class="str">"myapp/usecases"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// 1. Framework Layer: setup DB</span>
    db, _ := sql.<span class="fn">Open</span>(<span class="str">"postgres"</span>, <span class="str">"postgres://localhost/myapp"</span>)

    <span class="cm">// 2. Interface Adapters Layer: buat repository (implementasi interface)</span>
    userRepo := adaptpg.<span class="fn">NewPostgresUserRepository</span>(db)

    <span class="cm">// 3. Use Cases Layer: buat use case dengan inject dependency</span>
    registerUC := usecases.<span class="fn">NewRegisterUserUseCase</span>(userRepo)

    <span class="cm">// 4. Interface Adapters Layer: buat controller</span>
    userCtrl := adapthttp.<span class="fn">NewUserController</span>(registerUC)

    <span class="cm">// 5. Framework Layer: setup router</span>
    mux := http.<span class="fn">NewServeMux</span>()
    mux.<span class="fn">HandleFunc</span>(<span class="str">"/register"</span>, userCtrl.Register)
    http.<span class="fn">ListenAndServe</span>(<span class="str">":8080"</span>, mux)
}</div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 6: CQRS
     ===================================================================== -->
<h2 class="animate-in">6. CQRS — Command Query Responsibility Segregation</h2>

<div class="info-box animate-in">
    <strong>Konsep dasar CQRS:</strong> Pisahkan model untuk <strong>membaca</strong> (Query) dari model untuk <strong>menulis</strong> (Command). Dipopulerkan Greg Young dan Udi Dahan. Prinsip ini adalah ekstensi dari <strong>CQS (Command Query Separation)</strong> oleh Bertrand Meyer yang menyatakan bahwa sebuah method harus <em>berubah state ATAU mengembalikan nilai, tidak keduanya</em>.
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Mengapa CQRS?</h3>

    <div class="card-grid">
        <div class="card" style="border-left:4px solid #3b82f6">
            <h4 style="color:#3b82f6">Masalah dengan Model Tunggal</h4>
            <ul style="font-size:0.9rem;margin-left:1.2rem">
                <li>Read dan write memiliki pola akses berbeda</li>
                <li>Read sering butuh data gabungan (JOIN banyak tabel)</li>
                <li>Write butuh validasi dan konsistensi ketat</li>
                <li>Scaling read dan write berbeda kebutuhannya</li>
                <li>Optimasi untuk read merusak performa write dan sebaliknya</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">Keuntungan CQRS</h4>
            <ul style="font-size:0.9rem;margin-left:1.2rem">
                <li>Read model dioptimalkan untuk query (denormalized)</li>
                <li>Write model dioptimalkan untuk konsistensi bisnis</li>
                <li>Scale read dan write secara independen</li>
                <li>Read DB bisa berbeda teknologi (PostgreSQL write, Redis/Elasticsearch read)</li>
                <li>Kode lebih ekspresif: tujuan jelas dari nama</li>
            </ul>
        </div>
    </div>

    <!-- CQRS Flow Diagram -->
    <h4 style="margin-top:1.5rem;color:#9ca3af">Alur CQRS</h4>
    <div class="pipeline" style="margin:1rem 0">
        <div class="pipeline-stage" style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8)">
            <div class="stage-title">Client</div>
            <div class="stage-desc">User action / API call</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;align-items:center;justify-content:center">
            <div style="text-align:center">
                <span class="badge-blue" style="font-size:0.75rem">COMMAND</span>
                <div style="color:#6b7280;font-size:1.2rem">&#8594;</div>
            </div>
            <div style="text-align:center">
                <div style="color:#6b7280;font-size:1.2rem">&#8594;</div>
                <span class="badge-green" style="font-size:0.75rem">QUERY</span>
            </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem">
            <div class="pipeline-stage" style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8);margin-bottom:0.3rem">
                <div class="stage-title">Command Handler</div>
                <div class="stage-desc">Validasi &amp; business logic</div>
            </div>
            <div class="pipeline-stage" style="background:linear-gradient(135deg,#14532d,#166534)">
                <div class="stage-title">Query Handler</div>
                <div class="stage-desc">Baca &amp; format data</div>
            </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;align-items:center;justify-content:center">
            <div style="color:#6b7280;font-size:1.2rem">&#8594;</div>
            <div style="color:#6b7280;font-size:1.2rem">&#8594;</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem">
            <div class="pipeline-stage" style="background:linear-gradient(135deg,#4c1d95,#6d28d9);margin-bottom:0.3rem">
                <div class="stage-title">Write DB</div>
                <div class="stage-desc">PostgreSQL (normalized)</div>
            </div>
            <div class="pipeline-stage" style="background:linear-gradient(135deg,#7c2d12,#c2410c)">
                <div class="stage-title">Read DB</div>
                <div class="stage-desc">Redis / ES (denormalized)</div>
            </div>
        </div>
    </div>

    <div class="warn-box">
        <strong>Simple vs Full CQRS:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li><strong>Simple CQRS</strong>: Pisahkan command handler dan query handler dalam satu service, tapi database tetap sama. Cukup untuk banyak aplikasi.</li>
            <li><strong>Full CQRS</strong>: Database read dan write yang terpisah. Read database disinkronkan dengan event dari write database. Kompleks, tapi sangat scalable.</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Implementasi CQRS dalam Go</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="cqrs-command">Command Side</button>
        <button class="tab-btn" data-tab="cqrs-query">Query Side</button>
        <button class="tab-btn" data-tab="cqrs-bus">Command Bus</button>
        <button class="tab-btn" data-tab="cqrs-when">Kapan Pakai</button>
    </div>

    <div data-tab-content="cqrs-command" class="tab-content active">
        <div class="code-block"><span class="cm">// command/create_order.go</span>
<span class="kw">package</span> command

<span class="kw">import</span> (<span class="str">"context"</span>; <span class="str">"time"</span>)

<span class="cm">// Command — niat untuk mengubah state</span>
<span class="kw">type</span> <span class="type">CreateOrderCommand</span> <span class="kw">struct</span> {
    CustomerID <span class="type">string</span>
    Items       []<span class="type">OrderItemDTO</span>
    ShipAddress <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">OrderItemDTO</span> <span class="kw">struct</span> {
    ProductID <span class="type">string</span>
    Quantity  <span class="type">int</span>
    Price     <span class="type">float64</span>
}

<span class="cm">// CommandHandler interface</span>
<span class="kw">type</span> <span class="type">CreateOrderHandler</span> <span class="kw">interface</span> {
    <span class="fn">Handle</span>(ctx <span class="type">context.Context</span>, cmd <span class="type">CreateOrderCommand</span>) (<span class="type">string</span>, <span class="type">error</span>)
}

<span class="cm">// Implementasi handler</span>
<span class="kw">type</span> <span class="type">createOrderHandler</span> <span class="kw">struct</span> {
    orderRepo  <span class="type">OrderWriteRepository</span>
    stockSvc   <span class="type">StockService</span>
    eventBus   <span class="type">EventBus</span>
}

<span class="kw">func</span> (h *<span class="type">createOrderHandler</span>) <span class="fn">Handle</span>(ctx <span class="type">context.Context</span>, cmd <span class="type">CreateOrderCommand</span>) (<span class="type">string</span>, <span class="type">error</span>) {
    <span class="cm">// Validasi bisnis</span>
    <span class="kw">if</span> err := h.stockSvc.<span class="fn">ReserveItems</span>(ctx, cmd.Items); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="str">""</span>, err
    }

    order := <span class="type">Order</span>{
        ID:          <span class="fn">newUUID</span>(),
        CustomerID:  cmd.CustomerID,
        Items:       cmd.Items,
        Status:      <span class="str">"pending"</span>,
        CreatedAt:   time.<span class="fn">Now</span>(),
    }

    <span class="kw">if</span> err := h.orderRepo.<span class="fn">Save</span>(ctx, order); err != <span class="kw">nil</span> {
        <span class="kw">return</span> <span class="str">""</span>, err
    }

    <span class="cm">// Publish event agar read model diperbarui</span>
    h.eventBus.<span class="fn">Publish</span>(<span class="type">OrderCreatedEvent</span>{OrderID: order.ID, CustomerID: order.CustomerID})
    <span class="kw">return</span> order.ID, <span class="kw">nil</span>
}</div>
    </div>

    <div data-tab-content="cqrs-query" class="tab-content">
        <div class="code-block"><span class="cm">// query/get_order.go</span>
<span class="kw">package</span> query

<span class="kw">import</span> <span class="str">"context"</span>

<span class="cm">// Query — niat untuk membaca data (tidak mengubah state)</span>
<span class="kw">type</span> <span class="type">GetOrderQuery</span> <span class="kw">struct</span> {
    OrderID <span class="type">string</span>
}

<span class="cm">// Read model — bisa sangat berbeda dari write model!</span>
<span class="cm">// Sudah di-denormalize untuk performa query</span>
<span class="kw">type</span> <span class="type">OrderView</span> <span class="kw">struct</span> {
    OrderID      <span class="type">string</span>
    CustomerName <span class="type">string</span>   <span class="cm">// JOIN dari customers table</span>
    CustomerEmail <span class="type">string</span>  <span class="cm">// JOIN dari customers table</span>
    Items         []<span class="type">OrderItemView</span>
    TotalAmount   <span class="type">float64</span>
    Status        <span class="type">string</span>
    CreatedAt     <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">OrderItemView</span> <span class="kw">struct</span> {
    ProductName <span class="type">string</span>  <span class="cm">// JOIN dari products table</span>
    Quantity    <span class="type">int</span>
    Price       <span class="type">float64</span>
    Subtotal    <span class="type">float64</span>
}

<span class="cm">// Query handler hanya membaca — langsung dari read DB/view</span>
<span class="kw">type</span> <span class="type">GetOrderHandler</span> <span class="kw">struct</span> {
    readDB <span class="type">OrderReadRepository</span>
}

<span class="kw">func</span> (h *<span class="type">GetOrderHandler</span>) <span class="fn">Handle</span>(ctx <span class="type">context.Context</span>, q <span class="type">GetOrderQuery</span>) (*<span class="type">OrderView</span>, <span class="type">error</span>) {
    <span class="cm">// Query langsung dari read model yang sudah dioptimalkan</span>
    <span class="cm">// Tidak ada bisnis logic, tidak ada validasi, hanya baca</span>
    <span class="kw">return</span> h.readDB.<span class="fn">FindOrderView</span>(ctx, q.OrderID)
}

<span class="cm">// List orders dengan filter</span>
<span class="kw">type</span> <span class="type">ListOrdersQuery</span> <span class="kw">struct</span> {
    CustomerID <span class="type">string</span>
    Status     <span class="type">string</span>
    Page       <span class="type">int</span>
    PageSize   <span class="type">int</span>
}

<span class="kw">type</span> <span class="type">ListOrdersHandler</span> <span class="kw">struct</span> {
    readDB <span class="type">OrderReadRepository</span>
}

<span class="kw">func</span> (h *<span class="type">ListOrdersHandler</span>) <span class="fn">Handle</span>(ctx <span class="type">context.Context</span>, q <span class="type">ListOrdersQuery</span>) ([]<span class="type">OrderView</span>, <span class="type">error</span>) {
    <span class="kw">return</span> h.readDB.<span class="fn">FindOrdersByCustomer</span>(ctx, q.CustomerID, q.Status, q.Page, q.PageSize)
}</div>
    </div>

    <div data-tab-content="cqrs-bus" class="tab-content">
        <div class="code-block"><span class="cm">// bus/command_bus.go — Mediator pattern untuk CQRS</span>
<span class="kw">package</span> bus

<span class="kw">import</span> <span class="str">"context"</span>

<span class="kw">type</span> <span class="type">Command</span> <span class="kw">interface</span>{}
<span class="kw">type</span> <span class="type">CommandHandler</span> <span class="kw">interface</span> {
    <span class="fn">Handle</span>(ctx <span class="type">context.Context</span>, cmd <span class="type">Command</span>) (<span class="kw">interface</span>{}, <span class="type">error</span>)
}

<span class="kw">type</span> <span class="type">CommandBus</span> <span class="kw">struct</span> {
    handlers <span class="kw">map</span>[<span class="type">string</span>]<span class="type">CommandHandler</span>
}

<span class="kw">func</span> <span class="fn">NewCommandBus</span>() *<span class="type">CommandBus</span> {
    <span class="kw">return</span> &<span class="type">CommandBus</span>{handlers: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">string</span>]<span class="type">CommandHandler</span>)}
}

<span class="kw">func</span> (b *<span class="type">CommandBus</span>) <span class="fn">Register</span>(cmdType <span class="type">string</span>, handler <span class="type">CommandHandler</span>) {
    b.handlers[cmdType] = handler
}

<span class="kw">func</span> (b *<span class="type">CommandBus</span>) <span class="fn">Dispatch</span>(ctx <span class="type">context.Context</span>, cmdType <span class="type">string</span>, cmd <span class="type">Command</span>) (<span class="kw">interface</span>{}, <span class="type">error</span>) {
    handler, ok := b.handlers[cmdType]
    <span class="kw">if</span> !ok {
        <span class="kw">return nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"tidak ada handler untuk command: %s"</span>, cmdType)
    }
    <span class="kw">return</span> handler.<span class="fn">Handle</span>(ctx, cmd)
}

<span class="cm">// Penggunaan di main.go:</span>
<span class="kw">func</span> <span class="fn">setupBus</span>() *<span class="type">CommandBus</span> {
    bus := <span class="fn">NewCommandBus</span>()
    bus.<span class="fn">Register</span>(<span class="str">"CreateOrder"</span>, &<span class="type">createOrderHandler</span>{<span class="cm">/* inject deps */</span>})
    bus.<span class="fn">Register</span>(<span class="str">"CancelOrder"</span>, &<span class="type">cancelOrderHandler</span>{<span class="cm">/* inject deps */</span>})
    bus.<span class="fn">Register</span>(<span class="str">"UpdateShipping"</span>, &<span class="type">updateShippingHandler</span>{<span class="cm">/* inject deps */</span>})
    <span class="kw">return</span> bus
}</div>
    </div>

    <div data-tab-content="cqrs-when" class="tab-content">
        <div class="success-box">
            <strong>Kapan GUNAKAN CQRS:</strong>
            <ul style="margin:0.5rem 0 0 1.2rem">
                <li>Beda pola akses read vs write (e.g., 10x lebih banyak read)</li>
                <li>Write model kompleks (banyak validasi, aggregate, business rule)</li>
                <li>Read model perlu denormalized view (JOIN banyak tabel)</li>
                <li>Perlu scale read dan write secara independen</li>
                <li>Collaborative domains (banyak user akses data bersamaan)</li>
                <li>Cocok dikombinasikan dengan Event Sourcing</li>
            </ul>
        </div>
        <div class="warn-box" style="margin-top:1rem">
            <strong>Kapan JANGAN GUNAKAN CQRS:</strong>
            <ul style="margin:0.5rem 0 0 1.2rem">
                <li>Domain sederhana dengan CRUD biasa</li>
                <li>Team kecil tanpa pengalaman CQRS — learning curve tinggi</li>
                <li>Aplikasi kecil di mana kompleksitas tidak justified</li>
                <li>Tidak ada kebutuhan performance atau scaling khusus</li>
            </ul>
        </div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 7: EVENT SOURCING
     ===================================================================== -->
<h2 class="animate-in">7. Event Sourcing</h2>

<div class="info-box animate-in">
    <strong>Konsep utama Event Sourcing:</strong> Alih-alih menyimpan <em>state saat ini</em>, simpan <em>urutan event</em> yang menghasilkan state tersebut. State saat ini diturunkan dengan me-<em>replay</em> semua event dari awal.
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Analogi: Rekening Bank</h3>
    <div class="card-grid">
        <div class="card" style="border-left:4px solid #ef4444">
            <h4 style="color:#ef4444">Pendekatan Tradisional (State)</h4>
            <div class="table-wrapper">
                <table>
                    <thead><tr><th>account_id</th><th>owner</th><th>balance</th></tr></thead>
                    <tbody>
                        <tr><td>acc-001</td><td>Budi</td><td><strong>700.000</strong></td></tr>
                    </tbody>
                </table>
            </div>
            <p style="font-size:0.85rem;margin-top:0.5rem;color:#9ca3af">Hanya tahu saldo akhir. Tidak bisa tahu BAGAIMANA mencapai 700.000. Tidak ada audit trail otomatis.</p>
        </div>
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">Event Sourcing (Event Store)</h4>
            <div class="table-wrapper">
                <table>
                    <thead><tr><th>seq</th><th>event</th><th>amount</th><th>timestamp</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>AccountOpened</td><td>0</td><td>01/01</td></tr>
                        <tr><td>2</td><td>MoneyDeposited</td><td>+1.000.000</td><td>02/01</td></tr>
                        <tr><td>3</td><td>MoneyWithdrawn</td><td>-300.000</td><td>05/01</td></tr>
                        <tr><td>4</td><td>MoneyWithdrawn</td><td>-50.000</td><td>07/01</td></tr>
                        <tr><td>5</td><td>TransferOut</td><td>-200.000</td><td>10/01</td></tr>
                        <tr><td colspan="2" style="text-align:right"><strong>Total:</strong></td><td colspan="2"><strong>450.000</strong></td></tr>
                    </tbody>
                </table>
            </div>
            <p style="font-size:0.85rem;margin-top:0.5rem;color:#9ca3af">Saldo = replay semua event. Audit trail gratis. Bisa query "apa saldo kemarin?"</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Alur Event Sourcing</h3>

    <!-- SVG Event Sourcing Flow -->
    <div style="text-align:center;margin:1.5rem 0;overflow-x:auto">
        <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" style="max-width:800px;width:100%;min-width:600px">
            <!-- Command -->
            <rect x="10" y="70" width="100" height="60" rx="8" fill="#1d4ed8"/>
            <text x="60" y="97" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Command</text>
            <text x="60" y="113" text-anchor="middle" fill="#93c5fd" font-size="10">DepositMoney</text>
            <!-- Arrow -->
            <line x1="110" y1="100" x2="140" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowES)"/>
            <!-- Aggregate -->
            <rect x="140" y="60" width="110" height="80" rx="8" fill="#6d28d9"/>
            <text x="195" y="90" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Aggregate</text>
            <text x="195" y="106" text-anchor="middle" fill="#c4b5fd" font-size="10">BankAccount</text>
            <text x="195" y="122" text-anchor="middle" fill="#c4b5fd" font-size="9">validasi + buat event</text>
            <!-- Arrow -->
            <line x1="250" y1="100" x2="280" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowES)"/>
            <!-- Events -->
            <rect x="280" y="60" width="120" height="80" rx="8" fill="#065f46"/>
            <text x="340" y="90" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Events</text>
            <text x="340" y="106" text-anchor="middle" fill="#6ee7b7" font-size="10">MoneyDeposited</text>
            <text x="340" y="120" text-anchor="middle" fill="#6ee7b7" font-size="9">{amount: 1000}</text>
            <!-- Arrow -->
            <line x1="400" y1="100" x2="430" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowES)"/>
            <!-- Event Store -->
            <rect x="430" y="60" width="110" height="80" rx="8" fill="#92400e"/>
            <text x="485" y="90" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Event Store</text>
            <text x="485" y="106" text-anchor="middle" fill="#fcd34d" font-size="10">Append Only</text>
            <text x="485" y="120" text-anchor="middle" fill="#fcd34d" font-size="9">PostgreSQL / Kafka</text>
            <!-- Arrow down to projections -->
            <line x1="540" y1="100" x2="570" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowES)"/>
            <!-- Projections -->
            <rect x="570" y="60" width="110" height="80" rx="8" fill="#831843"/>
            <text x="625" y="90" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Projections</text>
            <text x="625" y="106" text-anchor="middle" fill="#f9a8d4" font-size="10">Event Handlers</text>
            <text x="625" y="120" text-anchor="middle" fill="#f9a8d4" font-size="9">Update Read Model</text>
            <!-- Labels below -->
            <text x="60" y="160" text-anchor="middle" fill="#9ca3af" font-size="9">1. Intent</text>
            <text x="195" y="160" text-anchor="middle" fill="#9ca3af" font-size="9">2. Business Logic</text>
            <text x="340" y="160" text-anchor="middle" fill="#9ca3af" font-size="9">3. Facts</text>
            <text x="485" y="160" text-anchor="middle" fill="#9ca3af" font-size="9">4. Persistent</text>
            <text x="625" y="160" text-anchor="middle" fill="#9ca3af" font-size="9">5. Read Models</text>
            <defs>
                <marker id="arrowES" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L0,8 L8,4 z" fill="#6b7280"/>
                </marker>
            </defs>
        </svg>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Implementasi Event Sourcing dalam Go</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="es-events">Events &amp; Store</button>
        <button class="tab-btn" data-tab="es-aggregate">Aggregate</button>
        <button class="tab-btn" data-tab="es-replay">Replay &amp; Snapshot</button>
        <button class="tab-btn" data-tab="es-projection">Projection</button>
    </div>

    <div data-tab-content="es-events" class="tab-content active">
        <div class="code-block"><span class="cm">// eventsourcing/events.go</span>
<span class="kw">package</span> eventsourcing

<span class="kw">import</span> <span class="str">"time"</span>

<span class="cm">// Base event — semua event embed ini</span>
<span class="kw">type</span> <span class="type">BaseEvent</span> <span class="kw">struct</span> {
    AggregateID   <span class="type">string</span>
    AggregateType <span class="type">string</span>
    EventType     <span class="type">string</span>
    Version       <span class="type">int</span>
    OccurredAt    time.<span class="type">Time</span>
}

<span class="cm">// Domain Events — fakta yang telah terjadi (past tense!)</span>
<span class="kw">type</span> <span class="type">AccountOpenedEvent</span> <span class="kw">struct</span> {
    <span class="type">BaseEvent</span>
    OwnerName <span class="type">string</span>
    Email     <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">MoneyDepositedEvent</span> <span class="kw">struct</span> {
    <span class="type">BaseEvent</span>
    Amount    <span class="type">float64</span>
    Reference <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">MoneyWithdrawnEvent</span> <span class="kw">struct</span> {
    <span class="type">BaseEvent</span>
    Amount    <span class="type">float64</span>
    Reference <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">AccountClosedEvent</span> <span class="kw">struct</span> {
    <span class="type">BaseEvent</span>
    Reason <span class="type">string</span>
}

<span class="cm">// Event Store interface</span>
<span class="kw">type</span> <span class="type">EventStore</span> <span class="kw">interface</span> {
    <span class="fn">AppendEvents</span>(aggregateID <span class="type">string</span>, events []<span class="type">interface</span>{}, expectedVersion <span class="type">int</span>) <span class="type">error</span>
    <span class="fn">LoadEvents</span>(aggregateID <span class="type">string</span>) ([]<span class="type">interface</span>{}, <span class="type">error</span>)
    <span class="fn">LoadEventsFrom</span>(aggregateID <span class="type">string</span>, fromVersion <span class="type">int</span>) ([]<span class="type">interface</span>{}, <span class="type">error</span>)
}

<span class="cm">// PostgreSQL EventStore implementation</span>
<span class="kw">type</span> <span class="type">PostgresEventStore</span> <span class="kw">struct</span> {
    db *<span class="type">sql.DB</span>
}

<span class="kw">func</span> (s *<span class="type">PostgresEventStore</span>) <span class="fn">AppendEvents</span>(aggID <span class="type">string</span>, events []<span class="type">interface</span>{}, expectedVer <span class="type">int</span>) <span class="type">error</span> {
    <span class="cm">// Optimistic concurrency: cek versi sebelum insert</span>
    tx, _ := s.db.<span class="fn">Begin</span>()
    <span class="kw">for</span> i, event := <span class="kw">range</span> events {
        payload, _ := json.<span class="fn">Marshal</span>(event)
        _, err := tx.<span class="fn">Exec</span>(
            <span class="str">"INSERT INTO events (aggregate_id, event_type, payload, version) VALUES ($1,$2,$3,$4)"</span>,
            aggID, fmt.<span class="fn">Sprintf</span>(<span class="str">"%T"</span>, event), payload, expectedVer+i+<span class="num">1</span>,
        )
        <span class="kw">if</span> err != <span class="kw">nil</span> { tx.<span class="fn">Rollback</span>(); <span class="kw">return</span> err }
    }
    <span class="kw">return</span> tx.<span class="fn">Commit</span>()
}</div>
    </div>

    <div data-tab-content="es-aggregate" class="tab-content">
        <div class="code-block"><span class="cm">// eventsourcing/bank_account.go</span>
<span class="kw">package</span> eventsourcing

<span class="kw">import</span> (<span class="str">"errors"</span>; <span class="str">"time"</span>)

<span class="kw">type</span> <span class="type">BankAccount</span> <span class="kw">struct</span> {
    id      <span class="type">string</span>
    owner   <span class="type">string</span>
    balance <span class="type">float64</span>
    closed  <span class="type">bool</span>
    version <span class="type">int</span>
    changes []<span class="type">interface</span>{}  <span class="cm">// uncommitted events</span>
}

<span class="cm">// Command methods — menghasilkan events</span>
<span class="kw">func</span> <span class="fn">OpenAccount</span>(id, ownerName, email <span class="type">string</span>) (*<span class="type">BankAccount</span>, <span class="type">error</span>) {
    <span class="kw">if</span> id == <span class="str">""</span> || ownerName == <span class="str">""</span> {
        <span class="kw">return nil</span>, <span class="fn">errors.New</span>(<span class="str">"id dan nama tidak boleh kosong"</span>)
    }
    acc := &<span class="type">BankAccount</span>{}
    acc.<span class="fn">apply</span>(<span class="type">AccountOpenedEvent</span>{
        BaseEvent: <span class="type">BaseEvent</span>{AggregateID: id, EventType: <span class="str">"AccountOpened"</span>, OccurredAt: time.<span class="fn">Now</span>()},
        OwnerName: ownerName,
        Email:     email,
    })
    <span class="kw">return</span> acc, <span class="kw">nil</span>
}

<span class="kw">func</span> (a *<span class="type">BankAccount</span>) <span class="fn">Deposit</span>(amount <span class="type">float64</span>, ref <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">if</span> amount <= <span class="num">0</span> { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"jumlah harus positif"</span>) }
    <span class="kw">if</span> a.closed   { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"akun sudah ditutup"</span>) }
    a.<span class="fn">apply</span>(<span class="type">MoneyDepositedEvent</span>{
        BaseEvent: <span class="type">BaseEvent</span>{AggregateID: a.id, EventType: <span class="str">"MoneyDeposited"</span>, OccurredAt: time.<span class="fn">Now</span>()},
        Amount:    amount,
        Reference: ref,
    })
    <span class="kw">return nil</span>
}

<span class="kw">func</span> (a *<span class="type">BankAccount</span>) <span class="fn">Withdraw</span>(amount <span class="type">float64</span>, ref <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">if</span> amount <= <span class="num">0</span>            { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"jumlah harus positif"</span>) }
    <span class="kw">if</span> a.balance < amount      { <span class="kw">return</span> <span class="fn">errors.New</span>(<span class="str">"saldo tidak cukup"</span>) }
    a.<span class="fn">apply</span>(<span class="type">MoneyWithdrawnEvent</span>{
        BaseEvent: <span class="type">BaseEvent</span>{AggregateID: a.id, EventType: <span class="str">"MoneyWithdrawn"</span>, OccurredAt: time.<span class="fn">Now</span>()},
        Amount:    amount,
        Reference: ref,
    })
    <span class="kw">return nil</span>
}

<span class="cm">// apply — update state berdasarkan event (juga dipakai saat replay)</span>
<span class="kw">func</span> (a *<span class="type">BankAccount</span>) <span class="fn">apply</span>(event <span class="type">interface</span>{}) {
    <span class="kw">switch</span> e := event.(<span class="kw">type</span>) {
    <span class="kw">case</span> <span class="type">AccountOpenedEvent</span>:
        a.id    = e.AggregateID
        a.owner = e.OwnerName
    <span class="kw">case</span> <span class="type">MoneyDepositedEvent</span>:
        a.balance += e.Amount
    <span class="kw">case</span> <span class="type">MoneyWithdrawnEvent</span>:
        a.balance -= e.Amount
    <span class="kw">case</span> <span class="type">AccountClosedEvent</span>:
        a.closed = <span class="kw">true</span>
    }
    a.version++
    a.changes = <span class="fn">append</span>(a.changes, event)
}</div>
    </div>

    <div data-tab-content="es-replay" class="tab-content">
        <div class="code-block"><span class="cm">// Rebuild state dari event store (Replay)</span>
<span class="kw">func</span> <span class="fn">LoadBankAccount</span>(store <span class="type">EventStore</span>, accountID <span class="type">string</span>) (*<span class="type">BankAccount</span>, <span class="type">error</span>) {
    events, err := store.<span class="fn">LoadEvents</span>(accountID)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return nil</span>, err }
    <span class="kw">if</span> <span class="fn">len</span>(events) == <span class="num">0</span> { <span class="kw">return nil</span>, <span class="fn">errors.New</span>(<span class="str">"akun tidak ditemukan"</span>) }

    acc := &<span class="type">BankAccount</span>{}
    <span class="kw">for</span> _, event := <span class="kw">range</span> events {
        acc.<span class="fn">applyWithoutTracking</span>(event) <span class="cm">// replay: apply tapi jangan tambah ke changes</span>
    }
    acc.changes = nil  <span class="cm">// clear changes — ini adalah state yang sudah persisted</span>
    <span class="kw">return</span> acc, <span class="kw">nil</span>
}

<span class="cm">// SNAPSHOT — untuk performa: simpan state di titik tertentu</span>
<span class="cm">// Sehingga replay tidak perlu dari event pertama, tapi dari snapshot</span>
<span class="kw">type</span> <span class="type">Snapshot</span> <span class="kw">struct</span> {
    AggregateID <span class="type">string</span>
    Version     <span class="type">int</span>
    State       <span class="type">[]byte</span>    <span class="cm">// serialized state</span>
    CreatedAt   <span class="type">time.Time</span>
}

<span class="kw">func</span> <span class="fn">LoadBankAccountWithSnapshot</span>(store <span class="type">EventStore</span>, snapStore <span class="type">SnapshotStore</span>, id <span class="type">string</span>) (*<span class="type">BankAccount</span>, <span class="type">error</span>) {
    <span class="cm">// Coba load snapshot terbaru</span>
    snap, err := snapStore.<span class="fn">LoadLatest</span>(id)
    <span class="kw">var</span> fromVersion <span class="type">int</span>
    acc := &<span class="type">BankAccount</span>{}

    <span class="kw">if</span> err == <span class="kw">nil</span> && snap != <span class="kw">nil</span> {
        <span class="cm">// Restore dari snapshot</span>
        json.<span class="fn">Unmarshal</span>(snap.State, acc)
        fromVersion = snap.Version
    }

    <span class="cm">// Load hanya event SETELAH snapshot</span>
    events, _ := store.<span class="fn">LoadEventsFrom</span>(id, fromVersion)
    <span class="kw">for</span> _, event := <span class="kw">range</span> events {
        acc.<span class="fn">applyWithoutTracking</span>(event)
    }
    <span class="kw">return</span> acc, <span class="kw">nil</span>
}

<span class="cm">// Buat snapshot setiap N events (misalnya setiap 50 events)</span>
<span class="kw">const</span> <span class="type">SnapshotThreshold</span> = <span class="num">50</span>

<span class="kw">func</span> <span class="fn">shouldCreateSnapshot</span>(version <span class="type">int</span>) <span class="type">bool</span> {
    <span class="kw">return</span> version % <span class="type">SnapshotThreshold</span> == <span class="num">0</span>
}</div>
    </div>

    <div data-tab-content="es-projection" class="tab-content">
        <div class="code-block"><span class="cm">// Projection — membangun read model dari events</span>
<span class="kw">package</span> projection

<span class="cm">// Read model yang dioptimalkan untuk query</span>
<span class="kw">type</span> <span class="type">AccountSummaryView</span> <span class="kw">struct</span> {
    AccountID    <span class="type">string</span>
    OwnerName    <span class="type">string</span>
    Balance      <span class="type">float64</span>
    TotalDeposit <span class="type">float64</span>
    TotalWithdraw <span class="type">float64</span>
    TransactionCount <span class="type">int</span>
    LastActivity <span class="type">time.Time</span>
    IsClosed     <span class="type">bool</span>
}

<span class="cm">// Projection handler — dengarkan events dan update read model</span>
<span class="kw">type</span> <span class="type">AccountSummaryProjection</span> <span class="kw">struct</span> {
    readDB <span class="type">AccountReadRepository</span>
}

<span class="kw">func</span> (p *<span class="type">AccountSummaryProjection</span>) <span class="fn">Handle</span>(event <span class="type">interface</span>{}) <span class="type">error</span> {
    <span class="kw">switch</span> e := event.(<span class="kw">type</span>) {
    <span class="kw">case</span> <span class="type">AccountOpenedEvent</span>:
        <span class="kw">return</span> p.readDB.<span class="fn">Create</span>(<span class="type">AccountSummaryView</span>{
            AccountID: e.AggregateID,
            OwnerName: e.OwnerName,
        })
    <span class="kw">case</span> <span class="type">MoneyDepositedEvent</span>:
        view, _ := p.readDB.<span class="fn">Get</span>(e.AggregateID)
        view.Balance       += e.Amount
        view.TotalDeposit  += e.Amount
        view.TransactionCount++
        view.LastActivity = e.OccurredAt
        <span class="kw">return</span> p.readDB.<span class="fn">Update</span>(view)
    <span class="kw">case</span> <span class="type">MoneyWithdrawnEvent</span>:
        view, _ := p.readDB.<span class="fn">Get</span>(e.AggregateID)
        view.Balance        -= e.Amount
        view.TotalWithdraw  += e.Amount
        view.TransactionCount++
        view.LastActivity = e.OccurredAt
        <span class="kw">return</span> p.readDB.<span class="fn">Update</span>(view)
    }
    <span class="kw">return nil</span>
}</div>
    </div>

    <div class="card-grid" style="margin-top:1.5rem">
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">Keuntungan Event Sourcing</h4>
            <ul style="font-size:0.9rem;margin-left:1.2rem">
                <li><strong>Audit trail lengkap</strong> — semua perubahan tercatat</li>
                <li><strong>Time travel</strong> — bisa query state di titik waktu manapun</li>
                <li><strong>Event replay</strong> — bangun ulang read model kapan saja</li>
                <li><strong>Event-driven</strong> — mudah integrasi dengan sistem lain</li>
                <li><strong>Debugging</strong> — bisa replay bug secara exact</li>
                <li><strong>GDPR compliance</strong> — bisa "forget" user dengan event baru</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid #ef4444">
            <h4 style="color:#ef4444">Kekurangan Event Sourcing</h4>
            <ul style="font-size:0.9rem;margin-left:1.2rem">
                <li><strong>Kompleksitas tinggi</strong> — kurva pembelajaran curam</li>
                <li><strong>Query tidak langsung</strong> — butuh projection untuk read</li>
                <li><strong>Event schema evolution</strong> — susah ubah format event lama</li>
                <li><strong>Eventual consistency</strong> — read model mungkin tertinggal</li>
                <li><strong>Storage grows</strong> — event store terus bertambah</li>
                <li>Bukan pilihan tepat untuk domain CRUD sederhana</li>
            </ul>
        </div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 8: CQRS + EVENT SOURCING TOGETHER
     ===================================================================== -->
<h2 class="animate-in">8. CQRS + Event Sourcing — Kombinasi Sempurna</h2>

<div class="info-box animate-in">
    CQRS dan Event Sourcing saling melengkapi dengan alami. Event Sourcing menyediakan <strong>write model</strong> berbasis event yang sempurna, sementara CQRS memisahkan <strong>read model</strong> yang dibangun dari events tersebut. Kombinasi ini adalah pola arsitektur paling powerful untuk domain yang kompleks.
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Alur Lengkap CQRS + Event Sourcing</h3>

    <div class="flow-diagram" style="margin:1.5rem 0">
        <div class="flow-node" style="background:#1d4ed8;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
            <strong>Client</strong>
        </div>
        <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
        <div class="flow-node" style="background:#6d28d9;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
            <strong>Command Bus</strong>
        </div>
        <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
        <div class="flow-node" style="background:#065f46;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
            <strong>Command Handler</strong>
        </div>
        <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
        <div class="flow-node" style="background:#7c2d12;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
            <strong>Aggregate</strong>
        </div>
        <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
        <div class="flow-node" style="background:#92400e;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
            <strong>Event Store</strong>
        </div>
        <br><br>
        <div style="text-align:right;max-width:720px">
            <span style="color:#6b7280">Event diterbitkan &#8595;</span>
        </div>
        <div style="text-align:right;max-width:720px;margin-top:0.3rem">
            <div class="flow-node" style="background:#831843;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
                <strong>Event Handler / Projector</strong>
            </div>
            <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
            <div class="flow-node" style="background:#134e4a;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
                <strong>Read Model DB</strong>
                <span style="display:block;font-size:0.75rem;opacity:0.8">(Redis / Elasticsearch)</span>
            </div>
        </div>
        <br>
        <div style="margin-top:0.3rem">
            <div class="flow-node" style="background:#1d4ed8;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
                <strong>Client</strong>
            </div>
            <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
            <div class="flow-node" style="background:#0f172a;color:#fff;border:1px solid #3b82f6;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
                <strong>Query Bus</strong>
            </div>
            <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
            <div class="flow-node" style="background:#0f172a;color:#fff;border:1px solid #22c55e;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
                <strong>Query Handler</strong>
            </div>
            <div class="flow-arrow" style="display:inline-block;margin:0 0.5rem;color:#6b7280">&#8594;</div>
            <div class="flow-node" style="background:#134e4a;color:#fff;padding:0.7rem 1rem;border-radius:8px;display:inline-block">
                <strong>Read Model DB</strong>
            </div>
        </div>
    </div>

    <div class="success-box">
        <strong>Kapan gunakan CQRS + Event Sourcing:</strong>
        <ul style="margin:0.5rem 0 0 1.2rem">
            <li>Domain bisnis sangat kompleks dengan banyak business rule</li>
            <li>Audit trail dan compliance adalah requirement (finance, healthcare, e-commerce)</li>
            <li>Sistem kolaboratif besar dengan banyak concurrent user</li>
            <li>Perlu temporal query ("apa state sistem pada tanggal X?")</li>
            <li>Microservices yang berkomunikasi via events</li>
            <li>Tim yang sudah berpengalaman dengan DDD</li>
        </ul>
    </div>

    <div class="warn-box" style="margin-top:1rem">
        <strong>Jangan over-engineer!</strong> CQRS + Event Sourcing menambahkan kompleksitas signifikan. Mulai dengan arsitektur sederhana (Layered atau Hexagonal), dan migrasi ke CQRS/ES hanya ketika pain point nyata terjadi. Martin Fowler menyebutnya sebagai "significant mental leap" yang perlu justified dengan kebutuhan nyata.
    </div>
</div>

<!-- =====================================================================
     BAGIAN 9: DDD
     ===================================================================== -->
<h2 class="animate-in">9. Domain-Driven Design (DDD) — Ikhtisar</h2>

<div class="info-box animate-in">
    <strong>DDD (Eric Evans, 2003)</strong> adalah pendekatan desain software yang menempatkan <strong>domain bisnis</strong> sebagai pusat dari seluruh keputusan teknis. DDD menyediakan vocabulary dan building blocks yang menjadi fondasi arsitektur Hexagonal, Onion, dan Clean Architecture.
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Building Blocks DDD</h3>

    <div class="card-grid-3">
        <div class="card" style="border-left:4px solid #22c55e">
            <h4 style="color:#22c55e">Entity</h4>
            <p style="font-size:0.9rem">Objek yang memiliki <strong>identitas unik</strong> yang persisten. Dua entity dengan atribut sama tapi ID berbeda adalah objek yang berbeda.</p>
            <div class="code-block" style="font-size:0.8rem"><span class="kw">type</span> <span class="type">User</span> <span class="kw">struct</span> {
    ID    <span class="type">string</span> <span class="cm">// identity</span>
    Name  <span class="type">string</span>
    Email <span class="type">string</span>
}</div>
        </div>
        <div class="card" style="border-left:4px solid #3b82f6">
            <h4 style="color:#3b82f6">Value Object</h4>
            <p style="font-size:0.9rem">Objek yang diidentifikasi oleh <strong>nilainya</strong>, bukan identitas. Immutable. Dua Value Object dengan nilai sama adalah objek yang sama.</p>
            <div class="code-block" style="font-size:0.8rem"><span class="kw">type</span> <span class="type">Money</span> <span class="kw">struct</span> {
    Amount   <span class="type">float64</span>
    Currency <span class="type">string</span>
}
<span class="cm">// Money{100,"IDR"} == Money{100,"IDR"}</span></div>
        </div>
        <div class="card" style="border-left:4px solid #f59e0b">
            <h4 style="color:#f59e0b">Aggregate</h4>
            <p style="font-size:0.9rem">Cluster entity dan value object yang diperlakukan sebagai <strong>satu unit</strong> untuk perubahan data. Memiliki <strong>Aggregate Root</strong> yang merupakan satu-satunya pintu masuk.</p>
            <div class="code-block" style="font-size:0.8rem"><span class="kw">type</span> <span class="type">Order</span> <span class="kw">struct</span> { <span class="cm">// Aggregate Root</span>
    ID    <span class="type">string</span>
    Items []<span class="type">OrderItem</span> <span class="cm">// Entity dalam aggregate</span>
}</div>
        </div>
        <div class="card" style="border-left:4px solid #8b5cf6">
            <h4 style="color:#8b5cf6">Repository</h4>
            <p style="font-size:0.9rem">Abstraksi penyimpanan untuk Aggregate. Menyembunyikan detail persistence. Hanya ada satu repository per Aggregate Root.</p>
            <div class="code-block" style="font-size:0.8rem"><span class="kw">type</span> <span class="type">OrderRepository</span> <span class="kw">interface</span> {
    <span class="fn">Save</span>(order <span class="type">Order</span>) <span class="type">error</span>
    <span class="fn">FindByID</span>(id <span class="type">string</span>) (<span class="type">Order</span>, <span class="type">error</span>)
}</div>
        </div>
        <div class="card" style="border-left:4px solid #ef4444">
            <h4 style="color:#ef4444">Domain Service</h4>
            <p style="font-size:0.9rem">Logika bisnis yang tidak alami milik entity tertentu. Stateless. Mengkoordinasikan multiple aggregate.</p>
            <div class="code-block" style="font-size:0.8rem"><span class="kw">type</span> <span class="type">TransferService</span> <span class="kw">struct</span>{}

<span class="kw">func</span> (s *<span class="type">TransferService</span>) <span class="fn">Transfer</span>(
    from, to *<span class="type">BankAccount</span>, amount <span class="type">Money</span>,
) <span class="type">error</span></div>
        </div>
        <div class="card" style="border-left:4px solid #06b6d4">
            <h4 style="color:#06b6d4">Bounded Context</h4>
            <p style="font-size:0.9rem">Batas eksplisit di mana model domain berlaku. Dalam satu Bounded Context, istilah memiliki arti yang spesifik. Antar context berkomunikasi via <strong>Context Map</strong>.</p>
            <div class="code-block" style="font-size:0.8rem"><span class="cm">// "User" di OrderContext berbeda</span>
<span class="cm">// dengan "User" di AuthContext!</span>
OrderContext: Customer{ID, ShipAddr}
AuthContext:  User{ID, Email, Password}</div>
        </div>
    </div>

    <div class="info-box" style="margin-top:1.5rem">
        <strong>DDD &amp; Hexagonal/Clean Architecture:</strong> DDD menyediakan <em>apa yang dimodelkan</em> (Aggregate, Entity, Value Object), sedangkan Hexagonal/Clean Architecture menyediakan <em>bagaimana menyusun kode secara teknis</em> (port, adapter, layer). Keduanya saling melengkapi. Domain DDD menjadi isi dari "innermost circle" di Clean Architecture atau "core hexagon" di Hexagonal Architecture.
    </div>
</div>

<!-- =====================================================================
     BAGIAN 10: ARCHITECTURE COMPARISON TABLE
     ===================================================================== -->
<h2 class="animate-in">10. Perbandingan Arsitektur</h2>

<div class="card animate-in">
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Aspek</th>
                    <th>Layered</th>
                    <th>Hexagonal</th>
                    <th>Onion</th>
                    <th>Clean Arch</th>
                    <th>CQRS+ES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Kompleksitas</strong></td>
                    <td><span class="badge-green">Rendah</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-orange">Tinggi</span></td>
                    <td><span class="badge-red">Sangat Tinggi</span></td>
                </tr>
                <tr>
                    <td><strong>Testability</strong></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-green">Tinggi</span></td>
                    <td><span class="badge-green">Tinggi</span></td>
                    <td><span class="badge-green">Sangat Tinggi</span></td>
                    <td><span class="badge-green">Sangat Tinggi</span></td>
                </tr>
                <tr>
                    <td><strong>Domain Isolation</strong></td>
                    <td><span class="badge-red">Rendah</span></td>
                    <td><span class="badge-green">Tinggi</span></td>
                    <td><span class="badge-green">Tinggi</span></td>
                    <td><span class="badge-green">Tinggi</span></td>
                    <td><span class="badge-green">Sangat Tinggi</span></td>
                </tr>
                <tr>
                    <td><strong>Swap Infra</strong></td>
                    <td><span class="badge-red">Sulit</span></td>
                    <td><span class="badge-green">Mudah</span></td>
                    <td><span class="badge-green">Mudah</span></td>
                    <td><span class="badge-green">Mudah</span></td>
                    <td><span class="badge-green">Mudah</span></td>
                </tr>
                <tr>
                    <td><strong>Scalability</strong></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-orange">Baik</span></td>
                    <td><span class="badge-green">Sangat Baik</span></td>
                </tr>
                <tr>
                    <td><strong>Audit Trail</strong></td>
                    <td><span class="badge-red">Manual</span></td>
                    <td><span class="badge-red">Manual</span></td>
                    <td><span class="badge-red">Manual</span></td>
                    <td><span class="badge-red">Manual</span></td>
                    <td><span class="badge-green">Built-in</span></td>
                </tr>
                <tr>
                    <td><strong>Learning Curve</strong></td>
                    <td><span class="badge-green">Rendah</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-orange">Tinggi</span></td>
                    <td><span class="badge-red">Sangat Tinggi</span></td>
                </tr>
                <tr>
                    <td><strong>Boilerplate</strong></td>
                    <td><span class="badge-green">Sedikit</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-yellow">Sedang</span></td>
                    <td><span class="badge-orange">Banyak</span></td>
                    <td><span class="badge-red">Sangat Banyak</span></td>
                </tr>
                <tr>
                    <td><strong>Cocok untuk</strong></td>
                    <td>CRUD, startup, MVP</td>
                    <td>Domain menengah, perlu swap infra</td>
                    <td>Domain kompleks, DDD</td>
                    <td>Enterprise, DDD</td>
                    <td>Finance, audit, high-scale</td>
                </tr>
                <tr>
                    <td><strong>Contoh Framework</strong></td>
                    <td>Express, Spring MVC</td>
                    <td>Go std, NestJS</td>
                    <td>Go, ASP.NET Core</td>
                    <td>Go, Spring Boot</td>
                    <td>Axon, EventStoreDB</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 11: PRACTICAL PROJECT STRUCTURES
     ===================================================================== -->
<h2 class="animate-in">11. Struktur Proyek Praktis</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Hexagonal Architecture dalam Go — Struktur Lengkap</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="struct-hex-go">Go (Hexagonal)</button>
        <button class="tab-btn" data-tab="struct-clean-java">Java/Spring (Clean Arch)</button>
        <button class="tab-btn" data-tab="struct-cqrs-go">Go (CQRS+ES)</button>
    </div>

    <div data-tab-content="struct-hex-go" class="tab-content active">
        <div class="code-block">myapp/                              <span class="cm">// Hexagonal Architecture (Go)</span>
├── cmd/
│   ├── api/
│   │   └── main.go                 <span class="cm">// HTTP server entry point</span>
│   └── worker/
│       └── main.go                 <span class="cm">// Background worker entry point</span>
├── internal/
│   ├── core/                       <span class="cm">// === DOMAIN CORE (tidak ada external dependency) ===</span>
│   │   ├── domain/
│   │   │   ├── user.go             <span class="cm">// Entity</span>
│   │   │   ├── order.go            <span class="cm">// Entity</span>
│   │   │   ├── money.go            <span class="cm">// Value Object</span>
│   │   │   └── errors.go           <span class="cm">// Domain errors</span>
│   │   ├── ports/
│   │   │   ├── driven/             <span class="cm">// Interface yang domain butuhkan dari infra</span>
│   │   │   │   ├── user_repository.go
│   │   │   │   ├── order_repository.go
│   │   │   │   ├── email_notifier.go
│   │   │   │   └── payment_gateway.go
│   │   │   └── driving/            <span class="cm">// Interface use case (diekspos ke luar)</span>
│   │   │       ├── user_service.go
│   │   │       └── order_service.go
│   │   └── services/               <span class="cm">// Domain/Application Services</span>
│   │       ├── user_service.go
│   │       └── order_service.go
│   └── adapters/                   <span class="cm">// === ADAPTERS (boleh ada external dependency) ===</span>
│       ├── driving/                <span class="cm">// Masuk ke domain dari luar</span>
│       │   ├── http/
│       │   │   ├── handler/
│       │   │   │   ├── user_handler.go
│       │   │   │   └── order_handler.go
│       │   │   ├── middleware/
│       │   │   │   ├── auth.go
│       │   │   │   └── logging.go
│       │   │   ├── dto/            <span class="cm">// Request/Response DTOs</span>
│       │   │   │   └── user_dto.go
│       │   │   └── router.go
│       │   └── grpc/
│       │       └── user_server.go
│       └── driven/                 <span class="cm">// Domain keluar ke infra</span>
│           ├── postgres/
│           │   ├── user_repository.go
│           │   └── order_repository.go
│           ├── redis/
│           │   └── cache_adapter.go
│           ├── smtp/
│           │   └── email_notifier.go
│           ├── stripe/
│           │   └── payment_gateway.go
│           └── memory/             <span class="cm">// In-memory adapters untuk testing</span>
│               ├── user_repository.go
│               └── email_notifier.go
├── pkg/                            <span class="cm">// Shared utilities (bisa dipakai module lain)</span>
│   ├── logger/
│   ├── config/
│   └── validator/
├── migrations/                     <span class="cm">// Database migrations</span>
├── test/
│   ├── integration/
│   └── e2e/
├── go.mod
└── go.sum</div>
    </div>

    <div data-tab-content="struct-clean-java" class="tab-content">
        <div class="code-block">myapp/                              <span class="cm">// Clean Architecture (Java/Spring Boot)</span>
├── src/
│   ├── main/
│   │   ├── java/com/company/myapp/
│   │   │   ├── MyAppApplication.java
│   │   │   │
│   │   │   ├── domain/             <span class="cm">// === ENTITIES LAYER ===</span>
│   │   │   │   ├── model/
│   │   │   │   │   ├── User.java   <span class="cm">// Domain Entity (no Spring annotations!)</span>
│   │   │   │   │   └── Order.java
│   │   │   │   └── exception/
│   │   │   │       └── DomainException.java
│   │   │   │
│   │   │   ├── application/        <span class="cm">// === USE CASES LAYER ===</span>
│   │   │   │   ├── port/
│   │   │   │   │   ├── in/         <span class="cm">// Driving ports (Use Case interfaces)</span>
│   │   │   │   │   │   ├── RegisterUserUseCase.java
│   │   │   │   │   │   └── PlaceOrderUseCase.java
│   │   │   │   │   └── out/        <span class="cm">// Driven ports (Repository interfaces)</span>
│   │   │   │   │       ├── UserRepositoryPort.java
│   │   │   │   │       └── OrderRepositoryPort.java
│   │   │   │   └── service/        <span class="cm">// Use Case implementations</span>
│   │   │   │       ├── RegisterUserService.java
│   │   │   │       └── PlaceOrderService.java
│   │   │   │
│   │   │   └── adapter/            <span class="cm">// === INTERFACE ADAPTERS + FRAMEWORKS ===</span>
│   │   │       ├── in/
│   │   │       │   └── web/        <span class="cm">// REST Controllers</span>
│   │   │       │       ├── UserController.java
│   │   │       │       └── dto/
│   │   │       │           ├── RegisterUserRequest.java
│   │   │       │           └── UserResponse.java
│   │   │       └── out/
│   │   │           └── persistence/ <span class="cm">// JPA Repositories</span>
│   │   │               ├── UserPersistenceAdapter.java
│   │   │               ├── UserJpaRepository.java  <span class="cm">// Spring Data</span>
│   │   │               └── UserJpaEntity.java      <span class="cm">// JPA @Entity</span>
│   │   │
│   │   └── resources/
│   │       ├── application.yml
│   │       └── db/migration/
│   │           └── V1__init.sql
│   └── test/
│       ├── unit/
│       └── integration/
├── pom.xml
└── README.md</div>
    </div>

    <div data-tab-content="struct-cqrs-go" class="tab-content">
        <div class="code-block">myapp/                              <span class="cm">// CQRS + Event Sourcing (Go)</span>
├── cmd/
│   ├── api/main.go
│   └── projector/main.go           <span class="cm">// Background: proses events → update read model</span>
├── internal/
│   ├── domain/                     <span class="cm">// Domain Aggregates</span>
│   │   ├── order/
│   │   │   ├── aggregate.go        <span class="cm">// Order aggregate</span>
│   │   │   ├── events.go           <span class="cm">// OrderPlaced, OrderShipped, dll</span>
│   │   │   └── commands.go         <span class="cm">// PlaceOrder, ShipOrder, dll</span>
│   │   └── account/
│   │       ├── aggregate.go
│   │       └── events.go
│   │
│   ├── command/                    <span class="cm">// Command Side (Write)</span>
│   │   ├── handler/
│   │   │   ├── place_order.go      <span class="cm">// Command Handler</span>
│   │   │   └── ship_order.go
│   │   └── bus/
│   │       └── command_bus.go      <span class="cm">// Command dispatcher</span>
│   │
│   ├── query/                      <span class="cm">// Query Side (Read)</span>
│   │   ├── handler/
│   │   │   ├── get_order.go        <span class="cm">// Query Handler</span>
│   │   │   └── list_orders.go
│   │   ├── model/
│   │   │   └── order_view.go       <span class="cm">// Read model (denormalized)</span>
│   │   └── bus/
│   │       └── query_bus.go
│   │
│   ├── eventsourcing/              <span class="cm">// Event Sourcing Infrastructure</span>
│   │   ├── event_store.go          <span class="cm">// EventStore interface</span>
│   │   ├── postgres_event_store.go <span class="cm">// PostgreSQL implementation</span>
│   │   └── snapshot_store.go
│   │
│   ├── projection/                 <span class="cm">// Projections (Event → Read Model)</span>
│   │   ├── order_summary.go
│   │   └── order_timeline.go
│   │
│   └── api/                        <span class="cm">// HTTP/gRPC Handlers</span>
│       ├── command_handler.go      <span class="cm">// Receives commands from HTTP</span>
│       └── query_handler.go        <span class="cm">// Serves queries from HTTP</span>
│
├── pkg/
│   └── eventbus/                   <span class="cm">// Event publishing (Kafka/NATS)</span>
│       └── kafka_event_bus.go
└── go.mod</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Rekomendasi Pemilihan Arsitektur</h3>

    <div class="timeline">
        <div class="timeline-item" style="display:flex;gap:1.5rem;margin-bottom:1.5rem;align-items:flex-start">
            <div style="background:#22c55e;color:#fff;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">1</div>
            <div>
                <h4 style="color:#22c55e;margin:0 0 0.3rem">Startup / MVP / Proyek Kecil</h4>
                <p style="margin:0;font-size:0.9rem">Gunakan <strong>Layered Architecture</strong>. Cepat, familiar, mudah onboard developer baru. Jangan over-engineer dari awal. Fokus pada delivery value kepada user.</p>
            </div>
        </div>
        <div class="timeline-item" style="display:flex;gap:1.5rem;margin-bottom:1.5rem;align-items:flex-start">
            <div style="background:#3b82f6;color:#fff;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">2</div>
            <div>
                <h4 style="color:#3b82f6;margin:0 0 0.3rem">Proyek Menengah dengan Domain Bisnis</h4>
                <p style="margin:0;font-size:0.9rem">Gunakan <strong>Hexagonal Architecture</strong>. Isolasi domain, mudah swap infra, testability tinggi tanpa menambah terlalu banyak boilerplate.</p>
            </div>
        </div>
        <div class="timeline-item" style="display:flex;gap:1.5rem;margin-bottom:1.5rem;align-items:flex-start">
            <div style="background:#8b5cf6;color:#fff;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">3</div>
            <div>
                <h4 style="color:#8b5cf6;margin:0 0 0.3rem">Enterprise / Domain Kompleks</h4>
                <p style="margin:0;font-size:0.9rem">Gunakan <strong>Clean Architecture + DDD</strong>. Boundaries jelas, domain terisolasi sempurna, cocok untuk tim besar dengan domain bisnis kompleks.</p>
            </div>
        </div>
        <div class="timeline-item" style="display:flex;gap:1.5rem;align-items:flex-start">
            <div style="background:#ef4444;color:#fff;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">4</div>
            <div>
                <h4 style="color:#ef4444;margin:0 0 0.3rem">High-Scale / Audit-Critical / Event-Driven</h4>
                <p style="margin:0;font-size:0.9rem">Gunakan <strong>CQRS + Event Sourcing</strong>. Hanya jika benar-benar dibutuhkan. Ideal untuk sistem keuangan, e-commerce skala besar, atau platform yang memerlukan audit trail lengkap.</p>
            </div>
        </div>
    </div>
</div>

<div class="info-box animate-in" style="margin-top:1.5rem">
    <strong>Kesimpulan:</strong> Tidak ada arsitektur yang "terbaik" secara universal. Pilihan arsitektur harus sesuai dengan <em>kompleksitas domain</em>, <em>ukuran tim</em>, <em>kebutuhan scaling</em>, dan <em>budget/timeline proyek</em>. Yang terpenting: apapun arsitektur yang dipilih, konsistensi dalam penerapannya jauh lebih penting daripada memilih arsitektur yang "paling canggih".
</div>
`;
