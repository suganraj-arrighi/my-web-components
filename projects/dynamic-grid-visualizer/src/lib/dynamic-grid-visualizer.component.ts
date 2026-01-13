import { Component, Input, signal, computed, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-dynamic-grid-visualizer',
  standalone: true, // Newer Angular libraries use standalone
  imports: [], 
  templateUrl: './dynamic-grid-visualizer.component.html',
  styleUrls: ['./dynamic-grid-visualizer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom // Important for React integration
})
export class DynamicGridVisualizerComponent {
  // We use setter inputs to update our internal signals
  @Input() set rows(v: number) { this._rows.set(v); }
  @Input() set cols(v: number) { this._cols.set(v); }
  @Input() cellSize: number = 50;

  private _rows = signal(0);
  private _cols = signal(0);

  // This computed signal replaces your onRender logic
  gridConfig = computed(() => {
    const r = this._rows();
    const c = this._cols();
    if (r < 1 || c < 1) return null;

    const maxDimension = Math.max(r, c);
    const calculatedCellSize = 600 / maxDimension;

    return { rows: r, cols: c, cellSize: calculatedCellSize };
  });

  createArray(num: number) {
    return Array(num).fill(0);
  }

  isBorderCell(r: number, c: number, totalRows: number, totalCols: number): boolean {
    return r === 0 || c === 0 || r === totalRows - 1 || c === totalCols - 1;
  }

    isDiagonalCell(r: number, c: number, totalroc: number, totalcols: number): boolean {
    if (totalroc !== totalcols) return false;

    return r === c ;
  }
}