import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { Observable } from "rxjs/Observable"
import { Store } from "@ngrx/store"

import "rxjs/add/observable/of"

import { HeroService } from "../hero.service"
import * as heroActions from "../actions/hero.actions"

@Component({
  selector: "my-heroes",
  template: require("./heroes.component.html"),
  styles: [require("./heroes.component.css")]
})
export class HeroesComponent {

  selectedHero = null
  heroes = Observable.of([])

  constructor(heroService, router, store) {
    this.heroService = heroService
    this.router = router
    this.store = store
    this.heroes = this.store.select(state => state.heroes)
  }

  ngOnInit() {
    this.store.dispatch(new heroActions.LoadHeroesAction())
  }

  onSelect(hero) {
    this.selectedHero = hero
  }

  gotoDetail() {
    this.router.navigate(["/detail", this.selectedHero.id])
  }

  add(name) {
    name = name.trim()
    if (!name) { return }
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero)
      this.selectedHero = null
    })
  }

  delete(hero) {
    this.store.dispatch(new heroActions.DeleteHeroAction(hero.id))
  }
}

HeroesComponent.parameters = [[HeroService], [Router], [Store]]
