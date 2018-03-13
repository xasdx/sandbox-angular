import { Component } from "angular2/core"

@Component({
  selector: "my-app",
  template: "<h1>hello {{name}}</h1>"
})
export default class AppComponent {

  name = "angular"

  constructor () {}
}

export { AppComponent }
