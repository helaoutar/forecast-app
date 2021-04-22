import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Weather } from "src/app/constants";
import { getWeatherIcon } from "src/app/libs";

@Component({
  selector: "app-weather-recap",
  templateUrl: "./weather-recap.component.html",
  styleUrls: ["./weather-recap.component.scss"],
})
export class WeatherRecapComponent {
  weather: Weather;
  @Output() clicked = new EventEmitter();

  @Input() set cityWeather(value) {
    this.weather = { ...value };
  }

  getIcon(): string {
    return getWeatherIcon(this.weather?.current?.weather[0]?.icon);
  }
}
