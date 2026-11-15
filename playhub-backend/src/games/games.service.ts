import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  private games: Game[] = [
    {
      id: 1,
      nama: 'Minecraft',
      genre: 'Sandbox',
      platform: 'PC',
      developer: 'Mojang Studios',
      tahunRilis: 2011,
      sudahDimainkan: true,
    },
    {
      id: 2,
      nama: 'Valorant',
      genre: 'FPS',
      platform: 'PC',
      developer: 'Riot Games',
      tahunRilis: 2020,
      sudahDimainkan: true,
    },
    {
      id: 3,
      nama: 'Elden Ring',
      genre: 'Action RPG',
      platform: 'PC',
      developer: 'FromSoftware',
      tahunRilis: 2022,
      sudahDimainkan: true,
    },
    {
      id: 4,
      nama: 'Stardew Valley',
      genre: 'Simulation',
      platform: 'PC',
      developer: 'ConcernedApe',
      tahunRilis: 2016,
      sudahDimainkan: false,
    },
    {
      id: 5,
      nama: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: 'PC',
      developer: 'Team Cherry',
      tahunRilis: 2017,
      sudahDimainkan: false,
    },
    {
      id: 6,
      nama: 'Terraria',
      genre: 'Sandbox',
      platform: 'PC',
      developer: 'Re-Logic',
      tahunRilis: 2011,
      sudahDimainkan: false,
    },
  ];
  private nextId = 7;

  // Menampilkan semua game
  findAll() {
    return this.games;
  }

  // Menampilkan game berdasarkan ID
  findOne(id: number) {
    const game = this.games.find((g) => g.id === id);
    if (!game) {
      throw new NotFoundException('Game tidak ditemukan');
    }

    return game;
  }

  // Menambahkan game
  create(data: Omit<Game, 'id'>) {
    const cekGame = this.games.find(
      (g) => g.nama.toLowerCase() === data.nama.toLowerCase(),
    );

    if (cekGame) {
      throw new ConflictException('Nama game sudah ada');
    }

    const game: Game = {
      id: this.nextId++,
      ...data,
    };

    this.games.push(game);
    return game;
  }

  // Mengubah data game
  update(id: number, data: Partial<Omit<Game, 'id'>>) {
    const game = this.findOne(id);

    Object.assign(game, data);
    return game;
  }

  // Menghapus game
  remove(id: number) {
    const game = this.findOne(id);

    this.games = this.games.filter((g) => g.id !== id);

    return game;
  }
}
