import { Component, setTestabilityGetter } from "@angular/core"

import "rxjs/add/observable/of"

import { HeroService } from "../hero.service"
import * as heroActions from "../actions/hero.actions"

@Component({
  selector: "my-tab",
  template: require("./tab.component.html"),
  styles: ['div button.selected { font-weight: bold; }']
})
export class TabComponent {
  
  tab = 0

  setTab(index) {
    this.tab = index
  }

  isSelected(index) {
    return this.tab === index
  }
}
