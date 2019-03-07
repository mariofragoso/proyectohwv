import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerfotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verfoto',
  templateUrl: 'verfoto.html',
})
export class VerfotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    contenido(){
    this.navCtrl.push("ContenidoPage")
    }
    senasignad(){
    this.navCtrl.push("SenasignadaPage")
    }
    inicio(){
    this.navCtrl.push("InicioPage")
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerfotoPage');
  }

}
