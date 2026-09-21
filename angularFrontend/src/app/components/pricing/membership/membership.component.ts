import { Component, input } from '@angular/core';
import { CtaButtonComponent } from '@components/cta-button/cta-button.component';

@Component({
  selector: 'app-membership',
  imports: [CtaButtonComponent],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.scss',
})

export class MembershipComponent {
  name = input<string>();
  yearlyPrice = input<string>();
  monthlyPrice = input<string>();
  isMostPopular = input<boolean>();
  features = input<string[]>();
  cta = input<string>();
  target = input.required<string>();
}
