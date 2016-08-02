import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    private _postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http:Http) {
    }

    getPosts(filter?) {
        var url = this._postsUrl;
        (filter && filter.userId) ? (url += "?userId=" + filter.userId) : '';

        return this._http.get(url).map(res => res.json());
    }

    getPostComments(id) {
        return this._http.get(this._postsUrl + '/' + id + '/comments').map(res => res.json());
    }

}