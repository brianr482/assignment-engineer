import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SimpleDialogComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [SimpleDialogComponent]
})
export class SharedModule { }
