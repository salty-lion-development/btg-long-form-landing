import { Routes } from '@angular/router';
import { BodyComponent } from '@pages/body/body.component';
import { TermsAndConditionsComponent } from '@pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from '@pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    title: 'Home'
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
    title: 'Terms And Conditions'
  },
    {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy'
  }
];
