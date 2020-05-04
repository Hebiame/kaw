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
  styleUrls: [ './filters.component.scss' ]
})
export class FiltersComponent implements OnInit {

  @ViewChild('filtersForm') form;

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

  ngOnInit(): void {
    this.referenceFieldsSelect$ = this.store.pipe(select(MapsExplorerSelectors.getReferenceFieldSelect));
    this.mapTypesSelect$ = this.store.pipe(select(MapsExplorerSelectors.getMapTypesSelect));
    this.electionTypesSelect$ = this.store.pipe(select(MapsExplorerSelectors.getElectionTypesSelect));
    this.yearsSelect$ = this.store.pipe(select(MapsExplorerSelectors.getYearsSelect));

    const params = this.activatedRoute.snapshot.queryParams;

    const props = {
      referenceField: '0',
      mapType: params['mapType'],
      electionType: params['electionType'],
      year: params['year']
    };

    if (!params['mapType'] && !params['electionType'] && !params['year']) {
      this.referenceFieldChange(0);
    }

    this.selectedFilters = {
      referenceField: props.referenceField ? +props.referenceField : null,
      mapType: props.mapType ? +props.mapType : null,
      electionType: props.electionType ? +props.electionType : null,
      year: props.year ? +props.year : null
    };
  }

  referenceFieldChange(value: number): void {
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

  mapTypeChange(value: number): void {
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
          imgMd: null,
          imgLg: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  electionTypeChange(value: number): void {
    this.selectedFilters.year = null;
    this.store.dispatch(MapsExplorerActions.electionTypeChange({ value: value }));
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          electionType: value,
          year: null,
          imgMd: null,
          imgLg: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  yearTypeChange(value: number): void {
    this.store.dispatch(MapsExplorerActions.yearChange({ value: value }));
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          year: value,
          imgMd: null,
          imgLg: null
        },
        queryParamsHandling: 'merge'
      }
    );
  }
}
