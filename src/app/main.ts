import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

console.log('alive!');

document.getElementById('testDiv').innerHTML = '<p style="font-size: 20">TEST</p>';

const statusBar = new StatusBar();
const platform = new Platform();
const splashScreen = new SplashScreen();

platform.ready().then(() => {
  statusBar.styleDefault();
  splashScreen.show();
})