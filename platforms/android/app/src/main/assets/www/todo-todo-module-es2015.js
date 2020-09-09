(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>All Todo</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"hammer\"></ion-icon>\n        <ion-badge slot=\"end\" color=\"danger\">666</ion-badge>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <ion-card>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card-header>\n          <ion-card-title>Wash Clothes</ion-card-title>\n          <ion-card-subtitle class=\"sub\">by 30 March 2020 <ion-icon name=\"alert-circle\" class=\"icon-priority\"\n              color=\"danger\"></ion-icon>\n          </ion-card-subtitle>\n        </ion-card-header>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button>\n          <ion-buttons slot=\"end\">\n            <ion-icon name=\"checkmark\" color=\"medium\"></ion-icon>\n          </ion-buttons>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button>\n          <ion-buttons slot=\"end\">\n            <ion-icon name=\"trash\" color=\"medium\"></ion-icon>\n          </ion-buttons>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card> -->\n\n  <ion-list class=\"list\" *ngFor=\"let item of listDataTodo\">\n    <ion-item class=\"card\" slot=\"none\">\n      <ion-label class=\"title\">\n        {{item.title}}\n        <br>\n        <span class=\"space-left\">\n          <ion-text color=\"dark\" class=\"space-left\">\n            by {{item.deadline}} <ion-icon name=\"alert-circle\" class=\"icon-priority\" color=\"danger\"></ion-icon>\n          </ion-text>\n        </span>\n      </ion-label>\n      <ion-buttons slot=\"end\" (click)=\"jadiDone(item)\">\n        <ion-icon name=\"checkmark\" color=\"secondary\"></ion-icon>\n      </ion-buttons>\n      <ion-buttons slot=\"end\" (click)=\"hapusDataTodo(item)\">\n        <ion-icon name=\"trash\" color=\"medium\"></ion-icon>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"goTambahTodo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/todo/todo-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageRoutingModule", function() { return TodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.page */ "./src/app/todo/todo.page.ts");




const routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["TodoPage"]
    },
    {
        path: 'addtodo',
        loadChildren: './addtodo/addtodo.module#AddtodoPageModule'
    }
];
let TodoPageRoutingModule = class TodoPageRoutingModule {
};
TodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TodoPageRoutingModule);



/***/ }),

/***/ "./src/app/todo/todo.module.ts":
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.ts ***!
  \*************************************/
/*! exports provided: TodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageModule", function() { return TodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/todo/todo-routing.module.ts");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.page */ "./src/app/todo/todo.page.ts");







const routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"]
    }
];
let TodoPageModule = class TodoPageModule {
};
TodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodoPageRoutingModule"]
        ],
        declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"]]
    })
], TodoPageModule);



/***/ }),

/***/ "./src/app/todo/todo.page.scss":
/*!*************************************!*\
  !*** ./src/app/todo/todo.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-family: Century Gothic;\n}\n\n.card {\n  border: 0px solid var(--ion-color-primary);\n  margin: 16px;\n  background-color: var(--ion-color-medium);\n  padding: 0px;\n  border-radius: 5px;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\n.sub {\n  margin-top: 0px;\n}\n\n.icon-priority {\n  padding-left: 5px;\n}\n\n.list {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9DOlxcVXNlcnNcXHJhbmdnYVxcRG9jdW1lbnRzXFxpb25pY1xcRmFicmlxdWVUb2RvL3NyY1xcYXBwXFx0b2RvXFx0b2RvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLDJCQUFBO0FDSEo7O0FETUE7RUFFSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBR0ksaUJBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaDEge1xyXG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyB9XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnN1YntcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmljb24tcHJpb3JpdHl7XHJcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vLyAuc3BhY2UtbGVmdCB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tdGV4dCB7XHJcbi8vICAgICBmb250LXNpemU6IDE3cHg7XHJcbi8vIH0iLCIudGl0bGUge1xuICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zdWIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5pY29uLXByaW9yaXR5IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/todo/todo.page.ts":
/*!***********************************!*\
  !*** ./src/app/todo/todo.page.ts ***!
  \***********************************/
/*! exports provided: TodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPage", function() { return TodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo/todo.service.ts");




let TodoPage = class TodoPage {
    constructor(router, todo) {
        this.router = router;
        this.todo = todo;
        this.listDataTodo = [];
        setTimeout(() => {
            this.listDataTodo = this.todo.listDataTodo;
        }, 1000);
    }
    ngOnInit() {
        console.log(this.listDataTodo);
    }
    goTambahTodo() {
        this.router.navigate(['/todo/addtodo']);
    }
    hapusDataTodo(item) {
        this.todo.hapusData(item);
        this.todo.showMessage("Data berhasil dihapus");
    }
    hapusSemuaDataTodo() {
        this.todo.hapusSemuaData();
        this.listDataTodo = [];
    }
};
TodoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
TodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo.page.scss */ "./src/app/todo/todo.page.scss")).default]
    })
], TodoPage);



/***/ })

}]);
//# sourceMappingURL=todo-todo-module-es2015.js.map