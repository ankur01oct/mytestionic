import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';
import { BatteryStatus } from '../../../node_modules/@ionic-native/battery-status';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(private socialSharing: SocialSharing, 
              private batteryStatus: BatteryStatus,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  onShare(){
    


// // Check if sharing via email is supported
// this.socialSharing.canShareViaEmail().then(() => {
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
// });

// // Share via email
// this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
//   // Success!
// }).catch(() => {
//   // Error!
// });
//   }

    this.socialSharing.shareViaWhatsApp("hello this is test msg",null,null).then(
      ()=>console.log('success')
    ).catch(
      (err)=>console.log(err)
      
    )
  }

  presentToast(level, pluggedin) {
    let toast = this.toastCtrl.create({
      message: `Battery Level is : ${level} and plugged in is ${pluggedin}`,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  onBatteryStatus(){
    console.log("in battery")
    const subscription = this.batteryStatus.onChange().subscribe(status => {
    console.log("in battery function")

     this.presentToast(status.level, status.isPlugged);
     console.log(status.level, status.isPlugged)
   },
   (err)=>{
    this.presentToast(err,"error")
   }
 
  );
   
   // stop watch
  subscription.unsubscribe();
  }
}
