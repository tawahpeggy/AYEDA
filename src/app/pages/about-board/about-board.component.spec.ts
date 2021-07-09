import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBoardComponent } from './about-board.component';

describe('AboutBoardComponent', () => {
  let component: AboutBoardComponent;
  let fixture: ComponentFixture<AboutBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
