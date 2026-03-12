// ============================================================
// TEORI KOMPUTASI - Interactive Learning Web App
// ============================================================

// ---- Navigation ----
const content = document.getElementById('content');
const navLinks = document.querySelectorAll('#nav-menu a[data-section]');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        loadSection(link.dataset.section);
        sidebar.classList.remove('open');
    });
});

function loadSection(name) {
    const fn = sections[name];
    if (fn) {
        content.innerHTML = '';
        content.innerHTML = fn();
        initSectionInteractions(name);
        window.scrollTo(0, 0);
    }
}

function initSectionInteractions(name) {
    // Initialize tabs
    document.querySelectorAll('.tabs').forEach(tabGroup => {
        const btns = tabGroup.querySelectorAll('.tab-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;
                const parent = tabGroup.parentElement;
                parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const el = parent.querySelector(`[data-tab-content="${target}"]`);
                if (el) el.classList.add('active');
            });
        });
    });

    // Section-specific initializations
    if (name === 'automata') initAutomataAnimations();
    if (name === 'algorithms') initAlgorithmAnimations();
    if (name === 'datastructures') initDSAnimations();
    if (name === 'security') initSecurityAnimations();
    if (name === 'home') initHomeCards();
}

function initHomeCards() {
    document.querySelectorAll('.hero-card[data-nav]').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.nav;
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.dataset.section === section) l.classList.add('active');
            });
            loadSection(section);
        });
    });
}

// ---- Sections ----
const sections = {};

// ====================== HOME ======================
sections.home = () => `
<div class="hero animate-in">
    <h1>Teori Komputasi</h1>
    <p>Panduan interaktif dan komprehensif dari dasar teori komputasi hingga modern software engineering dengan animasi & visualisasi.</p>
</div>
<div class="hero-cards">
    <div class="hero-card animate-in" data-nav="automata">
        <div class="icon">⚙️</div>
        <h3>Automata & Bahasa Formal</h3>
        <p>DFA, NFA, PDA, Turing Machine</p>
    </div>
    <div class="hero-card animate-in" data-nav="complexity">
        <div class="icon">📊</div>
        <h3>Complexity Theory</h3>
        <p>P, NP, NP-Hard, NP-Complete</p>
    </div>
    <div class="hero-card animate-in" data-nav="algorithms">
        <div class="icon">🧮</div>
        <h3>Algoritma & HackerRank</h3>
        <p>10 Top Cases dengan 5 Pendekatan</p>
    </div>
    <div class="hero-card animate-in" data-nav="datastructures">
        <div class="icon">🔗</div>
        <h3>Struktur Data</h3>
        <p>LinkedList, Queue, Graph, Tree</p>
    </div>
    <div class="hero-card animate-in" data-nav="oop">
        <div class="icon">🎯</div>
        <h3>OOP & SOLID</h3>
        <p>Encapsulation, Inheritance, Polymorphism</p>
    </div>
    <div class="hero-card animate-in" data-nav="languages">
        <div class="icon">💻</div>
        <h3>Bahasa Pemrograman</h3>
        <p>C, Java, Go, Rust, Python, Groovy</p>
    </div>
    <div class="hero-card animate-in" data-nav="architecture">
        <div class="icon">🏗️</div>
        <h3>Software Architecture</h3>
        <p>Monolith, Microservices, MQ</p>
    </div>
    <div class="hero-card animate-in" data-nav="networking">
        <div class="icon">🌐</div>
        <h3>Networking</h3>
        <p>TCP/UDP, HTTP, REST, gRPC</p>
    </div>
    <div class="hero-card animate-in" data-nav="cleancode">
        <div class="icon">✨</div>
        <h3>Clean Code</h3>
        <p>Clean Architecture & Principles</p>
    </div>
    <div class="hero-card animate-in" data-nav="security">
        <div class="icon">🔒</div>
        <h3>Security & Encryption</h3>
        <p>HTTPS, JWT, TLS, Hash, Cipher</p>
    </div>
    <div class="hero-card animate-in" data-nav="iso">
        <div class="icon">📋</div>
        <h3>ISO & Regulasi</h3>
        <p>ISO 27001, ISO 27701, UU PDP</p>
    </div>
    <div class="hero-card animate-in" data-nav="frameworks">
        <div class="icon">🚀</div>
        <h3>Frameworks & Stack</h3>
        <p>Next.js, Spring Boot, Gin, FastAPI</p>
    </div>
    <div class="hero-card animate-in" data-nav="rag">
        <div class="icon">🤖</div>
        <h3>RAG & AI</h3>
        <p>Retrieval Augmented Generation</p>
    </div>
</div>
`;

// ====================== AUTOMATA & BAHASA FORMAL ======================
sections.automata = () => `
<h1 class="section-title animate-in">Automata & Bahasa Formal</h1>
<p class="section-subtitle animate-in">Dari finite automata hingga Turing Machine — fondasi teori komputasi</p>
<p class="animate-in"><em>Ref: Sipser, "Introduction to the Theory of Computation" (2012); Hopcroft, Motwani & Ullman, "Introduction to Automata Theory" (2006)</em></p>

<h2>Hierarki Chomsky</h2>
<div class="card">
    <p><strong>Noam Chomsky (1956)</strong> mengklasifikasikan bahasa formal ke dalam 4 tipe. Setiap tipe adalah <strong>subset proper</strong> dari tipe di atasnya — seperti boneka Matryoshka. Semakin tinggi tipenya, semakin kuat mesin yang dibutuhkan untuk mengenalinya.</p>
</div>

<div class="anim-container" style="padding:20px;text-align:center;">
    <svg width="660" height="380" viewBox="0 0 660 380" style="max-width:100%">
        <!-- Tipe 0 — outermost -->
        <rect x="10" y="10" width="640" height="360" rx="20" fill="rgba(248,113,113,0.04)" stroke="var(--red)" stroke-width="2"/>
        <text x="335" y="38" text-anchor="middle" fill="var(--red)" font-size="13" font-weight="700">Tipe 0 — Recursively Enumerable</text>
        <text x="335" y="55" text-anchor="middle" fill="var(--text2)" font-size="10">Dikenali oleh: Turing Machine | Grammar: unrestricted (α → β)</text>
        <text x="600" y="355" fill="var(--text2)" font-size="9" font-style="italic">Halting Problem</text>

        <!-- Tipe 1 -->
        <rect x="50" y="68" width="560" height="285" rx="18" fill="rgba(251,146,60,0.04)" stroke="var(--orange)" stroke-width="2"/>
        <text x="335" y="92" text-anchor="middle" fill="var(--orange)" font-size="13" font-weight="700">Tipe 1 — Context-Sensitive</text>
        <text x="335" y="108" text-anchor="middle" fill="var(--text2)" font-size="10">Dikenali oleh: Linear Bounded Automata | Grammar: αAβ → αγβ (|LHS| ≤ |RHS|)</text>
        <text x="560" y="335" fill="var(--text2)" font-size="9" font-style="italic">aⁿbⁿcⁿ</text>

        <!-- Tipe 2 -->
        <rect x="95" y="120" width="470" height="220" rx="16" fill="rgba(52,211,153,0.05)" stroke="var(--green)" stroke-width="2"/>
        <text x="335" y="144" text-anchor="middle" fill="var(--green)" font-size="13" font-weight="700">Tipe 2 — Context-Free</text>
        <text x="335" y="160" text-anchor="middle" fill="var(--text2)" font-size="10">Dikenali oleh: Pushdown Automata (PDA) | Grammar: A → γ</text>
        <text x="510" y="322" fill="var(--text2)" font-size="9" font-style="italic">aⁿbⁿ, balanced parentheses, HTML/JSON</text>

        <!-- Tipe 3 — innermost -->
        <rect x="155" y="175" width="350" height="148" rx="14" fill="rgba(56,189,248,0.07)" stroke="var(--accent)" stroke-width="2.5"/>
        <text x="330" y="202" text-anchor="middle" fill="var(--accent)" font-size="14" font-weight="700">Tipe 3 — Regular</text>
        <text x="330" y="220" text-anchor="middle" fill="var(--text2)" font-size="10">Dikenali oleh: DFA / NFA</text>
        <text x="330" y="236" text-anchor="middle" fill="var(--text2)" font-size="10">Grammar: A → aB | a (right-linear)</text>
        <text x="330" y="260" text-anchor="middle" fill="var(--accent)" font-size="11">Regex ≡ DFA ≡ NFA (Teorema Kleene)</text>
        <text x="330" y="282" text-anchor="middle" fill="var(--text2)" font-size="10" font-style="italic">a*b+, (0|1)*01, email pattern, identifier</text>

        <!-- Kekuatan meningkat arrows -->
        <line x1="25" y1="370" x2="25" y2="65" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#arrowC)"/>
        <text x="28" y="220" fill="var(--text2)" font-size="9" transform="rotate(-90, 28, 220)">Kekuatan komputasi meningkat</text>
        <defs><marker id="arrowC" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="var(--text2)"/></marker></defs>
    </svg>
</div>

<div class="card">
    <h4>Pumping Lemma — Cara Membuktikan Bahasa BUKAN Regular</h4>
    <p>Jika L adalah bahasa regular, maka ada "pumping length" p sehingga setiap string s ∈ L dengan |s| ≥ p, bisa dipecah s = xyz di mana:</p>
    <ol>
        <li>|xy| ≤ p</li>
        <li>|y| > 0</li>
        <li>Untuk semua i ≥ 0, xy<sup>i</sup>z ∈ L</li>
    </ol>
    <p><strong>Contoh:</strong> L = {aⁿbⁿ | n ≥ 0} <strong>bukan regular</strong>. Misalkan p ada, ambil s = aᵖbᵖ. Maka y = aᵏ (hanya a, karena |xy| ≤ p). Pump y: xy²z = aᵖ⁺ᵏbᵖ — jumlah a ≠ b. Kontradiksi! L bukan regular, dia context-free.</p>
</div>

<h2>1. Finite Automata (DFA & NFA)</h2>

<h3>DFA — Deterministic Finite Automaton</h3>
<div class="card">
    <p>DFA adalah mesin abstrak yang membaca input <strong>satu karakter per langkah</strong> dari kiri ke kanan. Di setiap state, ada <strong>tepat satu transisi</strong> untuk setiap simbol — maka namanya "deterministic". Bayangkan seperti kamu mengikuti peta jalan di mana setiap persimpangan hanya punya satu arah untuk setiap petunjuk.</p>
    <h4>Definisi Formal: DFA M = (Q, Σ, δ, q₀, F)</h4>
    <ul>
        <li><strong>Q</strong> = Himpunan state terbatas — "posisi" yang mungkin ditempati mesin</li>
        <li><strong>Σ</strong> = Alfabet input — simbol-simbol yang bisa dibaca (misal {0, 1})</li>
        <li><strong>δ: Q × Σ → Q</strong> = Fungsi transisi — "peta jalan", untuk setiap (state, simbol) ada tepat 1 tujuan</li>
        <li><strong>q₀ ∈ Q</strong> = State awal — titik mulai</li>
        <li><strong>F ⊆ Q</strong> = Accept states — jika berhenti di sini, string diterima (double circle)</li>
    </ul>
    <p>Proses: mulai di q₀, baca simbol pertama → pindah state sesuai δ → baca simbol kedua → ... → setelah semua simbol dibaca, jika <strong>state saat ini ∈ F</strong>, string <strong>diterima</strong>. Jika tidak, string <strong>ditolak</strong>.</p>
</div>

<h4>Animasi Interaktif: DFA yang menerima string berakhiran "01"</h4>
<p>DFA ini punya 3 state: q₀ (start, belum lihat pola), q₁ (baru baca "0"), q₂ (baru baca "01" → accept). Coba masukkan string biner dan lihat bagaimana mesin bergerak langkah demi langkah.</p>
<div class="anim-container">
    <canvas id="dfa-canvas" width="700" height="300"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Input: <input type="text" id="dfa-input" class="anim-input" value="1101" maxlength="20" placeholder="masukkan 0 dan 1"></label>
        <button class="anim-btn" id="dfa-run">Run DFA</button>
        <button class="anim-btn secondary" id="dfa-reset">Reset</button>
        <span id="dfa-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>
<div class="card" style="margin-top:0;border-top:none;border-radius:0 0 12px 12px;">
    <h4>Tabel Transisi δ</h4>
    <table>
    <tr><th>State</th><th>Input 0</th><th>Input 1</th><th>Keterangan</th></tr>
    <tr><td>→ q₀</td><td>q₁</td><td>q₀</td><td>Start. Baca 0 → mungkin awal "01"</td></tr>
    <tr><td>q₁</td><td>q₁</td><td><strong>q₂</strong></td><td>Sudah baca "0". Baca 1 → "01" lengkap!</td></tr>
    <tr><td>*q₂</td><td>q₁</td><td>q₀</td><td>Accept state (double circle). Reset jika string berlanjut</td></tr>
    </table>
    <p>→ = start state, * = accept state. Coba input: "01" ✓, "1101" ✓, "10" ✗, "0110" ✗</p>
</div>

<h3>NFA — Nondeterministic Finite Automaton</h3>
<div class="card">
    <p>NFA punya "kekuatan super" dibanding DFA: dari satu state, bisa ada <strong>banyak transisi</strong> untuk simbol yang sama, atau bahkan transisi <strong>tanpa membaca input</strong> (ε-transition). Bayangkan NFA seperti orang yang bisa <strong>mengkloning diri</strong> di setiap persimpangan dan menjelajahi semua jalan sekaligus — jika <em>salah satu</em> klon sampai ke accept state, string diterima.</p>
</div>

<h4>Animasi: NFA yang menerima string mengandung "11"</h4>
<p>NFA ini mencari subsequence "11" di mana saja. Perhatikan bagaimana di q₀ ada <strong>dua transisi</strong> untuk input "1" — ke q₀ DAN ke q₁ (nondeterministic!).</p>
<div class="anim-container">
    <canvas id="nfa-canvas" width="700" height="300"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Input: <input type="text" id="nfa-input" class="anim-input" value="0110" maxlength="20" placeholder="masukkan 0 dan 1"></label>
        <button class="anim-btn" id="nfa-run">Run NFA</button>
        <button class="anim-btn secondary" id="nfa-reset">Reset</button>
        <span id="nfa-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>

<div class="card-grid">
    <div class="card">
        <h4>DFA vs NFA — Perbandingan Lengkap</h4>
        <table>
        <tr><th>Aspek</th><th>DFA</th><th>NFA</th></tr>
        <tr><td>Transisi per simbol</td><td>Tepat 1</td><td>0, 1, atau banyak</td></tr>
        <tr><td>ε-transition</td><td>Tidak ada</td><td>Diperbolehkan</td></tr>
        <tr><td>Kekuatan pengenalan</td><td colspan="2" style="text-align:center;color:var(--accent)"><strong>Sama! (equivalent)</strong></td></tr>
        <tr><td>Jumlah state</td><td>Bisa 2ⁿ kali NFA</td><td>Lebih compact</td></tr>
        <tr><td>Eksekusi</td><td>Langsung (deterministik)</td><td>Eksplorasi paralel</td></tr>
        <tr><td>Kemudahan desain</td><td>Lebih sulit</td><td>Lebih mudah & intuitif</td></tr>
        </table>
    </div>
    <div class="card">
        <h4>Konversi NFA → DFA (Subset Construction)</h4>
        <p>Setiap state di DFA baru merepresentasikan <strong>himpunan state</strong> yang mungkin aktif di NFA. Worst case: NFA n state → DFA <strong>2ⁿ state</strong>.</p>
        <div class="code-block"><span class="cm">// NFA states: {q0, q1, q2}</span>
<span class="cm">// DFA states (subsets):</span>
{q0}         <span class="cm">// start</span>
{q0, q1}     <span class="cm">// setelah baca "1" dari q0</span>
{q0, q2}     <span class="cm">// setelah baca "11"</span>
{q0, q1, q2} <span class="cm">// dll...</span>
<span class="cm">// Setiap subset jadi 1 state di DFA</span></div>
    </div>
</div>

<h2>2. Regular Expression & Bahasa Regular</h2>
<div class="card">
    <h4>Operasi Dasar Regex</h4>
    <div class="table-wrapper">
    <table>
    <tr><th>Operasi</th><th>Notasi</th><th>Arti</th><th>Contoh</th><th>Match</th></tr>
    <tr><td>Union</td><td>a | b</td><td>a atau b</td><td>(cat|dog)</td><td>"cat", "dog"</td></tr>
    <tr><td>Concatenation</td><td>ab</td><td>a diikuti b</td><td>ab</td><td>"ab"</td></tr>
    <tr><td>Kleene Star</td><td>a*</td><td>0 atau lebih a</td><td>a*b</td><td>"b", "ab", "aab"</td></tr>
    <tr><td>Plus</td><td>a+</td><td>1 atau lebih a</td><td>a+b</td><td>"ab", "aab" (bukan "b")</td></tr>
    <tr><td>Optional</td><td>a?</td><td>0 atau 1 a</td><td>colou?r</td><td>"color", "colour"</td></tr>
    </table>
    </div>
    <div class="info-box">
        <strong>Teorema Kleene (1956):</strong> Tiga model ini mengenali <strong>bahasa yang persis sama</strong> — Regular Languages:<br>
        <strong>Regex ≡ NFA ≡ DFA</strong><br>
        Artinya: setiap regex bisa dikonversi ke NFA (Thompson's Construction), setiap NFA ke DFA (Subset Construction), dan setiap DFA ke regex (State Elimination).
    </div>
</div>

<h2>3. Pushdown Automata (PDA)</h2>
<div class="card">
    <p>PDA = Finite Automata + <strong>Stack</strong> (memory tak terbatas tipe LIFO). Stack inilah yang memberi PDA kekuatan lebih dari FA — dia bisa <strong>"mengingat"</strong> berapa banyak simbol tertentu sudah dibaca. PDA mengenali <strong>Context-Free Languages (CFL)</strong>.</p>
    <p><strong>Analogi:</strong> Bayangkan kamu menghitung tanda kurung di kode program. Setiap "(" kamu tumpuk batu, setiap ")" kamu ambil satu batu. Jika tumpukan kosong di akhir → balanced! Itulah PDA.</p>
</div>

<h4>Animasi: PDA untuk L = {aⁿbⁿ | n ≥ 1}</h4>
<p>Setiap "a" dibaca → <strong>push A</strong> ke stack. Setiap "b" dibaca → <strong>pop A</strong> dari stack. Jika stack kosong saat semua input habis → <strong>Accept</strong>. Stack di kanan menunjukkan isinya secara real-time.</p>
<div class="anim-container">
    <canvas id="pda-canvas" width="700" height="300"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Input: <input type="text" id="pda-input" class="anim-input" value="aaabbb" maxlength="20" placeholder="coba aaabbb atau aabb"></label>
        <button class="anim-btn" id="pda-run">Run PDA</button>
        <button class="anim-btn secondary" id="pda-reset">Reset</button>
        <span id="pda-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>

<div class="card">
    <h4>Definisi Formal: PDA = (Q, Σ, Γ, δ, q₀, Z₀, F)</h4>
    <ul>
        <li><strong>Γ</strong> = Alfabet stack (simbol yang bisa di-push/pop)</li>
        <li><strong>Z₀</strong> = Simbol awal stack (penanda dasar)</li>
        <li><strong>δ: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)</strong> — baca input + top stack → pindah state + modifikasi stack</li>
    </ul>
    <h4>Tabel Transisi PDA untuk aⁿbⁿ</h4>
    <div class="code-block"><span class="cm">// State: q0 (push phase), q1 (pop phase), q_accept</span>
δ(q0, a, Z₀) = {(q0, AZ₀)}    <span class="cm">// pertama kali baca a, push A di atas Z₀</span>
δ(q0, a, A)  = {(q0, AA)}      <span class="cm">// baca a lagi, push A lagi</span>
δ(q0, b, A)  = {(q1, ε)}       <span class="cm">// mulai baca b, pop A (switch ke mode pop)</span>
δ(q1, b, A)  = {(q1, ε)}       <span class="cm">// terus baca b, terus pop A</span>
δ(q1, ε, Z₀) = {(q_acc, Z₀)}  <span class="cm">// input habis, stack hanya Z₀ → ACCEPT</span>

<span class="cm">// Mengapa aⁿbⁿ tidak bisa dikenali FA (tanpa stack)?</span>
<span class="cm">// FA punya memori terbatas (finite states).</span>
<span class="cm">// Untuk mengingat "sudah baca berapa a", butuh n state berbeda.</span>
<span class="cm">// Tapi n bisa tak terbatas → FA tidak cukup!</span></div>
</div>

<h2>4. Turing Machine</h2>
<div class="card">
    <p><strong>Turing Machine (TM)</strong> adalah model komputasi paling powerful — <strong>basis dari semua komputer modern</strong>. Diperkenalkan oleh <strong>Alan Turing (1936)</strong> dalam paper legendaris "On Computable Numbers."</p>
    <p><strong>Analogi:</strong> Bayangkan kamu punya <strong>kertas gulungan tak terbatas</strong> (tape) yang bisa kamu tulis dan baca, <strong>pena</strong> yang bisa bergerak kiri/kanan (head), dan <strong>buku petunjuk</strong> (finite control/transition table). Setiap langkah: baca apa yang ditulis di posisi saat ini → lihat buku petunjuk → tulis sesuatu → gerak kiri atau kanan → ulangi.</p>
</div>

<div class="card">
    <h4>Komponen Turing Machine: TM = (Q, Σ, Γ, δ, q₀, q_accept, q_reject)</h4>
    <div class="anim-container" style="padding:20px;text-align:center">
        <svg width="660" height="160" viewBox="0 0 660 160" style="max-width:100%">
            <!-- Tape cells -->
            <rect x="40" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="92" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="144" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="196" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="248" y="60" width="50" height="50" rx="4" fill="rgba(56,189,248,0.15)" stroke="var(--accent)" stroke-width="2.5"/>
            <rect x="300" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="352" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="404" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <rect x="456" y="60" width="50" height="50" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
            <!-- Tape content -->
            <text x="65" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="JetBrains Mono">B</text>
            <text x="117" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="JetBrains Mono">1</text>
            <text x="169" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="JetBrains Mono">0</text>
            <text x="221" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="JetBrains Mono">1</text>
            <text x="273" y="92" text-anchor="middle" fill="var(--accent)" font-size="20" font-weight="700" font-family="JetBrains Mono">1</text>
            <text x="325" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="JetBrains Mono">0</text>
            <text x="377" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="JetBrains Mono">B</text>
            <text x="429" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="JetBrains Mono">B</text>
            <text x="481" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="JetBrains Mono">B</text>
            <!-- ... labels -->
            <text x="15" y="90" fill="var(--text2)" font-size="10">...</text>
            <text x="515" y="90" fill="var(--text2)" font-size="10">... ∞</text>
            <!-- Head -->
            <polygon points="273,55 263,35 283,35" fill="var(--accent)"/>
            <text x="273" y="27" text-anchor="middle" fill="var(--accent)" font-size="12" font-weight="700">HEAD</text>
            <!-- Tape label -->
            <text x="273" y="135" text-anchor="middle" fill="var(--text2)" font-size="11">← Infinite Tape (B = Blank) →</text>
            <!-- Finite Control box -->
            <rect x="530" y="25" width="120" height="70" rx="10" fill="rgba(129,140,248,0.1)" stroke="var(--accent2)" stroke-width="2"/>
            <text x="590" y="55" text-anchor="middle" fill="var(--accent2)" font-size="12" font-weight="700">Finite</text>
            <text x="590" y="72" text-anchor="middle" fill="var(--accent2)" font-size="12" font-weight="700">Control</text>
            <line x1="530" y1="60" x2="510" y2="45" stroke="var(--accent2)" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="590" y="145" text-anchor="middle" fill="var(--text2)" font-size="10">δ: Q × Γ → Q × Γ × {L, R}</text>
        </svg>
    </div>
    <ul>
        <li><strong>Tape</strong>: pita tak terbatas ke kiri dan kanan, berisi simbol dari Γ. B = blank (kosong).</li>
        <li><strong>Head</strong>: bisa bergerak <strong>Left (L)</strong> atau <strong>Right (R)</strong>, satu langkah per waktu.</li>
        <li><strong>Finite Control</strong>: otak mesin, berisi state saat ini dan tabel transisi.</li>
        <li><strong>δ(q, a) = (q', b, D)</strong>: "Jika di state q dan baca simbol a, pindah ke state q', tulis b, gerak ke arah D."</li>
    </ul>
</div>

<h4>Animasi Interaktif: Turing Machine — Binary Incrementer (+1)</h4>
<p>TM ini menambahkan 1 ke bilangan biner. Mulai dari digit paling kanan, jika 1→0 (carry), jika 0→1 (selesai). Perhatikan head bergerak ke kiri sambil mengubah tape.</p>
<div class="anim-container">
    <canvas id="tm-canvas" width="700" height="250"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Binary: <input type="text" id="tm-input" class="anim-input" value="1011" maxlength="12" placeholder="binary number"></label>
        <button class="anim-btn" id="tm-run">Run TM</button>
        <button class="anim-btn secondary" id="tm-reset">Reset</button>
        <span id="tm-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>
<div class="card" style="margin-top:0;border-top:none;border-radius:0 0 12px 12px;">
    <h4>Transition Table — Binary Incrementer</h4>
    <table>
    <tr><th>State</th><th>Read</th><th>Write</th><th>Move</th><th>Next State</th><th>Keterangan</th></tr>
    <tr><td>q₀</td><td>1</td><td>0</td><td>L</td><td>q₀</td><td>1+1=10, tulis 0, carry ke kiri</td></tr>
    <tr><td>q₀</td><td>0</td><td>1</td><td>-</td><td>halt</td><td>0+1=1, tidak ada carry, selesai</td></tr>
    <tr><td>q₀</td><td>B</td><td>1</td><td>-</td><td>halt</td><td>Carry melewati semua digit, tulis 1 baru</td></tr>
    </table>
    <p><strong>Contoh:</strong> 1011₂ (11) → 1100₂ (12). 111₂ (7) → 1000₂ (8). Coba sendiri!</p>
</div>

<h3>Church-Turing Thesis</h3>
<div class="card">
    <div class="info-box">
        <strong>Church-Turing Thesis (1936):</strong> Setiap fungsi yang secara intuitif "dapat dihitung" oleh proses mekanis apa pun, dapat dihitung oleh Turing Machine.
    </div>
    <p>Ini <strong>bukan teorema</strong> (tidak bisa dibuktikan secara formal), melainkan <em>thesis</em> yang diterima secara universal. Semua model komputasi yang pernah ditemukan — lambda calculus, recursive functions, RAM machines, bahkan komputer kuantum (untuk decidability) — <strong>terbukti equivalent</strong> dengan Turing Machine.</p>
    <p><strong>Implikasi:</strong> Jika sesuatu tidak bisa dihitung oleh TM, maka ia tidak bisa dihitung oleh mesin apa pun. Titik.</p>
</div>

<h3>Decidable vs Undecidable</h3>
<div class="card-grid">
    <div class="card" style="border-color:var(--green)">
        <h4>Decidable (Recursive)</h4>
        <p>TM <strong>selalu berhenti</strong> (accept atau reject) untuk <em>setiap</em> input.</p>
        <ul>
            <li>"Apakah string ini diterima DFA ini?" ✅</li>
            <li>"Apakah CFG ini menghasilkan string ini?" ✅ (CYK algorithm)</li>
            <li>"Apakah dua DFA equivalent?" ✅</li>
        </ul>
    </div>
    <div class="card" style="border-color:var(--red)">
        <h4>Undecidable</h4>
        <p><strong>Tidak ada TM</strong> yang selalu berhenti dan menjawab benar untuk setiap input.</p>
        <ul>
            <li><strong>Halting Problem</strong> — "Apakah program P berhenti pada input I?" ✗</li>
            <li>"Apakah 2 CFG menghasilkan bahasa yang sama?" ✗</li>
            <li>"Apakah TM ini accept string apa pun?" ✗</li>
        </ul>
    </div>
</div>

<div class="card">
    <h4>Halting Problem — Bukti Undecidability</h4>
    <p><strong>Alan Turing (1936)</strong> membuktikan bahwa <em>tidak ada algoritma umum</em> yang bisa menentukan apakah program sembarang akan berhenti — menggunakan teknik <strong>diagonalisasi</strong> (mirip bukti Cantor bahwa real numbers uncountable).</p>
    <div class="code-block"><span class="cm">// Bukti by contradiction — asumsikan ada oracle H(P, I)</span>
<span class="cm">// yang return true jika P(I) berhenti, false jika loop forever</span>

<span class="kw">function</span> <span class="fn">paradox</span>(P) {
    <span class="kw">if</span> (H(P, P) === <span class="num">true</span>) {   <span class="cm">// "P berhenti saat input dirinya sendiri"</span>
        <span class="kw">while</span>(<span class="num">true</span>) {}          <span class="cm">// → kita sengaja loop forever</span>
    } <span class="kw">else</span> {                    <span class="cm">// "P tidak berhenti"</span>
        <span class="kw">return</span>;                 <span class="cm">// → kita sengaja berhenti</span>
    }
}

<span class="cm">// Pertanyaan: apakah paradox(paradox) berhenti?</span>
<span class="cm">// Jika H bilang "ya" → paradox loop forever → H salah!</span>
<span class="cm">// Jika H bilang "tidak" → paradox berhenti → H salah!</span>
<span class="cm">// → H tidak mungkin ada. QED. □</span></div>
</div>

<h2>Ringkasan: Kekuatan Komputasi</h2>
<div class="table-wrapper">
<table>
<tr><th>Mesin</th><th>Memory</th><th>Bahasa</th><th>Contoh Bahasa</th><th>Closure Properties</th></tr>
<tr><td>DFA / NFA</td><td>Tidak ada (finite)</td><td>Regular</td><td>a*b*, (0|1)*01</td><td>∪, ∩, *, complement, concat</td></tr>
<tr><td>PDA</td><td>Stack (LIFO, ∞)</td><td>Context-Free</td><td>aⁿbⁿ, balanced parens</td><td>∪, *, concat (TIDAK ∩, complement)</td></tr>
<tr><td>LBA</td><td>Tape terbatas (|input|)</td><td>Context-Sensitive</td><td>aⁿbⁿcⁿ</td><td>∪, ∩, complement, *</td></tr>
<tr><td>TM</td><td>Tape tak terbatas</td><td>Recursively Enumerable</td><td>Semua program</td><td>∪, ∩, * (TIDAK complement)</td></tr>
</table>
</div>
`;

// ====================== COMPLEXITY THEORY ======================
sections.complexity = () => `
<h1 class="section-title animate-in">Complexity Theory</h1>
<p class="section-subtitle animate-in">Memahami batas-batas komputasi: P, NP, NP-Hard, dan NP-Complete</p>

<h2>Big-O Notation (Notasi Kompleksitas)</h2>
<div class="card">
    <p>Big-O mengukur <strong>pertumbuhan waktu/ruang</strong> algoritma terhadap ukuran input n.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Notasi</th><th>Nama</th><th>Contoh</th><th>n=1000</th></tr>
    <tr><td><code>O(1)</code></td><td>Constant</td><td>Array access</td><td>1</td></tr>
    <tr><td><code>O(log n)</code></td><td>Logarithmic</td><td>Binary search</td><td>~10</td></tr>
    <tr><td><code>O(n)</code></td><td>Linear</td><td>Linear search</td><td>1,000</td></tr>
    <tr><td><code>O(n log n)</code></td><td>Linearithmic</td><td>Merge sort</td><td>~10,000</td></tr>
    <tr><td><code>O(n²)</code></td><td>Quadratic</td><td>Bubble sort</td><td>1,000,000</td></tr>
    <tr><td><code>O(n³)</code></td><td>Cubic</td><td>Matrix multiply</td><td>10⁹</td></tr>
    <tr><td><code>O(2ⁿ)</code></td><td>Exponential</td><td>Subset sum brute force</td><td>~10³⁰⁰</td></tr>
    <tr><td><code>O(n!)</code></td><td>Factorial</td><td>TSP brute force</td><td>~10²⁵⁶⁷</td></tr>
    </table>
    </div>
</div>

<h2>Big-O, Big-Θ, dan Big-Ω</h2>
<div class="card">
    <p>Tiga notasi asimptotik ini menggambarkan <strong>pertumbuhan fungsi</strong> dari sudut pandang berbeda. Bayangkan kamu memesan ojol — ada estimasi waktu tercepat, rata-rata, dan terlambat.</p>
</div>

<div class="card-grid-3">
    <div class="card" style="border-color:var(--red)">
        <h3 style="color:var(--red)">O (Big-O) — Upper Bound</h3>
        <p><strong>Analogi:</strong> "Paling lambat segini."</p>
        <p>Big-O memberikan <strong>batas atas</strong> pertumbuhan. Artinya algoritma <em>tidak akan pernah lebih lambat</em> dari ini untuk input yang cukup besar.</p>
        <div class="code-block"><span class="cm">// f(n) = O(g(n)) artinya:</span>
<span class="cm">// Ada konstanta c > 0 dan n₀ sehingga</span>
<span class="cm">// f(n) ≤ c · g(n) untuk semua n ≥ n₀</span>

<span class="cm">// Contoh: 3n² + 5n + 2 = O(n²)</span>
<span class="cm">// Karena untuk c=4, n₀=6:</span>
<span class="cm">// 3n² + 5n + 2 ≤ 4n² ✓</span></div>
        <p><strong>Kapan dipakai:</strong> <em>Paling sering digunakan!</em> Untuk menjamin <strong>worst case</strong> tidak melebihi batas tertentu.</p>
    </div>
    <div class="card" style="border-color:var(--green)">
        <h3 style="color:var(--green)">Ω (Big-Omega) — Lower Bound</h3>
        <p><strong>Analogi:</strong> "Paling cepat segini."</p>
        <p>Big-Ω memberikan <strong>batas bawah</strong> pertumbuhan. Artinya algoritma <em>pasti membutuhkan setidaknya</em> sebanyak ini operasi.</p>
        <div class="code-block"><span class="cm">// f(n) = Ω(g(n)) artinya:</span>
<span class="cm">// Ada konstanta c > 0 dan n₀ sehingga</span>
<span class="cm">// f(n) ≥ c · g(n) untuk semua n ≥ n₀</span>

<span class="cm">// Contoh: 3n² + 5n + 2 = Ω(n²)</span>
<span class="cm">// Karena untuk c=3, n₀=1:</span>
<span class="cm">// 3n² + 5n + 2 ≥ 3n² ✓</span></div>
        <p><strong>Kapan dipakai:</strong> Membuktikan bahwa <strong>tidak ada algoritma yang bisa lebih cepat</strong> dari batas ini. Contoh: sorting berbasis perbandingan = Ω(n log n).</p>
    </div>
    <div class="card" style="border-color:var(--accent)">
        <h3 style="color:var(--accent)">Θ (Big-Theta) — Tight Bound</h3>
        <p><strong>Analogi:</strong> "Persis di kisaran segini."</p>
        <p>Big-Θ memberikan <strong>batas ketat</strong> — atas DAN bawah sekaligus. Fungsi tumbuh <em>persis sebanding</em> dengan g(n).</p>
        <div class="code-block"><span class="cm">// f(n) = Θ(g(n)) artinya:</span>
<span class="cm">// f(n) = O(g(n)) DAN f(n) = Ω(g(n))</span>
<span class="cm">// Ada c₁, c₂ > 0 dan n₀ sehingga</span>
<span class="cm">// c₁·g(n) ≤ f(n) ≤ c₂·g(n) untuk n ≥ n₀</span>

<span class="cm">// Contoh: 3n² + 5n + 2 = Θ(n²)</span>
<span class="cm">// Karena O(n²) DAN Ω(n²) ✓</span></div>
        <p><strong>Kapan dipakai:</strong> Saat kita tahu <strong>persis</strong> berapa pertumbuhannya, bukan hanya batas atas/bawah.</p>
    </div>
</div>

<div class="card">
    <h3>Perbandingan Visual — Analogi Sederhana</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Notasi</th><th>Arti</th><th>Analogi</th><th>Matematika</th><th>Contoh Sehari-hari</th></tr>
    <tr><td><code>O(g(n))</code></td><td>Paling lambat</td><td>≤ (at most)</td><td>f(n) ≤ c·g(n)</td><td>"Saya sampai <strong>paling lambat</strong> 30 menit"</td></tr>
    <tr><td><code>Ω(g(n))</code></td><td>Paling cepat</td><td>≥ (at least)</td><td>f(n) ≥ c·g(n)</td><td>"Saya butuh <strong>minimal</strong> 10 menit"</td></tr>
    <tr><td><code>Θ(g(n))</code></td><td>Persis di kisaran</td><td>= (exactly)</td><td>c₁·g(n) ≤ f(n) ≤ c₂·g(n)</td><td>"Saya sampai <strong>antara</strong> 15-20 menit"</td></tr>
    </table>
    </div>
    <div class="info-box">
        <strong>Tips Mudah:</strong> Jika sebuah algoritma O(n²) sekaligus Ω(n²), maka dia <strong>Θ(n²)</strong>. Big-Θ = Big-O + Big-Ω bertemu di kelas yang sama.
    </div>
</div>

<div class="card">
    <h3>Contoh Penerapan pada Algoritma Nyata</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Algoritma</th><th>Best Case (Ω)</th><th>Average Case (Θ)</th><th>Worst Case (O)</th></tr>
    <tr><td><strong>Linear Search</strong></td><td>Ω(1) — item di awal</td><td>Θ(n) — rata-rata di tengah</td><td>O(n) — item di akhir / tidak ada</td></tr>
    <tr><td><strong>Binary Search</strong></td><td>Ω(1) — item di tengah</td><td>Θ(log n)</td><td>O(log n)</td></tr>
    <tr><td><strong>Bubble Sort</strong></td><td>Ω(n) — sudah terurut</td><td>Θ(n²)</td><td>O(n²) — terbalik urutan</td></tr>
    <tr><td><strong>Merge Sort</strong></td><td>Ω(n log n)</td><td>Θ(n log n)</td><td>O(n log n) — selalu sama!</td></tr>
    <tr><td><strong>Quick Sort</strong></td><td>Ω(n log n)</td><td>Θ(n log n)</td><td>O(n²) — pivot terburuk</td></tr>
    <tr><td><strong>Hash Table Lookup</strong></td><td>Ω(1)</td><td>Θ(1) — amortized</td><td>O(n) — semua collision</td></tr>
    </table>
    </div>
    <div class="warn-box">
        <strong>Mengapa Merge Sort lebih "predictable" dari Quick Sort?</strong> Karena Merge Sort punya Θ(n log n) — best, average, dan worst case sama. Quick Sort bisa jatuh ke O(n²) pada worst case, meskipun average-nya Θ(n log n).
    </div>
</div>

<h2>Time Complexity vs Space Complexity</h2>
<div class="card">
    <p>Setiap algoritma menggunakan dua sumber daya:</p>
    <div class="card-grid">
        <div class="card" style="border-color:var(--yellow)">
            <h3 style="color:var(--yellow)">Time Complexity</h3>
            <p><strong>Berapa lama</strong> algoritma berjalan terhadap ukuran input.</p>
            <p>Diukur dari jumlah <strong>operasi dasar</strong> (perbandingan, assignment, aritmatika) yang dilakukan.</p>
            <div class="code-block"><span class="cm">// Time: O(n) — loop n kali</span>
<span class="kw">for</span> i <span class="kw">in</span> range(n):
    total += arr[i]  <span class="cm">// 1 operasi per iterasi</span>

<span class="cm">// Time: O(n²) — nested loop</span>
<span class="kw">for</span> i <span class="kw">in</span> range(n):
    <span class="kw">for</span> j <span class="kw">in</span> range(n):
        matrix[i][j] = <span class="num">0</span>  <span class="cm">// n × n operasi</span></div>
        </div>
        <div class="card" style="border-color:var(--accent3)">
            <h3 style="color:var(--accent3)">Space Complexity</h3>
            <p><strong>Berapa banyak memori tambahan</strong> yang dibutuhkan algoritma (selain input).</p>
            <p>Diukur dari variabel, array, stack rekursi, dan struktur data yang dibuat.</p>
            <div class="code-block"><span class="cm">// Space: O(1) — hanya variabel biasa</span>
total = <span class="num">0</span>
<span class="kw">for</span> x <span class="kw">in</span> arr:
    total += x  <span class="cm">// tidak ada memori tambahan</span>

<span class="cm">// Space: O(n) — buat array baru</span>
result = [<span class="num">0</span>] * n
<span class="kw">for</span> i <span class="kw">in</span> range(n):
    result[i] = arr[i] * <span class="num">2</span>  <span class="cm">// array baru ukuran n</span></div>
        </div>
    </div>
</div>

<div class="card">
    <h3>Trade-off: Time vs Space</h3>
    <p>Seringkali ada <strong>pertukaran</strong> antara waktu dan memori — kita bisa mempercepat algoritma dengan menggunakan lebih banyak memori, atau sebaliknya.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Contoh</th><th>Approach A</th><th>Approach B</th><th>Trade-off</th></tr>
    <tr>
        <td><strong>Two Sum</strong></td>
        <td>Brute force: Time O(n²), Space O(1)</td>
        <td>Hash map: Time O(n), Space O(n)</td>
        <td>Pakai memori → lebih cepat</td>
    </tr>
    <tr>
        <td><strong>Fibonacci</strong></td>
        <td>Rekursif: Time O(2ⁿ), Space O(n)</td>
        <td>DP table: Time O(n), Space O(n)</td>
        <td>Simpan hasil → hindari recompute</td>
    </tr>
    <tr>
        <td><strong>Fibonacci (optimized)</strong></td>
        <td>DP table: Time O(n), Space O(n)</td>
        <td>2 variabel: Time O(n), Space O(1)</td>
        <td>Hanya perlu 2 angka terakhir</td>
    </tr>
    <tr>
        <td><strong>Sorting</strong></td>
        <td>Merge Sort: Time O(n log n), Space O(n)</td>
        <td>Heap Sort: Time O(n log n), Space O(1)</td>
        <td>In-place → hemat memori</td>
    </tr>
    <tr>
        <td><strong>Cache/Memoize</strong></td>
        <td>Tanpa cache: hemat memori, lambat</td>
        <td>Dengan cache: pakai memori, cepat</td>
        <td>Klasik time-space trade-off</td>
    </tr>
    </table>
    </div>
</div>

<div class="card">
    <h3>Space Complexity pada Algoritma Populer</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Algoritma</th><th>Time</th><th>Space</th><th>Penjelasan Space</th></tr>
    <tr><td>Binary Search</td><td>O(log n)</td><td>O(1) iteratif / O(log n) rekursif</td><td>Iteratif: hanya 3 pointer. Rekursif: call stack depth log n.</td></tr>
    <tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n)</td><td>Butuh array temporary untuk merge step.</td></tr>
    <tr><td>Quick Sort</td><td>O(n log n) avg</td><td>O(log n)</td><td>In-place, tapi call stack depth log n (avg).</td></tr>
    <tr><td>BFS</td><td>O(V + E)</td><td>O(V)</td><td>Queue bisa berisi sampai semua vertices.</td></tr>
    <tr><td>DFS</td><td>O(V + E)</td><td>O(V)</td><td>Stack (rekursif / eksplisit) depth sampai V.</td></tr>
    <tr><td>Dijkstra</td><td>O((V+E) log V)</td><td>O(V)</td><td>Priority queue + distance array.</td></tr>
    <tr><td>DP (Knapsack)</td><td>O(n × W)</td><td>O(n × W) → bisa O(W)</td><td>Tabel 2D, tapi bisa dioptimasi ke 1D.</td></tr>
    <tr><td>Hash Table</td><td>O(1) avg</td><td>O(n)</td><td>Menyimpan n elemen + bucket overhead.</td></tr>
    </table>
    </div>
</div>

<div class="card">
    <h3>Contoh: Menganalisis Time & Space Sekaligus</h3>
    <div class="code-block"><span class="kw">def</span> <span class="fn">find_duplicates</span>(arr):                <span class="cm"># n = len(arr)</span>
    seen = set()                            <span class="cm"># Space: O(n) — set bisa berisi n elemen</span>
    duplicates = []                         <span class="cm"># Space: O(n) — worst case semua duplikat</span>
    <span class="kw">for</span> num <span class="kw">in</span> arr:                         <span class="cm"># Time: O(n) — loop n kali</span>
        <span class="kw">if</span> num <span class="kw">in</span> seen:                     <span class="cm"># Time: O(1) — hash lookup</span>
            duplicates.append(num)          <span class="cm"># Time: O(1) — amortized</span>
        <span class="kw">else</span>:
            seen.add(num)                   <span class="cm"># Time: O(1) — hash insert</span>
    <span class="kw">return</span> duplicates

<span class="cm"># Total: Time = O(n), Space = O(n)</span>
<span class="cm"># Trade-off: brute force bisa O(1) space tapi O(n²) time</span></div>
</div>

<h4>Visualisasi Pertumbuhan Kompleksitas</h4>
<div class="anim-container">
    <canvas id="complexity-chart" width="700" height="350"></canvas>
</div>

<h2>Kelas Kompleksitas</h2>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--green)">P (Polynomial)</h3>
        <p>Masalah yang dapat <strong>diselesaikan</strong> dalam waktu polinomial oleh Turing Machine deterministik.</p>
        <ul>
            <li>Sorting → O(n log n)</li>
            <li>Shortest path → O(V²) / O(E log V)</li>
            <li>Matrix multiplication → O(n³)</li>
            <li>Linear programming</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--yellow)">NP (Nondeterministic Polynomial)</h3>
        <p>Masalah yang <strong>solusinya dapat diverifikasi</strong> dalam waktu polinomial.</p>
        <ul>
            <li>Sudoku → sulit mencari, mudah verifikasi</li>
            <li>SAT (Boolean Satisfiability)</li>
            <li>Graph Coloring</li>
            <li>Subset Sum</li>
        </ul>
        <div class="info-box">P ⊆ NP (setiap masalah di P juga di NP). Pertanyaan besar: <strong>P = NP?</strong> (Millennium Prize $1M)</div>
    </div>
</div>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--orange)">NP-Hard</h3>
        <p>Masalah yang <strong>setidaknya sesulit</strong> semua masalah di NP. Tidak harus bisa diverifikasi dalam waktu polinomial.</p>
        <ul>
            <li>Halting Problem (undecidable!)</li>
            <li>Traveling Salesman (optimasi)</li>
            <li>General Game Playing</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--red)">NP-Complete</h3>
        <p>Masalah yang ada di <strong>NP ∩ NP-Hard</strong>. Jika satu NP-Complete bisa diselesaikan di P, maka <strong>P = NP</strong>.</p>
        <ul>
            <li>SAT (Cook-Levin, 1971)</li>
            <li>3-SAT, Vertex Cover</li>
            <li>Subset Sum, Knapsack (decision)</li>
            <li>Hamiltonian Cycle</li>
        </ul>
    </div>
</div>

<h3>Diagram Hubungan Kelas Kompleksitas</h3>
<p><em>Ref: Sipser Ch.7; Arora & Barak Ch.2-3; Garey & Johnson (1979)</em></p>

<div class="tabs">
    <button class="tab-btn active" data-tab="diagram-pneqnp">Jika P ≠ NP (dipercaya)</button>
    <button class="tab-btn" data-tab="diagram-peqnp">Jika P = NP (unlikely)</button>
</div>
<div data-tab-content="diagram-pneqnp" class="tab-content active">
<div class="anim-container" style="padding:20px;text-align:center;">
    <svg width="680" height="520" viewBox="0 0 680 520" style="max-width:100%">
        <!-- Title -->
        <text x="340" y="25" text-anchor="middle" fill="var(--text)" font-size="15" font-weight="800">Asumsi: P ≠ NP (Konsensus Mayoritas)</text>

        <!-- NP-Hard — large oval extending beyond NP -->
        <ellipse cx="380" cy="280" rx="290" ry="220" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="648" y="85" fill="var(--red)" font-size="13" font-weight="700">NP-Hard</text>
        <text x="648" y="102" fill="var(--text2)" font-size="9">Setidaknya sesulit</text>
        <text x="648" y="114" fill="var(--text2)" font-size="9">semua masalah di NP</text>

        <!-- NP — oval inside -->
        <ellipse cx="300" cy="295" rx="230" ry="185" fill="rgba(251,191,36,0.04)" stroke="var(--yellow)" stroke-width="2"/>
        <text x="95" y="135" fill="var(--yellow)" font-size="14" font-weight="700">NP</text>
        <text x="95" y="152" fill="var(--text2)" font-size="9">Solusi bisa diverifikasi</text>
        <text x="95" y="164" fill="var(--text2)" font-size="9">dalam waktu polinomial</text>

        <!-- P — smaller oval -->
        <ellipse cx="250" cy="350" rx="140" ry="100" fill="rgba(52,211,153,0.06)" stroke="var(--green)" stroke-width="2.5"/>
        <text x="185" y="310" fill="var(--green)" font-size="16" font-weight="800">P</text>
        <text x="155" y="330" fill="var(--text2)" font-size="9">Dapat diselesaikan</text>
        <text x="155" y="342" fill="var(--text2)" font-size="9">dalam waktu polinomial</text>

        <!-- NP-Complete — intersection of NP and NP-Hard, on boundary of NP -->
        <ellipse cx="420" cy="220" rx="65" ry="55" fill="rgba(251,146,60,0.08)" stroke="var(--orange)" stroke-width="2.5"/>
        <text x="420" y="210" text-anchor="middle" fill="var(--orange)" font-size="12" font-weight="700">NP-</text>
        <text x="420" y="226" text-anchor="middle" fill="var(--orange)" font-size="12" font-weight="700">Complete</text>
        <text x="420" y="242" text-anchor="middle" fill="var(--text2)" font-size="8">NP ∩ NP-Hard</text>

        <!-- NP-Intermediate (Ladner's theorem) -->
        <ellipse cx="310" cy="240" rx="45" ry="30" fill="rgba(167,139,250,0.08)" stroke="var(--accent3)" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="310" y="237" text-anchor="middle" fill="var(--accent3)" font-size="9" font-weight="600">NP-</text>
        <text x="310" y="249" text-anchor="middle" fill="var(--accent3)" font-size="9" font-weight="600">Intermediate</text>

        <!-- Example problems in P -->
        <text x="220" y="370" text-anchor="middle" fill="var(--green)" font-size="9">Sorting (n log n)</text>
        <text x="260" y="390" text-anchor="middle" fill="var(--green)" font-size="9">Shortest Path</text>
        <text x="210" y="408" text-anchor="middle" fill="var(--green)" font-size="9">Primality Testing</text>
        <text x="270" y="425" text-anchor="middle" fill="var(--green)" font-size="9">Linear Programming</text>
        <text x="300" y="442" text-anchor="middle" fill="var(--green)" font-size="9">2-SAT, Matching</text>

        <!-- Example problems NP-Complete -->
        <text x="420" y="265" text-anchor="middle" fill="var(--orange)" font-size="8.5">SAT, 3-SAT</text>
        <text x="420" y="278" text-anchor="middle" fill="var(--orange)" font-size="8.5">Vertex Cover</text>
        <text x="465" y="175" text-anchor="middle" fill="var(--orange)" font-size="8.5">Hamiltonian Cycle</text>
        <text x="475" y="190" text-anchor="middle" fill="var(--orange)" font-size="8.5">Subset Sum, 3-Coloring</text>
        <text x="380" y="155" text-anchor="middle" fill="var(--orange)" font-size="8.5">TSP (decision)</text>

        <!-- Example NP-Intermediate -->
        <text x="310" y="270" text-anchor="middle" fill="var(--accent3)" font-size="8">Factoring?</text>
        <text x="310" y="282" text-anchor="middle" fill="var(--accent3)" font-size="8">Graph Iso?</text>

        <!-- NP-Hard outside NP -->
        <text x="570" y="320" fill="var(--red)" font-size="9">Halting Problem</text>
        <text x="570" y="336" fill="var(--red)" font-size="9">TSP (optimization)</text>
        <text x="570" y="352" fill="var(--red)" font-size="9">General Game Playing</text>
        <text x="570" y="368" fill="var(--text2)" font-size="8" font-style="italic">(undecidable / outside NP)</text>

        <!-- Key insight annotation -->
        <rect x="60" y="465" width="560" height="45" rx="8" fill="rgba(56,189,248,0.06)" stroke="var(--accent)" stroke-width="1"/>
        <text x="340" y="484" text-anchor="middle" fill="var(--accent)" font-size="11" font-weight="600">Jika satu masalah NP-Complete dapat diselesaikan di P, maka P = NP</text>
        <text x="340" y="500" text-anchor="middle" fill="var(--text2)" font-size="10">(karena semua NP-Complete saling poly-time reducible) — Cook-Levin Theorem (1971)</text>

        <!-- Ladner annotation -->
        <line x1="310" y1="255" x2="310" y2="290" stroke="var(--accent3)" stroke-width="0.8" stroke-dasharray="3,2"/>
        <text x="220" y="300" fill="var(--accent3)" font-size="8" font-style="italic">Ladner (1975): jika P≠NP,</text>
        <text x="228" y="311" fill="var(--accent3)" font-size="8" font-style="italic">ada masalah NP-Intermediate</text>
    </svg>
</div>
</div>
<div data-tab-content="diagram-peqnp" class="tab-content">
<div class="anim-container" style="padding:20px;text-align:center;">
    <svg width="680" height="350" viewBox="0 0 680 350" style="max-width:100%">
        <text x="340" y="25" text-anchor="middle" fill="var(--text)" font-size="15" font-weight="800">Hipotesis: P = NP (sangat unlikely)</text>

        <!-- NP-Hard -->
        <ellipse cx="340" cy="200" rx="310" ry="140" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="630" y="85" fill="var(--red)" font-size="13" font-weight="700">NP-Hard</text>

        <!-- P = NP = NP-Complete collapsed -->
        <ellipse cx="280" cy="200" rx="200" ry="120" fill="rgba(52,211,153,0.06)" stroke="var(--green)" stroke-width="2.5"/>
        <text x="280" y="175" text-anchor="middle" fill="var(--green)" font-size="18" font-weight="800">P = NP</text>
        <text x="280" y="200" text-anchor="middle" fill="var(--orange)" font-size="13" font-weight="600">= NP-Complete</text>
        <text x="280" y="225" text-anchor="middle" fill="var(--text2)" font-size="10">(semua masalah NP bisa diselesaikan efisien)</text>
        <text x="280" y="250" text-anchor="middle" fill="var(--text2)" font-size="9" font-style="italic">SAT, TSP, encryption cracking... semua mudah?!</text>

        <!-- Outside NP -->
        <text x="540" y="200" fill="var(--red)" font-size="9">Halting Problem</text>
        <text x="540" y="216" fill="var(--text2)" font-size="8">(tetap undecidable)</text>

        <!-- Warning box -->
        <rect x="80" y="295" width="520" height="40" rx="8" fill="rgba(248,113,113,0.08)" stroke="var(--red)" stroke-width="1"/>
        <text x="340" y="312" text-anchor="middle" fill="var(--red)" font-size="10" font-weight="600">Jika P = NP: semua enkripsi RSA/ECC bisa dipecahkan efisien → keamanan digital runtuh!</text>
        <text x="340" y="327" text-anchor="middle" fill="var(--text2)" font-size="9">Mayoritas ilmuwan komputer percaya P ≠ NP — tapi belum ada yang bisa membuktikannya.</text>
    </svg>
</div>
</div>

<div class="card">
    <h4>Penjelasan Diagram — Mengapa NP-Complete di "Perbatasan"?</h4>
    <p>Perhatikan posisi NP-Complete di diagram: ia berada di <strong>irisan antara NP dan NP-Hard</strong> — tepatnya di "perbatasan atas" NP. Ini karena:</p>
    <ol>
        <li><strong>NP-Complete ∈ NP</strong>: solusinya bisa diverifikasi dalam waktu polinomial</li>
        <li><strong>NP-Complete ∈ NP-Hard</strong>: setidaknya sesulit semua masalah di NP (karena semua masalah NP bisa direduksi ke sini)</li>
        <li><strong>NP-Complete adalah masalah "tersulit" di NP</strong>: jika salah satu bisa diselesaikan efisien, SEMUA NP bisa → P = NP</li>
    </ol>
    <div class="warn-box">
        <strong>Ladner's Theorem (1975):</strong> Jika P ≠ NP, maka ada masalah di NP yang <strong>bukan P</strong> dan <strong>bukan NP-Complete</strong> — disebut <strong>NP-Intermediate</strong>. Kandidat: Integer Factorization (basis RSA!), Graph Isomorphism.
    </div>
</div>

<h2>NP-Complete Reductions</h2>
<div class="card">
    <p>Untuk membuktikan masalah X adalah NP-Complete:</p>
    <ol>
        <li>Tunjukkan X ∈ NP (solusi bisa diverifikasi dalam waktu polinomial)</li>
        <li>Tunjukkan masalah NP-Complete yang dikenal (misal SAT) dapat <strong>direduksi</strong> ke X dalam waktu polinomial</li>
    </ol>
    <div class="flow-diagram">
        <div class="flow-node highlight">SAT</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">3-SAT</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Vertex Cover</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Hamiltonian Cycle</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">TSP</div>
    </div>
</div>

<h2>Strategi Menghadapi NP-Hard</h2>
<div class="card-grid-3">
    <div class="card">
        <h4>Approximation</h4>
        <p>Cari solusi mendekati optimal dengan jaminan rasio. Contoh: 2-approx untuk Vertex Cover.</p>
    </div>
    <div class="card">
        <h4>Heuristic</h4>
        <p>Genetic Algorithm, Simulated Annealing — tidak ada jaminan, tapi sering bekerja baik.</p>
    </div>
    <div class="card">
        <h4>Parameterized</h4>
        <p>Fixed-Parameter Tractable: O(f(k)·nᶜ) di mana k parameter kecil.</p>
    </div>
</div>
`;

// ====================== ALGORITHMS & HACKERRANK ======================
sections.algorithms = () => `
<h1 class="section-title animate-in">Algoritma & HackerRank Top Cases</h1>
<p class="section-subtitle animate-in">10 kasus populer dengan pendekatan Brute Force vs 5 teknik optimasi</p>

<h2>5 Pendekatan Optimasi</h2>
<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--green)">1. Greedy</h3>
        <p>Pilih opsi <strong>terbaik lokal</strong> di setiap langkah, berharap menghasilkan solusi global optimal.</p>
        <p><strong>Kapan:</strong> Masalah punya <em>greedy choice property</em> & <em>optimal substructure</em>.</p>
    </div>
    <div class="card">
        <h3 style="color:var(--accent)">2. Divide & Conquer</h3>
        <p><strong>Bagi</strong> masalah jadi submasalah lebih kecil, <strong>selesaikan</strong> rekursif, lalu <strong>gabungkan</strong> hasilnya.</p>
        <p><strong>Kapan:</strong> Masalah bisa dipecah menjadi submasalah independen.</p>
    </div>
    <div class="card">
        <h3 style="color:var(--yellow)">3. Dynamic Programming</h3>
        <p>Simpan hasil submasalah yang <strong>overlapping</strong> untuk menghindari komputasi ulang.</p>
        <p><strong>Kapan:</strong> Optimal substructure + overlapping subproblems.</p>
    </div>
    <div class="card">
        <h3 style="color:var(--orange)">4. Branch & Bound</h3>
        <p>Eksplorasi pohon solusi secara sistematis, <strong>pangkas cabang</strong> yang pasti tidak optimal.</p>
        <p><strong>Kapan:</strong> Masalah optimasi kombinatorial (TSP, Knapsack).</p>
    </div>
    <div class="card">
        <h3 style="color:var(--pink)">5. Backtracking</h3>
        <p>Coba semua kemungkinan secara rekursif, <strong>mundur</strong> jika constraint dilanggar.</p>
        <p><strong>Kapan:</strong> Constraint Satisfaction Problems (N-Queens, Sudoku).</p>
    </div>
</div>

<h2>10 Top HackerRank Cases</h2>

<div class="tabs">
    <button class="tab-btn active" data-tab="case1">1. Two Sum</button>
    <button class="tab-btn" data-tab="case2">2. Max Subarray</button>
    <button class="tab-btn" data-tab="case3">3. Knapsack</button>
    <button class="tab-btn" data-tab="case4">4. Coin Change</button>
    <button class="tab-btn" data-tab="case5">5. LIS</button>
    <button class="tab-btn" data-tab="case6">6. Activity Sel</button>
    <button class="tab-btn" data-tab="case7">7. N-Queens</button>
    <button class="tab-btn" data-tab="case8">8. Merge Sort</button>
    <button class="tab-btn" data-tab="case9">9. Graph Short</button>
    <button class="tab-btn" data-tab="case10">10. TSP</button>
</div>

<div data-tab-content="case1" class="tab-content active">
<h3>Case 1: Two Sum</h3>
<p><strong>Problem:</strong> Temukan dua angka dalam array yang jumlahnya sama dengan target.</p>

<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(n²)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">two_sum_brute</span>(arr, target):
    <span class="kw">for</span> i <span class="kw">in</span> range(len(arr)):
        <span class="kw">for</span> j <span class="kw">in</span> range(i+<span class="num">1</span>, len(arr)):
            <span class="kw">if</span> arr[i] + arr[j] == target:
                <span class="kw">return</span> [i, j]
    <span class="kw">return</span> []</div>
</div>
<div class="card">
<h4><span class="badge badge-green">Hash Map</span> O(n)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">two_sum_optimized</span>(arr, target):
    seen = {}
    <span class="kw">for</span> i, num <span class="kw">in</span> enumerate(arr):
        complement = target - num
        <span class="kw">if</span> complement <span class="kw">in</span> seen:
            <span class="kw">return</span> [seen[complement], i]
        seen[num] = i
    <span class="kw">return</span> []</div>
<p><strong>Pendekatan:</strong> Greedy / Hash — simpan yang sudah dilihat.</p>
</div>
</div>
</div>

<div data-tab-content="case2" class="tab-content">
<h3>Case 2: Maximum Subarray (Kadane's)</h3>
<p><strong>Problem:</strong> Temukan subarray contiguous dengan jumlah terbesar.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(n³) → O(n²)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">max_subarray_brute</span>(arr):
    max_sum = float(<span class="str">'-inf'</span>)
    <span class="kw">for</span> i <span class="kw">in</span> range(len(arr)):
        curr = <span class="num">0</span>
        <span class="kw">for</span> j <span class="kw">in</span> range(i, len(arr)):
            curr += arr[j]
            max_sum = max(max_sum, curr)
    <span class="kw">return</span> max_sum</div>
</div>
<div class="card">
<h4><span class="badge badge-green">Kadane's / DP</span> O(n)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">max_subarray_kadane</span>(arr):
    max_sum = curr = arr[<span class="num">0</span>]
    <span class="kw">for</span> num <span class="kw">in</span> arr[<span class="num">1</span>:]:
        curr = max(num, curr + num)
        max_sum = max(max_sum, curr)
    <span class="kw">return</span> max_sum</div>
<p><strong>Pendekatan:</strong> Dynamic Programming — di setiap posisi, pilih extend atau mulai baru.</p>
</div>
</div>
<div class="card">
<h4><span class="badge badge-blue">Divide & Conquer</span> O(n log n)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">max_subarray_dc</span>(arr, lo, hi):
    <span class="kw">if</span> lo == hi: <span class="kw">return</span> arr[lo]
    mid = (lo + hi) // <span class="num">2</span>
    left = max_subarray_dc(arr, lo, mid)
    right = max_subarray_dc(arr, mid+<span class="num">1</span>, hi)
    cross = max_crossing(arr, lo, mid, hi)
    <span class="kw">return</span> max(left, right, cross)</div>
</div>
</div>

<div data-tab-content="case3" class="tab-content">
<h3>Case 3: 0/1 Knapsack Problem</h3>
<p><strong>Problem:</strong> Pilih items dengan berat dan nilai, maksimalkan nilai total tanpa melebihi kapasitas.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(2ⁿ)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">knapsack_brute</span>(W, wt, val, n):
    <span class="kw">if</span> n == <span class="num">0</span> <span class="kw">or</span> W == <span class="num">0</span>: <span class="kw">return</span> <span class="num">0</span>
    <span class="kw">if</span> wt[n-<span class="num">1</span>] > W:
        <span class="kw">return</span> knapsack_brute(W, wt, val, n-<span class="num">1</span>)
    <span class="kw">return</span> max(
        val[n-<span class="num">1</span>] + knapsack_brute(W-wt[n-<span class="num">1</span>], wt, val, n-<span class="num">1</span>),
        knapsack_brute(W, wt, val, n-<span class="num">1</span>)
    )</div>
</div>
<div class="card">
<h4><span class="badge badge-green">DP</span> O(n × W)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">knapsack_dp</span>(W, wt, val, n):
    dp = [[<span class="num">0</span>]*(W+<span class="num">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> range(n+<span class="num">1</span>)]
    <span class="kw">for</span> i <span class="kw">in</span> range(<span class="num">1</span>, n+<span class="num">1</span>):
        <span class="kw">for</span> w <span class="kw">in</span> range(<span class="num">1</span>, W+<span class="num">1</span>):
            <span class="kw">if</span> wt[i-<span class="num">1</span>] <= w:
                dp[i][w] = max(dp[i-<span class="num">1</span>][w],
                    val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w-wt[i-<span class="num">1</span>]])
            <span class="kw">else</span>:
                dp[i][w] = dp[i-<span class="num">1</span>][w]
    <span class="kw">return</span> dp[n][W]</div>
<p><strong>Pendekatan:</strong> Dynamic Programming — tabel 2D menyimpan solusi optimal submasalah.</p>
</div>
</div>
<div class="card">
<h4><span class="badge badge-orange">Branch & Bound</span></h4>
<div class="code-block"><span class="cm">// Pangkas cabang yang bound-nya lebih rendah dari solusi terbaik saat ini</span>
<span class="cm">// Urutkan items berdasarkan value/weight ratio</span>
<span class="cm">// Upper bound: fractional knapsack dari sisa items</span>
<span class="cm">// Jika upper_bound <= best_so_far → prune</span></div>
</div>
</div>

<div data-tab-content="case4" class="tab-content">
<h3>Case 4: Coin Change</h3>
<p><strong>Problem:</strong> Jumlah minimum koin untuk mencapai amount tertentu.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(S^n)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">coin_brute</span>(coins, amount):
    <span class="kw">if</span> amount == <span class="num">0</span>: <span class="kw">return</span> <span class="num">0</span>
    <span class="kw">if</span> amount < <span class="num">0</span>: <span class="kw">return</span> float(<span class="str">'inf'</span>)
    <span class="kw">return</span> min(
        <span class="num">1</span> + coin_brute(coins, amount - c)
        <span class="kw">for</span> c <span class="kw">in</span> coins
    )</div>
</div>
<div class="card">
<h4><span class="badge badge-green">DP Bottom-Up</span> O(n × amount)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">coin_dp</span>(coins, amount):
    dp = [float(<span class="str">'inf'</span>)] * (amount + <span class="num">1</span>)
    dp[<span class="num">0</span>] = <span class="num">0</span>
    <span class="kw">for</span> i <span class="kw">in</span> range(<span class="num">1</span>, amount + <span class="num">1</span>):
        <span class="kw">for</span> c <span class="kw">in</span> coins:
            <span class="kw">if</span> c <= i:
                dp[i] = min(dp[i], dp[i-c] + <span class="num">1</span>)
    <span class="kw">return</span> dp[amount] <span class="kw">if</span> dp[amount] != float(<span class="str">'inf'</span>) <span class="kw">else</span> -<span class="num">1</span></div>
</div>
</div>
<div class="warn-box"><strong>Greedy tidak selalu benar!</strong> coins=[1,3,4], amount=6 → Greedy: 4+1+1=3 koin, Optimal: 3+3=2 koin.</div>
</div>

<div data-tab-content="case5" class="tab-content">
<h3>Case 5: Longest Increasing Subsequence (LIS)</h3>
<p><strong>Problem:</strong> Panjang subsequence terpanjang yang strictly increasing.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(2ⁿ)</h4>
<p>Generate semua subsequence, cek mana yang increasing & terpanjang.</p>
</div>
<div class="card">
<h4><span class="badge badge-yellow">DP</span> O(n²)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">lis_dp</span>(arr):
    n = len(arr)
    dp = [<span class="num">1</span>] * n
    <span class="kw">for</span> i <span class="kw">in</span> range(<span class="num">1</span>, n):
        <span class="kw">for</span> j <span class="kw">in</span> range(i):
            <span class="kw">if</span> arr[j] < arr[i]:
                dp[i] = max(dp[i], dp[j]+<span class="num">1</span>)
    <span class="kw">return</span> max(dp)</div>
</div>
</div>
<div class="card">
<h4><span class="badge badge-green">Binary Search + Greedy</span> O(n log n)</h4>
<div class="code-block"><span class="kw">import</span> bisect
<span class="kw">def</span> <span class="fn">lis_optimal</span>(arr):
    tails = []
    <span class="kw">for</span> num <span class="kw">in</span> arr:
        pos = bisect.bisect_left(tails, num)
        <span class="kw">if</span> pos == len(tails):
            tails.append(num)
        <span class="kw">else</span>:
            tails[pos] = num
    <span class="kw">return</span> len(tails)</div>
<p><strong>Pendekatan:</strong> Greedy + Binary Search — maintain array tails terkecil.</p>
</div>
</div>

<div data-tab-content="case6" class="tab-content">
<h3>Case 6: Activity Selection</h3>
<p><strong>Problem:</strong> Pilih aktivitas terbanyak yang tidak overlap.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(2ⁿ)</h4>
<p>Coba semua subset, cek yang compatible & terbanyak.</p>
</div>
<div class="card">
<h4><span class="badge badge-green">Greedy</span> O(n log n)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">activity_selection</span>(activities):
    <span class="cm"># Sort by end time</span>
    activities.sort(key=<span class="kw">lambda</span> x: x[<span class="num">1</span>])
    selected = [activities[<span class="num">0</span>]]
    <span class="kw">for</span> act <span class="kw">in</span> activities[<span class="num">1</span>:]:
        <span class="kw">if</span> act[<span class="num">0</span>] >= selected[-<span class="num">1</span>][<span class="num">1</span>]:
            selected.append(act)
    <span class="kw">return</span> selected</div>
<p><strong>Greedy choice:</strong> Selalu pilih aktivitas yang selesai paling awal.</p>
</div>
</div>
</div>

<div data-tab-content="case7" class="tab-content">
<h3>Case 7: N-Queens</h3>
<p><strong>Problem:</strong> Tempatkan N ratu di papan N×N sehingga tidak ada yang saling menyerang.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(n!)</h4>
<p>Coba semua permutasi penempatan, filter yang valid.</p>
</div>
<div class="card">
<h4><span class="badge badge-green">Backtracking</span> O(n!) worst, much faster avg</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">solve_queens</span>(n):
    <span class="kw">def</span> <span class="fn">backtrack</span>(row, cols, diag1, diag2):
        <span class="kw">if</span> row == n: <span class="kw">return</span> <span class="num">1</span>
        count = <span class="num">0</span>
        <span class="kw">for</span> col <span class="kw">in</span> range(n):
            <span class="kw">if</span> col <span class="kw">in</span> cols <span class="kw">or</span> \\
               row-col <span class="kw">in</span> diag1 <span class="kw">or</span> \\
               row+col <span class="kw">in</span> diag2:
                <span class="kw">continue</span>
            cols.add(col)
            diag1.add(row-col)
            diag2.add(row+col)
            count += backtrack(row+<span class="num">1</span>, cols, diag1, diag2)
            cols.remove(col)
            diag1.remove(row-col)
            diag2.remove(row+col)
        <span class="kw">return</span> count
    <span class="kw">return</span> backtrack(<span class="num">0</span>, set(), set(), set())</div>
</div>
</div>
</div>

<div data-tab-content="case8" class="tab-content">
<h3>Case 8: Merge Sort / Inversion Count</h3>
<p><strong>Problem:</strong> Hitung jumlah inversi (i < j tapi arr[i] > arr[j]) — classic Divide & Conquer.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(n²)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">count_inversions_brute</span>(arr):
    count = <span class="num">0</span>
    <span class="kw">for</span> i <span class="kw">in</span> range(len(arr)):
        <span class="kw">for</span> j <span class="kw">in</span> range(i+<span class="num">1</span>, len(arr)):
            <span class="kw">if</span> arr[i] > arr[j]:
                count += <span class="num">1</span>
    <span class="kw">return</span> count</div>
</div>
<div class="card">
<h4><span class="badge badge-green">Merge Sort D&C</span> O(n log n)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">merge_count</span>(arr):
    <span class="kw">if</span> len(arr) <= <span class="num">1</span>: <span class="kw">return</span> arr, <span class="num">0</span>
    mid = len(arr)//<span class="num">2</span>
    left, l_inv = merge_count(arr[:mid])
    right, r_inv = merge_count(arr[mid:])
    merged, split_inv = merge(left, right)
    <span class="kw">return</span> merged, l_inv + r_inv + split_inv</div>
<p><strong>Pendekatan:</strong> Divide & Conquer — count inversions saat merge step.</p>
</div>
</div>
</div>

<div data-tab-content="case9" class="tab-content">
<h3>Case 9: Shortest Path (Dijkstra vs BFS)</h3>
<p><strong>Problem:</strong> Temukan shortest path di weighted/unweighted graph.</p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(V!)</h4>
<p>Coba semua path yang mungkin dari source ke destination.</p>
</div>
<div class="card">
<h4><span class="badge badge-green">Dijkstra (Greedy)</span> O((V+E) log V)</h4>
<div class="code-block"><span class="kw">import</span> heapq
<span class="kw">def</span> <span class="fn">dijkstra</span>(graph, src):
    dist = {v: float(<span class="str">'inf'</span>) <span class="kw">for</span> v <span class="kw">in</span> graph}
    dist[src] = <span class="num">0</span>
    pq = [(<span class="num">0</span>, src)]
    <span class="kw">while</span> pq:
        d, u = heapq.heappop(pq)
        <span class="kw">if</span> d > dist[u]: <span class="kw">continue</span>
        <span class="kw">for</span> v, w <span class="kw">in</span> graph[u]:
            <span class="kw">if</span> dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    <span class="kw">return</span> dist</div>
<p><strong>Pendekatan:</strong> Greedy — selalu proses node dengan jarak terpendek.</p>
</div>
</div>
</div>

<div data-tab-content="case10" class="tab-content">
<h3>Case 10: Traveling Salesman Problem (TSP)</h3>
<p><strong>Problem:</strong> Kunjungi semua kota tepat sekali, kembali ke awal, dengan jarak minimum. <span class="badge badge-red">NP-Hard</span></p>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-red">Brute Force</span> O(n!)</h4>
<div class="code-block"><span class="cm">// Coba semua n! permutasi kota</span>
<span class="cm">// Hitung total jarak setiap permutasi</span>
<span class="cm">// Return yang minimum</span>
<span class="cm">// n=20 → 2.4 × 10¹⁸ routes!</span></div>
</div>
<div class="card">
<h4><span class="badge badge-yellow">DP + Bitmask</span> O(n² × 2ⁿ)</h4>
<div class="code-block"><span class="kw">def</span> <span class="fn">tsp_dp</span>(dist, n):
    dp = [[float(<span class="str">'inf'</span>)]*(n) <span class="kw">for</span> _ <span class="kw">in</span> range(<span class="num">1</span><<n)]
    dp[<span class="num">1</span>][<span class="num">0</span>] = <span class="num">0</span>
    <span class="kw">for</span> mask <span class="kw">in</span> range(<span class="num">1</span><<n):
        <span class="kw">for</span> u <span class="kw">in</span> range(n):
            <span class="kw">if</span> <span class="kw">not</span> mask & (<span class="num">1</span><<u): <span class="kw">continue</span>
            <span class="kw">for</span> v <span class="kw">in</span> range(n):
                <span class="kw">if</span> mask & (<span class="num">1</span><<v): <span class="kw">continue</span>
                new_mask = mask | (<span class="num">1</span><<v)
                dp[new_mask][v] = min(
                    dp[new_mask][v],
                    dp[mask][u] + dist[u][v]
                )
    full = (<span class="num">1</span><<n) - <span class="num">1</span>
    <span class="kw">return</span> min(dp[full][i]+dist[i][<span class="num">0</span>] <span class="kw">for</span> i <span class="kw">in</span> range(n))</div>
</div>
</div>
<div class="card">
<h4><span class="badge badge-orange">Branch & Bound</span></h4>
<p>Gunakan lower bound (misalnya MST) untuk memangkas cabang. Bisa jauh lebih cepat dari brute force untuk instance tertentu.</p>
</div>
</div>

<h3>Ringkasan Pendekatan per Case</h3>
<div class="table-wrapper">
<table>
<tr><th>#</th><th>Problem</th><th>Brute Force</th><th>Optimal</th><th>Pendekatan</th></tr>
<tr><td>1</td><td>Two Sum</td><td>O(n²)</td><td>O(n)</td><td>Hash Map</td></tr>
<tr><td>2</td><td>Max Subarray</td><td>O(n²)</td><td>O(n)</td><td>DP (Kadane)</td></tr>
<tr><td>3</td><td>0/1 Knapsack</td><td>O(2ⁿ)</td><td>O(nW)</td><td>DP / Branch & Bound</td></tr>
<tr><td>4</td><td>Coin Change</td><td>O(Sⁿ)</td><td>O(nS)</td><td>DP</td></tr>
<tr><td>5</td><td>LIS</td><td>O(2ⁿ)</td><td>O(n log n)</td><td>Greedy + BinSearch</td></tr>
<tr><td>6</td><td>Activity Selection</td><td>O(2ⁿ)</td><td>O(n log n)</td><td>Greedy</td></tr>
<tr><td>7</td><td>N-Queens</td><td>O(n!)</td><td>O(n!) pruned</td><td>Backtracking</td></tr>
<tr><td>8</td><td>Inversions</td><td>O(n²)</td><td>O(n log n)</td><td>Divide & Conquer</td></tr>
<tr><td>9</td><td>Shortest Path</td><td>O(V!)</td><td>O((V+E)logV)</td><td>Greedy (Dijkstra)</td></tr>
<tr><td>10</td><td>TSP</td><td>O(n!)</td><td>O(n²2ⁿ)</td><td>DP Bitmask / B&B</td></tr>
</table>
</div>
`;

// ====================== DATA STRUCTURES ======================
sections.datastructures = () => `
<h1 class="section-title animate-in">Struktur Data</h1>
<p class="section-subtitle animate-in">LinkedList, Queue, Stack, Tree, Graph — dan penggunaannya di software engineering & security</p>

<h2>Linked List</h2>
<div class="card">
    <h3>Singly Linked List</h3>
    <div class="flow-diagram">
        <div class="flow-node" style="border-radius:8px">HEAD</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-radius:8px">[10|→]</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-radius:8px">[20|→]</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-radius:8px">[30|→]</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-radius:8px;border-color:var(--red)">NULL</div>
    </div>
    <div class="code-block"><span class="kw">class</span> <span class="type">Node</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, data):
        self.data = data
        self.next = <span class="num">None</span>

<span class="kw">class</span> <span class="type">LinkedList</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.head = <span class="num">None</span>

    <span class="kw">def</span> <span class="fn">insert</span>(self, data):  <span class="cm"># O(1) at head</span>
        node = Node(data)
        node.next = self.head
        self.head = node

    <span class="kw">def</span> <span class="fn">search</span>(self, data):  <span class="cm"># O(n)</span>
        curr = self.head
        <span class="kw">while</span> curr:
            <span class="kw">if</span> curr.data == data: <span class="kw">return</span> <span class="num">True</span>
            curr = curr.next
        <span class="kw">return</span> <span class="num">False</span></div>
</div>

<div class="card">
    <h3>Doubly Linked List</h3>
    <div class="flow-diagram">
        <div class="flow-node" style="border-radius:8px;border-color:var(--red)">NULL</div>
        <div class="flow-arrow">←→</div>
        <div class="flow-node" style="border-radius:8px">[←|10|→]</div>
        <div class="flow-arrow">←→</div>
        <div class="flow-node" style="border-radius:8px">[←|20|→]</div>
        <div class="flow-arrow">←→</div>
        <div class="flow-node" style="border-radius:8px">[←|30|→]</div>
        <div class="flow-arrow">←→</div>
        <div class="flow-node" style="border-radius:8px;border-color:var(--red)">NULL</div>
    </div>
    <p>Setiap node punya pointer <strong>next</strong> dan <strong>prev</strong>. Bisa traverse dua arah. Digunakan di: <strong>browser history, undo/redo, LRU Cache</strong>.</p>
</div>

<h2>Stack & Queue</h2>
<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--accent)">Stack (LIFO)</h3>
        <div class="flow-diagram" style="flex-direction:column">
            <div class="flow-node" style="width:150px">TOP → [30]</div>
            <div class="flow-node" style="width:150px;opacity:0.7">[20]</div>
            <div class="flow-node" style="width:150px;opacity:0.4">[10]</div>
        </div>
        <p><strong>push()</strong> O(1), <strong>pop()</strong> O(1), <strong>peek()</strong> O(1)</p>
        <p><strong>Penggunaan:</strong> Call stack, undo, expression parsing, DFS, backtracking</p>
    </div>
    <div class="card">
        <h3 style="color:var(--green)">Queue (FIFO)</h3>
        <div class="flow-diagram">
            <div class="flow-node">FRONT→[10]</div>
            <div class="flow-arrow">→</div>
            <div class="flow-node">[20]</div>
            <div class="flow-arrow">→</div>
            <div class="flow-node">[30]←REAR</div>
        </div>
        <p><strong>enqueue()</strong> O(1), <strong>dequeue()</strong> O(1)</p>
        <p><strong>Penggunaan:</strong> BFS, task scheduling, printer queue, message queue</p>
    </div>
</div>

<h2>Tree</h2>
<div class="card">
    <h3>Binary Search Tree (BST)</h3>
    <p>Setiap node: left child < parent < right child. Search, Insert, Delete: <strong>O(log n)</strong> average, O(n) worst.</p>
    <div class="anim-container">
        <canvas id="bst-canvas" width="700" height="280"></canvas>
        <div class="anim-controls">
            <label class="anim-label">Value: <input type="number" id="bst-input" class="anim-input" value="5" min="1" max="99" style="width:60px"></label>
            <button class="anim-btn" id="bst-insert">Insert</button>
            <button class="anim-btn secondary" id="bst-reset">Reset</button>
        </div>
    </div>
</div>

<div class="card-grid-3">
    <div class="card">
        <h4>AVL Tree</h4>
        <p>Self-balancing BST. |height(left) - height(right)| ≤ 1. Semua operasi O(log n) guaranteed.</p>
    </div>
    <div class="card">
        <h4>Red-Black Tree</h4>
        <p>Self-balancing BST yang digunakan di <code>std::map</code> (C++), <code>TreeMap</code> (Java). Less strict balance → faster insert.</p>
    </div>
    <div class="card">
        <h4>B-Tree / B+ Tree</h4>
        <p>Digunakan di <strong>database indexes</strong> dan filesystem. Optimal untuk disk I/O — node berisi banyak keys.</p>
    </div>
</div>

<h2>Graph</h2>
<div class="card">
    <h3>Representasi Graph</h3>
    <div class="card-grid">
        <div class="card">
            <h4>Adjacency Matrix</h4>
            <div class="code-block"><span class="cm">// Space: O(V²)</span>
    A  B  C  D
A [ 0, 1, 1, 0 ]
B [ 1, 0, 0, 1 ]
C [ 1, 0, 0, 1 ]
D [ 0, 1, 1, 0 ]</div>
            <p>Bagus untuk: dense graph, cek edge O(1)</p>
        </div>
        <div class="card">
            <h4>Adjacency List</h4>
            <div class="code-block"><span class="cm">// Space: O(V + E)</span>
A → [B, C]
B → [A, D]
C → [A, D]
D → [B, C]</div>
            <p>Bagus untuk: sparse graph, iterate neighbors</p>
        </div>
    </div>
</div>

<div class="card">
    <h3>Graph Algorithms</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Algorithm</th><th>Tujuan</th><th>Kompleksitas</th><th>Tipe Graph</th></tr>
    <tr><td>BFS</td><td>Shortest path (unweighted)</td><td>O(V+E)</td><td>Any</td></tr>
    <tr><td>DFS</td><td>Traversal, cycle detection</td><td>O(V+E)</td><td>Any</td></tr>
    <tr><td>Dijkstra</td><td>Shortest path (weighted, non-neg)</td><td>O((V+E)logV)</td><td>Weighted</td></tr>
    <tr><td>Bellman-Ford</td><td>Shortest path (neg weights)</td><td>O(VE)</td><td>Weighted</td></tr>
    <tr><td>Floyd-Warshall</td><td>All-pairs shortest path</td><td>O(V³)</td><td>Weighted</td></tr>
    <tr><td>Kruskal/Prim</td><td>Minimum Spanning Tree</td><td>O(E logE)</td><td>Weighted undirected</td></tr>
    <tr><td>Topological Sort</td><td>Ordering dependencies</td><td>O(V+E)</td><td>DAG</td></tr>
    <tr><td>Tarjan/Kosaraju</td><td>Strongly Connected Components</td><td>O(V+E)</td><td>Directed</td></tr>
    </table>
    </div>
</div>

<h2>Penggunaan di Software Engineering & Security</h2>
<div class="card-grid">
    <div class="card">
        <h4>Software Engineering</h4>
        <ul>
            <li><strong>LinkedList:</strong> Memory allocator, undo history</li>
            <li><strong>Queue:</strong> Message Queue (Kafka, RabbitMQ), task scheduler</li>
            <li><strong>Stack:</strong> Call stack, expression evaluator, syntax parser</li>
            <li><strong>Tree:</strong> DOM tree, file system, database index (B+Tree)</li>
            <li><strong>Graph:</strong> Dependency resolution, social networks, route planning, microservice topology</li>
            <li><strong>Hash Table:</strong> Cache (Redis), database indexing, symbol tables</li>
        </ul>
    </div>
    <div class="card">
        <h4>Security</h4>
        <ul>
            <li><strong>Tree:</strong> Certificate chain (PKI), Merkle tree (blockchain integrity)</li>
            <li><strong>Graph:</strong> Network topology analysis, attack graph modeling, threat modeling</li>
            <li><strong>Hash Table:</strong> Password storage, deduplication, integrity checking</li>
            <li><strong>Trie:</strong> IP routing tables, firewall rules, URL filtering</li>
            <li><strong>Bloom Filter:</strong> Malware signature detection, rate limiting</li>
            <li><strong>Queue:</strong> IDS event processing, log aggregation</li>
        </ul>
    </div>
</div>
`;

// ====================== LANGUAGES ======================
sections.languages = () => `
<h1 class="section-title animate-in">Perbandingan Bahasa Pemrograman</h1>
<p class="section-subtitle animate-in">C, Java, Go, Rust, Python, Groovy — syntax, memory, size, dan penggunaan</p>

<h2>Perbandingan Komprehensif</h2>
<div class="table-wrapper">
<table>
<tr>
    <th>Aspek</th>
    <th><span class="badge badge-blue">C</span></th>
    <th><span class="badge badge-orange">Java</span></th>
    <th><span class="badge badge-green">Go</span></th>
    <th><span class="badge badge-red">Rust</span></th>
    <th><span class="badge badge-yellow">Python</span></th>
    <th><span class="badge badge-purple">Groovy</span></th>
</tr>
<tr><td><strong>Paradigma</strong></td><td>Procedural</td><td>OOP</td><td>Procedural + CSP</td><td>Multi-paradigm</td><td>Multi-paradigm</td><td>OOP + Scripting</td></tr>
<tr><td><strong>Typing</strong></td><td>Static, weak</td><td>Static, strong</td><td>Static, strong</td><td>Static, strong</td><td>Dynamic, strong</td><td>Dynamic/Static</td></tr>
<tr><td><strong>Memory</strong></td><td>Manual (malloc/free)</td><td>GC (JVM)</td><td>GC</td><td>Ownership + Borrow</td><td>GC (ref count)</td><td>GC (JVM)</td></tr>
<tr><td><strong>Kompilasi</strong></td><td>Native binary</td><td>Bytecode (JVM)</td><td>Native binary</td><td>Native binary</td><td>Interpreted/JIT</td><td>Bytecode (JVM)</td></tr>
<tr><td><strong>Hello World binary</strong></td><td>~16 KB</td><td>~1 KB .class + JVM</td><td>~2 MB</td><td>~300 KB</td><td>Script (0 KB)</td><td>Script + JVM</td></tr>
<tr><td><strong>Speed (relative)</strong></td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐</td><td>⭐⭐⭐</td></tr>
<tr><td><strong>Concurrency</strong></td><td>pthreads (manual)</td><td>Threads + Virtual</td><td>Goroutines (CSP)</td><td>async/await + threads</td><td>GIL (asyncio)</td><td>Java threads</td></tr>
<tr><td><strong>Null Safety</strong></td><td>NULL pointer</td><td>NullPointerException</td><td>nil (zero values)</td><td>Option&lt;T&gt; (no null!)</td><td>None</td><td>null</td></tr>
<tr><td><strong>Error Handling</strong></td><td>Return codes</td><td>Exceptions</td><td>error return value</td><td>Result&lt;T,E&gt;</td><td>Exceptions</td><td>Exceptions</td></tr>
<tr><td><strong>Tahun</strong></td><td>1972</td><td>1995</td><td>2009</td><td>2015</td><td>1991</td><td>2003</td></tr>
</table>
</div>

<h2>Data Type Sizes</h2>
<div class="table-wrapper">
<table>
<tr><th>Tipe</th><th>C</th><th>Java</th><th>Go</th><th>Rust</th><th>Python</th></tr>
<tr><td>Integer (small)</td><td>int: 4B</td><td>int: 4B</td><td>int: 8B (64bit)</td><td>i32: 4B</td><td>int: 28B+ (object)</td></tr>
<tr><td>Integer (big)</td><td>long: 8B</td><td>long: 8B</td><td>int64: 8B</td><td>i64: 8B</td><td>int: arbitrary</td></tr>
<tr><td>Float</td><td>double: 8B</td><td>double: 8B</td><td>float64: 8B</td><td>f64: 8B</td><td>float: 24B (object)</td></tr>
<tr><td>Boolean</td><td>int: 4B</td><td>boolean: 1B*</td><td>bool: 1B</td><td>bool: 1B</td><td>bool: 28B (object)</td></tr>
<tr><td>Char</td><td>char: 1B</td><td>char: 2B (UTF-16)</td><td>rune: 4B (UTF-32)</td><td>char: 4B (Unicode)</td><td>str: 50B+ (object)</td></tr>
<tr><td>Pointer/Ref</td><td>8B (64-bit)</td><td>8B (compressed)</td><td>8B</td><td>8B (&T)</td><td>8B (PyObject*)</td></tr>
</table>
</div>
<p><em>* Python objects have significant overhead due to reference counting, type info, etc.</em></p>

<h2>Syntax Comparison: HTTP Server</h2>
<div class="tabs">
    <button class="tab-btn active" data-tab="lang-c">C</button>
    <button class="tab-btn" data-tab="lang-java">Java</button>
    <button class="tab-btn" data-tab="lang-go">Go</button>
    <button class="tab-btn" data-tab="lang-rust">Rust</button>
    <button class="tab-btn" data-tab="lang-python">Python</button>
    <button class="tab-btn" data-tab="lang-groovy">Groovy</button>
</div>
<div data-tab-content="lang-c" class="tab-content active">
<div class="code-block"><span class="cm">// C — Manual, low-level socket programming</span>
<span class="kw">#include</span> &lt;stdio.h&gt;
<span class="kw">#include</span> &lt;sys/socket.h&gt;
<span class="kw">#include</span> &lt;netinet/in.h&gt;

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">int</span> server_fd = socket(AF_INET, SOCK_STREAM, <span class="num">0</span>);
    <span class="kw">struct</span> sockaddr_in addr = {
        .sin_family = AF_INET,
        .sin_addr.s_addr = INADDR_ANY,
        .sin_port = htons(<span class="num">8080</span>)
    };
    bind(server_fd, (<span class="kw">struct</span> sockaddr*)&addr, <span class="kw">sizeof</span>(addr));
    listen(server_fd, <span class="num">3</span>);
    <span class="cm">// accept, read, write manually...</span>
}</div>
</div>
<div data-tab-content="lang-java" class="tab-content">
<div class="code-block"><span class="cm">// Java — Verbose tapi rich ecosystem</span>
<span class="kw">import</span> com.sun.net.httpserver.*;

<span class="kw">public class</span> <span class="type">Server</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) <span class="kw">throws</span> Exception {
        HttpServer server = HttpServer.create(
            <span class="kw">new</span> InetSocketAddress(<span class="num">8080</span>), <span class="num">0</span>);
        server.createContext(<span class="str">"/hello"</span>, exchange -> {
            String resp = <span class="str">"Hello World"</span>;
            exchange.sendResponseHeaders(<span class="num">200</span>, resp.length());
            exchange.getResponseBody().write(resp.getBytes());
            exchange.close();
        });
        server.start();
    }
}</div>
</div>
<div data-tab-content="lang-go" class="tab-content">
<div class="code-block"><span class="cm">// Go — Clean, built-in HTTP server</span>
<span class="kw">package</span> main
<span class="kw">import</span> (<span class="str">"fmt"</span>; <span class="str">"net/http"</span>)

<span class="kw">func</span> <span class="fn">main</span>() {
    http.HandleFunc(<span class="str">"/hello"</span>, <span class="kw">func</span>(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, <span class="str">"Hello World"</span>)
    })
    http.ListenAndServe(<span class="str">":8080"</span>, <span class="num">nil</span>)
}</div>
</div>
<div data-tab-content="lang-rust" class="tab-content">
<div class="code-block"><span class="cm">// Rust with Actix-web — Fast & safe</span>
<span class="kw">use</span> actix_web::{web, App, HttpServer, HttpResponse};

<span class="kw">async fn</span> <span class="fn">hello</span>() -> HttpResponse {
    HttpResponse::Ok().body(<span class="str">"Hello World"</span>)
}

<span class="kw">#[actix_web::main]</span>
<span class="kw">async fn</span> <span class="fn">main</span>() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().route(<span class="str">"/hello"</span>, web::get().to(hello))
    })
    .bind(<span class="str">"0.0.0.0:8080"</span>)?
    .run().<span class="kw">await</span>
}</div>
</div>
<div data-tab-content="lang-python" class="tab-content">
<div class="code-block"><span class="cm"># Python — Paling ringkas</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI
app = FastAPI()

<span class="kw">@app.get</span>(<span class="str">"/hello"</span>)
<span class="kw">def</span> <span class="fn">hello</span>():
    <span class="kw">return</span> {<span class="str">"message"</span>: <span class="str">"Hello World"</span>}</div>
</div>
<div data-tab-content="lang-groovy" class="tab-content">
<div class="code-block"><span class="cm">// Groovy with Ratpack — JVM scripting</span>
<span class="kw">@Grab</span>(<span class="str">'io.ratpack:ratpack-groovy:1.9.0'</span>)
<span class="kw">import static</span> ratpack.groovy.Groovy.ratpack

ratpack {
    handlers {
        get(<span class="str">"hello"</span>) {
            render <span class="str">"Hello World"</span>
        }
    }
}</div>
</div>

<h2>Koneksi Antar Bahasa: C sebagai Fondasi</h2>
<div class="card">
    <div class="flow-diagram">
        <div class="flow-node highlight" style="font-size:1.1rem">C (1972)</div>
        <div class="flow-arrow">→ FFI</div>
        <div class="flow-node" style="border-color:var(--green)">Go (cgo)</div>
    </div>
    <div class="flow-diagram">
        <div class="flow-node highlight" style="font-size:1.1rem">C (1972)</div>
        <div class="flow-arrow">→ FFI</div>
        <div class="flow-node" style="border-color:var(--red)">Rust (extern C)</div>
    </div>
    <div class="flow-diagram">
        <div class="flow-node highlight" style="font-size:1.1rem">C (1972)</div>
        <div class="flow-arrow">→ CPython</div>
        <div class="flow-node" style="border-color:var(--yellow)">Python</div>
    </div>
    <ul>
        <li><strong>Go + C:</strong> <code>cgo</code> memungkinkan Go memanggil library C. Go runtime sendiri awalnya ditulis sebagian di C.</li>
        <li><strong>Rust + C:</strong> <code>extern "C"</code> dan <code>bindgen</code> untuk seamless FFI. Rust bisa menggantikan C code sedikit demi sedikit.</li>
        <li><strong>Python + C:</strong> CPython interpreter ditulis di C. Libraries seperti NumPy, TensorFlow = C/C++ di belakang layar.</li>
        <li><strong>Go ↔ Rust:</strong> Keduanya bisa interop melalui C ABI. Rust bisa compile ke <code>.so</code> yang dipanggil Go via cgo.</li>
        <li><strong>Java + C:</strong> JNI (Java Native Interface) untuk memanggil native code.</li>
    </ul>
</div>

<h2>Kecenderungan Penggunaan</h2>
<div class="card-grid-3">
    <div class="card">
        <h4><span class="badge badge-blue">C</span></h4>
        <p>OS kernel, embedded, IoT, firmware, driver, real-time systems</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-orange">Java</span></h4>
        <p>Enterprise backend, Android, banking, e-commerce (Spring, Quarkus)</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-green">Go</span></h4>
        <p>Cloud infra (Docker, K8s), microservices, CLI tools, DevOps</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-red">Rust</span></h4>
        <p>Systems programming, WebAssembly, crypto, game engines, embedded</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-yellow">Python</span></h4>
        <p>Data science, ML/AI, scripting, automation, prototyping, backend (FastAPI)</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-purple">Groovy</span></h4>
        <p>Jenkins pipelines, Gradle build scripts, JVM scripting, testing (Spock)</p>
    </div>
</div>
`;

// ====================== ARCHITECTURE ======================
sections.architecture = () => `
<h1 class="section-title animate-in">Software Architecture</h1>
<p class="section-subtitle animate-in">Dari monolith hingga microservices, message queues, dan event-driven architecture</p>

<h2>Evolusi Arsitektur</h2>
<div class="flow-diagram">
    <div class="flow-node">Monolith</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">3-Tier</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">N-Tier</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">SOA</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node highlight">Microservices</div>
</div>

<h2>1. Monolith</h2>
<div class="card">
    <p>Semua komponen (UI, business logic, data access) di dalam <strong>satu deployment unit</strong>.</p>
    <div class="card-grid">
        <div class="card" style="border-color:var(--green)">
            <h4>Keuntungan</h4>
            <ul>
                <li>Simple deployment (1 artifact)</li>
                <li>Easy debugging & testing</li>
                <li>No network latency antar service</li>
                <li>Cocok untuk tim kecil / startup awal</li>
            </ul>
        </div>
        <div class="card" style="border-color:var(--red)">
            <h4>Kekurangan</h4>
            <ul>
                <li>Scaling = scale semua (boros)</li>
                <li>Satu bug bisa crash semua</li>
                <li>Long deployment cycles</li>
                <li>Tech stack lock-in</li>
            </ul>
        </div>
    </div>
</div>

<h2>2. 3-Tier & N-Tier Architecture</h2>
<div class="card">
    <h3>3-Tier Architecture</h3>
    <div class="flow-diagram">
        <div class="flow-node" style="border-color:var(--accent)">Presentation<br><small>UI / Web</small></div>
        <div class="flow-arrow">↔</div>
        <div class="flow-node" style="border-color:var(--yellow)">Business Logic<br><small>Application Server</small></div>
        <div class="flow-arrow">↔</div>
        <div class="flow-node" style="border-color:var(--green)">Data Access<br><small>Database</small></div>
    </div>

    <h3>N-Tier Architecture</h3>
    <p>Perluasan 3-Tier dengan layer tambahan:</p>
    <div class="flow-diagram">
        <div class="flow-node">Client</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">CDN / LB</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">API Gateway</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">App Layer</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Cache</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">DB</div>
    </div>
</div>

<h2>3. Microservices</h2>
<div class="card">
    <p>Aplikasi dipecah menjadi <strong>layanan kecil independen</strong> yang berkomunikasi via network (HTTP/gRPC/MQ).</p>
    <div class="card-grid">
        <div class="card">
            <h4>Orchestration</h4>
            <p>Satu <strong>central orchestrator</strong> mengontrol flow antar service.</p>
            <div class="flow-diagram">
                <div class="flow-node highlight">Orchestrator</div>
            </div>
            <div class="flow-diagram">
                <div class="flow-node">Svc A</div>
                <div class="flow-node">Svc B</div>
                <div class="flow-node">Svc C</div>
            </div>
            <p><strong>Pro:</strong> Easy to understand flow, centralized error handling</p>
            <p><strong>Con:</strong> Single point of failure, orchestrator jadi bottleneck</p>
        </div>
        <div class="card">
            <h4>Choreography</h4>
            <p>Setiap service <strong>independen</strong> bereaksi terhadap events.</p>
            <div class="flow-diagram">
                <div class="flow-node">Svc A</div>
                <div class="flow-arrow">→ event</div>
                <div class="flow-node">Svc B</div>
                <div class="flow-arrow">→ event</div>
                <div class="flow-node">Svc C</div>
            </div>
            <p><strong>Pro:</strong> Loosely coupled, scalable, resilient</p>
            <p><strong>Con:</strong> Hard to debug, eventual consistency</p>
        </div>
    </div>
</div>

<h2>4. Message Queue & Message Broker</h2>
<div class="card">
    <h3>Konsep</h3>
    <p><strong>Message Queue:</strong> Buffer antara producer dan consumer. Decouples services, handles backpressure.</p>
    <div class="flow-diagram">
        <div class="flow-node">Producer</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight" style="border-color:var(--yellow)">[Message Queue]</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Consumer</div>
    </div>
    <p><strong>Message Broker:</strong> Middleware yang routing, transformasi, dan delivery messages. Lebih pintar dari simple queue.</p>
</div>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--accent)">Apache Kafka</h3>
        <ul>
            <li><strong>Model:</strong> Distributed log / Event streaming</li>
            <li><strong>Throughput:</strong> Jutaan msg/sec</li>
            <li><strong>Retention:</strong> Persistent (configurable)</li>
            <li><strong>Pattern:</strong> Pub/Sub + Consumer Groups</li>
            <li><strong>Use case:</strong> Event sourcing, real-time analytics, log aggregation, CDC</li>
            <li><strong>Ordering:</strong> Per partition</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--orange)">RabbitMQ</h3>
        <ul>
            <li><strong>Model:</strong> Traditional message broker (AMQP)</li>
            <li><strong>Throughput:</strong> Ribuan msg/sec</li>
            <li><strong>Retention:</strong> Hapus setelah di-acknowledge</li>
            <li><strong>Pattern:</strong> Queue, Topic, Fanout, Headers</li>
            <li><strong>Use case:</strong> Task queue, RPC, complex routing</li>
            <li><strong>Routing:</strong> Flexible exchange types</li>
        </ul>
    </div>
</div>

<div class="card">
    <h3>Perbandingan Message Queues</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Feature</th><th>Kafka</th><th>RabbitMQ</th><th>NATS</th><th>Redis Streams</th><th>AWS SQS</th></tr>
    <tr><td>Model</td><td>Log</td><td>Broker</td><td>Messaging</td><td>Stream</td><td>Queue</td></tr>
    <tr><td>Throughput</td><td>Very High</td><td>Medium</td><td>Very High</td><td>High</td><td>Medium</td></tr>
    <tr><td>Latency</td><td>ms</td><td>μs-ms</td><td>μs</td><td>μs</td><td>ms-s</td></tr>
    <tr><td>Persistence</td><td>Yes (log)</td><td>Optional</td><td>Optional</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Protocol</td><td>Custom TCP</td><td>AMQP</td><td>Custom</td><td>RESP</td><td>HTTP</td></tr>
    <tr><td>Replay</td><td>Yes</td><td>No</td><td>JetStream</td><td>Yes</td><td>No</td></tr>
    </table>
    </div>
</div>
`;

// ====================== NETWORKING ======================
sections.networking = () => `
<h1 class="section-title animate-in">Networking & Protocols</h1>
<p class="section-subtitle animate-in">TCP vs UDP, HTTP versions, dan interface protocols (REST, gRPC, GraphQL, SOAP)</p>

<h2>TCP vs UDP</h2>
<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--accent)">TCP (Transmission Control Protocol)</h3>
        <ul>
            <li><strong>Connection-oriented</strong> (3-way handshake)</li>
            <li>Reliable delivery, ordered, no data loss</li>
            <li>Flow control & congestion control</li>
            <li>Higher overhead, higher latency</li>
        </ul>
        <p><strong>Use cases:</strong> Web (HTTP), email (SMTP), file transfer (FTP), database connections, SSH</p>
        <div class="flow-diagram">
            <div class="flow-node">Client</div>
            <div class="flow-arrow">SYN →</div>
            <div class="flow-node">Server</div>
        </div>
        <div class="flow-diagram">
            <div class="flow-node">Client</div>
            <div class="flow-arrow">← SYN-ACK</div>
            <div class="flow-node">Server</div>
        </div>
        <div class="flow-diagram">
            <div class="flow-node">Client</div>
            <div class="flow-arrow">ACK →</div>
            <div class="flow-node highlight">Connected!</div>
        </div>
    </div>
    <div class="card">
        <h3 style="color:var(--green)">UDP (User Datagram Protocol)</h3>
        <ul>
            <li><strong>Connectionless</strong> (fire and forget)</li>
            <li>No guarantee: unreliable, unordered</li>
            <li>Minimal overhead, low latency</li>
            <li>Supports multicast & broadcast</li>
        </ul>
        <p><strong>Use cases:</strong> Video streaming, VoIP, online gaming, DNS lookups, IoT telemetry</p>
        <div class="flow-diagram">
            <div class="flow-node">Client</div>
            <div class="flow-arrow">DATA → → →</div>
            <div class="flow-node">Server</div>
        </div>
        <p><em>Tidak ada handshake, langsung kirim data!</em></p>
    </div>
</div>

<h2>HTTP Versions</h2>
<div class="table-wrapper">
<table>
<tr><th>Feature</th><th>HTTP/1.0</th><th>HTTP/1.1</th><th>HTTP/2</th><th>HTTP/3</th></tr>
<tr><td>Year</td><td>1996</td><td>1997</td><td>2015</td><td>2022</td></tr>
<tr><td>Transport</td><td>TCP</td><td>TCP</td><td>TCP + TLS</td><td><strong>QUIC (UDP)</strong></td></tr>
<tr><td>Connection</td><td>New per request</td><td>Keep-alive</td><td>Multiplexed</td><td>Multiplexed</td></tr>
<tr><td>Head-of-line blocking</td><td>Yes</td><td>Yes (pipelining helps)</td><td>TCP level only</td><td><strong>No!</strong></td></tr>
<tr><td>Header compression</td><td>No</td><td>No</td><td>HPACK</td><td>QPACK</td></tr>
<tr><td>Server Push</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Binary</td><td>No (text)</td><td>No (text)</td><td>Yes (frames)</td><td>Yes (frames)</td></tr>
<tr><td>0-RTT</td><td>No</td><td>No</td><td>No</td><td><strong>Yes!</strong></td></tr>
</table>
</div>

<div class="info-box">
    <strong>HTTP/3 + QUIC</strong> dibangun di atas UDP, bukan TCP! QUIC menangani reliability, ordering, dan encryption sendiri, menghilangkan TCP head-of-line blocking sepenuhnya.
</div>

<h2>Interface / API Protocols</h2>

<div class="tabs">
    <button class="tab-btn active" data-tab="proto-rest">REST</button>
    <button class="tab-btn" data-tab="proto-soap">SOAP</button>
    <button class="tab-btn" data-tab="proto-graphql">GraphQL</button>
    <button class="tab-btn" data-tab="proto-rpc">RPC & gRPC</button>
</div>

<div data-tab-content="proto-rest" class="tab-content active">
<h3>RESTful API</h3>
<div class="card">
    <p><strong>RE</strong>presentational <strong>S</strong>tate <strong>T</strong>ransfer — arsitektur berbasis resource & HTTP verbs.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Method</th><th>Tujuan</th><th>Idempotent</th><th>Contoh</th></tr>
    <tr><td><span class="badge badge-green">GET</span></td><td>Read</td><td>Ya</td><td>GET /api/users/1</td></tr>
    <tr><td><span class="badge badge-blue">POST</span></td><td>Create</td><td>Tidak</td><td>POST /api/users</td></tr>
    <tr><td><span class="badge badge-orange">PUT</span></td><td>Replace</td><td>Ya</td><td>PUT /api/users/1</td></tr>
    <tr><td><span class="badge badge-yellow">PATCH</span></td><td>Partial Update</td><td>Tidak</td><td>PATCH /api/users/1</td></tr>
    <tr><td><span class="badge badge-red">DELETE</span></td><td>Delete</td><td>Ya</td><td>DELETE /api/users/1</td></tr>
    </table>
    </div>
    <p><strong>Format:</strong> JSON (dominan), XML. <strong>Stateless.</strong> Setiap request membawa semua info yang dibutuhkan.</p>
</div>
</div>

<div data-tab-content="proto-soap" class="tab-content">
<h3>SOAP (Simple Object Access Protocol)</h3>
<div class="card">
    <ul>
        <li>Protocol ketat berbasis <strong>XML</strong></li>
        <li>WSDL (Web Services Description Language) mendefinisikan kontrak</li>
        <li>Built-in security (WS-Security), transactions, reliability</li>
        <li>Transport: HTTP, SMTP, TCP</li>
    </ul>
    <div class="code-block">&lt;soap:Envelope xmlns:soap=<span class="str">"http://schemas.xmlsoap.org/soap/envelope/"</span>&gt;
  &lt;soap:Header&gt;
    &lt;auth:Token&gt;abc123&lt;/auth:Token&gt;
  &lt;/soap:Header&gt;
  &lt;soap:Body&gt;
    &lt;GetUser&gt;
      &lt;UserId&gt;<span class="num">1</span>&lt;/UserId&gt;
    &lt;/GetUser&gt;
  &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;</div>
    <p><strong>Digunakan di:</strong> Banking, enterprise legacy, government systems, BPJS, payment gateways.</p>
</div>
</div>

<div data-tab-content="proto-graphql" class="tab-content">
<h3>GraphQL</h3>
<div class="card">
    <p>Query language untuk API — client menentukan <strong>persis</strong> data apa yang dibutuhkan.</p>
    <ul>
        <li><strong>Single endpoint:</strong> POST /graphql</li>
        <li><strong>No over/under fetching</strong></li>
        <li>Strong type system (Schema)</li>
        <li>Real-time via Subscriptions</li>
    </ul>
    <div class="code-block"><span class="cm"># Query</span>
query {
  user(id: <span class="num">1</span>) {
    name
    email
    posts(limit: <span class="num">5</span>) {
      title
      createdAt
    }
  }
}

<span class="cm"># Mutation</span>
mutation {
  createUser(input: { name: <span class="str">"John"</span>, email: <span class="str">"john@ex.com"</span> }) {
    id
    name
  }
}</div>
</div>
</div>

<div data-tab-content="proto-rpc" class="tab-content">
<h3>RPC & gRPC</h3>
<div class="card">
    <p><strong>RPC (Remote Procedure Call):</strong> Panggil fungsi di server seolah-olah fungsi lokal.</p>
    <p><strong>gRPC (Google RPC):</strong> Framework RPC modern menggunakan <strong>Protocol Buffers</strong> (binary serialization) + HTTP/2.</p>
    <div class="card-grid">
        <div class="card">
            <h4>Proto Definition</h4>
            <div class="code-block"><span class="kw">syntax</span> = <span class="str">"proto3"</span>;

<span class="kw">service</span> <span class="type">UserService</span> {
  <span class="kw">rpc</span> <span class="fn">GetUser</span>(UserRequest)
    <span class="kw">returns</span> (UserResponse);
  <span class="kw">rpc</span> <span class="fn">ListUsers</span>(Empty)
    <span class="kw">returns</span> (<span class="kw">stream</span> User);
}

<span class="kw">message</span> <span class="type">UserRequest</span> {
  <span class="type">int32</span> id = <span class="num">1</span>;
}
<span class="kw">message</span> <span class="type">UserResponse</span> {
  <span class="type">int32</span> id = <span class="num">1</span>;
  <span class="type">string</span> name = <span class="num">2</span>;
}</div>
        </div>
        <div class="card">
            <h4>gRPC Streaming Modes</h4>
            <ul>
                <li><strong>Unary:</strong> Request → Response</li>
                <li><strong>Server streaming:</strong> Request → Stream of responses</li>
                <li><strong>Client streaming:</strong> Stream of requests → Response</li>
                <li><strong>Bidirectional:</strong> Stream ↔ Stream</li>
            </ul>
            <p><strong>Keunggulan gRPC:</strong></p>
            <ul>
                <li>10x lebih cepat dari REST+JSON</li>
                <li>Type-safe, auto-generated client</li>
                <li>HTTP/2 multiplexing</li>
                <li>Ideal untuk microservices internal</li>
            </ul>
        </div>
    </div>
</div>
</div>

<h2>Perbandingan Protokol API</h2>
<div class="table-wrapper">
<table>
<tr><th>Aspek</th><th>REST</th><th>SOAP</th><th>GraphQL</th><th>gRPC</th></tr>
<tr><td>Format</td><td>JSON/XML</td><td>XML only</td><td>JSON</td><td>Protobuf (binary)</td></tr>
<tr><td>Transport</td><td>HTTP</td><td>HTTP/SMTP/TCP</td><td>HTTP</td><td>HTTP/2</td></tr>
<tr><td>Performance</td><td>Good</td><td>Slow (XML)</td><td>Good</td><td>Excellent</td></tr>
<tr><td>Learning Curve</td><td>Easy</td><td>Complex</td><td>Medium</td><td>Medium</td></tr>
<tr><td>Best For</td><td>Public APIs</td><td>Enterprise/Legacy</td><td>Mobile/SPA</td><td>Internal services</td></tr>
<tr><td>Streaming</td><td>SSE/WebSocket</td><td>No</td><td>Subscriptions</td><td>Native</td></tr>
<tr><td>Caching</td><td>HTTP caching</td><td>Manual</td><td>Complex</td><td>Manual</td></tr>
</table>
</div>
`;

// ====================== CLEAN CODE ======================
sections.cleancode = () => `
<h1 class="section-title animate-in">Clean Code & Clean Architecture</h1>
<p class="section-subtitle animate-in">Prinsip menulis kode yang bersih, mudah dibaca, dan arsitektur yang maintainable</p>

<h2>Clean Code (Robert C. Martin)</h2>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--accent)">Meaningful Names</h3>
        <div class="code-block"><span class="cm">// ❌ Bad</span>
<span class="kw">int</span> d; <span class="cm">// elapsed time in days</span>
<span class="kw">int</span>[] list1;

<span class="cm">// ✅ Good</span>
<span class="kw">int</span> elapsedDays;
<span class="kw">int</span>[] activeUsers;</div>
    </div>
    <div class="card">
        <h3 style="color:var(--green)">Small Functions</h3>
        <div class="code-block"><span class="cm">// ❌ Bad — function does too much</span>
<span class="kw">void</span> <span class="fn">processOrder</span>(order) {
    <span class="cm">// validate... 50 lines</span>
    <span class="cm">// calculate... 30 lines</span>
    <span class="cm">// save... 20 lines</span>
    <span class="cm">// notify... 15 lines</span>
}

<span class="cm">// ✅ Good — each function does one thing</span>
<span class="kw">void</span> <span class="fn">processOrder</span>(order) {
    validate(order);
    total = calculateTotal(order);
    save(order, total);
    notifyCustomer(order);
}</div>
    </div>
</div>

<h3>Prinsip SOLID</h3>
<div class="card-grid">
    <div class="card">
        <h4><span class="badge badge-blue">S</span> Single Responsibility</h4>
        <p>Setiap class/module punya <strong>satu alasan untuk berubah</strong>.</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-green">O</span> Open/Closed</h4>
        <p>Open for extension, <strong>closed for modification</strong>. Gunakan abstraksi.</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-yellow">L</span> Liskov Substitution</h4>
        <p>Subtype harus bisa <strong>menggantikan</strong> parent type tanpa breaking behavior.</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-orange">I</span> Interface Segregation</h4>
        <p>Client tidak boleh bergantung pada method yang <strong>tidak digunakan</strong>.</p>
    </div>
    <div class="card">
        <h4><span class="badge badge-red">D</span> Dependency Inversion</h4>
        <p>High-level modules bergantung pada <strong>abstraksi</strong>, bukan detail implementasi.</p>
    </div>
</div>

<h2>Clean Architecture</h2>
<div class="card">
    <p>Arsitektur berlapis dimana <strong>business logic</strong> berada di pusat dan tidak bergantung pada framework, database, atau UI.</p>
    <div style="text-align:center;padding:20px">
        <svg width="400" height="400" viewBox="0 0 400 400" style="max-width:100%">
            <circle cx="200" cy="200" r="190" fill="rgba(248,113,113,0.08)" stroke="var(--red)" stroke-width="1.5"/>
            <text x="200" y="30" text-anchor="middle" fill="var(--red)" font-size="12" font-weight="600">Frameworks & Drivers</text>
            <circle cx="200" cy="200" r="145" fill="rgba(251,146,60,0.08)" stroke="var(--orange)" stroke-width="1.5"/>
            <text x="200" y="72" text-anchor="middle" fill="var(--orange)" font-size="12" font-weight="600">Interface Adapters</text>
            <circle cx="200" cy="200" r="100" fill="rgba(52,211,153,0.08)" stroke="var(--green)" stroke-width="1.5"/>
            <text x="200" y="115" text-anchor="middle" fill="var(--green)" font-size="12" font-weight="600">Use Cases</text>
            <circle cx="200" cy="200" r="55" fill="rgba(56,189,248,0.15)" stroke="var(--accent)" stroke-width="2"/>
            <text x="200" y="197" text-anchor="middle" fill="var(--accent)" font-size="13" font-weight="700">Entities</text>
            <text x="200" y="213" text-anchor="middle" fill="var(--text2)" font-size="10">(Business Rules)</text>
            <!-- Arrow showing dependency direction -->
            <line x1="360" y1="200" x2="250" y2="200" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#arrowhead)"/>
            <text x="310" y="190" fill="var(--text2)" font-size="10">Dependency</text>
            <text x="315" y="218" fill="var(--text2)" font-size="10">Direction</text>
            <defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="var(--text2)"/></marker></defs>
        </svg>
    </div>
    <ul>
        <li><strong>Entities:</strong> Enterprise business rules (domain objects)</li>
        <li><strong>Use Cases:</strong> Application-specific business rules</li>
        <li><strong>Interface Adapters:</strong> Controllers, Presenters, Gateways (format conversion)</li>
        <li><strong>Frameworks & Drivers:</strong> UI, DB, Web Framework, External APIs</li>
    </ul>
    <div class="info-box">
        <strong>Dependency Rule:</strong> Dependencies selalu mengarah ke dalam (inner circles). Entities tidak tahu tentang use cases, use cases tidak tahu tentang framework.
    </div>
</div>

<h3>Pola Terkait</h3>
<div class="card-grid-3">
    <div class="card">
        <h4>Hexagonal (Ports & Adapters)</h4>
        <p>Core logic di tengah, ports = interfaces, adapters = implementasi. Mudah swap database, API, dll.</p>
    </div>
    <div class="card">
        <h4>Onion Architecture</h4>
        <p>Mirip Clean Architecture. Domain Model di pusat, Infrastructure di luar.</p>
    </div>
    <div class="card">
        <h4>CQRS + Event Sourcing</h4>
        <p>Pisahkan Command (write) dan Query (read). Store events, bukan state.</p>
    </div>
</div>
`;

// ====================== SECURITY ======================
sections.security = () => `
<h1 class="section-title animate-in">Security, Encryption & Secure Coding</h1>
<p class="section-subtitle animate-in">Secure SDLC, komunikasi aman, enkripsi, hash, dan protokol keamanan</p>

<h2>Secure Coding & SSDLC</h2>
<div class="card">
    <h3>Secure Software Development Life Cycle (SSDLC)</h3>
    <div class="flow-diagram">
        <div class="flow-node">Requirements<br><small>Security req</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Design<br><small>Threat modeling</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Implementation<br><small>Secure coding</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Testing<br><small>SAST/DAST/Pen test</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Deployment<br><small>Hardening</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight">Monitoring<br><small>SIEM/SOC</small></div>
    </div>
</div>

<div class="card">
    <h3>OWASP Top 10 (2021)</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>#</th><th>Vulnerability</th><th>Mitigasi</th></tr>
    <tr><td>1</td><td>Broken Access Control</td><td>RBAC, principle of least privilege</td></tr>
    <tr><td>2</td><td>Cryptographic Failures</td><td>TLS 1.3, proper key management</td></tr>
    <tr><td>3</td><td>Injection (SQL, XSS)</td><td>Parameterized queries, input sanitization</td></tr>
    <tr><td>4</td><td>Insecure Design</td><td>Threat modeling, secure design patterns</td></tr>
    <tr><td>5</td><td>Security Misconfiguration</td><td>Hardening, remove defaults</td></tr>
    <tr><td>6</td><td>Vulnerable Components</td><td>SCA tools, dependency scanning</td></tr>
    <tr><td>7</td><td>Auth Failures</td><td>MFA, session management, rate limiting</td></tr>
    <tr><td>8</td><td>Data Integrity Failures</td><td>Signed updates, CI/CD security</td></tr>
    <tr><td>9</td><td>Logging Failures</td><td>Centralized logging, alerting</td></tr>
    <tr><td>10</td><td>SSRF</td><td>Allowlists, network segmentation</td></tr>
    </table>
    </div>
</div>

<h2>Komunikasi Aman per Protokol</h2>
<div class="table-wrapper">
<table>
<tr><th>Protokol</th><th>Pengamanan</th><th>Detail</th></tr>
<tr><td>HTTP</td><td><strong>HTTPS (TLS)</strong></td><td>HTTP + TLS encryption. Certificate dari CA.</td></tr>
<tr><td>TCP</td><td><strong>TLS/mTLS</strong></td><td>TLS di atas TCP. mTLS = kedua pihak autentikasi.</td></tr>
<tr><td>UDP</td><td><strong>DTLS</strong></td><td>Datagram TLS — TLS yang dirancang untuk UDP.</td></tr>
<tr><td>REST</td><td><strong>HTTPS + JWT + OAuth2</strong></td><td>Token-based auth, CORS, rate limiting, API key.</td></tr>
<tr><td>SOAP</td><td><strong>WS-Security</strong></td><td>XML Signature, XML Encryption, SAML tokens.</td></tr>
<tr><td>GraphQL</td><td><strong>HTTPS + Auth + Depth limit</strong></td><td>Query depth limiting, persisted queries, authorization per field.</td></tr>
<tr><td>RPC/gRPC</td><td><strong>TLS + mTLS + Token</strong></td><td>Built-in TLS support, interceptors for auth, channel credentials.</td></tr>
</table>
</div>

<h2>HTTPS, TLS & JWT</h2>
<div class="card">
    <h3>TLS Handshake (TLS 1.3)</h3>
    <div class="flow-diagram">
        <div class="flow-node">Client</div>
        <div class="flow-arrow">→ ClientHello + KeyShare</div>
        <div class="flow-node">Server</div>
    </div>
    <div class="flow-diagram">
        <div class="flow-node">Client</div>
        <div class="flow-arrow">← ServerHello + KeyShare + Cert + Verify</div>
        <div class="flow-node">Server</div>
    </div>
    <div class="flow-diagram">
        <div class="flow-node highlight">Client</div>
        <div class="flow-arrow">→ Finished (encrypted!)</div>
        <div class="flow-node highlight">Server</div>
    </div>
    <p>TLS 1.3 hanya butuh <strong>1 round-trip</strong> (vs 2 di TLS 1.2). Mendukung <strong>0-RTT</strong> untuk koneksi berulang.</p>
</div>

<div class="card">
    <h3>JWT (JSON Web Token)</h3>
    <div class="encrypt-vis">
        <div class="encrypt-block">
            <div style="color:var(--red);font-weight:700">Header</div>
            <code style="font-size:0.7rem">{"alg":"HS256"}</code>
        </div>
        <div style="font-size:1.2rem;font-weight:700">.</div>
        <div class="encrypt-block">
            <div style="color:var(--accent3);font-weight:700">Payload</div>
            <code style="font-size:0.7rem">{"sub":"1","name":"John"}</code>
        </div>
        <div style="font-size:1.2rem;font-weight:700">.</div>
        <div class="encrypt-block cipher">
            <div style="color:var(--green);font-weight:700">Signature</div>
            <code style="font-size:0.7rem">HMACSHA256(b64(h)+b64(p), secret)</code>
        </div>
    </div>
    <p><strong>JWT bukan enkripsi!</strong> Payload hanya base64-encoded (bisa dibaca). JWT menjamin <strong>integrity</strong> (tidak dimodifikasi) dan <strong>authenticity</strong> (dari pihak yang benar).</p>
    <p>Untuk enkripsi payload: gunakan <strong>JWE</strong> (JSON Web Encryption).</p>
</div>

<h2>Enkripsi & Hash</h2>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--yellow)">Symmetric Encryption</h3>
        <p>Satu kunci untuk encrypt & decrypt.</p>
        <div class="encrypt-vis">
            <div class="encrypt-block">Plaintext<br><small>"Hello"</small></div>
            <div class="encrypt-arrow">+</div>
            <div class="encrypt-block key">Key 🔑<br><small>"s3cr3t"</small></div>
            <div class="encrypt-arrow">→</div>
            <div class="encrypt-block cipher">Ciphertext<br><small>"x7Fk2..."</small></div>
        </div>
        <ul>
            <li><strong>AES-256-GCM</strong> — standar industri (128/192/256 bit key)</li>
            <li><strong>ChaCha20-Poly1305</strong> — mobile/low-power devices</li>
            <li><strong>Masalah:</strong> Key distribution — bagaimana share key secara aman?</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--accent)">Asymmetric Encryption</h3>
        <p>Sepasang kunci: <strong>public key</strong> (encrypt) & <strong>private key</strong> (decrypt).</p>
        <div class="encrypt-vis">
            <div class="encrypt-block">Plaintext</div>
            <div class="encrypt-arrow">+</div>
            <div class="encrypt-block key">Public Key 🔓</div>
            <div class="encrypt-arrow">→</div>
            <div class="encrypt-block cipher">Ciphertext</div>
            <div class="encrypt-arrow">+</div>
            <div class="encrypt-block key">Private Key 🔐</div>
            <div class="encrypt-arrow">→</div>
            <div class="encrypt-block">Plaintext</div>
        </div>
        <ul>
            <li><strong>RSA</strong> — klasik (2048/4096 bit). Berdasarkan faktorisasi prima.</li>
            <li><strong>ECDSA/Ed25519</strong> — Elliptic Curve. Lebih kecil, lebih cepat.</li>
            <li><strong>Diffie-Hellman</strong> — Key exchange (bukan enkripsi langsung).</li>
        </ul>
    </div>
</div>

<div class="card">
    <h3>Matematika di Balik RSA</h3>
    <div class="code-block"><span class="cm">// RSA Key Generation (simplified)</span>
<span class="num">1.</span> Pilih 2 bilangan prima besar: p, q
<span class="num">2.</span> n = p × q                    <span class="cm">// modulus</span>
<span class="num">3.</span> φ(n) = (p-1)(q-1)            <span class="cm">// Euler's totient</span>
<span class="num">4.</span> Pilih e: 1 < e < φ(n), gcd(e, φ(n)) = 1  <span class="cm">// public exponent (usually 65537)</span>
<span class="num">5.</span> d = e⁻¹ mod φ(n)             <span class="cm">// private exponent (modular inverse)</span>

<span class="cm">// Public key:  (e, n)</span>
<span class="cm">// Private key: (d, n)</span>

<span class="cm">// Encrypt: C = M^e mod n</span>
<span class="cm">// Decrypt: M = C^d mod n</span>

<span class="cm">// Keamanan: karena memfaktorkan n = p × q sangat sulit</span>
<span class="cm">// untuk n yang sangat besar (2048+ bit)</span></div>
</div>

<div class="card">
    <h3>Hash Functions</h3>
    <p>Hash = fungsi satu arah. Input → fixed-size output. <strong>Tidak bisa di-decrypt!</strong></p>
    <div class="flow-diagram">
        <div class="flow-node">"Hello World"</div>
        <div class="flow-arrow">→ SHA-256</div>
        <div class="flow-node cipher" style="font-size:0.65rem;border-color:var(--green)">a591a6d40bf420...64e4d8</div>
    </div>
    <div class="table-wrapper">
    <table>
    <tr><th>Algorithm</th><th>Output</th><th>Status</th><th>Penggunaan</th></tr>
    <tr><td>MD5</td><td>128 bit</td><td><span class="badge badge-red">BROKEN</span></td><td>Checksum (non-security)</td></tr>
    <tr><td>SHA-1</td><td>160 bit</td><td><span class="badge badge-red">BROKEN</span></td><td>Legacy only</td></tr>
    <tr><td>SHA-256</td><td>256 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Digital signatures, blockchain</td></tr>
    <tr><td>SHA-3</td><td>256/512 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Future-proof</td></tr>
    <tr><td>bcrypt</td><td>184 bit</td><td><span class="badge badge-green">SECURE</span></td><td>Password hashing (adaptive)</td></tr>
    <tr><td>Argon2</td><td>Variable</td><td><span class="badge badge-green">RECOMMENDED</span></td><td>Password hashing (modern)</td></tr>
    </table>
    </div>
    <div class="warn-box">
        <strong>Password Storage:</strong> JANGAN gunakan SHA-256 langsung! Gunakan <strong>bcrypt</strong> atau <strong>Argon2</strong> dengan salt — dirancang khusus untuk lambat, menghambat brute force.
    </div>
</div>

<h2>Sistem Pengamanan Kunci</h2>
<div class="card-grid">
    <div class="card">
        <h4>PKI (Public Key Infrastructure)</h4>
        <p>Sistem certificate chain: Root CA → Intermediate CA → Server Certificate. Browser memverifikasi chain of trust.</p>
    </div>
    <div class="card">
        <h4>HSM (Hardware Security Module)</h4>
        <p>Hardware khusus untuk menyimpan & mengelola kunci kriptografi. Tamper-resistant. Digunakan di banking & CA.</p>
    </div>
    <div class="card">
        <h4>Key Management (KMS)</h4>
        <p>AWS KMS, HashiCorp Vault — manage lifecycle kunci: generate, rotate, revoke, destroy.</p>
    </div>
    <div class="card">
        <h4>Zero Trust Security</h4>
        <p>"Never trust, always verify." mTLS, identity-based access, micro-segmentation, continuous verification.</p>
    </div>
</div>
`;

// ====================== ISO & UU PDP ======================
sections.iso = () => `
<h1 class="section-title animate-in">ISO 27001, ISO 27701 & UU PDP</h1>
<p class="section-subtitle animate-in">Standar keamanan informasi dan perlindungan data pribadi</p>

<h2>ISO 27001:2022</h2>
<div class="card">
    <h3>Information Security Management System (ISMS)</h3>
    <p>Standar internasional untuk <strong>mengelola keamanan informasi</strong> secara sistematis.</p>
    <div class="card-grid">
        <div class="card">
            <h4>Triad CIA</h4>
            <ul>
                <li><strong>Confidentiality</strong> — Hanya yang berwenang akses data</li>
                <li><strong>Integrity</strong> — Data tidak dimodifikasi tanpa izin</li>
                <li><strong>Availability</strong> — Data tersedia saat dibutuhkan</li>
            </ul>
        </div>
        <div class="card">
            <h4>Struktur ISO 27001</h4>
            <ul>
                <li>Clause 4-10: Persyaratan ISMS</li>
                <li>Annex A: 93 kontrol keamanan (4 tema)</li>
                <li>Plan-Do-Check-Act cycle</li>
            </ul>
        </div>
    </div>
</div>

<div class="card">
    <h3>Annex A Controls (ISO 27001:2022)</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Tema</th><th>Jumlah</th><th>Contoh Kontrol</th></tr>
    <tr><td><span class="badge badge-blue">Organizational</span></td><td>37</td><td>Policies, roles, asset management, supplier security</td></tr>
    <tr><td><span class="badge badge-green">People</span></td><td>8</td><td>Screening, training, awareness, disciplinary process</td></tr>
    <tr><td><span class="badge badge-orange">Physical</span></td><td>14</td><td>Secure areas, equipment, clear desk, cabling</td></tr>
    <tr><td><span class="badge badge-purple">Technological</span></td><td>34</td><td>Access control, cryptography, logging, malware, backup, network security</td></tr>
    </table>
    </div>
</div>

<div class="card">
    <h3>Implementasi ISMS</h3>
    <div class="flow-diagram">
        <div class="flow-node">Gap Analysis</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Risk Assessment</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Risk Treatment</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Implement Controls</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Internal Audit</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight">Certification Audit</div>
    </div>
</div>

<h2>ISO 27701:2019</h2>
<div class="card">
    <h3>Privacy Information Management System (PIMS)</h3>
    <p>Ekstensi ISO 27001 untuk <strong>perlindungan data pribadi</strong> (privacy). Mapping ke GDPR.</p>
    <ul>
        <li><strong>PII Controller:</strong> Organisasi yang menentukan tujuan & cara pemrosesan data pribadi</li>
        <li><strong>PII Processor:</strong> Organisasi yang memproses data atas nama controller</li>
        <li><strong>Data Subject:</strong> Individu yang datanya diproses</li>
    </ul>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>ISO 27001</th><th>ISO 27701</th></tr>
    <tr><td>Fokus</td><td>Information Security</td><td>Privacy (Data Pribadi)</td></tr>
    <tr><td>Scope</td><td>Semua informasi</td><td>Personally Identifiable Info (PII)</td></tr>
    <tr><td>Kontrol</td><td>93 kontrol (Annex A)</td><td>Tambahan kontrol privacy</td></tr>
    <tr><td>Compliance</td><td>ISO 27001</td><td>GDPR, UU PDP mapping</td></tr>
    </table>
    </div>
</div>

<h2>UU PDP (Undang-Undang Pelindungan Data Pribadi)</h2>
<div class="card">
    <h3>UU No. 27 Tahun 2022</h3>
    <p>Undang-undang Indonesia tentang <strong>pelindungan data pribadi</strong>, berlaku efektif Oktober 2024.</p>

    <h4>Jenis Data Pribadi</h4>
    <div class="card-grid">
        <div class="card">
            <h4>Data Pribadi Umum</h4>
            <ul>
                <li>Nama lengkap</li>
                <li>Jenis kelamin</li>
                <li>Kewarganegaraan</li>
                <li>Agama</li>
                <li>Status perkawinan</li>
            </ul>
        </div>
        <div class="card">
            <h4>Data Pribadi Spesifik</h4>
            <ul>
                <li>Data kesehatan</li>
                <li>Data biometrik & genetika</li>
                <li>Data keuangan</li>
                <li>Orientasi seksual</li>
                <li>Data anak</li>
                <li>Catatan kejahatan</li>
            </ul>
        </div>
    </div>

    <h4>Hak Subjek Data</h4>
    <ul>
        <li>Hak mendapatkan informasi tentang pemrosesan data</li>
        <li>Hak mengakses dan mendapatkan salinan data pribadi</li>
        <li>Hak memperbarui dan memperbaiki data</li>
        <li>Hak menghapus data (<strong>right to be forgotten</strong>)</li>
        <li>Hak menarik persetujuan</li>
        <li>Hak mengajukan keberatan</li>
        <li>Hak portabilitas data</li>
    </ul>

    <h4>Sanksi</h4>
    <div class="table-wrapper">
    <table>
    <tr><th>Pelanggaran</th><th>Denda</th><th>Pidana</th></tr>
    <tr><td>Pengumpulan ilegal</td><td>Max Rp 5 Miliar</td><td>Max 5 tahun penjara</td></tr>
    <tr><td>Pengungkapan ilegal</td><td>Max Rp 5 Miliar</td><td>Max 5 tahun penjara</td></tr>
    <tr><td>Pemalsuan data</td><td>Max Rp 6 Miliar</td><td>Max 6 tahun penjara</td></tr>
    <tr><td>Korporasi</td><td>Max 10x denda individu</td><td>+ pembekuan usaha</td></tr>
    </table>
    </div>
</div>

<h3>Mapping: ISO 27701 → UU PDP</h3>
<div class="card">
    <div class="table-wrapper">
    <table>
    <tr><th>UU PDP</th><th>ISO 27701 Mapping</th></tr>
    <tr><td>Dasar pemrosesan (consent)</td><td>7.2.2 Identify lawful basis</td></tr>
    <tr><td>Hak akses subjek data</td><td>7.3.2 Determine information for PII principals</td></tr>
    <tr><td>Data minimization</td><td>7.4.1 Limit collection</td></tr>
    <tr><td>Notifikasi breach</td><td>7.3.8 Notification regarding breaches</td></tr>
    <tr><td>Transfer lintas negara</td><td>7.5.1 Identify basis for PII transfer</td></tr>
    </table>
    </div>
</div>
`;

// ====================== FRAMEWORKS ======================
sections.frameworks = () => `
<h1 class="section-title animate-in">Frameworks & Modern Stack</h1>
<p class="section-subtitle animate-in">Frontend, Backend, dan arsitektur modern di berbagai bahasa</p>

<h2>Frontend: Next.js</h2>
<div class="card">
    <p><strong>Next.js</strong> = React framework dengan SSR, SSG, ISR, API Routes, dan App Router.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Feature</th><th>Deskripsi</th></tr>
    <tr><td>SSR (Server-Side Rendering)</td><td>HTML di-generate di server setiap request</td></tr>
    <tr><td>SSG (Static Site Generation)</td><td>HTML di-generate saat build time</td></tr>
    <tr><td>ISR (Incremental Static Regen)</td><td>SSG + revalidasi berkala</td></tr>
    <tr><td>App Router (v13+)</td><td>React Server Components, nested layouts, streaming</td></tr>
    <tr><td>API Routes</td><td>Backend endpoints di dalam Next.js</td></tr>
    <tr><td>Middleware</td><td>Edge runtime, redirect, rewrite, auth check</td></tr>
    </table>
    </div>
    <div class="code-block"><span class="cm">// app/page.tsx — Server Component (Next.js 14)</span>
<span class="kw">export default async function</span> <span class="fn">Home</span>() {
    <span class="kw">const</span> data = <span class="kw">await</span> fetch(<span class="str">'https://api.example.com/posts'</span>)
    <span class="kw">const</span> posts = <span class="kw">await</span> data.json()
    <span class="kw">return</span> (
        &lt;div&gt;
            {posts.map(p =&gt; &lt;article key={p.id}&gt;{p.title}&lt;/article&gt;)}
        &lt;/div&gt;
    )
}</div>
</div>

<h2>Backend Stacks</h2>

<div class="tabs">
    <button class="tab-btn active" data-tab="fw-spring">Java + Spring Boot</button>
    <button class="tab-btn" data-tab="fw-quarkus">Java + Quarkus</button>
    <button class="tab-btn" data-tab="fw-go">Go + Gin</button>
    <button class="tab-btn" data-tab="fw-rust">Rust</button>
    <button class="tab-btn" data-tab="fw-python">Python + FastAPI</button>
</div>

<div data-tab-content="fw-spring" class="tab-content active">
<div class="card">
    <h3>Java + Spring Boot</h3>
    <p>Framework enterprise paling populer di Java. Convention over configuration, auto-configuration, embedded server.</p>
    <div class="code-block"><span class="kw">@RestController</span>
<span class="kw">@RequestMapping</span>(<span class="str">"/api/users"</span>)
<span class="kw">public class</span> <span class="type">UserController</span> {

    <span class="kw">@Autowired</span>
    <span class="kw">private</span> UserService userService;

    <span class="kw">@GetMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> ResponseEntity&lt;User&gt; <span class="fn">getUser</span>(<span class="kw">@PathVariable</span> Long id) {
        <span class="kw">return</span> ResponseEntity.ok(userService.findById(id));
    }

    <span class="kw">@PostMapping</span>
    <span class="kw">public</span> ResponseEntity&lt;User&gt; <span class="fn">createUser</span>(<span class="kw">@Valid @RequestBody</span> CreateUserDTO dto) {
        <span class="kw">return</span> ResponseEntity.status(<span class="num">201</span>).body(userService.create(dto));
    }
}</div>
    <ul>
        <li><strong>Ecosystem:</strong> Spring Security, Spring Data JPA, Spring Cloud</li>
        <li><strong>Startup:</strong> 2-5 detik (JVM warmup)</li>
        <li><strong>RAM:</strong> 200-500 MB baseline</li>
        <li><strong>Best for:</strong> Enterprise, complex business logic, large teams</li>
    </ul>
</div>
</div>

<div data-tab-content="fw-quarkus" class="tab-content">
<div class="card">
    <h3>Java + Quarkus</h3>
    <p><strong>Supersonic Subatomic Java.</strong> Dirancang untuk cloud-native, Kubernetes, GraalVM native image.</p>
    <div class="code-block"><span class="kw">@Path</span>(<span class="str">"/api/users"</span>)
<span class="kw">@Produces</span>(MediaType.APPLICATION_JSON)
<span class="kw">public class</span> <span class="type">UserResource</span> {

    <span class="kw">@Inject</span>
    UserService userService;

    <span class="kw">@GET</span>
    <span class="kw">@Path</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> User <span class="fn">getUser</span>(<span class="kw">@PathParam</span>(<span class="str">"id"</span>) Long id) {
        <span class="kw">return</span> userService.findById(id);
    }
}</div>
    <div class="card-grid">
        <div class="card">
            <h4>Quarkus vs Spring Boot</h4>
            <table>
            <tr><th></th><th>Quarkus (native)</th><th>Spring Boot</th></tr>
            <tr><td>Startup</td><td><strong>~0.02s</strong></td><td>~2-5s</td></tr>
            <tr><td>Memory</td><td><strong>~30MB</strong></td><td>~200MB</td></tr>
            <tr><td>Binary size</td><td>~50MB (native)</td><td>~30MB (JAR)</td></tr>
            <tr><td>Ecosystem</td><td>Growing</td><td>Mature</td></tr>
            </table>
        </div>
    </div>
</div>
</div>

<div data-tab-content="fw-go" class="tab-content">
<div class="card">
    <h3>Go + Gin</h3>
    <p>Web framework tercepat di Go ecosystem. Minimal, high-performance, middleware-based.</p>
    <div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (<span class="str">"github.com/gin-gonic/gin"</span>)

<span class="kw">func</span> <span class="fn">main</span>() {
    r := gin.Default()

    r.GET(<span class="str">"/api/users/:id"</span>, <span class="kw">func</span>(c *gin.Context) {
        id := c.Param(<span class="str">"id"</span>)
        user := findUserById(id)
        c.JSON(<span class="num">200</span>, user)
    })

    r.POST(<span class="str">"/api/users"</span>, <span class="kw">func</span>(c *gin.Context) {
        <span class="kw">var</span> dto CreateUserDTO
        <span class="kw">if</span> err := c.ShouldBindJSON(&dto); err != <span class="num">nil</span> {
            c.JSON(<span class="num">400</span>, gin.H{<span class="str">"error"</span>: err.Error()})
            <span class="kw">return</span>
        }
        user := createUser(dto)
        c.JSON(<span class="num">201</span>, user)
    })

    r.Run(<span class="str">":8080"</span>)
}</div>
    <ul>
        <li><strong>Startup:</strong> Instant (~ms)</li>
        <li><strong>RAM:</strong> ~10-30 MB</li>
        <li><strong>Alternatives:</strong> Echo, Fiber, Chi, standard net/http</li>
        <li><strong>Best for:</strong> Microservices, API gateways, cloud infra</li>
    </ul>
</div>
</div>

<div data-tab-content="fw-rust" class="tab-content">
<div class="card">
    <h3>Rust Web Frameworks</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Framework</th><th>Async Runtime</th><th>Style</th><th>Performance</th></tr>
    <tr><td><strong>Actix-web</strong></td><td>Tokio</td><td>Actor model</td><td>Fastest (TechEmpower #1)</td></tr>
    <tr><td><strong>Axum</strong></td><td>Tokio</td><td>Tower-based, ergonomic</td><td>Very fast</td></tr>
    <tr><td><strong>Rocket</strong></td><td>Tokio</td><td>Batteries-included</td><td>Fast</td></tr>
    <tr><td><strong>Warp</strong></td><td>Tokio</td><td>Filter composable</td><td>Very fast</td></tr>
    </table>
    </div>
    <div class="code-block"><span class="cm">// Axum example</span>
<span class="kw">use</span> axum::{routing::get, Router, Json, extract::Path};

<span class="kw">async fn</span> <span class="fn">get_user</span>(Path(id): Path<span class="type">&lt;u64&gt;</span>) -> Json<span class="type">&lt;User&gt;</span> {
    <span class="kw">let</span> user = find_user(id).<span class="kw">await</span>;
    Json(user)
}

<span class="kw">#[tokio::main]</span>
<span class="kw">async fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> app = Router::new()
        .route(<span class="str">"/api/users/:id"</span>, get(get_user));
    <span class="kw">let</span> listener = tokio::net::TcpListener::bind(<span class="str">"0.0.0.0:8080"</span>).<span class="kw">await</span>.unwrap();
    axum::serve(listener, app).<span class="kw">await</span>.unwrap();
}</div>
    <p><strong>Best for:</strong> High-performance APIs, WebAssembly, systems programming, crypto.</p>
</div>
</div>

<div data-tab-content="fw-python" class="tab-content">
<div class="card">
    <h3>Python + FastAPI</h3>
    <p>Modern, fast, async-first Python framework. Auto-generated OpenAPI docs.</p>
    <div class="code-block"><span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI
<span class="kw">from</span> pydantic <span class="kw">import</span> BaseModel

app = FastAPI()

<span class="kw">class</span> <span class="type">User</span>(BaseModel):
    name: <span class="type">str</span>
    email: <span class="type">str</span>

<span class="kw">@app.get</span>(<span class="str">"/api/users/{user_id}"</span>)
<span class="kw">async def</span> <span class="fn">get_user</span>(user_id: <span class="type">int</span>):
    <span class="kw">return</span> {<span class="str">"id"</span>: user_id, <span class="str">"name"</span>: <span class="str">"John"</span>}

<span class="kw">@app.post</span>(<span class="str">"/api/users"</span>, status_code=<span class="num">201</span>)
<span class="kw">async def</span> <span class="fn">create_user</span>(user: User):
    <span class="kw">return</span> {<span class="str">"id"</span>: <span class="num">1</span>, **user.dict()}</div>
    <ul>
        <li><strong>Auto docs:</strong> /docs (Swagger) & /redoc</li>
        <li><strong>Type checking:</strong> Pydantic models with validation</li>
        <li><strong>Async:</strong> Built on Starlette + Uvicorn (ASGI)</li>
        <li><strong>Best for:</strong> ML/AI APIs, prototyping, data pipelines</li>
    </ul>
</div>
</div>

<h2>Performance Comparison (Approximate)</h2>
<div class="table-wrapper">
<table>
<tr><th>Stack</th><th>Requests/sec</th><th>Latency (p99)</th><th>Memory</th><th>Startup</th></tr>
<tr><td>Rust (Actix)</td><td>~700K</td><td><1ms</td><td>~5MB</td><td>~ms</td></tr>
<tr><td>Go (Gin)</td><td>~400K</td><td>~1ms</td><td>~15MB</td><td>~ms</td></tr>
<tr><td>Java (Quarkus native)</td><td>~200K</td><td>~2ms</td><td>~30MB</td><td>~20ms</td></tr>
<tr><td>Java (Spring Boot)</td><td>~100K</td><td>~5ms</td><td>~250MB</td><td>~3s</td></tr>
<tr><td>Python (FastAPI)</td><td>~30K</td><td>~10ms</td><td>~60MB</td><td>~1s</td></tr>
</table>
</div>
<p><em>* Benchmarks vary significantly based on workload, hardware, and configuration</em></p>
`;

// ====================== RAG ======================
sections.rag = () => `
<h1 class="section-title animate-in">RAG - Retrieval Augmented Generation</h1>
<p class="section-subtitle animate-in">Teknik menghubungkan LLM dengan knowledge base eksternal</p>

<h2>Apa itu RAG?</h2>
<div class="card">
    <p><strong>RAG</strong> menggabungkan kekuatan <strong>retrieval</strong> (pencarian informasi) dengan <strong>generation</strong> (LLM) untuk menghasilkan jawaban yang akurat berdasarkan data yang spesifik dan terkini.</p>
    <div class="flow-diagram">
        <div class="flow-node">User Query</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--yellow)">Embedding</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--green)">Vector DB Search</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--accent3)">Context + Prompt</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight">LLM Generate</div>
    </div>
</div>

<h2>Mengapa RAG?</h2>
<div class="card-grid">
    <div class="card">
        <h4>Problem LLM Biasa</h4>
        <ul>
            <li><strong>Hallucination</strong> — membuat fakta palsu</li>
            <li><strong>Stale knowledge</strong> — cutoff date</li>
            <li><strong>No domain context</strong> — tidak tahu data internal</li>
            <li><strong>No citation</strong> — tidak bisa menunjukkan sumber</li>
        </ul>
    </div>
    <div class="card">
        <h4>RAG Menyelesaikan</h4>
        <ul>
            <li><strong>Grounded answers</strong> — jawaban berbasis dokumen nyata</li>
            <li><strong>Up-to-date</strong> — knowledge base bisa di-update</li>
            <li><strong>Domain-specific</strong> — data internal perusahaan</li>
            <li><strong>Traceable</strong> — bisa cite sumber dokumen</li>
        </ul>
    </div>
</div>

<h2>Arsitektur RAG Pipeline</h2>
<div class="card">
    <h3>1. Indexing Phase (Offline)</h3>
    <div class="flow-diagram">
        <div class="flow-node">Documents<br><small>PDF, DB, Web</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Chunking<br><small>Split text</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--yellow)">Embedding<br><small>text→vector</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight">Vector DB<br><small>Store & Index</small></div>
    </div>

    <h3>2. Retrieval Phase (Online)</h3>
    <div class="flow-diagram">
        <div class="flow-node">User Query</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--yellow)">Query Embed</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--green)">Similarity Search<br><small>Top-K results</small></div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="border-color:var(--orange)">Reranking</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight">Context Docs</div>
    </div>

    <h3>3. Generation Phase</h3>
    <div class="flow-diagram">
        <div class="flow-node">System Prompt</div>
        <div class="flow-arrow">+</div>
        <div class="flow-node" style="border-color:var(--green)">Retrieved Context</div>
        <div class="flow-arrow">+</div>
        <div class="flow-node">User Query</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node highlight">LLM → Answer</div>
    </div>
</div>

<h2>Komponen Teknis</h2>

<div class="card-grid">
    <div class="card">
        <h4>Embedding Models</h4>
        <ul>
            <li><strong>OpenAI text-embedding-3-large</strong> (3072 dim)</li>
            <li><strong>Cohere embed-v3</strong></li>
            <li><strong>sentence-transformers</strong> (open source)</li>
            <li><strong>BGE, E5</strong> (open source, multilingual)</li>
        </ul>
    </div>
    <div class="card">
        <h4>Vector Databases</h4>
        <ul>
            <li><strong>Pinecone</strong> — managed, scalable</li>
            <li><strong>Weaviate</strong> — open source, hybrid search</li>
            <li><strong>Milvus/Zilliz</strong> — high performance</li>
            <li><strong>Chroma</strong> — lightweight, local</li>
            <li><strong>pgvector</strong> — PostgreSQL extension</li>
            <li><strong>Qdrant</strong> — Rust-based, fast</li>
        </ul>
    </div>
    <div class="card">
        <h4>Chunking Strategies</h4>
        <ul>
            <li><strong>Fixed size</strong> — 512/1024 tokens per chunk</li>
            <li><strong>Recursive splitter</strong> — split by separators</li>
            <li><strong>Semantic</strong> — split by meaning</li>
            <li><strong>Document-aware</strong> — respect headers/sections</li>
            <li><strong>Overlap</strong> — 10-20% overlap between chunks</li>
        </ul>
    </div>
    <div class="card">
        <h4>Retrieval Enhancements</h4>
        <ul>
            <li><strong>Hybrid search</strong> — vector + keyword (BM25)</li>
            <li><strong>Reranking</strong> — cross-encoder reranking</li>
            <li><strong>HyDE</strong> — hypothetical document embedding</li>
            <li><strong>Multi-query</strong> — rephrase query multiple ways</li>
            <li><strong>Parent-child</strong> — retrieve child, return parent</li>
        </ul>
    </div>
</div>

<h2>Contoh Implementasi RAG</h2>
<div class="code-block"><span class="kw">from</span> langchain.document_loaders <span class="kw">import</span> PyPDFLoader
<span class="kw">from</span> langchain.text_splitter <span class="kw">import</span> RecursiveCharacterTextSplitter
<span class="kw">from</span> langchain.embeddings <span class="kw">import</span> OpenAIEmbeddings
<span class="kw">from</span> langchain.vectorstores <span class="kw">import</span> Chroma
<span class="kw">from</span> langchain.chat_models <span class="kw">import</span> ChatOpenAI
<span class="kw">from</span> langchain.chains <span class="kw">import</span> RetrievalQA

<span class="cm"># 1. Load & chunk documents</span>
loader = PyPDFLoader(<span class="str">"company_docs.pdf"</span>)
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(
    chunk_size=<span class="num">1000</span>, chunk_overlap=<span class="num">200</span>
)
chunks = splitter.split_documents(docs)

<span class="cm"># 2. Create embeddings & store in vector DB</span>
embeddings = OpenAIEmbeddings(model=<span class="str">"text-embedding-3-small"</span>)
vectorstore = Chroma.from_documents(chunks, embeddings)

<span class="cm"># 3. Create RAG chain</span>
llm = ChatOpenAI(model=<span class="str">"gpt-4"</span>, temperature=<span class="num">0</span>)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={<span class="str">"k"</span>: <span class="num">5</span>}),
    return_source_documents=<span class="num">True</span>
)

<span class="cm"># 4. Query</span>
result = qa_chain({<span class="str">"query"</span>: <span class="str">"Apa kebijakan cuti perusahaan?"</span>})
<span class="kw">print</span>(result[<span class="str">"result"</span>])
<span class="kw">print</span>(result[<span class="str">"source_documents"</span>])</div>

<h2>Advanced RAG Patterns</h2>
<div class="card-grid-3">
    <div class="card">
        <h4>Agentic RAG</h4>
        <p>LLM agent yang bisa <strong>decide</strong> kapan dan bagaimana retrieve. Bisa multi-step reasoning, tool use, dan self-reflection.</p>
    </div>
    <div class="card">
        <h4>Graph RAG</h4>
        <p>Kombinasi knowledge graph + vector search. Capture <strong>relasi antar entitas</strong>, bukan hanya similarity.</p>
    </div>
    <div class="card">
        <h4>Corrective RAG (CRAG)</h4>
        <p>Evaluasi kualitas retrieval. Jika confidence rendah, <strong>refine query</strong> atau gunakan web search sebagai fallback.</p>
    </div>
</div>
`;

// ====================== OOP & SOLID ======================
sections.oop = () => `
<h1 class="section-title animate-in">OOP & SOLID Principles</h1>
<p class="section-subtitle animate-in">Object-Oriented Programming, Abstraksi, dan prinsip desain yang clean</p>

<h2>4 Pilar OOP</h2>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--accent)">1. Encapsulation</h3>
        <p>Menyembunyikan data internal dan hanya mengekspos interface yang diperlukan.</p>
        <div class="code-block"><span class="kw">public class</span> <span class="type">BankAccount</span> {
    <span class="kw">private</span> <span class="type">double</span> balance; <span class="cm">// hidden</span>

    <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="type">double</span> amount) {
        <span class="kw">if</span> (amount > <span class="num">0</span>) {
            <span class="kw">this</span>.balance += amount;
        }
    }

    <span class="kw">public double</span> <span class="fn">getBalance</span>() {
        <span class="kw">return this</span>.balance; <span class="cm">// controlled access</span>
    }
    <span class="cm">// Tidak ada setBalance() — mencegah manipulasi langsung</span>
}</div>
        <p><strong>Benefit:</strong> Data integrity, information hiding, loose coupling, easier maintenance.</p>
    </div>
    <div class="card">
        <h3 style="color:var(--green)">2. Inheritance</h3>
        <p>Class baru (child) <strong>mewarisi</strong> properti dan method dari class yang sudah ada (parent).</p>
        <div class="code-block"><span class="kw">public class</span> <span class="type">Animal</span> {
    <span class="kw">protected</span> String name;
    <span class="kw">public void</span> <span class="fn">eat</span>() {
        System.out.println(name + <span class="str">" is eating"</span>);
    }
}

<span class="kw">public class</span> <span class="type">Dog</span> <span class="kw">extends</span> <span class="type">Animal</span> {
    <span class="kw">public void</span> <span class="fn">bark</span>() {
        System.out.println(<span class="str">"Woof!"</span>);
    }
}

<span class="cm">// Dog mewarisi eat() dari Animal</span>
Dog dog = <span class="kw">new</span> Dog();
dog.eat();  <span class="cm">// ✅ inherited</span>
dog.bark(); <span class="cm">// ✅ own method</span></div>
        <p><strong>Hati-hati:</strong> Hindari deep inheritance hierarchy! Prefer composition over inheritance.</p>
    </div>
</div>

<div class="card-grid">
    <div class="card">
        <h3 style="color:var(--yellow)">3. Polymorphism</h3>
        <p>Objek berbeda merespons <strong>pesan yang sama</strong> dengan cara berbeda.</p>
        <div class="code-block"><span class="kw">public interface</span> <span class="type">Shape</span> {
    <span class="type">double</span> <span class="fn">area</span>();
}

<span class="kw">public class</span> <span class="type">Circle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">private double</span> radius;
    <span class="kw">public double</span> <span class="fn">area</span>() {
        <span class="kw">return</span> Math.PI * radius * radius;
    }
}

<span class="kw">public class</span> <span class="type">Rectangle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">private double</span> w, h;
    <span class="kw">public double</span> <span class="fn">area</span>() {
        <span class="kw">return</span> w * h;
    }
}

<span class="cm">// Polymorphism in action</span>
Shape s = <span class="kw">new</span> Circle(<span class="num">5</span>);
s.area(); <span class="cm">// → 78.54</span>
s = <span class="kw">new</span> Rectangle(<span class="num">3</span>, <span class="num">4</span>);
s.area(); <span class="cm">// → 12.0</span></div>
        <ul>
            <li><strong>Compile-time:</strong> Method overloading (same name, different params)</li>
            <li><strong>Runtime:</strong> Method overriding (subclass redefines parent method)</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--accent3)">4. Abstraction</h3>
        <p>Menyembunyikan <strong>kompleksitas implementasi</strong> dan hanya menampilkan fungionalitas esensial.</p>
        <div class="code-block"><span class="cm">// Abstract class — cannot be instantiated</span>
<span class="kw">public abstract class</span> <span class="type">Database</span> {
    <span class="cm">// Abstract method — MUST be implemented</span>
    <span class="kw">public abstract void</span> <span class="fn">connect</span>();
    <span class="kw">public abstract</span> List&lt;Row&gt; <span class="fn">query</span>(String sql);

    <span class="cm">// Concrete method — shared implementation</span>
    <span class="kw">public void</span> <span class="fn">close</span>() {
        System.out.println(<span class="str">"Connection closed"</span>);
    }
}

<span class="kw">public class</span> <span class="type">PostgresDB</span> <span class="kw">extends</span> <span class="type">Database</span> {
    <span class="kw">public void</span> <span class="fn">connect</span>() { <span class="cm">/* PostgreSQL impl */</span> }
    <span class="kw">public</span> List&lt;Row&gt; <span class="fn">query</span>(String sql) { <span class="cm">/* ... */</span> }
}

<span class="kw">public class</span> <span class="type">MongoDB</span> <span class="kw">extends</span> <span class="type">Database</span> {
    <span class="kw">public void</span> <span class="fn">connect</span>() { <span class="cm">/* MongoDB impl */</span> }
    <span class="kw">public</span> List&lt;Row&gt; <span class="fn">query</span>(String sql) { <span class="cm">/* ... */</span> }
}

<span class="cm">// User code doesn't care about implementation!</span>
Database db = <span class="kw">new</span> PostgresDB(); <span class="cm">// or MongoDB</span>
db.connect();
db.query(<span class="str">"SELECT * FROM users"</span>);</div>
    </div>
</div>

<h2>Mengapa Abstraksi Penting?</h2>
<div class="card">
    <div class="card-grid">
        <div class="card">
            <h4>Tanpa Abstraksi</h4>
            <div class="code-block"><span class="cm">// ❌ Tightly coupled — harus tahu detail semua payment</span>
<span class="kw">class</span> <span class="type">OrderService</span> {
    <span class="kw">void</span> <span class="fn">pay</span>(String method, <span class="type">double</span> amount) {
        <span class="kw">if</span> (method.equals(<span class="str">"credit_card"</span>)) {
            <span class="cm">// 50 lines of credit card logic</span>
            <span class="cm">// API call to Stripe...</span>
        } <span class="kw">else if</span> (method.equals(<span class="str">"bank_transfer"</span>)) {
            <span class="cm">// 40 lines of bank transfer logic</span>
        } <span class="kw">else if</span> (method.equals(<span class="str">"ewallet"</span>)) {
            <span class="cm">// 30 lines...</span>
        }
        <span class="cm">// Setiap payment baru = ubah class ini!</span>
    }
}</div>
        </div>
        <div class="card">
            <h4>Dengan Abstraksi</h4>
            <div class="code-block"><span class="cm">// ✅ Open/Closed — tambah payment tanpa ubah OrderService</span>
<span class="kw">interface</span> <span class="type">PaymentGateway</span> {
    <span class="kw">void</span> <span class="fn">charge</span>(<span class="type">double</span> amount);
}

<span class="kw">class</span> <span class="type">StripePayment</span> <span class="kw">implements</span> <span class="type">PaymentGateway</span> { <span class="cm">/* ... */</span> }
<span class="kw">class</span> <span class="type">BankTransfer</span> <span class="kw">implements</span> <span class="type">PaymentGateway</span> { <span class="cm">/* ... */</span> }
<span class="kw">class</span> <span class="type">GoPay</span> <span class="kw">implements</span> <span class="type">PaymentGateway</span> { <span class="cm">/* ... */</span> }

<span class="kw">class</span> <span class="type">OrderService</span> {
    <span class="kw">private</span> PaymentGateway gateway; <span class="cm">// abstraction!</span>
    <span class="kw">void</span> <span class="fn">pay</span>(<span class="type">double</span> amount) {
        gateway.charge(amount); <span class="cm">// doesn't care HOW</span>
    }
}</div>
        </div>
    </div>
    <div class="success-box">
        <strong>Abstraksi memungkinkan:</strong> Testability (mock), Flexibility (swap implementation), Separation of Concerns, Team parallelism (implementasi terpisah), Plugin architecture.
    </div>
</div>

<h2>SOLID Principles (Detail)</h2>

<div class="card">
    <h3><span class="badge badge-blue">S</span> Single Responsibility Principle</h3>
    <p>"A class should have <strong>one, and only one, reason to change</strong>." — Robert C. Martin</p>
    <div class="card-grid">
        <div class="card" style="border-color:var(--red)">
            <h4>Violating SRP</h4>
            <div class="code-block"><span class="kw">class</span> <span class="type">UserService</span> {
    <span class="kw">void</span> <span class="fn">createUser</span>(user) { <span class="cm">/* save to DB */</span> }
    <span class="kw">void</span> <span class="fn">sendEmail</span>(user) { <span class="cm">/* send welcome email */</span> }
    String <span class="fn">generateReport</span>() { <span class="cm">/* PDF report */</span> }
    <span class="kw">void</span> <span class="fn">logAction</span>(msg) { <span class="cm">/* write to log */</span> }
}
<span class="cm">// 4 reasons to change! User logic, email, report, logging</span></div>
        </div>
        <div class="card" style="border-color:var(--green)">
            <h4>Following SRP</h4>
            <div class="code-block"><span class="kw">class</span> <span class="type">UserRepository</span> { <span class="cm">/* DB operations */</span> }
<span class="kw">class</span> <span class="type">EmailService</span> { <span class="cm">/* email sending */</span> }
<span class="kw">class</span> <span class="type">ReportGenerator</span> { <span class="cm">/* report creation */</span> }
<span class="kw">class</span> <span class="type">Logger</span> { <span class="cm">/* logging */</span> }

<span class="kw">class</span> <span class="type">UserService</span> {
    <span class="cm">// Only orchestrates user operations</span>
    UserRepository repo;
    EmailService email;
    <span class="kw">void</span> <span class="fn">createUser</span>(user) {
        repo.save(user);
        email.sendWelcome(user);
    }
}</div>
        </div>
    </div>
</div>

<div class="card">
    <h3><span class="badge badge-green">O</span> Open/Closed Principle</h3>
    <p>"Software entities should be <strong>open for extension, but closed for modification</strong>."</p>
    <div class="code-block"><span class="cm">// ✅ Tambah discount baru tanpa mengubah kode yang ada</span>
<span class="kw">interface</span> <span class="type">DiscountStrategy</span> {
    <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price);
}

<span class="kw">class</span> <span class="type">RegularDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price) { <span class="kw">return</span> price * <span class="num">0.9</span>; }
}
<span class="kw">class</span> <span class="type">VIPDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price) { <span class="kw">return</span> price * <span class="num">0.7</span>; }
}
<span class="cm">// Tambah SeasonalDiscount? Just add new class! No modification needed.</span></div>
</div>

<div class="card">
    <h3><span class="badge badge-yellow">L</span> Liskov Substitution Principle</h3>
    <p>"Objects of a superclass should be replaceable with objects of its subclass <strong>without breaking</strong> the application."</p>
    <div class="card-grid">
        <div class="card" style="border-color:var(--red)">
            <h4>Violating LSP</h4>
            <div class="code-block"><span class="kw">class</span> <span class="type">Rectangle</span> {
    <span class="kw">void</span> setWidth(<span class="type">int</span> w) { width = w; }
    <span class="kw">void</span> setHeight(<span class="type">int</span> h) { height = h; }
}
<span class="kw">class</span> <span class="type">Square</span> <span class="kw">extends</span> <span class="type">Rectangle</span> {
    <span class="kw">void</span> setWidth(<span class="type">int</span> w) { width = w; height = w; }
    <span class="kw">void</span> setHeight(<span class="type">int</span> h) { width = h; height = h; }
}
<span class="cm">// rect.setWidth(5); rect.setHeight(3);</span>
<span class="cm">// Expected area: 15, Square gives: 9 — BROKEN!</span></div>
        </div>
        <div class="card" style="border-color:var(--green)">
            <h4>Following LSP</h4>
            <div class="code-block"><span class="kw">interface</span> <span class="type">Shape</span> {
    <span class="type">double</span> area();
}
<span class="kw">class</span> <span class="type">Rectangle</span> <span class="kw">implements</span> <span class="type">Shape</span> { <span class="cm">/* ... */</span> }
<span class="kw">class</span> <span class="type">Square</span> <span class="kw">implements</span> <span class="type">Shape</span> { <span class="cm">/* ... */</span> }
<span class="cm">// Keduanya independent, tidak ada LSP violation</span></div>
        </div>
    </div>
</div>

<div class="card">
    <h3><span class="badge badge-orange">I</span> Interface Segregation Principle</h3>
    <p>"Clients should not be forced to depend on methods they do not use."</p>
    <div class="code-block"><span class="cm">// ❌ Fat Interface</span>
<span class="kw">interface</span> <span class="type">Worker</span> {
    <span class="kw">void</span> work();
    <span class="kw">void</span> eat();      <span class="cm">// Robot can't eat!</span>
    <span class="kw">void</span> sleep();    <span class="cm">// Robot can't sleep!</span>
}

<span class="cm">// ✅ Segregated Interfaces</span>
<span class="kw">interface</span> <span class="type">Workable</span> { <span class="kw">void</span> work(); }
<span class="kw">interface</span> <span class="type">Feedable</span> { <span class="kw">void</span> eat(); }
<span class="kw">interface</span> <span class="type">Sleepable</span> { <span class="kw">void</span> sleep(); }

<span class="kw">class</span> <span class="type">Human</span> <span class="kw">implements</span> Workable, Feedable, Sleepable { <span class="cm">/* all 3 */</span> }
<span class="kw">class</span> <span class="type">Robot</span> <span class="kw">implements</span> Workable { <span class="cm">/* only work! */</span> }</div>
</div>

<div class="card">
    <h3><span class="badge badge-red">D</span> Dependency Inversion Principle</h3>
    <p>"High-level modules should not depend on low-level modules. Both should depend on <strong>abstractions</strong>."</p>
    <div class="code-block"><span class="cm">// ❌ High-level depends on low-level</span>
<span class="kw">class</span> <span class="type">OrderService</span> {
    <span class="kw">private</span> MySQLDatabase db = <span class="kw">new</span> MySQLDatabase(); <span class="cm">// concrete!</span>
}

<span class="cm">// ✅ Both depend on abstraction</span>
<span class="kw">interface</span> <span class="type">Database</span> {
    <span class="kw">void</span> save(Object entity);
}

<span class="kw">class</span> <span class="type">OrderService</span> {
    <span class="kw">private</span> Database db; <span class="cm">// abstraction!</span>
    OrderService(Database db) { <span class="kw">this</span>.db = db; } <span class="cm">// injected</span>
}

<span class="cm">// Can use MySQL, PostgreSQL, MongoDB — OrderService doesn't care!</span></div>
</div>

<h2>OOP in Different Languages</h2>
<div class="table-wrapper">
<table>
<tr><th>Feature</th><th>Java</th><th>Python</th><th>Go</th><th>Rust</th></tr>
<tr><td>Classes</td><td>Yes (class)</td><td>Yes (class)</td><td>No (struct)</td><td>No (struct)</td></tr>
<tr><td>Inheritance</td><td>extends</td><td>class B(A):</td><td>Embedding</td><td>No (use traits)</td></tr>
<tr><td>Interface</td><td>interface</td><td>ABC</td><td>interface (implicit)</td><td>trait</td></tr>
<tr><td>Encapsulation</td><td>private/public</td><td>Convention (_)</td><td>Exported/unexported</td><td>pub/private</td></tr>
<tr><td>Polymorphism</td><td>Override</td><td>Duck typing</td><td>Interface</td><td>Trait objects</td></tr>
<tr><td>Multiple Inherit</td><td>No (interfaces)</td><td>Yes (MRO)</td><td>Multiple embed</td><td>Multiple traits</td></tr>
</table>
</div>

<h2>Design Patterns (yang Sering Digunakan)</h2>
<div class="card-grid-3">
    <div class="card">
        <h4>Strategy Pattern</h4>
        <p>Encapsulate algorithm dalam class terpisah. Swap algorithm at runtime.</p>
        <p><em>Contoh: Sorting strategies, payment methods, compression algorithms</em></p>
    </div>
    <div class="card">
        <h4>Observer Pattern</h4>
        <p>Object (subject) notify semua listener saat state berubah.</p>
        <p><em>Contoh: Event listeners, pub/sub, reactive programming</em></p>
    </div>
    <div class="card">
        <h4>Factory Pattern</h4>
        <p>Delegasi pembuatan object ke factory method/class.</p>
        <p><em>Contoh: DB connection factory, logger factory</em></p>
    </div>
    <div class="card">
        <h4>Builder Pattern</h4>
        <p>Konstruksi object kompleks step-by-step.</p>
        <p><em>Contoh: QueryBuilder, HttpRequest.Builder</em></p>
    </div>
    <div class="card">
        <h4>Repository Pattern</h4>
        <p>Abstraksi data access layer. Domain tidak tahu detail persistence.</p>
        <p><em>Contoh: UserRepository interface + JPA/MongoDB impl</em></p>
    </div>
    <div class="card">
        <h4>Dependency Injection</h4>
        <p>Supply dependencies dari luar, bukan buat di dalam. Inversion of Control.</p>
        <p><em>Contoh: Spring @Autowired, Go wire, constructor injection</em></p>
    </div>
</div>

<h2>Composition vs Inheritance</h2>
<div class="card">
    <div class="warn-box">
        <strong>"Favor composition over inheritance"</strong> — Gang of Four. Inheritance menciptakan tight coupling. Composition lebih flexible.
    </div>
    <div class="card-grid">
        <div class="card" style="border-color:var(--red)">
            <h4>Inheritance (fragile)</h4>
            <div class="code-block"><span class="kw">class</span> <span class="type">Bird</span> { fly() {} }
<span class="kw">class</span> <span class="type">Penguin</span> <span class="kw">extends</span> <span class="type">Bird</span> {
    fly() { <span class="kw">throw</span> <span class="str">"Can't fly!"</span>; }
    <span class="cm">// Violates LSP!</span>
}</div>
        </div>
        <div class="card" style="border-color:var(--green)">
            <h4>Composition (flexible)</h4>
            <div class="code-block"><span class="kw">interface</span> <span class="type">Flyable</span> { fly(); }
<span class="kw">interface</span> <span class="type">Swimmable</span> { swim(); }

<span class="kw">class</span> <span class="type">Eagle</span> <span class="kw">implements</span> Flyable { <span class="cm">/* ... */</span> }
<span class="kw">class</span> <span class="type">Penguin</span> <span class="kw">implements</span> Swimmable { <span class="cm">/* ... */</span> }
<span class="kw">class</span> <span class="type">Duck</span> <span class="kw">implements</span> Flyable, Swimmable { <span class="cm">/* both! */</span> }</div>
        </div>
    </div>
</div>
`;

// ====================== REFERENCES ======================
sections.references = () => `
<h1 class="section-title animate-in">Referensi Buku & Paper</h1>
<p class="section-subtitle animate-in">Sumber utama yang digunakan dalam materi ini</p>

<h2>Teori Komputasi & Automata</h2>
<div class="card">
    <ul>
        <li><strong>Sipser, M. (2012).</strong> <em>Introduction to the Theory of Computation</em>, 3rd Edition. Cengage Learning. — Buku standar untuk teori komputasi, automata, bahasa formal, dan complexity theory.</li>
        <li><strong>Hopcroft, J.E., Motwani, R., & Ullman, J.D. (2006).</strong> <em>Introduction to Automata Theory, Languages, and Computation</em>, 3rd Edition. Pearson. — Klasik untuk DFA, NFA, PDA, Turing Machine.</li>
        <li><strong>Turing, A. (1936).</strong> "On Computable Numbers, with an Application to the Entscheidungsproblem." <em>Proceedings of the London Mathematical Society</em>. — Paper original Turing Machine.</li>
        <li><strong>Chomsky, N. (1956).</strong> "Three models for the description of language." <em>IRE Transactions on Information Theory</em>. — Hierarki Chomsky.</li>
    </ul>
</div>

<h2>Complexity Theory</h2>
<div class="card">
    <ul>
        <li><strong>Arora, S. & Barak, B. (2009).</strong> <em>Computational Complexity: A Modern Approach</em>. Cambridge University Press. — Referensi komprehensif untuk P, NP, NP-Complete.</li>
        <li><strong>Cook, S.A. (1971).</strong> "The complexity of theorem-proving procedures." <em>Proceedings of the 3rd ACM STOC</em>. — Paper yang membuktikan SAT adalah NP-Complete (Cook-Levin theorem).</li>
        <li><strong>Karp, R.M. (1972).</strong> "Reducibility Among Combinatorial Problems." — 21 NP-Complete problems klasik.</li>
        <li><strong>Garey, M.R. & Johnson, D.S. (1979).</strong> <em>Computers and Intractability: A Guide to the Theory of NP-Completeness</em>. W.H. Freeman.</li>
    </ul>
</div>

<h2>Algoritma & Struktur Data</h2>
<div class="card">
    <ul>
        <li><strong>Cormen, T.H., Leiserson, C.E., Rivest, R.L., & Stein, C. (2022).</strong> <em>Introduction to Algorithms (CLRS)</em>, 4th Edition. MIT Press. — "The Bible" of algorithms.</li>
        <li><strong>Sedgewick, R. & Wayne, K. (2011).</strong> <em>Algorithms</em>, 4th Edition. Addison-Wesley.</li>
        <li><strong>Kleinberg, J. & Tardos, E. (2005).</strong> <em>Algorithm Design</em>. Pearson. — Greedy, D&C, DP, Network Flow.</li>
        <li><strong>Skiena, S.S. (2020).</strong> <em>The Algorithm Design Manual</em>, 3rd Edition. Springer.</li>
        <li><strong>Knuth, D.E. (1997).</strong> <em>The Art of Computer Programming</em>, Volumes 1-4A. Addison-Wesley.</li>
        <li><strong>Kadane, J. (1984).</strong> Maximum subarray problem — basis Kadane's algorithm.</li>
        <li><strong>Dijkstra, E.W. (1959).</strong> "A note on two problems in connexion with graphs." <em>Numerische Mathematik</em>.</li>
    </ul>
</div>

<h2>OOP & Design Patterns</h2>
<div class="card">
    <ul>
        <li><strong>Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994).</strong> <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley. — "Gang of Four" book.</li>
        <li><strong>Martin, R.C. (2017).</strong> <em>Clean Architecture: A Craftsman's Guide to Software Structure and Design</em>. Pearson.</li>
        <li><strong>Martin, R.C. (2008).</strong> <em>Clean Code: A Handbook of Agile Software Craftsmanship</em>. Pearson.</li>
        <li><strong>Martin, R.C. (2002).</strong> "The SOLID Principles of Object-Oriented Design." — Formalisasi SOLID.</li>
        <li><strong>Fowler, M. (2018).</strong> <em>Refactoring: Improving the Design of Existing Code</em>, 2nd Edition. Addison-Wesley.</li>
        <li><strong>Evans, E. (2003).</strong> <em>Domain-Driven Design: Tackling Complexity in the Heart of Software</em>. Addison-Wesley.</li>
        <li><strong>Freeman, E. & Robson, E. (2020).</strong> <em>Head First Design Patterns</em>, 2nd Edition. O'Reilly.</li>
    </ul>
</div>

<h2>Bahasa Pemrograman</h2>
<div class="card">
    <ul>
        <li><strong>Kernighan, B.W. & Ritchie, D.M. (1988).</strong> <em>The C Programming Language</em>, 2nd Edition. Prentice Hall. — "K&R" — buku klasik C.</li>
        <li><strong>Bloch, J. (2018).</strong> <em>Effective Java</em>, 3rd Edition. Addison-Wesley.</li>
        <li><strong>Donovan, A.A. & Kernighan, B.W. (2015).</strong> <em>The Go Programming Language</em>. Addison-Wesley.</li>
        <li><strong>Klabnik, S. & Nichols, C. (2023).</strong> <em>The Rust Programming Language</em>, 2nd Edition. No Starch Press.</li>
        <li><strong>Ramalho, L. (2022).</strong> <em>Fluent Python</em>, 2nd Edition. O'Reilly.</li>
        <li><strong>Koenig, D. et al. (2015).</strong> <em>Groovy in Action</em>, 2nd Edition. Manning.</li>
    </ul>
</div>

<h2>Software Architecture & Microservices</h2>
<div class="card">
    <ul>
        <li><strong>Newman, S. (2021).</strong> <em>Building Microservices</em>, 2nd Edition. O'Reilly. — Referensi utama arsitektur microservices.</li>
        <li><strong>Richards, M. & Ford, N. (2020).</strong> <em>Fundamentals of Software Architecture</em>. O'Reilly.</li>
        <li><strong>Kleppmann, M. (2017).</strong> <em>Designing Data-Intensive Applications</em>. O'Reilly. — Distributed systems, Kafka, consistency.</li>
        <li><strong>Richardson, C. (2018).</strong> <em>Microservices Patterns</em>. Manning. — Orchestration vs choreography, saga pattern.</li>
        <li><strong>Fowler, M. (2002).</strong> <em>Patterns of Enterprise Application Architecture</em>. Addison-Wesley.</li>
        <li><strong>Kreps, J. (2014).</strong> "Kafka: a Distributed Messaging System for Log Processing." — Apache Kafka paper.</li>
        <li><strong>Videla, A. & Williams, J.J.W. (2012).</strong> <em>RabbitMQ in Action</em>. Manning.</li>
    </ul>
</div>

<h2>Networking & Protocols</h2>
<div class="card">
    <ul>
        <li><strong>Kurose, J.F. & Ross, K.W. (2021).</strong> <em>Computer Networking: A Top-Down Approach</em>, 8th Edition. Pearson. — Buku standar networking.</li>
        <li><strong>Tanenbaum, A.S. & Wetherall, D. (2021).</strong> <em>Computer Networks</em>, 6th Edition. Pearson.</li>
        <li><strong>Fielding, R.T. (2000).</strong> "Architectural Styles and the Design of Network-based Software Architectures." Doctoral dissertation, UC Irvine. — REST architecture.</li>
        <li><strong>gRPC Authors (2016).</strong> "gRPC: A high-performance, open-source universal RPC framework." — gRPC documentation.</li>
        <li><strong>Iyengar, J. & Thomson, M. (2021).</strong> RFC 9000: "QUIC: A UDP-Based Multiplexed and Secure Transport." IETF.</li>
        <li><strong>Belshe, M. et al. (2015).</strong> RFC 7540: "Hypertext Transfer Protocol Version 2 (HTTP/2)." IETF.</li>
    </ul>
</div>

<h2>Security & Cryptography</h2>
<div class="card">
    <ul>
        <li><strong>Stallings, W. (2022).</strong> <em>Cryptography and Network Security: Principles and Practice</em>, 8th Edition. Pearson.</li>
        <li><strong>Schneier, B. (2015).</strong> <em>Applied Cryptography</em>, 20th Anniversary Edition. Wiley.</li>
        <li><strong>Ferguson, N., Schneier, B., & Kohno, T. (2010).</strong> <em>Cryptography Engineering</em>. Wiley.</li>
        <li><strong>McGraw, G. (2006).</strong> <em>Software Security: Building Security In</em>. Addison-Wesley. — SSDLC.</li>
        <li><strong>OWASP Foundation (2021).</strong> "OWASP Top 10:2021." — owasp.org</li>
        <li><strong>Rescorla, E. (2018).</strong> RFC 8446: "The Transport Layer Security (TLS) Protocol Version 1.3." IETF.</li>
        <li><strong>Jones, M. et al. (2015).</strong> RFC 7519: "JSON Web Token (JWT)." IETF.</li>
        <li><strong>Rivest, R.L., Shamir, A., & Adleman, L. (1978).</strong> "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems." <em>Communications of the ACM</em>. — Paper original RSA.</li>
        <li><strong>Diffie, W. & Hellman, M. (1976).</strong> "New Directions in Cryptography." <em>IEEE Transactions on Information Theory</em>. — Diffie-Hellman key exchange.</li>
    </ul>
</div>

<h2>ISO & Regulasi</h2>
<div class="card">
    <ul>
        <li><strong>ISO/IEC 27001:2022.</strong> <em>Information security, cybersecurity and privacy protection — Information security management systems — Requirements</em>. ISO.</li>
        <li><strong>ISO/IEC 27701:2019.</strong> <em>Extension to ISO/IEC 27001 and ISO/IEC 27002 for privacy information management</em>. ISO.</li>
        <li><strong>ISO/IEC 27002:2022.</strong> <em>Information security controls</em>. ISO.</li>
        <li><strong>Undang-Undang Nomor 27 Tahun 2022</strong> tentang Pelindungan Data Pribadi. Republik Indonesia.</li>
        <li><strong>GDPR — Regulation (EU) 2016/679.</strong> General Data Protection Regulation. European Parliament.</li>
    </ul>
</div>

<h2>Frameworks & Modern Development</h2>
<div class="card">
    <ul>
        <li><strong>Next.js Documentation.</strong> Vercel. — nextjs.org/docs</li>
        <li><strong>Walls, C. (2022).</strong> <em>Spring in Action</em>, 6th Edition. Manning.</li>
        <li><strong>Quarkus Documentation.</strong> Red Hat. — quarkus.io/guides</li>
        <li><strong>Chang, W. (2022).</strong> <em>Go Web Programming</em>. Manning.</li>
        <li><strong>FastAPI Documentation.</strong> Tiangolo. — fastapi.tiangolo.com</li>
    </ul>
</div>

<h2>RAG & AI</h2>
<div class="card">
    <ul>
        <li><strong>Lewis, P. et al. (2020).</strong> "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." <em>NeurIPS 2020</em>. — Paper original RAG.</li>
        <li><strong>Gao, Y. et al. (2024).</strong> "Retrieval-Augmented Generation for Large Language Models: A Survey." <em>arXiv:2312.10997</em>.</li>
        <li><strong>Yan, S. et al. (2024).</strong> "Corrective Retrieval Augmented Generation (CRAG)." <em>arXiv:2401.15884</em>.</li>
        <li><strong>Microsoft Research (2024).</strong> "GraphRAG: Unlocking LLM discovery on narrative private data." — Graph-based RAG.</li>
        <li><strong>LangChain Documentation.</strong> — langchain.com/docs</li>
        <li><strong>LlamaIndex Documentation.</strong> — llamaindex.ai/docs</li>
        <li><strong>Johnson, J. et al. (2019).</strong> "Billion-scale similarity search with GPUs." <em>IEEE Transactions on Big Data</em>. — FAISS (Facebook AI Similarity Search).</li>
    </ul>
</div>
`;

// ============================================================
// ANIMATIONS & INTERACTIVE ELEMENTS
// ============================================================

function initAutomataAnimations() {
    const dpr = window.devicePixelRatio || 1;

    // ============ Shared drawing helpers ============
    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr; c.height = h * dpr;
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }
    function drawState(ctx, x, y, r, label, active, accept) {
        // Glow effect when active
        if (active) {
            ctx.beginPath(); ctx.arc(x, y, r + 6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(56,189,248,0.08)'; ctx.fill();
        }
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = active ? 'rgba(56,189,248,0.25)' : '#1e293b';
        ctx.fill();
        ctx.strokeStyle = accept ? '#34d399' : active ? '#38bdf8' : '#475569';
        ctx.lineWidth = active ? 3 : 2;
        ctx.stroke();
        if (accept) {
            ctx.beginPath(); ctx.arc(x, y, r - 5, 0, Math.PI * 2);
            ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1.5; ctx.stroke();
        }
        ctx.fillStyle = active ? '#38bdf8' : '#e2e8f0';
        ctx.font = (active ? 'bold ' : '') + '14px Inter';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(label, x, y);
    }
    function drawArrow(ctx, x1, y1, x2, y2, label, active) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const r = 30;
        const sx = x1 + r * Math.cos(angle), sy = y1 + r * Math.sin(angle);
        const ex = x2 - r * Math.cos(angle), ey = y2 - r * Math.sin(angle);
        ctx.strokeStyle = active ? '#38bdf8' : '#475569';
        ctx.lineWidth = active ? 2.5 : 1.5;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
        // Arrowhead
        ctx.fillStyle = active ? '#38bdf8' : '#475569';
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(ex - 10 * Math.cos(angle - 0.35), ey - 10 * Math.sin(angle - 0.35));
        ctx.lineTo(ex - 10 * Math.cos(angle + 0.35), ey - 10 * Math.sin(angle + 0.35));
        ctx.fill();
        // Label
        const mx = (sx + ex) / 2, my = (sy + ey) / 2 - 12;
        ctx.fillStyle = active ? '#38bdf8' : '#94a3b8';
        ctx.font = (active ? 'bold ' : '') + '13px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText(label, mx, my);
    }
    function drawCurveArrow(ctx, x1, y1, x2, y2, curve, label, active) {
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + curve;
        ctx.strokeStyle = active ? '#38bdf8' : '#475569';
        ctx.lineWidth = active ? 2.5 : 1.5;
        ctx.beginPath(); ctx.moveTo(x1 + 30, y1); ctx.quadraticCurveTo(mx, my, x2 - 30, y2); ctx.stroke();
        const angle = Math.atan2(y2 - my, x2 - 30 - mx);
        ctx.fillStyle = active ? '#38bdf8' : '#475569';
        ctx.beginPath();
        ctx.moveTo(x2 - 30, y2);
        ctx.lineTo(x2 - 30 - 10 * Math.cos(angle - 0.3), y2 - 10 * Math.sin(angle - 0.3));
        ctx.lineTo(x2 - 30 - 10 * Math.cos(angle + 0.3), y2 - 10 * Math.sin(angle + 0.3));
        ctx.fill();
        ctx.fillStyle = active ? '#38bdf8' : '#94a3b8';
        ctx.font = (active ? 'bold ' : '') + '13px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText(label, mx, my + (curve > 0 ? 18 : -10));
    }
    function drawSelfLoop(ctx, x, y, angle, label, active) {
        ctx.strokeStyle = active ? '#38bdf8' : '#475569';
        ctx.lineWidth = active ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(x + Math.cos(angle) * 40, y + Math.sin(angle) * 40, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = active ? '#38bdf8' : '#94a3b8';
        ctx.font = (active ? 'bold ' : '') + '13px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + Math.cos(angle) * 66, y + Math.sin(angle) * 66 + 5);
    }
    function drawStartArrow(ctx, x, y) {
        ctx.strokeStyle = '#475569'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(x - 50, y); ctx.lineTo(x - 30, y); ctx.stroke();
        ctx.fillStyle = '#475569'; ctx.beginPath();
        ctx.moveTo(x - 30, y); ctx.lineTo(x - 40, y - 5); ctx.lineTo(x - 40, y + 5); ctx.fill();
        ctx.fillStyle = '#94a3b8'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
        ctx.fillText('start', x - 50, y - 10);
    }
    function drawInputBar(ctx, inputStr, pos, x, y) {
        ctx.font = '15px JetBrains Mono'; ctx.textAlign = 'left';
        ctx.fillStyle = '#94a3b8'; ctx.font = '10px Inter';
        ctx.fillText('Input:', x - 5, y - 14);
        for (let i = 0; i < inputStr.length; i++) {
            const cx = x + i * 26;
            if (i === pos) {
                ctx.fillStyle = 'rgba(56,189,248,0.15)';
                ctx.fillRect(cx - 3, y - 12, 22, 22);
                ctx.fillStyle = '#38bdf8'; ctx.font = 'bold 16px JetBrains Mono';
            } else {
                ctx.fillStyle = i < pos ? '#334155' : '#94a3b8';
                ctx.font = '15px JetBrains Mono';
            }
            ctx.fillText(inputStr[i], cx, y + 5);
        }
    }
    function drawStepInfo(ctx, text, x, y) {
        ctx.fillStyle = '#94a3b8'; ctx.font = '11px Inter'; ctx.textAlign = 'left';
        ctx.fillText(text, x, y);
    }

    // ============ DFA Animation ============
    const dfa = setupCanvas('dfa-canvas', 700, 300);
    if (!dfa) return;
    const { ctx } = dfa;
    const dfaStates = [
        { x: 140, y: 165, label: 'q₀', accept: false },
        { x: 350, y: 165, label: 'q₁', accept: false },
        { x: 560, y: 165, label: 'q₂', accept: true }
    ];
    let dfaAnimating = false;

    function drawDFA(hl = -1, inputStr = '', pos = -1, transInfo = '') {
        ctx.clearRect(0, 0, 700, 300);
        // Transitions
        const at = (from, to, sym) => hl >= 0 && transInfo === `${from}-${sym}`;
        drawSelfLoop(ctx, 140, 165, -Math.PI / 2, '1', at(0, 0, '1'));
        drawArrow(ctx, 140, 165, 350, 165, '0', at(0, 1, '0'));
        drawSelfLoop(ctx, 350, 165, -Math.PI / 2, '0', at(1, 1, '0'));
        drawArrow(ctx, 350, 165, 560, 165, '1', at(1, 2, '1'));
        drawCurveArrow(ctx, 560, 165, 350, 165, -55, '0', at(2, 1, '0'));
        drawCurveArrow(ctx, 560, 165, 140, 165, 55, '1', at(2, 0, '1'));
        // Start arrow
        drawStartArrow(ctx, 140, 165);
        // States
        dfaStates.forEach((s, i) => drawState(ctx, s.x, s.y, 30, s.label, i === hl, s.accept));
        // Input bar
        if (inputStr) drawInputBar(ctx, inputStr, pos, 220, 38);
        // Step info
        if (transInfo && hl >= 0) drawStepInfo(ctx, `→ δ(${dfaStates[parseInt(transInfo[0])].label}, ${transInfo[2]}) = ${dfaStates[hl].label}`, 220, 280);
    }
    const dfaTable = { 0: { '0': 1, '1': 0 }, 1: { '0': 1, '1': 2 }, 2: { '0': 1, '1': 0 } };

    async function runDFA() {
        if (dfaAnimating) return; dfaAnimating = true;
        const input = document.getElementById('dfa-input').value;
        const result = document.getElementById('dfa-result');
        result.textContent = 'Running...'; result.style.color = '#94a3b8';
        let state = 0;
        drawDFA(state, input, 0, '');
        await sleep(600);
        for (let i = 0; i < input.length; i++) {
            const prev = state; const sym = input[i];
            state = dfaTable[state]?.[sym] ?? state;
            drawDFA(state, input, i + 1, `${prev}-${sym}`);
            await sleep(700);
        }
        const accepted = dfaStates[state].accept;
        result.textContent = accepted ? 'ACCEPTED ✓ (ends with "01")' : 'REJECTED ✗ (does not end with "01")';
        result.style.color = accepted ? '#34d399' : '#f87171';
        dfaAnimating = false;
    }
    document.getElementById('dfa-run')?.addEventListener('click', runDFA);
    document.getElementById('dfa-reset')?.addEventListener('click', () => {
        document.getElementById('dfa-result').textContent = ''; drawDFA(0);
    });
    drawDFA(0);

    // ============ NFA Animation ============
    const nfa = setupCanvas('nfa-canvas', 700, 300);
    if (!nfa) { initTMAnimation(dpr); return; }
    const nfaCtx = nfa.ctx;
    const nfaStates = [
        { x: 140, y: 165, label: 'q₀', accept: false },
        { x: 350, y: 165, label: 'q₁', accept: false },
        { x: 560, y: 165, label: 'q₂', accept: true }
    ];
    // NFA: accepts strings containing "11"
    // q0 --0--> q0, q0 --1--> q0, q0 --1--> q1
    // q1 --1--> q2
    // q2 --0,1--> q2
    let nfaAnimating = false;
    function getNFANext(stateSet, sym) {
        const next = new Set();
        for (const s of stateSet) {
            if (s === 0) { if (sym === '0') next.add(0); if (sym === '1') { next.add(0); next.add(1); } }
            if (s === 1) { if (sym === '1') next.add(2); }
            if (s === 2) { next.add(2); }
        }
        return next;
    }
    function drawNFA(activeSet, inputStr = '', pos = -1) {
        nfaCtx.clearRect(0, 0, 700, 300);
        // Transitions
        drawSelfLoop(nfaCtx, 140, 165, -Math.PI / 2, '0,1', activeSet.has(0));
        drawArrow(nfaCtx, 140, 165, 350, 165, '1', activeSet.has(0));
        drawArrow(nfaCtx, 350, 165, 560, 165, '1', activeSet.has(1));
        drawSelfLoop(nfaCtx, 560, 165, -Math.PI / 2, '0,1', activeSet.has(2));
        drawStartArrow(nfaCtx, 140, 165);
        // States
        nfaStates.forEach((s, i) => drawState(nfaCtx, s.x, s.y, 30, s.label, activeSet.has(i), s.accept));
        // Active states label
        const activeLabels = [...activeSet].map(i => nfaStates[i].label).join(', ');
        nfaCtx.fillStyle = '#38bdf8'; nfaCtx.font = '12px JetBrains Mono'; nfaCtx.textAlign = 'left';
        nfaCtx.fillText('Active: {' + activeLabels + '}', 15, 280);
        // Nondeterminism indicator
        if (activeSet.size > 1) {
            nfaCtx.fillStyle = 'rgba(167,139,250,0.8)'; nfaCtx.font = 'bold 11px Inter';
            nfaCtx.fillText('⚡ Nondeterministic — multiple states active!', 350, 280);
        }
        if (inputStr) drawInputBar(nfaCtx, inputStr, pos, 220, 38);
    }
    async function runNFA() {
        if (nfaAnimating) return; nfaAnimating = true;
        const input = document.getElementById('nfa-input').value;
        const result = document.getElementById('nfa-result');
        result.textContent = 'Running...'; result.style.color = '#94a3b8';
        let current = new Set([0]);
        drawNFA(current, input, 0);
        await sleep(600);
        for (let i = 0; i < input.length; i++) {
            current = getNFANext(current, input[i]);
            drawNFA(current, input, i + 1);
            await sleep(700);
        }
        const accepted = current.has(2);
        result.textContent = accepted ? 'ACCEPTED ✓ (contains "11")' : 'REJECTED ✗ (no "11" found)';
        result.style.color = accepted ? '#34d399' : '#f87171';
        nfaAnimating = false;
    }
    document.getElementById('nfa-run')?.addEventListener('click', runNFA);
    document.getElementById('nfa-reset')?.addEventListener('click', () => {
        document.getElementById('nfa-result').textContent = ''; drawNFA(new Set([0]));
    });
    drawNFA(new Set([0]));

    // ============ PDA Animation ============
    const pda = setupCanvas('pda-canvas', 700, 300);
    if (pda) {
        const pdaCtx = pda.ctx;
        const pdaStates = [
            { x: 100, y: 150, label: 'q₀', accept: false },
            { x: 300, y: 150, label: 'q₁', accept: false },
            { x: 500, y: 150, label: 'q_acc', accept: true }
        ];
        let pdaAnimating = false;
        function drawPDA(hl, stack, inputStr = '', pos = -1, stepText = '') {
            pdaCtx.clearRect(0, 0, 700, 300);
            // Transitions
            drawSelfLoop(pdaCtx, 100, 150, -Math.PI / 2, 'a, push A', hl === 0 && pos >= 0);
            drawArrow(pdaCtx, 100, 150, 300, 150, 'b, pop A', hl === 1 || (hl === 0 && pos > 0));
            drawSelfLoop(pdaCtx, 300, 150, -Math.PI / 2, 'b, pop A', hl === 1);
            drawArrow(pdaCtx, 300, 150, 500, 150, 'ε, Z₀→accept', hl === 2);
            drawStartArrow(pdaCtx, 100, 150);
            pdaStates.forEach((s, i) => drawState(pdaCtx, s.x, s.y, 30, s.label, i === hl, s.accept));
            // Stack visualization
            pdaCtx.fillStyle = '#94a3b8'; pdaCtx.font = 'bold 11px Inter'; pdaCtx.textAlign = 'center';
            pdaCtx.fillText('STACK', 640, 40);
            const stackH = 28;
            for (let i = 0; i < stack.length; i++) {
                const sy = 50 + i * stackH;
                pdaCtx.fillStyle = i === 0 ? 'rgba(56,189,248,0.15)' : '#1e293b';
                pdaCtx.fillRect(610, sy, 60, stackH - 2);
                pdaCtx.strokeStyle = i === 0 ? '#38bdf8' : '#334155';
                pdaCtx.lineWidth = i === 0 ? 2 : 1;
                pdaCtx.strokeRect(610, sy, 60, stackH - 2);
                pdaCtx.fillStyle = stack[i] === 'Z₀' ? '#fbbf24' : '#38bdf8';
                pdaCtx.font = 'bold 14px JetBrains Mono'; pdaCtx.textAlign = 'center'; pdaCtx.textBaseline = 'middle';
                pdaCtx.fillText(stack[i], 640, sy + stackH / 2 - 1);
            }
            if (stack.length === 0) {
                pdaCtx.fillStyle = '#475569'; pdaCtx.font = '11px Inter'; pdaCtx.textAlign = 'center';
                pdaCtx.fillText('(empty)', 640, 70);
            }
            pdaCtx.fillStyle = '#475569'; pdaCtx.font = '9px Inter'; pdaCtx.textAlign = 'center';
            pdaCtx.fillText('← top', 640, 46);
            if (inputStr) drawInputBar(pdaCtx, inputStr, pos, 160, 38);
            if (stepText) drawStepInfo(pdaCtx, stepText, 15, 280);
        }
        async function runPDA() {
            if (pdaAnimating) return; pdaAnimating = true;
            const input = document.getElementById('pda-input').value;
            const result = document.getElementById('pda-result');
            result.textContent = 'Running...'; result.style.color = '#94a3b8';
            let stack = ['Z₀'], state = 0, error = false;
            drawPDA(0, stack, input, 0, 'Start: state=q₀, stack=[Z₀]');
            await sleep(700);
            for (let i = 0; i < input.length; i++) {
                const sym = input[i];
                if (state === 0 && sym === 'a') {
                    stack.unshift('A');
                    drawPDA(0, stack, input, i + 1, `Read '${sym}': PUSH A onto stack`);
                } else if (state === 0 && sym === 'b') {
                    if (stack[0] === 'A') { stack.shift(); state = 1;
                        drawPDA(1, stack, input, i + 1, `Read '${sym}': switch to q₁, POP A`);
                    } else { error = true; break; }
                } else if (state === 1 && sym === 'b') {
                    if (stack[0] === 'A') { stack.shift();
                        drawPDA(1, stack, input, i + 1, `Read '${sym}': POP A from stack`);
                    } else { error = true; break; }
                } else if (state === 1 && sym === 'a') { error = true; break;
                } else { error = true; break; }
                await sleep(700);
            }
            if (!error && state === 1 && stack.length === 1 && stack[0] === 'Z₀') {
                state = 2;
                drawPDA(2, ['Z₀'], input, input.length, 'ε-transition: stack=[Z₀] → ACCEPT!');
                await sleep(500);
                result.textContent = 'ACCEPTED ✓ — jumlah a = jumlah b';
                result.style.color = '#34d399';
            } else {
                result.textContent = 'REJECTED ✗ — bukan aⁿbⁿ';
                result.style.color = '#f87171';
            }
            pdaAnimating = false;
        }
        document.getElementById('pda-run')?.addEventListener('click', runPDA);
        document.getElementById('pda-reset')?.addEventListener('click', () => {
            document.getElementById('pda-result').textContent = '';
            drawPDA(0, ['Z₀']);
        });
        drawPDA(0, ['Z₀']);
    }

    // ============ Turing Machine Animation ============
    initTMAnimation(dpr);
}

function initTMAnimation(dpr) {
    const tmCanvas = document.getElementById('tm-canvas');
    if (!tmCanvas) return;
    const tmCtx = tmCanvas.getContext('2d');
    tmCanvas.width = 700 * dpr;
    tmCanvas.height = 250 * dpr;
    tmCtx.scale(dpr, dpr);

    let tmTape = [];
    let tmHead = 0;
    let tmState = 'q0';
    let tmStep = 0;

    function drawTM(stepText = '') {
        tmCtx.clearRect(0, 0, 700, 250);
        const cellW = 50;
        const centerX = 350;
        const startX = centerX - tmHead * cellW - cellW / 2;

        // Title bar
        tmCtx.fillStyle = '#38bdf8'; tmCtx.font = 'bold 14px JetBrains Mono';
        tmCtx.textAlign = 'center';
        tmCtx.fillText('State: ' + tmState, centerX, 28);
        tmCtx.fillStyle = '#94a3b8'; tmCtx.font = '11px JetBrains Mono';
        tmCtx.fillText('Step: ' + tmStep, centerX + 120, 28);

        // Draw tape cells
        for (let i = 0; i < tmTape.length; i++) {
            const x = startX + i * cellW;
            if (x < -cellW || x > 750) continue;
            const isHead = i === tmHead;
            // Cell background
            tmCtx.fillStyle = isHead ? 'rgba(56,189,248,0.15)' : '#1e293b';
            tmCtx.fillRect(x, 80, cellW - 2, cellW - 2);
            // Cell border
            tmCtx.strokeStyle = isHead ? '#38bdf8' : '#334155';
            tmCtx.lineWidth = isHead ? 2.5 : 1;
            tmCtx.strokeRect(x, 80, cellW - 2, cellW - 2);
            // Cell content
            const sym = tmTape[i];
            tmCtx.fillStyle = sym === 'B' ? '#475569' : isHead ? '#38bdf8' : '#e2e8f0';
            tmCtx.font = (isHead ? 'bold ' : '') + '20px JetBrains Mono';
            tmCtx.textAlign = 'center'; tmCtx.textBaseline = 'middle';
            tmCtx.fillText(sym, x + cellW / 2 - 1, 80 + cellW / 2 - 1);
        }

        // Head pointer
        tmCtx.fillStyle = '#38bdf8';
        tmCtx.beginPath();
        tmCtx.moveTo(centerX, 74); tmCtx.lineTo(centerX - 10, 52); tmCtx.lineTo(centerX + 10, 52);
        tmCtx.fill();
        tmCtx.fillStyle = '#38bdf8'; tmCtx.font = 'bold 10px Inter'; tmCtx.textAlign = 'center';
        tmCtx.fillText('HEAD ▼', centerX, 46);

        // Labels
        tmCtx.fillStyle = '#475569'; tmCtx.font = '10px Inter'; tmCtx.textAlign = 'center';
        tmCtx.fillText('... ← Infinite Tape → ...', centerX, 148);

        // Step description
        if (stepText) {
            tmCtx.fillStyle = '#94a3b8'; tmCtx.font = '12px Inter'; tmCtx.textAlign = 'left';
            tmCtx.fillText(stepText, 20, 175);
        }

        // Transition table mini
        tmCtx.fillStyle = '#334155'; tmCtx.fillRect(15, 190, 670, 50);
        tmCtx.strokeStyle = '#475569'; tmCtx.strokeRect(15, 190, 670, 50);
        tmCtx.fillStyle = '#94a3b8'; tmCtx.font = '10px JetBrains Mono'; tmCtx.textAlign = 'left';
        tmCtx.fillText('δ(q₀, 1) = (q₀, 0, L)  carry', 25, 208);
        tmCtx.fillText('δ(q₀, 0) = (halt, 1, -)  done', 25, 225);
        tmCtx.fillText('δ(q₀, B) = (halt, 1, -)  overflow', 280, 208);
        // Highlight current rule
        const curSym = tmTape[tmHead];
        if (tmState === 'q0') {
            const hlY = curSym === '1' ? 200 : curSym === '0' ? 217 : 200;
            const hlX = curSym === 'B' ? 275 : 20;
            tmCtx.strokeStyle = '#38bdf8'; tmCtx.lineWidth = 1.5;
            tmCtx.strokeRect(hlX, hlY, curSym === 'B' ? 260 : 250, 16);
        }
    }

    async function runTM() {
        const input = document.getElementById('tm-input').value;
        const result = document.getElementById('tm-result');
        result.textContent = 'Running...'; result.style.color = '#94a3b8';

        tmTape = ['B', 'B', ...input.split(''), 'B', 'B'];
        tmHead = tmTape.length - 3;
        tmState = 'q0'; tmStep = 0;
        drawTM('Initial: head at rightmost digit');
        await sleep(700);

        while (tmState !== 'halt' && tmStep < 50) {
            const sym = tmTape[tmHead]; tmStep++;
            if (tmState === 'q0') {
                if (sym === '1') {
                    tmTape[tmHead] = '0';
                    drawTM(`Step ${tmStep}: Read 1 → Write 0, carry → move Left`);
                    tmHead--;
                } else if (sym === '0') {
                    tmTape[tmHead] = '1';
                    tmState = 'halt';
                    drawTM(`Step ${tmStep}: Read 0 → Write 1, no carry → HALT`);
                } else if (sym === 'B') {
                    tmTape[tmHead] = '1';
                    tmState = 'halt';
                    drawTM(`Step ${tmStep}: Read B → Write 1 (overflow) → HALT`);
                }
            }
            await sleep(600);
        }
        const resultStr = tmTape.filter(s => s !== 'B').join('');
        result.textContent = `${input}₂ (${parseInt(input, 2)}) + 1 = ${resultStr}₂ (${parseInt(resultStr, 2)})`;
        result.style.color = '#34d399';
    }

    document.getElementById('tm-run')?.addEventListener('click', runTM);
    document.getElementById('tm-reset')?.addEventListener('click', () => {
        const input = document.getElementById('tm-input').value;
        tmTape = ['B', 'B', ...input.split(''), 'B', 'B'];
        tmHead = 2; tmState = 'q0'; tmStep = 0;
        document.getElementById('tm-result').textContent = '';
        drawTM('Ready — click Run to start');
    });
    tmTape = ['B', 'B', '1', '0', '1', '1', 'B', 'B'];
    tmHead = 2; tmStep = 0;
    drawTM('Click "Run TM" to increment this binary number by 1');
}

function initAlgorithmAnimations() {
    // Complexity chart
    const chartCanvas = document.getElementById('complexity-chart');
    if (!chartCanvas) return;
    const ctx = chartCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    chartCanvas.width = 700 * dpr;
    chartCanvas.height = 350 * dpr;
    ctx.scale(dpr, dpr);

    const W = 700, H = 350;
    const margin = { top: 30, right: 30, bottom: 50, left: 60 };
    const cw = W - margin.left - margin.right;
    const ch = H - margin.top - margin.bottom;

    const maxN = 20;
    const maxY = 200;

    function mapX(n) { return margin.left + (n / maxN) * cw; }
    function mapY(v) { return margin.top + ch - (Math.min(v, maxY) / maxY) * ch; }

    const funcs = [
        { name: 'O(1)', fn: () => 1, color: '#34d399' },
        { name: 'O(log n)', fn: n => Math.log2(n || 1), color: '#38bdf8' },
        { name: 'O(n)', fn: n => n, color: '#818cf8' },
        { name: 'O(n log n)', fn: n => n * Math.log2(n || 1), color: '#fbbf24' },
        { name: 'O(n²)', fn: n => n * n, color: '#fb923c' },
        { name: 'O(2ⁿ)', fn: n => Math.pow(2, n), color: '#f87171' },
    ];

    // Axes
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, margin.top + ch);
    ctx.lineTo(margin.left + cw, margin.top + ch);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('n (input size)', W/2, H - 10);
    ctx.save();
    ctx.translate(15, H/2);
    ctx.rotate(-Math.PI/2);
    ctx.fillText('Operations', 0, 0);
    ctx.restore();

    // X ticks
    for (let i = 0; i <= maxN; i += 5) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText(i, mapX(i), margin.top + ch + 20);
    }

    // Draw functions
    funcs.forEach(f => {
        ctx.strokeStyle = f.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let n = 0.5; n <= maxN; n += 0.5) {
            const v = f.fn(n);
            const x = mapX(n);
            const y = mapY(v);
            if (n === 0.5) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    });

    // Legend
    funcs.forEach((f, i) => {
        const lx = margin.left + 15;
        const ly = margin.top + 15 + i * 18;
        ctx.fillStyle = f.color;
        ctx.fillRect(lx, ly - 5, 12, 3);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '11px JetBrains Mono';
        ctx.textAlign = 'left';
        ctx.fillText(f.name, lx + 18, ly);
    });
}

function initDSAnimations() {
    const bstCanvas = document.getElementById('bst-canvas');
    if (!bstCanvas) return;
    const ctx = bstCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    bstCanvas.width = 700 * dpr;
    bstCanvas.height = 280 * dpr;
    ctx.scale(dpr, dpr);

    class BSTNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    let root = null;

    function insert(node, val) {
        if (!node) return new BSTNode(val);
        if (val < node.val) node.left = insert(node.left, val);
        else if (val > node.val) node.right = insert(node.right, val);
        return node;
    }

    function drawTree(node, x, y, spread, highlight = -1) {
        if (!node) return;
        const childY = y + 55;

        if (node.left) {
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x, y + 18);
            ctx.lineTo(x - spread, childY - 18);
            ctx.stroke();
            drawTree(node.left, x - spread, childY, spread * 0.55, highlight);
        }
        if (node.right) {
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x, y + 18);
            ctx.lineTo(x + spread, childY - 18);
            ctx.stroke();
            drawTree(node.right, x + spread, childY, spread * 0.55, highlight);
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fillStyle = node.val === highlight ? 'rgba(56,189,248,0.3)' : '#1e293b';
        ctx.fill();
        ctx.strokeStyle = node.val === highlight ? '#38bdf8' : '#818cf8';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#e2e8f0';
        ctx.font = 'bold 13px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.val, x, y);
    }

    function render(highlight = -1) {
        ctx.clearRect(0, 0, 700, 280);
        if (root) drawTree(root, 350, 35, 140, highlight);
        else {
            ctx.fillStyle = '#475569';
            ctx.font = '14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Click "Insert" to add nodes to the BST', 350, 140);
        }
    }

    // Initialize with some values
    [50, 30, 70, 20, 40, 60, 80].forEach(v => root = insert(root, v));
    render();

    document.getElementById('bst-insert').addEventListener('click', () => {
        const val = parseInt(document.getElementById('bst-input').value);
        if (!isNaN(val)) {
            root = insert(root, val);
            render(val);
        }
    });

    document.getElementById('bst-reset').addEventListener('click', () => {
        root = null;
        [50, 30, 70, 20, 40, 60, 80].forEach(v => root = insert(root, v));
        render();
    });
}

function initSecurityAnimations() {
    // No special canvas animations needed for security section
}

// ---- Utility ----
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ---- Init ----
loadSection('home');
