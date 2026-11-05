import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavLink = {
  label: string;
  path?: string;
  fragment?: string;
};

@Component({
  selector: 'app-hamburger-menu',
  imports: [RouterLink],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss',
})

export class HamburgerMenu {
  isHamburgerExpanded: boolean = false;
  links = input.required<NavLink[]>();

  toggleHamburger() {
    this.isHamburgerExpanded = !this.isHamburgerExpanded;
  }

  goToLinkAndCloseMenu() {
    this.isHamburgerExpanded = !this.isHamburgerExpanded;
  }
}
