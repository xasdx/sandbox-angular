import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { HttpModule, Http } from "@angular/http"

import { AppRoutingModule } from "./app-routing.module"

import { AppComponent } from "./app/app.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { HeroesComponent } from "./heroes/heroes.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { HeroService } from "./hero.service"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
