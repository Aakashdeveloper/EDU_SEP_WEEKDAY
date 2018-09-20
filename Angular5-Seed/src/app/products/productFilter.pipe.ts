import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'myproductFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string): IProduct[] {
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(userInput) !== -1) : value;
    }
}

