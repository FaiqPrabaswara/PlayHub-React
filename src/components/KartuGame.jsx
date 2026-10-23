function KartuGame({ game, onHapus }) {
    return (
        <div className="kartu-game">
            <h3>{game.nama}</h3>
            <p>Genre: {game.genre}</p>
            <p>Platform: {game.platform}</p>
            <p>Developer: {game.developer}</p>

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