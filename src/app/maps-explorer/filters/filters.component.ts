import { Component, OnInit } from '@angular/core';
import { MapsExplorerService } from "../maps-explorer.service";
import { Observable } from "rxjs";
import { ReferenceField } from "../../shared/models/reference-field.model";

@Component({
  selector: 'kaw-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  private filtersData$: Observable<ReferenceField[]>;

  constructor(private mapsExplorerService: MapsExplorerService) { }

  ngOnInit() {
    this.filtersData$ = this.mapsExplorerService.filtersData$;
  }

}
