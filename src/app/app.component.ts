import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ELEMENT_DATA, OperatorListComponent} from "./components/operator-list/operator-list.component";
import {TeamsListComponent} from "./components/teams-list/teams-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    NgForOf,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatList,
    MatListItem,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatGridList,
    MatGridTile,
    MatColumnDef,
    MatHeaderCell,
    MatTable,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatFormField,
    MatInput,
    MatFabButton,
    MatLabel, MatTabGroup, MatTab, OperatorListComponent, TeamsListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tappd-poc';

  name: string = '';

  teams: { id: number, members: string[] }[] = [];

ngOnInit() {
}

/*  addName() {
    if (this.name.trim() !== '') {
      this.names.push(this.name);
      this.name = '';
    }
  }*/




}
