import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCustorderlistComponent } from './company-custorderlist.component';

describe('CompanyCustorderlistComponent', () => {
  let component: CompanyCustorderlistComponent;
  let fixture: ComponentFixture<CompanyCustorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCustorderlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCustorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
