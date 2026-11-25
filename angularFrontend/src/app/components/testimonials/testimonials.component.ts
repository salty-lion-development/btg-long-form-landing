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

  clickityClick(): void {
    const track = document.getElementById('track-id');

    if (!track) return;

    track.style.backgroundColor = "orange";
    if (window.innerWidth >= 768) return;

    console.log('handleClick called for entry:');
  }

}
