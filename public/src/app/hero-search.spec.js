import { destroyPlatform } from "@angular/core"
import { HttpModule, Http } from "@angular/http"
import { fakeAsync, inject } from "@angular/core/testing"
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"

import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/of"

import { expect } from "chai"

import { useTestBed } from "./test.helper"

import { HeroSearchService } from "./hero-search.service"

let heroes = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" }
]

describe("HeroSearchService", () => {

  let mockHttp

  beforeEach(() => destroyPlatform())

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
