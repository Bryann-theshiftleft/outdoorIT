var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(fire, navCtrl, navParams, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Login Details',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        console.log(this.uname.value, this.pword.value);
        this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pword.value)
            .then(function (data) {
            console.log('got some data', data);
            _this.alert('Success! You are now logged in');
            _this.navCtrl.setRoot(HomePage);
            //user has login
        })
            .catch(function (error) {
            console.log('got some error', error);
            _this.alert(error.message);
            //error login
        });
        /*if(this.uname.value == 'admin' && this.pword.value == 'abc123') {
            const alert = this.alertCtrl.create({
              title: 'New Friend!',
              subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
              buttons: ['OK']
            });
            alert.present();
        }*/
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    __decorate([
        ViewChild('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uname", void 0);
    __decorate([
        ViewChild('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "pword", void 0);
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [AngularFireAuth, NavController, NavParams, AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map