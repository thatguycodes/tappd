import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {ListTileComponent} from "./list-tile/list-tile.component";
import {ELEMENT_DATA, PeriodicElement} from "../operator-list/operator-list.component";

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatButton,
    NgForOf,
    ListTileComponent
  ],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css'
})
export class TeamsListComponent {
  names:string[] = ELEMENT_DATA.map(operator  => operator.name);
  teams: { id: number, members: string[] }[] = [];

  makeTeams(size: number) {
    this.teams = [];
    const shuffledNames = this.shuffle([...this.names]);
    let teamId = 1;
    while (shuffledNames.length > 0) {
      const teamMembers = shuffledNames.splice(0, size);
      this.teams.push({ id: teamId++, members: teamMembers });
    }
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
