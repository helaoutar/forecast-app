import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "src/app/app.component";

import { WeatherRecapComponent } from "./weather-recap.component";

describe("WeatherRecapComponent", () => {
  let component: WeatherRecapComponent;
  let fixture: ComponentFixture<WeatherRecapComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });
});
