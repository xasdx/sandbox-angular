import { Component, Input } from "@angular/core"

@Component({
  selector: "hero-detail",
  templateUrl: "public/src/app/hero-detail.component.html"
})
export class HeroDetailComponent {
  
  @Input()
  hero = null
}
