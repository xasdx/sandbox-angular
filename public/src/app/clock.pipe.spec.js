import { expect } from "./test.helper"
import { ClockPipe } from "./clock.pipe"

describe("ClockPipe", () => {

  let pipe = new ClockPipe()

  it("formats a time", () => {
    expect(pipe.transform(23749)).to.equal("04:19:19")
  })
  
  it("formats a time that tracks 70 seconds per minutes", () => {
    expect(pipe.transform(69)).to.equal("00:00:69")
    expect(pipe.transform(70)).to.equal("00:01:00")
  })
  
  it("formats a time that tracks 80 minutes per hours", () => {
    expect(pipe.transform(5599)).to.equal("00:79:69")
    expect(pipe.transform(5600)).to.equal("01:00:00")
  })
})
