import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage} from "@ionic/storage";
import {Http} from "@angular/http";

/**
 * Generated class for the EditUsprincPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-usprinc',
  templateUrl: 'edit-usprinc.html',
})
export class EditUsprincPage {

    data: any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public alertCtrl: AlertController,public http: Http) {
      this.storage.get('nombre').then((val) => {
          this.data.user_name= val +"";
      });
      this.storage.get('id').then((val) => {
          this.data.user_id= val +"";
      });
      this.storage.get('apellidos').then((val) => {
          this.data.user_lastname= val +"";
      });
      this.storage.get('edad').then((val) => {
          this.data.user_age= val +"";
      });
      this.storage.get('sexo').then((val) => {
          this.data.user_sexo= val +"";
      });
      this.storage.get('email').then((val) => {
          this.data.user_email= val +"";
      });
      this.storage.get('pass').then((val) => {
          this.data.user_pass= val +"";
      });
      this.storage.get('usuario').then((val) => {
          this.data.user_nuser= val +"";
      });
  }
    usuario:any;

    Usprincipal() {
        let url ="http://127.0.0.1/hands/editarP.php";
        this.data.option = 'cambio';
        let myData = JSON.stringify({
            user_id: this.data.user_id,
            user_name: this.data.user_name,
            user_lastname: this.data.user_lastname,
            user_age: this.data.user_age,
            user_sexo: this.data.user_sexo,
            user_nuser: this.data.user_nuser,
            user_email: this.data.user_email,
            user_pass: this.data.user_pass,
            option: this.data.option
        });
        this.http.post(url, myData).subscribe(data => {
            this.data.response = data['_body'];
            let r = JSON.parse(this.data.response);
            this.usuario=r;
            if (r.success === true) {
                this.storage.set('nombre', this.data.user_name);
                this.navCtrl.push("UsprincipalPage");
                let alert = this.alertCtrl.create({
                    title: 'Se han guardado los cambios ',
                    buttons: ['OK']
                });
                alert.present();
            }

        }, error => {
            console.log(error);
        });


    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUsprincPage');
  }

}
