export interface City {
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

export interface Weather {
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly?: HourlyEntity[] | null;
}

export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather?: WeatherEntity[] | null;
}

export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyEntity {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather?: WeatherEntity[] | null;
  pop: number;
  rain?: Rain | null;
}

export interface Rain {
  "1h": number;
}

export const NUMBER_OF_CITIES = 5;

export const cities: City[] = [
  {
    city: "Istanbul[a]",
    country: " Turkey",
    latitude: "41.013611",
    longitude: "28.955",
  },
  {
    city: "Moscow[b]",
    country: " Russia",
    latitude: "55.75",
    longitude: "37.616667",
  },
  {
    city: "London",
    country: " United Kingdom",
    latitude: "51.507222",
    longitude: "0.1275",
  },
  {
    city: "Saint Petersburg",
    country: " Russia",
    latitude: "59.95",
    longitude: "30.3",
  },
  {
    city: "Berlin",
    country: " Germany",
    latitude: "52.516667",
    longitude: "13.383333",
  },
  {
    city: "Madrid",
    country: " Spain",
    latitude: "40.383333",
    longitude: "3.716667",
  },
  {
    city: "Kiev",
    country: " Ukraine",
    latitude: "50.45",
    longitude: "30.523333",
  },
  { city: "Rome", country: " Italy", latitude: "41.9", longitude: "12.5" },
  {
    city: "Paris",
    country: " France",
    latitude: "48.8567",
    longitude: "2.3508",
  },
  {
    city: "Bucharest",
    country: " Romania",
    latitude: "44.4325",
    longitude: "26.103889",
  },
  {
    city: "Minsk",
    country: " Belarus",
    latitude: "53.9",
    longitude: "27.566667",
  },
  {
    city: "Vienna",
    country: " Austria",
    latitude: "48.2",
    longitude: "16.366667",
  },
  {
    city: "Hamburg",
    country: " Germany",
    latitude: "53.565278",
    longitude: "10.001389",
  },
  {
    city: "Budapest",
    country: " Hungary",
    latitude: "47.4925",
    longitude: "19.051389",
  },
  {
    city: "Warsaw",
    country: " Poland",
    latitude: "52.233333",
    longitude: "21.016667",
  },
  {
    city: "Barcelona",
    country: " Spain",
    latitude: "41.383333",
    longitude: "2.183333",
  },
  {
    city: "Munich",
    country: " Germany",
    latitude: "48.133333",
    longitude: "11.566667",
  },
  {
    city: "Kharkiv",
    country: " Ukraine",
    latitude: "50.004444",
    longitude: "36.231389",
  },
  {
    city: "Milan",
    country: " Italy",
    latitude: "45.466667",
    longitude: "9.183333",
  },
  {
    city: "Prague",
    country: " Czech Republic",
    latitude: "50.083333",
    longitude: "14.416667",
  },
  {
    city: "Nizhny Novgorod",
    country: " Russia",
    latitude: "56.326944",
    longitude: "44.0075",
  },
  { city: "Sofia", country: " Bulgaria", latitude: "42.7", longitude: "23.33" },
  {
    city: "Kazan",
    country: " Russia",
    latitude: "55.790278",
    longitude: "49.134722",
  },
  {
    city: "Brussels",
    country: " Belgium",
    latitude: "50.85",
    longitude: "4.35",
  },
  {
    city: "Samara",
    country: " Russia",
    latitude: "53.202778",
    longitude: "50.140833",
  },
  {
    city: "Belgrade",
    country: " Serbia",
    latitude: "44.816667",
    longitude: "20.466667",
  },
  {
    city: "Rostov-on-Don",
    country: " Russia",
    latitude: "47.233333",
    longitude: "39.7",
  },
  {
    city: "Birmingham",
    country: " United Kingdom",
    latitude: "52.483056",
    longitude: "1.893611",
  },
  {
    city: "Ufa",
    country: " Russia",
    latitude: "54.75",
    longitude: "55.966667",
  },
  {
    city: "Cologne",
    country: " Germany",
    latitude: "50.936389",
    longitude: "6.952778",
  },
  { city: "Perm", country: " Russia", latitude: "58", longitude: "56.316667" },
  {
    city: "Voronezh",
    country: " Russia",
    latitude: "51.671667",
    longitude: "39.210556",
  },
  {
    city: "Volgograd",
    country: " Russia",
    latitude: "48.7",
    longitude: "44.516667",
  },
  {
    city: "Odessa",
    country: " Ukraine",
    latitude: "46.466667",
    longitude: "30.733333",
  },
  {
    city: "Naples",
    country: " Italy",
    latitude: "40.833333",
    longitude: "14.25",
  },
  {
    city: "Dnipropetrovsk",
    country: " Ukraine",
    latitude: "48.45",
    longitude: "34.983333",
  },
];
