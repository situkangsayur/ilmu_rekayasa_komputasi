// ====================== ARCHITECTURE (ENHANCED) ======================
// Overrides the basic architecture section with comprehensive coverage
// Covers: Monolith, Microservices, Message Queues, DevSecOps, HashiCorp Stack

sections['architecture'] = () => `
<h1 class="section-title animate-in">Software Architecture & DevSecOps</h1>
<p class="section-subtitle animate-in">Monolith, Microservices, Message Queues, DevSecOps Pipeline, dan HashiCorp Stack &mdash; panduan lengkap arsitektur modern</p>

<!-- ==================== EVOLUSI ARSITEKTUR ==================== -->
<h2 class="animate-in">Evolusi Arsitektur Software</h2>

<div class="flow-diagram animate-in">
    <div class="flow-node">Monolith</div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-node">3-Tier</div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-node">SOA</div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-node highlight">Microservices</div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-node">Serverless</div>
</div>

<div class="info-box animate-in">
    <strong>Mengapa arsitektur penting?</strong> Arsitektur software menentukan bagaimana sistem di-deploy, di-scale, dan di-maintain. Pilihan arsitektur yang tepat di awal proyek akan menghemat biaya dan waktu pengembangan secara signifikan. Tidak ada arsitektur yang "terbaik" &mdash; semuanya bergantung pada konteks: ukuran tim, kompleksitas domain, dan kebutuhan skalabilitas.
</div>

<!-- ==================== 1. MONOLITH ARCHITECTURE ==================== -->
<h2 class="animate-in">1. Arsitektur Monolith</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa itu Monolith?</h3>
    <p>Arsitektur monolith adalah pendekatan di mana <strong>seluruh komponen aplikasi</strong> &mdash; UI, business logic, data access layer, dan background jobs &mdash; dikemas dalam <strong>satu deployment unit tunggal</strong>. Semua modul berbagi proses yang sama, memory yang sama, dan database yang sama.</p>

    <div class="layer-diagram">
        <div class="layer-item" style="background:rgba(56,189,248,0.12)">
            <div class="layer-num" style="background:var(--accent);color:#fff">1</div>
            <div class="layer-info">
                <strong style="color:var(--accent)">Presentation Layer</strong>
                <span>HTML/CSS/JS, Template engine, REST controllers &mdash; semua dalam satu codebase</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,191,36,0.12)">
            <div class="layer-num" style="background:var(--yellow);color:#000">2</div>
            <div class="layer-info">
                <strong style="color:var(--yellow)">Business Logic Layer</strong>
                <span>Service classes, domain models, validation &mdash; coupled langsung dengan layer lain</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.12)">
            <div class="layer-num" style="background:var(--green);color:#fff">3</div>
            <div class="layer-info">
                <strong style="color:var(--green)">Data Access Layer</strong>
                <span>ORM, repositories, database queries &mdash; satu shared database</span>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Kapan Menggunakan Monolith?</h3>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Startup tahap awal</strong> &mdash; Tim kecil (2-5 developer), perlu iterasi cepat, belum jelas domain boundaries</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>MVP / Proof of Concept</strong> &mdash; Validasi ide bisnis sebelum investasi infrastruktur kompleks</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Domain yang sudah well-defined</strong> &mdash; Aplikasi internal perusahaan dengan scope terbatas</div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text"><strong>Tim tanpa expertise DevOps</strong> &mdash; Tidak perlu manage infrastruktur distributed system</div>
        </div>
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card" style="border-color:var(--green)">
        <h4 style="color:var(--green)">Keuntungan Monolith</h4>
        <ul>
            <li><strong>Simple deployment</strong> &mdash; Satu artifact (JAR/WAR/binary), satu proses deploy</li>
            <li><strong>Mudah di-debug</strong> &mdash; Seluruh stack trace dalam satu proses, step-through debugging</li>
            <li><strong>Performa in-process</strong> &mdash; Tidak ada network latency antar komponen, function call langsung</li>
            <li><strong>Konsistensi data</strong> &mdash; ACID transaction di satu database, tidak perlu distributed transaction</li>
            <li><strong>Simple testing</strong> &mdash; End-to-end test tanpa mock service eksternal</li>
            <li><strong>Biaya operasional rendah</strong> &mdash; Satu server, satu database, monitoring sederhana</li>
        </ul>
    </div>
    <div class="card" style="border-color:var(--red)">
        <h4 style="color:var(--red)">Kekurangan Monolith</h4>
        <ul>
            <li><strong>Scaling tidak efisien</strong> &mdash; Harus scale seluruh aplikasi meskipun hanya 1 modul yang butuh</li>
            <li><strong>Deployment berisiko</strong> &mdash; Satu perubahan kecil = deploy ulang seluruh aplikasi</li>
            <li><strong>Tech stack lock-in</strong> &mdash; Sulit mengganti bahasa/framework untuk modul tertentu</li>
            <li><strong>Team coupling</strong> &mdash; Tim harus koordinasi ketat, merge conflict sering terjadi</li>
            <li><strong>Build time lama</strong> &mdash; Seiring codebase membesar, CI/CD semakin lambat</li>
            <li><strong>Single point of failure</strong> &mdash; Satu bug bisa crash seluruh aplikasi</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Modular Monolith &mdash; Kompromi Terbaik?</h3>
    <p>Pendekatan modern di mana monolith tetap di-deploy sebagai satu unit, namun secara internal terorganisir dalam <strong>modul-modul terpisah</strong> dengan batas yang jelas. Setiap modul punya API internal sendiri dan bisa di-refactor menjadi microservice nantinya.</p>
    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--accent3)">Module: User</div>
        <div class="flow-arrow">&harr;</div>
        <div class="flow-node" style="border-color:var(--accent3)">Module: Order</div>
        <div class="flow-arrow">&harr;</div>
        <div class="flow-node" style="border-color:var(--accent3)">Module: Payment</div>
        <div class="flow-arrow">&harr;</div>
        <div class="flow-node" style="border-color:var(--accent3)">Module: Inventory</div>
    </div>
    <p style="margin-top:0.5rem"><span class="badge-purple">Tip</span> Gunakan modular monolith sebagai langkah pertama sebelum migrasi ke microservices. Ini memudahkan decomposition nantinya.</p>
</div>

<!-- ==================== 2. MICROSERVICES ==================== -->
<h2 class="animate-in">2. Arsitektur Microservices</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa itu Microservices?</h3>
    <p>Microservices adalah gaya arsitektur di mana aplikasi dibangun sebagai <strong>kumpulan layanan kecil yang independen</strong>, masing-masing berjalan dalam proses sendiri dan berkomunikasi melalui mekanisme ringan (biasanya HTTP/REST atau messaging). Setiap service:</p>
    <ul>
        <li>Memiliki <strong>database sendiri</strong> (database per service pattern)</li>
        <li>Bisa di-<strong>deploy secara independen</strong></li>
        <li>Dikembangkan oleh <strong>tim kecil</strong> (two-pizza team)</li>
        <li>Bisa menggunakan <strong>tech stack berbeda</strong> (polyglot)</li>
        <li>Fokus pada <strong>satu bounded context</strong> (DDD)</li>
    </ul>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Service Decomposition &mdash; Cara Memecah Monolith</h3>
    <p>Berdasarkan konsep NGINX "Building and Deploying Microservices", ada beberapa strategi dekomposisi:</p>

    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge-blue">1</span> By Business Capability</h4>
            <p>Pecah berdasarkan fungsi bisnis: <em>User Management</em>, <em>Order Processing</em>, <em>Payment</em>, <em>Notification</em>. Setiap service merepresentasikan capability bisnis yang kohesif.</p>
        </div>
        <div class="card">
            <h4><span class="badge-green">2</span> By Subdomain (DDD)</h4>
            <p>Gunakan Domain-Driven Design: identifikasi <em>bounded context</em>, pisahkan core domain, supporting domain, dan generic subdomain menjadi service terpisah.</p>
        </div>
        <div class="card">
            <h4><span class="badge-orange">3</span> Strangler Fig Pattern</h4>
            <p>Migrasi bertahap dari monolith: buat service baru untuk fitur baru, perlahan pindahkan fitur lama satu per satu, matikan monolith ketika kosong.</p>
        </div>
    </div>
</div>

<!-- Communication Patterns -->
<div class="card animate-in">
    <h3 style="color:var(--green)">Pola Komunikasi: Synchronous vs Asynchronous</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="comm-sync">Synchronous</button>
        <button class="tab-btn" data-tab="comm-async">Asynchronous</button>
        <button class="tab-btn" data-tab="comm-compare">Perbandingan</button>
    </div>

    <div class="tab-content active" data-tab-content="comm-sync">
        <h4>Komunikasi Synchronous (Request-Response)</h4>
        <p>Client mengirim request dan <strong>menunggu response</strong> sebelum melanjutkan. Cocok untuk operasi yang membutuhkan jawaban langsung.</p>

        <div class="card-grid">
            <div class="card">
                <h4 style="color:var(--accent)">REST (HTTP/JSON)</h4>
                <ul>
                    <li>Standard de-facto untuk API publik</li>
                    <li>Human-readable (JSON)</li>
                    <li>Stateless, cacheable</li>
                    <li>Overhead: HTTP headers, serialization JSON</li>
                    <li>Latency lebih tinggi dibanding binary protocol</li>
                </ul>
                <div class="code-block"><span class="cm">// REST call antar service</span>
<span class="fn">GET</span> /api/users/123 <span class="str">HTTP/1.1</span>
<span class="kw">Host:</span> user-service:8080
<span class="kw">Accept:</span> <span class="str">application/json</span></div>
            </div>
            <div class="card">
                <h4 style="color:var(--accent)">gRPC (HTTP/2 + Protobuf)</h4>
                <ul>
                    <li>Binary protocol &mdash; lebih cepat & compact</li>
                    <li>Contract-first (proto files)</li>
                    <li>Bi-directional streaming</li>
                    <li>Code generation otomatis</li>
                    <li>Ideal untuk komunikasi internal antar service</li>
                </ul>
                <div class="code-block"><span class="cm">// Proto definition</span>
<span class="kw">service</span> <span class="type">UserService</span> {
  <span class="kw">rpc</span> <span class="fn">GetUser</span>(<span class="type">UserRequest</span>) <span class="kw">returns</span> (<span class="type">UserResponse</span>);
  <span class="kw">rpc</span> <span class="fn">ListUsers</span>(<span class="type">ListRequest</span>) <span class="kw">returns</span> (<span class="kw">stream</span> <span class="type">User</span>);
}</div>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="comm-async">
        <h4>Komunikasi Asynchronous (Message-Based)</h4>
        <p>Producer mengirim pesan ke broker dan <strong>tidak menunggu response</strong>. Consumer memproses pesan secara independen. Meningkatkan resilience dan decoupling.</p>

        <div class="flow-diagram">
            <div class="flow-node" style="border-color:var(--green)">Producer<br><small>Order Service</small></div>
            <div class="flow-arrow">&rarr; publish</div>
            <div class="flow-node highlight">Message Broker<br><small>Kafka / RabbitMQ</small></div>
            <div class="flow-arrow">consume &rarr;</div>
            <div class="flow-node" style="border-color:var(--yellow)">Consumer<br><small>Notification Svc</small></div>
        </div>

        <div class="card-grid">
            <div class="card">
                <h4>Point-to-Point (Queue)</h4>
                <p>Satu pesan diproses oleh <strong>tepat satu consumer</strong>. Cocok untuk task distribution. Contoh: RabbitMQ queue.</p>
            </div>
            <div class="card">
                <h4>Publish-Subscribe (Topic)</h4>
                <p>Satu pesan diterima oleh <strong>semua subscriber</strong>. Cocok untuk event broadcasting. Contoh: Kafka topic.</p>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="comm-compare">
        <div class="table-wrapper">
            <table>
                <tr>
                    <th>Aspek</th>
                    <th>Synchronous (REST/gRPC)</th>
                    <th>Asynchronous (MQ)</th>
                </tr>
                <tr>
                    <td>Coupling</td>
                    <td>Temporal coupling (harus online)</td>
                    <td>Loose coupling (fire-and-forget)</td>
                </tr>
                <tr>
                    <td>Latency</td>
                    <td>Response langsung</td>
                    <td>Eventual (bisa delayed)</td>
                </tr>
                <tr>
                    <td>Error Handling</td>
                    <td>Retry + timeout langsung</td>
                    <td>Dead letter queue, retry policies</td>
                </tr>
                <tr>
                    <td>Scalability</td>
                    <td>Terbatas oleh downstream</td>
                    <td>Buffer burst traffic via queue</td>
                </tr>
                <tr>
                    <td>Debugging</td>
                    <td>Lebih mudah (request-response)</td>
                    <td>Lebih sulit (distributed tracing)</td>
                </tr>
                <tr>
                    <td>Use Case</td>
                    <td>Query data, validasi real-time</td>
                    <td>Notifikasi, event processing, ETL</td>
                </tr>
            </table>
        </div>
    </div>
</div>

<!-- API Gateway Pattern -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">API Gateway Pattern</h3>
    <p>API Gateway adalah <strong>single entry point</strong> untuk semua client request. Ia bertindak sebagai reverse proxy yang merutekan request ke service yang tepat, sekaligus menangani cross-cutting concerns.</p>

    <div class="flow-diagram">
        <div class="flow-node">Mobile App</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node highlight" style="border-color:var(--accent)">API Gateway<br><small>Kong / NGINX / Envoy</small></div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">User Svc</div>
    </div>
    <div class="flow-diagram">
        <div class="flow-node">Web App</div>
        <div class="flow-arrow">&nearr;</div>
        <div class="flow-node" style="visibility:hidden">_</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Order Svc</div>
    </div>

    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge-blue">Routing</span></h4>
            <p>Route request ke service yang sesuai berdasarkan path, header, atau method</p>
        </div>
        <div class="card">
            <h4><span class="badge-green">Auth</span></h4>
            <p>Sentralisasi autentikasi & otorisasi (JWT validation, OAuth2)</p>
        </div>
        <div class="card">
            <h4><span class="badge-orange">Rate Limiting</span></h4>
            <p>Proteksi backend dari traffic berlebihan, throttling per client</p>
        </div>
        <div class="card">
            <h4><span class="badge-purple">Load Balancing</span></h4>
            <p>Distribusi traffic ke multiple instance service</p>
        </div>
        <div class="card">
            <h4><span class="badge-yellow">Caching</span></h4>
            <p>Cache response untuk mengurangi beban backend</p>
        </div>
        <div class="card">
            <h4><span class="badge-red">Monitoring</span></h4>
            <p>Centralized logging, metrics, dan request tracing</p>
        </div>
    </div>
</div>

<!-- Service Discovery -->
<div class="card animate-in">
    <h3 style="color:var(--green)">Service Discovery</h3>
    <p>Dalam microservices, service instances bersifat dinamis (auto-scaling, restart, dll). <strong>Service discovery</strong> memungkinkan service menemukan lokasi (IP:port) service lain secara otomatis tanpa hardcode.</p>

    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--accent)">Client-Side Discovery</h4>
            <p>Client query registry langsung, lalu memilih instance sendiri (load balancing di client).</p>
            <div class="flow-diagram">
                <div class="flow-node">Client</div>
                <div class="flow-arrow">&rarr; query</div>
                <div class="flow-node highlight">Registry<br><small>Consul / Eureka</small></div>
                <div class="flow-arrow">IP:port &rarr;</div>
                <div class="flow-node">Service</div>
            </div>
            <p><span class="badge-green">Pro:</span> Fleksibel, custom LB. <span class="badge-red">Con:</span> Client harus implement discovery logic.</p>
        </div>
        <div class="card">
            <h4 style="color:var(--accent)">Server-Side Discovery</h4>
            <p>Request melalui load balancer/router yang query registry secara otomatis.</p>
            <div class="flow-diagram">
                <div class="flow-node">Client</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node highlight">Load Balancer</div>
                <div class="flow-arrow">&rarr; query &rarr;</div>
                <div class="flow-node">Registry</div>
            </div>
            <p><span class="badge-green">Pro:</span> Client sederhana. <span class="badge-red">Con:</span> LB jadi bottleneck potensial.</p>
        </div>
    </div>
</div>

<!-- Circuit Breaker -->
<div class="card animate-in">
    <h3 style="color:var(--red)">Circuit Breaker Pattern</h3>
    <p>Pattern untuk mencegah <strong>cascading failure</strong> di distributed system. Seperti circuit breaker listrik &mdash; memutus koneksi ketika downstream service bermasalah agar tidak membebani sistem keseluruhan.</p>

    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--green)">CLOSED<br><small>Normal flow</small></div>
        <div class="flow-arrow">failure threshold &rarr;</div>
        <div class="flow-node" style="border-color:var(--red)">OPEN<br><small>Fast fail, no call</small></div>
        <div class="flow-arrow">timeout &rarr;</div>
        <div class="flow-node" style="border-color:var(--yellow)">HALF-OPEN<br><small>Test with 1 call</small></div>
    </div>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num" style="background:var(--green)">1</div>
            <div class="step-text"><strong>CLOSED (Normal)</strong> &mdash; Request diteruskan ke downstream service. Counter melacak failure rate.</div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--red)">2</div>
            <div class="step-text"><strong>OPEN (Tripped)</strong> &mdash; Failure threshold terlampaui. Semua request langsung di-reject (fail fast) tanpa memanggil downstream. Menghemat resource dan mencegah cascading.</div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--yellow)">3</div>
            <div class="step-text"><strong>HALF-OPEN (Testing)</strong> &mdash; Setelah timeout, kirim satu request percobaan. Jika sukses &rarr; kembali ke CLOSED. Jika gagal &rarr; kembali ke OPEN.</div>
        </div>
    </div>

    <div class="info-box">
        <strong>Tools populer:</strong> Resilience4j (Java), Hystrix (legacy), Polly (.NET), gobreaker (Go). Di Kubernetes, Istio service mesh bisa handle circuit breaking di level infrastruktur.
    </div>
</div>

<!-- Saga Pattern -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)">Saga Pattern &mdash; Distributed Transactions</h3>
    <p>Dalam microservices, kita tidak bisa menggunakan ACID transaction tradisional karena setiap service punya database sendiri. <strong>Saga pattern</strong> mengelola transaksi terdistribusi sebagai serangkaian transaksi lokal, di mana setiap langkah memiliki <em>compensating transaction</em> untuk rollback.</p>

    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--accent)">Choreography-Based Saga</h4>
            <p>Setiap service publish event setelah menyelesaikan transaksi lokal. Service berikutnya listen event tersebut.</p>
            <div class="pipeline">
                <div class="pipeline-stage" style="border-color:var(--green)">
                    <div class="stage-title">1. Create Order</div>
                    <div class="stage-desc">Order Svc &rarr; emit OrderCreated</div>
                </div>
                <div class="pipeline-stage" style="border-color:var(--accent)">
                    <div class="stage-title">2. Reserve Stock</div>
                    <div class="stage-desc">Inventory Svc &rarr; emit StockReserved</div>
                </div>
                <div class="pipeline-stage" style="border-color:var(--yellow)">
                    <div class="stage-title">3. Process Payment</div>
                    <div class="stage-desc">Payment Svc &rarr; emit PaymentProcessed</div>
                </div>
                <div class="pipeline-stage" style="border-color:var(--green)">
                    <div class="stage-title">4. Confirm Order</div>
                    <div class="stage-desc">Order Svc &rarr; status = CONFIRMED</div>
                </div>
            </div>
            <p><span class="badge-red">Kompensasi:</span> Jika Payment gagal &rarr; Inventory Svc emit StockReleased &rarr; Order Svc emit OrderCancelled</p>
        </div>
        <div class="card">
            <h4 style="color:var(--accent)">Orchestration-Based Saga</h4>
            <p>Satu <strong>Saga Orchestrator</strong> mengontrol urutan langkah dan menangani kompensasi jika terjadi kegagalan.</p>
            <div class="flow-diagram">
                <div class="flow-node highlight">Saga Orchestrator</div>
            </div>
            <div class="flow-diagram">
                <div class="flow-node">Order Svc</div>
                <div class="flow-node">Inventory Svc</div>
                <div class="flow-node">Payment Svc</div>
            </div>
            <p><span class="badge-green">Pro:</span> Mudah di-debug, flow jelas. <span class="badge-red">Con:</span> Orchestrator bisa jadi single point of failure.</p>
        </div>
    </div>
</div>

<!-- Event-Driven Architecture -->
<div class="card animate-in">
    <h3 style="color:var(--yellow)">Event-Driven Architecture (EDA)</h3>
    <p>Arsitektur di mana komponen berkomunikasi melalui <strong>events</strong> (fakta yang telah terjadi). Service memproduksi dan mengkonsumsi events secara asynchronous melalui message broker.</p>

    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge-blue">Event Notification</span></h4>
            <p>Service memberitahu perubahan state. Consumer memutuskan apakah perlu bereaksi. Contoh: <code>UserRegistered</code>, <code>OrderPlaced</code>.</p>
        </div>
        <div class="card">
            <h4><span class="badge-green">Event-Carried State Transfer</span></h4>
            <p>Event membawa data lengkap sehingga consumer tidak perlu query balik ke producer. Mengurangi coupling dan network calls.</p>
        </div>
        <div class="card">
            <h4><span class="badge-orange">Event Sourcing</span></h4>
            <p>Simpan semua perubahan state sebagai sequence of events, bukan state terkini. Audit trail lengkap, bisa replay events.</p>
        </div>
    </div>
</div>

<!-- CQRS -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">CQRS (Command Query Responsibility Segregation)</h3>
    <p>Pattern yang <strong>memisahkan model untuk read (query) dan write (command)</strong>. Sering dikombinasikan dengan Event Sourcing untuk sistem yang membutuhkan high-read performance dengan write consistency.</p>

    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--green)">Command<br><small>Write Model</small></div>
        <div class="flow-arrow">&rarr; events &rarr;</div>
        <div class="flow-node highlight">Event Store</div>
        <div class="flow-arrow">&rarr; project &rarr;</div>
        <div class="flow-node" style="border-color:var(--accent)">Query<br><small>Read Model</small></div>
    </div>

    <div class="info-box">
        <strong>Kapan menggunakan CQRS?</strong> Ketika read dan write memiliki kebutuhan skala yang sangat berbeda (misalnya 90% read, 10% write), atau ketika read model perlu di-optimasi berbeda (denormalized views, search index). Untuk pembahasan lebih detail mengenai CQRS dan clean code patterns, lihat bagian <strong>Clean Code & Design Patterns</strong>.
    </div>
</div>

<!-- Containerization -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">Containerization dengan Docker</h3>
    <p>Container adalah unit standar untuk packaging microservice beserta semua dependency-nya. <strong>Docker</strong> adalah container runtime paling populer yang memungkinkan "build once, run anywhere".</p>

    <div class="code-block"><span class="cm"># Dockerfile untuk Go microservice</span>
<span class="kw">FROM</span> <span class="str">golang:1.22-alpine</span> <span class="kw">AS</span> builder
<span class="kw">WORKDIR</span> <span class="str">/app</span>
<span class="kw">COPY</span> go.mod go.sum ./
<span class="kw">RUN</span> <span class="fn">go mod download</span>
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> <span class="fn">CGO_ENABLED=0 go build</span> -o /server ./cmd/server

<span class="kw">FROM</span> <span class="str">gcr.io/distroless/static</span>
<span class="kw">COPY</span> --from=builder /server /server
<span class="kw">EXPOSE</span> <span class="num">8080</span>
<span class="kw">ENTRYPOINT</span> [<span class="str">"/server"</span>]</div>

    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge-blue">Isolation</span></h4>
            <p>Setiap container terisolasi (filesystem, network, proses) tanpa overhead full VM</p>
        </div>
        <div class="card">
            <h4><span class="badge-green">Portability</span></h4>
            <p>Image yang sama berjalan di dev, staging, dan production</p>
        </div>
        <div class="card">
            <h4><span class="badge-orange">Efficiency</span></h4>
            <p>Berbagi kernel host OS, startup dalam hitungan detik, footprint memori kecil</p>
        </div>
    </div>
</div>

<!-- Kubernetes -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">Orkestrasi dengan Kubernetes (K8s)</h3>
    <p>Kubernetes adalah platform orkestrasi container open-source yang mengotomasi deployment, scaling, dan management aplikasi containerized.</p>

    <div class="layer-diagram">
        <div class="layer-item" style="background:rgba(56,189,248,0.12)">
            <div class="layer-num" style="background:var(--accent);color:#fff">1</div>
            <div class="layer-info">
                <strong style="color:var(--accent)">Control Plane</strong>
                <span>API Server, etcd, Scheduler, Controller Manager &mdash; otak cluster</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.12)">
            <div class="layer-num" style="background:var(--green);color:#fff">2</div>
            <div class="layer-info">
                <strong style="color:var(--green)">Worker Nodes</strong>
                <span>Kubelet, kube-proxy, container runtime &mdash; menjalankan workload</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,191,36,0.12)">
            <div class="layer-num" style="background:var(--yellow);color:#000">3</div>
            <div class="layer-info">
                <strong style="color:var(--yellow)">Pods</strong>
                <span>Unit terkecil deployment, berisi 1+ container, shared network & storage</span>
            </div>
        </div>
    </div>

    <div class="card-grid">
        <div class="card">
            <h4>Key Resources</h4>
            <ul>
                <li><strong>Deployment</strong> &mdash; Deklarasi desired state, rolling updates</li>
                <li><strong>Service</strong> &mdash; Stable endpoint untuk akses pods</li>
                <li><strong>Ingress</strong> &mdash; HTTP routing dari luar cluster</li>
                <li><strong>ConfigMap / Secret</strong> &mdash; Konfigurasi & credentials</li>
                <li><strong>HPA</strong> &mdash; Horizontal Pod Autoscaler</li>
            </ul>
        </div>
        <div class="card">
            <h4>Arsitektur K8s</h4>
            <div class="flow-diagram">
                <div class="flow-node highlight">API Server</div>
            </div>
            <div class="flow-diagram">
                <div class="flow-node">etcd</div>
                <div class="flow-node">Scheduler</div>
                <div class="flow-node">Controller</div>
            </div>
            <div class="flow-diagram">
                <div class="flow-node" style="border-color:var(--green)">Node 1<br><small>Pod A, Pod B</small></div>
                <div class="flow-node" style="border-color:var(--green)">Node 2<br><small>Pod C, Pod D</small></div>
                <div class="flow-node" style="border-color:var(--green)">Node 3<br><small>Pod E, Pod F</small></div>
            </div>
        </div>
    </div>
</div>

<!-- Monolith vs Microservices Comparison -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)">Tabel Perbandingan: Monolith vs Microservices</h3>
    <div class="table-wrapper">
        <table>
            <tr>
                <th>Aspek</th>
                <th>Monolith</th>
                <th>Microservices</th>
            </tr>
            <tr>
                <td><strong>Deployment</strong></td>
                <td>Satu artifact, satu deploy</td>
                <td>Deploy per service, independen</td>
            </tr>
            <tr>
                <td><strong>Scaling</strong></td>
                <td>Vertikal (scale up seluruh app)</td>
                <td>Horizontal (scale per service)</td>
            </tr>
            <tr>
                <td><strong>Tech Stack</strong></td>
                <td>Satu bahasa/framework</td>
                <td>Polyglot (bahasa berbeda per svc)</td>
            </tr>
            <tr>
                <td><strong>Database</strong></td>
                <td>Shared database</td>
                <td>Database per service</td>
            </tr>
            <tr>
                <td><strong>Team Structure</strong></td>
                <td>Satu tim besar</td>
                <td>Tim kecil per service (2-pizza)</td>
            </tr>
            <tr>
                <td><strong>Konsistensi Data</strong></td>
                <td>ACID transaction</td>
                <td>Eventual consistency (Saga)</td>
            </tr>
            <tr>
                <td><strong>Debugging</strong></td>
                <td>Mudah (single process)</td>
                <td>Sulit (distributed tracing)</td>
            </tr>
            <tr>
                <td><strong>Kompleksitas Ops</strong></td>
                <td>Rendah</td>
                <td>Tinggi (K8s, service mesh, monitoring)</td>
            </tr>
            <tr>
                <td><strong>Time to Market</strong></td>
                <td>Cepat di awal, lambat seiring tumbuh</td>
                <td>Lambat di awal, cepat setelah mature</td>
            </tr>
            <tr>
                <td><strong>Fault Isolation</strong></td>
                <td>Satu bug = crash semua</td>
                <td>Fault terisolasi per service</td>
            </tr>
        </table>
    </div>
</div>

<!-- ==================== 3. MESSAGE QUEUES ==================== -->
<h2 class="animate-in">3. Message Queues</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Message Queue &mdash; Backbone Komunikasi Async</h3>
    <p>Message Queue (MQ) adalah middleware yang memfasilitasi komunikasi asynchronous antar service. MQ menyimpan pesan sementara dan memastikan delivery meskipun consumer sedang down.</p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Perbandingan: Kafka vs RabbitMQ vs NATS</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="mq-kafka">Apache Kafka</button>
        <button class="tab-btn" data-tab="mq-rabbit">RabbitMQ</button>
        <button class="tab-btn" data-tab="mq-nats">NATS</button>
        <button class="tab-btn" data-tab="mq-compare">Perbandingan</button>
    </div>

    <div class="tab-content active" data-tab-content="mq-kafka">
        <h4 style="color:var(--accent)">Apache Kafka &mdash; Distributed Event Streaming Platform</h4>
        <p>Kafka bukan hanya message queue, tapi <strong>distributed commit log</strong>. Pesan disimpan secara persisten dan bisa di-replay. Dirancang untuk throughput sangat tinggi (jutaan pesan/detik).</p>

        <div class="card-grid">
            <div class="card">
                <h4>Arsitektur Kafka</h4>
                <div class="flow-diagram">
                    <div class="flow-node">Producer</div>
                    <div class="flow-arrow">&rarr;</div>
                    <div class="flow-node highlight">Broker Cluster<br><small>Topic &rarr; Partitions</small></div>
                    <div class="flow-arrow">&rarr;</div>
                    <div class="flow-node">Consumer Group</div>
                </div>
                <ul>
                    <li><strong>Topic</strong> &mdash; Kategori pesan (misal: orders, payments)</li>
                    <li><strong>Partition</strong> &mdash; Unit paralelisme, ordered per partition</li>
                    <li><strong>Consumer Group</strong> &mdash; Load balance antar consumer</li>
                    <li><strong>Replication</strong> &mdash; Data di-replika antar broker untuk fault tolerance</li>
                </ul>
            </div>
            <div class="card">
                <h4>Kapan Gunakan Kafka?</h4>
                <ul>
                    <li>Event streaming & real-time analytics</li>
                    <li>Log aggregation dari banyak service</li>
                    <li>Event sourcing (replay events)</li>
                    <li>Data pipeline (ETL) antar sistem</li>
                    <li>Throughput sangat tinggi (>100K msg/s)</li>
                    <li>Perlu message retention (hari/minggu)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="mq-rabbit">
        <h4 style="color:var(--green)">RabbitMQ &mdash; Traditional Message Broker</h4>
        <p>RabbitMQ adalah message broker berbasis AMQP protocol. Mendukung <strong>flexible routing</strong> melalui exchange types (direct, fanout, topic, headers). Ideal untuk task queues dan RPC-style messaging.</p>

        <div class="card-grid">
            <div class="card">
                <h4>Arsitektur RabbitMQ</h4>
                <div class="flow-diagram">
                    <div class="flow-node">Producer</div>
                    <div class="flow-arrow">&rarr;</div>
                    <div class="flow-node" style="border-color:var(--yellow)">Exchange<br><small>Routing logic</small></div>
                    <div class="flow-arrow">&rarr; binding &rarr;</div>
                    <div class="flow-node" style="border-color:var(--green)">Queue</div>
                    <div class="flow-arrow">&rarr;</div>
                    <div class="flow-node">Consumer</div>
                </div>
                <ul>
                    <li><strong>Direct Exchange</strong> &mdash; Route by exact routing key</li>
                    <li><strong>Fanout Exchange</strong> &mdash; Broadcast ke semua bound queue</li>
                    <li><strong>Topic Exchange</strong> &mdash; Route by pattern matching</li>
                    <li><strong>Message Acknowledgement</strong> &mdash; Consumer confirm processing</li>
                </ul>
            </div>
            <div class="card">
                <h4>Kapan Gunakan RabbitMQ?</h4>
                <ul>
                    <li>Task queues (background job processing)</li>
                    <li>RPC-style request/reply</li>
                    <li>Complex routing requirements</li>
                    <li>Priority queues</li>
                    <li>Message perlu di-acknowledge per item</li>
                    <li>Butuh flexible routing (exchange types)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="mq-nats">
        <h4 style="color:var(--accent3)">NATS &mdash; Cloud-Native Messaging</h4>
        <p>NATS adalah messaging system yang sangat ringan dan cepat. Ditulis dalam Go, dirancang untuk cloud-native dan edge computing. <strong>NATS JetStream</strong> menambahkan persistence dan at-least-once delivery.</p>

        <div class="card-grid">
            <div class="card">
                <h4>Fitur NATS</h4>
                <ul>
                    <li><strong>Core NATS</strong> &mdash; Fire-and-forget, at-most-once delivery</li>
                    <li><strong>JetStream</strong> &mdash; Persistence, replay, exactly-once</li>
                    <li><strong>Request-Reply</strong> &mdash; Built-in RPC pattern</li>
                    <li><strong>Subject-based</strong> &mdash; Wildcard routing</li>
                    <li><strong>Ultra-low latency</strong> &mdash; Sub-millisecond</li>
                </ul>
            </div>
            <div class="card">
                <h4>Kapan Gunakan NATS?</h4>
                <ul>
                    <li>IoT dan edge computing</li>
                    <li>Service mesh communication</li>
                    <li>Real-time control systems</li>
                    <li>Butuh ultra-low latency (&lt;1ms)</li>
                    <li>Lightweight, minimal footprint</li>
                    <li>Multi-tenancy (account-based isolation)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="mq-compare">
        <div class="table-wrapper">
            <table>
                <tr>
                    <th>Aspek</th>
                    <th>Apache Kafka</th>
                    <th>RabbitMQ</th>
                    <th>NATS</th>
                </tr>
                <tr>
                    <td><strong>Model</strong></td>
                    <td>Distributed log (pull)</td>
                    <td>Message broker (push)</td>
                    <td>Pub/Sub + Queue (push)</td>
                </tr>
                <tr>
                    <td><strong>Throughput</strong></td>
                    <td>Jutaan msg/s</td>
                    <td>Puluhan ribu msg/s</td>
                    <td>Jutaan msg/s</td>
                </tr>
                <tr>
                    <td><strong>Latency</strong></td>
                    <td>Low (ms range)</td>
                    <td>Low-Medium</td>
                    <td>Ultra-low (&lt;1ms)</td>
                </tr>
                <tr>
                    <td><strong>Persistence</strong></td>
                    <td>Default (retention-based)</td>
                    <td>Optional (durable queue)</td>
                    <td>JetStream (optional)</td>
                </tr>
                <tr>
                    <td><strong>Ordering</strong></td>
                    <td>Per partition</td>
                    <td>Per queue</td>
                    <td>Per subject (JetStream)</td>
                </tr>
                <tr>
                    <td><strong>Replay</strong></td>
                    <td>Ya (offset-based)</td>
                    <td>Tidak</td>
                    <td>Ya (JetStream)</td>
                </tr>
                <tr>
                    <td><strong>Protokol</strong></td>
                    <td>Kafka protocol (binary)</td>
                    <td>AMQP, MQTT, STOMP</td>
                    <td>NATS protocol (text)</td>
                </tr>
                <tr>
                    <td><strong>Best For</strong></td>
                    <td>Event streaming, analytics</td>
                    <td>Task queues, routing</td>
                    <td>IoT, edge, real-time</td>
                </tr>
            </table>
        </div>
    </div>
</div>

<!-- Producer-Consumer Pattern -->
<div class="card animate-in">
    <h3 style="color:var(--green)">Producer-Consumer Pattern</h3>
    <p>Pattern fundamental di message queuing: <strong>Producer</strong> menghasilkan pesan, <strong>Queue</strong> menyimpan sementara, <strong>Consumer</strong> memproses. Decoupling ini memungkinkan scaling independen.</p>

    <div class="pipeline">
        <div class="pipeline-stage" style="border-color:var(--accent)">
            <div class="stage-title">Producer</div>
            <div class="stage-desc">Menghasilkan pesan/event. Bisa multiple producers. Contoh: Order Service publish OrderCreated.</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--yellow)">
            <div class="stage-title">Message Broker</div>
            <div class="stage-desc">Buffer pesan, routing, persistence. Menangani backpressure ketika consumer lambat.</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--green)">
            <div class="stage-title">Consumer</div>
            <div class="stage-desc">Memproses pesan. Bisa multiple consumers (consumer group). Auto-scale berdasarkan queue depth.</div>
        </div>
    </div>

    <div class="warn-box">
        <strong>Idempotency penting!</strong> Consumer harus bisa memproses pesan yang sama lebih dari sekali tanpa efek samping (at-least-once delivery). Gunakan idempotency key atau deduplication untuk memastikan exactly-once semantics.
    </div>
</div>

<!-- Event Sourcing Integration -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)">Event Sourcing + Message Queue</h3>
    <p>Event sourcing menyimpan <strong>semua perubahan state sebagai event</strong> yang immutable. Kombinasi dengan message queue memungkinkan event di-broadcast ke service lain secara real-time.</p>

    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--green)">Command</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="border-color:var(--yellow)">Aggregate</div>
        <div class="flow-arrow">&rarr; persist</div>
        <div class="flow-node highlight">Event Store<br><small>(Kafka/EventStoreDB)</small></div>
        <div class="flow-arrow">&rarr; publish</div>
        <div class="flow-node" style="border-color:var(--accent3)">Projections<br><small>Read Models</small></div>
    </div>

    <div class="code-block"><span class="cm">// Event sourcing: setiap perubahan disimpan sebagai event</span>
<span class="type">EventStream</span> [account-123]:
  <span class="num">1</span>. <span class="fn">AccountCreated</span>  { <span class="str">name</span>: <span class="str">"John"</span>, <span class="str">balance</span>: <span class="num">0</span> }
  <span class="num">2</span>. <span class="fn">MoneyDeposited</span>  { <span class="str">amount</span>: <span class="num">1000</span> }
  <span class="num">3</span>. <span class="fn">MoneyWithdrawn</span>  { <span class="str">amount</span>: <span class="num">200</span> }
  <span class="num">4</span>. <span class="fn">MoneyDeposited</span>  { <span class="str">amount</span>: <span class="num">500</span> }
  <span class="cm">// Current state: balance = 0 + 1000 - 200 + 500 = 1300</span></div>
</div>

<!-- ==================== 4. DEVSECOPS ==================== -->
<h2 class="animate-in">4. DevSecOps</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa itu DevSecOps?</h3>
    <p>DevSecOps adalah filosofi yang <strong>mengintegrasikan keamanan (security) ke dalam setiap tahap</strong> siklus pengembangan software, bukan sebagai afterthought di akhir. Prinsip utamanya: <strong>"Shift Left"</strong> &mdash; pindahkan security testing seawal mungkin dalam pipeline.</p>

    <div class="card-grid-3">
        <div class="card" style="border-color:var(--accent)">
            <h4 style="color:var(--accent)">Dev (Development)</h4>
            <p>Menulis kode, code review, unit testing. Developer bertanggung jawab atas secure coding practices.</p>
        </div>
        <div class="card" style="border-color:var(--red)">
            <h4 style="color:var(--red)">Sec (Security)</h4>
            <p>Security di setiap tahap: threat modeling, static analysis, vulnerability scanning, penetration testing.</p>
        </div>
        <div class="card" style="border-color:var(--green)">
            <h4 style="color:var(--green)">Ops (Operations)</h4>
            <p>Infrastructure as Code, monitoring, incident response, compliance. Security di production.</p>
        </div>
    </div>
</div>

<!-- Shift Left -->
<div class="card animate-in">
    <h3 style="color:var(--red)">Prinsip "Shift Left" Security</h3>
    <p>Semakin lambat bug/vulnerability ditemukan, semakin mahal untuk diperbaiki. <strong>Shift Left</strong> berarti memindahkan security testing ke tahap awal development.</p>

    <div class="timeline">
        <div class="timeline-item">
            <strong style="color:var(--red)">Traditional: Sec di akhir</strong>
            <p>Security test hanya di tahap pre-production. Bug ditemukan terlambat, biaya perbaikan 100x lebih mahal.</p>
        </div>
        <div class="timeline-item">
            <strong style="color:var(--green)">Shift Left: Sec di awal</strong>
            <p>Security scanning di IDE, pre-commit hooks, CI pipeline. Bug ditemukan saat developer masih ingat konteks kodenya.</p>
        </div>
    </div>

    <div class="success-box">
        <strong>Manfaat Shift Left:</strong> Biaya perbaikan 6-15x lebih rendah, deployment lebih cepat karena tidak ada security bottleneck di akhir, developer membangun security mindset.
    </div>
</div>

<!-- DevSecOps Pipeline Visual -->
<div class="card animate-in">
    <h3 style="color:var(--yellow)">DevSecOps Pipeline</h3>
    <p>Visualisasi pipeline DevSecOps lengkap dengan security gates di setiap tahap:</p>

    <div class="pipeline">
        <div class="pipeline-stage" style="border-color:var(--accent3)">
            <div class="stage-title">Plan</div>
            <div class="stage-desc">Threat modeling, security requirements, risk assessment</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--accent)">
            <div class="stage-title">Code</div>
            <div class="stage-desc">Secure coding, IDE plugins (Semgrep), pre-commit hooks, peer review</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--yellow)">
            <div class="stage-title">Build</div>
            <div class="stage-desc">SAST scan, dependency check, container image build, SBOM generation</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--green)">
            <div class="stage-title">Test</div>
            <div class="stage-desc">Unit test, integration test, DAST scan, API security test</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--orange)">
            <div class="stage-title">Release</div>
            <div class="stage-desc">Approval gates, compliance check, artifact signing, container scan</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--red)">
            <div class="stage-title">Deploy</div>
            <div class="stage-desc">IaC scan, secrets injection (Vault), immutable infrastructure</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--accent)">
            <div class="stage-title">Operate</div>
            <div class="stage-desc">Runtime protection, WAF, network policies, access control</div>
        </div>
        <div class="pipeline-stage" style="border-color:var(--accent3)">
            <div class="stage-title">Monitor</div>
            <div class="stage-desc">SIEM, anomaly detection, audit logs, incident response</div>
        </div>
    </div>
</div>

<!-- Jenkins CI/CD -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">Jenkins &mdash; CI/CD Pipeline as Code</h3>
    <p>Jenkins adalah automation server open-source paling populer untuk CI/CD. Dengan <strong>Jenkinsfile</strong>, pipeline didefinisikan sebagai kode (Pipeline as Code) yang bisa di-version control bersama source code.</p>

    <div class="code-block"><span class="cm">// Jenkinsfile - DevSecOps Pipeline</span>
<span class="kw">pipeline</span> {
    <span class="kw">agent</span> { <span class="fn">docker</span> <span class="str">'golang:1.22'</span> }

    <span class="kw">environment</span> {
        <span class="type">SONAR_TOKEN</span> = <span class="fn">credentials</span>(<span class="str">'sonarqube-token'</span>)
        <span class="type">REGISTRY</span>   = <span class="str">'registry.example.com'</span>
    }

    <span class="kw">stages</span> {
        <span class="kw">stage</span>(<span class="str">'Checkout'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">checkout</span> scm
            }
        }

        <span class="kw">stage</span>(<span class="str">'Build'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">sh</span> <span class="str">'go build -o app ./cmd/server'</span>
            }
        }

        <span class="kw">stage</span>(<span class="str">'Unit Test'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">sh</span> <span class="str">'go test -cover -race ./...'</span>
                <span class="fn">junit</span> <span class="str">'**/test-results.xml'</span>
            }
        }

        <span class="kw">stage</span>(<span class="str">'SAST - SonarQube'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">withSonarQubeEnv</span>(<span class="str">'sonar-server'</span>) {
                    <span class="fn">sh</span> <span class="str">'sonar-scanner'</span>
                }
                <span class="fn">waitForQualityGate</span> abortPipeline: <span class="kw">true</span>
            }
        }

        <span class="kw">stage</span>(<span class="str">'Dependency Check'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">dependencyCheck</span> additionalArguments: <span class="str">'--scan ./'</span>
                <span class="fn">dependencyCheckPublisher</span> pattern: <span class="str">'**/dependency-check-report.xml'</span>
            }
        }

        <span class="kw">stage</span>(<span class="str">'Container Build & Scan'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">sh</span> <span class="str">'docker build -t $REGISTRY/app:$BUILD_NUMBER .'</span>
                <span class="fn">sh</span> <span class="str">'trivy image --severity HIGH,CRITICAL $REGISTRY/app:$BUILD_NUMBER'</span>
            }
        }

        <span class="kw">stage</span>(<span class="str">'DAST - OWASP ZAP'</span>) {
            <span class="kw">steps</span> {
                <span class="fn">sh</span> <span class="str">'zap-cli quick-scan --self-contained http://staging:8080'</span>
            }
        }

        <span class="kw">stage</span>(<span class="str">'Deploy to Production'</span>) {
            <span class="kw">when</span> { <span class="kw">branch</span> <span class="str">'main'</span> }
            <span class="kw">steps</span> {
                <span class="fn">sh</span> <span class="str">'kubectl apply -f k8s/'</span>
            }
        }
    }

    <span class="kw">post</span> {
        <span class="kw">always</span>  { <span class="fn">archiveArtifacts</span> <span class="str">'**/reports/**'</span> }
        <span class="kw">failure</span> { <span class="fn">slackSend</span> channel: <span class="str">'#alerts'</span>, message: <span class="str">"Pipeline FAILED: \${env.JOB_NAME}"</span> }
    }
}</div>
</div>

<!-- Jenkins Plugins -->
<div class="card animate-in">
    <h3 style="color:var(--green)">Jenkins Plugins untuk Security</h3>
    <div class="card-grid-3">
        <div class="card">
            <h4><span class="badge-blue">SonarQube Scanner</span></h4>
            <p>Integrasi SonarQube untuk SAST analysis. Mendeteksi bugs, code smells, dan security vulnerabilities. Quality Gate otomatis.</p>
        </div>
        <div class="card">
            <h4><span class="badge-red">OWASP Dependency-Check</span></h4>
            <p>Scan dependency untuk known vulnerabilities (CVE). Mengecek library yang digunakan terhadap National Vulnerability Database.</p>
        </div>
        <div class="card">
            <h4><span class="badge-green">Trivy</span></h4>
            <p>Scanner all-in-one: container images, filesystem, git repos. Deteksi vulnerability di OS packages dan application dependencies.</p>
        </div>
        <div class="card">
            <h4><span class="badge-orange">OWASP ZAP</span></h4>
            <p>Dynamic Application Security Testing. Scan running application untuk XSS, SQL injection, dll.</p>
        </div>
        <div class="card">
            <h4><span class="badge-purple">Credentials Binding</span></h4>
            <p>Inject secrets secara aman ke pipeline. Tidak pernah expose credentials di logs atau environment.</p>
        </div>
        <div class="card">
            <h4><span class="badge-yellow">Audit Trail</span></h4>
            <p>Log semua aktivitas Jenkins: siapa menjalankan apa, kapan, approval history untuk compliance.</p>
        </div>
    </div>
</div>

<!-- Security Tools in Pipeline -->
<div class="card animate-in">
    <h3 style="color:var(--red)">Security Tools dalam Pipeline</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="sec-sast">SAST</button>
        <button class="tab-btn" data-tab="sec-dast">DAST</button>
        <button class="tab-btn" data-tab="sec-container">Container Scan</button>
        <button class="tab-btn" data-tab="sec-secret">Secret Scan</button>
        <button class="tab-btn" data-tab="sec-dep">Dependency Check</button>
    </div>

    <div class="tab-content active" data-tab-content="sec-sast">
        <h4>SAST (Static Application Security Testing)</h4>
        <p>Analisis <strong>source code tanpa menjalankan aplikasi</strong>. Menemukan vulnerability pattern di kode seperti SQL injection, XSS, buffer overflow, insecure deserialization.</p>

        <div class="card-grid">
            <div class="card">
                <h4 style="color:var(--accent)">SonarQube</h4>
                <ul>
                    <li>Platform lengkap: security, reliability, maintainability</li>
                    <li>Support 30+ bahasa pemrograman</li>
                    <li>Quality Gate &mdash; block deploy jika ada critical issue</li>
                    <li>Technical debt tracking</li>
                    <li>Integrasi Jenkins, GitLab CI, GitHub Actions</li>
                </ul>
            </div>
            <div class="card">
                <h4 style="color:var(--accent)">Semgrep</h4>
                <ul>
                    <li>Lightweight, fast, open-source</li>
                    <li>Custom rules dengan pattern syntax</li>
                    <li>Bisa jalan di IDE (pre-commit) dan CI</li>
                    <li>Community rules untuk OWASP Top 10</li>
                    <li>Support polyglot (Go, Java, Python, JS, dll)</li>
                </ul>
                <div class="code-block"><span class="cm"># Semgrep rule example</span>
<span class="kw">rules:</span>
  - <span class="kw">id:</span> <span class="str">sql-injection</span>
    <span class="kw">pattern:</span> <span class="str">db.Query(fmt.Sprintf(..., $USER_INPUT))</span>
    <span class="kw">message:</span> <span class="str">"Potential SQL injection"</span>
    <span class="kw">severity:</span> <span class="str">ERROR</span></div>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="sec-dast">
        <h4>DAST (Dynamic Application Security Testing)</h4>
        <p>Testing <strong>aplikasi yang sedang berjalan</strong> dari luar (black-box). Mengirim request berbahaya dan menganalisis response untuk menemukan vulnerability.</p>

        <div class="card">
            <h4 style="color:var(--red)">OWASP ZAP (Zed Attack Proxy)</h4>
            <ul>
                <li><strong>Spider</strong> &mdash; Crawl seluruh endpoint aplikasi secara otomatis</li>
                <li><strong>Active Scan</strong> &mdash; Kirim payload berbahaya (XSS, SQLi, path traversal)</li>
                <li><strong>Passive Scan</strong> &mdash; Analisis response untuk information leakage</li>
                <li><strong>API Scan</strong> &mdash; Import OpenAPI/Swagger spec untuk scan API</li>
                <li><strong>CI/CD Integration</strong> &mdash; Command line mode untuk automation</li>
            </ul>
            <div class="code-block"><span class="cm"># OWASP ZAP di CI pipeline</span>
<span class="fn">docker run</span> -t owasp/zap2docker-stable <span class="fn">zap-api-scan.py</span> \
  -t <span class="str">http://staging:8080/api/openapi.json</span> \
  -f <span class="str">openapi</span> \
  -r <span class="str">zap-report.html</span></div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="sec-container">
        <h4>Container Image Scanning</h4>
        <p>Scan container image untuk <strong>vulnerability di OS packages dan application dependencies</strong>. Harus dilakukan sebelum push ke registry dan secara berkala di production.</p>

        <div class="card-grid">
            <div class="card">
                <h4 style="color:var(--accent)">Trivy</h4>
                <ul>
                    <li>Open-source (Aqua Security)</li>
                    <li>Scan: images, filesystem, git repos, K8s cluster</li>
                    <li>Database CVE terupdate otomatis</li>
                    <li>Output: table, JSON, SARIF</li>
                    <li>Sangat cepat, CI-friendly</li>
                </ul>
                <div class="code-block"><span class="cm"># Trivy scan container image</span>
<span class="fn">trivy image</span> --severity <span class="str">HIGH,CRITICAL</span> \
  --exit-code <span class="num">1</span> \
  <span class="str">registry.example.com/app:latest</span></div>
            </div>
            <div class="card">
                <h4 style="color:var(--accent)">Snyk</h4>
                <ul>
                    <li>Commercial + free tier</li>
                    <li>Container, code, IaC, open-source scanning</li>
                    <li>Fix suggestions & auto PR</li>
                    <li>Developer-friendly dashboard</li>
                    <li>Integrasi IDE dan Git platform</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="sec-secret">
        <h4>Secret Scanning</h4>
        <p>Mendeteksi <strong>credentials, API keys, tokens, dan secrets</strong> yang tidak sengaja ter-commit ke source code. Ini adalah vulnerability yang sangat sering terjadi.</p>

        <div class="card-grid-3">
            <div class="card">
                <h4><span class="badge-red">GitLeaks</span></h4>
                <p>Scan git history untuk secrets. Support regex patterns, entropy-based detection. Pre-commit hook.</p>
            </div>
            <div class="card">
                <h4><span class="badge-purple">TruffleHog</span></h4>
                <p>Deep scan git commits, S3 buckets, filesystem. Verifikasi aktif apakah secret masih valid.</p>
            </div>
            <div class="card">
                <h4><span class="badge-blue">GitHub Secret Scanning</span></h4>
                <p>Built-in di GitHub. Auto-detect patterns dari 100+ service providers. Alert langsung.</p>
            </div>
        </div>

        <div class="warn-box">
            <strong>Jangan pernah commit secrets!</strong> Gunakan environment variables, Vault, atau sealed secrets. Jika secret terlanjur ter-commit, rotate segera &mdash; force-push tidak cukup karena git history tetap ada.
        </div>
    </div>

    <div class="tab-content" data-tab-content="sec-dep">
        <h4>Dependency Checking</h4>
        <p>Mengecek library/package yang digunakan aplikasi terhadap <strong>database vulnerability yang diketahui</strong> (CVE/NVD). Supply chain attack semakin marak (SolarWinds, Log4Shell).</p>

        <div class="card">
            <h4 style="color:var(--red)">OWASP Dependency-Check</h4>
            <ul>
                <li>Open-source, support Java, .NET, Python, Node.js, Go</li>
                <li>Mengecek terhadap NVD (National Vulnerability Database)</li>
                <li>Generate report HTML/JSON/XML</li>
                <li>Jenkins plugin tersedia</li>
                <li>Bisa set threshold: fail build jika ada CVSS &gt; 7</li>
            </ul>
            <div class="code-block"><span class="cm"># OWASP Dependency-Check</span>
<span class="fn">dependency-check</span> --project <span class="str">"MyApp"</span> \
  --scan <span class="str">"./"</span> \
  --format <span class="str">"HTML"</span> \
  --failOnCVSS <span class="num">7</span> \
  --out <span class="str">"./reports"</span></div>
        </div>
    </div>
</div>

<!-- ==================== 5. HASHICORP STACK ==================== -->
<h2 class="animate-in">5. HashiCorp Stack</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Ekosistem HashiCorp</h3>
    <p>HashiCorp menyediakan suite tools untuk mengelola <strong>infrastruktur cloud-native</strong> secara lengkap. Tiga pilar utama: provisioning (Terraform), discovery (Consul), dan secrets (Vault).</p>

    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--accent3)">Terraform / OpenTofu<br><small>Provision Infra</small></div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="border-color:var(--green)">Consul<br><small>Discover Services</small></div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="border-color:var(--yellow)">Vault / OpenBao<br><small>Manage Secrets</small></div>
    </div>
</div>

<!-- Consul -->
<div class="card animate-in">
    <h3 style="color:var(--green)">Consul &mdash; Service Discovery & Service Mesh</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="consul-what">Apa & Mengapa</button>
        <button class="tab-btn" data-tab="consul-arch">Arsitektur</button>
        <button class="tab-btn" data-tab="consul-features">Fitur Utama</button>
        <button class="tab-btn" data-tab="consul-mesh">Service Mesh</button>
    </div>

    <div class="tab-content active" data-tab-content="consul-what">
        <h4>Apa itu Consul?</h4>
        <p>Consul adalah solusi <strong>service networking</strong> yang menyediakan service discovery, health checking, KV store, dan service mesh. Consul memungkinkan service menemukan satu sama lain secara otomatis di lingkungan yang dinamis (cloud, Kubernetes, VM).</p>

        <div class="card-grid-3">
            <div class="card">
                <h4><span class="badge-green">Service Discovery</span></h4>
                <p>Service mendaftarkan diri ke Consul. Service lain query Consul untuk menemukan lokasi (IP:port) secara dinamis.</p>
            </div>
            <div class="card">
                <h4><span class="badge-blue">Health Checking</span></h4>
                <p>Consul secara berkala mengecek kesehatan service. Service yang tidak sehat otomatis dikeluarkan dari routing.</p>
            </div>
            <div class="card">
                <h4><span class="badge-orange">KV Store</span></h4>
                <p>Distributed key-value store untuk konfigurasi dinamis, feature flags, dan coordination.</p>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="consul-arch">
        <h4>Arsitektur Consul</h4>
        <div class="layer-diagram">
            <div class="layer-item" style="background:rgba(52,211,153,0.12)">
                <div class="layer-num" style="background:var(--green);color:#fff">1</div>
                <div class="layer-info">
                    <strong style="color:var(--green)">Consul Server Cluster (3-5 nodes)</strong>
                    <span>Menyimpan state, leader election via Raft consensus, replicate data antar server</span>
                </div>
            </div>
            <div class="layer-item" style="background:rgba(56,189,248,0.12)">
                <div class="layer-num" style="background:var(--accent);color:#fff">2</div>
                <div class="layer-info">
                    <strong style="color:var(--accent)">Consul Agent (setiap node)</strong>
                    <span>Berjalan di setiap host/pod. Melakukan health check lokal, forward queries ke server</span>
                </div>
            </div>
            <div class="layer-item" style="background:rgba(251,191,36,0.12)">
                <div class="layer-num" style="background:var(--yellow);color:#000">3</div>
                <div class="layer-info">
                    <strong style="color:var(--yellow)">Services</strong>
                    <span>Mendaftar ke agent lokal, mendapat DNS/HTTP discovery, sidecar proxy untuk mesh</span>
                </div>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="consul-features">
        <h4>Fitur Utama Consul</h4>

        <div class="step-list">
            <div class="step-item">
                <div class="step-num">1</div>
                <div class="step-text"><strong>Service Registration</strong> &mdash; Service mendaftarkan diri via config file atau HTTP API. Consul menyimpan catalog semua service yang tersedia.
                    <div class="code-block"><span class="cm">// Service registration config (JSON)</span>
{
  <span class="str">"service"</span>: {
    <span class="str">"name"</span>: <span class="str">"user-api"</span>,
    <span class="str">"port"</span>: <span class="num">8080</span>,
    <span class="str">"tags"</span>: [<span class="str">"v2"</span>, <span class="str">"production"</span>],
    <span class="str">"check"</span>: {
      <span class="str">"http"</span>: <span class="str">"http://localhost:8080/health"</span>,
      <span class="str">"interval"</span>: <span class="str">"10s"</span>
    }
  }
}</div>
                </div>
            </div>
            <div class="step-item">
                <div class="step-num">2</div>
                <div class="step-text"><strong>Health Checks</strong> &mdash; HTTP, TCP, gRPC, script, TTL-based. Service unhealthy otomatis dikeluarkan dari DNS/catalog.</div>
            </div>
            <div class="step-item">
                <div class="step-num">3</div>
                <div class="step-text"><strong>DNS Interface</strong> &mdash; Query service via DNS: <code>user-api.service.consul</code> mengembalikan IP healthy instances. Tidak perlu library khusus di aplikasi.</div>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="consul-mesh">
        <h4>Consul Service Mesh (Connect)</h4>
        <p>Consul Connect menyediakan <strong>service mesh</strong> dengan sidecar proxy (Envoy). Mengatur traffic antar service tanpa mengubah kode aplikasi.</p>

        <div class="flow-diagram">
            <div class="flow-node" style="border-color:var(--green)">Service A</div>
            <div class="flow-arrow">&harr;</div>
            <div class="flow-node" style="border-color:var(--yellow)">Envoy Proxy<br><small>(sidecar)</small></div>
            <div class="flow-arrow">&harr; mTLS &harr;</div>
            <div class="flow-node" style="border-color:var(--yellow)">Envoy Proxy<br><small>(sidecar)</small></div>
            <div class="flow-arrow">&harr;</div>
            <div class="flow-node" style="border-color:var(--green)">Service B</div>
        </div>

        <div class="card-grid">
            <div class="card">
                <h4>Fitur Service Mesh</h4>
                <ul>
                    <li><strong>mTLS otomatis</strong> &mdash; Enkripsi semua traffic antar service</li>
                    <li><strong>Intentions</strong> &mdash; Access control: service A boleh akses service B</li>
                    <li><strong>Traffic splitting</strong> &mdash; Canary deployment, A/B testing</li>
                    <li><strong>Observability</strong> &mdash; Metrics, tracing, access logs via proxy</li>
                </ul>
            </div>
            <div class="card">
                <h4>Keuntungan Sidecar Pattern</h4>
                <ul>
                    <li>Tidak perlu ubah kode aplikasi</li>
                    <li>Language-agnostic (proxy handle networking)</li>
                    <li>Centralized policy management</li>
                    <li>Gradual adoption (tambahkan sidecar per service)</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Vault / OpenBao -->
<div class="card animate-in">
    <h3 style="color:var(--yellow)">Vault / OpenBao &mdash; Secrets Management</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="vault-what">Apa & Mengapa</button>
        <button class="tab-btn" data-tab="vault-seal">Seal/Unseal</button>
        <button class="tab-btn" data-tab="vault-engines">Secret Engines</button>
        <button class="tab-btn" data-tab="vault-auth">Auth Methods</button>
        <button class="tab-btn" data-tab="vault-openbao">OpenBao</button>
    </div>

    <div class="tab-content active" data-tab-content="vault-what">
        <h4>Apa itu Vault?</h4>
        <p>HashiCorp Vault adalah tool untuk <strong>menyimpan, mengakses, dan merotasi secrets</strong> secara aman. Vault menyediakan API terpusat untuk mengelola credentials, API keys, certificates, dan encryption keys.</p>

        <div class="card-grid">
            <div class="card">
                <h4>Masalah yang Diselesaikan</h4>
                <ul>
                    <li><strong>Secret sprawl</strong> &mdash; Secrets tersebar di config files, env vars, code</li>
                    <li><strong>Tidak ada audit trail</strong> &mdash; Siapa akses secret apa, kapan?</li>
                    <li><strong>Static credentials</strong> &mdash; Password database yang tidak pernah di-rotate</li>
                    <li><strong>Tidak ada encryption</strong> &mdash; Secrets disimpan plaintext</li>
                </ul>
            </div>
            <div class="card">
                <h4>Fitur Utama</h4>
                <ul>
                    <li><strong>Dynamic secrets</strong> &mdash; Generate credentials on-demand dengan TTL</li>
                    <li><strong>Encryption as a Service</strong> &mdash; Transit engine untuk encrypt/decrypt tanpa expose key</li>
                    <li><strong>Lease & renewal</strong> &mdash; Setiap secret punya masa hidup</li>
                    <li><strong>Revocation</strong> &mdash; Revoke secret individu atau seluruh tree</li>
                    <li><strong>Audit logging</strong> &mdash; Setiap operasi tercatat</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="vault-seal">
        <h4>Mekanisme Seal/Unseal</h4>
        <p>Vault dimulai dalam keadaan <strong>sealed</strong> (terkunci). Data terenkripsi di storage tetapi Vault tidak bisa mendekripsi tanpa unseal keys. Ini menggunakan <strong>Shamir's Secret Sharing</strong>.</p>

        <div class="step-list">
            <div class="step-item">
                <div class="step-num" style="background:var(--red)">1</div>
                <div class="step-text"><strong>Initialization</strong> &mdash; Vault menghasilkan master key yang dipecah menjadi N key shares. Diperlukan minimum M shares untuk unseal (misalnya 3 dari 5).</div>
            </div>
            <div class="step-item">
                <div class="step-num" style="background:var(--yellow)">2</div>
                <div class="step-text"><strong>Sealed State</strong> &mdash; Vault tahu di mana data disimpan tapi tidak bisa mendekripsi. Semua operasi ditolak kecuali unseal.</div>
            </div>
            <div class="step-item">
                <div class="step-num" style="background:var(--green)">3</div>
                <div class="step-text"><strong>Unseal</strong> &mdash; Operator memasukkan M key shares. Vault merekonstruksi master key, mendekripsi encryption key, dan siap melayani request.</div>
            </div>
        </div>

        <div class="info-box">
            <strong>Auto-Unseal:</strong> Di production, Vault bisa di-unseal otomatis menggunakan cloud KMS (AWS KMS, GCP Cloud KMS, Azure Key Vault) tanpa operator manual.
        </div>
    </div>

    <div class="tab-content" data-tab-content="vault-engines">
        <h4>Secret Engines</h4>
        <p>Secret engine adalah komponen yang menyimpan, generate, atau encrypt data. Setiap engine di-mount pada path tertentu.</p>

        <div class="card-grid-3">
            <div class="card">
                <h4><span class="badge-blue">KV (Key-Value)</span></h4>
                <p>Simpan static secrets (API keys, passwords). Versioning (v2) memungkinkan rollback. Path: <code>secret/data/myapp</code></p>
                <div class="code-block"><span class="cm"># Store secret</span>
<span class="fn">vault kv put</span> <span class="str">secret/myapp</span> \
  <span class="type">db_pass</span>=<span class="str">"s3cret"</span> \
  <span class="type">api_key</span>=<span class="str">"abc123"</span>

<span class="cm"># Read secret</span>
<span class="fn">vault kv get</span> <span class="str">secret/myapp</span></div>
            </div>
            <div class="card">
                <h4><span class="badge-green">Database</span></h4>
                <p>Generate <strong>dynamic database credentials</strong> dengan TTL. Setiap request mendapat username/password unik yang auto-expire.</p>
                <div class="code-block"><span class="cm"># Get dynamic DB creds</span>
<span class="fn">vault read</span> <span class="str">database/creds/readonly</span>
<span class="cm"># Output: username=v-app-readonly-a1b2c3</span>
<span class="cm">#         password=random-generated</span>
<span class="cm">#         ttl=1h (auto-revoke)</span></div>
            </div>
            <div class="card">
                <h4><span class="badge-purple">PKI</span></h4>
                <p>Certificate Authority internal. Generate TLS certificates on-demand untuk mTLS antar service. Auto-rotation.</p>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="vault-auth">
        <h4>Authentication Methods</h4>
        <p>Vault mendukung banyak metode autentikasi untuk memvalidasi identitas client sebelum memberikan akses ke secrets.</p>

        <div class="card-grid">
            <div class="card">
                <h4>Auth Methods Populer</h4>
                <div class="step-list">
                    <div class="step-item">
                        <div class="step-num">1</div>
                        <div class="step-text"><strong>AppRole</strong> &mdash; Untuk aplikasi/service. Menggunakan role_id + secret_id. Ideal untuk CI/CD pipeline dan microservices.</div>
                    </div>
                    <div class="step-item">
                        <div class="step-num">2</div>
                        <div class="step-text"><strong>Kubernetes</strong> &mdash; Pod di K8s otomatis autentikasi via Service Account token. Paling seamless untuk K8s workloads.</div>
                    </div>
                    <div class="step-item">
                        <div class="step-num">3</div>
                        <div class="step-text"><strong>OIDC / JWT</strong> &mdash; Integrasi dengan identity providers (Keycloak, Okta, Google). Untuk user authentication ke Vault UI.</div>
                    </div>
                    <div class="step-item">
                        <div class="step-num">4</div>
                        <div class="step-text"><strong>Token</strong> &mdash; Metode paling basic. Client menyajikan token yang sudah di-generate sebelumnya.</div>
                    </div>
                </div>
            </div>
            <div class="card">
                <h4>Alur Autentikasi</h4>
                <div class="flow-diagram">
                    <div class="flow-node">Client / App</div>
                    <div class="flow-arrow">&rarr; auth &rarr;</div>
                    <div class="flow-node highlight">Vault Server</div>
                    <div class="flow-arrow">&rarr; token &rarr;</div>
                    <div class="flow-node">Client / App</div>
                </div>
                <p>Client autentikasi &rarr; mendapat Vault token &rarr; gunakan token untuk akses secrets. Token punya TTL dan policies yang membatasi akses.</p>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="vault-openbao">
        <h4>OpenBao &mdash; Fork Open-Source Vault</h4>
        <p>Setelah HashiCorp mengubah lisensi Vault dari MPL ke BSL (Business Source License) pada 2023, komunitas membuat <strong>OpenBao</strong> sebagai fork open-source yang sepenuhnya kompatibel.</p>

        <div class="card-grid">
            <div class="card" style="border-color:var(--green)">
                <h4 style="color:var(--green)">Kesamaan</h4>
                <ul>
                    <li>API kompatibel dengan Vault</li>
                    <li>Secret engines yang sama</li>
                    <li>Auth methods yang sama</li>
                    <li>Seal/unseal mechanism yang sama</li>
                    <li>Migrasi dari Vault relatif mudah</li>
                </ul>
            </div>
            <div class="card" style="border-color:var(--accent)">
                <h4 style="color:var(--accent)">Perbedaan</h4>
                <ul>
                    <li>Lisensi: MPL 2.0 (benar-benar open-source)</li>
                    <li>Governance oleh Linux Foundation</li>
                    <li>Fitur enterprise tertentu mungkin berbeda</li>
                    <li>Komunitas-driven development</li>
                    <li>Cocok untuk yang menghindari BSL</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Terraform / OpenTofu -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)">Terraform / OpenTofu &mdash; Infrastructure as Code</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="tf-what">Apa & Mengapa</button>
        <button class="tab-btn" data-tab="tf-hcl">HCL Syntax</button>
        <button class="tab-btn" data-tab="tf-state">State Management</button>
        <button class="tab-btn" data-tab="tf-workflow">Plan &rarr; Apply</button>
        <button class="tab-btn" data-tab="tf-opentofu">OpenTofu</button>
    </div>

    <div class="tab-content active" data-tab-content="tf-what">
        <h4>Apa itu Terraform?</h4>
        <p>Terraform adalah tool <strong>Infrastructure as Code (IaC)</strong> yang memungkinkan kita mendefinisikan infrastruktur secara deklaratif menggunakan HashiCorp Configuration Language (HCL). Terraform mengelola lifecycle infrastruktur: create, update, dan delete resources di berbagai cloud provider.</p>

        <div class="card-grid-3">
            <div class="card">
                <h4><span class="badge-blue">Providers</span></h4>
                <p>Plugin untuk berinteraksi dengan cloud APIs: AWS, GCP, Azure, Kubernetes, Cloudflare, dan 3000+ lainnya.</p>
            </div>
            <div class="card">
                <h4><span class="badge-green">Resources</span></h4>
                <p>Komponen infrastruktur yang dikelola: VM, database, DNS record, VPC, IAM role, dan lain-lain.</p>
            </div>
            <div class="card">
                <h4><span class="badge-orange">Modules</span></h4>
                <p>Kumpulan resources yang reusable. Encapsulate patterns umum: VPC module, EKS module, database module.</p>
            </div>
        </div>
    </div>

    <div class="tab-content" data-tab-content="tf-hcl">
        <h4>HCL (HashiCorp Configuration Language)</h4>
        <p>Bahasa deklaratif yang human-readable untuk mendefinisikan infrastruktur:</p>

        <div class="code-block"><span class="cm"># main.tf - Contoh infrastruktur Kubernetes di AWS</span>

<span class="kw">terraform</span> {
  <span class="kw">required_providers</span> {
    <span class="type">aws</span> = {
      <span class="str">source</span>  = <span class="str">"hashicorp/aws"</span>
      <span class="str">version</span> = <span class="str">"~> 5.0"</span>
    }
  }
  <span class="kw">backend</span> <span class="str">"s3"</span> {
    <span class="str">bucket</span> = <span class="str">"my-terraform-state"</span>
    <span class="str">key</span>    = <span class="str">"prod/infra.tfstate"</span>
    <span class="str">region</span> = <span class="str">"ap-southeast-1"</span>
  }
}

<span class="kw">provider</span> <span class="str">"aws"</span> {
  <span class="str">region</span> = <span class="fn">var</span>.<span class="type">aws_region</span>
}

<span class="cm"># VPC untuk microservices</span>
<span class="kw">module</span> <span class="str">"vpc"</span> {
  <span class="str">source</span>  = <span class="str">"terraform-aws-modules/vpc/aws"</span>
  <span class="str">version</span> = <span class="str">"5.0.0"</span>

  <span class="str">name</span>             = <span class="str">"production-vpc"</span>
  <span class="str">cidr</span>             = <span class="str">"10.0.0.0/16"</span>
  <span class="str">azs</span>              = [<span class="str">"ap-southeast-1a"</span>, <span class="str">"ap-southeast-1b"</span>]
  <span class="str">private_subnets</span>  = [<span class="str">"10.0.1.0/24"</span>, <span class="str">"10.0.2.0/24"</span>]
  <span class="str">public_subnets</span>   = [<span class="str">"10.0.101.0/24"</span>, <span class="str">"10.0.102.0/24"</span>]
  <span class="str">enable_nat_gateway</span> = <span class="kw">true</span>
}

<span class="cm"># EKS Cluster</span>
<span class="kw">resource</span> <span class="str">"aws_eks_cluster"</span> <span class="str">"main"</span> {
  <span class="str">name</span>     = <span class="str">"production-cluster"</span>
  <span class="str">role_arn</span> = <span class="fn">aws_iam_role</span>.<span class="type">eks</span>.<span class="str">arn</span>
  <span class="str">version</span>  = <span class="str">"1.29"</span>

  <span class="kw">vpc_config</span> {
    <span class="str">subnet_ids</span> = <span class="fn">module</span>.<span class="type">vpc</span>.<span class="str">private_subnets</span>
  }
}

<span class="cm"># Output</span>
<span class="kw">output</span> <span class="str">"cluster_endpoint"</span> {
  <span class="str">value</span> = <span class="fn">aws_eks_cluster</span>.<span class="type">main</span>.<span class="str">endpoint</span>
}</div>
    </div>

    <div class="tab-content" data-tab-content="tf-state">
        <h4>State Management</h4>
        <p>Terraform menyimpan <strong>state file</strong> yang merupakan mapping antara konfigurasi HCL dan resources yang sebenarnya ada di cloud. State ini kritis untuk operasi plan dan apply.</p>

        <div class="card-grid">
            <div class="card" style="border-color:var(--red)">
                <h4 style="color:var(--red)">Local State (Hindari di Production)</h4>
                <ul>
                    <li>File <code>terraform.tfstate</code> di lokal</li>
                    <li>Tidak bisa sharing antar tim</li>
                    <li>Tidak ada locking (race condition)</li>
                    <li>Risiko hilang jika mesin rusak</li>
                </ul>
            </div>
            <div class="card" style="border-color:var(--green)">
                <h4 style="color:var(--green)">Remote State (Best Practice)</h4>
                <ul>
                    <li>Disimpan di S3, GCS, Azure Blob, Consul</li>
                    <li>State locking (DynamoDB/Consul) mencegah concurrent modification</li>
                    <li>Enkripsi at rest</li>
                    <li>Versioning untuk rollback</li>
                    <li>Sharing antar tim aman</li>
                </ul>
            </div>
        </div>

        <div class="warn-box">
            <strong>Jangan commit state file ke Git!</strong> State file bisa berisi sensitive data (passwords, private keys). Selalu gunakan remote backend dengan enkripsi.
        </div>
    </div>

    <div class="tab-content" data-tab-content="tf-workflow">
        <h4>Workflow: Plan &rarr; Apply</h4>
        <p>Terraform menggunakan workflow yang aman dan predictable:</p>

        <div class="pipeline">
            <div class="pipeline-stage" style="border-color:var(--accent)">
                <div class="stage-title">terraform init</div>
                <div class="stage-desc">Download providers & modules. Initialize backend. Hanya perlu sekali atau saat ada perubahan.</div>
            </div>
            <div class="pipeline-stage" style="border-color:var(--yellow)">
                <div class="stage-title">terraform plan</div>
                <div class="stage-desc">Preview perubahan yang akan dilakukan. Menunjukkan resources yang akan dibuat (+), diubah (~), atau dihapus (-). Tidak ada perubahan aktual.</div>
            </div>
            <div class="pipeline-stage" style="border-color:var(--green)">
                <div class="stage-title">terraform apply</div>
                <div class="stage-desc">Eksekusi perubahan sesuai plan. Buat, update, atau hapus resources di cloud. Update state file.</div>
            </div>
            <div class="pipeline-stage" style="border-color:var(--red)">
                <div class="stage-title">terraform destroy</div>
                <div class="stage-desc">Hapus semua resources yang dikelola. Gunakan dengan sangat hati-hati di production!</div>
            </div>
        </div>

        <div class="code-block"><span class="cm"># Workflow standar</span>
$ <span class="fn">terraform init</span>      <span class="cm"># Initialize</span>
$ <span class="fn">terraform plan</span>      <span class="cm"># Preview changes</span>
<span class="cm"># Plan: 3 to add, 1 to change, 0 to destroy.</span>

$ <span class="fn">terraform apply</span>     <span class="cm"># Apply changes</span>
<span class="cm"># Apply complete! Resources: 3 added, 1 changed, 0 destroyed.</span>

$ <span class="fn">terraform output</span>    <span class="cm"># Show output values</span>
<span class="cm"># cluster_endpoint = "https://eks.ap-southeast-1.amazonaws.com/..."</span></div>
    </div>

    <div class="tab-content" data-tab-content="tf-opentofu">
        <h4>OpenTofu &mdash; Fork Open-Source Terraform</h4>
        <p>Sama seperti Vault/OpenBao, setelah perubahan lisensi HashiCorp, komunitas membuat <strong>OpenTofu</strong> sebagai fork open-source di bawah Linux Foundation.</p>

        <div class="card-grid">
            <div class="card" style="border-color:var(--green)">
                <h4 style="color:var(--green)">Kompatibilitas</h4>
                <ul>
                    <li>Drop-in replacement untuk Terraform</li>
                    <li>Syntax HCL identik</li>
                    <li>State file kompatibel</li>
                    <li>Provider ecosystem yang sama</li>
                    <li>Migrasi: ganti binary <code>terraform</code> dengan <code>tofu</code></li>
                </ul>
            </div>
            <div class="card" style="border-color:var(--accent)">
                <h4 style="color:var(--accent)">Fitur Tambahan</h4>
                <ul>
                    <li>Lisensi MPL 2.0 (truly open-source)</li>
                    <li>State encryption (fitur baru)</li>
                    <li>Provider-defined functions</li>
                    <li>Komunitas-driven roadmap</li>
                    <li>Governance transparan</li>
                </ul>
            </div>
        </div>

        <div class="code-block"><span class="cm"># Migrasi dari Terraform ke OpenTofu</span>
$ <span class="fn">brew install opentofu</span>           <span class="cm"># Install OpenTofu</span>
$ <span class="fn">tofu init</span>                        <span class="cm"># Initialize (sama dengan terraform init)</span>
$ <span class="fn">tofu plan</span>                        <span class="cm"># Preview (sama dengan terraform plan)</span>
$ <span class="fn">tofu apply</span>                       <span class="cm"># Apply (sama dengan terraform apply)</span></div>
    </div>
</div>

<!-- How They Work Together -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">Bagaimana HashiCorp Stack Bekerja Bersama</h3>
    <p>Ketiga tool ini dirancang untuk saling melengkapi dalam mengelola infrastruktur cloud-native:</p>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num" style="background:var(--accent3)">1</div>
            <div class="step-text"><strong>Terraform/OpenTofu mem-provision infrastruktur</strong> &mdash; Membuat VPC, VM, Kubernetes cluster, database, load balancer. Semua didefinisikan sebagai kode dan bisa di-reproduce.</div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--green)">2</div>
            <div class="step-text"><strong>Consul melakukan service discovery</strong> &mdash; Setiap service yang di-deploy mendaftar ke Consul. Service lain menemukan lokasi secara dinamis. Consul juga menyediakan service mesh untuk keamanan antar-service.</div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--yellow)">3</div>
            <div class="step-text"><strong>Vault/OpenBao mengelola secrets</strong> &mdash; Terraform menggunakan Vault untuk mendapatkan credentials saat provisioning. Aplikasi menggunakan Vault untuk dynamic database credentials. Consul connect menggunakan Vault PKI untuk certificates.</div>
        </div>
    </div>

    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--accent3)">Terraform<br><small>Provision VMs, K8s, DB</small></div>
        <div class="flow-arrow">&rarr; deploy &rarr;</div>
        <div class="flow-node" style="border-color:var(--green)">Apps + Consul Agent<br><small>Register & Discover</small></div>
        <div class="flow-arrow">&rarr; auth &rarr;</div>
        <div class="flow-node" style="border-color:var(--yellow)">Vault<br><small>Get Dynamic Secrets</small></div>
    </div>

    <div class="success-box">
        <strong>Contoh alur:</strong> Terraform membuat RDS database &rarr; Vault dikonfigurasi dengan credential RDS &rarr; App di K8s autentikasi ke Vault via K8s auth &rarr; Vault generate dynamic DB credential (TTL 1 jam) &rarr; App gunakan credential &rarr; Consul memastikan app ditemukan oleh service lain via DNS.
    </div>
</div>

<!-- ==================== 6. ARCHITECTURE DECISION FLOW ==================== -->
<h2 class="animate-in">6. Architecture Decision Flow</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Kapan Monolith, Kapan Microservices?</h3>
    <p>Tidak ada arsitektur yang cocok untuk semua kasus. Berikut decision tree untuk membantu memilih:</p>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num" style="background:var(--accent)">?</div>
            <div class="step-text"><strong>Apakah tim &lt; 10 developer?</strong>
                <br>&rarr; <span class="badge-green">Ya:</span> Mulai dengan <strong>Modular Monolith</strong>. Overhead microservices tidak worth it untuk tim kecil.
                <br>&rarr; <span class="badge-orange">Tidak:</span> Lanjut ke pertanyaan berikut.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--accent)">?</div>
            <div class="step-text"><strong>Apakah domain sudah well-understood?</strong>
                <br>&rarr; <span class="badge-red">Belum:</span> Mulai <strong>Monolith</strong>. Premature decomposition lebih berbahaya daripada monolith.
                <br>&rarr; <span class="badge-green">Sudah:</span> Microservices bisa dipertimbangkan.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--accent)">?</div>
            <div class="step-text"><strong>Apakah ada kebutuhan scaling independen?</strong>
                <br>&rarr; <span class="badge-green">Ya:</span> Microservices memungkinkan scale per service (misal: search service butuh 10x resource dibanding user service).
                <br>&rarr; <span class="badge-orange">Tidak:</span> Monolith masih cukup.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--accent)">?</div>
            <div class="step-text"><strong>Apakah tim punya expertise DevOps?</strong>
                <br>&rarr; <span class="badge-red">Tidak:</span> Jangan microservices. Overhead operasional (K8s, monitoring, tracing) membutuhkan skill khusus.
                <br>&rarr; <span class="badge-green">Ya:</span> Microservices feasible.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num" style="background:var(--accent)">?</div>
            <div class="step-text"><strong>Apakah perlu polyglot (tech stack berbeda per service)?</strong>
                <br>&rarr; <span class="badge-green">Ya:</span> Microservices memungkinkan setiap tim memilih bahasa/framework terbaik untuk domain mereka.
                <br>&rarr; <span class="badge-orange">Tidak:</span> Pertimbangkan modular monolith.
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Pertimbangan Ukuran Tim</h3>
    <div class="table-wrapper">
        <table>
            <tr>
                <th>Ukuran Tim</th>
                <th>Rekomendasi</th>
                <th>Alasan</th>
            </tr>
            <tr>
                <td><strong>1-5 developer</strong></td>
                <td><span class="badge-green">Monolith</span></td>
                <td>Fokus pada fitur, bukan infrastruktur. Iterasi cepat, deploy sederhana.</td>
            </tr>
            <tr>
                <td><strong>5-15 developer</strong></td>
                <td><span class="badge-blue">Modular Monolith</span></td>
                <td>Mulai memisahkan modul dengan batas jelas. Persiapan untuk decomposition.</td>
            </tr>
            <tr>
                <td><strong>15-50 developer</strong></td>
                <td><span class="badge-orange">Mulai Microservices</span></td>
                <td>Extract service paling critical dulu. Investasi di platform (CI/CD, monitoring). Conway's Law mulai berlaku.</td>
            </tr>
            <tr>
                <td><strong>50+ developer</strong></td>
                <td><span class="badge-purple">Full Microservices</span></td>
                <td>Butuh autonomy antar tim. Platform team mengelola infra. Service mesh, observability stack lengkap.</td>
            </tr>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Anti-Patterns: Kesalahan Umum</h3>
    <div class="card-grid">
        <div class="card" style="border-color:var(--red)">
            <h4 style="color:var(--red)">Distributed Monolith</h4>
            <p>Microservices yang saling tightly-coupled, harus di-deploy bersamaan, dan share database. Mendapat <strong>semua kekurangan</strong> monolith DAN microservices tanpa keuntungan keduanya.</p>
            <p><span class="badge-red">Gejala:</span> Deploy satu service harus deploy 5 service lain. Shared database. Synchronous call chain panjang.</p>
        </div>
        <div class="card" style="border-color:var(--red)">
            <h4 style="color:var(--red)">Premature Decomposition</h4>
            <p>Memecah menjadi microservices sebelum memahami domain. Service boundaries salah, refactoring sangat mahal (harus pindahkan data antar database).</p>
            <p><span class="badge-red">Gejala:</span> Sering merge/split services. Data inconsistency. Tim bingung service mana yang handle apa.</p>
        </div>
    </div>

    <div class="warn-box">
        <strong>Ingat kata Martin Fowler:</strong> "Don't even consider microservices unless you have a system that's too complex to manage as a monolith." Mulailah dengan monolith yang baik, lalu decompose ketika benar-benar diperlukan.
    </div>
</div>

<!-- Summary -->
<div class="card animate-in">
    <h3 style="color:var(--accent)">Ringkasan &mdash; Peta Arsitektur Modern</h3>
    <div class="layer-diagram">
        <div class="layer-item" style="background:rgba(167,139,250,0.12)">
            <div class="layer-num" style="background:var(--accent3);color:#fff">6</div>
            <div class="layer-info">
                <strong style="color:var(--accent3)">Monitoring & Observability</strong>
                <span>Prometheus, Grafana, Jaeger, ELK Stack &mdash; lihat apa yang terjadi di production</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(248,113,113,0.12)">
            <div class="layer-num" style="background:var(--red);color:#fff">5</div>
            <div class="layer-info">
                <strong style="color:var(--red)">Security (DevSecOps)</strong>
                <span>SAST, DAST, Container Scan, Secret Management (Vault) &mdash; keamanan di setiap tahap</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(56,189,248,0.12)">
            <div class="layer-num" style="background:var(--accent);color:#fff">4</div>
            <div class="layer-info">
                <strong style="color:var(--accent)">CI/CD Pipeline</strong>
                <span>Jenkins, GitHub Actions, GitLab CI &mdash; otomasi build, test, deploy</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,191,36,0.12)">
            <div class="layer-num" style="background:var(--yellow);color:#000">3</div>
            <div class="layer-info">
                <strong style="color:var(--yellow)">Orchestration & Service Mesh</strong>
                <span>Kubernetes, Consul Connect, Istio &mdash; manage container dan traffic</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.12)">
            <div class="layer-num" style="background:var(--green);color:#fff">2</div>
            <div class="layer-info">
                <strong style="color:var(--green)">Infrastructure as Code</strong>
                <span>Terraform/OpenTofu &mdash; provision infrastruktur secara deklaratif dan reproducible</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,146,60,0.12)">
            <div class="layer-num" style="background:var(--orange);color:#fff">1</div>
            <div class="layer-info">
                <strong style="color:var(--orange)">Architecture Pattern</strong>
                <span>Monolith &rarr; Modular Monolith &rarr; Microservices &mdash; pilih sesuai konteks tim dan domain</span>
            </div>
        </div>
    </div>
</div>

<div class="info-box animate-in">
    <strong>Referensi:</strong>
    <ul style="margin:0.5rem 0 0">
        <li>NGINX - "Building Microservices: Using an API Gateway" & "Building and Deploying Microservices"</li>
        <li>Martin Fowler - "Microservices" & "MonolithFirst"</li>
        <li>Sam Newman - "Building Microservices" (O'Reilly)</li>
        <li>HashiCorp Documentation - Consul, Vault, Terraform</li>
        <li>OWASP - DevSecOps Guidelines & Top 10</li>
        <li>Chris Richardson - "Microservices Patterns" (Manning)</li>
    </ul>
</div>
`;
