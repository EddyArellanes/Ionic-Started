import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

//Injectable allows to Inser this script into any Component or aka Page
@Injectable()
export class WalletsService{
  constructor(public afDB: AngularFireDatabase){

  }
  public getWallets(){
    return this.afDB.list('/wallets')
  }
  public getWallet(id){
    return this.afDB.list(`/wallets/${id}`)
  }
  public createWallet(wallet){
    //This will create if not exist
    return this.afDB.database.ref(`/wallets/${wallet.id}`).set(wallet)
  }
  public editWallet(wallet){
    //Is the same of above, Update if exist
    return this.afDB.database.ref(`/wallets/${wallet.id}`).set(wallet)
  }
  public deleteWallet(wallet){
    return this.afDB.database.ref(`/wallets/${wallet.id}`).remove()
  }
}