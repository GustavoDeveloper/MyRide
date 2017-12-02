import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../login/login';
import { RegistropasajeroPage } from '../registropasajero/registropasajero';
import { RegistroconductorPage } from '../registroconductor/registroconductor';
import { RegistrarPage } from '../registrar/registrar';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-tipo',
  templateUrl: 'tipoderegistro.html'
})
export class TipoPage {

  constructor(public navCtrl: NavController) {

  }

  volver(){
    this.navCtrl.push(Login);
  }

  pasajero(){
    this.navCtrl.push(RegistropasajeroPage);
  }

  conductor(){
    this.navCtrl.push(RegistroconductorPage);
  }
}
