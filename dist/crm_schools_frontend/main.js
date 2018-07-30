(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/auth/auth.module": [
		"./src/app/pages/auth/auth.module.ts",
		"pages-auth-auth-module"
	],
	"./pages/layout/dashboard/dashboard.module": [
		"./src/app/pages/layout/dashboard/dashboard.module.ts",
		"pages-layout-dashboard-dashboard-module"
	],
	"./pages/layout/home/home.module": [
		"./src/app/pages/layout/home/home.module.ts",
		"pages-layout-home-home-module"
	],
	"./pages/layout/permissions/permissions.module": [
		"./src/app/pages/layout/permissions/permissions.module.ts",
		"pages-layout-permissions-permissions-module"
	],
	"./pages/layout/program/program.module": [
		"./src/app/pages/layout/program/program.module.ts",
		"pages-layout-program-program-module"
	],
	"./pages/layout/school/school.module": [
		"./src/app/pages/layout/school/school.module.ts",
		"pages-layout-school-school-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/user/user.component */ "./src/app/layouts/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'auth',
        loadChildren: './pages/auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: 'home',
                loadChildren: './pages/layout/home/home.module#HomeModule'
            },
            {
                path: 'school',
                loadChildren: './pages/layout/school/school.module#SchoolModule'
            },
            {
                path: 'dashboard',
                loadChildren: './pages/layout/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'program',
                loadChildren: './pages/layout/program/program.module#ProgramModule'
            },
            {
                path: 'permissions',
                loadChildren: './pages/layout/permissions/permissions.module#PermissionsModule'
            },
            {
                path: '**',
                redirectTo: '/home'
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"beforeRoute()\"></router-outlet>\n<app-main-spinner></app-main-spinner>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @facades/permission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// @ngrx







var AppComponent = /** @class */ (function () {
    function AppComponent(router, authStore, authFacade) {
        var _this = this;
        this.router = router;
        this.authStore = authStore;
        this.authFacade = authFacade;
        this.authStore.subscribe(function (val) {
            var auth = val.auth;
            if (auth && auth.user) {
                _this.user = auth.user;
            }
        });
    }
    AppComponent.prototype.beforeRoute = function () {
        // this.router.navigate(['/auth/emailSent']);
        if (this.router.url === 'auth/login' || this.router.url === 'auth/register') {
            this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SignOut"](this.authFacade));
        }
        if (this.authFacade.pageNeedAuth() && !_facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_7__["PermissionFacade"].checkPermissionsToAccessPage(this.router.url.split('?')[0], this.user)) {
            if (_app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_5__["AuthFacade"].getAuthStatus()) {
                this.router.navigate(['/home']);
            }
            else {
                this.router.navigate(['/auth/login']);
            }
        }
        this.authFacade.checkAuthStatusAndRedirect();
        this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["RefreshAuthState"]());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_5__["AuthFacade"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: metaReducers, getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @layouts/user/user.component */ "./src/app/layouts/user/user.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _components_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/main-spinner/main-spinner.component */ "./src/app/components/main-spinner/main-spinner.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sharedModules/shared-module/shared-module.module */ "./src/app/shared-modules/shared-module/shared-module.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_interceptors_main_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/interceptors/main.interceptor */ "./src/app/services/interceptors/main.interceptor.ts");
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/interceptors/auth.interceptor */ "./src/app/services/interceptors/auth.interceptor.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @pages/layout/school/create-school/create-school.component */ "./src/app/pages/layout/school/create-school/create-school.component.ts");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @services/account/account.service */ "./src/app/services/account/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var metaReducers = _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
    ? []
    : []; // [storeFreeze]
function getAuthServiceConfigs() {
    var config = new angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthServiceConfig"]([
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"]('1067030930126580')
        },
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"]('546559305145-v5dcga0nvvcgst2vtl8ed3lvdhco5s3u.apps.googleusercontent.com')
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _components_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_9__["MainSpinnerComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_24__["MainMenuComponent"],
                _pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_25__["CreateSchoolComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["StoreRouterConnectingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"], { metaReducers: metaReducers }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
                    ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__["StoreDevtoolsModule"].instrument({ maxAge: 50 })
                    : [],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
                angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialLoginModule"],
            ],
            providers: [
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                _services_account_account_service__WEBPACK_IMPORTED_MODULE_27__["AccountService"],
                _services_school_school_service__WEBPACK_IMPORTED_MODULE_26__["SchoolService"],
                _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_23__["AuthFacade"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_main_interceptor__WEBPACK_IMPORTED_MODULE_16__["MainInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"], multi: true },
                { provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthServiceConfig"], useFactory: getAuthServiceConfigs },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_25__["CreateSchoolComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'components/dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"main-menu\">\n    <a [routerLink]=\"['/dashboard']\"><li class=\"inline_block\"><span>Dashboard</span></li></a>\n  <li class=\"inline_block\" *ngIf=\"checkPermission('Message')\"><span>Messages</span></li>\n  <li class=\"inline_block\" *ngIf=\"checkPermission('User')\"><span>Customers</span></li>\n  <a [routerLink]=\"['/permissions']\" *ngIf=\"checkPermission('Permission')\"><li class=\"inline_block\"><span>Permissions</span></li></a>\n  <li class=\"inline_block\" *ngIf=\"checkPermission('School')\"><span>Schools</span></li>\n  <a [routerLink]=\"['/program']\" *ngIf=\"checkPermission('Program')\"><li class=\"inline_block\"><span>Programs</span></li></a>\n  <li class=\"inline_block\" *ngIf=\"checkPermission('Membership')\"><span>Memberships</span></li>\n  <li class=\"inline_block\" *ngIf=\"checkPermission('Payment')\"><span>Payments</span></li>\n  <li class=\"inline_block\" *ngIf=\"checkPermission('Attendances')\"><span>Attendances</span></li>\n  <li class=\"inline_block\"><span>Curriculums</span></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n  :host .main-menu {\n    height: 100%;\n    margin: 0;\n    font-size: 14px; }\n  :host .main-menu a {\n      color: black; }\n  :host .main-menu li {\n      height: 100%;\n      padding: 0 19px; }\n  :host .main-menu li span {\n        position: relative;\n        top: 3px; }\n  :host .main-menu li:hover {\n        background-color: #fff; }\n"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @facades/permission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(authStore) {
        var _this = this;
        this.authStore = authStore;
        authStore.select('auth').subscribe(function (val) {
            if (val.user && val.user.permissions) {
                _this.permissions = val.user.permissions;
            }
        });
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.checkPermission = function (modelName, event, type) {
        if (event === void 0) { event = ''; }
        if (type === void 0) { type = ''; }
        return _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_2__["PermissionFacade"].checkPermission(this.permissions, modelName, event, type);
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/app/components/main-menu/main-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/main-spinner/main-spinner.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/main-spinner/main-spinner.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-wrapper\" [style.display]=\"status ? 'block' : 'none'\">\n  <div>\n    <mat-spinner></mat-spinner>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/main-spinner/main-spinner.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/main-spinner/main-spinner.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-wrapper {\n  position: fixed;\n  z-index: 100000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n  .spinner-wrapper div {\n    position: absolute;\n    top: 50%;\n    left: 50%; }\n"

/***/ }),

/***/ "./src/app/components/main-spinner/main-spinner.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-spinner/main-spinner.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSpinnerComponent", function() { return MainSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// @ngrx

// rxjs


var MainSpinnerComponent = /** @class */ (function () {
    function MainSpinnerComponent(store) {
        var _this = this;
        this.store = store;
        this.status = false;
        this.store.select('spinner')
            .subscribe(function (value) {
            if (typeof value !== 'undefined') {
                _this.status = value.running;
            }
        });
    }
    MainSpinnerComponent.prototype.ngOnInit = function () {
    };
    MainSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-spinner',
            template: __webpack_require__(/*! ./main-spinner.component.html */ "./src/app/components/main-spinner/main-spinner.component.html"),
            styles: [__webpack_require__(/*! ./main-spinner.component.scss */ "./src/app/components/main-spinner/main-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MainSpinnerComponent);
    return MainSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/table/table.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/table/table.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'components/table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/components/table/table.component.css")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/facades/auth/authFacade.ts":
/*!********************************************!*\
  !*** ./src/app/facades/auth/authFacade.ts ***!
  \********************************************/
/*! exports provided: AuthFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return AuthFacade; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @facades/permission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/account/account.service */ "./src/app/services/account/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthFacade = /** @class */ (function () {
    function AuthFacade(router, store, accountService) {
        this.router = router;
        this.store = store;
        this.accountService = accountService;
        this.notAuthnticatePages = [
            '/auth/register',
            '/auth/login',
            '/auth/resetPassword',
            '/auth/setup'
        ];
    }
    AuthFacade_1 = AuthFacade;
    AuthFacade.prototype.checkAuthStatusAndRedirect = function () {
        var _this = this;
        setTimeout(function () {
            if (AuthFacade_1.getAuthStatus() && _this.notAuthnticatePages.includes(_this.router.url.split('?')[0])) {
                _this.router.navigate(['/home']);
            }
            else if (!AuthFacade_1.getAuthStatus() && !_this.notAuthnticatePages.includes(_this.router.url.split('?')[0])) {
                _this.router.navigate(['/auth/login']);
            }
        }, 45);
    };
    AuthFacade.prototype.pageNeedAuth = function () {
        return !this.notAuthnticatePages.includes(this.router.url.split('?')[0]);
    };
    AuthFacade.prototype.endSession = function () {
        localStorage.removeItem(AuthFacade_1.prefix + 'user');
        localStorage.removeItem(AuthFacade_1.prefix + 'token');
        localStorage.removeItem(AuthFacade_1.prefix + 'status');
        this.router.navigate(['/auth/login']);
    };
    AuthFacade.prototype.loginAndFetchUserData = function () {
        var _this = this;
        var user;
        this.accountService.getAccount().subscribe(function (response) {
            var permissions = _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_3__["PermissionFacade"].groupByModelName(response.data.permissions);
            return _this.createUser(response, permissions);
        }, function (error) {
            console.log(error);
        });
        if (typeof user !== 'undefined') {
            return user;
        }
    };
    AuthFacade.prototype.createUser = function (response, permissions) {
        if (permissions === void 0) { permissions = {}; }
        return new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]({
            name: response.data.name,
            email: response.data.email,
            avatar: response.data.avatar,
            role: response.data.role,
            emailVerified: response.data.emailVerified,
            phoneNumberVerified: response.data.phoneNumberVerified,
            registrationComplete: response.data.registrationComplete,
            permissions: permissions,
            phone: response.data.phone,
            schools: response.data.schools,
            paymentSettingVerified: response.data.paymentSettingVerified,
            usedAuthSocial: response.data.usedAuthSocial ? response.data.usedAuthSocial : false
        });
    };
    AuthFacade.prefix = 'auth_schools_';
    AuthFacade.getUser = function () {
        var userJsn = localStorage.getItem(AuthFacade_1.prefix + 'user');
        if (typeof userJsn !== 'undefined' && userJsn !== 'undefined') {
            return JSON.parse(localStorage.getItem(AuthFacade_1.prefix + 'user'));
        }
    };
    AuthFacade.setToken = function (token, prefix) {
        if (prefix === void 0) { prefix = AuthFacade_1.prefix; }
        localStorage.setItem(prefix + 'token', token);
    };
    AuthFacade.getToken = function (prefix) {
        if (prefix === void 0) { prefix = AuthFacade_1.prefix; }
        return localStorage.getItem(prefix + 'token');
    };
    AuthFacade.setUser = function (user) {
        localStorage.setItem(AuthFacade_1.prefix + 'user', JSON.stringify(user));
    };
    AuthFacade.setAuthStatus = function (status) {
        localStorage.setItem(AuthFacade_1.prefix + 'status', status.toString());
    };
    AuthFacade.getAuthStatus = function () {
        return localStorage.getItem(AuthFacade_1.prefix + 'status') === 'true';
    };
    AuthFacade = AuthFacade_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _services_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], AuthFacade);
    return AuthFacade;
    var AuthFacade_1;
}());



/***/ }),

/***/ "./src/app/facades/permission/permissionFacade.ts":
/*!********************************************************!*\
  !*** ./src/app/facades/permission/permissionFacade.ts ***!
  \********************************************************/
/*! exports provided: PermissionFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionFacade", function() { return PermissionFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PermissionFacade = /** @class */ (function () {
    function PermissionFacade() {
    }
    PermissionFacade.groupByModelName = function (permissionsArray) {
        var permissions = {};
        permissionsArray.map(function (item) {
            if (!permissions.hasOwnProperty(item.model_name)) {
                permissions[item.model_name] = [];
            }
            permissions[item.model_name].push({ event: item.event, permission_type: item.permission_type, id: item.id });
        });
        return permissions;
    };
    PermissionFacade.checkPermission = function (permissions, modelName, event, type) {
        if (event === void 0) { event = ''; }
        if (type === void 0) { type = ''; }
        var finded = false;
        if (permissions) {
            Object.keys(permissions).map(function (key) {
                if (key === modelName) {
                    if (event.length > 0) {
                        permissions[key].map(function (item) {
                            if (item.event === event) {
                                if (type.length > 0) {
                                    if (item.type === type.length) {
                                        finded = true;
                                    }
                                }
                                else {
                                    finded = true;
                                }
                            }
                        });
                    }
                    else {
                        finded = true;
                    }
                }
            });
        }
        return finded;
    };
    PermissionFacade.userVerified = function (user) {
        return user.registerComplete === true && user.emailVerified === true && user.phoneNumberVerified === true;
    };
    PermissionFacade.checkPermissionsToAccessPage = function (page, user) {
        var method = this.pageAccessMethods[page];
        console.log(method);
        console.log(this[method](user));
        if (typeof method !== 'undefined') {
            return this[method](user);
        }
        return false;
    };
    PermissionFacade.canAccessPageEmailSent = function (user) {
        return user.registrationComplete === true && user.emailVerified === false && !this.userVerified(user);
    };
    PermissionFacade.canAccessPageLogin = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageRegister = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageForgotPassword = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageResetPassword = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageHome = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageSchool = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageDashboard = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageProgram = function (user) {
        return true;
    };
    PermissionFacade.canAccessPagePermissions = function (user) {
        return true;
    };
    PermissionFacade.canAccessPageSetup = function (user) {
        return true;
    };
    PermissionFacade.pageAccessMethods = {
        '/auth/emailSent': 'canAccessPageEmailSent',
        '/auth/login': 'canAccessPageLogin',
        '/auth/register': 'canAccessPageRegister',
        '/auth/forgotPassword': 'canAccessPageForgotPassword',
        '/auth/resetPassword': 'canAccessPageResetPassword',
        '/home': 'canAccessPageHome',
        '/school': 'canAccessPageSchool',
        '/dashboard': 'canAccessPageDashboard',
        '/program': 'canAccessPageProgram',
        '/auth/setup': 'canAccessPageSetup',
        '/permissions': 'canAccessPagePermissions',
    };
    PermissionFacade = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PermissionFacade);
    return PermissionFacade;
}());



/***/ }),

/***/ "./src/app/layouts/user/user.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/user/user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row class=\"first-header\">\n    <div class=\"first-header-content\">\n      <p *ngIf=\"schools.length === 1\">{{schools[0].name}}</p>\n        <div class=\"noSchools\"  *ngIf=\"schools.length === 0\">\n          <span>You haven't any GYM yet</span>\n        </div>\n      <mat-select *ngIf=\"schools.length > 1\" #schoolSelect onselect=\"onSelectedSchools(schoolSelect)\" [value]=\"schools[0]?.id\">\n        <mat-option *ngFor=\"let school of schools\" [value]=\"school.id\">{{school.name}}</mat-option>\n      </mat-select>\n      <button mat-stroked-button class=\"mat-primary add-gym-button\" (click)=\"openCreateModal()\">\n        <mat-icon>add</mat-icon>\n        Add Gym\n      </button>\n      <div class=\"profile-details inline_block\">\n        <img src=\"{{avatar !== null && avatar.length > 0 ? avatar : '../../assets/noAvatar.png'}}\">\n        <span>\n          {{name}}\n        </span>\n      </div>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item>PricingHome</button>\n        <button mat-menu-item>My Details</button>\n        <button mat-menu-item>Pricing</button>\n        <button mat-menu-item (click)=\"onLogout()\">Logout</button>\n      </mat-menu>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row class=\"second-header\">\n  <app-main-menu></app-main-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/user/user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/user/user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-toolbar {\n  background: transparent; }\n  :host .mat-toolbar .first-header {\n    padding-right: 0;\n    height: 59px; }\n  :host .mat-toolbar .first-header .first-header-content {\n      display: flex;\n      font-size: 14px;\n      justify-content: space-between;\n      align-items: center;\n      min-width: 335px;\n      margin-left: auto; }\n  :host .mat-toolbar .first-header .first-header-content mat-select {\n        width: 340px;\n        height: 30px;\n        border: rgba(155, 155, 155, 0.31) solid 1px;\n        border-radius: 20px;\n        padding: 0 10px;\n        margin-top: 5px; }\n  :host .mat-toolbar .first-header .first-header-content mat-select ::ng-deep .mat-select-arrow {\n          display: inline-block;\n          padding: 3px;\n          margin-bottom: 3px;\n          border: #0b7685 solid;\n          border-width: 0 1.5px 1.5px 0;\n          transform: rotate(45deg);\n          -webkit-transform: rotate(45deg); }\n  :host .mat-toolbar .first-header .first-header-content .add-gym-button {\n        border-radius: 20px;\n        width: 175px;\n        height: 30px;\n        padding-left: 6px;\n        justify-content: center;\n        flex-direction: column;\n        margin-top: 5px;\n        margin-left: 50px; }\n  :host .mat-toolbar .first-header .first-header-content .add-gym-button .mat-icon {\n          font-size: 17px;\n          font-weight: bold;\n          margin-top: 7px; }\n  :host .mat-toolbar .first-header .first-header-content .profile-details {\n        display: flex;\n        justify-content: center;\n        width: 60%;\n        align-items: center; }\n  :host .mat-toolbar .first-header .first-header-content .profile-details img {\n          margin-right: 9px;\n          border-radius: 50%;\n          width: 35px;\n          height: 35px; }\n  :host .mat-toolbar .second-header {\n    background-color: #7f7f7f;\n    height: 39px;\n    display: flex;\n    justify-content: center; }\n  :host .content {\n  margin: 0 auto;\n  height: 100%;\n  width: 70%;\n  -ms-grid-row-align: center;\n      align-self: center; }\n"

/***/ }),

/***/ "./src/app/layouts/user/user.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/user/user.component.ts ***!
  \************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/layout/school/create-school/create-school.component */ "./src/app/pages/layout/school/create-school/create-school.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(dialog, authFacade, authStore) {
        this.dialog = dialog;
        this.authFacade = authFacade;
        this.authStore = authStore;
        this.schools = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStore.subscribe(function (val) {
            var auth = val.auth;
            if (auth && auth.user) {
                _this.name = auth.user.name;
                _this.email = auth.user.email;
                _this.avatar = auth.user.avatar;
                _this.schools = auth.user.schools ? auth.user.schools : [];
            }
        });
    };
    UserComponent.prototype.onLogout = function () {
        this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SignOut"](this.authFacade));
    };
    UserComponent.prototype.onSelectedSchools = function (val) {
        console.log(val, 'school was selected');
    };
    UserComponent.prototype.openCreateModal = function () {
        var dialogRef = this.dialog.open(_pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_5__["CreateSchoolComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            dialogRef.close();
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/layouts/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/layouts/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(params) {
        this.emailVerified = false;
        this.phoneNumberVerified = false;
        this.registrationComplete = false;
        this.paymentSettingVerified = false;
        this.usedAuthSocial = false;
        if (params) {
            this.email = params.email;
            this.name = params.name;
            this.role = params.role;
            this.phone = params.phone;
            this.avatar = params.avatar;
            this.permissions = params.permissions;
            this.schools = params.schools;
            this.id = params.id ? params.id : 'null';
            this.provider_id = params.provider_id ? params.provider_id : 'null';
            this.provider_name = params.provider_name ? params.provider_name : 'null';
            this.emailVerified = params.emailVerified ? params.emailVerified : false;
            this.phoneNumberVerified = params.phoneNumberVerified ? params.phoneNumberVerified : false;
            this.registrationComplete = params.registrationComplete ? params.registrationComplete : false;
            this.paymentSettingVerified = params.paymentSettingVerified ? params.paymentSettingVerified : false;
        }
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/auth/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"auth-modal reset-password-auth-card\" *ngIf=\"tokenWasChecked\">\n  <mat-card-header>\n    <mat-card-title>Change your password</mat-card-title>\n  </mat-card-header>\n  <p class=\"sub-header\">\n    Please set new password and try don't forget this.\n  </p>\n  <mat-card-content>\n    <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPassword()\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <span class=\"form-field-header\">New Password</span>\n            <mat-form-field>\n              <input matInput\n                     formControlName=\"password\"\n                     type=\"password\"\n                     name=\"password\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!resetPasswordForm.get('password').valid && resetPasswordForm.get('password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"resetPasswordForm.get('password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span class=\"form-field-header\">Confirm Password</span>\n            <mat-form-field>\n              <input matInput\n                     formControlName=\"confirm_password\"\n                     type=\"password\"\n                     name=\"confirm_password\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!resetPasswordForm.get('confirm_password').valid && resetPasswordForm.get('confirm_password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"resetPasswordForm.get('confirm_password').errors['confirmedPassword']\">Password do not match!</span>\n              <span *ngIf=\"resetPasswordForm.get('confirm_password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <mat-card-actions>\n          <button mat-raised-button\n                  color=\"primary\"\n                  [disabled]=\"!resetPasswordForm.valid && resetPasswordForm.touched || !resetPasswordForm.touched\n    \">Change Password</button>\n        </mat-card-actions>\n      </table>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/auth/reset-password/reset-password.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset-password-auth-card {\n  width: 246px !important;\n  padding: 24px 47px 4px 47px !important;\n  border-radius: 10px;\n  border: rgba(155, 155, 155, 0.31) solid 1px;\n  box-shadow: none !important; }\n  .reset-password-auth-card .sub-header {\n    font-size: 14px;\n    width: 183px;\n    margin: -4px auto 8px auto;\n    text-align: center;\n    color: rgba(155, 155, 155, 0.97); }\n  .reset-password-auth-card form table .mat-card-actions button {\n    margin-top: 18px; }\n"

/***/ }),

/***/ "./src/app/pages/auth/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, router, authFacade, authService, notificationManager, authStore) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authFacade = authFacade;
        this.authService = authService;
        this.notificationManager = notificationManager;
        this.authStore = authStore;
        this.tokenWasChecked = true;
        this.route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
    }
    ResetPasswordComponent_1 = ResetPasswordComponent;
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.token) {
            this.notificationManager.error('Token is required', 'Error');
            this.router.navigate(['auth/login']);
        }
        else {
            this.authService.checkResetPasswordToken(this.token)
                .subscribe(function (resp) {
                console.log(resp);
                if (resp.data.token && resp.data.token.length > 0) {
                    _this.tokenWasChecked = true;
                    _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_5__["AuthFacade"].setToken(resp.data.token, ResetPasswordComponent_1.resetTokenPrefix);
                    var tmpUser = _this.authFacade.createUser(resp.data.authUser);
                    _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateAuthUser"](tmpUser));
                }
                else {
                    _this.router.navigate(['/auth/login']);
                }
            }, function (err) { return _this.router.navigate(['/auth/login']); });
        }
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmedPassword.bind(this)]),
        });
    };
    ResetPasswordComponent.prototype.confirmedPassword = function (control) {
        if (this.resetPasswordForm && this.resetPasswordForm.get('password').value !== this.resetPasswordForm.get('confirm_password').value) {
            return { 'confirmedPassword': true };
        }
        else {
            return null;
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.authService.resetPassword({
            password: this.resetPasswordForm.get('password').value,
            password_confirmation: this.resetPasswordForm.get('confirm_password').value
        })
            .subscribe(function (resp) {
            console.log(resp);
            localStorage.removeItem(ResetPasswordComponent_1.resetTokenPrefix + 'token');
            _this.notificationManager.success(resp.success.message ? resp.success.message : 'Password successfully', 'Success');
            _this.router.navigate(['auth/login']);
        });
    };
    ResetPasswordComponent.getTokenPrefix = function () {
        return this.resetTokenPrefix;
    };
    ResetPasswordComponent.resetTokenPrefix = 'reset_token_prefix';
    ResetPasswordComponent = ResetPasswordComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/auth/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_5__["AuthFacade"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
    var ResetPasswordComponent_1;
}());



/***/ }),

/***/ "./src/app/pages/layout/school/create-school/create-school.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/layout/school/create-school/create-school.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-school-wrapper\">\n  <h2>Create Gym</h2>\n      <form [formGroup]=\"crateSchoolForm\" (ngSubmit)=\"create()\">\n        <mat-form-field>\n          <input matInput placeholder=\"Name\"\n                 name=\"name\"\n                 formControlName=\"name\"\n          >\n        </mat-form-field>\n        <div\n          *ngIf=\"!crateSchoolForm.get('name').valid && crateSchoolForm.get('name').touched\"\n          class=\"help-block\">\n          <span *ngIf=\"crateSchoolForm.get('name').errors['required']\">This field is required!</span>\n        </div>\n        <mat-form-field>\n                <textarea matInput placeholder=\"Description\"\n                          formControlName=\"description\"\n                          name=\"description\">\n                </textarea>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Address\"\n                 name=\"address\"\n                 formControlName=\"address\"\n          >\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Phone\"\n                 name=\"address\"\n                 formControlName=\"phone\"\n          >\n        </mat-form-field>\n        <div\n          *ngIf=\"!crateSchoolForm.get('phone').valid && crateSchoolForm.get('phone').touched\"\n          class=\"help-block\">\n          <span *ngIf=\"crateSchoolForm.get('phone').errors['required']\">This field is required!</span>\n          <span *ngIf=\"crateSchoolForm.get('phone').errors['range']\">Phone Number should have next format: '3 777 777 77 77'</span>\n        </div>\n          <button mat-raised-button\n                  color=\"primary\"\n                  [disabled]=\"!crateSchoolForm.valid && crateSchoolForm.touched || !crateSchoolForm.touched\n      \">Create</button>\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/layout/school/create-school/create-school.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/layout/school/create-school/create-school.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-school-wrapper {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center; }\n  .create-school-wrapper form {\n    display: flex;\n    flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/pages/layout/school/create-school/create-school.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/layout/school/create-school/create-school.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSchoolComponent", function() { return CreateSchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateSchoolComponent = /** @class */ (function () {
    function CreateSchoolComponent(dialog, schoolService, authStore) {
        this.dialog = dialog;
        this.schoolService = schoolService;
        this.authStore = authStore;
    }
    CreateSchoolComponent.prototype.ngOnInit = function () {
        this.crateSchoolForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.checkLimit(12, 12)]),
        });
    };
    CreateSchoolComponent.prototype.checkLimit = function (min, max) {
        return function (c) {
            if (c.value !== null && (c.value.length < min || c.value.length > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    CreateSchoolComponent.prototype.create = function () {
        var _this = this;
        this.schoolService.create({
            name: this.crateSchoolForm.get('name').value,
            description: this.crateSchoolForm.get('description').value,
            address: this.crateSchoolForm.get('address').value,
            phone: this.crateSchoolForm.get('phone').value
        }).subscribe(function (resp) {
            _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateAuthUser"]({ schools: resp.data }));
            _this.dialog.closeAll();
        });
    };
    CreateSchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-school',
            template: __webpack_require__(/*! ./create-school.component.html */ "./src/app/pages/layout/school/create-school/create-school.component.html"),
            styles: [__webpack_require__(/*! ./create-school.component.scss */ "./src/app/pages/layout/school/create-school/create-school.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _services_school_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CreateSchoolComponent);
    return CreateSchoolComponent;
}());



/***/ }),

/***/ "./src/app/services/account/account.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/account/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(httpClient) {
        this.httpClient = httpClient;
    }
    AccountService.prototype.getAccount = function () {
        return this.httpClient.get('account');
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
/* harmony import */ var _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/spinner/actions */ "./src/app/store/spinner/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @ngrx

// rxjs



var AuthService = /** @class */ (function () {
    function AuthService(httpClient, store) {
        this.httpClient = httpClient;
        this.store = store;
    }
    AuthService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password, rememberMe = _a.rememberMe;
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('auth', { email: email, password: password, rememberMe: rememberMe });
    };
    AuthService.prototype.loginBySocialAcc = function (provider, token) {
        return this.httpClient.post("social/" + provider, { token: token });
    };
    AuthService.prototype.register = function (body) {
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('auth/register', body);
    };
    AuthService.prototype.sendEmailForResettingPassword = function (email, redirect) {
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('password/change', { email: email, redirectPath: redirect });
    };
    AuthService.prototype.sendEmail = function (email, redirect) {
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('verify/email', { email: email, redirectPath: redirect });
    };
    AuthService.prototype.sendSms = function (email) {
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('verify/sms', { email: email });
    };
    AuthService.prototype.resetPassword = function (_a) {
        var password = _a.password, password_confirmation = _a.password_confirmation;
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('password/reset', { password: password, password_confirmation: password_confirmation });
    };
    AuthService.prototype.checkResetPasswordToken = function (token) {
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('password/checkToken', { token: token });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/interceptors/auth.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/interceptors/auth.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _store_spinner_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/spinner/actions */ "./src/app/store/spinner/actions.ts");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pages/auth/reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @ngrx

// rxjs







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(notificationManager, store, authStore, authFacade, router) {
        this.notificationManager = notificationManager;
        this.store = store;
        this.authStore = authStore;
        this.authFacade = authFacade;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var token;
        var pagesWithTekns = [
            '/auth/resetPassword',
            '/auth/setup',
        ];
        if (pagesWithTekns.includes(this.router.url.split('?')[0])) {
            token = _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"].getToken(_pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"].getTokenPrefix());
        }
        else {
            token = _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"].getToken();
        }
        if (token) {
            req = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                })
            });
        }
        return next.handle(req).do(function (event) {
            _this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_8__["StopSpinner"]());
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                _this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_8__["StopSpinner"]());
                if (err.status && err.status === 401 && _this.router.url !== '/auth/login') {
                    _this.notificationManager.error('User is not authorised', 'Error');
                    _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_9__["SignOut"](_this.authFacade));
                }
                else if (err.error.error) {
                    _this.notificationManager.error(err.error.error.message, 'Error');
                }
                else {
                    _this.notificationManager.error('An error has occurred', 'Error');
                }
            }
        });
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/interceptors/main.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/interceptors/main.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: MainInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainInterceptor", function() { return MainInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainInterceptor = /** @class */ (function () {
    function MainInterceptor() {
    }
    MainInterceptor.prototype.intercept = function (req, next) {
        var url = 'http://ec2-18-221-164-63.us-east-2.compute.amazonaws.com:8000/api/';
        // const url = 'http://localhost:8000/api/';
        req = req.clone({
            url: url + req.url
        });
        return next.handle(req);
    };
    MainInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MainInterceptor);
    return MainInterceptor;
}());



/***/ }),

/***/ "./src/app/services/school/school.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/school/school.service.ts ***!
  \***************************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolService = /** @class */ (function () {
    function SchoolService(httpClient) {
        this.httpClient = httpClient;
    }
    SchoolService.prototype.create = function (body) {
        return this.httpClient.post('school', body);
    };
    SchoolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "./src/app/shared-modules/material-module/material-module.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-modules/material-module/material-module.module.ts ***!
  \**************************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared-modules/shared-module/shared-module.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared-modules/shared-module/shared-module.module.ts ***!
  \**********************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-module/material-module.module */ "./src/app/shared-modules/material-module/material-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _store_auth_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/auth/reducers */ "./src/app/store/auth/reducers.ts");
/* harmony import */ var _store_spinner_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/spinner/reducers */ "./src/app/store/spinner/reducers.ts");


var reducers = {
    auth: _store_auth_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    spinner: _store_spinner_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};


/***/ }),

/***/ "./src/app/store/auth/actions.ts":
/*!***************************************!*\
  !*** ./src/app/store/auth/actions.ts ***!
  \***************************************/
/*! exports provided: ActionTypes, AuthenticateAction, AuthenticatedAction, AuthenticatedSuccessAction, AuthenticatedErrorAction, AuthenticationErrorAction, AuthenticationSuccessAction, SignUpAction, SignUpErrorAction, SignUpSuccessAction, RefreshAuthState, UpdateAuthUser, ToggleUsedAuthSocial, SignOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateAction", function() { return AuthenticateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedAction", function() { return AuthenticatedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedSuccessAction", function() { return AuthenticatedSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedErrorAction", function() { return AuthenticatedErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationErrorAction", function() { return AuthenticationErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationSuccessAction", function() { return AuthenticationSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpAction", function() { return SignUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpErrorAction", function() { return SignUpErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccessAction", function() { return SignUpSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshAuthState", function() { return RefreshAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAuthUser", function() { return UpdateAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleUsedAuthSocial", function() { return ToggleUsedAuthSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOut", function() { return SignOut; });
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
/* harmony import */ var _utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/uniqueType */ "./src/app/utils/uniqueType.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/user */ "./src/app/models/user.ts");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
// rxjs


// import type function

// import models


var ActionTypes = {
    AUTHENTICATE: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Authenticate'),
    AUTHENTICATE_ERROR: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Authentication error'),
    AUTHENTICATE_SUCCESS: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Authentication success'),
    AUTHENTICATED: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Authenticated'),
    AUTHENTICATED_ERROR: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Authenticated error'),
    AUTHENTICATED_SUCCESS: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Authenticated success'),
    SIGN_OUT: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Sign off'),
    SIGN_OUT_ERROR: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Sign off error'),
    SIGN_OUT_SUCCESS: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Sign off success'),
    SIGN_UP: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Sign up'),
    SIGN_UP_ERROR: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Sign up error'),
    SIGN_UP_SUCCESS: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('Sign up success'),
    REFRESH_AUTH_STATE: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('REFRESH_AUTH_STATE'),
    UPDATE_AUTH_USER: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('UPDATE_AUTH_USER'),
    TOOGLE_AUTH_USED: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_2__["uniqueType"])('TOOGLE_AUTH_USED'),
};
/**
 * Authenticate.
 * @class AuthenticateAction
 * @implements {Action}
 */
var AuthenticateAction = /** @class */ (function () {
    function AuthenticateAction(token) {
        this.type = ActionTypes.AUTHENTICATE;
        _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].setToken(token);
    }
    return AuthenticateAction;
}());

/**
 * Checks if user is authenticated.
 * @class AuthenticatedAction
 * @implements {Action}
 */
var AuthenticatedAction = /** @class */ (function () {
    function AuthenticatedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTHENTICATED;
    }
    return AuthenticatedAction;
}());

/**
 * Authenticated check success.
 * @class AuthenticatedSuccessAction
 * @implements {Action}
 */
var AuthenticatedSuccessAction = /** @class */ (function () {
    function AuthenticatedSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTHENTICATED_SUCCESS;
        _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].setUser(payload.user);
        _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].setAuthStatus(payload.authenticated);
    }
    return AuthenticatedSuccessAction;
}());

/**
 * Authenticated check error.
 * @class AuthenticatedErrorAction
 * @implements {Action}
 */
var AuthenticatedErrorAction = /** @class */ (function () {
    function AuthenticatedErrorAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTHENTICATED_ERROR;
    }
    return AuthenticatedErrorAction;
}());

/**
 * Authentication error.
 * @class AuthenticationErrorAction
 * @implements {Action}
 */
var AuthenticationErrorAction = /** @class */ (function () {
    function AuthenticationErrorAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTHENTICATE_ERROR;
    }
    return AuthenticationErrorAction;
}());

/**
 * Authentication success.
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
var AuthenticationSuccessAction = /** @class */ (function () {
    function AuthenticationSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTHENTICATE_SUCCESS;
    }
    return AuthenticationSuccessAction;
}());

/**
 * Sign up.
 * @class SignUpAction
 * @implements {Action}
 */
var SignUpAction = /** @class */ (function () {
    function SignUpAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_UP;
    }
    return SignUpAction;
}());

/**
 * Sign up error.
 * @class SignUpErrorAction
 * @implements {Action}
 */
var SignUpErrorAction = /** @class */ (function () {
    function SignUpErrorAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_UP_ERROR;
    }
    return SignUpErrorAction;
}());

/**
 * Sign up success.
 * @class SignUpSuccessAction
 * @implements {Action}
 */
var SignUpSuccessAction = /** @class */ (function () {
    function SignUpSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_UP_SUCCESS;
    }
    return SignUpSuccessAction;
}());

/**
 * Refresh auth status.
 * @class RefreshAuthState
 * @implements {Action}
 */
var RefreshAuthState = /** @class */ (function () {
    function RefreshAuthState() {
        this.type = ActionTypes.REFRESH_AUTH_STATE;
        this.payload = {
            user: {},
            authStatus: false
        };
        var userAuth = _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].getUser();
        var token = _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].getToken();
        var authStatusAuth = _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].getAuthStatus();
        this.payload.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](userAuth);
        this.payload.authStatus = authStatusAuth;
    }
    return RefreshAuthState;
}());

var UpdateAuthUser = /** @class */ (function () {
    function UpdateAuthUser(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_AUTH_USER;
    }
    return UpdateAuthUser;
}());

var ToggleUsedAuthSocial = /** @class */ (function () {
    function ToggleUsedAuthSocial(payload) {
        this.payload = payload;
        this.type = ActionTypes.TOOGLE_AUTH_USED;
    }
    return ToggleUsedAuthSocial;
}());

var SignOut = /** @class */ (function () {
    function SignOut(authFacade) {
        this.authFacade = authFacade;
        this.type = ActionTypes.SIGN_OUT;
        authFacade.endSession();
    }
    return SignOut;
}());



/***/ }),

/***/ "./src/app/store/auth/reducers.ts":
/*!****************************************!*\
  !*** ./src/app/store/auth/reducers.ts ***!
  \****************************************/
/*! exports provided: reducer, isAuthenticated, getAuthenticatedUser, getAuthenticationError, getSignOutError, getSignUpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthenticatedUser", function() { return getAuthenticatedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthenticationError", function() { return getAuthenticationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignOutError", function() { return getSignOutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignUpError", function() { return getSignUpError; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/user */ "./src/app/models/user.ts");
/* harmony import */ var _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



/**
 * The initial state.
 */
var initialState = {
    authenticated: false,
    user: new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]()
};
/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {Actions} action Incoming action
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATE:
            console.log(state, 'AUTHENTICATE');
            return __assign({}, state, { error: false, loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATED_ERROR:
            return __assign({}, state, { authenticated: false, error: action.payload.error.message, loaded: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATED_SUCCESS:
            console.log(state, 'AUTHENTICATED_SUCCESS');
            return __assign({}, state, { authenticated: action.payload.authenticated, loaded: true, user: action.payload.user });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATE_ERROR:
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_UP_ERROR:
            return __assign({}, state, { authenticated: false, error: action.payload.error.message, loading: false });
        //
        // case ActionTypes.AUTHENTICATE_SUCCESS:
        // case ActionTypes.SIGN_UP_SUCCESS:
        //   const user: User = action.payload.user;
        //   // verify user is not null
        //   if (user === null) {
        //     return state;
        //   }
        //   console.log(state, 'SIGN_UP_SUCCESS, AUTHENTICATE_SUCCESS');
        //
        //   return {
        //     ...state,
        //     authenticated: true,
        //     error: undefined,
        //     loading: false,
        //     user: user
        //   };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].UPDATE_AUTH_USER:
            var properties_1 = action.payload;
            if (!state.user) {
                state.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
            }
            Object.keys(properties_1).map(function (prop) {
                if (typeof properties_1[prop] !== 'undefined') {
                    switch (prop) {
                        case 'schools':
                            if (!state.user[prop]) {
                                state.user[prop] = [];
                            }
                            state.user[prop].push(properties_1[prop]);
                            break;
                        case 'permissions':
                            break;
                        default:
                            state.user[prop] = properties_1[prop];
                            break;
                    }
                }
            });
            _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"].setUser(state.user);
            console.log(state, 'UPDATE_AUTH_USER');
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_OUT:
            return __assign({}, state, { authenticated: false, error: undefined, user: undefined });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_UP:
            return __assign({}, state, { authenticated: false, error: undefined, loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].REFRESH_AUTH_STATE:
            var uState = __assign({}, state, { authenticated: action.payload.authStatus, user: action.payload.user, error: undefined, loading: true });
            console.log(uState, 'REFRESH_AUTH_STATE');
            return uState;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].TOOGLE_AUTH_USED:
            state.user.usedAuthSocial = action.payload.provider;
            _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"].setUser(state.user);
            console.log(state, 'TOOGLE_AUTH_USED');
            return state;
        default:
            console.log(state, 'default');
            return state;
    }
}
/**
 * Returns true if the user is authenticated.
 * @function isAuthenticated
 * @param {State} state
 * @returns {boolean}
 */
var isAuthenticated = function (state) { return console.log(state); };
/**
 * Return the users state
 * @function getAuthenticatedUser
 * @param {State} state
 * @returns {User}
 */
var getAuthenticatedUser = function (state) { return state.user; };
/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} state
 * @returns {Error}
 */
var getAuthenticationError = function (state) { return state.error; };
/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} state
 * @returns {Error}
 */
var getSignOutError = function (state) { return state.error; };
/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} state
 * @returns {Error}
 */
var getSignUpError = function (state) { return state.error; };


/***/ }),

/***/ "./src/app/store/spinner/actions.ts":
/*!******************************************!*\
  !*** ./src/app/store/spinner/actions.ts ***!
  \******************************************/
/*! exports provided: ActionTypes, StartSpinner, StopSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartSpinner", function() { return StartSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopSpinner", function() { return StopSpinner; });
/* harmony import */ var _utils_uniqueType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/uniqueType */ "./src/app/utils/uniqueType.ts");
// import type function

var ActionTypes = {
    START_SPINNER: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_0__["uniqueType"])('RUN_SPINNER'),
    STOP_SPINNER: Object(_utils_uniqueType__WEBPACK_IMPORTED_MODULE_0__["uniqueType"])('STOP_SPINNER'),
};
/**
 * Runs spinner.
 * @class RunSpinner
 * @implements {Action}
 */
var StartSpinner = /** @class */ (function () {
    function StartSpinner() {
        this.type = ActionTypes.START_SPINNER;
    }
    return StartSpinner;
}());

/**
 * Disables spinner.
 * @class StopSpinner
 * @implements {Action}
 */
var StopSpinner = /** @class */ (function () {
    function StopSpinner() {
        this.type = ActionTypes.STOP_SPINNER;
    }
    return StopSpinner;
}());



/***/ }),

/***/ "./src/app/store/spinner/reducers.ts":
/*!*******************************************!*\
  !*** ./src/app/store/spinner/reducers.ts ***!
  \*******************************************/
/*! exports provided: reducer, getSpinnerStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpinnerStatus", function() { return getSpinnerStatus; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/spinner/actions.ts");

/**
 * The initial state.
 */
var initialState = {
    running: false,
};
/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {Actions} action Incoming action
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].START_SPINNER:
            return {
                running: true
            };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].STOP_SPINNER:
            return {
                running: false,
            };
    }
}
/**
 * Returns spinners status.
 * @function getSpinnerStatus
 * @param {State} state
 * @returns {boolean}
 */
var getSpinnerStatus = function (state) { return state.running; };


/***/ }),

/***/ "./src/app/utils/uniqueType.ts":
/*!*************************************!*\
  !*** ./src/app/utils/uniqueType.ts ***!
  \*************************************/
/*! exports provided: uniqueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueType", function() { return uniqueType; });
/**
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function uniqueType(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /data/crm_schools/httpdocs_angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map