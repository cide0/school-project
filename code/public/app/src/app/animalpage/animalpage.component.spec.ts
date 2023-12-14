import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalpageComponent } from './animalpage.component';

describe('AnimalpageComponent', () => {
  let component: AnimalpageComponent;
  let fixture: ComponentFixture<AnimalpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalpageComponent]
    });
    fixture = TestBed.createComponent(AnimalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
