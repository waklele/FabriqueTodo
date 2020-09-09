import { Component } from '@angular/core';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginsService } from './logins/logins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginsService: LoginsService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.loginsService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigateByUrl('/home');
        } else {
          this.router.navigateByUrl('/logout');
        }
      })

    });
  }

  onLogout() {
    console.log("Logout Success");
    this.loginsService.logout();
  }
}
