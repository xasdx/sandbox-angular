import * as heroActions from "../actions/hero.actions"

export function heroReducer(state = [], action) {
  switch (action.type) {
    case heroActions.LOAD_HEROES_SUCCESS: { return action.payload }
    default: { return state }
  }
}
