import { Injectable } from "@angular/core"
import { Http, Headers } from "@angular/http"

import "rxjs/add/operator/toPromise"

@Injectable()
export class HeroService {

  heroesUrl = "api/heroes"

  constructor(http) {
    this.http = http
  }

  getHeroes() {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError)
  }

  getHero(id) {
    return this.http.get(`${this.heroesUrl}/${id}`)
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError)
  }

  update(hero) {
    let headers = new Headers({ "Content-Type": "application/json" })
    return this.http.put(`${this.heroesUrl}/${hero.id}`, JSON.stringify(hero), { headers })
                    .toPromise()
                    .then(() => hero)
                    .catch(this.handleError)
  }

  handleError(err) {
    console.error(`Something went wrong: ${err}`)
    return Promise.reject(err.message || err)
  }
}

HeroService.parameters = [[ Http ]]
