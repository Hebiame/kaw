import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MapsExplorerState } from "../maps-explorer.reducer";
import { MapData } from "../../shared/models/map-data.model";
import { select, Store } from "@ngrx/store";
import * as MapsExplorerSelectors from "../maps-explorer.selectors";
import * as MapsExplorerActions from "../maps-explorer.actions";
import { ActivatedRoute, Router } from "@angular/router";
import { MapParams } from "../../shared/models/map-item.model";

@Component({
  selector: 'kaw-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: [ './maps-list.component.scss' ]
})
export class MapsListComponent implements OnInit {

  public mapData$: Observable<MapData[]>;
  public selectedMapMd$: Observable<string>;
  public selectedMapLg$: Observable<string>;

  constructor(
    private store: Store<MapsExplorerState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mapData$ = this.store.pipe(select(MapsExplorerSelectors.getMapData));
    this.selectedMapMd$ = this.store.pipe(select(MapsExplorerSelectors.getSelectedMapNameMd));
    this.selectedMapLg$ = this.store.pipe(select(MapsExplorerSelectors.getSelectedMapNameLg));
  }

  itemListChange(fileNameMd: string, fileNameLg: string): void {
    this.store.dispatch(MapsExplorerActions.itemListChange({ medium: fileNameMd, large: fileNameLg }));

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          imgMd: fileNameMd,
          imgLg: fileNameLg
        },
        queryParamsHandling: 'merge'
      }
    );
  }

  jumpToOtherMap(mapParams: MapParams): void {
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
