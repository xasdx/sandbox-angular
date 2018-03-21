import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { Observable } from "rxjs/Observable"
import { Subject } from "rxjs/Subject"

import "rxjs/add/observable/of"
import "rxjs/add/operator/catch"
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/distinctUntilChanged"

import { HeroSearchService } from "../hero-search.service"

@Component({
  selector: "hero-search",
  template: require("./hero-search.component.html"),
  providers: [HeroSearchService]
})
export class HeroSearchComponent {
  
  heroes = Observable.of([])
  searchTerms = new Subject()
 
  constructor(heroSearchService, router) {
    this.heroSearchService = heroSearchService
    this.router = router
  }

  ngOnInit() {
    this.heroes = this.searchTerms.debounceTime(300)
                                  .distinctUntilChanged()
                                  .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of([]))
                                  .catch(this.handleError)
  }

  search(term) {
    this.searchTerms.next(term)
  }

  gotoDetail(hero) {
    this.router.navigate(["/detail", hero.id])
  }

  handleError(err) {
    console.error(`Something went wrong: ${err}`)
    return Observable.of([])
  }
}

HeroSearchComponent.parameters = [[HeroSearchService], [Router]]
