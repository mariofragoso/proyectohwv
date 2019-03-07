import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContcampsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contcamps',
  templateUrl: 'contcamps.html',
})
export class ContcampsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    cmpfam1(){
    this.navCtrl.push("ContenidoPage")

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContcampsPage');
  }

}
