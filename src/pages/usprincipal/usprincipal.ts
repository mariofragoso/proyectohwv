import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs/Observable";

/**
 * Generated class for the UsprincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usprincipal',
  templateUrl: 'usprincipal.html',
})
export class UsprincipalPage {
public items: any;
data: any ={};
data1: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public http: Http, public http1:HttpClient) {
    this.storage.get('nombre').then((val) => {
         this.data.nombre= val +"";
        console.log(val);

    });
      this.storage.get('id').then((val) => {
          this.data.user_id= val +"";
      });
     this.loadDatos();
  }
  loadDatos(){
    let list:Observable<any>;
    list= this.http1.get('http://127.0.0.1/nuev/listado.php');
    list.subscribe(result=>{this.items= result})
  }
  /*
  loadDatos(){
      let url1 = "http://127.0.0.1:8080/hands/datos.php";
      this.data.option1= "datos";
      let myData1 = JSON.stringify({
          user_id: this.data.user_id,
          option: this.data.option1
      });
      this.http.post(url1, myData1).subscribe(result=> {
          this.data.response = result['_body'];
      }, error => {
          console.log(error);
      });
  }*/
  isSelectedItem(item:string){
    console.log(item);
  }

    editusprinc(){
        this.navCtrl.push("EditUsprincPage")

    }
    agrusdep(){
    this.navCtrl.push("AdminusuariosPage")
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

    editdependient(item) {
        //console.log("Usted seleciono",item);
        let myData = JSON.stringify(item);
        var obj = JSON.parse(myData);
       // this.storage.set('id1',obj.id);
        console.log("usted seleciono" ,obj.id,"usted seleciono",obj.nombre,"usted seleciono" ,obj.apellidos,"usted seleciono" ,obj.edad,"usted seleciono" ,obj.sexo);
        this.storage.set('nombres',obj.nombre);
        this.storage.set('ids',obj.id);
        this.storage.set('apellidoss',obj.apellidos);
        this.storage.set('edads',obj.edad);
        this.storage.set('sexos',obj.sexo);
        this.storage.get('nombres').then((val) => {
            console.log(val);
        });
        this.navCtrl.push("UsdependientePage");

    }


    guiat(){
    this.navCtrl.push("GuiatPage")
    }

    conte(){
        this.navCtrl.push("ContcampsPage")
    }

    logout(){
        this.navCtrl.setRoot("IsesionPage")
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsprincipalPage');
  }

}
