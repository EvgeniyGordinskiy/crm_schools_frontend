(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./src/app/pages/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/auth/register/register.component.ts");
/* harmony import */ var _auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-wrapper/auth-wrapper.component */ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["AuthWrapperComponent"],
        children: [
            {
                path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            },
            {
                path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
            },
        ]
    },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/auth-wrapper/auth-wrapper.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/auth-wrapper/auth-wrapper.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background: url('loginwrapper.svg') no-repeat center center/cover; }\n"

/***/ }),

/***/ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/auth-wrapper/auth-wrapper.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapperComponent", function() { return AuthWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent() {
    }
    AuthWrapperComponent.prototype.ngOnInit = function () {
    };
    AuthWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-wrapper',
            template: __webpack_require__(/*! ./auth-wrapper.component.html */ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./auth-wrapper.component.scss */ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthWrapperComponent);
    return AuthWrapperComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/auth/auth-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/auth/register/register.component.ts");
/* harmony import */ var _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sharedModules/shared-module/shared-module.module */ "./src/app/shared-modules/shared-module/shared-module.module.ts");
/* harmony import */ var _auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-wrapper/auth-wrapper.component */ "./src/app/pages/auth/auth-wrapper/auth-wrapper.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/account/account.service */ "./src/app/services/account/account.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_spinner_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @store/spinner/actions */ "./src/app/store/spinner/actions.ts");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
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



var AuthModule = /** @class */ (function () {
    function AuthModule(authFacade, spinnerStore) {
        this.authFacade = authFacade;
        this.spinnerStore = spinnerStore;
        this.authFacade.checkAuthStatusAndRedirect();
    }
    AuthModule.prototype.ngOnInit = function () {
        this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_10__["StopSpinner"]());
    };
    AuthModule.prototype.ngOnDestroy = function () {
        this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_10__["StartSpinner"]());
    };
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["AuthWrapperComponent"]],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_account_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]]
        }),
        __metadata("design:paramtypes", [_app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_11__["AuthFacade"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"login()\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\"\n                     name=\"email\"\n                     formControlName=\"email\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!signinForm.get('email').valid && signinForm.get('email').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signinForm.get('email').errors['emailIsForbidden']\">This email is invalid!</span>\n              <span *ngIf=\"signinForm.get('email').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n            <input matInput placeholder=\"Password\"\n                   formControlName=\"password\"\n                   type=\"password\"\n                   name=\"password\" required>\n          </mat-form-field>\n            <div\n              *ngIf=\"!signinForm.get('password').valid && signinForm.get('password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signinForm.get('password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n      </table>\n      <mat-card-actions>\n        <button mat-raised-button\n                color=\"primary\"\n                [disabled]=\"!signinForm.valid && signinForm.touched || !signinForm.touched\n    \">Login</button>\n        <a mat-button [routerLink]=\"['/auth/register']\">Register</a>\n      </mat-card-actions>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-login {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/account/account.service */ "./src/app/services/account/account.service.ts");
/* harmony import */ var _store_spinner_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/spinner/actions */ "./src/app/store/spinner/actions.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @models/user */ "./src/app/models/user.ts");
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _facadespermission_permissionFacade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @facadespermission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
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


// actions

// reducers





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authFacade, authService, accountService, store, spinnerStore) {
        this.router = router;
        this.authFacade = authFacade;
        this.authService = authService;
        this.accountService = accountService;
        this.store = store;
        this.spinnerStore = spinnerStore;
        /**
         * Component state.
         * @type {boolean}
         */
        this.alive = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    };
    /**
     *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
     * @method ngOnDestroy
     */
    LoginComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login({ email: this.signinForm.value.email, password: this.signinForm.value.password })
            .subscribe(function (resp) {
            if (resp.token) {
                _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticateAction"](resp.token));
                _this.accountService.getAccount().subscribe(function (response) {
                    var permissions = _facadespermission_permissionFacade__WEBPACK_IMPORTED_MODULE_12__["PermissionFacade"].groupByModelName(response.data.permissions);
                    var user = new _models_user__WEBPACK_IMPORTED_MODULE_10__["User"](response.data);
                    if (permissions) {
                        user.permissions = permissions;
                    }
                    _this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_9__["StopSpinner"]());
                    _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticatedSuccessAction"]({ authenticated: true, user: user }));
                    _this.authFacade.checkAuthStatusAndRedirect();
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_11__["AuthFacade"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_account_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"register()\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Name\"\n                     name=\"email\"\n                     formControlName=\"name\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('name').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\"\n                     name=\"email\"\n                     formControlName=\"email\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('email').errors['emailIsForbidden']\">This email is invalid!</span>\n              <span *ngIf=\"signupForm.get('email').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\"\n                     formControlName=\"password\"\n                     type=\"password\"\n                     name=\"password\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Confirm password\"\n                     formControlName=\"confirm_password\"\n                     type=\"password\"\n                     name=\"confirm_password\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('confirm_password').valid && signupForm.get('confirm_password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('confirm_password').errors['confirmedPassword']\">Password not confirmed!</span>\n              <span *ngIf=\"signupForm.get('confirm_password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n      </table>\n      <mat-card-actions>\n        <button mat-raised-button\n                color=\"primary\"\n                [disabled]=\"!signupForm.valid && signupForm.touched || !signupForm.touched\n    \">Register</button>\n      </mat-card-actions>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, spinnerStore) {
        this.router = router;
        this.authService = authService;
        this.spinnerStore = spinnerStore;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmedPassword.bind(this)]),
        });
    };
    RegisterComponent.prototype.confirmedPassword = function (control) {
        if (this.signupForm && this.signupForm.get('password').value !== this.signupForm.get('confirm_password').value) {
            return { 'confirmedPassword': true };
        }
        else {
            return null;
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.signupForm);
        this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        this.authService.register({ name: this.signupForm.get('name').value,
            email: this.signupForm.get('email').value,
            password: this.signupForm.get('password').value,
            password_confirmation: this.signupForm.get('confirm_password').value })
            .subscribe(function (resp) {
            _this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StopSpinner"]());
            _this.router.navigate(['/auth/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
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



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map