import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';


@Component({
    templateUrl: './product_detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    title: string;
    id: Number;
    name: String;
    description: String;
    image: String;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _ProductService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this.title = 'Product id is >>>>' + this.id;

        /*this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.description = params['desc'];
                this.image = params['img'];
            });
        */
       this._ProductService.getProductDetails(this.id)
            .subscribe((data) => this.details = data );


    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
