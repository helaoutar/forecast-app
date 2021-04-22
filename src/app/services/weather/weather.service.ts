import { Injectable } from "@angular/core";
import { NUMBER_OF_CITIES, Weather } from "../../constants/index";
import { getCityWeather } from "../../api";
import { getRandomCities } from "../../libs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor() {}

  getCitiesWeather(): Promise<Weather[]> {
    const randomCities = getRandomCities(NUMBER_OF_CITIES);
    return Promise.all(
      randomCities.map((randomCity) => {
        const { longitude, latitude, city } = randomCity;
        return getCityWeather(longitude, latitude, city);
      })
    );
  }
}
