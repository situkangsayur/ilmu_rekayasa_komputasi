// ====================== SECURITY (ENHANCED) ======================
// Replaces the basic security section with comprehensive coverage
// Covers: Cryptography, Hashing, TLS/SSL, PKI, VPN/WireGuard, SMPC, JWT, OWASP, SSDLC

sections.security = () => `
<h1 class="section-title animate-in">Security, Encryption & Secure Coding</h1>
<p class="section-subtitle animate-in">Kriptografi, Hashing, TLS/SSL, PKI, VPN & WireGuard, SMPC, JWT, OWASP Top 10, dan SSDLC</p>

<!-- ==================== 1. CRYPTOGRAPHY FUNDAMENTALS ==================== -->
<h2 class="animate-in">1. Dasar-Dasar Kriptografi</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa Itu Kriptografi?</h3>
    <p>Kriptografi adalah ilmu dan seni mengamankan informasi dengan mengubah data menjadi bentuk yang tidak bisa dibaca tanpa kunci dekripsi. Kriptografi menjadi fondasi dari hampir semua sistem keamanan digital modern, dari HTTPS hingga cryptocurrency.</p>
    <div class="info-box">Kriptografi modern dibangun di atas <strong>prinsip Kerckhoffs</strong>: keamanan sistem harus bergantung pada kerahasiaan <em>kunci</em>, bukan kerahasiaan <em>algoritma</em>.</div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--yellow)"><span class="badge badge-yellow">Symmetric</span> Enkripsi Simetris</h3>
        <p>Menggunakan <strong>satu kunci yang sama</strong> untuk proses enkripsi dan dekripsi. Cepat dan efisien untuk data besar.</p>
        <div class="encrypt-vis">
            <div class="encrypt-block">Plaintext<br><small>"Hello World"</small></div>
            <div class="encrypt-arrow">+</div>
            <div class="encrypt-block key">Kunci Rahasia<br><small>AES-256</small></div>
            <div class="encrypt-arrow">&rarr;</div>
            <div class="encrypt-block cipher">Ciphertext<br><small>"x7Fk2mQ..."</small></div>
        </div>
        <ul>
            <li><strong>Kelebihan:</strong> Sangat cepat, cocok untuk data besar</li>
            <li><strong>Kekurangan:</strong> Distribusi kunci sulit (harus ada kanal aman)</li>
            <li><strong>Contoh:</strong> AES, ChaCha20, 3DES (legacy)</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--accent)"><span class="badge badge-blue">Asymmetric</span> Enkripsi Asimetris</h3>
        <p>Menggunakan <strong>sepasang kunci</strong>: public key (enkripsi) dan private key (dekripsi). Menyelesaikan masalah distribusi kunci.</p>
        <div class="encrypt-vis">
            <div class="encrypt-block">Plaintext</div>
            <div class="encrypt-arrow">+</div>
            <div class="encrypt-block key">Public Key</div>
            <div class="encrypt-arrow">&rarr;</div>
            <div class="encrypt-block cipher">Ciphertext</div>
            <div class="encrypt-arrow">+</div>
            <div class="encrypt-block key">Private Key</div>
            <div class="encrypt-arrow">&rarr;</div>
            <div class="encrypt-block">Plaintext</div>
        </div>
        <ul>
            <li><strong>Kelebihan:</strong> Tidak perlu berbagi kunci rahasia</li>
            <li><strong>Kekurangan:</strong> Lambat (100-1000x lebih lambat dari simetris)</li>
            <li><strong>Contoh:</strong> RSA, ECDSA, Ed25519, Diffie-Hellman</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Perbandingan Symmetric vs Asymmetric</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>Symmetric</th><th>Asymmetric</th></tr>
    <tr><td>Jumlah Kunci</td><td>1 (shared secret)</td><td>2 (public + private)</td></tr>
    <tr><td>Kecepatan</td><td><span class="badge badge-green">Sangat Cepat</span></td><td><span class="badge badge-orange">Lambat</span></td></tr>
    <tr><td>Distribusi Kunci</td><td><span class="badge badge-red">Sulit</span></td><td><span class="badge badge-green">Mudah</span></td></tr>
    <tr><td>Ukuran Kunci</td><td>128-256 bit</td><td>2048-4096 bit (RSA), 256 bit (ECC)</td></tr>
    <tr><td>Penggunaan Utama</td><td>Enkripsi data bulk</td><td>Key exchange, digital signature</td></tr>
    <tr><td>Contoh</td><td>AES-256-GCM, ChaCha20</td><td>RSA, ECDSA, Ed25519</td></tr>
    </table>
    </div>
    <div class="info-box">Dalam praktiknya, keduanya digabungkan (<strong>hybrid encryption</strong>): Asymmetric untuk pertukaran kunci sesi, lalu Symmetric untuk enkripsi data. Ini yang dilakukan TLS!</div>
</div>

<!-- AES Detail -->
<div class="card animate-in">
    <h3 style="color:var(--yellow)">AES (Advanced Encryption Standard)</h3>
    <p>AES adalah standar enkripsi simetris yang diadopsi oleh NIST pada tahun 2001, menggantikan DES. AES beroperasi pada <strong>block 128-bit</strong> dengan ukuran kunci 128, 192, atau 256 bit.</p>

    <h4>Mode Operasi AES</h4>
    <div class="tabs">
        <button class="tab-btn active" data-tab="aes-cbc">CBC Mode</button>
        <button class="tab-btn" data-tab="aes-gcm">GCM Mode</button>
        <button class="tab-btn" data-tab="aes-ctr">CTR Mode</button>
    </div>
    <div class="tab-content active" id="aes-cbc">
        <h4>CBC (Cipher Block Chaining)</h4>
        <p>Setiap block plaintext di-XOR dengan ciphertext block sebelumnya sebelum dienkripsi. Membutuhkan <strong>Initialization Vector (IV)</strong> yang acak untuk block pertama.</p>
        <div class="flow-diagram">
            <div class="flow-node">Plaintext Block 1</div>
            <div class="flow-arrow">XOR IV &rarr;</div>
            <div class="flow-node">AES Encrypt</div>
            <div class="flow-arrow">&rarr;</div>
            <div class="flow-node cipher" style="border-color:var(--yellow)">Ciphertext 1</div>
        </div>
        <div class="flow-diagram">
            <div class="flow-node">Plaintext Block 2</div>
            <div class="flow-arrow">XOR C1 &rarr;</div>
            <div class="flow-node">AES Encrypt</div>
            <div class="flow-arrow">&rarr;</div>
            <div class="flow-node cipher" style="border-color:var(--yellow)">Ciphertext 2</div>
        </div>
        <div class="warn-box">CBC rentan terhadap <strong>padding oracle attack</strong> jika tidak diimplementasikan dengan benar. Selalu gunakan bersama HMAC untuk integritas!</div>
    </div>
    <div class="tab-content" id="aes-gcm">
        <h4>GCM (Galois/Counter Mode)</h4>
        <p>Mode <strong>authenticated encryption</strong> yang menyediakan enkripsi + integritas + autentikasi sekaligus (AEAD). Ini adalah mode yang <strong>paling direkomendasikan</strong> saat ini.</p>
        <div class="flow-diagram">
            <div class="flow-node">Plaintext + AAD</div>
            <div class="flow-arrow">&rarr; AES-CTR + GHASH</div>
            <div class="flow-node cipher" style="border-color:var(--green)">Ciphertext + Auth Tag</div>
        </div>
        <ul>
            <li><strong>AEAD</strong> = Authenticated Encryption with Associated Data</li>
            <li>Menghasilkan <strong>authentication tag</strong> (biasanya 128-bit) untuk verifikasi integritas</li>
            <li>Bisa melindungi data tambahan (AAD) yang tidak dienkripsi tapi perlu diverifikasi</li>
            <li>Sangat cepat di hardware modern (AES-NI instruction set)</li>
        </ul>
        <div class="success-box">AES-256-GCM adalah pilihan standar untuk TLS 1.3, IPSec, dan sebagian besar protokol modern.</div>
    </div>
    <div class="tab-content" id="aes-ctr">
        <h4>CTR (Counter Mode)</h4>
        <p>Mengubah block cipher menjadi stream cipher. Counter di-increment untuk setiap block, lalu dienkripsi dan di-XOR dengan plaintext.</p>
        <ul>
            <li>Parallelizable (bisa diproses bersamaan)</li>
            <li>Tidak butuh padding</li>
            <li>Tidak menyediakan autentikasi (perlu ditambah HMAC)</li>
        </ul>
    </div>
</div>

<!-- RSA Detail -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)">RSA (Rivest-Shamir-Adleman)</h3>
    <p>Algoritma enkripsi asimetris pertama yang dipublikasikan (1977). Keamanan RSA bergantung pada kesulitan <strong>memfaktorkan bilangan besar</strong> (integer factorization problem).</p>
    <div class="code-block"><span class="cm">// RSA Key Generation</span>
<span class="num">1.</span> Pilih 2 bilangan prima besar: <span class="kw">p</span>, <span class="kw">q</span>
<span class="num">2.</span> <span class="kw">n</span> = p &times; q                     <span class="cm">// modulus (2048+ bit)</span>
<span class="num">3.</span> <span class="fn">&phi;(n)</span> = (p-1)(q-1)             <span class="cm">// Euler's totient function</span>
<span class="num">4.</span> Pilih <span class="kw">e</span>: 1 &lt; e &lt; &phi;(n), gcd(e, &phi;(n)) = 1  <span class="cm">// public exponent (biasanya 65537)</span>
<span class="num">5.</span> <span class="kw">d</span> = e&sup1; mod &phi;(n)              <span class="cm">// private exponent (modular inverse)</span>

<span class="cm">// Public Key  = (e, n)  &rarr; dibagikan ke semua orang</span>
<span class="cm">// Private Key = (d, n)  &rarr; hanya pemilik yang tahu</span>

<span class="cm">// Enkripsi:  C = M^e mod n</span>
<span class="cm">// Dekripsi:  M = C^d mod n</span>
<span class="cm">// Keamanan:  memfaktorkan n = p &times; q sangat sulit untuk n besar</span></div>
    <div class="warn-box">RSA minimum <strong>2048 bit</strong> (NIST merekomendasikan 3072+ bit). RSA 1024 bit sudah dianggap <strong>tidak aman</strong> sejak 2010.</div>
</div>

<!-- ECC -->
<div class="card animate-in">
    <h3 style="color:var(--green)">Elliptic Curve Cryptography (ECC)</h3>
    <p>ECC menggunakan matematika kurva eliptik untuk kriptografi. ECC menawarkan keamanan setara dengan RSA tetapi dengan <strong>ukuran kunci yang jauh lebih kecil</strong>.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Keamanan (bit)</th><th>RSA Key Size</th><th>ECC Key Size</th><th>Rasio</th></tr>
    <tr><td>80</td><td>1024 bit</td><td>160 bit</td><td>6.4x</td></tr>
    <tr><td>112</td><td>2048 bit</td><td>224 bit</td><td>9.1x</td></tr>
    <tr><td>128</td><td>3072 bit</td><td>256 bit</td><td>12x</td></tr>
    <tr><td>192</td><td>7680 bit</td><td>384 bit</td><td>20x</td></tr>
    <tr><td>256</td><td>15360 bit</td><td>521 bit</td><td>29.5x</td></tr>
    </table>
    </div>
    <div class="code-block"><span class="cm">// Kurva Eliptik: y&sup2; = x&sup3; + ax + b (mod p)</span>
<span class="cm">// Keamanan bergantung pada Elliptic Curve Discrete Logarithm Problem (ECDLP)</span>

<span class="cm">// Kurva populer:</span>
<span class="kw">P-256</span>  (secp256r1)  <span class="cm">// NIST standard, digunakan di TLS</span>
<span class="kw">P-384</span>  (secp384r1)  <span class="cm">// Keamanan lebih tinggi</span>
<span class="kw">Curve25519</span>          <span class="cm">// Daniel Bernstein, digunakan di WireGuard, Signal</span>
<span class="kw">Ed25519</span>             <span class="cm">// EdDSA signature scheme, digunakan di SSH, GPG</span></div>
    <div class="success-box">ECC adalah pilihan utama untuk perangkat dengan resource terbatas (IoT, mobile) karena ukuran kunci kecil tapi keamanan setara.</div>
</div>

<!-- Canvas: Encryption Process -->
<div class="card animate-in">
    <h3>Animasi: Proses Enkripsi & Dekripsi</h3>
    <p>Visualisasi langkah demi langkah bagaimana plaintext diubah menjadi ciphertext dan dikembalikan lagi.</p>
    <div class="anim-container">
        <canvas id="encrypt-anim-canvas" width="800" height="300" style="width:100%;max-width:800px;background:var(--card-bg);border-radius:12px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="encrypt-run">Jalankan Animasi</button>
            <button class="anim-btn" id="encrypt-reset">Reset</button>
        </div>
    </div>
</div>

<!-- ==================== 2. HASHING ==================== -->
<h2 class="animate-in">2. Hashing</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa Itu Hash Function?</h3>
    <p>Hash function adalah fungsi matematika yang mengubah input berukuran <strong>sembarang</strong> menjadi output berukuran <strong>tetap</strong> (digest/hash). Hash bersifat <strong>satu arah</strong> &mdash; tidak bisa dikembalikan ke input asli.</p>
    <div class="flow-diagram">
        <div class="flow-node">"Hello World"</div>
        <div class="flow-arrow">&rarr; SHA-256 &rarr;</div>
        <div class="flow-node cipher" style="font-size:0.6rem;border-color:var(--green)">a591a6d40bf420...64e4d8<br>(256 bit / 64 hex chars)</div>
    </div>

    <h4>Properti Hash Function yang Baik</h4>
    <div class="card-grid-3 animate-in">
        <div class="card">
            <h4><span class="badge badge-blue">Deterministik</span></h4>
            <p>Input yang sama <strong>selalu</strong> menghasilkan output yang sama. Tidak ada elemen acak.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-green">Cepat</span></h4>
            <p>Menghitung hash harus efisien untuk input berukuran apapun.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-orange">Avalanche Effect</span></h4>
            <p>Perubahan 1 bit pada input mengubah ~50% bit output. Perubahan kecil &rarr; output sangat berbeda.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-red">Pre-image Resistant</span></h4>
            <p>Diberi hash h, sangat sulit mencari input m sehingga hash(m) = h.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-purple">Second Pre-image Resistant</span></h4>
            <p>Diberi m1, sangat sulit mencari m2 &ne; m1 sehingga hash(m1) = hash(m2).</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-pink">Collision Resistant</span></h4>
            <p>Sangat sulit mencari dua input berbeda yang menghasilkan hash yang sama.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Algoritma Hash Populer</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Algoritma</th><th>Output</th><th>Status</th><th>Kecepatan</th><th>Penggunaan</th></tr>
    <tr><td><strong>MD5</strong></td><td>128 bit</td><td><span class="badge badge-red">BROKEN</span></td><td>Sangat cepat</td><td>Checksum file (non-security only)</td></tr>
    <tr><td><strong>SHA-1</strong></td><td>160 bit</td><td><span class="badge badge-red">BROKEN</span></td><td>Cepat</td><td>Legacy (Git masih pakai, tapi migrasi)</td></tr>
    <tr><td><strong>SHA-256</strong></td><td>256 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Cepat</td><td>Digital signature, blockchain, TLS</td></tr>
    <tr><td><strong>SHA-512</strong></td><td>512 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Cepat (64-bit CPU)</td><td>High-security applications</td></tr>
    <tr><td><strong>SHA-3</strong></td><td>224-512 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Sedang</td><td>Alternatif SHA-2, desain berbeda (Keccak)</td></tr>
    <tr><td><strong>BLAKE2</strong></td><td>1-64 bytes</td><td><span class="badge badge-green">SECURE</span></td><td>Sangat cepat</td><td>General purpose, WireGuard (BLAKE2s)</td></tr>
    <tr><td><strong>BLAKE3</strong></td><td>256 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Tercepat</td><td>Parallelizable, modern replacement</td></tr>
    </table>
    </div>
    <div class="warn-box"><strong>MD5</strong> dan <strong>SHA-1</strong> sudah terbukti rentan terhadap collision attack. Google membuktikan collision SHA-1 pada 2017 (proyek SHAttered). Jangan gunakan untuk keamanan!</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--red)">Password Hashing: Berbeda dari Hash Biasa!</h3>
    <p>Hash biasa (SHA-256) terlalu <strong>cepat</strong> untuk password &mdash; attacker bisa mencoba miliaran password per detik. Password hash dirancang <strong>sengaja lambat</strong> dan menggunakan <strong>salt</strong> unik per password.</p>

    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge badge-blue">bcrypt</span></h4>
            <p>Berdasarkan Blowfish cipher. Cost factor bisa diatur (default 10 = ~100ms).</p>
            <div class="code-block"><span class="cm">// Format output bcrypt:</span>
<span class="str">$2b$10$salt22chars.hash31chars</span>
<span class="cm">// $2b = versi</span>
<span class="cm">// $10 = cost factor (2^10 iterasi)</span>
<span class="cm">// salt + hash digabung</span></div>
        </div>
        <div class="card">
            <h4><span class="badge badge-green">scrypt</span></h4>
            <p>Memory-hard function. Selain CPU-intensive, juga membutuhkan banyak <strong>memori</strong> &mdash; membuat serangan GPU/ASIC lebih mahal.</p>
            <div class="code-block"><span class="cm">// Parameter scrypt:</span>
<span class="kw">N</span> = CPU/memory cost  <span class="cm">// 2^14 - 2^20</span>
<span class="kw">r</span> = block size       <span class="cm">// 8</span>
<span class="kw">p</span> = parallelization  <span class="cm">// 1</span></div>
        </div>
        <div class="card">
            <h4><span class="badge badge-purple">Argon2</span></h4>
            <p>Pemenang Password Hashing Competition (2015). <strong>Paling direkomendasikan</strong> saat ini.</p>
            <div class="code-block"><span class="cm">// Varian Argon2:</span>
<span class="kw">Argon2d</span>  <span class="cm">// GPU-resistant (data-dependent)</span>
<span class="kw">Argon2i</span>  <span class="cm">// Side-channel resistant</span>
<span class="kw">Argon2id</span> <span class="cm">// Hybrid (RECOMMENDED)</span>
<span class="cm">// Parameter: memory, iterations, parallelism</span></div>
        </div>
    </div>
    <div class="success-box"><strong>Rekomendasi 2024:</strong> Gunakan <strong>Argon2id</strong> dengan minimal 64MB memori, 3 iterasi, 4 thread. Jika tidak tersedia, gunakan <strong>bcrypt</strong> dengan cost factor 12+.</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">HMAC (Hash-based Message Authentication Code)</h3>
    <p>HMAC menggabungkan hash function dengan secret key untuk menyediakan <strong>integritas data</strong> dan <strong>autentikasi</strong>. Tidak cukup hanya hash &mdash; attacker bisa mengubah data dan menghitung ulang hash-nya.</p>
    <div class="flow-diagram">
        <div class="flow-node">Message + Secret Key</div>
        <div class="flow-arrow">&rarr; HMAC-SHA256 &rarr;</div>
        <div class="flow-node cipher" style="border-color:var(--accent3)">MAC Tag (256 bit)</div>
    </div>
    <div class="code-block"><span class="cm">// HMAC Construction (RFC 2104)</span>
HMAC(K, m) = H((K' &oplus; opad) || H((K' &oplus; ipad) || m))

<span class="cm">// K' = key (padded/hashed ke block size)</span>
<span class="cm">// opad = outer padding (0x5c repeated)</span>
<span class="cm">// ipad = inner padding (0x36 repeated)</span>
<span class="cm">// H = hash function (SHA-256, dll)</span>

<span class="cm">// Penggunaan: JWT signing, API authentication, TLS PRF</span></div>
</div>

<!-- Canvas: Hash Animation -->
<div class="card animate-in">
    <h3>Animasi: Hash & Avalanche Effect</h3>
    <p>Lihat bagaimana perubahan kecil pada input menghasilkan output hash yang sangat berbeda.</p>
    <div class="anim-container">
        <canvas id="hash-anim-canvas" width="800" height="300" style="width:100%;max-width:800px;background:var(--card-bg);border-radius:12px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="hash-run">Jalankan Animasi</button>
            <button class="anim-btn" id="hash-reset">Reset</button>
        </div>
    </div>
</div>

<!-- ==================== 3. TLS/SSL ==================== -->
<h2 class="animate-in">3. TLS/SSL (Transport Layer Security)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Evolusi SSL/TLS</h3>
    <p>TLS (Transport Layer Security) adalah protokol kriptografi yang menyediakan komunikasi aman melalui jaringan. TLS adalah penerus SSL (Secure Sockets Layer).</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Versi</th><th>Tahun</th><th>Status</th><th>Catatan</th></tr>
    <tr><td>SSL 2.0</td><td>1995</td><td><span class="badge badge-red">DEPRECATED</span></td><td>Banyak kerentanan kritis</td></tr>
    <tr><td>SSL 3.0</td><td>1996</td><td><span class="badge badge-red">DEPRECATED</span></td><td>POODLE attack (2014)</td></tr>
    <tr><td>TLS 1.0</td><td>1999</td><td><span class="badge badge-red">DEPRECATED</span></td><td>BEAST attack. Dimatikan 2020</td></tr>
    <tr><td>TLS 1.1</td><td>2006</td><td><span class="badge badge-red">DEPRECATED</span></td><td>Dimatikan 2020</td></tr>
    <tr><td>TLS 1.2</td><td>2008</td><td><span class="badge badge-orange">SUPPORTED</span></td><td>Masih banyak digunakan, aman jika dikonfigurasi benar</td></tr>
    <tr><td>TLS 1.3</td><td>2018</td><td><span class="badge badge-green">RECOMMENDED</span></td><td>Lebih cepat, lebih aman. 1-RTT handshake</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">TLS 1.2 Handshake (Detail 6 Langkah)</h3>
    <p>TLS 1.2 membutuhkan <strong>2 round-trip</strong> sebelum data terenkripsi bisa dikirim.</p>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text">
                <strong>Client Hello</strong><br>
                Client mengirim: versi TLS yang didukung, daftar cipher suites, client random (32 byte), session ID, dan extensions (SNI, ALPN).
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text">
                <strong>Server Hello + Certificate + ServerKeyExchange + ServerHelloDone</strong><br>
                Server memilih cipher suite, mengirim server random, sertifikat X.509, parameter key exchange (DH/ECDH), dan sinyal bahwa server selesai.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text">
                <strong>Client: Certificate Verify</strong><br>
                Client memverifikasi sertifikat server terhadap trusted CA. Mengecek: tanggal valid, domain match, chain of trust, revocation (CRL/OCSP).
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text">
                <strong>Client Key Exchange + ChangeCipherSpec + Finished</strong><br>
                Client mengirim pre-master secret (dienkripsi dengan server public key atau ECDH params). Kedua sisi menghitung master secret. Client mengirim sinyal beralih ke enkripsi.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text">
                <strong>Server: ChangeCipherSpec + Finished</strong><br>
                Server mengkonfirmasi beralih ke enkripsi. Mengirim pesan Finished yang dienkripsi sebagai verifikasi.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-text">
                <strong>Application Data (Encrypted)</strong><br>
                Kedua pihak sekarang berkomunikasi melalui kanal terenkripsi menggunakan symmetric key yang diturunkan dari master secret.
            </div>
        </div>
    </div>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg"><div class="hs-arrow">&rarr;</div><div class="hs-text">ClientHello (cipher suites, random)</div></div>
            <div class="hs-msg reverse"><div class="hs-arrow">&larr;</div><div class="hs-text">ServerHello + Certificate + KeyExchange</div></div>
            <div class="hs-msg"><div class="hs-arrow">&rarr;</div><div class="hs-text">ClientKeyExchange + ChangeCipherSpec + Finished</div></div>
            <div class="hs-msg reverse"><div class="hs-arrow">&larr;</div><div class="hs-text">ChangeCipherSpec + Finished</div></div>
            <div class="hs-msg"><div class="hs-arrow">&harr;</div><div class="hs-text" style="color:var(--green);font-weight:700">Encrypted Application Data</div></div>
        </div>
        <div class="handshake-col">
            <div class="handshake-label">Server</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">TLS 1.3 Handshake (1-RTT, Lebih Sederhana)</h3>
    <p>TLS 1.3 mengurangi handshake menjadi <strong>1 round-trip</strong> dan menghapus fitur-fitur tidak aman.</p>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg"><div class="hs-arrow">&rarr;</div><div class="hs-text">ClientHello + KeyShare + SupportedVersions</div></div>
            <div class="hs-msg reverse"><div class="hs-arrow">&larr;</div><div class="hs-text">ServerHello + KeyShare + {Cert + CertVerify + Finished}</div></div>
            <div class="hs-msg"><div class="hs-arrow">&rarr;</div><div class="hs-text">{Finished}</div></div>
            <div class="hs-msg"><div class="hs-arrow">&harr;</div><div class="hs-text" style="color:var(--green);font-weight:700">Encrypted Application Data</div></div>
        </div>
        <div class="handshake-col">
            <div class="handshake-label">Server</div>
        </div>
    </div>

    <h4>Perubahan di TLS 1.3 vs 1.2:</h4>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>TLS 1.2</th><th>TLS 1.3</th></tr>
    <tr><td>Round-trips</td><td>2-RTT</td><td><span class="badge badge-green">1-RTT (0-RTT resumption)</span></td></tr>
    <tr><td>Key Exchange</td><td>RSA, DHE, ECDHE</td><td><span class="badge badge-green">ECDHE only (forward secrecy wajib)</span></td></tr>
    <tr><td>Cipher Suites</td><td>37+ opsi</td><td><span class="badge badge-green">5 opsi (hanya AEAD)</span></td></tr>
    <tr><td>RSA Key Exchange</td><td>Didukung</td><td><span class="badge badge-red">Dihapus (no forward secrecy)</span></td></tr>
    <tr><td>Kompresi</td><td>Didukung</td><td><span class="badge badge-red">Dihapus (CRIME attack)</span></td></tr>
    <tr><td>Renegotiation</td><td>Didukung</td><td><span class="badge badge-red">Dihapus</span></td></tr>
    </table>
    </div>
    <div class="info-box"><strong>0-RTT Resumption:</strong> TLS 1.3 mendukung pengiriman data terenkripsi pada koneksi pertama (tanpa round-trip tambahan) untuk koneksi berulang. Namun, rentan terhadap <strong>replay attack</strong> &mdash; hanya digunakan untuk request idempotent.</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Certificate Chain & Validasi</h3>
    <p>Browser memverifikasi identitas server melalui <strong>chain of trust</strong> dari sertifikat digital.</p>
    <div class="layer-diagram">
        <div class="layer-item" style="background:rgba(248,113,113,0.12)">
            <div class="layer-num" style="background:var(--red);color:#fff">1</div>
            <div class="layer-info">
                <strong style="color:var(--red)">Root CA Certificate</strong>
                <span>Self-signed. Pre-installed di OS/browser. DigiCert, Let's Encrypt (ISRG Root), Comodo. ~150 Root CAs di browser.</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,146,60,0.12)">
            <div class="layer-num" style="background:var(--orange);color:#fff">2</div>
            <div class="layer-info">
                <strong style="color:var(--orange)">Intermediate CA Certificate</strong>
                <span>Ditandatangani oleh Root CA. Menerbitkan sertifikat untuk end-entity. Root CA biasanya tidak langsung menandatangani server cert (keamanan).</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.12)">
            <div class="layer-num" style="background:var(--green);color:#fff">3</div>
            <div class="layer-info">
                <strong style="color:var(--green)">Server (End-Entity) Certificate</strong>
                <span>Ditandatangani oleh Intermediate CA. Berisi: domain name, public key, validity period, issuer. Ini yang dikirim saat TLS handshake.</span>
            </div>
        </div>
    </div>

    <h4>Proses Validasi Sertifikat:</h4>
    <div class="flow-diagram">
        <div class="flow-node">Cek Tanggal Valid</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Cek Domain Match</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Verifikasi Signature</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Trace Chain ke Root CA</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Cek Revocation (OCSP/CRL)</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node highlight">Trusted!</div>
    </div>
</div>

<div class="card animate-in">
    <h3>Cipher Suites Explained</h3>
    <p>Cipher suite menentukan kombinasi algoritma yang digunakan dalam TLS session.</p>
    <div class="code-block"><span class="cm">// Format Cipher Suite TLS 1.2:</span>
<span class="kw">TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</span>
<span class="cm">//  |      |    |     |    |     |</span>
<span class="cm">//  |      |    |     |    |     +-- PRF/HMAC hash</span>
<span class="cm">//  |      |    |     |    +-------- Mode (GCM = AEAD)</span>
<span class="cm">//  |      |    |     +------------- Enkripsi simetris (AES-256)</span>
<span class="cm">//  |      |    +------------------- Key exchange auth (RSA cert)</span>
<span class="cm">//  |      +------------------------ Key exchange (ECDHE)</span>
<span class="cm">//  +------------------------------- Protokol (TLS)</span>

<span class="cm">// TLS 1.3 Cipher Suites (lebih sederhana, hanya 5):</span>
<span class="str">TLS_AES_256_GCM_SHA384</span>        <span class="cm">// Paling umum</span>
<span class="str">TLS_AES_128_GCM_SHA256</span>        <span class="cm">// Cepat, ringan</span>
<span class="str">TLS_CHACHA20_POLY1305_SHA256</span>  <span class="cm">// Mobile-friendly</span>
<span class="str">TLS_AES_128_CCM_SHA256</span>        <span class="cm">// IoT</span>
<span class="str">TLS_AES_128_CCM_8_SHA256</span>      <span class="cm">// IoT (tag pendek)</span></div>
</div>

<!-- Canvas: TLS Handshake -->
<div class="card animate-in">
    <h3>Animasi: TLS Handshake</h3>
    <p>Visualisasi step-by-step TLS handshake antara Client dan Server.</p>
    <div class="anim-container">
        <canvas id="tls-anim-canvas" width="800" height="400" style="width:100%;max-width:800px;background:var(--card-bg);border-radius:12px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="tls-run">Jalankan Animasi</button>
            <button class="anim-btn" id="tls-reset">Reset</button>
        </div>
    </div>
</div>

<!-- ==================== 4. PKI & CERTIFICATES ==================== -->
<h2 class="animate-in">4. PKI & Sertifikat Digital</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa Itu PKI (Public Key Infrastructure)?</h3>
    <p>PKI adalah kerangka kerja (framework) yang mengelola <strong>pembuatan, distribusi, dan pencabutan sertifikat digital</strong>. PKI memungkinkan komunikasi aman di internet dengan membangun <strong>chain of trust</strong>.</p>

    <h4>Komponen PKI:</h4>
    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge badge-red">Certificate Authority (CA)</span></h4>
            <p>Entitas terpercaya yang menerbitkan dan menandatangani sertifikat. Terdapat hierarki: Root CA &rarr; Intermediate CA.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-blue">Registration Authority (RA)</span></h4>
            <p>Memverifikasi identitas pemohon sebelum CA menerbitkan sertifikat. Bertindak sebagai perantara.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-green">Certificate Repository</span></h4>
            <p>Tempat penyimpanan sertifikat dan Certificate Revocation List (CRL). Biasanya menggunakan LDAP.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Struktur Sertifikat X.509</h3>
    <div class="code-block"><span class="cm">// X.509 v3 Certificate Structure</span>
<span class="kw">Certificate</span> {
    <span class="type">Version</span>:             <span class="str">v3</span>
    <span class="type">Serial Number</span>:       <span class="str">03:A1:... (unique per CA)</span>
    <span class="type">Signature Algorithm</span>: <span class="str">SHA256withRSA / SHA384withECDSA</span>
    <span class="type">Issuer</span>:              <span class="str">CN=Let's Encrypt Authority X3, O=Let's Encrypt</span>
    <span class="type">Validity</span>: {
        <span class="kw">Not Before</span>: <span class="str">2024-01-01 00:00:00 UTC</span>
        <span class="kw">Not After</span>:  <span class="str">2024-04-01 00:00:00 UTC</span>  <span class="cm">// 90 hari (Let's Encrypt)</span>
    }
    <span class="type">Subject</span>:             <span class="str">CN=example.com</span>
    <span class="type">Subject Public Key</span>:  <span class="str">RSA 2048 bit / EC P-256</span>
    <span class="type">Extensions</span>: {
        <span class="kw">Subject Alternative Name</span>: <span class="str">example.com, www.example.com, *.example.com</span>
        <span class="kw">Key Usage</span>: <span class="str">Digital Signature, Key Encipherment</span>
        <span class="kw">Extended Key Usage</span>: <span class="str">TLS Web Server Authentication</span>
        <span class="kw">Authority Info Access</span>: <span class="str">OCSP: http://ocsp.letsencrypt.org</span>
        <span class="kw">CRL Distribution</span>: <span class="str">http://crl.example.com/ca.crl</span>
    }
    <span class="type">Signature</span>: <span class="str">30:45:02:21:... (digital signature dari CA)</span>
}</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Let's Encrypt & Protokol ACME</h3>
    <p><strong>Let's Encrypt</strong> adalah CA gratis dan otomatis yang menggunakan protokol <strong>ACME (Automatic Certificate Management Environment)</strong> untuk menerbitkan sertifikat.</p>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Client membuat CSR</strong><br>Generate key pair, buat Certificate Signing Request.</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>Domain Validation Challenge</strong><br>ACME server memberi challenge: HTTP-01 (file di /.well-known/) atau DNS-01 (TXT record).</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Client membuktikan kontrol domain</strong><br>Menempatkan token di web server atau DNS record.</div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text"><strong>ACME server memverifikasi</strong><br>Server memeriksa challenge dan jika valid, menerbitkan sertifikat (90 hari).</div>
        </div>
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text"><strong>Auto-renewal</strong><br>Certbot/ACME client otomatis memperpanjang sebelum expired.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">mTLS (Mutual TLS)</h3>
    <p>Pada TLS biasa, hanya <strong>server</strong> yang menunjukkan sertifikat. Pada mTLS, <strong>kedua pihak</strong> saling memverifikasi sertifikat masing-masing.</p>
    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg"><div class="hs-arrow">&rarr;</div><div class="hs-text">ClientHello</div></div>
            <div class="hs-msg reverse"><div class="hs-arrow">&larr;</div><div class="hs-text">ServerHello + Server Certificate + CertificateRequest</div></div>
            <div class="hs-msg"><div class="hs-arrow">&rarr;</div><div class="hs-text">Client Certificate + KeyExchange + CertVerify + Finished</div></div>
            <div class="hs-msg reverse"><div class="hs-arrow">&larr;</div><div class="hs-text">Finished</div></div>
            <div class="hs-msg"><div class="hs-arrow">&harr;</div><div class="hs-text" style="color:var(--green);font-weight:700">Both sides verified! Encrypted data flow</div></div>
        </div>
        <div class="handshake-col">
            <div class="handshake-label">Server</div>
        </div>
    </div>
    <div class="info-box"><strong>Kapan pakai mTLS?</strong> Microservices communication (service mesh seperti Istio), API antar perusahaan, IoT device authentication, zero trust architecture.</div>
</div>

<!-- ==================== 5. VPN & WIREGUARD ==================== -->
<h2 class="animate-in">5. VPN & WireGuard</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa Itu VPN?</h3>
    <p>VPN (Virtual Private Network) membuat <strong>tunnel terenkripsi</strong> melalui jaringan publik (internet), sehingga data seolah-olah dikirim melalui jaringan privat.</p>
    <div class="flow-diagram">
        <div class="flow-node">Device Anda</div>
        <div class="flow-arrow">&rarr; Encrypted Tunnel &rarr;</div>
        <div class="flow-node highlight">VPN Server</div>
        <div class="flow-arrow">&rarr; Normal Traffic &rarr;</div>
        <div class="flow-node">Internet / Target</div>
    </div>
    <div class="card-grid">
        <div class="card">
            <h4><span class="badge badge-blue">IPSec VPN</span></h4>
            <p>Beroperasi di <strong>Network Layer (L3)</strong>. Terdiri dari dua fase: IKE (key exchange) dan ESP/AH (data transfer). Kompleks tapi sangat mature.</p>
            <ul>
                <li><strong>IKE Phase 1:</strong> Negosiasi parameter, autentikasi, establish SA</li>
                <li><strong>IKE Phase 2:</strong> Negosiasi IPSec SA, kunci untuk data</li>
                <li><strong>ESP:</strong> Enkripsi + autentikasi payload</li>
                <li><strong>AH:</strong> Hanya autentikasi (jarang dipakai)</li>
            </ul>
        </div>
        <div class="card">
            <h4><span class="badge badge-green">SSL/TLS VPN</span></h4>
            <p>Beroperasi di <strong>Application Layer (L7)</strong>. Menggunakan TLS untuk tunnel. Lebih mudah melewati firewall (port 443).</p>
            <ul>
                <li><strong>OpenVPN:</strong> Open source, menggunakan OpenSSL</li>
                <li><strong>Kelebihan:</strong> Mudah dikonfigurasi, firewall-friendly</li>
                <li><strong>Kekurangan:</strong> Overhead TLS, lebih lambat dari IPSec</li>
                <li>Bisa berjalan di TCP atau UDP</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">WireGuard: VPN Modern & Sederhana</h3>
    <p>WireGuard adalah protokol VPN generasi baru yang dirancang untuk menjadi <strong>lebih sederhana, lebih cepat, dan lebih aman</strong> dibanding OpenVPN dan IPSec. Masuk ke kernel Linux sejak versi 5.6 (2020).</p>

    <h4>Mengapa WireGuard?</h4>
    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge badge-green">Kode Minimal</span></h4>
            <p>~4.000 baris kode (vs OpenVPN ~100.000 baris). Lebih mudah diaudit keamanannya.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-blue">Performa Tinggi</span></h4>
            <p>Berjalan di kernel space. Throughput mendekati wire speed. Latensi sangat rendah.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-purple">Kriptografi Modern</span></h4>
            <p>Menggunakan primitif kriptografi terbaru dan terbukti aman.</p>
        </div>
    </div>

    <h4>Primitif Kriptografi WireGuard:</h4>
    <div class="table-wrapper">
    <table>
    <tr><th>Komponen</th><th>Algoritma</th><th>Fungsi</th></tr>
    <tr><td>Framework</td><td><strong>Noise Protocol (IK)</strong></td><td>Handshake framework, mutual authentication</td></tr>
    <tr><td>Key Exchange</td><td><strong>Curve25519 (ECDH)</strong></td><td>Diffie-Hellman pada kurva eliptik</td></tr>
    <tr><td>Enkripsi</td><td><strong>ChaCha20</strong></td><td>Stream cipher, cepat di CPU tanpa AES-NI</td></tr>
    <tr><td>Autentikasi</td><td><strong>Poly1305</strong></td><td>MAC (Message Authentication Code)</td></tr>
    <tr><td>Hashing</td><td><strong>BLAKE2s</strong></td><td>Hash function, cepat dan aman</td></tr>
    <tr><td>Key Derivation</td><td><strong>HKDF</strong></td><td>Menurunkan multiple key dari satu secret</td></tr>
    <tr><td>Cookie</td><td><strong>SipHash24</strong></td><td>DoS protection (cookie mechanism)</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Arsitektur WireGuard</h3>
    <p>WireGuard bekerja dengan konsep <strong>interface</strong> (virtual network interface) dan <strong>peer</strong> (endpoint yang terhubung). Setiap peer memiliki pasangan kunci public/private.</p>
    <div class="code-block"><span class="cm"># WireGuard Configuration (Server: /etc/wireguard/wg0.conf)</span>
<span class="kw">[Interface]</span>
<span class="type">PrivateKey</span> = <span class="str">SERVER_PRIVATE_KEY_BASE64</span>
<span class="type">Address</span>    = <span class="str">10.0.0.1/24</span>           <span class="cm"># IP address tunnel</span>
<span class="type">ListenPort</span> = <span class="num">51820</span>                  <span class="cm"># Port UDP</span>
<span class="type">PostUp</span>     = <span class="str">iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE</span>
<span class="type">PostDown</span>   = <span class="str">iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE</span>

<span class="kw">[Peer]</span>                                <span class="cm"># Client peer</span>
<span class="type">PublicKey</span>  = <span class="str">CLIENT_PUBLIC_KEY_BASE64</span>
<span class="type">AllowedIPs</span> = <span class="str">10.0.0.2/32</span>            <span class="cm"># IP yang diizinkan dari peer ini</span>

<span class="cm"># Client Configuration (/etc/wireguard/wg0.conf)</span>
<span class="kw">[Interface]</span>
<span class="type">PrivateKey</span> = <span class="str">CLIENT_PRIVATE_KEY_BASE64</span>
<span class="type">Address</span>    = <span class="str">10.0.0.2/24</span>
<span class="type">DNS</span>        = <span class="str">1.1.1.1, 8.8.8.8</span>

<span class="kw">[Peer]</span>                                <span class="cm"># Server peer</span>
<span class="type">PublicKey</span>  = <span class="str">SERVER_PUBLIC_KEY_BASE64</span>
<span class="type">Endpoint</span>   = <span class="str">vpn.example.com:51820</span>   <span class="cm"># Alamat publik server</span>
<span class="type">AllowedIPs</span> = <span class="str">0.0.0.0/0</span>              <span class="cm"># Route semua traffic melalui VPN</span>
<span class="type">PersistentKeepalive</span> = <span class="num">25</span>            <span class="cm"># Keep NAT mapping alive</span></div>
</div>

<div class="card animate-in">
    <h3>Alur Paket WireGuard</h3>
    <p>Bagaimana paket mengalir melalui tunnel WireGuard:</p>
    <div class="pipeline">
        <div class="pipeline-stage">
            <div class="stage-title">Aplikasi</div>
            <div class="stage-desc">Kirim data ke 10.0.0.1</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Routing Table</div>
            <div class="stage-desc">Route ke interface wg0</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">WireGuard Encrypt</div>
            <div class="stage-desc">ChaCha20-Poly1305</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">UDP Encapsulate</div>
            <div class="stage-desc">Bungkus dalam UDP:51820</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Internet</div>
            <div class="stage-desc">Kirim ke endpoint peer</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Peer Decrypt</div>
            <div class="stage-desc">Verifikasi + dekripsi</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Perbandingan: OpenVPN vs IPSec vs WireGuard</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>OpenVPN</th><th>IPSec (IKEv2)</th><th>WireGuard</th></tr>
    <tr><td>Baris Kode</td><td>~100.000</td><td>~400.000</td><td><span class="badge badge-green">~4.000</span></td></tr>
    <tr><td>Layer</td><td>L7 (User space)</td><td>L3 (Kernel)</td><td><span class="badge badge-green">L3 (Kernel)</span></td></tr>
    <tr><td>Protokol</td><td>TCP/UDP</td><td>UDP (500, 4500)</td><td>UDP</td></tr>
    <tr><td>Kecepatan</td><td>Sedang</td><td>Cepat</td><td><span class="badge badge-green">Sangat Cepat</span></td></tr>
    <tr><td>Latensi</td><td>Tinggi</td><td>Rendah</td><td><span class="badge badge-green">Sangat Rendah</span></td></tr>
    <tr><td>Setup</td><td>Kompleks</td><td>Sangat Kompleks</td><td><span class="badge badge-green">Sangat Mudah</span></td></tr>
    <tr><td>Kriptografi</td><td>Konfigurable (OpenSSL)</td><td>Konfigurable</td><td>Fixed (modern only)</td></tr>
    <tr><td>Roaming</td><td>Reconnect</td><td>MOBIKE</td><td><span class="badge badge-green">Built-in (IP bisa berubah)</span></td></tr>
    <tr><td>Audit</td><td>Sulit (kode besar)</td><td>Sangat sulit</td><td><span class="badge badge-green">Mudah diaudit</span></td></tr>
    </table>
    </div>
</div>

<!-- ==================== 6. SMPC ==================== -->
<h2 class="animate-in">6. Secure Multi-Party Computation (SMPC)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa Itu SMPC?</h3>
    <p>SMPC memungkinkan beberapa pihak untuk <strong>menghitung fungsi bersama</strong> atas input masing-masing <strong>tanpa mengungkapkan input tersebut</strong> ke pihak lain. Setiap pihak hanya mengetahui hasilnya, bukan data milik pihak lain.</p>

    <div class="info-box"><strong>Analogi: Masalah Jutawan (Millionaire's Problem)</strong><br>
    Alice dan Bob ingin tahu siapa yang lebih kaya tanpa mengungkapkan jumlah kekayaan masing-masing. SMPC memungkinkan mereka menghitung max(wealth_A, wealth_B) tanpa pihak manapun tahu angka pasti pihak lain.</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Shamir's Secret Sharing</h3>
    <p>Teknik membagi sebuah <strong>secret</strong> menjadi <strong>n bagian (shares)</strong> di mana diperlukan minimal <strong>k bagian</strong> (threshold) untuk merekonstruksi secret. Kurang dari k bagian tidak memberikan informasi apapun.</p>
    <div class="code-block"><span class="cm">// Shamir's Secret Sharing (k-of-n threshold scheme)</span>
<span class="cm">// Contoh: 3-of-5 (butuh 3 dari 5 shares untuk recovery)</span>

<span class="cm">// Secret: S = 42</span>
<span class="cm">// Buat polynomial derajat k-1 = 2:</span>
<span class="fn">f(x)</span> = <span class="num">42</span> + <span class="num">7</span>x + <span class="num">3</span>x&sup2;  <span class="cm">// koefisien random kecuali f(0) = S</span>

<span class="cm">// Generate 5 shares:</span>
Share 1: f(1) = 42 + 7 + 3   = <span class="num">52</span>   &rarr; (1, 52)
Share 2: f(2) = 42 + 14 + 12 = <span class="num">68</span>   &rarr; (2, 68)
Share 3: f(3) = 42 + 21 + 27 = <span class="num">90</span>   &rarr; (3, 90)
Share 4: f(4) = 42 + 28 + 48 = <span class="num">118</span>  &rarr; (4, 118)
Share 5: f(5) = 42 + 35 + 75 = <span class="num">152</span>  &rarr; (5, 152)

<span class="cm">// Recovery: Lagrange interpolation dengan &ge;3 shares apapun</span>
<span class="cm">// f(0) = S = 42  &check;</span></div>
    <div class="success-box">Shamir's Secret Sharing bersifat <strong>information-theoretically secure</strong> &mdash; kurang dari k shares tidak memberikan informasi apapun tentang secret, bahkan dengan komputasi tak terbatas!</div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3><span class="badge badge-purple">Garbled Circuits</span></h3>
        <p>Teknik SMPC di mana sebuah fungsi boolean direpresentasikan sebagai sirkuit logika, lalu <strong>"di-garble"</strong> (dienkripsi gate per gate) sehingga evaluator bisa menghitung hasilnya tanpa mengetahui input.</p>
        <ul>
            <li>Dikembangkan oleh Andrew Yao (1986)</li>
            <li>Satu pihak (garbler) membuat garbled circuit</li>
            <li>Pihak lain (evaluator) mengevaluasi</li>
            <li>Menggunakan Oblivious Transfer (OT) untuk transfer input</li>
            <li>Overhead komunikasi cukup besar</li>
        </ul>
    </div>
    <div class="card">
        <h3><span class="badge badge-orange">Homomorphic Encryption</span></h3>
        <p>Enkripsi yang memungkinkan <strong>komputasi langsung pada ciphertext</strong>. Hasilnya saat didekripsi sama dengan jika komputasi dilakukan pada plaintext.</p>
        <ul>
            <li><strong>Partially HE:</strong> Hanya satu operasi (RSA: perkalian, Paillier: penjumlahan)</li>
            <li><strong>Somewhat HE:</strong> Beberapa operasi terbatas</li>
            <li><strong>Fully HE (FHE):</strong> Semua operasi (sangat lambat, riset aktif)</li>
            <li>Library: Microsoft SEAL, IBM HELib, Google TFHE</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3>Use Cases SMPC di Dunia Nyata</h3>
    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge badge-blue">Lelang Privat</span></h4>
            <p>Peserta lelang submit bid terenkripsi. Sistem menentukan pemenang tanpa mengungkapkan bid lainnya.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-green">Perbandingan Gaji</span></h4>
            <p>Karyawan bisa mengetahui rata-rata gaji departemen tanpa mengungkapkan gaji individu.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-purple">Joint Analytics</span></h4>
            <p>Beberapa rumah sakit menganalisis data pasien bersama tanpa membagikan data pasien masing-masing.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-orange">Voting Elektronik</span></h4>
            <p>Menghitung hasil pemilu tanpa mengungkapkan pilihan individu setiap pemilih.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-red">Fraud Detection</span></h4>
            <p>Bank-bank berbagi pola fraud tanpa mengungkapkan data transaksi pelanggan.</p>
        </div>
        <div class="card">
            <h4><span class="badge badge-yellow">Supply Chain</span></h4>
            <p>Perusahaan memverifikasi kepatuhan supply chain tanpa membagikan data bisnis sensitif.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Visual: SMPC &mdash; Pihak Mengirim Encrypted Shares</h3>
    <div class="flow-diagram">
        <div class="flow-node">Alice<br><small>Input: x</small></div>
        <div class="flow-arrow">&rarr; share(x) &rarr;</div>
        <div class="flow-node highlight">Secure Computation<br><small>f(x, y, z)</small></div>
        <div class="flow-arrow">&larr; share(y) &larr;</div>
        <div class="flow-node">Bob<br><small>Input: y</small></div>
    </div>
    <div class="flow-diagram" style="justify-content:center">
        <div class="flow-node">Carol<br><small>Input: z</small></div>
        <div class="flow-arrow">&uarr; share(z) &uarr;</div>
        <div class="flow-node highlight">Hasil: f(x,y,z)<br><small>Semua pihak tahu hasil<br>Tidak ada yang tahu input lain</small></div>
    </div>
</div>

<!-- ==================== 7. JWT ==================== -->
<h2 class="animate-in">7. JWT (JSON Web Token)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Struktur JWT: header.payload.signature</h3>
    <p>JWT adalah standar terbuka (RFC 7519) untuk mengirimkan klaim (claims) secara aman antara dua pihak. JWT terdiri dari 3 bagian yang dipisahkan titik dan di-encode dengan Base64URL.</p>

    <div class="encrypt-vis">
        <div class="encrypt-block" style="border-color:var(--red)">
            <div style="color:var(--red);font-weight:700">Header</div>
            <code style="font-size:0.65rem">{"alg":"HS256","typ":"JWT"}</code>
        </div>
        <div style="font-size:1.5rem;font-weight:700">.</div>
        <div class="encrypt-block" style="border-color:var(--accent3)">
            <div style="color:var(--accent3);font-weight:700">Payload</div>
            <code style="font-size:0.65rem">{"sub":"1234","name":"Tazkia","role":"admin","iat":1710000000,"exp":1710003600}</code>
        </div>
        <div style="font-size:1.5rem;font-weight:700">.</div>
        <div class="encrypt-block cipher" style="border-color:var(--green)">
            <div style="color:var(--green);font-weight:700">Signature</div>
            <code style="font-size:0.65rem">HMACSHA256(base64(header) + "." + base64(payload), secret)</code>
        </div>
    </div>

    <div class="code-block"><span class="cm">// Contoh JWT (decoded):</span>

<span class="cm">// Header (algoritma dan tipe)</span>
{
  <span class="str">"alg"</span>: <span class="str">"HS256"</span>,      <span class="cm">// Algoritma signing</span>
  <span class="str">"typ"</span>: <span class="str">"JWT"</span>          <span class="cm">// Tipe token</span>
}

<span class="cm">// Payload (claims)</span>
{
  <span class="str">"sub"</span>: <span class="str">"user-1234"</span>,   <span class="cm">// Subject (user ID)</span>
  <span class="str">"name"</span>: <span class="str">"Tazkia"</span>,     <span class="cm">// Custom claim</span>
  <span class="str">"role"</span>: <span class="str">"admin"</span>,      <span class="cm">// Custom claim</span>
  <span class="str">"iat"</span>: <span class="num">1710000000</span>,    <span class="cm">// Issued At</span>
  <span class="str">"exp"</span>: <span class="num">1710003600</span>,    <span class="cm">// Expiration (1 jam)</span>
  <span class="str">"iss"</span>: <span class="str">"auth.example.com"</span>  <span class="cm">// Issuer</span>
}

<span class="cm">// Signature</span>
HMACSHA256(
  base64UrlEncode(header) + <span class="str">"."</span> + base64UrlEncode(payload),
  <span class="kw">secret</span>
)</div>
    <div class="warn-box"><strong>JWT bukan enkripsi!</strong> Payload hanya di-encode Base64URL &mdash; siapapun bisa membaca isinya. JWT menjamin <strong>integritas</strong> (tidak dimodifikasi) dan <strong>autentikasi</strong> (dari pihak yang benar). Untuk payload terenkripsi, gunakan <strong>JWE (JSON Web Encryption)</strong>.</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Signing: HMAC vs RSA</h3>
    <div class="card-grid">
        <div class="card">
            <h4><span class="badge badge-blue">HMAC (HS256/HS384/HS512)</span></h4>
            <p>Symmetric signing &mdash; pengirim dan penerima menggunakan <strong>secret key yang sama</strong>.</p>
            <ul>
                <li>Cepat dan sederhana</li>
                <li>Kedua pihak harus tahu secret</li>
                <li>Cocok untuk single-service auth</li>
                <li>Tidak bisa membuktikan siapa yang sign</li>
            </ul>
        </div>
        <div class="card">
            <h4><span class="badge badge-green">RSA/ECDSA (RS256/ES256)</span></h4>
            <p>Asymmetric signing &mdash; sign dengan <strong>private key</strong>, verifikasi dengan <strong>public key</strong>.</p>
            <ul>
                <li>Lebih lambat tapi lebih fleksibel</li>
                <li>Verifier tidak perlu tahu private key</li>
                <li>Cocok untuk microservices, multi-service</li>
                <li>Public key bisa didistribusikan via JWKS endpoint</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Flow Verifikasi JWT</h3>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Decode Header</strong><br>Baca algoritma yang digunakan (HS256, RS256, dll).</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>Verifikasi Signature</strong><br>Hitung ulang signature dari header + payload dengan key, lalu bandingkan.</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Cek Expiration (exp)</strong><br>Pastikan token belum expired.</div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text"><strong>Cek Issuer (iss) & Audience (aud)</strong><br>Pastikan token diterbitkan oleh issuer yang benar untuk audience yang benar.</div>
        </div>
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text"><strong>Extract Claims</strong><br>Baca payload claims (user ID, role, dll) untuk authorization.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Access Token vs Refresh Token</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>Access Token</th><th>Refresh Token</th></tr>
    <tr><td>Tujuan</td><td>Akses resource (API call)</td><td>Mendapatkan access token baru</td></tr>
    <tr><td>Lifetime</td><td><span class="badge badge-orange">Pendek (15 menit - 1 jam)</span></td><td><span class="badge badge-blue">Panjang (7-30 hari)</span></td></tr>
    <tr><td>Storage</td><td>Memory / HttpOnly cookie</td><td>HttpOnly Secure cookie / DB</td></tr>
    <tr><td>Dikirim ke</td><td>Resource server (API)</td><td>Auth server only</td></tr>
    <tr><td>Jika dicuri</td><td>Dampak terbatas (short-lived)</td><td>Bisa rotate / revoke di server</td></tr>
    <tr><td>Revocable</td><td>Tidak (stateless) kecuali blacklist</td><td>Ya (simpan di database)</td></tr>
    </table>
    </div>
    <div class="flow-diagram">
        <div class="flow-node">Login</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node highlight">Auth Server<br><small>Beri Access + Refresh Token</small></div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Pakai Access Token</div>
        <div class="flow-arrow">&rarr; Expired &rarr;</div>
        <div class="flow-node">Gunakan Refresh Token</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node highlight">Access Token Baru</div>
    </div>
</div>

<!-- ==================== 8. OWASP TOP 10 ==================== -->
<h2 class="animate-in">8. OWASP Top 10 (2021)</h2>

<div class="card animate-in">
    <h3 style="color:var(--red)">OWASP Top 10: Risiko Keamanan Aplikasi Web</h3>
    <p>OWASP (Open Web Application Security Project) menerbitkan daftar 10 risiko keamanan paling kritis untuk aplikasi web, diperbarui setiap beberapa tahun.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>#</th><th>Vulnerability</th><th>Deskripsi</th><th>Mitigasi</th></tr>
    <tr>
        <td><span class="badge badge-red">A01</span></td>
        <td><strong>Broken Access Control</strong></td>
        <td>User bisa mengakses resource yang bukan haknya. IDOR, privilege escalation, CORS misconfiguration.</td>
        <td>RBAC, principle of least privilege, deny by default, server-side validation</td>
    </tr>
    <tr>
        <td><span class="badge badge-red">A02</span></td>
        <td><strong>Cryptographic Failures</strong></td>
        <td>Data sensitif terekspos karena enkripsi lemah atau tidak ada. Plaintext storage, weak cipher, hardcoded keys.</td>
        <td>TLS 1.3, encrypt at rest, proper key management, no MD5/SHA-1</td>
    </tr>
    <tr>
        <td><span class="badge badge-orange">A03</span></td>
        <td><strong>Injection</strong></td>
        <td>SQL injection, XSS, command injection, LDAP injection. Input user disisipkan langsung ke query/command.</td>
        <td>Parameterized queries, input validation, output encoding, WAF</td>
    </tr>
    <tr>
        <td><span class="badge badge-orange">A04</span></td>
        <td><strong>Insecure Design</strong></td>
        <td>Kelemahan desain, bukan implementasi. Tidak ada threat modeling, business logic flaws.</td>
        <td>Threat modeling (STRIDE), secure design patterns, abuse case analysis</td>
    </tr>
    <tr>
        <td><span class="badge badge-yellow">A05</span></td>
        <td><strong>Security Misconfiguration</strong></td>
        <td>Default credentials, unnecessary features enabled, verbose error messages, missing security headers.</td>
        <td>Hardening guide, automated scanning, remove defaults, minimal install</td>
    </tr>
    <tr>
        <td><span class="badge badge-yellow">A06</span></td>
        <td><strong>Vulnerable & Outdated Components</strong></td>
        <td>Library/framework dengan kerentanan yang diketahui. Supply chain attack.</td>
        <td>SCA tools (Snyk, Dependabot), dependency scanning, regular updates</td>
    </tr>
    <tr>
        <td><span class="badge badge-blue">A07</span></td>
        <td><strong>Identification & Authentication Failures</strong></td>
        <td>Weak passwords, credential stuffing, session fixation, no MFA.</td>
        <td>MFA, strong password policy, rate limiting, secure session management</td>
    </tr>
    <tr>
        <td><span class="badge badge-blue">A08</span></td>
        <td><strong>Software & Data Integrity Failures</strong></td>
        <td>Unsigned updates, insecure CI/CD, deserialization attack.</td>
        <td>Digital signatures, verified sources, integrity checks, secure CI/CD</td>
    </tr>
    <tr>
        <td><span class="badge badge-purple">A09</span></td>
        <td><strong>Security Logging & Monitoring Failures</strong></td>
        <td>Tidak ada logging, tidak ada alerting, log tidak dipantau.</td>
        <td>Centralized logging (ELK/SIEM), real-time alerting, incident response plan</td>
    </tr>
    <tr>
        <td><span class="badge badge-purple">A10</span></td>
        <td><strong>Server-Side Request Forgery (SSRF)</strong></td>
        <td>Server melakukan request ke URL yang dimanipulasi attacker. Bisa akses internal service.</td>
        <td>URL allowlist, network segmentation, disable unnecessary protocols</td>
    </tr>
    </table>
    </div>
</div>

<!-- ==================== 9. SSDLC ==================== -->
<h2 class="animate-in">9. SSDLC (Secure Software Development Lifecycle)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Keamanan di Setiap Fase Pengembangan</h3>
    <p>SSDLC mengintegrasikan keamanan ke dalam <strong>setiap tahap</strong> software development lifecycle, bukan hanya ditambahkan di akhir (shift-left security).</p>

    <div class="pipeline">
        <div class="pipeline-stage">
            <div class="stage-title">Requirements</div>
            <div class="stage-desc">Security requirements, compliance needs, risk assessment</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Design</div>
            <div class="stage-desc">Threat modeling (STRIDE), secure architecture, attack surface analysis</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Implementation</div>
            <div class="stage-desc">Secure coding standards, code review, SAST scanning</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Testing</div>
            <div class="stage-desc">DAST, IAST, penetration testing, fuzzing</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Deployment</div>
            <div class="stage-desc">Hardening, secrets management, infrastructure as code security</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Monitoring</div>
            <div class="stage-desc">SIEM, SOC, incident response, vulnerability management</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Threat Modeling (STRIDE)</h3>
    <p>STRIDE adalah framework dari Microsoft untuk mengidentifikasi ancaman keamanan pada tahap desain.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Huruf</th><th>Ancaman</th><th>Contoh</th><th>Mitigasi</th></tr>
    <tr><td><span class="badge badge-red">S</span></td><td><strong>Spoofing</strong></td><td>Memalsukan identitas user/service</td><td>Autentikasi kuat (MFA, mTLS)</td></tr>
    <tr><td><span class="badge badge-orange">T</span></td><td><strong>Tampering</strong></td><td>Mengubah data dalam transit/rest</td><td>Digital signature, HMAC, integrity checks</td></tr>
    <tr><td><span class="badge badge-yellow">R</span></td><td><strong>Repudiation</strong></td><td>Menyangkal telah melakukan aksi</td><td>Audit logging, digital signatures</td></tr>
    <tr><td><span class="badge badge-blue">I</span></td><td><strong>Information Disclosure</strong></td><td>Kebocoran data sensitif</td><td>Enkripsi, access control, data masking</td></tr>
    <tr><td><span class="badge badge-purple">D</span></td><td><strong>Denial of Service</strong></td><td>Membuat service tidak tersedia</td><td>Rate limiting, CDN, auto-scaling</td></tr>
    <tr><td><span class="badge badge-green">E</span></td><td><strong>Elevation of Privilege</strong></td><td>Mendapat hak akses lebih tinggi</td><td>Least privilege, input validation, sandboxing</td></tr>
    </table>
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h4><span class="badge badge-blue">Security Requirements</span></h4>
        <ul>
            <li>Identifikasi data sensitif (PII, financial, health)</li>
            <li>Tentukan compliance (GDPR, PCI DSS, HIPAA, UU PDP)</li>
            <li>Definisikan security use cases dan abuse cases</li>
            <li>Risk assessment dan prioritas</li>
        </ul>
    </div>
    <div class="card">
        <h4><span class="badge badge-green">Secure Coding Practices</span></h4>
        <ul>
            <li>Input validation (whitelist approach)</li>
            <li>Output encoding (context-dependent)</li>
            <li>Parameterized queries (no string concat)</li>
            <li>Proper error handling (no stack trace ke user)</li>
            <li>Principle of least privilege</li>
            <li>Defense in depth</li>
        </ul>
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h4><span class="badge badge-orange">Security Testing</span></h4>
        <ul>
            <li><strong>SAST</strong> (Static Analysis): SonarQube, Semgrep, CodeQL &mdash; scan source code</li>
            <li><strong>DAST</strong> (Dynamic Analysis): OWASP ZAP, Burp Suite &mdash; test running app</li>
            <li><strong>IAST</strong> (Interactive): Contrast Security &mdash; agent di runtime</li>
            <li><strong>SCA</strong> (Software Composition): Snyk, Dependabot &mdash; scan dependencies</li>
            <li><strong>Penetration Testing</strong>: Manual testing oleh security expert</li>
            <li><strong>Fuzzing</strong>: AFL, libFuzzer &mdash; input acak untuk temukan crash</li>
        </ul>
    </div>
    <div class="card">
        <h4><span class="badge badge-purple">Deployment Security</span></h4>
        <ul>
            <li><strong>Secrets Management:</strong> HashiCorp Vault, AWS Secrets Manager (bukan hardcode!)</li>
            <li><strong>Container Security:</strong> Image scanning (Trivy), minimal base image, non-root</li>
            <li><strong>Infrastructure as Code:</strong> Terraform/Pulumi security scanning (Checkov, tfsec)</li>
            <li><strong>Network:</strong> Firewall rules, network segmentation, WAF</li>
            <li><strong>Monitoring:</strong> SIEM (Splunk, ELK), runtime protection (Falco)</li>
            <li><strong>Incident Response:</strong> Playbook, communication plan, post-mortem</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3>Ringkasan: Keamanan adalah Proses Berkelanjutan</h3>
    <div class="flow-diagram">
        <div class="flow-node">Identifikasi Ancaman</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Implementasi Kontrol</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Monitoring & Deteksi</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Respons Insiden</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node highlight">Pelajaran & Perbaikan</div>
        <div class="flow-arrow">&rarr; Kembali ke awal</div>
    </div>
    <div class="success-box"><strong>Prinsip utama:</strong> Defense in depth, least privilege, fail secure, zero trust, shift-left security. Keamanan bukan fitur &mdash; keamanan adalah <strong>proses</strong> yang harus terintegrasi di setiap lapisan.</div>
</div>
`;

// ====================== SECURITY ANIMATIONS ======================
function initSecurityAnimations() {
    const dpr = window.devicePixelRatio || 1;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const textColor2 = isDark ? '#94a3b8' : '#475569';
    const bgColor = isDark ? '#1e293b' : '#ffffff';
    const cardBg = isDark ? '#273549' : '#f8fafc';
    const accent = '#38bdf8';
    const green = '#34d399';
    const red = '#f87171';
    const yellow = '#fbbf24';
    const purple = '#a78bfa';
    const orange = '#fb923c';

    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr; c.height = h * dpr;
        c.style.width = w + 'px'; c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }

    // ========== 1. ENCRYPTION ANIMATION ==========
    (function encryptionAnim() {
        const cv = setupCanvas('encrypt-anim-canvas', 800, 300);
        if (!cv) return;
        const { ctx, w, h } = cv;
        let animFrame = null;
        let step = 0;
        let progress = 0;
        let running = false;

        const plaintext = 'Hello World!';
        const key = 'AES-256-KEY';
        const cipherHex = 'a3f7 b2c1 9e8d 4f6a 1c0b 5d7e 2f9a 8b3c';
        const decrypted = 'Hello World!';

        function drawRoundedRect(x, y, rw, rh, r, fill, stroke) {
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
            if (fill) { ctx.fillStyle = fill; ctx.fill(); }
            if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
        }

        function drawBox(x, y, bw, bh, label, sublabel, color, glow) {
            if (glow) {
                ctx.shadowColor = color;
                ctx.shadowBlur = 15;
            }
            drawRoundedRect(x, y, bw, bh, 10, isDark ? 'rgba(30,41,59,0.9)' : 'rgba(248,250,252,0.9)', color);
            ctx.shadowBlur = 0;
            ctx.fillStyle = color;
            ctx.font = 'bold 13px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillText(label, x + bw / 2, y + bh / 2 - 6);
            if (sublabel) {
                ctx.fillStyle = textColor2;
                ctx.font = '11px "JetBrains Mono", monospace';
                ctx.fillText(sublabel, x + bw / 2, y + bh / 2 + 12);
            }
        }

        function drawArrow(x1, y1, x2, y2, color, prog) {
            const dx = x2 - x1, dy = y2 - y1;
            const ex = x1 + dx * prog, ey = y1 + dy * prog;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(ex, ey);
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.stroke();
            if (prog >= 1) {
                const angle = Math.atan2(dy, dx);
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex - 10 * Math.cos(angle - 0.4), ey - 10 * Math.sin(angle - 0.4));
                ctx.lineTo(ex - 10 * Math.cos(angle + 0.4), ey - 10 * Math.sin(angle + 0.4));
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        function drawParticles(x1, y1, x2, y2, prog, color) {
            for (let i = 0; i < 6; i++) {
                const p = (prog + i * 0.15) % 1;
                const px = x1 + (x2 - x1) * p;
                const py = y1 + (x2 - x1 !== 0 ? (y2 - y1) * p : (y2 - y1) * p) + Math.sin(p * Math.PI * 4) * 8;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = 1 - p;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            // Title
            ctx.fillStyle = textColor;
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Proses Enkripsi & Dekripsi (AES-256-GCM)', w / 2, 25);

            const boxW = 130, boxH = 60;
            const y1 = 70, y2 = 180;
            const positions = [
                { x: 30, y: y1, label: 'Plaintext', sub: '"' + plaintext + '"', color: accent },
                { x: 200, y: y1, label: 'Kunci (Key)', sub: key, color: yellow },
                { x: 400, y: y1, label: 'AES Encrypt', sub: 'Block Cipher', color: orange },
                { x: 600, y: y1, label: 'Ciphertext', sub: cipherHex.slice(0, 18) + '...', color: red },
                { x: 600, y: y2, label: 'Ciphertext', sub: cipherHex.slice(0, 18) + '...', color: red },
                { x: 400, y: y2, label: 'AES Decrypt', sub: 'Block Cipher', color: orange },
                { x: 200, y: y2, label: 'Kunci (Key)', sub: key, color: yellow },
                { x: 30, y: y2, label: 'Plaintext', sub: '"' + decrypted + '"', color: green },
            ];

            // Draw all visible boxes based on step
            const stepsToShow = [
                [0],
                [0, 1],
                [0, 1, 2],
                [0, 1, 2, 3],
                [0, 1, 2, 3, 4],
                [0, 1, 2, 3, 4, 5, 6],
                [0, 1, 2, 3, 4, 5, 6, 7],
            ];
            const visibleStep = Math.min(step, stepsToShow.length - 1);
            const visible = stepsToShow[visibleStep];

            visible.forEach(idx => {
                const p = positions[idx];
                const glow = (idx === visible[visible.length - 1] && progress < 1);
                drawBox(p.x, p.y, boxW, boxH, p.label, p.sub, p.color, glow);
            });

            // Draw arrows based on step
            if (step >= 1) drawArrow(30 + boxW, y1 + boxH / 2, 200, y1 + boxH / 2, textColor2, step >= 2 ? 1 : progress);
            if (step >= 2) {
                drawArrow(200 + boxW, y1 + boxH / 2, 400, y1 + boxH / 2, textColor2, step >= 3 ? 1 : progress);
                drawArrow(200 + boxW / 2, y1 + boxH, 400 + boxW / 2, y1, yellow, step >= 3 ? 1 : progress);
            }
            if (step >= 3) {
                drawArrow(400 + boxW, y1 + boxH / 2, 600, y1 + boxH / 2, textColor2, step >= 4 ? 1 : progress);
                if (progress > 0 || step > 3) drawParticles(400 + boxW, y1 + boxH / 2, 600, y1 + boxH / 2, progress, red);
            }
            if (step >= 4) drawArrow(600 + boxW / 2, y1 + boxH, 600 + boxW / 2, y2, textColor2, step >= 5 ? 1 : progress);
            if (step >= 5) {
                drawArrow(600, y2 + boxH / 2, 400 + boxW, y2 + boxH / 2, textColor2, step >= 6 ? 1 : progress);
                drawArrow(200 + boxW / 2, y2, 400 + boxW / 2, y2 + boxH, yellow, step >= 6 ? 1 : progress);
            }
            if (step >= 6) {
                drawArrow(400, y2 + boxH / 2, 30 + boxW, y2 + boxH / 2, textColor2, 1);
                drawParticles(400, y2 + boxH / 2, 30 + boxW, y2 + boxH / 2, progress, green);
            }

            // Step label
            const labels = [
                'Langkah 1: Plaintext siap',
                'Langkah 2: Kunci enkripsi disiapkan',
                'Langkah 3: Proses enkripsi AES...',
                'Langkah 4: Ciphertext dihasilkan!',
                'Langkah 5: Ciphertext dikirim ke penerima',
                'Langkah 6: Dekripsi dengan kunci yang sama',
                'Langkah 7: Plaintext berhasil dipulihkan!'
            ];
            ctx.fillStyle = textColor2;
            ctx.font = '13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labels[Math.min(step, labels.length - 1)], w / 2, h - 15);
        }

        function animate() {
            if (!running) return;
            progress += 0.02;
            if (progress >= 1) {
                progress = 0;
                step++;
                if (step > 6) { running = false; step = 6; progress = 1; }
            }
            draw();
            if (running) animFrame = requestAnimationFrame(animate);
        }

        const runBtn = document.getElementById('encrypt-run');
        const resetBtn = document.getElementById('encrypt-reset');
        if (runBtn) runBtn.addEventListener('click', () => {
            if (running) return;
            running = true;
            animate();
        });
        if (resetBtn) resetBtn.addEventListener('click', () => {
            running = false;
            if (animFrame) cancelAnimationFrame(animFrame);
            step = 0; progress = 0;
            draw();
        });
        draw();
    })();

    // ========== 2. HASH AVALANCHE ANIMATION ==========
    (function hashAnim() {
        const cv = setupCanvas('hash-anim-canvas', 800, 300);
        if (!cv) return;
        const { ctx, w, h } = cv;
        let animFrame = null;
        let step = 0;
        let progress = 0;
        let running = false;

        const input1 = 'Hello';
        const input2 = 'Hellp';  // 1 char difference
        const hash1bits = '01101010110010100011110111001010101100001110010101001111011010';
        const hash2bits = '11010100001101011100001000110101010011110001101010110000100101';

        function simpleHash(str) {
            let h = 0;
            for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
            return Math.abs(h).toString(16).padStart(8, '0');
        }

        const hex1 = simpleHash(input1);
        const hex2 = simpleHash(input2);

        function drawBitGrid(x, y, bits, highlight, prog) {
            const cellSize = 10;
            const cols = 20;
            for (let i = 0; i < bits.length && i < 60; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const px = x + col * (cellSize + 2);
                const py = y + row * (cellSize + 2);
                const shown = i < prog * bits.length;
                if (!shown) continue;
                const isOne = bits[i] === '1';
                let color;
                if (highlight && i < hash1bits.length && bits[i] !== hash1bits[i]) {
                    color = red;
                } else {
                    color = isOne ? accent : (isDark ? '#334155' : '#cbd5e1');
                }
                ctx.fillStyle = color;
                ctx.fillRect(px, py, cellSize, cellSize);
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            ctx.fillStyle = textColor;
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Hash & Avalanche Effect', w / 2, 25);

            const leftX = 40;
            const rightX = 420;

            // Input 1
            ctx.fillStyle = accent;
            ctx.font = 'bold 14px "JetBrains Mono", monospace';
            ctx.textAlign = 'left';
            ctx.fillText('Input 1: "' + input1 + '"', leftX, 55);

            // Input 2
            ctx.fillStyle = orange;
            ctx.fillText('Input 2: "' + input2 + '"  (1 karakter beda!)', rightX, 55);

            if (step >= 1) {
                // Hash function arrows
                ctx.fillStyle = textColor2;
                ctx.font = '12px Inter, sans-serif';
                ctx.fillText('SHA-256 hash:', leftX, 80);
                ctx.fillText('SHA-256 hash:', rightX, 80);

                // Hex output
                ctx.font = '13px "JetBrains Mono", monospace';
                ctx.fillStyle = accent;
                const h1shown = hex1.slice(0, Math.floor(progress * hex1.length * (step >= 2 ? 10 : 1)));
                ctx.fillText(step >= 2 ? 'a591a6d4...' : h1shown + '...', leftX, 100);
                ctx.fillStyle = orange;
                const h2shown = hex2.slice(0, Math.floor(progress * hex2.length * (step >= 2 ? 10 : 1)));
                ctx.fillText(step >= 2 ? 'f7c3b21e...' : h2shown + '...', rightX, 100);
            }

            if (step >= 2) {
                // Bit representation
                ctx.fillStyle = textColor2;
                ctx.font = '12px Inter, sans-serif';
                ctx.fillText('Representasi bit (60 bit pertama):', leftX, 130);
                ctx.fillText('Representasi bit (60 bit pertama):', rightX, 130);

                drawBitGrid(leftX, 142, hash1bits, false, step >= 3 ? 1 : progress);
                drawBitGrid(rightX, 142, hash2bits, step >= 3, step >= 3 ? 1 : progress);
            }

            if (step >= 3) {
                // Count differences
                let diffCount = 0;
                for (let i = 0; i < hash1bits.length && i < hash2bits.length; i++) {
                    if (hash1bits[i] !== hash2bits[i]) diffCount++;
                }
                const pct = Math.round((diffCount / hash1bits.length) * 100);

                ctx.fillStyle = red;
                ctx.font = 'bold 16px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Bit yang berubah: ' + diffCount + '/' + hash1bits.length + ' (' + pct + '%)', w / 2, 220);
                ctx.fillStyle = textColor2;
                ctx.font = '13px Inter, sans-serif';
                ctx.fillText('Merah = bit yang berbeda. Perubahan 1 karakter input mengubah ~50% bit output!', w / 2, 245);
                ctx.fillText('Ini disebut "Avalanche Effect" - properti penting dari hash function yang baik.', w / 2, 265);
            }

            const labels = [
                'Siap: dua input yang hampir identik...',
                'Menghitung hash dari kedua input...',
                'Membandingkan representasi bit...',
                'Avalanche Effect: ~50% bit berubah meskipun input hanya beda 1 karakter!'
            ];
            ctx.fillStyle = textColor2;
            ctx.font = '12px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labels[Math.min(step, labels.length - 1)], w / 2, h - 10);
        }

        function animate() {
            if (!running) return;
            progress += 0.025;
            if (progress >= 1) {
                progress = 0;
                step++;
                if (step > 3) { running = false; step = 3; progress = 1; }
            }
            draw();
            if (running) animFrame = requestAnimationFrame(animate);
        }

        const runBtn = document.getElementById('hash-run');
        const resetBtn = document.getElementById('hash-reset');
        if (runBtn) runBtn.addEventListener('click', () => {
            if (running) return;
            running = true;
            animate();
        });
        if (resetBtn) resetBtn.addEventListener('click', () => {
            running = false;
            if (animFrame) cancelAnimationFrame(animFrame);
            step = 0; progress = 0;
            draw();
        });
        draw();
    })();

    // ========== 3. TLS HANDSHAKE ANIMATION ==========
    (function tlsAnim() {
        const cv = setupCanvas('tls-anim-canvas', 800, 400);
        if (!cv) return;
        const { ctx, w, h } = cv;
        let animFrame = null;
        let step = -1;
        let progress = 0;
        let running = false;

        const clientX = 100;
        const serverX = 700;
        const colW = 120;

        const messages = [
            { from: 'client', label: 'ClientHello', detail: 'Cipher suites, TLS version, Client Random', color: accent },
            { from: 'server', label: 'ServerHello', detail: 'Chosen cipher, Server Random, Session ID', color: green },
            { from: 'server', label: 'Certificate', detail: 'X.509 server certificate + chain', color: yellow },
            { from: 'server', label: 'ServerKeyExchange', detail: 'ECDH params, signed with private key', color: orange },
            { from: 'client', label: 'ClientKeyExchange', detail: 'ECDH public value, pre-master secret', color: purple },
            { from: 'client', label: 'ChangeCipherSpec', detail: 'Beralih ke enkripsi!', color: accent },
            { from: 'server', label: 'ChangeCipherSpec + Finished', detail: 'Server juga beralih ke enkripsi', color: green },
            { from: 'both', label: 'Encrypted Data!', detail: 'Komunikasi aman dengan symmetric key', color: '#34d399' },
        ];

        function drawEntity(x, y, label, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x - colW / 2, y, colW, 45);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 15px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, x, y + 28);
            // Vertical line
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.moveTo(x, y + 45);
            ctx.lineTo(x, h - 20);
            ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.3)' : 'rgba(71,85,105,0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);
        }

        function drawMessage(idx, prog) {
            const msg = messages[idx];
            const yBase = 90 + idx * 36;
            const fromX = msg.from === 'client' ? clientX : serverX;
            const toX = msg.from === 'client' ? serverX : clientX;

            if (msg.from === 'both') {
                // Double arrow
                const midY = yBase;
                ctx.beginPath();
                ctx.moveTo(clientX, midY);
                ctx.lineTo(clientX + (serverX - clientX) * prog, midY);
                ctx.strokeStyle = msg.color;
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(serverX, midY);
                ctx.lineTo(serverX - (serverX - clientX) * prog, midY);
                ctx.stroke();

                if (prog >= 1) {
                    ctx.fillStyle = msg.color;
                    ctx.font = 'bold 13px "JetBrains Mono", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(msg.label, (clientX + serverX) / 2, midY - 8);
                    ctx.fillStyle = textColor2;
                    ctx.font = '10px Inter, sans-serif';
                    ctx.fillText(msg.detail, (clientX + serverX) / 2, midY + 14);
                }

                // Lock icon simulation
                if (prog >= 1) {
                    ctx.fillStyle = green;
                    ctx.font = 'bold 18px serif';
                    ctx.fillText('\u{1F512}', (clientX + serverX) / 2, midY + 34);
                }
                return;
            }

            const endX = fromX + (toX - fromX) * prog;
            ctx.beginPath();
            ctx.moveTo(fromX, yBase);
            ctx.lineTo(endX, yBase);
            ctx.strokeStyle = msg.color;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Arrowhead
            if (prog >= 1) {
                const dir = toX > fromX ? 1 : -1;
                ctx.beginPath();
                ctx.moveTo(toX, yBase);
                ctx.lineTo(toX - 10 * dir, yBase - 5);
                ctx.lineTo(toX - 10 * dir, yBase + 5);
                ctx.closePath();
                ctx.fillStyle = msg.color;
                ctx.fill();
            }

            // Label
            const labelX = (fromX + toX) / 2;
            ctx.fillStyle = msg.color;
            ctx.font = 'bold 11px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillText(msg.label, labelX, yBase - 7);

            if (prog >= 1) {
                ctx.fillStyle = textColor2;
                ctx.font = '9px Inter, sans-serif';
                ctx.fillText(msg.detail, labelX, yBase + 13);
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            ctx.fillStyle = textColor;
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('TLS 1.2 Handshake - Step by Step', w / 2, 25);

            drawEntity(clientX, 38, 'Client', accent);
            drawEntity(serverX, 38, 'Server', green);

            for (let i = 0; i <= step; i++) {
                const p = (i < step) ? 1 : progress;
                drawMessage(i, p);
            }

            // Step description
            const desc = step >= 0 && step < messages.length
                ? 'Step ' + (step + 1) + '/' + messages.length + ': ' + messages[step].label + ' - ' + messages[step].detail
                : 'Klik "Jalankan" untuk memulai TLS handshake';
            ctx.fillStyle = textColor2;
            ctx.font = '12px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(desc, w / 2, h - 10);
        }

        function animate() {
            if (!running) return;
            progress += 0.03;
            if (progress >= 1) {
                progress = 0;
                step++;
                if (step >= messages.length) { running = false; step = messages.length - 1; progress = 1; }
            }
            draw();
            if (running) animFrame = requestAnimationFrame(animate);
        }

        const runBtn = document.getElementById('tls-run');
        const resetBtn = document.getElementById('tls-reset');
        if (runBtn) runBtn.addEventListener('click', () => {
            if (running) return;
            if (step >= messages.length - 1 && progress >= 1) { step = -1; progress = 0; }
            step++;
            running = true;
            animate();
        });
        if (resetBtn) resetBtn.addEventListener('click', () => {
            running = false;
            if (animFrame) cancelAnimationFrame(animFrame);
            step = -1; progress = 0;
            draw();
        });
        draw();
    })();
}
