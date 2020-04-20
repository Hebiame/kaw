import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { MapsExplorerService } from './maps-explorer.service';
import * as MapsExplorerActions from './maps-explorer.actions';
import * as MapsExplorerSelectors from './maps-explorer.selectors';
import { KawState } from "../reducers";
import { select, Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class MapsExplorerEffects {
  loadFiltersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MapsExplorerActions.getFiltersData),
      mergeMap(() =>
        this.mapsExplorerService.filtersData$.pipe(
          switchMap(filtersData => [
            MapsExplorerActions.getFiltersDataSuccess({ filtersData }),
            MapsExplorerActions.setReferenceFieldSelectOptions({ options: filtersData.map(it => it.name ) })
          ]),
          catchError(error => of(MapsExplorerActions.getFiltersDataFailure({ error })))
        )
      ),
    )
  );

  setFiltersDataFromUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        MapsExplorerActions.getFiltersDataSuccess,
        MapsExplorerActions.jumpToOtherMap
      ),
      map(() => {
        let params;

        this.activatedRoute.queryParams.pipe(take(1)).subscribe(value => {
          params = value;
        });
        return params;
      }),
      flatMap((params) => {
        const props = {
          referenceField: params['referenceField'],
          mapType: params['mapType'],
          electionType: params['electionType'],
          year: params['year'],
          imgMd: params['imgMd'],
          imgLg: params['imgLg']
        };

        const actions = [];

        if (props.referenceField) {
          actions.push(MapsExplorerActions.referenceFieldChange({ value: props.referenceField }));
        }

        if (props.mapType) {
          actions.push(MapsExplorerActions.mapTypeChange({ value: props.mapType }));
        }

        if (props.electionType) {
          actions.push(MapsExplorerActions.electionTypeChange({ value: props.electionType }));
        }

        if (props.year) {
          actions.push(MapsExplorerActions.yearChange({ value: props.year }));
        }

        if (props.imgMd && props.imgLg) {
          actions.push(MapsExplorerActions.itemListChange({ medium: props.imgMd, large:props.imgLg }));
        }

        return actions;
      })
    )
  );

  loadMapData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        MapsExplorerActions.referenceFieldChange,
        MapsExplorerActions.mapTypeChange,
        MapsExplorerActions.electionTypeChange,
        MapsExplorerActions.yearChange
      ),
      mergeMap(() =>
        this.store$.pipe(select(MapsExplorerSelectors.getMapListPath),
          switchMap( path => {
            console.log(path);
            if (path === null) {
              return throwError('Nie wybrano mapy');
            }
            return this.mapsExplorerService.getMapData(path);
          }),
          switchMap(mapData => [
            MapsExplorerActions.setMapData({ data: mapData })
          ]),
          catchError(error => of(MapsExplorerActions.getMapDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mapsExplorerService: MapsExplorerService,
    private store$: Store<KawState>,
    private activatedRoute: ActivatedRoute
  ) {}
}
