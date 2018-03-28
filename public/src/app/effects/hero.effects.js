import { Injectable } from "@angular/core"
import { Effect, Actions } from "@ngrx/effects"

import "rxjs/add/operator/switchMap"

import { HeroService } from "../hero.service"
import * as heroActions from "../actions/hero.actions"

@Injectable()
export class HeroEffects {
  
  @Effect()
  loadHeroes = null

  @Effect()
  deleteHero = null

  constructor(heroService, actions) {
    this.heroService = heroService

    let loadHeroes = () => this.heroService.getHeroes()
                               .then(heroes => new heroActions.LoadHeroesSuccessAction(heroes))

    let deleteHero = action => this.heroService.delete(action.payload)
                                   .then(_ => new heroActions.DeleteHeroSuccessAction(action.payload))

    this.loadHeroes = actions.ofType(heroActions.LOAD_HEROES).switchMap(loadHeroes)
    this.deleteHero = actions.ofType(heroActions.DELETE_HERO).switchMap(deleteHero)
  }
}

HeroEffects.parameters = [[HeroService], [Actions]]
