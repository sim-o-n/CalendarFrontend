import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  @Output() closed = new EventEmitter();

  name: string;
  region: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    this.authService.signup({name: this.name, region: this.region, email: this.email, password: this.password}).subscribe(_ => {
      console.log(_);
      this.closed.emit();
    });
  }

}
