import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardComponent2 } from './retard.component';

describe('RetardComponent', () => {
  let component: RetardComponent2;
  let fixture: ComponentFixture<RetardComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetardComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
