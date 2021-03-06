System.register(['angular2/core', "./posts.service", "../spinner/spinner.component", "../details/details.component", "../users/users.service", "../pagination/pagination.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1, spinner_component_1, details_component_1, users_service_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (details_component_1_1) {
                details_component_1 = details_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.allPosts = [];
                    this.posts = [];
                    this.users = [];
                    this.currentPost = null;
                    this.page = 1;
                    this.perPage = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._usersService.getUsers().subscribe(function (res) {
                        console.log(res);
                        _this.users = res;
                    });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.isPostsLoading = true;
                    this._postsService.getPosts(filter).subscribe(function (res) {
                        console.log(res);
                        _this.allPosts = res;
                        // this.posts = this.getPostsInPage(1, this.perPage);
                        _this.posts = _.take(_this.allPosts, _this.perPage);
                    }, null, function () { return _this.isPostsLoading = false; });
                };
                PostsComponent.prototype.getPostsInPage = function (page, size) {
                    var startIndex = (page - 1) * size;
                    var endIndex = Math.min(page * size, this.allPosts.length);
                    return this.allPosts.slice(startIndex, endIndex);
                };
                PostsComponent.prototype.pageChanged = function (page) {
                    // this.posts = this.getPostsInPage(page, this.perPage);
                    var startIndex = (page - 1) * this.perPage;
                    this.posts = _.take(_.rest(this.allPosts, startIndex), this.perPage);
                };
                PostsComponent.prototype.filterChange = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.onPostSelect = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this.isCommentsLoading = true;
                    this._postsService.getPostComments(post.id).subscribe(function (res) {
                        _this.currentPost.comments = res;
                    }, null, function () { return _this.isCommentsLoading = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/src/components/posts/posts.template.html',
                        styleUrls: ['app/src/components/posts/posts.style.css'],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        directives: [spinner_component_1.SpinnerComponent, details_component_1.DetailsComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map