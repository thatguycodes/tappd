import {Component, Input} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-tile',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './list-tile.component.html',
  styleUrl: './list-tile.component.css'
})
export class ListTileComponent {
  @Input() team!: { id: number; members: string[] };

}
