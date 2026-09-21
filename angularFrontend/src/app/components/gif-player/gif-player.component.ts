import { Component, ElementRef, ViewChild, AfterViewInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gif-player',
  imports: [],
  templateUrl: './gif-player.component.html',
  styleUrl: './gif-player.component.scss',
})
export class GifPlayerComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;
  @Input() videoSrc!: string;

  private playCount = 1;
  private readonly maxPlays = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only run video logic in the browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const video = this.videoRef?.nativeElement;

    if (!video) {
      console.error('Video element not found');
      return;
    }

    // Start playing automatically
    video.play().catch(err => console.warn('Autoplay blocked:', err));

    video.addEventListener('ended', () => {
      this.playCount++;

      if (this.playCount < this.maxPlays) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });
  }

  replay(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.playCount = 0;
    const video = this.videoRef.nativeElement;
    video.currentTime = 0;
    video.play();
  }
}