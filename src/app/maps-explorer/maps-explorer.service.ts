import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ReferenceField } from "../shared/models/reference-field.model";
import { MapData } from "../shared/models/map-data.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MapsExplorerService {

  public filtersData$: Observable<ReferenceField[]> = this.http.get<ReferenceField[]>('assets/filters.json', { observe: 'response' })
    .pipe(
      map(response =>
        response.body.map(referenceField => new ReferenceField().deserialize(referenceField))
      )
    );

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getMapData(path: string): Observable<MapData[]> {
    return this.http.get<MapData[]>(path, { observe: 'response' })
      .pipe(map(response =>
        response.body.map(mapData => new MapData().deserialize(mapData))
      ));
  }
}
