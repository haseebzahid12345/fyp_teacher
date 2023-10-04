import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefrencesComponent } from './prefrences.component';

describe('PrefrencesComponent', () => {
  let component: PrefrencesComponent;
  let fixture: ComponentFixture<PrefrencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefrencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
