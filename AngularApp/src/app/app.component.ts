import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes = [];
  showCake = {};
  newCake: any;
  errors =  null;

  constructor(private _httpService: HttpService) {}

  showMeCakes() {
    const observable = this._httpService.showMeCakes();
    observable.subscribe(data => {
      console.log('Look at my cakes', data);
      this.cakes = data['data'];
    });
  }

  oneCake(id: string) {
    const observable = this._httpService.oneCake(id);
    observable.subscribe(data => this.showCake = data['data']);
    // code for showing rating
  }

  addCake() {
    const observable = this._httpService.addCakes(this.newCake);
    observable.subscribe(data => {
      console.log('new cake', data);
      this.newCake = {baker: '', img: ''};
      this.showMeCakes();
    });
  }

  addRating(id: string, cakeForm) {
    const review = {
      rating: cakeForm.controls['rating']['value'],
      comment: cakeForm.controls['comment']['value']
    };
    this._httpService.addRating(id, review).subscribe( data => {
      this.showMeCakes();
    });
    console.log(cakeForm.controls['comment']['value']);
  }

  ngOnInit() {
    this.showMeCakes();
  }

}
