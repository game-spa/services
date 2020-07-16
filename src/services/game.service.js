export class GameService {
  constructor({ api, storage }) {
    this.api = api;
    
    this.storage = storage;
  }

  findGamesByName(name) {
    return this.api.findGame(name);
  }

  favorite(game) {
    const favorites = this.storage.get('favorites') || [];

    favorites.push(game);

    this.storage.add('favorites', favorites);
  }

  unfavorite(game) {
    const favorites = this.storage.get('favorites') || [];

    const newFavorites = favorites.filter(favorite => favorite.id !== game.id);

    this.storage.add('favorites', newFavorites);
  }

  isFavorited(game) {
    const favorites = this.storage.get('favorites') || [];

    return favorites.some(favorite => favorite.id === game.id);
  }

  listFavorites() {
    return this.storage.get('favorites') || [];
  }
}

