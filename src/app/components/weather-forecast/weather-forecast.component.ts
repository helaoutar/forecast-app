import { getDay } from "./../../libs/index";
import { Component, Input } from "@angular/core";
import { Weather } from "src/app/constants";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import { convertToTimeZone } from "date-fns-timezone";
import { getTime, getWeatherIcon } from "src/app/libs";

@Component({
  selector: "app-weather-forcast",
  templateUrl: "./weather-forecast.component.html",
  styleUrls: ["./weather-forecast.component.scss"],
})
export class WeatherForcastComponent {
  weather: Weather;

  @Input() set cityWeather(value) {
    this.weather = { ...value };
  }

  getIcon(icon): string {
    return getWeatherIcon(icon);
  }

  getTime(index, timeZone): string {
    const hoursOffset: number = index + 1;
    return getTime(hoursOffset, timeZone);
  }

  getDay(index, timeZone): string {
    const hoursOffset: number = index + 1;
    return getDay(hoursOffset, timeZone);
  }
}
