import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
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
}
