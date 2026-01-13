import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-status-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-container" [attr.title]="statusText">
      <span class="pulse-dot" [style.background-color]="color"></span>
      <span class="status-label">
        <slot>{{ statusText }}</slot>
      </span>
    </div>
  `,
  styleUrls: ['./status-indicator-lib.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StatusIndicatorLibComponent {
  // Accepts 'online', 'offline', 'busy' or a custom hex color
  @Input() set status(value: string) {
    this.color = this.getColor(value);
    this.statusText = value.toUpperCase();
  }

  color: string = '#28a745'; // Default green
  statusText: string = 'ONLINE';

  private getColor(status: string): string {
    const map: Record<string, string> = {
      online: '#28a745',
      offline: '#dc3545',
      busy: '#ffc107',
      away: '#17a2b8'
    };
    return map[status.toLowerCase()] || status;
  }
}