import { Component, signal, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { BodyComponent } from '@components/body/body.component';
import { FooterComponent } from '@components/footer/footer.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileWarningModalComponent } from '@components/mobile-warning-modal/mobile-warning-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, BodyComponent, FooterComponent, MobileWarningModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('frontend');
  isMobile: boolean = true;
  showMobileWarning: boolean = true;
  private destroy$ = new Subject<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      const hasSeenWarning = localStorage.getItem('hasSeenMobileWarning');
      this.checkScreenSize();

      window.addEventListener('resize', () => this.checkScreenSize());

      if (this.isMobile && hasSeenWarning !== 'true') {
        this.showMobileWarning = true;
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkScreenSize() {
    // Additional check to ensure we're in a browser environment
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    }
  }

  onWarningDismissed() {
    this.showMobileWarning = false;
  }

  onRedirectToMobile() {
    // Redirect to mobile site
    window.location.href = 'https://btgspanish.com/';
  }
}