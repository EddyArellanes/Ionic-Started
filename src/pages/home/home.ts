import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { WalletPage } from '../wallet/wallet';
import { WalletsService } from '../../services/wallets.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  wallets : any = []
  constructor(public navCtrl: NavController, public walletsService: WalletsService, public toast: ToastController) {
    
    this.walletsService.getWallets().valueChanges()
    .subscribe( (walletsFB)=>{
      this.wallets = walletsFB
    })
  }
  

  goToWallets(){
    this.navCtrl.push(WalletPage, { wallet: {}} )
  }
  details(wallet){
    this.navCtrl.push(WalletPage, { wallet : wallet} )
  }
  create(){
    this.navCtrl.push(WalletPage, { wallet: {}})
  }
  deleteWallet(wallet){
    if(confirm(`Estás seguro que quieres eliminar ${wallet.name}?`)){
      this.walletsService.deleteWallet(wallet).then(()=>{
        this.showNotification("¡Wallet Eliminada!", 2000, "danger")    
      })
      
    }
    
  }
  showNotification(message, duration, styles) {
    const toast = this.toast.create({
      message: message,
      duration: duration,
      cssClass: styles
    })
    toast.present()
  }

}
