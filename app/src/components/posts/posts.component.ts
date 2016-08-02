import {Component, OnInit} from 'angular2/core';
import {PostsService} from "./posts.service";
import {SpinnerComponent} from "../spinner/spinner.component";
import {DetailsComponent} from "../details/details.component";
import {UsersService} from "../users/users.service";
import {PaginationComponent} from "../pagination/pagination.component";

@Component({
    selector: 'home',
    templateUrl: 'app/src/components/posts/posts.template.html',
    styleUrls: ['app/src/components/posts/posts.style.css'],
    providers: [PostsService, UsersService],
    directives: [SpinnerComponent, DetailsComponent, PaginationComponent]
})
export class PostsComponent implements OnInit {

    allPosts = [];
    posts = [];
    users = [];
    currentPost = null;
    isPostsLoading;
    isCommentsLoading;
    page = 1;
    perPage = 10;

    constructor(private _postsService:PostsService, private _usersService:UsersService) {

    }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }

    private loadUsers() {
        this._usersService.getUsers().subscribe(res => {
            console.log(res);
            this.users = res;
        });
    }

    private loadPosts(filter?) {
        this.isPostsLoading = true;
        this._postsService.getPosts(filter).subscribe(res => {
            console.log(res);
            this.allPosts = res;
            // this.posts = this.getPostsInPage(1, this.perPage);
            this.posts = _.take(this.allPosts, this.perPage);
        }, null, () => this.isPostsLoading = false);
    }

    private getPostsInPage(page, size) {
        var startIndex = (page - 1) * size;
        var endIndex = Math.min(page * size, this.allPosts.length);
        return this.allPosts.slice(startIndex, endIndex);
    }

    pageChanged(page) {
        // this.posts = this.getPostsInPage(page, this.perPage);
        var startIndex = (page - 1) * this.perPage;
        this.posts = _.take(_.rest(this.allPosts, startIndex), this.perPage);
    }

    filterChange(filter) {
        this.currentPost = null;
        this.loadPosts(filter);
    }

    onPostSelect(post) {
        this.currentPost = post;

        this.isCommentsLoading = true;
        this._postsService.getPostComments(post.id).subscribe(res => {
            this.currentPost.comments = res;
        }, null, () => this.isCommentsLoading = false);
    }
}