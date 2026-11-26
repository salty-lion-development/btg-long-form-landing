import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  private previousName: string = '';

  entries = [
    { name: "Aaron"},
    { name: "Alicia"},
    { name: "Ashley"},
    { name: "Lauren"},
    { name: "Makayla"},
    { name: "Makyba"},
    { name: "Morgan"},
    { name: "Nakesha"},
    { name: "Rick"},
    { name: "Ryan"},
    { name: "Tim"},
    { name: "Victoria"},
  ];

  constructor() { }


  getFrontImgUrl(name: string): string {
    let currentName = name.toUpperCase();

    return 'images/' + currentName + '.png';
  }

  getBackImgUrl(name: string): string {
    let currentName = name.toUpperCase();

    return 'images/' + currentName + '_2' + '.png';
  }

  clickityClick(event: Event): void {
    if (window.innerWidth >= 768) return;

    const entry = event.currentTarget as HTMLElement;
    const track = entry.closest('.track') as HTMLElement;
    if (!entry || !track) return;

    // Smoothly center the tapped card
    entry.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    // Existing flip toggle logic
    if (entry.style.length > 1) {
      entry.style.cssText = 'transform: rotateY(360deg); transition: transform 1s;';
      track.style.cssText = 'animation-play-state: running;';
      setTimeout(() => entry.removeAttribute('style'), 1500);
      return;
    }

    entry.style.cssText = 'cursor: pointer; transform: rotateY(180deg); transition: transform 1s;';
    track.style.cssText = 'animation-play-state: paused;';
  }

}
