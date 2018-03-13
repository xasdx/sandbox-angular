import { Injectable } from "@angular/core"
import { heroes } from "./mock-heroes"

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(heroes)
  }
}
