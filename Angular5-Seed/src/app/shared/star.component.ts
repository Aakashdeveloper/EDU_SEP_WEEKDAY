import { Component, OnChanges, Input,
         Output, EventEmitter} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: [ './star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked:  EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}


/*

var a = 10;
var b = "my age is "+a
let b = `my age is ${a}`

86/5*3.5

function add(a,b){
    return a+b
}

var sum = add(1,2)


*/
