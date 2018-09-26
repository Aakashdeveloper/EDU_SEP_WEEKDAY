
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs/Observable';
// Ang6 ==> import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from '../../../node_modules/rxjs/operator/map';
// Ang6=>  import { map } from 'rxjs/operators';

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private __http: HttpClient) {}


    // Observable with Httpclient
    getProducts(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }
    // Observablw with HTTP
    /*getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .map((response: Response) => response.json());
    }*/


    // Angular6
    /*
    private extractData(res: Response) {
        return res.json();
    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
    }
    */

    // Promises
    /*
    getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
                .toPromise()
                .then(res => res.json());
    }
    */

}



/*
http
httpclient

observable
promises
*/

