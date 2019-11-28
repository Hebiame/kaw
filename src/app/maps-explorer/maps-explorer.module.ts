import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsExplorerRoutingModule } from './maps-explorer-routing.module';
import { MapsExplorerComponent } from './maps-explorer/maps-explorer.component';
import { MapsExplorerHeaderComponent } from './maps-explorer-header/maps-explorer-header.component';
import { FiltersComponent } from './filters/filters.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapsListComponent } from './maps-list/maps-list.component';


@NgModule({
  declarations: [MapsExplorerComponent, MapsExplorerHeaderComponent, FiltersComponent, MapViewComponent, MapsListComponent],
  imports: [
    CommonModule,
    MapsExplorerRoutingModule
  ]
})
export class MapsExplorerModule { }
