import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { CtaButtonComponent } from '@components/cta-button/cta-button.component'

@Component({
  selector: 'app-cta',
  imports: [CtaButtonComponent],
  standalone: true,
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent implements OnInit {
  @Input() backgroundColor!: string;
  @Input() buttonColor!: string;
  @Input() buttonText!: string;
  @Input() target!: string;

  @HostBinding('style.--cta-bg')

  get ctaBackground() {
    return this.backgroundColor || '';
  }

  get _target() {
    return this.target || '#pricing';
  }

  ngOnInit(): void {
  }

  buttonBackgroundColor(): string {
    return this.buttonColor || '';
  }

  getTarget(): string {
    return this.target || '#pricing';
  }

  constructor(){}
}
