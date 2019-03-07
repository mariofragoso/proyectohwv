import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingController } from 'ionic-angular';
import {Http} from "@angular/http";


 @IonicPage()
 @Component({
  selector: 'page-ccuenta',
  templateUrl: 'ccuenta.html',
})
 export class CcuentaPage {
     //Verifica que la contreaseñas sean iguales
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let passwords = group.controls[confirmPasswordKey];

            if (password.value !== passwords.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

    myForm: FormGroup;

     data:any = {

     };
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public formBuilder: FormBuilder,
                public http:Http
    ) {
        this.myForm = this.createMyForm();
        this.data.user_name="";
        this.data.user_lastame="";
        this.data.user_age="";
        this.data.user_sexo="";
        this.data.user_nuser="";
        this.data.user_email="";
        this.data.user_pass="";
        this.data.option = "";
        this.data.response = "";
        this.http = http;
    }

    saveData() {
        console.log(this.myForm.value);
    }

     private createMyForm() {
         return this.formBuilder.group({
             name: ['',[ Validators.required,Validators.maxLength(45),Validators.pattern(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú])/)]],
             lastName: ['', [Validators.required,Validators.maxLength(45),Validators.pattern(/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/)]],
             age: ['', [Validators.required,Validators.minLength(0),Validators.maxLength(2)]],
             sexo: ['', [Validators.required]],
             nombredeusuario: ['', [Validators.required,Validators.maxLength(45)]],
             email: ['', [Validators.required,Validators.email]],
             password: ['',[ Validators.required,Validators.pattern(/^[a-z0-9_-]{8,18}$/)]],
             passwords: ['',[ Validators.required,Validators.pattern(/^[a-z0-9_-]{8,18}$/)]],
             // terminos: [false, [Validators.required]]

         }, {validator: this.matchingPasswords('password', 'passwords')});

     }
    insesion() {
        this.navCtrl.push("IsesionPage")

    }
usuario:any;
    pprimerospasos() {
        let url = "http://127.0.0.1/hands/registro.php";
        this.data.option = 'register';
        let myData = JSON.stringify({
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
                this.navCtrl.push("IsesionPage",{
                    datos: this.usuario
                });
                let alert = this.alertCtrl.create({
                    title: 'Bienvenido ',
                    //subTitle: 'Coloque sus datos',
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
        this.data.user_nuser="";
        this.data.user_email="";
        this.data.user_pass="";
        /* this.navCtrl.push("InicioPage")
         let alert = this.alertCtrl.create({
             title: 'Cuenta creada',
             subTitle: '',
             buttons: ['OK']
         });
         alert.present();*/


    }
      ionViewDidLoad() {
    console.log('ionViewDidLoad CcuentaPage');
  }
}
