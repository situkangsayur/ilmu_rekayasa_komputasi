// ============================================================
// PARALLEL PROGRAMMING & HIGH PERFORMANCE COMPUTING
// Based on JHU 605.618 & UIUC Heterogeneous Parallel Programming
// ============================================================

sections['parallel'] = () => `
<h1 class="section-title animate-in">Parallel Programming & HPC</h1>
<p class="section-subtitle animate-in">Dari multi-threading hingga GPU computing — menguasai komputasi paralel modern</p>
<p class="animate-in"><em>Ref: JHU 605.618 "Introduction to High Performance Computing"; UIUC ECE 408 "Heterogeneous Parallel Programming"; Pacheco, "An Introduction to Parallel Programming" (2011); Kirk & Hwu, "Programming Massively Parallel Processors" (2016)</em></p>

<!-- ===================== 1. FUNDAMENTALS ===================== -->
<h2 class="animate-in">1. Fundamentals of Parallel Computing</h2>

<div class="card animate-in">
    <h3>Mengapa Parallel Computing?</h3>
    <p>Selama beberapa dekade, kecepatan prosesor meningkat secara eksponensial sesuai <strong>Moore's Law</strong> — jumlah transistor per chip berlipat ganda setiap ~18 bulan. Namun tiga "dinding" menghentikan peningkatan kecepatan single-core:</p>
    <div class="card-grid-3" style="margin-top:15px;">
        <div class="card" style="border-left:4px solid var(--red);">
            <h4>Power Wall</h4>
            <p>Daya (power) meningkat secara kubik terhadap frekuensi: P ~ C &times; V&sup2; &times; f. Frekuensi >4GHz menghasilkan panas berlebihan yang tidak bisa di-dissipate.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--orange);">
            <h4>Memory Wall</h4>
            <p>Kecepatan prosesor meningkat jauh lebih cepat daripada kecepatan memori. Gap ini menyebabkan CPU menunggu data dari RAM — bottleneck yang serius.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--purple);">
            <h4>ILP Wall</h4>
            <p>Instruction-Level Parallelism sudah dimaksimalkan oleh hardware (pipelining, superscalar, out-of-order). Tidak banyak lagi ILP yang bisa diekstrak.</p>
        </div>
    </div>
    <div class="info-box" style="margin-top:15px;">
        <strong>Solusi:</strong> Alih-alih membuat satu core lebih cepat, industri beralih ke <strong>multi-core</strong> dan <strong>many-core</strong>. Dari 2005 ke depan, peningkatan kinerja datang dari paralelisme, bukan clock speed.
    </div>
</div>

<div class="card animate-in">
    <h3>Amdahl's Law vs Gustafson's Law</h3>
    <p>Dua hukum fundamental yang menentukan batas speedup dari paralelisme:</p>

    <div class="card-grid" style="margin-top:15px;">
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4>Amdahl's Law (1967)</h4>
            <p>Speedup dibatasi oleh bagian <strong>serial</strong> dari program:</p>
            <div class="code-block" style="text-align:center;font-size:1.1em;padding:15px;">
                S(n) = 1 / ( (1 - P) + P/n )
            </div>
            <p>Dimana <strong>P</strong> = fraksi yang bisa diparalelkan, <strong>n</strong> = jumlah prosesor.</p>
            <p>Jika P = 0.95 (95% paralel), speedup maksimum = 1/0.05 = <strong>20x</strong>, tak peduli berapa banyak prosesor!</p>
            <div class="warn-box">Pandangan pesimistis: fokus pada bagian serial sebagai bottleneck.</div>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Gustafson's Law (1988)</h4>
            <p>Dengan lebih banyak prosesor, kita bisa menyelesaikan masalah <strong>lebih besar</strong>:</p>
            <div class="code-block" style="text-align:center;font-size:1.1em;padding:15px;">
                S(n) = n - (1 - P) &times; (n - 1)
            </div>
            <p>Ukuran masalah tumbuh bersama jumlah prosesor. Speedup mendekati <strong>linear</strong>!</p>
            <div class="success-box">Pandangan optimistis: masalah nyata sering scalable — lebih banyak data, lebih banyak komputasi.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Amdahl's Law - Kalkulator Interaktif</h3>
    <p>Geser slider untuk melihat bagaimana fraksi paralel mempengaruhi speedup:</p>
    <div class="anim-container">
        <canvas id="amdahlCanvas" width="700" height="380" style="max-width:100%;"></canvas>
        <div class="anim-controls">
            <label>Fraksi Paralel (P): <strong id="amdahlPVal">0.90</strong></label>
            <input type="range" id="amdahlSlider" class="anim-input" min="0" max="99" value="90" style="width:300px;">
            <span class="badge-blue" id="amdahlMaxSpeedup">Max Speedup: 10.0x</span>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Data Parallelism vs Task Parallelism</h3>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4>Data Parallelism</h4>
            <p>Operasi <strong>yang sama</strong> diterapkan ke <strong>elemen data berbeda</strong> secara bersamaan. Contoh: menambahkan dua vektor elemen per elemen.</p>
            <div class="code-block"><span class="cm">// Setiap thread memproses subset data</span>
<span class="kw">for</span> (i = start; i < end; i++)
    C[i] = A[i] + B[i];</div>
            <p><strong>Cocok untuk:</strong> Image processing, matrix operations, scientific simulation, GPU computing.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--purple);">
            <h4>Task Parallelism</h4>
            <p>Tugas <strong>berbeda</strong> dijalankan secara bersamaan pada data yang mungkin sama atau berbeda.</p>
            <div class="code-block"><span class="cm">// Thread 1: compress</span>
<span class="cm">// Thread 2: encrypt</span>
<span class="cm">// Thread 3: upload</span></div>
            <p><strong>Cocok untuk:</strong> Pipeline processing, web server handling, microservices.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Flynn's Taxonomy</h3>
    <p>Michael Flynn (1966) mengklasifikasikan arsitektur komputer berdasarkan jumlah instruction stream dan data stream:</p>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Kategori</th><th>Instruksi</th><th>Data</th><th>Contoh</th><th>Deskripsi</th></tr>
            </thead>
            <tbody>
                <tr><td><span class="badge-blue">SISD</span></td><td>Single</td><td>Single</td><td>CPU klasik (single-core)</td><td>Satu instruksi memproses satu data per waktu. Von Neumann tradisional.</td></tr>
                <tr><td><span class="badge-green">SIMD</span></td><td>Single</td><td>Multiple</td><td>GPU, SSE/AVX, NEON</td><td>Satu instruksi diaplikasikan ke banyak data sekaligus. Ideal untuk vector operations.</td></tr>
                <tr><td><span class="badge-orange">MISD</span></td><td>Multiple</td><td>Single</td><td>Fault-tolerant systems</td><td>Beberapa instruksi berbeda memproses data yang sama. Sangat jarang digunakan.</td></tr>
                <tr><td><span class="badge-purple">MIMD</span></td><td>Multiple</td><td>Multiple</td><td>Multi-core CPU, cluster</td><td>Beberapa instruksi independen memproses data berbeda. Arsitektur paralel paling umum.</td></tr>
            </tbody>
        </table>
    </div>
    <div class="flow-diagram" style="margin-top:15px;">
        <div class="flow-node" style="background:var(--card-bg);border:2px solid var(--accent);">
            <strong>SIMD</strong><br>
            <small>1 Instruction &rarr; N Data Elements</small><br>
            <small>GPU, Vectorized loops</small>
        </div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card-bg);border:2px solid var(--purple);">
            <strong>MIMD</strong><br>
            <small>N Instructions &rarr; N Data</small><br>
            <small>Multi-core, Distributed</small>
        </div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:var(--card-bg);border:2px solid var(--green);">
            <strong>SPMD</strong><br>
            <small>Same Program, Multiple Data</small><br>
            <small>MPI, CUDA kernels</small>
        </div>
    </div>
</div>

<!-- ===================== 2. PROCESSES & THREADS ===================== -->
<h2 class="animate-in">2. Processes & Threads</h2>

<div class="card animate-in">
    <h3>Process vs Thread — Perbandingan Mendalam</h3>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--red);">
            <h4>Process</h4>
            <ul>
                <li>Unit eksekusi independen dengan <strong>address space sendiri</strong></li>
                <li>Setiap process punya code, data, heap, stack terpisah</li>
                <li>Komunikasi via IPC: pipes, sockets, shared memory</li>
                <li>Context switch <strong>mahal</strong> (TLB flush, cache invalidation)</li>
                <li>Crash satu process tidak mempengaruhi yang lain</li>
                <li>Isolasi kuat — cocok untuk keamanan</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Thread</h4>
            <ul>
                <li>Unit eksekusi ringan dalam satu process</li>
                <li>Berbagi code, data, heap; punya <strong>stack sendiri</strong></li>
                <li>Komunikasi langsung via shared memory</li>
                <li>Context switch <strong>lebih murah</strong></li>
                <li>Crash satu thread bisa crash seluruh process</li>
                <li>Perlu sinkronisasi hati-hati (mutex, semaphore)</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Memory Layout: Process vs Thread</h3>
    <div class="layer-diagram">
        <div class="layer-item" style="background:rgba(56,189,248,0.1);border-left:4px solid var(--accent);">
            <strong>Process A</strong> — Address Space Sendiri
            <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;">
                <span class="badge-blue">Code (Text)</span>
                <span class="badge-green">Data (Global)</span>
                <span class="badge-orange">Heap</span>
                <span class="badge-purple">Stack (Main)</span>
                <span class="badge-red">File Descriptors</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.1);border-left:4px solid var(--green);">
            <strong>Thread dalam Process A</strong> — Shared Memory
            <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;">
                <span class="badge-blue">Code (Shared)</span>
                <span class="badge-green">Data (Shared)</span>
                <span class="badge-orange">Heap (Shared)</span>
                <span class="badge-purple">Stack T1</span>
                <span class="badge-purple">Stack T2</span>
                <span class="badge-purple">Stack T3</span>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Thread Scheduling — Animasi Interaktif</h3>
    <p>Visualisasi bagaimana OS scheduler menjadwalkan threads ke CPU cores:</p>
    <div class="anim-container">
        <canvas id="threadSchedCanvas" width="700" height="340" style="max-width:100%;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="threadSchedStart">Play</button>
            <button class="anim-btn" id="threadSchedReset">Reset</button>
            <label>Cores: <select id="threadSchedCores" class="anim-input"><option value="2">2</option><option value="4" selected>4</option><option value="8">8</option></select></label>
            <label>Threads: <select id="threadSchedThreads" class="anim-input"><option value="4">4</option><option value="6" selected>6</option><option value="8">8</option><option value="12">12</option></select></label>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Thread Creation — C, Go, Rust</h3>
    <p>Perbandingan membuat thread di tiga bahasa:</p>
    <div class="tabs">
        <button class="tab-btn active" data-tab="pthread-tab">C (pthreads)</button>
        <button class="tab-btn" data-tab="goroutine-tab">Go (goroutines)</button>
        <button class="tab-btn" data-tab="rust-thread-tab">Rust (std::thread)</button>
    </div>
    <div class="tab-content active" data-tab-content="pthread-tab">
        <div class="code-block"><span class="cm">// C — POSIX Threads (pthreads)</span>
<span class="kw">#include</span> <span class="str">&lt;pthread.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>

<span class="type">void</span>* <span class="fn">worker</span>(<span class="type">void</span>* arg) {
    <span class="type">int</span> id = *(<span class="type">int</span>*)arg;
    <span class="fn">printf</span>(<span class="str">"Thread %d: working...\\n"</span>, id);
    <span class="kw">return</span> <span class="num">NULL</span>;
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">pthread_t</span> threads[<span class="num">4</span>];
    <span class="type">int</span> ids[<span class="num">4</span>];

    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < <span class="num">4</span>; i++) {
        ids[i] = i;
        <span class="fn">pthread_create</span>(&threads[i], <span class="num">NULL</span>, worker, &ids[i]);
    }

    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < <span class="num">4</span>; i++) {
        <span class="fn">pthread_join</span>(threads[i], <span class="num">NULL</span>);
    }

    <span class="fn">printf</span>(<span class="str">"All threads completed.\\n"</span>);
    <span class="kw">return</span> <span class="num">0</span>;
}
<span class="cm">// Compile: gcc -pthread program.c -o program</span></div>
    </div>
    <div class="tab-content" data-tab-content="goroutine-tab">
        <div class="code-block"><span class="cm">// Go — Goroutines (lightweight green threads)</span>
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"sync"</span>
)

<span class="kw">func</span> <span class="fn">worker</span>(id <span class="type">int</span>, wg *<span class="type">sync.WaitGroup</span>) {
    <span class="kw">defer</span> wg.<span class="fn">Done</span>()
    <span class="fn">fmt.Printf</span>(<span class="str">"Goroutine %d: working...\\n"</span>, id)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="kw">var</span> wg <span class="type">sync.WaitGroup</span>

    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">4</span>; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go</span> <span class="fn">worker</span>(i, &wg) <span class="cm">// ~2KB stack, sangat ringan!</span>
    }

    wg.<span class="fn">Wait</span>()
    <span class="fn">fmt.Println</span>(<span class="str">"All goroutines completed."</span>)
}
<span class="cm">// Go runtime: M:N scheduling (M goroutines pada N OS threads)</span></div>
    </div>
    <div class="tab-content" data-tab-content="rust-thread-tab">
        <div class="code-block"><span class="cm">// Rust — std::thread (1:1 OS threads)</span>
<span class="kw">use</span> std::thread;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> <span class="kw">mut</span> handles = <span class="fn">vec!</span>[];

    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">4</span> {
        <span class="kw">let</span> handle = thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            <span class="fn">println!</span>(<span class="str">"Thread {}: working..."</span>, i);
        });
        handles.<span class="fn">push</span>(handle);
    }

    <span class="kw">for</span> handle <span class="kw">in</span> handles {
        handle.<span class="fn">join</span>().<span class="fn">unwrap</span>();
    }

    <span class="fn">println!</span>(<span class="str">"All threads completed."</span>);
}
<span class="cm">// Compiler menjamin: tidak ada data races pada compile time!</span></div>
    </div>
</div>

<div class="card animate-in">
    <h3>Perbandingan Threading Models</h3>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Aspek</th><th>C (pthreads)</th><th>Go (goroutines)</th><th>Rust (std::thread)</th></tr>
            </thead>
            <tbody>
                <tr><td>Mapping</td><td>1:1 (OS thread)</td><td>M:N (green thread)</td><td>1:1 (OS thread)</td></tr>
                <tr><td>Stack Size</td><td>~2-8 MB</td><td>~2 KB (growable)</td><td>~2 MB (configurable)</td></tr>
                <tr><td>Creation Cost</td><td>~50-100 &mu;s</td><td>~1-3 &mu;s</td><td>~50-100 &mu;s</td></tr>
                <tr><td>Max Practical</td><td>~1000-10000</td><td>~1 juta+</td><td>~1000-10000</td></tr>
                <tr><td>Safety</td><td>Manual (programmer)</td><td>Channel-based</td><td>Compile-time guaranteed</td></tr>
                <tr><td>Synchronization</td><td>mutex, semaphore, cond</td><td>channels, WaitGroup</td><td>Mutex, Arc, ownership</td></tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ===================== 3. OpenMP ===================== -->
<h2 class="animate-in">3. Shared Memory Programming — OpenMP</h2>

<div class="card animate-in">
    <h3>OpenMP Overview</h3>
    <p>OpenMP (Open Multi-Processing) adalah API untuk shared-memory parallel programming di C/C++/Fortran. Menggunakan <strong>compiler directives</strong> (#pragma) sehingga mudah ditambahkan ke kode serial yang sudah ada.</p>

    <div class="pipeline" style="margin-top:15px;">
        <div class="pipeline-stage">
            <div class="stage-title">Fork</div>
            <div class="stage-desc">Master thread membuat team of threads</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Parallel Region</div>
            <div class="stage-desc">Semua threads bekerja bersamaan</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Join</div>
            <div class="stage-desc">Threads bergabung kembali ke master</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Pragma Directives Utama</h3>
    <div class="code-block"><span class="cm">// 1. Parallel Region — membuat team of threads</span>
<span class="kw">#pragma omp parallel</span>
{
    <span class="fn">printf</span>(<span class="str">"Hello from thread %d of %d\\n"</span>,
           <span class="fn">omp_get_thread_num</span>(), <span class="fn">omp_get_num_threads</span>());
}

<span class="cm">// 2. Parallel For — distribusi loop iterations ke threads</span>
<span class="kw">#pragma omp parallel for</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++) {
    C[i] = A[i] + B[i]; <span class="cm">// setiap thread mengerjakan subset</span>
}

<span class="cm">// 3. Sections — task parallelism</span>
<span class="kw">#pragma omp parallel sections</span>
{
    <span class="kw">#pragma omp section</span>
    { <span class="fn">compute_part_a</span>(); }

    <span class="kw">#pragma omp section</span>
    { <span class="fn">compute_part_b</span>(); }
}

<span class="cm">// 4. Schedule Clauses</span>
<span class="kw">#pragma omp parallel for schedule(static, 64)</span>   <span class="cm">// chunk size 64</span>
<span class="kw">#pragma omp parallel for schedule(dynamic, 16)</span>  <span class="cm">// dynamic load balance</span>
<span class="kw">#pragma omp parallel for schedule(guided)</span>       <span class="cm">// decreasing chunk size</span></div>
</div>

<div class="card animate-in">
    <h3>Synchronization di OpenMP</h3>
    <div class="code-block"><span class="cm">// === Critical Section ===</span>
<span class="type">int</span> sum = <span class="num">0</span>;
<span class="kw">#pragma omp parallel for</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++) {
    <span class="kw">#pragma omp critical</span>
    {
        sum += A[i]; <span class="cm">// hanya 1 thread pada satu waktu</span>
    }
}

<span class="cm">// === Atomic — lebih efisien dari critical untuk operasi sederhana ===</span>
<span class="type">int</span> counter = <span class="num">0</span>;
<span class="kw">#pragma omp parallel for</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++) {
    <span class="kw">if</span> (A[i] > threshold) {
        <span class="kw">#pragma omp atomic</span>
        counter++;
    }
}

<span class="cm">// === Reduction — cara terbaik untuk aggregation ===</span>
<span class="type">double</span> total = <span class="num">0.0</span>;
<span class="kw">#pragma omp parallel for reduction(+:total)</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++) {
    total += A[i]; <span class="cm">// setiap thread punya salinan lokal, digabung di akhir</span>
}

<span class="cm">// === Barrier — semua threads menunggu di titik ini ===</span>
<span class="kw">#pragma omp parallel</span>
{
    <span class="fn">phase1</span>(); <span class="cm">// semua thread kerjakan phase1</span>
    <span class="kw">#pragma omp barrier</span>
    <span class="fn">phase2</span>(); <span class="cm">// baru lanjut phase2 setelah semua selesai phase1</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Race Condition & Cara Menghindarinya</h3>
    <div class="warn-box">
        <strong>Race Condition</strong> terjadi ketika dua atau lebih threads mengakses shared data secara bersamaan, dan setidaknya satu melakukan write. Hasilnya <strong>non-deterministic</strong> — program bisa benar 99% waktu tapi gagal 1%.
    </div>
    <div class="card-grid" style="margin-top:15px;">
        <div class="card" style="border-left:4px solid var(--red);">
            <h4>Bug: Race Condition</h4>
            <div class="code-block"><span class="type">int</span> count = <span class="num">0</span>;
<span class="kw">#pragma omp parallel for</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < <span class="num">1000000</span>; i++) {
    count++; <span class="cm">// RACE! read-modify-write</span>
}
<span class="cm">// Hasil: bisa 987654, bisa 999231, non-deterministic!</span></div>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Fix: Reduction</h4>
            <div class="code-block"><span class="type">int</span> count = <span class="num">0</span>;
<span class="kw">#pragma omp parallel for reduction(+:count)</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < <span class="num">1000000</span>; i++) {
    count++; <span class="cm">// SAFE! setiap thread punya lokal</span>
}
<span class="cm">// Hasil: selalu 1000000</span></div>
        </div>
    </div>

    <div class="step-list" style="margin-top:15px;">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Identifikasi shared variables</strong> — variabel apa yang diakses oleh multiple threads?</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Tentukan scope</strong> — private (setiap thread punya salinan) atau shared? Gunakan <code>private(x)</code>, <code>firstprivate(x)</code>, <code>shared(x)</code>.</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Gunakan reduction</strong> untuk aggregation, <strong>atomic</strong> untuk operasi tunggal, <strong>critical</strong> untuk blok kode kompleks.</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Test dengan ThreadSanitizer</strong>: <code>gcc -fsanitize=thread</code> mendeteksi race conditions saat runtime.</div></div>
    </div>
</div>

<div class="card animate-in">
    <h3>Contoh Lengkap: Matrix Multiplication dengan OpenMP</h3>
    <div class="code-block"><span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;omp.h&gt;</span>

<span class="kw">#define</span> N <span class="num">1024</span>
<span class="type">double</span> A[N][N], B[N][N], C[N][N];

<span class="type">void</span> <span class="fn">matmul_parallel</span>() {
    <span class="kw">#pragma omp parallel for collapse(2) schedule(static)</span>
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++) {
        <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">0</span>; j < N; j++) {
            <span class="type">double</span> sum = <span class="num">0.0</span>;
            <span class="kw">for</span> (<span class="type">int</span> k = <span class="num">0</span>; k < N; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">double</span> start = <span class="fn">omp_get_wtime</span>();
    <span class="fn">matmul_parallel</span>();
    <span class="type">double</span> elapsed = <span class="fn">omp_get_wtime</span>() - start;
    <span class="fn">printf</span>(<span class="str">"Time: %.3f seconds\\n"</span>, elapsed);
    <span class="kw">return</span> <span class="num">0</span>;
}
<span class="cm">// gcc -fopenmp -O2 matmul.c -o matmul</span>
<span class="cm">// OMP_NUM_THREADS=8 ./matmul</span></div>
</div>

<!-- ===================== 4. MPI ===================== -->
<h2 class="animate-in">4. Distributed Memory — MPI</h2>

<div class="card animate-in">
    <h3>Message Passing Interface (MPI)</h3>
    <p>MPI adalah standar untuk komunikasi antar proses dalam <strong>distributed memory systems</strong>. Setiap proses memiliki memori sendiri dan berkomunikasi melalui <strong>message passing</strong>.</p>
    <div class="info-box">MPI digunakan di hampir semua supercomputer di dunia. Implementasi populer: OpenMPI, MPICH, Intel MPI.</div>
</div>

<div class="card animate-in">
    <h3>Komunikasi MPI — Visual</h3>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4>Point-to-Point</h4>
            <div class="flow-diagram">
                <div class="flow-node" style="background:rgba(56,189,248,0.1);">Process 0<br><small>MPI_Send()</small></div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="background:rgba(52,211,153,0.1);">Process 1<br><small>MPI_Recv()</small></div>
            </div>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Broadcast</h4>
            <div class="flow-diagram" style="flex-wrap:wrap;justify-content:center;">
                <div class="flow-node" style="background:rgba(248,113,113,0.1);">P0 (root)<br><small>MPI_Bcast()</small></div>
                <div class="flow-arrow">&rarr;</div>
                <div style="display:flex;flex-direction:column;gap:5px;">
                    <div class="flow-node" style="background:rgba(52,211,153,0.1);padding:5px 10px;">P1</div>
                    <div class="flow-node" style="background:rgba(52,211,153,0.1);padding:5px 10px;">P2</div>
                    <div class="flow-node" style="background:rgba(52,211,153,0.1);padding:5px 10px;">P3</div>
                </div>
            </div>
        </div>
    </div>

    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--orange);">
            <h4>Scatter / Gather</h4>
            <p><strong>Scatter:</strong> Root membagi data ke semua proses.<br><strong>Gather:</strong> Semua proses mengirim data ke root.</p>
            <div class="flow-diagram">
                <div class="flow-node" style="background:rgba(251,146,60,0.1);">P0: [A,B,C,D]<br><small>MPI_Scatter</small></div>
                <div class="flow-arrow">&harr;</div>
                <div style="display:flex;flex-direction:column;gap:3px;">
                    <span class="badge-blue">P0: [A]</span>
                    <span class="badge-green">P1: [B]</span>
                    <span class="badge-orange">P2: [C]</span>
                    <span class="badge-purple">P3: [D]</span>
                </div>
            </div>
        </div>
        <div class="card" style="border-left:4px solid var(--purple);">
            <h4>Reduce / AllReduce</h4>
            <p><strong>Reduce:</strong> Kombinasi data ke root.<br><strong>AllReduce:</strong> Hasil ke semua proses.</p>
            <div class="flow-diagram">
                <div style="display:flex;flex-direction:column;gap:3px;">
                    <span class="badge-blue">P0: 10</span>
                    <span class="badge-green">P1: 20</span>
                    <span class="badge-orange">P2: 30</span>
                    <span class="badge-purple">P3: 40</span>
                </div>
                <div class="flow-arrow">&rarr; SUM</div>
                <div class="flow-node" style="background:rgba(168,85,247,0.1);">P0: 100<br><small>MPI_Reduce</small></div>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Contoh MPI: Vector Addition</h3>
    <div class="code-block"><span class="kw">#include</span> <span class="str">&lt;mpi.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdlib.h&gt;</span>

<span class="kw">#define</span> TOTAL_SIZE <span class="num">10000</span>

<span class="type">int</span> <span class="fn">main</span>(<span class="type">int</span> argc, <span class="type">char</span>** argv) {
    <span class="type">int</span> rank, size;
    <span class="fn">MPI_Init</span>(&argc, &argv);
    <span class="fn">MPI_Comm_rank</span>(MPI_COMM_WORLD, &rank);
    <span class="fn">MPI_Comm_size</span>(MPI_COMM_WORLD, &size);

    <span class="type">int</span> chunk = TOTAL_SIZE / size;
    <span class="type">double</span> *local_a = <span class="fn">malloc</span>(chunk * <span class="kw">sizeof</span>(<span class="type">double</span>));
    <span class="type">double</span> *local_b = <span class="fn">malloc</span>(chunk * <span class="kw">sizeof</span>(<span class="type">double</span>));
    <span class="type">double</span> *local_c = <span class="fn">malloc</span>(chunk * <span class="kw">sizeof</span>(<span class="type">double</span>));

    <span class="type">double</span> *A = <span class="num">NULL</span>, *B = <span class="num">NULL</span>, *C = <span class="num">NULL</span>;
    <span class="kw">if</span> (rank == <span class="num">0</span>) {
        A = <span class="fn">malloc</span>(TOTAL_SIZE * <span class="kw">sizeof</span>(<span class="type">double</span>));
        B = <span class="fn">malloc</span>(TOTAL_SIZE * <span class="kw">sizeof</span>(<span class="type">double</span>));
        C = <span class="fn">malloc</span>(TOTAL_SIZE * <span class="kw">sizeof</span>(<span class="type">double</span>));
        <span class="cm">// Initialize A and B...</span>
    }

    <span class="cm">// Scatter data ke semua proses</span>
    <span class="fn">MPI_Scatter</span>(A, chunk, MPI_DOUBLE, local_a, chunk, MPI_DOUBLE, <span class="num">0</span>, MPI_COMM_WORLD);
    <span class="fn">MPI_Scatter</span>(B, chunk, MPI_DOUBLE, local_b, chunk, MPI_DOUBLE, <span class="num">0</span>, MPI_COMM_WORLD);

    <span class="cm">// Setiap proses menghitung bagiannya</span>
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < chunk; i++)
        local_c[i] = local_a[i] + local_b[i];

    <span class="cm">// Gather hasil kembali ke root</span>
    <span class="fn">MPI_Gather</span>(local_c, chunk, MPI_DOUBLE, C, chunk, MPI_DOUBLE, <span class="num">0</span>, MPI_COMM_WORLD);

    <span class="kw">if</span> (rank == <span class="num">0</span>) <span class="fn">printf</span>(<span class="str">"Done! C[0] = %.2f\\n"</span>, C[<span class="num">0</span>]);

    <span class="fn">MPI_Finalize</span>();
    <span class="kw">return</span> <span class="num">0</span>;
}
<span class="cm">// Compile: mpicc vector_add.c -o vector_add</span>
<span class="cm">// Run:     mpirun -np 4 ./vector_add</span></div>
</div>

<div class="card animate-in">
    <h3>MPI Communication Patterns</h3>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Function</th><th>Tipe</th><th>Deskripsi</th><th>Blocking?</th></tr>
            </thead>
            <tbody>
                <tr><td><code>MPI_Send / MPI_Recv</code></td><td>Point-to-Point</td><td>Kirim/terima pesan antara dua proses</td><td>Ya</td></tr>
                <tr><td><code>MPI_Isend / MPI_Irecv</code></td><td>Point-to-Point</td><td>Non-blocking send/receive</td><td>Tidak</td></tr>
                <tr><td><code>MPI_Bcast</code></td><td>Collective</td><td>Broadcast data dari root ke semua</td><td>Ya</td></tr>
                <tr><td><code>MPI_Scatter</code></td><td>Collective</td><td>Distribusi data dari root ke semua</td><td>Ya</td></tr>
                <tr><td><code>MPI_Gather</code></td><td>Collective</td><td>Kumpulkan data dari semua ke root</td><td>Ya</td></tr>
                <tr><td><code>MPI_Reduce</code></td><td>Collective</td><td>Reduksi (sum, max, min) ke root</td><td>Ya</td></tr>
                <tr><td><code>MPI_AllReduce</code></td><td>Collective</td><td>Reduce + broadcast hasil ke semua</td><td>Ya</td></tr>
                <tr><td><code>MPI_Barrier</code></td><td>Collective</td><td>Synchronization point</td><td>Ya</td></tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ===================== 5. GPU PROGRAMMING ===================== -->
<h2 class="animate-in">5. GPU Programming</h2>

<div class="card animate-in">
    <h3>CPU vs GPU — Arsitektur</h3>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4>CPU (Latency-Oriented)</h4>
            <ul>
                <li>Sedikit core (4-64), tapi <strong>sangat powerful</strong></li>
                <li>Cache besar (L1, L2, L3)</li>
                <li>Sophisticated branch prediction</li>
                <li>Out-of-order execution</li>
                <li>Optimal untuk: serial, complex logic, branching</li>
            </ul>
            <div class="gpu-grid" style="grid-template-columns:repeat(4,1fr);gap:6px;max-width:200px;">
                <div class="gpu-core active" style="padding:15px;font-size:0.7em;">Core 1</div>
                <div class="gpu-core active" style="padding:15px;font-size:0.7em;">Core 2</div>
                <div class="gpu-core active" style="padding:15px;font-size:0.7em;">Core 3</div>
                <div class="gpu-core active" style="padding:15px;font-size:0.7em;">Core 4</div>
            </div>
            <small>+ Large cache, branch predictor, control logic</small>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>GPU (Throughput-Oriented)</h4>
            <ul>
                <li>Ribuan core kecil (<strong>1000-16000+</strong>)</li>
                <li>Cache kecil per core</li>
                <li>SIMT (Single Instruction, Multiple Threads)</li>
                <li>Massive parallelism, high bandwidth</li>
                <li>Optimal untuk: data-parallel, matrix ops, graphics</li>
            </ul>
            <div class="gpu-grid" style="grid-template-columns:repeat(16,1fr);gap:2px;max-width:350px;">
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
                <div class="gpu-core active" style="padding:3px;font-size:0.5em;"></div>
            </div>
            <small>Ribuan core kecil, high memory bandwidth</small>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>CUDA Programming Model — Grid, Block, Thread</h3>
    <p>CUDA mengorganisir threads dalam hierarki 3 level:</p>
    <div class="layer-diagram" style="margin-top:10px;">
        <div class="layer-item" style="background:rgba(248,113,113,0.08);border-left:4px solid var(--red);">
            <strong>Grid</strong> — Kumpulan semua blocks yang menjalankan satu kernel
            <p>Dimensi: gridDim.x, gridDim.y, gridDim.z</p>
        </div>
        <div class="layer-item" style="background:rgba(251,146,60,0.08);border-left:4px solid var(--orange);">
            <strong>Block</strong> — Kumpulan threads yang bisa saling sinkronisasi
            <p>Dimensi: blockDim.x, blockDim.y, blockDim.z | Max 1024 threads per block</p>
            <p>Threads dalam satu block bisa berbagi <strong>shared memory</strong> dan menggunakan <code>__syncthreads()</code></p>
        </div>
        <div class="layer-item" style="background:rgba(56,189,248,0.08);border-left:4px solid var(--accent);">
            <strong>Thread</strong> — Unit eksekusi terkecil
            <p>Identitas: threadIdx.x, threadIdx.y, threadIdx.z</p>
            <p>Global ID: blockIdx.x * blockDim.x + threadIdx.x</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>GPU Kernel Execution — Animasi Interaktif</h3>
    <p>Visualisasi hierarki Grid &rarr; Block &rarr; Thread pada GPU:</p>
    <div class="anim-container">
        <canvas id="gpuKernelCanvas" width="700" height="420" style="max-width:100%;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="gpuKernelStart">Play</button>
            <button class="anim-btn" id="gpuKernelReset">Reset</button>
            <label>Grid: <select id="gpuGridSize" class="anim-input"><option value="2">2x2</option><option value="3" selected>3x3</option><option value="4">4x4</option></select></label>
            <label>Block: <select id="gpuBlockSize" class="anim-input"><option value="2">2x2</option><option value="4" selected>4x4</option><option value="8">8x8</option></select></label>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>CUDA Memory Hierarchy</h3>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Memory Type</th><th>Scope</th><th>Lifetime</th><th>Speed</th><th>Size</th></tr>
            </thead>
            <tbody>
                <tr><td><span class="badge-red">Register</span></td><td>Per thread</td><td>Thread</td><td>Tercepat (~1 cycle)</td><td>~255 per thread</td></tr>
                <tr><td><span class="badge-orange">Shared Memory</span></td><td>Per block</td><td>Block</td><td>Sangat cepat (~5 cycles)</td><td>48-164 KB per SM</td></tr>
                <tr><td><span class="badge-blue">L1/L2 Cache</span></td><td>Per SM / Device</td><td>Varies</td><td>Cepat</td><td>128 KB L1, 6 MB L2</td></tr>
                <tr><td><span class="badge-purple">Constant Memory</span></td><td>All threads</td><td>Application</td><td>Cached (~1 cycle if hit)</td><td>64 KB</td></tr>
                <tr><td><span class="badge-green">Global Memory</span></td><td>All threads</td><td>Application</td><td>Lambat (~400-600 cycles)</td><td>8-80 GB (HBM)</td></tr>
            </tbody>
        </table>
    </div>
    <div class="warn-box" style="margin-top:10px;">
        <strong>Key insight:</strong> Optimasi CUDA sebagian besar adalah tentang <strong>memory management</strong>. Minimasi akses global memory, maksimalkan shared memory usage. Gunakan <strong>coalesced access patterns</strong> untuk memory bandwidth optimal.
    </div>
</div>

<div class="card animate-in">
    <h3>CUDA Kernel: Vector Addition</h3>
    <div class="code-block"><span class="cm">// CUDA kernel — berjalan di GPU</span>
<span class="kw">__global__</span> <span class="type">void</span> <span class="fn">vectorAdd</span>(<span class="type">float</span>* A, <span class="type">float</span>* B, <span class="type">float</span>* C, <span class="type">int</span> N) {
    <span class="type">int</span> i = blockIdx.x * blockDim.x + threadIdx.x;
    <span class="kw">if</span> (i < N) {
        C[i] = A[i] + B[i];
    }
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">int</span> N = <span class="num">1000000</span>;
    <span class="type">size_t</span> bytes = N * <span class="kw">sizeof</span>(<span class="type">float</span>);

    <span class="cm">// Host memory (CPU)</span>
    <span class="type">float</span> *h_A = (<span class="type">float</span>*)<span class="fn">malloc</span>(bytes);
    <span class="type">float</span> *h_B = (<span class="type">float</span>*)<span class="fn">malloc</span>(bytes);
    <span class="type">float</span> *h_C = (<span class="type">float</span>*)<span class="fn">malloc</span>(bytes);

    <span class="cm">// Device memory (GPU)</span>
    <span class="type">float</span> *d_A, *d_B, *d_C;
    <span class="fn">cudaMalloc</span>(&d_A, bytes);
    <span class="fn">cudaMalloc</span>(&d_B, bytes);
    <span class="fn">cudaMalloc</span>(&d_C, bytes);

    <span class="cm">// Copy data: Host → Device</span>
    <span class="fn">cudaMemcpy</span>(d_A, h_A, bytes, cudaMemcpyHostToDevice);
    <span class="fn">cudaMemcpy</span>(d_B, h_B, bytes, cudaMemcpyHostToDevice);

    <span class="cm">// Launch kernel</span>
    <span class="type">int</span> threadsPerBlock = <span class="num">256</span>;
    <span class="type">int</span> blocksPerGrid = (N + threadsPerBlock - <span class="num">1</span>) / threadsPerBlock;
    <span class="fn">vectorAdd</span>&lt;&lt;&lt;blocksPerGrid, threadsPerBlock&gt;&gt;&gt;(d_A, d_B, d_C, N);

    <span class="cm">// Copy result: Device → Host</span>
    <span class="fn">cudaMemcpy</span>(h_C, d_C, bytes, cudaMemcpyDeviceToHost);

    <span class="cm">// Cleanup</span>
    <span class="fn">cudaFree</span>(d_A); <span class="fn">cudaFree</span>(d_B); <span class="fn">cudaFree</span>(d_C);
    <span class="fn">free</span>(h_A); <span class="fn">free</span>(h_B); <span class="fn">free</span>(h_C);
    <span class="kw">return</span> <span class="num">0</span>;
}
<span class="cm">// nvcc vector_add.cu -o vector_add</span></div>
</div>

<div class="card animate-in">
    <h3>CUDA: Matrix Multiplication (Tiled, Shared Memory)</h3>
    <div class="code-block"><span class="kw">#define</span> TILE_SIZE <span class="num">16</span>

<span class="kw">__global__</span> <span class="type">void</span> <span class="fn">matMulTiled</span>(<span class="type">float</span>* A, <span class="type">float</span>* B, <span class="type">float</span>* C, <span class="type">int</span> N) {
    <span class="cm">// Shared memory untuk tile</span>
    <span class="kw">__shared__</span> <span class="type">float</span> tileA[TILE_SIZE][TILE_SIZE];
    <span class="kw">__shared__</span> <span class="type">float</span> tileB[TILE_SIZE][TILE_SIZE];

    <span class="type">int</span> row = blockIdx.y * TILE_SIZE + threadIdx.y;
    <span class="type">int</span> col = blockIdx.x * TILE_SIZE + threadIdx.x;
    <span class="type">float</span> sum = <span class="num">0.0f</span>;

    <span class="kw">for</span> (<span class="type">int</span> t = <span class="num">0</span>; t < N / TILE_SIZE; t++) {
        <span class="cm">// Load tile ke shared memory (kooperatif)</span>
        tileA[threadIdx.y][threadIdx.x] = A[row * N + t * TILE_SIZE + threadIdx.x];
        tileB[threadIdx.y][threadIdx.x] = B[(t * TILE_SIZE + threadIdx.y) * N + col];
        <span class="fn">__syncthreads</span>(); <span class="cm">// tunggu semua thread load selesai</span>

        <span class="cm">// Compute partial dot product dari tile</span>
        <span class="kw">for</span> (<span class="type">int</span> k = <span class="num">0</span>; k < TILE_SIZE; k++)
            sum += tileA[threadIdx.y][k] * tileB[k][threadIdx.x];
        <span class="fn">__syncthreads</span>(); <span class="cm">// tunggu sebelum load tile berikutnya</span>
    }

    C[row * N + col] = sum;
}
<span class="cm">// Tiling mengurangi global memory access dari O(N) ke O(N/TILE_SIZE) per elemen!</span></div>
    <div class="success-box" style="margin-top:10px;">
        <strong>Kenapa Tiling?</strong> Global memory access ~400 cycles. Shared memory ~5 cycles. Dengan tile 16x16, setiap elemen digunakan 16 kali dari shared memory alih-alih global memory. Speedup bisa <strong>10-50x</strong> dibanding naive implementation.
    </div>
</div>

<div class="card animate-in">
    <h3>OpenCL & OpenACC</h3>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4>OpenCL</h4>
            <p>Standar terbuka untuk heterogeneous computing. Berjalan di GPU NVIDIA, AMD, Intel, dan bahkan FPGA.</p>
            <div class="code-block"><span class="cm">// OpenCL kernel (mirip CUDA tapi portable)</span>
<span class="kw">__kernel</span> <span class="type">void</span> <span class="fn">vectorAdd</span>(
    <span class="kw">__global</span> <span class="type">float</span>* A,
    <span class="kw">__global</span> <span class="type">float</span>* B,
    <span class="kw">__global</span> <span class="type">float</span>* C,
    <span class="type">int</span> N) {
    <span class="type">int</span> i = <span class="fn">get_global_id</span>(<span class="num">0</span>);
    <span class="kw">if</span> (i < N) C[i] = A[i] + B[i];
}</div>
            <p>Terminologi: work-item = thread, work-group = block, NDRange = grid</p>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>OpenACC</h4>
            <p>Directive-based GPU programming — seperti OpenMP untuk GPU. Sangat mudah digunakan.</p>
            <div class="code-block"><span class="cm">// OpenACC — hanya tambahkan pragma!</span>
<span class="kw">#pragma acc parallel loop</span>
<span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++) {
    C[i] = A[i] + B[i];
}

<span class="cm">// Data management eksplisit</span>
<span class="kw">#pragma acc data copyin(A[0:N], B[0:N]) copyout(C[0:N])</span>
{
    <span class="kw">#pragma acc parallel loop</span>
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < N; i++)
        C[i] = A[i] + B[i];
}</div>
        </div>
    </div>
</div>

<!-- ===================== 6. HETEROGENEOUS ===================== -->
<h2 class="animate-in">6. Heterogeneous Parallel Programming</h2>

<div class="card animate-in">
    <h3>CPU + GPU Cooperation</h3>
    <p>Dalam heterogeneous computing, CPU (host) dan GPU (device) bekerja bersama. CPU mengatur kontrol flow dan launching kernels, GPU melakukan komputasi masif.</p>

    <div class="pipeline" style="margin-top:15px;">
        <div class="pipeline-stage">
            <div class="stage-title">1. Allocate</div>
            <div class="stage-desc">cudaMalloc() — alokasi GPU memory</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">2. Transfer H&rarr;D</div>
            <div class="stage-desc">cudaMemcpy() Host to Device</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">3. Compute</div>
            <div class="stage-desc">kernel&lt;&lt;&lt;grid,block&gt;&gt;&gt;()</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">4. Transfer D&rarr;H</div>
            <div class="stage-desc">cudaMemcpy() Device to Host</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">5. Free</div>
            <div class="stage-desc">cudaFree()</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Memory Management Strategies</h3>
    <div class="card-grid-3" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--red);">
            <h4>Explicit Transfer</h4>
            <p>Programmer mengatur semua data transfer manual. Kontrol penuh tapi verbose.</p>
            <div class="code-block"><span class="fn">cudaMemcpy</span>(d_A, h_A, size,
    cudaMemcpyHostToDevice);
<span class="cm">// ... kernel ...</span>
<span class="fn">cudaMemcpy</span>(h_C, d_C, size,
    cudaMemcpyDeviceToHost);</div>
        </div>
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Pinned Memory</h4>
            <p>Host memory yang tidak bisa di-page out. Transfer lebih cepat via DMA.</p>
            <div class="code-block"><span class="fn">cudaMallocHost</span>(&h_A, size);
<span class="cm">// Transfer 2x lebih cepat</span>
<span class="cm">// karena bypass OS paging</span></div>
        </div>
        <div class="card" style="border-left:4px solid var(--purple);">
            <h4>Unified Memory</h4>
            <p>CUDA 6.0+: satu pointer untuk CPU dan GPU. Driver mengelola migrasi otomatis.</p>
            <div class="code-block"><span class="fn">cudaMallocManaged</span>(&data, size);
<span class="cm">// Gunakan di CPU dan GPU!</span>
<span class="cm">// Driver migrasi otomatis</span>
data[<span class="num">0</span>] = <span class="num">42</span>; <span class="cm">// CPU access</span>
kernel&lt;&lt;&lt;...&gt;&gt;&gt;(data); <span class="cm">// GPU</span></div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>CUDA Streams & Async Operations</h3>
    <p>Streams memungkinkan <strong>overlap</strong> antara data transfer dan kernel execution:</p>
    <div class="code-block"><span class="type">cudaStream_t</span> stream1, stream2;
<span class="fn">cudaStreamCreate</span>(&stream1);
<span class="fn">cudaStreamCreate</span>(&stream2);

<span class="cm">// Stream 1: transfer + compute chunk 1</span>
<span class="fn">cudaMemcpyAsync</span>(d_A1, h_A1, size/2, cudaMemcpyHostToDevice, stream1);
kernel&lt;&lt;&lt;grid, block, <span class="num">0</span>, stream1&gt;&gt;&gt;(d_A1, d_C1);
<span class="fn">cudaMemcpyAsync</span>(h_C1, d_C1, size/2, cudaMemcpyDeviceToHost, stream1);

<span class="cm">// Stream 2: transfer + compute chunk 2 (overlap!)</span>
<span class="fn">cudaMemcpyAsync</span>(d_A2, h_A2, size/2, cudaMemcpyHostToDevice, stream2);
kernel&lt;&lt;&lt;grid, block, <span class="num">0</span>, stream2&gt;&gt;&gt;(d_A2, d_C2);
<span class="fn">cudaMemcpyAsync</span>(h_C2, d_C2, size/2, cudaMemcpyDeviceToHost, stream2);

<span class="fn">cudaStreamSynchronize</span>(stream1);
<span class="fn">cudaStreamSynchronize</span>(stream2);</div>
    <div class="thread-vis" style="margin-top:15px;">
        <div class="thread-lane">
            <div class="lane-title">Stream 1</div>
            <div class="thread-block io" style="width:60px;">H&rarr;D</div>
            <div class="thread-block compute" style="width:100px;">Kernel</div>
            <div class="thread-block io" style="width:60px;">D&rarr;H</div>
        </div>
        <div class="thread-lane">
            <div class="lane-title">Stream 2</div>
            <div class="thread-block idle" style="width:30px;"></div>
            <div class="thread-block io" style="width:60px;">H&rarr;D</div>
            <div class="thread-block compute" style="width:100px;">Kernel</div>
            <div class="thread-block io" style="width:60px;">D&rarr;H</div>
        </div>
    </div>
</div>

<!-- ===================== 7. PARALLEL ALGORITHMS ===================== -->
<h2 class="animate-in">7. Parallel Algorithms & Patterns</h2>

<div class="card animate-in">
    <h3>Parallel Reduction</h3>
    <p>Mengkombinasikan N elemen menjadi satu nilai (sum, max, min) secara paralel. Kompleksitas: O(log N) steps dengan N/2 threads.</p>
    <div class="code-block"><span class="cm">// CUDA Parallel Reduction (sum)</span>
<span class="kw">__global__</span> <span class="type">void</span> <span class="fn">reduce</span>(<span class="type">float</span>* input, <span class="type">float</span>* output, <span class="type">int</span> N) {
    <span class="kw">__shared__</span> <span class="type">float</span> sdata[<span class="num">256</span>];
    <span class="type">int</span> tid = threadIdx.x;
    <span class="type">int</span> i = blockIdx.x * blockDim.x + threadIdx.x;

    sdata[tid] = (i < N) ? input[i] : <span class="num">0</span>;
    <span class="fn">__syncthreads</span>();

    <span class="cm">// Reduction in shared memory</span>
    <span class="kw">for</span> (<span class="type">int</span> s = blockDim.x / <span class="num">2</span>; s > <span class="num">0</span>; s >>= <span class="num">1</span>) {
        <span class="kw">if</span> (tid < s) {
            sdata[tid] += sdata[tid + s];
        }
        <span class="fn">__syncthreads</span>();
    }

    <span class="kw">if</span> (tid == <span class="num">0</span>) output[blockIdx.x] = sdata[<span class="num">0</span>];
}</div>
    <div class="step-list" style="margin-top:10px;">
        <div class="step-item"><div class="step-num">1</div><div class="step-text">Step 0: [1,2,3,4,5,6,7,8] &rarr; 8 elemen, N/2 = 4 threads aktif</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text">Step 1: [3,_,7,_,11,_,15,_] &rarr; stride=1, pairs: (1+2), (3+4), (5+6), (7+8)</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text">Step 2: [10,_,_,_,26,_,_,_] &rarr; stride=2, pairs: (3+7), (11+15)</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text">Step 3: [36,_,_,_,_,_,_,_] &rarr; stride=4, final sum: 10+26 = 36</div></div>
    </div>
</div>

<div class="card animate-in">
    <h3>Parallel Scan (Prefix Sum)</h3>
    <p>Prefix sum: diberikan [a0, a1, a2, ..., an], hasilkan [a0, a0+a1, a0+a1+a2, ...]. Sangat penting untuk sorting, stream compaction, histogram.</p>
    <div class="code-block"><span class="cm">// Inclusive Scan — Hillis & Steele algorithm</span>
<span class="cm">// Input:  [3, 1, 7, 0, 4, 1, 6, 3]</span>
<span class="cm">// Output: [3, 4, 11, 11, 15, 16, 22, 25]</span>

<span class="cm">// Step d=0 (stride=1): add element i with i-1</span>
<span class="cm">//   [3, 4, 8, 7, 4, 5, 7, 9]</span>
<span class="cm">// Step d=1 (stride=2): add element i with i-2</span>
<span class="cm">//   [3, 4, 11, 11, 12, 12, 11, 14]</span>
<span class="cm">// Step d=2 (stride=4): add element i with i-4</span>
<span class="cm">//   [3, 4, 11, 11, 15, 16, 22, 25]</span>

<span class="cm">// Work complexity: O(N log N), Step complexity: O(log N)</span></div>
</div>

<div class="card animate-in">
    <h3>Parallel Design Patterns</h3>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4>Map-Reduce</h4>
            <p><strong>Map:</strong> Terapkan fungsi ke setiap elemen secara independen.<br><strong>Reduce:</strong> Kombinasikan hasil menjadi satu nilai.</p>
            <div class="flow-diagram">
                <div class="flow-node">Data[N]</div>
                <div class="flow-arrow">&rarr; Map</div>
                <div class="flow-node">f(x)[N]</div>
                <div class="flow-arrow">&rarr; Reduce</div>
                <div class="flow-node">Result</div>
            </div>
            <p>Contoh: Word count di Hadoop/Spark. Map mengekstrak kata, Reduce menghitung frekuensi.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--orange);">
            <h4>Producer-Consumer</h4>
            <p>Producer memasukkan data ke buffer, Consumer mengambil dan memprosesnya. Decoupling antara produksi dan konsumsi.</p>
            <div class="flow-diagram">
                <div class="flow-node">Producer</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-color:var(--orange);">Buffer (Queue)</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node">Consumer</div>
            </div>
        </div>
    </div>
    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Pipeline Parallelism</h4>
            <p>Data mengalir melalui stages, setiap stage diproses oleh thread berbeda secara bersamaan.</p>
            <div class="pipeline">
                <div class="pipeline-stage"><div class="stage-title">Stage 1</div><div class="stage-desc">Decode</div></div>
                <div class="pipeline-stage"><div class="stage-title">Stage 2</div><div class="stage-desc">Transform</div></div>
                <div class="pipeline-stage"><div class="stage-title">Stage 3</div><div class="stage-desc">Encode</div></div>
                <div class="pipeline-stage"><div class="stage-title">Stage 4</div><div class="stage-desc">Output</div></div>
            </div>
        </div>
        <div class="card" style="border-left:4px solid var(--purple);">
            <h4>Fork-Join</h4>
            <p>Fork: membagi pekerjaan ke sub-tasks.<br>Join: menunggu semua sub-tasks selesai sebelum melanjutkan.</p>
            <div class="flow-diagram">
                <div class="flow-node">Main</div>
                <div class="flow-arrow">&rarr; Fork</div>
                <div style="display:flex;flex-direction:column;gap:5px;">
                    <div class="flow-node" style="padding:5px 10px;">Task A</div>
                    <div class="flow-node" style="padding:5px 10px;">Task B</div>
                    <div class="flow-node" style="padding:5px 10px;">Task C</div>
                </div>
                <div class="flow-arrow">&rarr; Join</div>
                <div class="flow-node">Main</div>
            </div>
        </div>
    </div>
</div>

<!-- ===================== 8. PERFORMANCE ANALYSIS ===================== -->
<h2 class="animate-in">8. Performance Analysis</h2>

<div class="card animate-in">
    <h3>Metrik Performa Parallel Computing</h3>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Metrik</th><th>Formula</th><th>Penjelasan</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Speedup</strong></td><td>S(p) = T<sub>serial</sub> / T<sub>parallel</sub>(p)</td><td>Berapa kali lebih cepat dengan p prosesor</td></tr>
                <tr><td><strong>Efficiency</strong></td><td>E(p) = S(p) / p</td><td>Utilisasi prosesor. Ideal = 1.0 (100%)</td></tr>
                <tr><td><strong>Scalability</strong></td><td>Strong: fixed problem, more proc<br>Weak: problem grows with proc</td><td>Strong scaling: same problem, faster.<br>Weak scaling: bigger problem, same time.</td></tr>
                <tr><td><strong>FLOPS</strong></td><td>Floating-point operations / second</td><td>Throughput komputasi. GPU: TeraFLOPS</td></tr>
                <tr><td><strong>Bandwidth</strong></td><td>Bytes transferred / second</td><td>Throughput memori. GPU HBM: ~3 TB/s</td></tr>
                <tr><td><strong>Arithmetic Intensity</strong></td><td>FLOP / Bytes accessed</td><td>Rasio compute vs memory. Roofline model.</td></tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Cache Coherency — MESI Protocol</h3>
    <p>Dalam multi-core systems, setiap core punya cache sendiri. <strong>MESI protocol</strong> menjaga konsistensi data antar cache:</p>
    <div class="card-grid-3" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--green);">
            <h4><span class="badge-green">M</span> Modified</h4>
            <p>Data ada di cache ini saja dan <strong>sudah diubah</strong>. Belum ditulis ke memori utama.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--accent);">
            <h4><span class="badge-blue">E</span> Exclusive</h4>
            <p>Data ada di cache ini saja tapi <strong>belum diubah</strong>. Sama dengan memori utama.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--orange);">
            <h4><span class="badge-orange">S</span> Shared</h4>
            <p>Data ada di <strong>beberapa cache</strong> sekaligus. Read-only. Sama dengan memori utama.</p>
        </div>
    </div>
    <div class="card" style="border-left:4px solid var(--red);margin-top:10px;">
        <h4><span class="badge-red">I</span> Invalid</h4>
        <p>Cache line sudah <strong>tidak valid</strong>. Data mungkin sudah diubah oleh core lain.</p>
    </div>
    <div class="warn-box" style="margin-top:10px;">
        <strong>False Sharing:</strong> Ketika dua threads mengakses variabel berbeda yang berada di <strong>cache line yang sama</strong> (biasanya 64 bytes), MESI protocol memaksa cache invalidation bolak-balik. Solusi: padding data agar variabel berada di cache line terpisah.
    </div>
</div>

<div class="card animate-in">
    <h3>Profiling Tools</h3>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Tool</th><th>Platform</th><th>Kegunaan</th></tr>
            </thead>
            <tbody>
                <tr><td><code>perf</code></td><td>Linux</td><td>CPU profiling, cache misses, branch mispredictions</td></tr>
                <tr><td><code>gprof</code></td><td>Linux</td><td>Function-level profiling, call graph</td></tr>
                <tr><td><code>Valgrind (Helgrind)</code></td><td>Linux</td><td>Thread error detection, race conditions</td></tr>
                <tr><td><code>Intel VTune</code></td><td>Cross-platform</td><td>Advanced CPU profiling, memory analysis</td></tr>
                <tr><td><code>NVIDIA Nsight</code></td><td>CUDA</td><td>GPU kernel profiling, memory analysis</td></tr>
                <tr><td><code>nvprof / ncu</code></td><td>CUDA</td><td>CUDA kernel metrics, occupancy, bandwidth</td></tr>
                <tr><td><code>Go pprof</code></td><td>Go</td><td>CPU, memory, goroutine profiling</td></tr>
                <tr><td><code>cargo flamegraph</code></td><td>Rust</td><td>Flame graphs untuk Rust programs</td></tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ===================== 9. GO CONCURRENCY ===================== -->
<h2 class="animate-in">9. Go Concurrency Model</h2>

<div class="card animate-in">
    <h3>Goroutines vs OS Threads</h3>
    <p>Go menggunakan model <strong>CSP (Communicating Sequential Processes)</strong> oleh Tony Hoare. Filosofi: <em>"Don't communicate by sharing memory; share memory by communicating."</em></p>

    <div class="card-grid" style="margin-top:10px;">
        <div class="card" style="border-left:4px solid var(--green);">
            <h4>Goroutine</h4>
            <ul>
                <li>Stack awal: ~2 KB (growable hingga 1 GB)</li>
                <li>Dijadwalkan oleh <strong>Go runtime</strong> (bukan OS)</li>
                <li>M:N scheduling — M goroutines pada N OS threads</li>
                <li>Creation cost: ~1-3 &mu;s</li>
                <li>Bisa spawn 1 juta+ goroutines</li>
                <li>Kooperatif preemption (Go 1.14+: asynchronous preemption)</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid var(--red);">
            <h4>OS Thread</h4>
            <ul>
                <li>Stack: 1-8 MB (fixed)</li>
                <li>Dijadwalkan oleh <strong>OS kernel</strong></li>
                <li>1:1 mapping ke kernel thread</li>
                <li>Creation cost: ~50-100 &mu;s</li>
                <li>Practical limit: ~10K threads</li>
                <li>Preemptive scheduling oleh OS</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Channels — Komunikasi antar Goroutines</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="unbuf-chan">Unbuffered Channel</button>
        <button class="tab-btn" data-tab="buf-chan">Buffered Channel</button>
        <button class="tab-btn" data-tab="select-chan">Select Statement</button>
    </div>
    <div class="tab-content active" data-tab-content="unbuf-chan">
        <div class="code-block"><span class="cm">// Unbuffered Channel — synchronous communication</span>
<span class="cm">// Sender blocks sampai receiver siap, dan sebaliknya</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">string</span>) <span class="cm">// unbuffered</span>

    <span class="kw">go</span> <span class="kw">func</span>() {
        ch &lt;- <span class="str">"hello"</span>  <span class="cm">// blocks sampai ada receiver</span>
        <span class="fn">fmt.Println</span>(<span class="str">"sent"</span>)
    }()

    msg := &lt;-ch <span class="cm">// blocks sampai ada sender</span>
    <span class="fn">fmt.Println</span>(<span class="str">"received:"</span>, msg)
}
<span class="cm">// Output: received: hello</span>
<span class="cm">//         sent</span></div>
    </div>
    <div class="tab-content" data-tab-content="buf-chan">
        <div class="code-block"><span class="cm">// Buffered Channel — asynchronous (sampai buffer penuh)</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">3</span>) <span class="cm">// buffer size 3</span>

    ch &lt;- <span class="num">1</span> <span class="cm">// tidak block (buffer belum penuh)</span>
    ch &lt;- <span class="num">2</span> <span class="cm">// tidak block</span>
    ch &lt;- <span class="num">3</span> <span class="cm">// tidak block</span>
    <span class="cm">// ch &lt;- 4  // BLOCK! buffer penuh, perlu consumer</span>

    <span class="fn">fmt.Println</span>(&lt;-ch) <span class="cm">// 1 (FIFO)</span>
    <span class="fn">fmt.Println</span>(&lt;-ch) <span class="cm">// 2</span>
    <span class="fn">fmt.Println</span>(&lt;-ch) <span class="cm">// 3</span>
}</div>
    </div>
    <div class="tab-content" data-tab-content="select-chan">
        <div class="code-block"><span class="cm">// Select — multiplexing pada multiple channels</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    ch1 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">string</span>)
    ch2 := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">string</span>)

    <span class="kw">go</span> <span class="kw">func</span>() {
        time.<span class="fn">Sleep</span>(<span class="num">1</span> * time.Second)
        ch1 &lt;- <span class="str">"from ch1"</span>
    }()
    <span class="kw">go</span> <span class="kw">func</span>() {
        time.<span class="fn">Sleep</span>(<span class="num">2</span> * time.Second)
        ch2 &lt;- <span class="str">"from ch2"</span>
    }()

    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">2</span>; i++ {
        <span class="kw">select</span> {
        <span class="kw">case</span> msg := &lt;-ch1:
            <span class="fn">fmt.Println</span>(msg)
        <span class="kw">case</span> msg := &lt;-ch2:
            <span class="fn">fmt.Println</span>(msg)
        <span class="kw">case</span> &lt;-time.<span class="fn">After</span>(<span class="num">3</span> * time.Second):
            <span class="fn">fmt.Println</span>(<span class="str">"timeout!"</span>)
        }
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3>WaitGroup & Mutex</h3>
    <div class="code-block"><span class="cm">// WaitGroup — menunggu sekumpulan goroutines selesai</span>
<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="kw">var</span> wg <span class="type">sync.WaitGroup</span>
    <span class="kw">var</span> mu <span class="type">sync.Mutex</span>
    counter := <span class="num">0</span>

    <span class="kw">for</span> i := <span class="num">0</span>; i < <span class="num">1000</span>; i++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go</span> <span class="kw">func</span>() {
            <span class="kw">defer</span> wg.<span class="fn">Done</span>()
            mu.<span class="fn">Lock</span>()
            counter++ <span class="cm">// protected by mutex</span>
            mu.<span class="fn">Unlock</span>()
        }()
    }

    wg.<span class="fn">Wait</span>()
    <span class="fn">fmt.Println</span>(<span class="str">"Counter:"</span>, counter) <span class="cm">// selalu 1000</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Pattern: Fan-Out / Fan-In</h3>
    <div class="code-block"><span class="cm">// Fan-Out: satu producer, banyak workers</span>
<span class="cm">// Fan-In: banyak workers, satu collector</span>

<span class="kw">func</span> <span class="fn">producer</span>(jobs <span class="kw">chan</span>&lt;- <span class="type">int</span>, n <span class="type">int</span>) {
    <span class="kw">for</span> i := <span class="num">0</span>; i < n; i++ {
        jobs &lt;- i
    }
    <span class="fn">close</span>(jobs)
}

<span class="kw">func</span> <span class="fn">worker</span>(id <span class="type">int</span>, jobs &lt;-<span class="kw">chan</span> <span class="type">int</span>, results <span class="kw">chan</span>&lt;- <span class="type">int</span>) {
    <span class="kw">for</span> j := <span class="kw">range</span> jobs {
        results &lt;- j * j <span class="cm">// compute square</span>
    }
}

<span class="kw">func</span> <span class="fn">main</span>() {
    jobs := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">100</span>)
    results := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">100</span>)

    <span class="cm">// Fan-Out: 5 workers</span>
    <span class="kw">var</span> wg <span class="type">sync.WaitGroup</span>
    <span class="kw">for</span> w := <span class="num">0</span>; w < <span class="num">5</span>; w++ {
        wg.<span class="fn">Add</span>(<span class="num">1</span>)
        <span class="kw">go</span> <span class="kw">func</span>(id <span class="type">int</span>) {
            <span class="kw">defer</span> wg.<span class="fn">Done</span>()
            <span class="fn">worker</span>(id, jobs, results)
        }(w)
    }

    <span class="kw">go</span> <span class="fn">producer</span>(jobs, <span class="num">50</span>)

    <span class="cm">// Fan-In: close results when all workers done</span>
    <span class="kw">go</span> <span class="kw">func</span>() {
        wg.<span class="fn">Wait</span>()
        <span class="fn">close</span>(results)
    }()

    <span class="kw">for</span> r := <span class="kw">range</span> results {
        <span class="fn">fmt.Print</span>(r, <span class="str">" "</span>)
    }
}</div>
</div>

<div class="card animate-in">
    <h3>Go Concurrency Patterns Lanjutan</h3>
    <div class="code-block"><span class="cm">// Context — cancellation & timeout propagation</span>
<span class="kw">func</span> <span class="fn">fetchWithTimeout</span>(url <span class="type">string</span>) (<span class="type">string</span>, <span class="type">error</span>) {
    ctx, cancel := context.<span class="fn">WithTimeout</span>(
        context.<span class="fn">Background</span>(), <span class="num">5</span>*time.Second)
    <span class="kw">defer</span> <span class="fn">cancel</span>()

    req, _ := http.<span class="fn">NewRequestWithContext</span>(ctx, <span class="str">"GET"</span>, url, <span class="num">nil</span>)
    resp, err := http.DefaultClient.<span class="fn">Do</span>(req)
    <span class="kw">if</span> err != <span class="num">nil</span> {
        <span class="kw">return</span> <span class="str">""</span>, err <span class="cm">// cancelled or timed out</span>
    }
    <span class="kw">defer</span> resp.Body.<span class="fn">Close</span>()
    body, _ := io.<span class="fn">ReadAll</span>(resp.Body)
    <span class="kw">return</span> <span class="fn">string</span>(body), <span class="num">nil</span>
}

<span class="cm">// errgroup — goroutines dengan error handling</span>
<span class="kw">func</span> <span class="fn">fetchAll</span>(urls []<span class="type">string</span>) <span class="type">error</span> {
    g, ctx := errgroup.<span class="fn">WithContext</span>(context.<span class="fn">Background</span>())

    <span class="kw">for</span> _, url := <span class="kw">range</span> urls {
        url := url <span class="cm">// capture</span>
        g.<span class="fn">Go</span>(<span class="kw">func</span>() <span class="type">error</span> {
            req, _ := http.<span class="fn">NewRequestWithContext</span>(ctx, <span class="str">"GET"</span>, url, <span class="num">nil</span>)
            _, err := http.DefaultClient.<span class="fn">Do</span>(req)
            <span class="kw">return</span> err
        })
    }

    <span class="kw">return</span> g.<span class="fn">Wait</span>() <span class="cm">// returns first error, cancels others</span>
}</div>
</div>

<!-- ===================== 10. RUST CONCURRENCY ===================== -->
<h2 class="animate-in">10. Rust Concurrency</h2>

<div class="card animate-in">
    <h3>Fearless Concurrency — Ownership System</h3>
    <p>Rust secara unik mencegah <strong>data races pada compile time</strong> melalui sistem ownership:</p>
    <div class="info-box">
        <strong>Aturan Rust:</strong> Pada satu waktu, data boleh memiliki <strong>satu mutable reference</strong> ATAU <strong>banyak immutable references</strong>, tapi tidak keduanya. Ini membuat data races <em>mustahil</em> secara compile-time.
    </div>
    <div class="code-block" style="margin-top:10px;"><span class="cm">// Ini TIDAK COMPILE — Rust mencegah data race!</span>
<span class="kw">use</span> std::thread;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> <span class="kw">mut</span> data = <span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

    thread::<span class="fn">spawn</span>(|| {
        data.<span class="fn">push</span>(<span class="num">4</span>); <span class="cm">// ERROR: data dipinjam oleh thread lain</span>
    });

    <span class="fn">println!</span>(<span class="str">"{:?}"</span>, data); <span class="cm">// ERROR: data mungkin sudah di-move</span>
}</div>
</div>

<div class="card animate-in">
    <h3>Arc, Mutex, RwLock — Shared State</h3>
    <div class="code-block"><span class="kw">use</span> std::sync::{Arc, Mutex};
<span class="kw">use</span> std::thread;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// Arc = Atomic Reference Counting (shared ownership across threads)</span>
    <span class="cm">// Mutex = Mutual Exclusion (safe mutable access)</span>
    <span class="kw">let</span> counter = Arc::<span class="fn">new</span>(Mutex::<span class="fn">new</span>(<span class="num">0</span>));
    <span class="kw">let</span> <span class="kw">mut</span> handles = <span class="fn">vec!</span>[];

    <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">0</span>..<span class="num">10</span> {
        <span class="kw">let</span> counter = Arc::<span class="fn">clone</span>(&counter);
        <span class="kw">let</span> handle = thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            <span class="kw">let</span> <span class="kw">mut</span> num = counter.<span class="fn">lock</span>().<span class="fn">unwrap</span>();
            *num += <span class="num">1</span>;
            <span class="cm">// Mutex otomatis di-unlock saat num keluar scope (RAII)</span>
        });
        handles.<span class="fn">push</span>(handle);
    }

    <span class="kw">for</span> handle <span class="kw">in</span> handles {
        handle.<span class="fn">join</span>().<span class="fn">unwrap</span>();
    }

    <span class="fn">println!</span>(<span class="str">"Result: {}"</span>, *counter.<span class="fn">lock</span>().<span class="fn">unwrap</span>()); <span class="cm">// 10</span>
}</div>
</div>

<div class="card animate-in">
    <h3>RwLock — Multiple Readers, Single Writer</h3>
    <div class="code-block"><span class="kw">use</span> std::sync::{Arc, RwLock};
<span class="kw">use</span> std::thread;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> data = Arc::<span class="fn">new</span>(RwLock::<span class="fn">new</span>(<span class="fn">vec!</span>[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]));
    <span class="kw">let</span> <span class="kw">mut</span> handles = <span class="fn">vec!</span>[];

    <span class="cm">// Multiple readers dapat berjalan bersamaan</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">5</span> {
        <span class="kw">let</span> data = Arc::<span class="fn">clone</span>(&data);
        handles.<span class="fn">push</span>(thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            <span class="kw">let</span> read = data.<span class="fn">read</span>().<span class="fn">unwrap</span>();
            <span class="fn">println!</span>(<span class="str">"Reader {}: {:?}"</span>, i, *read);
        }));
    }

    <span class="cm">// Writer mendapat exclusive access</span>
    {
        <span class="kw">let</span> data = Arc::<span class="fn">clone</span>(&data);
        handles.<span class="fn">push</span>(thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            <span class="kw">let</span> <span class="kw">mut</span> write = data.<span class="fn">write</span>().<span class="fn">unwrap</span>();
            write.<span class="fn">push</span>(<span class="num">4</span>);
            <span class="fn">println!</span>(<span class="str">"Writer: added 4"</span>);
        }));
    }

    <span class="kw">for</span> h <span class="kw">in</span> handles { h.<span class="fn">join</span>().<span class="fn">unwrap</span>(); }
}</div>
</div>

<div class="card animate-in">
    <h3>Rayon — Data Parallelism Made Easy</h3>
    <div class="code-block"><span class="cm">// Rayon: parallel iterators — ubah .iter() menjadi .par_iter()</span>
<span class="kw">use</span> rayon::prelude::*;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> data: Vec&lt;<span class="type">i64</span>&gt; = (<span class="num">0</span>..<span class="num">1_000_000</span>).<span class="fn">collect</span>();

    <span class="cm">// Serial</span>
    <span class="kw">let</span> sum_serial: <span class="type">i64</span> = data.<span class="fn">iter</span>().<span class="fn">sum</span>();

    <span class="cm">// Parallel — hanya ganti iter() dengan par_iter()!</span>
    <span class="kw">let</span> sum_parallel: <span class="type">i64</span> = data.<span class="fn">par_iter</span>().<span class="fn">sum</span>();

    <span class="fn">assert_eq!</span>(sum_serial, sum_parallel);

    <span class="cm">// Parallel map + filter + collect</span>
    <span class="kw">let</span> result: Vec&lt;_&gt; = data
        .<span class="fn">par_iter</span>()
        .<span class="fn">filter</span>(|&&x| x % <span class="num">2</span> == <span class="num">0</span>)
        .<span class="fn">map</span>(|&x| x * x)
        .<span class="fn">collect</span>();

    <span class="cm">// Parallel sort</span>
    <span class="kw">let</span> <span class="kw">mut</span> nums = <span class="fn">vec!</span>[<span class="num">5</span>, <span class="num">3</span>, <span class="num">8</span>, <span class="num">1</span>, <span class="num">9</span>, <span class="num">2</span>];
    nums.<span class="fn">par_sort</span>(); <span class="cm">// parallel merge sort</span>
}
<span class="cm">// Cargo.toml: rayon = "1.10"</span></div>
    <div class="success-box" style="margin-top:10px;">
        <strong>Rayon</strong> menggunakan work-stealing thread pool. Otomatis membagi pekerjaan ke semua CPU cores. Tidak perlu manual thread management!
    </div>
</div>

<div class="card animate-in">
    <h3>Rust Async/Await</h3>
    <div class="code-block"><span class="cm">// Async/Await — concurrency tanpa threads (untuk I/O-bound tasks)</span>
<span class="kw">use</span> tokio;

<span class="kw">async fn</span> <span class="fn">fetch_url</span>(url: &<span class="type">str</span>) -> Result&lt;String, reqwest::Error&gt; {
    <span class="kw">let</span> body = reqwest::<span class="fn">get</span>(url).<span class="kw">await</span>?.<span class="fn">text</span>().<span class="kw">await</span>?;
    Ok(body)
}

<span class="kw">#[tokio::main]</span>
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="cm">// Concurrent fetch — tidak blocking!</span>
    <span class="kw">let</span> (r1, r2, r3) = tokio::<span class="fn">join!</span>(
        <span class="fn">fetch_url</span>(<span class="str">"https://api.example.com/a"</span>),
        <span class="fn">fetch_url</span>(<span class="str">"https://api.example.com/b"</span>),
        <span class="fn">fetch_url</span>(<span class="str">"https://api.example.com/c"</span>),
    );

    <span class="fn">println!</span>(<span class="str">"Got {} bytes"</span>, r1.<span class="fn">unwrap</span>().<span class="fn">len</span>());
}

<span class="cm">// Spawning async tasks</span>
<span class="kw">async fn</span> <span class="fn">process_many</span>(urls: Vec&lt;String&gt;) {
    <span class="kw">let</span> <span class="kw">mut</span> handles = <span class="fn">vec!</span>[];

    <span class="kw">for</span> url <span class="kw">in</span> urls {
        handles.<span class="fn">push</span>(tokio::<span class="fn">spawn</span>(<span class="kw">async move</span> {
            <span class="fn">fetch_url</span>(&url).<span class="kw">await</span>
        }));
    }

    <span class="kw">for</span> handle <span class="kw">in</span> handles {
        <span class="kw">match</span> handle.<span class="kw">await</span>.<span class="fn">unwrap</span>() {
            Ok(body) => <span class="fn">println!</span>(<span class="str">"OK: {} bytes"</span>, body.<span class="fn">len</span>()),
            Err(e) => <span class="fn">eprintln!</span>(<span class="str">"Error: {}"</span>, e),
        }
    }
}
<span class="cm">// Cargo.toml: tokio = { version = "1", features = ["full"] }</span></div>
</div>

<div class="card animate-in">
    <h3>Channels di Rust (crossbeam & std::sync::mpsc)</h3>
    <div class="code-block"><span class="kw">use</span> std::sync::mpsc;
<span class="kw">use</span> std::thread;
<span class="kw">use</span> std::time::Duration;

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="cm">// mpsc = Multiple Producer, Single Consumer</span>
    <span class="kw">let</span> (tx, rx) = mpsc::<span class="fn">channel</span>();

    <span class="cm">// Beberapa producers</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..<span class="num">5</span> {
        <span class="kw">let</span> tx = tx.<span class="fn">clone</span>();
        thread::<span class="fn">spawn</span>(<span class="kw">move</span> || {
            thread::<span class="fn">sleep</span>(Duration::<span class="fn">from_millis</span>(i * <span class="num">100</span>));
            tx.<span class="fn">send</span>(<span class="fn">format!</span>(<span class="str">"msg from thread {}"</span>, i)).<span class="fn">unwrap</span>();
        });
    }
    <span class="fn">drop</span>(tx); <span class="cm">// drop original sender</span>

    <span class="cm">// Single consumer</span>
    <span class="kw">for</span> msg <span class="kw">in</span> rx {
        <span class="fn">println!</span>(<span class="str">"Received: {}"</span>, msg);
    }
}</div>
</div>

<!-- ===================== RINGKASAN ===================== -->
<h2 class="animate-in">Ringkasan & Perbandingan</h2>

<div class="card animate-in">
    <h3>Kapan Menggunakan Apa?</h3>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr><th>Skenario</th><th>Teknologi</th><th>Alasan</th></tr>
            </thead>
            <tbody>
                <tr><td>Loop parallelism di C/C++</td><td><span class="badge-blue">OpenMP</span></td><td>Mudah, pragma-based, shared memory</td></tr>
                <tr><td>Distributed computing (cluster)</td><td><span class="badge-green">MPI</span></td><td>Message passing, scales to thousands of nodes</td></tr>
                <tr><td>Data-parallel (vektor/matriks)</td><td><span class="badge-red">CUDA / OpenCL</span></td><td>GPU memiliki ribuan cores untuk SIMD</td></tr>
                <tr><td>Quick GPU acceleration</td><td><span class="badge-orange">OpenACC</span></td><td>Directive-based, mudah</td></tr>
                <tr><td>High-concurrency I/O (web)</td><td><span class="badge-purple">Go (goroutines)</span></td><td>Lightweight, built-in scheduler, channels</td></tr>
                <tr><td>Safe systems programming</td><td><span class="badge-yellow">Rust (Arc + Mutex)</span></td><td>Compile-time safety, zero-cost abstractions</td></tr>
                <tr><td>Data parallelism di Rust</td><td><span class="badge-green">Rayon</span></td><td>par_iter(), work-stealing, ergonomic</td></tr>
                <tr><td>Async I/O di Rust</td><td><span class="badge-blue">Tokio</span></td><td>Async runtime, non-blocking I/O</td></tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Key Takeaways</h3>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Paralelisme bukan gratis</strong> — overhead dari thread creation, synchronization, dan communication bisa menghilangkan speedup jika granularity terlalu kecil.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Amdahl's Law menentukan batas</strong> — identifikasi dan minimasi bagian serial. 5% serial = max 20x speedup.</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Memory is the bottleneck</strong> — di GPU, optimasi memory access pattern lebih penting dari optimasi compute. Gunakan shared memory, coalesced access.</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Pilih model yang tepat</strong> — shared memory (OpenMP) untuk single node, distributed (MPI) untuk cluster, GPU (CUDA) untuk data-parallel masif.</div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-text"><strong>Modern languages help</strong> — Go channels dan Rust ownership mengeliminasi kelas bug tertentu (race conditions, deadlocks) yang sangat sulit di C/C++.</div></div>
    </div>
</div>
`;

// ============================================================
// ANIMATIONS
// ============================================================
function initParallelAnimations() {
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

    // ============ Amdahl's Law Calculator ============
    (function() {
        const cv = setupCanvas('amdahlCanvas', 700, 380);
        if (!cv) return;
        const { ctx, w, h } = cv;
        const slider = document.getElementById('amdahlSlider');
        const pValEl = document.getElementById('amdahlPVal');
        const maxEl = document.getElementById('amdahlMaxSpeedup');
        if (!slider) return;

        function draw() {
            const P = parseInt(slider.value) / 100;
            pValEl.textContent = P.toFixed(2);
            const maxSpeedup = P < 1 ? 1 / (1 - P) : Infinity;
            maxEl.textContent = 'Max Speedup: ' + (P < 1 ? maxSpeedup.toFixed(1) : '\u221E') + 'x';

            ctx.clearRect(0, 0, w, h);
            const padL = 60, padR = 30, padT = 30, padB = 50;
            const gw = w - padL - padR, gh = h - padT - padB;

            // Axes
            ctx.strokeStyle = '#888';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(padL, padT);
            ctx.lineTo(padL, padT + gh);
            ctx.lineTo(padL + gw, padT + gh);
            ctx.stroke();

            // Y axis label
            ctx.fillStyle = '#aaa';
            ctx.font = '12px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.save();
            ctx.translate(15, padT + gh / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText('Speedup', 0, 0);
            ctx.restore();

            // X axis label
            ctx.fillText('Number of Processors (n)', padL + gw / 2, h - 5);

            const processors = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
            const maxY = Math.min(P < 1 ? 1 / (1 - P) : 100, 100);

            // Y ticks
            ctx.textAlign = 'right';
            ctx.fillStyle = '#888';
            const yTicks = [1, 5, 10, 20, 50, 100].filter(v => v <= maxY * 1.1);
            yTicks.forEach(v => {
                const y = padT + gh - (v / (maxY * 1.1)) * gh;
                if (y >= padT) {
                    ctx.fillText(v.toString(), padL - 8, y + 4);
                    ctx.strokeStyle = '#333';
                    ctx.beginPath();
                    ctx.moveTo(padL, y);
                    ctx.lineTo(padL + gw, y);
                    ctx.stroke();
                }
            });

            // X ticks
            ctx.textAlign = 'center';
            processors.forEach((p, i) => {
                const x = padL + (i / (processors.length - 1)) * gw;
                ctx.fillStyle = '#888';
                ctx.fillText(p.toString(), x, padT + gh + 20);
            });

            // Ideal speedup line
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            processors.forEach((p, i) => {
                const x = padL + (i / (processors.length - 1)) * gw;
                const y = padT + gh - (Math.min(p, maxY * 1.1) / (maxY * 1.1)) * gh;
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            });
            ctx.stroke();
            ctx.setLineDash([]);

            // Amdahl's curve
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 3;
            ctx.beginPath();
            processors.forEach((p, i) => {
                const x = padL + (i / (processors.length - 1)) * gw;
                const speedup = 1 / ((1 - P) + P / p);
                const y = padT + gh - (Math.min(speedup, maxY * 1.1) / (maxY * 1.1)) * gh;
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            });
            ctx.stroke();

            // Max speedup line
            if (P < 1 && maxSpeedup <= maxY * 1.1) {
                const yMax = padT + gh - (maxSpeedup / (maxY * 1.1)) * gh;
                ctx.strokeStyle = '#f87171';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(padL, yMax);
                ctx.lineTo(padL + gw, yMax);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.fillStyle = '#f87171';
                ctx.textAlign = 'left';
                ctx.fillText('Max: ' + maxSpeedup.toFixed(1) + 'x', padL + gw - 80, yMax - 6);
            }

            // Legend
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(padL + 10, padT + 8, 20, 3);
            ctx.fillStyle = '#aaa';
            ctx.textAlign = 'left';
            ctx.font = '11px Inter, sans-serif';
            ctx.fillText("Amdahl's Law (P=" + P.toFixed(2) + ")", padL + 35, padT + 14);

            ctx.fillStyle = '#555';
            ctx.fillRect(padL + 10, padT + 24, 20, 3);
            ctx.fillStyle = '#aaa';
            ctx.fillText('Ideal (linear)', padL + 35, padT + 30);
        }

        slider.addEventListener('input', draw);
        draw();
    })();

    // ============ Thread Scheduling Animation ============
    (function() {
        const cv = setupCanvas('threadSchedCanvas', 700, 340);
        if (!cv) return;
        const { ctx, w, h } = cv;
        const startBtn = document.getElementById('threadSchedStart');
        const resetBtn = document.getElementById('threadSchedReset');
        const coresSelect = document.getElementById('threadSchedCores');
        const threadsSelect = document.getElementById('threadSchedThreads');
        if (!startBtn || !resetBtn) return;

        let running = false, animId = null, time = 0;
        const colors = ['#38bdf8','#34d399','#f87171','#fbbf24','#a78bfa','#fb923c','#f472b6','#22d3ee','#86efac','#fca5a5','#fdba74','#c4b5fd'];
        let schedule = [];

        function generateSchedule() {
            const numCores = parseInt(coresSelect.value);
            const numThreads = parseInt(threadsSelect.value);
            schedule = [];
            for (let t = 0; t < numThreads; t++) {
                const segs = [];
                let cursor = Math.random() * 2;
                const totalWork = 3 + Math.random() * 8;
                while (cursor < totalWork) {
                    const dur = 0.5 + Math.random() * 2;
                    const core = Math.floor(Math.random() * numCores);
                    const type = Math.random() > 0.2 ? 'compute' : 'io';
                    segs.push({ start: cursor, dur, core, type });
                    cursor += dur + Math.random() * 1;
                }
                schedule.push({ id: t, segs, color: colors[t % colors.length] });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            const numCores = parseInt(coresSelect.value);
            const padL = 80, padR = 20, padT = 30, padB = 20;
            const laneH = Math.min(35, (h - padT - padB) / numCores - 5);
            const timeScale = (w - padL - padR) / 14;

            ctx.fillStyle = '#aaa';
            ctx.font = '13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Thread Scheduling pada ' + numCores + ' CPU Cores', w / 2, 18);

            for (let c = 0; c < numCores; c++) {
                const y = padT + c * (laneH + 5);
                ctx.fillStyle = '#333';
                ctx.fillRect(padL, y, w - padL - padR, laneH);
                ctx.strokeStyle = '#555';
                ctx.strokeRect(padL, y, w - padL - padR, laneH);
                ctx.fillStyle = '#aaa';
                ctx.font = '11px Inter, sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText('Core ' + c, padL - 8, y + laneH / 2 + 4);
            }

            // Draw scheduled segments up to current time
            schedule.forEach(thread => {
                thread.segs.forEach(seg => {
                    if (seg.start > time) return;
                    const visEnd = Math.min(seg.start + seg.dur, time);
                    const x1 = padL + seg.start * timeScale;
                    const x2 = padL + visEnd * timeScale;
                    const y = padT + seg.core * (laneH + 5);
                    ctx.fillStyle = seg.type === 'io' ? '#555' : thread.color;
                    ctx.globalAlpha = 0.85;
                    ctx.fillRect(x1, y + 2, x2 - x1, laneH - 4);
                    ctx.globalAlpha = 1;
                    if (x2 - x1 > 20) {
                        ctx.fillStyle = '#fff';
                        ctx.font = '9px Inter, sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('T' + thread.id, (x1 + x2) / 2, y + laneH / 2 + 3);
                    }
                });
            });

            // Time cursor
            const cx = padL + time * timeScale;
            if (cx <= w - padR) {
                ctx.strokeStyle = '#f87171';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(cx, padT - 5);
                ctx.lineTo(cx, padT + numCores * (laneH + 5));
                ctx.stroke();
                ctx.lineWidth = 1;
            }

            // Time axis
            const axisY = padT + numCores * (laneH + 5) + 15;
            ctx.fillStyle = '#888';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            for (let t = 0; t <= 14; t += 2) {
                const x = padL + t * timeScale;
                ctx.fillText(t + 'ms', x, axisY);
            }
        }

        function animate() {
            if (!running) return;
            time += 0.06;
            if (time > 14) { running = false; startBtn.textContent = 'Play'; }
            draw();
            animId = requestAnimationFrame(animate);
        }

        startBtn.addEventListener('click', () => {
            if (running) { running = false; startBtn.textContent = 'Play'; cancelAnimationFrame(animId); return; }
            if (time > 13) { time = 0; generateSchedule(); }
            running = true;
            startBtn.textContent = 'Pause';
            animate();
        });

        resetBtn.addEventListener('click', () => {
            running = false;
            startBtn.textContent = 'Play';
            cancelAnimationFrame(animId);
            time = 0;
            generateSchedule();
            draw();
        });

        coresSelect.addEventListener('change', () => { time = 0; generateSchedule(); draw(); });
        threadsSelect.addEventListener('change', () => { time = 0; generateSchedule(); draw(); });

        generateSchedule();
        draw();
    })();

    // ============ GPU Kernel Execution Visualization ============
    (function() {
        const cv = setupCanvas('gpuKernelCanvas', 700, 420);
        if (!cv) return;
        const { ctx, w, h } = cv;
        const startBtn = document.getElementById('gpuKernelStart');
        const resetBtn = document.getElementById('gpuKernelReset');
        const gridSelect = document.getElementById('gpuGridSize');
        const blockSelect = document.getElementById('gpuBlockSize');
        if (!startBtn || !resetBtn) return;

        let running = false, animId = null, time = 0;
        const blockColors = [
            '#38bdf8','#34d399','#f87171','#fbbf24',
            '#a78bfa','#fb923c','#f472b6','#22d3ee',
            '#86efac','#fca5a5','#fdba74','#c4b5fd',
            '#67e8f9','#bef264','#fda4af','#fde68a'
        ];

        function draw() {
            ctx.clearRect(0, 0, w, h);
            const gridSize = parseInt(gridSelect.value);
            const blockSize = parseInt(blockSelect.value);
            const totalBlocks = gridSize * gridSize;
            const totalThreads = totalBlocks * blockSize * blockSize;

            // Title
            ctx.fillStyle = '#aaa';
            ctx.font = '13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('CUDA Grid (' + gridSize + 'x' + gridSize + ') / Block (' + blockSize + 'x' + blockSize + ') = ' + totalThreads + ' threads', w / 2, 18);

            // Draw Grid of Blocks
            const gridAreaW = w * 0.45;
            const gridAreaH = h - 60;
            const gridStartX = 20;
            const gridStartY = 35;
            const blockW = Math.min((gridAreaW - 20) / gridSize - 6, 100);
            const blockH = Math.min((gridAreaH - 20) / gridSize - 6, 100);

            ctx.fillStyle = '#888';
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Grid (' + gridSize + 'x' + gridSize + ' blocks)', gridStartX, gridStartY - 5);

            for (let by = 0; by < gridSize; by++) {
                for (let bx = 0; bx < gridSize; bx++) {
                    const blockIdx = by * gridSize + bx;
                    const x = gridStartX + bx * (blockW + 6);
                    const y = gridStartY + by * (blockH + 6);
                    const progress = Math.max(0, Math.min(1, (time - blockIdx * 0.3) / 2));
                    const color = blockColors[blockIdx % blockColors.length];

                    // Block background
                    ctx.fillStyle = '#222';
                    ctx.strokeStyle = progress > 0 ? color : '#555';
                    ctx.lineWidth = progress > 0 ? 2 : 1;
                    ctx.fillRect(x, y, blockW, blockH);
                    ctx.strokeRect(x, y, blockW, blockH);

                    // Fill progress
                    if (progress > 0) {
                        ctx.globalAlpha = 0.3;
                        ctx.fillStyle = color;
                        ctx.fillRect(x, y, blockW * progress, blockH);
                        ctx.globalAlpha = 1;
                    }

                    // Block label
                    ctx.fillStyle = progress > 0 ? color : '#666';
                    ctx.font = '9px Inter, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText('Block(' + bx + ',' + by + ')', x + blockW / 2, y + blockH / 2 + 3);
                }
            }

            // Draw expanded block detail (right side)
            const detailX = w * 0.52;
            const detailY = 35;
            const detailW = w * 0.45;
            const detailH = h - 60;

            ctx.fillStyle = '#888';
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Block Detail (' + blockSize + 'x' + blockSize + ' threads)', detailX, detailY - 5);

            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;
            ctx.strokeRect(detailX, detailY, detailW, detailH);

            const threadW = Math.min((detailW - 10) / blockSize - 3, 30);
            const threadH = Math.min((detailH - 10) / blockSize - 3, 30);
            const tStartX = detailX + (detailW - blockSize * (threadW + 3)) / 2;
            const tStartY = detailY + (detailH - blockSize * (threadH + 3)) / 2;

            // Determine which block is currently highlighted
            const activeBlock = Math.floor(time / 0.3);

            for (let ty = 0; ty < blockSize; ty++) {
                for (let tx = 0; tx < blockSize; tx++) {
                    const x = tStartX + tx * (threadW + 3);
                    const y = tStartY + ty * (threadH + 3);
                    const threadProgress = Math.max(0, Math.min(1, (time - activeBlock * 0.3 - (ty * blockSize + tx) * 0.02) / 1));

                    if (threadProgress > 0) {
                        ctx.fillStyle = 'rgba(56,189,248,' + (0.2 + threadProgress * 0.6) + ')';
                    } else {
                        ctx.fillStyle = '#333';
                    }
                    ctx.fillRect(x, y, threadW, threadH);
                    ctx.strokeStyle = threadProgress > 0 ? '#38bdf8' : '#555';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, threadW, threadH);

                    if (threadW > 15) {
                        ctx.fillStyle = threadProgress > 0 ? '#fff' : '#666';
                        ctx.font = '7px Inter, sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText(tx + ',' + ty, x + threadW / 2, y + threadH / 2 + 2);
                    }
                }
            }

            // Warp indicator
            if (blockSize >= 4) {
                const warpY = tStartY + blockSize * (threadH + 3) + 10;
                ctx.fillStyle = '#888';
                ctx.font = '10px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('1 Warp = 32 threads (SIMT execution)', detailX + detailW / 2, Math.min(warpY, h - 10));
            }

            // Info footer
            ctx.fillStyle = '#666';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('gridDim=(' + gridSize + ',' + gridSize + ')  blockDim=(' + blockSize + ',' + blockSize + ')  Total threads: ' + totalThreads, w / 2, h - 5);
        }

        function animate() {
            if (!running) return;
            time += 0.03;
            const gridSize = parseInt(gridSelect.value);
            if (time > gridSize * gridSize * 0.3 + 3) {
                running = false;
                startBtn.textContent = 'Play';
            }
            draw();
            animId = requestAnimationFrame(animate);
        }

        startBtn.addEventListener('click', () => {
            if (running) { running = false; startBtn.textContent = 'Play'; cancelAnimationFrame(animId); return; }
            if (time > parseInt(gridSelect.value) ** 2 * 0.3 + 2) time = 0;
            running = true;
            startBtn.textContent = 'Pause';
            animate();
        });

        resetBtn.addEventListener('click', () => {
            running = false;
            startBtn.textContent = 'Play';
            cancelAnimationFrame(animId);
            time = 0;
            draw();
        });

        gridSelect.addEventListener('change', () => { time = 0; draw(); });
        blockSelect.addEventListener('change', () => { time = 0; draw(); });

        draw();
    })();
}
