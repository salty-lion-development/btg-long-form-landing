import { Component } from '@angular/core';
import { SectionBaseComponent } from '@components/section-base/section-base.component';
import { HeroComponent } from '@components/hero/hero.component';
import { TrailerComponent } from '@components/trailer/trailer.component';
import { SolutionComponent } from '@components/solution/solution.component';
import { TestimonialsComponent } from '@components/testimonials/testimonials.component';
import { TimelineComponent } from '@components/timeline/timeline.component';
import { ProgramsComponent } from '@components/programs/programs.component';
import { SocialProofComponent } from '@components/social-proof/social-proof.component';
import { AboutComponent } from '@components/about/about.component';
import { GuaranteeComponent } from '@components/guarantee/guarantee.component';
import { FaqComponent } from '@components/faq/faq.component';
import { CtaComponent } from '@components/cta/cta.component';
import { StatsComponent } from '@components/stats/stats.componet';
import { NarrativeComponent } from '@components/narrative/narrative.component';
import { WhoForComponent } from '@components/who-for/who-for.component';
import { ExpectationsComponent } from '@components/expectations/expectations.component';
import { ChallengeResult } from '@components/challenge-result/challenge-result';
import { PricingComponent } from '@components/pricing/pricing.component';
import { WhyIBuild } from '@components/why-i-build/why-i-build';
import { WhatYouGet } from '@components/what-you-get/what-you-get';
import { ChallengeResultAaronComponent } from '@components/challenge-result-aaron/challenge-result-aaron.component';
import { ChallengeResultMorganComponent } from '@components/challenge-result-morgan/challenge-result-morgan.component';
import { ChallengeResultNakeshaComponent } from '@components/challenge-result-nakesha/challenge-result-nakesha.component';
import { ChallengeResultRyanComponent } from '@components/challenge-result-ryan/challenge-result-ryan.component';
import { NarrativeWhoForComponent } from '@components/narrative-who-for/narrative-who-for.component';


@Component({
  selector: 'app-body',
  imports: [
    SectionBaseComponent,
    HeroComponent,
    TrailerComponent,
    SolutionComponent,
    TestimonialsComponent,
    TimelineComponent,
    ProgramsComponent,
    SocialProofComponent,
    AboutComponent,
    GuaranteeComponent,
    FaqComponent,
    CtaComponent,
    StatsComponent,
    NarrativeComponent,
    WhoForComponent,
    ExpectationsComponent,
    ChallengeResult,
    PricingComponent,
    WhyIBuild,
    WhatYouGet,
    ChallengeResultAaronComponent,
    ChallengeResultMorganComponent,
    ChallengeResultNakeshaComponent,
    ChallengeResultRyanComponent,
    NarrativeWhoForComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent { }
