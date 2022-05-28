import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public iab: InAppBrowser) { }

  ngOnInit() {
  }

   irParaSite(url: string){
     console.log(url);
      let target = "_blank";
     const browser = this.iab.create( url, target);
     browser.on('loadstart').subscribe((event) => {
      console.debug('loadstart', event);
    });
  }

}
