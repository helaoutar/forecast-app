import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { WeatherService } from "./services/weather/weather.service";
import { WeatherRecapComponent } from "./components/weather-recap/weather-recap.component";
import { WeatherForcastComponent } from "./components/weather-forecast/weather-forecast.component";
import { CelciusPipe } from "./pipe/celcius/celcius.pipe";
import { WindSpeedPipe } from "./pipe/wind/wind-speed.pipe";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    AppComponent,
    WeatherRecapComponent,
    WeatherForcastComponent,
    CelciusPipe,
    WindSpeedPipe,
  ],
  imports: [
    NgxSkeletonLoaderModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
