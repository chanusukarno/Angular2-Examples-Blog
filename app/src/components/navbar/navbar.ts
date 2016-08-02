import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: 'navbar',
    templateUrl: '/app/src/components/navbar/navbar.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {

    constructor(private _router:Router) {}

    isCurrentRoute(route) {
        return this._router.isRouteActive(this._router.generate(route));
    }

}