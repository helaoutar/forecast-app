import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "celcius",
})
export class CelciusPipe implements PipeTransform {
  transform(value: number): string {
    return `${Math.ceil(value)} °C`;
  }
}
