import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ReferenceField } from "../shared/models/reference-field.model";

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

  constructor(private http: HttpClient) { }
}
