import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"
import { HeroesComponent } from "./heroes.component"
import { HeroDetailComponent } from "./hero-detail.component"
import { DashboardComponent } from "./dashboard.component"
import { HeroService } from "./hero.service"

let routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "detail/:id",
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
