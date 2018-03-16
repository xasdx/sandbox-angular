import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { InMemoryWebApiModule } from "angular2-in-memory-web-api"
import { InMemoryDataService } from "./in-memory-data.service"

import { AppRoutingModule } from "./app-routing.module"

import { AppComponent } from "./app/app.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { HeroesComponent } from "./heroes/heroes.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { HeroSearchComponent } from "./hero-search/hero-search.component"
import { HeroService } from "./hero.service"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
