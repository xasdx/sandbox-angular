import { NO_ERRORS_SCHEMA } from "@angular/core"
import { RouterTestingModule } from "@angular/router/testing"
import { async } from "@angular/core/testing"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"

import { useTestBed, data as testData, expect } from "../test.helper"
import { HeroService } from "../hero.service"
import { DashboardComponent } from "./dashboard.component"
import { heroReducer } from "../reducers/hero.reducer"
import { HeroEffects } from "../effects/hero.effects"

class MockHeroService {

  heroes = testData.heroes

  getHeroes() {
    return Promise.resolve(this.heroes)
  }
}

describe("DashboardComponent", () => {

  let fixture = null

  beforeEach(async(() => {
    useTestBed(testBed => testBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.provideStore({ heroes: heroReducer }),
        EffectsModule.run(HeroEffects)
      ],
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
      expect(heroes.length).to.equal(5)
      expect([...heroes].map(e => e.innerText)).to.include.members(["Narco", "Bombasto", "Celeritas", "Magneta", "RubberMan"])
    })
  }))
})
