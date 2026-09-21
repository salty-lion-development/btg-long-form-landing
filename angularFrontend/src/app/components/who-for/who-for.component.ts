import { Component } from '@angular/core';

@Component({
  selector: 'app-who-for',
  imports: [],
  templateUrl: './who-for.component.html',
  styleUrl: './who-for.component.scss',
})
export class WhoForComponent {
  navigateToPriceSection() {
    const element = document.getElementById('pricing');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
