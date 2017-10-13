import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeetsComponent } from './user-deets.component';

describe('UserDeetsComponent', () => {
  let component: UserDeetsComponent;
  let fixture: ComponentFixture<UserDeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
