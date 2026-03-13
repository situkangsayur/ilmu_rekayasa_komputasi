// ====================== OOP & SOLID (ENHANCED) ======================
// Overrides the basic OOP section with comprehensive multi-language coverage
// Covers: Go, Java, JavaScript/TypeScript (Next.js)

sections.oop = () => `
<h1 class="section-title animate-in">${t('OOP & Prinsip SOLID', 'OOP & SOLID Principles')}</h1>
<p class="section-subtitle animate-in">${t('Object-Oriented Programming & SOLID dalam Tiga Bahasa: Go, Java, dan JavaScript/TypeScript (Next.js)', 'Object-Oriented Programming & SOLID in Three Languages: Go, Java, and JavaScript/TypeScript (Next.js)')}</p>

<!-- ==================== LANGUAGE COMPARISON CARDS ==================== -->
<div class="comparison-grid animate-in" style="margin-bottom:2rem">
    <div class="lang-card">
        <div class="lang-header" style="background:linear-gradient(135deg,#00ADD8,#007d9c)">
            <span class="lang-icon">🔷</span>
            <span class="lang-name">Go</span>
        </div>
        <p style="padding:0.8rem;font-size:0.85rem">${t('Tidak memiliki class/inheritance tradisional. Menggunakan <strong>struct + interface implisit + komposisi</strong>. Filosofi: \"composition over inheritance\".', 'No traditional class/inheritance. Uses <strong>struct + implicit interface + composition</strong>. Philosophy: \"composition over inheritance\".')}</p>
    </div>
    <div class="lang-card">
        <div class="lang-header" style="background:linear-gradient(135deg,#f89820,#e76f00)">
            <span class="lang-icon">☕</span>
            <span class="lang-name">Java</span>
        </div>
        <p style="padding:0.8rem;font-size:0.85rem">${t('OOP klasik dengan <strong>class, extends, implements, abstract</strong>. Semua adalah object (kecuali primitif). Mendukung penuh 4 pilar OOP.', 'Classic OOP with <strong>class, extends, implements, abstract</strong>. Everything is an object (except primitives). Fully supports all 4 OOP pillars.')}</p>
    </div>
    <div class="lang-card">
        <div class="lang-header" style="background:linear-gradient(135deg,#3178c6,#235a97)">
            <span class="lang-icon">🟦</span>
            <span class="lang-name">JS / TypeScript</span>
        </div>
        <p style="padding:0.8rem;font-size:0.85rem">${t('Prototype-based OOP + class syntax (ES6). TypeScript menambahkan <strong>access modifiers, interface, abstract class</strong>. Digunakan dalam konteks Next.js.', 'Prototype-based OOP + class syntax (ES6). TypeScript adds <strong>access modifiers, interface, abstract class</strong>. Used in the Next.js context.')}</p>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 1: 4 PILAR OOP
     ===================================================================== -->
<h2 class="animate-in">${t('1. Empat Pilar OOP', '1. Four Pillars of OOP')}</h2>

<!-- ==================== 1A. ENCAPSULATION ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--accent)"><span class="badge-blue">${t('Pilar 1', 'Pillar 1')}</span> Encapsulation (${t('Enkapsulasi', 'Encapsulation')})</h3>
    <p>${t('Enkapsulasi adalah konsep <strong>menyembunyikan data internal</strong> dari dunia luar dan hanya menyediakan akses melalui method yang terkontrol. Tujuannya melindungi integritas data dan mengurangi ketergantungan antar komponen.', 'Encapsulation is the concept of <strong>hiding internal data</strong> from the outside world and only providing access through controlled methods. Its purpose is to protect data integrity and reduce coupling between components.')}</p>

    <div class="info-box">
        <strong>${t('Prinsip Utama:', 'Key Principle:')}</strong> ${t('Data internal (state) harus di-private, akses hanya melalui getter/setter atau method publik yang terdefinisi. Ini mencegah modifikasi tidak sah dan memastikan validasi data.', 'Internal data (state) should be private, accessed only through defined getter/setter or public methods. This prevents unauthorized modifications and ensures data validation.')}
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="enc-java">Java</button>
        <button class="tab-btn" data-tab="enc-go">Go</button>
        <button class="tab-btn" data-tab="enc-ts">TypeScript</button>
    </div>

    <div data-tab-content="enc-java" class="tab-content active">
        <p><strong>Java</strong> ${t('menggunakan access modifier', 'uses access modifiers')} <code>private</code>, <code>protected</code>, <code>public</code>:</p>
        <div class="code-block"><span class="kw">public class</span> <span class="type">BankAccount</span> {
    <span class="kw">private</span> <span class="type">String</span> accountId;      <span class="cm">// hanya bisa diakses dari dalam class</span>
    <span class="kw">private</span> <span class="type">double</span> balance;
    <span class="kw">private</span> <span class="type">String</span> ownerName;

    <span class="kw">public</span> <span class="fn">BankAccount</span>(<span class="type">String</span> id, <span class="type">String</span> owner, <span class="type">double</span> initialBalance) {
        <span class="kw">this</span>.accountId = id;
        <span class="kw">this</span>.ownerName = owner;
        <span class="kw">this</span>.balance = initialBalance;
    }

    <span class="cm">// Getter - akses terkontrol</span>
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">getBalance</span>() {
        <span class="kw">return this</span>.balance;
    }

    <span class="kw">public</span> <span class="type">String</span> <span class="fn">getOwnerName</span>() {
        <span class="kw">return this</span>.ownerName;
    }

    <span class="cm">// Tidak ada setBalance() langsung - harus melalui method bisnis</span>
    <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="type">double</span> amount) {
        <span class="kw">if</span> (amount <= <span class="num">0</span>) <span class="kw">throw new</span> <span class="type">IllegalArgumentException</span>(<span class="str">"Jumlah harus positif"</span>);
        <span class="kw">this</span>.balance += amount;
    }

    <span class="kw">public void</span> <span class="fn">withdraw</span>(<span class="type">double</span> amount) {
        <span class="kw">if</span> (amount > <span class="kw">this</span>.balance) <span class="kw">throw new</span> <span class="type">InsufficientFundsException</span>();
        <span class="kw">this</span>.balance -= amount;
    }
}</div>
    </div>

    <div data-tab-content="enc-go" class="tab-content">
        <p><strong>Go</strong> ${t('menggunakan huruf besar (exported) vs huruf kecil (unexported) untuk enkapsulasi:', 'uses uppercase (exported) vs lowercase (unexported) for encapsulation:')} </p>
        <div class="code-block"><span class="kw">package</span> bank

<span class="cm">// BankAccount - huruf besar = exported (publik)</span>
<span class="kw">type</span> <span class="type">BankAccount</span> <span class="kw">struct</span> {
    accountId <span class="type">string</span>   <span class="cm">// huruf kecil = unexported (private)</span>
    balance   <span class="type">float64</span>  <span class="cm">// tidak bisa diakses dari luar package</span>
    ownerName <span class="type">string</span>
}

<span class="cm">// NewBankAccount - constructor function (konvensi Go)</span>
<span class="kw">func</span> <span class="fn">NewBankAccount</span>(id, owner <span class="type">string</span>, initial <span class="type">float64</span>) *<span class="type">BankAccount</span> {
    <span class="kw">return</span> &<span class="type">BankAccount</span>{
        accountId: id,
        balance:   initial,
        ownerName: owner,
    }
}

<span class="cm">// Balance - getter (huruf besar = exported)</span>
<span class="kw">func</span> (a *<span class="type">BankAccount</span>) <span class="fn">Balance</span>() <span class="type">float64</span> {
    <span class="kw">return</span> a.balance
}

<span class="cm">// Deposit - method publik dengan validasi</span>
<span class="kw">func</span> (a *<span class="type">BankAccount</span>) <span class="fn">Deposit</span>(amount <span class="type">float64</span>) <span class="type">error</span> {
    <span class="kw">if</span> amount <= <span class="num">0</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"jumlah harus positif"</span>)
    }
    a.balance += amount
    <span class="kw">return nil</span>
}

<span class="kw">func</span> (a *<span class="type">BankAccount</span>) <span class="fn">Withdraw</span>(amount <span class="type">float64</span>) <span class="type">error</span> {
    <span class="kw">if</span> amount > a.balance {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"saldo tidak cukup"</span>)
    }
    a.balance -= amount
    <span class="kw">return nil</span>
}</div>
    </div>

    <div data-tab-content="enc-ts" class="tab-content">
        <p><strong>TypeScript</strong> ${t('dengan access modifier + JavaScript private fields (#):', 'with access modifiers + JavaScript private fields (#):')} </p>
        <div class="code-block"><span class="cm">// TypeScript (Next.js context)</span>
<span class="kw">class</span> <span class="type">BankAccount</span> {
    <span class="kw">private</span> accountId: <span class="type">string</span>;
    <span class="kw">private</span> #balance: <span class="type">number</span>;       <span class="cm">// JS private field (runtime enforced)</span>
    <span class="kw">private</span> ownerName: <span class="type">string</span>;

    <span class="kw">constructor</span>(id: <span class="type">string</span>, owner: <span class="type">string</span>, initial: <span class="type">number</span>) {
        <span class="kw">this</span>.accountId = id;
        <span class="kw">this</span>.ownerName = owner;
        <span class="kw">this</span>.#balance = initial;
    }

    <span class="cm">// Getter TypeScript</span>
    <span class="kw">get</span> <span class="fn">balance</span>(): <span class="type">number</span> {
        <span class="kw">return this</span>.#balance;
    }

    <span class="fn">deposit</span>(amount: <span class="type">number</span>): <span class="type">void</span> {
        <span class="kw">if</span> (amount <= <span class="num">0</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">"Jumlah harus positif"</span>);
        <span class="kw">this</span>.#balance += amount;
    }

    <span class="fn">withdraw</span>(amount: <span class="type">number</span>): <span class="type">void</span> {
        <span class="kw">if</span> (amount > <span class="kw">this</span>.#balance) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">"Saldo tidak cukup"</span>);
        <span class="kw">this</span>.#balance -= amount;
    }
}

<span class="cm">// Penggunaan di Next.js API Route</span>
<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> { id, owner, amount } = <span class="kw">await</span> req.<span class="fn">json</span>();
    <span class="kw">const</span> account = <span class="kw">new</span> <span class="type">BankAccount</span>(id, owner, <span class="num">0</span>);
    account.<span class="fn">deposit</span>(amount);
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ balance: account.balance });
}</div>
    </div>
</div>

<!-- ==================== 1B. ABSTRACTION ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--green)"><span class="badge-green">${t('Pilar 2', 'Pillar 2')}</span> Abstraction (${t('Abstraksi', 'Abstraction')})</h3>
    <p>${t('Abstraksi berarti <strong>menyembunyikan kompleksitas implementasi</strong> dan hanya menampilkan fungsionalitas esensial. Pengguna tidak perlu tahu bagaimana mesin bekerja, cukup tahu cara menggunakannya.', 'Abstraction means <strong>hiding implementation complexity</strong> and only exposing essential functionality. Users don\'t need to know how the engine works, just how to use it.')}</p>

    <div class="info-box">
        <strong>${t('Analogi:', 'Analogy:')}</strong> ${t('Saat Anda mengendarai mobil, Anda cukup tahu menekan gas dan rem. Anda tidak perlu tahu cara kerja mesin pembakaran internal di baliknya.', 'When you drive a car, you only need to know how to press the gas and brake pedals. You don\'t need to know how the internal combustion engine works behind it.')}
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="abs-java">Java</button>
        <button class="tab-btn" data-tab="abs-go">Go</button>
        <button class="tab-btn" data-tab="abs-ts">TypeScript</button>
    </div>

    <div data-tab-content="abs-java" class="tab-content active">
        <p><strong>Java</strong> - abstract class ${t('dan', 'and')} interface:</p>
        <div class="code-block"><span class="cm">// Abstract class - tidak bisa di-instantiate langsung</span>
<span class="kw">public abstract class</span> <span class="type">PaymentGateway</span> {
    <span class="kw">protected</span> <span class="type">String</span> merchantId;

    <span class="kw">public</span> <span class="fn">PaymentGateway</span>(<span class="type">String</span> merchantId) {
        <span class="kw">this</span>.merchantId = merchantId;
    }

    <span class="cm">// Abstract method - harus diimplementasikan oleh subclass</span>
    <span class="kw">public abstract</span> <span class="type">PaymentResult</span> <span class="fn">processPayment</span>(<span class="type">double</span> amount);
    <span class="kw">public abstract void</span> <span class="fn">refund</span>(<span class="type">String</span> transactionId);

    <span class="cm">// Method konkrit - bisa dipakai langsung</span>
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">getMerchantId</span>() {
        <span class="kw">return this</span>.merchantId;
    }
}

<span class="cm">// Interface - kontrak murni</span>
<span class="kw">public interface</span> <span class="type">Notifiable</span> {
    <span class="type">void</span> <span class="fn">sendNotification</span>(<span class="type">String</span> message);
}

<span class="cm">// Implementasi konkrit</span>
<span class="kw">public class</span> <span class="type">StripeGateway</span> <span class="kw">extends</span> <span class="type">PaymentGateway</span> <span class="kw">implements</span> <span class="type">Notifiable</span> {
    <span class="kw">public</span> <span class="fn">StripeGateway</span>(<span class="type">String</span> merchantId) { <span class="kw">super</span>(merchantId); }

    <span class="cm">@Override</span>
    <span class="kw">public</span> <span class="type">PaymentResult</span> <span class="fn">processPayment</span>(<span class="type">double</span> amount) {
        <span class="cm">// Detail implementasi Stripe tersembunyi</span>
        <span class="kw">return</span> stripeApi.<span class="fn">charge</span>(merchantId, amount);
    }

    <span class="cm">@Override</span>
    <span class="kw">public void</span> <span class="fn">refund</span>(<span class="type">String</span> txId) { stripeApi.<span class="fn">refund</span>(txId); }

    <span class="cm">@Override</span>
    <span class="kw">public void</span> <span class="fn">sendNotification</span>(<span class="type">String</span> msg) { <span class="cm">/* email logic */</span> }
}</div>
    </div>

    <div data-tab-content="abs-go" class="tab-content">
        <p><strong>Go</strong> ${t('menggunakan <strong>interface implisit</strong> - tidak perlu keyword', 'uses <strong>implicit interfaces</strong> - no need for the keyword')} <code>implements</code>:</p>
        <div class="code-block"><span class="cm">// Interface di Go - kontrak implisit</span>
<span class="kw">type</span> <span class="type">PaymentGateway</span> <span class="kw">interface</span> {
    <span class="fn">ProcessPayment</span>(amount <span class="type">float64</span>) (*<span class="type">PaymentResult</span>, <span class="type">error</span>)
    <span class="fn">Refund</span>(transactionID <span class="type">string</span>) <span class="type">error</span>
}

<span class="kw">type</span> <span class="type">Notifiable</span> <span class="kw">interface</span> {
    <span class="fn">SendNotification</span>(message <span class="type">string</span>) <span class="type">error</span>
}

<span class="cm">// StripeGateway secara otomatis mengimplementasi PaymentGateway</span>
<span class="cm">// karena memiliki semua method yang diperlukan (implisit!)</span>
<span class="kw">type</span> <span class="type">StripeGateway</span> <span class="kw">struct</span> {
    merchantID <span class="type">string</span>
    apiKey     <span class="type">string</span>
}

<span class="kw">func</span> <span class="fn">NewStripeGateway</span>(merchantID, apiKey <span class="type">string</span>) *<span class="type">StripeGateway</span> {
    <span class="kw">return</span> &<span class="type">StripeGateway</span>{merchantID: merchantID, apiKey: apiKey}
}

<span class="kw">func</span> (s *<span class="type">StripeGateway</span>) <span class="fn">ProcessPayment</span>(amount <span class="type">float64</span>) (*<span class="type">PaymentResult</span>, <span class="type">error</span>) {
    <span class="cm">// Detail implementasi tersembunyi dari pemanggil</span>
    <span class="kw">return</span> s.<span class="fn">callStripeAPI</span>(<span class="str">"charge"</span>, amount)
}

<span class="kw">func</span> (s *<span class="type">StripeGateway</span>) <span class="fn">Refund</span>(txID <span class="type">string</span>) <span class="type">error</span> {
    <span class="kw">return</span> s.<span class="fn">callStripeRefund</span>(txID)
}

<span class="cm">// Fungsi menerima interface, bukan struct konkrit</span>
<span class="kw">func</span> <span class="fn">ProcessOrder</span>(pg <span class="type">PaymentGateway</span>, amount <span class="type">float64</span>) <span class="type">error</span> {
    result, err := pg.<span class="fn">ProcessPayment</span>(amount)
    <span class="cm">// pg bisa StripeGateway, MidtransGateway, dll.</span>
    <span class="kw">return</span> err
}</div>
    </div>

    <div data-tab-content="abs-ts" class="tab-content">
        <p><strong>TypeScript</strong> - abstract class ${t('dan', 'and')} interface:</p>
        <div class="code-block"><span class="cm">// Abstract class di TypeScript</span>
<span class="kw">abstract class</span> <span class="type">PaymentGateway</span> {
    <span class="kw">protected</span> merchantId: <span class="type">string</span>;

    <span class="kw">constructor</span>(merchantId: <span class="type">string</span>) {
        <span class="kw">this</span>.merchantId = merchantId;
    }

    <span class="cm">// Abstract - harus diimplementasikan</span>
    <span class="kw">abstract</span> <span class="fn">processPayment</span>(amount: <span class="type">number</span>): <span class="type">Promise</span>&lt;<span class="type">PaymentResult</span>&gt;;
    <span class="kw">abstract</span> <span class="fn">refund</span>(transactionId: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
}

<span class="cm">// Interface TypeScript</span>
<span class="kw">interface</span> <span class="type">Notifiable</span> {
    <span class="fn">sendNotification</span>(message: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
}

<span class="cm">// Implementasi untuk Next.js</span>
<span class="kw">class</span> <span class="type">MidtransGateway</span> <span class="kw">extends</span> <span class="type">PaymentGateway</span> <span class="kw">implements</span> <span class="type">Notifiable</span> {
    <span class="kw">async</span> <span class="fn">processPayment</span>(amount: <span class="type">number</span>): <span class="type">Promise</span>&lt;<span class="type">PaymentResult</span>&gt; {
        <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.midtrans.com/charge"</span>, {
            method: <span class="str">"POST"</span>,
            body: <span class="type">JSON</span>.<span class="fn">stringify</span>({ merchant: <span class="kw">this</span>.merchantId, amount }),
        });
        <span class="kw">return</span> res.<span class="fn">json</span>();
    }

    <span class="kw">async</span> <span class="fn">refund</span>(txId: <span class="type">string</span>) { <span class="cm">/* ... */</span> }
    <span class="kw">async</span> <span class="fn">sendNotification</span>(msg: <span class="type">string</span>) { <span class="cm">/* ... */</span> }
}

<span class="cm">// Next.js API Route - menggunakan abstraksi</span>
<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> gateway: <span class="type">PaymentGateway</span> = <span class="kw">new</span> <span class="type">MidtransGateway</span>(<span class="str">"merchant-123"</span>);
    <span class="kw">const</span> { amount } = <span class="kw">await</span> req.<span class="fn">json</span>();
    <span class="kw">const</span> result = <span class="kw">await</span> gateway.<span class="fn">processPayment</span>(amount);
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>(result);
}</div>
    </div>
</div>

<!-- ==================== 1C. INHERITANCE ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)"><span class="badge-purple">${t('Pilar 3', 'Pillar 3')}</span> Inheritance (${t('Pewarisan', 'Inheritance')})</h3>
    <p>${t('Inheritance memungkinkan sebuah class <strong>mewarisi properti dan method</strong> dari class lain. Namun, Go <strong>tidak mendukung inheritance tradisional</strong> dan menggantinya dengan komposisi.', 'Inheritance allows a class to <strong>inherit properties and methods</strong> from another class. However, Go <strong>does not support traditional inheritance</strong> and replaces it with composition.')}</p>

    <div class="warn-box">
        <strong>${t('Perhatian:', 'Warning:')}</strong> ${t('Go TIDAK memiliki inheritance! Go menggunakan <strong>embedding (komposisi)</strong> yang secara konseptual berbeda. Ini adalah pilihan desain yang disengaja untuk menghindari masalah deep hierarchy dan diamond problem.', 'Go does NOT have inheritance! Go uses <strong>embedding (composition)</strong> which is conceptually different. This is a deliberate design choice to avoid deep hierarchy and diamond problem issues.')}
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="inh-java">Java</button>
        <button class="tab-btn" data-tab="inh-go">Go</button>
        <button class="tab-btn" data-tab="inh-ts">TypeScript</button>
    </div>

    <div data-tab-content="inh-java" class="tab-content active">
        <p><strong>Java</strong> - ${t('inheritance tradisional dengan', 'traditional inheritance with')} <code>extends</code> ${t('dan', 'and')} <code>super()</code>:</p>
        <div class="code-block"><span class="kw">public class</span> <span class="type">Vehicle</span> {
    <span class="kw">protected</span> <span class="type">String</span> brand;
    <span class="kw">protected</span> <span class="type">int</span> year;

    <span class="kw">public</span> <span class="fn">Vehicle</span>(<span class="type">String</span> brand, <span class="type">int</span> year) {
        <span class="kw">this</span>.brand = brand;
        <span class="kw">this</span>.year = year;
    }

    <span class="kw">public</span> <span class="type">String</span> <span class="fn">getInfo</span>() {
        <span class="kw">return</span> brand + <span class="str">" ("</span> + year + <span class="str">")"</span>;
    }
}

<span class="cm">// Car mewarisi semua properti dan method dari Vehicle</span>
<span class="kw">public class</span> <span class="type">Car</span> <span class="kw">extends</span> <span class="type">Vehicle</span> {
    <span class="kw">private</span> <span class="type">int</span> doors;

    <span class="kw">public</span> <span class="fn">Car</span>(<span class="type">String</span> brand, <span class="type">int</span> year, <span class="type">int</span> doors) {
        <span class="kw">super</span>(brand, year);  <span class="cm">// panggil constructor parent</span>
        <span class="kw">this</span>.doors = doors;
    }

    <span class="cm">@Override</span>
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">getInfo</span>() {
        <span class="kw">return super</span>.<span class="fn">getInfo</span>() + <span class="str">" - "</span> + doors + <span class="str">" pintu"</span>;
    }
}

<span class="cm">// ElectricCar extends Car (multi-level inheritance)</span>
<span class="kw">public class</span> <span class="type">ElectricCar</span> <span class="kw">extends</span> <span class="type">Car</span> {
    <span class="kw">private</span> <span class="type">int</span> batteryCapacity;

    <span class="kw">public</span> <span class="fn">ElectricCar</span>(<span class="type">String</span> brand, <span class="type">int</span> year, <span class="type">int</span> doors, <span class="type">int</span> battery) {
        <span class="kw">super</span>(brand, year, doors);
        <span class="kw">this</span>.batteryCapacity = battery;
    }
}</div>
    </div>

    <div data-tab-content="inh-go" class="tab-content">
        <p><strong>Go</strong> - <strong>${t('TIDAK ADA inheritance!', 'NO inheritance!')}</strong> ${t('Menggunakan embedding (komposisi):', 'Uses embedding (composition):')} </p>
        <div class="code-block"><span class="cm">// Go menggunakan KOMPOSISI, bukan inheritance</span>
<span class="kw">type</span> <span class="type">Vehicle</span> <span class="kw">struct</span> {
    Brand <span class="type">string</span>
    Year  <span class="type">int</span>
}

<span class="kw">func</span> (v <span class="type">Vehicle</span>) <span class="fn">GetInfo</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"%s (%d)"</span>, v.Brand, v.Year)
}

<span class="cm">// Car MENG-EMBED Vehicle (bukan mewarisi!)</span>
<span class="kw">type</span> <span class="type">Car</span> <span class="kw">struct</span> {
    <span class="type">Vehicle</span>       <span class="cm">// embedded struct - promosi method</span>
    Doors <span class="type">int</span>
}

<span class="cm">// Override method (bukan real override, ini shadowing)</span>
<span class="kw">func</span> (c <span class="type">Car</span>) <span class="fn">GetInfo</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"%s - %d pintu"</span>, c.Vehicle.<span class="fn">GetInfo</span>(), c.Doors)
}

<span class="cm">// Penggunaan:</span>
<span class="cm">// car := Car{Vehicle: Vehicle{Brand: "Toyota", Year: 2024}, Doors: 4}</span>
<span class="cm">// car.Brand      // langsung akses field Vehicle (promosi)</span>
<span class="cm">// car.GetInfo()  // panggil Car.GetInfo (shadowing)</span>

<span class="cm">// ElectricCar - komposisi berlapis</span>
<span class="kw">type</span> <span class="type">ElectricCar</span> <span class="kw">struct</span> {
    <span class="type">Car</span>
    BatteryCapacity <span class="type">int</span>
}

<span class="cm">// PENTING: Di Go, embedded struct BUKAN inheritance</span>
<span class="cm">// var v Vehicle = car  // ERROR! Car bukan subtype Vehicle</span></div>
    </div>

    <div data-tab-content="inh-ts" class="tab-content">
        <p><strong>TypeScript</strong> - ${t('class inheritance mirip Java:', 'class inheritance similar to Java:')} </p>
        <div class="code-block"><span class="kw">class</span> <span class="type">Vehicle</span> {
    <span class="kw">protected</span> brand: <span class="type">string</span>;
    <span class="kw">protected</span> year: <span class="type">number</span>;

    <span class="kw">constructor</span>(brand: <span class="type">string</span>, year: <span class="type">number</span>) {
        <span class="kw">this</span>.brand = brand;
        <span class="kw">this</span>.year = year;
    }

    <span class="fn">getInfo</span>(): <span class="type">string</span> {
        <span class="kw">return</span> <span class="str">\`\${this.brand} (\${this.year})\`</span>;
    }
}

<span class="kw">class</span> <span class="type">Car</span> <span class="kw">extends</span> <span class="type">Vehicle</span> {
    <span class="kw">private</span> doors: <span class="type">number</span>;

    <span class="kw">constructor</span>(brand: <span class="type">string</span>, year: <span class="type">number</span>, doors: <span class="type">number</span>) {
        <span class="kw">super</span>(brand, year);  <span class="cm">// wajib panggil super()</span>
        <span class="kw">this</span>.doors = doors;
    }

    <span class="kw">override</span> <span class="fn">getInfo</span>(): <span class="type">string</span> {
        <span class="kw">return</span> <span class="str">\`\${super.getInfo()} - \${this.doors} pintu\`</span>;
    }
}

<span class="cm">// Next.js React component dengan inheritance pattern</span>
<span class="kw">interface</span> <span class="type">VehicleCardProps</span> {
    vehicle: <span class="type">Vehicle</span>;
}

<span class="kw">const</span> <span class="fn">VehicleCard</span>: <span class="type">React.FC</span>&lt;<span class="type">VehicleCardProps</span>&gt; = ({ vehicle }) => (
    &lt;div className=<span class="str">"card"</span>&gt;
        &lt;h3&gt;{vehicle.<span class="fn">getInfo</span>()}&lt;/h3&gt;
    &lt;/div&gt;
);</div>
    </div>
</div>

<!-- ==================== 1D. POLYMORPHISM ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--red)"><span class="badge-red">${t('Pilar 4', 'Pillar 4')}</span> Polymorphism (${t('Polimorfisme', 'Polymorphism')})</h3>
    <p>${t('Polimorfisme memungkinkan <strong>satu interface untuk berbagai bentuk implementasi</strong>. Objek yang berbeda dapat merespons pesan yang sama dengan cara yang berbeda.', 'Polymorphism allows <strong>one interface for multiple forms of implementation</strong>. Different objects can respond to the same message in different ways.')}</p>

    <div class="success-box">
        <strong>${t('Kekuatan Polimorfisme:', 'The Power of Polymorphism:')}</strong> ${t('Kode bisa bekerja dengan tipe abstrak tanpa mengetahui tipe konkrit. Ini membuat sistem mudah di-extend tanpa mengubah kode yang ada.', 'Code can work with abstract types without knowing the concrete type. This makes the system easy to extend without modifying existing code.')}
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="poly-java">Java</button>
        <button class="tab-btn" data-tab="poly-go">Go</button>
        <button class="tab-btn" data-tab="poly-ts">TypeScript</button>
    </div>

    <div data-tab-content="poly-java" class="tab-content active">
        <div class="code-block"><span class="cm">// Interface sebagai kontrak polimorfisme</span>
<span class="kw">public interface</span> <span class="type">Shape</span> {
    <span class="type">double</span> <span class="fn">area</span>();
    <span class="type">String</span> <span class="fn">describe</span>();
}

<span class="kw">public class</span> <span class="type">Circle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">private</span> <span class="type">double</span> radius;
    <span class="kw">public</span> <span class="fn">Circle</span>(<span class="type">double</span> r) { <span class="kw">this</span>.radius = r; }

    <span class="cm">@Override</span>
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">area</span>() { <span class="kw">return</span> Math.PI * radius * radius; }

    <span class="cm">@Override</span>
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">describe</span>() { <span class="kw">return</span> <span class="str">"Lingkaran r="</span> + radius; }
}

<span class="kw">public class</span> <span class="type">Rectangle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">private</span> <span class="type">double</span> w, h;
    <span class="kw">public</span> <span class="fn">Rectangle</span>(<span class="type">double</span> w, <span class="type">double</span> h) { <span class="kw">this</span>.w = w; <span class="kw">this</span>.h = h; }

    <span class="cm">@Override</span>
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">area</span>() { <span class="kw">return</span> w * h; }

    <span class="cm">@Override</span>
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">describe</span>() { <span class="kw">return</span> <span class="str">"Persegi Panjang "</span> + w + <span class="str">"x"</span> + h; }
}

<span class="cm">// Polimorfisme - satu method menerima berbagai tipe</span>
<span class="kw">public</span> <span class="type">double</span> <span class="fn">totalArea</span>(<span class="type">List</span>&lt;<span class="type">Shape</span>&gt; shapes) {
    <span class="kw">return</span> shapes.<span class="fn">stream</span>().<span class="fn">mapToDouble</span>(<span class="type">Shape</span>::area).<span class="fn">sum</span>();
}</div>
    </div>

    <div data-tab-content="poly-go" class="tab-content">
        <p><strong>Go</strong> - ${t('interface satisfaction (polimorfisme tanpa hierarki):', 'interface satisfaction (polymorphism without hierarchy):')} </p>
        <div class="code-block"><span class="kw">type</span> <span class="type">Shape</span> <span class="kw">interface</span> {
    <span class="fn">Area</span>() <span class="type">float64</span>
    <span class="fn">Describe</span>() <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">Circle</span> <span class="kw">struct</span> { Radius <span class="type">float64</span> }

<span class="kw">func</span> (c <span class="type">Circle</span>) <span class="fn">Area</span>() <span class="type">float64</span> {
    <span class="kw">return</span> math.Pi * c.Radius * c.Radius
}
<span class="kw">func</span> (c <span class="type">Circle</span>) <span class="fn">Describe</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"Lingkaran r=%.1f"</span>, c.Radius)
}

<span class="kw">type</span> <span class="type">Rectangle</span> <span class="kw">struct</span> { W, H <span class="type">float64</span> }

<span class="kw">func</span> (r <span class="type">Rectangle</span>) <span class="fn">Area</span>() <span class="type">float64</span>    { <span class="kw">return</span> r.W * r.H }
<span class="kw">func</span> (r <span class="type">Rectangle</span>) <span class="fn">Describe</span>() <span class="type">string</span> {
    <span class="kw">return</span> fmt.<span class="fn">Sprintf</span>(<span class="str">"Persegi Panjang %.1fx%.1f"</span>, r.W, r.H)
}

<span class="cm">// Polimorfisme: fungsi menerima interface, bukan tipe konkrit</span>
<span class="kw">func</span> <span class="fn">TotalArea</span>(shapes []<span class="type">Shape</span>) <span class="type">float64</span> {
    total := <span class="num">0.0</span>
    <span class="kw">for</span> _, s := <span class="kw">range</span> shapes {
        total += s.<span class="fn">Area</span>()  <span class="cm">// bisa Circle, Rectangle, dll.</span>
    }
    <span class="kw">return</span> total
}

<span class="cm">// Penggunaan:</span>
<span class="cm">// shapes := []Shape{Circle{5}, Rectangle{3, 4}}</span>
<span class="cm">// fmt.Println(TotalArea(shapes))</span></div>
    </div>

    <div data-tab-content="poly-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript interface + duck typing</span>
<span class="kw">interface</span> <span class="type">Shape</span> {
    <span class="fn">area</span>(): <span class="type">number</span>;
    <span class="fn">describe</span>(): <span class="type">string</span>;
}

<span class="kw">class</span> <span class="type">Circle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">constructor</span>(<span class="kw">private</span> radius: <span class="type">number</span>) {}

    <span class="fn">area</span>(): <span class="type">number</span> { <span class="kw">return</span> Math.PI * <span class="kw">this</span>.radius ** <span class="num">2</span>; }
    <span class="fn">describe</span>(): <span class="type">string</span> { <span class="kw">return</span> <span class="str">\`Lingkaran r=\${this.radius}\`</span>; }
}

<span class="kw">class</span> <span class="type">Rectangle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">constructor</span>(<span class="kw">private</span> w: <span class="type">number</span>, <span class="kw">private</span> h: <span class="type">number</span>) {}

    <span class="fn">area</span>(): <span class="type">number</span> { <span class="kw">return this</span>.w * <span class="kw">this</span>.h; }
    <span class="fn">describe</span>(): <span class="type">string</span> { <span class="kw">return</span> <span class="str">\`Persegi \${this.w}x\${this.h}\`</span>; }
}

<span class="cm">// Polimorfisme</span>
<span class="kw">function</span> <span class="fn">totalArea</span>(shapes: <span class="type">Shape</span>[]): <span class="type">number</span> {
    <span class="kw">return</span> shapes.<span class="fn">reduce</span>((sum, s) => sum + s.<span class="fn">area</span>(), <span class="num">0</span>);
}

<span class="cm">// Duck typing di JS: objek apapun yang punya area() dan describe() bisa dipakai</span>
<span class="kw">const</span> triangle = {
    <span class="fn">area</span>() { <span class="kw">return</span> <span class="num">0.5</span> * <span class="num">3</span> * <span class="num">4</span>; },
    <span class="fn">describe</span>() { <span class="kw">return</span> <span class="str">"Segitiga"</span>; }
};

<span class="cm">// Next.js: Render shapes secara polimorfik</span>
<span class="kw">const</span> <span class="fn">ShapeList</span> = ({ shapes }: { shapes: <span class="type">Shape</span>[] }) => (
    &lt;ul&gt;
        {shapes.<span class="fn">map</span>((s, i) => (
            &lt;li key={i}&gt;{s.<span class="fn">describe</span>()} - Luas: {s.<span class="fn">area</span>().<span class="fn">toFixed</span>(<span class="num">2</span>)}&lt;/li&gt;
        ))}
    &lt;/ul&gt;
);</div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 2: SOLID PRINCIPLES
     ===================================================================== -->
<h2 class="animate-in">${t('2. Prinsip SOLID', '2. SOLID Principles')}</h2>

<div class="info-box animate-in">
    <strong>SOLID</strong> ${t('adalah lima prinsip desain OOP yang membantu membuat software yang mudah di-maintain, di-extend, dan di-test. Dikemukakan oleh Robert C. Martin (Uncle Bob).', 'is a set of five OOP design principles that help create software that is easy to maintain, extend, and test. Introduced by Robert C. Martin (Uncle Bob).')}
</div>

<div class="flow-diagram animate-in" style="margin-bottom:1.5rem">
    <div class="flow-node" style="background:rgba(56,189,248,0.15);border-color:var(--accent)"><strong>S</strong><br>Single Responsibility</div>
    <div class="flow-arrow">+</div>
    <div class="flow-node" style="background:rgba(52,211,153,0.15);border-color:var(--green)"><strong>O</strong><br>Open/Closed</div>
    <div class="flow-arrow">+</div>
    <div class="flow-node" style="background:rgba(167,139,250,0.15);border-color:var(--accent3)"><strong>L</strong><br>Liskov Substitution</div>
    <div class="flow-arrow">+</div>
    <div class="flow-node" style="background:rgba(251,146,60,0.15);border-color:var(--orange)"><strong>I</strong><br>Interface Segregation</div>
    <div class="flow-arrow">+</div>
    <div class="flow-node" style="background:rgba(248,113,113,0.15);border-color:var(--red)"><strong>D</strong><br>Dependency Inversion</div>
</div>

<!-- ==================== 2A. SINGLE RESPONSIBILITY ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--accent)"><span class="badge-blue">S</span> Single Responsibility Principle (SRP)</h3>
    <p><strong>${t('"Setiap class/module harus memiliki satu dan hanya satu alasan untuk berubah."', '"Every class/module should have one, and only one, reason to change."')}</strong></p>
    <p>${t('Sebuah class seharusnya hanya bertanggung jawab atas satu bagian fungsionalitas. Jika sebuah class melakukan banyak hal, perubahan pada satu fitur bisa merusak fitur lainnya.', 'A class should only be responsible for one part of the functionality. If a class does many things, changes to one feature could break other features.')}</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="srp-java">Java</button>
        <button class="tab-btn" data-tab="srp-go">Go</button>
        <button class="tab-btn" data-tab="srp-ts">TypeScript</button>
    </div>

    <div data-tab-content="srp-java" class="tab-content active">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span> ${t('Satu class menangani banyak tanggung jawab:', 'One class handles many responsibilities:')}</p>
        <div class="code-block"><span class="cm">// BURUK - class melakukan terlalu banyak hal</span>
<span class="kw">public class</span> <span class="type">UserService</span> {
    <span class="kw">public void</span> <span class="fn">createUser</span>(<span class="type">User</span> user) { <span class="cm">/* save ke DB */</span> }
    <span class="kw">public void</span> <span class="fn">sendEmail</span>(<span class="type">String</span> to, <span class="type">String</span> body) { <span class="cm">/* kirim email */</span> }
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">generateReport</span>() { <span class="cm">/* buat laporan */</span> }
    <span class="kw">public void</span> <span class="fn">logActivity</span>(<span class="type">String</span> msg) { <span class="cm">/* tulis log */</span> }
}</div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span> Setiap class satu tanggung jawab:</p>
        <div class="code-block"><span class="cm">// BAIK - setiap class punya satu tanggung jawab</span>
<span class="kw">public class</span> <span class="type">UserRepository</span> {
    <span class="kw">public void</span> <span class="fn">save</span>(<span class="type">User</span> user) { <span class="cm">/* simpan ke database */</span> }
    <span class="kw">public</span> <span class="type">User</span> <span class="fn">findById</span>(<span class="type">long</span> id) { <span class="cm">/* cari user */</span> }
}

<span class="kw">public class</span> <span class="type">EmailService</span> {
    <span class="kw">public void</span> <span class="fn">send</span>(<span class="type">String</span> to, <span class="type">String</span> body) { <span class="cm">/* kirim email */</span> }
}

<span class="kw">public class</span> <span class="type">ReportGenerator</span> {
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">generate</span>(<span class="type">List</span>&lt;<span class="type">User</span>&gt; users) { <span class="cm">/* buat laporan */</span> }
}

<span class="kw">public class</span> <span class="type">ActivityLogger</span> {
    <span class="kw">public void</span> <span class="fn">log</span>(<span class="type">String</span> message) { <span class="cm">/* tulis log */</span> }
}</div>
    </div>

    <div data-tab-content="srp-go" class="tab-content">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span></p>
        <div class="code-block"><span class="cm">// BURUK - satu struct melakukan semuanya</span>
<span class="kw">type</span> <span class="type">UserService</span> <span class="kw">struct</span> {
    db    *sql.<span class="type">DB</span>
    smtp  *smtp.<span class="type">Client</span>
}
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">CreateUser</span>(u <span class="type">User</span>) <span class="type">error</span>       { <span class="cm">/* DB + email + log */</span> }
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">SendEmail</span>(to, body <span class="type">string</span>) <span class="type">error</span> { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (s *<span class="type">UserService</span>) <span class="fn">GenerateReport</span>() <span class="type">string</span>       { <span class="cm">/* ... */</span> }</div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span></p>
        <div class="code-block"><span class="cm">// BAIK - setiap struct satu tanggung jawab</span>
<span class="kw">type</span> <span class="type">UserRepository</span> <span class="kw">struct</span> { db *sql.<span class="type">DB</span> }
<span class="kw">func</span> (r *<span class="type">UserRepository</span>) <span class="fn">Save</span>(u <span class="type">User</span>) <span class="type">error</span>     { <span class="cm">/* simpan */</span> }
<span class="kw">func</span> (r *<span class="type">UserRepository</span>) <span class="fn">FindByID</span>(id <span class="type">int</span>) (*<span class="type">User</span>, <span class="type">error</span>) { <span class="cm">/* cari */</span> }

<span class="kw">type</span> <span class="type">EmailSender</span> <span class="kw">struct</span> { client *smtp.<span class="type">Client</span> }
<span class="kw">func</span> (e *<span class="type">EmailSender</span>) <span class="fn">Send</span>(to, body <span class="type">string</span>) <span class="type">error</span> { <span class="cm">/* kirim */</span> }

<span class="kw">type</span> <span class="type">ReportGenerator</span> <span class="kw">struct</span>{}
<span class="kw">func</span> (r *<span class="type">ReportGenerator</span>) <span class="fn">Generate</span>(users []<span class="type">User</span>) <span class="type">string</span> { <span class="cm">/* buat */</span> }

<span class="kw">type</span> <span class="type">ActivityLogger</span> <span class="kw">struct</span>{}
<span class="kw">func</span> (l *<span class="type">ActivityLogger</span>) <span class="fn">Log</span>(msg <span class="type">string</span>) { <span class="cm">/* tulis */</span> }</div>
    </div>

    <div data-tab-content="srp-ts" class="tab-content">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span></p>
        <div class="code-block"><span class="cm">// BURUK - satu class melakukan semuanya</span>
<span class="kw">class</span> <span class="type">UserService</span> {
    <span class="kw">async</span> <span class="fn">createUser</span>(user: <span class="type">User</span>) { <span class="cm">/* save + email + log */</span> }
    <span class="kw">async</span> <span class="fn">sendEmail</span>(to: <span class="type">string</span>) { <span class="cm">/* ... */</span> }
    <span class="fn">generateReport</span>(): <span class="type">string</span> { <span class="cm">/* ... */</span> }
}</div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span> - Terpisah dan bisa di-inject di Next.js:</p>
        <div class="code-block"><span class="cm">// BAIK - file terpisah, satu tanggung jawab</span>

<span class="cm">// lib/repositories/userRepository.ts</span>
<span class="kw">export class</span> <span class="type">UserRepository</span> {
    <span class="kw">async</span> <span class="fn">save</span>(user: <span class="type">User</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt; {
        <span class="kw">await</span> prisma.user.<span class="fn">create</span>({ data: user });
    }
    <span class="kw">async</span> <span class="fn">findById</span>(id: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">User</span> | <span class="type">null</span>&gt; {
        <span class="kw">return</span> prisma.user.<span class="fn">findUnique</span>({ where: { id } });
    }
}

<span class="cm">// lib/services/emailService.ts</span>
<span class="kw">export class</span> <span class="type">EmailService</span> {
    <span class="kw">async</span> <span class="fn">send</span>(to: <span class="type">string</span>, body: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt; {
        <span class="kw">await</span> resend.emails.<span class="fn">send</span>({ to, html: body });
    }
}

<span class="cm">// app/api/users/route.ts (Next.js App Router)</span>
<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> repo = <span class="kw">new</span> <span class="type">UserRepository</span>();
    <span class="kw">const</span> email = <span class="kw">new</span> <span class="type">EmailService</span>();
    <span class="kw">const</span> data = <span class="kw">await</span> req.<span class="fn">json</span>();
    <span class="kw">await</span> repo.<span class="fn">save</span>(data);
    <span class="kw">await</span> email.<span class="fn">send</span>(data.email, <span class="str">"Selamat datang!"</span>);
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ success: <span class="kw">true</span> });
}</div>
    </div>
</div>

<!-- ==================== 2B. OPEN/CLOSED ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--green)"><span class="badge-green">O</span> Open/Closed Principle (OCP)</h3>
    <p><strong>${t('"Software entities harus terbuka untuk ekstensi, tapi tertutup untuk modifikasi."', '"Software entities should be open for extension, but closed for modification."')}</strong></p>
    <p>${t('Ketika ada requirement baru, kita seharusnya menambah kode baru (extend), bukan mengubah kode yang sudah ada dan berfungsi.', 'When there are new requirements, we should add new code (extend), not modify existing working code.')}</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="ocp-java">Java</button>
        <button class="tab-btn" data-tab="ocp-go">Go</button>
        <button class="tab-btn" data-tab="ocp-ts">TypeScript</button>
    </div>

    <div data-tab-content="ocp-java" class="tab-content active">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span> - Harus modifikasi class setiap ada tipe baru:</p>
        <div class="code-block"><span class="cm">// BURUK - harus ubah method setiap ada diskon baru</span>
<span class="kw">public</span> <span class="type">double</span> <span class="fn">calculateDiscount</span>(<span class="type">String</span> type, <span class="type">double</span> price) {
    <span class="kw">if</span> (type.<span class="fn">equals</span>(<span class="str">"regular"</span>)) <span class="kw">return</span> price * <span class="num">0.1</span>;
    <span class="kw">if</span> (type.<span class="fn">equals</span>(<span class="str">"vip"</span>)) <span class="kw">return</span> price * <span class="num">0.2</span>;
    <span class="cm">// Harus ubah kode ini untuk setiap tipe baru!</span>
    <span class="kw">return</span> <span class="num">0</span>;
}</div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span> - Extend tanpa modifikasi:</p>
        <div class="code-block"><span class="cm">// BAIK - interface memungkinkan ekstensi tanpa modifikasi</span>
<span class="kw">public interface</span> <span class="type">DiscountStrategy</span> {
    <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price);
}

<span class="kw">public class</span> <span class="type">RegularDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price) { <span class="kw">return</span> price * <span class="num">0.1</span>; }
}

<span class="kw">public class</span> <span class="type">VIPDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price) { <span class="kw">return</span> price * <span class="num">0.2</span>; }
}

<span class="cm">// Tambah diskon baru tanpa ubah kode yang ada!</span>
<span class="kw">public class</span> <span class="type">HolidayDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">calculate</span>(<span class="type">double</span> price) { <span class="kw">return</span> price * <span class="num">0.3</span>; }
}

<span class="cm">// Kode ini TIDAK PERLU berubah saat ada diskon baru</span>
<span class="kw">public class</span> <span class="type">PriceCalculator</span> {
    <span class="kw">public</span> <span class="type">double</span> <span class="fn">applyDiscount</span>(<span class="type">DiscountStrategy</span> strategy, <span class="type">double</span> price) {
        <span class="kw">return</span> price - strategy.<span class="fn">calculate</span>(price);
    }
}</div>
    </div>

    <div data-tab-content="ocp-go" class="tab-content">
        <div class="code-block"><span class="cm">// BAIK - interface + implementasi baru tanpa modifikasi</span>
<span class="kw">type</span> <span class="type">DiscountStrategy</span> <span class="kw">interface</span> {
    <span class="fn">Calculate</span>(price <span class="type">float64</span>) <span class="type">float64</span>
}

<span class="kw">type</span> <span class="type">RegularDiscount</span> <span class="kw">struct</span>{}
<span class="kw">func</span> (d <span class="type">RegularDiscount</span>) <span class="fn">Calculate</span>(price <span class="type">float64</span>) <span class="type">float64</span> {
    <span class="kw">return</span> price * <span class="num">0.1</span>
}

<span class="kw">type</span> <span class="type">VIPDiscount</span> <span class="kw">struct</span>{}
<span class="kw">func</span> (d <span class="type">VIPDiscount</span>) <span class="fn">Calculate</span>(price <span class="type">float64</span>) <span class="type">float64</span> {
    <span class="kw">return</span> price * <span class="num">0.2</span>
}

<span class="cm">// Tambah HolidayDiscount tanpa ubah apapun</span>
<span class="kw">type</span> <span class="type">HolidayDiscount</span> <span class="kw">struct</span>{ Percentage <span class="type">float64</span> }
<span class="kw">func</span> (d <span class="type">HolidayDiscount</span>) <span class="fn">Calculate</span>(price <span class="type">float64</span>) <span class="type">float64</span> {
    <span class="kw">return</span> price * d.Percentage
}

<span class="cm">// Fungsi ini tidak perlu berubah</span>
<span class="kw">func</span> <span class="fn">ApplyDiscount</span>(strategy <span class="type">DiscountStrategy</span>, price <span class="type">float64</span>) <span class="type">float64</span> {
    <span class="kw">return</span> price - strategy.<span class="fn">Calculate</span>(price)
}</div>
    </div>

    <div data-tab-content="ocp-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript - Open/Closed dengan interface</span>
<span class="kw">interface</span> <span class="type">DiscountStrategy</span> {
    <span class="fn">calculate</span>(price: <span class="type">number</span>): <span class="type">number</span>;
}

<span class="kw">class</span> <span class="type">RegularDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="fn">calculate</span>(price: <span class="type">number</span>) { <span class="kw">return</span> price * <span class="num">0.1</span>; }
}

<span class="kw">class</span> <span class="type">VIPDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="fn">calculate</span>(price: <span class="type">number</span>) { <span class="kw">return</span> price * <span class="num">0.2</span>; }
}

<span class="cm">// Extend tanpa modifikasi kode yang ada</span>
<span class="kw">class</span> <span class="type">HolidayDiscount</span> <span class="kw">implements</span> <span class="type">DiscountStrategy</span> {
    <span class="kw">constructor</span>(<span class="kw">private</span> pct: <span class="type">number</span>) {}
    <span class="fn">calculate</span>(price: <span class="type">number</span>) { <span class="kw">return</span> price * <span class="kw">this</span>.pct; }
}

<span class="cm">// Next.js API Route - strategy dipilih berdasarkan request</span>
<span class="kw">const</span> strategies: <span class="type">Record</span>&lt;<span class="type">string</span>, <span class="type">DiscountStrategy</span>&gt; = {
    regular: <span class="kw">new</span> <span class="type">RegularDiscount</span>(),
    vip: <span class="kw">new</span> <span class="type">VIPDiscount</span>(),
    holiday: <span class="kw">new</span> <span class="type">HolidayDiscount</span>(<span class="num">0.3</span>),
};

<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> { type, price } = <span class="kw">await</span> req.<span class="fn">json</span>();
    <span class="kw">const</span> strategy = strategies[type] ?? <span class="kw">new</span> <span class="type">RegularDiscount</span>();
    <span class="kw">const</span> final = price - strategy.<span class="fn">calculate</span>(price);
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ finalPrice: final });
}</div>
    </div>
</div>

<!-- ==================== 2C. LISKOV SUBSTITUTION ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)"><span class="badge-purple">L</span> Liskov Substitution Principle (LSP)</h3>
    <p><strong>${t('"Subtype harus bisa menggantikan base type tanpa merusak program."', '"Subtypes must be substitutable for their base types without breaking the program."')}</strong></p>
    <p>${t('Jika class B adalah subclass dari A, maka B harus bisa digunakan di mana pun A digunakan tanpa mengubah perilaku yang diharapkan.', 'If class B is a subclass of A, then B must be usable wherever A is used without changing the expected behavior.')}</p>

    <div class="warn-box">
        <strong>${t('Contoh Pelanggaran Klasik:', 'Classic Violation Example:')}</strong> ${t('Class Penguin extends Bird. Bird punya method fly(). Tapi Penguin tidak bisa terbang. Ini melanggar LSP karena Penguin tidak bisa menggantikan Bird di konteks yang memerlukan fly().', 'Class Penguin extends Bird. Bird has a fly() method. But Penguin cannot fly. This violates LSP because Penguin cannot substitute Bird in contexts that require fly().')}
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="lsp-java">Java</button>
        <button class="tab-btn" data-tab="lsp-go">Go</button>
        <button class="tab-btn" data-tab="lsp-ts">TypeScript</button>
    </div>

    <div data-tab-content="lsp-java" class="tab-content active">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span> - Square extends Rectangle melanggar LSP:</p>
        <div class="code-block"><span class="cm">// BURUK - Square tidak bisa substitusi Rectangle</span>
<span class="kw">public class</span> <span class="type">Rectangle</span> {
    <span class="kw">protected</span> <span class="type">int</span> width, height;
    <span class="kw">public void</span> <span class="fn">setWidth</span>(<span class="type">int</span> w) { <span class="kw">this</span>.width = w; }
    <span class="kw">public void</span> <span class="fn">setHeight</span>(<span class="type">int</span> h) { <span class="kw">this</span>.height = h; }
    <span class="kw">public</span> <span class="type">int</span> <span class="fn">area</span>() { <span class="kw">return</span> width * height; }
}

<span class="kw">public class</span> <span class="type">Square</span> <span class="kw">extends</span> <span class="type">Rectangle</span> {
    <span class="cm">@Override</span>
    <span class="kw">public void</span> <span class="fn">setWidth</span>(<span class="type">int</span> w) { width = w; height = w; } <span class="cm">// side effect!</span>
    <span class="cm">@Override</span>
    <span class="kw">public void</span> <span class="fn">setHeight</span>(<span class="type">int</span> h) { width = h; height = h; }
}

<span class="cm">// Kode ini GAGAL dengan Square:</span>
<span class="cm">// Rectangle r = new Square();</span>
<span class="cm">// r.setWidth(5); r.setHeight(3);</span>
<span class="cm">// r.area() == 15? TIDAK! Hasilnya 9 karena Square override</span></div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span> - Gunakan interface yang benar:</p>
        <div class="code-block"><span class="cm">// BAIK - interface yang benar</span>
<span class="kw">public interface</span> <span class="type">Shape</span> {
    <span class="type">int</span> <span class="fn">area</span>();
}

<span class="kw">public class</span> <span class="type">Rectangle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">private final</span> <span class="type">int</span> width, height;
    <span class="kw">public</span> <span class="fn">Rectangle</span>(<span class="type">int</span> w, <span class="type">int</span> h) { width = w; height = h; }
    <span class="kw">public</span> <span class="type">int</span> <span class="fn">area</span>() { <span class="kw">return</span> width * height; }
}

<span class="kw">public class</span> <span class="type">Square</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">private final</span> <span class="type">int</span> side;
    <span class="kw">public</span> <span class="fn">Square</span>(<span class="type">int</span> side) { <span class="kw">this</span>.side = side; }
    <span class="kw">public</span> <span class="type">int</span> <span class="fn">area</span>() { <span class="kw">return</span> side * side; }
}

<span class="cm">// Keduanya bisa substitusi Shape tanpa masalah</span></div>
    </div>

    <div data-tab-content="lsp-go" class="tab-content">
        <div class="code-block"><span class="cm">// Go menghindari masalah LSP karena tidak ada inheritance</span>
<span class="cm">// Gunakan interface yang benar:</span>

<span class="kw">type</span> <span class="type">Shape</span> <span class="kw">interface</span> {
    <span class="fn">Area</span>() <span class="type">int</span>
}

<span class="kw">type</span> <span class="type">Rectangle</span> <span class="kw">struct</span> {
    Width, Height <span class="type">int</span>
}
<span class="kw">func</span> (r <span class="type">Rectangle</span>) <span class="fn">Area</span>() <span class="type">int</span> { <span class="kw">return</span> r.Width * r.Height }

<span class="kw">type</span> <span class="type">Square</span> <span class="kw">struct</span> {
    Side <span class="type">int</span>
}
<span class="kw">func</span> (s <span class="type">Square</span>) <span class="fn">Area</span>() <span class="type">int</span> { <span class="kw">return</span> s.Side * s.Side }

<span class="cm">// Keduanya memenuhi interface Shape - substitusi aman</span>
<span class="kw">func</span> <span class="fn">PrintArea</span>(s <span class="type">Shape</span>) {
    fmt.<span class="fn">Printf</span>(<span class="str">"Luas: %d\\n"</span>, s.<span class="fn">Area</span>())
}

<span class="cm">// PrintArea(Rectangle{5, 3})  // Luas: 15</span>
<span class="cm">// PrintArea(Square{4})         // Luas: 16</span>

<span class="cm">// Go secara natural menghindari masalah LSP</span>
<span class="cm">// karena komposisi > inheritance</span></div>
    </div>

    <div data-tab-content="lsp-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript - Pastikan subtype bisa substitusi</span>
<span class="kw">interface</span> <span class="type">Shape</span> {
    <span class="fn">area</span>(): <span class="type">number</span>;
}

<span class="kw">class</span> <span class="type">Rectangle</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">constructor</span>(
        <span class="kw">readonly</span> width: <span class="type">number</span>,
        <span class="kw">readonly</span> height: <span class="type">number</span>
    ) {}
    <span class="fn">area</span>(): <span class="type">number</span> { <span class="kw">return this</span>.width * <span class="kw">this</span>.height; }
}

<span class="kw">class</span> <span class="type">Square</span> <span class="kw">implements</span> <span class="type">Shape</span> {
    <span class="kw">constructor</span>(<span class="kw">readonly</span> side: <span class="type">number</span>) {}
    <span class="fn">area</span>(): <span class="type">number</span> { <span class="kw">return this</span>.side ** <span class="num">2</span>; }
}

<span class="cm">// Keduanya bisa substitusi Shape</span>
<span class="kw">function</span> <span class="fn">renderShapes</span>(shapes: <span class="type">Shape</span>[]): <span class="type">JSX.Element</span> {
    <span class="kw">return</span> (
        &lt;&gt;
            {shapes.<span class="fn">map</span>((s, i) => (
                &lt;div key={i}&gt;Luas: {s.<span class="fn">area</span>()}&lt;/div&gt;
            ))}
        &lt;/&gt;
    );
}

<span class="cm">// Komponen Next.js aman dengan LSP</span>
<span class="kw">const</span> shapes: <span class="type">Shape</span>[] = [
    <span class="kw">new</span> <span class="type">Rectangle</span>(<span class="num">5</span>, <span class="num">3</span>),
    <span class="kw">new</span> <span class="type">Square</span>(<span class="num">4</span>),
];</div>
    </div>
</div>

<!-- ==================== 2D. INTERFACE SEGREGATION ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--orange)"><span class="badge-orange">I</span> Interface Segregation Principle (ISP)</h3>
    <p><strong>${t('"Client tidak boleh dipaksa bergantung pada interface yang tidak digunakannya."', '"Clients should not be forced to depend on interfaces they do not use."')}</strong></p>
    <p>${t('Lebih baik memiliki banyak interface kecil dan spesifik daripada satu interface besar yang "gemuk". Go secara natural sangat baik dalam hal ini karena konvensi interface kecil.', 'It is better to have many small, specific interfaces than one large "fat" interface. Go is naturally excellent at this due to its small interface convention.')}</p>

    <div class="success-box">
        <strong>${t('Go dan ISP:', 'Go and ISP:')}</strong> ${t('Go terkenal dengan interface kecil. <code>io.Reader</code> hanya punya satu method <code>Read()</code>. <code>io.Writer</code> hanya punya <code>Write()</code>. Ini adalah contoh sempurna ISP. Proverb Go: "The bigger the interface, the weaker the abstraction."', 'Go is known for small interfaces. <code>io.Reader</code> has only one method <code>Read()</code>. <code>io.Writer</code> only has <code>Write()</code>. This is a perfect example of ISP. Go Proverb: "The bigger the interface, the weaker the abstraction."')}
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="isp-java">Java</button>
        <button class="tab-btn" data-tab="isp-go">Go</button>
        <button class="tab-btn" data-tab="isp-ts">TypeScript</button>
    </div>

    <div data-tab-content="isp-java" class="tab-content active">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span> - Satu interface gemuk:</p>
        <div class="code-block"><span class="cm">// BURUK - interface terlalu besar</span>
<span class="kw">public interface</span> <span class="type">Worker</span> {
    <span class="type">void</span> <span class="fn">work</span>();
    <span class="type">void</span> <span class="fn">eat</span>();
    <span class="type">void</span> <span class="fn">sleep</span>();
    <span class="type">void</span> <span class="fn">attendMeeting</span>();
    <span class="type">void</span> <span class="fn">writeReport</span>();
}

<span class="cm">// Robot dipaksa implement eat() dan sleep()? Absurd!</span>
<span class="kw">public class</span> <span class="type">Robot</span> <span class="kw">implements</span> <span class="type">Worker</span> {
    <span class="kw">public void</span> <span class="fn">work</span>() { <span class="cm">/* OK */</span> }
    <span class="kw">public void</span> <span class="fn">eat</span>() { <span class="kw">throw new</span> <span class="type">UnsupportedOperationException</span>(); } <span class="cm">// !</span>
    <span class="kw">public void</span> <span class="fn">sleep</span>() { <span class="kw">throw new</span> <span class="type">UnsupportedOperationException</span>(); }
    <span class="cm">// ...</span>
}</div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span> - Interface kecil dan spesifik:</p>
        <div class="code-block"><span class="cm">// BAIK - interface kecil dan spesifik</span>
<span class="kw">public interface</span> <span class="type">Workable</span>    { <span class="type">void</span> <span class="fn">work</span>(); }
<span class="kw">public interface</span> <span class="type">Eatable</span>     { <span class="type">void</span> <span class="fn">eat</span>(); }
<span class="kw">public interface</span> <span class="type">Sleepable</span>   { <span class="type">void</span> <span class="fn">sleep</span>(); }
<span class="kw">public interface</span> <span class="type">Reportable</span>  { <span class="type">void</span> <span class="fn">writeReport</span>(); }

<span class="cm">// Human implement sesuai kebutuhan</span>
<span class="kw">public class</span> <span class="type">HumanWorker</span> <span class="kw">implements</span> <span class="type">Workable</span>, <span class="type">Eatable</span>, <span class="type">Sleepable</span> {
    <span class="kw">public void</span> <span class="fn">work</span>() { <span class="cm">/* kerja */</span> }
    <span class="kw">public void</span> <span class="fn">eat</span>() { <span class="cm">/* makan */</span> }
    <span class="kw">public void</span> <span class="fn">sleep</span>() { <span class="cm">/* tidur */</span> }
}

<span class="cm">// Robot hanya implement yang relevan</span>
<span class="kw">public class</span> <span class="type">RobotWorker</span> <span class="kw">implements</span> <span class="type">Workable</span>, <span class="type">Reportable</span> {
    <span class="kw">public void</span> <span class="fn">work</span>() { <span class="cm">/* kerja */</span> }
    <span class="kw">public void</span> <span class="fn">writeReport</span>() { <span class="cm">/* laporan */</span> }
}</div>
    </div>

    <div data-tab-content="isp-go" class="tab-content">
        <p>Go secara natural menerapkan ISP - interface kecil adalah idiom Go:</p>
        <div class="code-block"><span class="cm">// Go: Interface kecil adalah BEST PRACTICE</span>

<span class="cm">// Contoh dari standard library:</span>
<span class="cm">// io.Reader  -> Read(p []byte) (n int, err error)</span>
<span class="cm">// io.Writer  -> Write(p []byte) (n int, err error)</span>
<span class="cm">// io.Closer  -> Close() error</span>
<span class="cm">// fmt.Stringer -> String() string</span>

<span class="cm">// Interface kecil dan spesifik</span>
<span class="kw">type</span> <span class="type">Workable</span> <span class="kw">interface</span> {
    <span class="fn">Work</span>()
}

<span class="kw">type</span> <span class="type">Eatable</span> <span class="kw">interface</span> {
    <span class="fn">Eat</span>()
}

<span class="kw">type</span> <span class="type">Reportable</span> <span class="kw">interface</span> {
    <span class="fn">WriteReport</span>() <span class="type">string</span>
}

<span class="cm">// Komposisi interface jika perlu</span>
<span class="kw">type</span> <span class="type">HumanWorker</span> <span class="kw">interface</span> {
    <span class="type">Workable</span>
    <span class="type">Eatable</span>
}

<span class="kw">type</span> <span class="type">Robot</span> <span class="kw">struct</span> { Model <span class="type">string</span> }
<span class="kw">func</span> (r <span class="type">Robot</span>) <span class="fn">Work</span>()                { fmt.<span class="fn">Println</span>(<span class="str">"Robot bekerja"</span>) }
<span class="kw">func</span> (r <span class="type">Robot</span>) <span class="fn">WriteReport</span>() <span class="type">string</span> { <span class="kw">return</span> <span class="str">"Laporan robot"</span> }

<span class="cm">// Robot memenuhi Workable dan Reportable, tapi BUKAN Eatable</span>
<span class="cm">// Tidak ada yang memaksa Robot implement Eat()</span>

<span class="cm">// Fungsi hanya menerima interface yang dibutuhkan</span>
<span class="kw">func</span> <span class="fn">AssignTask</span>(w <span class="type">Workable</span>) { w.<span class="fn">Work</span>() }
<span class="kw">func</span> <span class="fn">GetReport</span>(r <span class="type">Reportable</span>) <span class="type">string</span> { <span class="kw">return</span> r.<span class="fn">WriteReport</span>() }</div>
    </div>

    <div data-tab-content="isp-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript - Interface segregation</span>
<span class="kw">interface</span> <span class="type">Workable</span>   { <span class="fn">work</span>(): <span class="type">void</span>; }
<span class="kw">interface</span> <span class="type">Eatable</span>    { <span class="fn">eat</span>(): <span class="type">void</span>; }
<span class="kw">interface</span> <span class="type">Reportable</span> { <span class="fn">writeReport</span>(): <span class="type">string</span>; }

<span class="cm">// Compose interfaces</span>
<span class="kw">type</span> <span class="type">HumanCapabilities</span> = <span class="type">Workable</span> & <span class="type">Eatable</span> & <span class="type">Reportable</span>;

<span class="kw">class</span> <span class="type">Developer</span> <span class="kw">implements</span> <span class="type">HumanCapabilities</span> {
    <span class="fn">work</span>() { console.<span class="fn">log</span>(<span class="str">"Coding..."</span>); }
    <span class="fn">eat</span>() { console.<span class="fn">log</span>(<span class="str">"Makan siang"</span>); }
    <span class="fn">writeReport</span>() { <span class="kw">return</span> <span class="str">"Sprint report"</span>; }
}

<span class="kw">class</span> <span class="type">CIBot</span> <span class="kw">implements</span> <span class="type">Workable</span>, <span class="type">Reportable</span> {
    <span class="fn">work</span>() { console.<span class="fn">log</span>(<span class="str">"Running tests..."</span>); }
    <span class="fn">writeReport</span>() { <span class="kw">return</span> <span class="str">"Build passed"</span>; }
    <span class="cm">// Tidak perlu implement eat() - bukan manusia!</span>
}

<span class="cm">// Next.js: Hanya butuh Reportable</span>
<span class="kw">const</span> <span class="fn">ReportPage</span> = ({ reporters }: { reporters: <span class="type">Reportable</span>[] }) => (
    &lt;div&gt;
        {reporters.<span class="fn">map</span>((r, i) => (
            &lt;p key={i}&gt;{r.<span class="fn">writeReport</span>()}&lt;/p&gt;
        ))}
    &lt;/div&gt;
);</div>
    </div>
</div>

<!-- ==================== 2E. DEPENDENCY INVERSION ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--red)"><span class="badge-red">D</span> Dependency Inversion Principle (DIP)</h3>
    <p><strong>${t('"High-level module tidak boleh bergantung pada low-level module. Keduanya harus bergantung pada abstraksi."', '"High-level modules should not depend on low-level modules. Both should depend on abstractions."')}</strong></p>
    <p>${t('Dependency Injection (DI) adalah pattern yang mengimplementasikan DIP. Daripada membuat dependensi di dalam class, kita menyuntikkannya dari luar.', 'Dependency Injection (DI) is a pattern that implements DIP. Instead of creating dependencies inside a class, we inject them from outside.')}</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="dip-java">Java</button>
        <button class="tab-btn" data-tab="dip-go">Go</button>
        <button class="tab-btn" data-tab="dip-ts">TypeScript</button>
    </div>

    <div data-tab-content="dip-java" class="tab-content active">
        <p><span class="badge-red">${t('BURUK', 'BAD')}</span> - Bergantung langsung pada class konkrit:</p>
        <div class="code-block"><span class="cm">// BURUK - high-level bergantung pada low-level konkrit</span>
<span class="kw">public class</span> <span class="type">OrderService</span> {
    <span class="kw">private</span> <span class="type">MySQLDatabase</span> db = <span class="kw">new</span> <span class="type">MySQLDatabase</span>(); <span class="cm">// tightly coupled!</span>
    <span class="kw">private</span> <span class="type">SmtpEmailSender</span> email = <span class="kw">new</span> <span class="type">SmtpEmailSender</span>();

    <span class="kw">public void</span> <span class="fn">createOrder</span>(<span class="type">Order</span> order) {
        db.<span class="fn">save</span>(order);
        email.<span class="fn">send</span>(order.getCustomerEmail(), <span class="str">"Order dibuat"</span>);
    }
}</div>
        <p><span class="badge-green">${t('BAIK', 'GOOD')}</span> - Bergantung pada abstraksi (interface):</p>
        <div class="code-block"><span class="cm">// BAIK - bergantung pada abstraksi</span>
<span class="kw">public interface</span> <span class="type">OrderRepository</span> {
    <span class="type">void</span> <span class="fn">save</span>(<span class="type">Order</span> order);
}

<span class="kw">public interface</span> <span class="type">NotificationService</span> {
    <span class="type">void</span> <span class="fn">notify</span>(<span class="type">String</span> to, <span class="type">String</span> message);
}

<span class="cm">// Dependency Injection via constructor</span>
<span class="kw">public class</span> <span class="type">OrderService</span> {
    <span class="kw">private final</span> <span class="type">OrderRepository</span> repo;
    <span class="kw">private final</span> <span class="type">NotificationService</span> notifier;

    <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="type">OrderRepository</span> repo, <span class="type">NotificationService</span> notifier) {
        <span class="kw">this</span>.repo = repo;
        <span class="kw">this</span>.notifier = notifier;
    }

    <span class="kw">public void</span> <span class="fn">createOrder</span>(<span class="type">Order</span> order) {
        repo.<span class="fn">save</span>(order);
        notifier.<span class="fn">notify</span>(order.getCustomerEmail(), <span class="str">"Order dibuat"</span>);
    }
}

<span class="cm">// Spring Boot: DI otomatis via @Autowired</span>
<span class="cm">// @Service</span>
<span class="cm">// public class OrderServiceImpl { ... }</span></div>
    </div>

    <div data-tab-content="dip-go" class="tab-content">
        <div class="code-block"><span class="cm">// Go - Dependency Injection via constructor</span>
<span class="kw">type</span> <span class="type">OrderRepository</span> <span class="kw">interface</span> {
    <span class="fn">Save</span>(order <span class="type">Order</span>) <span class="type">error</span>
}

<span class="kw">type</span> <span class="type">Notifier</span> <span class="kw">interface</span> {
    <span class="fn">Notify</span>(to, message <span class="type">string</span>) <span class="type">error</span>
}

<span class="cm">// OrderService bergantung pada INTERFACE, bukan struct konkrit</span>
<span class="kw">type</span> <span class="type">OrderService</span> <span class="kw">struct</span> {
    repo     <span class="type">OrderRepository</span>
    notifier <span class="type">Notifier</span>
}

<span class="cm">// Constructor - inject dependencies</span>
<span class="kw">func</span> <span class="fn">NewOrderService</span>(repo <span class="type">OrderRepository</span>, notifier <span class="type">Notifier</span>) *<span class="type">OrderService</span> {
    <span class="kw">return</span> &<span class="type">OrderService</span>{repo: repo, notifier: notifier}
}

<span class="kw">func</span> (s *<span class="type">OrderService</span>) <span class="fn">CreateOrder</span>(order <span class="type">Order</span>) <span class="type">error</span> {
    <span class="kw">if</span> err := s.repo.<span class="fn">Save</span>(order); err != <span class="kw">nil</span> {
        <span class="kw">return</span> err
    }
    <span class="kw">return</span> s.notifier.<span class="fn">Notify</span>(order.Email, <span class="str">"Order dibuat"</span>)
}

<span class="cm">// Implementasi konkrit</span>
<span class="kw">type</span> <span class="type">PostgresOrderRepo</span> <span class="kw">struct</span> { db *sql.<span class="type">DB</span> }
<span class="kw">func</span> (r *<span class="type">PostgresOrderRepo</span>) <span class="fn">Save</span>(o <span class="type">Order</span>) <span class="type">error</span> { <span class="cm">/* SQL insert */</span> }

<span class="kw">type</span> <span class="type">EmailNotifier</span> <span class="kw">struct</span> {}
<span class="kw">func</span> (n *<span class="type">EmailNotifier</span>) <span class="fn">Notify</span>(to, msg <span class="type">string</span>) <span class="type">error</span> { <span class="cm">/* kirim email */</span> }

<span class="cm">// Wiring di main.go (atau Gin handler)</span>
<span class="cm">// repo := &PostgresOrderRepo{db: db}</span>
<span class="cm">// notifier := &EmailNotifier{}</span>
<span class="cm">// service := NewOrderService(repo, notifier)</span></div>
    </div>

    <div data-tab-content="dip-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript - Dependency Injection di Next.js</span>
<span class="kw">interface</span> <span class="type">OrderRepository</span> {
    <span class="fn">save</span>(order: <span class="type">Order</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
}

<span class="kw">interface</span> <span class="type">NotificationService</span> {
    <span class="fn">notify</span>(to: <span class="type">string</span>, message: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
}

<span class="cm">// Service bergantung pada abstraksi</span>
<span class="kw">class</span> <span class="type">OrderService</span> {
    <span class="kw">constructor</span>(
        <span class="kw">private</span> repo: <span class="type">OrderRepository</span>,
        <span class="kw">private</span> notifier: <span class="type">NotificationService</span>
    ) {}

    <span class="kw">async</span> <span class="fn">createOrder</span>(order: <span class="type">Order</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt; {
        <span class="kw">await this</span>.repo.<span class="fn">save</span>(order);
        <span class="kw">await this</span>.notifier.<span class="fn">notify</span>(order.email, <span class="str">"Order dibuat"</span>);
    }
}

<span class="cm">// Implementasi konkrit</span>
<span class="kw">class</span> <span class="type">PrismaOrderRepo</span> <span class="kw">implements</span> <span class="type">OrderRepository</span> {
    <span class="kw">async</span> <span class="fn">save</span>(order: <span class="type">Order</span>) {
        <span class="kw">await</span> prisma.order.<span class="fn">create</span>({ data: order });
    }
}

<span class="kw">class</span> <span class="type">ResendNotifier</span> <span class="kw">implements</span> <span class="type">NotificationService</span> {
    <span class="kw">async</span> <span class="fn">notify</span>(to: <span class="type">string</span>, msg: <span class="type">string</span>) {
        <span class="kw">await</span> resend.emails.<span class="fn">send</span>({ to, subject: msg });
    }
}

<span class="cm">// Next.js API Route - inject dependencies</span>
<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> service = <span class="kw">new</span> <span class="type">OrderService</span>(
        <span class="kw">new</span> <span class="type">PrismaOrderRepo</span>(),
        <span class="kw">new</span> <span class="type">ResendNotifier</span>()
    );
    <span class="kw">const</span> order = <span class="kw">await</span> req.<span class="fn">json</span>();
    <span class="kw">await</span> service.<span class="fn">createOrder</span>(order);
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ success: <span class="kw">true</span> });
}</div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 3: TABEL PERBANDINGAN OOP
     ===================================================================== -->
<h2 class="animate-in">${t('3. Perbandingan OOP: Go vs Java vs JavaScript/TypeScript', '3. OOP Comparison: Go vs Java vs JavaScript/TypeScript')}</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">${t('Bagaimana Tiga Bahasa Menangani OOP', 'How Three Languages Handle OOP')}</h3>
    <p>${t('Setiap bahasa memiliki pendekatan yang berbeda terhadap OOP. Berikut perbandingan komprehensif:', 'Each language has a different approach to OOP. Here is a comprehensive comparison:')}</p>

    <div class="table-wrapper">
        <table>
            <tr>
                <th>${t('Fitur', 'Feature')}</th>
                <th><span class="badge-blue">Go</span></th>
                <th><span class="badge-orange">Java</span></th>
                <th><span class="badge-purple">JS / TypeScript</span></th>
            </tr>
            <tr>
                <td><strong>${t('Definisi Objek', 'Object Definition')}</strong></td>
                <td><code>struct</code> (value type)</td>
                <td><code>class</code> (reference type)</td>
                <td><code>class</code> (syntax sugar atas prototype)</td>
            </tr>
            <tr>
                <td><strong>Inheritance</strong></td>
                <td>${t('Tidak ada. Embedding (komposisi)', 'None. Embedding (composition)')}</td>
                <td><code>extends</code> (single inheritance)</td>
                <td><code>extends</code> (prototype chain)</td>
            </tr>
            <tr>
                <td><strong>Interface</strong></td>
                <td>${t('Implisit (duck typing statis)', 'Implicit (static duck typing)')}</td>
                <td>${t('Eksplisit', 'Explicit')} (<code>implements</code>)</td>
                <td>${t('TS: eksplisit. JS: duck typing', 'TS: explicit. JS: duck typing')}</td>
            </tr>
            <tr>
                <td><strong>Access Modifier</strong></td>
                <td>${t('Huruf besar (exported) / kecil (unexported)', 'Uppercase (exported) / lowercase (unexported)')}</td>
                <td><code>public, private, protected, package-private</code></td>
                <td>TS: <code>public, private, protected</code>. JS: <code>#field</code></td>
            </tr>
            <tr>
                <td><strong>Constructor</strong></td>
                <td>Function: <code>NewXxx()</code> (${t('konvensi', 'convention')})</td>
                <td>${t('Method dengan nama class', 'Method with class name')}</td>
                <td><code>constructor()</code></td>
            </tr>
            <tr>
                <td><strong>Method Dispatch</strong></td>
                <td>Static dispatch (non-interface), dynamic (interface)</td>
                <td>Dynamic dispatch (virtual method)</td>
                <td>Dynamic (prototype chain lookup)</td>
            </tr>
            <tr>
                <td><strong>Multiple Inheritance</strong></td>
                <td>Multiple embedding</td>
                <td>${t('Tidak (tapi multiple interface)', 'No (but multiple interfaces)')}</td>
                <td>${t('Tidak (tapi mixins pattern)', 'No (but mixins pattern)')}</td>
            </tr>
            <tr>
                <td><strong>Abstract Class</strong></td>
                <td>${t('Tidak ada (gunakan interface)', 'None (use interface)')}</td>
                <td><code>abstract class</code></td>
                <td>TS: <code>abstract class</code></td>
            </tr>
            <tr>
                <td><strong>Generics</strong></td>
                <td>${t('Ya (sejak Go 1.18)', 'Yes (since Go 1.18)')}</td>
                <td>${t('Ya (type erasure)', 'Yes (type erasure)')}</td>
                <td>${t('TS: Ya. JS: Tidak', 'TS: Yes. JS: No')}</td>
            </tr>
            <tr>
                <td><strong>Enum</strong></td>
                <td><code>const + iota</code></td>
                <td><code>enum</code> (full class)</td>
                <td>TS: <code>enum</code>. JS: object/Symbol</td>
            </tr>
            <tr>
                <td><strong>Null Safety</strong></td>
                <td>${t('Zero value (tidak ada null untuk struct)', 'Zero value (no null for structs)')}</td>
                <td>NullPointerException</td>
                <td>TS: <code>strictNullChecks</code></td>
            </tr>
            <tr>
                <td><strong>${t('Filosofi', 'Philosophy')}</strong></td>
                <td>"Composition over inheritance"</td>
                <td>"Everything is an object"</td>
                <td>"Multi-paradigm + flexibility"</td>
            </tr>
        </table>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 4: DESIGN PATTERNS
     ===================================================================== -->
<h2 class="animate-in">4. Design Patterns</h2>

<div class="info-box animate-in">
    ${t('Design Patterns adalah solusi yang telah terbukti untuk masalah umum dalam desain software. Berikut tiga pattern yang paling sering digunakan, diimplementasikan di tiga bahasa.', 'Design Patterns are proven solutions to common problems in software design. Here are three of the most commonly used patterns, implemented in three languages.')}
</div>

<!-- ==================== 4A. FACTORY PATTERN ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--accent)"><span class="badge-blue">Creational</span> Factory Pattern</h3>
    <p>${t('Factory Pattern menyediakan interface untuk membuat objek <strong>tanpa mengekspos logika pembuatan</strong> kepada client. Client hanya perlu tahu "mau buat apa", bukan "bagaimana membuatnya".', 'Factory Pattern provides an interface for creating objects <strong>without exposing the creation logic</strong> to the client. The client only needs to know "what to create", not "how to create it".')}</p>

    <div class="flow-diagram">
        <div class="flow-node" style="background:rgba(56,189,248,0.15);border-color:var(--accent)">Client</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:rgba(52,211,153,0.15);border-color:var(--green)">Factory</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:rgba(167,139,250,0.15);border-color:var(--accent3)">Product A<br>Product B<br>Product C</div>
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="fac-java">Java</button>
        <button class="tab-btn" data-tab="fac-go">Go</button>
        <button class="tab-btn" data-tab="fac-ts">TypeScript</button>
    </div>

    <div data-tab-content="fac-java" class="tab-content active">
        <div class="code-block"><span class="cm">// Interface produk</span>
<span class="kw">public interface</span> <span class="type">Database</span> {
    <span class="type">void</span> <span class="fn">connect</span>();
    <span class="type">void</span> <span class="fn">query</span>(<span class="type">String</span> sql);
    <span class="type">void</span> <span class="fn">close</span>();
}

<span class="kw">public class</span> <span class="type">PostgresDB</span> <span class="kw">implements</span> <span class="type">Database</span> {
    <span class="kw">public void</span> <span class="fn">connect</span>() { System.out.<span class="fn">println</span>(<span class="str">"Connecting to Postgres..."</span>); }
    <span class="kw">public void</span> <span class="fn">query</span>(<span class="type">String</span> sql) { <span class="cm">/* ... */</span> }
    <span class="kw">public void</span> <span class="fn">close</span>() { <span class="cm">/* ... */</span> }
}

<span class="kw">public class</span> <span class="type">MongoDB</span> <span class="kw">implements</span> <span class="type">Database</span> {
    <span class="kw">public void</span> <span class="fn">connect</span>() { System.out.<span class="fn">println</span>(<span class="str">"Connecting to MongoDB..."</span>); }
    <span class="kw">public void</span> <span class="fn">query</span>(<span class="type">String</span> sql) { <span class="cm">/* konversi ke query MongoDB */</span> }
    <span class="kw">public void</span> <span class="fn">close</span>() { <span class="cm">/* ... */</span> }
}

<span class="cm">// Factory</span>
<span class="kw">public class</span> <span class="type">DatabaseFactory</span> {
    <span class="kw">public static</span> <span class="type">Database</span> <span class="fn">create</span>(<span class="type">String</span> type) {
        <span class="kw">return switch</span> (type) {
            <span class="kw">case</span> <span class="str">"postgres"</span> -> <span class="kw">new</span> <span class="type">PostgresDB</span>();
            <span class="kw">case</span> <span class="str">"mongo"</span>    -> <span class="kw">new</span> <span class="type">MongoDB</span>();
            <span class="kw">default</span> -> <span class="kw">throw new</span> <span class="type">IllegalArgumentException</span>(<span class="str">"Unknown DB: "</span> + type);
        };
    }
}

<span class="cm">// Penggunaan: Database db = DatabaseFactory.create("postgres");</span></div>
    </div>

    <div data-tab-content="fac-go" class="tab-content">
        <div class="code-block"><span class="kw">type</span> <span class="type">Database</span> <span class="kw">interface</span> {
    <span class="fn">Connect</span>() <span class="type">error</span>
    <span class="fn">Query</span>(sql <span class="type">string</span>) ([]<span class="type">Row</span>, <span class="type">error</span>)
    <span class="fn">Close</span>() <span class="type">error</span>
}

<span class="kw">type</span> <span class="type">PostgresDB</span> <span class="kw">struct</span> { dsn <span class="type">string</span> }
<span class="kw">func</span> (p *<span class="type">PostgresDB</span>) <span class="fn">Connect</span>() <span class="type">error</span> { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (p *<span class="type">PostgresDB</span>) <span class="fn">Query</span>(sql <span class="type">string</span>) ([]<span class="type">Row</span>, <span class="type">error</span>) { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (p *<span class="type">PostgresDB</span>) <span class="fn">Close</span>() <span class="type">error</span> { <span class="cm">/* ... */</span> }

<span class="kw">type</span> <span class="type">MongoDB</span> <span class="kw">struct</span> { uri <span class="type">string</span> }
<span class="kw">func</span> (m *<span class="type">MongoDB</span>) <span class="fn">Connect</span>() <span class="type">error</span> { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (m *<span class="type">MongoDB</span>) <span class="fn">Query</span>(sql <span class="type">string</span>) ([]<span class="type">Row</span>, <span class="type">error</span>) { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (m *<span class="type">MongoDB</span>) <span class="fn">Close</span>() <span class="type">error</span> { <span class="cm">/* ... */</span> }

<span class="cm">// Factory function</span>
<span class="kw">func</span> <span class="fn">NewDatabase</span>(dbType, connStr <span class="type">string</span>) (<span class="type">Database</span>, <span class="type">error</span>) {
    <span class="kw">switch</span> dbType {
    <span class="kw">case</span> <span class="str">"postgres"</span>:
        <span class="kw">return</span> &<span class="type">PostgresDB</span>{dsn: connStr}, <span class="kw">nil</span>
    <span class="kw">case</span> <span class="str">"mongo"</span>:
        <span class="kw">return</span> &<span class="type">MongoDB</span>{uri: connStr}, <span class="kw">nil</span>
    <span class="kw">default</span>:
        <span class="kw">return nil</span>, fmt.<span class="fn">Errorf</span>(<span class="str">"tipe DB tidak dikenal: %s"</span>, dbType)
    }
}

<span class="cm">// db, err := NewDatabase("postgres", "host=localhost ...")</span></div>
    </div>

    <div data-tab-content="fac-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript Factory di Next.js</span>
<span class="kw">interface</span> <span class="type">Database</span> {
    <span class="fn">connect</span>(): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
    <span class="fn">query</span>(sql: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">any</span>[]&gt;;
    <span class="fn">close</span>(): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
}

<span class="kw">class</span> <span class="type">PostgresDB</span> <span class="kw">implements</span> <span class="type">Database</span> {
    <span class="kw">async</span> <span class="fn">connect</span>() { <span class="cm">/* pg connect */</span> }
    <span class="kw">async</span> <span class="fn">query</span>(sql: <span class="type">string</span>) { <span class="cm">/* ... */</span> <span class="kw">return</span> []; }
    <span class="kw">async</span> <span class="fn">close</span>() { <span class="cm">/* ... */</span> }
}

<span class="kw">class</span> <span class="type">MongoDB</span> <span class="kw">implements</span> <span class="type">Database</span> {
    <span class="kw">async</span> <span class="fn">connect</span>() { <span class="cm">/* mongo connect */</span> }
    <span class="kw">async</span> <span class="fn">query</span>(sql: <span class="type">string</span>) { <span class="cm">/* ... */</span> <span class="kw">return</span> []; }
    <span class="kw">async</span> <span class="fn">close</span>() { <span class="cm">/* ... */</span> }
}

<span class="cm">// Factory function</span>
<span class="kw">function</span> <span class="fn">createDatabase</span>(type: <span class="str">"postgres"</span> | <span class="str">"mongo"</span>): <span class="type">Database</span> {
    <span class="kw">switch</span> (type) {
        <span class="kw">case</span> <span class="str">"postgres"</span>: <span class="kw">return new</span> <span class="type">PostgresDB</span>();
        <span class="kw">case</span> <span class="str">"mongo"</span>:    <span class="kw">return new</span> <span class="type">MongoDB</span>();
    }
}

<span class="cm">// Next.js: Database ditentukan oleh environment</span>
<span class="kw">const</span> db = <span class="fn">createDatabase</span>(
    process.env.DB_TYPE <span class="kw">as</span> <span class="str">"postgres"</span> | <span class="str">"mongo"</span>
);

<span class="kw">export async function</span> <span class="fn">GET</span>() {
    <span class="kw">await</span> db.<span class="fn">connect</span>();
    <span class="kw">const</span> data = <span class="kw">await</span> db.<span class="fn">query</span>(<span class="str">"SELECT * FROM users"</span>);
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>(data);
}</div>
    </div>
</div>

<!-- ==================== 4B. STRATEGY PATTERN ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--green)"><span class="badge-green">Behavioral</span> Strategy Pattern</h3>
    <p>${t('Strategy Pattern mendefinisikan sekelompok algoritma, mengenkapsulasi masing-masing, dan membuatnya <strong>dapat dipertukarkan</strong>. Client bisa memilih strategi yang tepat saat runtime.', 'Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them <strong>interchangeable</strong>. The client can choose the appropriate strategy at runtime.')}</p>

    <div class="tabs">
        <button class="tab-btn active" data-tab="str-java">Java</button>
        <button class="tab-btn" data-tab="str-go">Go</button>
        <button class="tab-btn" data-tab="str-ts">TypeScript</button>
    </div>

    <div data-tab-content="str-java" class="tab-content active">
        <div class="code-block"><span class="cm">// Strategy interface</span>
<span class="kw">public interface</span> <span class="type">CompressionStrategy</span> {
    <span class="type">byte</span>[] <span class="fn">compress</span>(<span class="type">byte</span>[] data);
    <span class="type">byte</span>[] <span class="fn">decompress</span>(<span class="type">byte</span>[] data);
    <span class="type">String</span> <span class="fn">getExtension</span>();
}

<span class="kw">public class</span> <span class="type">ZipStrategy</span> <span class="kw">implements</span> <span class="type">CompressionStrategy</span> {
    <span class="kw">public</span> <span class="type">byte</span>[] <span class="fn">compress</span>(<span class="type">byte</span>[] data) { <span class="cm">/* ZIP algo */</span> }
    <span class="kw">public</span> <span class="type">byte</span>[] <span class="fn">decompress</span>(<span class="type">byte</span>[] data) { <span class="cm">/* ... */</span> }
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">getExtension</span>() { <span class="kw">return</span> <span class="str">".zip"</span>; }
}

<span class="kw">public class</span> <span class="type">GzipStrategy</span> <span class="kw">implements</span> <span class="type">CompressionStrategy</span> {
    <span class="kw">public</span> <span class="type">byte</span>[] <span class="fn">compress</span>(<span class="type">byte</span>[] data) { <span class="cm">/* GZIP algo */</span> }
    <span class="kw">public</span> <span class="type">byte</span>[] <span class="fn">decompress</span>(<span class="type">byte</span>[] data) { <span class="cm">/* ... */</span> }
    <span class="kw">public</span> <span class="type">String</span> <span class="fn">getExtension</span>() { <span class="kw">return</span> <span class="str">".gz"</span>; }
}

<span class="cm">// Context - strategi bisa diganti saat runtime</span>
<span class="kw">public class</span> <span class="type">FileCompressor</span> {
    <span class="kw">private</span> <span class="type">CompressionStrategy</span> strategy;

    <span class="kw">public void</span> <span class="fn">setStrategy</span>(<span class="type">CompressionStrategy</span> s) { <span class="kw">this</span>.strategy = s; }

    <span class="kw">public void</span> <span class="fn">compressFile</span>(<span class="type">String</span> filename) {
        <span class="type">byte</span>[] data = <span class="fn">readFile</span>(filename);
        <span class="type">byte</span>[] compressed = strategy.<span class="fn">compress</span>(data);
        <span class="fn">writeFile</span>(filename + strategy.<span class="fn">getExtension</span>(), compressed);
    }
}</div>
    </div>

    <div data-tab-content="str-go" class="tab-content">
        <div class="code-block"><span class="cm">// Go: Strategy sebagai interface + function type</span>
<span class="kw">type</span> <span class="type">CompressionStrategy</span> <span class="kw">interface</span> {
    <span class="fn">Compress</span>(data []<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>)
    <span class="fn">Decompress</span>(data []<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>)
    <span class="fn">Extension</span>() <span class="type">string</span>
}

<span class="kw">type</span> <span class="type">ZipStrategy</span> <span class="kw">struct</span>{}
<span class="kw">func</span> (z <span class="type">ZipStrategy</span>) <span class="fn">Compress</span>(data []<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>) { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (z <span class="type">ZipStrategy</span>) <span class="fn">Decompress</span>(data []<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>) { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (z <span class="type">ZipStrategy</span>) <span class="fn">Extension</span>() <span class="type">string</span> { <span class="kw">return</span> <span class="str">".zip"</span> }

<span class="kw">type</span> <span class="type">GzipStrategy</span> <span class="kw">struct</span>{}
<span class="kw">func</span> (g <span class="type">GzipStrategy</span>) <span class="fn">Compress</span>(data []<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>) { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (g <span class="type">GzipStrategy</span>) <span class="fn">Decompress</span>(data []<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>) { <span class="cm">/* ... */</span> }
<span class="kw">func</span> (g <span class="type">GzipStrategy</span>) <span class="fn">Extension</span>() <span class="type">string</span> { <span class="kw">return</span> <span class="str">".gz"</span> }

<span class="cm">// Context</span>
<span class="kw">type</span> <span class="type">FileCompressor</span> <span class="kw">struct</span> {
    strategy <span class="type">CompressionStrategy</span>
}

<span class="kw">func</span> <span class="fn">NewFileCompressor</span>(s <span class="type">CompressionStrategy</span>) *<span class="type">FileCompressor</span> {
    <span class="kw">return</span> &<span class="type">FileCompressor</span>{strategy: s}
}

<span class="kw">func</span> (fc *<span class="type">FileCompressor</span>) <span class="fn">CompressFile</span>(filename <span class="type">string</span>) <span class="type">error</span> {
    data, err := os.<span class="fn">ReadFile</span>(filename)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> err }
    compressed, err := fc.strategy.<span class="fn">Compress</span>(data)
    <span class="kw">if</span> err != <span class="kw">nil</span> { <span class="kw">return</span> err }
    <span class="kw">return</span> os.<span class="fn">WriteFile</span>(filename+fc.strategy.<span class="fn">Extension</span>(), compressed, <span class="num">0644</span>)
}

<span class="cm">// Go alternative: function type sebagai strategy</span>
<span class="kw">type</span> <span class="type">CompressFunc</span> <span class="kw">func</span>([]<span class="type">byte</span>) ([]<span class="type">byte</span>, <span class="type">error</span>)</div>
    </div>

    <div data-tab-content="str-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript Strategy di Next.js</span>
<span class="kw">interface</span> <span class="type">AuthStrategy</span> {
    <span class="fn">authenticate</span>(req: <span class="type">Request</span>): <span class="type">Promise</span>&lt;<span class="type">User</span> | <span class="type">null</span>&gt;;
}

<span class="kw">class</span> <span class="type">JWTAuth</span> <span class="kw">implements</span> <span class="type">AuthStrategy</span> {
    <span class="kw">async</span> <span class="fn">authenticate</span>(req: <span class="type">Request</span>): <span class="type">Promise</span>&lt;<span class="type">User</span> | <span class="type">null</span>&gt; {
        <span class="kw">const</span> token = req.headers.<span class="fn">get</span>(<span class="str">"Authorization"</span>)?.<span class="fn">replace</span>(<span class="str">"Bearer "</span>, <span class="str">""</span>);
        <span class="kw">if</span> (!token) <span class="kw">return null</span>;
        <span class="kw">return</span> <span class="fn">verifyJWT</span>(token);
    }
}

<span class="kw">class</span> <span class="type">APIKeyAuth</span> <span class="kw">implements</span> <span class="type">AuthStrategy</span> {
    <span class="kw">async</span> <span class="fn">authenticate</span>(req: <span class="type">Request</span>): <span class="type">Promise</span>&lt;<span class="type">User</span> | <span class="type">null</span>&gt; {
        <span class="kw">const</span> key = req.headers.<span class="fn">get</span>(<span class="str">"X-API-Key"</span>);
        <span class="kw">if</span> (!key) <span class="kw">return null</span>;
        <span class="kw">return</span> <span class="fn">findUserByApiKey</span>(key);
    }
}

<span class="cm">// Middleware Next.js dengan Strategy</span>
<span class="kw">function</span> <span class="fn">withAuth</span>(strategy: <span class="type">AuthStrategy</span>) {
    <span class="kw">return async function</span>(req: <span class="type">Request</span>) {
        <span class="kw">const</span> user = <span class="kw">await</span> strategy.<span class="fn">authenticate</span>(req);
        <span class="kw">if</span> (!user) <span class="kw">return new</span> <span class="type">Response</span>(<span class="str">"Unauthorized"</span>, { status: <span class="num">401</span> });
        <span class="kw">return</span> user;
    };
}

<span class="cm">// API Route - pilih strategy berdasarkan config</span>
<span class="kw">const</span> auth = process.env.AUTH_TYPE === <span class="str">"jwt"</span>
    ? <span class="kw">new</span> <span class="type">JWTAuth</span>()
    : <span class="kw">new</span> <span class="type">APIKeyAuth</span>();

<span class="kw">export async function</span> <span class="fn">GET</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn">withAuth</span>(auth)(req);
    <span class="kw">if</span> (user <span class="kw">instanceof</span> <span class="type">Response</span>) <span class="kw">return</span> user;
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ user });
}</div>
    </div>
</div>

<!-- ==================== 4C. OBSERVER PATTERN ==================== -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)"><span class="badge-purple">Behavioral</span> Observer Pattern</h3>
    <p>${t('Observer Pattern mendefinisikan hubungan <strong>one-to-many</strong> antara objek. Ketika satu objek (subject) berubah state, semua observer-nya otomatis diberi tahu dan diperbarui.', 'Observer Pattern defines a <strong>one-to-many</strong> relationship between objects. When one object (subject) changes state, all its observers are automatically notified and updated.')}</p>

    <div class="flow-diagram">
        <div class="flow-node" style="background:rgba(52,211,153,0.15);border-color:var(--green)">Subject<br>(Event Emitter)</div>
        <div class="flow-arrow">&rarr; notify</div>
        <div class="flow-node" style="background:rgba(56,189,248,0.15);border-color:var(--accent)">Observer 1</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:rgba(167,139,250,0.15);border-color:var(--accent3)">Observer 2</div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:rgba(248,113,113,0.15);border-color:var(--red)">Observer N</div>
    </div>

    <div class="tabs">
        <button class="tab-btn active" data-tab="obs-java">Java</button>
        <button class="tab-btn" data-tab="obs-go">Go</button>
        <button class="tab-btn" data-tab="obs-ts">TypeScript</button>
    </div>

    <div data-tab-content="obs-java" class="tab-content active">
        <div class="code-block"><span class="cm">// Observer interface</span>
<span class="kw">public interface</span> <span class="type">EventListener</span> {
    <span class="type">void</span> <span class="fn">onEvent</span>(<span class="type">String</span> eventType, <span class="type">Object</span> data);
}

<span class="cm">// Subject (Event Emitter)</span>
<span class="kw">public class</span> <span class="type">EventBus</span> {
    <span class="kw">private</span> <span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">List</span>&lt;<span class="type">EventListener</span>&gt;&gt; listeners = <span class="kw">new</span> <span class="type">HashMap</span>&lt;&gt;();

    <span class="kw">public void</span> <span class="fn">subscribe</span>(<span class="type">String</span> eventType, <span class="type">EventListener</span> listener) {
        listeners.<span class="fn">computeIfAbsent</span>(eventType, k -> <span class="kw">new</span> <span class="type">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(listener);
    }

    <span class="kw">public void</span> <span class="fn">unsubscribe</span>(<span class="type">String</span> eventType, <span class="type">EventListener</span> listener) {
        listeners.<span class="fn">getOrDefault</span>(eventType, <span class="type">List</span>.<span class="fn">of</span>()).<span class="fn">remove</span>(listener);
    }

    <span class="kw">public void</span> <span class="fn">publish</span>(<span class="type">String</span> eventType, <span class="type">Object</span> data) {
        <span class="kw">for</span> (<span class="type">EventListener</span> l : listeners.<span class="fn">getOrDefault</span>(eventType, <span class="type">List</span>.<span class="fn">of</span>())) {
            l.<span class="fn">onEvent</span>(eventType, data);
        }
    }
}

<span class="cm">// Penggunaan</span>
<span class="kw">public class</span> <span class="type">EmailNotifier</span> <span class="kw">implements</span> <span class="type">EventListener</span> {
    <span class="kw">public void</span> <span class="fn">onEvent</span>(<span class="type">String</span> type, <span class="type">Object</span> data) {
        System.out.<span class="fn">println</span>(<span class="str">"Kirim email tentang: "</span> + type);
    }
}

<span class="cm">// bus.subscribe("order.created", new EmailNotifier());</span>
<span class="cm">// bus.publish("order.created", order);</span></div>
    </div>

    <div data-tab-content="obs-go" class="tab-content">
        <div class="code-block"><span class="cm">// Go: Observer dengan channel atau callback</span>
<span class="kw">type</span> <span class="type">EventHandler</span> <span class="kw">func</span>(eventType <span class="type">string</span>, data <span class="kw">any</span>)

<span class="kw">type</span> <span class="type">EventBus</span> <span class="kw">struct</span> {
    mu        sync.<span class="type">RWMutex</span>
    listeners <span class="kw">map</span>[<span class="type">string</span>][]<span class="type">EventHandler</span>
}

<span class="kw">func</span> <span class="fn">NewEventBus</span>() *<span class="type">EventBus</span> {
    <span class="kw">return</span> &<span class="type">EventBus</span>{
        listeners: <span class="fn">make</span>(<span class="kw">map</span>[<span class="type">string</span>][]<span class="type">EventHandler</span>),
    }
}

<span class="kw">func</span> (eb *<span class="type">EventBus</span>) <span class="fn">Subscribe</span>(event <span class="type">string</span>, handler <span class="type">EventHandler</span>) {
    eb.mu.<span class="fn">Lock</span>()
    <span class="kw">defer</span> eb.mu.<span class="fn">Unlock</span>()
    eb.listeners[event] = <span class="fn">append</span>(eb.listeners[event], handler)
}

<span class="kw">func</span> (eb *<span class="type">EventBus</span>) <span class="fn">Publish</span>(event <span class="type">string</span>, data <span class="kw">any</span>) {
    eb.mu.<span class="fn">RLock</span>()
    <span class="kw">defer</span> eb.mu.<span class="fn">RUnlock</span>()
    <span class="kw">for</span> _, handler := <span class="kw">range</span> eb.listeners[event] {
        <span class="kw">go</span> <span class="fn">handler</span>(event, data) <span class="cm">// goroutine = async notification</span>
    }
}

<span class="cm">// Penggunaan di Gin handler:</span>
<span class="cm">// bus := NewEventBus()</span>
<span class="cm">// bus.Subscribe("order.created", func(e string, d any) {</span>
<span class="cm">//     sendEmail(d.(Order).Email, "Pesanan dibuat")</span>
<span class="cm">// })</span></div>
    </div>

    <div data-tab-content="obs-ts" class="tab-content">
        <div class="code-block"><span class="cm">// TypeScript Observer / EventEmitter</span>
<span class="kw">type</span> <span class="type">EventHandler</span>&lt;T = <span class="type">any</span>&gt; = (data: T) => <span class="type">void</span>;

<span class="kw">class</span> <span class="type">EventBus</span> {
    <span class="kw">private</span> listeners = <span class="kw">new</span> <span class="type">Map</span>&lt;<span class="type">string</span>, <span class="type">EventHandler</span>[]&gt;();

    <span class="fn">subscribe</span>&lt;T&gt;(event: <span class="type">string</span>, handler: <span class="type">EventHandler</span>&lt;T&gt;) {
        <span class="kw">const</span> handlers = <span class="kw">this</span>.listeners.<span class="fn">get</span>(event) ?? [];
        handlers.<span class="fn">push</span>(handler <span class="kw">as</span> <span class="type">EventHandler</span>);
        <span class="kw">this</span>.listeners.<span class="fn">set</span>(event, handlers);
    }

    <span class="fn">publish</span>&lt;T&gt;(event: <span class="type">string</span>, data: T) {
        <span class="kw">const</span> handlers = <span class="kw">this</span>.listeners.<span class="fn">get</span>(event) ?? [];
        handlers.<span class="fn">forEach</span>(h => <span class="fn">h</span>(data));
    }

    <span class="fn">unsubscribe</span>(event: <span class="type">string</span>, handler: <span class="type">EventHandler</span>) {
        <span class="kw">const</span> handlers = <span class="kw">this</span>.listeners.<span class="fn">get</span>(event) ?? [];
        <span class="kw">this</span>.listeners.<span class="fn">set</span>(event, handlers.<span class="fn">filter</span>(h => h !== handler));
    }
}

<span class="cm">// Singleton event bus untuk Next.js app</span>
<span class="kw">export const</span> eventBus = <span class="kw">new</span> <span class="type">EventBus</span>();

<span class="cm">// Subscribe di server component/API route</span>
eventBus.<span class="fn">subscribe</span>&lt;<span class="type">Order</span>&gt;(<span class="str">"order.created"</span>, <span class="kw">async</span> (order) => {
    <span class="kw">await</span> <span class="fn">sendEmail</span>(order.email, <span class="str">"Pesanan dibuat!"</span>);
});

eventBus.<span class="fn">subscribe</span>&lt;<span class="type">Order</span>&gt;(<span class="str">"order.created"</span>, <span class="kw">async</span> (order) => {
    <span class="kw">await</span> <span class="fn">updateInventory</span>(order.items);
});

<span class="cm">// Publish di API route</span>
<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">const</span> order = <span class="kw">await</span> req.<span class="fn">json</span>();
    <span class="kw">await</span> prisma.order.<span class="fn">create</span>({ data: order });
    eventBus.<span class="fn">publish</span>(<span class="str">"order.created"</span>, order); <span class="cm">// semua observer dipanggil</span>
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ success: <span class="kw">true</span> });
}</div>
    </div>
</div>

<!-- =====================================================================
     BAGIAN 5: CLEAN ARCHITECTURE DENGAN SOLID
     ===================================================================== -->
<h2 class="animate-in">${t('5. Clean Architecture dengan SOLID', '5. Clean Architecture with SOLID')}</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">${t('Arsitektur Berlapis (Layered Architecture)', 'Layered Architecture')}</h3>
    <p>${t('Clean Architecture menerapkan SOLID pada tingkat arsitektur. Dependensi selalu mengarah ke dalam (dari infrastruktur ke domain). Berikut pola <strong>Handler &rarr; Service &rarr; Repository</strong> yang umum digunakan.', 'Clean Architecture applies SOLID at the architectural level. Dependencies always point inward (from infrastructure to domain). Here is the commonly used <strong>Handler &rarr; Service &rarr; Repository</strong> pattern.')}</p>

    <div class="flow-diagram" style="margin:1.5rem 0">
        <div class="flow-node" style="background:rgba(56,189,248,0.15);border-color:var(--accent)">
            <strong>Handler / Controller</strong><br>
            <span style="font-size:0.8rem">${t('Menerima HTTP request', 'Receives HTTP request')}<br>${t('Validasi input', 'Input validation')}<br>${t('Memanggil service', 'Calls service')}</span>
        </div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:rgba(52,211,153,0.15);border-color:var(--green)">
            <strong>Service / Use Case</strong><br>
            <span style="font-size:0.8rem">Business logic<br>Orchestration<br>${t('Tidak tahu tentang HTTP', 'Knows nothing about HTTP')}</span>
        </div>
        <div class="flow-arrow">&rarr;</div>
        <div class="flow-node" style="background:rgba(167,139,250,0.15);border-color:var(--accent3)">
            <strong>Repository / Gateway</strong><br>
            <span style="font-size:0.8rem">${t('Akses data', 'Data access')}<br>Database queries<br>External API calls</span>
        </div>
    </div>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Dependency Rule:</strong> ${t('Layer luar bergantung pada layer dalam, BUKAN sebaliknya. Service tidak tahu apakah handler-nya adalah REST, gRPC, atau CLI.', 'Outer layers depend on inner layers, NOT the other way around. Service does not know whether its handler is REST, gRPC, or CLI.')}</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>${t('Interface di batas layer:', 'Interface at layer boundaries:')}</strong> ${t('Service mendefinisikan interface repository. Implementasi konkrit ada di layer infrastruktur.', 'Service defines the repository interface. Concrete implementations reside in the infrastructure layer.')}</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Dependency Injection:</strong> ${t('Semua dependensi di-inject, tidak di-create langsung. Ini membuat testing dan penggantian implementasi mudah.', 'All dependencies are injected, not created directly. This makes testing and swapping implementations easy.')}</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">${t('Implementasi Clean Architecture', 'Clean Architecture Implementation')}</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="arch-go">Go (Gin)</button>
        <button class="tab-btn" data-tab="arch-java">Java (Spring Boot)</button>
        <button class="tab-btn" data-tab="arch-ts">TypeScript (Next.js)</button>
    </div>

    <div data-tab-content="arch-go" class="tab-content active">
        <p>Struktur project Go dengan Clean Architecture:</p>
        <div class="code-block"><span class="cm">// Struktur folder:</span>
<span class="cm">// internal/</span>
<span class="cm">//   domain/         - Entity & interface (paling dalam)</span>
<span class="cm">//   service/        - Business logic</span>
<span class="cm">//   repository/     - Implementasi akses data</span>
<span class="cm">//   handler/        - HTTP handler (Gin)</span>
<span class="cm">// cmd/server/main.go - Wiring & startup</span>

<span class="cm">// ---- internal/domain/product.go ----</span>
<span class="kw">package</span> domain

<span class="kw">type</span> <span class="type">Product</span> <span class="kw">struct</span> {
    ID    <span class="type">int</span>     <span class="str">\`json:"id"\`</span>
    Name  <span class="type">string</span>  <span class="str">\`json:"name"\`</span>
    Price <span class="type">float64</span> <span class="str">\`json:"price"\`</span>
}

<span class="cm">// Interface didefinisikan di domain layer (DIP!)</span>
<span class="kw">type</span> <span class="type">ProductRepository</span> <span class="kw">interface</span> {
    <span class="fn">FindAll</span>() ([]<span class="type">Product</span>, <span class="type">error</span>)
    <span class="fn">FindByID</span>(id <span class="type">int</span>) (*<span class="type">Product</span>, <span class="type">error</span>)
    <span class="fn">Create</span>(p *<span class="type">Product</span>) <span class="type">error</span>
}

<span class="cm">// ---- internal/service/product_service.go ----</span>
<span class="kw">package</span> service

<span class="kw">type</span> <span class="type">ProductService</span> <span class="kw">struct</span> {
    repo domain.<span class="type">ProductRepository</span>  <span class="cm">// bergantung pada INTERFACE</span>
}

<span class="kw">func</span> <span class="fn">NewProductService</span>(repo domain.<span class="type">ProductRepository</span>) *<span class="type">ProductService</span> {
    <span class="kw">return</span> &<span class="type">ProductService</span>{repo: repo}
}

<span class="kw">func</span> (s *<span class="type">ProductService</span>) <span class="fn">GetAllProducts</span>() ([]domain.<span class="type">Product</span>, <span class="type">error</span>) {
    <span class="kw">return</span> s.repo.<span class="fn">FindAll</span>()
}

<span class="kw">func</span> (s *<span class="type">ProductService</span>) <span class="fn">CreateProduct</span>(p *domain.<span class="type">Product</span>) <span class="type">error</span> {
    <span class="kw">if</span> p.Price < <span class="num">0</span> {
        <span class="kw">return</span> fmt.<span class="fn">Errorf</span>(<span class="str">"harga tidak boleh negatif"</span>)
    }
    <span class="kw">return</span> s.repo.<span class="fn">Create</span>(p)
}

<span class="cm">// ---- internal/repository/postgres_product.go ----</span>
<span class="kw">package</span> repository

<span class="kw">type</span> <span class="type">PostgresProductRepo</span> <span class="kw">struct</span> { db *sql.<span class="type">DB</span> }

<span class="kw">func</span> (r *<span class="type">PostgresProductRepo</span>) <span class="fn">FindAll</span>() ([]domain.<span class="type">Product</span>, <span class="type">error</span>) {
    rows, err := r.db.<span class="fn">Query</span>(<span class="str">"SELECT id, name, price FROM products"</span>)
    <span class="cm">// ... scan rows ...</span>
}

<span class="cm">// ---- internal/handler/product_handler.go ----</span>
<span class="kw">package</span> handler

<span class="kw">type</span> <span class="type">ProductHandler</span> <span class="kw">struct</span> { svc *service.<span class="type">ProductService</span> }

<span class="kw">func</span> (h *<span class="type">ProductHandler</span>) <span class="fn">GetAll</span>(c *gin.<span class="type">Context</span>) {
    products, err := h.svc.<span class="fn">GetAllProducts</span>()
    <span class="kw">if</span> err != <span class="kw">nil</span> { c.<span class="fn">JSON</span>(<span class="num">500</span>, gin.<span class="type">H</span>{<span class="str">"error"</span>: err.<span class="fn">Error</span>()}); <span class="kw">return</span> }
    c.<span class="fn">JSON</span>(<span class="num">200</span>, products)
}

<span class="cm">// ---- cmd/server/main.go (Wiring) ----</span>
<span class="kw">func</span> <span class="fn">main</span>() {
    db := <span class="fn">connectDB</span>()
    repo := &repository.<span class="type">PostgresProductRepo</span>{DB: db}
    svc := service.<span class="fn">NewProductService</span>(repo)
    h := &handler.<span class="type">ProductHandler</span>{Svc: svc}

    r := gin.<span class="fn">Default</span>()
    r.<span class="fn">GET</span>(<span class="str">"/products"</span>, h.GetAll)
    r.<span class="fn">POST</span>(<span class="str">"/products"</span>, h.Create)
    r.<span class="fn">Run</span>(<span class="str">":8080"</span>)
}</div>
    </div>

    <div data-tab-content="arch-java" class="tab-content">
        <p>Struktur project Spring Boot dengan Clean Architecture:</p>
        <div class="code-block"><span class="cm">// Struktur folder:</span>
<span class="cm">// src/main/java/com/example/</span>
<span class="cm">//   domain/         - Entity & repository interface</span>
<span class="cm">//   service/        - Business logic</span>
<span class="cm">//   repository/     - JPA implementation</span>
<span class="cm">//   controller/     - REST controllers</span>

<span class="cm">// ---- domain/Product.java ----</span>
<span class="cm">@Entity</span>
<span class="kw">public class</span> <span class="type">Product</span> {
    <span class="cm">@Id @GeneratedValue</span>
    <span class="kw">private</span> <span class="type">Long</span> id;
    <span class="kw">private</span> <span class="type">String</span> name;
    <span class="kw">private</span> <span class="type">BigDecimal</span> price;
    <span class="cm">// getters, setters, constructor...</span>
}

<span class="cm">// ---- domain/ProductRepository.java (Interface) ----</span>
<span class="kw">public interface</span> <span class="type">ProductRepository</span> {
    <span class="type">List</span>&lt;<span class="type">Product</span>&gt; <span class="fn">findAll</span>();
    <span class="type">Optional</span>&lt;<span class="type">Product</span>&gt; <span class="fn">findById</span>(<span class="type">Long</span> id);
    <span class="type">Product</span> <span class="fn">save</span>(<span class="type">Product</span> product);
}

<span class="cm">// ---- service/ProductService.java ----</span>
<span class="cm">@Service</span>
<span class="kw">public class</span> <span class="type">ProductService</span> {
    <span class="kw">private final</span> <span class="type">ProductRepository</span> repository;

    <span class="cm">// DI via constructor (Spring @Autowired implicit)</span>
    <span class="kw">public</span> <span class="fn">ProductService</span>(<span class="type">ProductRepository</span> repository) {
        <span class="kw">this</span>.repository = repository;
    }

    <span class="kw">public</span> <span class="type">List</span>&lt;<span class="type">Product</span>&gt; <span class="fn">getAllProducts</span>() {
        <span class="kw">return</span> repository.<span class="fn">findAll</span>();
    }

    <span class="kw">public</span> <span class="type">Product</span> <span class="fn">createProduct</span>(<span class="type">Product</span> product) {
        <span class="kw">if</span> (product.getPrice().<span class="fn">compareTo</span>(<span class="type">BigDecimal</span>.ZERO) < <span class="num">0</span>) {
            <span class="kw">throw new</span> <span class="type">IllegalArgumentException</span>(<span class="str">"Harga tidak boleh negatif"</span>);
        }
        <span class="kw">return</span> repository.<span class="fn">save</span>(product);
    }
}

<span class="cm">// ---- repository/JpaProductRepository.java ----</span>
<span class="cm">@Repository</span>
<span class="kw">public class</span> <span class="type">JpaProductRepository</span> <span class="kw">implements</span> <span class="type">ProductRepository</span> {
    <span class="kw">private final</span> <span class="type">JpaProductRepoSpring</span> jpa;
    <span class="cm">// delegate to Spring Data JPA...</span>
}

<span class="cm">// ---- controller/ProductController.java ----</span>
<span class="cm">@RestController</span>
<span class="cm">@RequestMapping("/api/products")</span>
<span class="kw">public class</span> <span class="type">ProductController</span> {
    <span class="kw">private final</span> <span class="type">ProductService</span> service;

    <span class="kw">public</span> <span class="fn">ProductController</span>(<span class="type">ProductService</span> service) {
        <span class="kw">this</span>.service = service;
    }

    <span class="cm">@GetMapping</span>
    <span class="kw">public</span> <span class="type">List</span>&lt;<span class="type">Product</span>&gt; <span class="fn">getAll</span>() {
        <span class="kw">return</span> service.<span class="fn">getAllProducts</span>();
    }

    <span class="cm">@PostMapping</span>
    <span class="kw">public</span> <span class="type">Product</span> <span class="fn">create</span>(<span class="cm">@RequestBody</span> <span class="type">Product</span> product) {
        <span class="kw">return</span> service.<span class="fn">createProduct</span>(product);
    }
}</div>
    </div>

    <div data-tab-content="arch-ts" class="tab-content">
        <p>Struktur project Next.js App Router dengan Clean Architecture:</p>
        <div class="code-block"><span class="cm">// Struktur folder Next.js:</span>
<span class="cm">// lib/</span>
<span class="cm">//   domain/         - Types & interface</span>
<span class="cm">//   services/       - Business logic</span>
<span class="cm">//   repositories/   - Data access (Prisma)</span>
<span class="cm">// app/</span>
<span class="cm">//   api/products/   - API routes (handler)</span>
<span class="cm">//   products/       - UI pages</span>

<span class="cm">// ---- lib/domain/product.ts ----</span>
<span class="kw">export interface</span> <span class="type">Product</span> {
    id: <span class="type">string</span>;
    name: <span class="type">string</span>;
    price: <span class="type">number</span>;
}

<span class="kw">export interface</span> <span class="type">ProductRepository</span> {
    <span class="fn">findAll</span>(): <span class="type">Promise</span>&lt;<span class="type">Product</span>[]&gt;;
    <span class="fn">findById</span>(id: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">Product</span> | <span class="type">null</span>&gt;;
    <span class="fn">create</span>(product: <span class="type">Omit</span>&lt;<span class="type">Product</span>, <span class="str">"id"</span>&gt;): <span class="type">Promise</span>&lt;<span class="type">Product</span>&gt;;
}

<span class="cm">// ---- lib/repositories/prismaProductRepo.ts ----</span>
<span class="kw">import</span> { prisma } <span class="kw">from</span> <span class="str">"@/lib/prisma"</span>;
<span class="kw">import</span> <span class="kw">type</span> { <span class="type">ProductRepository</span>, <span class="type">Product</span> } <span class="kw">from</span> <span class="str">"@/lib/domain/product"</span>;

<span class="kw">export class</span> <span class="type">PrismaProductRepo</span> <span class="kw">implements</span> <span class="type">ProductRepository</span> {
    <span class="kw">async</span> <span class="fn">findAll</span>(): <span class="type">Promise</span>&lt;<span class="type">Product</span>[]&gt; {
        <span class="kw">return</span> prisma.product.<span class="fn">findMany</span>();
    }

    <span class="kw">async</span> <span class="fn">findById</span>(id: <span class="type">string</span>): <span class="type">Promise</span>&lt;<span class="type">Product</span> | <span class="type">null</span>&gt; {
        <span class="kw">return</span> prisma.product.<span class="fn">findUnique</span>({ where: { id } });
    }

    <span class="kw">async</span> <span class="fn">create</span>(data: <span class="type">Omit</span>&lt;<span class="type">Product</span>, <span class="str">"id"</span>&gt;): <span class="type">Promise</span>&lt;<span class="type">Product</span>&gt; {
        <span class="kw">return</span> prisma.product.<span class="fn">create</span>({ data });
    }
}

<span class="cm">// ---- lib/services/productService.ts ----</span>
<span class="kw">import</span> <span class="kw">type</span> { <span class="type">ProductRepository</span>, <span class="type">Product</span> } <span class="kw">from</span> <span class="str">"@/lib/domain/product"</span>;

<span class="kw">export class</span> <span class="type">ProductService</span> {
    <span class="kw">constructor</span>(<span class="kw">private</span> repo: <span class="type">ProductRepository</span>) {}

    <span class="kw">async</span> <span class="fn">getAllProducts</span>(): <span class="type">Promise</span>&lt;<span class="type">Product</span>[]&gt; {
        <span class="kw">return this</span>.repo.<span class="fn">findAll</span>();
    }

    <span class="kw">async</span> <span class="fn">createProduct</span>(data: <span class="type">Omit</span>&lt;<span class="type">Product</span>, <span class="str">"id"</span>&gt;): <span class="type">Promise</span>&lt;<span class="type">Product</span>&gt; {
        <span class="kw">if</span> (data.price < <span class="num">0</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">"Harga tidak boleh negatif"</span>);
        <span class="kw">return this</span>.repo.<span class="fn">create</span>(data);
    }
}

<span class="cm">// ---- app/api/products/route.ts (Handler / API Route) ----</span>
<span class="kw">import</span> { <span class="type">ProductService</span> } <span class="kw">from</span> <span class="str">"@/lib/services/productService"</span>;
<span class="kw">import</span> { <span class="type">PrismaProductRepo</span> } <span class="kw">from</span> <span class="str">"@/lib/repositories/prismaProductRepo"</span>;

<span class="cm">// Wiring (bisa dipindah ke DI container)</span>
<span class="kw">const</span> repo = <span class="kw">new</span> <span class="type">PrismaProductRepo</span>();
<span class="kw">const</span> service = <span class="kw">new</span> <span class="type">ProductService</span>(repo);

<span class="kw">export async function</span> <span class="fn">GET</span>() {
    <span class="kw">const</span> products = <span class="kw">await</span> service.<span class="fn">getAllProducts</span>();
    <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>(products);
}

<span class="kw">export async function</span> <span class="fn">POST</span>(req: <span class="type">Request</span>) {
    <span class="kw">try</span> {
        <span class="kw">const</span> data = <span class="kw">await</span> req.<span class="fn">json</span>();
        <span class="kw">const</span> product = <span class="kw">await</span> service.<span class="fn">createProduct</span>(data);
        <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>(product, { status: <span class="num">201</span> });
    } <span class="kw">catch</span> (e) {
        <span class="kw">return</span> <span class="type">Response</span>.<span class="fn">json</span>({ error: e.message }, { status: <span class="num">400</span> });
    }
}

<span class="cm">// ---- app/products/page.tsx (Server Component) ----</span>
<span class="kw">export default async function</span> <span class="fn">ProductsPage</span>() {
    <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"http://localhost:3000/api/products"</span>);
    <span class="kw">const</span> products: <span class="type">Product</span>[] = <span class="kw">await</span> res.<span class="fn">json</span>();

    <span class="kw">return</span> (
        &lt;main&gt;
            &lt;h1&gt;Daftar Produk&lt;/h1&gt;
            {products.<span class="fn">map</span>(p => (
                &lt;div key={p.id}&gt;
                    &lt;h2&gt;{p.name}&lt;/h2&gt;
                    &lt;p&gt;Rp {p.price.<span class="fn">toLocaleString</span>(<span class="str">"id-ID"</span>)}&lt;/p&gt;
                &lt;/div&gt;
            ))}
        &lt;/main&gt;
    );
}</div>
    </div>
</div>

<!-- SOLID IN ARCHITECTURE SUMMARY -->
<div class="card animate-in">
    <h3 style="color:var(--accent3)">${t('Ringkasan: SOLID dalam Arsitektur', 'Summary: SOLID in Architecture')}</h3>

    <div class="table-wrapper">
        <table>
            <tr>
                <th>SOLID</th>
                <th>${t('Penerapan di Arsitektur', 'Application in Architecture')}</th>
                <th>${t('Contoh Praktis', 'Practical Example')}</th>
            </tr>
            <tr>
                <td><span class="badge-blue">SRP</span></td>
                <td>${t('Setiap layer punya satu tanggung jawab', 'Each layer has a single responsibility')}</td>
                <td>${t('Handler hanya menangani HTTP, Service hanya bisnis logic, Repository hanya data access', 'Handler only handles HTTP, Service only business logic, Repository only data access')}</td>
            </tr>
            <tr>
                <td><span class="badge-green">OCP</span></td>
                <td>${t('Tambah fitur tanpa ubah kode yang ada', 'Add features without modifying existing code')}</td>
                <td>${t('Tambah repository baru (MongoDB) tanpa mengubah service', 'Add a new repository (MongoDB) without changing the service')}</td>
            </tr>
            <tr>
                <td><span class="badge-purple">LSP</span></td>
                <td>${t('Implementasi bisa diganti', 'Implementations are substitutable')}</td>
                <td>${t('Ganti PostgresRepo dengan MongoRepo tanpa ubah service', 'Replace PostgresRepo with MongoRepo without changing the service')}</td>
            </tr>
            <tr>
                <td><span class="badge-orange">ISP</span></td>
                <td>${t('Interface spesifik per kebutuhan', 'Specific interfaces per need')}</td>
                <td>${t('ReadOnlyRepo vs FullRepo - query service hanya butuh Read', 'ReadOnlyRepo vs FullRepo - query service only needs Read')}</td>
            </tr>
            <tr>
                <td><span class="badge-red">DIP</span></td>
                <td>${t('Layer dalam mendefinisikan interface', 'Inner layers define interfaces')}</td>
                <td>${t('Domain mendefinisikan ProductRepository, infra mengimplementasikannya', 'Domain defines ProductRepository, infra implements it')}</td>
            </tr>
        </table>
    </div>

    <div class="success-box" style="margin-top:1rem">
        <strong>${t('Kesimpulan:', 'Conclusion:')}</strong> ${t('OOP dan SOLID bukan hanya tentang menulis class yang rapi. Prinsip-prinsip ini membentuk dasar arsitektur software yang scalable, testable, dan maintainable. Setiap bahasa mengimplementasikannya dengan cara yang berbeda - Java secara eksplisit dengan class/interface, Go secara pragmatis dengan struct/interface implisit, dan TypeScript menggabungkan fleksibilitas JavaScript dengan type safety.', 'OOP and SOLID are not just about writing tidy classes. These principles form the foundation of software architecture that is scalable, testable, and maintainable. Each language implements them differently - Java explicitly with class/interface, Go pragmatically with struct/implicit interface, and TypeScript combining JavaScript flexibility with type safety.')}
    </div>
</div>
`;
