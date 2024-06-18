import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbsComponent } from './add-abs.component';

describe('AddAbsComponent', () => {
  let component: AddAbsComponent;
  let fixture: ComponentFixture<AddAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
