import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { MapsExplorerState, SelectState } from "../maps-explorer.reducer";
import * as MapsExplorerSelectors from "../maps-explorer.selectors";
import * as MapsExplorerActions from "../maps-explorer.actions";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'kaw-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @ViewChild('filtersForm', {static: false}) form;

  public referenceFieldsSelect$: Observable<SelectState>;
  public mapTypesSelect$: Observable<SelectState>;
  public electionTypesSelect$: Observable<SelectState>;
  public yearsSelect$: Observable<SelectState>;

  public selectedFilters: {
    referenceField: number,
    mapType: number,
    electionType: number,
    year: number
  };

  public selectPlaceHolder: string;
  public disabledSelectPlaceHolder: string;

  constructor(
    private store: Store<MapsExplorerState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

    const params = this.activatedRoute.snapshot.queryParams;

    const props = {
      referenceField: params['referenceField'],
      mapType: params['mapType'],
      electionType: params['electionType'],
      year: params['year']
    };

    this.selectedFilters = {
      referenceField: props.referenceField ? +props.referenceField : null,
      mapType: props.mapType ? +props.mapType : null,
      electionType: props.electionType ? +props.electionType : null,
      year: props.year ? +props.year : null
    };
  }

  referenceFieldChange(value) {
    this.selectedFilters.mapType = null;
    this.selectedFilters.electionType = null;
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.referenceFieldChange({ value: value }));
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          referenceField: value,
          mapType: null,
          electionType: null,
          year: null,
          item: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  mapTypeChange(value) {
    this.selectedFilters.electionType = null;
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.mapTypeChange({ value: value }));
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          mapType: value,
          electionType: null,
          year: null,
          item: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  electionTypeChange(value) {
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.electionTypeChange({ value: value }));
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          electionType: value,
          year: null,
          item: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  yearTypeChange(value) {
    this.store.dispatch(MapsExplorerActions.yearChange({ value: value }));
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          year: value,
          item: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }
}
