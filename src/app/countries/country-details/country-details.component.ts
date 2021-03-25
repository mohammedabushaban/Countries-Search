import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ContryService } from '../contry.service';
import { ICountry } from 'src/app/shared/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: ICountry
  country_name: string;

  constructor(private countryService: ContryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.country_name = params.get('name');
    });
    this.countryService.fetchcounrty(this.country_name).subscribe((res: ICountry) => {
      this.country = res
    }
    )
  }


}
