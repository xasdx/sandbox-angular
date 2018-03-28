import { Component } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { Store } from "@ngrx/store"

import "rxjs/add/observable/of"

import { HeroService } from "../hero.service"
import * as heroActions from "../actions/hero.actions"

@Component({
  selector: "my-dashboard",
  template: require("./dashboard.component.html"),
  styles: [require("./dashboard.component.css")]
})
export class DashboardComponent {
  
  heroes = Observable.of([])

  constructor(heroService, store) {
    this.heroService = heroService
    this.store = store
    this.heroes = this.store.select(state => state.heroes.slice(1, 6))
  }
  
  ngOnInit() {
    this.store.dispatch(new heroActions.LoadHeroesAction())
  }
}

DashboardComponent.parameters = [[HeroService], [Store]]
