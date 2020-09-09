function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logins-logins-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logins/logins.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logins/logins.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginsLoginsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h1><b>Login</b></h1>\n      </ion-col>\n      <ion-col size=\"12\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n          <ion-label>Username</ion-label>\n          <ion-input type=\"text\" formControlName=\"user\" required></ion-input>\n          <!-- <ng-container *ngif=\"user.errors\">\n            <small class=\"error-message\">test</small>\n          </ng-container> -->\n          <br>\n          <ion-label>Password</ion-label>\n          <ion-input type=\"password\" formControlName=\"pass\" required></ion-input>\n          <div class=\"errorUi\" *ngFor=\"let error of errorMessages.user || errorMessages.pass || errorMessages.invalid \">\n            <ng-container *ngIf=\"user.hasError(error.type) && (user.dirty || user.touched)\n            || pass.hasError(error.type) && (pass.dirty || pass.touched) \">\n              <ion-row>\n                <ion-col class=\"error-message\" size=\"12\">\n                  {{ error.message }}\n                </ion-col>\n              </ion-row>\n            </ng-container>\n          </div>\n          <ion-button [disabled]=\"!loginForm.valid\" type=\"submit\" expand=\"block\">Login</ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/logins/logins-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/logins/logins-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LoginsPageRoutingModule */

  /***/
  function srcAppLoginsLoginsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginsPageRoutingModule", function () {
      return LoginsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _logins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logins.page */
    "./src/app/logins/logins.page.ts");

    var routes = [{
      path: '',
      component: _logins_page__WEBPACK_IMPORTED_MODULE_3__["LoginsPage"]
    }];

    var LoginsPageRoutingModule = function LoginsPageRoutingModule() {
      _classCallCheck(this, LoginsPageRoutingModule);
    };

    LoginsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/logins/logins.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/logins/logins.module.ts ***!
    \*****************************************/

  /*! exports provided: LoginsPageModule */

  /***/
  function srcAppLoginsLoginsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginsPageModule", function () {
      return LoginsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _logins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logins-routing.module */
    "./src/app/logins/logins-routing.module.ts");
    /* harmony import */


    var _logins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logins.page */
    "./src/app/logins/logins.page.ts");

    var LoginsPageModule = function LoginsPageModule() {
      _classCallCheck(this, LoginsPageModule);
    };

    LoginsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logins_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginsPageRoutingModule"]],
      declarations: [_logins_page__WEBPACK_IMPORTED_MODULE_6__["LoginsPage"]]
    })], LoginsPageModule);
    /***/
  },

  /***/
  "./src/app/logins/logins.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/logins/logins.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginsLoginsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  margin-top: 150px;\n  margin-bottom: 50px;\n  font-size: 50px;\n  font-family: Century Gothic;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\nion-button {\n  margin: 20px;\n  width: auto;\n  height: 50px;\n  color: var(--ion-color-light);\n}\n\nion-label {\n  margin: 20px;\n}\n\nion-input {\n  width: auto;\n  font-size: 18px;\n  margin: 20px;\n  border: 1px solid var(--ion-color-light-shade);\n  background-color: var(#ffffff);\n  border-radius: 5px;\n  padding: 40px;\n  color: var(--ion-color-dark);\n}\n\n.error-message {\n  text-align: center;\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5zL0M6XFxVc2Vyc1xccmFuZ2dhXFxEb2N1bWVudHNcXGlvbmljXFxGYWJyaXF1ZVRvZG8vc3JjXFxhcHBcXGxvZ2luc1xcbG9naW5zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW5zL2xvZ2lucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW5zL2xvZ2lucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoI2ZmZmZmZik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn0iLCJoMSB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/logins/logins.page.ts":
  /*!***************************************!*\
    !*** ./src/app/logins/logins.page.ts ***!
    \***************************************/

  /*! exports provided: LoginsPage */

  /***/
  function srcAppLoginsLoginsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginsPage", function () {
      return LoginsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _logins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./logins.service */
    "./src/app/logins/logins.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginsPage = /*#__PURE__*/function () {
      function LoginsPage(loginsService, router, formBuilder) {
        _classCallCheck(this, LoginsPage);

        this.loginsService = loginsService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.errorMessages = {
          user: [{
            type: 'required',
            message: 'Login failed'
          }],
          pass: [{
            type: 'required',
            message: 'Login failed'
          }]
        };
        this.loginForm = this.formBuilder.group({
          user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z]*')]],
          pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z]*')]]
        });
      }

      _createClass(LoginsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          if (this.loginForm.value.user == "danny" && this.loginForm.value.pass == "fabrique") {
            this.loginsService.login();
          } else {}
        }
      }, {
        key: "user",
        get: function get() {
          return this.loginForm.get('user');
        }
      }, {
        key: "pass",
        get: function get() {
          return this.loginForm.get('pass');
        }
      }]);

      return LoginsPage;
    }();

    LoginsPage.ctorParameters = function () {
      return [{
        type: _logins_service__WEBPACK_IMPORTED_MODULE_2__["LoginsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    LoginsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logins',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./logins.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logins/logins.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./logins.page.scss */
      "./src/app/logins/logins.page.scss"))["default"]]
    })], LoginsPage);
    /***/
  }
}]);
//# sourceMappingURL=logins-logins-module-es5.js.map