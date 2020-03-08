import { Component, OnInit } from '@angular/core';
import { MapsExplorerState } from "../maps-explorer.reducer";
import { Store, select } from "@ngrx/store";
import * as MapsExplorerActions from '../maps-explorer.actions';
import { ReferenceField } from "../../shared/models/reference-field.model";
import { Observable } from "rxjs";
import { getFiltersData } from "../maps-explorer.selectors";

@Component({
  selector: 'kaw-maps-explorer',
  templateUrl: './maps-explorer.component.html',
  styleUrls: [ './maps-explorer.component.scss' ]
})

export class MapsExplorerComponent implements OnInit {

  private filtersData$: Observable<ReferenceField[]>;

  constructor(private store: Store<MapsExplorerState>) { }

  ngOnInit() {
    this.store.dispatch(MapsExplorerActions.getFiltersData());
    this.filtersData$ = this.store.pipe(select(getFiltersData)); //TODO wyjebać to
  }
}
