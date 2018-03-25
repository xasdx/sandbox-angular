import { Injectable } from "@angular/core"
import { Http } from "@angular/http"

import "rxjs/add/operator/map"

@Injectable()
export class HeroSearchService {

  constructor(http) {
    this.http = http
  }

  search(term) {
    return this.http.get(`api/heroes?name=${term}`)
                    .map(res => res.json().data)
  }
}

HeroSearchService.parameters = [[Http]]
