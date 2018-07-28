(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-layout-school-school-module"],{

/***/ "./src/app/pages/layout/school/school-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/layout/school/school-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SchoolRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolRoutingModule", function() { return SchoolRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {},
];
var SchoolRoutingModule = /** @class */ (function () {
    function SchoolRoutingModule() {
    }
    SchoolRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], SchoolRoutingModule);
    return SchoolRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/layout/school/school.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/layout/school/school.module.ts ***!
  \******************************************************/
/*! exports provided: SchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolModule", function() { return SchoolModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_layout_school_school_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/layout/school/school-routing.module */ "./src/app/pages/layout/school/school-routing.module.ts");
/* harmony import */ var _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sharedModules/shared-module/shared-module.module */ "./src/app/shared-modules/shared-module/shared-module.module.ts");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/layout/school/create-school/create-school.component */ "./src/app/pages/layout/school/create-school/create-school.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SchoolModule = /** @class */ (function () {
    function SchoolModule() {
    }
    SchoolModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _pages_layout_school_school_routing_module__WEBPACK_IMPORTED_MODULE_2__["SchoolRoutingModule"]
            ],
            declarations: [_pages_layout_school_create_school_create_school_component__WEBPACK_IMPORTED_MODULE_5__["CreateSchoolComponent"]],
            providers: [_services_school_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolService"]]
        })
    ], SchoolModule);
    return SchoolModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-layout-school-school-module.js.map