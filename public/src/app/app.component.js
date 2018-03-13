import { Component } from "@angular/core"
import { HeroService } from "./hero.service"

@Component({
  selector: "my-app",
  providers: [HeroService],
  template: `
    <h1>{{title}}</h1>
    <hero-detail [hero]="selectedHero"></hero-detail>
    <hr>
    <h2>list of heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          (click)="onSelect(hero)"
          [class.selected]="hero === selectedHero"
      >{{hero.name}}</li>
    </ul>
  `,
  styles: [`
    .heroes li {
      cursor: pointer;
    }
    .heroes li.selected {
      font-weight: bold;
    }
  `]
})
export class AppComponent {

  title = "hero editor"

  selectedHero = null
  heroes = []

  constructor(heroService) {
    this.heroService = heroService
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  onSelect(hero) {
    this.selectedHero = hero
  }
}

AppComponent.parameters = [[HeroService]]
