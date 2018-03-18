import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"
import { getTestBed, TestBed } from "@angular/core/testing"

let useTestBed = (configure) => {
  let testBed = getTestBed()
  if (!testBed.platform) { testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()) }
  if (configure) { configure(testBed) }
  return testBed.compileComponents().then(() => testBed)
}

export { useTestBed }
