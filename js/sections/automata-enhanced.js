// ============================================================
// AUTOMATA & BAHASA FORMAL — Enhanced Edition
// Override sections.automata and initAutomataAnimations
// ============================================================

sections.automata = () => `
<h1 class="section-title animate-in">${t('Automata & Bahasa Formal', 'Automata & Formal Languages')}</h1>
<p class="section-subtitle animate-in">${t('Panduan lengkap dari Finite Automata hingga Turing Machine — fondasi teori komputasi yang dijelaskan dengan bahasa sederhana dan analogi dunia nyata', 'A complete guide from Finite Automata to Turing Machines — foundations of computation theory explained with simple language and real-world analogies')}</p>
<p class="animate-in"><em>Referensi: Sipser, "Introduction to the Theory of Computation" (2012); Hopcroft, Motwani & Ullman, "Introduction to Automata Theory" (2006)</em></p>

<!-- ==================== BAGIAN 1: HIERARKI CHOMSKY ==================== -->
<h2 class="animate-in">${t('1. Hierarki Chomsky', '1. Chomsky Hierarchy')}</h2>

<div class="card animate-in">
<h3>${t('Apa itu Hierarki Chomsky?', 'What is the Chomsky Hierarchy?')}</h3>
<p>${t('Bayangkan kamu punya 4 tingkatan "mesin pengenal bahasa", dari yang paling sederhana sampai yang paling canggih. <strong>Noam Chomsky (1956)</strong>, seorang ahli linguistik dan ilmu komputer, mengklasifikasikan semua bahasa formal ke dalam 4 tipe. Setiap tipe adalah <strong>subset</strong> dari tipe di atasnya — seperti boneka Matryoshka (boneka Rusia yang bisa dibuka dan di dalamnya ada boneka lebih kecil).', 'Imagine you have 4 levels of "language recognizing machines", from the simplest to the most sophisticated. <strong>Noam Chomsky (1956)</strong>, a linguist and computer scientist, classified all formal languages into 4 types. Each type is a <strong>subset</strong> of the type above it — like Matryoshka dolls (Russian nesting dolls that open to reveal smaller dolls inside).')}</p>
<p>${t('Analoginya begini: bayangkan 4 orang dengan kemampuan berbeda.', 'Here is an analogy: imagine 4 people with different abilities.')}</p>
<ul>
    <li>${t('<strong>Orang pertama (Type 3)</strong> hanya bisa mengingat SATU hal pada satu waktu — seperti ikan mas yang katanya hanya punya memori 3 detik.', '<strong>First person (Type 3)</strong> can only remember ONE thing at a time — like a goldfish supposedly having only a 3-second memory.')}</li>
    <li>${t('<strong>Orang kedua (Type 2)</strong> punya tumpukan kertas — dia bisa menumpuk dan mengambil kertas dari atas tumpukan.', '<strong>Second person (Type 2)</strong> has a stack of papers — they can pile up and take papers from the top of the stack.')}</li>
    <li>${t('<strong>Orang ketiga (Type 1)</strong> punya kertas yang panjangnya terbatas sesuai input yang dia baca.', '<strong>Third person (Type 1)</strong> has paper with limited length matching the input they read.')}</li>
    <li>${t('<strong>Orang keempat (Type 0)</strong> punya kertas yang TAK TERBATAS panjangnya — dia bisa melakukan apapun yang "bisa dihitung".', '<strong>Fourth person (Type 0)</strong> has UNLIMITED length paper — they can do anything that is "computable".')}</li>
</ul>
</div>

<!-- Diagram SVG Hierarki Chomsky -->
<div class="card animate-in">
<h3>${t('Diagram Hierarki Chomsky', 'Chomsky Hierarchy Diagram')}</h3>
<div class="anim-container" style="padding:20px;text-align:center;">
    <svg width="700" height="440" viewBox="0 0 700 440" style="max-width:100%">
        <defs>
            <marker id="arrowChomsky" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="var(--text2)"/>
            </marker>
        </defs>
        <!-- Tipe 0 — outermost -->
        <rect x="10" y="10" width="680" height="420" rx="24" fill="rgba(248,113,113,0.04)" stroke="var(--red)" stroke-width="2.5"/>
        <text x="360" y="42" text-anchor="middle" fill="var(--red)" font-size="15" font-weight="700">Type 0 — Recursively Enumerable (Unrestricted)</text>
        <text x="360" y="62" text-anchor="middle" fill="var(--text2)" font-size="11">${t('Mesin: Turing Machine | Grammar: unrestricted', 'Machine: Turing Machine | Grammar: unrestricted')}</text>
        <text x="640" y="415" fill="var(--text2)" font-size="9" font-style="italic">Halting Problem (undecidable)</text>

        <!-- Tipe 1 -->
        <rect x="50" y="78" width="600" height="335" rx="20" fill="rgba(251,146,60,0.04)" stroke="var(--orange)" stroke-width="2"/>
        <text x="360" y="105" text-anchor="middle" fill="var(--orange)" font-size="14" font-weight="700">Type 1 — Context-Sensitive</text>
        <text x="360" y="123" text-anchor="middle" fill="var(--text2)" font-size="11">${t('Mesin: Linear Bounded Automata | Grammar: |LHS| &le; |RHS|', 'Machine: Linear Bounded Automata | Grammar: |LHS| &le; |RHS|')}</text>
        <text x="600" y="395" fill="var(--text2)" font-size="9" font-style="italic">a&#x207F;b&#x207F;c&#x207F;</text>

        <!-- Tipe 2 -->
        <rect x="100" y="140" width="500" height="255" rx="18" fill="rgba(52,211,153,0.05)" stroke="var(--green)" stroke-width="2"/>
        <text x="360" y="167" text-anchor="middle" fill="var(--green)" font-size="14" font-weight="700">Type 2 — Context-Free</text>
        <text x="360" y="185" text-anchor="middle" fill="var(--text2)" font-size="11">${t('Mesin: Pushdown Automata (PDA) | Grammar: A &rarr; &gamma;', 'Machine: Pushdown Automata (PDA) | Grammar: A &rarr; &gamma;')}</text>
        <text x="545" y="378" fill="var(--text2)" font-size="9" font-style="italic">${t('a&#x207F;b&#x207F;, HTML, JSON, kurung seimbang', 'a&#x207F;b&#x207F;, HTML, JSON, balanced parentheses')}</text>

        <!-- Tipe 3 — innermost -->
        <rect x="165" y="205" width="370" height="170" rx="16" fill="rgba(56,189,248,0.07)" stroke="var(--accent)" stroke-width="2.5"/>
        <text x="350" y="235" text-anchor="middle" fill="var(--accent)" font-size="15" font-weight="700">Type 3 — Regular</text>
        <text x="350" y="255" text-anchor="middle" fill="var(--text2)" font-size="11">${t('Mesin: DFA / NFA', 'Machine: DFA / NFA')}</text>
        <text x="350" y="275" text-anchor="middle" fill="var(--text2)" font-size="11">Grammar: A &rarr; aB | a (right-linear)</text>
        <text x="350" y="300" text-anchor="middle" fill="var(--accent)" font-size="12">Regex &equiv; DFA &equiv; NFA (Teorema Kleene)</text>
        <text x="350" y="325" text-anchor="middle" fill="var(--text2)" font-size="10" font-style="italic">a*b+, (0|1)*01, email, identifier</text>
        <text x="350" y="345" text-anchor="middle" fill="var(--text2)" font-size="10" font-style="italic">${t('log parsing, token sederhana', 'log parsing, simple tokens')}</text>

        <!-- Arrow kekuatan -->
        <line x1="25" y1="420" x2="25" y2="30" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#arrowChomsky)"/>
        <text x="28" y="250" fill="var(--text2)" font-size="9" transform="rotate(-90, 28, 250)">${t('Kekuatan komputasi meningkat &rarr;', 'Computational power increases &rarr;')}</text>
    </svg>
</div>
</div>

<!-- Type 3: Regular Languages -->
<div class="card animate-in">
<h3><span class="badge badge-blue">Type 3 — Regular Languages (Bahasa Reguler)</span></h3>
<p>${t('Bahasa reguler adalah bahasa yang <strong>paling sederhana</strong> dalam hierarki Chomsky. Mesin yang mengenalinya disebut <strong>Finite Automaton (DFA/NFA)</strong>.', 'Regular languages are the <strong>simplest</strong> languages in the Chomsky hierarchy. The machine that recognizes them is called a <strong>Finite Automaton (DFA/NFA)</strong>.')}</p>

<h4>${t('Analogi: Orang yang Hanya Bisa Mengingat SATU Hal', 'Analogy: A Person Who Can Only Remember ONE Thing')}</h4>
<p>${t('Bayangkan kamu adalah seorang penjaga gerbang yang hanya punya SATU papan tulis kecil. Di papan tulis itu, kamu hanya bisa menulis SATU kondisi pada satu waktu. Misalnya: "Sudah lihat huruf A" atau "Belum lihat huruf A". Kamu tidak bisa mengingat BERAPA BANYAK huruf A yang sudah kamu lihat — hanya bisa mengingat STATUS saat ini.', 'Imagine you are a gatekeeper with only ONE small whiteboard. On that whiteboard, you can only write ONE condition at a time. For example: "Already seen letter A" or "Haven not seen letter A". You cannot remember HOW MANY letter As you have seen — you can only remember your current STATUS.')}</p>
<p>${t('Inilah keterbatasan DFA/NFA: mereka punya jumlah state (memori) yang <strong>terbatas dan tetap</strong>, tidak peduli seberapa panjang input yang dibaca.', 'This is the limitation of DFA/NFA: they have a <strong>finite and fixed</strong> number of states (memory), regardless of how long the input is.')}</p>

<h4>${t('Apa yang Bisa Dikenali Bahasa Reguler?', 'What Can Regular Languages Recognize?')}</h4>
<ul>
    <li>${t('<strong>Pola email sederhana</strong>: <code>[a-z]+@[a-z]+\\.[a-z]+</code> — mesin cukup mengingat "sudah baca @" atau "belum baca @"', '<strong>Simple email pattern</strong>: <code>[a-z]+@[a-z]+\\.[a-z]+</code> — the machine only needs to remember "already read @" or "have not read @"')}</li>
    <li>${t('<strong>Identifier dalam pemrograman</strong>: <code>[a-zA-Z_][a-zA-Z0-9_]*</code> — dimulai huruf/underscore, lalu huruf/angka/underscore', '<strong>Programming identifiers</strong>: <code>[a-zA-Z_][a-zA-Z0-9_]*</code> — starts with letter/underscore, then letters/digits/underscores')}</li>
    <li>${t('<strong>Log parsing</strong>: mencari pola tanggal <code>\\d{4}-\\d{2}-\\d{2}</code> di log file', '<strong>Log parsing</strong>: searching for date patterns <code>\\d{4}-\\d{2}-\\d{2}</code> in log files')}</li>
    <li>${t('<strong>Nomor telepon</strong>: <code>08[0-9]{8,11}</code>', '<strong>Phone numbers</strong>: <code>08[0-9]{8,11}</code>')}</li>
    <li>${t('<strong>Bilangan biner habis dibagi 3</strong>: bisa dibuat DFA dengan 3 state saja!', '<strong>Binary numbers divisible by 3</strong>: can be built as a DFA with only 3 states!')}</li>
</ul>

<h4>${t('Apa yang TIDAK BISA Dikenali Bahasa Reguler?', 'What Can Regular Languages NOT Recognize?')}</h4>
<div class="warn-box">
${t('Bahasa reguler TIDAK BISA mengenali pola yang membutuhkan "penghitungan" tak terbatas. Contoh:', 'Regular languages CANNOT recognize patterns that require unbounded "counting". Examples:')}
<ul>
    <li>${t('<code>a&#x207F;b&#x207F;</code> (n buah \'a\' diikuti n buah \'b\') — karena mesin harus "mengingat" berapa banyak \'a\' yang sudah dibaca, tapi state-nya terbatas!', '<code>a&#x207F;b&#x207F;</code> (n copies of \'a\' followed by n copies of \'b\') — because the machine must "remember" how many \'a\'s it has read, but its states are finite!')}</li>
    <li>${t('Kurung seimbang: <code>((()))</code> — harus menghitung kedalaman kurung', 'Balanced parentheses: <code>((()))</code> — must count nesting depth')}</li>
    <li>${t('Palindrome: <code>abcba</code> — harus mengingat seluruh paruh pertama', 'Palindromes: <code>abcba</code> — must remember the entire first half')}</li>
</ul>
</div>

<h4>Grammar Type 3 (Right-Linear Grammar)</h4>
<p>${t('Aturan produksi hanya boleh berbentuk:', 'Production rules can only take these forms:')}</p>
<div class="code-block"><span class="cm">// Right-linear grammar rules:</span>
A &rarr; aB    <span class="cm">// terminal diikuti non-terminal</span>
A &rarr; a     <span class="cm">// hanya terminal</span>
A &rarr; &epsilon;     <span class="cm">// empty string (opsional)</span>

<span class="cm">// Contoh: Grammar untuk bahasa {ab, aab, aaab, ...} = a+b</span>
S &rarr; aS    <span class="cm">// baca 'a', tetap di S (bisa ulangi)</span>
S &rarr; aB    <span class="cm">// baca 'a', pindah ke B</span>
B &rarr; b     <span class="cm">// baca 'b', selesai</span></div>
</div>

<!-- Type 2: Context-Free Languages -->
<div class="card animate-in">
<h3><span class="badge badge-green">Type 2 — Context-Free Languages (Bahasa Bebas Konteks)</span></h3>
<p>${t('Context-Free Languages (CFL) adalah "level up" dari Regular Languages. Mesin yang mengenalinya adalah <strong>Pushdown Automaton (PDA)</strong> — yaitu NFA yang dilengkapi dengan <strong>Stack</strong>.', 'Context-Free Languages (CFL) are a "level up" from Regular Languages. The machine that recognizes them is the <strong>Pushdown Automaton (PDA)</strong> — an NFA equipped with a <strong>Stack</strong>.')}</p>

<h4>${t('Analogi: Orang dengan Tumpukan Piring', 'Analogy: A Person with a Stack of Plates')}</h4>
<p>${t('Bayangkan kamu sekarang punya tumpukan piring (stack). Setiap kali kamu melihat sesuatu yang perlu diingat, kamu TUMPUK piring baru di atas. Ketika kamu perlu mencocokkan sesuatu, kamu AMBIL piring dari atas tumpukan. Kamu hanya bisa melihat piring paling atas — tidak bisa mengintip piring di tengah atau bawah!', 'Imagine you now have a stack of plates. Every time you see something to remember, you STACK a new plate on top. When you need to match something, you TAKE a plate from the top of the stack. You can only see the topmost plate — you cannot peek at plates in the middle or bottom!')}</p>
<p>${t('Inilah kekuatan ekstra yang dimiliki PDA: memori berupa stack yang bisa tumbuh tak terbatas (tapi hanya bisa akses dari atas).', 'This is the extra power PDA has: memory in the form of a stack that can grow unboundedly (but can only be accessed from the top).')}</p>

<h4>${t('Apa yang Bisa Dilakukan CFL yang Tidak Bisa Dilakukan Regular?', 'What Can CFL Do That Regular Languages Cannot?')}</h4>
<ul>
    <li>${t('<strong>HTML/XML Parsing</strong>: mencocokkan tag pembuka <code>&lt;div&gt;</code> dengan tag penutup <code>&lt;/div&gt;</code> — perlu menumpuk tag dan mencocokkannya', '<strong>HTML/XML Parsing</strong>: matching opening tag <code>&lt;div&gt;</code> with closing tag <code>&lt;/div&gt;</code> — needs to stack tags and match them')}</li>
    <li>${t('<strong>JSON Parsing</strong>: <code>{"key": {"nested": [1, 2]}}</code> — kurung kurawal dan siku harus seimbang', '<strong>JSON Parsing</strong>: <code>{"key": {"nested": [1, 2]}}</code> — curly braces and brackets must be balanced')}</li>
    <li>${t('<strong>Ekspresi matematika</strong>: <code>((3 + 5) * (2 - 1))</code> — kurung harus match', '<strong>Mathematical expressions</strong>: <code>((3 + 5) * (2 - 1))</code> — parentheses must match')}</li>
    <li>${t('<strong>Syntax bahasa pemrograman</strong>: <code>if { if { } }</code> — block harus seimbang', '<strong>Programming language syntax</strong>: <code>if { if { } }</code> — blocks must be balanced')}</li>
    <li>${t('<strong>a&#x207F;b&#x207F;</strong>: push \'A\' untuk setiap \'a\', pop \'A\' untuk setiap \'b\', pastikan stack kosong di akhir', '<strong>a&#x207F;b&#x207F;</strong>: push \'A\' for each \'a\', pop \'A\' for each \'b\', ensure the stack is empty at the end')}</li>
</ul>

<h4>${t('Apa yang TIDAK BISA Dilakukan CFL?', 'What CFL CANNOT Do?')}</h4>
<div class="warn-box">
<ul>
    <li>${t('<code>a&#x207F;b&#x207F;c&#x207F;</code> — harus menghitung tiga hal sekaligus, stack hanya bisa menangani dua', '<code>a&#x207F;b&#x207F;c&#x207F;</code> — must count three things simultaneously, a stack can only handle two')}</li>
    <li>${t('<code>ww</code> (string diikuti duplikatnya) — harus mengingat seluruh string pertama', '<code>ww</code> (a string followed by its duplicate) — must remember the entire first string')}</li>
</ul>
</div>

<h4>Grammar Type 2 (Context-Free Grammar / CFG)</h4>
<p>${t('Aturan produksi: sisi kiri HANYA BOLEH satu non-terminal. Sisi kanan boleh apa saja.', 'Production rules: the left side can ONLY be a single non-terminal. The right side can be anything.')}</p>
<div class="code-block"><span class="cm">// CFG untuk kurung seimbang</span>
S &rarr; (S)    <span class="cm">// bungkus S dengan kurung</span>
S &rarr; SS     <span class="cm">// dua S berurutan</span>
S &rarr; &epsilon;      <span class="cm">// basis: string kosong</span>

<span class="cm">// Derivasi: S &rarr; (S) &rarr; (SS) &rarr; ((S)S) &rarr; (()S) &rarr; (()()) </span>
<span class="cm">// Hasil: "(()())" adalah string valid!</span>

<span class="cm">// CFG untuk ekspresi aritmetika sederhana</span>
E &rarr; E + T | T
T &rarr; T * F | F
F &rarr; (E) | id | num</div>
</div>

<!-- Type 1: Context-Sensitive Languages -->
<div class="card animate-in">
<h3><span class="badge badge-orange">Type 1 — Context-Sensitive Languages (Bahasa Peka Konteks)</span></h3>
<p>${t('Context-Sensitive Languages (CSL) menambahkan kemampuan yang tidak dimiliki CFL: aturan produksi bisa <strong>bergantung pada konteks</strong> (simbol-simbol di sekitarnya).', 'Context-Sensitive Languages (CSL) add a capability CFL does not have: production rules can <strong>depend on context</strong> (the surrounding symbols).')}</p>

<h4>${t('Analogi: Arti Kata yang Bergantung pada Konteks', 'Analogy: Word Meaning Depends on Context')}</h4>
<p>${t('Dalam bahasa Indonesia, kata "bisa" bisa berarti:', 'In English, the word "bank" can mean:')}</p>
<ul>
    <li>${t('"Saya <strong>bisa</strong> berenang" — artinya <em>mampu</em>', '"I went to the <strong>bank</strong> to deposit money" — means a <em>financial institution</em>')}</li>
    <li>${t('"Ular itu mengeluarkan <strong>bisa</strong>" — artinya <em>racun</em>', '"We sat on the river <strong>bank</strong>" — means the <em>edge of a river</em>')}</li>
</ul>
<p>${t('Artinya berubah tergantung <strong>konteks</strong> (kata-kata di sekitarnya). Inilah esensi Context-Sensitive: aturan penggantian boleh melihat simbol di kiri dan kanan.', 'The meaning changes depending on <strong>context</strong> (the surrounding words). This is the essence of Context-Sensitive: replacement rules can look at symbols to the left and right.')}</p>

<h4>${t('Mesin: Linear Bounded Automaton (LBA)', 'Machine: Linear Bounded Automaton (LBA)')}</h4>
<p>${t('LBA adalah Turing Machine yang tape-nya <strong>dibatasi</strong> sepanjang input. Jadi tidak bisa menulis ke area di luar input. Seperti orang yang punya kertas catatan, tapi panjang kertasnya SAMA dengan panjang masalah yang dia baca.', 'LBA is a Turing Machine whose tape is <strong>bounded</strong> by the input length. It cannot write beyond the input area. Like a person with a notepad whose length is the SAME as the problem they read.')}</p>

<h4>${t('Contoh Bahasa Context-Sensitive', 'Context-Sensitive Language Examples')}</h4>
<ul>
    <li>${t('<code>a&#x207F;b&#x207F;c&#x207F;</code> — misalnya "aabbcc", "aaabbbccc". Jumlah a, b, dan c harus sama. Stack saja tidak cukup karena setelah mencocokkan a dan b, informasi tentang jumlah sudah hilang saat harus mencocokkan c.', '<code>a&#x207F;b&#x207F;c&#x207F;</code> — for example "aabbcc", "aaabbbccc". The counts of a, b, and c must be equal. A stack alone is not enough because after matching a and b, information about the count is lost when matching c.')}</li>
    <li>${t('<strong>Grammar bahasa alami</strong> yang lebih kompleks — subject-verb agreement, dll.', '<strong>More complex natural language grammars</strong> — subject-verb agreement, etc.')}</li>
</ul>

<h4>Grammar Type 1</h4>
<div class="code-block"><span class="cm">// Aturan: &alpha;A&beta; &rarr; &alpha;&gamma;&beta;</span>
<span class="cm">// A bisa diganti &gamma; HANYA jika konteksnya &alpha;...&beta;</span>
<span class="cm">// Syarat: |LHS| &le; |RHS| (tidak boleh memendekkan)</span>

<span class="cm">// Contoh grammar untuk a&#x207F;b&#x207F;c&#x207F;:</span>
S &rarr; aSBC | aBC
CB &rarr; BC        <span class="cm">// menukar posisi (context-sensitive!)</span>
aB &rarr; ab
bB &rarr; bb
bC &rarr; bc
cC &rarr; cc</div>
</div>

<!-- Type 0: Recursively Enumerable Languages -->
<div class="card animate-in">
<h3><span class="badge badge-red">${t('Type 0 — Recursively Enumerable (Tak Terbatas)', 'Type 0 — Recursively Enumerable (Unrestricted)')}</span></h3>
<p>${t('Type 0 adalah level tertinggi — dikenali oleh <strong>Turing Machine</strong>, mesin komputasi paling powerful yang kita kenal. Grammar-nya <strong>tidak ada batasan</strong>: sisi kiri dan kanan boleh apa saja.', 'Type 0 is the highest level — recognized by <strong>Turing Machines</strong>, the most powerful computational model we know. Its grammar has <strong>no restrictions</strong>: the left and right sides can be anything.')}</p>

<h4>${t('Kekuatan dan Keterbatasan', 'Power and Limitations')}</h4>
<p>${t('Turing Machine bisa melakukan <strong>semua yang bisa dihitung</strong> — ini adalah inti dari <strong>Church-Turing Thesis</strong>. Tapi ada satu masalah besar: TM mungkin <strong>tidak pernah berhenti</strong> (looping forever) untuk beberapa input.', 'Turing Machines can do <strong>everything that is computable</strong> — this is the core of the <strong>Church-Turing Thesis</strong>. But there is one big problem: a TM may <strong>never halt</strong> (loop forever) for some inputs.')}</p>

<div class="card-grid">
<div class="card" style="border-color:var(--green)">
    <h4>Decidable (Recursive)</h4>
    <p>${t('TM <strong>selalu berhenti</strong> — memberikan jawaban "ya" atau "tidak" untuk SETIAP input.', 'The TM <strong>always halts</strong> — giving a "yes" or "no" answer for EVERY input.')}</p>
    <ul>
        <li>${t('"Apakah string ini diterima DFA ini?"', '"Does this DFA accept this string?"')}</li>
        <li>${t('"Apakah bilangan ini prima?"', '"Is this number prime?"')}</li>
        <li>${t('"Apakah dua DFA mengenali bahasa yang sama?"', '"Do two DFAs recognize the same language?"')}</li>
    </ul>
</div>
<div class="card" style="border-color:var(--red)">
    <h4>Undecidable</h4>
    <p>${t('<strong>Tidak ada TM</strong> yang bisa menjawab benar untuk SEMUA input dan selalu berhenti.', '<strong>No TM exists</strong> that can answer correctly for ALL inputs and always halt.')}</p>
    <ul>
        <li>${t('<strong>Halting Problem</strong>: "Apakah program P berhenti untuk input I?"', '<strong>Halting Problem</strong>: "Does program P halt on input I?"')}</li>
        <li>${t('"Apakah dua CFG menghasilkan bahasa yang sama?"', '"Do two CFGs generate the same language?"')}</li>
        <li>${t('"Apakah TM ini menerima string apapun?"', '"Does this TM accept any string?"')}</li>
    </ul>
</div>
</div>

<div class="info-box">
${t('<strong>Halting Problem</strong> adalah contoh paling terkenal dari masalah undecidable. Alan Turing membuktikannya pada tahun 1936 menggunakan teknik <strong>diagonalisasi</strong>: jika kita asumsikan ada program H yang bisa menentukan apakah program lain berhenti, kita bisa membuat paradox yang menunjukkan H tidak mungkin ada. Ini seperti paradox "Tukang cukur yang mencukur semua orang yang tidak mencukur dirinya sendiri — apakah dia mencukur dirinya sendiri?"', 'The <strong>Halting Problem</strong> is the most famous example of an undecidable problem. Alan Turing proved it in 1936 using <strong>diagonalization</strong>: if we assume there is a program H that can determine whether another program halts, we can create a paradox showing H cannot exist. It is like the paradox "The barber who shaves everyone who does not shave themselves — does the barber shave himself?"')}
</div>
</div>

<!-- Tabel Perbandingan Hierarki Chomsky -->
<div class="card animate-in">
<h3>${t('Tabel Perbandingan Hierarki Chomsky', 'Chomsky Hierarchy Comparison Table')}</h3>
<div class="table-wrapper">
<table>
<tr><th>Type</th><th>${t('Nama', 'Name')}</th><th>${t('Mesin', 'Machine')}</th><th>Grammar</th><th>${t('Contoh Bahasa', 'Language Examples')}</th><th>${t('Memori', 'Memory')}</th></tr>
<tr>
    <td><span class="badge badge-blue">3</span></td>
    <td>Regular</td>
    <td>DFA / NFA</td>
    <td>A &rarr; aB | a</td>
    <td>a*b+, (0|1)*01, email regex</td>
    <td>${t('Tidak ada (finite state saja)', 'None (finite states only)')}</td>
</tr>
<tr>
    <td><span class="badge badge-green">2</span></td>
    <td>Context-Free</td>
    <td>PDA</td>
    <td>A &rarr; &gamma; (${t('bebas', 'free')})</td>
    <td>${t('a&#x207F;b&#x207F;, kurung seimbang, JSON', 'a&#x207F;b&#x207F;, balanced parens, JSON')}</td>
    <td>${t('Stack (LIFO, tak terbatas)', 'Stack (LIFO, unbounded)')}</td>
</tr>
<tr>
    <td><span class="badge badge-orange">1</span></td>
    <td>Context-Sensitive</td>
    <td>LBA</td>
    <td>&alpha;A&beta; &rarr; &alpha;&gamma;&beta;</td>
    <td>a&#x207F;b&#x207F;c&#x207F;</td>
    <td>${t('Tape terbatas (sebesar input)', 'Bounded tape (input size)')}</td>
</tr>
<tr>
    <td><span class="badge badge-red">0</span></td>
    <td>Recursively Enumerable</td>
    <td>Turing Machine</td>
    <td>${t('Tanpa batasan', 'Unrestricted')}</td>
    <td>${t('Semua yang bisa dihitung', 'All computable languages')}</td>
    <td>${t('Tape tak terbatas', 'Unbounded tape')}</td>
</tr>
</table>
</div>
</div>

<!-- ==================== BAGIAN 2: PUMPING LEMMA ==================== -->
<h2 class="animate-in">2. Pumping Lemma</h2>

<div class="card animate-in">
<h3>${t('Apa Itu Pumping Lemma?', 'What Is the Pumping Lemma?')}</h3>
<p>${t('Pumping Lemma adalah <strong>alat untuk membuktikan bahwa suatu bahasa BUKAN regular</strong> (atau bukan context-free). Ini bukan alat untuk membuktikan bahwa suatu bahasa ADALAH regular — hanya untuk membantah!', 'The Pumping Lemma is a <strong>tool to prove that a language is NOT regular</strong> (or not context-free). It is not a tool to prove that a language IS regular — only to disprove!')}</p>

<h4>${t('Analogi: Jalan Melingkar', 'Analogy: Circular Roads')}</h4>
<p>${t('Bayangkan kamu berkendara di sebuah kota yang hanya punya <strong>5 persimpangan</strong>. Jika kamu berkendara melewati <strong>6 persimpangan atau lebih</strong>, pasti ada persimpangan yang kamu kunjungi <strong>DUA KALI</strong> — artinya kamu melewati sebuah <strong>loop (putaran)</strong>!', 'Imagine you are driving in a city with only <strong>5 intersections</strong>. If you drive through <strong>6 or more intersections</strong>, there must be an intersection you visit <strong>TWICE</strong> — meaning you went through a <strong>loop</strong>!')}</p>
<p>${t('Ini adalah <strong>Prinsip Pigeonhole (Sarang Merpati)</strong>: jika ada 6 merpati dan 5 sarang, pasti ada sarang yang berisi lebih dari 1 merpati.', 'This is the <strong>Pigeonhole Principle</strong>: if there are 6 pigeons and 5 holes, at least one hole must contain more than 1 pigeon.')}</p>
<p>${t('DFA juga begitu: jika DFA punya <strong>p state</strong> dan membaca string yang panjangnya <strong>&ge; p</strong>, pasti ada state yang dikunjungi dua kali — berarti ada <strong>loop</strong>. Loop ini bisa "dipompa" (diulang) berapa kali pun, dan hasilnya tetap diterima oleh DFA.', 'DFAs work the same way: if a DFA has <strong>p states</strong> and reads a string of length <strong>&ge; p</strong>, some state must be visited twice — meaning there is a <strong>loop</strong>. This loop can be "pumped" (repeated) any number of times, and the result is still accepted by the DFA.')}</p>
</div>

<div class="card animate-in">
<h3>${t('Pernyataan Formal Pumping Lemma (Disederhanakan)', 'Formal Statement of the Pumping Lemma (Simplified)')}</h3>
<div class="info-box">
<strong>Pumping Lemma ${t('untuk', 'for')} Regular Languages:</strong><br>
${t('Jika L adalah bahasa regular, maka ada bilangan p (pumping length) sehingga setiap string s &isin; L dengan |s| &ge; p, bisa dipecah menjadi s = xyz di mana:', 'If L is a regular language, then there exists a number p (pumping length) such that every string s &isin; L with |s| &ge; p can be split into s = xyz where:')}
<ol>
    <li><strong>|xy| &le; p</strong> — ${t('bagian x dan y berada di awal string (dalam p karakter pertama)', 'x and y are at the beginning of the string (within the first p characters)')}</li>
    <li><strong>|y| &gt; 0</strong> — ${t('bagian y tidak boleh kosong (harus ada sesuatu yang di-pump)', 'y must not be empty (there must be something to pump)')}</li>
    <li><strong>${t('Untuk semua', 'For all')} i &ge; 0, xy<sup>i</sup>z &isin; L</strong> — ${t('jika y diulang berapa kali pun (termasuk 0 kali), hasilnya tetap di L', 'if y is repeated any number of times (including 0 times), the result remains in L')}</li>
</ol>
</div>

<h4>${t('Cara Membaca Pumping Lemma', 'How to Read the Pumping Lemma')}</h4>
<p>${t('Bayangkan string s dipotong jadi 3 bagian:', 'Imagine string s is split into 3 parts:')}</p>
<div class="flow-diagram">
    <div class="flow-node" style="background:rgba(56,189,248,0.1);border-color:var(--accent)">x (prefix)</div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-node" style="background:rgba(248,113,113,0.1);border-color:var(--red)">y (${t('bagian yang di-"pompa"', 'the part being "pumped"')})</div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-node" style="background:rgba(52,211,153,0.1);border-color:var(--green)">z (suffix)</div>
</div>
<p>${t('Jika bahasa itu regular, maka bagian <strong>y bisa diulang berapa kali pun</strong> (0, 1, 2, 3, ...) dan hasilnya TETAP ada di dalam bahasa. Jika kita bisa menemukan satu saja kasus di mana pengulangan y menghasilkan string di LUAR bahasa, maka bahasa itu BUKAN regular.', 'If the language is regular, then <strong>y can be repeated any number of times</strong> (0, 1, 2, 3, ...) and the result REMAINS in the language. If we can find even one case where repeating y produces a string OUTSIDE the language, then the language is NOT regular.')}</p>
</div>

<div class="card animate-in">
<h3>${t('Contoh: Buktikan {a&#x207F;b&#x207F; | n &ge; 0} BUKAN Regular', 'Example: Prove {a&#x207F;b&#x207F; | n &ge; 0} is NOT Regular')}</h3>
<p>${t('Bahasa ini berisi string seperti: &epsilon;, ab, aabb, aaabbb, aaaabbbb, ...', 'This language contains strings such as: &epsilon;, ab, aabb, aaabbb, aaaabbbb, ...')}</p>

<div class="step-list">
    <div class="step-item">
        <div class="step-num">1</div>
        <div class="step-text">${t('<strong>Asumsikan L = {a&#x207F;b&#x207F;} adalah regular.</strong> Maka pumping lemma berlaku, dan ada pumping length p.', '<strong>Assume L = {a&#x207F;b&#x207F;} is regular.</strong> Then the pumping lemma applies, and there exists a pumping length p.')}</div>
    </div>
    <div class="step-item">
        <div class="step-num">2</div>
        <div class="step-text">${t('<strong>Pilih string s = a&#x1D56;b&#x1D56;</strong> (p buah a diikuti p buah b). Jelas s &isin; L dan |s| = 2p &ge; p.', '<strong>Choose string s = a&#x1D56;b&#x1D56;</strong> (p copies of a followed by p copies of b). Clearly s &isin; L and |s| = 2p &ge; p.')}</div>
    </div>
    <div class="step-item">
        <div class="step-num">3</div>
        <div class="step-text">${t('<strong>Pecah s = xyz.</strong> Karena |xy| &le; p, maka x dan y HANYA berisi huruf \'a\' (karena p karakter pertama semuanya \'a\'). Jadi y = a&#x1D4F; untuk suatu k &gt; 0.', '<strong>Split s = xyz.</strong> Since |xy| &le; p, x and y contain ONLY \'a\'s (because the first p characters are all \'a\'). So y = a&#x1D4F; for some k &gt; 0.')}</div>
    </div>
    <div class="step-item">
        <div class="step-num">4</div>
        <div class="step-text">${t('<strong>Pump y: coba i = 2.</strong> Maka xy&sup2;z = a&#x1D56;&#x207A;&#x1D4F;b&#x1D56;. Jumlah a = p+k, jumlah b = p. Karena k &gt; 0, maka p+k &ne; p. String ini BUKAN di L!', '<strong>Pump y: try i = 2.</strong> Then xy&sup2;z = a&#x1D56;&#x207A;&#x1D4F;b&#x1D56;. Count of a = p+k, count of b = p. Since k &gt; 0, p+k &ne; p. This string is NOT in L!')}</div>
    </div>
    <div class="step-item">
        <div class="step-num">5</div>
        <div class="step-text">${t('<strong>Kontradiksi!</strong> Pumping lemma mengatakan xy&sup2;z harus di L, tapi kita tunjukkan tidak. Jadi asumsi salah: <strong>L bukan regular</strong>. QED.', '<strong>Contradiction!</strong> The pumping lemma says xy&sup2;z must be in L, but we showed it is not. So the assumption is wrong: <strong>L is not regular</strong>. QED.')}</div>
    </div>
</div>

<div class="success-box">
${t('<strong>Kesimpulan:</strong> a&#x207F;b&#x207F; bukan regular karena DFA tidak bisa "menghitung" berapa banyak \'a\' yang sudah dibaca (memori terbatas). Tapi bahasa ini BISA dikenali oleh PDA (context-free) dengan menggunakan stack: push untuk setiap \'a\', pop untuk setiap \'b\'.', '<strong>Conclusion:</strong> a&#x207F;b&#x207F; is not regular because a DFA cannot "count" how many \'a\'s it has read (finite memory). But this language CAN be recognized by a PDA (context-free) using a stack: push for each \'a\', pop for each \'b\'.')}
</div>
</div>

<div class="card animate-in">
<h3>${t('Pumping Lemma untuk Context-Free Languages', 'Pumping Lemma for Context-Free Languages')}</h3>
<p>${t('Ada juga versi Pumping Lemma untuk CFL! Bedanya, string dipecah jadi <strong>5 bagian</strong>: s = uvxyz, dan bagian v dan y yang bisa dipompa.', 'There is also a version of the Pumping Lemma for CFL! The difference is that the string is split into <strong>5 parts</strong>: s = uvxyz, and the parts v and y can be pumped.')}</p>
<div class="info-box">
${t('Jika L adalah CFL, maka ada p sehingga setiap s &isin; L dengan |s| &ge; p bisa dipecah s = uvxyz di mana:', 'If L is a CFL, then there exists p such that every s &isin; L with |s| &ge; p can be split into s = uvxyz where:')}
<ol>
    <li>|vxy| &le; p</li>
    <li>|vy| &gt; 0</li>
    <li>Untuk semua i &ge; 0, uv<sup>i</sup>xy<sup>i</sup>z &isin; L</li>
</ol>
${t('Ini bisa digunakan untuk membuktikan bahwa a&#x207F;b&#x207F;c&#x207F; BUKAN context-free.', 'This can be used to prove that a&#x207F;b&#x207F;c&#x207F; is NOT context-free.')}
</div>
</div>

<!-- ==================== BAGIAN 3: DFA ==================== -->
<h2 class="animate-in">3. DFA (Deterministic Finite Automaton)</h2>

<div class="card animate-in">
<h3>${t('Apa Itu DFA?', 'What Is a DFA?')}</h3>
<p>${t('DFA adalah mesin abstrak yang membaca input <strong>satu karakter per langkah</strong> dari kiri ke kanan. Di setiap state, ada <strong>tepat satu transisi</strong> untuk setiap simbol — makanya disebut "deterministic" (tidak ada ambiguitas).', 'A DFA is an abstract machine that reads input <strong>one character per step</strong> from left to right. At each state, there is <strong>exactly one transition</strong> for every symbol — hence the name "deterministic" (no ambiguity).')}</p>

<h4>${t('Analogi: Lampu Lalu Lintas', 'Analogy: Traffic Lights')}</h4>
<p>${t('Lampu lalu lintas adalah contoh DFA dalam kehidupan nyata!', 'Traffic lights are a real-life example of a DFA!')}</p>
<ul>
    <li>${t('<strong>State</strong>: Merah, Kuning, Hijau', '<strong>States</strong>: Red, Yellow, Green')}</li>
    <li>${t('<strong>Input (sinyal waktu)</strong>: timer habis', '<strong>Input (time signal)</strong>: timer expires')}</li>
    <li>${t('<strong>Transisi</strong>: Hijau &rarr; Kuning &rarr; Merah &rarr; Hijau &rarr; ...', '<strong>Transitions</strong>: Green &rarr; Yellow &rarr; Red &rarr; Green &rarr; ...')}</li>
    <li>${t('Di setiap state, ada <strong>tepat satu</strong> state berikutnya — tidak ada ambiguitas!', 'At each state, there is <strong>exactly one</strong> next state — no ambiguity!')}</li>
</ul>

<h4>${t('Analogi: Mesin Penjual Minuman (Vending Machine)', 'Analogy: Vending Machine')}</h4>
<p>${t('Bayangkan vending machine yang menerima koin Rp500 dan Rp1000, dan minuman harganya Rp1500:', 'Imagine a vending machine that accepts 500 and 1000 coins, and a drink costs 1500:')}</p>
<ul>
    <li>${t('<strong>State</strong>: Rp0, Rp500, Rp1000, Rp1500+ (accept/keluarkan minuman)', '<strong>States</strong>: 0, 500, 1000, 1500+ (accept/dispense drink)')}</li>
    <li>${t('<strong>Input</strong>: koin 500, koin 1000', '<strong>Input</strong>: coin 500, coin 1000')}</li>
    <li>${t('<strong>Transisi</strong>: dari Rp0 + koin 500 &rarr; Rp500, dari Rp500 + koin 1000 &rarr; Rp1500 (accept!)', '<strong>Transitions</strong>: from 0 + coin 500 &rarr; 500, from 500 + coin 1000 &rarr; 1500 (accept!)')}</li>
</ul>
</div>

<div class="card animate-in">
<h3>Definisi Formal: DFA M = (Q, &Sigma;, &delta;, q&sub0;, F)</h3>
<div class="table-wrapper">
<table>
<tr><th>Simbol</th><th>Nama</th><th>Penjelasan</th><th>Contoh</th></tr>
<tr><td><strong>Q</strong></td><td>Himpunan state</td><td>Semua "posisi" yang bisa ditempati mesin. Jumlahnya TERBATAS.</td><td>{q0, q1, q2}</td></tr>
<tr><td><strong>&Sigma;</strong></td><td>Alfabet input</td><td>Simbol-simbol yang bisa dibaca dari input.</td><td>{0, 1}</td></tr>
<tr><td><strong>&delta;</strong></td><td>Fungsi transisi</td><td>&delta;: Q &times; &Sigma; &rarr; Q. Untuk setiap pasangan (state, simbol), ada TEPAT SATU state tujuan.</td><td>&delta;(q0, 0) = q1</td></tr>
<tr><td><strong>q&sub0;</strong></td><td>State awal</td><td>State pertama saat mesin mulai. Hanya ada SATU.</td><td>q0</td></tr>
<tr><td><strong>F</strong></td><td>Accept states</td><td>Himpunan state akhir. Jika mesin berhenti di sini, input DITERIMA.</td><td>{q2}</td></tr>
</table>
</div>

<h4>Cara Kerja DFA</h4>
<div class="step-list">
    <div class="step-item">
        <div class="step-num">1</div>
        <div class="step-text">Mulai di state awal q&sub0;.</div>
    </div>
    <div class="step-item">
        <div class="step-num">2</div>
        <div class="step-text">Baca karakter pertama dari input.</div>
    </div>
    <div class="step-item">
        <div class="step-num">3</div>
        <div class="step-text">Lihat fungsi transisi &delta;: dari state saat ini + karakter yang dibaca, tentukan state berikutnya.</div>
    </div>
    <div class="step-item">
        <div class="step-num">4</div>
        <div class="step-text">Pindah ke state berikutnya. Ulangi dari langkah 2 untuk karakter berikutnya.</div>
    </div>
    <div class="step-item">
        <div class="step-num">5</div>
        <div class="step-text">Setelah semua karakter habis dibaca, periksa: jika state saat ini &isin; F, input <strong>DITERIMA</strong>. Jika tidak, input <strong>DITOLAK</strong>.</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Contoh 1: DFA yang Menerima String Berakhiran "01"</h3>
<p>DFA ini punya 3 state: <strong>q0</strong> (start, belum lihat pola), <strong>q1</strong> (baru baca "0"), <strong>q2</strong> (baru baca "01" — accept!). Masukkan string biner dan lihat bagaimana mesin bergerak langkah demi langkah.</p>

<h4>Tabel Transisi &delta;</h4>
<div class="table-wrapper">
<table>
<tr><th>State</th><th>Input 0</th><th>Input 1</th><th>Keterangan</th></tr>
<tr><td>&rarr; q&sub0;</td><td>q&sub1;</td><td>q&sub0;</td><td>Start. Baca 0 &rarr; mungkin awal "01". Baca 1 &rarr; tetap.</td></tr>
<tr><td>q&sub1;</td><td>q&sub1;</td><td><strong>q&sub2;</strong></td><td>Sudah baca "0". Baca 1 &rarr; "01" lengkap! Baca 0 &rarr; tetap menunggu "1".</td></tr>
<tr><td>*q&sub2;</td><td>q&sub1;</td><td>q&sub0;</td><td>Accept state. Baca 0 &rarr; mulai pola baru. Baca 1 &rarr; reset.</td></tr>
</table>
</div>
<p>&rarr; = start state, * = accept state. Coba: "01" (terima), "1101" (terima), "10" (tolak), "0110" (tolak).</p>
</div>

<!-- DFA Canvas Animation -->
<h4 class="animate-in">Animasi Interaktif: DFA Berakhiran "01"</h4>
<div class="anim-container animate-in">
    <canvas id="dfa-canvas" width="700" height="320"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Input: <input type="text" id="dfa-input" class="anim-input" value="1101" maxlength="20" placeholder="masukkan 0 dan 1"></label>
        <button class="anim-btn" id="run-dfa">Run DFA</button>
        <button class="anim-btn secondary" id="reset-dfa">Reset</button>
        <span id="dfa-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>

<div class="card animate-in">
<h3>Contoh 2: DFA yang Menerima String dengan Jumlah 0 Genap</h3>
<p>DFA ini sangat sederhana: hanya 2 state. <strong>q0</strong> berarti "sudah lihat jumlah 0 genap" (termasuk nol — genap!), <strong>q1</strong> berarti "sudah lihat jumlah 0 ganjil".</p>
<div class="table-wrapper">
<table>
<tr><th>State</th><th>Input 0</th><th>Input 1</th><th>Keterangan</th></tr>
<tr><td>&rarr;* q&sub0;</td><td>q&sub1;</td><td>q&sub0;</td><td>Start & Accept. Baca 0 &rarr; ganjil. Baca 1 &rarr; tetap genap.</td></tr>
<tr><td>q&sub1;</td><td>q&sub0;</td><td>q&sub1;</td><td>Baca 0 &rarr; kembali genap. Baca 1 &rarr; tetap ganjil.</td></tr>
</table>
</div>
<p>Contoh: "101" &rarr; q0&rarr;q0&rarr;q1&rarr;q1 (tolak, ada 1 nol = ganjil). "1001" &rarr; q0&rarr;q0&rarr;q1&rarr;q0&rarr;q0 (terima, ada 2 nol = genap).</p>
</div>

<!-- ==================== BAGIAN 4: NFA ==================== -->
<h2 class="animate-in">4. NFA (Nondeterministic Finite Automaton)</h2>

<div class="card animate-in">
<h3>Apa Itu NFA?</h3>
<p>NFA adalah versi "super" dari DFA. Perbedaan utamanya:</p>
<ul>
    <li><strong>Banyak transisi</strong>: dari satu state, bisa ada 0, 1, atau BANYAK transisi untuk simbol yang sama.</li>
    <li><strong>Epsilon transitions (&epsilon;-transition)</strong>: bisa berpindah state TANPA membaca karakter apapun!</li>
    <li><strong>Nondeterministic</strong>: mesin "memilih" jalur yang benar secara ajaib, atau bisa dibayangkan mesin mencoba SEMUA jalur secara paralel.</li>
</ul>

<h4>Analogi: Kloning Diri di Persimpangan</h4>
<p>Bayangkan kamu berjalan di labirin. Di setiap persimpangan, kamu bisa <strong>mengkloning diri</strong> dan mengirim satu klon ke setiap jalur. Jika SALAH SATU klon sampai ke pintu keluar, kamu menang! Itulah cara kerja NFA — dia menjelajahi semua kemungkinan sekaligus.</p>

<h4>Definisi Formal: NFA N = (Q, &Sigma;, &delta;, q&sub0;, F)</h4>
<p>Hampir sama dengan DFA, kecuali:</p>
<ul>
    <li><strong>&delta;: Q &times; (&Sigma; &cup; {&epsilon;}) &rarr; P(Q)</strong> — fungsi transisi mengembalikan <strong>himpunan state</strong> (bisa kosong, satu, atau banyak), bukan satu state.</li>
    <li>P(Q) = power set dari Q (semua subset dari Q).</li>
</ul>
</div>

<div class="card animate-in">
<h3>Epsilon Transitions (&epsilon;-transitions)</h3>
<p>Epsilon transition memungkinkan NFA berpindah state <strong>tanpa membaca input apapun</strong>. Ini sangat berguna untuk menghubungkan sub-automata.</p>
<div class="info-box">
<strong>Contoh penggunaan &epsilon;-transition:</strong> Saat membangun NFA dari regex <code>a|b</code>, kita membuat dua jalur terpisah (satu untuk 'a', satu untuk 'b') dan menghubungkannya dengan &epsilon;-transition dari state awal ke kedua jalur. Ini adalah dasar dari <strong>Thompson's Construction</strong>.
</div>
</div>

<div class="card animate-in">
<h3>NFA &equiv; DFA — Kekuatan yang Sama!</h3>
<p>Meskipun NFA terlihat lebih powerful, ternyata NFA dan DFA mengenali <strong>bahasa yang persis sama</strong> — Regular Languages! Ini dibuktikan dengan <strong>Subset Construction (Powerset Construction)</strong>.</p>

<h4>Subset Construction: NFA &rarr; DFA</h4>
<div class="step-list">
    <div class="step-item">
        <div class="step-num">1</div>
        <div class="step-text">Setiap state di DFA baru merepresentasikan <strong>himpunan state</strong> NFA yang mungkin aktif secara bersamaan.</div>
    </div>
    <div class="step-item">
        <div class="step-num">2</div>
        <div class="step-text">State awal DFA = &epsilon;-closure dari state awal NFA (semua state yang bisa dicapai melalui &epsilon;-transition dari q0).</div>
    </div>
    <div class="step-item">
        <div class="step-num">3</div>
        <div class="step-text">Untuk setiap subset state dan setiap simbol, hitung semua state yang bisa dicapai.</div>
    </div>
    <div class="step-item">
        <div class="step-num">4</div>
        <div class="step-text">State DFA yang berisi setidaknya satu accept state NFA menjadi accept state DFA.</div>
    </div>
</div>

<div class="warn-box">
<strong>Harga yang harus dibayar:</strong> NFA dengan n state bisa menghasilkan DFA dengan maksimal <strong>2&#x207F; state</strong>! Contoh: NFA 3 state &rarr; DFA bisa punya hingga 8 state. NFA 10 state &rarr; DFA bisa punya hingga 1024 state!
</div>
</div>

<div class="card animate-in">
<h3>Kapan NFA Lebih Nyaman dari DFA?</h3>
<ul>
    <li><strong>Desain lebih mudah</strong>: Ketika mendesain automata untuk pola kompleks, NFA sering lebih intuitif karena kita tidak perlu menentukan transisi untuk SETIAP simbol di SETIAP state.</li>
    <li><strong>Kompilasi regex</strong>: Regex dikonversi ke NFA terlebih dahulu (Thompson's Construction), baru ke DFA jika perlu.</li>
    <li><strong>Lebih compact</strong>: NFA untuk "string mengandung 101" bisa dibuat dengan 4 state, DFA-nya butuh 8 state.</li>
</ul>
</div>

<div class="card animate-in">
<h3>Contoh: NFA yang Menerima String Mengandung "11"</h3>
<p>NFA ini mencari subsequence "11" di mana saja. Di q0 untuk input "1", ada <strong>dua transisi</strong>: ke q0 (abaikan) DAN ke q1 (mulai mencocokkan). Ini yang membuat NFA nondeterministic!</p>
<div class="table-wrapper">
<table>
<tr><th>State</th><th>Input 0</th><th>Input 1</th><th>Keterangan</th></tr>
<tr><td>&rarr; q&sub0;</td><td>{q&sub0;}</td><td>{q&sub0;, q&sub1;}</td><td>Baca 0: tetap. Baca 1: tetap DAN mulai cek "11"</td></tr>
<tr><td>q&sub1;</td><td>&empty;</td><td>{q&sub2;}</td><td>Baca 1 lagi: "11" ditemukan! Baca 0: mati (dead end)</td></tr>
<tr><td>*q&sub2;</td><td>{q&sub2;}</td><td>{q&sub2;}</td><td>Accept state. Apapun yang dibaca, tetap di sini.</td></tr>
</table>
</div>
</div>

<!-- NFA Canvas Animation -->
<h4 class="animate-in">Animasi Interaktif: NFA Mengandung "11"</h4>
<div class="anim-container animate-in">
    <canvas id="nfa-canvas" width="700" height="320"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Input: <input type="text" id="nfa-input" class="anim-input" value="0110" maxlength="20" placeholder="masukkan 0 dan 1"></label>
        <button class="anim-btn" id="run-nfa">Run NFA</button>
        <button class="anim-btn secondary" id="reset-nfa">Reset</button>
        <span id="nfa-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>

<!-- ==================== BAGIAN 5: REGULAR EXPRESSIONS ==================== -->
<h2 class="animate-in">5. Regular Expressions (Ekspresi Reguler)</h2>

<div class="card animate-in">
<h3>Apa Itu Regular Expression?</h3>
<p>Regular Expression (regex) adalah <strong>notasi teks</strong> untuk mendeskripsikan pola (pattern) dalam string. Regex sangat powerful dan digunakan di hampir semua bahasa pemrograman modern.</p>

<h4>Kesetaraan Fundamental: Regex &equiv; NFA &equiv; DFA</h4>
<div class="success-box">
<strong>Teorema Kleene (1956):</strong> Tiga model berikut mengenali <strong>bahasa yang persis sama</strong> — Regular Languages:
<ul>
    <li><strong>Regular Expression</strong> (notasi deklaratif)</li>
    <li><strong>NFA</strong> (mesin nondeterministic)</li>
    <li><strong>DFA</strong> (mesin deterministic)</li>
</ul>
Artinya: setiap regex bisa dikonversi ke NFA (Thompson's Construction), setiap NFA ke DFA (Subset Construction), dan setiap DFA ke regex (State Elimination). Mereka adalah tiga cara berbeda untuk mendeskripsikan hal yang SAMA!
</div>
</div>

<div class="card animate-in">
<h3>Operator Dasar Regex</h3>
<div class="table-wrapper">
<table>
<tr><th>Operasi</th><th>Notasi</th><th>Arti</th><th>Contoh Regex</th><th>Contoh Match</th></tr>
<tr><td>Union (atau)</td><td>a | b</td><td>a ATAU b</td><td>(cat|dog)</td><td>"cat", "dog"</td></tr>
<tr><td>Concatenation</td><td>ab</td><td>a DIIKUTI b</td><td>ab</td><td>"ab"</td></tr>
<tr><td>Kleene Star</td><td>a*</td><td>NOL atau lebih a</td><td>a*b</td><td>"b", "ab", "aab", "aaab"</td></tr>
<tr><td>Plus</td><td>a+</td><td>SATU atau lebih a</td><td>a+b</td><td>"ab", "aab" (bukan "b")</td></tr>
<tr><td>Optional</td><td>a?</td><td>NOL atau SATU a</td><td>colou?r</td><td>"color", "colour"</td></tr>
<tr><td>Character class</td><td>[abc]</td><td>a, b, atau c</td><td>[aeiou]</td><td>"a", "e", "i", "o", "u"</td></tr>
<tr><td>Range</td><td>[a-z]</td><td>a sampai z</td><td>[0-9]+</td><td>"42", "007", "123"</td></tr>
<tr><td>Wildcard</td><td>.</td><td>Karakter apapun</td><td>a.b</td><td>"aab", "axb", "a1b"</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Membangun Regex dari Deskripsi</h3>

<h4>Contoh 1: "String biner yang berakhiran 01"</h4>
<div class="code-block"><span class="cm">// Langkah 1: Apa saja yang bisa ada sebelum "01"?</span>
<span class="cm">//   Karakter 0 atau 1, berapa pun jumlahnya: (0|1)*</span>
<span class="cm">// Langkah 2: Harus diakhiri "01"</span>
<span class="cm">// Hasil:</span>
<span class="str">(0|1)*01</span>

<span class="cm">// Contoh match: "01", "001", "101", "1101", "00001"</span>
<span class="cm">// Contoh not match: "10", "0110", "1"</span></div>

<h4>Contoh 2: "String yang mengandung substring 'abc'"</h4>
<div class="code-block"><span class="str">.*abc.*</span>
<span class="cm">// .* = karakter apapun, berapa pun</span>
<span class="cm">// abc = literal "abc"</span>
<span class="cm">// .* = karakter apapun setelahnya</span></div>
</div>

<div class="card animate-in">
<h3>Thompson's Construction: Regex &rarr; NFA</h3>
<p>Algoritma Thompson mengonversi regex ke NFA secara rekursif. Idenya sederhana:</p>
<div class="step-list">
    <div class="step-item">
        <div class="step-num">1</div>
        <div class="step-text"><strong>Basis:</strong> Untuk simbol tunggal 'a', buat NFA dengan 2 state dan 1 transisi berlabel 'a'.</div>
    </div>
    <div class="step-item">
        <div class="step-num">2</div>
        <div class="step-text"><strong>Union (r|s):</strong> Buat state awal baru dengan &epsilon;-transition ke NFA(r) dan NFA(s). Kedua NFA berakhir di state akhir baru via &epsilon;-transition.</div>
    </div>
    <div class="step-item">
        <div class="step-num">3</div>
        <div class="step-text"><strong>Concatenation (rs):</strong> Hubungkan state akhir NFA(r) ke state awal NFA(s) dengan &epsilon;-transition.</div>
    </div>
    <div class="step-item">
        <div class="step-num">4</div>
        <div class="step-text"><strong>Kleene Star (r*):</strong> Buat state awal/akhir baru. &epsilon;-transition dari awal ke NFA(r) dan ke akhir. &epsilon;-transition dari akhir NFA(r) ke awal NFA(r) (loop) dan ke akhir.</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Contoh Regex di Dunia Nyata</h3>
<div class="table-wrapper">
<table>
<tr><th>Kegunaan</th><th>Regex Pattern</th><th>Penjelasan</th></tr>
<tr><td>Email sederhana</td><td><code>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}</code></td><td>Username @ domain . tld</td></tr>
<tr><td>Nomor HP Indonesia</td><td><code>08[0-9]{8,12}</code></td><td>Dimulai 08, diikuti 8-12 digit</td></tr>
<tr><td>URL HTTP/HTTPS</td><td><code>https?://[a-zA-Z0-9.-]+(/[a-zA-Z0-9._~:/?#@!$&'()*+,;=-]*)?</code></td><td>http(s)://domain/path</td></tr>
<tr><td>Tanggal YYYY-MM-DD</td><td><code>[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])</code></td><td>Format ISO date</td></tr>
<tr><td>Hex color code</td><td><code>#[0-9a-fA-F]{6}</code></td><td>#RRGGBB</td></tr>
<tr><td>IPv4 address</td><td><code>([0-9]{1,3}\\.){3}[0-9]{1,3}</code></td><td>4 oktet dipisah titik</td></tr>
<tr><td>Password kuat</td><td><code>(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}</code></td><td>Min 8 char, huruf besar+kecil+angka</td></tr>
</table>
</div>
<div class="warn-box">
<strong>Penting:</strong> Regex di bahasa pemrograman (seperti Python, JavaScript) sebenarnya LEBIH powerful dari "regular expression" dalam teori formal. Fitur seperti backreference, lookahead, dan lookbehind membuat mereka bisa mengenali bahasa BEYOND regular! Tapi inti dasarnya tetap sama.
</div>
</div>

<!-- ==================== BAGIAN 6: PDA ==================== -->
<h2 class="animate-in">6. PDA (Pushdown Automaton)</h2>

<div class="card animate-in">
<h3>Mengapa DFA/NFA Tidak Cukup?</h3>
<p>Coba pikirkan: bagaimana cara DFA memverifikasi apakah kurung dalam kode program seimbang?</p>
<div class="code-block"><span class="cm">// Contoh kurung seimbang:</span>
<span class="str">((()))</span>     <span class="cm">// &checkmark; 3 buka, 3 tutup, urutan benar</span>
<span class="str">(()())</span>     <span class="cm">// &checkmark; seimbang</span>
<span class="str">(()</span>        <span class="cm">// &cross; 2 buka, 1 tutup</span>
<span class="str">)(</span>         <span class="cm">// &cross; tutup dulu baru buka</span></div>
<p>DFA harus "menghitung" berapa banyak kurung buka yang belum ditutup. Tapi jumlahnya bisa <strong>tak terbatas</strong> (bayangkan 10000 kurung bersarang). DFA dengan state terbatas tidak bisa menghitung tak terbatas!</p>
<p><strong>Solusinya: tambahkan STACK!</strong></p>
</div>

<div class="card animate-in">
<h3>PDA = NFA + Stack</h3>
<p>Pushdown Automaton (PDA) adalah NFA yang dilengkapi dengan memori berupa <strong>stack</strong>. Stack bekerja dengan prinsip LIFO (Last In, First Out) — seperti tumpukan piring: yang terakhir ditaruh, yang pertama diambil.</p>

<h4>Analogi: Tumpukan Piring di Restoran</h4>
<p>Bayangkan kamu bekerja di restoran dan harus mencocokkan pesanan:</p>
<ul>
    <li>Setiap kali ada pesanan masuk, kamu <strong>tumpuk</strong> (push) kartu pesanan di atas tumpukan.</li>
    <li>Setiap kali makanan selesai, kamu <strong>ambil</strong> (pop) kartu dari atas tumpukan dan cocokkan.</li>
    <li>Kamu HANYA bisa melihat kartu <strong>paling atas</strong> — tidak bisa mengintip kartu di bawah!</li>
    <li>Jika tumpukan kosong di akhir shift, berarti semua pesanan sudah terlayani.</li>
</ul>

<h4>Operasi Stack</h4>
<div class="card-grid">
<div class="card">
    <h4><span class="badge badge-blue">Push</span></h4>
    <p>Taruh simbol baru di <strong>atas</strong> tumpukan. Stack bertambah tinggi.</p>
</div>
<div class="card">
    <h4><span class="badge badge-green">Pop</span></h4>
    <p>Ambil simbol dari <strong>atas</strong> tumpukan. Stack berkurang tingginya.</p>
</div>
<div class="card">
    <h4><span class="badge badge-orange">Peek</span></h4>
    <p>Lihat simbol di <strong>atas</strong> tumpukan tanpa mengambilnya.</p>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Definisi Formal: PDA = (Q, &Sigma;, &Gamma;, &delta;, q&sub0;, Z&sub0;, F)</h3>
<div class="table-wrapper">
<table>
<tr><th>Simbol</th><th>Nama</th><th>Penjelasan</th></tr>
<tr><td><strong>Q</strong></td><td>Himpunan state</td><td>Sama seperti NFA</td></tr>
<tr><td><strong>&Sigma;</strong></td><td>Alfabet input</td><td>Simbol yang bisa dibaca dari input</td></tr>
<tr><td><strong>&Gamma;</strong></td><td>Alfabet stack</td><td>Simbol yang bisa di-push/pop di stack</td></tr>
<tr><td><strong>&delta;</strong></td><td>Fungsi transisi</td><td>&delta;: Q &times; (&Sigma; &cup; {&epsilon;}) &times; &Gamma; &rarr; P(Q &times; &Gamma;*)</td></tr>
<tr><td><strong>q&sub0;</strong></td><td>State awal</td><td>State pertama saat mesin mulai</td></tr>
<tr><td><strong>Z&sub0;</strong></td><td>Simbol awal stack</td><td>Penanda dasar stack (selalu ada di bawah)</td></tr>
<tr><td><strong>F</strong></td><td>Accept states</td><td>State akhir yang menerima input</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Contoh 1: PDA untuk Kurung Seimbang</h3>
<div class="code-block"><span class="cm">// State: q0 (proses), q_accept</span>
<span class="cm">// Stack alfabet: {(, Z0}</span>

&delta;(q0, '(', Z0) = {(q0, '(' Z0)}   <span class="cm">// baca '(', push '(' di atas Z0</span>
&delta;(q0, '(', '(') = {(q0, '(' '(')} <span class="cm">// baca '(', push '(' lagi</span>
&delta;(q0, ')', '(') = {(q0, &epsilon;)}       <span class="cm">// baca ')', pop '(' (cocok!)</span>
&delta;(q0, &epsilon;, Z0)  = {(q_acc, Z0)}    <span class="cm">// input habis, stack cuma Z0 &rarr; ACCEPT</span>

<span class="cm">// Trace untuk "(())":</span>
<span class="cm">// Baca '(' &rarr; push '(' &rarr; Stack: [( Z0]</span>
<span class="cm">// Baca '(' &rarr; push '(' &rarr; Stack: [( ( Z0]</span>
<span class="cm">// Baca ')' &rarr; pop '(' &rarr; Stack: [( Z0]</span>
<span class="cm">// Baca ')' &rarr; pop '(' &rarr; Stack: [Z0]</span>
<span class="cm">// Input habis, stack cuma Z0 &rarr; ACCEPT!</span></div>
</div>

<div class="card animate-in">
<h3>Contoh 2: PDA untuk L = {a&#x207F;b&#x207F; | n &ge; 1}</h3>
<p>Setiap "a" dibaca &rarr; <strong>push A</strong> ke stack. Setiap "b" dibaca &rarr; <strong>pop A</strong> dari stack. Jika stack kosong (hanya Z0) saat semua input habis &rarr; Accept!</p>
<div class="code-block"><span class="cm">// State: q0 (push phase), q1 (pop phase), q_accept</span>
&delta;(q0, a, Z0) = {(q0, A Z0)}   <span class="cm">// pertama kali baca 'a', push A</span>
&delta;(q0, a, A)  = {(q0, AA)}     <span class="cm">// baca 'a' lagi, push A lagi</span>
&delta;(q0, b, A)  = {(q1, &epsilon;)}      <span class="cm">// mulai baca 'b', pop A, switch ke mode pop</span>
&delta;(q1, b, A)  = {(q1, &epsilon;)}      <span class="cm">// terus baca 'b', terus pop A</span>
&delta;(q1, &epsilon;, Z0) = {(q_acc, Z0)} <span class="cm">// input habis, stack hanya Z0 &rarr; ACCEPT</span></div>
</div>

<!-- PDA Canvas Animation -->
<h4 class="animate-in">Animasi Interaktif: PDA untuk a&#x207F;b&#x207F;</h4>
<p class="animate-in">Perhatikan stack di sebelah kanan — stack bertambah saat membaca 'a' dan berkurang saat membaca 'b'.</p>
<div class="anim-container animate-in">
    <canvas id="pda-canvas" width="700" height="340"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Input: <input type="text" id="pda-input" class="anim-input" value="aaabbb" maxlength="20" placeholder="coba aaabbb atau aab"></label>
        <button class="anim-btn" id="run-pda">Run PDA</button>
        <button class="anim-btn secondary" id="reset-pda">Reset</button>
        <span id="pda-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>

<div class="card animate-in">
<h3>PDA di Dunia Nyata</h3>
<ul>
    <li><strong>Compiler parsing</strong>: Hampir semua compiler menggunakan parser berbasis PDA (LL parser, LR parser) untuk menganalisis syntax kode program.</li>
    <li><strong>JSON/XML validator</strong>: Memastikan kurung kurawal, kurung siku, dan tag berpasangan dengan benar.</li>
    <li><strong>Calculator</strong>: Mengevaluasi ekspresi matematika dengan urutan operasi yang benar, menggunakan stack untuk menyimpan operator dan operand.</li>
    <li><strong>Browser HTML parser</strong>: Mencocokkan tag pembuka dan penutup.</li>
</ul>
</div>

<!-- ==================== BAGIAN 7: TURING MACHINE ==================== -->
<h2 class="animate-in">7. Turing Machine</h2>

<div class="card animate-in">
<h3>Apa Itu Turing Machine?</h3>
<p><strong>Turing Machine (TM)</strong> adalah model komputasi paling powerful yang kita kenal — <strong>basis konseptual dari semua komputer modern</strong>. Diperkenalkan oleh <strong>Alan Turing pada tahun 1936</strong> dalam paper legendaris "On Computable Numbers, with an Application to the Entscheidungsproblem."</p>

<h4>Analogi: Kertas Gulungan Tak Terbatas</h4>
<p>Bayangkan kamu punya:</p>
<ul>
    <li><strong>Kertas gulungan tak terbatas (tape)</strong> yang dibagi menjadi kotak-kotak kecil. Setiap kotak berisi satu simbol.</li>
    <li><strong>Pena yang bisa membaca DAN menulis (head)</strong> — bisa bergerak ke kiri atau ke kanan, satu kotak per langkah.</li>
    <li><strong>Buku petunjuk (finite control)</strong> yang berisi aturan: "Jika kamu di kondisi X dan membaca simbol Y, maka tulis simbol Z, gerak ke arah D, dan pindah ke kondisi W."</li>
</ul>
<p>Dengan tiga komponen sederhana ini, Turing Machine bisa melakukan <strong>SEMUA komputasi</strong> yang bisa dilakukan komputer modern!</p>
</div>

<div class="card animate-in">
<h3>Perbedaan TM dengan DFA/NFA dan PDA</h3>
<div class="table-wrapper">
<table>
<tr><th>Fitur</th><th>DFA/NFA</th><th>PDA</th><th>Turing Machine</th></tr>
<tr><td>Memori</td><td>Tidak ada (finite state saja)</td><td>Stack (LIFO)</td><td>Tape tak terbatas</td></tr>
<tr><td>Baca/Tulis</td><td>Hanya baca</td><td>Baca input + baca/tulis stack</td><td>Baca DAN tulis tape</td></tr>
<tr><td>Arah gerak</td><td>Hanya ke kanan</td><td>Input: kanan saja. Stack: atas saja</td><td>Kiri DAN kanan</td></tr>
<tr><td>Bahasa</td><td>Regular</td><td>Context-Free</td><td>Recursively Enumerable</td></tr>
<tr><td>Kekuatan</td><td>Terbatas</td><td>Menengah</td><td>Maksimal (universal)</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Definisi Formal: TM = (Q, &Sigma;, &Gamma;, &delta;, q&sub0;, q<sub>accept</sub>, q<sub>reject</sub>)</h3>
<div class="table-wrapper">
<table>
<tr><th>Simbol</th><th>Nama</th><th>Penjelasan</th></tr>
<tr><td><strong>Q</strong></td><td>Himpunan state</td><td>Semua kondisi yang bisa ditempati mesin</td></tr>
<tr><td><strong>&Sigma;</strong></td><td>Alfabet input</td><td>Simbol input (TIDAK termasuk blank)</td></tr>
<tr><td><strong>&Gamma;</strong></td><td>Alfabet tape</td><td>Semua simbol yang bisa muncul di tape (&Sigma; &sub; &Gamma;, termasuk blank B)</td></tr>
<tr><td><strong>&delta;</strong></td><td>Fungsi transisi</td><td>&delta;: Q &times; &Gamma; &rarr; Q &times; &Gamma; &times; {L, R}. Baca simbol &rarr; tulis simbol &rarr; gerak.</td></tr>
<tr><td><strong>q&sub0;</strong></td><td>State awal</td><td>Kondisi pertama saat mesin mulai</td></tr>
<tr><td><strong>q<sub>acc</sub></strong></td><td>Accept state</td><td>Jika sampai sini, input DITERIMA dan mesin BERHENTI</td></tr>
<tr><td><strong>q<sub>rej</sub></strong></td><td>Reject state</td><td>Jika sampai sini, input DITOLAK dan mesin BERHENTI</td></tr>
</table>
</div>

<h4>Diagram Visual Turing Machine</h4>
<div class="anim-container" style="padding:20px;text-align:center">
    <svg width="660" height="170" viewBox="0 0 660 170" style="max-width:100%">
        <!-- Tape cells -->
        <rect x="40" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5" opacity="0.5"/>
        <rect x="92" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5"/>
        <rect x="144" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5"/>
        <rect x="196" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5"/>
        <rect x="248" y="60" width="50" height="50" rx="4" fill="rgba(56,189,248,0.15)" stroke="var(--accent)" stroke-width="2.5"/>
        <rect x="300" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5"/>
        <rect x="352" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5"/>
        <rect x="404" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5" opacity="0.5"/>
        <rect x="456" y="60" width="50" height="50" rx="4" fill="var(--bg)" stroke="var(--text2)" stroke-width="1.5" opacity="0.3"/>
        <!-- Tape content -->
        <text x="65" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="monospace">B</text>
        <text x="117" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="monospace">1</text>
        <text x="169" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="monospace">0</text>
        <text x="221" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="monospace">1</text>
        <text x="273" y="92" text-anchor="middle" fill="var(--accent)" font-size="20" font-weight="700" font-family="monospace">1</text>
        <text x="325" y="92" text-anchor="middle" fill="var(--text)" font-size="18" font-family="monospace">0</text>
        <text x="377" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="monospace">B</text>
        <text x="429" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="monospace" opacity="0.5">B</text>
        <text x="481" y="92" text-anchor="middle" fill="var(--text2)" font-size="18" font-family="monospace" opacity="0.3">B</text>
        <!-- Infinity symbols -->
        <text x="18" y="90" fill="var(--text2)" font-size="11">... &infin;</text>
        <text x="515" y="90" fill="var(--text2)" font-size="11">... &infin;</text>
        <!-- Head -->
        <polygon points="273,55 263,35 283,35" fill="var(--accent)"/>
        <text x="273" y="27" text-anchor="middle" fill="var(--accent)" font-size="12" font-weight="700">HEAD (q0)</text>
        <!-- Tape label -->
        <text x="273" y="140" text-anchor="middle" fill="var(--text2)" font-size="11">&larr; Infinite Tape (B = Blank) &rarr;</text>
        <!-- Finite Control box -->
        <rect x="530" y="25" width="120" height="70" rx="10" fill="rgba(129,140,248,0.1)" stroke="var(--accent2)" stroke-width="2"/>
        <text x="590" y="53" text-anchor="middle" fill="var(--accent2)" font-size="12" font-weight="700">Finite</text>
        <text x="590" y="72" text-anchor="middle" fill="var(--accent2)" font-size="12" font-weight="700">Control</text>
        <text x="590" y="150" text-anchor="middle" fill="var(--text2)" font-size="10">&delta;: Q &times; &Gamma; &rarr; Q &times; &Gamma; &times; {L, R}</text>
    </svg>
</div>
</div>

<div class="card animate-in">
<h3>Contoh: Turing Machine untuk Binary Increment (+1)</h3>
<p>TM ini menambahkan 1 ke bilangan biner. Mulai dari digit paling kanan:</p>
<ul>
    <li>Jika digit = 1 &rarr; tulis 0 (carry), gerak ke kiri</li>
    <li>Jika digit = 0 &rarr; tulis 1 (selesai, tidak ada carry)</li>
    <li>Jika blank (melewati semua digit) &rarr; tulis 1 (carry menghasilkan digit baru)</li>
</ul>

<h4>Tabel Transisi</h4>
<div class="table-wrapper">
<table>
<tr><th>State</th><th>Read</th><th>Write</th><th>Move</th><th>Next State</th><th>Keterangan</th></tr>
<tr><td>q&sub0; (seek right)</td><td>0</td><td>0</td><td>R</td><td>q&sub0;</td><td>Gerak ke kanan melewati digit</td></tr>
<tr><td>q&sub0;</td><td>1</td><td>1</td><td>R</td><td>q&sub0;</td><td>Gerak ke kanan melewati digit</td></tr>
<tr><td>q&sub0;</td><td>B</td><td>B</td><td>L</td><td>q&sub1;</td><td>Sampai ujung, mulai proses dari kanan</td></tr>
<tr><td>q&sub1; (add)</td><td>1</td><td>0</td><td>L</td><td>q&sub1;</td><td>1+1=10: tulis 0, carry ke kiri</td></tr>
<tr><td>q&sub1;</td><td>0</td><td>1</td><td>-</td><td>halt</td><td>0+1=1: selesai, tidak ada carry</td></tr>
<tr><td>q&sub1;</td><td>B</td><td>1</td><td>-</td><td>halt</td><td>Carry melewati semua: tulis 1 baru</td></tr>
</table>
</div>
<p><strong>Contoh:</strong> 1011 (11) &rarr; 1100 (12). 111 (7) &rarr; 1000 (8). 0 (0) &rarr; 1 (1).</p>
</div>

<!-- TM Canvas Animation -->
<h4 class="animate-in">Animasi Interaktif: Turing Machine Binary Increment</h4>
<p class="animate-in">Perhatikan tape, posisi head, dan state saat ini. Head bergerak ke kanan dulu untuk menemukan ujung, lalu ke kiri sambil menambahkan.</p>
<div class="anim-container animate-in">
    <canvas id="tm-canvas" width="700" height="280"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Binary: <input type="text" id="tm-input" class="anim-input" value="1011" maxlength="12" placeholder="bilangan biner"></label>
        <button class="anim-btn" id="run-tm">Run TM</button>
        <button class="anim-btn secondary" id="reset-tm">Reset</button>
        <span id="tm-result" style="margin-left:auto;font-weight:600;font-size:0.85rem;"></span>
    </div>
</div>

<div class="card animate-in">
<h3>Church-Turing Thesis</h3>
<div class="info-box">
<strong>Church-Turing Thesis (1936):</strong> Setiap fungsi yang secara intuitif "dapat dihitung" oleh proses mekanis apapun, dapat dihitung oleh Turing Machine.
</div>
<p>Ini <strong>bukan teorema</strong> (tidak bisa dibuktikan secara formal), melainkan <em>thesis</em> yang diterima secara universal oleh komunitas ilmu komputer. Semua model komputasi yang pernah ditemukan — lambda calculus (Alonzo Church), recursive functions, RAM machines, bahkan komputer kuantum (untuk masalah decidability) — <strong>terbukti equivalent</strong> dengan Turing Machine.</p>
<p><strong>Implikasi praktis:</strong></p>
<ul>
    <li>Laptop, smartphone, supercomputer, dan Turing Machine semuanya bisa menyelesaikan masalah yang SAMA (hanya beda kecepatan).</li>
    <li>Jika sesuatu tidak bisa dihitung oleh TM, maka ia TIDAK BISA dihitung oleh mesin apapun. Titik.</li>
    <li>Tidak ada bahasa pemrograman yang "lebih powerful" dari yang lain dalam hal apa yang bisa dihitung — semuanya Turing-complete.</li>
</ul>
</div>

<div class="card animate-in">
<h3>Decidable vs Undecidable</h3>
<div class="card-grid">
<div class="card" style="border-color:var(--green)">
    <h4><span class="badge badge-green">Decidable (Recursive)</span></h4>
    <p>Ada Turing Machine yang <strong>SELALU berhenti</strong> — memberikan jawaban "ya" atau "tidak" untuk SETIAP input, tanpa pernah looping forever.</p>
    <ul>
        <li>"Apakah string w diterima DFA D?" &mdash; decidable</li>
        <li>"Apakah bilangan n prima?" &mdash; decidable</li>
        <li>"Apakah dua DFA mengenali bahasa yang sama?" &mdash; decidable</li>
        <li>"Apakah CFG G menghasilkan string w?" &mdash; decidable (CYK algorithm)</li>
    </ul>
</div>
<div class="card" style="border-color:var(--red)">
    <h4><span class="badge badge-red">Undecidable</span></h4>
    <p><strong>Tidak ada</strong> Turing Machine yang bisa menjawab benar untuk SEMUA input dan SELALU berhenti.</p>
    <ul>
        <li><strong>Halting Problem:</strong> "Apakah program P berhenti untuk input I?"</li>
        <li>"Apakah dua CFG menghasilkan bahasa yang sama?"</li>
        <li>"Apakah TM M menerima string apapun?" (emptiness)</li>
        <li>"Apakah fungsi f(x) selalu mengembalikan 0?"</li>
    </ul>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Halting Problem — Explained Simply</h3>
<p><strong>Pertanyaan:</strong> Bisakah kita membuat program yang menerima program lain sebagai input dan menentukan apakah program itu akan berhenti atau loop forever?</p>
<p><strong>Jawaban: TIDAK.</strong> Alan Turing membuktikan ini pada tahun 1936.</p>

<h4>Bukti dengan Analogi</h4>
<p>Bayangkan ada sebuah "Oracle" (peramal) bernama H yang bisa menjawab: "Apakah program P berhenti jika diberi input I?"</p>

<div class="code-block"><span class="cm">// Asumsikan Oracle H ada:</span>
<span class="cm">// H(P, I) = true  jika P(I) berhenti</span>
<span class="cm">// H(P, I) = false jika P(I) loop forever</span>

<span class="cm">// Sekarang, buat program PARADOX:</span>
<span class="kw">function</span> <span class="fn">paradox</span>(P) {
    <span class="kw">if</span> (H(P, P) === <span class="num">true</span>) {   <span class="cm">// "P berhenti saat input dirinya sendiri"</span>
        <span class="kw">while</span>(<span class="num">true</span>) {}          <span class="cm">// kita SENGAJA loop forever</span>
    } <span class="kw">else</span> {                    <span class="cm">// "P loop forever"</span>
        <span class="kw">return</span>;                 <span class="cm">// kita SENGAJA berhenti</span>
    }
}

<span class="cm">// Pertanyaan: Apa yang terjadi jika kita jalankan paradox(paradox)?</span>
<span class="cm">//</span>
<span class="cm">// Kasus 1: H bilang paradox(paradox) BERHENTI</span>
<span class="cm">//   Maka masuk if, loop forever &rarr; paradox TIDAK berhenti!</span>
<span class="cm">//   H SALAH!</span>
<span class="cm">//</span>
<span class="cm">// Kasus 2: H bilang paradox(paradox) TIDAK BERHENTI</span>
<span class="cm">//   Maka masuk else, return &rarr; paradox BERHENTI!</span>
<span class="cm">//   H SALAH!</span>
<span class="cm">//</span>
<span class="cm">// Kedua kasus: H selalu salah. &rarr; H tidak mungkin ada. QED.</span></div>

<div class="warn-box">
<strong>Implikasi Halting Problem:</strong>
<ul>
    <li>Tidak ada antivirus yang 100% bisa mendeteksi semua malware.</li>
    <li>Tidak ada compiler yang bisa mendeteksi SEMUA infinite loop.</li>
    <li>Tidak ada tool yang bisa memverifikasi SEMUA program benar.</li>
    <li>Ada batas fundamental pada apa yang bisa dilakukan komputer.</li>
</ul>
</div>
</div>

<!-- ==================== RINGKASAN AKHIR ==================== -->
<h2 class="animate-in">Ringkasan: Kekuatan Komputasi</h2>

<div class="card animate-in">
<div class="table-wrapper">
<table>
<tr><th>Mesin</th><th>Memory</th><th>Bahasa</th><th>Contoh Bahasa</th><th>Closure Properties</th></tr>
<tr><td>DFA / NFA</td><td>Tidak ada (finite)</td><td>Regular (Type 3)</td><td>a*b*, (0|1)*01, email regex</td><td>&cup;, &cap;, *, complement, concat</td></tr>
<tr><td>PDA</td><td>Stack (LIFO, tak terbatas)</td><td>Context-Free (Type 2)</td><td>a&#x207F;b&#x207F;, balanced parens, HTML</td><td>&cup;, *, concat (BUKAN &cap;, complement)</td></tr>
<tr><td>LBA</td><td>Tape terbatas (|input|)</td><td>Context-Sensitive (Type 1)</td><td>a&#x207F;b&#x207F;c&#x207F;</td><td>&cup;, &cap;, complement, *</td></tr>
<tr><td>TM</td><td>Tape tak terbatas</td><td>Recursively Enumerable (Type 0)</td><td>Semua yang bisa dihitung</td><td>&cup;, &cap;, * (BUKAN complement)</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Peta Perjalanan Belajar</h3>
<div class="timeline">
    <div class="timeline-item">
        <h4><span class="badge badge-blue">Langkah 1</span> Pahami DFA</h4>
        <p>Mulai dari mesin paling sederhana. Latihan: buat DFA untuk berbagai pola biner.</p>
    </div>
    <div class="timeline-item">
        <h4><span class="badge badge-blue">Langkah 2</span> Pelajari NFA & Regex</h4>
        <p>Pahami nondeterminism, lalu hubungkan dengan regex yang sudah sering kamu pakai.</p>
    </div>
    <div class="timeline-item">
        <h4><span class="badge badge-green">Langkah 3</span> Kuasai Pumping Lemma</h4>
        <p>Belajar membuktikan bahasa BUKAN regular. Kunci: pemahaman tentang keterbatasan finite state.</p>
    </div>
    <div class="timeline-item">
        <h4><span class="badge badge-green">Langkah 4</span> Eksplorasi PDA & CFG</h4>
        <p>Pahami kekuatan stack. Hubungkan dengan parsing di compiler.</p>
    </div>
    <div class="timeline-item">
        <h4><span class="badge badge-orange">Langkah 5</span> Turing Machine</h4>
        <p>Pahami model komputasi universal. Pelajari decidability dan halting problem.</p>
    </div>
    <div class="timeline-item">
        <h4><span class="badge badge-red">Langkah 6</span> Hierarki Chomsky</h4>
        <p>Lihat big picture: bagaimana semua konsep saling terhubung dalam satu hierarki.</p>
    </div>
</div>
</div>
`;

// ============================================================
// ANIMATIONS — Override initAutomataAnimations
// ============================================================
function initAutomataAnimations() {
    const dpr = window.devicePixelRatio || 1;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const textColor2 = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? '#334155' : '#cbd5e1';
    const bgColor = isDark ? '#1e293b' : '#ffffff';
    const accentColor = '#38bdf8';
    const greenColor = '#34d399';
    const redColor = '#f87171';
    const orangeColor = '#fb923c';
    const purpleColor = '#a78bfa';

    // ---- Shared helpers ----
    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr; c.height = h * dpr;
        c.style.width = w + 'px'; c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }

    function sleep(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    function drawState(ctx, x, y, r, label, active, accept, multi) {
        // Glow effect when active
        if (active) {
            ctx.beginPath(); ctx.arc(x, y, r + 8, 0, Math.PI * 2);
            ctx.fillStyle = multi ? 'rgba(251,146,60,0.1)' : 'rgba(56,189,248,0.1)';
            ctx.fill();
        }
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = active ? (multi ? 'rgba(251,146,60,0.25)' : 'rgba(56,189,248,0.25)') : bgColor;
        ctx.fill();
        ctx.strokeStyle = accept ? greenColor : active ? (multi ? orangeColor : accentColor) : gridColor;
        ctx.lineWidth = active ? 3 : 2;
        ctx.stroke();
        if (accept) {
            ctx.beginPath(); ctx.arc(x, y, r - 5, 0, Math.PI * 2);
            ctx.strokeStyle = greenColor; ctx.lineWidth = 1.5; ctx.stroke();
        }
        ctx.fillStyle = active ? (multi ? orangeColor : accentColor) : textColor;
        ctx.font = (active ? 'bold ' : '') + '14px Inter, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(label, x, y);
    }

    function drawArrow(ctx, x1, y1, x2, y2, label, active, r) {
        r = r || 30;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const sx = x1 + r * Math.cos(angle), sy = y1 + r * Math.sin(angle);
        const ex = x2 - r * Math.cos(angle), ey = y2 - r * Math.sin(angle);
        ctx.strokeStyle = active ? accentColor : gridColor;
        ctx.lineWidth = active ? 2.5 : 1.5;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
        // Arrowhead
        ctx.fillStyle = active ? accentColor : gridColor;
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(ex - 10 * Math.cos(angle - 0.35), ey - 10 * Math.sin(angle - 0.35));
        ctx.lineTo(ex - 10 * Math.cos(angle + 0.35), ey - 10 * Math.sin(angle + 0.35));
        ctx.fill();
        // Label
        const perpX = -Math.sin(angle), perpY = Math.cos(angle);
        const mx = (sx + ex) / 2 + perpX * 14, my = (sy + ey) / 2 + perpY * 14;
        ctx.fillStyle = active ? accentColor : textColor2;
        ctx.font = (active ? 'bold ' : '') + '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(label, mx, my);
    }

    function drawCurvedArrow(ctx, x1, y1, x2, y2, curve, label, active, r) {
        r = r || 30;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const sx = x1 + r * Math.cos(angle + (curve > 0 ? 0.2 : -0.2));
        const sy = y1 + r * Math.sin(angle + (curve > 0 ? 0.2 : -0.2));
        const ex = x2 - r * Math.cos(angle - (curve > 0 ? 0.2 : -0.2));
        const ey = y2 - r * Math.sin(angle - (curve > 0 ? 0.2 : -0.2));
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + curve;
        ctx.strokeStyle = active ? accentColor : gridColor;
        ctx.lineWidth = active ? 2.5 : 1.5;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(mx, my, ex, ey); ctx.stroke();
        // Arrowhead
        const endAngle = Math.atan2(ey - my, ex - mx);
        ctx.fillStyle = active ? accentColor : gridColor;
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(ex - 10 * Math.cos(endAngle - 0.35), ey - 10 * Math.sin(endAngle - 0.35));
        ctx.lineTo(ex - 10 * Math.cos(endAngle + 0.35), ey - 10 * Math.sin(endAngle + 0.35));
        ctx.fill();
        // Label
        ctx.fillStyle = active ? accentColor : textColor2;
        ctx.font = (active ? 'bold ' : '') + '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(label, mx, my + (curve > 0 ? 16 : -8));
    }

    function drawSelfLoop(ctx, x, y, label, active, topSide) {
        const loopY = topSide ? y - 48 : y + 48;
        ctx.strokeStyle = active ? accentColor : gridColor;
        ctx.lineWidth = active ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(x, loopY, 18, 0, Math.PI * 2);
        ctx.stroke();
        // arrowhead on loop
        const arrowAngle = topSide ? Math.PI * 0.7 : Math.PI * 1.3;
        const ax = x + 18 * Math.cos(arrowAngle), ay = loopY + 18 * Math.sin(arrowAngle);
        ctx.fillStyle = active ? accentColor : gridColor;
        ctx.beginPath();
        const a2 = arrowAngle + (topSide ? 0.8 : -0.8);
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax + 7 * Math.cos(a2 - 0.5), ay + 7 * Math.sin(a2 - 0.5));
        ctx.lineTo(ax + 7 * Math.cos(a2 + 0.5), ay + 7 * Math.sin(a2 + 0.5));
        ctx.fill();
        // label
        ctx.fillStyle = active ? accentColor : textColor2;
        ctx.font = (active ? 'bold ' : '') + '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, topSide ? loopY - 24 : loopY + 28);
    }

    function drawStartArrow(ctx, x, y) {
        ctx.strokeStyle = textColor2; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(x - 55, y); ctx.lineTo(x - 32, y); ctx.stroke();
        ctx.fillStyle = textColor2; ctx.beginPath();
        ctx.moveTo(x - 32, y); ctx.lineTo(x - 42, y - 5); ctx.lineTo(x - 42, y + 5); ctx.fill();
        ctx.fillStyle = textColor2; ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('start', x - 55, y - 10);
    }

    function drawInputBar(ctx, inputStr, pos, x, y, w) {
        ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'left';
        ctx.fillStyle = textColor2;
        ctx.fillText('Input:', x - 5, y - 14);
        const charW = 24;
        for (let i = 0; i < inputStr.length; i++) {
            const cx = x + i * charW;
            if (i === pos) {
                ctx.fillStyle = 'rgba(56,189,248,0.18)';
                ctx.fillRect(cx - 2, y - 12, charW - 2, 22);
                ctx.fillStyle = accentColor;
            } else if (i < pos) {
                ctx.fillStyle = textColor2;
            } else {
                ctx.fillStyle = textColor;
            }
            ctx.font = '15px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(inputStr[i], cx + charW / 2 - 2, y + 4);
        }
    }

    // =================================================================
    //  DFA ANIMATION — accepts strings ending with "01"
    // =================================================================
    (function initDFA() {
        const cv = setupCanvas('dfa-canvas', 700, 320);
        if (!cv) return;
        const { c, ctx, w, h } = cv;

        const states = [
            { id: 'q0', x: 150, y: 160, accept: false },
            { id: 'q1', x: 350, y: 160, accept: false },
            { id: 'q2', x: 550, y: 160, accept: true }
        ];
        // delta(q0,0)=q1, delta(q0,1)=q0, delta(q1,0)=q1, delta(q1,1)=q2, delta(q2,0)=q1, delta(q2,1)=q0
        const delta = {
            'q0': { '0': 'q1', '1': 'q0' },
            'q1': { '0': 'q1', '1': 'q2' },
            'q2': { '0': 'q1', '1': 'q0' }
        };

        let currentState = 'q0';
        let inputPos = -1;
        let running = false;
        let inputStr = '';
        let activeTransition = null;

        function getState(id) { return states.find(s => s.id === id); }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            // Title
            ctx.fillStyle = textColor; ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('DFA: Menerima string berakhiran "01"', w / 2, 22);

            // draw transitions
            // q0 --0--> q1
            drawArrow(ctx, 150, 160, 350, 160, '0', activeTransition === 'q0-0');
            // q1 --1--> q2
            drawArrow(ctx, 350, 160, 550, 160, '1', activeTransition === 'q1-1');
            // q2 --0--> q1
            drawCurvedArrow(ctx, 550, 160, 350, 160, -55, '0', activeTransition === 'q2-0');
            // q2 --1--> q0
            drawCurvedArrow(ctx, 550, 160, 150, 160, 70, '1', activeTransition === 'q2-1');
            // q0 self-loop on 1
            drawSelfLoop(ctx, 150, 160, '1', activeTransition === 'q0-1', true);
            // q1 self-loop on 0
            drawSelfLoop(ctx, 350, 160, '0', activeTransition === 'q1-0', true);

            // draw start arrow
            drawStartArrow(ctx, 150, 160);

            // draw states
            states.forEach(s => {
                drawState(ctx, s.x, s.y, 30, s.id, currentState === s.id, s.accept);
            });

            // draw input bar
            if (inputStr.length > 0) {
                drawInputBar(ctx, inputStr, inputPos, 150, h - 40, w);
            }
        }

        async function runDFA() {
            if (running) return;
            const input = document.getElementById('dfa-input');
            if (!input) return;
            inputStr = input.value.replace(/[^01]/g, '');
            if (!inputStr) { document.getElementById('dfa-result').textContent = 'Masukkan string biner!'; return; }
            running = true;
            currentState = 'q0';
            inputPos = -1;
            activeTransition = null;
            const resultEl = document.getElementById('dfa-result');
            resultEl.textContent = 'Memproses...';
            resultEl.style.color = accentColor;
            draw();
            await sleep(500);

            for (let i = 0; i < inputStr.length; i++) {
                inputPos = i;
                const ch = inputStr[i];
                const from = currentState;
                activeTransition = from + '-' + ch;
                draw();
                await sleep(600);
                currentState = delta[from][ch];
                activeTransition = null;
                draw();
                await sleep(300);
            }

            inputPos = inputStr.length;
            const accepted = getState(currentState).accept;
            resultEl.textContent = accepted ? 'DITERIMA (Accept)' : 'DITOLAK (Reject)';
            resultEl.style.color = accepted ? greenColor : redColor;
            draw();
            running = false;
        }

        function resetDFA() {
            running = false;
            currentState = 'q0';
            inputPos = -1;
            inputStr = '';
            activeTransition = null;
            const resultEl = document.getElementById('dfa-result');
            if (resultEl) { resultEl.textContent = ''; }
            draw();
        }

        const runBtn = document.getElementById('run-dfa');
        const resetBtn = document.getElementById('reset-dfa');
        if (runBtn) runBtn.addEventListener('click', runDFA);
        if (resetBtn) resetBtn.addEventListener('click', resetDFA);
        draw();
    })();

    // =================================================================
    //  NFA ANIMATION — accepts strings containing "11"
    // =================================================================
    (function initNFA() {
        const cv = setupCanvas('nfa-canvas', 700, 320);
        if (!cv) return;
        const { c, ctx, w, h } = cv;

        const states = [
            { id: 'q0', x: 150, y: 160, accept: false },
            { id: 'q1', x: 350, y: 160, accept: false },
            { id: 'q2', x: 550, y: 160, accept: true }
        ];

        // NFA transitions — returns array of next states
        const delta = {
            'q0': { '0': ['q0'], '1': ['q0', 'q1'] },
            'q1': { '0': [], '1': ['q2'] },
            'q2': { '0': ['q2'], '1': ['q2'] }
        };

        let activeStates = new Set(['q0']);
        let inputPos = -1;
        let running = false;
        let inputStr = '';
        let highlightTransitions = new Set();

        function getState(id) { return states.find(s => s.id === id); }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = textColor; ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('NFA: Menerima string mengandung "11"', w / 2, 22);

            // draw transitions
            // q0 --0--> q0 self-loop
            drawSelfLoop(ctx, 150, 160, '0', highlightTransitions.has('q0-0'), true);
            // q0 --1--> q0 self-loop (curved up-left)
            drawSelfLoop(ctx, 150, 160, '1', highlightTransitions.has('q0-1-self'), false);
            // q0 --1--> q1
            drawArrow(ctx, 150, 160, 350, 160, '1', highlightTransitions.has('q0-1'));
            // q1 --1--> q2
            drawArrow(ctx, 350, 160, 550, 160, '1', highlightTransitions.has('q1-1'));
            // q2 self-loop 0,1
            drawSelfLoop(ctx, 550, 160, '0,1', highlightTransitions.has('q2-any'), true);

            // start arrow
            drawStartArrow(ctx, 150, 160);

            // draw states — highlight ALL active states with multi color
            states.forEach(s => {
                drawState(ctx, s.x, s.y, 30, s.id, activeStates.has(s.id), s.accept, activeStates.size > 1 && activeStates.has(s.id));
            });

            // active states indicator
            if (activeStates.size > 0 && running) {
                ctx.fillStyle = textColor2; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'left';
                ctx.fillText('State aktif: {' + [...activeStates].join(', ') + '}', 20, h - 60);
            }

            // draw input bar
            if (inputStr.length > 0) {
                drawInputBar(ctx, inputStr, inputPos, 150, h - 35, w);
            }
        }

        async function runNFA() {
            if (running) return;
            const input = document.getElementById('nfa-input');
            if (!input) return;
            inputStr = input.value.replace(/[^01]/g, '');
            if (!inputStr) { document.getElementById('nfa-result').textContent = 'Masukkan string biner!'; return; }
            running = true;
            activeStates = new Set(['q0']);
            inputPos = -1;
            highlightTransitions = new Set();
            const resultEl = document.getElementById('nfa-result');
            resultEl.textContent = 'Memproses...';
            resultEl.style.color = accentColor;
            draw();
            await sleep(500);

            for (let i = 0; i < inputStr.length; i++) {
                inputPos = i;
                const ch = inputStr[i];
                highlightTransitions = new Set();
                const nextStates = new Set();
                for (const st of activeStates) {
                    const targets = delta[st] && delta[st][ch] ? delta[st][ch] : [];
                    for (const t of targets) {
                        nextStates.add(t);
                        if (st === 'q0' && ch === '1' && t === 'q0') highlightTransitions.add('q0-1-self');
                        else if (st === 'q0' && ch === '1' && t === 'q1') highlightTransitions.add('q0-1');
                        else if (st === 'q0' && ch === '0') highlightTransitions.add('q0-0');
                        else if (st === 'q1' && ch === '1') highlightTransitions.add('q1-1');
                        else if (st === 'q2') highlightTransitions.add('q2-any');
                    }
                }
                draw();
                await sleep(600);
                activeStates = nextStates;
                highlightTransitions = new Set();
                draw();
                await sleep(400);
            }

            inputPos = inputStr.length;
            let accepted = false;
            for (const s of activeStates) {
                if (getState(s).accept) accepted = true;
            }
            resultEl.textContent = accepted ? 'DITERIMA (Accept)' : 'DITOLAK (Reject)';
            resultEl.style.color = accepted ? greenColor : redColor;
            draw();
            running = false;
        }

        function resetNFA() {
            running = false;
            activeStates = new Set(['q0']);
            inputPos = -1;
            inputStr = '';
            highlightTransitions = new Set();
            const resultEl = document.getElementById('nfa-result');
            if (resultEl) resultEl.textContent = '';
            draw();
        }

        const runBtn = document.getElementById('run-nfa');
        const resetBtn = document.getElementById('reset-nfa');
        if (runBtn) runBtn.addEventListener('click', runNFA);
        if (resetBtn) resetBtn.addEventListener('click', resetNFA);
        draw();
    })();

    // =================================================================
    //  PDA ANIMATION — accepts {a^n b^n | n >= 1}
    // =================================================================
    (function initPDA() {
        const cv = setupCanvas('pda-canvas', 700, 340);
        if (!cv) return;
        const { c, ctx, w, h } = cv;

        const statePositions = {
            'q0': { x: 120, y: 170 },
            'q1': { x: 300, y: 170 },
            'q_acc': { x: 470, y: 170 }
        };

        let currentState = 'q0';
        let stack = ['Z0'];
        let inputPos = -1;
        let running = false;
        let inputStr = '';
        let status = '';
        let activeTransition = '';

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = textColor; ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('PDA: Menerima bahasa {a^n b^n | n >= 1}', w / 2 - 30, 22);

            // transitions
            // q0 --a, push A--> q0 (self-loop)
            drawSelfLoop(ctx, 120, 170, 'a, push A', activeTransition === 'q0-a', true);
            // q0 --b, pop A--> q1
            drawArrow(ctx, 120, 170, 300, 170, 'b, pop A', activeTransition === 'q0-b');
            // q1 --b, pop A--> q1 (self-loop)
            drawSelfLoop(ctx, 300, 170, 'b, pop A', activeTransition === 'q1-b', true);
            // q1 --eps, Z0--> q_acc
            drawArrow(ctx, 300, 170, 470, 170, 'e, Z0', activeTransition === 'q1-e');

            drawStartArrow(ctx, 120, 170);

            // draw states
            const allStates = [
                { id: 'q0', x: 120, y: 170, accept: false },
                { id: 'q1', x: 300, y: 170, accept: false },
                { id: 'q_acc', x: 470, y: 170, accept: true }
            ];
            allStates.forEach(s => {
                drawState(ctx, s.x, s.y, 30, s.id === 'q_acc' ? 'qacc' : s.id, currentState === s.id, s.accept);
            });

            // draw stack
            const stackX = 600, stackBaseY = h - 40;
            ctx.fillStyle = textColor2; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'center';
            ctx.fillText('Stack', stackX + 30, 50);
            ctx.strokeStyle = gridColor; ctx.lineWidth = 1.5;
            // stack container
            ctx.beginPath();
            ctx.moveTo(stackX, 58); ctx.lineTo(stackX, stackBaseY);
            ctx.lineTo(stackX + 60, stackBaseY); ctx.lineTo(stackX + 60, 58);
            ctx.stroke();
            // stack items
            for (let i = 0; i < stack.length; i++) {
                const sy = stackBaseY - (i + 1) * 28;
                const isTop = i === stack.length - 1;
                ctx.fillStyle = isTop ? 'rgba(56,189,248,0.15)' : 'rgba(100,116,139,0.08)';
                ctx.fillRect(stackX + 2, sy, 56, 26);
                ctx.strokeStyle = isTop ? accentColor : gridColor;
                ctx.lineWidth = isTop ? 2 : 1;
                ctx.strokeRect(stackX + 2, sy, 56, 26);
                ctx.fillStyle = isTop ? accentColor : textColor;
                ctx.font = (isTop ? 'bold ' : '') + '13px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(stack[i], stackX + 30, sy + 17);
            }
            if (stack.length === 0) {
                ctx.fillStyle = textColor2; ctx.font = '11px Inter, sans-serif';
                ctx.fillText('(kosong)', stackX + 30, stackBaseY - 14);
            }

            // status
            if (status) {
                ctx.fillStyle = textColor2; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'left';
                ctx.fillText(status, 20, h - 60);
            }

            // input bar
            if (inputStr.length > 0) {
                drawInputBar(ctx, inputStr, inputPos, 120, h - 30, w);
            }
        }

        async function runPDA() {
            if (running) return;
            const input = document.getElementById('pda-input');
            if (!input) return;
            inputStr = input.value.replace(/[^ab]/g, '');
            if (!inputStr) { document.getElementById('pda-result').textContent = 'Masukkan string a dan b!'; return; }
            running = true;
            currentState = 'q0';
            stack = ['Z0'];
            inputPos = -1;
            activeTransition = '';
            const resultEl = document.getElementById('pda-result');
            resultEl.textContent = 'Memproses...';
            resultEl.style.color = accentColor;
            draw();
            await sleep(500);

            let error = false;
            for (let i = 0; i < inputStr.length; i++) {
                inputPos = i;
                const ch = inputStr[i];

                if (currentState === 'q0' && ch === 'a') {
                    activeTransition = 'q0-a';
                    status = `Baca '${ch}': push A ke stack`;
                    draw();
                    await sleep(600);
                    stack.push('A');
                    activeTransition = '';
                    draw();
                    await sleep(300);
                } else if (currentState === 'q0' && ch === 'b') {
                    if (stack.length > 1 && stack[stack.length - 1] === 'A') {
                        activeTransition = 'q0-b';
                        status = `Baca '${ch}': pop A, pindah ke q1`;
                        draw();
                        await sleep(600);
                        stack.pop();
                        currentState = 'q1';
                        activeTransition = '';
                        draw();
                        await sleep(300);
                    } else {
                        status = `Error: baca 'b' tapi stack tidak punya A!`;
                        error = true;
                        draw();
                        break;
                    }
                } else if (currentState === 'q1' && ch === 'b') {
                    if (stack.length > 1 && stack[stack.length - 1] === 'A') {
                        activeTransition = 'q1-b';
                        status = `Baca '${ch}': pop A dari stack`;
                        draw();
                        await sleep(600);
                        stack.pop();
                        activeTransition = '';
                        draw();
                        await sleep(300);
                    } else {
                        status = `Error: baca 'b' tapi stack tidak punya A!`;
                        error = true;
                        draw();
                        break;
                    }
                } else if (currentState === 'q1' && ch === 'a') {
                    status = `Error: baca 'a' setelah sudah mulai baca 'b'!`;
                    error = true;
                    draw();
                    break;
                } else {
                    status = `Error: transisi tidak valid`;
                    error = true;
                    draw();
                    break;
                }
            }

            if (!error) {
                inputPos = inputStr.length;
                // check epsilon transition: q1 with Z0 on stack -> q_acc
                if (currentState === 'q1' && stack.length === 1 && stack[0] === 'Z0') {
                    activeTransition = 'q1-e';
                    status = 'epsilon-transition: stack hanya Z0, pindah ke q_acc';
                    draw();
                    await sleep(600);
                    currentState = 'q_acc';
                    activeTransition = '';
                    draw();
                    await sleep(300);
                }
            }

            const accepted = currentState === 'q_acc' && !error;
            resultEl.textContent = accepted ? 'DITERIMA (Accept)' : 'DITOLAK (Reject)';
            resultEl.style.color = accepted ? greenColor : redColor;
            if (!error && !accepted) {
                if (stack.length > 1) status = 'Ditolak: masih ada A di stack (a lebih banyak dari b)';
                else if (currentState === 'q0') status = 'Ditolak: belum pernah baca b';
                else status = 'Ditolak: state akhir bukan accept state';
            }
            draw();
            running = false;
        }

        function resetPDA() {
            running = false;
            currentState = 'q0';
            stack = ['Z0'];
            inputPos = -1;
            inputStr = '';
            activeTransition = '';
            status = '';
            const resultEl = document.getElementById('pda-result');
            if (resultEl) resultEl.textContent = '';
            draw();
        }

        const runBtn = document.getElementById('run-pda');
        const resetBtn = document.getElementById('reset-pda');
        if (runBtn) runBtn.addEventListener('click', runPDA);
        if (resetBtn) resetBtn.addEventListener('click', resetPDA);
        draw();
    })();

    // =================================================================
    //  TURING MACHINE ANIMATION — Binary Increment
    // =================================================================
    (function initTM() {
        const cv = setupCanvas('tm-canvas', 700, 280);
        if (!cv) return;
        const { c, ctx, w, h } = cv;

        let tape = [];
        let headPos = 0;
        let currentState = 'q0';
        let running = false;
        let inputStr = '';
        let statusMsg = '';

        const CELL_W = 44;
        const TAPE_Y = 100;
        const VISIBLE_CELLS = 13;

        function initTape(input) {
            tape = ['B'];
            for (const ch of input) tape.push(ch);
            tape.push('B'); tape.push('B'); tape.push('B');
            headPos = 1; // start at first digit
            currentState = 'q0';
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = textColor; ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Turing Machine: Binary Increment (+1)', w / 2, 22);

            // current state display
            ctx.fillStyle = accentColor; ctx.font = 'bold 16px monospace';
            ctx.fillText('State: ' + currentState, w / 2, 50);

            // tape
            const startCell = Math.max(0, headPos - Math.floor(VISIBLE_CELLS / 2));
            const tapeStartX = (w - VISIBLE_CELLS * CELL_W) / 2;

            for (let i = 0; i < VISIBLE_CELLS; i++) {
                const cellIdx = startCell + i;
                const x = tapeStartX + i * CELL_W;
                const isHead = cellIdx === headPos;

                // cell background
                ctx.fillStyle = isHead ? 'rgba(56,189,248,0.18)' : 'rgba(100,116,139,0.05)';
                ctx.fillRect(x, TAPE_Y, CELL_W - 2, CELL_W);
                ctx.strokeStyle = isHead ? accentColor : gridColor;
                ctx.lineWidth = isHead ? 2.5 : 1;
                ctx.strokeRect(x, TAPE_Y, CELL_W - 2, CELL_W);

                // cell content
                const sym = cellIdx >= 0 && cellIdx < tape.length ? tape[cellIdx] : 'B';
                ctx.fillStyle = isHead ? accentColor : (sym === 'B' ? textColor2 : textColor);
                ctx.font = (isHead ? 'bold 18px' : '16px') + ' monospace';
                ctx.textAlign = 'center';
                ctx.fillText(sym, x + CELL_W / 2 - 1, TAPE_Y + CELL_W / 2 + 6);
            }

            // head arrow
            const headX = tapeStartX + (headPos - startCell) * CELL_W + CELL_W / 2 - 1;
            ctx.fillStyle = accentColor;
            ctx.beginPath();
            ctx.moveTo(headX, TAPE_Y - 2);
            ctx.lineTo(headX - 8, TAPE_Y - 18);
            ctx.lineTo(headX + 8, TAPE_Y - 18);
            ctx.fill();
            ctx.fillStyle = accentColor; ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText('HEAD', headX, TAPE_Y - 24);

            // tape label
            ctx.fillStyle = textColor2; ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'left'; ctx.fillText('... ', tapeStartX - 20, TAPE_Y + CELL_W / 2 + 4);
            ctx.textAlign = 'right'; ctx.fillText(' ...', tapeStartX + VISIBLE_CELLS * CELL_W + 20, TAPE_Y + CELL_W / 2 + 4);

            // status
            if (statusMsg) {
                ctx.fillStyle = textColor2; ctx.font = '12px Inter, sans-serif'; ctx.textAlign = 'center';
                ctx.fillText(statusMsg, w / 2, TAPE_Y + CELL_W + 35);
            }

            // result tape value
            const tapeContent = tape.filter(c => c !== 'B').join('');
            if (tapeContent) {
                ctx.fillStyle = textColor2; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'center';
                ctx.fillText('Tape: ' + tapeContent + ' (desimal: ' + parseInt(tapeContent, 2) + ')', w / 2, h - 15);
            }
        }

        async function runTM() {
            if (running) return;
            const input = document.getElementById('tm-input');
            if (!input) return;
            inputStr = input.value.replace(/[^01]/g, '');
            if (!inputStr) { document.getElementById('tm-result').textContent = 'Masukkan bilangan biner!'; return; }
            running = true;
            initTape(inputStr);
            const resultEl = document.getElementById('tm-result');
            resultEl.textContent = 'Memproses...';
            resultEl.style.color = accentColor;
            statusMsg = 'Fase 1: Gerak ke kanan untuk menemukan ujung';
            draw();
            await sleep(600);

            // Phase 1: move right to find end
            currentState = 'q0';
            while (tape[headPos] !== 'B') {
                statusMsg = `q0: Baca '${tape[headPos]}', gerak kanan`;
                draw();
                await sleep(400);
                headPos++;
                if (headPos >= tape.length) tape.push('B');
                draw();
                await sleep(200);
            }
            // now headPos is on B, move left
            statusMsg = 'q0: Baca B (blank), gerak kiri, pindah ke q1 (mode add)';
            draw();
            await sleep(500);
            headPos--;
            currentState = 'q1';
            draw();
            await sleep(500);

            // Phase 2: increment
            statusMsg = 'Fase 2: Tambahkan 1 dari digit paling kanan';
            draw();
            await sleep(400);

            let halted = false;
            while (!halted) {
                const sym = headPos >= 0 ? tape[headPos] : 'B';
                if (sym === '1') {
                    statusMsg = `q1: Baca '1' -> tulis '0' (carry), gerak kiri`;
                    tape[headPos] = '0';
                    draw();
                    await sleep(500);
                    headPos--;
                    if (headPos < 0) {
                        tape.unshift('B');
                        headPos = 0;
                    }
                    draw();
                    await sleep(300);
                } else if (sym === '0') {
                    statusMsg = `q1: Baca '0' -> tulis '1', HALT (selesai!)`;
                    tape[headPos] = '1';
                    currentState = 'halt';
                    halted = true;
                    draw();
                    await sleep(500);
                } else { // B
                    statusMsg = `q1: Baca 'B' -> tulis '1' (digit baru), HALT`;
                    tape[headPos] = '1';
                    currentState = 'halt';
                    halted = true;
                    draw();
                    await sleep(500);
                }
            }

            const result = tape.filter(c => c !== 'B').join('');
            resultEl.textContent = `Hasil: ${inputStr} (${parseInt(inputStr, 2)}) + 1 = ${result} (${parseInt(result, 2)})`;
            resultEl.style.color = greenColor;
            statusMsg = 'Selesai! Turing Machine berhenti (HALT).';
            draw();
            running = false;
        }

        function resetTM() {
            running = false;
            tape = ['B', '1', '0', '1', '1', 'B', 'B'];
            headPos = 1;
            currentState = 'q0';
            statusMsg = '';
            const resultEl = document.getElementById('tm-result');
            if (resultEl) resultEl.textContent = '';
            draw();
        }

        const runBtn = document.getElementById('run-tm');
        const resetBtn = document.getElementById('reset-tm');
        if (runBtn) runBtn.addEventListener('click', runTM);
        if (resetBtn) resetBtn.addEventListener('click', resetTM);
        resetTM();
    })();
}
