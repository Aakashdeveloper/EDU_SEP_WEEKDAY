import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCase'
})

export class MycasePipe implements PipeTransform {
    transform(value: string, kind: string) {
        if ( kind === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
