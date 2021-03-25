import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ContainerComponent } from './container/container.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { RouterModule } from '@angular/router';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContainerComponent, CountryCardComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    RouterModule.forChild([])
  ],
  exports: [ContainerComponent, CountryCardComponent, FilterTextboxComponent],

})
export class SharedModule { }
