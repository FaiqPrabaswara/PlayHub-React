
import { useState } from "react";

import Header from "./components/Header";
import RingkasanGame from "./components/RingkasanGame";
import FormTambahGame from "./components/FormTambahGame";
import DaftarGame from "./components/DaftarGame";
import KomunitasGame from "./components/KomunitasGame";

import "./App.css";

function App() {
  const [daftarGame, setDaftarGame] = useState([
    {
      id: 1,
      nama: "Minecraft",
      genre: "Sandbox",
      platform: "PC",
      developer: "Mojang Studios"
    },
    {
      id: 2,
      nama: "Valorant",
      genre: "FPS",
      platform: "PC",
      developer: "Riot Games"
    },
    {
      id: 3,
      nama: "Elden Ring",
      genre: "Action RPG",
      platform: "PC",
      developer: "FromSoftware"
    }
  ]);

  // Fungsi menambahkan game baru
  function tambahGame(gameBaru) {
    const dataBaru = {
      id: Date.now(),
      nama: gameBaru.nama,
      genre: gameBaru.genre,
      platform: gameBaru.platform,
      developer: gameBaru.developer
    };

    setDaftarGame([...daftarGame, dataBaru]);
  }

  // Fungsi menghapus game
  function hapusGame(id) {
    const dataTersisa = daftarGame.filter(
      (game) => game.id !== id
    );

    setDaftarGame(dataTersisa);
  }

  return (
    <div>
      <Header />

      <main className="container">
        <RingkasanGame jumlah={daftarGame.length} />

        <FormTambahGame onTambah={tambahGame} />

        <DaftarGame
          daftarGame={daftarGame}
          onHapus={hapusGame}
        />

        {/* Fitur baru Tugas 7 */}
        <KomunitasGame />
      </main>

      <footer className="footer">
        <p>&copy; 2026 PlayHub</p>
      </footer>
    </div>
  );
}

export default App;
