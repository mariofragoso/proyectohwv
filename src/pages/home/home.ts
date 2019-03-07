import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    crcuenta(){
        this.navCtrl.push("CcuentaPage");
    }
    insesion(){
        this.navCtrl.push("IsesionPage");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }


}
