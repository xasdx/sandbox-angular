import { destroyPlatform, NO_ERRORS_SCHEMA } from "@angular/core"
import { RouterTestingModule } from "@angular/router/testing"
import { async } from "@angular/core/testing"
import { expect } from "chai"

import { useTestBed, data as testData } from "../test.helper"
import { HeroService } from "../hero.service"
import { DashboardComponent } from "./dashboard.component"

class MockHeroService {

  heroes = testData.heroes

  getHeroes() {
    return Promise.resolve(this.heroes)
  }
}

describe("DashboardComponent", () => {

  let fixture = null

  beforeEach(() => destroyPlatform())

  beforeEach(async(() => {
    useTestBed(testBed => testBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
      schemas: [NO_ERRORS_SCHEMA]
    })).then(testBed => {
      fixture = testBed.createComponent(DashboardComponent)
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
