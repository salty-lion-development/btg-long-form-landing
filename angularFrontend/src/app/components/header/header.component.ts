import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavLink = {
  label: string;
  path?: string;
  fragment?: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links = input.required<NavLink[]>();
}