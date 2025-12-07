import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxesPage } from './boxes.page';

describe('BoxesPage', () => {
  let component: BoxesPage;
  let fixture: ComponentFixture<BoxesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
