import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  showMeCakes() {
    return this._http.get('/cakes');
  }

  oneCake(id: string) {
    return this._http.get(`/cakes/${id}`);
  }

  addCakes(newCake) {
    return this._http.post('/cakes', newCake);
  }

  addRating(id: string, newRating) {
    console.log(id);
    return this._http.post(`/cakes/${id}`, newRating);

  }
}
