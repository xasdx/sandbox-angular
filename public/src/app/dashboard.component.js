import { Component } from "@angular/core"

import { HeroService } from "./hero.service"

@Component({
  selector: "my-dashboard",
  templateUrl: "public/src/app/dashboard.component.html"
})
export class DashboardComponent {
  
  heroes = []

  constructor(heroService) {
    this.heroService = heroService
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
  }
}

DashboardComponent.parameters = [[ HeroService ]]
