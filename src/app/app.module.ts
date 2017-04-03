import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MuseChordsMain } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ChordList} from "../pages/chordList/chordList";

@NgModule({
  declarations: [
    MuseChordsMain,
    ChordList
  ],
  imports: [
    IonicModule.forRoot(MuseChordsMain)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChordList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
