import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  @Input() actor: any;
  @Input() index: any;
  @Output() requested = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onDelete(index) {
    console.log('===index===', index);
    this.requested.emit(index);
  }
}
