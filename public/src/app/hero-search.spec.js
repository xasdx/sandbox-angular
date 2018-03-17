import { destroyPlatform } from "@angular/core"
import { HttpModule, Http } from "@angular/http"
import { getTestBed, fakeAsync, inject, TestBed } from "@angular/core/testing"
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"

import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/of"

import { expect } from "chai"

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

    if (!getTestBed().platform) { TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()) }

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: Http, useValue: mockHttp },
        HeroSearchService
      ]
    })
  })

  it("returns the result of a search", fakeAsync(inject([HeroSearchService], service => {
    service.search("term").subscribe(res => {
      //expect(mockHttp.get).to.have.been.calledWith("api/heroes?name=term")
      expect(res).to.equal(heroes)
    })
  })))
})