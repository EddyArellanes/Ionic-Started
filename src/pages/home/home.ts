import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WalletPage } from '../wallet/wallet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wallets : any = [
    {
      name: 'Transporte',
      description: 'Dinero para el transporte Casa-Trabajo',
      price: '$300'
    },
    {
      name: 'Gastos',
      description: 'Dinero comprar víveres y herramientas',
      price: '$1,500'
    },
    {
      name: 'Libre',
      description: 'Dinero Libre para gastarlo en lo que sea',
      price: '$2,400'
    }
  ]
  constructor(public navCtrl: NavController) {

  }
  goToWallets(){
    this.navCtrl.push(WalletPage)
  }
  details(){
    //this.navCtrl.push() 
  }
  create(){

  }

}
