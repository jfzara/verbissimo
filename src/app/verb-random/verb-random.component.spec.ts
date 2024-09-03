import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbRandomComponent } from './verb-random.component';

describe('VerbRandomComponent', () => {
  let component: VerbRandomComponent;
  let fixture: ComponentFixture<VerbRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
