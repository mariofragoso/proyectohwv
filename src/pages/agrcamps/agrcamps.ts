import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgrcampsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agrcamps',
  templateUrl: 'agrcamps.html',
})
export class AgrcampsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
inicio(){
    this.navCtrl.push("InicioPage")
}
agrfoto(){
    this.navCtrl.push("AgregarfotosPage")
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgrcampsPage');
  }

}
