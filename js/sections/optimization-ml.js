// ============================================================
// OPTIMIZATION, MACHINE LEARNING & LLM - Interactive Section
// ============================================================

sections['optimization-ml'] = () => `
<section class="animate-in">

<!-- ==================== SECTION 1: OPTIMIZATION FUNDAMENTALS ==================== -->
<h1 class="section-title">Optimasi, Machine Learning & LLM</h1>
<p class="section-subtitle">Dari Gradient Descent hingga Large Language Models - Panduan Komprehensif</p>

<h2 class="section-title" style="font-size:1.6rem;">1. Dasar-Dasar Optimasi</h2>

<div class="card">
    <h3>Apa itu Optimasi?</h3>
    <p>Optimasi adalah proses mencari nilai <strong>terbaik</strong> dari suatu fungsi objektif, baik itu <strong>minimum</strong> maupun <strong>maksimum</strong>. Dalam Machine Learning, hampir semua proses training adalah masalah optimasi: kita ingin <strong>meminimalkan loss function</strong> agar model memberikan prediksi yang akurat.</p>

    <div class="info-box">
        <strong>Minimasi vs Maksimasi:</strong> Secara matematis, maksimasi f(x) sama dengan minimasi -f(x). Jadi kita hanya perlu fokus pada satu bentuk. Dalam ML, kita hampir selalu melakukan <strong>minimasi</strong> terhadap fungsi loss/error.
    </div>

    <p>Secara formal, masalah optimasi ditulis sebagai:</p>
    <div class="code-block">
        <span class="cm">// Minimasi</span>
        min f(x) subject to g_i(x) &lt;= 0, h_j(x) = 0

        <span class="cm">// Contoh: Linear Regression Loss</span>
        L(w, b) = (1/n) * <span class="fn">sum</span>( (y_i - (w*x_i + b))^2 )

        <span class="cm">// Tujuan: cari w dan b yang membuat L sekecil mungkin</span>
    </div>
</div>

<div class="card">
    <h3>Gradient Descent - Visualisasi Interaktif</h3>
    <p>Gradient Descent adalah algoritma optimasi paling fundamental dalam ML. Bayangkan sebuah bola yang menggelinding di permukaan kurva menuju titik terendah. Algoritma ini mengikuti arah <strong>gradien negatif</strong> (turunan) untuk mencari minimum.</p>

    <div class="code-block">
        <span class="cm">// Algoritma Gradient Descent</span>
        <span class="kw">repeat</span> until convergence:
            w = w - <span class="num">learning_rate</span> * <span class="fn">gradient</span>(loss, w)

        <span class="cm">// learning_rate (alpha) mengontrol seberapa besar langkah</span>
        <span class="cm">// gradient menunjukkan arah kemiringan terjal</span>
    </div>

    <div class="anim-container">
        <canvas id="canvas-gradient-descent" width="700" height="350" style="width:100%;max-width:700px;border-radius:10px;background:#0a0a1a;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="btn-gd-start">Mulai Gradient Descent</button>
            <button class="anim-btn" id="btn-gd-reset">Reset</button>
            <label style="color:var(--text-secondary);margin-left:12px;">Learning Rate:
                <select id="select-lr" style="background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border);padding:4px 8px;border-radius:6px;">
                    <option value="0.005">0.005 (Sangat Kecil)</option>
                    <option value="0.02" selected>0.02 (Optimal)</option>
                    <option value="0.06">0.06 (Besar)</option>
                    <option value="0.12">0.12 (Terlalu Besar)</option>
                </select>
            </label>
        </div>
    </div>

    <div class="warn-box">
        <strong>Efek Learning Rate:</strong><br>
        - <strong>Terlalu kecil:</strong> Konvergensi sangat lambat, bisa terjebak di local minimum.<br>
        - <strong>Optimal:</strong> Konvergensi cepat dan stabil menuju global minimum.<br>
        - <strong>Terlalu besar:</strong> Melompat-lompat (oscillation) dan mungkin tidak konvergen (diverge)!
    </div>
</div>

<div class="card">
    <h3>Convex vs Non-Convex Optimization</h3>
    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-green">Convex</span></h4>
            <p>Fungsi convex hanya memiliki <strong>satu minimum global</strong>. Gradient descent dijamin menemukan solusi optimal. Contoh: Linear Regression, SVM (primal).</p>
            <div class="code-block">
                <span class="cm">// f(x) = x^2 (convex)</span>
                <span class="cm">// Setiap local minimum = global minimum</span>
                <span class="cm">// Gradient descent selalu konvergen</span>
            </div>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-red">Non-Convex</span></h4>
            <p>Fungsi non-convex memiliki banyak <strong>local minima</strong>, <strong>saddle points</strong>, dan <strong>plateaus</strong>. Neural Networks memiliki landscape loss yang sangat non-convex.</p>
            <div class="code-block">
                <span class="cm">// f(x) = x^4 - 3x^2 + x (non-convex)</span>
                <span class="cm">// Multiple local minima</span>
                <span class="cm">// Gradient descent bisa terjebak!</span>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <h3>Local Minima, Global Minima & Saddle Points</h3>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Global Minimum:</strong> Titik dengan nilai fungsi paling rendah di seluruh domain. Ini adalah solusi <em>terbaik</em> yang ingin kita capai.</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>Local Minimum:</strong> Titik terendah di suatu neighborhood, tapi belum tentu yang terbaik secara global. Gradient descent bisa terjebak di sini.</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Saddle Point:</strong> Titik di mana gradien = 0, tapi bukan minimum maupun maksimum. Di dimensi tinggi, saddle points jauh lebih umum daripada local minima.</div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text"><strong>Plateau:</strong> Daerah datar di mana gradien mendekati nol. Training bisa "stuck" di sini untuk waktu yang lama.</div>
        </div>
    </div>

    <div class="info-box">
        <strong>Fakta Menarik:</strong> Dalam jaringan neural berdimensi tinggi, kebanyakan titik kritis bukanlah local minima, melainkan saddle points. Teknik seperti <strong>momentum</strong> dan <strong>Adam optimizer</strong> membantu melewati saddle points.
    </div>
</div>

<div class="card">
    <h3>Varian Gradient Descent</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Varian</th><th>Batch Size</th><th>Kelebihan</th><th>Kekurangan</th></tr>
            <tr><td><strong>Batch GD</strong></td><td>Semua data</td><td>Stabil, konvergensi smooth</td><td>Lambat untuk dataset besar, butuh memori besar</td></tr>
            <tr><td><strong>Stochastic GD</strong></td><td>1 sample</td><td>Cepat update, bisa escape local minima</td><td>Noisy, tidak stabil</td></tr>
            <tr><td><strong>Mini-batch GD</strong></td><td>32-512</td><td>Kompromi terbaik, efisien di GPU</td><td>Perlu tuning batch size</td></tr>
        </table>
    </div>

    <div class="code-block">
        <span class="cm"># Advanced Optimizers di PyTorch</span>
        <span class="kw">import</span> torch.optim <span class="kw">as</span> optim

        <span class="cm"># SGD dengan Momentum</span>
        optimizer = optim.<span class="fn">SGD</span>(model.parameters(), lr=<span class="num">0.01</span>, momentum=<span class="num">0.9</span>)

        <span class="cm"># Adam - paling populer, adaptive learning rate</span>
        optimizer = optim.<span class="fn">Adam</span>(model.parameters(), lr=<span class="num">0.001</span>, betas=(<span class="num">0.9</span>, <span class="num">0.999</span>))

        <span class="cm"># AdamW - Adam dengan weight decay yang benar</span>
        optimizer = optim.<span class="fn">AdamW</span>(model.parameters(), lr=<span class="num">0.001</span>, weight_decay=<span class="num">0.01</span>)

        <span class="cm"># Learning Rate Scheduler</span>
        scheduler = optim.lr_scheduler.<span class="fn">CosineAnnealingLR</span>(optimizer, T_max=<span class="num">100</span>)
    </div>
</div>

<!-- ==================== SECTION 2: P=NP & COMPLEXITY CONNECTION ==================== -->
<h2 class="section-title" style="font-size:1.6rem;">2. Hubungan Optimasi dengan P=NP & Kompleksitas</h2>

<div class="card">
    <h3>Masalah Optimasi sebagai NP-Hard</h3>
    <p>Banyak masalah optimasi praktis adalah <strong>NP-Hard</strong>, artinya tidak ada algoritma polynomial-time yang diketahui untuk menyelesaikannya secara eksak. Ini menghubungkan dunia optimasi langsung dengan teori kompleksitas P vs NP.</p>

    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-red">NP-Hard</span> Travelling Salesman (TSP)</h4>
            <p>Cari rute terpendek yang mengunjungi semua kota tepat sekali. Solusi brute force: O(n!). Untuk 20 kota saja = 2.4 triliun kemungkinan!</p>
            <div class="code-block">
                <span class="cm"># TSP brute force - TIDAK PRAKTIS</span>
                <span class="kw">from</span> itertools <span class="kw">import</span> permutations

                <span class="kw">def</span> <span class="fn">tsp_brute</span>(cities, dist):
                    best = <span class="num">float</span>(<span class="str">'inf'</span>)
                    <span class="kw">for</span> perm <span class="kw">in</span> <span class="fn">permutations</span>(cities):
                        cost = <span class="fn">sum</span>(dist[perm[i]][perm[i+<span class="num">1</span>]]
                                   <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(perm)-<span class="num">1</span>))
                        best = <span class="fn">min</span>(best, cost)
                    <span class="kw">return</span> best
            </div>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-red">NP-Hard</span> Knapsack Problem</h4>
            <p>Pilih item dengan total value maksimal tanpa melebihi kapasitas. Versi 0/1 Knapsack adalah NP-Hard, tapi ada pseudo-polynomial DP solution.</p>
            <div class="code-block">
                <span class="cm"># 0/1 Knapsack - Dynamic Programming</span>
                <span class="kw">def</span> <span class="fn">knapsack</span>(W, wt, val, n):
                    dp = [[<span class="num">0</span>]*(W+<span class="num">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(n+<span class="num">1</span>)]
                    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, n+<span class="num">1</span>):
                        <span class="kw">for</span> w <span class="kw">in</span> <span class="fn">range</span>(W+<span class="num">1</span>):
                            <span class="kw">if</span> wt[i-<span class="num">1</span>] &lt;= w:
                                dp[i][w] = <span class="fn">max</span>(dp[i-<span class="num">1</span>][w],
                                    val[i-<span class="num">1</span>] + dp[i-<span class="num">1</span>][w-wt[i-<span class="num">1</span>]])
                            <span class="kw">else</span>:
                                dp[i][w] = dp[i-<span class="num">1</span>][w]
                    <span class="kw">return</span> dp[n][W]
            </div>
        </div>
    </div>
</div>

<div class="card">
    <h3>Approximation Algorithms & Heuristik</h3>
    <p>Karena masalah NP-Hard tidak bisa diselesaikan secara eksak dalam waktu polynomial, kita menggunakan <strong>approximation algorithms</strong> yang memberikan solusi "cukup baik" dengan jaminan kualitas, atau <strong>heuristik</strong> yang bekerja baik dalam praktek tanpa jaminan teoritis.</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="sa-tab">Simulated Annealing</button>
        <button class="tab-btn" data-tab="ga-tab">Genetic Algorithm</button>
        <button class="tab-btn" data-tab="approx-tab">Approximation</button>
    </div>

    <div class="tab-content active" data-tab-content="sa-tab">
        <p><strong>Simulated Annealing</strong> terinspirasi dari proses pendinginan logam. Pada suhu tinggi, algoritma menerima solusi buruk (untuk escape local minima). Seiring suhu turun, hanya solusi yang lebih baik yang diterima.</p>
        <div class="code-block">
            <span class="kw">import</span> random, math

            <span class="kw">def</span> <span class="fn">simulated_annealing</span>(f, x0, T=<span class="num">1.0</span>, cooling=<span class="num">0.995</span>, steps=<span class="num">10000</span>):
                x = x0
                best_x, best_val = x, <span class="fn">f</span>(x)

                <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(steps):
                    x_new = x + random.<span class="fn">gauss</span>(<span class="num">0</span>, T)     <span class="cm"># neighbor</span>
                    delta = <span class="fn">f</span>(x_new) - <span class="fn">f</span>(x)

                    <span class="cm"># Terima jika lebih baik, atau dengan probabilitas e^(-delta/T)</span>
                    <span class="kw">if</span> delta &lt; <span class="num">0</span> <span class="kw">or</span> random.<span class="fn">random</span>() &lt; math.<span class="fn">exp</span>(-delta / T):
                        x = x_new
                    <span class="kw">if</span> <span class="fn">f</span>(x) &lt; best_val:
                        best_x, best_val = x, <span class="fn">f</span>(x)

                    T *= cooling  <span class="cm"># Turunkan suhu</span>
                <span class="kw">return</span> best_x, best_val
        </div>
    </div>

    <div class="tab-content" data-tab-content="ga-tab">
        <p><strong>Genetic Algorithm</strong> terinspirasi dari evolusi biologis. Populasi solusi "berevolusi" melalui seleksi, crossover, dan mutasi untuk menemukan solusi optimal.</p>
        <div class="pipeline">
            <div class="pipeline-stage"><div class="stage-title">Inisialisasi</div><div class="stage-desc">Populasi random</div></div>
            <div class="pipeline-stage"><div class="stage-title">Fitness</div><div class="stage-desc">Evaluasi setiap individu</div></div>
            <div class="pipeline-stage"><div class="stage-title">Seleksi</div><div class="stage-desc">Pilih parent terbaik</div></div>
            <div class="pipeline-stage"><div class="stage-title">Crossover</div><div class="stage-desc">Gabungkan gen</div></div>
            <div class="pipeline-stage"><div class="stage-title">Mutasi</div><div class="stage-desc">Perubahan acak</div></div>
            <div class="pipeline-stage"><div class="stage-title">Generasi Baru</div><div class="stage-desc">Ulangi</div></div>
        </div>
        <div class="code-block">
            <span class="kw">import</span> random

            <span class="kw">def</span> <span class="fn">genetic_algorithm</span>(fitness_fn, pop_size=<span class="num">100</span>, genes=<span class="num">10</span>, gens=<span class="num">500</span>):
                <span class="cm"># Inisialisasi populasi random</span>
                pop = [[random.<span class="fn">randint</span>(<span class="num">0</span>,<span class="num">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(genes)]
                       <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(pop_size)]

                <span class="kw">for</span> gen <span class="kw">in</span> <span class="fn">range</span>(gens):
                    <span class="cm"># Evaluasi fitness</span>
                    scored = [(<span class="fn">fitness_fn</span>(ind), ind) <span class="kw">for</span> ind <span class="kw">in</span> pop]
                    scored.<span class="fn">sort</span>(reverse=<span class="num">True</span>)

                    <span class="cm"># Seleksi top 50%</span>
                    parents = [ind <span class="kw">for</span> _, ind <span class="kw">in</span> scored[:pop_size//<span class="num">2</span>]]

                    <span class="cm"># Crossover & Mutasi</span>
                    children = []
                    <span class="kw">while</span> <span class="fn">len</span>(children) &lt; pop_size:
                        p1, p2 = random.<span class="fn">sample</span>(parents, <span class="num">2</span>)
                        cut = random.<span class="fn">randint</span>(<span class="num">1</span>, genes-<span class="num">1</span>)
                        child = p1[:cut] + p2[cut:]  <span class="cm"># crossover</span>
                        <span class="kw">if</span> random.<span class="fn">random</span>() &lt; <span class="num">0.01</span>:  <span class="cm"># mutasi</span>
                            i = random.<span class="fn">randint</span>(<span class="num">0</span>, genes-<span class="num">1</span>)
                            child[i] = <span class="num">1</span> - child[i]
                        children.<span class="fn">append</span>(child)
                    pop = children
                <span class="kw">return</span> scored[<span class="num">0</span>]
        </div>
    </div>

    <div class="tab-content" data-tab-content="approx-tab">
        <p><strong>Approximation Algorithms</strong> memberikan jaminan bahwa solusi yang ditemukan tidak lebih buruk dari faktor tertentu dibanding solusi optimal.</p>
        <div class="table-wrapper">
            <table>
                <tr><th>Masalah</th><th>Approx Ratio</th><th>Algoritma</th></tr>
                <tr><td>Vertex Cover</td><td>2-approximation</td><td>Greedy matching</td></tr>
                <tr><td>TSP (metrik)</td><td>1.5-approximation</td><td>Christofides</td></tr>
                <tr><td>Set Cover</td><td>O(ln n)</td><td>Greedy</td></tr>
                <tr><td>MAX-SAT</td><td>3/4-approximation</td><td>Randomized rounding</td></tr>
            </table>
        </div>
    </div>
</div>

<!-- ==================== SECTION 3: MACHINE LEARNING FUNDAMENTALS ==================== -->
<h2 class="section-title" style="font-size:1.6rem;">3. Dasar-Dasar Machine Learning</h2>

<div class="card">
    <h3>Jenis-Jenis Machine Learning</h3>
    <div class="card-grid-3">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-blue">Supervised Learning</span></h4>
            <p>Model belajar dari data berlabel (input-output pairs). Tujuan: mempelajari mapping f(x) = y.</p>
            <ul>
                <li>Classification: spam/not spam</li>
                <li>Regression: prediksi harga rumah</li>
                <li>Contoh: Linear Regression, SVM, Random Forest, Neural Networks</li>
            </ul>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-green">Unsupervised Learning</span></h4>
            <p>Model mencari pola dalam data <em>tanpa</em> label. Tujuan: menemukan struktur tersembunyi.</p>
            <ul>
                <li>Clustering: K-Means, DBSCAN</li>
                <li>Dimensionality Reduction: PCA, t-SNE</li>
                <li>Anomaly Detection</li>
            </ul>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-purple">Reinforcement Learning</span></h4>
            <p>Agent belajar melalui interaksi dengan environment. Mendapat <em>reward</em> atau <em>punishment</em>.</p>
            <ul>
                <li>Q-Learning, SARSA</li>
                <li>Policy Gradient</li>
                <li>Contoh: Game AI, Robotics, RLHF untuk LLM</li>
            </ul>
        </div>
    </div>
</div>

<div class="card">
    <h3>Linear Regression</h3>
    <p>Model paling sederhana: mencari garis lurus y = wx + b yang paling "fit" dengan data. Menggunakan <strong>Mean Squared Error (MSE)</strong> sebagai loss function.</p>

    <div class="code-block">
        <span class="cm"># Linear Regression dari nol</span>
        <span class="kw">import</span> numpy <span class="kw">as</span> np

        <span class="kw">class</span> <span class="type">LinearRegression</span>:
            <span class="kw">def</span> <span class="fn">__init__</span>(self, lr=<span class="num">0.01</span>, epochs=<span class="num">1000</span>):
                self.lr = lr
                self.epochs = epochs

            <span class="kw">def</span> <span class="fn">fit</span>(self, X, y):
                self.w = np.<span class="fn">zeros</span>(X.shape[<span class="num">1</span>])
                self.b = <span class="num">0</span>
                n = <span class="fn">len</span>(y)

                <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(self.epochs):
                    y_pred = X @ self.w + self.b
                    error = y_pred - y

                    <span class="cm"># Gradient</span>
                    dw = (<span class="num">2</span>/n) * (X.T @ error)
                    db = (<span class="num">2</span>/n) * np.<span class="fn">sum</span>(error)

                    <span class="cm"># Update</span>
                    self.w -= self.lr * dw
                    self.b -= self.lr * db

            <span class="kw">def</span> <span class="fn">predict</span>(self, X):
                <span class="kw">return</span> X @ self.w + self.b
    </div>

    <div class="code-block">
        <span class="cm"># Menggunakan scikit-learn</span>
        <span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LinearRegression
        <span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split

        X_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(X, y, test_size=<span class="num">0.2</span>)
        model = <span class="fn">LinearRegression</span>()
        model.<span class="fn">fit</span>(X_train, y_train)
        score = model.<span class="fn">score</span>(X_test, y_test)  <span class="cm"># R-squared</span>
    </div>
</div>

<div class="card">
    <h3>Logistic Regression & Classification</h3>
    <p>Meskipun namanya "regression", Logistic Regression digunakan untuk <strong>klasifikasi</strong>. Menggunakan fungsi sigmoid untuk memetakan output ke probabilitas [0, 1].</p>
    <div class="code-block">
        <span class="cm"># Sigmoid: sigma(z) = 1 / (1 + e^(-z))</span>
        <span class="cm"># Loss: Binary Cross-Entropy</span>
        <span class="cm"># L = -[y*log(p) + (1-y)*log(1-p)]</span>

        <span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LogisticRegression
        <span class="kw">from</span> sklearn.metrics <span class="kw">import</span> accuracy_score, classification_report

        model = <span class="fn">LogisticRegression</span>(max_iter=<span class="num">1000</span>)
        model.<span class="fn">fit</span>(X_train, y_train)
        y_pred = model.<span class="fn">predict</span>(X_test)
        <span class="fn">print</span>(<span class="fn">classification_report</span>(y_test, y_pred))
    </div>
</div>

<div class="card">
    <h3>Decision Trees & Random Forest</h3>
    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4>Decision Tree</h4>
            <p>Membagi data berdasarkan fitur yang paling informatif (menggunakan <strong>Gini impurity</strong> atau <strong>Information Gain</strong>). Mudah diinterpretasi tapi rentan overfitting.</p>
            <div class="flow-diagram">
                <div class="flow-node">Umur > 30?</div>
                <div class="flow-arrow">Ya / Tidak</div>
                <div style="display:flex;gap:12px;">
                    <div class="flow-node" style="flex:1;">Gaji > 50K?</div>
                    <div class="flow-node" style="flex:1;background:var(--accent-red);">Tolak</div>
                </div>
            </div>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4>Random Forest</h4>
            <p><strong>Ensemble</strong> dari banyak decision tree. Setiap tree dilatih pada subset data (bagging) dan subset fitur. Voting mayoritas untuk prediksi akhir.</p>
            <div class="code-block">
                <span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> RandomForestClassifier

                rf = <span class="fn">RandomForestClassifier</span>(
                    n_estimators=<span class="num">100</span>,
                    max_depth=<span class="num">10</span>,
                    random_state=<span class="num">42</span>
                )
                rf.<span class="fn">fit</span>(X_train, y_train)
                accuracy = rf.<span class="fn">score</span>(X_test, y_test)
            </div>
        </div>
    </div>
</div>

<div class="card">
    <h3>Support Vector Machine (SVM)</h3>
    <p>SVM mencari <strong>hyperplane</strong> yang memaksimalkan margin antara dua kelas. Menggunakan <strong>kernel trick</strong> untuk menangani data yang tidak linearly separable.</p>
    <div class="code-block">
        <span class="kw">from</span> sklearn.svm <span class="kw">import</span> SVC

        <span class="cm"># Linear kernel</span>
        svm_linear = <span class="fn">SVC</span>(kernel=<span class="str">'linear'</span>, C=<span class="num">1.0</span>)

        <span class="cm"># RBF kernel (non-linear)</span>
        svm_rbf = <span class="fn">SVC</span>(kernel=<span class="str">'rbf'</span>, C=<span class="num">1.0</span>, gamma=<span class="str">'scale'</span>)

        <span class="cm"># Polynomial kernel</span>
        svm_poly = <span class="fn">SVC</span>(kernel=<span class="str">'poly'</span>, degree=<span class="num">3</span>)

        svm_rbf.<span class="fn">fit</span>(X_train, y_train)
        <span class="fn">print</span>(<span class="str">f"Accuracy: {svm_rbf.score(X_test, y_test):.2f}"</span>)
    </div>
</div>

<div class="card">
    <h3>K-Means Clustering</h3>
    <p>Algoritma unsupervised yang mengelompokkan data ke dalam K cluster. Iteratif: assign titik ke centroid terdekat, lalu update centroid.</p>
    <div class="pipeline">
        <div class="pipeline-stage"><div class="stage-title">Init</div><div class="stage-desc">Pilih K centroid random</div></div>
        <div class="pipeline-stage"><div class="stage-title">Assign</div><div class="stage-desc">Titik ke centroid terdekat</div></div>
        <div class="pipeline-stage"><div class="stage-title">Update</div><div class="stage-desc">Hitung centroid baru</div></div>
        <div class="pipeline-stage"><div class="stage-title">Repeat</div><div class="stage-desc">Sampai konvergen</div></div>
    </div>
    <div class="code-block">
        <span class="kw">from</span> sklearn.cluster <span class="kw">import</span> KMeans

        kmeans = <span class="fn">KMeans</span>(n_clusters=<span class="num">3</span>, random_state=<span class="num">42</span>, n_init=<span class="num">10</span>)
        labels = kmeans.<span class="fn">fit_predict</span>(X)
        centroids = kmeans.cluster_centers_

        <span class="cm"># Elbow method untuk menentukan K optimal</span>
        inertias = []
        <span class="kw">for</span> k <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">11</span>):
            km = <span class="fn">KMeans</span>(n_clusters=k, n_init=<span class="num">10</span>)
            km.<span class="fn">fit</span>(X)
            inertias.<span class="fn">append</span>(km.inertia_)
    </div>
</div>

<!-- ==================== SECTION 4: NEURAL NETWORKS & DEEP LEARNING ==================== -->
<h2 class="section-title" style="font-size:1.6rem;">4. Neural Networks & Deep Learning</h2>

<div class="card">
    <h3>Dari Perceptron ke Deep Networks</h3>
    <p>Neural Network terinspirasi dari cara kerja otak manusia. Dimulai dari <strong>Perceptron</strong> sederhana (1958) hingga <strong>Deep Networks</strong> modern dengan miliaran parameter.</p>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Perceptron (1958):</strong> Satu neuron, linear classifier. Hanya bisa menyelesaikan masalah linearly separable. Gagal menyelesaikan XOR.</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>MLP - Multi-Layer Perceptron:</strong> Menambahkan hidden layers. Dengan backpropagation (1986), bisa belajar representasi non-linear. Universal function approximator.</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Deep Networks (2012+):</strong> Ratusan layers. AlexNet memulai revolusi deep learning. ResNet, Transformer, dan GPT mendorong batas kemampuan AI.</div>
        </div>
    </div>

    <h4>Visualisasi Neural Network - Forward Pass</h4>
    <div class="anim-container">
        <canvas id="canvas-nn-forward" width="700" height="400" style="width:100%;max-width:700px;border-radius:10px;background:#0a0a1a;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="btn-nn-forward">Forward Pass</button>
            <button class="anim-btn" id="btn-nn-reset">Reset</button>
        </div>
    </div>
</div>

<div class="card">
    <h3>Activation Functions</h3>
    <p>Fungsi aktivasi menambahkan <strong>non-linearitas</strong> ke neural network. Tanpa fungsi aktivasi, neural network hanyalah transformasi linear biasa.</p>
    <div class="card-grid-3">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-blue">ReLU</span></h4>
            <p>f(x) = max(0, x)</p>
            <p>Paling populer. Sederhana, cepat, mengatasi vanishing gradient. Tapi bisa "mati" (dead ReLU).</p>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-green">Sigmoid</span></h4>
            <p>f(x) = 1/(1+e^-x)</p>
            <p>Output [0,1]. Digunakan untuk output layer binary classification. Rentan vanishing gradient.</p>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-purple">Tanh</span></h4>
            <p>f(x) = (e^x - e^-x)/(e^x + e^-x)</p>
            <p>Output [-1,1]. Zero-centered. Lebih baik dari sigmoid untuk hidden layers, tapi tetap vanishing gradient.</p>
        </div>
    </div>
    <div class="info-box">
        <strong>Modern Variants:</strong> LeakyReLU (f(x) = max(0.01x, x)), GELU (digunakan di Transformer/BERT/GPT), SiLU/Swish (x * sigmoid(x), digunakan di LLaMA).
    </div>
</div>

<div class="card">
    <h3>Backpropagation - Dijelaskan Secara Visual</h3>
    <p>Backpropagation adalah algoritma untuk menghitung gradien loss terhadap setiap parameter menggunakan <strong>chain rule</strong>. Gradien ini kemudian digunakan oleh optimizer untuk update parameter.</p>

    <div class="flow-diagram">
        <div class="flow-node" style="background:var(--accent-blue);">Forward Pass: Input -> Hidden -> Output -> Loss</div>
        <div class="flow-arrow">Hitung prediksi dan loss</div>
        <div class="flow-node" style="background:var(--accent-red);">Backward Pass: dL/dOutput -> dL/dHidden -> dL/dInput</div>
        <div class="flow-arrow">Propagasi gradien ke belakang (chain rule)</div>
        <div class="flow-node" style="background:var(--accent-green);">Update: w = w - lr * dL/dw</div>
    </div>

    <div class="code-block">
        <span class="cm"># Backpropagation sederhana (1 hidden layer)</span>
        <span class="kw">import</span> numpy <span class="kw">as</span> np

        <span class="cm"># Forward pass</span>
        z1 = X @ W1 + b1         <span class="cm"># linear</span>
        a1 = np.<span class="fn">maximum</span>(<span class="num">0</span>, z1)   <span class="cm"># ReLU</span>
        z2 = a1 @ W2 + b2        <span class="cm"># linear</span>
        y_pred = <span class="fn">softmax</span>(z2)     <span class="cm"># output probabilities</span>

        <span class="cm"># Loss</span>
        loss = -np.<span class="fn">sum</span>(y_true * np.<span class="fn">log</span>(y_pred)) / n

        <span class="cm"># Backward pass (chain rule)</span>
        dz2 = y_pred - y_true                    <span class="cm"># dL/dz2</span>
        dW2 = (a1.T @ dz2) / n                   <span class="cm"># dL/dW2</span>
        db2 = np.<span class="fn">sum</span>(dz2, axis=<span class="num">0</span>) / n            <span class="cm"># dL/db2</span>
        da1 = dz2 @ W2.T                         <span class="cm"># dL/da1</span>
        dz1 = da1 * (z1 > <span class="num">0</span>)                    <span class="cm"># ReLU gradient</span>
        dW1 = (X.T @ dz1) / n                    <span class="cm"># dL/dW1</span>
        db1 = np.<span class="fn">sum</span>(dz1, axis=<span class="num">0</span>) / n            <span class="cm"># dL/db1</span>

        <span class="cm"># Update parameters</span>
        W1 -= lr * dW1;  b1 -= lr * db1
        W2 -= lr * dW2;  b2 -= lr * db2
    </div>
</div>

<div class="card">
    <h3>CNN - Convolutional Neural Network</h3>
    <p>CNN dirancang khusus untuk data spasial (gambar). Menggunakan <strong>convolution</strong> untuk mendeteksi fitur lokal dan <strong>pooling</strong> untuk mengurangi dimensi.</p>

    <div class="pipeline">
        <div class="pipeline-stage"><div class="stage-title">Input Image</div><div class="stage-desc">224x224x3</div></div>
        <div class="pipeline-stage"><div class="stage-title">Conv + ReLU</div><div class="stage-desc">Filter 3x3, deteksi edge</div></div>
        <div class="pipeline-stage"><div class="stage-title">Max Pooling</div><div class="stage-desc">Reduce 2x, downsample</div></div>
        <div class="pipeline-stage"><div class="stage-title">Conv + ReLU</div><div class="stage-desc">Fitur lebih abstrak</div></div>
        <div class="pipeline-stage"><div class="stage-title">Flatten</div><div class="stage-desc">Vektor 1D</div></div>
        <div class="pipeline-stage"><div class="stage-title">Fully Connected</div><div class="stage-desc">Classification</div></div>
    </div>

    <div class="code-block">
        <span class="kw">import</span> torch
        <span class="kw">import</span> torch.nn <span class="kw">as</span> nn

        <span class="kw">class</span> <span class="type">SimpleCNN</span>(nn.Module):
            <span class="kw">def</span> <span class="fn">__init__</span>(self, num_classes=<span class="num">10</span>):
                <span class="fn">super</span>().<span class="fn">__init__</span>()
                self.features = nn.<span class="fn">Sequential</span>(
                    nn.<span class="fn">Conv2d</span>(<span class="num">3</span>, <span class="num">32</span>, kernel_size=<span class="num">3</span>, padding=<span class="num">1</span>),
                    nn.<span class="fn">ReLU</span>(),
                    nn.<span class="fn">MaxPool2d</span>(<span class="num">2</span>),              <span class="cm"># 112x112</span>
                    nn.<span class="fn">Conv2d</span>(<span class="num">32</span>, <span class="num">64</span>, kernel_size=<span class="num">3</span>, padding=<span class="num">1</span>),
                    nn.<span class="fn">ReLU</span>(),
                    nn.<span class="fn">MaxPool2d</span>(<span class="num">2</span>),              <span class="cm"># 56x56</span>
                    nn.<span class="fn">Conv2d</span>(<span class="num">64</span>, <span class="num">128</span>, kernel_size=<span class="num">3</span>, padding=<span class="num">1</span>),
                    nn.<span class="fn">ReLU</span>(),
                    nn.<span class="fn">AdaptiveAvgPool2d</span>(<span class="num">1</span>),     <span class="cm"># 1x1</span>
                )
                self.classifier = nn.<span class="fn">Linear</span>(<span class="num">128</span>, num_classes)

            <span class="kw">def</span> <span class="fn">forward</span>(self, x):
                x = self.features(x)
                x = x.<span class="fn">view</span>(x.size(<span class="num">0</span>), -<span class="num">1</span>)
                <span class="kw">return</span> self.classifier(x)
    </div>
</div>

<div class="card">
    <h3>RNN, LSTM & Sequence Models</h3>
    <p>RNN (Recurrent Neural Network) dirancang untuk data sekuensial (teks, time series). LSTM mengatasi masalah vanishing gradient pada RNN biasa.</p>
    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4>RNN</h4>
            <p>h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b)</p>
            <p>Masalah: vanishing/exploding gradient untuk sequence panjang.</p>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4>LSTM</h4>
            <p>Menambahkan <strong>gates</strong>: forget, input, output. Cell state sebagai "conveyor belt" informasi jangka panjang.</p>
            <div class="code-block">
                lstm = nn.<span class="fn">LSTM</span>(
                    input_size=<span class="num">256</span>,
                    hidden_size=<span class="num">512</span>,
                    num_layers=<span class="num">2</span>,
                    batch_first=<span class="num">True</span>,
                    dropout=<span class="num">0.1</span>
                )
            </div>
        </div>
    </div>
    <div class="info-box">
        <strong>Era Transformer:</strong> Setelah paper "Attention Is All You Need" (2017), Transformer menggantikan RNN/LSTM di hampir semua task NLP. Transformer tidak memiliki recurrence, melainkan menggunakan <strong>self-attention</strong> yang bisa diparalelisasi secara efisien.
    </div>
</div>

<div class="card">
    <h3>Transformer Architecture</h3>
    <p>Transformer adalah arsitektur yang merevolusi NLP dan kini juga digunakan dalam vision (ViT), audio, dan multimodal AI. Komponen utamanya adalah <strong>Self-Attention</strong>.</p>

    <div class="pipeline">
        <div class="pipeline-stage"><div class="stage-title">Input Embedding</div><div class="stage-desc">Token -> Vector</div></div>
        <div class="pipeline-stage"><div class="stage-title">Positional Encoding</div><div class="stage-desc">Informasi posisi</div></div>
        <div class="pipeline-stage"><div class="stage-title">Multi-Head Attention</div><div class="stage-desc">Self-attention x N heads</div></div>
        <div class="pipeline-stage"><div class="stage-title">Feed Forward</div><div class="stage-desc">MLP per posisi</div></div>
        <div class="pipeline-stage"><div class="stage-title">Layer Norm</div><div class="stage-desc">+ Residual connection</div></div>
        <div class="pipeline-stage"><div class="stage-title">Output</div><div class="stage-desc">N layers di-stack</div></div>
    </div>

    <div class="code-block">
        <span class="cm"># Self-Attention: Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) * V</span>
        <span class="kw">import</span> torch
        <span class="kw">import</span> torch.nn.functional <span class="kw">as</span> F

        <span class="kw">def</span> <span class="fn">scaled_dot_product_attention</span>(Q, K, V, mask=<span class="num">None</span>):
            d_k = Q.size(-<span class="num">1</span>)
            scores = (Q @ K.<span class="fn">transpose</span>(-<span class="num">2</span>, -<span class="num">1</span>)) / (d_k ** <span class="num">0.5</span>)
            <span class="kw">if</span> mask <span class="kw">is not None</span>:
                scores = scores.<span class="fn">masked_fill</span>(mask == <span class="num">0</span>, <span class="num">-1e9</span>)
            attn_weights = F.<span class="fn">softmax</span>(scores, dim=-<span class="num">1</span>)
            <span class="kw">return</span> attn_weights @ V, attn_weights

        <span class="cm"># Multi-Head Attention</span>
        <span class="kw">class</span> <span class="type">MultiHeadAttention</span>(nn.Module):
            <span class="kw">def</span> <span class="fn">__init__</span>(self, d_model=<span class="num">512</span>, n_heads=<span class="num">8</span>):
                <span class="fn">super</span>().<span class="fn">__init__</span>()
                self.n_heads = n_heads
                self.d_k = d_model // n_heads
                self.W_q = nn.<span class="fn">Linear</span>(d_model, d_model)
                self.W_k = nn.<span class="fn">Linear</span>(d_model, d_model)
                self.W_v = nn.<span class="fn">Linear</span>(d_model, d_model)
                self.W_o = nn.<span class="fn">Linear</span>(d_model, d_model)

            <span class="kw">def</span> <span class="fn">forward</span>(self, Q, K, V, mask=<span class="num">None</span>):
                B = Q.size(<span class="num">0</span>)
                Q = self.W_q(Q).<span class="fn">view</span>(B, -<span class="num">1</span>, self.n_heads, self.d_k).<span class="fn">transpose</span>(<span class="num">1</span>,<span class="num">2</span>)
                K = self.W_k(K).<span class="fn">view</span>(B, -<span class="num">1</span>, self.n_heads, self.d_k).<span class="fn">transpose</span>(<span class="num">1</span>,<span class="num">2</span>)
                V = self.W_v(V).<span class="fn">view</span>(B, -<span class="num">1</span>, self.n_heads, self.d_k).<span class="fn">transpose</span>(<span class="num">1</span>,<span class="num">2</span>)
                out, attn = <span class="fn">scaled_dot_product_attention</span>(Q, K, V, mask)
                out = out.<span class="fn">transpose</span>(<span class="num">1</span>,<span class="num">2</span>).<span class="fn">contiguous</span>().<span class="fn">view</span>(B, -<span class="num">1</span>, self.n_heads*self.d_k)
                <span class="kw">return</span> self.W_o(out)
    </div>
</div>

<!-- ==================== SECTION 5: LARGE LANGUAGE MODELS ==================== -->
<h2 class="section-title" style="font-size:1.6rem;">5. Large Language Models (LLM)</h2>

<div class="card">
    <h3>Bagaimana LLM Bekerja</h3>
    <p>LLM adalah model bahasa berskala besar yang dilatih pada teks internet untuk memprediksi token berikutnya. Pipeline utamanya:</p>

    <div class="pipeline">
        <div class="pipeline-stage"><div class="stage-title">Tokenization</div><div class="stage-desc">Teks -> token IDs (BPE)</div></div>
        <div class="pipeline-stage"><div class="stage-title">Embedding</div><div class="stage-desc">Token ID -> vektor dense</div></div>
        <div class="pipeline-stage"><div class="stage-title">Transformer Layers</div><div class="stage-desc">Self-attention + FFN x N</div></div>
        <div class="pipeline-stage"><div class="stage-title">Logits</div><div class="stage-desc">Distribusi probabilitas token</div></div>
        <div class="pipeline-stage"><div class="stage-title">Sampling</div><div class="stage-desc">Pilih token berikutnya</div></div>
    </div>

    <div class="code-block">
        <span class="cm"># Contoh tokenisasi (BPE - Byte Pair Encoding)</span>
        <span class="str">"Machine Learning"</span> -> [<span class="num">22583</span>, <span class="num">14715</span>]
        <span class="str">"Saya belajar AI"</span>  -> [<span class="num">50</span>, <span class="num">8458</span>, <span class="num">1395</span>, <span class="num">64</span>, <span class="num">15836</span>, <span class="num">15592</span>]

        <span class="cm"># Proses generasi (autoregressive)</span>
        Input:  <span class="str">"Ibukota Indonesia adalah"</span>
        Step 1: model prediksi -> <span class="str">"Jakarta"</span> (prob: 0.95)
        Step 2: <span class="str">"Ibukota Indonesia adalah Jakarta"</span> -> <span class="str">"."</span> (prob: 0.7)
    </div>
</div>

<div class="card">
    <h3>Self-Attention Mechanism - Visualisasi</h3>
    <p>Self-Attention memungkinkan setiap token untuk "memperhatikan" semua token lain dalam sequence. Ini yang membuat Transformer sangat powerful untuk menangkap long-range dependencies.</p>

    <div class="anim-container">
        <canvas id="canvas-attention" width="700" height="380" style="width:100%;max-width:700px;border-radius:10px;background:#0a0a1a;"></canvas>
        <div class="anim-controls">
            <button class="anim-btn" id="btn-attn-animate">Animasi Attention</button>
            <button class="anim-btn" id="btn-attn-reset">Reset</button>
        </div>
    </div>

    <div class="info-box">
        <strong>Attention Score:</strong> Setiap token menghitung "seberapa relevan" token lain terhadap dirinya. Token "kucing" mungkin sangat memperhatikan "tidur" dan "di" dalam kalimat "Kucing tidur di sofa". Warna lebih terang = attention score lebih tinggi.
    </div>
</div>

<div class="card">
    <h3>GPT Architecture Overview</h3>
    <p>GPT (Generative Pre-trained Transformer) menggunakan <strong>decoder-only</strong> Transformer dengan <strong>causal masking</strong> (setiap token hanya bisa melihat token sebelumnya).</p>

    <div class="table-wrapper">
        <table>
            <tr><th>Model</th><th>Parameters</th><th>Training Data</th><th>Context Length</th><th>Tahun</th></tr>
            <tr><td>GPT-1</td><td>117M</td><td>~5GB teks</td><td>512</td><td>2018</td></tr>
            <tr><td>GPT-2</td><td>1.5B</td><td>40GB (WebText)</td><td>1024</td><td>2019</td></tr>
            <tr><td>GPT-3</td><td>175B</td><td>570GB</td><td>2048</td><td>2020</td></tr>
            <tr><td>GPT-4</td><td>~1.8T (rumor)</td><td>~13T tokens</td><td>128K</td><td>2023</td></tr>
            <tr><td>LLaMA 3</td><td>8B-405B</td><td>15T tokens</td><td>128K</td><td>2024</td></tr>
            <tr><td>Claude 3.5</td><td>Tidak dipublikasi</td><td>-</td><td>200K</td><td>2024</td></tr>
        </table>
    </div>

    <div class="code-block">
        <span class="cm"># Simplified GPT Block</span>
        <span class="kw">class</span> <span class="type">GPTBlock</span>(nn.Module):
            <span class="kw">def</span> <span class="fn">__init__</span>(self, d_model, n_heads, d_ff):
                <span class="fn">super</span>().<span class="fn">__init__</span>()
                self.ln1 = nn.<span class="fn">LayerNorm</span>(d_model)
                self.attn = <span class="fn">CausalSelfAttention</span>(d_model, n_heads)
                self.ln2 = nn.<span class="fn">LayerNorm</span>(d_model)
                self.ffn = nn.<span class="fn">Sequential</span>(
                    nn.<span class="fn">Linear</span>(d_model, d_ff),
                    nn.<span class="fn">GELU</span>(),
                    nn.<span class="fn">Linear</span>(d_ff, d_model),
                    nn.<span class="fn">Dropout</span>(<span class="num">0.1</span>)
                )

            <span class="kw">def</span> <span class="fn">forward</span>(self, x):
                x = x + self.<span class="fn">attn</span>(self.<span class="fn">ln1</span>(x))  <span class="cm"># Pre-norm + residual</span>
                x = x + self.<span class="fn">ffn</span>(self.<span class="fn">ln2</span>(x))   <span class="cm"># Pre-norm + residual</span>
                <span class="kw">return</span> x
    </div>
</div>

<div class="card">
    <h3>Training Pipeline: Pre-training, Fine-tuning, RLHF</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="pretrain-tab">Pre-training</button>
        <button class="tab-btn" data-tab="finetune-tab">Fine-tuning</button>
        <button class="tab-btn" data-tab="rlhf-tab">RLHF</button>
    </div>

    <div class="tab-content active" data-tab-content="pretrain-tab">
        <p><strong>Pre-training</strong> adalah tahap paling mahal. Model belajar bahasa dari triliunan token teks internet. Objective: <strong>next token prediction</strong> (causal language modeling).</p>
        <div class="code-block">
            <span class="cm"># Pre-training objective</span>
            <span class="cm"># Maximize: P(x_t | x_1, x_2, ..., x_{t-1})</span>
            <span class="cm"># Loss: Cross-entropy antara prediksi dan token asli</span>

            loss = F.<span class="fn">cross_entropy</span>(logits.<span class="fn">view</span>(-<span class="num">1</span>, vocab_size), targets.<span class="fn">view</span>(-<span class="num">1</span>))

            <span class="cm"># Cost: GPT-4 diperkirakan ~$100M untuk training</span>
            <span class="cm"># Hardware: ribuan GPU A100/H100 selama berbulan-bulan</span>
        </div>
    </div>

    <div class="tab-content" data-tab-content="finetune-tab">
        <p><strong>Supervised Fine-tuning (SFT)</strong> mengajarkan model untuk mengikuti instruksi. Dataset berisi pasangan (instruction, response) berkualitas tinggi yang ditulis oleh manusia.</p>
        <div class="code-block">
            <span class="cm"># Format data SFT</span>
            {
                <span class="str">"instruction"</span>: <span class="str">"Jelaskan apa itu machine learning"</span>,
                <span class="str">"response"</span>: <span class="str">"Machine learning adalah cabang AI..."</span>
            }

            <span class="cm"># Fine-tuning dengan LoRA (Parameter-Efficient)</span>
            <span class="kw">from</span> peft <span class="kw">import</span> LoraConfig, get_peft_model

            lora_config = <span class="fn">LoraConfig</span>(
                r=<span class="num">16</span>,                  <span class="cm"># rank</span>
                lora_alpha=<span class="num">32</span>,
                target_modules=[<span class="str">"q_proj"</span>, <span class="str">"v_proj"</span>],
                lora_dropout=<span class="num">0.05</span>,
            )
            model = <span class="fn">get_peft_model</span>(base_model, lora_config)
            <span class="cm"># Hanya ~0.1% parameter yang di-train!</span>
        </div>
    </div>

    <div class="tab-content" data-tab-content="rlhf-tab">
        <p><strong>RLHF (Reinforcement Learning from Human Feedback)</strong> menyelaraskan model dengan preferensi manusia. Tiga tahap:</p>
        <div class="step-list">
            <div class="step-item">
                <div class="step-num">1</div>
                <div class="step-text"><strong>Collect Comparisons:</strong> Manusia membandingkan 2+ respons model dan memilih yang lebih baik.</div>
            </div>
            <div class="step-item">
                <div class="step-num">2</div>
                <div class="step-text"><strong>Train Reward Model:</strong> Model terpisah yang belajar memprediksi preferensi manusia (mana yang lebih disukai).</div>
            </div>
            <div class="step-item">
                <div class="step-num">3</div>
                <div class="step-text"><strong>PPO Optimization:</strong> Fine-tune LLM menggunakan Proximal Policy Optimization untuk memaksimalkan reward.</div>
            </div>
        </div>
        <div class="info-box">
            <strong>DPO (Direct Preference Optimization):</strong> Alternatif lebih sederhana dari RLHF. Tidak perlu reward model terpisah. Langsung mengoptimalkan model berdasarkan data preferensi. Digunakan oleh LLaMA 3, Zephyr, dan banyak model modern.
        </div>
    </div>
</div>

<div class="card">
    <h3>Inference Optimization</h3>
    <p>Setelah training, optimasi inference sangat penting untuk deployment. Berikut teknik-teknik utama:</p>

    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-orange">Quantization</span></h4>
            <p>Mengurangi presisi parameter dari FP32 ke INT8/INT4. Model 70B bisa jalan di consumer GPU!</p>
            <div class="code-block">
                <span class="cm"># GPTQ / AWQ quantization</span>
                <span class="cm"># FP32: 4 bytes per param</span>
                <span class="cm"># FP16: 2 bytes (50% savings)</span>
                <span class="cm"># INT8: 1 byte (75% savings)</span>
                <span class="cm"># INT4: 0.5 byte (87% savings)</span>
                <span class="cm"># LLaMA-70B: 140GB -> 35GB (INT4)</span>
            </div>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-blue">KV-Cache</span></h4>
            <p>Menyimpan Key dan Value dari token sebelumnya agar tidak perlu dihitung ulang saat generate token baru.</p>
            <div class="code-block">
                <span class="cm"># Tanpa KV-Cache: O(n^2) per token</span>
                <span class="cm"># Dengan KV-Cache: O(n) per token</span>
                <span class="cm"># Tapi butuh memori untuk cache!</span>
                <span class="cm"># PagedAttention (vLLM) mengelola</span>
                <span class="cm"># KV-Cache secara efisien</span>
            </div>
        </div>
    </div>

    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-green">Speculative Decoding</span></h4>
            <p>Model kecil (draft) generate beberapa token, model besar verify sekaligus. Speedup 2-3x tanpa loss kualitas.</p>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-purple">RAG Integration</span></h4>
            <p>Retrieval-Augmented Generation: ambil dokumen relevan dari database, masukkan ke context LLM. Mengurangi hallucination.</p>
            <div class="code-block">
                <span class="cm"># RAG Pipeline</span>
                <span class="cm"># 1. Embed query</span>
                <span class="cm"># 2. Search vector DB</span>
                <span class="cm"># 3. Retrieve top-K docs</span>
                <span class="cm"># 4. Augment prompt</span>
                <span class="cm"># 5. Generate with LLM</span>
            </div>
        </div>
    </div>
</div>

<!-- ==================== SECTION 6: PARALLEL COMPUTING FOR ML ==================== -->
<h2 class="section-title" style="font-size:1.6rem;">6. Implementasi dengan Parallel Computing</h2>

<div class="card">
    <h3>Mengapa GPU untuk Machine Learning?</h3>
    <p>Neural networks pada dasarnya adalah operasi <strong>matrix multiplication</strong> yang sangat besar. GPU memiliki ribuan core kecil yang bisa menjalankan operasi ini secara paralel.</p>

    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-blue">CPU</span></h4>
            <p>4-64 core, optimized untuk sequential & branching. Bagus untuk logic, I/O, preprocessing.</p>
            <p><strong>Analogi:</strong> Satu profesor yang sangat pintar.</p>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-green">GPU</span></h4>
            <p>Ribuan core (16,384 pada H100), optimized untuk parallel arithmetic. Ideal untuk matrix ops.</p>
            <p><strong>Analogi:</strong> 10,000 siswa yang mengerjakan soal berbeda sekaligus.</p>
        </div>
    </div>

    <div class="code-block">
        <span class="cm"># Matrix multiplication: C = A @ B</span>
        <span class="cm"># A: (4096 x 4096), B: (4096 x 4096)</span>
        <span class="cm"># Total operasi: 4096^3 = ~69 miliar FLOPs</span>

        <span class="cm"># CPU (Intel i9): ~1 TFLOPS -> ~69 detik</span>
        <span class="cm"># GPU (H100):    ~990 TFLOPS (FP16) -> ~0.07 detik</span>
        <span class="cm"># Speedup: ~1000x!</span>

        <span class="kw">import</span> torch

        <span class="cm"># Pindahkan ke GPU</span>
        device = torch.device(<span class="str">'cuda'</span> <span class="kw">if</span> torch.cuda.<span class="fn">is_available</span>() <span class="kw">else</span> <span class="str">'cpu'</span>)
        A = torch.<span class="fn">randn</span>(<span class="num">4096</span>, <span class="num">4096</span>, device=device)
        B = torch.<span class="fn">randn</span>(<span class="num">4096</span>, <span class="num">4096</span>, device=device)
        C = A @ B  <span class="cm"># Dieksekusi di GPU secara paralel</span>
    </div>
</div>

<div class="card">
    <h3>Distributed Training Strategies</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="dp-tab">Data Parallelism</button>
        <button class="tab-btn" data-tab="mp-tab">Model Parallelism</button>
        <button class="tab-btn" data-tab="pp-tab">Pipeline Parallelism</button>
    </div>

    <div class="tab-content active" data-tab-content="dp-tab">
        <p><strong>Data Parallelism:</strong> Setiap GPU mendapat salinan model lengkap, tapi data berbeda. Gradien di-aggregate (all-reduce) setelah backward pass.</p>
        <div class="flow-diagram">
            <div style="display:flex;gap:12px;">
                <div class="flow-node" style="flex:1;">GPU 0: Batch 1</div>
                <div class="flow-node" style="flex:1;">GPU 1: Batch 2</div>
                <div class="flow-node" style="flex:1;">GPU 2: Batch 3</div>
                <div class="flow-node" style="flex:1;">GPU 3: Batch 4</div>
            </div>
            <div class="flow-arrow">Forward + Backward (paralel)</div>
            <div class="flow-node">All-Reduce: Rata-rata gradien dari semua GPU</div>
            <div class="flow-arrow">Semua GPU update parameter secara identik</div>
        </div>
        <div class="code-block">
            <span class="cm"># PyTorch DistributedDataParallel (DDP)</span>
            <span class="kw">import</span> torch.distributed <span class="kw">as</span> dist
            <span class="kw">from</span> torch.nn.parallel <span class="kw">import</span> DistributedDataParallel <span class="kw">as</span> DDP

            dist.<span class="fn">init_process_group</span>(backend=<span class="str">"nccl"</span>)
            local_rank = <span class="fn">int</span>(os.environ[<span class="str">"LOCAL_RANK"</span>])
            model = model.<span class="fn">to</span>(local_rank)
            model = <span class="fn">DDP</span>(model, device_ids=[local_rank])

            <span class="cm"># Launch: torchrun --nproc_per_node=4 train.py</span>
        </div>
    </div>

    <div class="tab-content" data-tab-content="mp-tab">
        <p><strong>Tensor Parallelism:</strong> Satu layer dipecah ke beberapa GPU. Setiap GPU menghitung bagian dari matrix multiplication. Digunakan untuk model yang sangat besar (>100B params).</p>
        <div class="code-block">
            <span class="cm"># Tensor Parallelism (Megatron-LM style)</span>
            <span class="cm"># Linear layer: Y = XA</span>
            <span class="cm"># Split A secara column-wise ke 2 GPU:</span>
            <span class="cm"># GPU 0: Y1 = X @ A1   (kolom pertama)</span>
            <span class="cm"># GPU 1: Y2 = X @ A2   (kolom kedua)</span>
            <span class="cm"># Y = [Y1, Y2] (concat)</span>

            <span class="cm"># FSDP (Fully Sharded Data Parallelism)</span>
            <span class="kw">from</span> torch.distributed.fsdp <span class="kw">import</span> FullyShardedDataParallel <span class="kw">as</span> FSDP

            model = <span class="fn">FSDP</span>(model, sharding_strategy=ShardingStrategy.FULL_SHARD)
        </div>
    </div>

    <div class="tab-content" data-tab-content="pp-tab">
        <p><strong>Pipeline Parallelism:</strong> Layers model didistribusikan ke GPU berbeda. Data di-pipeline (micro-batches) untuk meminimalkan idle time (bubble).</p>
        <div class="pipeline">
            <div class="pipeline-stage"><div class="stage-title">GPU 0</div><div class="stage-desc">Layers 1-8</div></div>
            <div class="pipeline-stage"><div class="stage-title">GPU 1</div><div class="stage-desc">Layers 9-16</div></div>
            <div class="pipeline-stage"><div class="stage-title">GPU 2</div><div class="stage-desc">Layers 17-24</div></div>
            <div class="pipeline-stage"><div class="stage-title">GPU 3</div><div class="stage-desc">Layers 25-32</div></div>
        </div>
    </div>
</div>

<div class="card">
    <h3>Mixed Precision Training</h3>
    <p>Menggunakan FP16/BF16 untuk forward & backward pass, tapi menyimpan master copy parameter dalam FP32. Mempercepat training 2-3x dan mengurangi penggunaan memori.</p>
    <div class="code-block">
        <span class="cm"># PyTorch Automatic Mixed Precision (AMP)</span>
        <span class="kw">from</span> torch.cuda.amp <span class="kw">import</span> autocast, GradScaler

        scaler = <span class="fn">GradScaler</span>()

        <span class="kw">for</span> batch <span class="kw">in</span> dataloader:
            optimizer.<span class="fn">zero_grad</span>()

            <span class="kw">with</span> <span class="fn">autocast</span>(dtype=torch.bfloat16):  <span class="cm"># BF16 computation</span>
                output = <span class="fn">model</span>(batch)
                loss = <span class="fn">criterion</span>(output, target)

            scaler.<span class="fn">scale</span>(loss).<span class="fn">backward</span>()    <span class="cm"># Scaled gradient</span>
            scaler.<span class="fn">step</span>(optimizer)             <span class="cm"># Unscale + update</span>
            scaler.<span class="fn">update</span>()
    </div>

    <div class="table-wrapper">
        <table>
            <tr><th>Precision</th><th>Bits</th><th>Range</th><th>Penggunaan</th></tr>
            <tr><td>FP32</td><td>32</td><td>~1.2e-38 to 3.4e38</td><td>Master weights, loss scaling</td></tr>
            <tr><td>FP16</td><td>16</td><td>~6.1e-5 to 65504</td><td>Forward/backward (butuh loss scaling)</td></tr>
            <tr><td>BF16</td><td>16</td><td>~1.2e-38 to 3.4e38</td><td>Forward/backward (range sama dengan FP32)</td></tr>
            <tr><td>INT8</td><td>8</td><td>-128 to 127</td><td>Quantized inference</td></tr>
            <tr><td>INT4</td><td>4</td><td>-8 to 7</td><td>Ultra-low inference (GPTQ, AWQ)</td></tr>
        </table>
    </div>
</div>

<!-- ==================== SECTION 7: PRACTICAL APPLICATIONS ==================== -->
<h2 class="section-title" style="font-size:1.6rem;">7. Aplikasi Praktis</h2>

<div class="card">
    <h3>Image Classification Pipeline</h3>
    <div class="pipeline">
        <div class="pipeline-stage"><div class="stage-title">Load Data</div><div class="stage-desc">ImageFolder + DataLoader</div></div>
        <div class="pipeline-stage"><div class="stage-title">Augmentation</div><div class="stage-desc">Resize, Flip, Normalize</div></div>
        <div class="pipeline-stage"><div class="stage-title">Model</div><div class="stage-desc">ResNet / EfficientNet</div></div>
        <div class="pipeline-stage"><div class="stage-title">Train</div><div class="stage-desc">Cross-Entropy + Adam</div></div>
        <div class="pipeline-stage"><div class="stage-title">Evaluate</div><div class="stage-desc">Accuracy, F1, Confusion Matrix</div></div>
        <div class="pipeline-stage"><div class="stage-title">Deploy</div><div class="stage-desc">ONNX / TorchScript</div></div>
    </div>

    <div class="code-block">
        <span class="kw">import</span> torch
        <span class="kw">import</span> torch.nn <span class="kw">as</span> nn
        <span class="kw">import</span> torchvision.transforms <span class="kw">as</span> T
        <span class="kw">import</span> torchvision.models <span class="kw">as</span> models
        <span class="kw">from</span> torch.utils.data <span class="kw">import</span> DataLoader
        <span class="kw">from</span> torchvision.datasets <span class="kw">import</span> ImageFolder

        <span class="cm"># Transform pipeline</span>
        transform = T.<span class="fn">Compose</span>([
            T.<span class="fn">Resize</span>(<span class="num">256</span>),
            T.<span class="fn">CenterCrop</span>(<span class="num">224</span>),
            T.<span class="fn">ToTensor</span>(),
            T.<span class="fn">Normalize</span>(mean=[<span class="num">0.485</span>, <span class="num">0.456</span>, <span class="num">0.406</span>],
                       std=[<span class="num">0.229</span>, <span class="num">0.224</span>, <span class="num">0.225</span>])
        ])

        <span class="cm"># Dataset & DataLoader</span>
        dataset = <span class="fn">ImageFolder</span>(<span class="str">'data/train'</span>, transform=transform)
        loader = <span class="fn">DataLoader</span>(dataset, batch_size=<span class="num">32</span>, shuffle=<span class="num">True</span>, num_workers=<span class="num">4</span>)

        <span class="cm"># Transfer Learning dengan ResNet</span>
        model = models.<span class="fn">resnet50</span>(weights=<span class="str">'IMAGENET1K_V2'</span>)
        model.fc = nn.<span class="fn">Linear</span>(<span class="num">2048</span>, num_classes)  <span class="cm"># Replace head</span>

        <span class="cm"># Freeze backbone (opsional)</span>
        <span class="kw">for</span> param <span class="kw">in</span> model.parameters():
            param.requires_grad = <span class="num">False</span>
        <span class="kw">for</span> param <span class="kw">in</span> model.fc.parameters():
            param.requires_grad = <span class="num">True</span>

        <span class="cm"># Training loop</span>
        optimizer = torch.optim.<span class="fn">Adam</span>(model.fc.parameters(), lr=<span class="num">1e-3</span>)
        criterion = nn.<span class="fn">CrossEntropyLoss</span>()

        <span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
            <span class="kw">for</span> images, labels <span class="kw">in</span> loader:
                images, labels = images.<span class="fn">to</span>(device), labels.<span class="fn">to</span>(device)
                output = <span class="fn">model</span>(images)
                loss = <span class="fn">criterion</span>(output, labels)
                optimizer.<span class="fn">zero_grad</span>()
                loss.<span class="fn">backward</span>()
                optimizer.<span class="fn">step</span>()
    </div>
</div>

<div class="card">
    <h3>NLP Pipeline</h3>
    <div class="pipeline">
        <div class="pipeline-stage"><div class="stage-title">Raw Text</div><div class="stage-desc">Kalimat input</div></div>
        <div class="pipeline-stage"><div class="stage-title">Tokenize</div><div class="stage-desc">BPE / WordPiece</div></div>
        <div class="pipeline-stage"><div class="stage-title">Embed</div><div class="stage-desc">Token -> Vector</div></div>
        <div class="pipeline-stage"><div class="stage-title">Model</div><div class="stage-desc">BERT / GPT</div></div>
        <div class="pipeline-stage"><div class="stage-title">Head</div><div class="stage-desc">Classification / Generation</div></div>
        <div class="pipeline-stage"><div class="stage-title">Output</div><div class="stage-desc">Label / Teks</div></div>
    </div>

    <div class="code-block">
        <span class="cm"># Sentiment Analysis dengan Hugging Face Transformers</span>
        <span class="kw">from</span> transformers <span class="kw">import</span> AutoTokenizer, AutoModelForSequenceClassification
        <span class="kw">from</span> transformers <span class="kw">import</span> Trainer, TrainingArguments

        model_name = <span class="str">"bert-base-uncased"</span>
        tokenizer = AutoTokenizer.<span class="fn">from_pretrained</span>(model_name)
        model = AutoModelForSequenceClassification.<span class="fn">from_pretrained</span>(
            model_name, num_labels=<span class="num">2</span>
        )

        <span class="cm"># Tokenisasi dataset</span>
        <span class="kw">def</span> <span class="fn">tokenize_fn</span>(examples):
            <span class="kw">return</span> <span class="fn">tokenizer</span>(examples[<span class="str">"text"</span>], truncation=<span class="num">True</span>, padding=<span class="str">"max_length"</span>)

        tokenized = dataset.<span class="fn">map</span>(tokenize_fn, batched=<span class="num">True</span>)

        <span class="cm"># Training</span>
        args = <span class="fn">TrainingArguments</span>(
            output_dir=<span class="str">"./results"</span>,
            num_train_epochs=<span class="num">3</span>,
            per_device_train_batch_size=<span class="num">16</span>,
            learning_rate=<span class="num">2e-5</span>,
            warmup_steps=<span class="num">500</span>,
            fp16=<span class="num">True</span>,
        )
        trainer = <span class="fn">Trainer</span>(model=model, args=args, train_dataset=tokenized)
        trainer.<span class="fn">train</span>()
    </div>
</div>

<div class="card">
    <h3>Recommendation System</h3>
    <p>Sistem rekomendasi menggunakan collaborative filtering dan content-based filtering untuk menyarankan item kepada pengguna.</p>

    <div class="card-grid">
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-blue">Collaborative Filtering</span></h4>
            <p>"User yang suka A juga suka B". Menggunakan user-item interaction matrix. Teknik: Matrix Factorization, Neural CF.</p>
        </div>
        <div class="card" style="background:var(--bg-tertiary);">
            <h4><span class="badge-green">Content-Based</span></h4>
            <p>Merekomendasikan item mirip dengan apa yang user sukai. Berdasarkan fitur item (genre, deskripsi, dll).</p>
        </div>
    </div>

    <div class="code-block">
        <span class="cm"># Simple Matrix Factorization untuk Recommendation</span>
        <span class="kw">class</span> <span class="type">MatrixFactorization</span>(nn.Module):
            <span class="kw">def</span> <span class="fn">__init__</span>(self, n_users, n_items, n_factors=<span class="num">20</span>):
                <span class="fn">super</span>().<span class="fn">__init__</span>()
                self.user_emb = nn.<span class="fn">Embedding</span>(n_users, n_factors)
                self.item_emb = nn.<span class="fn">Embedding</span>(n_items, n_factors)
                self.user_bias = nn.<span class="fn">Embedding</span>(n_users, <span class="num">1</span>)
                self.item_bias = nn.<span class="fn">Embedding</span>(n_items, <span class="num">1</span>)

            <span class="kw">def</span> <span class="fn">forward</span>(self, user, item):
                u = self.user_emb(user)         <span class="cm"># (B, factors)</span>
                i = self.item_emb(item)          <span class="cm"># (B, factors)</span>
                dot = (u * i).<span class="fn">sum</span>(dim=<span class="num">1</span>)         <span class="cm"># dot product</span>
                bias = self.user_bias(user).<span class="fn">squeeze</span>() + self.item_bias(item).<span class="fn">squeeze</span>()
                <span class="kw">return</span> dot + bias
    </div>
</div>

<div class="card">
    <h3>Ringkasan Ekosistem ML Modern</h3>
    <div class="table-wrapper">
        <table>
            <tr><th>Kategori</th><th>Tools</th><th>Keterangan</th></tr>
            <tr><td>Framework</td><td>PyTorch, JAX, TensorFlow</td><td>PyTorch paling populer di riset & industri</td></tr>
            <tr><td>Training</td><td>DeepSpeed, Megatron, FSDP</td><td>Distributed training framework</td></tr>
            <tr><td>Inference</td><td>vLLM, TensorRT, ONNX</td><td>Optimized serving</td></tr>
            <tr><td>MLOps</td><td>MLflow, W&B, DVC</td><td>Experiment tracking & versioning</td></tr>
            <tr><td>Data</td><td>Hugging Face Datasets, DuckDB</td><td>Dataset management</td></tr>
            <tr><td>Fine-tuning</td><td>LoRA, QLoRA, PEFT</td><td>Parameter-efficient fine-tuning</td></tr>
            <tr><td>Deployment</td><td>Triton, BentoML, FastAPI</td><td>Model serving</td></tr>
        </table>
    </div>

    <div class="success-box">
        <strong>Kesimpulan:</strong> Optimasi, Machine Learning, dan LLM adalah bidang yang sangat terhubung. Dari gradient descent sederhana hingga training GPT dengan triliunan parameter, fundamental-nya tetap sama: <strong>minimasi fungsi loss melalui optimasi iteratif</strong>. Pemahaman teori kompleksitas (P vs NP) membantu memahami mengapa banyak masalah ML membutuhkan heuristik dan approximation, sementara parallel computing memungkinkan kita melatih model besar dalam waktu yang reasonable.
    </div>
</div>

</section>
`;

// ============================================================
// CANVAS ANIMATIONS FOR ML SECTION
// ============================================================
function initMLAnimations() {
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

    // ---- 1. GRADIENT DESCENT ANIMATION ----
    (function initGradientDescent() {
        const cv = setupCanvas('canvas-gradient-descent', 700, 350);
        if (!cv) return;
        const { ctx, w, h } = cv;

        // Loss function: f(x) = 0.03*(x-100)^2 * (1 + 0.3*sin(0.05*x)) + 50
        function lossFunc(x) {
            return 0.00015 * Math.pow(x - 350, 2) * (1 + 0.4 * Math.sin(0.02 * x)) + 60;
        }

        function lossFuncDeriv(x) {
            const base = Math.pow(x - 350, 2);
            const sin_part = 1 + 0.4 * Math.sin(0.02 * x);
            const d_base = 2 * (x - 350);
            const d_sin = 0.4 * 0.02 * Math.cos(0.02 * x);
            return 0.00015 * (d_base * sin_part + base * d_sin);
        }

        let ballX = 80;
        let running = false;
        let animId = null;
        let trail = [];
        let lr = 0.02;

        function drawCurve() {
            ctx.clearRect(0, 0, w, h);

            // Grid
            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            ctx.lineWidth = 1;
            for (let i = 0; i < w; i += 50) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
            }
            for (let i = 0; i < h; i += 50) {
                ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke();
            }

            // Curve
            ctx.beginPath();
            ctx.strokeStyle = '#4fc3f7';
            ctx.lineWidth = 3;
            for (let x = 20; x < w - 20; x++) {
                const y = lossFunc(x);
                if (x === 20) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Trail
            for (let i = 0; i < trail.length; i++) {
                const alpha = 0.2 + 0.8 * (i / trail.length);
                ctx.fillStyle = `rgba(255, 152, 0, ${alpha})`;
                ctx.beginPath();
                ctx.arc(trail[i].x, trail[i].y, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Ball
            const ballY = lossFunc(ballX);
            const gradient = ctx.createRadialGradient(ballX, ballY - 8, 2, ballX, ballY - 8, 14);
            gradient.addColorStop(0, '#ff5722');
            gradient.addColorStop(1, '#ff9800');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(ballX, ballY - 8, 10, 0, Math.PI * 2);
            ctx.fill();

            // Shadow
            ctx.fillStyle = 'rgba(255, 87, 34, 0.3)';
            ctx.beginPath();
            ctx.ellipse(ballX, ballY + 2, 12, 4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Labels
            ctx.fillStyle = '#fff';
            ctx.font = '13px Inter, sans-serif';
            ctx.fillText('Loss Function f(x)', 30, 25);
            ctx.fillStyle = '#ff9800';
            ctx.fillText(`x = ${ballX.toFixed(0)}  loss = ${ballY.toFixed(1)}  LR = ${lr}`, 30, 45);

            // Gradient arrow
            const grad = lossFuncDeriv(ballX);
            const arrowLen = Math.min(Math.abs(grad) * 300, 80);
            const dir = grad > 0 ? -1 : 1;
            ctx.strokeStyle = '#4caf50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(ballX, ballY - 25);
            ctx.lineTo(ballX + dir * arrowLen, ballY - 25);
            ctx.stroke();
            // Arrowhead
            ctx.fillStyle = '#4caf50';
            ctx.beginPath();
            ctx.moveTo(ballX + dir * arrowLen, ballY - 30);
            ctx.lineTo(ballX + dir * arrowLen, ballY - 20);
            ctx.lineTo(ballX + dir * (arrowLen + 8), ballY - 25);
            ctx.fill();
            ctx.fillStyle = '#4caf50';
            ctx.font = '11px Inter';
            ctx.fillText('-gradient', ballX + dir * arrowLen / 2 - 25, ballY - 33);
        }

        function step() {
            const grad = lossFuncDeriv(ballX);
            trail.push({ x: ballX, y: lossFunc(ballX) });
            if (trail.length > 100) trail.shift();
            ballX -= lr * grad * 500;
            ballX = Math.max(25, Math.min(w - 25, ballX));
            drawCurve();

            if (running && Math.abs(grad) > 0.0001) {
                animId = requestAnimationFrame(step);
            } else {
                running = false;
            }
        }

        document.getElementById('btn-gd-start')?.addEventListener('click', () => {
            if (running) return;
            lr = parseFloat(document.getElementById('select-lr')?.value || 0.02);
            running = true;
            step();
        });

        document.getElementById('btn-gd-reset')?.addEventListener('click', () => {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            ballX = 80;
            trail = [];
            drawCurve();
        });

        drawCurve();
    })();

    // ---- 2. NEURAL NETWORK FORWARD PASS ----
    (function initNNForward() {
        const cv = setupCanvas('canvas-nn-forward', 700, 400);
        if (!cv) return;
        const { ctx, w, h } = cv;

        const layers = [
            { n: 3, label: 'Input', color: '#4fc3f7' },
            { n: 5, label: 'Hidden 1', color: '#ab47bc' },
            { n: 5, label: 'Hidden 2', color: '#ff7043' },
            { n: 4, label: 'Hidden 3', color: '#66bb6a' },
            { n: 2, label: 'Output', color: '#ffd54f' }
        ];

        const layerX = [];
        const gap = w / (layers.length + 1);
        for (let i = 0; i < layers.length; i++) {
            layerX.push(gap * (i + 1));
        }

        function nodeY(layerIdx, nodeIdx) {
            const n = layers[layerIdx].n;
            const totalH = (n - 1) * 55;
            const startY = (h - totalH) / 2;
            return startY + nodeIdx * 55;
        }

        let activeLayer = -1;
        let activeSignals = [];
        let animating = false;
        let animId = null;

        function drawNetwork(highlightLayer) {
            ctx.clearRect(0, 0, w, h);

            // Title
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Neural Network - Forward Pass', w / 2, 22);

            // Connections
            for (let l = 0; l < layers.length - 1; l++) {
                for (let i = 0; i < layers[l].n; i++) {
                    for (let j = 0; j < layers[l + 1].n; j++) {
                        const x1 = layerX[l], y1 = nodeY(l, i);
                        const x2 = layerX[l + 1], y2 = nodeY(l + 1, j);
                        const isActive = l < highlightLayer;
                        ctx.strokeStyle = isActive ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.07)';
                        ctx.lineWidth = isActive ? 1.5 : 0.8;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
            }

            // Signals
            for (const sig of activeSignals) {
                ctx.fillStyle = `rgba(255, 235, 59, ${sig.alpha})`;
                ctx.beginPath();
                ctx.arc(sig.x, sig.y, 4, 0, Math.PI * 2);
                ctx.fill();
            }

            // Nodes
            for (let l = 0; l < layers.length; l++) {
                for (let i = 0; i < layers[l].n; i++) {
                    const x = layerX[l], y = nodeY(l, i);
                    const isActive = l <= highlightLayer;
                    const r = 16;

                    if (isActive) {
                        ctx.shadowColor = layers[l].color;
                        ctx.shadowBlur = 15;
                    }

                    ctx.fillStyle = isActive ? layers[l].color : 'rgba(255,255,255,0.15)';
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.shadowBlur = 0;

                    if (isActive) {
                        ctx.fillStyle = '#000';
                        ctx.font = 'bold 10px JetBrains Mono';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText((Math.random()).toFixed(1), x, y);
                    }
                }
                // Layer labels
                ctx.fillStyle = 'rgba(255,255,255,0.6)';
                ctx.font = '11px Inter';
                ctx.textAlign = 'center';
                ctx.fillText(layers[l].label, layerX[l], h - 15);
            }
            ctx.textAlign = 'start';
            ctx.textBaseline = 'alphabetic';
        }

        function animateForward() {
            if (animating) return;
            animating = true;
            activeLayer = -1;
            activeSignals = [];

            function nextLayer() {
                activeLayer++;
                if (activeLayer >= layers.length) {
                    animating = false;
                    return;
                }

                // Create signals for connections
                if (activeLayer > 0) {
                    const l = activeLayer - 1;
                    for (let i = 0; i < layers[l].n; i++) {
                        for (let j = 0; j < layers[l + 1].n; j++) {
                            activeSignals.push({
                                x1: layerX[l], y1: nodeY(l, i),
                                x2: layerX[l + 1], y2: nodeY(l + 1, j),
                                x: layerX[l], y: nodeY(l, i),
                                t: 0, alpha: 1
                            });
                        }
                    }
                }

                let frame = 0;
                const totalFrames = 40;

                function tick() {
                    frame++;
                    const progress = frame / totalFrames;

                    // Update signals
                    for (const sig of activeSignals) {
                        if (sig.t < 1) {
                            sig.t = Math.min(1, sig.t + 0.04);
                            sig.x = sig.x1 + (sig.x2 - sig.x1) * sig.t;
                            sig.y = sig.y1 + (sig.y2 - sig.y1) * sig.t;
                            if (sig.t >= 1) sig.alpha = 0;
                        }
                    }
                    activeSignals = activeSignals.filter(s => s.alpha > 0);

                    drawNetwork(activeLayer);

                    if (frame < totalFrames) {
                        animId = requestAnimationFrame(tick);
                    } else {
                        setTimeout(nextLayer, 100);
                    }
                }
                tick();
            }
            nextLayer();
        }

        document.getElementById('btn-nn-forward')?.addEventListener('click', animateForward);
        document.getElementById('btn-nn-reset')?.addEventListener('click', () => {
            animating = false;
            if (animId) cancelAnimationFrame(animId);
            activeLayer = -1;
            activeSignals = [];
            drawNetwork(-1);
        });

        drawNetwork(-1);
    })();

    // ---- 3. ATTENTION MECHANISM HEATMAP ----
    (function initAttention() {
        const cv = setupCanvas('canvas-attention', 700, 380);
        if (!cv) return;
        const { ctx, w, h } = cv;

        const tokens = ['Kucing', 'tidur', 'di', 'atas', 'sofa', 'merah'];
        const n = tokens.length;

        // Simulated attention weights (row attends to col)
        const attnWeights = [
            [0.35, 0.25, 0.05, 0.05, 0.10, 0.20],
            [0.20, 0.30, 0.05, 0.05, 0.25, 0.15],
            [0.10, 0.10, 0.20, 0.30, 0.20, 0.10],
            [0.05, 0.05, 0.20, 0.15, 0.40, 0.15],
            [0.15, 0.15, 0.10, 0.15, 0.25, 0.20],
            [0.05, 0.05, 0.05, 0.10, 0.35, 0.40]
        ];

        let animProgress = 0;
        let animating = false;
        let animId = null;

        function draw(progress) {
            ctx.clearRect(0, 0, w, h);

            const cellSize = 42;
            const offsetX = 160;
            const offsetY = 80;

            // Title
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Self-Attention Heatmap', w / 2, 25);
            ctx.font = '11px Inter';
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fillText('Baris = token yang "memperhatikan", Kolom = token yang "diperhatikan"', w / 2, 45);

            // Column labels (Keys)
            ctx.fillStyle = '#4fc3f7';
            ctx.font = '12px JetBrains Mono';
            ctx.textAlign = 'center';
            for (let j = 0; j < n; j++) {
                ctx.fillText(tokens[j], offsetX + j * cellSize + cellSize / 2, offsetY - 10);
            }

            // Row labels (Queries) and heatmap
            for (let i = 0; i < n; i++) {
                // Row label
                ctx.fillStyle = '#ff7043';
                ctx.font = '12px JetBrains Mono';
                ctx.textAlign = 'right';
                ctx.fillText(tokens[i], offsetX - 12, offsetY + i * cellSize + cellSize / 2 + 4);

                for (let j = 0; j < n; j++) {
                    const cellProgress = Math.max(0, Math.min(1, (progress - (i * n + j) / (n * n)) * n * n / (n * 2)));
                    const weight = attnWeights[i][j] * cellProgress;
                    const x = offsetX + j * cellSize;
                    const y = offsetY + i * cellSize;

                    // Cell background
                    const r = Math.floor(255 * weight);
                    const g = Math.floor(235 * weight * 0.5);
                    const b = Math.floor(59 * weight);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.08, weight)})`;
                    ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

                    // Cell border
                    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

                    // Weight text
                    if (cellProgress > 0.5) {
                        ctx.fillStyle = weight > 0.2 ? '#fff' : 'rgba(255,255,255,0.5)';
                        ctx.font = '10px JetBrains Mono';
                        ctx.textAlign = 'center';
                        ctx.fillText((attnWeights[i][j]).toFixed(2), x + cellSize / 2, y + cellSize / 2 + 4);
                    }
                }
            }

            // Legend
            const legendX = offsetX + n * cellSize + 30;
            const legendY = offsetY;
            ctx.fillStyle = '#fff';
            ctx.font = '11px Inter';
            ctx.textAlign = 'left';
            ctx.fillText('Attention', legendX, legendY);
            ctx.fillText('Score:', legendX, legendY + 15);

            for (let i = 0; i <= 5; i++) {
                const v = i / 5;
                const ly = legendY + 35 + i * 22;
                const r = Math.floor(255 * v);
                const g = Math.floor(235 * v * 0.5);
                const b = Math.floor(59 * v);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.15, v)})`;
                ctx.fillRect(legendX, ly, 20, 16);
                ctx.fillStyle = 'rgba(255,255,255,0.6)';
                ctx.font = '10px JetBrains Mono';
                ctx.fillText((v * 0.4).toFixed(2), legendX + 26, ly + 12);
            }

            // Explanation
            const expY = offsetY + n * cellSize + 25;
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.font = '12px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Contoh: "sofa" memperhatikan "merah" (0.35) dan "atas" (0.15) - karena "sofa merah" dan "di atas sofa"', w / 2, expY);

            ctx.textAlign = 'start';
        }

        function animate() {
            if (!animating) return;
            animProgress += 0.015;
            if (animProgress >= 1.5) {
                animProgress = 1.5;
                animating = false;
            }
            draw(animProgress);
            if (animating) {
                animId = requestAnimationFrame(animate);
            }
        }

        document.getElementById('btn-attn-animate')?.addEventListener('click', () => {
            if (animating) return;
            animProgress = 0;
            animating = true;
            animate();
        });

        document.getElementById('btn-attn-reset')?.addEventListener('click', () => {
            animating = false;
            if (animId) cancelAnimationFrame(animId);
            animProgress = 0;
            draw(0);
        });

        draw(0);
    })();
}
