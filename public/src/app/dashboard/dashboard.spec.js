import { destroyPlatform, NO_ERRORS_SCHEMA } from "@angular/core"
import { RouterTestingModule } from "@angular/router/testing"
import { getTestBed, async, TestBed } from "@angular/core/testing"
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"
import { expect } from "chai"

import { HeroService } from "../hero.service"
import { DashboardComponent } from "./dashboard.component"

class MockHeroService {

  heroes = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" }
  ]

  getHeroes() {
    return Promise.resolve(this.heroes)
  }
}

describe("DashboardComponent", () => {

  let fixture = null

  beforeEach(() => destroyPlatform())

  beforeEach(async(() => {
    if (!getTestBed().platform) { TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()) }
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent)
      fixture.detectChanges()
    })
  }))

  it("returns the top heroes", async(() => {
    fixture.componentInstance.ngOnInit()
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      return fixture.whenStable()
    }).then(() => {
      let compiled = fixture.debugElement.nativeElement
      let heroes = compiled.querySelectorAll(".hero-list div p")
      expect(heroes.length).to.equal(4)
      expect([...heroes].map(e => e.innerText)).to.include.members(["Narco", "Bombasto", "Celeritas", "Magneta"])
    })
  }))
})
