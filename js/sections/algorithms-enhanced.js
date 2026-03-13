// ============================================================
// ALGORITMA KLASIK — 10 Problem HackerRank Style (Enhanced)
// Overrides sections.algorithms dari app.js
// ============================================================

sections.algorithms = () => `

<h1 class="section-title animate-in">10 Algoritma Klasik &mdash; HackerRank Style</h1>
<p class="section-subtitle animate-in">Memahami 10 problem algoritma fundamental dengan pendekatan brute force vs optimal, implementasi di C, Go, Rust, serta visualisasi interaktif</p>

<!-- ==================== TABLE OF CONTENTS ==================== -->
<div class="card animate-in">
<h2>Daftar Problem</h2>
<div class="card-grid-3">
    <div class="info-box"><strong>1.</strong> Two Sum &mdash; Hash Map</div>
    <div class="info-box"><strong>2.</strong> Binary Search &mdash; Divide &amp; Conquer</div>
    <div class="info-box"><strong>3.</strong> Merge Sort &mdash; Sorting Optimal</div>
    <div class="info-box"><strong>4.</strong> Maximum Subarray &mdash; Kadane's</div>
    <div class="info-box"><strong>5.</strong> Climbing Stairs &mdash; Dynamic Programming</div>
    <div class="info-box"><strong>6.</strong> Longest Common Subsequence &mdash; DP Table</div>
    <div class="info-box"><strong>7.</strong> Graph BFS/DFS &mdash; Traversal</div>
    <div class="info-box"><strong>8.</strong> Dijkstra's Shortest Path</div>
    <div class="info-box"><strong>9.</strong> N-Queens &mdash; Backtracking</div>
    <div class="info-box"><strong>10.</strong> Knapsack &mdash; 0/1 DP</div>
</div>
</div>

<!-- ==================== 1. TWO SUM ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 1</span> Two Sum</h2>
<p>Diberikan array bilangan bulat <code>nums</code> dan sebuah target <code>target</code>, temukan dua elemen yang jika dijumlahkan menghasilkan <code>target</code>. Kembalikan indeks dari kedua elemen tersebut.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Brute Force</span> O(n&sup2;)</h3>
<p>Gunakan dua nested loop. Untuk setiap elemen, periksa semua elemen setelahnya apakah jumlahnya sama dengan target.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Loop <code>i</code> dari 0 sampai n-1</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Loop <code>j</code> dari i+1 sampai n</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Jika <code>nums[i] + nums[j] == target</code>, kembalikan [i, j]</div></div>
</div>
<div class="warn-box">Kompleksitas waktu O(n&sup2;) sangat lambat untuk n besar (misal n=10&sup6;). Butuh ~10&sup1;&sup2; operasi!</div>
</div>

<div class="card">
<h3><span class="badge badge-green">Optimal</span> O(n) Hash Map</h3>
<p>Gunakan hash map untuk menyimpan elemen yang sudah dilihat. Untuk setiap elemen, periksa apakah <code>target - nums[i]</code> sudah ada di hash map.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Buat hash map kosong</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Untuk setiap elemen <code>nums[i]</code>, hitung <code>complement = target - nums[i]</code></div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Jika <code>complement</code> ada di map, kembalikan indeksnya</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text">Jika tidak, masukkan <code>nums[i]</code> ke map</div></div>
</div>
<div class="success-box">Hanya butuh satu kali traverse! O(n) waktu, O(n) space.</div>
</div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="ts1-c">C</button>
    <button class="tab-btn" data-tab="ts1-go">Go</button>
    <button class="tab-btn" data-tab="ts1-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="ts1-c">
<pre class="code-block"><span class="cm">// Two Sum - C (Hash Map via chaining)</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdlib.h&gt;</span>

<span class="kw">#define</span> <span class="num">TABLE_SIZE 10007</span>

<span class="kw">typedef struct</span> <span class="type">Node</span> {
    <span class="type">int</span> key, val;
    <span class="kw">struct</span> <span class="type">Node</span>* next;
} <span class="type">Node</span>;

<span class="type">Node</span>* table[<span class="num">TABLE_SIZE</span>];

<span class="type">int</span> <span class="fn">hash</span>(<span class="type">int</span> key) {
    <span class="type">int</span> h = key % <span class="num">TABLE_SIZE</span>;
    <span class="kw">return</span> h < <span class="num">0</span> ? h + <span class="num">TABLE_SIZE</span> : h;
}

<span class="type">void</span> <span class="fn">insert</span>(<span class="type">int</span> key, <span class="type">int</span> val) {
    <span class="type">int</span> h = <span class="fn">hash</span>(key);
    <span class="type">Node</span>* n = <span class="fn">malloc</span>(<span class="kw">sizeof</span>(<span class="type">Node</span>));
    n->key = key; n->val = val;
    n->next = table[h]; table[h] = n;
}

<span class="type">int</span> <span class="fn">find</span>(<span class="type">int</span> key, <span class="type">int</span>* out) {
    <span class="type">int</span> h = <span class="fn">hash</span>(key);
    <span class="kw">for</span> (<span class="type">Node</span>* p = table[h]; p; p = p->next)
        <span class="kw">if</span> (p->key == key) { *out = p->val; <span class="kw">return</span> <span class="num">1</span>; }
    <span class="kw">return</span> <span class="num">0</span>;
}

<span class="type">void</span> <span class="fn">twoSum</span>(<span class="type">int</span>* nums, <span class="type">int</span> n, <span class="type">int</span> target) {
    <span class="fn">memset</span>(table, <span class="num">0</span>, <span class="kw">sizeof</span>(table));
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < n; i++) {
        <span class="type">int</span> comp = target - nums[i], idx;
        <span class="kw">if</span> (<span class="fn">find</span>(comp, &idx)) {
            <span class="fn">printf</span>(<span class="str">"Ditemukan: [%d, %d]\\n"</span>, idx, i);
            <span class="kw">return</span>;
        }
        <span class="fn">insert</span>(nums[i], i);
    }
    <span class="fn">printf</span>(<span class="str">"Tidak ditemukan\\n"</span>);
}
</pre>
</div>
<div class="tab-content" data-tab-content="ts1-go">
<pre class="code-block"><span class="cm">// Two Sum - Go</span>
<span class="kw">func</span> <span class="fn">twoSum</span>(nums []<span class="type">int</span>, target <span class="type">int</span>) []<span class="type">int</span> {
    seen := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>]<span class="type">int</span>)
    <span class="kw">for</span> i, num := <span class="kw">range</span> nums {
        complement := target - num
        <span class="kw">if</span> j, ok := seen[complement]; ok {
            <span class="kw">return</span> []<span class="type">int</span>{j, i}
        }
        seen[num] = i
    }
    <span class="kw">return</span> <span class="kw">nil</span> <span class="cm">// tidak ditemukan</span>
}
</pre>
</div>
<div class="tab-content" data-tab-content="ts1-rs">
<pre class="code-block"><span class="cm">// Two Sum - Rust</span>
<span class="kw">use</span> std::collections::<span class="type">HashMap</span>;

<span class="kw">fn</span> <span class="fn">two_sum</span>(nums: &[<span class="type">i32</span>], target: <span class="type">i32</span>) -> <span class="type">Option</span>&lt;(<span class="type">usize</span>, <span class="type">usize</span>)&gt; {
    <span class="kw">let mut</span> seen = <span class="type">HashMap</span>::new();
    <span class="kw">for</span> (i, &num) <span class="kw">in</span> nums.iter().enumerate() {
        <span class="kw">let</span> complement = target - num;
        <span class="kw">if let</span> <span class="type">Some</span>(&j) = seen.get(&complement) {
            <span class="kw">return</span> <span class="type">Some</span>((j, i));
        }
        seen.insert(num, i);
    }
    <span class="type">None</span>
}
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>Pendekatan</th><th>Waktu</th><th>Space</th><th>Kapan Digunakan</th></tr>
<tr><td>Brute Force (nested loop)</td><td>O(n&sup2;)</td><td>O(1)</td><td>n sangat kecil (&lt; 100)</td></tr>
<tr><td>Sorting + Two Pointer</td><td>O(n log n)</td><td>O(1)</td><td>Jika tidak butuh indeks asli</td></tr>
<tr><td>Hash Map</td><td>O(n)</td><td>O(n)</td><td>Solusi optimal untuk kasus umum</td></tr>
</table>
</div>
</div>

<!-- ==================== 2. BINARY SEARCH ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 2</span> Binary Search</h2>
<p>Diberikan array yang sudah <strong>terurut</strong> dan sebuah target, temukan indeks dari target. Jika tidak ditemukan, kembalikan -1.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Linear Search</span> O(n)</h3>
<p>Periksa setiap elemen satu per satu dari awal hingga akhir. Simpel tapi lambat untuk data besar.</p>
<div class="warn-box">Untuk array 1 juta elemen, worst case butuh 1 juta perbandingan!</div>
</div>
<div class="card">
<h3><span class="badge badge-green">Binary Search</span> O(log n)</h3>
<p>Bagi array menjadi dua setiap langkah. Bandingkan target dengan elemen tengah, lalu eliminasi setengah array.</p>
<div class="success-box">Untuk array 1 juta elemen, hanya butuh ~20 perbandingan! log&sub2;(1.000.000) &asymp; 20</div>
</div>
</div>

<h3>Visualisasi Binary Search</h3>
<div class="anim-container">
    <canvas id="binary-search-canvas" width="750" height="220" style="width:100%;max-width:750px;"></canvas>
    <div class="anim-controls">
        <label class="anim-label">Target: <input type="number" id="bs-target" class="anim-input" value="42" min="1" max="99" style="width:60px"></label>
        <button class="anim-btn" id="bs-run">Jalankan</button>
        <button class="anim-btn" id="bs-reset">Reset</button>
    </div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="bs-c">C</button>
    <button class="tab-btn" data-tab="bs-go">Go</button>
    <button class="tab-btn" data-tab="bs-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="bs-c">
<pre class="code-block"><span class="cm">// Binary Search - C</span>
<span class="type">int</span> <span class="fn">binarySearch</span>(<span class="type">int</span>* arr, <span class="type">int</span> n, <span class="type">int</span> target) {
    <span class="type">int</span> lo = <span class="num">0</span>, hi = n - <span class="num">1</span>;
    <span class="kw">while</span> (lo <= hi) {
        <span class="type">int</span> mid = lo + (hi - lo) / <span class="num">2</span>; <span class="cm">// hindari overflow</span>
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] < target) lo = mid + <span class="num">1</span>;
        <span class="kw">else</span> hi = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> -<span class="num">1</span>; <span class="cm">// tidak ditemukan</span>
}
</pre>
</div>
<div class="tab-content" data-tab-content="bs-go">
<pre class="code-block"><span class="cm">// Binary Search - Go</span>
<span class="kw">func</span> <span class="fn">binarySearch</span>(arr []<span class="type">int</span>, target <span class="type">int</span>) <span class="type">int</span> {
    lo, hi := <span class="num">0</span>, <span class="fn">len</span>(arr)-<span class="num">1</span>
    <span class="kw">for</span> lo <= hi {
        mid := lo + (hi-lo)/<span class="num">2</span>
        <span class="kw">switch</span> {
        <span class="kw">case</span> arr[mid] == target:
            <span class="kw">return</span> mid
        <span class="kw">case</span> arr[mid] < target:
            lo = mid + <span class="num">1</span>
        <span class="kw">default</span>:
            hi = mid - <span class="num">1</span>
        }
    }
    <span class="kw">return</span> -<span class="num">1</span>
}
</pre>
</div>
<div class="tab-content" data-tab-content="bs-rs">
<pre class="code-block"><span class="cm">// Binary Search - Rust</span>
<span class="kw">fn</span> <span class="fn">binary_search</span>(arr: &[<span class="type">i32</span>], target: <span class="type">i32</span>) -> <span class="type">Option</span>&lt;<span class="type">usize</span>&gt; {
    <span class="kw">let</span> (<span class="kw">mut</span> lo, <span class="kw">mut</span> hi) = (<span class="num">0</span>, arr.len());
    <span class="kw">while</span> lo < hi {
        <span class="kw">let</span> mid = lo + (hi - lo) / <span class="num">2</span>;
        <span class="kw">match</span> arr[mid].cmp(&target) {
            std::cmp::Ordering::Equal => <span class="kw">return</span> <span class="type">Some</span>(mid),
            std::cmp::Ordering::Less => lo = mid + <span class="num">1</span>,
            std::cmp::Ordering::Greater => hi = mid,
        }
    }
    <span class="type">None</span>
}

<span class="cm">// Atau gunakan standard library:</span>
<span class="cm">// arr.binary_search(&target).ok()</span>
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>Pendekatan</th><th>Waktu</th><th>Space</th><th>Syarat</th></tr>
<tr><td>Linear Search</td><td>O(n)</td><td>O(1)</td><td>Tidak perlu terurut</td></tr>
<tr><td>Binary Search (iteratif)</td><td>O(log n)</td><td>O(1)</td><td>Array harus terurut</td></tr>
<tr><td>Binary Search (rekursif)</td><td>O(log n)</td><td>O(log n) stack</td><td>Array harus terurut</td></tr>
</table>
</div>
</div>

<!-- ==================== 3. MERGE SORT ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 3</span> Merge Sort</h2>
<p>Urutkan array menggunakan strategi <strong>divide and conquer</strong>. Bagi array menjadi dua, sort masing-masing, lalu gabungkan (merge) hasil yang sudah terurut.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Bubble Sort</span> O(n&sup2;)</h3>
<p>Bandingkan elemen bersebelahan, tukar jika urutan salah. Ulangi sampai tidak ada pertukaran.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Pass pertama: elemen terbesar "menggelembung" ke akhir</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Ulangi untuk n-1 elemen sisanya</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Total perbandingan: n(n-1)/2</div></div>
</div>
</div>
<div class="card">
<h3><span class="badge badge-green">Merge Sort</span> O(n log n)</h3>
<p>Divide: bagi array jadi 2. Conquer: sort rekursif. Combine: merge dua array terurut.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Bagi array menjadi dua bagian sama besar</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Sort rekursif masing-masing bagian</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Merge dua bagian yang sudah terurut</div></div>
</div>
</div>
</div>

<h3>Visualisasi Sorting</h3>
<div class="anim-container">
    <canvas id="sorting-canvas" width="750" height="300" style="width:100%;max-width:750px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="sort-run">Jalankan Merge Sort</button>
        <button class="anim-btn" id="sort-reset">Reset</button>
    </div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="ms-c">C</button>
    <button class="tab-btn" data-tab="ms-go">Go</button>
    <button class="tab-btn" data-tab="ms-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="ms-c">
<pre class="code-block"><span class="cm">// Merge Sort - C</span>
<span class="type">void</span> <span class="fn">merge</span>(<span class="type">int</span>* arr, <span class="type">int</span> l, <span class="type">int</span> m, <span class="type">int</span> r) {
    <span class="type">int</span> n1 = m - l + <span class="num">1</span>, n2 = r - m;
    <span class="type">int</span> L[n1], R[n2];
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < n1; i++) L[i] = arr[l + i];
    <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">0</span>; j < n2; j++) R[j] = arr[m + <span class="num">1</span> + j];
    <span class="type">int</span> i = <span class="num">0</span>, j = <span class="num">0</span>, k = l;
    <span class="kw">while</span> (i < n1 && j < n2)
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    <span class="kw">while</span> (i < n1) arr[k++] = L[i++];
    <span class="kw">while</span> (j < n2) arr[k++] = R[j++];
}

<span class="type">void</span> <span class="fn">mergeSort</span>(<span class="type">int</span>* arr, <span class="type">int</span> l, <span class="type">int</span> r) {
    <span class="kw">if</span> (l < r) {
        <span class="type">int</span> m = l + (r - l) / <span class="num">2</span>;
        <span class="fn">mergeSort</span>(arr, l, m);
        <span class="fn">mergeSort</span>(arr, m + <span class="num">1</span>, r);
        <span class="fn">merge</span>(arr, l, m, r);
    }
}
</pre>
</div>
<div class="tab-content" data-tab-content="ms-go">
<pre class="code-block"><span class="cm">// Merge Sort - Go</span>
<span class="kw">func</span> <span class="fn">mergeSort</span>(arr []<span class="type">int</span>) []<span class="type">int</span> {
    <span class="kw">if</span> <span class="fn">len</span>(arr) <= <span class="num">1</span> {
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
    <span class="kw">for</span> i < <span class="fn">len</span>(left) && j < <span class="fn">len</span>(right) {
        <span class="kw">if</span> left[i] <= right[j] {
            result = <span class="fn">append</span>(result, left[i]); i++
        } <span class="kw">else</span> {
            result = <span class="fn">append</span>(result, right[j]); j++
        }
    }
    result = <span class="fn">append</span>(result, left[i:]...)
    result = <span class="fn">append</span>(result, right[j:]...)
    <span class="kw">return</span> result
}
</pre>
</div>
<div class="tab-content" data-tab-content="ms-rs">
<pre class="code-block"><span class="cm">// Merge Sort - Rust</span>
<span class="kw">fn</span> <span class="fn">merge_sort</span>(arr: &<span class="kw">mut</span> [<span class="type">i32</span>]) {
    <span class="kw">let</span> len = arr.len();
    <span class="kw">if</span> len <= <span class="num">1</span> { <span class="kw">return</span>; }
    <span class="kw">let</span> mid = len / <span class="num">2</span>;
    <span class="fn">merge_sort</span>(&<span class="kw">mut</span> arr[..mid]);
    <span class="fn">merge_sort</span>(&<span class="kw">mut</span> arr[mid..]);
    <span class="kw">let</span> merged = <span class="fn">merge</span>(&arr[..mid], &arr[mid..]);
    arr.copy_from_slice(&merged);
}

<span class="kw">fn</span> <span class="fn">merge</span>(left: &[<span class="type">i32</span>], right: &[<span class="type">i32</span>]) -> <span class="type">Vec</span>&lt;<span class="type">i32</span>&gt; {
    <span class="kw">let mut</span> result = <span class="type">Vec</span>::with_capacity(left.len() + right.len());
    <span class="kw">let</span> (<span class="kw">mut</span> i, <span class="kw">mut</span> j) = (<span class="num">0</span>, <span class="num">0</span>);
    <span class="kw">while</span> i < left.len() && j < right.len() {
        <span class="kw">if</span> left[i] <= right[j] {
            result.push(left[i]); i += <span class="num">1</span>;
        } <span class="kw">else</span> {
            result.push(right[j]); j += <span class="num">1</span>;
        }
    }
    result.extend_from_slice(&left[i..]);
    result.extend_from_slice(&right[j..]);
    result
}
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>Algoritma</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr>
<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n&sup2;)</td><td>O(n&sup2;)</td><td>O(1)</td><td>Ya</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>Ya</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n&sup2;)</td><td>O(log n)</td><td>Tidak</td></tr>
</table>
</div>
</div>

<!-- ==================== 4. MAXIMUM SUBARRAY ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 4</span> Maximum Subarray (Kadane's Algorithm)</h2>
<p>Diberikan array bilangan bulat (bisa negatif), temukan subarray <em>contiguous</em> (bersebelahan) yang memiliki jumlah terbesar.</p>
<p><strong>Contoh:</strong> <code>[-2, 1, -3, 4, -1, 2, 1, -5, 4]</code> &rarr; subarray <code>[4, -1, 2, 1]</code> dengan jumlah <strong>6</strong>.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Brute Force</span> O(n&sup2;) / O(n&sup3;)</h3>
<p><strong>O(n&sup3;):</strong> Tiga nested loop &mdash; setiap pasangan (i,j) dihitung jumlahnya dari awal.</p>
<p><strong>O(n&sup2;):</strong> Optimasi dengan running sum &mdash; untuk setiap titik awal i, tambahkan elemen satu per satu.</p>
</div>
<div class="card">
<h3><span class="badge badge-green">Kadane's</span> O(n)</h3>
<p>Ide kunci: pada setiap posisi, kita memilih antara <strong>memperpanjang subarray sebelumnya</strong> atau <strong>memulai subarray baru</strong>.</p>
<div class="info-box"><code>currentMax = max(nums[i], currentMax + nums[i])</code><br><code>globalMax = max(globalMax, currentMax)</code></div>
</div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="ka-c">C</button>
    <button class="tab-btn" data-tab="ka-go">Go</button>
    <button class="tab-btn" data-tab="ka-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="ka-c">
<pre class="code-block"><span class="cm">// Kadane's Algorithm - C</span>
<span class="type">int</span> <span class="fn">maxSubArray</span>(<span class="type">int</span>* nums, <span class="type">int</span> n) {
    <span class="type">int</span> currentMax = nums[<span class="num">0</span>];
    <span class="type">int</span> globalMax = nums[<span class="num">0</span>];
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">1</span>; i < n; i++) {
        <span class="cm">// Pilih: perpanjang subarray atau mulai baru</span>
        currentMax = (nums[i] > currentMax + nums[i])
                   ? nums[i] : currentMax + nums[i];
        <span class="kw">if</span> (currentMax > globalMax)
            globalMax = currentMax;
    }
    <span class="kw">return</span> globalMax;
}

<span class="cm">// Versi yang juga mengembalikan indeks</span>
<span class="type">void</span> <span class="fn">maxSubArrayIdx</span>(<span class="type">int</span>* nums, <span class="type">int</span> n,
                     <span class="type">int</span>* start, <span class="type">int</span>* end, <span class="type">int</span>* maxSum) {
    <span class="type">int</span> curMax = nums[<span class="num">0</span>], curStart = <span class="num">0</span>;
    *maxSum = nums[<span class="num">0</span>]; *start = <span class="num">0</span>; *end = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">1</span>; i < n; i++) {
        <span class="kw">if</span> (nums[i] > curMax + nums[i]) {
            curMax = nums[i]; curStart = i;
        } <span class="kw">else</span> {
            curMax += nums[i];
        }
        <span class="kw">if</span> (curMax > *maxSum) {
            *maxSum = curMax; *start = curStart; *end = i;
        }
    }
}
</pre>
</div>
<div class="tab-content" data-tab-content="ka-go">
<pre class="code-block"><span class="cm">// Kadane's Algorithm - Go</span>
<span class="kw">func</span> <span class="fn">maxSubArray</span>(nums []<span class="type">int</span>) <span class="type">int</span> {
    currentMax := nums[<span class="num">0</span>]
    globalMax := nums[<span class="num">0</span>]
    <span class="kw">for</span> _, num := <span class="kw">range</span> nums[<span class="num">1</span>:] {
        <span class="kw">if</span> num > currentMax+num {
            currentMax = num
        } <span class="kw">else</span> {
            currentMax += num
        }
        <span class="kw">if</span> currentMax > globalMax {
            globalMax = currentMax
        }
    }
    <span class="kw">return</span> globalMax
}
</pre>
</div>
<div class="tab-content" data-tab-content="ka-rs">
<pre class="code-block"><span class="cm">// Kadane's Algorithm - Rust</span>
<span class="kw">fn</span> <span class="fn">max_sub_array</span>(nums: &[<span class="type">i32</span>]) -> <span class="type">i32</span> {
    <span class="kw">let mut</span> current_max = nums[<span class="num">0</span>];
    <span class="kw">let mut</span> global_max = nums[<span class="num">0</span>];
    <span class="kw">for</span> &num <span class="kw">in</span> &nums[<span class="num">1</span>..] {
        current_max = num.max(current_max + num);
        global_max = global_max.max(current_max);
    }
    global_max
}
</pre>
</div>

<div class="flow-diagram">
    <div class="flow-node">Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]</div>
    <div class="flow-arrow">&darr;</div>
    <div class="flow-node">curMax: -2 &rarr; 1 &rarr; -2 &rarr; 4 &rarr; 3 &rarr; 5 &rarr; 6 &rarr; 1 &rarr; 5</div>
    <div class="flow-arrow">&darr;</div>
    <div class="flow-node">globalMax: -2 &rarr; 1 &rarr; 1 &rarr; 4 &rarr; 4 &rarr; 5 &rarr; <strong>6</strong> &rarr; 6 &rarr; 6</div>
    <div class="flow-arrow">&darr;</div>
    <div class="flow-node">Jawaban: 6 (subarray [4, -1, 2, 1])</div>
</div>
</div>

<!-- ==================== 5. CLIMBING STAIRS ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 5</span> Climbing Stairs (Dynamic Programming)</h2>
<p>Anda sedang menaiki tangga yang memiliki <code>n</code> anak tangga. Setiap langkah, Anda bisa naik <strong>1 atau 2</strong> anak tangga. Berapa banyak cara berbeda untuk mencapai puncak?</p>

<div class="info-box">
<strong>Pola:</strong> Ini identik dengan deret Fibonacci!<br>
<code>f(1) = 1, f(2) = 2, f(n) = f(n-1) + f(n-2)</code><br>
Karena untuk sampai ke tangga ke-n, kita bisa datang dari tangga ke-(n-1) dengan 1 langkah, atau dari tangga ke-(n-2) dengan 2 langkah.
</div>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Rekursif Naive</span> O(2&sup1;)</h3>
<p>Hitung f(n-1) + f(n-2) secara rekursif. Masalah: banyak subproblem yang dihitung berulang kali (overlapping subproblems).</p>
<div class="warn-box">Untuk n=40, fungsi ini dipanggil lebih dari 300 juta kali! Untuk n=50, butuh waktu bermenit-menit.</div>
</div>
<div class="card">
<h3><span class="badge badge-green">DP Bottom-Up</span> O(n)</h3>
<p>Bangun solusi dari bawah ke atas. Simpan hasil subproblem di array (atau dua variabel saja).</p>
<div class="success-box">Hanya butuh n operasi. O(n) waktu, O(1) space jika hanya simpan 2 variabel terakhir.</div>
</div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="cs-c">C</button>
    <button class="tab-btn" data-tab="cs-go">Go</button>
    <button class="tab-btn" data-tab="cs-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="cs-c">
<pre class="code-block"><span class="cm">// Climbing Stairs - C</span>
<span class="cm">// Rekursif naive (LAMBAT)</span>
<span class="type">int</span> <span class="fn">climbNaive</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n <= <span class="num">2</span>) <span class="kw">return</span> n;
    <span class="kw">return</span> <span class="fn">climbNaive</span>(n - <span class="num">1</span>) + <span class="fn">climbNaive</span>(n - <span class="num">2</span>);
}

<span class="cm">// DP optimal O(n) waktu, O(1) space</span>
<span class="type">int</span> <span class="fn">climbStairs</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n <= <span class="num">2</span>) <span class="kw">return</span> n;
    <span class="type">int</span> prev2 = <span class="num">1</span>, prev1 = <span class="num">2</span>;
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">3</span>; i <= n; i++) {
        <span class="type">int</span> curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    <span class="kw">return</span> prev1;
}
</pre>
</div>
<div class="tab-content" data-tab-content="cs-go">
<pre class="code-block"><span class="cm">// Climbing Stairs - Go</span>
<span class="kw">func</span> <span class="fn">climbStairs</span>(n <span class="type">int</span>) <span class="type">int</span> {
    <span class="kw">if</span> n <= <span class="num">2</span> {
        <span class="kw">return</span> n
    }
    prev2, prev1 := <span class="num">1</span>, <span class="num">2</span>
    <span class="kw">for</span> i := <span class="num">3</span>; i <= n; i++ {
        prev2, prev1 = prev1, prev1+prev2
    }
    <span class="kw">return</span> prev1
}
</pre>
</div>
<div class="tab-content" data-tab-content="cs-rs">
<pre class="code-block"><span class="cm">// Climbing Stairs - Rust</span>
<span class="kw">fn</span> <span class="fn">climb_stairs</span>(n: <span class="type">u32</span>) -> <span class="type">u64</span> {
    <span class="kw">if</span> n <= <span class="num">2</span> { <span class="kw">return</span> n <span class="kw">as</span> <span class="type">u64</span>; }
    <span class="kw">let</span> (<span class="kw">mut</span> prev2, <span class="kw">mut</span> prev1) = (<span class="num">1u64</span>, <span class="num">2u64</span>);
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">3</span>..=n {
        <span class="kw">let</span> curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    prev1
}
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>n</th><th>Cara</th><th>Rekursif calls</th><th>DP operasi</th></tr>
<tr><td>5</td><td>8</td><td>15</td><td>3</td></tr>
<tr><td>10</td><td>89</td><td>177</td><td>8</td></tr>
<tr><td>20</td><td>10.946</td><td>21.891</td><td>18</td></tr>
<tr><td>40</td><td>165.580.141</td><td>331.160.281</td><td>38</td></tr>
<tr><td>50</td><td>12.586.269.025</td><td>&gt;25 miliar</td><td>48</td></tr>
</table>
</div>
</div>

<!-- ==================== 6. LCS ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 6</span> Longest Common Subsequence (LCS)</h2>
<p>Diberikan dua string, temukan <strong>subsequence</strong> terpanjang yang muncul di keduanya. Subsequence tidak harus contiguous (berbeda dari substring).</p>
<p><strong>Contoh:</strong> <code>"ABCBDAB"</code> dan <code>"BDCAB"</code> &rarr; LCS = <code>"BCAB"</code> (panjang 4)</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Brute Force</span> O(2&sup1;)</h3>
<p>Enumerasi semua subsequence dari string pertama (ada 2&sup1; kemungkinan), lalu periksa mana yang juga subsequence dari string kedua.</p>
<div class="warn-box">Untuk string panjang 20, ada lebih dari 1 juta subsequence. Panjang 30? Lebih dari 1 miliar!</div>
</div>
<div class="card">
<h3><span class="badge badge-green">DP Table</span> O(n &times; m)</h3>
<p>Bangun tabel DP berukuran (n+1) x (m+1). Jika karakter sama, ambil diagonal + 1. Jika beda, ambil max dari kiri atau atas.</p>
<div class="success-box">Untuk dua string panjang 1000, hanya butuh 1 juta operasi &mdash; sangat cepat!</div>
</div>
</div>

<h3>DP Table Visual</h3>
<div class="info-box">
<strong>Rumus:</strong><br>
Jika <code>s1[i] == s2[j]</code>: <code>dp[i][j] = dp[i-1][j-1] + 1</code><br>
Jika tidak: <code>dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code>
</div>

<div class="table-wrapper">
<table>
<tr><th></th><th></th><th>B</th><th>D</th><th>C</th><th>A</th><th>B</th></tr>
<tr><th></th><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><th>A</th><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
<tr><th>B</th><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>2</td></tr>
<tr><th>C</th><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>2</td></tr>
<tr><th>B</th><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>3</td></tr>
<tr><th>D</th><td>0</td><td>1</td><td>2</td><td>2</td><td>2</td><td>3</td></tr>
<tr><th>A</th><td>0</td><td>1</td><td>2</td><td>2</td><td>3</td><td>3</td></tr>
<tr><th>B</th><td>0</td><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td></tr>
</table>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="lcs-c">C</button>
    <button class="tab-btn" data-tab="lcs-go">Go</button>
    <button class="tab-btn" data-tab="lcs-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="lcs-c">
<pre class="code-block"><span class="cm">// LCS - C (Dynamic Programming)</span>
<span class="kw">#define</span> <span class="num">MAX 1001</span>
<span class="type">int</span> dp[<span class="num">MAX</span>][<span class="num">MAX</span>];

<span class="type">int</span> <span class="fn">lcs</span>(<span class="kw">const</span> <span class="type">char</span>* s1, <span class="kw">const</span> <span class="type">char</span>* s2) {
    <span class="type">int</span> n = <span class="fn">strlen</span>(s1), m = <span class="fn">strlen</span>(s2);
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i <= n; i++) dp[i][<span class="num">0</span>] = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">0</span>; j <= m; j++) dp[<span class="num">0</span>][j] = <span class="num">0</span>;

    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">1</span>; i <= n; i++) {
        <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">1</span>; j <= m; j++) {
            <span class="kw">if</span> (s1[i-<span class="num">1</span>] == s2[j-<span class="num">1</span>])
                dp[i][j] = dp[i-<span class="num">1</span>][j-<span class="num">1</span>] + <span class="num">1</span>;
            <span class="kw">else</span>
                dp[i][j] = (dp[i-<span class="num">1</span>][j] > dp[i][j-<span class="num">1</span>])
                         ? dp[i-<span class="num">1</span>][j] : dp[i][j-<span class="num">1</span>];
        }
    }
    <span class="kw">return</span> dp[n][m];
}

<span class="cm">// Rekonstruksi LCS string</span>
<span class="type">void</span> <span class="fn">printLCS</span>(<span class="kw">const</span> <span class="type">char</span>* s1, <span class="kw">const</span> <span class="type">char</span>* s2, <span class="type">int</span> n, <span class="type">int</span> m) {
    <span class="type">int</span> idx = dp[n][m];
    <span class="type">char</span> result[idx + <span class="num">1</span>];
    result[idx] = <span class="str">'\\0'</span>;
    <span class="type">int</span> i = n, j = m;
    <span class="kw">while</span> (i > <span class="num">0</span> && j > <span class="num">0</span>) {
        <span class="kw">if</span> (s1[i-<span class="num">1</span>] == s2[j-<span class="num">1</span>]) {
            result[--idx] = s1[i-<span class="num">1</span>]; i--; j--;
        } <span class="kw">else if</span> (dp[i-<span class="num">1</span>][j] > dp[i][j-<span class="num">1</span>]) i--;
        <span class="kw">else</span> j--;
    }
    <span class="fn">printf</span>(<span class="str">"LCS: %s\\n"</span>, result);
}
</pre>
</div>
<div class="tab-content" data-tab-content="lcs-go">
<pre class="code-block"><span class="cm">// LCS - Go</span>
<span class="kw">func</span> <span class="fn">lcs</span>(s1, s2 <span class="type">string</span>) <span class="type">int</span> {
    n, m := <span class="fn">len</span>(s1), <span class="fn">len</span>(s2)
    dp := <span class="fn">make</span>([][]<span class="type">int</span>, n+<span class="num">1</span>)
    <span class="kw">for</span> i := <span class="kw">range</span> dp {
        dp[i] = <span class="fn">make</span>([]<span class="type">int</span>, m+<span class="num">1</span>)
    }
    <span class="kw">for</span> i := <span class="num">1</span>; i <= n; i++ {
        <span class="kw">for</span> j := <span class="num">1</span>; j <= m; j++ {
            <span class="kw">if</span> s1[i-<span class="num">1</span>] == s2[j-<span class="num">1</span>] {
                dp[i][j] = dp[i-<span class="num">1</span>][j-<span class="num">1</span>] + <span class="num">1</span>
            } <span class="kw">else</span> {
                dp[i][j] = <span class="fn">max</span>(dp[i-<span class="num">1</span>][j], dp[i][j-<span class="num">1</span>])
            }
        }
    }
    <span class="kw">return</span> dp[n][m]
}
</pre>
</div>
<div class="tab-content" data-tab-content="lcs-rs">
<pre class="code-block"><span class="cm">// LCS - Rust</span>
<span class="kw">fn</span> <span class="fn">lcs</span>(s1: &<span class="type">str</span>, s2: &<span class="type">str</span>) -> <span class="type">usize</span> {
    <span class="kw">let</span> (a, b): (<span class="type">Vec</span>&lt;<span class="type">char</span>&gt;, <span class="type">Vec</span>&lt;<span class="type">char</span>&gt;) =
        (s1.chars().collect(), s2.chars().collect());
    <span class="kw">let</span> (n, m) = (a.len(), b.len());
    <span class="kw">let mut</span> dp = <span class="fn">vec!</span>[<span class="fn">vec!</span>[<span class="num">0usize</span>; m + <span class="num">1</span>]; n + <span class="num">1</span>];
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">1</span>..=n {
        <span class="kw">for</span> j <span class="kw">in</span> <span class="num">1</span>..=m {
            dp[i][j] = <span class="kw">if</span> a[i-<span class="num">1</span>] == b[j-<span class="num">1</span>] {
                dp[i-<span class="num">1</span>][j-<span class="num">1</span>] + <span class="num">1</span>
            } <span class="kw">else</span> {
                dp[i-<span class="num">1</span>][j].max(dp[i][j-<span class="num">1</span>])
            };
        }
    }
    dp[n][m]
}
</pre>
</div>
</div>

<!-- ==================== 7. GRAPH BFS/DFS ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 7</span> Graph BFS / DFS Traversal</h2>
<p>Dua cara fundamental untuk menjelajahi graph: <strong>Breadth-First Search (BFS)</strong> menjelajah level per level, dan <strong>Depth-First Search (DFS)</strong> menjelajah sedalam mungkin sebelum backtrack.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-purple">BFS</span> Level-by-Level</h3>
<p>Menggunakan <strong>queue (FIFO)</strong>. Eksplorasi semua tetangga sebelum pindah ke level berikutnya.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Masukkan node awal ke queue</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Dequeue node, proses, tandai visited</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Enqueue semua tetangga yang belum dikunjungi</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text">Ulangi sampai queue kosong</div></div>
</div>
<div class="info-box"><strong>Gunakan BFS untuk:</strong> shortest path (unweighted), level-order traversal, minimum steps</div>
</div>
<div class="card">
<h3><span class="badge badge-orange">DFS</span> Depth-First</h3>
<p>Menggunakan <strong>stack (LIFO)</strong> atau rekursi. Jelajahi satu path sedalam mungkin sebelum backtrack.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Masukkan node awal ke stack</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Pop node, proses, tandai visited</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Push semua tetangga yang belum dikunjungi</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text">Ulangi sampai stack kosong</div></div>
</div>
<div class="info-box"><strong>Gunakan DFS untuk:</strong> cycle detection, topological sort, connected components, path finding</div>
</div>
</div>

<h3>Visualisasi Graph Traversal</h3>
<div class="anim-container">
    <canvas id="graph-canvas" width="750" height="350" style="width:100%;max-width:750px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="graph-bfs">BFS</button>
        <button class="anim-btn" id="graph-dfs">DFS</button>
        <button class="anim-btn" id="graph-reset">Reset</button>
    </div>
</div>

<h3>Kompleksitas</h3>
<div class="table-wrapper">
<table>
<tr><th>Algoritma</th><th>Waktu</th><th>Space</th><th>Struktur Data</th></tr>
<tr><td>BFS</td><td>O(V + E)</td><td>O(V)</td><td>Queue</td></tr>
<tr><td>DFS (iteratif)</td><td>O(V + E)</td><td>O(V)</td><td>Stack</td></tr>
<tr><td>DFS (rekursif)</td><td>O(V + E)</td><td>O(V) call stack</td><td>Rekursi</td></tr>
</table>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="gph-c">C</button>
    <button class="tab-btn" data-tab="gph-go">Go</button>
    <button class="tab-btn" data-tab="gph-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="gph-c">
<pre class="code-block"><span class="cm">// Graph BFS & DFS - C (Adjacency List)</span>
<span class="kw">#define</span> <span class="num">MAXV 100</span>

<span class="kw">typedef struct</span> {
    <span class="type">int</span> adj[<span class="num">MAXV</span>][<span class="num">MAXV</span>];
    <span class="type">int</span> deg[<span class="num">MAXV</span>];
    <span class="type">int</span> n;
} <span class="type">Graph</span>;

<span class="cm">// BFS</span>
<span class="type">void</span> <span class="fn">bfs</span>(<span class="type">Graph</span>* g, <span class="type">int</span> start) {
    <span class="type">int</span> visited[<span class="num">MAXV</span>] = {<span class="num">0</span>};
    <span class="type">int</span> queue[<span class="num">MAXV</span>], front = <span class="num">0</span>, rear = <span class="num">0</span>;
    visited[start] = <span class="num">1</span>;
    queue[rear++] = start;
    <span class="kw">while</span> (front < rear) {
        <span class="type">int</span> u = queue[front++];
        <span class="fn">printf</span>(<span class="str">"%d "</span>, u);
        <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < g->deg[u]; i++) {
            <span class="type">int</span> v = g->adj[u][i];
            <span class="kw">if</span> (!visited[v]) {
                visited[v] = <span class="num">1</span>;
                queue[rear++] = v;
            }
        }
    }
}

<span class="cm">// DFS (rekursif)</span>
<span class="type">int</span> visited[<span class="num">MAXV</span>];
<span class="type">void</span> <span class="fn">dfs</span>(<span class="type">Graph</span>* g, <span class="type">int</span> u) {
    visited[u] = <span class="num">1</span>;
    <span class="fn">printf</span>(<span class="str">"%d "</span>, u);
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < g->deg[u]; i++) {
        <span class="type">int</span> v = g->adj[u][i];
        <span class="kw">if</span> (!visited[v]) <span class="fn">dfs</span>(g, v);
    }
}
</pre>
</div>
<div class="tab-content" data-tab-content="gph-go">
<pre class="code-block"><span class="cm">// Graph BFS & DFS - Go</span>
<span class="kw">type</span> <span class="type">Graph</span> <span class="kw">struct</span> {
    adj <span class="kw">map</span>[<span class="type">int</span>][]<span class="type">int</span>
}

<span class="kw">func</span> <span class="fn">NewGraph</span>() *<span class="type">Graph</span> {
    <span class="kw">return</span> &<span class="type">Graph</span>{adj: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>][]<span class="type">int</span>)}
}

<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">AddEdge</span>(u, v <span class="type">int</span>) {
    g.adj[u] = <span class="fn">append</span>(g.adj[u], v)
    g.adj[v] = <span class="fn">append</span>(g.adj[v], u)
}

<span class="cm">// BFS</span>
<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">BFS</span>(start <span class="type">int</span>) []<span class="type">int</span> {
    visited := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>]<span class="type">bool</span>)
    queue := []<span class="type">int</span>{start}
    visited[start] = <span class="kw">true</span>
    <span class="kw">var</span> result []<span class="type">int</span>
    <span class="kw">for</span> <span class="fn">len</span>(queue) > <span class="num">0</span> {
        u := queue[<span class="num">0</span>]; queue = queue[<span class="num">1</span>:]
        result = <span class="fn">append</span>(result, u)
        <span class="kw">for</span> _, v := <span class="kw">range</span> g.adj[u] {
            <span class="kw">if</span> !visited[v] {
                visited[v] = <span class="kw">true</span>
                queue = <span class="fn">append</span>(queue, v)
            }
        }
    }
    <span class="kw">return</span> result
}

<span class="cm">// DFS</span>
<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">DFS</span>(start <span class="type">int</span>) []<span class="type">int</span> {
    visited := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>]<span class="type">bool</span>)
    <span class="kw">var</span> result []<span class="type">int</span>
    <span class="kw">var</span> <span class="fn">dfs</span> <span class="kw">func</span>(<span class="type">int</span>)
    dfs = <span class="kw">func</span>(u <span class="type">int</span>) {
        visited[u] = <span class="kw">true</span>
        result = <span class="fn">append</span>(result, u)
        <span class="kw">for</span> _, v := <span class="kw">range</span> g.adj[u] {
            <span class="kw">if</span> !visited[v] { <span class="fn">dfs</span>(v) }
        }
    }
    <span class="fn">dfs</span>(start)
    <span class="kw">return</span> result
}
</pre>
</div>
<div class="tab-content" data-tab-content="gph-rs">
<pre class="code-block"><span class="cm">// Graph BFS & DFS - Rust</span>
<span class="kw">use</span> std::collections::{<span class="type">HashMap</span>, <span class="type">HashSet</span>, <span class="type">VecDeque</span>};

<span class="kw">struct</span> <span class="type">Graph</span> {
    adj: <span class="type">HashMap</span>&lt;<span class="type">usize</span>, <span class="type">Vec</span>&lt;<span class="type">usize</span>&gt;&gt;,
}

<span class="kw">impl</span> <span class="type">Graph</span> {
    <span class="kw">fn</span> <span class="fn">new</span>() -> <span class="type">Self</span> {
        <span class="type">Graph</span> { adj: <span class="type">HashMap</span>::new() }
    }

    <span class="kw">fn</span> <span class="fn">add_edge</span>(&<span class="kw">mut</span> self, u: <span class="type">usize</span>, v: <span class="type">usize</span>) {
        self.adj.entry(u).or_default().push(v);
        self.adj.entry(v).or_default().push(u);
    }

    <span class="cm">// BFS</span>
    <span class="kw">fn</span> <span class="fn">bfs</span>(&self, start: <span class="type">usize</span>) -> <span class="type">Vec</span>&lt;<span class="type">usize</span>&gt; {
        <span class="kw">let mut</span> visited = <span class="type">HashSet</span>::new();
        <span class="kw">let mut</span> queue = <span class="type">VecDeque</span>::new();
        <span class="kw">let mut</span> result = <span class="type">Vec</span>::new();
        visited.insert(start);
        queue.push_back(start);
        <span class="kw">while let</span> <span class="type">Some</span>(u) = queue.pop_front() {
            result.push(u);
            <span class="kw">if let</span> <span class="type">Some</span>(neighbors) = self.adj.get(&u) {
                <span class="kw">for</span> &v <span class="kw">in</span> neighbors {
                    <span class="kw">if</span> visited.insert(v) {
                        queue.push_back(v);
                    }
                }
            }
        }
        result
    }

    <span class="cm">// DFS</span>
    <span class="kw">fn</span> <span class="fn">dfs</span>(&self, start: <span class="type">usize</span>) -> <span class="type">Vec</span>&lt;<span class="type">usize</span>&gt; {
        <span class="kw">let mut</span> visited = <span class="type">HashSet</span>::new();
        <span class="kw">let mut</span> result = <span class="type">Vec</span>::new();
        self.<span class="fn">dfs_helper</span>(start, &<span class="kw">mut</span> visited, &<span class="kw">mut</span> result);
        result
    }

    <span class="kw">fn</span> <span class="fn">dfs_helper</span>(&self, u: <span class="type">usize</span>,
                   visited: &<span class="kw">mut</span> <span class="type">HashSet</span>&lt;<span class="type">usize</span>&gt;,
                   result: &<span class="kw">mut</span> <span class="type">Vec</span>&lt;<span class="type">usize</span>&gt;) {
        visited.insert(u);
        result.push(u);
        <span class="kw">if let</span> <span class="type">Some</span>(neighbors) = self.adj.get(&u) {
            <span class="kw">for</span> &v <span class="kw">in</span> neighbors {
                <span class="kw">if</span> !visited.contains(&v) {
                    self.<span class="fn">dfs_helper</span>(v, visited, result);
                }
            }
        }
    }
}
</pre>
</div>
</div>

<!-- ==================== 8. DIJKSTRA ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 8</span> Dijkstra's Shortest Path</h2>
<p>Temukan jalur terpendek dari satu node sumber ke semua node lain dalam graph <strong>berbobot non-negatif</strong>.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">BFS Biasa</span> Tidak Cukup!</h3>
<p>BFS hanya bekerja untuk graph <strong>tanpa bobot</strong> (atau bobot sama). Pada graph berbobot, jalur dengan edge lebih sedikit belum tentu yang terpendek.</p>
<div class="warn-box"><strong>Contoh:</strong> Path A&rarr;C (bobot 10) vs A&rarr;B&rarr;C (bobot 3+4=7). BFS memilih A&rarr;C karena lebih sedikit edge, tapi bukan yang terpendek!</div>
</div>
<div class="card">
<h3><span class="badge badge-green">Dijkstra</span> O((V+E) log V)</h3>
<p>Gunakan <strong>priority queue (min-heap)</strong>. Selalu proses node dengan jarak terkecil terlebih dahulu. Greedy approach yang dijamin optimal untuk bobot non-negatif.</p>
<div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-text">Set jarak semua node = infinity, sumber = 0</div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-text">Masukkan sumber ke priority queue</div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-text">Extract min, relax semua tetangga</div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-text">Ulangi sampai queue kosong</div></div>
</div>
</div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="dj-go">Go</button>
    <button class="tab-btn" data-tab="dj-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="dj-go">
<pre class="code-block"><span class="cm">// Dijkstra - Go (dengan container/heap)</span>
<span class="kw">import</span> (
    <span class="str">"container/heap"</span>
    <span class="str">"math"</span>
)

<span class="kw">type</span> <span class="type">Edge</span> <span class="kw">struct</span> { to, weight <span class="type">int</span> }
<span class="kw">type</span> <span class="type">Item</span> <span class="kw">struct</span> { node, dist <span class="type">int</span> }
<span class="kw">type</span> <span class="type">PQ</span> []<span class="type">Item</span>

<span class="kw">func</span> (pq <span class="type">PQ</span>)  <span class="fn">Len</span>() <span class="type">int</span>            { <span class="kw">return</span> <span class="fn">len</span>(pq) }
<span class="kw">func</span> (pq <span class="type">PQ</span>)  <span class="fn">Less</span>(i, j <span class="type">int</span>) <span class="type">bool</span> { <span class="kw">return</span> pq[i].dist < pq[j].dist }
<span class="kw">func</span> (pq <span class="type">PQ</span>)  <span class="fn">Swap</span>(i, j <span class="type">int</span>)      { pq[i], pq[j] = pq[j], pq[i] }
<span class="kw">func</span> (pq *<span class="type">PQ</span>) <span class="fn">Push</span>(x <span class="kw">interface</span>{})   { *pq = <span class="fn">append</span>(*pq, x.(<span class="type">Item</span>)) }
<span class="kw">func</span> (pq *<span class="type">PQ</span>) <span class="fn">Pop</span>() <span class="kw">interface</span>{}     {
    old := *pq; n := <span class="fn">len</span>(old)
    x := old[n-<span class="num">1</span>]; *pq = old[:n-<span class="num">1</span>]
    <span class="kw">return</span> x
}

<span class="kw">func</span> <span class="fn">dijkstra</span>(graph [][]<span class="type">Edge</span>, src <span class="type">int</span>) []<span class="type">int</span> {
    n := <span class="fn">len</span>(graph)
    dist := <span class="fn">make</span>([]<span class="type">int</span>, n)
    <span class="kw">for</span> i := <span class="kw">range</span> dist { dist[i] = math.<span class="num">MaxInt64</span> }
    dist[src] = <span class="num">0</span>

    pq := &<span class="type">PQ</span>{<span class="type">Item</span>{src, <span class="num">0</span>}}
    heap.<span class="fn">Init</span>(pq)

    <span class="kw">for</span> pq.<span class="fn">Len</span>() > <span class="num">0</span> {
        u := heap.<span class="fn">Pop</span>(pq).(<span class="type">Item</span>)
        <span class="kw">if</span> u.dist > dist[u.node] { <span class="kw">continue</span> }
        <span class="kw">for</span> _, e := <span class="kw">range</span> graph[u.node] {
            newDist := dist[u.node] + e.weight
            <span class="kw">if</span> newDist < dist[e.to] {
                dist[e.to] = newDist
                heap.<span class="fn">Push</span>(pq, <span class="type">Item</span>{e.to, newDist})
            }
        }
    }
    <span class="kw">return</span> dist
}
</pre>
</div>
<div class="tab-content" data-tab-content="dj-rs">
<pre class="code-block"><span class="cm">// Dijkstra - Rust (dengan BinaryHeap)</span>
<span class="kw">use</span> std::collections::<span class="type">BinaryHeap</span>;
<span class="kw">use</span> std::cmp::<span class="type">Reverse</span>;

<span class="kw">fn</span> <span class="fn">dijkstra</span>(graph: &<span class="type">Vec</span>&lt;<span class="type">Vec</span>&lt;(<span class="type">usize</span>, <span class="type">u64</span>)&gt;&gt;, src: <span class="type">usize</span>) -> <span class="type">Vec</span>&lt;<span class="type">u64</span>&gt; {
    <span class="kw">let</span> n = graph.len();
    <span class="kw">let mut</span> dist = <span class="fn">vec!</span>[<span class="type">u64</span>::MAX; n];
    dist[src] = <span class="num">0</span>;

    <span class="kw">let mut</span> heap = <span class="type">BinaryHeap</span>::new();
    heap.push(<span class="type">Reverse</span>((<span class="num">0u64</span>, src)));

    <span class="kw">while let</span> <span class="type">Some</span>(<span class="type">Reverse</span>((d, u))) = heap.pop() {
        <span class="kw">if</span> d > dist[u] { <span class="kw">continue</span>; }
        <span class="kw">for</span> &(v, w) <span class="kw">in</span> &graph[u] {
            <span class="kw">let</span> new_dist = dist[u] + w;
            <span class="kw">if</span> new_dist < dist[v] {
                dist[v] = new_dist;
                heap.push(<span class="type">Reverse</span>((new_dist, v)));
            }
        }
    }
    dist
}
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>Algoritma</th><th>Waktu</th><th>Bobot Negatif?</th><th>Kasus Penggunaan</th></tr>
<tr><td>BFS</td><td>O(V + E)</td><td>Tidak relevan (unweighted)</td><td>Graph tanpa bobot</td></tr>
<tr><td>Dijkstra (array)</td><td>O(V&sup2;)</td><td>Tidak</td><td>Dense graph</td></tr>
<tr><td>Dijkstra (heap)</td><td>O((V+E) log V)</td><td>Tidak</td><td>Sparse graph</td></tr>
<tr><td>Bellman-Ford</td><td>O(V &times; E)</td><td>Ya</td><td>Ada bobot negatif</td></tr>
</table>
</div>
</div>

<!-- ==================== 9. N-QUEENS ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 9</span> N-Queens (Backtracking)</h2>
<p>Tempatkan <strong>N queens</strong> pada papan catur N&times;N sehingga tidak ada dua queen yang saling menyerang. Queen menyerang secara horizontal, vertikal, dan diagonal.</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Brute Force</span> O(N!)</h3>
<p>Coba semua kemungkinan penempatan N queen di N&sup2; kotak. Ada C(N&sup2;, N) kemungkinan &mdash; untuk N=8, itu lebih dari 4 miliar!</p>
<div class="warn-box">Bahkan dengan optimasi permutasi (satu queen per baris), masih ada N! = 40.320 kemungkinan untuk N=8.</div>
</div>
<div class="card">
<h3><span class="badge badge-green">Backtracking</span> Pruning</h3>
<p>Tempatkan queen baris per baris. Untuk setiap baris, coba setiap kolom. Jika posisi aman, lanjut ke baris berikutnya. Jika tidak ada posisi aman, <strong>backtrack</strong>.</p>
<div class="success-box">Dengan backtracking, rata-rata hanya perlu memeriksa beberapa ratus posisi untuk N=8, jauh lebih sedikit dari 40.320!</div>
</div>
</div>

<h3>Visualisasi N-Queens</h3>
<div class="anim-container">
    <canvas id="nqueens-canvas" width="450" height="450" style="width:100%;max-width:450px;"></canvas>
    <div class="anim-controls">
        <label class="anim-label">N: <input type="number" id="nq-size" class="anim-input" value="8" min="4" max="12" style="width:50px"></label>
        <button class="anim-btn" id="nq-run">Jalankan</button>
        <button class="anim-btn" id="nq-reset">Reset</button>
    </div>
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="nq-c">C</button>
    <button class="tab-btn" data-tab="nq-go">Go</button>
    <button class="tab-btn" data-tab="nq-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="nq-c">
<pre class="code-block"><span class="cm">// N-Queens - C (Backtracking)</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;stdbool.h&gt;</span>
<span class="kw">#define</span> <span class="num">MAXN 20</span>

<span class="type">int</span> board[<span class="num">MAXN</span>]; <span class="cm">// board[row] = col</span>
<span class="type">int</span> count = <span class="num">0</span>;

<span class="type">bool</span> <span class="fn">isSafe</span>(<span class="type">int</span> row, <span class="type">int</span> col) {
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < row; i++) {
        <span class="kw">if</span> (board[i] == col ||
            <span class="fn">abs</span>(board[i] - col) == <span class="fn">abs</span>(i - row))
            <span class="kw">return</span> <span class="kw">false</span>;
    }
    <span class="kw">return</span> <span class="kw">true</span>;
}

<span class="type">void</span> <span class="fn">solve</span>(<span class="type">int</span> row, <span class="type">int</span> n) {
    <span class="kw">if</span> (row == n) {
        count++;
        <span class="cm">// Print solusi</span>
        <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < n; i++) {
            <span class="kw">for</span> (<span class="type">int</span> j = <span class="num">0</span>; j < n; j++)
                <span class="fn">printf</span>(<span class="str">"%c "</span>, board[i] == j ? <span class="str">'Q'</span> : <span class="str">'.'</span>);
            <span class="fn">printf</span>(<span class="str">"\\n"</span>);
        }
        <span class="fn">printf</span>(<span class="str">"\\n"</span>);
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="type">int</span> col = <span class="num">0</span>; col < n; col++) {
        <span class="kw">if</span> (<span class="fn">isSafe</span>(row, col)) {
            board[row] = col;
            <span class="fn">solve</span>(row + <span class="num">1</span>, n);
            <span class="cm">// backtrack otomatis (board[row] di-overwrite)</span>
        }
    }
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">int</span> n = <span class="num">8</span>;
    <span class="fn">solve</span>(<span class="num">0</span>, n);
    <span class="fn">printf</span>(<span class="str">"Total solusi untuk %d-Queens: %d\\n"</span>, n, count);
    <span class="kw">return</span> <span class="num">0</span>;
}
</pre>
</div>
<div class="tab-content" data-tab-content="nq-go">
<pre class="code-block"><span class="cm">// N-Queens - Go</span>
<span class="kw">func</span> <span class="fn">solveNQueens</span>(n <span class="type">int</span>) [][]<span class="type">int</span> {
    <span class="kw">var</span> results [][]<span class="type">int</span>
    board := <span class="fn">make</span>([]<span class="type">int</span>, n) <span class="cm">// board[row] = col</span>

    <span class="kw">var</span> <span class="fn">solve</span> <span class="kw">func</span>(<span class="type">int</span>)
    solve = <span class="kw">func</span>(row <span class="type">int</span>) {
        <span class="kw">if</span> row == n {
            sol := <span class="fn">make</span>([]<span class="type">int</span>, n)
            <span class="fn">copy</span>(sol, board)
            results = <span class="fn">append</span>(results, sol)
            <span class="kw">return</span>
        }
        <span class="kw">for</span> col := <span class="num">0</span>; col < n; col++ {
            <span class="kw">if</span> <span class="fn">isSafe</span>(board, row, col) {
                board[row] = col
                <span class="fn">solve</span>(row + <span class="num">1</span>)
            }
        }
    }
    <span class="fn">solve</span>(<span class="num">0</span>)
    <span class="kw">return</span> results
}

<span class="kw">func</span> <span class="fn">isSafe</span>(board []<span class="type">int</span>, row, col <span class="type">int</span>) <span class="type">bool</span> {
    <span class="kw">for</span> i := <span class="num">0</span>; i < row; i++ {
        <span class="kw">if</span> board[i] == col {
            <span class="kw">return</span> <span class="kw">false</span>
        }
        <span class="kw">if</span> <span class="fn">abs</span>(board[i]-col) == <span class="fn">abs</span>(i-row) {
            <span class="kw">return</span> <span class="kw">false</span>
        }
    }
    <span class="kw">return</span> <span class="kw">true</span>
}

<span class="kw">func</span> <span class="fn">abs</span>(x <span class="type">int</span>) <span class="type">int</span> {
    <span class="kw">if</span> x < <span class="num">0</span> { <span class="kw">return</span> -x }
    <span class="kw">return</span> x
}
</pre>
</div>
<div class="tab-content" data-tab-content="nq-rs">
<pre class="code-block"><span class="cm">// N-Queens - Rust</span>
<span class="kw">fn</span> <span class="fn">solve_n_queens</span>(n: <span class="type">usize</span>) -> <span class="type">Vec</span>&lt;<span class="type">Vec</span>&lt;<span class="type">usize</span>&gt;&gt; {
    <span class="kw">let mut</span> results = <span class="type">Vec</span>::new();
    <span class="kw">let mut</span> board = <span class="fn">vec!</span>[<span class="num">0usize</span>; n];
    <span class="fn">solve</span>(&<span class="kw">mut</span> board, <span class="num">0</span>, n, &<span class="kw">mut</span> results);
    results
}

<span class="kw">fn</span> <span class="fn">solve</span>(board: &<span class="kw">mut</span> <span class="type">Vec</span>&lt;<span class="type">usize</span>&gt;, row: <span class="type">usize</span>,
         n: <span class="type">usize</span>, results: &<span class="kw">mut</span> <span class="type">Vec</span>&lt;<span class="type">Vec</span>&lt;<span class="type">usize</span>&gt;&gt;) {
    <span class="kw">if</span> row == n {
        results.push(board.clone());
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> col <span class="kw">in</span> <span class="num">0</span>..n {
        <span class="kw">if</span> <span class="fn">is_safe</span>(board, row, col) {
            board[row] = col;
            <span class="fn">solve</span>(board, row + <span class="num">1</span>, n, results);
        }
    }
}

<span class="kw">fn</span> <span class="fn">is_safe</span>(board: &[<span class="type">usize</span>], row: <span class="type">usize</span>, col: <span class="type">usize</span>) -> <span class="type">bool</span> {
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..row {
        <span class="kw">if</span> board[i] == col { <span class="kw">return</span> <span class="kw">false</span>; }
        <span class="kw">let</span> diff = <span class="kw">if</span> board[i] > col
            { board[i] - col } <span class="kw">else</span> { col - board[i] };
        <span class="kw">if</span> diff == row - i { <span class="kw">return</span> <span class="kw">false</span>; }
    }
    <span class="kw">true</span>
}
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>N</th><th>Solusi</th><th>Node Diperiksa (Backtracking)</th><th>Brute Force (N!)</th></tr>
<tr><td>4</td><td>2</td><td>~16</td><td>24</td></tr>
<tr><td>8</td><td>92</td><td>~876</td><td>40.320</td></tr>
<tr><td>10</td><td>724</td><td>~8.832</td><td>3.628.800</td></tr>
<tr><td>12</td><td>14.200</td><td>~120.000</td><td>479.001.600</td></tr>
</table>
</div>
</div>

<!-- ==================== 10. KNAPSACK ==================== -->
<div class="card animate-in">
<h2><span class="badge badge-blue">Problem 10</span> 0/1 Knapsack (Dynamic Programming)</h2>
<p>Diberikan <code>n</code> item, masing-masing dengan berat (<code>weight</code>) dan nilai (<code>value</code>), serta kapasitas knapsack <code>W</code>. Pilih item-item untuk memaksimalkan total nilai tanpa melebihi kapasitas. Setiap item hanya bisa dipilih <strong>sekali</strong> (0/1).</p>

<div class="card-grid">
<div class="card">
<h3><span class="badge badge-red">Brute Force</span> O(2&sup1;)</h3>
<p>Untuk setiap item, ada dua pilihan: ambil atau tidak. Total kombinasi = 2&sup1;. Periksa semua kombinasi, ambil yang nilai tertinggi dengan total berat &le; W.</p>
<div class="warn-box">Untuk 20 item: 1.048.576 kombinasi. Untuk 30 item: lebih dari 1 miliar!</div>
</div>
<div class="card">
<h3><span class="badge badge-green">DP</span> O(n &times; W)</h3>
<p>Bangun tabel DP berukuran (n+1) x (W+1). Untuk setiap item dan setiap kapasitas, pilih max antara tidak mengambil item atau mengambilnya.</p>
<div class="success-box"><strong>Rumus:</strong><br><code>dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i]] + val[i])</code></div>
</div>
</div>

<h3>Contoh</h3>
<div class="info-box">
<strong>Item:</strong> [(berat=2, nilai=3), (berat=3, nilai=4), (berat=4, nilai=5), (berat=5, nilai=6)]<br>
<strong>Kapasitas W = 8</strong><br>
<strong>Solusi optimal:</strong> Ambil item 1,2,3 (berat=2+3+4=9? Tidak!) &rarr; Ambil item 1,2,4 (berat=2+3+5=10? Tidak!) &rarr; Ambil item 1,3 (berat=2+4=6, nilai=3+5=8) atau item 2,4 (berat=3+5=8, nilai=4+6=10). Jawaban: <strong>10</strong>.
</div>

<h3>Implementasi</h3>
<div class="tabs">
    <button class="tab-btn active" data-tab="ks-c">C</button>
    <button class="tab-btn" data-tab="ks-go">Go</button>
    <button class="tab-btn" data-tab="ks-rs">Rust</button>
</div>
<div class="tab-content active" data-tab-content="ks-c">
<pre class="code-block"><span class="cm">// 0/1 Knapsack - C</span>
<span class="kw">#include</span> <span class="str">&lt;stdio.h&gt;</span>
<span class="kw">#define</span> <span class="num">MAXN 1001</span>
<span class="kw">#define</span> <span class="num">MAXW 10001</span>

<span class="type">int</span> dp[<span class="num">MAXN</span>][<span class="num">MAXW</span>];

<span class="type">int</span> <span class="fn">max</span>(<span class="type">int</span> a, <span class="type">int</span> b) { <span class="kw">return</span> a > b ? a : b; }

<span class="type">int</span> <span class="fn">knapsack</span>(<span class="type">int</span>* wt, <span class="type">int</span>* val, <span class="type">int</span> n, <span class="type">int</span> W) {
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i <= n; i++)
        <span class="kw">for</span> (<span class="type">int</span> w = <span class="num">0</span>; w <= W; w++) {
            <span class="kw">if</span> (i == <span class="num">0</span> || w == <span class="num">0</span>)
                dp[i][w] = <span class="num">0</span>;
            <span class="kw">else if</span> (wt[i-<span class="num">1</span>] <= w)
                dp[i][w] = <span class="fn">max</span>(val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w - wt[i-<span class="num">1</span>]],
                               dp[i-<span class="num">1</span>][w]);
            <span class="kw">else</span>
                dp[i][w] = dp[i-<span class="num">1</span>][w];
        }
    <span class="kw">return</span> dp[n][W];
}

<span class="cm">// Versi space-optimized O(W)</span>
<span class="type">int</span> <span class="fn">knapsack1D</span>(<span class="type">int</span>* wt, <span class="type">int</span>* val, <span class="type">int</span> n, <span class="type">int</span> W) {
    <span class="type">int</span> dp1d[<span class="num">MAXW</span>] = {<span class="num">0</span>};
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">0</span>; i < n; i++)
        <span class="kw">for</span> (<span class="type">int</span> w = W; w >= wt[i]; w--)
            dp1d[w] = <span class="fn">max</span>(dp1d[w], val[i] + dp1d[w - wt[i]]);
    <span class="kw">return</span> dp1d[W];
}
</pre>
</div>
<div class="tab-content" data-tab-content="ks-go">
<pre class="code-block"><span class="cm">// 0/1 Knapsack - Go</span>
<span class="kw">func</span> <span class="fn">knapsack</span>(weights, values []<span class="type">int</span>, W <span class="type">int</span>) <span class="type">int</span> {
    n := <span class="fn">len</span>(weights)
    <span class="cm">// Space-optimized: hanya 1D array</span>
    dp := <span class="fn">make</span>([]<span class="type">int</span>, W+<span class="num">1</span>)
    <span class="kw">for</span> i := <span class="num">0</span>; i < n; i++ {
        <span class="cm">// Traverse dari kanan ke kiri agar tidak pakai item lebih dari sekali</span>
        <span class="kw">for</span> w := W; w >= weights[i]; w-- {
            <span class="kw">if</span> values[i]+dp[w-weights[i]] > dp[w] {
                dp[w] = values[i] + dp[w-weights[i]]
            }
        }
    }
    <span class="kw">return</span> dp[W]
}

<span class="cm">// Versi 2D yang juga bisa reconstruct items</span>
<span class="kw">func</span> <span class="fn">knapsack2D</span>(wt, val []<span class="type">int</span>, W <span class="type">int</span>) (<span class="type">int</span>, []<span class="type">int</span>) {
    n := <span class="fn">len</span>(wt)
    dp := <span class="fn">make</span>([][]<span class="type">int</span>, n+<span class="num">1</span>)
    <span class="kw">for</span> i := <span class="kw">range</span> dp {
        dp[i] = <span class="fn">make</span>([]<span class="type">int</span>, W+<span class="num">1</span>)
    }
    <span class="kw">for</span> i := <span class="num">1</span>; i <= n; i++ {
        <span class="kw">for</span> w := <span class="num">0</span>; w <= W; w++ {
            dp[i][w] = dp[i-<span class="num">1</span>][w]
            <span class="kw">if</span> wt[i-<span class="num">1</span>] <= w {
                v := val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w-wt[i-<span class="num">1</span>]]
                <span class="kw">if</span> v > dp[i][w] { dp[i][w] = v }
            }
        }
    }
    <span class="cm">// Reconstruct</span>
    <span class="kw">var</span> items []<span class="type">int</span>
    w := W
    <span class="kw">for</span> i := n; i > <span class="num">0</span>; i-- {
        <span class="kw">if</span> dp[i][w] != dp[i-<span class="num">1</span>][w] {
            items = <span class="fn">append</span>(items, i-<span class="num">1</span>)
            w -= wt[i-<span class="num">1</span>]
        }
    }
    <span class="kw">return</span> dp[n][W], items
}
</pre>
</div>
<div class="tab-content" data-tab-content="ks-rs">
<pre class="code-block"><span class="cm">// 0/1 Knapsack - Rust</span>
<span class="kw">fn</span> <span class="fn">knapsack</span>(weights: &[<span class="type">usize</span>], values: &[<span class="type">usize</span>], w_cap: <span class="type">usize</span>) -> <span class="type">usize</span> {
    <span class="kw">let</span> n = weights.len();
    <span class="kw">let mut</span> dp = <span class="fn">vec!</span>[<span class="num">0usize</span>; w_cap + <span class="num">1</span>];
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">0</span>..n {
        <span class="kw">for</span> w <span class="kw">in</span> (weights[i]..=w_cap).rev() {
            dp[w] = dp[w].max(values[i] + dp[w - weights[i]]);
        }
    }
    dp[w_cap]
}

<span class="cm">// Versi dengan rekonstruksi item</span>
<span class="kw">fn</span> <span class="fn">knapsack_items</span>(wt: &[<span class="type">usize</span>], val: &[<span class="type">usize</span>], cap: <span class="type">usize</span>)
    -> (<span class="type">usize</span>, <span class="type">Vec</span>&lt;<span class="type">usize</span>&gt;)
{
    <span class="kw">let</span> n = wt.len();
    <span class="kw">let mut</span> dp = <span class="fn">vec!</span>[<span class="fn">vec!</span>[<span class="num">0usize</span>; cap + <span class="num">1</span>]; n + <span class="num">1</span>];
    <span class="kw">for</span> i <span class="kw">in</span> <span class="num">1</span>..=n {
        <span class="kw">for</span> w <span class="kw">in</span> <span class="num">0</span>..=cap {
            dp[i][w] = dp[i-<span class="num">1</span>][w];
            <span class="kw">if</span> wt[i-<span class="num">1</span>] <= w {
                dp[i][w] = dp[i][w].max(
                    val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w - wt[i-<span class="num">1</span>]]
                );
            }
        }
    }
    <span class="kw">let mut</span> items = <span class="type">Vec</span>::new();
    <span class="kw">let mut</span> w = cap;
    <span class="kw">for</span> i <span class="kw">in</span> (<span class="num">1</span>..=n).rev() {
        <span class="kw">if</span> dp[i][w] != dp[i-<span class="num">1</span>][w] {
            items.push(i - <span class="num">1</span>);
            w -= wt[i - <span class="num">1</span>];
        }
    }
    (dp[n][cap], items)
}
</pre>
</div>

<div class="table-wrapper">
<table>
<tr><th>Pendekatan</th><th>Waktu</th><th>Space</th><th>Catatan</th></tr>
<tr><td>Brute Force</td><td>O(2&sup1;)</td><td>O(n)</td><td>Coba semua subset</td></tr>
<tr><td>DP 2D</td><td>O(n &times; W)</td><td>O(n &times; W)</td><td>Bisa reconstruct items</td></tr>
<tr><td>DP 1D (optimized)</td><td>O(n &times; W)</td><td>O(W)</td><td>Tidak bisa reconstruct</td></tr>
<tr><td>Greedy (fractional)</td><td>O(n log n)</td><td>O(1)</td><td>Hanya untuk fractional knapsack</td></tr>
</table>
</div>
</div>

<!-- ==================== RINGKASAN ==================== -->
<div class="card animate-in">
<h2>Ringkasan: 10 Problem & Teknik</h2>
<div class="table-wrapper">
<table>
<tr><th>#</th><th>Problem</th><th>Teknik</th><th>Brute Force</th><th>Optimal</th></tr>
<tr><td>1</td><td>Two Sum</td><td>Hash Map</td><td>O(n&sup2;)</td><td>O(n)</td></tr>
<tr><td>2</td><td>Binary Search</td><td>Divide &amp; Conquer</td><td>O(n)</td><td>O(log n)</td></tr>
<tr><td>3</td><td>Merge Sort</td><td>Divide &amp; Conquer</td><td>O(n&sup2;)</td><td>O(n log n)</td></tr>
<tr><td>4</td><td>Maximum Subarray</td><td>Kadane's Algorithm</td><td>O(n&sup2;)</td><td>O(n)</td></tr>
<tr><td>5</td><td>Climbing Stairs</td><td>Dynamic Programming</td><td>O(2&sup1;)</td><td>O(n)</td></tr>
<tr><td>6</td><td>LCS</td><td>DP Table</td><td>O(2&sup1;)</td><td>O(n&times;m)</td></tr>
<tr><td>7</td><td>Graph BFS/DFS</td><td>Traversal</td><td>-</td><td>O(V+E)</td></tr>
<tr><td>8</td><td>Dijkstra</td><td>Greedy + Priority Queue</td><td>O(V&sup2;)</td><td>O((V+E) log V)</td></tr>
<tr><td>9</td><td>N-Queens</td><td>Backtracking</td><td>O(N!)</td><td>Pruning</td></tr>
<tr><td>10</td><td>0/1 Knapsack</td><td>Dynamic Programming</td><td>O(2&sup1;)</td><td>O(n&times;W)</td></tr>
</table>
</div>

<div class="info-box">
<strong>Pola yang Muncul Berulang:</strong>
<ul>
    <li><strong>Hash Map</strong> &mdash; Mengurangi pencarian dari O(n) menjadi O(1)</li>
    <li><strong>Divide &amp; Conquer</strong> &mdash; Membagi masalah menjadi subproblem lebih kecil</li>
    <li><strong>Dynamic Programming</strong> &mdash; Menghindari perhitungan berulang (overlapping subproblems)</li>
    <li><strong>Greedy</strong> &mdash; Membuat pilihan lokal optimal pada setiap langkah</li>
    <li><strong>Backtracking</strong> &mdash; Eksplorasi + pruning untuk masalah constraint satisfaction</li>
</ul>
</div>

<div class="success-box">
<strong>Tips untuk HackerRank / Competitive Programming:</strong>
<ul>
    <li>Pahami constraint: n &le; 10&sup3; bisa O(n&sup2;), n &le; 10&sup6; butuh O(n) atau O(n log n)</li>
    <li>Selalu pikirkan edge case: array kosong, satu elemen, semua sama, semua negatif</li>
    <li>Gunakan bahasa yang paling nyaman &mdash; C untuk kecepatan, Go/Rust untuk safety</li>
    <li>Latihan konsisten lebih penting dari menghafal solusi</li>
</ul>
</div>
</div>

`;

// ============================================================
// CANVAS VISUALIZATIONS
// ============================================================

function initAlgoVisualizations() {
    const dpr = window.devicePixelRatio || 1;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const textColor2 = isDark ? '#94a3b8' : '#475569';
    const bgColor = isDark ? '#1e293b' : '#f8fafc';
    const cardBg = isDark ? '#334155' : '#e2e8f0';
    const accentBlue = '#3b82f6';
    const accentGreen = '#22c55e';
    const accentRed = '#ef4444';
    const accentOrange = '#f97316';
    const accentPurple = '#a855f7';
    const accentYellow = '#eab308';

    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr; c.height = h * dpr;
        c.style.width = w + 'px'; c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }

    // ========================================
    // BINARY SEARCH ANIMATION
    // ========================================
    (function() {
        const cv = setupCanvas('binary-search-canvas', 750, 220);
        if (!cv) return;
        const { ctx, w, h } = cv;

        const arr = [2, 5, 8, 12, 16, 23, 38, 42, 56, 72, 85, 91, 95];
        let lo = 0, hi = arr.length - 1, mid = -1;
        let target = 42;
        let steps = [];
        let stepIdx = -1;
        let animTimer = null;
        let found = -1;

        function computeSteps() {
            steps = [];
            let l = 0, r = arr.length - 1;
            found = -1;
            const tgt = parseInt(document.getElementById('bs-target')?.value || '42');
            target = tgt;
            while (l <= r) {
                const m = Math.floor((l + r) / 2);
                steps.push({ lo: l, hi: r, mid: m });
                if (arr[m] === tgt) { found = m; break; }
                else if (arr[m] < tgt) l = m + 1;
                else r = m - 1;
            }
            if (found === -1) steps.push({ lo: l, hi: r, mid: -1, notFound: true });
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            const cellW = 50, cellH = 40, gap = 4;
            const startX = (w - (arr.length * (cellW + gap) - gap)) / 2;
            const y = 60;

            // Judul
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillStyle = textColor;
            ctx.textAlign = 'center';
            ctx.fillText('Binary Search - Target: ' + target, w / 2, 25);

            const step = stepIdx >= 0 && stepIdx < steps.length ? steps[stepIdx] : null;

            for (let i = 0; i < arr.length; i++) {
                const x = startX + i * (cellW + gap);

                // Warna berdasarkan status
                let fillColor = cardBg;
                let txtColor = textColor2;

                if (step) {
                    if (i < step.lo || i > step.hi) {
                        fillColor = isDark ? '#1e293b' : '#f1f5f9';
                        txtColor = isDark ? '#475569' : '#94a3b8';
                    }
                    if (i === step.mid) {
                        if (found === step.mid) {
                            fillColor = accentGreen;
                            txtColor = '#fff';
                        } else {
                            fillColor = accentBlue;
                            txtColor = '#fff';
                        }
                    }
                    if (i === step.lo && i !== step.mid) {
                        ctx.strokeStyle = accentOrange;
                        ctx.lineWidth = 2;
                        ctx.strokeRect(x, y, cellW, cellH);
                    }
                    if (i === step.hi && i !== step.mid) {
                        ctx.strokeStyle = accentPurple;
                        ctx.lineWidth = 2;
                        ctx.strokeRect(x, y, cellW, cellH);
                    }
                }

                // Kotak
                ctx.fillStyle = fillColor;
                ctx.beginPath();
                ctx.roundRect(x, y, cellW, cellH, 6);
                ctx.fill();

                // Angka
                ctx.fillStyle = txtColor;
                ctx.font = '14px "JetBrains Mono", monospace';
                ctx.textAlign = 'center';
                ctx.fillText(arr[i], x + cellW / 2, y + cellH / 2 + 5);

                // Index
                ctx.fillStyle = textColor2;
                ctx.font = '10px Inter, sans-serif';
                ctx.fillText(i, x + cellW / 2, y + cellH + 15);
            }

            // Keterangan lo, mid, hi
            if (step && !step.notFound) {
                const arrowY = y - 10;
                ctx.font = 'bold 11px Inter, sans-serif';

                if (step.lo >= 0 && step.lo < arr.length) {
                    ctx.fillStyle = accentOrange;
                    const lx = startX + step.lo * (cellW + gap) + cellW / 2;
                    ctx.fillText('lo=' + step.lo, lx, arrowY);
                }
                if (step.mid >= 0 && step.mid < arr.length) {
                    ctx.fillStyle = accentBlue;
                    const mx = startX + step.mid * (cellW + gap) + cellW / 2;
                    ctx.fillText('mid=' + step.mid, mx, y + cellH + 30);
                }
                if (step.hi >= 0 && step.hi < arr.length) {
                    ctx.fillStyle = accentPurple;
                    const hx = startX + step.hi * (cellW + gap) + cellW / 2;
                    ctx.fillText('hi=' + step.hi, hx, arrowY);
                }
            }

            // Status text
            ctx.font = '13px Inter, sans-serif';
            ctx.textAlign = 'center';
            if (stepIdx === -1) {
                ctx.fillStyle = textColor2;
                ctx.fillText('Klik "Jalankan" untuk memulai pencarian', w / 2, h - 30);
            } else if (step && step.notFound) {
                ctx.fillStyle = accentRed;
                ctx.fillText('Tidak ditemukan! Target ' + target + ' tidak ada di array.', w / 2, h - 30);
            } else if (step && found === step.mid) {
                ctx.fillStyle = accentGreen;
                ctx.fillText('Ditemukan! arr[' + found + '] = ' + target + ' (dalam ' + (stepIdx + 1) + ' langkah)', w / 2, h - 30);
            } else if (step) {
                const cmp = arr[step.mid] < target ? 'kurang dari' : 'lebih dari';
                ctx.fillStyle = textColor;
                ctx.fillText('Langkah ' + (stepIdx + 1) + ': arr[' + step.mid + ']=' + arr[step.mid] + ' ' + cmp + ' ' + target, w / 2, h - 30);
            }

            // Legend
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'left';
            const ly = h - 8;
            ctx.fillStyle = accentOrange; ctx.fillRect(10, ly - 8, 10, 10);
            ctx.fillStyle = textColor2; ctx.fillText('lo', 24, ly);
            ctx.fillStyle = accentBlue; ctx.fillRect(50, ly - 8, 10, 10);
            ctx.fillStyle = textColor2; ctx.fillText('mid', 64, ly);
            ctx.fillStyle = accentPurple; ctx.fillRect(100, ly - 8, 10, 10);
            ctx.fillStyle = textColor2; ctx.fillText('hi', 114, ly);
            ctx.fillStyle = accentGreen; ctx.fillRect(145, ly - 8, 10, 10);
            ctx.fillStyle = textColor2; ctx.fillText('ditemukan', 159, ly);
        }

        function reset() {
            if (animTimer) { clearInterval(animTimer); animTimer = null; }
            stepIdx = -1;
            found = -1;
            draw();
        }

        function run() {
            reset();
            computeSteps();
            let i = 0;
            animTimer = setInterval(() => {
                stepIdx = i;
                draw();
                if (i >= steps.length - 1) { clearInterval(animTimer); animTimer = null; }
                i++;
            }, 800);
        }

        document.getElementById('bs-run')?.addEventListener('click', run);
        document.getElementById('bs-reset')?.addEventListener('click', reset);
        draw();
    })();

    // ========================================
    // SORTING ANIMATION (Merge Sort)
    // ========================================
    (function() {
        const cv = setupCanvas('sorting-canvas', 750, 300);
        if (!cv) return;
        const { ctx, w, h } = cv;

        let arr = [];
        let states = [];
        let stateIdx = -1;
        let animTimer = null;

        function genArray() {
            arr = [];
            for (let i = 0; i < 20; i++) arr.push(Math.floor(Math.random() * 90) + 10);
            return arr.slice();
        }

        function recordMergeSort(a) {
            states = [];
            const aux = a.slice();
            states.push({ arr: a.slice(), highlights: [], label: 'Array awal' });

            function ms(arr, l, r) {
                if (l >= r) return;
                const m = Math.floor((l + r) / 2);
                ms(arr, l, m);
                ms(arr, m + 1, r);
                merge(arr, l, m, r);
            }

            function merge(arr, l, m, r) {
                const left = arr.slice(l, m + 1);
                const right = arr.slice(m + 1, r + 1);
                let i = 0, j = 0, k = l;
                const hl = [];
                while (i < left.length && j < right.length) {
                    if (left[i] <= right[j]) {
                        arr[k] = left[i]; i++;
                    } else {
                        arr[k] = right[j]; j++;
                    }
                    hl.push(k); k++;
                }
                while (i < left.length) { arr[k] = left[i]; hl.push(k); i++; k++; }
                while (j < right.length) { arr[k] = right[j]; hl.push(k); j++; k++; }
                states.push({
                    arr: arr.slice(),
                    highlights: hl,
                    label: 'Merge [' + l + '..' + m + '] & [' + (m+1) + '..' + r + ']'
                });
            }

            ms(aux, 0, aux.length - 1);
            states.push({ arr: aux.slice(), highlights: [], label: 'Selesai! Array terurut.' });
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillStyle = textColor;
            ctx.textAlign = 'center';
            ctx.fillText('Merge Sort Visualization', w / 2, 22);

            const state = stateIdx >= 0 && stateIdx < states.length ? states[stateIdx] : { arr: arr, highlights: [], label: 'Klik "Jalankan" untuk memulai' };
            const data = state.arr;
            const hl = new Set(state.highlights);

            if (!data || data.length === 0) {
                ctx.fillStyle = textColor2;
                ctx.font = '13px Inter, sans-serif';
                ctx.fillText('Klik "Jalankan Merge Sort" untuk memulai', w / 2, h / 2);
                return;
            }

            const barW = Math.floor((w - 40) / data.length);
            const maxVal = Math.max(...data);
            const startX = (w - data.length * barW) / 2;
            const maxH = h - 80;

            for (let i = 0; i < data.length; i++) {
                const barH = (data[i] / maxVal) * maxH;
                const x = startX + i * barW;
                const y = h - 40 - barH;

                const isHighlighted = hl.has(i);
                const isSorted = stateIdx === states.length - 1;

                if (isSorted) {
                    ctx.fillStyle = accentGreen;
                } else if (isHighlighted) {
                    ctx.fillStyle = accentBlue;
                } else {
                    ctx.fillStyle = cardBg;
                }

                ctx.beginPath();
                ctx.roundRect(x + 1, y, barW - 2, barH, 3);
                ctx.fill();

                if (barW > 20) {
                    ctx.fillStyle = isHighlighted || isSorted ? '#fff' : textColor2;
                    ctx.font = '10px "JetBrains Mono", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(data[i], x + barW / 2, y - 4);
                }
            }

            // Label
            ctx.font = '12px Inter, sans-serif';
            ctx.fillStyle = textColor;
            ctx.textAlign = 'center';
            ctx.fillText(state.label, w / 2, h - 12);

            if (stateIdx >= 0) {
                ctx.textAlign = 'right';
                ctx.fillStyle = textColor2;
                ctx.font = '11px Inter, sans-serif';
                ctx.fillText('Langkah ' + (stateIdx + 1) + '/' + states.length, w - 10, h - 12);
            }
        }

        function reset() {
            if (animTimer) { clearInterval(animTimer); animTimer = null; }
            arr = genArray();
            stateIdx = -1;
            states = [];
            draw();
        }

        function run() {
            if (animTimer) { clearInterval(animTimer); animTimer = null; }
            arr = genArray();
            stateIdx = -1;
            recordMergeSort(arr);
            let i = 0;
            animTimer = setInterval(() => {
                stateIdx = i;
                draw();
                if (i >= states.length - 1) { clearInterval(animTimer); animTimer = null; }
                i++;
            }, 500);
        }

        document.getElementById('sort-run')?.addEventListener('click', run);
        document.getElementById('sort-reset')?.addEventListener('click', reset);
        arr = genArray();
        draw();
    })();

    // ========================================
    // GRAPH BFS/DFS ANIMATION
    // ========================================
    (function() {
        const cv = setupCanvas('graph-canvas', 750, 350);
        if (!cv) return;
        const { ctx, w, h } = cv;

        // Graph layout (node positions)
        const nodes = [
            { id: 0, x: 375, y: 40,  label: '0' },
            { id: 1, x: 180, y: 120, label: '1' },
            { id: 2, x: 570, y: 120, label: '2' },
            { id: 3, x: 90,  y: 220, label: '3' },
            { id: 4, x: 270, y: 220, label: '4' },
            { id: 5, x: 480, y: 220, label: '5' },
            { id: 6, x: 660, y: 220, label: '6' },
            { id: 7, x: 180, y: 310, label: '7' },
            { id: 8, x: 375, y: 310, label: '8' },
        ];
        const edges = [
            [0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,7],[4,8],[5,8]
        ];
        const adj = {};
        nodes.forEach(n => adj[n.id] = []);
        edges.forEach(([u,v]) => { adj[u].push(v); adj[v].push(u); });

        let visitedOrder = [];
        let currentStep = -1;
        let animTimer = null;
        let mode = '';

        function bfsOrder(start) {
            const visited = new Set();
            const queue = [start];
            visited.add(start);
            const order = [];
            while (queue.length > 0) {
                const u = queue.shift();
                order.push(u);
                for (const v of adj[u].sort((a,b) => a-b)) {
                    if (!visited.has(v)) {
                        visited.add(v);
                        queue.push(v);
                    }
                }
            }
            return order;
        }

        function dfsOrder(start) {
            const visited = new Set();
            const order = [];
            function dfs(u) {
                visited.add(u);
                order.push(u);
                for (const v of adj[u].sort((a,b) => a-b)) {
                    if (!visited.has(v)) dfs(v);
                }
            }
            dfs(start);
            return order;
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            const visitedSet = new Set(visitedOrder.slice(0, currentStep + 1));
            const currentNode = currentStep >= 0 ? visitedOrder[currentStep] : -1;

            // Gambar edges
            ctx.lineWidth = 2;
            for (const [u, v] of edges) {
                const nu = nodes[u], nv = nodes[v];
                const bothVisited = visitedSet.has(u) && visitedSet.has(v);
                ctx.strokeStyle = bothVisited ? accentBlue : (isDark ? '#475569' : '#cbd5e1');
                ctx.beginPath();
                ctx.moveTo(nu.x, nu.y);
                ctx.lineTo(nv.x, nv.y);
                ctx.stroke();
            }

            // Gambar nodes
            const r = 22;
            for (const n of nodes) {
                const isVisited = visitedSet.has(n.id);
                const isCurrent = n.id === currentNode;

                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                if (isCurrent) {
                    ctx.fillStyle = accentGreen;
                } else if (isVisited) {
                    ctx.fillStyle = accentBlue;
                } else {
                    ctx.fillStyle = cardBg;
                }
                ctx.fill();
                ctx.strokeStyle = isCurrent ? accentGreen : (isVisited ? accentBlue : (isDark ? '#64748b' : '#94a3b8'));
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.fillStyle = isVisited || isCurrent ? '#fff' : textColor;
                ctx.font = 'bold 14px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(n.label, n.x, n.y);
            }
            ctx.textBaseline = 'alphabetic';

            // Label
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillStyle = textColor;
            ctx.textAlign = 'left';
            const modeLabel = mode === 'bfs' ? 'BFS (Breadth-First Search)' : mode === 'dfs' ? 'DFS (Depth-First Search)' : 'Graph Traversal';
            ctx.fillText(modeLabel, 10, 20);

            if (currentStep >= 0) {
                ctx.font = '12px Inter, sans-serif';
                ctx.fillStyle = textColor2;
                const orderStr = visitedOrder.slice(0, currentStep + 1).join(' -> ');
                ctx.fillText('Urutan: ' + orderStr, 10, h - 10);

                ctx.textAlign = 'right';
                ctx.fillText('Langkah ' + (currentStep + 1) + '/' + visitedOrder.length, w - 10, h - 10);
            } else {
                ctx.font = '12px Inter, sans-serif';
                ctx.fillStyle = textColor2;
                ctx.fillText('Pilih BFS atau DFS untuk memulai traversal dari node 0', 10, h - 10);
            }

            // Legend
            ctx.textAlign = 'right';
            ctx.font = '11px Inter, sans-serif';
            ctx.fillStyle = accentGreen;
            ctx.fillText('Sedang dikunjungi', w - 10, 20);
            ctx.fillStyle = accentBlue;
            ctx.fillText('Sudah dikunjungi', w - 10, 35);
        }

        function reset() {
            if (animTimer) { clearInterval(animTimer); animTimer = null; }
            visitedOrder = [];
            currentStep = -1;
            mode = '';
            draw();
        }

        function runTraversal(type) {
            reset();
            mode = type;
            visitedOrder = type === 'bfs' ? bfsOrder(0) : dfsOrder(0);
            let i = 0;
            animTimer = setInterval(() => {
                currentStep = i;
                draw();
                if (i >= visitedOrder.length - 1) { clearInterval(animTimer); animTimer = null; }
                i++;
            }, 600);
        }

        document.getElementById('graph-bfs')?.addEventListener('click', () => runTraversal('bfs'));
        document.getElementById('graph-dfs')?.addEventListener('click', () => runTraversal('dfs'));
        document.getElementById('graph-reset')?.addEventListener('click', reset);
        draw();
    })();

    // ========================================
    // N-QUEENS ANIMATION
    // ========================================
    (function() {
        const cv = setupCanvas('nqueens-canvas', 450, 450);
        if (!cv) return;
        const { ctx, w, h } = cv;

        let N = 8;
        let board = [];
        let solveSteps = [];
        let stepIdx = -1;
        let animTimer = null;
        let solved = false;

        function recordSolve(n) {
            solveSteps = [];
            board = new Array(n).fill(-1);
            solved = false;

            function isSafe(row, col) {
                for (let i = 0; i < row; i++) {
                    if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row))
                        return false;
                }
                return true;
            }

            function solve(row) {
                if (solved) return;
                if (row === n) {
                    solveSteps.push({ board: board.slice(), type: 'solved' });
                    solved = true;
                    return;
                }
                for (let col = 0; col < n; col++) {
                    if (solved) return;
                    board[row] = col;
                    if (isSafe(row, col)) {
                        solveSteps.push({ board: board.slice(), type: 'place', row, col });
                        solve(row + 1);
                    } else {
                        solveSteps.push({ board: board.slice(), type: 'conflict', row, col });
                    }
                }
                if (!solved) {
                    board[row] = -1;
                    solveSteps.push({ board: board.slice(), type: 'backtrack', row });
                }
            }

            solve(0);
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            const n = N;
            const padding = 30;
            const cellSize = Math.floor((Math.min(w, h) - padding * 2) / n);
            const startX = (w - n * cellSize) / 2;
            const startY = (h - n * cellSize) / 2 + 10;

            // Judul
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.fillStyle = textColor;
            ctx.textAlign = 'center';
            ctx.fillText(n + '-Queens Backtracking', w / 2, 18);

            const step = stepIdx >= 0 && stepIdx < solveSteps.length ? solveSteps[stepIdx] : null;
            const brd = step ? step.board : new Array(n).fill(-1);

            // Gambar papan
            for (let r = 0; r < n; r++) {
                for (let c = 0; c < n; c++) {
                    const x = startX + c * cellSize;
                    const y = startY + r * cellSize;

                    // Warna kotak (checker pattern)
                    const isLight = (r + c) % 2 === 0;
                    ctx.fillStyle = isLight
                        ? (isDark ? '#334155' : '#e2e8f0')
                        : (isDark ? '#1e293b' : '#cbd5e1');

                    // Highlight konflik
                    if (step && step.type === 'conflict' && step.row === r && step.col === c) {
                        ctx.fillStyle = isDark ? '#7f1d1d' : '#fecaca';
                    }
                    // Highlight penempatan baru
                    if (step && step.type === 'place' && step.row === r && step.col === c) {
                        ctx.fillStyle = isDark ? '#14532d' : '#bbf7d0';
                    }

                    ctx.fillRect(x, y, cellSize, cellSize);

                    // Gambar queen
                    if (brd[r] === c && brd[r] !== -1) {
                        ctx.font = (cellSize * 0.6) + 'px serif';
                        ctx.fillStyle = step && step.type === 'conflict' && step.row === r ? accentRed : accentYellow;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('\u265B', x + cellSize / 2, y + cellSize / 2 + 2);
                    }
                }
            }
            ctx.textBaseline = 'alphabetic';

            // Border
            ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8';
            ctx.lineWidth = 2;
            ctx.strokeRect(startX, startY, n * cellSize, n * cellSize);

            // Status
            ctx.font = '12px Inter, sans-serif';
            ctx.textAlign = 'center';
            if (!step) {
                ctx.fillStyle = textColor2;
                ctx.fillText('Klik "Jalankan" untuk memulai backtracking', w / 2, h - 8);
            } else if (step.type === 'solved') {
                ctx.fillStyle = accentGreen;
                ctx.fillText('Solusi ditemukan! (' + (stepIdx + 1) + ' langkah)', w / 2, h - 8);
            } else if (step.type === 'conflict') {
                ctx.fillStyle = accentRed;
                ctx.fillText('Konflik! Baris ' + step.row + ', Kolom ' + step.col + ' tidak aman', w / 2, h - 8);
            } else if (step.type === 'place') {
                ctx.fillStyle = accentGreen;
                ctx.fillText('Tempatkan queen di baris ' + step.row + ', kolom ' + step.col, w / 2, h - 8);
            } else if (step.type === 'backtrack') {
                ctx.fillStyle = accentOrange;
                ctx.fillText('Backtrack dari baris ' + step.row, w / 2, h - 8);
            }
        }

        function reset() {
            if (animTimer) { clearInterval(animTimer); animTimer = null; }
            N = parseInt(document.getElementById('nq-size')?.value || '8');
            if (N < 4) N = 4;
            if (N > 12) N = 12;
            stepIdx = -1;
            solveSteps = [];
            draw();
        }

        function run() {
            reset();
            recordSolve(N);

            // Filter steps untuk animasi lebih cepat: hanya tampilkan 'place', 'backtrack', 'solved' dan beberapa 'conflict'
            const filtered = [];
            let conflictCount = 0;
            for (const s of solveSteps) {
                if (s.type === 'place' || s.type === 'backtrack' || s.type === 'solved') {
                    filtered.push(s);
                    conflictCount = 0;
                } else if (s.type === 'conflict') {
                    conflictCount++;
                    if (conflictCount <= 1) filtered.push(s);
                }
            }
            solveSteps = filtered;

            let i = 0;
            const speed = solveSteps.length > 100 ? 50 : 150;
            animTimer = setInterval(() => {
                stepIdx = i;
                draw();
                if (i >= solveSteps.length - 1) { clearInterval(animTimer); animTimer = null; }
                i++;
            }, speed);
        }

        document.getElementById('nq-run')?.addEventListener('click', run);
        document.getElementById('nq-reset')?.addEventListener('click', reset);
        draw();
    })();
}

// Self-register: override initSectionInteractions to also call our animations
const _origInitSection = initSectionInteractions;
initSectionInteractions = function(name) {
    _origInitSection(name);
    if (name === 'algorithms') initAlgoVisualizations();
};
