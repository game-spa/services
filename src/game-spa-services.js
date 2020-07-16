import './set-public-path';

import { findGame } from './utils/api';
import { add, get } from './utils/storage';
import { GameService } from './services/game.service';

const api = { findGame };
const storage = { add, get };

export const gameService = new GameService({
  api,
  storage,
});
