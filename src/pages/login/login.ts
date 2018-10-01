import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular'
import { stringify } from '@angular/core/src/util'
import { AuthService } from '../../services/auth.service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authService: AuthService) {
  }
  loginFacebook(){
    this.authService.loginWithFacebook().then( (response)=>{
      alert("Logeado con Éxito")
      localStorage.setItem('loginData', JSON.stringify(response))      
      this.viewCtrl.dismiss()
    })

  }
  cancelLogin(){
    this.viewCtrl.dismiss()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
