import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingpageComponent } from './votingpage.component';

describe('VotingpageComponent', () => {
  let component: VotingpageComponent;
  let fixture: ComponentFixture<VotingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingpageComponent]
    });
    fixture = TestBed.createComponent(VotingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
