import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes;
  cakes = [];
  ratings = [];
  showCake = {};
  newCake: any;

  constructor(private _httpService: HttpService) {}
  cakesFromService(): void {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log('Look at my cakes', data);
      this.cakes = data['data'];
    });
  }

  showCake(id: string) {
    const observable = this._httpService.showCake(id);
    observable.subscribe(data => this.showCake = data['data']);
  }

  addCake(id: string) {
    const observable = this._httpService.addCakes(this.newCake);
    observable.subscribe(data => {
      console.log('new cake', data);
      this.newCake = {baker: '', img: ''};
      this.cakesFromService();
    });
  }

  addRating(id: string) {
    const observable = this._httpService.addRating(this.showCake);
    observable.subscribe(data => {
      console.log('adding rating', data);
      // this.showCake = {rating: '', img: ''};
      this.ratings = data['data'];
    });
  }

  ngOnInit() {
    this.newCake = { baker: '', img: '' };
  }

}
