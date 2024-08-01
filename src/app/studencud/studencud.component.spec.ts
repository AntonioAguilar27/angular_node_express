import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudencudComponent } from './studencud.component';

describe('StudencudComponent', () => {
  let component: StudencudComponent;
  let fixture: ComponentFixture<StudencudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudencudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudencudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
