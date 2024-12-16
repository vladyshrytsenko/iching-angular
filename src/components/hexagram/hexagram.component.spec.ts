import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagramComponent } from './hexagram.component';

describe('HexagramComponent', () => {
  let component: HexagramComponent;
  let fixture: ComponentFixture<HexagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
