import { HttpModule, Http } from "@angular/http"
import { fakeAsync, inject } from "@angular/core/testing"
import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/of"

import { useTestBed, data as testData, expect } from "./test.helper"
import { HeroSearchService } from "./hero-search.service"

let heroes = testData.heroes

describe("HeroSearchService", () => {

  let mockHttp = null

  beforeEach(() => {

    mockHttp = { get: null }

    spyOn(mockHttp, "get").and.returnValue(Observable.of({ json: () => {
      return { data: heroes } }
    }))

    useTestBed(testBed => testBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: Http, useValue: mockHttp },
        HeroSearchService
      ]
    }))
  })

  it("returns the result of a search", fakeAsync(inject([HeroSearchService], service => {
    service.search("term").subscribe(res => {
      expect(mockHttp.get.calls.count()).to.equal(1)
      expect(mockHttp.get.calls.argsFor(0)[0]).to.equal("api/heroes?name=term")
      expect(res).to.equal(heroes)
    })
  })))
})
