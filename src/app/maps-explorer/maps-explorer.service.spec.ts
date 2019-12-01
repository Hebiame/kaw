import { TestBed } from '@angular/core/testing';

import { MapsExplorerService } from './maps-explorer.service';

describe('MapsExplorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsExplorerService = TestBed.get(MapsExplorerService);
    expect(service).toBeTruthy();
  });
});
