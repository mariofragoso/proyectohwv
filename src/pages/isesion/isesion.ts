import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the IsesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-isesion',
  templateUrl: 'isesion.html',
})
export class IsesionPage {
  data:any = {

  };
    isActiveToggleTextPassword: Boolean = true;
    public toggleTextPassword(): void{
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
    }
    public getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    }

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl: AlertController,public storage: Storage) {
    this.data.user_email = "";
    this.data.user_password = "";
    this.data.option = "";
    this.data.response = "";
    this.http = http;
  }

    crcuenta(){
        this.navCtrl.push("CcuentaPage");
    }

    recupcontra(){
    this.navCtrl.push("RecupcontraseñaPage");
    }
  usuario: any;
    uprincipal() {
       // this.navCtrl.push("UsprincipalPage");
        let url = "http://127.0.0.1/hands/index.php";
        this.data.option = 'login';
        let myData = JSON.stringify({user_email: this.data.user_email, user_password: this.data.user_password, option: this.data.option});
        this.http.post(url, myData).subscribe(data => {
            this.data.response = data['_body'];
            let r = JSON.parse(this.data.response);
            this.usuario=r;
            //console.log(this.usuario);
            if (r.success === true) {
                this.navCtrl.push("UsprincipalPage");
              this.storage.set('nombre', this.usuario.user.user_data[0].Nombre);
              this.storage.set('apellidos', this.usuario.user.user_data[0].Apellidos);
              this.storage.set('id', this.usuario.user.user_data[0].id);
               this.storage.set('edad', this.usuario.user.user_data[0].Edad);
               this.storage.set('sexo', this.usuario.user.user_data[0].Sexo);
               this.storage.set('usuario', this.usuario.user.user_data[0].Usuario);
               this.storage.set('email', this.usuario.user.user_data[0].Correo_electronico);
               this.storage.set('pass', this.usuario.user.user_data[0].Contrasena);


            }else {
                let alert = this.alertCtrl.create({
                    title: 'Datos incorrectos',
                    subTitle: 'Verifica tus datos',
                    buttons: ['OK']
                });
                alert.present();
            }
        }, error => {
            console.log(error);
        });
        this.data.user_email = "";
        this.data.user_password = "";
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IsesionPage');
  }



}
