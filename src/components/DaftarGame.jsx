import KartuGame from "./KartuGame";

function DaftarGame({ daftarGame, onHapus, onEdit }) {
    if (daftarGame.length === 0) {
        return <p>Belum ada data game.</p>;
    }

    return (
        <div className="daftar-game">
            <h2>Daftar Game</h2>

            <div className="daftar-kartu">
                {daftarGame.map((game) => (
                    <KartuGame
                        key={game.id}
                        game={game}
                        onHapus={onHapus}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
}

export default DaftarGame;