(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/ngx-mask/fesm5/ngx-mask.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-mask/fesm5/ngx-mask.js ***!
  \*************************************************/
/*! exports provided: config, NEW_CONFIG, INITIAL_CONFIG, initialConfig, MaskDirective, MaskService, NgxMaskModule, _configFactory, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MaskApplierService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MaskPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
var /** @type {?} */ NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
var /** @type {?} */ INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
var /** @type {?} */ initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    dropSpecialCharacters: true,
    specialCharacters: ['/', '(', ')', '.', ':', '-', ' ', '+', ',', '@', '[', ']'],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        'A': {
            pattern: new RegExp('\[a-zA-Z0-9\]')
        },
        'S': {
            pattern: new RegExp('\[a-zA-Z\]')
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = '';
        this._shift = new Set();
        this.maskSpecialCharacters = /** @type {?} */ ((this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = /** @type {?} */ ((this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskApplierService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        var /** @type {?} */ cursor = 0;
        var /** @type {?} */ result = "";
        var /** @type {?} */ multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        var /** @type {?} */ inputArray = inputValue.toString()
            .split('');
        // tslint:disable-next-line
        for (var /** @type {?} */ i = 0, /** @type {?} */ inputSymbol = inputArray[0]; i
            < inputArray.length; i++, inputSymbol = inputArray[i]) {
            if (cursor === maskExpression.length) {
                break;
            }
            if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                result += inputSymbol;
                cursor += 2;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])
                && maskExpression[cursor + 1]
                    === '*') {
                result += inputSymbol;
                multi = true;
            }
            else if (maskExpression[cursor + 1] === '*' && multi
                && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
                multi = false;
            }
            else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                result += inputSymbol;
                cursor++;
            }
            else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                var /** @type {?} */ shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                    ? inputArray.length
                    : cursor;
                this._shift.add(shiftStep + this.prefix.length || 0);
                i--;
            }
            else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                && this.maskAvailablePatterns[maskExpression[cursor]]
                && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                cursor++;
                i--;
            }
        }
        if (result.length + 1 === maskExpression.length
            && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        var /** @type {?} */ shift = 1;
        var /** @type {?} */ newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        return this.prefix + result;
    };
    /**
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    MaskApplierService.prototype._checkSymbolMask = /**
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    function (inputSymbol, maskSymbol) {
        return inputSymbol === maskSymbol
            || this.maskAvailablePatterns[maskSymbol]
                && this.maskAvailablePatterns[maskSymbol].pattern
                && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    };
    MaskApplierService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [config,] }] }
    ]; };
    return MaskApplierService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaskService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MaskService, _super);
    function MaskService(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.maskExpression = '';
        _this.onChange = function (_) { };
        _this.onTouch = function () { };
        _this._formElement = _this._elementRef.nativeElement;
        return _this;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        var /** @type {?} */ result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removePrefix(result), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this._removeMask(this._removePrefix(result), this.maskSpecialCharacters))
                : this.onChange(this._removePrefix(result));
        return result;
    };
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyValueChanges = /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        var /** @type {?} */ maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    /**
     * @return {?}
     */
    MaskService.prototype.clearIfNotMatchFn = /**
     * @return {?}
     */
    function () {
        if (this.clearIfNotMatch === true && this.maskExpression.length
            !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    Object.defineProperty(MaskService.prototype, "formElementProperty", {
        set: /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), name = _b[0], value = _b[1];
            this._renderer.setProperty(this._formElement, name, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._removeMask = /**
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removePrefix = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    };
    /**
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._regExpForRemove = /**
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove
            .map(function (item) { return "\\" + item; })
            .join('|'), 'gi');
    };
    MaskService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    MaskService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [config,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    return MaskService;
}(MaskApplierService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaskDirective = /** @class */ (function () {
    function MaskDirective(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this._position = null;
        this.onChange = function (_) { };
        this.onTouch = function () { };
    }
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskValue = value || '';
            if (!this._maskValue) {
                return;
            }
            this._maskService.maskExpression = this._maskValue;
            this._maskService.formElementProperty = [
                'value',
                this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value || !Array.isArray(value) || Array.isArray(value) && !value.length) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "prefix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "sufix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.sufix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.showTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        var /** @type {?} */ position = /** @type {?} */ (el.selectionStart);
        var /** @type {?} */ caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return caretShift = shift; });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd = this._position !== null
            ? this._position
            : position + (
            // tslint:disable-next-line
            (/** @type {?} */ (e)).inputType === 'deleteContentBackward'
                ? 0
                : caretShift);
        this._position = null;
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._maskService.prefix) {
            return;
        }
        var /** @type {?} */ el = (/** @type {?} */ (e.target));
        if ((el.selectionStart === el.selectionEnd)
            && el.selectionStart
                > this._maskService.prefix.length
            // tslint:disable-next-line
            && (/** @type {?} */ (e)).keyCode
                !== 38) {
            return;
        }
        e.preventDefault();
        el.selectionStart = el.selectionEnd = this._maskService.prefix.length;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.a = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 8) {
            this.onFocus(e);
        }
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onPaste = /**
     * @return {?}
     */
    function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    MaskDirective.prototype.writeValue = /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    function (inputValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (inputValue === undefined) {
                    return [2 /*return*/];
                }
                inputValue && this._maskService.maskExpression
                    ? this._maskService.formElementProperty = [
                        'value',
                        this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                    ]
                    : this._maskService.formElementProperty = ['value', inputValue];
                this._inputValue = inputValue;
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaskDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaskDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    MaskDirective.prototype.setDisabledState = /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    };
    MaskDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mask]',
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaskDirective; }),
                            multi: true
                        },
                        MaskService
                    ],
                },] }
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: MaskService }
    ]; };
    MaskDirective.propDecorators = {
        maskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mask',] }],
        specialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        patterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sufix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropSpecialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearIfNotMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        a: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
        onPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['paste',] }]
    };
    return MaskDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    MaskPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    function (value, mask) {
        if (!value) {
            return '';
        }
        return this._maskService.applyMask("" + value, mask);
    };
    MaskPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'mask',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    MaskPipe.ctorParameters = function () { return [
        { type: MaskApplierService }
    ]; };
    return MaskPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxMaskModule = /** @class */ (function () {
    function NgxMaskModule() {
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskModule.forRoot = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG]
                },
            ]
        };
    };
    NgxMaskModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [MaskApplierService],
                    exports: [MaskDirective, MaskPipe],
                    declarations: [MaskDirective, MaskPipe]
                },] }
    ];
    return NgxMaskModule;
}());
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, initConfig, configValue);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2suanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXNrL2FwcC9uZ3gtbWFzay9jb25maWcudHMiLCJuZzovL25neC1tYXNrL2FwcC9uZ3gtbWFzay9tYXNrLWFwcGxpZXIuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2svYXBwL25neC1tYXNrL21hc2suc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2svYXBwL25neC1tYXNrL21hc2suZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFzay9hcHAvbmd4LW1hc2svbWFzay5waXBlLnRzIiwibmc6Ly9uZ3gtbWFzay9hcHAvbmd4LW1hc2svbmd4LW1hc2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XG4gICAgc3VmaXg6IHN0cmluZztcbiAgICBwcmVmaXg6IHN0cmluZztcbiAgICBjbGVhcklmTm90TWF0Y2g6IGJvb2xlYW47XG4gICAgc2hvd1RlbXBsYXRlOiBib29sZWFuO1xuICAgIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogYm9vbGVhbiB8IHN0cmluZ1tdO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmdbXTtcbiAgICBwYXR0ZXJuczoge1xuICAgICAgICBbY2hhcmFjdGVyOiBzdHJpbmddOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAsXG4gICAgICAgICAgICBvcHRpb25hbD86IGJvb2xlYW5cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB0eXBlIG9wdGlvbnNDb25maWcgPSBQYXJ0aWFsPElDb25maWc+O1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbignY29uZmlnJyk7XG5leHBvcnQgY29uc3QgTkVXX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkVXX0NPTkZJRycpO1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxJQ29uZmlnPiA9IG5ldyBJbmplY3Rpb25Ub2tlbignSU5JVElBTF9DT05GSUcnKTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb25maWc6IElDb25maWcgPSB7XG4gICAgc3VmaXg6ICcnLFxuICAgIHByZWZpeDogJycsXG4gICAgY2xlYXJJZk5vdE1hdGNoOiBmYWxzZSxcbiAgICBzaG93VGVtcGxhdGU6IGZhbHNlLFxuICAgIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZSxcbiAgICBzcGVjaWFsQ2hhcmFjdGVyczogWycvJywgJygnLCAnKScsICcuJywgJzonLCAnLScsICcgJywgJysnLCAnLCcsICdAJywgJ1snLCAnXSddLFxuICAgIHBhdHRlcm5zOiB7XG4gICAgICAgICcwJzoge1xuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcbiAgICAgICAgfSxcbiAgICAgICAgJzknOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxuICAgICAgICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ0EnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFthLXpBLVowLTlcXF0nKVxuICAgICAgICB9LFxuICAgICAgICAnUyc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcW2EtekEtWlxcXScpXG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb25maWcsIElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXNrQXBwbGllclNlcnZpY2Uge1xuXG4gICAgcHVibGljIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ107XG4gICAgcHVibGljIHNob3dUZW1wbGF0ZTogSUNvbmZpZ1snc2hvd1RlbXBsYXRlJ107XG4gICAgcHVibGljIGNsZWFySWZOb3RNYXRjaDogSUNvbmZpZ1snY2xlYXJJZk5vdE1hdGNoJ107XG4gICAgcHVibGljIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgbWFza1NwZWNpYWxDaGFyYWN0ZXJzOiBJQ29uZmlnWydzcGVjaWFsQ2hhcmFjdGVycyddO1xuICAgIHB1YmxpYyBtYXNrQXZhaWxhYmxlUGF0dGVybnM6IElDb25maWdbJ3BhdHRlcm5zJ107XG4gICAgcHVibGljIHByZWZpeDogSUNvbmZpZ1sncHJlZml4J107XG4gICAgcHVibGljIHN1Zml4OiBJQ29uZmlnWydzdWZpeCddO1xuXG5cbiAgICBwcml2YXRlIF9zaGlmdDogU2V0PG51bWJlcj47XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoY29uZmlnKSBwcm90ZWN0ZWQgX2NvbmZpZzogSUNvbmZpZ1xuICAgICkge1xuICAgICAgICB0aGlzLl9zaGlmdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHRoaXMuX2NvbmZpZy5wYXR0ZXJucztcblxuICAgICAgICB0aGlzLmNsZWFySWZOb3RNYXRjaCA9IHRoaXMuX2NvbmZpZy5jbGVhcklmTm90TWF0Y2g7XG4gICAgICAgIHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnLmRyb3BTcGVjaWFsQ2hhcmFjdGVycztcbiAgICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHRoaXMuX2NvbmZpZy5wYXR0ZXJucztcbiAgICAgICAgdGhpcy5wcmVmaXggPSB0aGlzLl9jb25maWcucHJlZml4O1xuICAgICAgICB0aGlzLnN1Zml4ID0gdGhpcy5fY29uZmlnLnN1Zml4O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFwcGx5TWFzayhcbiAgICAgICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxuICAgICAgICBtYXNrRXhwcmVzc2lvbjogc3RyaW5nLFxuICAgICAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcbiAgICAgICAgY2I6IEZ1bmN0aW9uID0gKCkgPT4ge31cbiAgICApOiBzdHJpbmcge1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0VmFsdWUgPT09IG51bGwgfHwgbWFza0V4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnNvcjogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nID0gYGA7XG4gICAgICAgIGxldCBtdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnNsaWNlKDAsIHRoaXMucHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJlZml4KSB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zbGljZSh0aGlzLnByZWZpeC5sZW5ndGgsIGlucHV0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlucHV0QXJyYXk6IHN0cmluZ1tdID0gaW5wdXRWYWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgICAuc3BsaXQoJycpO1xuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwLCBpbnB1dFN5bWJvbDogc3RyaW5nID0gaW5wdXRBcnJheVswXTsgaVxuICAgICAgICA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyssIGlucHV0U3ltYm9sID0gaW5wdXRBcnJheVtpXSkge1xuICAgICAgICAgICAgaWYgKGN1cnNvciA9PT0gbWFza0V4cHJlc3Npb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICYmIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSAnPycpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XG4gICAgICAgICAgICAgICAgY3Vyc29yICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSlcbiAgICAgICAgICAgICAgICAmJiBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXVxuICAgICAgICAgICAgICAgID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XG4gICAgICAgICAgICAgICAgbXVsdGkgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gJyonICYmIG11bHRpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcbiAgICAgICAgICAgICAgICBjdXJzb3IgKz0gMztcbiAgICAgICAgICAgICAgICBtdWx0aSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gJz8nICYmIHRoaXMuX2NoZWNrU3ltYm9sTWFzayhcbiAgICAgICAgICAgICAgICBpbnB1dFN5bWJvbCxcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcbiAgICAgICAgICAgICAgICBjdXJzb3IgKz0gMztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcbiAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gbWFza0V4cHJlc3Npb25bY3Vyc29yXTtcbiAgICAgICAgICAgICAgICBjdXJzb3IrKztcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpKVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIDogY3Vyc29yO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKGlucHV0U3ltYm9sKSA+IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza0V4cHJlc3Npb25bY3Vyc29yXV1cbiAgICAgICAgICAgICAgICAmJiB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrRXhwcmVzc2lvbltjdXJzb3JdXS5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICsgMSA9PT0gbWFza0V4cHJlc3Npb24ubGVuZ3RoXG4gICAgICAgICAgICAmJiB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKG1hc2tFeHByZXNzaW9uW21hc2tFeHByZXNzaW9uLmxlbmd0aCAtIDFdKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGlmdDogbnVtYmVyID0gMTtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvbiArIDE7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuX3NoaWZ0LmhhcyhuZXdQb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHNoaWZ0Kys7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbisrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2IodGhpcy5fc2hpZnQuaGFzKHBvc2l0aW9uKSA/IHNoaWZ0IDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZml4ICsgcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbDogc3RyaW5nLCBtYXNrU3ltYm9sOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlucHV0U3ltYm9sID09PSBtYXNrU3ltYm9sXG4gICAgICAgICAgICB8fCB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXVxuICAgICAgICAgICAgJiYgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza1N5bWJvbF0ucGF0dGVyblxuICAgICAgICAgICAgJiYgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza1N5bWJvbF0ucGF0dGVybi50ZXN0KGlucHV0U3ltYm9sKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29uZmlnLCBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWFza0FwcGxpZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXNrLWFwcGxpZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXNrU2VydmljZSBleHRlbmRzIE1hc2tBcHBsaWVyU2VydmljZSB7XG5cbiAgICBwdWJsaWMgbWFza0V4cHJlc3Npb246IHN0cmluZyA9ICcnO1xuXG5cbiAgICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblxuICAgIHB1YmxpYyBvblRvdWNoID0gKCkgPT4geyB9O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgICAgICBASW5qZWN0KGNvbmZpZykgcHJvdGVjdGVkIF9jb25maWc6IElDb25maWcsXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKF9jb25maWcpO1xuXG5cbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGx5TWFzayhcbiAgICAgICAgaW5wdXRWYWx1ZTogc3RyaW5nLCBtYXNrRXhwcmVzc2lvbjogc3RyaW5nLFxuICAgICAgICBwb3NpdGlvbjogbnVtYmVyID0gMCwgY2I6IEZ1bmN0aW9uID0gKCkgPT4geyB9XG4gICAgKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBzdXBlci5hcHBseU1hc2soaW5wdXRWYWx1ZSwgbWFza0V4cHJlc3Npb24sIHBvc2l0aW9uLCBjYik7XG5cbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycylcbiAgICAgICAgICAgID8gdGhpcy5vbkNoYW5nZSh0aGlzLl9yZW1vdmVNYXNrKHRoaXMuX3JlbW92ZVByZWZpeChyZXN1bHQpLCB0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycykpXG4gICAgICAgICAgICA6IHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzID09PSB0cnVlXG4gICAgICAgICAgICA/IHRoaXMub25DaGFuZ2UodGhpcy5fcmVtb3ZlTWFzayh0aGlzLl9yZW1vdmVQcmVmaXgocmVzdWx0KSwgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMpKVxuICAgICAgICAgICAgOiB0aGlzLm9uQ2hhbmdlKHRoaXMuX3JlbW92ZVByZWZpeChyZXN1bHQpKTtcblxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGx5VmFsdWVDaGFuZ2VzKHBvc2l0aW9uOiBudW1iZXIgPSAwLCBjYjogRnVuY3Rpb24gPSAoKSA9PiB7IH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWFza2VkSW5wdXQ6IHN0cmluZyA9IHRoaXMuYXBwbHlNYXNrKHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLCB0aGlzLm1hc2tFeHByZXNzaW9uLCBwb3NpdGlvbiwgY2IpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlID0gbWFza2VkSW5wdXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Zvcm1FbGVtZW50ID09PSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFySWZOb3RNYXRjaEZuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFySWZOb3RNYXRjaEZuKCk6IHZvaWQge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNsZWFySWZOb3RNYXRjaCA9PT0gdHJ1ZSAmJiB0aGlzLm1hc2tFeHByZXNzaW9uLmxlbmd0aFxuICAgICAgICAgICAgIT09IHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudFByb3BlcnR5ID0gWyd2YWx1ZScsICcnXTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLCB0aGlzLm1hc2tFeHByZXNzaW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZm9ybUVsZW1lbnRQcm9wZXJ0eShbbmFtZSwgdmFsdWVdOiBbc3RyaW5nLCBzdHJpbmcgfCBib29sZWFuXSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9mb3JtRWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZU1hc2sodmFsdWU6IHN0cmluZywgc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmU6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICA/IHZhbHVlLnJlcGxhY2UodGhpcy5fcmVnRXhwRm9yUmVtb3ZlKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlKSwgJycpXG4gICAgICAgICAgICA6IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZVByZWZpeCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgPyB2YWx1ZS5yZXBsYWNlKHRoaXMucHJlZml4LCAnJylcbiAgICAgICAgICAgIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVnRXhwRm9yUmVtb3ZlKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlOiBzdHJpbmdbXSk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlXG4gICAgICAgICAgICAubWFwKChpdGVtOiBzdHJpbmcpID0+IGBcXFxcJHtpdGVtfWApXG4gICAgICAgICAgICAuam9pbignfCcpLCAnZ2knKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWFza1NlcnZpY2UgfSBmcm9tICcuL21hc2suc2VydmljZSc7XG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttYXNrXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFza0RpcmVjdGl2ZSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBNYXNrU2VydmljZVxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hc2tEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBwcml2YXRlIF9tYXNrVmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9pbnB1dFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgcHVibGljIG9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuXG4gICAgcHVibGljIG9uVG91Y2ggPSAoKSA9PiB7IH07XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrU2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgQElucHV0KCdtYXNrJylcbiAgICBwdWJsaWMgc2V0IG1hc2tFeHByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbWFza1ZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgICAgIGlmICghdGhpcy5fbWFza1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb24gPSB0aGlzLl9tYXNrVmFsdWU7XG4gICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLmZvcm1FbGVtZW50UHJvcGVydHkgPSBbXG4gICAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICAgdGhpcy5fbWFza1NlcnZpY2UuYXBwbHlNYXNrKHRoaXMuX2lucHV0VmFsdWUsIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tFeHByZXNzaW9uKVxuICAgICAgICBdO1xuXG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBJQ29uZmlnWydzcGVjaWFsQ2hhcmFjdGVycyddKSB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcGF0dGVybnModmFsdWU6IElDb25maWdbJ3BhdHRlcm5zJ10pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IElDb25maWdbJ3ByZWZpeCddKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc3VmaXgodmFsdWU6IElDb25maWdbJ3N1Zml4J10pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLnN1Zml4ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGRyb3BTcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ10pIHtcbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2UuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNob3dUZW1wbGF0ZSh2YWx1ZTogSUNvbmZpZ1snc2hvd1RlbXBsYXRlJ10pIHtcbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2Uuc2hvd1RlbXBsYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNsZWFySWZOb3RNYXRjaCh2YWx1ZTogSUNvbmZpZ1snY2xlYXJJZk5vdE1hdGNoJ10pIHtcbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWw6IEhUTUxJbnB1dEVsZW1lbnQgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2lucHV0VmFsdWUgPSBlbC52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXNrVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZWwudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IGVsLnNlbGVjdGlvblN0YXJ0IGFzIG51bWJlcjtcbiAgICAgICAgbGV0IGNhcmV0U2hpZnQ6IG51bWJlciA9IDA7XG5cbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2UuYXBwbHlWYWx1ZUNoYW5nZXMoXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIChzaGlmdDogbnVtYmVyKSA9PiBjYXJldFNoaWZ0ID0gc2hpZnRcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBvbmx5IHNldCB0aGUgc2VsZWN0aW9uIGlmIHRoZSBlbGVtZW50IGlzIGFjdGl2ZVxuICAgICAgICBpZiAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25FbmQgPSB0aGlzLl9wb3NpdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgPyB0aGlzLl9wb3NpdGlvblxuICAgICAgICAgICAgOiBwb3NpdGlvbiArIChcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgKGUgYXMgYW55KS5pbnB1dFR5cGUgPT09ICdkZWxldGVDb250ZW50QmFja3dhcmQnXG4gICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgOiBjYXJldFNoaWZ0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgICBwdWJsaWMgb25CbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tYXNrU2VydmljZS5jbGVhcklmTm90TWF0Y2hGbigpO1xuICAgICAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRm9jdXMoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsOiBIVE1MSW5wdXRFbGVtZW50ID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuXG5cbiAgICAgICAgaWYgKChlbC5zZWxlY3Rpb25TdGFydCA9PT0gZWwuc2VsZWN0aW9uRW5kKVxuICAgICAgICAgICAgJiYgZWwuc2VsZWN0aW9uU3RhcnRcbiAgICAgICAgICAgID4gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAmJiAoZSBhcyBhbnkpLmtleUNvZGVcbiAgICAgICAgICAgICE9PSAzOCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25FbmQgPSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoO1xuXG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIGEoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgdGhpcy5vbkZvY3VzKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigncGFzdGUnKVxuICAgIHB1YmxpYyBvblBhc3RlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIH1cblxuXG4gICAgLyoqIEl0IHdyaXRlcyB0aGUgdmFsdWUgaW4gdGhlIGlucHV0ICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlVmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChpbnB1dFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0VmFsdWUgJiYgdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb25cbiAgICAgICAgICAgID8gdGhpcy5fbWFza1NlcnZpY2UuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFtcbiAgICAgICAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhpbnB1dFZhbHVlLCB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvbilcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogdGhpcy5fbWFza1NlcnZpY2UuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFsndmFsdWUnLCBpbnB1dFZhbHVlXTtcblxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2Uub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICAgIH1cblxuICAgIC8qKiBJdCBkaXNhYmxlcyB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbWFza1NlcnZpY2UuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFsnZGlzYWJsZWQnLCBpc0Rpc2FibGVkXTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtYXNrJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBNYXNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXNrU2VydmljZTogTWFza0FwcGxpZXJTZXJ2aWNlKSB7IH1cblxuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmd8bnVtYmVyLCBtYXNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhgJHt2YWx1ZX1gLCBtYXNrKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBJTklUSUFMX0NPTkZJRywgaW5pdGlhbENvbmZpZywgTkVXX0NPTkZJRywgb3B0aW9uc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICcuL21hc2sucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW01hc2tBcHBsaWVyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtNYXNrRGlyZWN0aXZlLCBNYXNrUGlwZV0sXG4gIGRlY2xhcmF0aW9uczogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNrTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnVmFsdWU/OiBvcHRpb25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hNYXNrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBORVdfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSU5JVElBTF9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGluaXRpYWxDb25maWdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IGNvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBfY29uZmlnRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbSU5JVElBTF9DT05GSUcsIE5FV19DT05GSUddXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbmZpZ0ZhY3Rvcnlcbihpbml0Q29uZmlnOiBvcHRpb25zQ29uZmlnLCBjb25maWdWYWx1ZTogb3B0aW9uc0NvbmZpZyB8ICgoKSA9PiBvcHRpb25zQ29uZmlnKSk6IEZ1bmN0aW9uIHwgb3B0aW9uc0NvbmZpZyB7XG4gIHJldHVybiAodHlwZW9mIGNvbmZpZ1ZhbHVlID09PSAnZnVuY3Rpb24nKSA/IGNvbmZpZ1ZhbHVlKCkgOiB7IC4uLmluaXRDb25maWcsIC4uLmNvbmZpZ1ZhbHVlIH07XG59XG4iXSwibmFtZXMiOlsidHNsaWJf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

/***/ }),

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
/* harmony import */ var _pages_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/auth/forgot-password/forgot-password.component */ "./src/app/pages/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/auth/reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_auth_email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/auth/email-sent/email-sent.component */ "./src/app/pages/auth/email-sent/email-sent.component.ts");
/* harmony import */ var _pages_auth_setup_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/auth/setup/setup.component */ "./src/app/pages/auth/setup/setup.component.ts");
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
            {
                path: 'forgotPassword', component: _pages_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
            },
            {
                path: 'resetPassword', component: _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"],
            },
            {
                path: 'emailSent', component: _pages_auth_email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_7__["EmailSentComponent"],
            },
            {
                path: 'setup', component: _pages_auth_setup_setup_component__WEBPACK_IMPORTED_MODULE_8__["SetupComponent"],
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

module.exports = ".auth-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n  .auth-wrapper ::ng-deep .auth-modal {\n    width: 242px;\n    padding: 24px 47px; }\n  .auth-wrapper ::ng-deep .auth-modal .mat-card-header {\n      justify-content: center; }\n  .auth-wrapper ::ng-deep .auth-modal .mat-card-header .mat-card-title {\n        font-size: 17px;\n        font-weight: bold;\n        color: rgba(53, 49, 49, 0.75);\n        text-align: center; }\n  .auth-wrapper ::ng-deep .auth-modal form table {\n      width: 100%; }\n  .auth-wrapper ::ng-deep .auth-modal form table .form-field-header {\n        font-size: 18px;\n        color: #313030; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-form-field {\n        width: 100%;\n        margin-bottom: 8px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-form-field ::ng-deep .mat-form-field-wrapper {\n          border: rgba(53, 49, 49, 0.44) solid 1px;\n          border-radius: 2px;\n          height: 35px;\n          padding-bottom: 0; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-infix {\n            bottom: 8px;\n            width: auto;\n            padding-left: 10px;\n            padding-right: 10px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-form-field ::ng-deep .mat-form-field-underline {\n          display: none; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-card-actions {\n        margin-right: 0;\n        margin-left: 0;\n        margin-bottom: 7px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-card-actions button {\n          width: 100%;\n          height: 30px;\n          margin-top: 20px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .mat-card-actions button ::ng-deep span {\n            position: relative;\n            bottom: 4px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .additional-options {\n        display: flex;\n        justify-content: space-between;\n        font-size: 11px;\n        color: rgba(53, 49, 49, 0.75); }\n  .auth-wrapper ::ng-deep .auth-modal form table .additional-options .mat-checkbox {\n          color: rgba(53, 49, 49, 0.75); }\n  .auth-wrapper ::ng-deep .auth-modal form table .additional-options .mat-checkbox ::ng-deep .mat-checkbox-inner-container {\n            height: 15px;\n            width: 15px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .additional-options .mat-checkbox ::ng-deep .mat-checkbox-inner-container .mat-checkbox-frame {\n              border-width: 1px; }\n  .auth-wrapper ::ng-deep .auth-modal form table .additional-options .forgot-pass {\n          margin-top: 8px;\n          color: #71bce6; }\n  .auth-wrapper ::ng-deep .auth-modal form table .additional-options .forgot-pass:hover {\n            cursor: pointer; }\n  .auth-wrapper ::ng-deep .auth-modal .social-button {\n      display: flex;\n      justify-content: space-between;\n      height: 28px;\n      border-radius: 3px;\n      margin-bottom: 20px; }\n  .auth-wrapper ::ng-deep .auth-modal .social-button:hover {\n        cursor: pointer; }\n  .auth-wrapper ::ng-deep .auth-modal .social-button span {\n        width: 80%;\n        -ms-grid-row-align: center;\n            align-self: center;\n        color: white; }\n  .auth-wrapper ::ng-deep .auth-modal .social-button img {\n        position: relative;\n        left: 6px;\n        width: 26px;\n        height: 26px; }\n  .auth-wrapper ::ng-deep .auth-modal .fbButton {\n      background-color: #4b6fa5; }\n  .auth-wrapper ::ng-deep .auth-modal .gButton {\n      background-color: #ffffff;\n      border: #ccc solid 1px;\n      color: black; }\n  .auth-wrapper ::ng-deep .auth-modal .gButton img {\n        width: 24px;\n        height: 24px;\n        top: 2px; }\n  .auth-wrapper ::ng-deep .auth-modal .gButton span {\n        color: #313030; }\n  .auth-wrapper ::ng-deep .auth-modal .noAcc {\n      color: #313030;\n      text-align: center; }\n  .auth-wrapper ::ng-deep .auth-modal .noAcc a {\n        color: #71bce6;\n        text-decoration: none;\n        margin-left: 4px; }\n"

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
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/pages/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./email-sent/email-sent.component */ "./src/app/pages/auth/email-sent/email-sent.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/pages/auth/setup/setup.component.ts");
/* harmony import */ var _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
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
                ngx_mask__WEBPACK_IMPORTED_MODULE_15__["NgxMaskModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sharedModules_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["AuthWrapperComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"], _email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_16__["EmailSentComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_17__["SetupComponent"]],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_school_school_service__WEBPACK_IMPORTED_MODULE_12__["SchoolService"], _services_account_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"], _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_18__["PaymentService"]]
        }),
        __metadata("design:paramtypes", [_app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_11__["AuthFacade"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/email-sent/email-sent.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth/email-sent/email-sent.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-sent-wrapper\">\n  <mat-card class=\"auth-modal\">\n    <mat-card-header>\n      <mat-card-title>Thank's</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      You need to confirm your email to prove authenticity.\n      <br>\n      Please, check your email: <b class=\"link text_under_line\">{{user.email}}</b>\n      <br>\n      If yo don't see the confirmation email, check your spam folder or send confirmation mail again.\n      <form>\n        <table cellspacing=\"0\">\n          <mat-card-actions>\n            <button mat-button (click)=\"resendEmail()\">\n              Send again\n            </button>\n          </mat-card-actions>\n        </table>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/email-sent/email-sent.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth/email-sent/email-sent.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .auth-wrapper .email-sent-wrapper .auth-modal {\n  width: 456px;\n  text-align: center;\n  box-shadow: none;\n  border-radius: 6px;\n  border: rgba(155, 155, 155, 0.31) solid 1px; }\n  ::ng-deep .auth-wrapper .email-sent-wrapper .auth-modal .mat-card-content {\n    color: #313030d6;\n    line-height: 1.6; }\n  ::ng-deep .auth-wrapper .email-sent-wrapper .auth-modal .mat-card-content form > table {\n      width: 242px;\n      margin: auto; }\n  ::ng-deep .auth-wrapper .email-sent-wrapper .auth-modal .mat-card-content form > table .mat-card-actions > button {\n        background-color: #2e7e88;\n        color: white; }\n"

/***/ }),

/***/ "./src/app/pages/auth/email-sent/email-sent.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/email-sent/email-sent.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailSentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSentComponent", function() { return EmailSentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailSentComponent = /** @class */ (function () {
    function EmailSentComponent(router, authStore, authService) {
        this.router = router;
        this.authStore = authStore;
        this.authService = authService;
    }
    EmailSentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStore.subscribe(function (val) {
            var auth = val.auth;
            if (auth && auth.user) {
                _this.user = auth.user;
            }
        });
        this.resendEmail();
    };
    EmailSentComponent.prototype.resendEmail = function () {
        var redirect = 'auth/login';
        if (this.user.phoneNumberVerified === false || this.user.paymentSettingVerified === false || !this.user.schools.length) {
            redirect = 'auth/setup';
        }
        this.authService.sendEmail(this.user.email, redirect)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    EmailSentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-sent',
            template: __webpack_require__(/*! ./email-sent.component.html */ "./src/app/pages/auth/email-sent/email-sent.component.html"),
            styles: [__webpack_require__(/*! ./email-sent.component.scss */ "./src/app/pages/auth/email-sent/email-sent.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EmailSentComponent);
    return EmailSentComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Enter your email and we will send confirmation link on this email address.</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"sendEmail()\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\"\n                     name=\"email\"\n                     formControlName=\"email\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!forgotPasswordForm.get('email').valid && forgotPasswordForm.get('email').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"forgotPasswordForm.get('email').errors['email']\">This email is invalid!</span>\n              <span *ngIf=\"forgotPasswordForm.get('email').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n      </table>\n      <mat-card-actions>\n        <button mat-raised-button\n                color=\"primary\"\n                [disabled]=\"!forgotPasswordForm.valid && forgotPasswordForm.touched || !forgotPasswordForm.touched\n    \">Register</button>\n      </mat-card-actions>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, authService, notificationManager) {
        this.router = router;
        this.authService = authService;
        this.notificationManager = notificationManager;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    };
    ForgotPasswordComponent.prototype.sendEmail = function () {
        var _this = this;
        this.authService.sendEmailForResettingPassword(this.forgotPasswordForm.get('email').value, 'uth/resetPassword')
            .subscribe(function (resp) {
            _this.notificationManager.success(resp.success.message ? resp.success.message : 'Password successfully', 'Success');
            _this.router.navigate(['auth/login']);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/pages/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/pages/auth/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"auth-modal\">\n  <mat-card-header>\n    <mat-card-title>Log In</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"login()\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <span class=\"form-field-header\">Enter Email</span>\n            <mat-form-field >\n              <input matInput\n                     name=\"email\"\n                     formControlName=\"email\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!signinForm.get('email').valid && signinForm.get('email').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signinForm.get('email').errors['emailIsForbidden']\">This email is invalid!</span>\n              <span *ngIf=\"signinForm.get('email').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span class=\"form-field-header\">Password</span>\n            <mat-form-field>\n            <input matInput\n                   formControlName=\"password\"\n                   type=\"password\"\n                   name=\"password\" required>\n          </mat-form-field>\n            <div class=\"additional-options\">\n              <mat-checkbox\n                class=\"remember-me-checkbox\"\n              (change)=\"rememberMe = !rememberMe\">\n                Remember me\n              </mat-checkbox>\n              <a [routerLink]=\"['/auth/forgotPassword']\" class=\"forgot-pass\">Forgot password?</a>\n            </div>\n\n            <div\n              *ngIf=\"!signinForm.get('password').valid && signinForm.get('password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signinForm.get('password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n      <mat-card-actions>\n        <button mat-raised-button\n                color=\"primary\"\n                [disabled]=\"!signinForm.valid && signinForm.touched || !signinForm.touched\n    \">Sign In</button>\n      </mat-card-actions>\n      </table>\n    </form>\n    <h4 class=\"line-with-text\"><span>OR</span></h4>\n    <div class=\"social-button fbButton\" (click)=\"loginBySocialAcc('facebook')\">\n      <img src=\"../../../../assets/fbLogo26White.png\">\n      <span>Sign In with FaceBook</span>\n    </div>\n    <div class=\"social-button gButton\" (click)=\"loginBySocialAcc('google')\">\n      <img src=\"../../../../assets/gLogo.png\">\n      <span>Sign In with Google</span>\n    </div>\n    <div class=\"noAcc\">\n      <span>Don't have an account?</span>\n      <a [routerLink]=\"['/auth/register']\">Sign Up</a>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @facades/permission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @pages/auth/reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
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
    function LoginComponent(router, authFacade, authService, socialAuthService, accountService, store, spinnerStore) {
        this.router = router;
        this.authFacade = authFacade;
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.accountService = accountService;
        this.store = store;
        this.spinnerStore = spinnerStore;
        this.rememberMe = false;
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
        this.authService.login({ email: this.signinForm.value.email, password: this.signinForm.value.password, rememberMe: this.rememberMe })
            .subscribe(function (resp) {
            if (resp.data.token) {
                _this.authenticate(resp.data.token);
            }
            _this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_9__["StopSpinner"]());
        });
    };
    LoginComponent.prototype.loginBySocialAcc = function (provider) {
        var _this = this;
        var socialPlatformProvider;
        if (provider === 'facebook') {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (provider === 'google') {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (resp) {
            _this.authService.loginBySocialAcc(provider, resp.token)
                .subscribe(function (resp) {
                console.log(resp);
                if (resp.data.status && resp.data.status === 206) {
                    var user = resp.data.authUser.data;
                    _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateAuthUser"]({
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                        provider_name: provider
                    }));
                    // this.store.dispatch(new ToggleUsedAuthSocial({provider: provider}));
                    _this.router.navigate(['auth/register']);
                }
                else {
                    _this.authenticate(resp.data.token);
                }
            });
        });
    };
    LoginComponent.prototype.authenticate = function (token) {
        var _this = this;
        console.log(token);
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticateAction"](token));
        this.accountService.getAccount().subscribe(function (response) {
            var permissions = _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_11__["PermissionFacade"].groupByModelName(response.data.permissions);
            var user = _this.authFacade.createUser(response, permissions);
            console.log(user, 'authenticate login');
            _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateAuthUser"](user));
            if (user.emailVerified === false) {
                _this.router.navigate(['auth/emailSent']);
            }
            else if (user.phoneNumberVerified === false || user.paymentSettingVerified === false || !user.schools.length) {
                _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_10__["AuthFacade"].setToken(token, _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"].resetTokenPrefix);
                _this.router.navigate(['auth/setup']);
            }
            else {
                _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticatedSuccessAction"]({ authenticated: true, user: user }));
                _this.authFacade.checkAuthStatusAndRedirect();
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_10__["AuthFacade"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
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

module.exports = "<mat-card class=\"auth-modal\">\n  <mat-card-header>\n    <mat-card-title>\n      <div class=\"social-data\" *ngIf=\"user.provider_name !== null\">\n        <p>Almost Finish</p>\n        <p class=\"sub-title color-text-middle-grey\">Please set up empty rows.</p>\n        <img src=\"{{user?.avatar}}\" class=\"avatar\">\n        <img src=\"{{user.provider_name === 'facebook'? '../../../../assets/fbLogo.png' : '../../../../assets/gLogo.png'}}\" class=\"icon-social\">\n        <div *ngIf=\"user?.name !== null\" class=\"sub-title\">{{user.name}}</div>\n        <div *ngIf=\"user?.email !== null\" class=\"sub-title color-text-middle-grey\">{{user?.email}}</div>\n      </div>\n      <div  *ngIf=\"usedAuthSocial === false\">\n        <span>New account registration</span>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"register()\">\n      <table cellspacing=\"0\">\n        <tr *ngIf=\"user?.name === null\">\n          <td>\n            <span class=\"form-field-header\">Name</span>\n            <mat-form-field>\n              <input matInput\n                     name=\"email\"\n                     formControlName=\"name\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('name').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr *ngIf=\"user?.email === null || !user\">\n          <td>\n            <span class=\"form-field-header\">Email</span>\n            <mat-form-field>\n              <input matInput\n                     name=\"email\"\n                     formControlName=\"email\"\n              >\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('email').errors['email']\">This email is invalid!</span>\n              <span *ngIf=\"signupForm.get('email').errors['required']\">This field is required!</span>\n              <span *ngIf=\"signupForm.get('email').errors['apiValidate']\">{{signupForm.get('email').errors['apiValidate']}}</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span class=\"form-field-header\">Password</span>\n            <mat-form-field>\n              <input matInput\n                     formControlName=\"password\"\n                     type=\"password\"\n                     name=\"password\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span class=\"form-field-header\">Confirm Password</span>\n            <mat-form-field>\n              <input matInput\n                     formControlName=\"confirm_password\"\n                     type=\"password\"\n                     name=\"confirm_password\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('confirm_password').valid && signupForm.get('confirm_password').touched\"\n              class=\"help-block\">\n              <span *ngIf=\"signupForm.get('confirm_password').errors['confirmedPassword']\">Password not confirmed!</span>\n              <span *ngIf=\"signupForm.get('confirm_password').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span class=\"form-field-header\">Enter Phone Number</span>\n            <mat-form-field>\n              <input matInput\n                     formControlName=\"phoneNumber\"\n                     type='text'\n                     prefix=\"+ \"\n                     mask=\"0 000 000 00 000\"\n                     name=\"phoneNumber\" required>\n            </mat-form-field>\n            <div\n              *ngIf=\"!signupForm.get('phoneNumber').valid && signupForm.get('phoneNumber').touched\"\n              class=\"help-block\">\n                <span *ngIf=\"signupForm.get('phoneNumber').errors['range']\">Phone Number should have next format: '3 777 777 77 77'</span>\n              <span *ngIf=\"signupForm.get('phoneNumber').errors['required']\">This field is required!</span>\n            </div>\n          </td>\n        </tr>\n        <mat-card-actions>\n          <button mat-raised-button\n                  color=\"primary\"\n                  [disabled]=\"!signupForm.valid && signupForm.touched || !signupForm.touched\n    \">Register</button>\n        </mat-card-actions>\n      </table>\n    </form>\n    <h4 class=\"line-with-text\"><span>OR</span></h4>\n    <div class=\"social-button fbButton\" (click)=\"loginBySocialAcc('facebook')\">\n      <img src=\"../../../../assets/fbLogo26White.png\">\n      <span>Sign In with FaceBook</span>\n    </div>\n    <div class=\"social-button gButton\" (click)=\"loginBySocialAcc('google')\">\n      <img src=\"../../../../assets/gLogo.png\">\n      <span>Sign In with Google</span>\n    </div>\n    <div class=\"noAcc\" *ngIf=\"user.provider_name === null\">\n      <span>Already have an account?</span>\n      <a [routerLink]=\"['/auth/login']\">Log In</a>\n    </div>\n    <div class=\"noAcc noAccUsedAuthSocial\" *ngIf=\"user.provider_name !== null\">\n      <span>By signing up, you agree to the <b>Terms</b> and <b>Conditions</b> and <b>Privacy Policy</b>.\n      You also agree to receive product-related email from CC you can unsubscribe at any time.</span>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-modal {\n  padding-top: 6px; }\n  .auth-modal .mat-card-title img {\n    margin-top: 20px;\n    border-radius: 50%; }\n  .auth-modal .mat-card-title .avatar {\n    width: 60px;\n    height: 60px; }\n  .auth-modal .mat-card-title .icon-social {\n    position: absolute;\n    width: 16px;\n    height: 16px;\n    border: white solid 1px;\n    border-radius: 3px;\n    background: white;\n    top: 146px;\n    right: 134px; }\n  .auth-modal .noAccUsedAuthSocial {\n    font-size: 10px;\n    color: #313030d6; }\n"

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
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @models/user */ "./src/app/models/user.ts");
/* harmony import */ var _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @facades/permission/permissionFacade */ "./src/app/facades/permission/permissionFacade.ts");
/* harmony import */ var _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pages/auth/reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/account/account.service */ "./src/app/services/account/account.service.ts");
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
    function RegisterComponent(router, authFacade, authService, schoolService, accountService, socialAuthService, authStore, spinnerStore) {
        this.router = router;
        this.authFacade = authFacade;
        this.authService = authService;
        this.schoolService = schoolService;
        this.accountService = accountService;
        this.socialAuthService = socialAuthService;
        this.authStore = authStore;
        this.spinnerStore = spinnerStore;
        this.addASchool = false;
        this.usedAuthSocial = false;
        this.rememberMe = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_10__["User"]();
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'phoneNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.checkLimit(12, 12)]),
            'avatar': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.avatar),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmedPassword.bind(this)]),
        });
        this.authStore.subscribe(function (val) {
            var auth = val.auth;
            if (auth && auth.user) {
                _this.usedAuthSocial = auth.user.usedAuthSocial;
                _this.user['name'] = auth.user.name && auth.user.name.length > 0 ? auth.user.name : null;
                _this.user['provider_name'] = auth.user.provider_name && auth.user.provider_name.length > 0 ? auth.user.provider_name : null;
                _this.user['provider_id'] = auth.user.provider_id && auth.user.provider_id.length > 0 ? auth.user.provider_id : null;
                if (auth.user.email && auth.user.email.length > 0 && auth.user.email !== null) {
                    _this.user['email'] = auth.user.email;
                    _this.signupForm.get('email').setValue(_this.user['email']);
                }
                _this.user['avatar'] = auth.user.avatar && auth.user.avatar.length > 0 ? auth.user.avatar : null;
                _this.signupForm.get('name').setValue(_this.user['name']);
                _this.signupForm.get('avatar').setValue(_this.user['avatar']);
            }
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
    RegisterComponent.prototype.checkLimit = function (min, max) {
        return function (c) {
            if (c.value !== null && (c.value.length < min || c.value.length > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.signupForm);
        var formBody = {
            name: this.signupForm.get('name').value,
            avatar: this.signupForm.get('avatar').value,
            email: this.signupForm.get('email').value,
            phone: '+' + this.signupForm.get('phoneNumber').value,
            fromSocial: {
                provider_name: '',
                provider_id: '',
            },
            role_name: 'admin',
            password: this.signupForm.get('password').value,
            password_confirmation: this.signupForm.get('confirm_password').value
        };
        if (this.usedAuthSocial) {
            formBody['fromSocial']['provider_name'] = this.user.provider_name;
            formBody['fromSocial']['provider_id'] = this.user.provider_id;
        }
        this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StartSpinner"]());
        this.authService.register(formBody)
            .subscribe(function (resp) {
            // this.authStore.dispatch(new SignOut(this.authFacade));
            _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateAuthUser"]({
                email: formBody.email,
                phone: formBody.phone,
                registerComplete: true,
            }));
            _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_7__["AuthFacade"].setUser(_this.user);
            _this.router.navigate(['/auth/emailSent']);
            _this.spinnerStore.dispatch(new _store_spinner_actions__WEBPACK_IMPORTED_MODULE_5__["StopSpinner"]());
        }, function (err) {
            console.log(err);
            Object.keys(err.error.errors).map(function (item) {
                _this.signupForm.controls[item].setErrors({ 'apiValidate': err.error.errors[item] });
            });
        });
    };
    RegisterComponent.prototype.loginBySocialAcc = function (provider) {
        var _this = this;
        var socialPlatformProvider;
        if (provider === 'facebook') {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (provider === 'google') {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (resp) {
            _this.authService.loginBySocialAcc(provider, resp.token)
                .subscribe(function (resp) {
                console.log(resp);
                if (resp.data.status && resp.data.status === 206) {
                    var user = resp.data.authUser.data;
                    _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateAuthUser"]({
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                        provider_id: user.id,
                        provider_name: provider,
                    }));
                    _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__["ToggleUsedAuthSocial"]({ provider: provider }));
                }
                else {
                    _this.authenticate(resp.data.token);
                }
            });
        });
    };
    RegisterComponent.prototype.authenticate = function (token) {
        var _this = this;
        console.log(token);
        this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthenticateAction"](token));
        this.accountService.getAccount().subscribe(function (response) {
            var permissions = _facades_permission_permissionFacade__WEBPACK_IMPORTED_MODULE_11__["PermissionFacade"].groupByModelName(response.data.permissions);
            var user = _this.authFacade.createUser(response, permissions);
            console.log(user, 'authenticate login');
            _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateAuthUser"](user));
            if (user.emailVerified === false) {
                _this.router.navigate(['auth/emailSent']);
            }
            else if (user.phoneNumberVerified === false || user.paymentSettingVerified === false || !user.schools.length) {
                _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_7__["AuthFacade"].setToken(token, _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"].resetTokenPrefix);
                _this.router.navigate(['auth/setup']);
            }
            else {
                _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedSuccessAction"]({ authenticated: true, user: user }));
                _this.authFacade.checkAuthStatusAndRedirect();
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_7__["AuthFacade"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_school_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"],
            _services_account_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"],
            angular5_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/setup/setup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/setup/setup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"setup-acc-wrapper\"  *ngIf=\"tokenWasChecked\">\n  <mat-card class=\"auth-modal\">\n    <mat-card-header>\n      <mat-card-title>Set Up Yor Account</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-tab-group [selectedIndex]=\"currentIndex\">\n        <mat-tab label=\"Confirm Phone\" [disabled]='currentIndex !== 0'>\n          <div class=\"tab-text tab-text-code\">\n            <p>\n              Thank you for registration in our system.\n              <br>\n              Verification of email was successful. Please, follow next steps to set up your account.\n            </p>\n            <p *ngIf=\"!codeWasChecked\">\n              We just send a text message with a code to {{user.phone}}. Please enter the code to confirm you phone.\n            </p>\n          </div>\n          <form [formGroup]=\"setUpForm\" class=\"form-phone-code\" *ngIf=\"!codeWasChecked\">\n            <table>\n              <span class=\"form-field-header\">Enter Code</span>\n              <mat-form-field class=\"confirm-phone\">\n                <input matInput\n                       type=\"password\"\n                     formControlName=\"code\">\n              </mat-form-field>\n              <div\n                *ngIf=\"!setUpForm.get('code').valid && setUpForm.get('code').touched\"\n                class=\"help-block\">\n                <span *ngIf=\"setUpForm.get('code').errors['wrongCode']\">Wrong Code</span>\n                <button class=\"resend\" (click)=\"sendSms()\">Resend SMS</button>\n              </div>\n            </table>\n          </form>\n        </mat-tab>\n        <mat-tab label=\"Payment\" [disabled]='currentIndex !== 1'>\n          <div class=\"tab-text payment-text\">\n            <p *ngIf=\"!paymentSettingVerified\">\n              Enter your payment details to operate\n              <br>\n              transactions in your gyms.\n            </p>\n            <p *ngIf=\"paymentSettingVerified\">\n              Your payment settings was saved succesfully.\n              <br>\n              You can re-enter them to update.\n            </p>\n          </div>\n          <form [formGroup]=\"setUpForm\">\n            <table>\n              <span class=\"form-field-header\">Card Number</span>\n              <mat-form-field>\n                <input matInput\n                       type=\"password\"\n                       mask=\"000 000 000 000\"\n                       formControlName=\"card_number\">\n              </mat-form-field>\n              <span class=\"form-field-header\">Expire Date</span>\n              <mat-form-field [floatLabel]=\"never\">\n                <input matInput\n                       mask=\"00/00\"\n                       placeholder=\"MM/YY\"\n                       formControlName=\"exp_date\">\n              </mat-form-field>\n              <span class=\"form-field-header\">CVV</span>\n              <mat-form-field>\n              <input matInput\n                     type=\"password\"\n                     formControlName=\"cvv\">\n              </mat-form-field>\n            </table>\n          </form>\n        </mat-tab>\n        <mat-tab label=\"GYMs\" [disabled]='currentIndex !== 2'>\n          <div class=\"tab-text\">\n            <p>\n              Add your gyms to get started\n            </p>\n          </div>\n          <form *ngFor=\"let key of setUpForm.get('gyms')['controls']\" [formGroup]=\"key\">\n            <table>\n              <div class=\"gym\">\n                <span class=\"form-field-header\">Gym Name</span>\n                <mat-form-field>\n                  <input matInput\n                       formControlName=\"gym_name\">\n                </mat-form-field>\n                <div\n                  *ngIf=\"!key.get('gym_name').valid && key.get('gym_name').touched\"\n                  class=\"help-block\">\n                  <span *ngIf=\"key.get('gym_name').errors['required']\">This field is required!</span>\n                </div>\n                <span class=\"form-field-header\">Gym Address</span>\n                <mat-form-field>\n                  <input matInput\n                       formControlName=\"gym_address\">\n                </mat-form-field>\n                <div\n                  *ngIf=\"!key.get('gym_address').valid && key.get('gym_address').touched\"\n                  class=\"help-block\">\n                  <span *ngIf=\"key.get('gym_address').errors['required']\">This field is required!</span>\n                </div>\n                <span class=\"form-field-header\">Gym Phone</span>\n                <mat-form-field>\n                  <input matInput\n                       formControlName=\"gym_phone\"\n                         type='text'\n                         prefix=\"+ \"\n                         mask=\"0 000 000 00 000\">\n                </mat-form-field>\n                <div\n                  *ngIf=\"!key.get('gym_phone').valid && key.get('gym_phone').touched\"\n                  class=\"help-block\">\n                  <span *ngIf=\"key.get('gym_phone').errors['required']\">This field is required!</span>\n                  <span *ngIf=\"key.get('gym_phone').errors['range']\">Phone Number should have next format: '3 777 777 77 77'</span>\n                </div>\n              </div>\n            </table>\n            <div class=\"grey-border-top\"></div>\n          </form>\n          <button mat-button class=\"add-gym-button\" (click)=\"addGym()\">\n            <mat-icon>add</mat-icon>\n            Add Another Gym\n          </button>\n        </mat-tab>\n      </mat-tab-group>\n      <mat-card-actions>\n        <button mat-raised-button  class=\"mat-primary\" (click)=\"prev($event)\" *ngIf=\"currentIndex > 0\">Back</button>\n        <button mat-raised-button class=\"mat-primary\" (click)=\"checkTokenThanNext()\" *ngIf=\"currentIndex === 0\">Next</button>\n        <button mat-raised-button  class=\"mat-primary\" (click)=\"savePaymentSettings()\" *ngIf=\"currentIndex === 1\">Next</button>\n        <button mat-raised-button  class=\"mat-primary\" (click)=\"saveGyms()\" *ngIf=\"currentIndex === 2\">Save</button>\n      </mat-card-actions>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/setup/setup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/setup/setup.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setup-acc-wrapper .auth-modal {\n  width: 600px; }\n  .setup-acc-wrapper .auth-modal .mat-card-header {\n    margin-bottom: -20px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content > .mat-primary {\n    color: rgba(53, 49, 49, 0.75) !important; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-labels {\n    display: flex;\n    justify-content: space-around; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 367px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .tab-text-code p:last-child {\n      margin-top: 20px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .tab-text {\n      padding-left: 140px;\n      padding-right: 140px;\n      margin-top: 80px;\n      margin-bottom: 10px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .payment-text {\n      margin-top: 40px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content form:not(.form-phone-code) {\n      padding-left: 170px;\n      padding-right: 170px;\n      margin-top: 32px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content form:not(.form-phone-code) .form-field-header {\n        margin-top: 10px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content form:not(.form-phone-code) .mat-form-field {\n        height: 30px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content form:not(.form-phone-code) .grey-border-top {\n        margin-top: 15px;\n        border-width: 1px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .add-gym-button {\n      margin-top: 5px;\n      margin-bottom: 37px;\n      right: 48px;\n      font-weight: bold;\n      color: #2e7e88; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .form-phone-code {\n      width: 240px;\n      margin: auto; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .form-phone-code .resend {\n        width: 71px;\n        font-size: 10px;\n        padding: 5px 0;\n        border: none;\n        border-radius: 4px;\n        color: white;\n        background-color: #2e7e88;\n        float: right; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content .form-phone-code .resend:hover {\n          cursor: pointer; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body .mat-tab-body-content ::ng-deep .form-field-header {\n      float: left; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body:last-child {\n      height: 434px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content ::ng-deep .mat-tab-body:last-child .tab-text {\n        margin-top: 40px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content .mat-card-actions {\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 13px;\n    border-top: #ccc solid 1px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content .mat-card-actions button {\n      height: 28px;\n      position: relative;\n      top: 14px; }\n  .setup-acc-wrapper .auth-modal .mat-card-content .mat-card-actions button ::ng-deep span {\n        position: relative;\n        bottom: 4px; }\n"

/***/ }),

/***/ "./src/app/pages/auth/setup/setup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/setup/setup.component.ts ***!
  \*****************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/auth/reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @facades/auth/authFacade */ "./src/app/facades/auth/authFacade.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/auth/actions */ "./src/app/store/auth/actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/school/school.service */ "./src/app/services/school/school.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SetupComponent = /** @class */ (function () {
    function SetupComponent(router, fb, route, authFacade, authService, schoolService, paymentService, authStore) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.authFacade = authFacade;
        this.authService = authService;
        this.schoolService = schoolService;
        this.paymentService = paymentService;
        this.authStore = authStore;
        this.gyms = ['1', '2'];
        this.tokenWasChecked = false;
        this.codeWasChecked = false;
        this.paymentSettingVerified = false;
        this.hasSchool = false;
        this.paymentInformation = false;
        this.currentIndex = 0;
        this.route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
    }
    SetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStore.subscribe(function (val) {
            var auth = val.auth;
            if (auth && auth.user) {
                _this.user = auth.user;
            }
        });
        this.identificateRegistration();
        this.setUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            'code': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            'card_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            'exp_date': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            'cvv': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            'gyms': this.fb.array([])
        });
        this.addGym();
        console.log(this.setUpForm);
    };
    SetupComponent.prototype.checkLimit = function (min, max) {
        return function (c) {
            if (c.value !== null && (c.value.length < min || c.value.length > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    SetupComponent.prototype.sendSms = function () {
        this.codeWasChecked = false;
        this.authService.sendSms(this.user.email)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    SetupComponent.prototype.checkTokenThanNext = function () {
        var _this = this;
        if (!this.codeWasChecked) {
            this.authService.checkResetPasswordToken(this.setUpForm.get('code').value)
                .subscribe(function (resp) {
                console.log(resp);
                if (resp.data.token && resp.data.token.length > 0) {
                    _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].setToken(resp.data.token, _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"].resetTokenPrefix);
                    var tmpUser = _this.authFacade.createUser(resp.data.authUser);
                    if (tmpUser.email === _this.user.email && tmpUser.phone === _this.user.phone) {
                        _this.codeWasChecked = true;
                        _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateAuthUser"](tmpUser));
                        _this.currentIndex++;
                    }
                    else {
                        _this.setUpForm.get('code').setErrors({ wrongCode: true });
                    }
                }
                else {
                    _this.setUpForm.get('code').setErrors({ wrongCode: true });
                }
            }, function (err) {
                _this.setUpForm.get('code').setErrors({ wrongCode: true });
                console.log(_this.setUpForm);
            });
        }
        else {
            this.currentIndex++;
        }
    };
    SetupComponent.prototype.savePaymentSettings = function () {
        var _this = this;
        if (!this.paymentSettingVerified) {
            this.paymentService.savePaymentsSettings({
                card_number: this.setUpForm.get('card_number').value,
                exp_date: this.setUpForm.get('exp_date').value,
                cvv: this.setUpForm.get('cvv').value,
            }).subscribe(function (resp) {
                if (resp.data.token && resp.data.token.length > 0) {
                    _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].setToken(resp.data.token, _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"].resetTokenPrefix);
                }
                else {
                    _this.router.navigate(['/auth/login']);
                }
                var tmpUser = _this.authFacade.createUser(resp.data.authUser);
                if (tmpUser.email === _this.user.email && tmpUser.phone === _this.user.phone) {
                    _this.paymentSettingVerified = true;
                    _this.currentIndex++;
                    _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateAuthUser"](tmpUser));
                }
                _this.paymentSettingVerified = false;
            });
        }
        else {
            this.currentIndex++;
        }
    };
    SetupComponent.prototype.saveGyms = function () {
        var _this = this;
        var gyms = this.setUpForm.get('gyms')['controls'];
        gyms.map(function (gym) {
            console.log(gym);
            _this.schoolService.create({
                name: gym.get('gym_name').value,
                address: gym.get('gym_address').value,
                phone: gym.get('gym_phone').value
            }).subscribe(function (resp) {
                _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateAuthUser"]({ schools: resp.data }));
            });
        });
        this.router.navigate(['auth/login']);
    };
    SetupComponent.prototype.prev = function (event) {
        this.currentIndex--;
    };
    SetupComponent.prototype.identificateRegistration = function () {
        if (this.user && !this.user.emailVerified && this.token && !this.tokenWasChecked) {
            this.checkEmailsToken();
            this.currentIndex = 0;
        }
        else {
            this.tokenWasChecked = true;
            if (this.user.phoneNumberVerified === true) {
                this.codeWasChecked = true;
                this.currentIndex = 1;
            }
            else {
                this.currentIndex = 0;
                this.sendSms();
            }
            if (this.user.paymentSettingVerified === true && this.user.phoneNumberVerified === true) {
                this.paymentSettingVerified = true;
                this.currentIndex = 2;
            }
            if (this.user.schools && this.user.schools.length > 0) {
                this.hasSchool = true;
            }
            if (this.hasSchool === true && this.codeWasChecked === true && this.tokenWasChecked === true && this.paymentInformation === true) {
                this.router.navigate(['auth/login']);
            }
        }
    };
    SetupComponent.prototype.checkEmailsToken = function () {
        var _this = this;
        this.authService.checkResetPasswordToken(this.token)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.data.token && resp.data.token.length > 0) {
                _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"].setToken(resp.data.token, _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"].resetTokenPrefix);
                _this.user = _this.authFacade.createUser(resp.data.authUser);
                _this.authStore.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateAuthUser"](_this.user));
                _this.tokenWasChecked = true;
                _this.identificateRegistration();
                console.log(_this.user);
            }
            else {
                _this.router.navigate(['/auth/login']);
            }
        }, function (err) { return _this.router.navigate(['/auth/login']); });
    };
    SetupComponent.prototype.addGym = function () {
        if (this.setUpForm.get('gyms')['controls'] && this.setUpForm.get('gyms')['controls'].length < 4) {
            this.setUpForm.get('gyms')['controls'].push(this.fb.group({
                'gym_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
                'gym_address': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
                'gym_phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this.checkLimit(12, 12)]),
            }));
        }
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/pages/auth/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/pages/auth/setup/setup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _facades_auth_authFacade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_school_school_service__WEBPACK_IMPORTED_MODULE_9__["SchoolService"],
            _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_8__["PaymentService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/services/payment/payment.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/payment/payment.service.ts ***!
  \*****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
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


var PaymentService = /** @class */ (function () {
    function PaymentService(httpClient) {
        this.httpClient = httpClient;
    }
    PaymentService.prototype.savePaymentsSettings = function (body) {
        return this.httpClient.post('payment', body);
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map