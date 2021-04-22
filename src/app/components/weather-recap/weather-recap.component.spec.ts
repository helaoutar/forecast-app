import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "src/app/app.component";

import { WeatherRecapComponent } from "./weather-recap.component";

describe("WeatherRecapComponent", () => {
  let component: WeatherRecapComponent;
  let fixture: ComponentFixture<WeatherRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
