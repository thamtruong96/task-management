import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementPageComponent } from './task-management-page.component';

describe('TaskManagementIndexComponent', () => {
  let component: TaskManagementPageComponent;
  let fixture: ComponentFixture<TaskManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
