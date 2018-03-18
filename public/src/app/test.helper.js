import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"
import { getTestBed } from "@angular/core/testing"

let data = {
  heroes: [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" }
  ]
}

let useTestBed = (configure) => {
  let testBed = getTestBed()
  if (!testBed.platform) { testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()) }
  if (configure) { configure(testBed) }
  return testBed.compileComponents().then(() => testBed)
}

export { useTestBed, data }
