import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CalendarEvent} from "./event.interface";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {
  }

  private domain = '';
  private headers = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};

  public getAllEvents() {
    return this.http.get(this.domain + '/event/',);
  }

  public getEventById(id: string) {
    return this.http.get(this.domain + '/event/' + id)
  }

  public addEvent(event) {

    let body = '';
    Object.keys(event).forEach(key => {
      body = body + key + '=' + event[key] + '&'
    });
    console.log('body', body);

    return this.http.post(this.domain + '/event', body, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }

}
