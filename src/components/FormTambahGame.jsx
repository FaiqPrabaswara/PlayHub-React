import { useState } from "react";

function FormTambahGame({ onTambah }) {
    const [nama, setNama] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [developer, setDeveloper] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (
            nama.trim() === "" ||
            genre.trim() === "" ||
            platform.trim() === "" ||
            developer.trim() === ""
        ) {
            alert("Semua kolom harus diisi!");
            return;
        }

        onTambah({
            nama: nama,
            genre: genre,
            platform: platform,
            developer: developer
        });

        setNama("");
        setGenre("");
        setPlatform("");
        setDeveloper("");
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

                <button type="submit">Tambah Game</button>
            </form>
        </div>
    );
}

export default FormTambahGame;