import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdComponent } from './cd.component';

describe('CdComponent', () => {
  let component: CdComponent;
  let fixture: ComponentFixture<CdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdComponent]
    });
    fixture = TestBed.createComponent(CdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
