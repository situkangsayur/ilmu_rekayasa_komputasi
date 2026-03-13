// ====================== PYTHON DEEP DIVE ======================
sections['lang-python'] = () => `
<h1 class="section-title animate-in">Python Deep Dive</h1>
<p class="section-subtitle animate-in">Dari dasar bahasa hingga REST API, concurrency, dan integrasi lintas bahasa</p>
<p class="animate-in"><em>Ref: Guido van Rossum; "Fluent Python" (Ramalho, 2022); "Python Cookbook" (Beazley & Jones, 2013); docs.python.org</em></p>

<!-- ==================== 1. PENGENALAN PYTHON ==================== -->
<h2 class="animate-in">1. Pengenalan Python</h2>

<div class="card animate-in">
    <h3>Sejarah & Filosofi</h3>
    <p><strong>Python</strong> diciptakan oleh <strong>Guido van Rossum</strong> pada akhir tahun 1980-an di Centrum Wiskunde & Informatica (CWI), Belanda. Versi pertama (0.9.0) dirilis pada <strong>Februari 1991</strong>. Nama "Python" diambil dari acara komedi BBC <em>Monty Python's Flying Circus</em>, bukan dari ular.</p>
    <p>Python dirancang dengan filosofi <strong>"readability counts"</strong> — kode harus mudah dibaca dan dipahami. Guido sering disebut sebagai <em>Benevolent Dictator For Life (BDFL)</em> hingga ia mengundurkan diri dari peran tersebut pada 2018.</p>
</div>

<div class="card animate-in">
    <h3>Timeline Python</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Versi</th><th>Tahun</th><th>Fitur Penting</th></tr>
            <tr><td>0.9.0</td><td>1991</td><td>Rilis pertama — class, exception handling, functions</td></tr>
            <tr><td>1.0</td><td>1994</td><td>lambda, map, filter, reduce</td></tr>
            <tr><td>2.0</td><td>2000</td><td>List comprehension, garbage collector</td></tr>
            <tr><td>3.0</td><td>2008</td><td>print() function, Unicode default, integer division</td></tr>
            <tr><td>3.5</td><td>2015</td><td>Type hints (PEP 484), async/await</td></tr>
            <tr><td>3.6</td><td>2016</td><td>f-strings, variable annotations</td></tr>
            <tr><td>3.8</td><td>2019</td><td>Walrus operator :=, Protocol</td></tr>
            <tr><td>3.10</td><td>2021</td><td>Structural pattern matching (match/case)</td></tr>
            <tr><td>3.11</td><td>2022</td><td>Exception groups, 10-60% faster</td></tr>
            <tr><td>3.12</td><td>2023</td><td>Per-interpreter GIL, improved error messages</td></tr>
            <tr><td>3.13</td><td>2024</td><td>Experimental free-threaded mode (no-GIL)</td></tr>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3>The Zen of Python (PEP 20)</h3>
    <div class="code-block">
<span class="cm">>>> import this</span>

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
    </div>
</div>

<div class="card animate-in">
    <h3>Mengapa Python?</h3>
    <div class="card-grid">
        <div class="info-box">
            <strong>Mudah Dipelajari</strong><br>
            Sintaks sederhana, mendekati pseudocode. Cocok untuk pemula maupun expert.
        </div>
        <div class="info-box">
            <strong>Ekosistem Luas</strong><br>
            PyPI memiliki 400.000+ packages — dari web dev, data science, hingga robotics.
        </div>
        <div class="info-box">
            <strong>Multi-Paradigma</strong><br>
            Mendukung OOP, functional, procedural, dan metaprogramming.
        </div>
        <div class="info-box">
            <strong>Use Cases</strong><br>
            Web (Django, Flask, FastAPI), ML/AI (PyTorch, TensorFlow), Data (Pandas), DevOps, Scripting, IoT.
        </div>
    </div>
</div>

<!-- ==================== 2. VARIABEL & KONSTANTA ==================== -->
<h2 class="animate-in">2. Variabel & Konstanta</h2>

<div class="card animate-in">
    <h3>Dynamic Typing</h3>
    <p>Python adalah bahasa <strong>dynamically typed</strong> — tipe variabel ditentukan saat runtime, bukan saat compile. Variabel hanyalah <em>label</em> yang merujuk ke objek di memori.</p>
    <div class="code-block">
<span class="cm"># Variabel adalah label, bukan kotak penyimpan</span>
x = <span class="num">42</span>          <span class="cm"># x merujuk ke objek int 42</span>
x = <span class="str">"hello"</span>     <span class="cm"># x sekarang merujuk ke objek str "hello"</span>
x = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]   <span class="cm"># x sekarang merujuk ke objek list</span>

<span class="cm"># Cek tipe saat runtime</span>
<span class="fn">print</span>(<span class="fn">type</span>(x))   <span class="cm"># &lt;class 'list'&gt;</span>
<span class="fn">print</span>(<span class="fn">isinstance</span>(x, <span class="type">list</span>))  <span class="cm"># True</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Variable Assignment & Multiple Assignment</h3>
    <div class="code-block">
<span class="cm"># Assignment biasa</span>
name = <span class="str">"Tazkia"</span>
age = <span class="num">25</span>

<span class="cm"># Multiple assignment (tuple unpacking)</span>
a, b, c = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>

<span class="cm"># Swap tanpa temp variable</span>
a, b = b, a

<span class="cm"># Augmented assignment</span>
count = <span class="num">0</span>
count += <span class="num">1</span>   <span class="cm"># count = count + 1</span>
count *= <span class="num">2</span>   <span class="cm"># count = count * 2</span>

<span class="cm"># Walrus operator (Python 3.8+)</span>
<span class="kw">if</span> (n := <span class="fn">len</span>(name)) > <span class="num">3</span>:
    <span class="fn">print</span>(<span class="str">f"Panjang nama: </span>{n}<span class="str">"</span>)
    </div>
</div>

<div class="card animate-in">
    <h3>Konstanta (Konvensi)</h3>
    <p>Python <strong>tidak memiliki</strong> keyword <code>const</code>. Konstanta ditulis dengan <strong>UPPER_CASE</strong> sebagai konvensi — programmer <em>sepakat</em> untuk tidak mengubahnya.</p>
    <div class="code-block">
<span class="cm"># Konvensi konstanta</span>
MAX_CONNECTIONS = <span class="num">100</span>
PI = <span class="num">3.14159265358979</span>
DATABASE_URL = <span class="str">"postgresql://localhost/mydb"</span>
API_VERSION = <span class="str">"v2"</span>

<span class="cm"># Bisa di-enforce dengan @property di class</span>
<span class="kw">class</span> <span class="type">Config</span>:
    @<span class="fn">property</span>
    <span class="kw">def</span> <span class="fn">MAX_RETRIES</span>(<span class="kw">self</span>):
        <span class="kw">return</span> <span class="num">3</span>   <span class="cm"># read-only, cannot be set</span>

<span class="cm"># Atau dengan typing.Final (Python 3.8+)</span>
<span class="kw">from</span> typing <span class="kw">import</span> Final
MAX_SIZE: Final = <span class="num">1024</span>  <span class="cm"># type checker akan warn jika diubah</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Type Hints (Python 3.5+)</h3>
    <p>Type hints tidak mempengaruhi runtime, tapi membantu <strong>IDE</strong>, <strong>mypy</strong>, dan developer lain memahami kode.</p>
    <div class="code-block">
<span class="cm"># Basic type hints</span>
name: <span class="type">str</span> = <span class="str">"Python"</span>
version: <span class="type">float</span> = <span class="num">3.12</span>
is_active: <span class="type">bool</span> = <span class="kw">True</span>

<span class="cm"># Collection types (Python 3.9+)</span>
numbers: <span class="type">list</span>[<span class="type">int</span>] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
mapping: <span class="type">dict</span>[<span class="type">str</span>, <span class="type">int</span>] = {<span class="str">"a"</span>: <span class="num">1</span>}
coords: <span class="type">tuple</span>[<span class="type">float</span>, <span class="type">float</span>] = (<span class="num">1.0</span>, <span class="num">2.0</span>)
unique: <span class="type">set</span>[<span class="type">str</span>] = {<span class="str">"x"</span>, <span class="str">"y"</span>}

<span class="cm"># Optional dan Union</span>
<span class="kw">from</span> typing <span class="kw">import</span> Optional, Union
value: Optional[<span class="type">int</span>] = <span class="kw">None</span>         <span class="cm"># int atau None</span>
data: Union[<span class="type">str</span>, <span class="type">int</span>] = <span class="str">"hello"</span>     <span class="cm"># str atau int</span>

<span class="cm"># Python 3.10+ union syntax</span>
data: <span class="type">str</span> | <span class="type">int</span> = <span class="str">"hello"</span>

<span class="cm"># Function type hints</span>
<span class="kw">def</span> <span class="fn">greet</span>(name: <span class="type">str</span>, times: <span class="type">int</span> = <span class="num">1</span>) -> <span class="type">str</span>:
    <span class="kw">return</span> <span class="str">f"Hello, </span>{name}<span class="str">!"</span> * times
    </div>
</div>

<!-- ==================== 3. TIPE DATA ==================== -->
<h2 class="animate-in">3. Tipe Data</h2>

<div class="card animate-in">
    <h3>Tipe Data Primitif</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Tipe</th><th>Contoh</th><th>Keterangan</th><th>Immutable?</th></tr>
            <tr><td><span class="badge-blue">int</span></td><td><code>42, -7, 0xFF, 0b1010</code></td><td>Bilangan bulat, presisi tak terbatas</td><td>Ya</td></tr>
            <tr><td><span class="badge-green">float</span></td><td><code>3.14, 2.5e10, float('inf')</code></td><td>IEEE 754 double precision (64-bit)</td><td>Ya</td></tr>
            <tr><td><span class="badge-purple">str</span></td><td><code>"hello", 'world', """multi"""</code></td><td>Sequence of Unicode characters</td><td>Ya</td></tr>
            <tr><td><span class="badge-orange">bool</span></td><td><code>True, False</code></td><td>Subclass dari int (True=1, False=0)</td><td>Ya</td></tr>
            <tr><td><span class="badge-red">NoneType</span></td><td><code>None</code></td><td>Singleton, merepresentasikan "tidak ada nilai"</td><td>Ya</td></tr>
            <tr><td><span class="badge-yellow">complex</span></td><td><code>3+4j, complex(3, 4)</code></td><td>Bilangan kompleks</td><td>Ya</td></tr>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3>Tipe Data Koleksi</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="py-list">list</button>
        <button class="tab-btn" data-tab="py-tuple">tuple</button>
        <button class="tab-btn" data-tab="py-dict">dict</button>
        <button class="tab-btn" data-tab="py-set">set</button>
    </div>
    <div class="tab-content active" data-tab-content="py-list">
        <p><strong>list</strong> — ordered, mutable, allows duplicates. Diimplementasikan sebagai dynamic array.</p>
        <div class="code-block">
<span class="cm"># Membuat list</span>
fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
numbers = <span class="fn">list</span>(<span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>))  <span class="cm"># [1, 2, 3, 4, 5]</span>

<span class="cm"># Operasi list</span>
fruits.<span class="fn">append</span>(<span class="str">"date"</span>)       <span class="cm"># Tambah di akhir</span>
fruits.<span class="fn">insert</span>(<span class="num">0</span>, <span class="str">"avocado"</span>) <span class="cm"># Tambah di posisi 0</span>
fruits.<span class="fn">pop</span>()                 <span class="cm"># Hapus dan return elemen terakhir</span>
fruits.<span class="fn">remove</span>(<span class="str">"banana"</span>)     <span class="cm"># Hapus by value</span>

<span class="cm"># Slicing [start:stop:step]</span>
nums = [<span class="num">0</span>,<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>,<span class="num">7</span>,<span class="num">8</span>,<span class="num">9</span>]
nums[<span class="num">2</span>:<span class="num">5</span>]      <span class="cm"># [2, 3, 4]</span>
nums[::<span class="num">2</span>]      <span class="cm"># [0, 2, 4, 6, 8] — setiap 2 langkah</span>
nums[::-<span class="num">1</span>]     <span class="cm"># [9, 8, 7, ...] — reverse</span>

<span class="cm"># List comprehension</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]
evens = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
        </div>
    </div>
    <div class="tab-content" data-tab-content="py-tuple">
        <p><strong>tuple</strong> — ordered, <strong>immutable</strong>, allows duplicates. Digunakan untuk data yang tidak boleh berubah.</p>
        <div class="code-block">
<span class="cm"># Membuat tuple</span>
point = (<span class="num">10</span>, <span class="num">20</span>)
rgb = (<span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>)
single = (<span class="num">42</span>,)   <span class="cm"># trailing comma untuk single element</span>

<span class="cm"># Named tuple — lebih readable</span>
<span class="kw">from</span> collections <span class="kw">import</span> namedtuple
Point = <span class="fn">namedtuple</span>(<span class="str">'Point'</span>, [<span class="str">'x'</span>, <span class="str">'y'</span>])
p = Point(<span class="num">10</span>, <span class="num">20</span>)
<span class="fn">print</span>(p.x, p.y)   <span class="cm"># 10 20</span>

<span class="cm"># Tuple unpacking</span>
x, y = point
first, *rest = (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>)  <span class="cm"># first=1, rest=[2,3,4]</span>

<span class="cm"># Tuple sebagai dict key (karena immutable)</span>
grid = {(<span class="num">0</span>,<span class="num">0</span>): <span class="str">"start"</span>, (<span class="num">1</span>,<span class="num">1</span>): <span class="str">"end"</span>}
        </div>
    </div>
    <div class="tab-content" data-tab-content="py-dict">
        <p><strong>dict</strong> — key-value pairs, ordered (Python 3.7+), mutable. Diimplementasikan sebagai hash table.</p>
        <div class="code-block">
<span class="cm"># Membuat dict</span>
user = {<span class="str">"name"</span>: <span class="str">"Alice"</span>, <span class="str">"age"</span>: <span class="num">30</span>, <span class="str">"active"</span>: <span class="kw">True</span>}
config = <span class="fn">dict</span>(host=<span class="str">"localhost"</span>, port=<span class="num">8080</span>)

<span class="cm"># Akses & modifikasi</span>
user[<span class="str">"email"</span>] = <span class="str">"alice@mail.com"</span>   <span class="cm"># Tambah/update</span>
name = user.<span class="fn">get</span>(<span class="str">"name"</span>, <span class="str">"Unknown"</span>)  <span class="cm"># Safe access dengan default</span>
<span class="kw">del</span> user[<span class="str">"active"</span>]                   <span class="cm"># Hapus key</span>

<span class="cm"># Iterasi</span>
<span class="kw">for</span> key, value <span class="kw">in</span> user.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="str">f"</span>{key}<span class="str">: </span>{value}<span class="str">"</span>)

<span class="cm"># Dict comprehension</span>
squares = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)}
<span class="cm"># {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</span>

<span class="cm"># Merge (Python 3.9+)</span>
merged = {<span class="str">"a"</span>: <span class="num">1</span>} | {<span class="str">"b"</span>: <span class="num">2</span>}  <span class="cm"># {"a": 1, "b": 2}</span>
        </div>
    </div>
    <div class="tab-content" data-tab-content="py-set">
        <p><strong>set</strong> — unordered, mutable, <strong>no duplicates</strong>. Digunakan untuk operasi matematika himpunan.</p>
        <div class="code-block">
<span class="cm"># Membuat set</span>
colors = {<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>}
nums = <span class="fn">set</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>])  <span class="cm"># {1, 2, 3} — duplikat dihapus</span>

<span class="cm"># Operasi set</span>
a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>}
a | b    <span class="cm"># Union:        {1, 2, 3, 4, 5}</span>
a & b    <span class="cm"># Intersection: {3}</span>
a - b    <span class="cm"># Difference:   {1, 2}</span>
a ^ b    <span class="cm"># Symmetric:    {1, 2, 4, 5}</span>

<span class="cm"># frozenset — immutable set (bisa jadi dict key)</span>
fs = <span class="fn">frozenset</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>])
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Type Conversion & Mutable vs Immutable</h3>
    <div class="card-grid">
        <div class="info-box">
            <strong>Type Conversion</strong>
            <div class="code-block">
<span class="fn">int</span>(<span class="str">"42"</span>)       <span class="cm"># 42</span>
<span class="fn">float</span>(<span class="str">"3.14"</span>)   <span class="cm"># 3.14</span>
<span class="fn">str</span>(<span class="num">100</span>)        <span class="cm"># "100"</span>
<span class="fn">list</span>(<span class="str">"abc"</span>)     <span class="cm"># ['a','b','c']</span>
<span class="fn">tuple</span>([<span class="num">1</span>,<span class="num">2</span>])   <span class="cm"># (1, 2)</span>
<span class="fn">set</span>([<span class="num">1</span>,<span class="num">1</span>,<span class="num">2</span>])   <span class="cm"># {1, 2}</span>
<span class="fn">bool</span>(<span class="num">0</span>)        <span class="cm"># False</span>
<span class="fn">bool</span>(<span class="str">""</span>)       <span class="cm"># False</span>
<span class="fn">bool</span>(<span class="str">"hi"</span>)     <span class="cm"># True</span>
            </div>
        </div>
        <div class="warn-box">
            <strong>Mutable vs Immutable</strong><br><br>
            <strong>Immutable:</strong> int, float, str, bool, tuple, frozenset, bytes<br>
            Tidak bisa diubah setelah dibuat. Operasi selalu membuat objek baru.<br><br>
            <strong>Mutable:</strong> list, dict, set, bytearray<br>
            Bisa diubah di tempat (in-place). Hati-hati dengan aliasing!<br><br>
            <div class="code-block">
<span class="cm"># Aliasing trap</span>
a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = a        <span class="cm"># b merujuk objek SAMA</span>
b.<span class="fn">append</span>(<span class="num">4</span>)
<span class="fn">print</span>(a)     <span class="cm"># [1, 2, 3, 4] — a juga berubah!</span>

<span class="cm"># Solusi: copy</span>
b = a.<span class="fn">copy</span>()      <span class="cm"># shallow copy</span>
b = a[:]          <span class="cm"># shallow copy via slice</span>
<span class="kw">import</span> copy
b = copy.<span class="fn">deepcopy</span>(a)  <span class="cm"># deep copy</span>
            </div>
        </div>
    </div>
</div>

<!-- ==================== 4. PRINT & LOGGING ==================== -->
<h2 class="animate-in">4. Print & Logging</h2>

<div class="card animate-in">
    <h3>print() dan f-strings</h3>
    <div class="code-block">
<span class="cm"># print() dasar</span>
<span class="fn">print</span>(<span class="str">"Hello, World!"</span>)
<span class="fn">print</span>(<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>, sep=<span class="str">", "</span>)  <span class="cm"># a, b, c</span>
<span class="fn">print</span>(<span class="str">"no newline"</span>, end=<span class="str">""</span>)        <span class="cm"># tanpa newline</span>

<span class="cm"># f-string (Python 3.6+) — cara terbaik</span>
name = <span class="str">"Alice"</span>
age = <span class="num">30</span>
<span class="fn">print</span>(<span class="str">f"Name: </span>{name}<span class="str">, Age: </span>{age}<span class="str">"</span>)

<span class="cm"># f-string formatting</span>
pi = <span class="num">3.14159</span>
<span class="fn">print</span>(<span class="str">f"Pi: </span>{pi:<span class="num">.2f</span>}<span class="str">"</span>)           <span class="cm"># Pi: 3.14</span>
<span class="fn">print</span>(<span class="str">f"Hex: </span>{<span class="num">255</span>:<span class="num">#x</span>}<span class="str">"</span>)          <span class="cm"># Hex: 0xff</span>
<span class="fn">print</span>(<span class="str">f"Padded: </span>{<span class="num">42</span>:<span class="num">05d</span>}<span class="str">"</span>)       <span class="cm"># Padded: 00042</span>
<span class="fn">print</span>(<span class="str">f"Big: </span>{<span class="num">1000000</span>:<span class="num">,</span>}<span class="str">"</span>)       <span class="cm"># Big: 1,000,000</span>
<span class="fn">print</span>(<span class="str">f"Center: </span>{<span class="str">'hi'</span>:<span class="num">^10</span>}<span class="str">"</span>)    <span class="cm"># Center:    hi    </span>

<span class="cm"># f-string debugging (Python 3.8+)</span>
x = <span class="num">10</span>
<span class="fn">print</span>(<span class="str">f"</span>{x=}<span class="str">"</span>)   <span class="cm"># x=10</span>
    </div>
</div>

<div class="card animate-in">
    <h3>String Formatting Methods</h3>
    <div class="code-block">
<span class="cm"># Method 1: f-strings (recommended, Python 3.6+)</span>
name = <span class="str">"World"</span>
<span class="fn">print</span>(<span class="str">f"Hello, </span>{name}<span class="str">!"</span>)

<span class="cm"># Method 2: str.format()</span>
<span class="fn">print</span>(<span class="str">"Hello, {}!"</span>.<span class="fn">format</span>(name))
<span class="fn">print</span>(<span class="str">"{0} vs {1}"</span>.<span class="fn">format</span>(<span class="str">"A"</span>, <span class="str">"B"</span>))
<span class="fn">print</span>(<span class="str">"{name}: {score}"</span>.<span class="fn">format</span>(name=<span class="str">"Alice"</span>, score=<span class="num">95</span>))

<span class="cm"># Method 3: % operator (C-style, legacy)</span>
<span class="fn">print</span>(<span class="str">"Hello, %s! Score: %d"</span> % (name, <span class="num">95</span>))

<span class="cm"># Method 4: Template strings (untuk user input — aman)</span>
<span class="kw">from</span> string <span class="kw">import</span> Template
t = Template(<span class="str">"Hello, $name!"</span>)
<span class="fn">print</span>(t.<span class="fn">substitute</span>(name=<span class="str">"World"</span>))
    </div>
</div>

<div class="card animate-in">
    <h3>Logging Module</h3>
    <p>Gunakan <code>logging</code> daripada <code>print()</code> untuk aplikasi production. Logging mendukung level, formatting, dan output ke file.</p>
    <div class="code-block">
<span class="kw">import</span> logging

<span class="cm"># Basic configuration</span>
logging.<span class="fn">basicConfig</span>(
    level=logging.DEBUG,
    format=<span class="str">'%(asctime)s - %(name)s - %(levelname)s - %(message)s'</span>,
    handlers=[
        logging.<span class="fn">FileHandler</span>(<span class="str">'app.log'</span>),
        logging.<span class="fn">StreamHandler</span>()
    ]
)

logger = logging.<span class="fn">getLogger</span>(<span class="str">__name__</span>)

<span class="cm"># 5 Level logging (ascending severity)</span>
logger.<span class="fn">debug</span>(<span class="str">"Detail untuk debugging"</span>)       <span class="cm"># Level 10</span>
logger.<span class="fn">info</span>(<span class="str">"Informasi umum"</span>)                <span class="cm"># Level 20</span>
logger.<span class="fn">warning</span>(<span class="str">"Peringatan, masih jalan"</span>)     <span class="cm"># Level 30</span>
logger.<span class="fn">error</span>(<span class="str">"Error terjadi"</span>)                 <span class="cm"># Level 40</span>
logger.<span class="fn">critical</span>(<span class="str">"Fatal! Aplikasi berhenti"</span>)  <span class="cm"># Level 50</span>

<span class="cm"># Structured logging dengan extra data</span>
logger.<span class="fn">info</span>(<span class="str">"User login"</span>, extra={<span class="str">"user_id"</span>: <span class="num">42</span>, <span class="str">"ip"</span>: <span class="str">"192.168.1.1"</span>})
    </div>
    <div class="flow-diagram" style="margin-top: 15px;">
        <div class="flow-node" style="background: var(--bg2); border-color: var(--text2);">DEBUG</div>
        <div class="flow-arrow">&#8594;</div>
        <div class="flow-node" style="background: var(--bg2); border-color: var(--accent);">INFO</div>
        <div class="flow-arrow">&#8594;</div>
        <div class="flow-node" style="background: var(--bg2); border-color: var(--orange);">WARNING</div>
        <div class="flow-arrow">&#8594;</div>
        <div class="flow-node" style="background: var(--bg2); border-color: var(--red);">ERROR</div>
        <div class="flow-arrow">&#8594;</div>
        <div class="flow-node" style="background: var(--bg2); border-color: #dc2626;">CRITICAL</div>
    </div>
</div>

<!-- ==================== 5. CONTROL FLOW ==================== -->
<h2 class="animate-in">5. Control Flow</h2>

<div class="card animate-in">
    <h3>if / elif / else</h3>
    <div class="code-block">
score = <span class="num">85</span>

<span class="kw">if</span> score >= <span class="num">90</span>:
    grade = <span class="str">"A"</span>
<span class="kw">elif</span> score >= <span class="num">80</span>:
    grade = <span class="str">"B"</span>
<span class="kw">elif</span> score >= <span class="num">70</span>:
    grade = <span class="str">"C"</span>
<span class="kw">else</span>:
    grade = <span class="str">"D"</span>

<span class="cm"># Ternary (conditional expression)</span>
status = <span class="str">"pass"</span> <span class="kw">if</span> score >= <span class="num">60</span> <span class="kw">else</span> <span class="str">"fail"</span>

<span class="cm"># Truthy / Falsy</span>
<span class="cm"># Falsy: None, 0, 0.0, "", [], {}, set(), False</span>
<span class="cm"># Semua yang lain adalah Truthy</span>
<span class="kw">if</span> my_list:   <span class="cm"># lebih Pythonic dari len(my_list) > 0</span>
    <span class="fn">print</span>(<span class="str">"list is not empty"</span>)
    </div>
</div>

<div class="card animate-in">
    <h3>for Loop</h3>
    <div class="code-block">
<span class="cm"># Iterasi sederhana</span>
<span class="kw">for</span> fruit <span class="kw">in</span> [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]:
    <span class="fn">print</span>(fruit)

<span class="cm"># range(start, stop, step)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):          <span class="cm"># 0, 1, 2, 3, 4</span>
    <span class="fn">print</span>(i)
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, <span class="num">10</span>, <span class="num">2</span>):  <span class="cm"># 2, 4, 6, 8</span>
    <span class="fn">print</span>(i)

<span class="cm"># enumerate — index + value</span>
<span class="kw">for</span> i, name <span class="kw">in</span> <span class="fn">enumerate</span>([<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>], start=<span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"</span>{i}<span class="str">. </span>{name}<span class="str">"</span>)  <span class="cm"># 1. a, 2. b, 3. c</span>

<span class="cm"># zip — iterasi paralel</span>
names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]
scores = [<span class="num">90</span>, <span class="num">85</span>]
<span class="kw">for</span> name, score <span class="kw">in</span> <span class="fn">zip</span>(names, scores):
    <span class="fn">print</span>(<span class="str">f"</span>{name}<span class="str">: </span>{score}<span class="str">"</span>)

<span class="cm"># for/else — else dieksekusi jika loop selesai tanpa break</span>
<span class="kw">for</span> n <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, <span class="num">10</span>):
    <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, n):
        <span class="kw">if</span> n % x == <span class="num">0</span>:
            <span class="kw">break</span>
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">f"</span>{n}<span class="str"> is prime"</span>)
    </div>
</div>

<div class="card animate-in">
    <h3>while Loop</h3>
    <div class="code-block">
<span class="cm"># while dasar</span>
count = <span class="num">0</span>
<span class="kw">while</span> count < <span class="num">5</span>:
    <span class="fn">print</span>(count)
    count += <span class="num">1</span>

<span class="cm"># while/else</span>
<span class="kw">while</span> count > <span class="num">0</span>:
    count -= <span class="num">1</span>
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Loop selesai normal (tanpa break)"</span>)

<span class="cm"># Infinite loop dengan break</span>
<span class="kw">while</span> <span class="kw">True</span>:
    line = <span class="fn">input</span>(<span class="str">"Enter (q to quit): "</span>)
    <span class="kw">if</span> line == <span class="str">"q"</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(<span class="str">f"You said: </span>{line}<span class="str">"</span>)
    </div>
</div>

<div class="card animate-in">
    <h3>match / case (Python 3.10+)</h3>
    <p>Structural pattern matching — jauh lebih powerful dari switch/case biasa. Bisa match structure, type, dan guard conditions.</p>
    <div class="code-block">
<span class="cm"># Basic matching</span>
<span class="kw">match</span> command:
    <span class="kw">case</span> <span class="str">"quit"</span>:
        <span class="fn">print</span>(<span class="str">"Exiting..."</span>)
    <span class="kw">case</span> <span class="str">"hello"</span>:
        <span class="fn">print</span>(<span class="str">"Hi there!"</span>)
    <span class="kw">case</span> _:
        <span class="fn">print</span>(<span class="str">"Unknown command"</span>)

<span class="cm"># Structural matching</span>
<span class="kw">match</span> point:
    <span class="kw">case</span> (<span class="num">0</span>, <span class="num">0</span>):
        <span class="fn">print</span>(<span class="str">"Origin"</span>)
    <span class="kw">case</span> (x, <span class="num">0</span>):
        <span class="fn">print</span>(<span class="str">f"On x-axis at </span>{x}<span class="str">"</span>)
    <span class="kw">case</span> (<span class="num">0</span>, y):
        <span class="fn">print</span>(<span class="str">f"On y-axis at </span>{y}<span class="str">"</span>)
    <span class="kw">case</span> (x, y) <span class="kw">if</span> x == y:
        <span class="fn">print</span>(<span class="str">f"On diagonal at </span>{x}<span class="str">"</span>)
    <span class="kw">case</span> (x, y):
        <span class="fn">print</span>(<span class="str">f"At </span>{x}<span class="str">, </span>{y}<span class="str">"</span>)

<span class="cm"># Type matching</span>
<span class="kw">match</span> event:
    <span class="kw">case</span> <span class="type">Click</span>(position=(x, y)):
        <span class="fn">print</span>(<span class="str">f"Click at </span>{x}<span class="str">,</span>{y}<span class="str">"</span>)
    <span class="kw">case</span> <span class="type">KeyPress</span>(key=<span class="str">"q"</span>):
        quit()
    </div>
</div>

<div class="card animate-in">
    <h3>Comprehensions</h3>
    <div class="code-block">
<span class="cm"># List comprehension</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]

<span class="cm"># Dengan kondisi</span>
evens = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]

<span class="cm"># Nested comprehension</span>
matrix = [[<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>], [<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>], [<span class="num">7</span>,<span class="num">8</span>,<span class="num">9</span>]]
flat = [x <span class="kw">for</span> row <span class="kw">in</span> matrix <span class="kw">for</span> x <span class="kw">in</span> row]
<span class="cm"># [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>

<span class="cm"># Dict comprehension</span>
word_lengths = {w: <span class="fn">len</span>(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"hello"</span>, <span class="str">"world"</span>]}

<span class="cm"># Set comprehension</span>
unique_lengths = {<span class="fn">len</span>(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"hi"</span>, <span class="str">"no"</span>, <span class="str">"yes"</span>]}
<span class="cm"># {2, 3}</span>

<span class="cm"># Generator expression (lazy evaluation, hemat memori)</span>
total = <span class="fn">sum</span>(x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1000000</span>))
    </div>
</div>

<!-- ==================== 6. FUNCTIONS ==================== -->
<h2 class="animate-in">6. Functions</h2>

<div class="card animate-in">
    <h3>Definisi Fungsi & Return</h3>
    <div class="code-block">
<span class="cm"># Fungsi dasar</span>
<span class="kw">def</span> <span class="fn">greet</span>(name: <span class="type">str</span>) -> <span class="type">str</span>:
    <span class="str">"""Memberikan salam kepada user."""</span>
    <span class="kw">return</span> <span class="str">f"Hello, </span>{name}<span class="str">!"</span>

<span class="cm"># Multiple return values (tuple)</span>
<span class="kw">def</span> <span class="fn">divmod_custom</span>(a: <span class="type">int</span>, b: <span class="type">int</span>) -> <span class="type">tuple</span>[<span class="type">int</span>, <span class="type">int</span>]:
    <span class="kw">return</span> a // b, a % b

quotient, remainder = <span class="fn">divmod_custom</span>(<span class="num">17</span>, <span class="num">5</span>)

<span class="cm"># Docstring conventions (Google style)</span>
<span class="kw">def</span> <span class="fn">calculate_area</span>(length: <span class="type">float</span>, width: <span class="type">float</span>) -> <span class="type">float</span>:
    <span class="str">"""Calculate the area of a rectangle.

    Args:
        length: The length of the rectangle.
        width: The width of the rectangle.

    Returns:
        The area as a float.

    Raises:
        ValueError: If length or width is negative.
    """</span>
    <span class="kw">if</span> length < <span class="num">0</span> <span class="kw">or</span> width < <span class="num">0</span>:
        <span class="kw">raise</span> <span class="type">ValueError</span>(<span class="str">"Dimensions must be positive"</span>)
    <span class="kw">return</span> length * width
    </div>
</div>

<div class="card animate-in">
    <h3>Default Arguments, *args, **kwargs</h3>
    <div class="code-block">
<span class="cm"># Default arguments</span>
<span class="kw">def</span> <span class="fn">connect</span>(host: <span class="type">str</span> = <span class="str">"localhost"</span>, port: <span class="type">int</span> = <span class="num">5432</span>) -> <span class="type">str</span>:
    <span class="kw">return</span> <span class="str">f"</span>{host}<span class="str">:</span>{port}<span class="str">"</span>

<span class="fn">connect</span>()                    <span class="cm"># localhost:5432</span>
<span class="fn">connect</span>(<span class="str">"db.example.com"</span>)    <span class="cm"># db.example.com:5432</span>
<span class="fn">connect</span>(port=<span class="num">3306</span>)           <span class="cm"># localhost:3306</span>

<span class="cm"># *args — variadic positional arguments</span>
<span class="kw">def</span> <span class="fn">sum_all</span>(*args: <span class="type">int</span>) -> <span class="type">int</span>:
    <span class="kw">return</span> <span class="fn">sum</span>(args)

<span class="fn">sum_all</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>)  <span class="cm"># 6</span>

<span class="cm"># **kwargs — variadic keyword arguments</span>
<span class="kw">def</span> <span class="fn">build_profile</span>(**kwargs) -> <span class="type">dict</span>:
    <span class="kw">return</span> kwargs

<span class="fn">build_profile</span>(name=<span class="str">"Alice"</span>, age=<span class="num">30</span>, role=<span class="str">"dev"</span>)
<span class="cm"># {'name': 'Alice', 'age': 30, 'role': 'dev'}</span>

<span class="cm"># Kombinasi (urutan harus benar!)</span>
<span class="kw">def</span> <span class="fn">func</span>(pos, /, normal, *, kw_only, **kwargs):
    <span class="kw">pass</span>
<span class="cm"># pos      — positional-only (sebelum /)</span>
<span class="cm"># normal   — normal (positional atau keyword)</span>
<span class="cm"># kw_only  — keyword-only (setelah *)</span>
<span class="cm"># **kwargs — remaining keyword args</span>

<span class="cm"># PERINGATAN: Mutable default argument!</span>
<span class="kw">def</span> <span class="fn">bad</span>(items=[]):   <span class="cm"># BUG! list di-share antar calls</span>
    items.<span class="fn">append</span>(<span class="num">1</span>)
    <span class="kw">return</span> items

<span class="kw">def</span> <span class="fn">good</span>(items=<span class="kw">None</span>):  <span class="cm"># Solusi: gunakan None</span>
    <span class="kw">if</span> items <span class="kw">is</span> <span class="kw">None</span>:
        items = []
    items.<span class="fn">append</span>(<span class="num">1</span>)
    <span class="kw">return</span> items
    </div>
</div>

<div class="card animate-in">
    <h3>Lambda Functions</h3>
    <div class="code-block">
<span class="cm"># Lambda — anonymous function, satu ekspresi</span>
square = <span class="kw">lambda</span> x: x ** <span class="num">2</span>
add = <span class="kw">lambda</span> a, b: a + b

<span class="cm"># Sering digunakan dengan higher-order functions</span>
names = [<span class="str">"Charlie"</span>, <span class="str">"Alice"</span>, <span class="str">"Bob"</span>]
<span class="fn">sorted</span>(names, key=<span class="kw">lambda</span> n: <span class="fn">len</span>(n))  <span class="cm"># sort by length</span>

students = [(<span class="str">"Alice"</span>, <span class="num">90</span>), (<span class="str">"Bob"</span>, <span class="num">85</span>), (<span class="str">"Charlie"</span>, <span class="num">92</span>)]
<span class="fn">sorted</span>(students, key=<span class="kw">lambda</span> s: s[<span class="num">1</span>], reverse=<span class="kw">True</span>)

<span class="cm"># map, filter, reduce</span>
nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
doubled = <span class="fn">list</span>(<span class="fn">map</span>(<span class="kw">lambda</span> x: x * <span class="num">2</span>, nums))
evens = <span class="fn">list</span>(<span class="fn">filter</span>(<span class="kw">lambda</span> x: x % <span class="num">2</span> == <span class="num">0</span>, nums))

<span class="kw">from</span> functools <span class="kw">import</span> reduce
total = <span class="fn">reduce</span>(<span class="kw">lambda</span> a, b: a + b, nums)  <span class="cm"># 15</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Decorators</h3>
    <p>Decorator adalah fungsi yang membungkus fungsi lain untuk menambahkan fungsionalitas tanpa mengubah kode aslinya. Implementasi dari <strong>Higher-Order Function</strong> pattern.</p>
    <div class="code-block">
<span class="kw">import</span> functools
<span class="kw">import</span> time

<span class="cm"># Decorator untuk mengukur waktu eksekusi</span>
<span class="kw">def</span> <span class="fn">timer</span>(func):
    @functools.<span class="fn">wraps</span>(func)
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        start = time.<span class="fn">perf_counter</span>()
        result = <span class="fn">func</span>(*args, **kwargs)
        elapsed = time.<span class="fn">perf_counter</span>() - start
        <span class="fn">print</span>(<span class="str">f"</span>{func.__name__}<span class="str"> took </span>{elapsed:<span class="num">.4f</span>}<span class="str">s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

@timer
<span class="kw">def</span> <span class="fn">slow_function</span>():
    time.<span class="fn">sleep</span>(<span class="num">1</span>)
    <span class="kw">return</span> <span class="str">"done"</span>

<span class="cm"># Decorator dengan argument</span>
<span class="kw">def</span> <span class="fn">retry</span>(max_attempts: <span class="type">int</span> = <span class="num">3</span>):
    <span class="kw">def</span> <span class="fn">decorator</span>(func):
        @functools.<span class="fn">wraps</span>(func)
        <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
            <span class="kw">for</span> attempt <span class="kw">in</span> <span class="fn">range</span>(max_attempts):
                <span class="kw">try</span>:
                    <span class="kw">return</span> <span class="fn">func</span>(*args, **kwargs)
                <span class="kw">except</span> <span class="type">Exception</span> <span class="kw">as</span> e:
                    <span class="kw">if</span> attempt == max_attempts - <span class="num">1</span>:
                        <span class="kw">raise</span>
                    <span class="fn">print</span>(<span class="str">f"Retry </span>{attempt + <span class="num">1</span>}<span class="str">: </span>{e}<span class="str">"</span>)
        <span class="kw">return</span> wrapper
    <span class="kw">return</span> decorator

@retry(max_attempts=<span class="num">5</span>)
<span class="kw">def</span> <span class="fn">fetch_data</span>(url):
    ...
    </div>
</div>

<div class="card animate-in">
    <h3>Generators (yield)</h3>
    <p>Generator menghasilkan nilai satu per satu (lazy evaluation) — sangat hemat memori untuk data besar.</p>
    <div class="code-block">
<span class="cm"># Generator function</span>
<span class="kw">def</span> <span class="fn">fibonacci</span>():
    a, b = <span class="num">0</span>, <span class="num">1</span>
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">yield</span> a
        a, b = b, a + b

<span class="cm"># Menggunakan generator</span>
fib = <span class="fn">fibonacci</span>()
<span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    <span class="fn">print</span>(<span class="fn">next</span>(fib), end=<span class="str">" "</span>)
<span class="cm"># 0 1 1 2 3 5 8 13 21 34</span>

<span class="cm"># Generator untuk membaca file besar line by line</span>
<span class="kw">def</span> <span class="fn">read_large_file</span>(path: <span class="type">str</span>):
    <span class="kw">with</span> <span class="fn">open</span>(path) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">yield</span> line.<span class="fn">strip</span>()

<span class="cm"># yield from — delegate ke sub-generator</span>
<span class="kw">def</span> <span class="fn">chain</span>(*iterables):
    <span class="kw">for</span> it <span class="kw">in</span> iterables:
        <span class="kw">yield from</span> it

<span class="fn">list</span>(<span class="fn">chain</span>([<span class="num">1</span>,<span class="num">2</span>], [<span class="num">3</span>,<span class="num">4</span>]))  <span class="cm"># [1, 2, 3, 4]</span>
    </div>
</div>

<!-- ==================== 7. CLASS & OOP ==================== -->
<h2 class="animate-in">7. Class & OOP</h2>

<div class="card animate-in">
    <h3>Class Dasar</h3>
    <div class="code-block">
<span class="kw">class</span> <span class="type">User</span>:
    <span class="str">"""Representasi user dalam sistem."""</span>

    <span class="cm"># Class variable — shared by all instances</span>
    user_count: <span class="type">int</span> = <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, name: <span class="type">str</span>, email: <span class="type">str</span>):
        <span class="cm"># Instance variables — unique per instance</span>
        <span class="kw">self</span>.name = name
        <span class="kw">self</span>.email = email
        <span class="kw">self</span>._active = <span class="kw">True</span>     <span class="cm"># convention: "protected"</span>
        <span class="kw">self</span>.__secret = <span class="str">"xyz"</span>   <span class="cm"># name mangling: _User__secret</span>
        User.user_count += <span class="num">1</span>

    <span class="kw">def</span> <span class="fn">greet</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"Hello, I'm </span>{<span class="kw">self</span>.name}<span class="str">"</span>

    <span class="kw">def</span> <span class="fn">__str__</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"User(</span>{<span class="kw">self</span>.name}<span class="str">)"</span>

    <span class="kw">def</span> <span class="fn">__repr__</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"User(name=</span>{<span class="kw">self</span>.name!r}<span class="str">, email=</span>{<span class="kw">self</span>.email!r}<span class="str">)"</span>

<span class="cm"># Penggunaan</span>
alice = User(<span class="str">"Alice"</span>, <span class="str">"alice@mail.com"</span>)
<span class="fn">print</span>(alice.<span class="fn">greet</span>())      <span class="cm"># Hello, I'm Alice</span>
<span class="fn">print</span>(User.user_count)    <span class="cm"># 1</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Inheritance & super()</h3>
    <div class="code-block">
<span class="kw">class</span> <span class="type">Animal</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, name: <span class="type">str</span>):
        <span class="kw">self</span>.name = name

    <span class="kw">def</span> <span class="fn">speak</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">raise</span> <span class="type">NotImplementedError</span>

<span class="kw">class</span> <span class="type">Dog</span>(<span class="type">Animal</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, name: <span class="type">str</span>, breed: <span class="type">str</span>):
        <span class="fn">super</span>().<span class="fn">__init__</span>(name)  <span class="cm"># panggil parent __init__</span>
        <span class="kw">self</span>.breed = breed

    <span class="kw">def</span> <span class="fn">speak</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"</span>{<span class="kw">self</span>.name}<span class="str"> says Woof!"</span>

<span class="kw">class</span> <span class="type">Cat</span>(<span class="type">Animal</span>):
    <span class="kw">def</span> <span class="fn">speak</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"</span>{<span class="kw">self</span>.name}<span class="str"> says Meow!"</span>

<span class="cm"># Polymorphism</span>
<span class="kw">def</span> <span class="fn">animal_sound</span>(animal: <span class="type">Animal</span>):
    <span class="fn">print</span>(animal.<span class="fn">speak</span>())

<span class="fn">animal_sound</span>(Dog(<span class="str">"Rex"</span>, <span class="str">"German Shepherd"</span>))  <span class="cm"># Rex says Woof!</span>
<span class="fn">animal_sound</span>(Cat(<span class="str">"Whiskers"</span>))               <span class="cm"># Whiskers says Meow!</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Multiple Inheritance & MRO</h3>
    <div class="code-block">
<span class="kw">class</span> <span class="type">Flyable</span>:
    <span class="kw">def</span> <span class="fn">fly</span>(<span class="kw">self</span>):
        <span class="kw">return</span> <span class="str">"Flying!"</span>

<span class="kw">class</span> <span class="type">Swimmable</span>:
    <span class="kw">def</span> <span class="fn">swim</span>(<span class="kw">self</span>):
        <span class="kw">return</span> <span class="str">"Swimming!"</span>

<span class="kw">class</span> <span class="type">Duck</span>(<span class="type">Animal</span>, <span class="type">Flyable</span>, <span class="type">Swimmable</span>):
    <span class="kw">def</span> <span class="fn">speak</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">"Quack!"</span>

donald = Duck(<span class="str">"Donald"</span>)
donald.<span class="fn">fly</span>()    <span class="cm"># Flying!</span>
donald.<span class="fn">swim</span>()   <span class="cm"># Swimming!</span>

<span class="cm"># MRO — Method Resolution Order (C3 linearization)</span>
<span class="fn">print</span>(Duck.<span class="fn">mro</span>())
<span class="cm"># [Duck, Animal, Flyable, Swimmable, object]</span>

<span class="cm"># Diamond problem — Python menyelesaikannya dengan MRO</span>
<span class="kw">class</span> <span class="type">A</span>:
    <span class="kw">def</span> <span class="fn">method</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="str">"A"</span>
<span class="kw">class</span> <span class="type">B</span>(<span class="type">A</span>):
    <span class="kw">def</span> <span class="fn">method</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="str">"B"</span>
<span class="kw">class</span> <span class="type">C</span>(<span class="type">A</span>):
    <span class="kw">def</span> <span class="fn">method</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="str">"C"</span>
<span class="kw">class</span> <span class="type">D</span>(<span class="type">B</span>, <span class="type">C</span>):
    <span class="kw">pass</span>
<span class="fn">print</span>(D().<span class="fn">method</span>())  <span class="cm"># "B" — MRO: D -> B -> C -> A</span>
    </div>
</div>

<div class="card animate-in">
    <h3>@property, @staticmethod, @classmethod</h3>
    <div class="code-block">
<span class="kw">class</span> <span class="type">Circle</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, radius: <span class="type">float</span>):
        <span class="kw">self</span>._radius = radius

    @<span class="fn">property</span>
    <span class="kw">def</span> <span class="fn">radius</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="kw">return</span> <span class="kw">self</span>._radius

    @radius.<span class="fn">setter</span>
    <span class="kw">def</span> <span class="fn">radius</span>(<span class="kw">self</span>, value: <span class="type">float</span>):
        <span class="kw">if</span> value < <span class="num">0</span>:
            <span class="kw">raise</span> <span class="type">ValueError</span>(<span class="str">"Radius must be positive"</span>)
        <span class="kw">self</span>._radius = value

    @<span class="fn">property</span>
    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="kw">return</span> <span class="num">3.14159</span> * <span class="kw">self</span>._radius ** <span class="num">2</span>

    @<span class="fn">staticmethod</span>
    <span class="kw">def</span> <span class="fn">is_valid_radius</span>(value: <span class="type">float</span>) -> <span class="type">bool</span>:
        <span class="str">"""Tidak perlu self atau cls."""</span>
        <span class="kw">return</span> value > <span class="num">0</span>

    @<span class="fn">classmethod</span>
    <span class="kw">def</span> <span class="fn">from_diameter</span>(cls, diameter: <span class="type">float</span>) -> <span class="str">"Circle"</span>:
        <span class="str">"""Factory method — alternative constructor."""</span>
        <span class="kw">return</span> <span class="fn">cls</span>(diameter / <span class="num">2</span>)

c = Circle.<span class="fn">from_diameter</span>(<span class="num">10</span>)  <span class="cm"># radius = 5</span>
<span class="fn">print</span>(c.area)               <span class="cm"># 78.53975 (accessed like attribute)</span>
c.radius = <span class="num">7</span>                <span class="cm"># setter called, validation runs</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Dunder Methods (Magic Methods)</h3>
    <div class="code-block">
<span class="kw">class</span> <span class="type">Vector</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, x: <span class="type">float</span>, y: <span class="type">float</span>):
        <span class="kw">self</span>.x = x
        <span class="kw">self</span>.y = y

    <span class="kw">def</span> <span class="fn">__repr__</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="str">f"Vector(</span>{<span class="kw">self</span>.x}<span class="str">, </span>{<span class="kw">self</span>.y}<span class="str">)"</span>
    <span class="kw">def</span> <span class="fn">__str__</span>(<span class="kw">self</span>):  <span class="kw">return</span> <span class="str">f"(</span>{<span class="kw">self</span>.x}<span class="str">, </span>{<span class="kw">self</span>.y}<span class="str">)"</span>

    <span class="cm"># Arithmetic</span>
    <span class="kw">def</span> <span class="fn">__add__</span>(<span class="kw">self</span>, other):  <span class="kw">return</span> Vector(<span class="kw">self</span>.x + other.x, <span class="kw">self</span>.y + other.y)
    <span class="kw">def</span> <span class="fn">__sub__</span>(<span class="kw">self</span>, other):  <span class="kw">return</span> Vector(<span class="kw">self</span>.x - other.x, <span class="kw">self</span>.y - other.y)
    <span class="kw">def</span> <span class="fn">__mul__</span>(<span class="kw">self</span>, scalar): <span class="kw">return</span> Vector(<span class="kw">self</span>.x * scalar, <span class="kw">self</span>.y * scalar)
    <span class="kw">def</span> <span class="fn">__abs__</span>(<span class="kw">self</span>):         <span class="kw">return</span> (<span class="kw">self</span>.x**<span class="num">2</span> + <span class="kw">self</span>.y**<span class="num">2</span>) ** <span class="num">0.5</span>

    <span class="cm"># Comparison</span>
    <span class="kw">def</span> <span class="fn">__eq__</span>(<span class="kw">self</span>, other):   <span class="kw">return</span> <span class="kw">self</span>.x == other.x <span class="kw">and</span> <span class="kw">self</span>.y == other.y
    <span class="kw">def</span> <span class="fn">__lt__</span>(<span class="kw">self</span>, other):   <span class="kw">return</span> <span class="fn">abs</span>(<span class="kw">self</span>) < <span class="fn">abs</span>(other)

    <span class="cm"># Container</span>
    <span class="kw">def</span> <span class="fn">__len__</span>(<span class="kw">self</span>):         <span class="kw">return</span> <span class="num">2</span>
    <span class="kw">def</span> <span class="fn">__getitem__</span>(<span class="kw">self</span>, i): <span class="kw">return</span> (<span class="kw">self</span>.x, <span class="kw">self</span>.y)[i]
    <span class="kw">def</span> <span class="fn">__iter__</span>(<span class="kw">self</span>):       <span class="kw">yield</span> <span class="kw">self</span>.x; <span class="kw">yield</span> <span class="kw">self</span>.y

    <span class="cm"># Hashable (untuk dict key / set)</span>
    <span class="kw">def</span> <span class="fn">__hash__</span>(<span class="kw">self</span>):       <span class="kw">return</span> <span class="fn">hash</span>((<span class="kw">self</span>.x, <span class="kw">self</span>.y))

v1 = Vector(<span class="num">3</span>, <span class="num">4</span>)
v2 = Vector(<span class="num">1</span>, <span class="num">2</span>)
<span class="fn">print</span>(v1 + v2)        <span class="cm"># (4, 6)</span>
<span class="fn">print</span>(<span class="fn">abs</span>(v1))         <span class="cm"># 5.0</span>
<span class="fn">print</span>(v1 * <span class="num">3</span>)         <span class="cm"># (9, 12)</span>
x, y = v1             <span class="cm"># unpacking via __iter__</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Abstract Classes (ABC)</h3>
    <div class="code-block">
<span class="kw">from</span> abc <span class="kw">import</span> ABC, abstractmethod

<span class="kw">class</span> <span class="type">Shape</span>(ABC):
    @<span class="fn">abstractmethod</span>
    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="str">"""Harus diimplementasikan oleh subclass."""</span>
        ...

    @<span class="fn">abstractmethod</span>
    <span class="kw">def</span> <span class="fn">perimeter</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        ...

    <span class="kw">def</span> <span class="fn">describe</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="str">"""Concrete method — bisa langsung dipakai."""</span>
        <span class="kw">return</span> <span class="str">f"Area: </span>{<span class="kw">self</span>.<span class="fn">area</span>():<span class="num">.2f</span>}<span class="str">, Perimeter: </span>{<span class="kw">self</span>.<span class="fn">perimeter</span>():<span class="num">.2f</span>}<span class="str">"</span>

<span class="kw">class</span> <span class="type">Rectangle</span>(<span class="type">Shape</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, w: <span class="type">float</span>, h: <span class="type">float</span>):
        <span class="kw">self</span>.w, <span class="kw">self</span>.h = w, h

    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="kw">return</span> <span class="kw">self</span>.w * <span class="kw">self</span>.h

    <span class="kw">def</span> <span class="fn">perimeter</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="kw">return</span> <span class="num">2</span> * (<span class="kw">self</span>.w + <span class="kw">self</span>.h)

<span class="cm"># Shape() → TypeError: Can't instantiate abstract class</span>
r = Rectangle(<span class="num">5</span>, <span class="num">3</span>)
<span class="fn">print</span>(r.<span class="fn">describe</span>())  <span class="cm"># Area: 15.00, Perimeter: 16.00</span>
    </div>
</div>

<!-- ==================== 8. SOLID IN PYTHON ==================== -->
<h2 class="animate-in">8. SOLID Principles in Python</h2>

<div class="card animate-in">
    <h3>S — Single Responsibility Principle</h3>
    <p>Setiap class harus memiliki <strong>satu alasan untuk berubah</strong>.</p>
    <div class="card-grid">
        <div class="warn-box">
            <strong>Buruk: Satu class banyak tanggung jawab</strong>
            <div class="code-block">
<span class="kw">class</span> <span class="type">User</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, name, email):
        <span class="kw">self</span>.name = name
        <span class="kw">self</span>.email = email

    <span class="kw">def</span> <span class="fn">save_to_db</span>(<span class="kw">self</span>):  <span class="cm"># persistence</span>
        ...
    <span class="kw">def</span> <span class="fn">send_email</span>(<span class="kw">self</span>):  <span class="cm"># notification</span>
        ...
    <span class="kw">def</span> <span class="fn">generate_report</span>(<span class="kw">self</span>):  <span class="cm"># reporting</span>
        ...
            </div>
        </div>
        <div class="success-box">
            <strong>Baik: Pisahkan tanggung jawab</strong>
            <div class="code-block">
<span class="kw">class</span> <span class="type">User</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, name, email):
        <span class="kw">self</span>.name = name
        <span class="kw">self</span>.email = email

<span class="kw">class</span> <span class="type">UserRepository</span>:
    <span class="kw">def</span> <span class="fn">save</span>(<span class="kw">self</span>, user: User): ...

<span class="kw">class</span> <span class="type">EmailService</span>:
    <span class="kw">def</span> <span class="fn">send</span>(<span class="kw">self</span>, to, msg): ...

<span class="kw">class</span> <span class="type">UserReport</span>:
    <span class="kw">def</span> <span class="fn">generate</span>(<span class="kw">self</span>, user): ...
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>O — Open/Closed Principle</h3>
    <p>Terbuka untuk ekstensi, tertutup untuk modifikasi.</p>
    <div class="code-block">
<span class="kw">from</span> abc <span class="kw">import</span> ABC, abstractmethod

<span class="kw">class</span> <span class="type">Discount</span>(ABC):
    @<span class="fn">abstractmethod</span>
    <span class="kw">def</span> <span class="fn">calculate</span>(<span class="kw">self</span>, price: <span class="type">float</span>) -> <span class="type">float</span>: ...

<span class="kw">class</span> <span class="type">NoDiscount</span>(<span class="type">Discount</span>):
    <span class="kw">def</span> <span class="fn">calculate</span>(<span class="kw">self</span>, price): <span class="kw">return</span> price

<span class="kw">class</span> <span class="type">PercentageDiscount</span>(<span class="type">Discount</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, pct: <span class="type">float</span>):
        <span class="kw">self</span>.pct = pct
    <span class="kw">def</span> <span class="fn">calculate</span>(<span class="kw">self</span>, price): <span class="kw">return</span> price * (<span class="num">1</span> - <span class="kw">self</span>.pct)

<span class="cm"># Tambah diskon baru TANPA ubah kode yang ada</span>
<span class="kw">class</span> <span class="type">BuyOneGetOne</span>(<span class="type">Discount</span>):
    <span class="kw">def</span> <span class="fn">calculate</span>(<span class="kw">self</span>, price): <span class="kw">return</span> price / <span class="num">2</span>

<span class="kw">def</span> <span class="fn">checkout</span>(price: <span class="type">float</span>, discount: <span class="type">Discount</span>) -> <span class="type">float</span>:
    <span class="kw">return</span> discount.<span class="fn">calculate</span>(price)
    </div>
</div>

<div class="card animate-in">
    <h3>L — Liskov Substitution Principle</h3>
    <p>Subclass harus bisa menggantikan parent class tanpa merusak program.</p>
    <div class="code-block">
<span class="cm"># Contoh PELANGGARAN klasik: Square extends Rectangle</span>
<span class="kw">class</span> <span class="type">Rectangle</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, w, h):
        <span class="kw">self</span>._w, <span class="kw">self</span>._h = w, h

    @<span class="fn">property</span>
    <span class="kw">def</span> <span class="fn">width</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="kw">self</span>._w
    @width.<span class="fn">setter</span>
    <span class="kw">def</span> <span class="fn">width</span>(<span class="kw">self</span>, v): <span class="kw">self</span>._w = v

    @<span class="fn">property</span>
    <span class="kw">def</span> <span class="fn">height</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="kw">self</span>._h
    @height.<span class="fn">setter</span>
    <span class="kw">def</span> <span class="fn">height</span>(<span class="kw">self</span>, v): <span class="kw">self</span>._h = v

    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>): <span class="kw">return</span> <span class="kw">self</span>._w * <span class="kw">self</span>._h

<span class="cm"># MELANGGAR LSP — Square mengubah perilaku setter</span>
<span class="kw">class</span> <span class="type">Square</span>(<span class="type">Rectangle</span>):
    @Rectangle.width.<span class="fn">setter</span>
    <span class="kw">def</span> <span class="fn">width</span>(<span class="kw">self</span>, v):
        <span class="kw">self</span>._w = <span class="kw">self</span>._h = v  <span class="cm"># mengubah kedua sisi!</span>

<span class="cm"># Solusi: gunakan interface terpisah</span>
<span class="kw">class</span> <span class="type">Shape</span>(ABC):
    @<span class="fn">abstractmethod</span>
    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>) -> <span class="type">float</span>: ...
    </div>
</div>

<div class="card animate-in">
    <h3>I — Interface Segregation Principle</h3>
    <p>Client tidak boleh dipaksa bergantung pada method yang tidak mereka gunakan.</p>
    <div class="code-block">
<span class="cm"># Python menggunakan Protocol (structural subtyping) untuk ISP</span>
<span class="kw">from</span> typing <span class="kw">import</span> Protocol

<span class="kw">class</span> <span class="type">Readable</span>(Protocol):
    <span class="kw">def</span> <span class="fn">read</span>(<span class="kw">self</span>) -> <span class="type">str</span>: ...

<span class="kw">class</span> <span class="type">Writable</span>(Protocol):
    <span class="kw">def</span> <span class="fn">write</span>(<span class="kw">self</span>, data: <span class="type">str</span>) -> <span class="kw">None</span>: ...

<span class="kw">class</span> <span class="type">Closeable</span>(Protocol):
    <span class="kw">def</span> <span class="fn">close</span>(<span class="kw">self</span>) -> <span class="kw">None</span>: ...

<span class="cm"># Class hanya implement interface yang diperlukan</span>
<span class="kw">class</span> <span class="type">ReadOnlyFile</span>:
    <span class="kw">def</span> <span class="fn">read</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">"data"</span>

<span class="kw">def</span> <span class="fn">process</span>(source: <span class="type">Readable</span>):
    <span class="cm"># Hanya butuh read(), tidak peduli write() atau close()</span>
    data = source.<span class="fn">read</span>()
    <span class="kw">return</span> data

<span class="fn">process</span>(ReadOnlyFile())  <span class="cm"># Works! Structural subtyping</span>
    </div>
</div>

<div class="card animate-in">
    <h3>D — Dependency Inversion Principle</h3>
    <p>High-level modules tidak bergantung pada low-level modules. Keduanya bergantung pada abstraksi.</p>
    <div class="code-block">
<span class="kw">from</span> typing <span class="kw">import</span> Protocol

<span class="cm"># Abstraksi (Protocol — tidak perlu inherit)</span>
<span class="kw">class</span> <span class="type">MessageSender</span>(Protocol):
    <span class="kw">def</span> <span class="fn">send</span>(<span class="kw">self</span>, to: <span class="type">str</span>, body: <span class="type">str</span>) -> <span class="kw">None</span>: ...

<span class="cm"># Low-level implementations</span>
<span class="kw">class</span> <span class="type">EmailSender</span>:
    <span class="kw">def</span> <span class="fn">send</span>(<span class="kw">self</span>, to: <span class="type">str</span>, body: <span class="type">str</span>) -> <span class="kw">None</span>:
        <span class="fn">print</span>(<span class="str">f"Email to </span>{to}<span class="str">: </span>{body}<span class="str">"</span>)

<span class="kw">class</span> <span class="type">SMSSender</span>:
    <span class="kw">def</span> <span class="fn">send</span>(<span class="kw">self</span>, to: <span class="type">str</span>, body: <span class="type">str</span>) -> <span class="kw">None</span>:
        <span class="fn">print</span>(<span class="str">f"SMS to </span>{to}<span class="str">: </span>{body}<span class="str">"</span>)

<span class="cm"># High-level module — bergantung pada abstraksi</span>
<span class="kw">class</span> <span class="type">NotificationService</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, sender: <span class="type">MessageSender</span>):
        <span class="kw">self</span>._sender = sender  <span class="cm"># dependency injection</span>

    <span class="kw">def</span> <span class="fn">notify</span>(<span class="kw">self</span>, user: <span class="type">str</span>, msg: <span class="type">str</span>):
        <span class="kw">self</span>._sender.<span class="fn">send</span>(user, msg)

<span class="cm"># Mudah di-swap dan di-test</span>
svc = NotificationService(EmailSender())
svc.<span class="fn">notify</span>(<span class="str">"alice@mail.com"</span>, <span class="str">"Hello!"</span>)

svc = NotificationService(SMSSender())
svc.<span class="fn">notify</span>(<span class="str">"+628123456"</span>, <span class="str">"Hello!"</span>)
    </div>
</div>

<!-- ==================== 9. ERROR HANDLING ==================== -->
<h2 class="animate-in">9. Error Handling</h2>

<div class="card animate-in">
    <h3>try / except / else / finally</h3>
    <div class="code-block">
<span class="kw">try</span>:
    result = <span class="num">10</span> / <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter number: "</span>))
<span class="kw">except</span> <span class="type">ZeroDivisionError</span>:
    <span class="fn">print</span>(<span class="str">"Cannot divide by zero!"</span>)
<span class="kw">except</span> <span class="type">ValueError</span> <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">f"Invalid input: </span>{e}<span class="str">"</span>)
<span class="kw">except</span> (<span class="type">TypeError</span>, <span class="type">OverflowError</span>):
    <span class="fn">print</span>(<span class="str">"Type or overflow error"</span>)
<span class="kw">except</span> <span class="type">Exception</span> <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">f"Unexpected: </span>{e}<span class="str">"</span>)
    <span class="kw">raise</span>  <span class="cm"># re-raise the exception</span>
<span class="kw">else</span>:
    <span class="cm"># Hanya dieksekusi jika TIDAK ada exception</span>
    <span class="fn">print</span>(<span class="str">f"Result: </span>{result}<span class="str">"</span>)
<span class="kw">finally</span>:
    <span class="cm"># SELALU dieksekusi, ada atau tidak ada exception</span>
    <span class="fn">print</span>(<span class="str">"Cleanup done"</span>)
    </div>
</div>

<div class="card animate-in">
    <h3>Custom Exceptions & Exception Hierarchy</h3>
    <div class="code-block">
<span class="cm"># Custom exception hierarchy</span>
<span class="kw">class</span> <span class="type">AppError</span>(<span class="type">Exception</span>):
    <span class="str">"""Base exception for our application."""</span>
    <span class="kw">pass</span>

<span class="kw">class</span> <span class="type">ValidationError</span>(<span class="type">AppError</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, field: <span class="type">str</span>, message: <span class="type">str</span>):
        <span class="kw">self</span>.field = field
        <span class="fn">super</span>().<span class="fn">__init__</span>(<span class="str">f"</span>{field}<span class="str">: </span>{message}<span class="str">"</span>)

<span class="kw">class</span> <span class="type">NotFoundError</span>(<span class="type">AppError</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, entity: <span class="type">str</span>, id: <span class="type">int</span>):
        <span class="fn">super</span>().<span class="fn">__init__</span>(<span class="str">f"</span>{entity}<span class="str"> with id </span>{id}<span class="str"> not found"</span>)

<span class="kw">class</span> <span class="type">AuthenticationError</span>(<span class="type">AppError</span>):
    <span class="kw">pass</span>

<span class="cm"># Penggunaan</span>
<span class="kw">def</span> <span class="fn">get_user</span>(user_id: <span class="type">int</span>):
    <span class="kw">if</span> user_id < <span class="num">0</span>:
        <span class="kw">raise</span> ValidationError(<span class="str">"user_id"</span>, <span class="str">"must be positive"</span>)
    <span class="cm"># ... lookup ...</span>
    <span class="kw">raise</span> NotFoundError(<span class="str">"User"</span>, user_id)
    </div>
    <div class="info-box" style="margin-top: 15px;">
        <strong>Python Exception Hierarchy (sebagian):</strong><br>
        <code>BaseException > Exception > (ValueError, TypeError, KeyError, IndexError, OSError, RuntimeError, ...)</code><br>
        <code>BaseException > KeyboardInterrupt, SystemExit, GeneratorExit</code><br>
        Jangan catch <code>BaseException</code> — gunakan <code>Exception</code> sebagai base.
    </div>
</div>

<div class="card animate-in">
    <h3>Context Managers (with statement)</h3>
    <p>Context manager memastikan resource di-cleanup otomatis, bahkan jika terjadi exception.</p>
    <div class="code-block">
<span class="cm"># Built-in context managers</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    content = f.<span class="fn">read</span>()
<span class="cm"># File otomatis ditutup setelah blok with</span>

<span class="cm"># Custom context manager dengan class</span>
<span class="kw">class</span> <span class="type">DatabaseConnection</span>:
    <span class="kw">def</span> <span class="fn">__enter__</span>(<span class="kw">self</span>):
        <span class="kw">self</span>.conn = <span class="fn">create_connection</span>()
        <span class="kw">return</span> <span class="kw">self</span>.conn

    <span class="kw">def</span> <span class="fn">__exit__</span>(<span class="kw">self</span>, exc_type, exc_val, exc_tb):
        <span class="kw">if</span> exc_type:
            <span class="kw">self</span>.conn.<span class="fn">rollback</span>()
        <span class="kw">else</span>:
            <span class="kw">self</span>.conn.<span class="fn">commit</span>()
        <span class="kw">self</span>.conn.<span class="fn">close</span>()
        <span class="kw">return</span> <span class="kw">False</span>  <span class="cm"># False = don't suppress exception</span>

<span class="cm"># Custom context manager dengan @contextmanager</span>
<span class="kw">from</span> contextlib <span class="kw">import</span> contextmanager

@contextmanager
<span class="kw">def</span> <span class="fn">timer</span>(label: <span class="type">str</span>):
    <span class="kw">import</span> time
    start = time.<span class="fn">perf_counter</span>()
    <span class="kw">try</span>:
        <span class="kw">yield</span>  <span class="cm"># kode di dalam 'with' dieksekusi di sini</span>
    <span class="kw">finally</span>:
        elapsed = time.<span class="fn">perf_counter</span>() - start
        <span class="fn">print</span>(<span class="str">f"</span>{label}<span class="str">: </span>{elapsed:<span class="num">.4f</span>}<span class="str">s"</span>)

<span class="kw">with</span> <span class="fn">timer</span>(<span class="str">"Processing"</span>):
    <span class="cm"># ... operasi yang ingin diukur ...</span>
    <span class="kw">pass</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Best Practices Error Handling</h3>
    <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Catch specific exceptions</strong> — hindari bare <code>except:</code> atau <code>except Exception</code></div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Gunakan else clause</strong> — taruh kode "happy path" di else, bukan di try</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Gunakan finally atau context manager</strong> — untuk cleanup resources</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Buat custom exception hierarchy</strong> — satu base exception per aplikasi/library</div></div>
        <div class="step-item"><div class="step-num">5</div><div class="step-text"><strong>Log exception details</strong> — gunakan <code>logger.exception()</code> yang otomatis include traceback</div></div>
        <div class="step-item"><div class="step-num">6</div><div class="step-text"><strong>Jangan pakai exception untuk control flow</strong> — kecuali pattern EAFP (Easier to Ask Forgiveness than Permission) yang Pythonic</div></div>
    </div>
    <div class="code-block" style="margin-top: 10px;">
<span class="cm"># EAFP (Pythonic) vs LBYL</span>

<span class="cm"># LBYL (Look Before You Leap) — C-style</span>
<span class="kw">if</span> <span class="str">"key"</span> <span class="kw">in</span> my_dict:
    value = my_dict[<span class="str">"key"</span>]

<span class="cm"># EAFP (Pythonic)</span>
<span class="kw">try</span>:
    value = my_dict[<span class="str">"key"</span>]
<span class="kw">except</span> <span class="type">KeyError</span>:
    value = default
    </div>
</div>

<!-- ==================== 10. CONCURRENCY ==================== -->
<h2 class="animate-in">10. Concurrency</h2>

<div class="card animate-in">
    <h3>GIL — Global Interpreter Lock</h3>
    <p>CPython menggunakan <strong>GIL</strong> — sebuah mutex yang hanya mengizinkan <strong>satu thread</strong> menjalankan Python bytecode pada satu waktu. Ini berarti threading di Python <strong>tidak memberikan true parallelism</strong> untuk CPU-bound tasks.</p>
    <div class="warn-box">
        <strong>Implikasi GIL:</strong><br>
        - Threading cocok untuk <strong>I/O-bound</strong> tasks (network, file, database)<br>
        - Untuk <strong>CPU-bound</strong> tasks, gunakan <strong>multiprocessing</strong> atau async<br>
        - Python 3.13+ memiliki experimental <strong>free-threaded mode</strong> (tanpa GIL)
    </div>
</div>

<div class="anim-container animate-in">
    <h3>Visualisasi GIL</h3>
    <p style="margin-bottom:10px;">Animasi menunjukkan bagaimana GIL membatasi eksekusi thread secara bergantian — hanya satu thread aktif pada satu waktu, meskipun ada multiple cores.</p>
    <canvas id="pythonGilCanvas" width="700" height="320" style="width:100%;border-radius:8px;background:var(--bg2);"></canvas>
    <div class="anim-controls" style="margin-top:10px;">
        <button class="anim-btn" id="gilStartBtn">&#9654; Start</button>
        <button class="anim-btn" id="gilResetBtn">&#8634; Reset</button>
    </div>
</div>

<div class="card animate-in">
    <h3>Threading (I/O-bound)</h3>
    <div class="code-block">
<span class="kw">import</span> threading
<span class="kw">import</span> time

<span class="kw">def</span> <span class="fn">download</span>(url: <span class="type">str</span>):
    <span class="fn">print</span>(<span class="str">f"Downloading </span>{url}<span class="str">..."</span>)
    time.<span class="fn">sleep</span>(<span class="num">2</span>)  <span class="cm"># Simulasi I/O</span>
    <span class="fn">print</span>(<span class="str">f"Done: </span>{url}<span class="str">"</span>)

<span class="cm"># Membuat dan menjalankan threads</span>
urls = [<span class="str">"url1.com"</span>, <span class="str">"url2.com"</span>, <span class="str">"url3.com"</span>]
threads = []
<span class="kw">for</span> url <span class="kw">in</span> urls:
    t = threading.<span class="fn">Thread</span>(target=download, args=(url,))
    threads.<span class="fn">append</span>(t)
    t.<span class="fn">start</span>()

<span class="cm"># Wait semua thread selesai</span>
<span class="kw">for</span> t <span class="kw">in</span> threads:
    t.<span class="fn">join</span>()

<span class="cm"># Thread-safe dengan Lock</span>
lock = threading.<span class="fn">Lock</span>()
counter = <span class="num">0</span>

<span class="kw">def</span> <span class="fn">increment</span>():
    <span class="kw">global</span> counter
    <span class="kw">with</span> lock:
        counter += <span class="num">1</span>
    </div>
</div>

<div class="card animate-in">
    <h3>Multiprocessing (CPU-bound)</h3>
    <div class="code-block">
<span class="kw">from</span> multiprocessing <span class="kw">import</span> Process, Pool
<span class="kw">import</span> os

<span class="kw">def</span> <span class="fn">heavy_computation</span>(n: <span class="type">int</span>) -> <span class="type">int</span>:
    <span class="fn">print</span>(<span class="str">f"PID </span>{os.<span class="fn">getpid</span>()}<span class="str">: computing </span>{n}<span class="str">"</span>)
    <span class="kw">return</span> <span class="fn">sum</span>(i * i <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n))

<span class="cm"># Process — manual</span>
p1 = Process(target=heavy_computation, args=(<span class="num">10_000_000</span>,))
p2 = Process(target=heavy_computation, args=(<span class="num">20_000_000</span>,))
p1.<span class="fn">start</span>(); p2.<span class="fn">start</span>()
p1.<span class="fn">join</span>(); p2.<span class="fn">join</span>()

<span class="cm"># Pool — lebih praktis</span>
<span class="kw">with</span> Pool(processes=<span class="num">4</span>) <span class="kw">as</span> pool:
    results = pool.<span class="fn">map</span>(heavy_computation, [<span class="num">1_000_000</span>] * <span class="num">4</span>)
    <span class="fn">print</span>(results)
    </div>
</div>

<div class="card animate-in">
    <h3>asyncio (Cooperative Concurrency)</h3>
    <p><code>asyncio</code> menggunakan <strong>event loop</strong> dan cooperative multitasking. Cocok untuk I/O-bound tasks yang banyak, seperti web server.</p>
    <div class="code-block">
<span class="kw">import</span> asyncio

<span class="kw">async def</span> <span class="fn">fetch_data</span>(url: <span class="type">str</span>, delay: <span class="type">float</span>) -> <span class="type">str</span>:
    <span class="fn">print</span>(<span class="str">f"Fetching </span>{url}<span class="str">..."</span>)
    <span class="kw">await</span> asyncio.<span class="fn">sleep</span>(delay)  <span class="cm"># Non-blocking sleep</span>
    <span class="kw">return</span> <span class="str">f"Data from </span>{url}<span class="str">"</span>

<span class="kw">async def</span> <span class="fn">main</span>():
    <span class="cm"># Jalankan tasks secara concurrent</span>
    tasks = [
        <span class="fn">fetch_data</span>(<span class="str">"api.example.com/users"</span>, <span class="num">2</span>),
        <span class="fn">fetch_data</span>(<span class="str">"api.example.com/posts"</span>, <span class="num">1</span>),
        <span class="fn">fetch_data</span>(<span class="str">"api.example.com/comments"</span>, <span class="num">3</span>),
    ]
    results = <span class="kw">await</span> asyncio.<span class="fn">gather</span>(*tasks)
    <span class="kw">for</span> r <span class="kw">in</span> results:
        <span class="fn">print</span>(r)

asyncio.<span class="fn">run</span>(<span class="fn">main</span>())  <span class="cm"># Total ~3s, bukan 6s</span>

<span class="cm"># Async context manager & iterator</span>
<span class="kw">async def</span> <span class="fn">async_generator</span>():
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
        <span class="kw">await</span> asyncio.<span class="fn">sleep</span>(<span class="num">0.1</span>)
        <span class="kw">yield</span> i

<span class="kw">async for</span> value <span class="kw">in</span> <span class="fn">async_generator</span>():
    <span class="fn">print</span>(value)
    </div>
</div>

<div class="card animate-in">
    <h3>concurrent.futures</h3>
    <p>High-level API yang menyatukan threading dan multiprocessing dalam interface yang sama.</p>
    <div class="code-block">
<span class="kw">from</span> concurrent.futures <span class="kw">import</span> ThreadPoolExecutor, ProcessPoolExecutor
<span class="kw">import</span> time

<span class="kw">def</span> <span class="fn">task</span>(n):
    time.<span class="fn">sleep</span>(<span class="num">1</span>)
    <span class="kw">return</span> n * n

<span class="cm"># ThreadPoolExecutor — untuk I/O-bound</span>
<span class="kw">with</span> ThreadPoolExecutor(max_workers=<span class="num">4</span>) <span class="kw">as</span> executor:
    futures = [executor.<span class="fn">submit</span>(task, i) <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">4</span>)]
    results = [f.<span class="fn">result</span>() <span class="kw">for</span> f <span class="kw">in</span> futures]

<span class="cm"># ProcessPoolExecutor — untuk CPU-bound</span>
<span class="kw">with</span> ProcessPoolExecutor(max_workers=<span class="num">4</span>) <span class="kw">as</span> executor:
    results = <span class="fn">list</span>(executor.<span class="fn">map</span>(task, <span class="fn">range</span>(<span class="num">4</span>)))
    </div>
</div>

<div class="card animate-in">
    <h3>Kapan Menggunakan Apa?</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Metode</th><th>Tipe Task</th><th>GIL</th><th>Use Case</th></tr>
            <tr>
                <td><span class="badge-blue">Threading</span></td>
                <td>I/O-bound</td>
                <td>Terkena GIL</td>
                <td>Network requests, file I/O, database queries</td>
            </tr>
            <tr>
                <td><span class="badge-green">Multiprocessing</span></td>
                <td>CPU-bound</td>
                <td>Bypass GIL (proses terpisah)</td>
                <td>Number crunching, image processing, ML training</td>
            </tr>
            <tr>
                <td><span class="badge-purple">asyncio</span></td>
                <td>I/O-bound (banyak)</td>
                <td>Single thread</td>
                <td>Web servers, API clients, websockets, crawlers</td>
            </tr>
            <tr>
                <td><span class="badge-orange">concurrent.futures</span></td>
                <td>Keduanya</td>
                <td>Tergantung Executor</td>
                <td>Simple parallel tasks, map-reduce pattern</td>
            </tr>
        </table>
    </div>
</div>

<!-- ==================== 11. REST API - SIMPLE ==================== -->
<h2 class="animate-in">11. REST API — Simple Version (Flask)</h2>

<div class="card animate-in">
    <h3>Flask — Micro Framework</h3>
    <p><strong>Flask</strong> adalah micro web framework yang ringan dan fleksibel. Cocok untuk prototyping, small apps, dan learning.</p>
    <div class="code-block">
<span class="cm"># pip install flask</span>
<span class="kw">from</span> flask <span class="kw">import</span> Flask, jsonify, request

app = Flask(<span class="str">__name__</span>)

<span class="cm"># In-memory "database"</span>
todos = [
    {<span class="str">"id"</span>: <span class="num">1</span>, <span class="str">"title"</span>: <span class="str">"Belajar Python"</span>, <span class="str">"done"</span>: <span class="kw">False</span>},
    {<span class="str">"id"</span>: <span class="num">2</span>, <span class="str">"title"</span>: <span class="str">"Buat REST API"</span>, <span class="str">"done"</span>: <span class="kw">False</span>},
]
next_id = <span class="num">3</span>

<span class="cm"># GET — List semua todos</span>
@app.<span class="fn">route</span>(<span class="str">"/api/todos"</span>, methods=[<span class="str">"GET"</span>])
<span class="kw">def</span> <span class="fn">get_todos</span>():
    <span class="kw">return</span> <span class="fn">jsonify</span>(todos)

<span class="cm"># GET — Satu todo by ID</span>
@app.<span class="fn">route</span>(<span class="str">"/api/todos/&lt;int:todo_id&gt;"</span>, methods=[<span class="str">"GET"</span>])
<span class="kw">def</span> <span class="fn">get_todo</span>(todo_id):
    todo = <span class="fn">next</span>((t <span class="kw">for</span> t <span class="kw">in</span> todos <span class="kw">if</span> t[<span class="str">"id"</span>] == todo_id), <span class="kw">None</span>)
    <span class="kw">if</span> todo <span class="kw">is</span> <span class="kw">None</span>:
        <span class="kw">return</span> <span class="fn">jsonify</span>({<span class="str">"error"</span>: <span class="str">"Not found"</span>}), <span class="num">404</span>
    <span class="kw">return</span> <span class="fn">jsonify</span>(todo)

<span class="cm"># POST — Buat todo baru</span>
@app.<span class="fn">route</span>(<span class="str">"/api/todos"</span>, methods=[<span class="str">"POST"</span>])
<span class="kw">def</span> <span class="fn">create_todo</span>():
    <span class="kw">global</span> next_id
    data = request.<span class="fn">get_json</span>()
    todo = {
        <span class="str">"id"</span>: next_id,
        <span class="str">"title"</span>: data[<span class="str">"title"</span>],
        <span class="str">"done"</span>: <span class="kw">False</span>,
    }
    todos.<span class="fn">append</span>(todo)
    next_id += <span class="num">1</span>
    <span class="kw">return</span> <span class="fn">jsonify</span>(todo), <span class="num">201</span>

<span class="cm"># PUT — Update todo</span>
@app.<span class="fn">route</span>(<span class="str">"/api/todos/&lt;int:todo_id&gt;"</span>, methods=[<span class="str">"PUT"</span>])
<span class="kw">def</span> <span class="fn">update_todo</span>(todo_id):
    todo = <span class="fn">next</span>((t <span class="kw">for</span> t <span class="kw">in</span> todos <span class="kw">if</span> t[<span class="str">"id"</span>] == todo_id), <span class="kw">None</span>)
    <span class="kw">if</span> <span class="kw">not</span> todo:
        <span class="kw">return</span> <span class="fn">jsonify</span>({<span class="str">"error"</span>: <span class="str">"Not found"</span>}), <span class="num">404</span>
    data = request.<span class="fn">get_json</span>()
    todo[<span class="str">"title"</span>] = data.<span class="fn">get</span>(<span class="str">"title"</span>, todo[<span class="str">"title"</span>])
    todo[<span class="str">"done"</span>] = data.<span class="fn">get</span>(<span class="str">"done"</span>, todo[<span class="str">"done"</span>])
    <span class="kw">return</span> <span class="fn">jsonify</span>(todo)

<span class="cm"># DELETE — Hapus todo</span>
@app.<span class="fn">route</span>(<span class="str">"/api/todos/&lt;int:todo_id&gt;"</span>, methods=[<span class="str">"DELETE"</span>])
<span class="kw">def</span> <span class="fn">delete_todo</span>(todo_id):
    <span class="kw">global</span> todos
    todos = [t <span class="kw">for</span> t <span class="kw">in</span> todos <span class="kw">if</span> t[<span class="str">"id"</span>] != todo_id]
    <span class="kw">return</span> <span class="str">""</span>, <span class="num">204</span>

<span class="kw">if</span> <span class="str">__name__</span> == <span class="str">"__main__"</span>:
    app.<span class="fn">run</span>(debug=<span class="kw">True</span>, port=<span class="num">5000</span>)
    </div>
</div>

<div class="card animate-in">
    <h3>Testing Flask API</h3>
    <div class="code-block">
<span class="cm"># Menggunakan curl untuk test</span>
<span class="cm"># GET all</span>
$ curl http://localhost:5000/api/todos

<span class="cm"># POST</span>
$ curl -X POST http://localhost:5000/api/todos \\
    -H "Content-Type: application/json" \\
    -d '{"title": "New Task"}'

<span class="cm"># PUT</span>
$ curl -X PUT http://localhost:5000/api/todos/1 \\
    -H "Content-Type: application/json" \\
    -d '{"done": true}'

<span class="cm"># DELETE</span>
$ curl -X DELETE http://localhost:5000/api/todos/1
    </div>
</div>

<!-- ==================== 12. REST API - BEST PRACTICE ==================== -->
<h2 class="animate-in">12. REST API — Best Practice (FastAPI)</h2>

<div class="card animate-in">
    <h3>Mengapa FastAPI?</h3>
    <div class="card-grid">
        <div class="info-box">
            <strong>Type Safety</strong><br>
            Pydantic models untuk validasi otomatis request/response.
        </div>
        <div class="info-box">
            <strong>Auto Documentation</strong><br>
            Swagger UI dan ReDoc otomatis dari type hints.
        </div>
        <div class="info-box">
            <strong>Async Native</strong><br>
            Built on Starlette, mendukung async/await secara native.
        </div>
        <div class="info-box">
            <strong>Performance</strong><br>
            Salah satu framework Python tercepat, setara Go dan Node.js.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Project Structure</h3>
    <div class="code-block">
my_api/
├── app/
│   ├── __init__.py
│   ├── main.py            <span class="cm"># FastAPI app & startup</span>
│   ├── config.py           <span class="cm"># Settings (pydantic-settings)</span>
│   ├── database.py         <span class="cm"># SQLAlchemy setup</span>
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py         <span class="cm"># SQLAlchemy models</span>
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── user.py         <span class="cm"># Pydantic schemas</span>
│   ├── routers/
│   │   ├── __init__.py
│   │   └── users.py        <span class="cm"># Route handlers</span>
│   ├── services/
│   │   ├── __init__.py
│   │   └── user_service.py <span class="cm"># Business logic</span>
│   ├── dependencies.py     <span class="cm"># DI providers</span>
│   └── middleware.py       <span class="cm"># Custom middleware</span>
├── tests/
│   └── test_users.py
├── alembic/                <span class="cm"># DB migrations</span>
├── pyproject.toml
└── Dockerfile
    </div>
</div>

<div class="card animate-in">
    <h3>Pydantic Models (Schemas)</h3>
    <div class="code-block">
<span class="cm"># app/schemas/user.py</span>
<span class="kw">from</span> pydantic <span class="kw">import</span> BaseModel, EmailStr, Field
<span class="kw">from</span> datetime <span class="kw">import</span> datetime
<span class="kw">from</span> typing <span class="kw">import</span> Optional

<span class="kw">class</span> <span class="type">UserBase</span>(BaseModel):
    name: <span class="type">str</span> = Field(..., min_length=<span class="num">1</span>, max_length=<span class="num">100</span>)
    email: EmailStr

<span class="kw">class</span> <span class="type">UserCreate</span>(<span class="type">UserBase</span>):
    password: <span class="type">str</span> = Field(..., min_length=<span class="num">8</span>)

<span class="kw">class</span> <span class="type">UserUpdate</span>(BaseModel):
    name: Optional[<span class="type">str</span>] = <span class="kw">None</span>
    email: Optional[EmailStr] = <span class="kw">None</span>

<span class="kw">class</span> <span class="type">UserResponse</span>(<span class="type">UserBase</span>):
    id: <span class="type">int</span>
    is_active: <span class="type">bool</span>
    created_at: datetime

    <span class="kw">class</span> <span class="type">Config</span>:
        from_attributes = <span class="kw">True</span>  <span class="cm"># Enable ORM mode</span>

<span class="kw">class</span> <span class="type">PaginatedResponse</span>(BaseModel):
    items: <span class="type">list</span>[<span class="type">UserResponse</span>]
    total: <span class="type">int</span>
    page: <span class="type">int</span>
    per_page: <span class="type">int</span>
    </div>
</div>

<div class="card animate-in">
    <h3>SQLAlchemy Models & Database</h3>
    <div class="code-block">
<span class="cm"># app/database.py</span>
<span class="kw">from</span> sqlalchemy <span class="kw">import</span> create_engine
<span class="kw">from</span> sqlalchemy.orm <span class="kw">import</span> sessionmaker, DeclarativeBase

DATABASE_URL = <span class="str">"postgresql://user:pass@localhost/mydb"</span>

engine = <span class="fn">create_engine</span>(DATABASE_URL)
SessionLocal = <span class="fn">sessionmaker</span>(bind=engine, autoflush=<span class="kw">False</span>)

<span class="kw">class</span> <span class="type">Base</span>(DeclarativeBase):
    <span class="kw">pass</span>

<span class="cm"># Dependency — session per request</span>
<span class="kw">def</span> <span class="fn">get_db</span>():
    db = <span class="fn">SessionLocal</span>()
    <span class="kw">try</span>:
        <span class="kw">yield</span> db
    <span class="kw">finally</span>:
        db.<span class="fn">close</span>()

<span class="cm"># app/models/user.py</span>
<span class="kw">from</span> sqlalchemy <span class="kw">import</span> Column, Integer, String, Boolean, DateTime
<span class="kw">from</span> sqlalchemy.sql <span class="kw">import</span> func
<span class="kw">from</span> app.database <span class="kw">import</span> Base

<span class="kw">class</span> <span class="type">User</span>(Base):
    __tablename__ = <span class="str">"users"</span>

    id = Column(Integer, primary_key=<span class="kw">True</span>, index=<span class="kw">True</span>)
    name = Column(String(<span class="num">100</span>), nullable=<span class="kw">False</span>)
    email = Column(String(<span class="num">255</span>), unique=<span class="kw">True</span>, index=<span class="kw">True</span>)
    hashed_password = Column(String(<span class="num">255</span>))
    is_active = Column(Boolean, default=<span class="kw">True</span>)
    created_at = Column(DateTime, server_default=<span class="fn">func</span>.<span class="fn">now</span>())
    </div>
</div>

<div class="card animate-in">
    <h3>FastAPI Routes & Dependency Injection</h3>
    <div class="code-block">
<span class="cm"># app/routers/users.py</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> APIRouter, Depends, HTTPException, status, Query
<span class="kw">from</span> sqlalchemy.orm <span class="kw">import</span> Session
<span class="kw">from</span> app.database <span class="kw">import</span> get_db
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> UserCreate, UserResponse, UserUpdate, PaginatedResponse
<span class="kw">from</span> app.services.user_service <span class="kw">import</span> UserService

router = APIRouter(prefix=<span class="str">"/api/v1/users"</span>, tags=[<span class="str">"users"</span>])

<span class="kw">def</span> <span class="fn">get_user_service</span>(db: Session = Depends(get_db)) -> UserService:
    <span class="kw">return</span> UserService(db)

@router.<span class="fn">get</span>(<span class="str">"/"</span>, response_model=PaginatedResponse)
<span class="kw">async def</span> <span class="fn">list_users</span>(
    page: <span class="type">int</span> = Query(<span class="num">1</span>, ge=<span class="num">1</span>),
    per_page: <span class="type">int</span> = Query(<span class="num">20</span>, ge=<span class="num">1</span>, le=<span class="num">100</span>),
    svc: UserService = Depends(get_user_service),
):
    <span class="kw">return</span> svc.<span class="fn">list_users</span>(page, per_page)

@router.<span class="fn">post</span>(<span class="str">"/"</span>, response_model=UserResponse, status_code=<span class="num">201</span>)
<span class="kw">async def</span> <span class="fn">create_user</span>(
    user_in: UserCreate,
    svc: UserService = Depends(get_user_service),
):
    <span class="kw">return</span> svc.<span class="fn">create_user</span>(user_in)

@router.<span class="fn">get</span>(<span class="str">"/{user_id}"</span>, response_model=UserResponse)
<span class="kw">async def</span> <span class="fn">get_user</span>(
    user_id: <span class="type">int</span>,
    svc: UserService = Depends(get_user_service),
):
    user = svc.<span class="fn">get_user</span>(user_id)
    <span class="kw">if</span> <span class="kw">not</span> user:
        <span class="kw">raise</span> HTTPException(status_code=<span class="num">404</span>, detail=<span class="str">"User not found"</span>)
    <span class="kw">return</span> user

@router.<span class="fn">patch</span>(<span class="str">"/{user_id}"</span>, response_model=UserResponse)
<span class="kw">async def</span> <span class="fn">update_user</span>(
    user_id: <span class="type">int</span>,
    user_in: UserUpdate,
    svc: UserService = Depends(get_user_service),
):
    <span class="kw">return</span> svc.<span class="fn">update_user</span>(user_id, user_in)

@router.<span class="fn">delete</span>(<span class="str">"/{user_id}"</span>, status_code=<span class="num">204</span>)
<span class="kw">async def</span> <span class="fn">delete_user</span>(
    user_id: <span class="type">int</span>,
    svc: UserService = Depends(get_user_service),
):
    svc.<span class="fn">delete_user</span>(user_id)
    </div>
</div>

<div class="card animate-in">
    <h3>Service Layer</h3>
    <div class="code-block">
<span class="cm"># app/services/user_service.py</span>
<span class="kw">from</span> sqlalchemy.orm <span class="kw">import</span> Session
<span class="kw">from</span> fastapi <span class="kw">import</span> HTTPException
<span class="kw">from</span> passlib.context <span class="kw">import</span> CryptContext
<span class="kw">from</span> app.models.user <span class="kw">import</span> User
<span class="kw">from</span> app.schemas.user <span class="kw">import</span> UserCreate, UserUpdate

pwd_context = CryptContext(schemes=[<span class="str">"bcrypt"</span>])

<span class="kw">class</span> <span class="type">UserService</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, db: Session):
        <span class="kw">self</span>.db = db

    <span class="kw">def</span> <span class="fn">create_user</span>(<span class="kw">self</span>, data: UserCreate) -> User:
        <span class="cm"># Check duplicate email</span>
        existing = <span class="kw">self</span>.db.<span class="fn">query</span>(User).<span class="fn">filter</span>(
            User.email == data.email
        ).<span class="fn">first</span>()
        <span class="kw">if</span> existing:
            <span class="kw">raise</span> HTTPException(<span class="num">409</span>, <span class="str">"Email already registered"</span>)

        user = User(
            name=data.name,
            email=data.email,
            hashed_password=pwd_context.<span class="fn">hash</span>(data.password),
        )
        <span class="kw">self</span>.db.<span class="fn">add</span>(user)
        <span class="kw">self</span>.db.<span class="fn">commit</span>()
        <span class="kw">self</span>.db.<span class="fn">refresh</span>(user)
        <span class="kw">return</span> user

    <span class="kw">def</span> <span class="fn">get_user</span>(<span class="kw">self</span>, user_id: <span class="type">int</span>) -> User | <span class="kw">None</span>:
        <span class="kw">return</span> <span class="kw">self</span>.db.<span class="fn">query</span>(User).<span class="fn">filter</span>(User.id == user_id).<span class="fn">first</span>()

    <span class="kw">def</span> <span class="fn">list_users</span>(<span class="kw">self</span>, page: <span class="type">int</span>, per_page: <span class="type">int</span>):
        total = <span class="kw">self</span>.db.<span class="fn">query</span>(User).<span class="fn">count</span>()
        items = (<span class="kw">self</span>.db.<span class="fn">query</span>(User)
                 .<span class="fn">offset</span>((page - <span class="num">1</span>) * per_page)
                 .<span class="fn">limit</span>(per_page)
                 .<span class="fn">all</span>())
        <span class="kw">return</span> {<span class="str">"items"</span>: items, <span class="str">"total"</span>: total,
                <span class="str">"page"</span>: page, <span class="str">"per_page"</span>: per_page}

    <span class="kw">def</span> <span class="fn">update_user</span>(<span class="kw">self</span>, user_id: <span class="type">int</span>, data: UserUpdate) -> User:
        user = <span class="kw">self</span>.<span class="fn">get_user</span>(user_id)
        <span class="kw">if</span> <span class="kw">not</span> user:
            <span class="kw">raise</span> HTTPException(<span class="num">404</span>, <span class="str">"User not found"</span>)
        update_data = data.<span class="fn">model_dump</span>(exclude_unset=<span class="kw">True</span>)
        <span class="kw">for</span> field, value <span class="kw">in</span> update_data.<span class="fn">items</span>():
            <span class="fn">setattr</span>(user, field, value)
        <span class="kw">self</span>.db.<span class="fn">commit</span>()
        <span class="kw">self</span>.db.<span class="fn">refresh</span>(user)
        <span class="kw">return</span> user

    <span class="kw">def</span> <span class="fn">delete_user</span>(<span class="kw">self</span>, user_id: <span class="type">int</span>):
        user = <span class="kw">self</span>.<span class="fn">get_user</span>(user_id)
        <span class="kw">if</span> <span class="kw">not</span> user:
            <span class="kw">raise</span> HTTPException(<span class="num">404</span>, <span class="str">"User not found"</span>)
        <span class="kw">self</span>.db.<span class="fn">delete</span>(user)
        <span class="kw">self</span>.db.<span class="fn">commit</span>()
    </div>
</div>

<div class="card animate-in">
    <h3>Middleware & Error Handling</h3>
    <div class="code-block">
<span class="cm"># app/main.py</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI, Request
<span class="kw">from</span> fastapi.middleware.cors <span class="kw">import</span> CORSMiddleware
<span class="kw">from</span> fastapi.responses <span class="kw">import</span> JSONResponse
<span class="kw">import</span> time
<span class="kw">import</span> logging

app = FastAPI(title=<span class="str">"My API"</span>, version=<span class="str">"1.0.0"</span>)
logger = logging.<span class="fn">getLogger</span>(<span class="str">__name__</span>)

<span class="cm"># CORS Middleware</span>
app.<span class="fn">add_middleware</span>(
    CORSMiddleware,
    allow_origins=[<span class="str">"*"</span>],
    allow_methods=[<span class="str">"*"</span>],
    allow_headers=[<span class="str">"*"</span>],
)

<span class="cm"># Custom logging middleware</span>
@app.<span class="fn">middleware</span>(<span class="str">"http"</span>)
<span class="kw">async def</span> <span class="fn">log_requests</span>(request: Request, call_next):
    start = time.<span class="fn">perf_counter</span>()
    response = <span class="kw">await</span> <span class="fn">call_next</span>(request)
    duration = time.<span class="fn">perf_counter</span>() - start
    logger.<span class="fn">info</span>(
        <span class="str">f"</span>{request.method}<span class="str"> </span>{request.url.path}<span class="str"> "</span>
        <span class="str">f"</span>{response.status_code}<span class="str"> </span>{duration:<span class="num">.3f</span>}<span class="str">s"</span>
    )
    <span class="kw">return</span> response

<span class="cm"># Global exception handler</span>
@app.<span class="fn">exception_handler</span>(<span class="type">Exception</span>)
<span class="kw">async def</span> <span class="fn">global_exception_handler</span>(request: Request, exc: <span class="type">Exception</span>):
    logger.<span class="fn">exception</span>(<span class="str">f"Unhandled error: </span>{exc}<span class="str">"</span>)
    <span class="kw">return</span> JSONResponse(
        status_code=<span class="num">500</span>,
        content={<span class="str">"detail"</span>: <span class="str">"Internal server error"</span>},
    )

<span class="cm"># Register routers</span>
<span class="kw">from</span> app.routers <span class="kw">import</span> users
app.<span class="fn">include_router</span>(users.router)
    </div>
</div>

<!-- ==================== 13. PYTHON AS INTEGRATION LANGUAGE ==================== -->
<h2 class="animate-in">13. Python sebagai Integration Language</h2>

<div class="card animate-in">
    <h3>Mengapa Python Populer untuk ML/AI?</h3>
    <div class="card-grid-3">
        <div class="info-box">
            <strong>Ekosistem Library</strong><br>
            NumPy, Pandas, scikit-learn, PyTorch, TensorFlow, Hugging Face — semua di Python.
        </div>
        <div class="info-box">
            <strong>Glue Language</strong><br>
            Python menghubungkan komponen C/C++/Fortran yang sudah dioptimasi (BLAS, cuDNN).
        </div>
        <div class="info-box">
            <strong>Rapid Prototyping</strong><br>
            Eksperimen cepat, REPL interaktif, Jupyter notebook — ideal untuk riset.
        </div>
    </div>
    <div class="success-box" style="margin-top: 15px;">
        <strong>Fakta:</strong> Sebagian besar library ML Python sebenarnya <strong>ditulis dalam C/C++</strong> untuk performa. Python hanya menjadi "frontend" yang mudah digunakan. NumPy core ditulis dalam C, PyTorch backend dalam C++/CUDA.
    </div>
</div>

<div class="card animate-in">
    <h3>Go dan Rust Memanggil Python</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="py-from-go">Go calls Python</button>
        <button class="tab-btn" data-tab="py-from-rust">Rust calls Python</button>
    </div>
    <div class="tab-content active" data-tab-content="py-from-go">
        <p>Go bisa memanggil Python via subprocess atau CPython embedding.</p>
        <div class="code-block">
<span class="cm">// Go: Memanggil Python script via subprocess</span>
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"fmt"</span>
    <span class="str">"os/exec"</span>
)

<span class="kw">func</span> <span class="fn">main</span>() {
    cmd := exec.<span class="fn">Command</span>(<span class="str">"python3"</span>, <span class="str">"-c"</span>,
        <span class="str">"import json; print(json.dumps({'result': 42}))"</span>)
    output, err := cmd.<span class="fn">Output</span>()
    <span class="kw">if</span> err != <span class="kw">nil</span> {
        panic(err)
    }
    fmt.<span class="fn">Println</span>(<span class="fn">string</span>(output))
}

<span class="cm">// Atau via gRPC / REST API untuk production</span>
<span class="cm">// Python menjalankan ML model server</span>
<span class="cm">// Go mengirim request dan menerima predictions</span>
        </div>
    </div>
    <div class="tab-content" data-tab-content="py-from-rust">
        <p>Rust menggunakan <code>pyo3</code> crate untuk embedding Python interpreter.</p>
        <div class="code-block">
<span class="cm">// Cargo.toml: pyo3 = { version = "0.20", features = ["auto-initialize"] }</span>
<span class="kw">use</span> pyo3::prelude::*;

<span class="kw">fn</span> <span class="fn">main</span>() -> PyResult&lt;()&gt; {
    Python::<span class="fn">with_gil</span>(|py| {
        <span class="cm">// Jalankan kode Python dari Rust</span>
        <span class="kw">let</span> result: <span class="type">i32</span> = py
            .<span class="fn">eval</span>(<span class="str">"2 + 2"</span>, None, None)?
            .<span class="fn">extract</span>()?;
        <span class="fn">println!</span>(<span class="str">"Python says: {}"</span>, result);

        <span class="cm">// Import dan gunakan module Python</span>
        <span class="kw">let</span> np = py.<span class="fn">import</span>(<span class="str">"numpy"</span>)?;
        <span class="kw">let</span> arr = np.<span class="fn">call_method1</span>(<span class="str">"array"</span>,
            (vec![<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>],))?;
        <span class="kw">let</span> mean: <span class="type">f64</span> = arr
            .<span class="fn">call_method0</span>(<span class="str">"mean"</span>)?
            .<span class="fn">extract</span>()?;
        <span class="fn">println!</span>(<span class="str">"Mean: {}"</span>, mean);

        Ok(())
    })
}
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Python Memanggil C Extensions</h3>
    <div class="tabs">
        <button class="tab-btn active" data-tab="py-ctypes">ctypes</button>
        <button class="tab-btn" data-tab="py-cffi">cffi</button>
        <button class="tab-btn" data-tab="py-cython">Cython</button>
    </div>
    <div class="tab-content active" data-tab-content="py-ctypes">
        <p><strong>ctypes</strong> — built-in, memanggil shared library (.so/.dll) tanpa compile step.</p>
        <div class="code-block">
<span class="cm"># Misalkan kita punya libmath.so yang ditulis dalam C:</span>
<span class="cm"># int add(int a, int b) { return a + b; }</span>
<span class="cm"># double compute(double* arr, int n) { ... }</span>

<span class="kw">import</span> ctypes

<span class="cm"># Load shared library</span>
lib = ctypes.<span class="fn">CDLL</span>(<span class="str">"./libmath.so"</span>)

<span class="cm"># Definisikan argument dan return types</span>
lib.add.argtypes = [ctypes.c_int, ctypes.c_int]
lib.add.restype = ctypes.c_int

result = lib.<span class="fn">add</span>(<span class="num">3</span>, <span class="num">4</span>)  <span class="cm"># 7</span>

<span class="cm"># Array passing</span>
arr_type = ctypes.c_double * <span class="num">5</span>
arr = arr_type(<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>, <span class="num">4.0</span>, <span class="num">5.0</span>)
lib.compute.argtypes = [ctypes.POINTER(ctypes.c_double), ctypes.c_int]
lib.compute.restype = ctypes.c_double
result = lib.<span class="fn">compute</span>(arr, <span class="num">5</span>)
        </div>
    </div>
    <div class="tab-content" data-tab-content="py-cffi">
        <p><strong>cffi</strong> — lebih modern, bisa parse C header files.</p>
        <div class="code-block">
<span class="cm"># pip install cffi</span>
<span class="kw">from</span> cffi <span class="kw">import</span> FFI

ffi = FFI()

<span class="cm"># Deklarasi fungsi C</span>
ffi.<span class="fn">cdef</span>(<span class="str">"""
    int add(int a, int b);
    double compute(double* arr, int n);
"""</span>)

<span class="cm"># Load library</span>
lib = ffi.<span class="fn">dlopen</span>(<span class="str">"./libmath.so"</span>)

<span class="cm"># Panggil fungsi</span>
result = lib.<span class="fn">add</span>(<span class="num">3</span>, <span class="num">4</span>)

<span class="cm"># Array</span>
arr = ffi.<span class="fn">new</span>(<span class="str">"double[]"</span>, [<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>, <span class="num">4.0</span>, <span class="num">5.0</span>])
result = lib.<span class="fn">compute</span>(arr, <span class="num">5</span>)
        </div>
    </div>
    <div class="tab-content" data-tab-content="py-cython">
        <p><strong>Cython</strong> — compile Python ke C untuk performa mendekati native.</p>
        <div class="code-block">
<span class="cm"># fibonacci.pyx (Cython file)</span>
<span class="cm"># Compile: cythonize -i fibonacci.pyx</span>

<span class="kw">def</span> <span class="fn">fib_python</span>(n):
    <span class="str">"""Pure Python — lambat untuk n besar."""</span>
    a, b = <span class="num">0</span>, <span class="num">1</span>
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(n):
        a, b = b, a + b
    <span class="kw">return</span> a

<span class="cm"># Cython optimized — 100x lebih cepat!</span>
<span class="kw">def</span> <span class="type">long long</span> <span class="fn">fib_cython</span>(<span class="type">int</span> n):
    <span class="kw">cdef</span> <span class="type">long long</span> a = <span class="num">0</span>, b = <span class="num">1</span>
    <span class="kw">cdef</span> <span class="type">int</span> i
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        a, b = b, a + b
    <span class="kw">return</span> a

<span class="cm"># Penggunaan dari Python biasa:</span>
<span class="cm"># import fibonacci</span>
<span class="cm"># fibonacci.fib_cython(1000000)</span>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>Arsitektur Integrasi Umum</h3>
    <p>Dalam production, Python sering menjadi bagian dari arsitektur polyglot:</p>
    <div class="flow-diagram">
        <div class="flow-node" style="background: rgba(56,189,248,0.1); border-color: var(--accent);">Go/Rust<br><small>API Gateway</small></div>
        <div class="flow-arrow">gRPC</div>
        <div class="flow-node" style="background: rgba(52,211,153,0.1); border-color: var(--green);">Python<br><small>ML Service</small></div>
        <div class="flow-arrow">SQL</div>
        <div class="flow-node" style="background: rgba(251,146,60,0.1); border-color: var(--orange);">PostgreSQL<br><small>Database</small></div>
    </div>
    <div class="info-box" style="margin-top: 15px;">
        <strong>Pattern umum:</strong><br>
        - <strong>Go</strong> untuk high-throughput API gateway dan microservices<br>
        - <strong>Python</strong> untuk ML inference, data pipeline, scripting<br>
        - <strong>Rust</strong> untuk komponen performance-critical (parsing, crypto, encoding)<br>
        - Komunikasi via <strong>gRPC</strong>, <strong>REST</strong>, atau <strong>message queue</strong> (RabbitMQ, Kafka)
    </div>
</div>

<div class="card animate-in">
    <h3>Python Ecosystem Overview</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Domain</th><th>Libraries</th><th>Keterangan</th></tr>
            <tr><td><span class="badge-blue">Web</span></td><td>Django, Flask, FastAPI, Starlette</td><td>Full-stack hingga micro framework</td></tr>
            <tr><td><span class="badge-green">Data Science</span></td><td>NumPy, Pandas, Matplotlib, Seaborn</td><td>Data manipulation & visualization</td></tr>
            <tr><td><span class="badge-purple">ML/AI</span></td><td>scikit-learn, PyTorch, TensorFlow, JAX</td><td>Training & inference</td></tr>
            <tr><td><span class="badge-orange">NLP/LLM</span></td><td>Hugging Face, LangChain, spaCy</td><td>Language processing & LLM apps</td></tr>
            <tr><td><span class="badge-red">DevOps</span></td><td>Ansible, Fabric, Invoke</td><td>Infrastructure automation</td></tr>
            <tr><td><span class="badge-yellow">Testing</span></td><td>pytest, unittest, hypothesis</td><td>Unit, integration, property-based testing</td></tr>
        </table>
    </div>
</div>
`;

// ==================== GIL ANIMATION ====================
function initPythonAnimations() {
    const dpr = window.devicePixelRatio || 1;
    function setupCanvas(id, w, h) {
        const c = document.getElementById(id);
        if (!c) return null;
        const ctx = c.getContext('2d');
        c.width = w * dpr; c.height = h * dpr;
        c.style.width = w + 'px';
        c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c, ctx, w, h };
    }

    // ---- GIL Visualization ----
    const gil = setupCanvas('pythonGilCanvas', 700, 320);
    if (!gil) return;

    const { ctx, w, h } = gil;
    let animId = null;
    let running = false;
    let tick = 0;

    const threads = [
        { name: 'Thread 1', color: '#38bdf8', tasks: [] },
        { name: 'Thread 2', color: '#34d399', tasks: [] },
        { name: 'Thread 3', color: '#fb923c', tasks: [] },
        { name: 'Thread 4', color: '#f87171', tasks: [] },
    ];

    const gilSlotWidth = 30;
    const totalSlots = 60;
    let gilSchedule = [];
    let currentSlot = 0;

    function generateSchedule() {
        gilSchedule = [];
        let active = 0;
        for (let i = 0; i < totalSlots; i++) {
            // GIL switches thread roughly every 3-7 ticks
            if (i > 0 && Math.random() < 0.2) {
                active = Math.floor(Math.random() * threads.length);
            }
            gilSchedule.push(active);
        }
    }

    generateSchedule();

    function getStyle(prop) {
        return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
    }

    function drawFrame() {
        const bg = getStyle('--bg1') || '#0f172a';
        const text = getStyle('--text1') || '#e2e8f0';
        const text2 = getStyle('--text2') || '#94a3b8';

        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Title
        ctx.fillStyle = text;
        ctx.font = 'bold 15px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Python GIL — Hanya 1 Thread Aktif pada Satu Waktu', w / 2, 25);

        // Legend for cores
        ctx.font = '11px Inter, system-ui, sans-serif';
        ctx.fillStyle = text2;
        ctx.textAlign = 'left';
        ctx.fillText('CPU Cores tersedia: 4 | GIL memaksa hanya 1 thread berjalan', 20, 48);

        const timelineY = 70;
        const rowH = 45;
        const labelW = 80;
        const timelineX = labelW + 10;
        const timelineW = w - timelineX - 20;
        const slotW = timelineW / 20; // Show 20 slots at a time

        // Determine visible window
        const visibleStart = Math.max(0, currentSlot - 19);
        const visibleEnd = Math.min(totalSlots, visibleStart + 20);

        // Draw each thread row
        threads.forEach((thread, ti) => {
            const y = timelineY + ti * rowH;

            // Label
            ctx.fillStyle = thread.color;
            ctx.font = 'bold 12px Inter, system-ui, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(thread.name, labelW, y + 22);

            // Draw timeline slots
            for (let s = visibleStart; s < visibleEnd; s++) {
                const sx = timelineX + (s - visibleStart) * slotW;
                const isActive = gilSchedule[s] === ti;
                const isPast = s < currentSlot;
                const isCurrent = s === currentSlot;

                if (isPast || isCurrent) {
                    if (isActive) {
                        ctx.fillStyle = thread.color;
                        ctx.globalAlpha = isCurrent ? 1.0 : 0.7;
                        ctx.fillRect(sx + 1, y + 6, slotW - 2, 28);
                        ctx.globalAlpha = 1;

                        if (isCurrent) {
                            // Glow effect for current
                            ctx.shadowColor = thread.color;
                            ctx.shadowBlur = 10;
                            ctx.fillRect(sx + 1, y + 6, slotW - 2, 28);
                            ctx.shadowBlur = 0;
                        }

                        // Running label
                        ctx.fillStyle = '#000';
                        ctx.font = 'bold 8px Inter, system-ui, sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('RUN', sx + slotW / 2, y + 24);
                    } else {
                        // Waiting / blocked
                        ctx.fillStyle = text2;
                        ctx.globalAlpha = 0.15;
                        ctx.fillRect(sx + 1, y + 6, slotW - 2, 28);
                        ctx.globalAlpha = 1;

                        if (isPast || isCurrent) {
                            ctx.fillStyle = text2;
                            ctx.font = '7px Inter, system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.globalAlpha = 0.5;
                            ctx.fillText('WAIT', sx + slotW / 2, y + 24);
                            ctx.globalAlpha = 1;
                        }
                    }
                } else {
                    // Future — empty
                    ctx.strokeStyle = text2;
                    ctx.globalAlpha = 0.15;
                    ctx.strokeRect(sx + 1, y + 6, slotW - 2, 28);
                    ctx.globalAlpha = 1;
                }
            }
        });

        // GIL indicator
        const gilY = timelineY + threads.length * rowH + 15;
        ctx.fillStyle = text;
        ctx.font = 'bold 13px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('GIL Owner:', w / 2 - 60, gilY + 5);

        if (currentSlot < totalSlots) {
            const ownerIdx = gilSchedule[currentSlot];
            ctx.fillStyle = threads[ownerIdx].color;
            ctx.font = 'bold 13px Inter, system-ui, sans-serif';
            ctx.fillText(threads[ownerIdx].name, w / 2 + 30, gilY + 5);

            // Draw lock icon
            ctx.fillStyle = '#fbbf24';
            ctx.font = '16px serif';
            ctx.fillText('\uD83D\uDD12', w / 2 + 85, gilY + 7);
        }

        // Time indicator
        ctx.fillStyle = text2;
        ctx.font = '11px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Time Slot: ' + currentSlot + ' / ' + (totalSlots - 1), w / 2, gilY + 30);

        // Comparison note
        const noteY = gilY + 52;
        ctx.fillStyle = text2;
        ctx.font = '11px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Tanpa GIL (Go/Rust): semua thread berjalan paralel di core berbeda', w / 2, noteY);
        ctx.fillText('Dengan GIL (CPython): thread bergantian, hanya 1 aktif menjalankan bytecode', w / 2, noteY + 16);
    }

    function animate() {
        tick++;
        if (tick % 8 === 0 && currentSlot < totalSlots - 1) {
            currentSlot++;
        }
        drawFrame();
        if (currentSlot < totalSlots - 1 && running) {
            animId = requestAnimationFrame(animate);
        } else if (currentSlot >= totalSlots - 1) {
            running = false;
            drawFrame();
        }
    }

    function startGil() {
        if (running) return;
        if (currentSlot >= totalSlots - 1) {
            resetGil();
        }
        running = true;
        animate();
    }

    function resetGil() {
        running = false;
        if (animId) cancelAnimationFrame(animId);
        tick = 0;
        currentSlot = 0;
        generateSchedule();
        drawFrame();
    }

    const startBtn = document.getElementById('gilStartBtn');
    const resetBtn = document.getElementById('gilResetBtn');
    if (startBtn) startBtn.addEventListener('click', startGil);
    if (resetBtn) resetBtn.addEventListener('click', resetGil);

    drawFrame();
}
