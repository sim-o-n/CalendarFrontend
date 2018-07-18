export interface CalendarEvent {
  "allDay": boolean;
  "recurring": boolean;
  "tags": string[],
  "virtual": boolean,
  "access": number
  "applicants": string[],
  "participants": string[],
  "_id": string,
  "name": string,
  "startTime": string,
  "endTime": string,
  "date": string,
  "owner": string,
  "region": string,
  "__v": number
}
