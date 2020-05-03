import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { MapsExplorerState } from "../maps-explorer.reducer";
import * as MapsExplorerSelectors from "../maps-explorer.selectors";

@Component({
  selector: 'kaw-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  public mapImgPathMd$;
  public mapImgPathLg$;
  public isFullscreen: boolean = false;

  constructor(
    private store: Store<MapsExplorerState>
  ) { }

  ngOnInit() {
    this.mapImgPathMd$ = this.store.pipe(select(MapsExplorerSelectors.getMapImgMdPath));
    this.mapImgPathLg$ = this.store.pipe(select(MapsExplorerSelectors.getMapImgLgPath));
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
