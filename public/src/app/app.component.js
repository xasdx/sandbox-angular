import { Component } from "@angular/core"

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <input [(ngModel)]="hero.name" placeholder="name">
    <p>{{time}}</p>
  `
})
export class AppComponent {

  title = "hero editor"
  hero = { name: "arthas" }

  constructor () {
    this.time = new Date().toISOString()
  }
}
