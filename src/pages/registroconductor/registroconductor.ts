import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Register } from '../../models/register';

@IonicPage()
@Component({
  selector: 'page-registroconductor',
  templateUrl: 'registroconductor.html',
})
export class RegistroconductorPage {

  register = {} as Register;

  constructor(private afDB: AngularFireDatabase, private ofAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async registrar(register: Register){
    try{
        const resultado = await this.ofAuth.auth.createUserWithEmailAndPassword(register.email, register.password);
        //const datos = await this.afDB.database.ref('sitios/'+this.auth.getUser()+'/'+sitio.id).set(sitio);
        console.log(resultado);
    }catch (e){
      console.error(e);
    }
    //this.navCtrl.push(Login);
  }

  login(){
    this.navCtrl.push(Login);
  }

}
