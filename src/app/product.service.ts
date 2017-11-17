import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/Http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
