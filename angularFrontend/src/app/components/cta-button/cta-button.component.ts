import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  @Input() buttonColor!: string;
  @Input() buttonText!: string;
  @Input() buttonHeight!: string;
  @Input() buttonBorderColor!: string;
  @Input() buttonActiveBgColor!: string;
  @Input() target!: string;

  @HostBinding('style.--cta-button-bg')

  get ctaButtonColor() {
    return this.buttonColor || '#0aadcc';
  }

  @HostBinding('style.--cta-button-border-bg')

  get ctaButtonBorderColor() {
    return this.buttonColor || '#0aadcc';
  }

  @HostBinding('style.--cta-button-active-bg-color')

  get ctaButtonActiveBgColor() {
    return this.buttonColor || '#0aadcc';
  }

  @HostBinding('style.--cta-button-height')

  get ctaButtonHeight() {
    return this.buttonHeight || '5rem';
  }

  onButtonClick(): void {
    if (this.target.startsWith('#')) {
      const element = document.getElementById(this.target.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = this.target;
    }
  }
}