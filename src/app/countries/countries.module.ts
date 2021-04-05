import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountriesRoutingModule } from "./countries-routing.module";
import { ShowCountriesComponent } from "./show-countries/show-countries.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { CountriesComponent } from "./countries.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ShowCountriesComponent,
    CountryDetailsComponent,
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [HttpClientModule],
})
export class CountriesModule {}
