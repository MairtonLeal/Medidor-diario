import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.page.html',
  styleUrls: ['./fatura.page.scss'],
})
export class FaturaPage implements OnInit {

  url = "https://pa.equatorialenergia.com.br/informacoes-gerais/minha-fatura-de-energia/";



  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  async irParaSite(){
    let target = "_blank";
    //  this.iab.create( this.url, target);

    await window.open(this.url, target);

  }

}
