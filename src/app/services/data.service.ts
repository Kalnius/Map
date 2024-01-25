import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { map } from 'rxjs/operators';  
import { ICountry, ICountryApi } from '../models/country';  
import { Observable } from 'rxjs';
  
@Injectable({  
  providedIn: 'root',  
})  
export class DataService {  
  constructor(private http: HttpClient) {}  
  
  getCountry(twoLetterCode: string): Observable<ICountry> {  
    return this.http  
      .get<[any, ICountryApi[]]>(  
        `https://api.worldbank.org/v2/country/${twoLetterCode}?format=json`  
      )  
      .pipe(  
        map(([, countries]) => {  
          const countryApi = countries[0];  
          const country: ICountry = {  
            name: countryApi.name,  
            capitalCity: countryApi.capitalCity,  
            incomeLevel: countryApi.incomeLevel.value,  
            region: countryApi.region.value,  
            latitude: countryApi.latitude,  
            longitude: countryApi.longitude,  
          };  
          return country;  
        })  
      );  
  }  
}  
