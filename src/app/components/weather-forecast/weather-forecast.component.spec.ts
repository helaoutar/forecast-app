import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeatherForcastComponent } from "./weather-forecast.component";

describe("WeatherForecastComponent", () => {
  let component: WeatherForcastComponent;
  let fixture: ComponentFixture<WeatherForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForcastComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
