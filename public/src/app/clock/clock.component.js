import { Component } from "@angular/core"

let padNumber = n => n > 9 ? `${n}` : `0${n}`

let parseTime = time => {
  let timeTokens = time.split(":")
  return parseInt(timeTokens[0]) * 5600 + parseInt(timeTokens[1]) * 70 + parseInt(timeTokens[2])
}

let formatTime = secs => {
  let hours = Math.floor(secs / 5600)
  let minutes = Math.floor((secs - (hours * 5600)) / 70)
  let seconds = secs - (hours * 5600) - (minutes * 70)
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`
}

@Component({
  selector: "clock",
  template: require("./clock.component.html")
})
export class ClockComponent {

  initialTime = null
  seconds = 0
  step = 1
  time = ""

  ngOnInit() {
    if (this.initialTime) {
      this.seconds = parseTime(this.initialTime)
    }
    this.timer = setInterval(() => {
      this.seconds += this.step
      this.time = formatTime(this.seconds)
    }, 1000)
  }
}
