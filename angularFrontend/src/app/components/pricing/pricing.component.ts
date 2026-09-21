import { Component } from '@angular/core';
import { MembershipComponent } from './membership/membership.component';

@Component({
  selector: 'app-pricing',
  imports: [
    MembershipComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly memberships = [
    {
      name: "Community",
      yearlyPrice: "299",
      monthlyPrice: "39",
      features: Array("Weekly speaking prompts","Feedback from our native conversation teachers","Practice sprints and challenges","Grammar courses"),
      cta: "Purchase",
      target: "https://btgspanish.circle.so/checkout/btg-spanish-community-membership"
    },
    {
      name: "Lite",
      yearlyPrice: "1,799",
      monthlyPrice: "179",
      features: Array("Everything in Community", "Personalized conversation teacher match", "1 weekly conversation class", "48-hr reschedule window", "Quarterly progress reports"),
      isMostPopular: true,
      cta: "Purchase",
      target: "https://btgspanish.circle.so/checkout/lite-membership"
    },
    {
      name: "VIP",
      yearlyPrice: "3,999",
      monthlyPrice: "499",
      features: Array("Everything in Community", "Personalized conversation teacher match", "3 weekly conversation classes", "24-hr reschedule window", "Quarterly progress reports", "Quarterly coaching sessions"),
      cta: "Purchase",
      target: "https://btgspanish.circle.so/checkout/full-membership"
    },
  ];
}
