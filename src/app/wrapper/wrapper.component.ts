import { ChangeDetectorRef, Component } from '@angular/core';
import { ICountry } from '../models/country';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {
  selectedCountry$: ReplaySubject<ICountry> = new ReplaySubject();

  constructor(private readonly _ref: ChangeDetectorRef) {}

  onCountryClicked(country: ICountry): void {
    console.log('AppComponent received country:', country);
    this.selectedCountry$.next(country);
    this._ref.detectChanges();
  }
}
