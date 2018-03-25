import { Injectable } from "@angular/core"
import { Effect, Actions } from "@ngrx/effects"

import "rxjs/add/operator/switchMap"

import { HeroService } from "../hero.service"
import * as heroActions from "../actions/hero.actions"

@Injectable()
export class HeroEffects {
  
  @Effect()
  loadHeroes = null

  constructor(heroService, actions) {
    this.heroService = heroService
    this.loadHeroes = actions.ofType(heroActions.LOAD_HEROES)
                             .switchMap(() => this.heroService.getHeroes().then(heroes => new heroActions.LoadHeroesSuccessAction(heroes)))
  }
}

HeroEffects.parameters = [[HeroService], [Actions]]
