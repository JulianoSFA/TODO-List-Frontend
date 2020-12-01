import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTODOComponent } from './create-todo.component';

describe('CreateTODOComponent', () => {
  let component: CreateTODOComponent;
  let fixture: ComponentFixture<CreateTODOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTODOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
