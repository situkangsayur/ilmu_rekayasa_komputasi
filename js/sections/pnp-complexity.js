// ============================================================
// P=NP & HUBUNGANNYA — Complexity, Algorithms, Data Structures
// ============================================================

sections['pnp'] = () => `

<!-- ==================== SECTION 1: P=NP DEEP DIVE ==================== -->
<h1 class="section-title animate-in">P = NP Problem & Hubungannya</h1>
<p class="section-subtitle animate-in">Memahami masalah terbesar dalam ilmu komputer dan koneksinya dengan algoritma, struktur data, serta implementasi di C, Go, dan Rust</p>

<div class="card animate-in">
<h2>Apa Itu Masalah P vs NP?</h2>
<p>Masalah <strong>P vs NP</strong> adalah salah satu dari tujuh <strong>Millennium Prize Problems</strong> yang ditetapkan oleh Clay Mathematics Institute pada tahun 2000. Siapapun yang berhasil membuktikan atau membantahnya akan mendapatkan hadiah <strong>$1.000.000 USD</strong>.</p>
<p>Pertanyaan intinya sederhana namun sangat dalam: <em>"Apakah setiap masalah yang solusinya dapat diverifikasi dengan cepat, juga dapat diselesaikan dengan cepat?"</em></p>
</div>

<div class="card-grid animate-in">
<div class="card">
<h3><span class="badge badge-green">Class P</span></h3>
<p><strong>P (Polynomial Time)</strong> adalah kelas masalah yang dapat <em>diselesaikan</em> oleh Deterministic Turing Machine dalam waktu polynomial O(n^k) untuk suatu konstanta k.</p>
<h4>Contoh masalah dalam P:</h4>
<ul>
    <li><strong>Sorting</strong> — O(n log n)</li>
    <li><strong>Shortest Path</strong> (Dijkstra) — O(V² atau E log V)</li>
    <li><strong>Binary Search</strong> — O(log n)</li>
    <li><strong>Matrix Multiplication</strong> — O(n³)</li>
    <li><strong>Linear Programming</strong> — polynomial</li>
    <li><strong>Primality Testing</strong> (AKS) — O(log^6 n)</li>
</ul>
<div class="info-box">Semua masalah di class P memiliki algoritma efisien yang diketahui. Kita bisa menyelesaikannya dalam waktu "wajar" bahkan untuk input besar.</div>
</div>

<div class="card">
<h3><span class="badge badge-blue">Class NP</span></h3>
<p><strong>NP (Nondeterministic Polynomial Time)</strong> adalah kelas masalah yang solusinya dapat <em>diverifikasi</em> oleh Deterministic Turing Machine dalam waktu polynomial.</p>
<h4>Contoh masalah dalam NP:</h4>
<ul>
    <li><strong>Boolean Satisfiability (SAT)</strong></li>
    <li><strong>Travelling Salesman Problem (TSP)</strong></li>
    <li><strong>Graph Coloring</strong></li>
    <li><strong>Hamiltonian Cycle</strong></li>
    <li><strong>Subset Sum</strong></li>
    <li><strong>Clique Problem</strong></li>
</ul>
<div class="warn-box">NP BUKAN berarti "Non-Polynomial"! NP berarti "Nondeterministic Polynomial" — solusinya bisa diverifikasi dalam polynomial time, tapi belum tentu bisa ditemukan dalam polynomial time.</div>
</div>
</div>

<div class="card-grid animate-in">
<div class="card">
<h3><span class="badge badge-red">NP-Hard</span></h3>
<p><strong>NP-Hard</strong> adalah kelas masalah yang <em>setidaknya sesulit</em> masalah tersulit di NP. Setiap masalah di NP dapat direduksi ke masalah NP-Hard dalam polynomial time.</p>
<ul>
    <li>Tidak harus decision problem (bisa optimization)</li>
    <li><strong>Halting Problem</strong> — NP-Hard tapi bahkan tidak bisa diverifikasi</li>
    <li><strong>Generalized Chess</strong> — EXPTIME-complete</li>
    <li>Bisa lebih sulit dari NP</li>
</ul>
</div>

<div class="card">
<h3><span class="badge badge-purple">NP-Complete</span></h3>
<p><strong>NP-Complete</strong> adalah irisan antara NP dan NP-Hard. Masalah yang berada di NP <em>dan</em> sesulit masalah tersulit di NP.</p>
<ul>
    <li><strong>SAT</strong> — masalah NP-Complete pertama (Cook-Levin theorem, 1971)</li>
    <li><strong>3-SAT, Vertex Cover, Clique, Subset Sum</strong></li>
    <li>Jika SATU masalah NP-Complete bisa diselesaikan dalam P, maka <strong>P = NP</strong></li>
    <li>Ini adalah "gerbang" antara P dan NP</li>
</ul>
<div class="success-box">Stephen Cook (1971) membuktikan bahwa SAT adalah NP-Complete. Richard Karp (1972) kemudian menunjukkan 21 masalah NP-Complete lainnya melalui polynomial-time reduction.</div>
</div>
</div>

<!-- Venn Diagram Visual -->
<div class="card animate-in">
<h3>Visual: Hubungan P, NP, NP-Hard, NP-Complete</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="venn-pneqnp">Asumsi P &#8800; NP (dipercaya)</button>
    <button class="tab-btn" data-tab="venn-peqnp">Hipotesis P = NP</button>
</div>

<div data-tab-content="venn-pneqnp" class="tab-content active">
<div class="anim-container">
    <canvas id="venn-diagram-canvas" width="700" height="420"></canvas>
</div>
<div class="info-box">
<strong>Jika P &#8800; NP (konsensus mayoritas):</strong>
<ul>
    <li><strong>P</strong> berada sepenuhnya di dalam <strong>NP</strong></li>
    <li><strong>NP-Complete</strong> adalah irisan <strong>NP</strong> dan <strong>NP-Hard</strong> (dan TIDAK di dalam P)</li>
    <li>Ada masalah di <strong>NP</strong> yang bukan P dan bukan NP-Complete (contoh: Graph Isomorphism — NP-Intermediate)</li>
    <li><strong>NP-Hard</strong> melampaui NP (mencakup masalah undecidable)</li>
</ul>
</div>
</div>

<div data-tab-content="venn-peqnp" class="tab-content">
<div class="flow-diagram">
    <div class="flow-node" style="background:var(--success);">P = NP</div>
    <div class="flow-arrow">=</div>
    <div class="flow-node" style="background:var(--primary);">NP-Complete &#8838; P</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:var(--danger);">Kriptografi Runtuh!</div>
</div>
<div class="warn-box">
<strong>Jika P = NP:</strong> Semua masalah NP (termasuk NP-Complete) bisa diselesaikan dalam polynomial time. RSA, AES, dan semua kriptografi modern menjadi tidak aman. Namun, optimasi dan AI akan mengalami revolusi besar.
</div>
</div>
</div>

<!-- Millennium Prize -->
<div class="card animate-in">
<h3>Millennium Prize & Mengapa P vs NP Penting</h3>
<div class="pipeline">
    <div class="pipeline-stage">
        <div class="stage-title">$1 Juta</div>
        <div class="stage-desc">Hadiah Clay Mathematics Institute</div>
    </div>
    <div class="pipeline-stage">
        <div class="stage-title">Sejak 2000</div>
        <div class="stage-desc">Belum terpecahkan &gt;25 tahun</div>
    </div>
    <div class="pipeline-stage">
        <div class="stage-title">7 Masalah</div>
        <div class="stage-desc">Hanya 1 (Poincare) terpecahkan</div>
    </div>
    <div class="pipeline-stage">
        <div class="stage-title">Dampak</div>
        <div class="stage-desc">Mengubah seluruh ilmu komputer</div>
    </div>
</div>
<p>Mayoritas ilmuwan komputer percaya <strong>P &#8800; NP</strong>, namun belum ada bukti formal. Hal ini berarti ada masalah-masalah yang secara inheren sulit — tidak ada algoritma "pintar" yang bisa menyelesaikannya secara efisien.</p>
</div>

<!-- ==================== SECTION 2: COMPLEXITY → ALGORITHMS ==================== -->
<h2 class="section-title animate-in">Koneksi: Complexity &#8594; Algoritma</h2>
<p class="section-subtitle animate-in">Bagaimana kelas kompleksitas memandu desain algoritma</p>

<div class="card animate-in">
<h3>Strategi Berdasarkan Kelas Kompleksitas</h3>
<div class="table-wrapper">
<table>
<tr><th>Kelas</th><th>Strategi Algoritma</th><th>Contoh</th><th>Time Complexity</th></tr>
<tr><td><span class="badge badge-green">P</span></td><td>Exact algorithm — gunakan langsung</td><td>Sorting, Search, Shortest Path</td><td>O(n log n), O(log n), O(V+E)</td></tr>
<tr><td><span class="badge badge-blue">NP (easy cases)</span></td><td>Dynamic Programming, heuristic</td><td>Knapsack (pseudo-poly), subset sum</td><td>O(nW), O(n*sum)</td></tr>
<tr><td><span class="badge badge-purple">NP-Complete</span></td><td>Approximation, backtracking, metaheuristic</td><td>TSP (2-approx), SAT solver</td><td>Approx: polynomial, Exact: exponential</td></tr>
<tr><td><span class="badge badge-red">NP-Hard</span></td><td>Heuristic, genetic algorithm, simulated annealing</td><td>Optimization, scheduling</td><td>Varies, usually exponential for exact</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Kapan Menggunakan Exact vs Approximate Algorithm?</h3>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-green">Exact Algorithm</span></h4>
<p>Gunakan ketika:</p>
<ul>
    <li>Masalah ada di class <strong>P</strong></li>
    <li>Input size kecil (n &lt; 20 untuk exponential)</li>
    <li>Solusi optimal mutlak diperlukan</li>
    <li>Contoh: bank transaction verification</li>
</ul>
</div>
<div class="card">
<h4><span class="badge badge-orange">Approximation Algorithm</span></h4>
<p>Gunakan ketika:</p>
<ul>
    <li>Masalah <strong>NP-Hard</strong> dengan input besar</li>
    <li>Solusi "cukup baik" dapat diterima</li>
    <li>Ada <em>approximation ratio</em> yang terjamin</li>
    <li>Contoh: logistics routing (TSP 1.5-approx)</li>
</ul>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Time Complexity Hierarchy</h3>
<div class="layer-diagram">
    <div class="layer-item" style="background: linear-gradient(135deg, #00b894, #00cec9);">O(1) — Constant: Hash table lookup, array index access</div>
    <div class="layer-item" style="background: linear-gradient(135deg, #00cec9, #0984e3);">O(log n) — Logarithmic: Binary search, balanced BST</div>
    <div class="layer-item" style="background: linear-gradient(135deg, #0984e3, #6c5ce7);">O(n) — Linear: Linear search, single traversal</div>
    <div class="layer-item" style="background: linear-gradient(135deg, #6c5ce7, #a29bfe);">O(n log n) — Linearithmic: Merge sort, heap sort</div>
    <div class="layer-item" style="background: linear-gradient(135deg, #a29bfe, #fd79a8);">O(n²) — Quadratic: Bubble sort, nested loops</div>
    <div class="layer-item" style="background: linear-gradient(135deg, #fd79a8, #e17055);">O(2^n) — Exponential: Brute force subset, recursive fib</div>
    <div class="layer-item" style="background: linear-gradient(135deg, #e17055, #d63031);">O(n!) — Factorial: Permutation, brute force TSP</div>
</div>
</div>

<!-- ==================== SECTION 3: ALGORITHMS → DATA STRUCTURES ==================== -->
<h2 class="section-title animate-in">Koneksi: Algoritma &#8594; Struktur Data</h2>
<p class="section-subtitle animate-in">Struktur data yang tepat memungkinkan algoritma yang efisien</p>

<div class="card animate-in">
<h3>Peta Hubungan: Data Structure &#8594; Algoritma &#8594; Complexity</h3>
<div class="table-wrapper">
<table>
<tr><th>Data Structure</th><th>Operasi Kunci</th><th>Complexity</th><th>Algoritma yang Dimungkinkan</th></tr>
<tr><td><strong>Hash Table</strong></td><td>Insert, Lookup, Delete</td><td>O(1) average</td><td>Two Sum, Counting, Deduplication, Caching</td></tr>
<tr><td><strong>Binary Search Tree</strong></td><td>Search, Insert, Delete</td><td>O(log n)</td><td>Range queries, Ordered traversal, Floor/Ceil</td></tr>
<tr><td><strong>Heap / Priority Queue</strong></td><td>Insert, Extract-Min/Max</td><td>O(log n)</td><td>Dijkstra, Huffman, Greedy scheduling, K-th element</td></tr>
<tr><td><strong>Graph (Adj List)</strong></td><td>Add Edge, Traverse</td><td>O(V+E)</td><td>BFS, DFS, Topological Sort, SCC</td></tr>
<tr><td><strong>Disjoint Set (Union-Find)</strong></td><td>Union, Find</td><td>O(&#945;(n)) &#8776; O(1)</td><td>Kruskal MST, Connected Components</td></tr>
<tr><td><strong>Trie</strong></td><td>Insert, Search prefix</td><td>O(m) m=key length</td><td>Autocomplete, Spell check, IP routing</td></tr>
<tr><td><strong>Segment Tree</strong></td><td>Query, Update range</td><td>O(log n)</td><td>Range sum/min/max, Lazy propagation</td></tr>
<tr><td><strong>Stack</strong></td><td>Push, Pop, Peek</td><td>O(1)</td><td>DFS, Expression eval, Backtracking</td></tr>
<tr><td><strong>Queue</strong></td><td>Enqueue, Dequeue</td><td>O(1)</td><td>BFS, Level-order traversal, Scheduling</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Trade-offs dalam Pemilihan Data Structure</h3>
<div class="card-grid-3">
<div class="card">
<h4><span class="badge badge-green">Array vs Linked List</span></h4>
<p><strong>Array:</strong> O(1) random access, cache-friendly, tapi O(n) insert di tengah.</p>
<p><strong>Linked List:</strong> O(1) insert/delete di head, tapi O(n) access dan cache-unfriendly.</p>
<div class="info-box">Gunakan array untuk data statis dengan banyak akses random. Gunakan linked list untuk frequent insertion/deletion.</div>
</div>
<div class="card">
<h4><span class="badge badge-blue">Hash Table vs BST</span></h4>
<p><strong>Hash Table:</strong> O(1) average lookup, tapi no ordering dan worst case O(n).</p>
<p><strong>BST:</strong> O(log n) lookup, tapi supports ordered operations (range query, successor).</p>
<div class="info-box">Gunakan hash table untuk pure lookup. Gunakan BST ketika butuh data terurut atau range query.</div>
</div>
<div class="card">
<h4><span class="badge badge-purple">Heap vs Sorted Array</span></h4>
<p><strong>Heap:</strong> O(log n) insert dan extract-min, O(n) build.</p>
<p><strong>Sorted Array:</strong> O(log n) search (binary), tapi O(n) insert.</p>
<div class="info-box">Gunakan heap untuk priority queue (dynamic). Gunakan sorted array untuk static data dengan banyak search.</div>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Contoh Nyata: Dampak Pemilihan Data Structure</h3>
<div class="step-list">
    <div class="step-item">
        <div class="step-num">1</div>
        <div class="step-text"><strong>Dijkstra tanpa Heap:</strong> O(V²) — menggunakan array untuk cari minimum. Dengan <strong>Min-Heap</strong>: O((V+E) log V) — jauh lebih cepat untuk sparse graph.</div>
    </div>
    <div class="step-item">
        <div class="step-num">2</div>
        <div class="step-text"><strong>Two Sum tanpa Hash:</strong> O(n²) — nested loop. Dengan <strong>Hash Table</strong>: O(n) — single pass lookup.</div>
    </div>
    <div class="step-item">
        <div class="step-num">3</div>
        <div class="step-text"><strong>Kruskal tanpa Union-Find:</strong> O(E² log E). Dengan <strong>Disjoint Set</strong>: O(E log E) — dominated oleh sorting edges saja.</div>
    </div>
    <div class="step-item">
        <div class="step-num">4</div>
        <div class="step-text"><strong>Autocomplete tanpa Trie:</strong> O(n*m) scan semua kata. Dengan <strong>Trie</strong>: O(m) — hanya panjang prefix yang dicari.</div>
    </div>
</div>
</div>

<!-- ==================== SECTION 4: ALGORITHM STRATEGIES ==================== -->
<h2 class="section-title animate-in">Strategi Algoritma dengan Implementasi C, Go, Rust</h2>
<p class="section-subtitle animate-in">Lima pendekatan utama dengan contoh kode lengkap</p>

<!-- 4.1 BRUTE FORCE -->
<div class="card animate-in">
<h3><span class="badge badge-red">1. Brute Force</span></h3>
<p>Brute Force mencoba <strong>semua kemungkinan</strong> solusi dan memilih yang terbaik. Sederhana namun lambat. Cocok untuk baseline comparison dan input kecil.</p>
<p><strong>Problem: Subset Sum</strong> — Diberikan array dan target, cari apakah ada subset yang jumlahnya sama dengan target.</p>
<p><strong>Time Complexity: O(2^n)</strong> — memeriksa semua 2^n subset yang mungkin.</p>

<div class="tabs">
    <button class="tab-btn active" data-tab="bf-c">C</button>
    <button class="tab-btn" data-tab="bf-go">Go</button>
    <button class="tab-btn" data-tab="bf-rust">Rust</button>
</div>

<div data-tab-content="bf-c" class="tab-content active">
<div class="code-block"><span class="cm">// Brute Force Subset Sum in C</span>
<span class="cm">// Time: O(2^n) — cek semua subset</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdbool.h&gt;</span>

<span class="type">bool</span> <span class="fn">subset_sum</span>(<span class="type">int</span> arr[], <span class="type">int</span> n, <span class="type">int</span> target) {
    <span class="cm">// Base cases</span>
    <span class="kw">if</span> (target == <span class="num">0</span>) <span class="kw">return</span> <span class="num">true</span>;
    <span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> <span class="num">false</span>;

    <span class="cm">// Jika elemen terakhir lebih besar dari target, skip</span>
    <span class="kw">if</span> (arr[n-<span class="num">1</span>] > target)
        <span class="kw">return</span> <span class="fn">subset_sum</span>(arr, n-<span class="num">1</span>, target);

    <span class="cm">// Coba dua opsi: include atau exclude elemen terakhir</span>
    <span class="kw">return</span> <span class="fn">subset_sum</span>(arr, n-<span class="num">1</span>, target - arr[n-<span class="num">1</span>])
        || <span class="fn">subset_sum</span>(arr, n-<span class="num">1</span>, target);
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">int</span> arr[] = {<span class="num">3</span>, <span class="num">34</span>, <span class="num">4</span>, <span class="num">12</span>, <span class="num">5</span>, <span class="num">2</span>};
    <span class="type">int</span> n = <span class="kw">sizeof</span>(arr) / <span class="kw">sizeof</span>(arr[<span class="num">0</span>]);
    <span class="type">int</span> target = <span class="num">9</span>;
    <span class="kw">if</span> (<span class="fn">subset_sum</span>(arr, n, target))
        <span class="fn">printf</span>(<span class="str">"Subset ditemukan!\\n"</span>);
    <span class="kw">else</span>
        <span class="fn">printf</span>(<span class="str">"Tidak ada subset.\\n"</span>);
    <span class="kw">return</span> <span class="num">0</span>;
}</div>
</div>

<div data-tab-content="bf-go" class="tab-content">
<div class="code-block"><span class="cm">// Brute Force Subset Sum in Go</span>
<span class="cm">// Time: O(2^n) — cek semua subset</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">subsetSum</span>(arr []<span class="type">int</span>, n, target <span class="type">int</span>) <span class="type">bool</span> {
    <span class="kw">if</span> target == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">true</span>
    }
    <span class="kw">if</span> n == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">false</span>
    }
    <span class="cm">// Skip jika elemen lebih besar dari target</span>
    <span class="kw">if</span> arr[n-<span class="num">1</span>] > target {
        <span class="kw">return</span> <span class="fn">subsetSum</span>(arr, n-<span class="num">1</span>, target)
    }
    <span class="cm">// Include atau exclude elemen terakhir</span>
    <span class="kw">return</span> <span class="fn">subsetSum</span>(arr, n-<span class="num">1</span>, target-arr[n-<span class="num">1</span>]) ||
        <span class="fn">subsetSum</span>(arr, n-<span class="num">1</span>, target)
}

<span class="kw">func</span> <span class="fn">main</span>() {
    arr := []<span class="type">int</span>{<span class="num">3</span>, <span class="num">34</span>, <span class="num">4</span>, <span class="num">12</span>, <span class="num">5</span>, <span class="num">2</span>}
    target := <span class="num">9</span>
    <span class="kw">if</span> <span class="fn">subsetSum</span>(arr, <span class="fn">len</span>(arr), target) {
        fmt.<span class="fn">Println</span>(<span class="str">"Subset ditemukan!"</span>)
    } <span class="kw">else</span> {
        fmt.<span class="fn">Println</span>(<span class="str">"Tidak ada subset."</span>)
    }
}</div>
</div>

<div data-tab-content="bf-rust" class="tab-content">
<div class="code-block"><span class="cm">// Brute Force Subset Sum in Rust</span>
<span class="cm">// Time: O(2^n) — cek semua subset</span>
<span class="kw">fn</span> <span class="fn">subset_sum</span>(arr: &[<span class="type">i32</span>], target: <span class="type">i32</span>) -> <span class="type">bool</span> {
    <span class="kw">if</span> target == <span class="num">0</span> { <span class="kw">return</span> <span class="num">true</span>; }
    <span class="kw">if</span> arr.<span class="fn">is_empty</span>() { <span class="kw">return</span> <span class="num">false</span>; }

    <span class="kw">let</span> last = arr[arr.<span class="fn">len</span>() - <span class="num">1</span>];
    <span class="kw">let</span> rest = &arr[..arr.<span class="fn">len</span>() - <span class="num">1</span>];

    <span class="cm">// Skip jika elemen lebih besar dari target</span>
    <span class="kw">if</span> last > target {
        <span class="kw">return</span> <span class="fn">subset_sum</span>(rest, target);
    }
    <span class="cm">// Include atau exclude</span>
    <span class="fn">subset_sum</span>(rest, target - last) || <span class="fn">subset_sum</span>(rest, target)
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> arr = [<span class="num">3</span>, <span class="num">34</span>, <span class="num">4</span>, <span class="num">12</span>, <span class="num">5</span>, <span class="num">2</span>];
    <span class="kw">let</span> target = <span class="num">9</span>;
    <span class="kw">if</span> <span class="fn">subset_sum</span>(&arr, target) {
        <span class="fn">println!</span>(<span class="str">"Subset ditemukan!"</span>);
    } <span class="kw">else</span> {
        <span class="fn">println!</span>(<span class="str">"Tidak ada subset."</span>);
    }
}</div>
</div>
</div>

<!-- 4.2 DIVIDE AND CONQUER -->
<div class="card animate-in">
<h3><span class="badge badge-blue">2. Divide and Conquer</span> — Merge Sort</h3>
<p>Divide and Conquer membagi masalah menjadi <strong>sub-masalah yang lebih kecil</strong>, menyelesaikannya secara rekursif, lalu menggabungkan hasilnya.</p>
<p><strong>Problem: Merge Sort</strong> — Urutkan array dengan membagi menjadi dua, sort masing-masing, lalu merge.</p>
<p><strong>Time Complexity: O(n log n)</strong> — T(n) = 2T(n/2) + O(n) via Master Theorem.</p>
<p><strong>Space Complexity: O(n)</strong> — buffer tambahan untuk merge.</p>

<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Divide:</strong> Bagi array menjadi dua bagian sama besar</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Conquer:</strong> Sort masing-masing bagian secara rekursif</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Combine:</strong> Merge dua bagian yang sudah terurut</div></div>
</div>

<div class="tabs">
    <button class="tab-btn active" data-tab="dc-c">C</button>
    <button class="tab-btn" data-tab="dc-go">Go</button>
    <button class="tab-btn" data-tab="dc-rust">Rust</button>
</div>

<div data-tab-content="dc-c" class="tab-content active">
<div class="code-block"><span class="cm">// Merge Sort in C — Divide and Conquer</span>
<span class="cm">// Time: O(n log n), Space: O(n)</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdlib.h&gt;</span>

<span class="type">void</span> <span class="fn">merge</span>(<span class="type">int</span> arr[], <span class="type">int</span> left, <span class="type">int</span> mid, <span class="type">int</span> right) {
    <span class="type">int</span> n1 = mid - left + <span class="num">1</span>;
    <span class="type">int</span> n2 = right - mid;
    <span class="type">int</span> *L = <span class="fn">malloc</span>(n1 * <span class="kw">sizeof</span>(<span class="type">int</span>));
    <span class="type">int</span> *R = <span class="fn">malloc</span>(n2 * <span class="kw">sizeof</span>(<span class="type">int</span>));

    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i &lt; n1; i++) L[i] = arr[left + i];
    <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">0</span>; j &lt; n2; j++) R[j] = arr[mid + <span class="num">1</span> + j];

    <span class="type">int</span> i = <span class="num">0</span>, j = <span class="num">0</span>, k = left;
    <span class="kw">while</span> (i &lt; n1 && j &lt; n2) {
        <span class="kw">if</span> (L[i] &lt;= R[j]) arr[k++] = L[i++];
        <span class="kw">else</span> arr[k++] = R[j++];
    }
    <span class="kw">while</span> (i &lt; n1) arr[k++] = L[i++];
    <span class="kw">while</span> (j &lt; n2) arr[k++] = R[j++];
    <span class="fn">free</span>(L); <span class="fn">free</span>(R);
}

<span class="type">void</span> <span class="fn">merge_sort</span>(<span class="type">int</span> arr[], <span class="type">int</span> left, <span class="type">int</span> right) {
    <span class="kw">if</span> (left &lt; right) {
        <span class="type">int</span> mid = left + (right - left) / <span class="num">2</span>;
        <span class="fn">merge_sort</span>(arr, left, mid);
        <span class="fn">merge_sort</span>(arr, mid + <span class="num">1</span>, right);
        <span class="fn">merge</span>(arr, left, mid, right);
    }
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">int</span> arr[] = {<span class="num">38</span>, <span class="num">27</span>, <span class="num">43</span>, <span class="num">3</span>, <span class="num">9</span>, <span class="num">82</span>, <span class="num">10</span>};
    <span class="type">int</span> n = <span class="kw">sizeof</span>(arr)/<span class="kw">sizeof</span>(arr[<span class="num">0</span>]);
    <span class="fn">merge_sort</span>(arr, <span class="num">0</span>, n - <span class="num">1</span>);
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i &lt; n; i++)
        <span class="fn">printf</span>(<span class="str">"%d "</span>, arr[i]);
    <span class="kw">return</span> <span class="num">0</span>;
}</div>
</div>

<div data-tab-content="dc-go" class="tab-content">
<div class="code-block"><span class="cm">// Merge Sort in Go — Divide and Conquer</span>
<span class="cm">// Time: O(n log n), Space: O(n)</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">mergeSort</span>(arr []<span class="type">int</span>) []<span class="type">int</span> {
    <span class="kw">if</span> <span class="fn">len</span>(arr) &lt;= <span class="num">1</span> {
        <span class="kw">return</span> arr
    }
    mid := <span class="fn">len</span>(arr) / <span class="num">2</span>
    left := <span class="fn">mergeSort</span>(arr[:mid])
    right := <span class="fn">mergeSort</span>(arr[mid:])
    <span class="kw">return</span> <span class="fn">merge</span>(left, right)
}

<span class="kw">func</span> <span class="fn">merge</span>(left, right []<span class="type">int</span>) []<span class="type">int</span> {
    result := <span class="fn">make</span>([]<span class="type">int</span>, <span class="num">0</span>, <span class="fn">len</span>(left)+<span class="fn">len</span>(right))
    i, j := <span class="num">0</span>, <span class="num">0</span>
    <span class="kw">for</span> i &lt; <span class="fn">len</span>(left) && j &lt; <span class="fn">len</span>(right) {
        <span class="kw">if</span> left[i] &lt;= right[j] {
            result = <span class="fn">append</span>(result, left[i])
            i++
        } <span class="kw">else</span> {
            result = <span class="fn">append</span>(result, right[j])
            j++
        }
    }
    result = <span class="fn">append</span>(result, left[i:]...)
    result = <span class="fn">append</span>(result, right[j:]...)
    <span class="kw">return</span> result
}

<span class="kw">func</span> <span class="fn">main</span>() {
    arr := []<span class="type">int</span>{<span class="num">38</span>, <span class="num">27</span>, <span class="num">43</span>, <span class="num">3</span>, <span class="num">9</span>, <span class="num">82</span>, <span class="num">10</span>}
    sorted := <span class="fn">mergeSort</span>(arr)
    fmt.<span class="fn">Println</span>(sorted)
}</div>
</div>

<div data-tab-content="dc-rust" class="tab-content">
<div class="code-block"><span class="cm">// Merge Sort in Rust — Divide and Conquer</span>
<span class="cm">// Time: O(n log n), Space: O(n)</span>
<span class="kw">fn</span> <span class="fn">merge_sort</span>(arr: &<span class="kw">mut</span> [<span class="type">i32</span>]) {
    <span class="kw">let</span> len = arr.<span class="fn">len</span>();
    <span class="kw">if</span> len &lt;= <span class="num">1</span> { <span class="kw">return</span>; }

    <span class="kw">let</span> mid = len / <span class="num">2</span>;
    <span class="fn">merge_sort</span>(&<span class="kw">mut</span> arr[..mid]);
    <span class="fn">merge_sort</span>(&<span class="kw">mut</span> arr[mid..]);

    <span class="kw">let</span> <span class="kw">mut</span> merged = Vec::<span class="fn">with_capacity</span>(len);
    <span class="kw">let</span> (left, right) = arr.<span class="fn">split_at</span>(mid);
    <span class="kw">let</span> (<span class="kw">mut</span> i, <span class="kw">mut</span> j) = (<span class="num">0</span>, <span class="num">0</span>);

    <span class="kw">while</span> i &lt; left.<span class="fn">len</span>() && j &lt; right.<span class="fn">len</span>() {
        <span class="kw">if</span> left[i] &lt;= right[j] {
            merged.<span class="fn">push</span>(left[i]); i += <span class="num">1</span>;
        } <span class="kw">else</span> {
            merged.<span class="fn">push</span>(right[j]); j += <span class="num">1</span>;
        }
    }
    merged.<span class="fn">extend_from_slice</span>(&left[i..]);
    merged.<span class="fn">extend_from_slice</span>(&right[j..]);
    arr.<span class="fn">copy_from_slice</span>(&merged);
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> <span class="kw">mut</span> arr = [<span class="num">38</span>, <span class="num">27</span>, <span class="num">43</span>, <span class="num">3</span>, <span class="num">9</span>, <span class="num">82</span>, <span class="num">10</span>];
    <span class="fn">merge_sort</span>(&<span class="kw">mut</span> arr);
    <span class="fn">println!</span>(<span class="str">"{:?}"</span>, arr);
}</div>
</div>
</div>

<!-- 4.3 DYNAMIC PROGRAMMING -->
<div class="card animate-in">
<h3><span class="badge badge-green">3. Dynamic Programming</span> — 0/1 Knapsack</h3>
<p>Dynamic Programming memecahkan masalah dengan memecahnya menjadi <strong>overlapping subproblems</strong> dan menyimpan hasilnya (memoization/tabulation) untuk menghindari komputasi ulang.</p>
<p><strong>Problem: 0/1 Knapsack</strong> — Diberikan n item dengan weight dan value, maksimalkan total value tanpa melebihi kapasitas W.</p>
<p><strong>Time Complexity: O(n*W)</strong> — pseudo-polynomial (polynomial terhadap input numerik, bukan input size).</p>
<p><strong>Space Complexity: O(n*W)</strong> — tabel DP 2D, bisa dioptimasi ke O(W) dengan 1D array.</p>

<div class="tabs">
    <button class="tab-btn active" data-tab="dp-c">C</button>
    <button class="tab-btn" data-tab="dp-go">Go</button>
    <button class="tab-btn" data-tab="dp-rust">Rust</button>
</div>

<div data-tab-content="dp-c" class="tab-content active">
<div class="code-block"><span class="cm">// 0/1 Knapsack — Dynamic Programming in C</span>
<span class="cm">// Time: O(n*W), Space: O(n*W)</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>

<span class="type">int</span> <span class="fn">max</span>(<span class="type">int</span> a, <span class="type">int</span> b) { <span class="kw">return</span> a > b ? a : b; }

<span class="type">int</span> <span class="fn">knapsack</span>(<span class="type">int</span> W, <span class="type">int</span> wt[], <span class="type">int</span> val[], <span class="type">int</span> n) {
    <span class="cm">// dp[i][w] = max value menggunakan item 0..i-1 dengan kapasitas w</span>
    <span class="type">int</span> dp[n+<span class="num">1</span>][W+<span class="num">1</span>];

    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i &lt;= n; i++) {
        <span class="kw">for</span> (<span class="type">int</span> w = <span class="num">0</span>; w &lt;= W; w++) {
            <span class="kw">if</span> (i == <span class="num">0</span> || w == <span class="num">0</span>)
                dp[i][w] = <span class="num">0</span>;
            <span class="kw">else if</span> (wt[i-<span class="num">1</span>] &lt;= w)
                dp[i][w] = <span class="fn">max</span>(
                    val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w - wt[i-<span class="num">1</span>]],
                    dp[i-<span class="num">1</span>][w]
                );
            <span class="kw">else</span>
                dp[i][w] = dp[i-<span class="num">1</span>][w];
        }
    }
    <span class="kw">return</span> dp[n][W];
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">int</span> val[] = {<span class="num">60</span>, <span class="num">100</span>, <span class="num">120</span>};
    <span class="type">int</span> wt[]  = {<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>};
    <span class="type">int</span> W = <span class="num">50</span>, n = <span class="num">3</span>;
    <span class="fn">printf</span>(<span class="str">"Max value: %d\\n"</span>, <span class="fn">knapsack</span>(W, wt, val, n));
    <span class="kw">return</span> <span class="num">0</span>;
}</div>
</div>

<div data-tab-content="dp-go" class="tab-content">
<div class="code-block"><span class="cm">// 0/1 Knapsack — Dynamic Programming in Go</span>
<span class="cm">// Time: O(n*W), Space: O(n*W)</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">knapsack</span>(W <span class="type">int</span>, wt, val []<span class="type">int</span>) <span class="type">int</span> {
    n := <span class="fn">len</span>(val)
    <span class="cm">// Buat tabel DP</span>
    dp := <span class="fn">make</span>([][]<span class="type">int</span>, n+<span class="num">1</span>)
    <span class="kw">for</span> i := <span class="kw">range</span> dp {
        dp[i] = <span class="fn">make</span>([]<span class="type">int</span>, W+<span class="num">1</span>)
    }

    <span class="kw">for</span> i := <span class="num">1</span>; i &lt;= n; i++ {
        <span class="kw">for</span> w := <span class="num">1</span>; w &lt;= W; w++ {
            <span class="kw">if</span> wt[i-<span class="num">1</span>] &lt;= w {
                include := val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w-wt[i-<span class="num">1</span>]]
                exclude := dp[i-<span class="num">1</span>][w]
                <span class="kw">if</span> include > exclude {
                    dp[i][w] = include
                } <span class="kw">else</span> {
                    dp[i][w] = exclude
                }
            } <span class="kw">else</span> {
                dp[i][w] = dp[i-<span class="num">1</span>][w]
            }
        }
    }
    <span class="kw">return</span> dp[n][W]
}

<span class="kw">func</span> <span class="fn">main</span>() {
    val := []<span class="type">int</span>{<span class="num">60</span>, <span class="num">100</span>, <span class="num">120</span>}
    wt := []<span class="type">int</span>{<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>}
    W := <span class="num">50</span>
    fmt.<span class="fn">Printf</span>(<span class="str">"Max value: %d\\n"</span>, <span class="fn">knapsack</span>(W, wt, val))
}</div>
</div>

<div data-tab-content="dp-rust" class="tab-content">
<div class="code-block"><span class="cm">// 0/1 Knapsack — Dynamic Programming in Rust</span>
<span class="cm">// Time: O(n*W), Space: O(n*W)</span>
<span class="kw">fn</span> <span class="fn">knapsack</span>(capacity: <span class="type">usize</span>, wt: &[<span class="type">usize</span>], val: &[<span class="type">i32</span>]) -> <span class="type">i32</span> {
    <span class="kw">let</span> n = val.<span class="fn">len</span>();
    <span class="kw">let</span> <span class="kw">mut</span> dp = <span class="fn">vec!</span>[<span class="fn">vec!</span>[<span class="num">0i32</span>; capacity + <span class="num">1</span>]; n + <span class="num">1</span>];

    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">1</span>..=n {
        <span class="kw">for</span> w <span class="kw">in</span> <span class="num">1</span>..=capacity {
            <span class="kw">if</span> wt[i - <span class="num">1</span>] &lt;= w {
                <span class="kw">let</span> include = val[i - <span class="num">1</span>] + dp[i - <span class="num">1</span>][w - wt[i - <span class="num">1</span>]];
                <span class="kw">let</span> exclude = dp[i - <span class="num">1</span>][w];
                dp[i][w] = include.<span class="fn">max</span>(exclude);
            } <span class="kw">else</span> {
                dp[i][w] = dp[i - <span class="num">1</span>][w];
            }
        }
    }
    dp[n][capacity]
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> val = [<span class="num">60</span>, <span class="num">100</span>, <span class="num">120</span>];
    <span class="kw">let</span> wt = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>];
    <span class="kw">let</span> capacity = <span class="num">50</span>;
    <span class="fn">println!</span>(<span class="str">"Max value: {}"</span>, <span class="fn">knapsack</span>(capacity, &wt, &val));
}</div>
</div>
</div>

<!-- 4.4 GREEDY -->
<div class="card animate-in">
<h3><span class="badge badge-orange">4. Greedy</span> — Activity Selection</h3>
<p>Greedy algorithm membuat <strong>pilihan terbaik secara lokal</strong> di setiap langkah, berharap pilihan lokal tersebut menghasilkan solusi optimal global. Tidak selalu optimal, tapi untuk beberapa masalah (activity selection, Huffman, Kruskal) terbukti optimal.</p>
<p><strong>Problem: Activity Selection</strong> — Diberikan n aktivitas dengan waktu mulai dan selesai, pilih jumlah aktivitas maksimum yang tidak overlap.</p>
<p><strong>Time Complexity: O(n log n)</strong> — dominated oleh sorting. Greedy selection sendiri O(n).</p>

<div class="tabs">
    <button class="tab-btn active" data-tab="gr-c">C</button>
    <button class="tab-btn" data-tab="gr-go">Go</button>
    <button class="tab-btn" data-tab="gr-rust">Rust</button>
</div>

<div data-tab-content="gr-c" class="tab-content active">
<div class="code-block"><span class="cm">// Activity Selection — Greedy in C</span>
<span class="cm">// Time: O(n log n) sort + O(n) selection</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdlib.h&gt;</span>

<span class="kw">typedef struct</span> {
    <span class="type">int</span> start, finish;
} <span class="type">Activity</span>;

<span class="type">int</span> <span class="fn">cmp</span>(<span class="kw">const</span> <span class="type">void</span> *a, <span class="kw">const</span> <span class="type">void</span> *b) {
    <span class="kw">return</span> ((<span class="type">Activity</span>*)a)->finish - ((<span class="type">Activity</span>*)b)->finish;
}

<span class="type">void</span> <span class="fn">activity_selection</span>(<span class="type">Activity</span> acts[], <span class="type">int</span> n) {
    <span class="cm">// Greedy: sort by finish time, pilih yang tidak overlap</span>
    <span class="fn">qsort</span>(acts, n, <span class="kw">sizeof</span>(<span class="type">Activity</span>), cmp);

    <span class="fn">printf</span>(<span class="str">"Aktivitas terpilih:\\n"</span>);
    <span class="type">int</span> last_finish = <span class="num">0</span>;
    <span class="type">int</span> count = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i &lt; n; i++) {
        <span class="kw">if</span> (acts[i].start >= last_finish) {
            <span class="fn">printf</span>(<span class="str">"  [%d, %d)\\n"</span>, acts[i].start, acts[i].finish);
            last_finish = acts[i].finish;
            count++;
        }
    }
    <span class="fn">printf</span>(<span class="str">"Total: %d aktivitas\\n"</span>, count);
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">Activity</span> acts[] = {
        {<span class="num">1</span>,<span class="num">4</span>}, {<span class="num">3</span>,<span class="num">5</span>}, {<span class="num">0</span>,<span class="num">6</span>}, {<span class="num">5</span>,<span class="num">7</span>},
        {<span class="num">3</span>,<span class="num">9</span>}, {<span class="num">5</span>,<span class="num">9</span>}, {<span class="num">6</span>,<span class="num">10</span>}, {<span class="num">8</span>,<span class="num">11</span>},
        {<span class="num">8</span>,<span class="num">12</span>}, {<span class="num">2</span>,<span class="num">14</span>}, {<span class="num">12</span>,<span class="num">16</span>}
    };
    <span class="type">int</span> n = <span class="kw">sizeof</span>(acts)/<span class="kw">sizeof</span>(acts[<span class="num">0</span>]);
    <span class="fn">activity_selection</span>(acts, n);
    <span class="kw">return</span> <span class="num">0</span>;
}</div>
</div>

<div data-tab-content="gr-go" class="tab-content">
<div class="code-block"><span class="cm">// Activity Selection — Greedy in Go</span>
<span class="cm">// Time: O(n log n) sort + O(n) selection</span>
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"sort"</span>
)

<span class="kw">type</span> <span class="type">Activity</span> <span class="kw">struct</span> {
    Start, Finish <span class="type">int</span>
}

<span class="kw">func</span> <span class="fn">activitySelection</span>(acts []<span class="type">Activity</span>) []<span class="type">Activity</span> {
    <span class="cm">// Sort by finish time (greedy choice)</span>
    sort.<span class="fn">Slice</span>(acts, <span class="kw">func</span>(i, j <span class="type">int</span>) <span class="type">bool</span> {
        <span class="kw">return</span> acts[i].Finish &lt; acts[j].Finish
    })

    selected := []<span class="type">Activity</span>{acts[<span class="num">0</span>]}
    lastFinish := acts[<span class="num">0</span>].Finish

    <span class="kw">for</span> _, act := <span class="kw">range</span> acts[<span class="num">1</span>:] {
        <span class="kw">if</span> act.Start >= lastFinish {
            selected = <span class="fn">append</span>(selected, act)
            lastFinish = act.Finish
        }
    }
    <span class="kw">return</span> selected
}

<span class="kw">func</span> <span class="fn">main</span>() {
    acts := []<span class="type">Activity</span>{
        {<span class="num">1</span>,<span class="num">4</span>}, {<span class="num">3</span>,<span class="num">5</span>}, {<span class="num">0</span>,<span class="num">6</span>}, {<span class="num">5</span>,<span class="num">7</span>},
        {<span class="num">3</span>,<span class="num">9</span>}, {<span class="num">5</span>,<span class="num">9</span>}, {<span class="num">6</span>,<span class="num">10</span>}, {<span class="num">8</span>,<span class="num">11</span>},
        {<span class="num">8</span>,<span class="num">12</span>}, {<span class="num">2</span>,<span class="num">14</span>}, {<span class="num">12</span>,<span class="num">16</span>},
    }
    result := <span class="fn">activitySelection</span>(acts)
    fmt.<span class="fn">Println</span>(<span class="str">"Aktivitas terpilih:"</span>)
    <span class="kw">for</span> _, a := <span class="kw">range</span> result {
        fmt.<span class="fn">Printf</span>(<span class="str">"  [%d, %d)\\n"</span>, a.Start, a.Finish)
    }
    fmt.<span class="fn">Printf</span>(<span class="str">"Total: %d aktivitas\\n"</span>, <span class="fn">len</span>(result))
}</div>
</div>

<div data-tab-content="gr-rust" class="tab-content">
<div class="code-block"><span class="cm">// Activity Selection — Greedy in Rust</span>
<span class="cm">// Time: O(n log n) sort + O(n) selection</span>
<span class="kw">fn</span> <span class="fn">activity_selection</span>(acts: &<span class="kw">mut</span> Vec&lt;(<span class="type">i32</span>, <span class="type">i32</span>)&gt;) -> Vec&lt;(<span class="type">i32</span>, <span class="type">i32</span>)&gt; {
    <span class="cm">// Sort by finish time</span>
    acts.<span class="fn">sort_by_key</span>(|a| a.<span class="num">1</span>);

    <span class="kw">let</span> <span class="kw">mut</span> selected = <span class="fn">vec!</span>[acts[<span class="num">0</span>]];
    <span class="kw">let</span> <span class="kw">mut</span> last_finish = acts[<span class="num">0</span>].<span class="num">1</span>;

    <span class="kw">for</span> &act <span class="kw">in</span> &acts[<span class="num">1</span>..] {
        <span class="kw">if</span> act.<span class="num">0</span> >= last_finish {
            selected.<span class="fn">push</span>(act);
            last_finish = act.<span class="num">1</span>;
        }
    }
    selected
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> <span class="kw">mut</span> acts = <span class="fn">vec!</span>[
        (<span class="num">1</span>,<span class="num">4</span>), (<span class="num">3</span>,<span class="num">5</span>), (<span class="num">0</span>,<span class="num">6</span>), (<span class="num">5</span>,<span class="num">7</span>),
        (<span class="num">3</span>,<span class="num">9</span>), (<span class="num">5</span>,<span class="num">9</span>), (<span class="num">6</span>,<span class="num">10</span>), (<span class="num">8</span>,<span class="num">11</span>),
        (<span class="num">8</span>,<span class="num">12</span>), (<span class="num">2</span>,<span class="num">14</span>), (<span class="num">12</span>,<span class="num">16</span>),
    ];
    <span class="kw">let</span> result = <span class="fn">activity_selection</span>(&<span class="kw">mut</span> acts);
    <span class="fn">println!</span>(<span class="str">"Aktivitas terpilih:"</span>);
    <span class="kw">for</span> (s, f) <span class="kw">in</span> &result {
        <span class="fn">println!</span>(<span class="str">"  [{}, {})"</span>, s, f);
    }
    <span class="fn">println!</span>(<span class="str">"Total: {} aktivitas"</span>, result.<span class="fn">len</span>());
}</div>
</div>
</div>

<!-- 4.5 BACKTRACKING -->
<div class="card animate-in">
<h3><span class="badge badge-purple">5. Backtracking</span> — N-Queens</h3>
<p>Backtracking membangun solusi secara <strong>inkremental</strong> dan <em>membatalkan (backtrack)</em> segera ketika mendeteksi bahwa solusi parsial tidak mungkin menjadi solusi lengkap. Ini "memotong" search space secara drastis dibanding brute force.</p>
<p><strong>Problem: N-Queens</strong> — Tempatkan N ratu di papan N&#215;N sehingga tidak ada dua ratu yang saling menyerang (baris, kolom, atau diagonal yang sama).</p>
<p><strong>Time Complexity: O(N!)</strong> — worst case, tapi pruning menguranginya secara signifikan di praktik.</p>

<div class="tabs">
    <button class="tab-btn active" data-tab="bt-c">C</button>
    <button class="tab-btn" data-tab="bt-go">Go</button>
    <button class="tab-btn" data-tab="bt-rust">Rust</button>
</div>

<div data-tab-content="bt-c" class="tab-content active">
<div class="code-block"><span class="cm">// N-Queens — Backtracking in C</span>
<span class="cm">// Time: O(N!) with pruning</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdbool.h&gt;</span>

<span class="kw">#define</span> N <span class="num">8</span>
<span class="type">int</span> board[N];
<span class="type">int</span> solutions = <span class="num">0</span>;

<span class="type">bool</span> <span class="fn">is_safe</span>(<span class="type">int</span> row, <span class="type">int</span> col) {
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i &lt; row; i++) {
        <span class="cm">// Cek kolom sama atau diagonal</span>
        <span class="kw">if</span> (board[i] == col ||
            <span class="fn">abs</span>(board[i] - col) == <span class="fn">abs</span>(i - row))
            <span class="kw">return</span> <span class="num">false</span>;
    }
    <span class="kw">return</span> <span class="num">true</span>;
}

<span class="type">void</span> <span class="fn">solve</span>(<span class="type">int</span> row) {
    <span class="kw">if</span> (row == N) {
        solutions++;
        <span class="kw">if</span> (solutions == <span class="num">1</span>) { <span class="cm">// Print first solution</span>
            <span class="fn">printf</span>(<span class="str">"Solusi pertama:\\n"</span>);
            <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i &lt; N; i++) {
                <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">0</span>; j &lt; N; j++)
                    <span class="fn">printf</span>(board[i] == j ? <span class="str">"Q "</span> : <span class="str">". "</span>);
                <span class="fn">printf</span>(<span class="str">"\\n"</span>);
            }
        }
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="type">int</span> col = <span class="num">0</span>; col &lt; N; col++) {
        <span class="kw">if</span> (<span class="fn">is_safe</span>(row, col)) {
            board[row] = col;      <span class="cm">// Place queen</span>
            <span class="fn">solve</span>(row + <span class="num">1</span>);         <span class="cm">// Recurse</span>
            <span class="cm">// Backtrack implisit (overwrite di iterasi berikut)</span>
        }
    }
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="fn">solve</span>(<span class="num">0</span>);
    <span class="fn">printf</span>(<span class="str">"Total solusi untuk %d-Queens: %d\\n"</span>, N, solutions);
    <span class="kw">return</span> <span class="num">0</span>;
}</div>
</div>

<div data-tab-content="bt-go" class="tab-content">
<div class="code-block"><span class="cm">// N-Queens — Backtracking in Go</span>
<span class="cm">// Time: O(N!) with pruning</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">const</span> N = <span class="num">8</span>

<span class="kw">var</span> (
    board     [N]<span class="type">int</span>
    solutions <span class="type">int</span>
)

<span class="kw">func</span> <span class="fn">abs</span>(x <span class="type">int</span>) <span class="type">int</span> {
    <span class="kw">if</span> x &lt; <span class="num">0</span> { <span class="kw">return</span> -x }
    <span class="kw">return</span> x
}

<span class="kw">func</span> <span class="fn">isSafe</span>(row, col <span class="type">int</span>) <span class="type">bool</span> {
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; row; i++ {
        <span class="kw">if</span> board[i] == col || <span class="fn">abs</span>(board[i]-col) == <span class="fn">abs</span>(i-row) {
            <span class="kw">return</span> <span class="num">false</span>
        }
    }
    <span class="kw">return</span> <span class="num">true</span>
}

<span class="kw">func</span> <span class="fn">solve</span>(row <span class="type">int</span>) {
    <span class="kw">if</span> row == N {
        solutions++
        <span class="kw">if</span> solutions == <span class="num">1</span> {
            fmt.<span class="fn">Println</span>(<span class="str">"Solusi pertama:"</span>)
            <span class="kw">for</span> i := <span class="num">0</span>; i &lt; N; i++ {
                <span class="kw">for</span> j := <span class="num">0</span>; j &lt; N; j++ {
                    <span class="kw">if</span> board[i] == j {
                        fmt.<span class="fn">Print</span>(<span class="str">"Q "</span>)
                    } <span class="kw">else</span> {
                        fmt.<span class="fn">Print</span>(<span class="str">". "</span>)
                    }
                }
                fmt.<span class="fn">Println</span>()
            }
        }
        <span class="kw">return</span>
    }
    <span class="kw">for</span> col := <span class="num">0</span>; col &lt; N; col++ {
        <span class="kw">if</span> <span class="fn">isSafe</span>(row, col) {
            board[row] = col
            <span class="fn">solve</span>(row + <span class="num">1</span>)
        }
    }
}

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="fn">solve</span>(<span class="num">0</span>)
    fmt.<span class="fn">Printf</span>(<span class="str">"Total solusi untuk %d-Queens: %d\\n"</span>, N, solutions)
}</div>
</div>

<div data-tab-content="bt-rust" class="tab-content">
<div class="code-block"><span class="cm">// N-Queens — Backtracking in Rust</span>
<span class="cm">// Time: O(N!) with pruning</span>
<span class="kw">const</span> N: <span class="type">usize</span> = <span class="num">8</span>;

<span class="kw">fn</span> <span class="fn">is_safe</span>(board: &[<span class="type">usize</span>; N], row: <span class="type">usize</span>, col: <span class="type">usize</span>) -> <span class="type">bool</span> {
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..row {
        <span class="kw">if</span> board[i] == col ||
           (board[i] <span class="kw">as</span> <span class="type">i32</span> - col <span class="kw">as</span> <span class="type">i32</span>).<span class="fn">unsigned_abs</span>() <span class="kw">as</span> <span class="type">usize</span>
           == row - i {
            <span class="kw">return</span> <span class="num">false</span>;
        }
    }
    <span class="num">true</span>
}

<span class="kw">fn</span> <span class="fn">solve</span>(board: &<span class="kw">mut</span> [<span class="type">usize</span>; N], row: <span class="type">usize</span>, count: &<span class="kw">mut</span> <span class="type">u32</span>) {
    <span class="kw">if</span> row == N {
        *count += <span class="num">1</span>;
        <span class="kw">if</span> *count == <span class="num">1</span> {
            <span class="fn">println!</span>(<span class="str">"Solusi pertama:"</span>);
            <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..N {
                <span class="kw">for</span> j <span class="kw">in</span> <span class="num">0</span>..N {
                    <span class="fn">print!</span>(<span class="str">"{}"</span>,
                        <span class="kw">if</span> board[i] == j { <span class="str">"Q "</span> } <span class="kw">else</span> { <span class="str">". "</span> });
                }
                <span class="fn">println!</span>();
            }
        }
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> col <span class="kw">in</span> <span class="num">0</span>..N {
        <span class="kw">if</span> <span class="fn">is_safe</span>(board, row, col) {
            board[row] = col;
            <span class="fn">solve</span>(board, row + <span class="num">1</span>, count);
        }
    }
}

<span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="kw">let</span> <span class="kw">mut</span> board = [<span class="num">0usize</span>; N];
    <span class="kw">let</span> <span class="kw">mut</span> count = <span class="num">0u32</span>;
    <span class="fn">solve</span>(&<span class="kw">mut</span> board, <span class="num">0</span>, &<span class="kw">mut</span> count);
    <span class="fn">println!</span>(<span class="str">"Total solusi untuk {}-Queens: {}"</span>, N, count);
}</div>
</div>
</div>

<!-- Algorithm Strategy Comparison -->
<div class="card animate-in">
<h3>Perbandingan Strategi Algoritma</h3>
<div class="table-wrapper">
<table>
<tr><th>Strategi</th><th>Kapan Digunakan</th><th>Kelebihan</th><th>Kekurangan</th><th>Contoh Masalah</th></tr>
<tr><td><span class="badge badge-red">Brute Force</span></td><td>Input kecil, baseline</td><td>Sederhana, selalu benar</td><td>Lambat: O(2^n), O(n!)</td><td>Subset Sum, Password cracking</td></tr>
<tr><td><span class="badge badge-blue">Divide & Conquer</span></td><td>Masalah bisa dipecah menjadi sub-masalah independen</td><td>Efisien, parallelizable</td><td>Overhead rekursi, space</td><td>Merge Sort, Quicksort, FFT</td></tr>
<tr><td><span class="badge badge-green">Dynamic Programming</span></td><td>Overlapping subproblems + optimal substructure</td><td>Polynomial untuk banyak masalah</td><td>Memory intensive, sulit design</td><td>Knapsack, LCS, Edit Distance</td></tr>
<tr><td><span class="badge badge-orange">Greedy</span></td><td>Greedy choice property berlaku</td><td>Sangat cepat, simple</td><td>Tidak selalu optimal</td><td>Activity Selection, Huffman, Kruskal</td></tr>
<tr><td><span class="badge badge-purple">Backtracking</span></td><td>Constraint satisfaction, semua solusi</td><td>Pruning mengurangi search space</td><td>Worst case masih exponential</td><td>N-Queens, Sudoku, Graph Coloring</td></tr>
</table>
</div>
</div>

<!-- ==================== SECTION 5: VISUAL ANIMATIONS ==================== -->
<h2 class="section-title animate-in">Visualisasi Interaktif</h2>
<p class="section-subtitle animate-in">Animasi canvas untuk memahami perbandingan sorting dan NP-Complete reduction</p>

<div class="card animate-in">
<h3>Perbandingan Sorting Algorithm: Bubble vs Merge vs Quick</h3>
<p>Animasi di bawah menunjukkan perbandingan real-time antara tiga algoritma sorting. Perhatikan bagaimana <strong>Bubble Sort O(n&#178;)</strong> jauh lebih lambat dibanding <strong>Merge Sort</strong> dan <strong>Quick Sort O(n log n)</strong>.</p>
<div class="anim-container">
    <canvas id="sort-compare-canvas" width="700" height="400"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Jumlah Elemen:</label>
        <input type="range" class="anim-input" id="sort-size" min="10" max="80" value="30">
        <span id="sort-size-val">30</span>
        <button class="anim-btn" id="sort-run">Run Comparison</button>
        <button class="anim-btn secondary" id="sort-reset">Reset</button>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>NP-Complete Reduction Flow</h3>
<p>Animasi berikut menunjukkan bagaimana masalah-masalah NP-Complete saling terhubung melalui <strong>polynomial-time reduction</strong>. Jika kita bisa menyelesaikan SATU masalah NP-Complete dalam polynomial time, maka SEMUA masalah di NP bisa diselesaikan dalam polynomial time (karena P = NP).</p>
<div class="anim-container">
    <canvas id="np-reduction-canvas" width="700" height="450"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="np-run">Animate Reductions</button>
        <button class="anim-btn secondary" id="np-reset">Reset</button>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Alur Reduction: SAT sebagai Akar</h3>
<div class="flow-diagram">
    <div class="flow-node" style="background:var(--danger);">SAT</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:var(--primary);">3-SAT</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#6c5ce7;">Clique</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#00b894;">Vertex Cover</div>
</div>
<div class="flow-diagram" style="margin-top:0.5rem;">
    <div class="flow-node" style="background:var(--primary);">3-SAT</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#e17055;">3-Coloring</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#fdcb6e;">k-Coloring</div>
</div>
<div class="flow-diagram" style="margin-top:0.5rem;">
    <div class="flow-node" style="background:var(--primary);">3-SAT</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#fd79a8;">Subset Sum</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#a29bfe;">Knapsack</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#fab1a0;">Bin Packing</div>
</div>
<div class="flow-diagram" style="margin-top:0.5rem;">
    <div class="flow-node" style="background:#6c5ce7;">Clique</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#00cec9;">Hamiltonian Cycle</div>
    <div class="flow-arrow">&#8594;</div>
    <div class="flow-node" style="background:#e84393;">TSP</div>
</div>
<div class="info-box">
<strong>Polynomial-time reduction (&#8804;p):</strong> Masalah A &#8804;p masalah B artinya jika kita punya solver untuk B, kita bisa menyelesaikan A dengan mengubah input A menjadi input B dalam polynomial time. Jadi B <em>setidaknya sesulit</em> A.
</div>
</div>

<!-- ==================== SECTION 6: PRACTICAL IMPACT ==================== -->
<h2 class="section-title animate-in">Dampak Praktis P vs NP</h2>
<p class="section-subtitle animate-in">Bagaimana masalah teoritis ini mempengaruhi dunia nyata</p>

<div class="card-grid-3 animate-in">
<div class="card">
<h3><span class="badge badge-red">Kriptografi</span></h3>
<p>Seluruh keamanan digital modern bergantung pada asumsi <strong>P &#8800; NP</strong>.</p>
<ul>
    <li><strong>RSA:</strong> Keamanan bergantung pada kesulitan faktorisasi bilangan besar (believed NP-intermediate)</li>
    <li><strong>AES:</strong> Brute-force key search adalah exponential</li>
    <li><strong>Hashing:</strong> Collision finding harus sulit</li>
    <li><strong>Digital Signatures:</strong> Forgery harus computationally infeasible</li>
</ul>
<div class="warn-box">Jika P = NP terbukti, RSA bisa dipecahkan dalam polynomial time. Semua transaksi bank, HTTPS, dan komunikasi terenkripsi menjadi tidak aman.</div>
</div>

<div class="card">
<h3><span class="badge badge-blue">Optimasi</span></h3>
<p>Banyak masalah optimasi dunia nyata adalah <strong>NP-Hard</strong>:</p>
<ul>
    <li><strong>Logistics:</strong> Vehicle Routing Problem (VRP) — NP-Hard. Perusahaan seperti UPS/FedEx menggunakan heuristic</li>
    <li><strong>Scheduling:</strong> Job shop scheduling, airline crew — NP-Complete</li>
    <li><strong>Network Design:</strong> Minimum spanning tree (P), tapi Steiner tree (NP-Hard)</li>
    <li><strong>Circuit Design:</strong> VLSI layout optimization — NP-Hard</li>
</ul>
<div class="success-box">Jika P = NP, semua masalah optimasi bisa diselesaikan secara optimal dalam polynomial time. Revolusi di logistics, manufacturing, dan resource allocation.</div>
</div>

<div class="card">
<h3><span class="badge badge-purple">AI & Machine Learning</span></h3>
<p>Banyak masalah AI secara fundamental terkait dengan NP:</p>
<ul>
    <li><strong>Training Neural Network:</strong> Finding optimal weights — NP-Hard secara umum</li>
    <li><strong>Feature Selection:</strong> Subset selection — NP-Hard</li>
    <li><strong>Bayesian Network:</strong> Inference — NP-Hard</li>
    <li><strong>Protein Folding:</strong> Prediksi struktur 3D — NP-Hard</li>
</ul>
<div class="info-box">P = NP berarti AI bisa menemukan solusi optimal untuk semua masalah learning. Tapi juga berarti creativity dan proof-finding menjadi "mudah" — dengan implikasi filosofis mendalam.</div>
</div>
</div>

<div class="card animate-in">
<h3>Implikasi Mendalam dari P = NP</h3>
<div class="card-grid">
<div class="card">
<h4><span class="badge badge-green">Jika P = NP (optimis)</span></h4>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Obat kanker:</strong> Protein folding dan drug discovery menjadi trivial secara komputasional</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Transportasi optimal:</strong> Semua routing, scheduling, logistics diselesaikan secara optimal</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>AI superintelligent:</strong> Mesin bisa menemukan bukti matematis secara otomatis</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Compiler optimization:</strong> Program bisa dioptimasi secara sempurna</div></div>
</div>
</div>
<div class="card">
<h4><span class="badge badge-red">Jika P = NP (pesimis)</span></h4>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Kriptografi hancur:</strong> Tidak ada cara aman menyimpan data, password, atau transaksi</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Privacy hilang:</strong> Semua enkripsi bisa dipecahkan, termasuk komunikasi militer</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Ekonomi digital collapse:</strong> Cryptocurrency, e-commerce, banking online tidak aman</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Intellectual property:</strong> Semua watermark dan DRM bisa dibypass</div></div>
</div>
</div>
</div>
</div>

<div class="card animate-in">
<h3>Ringkasan: Peta Hubungan Besar</h3>
<div class="pipeline">
    <div class="pipeline-stage">
        <div class="stage-title">Complexity Theory</div>
        <div class="stage-desc">P, NP, NP-Hard menentukan batas komputasi</div>
    </div>
    <div class="pipeline-stage">
        <div class="stage-title">Algorithm Design</div>
        <div class="stage-desc">Strategi dipilih berdasarkan kelas kompleksitas</div>
    </div>
    <div class="pipeline-stage">
        <div class="stage-title">Data Structures</div>
        <div class="stage-desc">Struktur data mendukung efisiensi algoritma</div>
    </div>
    <div class="pipeline-stage">
        <div class="stage-title">Implementation</div>
        <div class="stage-desc">C (low-level), Go (concurrent), Rust (safe + fast)</div>
    </div>
</div>
<div class="success-box">
<strong>Kesimpulan:</strong> Memahami complexity theory bukan hanya teori abstrak — ia adalah fondasi yang menentukan algoritma apa yang layak digunakan, data structure apa yang dipilih, dan bagaimana kita mengimplementasikan solusi yang efisien di bahasa pemrograman modern. Ketika menghadapi masalah baru, langkah pertama adalah menganalisis kompleksitasnya — apakah ia di P (gunakan exact algorithm), NP-Complete (gunakan approximation), atau NP-Hard (gunakan heuristic).
</div>
</div>
`;

// ============================================================
// CANVAS ANIMATIONS
// ============================================================
function initPNPAnimations() {
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

    // ==========================================
    // 1. VENN DIAGRAM — P, NP, NP-Hard, NP-Complete
    // ==========================================
    (function() {
        const cv = setupCanvas('venn-diagram-canvas', 700, 420);
        if (!cv) return;
        const { ctx, w, h } = cv;

        function draw() {
            ctx.clearRect(0, 0, w, h);

            // NP-Hard circle (largest, right-shifted)
            ctx.beginPath();
            ctx.ellipse(420, 210, 220, 180, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(231, 76, 60, 0.12)';
            ctx.fill();
            ctx.strokeStyle = '#e74c3c';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            ctx.fillStyle = '#e74c3c';
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillText('NP-Hard', 560, 60);

            // NP circle (inside, left-shifted)
            ctx.beginPath();
            ctx.ellipse(300, 220, 180, 150, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(52, 152, 219, 0.12)';
            ctx.fill();
            ctx.strokeStyle = '#3498db';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            ctx.fillStyle = '#3498db';
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillText('NP', 145, 95);

            // P circle (inside NP)
            ctx.beginPath();
            ctx.ellipse(250, 240, 100, 85, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(46, 204, 113, 0.18)';
            ctx.fill();
            ctx.strokeStyle = '#2ecc71';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            ctx.fillStyle = '#2ecc71';
            ctx.font = 'bold 18px Inter, sans-serif';
            ctx.fillText('P', 240, 220);

            // P examples
            ctx.fillStyle = '#555';
            ctx.font = '12px Inter, sans-serif';
            ctx.fillText('Sorting', 210, 245);
            ctx.fillText('Shortest Path', 200, 262);
            ctx.fillText('Primality', 215, 279);

            // NP-Complete region label (intersection of NP and NP-Hard)
            ctx.fillStyle = '#8e44ad';
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillText('NP-Complete', 370, 195);
            ctx.font = '11px Inter, sans-serif';
            ctx.fillStyle = '#666';
            ctx.fillText('SAT, TSP', 385, 215);
            ctx.fillText('Clique, 3-Color', 370, 232);
            ctx.fillText('Vertex Cover', 378, 249);

            // NP-Intermediate (between P and NP-Complete)
            ctx.fillStyle = '#2980b9';
            ctx.font = 'italic 12px Inter, sans-serif';
            ctx.fillText('NP-Intermediate?', 290, 140);
            ctx.fillText('(Graph Isomorphism)', 280, 157);

            // NP-Hard only (outside NP)
            ctx.fillStyle = '#c0392b';
            ctx.font = '12px Inter, sans-serif';
            ctx.fillText('Halting Problem', 510, 170);
            ctx.fillText('Gen. Chess', 520, 190);
            ctx.fillText('(Undecidable)', 515, 210);

            // Title
            ctx.fillStyle = '#222';
            ctx.font = 'bold 15px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Hubungan Kelas Kompleksitas (Asumsi P \u2260 NP)', w / 2, 25);
            ctx.textAlign = 'start';
        }

        draw();
    })();

    // ==========================================
    // 2. SORTING COMPARISON ANIMATION
    // ==========================================
    (function() {
        const cv = setupCanvas('sort-compare-canvas', 700, 400);
        if (!cv) return;
        const { ctx, w, h } = cv;

        const sizeSlider = document.getElementById('sort-size');
        const sizeVal = document.getElementById('sort-size-val');
        const runBtn = document.getElementById('sort-run');
        const resetBtn = document.getElementById('sort-reset');

        if (!runBtn || !resetBtn) return;

        let animId = null;
        let running = false;

        function randomArray(n) {
            const arr = [];
            for (let i = 0; i < n; i++) arr.push(Math.random() * 0.9 + 0.05);
            return arr;
        }

        // Each sorter stores its array and step history
        let sorts = [];
        let size = parseInt(sizeSlider.value);

        if (sizeSlider) {
            sizeSlider.addEventListener('input', () => {
                size = parseInt(sizeSlider.value);
                if (sizeVal) sizeVal.textContent = size;
            });
        }

        function drawBars(arr, x0, y0, bw, bh, highlights, label, compCount) {
            const barW = bw / arr.length - 1;
            for (let i = 0; i < arr.length; i++) {
                const barH = arr[i] * bh;
                let color = '#3498db';
                if (highlights.sorted && highlights.sorted.has(i)) color = '#2ecc71';
                else if (highlights.active && highlights.active.has(i)) color = '#e74c3c';
                else if (highlights.compare && highlights.compare.has(i)) color = '#f39c12';
                ctx.fillStyle = color;
                ctx.fillRect(x0 + i * (barW + 1), y0 + bh - barH, barW, barH);
            }
            ctx.fillStyle = '#222';
            ctx.font = 'bold 13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, x0 + bw / 2, y0 - 8);
            ctx.font = '11px Inter, sans-serif';
            ctx.fillStyle = '#888';
            ctx.fillText('ops: ' + compCount, x0 + bw / 2, y0 + bh + 16);
            ctx.textAlign = 'start';
        }

        // Generator-based sorts for step-by-step animation
        function* bubbleSortGen(arr) {
            const a = arr.slice();
            let ops = 0;
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a.length - i - 1; j++) {
                    ops++;
                    yield { arr: a.slice(), active: new Set([j, j + 1]), sorted: new Set(), ops };
                    if (a[j] > a[j + 1]) {
                        [a[j], a[j + 1]] = [a[j + 1], a[j]];
                    }
                }
            }
            yield { arr: a.slice(), active: new Set(), sorted: new Set(a.map((_, i) => i)), ops };
        }

        function* mergeSortGen(arr) {
            const a = arr.slice();
            let ops = 0;
            function* msort(lo, hi) {
                if (hi - lo <= 1) return;
                const mid = (lo + hi) >> 1;
                yield* msort(lo, mid);
                yield* msort(mid, hi);
                // merge
                const tmp = [];
                let i = lo, j = mid;
                while (i < mid && j < hi) {
                    ops++;
                    yield { arr: a.slice(), compare: new Set([i, j]), sorted: new Set(), ops };
                    if (a[i] <= a[j]) tmp.push(a[i++]);
                    else tmp.push(a[j++]);
                }
                while (i < mid) { tmp.push(a[i++]); ops++; }
                while (j < hi) { tmp.push(a[j++]); ops++; }
                for (let k = 0; k < tmp.length; k++) a[lo + k] = tmp[k];
                yield { arr: a.slice(), active: new Set(tmp.map((_, k) => lo + k)), sorted: new Set(), ops };
            }
            yield* msort(0, a.length);
            yield { arr: a.slice(), active: new Set(), sorted: new Set(a.map((_, i) => i)), ops };
        }

        function* quickSortGen(arr) {
            const a = arr.slice();
            let ops = 0;
            function* qsort(lo, hi) {
                if (lo >= hi) return;
                let pivot = a[hi];
                let i = lo;
                for (let j = lo; j < hi; j++) {
                    ops++;
                    yield { arr: a.slice(), active: new Set([j, hi]), compare: new Set([i]), sorted: new Set(), ops };
                    if (a[j] < pivot) {
                        [a[i], a[j]] = [a[j], a[i]];
                        i++;
                    }
                }
                [a[i], a[hi]] = [a[hi], a[i]];
                yield { arr: a.slice(), active: new Set([i]), sorted: new Set(), ops };
                yield* qsort(lo, i - 1);
                yield* qsort(i + 1, hi);
            }
            yield* qsort(0, a.length - 1);
            yield { arr: a.slice(), active: new Set(), sorted: new Set(a.map((_, i) => i)), ops };
        }

        function resetSorts() {
            if (animId) { cancelAnimationFrame(animId); animId = null; }
            running = false;
            const base = randomArray(size);
            sorts = [
                { gen: null, name: 'Bubble Sort O(n\u00B2)', arr: base.slice(), highlights: {}, ops: 0, done: false, base: base.slice() },
                { gen: null, name: 'Merge Sort O(n log n)', arr: base.slice(), highlights: {}, ops: 0, done: false, base: base.slice() },
                { gen: null, name: 'Quick Sort O(n log n)', arr: base.slice(), highlights: {}, ops: 0, done: false, base: base.slice() },
            ];
            drawAll();
        }

        function drawAll() {
            ctx.clearRect(0, 0, w, h);
            const colW = w / 3 - 10;
            const barH = h - 60;
            for (let i = 0; i < sorts.length; i++) {
                const s = sorts[i];
                drawBars(s.arr, i * (colW + 15) + 10, 30, colW, barH, s.highlights, s.name, s.ops);
            }
        }

        function startAnimation() {
            if (running) return;
            running = true;
            const base = sorts[0].base || randomArray(size);
            sorts[0].gen = bubbleSortGen(base);
            sorts[1].gen = mergeSortGen(base);
            sorts[2].gen = quickSortGen(base);

            // Speed: step multiple times per frame for bubble sort to keep pace
            const stepsPerFrame = [Math.max(1, Math.floor(size / 6)), 1, 1];

            function step() {
                let allDone = true;
                for (let i = 0; i < sorts.length; i++) {
                    if (sorts[i].done) continue;
                    let result;
                    for (let s = 0; s < stepsPerFrame[i]; s++) {
                        result = sorts[i].gen.next();
                        if (result.done) { sorts[i].done = true; break; }
                    }
                    if (result && !result.done) {
                        const v = result.value;
                        sorts[i].arr = v.arr;
                        sorts[i].highlights = { active: v.active, compare: v.compare, sorted: v.sorted };
                        sorts[i].ops = v.ops;
                        allDone = false;
                    } else if (!sorts[i].done) {
                        allDone = false;
                    }
                }
                drawAll();
                if (!allDone) animId = requestAnimationFrame(step);
                else running = false;
            }
            animId = requestAnimationFrame(step);
        }

        runBtn.addEventListener('click', () => {
            resetSorts();
            setTimeout(startAnimation, 100);
        });
        resetBtn.addEventListener('click', resetSorts);

        resetSorts();
    })();

    // ==========================================
    // 3. NP-COMPLETE REDUCTION FLOW ANIMATION
    // ==========================================
    (function() {
        const cv = setupCanvas('np-reduction-canvas', 700, 450);
        if (!cv) return;
        const { ctx, w, h } = cv;

        const runBtn = document.getElementById('np-run');
        const resetBtn = document.getElementById('np-reset');
        if (!runBtn || !resetBtn) return;

        let animId = null;

        const nodes = [
            { id: 'SAT', x: 350, y: 45, color: '#e74c3c', r: 32 },
            { id: '3-SAT', x: 200, y: 130, color: '#3498db', r: 30 },
            { id: 'Clique', x: 80, y: 230, color: '#8e44ad', r: 28 },
            { id: 'Vertex\nCover', x: 80, y: 340, color: '#27ae60', r: 28 },
            { id: '3-Color', x: 320, y: 230, color: '#e67e22', r: 28 },
            { id: 'Subset\nSum', x: 500, y: 130, color: '#2980b9', r: 28 },
            { id: 'Knapsack', x: 620, y: 230, color: '#16a085', r: 28 },
            { id: 'Hamilton\nCycle', x: 200, y: 340, color: '#d35400', r: 28 },
            { id: 'TSP', x: 350, y: 400, color: '#c0392b', r: 28 },
            { id: 'Indep.\nSet', x: 500, y: 340, color: '#2c3e50', r: 28 },
            { id: 'Bin\nPacking', x: 620, y: 340, color: '#7f8c8d', r: 28 },
        ];

        const edges = [
            [0, 1], [0, 5],       // SAT -> 3-SAT, SAT -> Subset Sum
            [1, 2], [1, 4],       // 3-SAT -> Clique, 3-SAT -> 3-Color
            [2, 3], [2, 7],       // Clique -> Vertex Cover, Clique -> Hamilton
            [7, 8],               // Hamilton -> TSP
            [5, 6], [6, 10],     // Subset Sum -> Knapsack -> Bin Packing
            [3, 9],               // Vertex Cover -> Indep Set
        ];

        let animProgress = 0;
        let animating = false;
        let activeEdge = -1;

        function drawNode(n, glow) {
            ctx.save();
            if (glow) {
                ctx.shadowColor = n.color;
                ctx.shadowBlur = 18;
            }
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = n.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            ctx.fillStyle = '#fff';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const lines = n.id.split('\n');
            lines.forEach((line, i) => {
                ctx.fillText(line, n.x, n.y + (i - (lines.length - 1) / 2) * 13);
            });
            ctx.textAlign = 'start';
            ctx.textBaseline = 'alphabetic';
        }

        function drawEdge(from, to, progress, active) {
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const sx = from.x + (dx / dist) * from.r;
            const sy = from.y + (dy / dist) * from.r;
            const ex = to.x - (dx / dist) * to.r;
            const ey = to.y - (dy / dist) * to.r;

            ctx.beginPath();
            ctx.moveTo(sx, sy);
            if (progress < 1) {
                ctx.lineTo(sx + (ex - sx) * progress, sy + (ey - sy) * progress);
            } else {
                ctx.lineTo(ex, ey);
            }
            ctx.strokeStyle = active ? '#e74c3c' : '#aaa';
            ctx.lineWidth = active ? 3 : 1.5;
            ctx.stroke();

            // Arrow head
            if (progress >= 1) {
                const angle = Math.atan2(ey - sy, ex - sx);
                ctx.beginPath();
                ctx.moveTo(ex, ey);
                ctx.lineTo(ex - 10 * Math.cos(angle - 0.4), ey - 10 * Math.sin(angle - 0.4));
                ctx.lineTo(ex - 10 * Math.cos(angle + 0.4), ey - 10 * Math.sin(angle + 0.4));
                ctx.closePath();
                ctx.fillStyle = active ? '#e74c3c' : '#aaa';
                ctx.fill();
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            // Title
            ctx.fillStyle = '#222';
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('NP-Complete Polynomial-Time Reductions', w / 2, 22);
            ctx.textAlign = 'start';

            // Draw edges
            for (let i = 0; i < edges.length; i++) {
                const [fi, ti] = edges[i];
                const isActive = i === activeEdge;
                const prog = i < activeEdge ? 1 : (i === activeEdge ? animProgress : 0);
                if (prog > 0 || !animating) {
                    drawEdge(nodes[fi], nodes[ti], animating ? prog : 1, isActive);
                }
            }

            // Draw nodes
            nodes.forEach((n, i) => {
                const glowing = animating && activeEdge >= 0 && (
                    edges[activeEdge] && (edges[activeEdge][0] === i || edges[activeEdge][1] === i)
                );
                drawNode(n, glowing);
            });

            // Legend
            ctx.fillStyle = '#999';
            ctx.font = '11px Inter, sans-serif';
            ctx.fillText('\u2264p = polynomial-time reduction', 10, h - 8);
        }

        function animate() {
            if (!animating) return;
            animProgress += 0.035;
            if (animProgress >= 1) {
                animProgress = 0;
                activeEdge++;
                if (activeEdge >= edges.length) {
                    animating = false;
                    activeEdge = -1;
                    draw();
                    return;
                }
            }
            draw();
            animId = requestAnimationFrame(animate);
        }

        function reset() {
            if (animId) cancelAnimationFrame(animId);
            animating = false;
            activeEdge = -1;
            animProgress = 0;
            draw();
        }

        runBtn.addEventListener('click', () => {
            reset();
            animating = true;
            activeEdge = 0;
            animProgress = 0;
            animate();
        });
        resetBtn.addEventListener('click', reset);

        draw();
    })();
}
