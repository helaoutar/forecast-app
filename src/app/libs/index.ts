import { cities, City } from "../constants/index";

/**
 * @param numberOfcities Number of cities to generate
 * @returns Generated cities
 */
export const getRandomCities = (numberOfcities: number): City[] => {
  const randomCities: City[] = [];
  const map: { [index: number]: boolean } = {};
  const numberOfCitiesToGenerate = Math.min(numberOfcities, cities.length);

  for (let i = 0; i < numberOfCitiesToGenerate; i++) {
    let done = false;
    while (!done) {
      const j = Math.floor(Math.random() * cities.length);
      if (!map[j]) {
        map[j] = true;
        randomCities.push(cities[j]);
        done = true;
      }
    }
  }

  return randomCities;
};

export const getWeatherIcon = (icon): string => {
  return icon ? `http://openweathermap.org/img/wn/${icon}@4x.png` : "";
};
