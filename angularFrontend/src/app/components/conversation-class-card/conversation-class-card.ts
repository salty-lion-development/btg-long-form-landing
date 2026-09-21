import { Component } from '@angular/core';
import { WygCard } from '@components/wyg-card/wyg-card';
import { GifPlayerComponent } from '@components/gif-player/gif-player.component';

@Component({
  selector: 'app-conversation-class-card',
  imports: [WygCard, GifPlayerComponent],
  templateUrl: './conversation-class-card.html',
  styleUrl: './conversation-class-card.scss',
})
export class ConversationClassCard {}
