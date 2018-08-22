import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
    title: 'Register Details',
    subTitle: message,
    buttons: ['OK']      
    }).present();
  }  

  addUser() {
  	console.log(this.uname.value, this.pword.value);
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.pword.value)
    .then(data => {
      console.log('got some data', data);
      this.alert('Registered!');
      this.navCtrl.setRoot( LoginPage );
    })
    .catch (error => {
      console.log('got some error', error);
      this.alert(error.message);
      //error login
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
