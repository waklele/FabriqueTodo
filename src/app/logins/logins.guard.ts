import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginsService } from './logins.service';

@Injectable({
  providedIn: 'root'
})
export class LoginsGuard implements CanActivate {

  constructor(private loginsService: LoginsService, private router:Router){

  }

  canActivate(): boolean {
    return this.loginsService.isAuthenticated();
  }

  // canLoad(route: Route, segments: UrlSegment[]
  //   ): Observable<boolean> | Promise<boolean> | boolean {
  //     if (!this.loginsService.userIsAuthenticated){
  //       this.router.navigateByUrl('/logins');
  //     }
  //     return this.loginsService.userIsAuthenticated;
  //   }
  
}
