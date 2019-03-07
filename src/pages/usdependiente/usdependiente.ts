import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
/**
 * Generated class for the UsdependientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usdependiente',
  templateUrl: 'usdependiente.html',
})
export class UsdependientePage {
data: any={
};
    public items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http1: HttpClient, public alertCtrl: AlertController,public loadingCtrl: LoadingController,public storage: Storage) {
      this.storage.get('nombre').then((val) => {
          this.data.nombre= val +"";
      });
      this.storage.get('id').then((val) => {
          this.data.user_id= val +"";
      });
      this.loadDatos();

  }
    editusdep(){

      this.navCtrl.push("EditUsDepPage")
    }
    loadDatos(){
        let list:Observable<any>;
        list= this.http1.get('http://127.0.0.1/nuev/listado.php');
        list.subscribe(result=>{this.items= result})
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: '¿Eliminar usuario?',
            message: '¿Realmente desea eliminar usuario?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: () => {
                        console.log('Agree clicked');
                        let loader = this.loadingCtrl.create({
                            content: "Espere un momento...",
                            duration: 3000
                        });
                        loader.present();
                    }
                }
            ]
        });
        confirm.present();
    }
    adminusuarios(){
        this.navCtrl.push("AdminusuariosPage");
    }
    inicio(){
        this.navCtrl.push("InicioPage")
    }
    agrcamps(){
        this.navCtrl.push("AgrcampsPage")
    }
    avances(){
        this.navCtrl.push("AvancesPage")
    }
    insesion(){
        this.navCtrl.push("UsprincipalPage")
    }
    usdependient(){
        this.navCtrl.push("UsdependientePage")
    }
    guiat(){
        this.navCtrl.push("GuiatPage")
    }
    deletro(){
      this.navCtrl.push("DeletreopPage")
    }
    conte(){
        this.navCtrl.push("ContcampsPage")
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsdependientePage');
  }

}
