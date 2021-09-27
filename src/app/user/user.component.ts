import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  selectedyourInstitution: string = '';
  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedyourInstitution = event.target.value;
  }
  step = 'step1';
  profileForm = new FormGroup({});
  constructor() {}

  ngOnInit(): void {}
  logout() {}
}
