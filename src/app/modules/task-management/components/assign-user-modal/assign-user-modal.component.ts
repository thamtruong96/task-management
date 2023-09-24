import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-assign-user-modal',
  templateUrl: './assign-user-modal.component.html',
  styleUrls: ['./assign-user-modal.component.css']
})
export class AssignUserModalComponent {
  @Input() users;
  userId: number;

  constructor(private dialogRef: MatDialogRef<AssignUserModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.users = data;
  }

  ngOnInit(): void {
  }

  assignUser() {
    // Perform the user assignment logic here
    // For example, you can emit the user name and close the modal
    this.dialogRef.close(this.userId);
  }

  cancel() {
    // Close the modal without assigning a user
    this.dialogRef.close();
  }
}
