import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { heroReducer } from "./reducers/hero.reducer"
import { HeroEffects } from "./effects/hero.effects"

import { InMemoryWebApiModule } from "angular2-in-memory-web-api"
import { InMemoryDataService } from "./in-memory-data.service"

import { AppRoutingModule } from "./app-routing.module"

import { AppComponent } from "./app/app.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { HeroesComponent } from "./heroes/heroes.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { HeroSearchComponent } from "./hero-search/hero-search.component"
import { ClockComponent } from "./clock/clock.component"
import { HeroService } from "./hero.service"
import { ClockPipe } from "./clock.pipe"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    StoreModule.provideStore({ heroes: heroReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(HeroEffects)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    ClockComponent,
    ClockPipe
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
