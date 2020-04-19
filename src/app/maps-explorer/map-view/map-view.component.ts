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

  public mapImgPath$;

  constructor(
    private store: Store<MapsExplorerState>
  ) { }

  ngOnInit() {
    this.mapImgPath$ = this.store.pipe(select(MapsExplorerSelectors.getMapImgPath));
  }

}
