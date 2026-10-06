import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnDestroy {
  @ViewChild('emailAddress') emailAddress!: ElementRef<HTMLElement>;

  private tipEl: HTMLDivElement | null = null;

  show(event: MouseEvent, text: string) {
    if (this.tipEl) return;

    const tip = document.createElement('div');
    tip.textContent = text;
    Object.assign(tip.style, {
      position: 'fixed',
      left: `${event.clientX + 12}px`,
      top: `${event.clientY + 16}px`,
      zIndex: '9999',
      padding: '4px 8px',
      background: '#1f1f1d',
      color: '#fff',
      fontSize: '12px',
      lineHeight: '1.3',
      borderRadius: '4px',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      boxShadow: '0 2px 8px rgba(0,0,0,.25)',
    });

    document.body.appendChild(tip);
    this.tipEl = tip;
  }

  move(event: MouseEvent) {
    if (!this.tipEl) return;
    this.tipEl.style.left = `${event.clientX + 12}px`;
    this.tipEl.style.top = `${event.clientY + 16}px`;
  }

  hide() {
    this.tipEl?.remove();
    this.tipEl = null;
  }

  copyToClipBoard() {
    const email = this.emailAddress?.nativeElement?.textContent?.trim();
    if (email) navigator.clipboard.writeText(email);
    if (this.tipEl) this.tipEl.textContent = 'Copied!';
  }

  ngOnDestroy() {
    this.hide();
  }
}