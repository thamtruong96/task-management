import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUserModalComponent } from './assign-user-modal.component';

describe('AssignUserModalComponent', () => {
  let component: AssignUserModalComponent;
  let fixture: ComponentFixture<AssignUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignUserModalComponent]
    });
    fixture = TestBed.createComponent(AssignUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
