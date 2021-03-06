import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullrequestComponent } from './pullrequest.component';

describe('PullrequestComponent', () => {
  let component: PullrequestComponent;
  let fixture: ComponentFixture<PullrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
