import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgregarfotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregarfotos',
  templateUrl: 'agregarfotos.html',
})
export class AgregarfotosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    cmpfam1(){
    this.navCtrl.push("ContenidoPage")
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarfotosPage');
  }

}
