import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdFilsComponent } from './cd-fils.component';

describe('CdFilsComponent', () => {
  let component: CdFilsComponent;
  let fixture: ComponentFixture<CdFilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdFilsComponent]
    });
    fixture = TestBed.createComponent(CdFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
