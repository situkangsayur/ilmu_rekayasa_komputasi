// ============================================================
// COMPLEXITY THEORY — ENHANCED OVERRIDE
// Overrides sections.complexity and initAlgorithmAnimations
// ============================================================

// Override complexity section
sections.complexity = () => `

<h1 class="section-title animate-in">Teori Kompleksitas Komputasi</h1>
<p class="section-subtitle animate-in">Memahami batas-batas komputasi: dari notasi asimptotik hingga kelas P, NP, NP-Hard, dan strategi menghadapi masalah intractable</p>

<!-- ==================== 1. BIG-O NOTATION ==================== -->
<h2 class="animate-in">1. Big-O Notation (Notasi Kompleksitas)</h2>

<div class="card animate-in">
    <h3>Apa Itu Big-O?</h3>
    <p>Big-O adalah cara matematikawan dan programmer mendeskripsikan <strong>seberapa cepat pertumbuhan</strong> waktu atau memori sebuah algoritma ketika ukuran input (n) membesar. Big-O BUKAN mengukur waktu absolut (misal "3 detik"), tapi mengukur <strong>pola pertumbuhan</strong>.</p>
    <div class="info-box">
        <strong>Analogi Sederhana:</strong> Bayangkan kamu mengirim file. Kalau pakai internet, waktu kirim tergantung ukuran file (O(n)). Kalau kamu copy ke USB dan kirim pakai kurir, waktu selalu sama berapapun ukurannya (O(1)). Untuk file kecil, internet lebih cepat. Tapi untuk file 1 TB? Kurir menang! Big-O membantu kita memahami <em>kapan</em> satu pendekatan menang dari yang lain.
    </div>
    <p>Secara formal: <strong>f(n) = O(g(n))</strong> artinya ada konstanta c &gt; 0 dan n<sub>0</sub> sehingga f(n) &le; c &middot; g(n) untuk semua n &ge; n<sub>0</sub>.</p>
    <p>Dalam bahasa sehari-hari: "Fungsi f(n) <strong>tidak tumbuh lebih cepat</strong> dari g(n) ketika n membesar."</p>
</div>

<div class="card animate-in">
    <h3>Tabel Notasi Kompleksitas</h3>
    <p>Berikut adalah semua notasi umum yang wajib dipahami, beserta contoh nyata dan berapa operasi yang dibutuhkan untuk n = 1000:</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Notasi</th><th>Nama</th><th>Contoh Algoritma</th><th>Analogi Sehari-hari</th><th>n=1000</th></tr>
    <tr><td><code>O(1)</code></td><td>Constant</td><td>Array access, hash lookup</td><td>Buka buku di halaman tertentu (langsung)</td><td>1</td></tr>
    <tr><td><code>O(log n)</code></td><td>Logarithmic</td><td>Binary search, balanced BST lookup</td><td>Cari kata di kamus (bagi dua terus)</td><td>~10</td></tr>
    <tr><td><code>O(√n)</code></td><td>Square Root</td><td>Primality trial division</td><td>Periksa lantai demi lantai di gedung</td><td>~32</td></tr>
    <tr><td><code>O(n)</code></td><td>Linear</td><td>Linear search, array sum</td><td>Baca buku halaman per halaman</td><td>1,000</td></tr>
    <tr><td><code>O(n log n)</code></td><td>Linearithmic</td><td>Merge sort, heap sort, FFT</td><td>Sortir kartu dengan strategi bagi-gabung</td><td>~10,000</td></tr>
    <tr><td><code>O(n&sup2;)</code></td><td>Quadratic</td><td>Bubble sort, nested loop</td><td>Bandingkan setiap orang dengan orang lain</td><td>1,000,000</td></tr>
    <tr><td><code>O(n&sup3;)</code></td><td>Cubic</td><td>Naive matrix multiply, Floyd-Warshall</td><td>3 nested loop</td><td>10<sup>9</sup></td></tr>
    <tr><td><code>O(2&sup1;)</code></td><td>Exponential</td><td>Subset enumeration, brute force SAT</td><td>Coba semua kombinasi saklar lampu</td><td>~10<sup>301</sup></td></tr>
    <tr><td><code>O(n!)</code></td><td>Factorial</td><td>TSP brute force, permutation</td><td>Coba semua urutan kota yang dikunjungi</td><td>~10<sup>2567</sup></td></tr>
    </table>
    </div>
    <div class="warn-box">
        <strong>Perspektif:</strong> Pada n=1000, O(n&sup2;) = 1 juta operasi (masih OK), tapi O(2<sup>n</sup>) = angka dengan 301 digit! Bahkan komputer tercepat di dunia tidak bisa menghitungnya sebelum alam semesta berakhir.
    </div>
</div>

<div class="card animate-in">
    <h3>Aturan Menentukan Big-O</h3>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Abaikan konstanta pengali:</strong> 5n&sup2; &rarr; O(n&sup2;). Konstanta tidak mempengaruhi pola pertumbuhan.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Ambil suku tertinggi:</strong> 3n&sup2; + 100n + 500 &rarr; O(n&sup2;). Suku n&sup2; mendominasi saat n besar.</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Loop bertingkat = kalikan:</strong> for(n) { for(n) { ... } } &rarr; O(n) &times; O(n) = O(n&sup2;).</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Loop berurutan = jumlahkan:</strong> for(n) + for(n) &rarr; O(n) + O(n) = O(n) (ambil yang dominan).</div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-text"><strong>Rekursi yang membagi input jadi setengah:</strong> T(n) = T(n/2) + O(1) &rarr; O(log n). Contoh: binary search.</div></div>
    </div>
</div>

<!-- ==================== 2. BIG-O, BIG-THETA, BIG-OMEGA ==================== -->
<h2 class="animate-in">2. Big-O, Big-&Theta;, dan Big-&Omega;</h2>

<div class="card animate-in">
    <p>Tiga notasi asimptotik ini menggambarkan <strong>pertumbuhan fungsi</strong> dari sudut pandang berbeda. Bayangkan kamu memesan ojol &mdash; ada estimasi waktu tercepat, rata-rata, dan paling lambat.</p>
</div>

<div class="card-grid-3 animate-in">
    <div class="card" style="border-color:var(--red)">
        <h3 style="color:var(--red)">O (Big-O) &mdash; Upper Bound</h3>
        <p><strong>Analogi:</strong> "Paling lambat segini."</p>
        <p>Big-O memberikan <strong>batas atas</strong> pertumbuhan. Artinya algoritma <em>tidak akan pernah lebih lambat</em> dari ini untuk input yang cukup besar.</p>
        <div class="code-block"><span class="cm">// f(n) = O(g(n)) artinya:</span>
<span class="cm">// Ada konstanta c &gt; 0 dan n&#8320; sehingga</span>
<span class="cm">// f(n) &le; c &middot; g(n) untuk semua n &ge; n&#8320;</span>

<span class="cm">// Contoh: 3n&sup2; + 5n + 2 = O(n&sup2;)</span>
<span class="cm">// Karena untuk c=4, n&#8320;=6:</span>
<span class="cm">// 3n&sup2; + 5n + 2 &le; 4n&sup2; &#10003;</span></div>
        <p><strong>Kapan dipakai:</strong> <em>Paling sering digunakan!</em> Untuk menjamin <strong>worst case</strong> tidak melebihi batas tertentu.</p>
        <div class="info-box">Analogi: "Paket kamu sampai <strong>paling lambat</strong> 3 hari." Bisa lebih cepat, tapi dijamin tidak lebih dari 3 hari.</div>
    </div>
    <div class="card" style="border-color:var(--green)">
        <h3 style="color:var(--green)">&Omega; (Big-Omega) &mdash; Lower Bound</h3>
        <p><strong>Analogi:</strong> "Paling cepat segini."</p>
        <p>Big-&Omega; memberikan <strong>batas bawah</strong> pertumbuhan. Artinya algoritma <em>pasti membutuhkan setidaknya</em> sebanyak ini operasi.</p>
        <div class="code-block"><span class="cm">// f(n) = &Omega;(g(n)) artinya:</span>
<span class="cm">// Ada konstanta c &gt; 0 dan n&#8320; sehingga</span>
<span class="cm">// f(n) &ge; c &middot; g(n) untuk semua n &ge; n&#8320;</span>

<span class="cm">// Contoh: 3n&sup2; + 5n + 2 = &Omega;(n&sup2;)</span>
<span class="cm">// Karena untuk c=3, n&#8320;=1:</span>
<span class="cm">// 3n&sup2; + 5n + 2 &ge; 3n&sup2; &#10003;</span></div>
        <p><strong>Kapan dipakai:</strong> Membuktikan bahwa <strong>tidak ada algoritma yang bisa lebih cepat</strong> dari batas ini. Contoh: comparison-based sorting = &Omega;(n log n).</p>
        <div class="info-box">Analogi: "Perjalanan ini <strong>minimal</strong> butuh 10 menit." Bisa lebih lama, tapi mustahil lebih cepat dari 10 menit.</div>
    </div>
    <div class="card" style="border-color:var(--accent)">
        <h3 style="color:var(--accent)">&Theta; (Big-Theta) &mdash; Tight Bound</h3>
        <p><strong>Analogi:</strong> "Persis di kisaran segini."</p>
        <p>Big-&Theta; memberikan <strong>batas ketat</strong> &mdash; atas DAN bawah sekaligus. Fungsi tumbuh <em>persis sebanding</em> dengan g(n).</p>
        <div class="code-block"><span class="cm">// f(n) = &Theta;(g(n)) artinya:</span>
<span class="cm">// f(n) = O(g(n)) DAN f(n) = &Omega;(g(n))</span>
<span class="cm">// Ada c&#8321;, c&#8322; &gt; 0 dan n&#8320; sehingga</span>
<span class="cm">// c&#8321;&middot;g(n) &le; f(n) &le; c&#8322;&middot;g(n) untuk n &ge; n&#8320;</span>

<span class="cm">// Contoh: 3n&sup2; + 5n + 2 = &Theta;(n&sup2;)</span>
<span class="cm">// Karena O(n&sup2;) DAN &Omega;(n&sup2;) &#10003;</span></div>
        <p><strong>Kapan dipakai:</strong> Saat kita tahu <strong>persis</strong> berapa pertumbuhannya, bukan hanya batas atas/bawah.</p>
        <div class="info-box">Analogi: "Perjalanan butuh <strong>antara</strong> 15-20 menit." Tidak kurang, tidak lebih dari rentang itu.</div>
    </div>
</div>

<div class="card animate-in">
    <h3>Perbandingan Lengkap Tiga Notasi</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Notasi</th><th>Arti</th><th>Analogi</th><th>Matematika</th><th>Contoh Sehari-hari</th></tr>
    <tr><td><code>O(g(n))</code></td><td>Paling lambat</td><td>&le; (at most)</td><td>f(n) &le; c&middot;g(n)</td><td>"Saya sampai <strong>paling lambat</strong> 30 menit"</td></tr>
    <tr><td><code>&Omega;(g(n))</code></td><td>Paling cepat</td><td>&ge; (at least)</td><td>f(n) &ge; c&middot;g(n)</td><td>"Saya butuh <strong>minimal</strong> 10 menit"</td></tr>
    <tr><td><code>&Theta;(g(n))</code></td><td>Persis di kisaran</td><td>= (exactly)</td><td>c&#8321;&middot;g(n) &le; f(n) &le; c&#8322;&middot;g(n)</td><td>"Saya sampai <strong>antara</strong> 15-20 menit"</td></tr>
    </table>
    </div>
    <div class="info-box">
        <strong>Tips Mudah:</strong> Jika sebuah algoritma O(n&sup2;) sekaligus &Omega;(n&sup2;), maka dia <strong>&Theta;(n&sup2;)</strong>. Big-&Theta; = Big-O + Big-&Omega; bertemu di kelas yang sama.
    </div>
</div>

<div class="card animate-in">
    <h3>Contoh Penerapan pada Algoritma Nyata</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Algoritma</th><th>Best Case (&Omega;)</th><th>Average Case (&Theta;)</th><th>Worst Case (O)</th></tr>
    <tr><td><strong>Linear Search</strong></td><td>&Omega;(1) &mdash; item di awal</td><td>&Theta;(n) &mdash; rata-rata di tengah</td><td>O(n) &mdash; item di akhir / tidak ada</td></tr>
    <tr><td><strong>Binary Search</strong></td><td>&Omega;(1) &mdash; item di tengah</td><td>&Theta;(log n)</td><td>O(log n)</td></tr>
    <tr><td><strong>Bubble Sort</strong></td><td>&Omega;(n) &mdash; sudah terurut</td><td>&Theta;(n&sup2;)</td><td>O(n&sup2;) &mdash; terbalik urutan</td></tr>
    <tr><td><strong>Merge Sort</strong></td><td>&Omega;(n log n)</td><td>&Theta;(n log n)</td><td>O(n log n) &mdash; selalu sama!</td></tr>
    <tr><td><strong>Quick Sort</strong></td><td>&Omega;(n log n)</td><td>&Theta;(n log n)</td><td>O(n&sup2;) &mdash; pivot terburuk</td></tr>
    <tr><td><strong>Hash Table Lookup</strong></td><td>&Omega;(1)</td><td>&Theta;(1) &mdash; amortized</td><td>O(n) &mdash; semua collision</td></tr>
    <tr><td><strong>Heap Sort</strong></td><td>&Omega;(n log n)</td><td>&Theta;(n log n)</td><td>O(n log n)</td></tr>
    <tr><td><strong>Insertion Sort</strong></td><td>&Omega;(n) &mdash; sudah terurut</td><td>&Theta;(n&sup2;)</td><td>O(n&sup2;)</td></tr>
    </table>
    </div>
    <div class="warn-box">
        <strong>Mengapa Merge Sort lebih "predictable" dari Quick Sort?</strong> Karena Merge Sort punya &Theta;(n log n) &mdash; best, average, dan worst case sama. Quick Sort bisa jatuh ke O(n&sup2;) pada worst case, meskipun average-nya &Theta;(n log n).
    </div>
</div>

<div class="card animate-in">
    <h3>Visualisasi Big-O, Big-Theta, Big-Omega</h3>
    <p>Kurva di bawah menunjukkan sebuah fungsi <strong>f(n) = 2n&sup2; + 3n + 1</strong> dibandingkan dengan batas atas (O), batas bawah (&Omega;), dan batas ketat (&Theta;).</p>
    <div class="anim-container">
        <canvas id="asymptotic-chart" width="700" height="350"></canvas>
        <div class="anim-controls">
            <span class="anim-label"><span style="color:#f87171">&marker;</span> c&#8322;&middot;g(n) = 3n&sup2; &mdash; Big-O upper bound</span>
            <span class="anim-label"><span style="color:#34d399">&marker;</span> c&#8321;&middot;g(n) = n&sup2; &mdash; Big-&Omega; lower bound</span>
            <span class="anim-label"><span style="color:#38bdf8">&marker;</span> f(n) = 2n&sup2;+3n+1 &mdash; fungsi aktual</span>
            <span class="anim-label"><span style="color:#fbbf24">&marker;</span> &Theta;(n&sup2;) region (area antara bounds)</span>
        </div>
    </div>
</div>

<!-- ==================== 3. TIME vs SPACE COMPLEXITY ==================== -->
<h2 class="animate-in">3. Time Complexity vs Space Complexity</h2>

<div class="card animate-in">
    <p>Setiap algoritma menggunakan dua sumber daya utama. Memahami keduanya sangat penting untuk menulis kode yang efisien.</p>
    <div class="card-grid">
        <div class="card" style="border-color:var(--yellow)">
            <h3 style="color:var(--yellow)">Time Complexity (Kompleksitas Waktu)</h3>
            <p><strong>Berapa lama</strong> algoritma berjalan terhadap ukuran input. Diukur dari jumlah <strong>operasi dasar</strong> (perbandingan, assignment, aritmatika) yang dilakukan.</p>
            <div class="code-block"><span class="cm">// Time: O(n) &mdash; loop n kali</span>
<span class="kw">for</span> i <span class="kw">in</span> range(n):
    total += arr[i]  <span class="cm">// 1 operasi per iterasi</span>

<span class="cm">// Time: O(n&sup2;) &mdash; nested loop</span>
<span class="kw">for</span> i <span class="kw">in</span> range(n):
    <span class="kw">for</span> j <span class="kw">in</span> range(n):
        matrix[i][j] = <span class="num">0</span>  <span class="cm">// n &times; n operasi</span></div>
        </div>
        <div class="card" style="border-color:var(--accent3)">
            <h3 style="color:var(--accent3)">Space Complexity (Kompleksitas Ruang)</h3>
            <p><strong>Berapa banyak memori tambahan</strong> yang dibutuhkan algoritma (selain input itu sendiri). Diukur dari variabel, array, stack rekursi, dan struktur data yang dibuat.</p>
            <div class="code-block"><span class="cm">// Space: O(1) &mdash; hanya variabel biasa</span>
total = <span class="num">0</span>
<span class="kw">for</span> x <span class="kw">in</span> arr:
    total += x  <span class="cm">// tidak ada memori tambahan</span>

<span class="cm">// Space: O(n) &mdash; buat array baru</span>
result = [<span class="num">0</span>] * n
<span class="kw">for</span> i <span class="kw">in</span> range(n):
    result[i] = arr[i] * <span class="num">2</span>  <span class="cm">// array baru ukuran n</span></div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Trade-off: Time vs Space</h3>
    <p>Seringkali ada <strong>pertukaran</strong> antara waktu dan memori &mdash; kita bisa mempercepat algoritma dengan menggunakan lebih banyak memori, atau menghemat memori dengan mengorbankan kecepatan. Ini adalah salah satu keputusan desain paling fundamental dalam computer science.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Contoh</th><th>Approach A (Hemat Memori)</th><th>Approach B (Hemat Waktu)</th><th>Trade-off</th></tr>
    <tr>
        <td><strong>Two Sum</strong></td>
        <td>Brute force: Time O(n&sup2;), Space O(1)</td>
        <td>Hash map: Time O(n), Space O(n)</td>
        <td>Pakai memori n &rarr; 1000x lebih cepat</td>
    </tr>
    <tr>
        <td><strong>Fibonacci</strong></td>
        <td>Rekursif: Time O(2<sup>n</sup>), Space O(n)</td>
        <td>DP table: Time O(n), Space O(n)</td>
        <td>Simpan hasil &rarr; hindari recompute</td>
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
        <td>In-place &rarr; hemat memori</td>
    </tr>
    <tr>
        <td><strong>Graph: Adj Matrix vs List</strong></td>
        <td>Adj List: Space O(V+E), lookup O(degree)</td>
        <td>Adj Matrix: Space O(V&sup2;), lookup O(1)</td>
        <td>Matrix lebih cepat lookup, List hemat memori</td>
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

<div class="card animate-in">
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
    <tr><td>DP (Knapsack)</td><td>O(n &times; W)</td><td>O(n &times; W) &rarr; bisa O(W)</td><td>Tabel 2D, tapi bisa dioptimasi ke 1D.</td></tr>
    <tr><td>Hash Table</td><td>O(1) avg</td><td>O(n)</td><td>Menyimpan n elemen + bucket overhead.</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Contoh Analisis: Mencari Duplikat dalam Array</h3>
    <div class="code-block"><span class="kw">def</span> <span class="fn">find_duplicates</span>(arr):                <span class="cm"># n = len(arr)</span>
    seen = set()                            <span class="cm"># Space: O(n) &mdash; set bisa berisi n elemen</span>
    duplicates = []                         <span class="cm"># Space: O(n) &mdash; worst case semua duplikat</span>
    <span class="kw">for</span> num <span class="kw">in</span> arr:                         <span class="cm"># Time: O(n) &mdash; loop n kali</span>
        <span class="kw">if</span> num <span class="kw">in</span> seen:                     <span class="cm"># Time: O(1) &mdash; hash lookup</span>
            duplicates.append(num)          <span class="cm"># Time: O(1) &mdash; amortized</span>
        <span class="kw">else</span>:
            seen.add(num)                   <span class="cm"># Time: O(1) &mdash; hash insert</span>
    <span class="kw">return</span> duplicates

<span class="cm"># Total: Time = O(n), Space = O(n)</span>
<span class="cm"># Alternatif brute force: O(1) space tapi O(n&sup2;) time</span></div>
</div>

<!-- ==================== 4. VISUALISASI PERTUMBUHAN ==================== -->
<h2 class="animate-in">4. Visualisasi Pertumbuhan Kompleksitas</h2>

<div class="card animate-in">
    <p>Grafik di bawah menunjukkan bagaimana berbagai fungsi kompleksitas tumbuh seiring bertambahnya n. Perhatikan bagaimana O(2<sup>n</sup>) meledak begitu cepat dibanding yang lain!</p>
    <div class="anim-container">
        <canvas id="complexity-chart" width="700" height="350"></canvas>
        <div class="anim-controls">
            <span class="anim-label"><span style="color:#34d399">&marker;</span> O(1) &mdash; Constant</span>
            <span class="anim-label"><span style="color:#38bdf8">&marker;</span> O(log n) &mdash; Logarithmic</span>
            <span class="anim-label"><span style="color:#818cf8">&marker;</span> O(n) &mdash; Linear</span>
            <span class="anim-label"><span style="color:#fbbf24">&marker;</span> O(n log n) &mdash; Linearithmic</span>
            <span class="anim-label"><span style="color:#fb923c">&marker;</span> O(n&sup2;) &mdash; Quadratic</span>
            <span class="anim-label"><span style="color:#f87171">&marker;</span> O(2<sup>n</sup>) &mdash; Exponential</span>
        </div>
    </div>
    <div class="info-box">
        <strong>Insight:</strong> Untuk n kecil (&lt; 10), perbedaan antar algoritma tidak terasa. Tapi untuk n = 100+, pilihan algoritma menjadi kritis. Itulah mengapa Big-O fokus pada pertumbuhan untuk n besar (asymptotic behavior).
    </div>
</div>

<!-- ==================== 5. FIBONACCI: 4 APPROACHES ==================== -->
<h2 class="animate-in">5. Fibonacci: 4 Pendekatan Berbeda</h2>

<div class="card animate-in">
    <p>Fibonacci adalah contoh klasik bagaimana <strong>strategi algoritma</strong> mempengaruhi kompleksitas secara dramatis. Masalah yang sama &mdash; menghitung bilangan Fibonacci ke-n &mdash; bisa memiliki kompleksitas dari O(n) sampai O(2<sup>n</sup>)!</p>
    <p>Definisi: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) untuk n &ge; 2.</p>
</div>

<div class="tabs animate-in">
    <button class="tab-btn active" data-tab="fib-imperative">Imperative Loop</button>
    <button class="tab-btn" data-tab="fib-recursive">Rekursif Naive</button>
    <button class="tab-btn" data-tab="fib-dp">Rekursif + DP</button>
    <button class="tab-btn" data-tab="fib-tail">Tail Rekursif</button>
</div>

<div data-tab-content="fib-imperative" class="tab-content active">
<div class="card">
    <h3 style="color:var(--green)">Imperative Loop &mdash; O(n) Time, O(1) Space</h3>
    <p>Pendekatan paling efisien dan straightforward. Gunakan dua variabel yang "bergeser" maju. Tidak ada overhead function call, tidak ada memori tambahan.</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="fib-imp-c">C</button>
        <button class="tab-btn" data-tab="fib-imp-go">Go</button>
        <button class="tab-btn" data-tab="fib-imp-rust">Rust</button>
    </div>
    <div data-tab-content="fib-imp-c" class="tab-content active">
<div class="code-block"><span class="type">long long</span> <span class="fn">fibonacci</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n <= <span class="num">1</span>) <span class="kw">return</span> n;
    <span class="type">long long</span> a = <span class="num">0</span>, b = <span class="num">1</span>, temp;
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">2</span>; i <= n; i++) {
        temp = a + b;   <span class="cm">// simpan jumlah</span>
        a = b;           <span class="cm">// geser a</span>
        b = temp;        <span class="cm">// geser b</span>
    }
    <span class="kw">return</span> b;
}</div>
    </div>
    <div data-tab-content="fib-imp-go" class="tab-content">
<div class="code-block"><span class="kw">func</span> <span class="fn">fibonacci</span>(n <span class="type">int</span>) <span class="type">int64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> <span class="type">int64</span>(n) }
    a, b := <span class="type">int64</span>(<span class="num">0</span>), <span class="type">int64</span>(<span class="num">1</span>)
    <span class="kw">for</span> i := <span class="num">2</span>; i <= n; i++ {
        a, b = b, a+b  <span class="cm">// Go parallel assignment!</span>
    }
    <span class="kw">return</span> b
}</div>
    </div>
    <div data-tab-content="fib-imp-rust" class="tab-content">
<div class="code-block"><span class="kw">fn</span> <span class="fn">fibonacci</span>(n: <span class="type">u64</span>) -> <span class="type">u64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> n; }
    <span class="kw">let</span> (<span class="kw">mut</span> a, <span class="kw">mut</span> b) = (<span class="num">0u64</span>, <span class="num">1u64</span>);
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">2</span>..=n {
        <span class="kw">let</span> temp = a + b;
        a = b;
        b = temp;
    }
    b
}</div>
    </div>
    <div class="success-box"><strong>Rekomendasi: Gunakan ini untuk produksi!</strong> O(n) waktu, O(1) memori. Tidak ada rekursi, tidak ada overhead. Paling efisien dan paling mudah dipahami.</div>
</div>
</div>

<div data-tab-content="fib-recursive" class="tab-content">
<div class="card">
    <h3 style="color:var(--red)">Rekursif Naive &mdash; O(2<sup>n</sup>) Time, O(n) Space</h3>
    <p>Intuitif dan mengikuti definisi matematika secara langsung, tapi <strong>sangat lambat</strong>. Menghitung subproblem yang sama berkali-kali! Pohon rekursi tumbuh secara eksponensial.</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="fib-rec-c">C</button>
        <button class="tab-btn" data-tab="fib-rec-go">Go</button>
        <button class="tab-btn" data-tab="fib-rec-rust">Rust</button>
    </div>
    <div data-tab-content="fib-rec-c" class="tab-content active">
<div class="code-block"><span class="type">long long</span> <span class="fn">fibonacci</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n <= <span class="num">1</span>) <span class="kw">return</span> n;
    <span class="kw">return</span> <span class="fn">fibonacci</span>(n - <span class="num">1</span>) + <span class="fn">fibonacci</span>(n - <span class="num">2</span>);
    <span class="cm">// Eksponensial! fib(50) = ~1.2 x 10&#185;&#8304; calls</span>
    <span class="cm">// fib(40) sudah butuh ~1 milyar operasi!</span>
}</div>
    </div>
    <div data-tab-content="fib-rec-go" class="tab-content">
<div class="code-block"><span class="kw">func</span> <span class="fn">fibonacci</span>(n <span class="type">int</span>) <span class="type">int64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> <span class="type">int64</span>(n) }
    <span class="kw">return</span> <span class="fn">fibonacci</span>(n-<span class="num">1</span>) + <span class="fn">fibonacci</span>(n-<span class="num">2</span>)
    <span class="cm">// Sama lambatnya di Go!</span>
}</div>
    </div>
    <div data-tab-content="fib-rec-rust" class="tab-content">
<div class="code-block"><span class="kw">fn</span> <span class="fn">fibonacci</span>(n: <span class="type">u64</span>) -> <span class="type">u64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> n; }
    <span class="fn">fibonacci</span>(n - <span class="num">1</span>) + <span class="fn">fibonacci</span>(n - <span class="num">2</span>)
    <span class="cm">// Rust yang cepat pun tidak bisa menyelamatkan O(2^n)!</span>
}</div>
    </div>
    <div class="warn-box"><strong>Jangan gunakan ini di produksi!</strong> fib(40) membutuhkan ~1 milyar operasi. fib(50) = ~12 milyar. fib(100) = angka astronomis. Tree rekursi tumbuh eksponensial karena subproblem dihitung berulang-ulang.</div>
</div>
</div>

<div data-tab-content="fib-dp" class="tab-content">
<div class="card">
    <h3 style="color:var(--accent)">Rekursif + Memoization (DP) &mdash; O(n) Time, O(n) Space</h3>
    <p>Simpan hasil yang sudah dihitung di tabel (memo). Setiap subproblem hanya dihitung SATU kali. Ini adalah inti dari <strong>Dynamic Programming</strong> &mdash; mengorbankan memori O(n) untuk mendapatkan waktu O(n).</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="fib-dp-c">C</button>
        <button class="tab-btn" data-tab="fib-dp-go">Go</button>
        <button class="tab-btn" data-tab="fib-dp-rust">Rust</button>
    </div>
    <div data-tab-content="fib-dp-c" class="tab-content active">
<div class="code-block"><span class="type">long long</span> memo[<span class="num">100</span>] = {<span class="num">0</span>};
<span class="type">int</span> computed[<span class="num">100</span>] = {<span class="num">0</span>};

<span class="type">long long</span> <span class="fn">fibonacci</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n <= <span class="num">1</span>) <span class="kw">return</span> n;
    <span class="kw">if</span> (computed[n]) <span class="kw">return</span> memo[n];  <span class="cm">// sudah dihitung? langsung return</span>
    computed[n] = <span class="num">1</span>;
    memo[n] = <span class="fn">fibonacci</span>(n-<span class="num">1</span>) + <span class="fn">fibonacci</span>(n-<span class="num">2</span>);
    <span class="kw">return</span> memo[n];
}</div>
    </div>
    <div data-tab-content="fib-dp-go" class="tab-content">
<div class="code-block"><span class="kw">func</span> <span class="fn">fibonacci</span>(n <span class="type">int</span>, memo <span class="kw">map</span>[<span class="type">int</span>]<span class="type">int64</span>) <span class="type">int64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> <span class="type">int64</span>(n) }
    <span class="kw">if</span> v, ok := memo[n]; ok { <span class="kw">return</span> v }
    memo[n] = <span class="fn">fibonacci</span>(n-<span class="num">1</span>, memo) + <span class="fn">fibonacci</span>(n-<span class="num">2</span>, memo)
    <span class="kw">return</span> memo[n]
}</div>
    </div>
    <div data-tab-content="fib-dp-rust" class="tab-content">
<div class="code-block"><span class="kw">use</span> std::collections::<span class="type">HashMap</span>;

<span class="kw">fn</span> <span class="fn">fibonacci</span>(n: <span class="type">u64</span>, memo: &<span class="kw">mut</span> <span class="type">HashMap</span>&lt;<span class="type">u64</span>, <span class="type">u64</span>&gt;) -> <span class="type">u64</span> {
    <span class="kw">if</span> n <= <span class="num">1</span> { <span class="kw">return</span> n; }
    <span class="kw">if</span> <span class="kw">let</span> <span class="type">Some</span>(&v) = memo.<span class="fn">get</span>(&n) { <span class="kw">return</span> v; }
    <span class="kw">let</span> result = <span class="fn">fibonacci</span>(n-<span class="num">1</span>, memo) + <span class="fn">fibonacci</span>(n-<span class="num">2</span>, memo);
    memo.<span class="fn">insert</span>(n, result);
    result
}</div>
    </div>
    <div class="info-box"><strong>Inti Dynamic Programming:</strong> Menggunakan O(n) memori tambahan tapi waktu turun dari O(2<sup>n</sup>) ke O(n). Dari miliaran operasi menjadi hanya ratusan. Trade-off yang sangat layak!</div>
</div>
</div>

<div data-tab-content="fib-tail" class="tab-content">
<div class="card">
    <h3 style="color:var(--accent3)">Tail Recursive &mdash; O(n) Time, O(1)* Space</h3>
    <p>Akumulator membawa state di parameter. Compiler yang mendukung <strong>Tail Call Optimization (TCO)</strong> bisa mengubahnya jadi loop, sehingga space menjadi O(1). *O(1) hanya jika compiler mendukung TCO.</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="fib-tail-c">C</button>
        <button class="tab-btn" data-tab="fib-tail-go">Go</button>
        <button class="tab-btn" data-tab="fib-tail-rust">Rust</button>
    </div>
    <div data-tab-content="fib-tail-c" class="tab-content active">
<div class="code-block"><span class="type">long long</span> <span class="fn">fib_tail</span>(<span class="type">int</span> n, <span class="type">long long</span> a, <span class="type">long long</span> b) {
    <span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> a;
    <span class="kw">if</span> (n == <span class="num">1</span>) <span class="kw">return</span> b;
    <span class="kw">return</span> <span class="fn">fib_tail</span>(n - <span class="num">1</span>, b, a + b); <span class="cm">// tail call!</span>
}
<span class="type">long long</span> <span class="fn">fibonacci</span>(<span class="type">int</span> n) {
    <span class="kw">return</span> <span class="fn">fib_tail</span>(n, <span class="num">0</span>, <span class="num">1</span>);
}
<span class="cm">// Compile dengan: gcc -O2 fib.c</span>
<span class="cm">// GCC akan mengoptimasi tail call menjadi jump (loop)!</span></div>
    </div>
    <div data-tab-content="fib-tail-go" class="tab-content">
<div class="code-block"><span class="cm">// Go TIDAK mendukung TCO, tapi pattern tetap bersih</span>
<span class="kw">func</span> <span class="fn">fibTail</span>(n <span class="type">int</span>, a, b <span class="type">int64</span>) <span class="type">int64</span> {
    <span class="kw">if</span> n == <span class="num">0</span> { <span class="kw">return</span> a }
    <span class="kw">if</span> n == <span class="num">1</span> { <span class="kw">return</span> b }
    <span class="kw">return</span> <span class="fn">fibTail</span>(n-<span class="num">1</span>, b, a+b)
}
<span class="kw">func</span> <span class="fn">fibonacci</span>(n <span class="type">int</span>) <span class="type">int64</span> {
    <span class="kw">return</span> <span class="fn">fibTail</span>(n, <span class="num">0</span>, <span class="num">1</span>)
}</div>
    </div>
    <div data-tab-content="fib-tail-rust" class="tab-content">
<div class="code-block"><span class="cm">// Rust juga tidak menjamin TCO di stable</span>
<span class="kw">fn</span> <span class="fn">fib_tail</span>(n: <span class="type">u64</span>, a: <span class="type">u64</span>, b: <span class="type">u64</span>) -> <span class="type">u64</span> {
    <span class="kw">match</span> n {
        <span class="num">0</span> => a,
        <span class="num">1</span> => b,
        _ => <span class="fn">fib_tail</span>(n - <span class="num">1</span>, b, a + b),
    }
}
<span class="kw">fn</span> <span class="fn">fibonacci</span>(n: <span class="type">u64</span>) -> <span class="type">u64</span> {
    <span class="fn">fib_tail</span>(n, <span class="num">0</span>, <span class="num">1</span>)
}</div>
    </div>
    <div class="info-box"><strong>Catatan TCO:</strong> C (dengan -O2) mendukung TCO. Go dan Rust (stable) <em>belum</em> menjamin TCO, jadi di kedua bahasa ini space tetap O(n) karena call stack. Untuk produksi di Go/Rust, gunakan imperative loop.</div>
</div>
</div>

<h3 class="animate-in">Visualisasi Fibonacci: Perbandingan 4 Pendekatan</h3>
<div class="card animate-in">
    <p>Geser slider untuk melihat bagaimana jumlah operasi berubah drastis antara pendekatan yang berbeda. Perhatikan skala logaritmik saat n membesar!</p>
    <div class="anim-container">
        <canvas id="fib-compare-canvas" width="700" height="400"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="fib-run">Run Comparison</button>
            <button class="anim-btn secondary" id="fib-reset">Reset</button>
            <span class="anim-label">n = <input class="anim-input" id="fib-n-input" type="range" min="5" max="40" value="20" style="width:120px"> <span id="fib-n-display">20</span></span>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Ringkasan Perbandingan Fibonacci</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Pendekatan</th><th>Time</th><th>Space</th><th>TCO</th><th>Rekursif?</th><th>Kapan Digunakan</th></tr>
    <tr><td><strong>Imperative Loop</strong></td><td>O(n)</td><td>O(1)</td><td>N/A</td><td>Tidak</td><td><span class="badge badge-green">Produksi &mdash; selalu gunakan ini</span></td></tr>
    <tr><td><strong>Rekursif Naive</strong></td><td>O(2<sup>n</sup>)</td><td>O(n)</td><td>Tidak</td><td>Ya</td><td><span class="badge badge-red">JANGAN &mdash; hanya untuk demonstrasi</span></td></tr>
    <tr><td><strong>Rekursif + DP</strong></td><td>O(n)</td><td>O(n)</td><td>Tidak</td><td>Ya</td><td><span class="badge badge-blue">Edukasi DP &amp; masalah serupa</span></td></tr>
    <tr><td><strong>Tail Recursive</strong></td><td>O(n)</td><td>O(1)*</td><td>Jika supported</td><td>Ya</td><td><span class="badge badge-purple">Bahasa fungsional (Haskell, Erlang)</span></td></tr>
    </table>
    </div>
    <div class="warn-box"><strong>Key Insight:</strong> Masalah yang SAMA bisa memiliki kompleksitas yang berbeda ratusan kali lipat tergantung pendekatan. Pilihan algoritma jauh lebih penting dari pilihan bahasa pemrograman!</div>
</div>

<!-- ==================== 6. KELAS KOMPLEKSITAS ==================== -->
<h2 class="animate-in">6. Kelas Kompleksitas: P, NP, NP-Hard, NP-Complete</h2>

<div class="card animate-in">
    <p>Kelas kompleksitas mengkategorikan masalah berdasarkan <strong>seberapa sulit</strong> masalah tersebut bisa diselesaikan. Ini bukan tentang algoritma tertentu, tapi tentang <strong>masalah itu sendiri</strong> &mdash; seberapa sulit secara fundamental.</p>
</div>

<div class="card-grid animate-in">
    <div class="card" style="border-left:5px solid var(--green)">
        <h3 style="color:var(--green)">P (Polynomial Time)</h3>
        <p><strong>Definisi:</strong> Masalah yang komputer bisa <em>selesaikan</em> dengan cepat (waktu polinomial O(n<sup>k</sup>)).</p>
        <p><strong>Analogi:</strong> Bayangkan kamu diminta menyortir kartu. Kamu BISA melakukannya dalam waktu yang wajar, bahkan untuk 1000 kartu. Itulah masalah di P.</p>
        <h4>Contoh masalah di P:</h4>
        <ul>
            <li><strong>Sorting</strong> &mdash; O(n log n). Merge sort, heap sort.</li>
            <li><strong>Shortest Path</strong> &mdash; O(V&sup2;) atau O(E log V). Dijkstra, BFS.</li>
            <li><strong>Binary Search</strong> &mdash; O(log n).</li>
            <li><strong>Matrix Multiplication</strong> &mdash; O(n&sup3;) naif, O(n<sup>2.37</sup>) Strassen+.</li>
            <li><strong>Linear Programming</strong> &mdash; Polinomial (simplex rata-rata cepat, ellipsoid worst-case polinomial).</li>
            <li><strong>Primality Testing</strong> &mdash; O(log<sup>6</sup> n) menggunakan AKS algorithm.</li>
            <li><strong>2-SAT</strong> &mdash; O(V + E) dengan DFS pada implication graph.</li>
            <li><strong>Maximum Matching</strong> &mdash; Edmonds' algorithm, polinomial.</li>
        </ul>
        <div class="success-box">Semua masalah di P memiliki algoritma efisien yang diketahui. Kita bisa menyelesaikannya dalam waktu "wajar" bahkan untuk input jutaan.</div>
    </div>
    <div class="card" style="border-left:5px solid var(--yellow)">
        <h3 style="color:var(--yellow)">NP (Nondeterministic Polynomial)</h3>
        <p><strong>Definisi:</strong> Masalah yang <em>jawabannya bisa DICEK</em> dengan cepat (waktu polinomial), meskipun <strong>menemukan</strong> jawabannya mungkin sangat lama.</p>
        <p><strong>Analogi Sudoku:</strong> Bayangkan seseorang memberikanmu Sudoku yang sudah diisi. Kamu bisa <strong>memeriksa</strong> apakah jawabannya benar dalam hitungan detik (cek setiap baris, kolom, kotak). Tapi <strong>menyelesaikan</strong> Sudoku dari awal? Itu bisa sangat sulit!</p>
        <h4>Contoh masalah di NP:</h4>
        <ul>
            <li><strong>Sudoku</strong> &mdash; verifikasi: O(n&sup2;), penyelesaian: sangat sulit untuk ukuran besar</li>
            <li><strong>SAT (Boolean Satisfiability)</strong> &mdash; bisa dicek dengan substitusi</li>
            <li><strong>Graph Coloring</strong> &mdash; cek: periksa setiap edge</li>
            <li><strong>Subset Sum</strong> &mdash; cek: jumlahkan subset, bandingkan</li>
            <li><strong>Hamiltonian Cycle</strong> &mdash; cek: ikuti path, pastikan semua node dikunjungi</li>
        </ul>
        <div class="warn-box"><strong>PENTING!</strong> NP BUKAN berarti "Non-Polynomial"! NP = "Nondeterministic Polynomial". Artinya solusinya bisa diverifikasi dalam waktu polinomial oleh TM deterministik. Dan ingat: <strong>P &sube; NP</strong> (semua masalah di P juga di NP, karena jika kamu bisa <em>menyelesaikan</em> sesuatu dengan cepat, tentu kamu bisa <em>memeriksa</em> jawabannya dengan cepat juga).</div>
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card" style="border-left:5px solid var(--orange)">
        <h3 style="color:var(--orange)">NP-Hard</h3>
        <p><strong>Definisi:</strong> Masalah yang <em>setidaknya sesulit</em> semua masalah di NP. Secara formal: setiap masalah di NP bisa direduksi (ditransformasi) ke masalah NP-Hard dalam waktu polinomial.</p>
        <p><strong>Analogi:</strong> Bayangkan ada ujian yang LEBIH SULIT dari ujian tersulit di kelas. Itulah NP-Hard. Kamu mungkin bahkan tidak bisa memeriksa jawabannya dengan cepat!</p>
        <h4>Ciri khas NP-Hard:</h4>
        <ul>
            <li>Tidak harus decision problem (bisa optimization problem)</li>
            <li>Tidak harus di NP (solusinya mungkin tidak bisa diverifikasi dalam waktu polinomial)</li>
            <li><strong>Halting Problem</strong> &mdash; NP-Hard dan bahkan <em>undecidable</em>!</li>
            <li><strong>TSP (optimization)</strong> &mdash; "cari rute terpendek" (bukan "apakah ada rute &lt; k?")</li>
            <li><strong>Generalized Chess</strong> &mdash; EXPTIME-complete, jauh di atas NP</li>
        </ul>
    </div>
    <div class="card" style="border-left:5px solid var(--red)">
        <h3 style="color:var(--red)">NP-Complete</h3>
        <p><strong>Definisi:</strong> Masalah yang ada di <strong>NP DAN NP-Hard sekaligus</strong>. Ini adalah masalah <em>tersulit di NP</em> &mdash; masalah yang jika SATU saja bisa diselesaikan dalam waktu polinomial, maka SEMUA masalah NP bisa diselesaikan dalam waktu polinomial (P = NP).</p>
        <p><strong>Analogi:</strong> NP-Complete adalah "bos terakhir" di NP. Jika kamu bisa mengalahkan satu bos terakhir, kamu otomatis bisa mengalahkan SEMUA musuh di game itu.</p>
        <h4>Contoh masalah NP-Complete:</h4>
        <ul>
            <li><strong>SAT</strong> &mdash; masalah NP-Complete PERTAMA (Cook-Levin theorem, 1971)</li>
            <li><strong>3-SAT</strong> &mdash; versi terbatas SAT, tetap NP-Complete</li>
            <li><strong>Vertex Cover</strong> &mdash; "set terkecil vertex yang menutupi semua edge"</li>
            <li><strong>Hamiltonian Cycle</strong> &mdash; "apakah ada siklus yang mengunjungi semua node?"</li>
            <li><strong>Subset Sum</strong> &mdash; "apakah ada subset yang jumlahnya = target?"</li>
            <li><strong>TSP (decision)</strong> &mdash; "apakah ada tour dengan panjang &le; k?"</li>
            <li><strong>Graph k-Coloring (k &ge; 3)</strong> &mdash; "apakah bisa diwarnai dengan k warna?"</li>
        </ul>
        <div class="info-box"><strong>Fakta Penting:</strong> Stephen Cook (1971) membuktikan SAT adalah NP-Complete. Richard Karp (1972) kemudian menunjukkan 21 masalah NP-Complete lainnya melalui polynomial-time reduction. Sekarang ada ribuan masalah NP-Complete yang diketahui.</div>
    </div>
</div>

<h3 class="animate-in">Euler Diagram: Hubungan P, NP, NP-Complete, NP-Hard</h3>
<div class="card animate-in">
    <div class="info-box">
        <strong>Cara Membaca Euler Diagram:</strong> Setiap wilayah merepresentasikan himpunan masalah. Overlap menunjukkan irisan. Diagram ini mengikuti konvensi standar dari literatur teori kompleksitas.<br>
        <em>Ref: Sipser, "Introduction to the Theory of Computation" Ch.7; Arora &amp; Barak, "Computational Complexity" Ch.2-3; Garey &amp; Johnson, "Computers and Intractability" (1979)</em>
    </div>
</div>

<div class="tabs animate-in">
    <button class="tab-btn active" data-tab="diagram-pneqnp">Asumsi P &ne; NP (dipercaya)</button>
    <button class="tab-btn" data-tab="diagram-peqnp">Hipotesis P = NP</button>
</div>

<div data-tab-content="diagram-pneqnp" class="tab-content active">
<div class="anim-container" style="padding:24px 10px;text-align:center;">
    <svg width="720" height="630" viewBox="0 0 720 630" style="max-width:100%">
        <defs>
            <marker id="arrEulerE" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="var(--text2)"/>
            </marker>
            <!-- NP ellipse used as clipPath for NP-Complete fill -->
            <clipPath id="npClipE">
                <ellipse cx="280" cy="310" rx="220" ry="195"/>
            </clipPath>
        </defs>

        <!-- Title -->
        <text x="360" y="26" text-anchor="middle" fill="var(--text)" font-size="16" font-weight="800">Euler Diagram: Complexity Classes (P &ne; NP)</text>
        <text x="360" y="44" text-anchor="middle" fill="var(--text2)" font-size="10" font-style="italic">Prevailing conjecture &mdash; standard representation (Sipser, Arora &amp; Barak)</text>

        <!-- Cook-Levin info bar -->
        <rect x="55" y="50" width="610" height="38" rx="8" fill="rgba(56,189,248,0.05)" stroke="var(--accent)" stroke-width="1"/>
        <text x="360" y="66" text-anchor="middle" fill="var(--accent)" font-size="10" font-weight="600">NP-Complete = hardest problems in NP. If any one is in P &rarr; P = NP</text>
        <text x="360" y="82" text-anchor="middle" fill="var(--text2)" font-size="9">Cook-Levin Theorem (1971): SAT is NP-Complete. All NP-Complete problems poly-time reducible to each other.</text>

        <!-- ── BACKGROUND BOUNDARY: "All Decision Problems" ── -->
        <rect x="55" y="98" width="660" height="445" rx="12" fill="none" stroke="var(--text2)" stroke-width="1" stroke-dasharray="4,4" opacity="0.25"/>
        <text x="700" y="116" text-anchor="end" fill="var(--text2)" font-size="8.5" opacity="0.45">All Decision</text>
        <text x="700" y="128" text-anchor="end" fill="var(--text2)" font-size="8.5" opacity="0.45">Problems</text>

        <!-- ── NP-Hard: large oval, partially OUTSIDE NP on the right ── -->
        <!-- cx=535 rx=180 → spans x:[355,715], well past NP's right edge at x=500 -->
        <ellipse cx="535" cy="310" rx="180" ry="170" fill="rgba(248,113,113,0.04)" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="8,4"/>

        <!-- ── NP: large oval, centered left of NP-Hard ── -->
        <!-- cx=280 rx=220 → spans x:[60,500] -->
        <ellipse cx="280" cy="310" rx="220" ry="195" fill="rgba(251,191,36,0.05)" stroke="var(--yellow)" stroke-width="2.5"/>

        <!-- ── NP-Complete: fill = NP-Hard ellipse clipped to NP region ── -->
        <!-- Visually appears as the right "crescent" of NP where it overlaps NP-Hard -->
        <ellipse cx="535" cy="310" rx="180" ry="170" fill="rgba(251,146,60,0.18)" clip-path="url(#npClipE)" stroke="none"/>

        <!-- ── NP-Complete border inside NP (left arc of NP-Hard within NP) ── -->
        <!-- Drawn as a dashed stroke to visually separate NP-Complete from NP-Intermediate -->
        <ellipse cx="535" cy="310" rx="180" ry="170" fill="none" clip-path="url(#npClipE)" stroke="var(--orange)" stroke-width="1.5" stroke-dasharray="6,3"/>

        <!-- ── P: small oval fully inside NP, on the LEFT side ── -->
        <!-- cx=175 rx=100 → spans x:[75,275] — far left of NP-Complete region (x>355) -->
        <ellipse cx="175" cy="360" rx="100" ry="82" fill="rgba(52,211,153,0.10)" stroke="var(--green)" stroke-width="2.5"/>

        <!-- ── NP-Intermediate: dashed region between P and NP-Complete ── -->
        <!-- In the upper-center of NP, outside P and outside NP-Hard -->
        <ellipse cx="285" cy="268" rx="58" ry="28" fill="rgba(167,139,250,0.10)" stroke="var(--accent3)" stroke-width="1.5" stroke-dasharray="5,3"/>

        <!-- ══════ LABELS ══════ -->

        <!-- P label + description -->
        <text x="175" y="345" text-anchor="middle" fill="var(--green)" font-size="22" font-weight="900">P</text>
        <text x="175" y="364" text-anchor="middle" fill="var(--text2)" font-size="8">Solved in poly time</text>
        <text x="175" y="375" text-anchor="middle" fill="var(--text2)" font-size="8">(deterministic TM)</text>

        <!-- NP label — upper-left corner inside NP, well above P -->
        <text x="98" y="148" fill="var(--yellow)" font-size="18" font-weight="800">NP</text>
        <text x="84" y="166" fill="var(--text2)" font-size="8.5">Verified in</text>
        <text x="84" y="178" fill="var(--text2)" font-size="8.5">poly time</text>

        <!-- NP-Hard label — outside NP, top-right -->
        <text x="710" y="155" text-anchor="end" fill="var(--red)" font-size="15" font-weight="800">NP-Hard</text>
        <text x="710" y="172" text-anchor="end" fill="var(--text2)" font-size="8">&ge; hard as all NP problems</text>
        <text x="710" y="184" text-anchor="end" fill="var(--text2)" font-size="8">(via poly-time reduction)</text>

        <!-- NP-Complete label — inside intersection (right portion of NP) -->
        <text x="423" y="285" text-anchor="middle" fill="var(--orange)" font-size="13" font-weight="800">NP-Complete</text>
        <text x="423" y="300" text-anchor="middle" fill="var(--text2)" font-size="9">NP &cap; NP-Hard</text>

        <!-- NP-Intermediate label — inside its dashed ellipse -->
        <text x="285" y="263" text-anchor="middle" fill="var(--accent3)" font-size="9" font-weight="700">NP-Intermediate</text>
        <text x="285" y="275" text-anchor="middle" fill="var(--accent3)" font-size="8">(Ladner 1975)</text>

        <!-- ══════ EXAMPLES ══════ -->

        <!-- P examples (inside P oval) -->
        <text x="175" y="400" text-anchor="middle" fill="var(--green)" font-size="8">Sorting, BFS/DFS</text>
        <text x="175" y="413" text-anchor="middle" fill="var(--green)" font-size="8">Dijkstra, Primality (AKS)</text>
        <text x="175" y="426" text-anchor="middle" fill="var(--green)" font-size="8">2-SAT, Max Flow</text>
        <text x="175" y="439" text-anchor="middle" fill="var(--green)" font-size="8">Linear Programming</text>

        <!-- NP-Complete examples (inside orange intersection) -->
        <text x="423" y="325" text-anchor="middle" fill="var(--orange)" font-size="8">SAT (Cook 1971)</text>
        <text x="423" y="338" text-anchor="middle" fill="var(--orange)" font-size="8">3-SAT, 3-Coloring</text>
        <text x="423" y="351" text-anchor="middle" fill="var(--orange)" font-size="8">Vertex Cover, Clique</text>
        <text x="423" y="364" text-anchor="middle" fill="var(--orange)" font-size="8">Hamiltonian Cycle</text>
        <text x="423" y="377" text-anchor="middle" fill="var(--orange)" font-size="8">Subset Sum, Knapsack</text>
        <text x="423" y="390" text-anchor="middle" fill="var(--orange)" font-size="8">TSP (decision version)</text>

        <!-- NP-Intermediate examples (below dashed ellipse, inside NP, outside P & NP-Hard) -->
        <text x="285" y="304" text-anchor="middle" fill="var(--accent3)" font-size="7.5">Factoring (RSA basis)?</text>
        <text x="285" y="315" text-anchor="middle" fill="var(--accent3)" font-size="7.5">Graph Isomorphism?</text>
        <text x="285" y="326" text-anchor="middle" fill="var(--accent3)" font-size="7.5">Discrete Log (DH/ECC)?</text>

        <!-- NP-Hard \ NP examples (outside NP, right side) -->
        <text x="630" y="295" text-anchor="middle" fill="var(--red)" font-size="9" font-weight="700">NP-Hard &setmn; NP:</text>
        <text x="630" y="313" text-anchor="middle" fill="var(--red)" font-size="8">Halting Problem</text>
        <text x="630" y="326" text-anchor="middle" fill="var(--red)" font-size="8">TSP (optimization)</text>
        <text x="630" y="339" text-anchor="middle" fill="var(--red)" font-size="8">QSAT (PSPACE-hard)</text>
        <text x="630" y="352" text-anchor="middle" fill="var(--red)" font-size="8">General Game Playing</text>
        <text x="630" y="368" text-anchor="middle" fill="var(--text2)" font-size="7.5" font-style="italic">undecidable or</text>
        <text x="630" y="379" text-anchor="middle" fill="var(--text2)" font-size="7.5" font-style="italic">outside NP entirely</text>

        <!-- ══════ SUBSET ANNOTATION ══════ -->
        <!-- Arrow: P ⊂ NP -->
        <line x1="175" y1="276" x2="175" y2="228" stroke="var(--text2)" stroke-width="1" marker-end="url(#arrEulerE)"/>
        <text x="130" y="254" fill="var(--text2)" font-size="8.5">P &sub; NP</text>

        <!-- Arrow: NP-Complete ⊂ NP-Hard -->
        <line x1="500" y1="310" x2="530" y2="310" stroke="var(--orange)" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>

        <!-- ══════ LADNER THEOREM BOX ══════ -->
        <rect x="55" y="555" width="610" height="60" rx="8" fill="rgba(167,139,250,0.05)" stroke="var(--accent3)" stroke-width="1"/>
        <text x="360" y="572" text-anchor="middle" fill="var(--accent3)" font-size="11" font-weight="700">Ladner's Theorem (1975)</text>
        <text x="360" y="590" text-anchor="middle" fill="var(--text2)" font-size="10">If P &ne; NP, there exist problems in NP that are neither in P nor NP-Complete.</text>
        <text x="360" y="606" text-anchor="middle" fill="var(--text2)" font-size="9" font-style="italic">Ladner, R.E. "On the structure of polynomial time reducibility." J. ACM 22(1): 155-171, 1975</text>
    </svg>
</div>
<div class="card" style="margin-top:-12px;border-top:none;border-radius:0 0 12px 12px;">
    <h4>Cara Membaca Euler Diagram Ini</h4>
    <ul>
        <li><strong style="color:var(--green)">P (hijau)</strong> sepenuhnya di dalam NP &mdash; setiap masalah yang bisa <em>diselesaikan</em> cepat, tentu bisa <em>diverifikasi</em> cepat. Jadi P &sube; NP.</li>
        <li><strong style="color:var(--yellow)">NP (kuning)</strong> berisi semua masalah yang solusinya bisa diverifikasi dalam waktu polinomial &mdash; termasuk P dan NP-Complete.</li>
        <li><strong style="color:var(--red)">NP-Hard (merah, dashed)</strong> adalah himpunan besar yang melintasi batas NP &mdash; sebagian ada di dalam NP, sebagian di luar. Masalah di luar NP bisa jadi undecidable.</li>
        <li><strong style="color:var(--orange)">NP-Complete (oranye, area irisan)</strong> adalah <strong>persimpangan NP &cap; NP-Hard</strong> &mdash; masalah yang ada di NP DAN sesulit masalah NP lainnya.</li>
        <li><strong style="color:var(--accent3)">NP-Intermediate (ungu, dashed)</strong> ada <em>hanya jika P &ne; NP</em> (Ladner 1975). Integer Factoring dan Graph Isomorphism adalah kandidat kuat.</li>
    </ul>
</div>
</div>

<div data-tab-content="diagram-peqnp" class="tab-content">
<div class="anim-container" style="padding:24px 10px;text-align:center;">
    <svg width="720" height="440" viewBox="0 0 720 440" style="max-width:100%">
        <text x="360" y="28" text-anchor="middle" fill="var(--text)" font-size="16" font-weight="800">Euler Diagram: Jika P = NP (hipotesis, sangat tidak mungkin)</text>
        <text x="360" y="46" text-anchor="middle" fill="var(--text2)" font-size="10" font-style="italic">P, NP, dan NP-Complete collapse menjadi satu himpunan; NP-Intermediate menghilang</text>

        <!-- Outer boundary -->
        <rect x="55" y="60" width="610" height="320" rx="12" fill="none" stroke="var(--text2)" stroke-width="1" stroke-dasharray="4,4" opacity="0.25"/>
        <text x="655" y="78" text-anchor="end" fill="var(--text2)" font-size="8.5" opacity="0.45">All Decision Problems</text>

        <!-- NP-Hard: partially outside the collapsed P=NP oval -->
        <ellipse cx="430" cy="220" rx="230" ry="155" fill="rgba(248,113,113,0.04)" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="8,4"/>
        <text x="660" y="140" text-anchor="end" fill="var(--red)" font-size="14" font-weight="800">NP-Hard</text>

        <!-- P = NP = NP-Complete: one collapsed oval -->
        <!-- In P=NP world: P, NP, NP-Complete are all the same set -->
        <!-- This oval is fully inside NP-Hard (since NP-Complete ⊆ NP-Hard) -->
        <ellipse cx="310" cy="220" rx="185" ry="130" fill="rgba(52,211,153,0.08)" stroke="var(--green)" stroke-width="3"/>
        <!-- NP-Complete border overlay (same ellipse, orange dashed) -->
        <ellipse cx="310" cy="220" rx="185" ry="130" fill="rgba(251,146,60,0.06)" stroke="var(--orange)" stroke-width="1.8" stroke-dasharray="5,3"/>

        <!-- Labels inside the collapsed set -->
        <text x="310" y="185" text-anchor="middle" fill="var(--green)" font-size="22" font-weight="900">P = NP = NP-Complete</text>
        <text x="310" y="213" text-anchor="middle" fill="var(--text2)" font-size="10">Semua masalah NP bisa diselesaikan efisien (poly time)!</text>
        <text x="310" y="230" text-anchor="middle" fill="var(--text2)" font-size="9" font-style="italic">SAT, 3-SAT, TSP, Factoring, Graph Coloring...</text>
        <text x="310" y="246" text-anchor="middle" fill="var(--text2)" font-size="9" font-style="italic">semua polinomial. NP-Intermediate TIDAK ada.</text>
        <text x="310" y="268" text-anchor="middle" fill="var(--red)" font-size="8.5" font-weight="600">Enkripsi RSA, AES, semua kriptografi modern bisa dipecahkan!</text>

        <!-- NP-Hard \ NP-Complete: still exists (Halting Problem etc.) -->
        <text x="590" y="205" text-anchor="middle" fill="var(--red)" font-size="9" font-weight="700">NP-Hard &setmn; NP:</text>
        <text x="590" y="222" text-anchor="middle" fill="var(--red)" font-size="8.5">Halting Problem</text>
        <text x="590" y="236" text-anchor="middle" fill="var(--text2)" font-size="8" font-style="italic">(tetap undecidable)</text>

        <!-- Warning box -->
        <rect x="80" y="395" width="560" height="32" rx="8" fill="rgba(248,113,113,0.08)" stroke="var(--red)" stroke-width="1.5"/>
        <text x="360" y="411" text-anchor="middle" fill="var(--red)" font-size="10" font-weight="700">Mayoritas ilmuwan percaya P &ne; NP &mdash; Clay Millennium Prize: $1,000,000</text>
        <text x="360" y="424" text-anchor="middle" fill="var(--text2)" font-size="9">Belum ada bukti P = NP maupun P &ne; NP. Salah satu problem matematika terbuka terbesar.</text>
    </svg>
</div>
</div>

<div class="card animate-in">
    <h4>Definisi Formal &mdash; Mengapa Diagram Berbentuk Seperti Ini?</h4>
    <div class="table-wrapper">
    <table>
    <tr><th>Kelas</th><th>Definisi</th><th>Posisi di Euler Diagram</th></tr>
    <tr><td><strong style="color:var(--green)">P</strong></td><td>Masalah keputusan yang bisa <em>diselesaikan</em> oleh TM deterministik dalam O(n<sup>k</sup>)</td><td>Oval terkecil, sepenuhnya di dalam NP</td></tr>
    <tr><td><strong style="color:var(--yellow)">NP</strong></td><td>Masalah keputusan yang <em>solusinya bisa diverifikasi</em> dalam O(n<sup>k</sup>)</td><td>Oval menengah, berisi P</td></tr>
    <tr><td><strong style="color:var(--orange)">NP-Hard</strong></td><td>Masalah X di mana <em>setiap masalah NP</em> bisa direduksi ke X dalam waktu polinomial</td><td>Oval besar yang <em>melintasi</em> batas NP</td></tr>
    <tr><td><strong style="color:var(--red)">NP-Complete</strong></td><td>NP &cap; NP-Hard &mdash; di NP DAN setidaknya sesulit semua masalah NP</td><td>Area irisan (overlap) NP dan NP-Hard</td></tr>
    <tr><td><strong style="color:var(--accent3)">NP-Intermediate</strong></td><td>NP \\ (P &cup; NPC) &mdash; di NP, bukan P, bukan NP-Complete</td><td>Zona antara P dan NPC (hanya jika P &ne; NP)</td></tr>
    </table>
    </div>
    <div class="warn-box">
        <strong>Ladner's Theorem (1975):</strong> "If P &ne; NP, then there exist problems in NP that are neither in P nor NP-complete."<br>
        <em>&mdash; Ladner, R.E. J. ACM 22(1): 155-171, 1975.</em><br><br>
        <strong>Implikasi:</strong> Jika P &ne; NP (yang dipercaya), maka NP bukan hanya dua kelas (P dan NP-Complete), melainkan ada <strong>hierarki tak terbatas</strong> di antaranya. Kandidat NP-Intermediate:
        <ul style="margin-top:8px;">
            <li><strong>Integer Factorization</strong> &mdash; dasar keamanan RSA. Tidak diketahui di P, tidak terbukti NP-Complete.</li>
            <li><strong>Discrete Logarithm</strong> &mdash; dasar Diffie-Hellman &amp; ECC.</li>
            <li><strong>Graph Isomorphism</strong> &mdash; Babai (2015) menunjukkan quasi-polynomial algorithm, tapi belum di P.</li>
        </ul>
    </div>
</div>

<!-- ==================== 7. INTRACTABLE PROBLEMS ==================== -->
<h2 class="animate-in">7. Masalah Intractable (Tak Terpecahkan Secara Efisien)</h2>

<div class="card animate-in">
    <h3>Apa yang Membuat Masalah "Intractable"?</h3>
    <p>Sebuah masalah disebut <strong>intractable</strong> jika tidak ada algoritma waktu polinomial yang bisa menyelesaikannya (atau setidaknya, kita sangat yakin tidak ada). Ini bukan berarti masalahnya "tidak bisa diselesaikan" &mdash; ini berarti waktu yang dibutuhkan tumbuh terlalu cepat untuk menjadi praktis pada input besar.</p>
    <div class="card-grid">
        <div class="card" style="border-left:4px solid var(--green)">
            <h4 style="color:var(--green)">Tractable (Bisa Ditangani)</h4>
            <p>Masalah dengan solusi <strong>O(n<sup>k</sup>)</strong> untuk konstanta k. Waktu tumbuh "wajar".</p>
            <p>Contoh: sorting (n log n), shortest path (V&sup2;), primality testing.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--red)">
            <h4 style="color:var(--red)">Intractable (Sulit Ditangani)</h4>
            <p>Masalah yang best known algorithm-nya <strong>eksponensial</strong> atau lebih buruk. Waktu meledak seiring input membesar.</p>
            <p>Contoh: TSP, SAT, Graph Coloring, Subset Sum (untuk kasus umum).</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Contoh Masalah Intractable yang Terkenal</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Masalah</th><th>Deskripsi</th><th>Kelas</th><th>Best Known</th><th>Dampak Praktis</th></tr>
    <tr><td><strong>TSP</strong></td><td>Temukan rute terpendek yang mengunjungi semua kota tepat sekali</td><td>NP-Complete (decision) / NP-Hard (optimization)</td><td>O(n&sup2; 2<sup>n</sup>) DP</td><td>Logistik, routing, manufaktur</td></tr>
    <tr><td><strong>SAT</strong></td><td>Apakah ada assignment yang membuat formula boolean TRUE?</td><td>NP-Complete</td><td>Eksponensial worst case</td><td>Verification, EDA, AI planning</td></tr>
    <tr><td><strong>Subset Sum</strong></td><td>Apakah ada subset dari set yang jumlahnya = target?</td><td>NP-Complete</td><td>O(n &times; W) pseudo-polynomial</td><td>Kriptografi, financial planning</td></tr>
    <tr><td><strong>Graph k-Coloring</strong></td><td>Apakah graf bisa diwarnai dengan k warna tanpa adjacent node sama warna?</td><td>NP-Complete (k &ge; 3)</td><td>Eksponensial</td><td>Scheduling, register allocation</td></tr>
    <tr><td><strong>Knapsack</strong></td><td>Pilih item dengan total weight &le; W untuk maximize value</td><td>NP-Complete (decision)</td><td>O(n &times; W) pseudo-polynomial</td><td>Resource allocation, investment</td></tr>
    <tr><td><strong>Vertex Cover</strong></td><td>Set terkecil vertex yang menutupi semua edge</td><td>NP-Complete</td><td>O(1.2^n) exact</td><td>Network security, monitoring</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Cara Mengenali Masalah NP-Complete</h3>
    <p>Bagaimana kamu tahu sebuah masalah itu NP-Complete? Ada proses formal yang digunakan:</p>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Tunjukkan masalah &isin; NP:</strong> Buktikan bahwa <em>diberikan sebuah solusi</em>, kamu bisa memverifikasinya dalam waktu polinomial.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Pilih masalah NP-Complete yang dikenal</strong> (misal SAT, 3-SAT, Vertex Cover, dll).</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Reduksi dalam waktu polinomial:</strong> Tunjukkan bahwa masalah NP-Complete yang dipilih bisa <em>ditransformasi</em> ke masalah barumu dalam waktu O(n<sup>k</sup>).</div></div>
    </div>
    <div class="flow-diagram" style="margin-top:15px;">
        <div class="flow-node highlight">SAT</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">3-SAT</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Vertex Cover</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">Hamiltonian Cycle</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node">TSP</div>
    </div>
    <p style="margin-top:10px;"><em>Rantai reduksi di atas menunjukkan bahwa jika SAT bisa diselesaikan dalam P, maka SEMUA masalah di rantai ini juga bisa.</em></p>
</div>

<div class="card animate-in">
    <h3>Cook-Levin Theorem (1971)</h3>
    <p>Teorema paling penting dalam teori kompleksitas:</p>
    <div class="info-box">
        <strong>Teorema Cook-Levin:</strong> SAT (Boolean Satisfiability Problem) adalah <strong>NP-Complete</strong>.<br><br>
        Artinya: <em>setiap</em> masalah di NP bisa ditransformasi (direduksi) ke SAT dalam waktu polinomial. Jika kamu bisa menyelesaikan SAT secara efisien, kamu bisa menyelesaikan SEMUA masalah di NP secara efisien.
    </div>
    <p><strong>Mengapa ini revolusioner?</strong> Sebelum Cook-Levin, kita hanya tahu masalah-masalah sulit secara individual. Cook membuktikan bahwa ada satu masalah "universal" &mdash; SAT &mdash; yang mengenkapsulasi kesulitan SEMUA masalah di NP. Setelah itu, Karp (1972) menunjukkan 21 masalah NP-Complete lainnya melalui reduksi dari SAT.</p>
</div>

<!-- ==================== 8. STRATEGI MENGHADAPI NP-HARD ==================== -->
<h2 class="animate-in">8. Strategi Menghadapi Masalah NP-Hard</h2>

<div class="card animate-in">
    <p>Dalam dunia nyata, kita SERING menghadapi masalah NP-Hard. Menyerah bukan pilihan! Berikut strategi-strategi yang digunakan para ilmuwan dan engineer:</p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">1. Exact Algorithms (Solusi Eksak untuk Input Kecil)</h3>
    <p>Jika ukuran input cukup kecil, kita bisa menggunakan algoritma eksak meskipun kompleksitasnya eksponensial.</p>
    <div class="code-block"><span class="cm">// TSP dengan Dynamic Programming (Held-Karp)</span>
<span class="cm">// Kompleksitas: O(n&sup2; &times; 2^n)</span>
<span class="cm">// Untuk n = 20 kota: 20&sup2; &times; 2^20 = ~400 juta operasi (OK!)</span>
<span class="cm">// Untuk n = 30 kota: 30&sup2; &times; 2^30 = ~966 milyar (berat tapi mungkin)</span>
<span class="cm">// Untuk n = 50 kota: MUSTAHIL</span></div>
    <div class="info-box"><strong>Kapan dipakai:</strong> n &lt; 20-25. Contoh: optimasi rute delivery untuk 15 toko, penjadwalan 10 mesin.</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">2. Approximation Algorithms (Algoritma Aproksimasi)</h3>
    <p>Cari solusi yang <strong>dijamin mendekati optimal</strong> dengan rasio tertentu, dalam waktu polinomial.</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Masalah</th><th>Algoritma Aproksimasi</th><th>Rasio Aproksimasi</th><th>Kompleksitas</th></tr>
    <tr><td>Vertex Cover</td><td>Greedy matching</td><td>2-approx (solusi &le; 2&times; optimal)</td><td>O(V + E)</td></tr>
    <tr><td>TSP (metric)</td><td>Christofides' algorithm</td><td>1.5-approx</td><td>O(n&sup3;)</td></tr>
    <tr><td>Set Cover</td><td>Greedy</td><td>O(log n)-approx</td><td>O(m &times; n)</td></tr>
    <tr><td>MAX-SAT</td><td>Randomized rounding</td><td>0.75-approx</td><td>Polinomial</td></tr>
    <tr><td>Knapsack</td><td>FPTAS</td><td>(1-&epsilon;)-approx</td><td>O(n&sup2; / &epsilon;)</td></tr>
    </table>
    </div>
    <div class="success-box"><strong>Keunggulan:</strong> Ada JAMINAN kualitas! "Solusi saya paling buruk 50% lebih mahal dari optimal" &mdash; ini sangat berguna untuk bisnis.</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">3. Heuristics (Heuristik / Metaheuristics)</h3>
    <p>Metode yang <strong>tidak menjamin optimalitas</strong> tapi sering menghasilkan solusi yang sangat baik dalam waktu wajar.</p>
    <div class="card-grid-3">
        <div class="card" style="border-left:4px solid var(--accent)">
            <h4>Simulated Annealing</h4>
            <p>Terinspirasi dari proses pendinginan logam. Dimulai dengan solusi acak, lalu "goyang" (perturbasi) solusi secara perlahan.</p>
            <p>Awalnya menerima solusi yang lebih buruk (eksplorasi), lama-lama hanya menerima perbaikan (eksploitasi).</p>
        </div>
        <div class="card" style="border-left:4px solid var(--green)">
            <h4>Genetic Algorithm</h4>
            <p>Terinspirasi dari evolusi. Buat "populasi" solusi, lalu lakukan:</p>
            <ul>
                <li><strong>Selection</strong>: pilih solusi terbaik</li>
                <li><strong>Crossover</strong>: gabungkan dua solusi</li>
                <li><strong>Mutation</strong>: ubah sedikit secara acak</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid var(--purple)">
            <h4>Tabu Search</h4>
            <p>Mirip local search tapi simpan "daftar terlarang" (tabu list) untuk menghindari terjebak di local optimum.</p>
            <p>Sangat efektif untuk scheduling dan routing.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">4. Randomized Algorithms</h3>
    <p>Gunakan keacakan untuk mempercepat pencarian. Contoh: <strong>Monte Carlo</strong> (mungkin salah tapi cepat) dan <strong>Las Vegas</strong> (selalu benar tapi waktu bervariasi).</p>
    <div class="code-block"><span class="cm">// Randomized QuickSort: pilih pivot acak</span>
<span class="cm">// Expected time: O(n log n), worst case masih O(n&sup2;)</span>
<span class="cm">// Tapi worst case terjadi dengan probabilitas sangat kecil!</span>

<span class="cm">// Randomized MIN-CUT (Karger's algorithm):</span>
<span class="cm">// Ulangi O(n&sup2; log n) kali, sukses dengan probabilitas tinggi</span></div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--orange)">5. Fixed-Parameter Tractability (FPT)</h3>
    <p>Beberapa masalah NP-Hard bisa diselesaikan efisien jika <strong>parameter tertentu</strong> kecil.</p>
    <p>Kompleksitas: <strong>O(f(k) &times; n<sup>c</sup>)</strong> di mana k = parameter kecil, c = konstanta. Eksponensial di k, tapi polinomial di n!</p>
    <div class="info-box">
        <strong>Contoh:</strong> Vertex Cover berparameter k (ukuran cover). Waktu: O(2<sup>k</sup> &times; n). Untuk k = 10 dan n = 1 juta: 1024 &times; 10<sup>6</sup> = ~10<sup>9</sup> operasi &mdash; sangat feasible!
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">6. Special Case Exploitation</h3>
    <p>Banyak masalah NP-Hard punya <strong>kasus khusus</strong> yang tractable!</p>
    <div class="table-wrapper">
    <table>
    <tr><th>Masalah NP-Hard (Umum)</th><th>Kasus Khusus (di P)</th><th>Mengapa Tractable</th></tr>
    <tr><td>SAT</td><td>2-SAT</td><td>Bisa diselesaikan dengan DFS di implication graph, O(V+E)</td></tr>
    <tr><td>Graph Coloring</td><td>2-Coloring (Bipartite check)</td><td>BFS/DFS sederhana, O(V+E)</td></tr>
    <tr><td>Integer Programming</td><td>Linear Programming</td><td>Rileksasi ke real numbers, simplex/ellipsoid</td></tr>
    <tr><td>TSP</td><td>TSP pada graf planar</td><td>PTAS (Polynomial-Time Approximation Scheme)</td></tr>
    <tr><td>Knapsack</td><td>Fractional Knapsack</td><td>Greedy O(n log n) &mdash; boleh ambil pecahan</td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Perbandingan Lengkap Strategi</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Strategi</th><th>Jaminan Optimalitas</th><th>Waktu</th><th>Kapan Dipakai</th><th>Kelemahan</th></tr>
    <tr><td><strong>Exact</strong></td><td>100% optimal</td><td>Eksponensial</td><td>n kecil (&lt; 25)</td><td>Tidak scalable</td></tr>
    <tr><td><strong>Approximation</strong></td><td>Rasio terjamin</td><td>Polinomial</td><td>Butuh jaminan kualitas</td><td>Tidak semua masalah punya algo aproksimasi baik</td></tr>
    <tr><td><strong>Heuristic</strong></td><td>Tidak ada jaminan</td><td>Bervariasi (biasanya cepat)</td><td>Masalah besar, butuh "cukup baik"</td><td>Bisa terjebak di local optimum</td></tr>
    <tr><td><strong>Randomized</strong></td><td>Probabilistik</td><td>Expected polynomial</td><td>Struktur acak cocok</td><td>Butuh analisis probabilitas</td></tr>
    <tr><td><strong>FPT</strong></td><td>100% optimal</td><td>f(k) &times; n<sup>c</sup></td><td>Parameter k kecil</td><td>Hanya berlaku jika k kecil</td></tr>
    <tr><td><strong>Special Case</strong></td><td>100% optimal</td><td>Polinomial</td><td>Input punya struktur khusus</td><td>Hanya berlaku untuk kasus tertentu</td></tr>
    </table>
    </div>
</div>

<!-- ==================== 9. CONTOH ALGORITMA PER KELAS ==================== -->
<h2 class="animate-in">9. Contoh Algoritma per Kelas Kompleksitas</h2>

<div class="card animate-in">
    <h3>Klasifikasi Algoritma Berdasarkan Kompleksitas</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Kelas Kompleksitas</th><th>Contoh Algoritma / Masalah</th><th>Waktu</th><th>Catatan</th></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td rowspan="8"><strong style="color:var(--green)">P (Polynomial)</strong></td><td>Array access / Hash lookup</td><td>O(1)</td><td>Operasi paling dasar</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>Binary Search</td><td>O(log n)</td><td>Data harus terurut</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>Linear Search / Array Sum</td><td>O(n)</td><td>Scan seluruh array</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>Merge Sort / Heap Sort</td><td>O(n log n)</td><td>Sorting optimal</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>Dijkstra (binary heap)</td><td>O((V+E) log V)</td><td>Shortest path</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>Matrix Multiplication</td><td>O(n&sup3;) naive</td><td>Masih polinomial!</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>2-SAT</td><td>O(V + E)</td><td>SCC pada implication graph</td></tr>
    <tr style="background:rgba(52,211,153,0.05)"><td>Primality Test (AKS)</td><td>O(log<sup>6</sup> n)</td><td>Deterministik</td></tr>
    <tr style="background:rgba(251,191,36,0.05)"><td rowspan="4"><strong style="color:var(--yellow)">NP (tapi mungkin bukan P)</strong></td><td>Integer Factorization</td><td>Sub-exponential (NFS)</td><td>Kandidat NP-Intermediate</td></tr>
    <tr style="background:rgba(251,191,36,0.05)"><td>Graph Isomorphism</td><td>Quasi-polynomial (Babai)</td><td>Kandidat NP-Intermediate</td></tr>
    <tr style="background:rgba(251,191,36,0.05)"><td>Discrete Logarithm</td><td>Sub-exponential</td><td>Dasar kriptografi</td></tr>
    <tr style="background:rgba(251,191,36,0.05)"><td>Minimum Circuit Size</td><td>Unknown</td><td>Kandidat kuat NPI</td></tr>
    <tr style="background:rgba(251,146,60,0.05)"><td rowspan="6"><strong style="color:var(--orange)">NP-Complete</strong></td><td>SAT / 3-SAT</td><td>O(2<sup>n</sup>) brute force</td><td>Masalah NPC pertama (Cook 1971)</td></tr>
    <tr style="background:rgba(251,146,60,0.05)"><td>TSP (decision)</td><td>O(n&sup2; 2<sup>n</sup>) DP</td><td>Held-Karp algorithm</td></tr>
    <tr style="background:rgba(251,146,60,0.05)"><td>Vertex Cover</td><td>O(1.2^n) exact</td><td>2-approx tersedia</td></tr>
    <tr style="background:rgba(251,146,60,0.05)"><td>Hamiltonian Cycle</td><td>O(n&sup2; 2<sup>n</sup>)</td><td>Mirip TSP</td></tr>
    <tr style="background:rgba(251,146,60,0.05)"><td>Graph k-Coloring (k&ge;3)</td><td>Eksponensial</td><td>2-Coloring di P!</td></tr>
    <tr style="background:rgba(251,146,60,0.05)"><td>Subset Sum / Clique</td><td>O(n&times;W) / O(2<sup>n/3</sup>)</td><td>Pseudo-polynomial / meet-in-middle</td></tr>
    <tr style="background:rgba(248,113,113,0.05)"><td rowspan="3"><strong style="color:var(--red)">NP-Hard (di luar NP)</strong></td><td>Halting Problem</td><td>Undecidable!</td><td>Tidak bisa diselesaikan oleh TM apapun</td></tr>
    <tr style="background:rgba(248,113,113,0.05)"><td>Generalized Chess</td><td>EXPTIME-complete</td><td>Eksponensial bahkan untuk verifikasi</td></tr>
    <tr style="background:rgba(248,113,113,0.05)"><td>QSAT (Quantified SAT)</td><td>PSPACE-complete</td><td>Lebih sulit dari NP-Complete</td></tr>
    </table>
    </div>
</div>

<!-- ==================== 10. PRACTICAL IMPACT ==================== -->
<h2 class="animate-in">10. Dampak Praktis: Bagaimana Ini Mempengaruhi Software Nyata</h2>

<div class="card animate-in">
    <p>Teori kompleksitas bukan hanya teori akademis &mdash; ini mempengaruhi hampir setiap aspek teknologi yang kita gunakan sehari-hari.</p>
</div>

<div class="card-grid-3 animate-in">
    <div class="card" style="border-left:4px solid var(--red)">
        <h4>Kriptografi &amp; Keamanan</h4>
        <p>Seluruh keamanan digital modern bergantung pada <strong>asumsi P &ne; NP</strong>:</p>
        <ul>
            <li><strong>RSA</strong>: keamanannya bergantung pada sulitnya memfaktorkan bilangan besar (NP-Intermediate?)</li>
            <li><strong>HTTPS/TLS</strong>: menggunakan Diffie-Hellman (discrete log, juga NPI?)</li>
            <li><strong>Bitcoin</strong>: proof-of-work menggunakan hash yang sulit di-reverse</li>
            <li><strong>Password hashing</strong>: bcrypt, Argon2 sengaja dibuat lambat</li>
        </ul>
        <div class="warn-box">Jika P = NP, SEMUA enkripsi asimetris bisa dipecahkan. Internet banking, e-commerce, komunikasi rahasia &mdash; semuanya runtuh.</div>
    </div>
    <div class="card" style="border-left:4px solid var(--accent)">
        <h4>Optimasi &amp; Logistik</h4>
        <p>Banyak masalah bisnis adalah NP-Hard:</p>
        <ul>
            <li><strong>Vehicle Routing</strong>: TSP variant, dihadapi FedEx, DHL setiap hari</li>
            <li><strong>Airline Scheduling</strong>: penjadwalan kru &amp; pesawat = NP-Hard</li>
            <li><strong>Chip Design</strong>: place-and-route di VLSI = NP-Hard</li>
            <li><strong>Supply Chain</strong>: inventory optimization = variant knapsack</li>
        </ul>
        <p>Semua menggunakan <strong>heuristik &amp; aproksimasi</strong> di produksi.</p>
    </div>
    <div class="card" style="border-left:4px solid var(--purple)">
        <h4>AI &amp; Machine Learning</h4>
        <p>Banyak masalah ML fundamental terkait kompleksitas:</p>
        <ul>
            <li><strong>Training neural network</strong>: NP-Hard secara umum, tapi SGD bekerja baik dalam praktik</li>
            <li><strong>Feature selection</strong>: subset selection = NP-Hard</li>
            <li><strong>Bayesian inference</strong>: #P-Hard (lebih sulit dari NP!)</li>
            <li><strong>Hyperparameter tuning</strong>: kombinatorial explosion</li>
        </ul>
        <p>ML sukses karena masalah nyata punya <strong>struktur khusus</strong> yang bisa dieksploitasi.</p>
    </div>
</div>

<div class="card animate-in">
    <h3>Ringkasan: Apa yang Harus Diingat</h3>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Big-O menentukan skalabilitas:</strong> Pilihan algoritma jauh lebih penting dari optimasi mikro. O(n log n) selalu mengalahkan O(n&sup2;) untuk n besar, tidak peduli bahasa/hardware.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Kenali kelas masalah:</strong> Sebelum coding, tanyakan "apakah masalah ini di P?" Jika NP-Hard, jangan cari solusi eksak untuk input besar.</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Trade-off time vs space:</strong> Sering kali kamu bisa menukar memori untuk kecepatan (memoization, caching, hash tables).</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Gunakan strategi yang tepat:</strong> Untuk masalah NP-Hard, gunakan approximation (jika butuh jaminan), heuristic (jika butuh "cukup baik"), atau FPT (jika parameter kecil).</div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-text"><strong>Teori = praktik:</strong> P vs NP bukan hanya teori &mdash; ini mempengaruhi kriptografi, logistik, AI, dan hampir semua software yang kita bangun.</div></div>
    </div>
</div>

<div class="card animate-in">
    <h3>NP-Complete Reductions: Rantai Pembuktian</h3>
    <p>Untuk membuktikan masalah X adalah NP-Complete:</p>
    <ol>
        <li>Tunjukkan X &isin; NP (solusi bisa diverifikasi dalam waktu polinomial)</li>
        <li>Reduksi masalah NP-Complete yang dikenal ke X dalam waktu polinomial</li>
    </ol>
    <div class="pipeline">
        <div class="pipeline-stage" style="background:rgba(248,113,113,0.1);border-color:var(--red);">
            <div class="stage-title" style="color:var(--red)">SAT</div>
            <div class="stage-desc">Cook-Levin 1971</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,146,60,0.1);border-color:var(--orange);">
            <div class="stage-title" style="color:var(--orange)">3-SAT</div>
            <div class="stage-desc">Restrict to 3 literals</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,191,36,0.1);border-color:var(--yellow);">
            <div class="stage-title" style="color:var(--yellow)">Vertex Cover</div>
            <div class="stage-desc">Graph reduction</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(56,189,248,0.1);border-color:var(--accent);">
            <div class="stage-title" style="color:var(--accent)">Ham. Cycle</div>
            <div class="stage-desc">Path construction</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(167,139,250,0.1);border-color:var(--accent3);">
            <div class="stage-title" style="color:var(--accent3)">TSP</div>
            <div class="stage-desc">Add weights</div>
        </div>
    </div>
    <p style="margin-top:12px;"><em>Setiap panah menunjukkan polynomial-time reduction. Jika SAT &isin; P, maka SEMUA masalah di rantai ini juga &isin; P.</em></p>
</div>
`;

// ============================================================
// Override initAlgorithmAnimations for complexity charts
// ============================================================
function initAlgorithmAnimations() {
    const dpr = window.devicePixelRatio || 1;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const textColor2 = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? '#334155' : '#cbd5e1';

    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr; c.height = h * dpr;
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }

    // ===== 1. Complexity Growth Chart =====
    const chart = setupCanvas('complexity-chart', 700, 350);
    if (chart) {
        const { ctx } = chart;
        const W = 700, H = 350;
        const margin = { top: 30, right: 30, bottom: 50, left: 60 };
        const cw = W - margin.left - margin.right;
        const ch = H - margin.top - margin.bottom;
        const maxN = 20, maxY = 200;
        function mapX(n) { return margin.left + (n / maxN) * cw; }
        function mapY(v) { return margin.top + ch - (Math.min(v, maxY) / maxY) * ch; }

        const funcs = [
            { name: 'O(1)', fn: () => 1, color: '#34d399' },
            { name: 'O(log n)', fn: n => Math.log2(n || 1), color: '#38bdf8' },
            { name: 'O(n)', fn: n => n, color: '#818cf8' },
            { name: 'O(n log n)', fn: n => n * Math.log2(n || 1), color: '#fbbf24' },
            { name: 'O(n\u00B2)', fn: n => n * n, color: '#fb923c' },
            { name: 'O(2\u207F)', fn: n => Math.pow(2, n), color: '#f87171' },
        ];

        // Grid lines
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= 4; i++) {
            const y = margin.top + (ch / 4) * i;
            ctx.beginPath();
            ctx.moveTo(margin.left, y);
            ctx.lineTo(margin.left + cw, y);
            ctx.stroke();
            ctx.fillStyle = textColor2;
            ctx.font = '10px JetBrains Mono';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxY - (maxY / 4) * i), margin.left - 8, y + 4);
        }

        // Axes
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, margin.top + ch);
        ctx.lineTo(margin.left + cw, margin.top + ch);
        ctx.stroke();

        // Axis labels
        ctx.fillStyle = textColor2;
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('n (input size)', W / 2, H - 10);
        ctx.save();
        ctx.translate(15, H / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Operations', 0, 0);
        ctx.restore();

        // X-axis ticks
        for (let i = 0; i <= maxN; i += 5) {
            ctx.fillStyle = textColor2;
            ctx.font = '11px JetBrains Mono';
            ctx.textAlign = 'center';
            ctx.fillText(i, mapX(i), margin.top + ch + 20);
        }

        // Draw curves
        funcs.forEach(f => {
            ctx.strokeStyle = f.color;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let n = 0.5; n <= maxN; n += 0.5) {
                const x = mapX(n), y = mapY(f.fn(n));
                n === 0.5 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
        });

        // Legend
        funcs.forEach((f, i) => {
            const lx = margin.left + 15, ly = margin.top + 15 + i * 18;
            ctx.fillStyle = f.color;
            ctx.fillRect(lx, ly - 5, 14, 3);
            ctx.fillStyle = textColor;
            ctx.font = '11px JetBrains Mono';
            ctx.textAlign = 'left';
            ctx.fillText(f.name, lx + 20, ly);
        });

        // Title
        ctx.fillStyle = textColor;
        ctx.font = 'bold 13px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Perbandingan Pertumbuhan Fungsi Kompleksitas', W / 2, 18);
    }

    // ===== 2. Asymptotic Bounds Chart (Big-O, Theta, Omega) =====
    const asym = setupCanvas('asymptotic-chart', 700, 350);
    if (asym) {
        const { ctx } = asym;
        const W = 700, H = 350;
        const margin = { top: 30, right: 30, bottom: 50, left: 60 };
        const cw = W - margin.left - margin.right;
        const ch = H - margin.top - margin.bottom;
        const maxN = 15, maxY = 700;
        function amX(n) { return margin.left + (n / maxN) * cw; }
        function amY(v) { return margin.top + ch - (Math.min(v, maxY) / maxY) * ch; }

        // Grid
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= 4; i++) {
            const y = margin.top + (ch / 4) * i;
            ctx.beginPath();
            ctx.moveTo(margin.left, y);
            ctx.lineTo(margin.left + cw, y);
            ctx.stroke();
        }

        // Axes
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, margin.top + ch);
        ctx.lineTo(margin.left + cw, margin.top + ch);
        ctx.stroke();
        ctx.fillStyle = textColor2;
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('n', W / 2, H - 10);
        ctx.save();
        ctx.translate(15, H / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('f(n)', 0, 0);
        ctx.restore();
        for (let i = 0; i <= maxN; i += 3) {
            ctx.fillStyle = textColor2;
            ctx.font = '11px JetBrains Mono';
            ctx.textAlign = 'center';
            ctx.fillText(i, amX(i), margin.top + ch + 20);
        }

        // Fill Theta region
        ctx.fillStyle = 'rgba(251,191,36,0.08)';
        ctx.beginPath();
        for (let n = 0.5; n <= maxN; n += 0.3) {
            const x = amX(n);
            n === 0.5 ? ctx.moveTo(x, amY(3 * n * n)) : ctx.lineTo(x, amY(3 * n * n));
        }
        for (let n = maxN; n >= 0.5; n -= 0.3) {
            ctx.lineTo(amX(n), amY(n * n));
        }
        ctx.closePath();
        ctx.fill();

        // c2*g(n) = 3n^2 (upper bound / Big-O)
        ctx.strokeStyle = '#f87171';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        for (let n = 0.5; n <= maxN; n += 0.3) {
            const x = amX(n), y = amY(3 * n * n);
            n === 0.5 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // c1*g(n) = n^2 (lower bound / Big-Omega)
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        for (let n = 0.5; n <= maxN; n += 0.3) {
            const x = amX(n), y = amY(n * n);
            n === 0.5 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // f(n) = 2n^2+3n+1 (actual function)
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let n = 0.5; n <= maxN; n += 0.3) {
            const v = 2 * n * n + 3 * n + 1;
            const x = amX(n), y = amY(v);
            n === 0.5 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Labels
        ctx.font = 'bold 12px JetBrains Mono';
        ctx.fillStyle = '#f87171';
        ctx.textAlign = 'left';
        ctx.fillText('c\u2082\u00B7n\u00B2 = 3n\u00B2 (Big-O)', amX(8), amY(3 * 64) - 8);
        ctx.fillStyle = '#34d399';
        ctx.fillText('c\u2081\u00B7n\u00B2 = n\u00B2 (Big-\u03A9)', amX(9), amY(81) + 18);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('f(n) = 2n\u00B2+3n+1', amX(5.5), amY(2 * 30.25 + 16.5 + 1) - 10);
        ctx.fillStyle = '#fbbf24';
        ctx.font = '11px Inter';
        ctx.fillText('\u0398(n\u00B2) region', amX(10), amY(2 * 100) + 5);

        // Title
        ctx.fillStyle = textColor;
        ctx.font = 'bold 13px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Asymptotic Bounds: Big-O, Big-\u0398, Big-\u03A9', W / 2, 18);
    }

    // ===== 3. Fibonacci Comparison Chart =====
    const fibCanvas = setupCanvas('fib-compare-canvas', 700, 400);
    if (fibCanvas) {
        const { ctx, c } = fibCanvas;
        const W = 700, H = 400;
        let fibN = 20;
        const nInput = document.getElementById('fib-n-input');
        const nDisplay = document.getElementById('fib-n-display');

        function fibOps(n) {
            return {
                loop: n,
                recursive: Math.pow(1.618, n),
                dp: n,
                tail: n
            };
        }

        function drawFibChart(n) {
            ctx.clearRect(0, 0, W, H);
            const margin = { top: 40, right: 30, bottom: 60, left: 80 };
            const cw = W - margin.left - margin.right;
            const ch = H - margin.top - margin.bottom;

            const ops = fibOps(n);
            const maxOps = Math.max(ops.recursive, ops.loop * 2);
            const useLog = maxOps > 1000;
            const logMax = useLog ? Math.log10(maxOps) : maxOps;

            function barY(val) {
                if (useLog) return margin.top + ch - (Math.log10(Math.max(val, 1)) / logMax) * ch;
                return margin.top + ch - (val / maxOps) * ch;
            }

            // Title
            ctx.fillStyle = textColor;
            ctx.font = 'bold 14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Fibonacci: Perbandingan Operasi untuk n = ' + n + (useLog ? ' (skala log)' : ''), W / 2, 25);

            // Grid
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 0.5;
            for (let i = 0; i <= 4; i++) {
                const y = margin.top + (ch / 4) * i;
                ctx.beginPath();
                ctx.moveTo(margin.left, y);
                ctx.lineTo(margin.left + cw, y);
                ctx.stroke();
            }

            // Axes
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(margin.left, margin.top);
            ctx.lineTo(margin.left, margin.top + ch);
            ctx.lineTo(margin.left + cw, margin.top + ch);
            ctx.stroke();

            const bars = [
                { name: 'Imperative\nLoop', ops: ops.loop, complexity: 'O(n)', color: '#34d399' },
                { name: 'Recursive\nNaive', ops: ops.recursive, complexity: 'O(2\u207F)', color: '#f87171' },
                { name: 'Recursive\n+ DP', ops: ops.dp, complexity: 'O(n)', color: '#38bdf8' },
                { name: 'Tail\nRecursive', ops: ops.tail, complexity: 'O(n)', color: '#a78bfa' },
            ];

            const barW = cw / (bars.length * 2);
            bars.forEach((b, i) => {
                const x = margin.left + (i * 2 + 0.5) * barW;
                const h = margin.top + ch - barY(b.ops);
                const y = barY(b.ops);

                // Bar gradient effect
                const grad = ctx.createLinearGradient(x, y, x, y + h);
                grad.addColorStop(0, b.color);
                grad.addColorStop(1, b.color + '80');
                ctx.fillStyle = grad;
                ctx.fillRect(x, y, barW, h);

                // Bar border
                ctx.strokeStyle = b.color;
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, barW, h);

                // Label
                ctx.fillStyle = textColor;
                ctx.font = 'bold 11px Inter';
                ctx.textAlign = 'center';
                const lines = b.name.split('\n');
                lines.forEach((line, li) => ctx.fillText(line, x + barW / 2, margin.top + ch + 18 + li * 14));

                // Complexity badge
                ctx.fillStyle = b.color;
                ctx.font = 'bold 12px JetBrains Mono';
                ctx.fillText(b.complexity, x + barW / 2, y - 22);

                // Ops count
                ctx.fillStyle = textColor2;
                ctx.font = '10px JetBrains Mono';
                const opsStr = b.ops > 1e6 ? b.ops.toExponential(1) : Math.round(b.ops).toLocaleString();
                ctx.fillText(opsStr + ' ops', x + barW / 2, y - 8);
            });

            // Y-axis label
            ctx.save();
            ctx.translate(20, H / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillStyle = textColor2;
            ctx.font = '12px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(useLog ? 'Operations (log\u2081\u2080 scale)' : 'Operations', 0, 0);
            ctx.restore();
        }

        drawFibChart(fibN);

        if (nInput) {
            nInput.addEventListener('input', () => {
                fibN = parseInt(nInput.value);
                if (nDisplay) nDisplay.textContent = fibN;
                drawFibChart(fibN);
            });
        }
        const fibRun = document.getElementById('fib-run');
        if (fibRun) fibRun.addEventListener('click', () => drawFibChart(fibN));
        const fibReset = document.getElementById('fib-reset');
        if (fibReset) fibReset.addEventListener('click', () => {
            fibN = 20;
            if (nInput) nInput.value = 20;
            if (nDisplay) nDisplay.textContent = 20;
            drawFibChart(20);
        });
    }
}
