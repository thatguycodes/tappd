import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  model,
  OnInit,
  signal,
  ViewEncapsulation
} from '@angular/core';
import {
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {StorageService} from "../../services/storage.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

export interface Operator {
  name: string;
  team: string;
}

export interface DialogData {
  team: string;
  name: string;
}


@Component({
  selector: 'app-operator-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './operator-list.component.html',
  styleUrl: './operator-list.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'team'];
  dataSource = new MatTableDataSource<any>();
  team = signal('');
  readonly name = signal('');
  readonly dialog = inject(MatDialog);
constructor(private storage: StorageService) {
}
  addOperator() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name(), team: this.team()},
    });

    dialogRef.afterClosed().subscribe(operator => {
      if (operator !== undefined) {
        this.storage.addOperator(operator).subscribe({
          next: (res) => {
            if (res) {
              alert('Operator added successfully')
            }
          },
          error: (error) => {
          alert('Operator was not added, try again later!' + error)
          }
      })
    }});
  }

  ngOnInit(): void {
  this.storage.listOperators().subscribe({
    next: (operators) => {
      if (operators) {
        this.dataSource.data = operators;
      }
    },
    error: (error) => {
      console.error(error)
    }
  });

  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'add-operator.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  data = inject<DialogData>(MAT_DIALOG_DATA);
  team = model(this.data.team);
  name = model(this.data.name)

  onNoClick(): void {
    this.dialogRef.close();
  }
}
