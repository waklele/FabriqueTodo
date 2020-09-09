(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtodo-addtodo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/addtodo/addtodo.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/addtodo/addtodo.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>New to-do</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <!-- <form [formGroup]=\"createForm\" (ngSubmit)=\"simpanData()\">\n          <ion-label>Title</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"title\" required></ion-input>\n          <br>\n          <ion-label>Deadline</ion-label>\n          <ion-input type=\"text\" formControlName=\"deadline\" [(ngModel)]=\"deadline\" required></ion-input>\n          <ion-toggle slot=\"start\" name=\"high\" checked></ion-toggle>\n          <div class=\"errorUi\" *ngFor=\"let error of errorMessages.title || errorMessages.deadline \">\n            <ng-container *ngIf=\"title.hasError(error.type) && (title.dirty || title.touched)\n            || deadline.hasError(error.type) && (deadline.dirty || deadline.touched) \">\n              <ion-row>\n                <ion-col class=\"error-message\" size=\"12\">\n                  {{ error.message }}\n                </ion-col>\n              </ion-row>\n            </ng-container>\n          </div>\n          <ion-button [disabled]=\"!createForm.valid\" type=\"submit\" expand=\"block\">Create</ion-button>\n        </form> -->\n\n          <ion-label>Title</ion-label>\n          <ion-input clearInput type=\"text\" [(ngModel)]=\"title\"></ion-input>\n          <br>\n          <ion-label>Deadline</ion-label>\n          <ion-input clearInput type=\"text\" [(ngModel)]=\"deadline\"></ion-input>\n          <ion-text class=\"para\" >High Priority?</ion-text><ion-toggle color=\"secondary\" [(ngModel)]=\"high\" ></ion-toggle>\n          <ion-button expand=\"block\" (click)=\"simpanData()\">Create</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/todo/addtodo/addtodo-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/todo/addtodo/addtodo-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AddtodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoPageRoutingModule", function() { return AddtodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addtodo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addtodo.page */ "./src/app/todo/addtodo/addtodo.page.ts");




const routes = [
    {
        path: '',
        component: _addtodo_page__WEBPACK_IMPORTED_MODULE_3__["AddtodoPage"]
    }
];
let AddtodoPageRoutingModule = class AddtodoPageRoutingModule {
};
AddtodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddtodoPageRoutingModule);



/***/ }),

/***/ "./src/app/todo/addtodo/addtodo.module.ts":
/*!************************************************!*\
  !*** ./src/app/todo/addtodo/addtodo.module.ts ***!
  \************************************************/
/*! exports provided: AddtodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoPageModule", function() { return AddtodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addtodo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addtodo-routing.module */ "./src/app/todo/addtodo/addtodo-routing.module.ts");
/* harmony import */ var _addtodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtodo.page */ "./src/app/todo/addtodo/addtodo.page.ts");







let AddtodoPageModule = class AddtodoPageModule {
};
AddtodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addtodo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddtodoPageRoutingModule"]
        ],
        declarations: [_addtodo_page__WEBPACK_IMPORTED_MODULE_6__["AddtodoPage"]]
    })
], AddtodoPageModule);



/***/ }),

/***/ "./src/app/todo/addtodo/addtodo.page.scss":
/*!************************************************!*\
  !*** ./src/app/todo/addtodo/addtodo.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  margin: 20px;\n}\n\nion-input {\n  width: auto;\n  font-size: 18px;\n  margin: 20px;\n  border: 1px solid var(--ion-color-light-shade);\n  background-color: var(#ffffff);\n  border-radius: 5px;\n  padding: 40px;\n  color: var(--ion-color-dark);\n}\n\nion-button {\n  margin: 20px;\n  width: auto;\n  height: 50px;\n  color: var(--ion-color-light);\n}\n\n.para {\n  margin-top: 40px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9hZGR0b2RvL0M6XFxVc2Vyc1xccmFuZ2dhXFxEb2N1bWVudHNcXGlvbmljXFxGYWJyaXF1ZVRvZG8vc3JjXFxhcHBcXHRvZG9cXGFkZHRvZG9cXGFkZHRvZG8ucGFnZS5zY3NzIiwic3JjL2FwcC90b2RvL2FkZHRvZG8vYWRkdG9kby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90b2RvL2FkZHRvZG8vYWRkdG9kby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCNmZmZmZmYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnBhcmEge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59IiwiaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnBhcmEge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/todo/addtodo/addtodo.page.ts":
/*!**********************************************!*\
  !*** ./src/app/todo/addtodo/addtodo.page.ts ***!
  \**********************************************/
/*! exports provided: AddtodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoPage", function() { return AddtodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AddtodoPage = class AddtodoPage {
    // private createForm: FormGroup;
    constructor(todo, router) {
        this.todo = todo;
        this.router = router;
        // public errorMessages = {
        //   title: [
        //     { type: 'required', message: 'Please provide a title and deadline' }
        //   ],
        //   deadline: [
        //     { type: 'required', message: 'Please provide a title and deadline' }
        //   ]
        // }
        // get title() {
        //   return this.createForm.get('title');
        // }
        // get deadline() {
        //   return this.createForm.get('deadline');
        // }
        // get high() {
        //   return this.createForm.get('high');
        // }
        // get done() {
        //   return this.createForm.get("0");
        // }
        this.title = null;
        this.deadline = null;
        this.high = false;
        this.done = null;
        // this.createForm = this.formBuilder.group({
        //   title: ['',
        //     [Validators.required,
        //     Validators.pattern('^[a-zA-Z]*')]
        //   ],
        //   deadline: ['',
        //     [Validators.required,
        //     Validators.pattern('^[a-zA-Z]*')]
        //   ]
        // });
    }
    ngOnInit() {
    }
    simpanData() {
        var tempData = {
            title: this.title,
            deadline: this.deadline,
            high: this.high,
            done: '0',
        };
        this.todo.simpanData(tempData);
        this.todo.showMessage("Data berhasil disimpan");
        this.router.navigate(['/todo']);
    }
};
AddtodoPage.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddtodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtodo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addtodo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/addtodo/addtodo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addtodo.page.scss */ "./src/app/todo/addtodo/addtodo.page.scss")).default]
    })
], AddtodoPage);



/***/ })

}]);
//# sourceMappingURL=addtodo-addtodo-module-es2015.js.map