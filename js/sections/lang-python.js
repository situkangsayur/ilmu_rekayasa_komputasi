// ====================== PYTHON DEEP DIVE ======================
sections['lang-python'] = () => `
<section class="animate-in">
<h1 class="section-title animate-in">Python Deep Dive</h1>
<p class="section-subtitle animate-in">${t('ML/Data Science, FFI dengan Go &amp; Rust, dan advanced Python internals', 'ML/Data Science, FFI with Go &amp; Rust, and advanced Python internals')}</p>
<p class="animate-in"><em>Ref: docs.python.org; "Fluent Python" (Ramalho, 2022); PyTorch Docs; PyO3 Guide; NumPy Docs</em></p>

<!-- ==================== 1. MENGAPA PYTHON? ==================== -->
<h2 class="animate-in">${t('1. Mengapa Python?', '1. Why Python?')}</h2>

<div class="card animate-in">
<h3>${t('Sejarah &amp; Filosofi', 'History &amp; Philosophy')}</h3>
<p>${t('<strong>Python</strong> diciptakan oleh <strong>Guido van Rossum</strong> di Centrum Wiskunde &amp; Informatica (CWI), Belanda. Versi pertama (0.9.0) dirilis <strong>Februari 1991</strong>. Nama diambil dari acara komedi BBC <em>Monty Python&apos;s Flying Circus</em>.', '<strong>Python</strong> was created by <strong>Guido van Rossum</strong> at Centrum Wiskunde &amp; Informatica (CWI), Netherlands. The first version (0.9.0) was released in <strong>February 1991</strong>. The name was taken from the BBC comedy show <em>Monty Python&apos;s Flying Circus</em>.')}</p>
<p>${t('Guido menjabat sebagai <em>Benevolent Dictator For Life (BDFL)</em> hingga 2018. Python 2 End-of-Life resmi terjadi 1 Januari 2020 — seluruh ekosistem kini menggunakan Python 3.', 'Guido served as <em>Benevolent Dictator For Life (BDFL)</em> until 2018. Python 2 End-of-Life officially occurred on January 1, 2020 — the entire ecosystem now uses Python 3.')}</p>
<div class="table-wrapper">
<table>
<tr><th>${t('Versi', 'Version')}</th><th>${t('Tahun', 'Year')}</th><th>${t('Fitur Kunci', 'Key Features')}</th></tr>
<tr><td>0.9.0</td><td>1991</td><td>${t('Rilis pertama — class, exception, functions', 'First release — class, exception, functions')}</td></tr>
<tr><td>2.0</td><td>2000</td><td>List comprehension, garbage collector</td></tr>
<tr><td>3.0</td><td>2008</td><td>print() function, Unicode default, integer division</td></tr>
<tr><td>3.5</td><td>2015</td><td>Type hints (PEP 484), async/await</td></tr>
<tr><td>3.6</td><td>2016</td><td>f-strings, __future__ annotations</td></tr>
<tr><td>3.8</td><td>2019</td><td>Walrus operator :=, Protocol (typing)</td></tr>
<tr><td>3.9</td><td>2020</td><td>${t('dict merge |=, list[int] tanpa typing', 'dict merge |=, list[int] without typing')}</td></tr>
<tr><td>3.10</td><td>2021</td><td>Structural pattern matching (match/case)</td></tr>
<tr><td>3.11</td><td>2022</td><td>${t('Exception groups, 10-60% lebih cepat', 'Exception groups, 10-60% faster')}</td></tr>
<tr><td>3.12</td><td>2023</td><td>Per-interpreter GIL, improved error messages</td></tr>
<tr><td>3.13</td><td>2024</td><td>Experimental free-threaded mode (no-GIL)</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>The Zen of Python (PEP 20)</h3>
<div class="code-block"><span class="cm">&gt;&gt;&gt; import this</span>

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Readability counts.
Errors should never pass silently.
Unless explicitly silenced.
There should be one-- and preferably only one --obvious way to do it.
Now is better than never.
If the implementation is hard to explain, it's a bad idea.
Namespaces are one honking great idea -- let's do more of those!</div>
</div>

<div class="card animate-in">
<h3>${t('Python vs Go vs Rust — Perbandingan', 'Python vs Go vs Rust — Comparison')}</h3>
<div class="table-wrapper">
<table>
<tr><th>${t('Aspek', 'Aspect')}</th><th>Python</th><th>Go</th><th>Rust</th></tr>
<tr><td>${t('Kecepatan', 'Speed')}</td><td>${t('Lambat (interpreter)', 'Slow (interpreter)')}</td><td>${t('Cepat (compiled)', 'Fast (compiled)')}</td><td>${t('Sangat cepat (C-level)', 'Very fast (C-level)')}</td></tr>
<tr><td>${t('Kemudahan', 'Ease of Use')}</td><td>${t('Sangat mudah', 'Very easy')}</td><td>${t('Mudah', 'Easy')}</td><td>${t('Kompleks (ownership)', 'Complex (ownership)')}</td></tr>
<tr><td>ML Ecosystem</td><td>${t('Dominan (PyTorch, TF)', 'Dominant (PyTorch, TF)')}</td><td>Minimal</td><td>${t('Berkembang (burn, tch)', 'Growing (burn, tch)')}</td></tr>
<tr><td>Concurrency</td><td>GIL (IO-bound ok)</td><td>Goroutine (excellent)</td><td>Fearless concurrency</td></tr>
<tr><td>Use Case ML</td><td>Research, prototyping, prod</td><td>Serving/inference API</td><td>Custom CUDA ops, perf</td></tr>
<tr><td>FFI</td><td>ctypes, cffi, PyO3</td><td>cgo, CGo export</td><td>PyO3 (first-class)</td></tr>
</table>
</div>
<div class="info-box">
${t('<strong>Mengapa Python mendominasi ML?</strong>', '<strong>Why does Python dominate ML?</strong>')}<br>
${t('NumPy (1995-&gt;), SciPy, Matplotlib, pandas, scikit-learn, PyTorch, TensorFlow, Hugging Face — ekosistem ini membutuhkan puluhan tahun untuk dibangun. Python menjadi <em>lingua franca</em> ML bukan hanya karena mudah, tapi karena network effect ekosistemnya yang tidak tertandingi.', 'NumPy (1995-&gt;), SciPy, Matplotlib, pandas, scikit-learn, PyTorch, TensorFlow, Hugging Face — this ecosystem took decades to build. Python became the <em>lingua franca</em> of ML not just because it is easy, but because of its unmatched ecosystem network effect.')}
</div>
</div>

<!-- ==================== 2. BASIC SYNTAX ==================== -->
<h2 class="animate-in">2. Basic Syntax (Python 3.12+)</h2>

<div class="card animate-in">
<h3>${t('Indentasi sebagai Sintaks', 'Indentation as Syntax')}</h3>
<p>${t('Python menggunakan <strong>indentasi</strong> (bukan kurung kurawal) untuk mendefinisikan blok kode. Standar: 4 spasi per level (PEP 8).', 'Python uses <strong>indentation</strong> (not curly braces) to define code blocks. Standard: 4 spaces per level (PEP 8).')}</p>
<div class="code-block"><span class="cm"># Benar — konsisten 4 spasi</span>
<span class="kw">def</span> <span class="fn">greet</span>(name: <span class="type">str</span>) -> <span class="type">str</span>:
    <span class="kw">if</span> name:
        <span class="kw">return</span> <span class="str">f"Hello, {name}!"</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"Hello, stranger!"</span>

<span class="cm"># Salah — IndentationError</span>
<span class="kw">def</span> <span class="fn">broken</span>():
  x = <span class="num">1</span>
    y = <span class="num">2</span>  <span class="cm"># IndentationError: unexpected indent</span></div>
</div>

<div class="card animate-in">
<h3>Variables, Type Hints &amp; f-strings</h3>
<div class="code-block"><span class="cm"># Dynamic typing — variabel adalah label ke objek</span>
x = <span class="num">42</span>
x = <span class="str">"hello"</span>  <span class="cm"># Sah — x kini merujuk ke str</span>

<span class="cm"># Type hints (PEP 484) — tidak mempengaruhi runtime</span>
name: <span class="type">str</span> = <span class="str">"Tazkia"</span>
score: <span class="type">float</span> = <span class="num">99.5</span>
active: <span class="type">bool</span> = <span class="kw">True</span>
value: <span class="type">int</span> | <span class="type">None</span> = <span class="kw">None</span>  <span class="cm"># Python 3.10+ union</span>

<span class="cm"># f-strings (Python 3.6+) — cara terbaik format string</span>
pi = <span class="num">3.14159</span>
<span class="fn">print</span>(<span class="str">f"Pi = {pi:.2f}"</span>)           <span class="cm"># Pi = 3.14</span>
<span class="fn">print</span>(<span class="str">f"Result: {2 ** 10}"</span>)        <span class="cm"># Result: 1024</span>
<span class="fn">print</span>(<span class="str">f"{name!r} len={len(name)}"</span>)  <span class="cm"># 'Tazkia' len=6</span>

<span class="cm"># f-string debug (Python 3.8+)</span>
<span class="fn">print</span>(<span class="str">f"{score=}"</span>)  <span class="cm"># score=99.5</span>

<span class="cm"># Multi-line strings</span>
query = <span class="str">"""
    SELECT *
    FROM users
    WHERE active = true
"""</span>

<span class="cm"># Walrus operator := (Python 3.8+) — assign and test</span>
data = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="kw">if</span> (n := <span class="fn">len</span>(data)) &gt; <span class="num">3</span>:
    <span class="fn">print</span>(<span class="str">f"Long list: {n} items"</span>)  <span class="cm"># Long list: 5 items</span></div>
</div>

<div class="card animate-in">
<h3>${t('Tipe Data Dasar', 'Basic Data Types')}</h3>
<div class="table-wrapper">
<table>
<tr><th>${t('Tipe', 'Type')}</th><th>${t('Contoh', 'Example')}</th><th>${t('Keterangan', 'Description')}</th><th>Immutable?</th></tr>
<tr><td><span class="badge-blue">int</span></td><td><code>42, -7, 0xFF, 0b1010, 10_000_000</code></td><td>${t('Presisi tak terbatas', 'Unlimited precision')}</td><td>${t('Ya', 'Yes')}</td></tr>
<tr><td><span class="badge-green">float</span></td><td><code>3.14, 2.5e10, float('inf')</code></td><td>IEEE 754 double (64-bit)</td><td>${t('Ya', 'Yes')}</td></tr>
<tr><td><span class="badge-purple">complex</span></td><td><code>3+4j, complex(3, 4)</code></td><td>${t('Bilangan kompleks', 'Complex number')}</td><td>${t('Ya', 'Yes')}</td></tr>
<tr><td><span class="badge-orange">bool</span></td><td><code>True, False</code></td><td>Subclass int (True=1, False=0)</td><td>${t('Ya', 'Yes')}</td></tr>
<tr><td><span class="badge-red">str</span></td><td><code>"hello", 'world'</code></td><td>Unicode, sequence of chars</td><td>${t('Ya', 'Yes')}</td></tr>
<tr><td><span class="badge-yellow">bytes</span></td><td><code>b"hello", bytes(5)</code></td><td>Raw bytes</td><td>${t('Ya', 'Yes')}</td></tr>
<tr><td>NoneType</td><td><code>None</code></td><td>${t('Singleton, "tidak ada nilai"', 'Singleton, "no value"')}</td><td>${t('Ya', 'Yes')}</td></tr>
</table>
</div>
</div>

<!-- ==================== 3. DATA STRUCTURES ==================== -->
<h2 class="animate-in">3. Data Structures</h2>

<div class="card animate-in">
<h3>Lists &amp; Comprehensions</h3>
<div class="code-block"><span class="cm"># List — mutable, ordered, allow duplicates</span>
nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]

<span class="cm"># Slicing [start:stop:step]</span>
nums[<span class="num">1</span>:<span class="num">4</span>]    <span class="cm"># [2, 3, 4]</span>
nums[::<span class="num">-1</span>]   <span class="cm"># [5, 4, 3, 2, 1] — reversed</span>
nums[<span class="num">2</span>:]     <span class="cm"># [3, 4, 5]</span>

<span class="cm"># Methods</span>
nums.<span class="fn">append</span>(<span class="num">6</span>)
nums.<span class="fn">extend</span>([<span class="num">7</span>, <span class="num">8</span>])
nums.<span class="fn">insert</span>(<span class="num">0</span>, <span class="num">0</span>)
nums.<span class="fn">remove</span>(<span class="num">0</span>)
nums.<span class="fn">sort</span>(reverse=<span class="kw">True</span>)

<span class="cm"># List comprehension — lebih cepat dari loop biasa</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]
evens   = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
matrix  = [[i*j <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)] <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)]

<span class="cm"># Flattening nested list</span>
flat = [x <span class="kw">for</span> row <span class="kw">in</span> matrix <span class="kw">for</span> x <span class="kw">in</span> row]</div>
</div>

<div class="card animate-in">
<h3>Tuples &amp; Named Tuples</h3>
<div class="code-block"><span class="cm"># Tuple — immutable, ordered, faster than list</span>
point = (<span class="num">3.0</span>, <span class="num">4.0</span>)
x, y = point  <span class="cm"># unpacking</span>

<span class="cm"># Extended unpacking (Python 3+)</span>
first, *rest = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]  <span class="cm"># first=1, rest=[2,3,4,5]</span>

<span class="cm"># Named tuple — lebih readable, masih immutable</span>
<span class="kw">from</span> collections <span class="kw">import</span> namedtuple
Point = <span class="fn">namedtuple</span>(<span class="str">'Point'</span>, [<span class="str">'x'</span>, <span class="str">'y'</span>, <span class="str">'z'</span>])
p = <span class="fn">Point</span>(<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>)
<span class="fn">print</span>(p.x, p.y, p.z)   <span class="cm"># 1.0 2.0 3.0</span>
<span class="fn">print</span>(p._asdict())      <span class="cm"># OrderedDict</span></div>
</div>

<div class="card animate-in">
<h3>Dictionaries &amp; Sets</h3>
<div class="code-block"><span class="cm"># Dict — mutable, ordered (Python 3.7+), key-value</span>
user = {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">30</span>, <span class="str">"active"</span>: <span class="kw">True</span>}

<span class="cm"># Safe access</span>
user.<span class="fn">get</span>(<span class="str">"email"</span>, <span class="str">"N/A"</span>)  <span class="cm"># "N/A" (key tidak ada)</span>

<span class="cm"># Dict comprehension</span>
sq_map = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)}  <span class="cm"># {0:0, 1:1, 2:4, ...}</span>

<span class="cm"># Merge dicts (Python 3.9+)</span>
defaults = {<span class="str">"timeout"</span>: <span class="num">30</span>, <span class="str">"retries"</span>: <span class="num">3</span>}
config   = {<span class="str">"timeout"</span>: <span class="num">60</span>}
merged = defaults | config        <span class="cm"># baru: {timeout:60, retries:3}</span>
defaults |= config                <span class="cm"># in-place merge</span>

<span class="cm"># Iterasi</span>
<span class="kw">for</span> k, v <span class="kw">in</span> user.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="str">f"{k}: {v}"</span>)

<span class="cm"># Sets — unique elements, unordered</span>
a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>}
<span class="fn">print</span>(a | b)   <span class="cm"># union: {1,2,3,4,5,6}</span>
<span class="fn">print</span>(a &amp; b)   <span class="cm"># intersection: {3,4}</span>
<span class="fn">print</span>(a - b)   <span class="cm"># difference: {1,2}</span>
<span class="fn">print</span>(a ^ b)   <span class="cm"># symmetric diff: {1,2,5,6}</span></div>
</div>

<!-- ==================== 4. CONTROL FLOW ==================== -->
<h2 class="animate-in">4. Control Flow</h2>

<div class="card animate-in">
<h3>if/elif/else &amp; match/case</h3>
<div class="code-block"><span class="cm"># Standard conditional</span>
score = <span class="num">85</span>
<span class="kw">if</span> score &gt;= <span class="num">90</span>:
    grade = <span class="str">"A"</span>
<span class="kw">elif</span> score &gt;= <span class="num">80</span>:
    grade = <span class="str">"B"</span>
<span class="kw">elif</span> score &gt;= <span class="num">70</span>:
    grade = <span class="str">"C"</span>
<span class="kw">else</span>:
    grade = <span class="str">"D"</span>

<span class="cm"># Ternary expression</span>
result = <span class="str">"pass"</span> <span class="kw">if</span> score &gt;= <span class="num">60</span> <span class="kw">else</span> <span class="str">"fail"</span>

<span class="cm"># match/case — Structural Pattern Matching (Python 3.10+)</span>
<span class="kw">def</span> <span class="fn">handle_command</span>(command):
    <span class="kw">match</span> command.<span class="fn">split</span>():
        <span class="kw">case</span> [<span class="str">"quit"</span>]:
            <span class="kw">return</span> <span class="str">"Exiting..."</span>
        <span class="kw">case</span> [<span class="str">"go"</span>, direction] <span class="kw">if</span> direction <span class="kw">in</span> (<span class="str">"north"</span>, <span class="str">"south"</span>):
            <span class="kw">return</span> <span class="str">f"Going {direction}"</span>
        <span class="kw">case</span> [<span class="str">"pick"</span>, item]:
            <span class="kw">return</span> <span class="str">f"Picking up {item}"</span>
        <span class="kw">case</span> _:
            <span class="kw">return</span> <span class="str">"Unknown command"</span>

<span class="cm"># match dengan dataclass/TypedDict</span>
<span class="kw">from</span> dataclasses <span class="kw">import</span> dataclass

@dataclass
<span class="kw">class</span> <span class="type">Point</span>:
    x: <span class="type">float</span>
    y: <span class="type">float</span>

<span class="kw">def</span> <span class="fn">classify_point</span>(p):
    <span class="kw">match</span> p:
        <span class="kw">case</span> Point(x=<span class="num">0</span>, y=<span class="num">0</span>):
            <span class="kw">return</span> <span class="str">"origin"</span>
        <span class="kw">case</span> Point(x=<span class="num">0</span>, y=y):
            <span class="kw">return</span> <span class="str">f"Y axis at {y}"</span>
        <span class="kw">case</span> Point(x=x, y=<span class="num">0</span>):
            <span class="kw">return</span> <span class="str">f"X axis at {x}"</span>
        <span class="kw">case</span> _:
            <span class="kw">return</span> <span class="str">"Quadrant"</span></div>
</div>

<div class="card animate-in">
<h3>Loops &amp; Generators</h3>
<div class="code-block"><span class="cm"># enumerate — indeks + nilai</span>
fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> i, fruit <span class="kw">in</span> <span class="fn">enumerate</span>(fruits, start=<span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"{i}. {fruit}"</span>)

<span class="cm"># zip — gabungkan iterables</span>
names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]
scores = [<span class="num">90</span>, <span class="num">85</span>]
<span class="kw">for</span> name, score <span class="kw">in</span> <span class="fn">zip</span>(names, scores):
    <span class="fn">print</span>(<span class="str">f"{name}: {score}"</span>)

<span class="cm"># Generator expression — lazy, hemat memori</span>
total = <span class="fn">sum</span>(x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1_000_000</span>))

<span class="cm"># Dict comprehension &amp; set comprehension</span>
word_len = {word: <span class="fn">len</span>(word) <span class="kw">for</span> word <span class="kw">in</span> [<span class="str">"hello"</span>, <span class="str">"world"</span>]}
unique_lens = {<span class="fn">len</span>(word) <span class="kw">for</span> word <span class="kw">in</span> [<span class="str">"hi"</span>, <span class="str">"bye"</span>, <span class="str">"ok"</span>]}

<span class="cm"># Generator function dengan yield</span>
<span class="kw">def</span> <span class="fn">fibonacci</span>():
    a, b = <span class="num">0</span>, <span class="num">1</span>
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">yield</span> a
        a, b = b, a + b

fib = <span class="fn">fibonacci</span>()
<span class="fn">print</span>([<span class="fn">next</span>(fib) <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)])
<span class="cm"># [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</span></div>
</div>

<!-- ==================== 5. FUNCTIONS ==================== -->
<h2 class="animate-in">5. Functions</h2>

<div class="card animate-in">
<h3>def, *args, **kwargs, Lambda</h3>
<div class="code-block"><span class="cm"># Default args, *args, **kwargs</span>
<span class="kw">def</span> <span class="fn">create_user</span>(name: <span class="type">str</span>, age: <span class="type">int</span> = <span class="num">18</span>, *roles, **opts):
    <span class="fn">print</span>(<span class="str">f"User: {name}, age={age}"</span>)
    <span class="fn">print</span>(<span class="str">f"Roles: {roles}"</span>)       <span class="cm"># tuple</span>
    <span class="fn">print</span>(<span class="str">f"Options: {opts}"</span>)     <span class="cm"># dict</span>

<span class="fn">create_user</span>(<span class="str">"Ali"</span>, <span class="num">25</span>, <span class="str">"admin"</span>, <span class="str">"editor"</span>, active=<span class="kw">True</span>, theme=<span class="str">"dark"</span>)

<span class="cm"># Keyword-only args (setelah *)</span>
<span class="kw">def</span> <span class="fn">connect</span>(host: <span class="type">str</span>, *, port: <span class="type">int</span> = <span class="num">5432</span>, timeout: <span class="type">int</span> = <span class="num">30</span>):
    <span class="kw">return</span> <span class="str">f"{host}:{port}"</span>

<span class="fn">connect</span>(<span class="str">"localhost"</span>, port=<span class="num">5433</span>)  <span class="cm"># port harus keyword</span>

<span class="cm"># Lambda — anonymous single-expression function</span>
square = <span class="kw">lambda</span> x: x**<span class="num">2</span>
add = <span class="kw">lambda</span> x, y: x + y
sorter = <span class="fn">sorted</span>([(<span class="str">"Alice"</span>, <span class="num">90</span>), (<span class="str">"Bob"</span>, <span class="num">85</span>)], key=<span class="kw">lambda</span> t: t[<span class="num">1</span>], reverse=<span class="kw">True</span>)

<span class="cm"># Closures</span>
<span class="kw">def</span> <span class="fn">make_multiplier</span>(n: <span class="type">int</span>):
    <span class="kw">def</span> <span class="fn">multiplier</span>(x):
        <span class="kw">return</span> x * n  <span class="cm"># n di-capture dari enclosing scope</span>
    <span class="kw">return</span> multiplier

triple = <span class="fn">make_multiplier</span>(<span class="num">3</span>)
<span class="fn">print</span>(<span class="fn">triple</span>(<span class="num">7</span>))  <span class="cm"># 21</span></div>
</div>

<div class="card animate-in">
<h3>Decorators &amp; functools</h3>
<div class="code-block"><span class="kw">import</span> functools
<span class="kw">import</span> time

<span class="cm"># Decorator sederhana</span>
<span class="kw">def</span> <span class="fn">timer</span>(func):
    @functools.<span class="fn">wraps</span>(func)  <span class="cm"># preserve metadata</span>
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        t0 = time.<span class="fn">perf_counter</span>()
        result = <span class="fn">func</span>(*args, **kwargs)
        dt = time.<span class="fn">perf_counter</span>() - t0
        <span class="fn">print</span>(<span class="str">f"{func.__name__} took {dt:.4f}s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

@<span class="fn">timer</span>
<span class="kw">def</span> <span class="fn">slow_function</span>(n: <span class="type">int</span>) -> <span class="type">int</span>:
    <span class="kw">return</span> <span class="fn">sum</span>(<span class="fn">range</span>(n))

<span class="cm"># Decorator dengan argumen (factory)</span>
<span class="kw">def</span> <span class="fn">retry</span>(times=<span class="num">3</span>, delay=<span class="num">1.0</span>):
    <span class="kw">def</span> <span class="fn">decorator</span>(func):
        @functools.<span class="fn">wraps</span>(func)
        <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
            <span class="kw">for</span> attempt <span class="kw">in</span> <span class="fn">range</span>(times):
                <span class="kw">try</span>:
                    <span class="kw">return</span> <span class="fn">func</span>(*args, **kwargs)
                <span class="kw">except</span> Exception <span class="kw">as</span> e:
                    <span class="kw">if</span> attempt == times - <span class="num">1</span>: <span class="kw">raise</span>
                    time.<span class="fn">sleep</span>(delay)
        <span class="kw">return</span> wrapper
    <span class="kw">return</span> decorator

@<span class="fn">retry</span>(times=<span class="num">3</span>, delay=<span class="num">0.5</span>)
<span class="kw">def</span> <span class="fn">fetch_data</span>(url: <span class="type">str</span>): ...

<span class="cm"># lru_cache — memoization</span>
@functools.<span class="fn">lru_cache</span>(maxsize=<span class="num">128</span>)
<span class="kw">def</span> <span class="fn">fib</span>(n: <span class="type">int</span>) -> <span class="type">int</span>:
    <span class="kw">if</span> n &lt; <span class="num">2</span>: <span class="kw">return</span> n
    <span class="kw">return</span> <span class="fn">fib</span>(n-<span class="num">1</span>) + <span class="fn">fib</span>(n-<span class="num">2</span>)

<span class="cm"># functools.partial — pre-fill arguments</span>
<span class="kw">from</span> functools <span class="kw">import</span> partial
log_error = <span class="fn">partial</span>(<span class="fn">print</span>, <span class="str">"[ERROR]"</span>)
<span class="fn">log_error</span>(<span class="str">"Something went wrong"</span>)  <span class="cm"># [ERROR] Something went wrong</span></div>
</div>

<!-- ==================== 6. OOP ==================== -->
<h2 class="animate-in">6. OOP in Python</h2>

<div class="card animate-in">
<h3>class, Inheritance, Dunder Methods</h3>
<div class="code-block"><span class="kw">from</span> typing <span class="kw">import</span> Iterator

<span class="kw">class</span> <span class="type">Vector</span>:
    <span class="str">"""2D Vector dengan operator overloading."""</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, x: <span class="type">float</span>, y: <span class="type">float</span>):
        <span class="kw">self</span>.x = x
        <span class="kw">self</span>.y = y

    <span class="kw">def</span> <span class="fn">__repr__</span>(<span class="kw">self</span>) -> <span class="type">str</span>:
        <span class="kw">return</span> <span class="str">f"Vector({self.x}, {self.y})"</span>

    <span class="kw">def</span> <span class="fn">__add__</span>(<span class="kw">self</span>, other: <span class="str">"Vector"</span>) -> <span class="str">"Vector"</span>:
        <span class="kw">return</span> Vector(<span class="kw">self</span>.x + other.x, <span class="kw">self</span>.y + other.y)

    <span class="kw">def</span> <span class="fn">__mul__</span>(<span class="kw">self</span>, scalar: <span class="type">float</span>) -> <span class="str">"Vector"</span>:
        <span class="kw">return</span> Vector(<span class="kw">self</span>.x * scalar, <span class="kw">self</span>.y * scalar)

    <span class="kw">def</span> <span class="fn">__abs__</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="kw">return</span> (<span class="kw">self</span>.x**<span class="num">2</span> + <span class="kw">self</span>.y**<span class="num">2</span>) ** <span class="num">0.5</span>

    <span class="kw">def</span> <span class="fn">__bool__</span>(<span class="kw">self</span>) -> <span class="type">bool</span>:
        <span class="kw">return</span> bool(<span class="fn">abs</span>(<span class="kw">self</span>))

    <span class="kw">def</span> <span class="fn">__iter__</span>(<span class="kw">self</span>) -> Iterator[<span class="type">float</span>]:
        <span class="kw">yield</span> <span class="kw">self</span>.x
        <span class="kw">yield</span> <span class="kw">self</span>.y

v1 = Vector(<span class="num">3</span>, <span class="num">4</span>)
v2 = Vector(<span class="num">1</span>, <span class="num">2</span>)
<span class="fn">print</span>(v1 + v2)     <span class="cm"># Vector(4, 6)</span>
<span class="fn">print</span>(v1 * <span class="num">2</span>)      <span class="cm"># Vector(6, 8)</span>
<span class="fn">print</span>(<span class="fn">abs</span>(v1))     <span class="cm"># 5.0</span>
x, y = v1           <span class="cm"># unpacking via __iter__</span></div>
</div>

<div class="card animate-in">
<h3>dataclasses, @property, Protocols</h3>
<div class="code-block"><span class="kw">from</span> dataclasses <span class="kw">import</span> dataclass, field
<span class="kw">from</span> typing <span class="kw">import</span> Protocol

<span class="cm"># dataclass (Python 3.7+) — otomatis __init__, __repr__, __eq__</span>
@dataclass(frozen=<span class="kw">True</span>, order=<span class="kw">True</span>)
<span class="kw">class</span> <span class="type">Employee</span>:
    name: <span class="type">str</span>
    department: <span class="type">str</span>
    salary: <span class="type">float</span>
    skills: <span class="type">list</span>[<span class="type">str</span>] = field(default_factory=<span class="fn">list</span>)

    @property
    <span class="kw">def</span> <span class="fn">annual_bonus</span>(<span class="kw">self</span>) -> <span class="type">float</span>:
        <span class="kw">return</span> <span class="kw">self</span>.salary * <span class="num">0.1</span>

emp = <span class="fn">Employee</span>(<span class="str">"Ali"</span>, <span class="str">"Engineering"</span>, <span class="num">80_000</span>)
<span class="fn">print</span>(emp.annual_bonus)  <span class="cm"># 8000.0</span>

<span class="cm"># Protocol — structural subtyping (duck typing formal)</span>
<span class="kw">class</span> <span class="type">Drawable</span>(Protocol):
    <span class="kw">def</span> <span class="fn">draw</span>(<span class="kw">self</span>) -> <span class="kw">None</span>: ...
    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>) -> <span class="type">float</span>: ...

<span class="cm"># Kelas tidak perlu inherit dari Drawable!</span>
<span class="kw">class</span> <span class="type">Circle</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, r: <span class="type">float</span>): <span class="kw">self</span>.r = r
    <span class="kw">def</span> <span class="fn">draw</span>(<span class="kw">self</span>): <span class="fn">print</span>(<span class="str">"O"</span>)
    <span class="kw">def</span> <span class="fn">area</span>(<span class="kw">self</span>) -> <span class="type">float</span>: <span class="kw">return</span> <span class="num">3.14159</span> * <span class="kw">self</span>.r**<span class="num">2</span>

<span class="kw">def</span> <span class="fn">render</span>(shape: <span class="type">Drawable</span>) -> <span class="kw">None</span>:
    shape.<span class="fn">draw</span>()
    <span class="fn">print</span>(<span class="str">f"area = {shape.area():.2f}"</span>)

<span class="fn">render</span>(<span class="fn">Circle</span>(<span class="num">5</span>))  <span class="cm"># mypy happy!</span></div>
</div>

<div class="card animate-in">
<h3>MRO, Abstract Classes &amp; __slots__</h3>
<div class="code-block"><span class="kw">from</span> abc <span class="kw">import</span> ABC, abstractmethod

<span class="cm"># Abstract base class</span>
<span class="kw">class</span> <span class="type">Model</span>(ABC):
    @abstractmethod
    <span class="kw">def</span> <span class="fn">forward</span>(<span class="kw">self</span>, x): ...

    @abstractmethod
    <span class="kw">def</span> <span class="fn">parameters</span>(<span class="kw">self</span>): ...

<span class="kw">class</span> <span class="type">LinearModel</span>(<span class="type">Model</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, w, b): <span class="kw">self</span>.w, <span class="kw">self</span>.b = w, b
    <span class="kw">def</span> <span class="fn">forward</span>(<span class="kw">self</span>, x): <span class="kw">return</span> <span class="kw">self</span>.w * x + <span class="kw">self</span>.b
    <span class="kw">def</span> <span class="fn">parameters</span>(<span class="kw">self</span>): <span class="kw">return</span> [<span class="kw">self</span>.w, <span class="kw">self</span>.b]

<span class="cm"># __slots__ — optimalkan memori (tidak ada __dict__ per instance)</span>
<span class="kw">class</span> <span class="type">Point</span>:
    __slots__ = (<span class="str">'x'</span>, <span class="str">'y'</span>)  <span class="cm"># hemat ~40% memori vs normal class</span>
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, x, y): <span class="kw">self</span>.x = x; <span class="kw">self</span>.y = y

<span class="cm"># MRO — Method Resolution Order (C3 linearization)</span>
<span class="kw">class</span> <span class="type">A</span>: <span class="kw">pass</span>
<span class="kw">class</span> <span class="type">B</span>(<span class="type">A</span>): <span class="kw">pass</span>
<span class="kw">class</span> <span class="type">C</span>(<span class="type">A</span>): <span class="kw">pass</span>
<span class="kw">class</span> <span class="type">D</span>(<span class="type">B</span>, <span class="type">C</span>): <span class="kw">pass</span>
<span class="fn">print</span>(D.__mro__)  <span class="cm"># (D, B, C, A, object)</span></div>
</div>

<!-- ==================== 7. ERROR HANDLING ==================== -->
<h2 class="animate-in">7. Error Handling</h2>

<div class="card animate-in">
<h3>try/except/else/finally &amp; Context Managers</h3>
<div class="code-block"><span class="kw">from</span> contextlib <span class="kw">import</span> contextmanager
<span class="kw">import</span> contextlib

<span class="cm"># Full exception handling</span>
<span class="kw">try</span>:
    result = <span class="num">10</span> / <span class="num">0</span>
<span class="kw">except</span> ZeroDivisionError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">f"Math error: {e}"</span>)
<span class="kw">except</span> (TypeError, ValueError) <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">f"Type/Value error: {e}"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"No exception!"</span>)   <span class="cm"># hanya jika try berhasil</span>
<span class="kw">finally</span>:
    <span class="fn">print</span>(<span class="str">"Always runs"</span>)     <span class="cm"># selalu dieksekusi</span>

<span class="cm"># Custom exception hierarchy</span>
<span class="kw">class</span> <span class="type">AppError</span>(Exception):
    <span class="str">"""Base exception untuk aplikasi."""</span>
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, message: <span class="type">str</span>, code: <span class="type">int</span> = <span class="num">0</span>):
        <span class="fn">super</span>().__init__(message)
        <span class="kw">self</span>.code = code

<span class="kw">class</span> <span class="type">DatabaseError</span>(<span class="type">AppError</span>): <span class="kw">pass</span>
<span class="kw">class</span> <span class="type">NetworkError</span>(<span class="type">AppError</span>): <span class="kw">pass</span>

<span class="cm"># Context manager via @contextmanager</span>
@contextmanager
<span class="kw">def</span> <span class="fn">managed_resource</span>(name: <span class="type">str</span>):
    <span class="fn">print</span>(<span class="str">f"Opening {name}"</span>)
    resource = {<span class="str">"name"</span>: name, <span class="str">"open"</span>: <span class="kw">True</span>}
    <span class="kw">try</span>:
        <span class="kw">yield</span> resource
    <span class="kw">finally</span>:
        resource[<span class="str">"open"</span>] = <span class="kw">False</span>
        <span class="fn">print</span>(<span class="str">f"Closing {name}"</span>)

<span class="kw">with</span> <span class="fn">managed_resource</span>(<span class="str">"database"</span>) <span class="kw">as</span> r:
    <span class="fn">print</span>(<span class="str">f"Using: {r['name']}"</span>)

<span class="cm"># contextlib.suppress — ignore specific exceptions</span>
<span class="kw">with</span> contextlib.<span class="fn">suppress</span>(FileNotFoundError):
    <span class="fn">open</span>(<span class="str">"nonexistent.txt"</span>)</div>
</div>

<!-- ==================== 8. MODULES & PACKAGES ==================== -->
<h2 class="animate-in">8. Modules &amp; Packages</h2>

<div class="card animate-in">
<h3>Import, Virtual Environments &amp; pyproject.toml</h3>
<div class="code-block"><span class="cm"># Import patterns</span>
<span class="kw">import</span> os
<span class="kw">import</span> os.path <span class="kw">as</span> osp
<span class="kw">from</span> pathlib <span class="kw">import</span> Path
<span class="kw">from</span> typing <span class="kw">import</span> Optional, Union, TypeVar

<span class="cm"># Lazy import untuk mempercepat startup</span>
<span class="kw">def</span> <span class="fn">load_data</span>(path: <span class="type">str</span>):
    <span class="kw">import</span> pandas <span class="kw">as</span> pd  <span class="cm"># import saat dibutuhkan</span>
    <span class="kw">return</span> pd.<span class="fn">read_csv</span>(path)

<span class="cm"># __name__ == '__main__' guard</span>
<span class="kw">if</span> __name__ == <span class="str">'__main__'</span>:
    <span class="fn">print</span>(<span class="str">"Dijalankan langsung"</span>)
<span class="cm"># Saat diimport, blok ini tidak dieksekusi</span></div>
<div class="code-block"><span class="cm"># Virtual environment</span>
python3 -m venv .venv
source .venv/bin/activate     <span class="cm"># Linux/macOS</span>
.venv\Scripts\activate.bat    <span class="cm"># Windows</span>

<span class="cm"># pyproject.toml — modern Python packaging (PEP 517/518)</span>
<span class="cm"># [build-system]</span>
<span class="cm"># requires = ["hatchling"]</span>
<span class="cm"># build-backend = "hatchling.build"</span>

<span class="cm"># [project]</span>
<span class="cm"># name = "my-package"</span>
<span class="cm"># version = "0.1.0"</span>
<span class="cm"># dependencies = ["numpy&gt;=1.24", "pandas&gt;=2.0"]</span>
<span class="cm"># requires-python = "&gt;=3.11"</span>

<span class="cm"># Install project</span>
pip install -e .              <span class="cm"># editable install</span>
pip install "my-package[dev]"  <span class="cm"># dengan optional deps</span></div>
</div>

<!-- ==================== 9. DATA SCIENCE & ML ==================== -->
<h2 class="animate-in">${t('9. Python untuk Data Science &amp; ML', '9. Python for Data Science &amp; ML')}</h2>

<div class="card animate-in">
<h3>NumPy — N-dimensional Arrays</h3>
<p>${t('<strong>NumPy</strong> adalah fondasi hampir seluruh ekosistem ML Python. ndarray menyimpan data dalam memori kontiguous dan operasinya dijalankan dalam C/Fortran — jauh lebih cepat dari Python list.', '<strong>NumPy</strong> is the foundation of nearly the entire Python ML ecosystem. ndarray stores data in contiguous memory and operations run in C/Fortran — much faster than Python lists.')}</p>
<div class="code-block"><span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># Membuat array</span>
a = np.<span class="fn">array</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>], dtype=np.float32)
zeros = np.<span class="fn">zeros</span>((<span class="num">3</span>, <span class="num">4</span>))
eye   = np.<span class="fn">eye</span>(<span class="num">3</span>)                   <span class="cm"># identity matrix 3x3</span>
rand  = np.random.<span class="fn">randn</span>(<span class="num">100</span>, <span class="num">10</span>)   <span class="cm"># normal distribution</span>
lin   = np.<span class="fn">linspace</span>(<span class="num">0</span>, <span class="num">2</span>*np.pi, <span class="num">100</span>)

<span class="cm"># Indexing &amp; Slicing</span>
mat = np.<span class="fn">arange</span>(<span class="num">12</span>).<span class="fn">reshape</span>(<span class="num">3</span>, <span class="num">4</span>)
mat[<span class="num">0</span>, :]        <span class="cm"># baris pertama</span>
mat[:, <span class="num">1</span>]        <span class="cm"># kolom kedua</span>
mat[<span class="num">1</span>:<span class="num">3</span>, <span class="num">0</span>:<span class="num">2</span>]   <span class="cm"># submatrix</span>
mat[mat &gt; <span class="num">5</span>]     <span class="cm"># boolean indexing</span>

<span class="cm"># Broadcasting — operasi antar shape yang compatible</span>
A = np.<span class="fn">ones</span>((<span class="num">3</span>, <span class="num">4</span>))
B = np.<span class="fn">array</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>])  <span class="cm"># shape (4,)</span>
C = A + B  <span class="cm"># B di-broadcast ke shape (3,4)</span>

<span class="cm"># Vectorized computation vs loop</span>
x = np.random.<span class="fn">rand</span>(<span class="num">1_000_000</span>)
result_np = np.<span class="fn">sqrt</span>(x) * np.<span class="fn">sin</span>(x)  <span class="cm"># ~10ms</span>
<span class="cm"># result_py = [math.sqrt(v)*math.sin(v) for v in x]  # ~500ms</span>

<span class="cm"># Linear algebra</span>
A = np.random.<span class="fn">randn</span>(<span class="num">4</span>, <span class="num">4</span>)
b = np.random.<span class="fn">randn</span>(<span class="num">4</span>)
x = np.linalg.<span class="fn">solve</span>(A, b)      <span class="cm"># solve Ax = b</span>
U, S, Vt = np.linalg.<span class="fn">svd</span>(A)    <span class="cm"># Singular Value Decomposition</span>
eigvals = np.linalg.<span class="fn">eigvals</span>(A) <span class="cm"># eigenvalues</span>
norm = np.linalg.<span class="fn">norm</span>(b)        <span class="cm"># L2 norm</span></div>
</div>

<div class="card animate-in">
<h3>Pandas — DataFrames untuk Data Analysis</h3>
<div class="code-block"><span class="kw">import</span> pandas <span class="kw">as</span> pd
<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># Membuat DataFrame</span>
df = pd.<span class="fn">DataFrame</span>({
    <span class="str">"name"</span>: [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Charlie"</span>, <span class="str">"Diana"</span>],
    <span class="str">"age"</span>: [<span class="num">25</span>, <span class="num">30</span>, <span class="num">35</span>, <span class="num">28</span>],
    <span class="str">"salary"</span>: [<span class="num">70_000</span>, <span class="num">90_000</span>, <span class="num">85_000</span>, <span class="num">75_000</span>],
    <span class="str">"dept"</span>: [<span class="str">"Eng"</span>, <span class="str">"Eng"</span>, <span class="str">"HR"</span>, <span class="str">"Marketing"</span>],
})

<span class="cm"># Membaca data</span>
df = pd.<span class="fn">read_csv</span>(<span class="str">"data.csv"</span>, parse_dates=[<span class="str">"date"</span>], dtype={<span class="str">"id"</span>: np.int32})
df = pd.<span class="fn">read_json</span>(<span class="str">"data.json"</span>)
df = pd.<span class="fn">read_parquet</span>(<span class="str">"data.parquet"</span>)

<span class="cm"># Filtering</span>
eng_team = df[df[<span class="str">"dept"</span>] == <span class="str">"Eng"</span>]
senior = df[(df[<span class="str">"age"</span>] &gt; <span class="num">27</span>) &amp; (df[<span class="str">"salary"</span>] &gt; <span class="num">80_000</span>)]

<span class="cm"># GroupBy</span>
dept_stats = df.<span class="fn">groupby</span>(<span class="str">"dept"</span>).<span class="fn">agg</span>(
    avg_salary=(<span class="str">"salary"</span>, <span class="str">"mean"</span>),
    headcount=(<span class="str">"name"</span>, <span class="str">"count"</span>),
    max_age=(<span class="str">"age"</span>, <span class="str">"max"</span>),
)

<span class="cm"># Merge / Join</span>
departments = pd.<span class="fn">DataFrame</span>({<span class="str">"dept"</span>: [<span class="str">"Eng"</span>, <span class="str">"HR"</span>], <span class="str">"budget"</span>: [<span class="num">1_000_000</span>, <span class="num">500_000</span>]})
merged = df.<span class="fn">merge</span>(departments, on=<span class="str">"dept"</span>, how=<span class="str">"left"</span>)

<span class="cm"># Data cleaning</span>
df_clean = (df
    .<span class="fn">dropna</span>(subset=[<span class="str">"salary"</span>])          <span class="cm"># drop rows dengan NaN salary</span>
    .<span class="fn">fillna</span>({<span class="str">"age"</span>: df[<span class="str">"age"</span>].<span class="fn">median</span>()}) <span class="cm"># fill NaN age dengan median</span>
    .<span class="fn">astype</span>({<span class="str">"age"</span>: np.int32})            <span class="cm"># cast tipe data</span>
    .<span class="fn">reset_index</span>(drop=<span class="kw">True</span>)
)</div>
</div>

<div class="card animate-in">
<h3>Scikit-learn — ML Pipeline</h3>
<div class="code-block"><span class="kw">from</span> sklearn.pipeline <span class="kw">import</span> Pipeline
<span class="kw">from</span> sklearn.preprocessing <span class="kw">import</span> StandardScaler, LabelEncoder
<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> RandomForestClassifier
<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LinearRegression
<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split, cross_val_score
<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> classification_report
<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># Generate data</span>
X = np.random.<span class="fn">randn</span>(<span class="num">1000</span>, <span class="num">10</span>)
y = (X[:, <span class="num">0</span>] + X[:, <span class="num">1</span>] &gt; <span class="num">0</span>).<span class="fn">astype</span>(int)

<span class="cm"># Split train/test</span>
X_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(
    X, y, test_size=<span class="num">0.2</span>, random_state=<span class="num">42</span>
)

<span class="cm"># Pipeline — chaining transforms + estimator</span>
pipe = <span class="fn">Pipeline</span>([
    (<span class="str">"scaler"</span>, <span class="fn">StandardScaler</span>()),
    (<span class="str">"clf"</span>, <span class="fn">RandomForestClassifier</span>(n_estimators=<span class="num">100</span>, random_state=<span class="num">42</span>)),
])

<span class="cm"># fit/transform/predict pattern</span>
pipe.<span class="fn">fit</span>(X_train, y_train)
y_pred = pipe.<span class="fn">predict</span>(X_test)
proba  = pipe.<span class="fn">predict_proba</span>(X_test)

<span class="fn">print</span>(<span class="fn">classification_report</span>(y_test, y_pred))

<span class="cm"># Cross-validation — lebih reliable dari single split</span>
scores = <span class="fn">cross_val_score</span>(pipe, X, y, cv=<span class="num">5</span>, scoring=<span class="str">"f1"</span>)
<span class="fn">print</span>(<span class="str">f"CV F1: {scores.mean():.3f} +/- {scores.std():.3f}"</span>)</div>
</div>

<div class="card animate-in">
<h3>PyTorch — Deep Learning</h3>
<div class="tabs">
<button class="tab-btn active" data-tab="torch-tensor">Tensors</button>
<button class="tab-btn" data-tab="torch-nn">nn.Module</button>
<button class="tab-btn" data-tab="torch-train">Training Loop</button>
</div>
<div id="torch-tensor" class="tab-content active">
<div class="code-block"><span class="kw">import</span> torch
<span class="kw">import</span> torch.nn <span class="kw">as</span> nn

<span class="cm"># Tensor creation</span>
x = torch.<span class="fn">tensor</span>([<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>])
zeros = torch.<span class="fn">zeros</span>(<span class="num">3</span>, <span class="num">4</span>)
rand  = torch.<span class="fn">randn</span>(<span class="num">100</span>, <span class="num">10</span>)           <span class="cm"># normal(0,1)</span>
ones  = torch.<span class="fn">ones</span>(<span class="num">3</span>, requires_grad=<span class="kw">True</span>)

<span class="cm"># Device management</span>
device = torch.<span class="fn">device</span>(<span class="str">"cuda"</span> <span class="kw">if</span> torch.cuda.<span class="fn">is_available</span>() <span class="kw">else</span> <span class="str">"cpu"</span>)
x = rand.<span class="fn">to</span>(device)

<span class="cm"># Tensor operations</span>
a = torch.<span class="fn">randn</span>(<span class="num">3</span>, <span class="num">4</span>)
b = torch.<span class="fn">randn</span>(<span class="num">4</span>, <span class="num">5</span>)
c = torch.<span class="fn">matmul</span>(a, b)   <span class="cm"># matrix multiply (3,5)</span>
c = a @ b                  <span class="cm"># shorthand</span>

<span class="cm"># Autograd — automatic differentiation</span>
x = torch.<span class="fn">tensor</span>([<span class="num">2.0</span>], requires_grad=<span class="kw">True</span>)
y = x**<span class="num">3</span> + <span class="num">2</span>*x + <span class="num">1</span>   <span class="cm"># y = x^3 + 2x + 1</span>
y.<span class="fn">backward</span>()           <span class="cm"># compute dy/dx</span>
<span class="fn">print</span>(x.grad)           <span class="cm"># tensor([14.]) = 3*2^2 + 2</span>

<span class="cm"># No grad context (inference)</span>
<span class="kw">with</span> torch.<span class="fn">no_grad</span>():
    prediction = <span class="fn">model</span>(x_test)</div>
</div>
<div id="torch-nn" class="tab-content">
<div class="code-block"><span class="kw">import</span> torch
<span class="kw">import</span> torch.nn <span class="kw">as</span> nn
<span class="kw">import</span> torch.nn.functional <span class="kw">as</span> F

<span class="cm"># Custom model dengan nn.Module</span>
<span class="kw">class</span> <span class="type">MLP</span>(nn.<span class="type">Module</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, in_dim: <span class="type">int</span>, hidden: <span class="type">int</span>, out_dim: <span class="type">int</span>):
        <span class="fn">super</span>().__init__()
        <span class="kw">self</span>.layers = nn.<span class="fn">Sequential</span>(
            nn.<span class="fn">Linear</span>(in_dim, hidden),
            nn.<span class="fn">BatchNorm1d</span>(hidden),
            nn.<span class="fn">ReLU</span>(),
            nn.<span class="fn">Dropout</span>(<span class="num">0.3</span>),
            nn.<span class="fn">Linear</span>(hidden, hidden // <span class="num">2</span>),
            nn.<span class="fn">ReLU</span>(),
            nn.<span class="fn">Linear</span>(hidden // <span class="num">2</span>, out_dim),
        )

    <span class="kw">def</span> <span class="fn">forward</span>(<span class="kw">self</span>, x: torch.<span class="type">Tensor</span>) -> torch.<span class="type">Tensor</span>:
        <span class="kw">return</span> <span class="kw">self</span>.layers(x)

model = <span class="fn">MLP</span>(in_dim=<span class="num">784</span>, hidden=<span class="num">256</span>, out_dim=<span class="num">10</span>)
<span class="fn">print</span>(model)
<span class="cm"># MLP(layers=Sequential(...))</span>

<span class="cm"># Total params</span>
total = <span class="fn">sum</span>(p.<span class="fn">numel</span>() <span class="kw">for</span> p <span class="kw">in</span> model.<span class="fn">parameters</span>())
trainable = <span class="fn">sum</span>(p.<span class="fn">numel</span>() <span class="kw">for</span> p <span class="kw">in</span> model.<span class="fn">parameters</span>() <span class="kw">if</span> p.requires_grad)
<span class="fn">print</span>(<span class="str">f"Total params: {total:,} | Trainable: {trainable:,}"</span>)</div>
</div>
<div id="torch-train" class="tab-content">
<div class="code-block"><span class="kw">import</span> torch
<span class="kw">import</span> torch.nn <span class="kw">as</span> nn
<span class="kw">from</span> torch.utils.data <span class="kw">import</span> DataLoader, TensorDataset

<span class="cm"># Dataset &amp; DataLoader</span>
X = torch.<span class="fn">randn</span>(<span class="num">1000</span>, <span class="num">20</span>)
y = (X[:, <span class="num">0</span>] + X[:, <span class="num">1</span>] &gt; <span class="num">0</span>).<span class="fn">long</span>()
dataset = <span class="fn">TensorDataset</span>(X, y)
loader  = <span class="fn">DataLoader</span>(dataset, batch_size=<span class="num">32</span>, shuffle=<span class="kw">True</span>, num_workers=<span class="num">2</span>)

model = nn.<span class="fn">Sequential</span>(nn.<span class="fn">Linear</span>(<span class="num">20</span>, <span class="num">64</span>), nn.<span class="fn">ReLU</span>(), nn.<span class="fn">Linear</span>(<span class="num">64</span>, <span class="num">2</span>))
optimizer = torch.optim.<span class="fn">Adam</span>(model.<span class="fn">parameters</span>(), lr=<span class="num">1e-3</span>)
criterion = nn.<span class="fn">CrossEntropyLoss</span>()
scheduler = torch.optim.lr_scheduler.<span class="fn">CosineAnnealingLR</span>(optimizer, T_max=<span class="num">10</span>)

<span class="cm"># Training loop</span>
<span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    model.<span class="fn">train</span>()
    total_loss = <span class="num">0.0</span>
    <span class="kw">for</span> x_batch, y_batch <span class="kw">in</span> loader:
        optimizer.<span class="fn">zero_grad</span>()          <span class="cm"># reset gradients</span>
        logits = <span class="fn">model</span>(x_batch)         <span class="cm"># forward pass</span>
        loss = <span class="fn">criterion</span>(logits, y_batch) <span class="cm"># compute loss</span>
        loss.<span class="fn">backward</span>()                <span class="cm"># backprop</span>
        nn.utils.<span class="fn">clip_grad_norm_</span>(model.<span class="fn">parameters</span>(), max_norm=<span class="num">1.0</span>)
        optimizer.<span class="fn">step</span>()               <span class="cm"># update weights</span>
        total_loss += loss.<span class="fn">item</span>()
    scheduler.<span class="fn">step</span>()
    <span class="fn">print</span>(<span class="str">f"Epoch {epoch+1}: loss={total_loss/len(loader):.4f}"</span>)</div>
</div>
</div>

<!-- Canvas: PyTorch Tensor Animation -->
<div class="card animate-in">
<h3>${t('Visualisasi: Matrix Multiplication &amp; Autograd', 'Visualization: Matrix Multiplication &amp; Autograd')}</h3>
<div class="anim-container">
<canvas id="canvas-pytorch-tensor" width="720" height="300" style="width:100%;height:300px;border-radius:8px;"></canvas>
</div>
<div class="anim-controls">
<button class="anim-btn" id="pytorchTensorStart">Start</button>
<button class="anim-btn" id="pytorchTensorReset">Reset</button>
</div>
</div>

<!-- ==================== 10. ADVANCED PYTHON ==================== -->
<h2 class="animate-in">10. Advanced Python</h2>

<div class="card animate-in">
<h3>Async/Await &amp; asyncio</h3>
<div class="code-block"><span class="kw">import</span> asyncio
<span class="kw">import</span> aiohttp

<span class="cm"># Coroutine — dijalankan oleh event loop</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">fetch_url</span>(session: aiohttp.<span class="type">ClientSession</span>, url: <span class="type">str</span>) -> <span class="type">str</span>:
    <span class="kw">async</span> <span class="kw">with</span> session.<span class="fn">get</span>(url) <span class="kw">as</span> response:
        <span class="kw">return</span> <span class="kw">await</span> response.<span class="fn">text</span>()

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">fetch_all</span>(urls: <span class="type">list</span>[<span class="type">str</span>]) -> <span class="type">list</span>[<span class="type">str</span>]:
    <span class="kw">async</span> <span class="kw">with</span> aiohttp.<span class="fn">ClientSession</span>() <span class="kw">as</span> session:
        tasks = [<span class="fn">fetch_url</span>(session, url) <span class="kw">for</span> url <span class="kw">in</span> urls]
        <span class="kw">return</span> <span class="kw">await</span> asyncio.<span class="fn">gather</span>(*tasks)  <span class="cm"># concurrent!</span>

<span class="cm"># asyncio.create_task — schedule tanpa await</span>
<span class="kw">async</span> <span class="kw">def</span> <span class="fn">background_worker</span>():
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">await</span> asyncio.<span class="fn">sleep</span>(<span class="num">60</span>)
        <span class="fn">print</span>(<span class="str">"Heartbeat"</span>)

<span class="kw">async</span> <span class="kw">def</span> <span class="fn">main</span>():
    task = asyncio.<span class="fn">create_task</span>(<span class="fn">background_worker</span>())
    results = <span class="kw">await</span> <span class="fn">fetch_all</span>([<span class="str">"https://httpbin.org/get"</span>] * <span class="num">5</span>)
    task.<span class="fn">cancel</span>()

asyncio.<span class="fn">run</span>(<span class="fn">main</span>())  <span class="cm"># entry point untuk async program</span></div>
</div>

<div class="card animate-in">
<h3>GIL — Global Interpreter Lock</h3>
<div class="warn-box">
${t('<strong>GIL (Global Interpreter Lock)</strong> adalah mutex di CPython yang memastikan hanya satu thread yang mengeksekusi bytecode Python pada satu waktu — bahkan di CPU multi-core. Ini melindungi Python objects dari race condition, tapi membatasi true parallelism untuk CPU-bound tasks.', '<strong>GIL (Global Interpreter Lock)</strong> is a mutex in CPython that ensures only one thread executes Python bytecode at a time — even on multi-core CPUs. It protects Python objects from race conditions, but limits true parallelism for CPU-bound tasks.')}
</div>
<div class="table-wrapper">
<table>
<tr><th>Approach</th><th>${t('Cocok untuk', 'Best For')}</th><th>${t('Solusi GIL', 'GIL Solution')}</th><th>API</th></tr>
<tr><td>threading</td><td>IO-bound (network, disk)</td><td>${t('GIL dilepas saat IO', 'GIL released during IO')}</td><td>Thread, ThreadPoolExecutor</td></tr>
<tr><td>multiprocessing</td><td>CPU-bound</td><td>${t('Proses terpisah = GIL berbeda', 'Separate process = separate GIL')}</td><td>Process, ProcessPoolExecutor</td></tr>
<tr><td>asyncio</td><td>${t('Async IO (banyak koneksi)', 'Async IO (many connections)')}</td><td>Single-thread, no GIL issue</td><td>async/await, event loop</td></tr>
<tr><td>NumPy/PyTorch</td><td>Numerical computing</td><td>${t('C extensions lepas GIL', 'C extensions release GIL')}</td><td>np.*, torch.*</td></tr>
</table>
</div>
<div class="code-block"><span class="kw">from</span> concurrent.futures <span class="kw">import</span> ThreadPoolExecutor, ProcessPoolExecutor

<span class="cm"># IO-bound: threading (GIL dilepas saat IO syscall)</span>
<span class="kw">def</span> <span class="fn">download_file</span>(url: <span class="type">str</span>) -> bytes:
    <span class="kw">import</span> urllib.request
    <span class="kw">with</span> urllib.request.<span class="fn">urlopen</span>(url) <span class="kw">as</span> r:
        <span class="kw">return</span> r.<span class="fn">read</span>()

<span class="kw">with</span> <span class="fn">ThreadPoolExecutor</span>(max_workers=<span class="num">10</span>) <span class="kw">as</span> ex:
    futures = [ex.<span class="fn">submit</span>(<span class="fn">download_file</span>, url) <span class="kw">for</span> url <span class="kw">in</span> url_list]
    results = [f.<span class="fn">result</span>() <span class="kw">for</span> f <span class="kw">in</span> futures]

<span class="cm"># CPU-bound: multiprocessing (proses baru, GIL terpisah)</span>
<span class="kw">def</span> <span class="fn">heavy_compute</span>(n: <span class="type">int</span>) -> <span class="type">int</span>:
    <span class="kw">return</span> <span class="fn">sum</span>(i**<span class="num">2</span> <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n))

<span class="kw">with</span> <span class="fn">ProcessPoolExecutor</span>(max_workers=<span class="num">4</span>) <span class="kw">as</span> ex:
    results = <span class="fn">list</span>(ex.<span class="fn">map</span>(<span class="fn">heavy_compute</span>, [<span class="num">1_000_000</span>] * <span class="num">8</span>))</div>
</div>

<!-- Canvas: GIL Visualization -->
<div class="card animate-in">
<h3>${t('Visualisasi: Python GIL vs Go Goroutines', 'Visualization: Python GIL vs Go Goroutines')}</h3>
<div class="anim-container">
<canvas id="canvas-python-gil" width="720" height="320" style="width:100%;height:320px;border-radius:8px;"></canvas>
</div>
<div class="anim-controls">
<button class="anim-btn" id="gilStartBtn">Start</button>
<button class="anim-btn" id="gilResetBtn">Reset</button>
</div>
</div>

<div class="card animate-in">
<h3>Advanced Typing</h3>
<div class="code-block"><span class="kw">from</span> typing <span class="kw">import</span> TypeVar, Generic, Protocol, Callable, Awaitable

<span class="cm"># TypeVar &amp; Generic — type-safe containers</span>
T = TypeVar(<span class="str">'T'</span>)
K = TypeVar(<span class="str">'K'</span>)
V = TypeVar(<span class="str">'V'</span>)

<span class="kw">class</span> <span class="type">Stack</span>(Generic[T]):
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>): <span class="kw">self</span>._data: <span class="type">list</span>[T] = []
    <span class="kw">def</span> <span class="fn">push</span>(<span class="kw">self</span>, item: T) -> <span class="kw">None</span>: <span class="kw">self</span>._data.<span class="fn">append</span>(item)
    <span class="kw">def</span> <span class="fn">pop</span>(<span class="kw">self</span>) -> T: <span class="kw">return</span> <span class="kw">self</span>._data.<span class="fn">pop</span>()
    <span class="kw">def</span> <span class="fn">__len__</span>(<span class="kw">self</span>) -> <span class="type">int</span>: <span class="kw">return</span> <span class="fn">len</span>(<span class="kw">self</span>._data)

s: Stack[int] = <span class="fn">Stack</span>()
s.<span class="fn">push</span>(<span class="num">42</span>)  <span class="cm"># mypy: OK</span>

<span class="cm"># ParamSpec &amp; Concatenate (Python 3.10+)</span>
<span class="kw">from</span> typing <span class="kw">import</span> ParamSpec

P = ParamSpec(<span class="str">'P'</span>)

<span class="kw">def</span> <span class="fn">add_logging</span>(f: Callable[P, T]) -> Callable[P, T]:
    @functools.<span class="fn">wraps</span>(f)
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args: P.args, **kwargs: P.kwargs) -> T:
        <span class="fn">print</span>(<span class="str">f"Calling {f.__name__}"</span>)
        <span class="kw">return</span> <span class="fn">f</span>(*args, **kwargs)
    <span class="kw">return</span> wrapper

<span class="cm"># Literal types</span>
<span class="kw">from</span> typing <span class="kw">import</span> Literal

<span class="type">Mode</span> = Literal[<span class="str">"r"</span>, <span class="str">"w"</span>, <span class="str">"a"</span>, <span class="str">"rb"</span>, <span class="str">"wb"</span>]

<span class="kw">def</span> <span class="fn">open_file</span>(path: <span class="type">str</span>, mode: <span class="type">Mode</span> = <span class="str">"r"</span>): ...</div>
</div>

<!-- ==================== 11. FFI WITH GO ==================== -->
<h2 class="animate-in">${t('11. Python FFI dengan Go', '11. Python FFI with Go')}</h2>

<div class="card animate-in">
<h3>Overview: Python C API &amp; ctypes</h3>
<p>${t('Python dapat memanggil shared library (*.so di Linux, *.dll di Windows) yang ditulis dalam bahasa lain. <strong>ctypes</strong> adalah modul standard library yang memungkinkan ini tanpa compilation step Python.', 'Python can call shared libraries (*.so on Linux, *.dll on Windows) written in other languages. <strong>ctypes</strong> is a standard library module that enables this without a Python compilation step.')}</p>
<div class="table-wrapper">
<table>
<tr><th>${t('Pendekatan', 'Approach')}</th><th>${t('Kelebihan', 'Pros')}</th><th>${t('Kekurangan', 'Cons')}</th></tr>
<tr><td>ctypes</td><td>Built-in, no extra deps</td><td>Manual type mapping, verbose</td></tr>
<tr><td>cffi</td><td>More Pythonic, auto parse header</td><td>Extra dependency</td></tr>
<tr><td>Cython</td><td>C performance + Python syntax</td><td>Compilation step</td></tr>
<tr><td>PyO3 (Rust)</td><td>Safe, idiomatic, best DX</td><td>Rust knowledge needed</td></tr>
</table>
</div>
</div>

<div class="card animate-in">
<h3>${t('Langkah 1: Tulis Library Go', 'Step 1: Write Go Library')}</h3>
<div class="code-block"><span class="cm">// File: math_lib.go</span>
<span class="cm">// Compile: go build -buildmode=c-shared -o libmath.so math_lib.go</span>
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"C"</span>   <span class="cm">// Import "C" pseudo-package — enables cgo</span>
<span class="kw">import</span> <span class="str">"math"</span>

<span class="cm">// Fungsi yang di-export ke C (dan bisa dipanggil Python via ctypes)</span>
<span class="cm">//export AddInts</span>
<span class="kw">func</span> <span class="fn">AddInts</span>(a, b C.longlong) C.longlong {
    <span class="kw">return</span> a + b
}

<span class="cm">//export MatMulFlat</span>
<span class="cm">// Mengalikan dua matriks NxN yang disimpan sebagai flat array</span>
<span class="kw">func</span> <span class="fn">MatMulFlat</span>(aPtr, bPtr, cPtr *C.double, n C.int) {
    N := <span class="kw">int</span>(n)
    A := (*[<span class="num">1</span> &lt;&lt; <span class="num">28</span>]C.double)(<span class="fn">aPtr</span>)
    B := (*[<span class="num">1</span> &lt;&lt; <span class="num">28</span>]C.double)(<span class="fn">bPtr</span>)
    C_ := (*[<span class="num">1</span> &lt;&lt; <span class="num">28</span>]C.double)(<span class="fn">cPtr</span>)
    <span class="kw">for</span> i := <span class="num">0</span>; i &lt; N; i++ {
        <span class="kw">for</span> j := <span class="num">0</span>; j &lt; N; j++ {
            <span class="kw">var</span> sum C.double
            <span class="kw">for</span> k := <span class="num">0</span>; k &lt; N; k++ {
                sum += A[i*N+k] * B[k*N+j]
            }
            C_[i*N+j] = sum
        }
    }
}

<span class="cm">//export HypotVec</span>
<span class="cm">// Hypot dari (x, y)</span>
<span class="kw">func</span> <span class="fn">HypotVec</span>(x, y C.double) C.double {
    <span class="kw">return</span> C.<span class="fn">double</span>(math.<span class="fn">Hypot</span>(<span class="kw">float64</span>(x), <span class="kw">float64</span>(y)))
}

<span class="kw">func</span> <span class="fn">main</span>() {} <span class="cm">// Harus ada untuk c-shared mode</span></div>
<div class="info-box">
${t('<strong>Perintah build:</strong>', '<strong>Build command:</strong>')}<br>
<code>go build -buildmode=c-shared -o libmath.so math_lib.go</code><br>
${t('Menghasilkan: <code>libmath.so</code> (shared library) dan <code>libmath.h</code> (C header).', 'Produces: <code>libmath.so</code> (shared library) and <code>libmath.h</code> (C header).')}
</div>
</div>

<div class="card animate-in">
<h3>${t('Langkah 2: Panggil dari Python via ctypes', 'Step 2: Call from Python via ctypes')}</h3>
<div class="code-block"><span class="kw">import</span> ctypes
<span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> time

<span class="cm"># Load shared library Go</span>
lib = ctypes.<span class="fn">CDLL</span>(<span class="str">"./libmath.so"</span>)

<span class="cm"># === AddInts ===</span>
lib.AddInts.argtypes = [ctypes.c_longlong, ctypes.c_longlong]
lib.AddInts.restype  = ctypes.c_longlong
result = lib.<span class="fn">AddInts</span>(<span class="num">1_000_000</span>, <span class="num">2_000_000</span>)
<span class="fn">print</span>(<span class="str">f"AddInts: {result}"</span>)  <span class="cm"># 3000000</span>

<span class="cm"># === HypotVec ===</span>
lib.HypotVec.argtypes = [ctypes.c_double, ctypes.c_double]
lib.HypotVec.restype  = ctypes.c_double
h = lib.<span class="fn">HypotVec</span>(<span class="num">3.0</span>, <span class="num">4.0</span>)
<span class="fn">print</span>(<span class="str">f"Hypot(3,4) = {h}"</span>)  <span class="cm"># 5.0</span>

<span class="cm"># === MatMulFlat (matriks 512x512) ===</span>
lib.MatMulFlat.argtypes = [
    ctypes.<span class="fn">POINTER</span>(ctypes.c_double),
    ctypes.<span class="fn">POINTER</span>(ctypes.c_double),
    ctypes.<span class="fn">POINTER</span>(ctypes.c_double),
    ctypes.c_int,
]
lib.MatMulFlat.restype = <span class="kw">None</span>

N = <span class="num">128</span>
A = np.<span class="fn">random.rand</span>(N, N).<span class="fn">astype</span>(np.float64)
B = np.<span class="fn">random.rand</span>(N, N).<span class="fn">astype</span>(np.float64)
C = np.<span class="fn">zeros</span>((N, N), dtype=np.float64)

a_ptr = A.<span class="fn">ctypes.data_as</span>(ctypes.<span class="fn">POINTER</span>(ctypes.c_double))
b_ptr = B.<span class="fn">ctypes.data_as</span>(ctypes.<span class="fn">POINTER</span>(ctypes.c_double))
c_ptr = C.<span class="fn">ctypes.data_as</span>(ctypes.<span class="fn">POINTER</span>(ctypes.c_double))

t0 = time.<span class="fn">perf_counter</span>()
lib.<span class="fn">MatMulFlat</span>(a_ptr, b_ptr, c_ptr, N)
dt = time.<span class="fn">perf_counter</span>() - t0
<span class="fn">print</span>(<span class="str">f"Go MatMul {N}x{N} in {dt*1000:.2f}ms"</span>)

<span class="cm"># Verifikasi dengan NumPy</span>
expected = A @ B
<span class="fn">print</span>(<span class="str">f"Max error: {np.max(np.abs(C - expected)):.2e}"</span>)</div>
</div>

<div class="card animate-in">
<h3>Type Mapping: Python ctypes &lt;-&gt; Go</h3>
<div class="table-wrapper">
<table>
<tr><th>Go Type</th><th>C Type</th><th>ctypes Type</th><th>NumPy dtype</th></tr>
<tr><td>C.int</td><td>int</td><td>ctypes.c_int</td><td>np.int32</td></tr>
<tr><td>C.long</td><td>long</td><td>ctypes.c_long</td><td>np.int64 (Linux)</td></tr>
<tr><td>C.longlong</td><td>long long</td><td>ctypes.c_longlong</td><td>np.int64</td></tr>
<tr><td>C.float</td><td>float</td><td>ctypes.c_float</td><td>np.float32</td></tr>
<tr><td>C.double</td><td>double</td><td>ctypes.c_double</td><td>np.float64</td></tr>
<tr><td>*C.double</td><td>double*</td><td>ctypes.POINTER(c_double)</td><td>array.ctypes.data_as(...)</td></tr>
<tr><td>C.CString</td><td>char*</td><td>ctypes.c_char_p</td><td>-</td></tr>
</table>
</div>
</div>

<!-- Canvas: FFI Pipeline Animation -->
<div class="card animate-in">
<h3>${t('Visualisasi: FFI Pipeline (Python &rarr; Go/Rust)', 'Visualization: FFI Pipeline (Python &rarr; Go/Rust)')}</h3>
<div class="anim-container">
<canvas id="canvas-python-ffi" width="720" height="260" style="width:100%;height:260px;border-radius:8px;"></canvas>
</div>
<div class="anim-controls">
<button class="anim-btn" id="ffiStartBtn">Start</button>
<button class="anim-btn" id="ffiResetBtn">Reset</button>
</div>
</div>

<!-- ==================== 12. FFI WITH RUST (PyO3) ==================== -->
<h2 class="animate-in">${t('12. Python FFI dengan Rust (PyO3)', '12. Python FFI with Rust (PyO3)')}</h2>

<div class="card animate-in">
<h3>${t('Mengapa PyO3?', 'Why PyO3?')}</h3>
<div class="card-grid">
<div class="info-box">
<strong>Safe Rust Bindings</strong><br>
${t('PyO3 menyediakan macro dan trait untuk menulis Python extension module dalam Rust yang aman dari memory bugs dan data races.', 'PyO3 provides macros and traits for writing Python extension modules in Rust that are safe from memory bugs and data races.')}
</div>
<div class="info-box">
<strong>maturin</strong><br>
${t('Build system yang handle semua: cargo build, create Python wheel, install. <code>maturin develop</code> = instant test cycle.', 'Build system that handles everything: cargo build, create Python wheel, install. <code>maturin develop</code> = instant test cycle.')}
</div>
<div class="info-box">
<strong>Performance</strong><br>
${t('Rust code berjalan tanpa overhead GC. Cocok untuk: parsing, crypto, numerics, compression, custom CUDA ops.', 'Rust code runs without GC overhead. Suitable for: parsing, crypto, numerics, compression, custom CUDA ops.')}
</div>
<div class="info-box">
<strong>Ecosystem</strong><br>
${t('Hugging Face tokenizers, orjson (JSON), polars (DataFrame) — semuanya Python modules berbasis Rust.', 'Hugging Face tokenizers, orjson (JSON), polars (DataFrame) — all Python modules built on Rust.')}
</div>
</div>
</div>

<div class="card animate-in">
<h3>${t('Langkah 1: Setup Project PyO3', 'Step 1: Setup PyO3 Project')}</h3>
<div class="code-block"><span class="cm"># Buat project baru dengan maturin</span>
pip install maturin
maturin new --bindings pyo3 pymath_rs
cd pymath_rs

<span class="cm"># Struktur:</span>
<span class="cm"># pymath_rs/</span>
<span class="cm">#   Cargo.toml</span>
<span class="cm">#   src/lib.rs</span>
<span class="cm">#   pyproject.toml</span></div>
<div class="code-block"><span class="cm"># Cargo.toml</span>
[package]
name = <span class="str">"pymath_rs"</span>
version = <span class="str">"0.1.0"</span>
edition = <span class="str">"2021"</span>

[lib]
name = <span class="str">"pymath_rs"</span>
crate-type = [<span class="str">"cdylib"</span>]

[dependencies]
pyo3 = { version = <span class="str">"0.21"</span>, features = [<span class="str">"extension-module"</span>] }
rayon = <span class="str">"1.8"</span>  <span class="cm"># untuk parallelism</span></div>
</div>

<div class="card animate-in">
<h3>${t('Langkah 2: Rust Implementation (src/lib.rs)', 'Step 2: Rust Implementation (src/lib.rs)')}</h3>
<div class="code-block"><span class="cm">// src/lib.rs</span>
<span class="kw">use</span> pyo3::prelude::*;
<span class="kw">use</span> pyo3::exceptions::PyValueError;
<span class="kw">use</span> rayon::prelude::*;

<span class="cm">/// Hitung Fibonacci ke-n menggunakan iterasi cepat</span>
#[pyfunction]
<span class="kw">fn</span> <span class="fn">fibonacci</span>(n: u64) -> PyResult&lt;u64&gt; {
    <span class="kw">if</span> n &gt; <span class="num">93</span> {
        <span class="kw">return</span> <span class="fn">Err</span>(PyValueError::new_err(<span class="str">"n must be &lt;= 93 to avoid overflow"</span>));
    }
    <span class="kw">let</span> (mut a, mut b) = (<span class="num">0u64</span>, <span class="num">1u64</span>);
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="num">0</span>..n { <span class="kw">let</span> tmp = a + b; a = b; b = tmp; }
    <span class="fn">Ok</span>(a)
}

<span class="cm">/// Parallel prime counting menggunakan rayon</span>
#[pyfunction]
<span class="kw">fn</span> <span class="fn">count_primes</span>(limit: u64) -> PyResult&lt;u64&gt; {
    <span class="kw">let</span> count = (<span class="num">2</span>..limit)
        .<span class="fn">into_par_iter</span>()  <span class="cm">// rayon parallel iterator</span>
        .<span class="fn">filter</span>(|&amp;n| <span class="fn">is_prime</span>(n))
        .<span class="fn">count</span>() <span class="kw">as</span> u64;
    <span class="fn">Ok</span>(count)
}

<span class="kw">fn</span> <span class="fn">is_prime</span>(n: u64) -> bool {
    <span class="kw">if</span> n &lt; <span class="num">2</span> { <span class="kw">return</span> <span class="kw">false</span>; }
    <span class="kw">if</span> n == <span class="num">2</span> { <span class="kw">return</span> <span class="kw">true</span>; }
    <span class="kw">if</span> n % <span class="num">2</span> == <span class="num">0</span> { <span class="kw">return</span> <span class="kw">false</span>; }
    <span class="kw">let</span> limit = (n <span class="kw">as</span> f64).<span class="fn">sqrt</span>() <span class="kw">as</span> u64 + <span class="num">1</span>;
    !(<span class="num">3</span>..limit).<span class="fn">step_by</span>(<span class="num">2</span>).<span class="fn">any</span>(|i| n % i == <span class="num">0</span>)
}

<span class="cm">/// Python class dari Rust struct</span>
#[pyclass]
<span class="kw">struct</span> <span class="type">Counter</span> {
    count: i64,
    step: i64,
}

#[pymethods]
<span class="kw">impl</span> <span class="type">Counter</span> {
    #[new]
    <span class="kw">fn</span> <span class="fn">new</span>(step: i64) -> Self {
        Counter { count: <span class="num">0</span>, step }
    }
    <span class="kw">fn</span> <span class="fn">increment</span>(&amp;mut self) { self.count += self.step; }
    <span class="kw">fn</span> <span class="fn">value</span>(&amp;self) -> i64 { self.count }
    <span class="kw">fn</span> <span class="fn">reset</span>(&amp;mut self) { self.count = <span class="num">0</span>; }
}

<span class="cm">/// Module definition</span>
#[pymodule]
<span class="kw">fn</span> <span class="fn">pymath_rs</span>(_py: Python&lt;'_&gt;, m: &amp;PyModule) -> PyResult&lt;()&gt; {
    m.<span class="fn">add_function</span>(wrap_pyfunction!(fibonacci, m)?)?;
    m.<span class="fn">add_function</span>(wrap_pyfunction!(count_primes, m)?)?;
    m.<span class="fn">add_class</span>::&lt;Counter&gt;()?;
    <span class="fn">Ok</span>(())
}</div>
</div>

<div class="card animate-in">
<h3>${t('Langkah 3: Build &amp; Gunakan dari Python', 'Step 3: Build &amp; Use from Python')}</h3>
<div class="code-block"><span class="cm"># Build dan install ke venv saat ini</span>
maturin develop --release

<span class="cm"># Atau build wheel untuk distribusi</span>
maturin build --release</div>
<div class="code-block"><span class="kw">import</span> pymath_rs
<span class="kw">import</span> time

<span class="cm"># Panggil Rust function</span>
<span class="fn">print</span>(pymath_rs.<span class="fn">fibonacci</span>(<span class="num">50</span>))  <span class="cm"># 12586269025</span>

<span class="cm"># Benchmark: Python vs Rust prime counting</span>
<span class="kw">def</span> <span class="fn">count_primes_python</span>(limit: <span class="type">int</span>) -> <span class="type">int</span>:
    <span class="kw">def</span> <span class="fn">is_prime</span>(n):
        <span class="kw">if</span> n &lt; <span class="num">2</span>: <span class="kw">return</span> <span class="kw">False</span>
        <span class="kw">return</span> <span class="fn">all</span>(n % i != <span class="num">0</span> <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, <span class="type">int</span>(n**<span class="num">0.5</span>)+<span class="num">1</span>))
    <span class="kw">return</span> <span class="fn">sum</span>(<span class="num">1</span> <span class="kw">for</span> n <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, limit) <span class="kw">if</span> <span class="fn">is_prime</span>(n))

LIMIT = <span class="num">100_000</span>

t0 = time.<span class="fn">perf_counter</span>()
py_result = <span class="fn">count_primes_python</span>(LIMIT)
py_time = time.<span class="fn">perf_counter</span>() - t0

t0 = time.<span class="fn">perf_counter</span>()
rs_result = pymath_rs.<span class="fn">count_primes</span>(LIMIT)
rs_time = time.<span class="fn">perf_counter</span>() - t0

<span class="fn">print</span>(<span class="str">f"Python: {py_result} primes in {py_time:.3f}s"</span>)
<span class="fn">print</span>(<span class="str">f"Rust:   {rs_result} primes in {rs_time:.3f}s"</span>)
<span class="fn">print</span>(<span class="str">f"Speedup: {py_time / rs_time:.1f}x"</span>)
<span class="cm"># Typical: Python: 0.420s | Rust: 0.008s | Speedup: 52.5x</span>

<span class="cm"># Gunakan Rust class</span>
c = pymath_rs.<span class="fn">Counter</span>(step=<span class="num">5</span>)
c.<span class="fn">increment</span>(); c.<span class="fn">increment</span>()
<span class="fn">print</span>(c.<span class="fn">value</span>())  <span class="cm"># 10</span></div>
</div>

<!-- ==================== 13. PERFORMANCE OPTIMIZATION ==================== -->
<h2 class="animate-in">13. Performance Optimization</h2>

<div class="card animate-in">
<h3>Profiling &amp; Numba</h3>
<div class="code-block"><span class="kw">import</span> cProfile
<span class="kw">import</span> pstats
<span class="kw">from</span> numba <span class="kw">import</span> jit, njit
<span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> time

<span class="cm"># cProfile — built-in profiler</span>
<span class="kw">def</span> <span class="fn">my_function</span>():
    <span class="kw">return</span> <span class="fn">sum</span>(i**<span class="num">2</span> <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1_000_000</span>))

<span class="kw">with</span> cProfile.<span class="fn">Profile</span>() <span class="kw">as</span> pr:
    <span class="fn">my_function</span>()
stats = pstats.<span class="fn">Stats</span>(pr)
stats.<span class="fn">sort_stats</span>(<span class="str">"cumulative"</span>)
stats.<span class="fn">print_stats</span>(<span class="num">10</span>)  <span class="cm"># top 10 hotspots</span>

<span class="cm"># Numba @jit — JIT compilation untuk NumPy code</span>
@njit(parallel=<span class="kw">True</span>)  <span class="cm"># @njit = no-python mode (paling cepat)</span>
<span class="kw">def</span> <span class="fn">monte_carlo_pi</span>(n_samples: <span class="type">int</span>) -> <span class="type">float</span>:
    count = <span class="num">0</span>
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(n_samples):
        x = np.random.<span class="fn">random</span>()
        y = np.random.<span class="fn">random</span>()
        <span class="kw">if</span> x**<span class="num">2</span> + y**<span class="num">2</span> &lt;= <span class="num">1.0</span>:
            count += <span class="num">1</span>
    <span class="kw">return</span> <span class="num">4.0</span> * count / n_samples

<span class="cm"># Warm up JIT (first call compiles)</span>
<span class="fn">monte_carlo_pi</span>(<span class="num">100</span>)

t0 = time.<span class="fn">perf_counter</span>()
pi = <span class="fn">monte_carlo_pi</span>(<span class="num">10_000_000</span>)
<span class="fn">print</span>(<span class="str">f"Pi ~ {pi:.5f} in {time.perf_counter()-t0:.3f}s"</span>)</div>
</div>

<div class="card animate-in">
<h3>${t('Perbandingan Performa', 'Performance Comparison')}</h3>
<div class="table-wrapper">
<table>
<tr><th>Approach</th><th>Relatif Speed</th><th>Setup Effort</th><th>Best For</th></tr>
<tr><td>Pure Python</td><td>1x</td><td>Zero</td><td>Prototype, business logic</td></tr>
<tr><td>NumPy vectorized</td><td>10-100x</td><td>Low</td><td>Array math, linear algebra</td></tr>
<tr><td>Numba @njit</td><td>50-200x</td><td>Low (decorator)</td><td>Loops, numerical kernels</td></tr>
<tr><td>Cython</td><td>50-200x</td><td>Medium</td><td>Existing Python code + types</td></tr>
<tr><td>PyO3/Rust</td><td>100-500x</td><td>High</td><td>Perf-critical, safe concurrency</td></tr>
<tr><td>ctypes/Go</td><td>50-300x</td><td>Medium</td><td>Leverage Go stdlib, goroutines</td></tr>
<tr><td>PyPy</td><td>5-50x</td><td>Drop-in</td><td>General Python, no C-ext needed</td></tr>
</table>
</div>
<div class="info-box">
${t('<strong>Aturan optimasi:</strong> Profile first, optimize second. 80% runtime biasanya ada di 20% kode. Jangan pre-optimize — tulis Python yang bersih dulu, lalu ukur bottleneck, lalu pilih solusi (NumPy, Numba, atau FFI).', '<strong>Optimization rule:</strong> Profile first, optimize second. 80% of runtime is usually in 20% of the code. Don&apos;t pre-optimize — write clean Python first, then measure bottlenecks, then choose a solution (NumPy, Numba, or FFI).')}
</div>
</div>

<!-- ==================== REFERENCES ==================== -->
<h2 class="animate-in">${t('Referensi', 'References')}</h2>

<div class="card animate-in">
<div class="table-wrapper">
<table>
<tr><th>${t('Sumber', 'Source')}</th><th>Link</th><th>${t('Keterangan', 'Description')}</th></tr>
<tr><td>Python Official Docs</td><td>docs.python.org/3/</td><td>${t('Reference utama bahasa &amp; stdlib', 'Primary language &amp; stdlib reference')}</td></tr>
<tr><td>Python Data Model</td><td>docs.python.org/3/reference/datamodel.html</td><td>Dunder methods, object protocol</td></tr>
<tr><td>NumPy Docs</td><td>numpy.org/doc/</td><td>ndarray, ufuncs, linear algebra</td></tr>
<tr><td>PyTorch Docs</td><td>pytorch.org/docs/</td><td>Tensors, autograd, nn.Module</td></tr>
<tr><td>PyO3 Guide</td><td>pyo3.rs/</td><td>${t('Rust bindings untuk Python', 'Rust bindings for Python')}</td></tr>
<tr><td>Fluent Python</td><td>Luciano Ramalho, 2nd ed. 2022</td><td>Deep dive Python internals</td></tr>
<tr><td>Real Python</td><td>realpython.com</td><td>Tutorials &amp; how-tos</td></tr>
<tr><td>maturin</td><td>maturin.rs/</td><td>${t('Build system untuk PyO3', 'Build system for PyO3')}</td></tr>
</table>
</div>
</div>

</section>
`;

// ==================== PYTHON ANIMATIONS ====================
function initPythonAnimations() {
    const dpr = window.devicePixelRatio || 1;

    function setupCanvas(id, w, h) {
        var c = document.getElementById(id);
        if (!c) return null;
        var ctx = c.getContext('2d');
        c.width = w * dpr;
        c.height = h * dpr;
        c.style.width = w + 'px';
        c.style.height = h + 'px';
        ctx.scale(dpr, dpr);
        return { c: c, ctx: ctx, w: w, h: h };
    }

    function getStyle(prop) {
        return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
    }

    // ======================================================
    // 1. GIL Visualization
    // ======================================================
    (function initGIL() {
        var gil = setupCanvas('canvas-python-gil', 720, 320);
        if (!gil) return;

        var ctx = gil.ctx, w = gil.w, h = gil.h;
        var animId = null;
        var running = false;
        var tick = 0;

        var threads = [
            { name: 'Thread-1', color: '#38bdf8' },
            { name: 'Thread-2', color: '#34d399' },
            { name: 'Thread-3', color: '#fb923c' },
            { name: 'Thread-4', color: '#f87171' },
        ];

        var totalSlots = 60;
        var gilSchedule = [];
        var currentSlot = 0;

        function generateSchedule() {
            gilSchedule = [];
            var active = 0;
            for (var i = 0; i < totalSlots; i++) {
                if (i > 0 && Math.random() < 0.2) {
                    active = Math.floor(Math.random() * threads.length);
                }
                gilSchedule.push(active);
            }
        }

        generateSchedule();

        function drawGILFrame() {
            var bg = getStyle('--bg1') || '#0f172a';
            var text = getStyle('--text1') || '#e2e8f0';
            var text2 = getStyle('--text2') || '#94a3b8';

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = text;
            ctx.font = 'bold 14px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Python GIL — Hanya 1 Thread Aktif pada Satu Waktu', w / 2, 22);

            ctx.fillStyle = text2;
            ctx.font = '11px Inter, system-ui, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('CPU Cores tersedia: 4  |  GIL memaksa hanya 1 thread berjalan bytecode', 16, 42);

            var timelineY = 60;
            var rowH = 46;
            var labelW = 80;
            var timelineX = labelW + 12;
            var timelineW = w - timelineX - 16;
            var visWindow = 20;
            var slotW = timelineW / visWindow;

            var visStart = Math.max(0, currentSlot - visWindow + 1);
            var visEnd = Math.min(totalSlots, visStart + visWindow);

            threads.forEach(function(thread, ti) {
                var y = timelineY + ti * rowH;

                ctx.fillStyle = thread.color;
                ctx.font = 'bold 11px Inter, system-ui, sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText(thread.name, labelW, y + 20);

                for (var s = visStart; s < visEnd; s++) {
                    var sx = timelineX + (s - visStart) * slotW;
                    var isActive = gilSchedule[s] === ti;
                    var isPast = s < currentSlot;
                    var isCurrent = s === currentSlot;

                    if (isPast || isCurrent) {
                        if (isActive) {
                            ctx.globalAlpha = isCurrent ? 1.0 : 0.65;
                            ctx.fillStyle = thread.color;
                            ctx.fillRect(sx + 1, y + 5, slotW - 2, 28);
                            ctx.globalAlpha = 1;
                            if (isCurrent) {
                                ctx.shadowColor = thread.color;
                                ctx.shadowBlur = 10;
                                ctx.fillRect(sx + 1, y + 5, slotW - 2, 28);
                                ctx.shadowBlur = 0;
                            }
                            ctx.fillStyle = '#000';
                            ctx.font = 'bold 7px Inter, system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('RUN', sx + slotW / 2, y + 22);
                        } else {
                            ctx.globalAlpha = 0.12;
                            ctx.fillStyle = text2;
                            ctx.fillRect(sx + 1, y + 5, slotW - 2, 28);
                            ctx.globalAlpha = 0.4;
                            ctx.fillStyle = text2;
                            ctx.font = '7px Inter, system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('WAIT', sx + slotW / 2, y + 22);
                            ctx.globalAlpha = 1;
                        }
                    } else {
                        ctx.strokeStyle = text2;
                        ctx.globalAlpha = 0.12;
                        ctx.strokeRect(sx + 1, y + 5, slotW - 2, 28);
                        ctx.globalAlpha = 1;
                    }
                }
            });

            var gilY = timelineY + threads.length * rowH + 14;
            ctx.fillStyle = text;
            ctx.font = 'bold 12px Inter, system-ui, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('GIL Owner:', labelW - 60, gilY + 4);

            if (currentSlot < totalSlots) {
                var ownerIdx = gilSchedule[currentSlot];
                ctx.fillStyle = threads[ownerIdx].color;
                ctx.font = 'bold 12px Inter, system-ui, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(threads[ownerIdx].name, labelW + 10, gilY + 4);
            }

            ctx.fillStyle = text2;
            ctx.font = '11px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Slot: ' + currentSlot + ' / ' + (totalSlots - 1), w / 2, gilY + 24);
            ctx.fillText('Tanpa GIL (Go/Rust): semua thread berjalan paralel di core berbeda', w / 2, gilY + 42);
            ctx.fillText('Dengan GIL (CPython): hanya 1 thread aktif pada satu waktu', w / 2, gilY + 56);
        }

        function animateGIL() {
            tick++;
            if (tick % 8 === 0 && currentSlot < totalSlots - 1) {
                currentSlot++;
            }
            drawGILFrame();
            if (currentSlot < totalSlots - 1 && running) {
                animId = requestAnimationFrame(animateGIL);
            } else if (currentSlot >= totalSlots - 1) {
                running = false;
                drawGILFrame();
            }
        }

        function startGIL() {
            if (running) return;
            if (currentSlot >= totalSlots - 1) resetGIL();
            running = true;
            animateGIL();
        }

        function resetGIL() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            tick = 0;
            currentSlot = 0;
            generateSchedule();
            drawGILFrame();
        }

        var btnStart = document.getElementById('gilStartBtn');
        var btnReset = document.getElementById('gilResetBtn');
        if (btnStart) btnStart.addEventListener('click', startGIL);
        if (btnReset) btnReset.addEventListener('click', resetGIL);

        drawGILFrame();
    })();

    // ======================================================
    // 2. PyTorch Tensor / MatMul Visualization
    // ======================================================
    (function initTensorViz() {
        var cv = setupCanvas('canvas-pytorch-tensor', 720, 300);
        if (!cv) return;

        var ctx = cv.ctx, w = cv.w, h = cv.h;
        var animId = null;
        var running = false;
        var tick = 0;
        var step = 0;
        var totalSteps = 120;

        var N = 4;
        var matA = [];
        var matB = [];
        var matC = [];

        function genMats() {
            matA = []; matB = []; matC = [];
            for (var i = 0; i < N; i++) {
                matA.push([]);
                matB.push([]);
                matC.push([]);
                for (var j = 0; j < N; j++) {
                    matA[i].push(Math.floor(Math.random() * 9) + 1);
                    matB[i].push(Math.floor(Math.random() * 9) + 1);
                    matC[i].push(0);
                }
            }
            for (var i2 = 0; i2 < N; i2++) {
                for (var j2 = 0; j2 < N; j2++) {
                    var s = 0;
                    for (var k = 0; k < N; k++) s += matA[i2][k] * matB[k][j2];
                    matC[i2][j2] = s;
                }
            }
        }

        genMats();

        var cellSize = 44;
        var matW = N * cellSize;

        function drawMatrix(label, mat, ox, oy, hiRow, hiCol, color) {
            var bg = getStyle('--bg2') || '#1e293b';
            var text = getStyle('--text1') || '#e2e8f0';
            var text2 = getStyle('--text2') || '#94a3b8';

            ctx.fillStyle = text2;
            ctx.font = 'bold 12px Inter, monospace';
            ctx.textAlign = 'center';
            ctx.fillText(label, ox + matW / 2, oy - 8);

            for (var i = 0; i < N; i++) {
                for (var j = 0; j < N; j++) {
                    var x = ox + j * cellSize;
                    var y = oy + i * cellSize;
                    var isHi = (i === hiRow || j === hiCol);
                    var isBoth = (i === hiRow && j === hiCol);

                    if (isBoth && color) {
                        ctx.fillStyle = color;
                        ctx.globalAlpha = 0.9;
                    } else if (isHi && color) {
                        ctx.fillStyle = color;
                        ctx.globalAlpha = 0.3;
                    } else {
                        ctx.fillStyle = bg;
                        ctx.globalAlpha = 1;
                    }
                    ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
                    ctx.globalAlpha = 1;

                    ctx.strokeStyle = isBoth ? color || '#666' : '#334155';
                    ctx.lineWidth = isBoth ? 2 : 1;
                    ctx.strokeRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

                    ctx.fillStyle = isBoth ? '#fff' : text;
                    ctx.font = (isBoth ? 'bold ' : '') + '12px monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(mat[i][j], x + cellSize / 2, y + cellSize / 2 + 4);
                }
            }
        }

        function drawTensorFrame() {
            var bg = getStyle('--bg1') || '#0f172a';
            var text = getStyle('--text1') || '#e2e8f0';
            var text2 = getStyle('--text2') || '#94a3b8';

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = text;
            ctx.font = 'bold 14px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('PyTorch: C = A @ B — Matrix Multiplication', w / 2, 22);

            var progress = step / totalSteps;
            var hiI = Math.floor(progress * N * N);
            var hiRow = Math.floor(hiI / N) % N;
            var hiCol = hiI % N;

            var gap = 28;
            var totalW = matW * 3 + gap * 2 + 24;
            var startX = (w - totalW) / 2;
            var startY = 42;

            drawMatrix('A', matA, startX, startY, hiRow, -1, '#38bdf8');
            var opX = startX + matW + 6;
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 22px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('@', opX + 7, startY + matW / 2 + 6);
            drawMatrix('B', matB, startX + matW + gap, startY, -1, hiCol, '#34d399');
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 22px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('=', startX + matW * 2 + gap + 8, startY + matW / 2 + 6);
            drawMatrix('C (result)', matC, startX + matW * 2 + gap * 2, startY, hiRow, hiCol, '#fb923c');

            ctx.fillStyle = text2;
            ctx.font = '11px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            var infoY = startY + matW + 18;
            ctx.fillText(
                'Highlighting row ' + hiRow + ' of A  x  col ' + hiCol + ' of B  ==>  C[' + hiRow + '][' + hiCol + ']=' + matC[hiRow][hiCol],
                w / 2, infoY
            );
            ctx.fillText(
                'autograd: each op builds a computation graph node; .backward() traverses it in reverse',
                w / 2, infoY + 18
            );

            // Progress bar
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(20, h - 18, w - 40, 8);
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(20, h - 18, (w - 40) * progress, 8);
        }

        function animTensor() {
            tick++;
            if (tick % 4 === 0 && step < totalSteps) step++;
            drawTensorFrame();
            if (step < totalSteps && running) {
                animId = requestAnimationFrame(animTensor);
            } else if (step >= totalSteps) {
                running = false;
            }
        }

        function startTensor() {
            if (running) return;
            if (step >= totalSteps) { step = 0; genMats(); }
            running = true;
            animTensor();
        }

        function resetTensor() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            tick = 0; step = 0;
            genMats();
            drawTensorFrame();
        }

        var btnS = document.getElementById('pytorchTensorStart');
        var btnR = document.getElementById('pytorchTensorReset');
        if (btnS) btnS.addEventListener('click', startTensor);
        if (btnR) btnR.addEventListener('click', resetTensor);

        drawTensorFrame();
    })();

    // ======================================================
    // 3. FFI Pipeline Animation
    // ======================================================
    (function initFFI() {
        var cv = setupCanvas('canvas-python-ffi', 720, 260);
        if (!cv) return;

        var ctx = cv.ctx, w = cv.w, h = cv.h;
        var animId = null;
        var running = false;
        var tick = 0;
        var progress = 0;

        var stages = [
            { label: 'Python', sub: 'ctypes.CDLL()', color: '#f0db4f', textColor: '#1a1a1a' },
            { label: 'ctypes', sub: 'argtypes / restype', color: '#38bdf8', textColor: '#0f172a' },
            { label: '.so / .dll', sub: 'Go / Rust lib', color: '#34d399', textColor: '#0f172a' },
            { label: 'C ABI', sub: 'cdecl convention', color: '#fb923c', textColor: '#0f172a' },
            { label: 'Result', sub: 'Python object', color: '#c084fc', textColor: '#0f172a' },
        ];

        var boxW = 110, boxH = 56;
        var gap = (w - stages.length * boxW) / (stages.length + 1);
        var boxY = h / 2 - boxH / 2 - 10;

        function drawFFIFrame() {
            var bg = getStyle('--bg1') || '#0f172a';
            var text = getStyle('--text1') || '#e2e8f0';
            var text2 = getStyle('--text2') || '#94a3b8';

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = text;
            ctx.font = 'bold 14px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('FFI Pipeline: Python call to Go / Rust shared library', w / 2, 22);

            var totalLen = stages.length;
            // Each stage activates over equal slice of progress
            var sliceSize = 1.0 / (totalLen + 1);

            stages.forEach(function(stage, idx) {
                var bx = gap + idx * (boxW + gap);

                var stageStart = idx * sliceSize;
                var stageEnd = (idx + 1) * sliceSize;
                var localProg = Math.min(1, Math.max(0, (progress - stageStart) / sliceSize));
                var active = localProg > 0;

                // Draw box
                ctx.globalAlpha = active ? 1.0 : 0.3;
                ctx.fillStyle = active ? stage.color : '#334155';
                var rad = 8;
                ctx.beginPath();
                ctx.moveTo(bx + rad, boxY);
                ctx.lineTo(bx + boxW - rad, boxY);
                ctx.arcTo(bx + boxW, boxY, bx + boxW, boxY + rad, rad);
                ctx.lineTo(bx + boxW, boxY + boxH - rad);
                ctx.arcTo(bx + boxW, boxY + boxH, bx + boxW - rad, boxY + boxH, rad);
                ctx.lineTo(bx + rad, boxY + boxH);
                ctx.arcTo(bx, boxY + boxH, bx, boxY + boxH - rad, rad);
                ctx.lineTo(bx, boxY + rad);
                ctx.arcTo(bx, boxY, bx + rad, boxY, rad);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;

                if (active) {
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }

                ctx.fillStyle = active ? stage.textColor : text2;
                ctx.font = 'bold 12px Inter, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(stage.label, bx + boxW / 2, boxY + 22);
                ctx.fillStyle = active ? stage.textColor : text2;
                ctx.font = '10px Inter, monospace';
                ctx.fillText(stage.sub, bx + boxW / 2, boxY + 38);

                // Arrow to next
                if (idx < totalLen - 1) {
                    var arrowX = bx + boxW + 4;
                    var arrowY = boxY + boxH / 2;
                    var arrowEnd = bx + boxW + gap - 4;

                    var arrowStart2 = (idx + 1) * sliceSize;
                    var arrowProg = Math.min(1, Math.max(0, (progress - arrowStart2 + sliceSize * 0.5) / (sliceSize * 0.5)));
                    var currentArrowEnd = arrowX + (arrowEnd - arrowX) * arrowProg;

                    ctx.globalAlpha = arrowProg > 0 ? 0.9 : 0.2;
                    ctx.strokeStyle = '#64748b';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(arrowX, arrowY);
                    ctx.lineTo(currentArrowEnd, arrowY);
                    ctx.stroke();

                    if (arrowProg >= 1) {
                        ctx.fillStyle = '#64748b';
                        ctx.beginPath();
                        ctx.moveTo(arrowEnd, arrowY);
                        ctx.lineTo(arrowEnd - 8, arrowY - 5);
                        ctx.lineTo(arrowEnd - 8, arrowY + 5);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1;
                }
            });

            // Packet dot animation
            if (progress > 0 && progress < 1) {
                var dotX = gap + progress * ((stages.length - 1) * (boxW + gap));
                var dotY = boxY + boxH / 2;
                ctx.fillStyle = '#fbbf24';
                ctx.shadowColor = '#fbbf24';
                ctx.shadowBlur = 12;
                ctx.beginPath();
                ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            // Bottom labels
            var bottomY = boxY + boxH + 28;
            ctx.fillStyle = text2;
            ctx.font = '11px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('1. Python calls ctypes.CDLL  2. ctypes marshals args to C types  3. Executes native code in .so', w / 2, bottomY);
            ctx.fillText('4. Return value marshaled back  5. Python receives result as Python int/float/etc', w / 2, bottomY + 16);

            // Progress bar
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(20, h - 14, w - 40, 6);
            ctx.fillStyle = '#fbbf24';
            ctx.fillRect(20, h - 14, (w - 40) * progress, 6);
        }

        function animFFI() {
            tick++;
            if (tick % 3 === 0 && progress < 1) {
                progress = Math.min(1, progress + 0.008);
            }
            drawFFIFrame();
            if (progress < 1 && running) {
                animId = requestAnimationFrame(animFFI);
            } else if (progress >= 1) {
                running = false;
            }
        }

        function startFFI() {
            if (running) return;
            if (progress >= 1) { progress = 0; tick = 0; }
            running = true;
            animFFI();
        }

        function resetFFI() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            tick = 0; progress = 0;
            drawFFIFrame();
        }

        var btnS = document.getElementById('ffiStartBtn');
        var btnR = document.getElementById('ffiResetBtn');
        if (btnS) btnS.addEventListener('click', startFFI);
        if (btnR) btnR.addEventListener('click', resetFFI);

        drawFFIFrame();
    })();

    // Tab switching (for pytorch tabs)
    document.querySelectorAll('.tab-btn[data-tab]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var tabId = btn.getAttribute('data-tab');
            var container = btn.closest('.card') || btn.parentElement.parentElement;
            container.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            container.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
            btn.classList.add('active');
            var target = container.querySelector('#' + tabId);
            if (target) target.classList.add('active');
        });
    });
}

if (typeof window !== 'undefined' && typeof sections !== 'undefined') {
    var _origPy = sections['lang-python'];
    sections['lang-python'] = function() {
        return _origPy();
    };
}
