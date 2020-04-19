import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MapsExplorerState } from "../maps-explorer.reducer";
import { MapData } from "../../shared/models/map-data.model";
import { select, Store } from "@ngrx/store";
import * as MapsExplorerSelectors from "../maps-explorer.selectors";
import * as MapsExplorerActions from "../maps-explorer.actions";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'kaw-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss']
})
export class MapsListComponent implements OnInit {

  public mapData$: Observable<MapData[]>;

  constructor(
    private store: Store<MapsExplorerState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mapData$ = this.store.pipe(select(MapsExplorerSelectors.getMapData));
  }

  itemListChange(fileName: string) {
    this.store.dispatch(MapsExplorerActions.itemListChange({ value: fileName}));

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          item: fileName
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  jumpToOtherMap(event, mapParams) {
    event.preventDefault();
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: mapParams,
        queryParamsHandling: 'merge'
      }
    ).then(() => {
      this.store.dispatch(MapsExplorerActions.jumpToOtherMap());
    }
  );
  }
}
