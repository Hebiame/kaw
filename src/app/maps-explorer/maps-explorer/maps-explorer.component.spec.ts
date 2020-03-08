import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsExplorerComponent } from './maps-explorer.component';
import { MapsExplorerHeaderComponent } from "../maps-explorer-header/maps-explorer-header.component";
import { FormsModule } from "@angular/forms";
import { NzFormModule, NzGridModule, NzLayoutModule, NzSelectModule } from "ng-zorro-antd";
import { FiltersComponent } from "../filters/filters.component";
import { MapViewComponent } from "../map-view/map-view.component";
import { MapsListComponent } from "../maps-list/maps-list.component";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "../../reducers";
import * as fromMapsExplorer from "../maps-explorer.reducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('MapsExplorerComponent', () => {
  let component: MapsExplorerComponent;
  let fixture: ComponentFixture<MapsExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NzSelectModule,
        NzLayoutModule,
        FormsModule,
        NzFormModule,
        NzGridModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature(fromMapsExplorer.mapsExplorerFeatureKey, fromMapsExplorer.reducer),
      ],
      declarations: [
        MapsExplorerComponent,
        MapsExplorerHeaderComponent,
        FiltersComponent,
        MapViewComponent,
        MapsListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
