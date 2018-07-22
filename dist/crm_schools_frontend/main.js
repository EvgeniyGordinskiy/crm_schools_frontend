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

module.exports = "<router-outlet></router-outlet>\n<app-main-spinner></app-main-spinner>\n\n"

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





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authStore, authFacade) {
        this.router = router;
        this.authStore = authStore;
        this.authFacade = authFacade;
        this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["RefreshAuthState"]());
        this.authFacade.checkAuthStatusAndRedirect();
    }
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
/*! exports provided: metaReducers, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layouts/user/user.component */ "./src/app/layouts/user/user.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _components_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/main-spinner/main-spinner.component */ "./src/app/components/main-spinner/main-spinner.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sharedModules/shared-module/shared-module.module */ "./src/app/shared-modules/shared-module/shared-module.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_interceptors_main_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/interceptors/main.interceptor */ "./src/app/services/interceptors/main.interceptor.ts");
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/interceptors/auth.interceptor */ "./src/app/services/interceptors/auth.interceptor.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var metaReducers = _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
    ? []
    : []; // [storeFreeze]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"],
                _components_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_8__["MainSpinnerComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_23__["MainMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["StoreRouterConnectingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"], { metaReducers: metaReducers }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
                    ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__["StoreDevtoolsModule"].instrument({ maxAge: 50 })
                    : [],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(),
            ],
            providers: [
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_22__["AuthFacade"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_main_interceptor__WEBPACK_IMPORTED_MODULE_15__["MainInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var _facadespermission_permissionFacade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @facadespermission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
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
        return _facadespermission_permissionFacade__WEBPACK_IMPORTED_MODULE_2__["PermissionFacade"].checkPermission(this.permissions, modelName, event, type);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function AuthFacade(router) {
        this.router = router;
    }
    AuthFacade_1 = AuthFacade;
    AuthFacade.prototype.checkAuthStatusAndRedirect = function () {
        var _this = this;
        setTimeout(function () {
            if (AuthFacade_1.getAuthStatus() && _this.router.url === '/auth/login') {
                _this.router.navigate(['/home']);
            }
            else if (!AuthFacade_1.getAuthStatus() && _this.router.url !== '/auth/login' && _this.router.url !== '/auth/register') {
                _this.router.navigate(['/auth/login']);
            }
        }, 45);
    };
    AuthFacade.prototype.endSession = function () {
        localStorage.removeItem(AuthFacade_1.prefix + 'user');
        localStorage.removeItem(AuthFacade_1.prefix + 'token');
        localStorage.removeItem(AuthFacade_1.prefix + 'status');
        this.router.navigate(['/auth/login']);
    };
    AuthFacade.prefix = 'auth_schools_';
    AuthFacade.setToken = function (token) {
        localStorage.setItem(AuthFacade_1.prefix + 'token', token);
    };
    AuthFacade.getToken = function () {
        return localStorage.getItem(AuthFacade_1.prefix + 'token');
    };
    AuthFacade.setUser = function (user) {
        localStorage.setItem(AuthFacade_1.prefix + 'user', JSON.stringify(user));
    };
    AuthFacade.getUser = function () {
        return JSON.parse(localStorage.getItem(AuthFacade_1.prefix + 'user'));
    };
    AuthFacade.setAuthStatus = function (status) {
        localStorage.setItem(AuthFacade_1.prefix + 'status', status.toString());
    };
    AuthFacade.getAuthStatus = function () {
        return localStorage.getItem(AuthFacade_1.prefix + 'status') === 'true';
    };
    AuthFacade = AuthFacade_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
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
        var permissions;
        permissionsArray.map(function (item) {
            if (permissions && permissions.hasOwnProperty(item.model_name)) {
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

module.exports = "<mat-toolbar>\n  <mat-toolbar-row class=\"first-header\">\n    <div class=\"first-header-content\">\n      <a>Manage my Gyms</a>\n      <div class=\"profile-details inline_block\">\n        <img src=\"https://picsum.photos/40/30\">\n        <span>\n          {{name}}\n        </span>\n      </div>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item>PricingHome</button>\n        <button mat-menu-item>My Details</button>\n        <button mat-menu-item>Pricing</button>\n        <button mat-menu-item (click)=\"onLogout()\">Logout</button>\n      </mat-menu>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row class=\"second-header\">\n  <app-main-menu></app-main-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/user/user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/user/user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-toolbar {\n  background: transparent; }\n  :host .mat-toolbar .first-header {\n    padding-right: 0;\n    height: 59px; }\n  :host .mat-toolbar .first-header .first-header-content {\n      display: flex;\n      font-size: 14px;\n      justify-content: space-between;\n      min-width: 335px;\n      margin-left: auto; }\n  :host .mat-toolbar .first-header .first-header-content .profile-details {\n        display: flex;\n        justify-content: center;\n        width: 60%; }\n  :host .mat-toolbar .first-header .first-header-content .profile-details img {\n          margin-right: 9px;\n          border-radius: 50%; }\n  :host .mat-toolbar .second-header {\n    background-color: #7f7f7f;\n    height: 39px;\n    display: flex;\n    justify-content: center; }\n  :host .content {\n  margin: 0 auto;\n  height: 100%;\n  width: 70%;\n  -ms-grid-row-align: center;\n      align-self: center; }\n"

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
    function UserComponent(authFacade, authStore) {
        this.authFacade = authFacade;
        this.authStore = authStore;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStore.select('auth').subscribe(function (val) {
            if (val.user) {
                _this.name = val.user.name;
                _this.email = val.user.email;
            }
        });
    };
    UserComponent.prototype.onLogout = function () {
        this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SignOut"](this.authFacade));
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/layouts/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/layouts/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"],
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
        this.email = params.email;
        this.name = params.name;
        this.role = params.role;
        this.permissions = params.permissions;
        this.id = params.id ? params : 'null';
    }
    return User;
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
        var email = _a.email, password = _a.password;
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('auth', { email: email, password: password });
    };
    AuthService.prototype.register = function (_a) {
        var name = _a.name, email = _a.email, password = _a.password, password_confirmation = _a.password_confirmation;
        this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        return this.httpClient.post('auth/register', { name: name, email: email, password: password, password_confirmation: password_confirmation });
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
        var token = _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"].getToken();
        if (token) {
            req = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                })
            });
        }
        return next.handle(req).do(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                _this.store.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_8__["StopSpinner"]());
                if (err.status && err.status === 401 && _this.router.url !== '/auth/login') {
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
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
/*! exports provided: ActionTypes, AuthenticateAction, AuthenticatedAction, AuthenticatedSuccessAction, AuthenticatedErrorAction, AuthenticationErrorAction, AuthenticationSuccessAction, SignOutAction, SignOutErrorAction, SignOutSuccessAction, SignUpAction, SignUpErrorAction, SignUpSuccessAction, RefreshAuthState, SignOut */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutAction", function() { return SignOutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutErrorAction", function() { return SignOutErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutSuccessAction", function() { return SignOutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpAction", function() { return SignUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpErrorAction", function() { return SignUpErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccessAction", function() { return SignUpSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshAuthState", function() { return RefreshAuthState; });
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
 * Sign out.
 * @class SignOutAction
 * @implements {Action}
 */
var SignOutAction = /** @class */ (function () {
    function SignOutAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_OUT;
    }
    return SignOutAction;
}());

/**
 * Sign out error.
 * @class SignOutErrorAction
 * @implements {Action}
 */
var SignOutErrorAction = /** @class */ (function () {
    function SignOutErrorAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_OUT_SUCCESS;
    }
    return SignOutErrorAction;
}());

/**
 * Sign out success.
 * @class SignOutSuccessAction
 * @implements {Action}
 */
var SignOutSuccessAction = /** @class */ (function () {
    function SignOutSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGN_OUT_SUCCESS;
    }
    return SignOutSuccessAction;
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
        if (userAuth &&
            token &&
            authStatusAuth) {
            this.payload.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](userAuth);
            this.payload.authStatus = authStatusAuth;
        }
    }
    return RefreshAuthState;
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
            return __assign({}, state, { error: false, loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATED_ERROR:
            return __assign({}, state, { authenticated: false, error: action.payload.error.message, loaded: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATED_SUCCESS:
            return __assign({}, state, { authenticated: action.payload.authenticated, loaded: true, user: action.payload.user });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATE_ERROR:
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_UP_ERROR:
            return __assign({}, state, { authenticated: false, error: action.payload.error.message, loading: false });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AUTHENTICATE_SUCCESS:
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_UP_SUCCESS:
            var user = action.payload.user;
            // verify user is not null
            if (user === null) {
                return state;
            }
            return __assign({}, state, { authenticated: true, error: undefined, loading: false, user: user });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_OUT:
            return __assign({}, state, { authenticated: false, error: undefined, user: undefined });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIGN_UP:
            return __assign({}, state, { authenticated: false, error: undefined, loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].REFRESH_AUTH_STATE:
            return __assign({}, state, { authenticated: action.payload.authStatus, user: action.payload.user, error: undefined, loading: true });
        default:
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

module.exports = __webpack_require__(/*! /home/evgen/www/crm_schools/crm_schools_frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map