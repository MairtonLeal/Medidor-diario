import { Component } from '@angular/core';
import { AdmobOptions } from '@awesome-cordova-plugins/admob';
import { Admob } from '@awesome-cordova-plugins/admob/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,  private admob: Admob) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
        // Admob options config
    const admobOptions: AdmobOptions = {
      isTesting: true,
      autoShowBanner: true,
      adSize: this.admob.AD_SIZE.BANNER,
    };
    this.admob
      .setOptions(admobOptions)
      .then(() => console.log('Admob options have been successfully set'))
      .catch((err) => console.error('Error setting admob options:', err));
    });

  }
}
