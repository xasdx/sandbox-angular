import { Component } from "@angular/core"

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">dashboard</a>
      <a routerLink="/heroes">heroes</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  title = "hero editor"
}
