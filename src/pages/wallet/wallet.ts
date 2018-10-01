import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WalletsService } from '../../services/wallets.service';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
  
})
export class WalletPage {
  wallet: any = {}
  message = "¡Wallet actualizada con éxito!"
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public walletsService: WalletsService, public toast: ToastController) {
    this.wallet = navParams.get('wallet')
  }

  navigateBack(){
    //Back to last element
    this.navCtrl.pop()    
  }
  //Back to Root or "Home"
  navigateToHome(){
    this.navCtrl.setRoot(HomePage)
  }
  saveWallet(){
    if(!this.wallet.id){
      this.wallet.id = Date.now()
      this.message = "¡Wallet agregada con éxito!"
    }    
    this.walletsService.createWallet(this.wallet)
    this.showNotification(this.message, 2000)
    this.navCtrl.pop()
  }  
  showNotification(message, duration) {
    const toast = this.toast.create({
      message: message,
      duration: duration
    })
    toast.present()
  }
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Volver');
    console.log('ionViewDidLoad WalletPage');
  }

}
