import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {

  @Input() event;
  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('shoe this event', this.event);
  }

}
