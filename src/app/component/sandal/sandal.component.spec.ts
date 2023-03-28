import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandalComponent } from './sandal.component';

describe('SandalComponent', () => {
  let component: SandalComponent;
  let fixture: ComponentFixture<SandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
