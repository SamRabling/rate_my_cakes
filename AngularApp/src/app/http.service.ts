import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  this.getCakes();
  }
  getCakes() {
    return this._http.get('/cakes');
  }

  oneCake(id: string) {
    return this._http.get(`/cakes/${id}`);
  }

  addCakes(newCake) {
    return this._http.post('/cakes', newCake);
  }

  addRating(newRating) {
    return this._http.post(`/cakes/$${newRating._id}`, newRating);
  }
}
