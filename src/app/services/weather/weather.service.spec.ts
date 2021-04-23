import { TestBed } from "@angular/core/testing";
import { WeatherService } from "./weather.service";
import * as api from "../../api";
import * as libs from "../../libs";
import { City } from "src/app/constants";

const cities: City[] = [
  {
    city: "Rotterdam",
    longitude: "0",
    latitude: "0",
    country: "Netherlands",
  },
  {
    city: "Berlin",
    longitude: "0",
    latitude: "0",
    country: "Germany",
  },
];

describe("WeatherService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeAll(() => {
    const weatherSpy = jasmine
      .createSpy("weather")
      .and.returnValue(Promise.resolve(null));
    spyOnProperty(api, "getCityWeather", "get").and.returnValue(weatherSpy);

    const randomCitiesSpy = jasmine
      .createSpy("randomCities")
      .and.returnValue(cities);
    spyOnProperty(libs, "getRandomCities", "get").and.returnValue(
      randomCitiesSpy
    );
  });

  afterEach(() => {
    (api.getCityWeather as any).calls.reset();
    (libs.getRandomCities as any).calls.reset();
  });

  it("should create the component", () => {
    const service: WeatherService = TestBed.inject(WeatherService);
    expect(service).toBeTruthy();
  });

  describe("getCitiesWeather()", () => {
    it("should call getRandomCities", () => {
      const service: WeatherService = TestBed.inject(WeatherService);
      service.getCitiesWeather();

      expect(libs.getRandomCities).toHaveBeenCalled();
    });

    it("should call getCityWeather as many times as cities", () => {
      const service: WeatherService = TestBed.inject(WeatherService);
      service.getCitiesWeather();

      expect(api.getCityWeather).toHaveBeenCalledTimes(cities.length);
    });
  });
});
