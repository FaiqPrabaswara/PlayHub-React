function KartuGame({ game, onHapus, onEdit }) {
    function handleEdit() {
        const namaBaru = prompt("Masukkan nama game baru:", game.nama);

        if (namaBaru === null || namaBaru.trim() === "") {
            return;
        }

        onEdit(game.id, {
            nama: namaBaru
        });
    }

    return (
        <div className="kartu-game">
            <h3>{game.nama}</h3>
            <p>Genre: {game.genre}</p>
            <p>Platform: {game.platform}</p>
            <p>Developer: {game.developer}</p>

            <button onClick={handleEdit}>
                Edit
            </button>
            <button
                className="tombol-hapus"
                onClick={() => onHapus(game.id)}
            >
                Hapus
            </button>
        </div>
    );
}

export default KartuGame;