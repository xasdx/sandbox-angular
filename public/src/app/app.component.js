import { Component } from "@angular/core"

let heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <hero-detail [hero]="selectedHero"></hero-detail>
    <p>{{time}}</p>
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
  hero = { name: "arthas" }

  selectedHero = null
  heroes = heroes

  constructor () {
    this.time = new Date().toISOString()
  }

  onSelect(hero) {
    this.selectedHero = hero
  }
}
