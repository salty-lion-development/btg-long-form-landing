import { Component, signal, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileWarningModalComponent } from '@components/mobile-warning-modal/mobile-warning-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent, SidebarComponent, FooterComponent, MobileWarningModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('frontend');
  isMobile: boolean = false;
  showMobileWarning: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    console.clear()
    if (isPlatformBrowser(this.platformId)) {
      //const hasSeenWarning = localStorage.getItem('hasSeenMobileWarning');
      this.checkScreenSize();

      window.addEventListener('resize', () => this.checkScreenSize());

      if (this.isMobile) {
        this.showMobileWarning = true;
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
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