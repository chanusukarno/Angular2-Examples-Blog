import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import 'rxjs/add/operator/map';
import {User} from "./user";

@Injectable()
export class UsersService {

    private _userUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http:Http) {
    }

    getUsers() {
        return this._http.get(this._userUrl).map(res => res.json());
    }

    addUser(user) {
        return this._http.post(this._userUrl, JSON.stringify(user)).map(res => res.json());
    }

    getUser(id) {
        return this._http.get(this.get_userUrl(id)).map(res => res.json());
    }

    updateUser(user:User) {
        return this._http.put(this.get_userUrl(user.id), JSON.stringify(user)).map(res => res.json());
    }

    deleteUser(user: User) {
        return this._http.delete(this.get_userUrl(user.id)).map(res => res.json());
    }

    private get_userUrl(userId) {
        return this._userUrl + "/" + userId;
    }

}