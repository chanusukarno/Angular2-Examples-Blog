import {Component, OnInit} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {UserValidators} from "./user.validators";
import {CanDeactivate, Router, RouteParams} from "angular2/router";
import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
    templateUrl: 'app/src/components/users/user-form.template.html',
    providers: [UsersService]
})
export class UserFormComponent implements OnInit, CanDeactivate {

    form:ControlGroup;
    user = new User();
    title:string;
    id;

    constructor(fb:FormBuilder,
                private _userService:UsersService,
                private _router:Router,
                private _routeParams:RouteParams) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([UserValidators.validEmail])],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {
        this.id = this._routeParams.get('id');

        if (this.id) {
            this.title = 'Edit User';
            // edit
            this._userService.getUser(this.id).subscribe(res => {
                console.log(res);
                this.user = res;
            }, err => {
                console.log(err);
                if (err.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            })
        } else {
            this.title = 'New User';
        }

    }

    save() {
        console.log(this.form.value);
        if (this.user.id) {
            // update
            this._userService.updateUser(this.user).subscribe(res => {
                console.log(res);
                // Ideally, here we'd want:
                // this.form.markAsPristine();
                this._router.navigate(['Users']);
            });
        } else {
            // add new
            this._userService.addUser(this.user).subscribe(res => {
                console.log(res);
                // Ideally, here we'd want:
                // this.form.markAsPristine();
                this._router.navigate(['Users']);
            });
        }
    }

    routerCanDeactivate() {
        if (this.form.dirty) {
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;

    }

}