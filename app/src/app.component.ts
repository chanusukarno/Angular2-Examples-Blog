import {Component} from 'angular2/core';
import {NavbarComponent} from "./components/navbar/navbar";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

import {HomeComponent} from "./components/home/home";
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UserFormComponent} from "./components/users/user-form.component";
import {NotFoundComponent} from "./not-found/not-found.component";

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent
    },
    {
        path: '/users/new',
        name: 'NewUser',
        component: UserFormComponent
    },
    {
        path: '/users/:id',
        name: 'EditUser',
        component: UserFormComponent
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFoundComponent
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsComponent
    },
    {
        path: '/*others',
        name: 'Others',
        redirectTo: ['Home']
    }
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/src/app.component.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}