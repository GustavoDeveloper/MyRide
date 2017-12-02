import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { storage } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Register } from '../../models/register';

@IonicPage()
@Component({
  selector: 'page-registropasajero',
  templateUrl: 'registropasajero.html',
})
export class RegistropasajeroPage {

  register = {} as Register;

  constructor(public alertCtrl: AlertController, private afDB: AngularFireDatabase, private ofAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(mensaje: string){
    this.alertCtrl.create({
      title: mensaje,
      buttons: ['OK']
    }).present();
  }

  async registrar(register: Register){
    try{
        const registro = await this.ofAuth.auth.createUserWithEmailAndPassword(register.email, register.password);
        const datos = await this.afDB.database.ref('Cuenta/'+this.ofAuth.auth.currentUser.uid).push({
                    TipoUsuario: 'Pasajero',
                    Img: 'ubicacion.png',
										Nombre1: register.nom1,
										Apellido1: register.ape1,
										NombreUsuario: register.name,
										Email: register.email,
										Celular: register.numero,
                    FechaCreacion: Date()
									});
        //const login = await this.ofAuth.auth.signInWithEmailAndPassword(register.email, register.password);
        //const img = await storage().ref('userImg/').putString('assets/imgs/ubicacion.png')
        this.alert('Bienvenido');
        this.navCtrl.setRoot(HomePage);
    }catch (e){
      console.error(e);
    }
    //this.navCtrl.push(Login);
  }

  login(){
    this.navCtrl.push(Login);
  }
}
