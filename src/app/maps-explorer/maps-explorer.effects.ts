import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { MapsExplorerService } from './maps-explorer.service';
import * as MapsExplorerActions from './maps-explorer.actions';

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

  constructor(
    private actions$: Actions,
    private mapsExplorerService: MapsExplorerService
  ) {}
}
