import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public item: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http) {

    let url = this.navParams.get('api_url');
    let item_id = this.navParams.get('item_id');

    this.http.get(url + "users/" + item_id)
    .map(res => res.json())
    .subscribe(data => {   
      this.item = data;   
      console.log(data);
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
