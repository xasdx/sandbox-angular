export const LOAD_HEROES = "LOAD_HEROES"
export const LOAD_HEROES_SUCCESS = "LOAD_HEROES_SUCCESS"
export const DELETE_HERO = "DELETE_HERO"
export const DELETE_HERO_SUCCESS = "DELETE_HERO_SUCCESS"

export class LoadHeroesAction {
  type = LOAD_HEROES
}

export class LoadHeroesSuccessAction {
  type = LOAD_HEROES_SUCCESS
  constructor(payload) { this.payload = payload }
}

export class DeleteHeroAction {
  type = DELETE_HERO
  constructor(payload) { this.payload = payload }
}

export class DeleteHeroSuccessAction {
  type = DELETE_HERO_SUCCESS
  constructor(payload) { this.payload = payload }
}
