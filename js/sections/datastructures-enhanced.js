// ====================== DATA STRUCTURES (ENHANCED) ======================
// Menggantikan section datastructures bawaan dengan coverage komprehensif
// Bahasa: Indonesia | Contoh kode: Go & Java

sections['datastructures'] = () => `
<h1 class="section-title animate-in">Struktur Data</h1>
<p class="section-subtitle animate-in">Array, Linked List, Stack, Queue, Hash Map, BST, Heap, Graph, Trie — implementasi lengkap dengan Go & Java</p>

<!-- ==================== 1. ARRAY / SLICE / ARRAYLIST ==================== -->
<h2 class="animate-in">1. Array / Slice / ArrayList</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Fixed Array vs Dynamic Array</h3>
    <p>Array adalah struktur data paling fundamental yang menyimpan elemen secara <strong>kontiguous (berurutan)</strong> di memori.
       Ada dua jenis utama:</p>
    <div class="card-grid">
        <div class="info-box">
            <strong>Fixed-size Array</strong><br>
            Ukuran ditentukan saat deklarasi dan tidak bisa berubah. Alokasi di stack (biasanya).
            Contoh: <code>[5]int</code> di Go, <code>int[5]</code> di Java.
        </div>
        <div class="info-box">
            <strong>Dynamic Array</strong><br>
            Ukuran bisa bertambah secara otomatis. Saat kapasitas penuh, alokasi baru dengan ukuran 2x (amortized).
            Contoh: <code>[]int</code> (slice) di Go, <code>ArrayList</code> di Java.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Memory Layout Array</h3>
    <p>Array menyimpan elemen di blok memori berurutan. Ini memungkinkan akses O(1) via index karena alamat bisa dihitung langsung: <code>addr = base + index * sizeof(element)</code></p>
    <div class="mem-layout">
        <div class="mem-row">
            <div class="mem-addr">0x1000</div>
            <div class="mem-cell data" style="min-width:60px">arr[0]=10</div>
            <div class="mem-cell data" style="min-width:60px">arr[1]=20</div>
            <div class="mem-cell data" style="min-width:60px">arr[2]=30</div>
            <div class="mem-cell data" style="min-width:60px">arr[3]=40</div>
            <div class="mem-cell data" style="min-width:60px">arr[4]=50</div>
        </div>
    </div>
    <p style="margin-top:8px;font-size:0.85em;color:var(--text-secondary)">Setiap elemen int (4 byte) berurutan di memori. Index ke-i ada di offset <code>base + i*4</code>.</p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Implementasi: Go Slice vs Java ArrayList</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="arr-go">Go (Slice)</button>
        <button class="tab-btn" data-tab="arr-java">Java (ArrayList)</button>
    </div>
    <div class="tab-content active" data-tab-content="arr-go">
        <div class="code-block"><span class="cm">// Go Slice - dynamic array bawaan Go</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Membuat slice dengan make(type, length, capacity)</span>
    s := <span class="fn">make</span>([]<span class="type">int</span>, <span class="num">0</span>, <span class="num">5</span>)
    <span class="fn">fmt.Println</span>(<span class="str">"Len:"</span>, <span class="fn">len</span>(s), <span class="str">"Cap:"</span>, <span class="fn">cap</span>(s)) <span class="cm">// Len:0 Cap:5</span>

    <span class="cm">// Append - menambah elemen (auto grow jika penuh)</span>
    s = <span class="fn">append</span>(s, <span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>)
    <span class="fn">fmt.Println</span>(s) <span class="cm">// [10 20 30]</span>

    <span class="cm">// Slicing - sub-slice (O(1), shared underlying array)</span>
    sub := s[<span class="num">1</span>:<span class="num">3</span>]
    <span class="fn">fmt.Println</span>(sub) <span class="cm">// [20 30]</span>

    <span class="cm">// Copy - deep copy slice</span>
    dst := <span class="fn">make</span>([]<span class="type">int</span>, <span class="fn">len</span>(s))
    <span class="fn">copy</span>(dst, s)

    <span class="cm">// Hapus elemen index ke-1 (O(n))</span>
    s = <span class="fn">append</span>(s[:<span class="num">1</span>], s[<span class="num">2</span>:]...)
    <span class="fn">fmt.Println</span>(s) <span class="cm">// [10 30]</span>

    <span class="cm">// Insert di index ke-1 (O(n))</span>
    s = <span class="fn">append</span>(s[:<span class="num">1</span>], <span class="fn">append</span>([]<span class="type">int</span>{<span class="num">99</span>}, s[<span class="num">1</span>:]...)...)
    <span class="fn">fmt.Println</span>(s) <span class="cm">// [10 99 30]</span>
}</div>
    </div>
    <div class="tab-content" data-tab-content="arr-java">
        <div class="code-block"><span class="cm">// Java ArrayList - dynamic array dari Collections framework</span>
<span class="kw">import</span> java.util.ArrayList;
<span class="kw">import</span> java.util.Collections;

<span class="kw">public class</span> <span class="type">ArrayDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="cm">// Membuat ArrayList dengan initial capacity</span>
        <span class="type">ArrayList</span>&lt;<span class="type">Integer</span>&gt; list = <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;(<span class="num">5</span>);

        <span class="cm">// Tambah elemen - O(1) amortized</span>
        list.<span class="fn">add</span>(<span class="num">10</span>);
        list.<span class="fn">add</span>(<span class="num">20</span>);
        list.<span class="fn">add</span>(<span class="num">30</span>);
        System.out.<span class="fn">println</span>(list); <span class="cm">// [10, 20, 30]</span>

        <span class="cm">// Akses via index - O(1)</span>
        <span class="type">int</span> val = list.<span class="fn">get</span>(<span class="num">1</span>); <span class="cm">// 20</span>

        <span class="cm">// Insert di index tertentu - O(n)</span>
        list.<span class="fn">add</span>(<span class="num">1</span>, <span class="num">99</span>);
        System.out.<span class="fn">println</span>(list); <span class="cm">// [10, 99, 20, 30]</span>

        <span class="cm">// Hapus by index - O(n)</span>
        list.<span class="fn">remove</span>(<span class="num">2</span>);
        System.out.<span class="fn">println</span>(list); <span class="cm">// [10, 99, 30]</span>

        <span class="cm">// Sorting</span>
        <span class="type">Collections</span>.<span class="fn">sort</span>(list);
        System.out.<span class="fn">println</span>(list); <span class="cm">// [10, 30, 99]</span>

        <span class="cm">// SubList (view, bukan copy)</span>
        <span class="type">List</span>&lt;<span class="type">Integer</span>&gt; sub = list.<span class="fn">subList</span>(<span class="num">0</span>, <span class="num">2</span>);
        System.out.<span class="fn">println</span>(sub); <span class="cm">// [10, 30]</span>
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Tabel Kompleksitas Array/Slice/ArrayList</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Operasi</th><th>Array (Fixed)</th><th>Slice/ArrayList</th><th>Keterangan</th></tr>
            <tr><td>Akses by Index</td><td><span class="badge-green">O(1)</span></td><td><span class="badge-green">O(1)</span></td><td>Langsung via pointer arithmetic</td></tr>
            <tr><td>Search (unsorted)</td><td><span class="badge-orange">O(n)</span></td><td><span class="badge-orange">O(n)</span></td><td>Linear scan</td></tr>
            <tr><td>Search (sorted)</td><td><span class="badge-blue">O(log n)</span></td><td><span class="badge-blue">O(log n)</span></td><td>Binary search</td></tr>
            <tr><td>Insert di akhir</td><td><span class="badge-red">N/A</span></td><td><span class="badge-green">O(1)*</span></td><td>*Amortized, bisa O(n) saat grow</td></tr>
            <tr><td>Insert di tengah</td><td><span class="badge-red">N/A</span></td><td><span class="badge-orange">O(n)</span></td><td>Geser elemen ke kanan</td></tr>
            <tr><td>Delete di akhir</td><td><span class="badge-red">N/A</span></td><td><span class="badge-green">O(1)</span></td><td>Kurangi length</td></tr>
            <tr><td>Delete di tengah</td><td><span class="badge-red">N/A</span></td><td><span class="badge-orange">O(n)</span></td><td>Geser elemen ke kiri</td></tr>
        </table>
    </div>
</div>

<!-- ==================== 2. LINKED LIST ==================== -->
<h2 class="animate-in">2. Linked List</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Singly vs Doubly Linked List</h3>
    <p>Linked List menyimpan elemen di node terpisah yang saling terhubung via pointer. Tidak memerlukan memori kontiguous seperti array.</p>

    <div class="card-grid">
        <div class="info-box">
            <strong>Singly Linked List</strong><br>
            Setiap node punya <code>data</code> dan pointer <code>next</code>.
            Traversal hanya satu arah (maju).
            <div class="flow-diagram" style="margin-top:8px">
                <div class="flow-node" style="border-radius:8px">HEAD</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:8px">[10|&rarr;]</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:8px">[20|&rarr;]</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:8px;border-color:var(--red)">NULL</div>
            </div>
        </div>
        <div class="info-box">
            <strong>Doubly Linked List</strong><br>
            Setiap node punya <code>prev</code>, <code>data</code>, dan <code>next</code>.
            Traversal dua arah (maju & mundur).
            <div class="flow-diagram" style="margin-top:8px">
                <div class="flow-node" style="border-radius:8px;border-color:var(--red)">NULL</div>
                <div class="flow-arrow">&larr;&rarr;</div>
                <div class="flow-node" style="border-radius:8px">[&larr;|10|&rarr;]</div>
                <div class="flow-arrow">&larr;&rarr;</div>
                <div class="flow-node" style="border-radius:8px">[&larr;|20|&rarr;]</div>
                <div class="flow-arrow">&larr;&rarr;</div>
                <div class="flow-node" style="border-radius:8px;border-color:var(--red)">NULL</div>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Linked List</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="ll-go">Go</button>
        <button class="tab-btn" data-tab="ll-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="ll-go">
        <div class="code-block"><span class="cm">// Singly Linked List di Go (custom struct)</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="type">Node</span> <span class="kw">struct</span> {
    Data <span class="type">int</span>
    Next *<span class="type">Node</span>
}

<span class="kw">type</span> <span class="type">LinkedList</span> <span class="kw">struct</span> {
    Head *<span class="type">Node</span>
    Size <span class="type">int</span>
}

<span class="cm">// InsertHead - O(1)</span>
<span class="kw">func</span> (ll *<span class="type">LinkedList</span>) <span class="fn">InsertHead</span>(data <span class="type">int</span>) {
    node := &<span class="type">Node</span>{Data: data, Next: ll.Head}
    ll.Head = node
    ll.Size++
}

<span class="cm">// InsertTail - O(n)</span>
<span class="kw">func</span> (ll *<span class="type">LinkedList</span>) <span class="fn">InsertTail</span>(data <span class="type">int</span>) {
    node := &<span class="type">Node</span>{Data: data}
    <span class="kw">if</span> ll.Head == <span class="num">nil</span> {
        ll.Head = node
    } <span class="kw">else</span> {
        curr := ll.Head
        <span class="kw">for</span> curr.Next != <span class="num">nil</span> {
            curr = curr.Next
        }
        curr.Next = node
    }
    ll.Size++
}

<span class="cm">// DeleteHead - O(1)</span>
<span class="kw">func</span> (ll *<span class="type">LinkedList</span>) <span class="fn">DeleteHead</span>() <span class="type">int</span> {
    <span class="kw">if</span> ll.Head == <span class="num">nil</span> {
        <span class="kw">return</span> -<span class="num">1</span>
    }
    data := ll.Head.Data
    ll.Head = ll.Head.Next
    ll.Size--
    <span class="kw">return</span> data
}

<span class="cm">// Search - O(n)</span>
<span class="kw">func</span> (ll *<span class="type">LinkedList</span>) <span class="fn">Search</span>(target <span class="type">int</span>) <span class="type">bool</span> {
    curr := ll.Head
    <span class="kw">for</span> curr != <span class="num">nil</span> {
        <span class="kw">if</span> curr.Data == target {
            <span class="kw">return</span> <span class="num">true</span>
        }
        curr = curr.Next
    }
    <span class="kw">return</span> <span class="num">false</span>
}

<span class="cm">// Print linked list</span>
<span class="kw">func</span> (ll *<span class="type">LinkedList</span>) <span class="fn">Print</span>() {
    curr := ll.Head
    <span class="kw">for</span> curr != <span class="num">nil</span> {
        <span class="fn">fmt.Printf</span>(<span class="str">"%d -> "</span>, curr.Data)
        curr = curr.Next
    }
    <span class="fn">fmt.Println</span>(<span class="str">"nil"</span>)
}</div>
    </div>
    <div class="tab-content" data-tab-content="ll-java">
        <div class="code-block"><span class="cm">// Java LinkedList (built-in doubly linked list)</span>
<span class="kw">import</span> java.util.LinkedList;

<span class="kw">public class</span> <span class="type">LinkedListDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="type">LinkedList</span>&lt;<span class="type">Integer</span>&gt; ll = <span class="kw">new</span> <span class="type">LinkedList</span>&lt;&gt;();

        <span class="cm">// Insert di awal - O(1)</span>
        ll.<span class="fn">addFirst</span>(<span class="num">10</span>);
        ll.<span class="fn">addFirst</span>(<span class="num">5</span>);

        <span class="cm">// Insert di akhir - O(1) (doubly linked, ada tail ref)</span>
        ll.<span class="fn">addLast</span>(<span class="num">20</span>);
        ll.<span class="fn">addLast</span>(<span class="num">30</span>);
        System.out.<span class="fn">println</span>(ll); <span class="cm">// [5, 10, 20, 30]</span>

        <span class="cm">// Hapus dari awal dan akhir - O(1)</span>
        ll.<span class="fn">removeFirst</span>();
        ll.<span class="fn">removeLast</span>();
        System.out.<span class="fn">println</span>(ll); <span class="cm">// [10, 20]</span>

        <span class="cm">// Akses - O(n), harus traverse</span>
        <span class="type">int</span> val = ll.<span class="fn">get</span>(<span class="num">1</span>); <span class="cm">// 20</span>

        <span class="cm">// Search - O(n)</span>
        <span class="type">boolean</span> found = ll.<span class="fn">contains</span>(<span class="num">20</span>); <span class="cm">// true</span>

        <span class="cm">// Bisa dipakai sebagai Stack & Queue</span>
        ll.<span class="fn">push</span>(<span class="num">99</span>);  <span class="cm">// stack push (addFirst)</span>
        ll.<span class="fn">pop</span>();      <span class="cm">// stack pop (removeFirst)</span>
        ll.<span class="fn">offer</span>(<span class="num">88</span>); <span class="cm">// queue enqueue (addLast)</span>
        ll.<span class="fn">poll</span>();     <span class="cm">// queue dequeue (removeFirst)</span>
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent2)">Animasi: Linked List Insert & Delete</h3>
    <p>Klik tombol untuk melihat bagaimana pointer berubah saat insert dan delete pada linked list.</p>
    <div class="anim-container">
        <canvas id="ll-canvas" width="700" height="200" style="width:100%;max-width:700px;background:var(--card-bg);border-radius:8px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="ll-insert">Insert Node</button>
            <button class="anim-btn" id="ll-delete">Delete Head</button>
            <button class="anim-btn" id="ll-reset">Reset</button>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Kapan Pakai LinkedList vs Array?</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Kriteria</th><th>Array/ArrayList</th><th>LinkedList</th></tr>
            <tr><td>Akses by index</td><td><span class="badge-green">O(1) - Cepat</span></td><td><span class="badge-red">O(n) - Lambat</span></td></tr>
            <tr><td>Insert/Delete di awal</td><td><span class="badge-red">O(n) - Geser semua</span></td><td><span class="badge-green">O(1) - Ubah pointer</span></td></tr>
            <tr><td>Insert/Delete di akhir</td><td><span class="badge-green">O(1) amortized</span></td><td><span class="badge-green">O(1) dgn tail</span></td></tr>
            <tr><td>Memory usage</td><td><span class="badge-green">Hemat (kontiguous)</span></td><td><span class="badge-red">Boros (pointer per node)</span></td></tr>
            <tr><td>Cache performance</td><td><span class="badge-green">Bagus (locality)</span></td><td><span class="badge-red">Buruk (scattered)</span></td></tr>
            <tr><td>Insert di tengah</td><td><span class="badge-orange">O(n)</span></td><td><span class="badge-green">O(1) jika punya ref</span></td></tr>
        </table>
    </div>
    <div class="warn-box" style="margin-top:12px">
        <strong>Rekomendasi:</strong> Dalam praktik, ArrayList/Slice hampir selalu lebih cepat karena cache locality.
        Gunakan LinkedList hanya jika sering insert/delete di awal atau memerlukan Deque operations.
    </div>
</div>

<!-- ==================== 3. STACK ==================== -->
<h2 class="animate-in">3. Stack</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Prinsip LIFO (Last In, First Out)</h3>
    <p>Stack bekerja seperti <strong>tumpukan piring</strong> di restoran: piring terakhir yang diletakkan adalah yang pertama diambil.
       Hanya ada dua operasi utama: <code>push</code> (taruh di atas) dan <code>pop</code> (ambil dari atas).</p>

    <div class="flow-diagram">
        <div class="flow-node" style="border-radius:8px;background:var(--accent);color:#fff">TOP &rarr; 30</div>
        <div class="flow-arrow">&darr;</div>
        <div class="flow-node" style="border-radius:8px">20</div>
        <div class="flow-arrow">&darr;</div>
        <div class="flow-node" style="border-radius:8px">10</div>
        <div class="flow-arrow">&darr;</div>
        <div class="flow-node" style="border-radius:8px;border-color:var(--red)">BOTTOM</div>
    </div>

    <div class="step-list" style="margin-top:16px">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>push(10)</strong> &rarr; Stack: [10]</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>push(20)</strong> &rarr; Stack: [10, 20]</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>push(30)</strong> &rarr; Stack: [10, 20, 30] (top=30)</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>pop()</strong> &rarr; return 30, Stack: [10, 20]</div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-text"><strong>peek()</strong> &rarr; return 20 (tidak dihapus)</div></div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Stack</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="stack-go">Go</button>
        <button class="tab-btn" data-tab="stack-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="stack-go">
        <div class="code-block"><span class="cm">// Stack menggunakan slice di Go</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="type">Stack</span> <span class="kw">struct</span> {
    items []<span class="type">int</span>
}

<span class="kw">func</span> (s *<span class="type">Stack</span>) <span class="fn">Push</span>(val <span class="type">int</span>) {
    s.items = <span class="fn">append</span>(s.items, val)
}

<span class="kw">func</span> (s *<span class="type">Stack</span>) <span class="fn">Pop</span>() (<span class="type">int</span>, <span class="type">bool</span>) {
    <span class="kw">if</span> <span class="fn">len</span>(s.items) == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">0</span>, <span class="num">false</span>
    }
    top := s.items[<span class="fn">len</span>(s.items)-<span class="num">1</span>]
    s.items = s.items[:<span class="fn">len</span>(s.items)-<span class="num">1</span>]
    <span class="kw">return</span> top, <span class="num">true</span>
}

<span class="kw">func</span> (s *<span class="type">Stack</span>) <span class="fn">Peek</span>() (<span class="type">int</span>, <span class="type">bool</span>) {
    <span class="kw">if</span> <span class="fn">len</span>(s.items) == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">0</span>, <span class="num">false</span>
    }
    <span class="kw">return</span> s.items[<span class="fn">len</span>(s.items)-<span class="num">1</span>], <span class="num">true</span>
}

<span class="kw">func</span> (s *<span class="type">Stack</span>) <span class="fn">IsEmpty</span>() <span class="type">bool</span> {
    <span class="kw">return</span> <span class="fn">len</span>(s.items) == <span class="num">0</span>
}

<span class="cm">// Contoh: Bracket matching</span>
<span class="kw">func</span> <span class="fn">isValid</span>(str <span class="type">string</span>) <span class="type">bool</span> {
    stack := &<span class="type">Stack</span>{}
    pairs := <span class="kw">map</span>[<span class="type">rune</span>]<span class="type">rune</span>{<span class="str">')'</span>: <span class="str">'('</span>, <span class="str">'}'</span>: <span class="str">'{'</span>, <span class="str">']'</span>: <span class="str">'['</span>}
    <span class="kw">for</span> _, ch := <span class="kw">range</span> str {
        <span class="kw">if</span> ch == <span class="str">'('</span> || ch == <span class="str">'{'</span> || ch == <span class="str">'['</span> {
            stack.<span class="fn">Push</span>(<span class="fn">int</span>(ch))
        } <span class="kw">else if</span> open, ok := pairs[ch]; ok {
            top, exists := stack.<span class="fn">Pop</span>()
            <span class="kw">if</span> !exists || <span class="fn">rune</span>(top) != open {
                <span class="kw">return</span> <span class="num">false</span>
            }
        }
    }
    <span class="kw">return</span> stack.<span class="fn">IsEmpty</span>()
}</div>
    </div>
    <div class="tab-content" data-tab-content="stack-java">
        <div class="code-block"><span class="cm">// Java Stack menggunakan Deque (direkomendasikan)</span>
<span class="kw">import</span> java.util.ArrayDeque;
<span class="kw">import</span> java.util.Deque;

<span class="kw">public class</span> <span class="type">StackDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="cm">// ArrayDeque lebih cepat dari Stack class (legacy)</span>
        <span class="type">Deque</span>&lt;<span class="type">Integer</span>&gt; stack = <span class="kw">new</span> <span class="type">ArrayDeque</span>&lt;&gt;();

        stack.<span class="fn">push</span>(<span class="num">10</span>);
        stack.<span class="fn">push</span>(<span class="num">20</span>);
        stack.<span class="fn">push</span>(<span class="num">30</span>);

        System.out.<span class="fn">println</span>(stack.<span class="fn">peek</span>()); <span class="cm">// 30 (lihat top)</span>
        System.out.<span class="fn">println</span>(stack.<span class="fn">pop</span>());  <span class="cm">// 30 (hapus top)</span>
        System.out.<span class="fn">println</span>(stack.<span class="fn">size</span>()); <span class="cm">// 2</span>
    }

    <span class="cm">// Bracket matching</span>
    <span class="kw">public static boolean</span> <span class="fn">isValid</span>(<span class="type">String</span> s) {
        <span class="type">Deque</span>&lt;<span class="type">Character</span>&gt; stack = <span class="kw">new</span> <span class="type">ArrayDeque</span>&lt;&gt;();
        <span class="kw">for</span> (<span class="type">char</span> c : s.<span class="fn">toCharArray</span>()) {
            <span class="kw">if</span> (c == <span class="str">'('</span>) stack.<span class="fn">push</span>(<span class="str">')'</span>);
            <span class="kw">else if</span> (c == <span class="str">'{'</span>) stack.<span class="fn">push</span>(<span class="str">'}'</span>);
            <span class="kw">else if</span> (c == <span class="str">'['</span>) stack.<span class="fn">push</span>(<span class="str">']'</span>);
            <span class="kw">else if</span> (stack.<span class="fn">isEmpty</span>() || stack.<span class="fn">pop</span>() != c)
                <span class="kw">return</span> <span class="num">false</span>;
        }
        <span class="kw">return</span> stack.<span class="fn">isEmpty</span>();
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Aplikasi Stack di Dunia Nyata</h3>
    <div class="card-grid-3">
        <div class="info-box">
            <strong>Undo/Redo</strong><br>
            Text editor menyimpan setiap aksi di stack. Undo = pop dari undo-stack dan push ke redo-stack.
        </div>
        <div class="info-box">
            <strong>Bracket Matching</strong><br>
            Compiler mengecek pasangan kurung <code>({[]})</code> menggunakan stack. Setiap buka-kurung di-push, tutup-kurung harus match dengan pop.
        </div>
        <div class="info-box">
            <strong>Function Call Stack</strong><br>
            CPU menyimpan return address dan local variable di call stack. Rekursi terlalu dalam = Stack Overflow.
        </div>
    </div>
</div>

<!-- ==================== 4. QUEUE ==================== -->
<h2 class="animate-in">4. Queue</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Prinsip FIFO (First In, First Out)</h3>
    <p>Queue bekerja seperti <strong>antrian di bank</strong>: orang yang datang pertama dilayani pertama.
       Operasi utama: <code>enqueue</code> (masuk antrian) dan <code>dequeue</code> (keluar antrian).</p>

    <div class="flow-diagram">
        <div class="flow-node" style="border-radius:8px;border-color:var(--red)">DEQUEUE &larr;</div>
        <div class="flow-arrow">&larr;</div>
        <div class="flow-node" style="border-radius:8px">10</div>
        <div class="flow-arrow">&larr;</div>
        <div class="flow-node" style="border-radius:8px">20</div>
        <div class="flow-arrow">&larr;</div>
        <div class="flow-node" style="border-radius:8px">30</div>
        <div class="flow-arrow">&larr;</div>
        <div class="flow-node" style="border-radius:8px;border-color:var(--green)">&rarr; ENQUEUE</div>
    </div>

    <div class="step-list" style="margin-top:16px">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>enqueue(10)</strong> &rarr; Queue: [10]</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>enqueue(20)</strong> &rarr; Queue: [10, 20]</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>enqueue(30)</strong> &rarr; Queue: [10, 20, 30]</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>dequeue()</strong> &rarr; return 10, Queue: [20, 30]</div></div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Queue</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="q-go">Go</button>
        <button class="tab-btn" data-tab="q-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="q-go">
        <div class="code-block"><span class="cm">// Queue di Go - slice-based & channel-based</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="cm">// === Slice-based Queue ===</span>
<span class="kw">type</span> <span class="type">Queue</span> <span class="kw">struct</span> {
    items []<span class="type">int</span>
}

<span class="kw">func</span> (q *<span class="type">Queue</span>) <span class="fn">Enqueue</span>(val <span class="type">int</span>) {
    q.items = <span class="fn">append</span>(q.items, val)
}

<span class="kw">func</span> (q *<span class="type">Queue</span>) <span class="fn">Dequeue</span>() (<span class="type">int</span>, <span class="type">bool</span>) {
    <span class="kw">if</span> <span class="fn">len</span>(q.items) == <span class="num">0</span> {
        <span class="kw">return</span> <span class="num">0</span>, <span class="num">false</span>
    }
    front := q.items[<span class="num">0</span>]
    q.items = q.items[<span class="num">1</span>:]
    <span class="kw">return</span> front, <span class="num">true</span>
}

<span class="cm">// === Channel-based Queue (Go idiom) ===</span>
<span class="kw">func</span> <span class="fn">channelQueue</span>() {
    ch := <span class="fn">make</span>(<span class="kw">chan</span> <span class="type">int</span>, <span class="num">10</span>) <span class="cm">// buffered channel = queue</span>
    ch &lt;- <span class="num">10</span>  <span class="cm">// enqueue</span>
    ch &lt;- <span class="num">20</span>  <span class="cm">// enqueue</span>
    val := &lt;-ch <span class="cm">// dequeue: 10 (FIFO)</span>
    <span class="fn">fmt.Println</span>(val)
}</div>
    </div>
    <div class="tab-content" data-tab-content="q-java">
        <div class="code-block"><span class="cm">// Java Queue - interface dengan berbagai implementasi</span>
<span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="type">QueueDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="cm">// LinkedList sebagai Queue</span>
        <span class="type">Queue</span>&lt;<span class="type">Integer</span>&gt; queue = <span class="kw">new</span> <span class="type">LinkedList</span>&lt;&gt;();
        queue.<span class="fn">offer</span>(<span class="num">10</span>); <span class="cm">// enqueue</span>
        queue.<span class="fn">offer</span>(<span class="num">20</span>);
        queue.<span class="fn">offer</span>(<span class="num">30</span>);
        System.out.<span class="fn">println</span>(queue.<span class="fn">poll</span>()); <span class="cm">// 10 (dequeue)</span>
        System.out.<span class="fn">println</span>(queue.<span class="fn">peek</span>()); <span class="cm">// 20 (lihat front)</span>

        <span class="cm">// PriorityQueue - elemen keluar berdasarkan prioritas</span>
        <span class="type">PriorityQueue</span>&lt;<span class="type">Integer</span>&gt; pq = <span class="kw">new</span> <span class="type">PriorityQueue</span>&lt;&gt;();
        pq.<span class="fn">offer</span>(<span class="num">30</span>);
        pq.<span class="fn">offer</span>(<span class="num">10</span>);
        pq.<span class="fn">offer</span>(<span class="num">20</span>);
        System.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>()); <span class="cm">// 10 (min-heap)</span>
        System.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>()); <span class="cm">// 20</span>

        <span class="cm">// ArrayDeque - lebih cepat dari LinkedList untuk Queue</span>
        <span class="type">Deque</span>&lt;<span class="type">String</span>&gt; deque = <span class="kw">new</span> <span class="type">ArrayDeque</span>&lt;&gt;();
        deque.<span class="fn">offerFirst</span>(<span class="str">"A"</span>); <span class="cm">// depan</span>
        deque.<span class="fn">offerLast</span>(<span class="str">"B"</span>);  <span class="cm">// belakang</span>
        deque.<span class="fn">pollFirst</span>();       <span class="cm">// A</span>
        deque.<span class="fn">pollLast</span>();        <span class="cm">// B</span>
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent2)">Circular Queue</h3>
    <p>Circular Queue menggunakan array fixed-size dengan dua pointer (<code>front</code> dan <code>rear</code>) yang "melingkar" menggunakan modulo.
       Lebih efisien daripada slice-based queue karena tidak ada alokasi ulang.</p>
    <div class="code-block"><span class="cm">// Circular Queue di Go</span>
<span class="kw">type</span> <span class="type">CircularQueue</span> <span class="kw">struct</span> {
    data  []<span class="type">int</span>
    front <span class="type">int</span>
    rear  <span class="type">int</span>
    size  <span class="type">int</span>
    cap   <span class="type">int</span>
}

<span class="kw">func</span> <span class="fn">NewCircularQueue</span>(capacity <span class="type">int</span>) *<span class="type">CircularQueue</span> {
    <span class="kw">return</span> &<span class="type">CircularQueue</span>{data: <span class="fn">make</span>([]<span class="type">int</span>, capacity), cap: capacity}
}

<span class="kw">func</span> (q *<span class="type">CircularQueue</span>) <span class="fn">Enqueue</span>(val <span class="type">int</span>) <span class="type">bool</span> {
    <span class="kw">if</span> q.size == q.cap { <span class="kw">return</span> <span class="num">false</span> } <span class="cm">// penuh</span>
    q.data[q.rear] = val
    q.rear = (q.rear + <span class="num">1</span>) % q.cap  <span class="cm">// wrap around</span>
    q.size++
    <span class="kw">return</span> <span class="num">true</span>
}

<span class="kw">func</span> (q *<span class="type">CircularQueue</span>) <span class="fn">Dequeue</span>() (<span class="type">int</span>, <span class="type">bool</span>) {
    <span class="kw">if</span> q.size == <span class="num">0</span> { <span class="kw">return</span> <span class="num">0</span>, <span class="num">false</span> } <span class="cm">// kosong</span>
    val := q.data[q.front]
    q.front = (q.front + <span class="num">1</span>) % q.cap <span class="cm">// wrap around</span>
    q.size--
    <span class="kw">return</span> val, <span class="num">true</span>
}</div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Aplikasi Queue</h3>
    <div class="card-grid">
        <div class="info-box">
            <strong>BFS (Breadth-First Search)</strong><br>
            Traversal graph level-by-level menggunakan queue untuk menyimpan node yang akan dikunjungi.
        </div>
        <div class="info-box">
            <strong>Task Scheduling</strong><br>
            OS menggunakan queue untuk menjadwalkan proses (Round Robin). Message queue (RabbitMQ, Kafka) untuk distributed systems.
        </div>
    </div>
</div>

<!-- ==================== 5. HASH MAP / HASH TABLE ==================== -->
<h2 class="animate-in">5. Hash Map / Hash Table</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Cara Kerja Hashing</h3>
    <p>Hash Map menyimpan pasangan <strong>key-value</strong> menggunakan fungsi hash yang mengkonversi key menjadi index array.
       Ini memungkinkan operasi insert, search, dan delete dalam waktu <span class="badge-green">O(1)</span> rata-rata.</p>

    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Hash Function:</strong> key &rarr; hash(key) &rarr; index. Contoh: hash("nama") = 3</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Store:</strong> Simpan value di array[index]. array[3] = "Budi"</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Retrieve:</strong> hash("nama") = 3, return array[3] = "Budi"</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Collision:</strong> Jika hash("kota") juga = 3, perlu collision handling</div></div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent2)">Collision Handling</h3>
    <div class="card-grid">
        <div class="info-box">
            <strong>Chaining (Separate Chaining)</strong><br>
            Setiap slot array berisi linked list. Jika collision, elemen ditambahkan ke linked list di slot tersebut.
            Digunakan oleh Java HashMap.<br>
            <div class="flow-diagram" style="margin-top:8px">
                <div class="flow-node" style="border-radius:4px">Slot[3]</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:4px">(nama,Budi)</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:4px">(kota,Bandung)</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:4px;border-color:var(--red)">nil</div>
            </div>
        </div>
        <div class="info-box">
            <strong>Open Addressing</strong><br>
            Jika slot penuh, cari slot kosong berikutnya (linear probing, quadratic probing, atau double hashing).
            Digunakan oleh Go map dan Python dict.<br>
            <div class="flow-diagram" style="margin-top:8px">
                <div class="flow-node" style="border-radius:4px">Slot[3] PENUH</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:4px">Slot[4] PENUH</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-node" style="border-radius:4px;border-color:var(--green)">Slot[5] KOSONG &check;</div>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Hash Map</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="hash-go">Go</button>
        <button class="tab-btn" data-tab="hash-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="hash-go">
        <div class="code-block"><span class="cm">// Go map - hash table bawaan bahasa</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">func</span> <span class="fn">main</span>() {
    <span class="cm">// Membuat map</span>
    m := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">string</span>]<span class="type">int</span>)

    <span class="cm">// Insert - O(1) average</span>
    m[<span class="str">"apel"</span>] = <span class="num">5</span>
    m[<span class="str">"jeruk"</span>] = <span class="num">3</span>
    m[<span class="str">"mangga"</span>] = <span class="num">7</span>

    <span class="cm">// Lookup - O(1) average</span>
    val, ok := m[<span class="str">"apel"</span>]
    <span class="kw">if</span> ok {
        <span class="fn">fmt.Println</span>(<span class="str">"apel:"</span>, val) <span class="cm">// 5</span>
    }

    <span class="cm">// Delete - O(1) average</span>
    <span class="fn">delete</span>(m, <span class="str">"jeruk"</span>)

    <span class="cm">// Iterasi (urutan tidak dijamin!)</span>
    <span class="kw">for</span> key, value := <span class="kw">range</span> m {
        <span class="fn">fmt.Printf</span>(<span class="str">"%s: %d\n"</span>, key, value)
    }

    <span class="cm">// Map literal</span>
    scores := <span class="kw">map</span>[<span class="type">string</span>]<span class="type">int</span>{
        <span class="str">"Alice"</span>: <span class="num">95</span>,
        <span class="str">"Bob"</span>:   <span class="num">87</span>,
        <span class="str">"Carol"</span>: <span class="num">92</span>,
    }

    <span class="cm">// Counting pattern (word frequency)</span>
    words := []<span class="type">string</span>{<span class="str">"go"</span>, <span class="str">"java"</span>, <span class="str">"go"</span>, <span class="str">"go"</span>, <span class="str">"java"</span>}
    freq := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">string</span>]<span class="type">int</span>)
    <span class="kw">for</span> _, w := <span class="kw">range</span> words {
        freq[w]++
    }
    <span class="fn">fmt.Println</span>(freq) <span class="cm">// map[go:3 java:2]</span>
}</div>
    </div>
    <div class="tab-content" data-tab-content="hash-java">
        <div class="code-block"><span class="cm">// Java HashMap & ConcurrentHashMap</span>
<span class="kw">import</span> java.util.*;
<span class="kw">import</span> java.util.concurrent.ConcurrentHashMap;

<span class="kw">public class</span> <span class="type">HashMapDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="cm">// HashMap - O(1) avg, NOT thread-safe</span>
        <span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">Integer</span>&gt; map = <span class="kw">new</span> <span class="type">HashMap</span>&lt;&gt;();
        map.<span class="fn">put</span>(<span class="str">"apel"</span>, <span class="num">5</span>);
        map.<span class="fn">put</span>(<span class="str">"jeruk"</span>, <span class="num">3</span>);
        map.<span class="fn">put</span>(<span class="str">"mangga"</span>, <span class="num">7</span>);

        <span class="cm">// Lookup</span>
        <span class="type">int</span> val = map.<span class="fn">getOrDefault</span>(<span class="str">"apel"</span>, <span class="num">0</span>); <span class="cm">// 5</span>

        <span class="cm">// Delete</span>
        map.<span class="fn">remove</span>(<span class="str">"jeruk"</span>);

        <span class="cm">// Iterasi</span>
        <span class="kw">for</span> (<span class="type">Map.Entry</span>&lt;<span class="type">String</span>, <span class="type">Integer</span>&gt; e : map.<span class="fn">entrySet</span>()) {
            System.out.<span class="fn">println</span>(e.<span class="fn">getKey</span>() + <span class="str">": "</span> + e.<span class="fn">getValue</span>());
        }

        <span class="cm">// Word frequency (Java 8+)</span>
        <span class="type">String</span>[] words = {<span class="str">"go"</span>, <span class="str">"java"</span>, <span class="str">"go"</span>, <span class="str">"go"</span>, <span class="str">"java"</span>};
        <span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">Integer</span>&gt; freq = <span class="kw">new</span> <span class="type">HashMap</span>&lt;&gt;();
        <span class="kw">for</span> (<span class="type">String</span> w : words) {
            freq.<span class="fn">merge</span>(w, <span class="num">1</span>, <span class="type">Integer</span>::sum);
        }

        <span class="cm">// ConcurrentHashMap - thread-safe</span>
        <span class="type">ConcurrentHashMap</span>&lt;<span class="type">String</span>, <span class="type">Integer</span>&gt; cmap = <span class="kw">new</span> <span class="type">ConcurrentHashMap</span>&lt;&gt;();
        cmap.<span class="fn">put</span>(<span class="str">"key"</span>, <span class="num">1</span>);
        cmap.<span class="fn">computeIfAbsent</span>(<span class="str">"key2"</span>, k -> <span class="num">42</span>);
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Animasi: Hash Table Visualization</h3>
    <p>Masukkan angka untuk melihat bagaimana hash function memetakan key ke slot dan bagaimana collision ditangani.</p>
    <div class="anim-container">
        <canvas id="hash-canvas" width="700" height="300" style="width:100%;max-width:700px;background:var(--card-bg);border-radius:8px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <label class="anim-label">Key:</label>
            <input class="anim-input" id="hash-input" type="number" value="42" min="0" max="999" style="width:80px">
            <button class="anim-btn" id="hash-insert">Insert</button>
            <button class="anim-btn" id="hash-reset">Reset</button>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Kompleksitas Hash Map</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Operasi</th><th>Average</th><th>Worst Case</th><th>Keterangan</th></tr>
            <tr><td>Insert</td><td><span class="badge-green">O(1)</span></td><td><span class="badge-red">O(n)</span></td><td>Worst case saat semua key collision</td></tr>
            <tr><td>Search</td><td><span class="badge-green">O(1)</span></td><td><span class="badge-red">O(n)</span></td><td>Degradasi ke linked list traversal</td></tr>
            <tr><td>Delete</td><td><span class="badge-green">O(1)</span></td><td><span class="badge-red">O(n)</span></td><td>Sama seperti search</td></tr>
            <tr><td>Space</td><td colspan="2"><span class="badge-blue">O(n)</span></td><td>Plus overhead bucket array</td></tr>
        </table>
    </div>
    <div class="success-box" style="margin-top:8px">
        Java HashMap: saat chain terlalu panjang (>8), otomatis convert ke Red-Black Tree &rarr; worst case menjadi O(log n).
    </div>
</div>

<!-- ==================== 6. BINARY SEARCH TREE ==================== -->
<h2 class="animate-in">6. Binary Search Tree (BST)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Properti BST</h3>
    <p>Binary Search Tree adalah struktur data tree di mana setiap node memiliki paling banyak dua anak, dengan properti:</p>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text">Semua node di <strong>subtree kiri</strong> memiliki nilai <strong>lebih kecil</strong> dari parent</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text">Semua node di <strong>subtree kanan</strong> memiliki nilai <strong>lebih besar</strong> dari parent</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text">Properti ini berlaku <strong>rekursif</strong> untuk setiap subtree</div></div>
    </div>
    <div class="info-box" style="margin-top:12px">
        <strong>Contoh BST:</strong> Insert 50, 30, 70, 20, 40, 60, 80<br>
        <pre style="margin-top:8px;font-family:monospace;color:var(--text-primary)">
           50
          /  \\
        30    70
       / \\   / \\
     20  40 60  80</pre>
        In-order traversal menghasilkan: 20, 30, 40, 50, 60, 70, 80 (terurut!)
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi BST</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="bst-go">Go</button>
        <button class="tab-btn" data-tab="bst-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="bst-go">
        <div class="code-block"><span class="cm">// BST di Go - implementasi lengkap</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="type">BSTNode</span> <span class="kw">struct</span> {
    Val   <span class="type">int</span>
    Left  *<span class="type">BSTNode</span>
    Right *<span class="type">BSTNode</span>
}

<span class="cm">// Insert - O(log n) average, O(n) worst (skewed)</span>
<span class="kw">func</span> <span class="fn">Insert</span>(root *<span class="type">BSTNode</span>, val <span class="type">int</span>) *<span class="type">BSTNode</span> {
    <span class="kw">if</span> root == <span class="num">nil</span> {
        <span class="kw">return</span> &<span class="type">BSTNode</span>{Val: val}
    }
    <span class="kw">if</span> val &lt; root.Val {
        root.Left = <span class="fn">Insert</span>(root.Left, val)
    } <span class="kw">else if</span> val > root.Val {
        root.Right = <span class="fn">Insert</span>(root.Right, val)
    }
    <span class="kw">return</span> root
}

<span class="cm">// Search - O(log n) average</span>
<span class="kw">func</span> <span class="fn">Search</span>(root *<span class="type">BSTNode</span>, target <span class="type">int</span>) <span class="type">bool</span> {
    <span class="kw">if</span> root == <span class="num">nil</span> {
        <span class="kw">return</span> <span class="num">false</span>
    }
    <span class="kw">if</span> target == root.Val {
        <span class="kw">return</span> <span class="num">true</span>
    } <span class="kw">else if</span> target &lt; root.Val {
        <span class="kw">return</span> <span class="fn">Search</span>(root.Left, target)
    }
    <span class="kw">return</span> <span class="fn">Search</span>(root.Right, target)
}

<span class="cm">// In-order traversal (sorted output)</span>
<span class="kw">func</span> <span class="fn">InOrder</span>(root *<span class="type">BSTNode</span>) {
    <span class="kw">if</span> root == <span class="num">nil</span> { <span class="kw">return</span> }
    <span class="fn">InOrder</span>(root.Left)
    <span class="fn">fmt.Printf</span>(<span class="str">"%d "</span>, root.Val)
    <span class="fn">InOrder</span>(root.Right)
}

<span class="cm">// Pre-order traversal</span>
<span class="kw">func</span> <span class="fn">PreOrder</span>(root *<span class="type">BSTNode</span>) {
    <span class="kw">if</span> root == <span class="num">nil</span> { <span class="kw">return</span> }
    <span class="fn">fmt.Printf</span>(<span class="str">"%d "</span>, root.Val)
    <span class="fn">PreOrder</span>(root.Left)
    <span class="fn">PreOrder</span>(root.Right)
}

<span class="cm">// Post-order traversal</span>
<span class="kw">func</span> <span class="fn">PostOrder</span>(root *<span class="type">BSTNode</span>) {
    <span class="kw">if</span> root == <span class="num">nil</span> { <span class="kw">return</span> }
    <span class="fn">PostOrder</span>(root.Left)
    <span class="fn">PostOrder</span>(root.Right)
    <span class="fn">fmt.Printf</span>(<span class="str">"%d "</span>, root.Val)
}

<span class="cm">// Delete node</span>
<span class="kw">func</span> <span class="fn">Delete</span>(root *<span class="type">BSTNode</span>, val <span class="type">int</span>) *<span class="type">BSTNode</span> {
    <span class="kw">if</span> root == <span class="num">nil</span> { <span class="kw">return</span> <span class="num">nil</span> }
    <span class="kw">if</span> val &lt; root.Val {
        root.Left = <span class="fn">Delete</span>(root.Left, val)
    } <span class="kw">else if</span> val > root.Val {
        root.Right = <span class="fn">Delete</span>(root.Right, val)
    } <span class="kw">else</span> {
        <span class="cm">// Node ditemukan</span>
        <span class="kw">if</span> root.Left == <span class="num">nil</span> { <span class="kw">return</span> root.Right }
        <span class="kw">if</span> root.Right == <span class="num">nil</span> { <span class="kw">return</span> root.Left }
        <span class="cm">// Cari successor (terkecil di subtree kanan)</span>
        succ := root.Right
        <span class="kw">for</span> succ.Left != <span class="num">nil</span> { succ = succ.Left }
        root.Val = succ.Val
        root.Right = <span class="fn">Delete</span>(root.Right, succ.Val)
    }
    <span class="kw">return</span> root
}</div>
    </div>
    <div class="tab-content" data-tab-content="bst-java">
        <div class="code-block"><span class="cm">// Java TreeMap - implementasi Red-Black Tree (balanced BST)</span>
<span class="kw">import</span> java.util.TreeMap;
<span class="kw">import</span> java.util.Map;

<span class="kw">public class</span> <span class="type">BSTDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="cm">// TreeMap = Red-Black Tree (self-balancing BST)</span>
        <span class="cm">// Semua operasi O(log n) guaranteed</span>
        <span class="type">TreeMap</span>&lt;<span class="type">Integer</span>, <span class="type">String</span>&gt; tree = <span class="kw">new</span> <span class="type">TreeMap</span>&lt;&gt;();

        <span class="cm">// Insert - O(log n)</span>
        tree.<span class="fn">put</span>(<span class="num">50</span>, <span class="str">"lima puluh"</span>);
        tree.<span class="fn">put</span>(<span class="num">30</span>, <span class="str">"tiga puluh"</span>);
        tree.<span class="fn">put</span>(<span class="num">70</span>, <span class="str">"tujuh puluh"</span>);
        tree.<span class="fn">put</span>(<span class="num">20</span>, <span class="str">"dua puluh"</span>);
        tree.<span class="fn">put</span>(<span class="num">40</span>, <span class="str">"empat puluh"</span>);

        <span class="cm">// Sorted iteration (in-order)</span>
        <span class="kw">for</span> (<span class="type">Map.Entry</span>&lt;<span class="type">Integer</span>, <span class="type">String</span>&gt; e : tree.<span class="fn">entrySet</span>()) {
            System.out.<span class="fn">println</span>(e.<span class="fn">getKey</span>() + <span class="str">": "</span> + e.<span class="fn">getValue</span>());
        }
        <span class="cm">// Output: 20, 30, 40, 50, 70 (terurut!)</span>

        <span class="cm">// Range query</span>
        System.out.<span class="fn">println</span>(tree.<span class="fn">subMap</span>(<span class="num">25</span>, <span class="num">55</span>)); <span class="cm">// {30=..., 40=..., 50=...}</span>

        <span class="cm">// Navigation</span>
        System.out.<span class="fn">println</span>(tree.<span class="fn">firstKey</span>());   <span class="cm">// 20 (minimum)</span>
        System.out.<span class="fn">println</span>(tree.<span class="fn">lastKey</span>());    <span class="cm">// 70 (maximum)</span>
        System.out.<span class="fn">println</span>(tree.<span class="fn">floorKey</span>(<span class="num">35</span>)); <span class="cm">// 30 (&le; 35)</span>
        System.out.<span class="fn">println</span>(tree.<span class="fn">ceilingKey</span>(<span class="num">35</span>)); <span class="cm">// 40 (&ge; 35)</span>

        <span class="cm">// Delete - O(log n)</span>
        tree.<span class="fn">remove</span>(<span class="num">30</span>);
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent2)">Animasi: BST Insert & Visualisasi</h3>
    <p>Masukkan angka untuk melihat bagaimana node ditempatkan di BST sesuai properti BST.</p>
    <div class="anim-container">
        <canvas id="bst-canvas" width="700" height="350" style="width:100%;max-width:700px;background:var(--card-bg);border-radius:8px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <label class="anim-label">Nilai:</label>
            <input class="anim-input" id="bst-input" type="number" value="50" min="1" max="99" style="width:80px">
            <button class="anim-btn" id="bst-insert">Insert</button>
            <button class="anim-btn" id="bst-reset">Reset</button>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Traversal BST</h3>
    <div class="card-grid-3">
        <div class="info-box">
            <strong>In-Order (LNR)</strong><br>
            Kiri &rarr; Node &rarr; Kanan<br>
            Hasil: data terurut ascending<br>
            <code>20, 30, 40, 50, 60, 70, 80</code>
        </div>
        <div class="info-box">
            <strong>Pre-Order (NLR)</strong><br>
            Node &rarr; Kiri &rarr; Kanan<br>
            Berguna untuk: copy tree, serialisasi<br>
            <code>50, 30, 20, 40, 70, 60, 80</code>
        </div>
        <div class="info-box">
            <strong>Post-Order (LRN)</strong><br>
            Kiri &rarr; Kanan &rarr; Node<br>
            Berguna untuk: delete tree, evaluasi ekspresi<br>
            <code>20, 40, 30, 60, 80, 70, 50</code>
        </div>
    </div>
</div>

<!-- ==================== 7. HEAP / PRIORITY QUEUE ==================== -->
<h2 class="animate-in">7. Heap / Priority Queue</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Min-Heap vs Max-Heap</h3>
    <p>Heap adalah <strong>complete binary tree</strong> yang memenuhi heap property. Digunakan untuk implementasi Priority Queue.</p>
    <div class="card-grid">
        <div class="info-box">
            <strong>Min-Heap</strong><br>
            Setiap parent &le; anak-anaknya. Root = elemen terkecil.<br>
            <pre style="font-family:monospace;margin-top:8px;color:var(--text-primary)">
       1
      / \\
     3   5
    / \\
   7   4</pre>
        </div>
        <div class="info-box">
            <strong>Max-Heap</strong><br>
            Setiap parent &ge; anak-anaknya. Root = elemen terbesar.<br>
            <pre style="font-family:monospace;margin-top:8px;color:var(--text-primary)">
       9
      / \\
     7   5
    / \\
   3   4</pre>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent2)">Proses Heapify (Visual)</h3>
    <p>Heap disimpan sebagai <strong>array</strong>. Untuk node di index <code>i</code>:</p>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text">Parent: <code>i / 2</code> (atau <code>(i-1)/2</code> untuk 0-indexed)</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text">Left child: <code>2*i + 1</code></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text">Right child: <code>2*i + 2</code></div></div>
    </div>
    <div class="mem-layout" style="margin-top:12px">
        <div class="mem-row">
            <div class="mem-addr">Index</div>
            <div class="mem-cell stack" style="min-width:40px">0</div>
            <div class="mem-cell stack" style="min-width:40px">1</div>
            <div class="mem-cell stack" style="min-width:40px">2</div>
            <div class="mem-cell stack" style="min-width:40px">3</div>
            <div class="mem-cell stack" style="min-width:40px">4</div>
        </div>
        <div class="mem-row">
            <div class="mem-addr">Value</div>
            <div class="mem-cell data" style="min-width:40px">1</div>
            <div class="mem-cell data" style="min-width:40px">3</div>
            <div class="mem-cell data" style="min-width:40px">5</div>
            <div class="mem-cell data" style="min-width:40px">7</div>
            <div class="mem-cell data" style="min-width:40px">4</div>
        </div>
    </div>
    <p style="font-size:0.85em;color:var(--text-secondary);margin-top:8px">Min-heap [1,3,5,7,4] di array. Insert: tambah di akhir lalu "bubble up". Delete min: swap root dengan terakhir lalu "sift down".</p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Heap / Priority Queue</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="heap-go">Go</button>
        <button class="tab-btn" data-tab="heap-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="heap-go">
        <div class="code-block"><span class="cm">// Go container/heap - interface-based</span>
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"container/heap"</span>
    <span class="str">"fmt"</span>
)

<span class="cm">// IntHeap implements heap.Interface (min-heap)</span>
<span class="kw">type</span> <span class="type">IntHeap</span> []<span class="type">int</span>

<span class="kw">func</span> (h <span class="type">IntHeap</span>) <span class="fn">Len</span>() <span class="type">int</span>           { <span class="kw">return</span> <span class="fn">len</span>(h) }
<span class="kw">func</span> (h <span class="type">IntHeap</span>) <span class="fn">Less</span>(i, j <span class="type">int</span>) <span class="type">bool</span> { <span class="kw">return</span> h[i] &lt; h[j] }
<span class="kw">func</span> (h <span class="type">IntHeap</span>) <span class="fn">Swap</span>(i, j <span class="type">int</span>)      { h[i], h[j] = h[j], h[i] }

<span class="kw">func</span> (h *<span class="type">IntHeap</span>) <span class="fn">Push</span>(x <span class="kw">interface</span>{}) {
    *h = <span class="fn">append</span>(*h, x.(<span class="type">int</span>))
}

<span class="kw">func</span> (h *<span class="type">IntHeap</span>) <span class="fn">Pop</span>() <span class="kw">interface</span>{} {
    old := *h
    n := <span class="fn">len</span>(old)
    x := old[n-<span class="num">1</span>]
    *h = old[:<span class="num">n</span>-<span class="num">1</span>]
    <span class="kw">return</span> x
}

<span class="kw">func</span> <span class="fn">main</span>() {
    h := &<span class="type">IntHeap</span>{<span class="num">5</span>, <span class="num">3</span>, <span class="num">7</span>, <span class="num">1</span>}
    heap.<span class="fn">Init</span>(h)

    heap.<span class="fn">Push</span>(h, <span class="num">2</span>)
    <span class="fn">fmt.Println</span>(<span class="str">"Min:"</span>, (*h)[<span class="num">0</span>]) <span class="cm">// 1</span>

    <span class="kw">for</span> h.<span class="fn">Len</span>() > <span class="num">0</span> {
        <span class="fn">fmt.Printf</span>(<span class="str">"%d "</span>, heap.<span class="fn">Pop</span>(h)) <span class="cm">// 1 2 3 5 7</span>
    }
}</div>
    </div>
    <div class="tab-content" data-tab-content="heap-java">
        <div class="code-block"><span class="cm">// Java PriorityQueue (min-heap default)</span>
<span class="kw">import</span> java.util.PriorityQueue;
<span class="kw">import</span> java.util.Collections;

<span class="kw">public class</span> <span class="type">HeapDemo</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="type">String</span>[] args) {
        <span class="cm">// Min-heap (default)</span>
        <span class="type">PriorityQueue</span>&lt;<span class="type">Integer</span>&gt; minHeap = <span class="kw">new</span> <span class="type">PriorityQueue</span>&lt;&gt;();
        minHeap.<span class="fn">offer</span>(<span class="num">5</span>);
        minHeap.<span class="fn">offer</span>(<span class="num">3</span>);
        minHeap.<span class="fn">offer</span>(<span class="num">7</span>);
        minHeap.<span class="fn">offer</span>(<span class="num">1</span>);

        System.out.<span class="fn">println</span>(minHeap.<span class="fn">peek</span>()); <span class="cm">// 1 (minimum)</span>
        System.out.<span class="fn">println</span>(minHeap.<span class="fn">poll</span>()); <span class="cm">// 1 (hapus min)</span>

        <span class="cm">// Max-heap (dengan reverseOrder)</span>
        <span class="type">PriorityQueue</span>&lt;<span class="type">Integer</span>&gt; maxHeap =
            <span class="kw">new</span> <span class="type">PriorityQueue</span>&lt;&gt;(<span class="type">Collections</span>.<span class="fn">reverseOrder</span>());
        maxHeap.<span class="fn">offer</span>(<span class="num">5</span>);
        maxHeap.<span class="fn">offer</span>(<span class="num">3</span>);
        maxHeap.<span class="fn">offer</span>(<span class="num">7</span>);
        System.out.<span class="fn">println</span>(maxHeap.<span class="fn">poll</span>()); <span class="cm">// 7 (maximum)</span>

        <span class="cm">// Custom comparator - Task scheduling</span>
        <span class="type">PriorityQueue</span>&lt;<span class="type">int</span>[]&gt; taskQueue =
            <span class="kw">new</span> <span class="type">PriorityQueue</span>&lt;&gt;((a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);
        taskQueue.<span class="fn">offer</span>(<span class="kw">new</span> <span class="type">int</span>[]{<span class="num">3</span>, <span class="num">1</span>}); <span class="cm">// priority 3</span>
        taskQueue.<span class="fn">offer</span>(<span class="kw">new</span> <span class="type">int</span>[]{<span class="num">1</span>, <span class="num">2</span>}); <span class="cm">// priority 1</span>
        taskQueue.<span class="fn">offer</span>(<span class="kw">new</span> <span class="type">int</span>[]{<span class="num">2</span>, <span class="num">3</span>}); <span class="cm">// priority 2</span>
        <span class="cm">// Poll order: [1,2], [2,3], [3,1]</span>
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Aplikasi Heap</h3>
    <div class="card-grid-3">
        <div class="info-box">
            <strong>Dijkstra's Algorithm</strong><br>
            Min-heap untuk memilih node dengan jarak terpendek berikutnya secara efisien O(E log V).
        </div>
        <div class="info-box">
            <strong>Task Scheduling</strong><br>
            OS scheduler menggunakan priority queue untuk menjalankan proses berprioritas tinggi lebih dulu.
        </div>
        <div class="info-box">
            <strong>Median Finding</strong><br>
            Dua heap (max-heap + min-heap) untuk mencari median dari streaming data dalam O(log n).
        </div>
    </div>
    <div class="table-wrapper" style="margin-top:12px">
        <table>
            <tr><th>Operasi</th><th>Kompleksitas</th><th>Keterangan</th></tr>
            <tr><td>Insert (push)</td><td><span class="badge-blue">O(log n)</span></td><td>Bubble up dari leaf ke root</td></tr>
            <tr><td>Extract Min/Max</td><td><span class="badge-blue">O(log n)</span></td><td>Sift down setelah swap dengan last</td></tr>
            <tr><td>Peek Min/Max</td><td><span class="badge-green">O(1)</span></td><td>Selalu di root</td></tr>
            <tr><td>Build Heap</td><td><span class="badge-orange">O(n)</span></td><td>Heapify dari bawah ke atas</td></tr>
        </table>
    </div>
</div>

<!-- ==================== 8. GRAPH ==================== -->
<h2 class="animate-in">8. Graph</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Representasi Graph</h3>
    <p>Graph terdiri dari <strong>vertices (node)</strong> dan <strong>edges (sisi)</strong> yang menghubungkan node-node tersebut.</p>
    <div class="card-grid">
        <div class="info-box">
            <strong>Adjacency Matrix</strong><br>
            Matrix 2D berukuran V&times;V. <code>matrix[i][j] = 1</code> jika ada edge dari i ke j.<br>
            Cocok untuk graph padat (dense). Space: O(V&sup2;).<br>
            <pre style="font-family:monospace;margin-top:8px;color:var(--text-primary)">
  0 1 2 3
0[0 1 1 0]
1[1 0 0 1]
2[1 0 0 1]
3[0 1 1 0]</pre>
        </div>
        <div class="info-box">
            <strong>Adjacency List</strong><br>
            Array/map di mana setiap node menyimpan list tetangganya.<br>
            Cocok untuk graph jarang (sparse). Space: O(V+E).<br>
            <pre style="font-family:monospace;margin-top:8px;color:var(--text-primary)">
0: [1, 2]
1: [0, 3]
2: [0, 3]
3: [1, 2]</pre>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Jenis-jenis Graph</h3>
    <div class="card-grid">
        <div class="info-box">
            <strong>Directed vs Undirected</strong><br>
            <strong>Directed:</strong> Edge punya arah (A&rarr;B bukan berarti B&rarr;A). Contoh: follower di Twitter.<br>
            <strong>Undirected:</strong> Edge dua arah (A-B = B-A). Contoh: friendship di Facebook.
        </div>
        <div class="info-box">
            <strong>Weighted vs Unweighted</strong><br>
            <strong>Weighted:</strong> Setiap edge punya bobot/cost. Contoh: jarak antar kota, latency jaringan.<br>
            <strong>Unweighted:</strong> Semua edge dianggap sama. Contoh: social network connection.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Graph</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="graph-go">Go</button>
        <button class="tab-btn" data-tab="graph-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="graph-go">
        <div class="code-block"><span class="cm">// Graph dengan adjacency list di Go</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="type">Graph</span> <span class="kw">struct</span> {
    adj <span class="kw">map</span>[<span class="type">int</span>][]<span class="type">int</span>
}

<span class="kw">func</span> <span class="fn">NewGraph</span>() *<span class="type">Graph</span> {
    <span class="kw">return</span> &<span class="type">Graph</span>{adj: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>][]<span class="type">int</span>)}
}

<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">AddEdge</span>(u, v <span class="type">int</span>) {
    g.adj[u] = <span class="fn">append</span>(g.adj[u], v)
    g.adj[v] = <span class="fn">append</span>(g.adj[v], u) <span class="cm">// undirected</span>
}

<span class="cm">// BFS - Breadth-First Search</span>
<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">BFS</span>(start <span class="type">int</span>) []<span class="type">int</span> {
    visited := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>]<span class="type">bool</span>)
    queue := []<span class="type">int</span>{start}
    visited[start] = <span class="num">true</span>
    result := []<span class="type">int</span>{}

    <span class="kw">for</span> <span class="fn">len</span>(queue) > <span class="num">0</span> {
        node := queue[<span class="num">0</span>]
        queue = queue[<span class="num">1</span>:]
        result = <span class="fn">append</span>(result, node)

        <span class="kw">for</span> _, neighbor := <span class="kw">range</span> g.adj[node] {
            <span class="kw">if</span> !visited[neighbor] {
                visited[neighbor] = <span class="num">true</span>
                queue = <span class="fn">append</span>(queue, neighbor)
            }
        }
    }
    <span class="kw">return</span> result
}

<span class="cm">// DFS - Depth-First Search (recursive)</span>
<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">DFS</span>(start <span class="type">int</span>) []<span class="type">int</span> {
    visited := <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">int</span>]<span class="type">bool</span>)
    result := []<span class="type">int</span>{}
    g.<span class="fn">dfsHelper</span>(start, visited, &result)
    <span class="kw">return</span> result
}

<span class="kw">func</span> (g *<span class="type">Graph</span>) <span class="fn">dfsHelper</span>(node <span class="type">int</span>, visited <span class="kw">map</span>[<span class="type">int</span>]<span class="type">bool</span>, result *[]<span class="type">int</span>) {
    visited[node] = <span class="num">true</span>
    *result = <span class="fn">append</span>(*result, node)
    <span class="kw">for</span> _, neighbor := <span class="kw">range</span> g.adj[node] {
        <span class="kw">if</span> !visited[neighbor] {
            g.<span class="fn">dfsHelper</span>(neighbor, visited, result)
        }
    }
}</div>
    </div>
    <div class="tab-content" data-tab-content="graph-java">
        <div class="code-block"><span class="cm">// Graph dengan adjacency list di Java</span>
<span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="type">GraphDemo</span> {
    <span class="kw">private</span> <span class="type">Map</span>&lt;<span class="type">Integer</span>, <span class="type">List</span>&lt;<span class="type">Integer</span>&gt;&gt; adj = <span class="kw">new</span> <span class="type">HashMap</span>&lt;&gt;();

    <span class="kw">public void</span> <span class="fn">addEdge</span>(<span class="type">int</span> u, <span class="type">int</span> v) {
        adj.<span class="fn">computeIfAbsent</span>(u, k -> <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(v);
        adj.<span class="fn">computeIfAbsent</span>(v, k -> <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(u);
    }

    <span class="cm">// BFS</span>
    <span class="kw">public</span> <span class="type">List</span>&lt;<span class="type">Integer</span>&gt; <span class="fn">bfs</span>(<span class="type">int</span> start) {
        <span class="type">Set</span>&lt;<span class="type">Integer</span>&gt; visited = <span class="kw">new</span> <span class="type">HashSet</span>&lt;&gt;();
        <span class="type">Queue</span>&lt;<span class="type">Integer</span>&gt; queue = <span class="kw">new</span> <span class="type">LinkedList</span>&lt;&gt;();
        <span class="type">List</span>&lt;<span class="type">Integer</span>&gt; result = <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;();

        queue.<span class="fn">offer</span>(start);
        visited.<span class="fn">add</span>(start);

        <span class="kw">while</span> (!queue.<span class="fn">isEmpty</span>()) {
            <span class="type">int</span> node = queue.<span class="fn">poll</span>();
            result.<span class="fn">add</span>(node);

            <span class="kw">for</span> (<span class="type">int</span> neighbor : adj.<span class="fn">getOrDefault</span>(node, <span class="type">Collections</span>.<span class="fn">emptyList</span>())) {
                <span class="kw">if</span> (!visited.<span class="fn">contains</span>(neighbor)) {
                    visited.<span class="fn">add</span>(neighbor);
                    queue.<span class="fn">offer</span>(neighbor);
                }
            }
        }
        <span class="kw">return</span> result;
    }

    <span class="cm">// DFS</span>
    <span class="kw">public</span> <span class="type">List</span>&lt;<span class="type">Integer</span>&gt; <span class="fn">dfs</span>(<span class="type">int</span> start) {
        <span class="type">Set</span>&lt;<span class="type">Integer</span>&gt; visited = <span class="kw">new</span> <span class="type">HashSet</span>&lt;&gt;();
        <span class="type">List</span>&lt;<span class="type">Integer</span>&gt; result = <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;();
        <span class="fn">dfsHelper</span>(start, visited, result);
        <span class="kw">return</span> result;
    }

    <span class="kw">private void</span> <span class="fn">dfsHelper</span>(<span class="type">int</span> node, <span class="type">Set</span>&lt;<span class="type">Integer</span>&gt; visited, <span class="type">List</span>&lt;<span class="type">Integer</span>&gt; result) {
        visited.<span class="fn">add</span>(node);
        result.<span class="fn">add</span>(node);
        <span class="kw">for</span> (<span class="type">int</span> neighbor : adj.<span class="fn">getOrDefault</span>(node, <span class="type">Collections</span>.<span class="fn">emptyList</span>())) {
            <span class="kw">if</span> (!visited.<span class="fn">contains</span>(neighbor)) {
                <span class="fn">dfsHelper</span>(neighbor, visited, result);
            }
        }
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent2)">Animasi: Graph Traversal (BFS & DFS)</h3>
    <p>Klik BFS atau DFS untuk melihat urutan kunjungan node pada graph. Node biru = dikunjungi, hijau = dalam antrian/stack.</p>
    <div class="anim-container">
        <canvas id="graph-ds-canvas" width="700" height="350" style="width:100%;max-width:700px;background:var(--card-bg);border-radius:8px;border:1px solid var(--border)"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="graph-bfs-btn">BFS</button>
            <button class="anim-btn" id="graph-dfs-btn">DFS</button>
            <button class="anim-btn" id="graph-reset-btn">Reset</button>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">BFS vs DFS</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Aspek</th><th>BFS (Breadth-First)</th><th>DFS (Depth-First)</th></tr>
            <tr><td>Struktur data</td><td>Queue (FIFO)</td><td>Stack / Rekursi (LIFO)</td></tr>
            <tr><td>Pola explorasi</td><td>Level-by-level</td><td>Sedalam mungkin dulu</td></tr>
            <tr><td>Shortest path (unweighted)</td><td><span class="badge-green">Ya</span></td><td><span class="badge-red">Tidak</span></td></tr>
            <tr><td>Memory</td><td>O(V) - bisa besar pada graph lebar</td><td>O(V) - call stack depth</td></tr>
            <tr><td>Aplikasi</td><td>Shortest path, level-order</td><td>Topological sort, cycle detection</td></tr>
            <tr><td>Kompleksitas</td><td><span class="badge-blue">O(V + E)</span></td><td><span class="badge-blue">O(V + E)</span></td></tr>
        </table>
    </div>
</div>

<!-- ==================== 9. TRIE ==================== -->
<h2 class="animate-in">9. Trie (Prefix Tree)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa itu Trie?</h3>
    <p>Trie (dibaca "try") adalah struktur data tree khusus untuk menyimpan dan mencari <strong>string</strong> secara efisien.
       Setiap node merepresentasikan satu karakter, dan path dari root ke node membentuk prefix dari string-string yang disimpan.</p>

    <div class="info-box" style="margin-top:12px">
        <strong>Contoh Trie</strong> untuk kata: "car", "cat", "card", "care", "dog"<br>
        <pre style="font-family:monospace;margin-top:8px;color:var(--text-primary)">
        (root)
        /    \\
       c      d
       |      |
       a      o
      / \\     |
     r   t*   g*
    / \\
   d*  e*</pre>
        <span style="font-size:0.85em">* = akhir kata (isEnd=true)</span>
    </div>

    <div class="success-box" style="margin-top:12px">
        <strong>Keunggulan Trie:</strong> Search, Insert, Delete semua O(m) di mana m = panjang kata. Tidak tergantung jumlah total kata!
        Sangat cocok untuk autocomplete, spell checker, dan IP routing.
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Implementasi Trie</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="trie-go">Go</button>
        <button class="tab-btn" data-tab="trie-java">Java</button>
    </div>
    <div class="tab-content active" data-tab-content="trie-go">
        <div class="code-block"><span class="cm">// Trie di Go</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="type">TrieNode</span> <span class="kw">struct</span> {
    Children <span class="kw">map</span>[<span class="type">rune</span>]*<span class="type">TrieNode</span>
    IsEnd    <span class="type">bool</span>
}

<span class="kw">type</span> <span class="type">Trie</span> <span class="kw">struct</span> {
    Root *<span class="type">TrieNode</span>
}

<span class="kw">func</span> <span class="fn">NewTrie</span>() *<span class="type">Trie</span> {
    <span class="kw">return</span> &<span class="type">Trie</span>{Root: &<span class="type">TrieNode</span>{Children: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">rune</span>]*<span class="type">TrieNode</span>)}}
}

<span class="cm">// Insert - O(m), m = panjang kata</span>
<span class="kw">func</span> (t *<span class="type">Trie</span>) <span class="fn">Insert</span>(word <span class="type">string</span>) {
    node := t.Root
    <span class="kw">for</span> _, ch := <span class="kw">range</span> word {
        <span class="kw">if</span> _, ok := node.Children[ch]; !ok {
            node.Children[ch] = &<span class="type">TrieNode</span>{Children: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">rune</span>]*<span class="type">TrieNode</span>)}
        }
        node = node.Children[ch]
    }
    node.IsEnd = <span class="num">true</span>
}

<span class="cm">// Search - O(m)</span>
<span class="kw">func</span> (t *<span class="type">Trie</span>) <span class="fn">Search</span>(word <span class="type">string</span>) <span class="type">bool</span> {
    node := t.Root
    <span class="kw">for</span> _, ch := <span class="kw">range</span> word {
        <span class="kw">if</span> _, ok := node.Children[ch]; !ok {
            <span class="kw">return</span> <span class="num">false</span>
        }
        node = node.Children[ch]
    }
    <span class="kw">return</span> node.IsEnd
}

<span class="cm">// StartsWith (autocomplete prefix) - O(m)</span>
<span class="kw">func</span> (t *<span class="type">Trie</span>) <span class="fn">StartsWith</span>(prefix <span class="type">string</span>) <span class="type">bool</span> {
    node := t.Root
    <span class="kw">for</span> _, ch := <span class="kw">range</span> prefix {
        <span class="kw">if</span> _, ok := node.Children[ch]; !ok {
            <span class="kw">return</span> <span class="num">false</span>
        }
        node = node.Children[ch]
    }
    <span class="kw">return</span> <span class="num">true</span>
}

<span class="cm">// Autocomplete - kumpulkan semua kata dengan prefix tertentu</span>
<span class="kw">func</span> (t *<span class="type">Trie</span>) <span class="fn">Autocomplete</span>(prefix <span class="type">string</span>) []<span class="type">string</span> {
    node := t.Root
    <span class="kw">for</span> _, ch := <span class="kw">range</span> prefix {
        <span class="kw">if</span> _, ok := node.Children[ch]; !ok {
            <span class="kw">return</span> <span class="num">nil</span>
        }
        node = node.Children[ch]
    }
    results := []<span class="type">string</span>{}
    t.<span class="fn">collect</span>(node, prefix, &results)
    <span class="kw">return</span> results
}

<span class="kw">func</span> (t *<span class="type">Trie</span>) <span class="fn">collect</span>(node *<span class="type">TrieNode</span>, prefix <span class="type">string</span>, results *[]<span class="type">string</span>) {
    <span class="kw">if</span> node.IsEnd {
        *results = <span class="fn">append</span>(*results, prefix)
    }
    <span class="kw">for</span> ch, child := <span class="kw">range</span> node.Children {
        t.<span class="fn">collect</span>(child, prefix+<span class="fn">string</span>(ch), results)
    }
}</div>
    </div>
    <div class="tab-content" data-tab-content="trie-java">
        <div class="code-block"><span class="cm">// Trie di Java</span>
<span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="type">Trie</span> {
    <span class="kw">private class</span> <span class="type">TrieNode</span> {
        <span class="type">Map</span>&lt;<span class="type">Character</span>, <span class="type">TrieNode</span>&gt; children = <span class="kw">new</span> <span class="type">HashMap</span>&lt;&gt;();
        <span class="type">boolean</span> isEnd = <span class="num">false</span>;
    }

    <span class="kw">private</span> <span class="type">TrieNode</span> root = <span class="kw">new</span> <span class="type">TrieNode</span>();

    <span class="cm">// Insert - O(m)</span>
    <span class="kw">public void</span> <span class="fn">insert</span>(<span class="type">String</span> word) {
        <span class="type">TrieNode</span> node = root;
        <span class="kw">for</span> (<span class="type">char</span> c : word.<span class="fn">toCharArray</span>()) {
            node.children.<span class="fn">putIfAbsent</span>(c, <span class="kw">new</span> <span class="type">TrieNode</span>());
            node = node.children.<span class="fn">get</span>(c);
        }
        node.isEnd = <span class="num">true</span>;
    }

    <span class="cm">// Search - O(m)</span>
    <span class="kw">public boolean</span> <span class="fn">search</span>(<span class="type">String</span> word) {
        <span class="type">TrieNode</span> node = <span class="fn">findNode</span>(word);
        <span class="kw">return</span> node != <span class="num">null</span> && node.isEnd;
    }

    <span class="cm">// StartsWith - O(m)</span>
    <span class="kw">public boolean</span> <span class="fn">startsWith</span>(<span class="type">String</span> prefix) {
        <span class="kw">return</span> <span class="fn">findNode</span>(prefix) != <span class="num">null</span>;
    }

    <span class="kw">private</span> <span class="type">TrieNode</span> <span class="fn">findNode</span>(<span class="type">String</span> s) {
        <span class="type">TrieNode</span> node = root;
        <span class="kw">for</span> (<span class="type">char</span> c : s.<span class="fn">toCharArray</span>()) {
            <span class="kw">if</span> (!node.children.<span class="fn">containsKey</span>(c)) <span class="kw">return</span> <span class="num">null</span>;
            node = node.children.<span class="fn">get</span>(c);
        }
        <span class="kw">return</span> node;
    }

    <span class="cm">// Autocomplete</span>
    <span class="kw">public</span> <span class="type">List</span>&lt;<span class="type">String</span>&gt; <span class="fn">autocomplete</span>(<span class="type">String</span> prefix) {
        <span class="type">List</span>&lt;<span class="type">String</span>&gt; results = <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;();
        <span class="type">TrieNode</span> node = <span class="fn">findNode</span>(prefix);
        <span class="kw">if</span> (node != <span class="num">null</span>) <span class="fn">collect</span>(node, <span class="kw">new</span> <span class="type">StringBuilder</span>(prefix), results);
        <span class="kw">return</span> results;
    }

    <span class="kw">private void</span> <span class="fn">collect</span>(<span class="type">TrieNode</span> node, <span class="type">StringBuilder</span> sb, <span class="type">List</span>&lt;<span class="type">String</span>&gt; results) {
        <span class="kw">if</span> (node.isEnd) results.<span class="fn">add</span>(sb.<span class="fn">toString</span>());
        <span class="kw">for</span> (<span class="type">Map.Entry</span>&lt;<span class="type">Character</span>, <span class="type">TrieNode</span>&gt; e : node.children.<span class="fn">entrySet</span>()) {
            sb.<span class="fn">append</span>(e.<span class="fn">getKey</span>());
            <span class="fn">collect</span>(e.<span class="fn">getValue</span>(), sb, results);
            sb.<span class="fn">deleteCharAt</span>(sb.<span class="fn">length</span>() - <span class="num">1</span>);
        }
    }
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Use Case: Autocomplete</h3>
    <p>Trie sangat efisien untuk fitur autocomplete karena semua kata dengan prefix yang sama berbagi path yang sama di tree.</p>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text">User mengetik <code>"car"</code></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text">Trie menavigasi: root &rarr; 'c' &rarr; 'a' &rarr; 'r'</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text">Dari node 'r', collect semua kata: <strong>car, card, care</strong></div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text">Tampilkan sebagai suggestions di dropdown</div></div>
    </div>
    <div class="info-box" style="margin-top:12px">
        <strong>Aplikasi lain:</strong> Spell checker, IP routing (longest prefix match), T9 predictive text, DNA sequence matching.
    </div>
</div>

<!-- ==================== 10. COMPARISON TABLE ==================== -->
<h2 class="animate-in">10. Tabel Perbandingan Semua Struktur Data</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Kompleksitas Waktu (Average Case)</h3>
    <div class="table-wrapper">
        <table>
            <tr>
                <th>Struktur Data</th>
                <th>Insert</th>
                <th>Delete</th>
                <th>Search</th>
                <th>Access</th>
                <th>Space</th>
            </tr>
            <tr>
                <td><strong>Array/ArrayList</strong></td>
                <td><span class="badge-green">O(1)*</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>Linked List</strong></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>Stack</strong></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>Queue</strong></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>Hash Map</strong></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-red">N/A</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>BST (balanced)</strong></td>
                <td><span class="badge-blue">O(log n)</span></td>
                <td><span class="badge-blue">O(log n)</span></td>
                <td><span class="badge-blue">O(log n)</span></td>
                <td><span class="badge-red">N/A</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>Heap</strong></td>
                <td><span class="badge-blue">O(log n)</span></td>
                <td><span class="badge-blue">O(log n)</span></td>
                <td><span class="badge-orange">O(n)</span></td>
                <td><span class="badge-green">O(1) min/max</span></td>
                <td><span class="badge-blue">O(n)</span></td>
            </tr>
            <tr>
                <td><strong>Graph (adj list)</strong></td>
                <td><span class="badge-green">O(1)</span></td>
                <td><span class="badge-blue">O(E)</span></td>
                <td><span class="badge-blue">O(V+E)</span></td>
                <td><span class="badge-red">N/A</span></td>
                <td><span class="badge-blue">O(V+E)</span></td>
            </tr>
            <tr>
                <td><strong>Trie</strong></td>
                <td><span class="badge-blue">O(m)</span></td>
                <td><span class="badge-blue">O(m)</span></td>
                <td><span class="badge-blue">O(m)</span></td>
                <td><span class="badge-red">N/A</span></td>
                <td><span class="badge-orange">O(ALPHABET * m * n)</span></td>
            </tr>
        </table>
    </div>
    <p style="font-size:0.85em;color:var(--text-secondary);margin-top:8px">
        * O(1) amortized untuk append. m = panjang string. n = jumlah kata (untuk Trie).<br>
        Insert/Delete pada Linked List = O(1) jika sudah punya referensi ke node, O(n) jika harus cari dulu.
    </p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Kapan Pakai Apa?</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Kebutuhan</th><th>Struktur Data Terbaik</th><th>Alasan</th></tr>
            <tr><td>Akses cepat by index</td><td><span class="badge-blue">Array / ArrayList</span></td><td>O(1) random access</td></tr>
            <tr><td>Sering insert/delete di awal</td><td><span class="badge-green">Linked List</span></td><td>O(1) tanpa shift elemen</td></tr>
            <tr><td>Undo/Redo, parsing expression</td><td><span class="badge-purple">Stack</span></td><td>LIFO natural untuk backtracking</td></tr>
            <tr><td>Task scheduling, BFS</td><td><span class="badge-orange">Queue</span></td><td>FIFO untuk proses berurutan</td></tr>
            <tr><td>Key-value lookup cepat</td><td><span class="badge-green">Hash Map</span></td><td>O(1) average lookup</td></tr>
            <tr><td>Data terurut + range query</td><td><span class="badge-blue">BST / TreeMap</span></td><td>O(log n) sorted operations</td></tr>
            <tr><td>Cari min/max cepat</td><td><span class="badge-red">Heap / PriorityQueue</span></td><td>O(1) peek, O(log n) extract</td></tr>
            <tr><td>Relasi antar entitas</td><td><span class="badge-purple">Graph</span></td><td>Model network, dependency</td></tr>
            <tr><td>Autocomplete, prefix search</td><td><span class="badge-yellow">Trie</span></td><td>O(m) prefix lookup</td></tr>
        </table>
    </div>
</div>

<div class="warn-box animate-in" style="margin-top:16px">
    <strong>Tips Pemilihan Struktur Data:</strong><br>
    1. Mulai dari kebutuhan operasi yang paling sering dilakukan (insert? search? delete?).<br>
    2. Pertimbangkan trade-off antara waktu dan memori.<br>
    3. Dalam praktik, Array/HashMap menyelesaikan 80% masalah. Gunakan struktur data lain hanya jika benar-benar diperlukan.<br>
    4. Perhatikan constant factor: HashMap O(1) bisa lebih lambat dari Array O(n) untuk data kecil karena overhead hashing.
</div>
`;

// ====================== CANVAS ANIMATIONS ======================
function initDSAnimations() {
    const dpr = window.devicePixelRatio || 1;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const accentColor = isDark ? '#38bdf8' : '#0ea5e9';
    const greenColor = isDark ? '#34d399' : '#10b981';
    const redColor = isDark ? '#f87171' : '#ef4444';
    const orangeColor = isDark ? '#fb923c' : '#f97316';
    const purpleColor = isDark ? '#a78bfa' : '#8b5cf6';
    const bgColor = isDark ? '#1e293b' : '#f8fafc';
    const cardBg = isDark ? '#0f172a' : '#ffffff';
    const borderColor = isDark ? '#334155' : '#e2e8f0';

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

    // ====================== LINKED LIST ANIMATION ======================
    (function initLinkedList() {
        const setup = setupCanvas('ll-canvas', 700, 200);
        if (!setup) return;
        const { ctx, w, h } = setup;

        let nodes = [10, 20, 30];
        let nextVal = 40;
        let animating = false;
        let animPhase = '';
        let animProgress = 0;
        let animNewVal = 0;

        function drawLL() {
            ctx.clearRect(0, 0, w, h);

            const nodeW = 70, nodeH = 40, gap = 30;
            const totalW = nodes.length * nodeW + (nodes.length - 1) * gap + 80;
            let startX = Math.max(20, (w - totalW) / 2);
            const cy = h / 2;

            // Draw HEAD label
            ctx.fillStyle = accentColor;
            ctx.font = 'bold 13px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('HEAD', startX + 15, cy - 30);
            ctx.beginPath();
            ctx.moveTo(startX + 15, cy - 25);
            ctx.lineTo(startX + 15, cy - 15);
            ctx.strokeStyle = accentColor;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(startX + 10, cy - 18);
            ctx.lineTo(startX + 15, cy - 10);
            ctx.lineTo(startX + 20, cy - 18);
            ctx.fillStyle = accentColor;
            ctx.fill();

            // Draw nodes
            for (let i = 0; i < nodes.length; i++) {
                const x = startX + i * (nodeW + gap);
                const y = cy - nodeH / 2;

                // Node box
                ctx.fillStyle = cardBg;
                ctx.strokeStyle = accentColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(x, y, nodeW, nodeH, 6);
                ctx.fill();
                ctx.stroke();

                // Divider
                ctx.beginPath();
                ctx.moveTo(x + nodeW * 0.65, y);
                ctx.lineTo(x + nodeW * 0.65, y + nodeH);
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = 1;
                ctx.stroke();

                // Data
                ctx.fillStyle = textColor;
                ctx.font = 'bold 14px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(nodes[i], x + nodeW * 0.32, cy + 5);

                // Pointer indicator
                if (i < nodes.length - 1) {
                    ctx.fillStyle = greenColor;
                    ctx.font = '12px monospace';
                    ctx.fillText('\u2022', x + nodeW * 0.82, cy + 4);
                } else {
                    ctx.fillStyle = redColor;
                    ctx.font = '10px monospace';
                    ctx.fillText('nil', x + nodeW * 0.82, cy + 4);
                }

                // Arrow to next
                if (i < nodes.length - 1) {
                    const arrowStart = x + nodeW;
                    const arrowEnd = x + nodeW + gap;
                    ctx.beginPath();
                    ctx.moveTo(arrowStart + 2, cy);
                    ctx.lineTo(arrowEnd - 6, cy);
                    ctx.strokeStyle = greenColor;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(arrowEnd - 10, cy - 5);
                    ctx.lineTo(arrowEnd - 2, cy);
                    ctx.lineTo(arrowEnd - 10, cy + 5);
                    ctx.fillStyle = greenColor;
                    ctx.fill();
                }
            }

            // Animating insert
            if (animating && animPhase === 'insert') {
                const i = nodes.length - 1;
                const x = startX + i * (nodeW + gap);
                const y = cy - nodeH / 2;
                const offsetY = (1 - animProgress) * 60;

                ctx.globalAlpha = animProgress;
                ctx.fillStyle = cardBg;
                ctx.strokeStyle = orangeColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(x, y + offsetY, nodeW, nodeH, 6);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = orangeColor;
                ctx.font = 'bold 14px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(animNewVal, x + nodeW * 0.32, cy + 5 + offsetY);
                ctx.globalAlpha = 1;
            }
        }

        drawLL();

        const insertBtn = document.getElementById('ll-insert');
        const deleteBtn = document.getElementById('ll-delete');
        const resetBtn = document.getElementById('ll-reset');

        if (insertBtn) insertBtn.addEventListener('click', () => {
            if (animating || nodes.length >= 7) return;
            animating = true;
            animPhase = 'insert';
            animNewVal = nextVal;
            animProgress = 0;
            nodes.push(nextVal);
            nextVal += 10;

            const startTime = performance.now();
            function animate(time) {
                animProgress = Math.min(1, (time - startTime) / 500);
                drawLL();
                if (animProgress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    animating = false;
                    animPhase = '';
                    drawLL();
                }
            }
            requestAnimationFrame(animate);
        });

        if (deleteBtn) deleteBtn.addEventListener('click', () => {
            if (animating || nodes.length <= 1) return;
            nodes.shift();
            drawLL();
        });

        if (resetBtn) resetBtn.addEventListener('click', () => {
            nodes = [10, 20, 30];
            nextVal = 40;
            animating = false;
            drawLL();
        });
    })();

    // ====================== BST ANIMATION ======================
    (function initBST() {
        const setup = setupCanvas('bst-canvas', 700, 350);
        if (!setup) return;
        const { ctx, w, h } = setup;

        class BSTNodeAnim {
            constructor(val) {
                this.val = val;
                this.left = null;
                this.right = null;
            }
        }

        let root = null;
        let highlightPath = [];

        function insertBST(node, val) {
            if (!node) return new BSTNodeAnim(val);
            if (val < node.val) node.left = insertBST(node.left, val);
            else if (val > node.val) node.right = insertBST(node.right, val);
            return node;
        }

        function getPositions(node, x, y, dx, positions) {
            if (!node) return;
            positions.push({ val: node.val, x, y });
            if (node.left) {
                positions.push({ edge: true, x1: x, y1: y, x2: x - dx, y2: y + 55 });
                getPositions(node.left, x - dx, y + 55, dx * 0.55, positions);
            }
            if (node.right) {
                positions.push({ edge: true, x1: x, y1: y, x2: x + dx, y2: y + 55 });
                getPositions(node.right, x + dx, y + 55, dx * 0.55, positions);
            }
        }

        function drawBST() {
            ctx.clearRect(0, 0, w, h);

            if (!root) {
                ctx.fillStyle = textColor;
                ctx.font = '14px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('BST kosong. Masukkan angka dan klik Insert.', w / 2, h / 2);
                return;
            }

            const positions = [];
            getPositions(root, w / 2, 35, w / 5, positions);

            // Draw edges
            for (const p of positions) {
                if (p.edge) {
                    ctx.beginPath();
                    ctx.moveTo(p.x1, p.y1 + 16);
                    ctx.lineTo(p.x2, p.y2 - 16);
                    ctx.strokeStyle = borderColor;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }

            // Draw nodes
            for (const p of positions) {
                if (p.edge) continue;
                const isHighlighted = highlightPath.includes(p.val);
                const r = 18;

                ctx.beginPath();
                ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                ctx.fillStyle = isHighlighted ? accentColor : cardBg;
                ctx.fill();
                ctx.strokeStyle = isHighlighted ? accentColor : purpleColor;
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.fillStyle = isHighlighted ? '#fff' : textColor;
                ctx.font = 'bold 13px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.val, p.x, p.y);
            }
            ctx.textBaseline = 'alphabetic';
        }

        drawBST();

        const insertBtn = document.getElementById('bst-insert');
        const resetBtn = document.getElementById('bst-reset');
        const input = document.getElementById('bst-input');

        if (insertBtn) insertBtn.addEventListener('click', () => {
            const val = parseInt(input.value);
            if (isNaN(val) || val < 1 || val > 99) return;

            // Build highlight path
            highlightPath = [];
            let curr = root;
            while (curr) {
                highlightPath.push(curr.val);
                if (val < curr.val) curr = curr.left;
                else if (val > curr.val) curr = curr.right;
                else break;
            }
            highlightPath.push(val);

            root = insertBST(root, val);
            drawBST();

            // Clear highlight after delay
            setTimeout(() => {
                highlightPath = [];
                drawBST();
            }, 1200);

            input.value = Math.floor(Math.random() * 99) + 1;
        });

        if (resetBtn) resetBtn.addEventListener('click', () => {
            root = null;
            highlightPath = [];
            drawBST();
        });
    })();

    // ====================== HASH TABLE ANIMATION ======================
    (function initHashTable() {
        const setup = setupCanvas('hash-canvas', 700, 300);
        if (!setup) return;
        const { ctx, w, h } = setup;

        const TABLE_SIZE = 7;
        let table = new Array(TABLE_SIZE).fill(null).map(() => []);
        let lastInserted = { key: -1, slot: -1 };

        function hashFn(key) {
            return key % TABLE_SIZE;
        }

        function drawHashTable() {
            ctx.clearRect(0, 0, w, h);

            const slotW = 70, slotH = 36;
            const startX = 50;
            const startY = 60;

            // Title
            ctx.fillStyle = textColor;
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Hash Table (size=' + TABLE_SIZE + ', hash = key % ' + TABLE_SIZE + ')', startX, 30);

            // Draw slots
            for (let i = 0; i < TABLE_SIZE; i++) {
                const y = startY + i * (slotH + 6);

                // Index label
                ctx.fillStyle = textColor;
                ctx.font = '12px monospace';
                ctx.textAlign = 'right';
                ctx.fillText('[' + i + ']', startX - 8, y + slotH / 2 + 4);

                // Slot box
                const isLastSlot = lastInserted.slot === i;
                ctx.fillStyle = isLastSlot ? (isDark ? 'rgba(56,189,248,0.15)' : 'rgba(14,165,233,0.1)') : cardBg;
                ctx.strokeStyle = isLastSlot ? accentColor : borderColor;
                ctx.lineWidth = isLastSlot ? 2 : 1;
                ctx.beginPath();
                ctx.roundRect(startX, y, slotW, slotH, 4);
                ctx.fill();
                ctx.stroke();

                // Draw chain
                const chain = table[i];
                if (chain.length === 0) {
                    ctx.fillStyle = isDark ? '#475569' : '#94a3b8';
                    ctx.font = '11px monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText('kosong', startX + slotW / 2, y + slotH / 2 + 4);
                } else {
                    let cx = startX + slotW + 15;
                    for (let j = 0; j < chain.length; j++) {
                        // Arrow from slot or previous chain item
                        const arrowX = j === 0 ? startX + slotW : cx - 15;
                        ctx.beginPath();
                        ctx.moveTo(arrowX + 2, y + slotH / 2);
                        ctx.lineTo(cx - 4, y + slotH / 2);
                        ctx.strokeStyle = greenColor;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(cx - 8, y + slotH / 2 - 4);
                        ctx.lineTo(cx - 2, y + slotH / 2);
                        ctx.lineTo(cx - 8, y + slotH / 2 + 4);
                        ctx.fillStyle = greenColor;
                        ctx.fill();

                        // Chain node
                        const isLastKey = lastInserted.key === chain[j];
                        const nw = 40, nh = 28;
                        ctx.fillStyle = isLastKey ? accentColor : cardBg;
                        ctx.strokeStyle = isLastKey ? accentColor : purpleColor;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.roundRect(cx, y + (slotH - nh) / 2, nw, nh, 4);
                        ctx.fill();
                        ctx.stroke();

                        ctx.fillStyle = isLastKey ? '#fff' : textColor;
                        ctx.font = 'bold 12px monospace';
                        ctx.textAlign = 'center';
                        ctx.fillText(chain[j], cx + nw / 2, y + slotH / 2 + 4);

                        cx += nw + 15;
                    }

                    // nil at end
                    ctx.fillStyle = redColor;
                    ctx.font = '10px monospace';
                    ctx.textAlign = 'left';
                    ctx.fillText('nil', cx - 10, y + slotH / 2 + 4);
                }
            }

            // Show hash formula for last insert
            if (lastInserted.key >= 0) {
                ctx.fillStyle = orangeColor;
                ctx.font = '13px monospace';
                ctx.textAlign = 'left';
                ctx.fillText(
                    'hash(' + lastInserted.key + ') = ' + lastInserted.key + ' % ' + TABLE_SIZE + ' = ' + lastInserted.slot,
                    startX, h - 15
                );
            }
        }

        drawHashTable();

        const insertBtn = document.getElementById('hash-insert');
        const resetBtn = document.getElementById('hash-reset');
        const input = document.getElementById('hash-input');

        if (insertBtn) insertBtn.addEventListener('click', () => {
            const key = parseInt(input.value);
            if (isNaN(key) || key < 0) return;
            const slot = hashFn(key);

            // Check if already exists
            if (!table[slot].includes(key)) {
                table[slot].push(key);
            }

            lastInserted = { key, slot };
            drawHashTable();
            input.value = Math.floor(Math.random() * 100);
        });

        if (resetBtn) resetBtn.addEventListener('click', () => {
            table = new Array(TABLE_SIZE).fill(null).map(() => []);
            lastInserted = { key: -1, slot: -1 };
            drawHashTable();
        });
    })();

    // ====================== GRAPH TRAVERSAL ANIMATION ======================
    (function initGraphAnim() {
        const setup = setupCanvas('graph-ds-canvas', 700, 350);
        if (!setup) return;
        const { ctx, w, h } = setup;

        // Define graph positions and edges
        const graphNodes = [
            { id: 0, label: '0', x: 350, y: 40 },
            { id: 1, label: '1', x: 180, y: 120 },
            { id: 2, label: '2', x: 520, y: 120 },
            { id: 3, label: '3', x: 100, y: 230 },
            { id: 4, label: '4', x: 260, y: 230 },
            { id: 5, label: '5', x: 440, y: 230 },
            { id: 6, label: '6', x: 600, y: 230 },
        ];

        const edges = [
            [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [4, 5]
        ];

        const adjList = {};
        for (const n of graphNodes) adjList[n.id] = [];
        for (const [u, v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }

        let visitedOrder = [];
        let currentStep = 0;
        let animTimer = null;
        let traversalType = '';

        function drawGraph() {
            ctx.clearRect(0, 0, w, h);

            // Draw edges
            for (const [u, v] of edges) {
                const nu = graphNodes[u], nv = graphNodes[v];
                ctx.beginPath();
                ctx.moveTo(nu.x, nu.y);
                ctx.lineTo(nv.x, nv.y);
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // Draw nodes
            const r = 22;
            for (const n of graphNodes) {
                const visitIdx = visitedOrder.indexOf(n.id);
                let nodeColor = cardBg;
                let strokeColor = purpleColor;
                let txtColor = textColor;

                if (visitIdx >= 0 && visitIdx < currentStep) {
                    nodeColor = accentColor;
                    strokeColor = accentColor;
                    txtColor = '#fff';
                } else if (visitIdx === currentStep && currentStep < visitedOrder.length) {
                    nodeColor = greenColor;
                    strokeColor = greenColor;
                    txtColor = '#fff';
                }

                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2.5;
                ctx.stroke();

                ctx.fillStyle = txtColor;
                ctx.font = 'bold 15px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(n.label, n.x, n.y);
            }

            ctx.textBaseline = 'alphabetic';

            // Label
            if (traversalType) {
                ctx.fillStyle = textColor;
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'left';
                const visited = visitedOrder.slice(0, currentStep + 1);
                ctx.fillText(traversalType + ' Order: [' + visited.join(', ') + ']', 20, h - 15);
            }
        }

        drawGraph();

        function bfs(start) {
            const visited = new Set();
            const queue = [start];
            visited.add(start);
            const order = [];
            while (queue.length > 0) {
                const node = queue.shift();
                order.push(node);
                for (const neighbor of adjList[node].sort((a, b) => a - b)) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            return order;
        }

        function dfs(start) {
            const visited = new Set();
            const order = [];
            function helper(node) {
                visited.add(node);
                order.push(node);
                for (const neighbor of adjList[node].sort((a, b) => a - b)) {
                    if (!visited.has(neighbor)) helper(neighbor);
                }
            }
            helper(start);
            return order;
        }

        function runTraversal(order, type) {
            if (animTimer) clearInterval(animTimer);
            visitedOrder = order;
            currentStep = 0;
            traversalType = type;
            drawGraph();

            animTimer = setInterval(() => {
                currentStep++;
                drawGraph();
                if (currentStep >= visitedOrder.length) {
                    clearInterval(animTimer);
                    animTimer = null;
                }
            }, 600);
        }

        const bfsBtn = document.getElementById('graph-bfs-btn');
        const dfsBtn = document.getElementById('graph-dfs-btn');
        const resetBtn = document.getElementById('graph-reset-btn');

        if (bfsBtn) bfsBtn.addEventListener('click', () => {
            runTraversal(bfs(0), 'BFS');
        });

        if (dfsBtn) dfsBtn.addEventListener('click', () => {
            runTraversal(dfs(0), 'DFS');
        });

        if (resetBtn) resetBtn.addEventListener('click', () => {
            if (animTimer) clearInterval(animTimer);
            animTimer = null;
            visitedOrder = [];
            currentStep = 0;
            traversalType = '';
            drawGraph();
        });
    })();
}
