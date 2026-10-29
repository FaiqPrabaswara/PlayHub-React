
import { useState, useEffect } from "react";

function KomunitasGame() {
  const [anggota, setAnggota] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function ambilData() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await response.json();
      setAnggota(data);

    } catch (err) {
      setError("Gagal memuat anggota komunitas.");

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <div className="komunitas">
      <h2>Komunitas PlayHub</h2>

      {loading && <p>Memuat data anggota...</p>}

      {error && (
        <div>
          <p className="pesan-error">{error}</p>
          <button onClick={ambilData}>
            Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="daftar-anggota">
          {anggota.map((user) => (
            <div className="kartu-anggota" key={user.id}>
              <h3>{user.name}</h3>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default KomunitasGame;
