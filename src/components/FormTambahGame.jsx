import { useState } from "react";

function FormTambahGame({ onTambah }) {
    const [nama, setNama] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [developer, setDeveloper] = useState("");
    const [tahunRilis, setTahunRilis] = useState("");
    const [sudahDimainkan, setSudahDimainkan] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        if (
            nama.trim() === "" ||
            genre.trim() === "" ||
            platform.trim() === "" ||
            developer.trim() === "" ||
            tahunRilis === ""
        ) {
            alert("Semua kolom harus diisi!");
            return;
        }

        const berhasil = await onTambah({
            nama: nama,
            genre: genre,
            platform: platform,
            developer: developer,
            tahunRilis: Number(tahunRilis),
            sudahDimainkan: sudahDimainkan
        });

        if (berhasil) {
            setNama("");
            setGenre("");
            setPlatform("");
            setDeveloper("");
            setTahunRilis("");
            setSudahDimainkan(false);
        }
    }

    return (
        <div className="form-game">
            <h2>Tambah Game</h2>

            <form onSubmit={handleSubmit}>
                <label>Nama Game</label>
                <input
                    type="text"
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                />

                <label>Genre</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                />

                <label>Platform</label>
                <input
                    type="text"
                    value={platform}
                    onChange={(event) => setPlatform(event.target.value)}
                />

                <label>Developer</label>
                <input
                    type="text"
                    value={developer}
                    onChange={(event) => setDeveloper(event.target.value)}
                />

                <label>Tahun Rilis</label>
                <input
                    type="number"
                    min="1950"
                    value={tahunRilis}
                    onChange={(event) => setTahunRilis(event.target.value)}
                    required
                />

                <label>Sudah Dimainkan</label>
                <input
                    type="checkbox"
                    checked={sudahDimainkan}
                    onChange={(event) => setSudahDimainkan(event.target.checked)}
                />

                <button type="submit">Tambah Game</button>
            </form>
        </div>
    );
}

export default FormTambahGame;