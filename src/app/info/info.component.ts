import { Component, Input } from '@angular/core';
import { ICountry } from '../models/country';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  private _country: ICountry | null = null;
  public get country(): ICountry | null {
    return this._country;
  }
  @Input()
  public set country(value: ICountry | null) {
    this._country = value;
  }

  constructor() {}

  ngOnInit() {}
}
