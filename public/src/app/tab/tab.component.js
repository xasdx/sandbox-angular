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
  
  selectedTabIndex = -1

  tabs = [
    { title: "1", content: "First tab" },
    { title: "2", content: "Second tab" },
    { title: "3", content: "Third tab" }
  ]

  setTab(index) {
    this.selectedTabIndex = index
  }

  isSelected(index) {
    return this.selectedTabIndex === index
  }
}
