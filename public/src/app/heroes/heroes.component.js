import { Component } from "@angular/core"
import { Router } from "@angular/router"

import { HeroService } from "../hero.service"

@Component({
  selector: "my-heroes",
  templateUrl: "public/src/app/heroes/heroes.component.html",
  styleUrls: [ "public/src/app/heroes/heroes.component.css" ]
})
export class HeroesComponent {

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

  add(name) {
    name = name.trim()
    if (!name) { return }
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero)
      this.selectedHero = null
    })
  }

  delete(hero) {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero)
      if (this.selectedHero === hero) { this.selectedHero = null }
    })
  }
}

HeroesComponent.parameters = [[ HeroService ], [ Router ]]
