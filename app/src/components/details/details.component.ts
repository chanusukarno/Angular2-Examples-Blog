import {Component, Input} from 'angular2/core';

@Component({
    selector: 'post-detail',
    templateUrl: '/app/src/components/details/details.template.html'
})
export class DetailsComponent {
    
    @Input() post;


}