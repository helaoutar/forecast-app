import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "windSpeed",
})
export class WindSpeedPipe implements PipeTransform {
  transform(value: string): any {
    return `${value} km/h`;
  }
}
