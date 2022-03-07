import { Component } from '@angular/core';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrls: ['radio-ng-model-example.css'],
})
export class RadioNgModelExample {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  selectMonth: number;

  listMonths: Month[] = [
    { id: 0, description: 'January' },
    { id: 1, description: 'February' },
    { id: 2, description: 'March' },
    { id: 3, description: 'April' },
    { id: 4, description: 'May' },
    { id: 5, description: 'June' },
    { id: 6, description: 'July' },
    { id: 7, description: 'August' },
    { id: 8, description: 'September' },
    { id: 9, description: 'October' },
    { id: 10, description: 'November' },
    { id: 11, description: 'December' },
  ];
}

export interface Month {
  id: number;
  description: string;
}
