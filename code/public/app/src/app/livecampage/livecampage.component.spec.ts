import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecampageComponent } from './livecampage.component';

describe('LivecampageComponent', () => {
  let component: LivecampageComponent;
  let fixture: ComponentFixture<LivecampageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivecampageComponent]
    });
    fixture = TestBed.createComponent(LivecampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
