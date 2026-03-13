// AI/ML COMPREHENSIVE SECTION - Enhanced Override
sections['optimization-ml'] = () => `
<section class="animate-in">

<h1 class="section-title">AI, Machine Learning &amp; Deep Learning</h1>
<p class="section-subtitle">Dari Fondasi Induktif/Deduktif hingga Transformer, LLM, dan RAG &mdash; Panduan Komprehensif Modern AI</p>

<!-- ==================== TABLE OF CONTENTS ==================== -->
<div class="card animate-in">
<h2>Peta Materi</h2>
<div class="card-grid-3">
    <div class="info-box"><strong>1.</strong> Induktif vs Deduktif &mdash; Fondasi Pembelajaran</div>
    <div class="info-box"><strong>2.</strong> AI Agent &mdash; PEAS Framework &amp; 4 Area AI</div>
    <div class="info-box"><strong>3.</strong> Machine Learning &mdash; Tom Mitchell &amp; Paradigma</div>
    <div class="info-box"><strong>4.</strong> Probabilistic ML &mdash; Gaussian, Bayes, Naive Bayes</div>
    <div class="info-box"><strong>5.</strong> Supervised Learning &mdash; KNN, DT, SVM, Regression</div>
    <div class="info-box"><strong>6.</strong> Unsupervised Learning &mdash; K-Means, GMM, PCA</div>
    <div class="info-box"><strong>7.</strong> Neural Networks &mdash; MLP, CNN, RNN, LSTM</div>
    <div class="info-box"><strong>8.</strong> Transformers &amp; LLM &mdash; BERT, GPT, Modern AI</div>
    <div class="info-box"><strong>9.</strong> RAG &mdash; Retrieval Augmented Generation</div>
</div>
</div>

<!-- ==================== SECTION 1: INDUCTIVE VS DEDUCTIVE ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">1. Paradigma Pembelajaran: Induktif vs Deduktif</h2>

<div class="card animate-in">
<h3>Dua Cara Mesin "Belajar"</h3>
<p>Sebelum membahas algoritma, penting memahami dua paradigma fundamental bagaimana sistem cerdas memperoleh pengetahuan dan membuat keputusan.</p>

<div class="table-wrapper">
<table>
    <thead>
        <tr>
            <th>Aspek</th>
            <th>Induktif (Inductive)</th>
            <th>Deduktif (Deductive)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Arah</strong></td>
            <td>Spesifik &rarr; Umum</td>
            <td>Umum &rarr; Spesifik</td>
        </tr>
        <tr>
            <td><strong>Sumber</strong></td>
            <td>Dataset contoh kasus nyata</td>
            <td>Pengetahuan pakar, aturan logika</td>
        </tr>
        <tr>
            <td><strong>Proses</strong></td>
            <td>Menemukan pola dari data</td>
            <td>Menerapkan aturan ke kasus baru</td>
        </tr>
        <tr>
            <td><strong>Output</strong></td>
            <td>Model/pola yang dapat digeneralisasi</td>
            <td>Kesimpulan logis dari premis</td>
        </tr>
        <tr>
            <td><strong>Contoh</strong></td>
            <td>Machine Learning, Deep Learning</td>
            <td>Expert Systems, Rule-based AI, Prolog</td>
        </tr>
        <tr>
            <td><strong>Kelemahan</strong></td>
            <td>Butuh banyak data, bisa overfit</td>
            <td>Butuh pakar, sulit encode pengetahuan kompleks</td>
        </tr>
    </tbody>
</table>
</div>

<div class="card-grid">
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--green);">Induktif: Bottom-Up</h4>
        <div class="code-block">
<span class="cm">// Dari banyak contoh spesifik...</span>
Data: [
  {email:"Menang Rp10jt!", label:"spam"},
  {email:"Diskon 90%!",   label:"spam"},
  {email:"Meeting besok", label:"ham"},
  {email:"Laporan Q3",    label:"ham"},
  ...1000 contoh lagi...
]

<span class="cm">// ...pelajari pola umum</span>
<span class="cm">// Model: "jika ada kata 'Menang' atau 'Diskon'"</span>
<span class="cm">//        "kemungkinan spam tinggi"</span>

<span class="cm">// = Machine Learning (Naive Bayes, dll)</span></div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--orange);">Deduktif: Top-Down</h4>
        <div class="code-block">
<span class="cm">// Dari aturan umum pakar...</span>
Rules: [
  IF email CONTAINS "Menang" OR "Gratis"
     THEN label = "spam",
  IF sender IN trusted_list
     THEN label = "ham",
  IF subject STARTS "Re:"
     THEN label = "ham",
  ...
]

<span class="cm">// ...terapkan ke kasus spesifik baru</span>
apply_rules(new_email) -&gt; "spam"/"ham"

<span class="cm">// = Expert System / Rule-based</span></div>
    </div>
</div>

<div class="info-box">
    <strong>Mengapa ML (Induktif) mendominasi?</strong> Expert Systems memerlukan ribuan aturan yang dikodekan manual oleh pakar &mdash; sangat mahal dan tidak skalabel. Machine Learning secara otomatis <em>mengekstrak</em> aturan dari data. Namun untuk domain dengan aturan jelas (pajak, hukum), sistem deduktif masih sangat relevan.
</div>
</div>

<!-- ==================== SECTION 2: AI AGENT ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">2. AI Agent &mdash; Russell &amp; Norvig (Modern Approach)</h2>

<div class="card animate-in">
<h3>Apa itu AI Agent?</h3>
<p>Buku <em>Artificial Intelligence: A Modern Approach</em> oleh Stuart Russell dan Peter Norvig mendefinisikan AI Agent sebagai entitas yang:</p>

<div class="code-block">
<span class="cm">// Definisi Agent</span>
Agent = Perceive(Environment, Sensors) -&gt; Think -&gt; Act(Environment, Actuators)

<span class="cm">// Contoh: Autonomous Car</span>
Sensors:   Kamera, Lidar, GPS, Akselerometer
Thinking:  Neural network, planner
Actuators: Setir, Gas, Rem

<span class="cm">// Contoh: Chess AI</span>
Sensors:   Board state (array 8x8)
Thinking:  Minimax + Alpha-Beta pruning
Actuators: Pilihan langkah (move)</div>

<h3>PEAS Framework</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr>
            <th>Komponen</th>
            <th>Keterangan</th>
            <th>Contoh: Email Spam Filter</th>
            <th>Contoh: Self-driving Car</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>P</strong>erformance</td>
            <td>Ukuran kesuksesan agent</td>
            <td>Akurasi klasifikasi, F1-score</td>
            <td>Keamanan, kecepatan, kenyamanan</td>
        </tr>
        <tr>
            <td><strong>E</strong>nvironment</td>
            <td>Dunia tempat agent beroperasi</td>
            <td>Inbox email pengguna</td>
            <td>Jalan raya, lalu lintas</td>
        </tr>
        <tr>
            <td><strong>A</strong>ctuators</td>
            <td>Output / aksi agent</td>
            <td>Tandai spam / ham / delete</td>
            <td>Setir, gas, rem, lampu</td>
        </tr>
        <tr>
            <td><strong>S</strong>ensors</td>
            <td>Input / persepsi agent</td>
            <td>Isi email, pengirim, subject</td>
            <td>Kamera, Lidar, GPS, radar</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<div class="card animate-in">
<h3>4 Tipe Agent</h3>
<div class="card-grid">
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--accent);">1. Simple Reflex Agent</h4>
        <p>Bertindak berdasarkan <strong>kondisi saat ini</strong> saja. Tidak punya memori atau model dunia.</p>
        <div class="code-block">
<span class="cm">// Thermostat</span>
IF temp &lt; 20 THEN heater = ON
IF temp &gt; 25 THEN heater = OFF</div>
        <div class="warn-box" style="font-size:0.85rem;">Terbatas: tidak bisa handle partial observability</div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--green);">2. Model-Based Agent</h4>
        <p>Menyimpan <strong>state internal</strong> (model dunia). Bisa handle situasi yang tidak teramati langsung.</p>
        <div class="code-block">
<span class="cm">// Robot vacuum dengan peta</span>
state = {position, map, battery}
IF obstacle_ahead:
    update_map(obstacle)
    navigate_around()</div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--yellow);">3. Goal-Based Agent</h4>
        <p>Memiliki <strong>tujuan</strong> dan memilih aksi yang membawa ke tujuan. Butuh search/planning.</p>
        <div class="code-block">
<span class="cm">// GPS Navigation</span>
goal = {destination: "Bandara"}
plan = A_star(current, goal)
execute(plan)</div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--red);">4. Utility-Based Agent</h4>
        <p>Memiliki <strong>fungsi utilitas</strong>, memaksimalkan kebahagiaan/kepuasan. Paling fleksibel.</p>
        <div class="code-block">
<span class="cm">// Chess AI</span>
utility(state) = material_score
               + positional_score
               + king_safety
action = argmax(utility(next_states))</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>4 Area Utama AI (Russell &amp; Norvig)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr>
            <th>Area</th>
            <th>Pendekatan</th>
            <th>Algoritma Kunci</th>
            <th>Contoh Aplikasi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong style="color:var(--accent);">Searching</strong></td>
            <td>Eksplorasi ruang state</td>
            <td>BFS, DFS, A*, IDA*, MCTS</td>
            <td>8-puzzle, Maze solver, Chess</td>
        </tr>
        <tr>
            <td><strong style="color:var(--green);">Planning</strong></td>
            <td>Sekuensi aksi menuju goal</td>
            <td>STRIPS, PDDL, HTN</td>
            <td>Robot planning, Logistics</td>
        </tr>
        <tr>
            <td><strong style="color:var(--yellow);">Learning</strong></td>
            <td>Induktif dari data</td>
            <td>Neural nets, Decision trees, SVM</td>
            <td>Klasifikasi, Prediksi, Recognition</td>
        </tr>
        <tr>
            <td><strong style="color:var(--red);">Reasoning</strong></td>
            <td>Deduktif dari aturan</td>
            <td>Propositional logic, FOL, Inference</td>
            <td>Expert systems, Prolog, Knowledge graphs</td>
        </tr>
    </tbody>
</table>
</div>

<div class="card-grid">
    <div class="info-box">
        <strong>A* Search (Searching):</strong><br>
        f(n) = g(n) + h(n)<br>
        g(n) = cost dari start ke n<br>
        h(n) = heuristic (estimasi ke goal)<br>
        Admissible jika h(n) &le; h*(n)
    </div>
    <div class="info-box">
        <strong>STRIPS (Planning):</strong><br>
        State: {on(A,B), clear(A)}<br>
        Action: move(X,Y,Z)<br>
        Pre: clear(X), on(X,Y), clear(Z)<br>
        Effect: on(X,Z), clear(Y)
    </div>
</div>
</div>

<!-- ==================== SECTION 3: MACHINE LEARNING ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">3. Machine Learning &mdash; Tom Mitchell</h2>

<div class="card animate-in">
<h3>Definisi Formal Tom Mitchell (1997)</h3>
<div class="info-box">
    <strong>"A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."</strong>
    <br><br>
    &mdash; Tom M. Mitchell, <em>Machine Learning</em>, 1997
</div>

<div class="card-grid">
    <div class="card" style="background:var(--bg-tertiary);">
        <h4>Contoh: Spam Filter</h4>
        <div class="code-block">
T (Task)        = Klasifikasi email spam/ham
E (Experience)  = Dataset email berlabel
P (Performance) = Akurasi klasifikasi

Setelah training pada 10.000 email:
  Akurasi: 95.3%
Setelah training pada 100.000 email:
  Akurasi: 98.7% &lt;-- meningkat!</div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4>Contoh: Image Recognition</h4>
        <div class="code-block">
T (Task)        = Kenali objek dalam foto
E (Experience)  = ImageNet (14 juta foto berlabel)
P (Performance) = Top-5 Error Rate

AlexNet (2012): 16.4% error
VGG (2014):      7.3% error
ResNet (2015):   3.6% error (melampaui manusia!)</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Analitik vs Numerik</h3>
<p>Analoginya seperti menghitung luas di bawah kurva (integral): ada cara analitik (formula langsung) dan cara numerik (aproksimasi).</p>

<div class="card-grid">
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--green);">Solusi Analitik (Closed-Form)</h4>
        <p>Langsung hitung dengan rumus eksak. Seperti integral &int;x&sup2;dx = x&sup3;/3 + C.</p>
        <div class="code-block">
<span class="cm">// Linear Regression: Normal Equation</span>
<span class="cm">// Minimize ||y - X&theta;||&sup2;</span>
<span class="cm">// Solusi analitik:</span>
&theta; = (X<sup>T</sup>X)<sup>-1</sup>X<sup>T</sup>y

<span class="cm">// Keuntungan: satu langkah, exact</span>
<span class="cm">// Kerugian: O(n&sup3;) untuk inverse matrix</span>
<span class="cm">//           tidak skalabel untuk n besar</span></div>
        <div class="info-box" style="font-size:0.85rem;">Gunakan analitik jika: fitur &lt; 10.000, data muat di memori</div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--yellow);">Solusi Numerik (Iteratif)</h4>
        <p>Aproksimasi bertahap. Seperti Riemann sum: bagi menjadi persegi kecil-kecil dan jumlahkan.</p>
        <div class="code-block">
<span class="cm">// Gradient Descent</span>
<span class="cm">// Iteratif mendekati minimum</span>
<span class="kw">for</span> i = 1 to max_iterations:
    grad = compute_gradient(loss, &theta;)
    &theta; = &theta; - &alpha; * grad
    <span class="kw">if</span> |grad| &lt; &epsilon;: <span class="kw">break</span>

<span class="cm">// Keuntungan: O(n) per iterasi, skalabel</span>
<span class="cm">// Kerugian: perlu tuning learning rate</span>
<span class="cm">//           bisa stuck di local min</span></div>
        <div class="info-box" style="font-size:0.85rem;">Gunakan numerik jika: fitur &gt; 10.000, data besar (online learning)</div>
    </div>
</div>

<div class="anim-container">
    <h4>Visualisasi: Riemann Sum (Analogi Analitik vs Numerik)</h4>
    <canvas id="canvas-regression" width="700" height="300" style="width:100%;max-width:700px;border-radius:10px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="btn-regression-start">Mulai Animasi</button>
        <button class="anim-btn" id="btn-regression-reset">Reset</button>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Deterministik vs Stokastik</h3>
<div class="card-grid">
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--accent);">Deterministik</h4>
        <p>Input sama &rarr; Output sama. Tidak ada randomness.</p>
        <div class="code-block">
<span class="cm">// Decision Tree</span>
predict(x=[2.5, 1.3]):
  if x[0] &gt; 2.0: go right
  if x[1] &lt; 1.5: go left
  return "class A"
<span class="cm">// Hasil SELALU sama untuk input sama</span>

<span class="cm">// KNN</span>
knn.predict([2.5, 1.3])
<span class="cm">// Selalu 5 tetangga terdekat yg sama</span></div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4 style="color:var(--red);">Stokastik</h4>
        <p>Melibatkan randomness. Hasil bisa berbeda setiap run.</p>
        <div class="code-block">
<span class="cm">// SGD (Stochastic Gradient Descent)</span>
<span class="cm">// Pilih mini-batch secara RANDOM</span>
batch = random.sample(data, size=32)
grad = compute_gradient(loss, batch)
&theta; = &theta; - &alpha; * grad

<span class="cm">// Neural Network + Dropout</span>
<span class="cm">// Setiap forward pass, node dimatikan random</span>
dropout(x, p=0.5)
<span class="cm">// Monte Carlo simulation</span></div>
    </div>
</div>

<div class="info-box">
    <strong>ML umumnya Numerik + Stokastik:</strong> Deep learning menggunakan SGD (stokastik) untuk efisiensi komputasi pada dataset besar. Stokastisitas juga membantu <strong>escape dari local minima</strong> dan bertindak sebagai regularisasi implisit.
</div>
</div>

<!-- ==================== SECTION 4: PROBABILISTIC ML ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">4. Probabilistic Machine Learning</h2>

<div class="card animate-in">
<h3>Distribusi Gaussian (Normal)</h3>
<p>Distribusi paling penting dalam statistik dan ML. Muncul di mana-mana karena <strong>Central Limit Theorem</strong>: jumlah banyak variabel random independen mendekati distribusi normal.</p>

<div class="code-block">
<span class="cm">// Probability Density Function (PDF) Gaussian</span>
f(x; &mu;, &sigma;) = (1 / (&sigma; &times; &radic;(2&pi;))) &times; e<sup>(-&frac12;((x-&mu;)/&sigma;)&sup2;)</sup>

<span class="cm">// Parameter:</span>
&mu; (mu)    = mean (rata-rata) - menentukan POSISI puncak
&sigma; (sigma) = std dev (standar deviasi) - menentukan LEBAR kurva
&sigma;&sup2;      = variance

<span class="cm">// Properties:</span>
P(&mu; - &sigma; &lt; X &lt; &mu; + &sigma;)  = 68.27%   (1 sigma)
P(&mu; - 2&sigma; &lt; X &lt; &mu; + 2&sigma;) = 95.45%   (2 sigma)
P(&mu; - 3&sigma; &lt; X &lt; &mu; + 3&sigma;) = 99.73%   (3 sigma)</div>

<div class="anim-container">
    <h4>Animasi Bell Curve Gaussian</h4>
    <canvas id="canvas-gaussian" width="700" height="300" style="width:100%;max-width:700px;border-radius:10px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="btn-gaussian-start">Animasi</button>
        <button class="anim-btn" id="btn-gaussian-reset">Reset</button>
        <span style="color:var(--text2);margin-left:12px;font-size:0.9rem;">
            &mu;: <input type="range" id="slider-mu" min="-3" max="3" step="0.1" value="0" style="width:80px;vertical-align:middle;">
            &sigma;: <input type="range" id="slider-sigma" min="0.3" max="3" step="0.1" value="1" style="width:80px;vertical-align:middle;">
        </span>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Probabilitas Bayesian</h3>
<p>Thomas Bayes (1763) memberikan framework untuk memperbarui keyakinan berdasarkan bukti baru. Ini adalah inti dari banyak algoritma ML.</p>

<div class="code-block">
<span class="cm">// Bayes Theorem</span>
P(H|E) = P(E|H) &times; P(H) / P(E)

<span class="cm">// Komponen:</span>
P(H)    = Prior  - keyakinan awal sebelum melihat bukti
P(E|H)  = Likelihood - probabilitas bukti E jika hipotesis H benar
P(H|E)  = Posterior - keyakinan SETELAH melihat bukti E
P(E)    = Evidence (normalizing constant) - bisa dihitung dari:
          P(E) = P(E|H)P(H) + P(E|&not;H)P(&not;H)

<span class="cm">// Contoh: Tes Penyakit</span>
P(sakit)       = 0.001  (prevalensi 0.1%)
P(+|sakit)     = 0.99   (sensitivitas tes)
P(+|tidak sakit) = 0.05 (false positive rate)

P(sakit|+) = (0.99 &times; 0.001) / ((0.99&times;0.001) + (0.05&times;0.999))
           = 0.00099 / (0.00099 + 0.04995)
           = 0.0194 = 1.94%
<span class="cm">// Hanya 1.94% kemungkinan sakit meskipun tes positif!</span></div>
</div>

<div class="card animate-in">
<h3>Naive Bayes Classifier</h3>
<p>Aplikasi Bayes Theorem untuk klasifikasi teks. "Naive" karena mengasumsikan <strong>conditional independence</strong> antar fitur.</p>

<div class="code-block">
<span class="cm">// Asumsi Naive Bayes:</span>
P(w1, w2, ..., wn | C) = P(w1|C) &times; P(w2|C) &times; ... &times; P(wn|C)

<span class="cm">// Klasifikasi:</span>
P(spam | email) &prop; P(spam) &times; &prod;_i P(word_i | spam)
P(ham  | email) &prop; P(ham)  &times; &prod;_i P(word_i | ham)

<span class="cm">// Contoh: Email "Selamat Anda Menang Hadiah"</span>
<span class="cm">// Training data:</span>
P(spam)         = 0.4
P(ham)          = 0.6
P("Menang"|spam) = 0.8,  P("Menang"|ham) = 0.01
P("Hadiah"|spam) = 0.7,  P("Hadiah"|ham) = 0.02
P("Selamat"|spam)= 0.6,  P("Selamat"|ham)= 0.3
P("Anda"|spam)  = 0.5,   P("Anda"|ham)   = 0.6

<span class="cm">// Hitung (log untuk numerical stability):</span>
score_spam = log(0.4) + log(0.8) + log(0.7) + log(0.6) + log(0.5)
           = -0.916 + (-0.223) + (-0.357) + (-0.511) + (-0.693)
           = -2.70
score_ham  = log(0.6) + log(0.01) + log(0.02) + log(0.3) + log(0.6)
           = -0.511 + (-4.605) + (-3.912) + (-1.204) + (-0.511)
           = -10.74

<span class="cm">// score_spam (-2.70) &gt; score_ham (-10.74) -&gt; SPAM!</span></div>

<div class="card-grid">
    <div class="info-box">
        <strong>Keunggulan Naive Bayes:</strong>
        <ul>
            <li>Training sangat cepat O(n&times;d)</li>
            <li>Bekerja baik untuk text classification</li>
            <li>Robust terhadap fitur yang tidak relevan</li>
            <li>Butuh sedikit data training</li>
        </ul>
    </div>
    <div class="warn-box">
        <strong>Kelemahan Naive Bayes:</strong>
        <ul>
            <li>Asumsi independence seringkali tidak realistis</li>
            <li>Estimasi probabilitas bisa tidak akurat</li>
            <li>Zero probability problem (solusi: Laplace smoothing)</li>
        </ul>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Bayesian Networks (Probabilistic Graphical Models)</h3>
<p>Graf berarah asiklik (DAG) di mana node = variabel random, edge = ketergantungan conditional. Merepresentasikan distribusi joint probability secara compact.</p>

<div class="code-block">
<span class="cm">// Contoh: Wet Grass Network</span>
<span class="cm">// Nodes: Rain, Sprinkler, WetGrass</span>
<span class="cm">// Structure:</span>
Rain &rarr; WetGrass
Sprinkler &rarr; WetGrass
<span class="cm">// (Rain dan Sprinkler adalah independent)</span>

<span class="cm">// Conditional Probability Tables (CPT):</span>
P(Rain=T) = 0.2

P(Sprinkler=T | Rain=T) = 0.01
P(Sprinkler=T | Rain=F) = 0.4

P(WetGrass=T | Rain=T, Sprinkler=T) = 0.99
P(WetGrass=T | Rain=T, Sprinkler=F) = 0.8
P(WetGrass=T | Rain=F, Sprinkler=T) = 0.9
P(WetGrass=T | Rain=F, Sprinkler=F) = 0.0

<span class="cm">// Query: P(Rain=T | WetGrass=T) = ? (inference)</span>
<span class="cm">// Gunakan Variable Elimination atau Belief Propagation</span></div>

<div class="info-box">
    <strong>Aplikasi Bayesian Networks:</strong> Diagnosis medis (menyimpulkan penyakit dari gejala), spam filter, sistem rekomendasi, analisis risiko keuangan, dan Natural Language Processing.
</div>
</div>

<!-- ==================== SECTION 5: SUPERVISED LEARNING ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">5. Supervised Learning</h2>

<div class="card animate-in">
<p>Supervised Learning belajar dari <strong>pasangan (input, label)</strong>. Tujuan: pelajari fungsi f sehingga f(x) &approx; y untuk data baru.</p>

<div class="tabs" style="margin-bottom:0.5rem;">
    <button class="tab-btn active" data-tab="sl-knn">KNN</button>
    <button class="tab-btn" data-tab="sl-dt">Decision Tree</button>
    <button class="tab-btn" data-tab="sl-nb">Naive Bayes</button>
    <button class="tab-btn" data-tab="sl-linreg">Linear Reg</button>
    <button class="tab-btn" data-tab="sl-logreg">Logistic Reg</button>
    <button class="tab-btn" data-tab="sl-svm">SVM</button>
</div>

<div data-tab-content="sl-knn" class="tab-content active">
<h3>K-Nearest Neighbors (KNN)</h3>
<p>Algoritma paling sederhana: <strong>"Kamu seperti tetanggamu"</strong>. Untuk mengklasifikasi point baru, lihat K tetangga terdekat dan lakukan voting.</p>

<div class="card-grid">
    <div>
        <h4>Algoritma KNN</h4>
        <div class="step-list">
            <div class="step-item"><div class="step-num">1</div><div class="step-text">Hitung jarak antara query point dan SEMUA training points</div></div>
            <div class="step-item"><div class="step-num">2</div><div class="step-text">Urutkan berdasarkan jarak (ascending)</div></div>
            <div class="step-item"><div class="step-num">3</div><div class="step-text">Ambil K titik terdekat</div></div>
            <div class="step-item"><div class="step-num">4</div><div class="step-text">Voting: kelas terbanyak = prediksi (untuk regresi: rata-rata)</div></div>
        </div>

        <h4>Distance Metrics</h4>
        <div class="code-block">
<span class="cm">// Euclidean (paling umum, L2 norm)</span>
d(p,q) = &radic;(&sum;_i (p_i - q_i)&sup2;)

<span class="cm">// Manhattan (L1 norm, lebih robust terhadap outlier)</span>
d(p,q) = &sum;_i |p_i - q_i|

<span class="cm">// Minkowski (generalisasi)</span>
d(p,q) = (&sum;_i |p_i - q_i|^r)^(1/r)
<span class="cm">// r=1: Manhattan, r=2: Euclidean</span></div>
    </div>
    <div>
        <h4>Implementasi KNN di Go</h4>
        <div class="code-block">
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"math"</span>
    <span class="str">"sort"</span>
)

<span class="kw">type</span> Point <span class="kw">struct</span> {
    Features []<span class="kw">float64</span>
    Label    <span class="kw">string</span>
}

<span class="kw">type</span> Neighbor <span class="kw">struct</span> {
    Distance <span class="kw">float64</span>
    Label    <span class="kw">string</span>
}

<span class="kw">func</span> euclidean(a, b []<span class="kw">float64</span>) <span class="kw">float64</span> {
    sum := 0.0
    <span class="kw">for</span> i := <span class="kw">range</span> a {
        d := a[i] - b[i]
        sum += d * d
    }
    <span class="kw">return</span> math.Sqrt(sum)
}

<span class="kw">func</span> KNNPredict(train []Point, query []<span class="kw">float64</span>, k <span class="kw">int</span>) <span class="kw">string</span> {
    neighbors := make([]Neighbor, len(train))
    <span class="kw">for</span> i, p := <span class="kw">range</span> train {
        neighbors[i] = Neighbor{
            Distance: euclidean(p.Features, query),
            Label:    p.Label,
        }
    }
    sort.Slice(neighbors, <span class="kw">func</span>(i, j <span class="kw">int</span>) <span class="kw">bool</span> {
        <span class="kw">return</span> neighbors[i].Distance &lt; neighbors[j].Distance
    })
    votes := map[<span class="kw">string</span>]<span class="kw">int</span>{}
    <span class="kw">for</span> _, n := <span class="kw">range</span> neighbors[:k] {
        votes[n.Label]++
    }
    best, maxV := <span class="str">""</span>, 0
    <span class="kw">for</span> label, v := <span class="kw">range</span> votes {
        <span class="kw">if</span> v &gt; maxV { best, maxV = label, v }
    }
    <span class="kw">return</span> best
}</div>
    </div>
</div>

<div class="anim-container">
    <h4>Visualisasi KNN 2D</h4>
    <canvas id="canvas-knn" width="700" height="350" style="width:100%;max-width:700px;border-radius:10px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="btn-knn-start">Tambah Query Point</button>
        <button class="anim-btn" id="btn-knn-reset">Reset</button>
        <span style="color:var(--text2);margin-left:12px;font-size:0.9rem;">K = <input type="range" id="slider-k" min="1" max="7" step="2" value="3" style="width:70px;vertical-align:middle;"> <span id="k-val">3</span></span>
    </div>
</div>

<div class="warn-box"><strong>Kelemahan KNN:</strong> O(n) untuk setiap prediksi. Tidak skalabel untuk data besar. Sensitif terhadap skala fitur (perlu normalisasi). Curse of dimensionality: jarak kehilangan makna di dimensi tinggi.</div>
</div>

<div data-tab-content="sl-dt" class="tab-content">
<h3>Decision Trees</h3>
<p>Model yang membagi data secara rekursif berdasarkan fitur. Mudah diinterpretasi (explainable AI).</p>

<div class="card-grid">
    <div>
        <h4>Konsep Kunci</h4>
        <div class="code-block">
<span class="cm">// Entropy (ukuran ketidakpastian)</span>
H(S) = -&sum;_c p_c &times; log2(p_c)

<span class="cm">// Contoh: 10 spam, 10 ham</span>
H = -(0.5&times;log2(0.5) + 0.5&times;log2(0.5)) = 1.0 bit

<span class="cm">// Information Gain (ID3)</span>
IG(S, A) = H(S) - &sum;_v |S_v|/|S| &times; H(S_v)
<span class="cm">// Pilih fitur A yang memaksimalkan IG</span>

<span class="cm">// Gini Impurity (CART)</span>
Gini(S) = 1 - &sum;_c p_c&sup2;
<span class="cm">// 0 = pure node, 0.5 = max impurity</span>

<span class="cm">// Gain Ratio (C4.5) - menangani fitur continuous</span>
GR(S, A) = IG(S, A) / H_A(S)
<span class="cm">// H_A = split information entropy</span></div>

        <h4>Perbandingan: ID3 vs C4.5 vs CART vs Random Forest</h4>
        <div class="table-wrapper">
        <table>
            <thead><tr><th>Algoritma</th><th>Kriteria Split</th><th>Fitur</th></tr></thead>
            <tbody>
                <tr><td>ID3</td><td>Information Gain</td><td>Kategorik saja</td></tr>
                <tr><td>C4.5</td><td>Gain Ratio</td><td>Kategorik + kontinu</td></tr>
                <tr><td>CART</td><td>Gini Impurity</td><td>Kategorik + kontinu, binary split</td></tr>
                <tr><td>Random Forest</td><td>Gini/IG (bagging)</td><td>Ensemble of trees</td></tr>
            </tbody>
        </table>
        </div>
    </div>
    <div>
        <h4>Implementasi Decision Tree Node di Go</h4>
        <div class="code-block">
<span class="kw">package</span> main

<span class="kw">type</span> TreeNode <span class="kw">struct</span> {
    FeatureIdx  <span class="kw">int</span>
    Threshold   <span class="kw">float64</span>
    Label       <span class="kw">string</span>    <span class="cm">// non-nil = leaf</span>
    Left, Right *TreeNode
}

<span class="kw">func</span> (n *TreeNode) Predict(x []<span class="kw">float64</span>) <span class="kw">string</span> {
    <span class="kw">if</span> n.Label != <span class="str">""</span> {
        <span class="kw">return</span> n.Label <span class="cm">// leaf node</span>
    }
    <span class="kw">if</span> x[n.FeatureIdx] &lt;= n.Threshold {
        <span class="kw">return</span> n.Left.Predict(x)
    }
    <span class="kw">return</span> n.Right.Predict(x)
}

<span class="kw">func</span> gini(labels []<span class="kw">string</span>) <span class="kw">float64</span> {
    counts := map[<span class="kw">string</span>]<span class="kw">int</span>{}
    <span class="kw">for</span> _, l := <span class="kw">range</span> labels {
        counts[l]++
    }
    n := <span class="kw">float64</span>(len(labels))
    g := 1.0
    <span class="kw">for</span> _, c := <span class="kw">range</span> counts {
        p := <span class="kw">float64</span>(c) / n
        g -= p * p
    }
    <span class="kw">return</span> g
}

<span class="cm">// Random Forest: train N trees, masing-masing</span>
<span class="cm">// pada subset data (bagging) + subset fitur</span>
<span class="kw">type</span> RandomForest <span class="kw">struct</span> {
    Trees []*TreeNode
    NTree <span class="kw">int</span>
}

<span class="kw">func</span> (rf *RandomForest) Predict(x []<span class="kw">float64</span>) <span class="kw">string</span> {
    votes := map[<span class="kw">string</span>]<span class="kw">int</span>{}
    <span class="kw">for</span> _, t := <span class="kw">range</span> rf.Trees {
        votes[t.Predict(x)]++
    }
    best, max := <span class="str">""</span>, 0
    <span class="kw">for</span> k, v := <span class="kw">range</span> votes {
        <span class="kw">if</span> v &gt; max { best, max = k, v }
    }
    <span class="kw">return</span> best
}</div>
    </div>
</div>

<div class="info-box">
    <strong>Random Forest:</strong> Ensemble dari N decision trees. Setiap tree dilatih pada bootstrap sample (bagging) dan subset fitur acak. Final prediksi = majority vote. Mengurangi variance (overfitting) tanpa meningkatkan bias secara signifikan.
</div>
</div>

<div data-tab-content="sl-nb" class="tab-content">
<h3>Naive Bayes sebagai Supervised Classifier</h3>
<p>Lihat Section 4 untuk derivasi matematisnya. Di sini kita fokus pada implementasi dan varian.</p>

<div class="card-grid">
    <div>
        <h4>Varian Naive Bayes</h4>
        <div class="table-wrapper">
        <table>
            <thead><tr><th>Varian</th><th>Asumsi Distribusi</th><th>Use Case</th></tr></thead>
            <tbody>
                <tr><td>Gaussian NB</td><td>Gaussian (continuous)</td><td>Fitur numerik, Iris dataset</td></tr>
                <tr><td>Multinomial NB</td><td>Multinomial (count)</td><td>Text classification (word count)</td></tr>
                <tr><td>Bernoulli NB</td><td>Bernoulli (binary)</td><td>Text dengan binary features</td></tr>
                <tr><td>Complement NB</td><td>Complement class</td><td>Imbalanced classes</td></tr>
            </tbody>
        </table>
        </div>
    </div>
    <div>
        <h4>Naive Bayes di Go</h4>
        <div class="code-block">
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"math"</span>

<span class="kw">type</span> GaussianNB <span class="kw">struct</span> {
    ClassPrior map[<span class="kw">string</span>]<span class="kw">float64</span>
    Mean       map[<span class="kw">string</span>][]<span class="kw">float64</span>
    Std        map[<span class="kw">string</span>][]<span class="kw">float64</span>
}

<span class="kw">func</span> gaussianLogPDF(x, mu, sigma <span class="kw">float64</span>) <span class="kw">float64</span> {
    v := sigma * sigma
    <span class="kw">return</span> -0.5*math.Log(2*math.Pi*v) -
           (x-mu)*(x-mu)/(2*v)
}

<span class="kw">func</span> (nb *GaussianNB) Predict(x []<span class="kw">float64</span>) <span class="kw">string</span> {
    best, bestScore := <span class="str">""</span>, math.Inf(-1)
    <span class="kw">for</span> class := <span class="kw">range</span> nb.ClassPrior {
        score := math.Log(nb.ClassPrior[class])
        <span class="kw">for</span> i, xi := <span class="kw">range</span> x {
            score += gaussianLogPDF(xi,
                nb.Mean[class][i],
                nb.Std[class][i])
        }
        <span class="kw">if</span> score &gt; bestScore {
            best, bestScore = class, score
        }
    }
    <span class="kw">return</span> best
}</div>
    </div>
</div>
</div>

<div data-tab-content="sl-linreg" class="tab-content">
<h3>Linear Regression</h3>
<p>Prediksi nilai kontinu. Model: y = w&bull;x + b. Tujuan: minimasi Mean Squared Error.</p>

<div class="card-grid">
    <div>
        <h4>Matematika</h4>
        <div class="code-block">
<span class="cm">// Model linear: y_hat = w1*x1 + w2*x2 + ... + b</span>
<span class="cm">// Atau dalam notasi vektor: y = X&theta;</span>

<span class="cm">// Loss function: Mean Squared Error</span>
MSE = (1/n) &times; &sum;_i (y_i - y_hat_i)&sup2;

<span class="cm">// Gradient:</span>
&part;MSE/&part;w = -(2/n) &times; X<sup>T</sup>(y - X&theta;)
&part;MSE/&part;b = -(2/n) &times; &sum;(y_i - y_hat_i)

<span class="cm">// Normal Equation (Analytic):</span>
&theta; = (X<sup>T</sup>X)<sup>-1</sup>X<sup>T</sup>y

<span class="cm">// Gradient Descent (Numeric):</span>
&theta; = &theta; - &alpha; &times; (X<sup>T</sup>(X&theta; - y)) / n

<span class="cm">// Regularisasi:</span>
<span class="cm">// Ridge (L2): MSE + &lambda;&sum;w_i&sup2;  (shrinks weights)</span>
<span class="cm">// Lasso (L1): MSE + &lambda;&sum;|w_i| (sparsity)</span>
<span class="cm">// ElasticNet: kombinasi L1 + L2</span></div>
    </div>
    <div>
        <h4>Implementasi Go</h4>
        <div class="code-block">
<span class="kw">package</span> main

<span class="kw">type</span> LinearRegression <span class="kw">struct</span> {
    W     []<span class="kw">float64</span>
    B     <span class="kw">float64</span>
    LR    <span class="kw">float64</span>
    Epoch <span class="kw">int</span>
}

<span class="kw">func</span> (lr *LinearRegression) Train(
    X [][]<span class="kw">float64</span>, y []<span class="kw">float64</span>) {
    n := len(X)
    nFeat := len(X[0])
    lr.W = make([]<span class="kw">float64</span>, nFeat)

    <span class="kw">for</span> e := 0; e &lt; lr.Epoch; e++ {
        gradW := make([]<span class="kw">float64</span>, nFeat)
        gradB := 0.0

        <span class="kw">for</span> i := 0; i &lt; n; i++ {
            pred := lr.predict(X[i])
            err := pred - y[i]
            <span class="kw">for</span> j := 0; j &lt; nFeat; j++ {
                gradW[j] += err * X[i][j]
            }
            gradB += err
        }

        <span class="kw">for</span> j := 0; j &lt; nFeat; j++ {
            lr.W[j] -= lr.LR * gradW[j] / <span class="kw">float64</span>(n)
        }
        lr.B -= lr.LR * gradB / <span class="kw">float64</span>(n)
    }
}

<span class="kw">func</span> (lr *LinearRegression) predict(
    x []<span class="kw">float64</span>) <span class="kw">float64</span> {
    s := lr.B
    <span class="kw">for</span> i, w := <span class="kw">range</span> lr.W {
        s += w * x[i]
    }
    <span class="kw">return</span> s
}</div>
    </div>
</div>
</div>

<div data-tab-content="sl-logreg" class="tab-content">
<h3>Logistic Regression</h3>
<p>Klasifikasi biner menggunakan fungsi sigmoid. Output adalah probabilitas: P(y=1|x) &isin; [0,1].</p>

<div class="code-block">
<span class="cm">// Sigmoid function</span>
&sigma;(z) = 1 / (1 + e<sup>-z</sup>)

<span class="cm">// Model: P(y=1|x) = &sigma;(w&bull;x + b)</span>

<span class="cm">// Decision boundary: &sigma;(z) = 0.5 ketika z = 0</span>
<span class="cm">// predict 1 jika P(y=1|x) &gt; 0.5 (threshold tunable)</span>

<span class="cm">// Loss: Binary Cross-Entropy (Log Loss)</span>
BCE = -(1/n) &times; &sum;_i [y_i &times; log(y_hat_i) + (1-y_i) &times; log(1-y_hat_i)]

<span class="cm">// Gradient:</span>
&part;BCE/&part;w = (1/n) &times; X<sup>T</sup>(&sigma;(X&theta;) - y)

<span class="cm">// Multi-class: Softmax Regression</span>
P(y=k|x) = exp(w_k &bull; x) / &sum;_j exp(w_j &bull; x)
<span class="cm">// Loss: Categorical Cross-Entropy</span>

<span class="cm">// Properties:</span>
<span class="cm">// - Convex loss function (global minimum guaranteed)</span>
<span class="cm">// - Interpretable: log-odds = w&bull;x + b</span>
<span class="cm">// - Regularisasi penting: L2 (Ridge), L1 (Lasso)</span></div>

<div class="info-box">
    <strong>Logistic Regression vs Linear Regression:</strong>
    Linear regression meminimalkan MSE untuk nilai kontinu. Logistic regression meminimalkan cross-entropy untuk probabilitas kelas. Keduanya menggunakan gradient descent, tapi loss function dan output berbeda.
</div>
</div>

<div data-tab-content="sl-svm" class="tab-content">
<h3>Support Vector Machine (SVM)</h3>
<p>SVM mencari <strong>hyperplane pemisah</strong> dengan margin terbesar antara dua kelas. Support vectors adalah titik-titik paling dekat ke hyperplane.</p>

<div class="card-grid">
    <div>
        <h4>Konsep Inti</h4>
        <div class="code-block">
<span class="cm">// Hyperplane: w&bull;x + b = 0</span>
<span class="cm">// Margin = 2 / ||w||</span>

<span class="cm">// Primal Optimization:</span>
min (1/2)||w||&sup2;
subject to: y_i(w&bull;x_i + b) &ge; 1 &forall;i

<span class="cm">// Soft margin (C parameter):</span>
min (1/2)||w||&sup2; + C &times; &sum;&xi;_i
<span class="cm">// C besar: kurang margin, lebih akurat di train</span>
<span class="cm">// C kecil: margin besar, lebih generalize</span>

<span class="cm">// Dual form + Kernel trick:</span>
K(x_i, x_j) = &phi;(x_i) &bull; &phi;(x_j)

<span class="cm">// Kernel functions:</span>
Linear:   K(x,z) = x&bull;z
Poly:     K(x,z) = (x&bull;z + c)^d
RBF/Gauss:K(x,z) = exp(-&gamma;||x-z||&sup2;)
Sigmoid:  K(x,z) = tanh(&alpha;x&bull;z + c)</div>
    </div>
    <div>
        <div class="info-box">
            <strong>Kernel Trick:</strong><br>
            SVM bisa membuat decision boundary non-linear tanpa perlu menghitung koordinat di feature space tinggi. Cukup hitung inner product dengan kernel function K(x,z). RBF kernel efektif untuk sebagian besar masalah.
        </div>
        <div class="warn-box">
            <strong>Kapan Gunakan SVM?</strong>
            <ul>
                <li>Data dengan fitur banyak tapi sampel sedikit</li>
                <li>Klasifikasi teks, bioinformatika</li>
                <li>Jika decision boundary non-linear (gunakan RBF kernel)</li>
                <li>Tidak baik untuk data sangat besar (O(n&sup2;) - O(n&sup3;) training)</li>
            </ul>
        </div>
    </div>
</div>
</div>

</div>

<!-- ==================== SECTION 6: UNSUPERVISED LEARNING ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">6. Unsupervised Learning</h2>

<div class="card animate-in">
<h3>K-Means Clustering</h3>
<p>Kelompokkan N titik data ke dalam K cluster. Setiap cluster diwakili oleh <strong>centroid</strong> (titik tengah).</p>

<div class="card-grid">
    <div>
        <h4>Algoritma Lloyd's K-Means</h4>
        <div class="step-list">
            <div class="step-item"><div class="step-num">1</div><div class="step-text"><strong>Init:</strong> Pilih K centroid secara acak (atau K-Means++)</div></div>
            <div class="step-item"><div class="step-num">2</div><div class="step-text"><strong>Assign:</strong> Setiap titik ditetapkan ke centroid terdekat</div></div>
            <div class="step-item"><div class="step-num">3</div><div class="step-text"><strong>Update:</strong> Hitung ulang centroid = rata-rata titik di cluster-nya</div></div>
            <div class="step-item"><div class="step-num">4</div><div class="step-text"><strong>Repeat:</strong> Ulangi step 2-3 sampai konvergen (tidak ada perubahan)</div></div>
        </div>

        <div class="code-block">
<span class="cm">// Objective: Minimize Within-Cluster Sum of Squares (WCSS)</span>
J = &sum;_k &sum;_{x&isin;C_k} ||x - &mu;_k||&sup2;

<span class="cm">// Guarantee: konvergen, tapi bisa ke local minimum</span>
<span class="cm">// Solusi: jalankan beberapa kali dengan init berbeda</span>
<span class="cm">// K-Means++: init centroid dengan probabilitas &prop; jarak ke centroid terdekat</span></div>
    </div>
    <div>
        <h4>K-Means di Go</h4>
        <div class="code-block">
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"math"</span>
    <span class="str">"math/rand"</span>
)

<span class="kw">func</span> KMeans(points [][2]<span class="kw">float64</span>, k, iters <span class="kw">int</span>) [][2]<span class="kw">float64</span> {
    n := len(points)
    centroids := make([][2]<span class="kw">float64</span>, k)
    <span class="kw">for</span> i := <span class="kw">range</span> centroids {
        centroids[i] = points[rand.Intn(n)]
    }
    assign := make([]<span class="kw">int</span>, n)

    <span class="kw">for</span> it := 0; it &lt; iters; it++ {
        <span class="cm">// Assignment step</span>
        <span class="kw">for</span> i, p := <span class="kw">range</span> points {
            best, bestD := 0, math.Inf(1)
            <span class="kw">for</span> j, c := <span class="kw">range</span> centroids {
                dx := p[0]-c[0]; dy := p[1]-c[1]
                d := dx*dx + dy*dy
                <span class="kw">if</span> d &lt; bestD { best, bestD = j, d }
            }
            assign[i] = best
        }
        <span class="cm">// Update step</span>
        sums := make([][2]<span class="kw">float64</span>, k)
        counts := make([]<span class="kw">int</span>, k)
        <span class="kw">for</span> i, p := <span class="kw">range</span> points {
            c := assign[i]
            sums[c][0] += p[0]
            sums[c][1] += p[1]
            counts[c]++
        }
        <span class="kw">for</span> j := <span class="kw">range</span> centroids {
            <span class="kw">if</span> counts[j] &gt; 0 {
                centroids[j][0] = sums[j][0] / <span class="kw">float64</span>(counts[j])
                centroids[j][1] = sums[j][1] / <span class="kw">float64</span>(counts[j])
            }
        }
    }
    <span class="kw">return</span> centroids
}</div>
    </div>
</div>

<div class="anim-container">
    <h4>Animasi K-Means Clustering</h4>
    <canvas id="canvas-kmeans" width="700" height="350" style="width:100%;max-width:700px;border-radius:10px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="btn-kmeans-start">Mulai / Next Step</button>
        <button class="anim-btn" id="btn-kmeans-reset">Reset</button>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>EM Algorithm &mdash; Gaussian Mixture Models (GMM)</h3>
<p>K-Means menggunakan <strong>hard assignment</strong> (setiap titik ke satu cluster). GMM menggunakan <strong>soft assignment</strong> (probabilistik). Setiap cluster adalah distribusi Gaussian.</p>

<div class="code-block">
<span class="cm">// Model GMM: P(x) = &sum;_k &pi;_k &times; N(x; &mu;_k, &Sigma;_k)</span>
<span class="cm">// &pi;_k = mixing coefficient (berat), &sum;&pi;_k = 1</span>
<span class="cm">// &mu;_k = mean cluster k</span>
<span class="cm">// &Sigma;_k = covariance matrix cluster k</span>

<span class="cm">// EM Algorithm:</span>

<span class="cm">// E-step: Hitung "responsibility" (soft assignment)</span>
r_ik = &pi;_k &times; N(x_i; &mu;_k, &Sigma;_k)
     / &sum;_j &pi;_j &times; N(x_i; &mu;_j, &Sigma;_j)
<span class="cm">// r_ik = probabilitas titik i berasal dari cluster k</span>

<span class="cm">// M-step: Update parameter menggunakan weighted average</span>
N_k = &sum;_i r_ik
&mu;_k = (1/N_k) &times; &sum;_i r_ik &times; x_i
&Sigma;_k = (1/N_k) &times; &sum;_i r_ik &times; (x_i - &mu;_k)(x_i - &mu;_k)<sup>T</sup>
&pi;_k = N_k / N

<span class="cm">// Repeat E-step dan M-step sampai log-likelihood konvergen</span>
<span class="cm">// log L = &sum;_i log( &sum;_k &pi;_k N(x_i; &mu;_k, &Sigma;_k) )</span></div>

<div class="info-box">
    <strong>GMM vs K-Means:</strong> K-Means = EM dengan covariance spherical sama untuk semua cluster. GMM lebih fleksibel: bisa mendeteksi cluster berbentuk elips dengan ukuran berbeda. GMM memberikan probabilitas membership, K-Means hanya label.
</div>
</div>

<div class="card animate-in">
<h3>Hierarchical Clustering &amp; PCA</h3>
<div class="card-grid">
    <div class="card" style="background:var(--bg-tertiary);">
        <h4>Hierarchical Clustering</h4>
        <p>Membangun dendrogram (pohon cluster). Dua pendekatan:</p>
        <div class="code-block">
<span class="cm">// Agglomerative (bottom-up, lebih umum)</span>
1. Mulai: setiap titik = cluster sendiri
2. Gabungkan 2 cluster terdekat
3. Ulangi sampai satu cluster
4. Potong dendrogram di ketinggian tertentu

<span class="cm">// Linkage criteria:</span>
Single:   min jarak antar anggota
Complete: max jarak antar anggota
Average:  rata-rata jarak (UPGMA)
Ward:     minimasi peningkatan WCSS</div>
    </div>
    <div class="card" style="background:var(--bg-tertiary);">
        <h4>PCA (Principal Component Analysis)</h4>
        <p>Reduksi dimensi: proyeksikan data ke arah dengan <strong>variansi tertinggi</strong>.</p>
        <div class="code-block">
<span class="cm">// Algoritma PCA:</span>
1. Standarisasi data (zero mean, unit variance)
2. Hitung covariance matrix: C = X<sup>T</sup>X / (n-1)
3. Eigendecomposition: C = V &Lambda; V<sup>T</sup>
4. Pilih k eigenvectors (PC) terbesar
5. Project: X_reduced = X &times; V_k

<span class="cm">// Interpretasi:</span>
<span class="cm">// PC1: arah variansi maksimum</span>
<span class="cm">// PC2: orthogonal ke PC1, variansi max berikutnya</span>
<span class="cm">// Explained variance ratio: &lambda;_i / &sum;&lambda;</span></div>
    </div>
</div>
</div>

<!-- ==================== SECTION 7: NEURAL NETWORKS ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">7. Neural Networks &amp; Deep Learning</h2>

<div class="card animate-in">
<h3>Dari Perceptron ke MLP</h3>

<div class="card-grid">
    <div>
        <h4>Single Neuron (Perceptron)</h4>
        <div class="code-block">
<span class="cm">// Single neuron</span>
z = w1*x1 + w2*x2 + ... + wn*xn + b
a = activation(z)

<span class="cm">// Activation functions:</span>
step(z)    = 1 if z &gt; 0 else 0   (Perceptron asli)
sigmoid(z) = 1 / (1 + e<sup>-z</sup>)
tanh(z)    = (e<sup>z</sup> - e<sup>-z</sup>) / (e<sup>z</sup> + e<sup>-z</sup>)
relu(z)    = max(0, z)
leaky_relu(z) = max(0.01*z, z)
gelu(z)    = z &times; &Phi;(z)  (digunakan di BERT/GPT)</div>

        <h4>Multi-Layer Perceptron (MLP)</h4>
        <div class="code-block">
<span class="cm">// Forward pass: layer demi layer</span>
Input: x &isin; R<sup>d</sup>
Hidden layer 1: h1 = relu(W1 &times; x + b1)
Hidden layer 2: h2 = relu(W2 &times; h1 + b2)
Output:         y_hat = softmax(W3 &times; h2 + b3)

<span class="cm">// Backpropagation: chain rule</span>
&part;L/&part;W1 = &part;L/&part;y_hat &times; &part;y_hat/&part;h2 &times; &part;h2/&part;h1 &times; &part;h1/&part;W1

<span class="cm">// Weight update:</span>
W_l = W_l - &alpha; &times; &part;L/&part;W_l</div>
    </div>
    <div>
        <h4>Forward Pass di Go</h4>
        <div class="code-block">
<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"math"</span>

<span class="kw">type</span> Layer <span class="kw">struct</span> {
    W     [][]<span class="kw">float64</span> <span class="cm">// [out][in]</span>
    B     []<span class="kw">float64</span>
    ActFn <span class="kw">string</span>
}

<span class="kw">func</span> relu(x <span class="kw">float64</span>) <span class="kw">float64</span> {
    <span class="kw">if</span> x &gt; 0 { <span class="kw">return</span> x }
    <span class="kw">return</span> 0
}

<span class="kw">func</span> (l *Layer) Forward(x []<span class="kw">float64</span>) []<span class="kw">float64</span> {
    out := make([]<span class="kw">float64</span>, len(l.W))
    <span class="kw">for</span> i, row := <span class="kw">range</span> l.W {
        s := l.B[i]
        <span class="kw">for</span> j, w := <span class="kw">range</span> row {
            s += w * x[j]
        }
        <span class="kw">switch</span> l.ActFn {
        <span class="kw">case</span> <span class="str">"relu"</span>:    out[i] = relu(s)
        <span class="kw">case</span> <span class="str">"sigmoid"</span>: out[i] = 1/(1+math.Exp(-s))
        <span class="kw">default</span>:       out[i] = s
        }
    }
    <span class="kw">return</span> out
}

<span class="kw">type</span> MLP <span class="kw">struct</span> {
    Layers []*Layer
}

<span class="kw">func</span> (m *MLP) Forward(x []<span class="kw">float64</span>) []<span class="kw">float64</span> {
    h := x
    <span class="kw">for</span> _, l := <span class="kw">range</span> m.Layers {
        h = l.Forward(h)
    }
    <span class="kw">return</span> h
}</div>
    </div>
</div>

<div class="anim-container">
    <h4>Animasi Neural Network Forward Pass</h4>
    <canvas id="canvas-neural-fwd" width="700" height="350" style="width:100%;max-width:700px;border-radius:10px;"></canvas>
    <div class="anim-controls">
        <button class="anim-btn" id="btn-neural-fwd-start">Mulai Forward Pass</button>
        <button class="anim-btn" id="btn-neural-fwd-reset">Reset</button>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Activation Functions Comparison</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr>
            <th>Fungsi</th>
            <th>Formula</th>
            <th>Range</th>
            <th>Masalah</th>
            <th>Use Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sigmoid</td>
            <td>1/(1+e<sup>-z</sup>)</td>
            <td>(0, 1)</td>
            <td>Vanishing gradient, not zero-centered</td>
            <td>Output layer binary classification</td>
        </tr>
        <tr>
            <td>Tanh</td>
            <td>(e<sup>z</sup>-e<sup>-z</sup>)/(e<sup>z</sup>+e<sup>-z</sup>)</td>
            <td>(-1, 1)</td>
            <td>Vanishing gradient</td>
            <td>RNN hidden layers</td>
        </tr>
        <tr>
            <td>ReLU</td>
            <td>max(0, z)</td>
            <td>[0, &infin;)</td>
            <td>Dying ReLU (neuron mati)</td>
            <td>Hidden layers (paling umum)</td>
        </tr>
        <tr>
            <td>Leaky ReLU</td>
            <td>max(0.01z, z)</td>
            <td>(-&infin;, &infin;)</td>
            <td>Hyperparameter leak coeff</td>
            <td>Solusi dying ReLU</td>
        </tr>
        <tr>
            <td>GELU</td>
            <td>z&Phi;(z)</td>
            <td>(-&infin;, &infin;)</td>
            <td>Komputasi lebih berat</td>
            <td>BERT, GPT, Transformers</td>
        </tr>
        <tr>
            <td>Softmax</td>
            <td>e<sup>z_i</sup>/&sum;e<sup>z_j</sup></td>
            <td>(0, 1), sum=1</td>
            <td>Numerical instability (gunakan log-sum-exp)</td>
            <td>Output layer multi-class</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<div class="card animate-in">
<h3>Convolutional Neural Network (CNN)</h3>
<p>Arsitektur khusus untuk data spasial (gambar, sinyal). Menggunakan operasi <strong>konvolusi</strong> untuk mengekstrak fitur secara lokal.</p>

<div class="card-grid">
    <div>
        <h4>Operasi Konvolusi</h4>
        <div class="code-block">
<span class="cm">// Konvolusi 2D: sliding kernel/filter</span>
(I * K)[i,j] = &sum;_m &sum;_n I[i+m, j+n] &times; K[m,n]

<span class="cm">// Contoh kernel edge detection (Sobel):</span>
K = [[-1,  0, +1],
     [-2,  0, +2],
     [-1,  0, +1]]

<span class="cm">// Output size setelah konvolusi:</span>
H_out = (H_in - F + 2P) / S + 1
<span class="cm">// F=kernel size, P=padding, S=stride</span>

<span class="cm">// Pooling (reduksi dimensi):</span>
MaxPool: ambil nilai maximum per window
AvgPool: ambil rata-rata per window

<span class="cm">// Arsitektur CNN tipikal:</span>
Input(224x224x3)
  &rarr; Conv(3x3, 64) + ReLU + MaxPool
  &rarr; Conv(3x3, 128) + ReLU + MaxPool
  &rarr; Conv(3x3, 256) + ReLU + MaxPool
  &rarr; Flatten
  &rarr; Dense(1024) + ReLU + Dropout
  &rarr; Dense(num_classes) + Softmax</div>
    </div>
    <div>
        <div class="info-box">
            <strong>Mengapa CNN bekerja untuk gambar?</strong>
            <ul>
                <li><strong>Local connectivity:</strong> Fitur lokal (edge, corner) lebih informatif</li>
                <li><strong>Parameter sharing:</strong> Kernel sama diaplikasikan ke seluruh gambar &rarr; jauh lebih sedikit parameter</li>
                <li><strong>Translation invariance:</strong> Melalui pooling, posisi fitur tidak terlalu penting</li>
            </ul>
        </div>
        <div class="code-block">
<span class="cm">// Evolusi arsitektur CNN:</span>
LeNet-5 (1998):  60K params, MNIST
AlexNet (2012):  60M params, ImageNet winner
VGGNet (2014):   138M, deep 3x3 convs
GoogLeNet(2014): 6.8M, Inception module
ResNet (2015):   Skip connections, 152 layers
DenseNet (2017): Dense connections
EfficientNet(19): Neural architecture search
ConvNeXt(2022):  CNN matching Transformer perf</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Recurrent Neural Network (RNN) &amp; LSTM</h3>
<div class="card-grid">
    <div>
        <h4>RNN: Sequential Processing</h4>
        <div class="code-block">
<span class="cm">// RNN unrolled through time</span>
h_t = tanh(W_hh &times; h_{t-1} + W_xh &times; x_t + b_h)
y_t = W_hy &times; h_t + b_y

<span class="cm">// Masalah: Vanishing Gradient</span>
<span class="cm">// &part;L/&part;W &prop; &prod; &part;h_t/&part;h_{t-1}</span>
<span class="cm">// Jika |W_hh| &lt; 1: gradient mengecil exponential</span>
<span class="cm">// Jika |W_hh| &gt; 1: gradient meledak exponential</span>

<span class="cm">// Solusi exploding: gradient clipping</span>
<span class="cm">// Solusi vanishing: LSTM, GRU</span></div>

        <h4>LSTM: Long Short-Term Memory</h4>
        <div class="code-block">
<span class="cm">// 3 gates + cell state (memory highway)</span>
f_t = &sigma;(W_f &times; [h_{t-1}, x_t] + b_f)  <span class="cm">// forget gate</span>
i_t = &sigma;(W_i &times; [h_{t-1}, x_t] + b_i)  <span class="cm">// input gate</span>
o_t = &sigma;(W_o &times; [h_{t-1}, x_t] + b_o)  <span class="cm">// output gate</span>
g_t = tanh(W_g &times; [h_{t-1}, x_t] + b_g) <span class="cm">// candidate</span>

<span class="cm">// Cell state update (long-term memory)</span>
C_t = f_t &odot; C_{t-1} + i_t &odot; g_t

<span class="cm">// Hidden state (short-term output)</span>
h_t = o_t &odot; tanh(C_t)

<span class="cm">// &odot; = element-wise multiplication (Hadamard)</span></div>
    </div>
    <div>
        <div class="info-box">
            <strong>LSTM Gate Intuition:</strong>
            <ul>
                <li><strong>Forget gate (f_t):</strong> Berapa banyak memori lama yang perlu "dilupakan"? (0=lupakan semua, 1=ingat semua)</li>
                <li><strong>Input gate (i_t):</strong> Berapa banyak informasi baru yang perlu disimpan?</li>
                <li><strong>Cell state (C_t):</strong> "Memori jangka panjang" yang mengalir tanpa modifikasi besar</li>
                <li><strong>Output gate (o_t):</strong> Berapa banyak cell state yang dijadikan output?</li>
            </ul>
        </div>
        <h4>GRU: Gated Recurrent Unit</h4>
        <div class="code-block">
<span class="cm">// Versi lebih sederhana dari LSTM (2 gates)</span>
z_t = &sigma;(W_z &times; [h_{t-1}, x_t]) <span class="cm">// update gate</span>
r_t = &sigma;(W_r &times; [h_{t-1}, x_t]) <span class="cm">// reset gate</span>
h_tilde = tanh(W &times; [r_t &odot; h_{t-1}, x_t])
h_t = (1-z_t) &odot; h_{t-1} + z_t &odot; h_tilde

<span class="cm">// GRU vs LSTM:</span>
<span class="cm">// GRU: lebih cepat, sedikit parameter</span>
<span class="cm">// LSTM: lebih expressive untuk sequence panjang</span></div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Autoencoder &amp; Variational Autoencoder</h3>
<div class="card-grid">
    <div>
        <h4>Autoencoder</h4>
        <div class="code-block">
<span class="cm">// Arsitektur: Encoder -&gt; Bottleneck -&gt; Decoder</span>
Input x (d dimensi)
  &rarr; Encoder: h = f(x) &isin; R<sup>k</sup>, k &lt;&lt; d  [latent space]
  &rarr; Decoder: x_hat = g(h) &isin; R<sup>d</sup>

<span class="cm">// Loss: Reconstruction loss</span>
L = ||x - x_hat||&sup2;  (MSE untuk gambar)
L = BCE(x, x_hat)     (jika output binary)

<span class="cm">// Use cases:</span>
<span class="cm">// - Compression (gambar, audio)</span>
<span class="cm">// - Anomaly detection (besar reconstruction error = anomali)</span>
<span class="cm">// - Feature extraction (bottleneck = representasi)</span>
<span class="cm">// - Denoising autoencoder: input noisy, output clean</span></div>
    </div>
    <div>
        <h4>Variational Autoencoder (VAE)</h4>
        <div class="code-block">
<span class="cm">// VAE: encoder belajar DISTRIBUSI, bukan titik</span>
Encoder: q(z|x) = N(&mu;(x), &sigma;&sup2;(x))
<span class="cm">// Output: mean &mu; dan log variance log(&sigma;&sup2;)</span>

<span class="cm">// Reparameterization trick (agar bisa backprop):</span>
z = &mu; + &sigma; &times; &epsilon;,  &epsilon; ~ N(0,I)

Decoder: p(x|z) = generative model

<span class="cm">// Loss: ELBO (Evidence Lower Bound)</span>
L = E[log p(x|z)] - KL(q(z|x) || p(z))
<span class="cm">// = Reconstruction loss + KL divergence</span>
<span class="cm">// KL: ukuran jarak antara q(z|x) dan N(0,I)</span>

<span class="cm">// Kelebihan VAE vs AE:</span>
<span class="cm">// - Latent space continuous dan structured</span>
<span class="cm">// - Bisa generate sampel baru: sample z ~ N(0,I) -&gt; decode</span></div>
    </div>
</div>
</div>

<!-- ==================== SECTION 8: TRANSFORMERS & LLM ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">8. Transformers &amp; Large Language Models</h2>

<div class="card animate-in">
<h3>Attention Mechanism</h3>
<p>Diperkenalkan oleh Bahdanau et al. (2014) untuk machine translation. Memungkinkan model memperhatikan bagian berbeda dari input saat menghasilkan setiap token output.</p>

<div class="card-grid">
    <div>
        <h4>Scaled Dot-Product Attention</h4>
        <div class="code-block">
<span class="cm">// Q = Query, K = Key, V = Value</span>
<span class="cm">// Setiap token menghasilkan Q, K, V melalui linear projection</span>

Attention(Q, K, V) = softmax(QK<sup>T</sup> / &radic;d_k) &times; V

<span class="cm">// QK&sup2; = attention scores (dot product similarity)</span>
<span class="cm">// / &radic;d_k = scaling (mencegah vanishing gradient di softmax)</span>
<span class="cm">// softmax = normalisasi jadi attention weights (sum=1)</span>
<span class="cm">// &times; V = weighted sum of values</span>

<span class="cm">// Contoh 3 tokens: "The cat sat"</span>
<span class="cm">// Token "cat" bisa attend ke "The" dengan weight 0.1</span>
<span class="cm">// dan ke "sat" dengan weight 0.8</span>
<span class="cm">// Ini menangkap relasi semantik/sintaksis!</span></div>

        <h4>Multi-Head Attention</h4>
        <div class="code-block">
<span class="cm">// h attention heads paralel</span>
head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)
MultiHead(Q,K,V) = Concat(head_1,...,head_h) &times; W^O

<span class="cm">// Setiap head belajar aspek berbeda:</span>
<span class="cm">// head 1: relasi sintaksis (subject-verb)</span>
<span class="cm">// head 2: relasi jarak jauh (coreference)</span>
<span class="cm">// head 3: semantic similarity</span></div>
    </div>
    <div>
        <div class="anim-container" style="padding:0;">
            <h4>Attention Heatmap Visualization</h4>
            <canvas id="canvas-attention" width="450" height="350" style="width:100%;max-width:450px;border-radius:10px;"></canvas>
            <div class="anim-controls">
                <button class="anim-btn" id="btn-attention-start">Animasi Attention</button>
                <button class="anim-btn" id="btn-attention-reset">Reset</button>
            </div>
        </div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Transformer Architecture (Vaswani et al. 2017)</h3>
<p>"Attention Is All You Need" &mdash; menggantikan RNN sepenuhnya dengan mekanisme attention. Bisa diparalelkan sepenuhnya saat training.</p>

<div class="code-block">
<span class="cm">// Encoder block (stack N=6 kali):</span>
x &rarr; [Multi-Head Self-Attention] &rarr; Add&amp;Norm &rarr; [Feed-Forward] &rarr; Add&amp;Norm &rarr; output

<span class="cm">// Decoder block (stack N=6 kali):</span>
x &rarr; [Masked MH Self-Attention] &rarr; Add&amp;Norm
  &rarr; [Cross-Attention (Q dari decoder, K,V dari encoder)] &rarr; Add&amp;Norm
  &rarr; [Feed-Forward] &rarr; Add&amp;Norm &rarr; output

<span class="cm">// Positional Encoding (karena attention tidak punya urutan):</span>
PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))

<span class="cm">// Feed-Forward (per position, identik):</span>
FFN(x) = max(0, xW_1 + b_1)W_2 + b_2
<span class="cm">// d_ff = 4 &times; d_model (biasanya)</span>

<span class="cm">// Layer Normalization:</span>
LN(x) = (x - &mu;) / &sigma; &times; &gamma; + &beta;
<span class="cm">// Lebih stabil dari batch norm untuk sequence</span></div>

<div class="table-wrapper">
<table>
    <thead>
        <tr>
            <th>Komponen</th>
            <th>Peran</th>
            <th>Dimensi (BERT base)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>d_model</td>
            <td>Embedding dimension</td>
            <td>768</td>
        </tr>
        <tr>
            <td>num_heads</td>
            <td>Jumlah attention heads</td>
            <td>12</td>
        </tr>
        <tr>
            <td>d_ff</td>
            <td>Feed-forward inner dim</td>
            <td>3072 (4&times;768)</td>
        </tr>
        <tr>
            <td>num_layers</td>
            <td>Jumlah encoder blocks</td>
            <td>12</td>
        </tr>
        <tr>
            <td>vocab_size</td>
            <td>Ukuran vocabulary</td>
            <td>30,522</td>
        </tr>
        <tr>
            <td>max_seq_len</td>
            <td>Panjang sekuens maksimum</td>
            <td>512</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<div class="card animate-in">
<h3>BERT &mdash; Bidirectional Encoder Representations from Transformers</h3>
<div class="card-grid">
    <div>
        <div class="code-block">
<span class="cm">// BERT: Encoder-only Transformer</span>
<span class="cm">// Bidirectional: attend ke kiri DAN kanan</span>

<span class="cm">// Pre-training tasks:</span>
1. Masked Language Model (MLM):
   Input: "The cat [MASK] on the mat"
   Target: "sat"
   Mask 15% token secara random

2. Next Sentence Prediction (NSP):
   Input: [CLS] Sent_A [SEP] Sent_B [SEP]
   Target: IsNext / NotNext

<span class="cm">// Fine-tuning:</span>
<span class="cm">// Tambah task-specific head di atas [CLS] token</span>
<span class="cm">// Train seluruh model dengan supervised data</span>

<span class="cm">// Downstream tasks:</span>
<span class="cm">// - [CLS] token -&gt; Classification</span>
<span class="cm">// - Token outputs -&gt; NER, POS tagging</span>
<span class="cm">// - Question Answering: span extraction</span></div>
    </div>
    <div>
        <div class="info-box">
            <strong>BERT Variants:</strong>
            <ul>
                <li><strong>BERT-base:</strong> 110M params, 12 layers</li>
                <li><strong>BERT-large:</strong> 340M params, 24 layers</li>
                <li><strong>RoBERTa:</strong> BERT tanpa NSP, lebih banyak data, dynamic masking</li>
                <li><strong>DistilBERT:</strong> 66M params, 97% performance via distillation</li>
                <li><strong>ALBERT:</strong> 18M params, parameter sharing</li>
                <li><strong>IndoBERT:</strong> BERT untuk Bahasa Indonesia</li>
            </ul>
        </div>
        <div class="warn-box">
            <strong>Keterbatasan BERT:</strong>
            Tidak cocok untuk generative tasks. Setiap [MASK] diasumsikan independen (tidak true untuk multiple masks). Muncul generasi berikutnya: XLNet (permutation LM), ELECTRA (replaced token detection).
        </div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>GPT Series &mdash; Generative Pre-trained Transformers</h3>
<div class="card-grid">
    <div>
        <div class="code-block">
<span class="cm">// GPT: Decoder-only, Causal/Auto-regressive</span>
<span class="cm">// Hanya attend ke token KIRI (causal masking)</span>

<span class="cm">// Pre-training: Language Modeling</span>
<span class="cm">// Predict token berikutnya dari konteks sebelumnya</span>
P(x_1, ..., x_T) = &prod;_t P(x_t | x_1, ..., x_{t-1})

<span class="cm">// Generate text secara auto-regressive:</span>
input = "Hari ini cuaca"
output: "cerah dan matahari bersinar terang di"
       "langit biru tanpa awan..."

<span class="cm">// Decoding strategies:</span>
<span class="cm">// Greedy: argmax setiap langkah</span>
<span class="cm">// Beam search: keep top-k beams</span>
<span class="cm">// Temperature sampling: lebih kreatif</span>
<span class="cm">// Top-p/nucleus sampling: sample dari top-p probability mass</span></div>
    </div>
    <div>
        <div class="table-wrapper">
        <table>
            <thead><tr><th>Model</th><th>Params</th><th>Key Feature</th></tr></thead>
            <tbody>
                <tr><td>GPT-1 (2018)</td><td>117M</td><td>Transfer learning NLP</td></tr>
                <tr><td>GPT-2 (2019)</td><td>1.5B</td><td>Zero-shot, "too dangerous"</td></tr>
                <tr><td>GPT-3 (2020)</td><td>175B</td><td>Few-shot, in-context learning</td></tr>
                <tr><td>ChatGPT (2022)</td><td>~175B</td><td>RLHF, conversational</td></tr>
                <tr><td>GPT-4 (2023)</td><td>~1T*</td><td>Multimodal, reasoning</td></tr>
                <tr><td>GPT-4o (2024)</td><td>-</td><td>Omni (text,image,audio)</td></tr>
            </tbody>
        </table>
        </div>
        <div class="info-box" style="font-size:0.85rem;">
            <strong>In-context Learning (ICL):</strong> Model belajar dari contoh yang diberikan dalam prompt tanpa update weight. Few-shot: 1-10 contoh. Zero-shot: instruksi saja.
        </div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>LLM Concepts &amp; Training</h3>
<div class="card-grid">
    <div>
        <h4>Scaling Laws (Chinchilla)</h4>
        <div class="code-block">
<span class="cm">// Kaplan et al. (2020) + Chinchilla (2022):</span>
<span class="cm">// Optimal training: data &prop; parameters</span>
N = model parameters
D = training tokens
C = compute budget

<span class="cm">// Chinchilla rule: D &approx; 20N</span>
<span class="cm">// GPT-3 (175B params) butuh ~3.5T tokens optimal</span>
<span class="cm">// (GPT-3 dilatih dengan "hanya" 300B tokens)</span>

L(N, D) = E + A/N&alpha; + B/D&beta;
<span class="cm">// E = irreducible loss (theoretical min)</span>
<span class="cm">// &alpha;, &beta; &approx; 0.5 (empirical)</span></div>

        <h4>RLHF (Reinforcement Learning from Human Feedback)</h4>
        <div class="code-block">
<span class="cm">// 3 tahap InstructGPT/ChatGPT:</span>
Step 1: Supervised Fine-Tuning (SFT)
  - Demonstrator menulis respons ideal
  - Fine-tune GPT pada data ini

Step 2: Reward Model Training
  - Human ranker membandingkan output A vs B
  - Train reward model: r = RM(prompt, response)

Step 3: PPO Fine-Tuning
  - Maximize E[r] menggunakan PPO
  - KL penalty: jangan terlalu jauh dari SFT model
  - Hasil: model yang "helpful, harmless, honest"</div>
    </div>
    <div>
        <h4>Alignment &amp; Safety</h4>
        <div class="warn-box">
            <strong>Hallucination:</strong> LLM menghasilkan fakta yang salah dengan keyakinan tinggi. Penyebab: model hanya belajar next-token prediction, tidak "tahu" apa yang benar. Solusi: RAG, Retrieval, grounding.
        </div>
        <div class="info-box">
            <strong>Instruction Tuning:</strong> Fine-tune LLM untuk mengikuti instruksi. Dataset: instruksi-respons pair (seperti FLAN, Alpaca, ShareGPT). Membuat model lebih berguna dan mudah di-prompt.
        </div>
        <h4>Small Language Models (SLM)</h4>
        <div class="table-wrapper">
        <table>
            <thead><tr><th>Model</th><th>Size</th><th>Highlight</th></tr></thead>
            <tbody>
                <tr><td>Phi-3 (MSFT)</td><td>3.8B</td><td>Textbook-quality data</td></tr>
                <tr><td>Gemma-2 (Google)</td><td>2B/9B</td><td>Open, license friendly</td></tr>
                <tr><td>Mistral 7B</td><td>7B</td><td>GQA, sliding window attention</td></tr>
                <tr><td>Llama 3.2 (Meta)</td><td>1B/3B</td><td>On-device, multimodal</td></tr>
            </tbody>
        </table>
        </div>
        <div class="code-block">
<span class="cm">// Efisiensi Teknik:</span>
Quantization: FP32 &rarr; INT8/INT4 (4x lebih kecil)
LoRA: fine-tune rank-decomposition matrices saja
  W_new = W_frozen + B &times; A, rank r &lt;&lt; d
  Hanya train B,A: 0.1% dari total params!
Distillation: student model belajar dari teacher
  L = &alpha;&times;CE(student, label) + (1-&alpha;)&times;KL(student||teacher)</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>GAN &mdash; Generative Adversarial Networks</h3>
<p>Ian Goodfellow (2014). Dua jaringan saling bersaing: <strong>Generator</strong> menciptakan data palsu, <strong>Discriminator</strong> membedakan nyata vs palsu.</p>

<div class="card-grid">
    <div>
        <div class="code-block">
<span class="cm">// GAN objective (minimax game):</span>
min_G max_D V(D,G) =
  E_{x~p_data}[log D(x)]
+ E_{z~p_z}[log(1 - D(G(z)))]

<span class="cm">// Training alternating:</span>
<span class="cm">// 1. Freeze G, update D:</span>
<span class="cm">//    Maximize: log D(real) + log(1-D(G(z)))</span>
<span class="cm">// 2. Freeze D, update G:</span>
<span class="cm">//    Minimize: log(1-D(G(z)))</span>
<span class="cm">//    Equivalently: Maximize log(D(G(z)))</span>

<span class="cm">// Mode collapse: G hanya generate satu mode</span>
<span class="cm">// Solusi: Wasserstein GAN (WGAN), spectral norm</span>

<span class="cm">// Variants:</span>
DCGAN: Conv Generator + Discriminator
Conditional GAN: tambah class label input
CycleGAN: unpaired image-to-image translation
StyleGAN: disentangled latent space
Diffusion Models: bukan GAN tapi successor</div>
    </div>
    <div>
        <div class="info-box">
            <strong>Aplikasi GAN:</strong>
            <ul>
                <li>Image synthesis (DALL-E awal, StyleGAN)</li>
                <li>Data augmentation</li>
                <li>Super resolution</li>
                <li>Face aging/de-aging</li>
                <li>Text-to-image (sebelum Diffusion models)</li>
                <li>Deepfakes (video synthesis)</li>
            </ul>
        </div>
        <div class="warn-box">
            <strong>GAN vs Diffusion Models (2022+):</strong>
            Diffusion models (DALL-E 2, Stable Diffusion, Midjourney) menggantikan GAN untuk image generation karena lebih stabil dalam training dan menghasilkan kualitas lebih tinggi. Tapi GAN masih lebih cepat untuk inference.
        </div>
    </div>
</div>
</div>

<!-- ==================== SECTION 9: REINFORCEMENT LEARNING ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">9. Reinforcement Learning</h2>

<div class="card animate-in">
<h3>Framework Dasar RL</h3>
<div class="card-grid">
    <div>
        <div class="code-block">
<span class="cm">// Komponen RL:</span>
Agent      = yang belajar dan bertindak
Environment= dunia tempat agent beroperasi
State  s   = representasi situasi saat ini
Action a   = pilihan yang bisa diambil agent
Reward r   = sinyal balik dari environment
Policy &pi;  = mapping state &rarr; action: &pi;(a|s)
Value  V   = expected cumulative reward dari state s
Q(s,a)     = expected cumulative reward ambil a di s

<span class="cm">// Bellman equation:</span>
V(s) = &sum;_a &pi;(a|s) [R(s,a) + &gamma; &sum;_{s'} P(s'|s,a) V(s')]
<span class="cm">// &gamma; = discount factor (0-1): seberapa penting reward masa depan</span>

<span class="cm">// Q-Learning (off-policy, model-free):</span>
Q(s,a) &larr; Q(s,a) + &alpha;[r + &gamma; max_{a'} Q(s',a') - Q(s,a)]
<span class="cm">// Update Q-table iteratif</span>
<span class="cm">// Converges to optimal Q* tanpa model environment</span></div>
    </div>
    <div>
        <h4>Deep Q-Network (DQN)</h4>
        <div class="code-block">
<span class="cm">// Q(s,a; &theta;): neural net approximates Q-function</span>
<span class="cm">// Input: state s (misal: frame game Atari)</span>
<span class="cm">// Output: Q-value untuk semua actions</span>

<span class="cm">// Loss:</span>
L(&theta;) = E[(r + &gamma; max_{a'} Q(s',a';&theta;^-) - Q(s,a;&theta;))&sup2;]
<span class="cm">// &theta;^- = target network (di-update lebih jarang)</span>
<span class="cm">// Experience replay: simpan (s,a,r,s') di buffer</span>

<span class="cm">// Algorithmic advances:</span>
Double DQN: memisahkan action selection & evaluation
Dueling DQN: V(s) + A(s,a) - mean(A)
Rainbow: kombinasi semua improvements

<span class="cm">// Policy Gradient (REINFORCE):</span>
&nabla;J(&theta;) = E[&nabla; log &pi;(a|s;&theta;) &times; G_t]
<span class="cm">// G_t = return (cumulative discounted reward)</span>

<span class="cm">// Actor-Critic: kombinasi policy gradient + value fn</span>
<span class="cm">// PPO (Proximal Policy Optimization): dipakai di RLHF</span></div>
    </div>
</div>
</div>

<!-- ==================== SECTION 10: RAG ==================== -->
<h2 class="section-title" style="font-size:1.6rem; margin-top:2rem;">10. RAG &mdash; Retrieval Augmented Generation</h2>

<div class="card animate-in">
<h3>Mengapa RAG Dibutuhkan?</h3>
<div class="card-grid">
    <div class="warn-box">
        <strong>Masalah LLM murni:</strong>
        <ul>
            <li>Hallucination: generate fakta yang salah</li>
            <li>Pengetahuan usang (training cutoff)</li>
            <li>Tidak bisa akses dokumen private perusahaan</li>
            <li>Tidak bisa cite sumber spesifik</li>
            <li>Context window terbatas</li>
        </ul>
    </div>
    <div class="info-box">
        <strong>RAG Solusi:</strong>
        <ul>
            <li>Retrieve dokumen relevan sebelum generate</li>
            <li>LLM hanya perlu summarize/reason atas dokumen</li>
            <li>Bisa update knowledge base tanpa retrain model</li>
            <li>Bisa cite sumber spesifik (traceability)</li>
            <li>Mengurangi hallucination signifikan</li>
        </ul>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Arsitektur RAG Pipeline</h3>

<div class="code-block">
<span class="cm">// INDEXING PHASE (offline, sekali saja):</span>
Documents
  &rarr; Chunking (split jadi potongan 256-512 token)
  &rarr; Embedding Model (e.g., text-embedding-3-small)
      chunk_text &rarr; dense vector R<sup>1536</sup>
  &rarr; Vector Database (FAISS, Pinecone, Weaviate, Qdrant)
      simpan pasangan (vector, metadata, original_text)

<span class="cm">// RETRIEVAL PHASE (saat query):</span>
User Query
  &rarr; Embedding Model (query &rarr; vector)
  &rarr; Vector DB: kNN search (cosine/dot similarity)
      top_k = 3-10 chunk paling relevan
  &rarr; Reranker (opsional): rerank dengan cross-encoder

<span class="cm">// GENERATION PHASE:</span>
Prompt = system_prompt + retrieved_chunks + user_query
LLM(prompt) &rarr; Final Answer

<span class="cm">// Cosine similarity:</span>
cos(&theta;) = (u &bull; v) / (||u|| ||v||)
<span class="cm">// Semakin dekat ke 1.0 = semakin semantically similar</span></div>

<div class="card-grid">
    <div>
        <h4>Komponen Utama RAG</h4>
        <div class="table-wrapper">
        <table>
            <thead><tr><th>Komponen</th><th>Opsi</th></tr></thead>
            <tbody>
                <tr><td>Embedding Model</td><td>OpenAI text-embedding, Cohere, BGE, E5</td></tr>
                <tr><td>Vector Database</td><td>FAISS (local), Pinecone, Weaviate, Qdrant, Milvus</td></tr>
                <tr><td>Chunking Strategy</td><td>Fixed-size, sentence-based, semantic, recursive</td></tr>
                <tr><td>Retriever</td><td>Dense (kNN), Sparse (BM25), Hybrid</td></tr>
                <tr><td>Reranker</td><td>Cross-encoder (Cohere, bge-reranker)</td></tr>
                <tr><td>LLM</td><td>GPT-4, Claude, Gemini, Llama, Mistral</td></tr>
            </tbody>
        </table>
        </div>
    </div>
    <div>
        <h4>Advanced RAG Techniques</h4>
        <div class="code-block">
<span class="cm">// HyDE (Hypothetical Document Embeddings):</span>
<span class="cm">// LLM buat jawaban hipotesis dulu, embed itu</span>
hypothetical = LLM("Jawab: " + query)
embed(hypothetical) &rarr; retrieve

<span class="cm">// Self-RAG: LLM putuskan kapan perlu retrieve</span>
<span class="cm">// Multi-hop RAG: iterative retrieval</span>
<span class="cm">// RAG Fusion: multiple queries + reciprocal rank fusion</span>

<span class="cm">// Agentic RAG (ReAct pattern):</span>
Thought: "Saya perlu cari info tentang X"
Action: search("X")
Observation: "dokumen ditemukan: ..."
Thought: "Sekarang saya tahu, perlu juga Y"
Action: search("Y")
...</div>
    </div>
</div>
</div>

<div class="card animate-in">
<h3>Implementasi RAG di Go</h3>
<div class="code-block">
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"math"</span>
    <span class="str">"sort"</span>
)

<span class="kw">type</span> Document <span class="kw">struct</span> {
    ID       <span class="kw">string</span>
    Content  <span class="kw">string</span>
    Embedding []<span class="kw">float64</span>
}

<span class="kw">type</span> VectorStore <span class="kw">struct</span> {
    Docs []Document
}

<span class="kw">func</span> cosineSimilarity(a, b []<span class="kw">float64</span>) <span class="kw">float64</span> {
    var dot, normA, normB <span class="kw">float64</span>
    <span class="kw">for</span> i := <span class="kw">range</span> a {
        dot += a[i] * b[i]
        normA += a[i] * a[i]
        normB += b[i] * b[i]
    }
    <span class="kw">if</span> normA == 0 || normB == 0 {
        <span class="kw">return</span> 0
    }
    <span class="kw">return</span> dot / (math.Sqrt(normA) * math.Sqrt(normB))
}

<span class="kw">type</span> SearchResult <span class="kw">struct</span> {
    Doc   Document
    Score <span class="kw">float64</span>
}

<span class="kw">func</span> (vs *VectorStore) Search(queryEmbed []<span class="kw">float64</span>, topK <span class="kw">int</span>) []SearchResult {
    results := make([]SearchResult, len(vs.Docs))
    <span class="kw">for</span> i, doc := <span class="kw">range</span> vs.Docs {
        results[i] = SearchResult{
            Doc:   doc,
            Score: cosineSimilarity(queryEmbed, doc.Embedding),
        }
    }
    sort.Slice(results, <span class="kw">func</span>(i, j <span class="kw">int</span>) <span class="kw">bool</span> {
        <span class="kw">return</span> results[i].Score &gt; results[j].Score
    })
    <span class="kw">if</span> topK &gt; len(results) {
        topK = len(results)
    }
    <span class="kw">return</span> results[:topK]
}

<span class="kw">func</span> BuildRAGPrompt(query <span class="kw">string</span>, docs []SearchResult) <span class="kw">string</span> {
    context := <span class="str">""</span>
    <span class="kw">for</span> i, r := <span class="kw">range</span> docs {
        context += <span class="kw">fmt</span>.Sprintf(<span class="str">"[%d] %s\n\n"</span>, i+1, r.Doc.Content)
    }
    <span class="kw">return</span> <span class="kw">fmt</span>.Sprintf(
        <span class="str">"Gunakan konteks berikut untuk menjawab pertanyaan.\n\n"</span>+
        <span class="str">"Konteks:\n%s\n\nPertanyaan: %s\n\nJawaban:"</span>,
        context, query,
    )
}</div>
</div>

<!-- ==================== SECTION: SUMMARY ==================== -->
<div class="card animate-in">
<h2>Peta Besar AI &amp; ML</h2>
<div class="table-wrapper">
<table>
    <thead>
        <tr>
            <th>Paradigma</th>
            <th>Pendekatan</th>
            <th>Algoritma Kunci</th>
            <th>Contoh Aplikasi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Supervised (Klasifikasi)</td>
            <td>Induktif, labeled data</td>
            <td>KNN, SVM, DT, Neural Net</td>
            <td>Spam filter, image classification</td>
        </tr>
        <tr>
            <td>Supervised (Regresi)</td>
            <td>Induktif, labeled data</td>
            <td>Linear Reg, Polynomial, RF</td>
            <td>Prediksi harga, cuaca</td>
        </tr>
        <tr>
            <td>Unsupervised (Clustering)</td>
            <td>Induktif, unlabeled</td>
            <td>K-Means, DBSCAN, GMM</td>
            <td>Customer segmentation</td>
        </tr>
        <tr>
            <td>Unsupervised (DR)</td>
            <td>Induktif, unlabeled</td>
            <td>PCA, t-SNE, UMAP, AE</td>
            <td>Visualisasi, compression</td>
        </tr>
        <tr>
            <td>Generative</td>
            <td>Induktif, generasi data baru</td>
            <td>GAN, VAE, Diffusion, LLM</td>
            <td>Image gen, text gen, deepfake</td>
        </tr>
        <tr>
            <td>Reinforcement</td>
            <td>Trial &amp; error, reward</td>
            <td>Q-Learning, PPO, Actor-Critic</td>
            <td>Game AI, robot control, RLHF</td>
        </tr>
        <tr>
            <td>Self-supervised</td>
            <td>Induktif, pseudo-labels</td>
            <td>BERT (MLM), GPT (LM), SimCLR</td>
            <td>Pre-training LLM, vision</td>
        </tr>
    </tbody>
</table>
</div>
</div>

</section>
`;

// Initialize animations
// Override initMLAnimations (called by app.js initSectionInteractions)
if (typeof window !== 'undefined') {
    const _origInit = window.initOptimizationAnimations || function(){};
    window.initOptimizationAnimations = function() {
        _origInit();
        initAIMLAnimations();
    };
    // app.js calls initMLAnimations() for section 'optimization-ml'
    window.initMLAnimations = function() {
        initAIMLAnimations();
    };
}

function initAIMLAnimations() {
    // ---- Helpers ----
    function getCSSVar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function isDark() {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    }

    function themeColors() {
        const dark = isDark();
        return {
            bg:      dark ? '#0d1117' : '#f5f5f5',
            text:    dark ? '#e6edf3' : '#1a1a2e',
            text2:   dark ? '#8b949e' : '#666',
            accent:  '#7c6aff',
            green:   '#39d353',
            red:     '#f85149',
            orange:  '#ff8c42',
            yellow:  '#f1c40f',
            border:  dark ? '#30363d' : '#d0d0d0',
            grid:    dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        };
    }

    function setupCanvas(canvas) {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.offsetWidth || canvas.width;
        const h = canvas.offsetHeight || canvas.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        return { ctx, w, h };
    }

    function drawGrid(ctx, w, h, c) {
        ctx.strokeStyle = c.grid;
        ctx.lineWidth = 1;
        const step = 40;
        for (let x = 0; x <= w; x += step) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y <= h; y += step) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
    }

    // ============================
    // 1. GAUSSIAN BELL CURVE
    // ============================
    (function initGaussian() {
        const canvas = document.getElementById('canvas-gaussian');
        if (!canvas) return;
        let animId = null;
        let animating = false;
        let t = 0;

        function gaussian(x, mu, sigma) {
            return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
        }

        function draw(muVal, sigmaVal) {
            const { ctx, w, h } = setupCanvas(canvas);
            const c = themeColors();
            ctx.fillStyle = c.bg;
            ctx.fillRect(0, 0, w, h);
            drawGrid(ctx, w, h, c);

            const xMin = -5, xMax = 5;
            const maxPDF = gaussian(0, 0, 0.3); // max possible value for scaling
            const pad = 40;

            function toCanvasX(x) { return pad + (x - xMin) / (xMax - xMin) * (w - 2 * pad); }
            function toCanvasY(y) { return h - pad - (y / maxPDF) * (h - 2 * pad) * 0.85; }

            // Draw axes
            ctx.strokeStyle = c.text2;
            ctx.lineWidth = 1.5;
            const yAxis = toCanvasY(0);
            ctx.beginPath(); ctx.moveTo(pad, yAxis); ctx.lineTo(w - pad, yAxis); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(toCanvasX(0), pad / 2); ctx.lineTo(toCanvasX(0), yAxis); ctx.stroke();

            // X axis labels
            ctx.fillStyle = c.text2;
            ctx.font = '11px JetBrains Mono, monospace';
            ctx.textAlign = 'center';
            for (let xv = -4; xv <= 4; xv += 2) {
                const cx = toCanvasX(xv);
                ctx.fillText(xv.toString(), cx, yAxis + 14);
            }

            // Draw sigma bands (1σ, 2σ, 3σ)
            const bands = [
                { mult: 3, color: 'rgba(124,106,255,0.06)' },
                { mult: 2, color: 'rgba(124,106,255,0.10)' },
                { mult: 1, color: 'rgba(124,106,255,0.18)' },
            ];
            bands.forEach(b => {
                const x1 = toCanvasX(muVal - b.mult * sigmaVal);
                const x2 = toCanvasX(muVal + b.mult * sigmaVal);
                ctx.fillStyle = b.color;
                ctx.fillRect(x1, pad / 2, x2 - x1, yAxis - pad / 2);
            });

            // Draw curve
            ctx.beginPath();
            ctx.strokeStyle = c.accent;
            ctx.lineWidth = 2.5;
            let first = true;
            for (let px = pad; px <= w - pad; px++) {
                const xVal = xMin + (px - pad) / (w - 2 * pad) * (xMax - xMin);
                const yVal = gaussian(xVal, muVal, sigmaVal);
                const cy = toCanvasY(yVal);
                if (first) { ctx.moveTo(px, cy); first = false; }
                else ctx.lineTo(px, cy);
            }
            ctx.stroke();

            // Fill under curve
            ctx.beginPath();
            ctx.moveTo(pad, yAxis);
            for (let px = pad; px <= w - pad; px++) {
                const xVal = xMin + (px - pad) / (w - 2 * pad) * (xMax - xMin);
                const yVal = gaussian(xVal, muVal, sigmaVal);
                ctx.lineTo(px, toCanvasY(yVal));
            }
            ctx.lineTo(w - pad, yAxis);
            ctx.closePath();
            ctx.fillStyle = 'rgba(124,106,255,0.15)';
            ctx.fill();

            // Mean line
            ctx.strokeStyle = c.yellow;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 5]);
            const mx = toCanvasX(muVal);
            ctx.beginPath(); ctx.moveTo(mx, pad / 2); ctx.lineTo(mx, yAxis); ctx.stroke();
            ctx.setLineDash([]);

            // Labels
            ctx.fillStyle = c.yellow;
            ctx.font = 'bold 12px JetBrains Mono, monospace';
            ctx.textAlign = 'left';
            ctx.fillText('\u03bc = ' + muVal.toFixed(1), mx + 4, pad + 14);
            ctx.fillStyle = c.accent;
            ctx.fillText('\u03c3 = ' + sigmaVal.toFixed(1), w - pad - 70, pad + 14);

            // Info
            ctx.fillStyle = c.text2;
            ctx.font = '11px JetBrains Mono, monospace';
            ctx.textAlign = 'center';
            ctx.fillText('f(x; \u03bc, \u03c3) = (1/\u03c3\u221a2\u03c0) \u00d7 e^(-\u00bd((x-\u03bc)/\u03c3)\u00b2)', w / 2, h - 6);
        }

        function getSliderMu() {
            const el = document.getElementById('slider-mu');
            return el ? parseFloat(el.value) : 0;
        }
        function getSliderSigma() {
            const el = document.getElementById('slider-sigma');
            return el ? parseFloat(el.value) : 1;
        }

        // Slider listeners
        ['slider-mu', 'slider-sigma'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => { if (!animating) draw(getSliderMu(), getSliderSigma()); });
        });

        // Animate: sigma oscillates
        function animate() {
            if (!animating) return;
            t += 0.015;
            const sigmaVal = 0.5 + 1.2 * (0.5 + 0.5 * Math.sin(t));
            const muVal = getSliderMu();
            draw(muVal, sigmaVal);
            // update sigma slider display
            const sl = document.getElementById('slider-sigma');
            if (sl) sl.value = sigmaVal.toFixed(1);
            animId = requestAnimationFrame(animate);
        }

        document.getElementById('btn-gaussian-start')?.addEventListener('click', () => {
            animating = !animating;
            if (animating) animate();
            else cancelAnimationFrame(animId);
        });

        document.getElementById('btn-gaussian-reset')?.addEventListener('click', () => {
            animating = false;
            cancelAnimationFrame(animId);
            t = 0;
            const slMu = document.getElementById('slider-mu');
            const slSig = document.getElementById('slider-sigma');
            if (slMu) slMu.value = 0;
            if (slSig) slSig.value = 1;
            draw(0, 1);
        });

        draw(0, 1);
    })();

    // ============================
    // 2. K-MEANS CLUSTERING
    // ============================
    (function initKMeans() {
        const canvas = document.getElementById('canvas-kmeans');
        if (!canvas) return;
        const K = 3;
        let points = [], centroids = [], assignments = [];
        let step = 0;
        let animId = null;
        let running = false;

        const COLORS = ['#7c6aff', '#39d353', '#f85149'];
        const LIGHT_COLORS = ['rgba(124,106,255,0.25)', 'rgba(57,211,83,0.25)', 'rgba(248,81,73,0.25)'];

        function randomPoints(n) {
            const pts = [];
            // 3 clusters with some spread
            const centers = [[0.25, 0.35], [0.7, 0.35], [0.5, 0.75]];
            for (let i = 0; i < n; i++) {
                const ci = i % 3;
                pts.push([
                    centers[ci][0] + (Math.random() - 0.5) * 0.28,
                    centers[ci][1] + (Math.random() - 0.5) * 0.28
                ]);
            }
            return pts;
        }

        function initCentroids() {
            centroids = [];
            for (let k = 0; k < K; k++) {
                centroids.push([Math.random() * 0.8 + 0.1, Math.random() * 0.8 + 0.1]);
            }
        }

        function assign() {
            assignments = points.map(p => {
                let best = 0, bestD = Infinity;
                centroids.forEach((c, k) => {
                    const d = (p[0]-c[0])**2 + (p[1]-c[1])**2;
                    if (d < bestD) { bestD = d; best = k; }
                });
                return best;
            });
        }

        function update() {
            const newC = centroids.map(() => [0, 0, 0]);
            assignments.forEach((k, i) => {
                newC[k][0] += points[i][0];
                newC[k][1] += points[i][1];
                newC[k][2]++;
            });
            centroids = newC.map(c => c[2] > 0 ? [c[0]/c[2], c[1]/c[2]] : [Math.random(), Math.random()]);
        }

        function draw() {
            const { ctx, w, h } = setupCanvas(canvas);
            const c = themeColors();
            ctx.fillStyle = c.bg;
            ctx.fillRect(0, 0, w, h);
            drawGrid(ctx, w, h, c);

            const pad = 30;
            function px(x) { return pad + x * (w - 2*pad); }
            function py(y) { return pad + (1-y) * (h - 2*pad); }

            // Draw voronoi-like background
            const imgData = ctx.createImageData(w, h);
            const isDk = isDark();
            for (let ix = 0; ix < w; ix += 2) {
                for (let iy = 0; iy < h; iy += 2) {
                    const xn = (ix - pad) / (w - 2*pad);
                    const yn = 1 - (iy - pad) / (h - 2*pad);
                    let bk = 0, bd = Infinity;
                    centroids.forEach((ct, k) => {
                        const d = (xn-ct[0])**2 + (yn-ct[1])**2;
                        if (d < bd) { bd = d; bk = k; }
                    });
                    const cols = isDk
                        ? [[30,26,80],[10,50,26],[60,20,18]]
                        : [[200,195,255],[195,240,205],[255,210,205]];
                    const col = cols[bk];
                    for (let dx = 0; dx < 2; dx++) for (let dy = 0; dy < 2; dy++) {
                        const idx = ((iy+dy)*w + (ix+dx)) * 4;
                        imgData.data[idx] = col[0]; imgData.data[idx+1] = col[1];
                        imgData.data[idx+2] = col[2]; imgData.data[idx+3] = 60;
                    }
                }
            }
            ctx.putImageData(imgData, 0, 0);

            // Draw points
            points.forEach((p, i) => {
                const k = assignments[i] !== undefined ? assignments[i] : 0;
                ctx.beginPath();
                ctx.arc(px(p[0]), py(p[1]), 5, 0, Math.PI*2);
                ctx.fillStyle = COLORS[k];
                ctx.fill();
                ctx.strokeStyle = c.bg;
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Draw centroids
            centroids.forEach((ct, k) => {
                const cx = px(ct[0]), cy = py(ct[1]);
                ctx.beginPath();
                ctx.arc(cx, cy, 13, 0, Math.PI*2);
                ctx.fillStyle = COLORS[k];
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2.5;
                ctx.stroke();
                // X mark
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(cx-5, cy-5); ctx.lineTo(cx+5, cy+5); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(cx+5, cy-5); ctx.lineTo(cx-5, cy+5); ctx.stroke();
                // Label
                ctx.fillStyle = COLORS[k];
                ctx.font = 'bold 11px JetBrains Mono';
                ctx.textAlign = 'center';
                ctx.fillText('C' + (k+1), cx, cy - 18);
            });

            // Step label
            ctx.fillStyle = c.text2;
            ctx.font = '12px JetBrains Mono, monospace';
            ctx.textAlign = 'left';
            ctx.fillText('Step: ' + step + ' | Points: ' + points.length + ' | K=' + K, 10, h - 8);
        }

        function reset() {
            running = false;
            step = 0;
            points = randomPoints(60);
            assignments = new Array(points.length).fill(0);
            initCentroids();
            draw();
        }

        document.getElementById('btn-kmeans-start')?.addEventListener('click', () => {
            if (step === 0) assign();
            else if (step % 2 === 1) update();
            else assign();
            step++;
            draw();
        });

        document.getElementById('btn-kmeans-reset')?.addEventListener('click', reset);
        reset();
    })();

    // ============================
    // 3. NEURAL NETWORK FORWARD PASS
    // ============================
    (function initNeuralFwd() {
        const canvas = document.getElementById('canvas-neural-fwd');
        if (!canvas) return;
        let animId = null;
        let t = 0;
        let animating = false;
        let activeLayer = -1;
        let activeNeuron = -1;
        let phase = 0; // 0=idle, 1=forward, 2=complete

        const LAYERS = [3, 4, 4, 2];
        const LAYER_NAMES = ['Input', 'Hidden 1', 'Hidden 2', 'Output'];

        function getNeuronPos(layerIdx, neuronIdx, w, h) {
            const nLayers = LAYERS.length;
            const pad = 50;
            const x = pad + (layerIdx / (nLayers - 1)) * (w - 2 * pad);
            const nNeurons = LAYERS[layerIdx];
            const spacing = (h - 80) / (nNeurons + 1);
            const y = 40 + spacing * (neuronIdx + 1);
            return { x, y };
        }

        function draw(activations) {
            const { ctx, w, h } = setupCanvas(canvas);
            const c = themeColors();
            ctx.fillStyle = c.bg;
            ctx.fillRect(0, 0, w, h);

            // Draw connections
            for (let l = 0; l < LAYERS.length - 1; l++) {
                for (let i = 0; i < LAYERS[l]; i++) {
                    for (let j = 0; j < LAYERS[l+1]; j++) {
                        const from = getNeuronPos(l, i, w, h);
                        const to = getNeuronPos(l+1, j, w, h);
                        const isActive = activations && activations[l] !== undefined
                            && activations[l][i] > 0.5;
                        ctx.strokeStyle = isActive ? 'rgba(124,106,255,0.5)' : c.border;
                        ctx.lineWidth = isActive ? 1.5 : 0.7;
                        ctx.beginPath();
                        ctx.moveTo(from.x, from.y);
                        ctx.lineTo(to.x, to.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw neurons
            for (let l = 0; l < LAYERS.length; l++) {
                for (let n = 0; n < LAYERS[l]; n++) {
                    const pos = getNeuronPos(l, n, w, h);
                    const isActive = activations && activations[l] !== undefined && activations[l][n] > 0.5;
                    const radius = 18;

                    // Glow
                    if (isActive) {
                        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius * 2);
                        grad.addColorStop(0, 'rgba(124,106,255,0.4)');
                        grad.addColorStop(1, 'transparent');
                        ctx.fillStyle = grad;
                        ctx.beginPath();
                        ctx.arc(pos.x, pos.y, radius * 2, 0, Math.PI * 2);
                        ctx.fill();
                    }

                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = isActive ? c.accent : (isDark() ? '#1e2130' : '#ddd');
                    ctx.fill();
                    ctx.strokeStyle = isActive ? '#fff' : c.border;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Neuron activation value
                    if (activations && activations[l] && activations[l][n] !== undefined) {
                        ctx.fillStyle = isActive ? '#fff' : c.text2;
                        ctx.font = 'bold 9px JetBrains Mono, monospace';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(activations[l][n].toFixed(2), pos.x, pos.y);
                    }
                }
                // Layer name
                const topPos = getNeuronPos(l, -1, w, h);
                ctx.fillStyle = c.text2;
                ctx.font = '11px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(LAYER_NAMES[l], topPos.x, 10);
            }

            ctx.textBaseline = 'alphabetic';

            // Status
            if (activations) {
                ctx.fillStyle = c.accent;
                ctx.font = '12px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(phase === 2 ? 'Forward Pass Complete! Output Layer Activated.' : 'Processing...', w/2, h - 10);
            }
        }

        function runForward() {
            if (animating) return;
            animating = true;
            phase = 1;
            let lIdx = 0;

            const activations = LAYERS.map(n => new Array(n).fill(0.1));

            function stepLayer() {
                if (lIdx >= LAYERS.length) {
                    phase = 2;
                    draw(activations);
                    animating = false;
                    return;
                }
                // "activate" neurons in current layer
                for (let n = 0; n < LAYERS[lIdx]; n++) {
                    activations[lIdx][n] = 0.4 + Math.random() * 0.5;
                }
                draw(activations);
                lIdx++;
                setTimeout(stepLayer, 600);
            }
            stepLayer();
        }

        document.getElementById('btn-neural-fwd-start')?.addEventListener('click', () => {
            if (!animating) runForward();
        });

        document.getElementById('btn-neural-fwd-reset')?.addEventListener('click', () => {
            animating = false;
            phase = 0;
            draw(null);
        });

        draw(null);
    })();

    // ============================
    // 4. ATTENTION HEATMAP
    // ============================
    (function initAttention() {
        const canvas = document.getElementById('canvas-attention');
        if (!canvas) return;
        let animId = null;
        let t = 0;
        let animating = false;

        const tokens = ['The', 'cat', 'sat', 'on', 'mat'];
        const N = tokens.length;

        function softmax(row) {
            const max = Math.max(...row);
            const exp = row.map(x => Math.exp(x - max));
            const sum = exp.reduce((a, b) => a + b, 0);
            return exp.map(x => x / sum);
        }

        function generateAttention(tVal) {
            const matrix = [];
            for (let i = 0; i < N; i++) {
                const raw = [];
                for (let j = 0; j < N; j++) {
                    let score = -Math.abs(i - j) * 0.8;
                    // Inject temporal variation
                    score += Math.sin(tVal + i * 1.3 + j * 0.7) * 0.5;
                    raw.push(score);
                }
                matrix.push(softmax(raw));
            }
            return matrix;
        }

        function draw(matrix) {
            const { ctx, w, h } = setupCanvas(canvas);
            const c = themeColors();
            ctx.fillStyle = c.bg;
            ctx.fillRect(0, 0, w, h);

            const padL = 55, padT = 55, padB = 20, padR = 15;
            const cellW = (w - padL - padR) / N;
            const cellH = (h - padT - padB) / N;

            // Draw cells
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    const val = matrix[i][j];
                    const x = padL + j * cellW;
                    const y = padT + i * cellH;

                    // Color: blue (low) to purple (high)
                    const r = Math.round(20 + val * 100);
                    const g = Math.round(20 + val * 20);
                    const b = Math.round(100 + val * 155);
                    ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                    ctx.fillRect(x, y, cellW - 1, cellH - 1);

                    // Value text
                    ctx.fillStyle = val > 0.35 ? '#fff' : c.text2;
                    ctx.font = '10px JetBrains Mono, monospace';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(val.toFixed(2), x + cellW / 2, y + cellH / 2);
                }
            }

            // Row labels (Query tokens)
            ctx.fillStyle = c.text;
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.textAlign = 'right';
            for (let i = 0; i < N; i++) {
                ctx.fillText(tokens[i], padL - 5, padT + i * cellH + cellH / 2 + 4);
            }

            // Column labels (Key tokens)
            ctx.textAlign = 'center';
            for (let j = 0; j < N; j++) {
                ctx.fillText(tokens[j], padL + j * cellW + cellW / 2, padT - 8);
            }

            // Title
            ctx.fillStyle = c.accent;
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText('Attention Matrix: Query (rows) \u00d7 Key (cols)', w / 2, h - 5);
        }

        function animate() {
            if (!animating) return;
            t += 0.025;
            draw(generateAttention(t));
            animId = requestAnimationFrame(animate);
        }

        document.getElementById('btn-attention-start')?.addEventListener('click', () => {
            animating = !animating;
            if (animating) animate();
            else cancelAnimationFrame(animId);
        });

        document.getElementById('btn-attention-reset')?.addEventListener('click', () => {
            animating = false;
            cancelAnimationFrame(animId);
            t = 0;
            draw(generateAttention(0));
        });

        draw(generateAttention(0));
    })();

    // ============================
    // 5. KNN VISUALIZATION
    // ============================
    (function initKNN() {
        const canvas = document.getElementById('canvas-knn');
        if (!canvas) return;

        const COLORS = { A: '#7c6aff', B: '#39d353' };
        const trainingPoints = [];
        let queryPoint = null;

        // Generate initial training data
        for (let i = 0; i < 30; i++) {
            trainingPoints.push({
                x: 0.05 + Math.random() * 0.42,
                y: 0.1 + Math.random() * 0.8,
                label: 'A'
            });
        }
        for (let i = 0; i < 30; i++) {
            trainingPoints.push({
                x: 0.53 + Math.random() * 0.42,
                y: 0.1 + Math.random() * 0.8,
                label: 'B'
            });
        }

        function getK() {
            const sl = document.getElementById('slider-k');
            return sl ? parseInt(sl.value) : 3;
        }

        function dist(a, b) {
            return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2);
        }

        function classify(q, k) {
            const sorted = trainingPoints.slice().sort((a, b) => dist(a, q) - dist(b, q));
            const knn = sorted.slice(0, k);
            const votes = { A: 0, B: 0 };
            knn.forEach(p => votes[p.label]++);
            return { label: votes.A > votes.B ? 'A' : 'B', knn };
        }

        function draw() {
            const { ctx, w, h } = setupCanvas(canvas);
            const c = themeColors();
            ctx.fillStyle = c.bg;
            ctx.fillRect(0, 0, w, h);
            drawGrid(ctx, w, h, c);

            const pad = 20;
            function px(x) { return pad + x * (w - 2*pad); }
            function py(y) { return pad + (1-y) * (h - 2*pad); }

            const k = getK();
            let result = null;
            if (queryPoint) result = classify(queryPoint, k);

            // Decision boundary (background coloring)
            const imgData = ctx.createImageData(w, h);
            const isDk = isDark();
            for (let ix = 0; ix < w; ix += 3) {
                for (let iy = 0; iy < h; iy += 3) {
                    const xn = (ix - pad) / (w - 2*pad);
                    const yn = 1 - (iy - pad) / (h - 2*pad);
                    const r = classify({ x: xn, y: yn }, k);
                    const col = r.label === 'A'
                        ? (isDk ? [30,26,80] : [210,205,255])
                        : (isDk ? [10,50,26] : [200,240,205]);
                    for (let dx = 0; dx < 3; dx++) for (let dy = 0; dy < 3; dy++) {
                        const idx = ((iy+dy)*w + (ix+dx)) * 4;
                        imgData.data[idx] = col[0]; imgData.data[idx+1] = col[1];
                        imgData.data[idx+2] = col[2]; imgData.data[idx+3] = 55;
                    }
                }
            }
            ctx.putImageData(imgData, 0, 0);

            // Draw training points
            trainingPoints.forEach(p => {
                ctx.beginPath();
                ctx.arc(px(p.x), py(p.y), 6, 0, Math.PI*2);
                ctx.fillStyle = COLORS[p.label];
                ctx.fill();
                ctx.strokeStyle = c.bg;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            // Draw KNN connections
            if (queryPoint && result) {
                result.knn.forEach(p => {
                    ctx.strokeStyle = c.yellow;
                    ctx.lineWidth = 1.5;
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath();
                    ctx.moveTo(px(queryPoint.x), py(queryPoint.y));
                    ctx.lineTo(px(p.x), py(p.y));
                    ctx.stroke();
                    ctx.setLineDash([]);
                    // Highlight neighbor
                    ctx.beginPath();
                    ctx.arc(px(p.x), py(p.y), 9, 0, Math.PI*2);
                    ctx.strokeStyle = c.yellow;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                });

                // Draw K-radius circle
                const kthNeighbor = result.knn[result.knn.length - 1];
                const radius = dist(queryPoint, kthNeighbor) * (w - 2*pad);
                ctx.beginPath();
                ctx.arc(px(queryPoint.x), py(queryPoint.y), radius, 0, Math.PI*2);
                ctx.strokeStyle = 'rgba(241,196,15,0.4)';
                ctx.lineWidth = 1.5;
                ctx.setLineDash([6, 3]);
                ctx.stroke();
                ctx.setLineDash([]);

                // Draw query point
                ctx.beginPath();
                ctx.arc(px(queryPoint.x), py(queryPoint.y), 11, 0, Math.PI*2);
                ctx.fillStyle = result.label === 'A' ? COLORS.A : COLORS.B;
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2.5;
                ctx.stroke();
                // Question mark
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 10px Inter';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('?', px(queryPoint.x), py(queryPoint.y));

                // Result label
                ctx.fillStyle = c.accent;
                ctx.font = 'bold 13px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'alphabetic';
                ctx.fillText('Predicted: Class ' + result.label + ' (K=' + k + ')', w/2, h - 8);
            } else {
                ctx.fillStyle = c.text2;
                ctx.font = '12px JetBrains Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText('Klik "Tambah Query Point" untuk klasifikasi', w/2, h - 8);
            }
        }

        const slK = document.getElementById('slider-k');
        const kValEl = document.getElementById('k-val');
        if (slK) {
            slK.addEventListener('input', () => {
                if (kValEl) kValEl.textContent = slK.value;
                draw();
            });
        }

        document.getElementById('btn-knn-start')?.addEventListener('click', () => {
            queryPoint = {
                x: 0.15 + Math.random() * 0.7,
                y: 0.1 + Math.random() * 0.8
            };
            draw();
        });

        document.getElementById('btn-knn-reset')?.addEventListener('click', () => {
            queryPoint = null;
            draw();
        });

        draw();
    })();

    // ============================
    // 6. LINEAR REGRESSION ANIMATION
    // ============================
    (function initRegression() {
        const canvas = document.getElementById('canvas-regression');
        if (!canvas) return;
        let animId = null;
        let animating = false;
        let w_val = -0.5, b_val = 0.5;
        let epoch = 0;
        const MAX_EPOCHS = 80;
        const LR = 0.04;

        // Generate some data with noise
        const dataPoints = [];
        const trueW = 0.7, trueB = 0.15;
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 0.8 + 0.1;
            const y = trueW * x + trueB + (Math.random() - 0.5) * 0.12;
            dataPoints.push({ x, y: Math.max(0.02, Math.min(0.98, y)) });
        }

        function mse() {
            let loss = 0;
            dataPoints.forEach(p => {
                const pred = w_val * p.x + b_val;
                loss += (pred - p.y) ** 2;
            });
            return loss / dataPoints.length;
        }

        function gradStep() {
            let gradW = 0, gradB = 0;
            dataPoints.forEach(p => {
                const err = w_val * p.x + b_val - p.y;
                gradW += err * p.x;
                gradB += err;
            });
            w_val -= LR * gradW / dataPoints.length;
            b_val -= LR * gradB / dataPoints.length;
        }

        function draw() {
            const { ctx, w, h } = setupCanvas(canvas);
            const c = themeColors();
            ctx.fillStyle = c.bg;
            ctx.fillRect(0, 0, w, h);
            drawGrid(ctx, w, h, c);

            const pad = 40;
            function px(x) { return pad + x * (w - 2*pad); }
            function py(y) { return pad + (1-y) * (h - 2*pad); }

            // Axes
            ctx.strokeStyle = c.text2;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(pad, h - pad); ctx.lineTo(w - pad/2, h - pad); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(pad, h - pad); ctx.lineTo(pad, pad/2); ctx.stroke();

            // Data points
            dataPoints.forEach(p => {
                const cx = px(p.x), cy = py(p.y);
                // residual line
                const predY = py(w_val * p.x + b_val);
                ctx.strokeStyle = 'rgba(248,81,73,0.3)';
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, predY); ctx.stroke();

                ctx.beginPath();
                ctx.arc(cx, cy, 5, 0, Math.PI*2);
                ctx.fillStyle = c.accent;
                ctx.fill();
            });

            // Regression line
            const x0 = 0, x1 = 1;
            const y0 = w_val * x0 + b_val;
            const y1 = w_val * x1 + b_val;
            ctx.strokeStyle = c.yellow;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(px(x0), py(y0));
            ctx.lineTo(px(x1), py(y1));
            ctx.stroke();

            // True line (faint)
            const ty0 = trueW * x0 + trueB;
            const ty1 = trueW * x1 + trueB;
            ctx.strokeStyle = 'rgba(57,211,83,0.4)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(px(x0), py(ty0));
            ctx.lineTo(px(x1), py(ty1));
            ctx.stroke();
            ctx.setLineDash([]);

            // Info
            ctx.fillStyle = c.text;
            ctx.font = '12px JetBrains Mono, monospace';
            ctx.textAlign = 'left';
            ctx.fillText('Epoch: ' + epoch + '/' + MAX_EPOCHS, 10, 20);
            ctx.fillText('w = ' + w_val.toFixed(4) + '  b = ' + b_val.toFixed(4), 10, 36);
            ctx.fillStyle = c.red;
            ctx.fillText('MSE = ' + mse().toFixed(6), 10, 52);
            ctx.fillStyle = c.green;
            ctx.fillText('True: w=' + trueW + ' b=' + trueB, w - 155, 20);
            ctx.fillStyle = c.yellow;
            ctx.fillText('\u2014 Current fit', w - 155, 36);
        }

        function animate() {
            if (!animating || epoch >= MAX_EPOCHS) {
                animating = false;
                return;
            }
            gradStep();
            epoch++;
            draw();
            animId = requestAnimationFrame(animate);
        }

        document.getElementById('btn-regression-start')?.addEventListener('click', () => {
            if (!animating && epoch < MAX_EPOCHS) {
                animating = true;
                animate();
            }
        });

        document.getElementById('btn-regression-reset')?.addEventListener('click', () => {
            animating = false;
            cancelAnimationFrame(animId);
            w_val = -0.5; b_val = 0.5; epoch = 0;
            draw();
        });

        draw();
    })();
}
