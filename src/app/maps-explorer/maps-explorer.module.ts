import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsExplorerRoutingModule } from './maps-explorer-routing.module';
import { MapsExplorerComponent } from './maps-explorer/maps-explorer.component';
import { MapsExplorerHeaderComponent } from './maps-explorer-header/maps-explorer-header.component';
import { FiltersComponent } from './filters/filters.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapsListComponent } from './maps-list/maps-list.component';
import { StoreModule } from "@ngrx/store";
import * as fromMapsExplorer from './maps-explorer.reducer';
import { NzFormModule, NzGridModule, NzLayoutModule, NzSelectModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { MapsExplorerEffects } from "./maps-explorer.effects";


@NgModule({
  declarations: [
    MapsExplorerComponent,
    MapsExplorerHeaderComponent,
    FiltersComponent,
    MapViewComponent,
    MapsListComponent
  ],
  imports: [
    CommonModule,
    MapsExplorerRoutingModule,
    StoreModule.forFeature(fromMapsExplorer.mapsExplorerFeatureKey, fromMapsExplorer.reducer),
    EffectsModule.forFeature([MapsExplorerEffects]),
    NzSelectModule,
    NzLayoutModule,
    FormsModule,
    NzFormModule,
    NzGridModule
  ]
})

export class MapsExplorerModule { }
