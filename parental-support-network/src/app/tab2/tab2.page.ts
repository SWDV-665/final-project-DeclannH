import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  itemName = ""

  items = [
    "mixed - small wet and medium solids",
   
   ]

   itemCount = 1

   public removeItem(index:number){
    let id =this.items[index]
    let newArray = this.items.filter((e, i) => i !== index);
    this.items = newArray
  
    this.itemCount -= 1
  }

  async updateItem(index:number) {
    let alert = await this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your task to update.',
      inputs: [{ name: 'editItem', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {  
                  this.items[index] = data.editItem; }}]
    });
  await alert.present();
  }


  addItem() {
    if (this.itemName.length > 0) {
      let item = this.itemName;
      this.items.push(item);
      this.itemName = "";
  
    }
  }

 takePicture = async () => {
  
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
   // imageElement.src = imageUrl;
  };
  





}
