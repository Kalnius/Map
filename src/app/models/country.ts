export interface ICountry {
  name: string;
  capitalCity: string;
  incomeLevel: string;
  region: string;
  latitude: string;
  longitude: string;
}

export interface ICountryApi {
  name: string;
  capitalCity: string;
  incomeLevel: { id: string; iso2code: string; value: string };
  region: { id: string; iso2code: string; value: string };
  latitude: string;
  longitude: string;
}
