import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchemeByIdComponent } from './view-scheme-by-id.component';

describe('ViewSchemeByIdComponent', () => {
  let component: ViewSchemeByIdComponent;
  let fixture: ComponentFixture<ViewSchemeByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSchemeByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSchemeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
