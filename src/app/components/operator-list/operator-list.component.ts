import {Component, ViewEncapsulation} from '@angular/core';
import {
 MatTableModule
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";

export interface PeriodicElement {
  name: string;
  position: number;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Alpha Predator'},
  {position: 2, name: 'ReyMontor'},
  {position: 3, name: 'I8urMama'},
  {position: 4, name: 'Dalaflat'},
  {position: 5, name: 'DeadlierSirens'},
  {position: 6, name: 'Lethobz'},
  {position: 7, name: 'Marlon'},
  {position: 8, name: 'Pablito'},
  {position: 9, name: 'Cameron'},
  {position: 10, name: 'Kat_TheGreat'},
  {position: 11, name: 'Lumbu01'},
  {position: 12, name: 'Pocked-Cargo'},
];

@Component({
  selector: 'app-operator-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton
  ],
  templateUrl: './operator-list.component.html',
  styleUrl: './operator-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OperatorListComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}
