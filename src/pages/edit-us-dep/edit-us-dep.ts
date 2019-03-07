import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage} from "@ionic/storage";
import {Http} from "@angular/http";


/**
 * Generated class for the EditUsDepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-us-dep',
  templateUrl: 'edit-us-dep.html',
})
export class EditUsDepPage {

    data: any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public alertCtrl: AlertController,public http: Http) {
      this.storage.get('nombres').then((val) => {
          this.data.user_name= val +"";
      });
      this.storage.get('ids').then((val) => {
          this.data.user_id= val +"";
      });
      this.storage.get('apellidoss').then((val) => {
          this.data.user_lastname= val +"";
      });
      this.storage.get('edads').then((val) => {
          this.data.user_age= val +"";
      });
      this.storage.get('sexos').then((val) => {
          this.data.user_sexo= val +"";
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUsDepPage');
  }
    usdependiente(){
        let url = "http://127.0.0.1/hands/editarD.php";
        this.data.option = 'editar';
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
                this.navCtrl.push("UsdependientePage")
                let alert = this.alertCtrl.create({
                    title: 'se han guardado los cambios ',
                    subTitle: '',
                    buttons: ['OK']
                });
                alert.present();
            }

        }, error => {
            console.log(error);
        });
    }

}
