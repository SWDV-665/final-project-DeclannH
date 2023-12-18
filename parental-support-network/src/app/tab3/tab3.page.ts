import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  items = ["Dr. Lewandowski" , 
          "Lansing Pediatrics",
         "517-332-9674"]


  async update() {
    let alert = await this.alertCtrl.create({
      header: 'Update Pediatrician?',
      inputs: [{ name: 'pediatrician', placeholder: 'Pediatrician' },
                 {name: "practice", placeholder: 'practice'},
                {name: 'phone', placeholder: 'Phone Number'}],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {  
                  this.items[0] = data.pediatrician; 
                  this.items[1] = data.practice; 
                  this.items[2] = data.phone; 
                
                }}]
    });
  await alert.present();
  }

}
