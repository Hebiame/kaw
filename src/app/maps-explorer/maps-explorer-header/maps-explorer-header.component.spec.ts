import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsExplorerHeaderComponent } from './maps-explorer-header.component';

describe('MapsExplorerHeaderComponent', () => {
  let component: MapsExplorerHeaderComponent;
  let fixture: ComponentFixture<MapsExplorerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsExplorerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsExplorerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
