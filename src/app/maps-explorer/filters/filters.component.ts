import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsExplorerService } from "../maps-explorer.service";
import { Observable } from "rxjs";
import { ReferenceField } from "../../shared/models/reference-field.model";
import { select, Store } from "@ngrx/store";
import { MapsExplorerState, SelectState } from "../maps-explorer.reducer";
import * as MapsExplorerSelectors from "../maps-explorer.selectors";
import * as MapsExplorerActions from "../maps-explorer.actions";

@Component({
  selector: 'kaw-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @ViewChild('filtersForm', {static: false}) form;

  private referenceFieldsSelect$: Observable<SelectState>;
  private mapTypesSelect$: Observable<SelectState>;
  private electionTypesSelect$: Observable<SelectState>;
  private yearsSelect$: Observable<SelectState>;

  private selectedFilters: {
    referenceField: string,
    mapType: string,
    electionType: string,
    year: string
  };

  private selectPlaceHolder: string;
  private disabledSelectPlaceHolder: string;

  constructor(
    private store: Store<MapsExplorerState>
  ) {
    this.selectedFilters = {
      referenceField: null,
      mapType: null,
      electionType: null,
      year: null
    };

    this.selectPlaceHolder = 'Wybierz';
    this.disabledSelectPlaceHolder = 'Niedostępne';
  }

  ngOnInit() {
    this.referenceFieldsSelect$ = this.store.pipe(select(MapsExplorerSelectors.getReferenceFieldSelect));
    this.mapTypesSelect$ = this.store.pipe(select(MapsExplorerSelectors.getMapTypesSelect));
    this.electionTypesSelect$ = this.store.pipe(select(MapsExplorerSelectors.getElectionTypesSelect));
    this.yearsSelect$ = this.store.pipe(select(MapsExplorerSelectors.getYearsSelect));
  }

  referenceFieldChange(value) {
    this.selectedFilters.mapType = null;
    this.selectedFilters.electionType = null;
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.referenceFieldChange({ value: value }));
  }

  mapTypeChange(value) {
    this.selectedFilters.electionType = null;
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.mapTypeChange({ value: value }));
  }

  electionTypeChange(value) {
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.electionTypeChange({ value: value }));
  }

  yearTypeChange(value) {
    this.store.dispatch(MapsExplorerActions.yearChange({ value: value }));
  }
}
