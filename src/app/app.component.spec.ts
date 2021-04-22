import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { WeatherService } from "./services/weather/weather.service";

const weatherServiceStub = {
  getCitiesWeather: () => Promise.resolve([]),
};

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let weatherService: WeatherService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [{ provide: WeatherService, useValue: weatherServiceStub }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    weatherService = de.injector.get(WeatherService);
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it("should call weatherService.getCitiesWeather when the component is rendered", () => {
    spyOn(weatherService, "getCitiesWeather").and.callThrough();
    component.ngOnInit();
    expect(weatherService.getCitiesWeather).toHaveBeenCalledTimes(1);
  });
});
