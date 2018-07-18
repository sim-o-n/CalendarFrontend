import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() closed = new EventEmitter();

  email: string = 'test2@web.de';
  password: string = '4321';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login(email = this.email, password = this.password) {
    this.authService.login(email, password).subscribe(answer => {
      if(answer.token){
        this.closed.emit();
      }
    });
  }

}
