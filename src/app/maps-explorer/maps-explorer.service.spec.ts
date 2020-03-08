import { TestBed } from '@angular/core/testing';

import { MapsExplorerService } from './maps-explorer.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MapsExplorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: MapsExplorerService = TestBed.get(MapsExplorerService);
    expect(service).toBeTruthy();
  });
});
