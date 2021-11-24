import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Profile';

  Pages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Matakuliah',
      url: '/matakuliah',
      icon: 'school'
    },
    {
      title: 'Jadwal',
      url: '/jadwal',
      icon: 'alarm'
    },
    {
      title: 'Nilai',
      url: '/nilai',
      icon: 'star'
    },
    {
      title: 'Krs',
      url: '/krs',
      icon: 'id-card'
    },
    {
      title: 'Keuangan',
      url: '/keuangan',
      icon: 'cash'
    }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
