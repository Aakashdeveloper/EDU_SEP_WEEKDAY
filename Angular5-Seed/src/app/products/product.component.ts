import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product.component.html',
    // styles : ['thead{color:red}', 'h3{color:green}'],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = 'Product List';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterData: String;
    imageWidth: Number = 50;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    // using Observable
    /*ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }*/

    // Using Promise
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(message: string): void {
        this.title = '******Product List >>>>>>' + message;
    }
}






/*

string
number
boolean


one way binding
------data {{}}
------property []
------event ()
two way binding [()]

*/

