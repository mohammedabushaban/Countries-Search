import { FilterPipe } from "./pipes/filter.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { ContainerComponent } from "./container/container.component";
import { CountryCardComponent } from "./country-card/country-card.component";
import { RouterModule } from "@angular/router";
import { FilterTextboxComponent } from "./filter-textbox/filter-textbox.component";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "./loader/loader.component";
import { WithLoaderPipe } from "./pipes/with-loader.pipe";

@NgModule({
  declarations: [
    ContainerComponent,
    CountryCardComponent,
    FilterTextboxComponent,
    FilterPipe,
    LoaderComponent,
    WithLoaderPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    RouterModule.forChild([]),
  ],
  exports: [
    ContainerComponent,
    FilterPipe,
    CountryCardComponent,
    FilterTextboxComponent,
    LoaderComponent,
    WithLoaderPipe,
  ],
})
export class SharedModule {}
