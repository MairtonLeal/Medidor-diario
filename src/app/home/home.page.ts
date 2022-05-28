import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Admob } from '@awesome-cordova-plugins/admob/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  medidorOpcao = 'digital';
  leituraAtual;
  leituraAnterior;
  leituraDeConsumo = 0;
  carregar;
  button = false;
  //  aparelhos = [];

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private admob: Admob
  ) {
    this.admob
    .createBannerView()
    .then(() => console.log('Banner ad loaded'))
    .catch((err) => console.error('Error loading banner ad:', err));
  }

  async sucesso() {
    const toast = await this.toastController.create({
      header: 'Calculo realizado',
      // message: 'Click to Close',
      icon: 'checkmark',
      position: 'top',
      color: 'success',
      duration: 1000,
      mode: 'ios',
    });
    await toast.present();
  }
  async erro() {
    const toast = await this.toastController.create({
      header: 'Erro ao calcular',
      message: 'Não deixe campos vazios ou zerados',
      icon: 'close',
      position: 'top',
      color: 'danger',
      duration: 1000,
      mode: 'ios',
    });
    await toast.present();
  }

  async erroZero() {
    const toast = await this.toastController.create({
      header: 'Erro ao calcular',
      message: 'Resultado é 0 ou negativo',
      icon: 'close',
      position: 'top',
      color: 'danger',
      duration: 1000,
      mode: 'ios',
    });
    await toast.present();
  }
  async calcularLeitura() {
    if (this.leituraAtual === undefined || this.leituraAnterior === undefined) {
      this.erro();
    } else if (this.leituraAtual === 4) {
      console.log('tamanho');
      this.erro();
    } else {
      this.button = true;
      await setTimeout(() => {
        this.button = false;
        this.leituraDeConsumo = this.leituraAtual - this.leituraAnterior;
        if (this.leituraDeConsumo === 0 || this.leituraDeConsumo < 0) {
          this.erroZero();
        } else {
          console.log(this.leituraDeConsumo);
          this.sucesso();
        }
      }, 1500);
    }
  }

  async tipoModelo(medidor) {
    if (medidor === 'digital') {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Medidor Digital',
        subHeader:
          'A leitura corresponde ao número que aparece no visor eletrônico',
        message:
          'Alguns medidores eletrônicos possuem uma letra antes do número que aparece no visor eletrônico. Nesse caso, deve ser considerado o número da leitura que aparece após a letra “A”.',
        mode: 'md',
        buttons: ['Entendi'],
      });

      await alert.present();
    } else if (medidor === 'ponteiros') {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Medidor de Ponteiros',
        subHeader:
          'É composto por quatro ou cinco círculos com números semelhantes a um relógio',
        message:
          'O valor do número registrado da leitura depende da posição em que se encontra o ponteiro. Se ele estiver entre dois números, prevalecerá sempre o menor número.',
        mode: 'md',
        buttons: ['Entendi'],
      });

      await alert.present();
    } else if (medidor === 'ciclometrico') {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Medidor Ciclométrico',
        subHeader: 'A leitura é o número indicado no mostrador.',
        message:
          'Este medidor funciona como um registrador de quilometragem percorrida por um veículo. ',
        mode: 'md',
        buttons: ['Entendi'],
      });

      await alert.present();
    }
  }
}
