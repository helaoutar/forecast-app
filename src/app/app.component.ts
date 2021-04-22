import { Component, OnInit } from "@angular/core";
import { Weather } from "./constants";
import { WeatherService } from "./services/weather/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  selectedCityWeather: Weather = null;
  citiesWeather: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCitiesWeather().then((citiesWeather) => {
      this.citiesWeather = citiesWeather;
      this.selectedCityWeather = this.citiesWeather[0];
    });
  }

  handleClick(event): void {
    this.selectedCityWeather = this.citiesWeather.find(
      ({ city }) => event === city
    );
  }
}
