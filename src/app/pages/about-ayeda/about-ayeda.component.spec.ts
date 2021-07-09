import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAyedaComponent } from './about-ayeda.component';

describe('AboutAyedaComponent', () => {
  let component: AboutAyedaComponent;
  let fixture: ComponentFixture<AboutAyedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAyedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAyedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
