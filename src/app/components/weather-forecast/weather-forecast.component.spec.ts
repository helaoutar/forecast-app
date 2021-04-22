import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { WeatherForcastComponent } from "./weather-forecast.component";

describe("WeatherForecastComponent", () => {
  let component: WeatherForcastComponent;
  let fixture: ComponentFixture<WeatherForcastComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WeatherForcastComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
