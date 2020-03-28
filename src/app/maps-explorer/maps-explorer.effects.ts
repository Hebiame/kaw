import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { MapsExplorerService } from './maps-explorer.service';
import * as MapsExplorerActions from './maps-explorer.actions';
import * as MapsExplorerSelectors from './maps-explorer.selectors';
import { KawState } from "../reducers";
import { select, Store } from "@ngrx/store";

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
      )
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
    private store$: Store<KawState>
  ) {}
}
