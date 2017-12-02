import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TipoPage } from '../pages/tipoderegistro/tipoderegistro';
import { RegistropasajeroPage } from '../pages/registropasajero/registropasajero';
import { RegistroconductorPage } from '../pages/registroconductor/registroconductor';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBoQN9vrAMaO8zFWejyYPLuFAPxd_hrMm0",
  authDomain: "miride-4f122.firebaseapp.com",
  databaseURL: "https://miride-4f122.firebaseio.com",
  projectId: "miride-4f122",
  storageBucket: "miride-4f122.appspot.com",
  messagingSenderId: "479484969123"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    RegistrarPage,
    TipoPage,
    RegistropasajeroPage,
    RegistroconductorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    RegistrarPage,
    TipoPage,
    RegistropasajeroPage,
    RegistroconductorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
