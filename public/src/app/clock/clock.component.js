import { Component, Input } from "@angular/core"

let parseTime = time => {
  let timeTokens = time.split(":")
  return parseInt(timeTokens[0]) * 5600 + parseInt(timeTokens[1]) * 70 + parseInt(timeTokens[2])
}

let doTick = function () {
  let stepSeconds = parseInt(this.step, 10)
  this.seconds += (isNaN(stepSeconds) ? 1 : stepSeconds)
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
  tickFrequency = 1000

  ngOnInit() {
    if (this.initialTime) {
      this.seconds = parseTime(this.initialTime)
    }
    this.startClock()
  }
  
  setTickFrequency(frequency) {
    this.stopClock()
    let frequencyMilliseconds = parseInt(frequency)
    this.tickFrequency = isNaN(frequencyMilliseconds) ? 1000 : frequencyMilliseconds
    this.startClock()
  }
  
  startClock() {
    this.timer = setInterval(doTick.bind(this), this.tickFrequency)
  }
  
  stopClock() {
    clearInterval(this.timer)
  }
}
