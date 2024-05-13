import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf, MatToolbar, MatIcon, MatIconButton, MatList, MatListItem, MatCard, MatCardContent, MatCardHeader, MatGridList, MatGridTile],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tappd-poc';

  name: string = '';
  names: string[] = ['Sneakysquid', 'Lethobz', 'Rio Degenaro', 'Dalaflat', 'Marlon', 'Slick', 'MokoneGold', 'Lumbu', 'Pablitoo', 'Gixxer', 'DeadlierSirens', 'Nathi', 'Biggie', 'Mtimande', 'JayJunior', 'Alpha predator', 'Reymotor', 'cameron'];
  teams: { id: number, members: string[] }[] = [];
ngOnInit() {
  this.makeTeams();
}

  addName() {
    if (this.name.trim() !== '') {
      this.names.push(this.name);
      this.name = '';
    }
  }

  makeTeams() {
    this.teams = [];
    const shuffledNames = this.shuffle([...this.names]);
    let teamId = 1;
    while (shuffledNames.length > 0) {
      const teamMembers = shuffledNames.splice(0, 3);
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
