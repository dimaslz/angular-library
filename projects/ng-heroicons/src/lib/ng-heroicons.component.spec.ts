import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHeroiconsComponent } from './ng-heroicons.component';

describe('NgHeroiconsComponent', () => {
  let component: NgHeroiconsComponent;
  let fixture: ComponentFixture<NgHeroiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHeroiconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHeroiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
