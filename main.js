(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-event-form/add-event-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-event-form/add-event-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-background\">\n\n  <div class=\"card\" *ngIf=\"!(authService.jwt$ | async)\">\n    <mat-icon (click)=\"closed.emit()\"><i class=\"fas fa-window-close\"></i></mat-icon>\n\n    <h2>Please login to create events</h2>\n  </div>\n\n  <div class=\"card\" *ngIf=\"!!(authService.jwt$ | async)\">\n\n    <mat-icon (click)=\"closed.emit()\"><i class=\"fas fa-window-close\"></i></mat-icon>\n\n    <h1>\n      Add a new Event\n    </h1>\n\n\n    <!--<form [formControl]=\"eventForm\">-->\n\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"Title\" [(ngModel)]=\"event.name\">\n    </mat-form-field>\n\n    <br>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"startPicker\" placeholder=\"choose a start date\" [(ngModel)]=\"event.startDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #startPicker startView=\"year\"></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"endPicker\" placeholder=\"choose a end date\" [(ngModel)]=\"event.endDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #endPicker startView=\"year\"></mat-datepicker>\n    </mat-form-field>\n\n    <br>\n\n    <mat-checkbox [(ngModel)]=\"event.fullDay\">is it a whole day event?</mat-checkbox>\n\n    <mat-divider></mat-divider>\n\n\n    <h2>Event Details</h2>\n\n    <mat-checkbox [(ngModel)]=\"event.virtaul\">is it a virtual event?</mat-checkbox>\n\n    <br>\n\n    <mat-form-field class=\"full-line\">\n      <input matInput placeholder=\"Location\" [(ngModel)]=\"event.region\">\n    </mat-form-field>\n\n    <br>\n    <mat-form-field class=\"full-line\">\n      <mat-chip-list #chipList>\n\n        <mat-chip *ngFor=\"let chip of chipItemsList\"\n                  [selectable]=\"true\"\n                  [removable]=\"true\"\n                  (removed)=\"remove(chip)\">\n          {{chip.name}}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n\n      </mat-chip-list>\n      <input class=\"full-line\"\n             [matChipInputFor]=\"chipList\"\n             placeholder=\"tags\"\n             (matChipInputTokenEnd)=\"add($event)\">\n    </mat-form-field>\n    <br>\n\n    <mat-form-field class=\"full-line\">\n      <textarea matInput placeholder=\"Description\"></textarea>\n    </mat-form-field>\n\n\n    <mat-divider></mat-divider>\n\n    <button (click)=\"createEvent()\"\n            mat-button\n            matTooltip=\"navigate to today\">save\n    </button>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/add-event-form/add-event-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/add-event-form/add-event-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 800px;\n  width: 85%;\n  background: white;\n  padding: 20px 30px; }\n\n.full-line {\n  width: 100%; }\n\n.fa-window-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/add-event-form/add-event-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-event-form/add-event-form.component.ts ***!
  \************************************************************/
/*! exports provided: AddEventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventFormComponent", function() { return AddEventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event.service */ "./src/app/event/event.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventFormComponent = /** @class */ (function () {
    function AddEventFormComponent(eventService, authService) {
        this.eventService = eventService;
        this.authService = authService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.event = {};
        this.chipItemsList = [
            { name: 'blue Ocean' }
        ];
    }
    AddEventFormComponent.prototype.ngOnInit = function () {
    };
    AddEventFormComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.chipItemsList.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    AddEventFormComponent.prototype.remove = function (chip) {
        var index = this.chipItemsList.indexOf(chip);
        if (index >= 0) {
            this.chipItemsList.splice(index, 1);
        }
    };
    AddEventFormComponent.prototype.createEvent = function () {
        var _this = this;
        this.eventService.addEvent(this.event).subscribe(function (answer) {
            if (answer._id) {
                _this.closed.emit();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddEventFormComponent.prototype, "closed", void 0);
    AddEventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-event-form',
            template: __webpack_require__(/*! ./add-event-form.component.html */ "./src/app/add-event-form/add-event-form.component.html"),
            styles: [__webpack_require__(/*! ./add-event-form.component.scss */ "./src/app/add-event-form/add-event-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddEventFormComponent);
    return AddEventFormComponent;
}());



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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div class=\"page-wrapper\">\n\n  <div class=\"auth-header\">\n    <button mat-button (click)=\"login()\" *ngIf=\"!(authService.jwt$ | async)\"> login</button>\n    <button mat-button (click)=\"openRegister()\" *ngIf=\"!(authService.jwt$ | async)\"> register</button>\n\n    <button mat-button (click)=\"logout()\" *ngIf=\"!!(authService.jwt$ | async)\"> logout</button>\n    <button mat-button (click)=\"loadEvents()\" *ngIf=\"!!(authService.jwt$ | async)\"> reload</button>\n  </div>\n\n  <div class=\"headline\">\n    <div class=\"date-navigate-wrapper\">\n      <button mat-button\n              (click)=\"previewViewElement(viewDate)\"\n              matTooltip=\"navigate one left\">previous\n      </button>\n      <button (click)=\"viewDate = today\"\n              mat-button\n              matTooltip=\"navigate to today\">today\n      </button>\n      <button (click)=\"nextViewElement(viewDate)\"\n              mat-button\n              matTooltip=\"navigate one right\">next\n      </button>\n    </div>\n\n    <div class=\"today\">\n      <h3>{{ viewDate | date:'longDate' }}</h3>\n    </div>\n\n    <div class=\"view-change-header\">\n      <button (click)=\"view='month'\" mat-button>Month</button>\n      <button (click)=\"view='week'\" mat-button>Week</button>\n      <button (click)=\"view='day'\" mat-button>Day</button>\n\n      <button (click)=\"openAddEventForm()\"\n              mat-button\n              matTooltip=\"add another event\">\n        <i class=\"fas fa-plus-square\"></i>\n      </button>\n    </div>\n\n  </div>\n\n\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"'month'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEventClicked($event.event)\">\n    </mwl-calendar-month-view>\n\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"'week'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEventClicked($event.event)\">\n    </mwl-calendar-week-view>\n\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"'day'\"\n      [viewDate]=\"viewDate\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEventClicked($event.event)\">\n    </mwl-calendar-day-view>\n\n  </div>\n\n  <app-add-event-form *ngIf=\"showAddEventForm\" (closed)=\"showAddEventForm = false\"></app-add-event-form>\n  <app-login-form *ngIf=\"showLoginForm && !(authService.jwt$ | async)\" (closed)=\"showLoginForm = false; loadEvents()\"></app-login-form>\n  <app-show-event *ngIf=\"!!focuedEvend\" [event]=\"focuedEvend\" (closed)=\"focuedEvend = null\"></app-show-event>\n  <app-register *ngIf=\"showRegisterPopUp\" (closed)=\"showRegisterPopUp = null\"></app-register>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  max-width: 1300px;\n  width: 90%;\n  margin: auto;\n  min-height: 100vh;\n  background: #f1f1f1;\n  padding: 20px 0; }\n\nbutton {\n  font-size: 1em; }\n\n.headline {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: baseline; }\n\n.auth-header {\n  display: flex;\n  align-items: right; }\n"

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
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/event.service */ "./src/app/event/event.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(eventService, authService) {
        this.eventService = eventService;
        this.authService = authService;
        this.view = 'month';
        this.refresh = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.viewDate = new Date();
        this.today = new Date();
        this.showAddEventForm = false;
        this.showLoginForm = false;
        this.showRegisterPopUp = false;
        this.events = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    AppComponent.prototype.nextViewElement = function (date) {
        switch (this.view) {
            case 'week':
                this.viewDate.setDate(date.getDate() + 7);
                break;
            case 'day':
                this.viewDate.setDate(date.getDate() + 1);
                break;
            case 'month':
            default:
                this.viewDate.setMonth(date.getMonth() + 1);
        }
        this.refresh.next();
    };
    AppComponent.prototype.previewViewElement = function (date) {
        switch (this.view) {
            case 'week':
                this.viewDate.setDate(date.getDate() - 7);
                break;
            case 'day':
                this.viewDate.setDate(date.getDate() - 1);
                break;
            case 'month':
            default:
                this.viewDate.setMonth(date.getMonth() - 1);
        }
        this.refresh.next();
    };
    AppComponent.prototype.openAddEventForm = function () {
        this.showAddEventForm = true;
    };
    AppComponent.prototype.login = function () {
        this.showLoginForm = true;
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.loadEvents();
    };
    AppComponent.prototype.loadEvents = function () {
        var _this = this;
        this.eventService.getAllEvents().subscribe(function (events) {
            console.log(events);
            _this.events = events.map(_this.mapToCalenderEvent);
            _this.refresh.next();
        });
    };
    AppComponent.prototype.mapToCalenderEvent = function (obj) {
        return {
            id: obj._id,
            start: new Date(obj.startDate),
            title: obj.name,
            allDay: obj.allDay,
        };
    };
    AppComponent.prototype.handleEventClicked = function (event) {
        this.focuedEvend = event;
    };
    AppComponent.prototype.openRegister = function () {
        this.showRegisterPopUp = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event/event.service */ "./src/app/event/event.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _add_event_form_add_event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-event-form/add-event-form.component */ "./src/app/add-event-form/add-event-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _show_event_show_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-event/show-event.component */ "./src/app/show-event/show-event.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _add_event_form_add_event_form_component__WEBPACK_IMPORTED_MODULE_9__["AddEventFormComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__["LoginFormComponent"],
                _show_event_show_event_component__WEBPACK_IMPORTED_MODULE_14__["ShowEventComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"]
            ],
            providers: [
                _event_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
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


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.jwt$.subscribe(function (jwt) { return _this.jwt = jwt; });
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log('jetzt', this.jwt);
        if (this.jwt != null) {
            var authReq = req.clone({ headers: req.headers.append('Authorization', 'JWT ' + this.jwt) });
            console.log(authReq);
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_compat_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat/add/operator/do */ "./node_modules/rxjs-compat/add/operator/do.js");
/* harmony import */ var rxjs_compat_add_operator_do__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_do__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = '';
        this.jwt$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var body = "email=" + email + "&password=" + password;
        return this.http.post(this.domain + '/login', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') }).do(function (answer) { return _this.jwt$.next(answer.token); });
    };
    AuthService.prototype.signup = function (user) {
        var body = "name=" + user.name + "&password=" + user.password + "&region=" + user.region + "&email=" + user.email;
        return this.http.post(this.domain + '/signup', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') });
    };
    AuthService.prototype.logout = function () {
        this.jwt$.next(null);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/event/event.service.ts":
/*!****************************************!*\
  !*** ./src/app/event/event.service.ts ***!
  \****************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
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


var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.domain = '';
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') };
    }
    EventService.prototype.getAllEvents = function () {
        return this.http.get(this.domain + '/event/');
    };
    EventService.prototype.getEventById = function (id) {
        return this.http.get(this.domain + '/event/' + id);
    };
    EventService.prototype.addEvent = function (event) {
        var body = '';
        Object.keys(event).forEach(function (key) {
            body = body + key + '=' + event[key] + '&';
        });
        console.log('body', body);
        return this.http.post(this.domain + '/event', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-background\">\n\n  <div class=\"card\">\n\n    <mat-icon (click)=\"closed.emit()\"><i class=\"fas fa-window-close\"></i></mat-icon>\n\n    <h1>\n      Login\n    </h1>\n\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"email\" [(ngModel)]=\"email\">\n    </mat-form-field>\n\n    <br>\n\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"password\" [(ngModel)]=\"password\">\n    </mat-form-field>\n\n    <br>\n\n    <button (click)=\"login()\" mat-button>login\n    </button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 800px;\n  width: 85%;\n  background: white;\n  padding: 20px 30px; }\n\n.fa-window-close {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService) {
        this.authService = authService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.email = 'test2@web.de';
        this.password = '4321';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function (email, password) {
        var _this = this;
        if (email === void 0) { email = this.email; }
        if (password === void 0) { password = this.password; }
        this.authService.login(email, password).subscribe(function (answer) {
            if (answer.token) {
                _this.closed.emit();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "closed", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-background\">\n\n  <div class=\"card\" *ngIf=\"!(authService.jwt$ | async)\">\n    <mat-icon (click)=\"closed.emit()\"><i class=\"fas fa-window-close\"></i></mat-icon>\n\n    <h2>Register</h2>\n\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"name\" [(ngModel)]=\"name\">\n    </mat-form-field>\n\n    <br>\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"email\" [(ngModel)]=\"email\">\n    </mat-form-field>\n\n    <br>\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"password\" [(ngModel)]=\"password\">\n    </mat-form-field>\n\n    <br>\n    <mat-form-field class=\"\">\n      <input matInput placeholder=\"email\" [(ngModel)]=\"region\">\n    </mat-form-field>\n\n    <br>\n\n\n    <br>\n    <button mat-button (click)=\"register()\">\n      register\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 800px;\n  width: 85%;\n  background: white;\n  padding: 20px 30px; }\n\n.full-line {\n  width: 100%; }\n\n.fa-window-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function RegisterComponent(authService) {
        this.authService = authService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.signup({ name: this.name, region: this.region, email: this.email, password: this.password }).subscribe(function (_) {
            console.log(_);
            _this.closed.emit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "closed", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/show-event/show-event.component.html":
/*!******************************************************!*\
  !*** ./src/app/show-event/show-event.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-background\">\n\n  <div class=\"card\">\n    <mat-icon (click)=\"closed.emit()\"><i class=\"fas fa-window-close\"></i></mat-icon>\n\n    <h2>Title: {{ event.title }}</h2>\n\n    <br>\n    <span>Start time: {{ event.startTime | date:'long' }}</span> <br>\n    <span>End time: {{ event.endTime | date:'long'  }}</span> <br>\n\n    <span>Region: {{ event.region }}</span> <br>\n\n\n    <mat-divider></mat-divider>\n\n    <ng-content></ng-content>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/show-event/show-event.component.scss":
/*!******************************************************!*\
  !*** ./src/app/show-event/show-event.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 800px;\n  width: 85%;\n  background: white;\n  padding: 20px 30px; }\n\n.fa-window-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/show-event/show-event.component.ts":
/*!****************************************************!*\
  !*** ./src/app/show-event/show-event.component.ts ***!
  \****************************************************/
/*! exports provided: ShowEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowEventComponent", function() { return ShowEventComponent; });
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

var ShowEventComponent = /** @class */ (function () {
    function ShowEventComponent() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ShowEventComponent.prototype.ngOnInit = function () {
        console.log('shoe this event', this.event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowEventComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ShowEventComponent.prototype, "closed", void 0);
    ShowEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-event',
            template: __webpack_require__(/*! ./show-event.component.html */ "./src/app/show-event/show-event.component.html"),
            styles: [__webpack_require__(/*! ./show-event.component.scss */ "./src/app/show-event/show-event.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowEventComponent);
    return ShowEventComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
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

module.exports = __webpack_require__(/*! /Users/Simon/Desktop/calendar-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map