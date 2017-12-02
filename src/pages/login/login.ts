import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrarPage } from '../registrar/registrar';
import { TipoPage } from '../tipoderegistro/tipoderegistro';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  user = {} as User;

  constructor(public alertCtrl: AlertController, private ofAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(mensaje: string){
    this.alertCtrl.create({
      title: mensaje,
      buttons: ['OK']
    }).present();
  }
  async login(user: User){
    try{
        const resultado = await this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        console.log(resultado);
        if (resultado.email != null){
          this.alert('Bienvenido');
          this.navCtrl.setRoot(HomePage);
        }
    }catch (e){
      console.error(e);
      if(e.code = 'auth/wrong-password'){
        this.alert(e.message);
      }else if(e.code = 'auth/user-not-found'){
        this.alert(e.message);
      }

    }

  }

  registra(){
    this.navCtrl.push(TipoPage);
  }

  olvido(){
    this.navCtrl.push(HomePage);
  }



}
