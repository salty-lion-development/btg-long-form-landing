import { Component, signal, effect, inject, DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  standalone: true,
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
})
export class HamburgerComponent {
  private doc = inject(DOCUMENT);
  open = signal(false);

  constructor() {
    effect(() => {
      this.doc.body.classList.toggle('menu-open', this.open());
    });
  }

  toggle() {
    this.open.update(v => !v);
  }

  close() {
    this.open.set(false);
  }
}