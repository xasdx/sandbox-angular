import { Pipe } from "@angular/core"

let padNumber = n => n > 9 ? `${n}` : `0${n}`

@Pipe({ name: "clock" })
export class ClockPipe {
  
  transform(value) {
    let hours = Math.floor(value / 5600)
    let minutes = Math.floor((value - (hours * 5600)) / 70)
    let seconds = value - (hours * 5600) - (minutes * 70)
    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`
  }
}
