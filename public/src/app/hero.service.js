import { Injectable } from "@angular/core"
import { heroes } from "./mock-heroes"

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(heroes)
  }

  getHero(id) {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
  }
}
