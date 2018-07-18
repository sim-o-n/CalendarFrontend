import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material";
import {EventService} from "../event/event.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {

  eventForm: FormControl;
  @Output() closed = new EventEmitter();

  chipItemsList: ChipItem[];

  event: any = {};

  constructor(private eventService: EventService, public authService: AuthService) {
    this.chipItemsList = [
      {name: 'blue Ocean'}
    ];
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.chipItemsList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(chip: ChipItem): void {
    const index = this.chipItemsList.indexOf(chip);

    if (index >= 0) {
      this.chipItemsList.splice(index, 1);
    }
  }

  createEvent(): void {
    this.eventService.addEvent(this.event).subscribe((answer: any) => {
      if(answer._id){
        this.closed.emit();
      }
    });
  }


}


export interface ChipItem {
  name: string;
}
