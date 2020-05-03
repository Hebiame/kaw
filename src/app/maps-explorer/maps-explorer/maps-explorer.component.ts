import { Component, OnInit } from '@angular/core';
import { MapsExplorerState } from "../maps-explorer.reducer";
import { Store } from "@ngrx/store";
import * as MapsExplorerActions from '../maps-explorer.actions';

@Component({
  selector: 'kaw-maps-explorer',
  templateUrl: './maps-explorer.component.html',
  styleUrls: [ './maps-explorer.component.scss' ]
})

export class MapsExplorerComponent implements OnInit {

  constructor(private store: Store<MapsExplorerState>) { }

  ngOnInit() {
    this.store.dispatch(MapsExplorerActions.getFiltersData());
  }
}
