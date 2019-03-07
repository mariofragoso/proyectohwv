import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the RecupcontraseñaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recupcontraseña',
  templateUrl: 'recupcontraseña.html',
})
export class RecupcontraseñaPage {
    data:any = {

    };

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl: AlertController) {
      this.data.user_email = "";
      this.data.option = "";
      this.data.response = "";
      this.http = http;
  }
    RecContra() {
       /* let url = "http://127.0.0.1:8080/hands/index.php";
        this.data.option = 'login';
        let myData = JSON.stringify({user_email: this.data.user_email, option: this.data.option});
        this.http.post(url, myData).subscribe(data => {
            this.data.response = data['_body'];
            let r = JSON.parse(this.data.response);
            if (r.success === true) {
                let alert = this.alertCtrl.create({
                    title: 'Contraseña enviada',
                    subTitle: 'Revisa tu correo electrónico',
                    buttons: ['OK']

                });
                alert.present();
            }else {
                let alert = this.alertCtrl.create({
                    title: 'Datos incorrectos',
                    subTitle: 'Verifica tus datos',
                    buttons: ['OK']
                });
                alert.present();
            }

        }, error => {
            this.data.user_email = "";
            this.data.user_password = "";
            console.log(error);

        });*/


        let alert = this.alertCtrl.create({
            title: 'Contraseña enviada',
            subTitle: 'Revisa tu correo electrónico',
            buttons: ['OK']

        });
        alert.present();

    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RecupcontraseñaPage');
  }

}
