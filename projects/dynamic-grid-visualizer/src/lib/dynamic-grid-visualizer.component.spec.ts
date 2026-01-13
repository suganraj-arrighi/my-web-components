import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGridVisualizerComponent } from './dynamic-grid-visualizer.component';

describe('DynamicGridVisualizerComponent', () => {
  let component: DynamicGridVisualizerComponent;
  let fixture: ComponentFixture<DynamicGridVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicGridVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicGridVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
