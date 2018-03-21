import { Component, Input } from "@angular/core"

let parseTime = time => {
  let timeTokens = time.split(":")
  return parseInt(timeTokens[0]) * 5600 + parseInt(timeTokens[1]) * 70 + parseInt(timeTokens[2])
}

@Component({
  selector: "clock",
  template: require("./clock.component.html")
})
export class ClockComponent {

  @Input()
  initialTime = null
  
  seconds = 0
  step = 1

  ngOnInit() {
    if (this.initialTime) {
      this.seconds = parseTime(this.initialTime)
    }
    this.timer = setInterval(() => {
      this.seconds += this.step
    }, 1000)
  }
}
