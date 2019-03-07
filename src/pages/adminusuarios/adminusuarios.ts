import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AdminusuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminusuarios',
  templateUrl: 'adminusuarios.html',
})
export class AdminusuariosPage {
    data:any = {

    };

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public http: Http ,public storage: Storage) {
      this.data.user_name="";
      this.data.user_lastame="";
      this.data.user_age="";
      this.data.user_sexo="";
      this.data.option = "";
      this.data.response = "";
      this.http = http;
      this.storage.get('id').then((val) => {
          this.data.user_id= val +"";
      });
      /*  this.storage.get('id').then((val) => {
          this.data.user_id= val;
      });*/

  }
  usuario: any;
    usprincipal(){

        let url = "http://127.0.0.1/hands/dependiente.php";
        this.data.option = 'dependiente';
        let myData = JSON.stringify({
            user_name: this.data.user_name,
            user_lastname: this.data.user_lastname,
            user_age: this.data.user_age,
            user_sexo: this.data.user_sexo,
            user_id: this.data.user_id,
            option: this.data.option
        });
        this.http.post(url, myData).subscribe(data => {
            this.data.response = data['_body'];
            let r = JSON.parse(this.data.response);
            if (r.success === true) {
                this.navCtrl.push("UsprincipalPage");
                let alert = this.alertCtrl.create({
                    title: 'Has creado un usuario dependiente ',
                    subTitle: '',
                    buttons: ['OK']
                });
                alert.present();
            }

        }, error => {
            console.log(error);
        });


        this.data.user_name="";
        this.data.user_lastame="";
        this.data.user_age="";
        this.data.user_sexo="";


    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminusuariosPage');
  }


}
