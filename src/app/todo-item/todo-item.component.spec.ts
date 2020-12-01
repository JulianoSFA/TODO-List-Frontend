import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TODOItemComponent } from './todo-item.component';

describe('TODOItemComponent', () => {
  let component: TODOItemComponent;
  let fixture: ComponentFixture<TODOItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TODOItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
