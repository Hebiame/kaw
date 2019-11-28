import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsExplorerComponent } from './maps-explorer.component';

describe('MapsExplorerComponent', () => {
  let component: MapsExplorerComponent;
  let fixture: ComponentFixture<MapsExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
