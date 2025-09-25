import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListElementsComponent } from './user-list-elements.component';

describe('UserListElementsComponent', () => {
  let component: UserListElementsComponent;
  let fixture: ComponentFixture<UserListElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListElementsComponent]
    });
    fixture = TestBed.createComponent(UserListElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
