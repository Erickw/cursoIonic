import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url: string = 'https://jsonplaceholder.typicode.com/users';
  public items: Array<{}>;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.items = data;
        console.log(data);
      });

  }

  goToTestPage() {
    this.navCtrl.push(TestPage);
  }

}
