import { Component, Input } from "@angular/core"

@Component({
  selector: "hero-detail",
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}}</h2>
      <input [(ngModel)]="hero.name">
    </div>
  `
})
export class HeroDetailComponent {
  
  @Input()
  hero = null
}
