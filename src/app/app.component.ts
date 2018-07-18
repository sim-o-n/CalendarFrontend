import {Component, OnInit} from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import {setHours, setMinutes} from 'date-fns';
import {EventService} from "./event/event.service";
import {AuthService} from "./auth/auth.service";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public view: string = 'month';
  public refresh: Subject<any> = new Subject();

  public viewDate: Date = new Date();
  public today: Date = new Date();

  public showAddEventForm = false;
  public showLoginForm = false;
  public focuedEvend: any;
  public showRegisterPopUp = false;

  events: CalendarEvent[] = [];

  constructor(private eventService: EventService, public authService: AuthService) {

  }

  ngOnInit() {
    this.loadEvents();
  }


  nextViewElement(date: Date) {
    switch (this.view) {
      case'week':
        this.viewDate.setDate(date.getDate() + 7);
        break;
      case'day':
        this.viewDate.setDate(date.getDate() + 1);
        break;
      case 'month':
      default:
        this.viewDate.setMonth(date.getMonth() + 1);
    }
    this.refresh.next();
  }

  previewViewElement(date: Date) {
    switch (this.view) {
      case'week':
        this.viewDate.setDate(date.getDate() - 7);
        break;
      case'day':
        this.viewDate.setDate(date.getDate() - 1);
        break;
      case 'month':
      default:
        this.viewDate.setMonth(date.getMonth() - 1);
    }
    this.refresh.next();
  }

  openAddEventForm() {
    this.showAddEventForm = true;
  }

  login() {
    this.showLoginForm = true;
  }

  logout() {
    this.authService.logout();
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe((events: any[]) => {
      console.log(events);
      this.events = events.map(this.mapToCalenderEvent);
      this.refresh.next();
    });
  }

  mapToCalenderEvent(obj: any): CalendarEvent {
    return {
      id: obj._id,
      start: new Date(obj.startDate),
      title: obj.name,
      allDay: obj.allDay,
    }
  }

  handleEventClicked(event) {
    this.focuedEvend = event;
  }

  openRegister() {
    this.showRegisterPopUp = true;
  }
}
