import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepPageComponent } from './sheep-page.component';

describe('SheepPageComponent', () => {
  let component: SheepPageComponent;
  let fixture: ComponentFixture<SheepPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheepPageComponent]
    });
    fixture = TestBed.createComponent(SheepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
