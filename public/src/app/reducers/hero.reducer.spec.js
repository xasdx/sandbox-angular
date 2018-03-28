import { expect } from "../test.helper"
import * as heroActions from "../actions/hero.actions"
import { heroReducer } from "./hero.reducer"

describe("heroReducer", () => {

  it("deletes a hero", () => {
    let currentState = [{ id: 11, name: "Mr. Nice" }, { id: 12, name: "Narco" }]
    let expectedState = [{ id: 11, name: "Mr. Nice" }]
    let result = heroReducer(currentState, new heroActions.DeleteHeroSuccessAction(12))
    expect(result).to.deep.equal(expectedState)
  })
})
