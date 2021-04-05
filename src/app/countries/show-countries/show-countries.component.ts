import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ICountry } from "src/app/shared/interfaces";
import { ContryService } from "../contry.service";
import { filter, finalize, map, tap } from "rxjs/operators";
@Component({
  selector: "app-show-countries",
  templateUrl: "./show-countries.component.html",
  styleUrls: ["./show-countries.component.css"],
})
export class ShowCountriesComponent implements OnInit {
  loader: true;
  countries$: Observable<ICountry[]>;
  searchText: string;
  key = "name";

  constructor(
    private countryService: ContryService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.countries();

    this.translate.get("Home.welcome", { name: "israa" }).subscribe((text) => {
      console.log(text, "text");
    });
  }

  // applyFilter(filterValue: string) {
  //   this.countries.filter = filterValue.trim().toLocaleLowerCase();
  // }

  filterCountries(event: string) {
    console.log(event, "event");
    this.searchText = event;
    // this.countries$ = this.countries$.pipe(
    //   map((arr: any) => {
    //     return arr.filter((item) =>
    //       item.name.toLowerCase().includes(event.toLowerCase())
    //     );
    //   })
    // );
  }
}
