import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {ListTileComponent} from "./list-tile/list-tile.component";
import {StorageService} from "../../services/storage.service";
import { MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatButton,
    NgForOf,
    ListTileComponent,
    MatCardModule
  ],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css'
})
export class TeamsListComponent  implements OnInit {

  names: string[] = [];
  teams: { id: number, members: string[] }[] = [];

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    this.storage.listOperators().subscribe({
      next: (operators) => {
        if (operators.length > 0) {
          this.names = operators.map((operator: { name: any; }) => operator.name);
          this.teams = this.createTeams(operators)
          console.log(this.teams)
        }

      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  makeTeams(size: number) {
    this.teams = [];
    const shuffledNames = this.shuffle([...this.names]);
    let teamId = 1;
    while (shuffledNames.length > 0) {
      const teamMembers = shuffledNames.splice(0, size);
      this.teams.push({id: teamId++, members: teamMembers});
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

  createTeams(array: any){
    // Step 1: Group elements by the 'team' property
    const groups = array.reduce((acc: { [x: string]: any[]; }, item: { team: any; }) => {
      const key = item.team;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    // Step 2: Assign each group an id and format the result
    let idCounter = 1;
    const result = Object.keys(groups).map(key => {
      return {
        id: idCounter++,
        members: groups[key].map((op: { name: any; }) => op.name)
      };
    });

    return result;
  }

  sortByTeam(array: any) {
    return array.sort((a: { team: number; }, b: { team: number; }) => {
      if (a.team < b.team) {
        return -1;
      }
      if (a.team > b.team) {
        return 1;
      }
      return 0;
    });
  }
}


