import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-add-tool',
  templateUrl: './confirm-add-tool.component.html',
  styleUrls: ['./confirm-add-tool.component.css']
})
export class ConfirmAddToolComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmAddToolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router:Router) { }

  ngOnInit() {
  }

  redirectHome(): void {
    this.dialogRef.close();
    this.router.navigate(['/home']);
  }

}
