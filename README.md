# PlayHub — Web Tugas 9

PlayHub adalah aplikasi pengelolaan daftar game dengan frontend React + Vite
(JavaScript/JSX), backend NestJS + TypeScript, dan Axios untuk komunikasi API.

## Fitur

- Menampilkan daftar game dan ringkasan jumlah game.
- Menambahkan game melalui form: nama, genre, platform, developer, tahun rilis,
  dan status sudah dimainkan.
- Mengubah nama game melalui tombol Edit dan menghapus game dengan konfirmasi.
- Menampilkan status pemuatan, pesan kegagalan, dan bagian komunitas game.
- Backend menyediakan CRUD, validasi input, serta respons error 400, 404, dan 409.

Data disimpan dalam array di memori backend, belum menggunakan database.
Data akan hilang saat backend dimulai ulang.

## Struktur proyek

```text
PlayHub-React-master/
├── src/                     # Frontend React dan komponen
├── public/                  # Aset publik frontend
├── index.html
├── package.json             # Dependensi dan perintah frontend
├── vite.config.js
├── playhub-backend/
│   ├── src/
│   │   ├── games/           # Controller, service, DTO, dan entity game
│   │   └── main.ts          # Port, CORS, dan validasi
│   ├── test/
│   ├── requests.http        # Contoh request API
│   └── package.json         # Dependensi dan perintah backend
└── docs/screenshots/        # Screenshot asli pengujian
```

## Menjalankan aplikasi

Siapkan Node.js dan npm yang kompatibel dengan dependensi proyek. Jalankan
backend dan frontend pada dua terminal terpisah dari root proyek.

Terminal 1 — backend:

```bash
cd playhub-backend
npm install
npm run start:dev
```

API berjalan di `http://localhost:3001`. Terminal 2 — frontend:

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. Pastikan port 5173 tersedia karena CORS backend
mengizinkan origin tersebut. Frontend mengakses API `http://localhost:3001/games`.

Untuk memeriksa build, jalankan `npm run build` di root dan di folder
`playhub-backend`. Folder `node_modules/`, `dist/`, dan file `.env` diabaikan oleh
aturan `.gitignore` masing-masing.

## Endpoint API

URL dasar: `http://localhost:3001`.

| Metode | Endpoint | Fungsi | Status berhasil |
| --- | --- | --- | --- |
| GET | `/games` | Menampilkan semua game | 200 |
| GET | `/games/:id` | Menampilkan game berdasarkan ID | 200 |
| POST | `/games` | Menambahkan game | 201 |
| PATCH | `/games/:id` | Mengubah sebagian data game | 200 |
| DELETE | `/games/:id` | Menghapus dan mengembalikan game yang dihapus | 200 |

Contoh body POST dengan header `Content-Type: application/json`:

```json
{
  "nama": "Minecraft",
  "genre": "Sandbox",
  "platform": "PC",
  "developer": "Mojang",
  "tahunRilis": 2011,
  "sudahDimainkan": true
}
```

PATCH menerima sebagian kolom, misalnya `{"nama": "Minecraft Java"}`.
API mendukung perubahan kolom game lainnya, sedangkan tombol Edit di frontend
saat ini hanya mengubah nama.

- **400:** input tidak valid, kolom tambahan yang tidak diizinkan, atau ID bukan
  angka. Nama minimal 3 karakter; genre, platform, dan developer berupa string
  tidak kosong; tahun rilis berupa angka minimal 1950; status berupa boolean.
- **404:** ID game tidak ditemukan.
- **409:** POST menggunakan nama yang sudah ada, tanpa membedakan huruf besar
  dan kecil. Pemeriksaan nama duplikat saat ini hanya dilakukan pada POST.

## Dokumentasi screenshot

Tersedia 14 screenshot PNG asli di
[`docs/screenshots/`](docs/screenshots/README.md), mencakup dokumentasi API,
respons error, frontend, dan resource NestJS. Daftar file tersedia pada indeks
tersebut. Tidak ada screenshot baru yang dibuat atau pengujian API/UI yang
dijalankan ulang selama penyiapan repository ini. Contoh request tersedia di
[`playhub-backend/requests.http`](playhub-backend/requests.http).
