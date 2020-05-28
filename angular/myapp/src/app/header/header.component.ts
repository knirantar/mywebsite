import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {AuthenticationComponent} from "../authentication/authentication.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  auth()
  {
    this.dialog.open(AuthenticationComponent)
  }


}
