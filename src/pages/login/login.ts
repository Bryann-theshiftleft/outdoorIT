import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') uname;
	@ViewChild('password') pword;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  alert(message: string) {
  	this.alertCtrl.create({
		title: 'Login Details',
		subTitle: message,
		buttons: ['OK']  		
  	}).present();
  }

  signIn() {
  	console.log(this.uname.value, this.pword.value);
  	this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pword.value)
  	.then(data => {
  		console.log('got some data', data);
  		this.alert('Success! You are now logged in');
  		this.navCtrl.setRoot( TabsPage );
  		//user has login
  	})
  	.catch (error => {
  		console.log('got some error', error);
  		this.alert(error.message);
  		//error login
  	})

  	/*if(this.uname.value == 'admin' && this.pword.value == 'abc123') {
	    const alert = this.alertCtrl.create({
	      title: 'New Friend!',
	      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
	      buttons: ['OK']
	    });
	    alert.present();
  	}*/
  }

  signUp() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
