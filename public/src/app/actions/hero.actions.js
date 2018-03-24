export const LOAD_HEROES = "LOAD_HEROES"
export const LOAD_HEROES_SUCCESS = "LOAD_HEROES_SUCCESS"

export class LoadHeroesAction {
  type = LOAD_HEROES
}

export class LoadHeroesSuccessAction {
  
  type = LOAD_HEROES_SUCCESS

  constructor(payload) {
    this.payload = payload
  }
}
