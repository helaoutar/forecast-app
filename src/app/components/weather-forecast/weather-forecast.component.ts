import { Component, Input } from "@angular/core";
import { Weather } from "src/app/constants";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import { convertToTimeZone } from "date-fns-timezone";
import { getWeatherIcon } from "src/app/libs";

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

  getTime(index, timeZone): string {
    const hoursOffset: number = index + 1;
    const date: Date = this.getZonedDate(hoursOffset, timeZone);
    return format(date, "h aaaaa'm'");
  }

  getDay(index, timeZone): string {
    const hoursOffset: number = index + 1;
    const date: Date = this.getZonedDate(hoursOffset, timeZone);
    return format(date, "dd/M");
  }

  getIcon(icon): string {
    return getWeatherIcon(icon);
  }

  getZonedDate(hoursOffset, timeZone): Date {
    return convertToTimeZone(addHours(new Date(), hoursOffset), { timeZone });
  }
}
