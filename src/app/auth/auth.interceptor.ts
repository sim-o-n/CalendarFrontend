
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "selenium-webdriver/http";
import {Observable} from "rxjs/Rx";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  jwt: string;

  constructor(private authService: AuthService) {
    this.authService.jwt$.subscribe(jwt => this.jwt = jwt);
  }

  intercept(req: any, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('jetzt', this.jwt);
    if (this.jwt != null) {
      const authReq = req.clone({headers: req.headers.append('Authorization', 'JWT ' + this.jwt)});
      console.log(authReq);
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
