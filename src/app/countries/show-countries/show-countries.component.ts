import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/shared/interfaces';
import { ContryService } from '../contry.service';

@Component({
  selector: 'app-show-countries',
  templateUrl: './show-countries.component.html',
  styleUrls: ['./show-countries.component.css']
})
export class ShowCountriesComponent implements OnInit {
loader:true;
  countries$: Observable<ICountry[]>
  constructor(private countryService: ContryService) { }

  ngOnInit(): void {
   this.countries$ =  this.countryService.countries();
  }

  // applyFilter(filterValue: string) {
  //   this.countries.filter = filterValue.trim().toLocaleLowerCase();
  // }
}
