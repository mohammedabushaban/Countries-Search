import { ICountry } from 'src/app/shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input() country: ICountry;

  constructor() { }

  ngOnInit(): void {
  }

}
