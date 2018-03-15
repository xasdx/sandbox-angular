import { Component } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router"
import { Location } from "@angular/common"

import "rxjs/add/operator/switchMap"

import { HeroService } from "../hero.service"

@Component({
  selector: "hero-detail",
  templateUrl: "public/src/app/hero-detail/hero-detail.component.html"
})
export class HeroDetailComponent {
  
  hero = null

  constructor(heroService, route, location) {
    this.heroService = heroService
    this.route = route
    this.location = location
  }
  
  ngOnInit() {
    this.route.params.switchMap(params => this.heroService.getHero(parseInt(params["id"])))
                     .subscribe(hero => this.hero = hero)
  }

  goBack() {
    this.location.back()
  }
}

HeroDetailComponent.parameters = [[ HeroService ], [ ActivatedRoute ], [ Location ]]
