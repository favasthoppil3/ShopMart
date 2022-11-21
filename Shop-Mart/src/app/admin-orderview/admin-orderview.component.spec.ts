import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderviewComponent } from './admin-orderview.component';

describe('AdminOrderviewComponent', () => {
  let component: AdminOrderviewComponent;
  let fixture: ComponentFixture<AdminOrderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
