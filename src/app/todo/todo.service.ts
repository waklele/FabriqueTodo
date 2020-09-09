import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

const KEY_DATA_TODO = "dataTodo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  listDataTodo: any = [];

  constructor(
    public storage: Storage,
    public toastController: ToastController
  ) { }

  async showMessage(textPesan) {
    const toast = await this.toastController.create({
      message: textPesan,
      duration: 2000
    });
    toast.present();
  }
  simpanData(tempData) {
    this.listDataTodo.push(tempData);
    this.storage.set(KEY_DATA_TODO,
      JSON.stringify(this.listDataTodo));
  }
  ambilData() {
    this.storage.get(KEY_DATA_TODO).then((data) => {
      if (data != null) {
        this.listDataTodo = JSON.parse(data);
        console.log(this.listDataTodo);
      } else {
        this.listDataTodo = [];
        console.log('empty');
      }
    })
  }

  hapusData(item) {
    var temp = this.listDataTodo.indexOf(item);
    this.listDataTodo.splice(temp, 1);
    this.storage.set(KEY_DATA_TODO,
      JSON.stringify(this.listDataTodo));
  }

  hapusSemuaData() {
    this.storage.remove(KEY_DATA_TODO);
    this.listDataTodo = [];
  }
}
