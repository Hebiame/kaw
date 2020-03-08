import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { CommonModule } from "@angular/common";
import { MapsExplorerRoutingModule } from "../maps-explorer-routing.module";
import { StoreModule } from "@ngrx/store";
import * as fromMapsExplorer from "../maps-explorer.reducer";
import { EffectsModule } from "@ngrx/effects";
import { MapsExplorerEffects } from "../maps-explorer.effects";
import { NzFormModule, NzGridModule, NzLayoutModule, NzSelectModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { metaReducers, reducers } from "../../reducers";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

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
      declarations: [ FiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
