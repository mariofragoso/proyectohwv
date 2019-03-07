import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeletreopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deletreop',
  templateUrl: 'deletreop.html',
})
export class DeletreopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    senasignad(){
    this.navCtrl.push("SenasignadaPage")
    }
    contenido(){
        this.navCtrl.push("ContenidoPage")
    }
    inicio(){
        this.navCtrl.push("InicioPage")
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletreopPage');
  }

}
