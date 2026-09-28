import { Component, Input } from "@angular/core";
import { PillarData } from "./pillar-data.type";
import { GifPlayerComponent } from "@components/gif-player/gif-player.component";

@Component({
  selector: 'pillar',
  imports: [GifPlayerComponent],
  standalone: true,
  templateUrl: './pillar.component.html',
  styleUrl: './pillar.component.scss',
})
export class PillarComponent {
  @Input({ required: true }) pillarData!: PillarData;

  get isVideo() {
    if(this.pillarData.mediaSrc.includes('.gif')) {
      debugger;
    }
    return this.pillarData.mediaSrc.includes('.mp4') ? true : false;
  }

  get isClearPath() {
    return this.pillarData.mediaSrc.includes('clear_path_forward') ? true : false;
  }
}

