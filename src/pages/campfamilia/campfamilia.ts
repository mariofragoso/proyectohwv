import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CampfamiliaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campfamilia',
  templateUrl: 'campfamilia.html',
})
export class CampfamiliaPage {
    public base64Image : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private camera: Camera) {
  }
    contcamp(){
      this.navCtrl.push("ContcampsPage")
    }

  selectgc() {
      let alert = this.alertCtrl.create({
          title: 'Agregar imagen de',
          buttons : [
              {
                  text: 'Galería',
                  role: 'cancel',
                  handler: () => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Cámara',
                  handler: () => {
                      console.log('Buy clicked');
                  }
              }
          ]
      });
      alert.present();
  }
    takePicture(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampfamiliaPage');
  }

}
