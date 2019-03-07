import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SenasignadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-senasignada',
  templateUrl: 'senasignada.html',
})
export class SenasignadaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    verfoto(){
        this.navCtrl.push("VerfotoPage")
    }
    deletreo(){
    this.navCtrl.push("DeletreopPage")
    }
    inicio(){
        this.navCtrl.push("InicioPage")
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SenasignadaPage');
  }

}
