import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { ICountry } from '../models/country';
import { OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Output()
  public readonly countryClicked: EventEmitter<ICountry> =
    new EventEmitter<ICountry>();

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const map = document.getElementById('map') as HTMLObjectElement;
      map.addEventListener('load', () => {
        const svgDocument = map.contentDocument;
        const paths = svgDocument?.querySelectorAll('path');
        const resetSelection = () => {
          paths?.forEach((path) => {
            path.style.fill = '';
          });
        };

        // Create an object to store the isSelected state for each path
        const isSelected: Record<string, boolean> = {};

        paths?.forEach((path) => {
          // Initialize isSelected state for the current path as false
          isSelected[path.id] = false;

          path.addEventListener('mouseenter', () => {
            if (!isSelected[path.id]) path.style.fill = 'orange';
          });

          path.addEventListener('mouseleave', () => {
            if (!isSelected[path.id]) path.style.fill = '';
          });

          path.addEventListener('click', (event) => {
            resetSelection();

            // Reset the isSelected state for all paths to false
            Object.keys(isSelected).forEach((key) => {
              isSelected[key] = false;
            });

            isSelected[path.id] = !isSelected[path.id];
            const clickedPath = event.target as SVGPathElement;
            clickedPath.style.fill = 'red';

            this._dataService
              .getCountry(clickedPath.id)
              .subscribe((country: ICountry) => {
                this.countryClicked.emit(country);
              });
          });
        });
      });
    });
  }
}
