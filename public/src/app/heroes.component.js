import { Component } from "@angular/core"
import { Router } from "@angular/router"

import { HeroService } from "./hero.service"

@Component({
  selector: "my-heroes",
  templateUrl: "public/src/app/heroes.component.html",
  styleUrls: [ "public/src/app/heroes.component.css" ]
})
export class HeroesComponent {

  title = "hero editor"

  selectedHero = null
  heroes = []

  constructor(heroService, router) {
    this.heroService = heroService
    this.router = router
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  onSelect(hero) {
    this.selectedHero = hero
  }

  gotoDetail() {
    this.router.navigate(["/detail", this.selectedHero.id])
  }
}

HeroesComponent.parameters = [[ HeroService], [ Router ]]
