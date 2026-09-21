import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-warning-modal',
  templateUrl: './mobile-warning-modal.component.html',
  styleUrls: ['./mobile-warning-modal.component.scss']
})
export class MobileWarningModalComponent {
  @Output() dismiss = new EventEmitter<void>();
  @Output() redirectToMobileSite = new EventEmitter<void>();

  onDismiss() {
    this.dismiss.emit();
    // Store that user has dismissed the warning
    localStorage.setItem('hasSeenMobileWarning', 'true');
  }

  onRedirect() {
    this.redirectToMobileSite.emit();
  }
}