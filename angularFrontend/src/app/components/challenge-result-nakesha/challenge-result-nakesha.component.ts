import { Component, Input, OnInit} from '@angular/core';
import { ChallengeResult } from '@components/challenge-result/challenge-result';

@Component({
  selector: 'app-challenge-result-nakesha',
  imports: [ChallengeResult],
  templateUrl: './challenge-result-nakesha.component.html',
  styleUrl: './challenge-result-nakesha.component.scss'
})
export class ChallengeResultNakeshaComponent {
  @Input() backgroundColor: string = '';

  challengeResultBackgroundColor(): string {
    return this.backgroundColor || '';
  }
}
