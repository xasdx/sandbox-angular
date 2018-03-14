import { Component } from "@angular/core"
import { HeroService } from "./hero.service"

@Component({
  selector: "my-heroes",
  templateUrl: "public/src/app/heroes.component.html",
  styles: [`
    .heroes li {
      cursor: pointer;
    }
    .heroes li.selected {
      font-weight: bold;
    }
  `]
})
export class HeroesComponent {

  title = "hero editor"

  selectedHero = null
  heroes = []

  constructor(heroService) {
    this.heroService = heroService
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  onSelect(hero) {
    this.selectedHero = hero
  }
}

HeroesComponent.parameters = [[ HeroService ]]
