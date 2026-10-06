import { Component } from '@angular/core';
import { NarrativeComponent } from '@components/narrative/narrative.component';
import { WhoForComponent } from '@components/who-for/who-for.component';
import { ExpectationsComponent } from '@components/expectations/expectations.component';
import { ChallengeResultNakeshaComponent } from '@components/challenge-result-nakesha/challenge-result-nakesha.component';
import { CtaComponent } from '@components/cta/cta.component';


@Component({
  selector: 'app-narrative-who-for',
  imports: [NarrativeComponent, WhoForComponent, ExpectationsComponent, ChallengeResultNakeshaComponent, CtaComponent],
  templateUrl: './narrative-who-for.component.html',
  styleUrl: './narrative-who-for.component.scss',
})
export class NarrativeWhoForComponent {}
