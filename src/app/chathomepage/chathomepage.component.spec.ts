import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChathomepageComponent } from './chathomepage.component';

describe('ChathomepageComponent', () => {
  let component: ChathomepageComponent;
  let fixture: ComponentFixture<ChathomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChathomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChathomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
