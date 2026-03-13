// ====================== ISO & COMPLIANCE (ENHANCED) ======================
// Replaces the basic ISO section with comprehensive coverage of
// ISO 27001, ISO 27701, UU PDP, PCI DSS, GDPR, and implementation guidance

sections.iso = () => `
<h1 class="section-title animate-in">ISO 27001, ISO 27701, UU PDP, PCI DSS & GDPR</h1>
<p class="section-subtitle animate-in">Standar Keamanan Informasi, Perlindungan Data Pribadi & Kepatuhan Industri Kartu Pembayaran</p>

<!-- ==================== 1. ISO 27001:2022 ==================== -->
<h2 class="animate-in">1. ISO 27001:2022 — Information Security Management System (ISMS)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa itu ISMS?</h3>
    <p><strong>Information Security Management System (ISMS)</strong> adalah kerangka kerja sistematis untuk mengelola keamanan informasi organisasi. ISMS mencakup kebijakan, prosedur, kontrol teknis, dan proses manajemen risiko yang dirancang untuk melindungi <strong>kerahasiaan (confidentiality)</strong>, <strong>integritas (integrity)</strong>, dan <strong>ketersediaan (availability)</strong> informasi — dikenal sebagai triad CIA.</p>

    <div class="card-grid-3" style="margin-top:1rem">
        <div class="info-box">
            <strong>Confidentiality</strong><br>
            Informasi hanya dapat diakses oleh pihak yang berwenang. Contoh: enkripsi data, access control, klasifikasi informasi.
        </div>
        <div class="info-box">
            <strong>Integrity</strong><br>
            Informasi tetap akurat dan tidak dimodifikasi tanpa otorisasi. Contoh: hashing, digital signature, version control.
        </div>
        <div class="info-box">
            <strong>Availability</strong><br>
            Informasi dan sistem tersedia saat dibutuhkan. Contoh: backup, disaster recovery, redundansi infrastruktur.
        </div>
    </div>

    <p style="margin-top:1rem"><strong>ISO 27001:2022</strong> adalah versi terbaru dari standar internasional yang menetapkan persyaratan untuk membangun, menerapkan, memelihara, dan terus meningkatkan ISMS. Standar ini diterbitkan oleh <em>International Organization for Standardization (ISO)</em> bersama <em>International Electrotechnical Commission (IEC)</em>.</p>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Siklus Plan-Do-Check-Act (PDCA)</h3>
    <p>ISO 27001 dibangun di atas siklus PDCA yang memastikan perbaikan berkelanjutan dalam manajemen keamanan informasi:</p>

    <div class="flow-diagram" style="margin:1.5rem 0">
        <div class="flow-node" style="background:rgba(56,189,248,0.15);border-color:var(--accent)">
            <strong style="color:var(--accent)">PLAN</strong><br>
            Tetapkan kebijakan, tujuan, proses, dan prosedur ISMS yang relevan dengan manajemen risiko
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="background:rgba(52,211,153,0.15);border-color:var(--green)">
            <strong style="color:var(--green)">DO</strong><br>
            Implementasikan dan operasikan kebijakan, kontrol, proses, dan prosedur ISMS
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="background:rgba(251,191,36,0.15);border-color:var(--yellow)">
            <strong style="color:var(--yellow)">CHECK</strong><br>
            Monitor, audit, dan review kinerja ISMS terhadap kebijakan dan tujuan
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-node" style="background:rgba(248,113,113,0.15);border-color:var(--red)">
            <strong style="color:var(--red)">ACT</strong><br>
            Ambil tindakan korektif dan preventif berdasarkan hasil audit dan review manajemen
        </div>
    </div>

    <div class="info-box">
        <strong>Catatan:</strong> Siklus PDCA berjalan terus-menerus. Setelah fase ACT, proses kembali ke PLAN untuk iterasi berikutnya. Ini memastikan ISMS selalu berkembang menghadapi ancaman baru.
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">Annex A — Kategori Kontrol Keamanan</h3>
    <p>ISO 27001:2022 memiliki <strong>93 kontrol</strong> yang dikelompokkan dalam <strong>4 kategori</strong> (diperbarui dari 14 kategori pada versi 2013):</p>

    <div class="table-wrapper" style="margin-top:1rem">
        <table>
            <thead>
                <tr>
                    <th>Kategori</th>
                    <th>Jumlah</th>
                    <th>Cakupan</th>
                    <th>Contoh Kontrol</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge-blue">Organizational (A.5)</span></td>
                    <td>37</td>
                    <td>Kebijakan, peran, tanggung jawab, manajemen aset</td>
                    <td>Kebijakan keamanan informasi, inventaris aset, klasifikasi informasi, manajemen vendor</td>
                </tr>
                <tr>
                    <td><span class="badge-green">People (A.6)</span></td>
                    <td>8</td>
                    <td>Screening, pelatihan, awareness, proses disiplin</td>
                    <td>Background check, security awareness training, tanggung jawab saat terminasi</td>
                </tr>
                <tr>
                    <td><span class="badge-orange">Physical (A.7)</span></td>
                    <td>14</td>
                    <td>Keamanan area, peralatan, media penyimpanan</td>
                    <td>Perimeter fisik, pengendalian akses fisik, proteksi perangkat, secure disposal</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">Technological (A.8)</span></td>
                    <td>34</td>
                    <td>Kontrol teknis: endpoint, jaringan, aplikasi, data</td>
                    <td>Manajemen akses, enkripsi, secure coding, logging, vulnerability management</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="warn-box" style="margin-top:1rem">
        <strong>Kontrol Baru di 2022:</strong> Threat intelligence, cloud security, ICT readiness for business continuity, physical security monitoring, data masking, data leakage prevention, web filtering, secure coding, configuration management, information deletion, dan monitoring activities.
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--orange)">Proses Penilaian Risiko (Risk Assessment)</h3>
    <p>Risk assessment adalah inti dari ISO 27001. Organisasi harus mengidentifikasi, menganalisis, dan mengevaluasi risiko keamanan informasi secara sistematis.</p>

    <div class="step-list" style="margin-top:1rem">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text">
                <strong>Identifikasi Aset</strong><br>
                Inventarisasi semua aset informasi: data, perangkat lunak, perangkat keras, fasilitas, SDM, dan proses bisnis. Tentukan pemilik (owner) setiap aset.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text">
                <strong>Identifikasi Ancaman & Kerentanan</strong><br>
                Identifikasi ancaman (threat) yang dapat mengeksploitasi kerentanan (vulnerability) pada setiap aset. Contoh: serangan ransomware, insider threat, bencana alam, kegagalan hardware.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text">
                <strong>Analisis Dampak & Likelihood</strong><br>
                Tentukan dampak (impact) jika risiko terjadi dan kemungkinan (likelihood) terjadinya. Gunakan skala kualitatif (rendah/sedang/tinggi) atau kuantitatif (nilai numerik).
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text">
                <strong>Evaluasi Risiko</strong><br>
                Hitung tingkat risiko (Risk = Impact × Likelihood). Prioritaskan risiko berdasarkan risk appetite organisasi. Kategorikan: acceptable, tolerable, atau unacceptable.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text">
                <strong>Perlakuan Risiko (Risk Treatment)</strong><br>
                Pilih strategi: <span class="badge-green">Mitigate</span> (kurangi dengan kontrol), <span class="badge-blue">Transfer</span> (asuransi/outsource), <span class="badge-orange">Accept</span> (terima dengan persetujuan manajemen), atau <span class="badge-red">Avoid</span> (hindari aktivitas).
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-text">
                <strong>Statement of Applicability (SoA)</strong><br>
                Dokumen formal yang mencantumkan semua kontrol Annex A, menjelaskan apakah diterapkan atau tidak beserta justifikasinya. SoA adalah dokumen wajib untuk sertifikasi.
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Proses Sertifikasi ISO 27001</h3>
    <p>Sertifikasi dilakukan oleh badan sertifikasi terakreditasi dan terdiri dari beberapa tahap:</p>

    <div class="pipeline" style="margin-top:1rem">
        <div class="pipeline-stage" style="background:rgba(56,189,248,0.1)">
            <div class="stage-title" style="color:var(--accent)">Gap Analysis</div>
            <div class="stage-desc">Evaluasi kondisi saat ini vs persyaratan ISO 27001. Identifikasi kekurangan yang harus diperbaiki.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(168,85,247,0.1)">
            <div class="stage-title" style="color:var(--purple)">Implementasi ISMS</div>
            <div class="stage-desc">Bangun kebijakan, prosedur, kontrol teknis. Lakukan risk assessment dan buat SoA. Jalankan awareness training.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(52,211,153,0.1)">
            <div class="stage-title" style="color:var(--green)">Internal Audit</div>
            <div class="stage-desc">Audit internal untuk memverifikasi kesesuaian ISMS. Dokumentasikan temuan dan tindakan korektif.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,191,36,0.1)">
            <div class="stage-title" style="color:var(--yellow)">Management Review</div>
            <div class="stage-desc">Review oleh top management terhadap kinerja ISMS, hasil audit, insiden, dan peluang perbaikan.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,146,60,0.1)">
            <div class="stage-title" style="color:var(--orange)">Stage 1 Audit</div>
            <div class="stage-desc">Auditor eksternal mereview dokumentasi ISMS, kebijakan, SoA, dan kesiapan organisasi.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(248,113,113,0.1)">
            <div class="stage-title" style="color:var(--red)">Stage 2 Audit</div>
            <div class="stage-desc">Audit lapangan menyeluruh. Verifikasi implementasi kontrol, wawancara karyawan, review bukti.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(52,211,153,0.1)">
            <div class="stage-title" style="color:var(--green)">Sertifikat</div>
            <div class="stage-desc">Jika lolos: sertifikat diterbitkan (berlaku 3 tahun). Surveillance audit tahunan, re-certification setiap 3 tahun.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Kontrol Kunci untuk Pengembangan Perangkat Lunak</h3>
    <p>Berikut kontrol Annex A yang paling relevan untuk tim pengembangan perangkat lunak:</p>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Kontrol</th>
                    <th>Deskripsi</th>
                    <th>Implementasi Praktis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge-purple">A.8.25</span></td>
                    <td>Secure development life cycle</td>
                    <td>Integrasikan security di setiap fase SDLC: requirements, design, coding, testing, deployment</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.26</span></td>
                    <td>Application security requirements</td>
                    <td>Definisikan security requirements di awal proyek, termasuk autentikasi, otorisasi, input validation</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.27</span></td>
                    <td>Secure system architecture</td>
                    <td>Terapkan defense in depth, least privilege, separation of concerns dalam arsitektur</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.28</span></td>
                    <td>Secure coding</td>
                    <td>Gunakan coding standards, code review, SAST/DAST tools, hindari known vulnerabilities</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.29</span></td>
                    <td>Security testing in development</td>
                    <td>Penetration testing, vulnerability scanning, security unit tests, fuzz testing</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.31</span></td>
                    <td>Separation of environments</td>
                    <td>Pisahkan development, staging, production. Jangan gunakan data produksi untuk testing</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.9</span></td>
                    <td>Configuration management</td>
                    <td>IaC, version control untuk konfigurasi, hardening standards, baseline configuration</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">A.8.15</span></td>
                    <td>Logging</td>
                    <td>Log semua security events: login, akses data, perubahan konfigurasi, error</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ==================== 2. ISO 27701:2019 ==================== -->
<h2 class="animate-in">2. ISO 27701:2019 — Privacy Information Management System (PIMS)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Ekstensi Privasi untuk ISO 27001</h3>
    <p><strong>ISO 27701:2019</strong> adalah ekstensi dari ISO 27001 dan ISO 27002 yang menambahkan persyaratan dan panduan khusus untuk pengelolaan <strong>Personally Identifiable Information (PII)</strong>. Standar ini membantu organisasi membangun <strong>Privacy Information Management System (PIMS)</strong>.</p>

    <div class="card-grid" style="margin-top:1rem">
        <div class="info-box">
            <strong>Prasyarat</strong><br>
            ISO 27701 <em>tidak</em> berdiri sendiri — organisasi harus sudah memiliki atau sedang mengimplementasikan ISO 27001. PIMS adalah ekstensi di atas ISMS.
        </div>
        <div class="info-box">
            <strong>Mapping ke Regulasi</strong><br>
            Annex D menyediakan mapping ke GDPR, memudahkan organisasi menunjukkan kepatuhan terhadap regulasi privasi data internasional.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">PII Controller vs PII Processor</h3>
    <p>ISO 27701 membedakan persyaratan berdasarkan peran organisasi dalam pengolahan data pribadi:</p>

    <div class="card-grid" style="margin-top:1rem">
        <div class="card" style="border-left:4px solid var(--accent)">
            <h4 style="color:var(--accent)">PII Controller</h4>
            <p>Pihak yang menentukan <strong>tujuan dan cara</strong> pengolahan data pribadi.</p>
            <ul>
                <li>Menentukan data apa yang dikumpulkan dan mengapa</li>
                <li>Bertanggung jawab atas dasar hukum pengolahan (consent, kontrak, dll.)</li>
                <li>Wajib memenuhi hak subjek data (akses, hapus, portabilitas)</li>
                <li>Kontrol tambahan: Annex A (Klausul 7) — 31 kontrol khusus controller</li>
                <li>Contoh: E-commerce yang mengumpulkan data pelanggan</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid var(--green)">
            <h4 style="color:var(--green)">PII Processor</h4>
            <p>Pihak yang mengolah data pribadi <strong>atas nama</strong> PII Controller.</p>
            <ul>
                <li>Mengolah data sesuai instruksi controller</li>
                <li>Tidak menentukan tujuan pengolahan sendiri</li>
                <li>Wajib melindungi data sesuai perjanjian dengan controller</li>
                <li>Kontrol tambahan: Annex B (Klausul 8) — 18 kontrol khusus processor</li>
                <li>Contoh: Cloud provider (AWS, GCP) yang menyimpan data pelanggan</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">Kontrol Tambahan Kunci ISO 27701</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Area</th>
                    <th>Kontrol</th>
                    <th>Deskripsi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge-blue">Consent</span></td>
                    <td>7.2.3 / 7.2.4</td>
                    <td>Dapatkan dan kelola persetujuan yang sah. Dokumentasikan consent, izinkan penarikan consent.</td>
                </tr>
                <tr>
                    <td><span class="badge-green">Purpose</span></td>
                    <td>7.2.1 / 7.2.2</td>
                    <td>Identifikasi dan dokumentasikan tujuan pengolahan. Batasi pengolahan sesuai tujuan yang diinformasikan.</td>
                </tr>
                <tr>
                    <td><span class="badge-orange">Minimization</span></td>
                    <td>7.4.1</td>
                    <td>Batasi pengumpulan PII hanya pada data yang benar-benar diperlukan untuk tujuan yang ditentukan.</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">Rights</span></td>
                    <td>7.3.1 — 7.3.9</td>
                    <td>Fasilitasi hak subjek data: akses, koreksi, hapus, portabilitas, keberatan.</td>
                </tr>
                <tr>
                    <td><span class="badge-red">Breach</span></td>
                    <td>7.2.8 / 6.13</td>
                    <td>Prosedur notifikasi insiden data breach kepada regulator dan subjek data.</td>
                </tr>
                <tr>
                    <td><span class="badge-yellow">Transfer</span></td>
                    <td>7.5</td>
                    <td>Kontrol transfer PII antar yurisdiksi. Pastikan perlindungan memadai di negara tujuan.</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ==================== 3. UU PDP ==================== -->
<h2 class="animate-in">3. UU PDP — Undang-Undang Pelindungan Data Pribadi</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">UU No. 27 Tahun 2022</h3>
    <p><strong>Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong> adalah regulasi komprehensif Indonesia untuk melindungi data pribadi warga negara. UU ini disahkan pada <strong>17 Oktober 2022</strong> dan diberlakukan dengan masa transisi <strong>2 tahun</strong> hingga Oktober 2024.</p>

    <div class="info-box" style="margin-top:1rem">
        <strong>Data Pribadi menurut UU PDP:</strong> Setiap data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasi dengan informasi lainnya baik secara langsung maupun tidak langsung melalui sistem elektronik atau nonelektronik.
    </div>

    <div class="card-grid" style="margin-top:1rem">
        <div class="card" style="border-left:4px solid var(--accent)">
            <h4 style="color:var(--accent)">Data Pribadi Umum</h4>
            <ul>
                <li>Nama lengkap</li>
                <li>Jenis kelamin</li>
                <li>Kewarganegaraan</li>
                <li>Agama</li>
                <li>Status perkawinan</li>
                <li>Data pribadi yang dikombinasikan untuk mengidentifikasi seseorang</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid var(--red)">
            <h4 style="color:var(--red)">Data Pribadi Spesifik (Sensitif)</h4>
            <ul>
                <li>Data kesehatan</li>
                <li>Data biometrik</li>
                <li>Data genetika</li>
                <li>Catatan kejahatan</li>
                <li>Data anak</li>
                <li>Data keuangan pribadi</li>
                <li>Data orientasi seksual</li>
                <li>Data pandangan politik</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Prinsip-Prinsip Utama UU PDP</h3>

    <div class="card-grid-3" style="margin-top:1rem">
        <div class="info-box">
            <strong>1. Persetujuan (Consent)</strong><br>
            Pengolahan data pribadi harus berdasarkan persetujuan yang sah dari subjek data. Consent harus diberikan secara eksplisit, tertulis atau terekam, dan dapat ditarik kembali.
        </div>
        <div class="info-box">
            <strong>2. Pembatasan Tujuan</strong><br>
            Data pribadi hanya boleh diproses sesuai tujuan yang telah diinformasikan kepada subjek data. Pengolahan di luar tujuan awal memerlukan consent baru.
        </div>
        <div class="info-box">
            <strong>3. Minimalisasi Data</strong><br>
            Hanya kumpulkan data yang benar-benar diperlukan untuk tujuan yang sah. Jangan mengumpulkan data berlebihan atau tidak relevan.
        </div>
        <div class="info-box">
            <strong>4. Akurasi</strong><br>
            Data pribadi harus akurat, lengkap, tidak menyesatkan, mutakhir, dan relevan sesuai tujuan pengolahan.
        </div>
        <div class="info-box">
            <strong>5. Pembatasan Penyimpanan</strong><br>
            Data pribadi hanya disimpan selama diperlukan sesuai tujuan pengolahan. Setelah tidak diperlukan, data harus dihapus atau dianonimisasi.
        </div>
        <div class="info-box">
            <strong>6. Keamanan</strong><br>
            Pengendali data wajib melindungi data dari akses tidak sah, modifikasi, pengungkapan, atau perusakan melalui langkah-langkah teknis dan organisasional.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">Hak-Hak Subjek Data</h3>
    <p>UU PDP memberikan hak-hak berikut kepada subjek data (pemilik data pribadi):</p>

    <div class="step-list" style="margin-top:1rem">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text">
                <strong>Hak Informasi</strong> — Mendapatkan informasi tentang kejelasan identitas, dasar hukum, tujuan pengolahan, dan jenis data yang dikumpulkan.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text">
                <strong>Hak Akses</strong> — Mengakses dan mendapatkan salinan data pribadinya yang diproses oleh pengendali data.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text">
                <strong>Hak Koreksi</strong> — Meminta perbaikan terhadap data pribadi yang tidak akurat, tidak lengkap, atau menyesatkan.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text">
                <strong>Hak Penghapusan</strong> — Meminta penghapusan data pribadi jika tujuan pengolahan telah tercapai, consent dicabut, atau pengolahan melanggar hukum.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text">
                <strong>Hak Penarikan Consent</strong> — Menarik kembali persetujuan yang telah diberikan sebelumnya untuk pengolahan data.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-text">
                <strong>Hak Portabilitas</strong> — Mendapatkan dan memindahkan data pribadinya ke pengendali data lain dalam format yang umum digunakan.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">7</div>
            <div class="step-text">
                <strong>Hak Keberatan</strong> — Mengajukan keberatan atas pengolahan data pribadi yang dilakukan untuk kepentingan sah atau profiling.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">8</div>
            <div class="step-text">
                <strong>Hak Pembatasan</strong> — Meminta pembatasan pengolahan data sementara data dalam sengketa atau sedang diverifikasi keakuratannya.
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--orange)">Kewajiban Pengendali & Prosesor Data</h3>

    <div class="card-grid" style="margin-top:1rem">
        <div class="card" style="border-left:4px solid var(--accent)">
            <h4 style="color:var(--accent)">Pengendali Data Pribadi</h4>
            <ul>
                <li>Memiliki dasar hukum yang sah untuk pengolahan</li>
                <li>Menyampaikan informasi tentang pengolahan data secara transparan</li>
                <li>Menunjukkan bukti persetujuan yang sah</li>
                <li>Memfasilitasi hak subjek data</li>
                <li>Menjaga kerahasiaan data pribadi</li>
                <li>Melakukan penilaian dampak perlindungan data (DPIA)</li>
                <li>Menunjuk DPO jika memproses data skala besar atau data sensitif</li>
                <li>Melaporkan pelanggaran data dalam <strong>3 × 24 jam</strong> kepada subjek data dan lembaga terkait</li>
                <li>Memastikan perlindungan data dalam transfer lintas negara</li>
            </ul>
        </div>
        <div class="card" style="border-left:4px solid var(--green)">
            <h4 style="color:var(--green)">Prosesor Data Pribadi</h4>
            <ul>
                <li>Mengolah data hanya sesuai instruksi pengendali data</li>
                <li>Menjaga kerahasiaan data yang diproses</li>
                <li>Memastikan keamanan teknis dan organisasional</li>
                <li>Tidak melibatkan sub-prosesor tanpa persetujuan tertulis pengendali</li>
                <li>Membantu pengendali memenuhi kewajiban regulatory</li>
                <li>Menghapus atau mengembalikan data setelah kontrak berakhir</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--red)">Sanksi Pelanggaran UU PDP</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Jenis Pelanggaran</th>
                    <th>Sanksi Pidana</th>
                    <th>Sanksi Denda</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mengumpulkan data pribadi secara melawan hukum</td>
                    <td>Penjara maksimal <strong>5 tahun</strong></td>
                    <td>Denda maksimal <strong>Rp 5 miliar</strong></td>
                </tr>
                <tr>
                    <td>Mengungkapkan data pribadi secara melawan hukum</td>
                    <td>Penjara maksimal <strong>4 tahun</strong></td>
                    <td>Denda maksimal <strong>Rp 4 miliar</strong></td>
                </tr>
                <tr>
                    <td>Menggunakan data pribadi secara melawan hukum</td>
                    <td>Penjara maksimal <strong>5 tahun</strong></td>
                    <td>Denda maksimal <strong>Rp 5 miliar</strong></td>
                </tr>
                <tr>
                    <td>Membuat data pribadi palsu</td>
                    <td>Penjara maksimal <strong>6 tahun</strong></td>
                    <td>Denda maksimal <strong>Rp 6 miliar</strong></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="warn-box" style="margin-top:1rem">
        <strong>Sanksi Administratif:</strong> Selain sanksi pidana, UU PDP juga mengatur sanksi administratif berupa peringatan tertulis, penghentian sementara kegiatan pemrosesan, penghapusan data, dan <strong>denda administratif hingga 2% dari pendapatan tahunan</strong>.
    </div>

    <div class="info-box" style="margin-top:1rem">
        <strong>Catatan untuk Korporasi:</strong> Jika pelanggaran dilakukan oleh badan usaha, pidana denda dikalikan <strong>10 kali</strong> dari yang ditentukan (maksimal Rp 60 miliar). Korporasi juga dapat dikenai pidana tambahan berupa perampasan keuntungan, pembekuan usaha, atau pelarangan kegiatan.
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Perbandingan UU PDP dan GDPR</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Aspek</th>
                    <th>UU PDP (Indonesia)</th>
                    <th>GDPR (Uni Eropa)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Tahun Berlaku</strong></td>
                    <td>2022 (transisi 2 tahun)</td>
                    <td>2018</td>
                </tr>
                <tr>
                    <td><strong>Cakupan</strong></td>
                    <td>Warga negara Indonesia, dimanapun data diproses</td>
                    <td>Penduduk EU/EEA, dimanapun data diproses</td>
                </tr>
                <tr>
                    <td><strong>Dasar Hukum Pengolahan</strong></td>
                    <td>Consent, kontrak, kewajiban hukum, kepentingan vital, kepentingan publik, kepentingan sah</td>
                    <td>6 dasar hukum serupa (Art. 6 GDPR)</td>
                </tr>
                <tr>
                    <td><strong>Notifikasi Breach</strong></td>
                    <td>3 × 24 jam</td>
                    <td>72 jam</td>
                </tr>
                <tr>
                    <td><strong>DPO Wajib?</strong></td>
                    <td>Ya, untuk pemrosesan skala besar/data sensitif</td>
                    <td>Ya, untuk pemrosesan skala besar/data sensitif/otoritas publik</td>
                </tr>
                <tr>
                    <td><strong>Denda Maksimal</strong></td>
                    <td>2% pendapatan tahunan (administratif)</td>
                    <td>4% pendapatan global atau EUR 20 juta</td>
                </tr>
                <tr>
                    <td><strong>Sanksi Pidana</strong></td>
                    <td>Ada (penjara + denda)</td>
                    <td>Tidak ada (diserahkan ke negara anggota)</td>
                </tr>
                <tr>
                    <td><strong>Transfer Lintas Negara</strong></td>
                    <td>Diperbolehkan jika negara tujuan setara atau ada perjanjian</td>
                    <td>Adequacy decision, SCCs, BCRs</td>
                </tr>
                <tr>
                    <td><strong>Lembaga Pengawas</strong></td>
                    <td>Lembaga Pelindungan Data Pribadi (belum terbentuk per 2024)</td>
                    <td>Data Protection Authority di setiap negara anggota</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ==================== 4. PCI DSS ==================== -->
<h2 class="animate-in">4. PCI DSS — Payment Card Industry Data Security Standard</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Apa itu PCI DSS?</h3>
    <p><strong>PCI DSS (Payment Card Industry Data Security Standard)</strong> adalah standar keamanan global yang dikembangkan oleh <strong>PCI Security Standards Council (PCI SSC)</strong> — didirikan oleh Visa, Mastercard, American Express, Discover, dan JCB. Standar ini wajib dipatuhi oleh <em>setiap organisasi</em> yang menyimpan, memproses, atau mentransmisikan data kartu pembayaran (cardholder data).</p>

    <div class="card-grid" style="margin-top:1rem">
        <div class="info-box">
            <strong>Siapa yang Wajib?</strong><br>
            Merchant (toko online/offline), payment processor, payment gateway, acquiring bank, issuing bank, service provider — siapa pun yang bersentuhan dengan data kartu.
        </div>
        <div class="warn-box">
            <strong>Konsekuensi Non-Compliance:</strong><br>
            Denda $5.000 — $100.000 per bulan dari brand kartu, pencabutan kemampuan memproses kartu, tanggung jawab atas kerugian fraud, kerusakan reputasi.
        </div>
    </div>

    <div class="info-box" style="margin-top:1rem">
        <strong>Cardholder Data yang Dilindungi:</strong>
        <ul style="margin-top:0.5rem">
            <li><strong>PAN (Primary Account Number)</strong> — Nomor kartu utama (wajib dilindungi)</li>
            <li><strong>Cardholder Name</strong> — Nama pemegang kartu</li>
            <li><strong>Expiration Date</strong> — Tanggal kadaluarsa</li>
            <li><strong>Service Code</strong> — Kode layanan</li>
        </ul>
        <p style="margin-top:0.5rem"><strong>Sensitive Authentication Data (TIDAK BOLEH disimpan setelah otorisasi):</strong></p>
        <ul>
            <li><strong>Full magnetic stripe data</strong></li>
            <li><strong>CAV2/CVC2/CVV2/CID</strong> — Kode keamanan 3-4 digit</li>
            <li><strong>PIN / PIN block</strong></li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">12 Persyaratan PCI DSS — Diorganisasikan dalam 6 Tujuan</h3>

    <h4 style="color:var(--accent);margin-top:1rem">Tujuan 1: Membangun dan Memelihara Jaringan Aman</h4>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text">
                <strong>Install dan kelola network security controls (firewall)</strong><br>
                Pasang dan konfigurasi firewall/network security controls untuk melindungi cardholder data environment (CDE). Tinjau aturan firewall setiap 6 bulan. Segmentasi jaringan untuk membatasi CDE. Tolak semua traffic secara default kecuali yang diperlukan.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text">
                <strong>Jangan gunakan default password dan security parameter vendor</strong><br>
                Ganti semua default password, community strings, dan konfigurasi bawaan vendor. Terapkan system hardening standards. Nonaktifkan layanan dan protokol yang tidak diperlukan. Enkripsi akses administratif non-konsol.
            </div>
        </div>
    </div>

    <h4 style="color:var(--green);margin-top:1.5rem">Tujuan 2: Melindungi Data Pemegang Kartu</h4>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text">
                <strong>Lindungi stored cardholder data</strong><br>
                Simpan data kartu seminimal mungkin. Implementasikan retention policy. Enkripsi PAN yang disimpan menggunakan strong cryptography (AES-256, RSA-2048+). Terapkan PAN masking (tampilkan maksimal 6 digit pertama dan 4 digit terakhir). <strong>Jangan pernah simpan CVV, magnetic stripe, atau PIN setelah otorisasi.</strong>
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text">
                <strong>Enkripsi transmisi cardholder data di jaringan publik</strong><br>
                Gunakan TLS 1.2+ untuk semua transmisi data kartu. Jangan kirim PAN melalui email, chat, atau SMS tanpa enkripsi. Implementasikan strong cryptography dan security protocols.
            </div>
        </div>
    </div>

    <h4 style="color:var(--orange);margin-top:1.5rem">Tujuan 3: Memelihara Program Manajemen Kerentanan</h4>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text">
                <strong>Lindungi semua sistem dari malware</strong><br>
                Deploy solusi anti-malware di semua sistem yang umum terkena malware. Pastikan anti-malware aktif, ter-update, dan menghasilkan audit logs. Lakukan scan berkala dan evaluasi sistem yang dianggap tidak berisiko.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-text">
                <strong>Kembangkan dan kelola sistem dan software yang aman</strong><br>
                Terapkan proses untuk mengidentifikasi dan memberikan risk ranking pada kerentanan keamanan. Install critical security patches dalam 1 bulan. Terapkan secure coding practices (OWASP Top 10). Lakukan code review. Pisahkan lingkungan development/test dari production.
            </div>
        </div>
    </div>

    <h4 style="color:var(--purple);margin-top:1.5rem">Tujuan 4: Implementasikan Kontrol Akses yang Kuat</h4>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">7</div>
            <div class="step-text">
                <strong>Batasi akses ke cardholder data berdasarkan need-to-know</strong><br>
                Terapkan role-based access control (RBAC). Hanya personel yang membutuhkan akses untuk fungsi pekerjaannya yang boleh mengakses cardholder data. Dokumentasikan dan tinjau hak akses secara berkala.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">8</div>
            <div class="step-text">
                <strong>Identifikasi pengguna dan autentikasi akses ke komponen sistem</strong><br>
                Berikan unique ID ke setiap pengguna. Implementasikan MFA untuk akses administratif dan remote access ke CDE. Terapkan password policy yang kuat (min. 12 karakter, kompleksitas, rotasi 90 hari). Kunci akun setelah 10 percobaan gagal.
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">9</div>
            <div class="step-text">
                <strong>Batasi akses fisik ke cardholder data</strong><br>
                Kontrol akses fisik ke fasilitas dengan data kartu. Gunakan badge, biometrik, atau mekanisme entry. Kelola akses pengunjung. Lindungi media fisik yang berisi cardholder data. Hancurkan media yang sudah tidak digunakan.
            </div>
        </div>
    </div>

    <h4 style="color:var(--yellow);margin-top:1.5rem">Tujuan 5: Monitor dan Uji Jaringan Secara Berkala</h4>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">10</div>
            <div class="step-text">
                <strong>Log dan monitor semua akses ke cardholder data dan sumber daya jaringan</strong><br>
                Implementasikan audit trail untuk semua akses ke CDE. Catat: user ID, jenis event, tanggal/waktu, sukses/gagal, asal event, identitas data/komponen. Sinkronisasi waktu (NTP). Tinjau log harian. Simpan log minimal 1 tahun (3 bulan tersedia segera).
            </div>
        </div>
        <div class="step-item">
            <div class="step-num">11</div>
            <div class="step-text">
                <strong>Uji keamanan sistem dan jaringan secara berkala</strong><br>
                Vulnerability scan internal dan eksternal setiap kuartal. Penetration testing minimal setahun sekali dan setelah perubahan signifikan. Implementasikan IDS/IPS dan file integrity monitoring (FIM). ASV scan oleh Approved Scanning Vendor.
            </div>
        </div>
    </div>

    <h4 style="color:var(--red);margin-top:1.5rem">Tujuan 6: Memelihara Kebijakan Keamanan Informasi</h4>
    <div class="step-list">
        <div class="step-item">
            <div class="step-num">12</div>
            <div class="step-text">
                <strong>Kelola kebijakan keamanan informasi untuk seluruh personel</strong><br>
                Buat, publikasikan, dan kelola kebijakan keamanan. Lakukan risk assessment tahunan. Terapkan acceptable use policies. Lakukan security awareness training. Screen karyawan sebelum dipekerjakan. Kelola incident response plan. Tinjau dan update kebijakan minimal setahun sekali.
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">Level Kepatuhan PCI DSS</h3>
    <p>Level merchant ditentukan oleh volume transaksi tahunan (berdasarkan standar Visa):</p>

    <div class="table-wrapper" style="margin-top:1rem">
        <table>
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Volume Transaksi/Tahun</th>
                    <th>Validasi yang Diperlukan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge-red">Level 1</span></td>
                    <td>&gt; 6 juta transaksi</td>
                    <td>Annual ROC oleh QSA, quarterly ASV scan, attestation of compliance (AOC)</td>
                </tr>
                <tr>
                    <td><span class="badge-orange">Level 2</span></td>
                    <td>1 — 6 juta transaksi</td>
                    <td>Annual SAQ, quarterly ASV scan, AOC</td>
                </tr>
                <tr>
                    <td><span class="badge-yellow">Level 3</span></td>
                    <td>20.000 — 1 juta transaksi e-commerce</td>
                    <td>Annual SAQ, quarterly ASV scan, AOC</td>
                </tr>
                <tr>
                    <td><span class="badge-green">Level 4</span></td>
                    <td>&lt; 20.000 transaksi e-commerce atau &lt; 1 juta transaksi lainnya</td>
                    <td>Annual SAQ (direkomendasikan), quarterly ASV scan (jika berlaku), AOC</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="info-box" style="margin-top:1rem">
        <strong>Keterangan:</strong>
        <ul>
            <li><strong>QSA</strong> = Qualified Security Assessor — auditor bersertifikasi dari PCI SSC</li>
            <li><strong>ROC</strong> = Report on Compliance — laporan audit penuh</li>
            <li><strong>SAQ</strong> = Self-Assessment Questionnaire — kuesioner penilaian mandiri</li>
            <li><strong>ASV</strong> = Approved Scanning Vendor — vendor pemindaian kerentanan bersertifikasi</li>
            <li><strong>AOC</strong> = Attestation of Compliance — pernyataan kepatuhan resmi</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--orange)">Tipe SAQ (Self-Assessment Questionnaire)</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Tipe SAQ</th>
                    <th>Berlaku Untuk</th>
                    <th>Jumlah Pertanyaan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge-blue">SAQ A</span></td>
                    <td>Merchant e-commerce/mail/telephone yang sepenuhnya outsource pemrosesan kartu ke pihak ketiga. Tidak ada penyimpanan/pemrosesan/transmisi data kartu elektronik.</td>
                    <td>~22</td>
                </tr>
                <tr>
                    <td><span class="badge-blue">SAQ A-EP</span></td>
                    <td>Merchant e-commerce yang outsource pemrosesan tapi website-nya bisa mempengaruhi keamanan transaksi (redirect/iFrame).</td>
                    <td>~191</td>
                </tr>
                <tr>
                    <td><span class="badge-green">SAQ B</span></td>
                    <td>Merchant dengan imprint machines atau standalone dial-out terminals saja. Tidak ada penyimpanan data elektronik.</td>
                    <td>~41</td>
                </tr>
                <tr>
                    <td><span class="badge-green">SAQ B-IP</span></td>
                    <td>Merchant dengan standalone PTS-approved payment terminals yang terhubung via IP. Tidak ada penyimpanan data elektronik.</td>
                    <td>~82</td>
                </tr>
                <tr>
                    <td><span class="badge-orange">SAQ C</span></td>
                    <td>Merchant dengan payment application systems terhubung ke internet. Tidak ada penyimpanan data elektronik.</td>
                    <td>~160</td>
                </tr>
                <tr>
                    <td><span class="badge-orange">SAQ C-VT</span></td>
                    <td>Merchant yang menggunakan virtual terminal berbasis web dari pihak ketiga. Satu transaksi per waktu, tidak ada penyimpanan elektronik.</td>
                    <td>~79</td>
                </tr>
                <tr>
                    <td><span class="badge-purple">SAQ P2PE</span></td>
                    <td>Merchant yang menggunakan hardware payment terminals dalam solusi P2PE (Point-to-Point Encryption) yang tervalidasi.</td>
                    <td>~33</td>
                </tr>
                <tr>
                    <td><span class="badge-red">SAQ D</span></td>
                    <td>Semua merchant dan service provider yang tidak memenuhi kriteria SAQ lainnya. Cakupan paling luas.</td>
                    <td>~329</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Proses Validasi Kepatuhan PCI DSS</h3>

    <div class="pipeline" style="margin-top:1rem">
        <div class="pipeline-stage" style="background:rgba(56,189,248,0.1)">
            <div class="stage-title" style="color:var(--accent)">1. Scoping</div>
            <div class="stage-desc">Identifikasi semua komponen sistem dalam CDE (Cardholder Data Environment). Tentukan people, process, dan technology yang bersentuhan dengan data kartu.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(168,85,247,0.1)">
            <div class="stage-title" style="color:var(--purple)">2. Gap Assessment</div>
            <div class="stage-desc">Evaluasi kondisi saat ini vs 12 persyaratan PCI DSS. Identifikasi kekurangan dan buat remediation plan.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(52,211,153,0.1)">
            <div class="stage-title" style="color:var(--green)">3. Remediation</div>
            <div class="stage-desc">Implementasikan kontrol yang diperlukan: teknis, prosedural, dan fisik. Perbarui kebijakan dan prosedur.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,191,36,0.1)">
            <div class="stage-title" style="color:var(--yellow)">4. Assessment</div>
            <div class="stage-desc">SAQ (Level 2-4) atau on-site audit oleh QSA (Level 1). Vulnerability scan oleh ASV. Penetration testing.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,146,60,0.1)">
            <div class="stage-title" style="color:var(--orange)">5. Reporting</div>
            <div class="stage-desc">Submit ROC/SAQ + AOC ke acquiring bank dan card brands. Remediasi temuan jika ada.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(52,211,153,0.1)">
            <div class="stage-title" style="color:var(--green)">6. Maintenance</div>
            <div class="stage-desc">Monitoring berkelanjutan, quarterly ASV scan, annual reassessment. PCI DSS bukan one-time event.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Persyaratan Teknis untuk Developer</h3>

    <div class="card animate-in" style="border-left:4px solid var(--accent)">
        <h4 style="color:var(--accent)">Tokenisasi</h4>
        <p>Tokenisasi menggantikan PAN dengan token — nilai acak yang tidak bisa dibalik (non-reversible) tanpa sistem tokenisasi. Token tidak memiliki nilai jika dicuri.</p>
        <div class="code-block">
<span class="cm">// Contoh alur tokenisasi</span>
<span class="cm">// 1. Customer input kartu</span>
<span class="kw">const</span> pan = <span class="str">"4111 1111 1111 1111"</span>;

<span class="cm">// 2. Kirim ke tokenization service (Stripe, Braintree, dll)</span>
<span class="kw">const</span> token = <span class="kw">await</span> <span class="fn">tokenize</span>(pan);
<span class="cm">// token = "tok_abc123xyz789"</span>

<span class="cm">// 3. Simpan token di database Anda (BUKAN PAN)</span>
<span class="kw">await</span> db.<span class="fn">save</span>({ customerId, paymentToken: token });

<span class="cm">// 4. Gunakan token untuk transaksi berikutnya</span>
<span class="kw">await</span> paymentGateway.<span class="fn">charge</span>({ token, amount: <span class="num">50000</span> });
        </div>
    </div>

    <div class="card animate-in" style="border-left:4px solid var(--green)">
        <h4 style="color:var(--green)">Enkripsi at Rest dan in Transit</h4>
        <div class="card-grid">
            <div class="info-box">
                <strong>At Rest (Data Tersimpan)</strong>
                <ul>
                    <li>AES-256 untuk enkripsi PAN di database</li>
                    <li>Transparent Data Encryption (TDE) untuk database</li>
                    <li>Full Disk Encryption (FDE) untuk storage</li>
                    <li>Column-level encryption untuk field sensitif</li>
                </ul>
            </div>
            <div class="info-box">
                <strong>In Transit (Data Dikirim)</strong>
                <ul>
                    <li>TLS 1.2 atau lebih tinggi (TLS 1.3 direkomendasikan)</li>
                    <li>Disable SSL, TLS 1.0, TLS 1.1</li>
                    <li>Certificate pinning untuk mobile apps</li>
                    <li>HSTS header di web server</li>
                </ul>
            </div>
        </div>
        <div class="code-block" style="margin-top:1rem">
<span class="cm">// Contoh: Enkripsi PAN sebelum disimpan (Node.js)</span>
<span class="kw">const</span> crypto = <span class="fn">require</span>(<span class="str">'crypto'</span>);

<span class="kw">function</span> <span class="fn">encryptPAN</span>(pan, key) {
    <span class="kw">const</span> iv = crypto.<span class="fn">randomBytes</span>(<span class="num">16</span>);
    <span class="kw">const</span> cipher = crypto.<span class="fn">createCipheriv</span>(<span class="str">'aes-256-gcm'</span>, key, iv);
    <span class="kw">let</span> encrypted = cipher.<span class="fn">update</span>(pan, <span class="str">'utf8'</span>, <span class="str">'hex'</span>);
    encrypted += cipher.<span class="fn">final</span>(<span class="str">'hex'</span>);
    <span class="kw">const</span> tag = cipher.<span class="fn">getAuthTag</span>();
    <span class="kw">return</span> { iv: iv.<span class="fn">toString</span>(<span class="str">'hex'</span>), encrypted, tag: tag.<span class="fn">toString</span>(<span class="str">'hex'</span>) };
}

<span class="cm">// JANGAN hardcode key! Gunakan HSM atau KMS</span>
<span class="kw">const</span> key = <span class="kw">await</span> kms.<span class="fn">getKey</span>(<span class="str">'pan-encryption-key'</span>);
        </div>
    </div>

    <div class="card animate-in" style="border-left:4px solid var(--purple)">
        <h4 style="color:var(--purple)">Manajemen Kunci (Key Management)</h4>
        <p>Kunci kriptografi harus dikelola dengan ketat sesuai PCI DSS Requirement 3.5 — 3.7:</p>
        <div class="step-list">
            <div class="step-item">
                <div class="step-num">1</div>
                <div class="step-text"><strong>Pembangkitan Kunci</strong> — Gunakan algoritma dan panjang kunci yang kuat (AES-256). Bangkitkan dalam lingkungan aman (HSM).</div>
            </div>
            <div class="step-item">
                <div class="step-num">2</div>
                <div class="step-text"><strong>Distribusi Kunci</strong> — Distribusikan secara aman. Jangan kirim via email/chat. Gunakan split knowledge dan dual control.</div>
            </div>
            <div class="step-item">
                <div class="step-num">3</div>
                <div class="step-text"><strong>Penyimpanan Kunci</strong> — Simpan dalam HSM (Hardware Security Module) atau KMS (Key Management Service). Enkripsi KEK (Key Encrypting Key) terpisah dari DEK (Data Encrypting Key).</div>
            </div>
            <div class="step-item">
                <div class="step-num">4</div>
                <div class="step-text"><strong>Rotasi Kunci</strong> — Rotasi kunci secara berkala (minimal setahun sekali) atau saat ada indikasi kompromi. Implementasikan cryptoperiod.</div>
            </div>
            <div class="step-item">
                <div class="step-num">5</div>
                <div class="step-text"><strong>Penghancuran Kunci</strong> — Hapus kunci yang sudah tidak digunakan secara aman (secure deletion). Pastikan tidak dapat dipulihkan.</div>
            </div>
        </div>
    </div>

    <div class="card animate-in" style="border-left:4px solid var(--orange)">
        <h4 style="color:var(--orange)">PAN Masking</h4>
        <p>PAN harus di-mask saat ditampilkan sehingga hanya personel dengan kebutuhan bisnis yang sah dapat melihat PAN penuh.</p>
        <div class="code-block">
<span class="cm">// PCI DSS: Tampilkan maks 6 digit pertama + 4 digit terakhir</span>
<span class="kw">function</span> <span class="fn">maskPAN</span>(pan) {
    <span class="kw">const</span> clean = pan.<span class="fn">replace</span>(<span class="str">/\\s/g</span>, <span class="str">''</span>);
    <span class="kw">if</span> (clean.length < <span class="num">13</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">'Invalid PAN'</span>);

    <span class="kw">const</span> first6 = clean.<span class="fn">slice</span>(<span class="num">0</span>, <span class="num">6</span>);
    <span class="kw">const</span> last4 = clean.<span class="fn">slice</span>(-<span class="num">4</span>);
    <span class="kw">const</span> masked = <span class="str">'*'</span>.<span class="fn">repeat</span>(clean.length - <span class="num">10</span>);

    <span class="kw">return</span> <span class="str">\`\${first6}\${masked}\${last4}\`</span>;
}

<span class="fn">maskPAN</span>(<span class="str">"4111111111111111"</span>);
<span class="cm">// Output: "411111******1111"</span>
        </div>
    </div>

    <div class="card animate-in" style="border-left:4px solid var(--yellow)">
        <h4 style="color:var(--yellow)">Logging dan Monitoring</h4>
        <p>PCI DSS Requirement 10 mengharuskan logging komprehensif untuk semua akses ke CDE:</p>
        <div class="code-block">
<span class="cm">// Event yang WAJIB di-log (Req 10.2):</span>
<span class="kw">const</span> requiredEvents = [
    <span class="str">"Semua akses individual ke cardholder data"</span>,
    <span class="str">"Semua aksi oleh user dengan root/admin privilege"</span>,
    <span class="str">"Akses ke audit trail"</span>,
    <span class="str">"Invalid logical access attempts"</span>,
    <span class="str">"Penggunaan mekanisme identifikasi/autentikasi"</span>,
    <span class="str">"Inisialisasi audit log"</span>,
    <span class="str">"Pembuatan/penghapusan system-level objects"</span>,
];

<span class="cm">// Setiap log entry WAJIB mengandung (Req 10.3):</span>
<span class="kw">const</span> logEntry = {
    userId:     <span class="str">"user_123"</span>,
    eventType:  <span class="str">"DATA_ACCESS"</span>,
    timestamp:  <span class="str">"2024-01-15T10:30:00Z"</span>,  <span class="cm">// NTP synced</span>
    success:    <span class="num">true</span>,
    origin:     <span class="str">"192.168.1.50"</span>,
    resource:   <span class="str">"cardholder_data_table"</span>,
    component:  <span class="str">"payment-service"</span>,
};

<span class="cm">// Retensi: 1 tahun, 3 bulan tersedia segera</span>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--red)">Tabel Ringkasan 12 Persyaratan PCI DSS</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Persyaratan</th>
                    <th>Fokus Utama</th>
                    <th>Frekuensi Review</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Network Security Controls</td>
                    <td>Firewall, segmentasi, rule review</td>
                    <td>Setiap 6 bulan</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Secure Configuration</td>
                    <td>Hapus default, hardening</td>
                    <td>Setiap perubahan</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Protect Stored Data</td>
                    <td>Enkripsi, masking, retention</td>
                    <td>Setiap kuartal</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Encrypt Transmission</td>
                    <td>TLS 1.2+, no plaintext PAN</td>
                    <td>Terus-menerus</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Anti-Malware</td>
                    <td>Antivirus, scan, logs</td>
                    <td>Terus-menerus</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Secure Development</td>
                    <td>Patching, secure coding, code review</td>
                    <td>Setiap release</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Access Control</td>
                    <td>RBAC, need-to-know</td>
                    <td>Setiap 6 bulan</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Authentication</td>
                    <td>Unique ID, MFA, password policy</td>
                    <td>Setiap 90 hari (password)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Physical Security</td>
                    <td>Badge, CCTV, media handling</td>
                    <td>Terus-menerus</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Logging & Monitoring</td>
                    <td>Audit trail, NTP, log review</td>
                    <td>Harian</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Security Testing</td>
                    <td>Vuln scan, pentest, IDS/IPS, FIM</td>
                    <td>Kuartalan / Tahunan</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Security Policy</td>
                    <td>Kebijakan, awareness, incident response</td>
                    <td>Tahunan</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ==================== 5. GDPR ==================== -->
<h2 class="animate-in">5. GDPR — General Data Protection Regulation</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Prinsip Utama GDPR</h3>
    <p><strong>General Data Protection Regulation (GDPR)</strong> adalah regulasi perlindungan data Uni Eropa yang berlaku sejak 25 Mei 2018. GDPR menetapkan standar tinggi untuk perlindungan data pribadi dan menjadi acuan banyak regulasi privasi di dunia, termasuk UU PDP Indonesia.</p>

    <div class="card-grid-3" style="margin-top:1rem">
        <div class="info-box">
            <strong>Lawfulness, Fairness & Transparency</strong><br>
            Data harus diproses secara sah, adil, dan transparan. Subjek data harus mengetahui bagaimana datanya digunakan.
        </div>
        <div class="info-box">
            <strong>Purpose Limitation</strong><br>
            Data dikumpulkan untuk tujuan spesifik, eksplisit, dan sah. Tidak diproses lebih lanjut untuk tujuan yang tidak sesuai.
        </div>
        <div class="info-box">
            <strong>Data Minimization</strong><br>
            Data yang dikumpulkan harus memadai, relevan, dan terbatas pada yang diperlukan untuk tujuan pengolahan.
        </div>
        <div class="info-box">
            <strong>Accuracy</strong><br>
            Data harus akurat dan terkini. Data yang tidak akurat harus dihapus atau diperbaiki tanpa penundaan.
        </div>
        <div class="info-box">
            <strong>Storage Limitation</strong><br>
            Data disimpan dalam bentuk yang memungkinkan identifikasi hanya selama diperlukan untuk tujuan pengolahan.
        </div>
        <div class="info-box">
            <strong>Integrity & Confidentiality</strong><br>
            Data diproses dengan keamanan yang memadai, termasuk perlindungan dari pengolahan tidak sah, kehilangan, atau kerusakan.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Hak Subjek Data dalam GDPR</h3>

    <div class="card-grid" style="margin-top:1rem">
        <div class="info-box">
            <strong>Right to Access (Art. 15)</strong><br>
            Subjek data berhak mendapatkan konfirmasi apakah datanya diproses dan memperoleh salinan data tersebut beserta informasi tujuan pengolahan.
        </div>
        <div class="info-box">
            <strong>Right to Erasure / Right to be Forgotten (Art. 17)</strong><br>
            Meminta penghapusan data jika tidak lagi diperlukan, consent ditarik, atau pengolahan melanggar hukum. Controller harus memberitahu pihak ketiga.
        </div>
        <div class="info-box">
            <strong>Right to Data Portability (Art. 20)</strong><br>
            Menerima data dalam format terstruktur, umum digunakan, dan machine-readable. Berhak memindahkan data ke controller lain tanpa hambatan.
        </div>
        <div class="info-box">
            <strong>Right to Rectification (Art. 16)</strong><br>
            Meminta perbaikan data yang tidak akurat atau melengkapi data yang tidak lengkap.
        </div>
        <div class="info-box">
            <strong>Right to Restriction (Art. 18)</strong><br>
            Meminta pembatasan pengolahan data dalam kondisi tertentu (sengketa akurasi, pengolahan tidak sah).
        </div>
        <div class="info-box">
            <strong>Right to Object (Art. 21)</strong><br>
            Mengajukan keberatan terhadap pengolahan data untuk direct marketing, profiling, atau pengolahan berdasarkan kepentingan sah.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">DPO & Sanksi GDPR</h3>

    <div class="card-grid" style="margin-top:1rem">
        <div class="card" style="border-left:4px solid var(--purple)">
            <h4 style="color:var(--purple)">Data Protection Officer (DPO)</h4>
            <p>Penunjukan DPO <strong>wajib</strong> jika:</p>
            <ul>
                <li>Pengolahan dilakukan oleh otoritas/badan publik</li>
                <li>Aktivitas inti memerlukan monitoring skala besar dan sistematis terhadap data subjects</li>
                <li>Aktivitas inti berupa pengolahan skala besar atas data sensitif atau data terkait tindak pidana</li>
            </ul>
            <p style="margin-top:0.5rem"><strong>Tugas DPO:</strong> Menginformasikan dan memberi saran tentang kewajiban GDPR, memantau kepatuhan, memberikan saran terkait DPIA, menjadi titik kontak dengan otoritas pengawas.</p>
        </div>
        <div class="card" style="border-left:4px solid var(--red)">
            <h4 style="color:var(--red)">Sanksi Denda GDPR</h4>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Tingkat</th>
                            <th>Denda Maksimal</th>
                            <th>Pelanggaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="badge-orange">Tier 1</span></td>
                            <td>EUR 10 juta atau 2% global turnover</td>
                            <td>Pelanggaran terkait controller/processor, sertifikasi, monitoring body</td>
                        </tr>
                        <tr>
                            <td><span class="badge-red">Tier 2</span></td>
                            <td>EUR 20 juta atau 4% global turnover</td>
                            <td>Pelanggaran prinsip dasar, hak subjek data, transfer data internasional</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="warn-box" style="margin-top:0.5rem">
                <strong>Kasus Nyata:</strong> Meta didenda EUR 1.2 miliar (2023) untuk transfer data ilegal ke AS. Amazon didenda EUR 746 juta (2021) untuk pelanggaran privasi.
            </div>
        </div>
    </div>
</div>

<!-- ==================== 6. COMPLIANCE COMPARISON ==================== -->
<h2 class="animate-in">6. Tabel Perbandingan Kepatuhan</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">ISO 27001 vs PCI DSS vs UU PDP vs GDPR</h3>

    <div class="table-wrapper" style="margin-top:1rem">
        <table>
            <thead>
                <tr>
                    <th>Aspek</th>
                    <th><span class="badge-blue">ISO 27001</span></th>
                    <th><span class="badge-purple">PCI DSS</span></th>
                    <th><span class="badge-green">UU PDP</span></th>
                    <th><span class="badge-orange">GDPR</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Jenis</strong></td>
                    <td>Standar internasional (voluntary)</td>
                    <td>Standar industri (mandatory bagi pemroses kartu)</td>
                    <td>Undang-undang nasional</td>
                    <td>Regulasi supranasional (EU)</td>
                </tr>
                <tr>
                    <td><strong>Fokus</strong></td>
                    <td>Keamanan informasi secara umum</td>
                    <td>Keamanan data kartu pembayaran</td>
                    <td>Perlindungan data pribadi WNI</td>
                    <td>Perlindungan data pribadi warga EU</td>
                </tr>
                <tr>
                    <td><strong>Cakupan</strong></td>
                    <td>Semua jenis informasi organisasi</td>
                    <td>Cardholder data environment</td>
                    <td>Semua data pribadi WNI</td>
                    <td>Semua data pribadi warga EU/EEA</td>
                </tr>
                <tr>
                    <td><strong>Audiens</strong></td>
                    <td>Semua organisasi</td>
                    <td>Merchant, PSP, bank, service provider</td>
                    <td>Semua pengendali/prosesor data di Indonesia</td>
                    <td>Semua pengendali/prosesor data terkait EU</td>
                </tr>
                <tr>
                    <td><strong>Sertifikasi</strong></td>
                    <td>Ya (badan sertifikasi terakreditasi)</td>
                    <td>Ya (QSA / SAQ + ASV)</td>
                    <td>Tidak ada sertifikasi formal</td>
                    <td>Tidak ada sertifikasi formal (ada code of conduct)</td>
                </tr>
                <tr>
                    <td><strong>Sanksi</strong></td>
                    <td>Tidak ada (kehilangan sertifikat)</td>
                    <td>Denda $5K-$100K/bulan, pencabutan pemrosesan</td>
                    <td>Pidana + denda maks Rp 6M (korporasi 10x)</td>
                    <td>Maks EUR 20 juta atau 4% global turnover</td>
                </tr>
                <tr>
                    <td><strong>DPO/Penanggung Jawab</strong></td>
                    <td>Information Security Officer</td>
                    <td>Tidak spesifik (bisa ISA)</td>
                    <td>Ya (untuk pengolahan skala besar)</td>
                    <td>Ya (kondisi tertentu)</td>
                </tr>
                <tr>
                    <td><strong>Breach Notification</strong></td>
                    <td>Sesuai kebijakan (A.5.24-A.5.28)</td>
                    <td>Sesuai kebijakan brand kartu</td>
                    <td>3 × 24 jam</td>
                    <td>72 jam</td>
                </tr>
                <tr>
                    <td><strong>Risk Assessment</strong></td>
                    <td>Wajib (inti dari ISMS)</td>
                    <td>Wajib (annual)</td>
                    <td>Wajib (DPIA)</td>
                    <td>Wajib (DPIA untuk high risk)</td>
                </tr>
                <tr>
                    <td><strong>Pendekatan</strong></td>
                    <td>Risk-based, fleksibel</td>
                    <td>Prescriptive, 12 requirements tetap</td>
                    <td>Principle-based</td>
                    <td>Principle-based, risk-based</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- ==================== 7. IMPLEMENTASI TIM SOFTWARE ==================== -->
<h2 class="animate-in">7. Implementasi untuk Tim Pengembangan Perangkat Lunak</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Kontrol Keamanan dalam SDLC</h3>
    <p>Integrasi keamanan ke dalam Software Development Life Cycle (SDLC) memastikan keamanan bukan afterthought tetapi bagian fundamental dari proses pengembangan.</p>

    <div class="pipeline" style="margin-top:1rem">
        <div class="pipeline-stage" style="background:rgba(56,189,248,0.1)">
            <div class="stage-title" style="color:var(--accent)">Requirements</div>
            <div class="stage-desc">Security requirements gathering. Threat modeling (STRIDE). Abuse case analysis. Compliance requirements (PCI DSS, UU PDP).</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(168,85,247,0.1)">
            <div class="stage-title" style="color:var(--purple)">Design</div>
            <div class="stage-desc">Security architecture review. Data flow diagram. Trust boundaries. Encryption strategy. Access control design.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(52,211,153,0.1)">
            <div class="stage-title" style="color:var(--green)">Development</div>
            <div class="stage-desc">Secure coding standards. SAST (Static Analysis). Dependency scanning. Secret detection. Code review with security checklist.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,191,36,0.1)">
            <div class="stage-title" style="color:var(--yellow)">Testing</div>
            <div class="stage-desc">DAST (Dynamic Analysis). Penetration testing. Security regression tests. Fuzz testing. API security testing.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(251,146,60,0.1)">
            <div class="stage-title" style="color:var(--orange)">Deployment</div>
            <div class="stage-desc">Infrastructure hardening. Container security scan. Configuration validation. Secret management (Vault). Change management.</div>
        </div>
        <div class="pipeline-stage" style="background:rgba(248,113,113,0.1)">
            <div class="stage-title" style="color:var(--red)">Operations</div>
            <div class="stage-desc">Runtime monitoring (SIEM). Vulnerability management. Incident response. Log aggregation. Patch management.</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Klasifikasi Data</h3>
    <p>Setiap tim perangkat lunak harus mengklasifikasikan data yang diproses untuk menentukan tingkat perlindungan yang tepat:</p>

    <div class="layer-diagram" style="margin-top:1rem">
        <div class="layer-item" style="background:rgba(248,113,113,0.15)">
            <div class="layer-num" style="background:var(--red);color:#fff">1</div>
            <div class="layer-info">
                <strong style="color:var(--red)">RESTRICTED / RAHASIA</strong>
                <span>Data kartu pembayaran (PAN, CVV), password, encryption keys, data kesehatan, data biometrik. Enkripsi wajib, akses sangat terbatas, logging ketat.</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,146,60,0.15)">
            <div class="layer-num" style="background:var(--orange);color:#fff">2</div>
            <div class="layer-info">
                <strong style="color:var(--orange)">CONFIDENTIAL / TERBATAS</strong>
                <span>Data pribadi (nama, email, telepon, alamat), data keuangan, kontrak, source code proprietary. Enkripsi at rest dan in transit, access control.</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,191,36,0.15)">
            <div class="layer-num" style="background:var(--yellow);color:#000">3</div>
            <div class="layer-info">
                <strong style="color:var(--yellow)">INTERNAL</strong>
                <span>Dokumentasi internal, kebijakan, prosedur operasional, komunikasi internal. Tidak dipublikasikan tetapi dampak rendah jika bocor.</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.15)">
            <div class="layer-num" style="background:var(--green);color:#fff">4</div>
            <div class="layer-info">
                <strong style="color:var(--green)">PUBLIC / PUBLIK</strong>
                <span>Website publik, press release, dokumentasi produk publik, open source code. Tidak memerlukan perlindungan kerahasiaan.</span>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--purple)">Implementasi Access Control</h3>
    <p>Kontrol akses adalah fondasi keamanan yang diwajibkan oleh semua standar (ISO 27001 A.8.3, PCI DSS Req 7-8, UU PDP, GDPR).</p>

    <div class="code-block" style="margin-top:1rem">
<span class="cm">// Implementasi RBAC (Role-Based Access Control)</span>
<span class="kw">const</span> roles = {
    <span class="str">"admin"</span>:       [<span class="str">"read"</span>, <span class="str">"write"</span>, <span class="str">"delete"</span>, <span class="str">"manage_users"</span>],
    <span class="str">"developer"</span>:   [<span class="str">"read"</span>, <span class="str">"write"</span>],
    <span class="str">"analyst"</span>:     [<span class="str">"read"</span>],              <span class="cm">// need-to-know basis</span>
    <span class="str">"auditor"</span>:     [<span class="str">"read"</span>, <span class="str">"read_logs"</span>],  <span class="cm">// read + audit trail</span>
    <span class="str">"support"</span>:     [<span class="str">"read_masked"</span>],       <span class="cm">// PAN di-mask</span>
};

<span class="cm">// Middleware authorization check</span>
<span class="kw">function</span> <span class="fn">authorize</span>(requiredPermission) {
    <span class="kw">return</span> (req, res, next) => {
        <span class="kw">const</span> userRole = req.user.role;
        <span class="kw">const</span> permissions = roles[userRole] || [];

        <span class="kw">if</span> (!permissions.<span class="fn">includes</span>(requiredPermission)) {
            <span class="cm">// Log akses gagal (PCI DSS Req 10)</span>
            <span class="fn">auditLog</span>({
                userId: req.user.id,
                action: requiredPermission,
                resource: req.path,
                result: <span class="str">"DENIED"</span>,
                timestamp: <span class="kw">new</span> <span class="type">Date</span>().<span class="fn">toISOString</span>(),
                ip: req.ip
            });
            <span class="kw">return</span> res.<span class="fn">status</span>(<span class="num">403</span>).<span class="fn">json</span>({ error: <span class="str">"Forbidden"</span> });
        }
        <span class="fn">next</span>();
    };
}
    </div>

    <div class="card-grid" style="margin-top:1rem">
        <div class="info-box">
            <strong>Prinsip Least Privilege</strong><br>
            Berikan hak akses minimum yang diperlukan untuk menjalankan fungsi pekerjaan. Review akses secara berkala (minimal setiap 6 bulan per PCI DSS).
        </div>
        <div class="info-box">
            <strong>Multi-Factor Authentication (MFA)</strong><br>
            Wajib untuk: akses remote ke CDE, akses admin, akses ke sistem yang menyimpan data sensitif. Gunakan TOTP, hardware key, atau push notification.
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--orange)">Persyaratan Enkripsi</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Skenario</th>
                    <th>Algoritma Minimum</th>
                    <th>Standar Terkait</th>
                    <th>Catatan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Enkripsi data at rest</td>
                    <td>AES-256</td>
                    <td>PCI DSS Req 3, ISO A.8.24</td>
                    <td>Gunakan mode GCM untuk authenticated encryption</td>
                </tr>
                <tr>
                    <td>Enkripsi data in transit</td>
                    <td>TLS 1.2+</td>
                    <td>PCI DSS Req 4, ISO A.8.24</td>
                    <td>TLS 1.3 direkomendasikan. Disable cipher suites lemah</td>
                </tr>
                <tr>
                    <td>Hashing password</td>
                    <td>bcrypt / Argon2id</td>
                    <td>PCI DSS Req 8, ISO A.8.5</td>
                    <td>Jangan gunakan MD5, SHA1, atau SHA256 tanpa salt untuk password</td>
                </tr>
                <tr>
                    <td>Digital signature</td>
                    <td>RSA-2048+ / ECDSA P-256+</td>
                    <td>ISO A.8.24</td>
                    <td>Untuk integritas data dan non-repudiation</td>
                </tr>
                <tr>
                    <td>Key exchange</td>
                    <td>ECDHE / DHE 2048+</td>
                    <td>PCI DSS Req 4</td>
                    <td>Perfect Forward Secrecy (PFS) wajib</td>
                </tr>
                <tr>
                    <td>Database field encryption</td>
                    <td>AES-256-GCM</td>
                    <td>PCI DSS Req 3, UU PDP</td>
                    <td>Untuk PII dan cardholder data. Key terpisah dari data.</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--yellow)">Audit Logging</h3>
    <p>Audit logging yang komprehensif diperlukan oleh semua standar. Berikut panduan praktis untuk tim pengembangan:</p>

    <div class="code-block">
<span class="cm">// Struktur audit log yang memenuhi ISO 27001 + PCI DSS + UU PDP</span>
<span class="kw">const</span> <span class="fn">createAuditLog</span> = (event) => ({
    <span class="cm">// Identifikasi (WHO)</span>
    userId:         event.userId,
    userRole:       event.userRole,
    sessionId:      event.sessionId,
    ipAddress:      event.ip,
    userAgent:      event.userAgent,

    <span class="cm">// Aksi (WHAT)</span>
    action:         event.action,       <span class="cm">// CREATE, READ, UPDATE, DELETE</span>
    resource:       event.resource,     <span class="cm">// tabel/entitas yang diakses</span>
    resourceId:     event.resourceId,
    dataCategory:   event.dataCategory, <span class="cm">// PII, PAN, INTERNAL, PUBLIC</span>

    <span class="cm">// Hasil (RESULT)</span>
    status:         event.status,       <span class="cm">// SUCCESS, FAILURE, ERROR</span>
    failureReason:  event.reason,

    <span class="cm">// Waktu (WHEN)</span>
    timestamp:      <span class="kw">new</span> <span class="type">Date</span>().<span class="fn">toISOString</span>(), <span class="cm">// NTP synced</span>

    <span class="cm">// Konteks (WHERE)</span>
    service:        event.service,
    environment:    process.env.NODE_ENV,
    correlationId:  event.correlationId,
});

<span class="cm">// Event yang WAJIB di-log:</span>
<span class="cm">// - Login sukses & gagal</span>
<span class="cm">// - Akses ke data pribadi (UU PDP) dan cardholder data (PCI DSS)</span>
<span class="cm">// - Perubahan konfigurasi keamanan</span>
<span class="cm">// - Perubahan hak akses pengguna</span>
<span class="cm">// - Pembuatan/penghapusan akun</span>
<span class="cm">// - Export/download data pribadi</span>
<span class="cm">// - Consent granted/revoked</span>
<span class="cm">// - Administrative actions</span>

<span class="cm">// PENTING: Jangan log data sensitif!</span>
<span class="cm">// JANGAN: log PAN, CVV, password, token</span>
<span class="cm">// BOLEH:  log masked PAN (411111******1111)</span>
    </div>

    <div class="warn-box" style="margin-top:1rem">
        <strong>Retensi Log:</strong>
        <ul>
            <li><strong>PCI DSS:</strong> Minimal 1 tahun, 3 bulan tersedia segera</li>
            <li><strong>ISO 27001:</strong> Sesuai kebijakan organisasi (umumnya 1-3 tahun)</li>
            <li><strong>UU PDP:</strong> Selama diperlukan untuk tujuan pemrosesan dan kewajiban hukum</li>
            <li><strong>Rekomendasi:</strong> Simpan minimal 1 tahun, gunakan SIEM untuk analisis real-time</li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--red)">Incident Response Plan</h3>
    <p>Setiap tim pengembangan harus memiliki rencana respons insiden yang jelas. Berikut fase-fase utama:</p>

    <div class="timeline" style="margin-top:1rem">
        <div class="timeline-item">
            <strong style="color:var(--accent)">Fase 1: Persiapan</strong>
            <ul>
                <li>Bentuk tim incident response (IR team) dengan roles yang jelas</li>
                <li>Siapkan playbook untuk skenario umum: data breach, ransomware, DDoS, insider threat</li>
                <li>Sediakan tools: forensic tools, communication channels, contact list</li>
                <li>Lakukan tabletop exercises minimal setahun sekali</li>
                <li>Dokumentasikan eskalasi path dan decision authority</li>
            </ul>
        </div>
        <div class="timeline-item">
            <strong style="color:var(--green)">Fase 2: Deteksi & Analisis</strong>
            <ul>
                <li>Monitor alert dari SIEM, IDS/IPS, WAF, endpoint protection</li>
                <li>Triage: tentukan severity dan impact</li>
                <li>Kumpulkan dan preservasi evidence (chain of custody)</li>
                <li>Identifikasi scope: sistem, data, dan pengguna yang terdampak</li>
                <li>Klasifikasikan insiden sesuai kategori data yang terdampak</li>
            </ul>
        </div>
        <div class="timeline-item">
            <strong style="color:var(--orange)">Fase 3: Containment & Eradication</strong>
            <ul>
                <li>Short-term containment: isolasi sistem terdampak, block IP, revoke credentials</li>
                <li>Long-term containment: apply patches, fix vulnerability</li>
                <li>Eradication: hapus malware, close backdoors, rebuild jika perlu</li>
                <li>Verifikasi bahwa threat telah dieliminasi</li>
            </ul>
        </div>
        <div class="timeline-item">
            <strong style="color:var(--red)">Fase 4: Notifikasi (Wajib!)</strong>
            <ul>
                <li><strong>UU PDP:</strong> Notifikasi ke subjek data dan lembaga dalam 3 × 24 jam</li>
                <li><strong>GDPR:</strong> Notifikasi ke DPA dalam 72 jam</li>
                <li><strong>PCI DSS:</strong> Notifikasi ke acquiring bank dan card brands</li>
                <li>Informasi: jenis data terdampak, jumlah subjek, langkah mitigasi</li>
            </ul>
        </div>
        <div class="timeline-item">
            <strong style="color:var(--purple)">Fase 5: Recovery</strong>
            <ul>
                <li>Restore sistem dari backup yang bersih dan terverifikasi</li>
                <li>Validasi integritas data yang dipulihkan</li>
                <li>Monitor ketat untuk memastikan tidak ada re-infection</li>
                <li>Komunikasikan status recovery ke stakeholder</li>
            </ul>
        </div>
        <div class="timeline-item">
            <strong style="color:var(--yellow)">Fase 6: Post-Incident Review</strong>
            <ul>
                <li>Buat laporan insiden lengkap (root cause analysis)</li>
                <li>Identifikasi lessons learned dan improvement opportunities</li>
                <li>Update playbook, prosedur, dan kontrol keamanan</li>
                <li>Lakukan re-assessment risiko jika diperlukan</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Checklist Implementasi untuk Tim Software</h3>
    <p>Ringkasan kontrol yang harus diimplementasikan oleh tim pengembangan perangkat lunak untuk memenuhi standar keamanan:</p>

    <div class="table-wrapper" style="margin-top:1rem">
        <table>
            <thead>
                <tr>
                    <th>Area</th>
                    <th>Kontrol</th>
                    <th>ISO 27001</th>
                    <th>PCI DSS</th>
                    <th>UU PDP</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Secure Coding</strong></td>
                    <td>Gunakan coding standards, SAST, code review</td>
                    <td>A.8.28</td>
                    <td>Req 6</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Input Validation</strong></td>
                    <td>Validasi semua input, sanitize output</td>
                    <td>A.8.26</td>
                    <td>Req 6</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><strong>Authentication</strong></td>
                    <td>MFA, strong password policy, session management</td>
                    <td>A.8.5</td>
                    <td>Req 8</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Authorization</strong></td>
                    <td>RBAC, least privilege, periodic review</td>
                    <td>A.8.3</td>
                    <td>Req 7</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Encryption</strong></td>
                    <td>At rest (AES-256), in transit (TLS 1.2+)</td>
                    <td>A.8.24</td>
                    <td>Req 3, 4</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Logging</strong></td>
                    <td>Audit trail, log management, monitoring</td>
                    <td>A.8.15</td>
                    <td>Req 10</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Data Protection</strong></td>
                    <td>Masking, tokenization, anonymization</td>
                    <td>A.8.11</td>
                    <td>Req 3</td>
                    <td>Pasal 27, 35</td>
                </tr>
                <tr>
                    <td><strong>Vulnerability Mgmt</strong></td>
                    <td>Scanning, patching, dependency check</td>
                    <td>A.8.8</td>
                    <td>Req 5, 6, 11</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Env Separation</strong></td>
                    <td>Dev/staging/prod terpisah</td>
                    <td>A.8.31</td>
                    <td>Req 6</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><strong>Backup</strong></td>
                    <td>Regular backup, test restore</td>
                    <td>A.8.13</td>
                    <td>Req 10</td>
                    <td>Pasal 35</td>
                </tr>
                <tr>
                    <td><strong>Incident Response</strong></td>
                    <td>IR plan, breach notification</td>
                    <td>A.5.24-28</td>
                    <td>Req 12</td>
                    <td>Pasal 46</td>
                </tr>
                <tr>
                    <td><strong>Privacy by Design</strong></td>
                    <td>DPIA, consent management, data minimization</td>
                    <td>-</td>
                    <td>-</td>
                    <td>Pasal 20, 34</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="success-box" style="margin-top:1rem">
        <strong>Tips Implementasi:</strong>
        <ul>
            <li>Mulai dari risk assessment — prioritaskan kontrol berdasarkan risiko tertinggi</li>
            <li>Automasi sebanyak mungkin: SAST/DAST di CI/CD, dependency scanning, secret detection</li>
            <li>Buat security champion di setiap tim development</li>
            <li>Integrasikan security testing ke pipeline CI/CD (shift-left security)</li>
            <li>Lakukan security awareness training reguler untuk seluruh tim</li>
            <li>Dokumentasikan semua kebijakan dan prosedur — auditor membutuhkan bukti tertulis</li>
        </ul>
    </div>
</div>
`;
