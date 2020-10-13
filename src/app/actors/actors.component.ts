import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  actors = [
    { lastName: 'Robert', firstName: 'Julia' },
    { lastName: 'Walker', firstName: 'Paul' },
    { lastName: 'Pitt', firstName: 'Brad' },
  ];
  constructor() {}

  ngOnInit(): void {}

  deleteRequest(index) {
    this.actors = this.actors.filter((el, i) => {
      return i !== index;
    });
  }
}
