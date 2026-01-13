import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from "@angular/forms";
import { DynamicGridVisualizerComponent } from 'dynamic-grid-visualizer';
import { StatusIndicatorLibComponent } from 'status-indicator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicGridVisualizerComponent, StatusIndicatorLibComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Parent manages the state
  rowsControl = new FormControl(0, { nonNullable: true, validators: [Validators.min(5), Validators.max(20)] });
  colsControl = new FormControl(0, { nonNullable: true, validators: [Validators.min(5), Validators.max(20)] });

  // Variables to hold the values ONLY when button is clicked
  confirmedRows = 0;
  confirmedCols = 0;
  status: string = 'offline';

  onRender() {
    this.confirmedRows = this.rowsControl.value;
    this.confirmedCols = this.colsControl.value;
    this.status = (this.confirmedRows > 0) ? 'online' : 'busy';
  }
}