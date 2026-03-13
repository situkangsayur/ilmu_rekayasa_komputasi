# Teori Komputasi - Interactive Learning Web App

Web app interaktif dan komprehensif untuk mempelajari ilmu komputasi dari dasar hingga advanced, dilengkapi animasi dan visualisasi.

## Topik yang Dibahas

- Automata & Bahasa Formal (DFA, NFA, PDA, Turing Machine)
- Complexity Theory (P, NP, NP-Hard, NP-Complete)
- Algoritma & 10 Top HackerRank Cases (Greedy, D&C, DP, Branch & Bound, Backtracking)
- Struktur Data (LinkedList, Queue, Stack, Tree, Graph)
- OOP & SOLID Principles
- Perbandingan Bahasa (C, Java, Go, Rust, Python, Groovy)
- Software Architecture (Monolith, Microservices, Message Queue, Kafka, RabbitMQ)
- Networking (TCP/UDP, HTTP 1.0-3, REST, SOAP, GraphQL, gRPC)
- Clean Code & Clean Architecture
- Security & Encryption (SSDLC, TLS, JWT, RSA, Hash, AES)
- ISO 27001:2022, ISO 27701, UU PDP
- Frameworks (Next.js, Spring Boot, Quarkus, Gin, Rust, FastAPI)
- RAG (Retrieval Augmented Generation)
- Referensi Buku & Paper

## Prerequisites

Hanya butuh **web browser** modern (Chrome, Firefox, Edge, Safari).

Tidak ada dependency, tidak perlu install apapun — pure HTML, CSS, dan JavaScript.

## Running Locally

### Opsi 1: Buka langsung

Buka file `index.html` di browser:

```bash
# Linux
xdg-open index.html

# macOS
open index.html

# Windows
start index.html
```

### Opsi 2: Local HTTP server (recommended)

Menggunakan Python:

```bash
cd teori_komputasi

# Default port 8080
python3 -m http.server 8080

# Custom port (misal 3000, 5500, 9090)
python3 -m http.server 3000
python3 -m http.server 5500
python3 -m http.server 9090
```

Lalu buka http://localhost:PORT (sesuai port yang dipilih)

Menggunakan Node.js:

```bash
# Default
npx serve .

# Custom port
npx serve . -l 3000
npx serve . -l 5500
```

Menggunakan PHP:

```bash
# Default port 8080
php -S localhost:8080

# Custom port
php -S localhost:3000
php -S localhost:5500
```

Menggunakan Go:

```bash
# Menggunakan goexec atau simple file server
# Custom port 4000
python3 -m http.server 4000
```

Menggunakan Live Server (VS Code Extension):

```
1. Install extension "Live Server" di VS Code
2. Klik kanan index.html → "Open with Live Server"
3. Default port: 5500 (bisa diubah di settings)
```

> **Tips:** Jika port sudah dipakai (error "Address already in use"), ganti ke port lain. Port yang umum digunakan untuk development: `3000`, `4000`, `5500`, `8000`, `8080`, `8888`, `9090`.

## Deploy ke Vercel

### Opsi 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd teori_komputasi
vercel
```

Ikuti instruksi di terminal. Setelah selesai, akan mendapat URL production.

### Opsi 2: GitHub + Vercel Dashboard

1. Push repository ke GitHub:
   ```bash
   git add .
   git commit -m "init: teori komputasi web app"
   git push origin master
   ```
2. Buka https://vercel.com/new
3. Import repository dari GitHub
4. Klik **Deploy** — tanpa konfigurasi tambahan

Vercel akan otomatis mendeteksi sebagai static site dan deploy.

### Opsi 3: Deploy ke platform lain

Karena ini static site murni, bisa di-deploy ke:

- **Netlify**: drag & drop folder ke netlify.com/drop
- **GitHub Pages**: push ke branch `gh-pages`
- **Cloudflare Pages**: connect repo, set output directory ke `.`

## Struktur Proyek

```
teori_komputasi/
├── index.html        # Entry point & navigation
├── css/
│   └── style.css     # Styling, animasi, responsive design
├── js/
│   └── app.js        # Semua section content & interactive animations
├── package.json      # Project metadata
├── vercel.json       # Vercel routing config
└── README.md
```

## Fitur Interaktif

- **DFA Simulator** — input string, jalankan automata step-by-step
- **Turing Machine** — binary incrementer dengan tape animation
- **BST Visualizer** — insert node, lihat tree terbentuk secara visual
- **Complexity Chart** — grafik perbandingan O(1) hingga O(2^n)
- **Tab navigation** — bandingkan syntax antar bahasa, lihat 10 algorithm cases
