import { Component } from "@angular/core"
import { HeroService } from "./hero.service"

@Component({
  selector: "my-heroes",
  template: `
    <h2>list of heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          (click)="onSelect(hero)"
          [class.selected]="hero === selectedHero"
      >{{hero.name}}</li>
    </ul>
    <hr>
    <hero-detail [hero]="selectedHero"></hero-detail>
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
export class HeroesComponent {

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

HeroesComponent.parameters = [[HeroService]]
