import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembersPage } from '../members/members';
import { LoginPage } from '../login/login';
import { ActivityPage } from '../activity/activity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openMembersPage() {
  	this.navCtrl.push(MembersPage);
  }

  openLoginPage() {
  	this.navCtrl.push(LoginPage);
  }

  openActivityPage() {
  	this.navCtrl.push(ActivityPage);
  }

}