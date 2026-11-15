import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import RingkasanGame from "./components/RingkasanGame";
import FormTambahGame from "./components/FormTambahGame";
import DaftarGame from "./components/DaftarGame";
import KomunitasGame from "./components/KomunitasGame";

import "./App.css";

function App() {
  const [daftarGame, setDaftarGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function ambilGame() {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "http://localhost:3001/games"
        );

        setDaftarGame(response.data);
      } catch (error) {
        setError("Gagal mengambil data game");
      } finally {
        setLoading(false);
      }
    }

    ambilGame();
  }, []);

  async function tambahGame(gameBaru) {
    try {
      const response = await axios.post(
        "http://localhost:3001/games",
        gameBaru
      );

      setDaftarGame((dataLama) => [
        ...dataLama,
        response.data
      ]);

      alert("Game berhasil ditambahkan!");
      return true;
    } catch (error) {
      alert("Gagal menambahkan game!");
      return false;
    }
  }

  async function editGame(id, dataBaru) {
    try {
      const response = await axios.patch(
        `http://localhost:3001/games/${id}`,
        dataBaru
      );

      setDaftarGame((dataLama) =>
        dataLama.map((game) =>
          game.id === id ? response.data : game
        )
      );

      alert("Game berhasil diubah!");
      return true;
    } catch (error) {
      alert("Gagal mengubah game!");
      return false;
    }
  }

  async function hapusGame(id) {
    const yakin = window.confirm("Yakin ingin menghapus game ini?");

    if (!yakin) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/games/${id}`);

      setDaftarGame((dataLama) =>
        dataLama.filter((game) => game.id !== id)
      );

      alert("Game berhasil dihapus!");
    } catch (error) {
      alert("Gagal menghapus game!");
    }
  }

  return (
    <div>
      <Header />

      <main className="container">
        <RingkasanGame jumlah={daftarGame.length} />

        <FormTambahGame onTambah={tambahGame} />

        {loading ? (
          <p>Memuat data game...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <DaftarGame
            daftarGame={daftarGame}
            onHapus={hapusGame}
            onEdit={editGame}
          />
        )}

        <KomunitasGame />
      </main>

      <footer className="footer">
        <p>&copy; 2026 PlayHub</p>
      </footer>
    </div>
  );
}

export default App;
