import {Component, OnInit} from 'angular2/core';
import {UsersService} from "./users.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'home',
    templateUrl: 'app/src/components/users/users.template.html',
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/src/components/users/users.style.css']
})
export class UsersComponent implements OnInit {
    users;

    constructor(private _userService:UsersService) {
    }

    ngOnInit() {
        this._userService.getUsers().subscribe(res => {
            console.log(res);
            this.users = res;
        });
    }

    deleteUser(user) {
        if (confirm('Are you sure you want to delete ' + user.name + '?')) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._userService.deleteUser(user).subscribe(res => {
                console.log(res);
            }, err => {
                console.log(err);
                this.users.splice(index, 0, user);
            })
        }
    }

}