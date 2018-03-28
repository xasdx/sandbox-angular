import * as heroActions from "../actions/hero.actions"

export function heroReducer(state = [], action) {
  switch (action.type) {
    case heroActions.LOAD_HEROES_SUCCESS: { return action.payload }
    case heroActions.DELETE_HERO_SUCCESS: { return state.filter(hero => hero.id !== action.payload) }
    default: { return state }
  }
}
