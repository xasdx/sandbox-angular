import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { AppComponent } from "./app/app.component"
import { ClockComponent } from "./clock/clock.component"
import { ClockPipe } from "./clock.pipe"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ClockComponent,
    ClockPipe
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
