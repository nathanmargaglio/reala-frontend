webpackJsonp([1,5],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".lead-card {\n  cursor: pointer;\n}\n\n.lead-card:hover {\n  background-color: #ebfaff;\n}\n\n.selected {\n  background-color: #b3e9ff;\n}\n.selected:hover {\n  background-color: #9adeff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "md-grid-tile {\n  background: lightblue;\n}\n\n.main-container {\n  height: 100%;\n}\n\nmd-sidenav {\n  width: 400px;\n  box-shadow: 0 1px 5px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n\nmd-sidenav.large {\n  width: 50%;\n}\n\nmd-sidenav > div {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n}\n\nmd-sidenav-container {\n  height: 100%;\n}\n\n.icon-button {\n  cursor: pointer;\n}\n\n.events-container {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<main-nav></main-nav>\n"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<span class=\"event-detail date\">{{data.datetime | date: 'medium'}}</span>\n<p class=\"event-detail type\">{{data.type | uppercase }}</p>\n<p class=\"event-detail details\">{{data.details}}</p>\n<span class=\"event-detail user\">{{data.user}}</span>\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"event-card\" (click)=\"onClick()\">\n  <span>\n    <span class=\"message-text\">{{getSimpleMessage()}}</span>\n    <span class=\"datetime-text\">{{getSimpleDatetime()}}</span>\n  </span>\n</md-card>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"lead-card\" (click)=\"selectThis()\" [ngClass]=\"{'selected': selected}\">\n  {{data.address}}\n</md-card>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <md-sidenav #extranav mode=\"side\"></md-sidenav>\n<md-sidenav-container>\n  <md-sidenav #sidenav mode=\"side\">\n    <div *ngIf=\"current_lead; else noLeadSelected\">\n\n      <md-card class=\"lead-detail-card\">\n        <p>{{current_lead.data.name}}</p>\n        <p>{{current_lead.data.address}}</p>\n        <p>{{current_lead.data.phone}}</p>\n        <p>{{current_lead.data.email}}</p>\n      </md-card>\n\n      <md-card class=\"event-detail-container\">\n        <event-detail *ngIf=\"current_event\" [data]=\"current_event.data\"></event-detail>\n      </md-card>\n\n      <md-card class=\"events-container\">\n        <event *ngFor=\"let e of current_lead.getEvents()\" [data]=\"e\" (eventFocus)=\"selectEvent($event)\"></event>\n      </md-card>\n\n    </div>\n    <ng-template #noLeadSelected>\n      <md-card>\n        <p>Select a lead to begin</p>\n      </md-card>\n    </ng-template>\n  </md-sidenav>\n\n  <div class=\"top-nav\">\n    <md-card class=\"top-nav-card\">\n\n      <md-icon *ngIf=\"!sidenav.opened; else closedButton\" class=\"icon-button\" (click)=\"toggleSideNav()\">\n        chevron_right\n      </md-icon>\n      <ng-template #closedButton>\n        <md-icon class=\"icon-button\" (click)=\"toggleSideNav()\">\n          chevron_left\n        </md-icon>\n      </ng-template>\n    </md-card>\n  </div>\n\n  <div *ngFor=\"let lead of getLeads()\" class=\"center-nav\">\n    <lead [data]=\"lead\" (leadFocus)=\"selectLead($event)\"></lead>\n  </div>\n\n</md-sidenav-container>\n</md-sidenav-container>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeadDataService = (function () {
    function LeadDataService() {
        this._leads = [];
        for (var i = 0; i < 10; ++i) {
            this._leads.push({
                'name': this.makeName(),
                'address': this.makeAddress(),
                'phone': this.makePhone(),
                'email': this.makeEmail()
            });
        }
    }
    LeadDataService.prototype.getLeads = function () {
        return this._leads;
    };
    LeadDataService.prototype.getEvents = function () {
        var events = [];
        for (var i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            events.push(this.makeEvent());
        }
        return events;
    };
    LeadDataService.prototype.makeName = function () {
        var first_name = "";
        var last_name = "";
        var possible_upper = "ABCDEFGHIJKLMNOPRSTUV";
        var possible_lower = "bcdfghijklmnprstvw";
        var possible_vowels = 'aeiou';
        first_name = possible_upper.charAt(Math.floor(Math.random() * possible_upper.length));
        last_name = possible_upper.charAt(Math.floor(Math.random() * possible_upper.length));
        for (var i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
            first_name += possible_vowels.charAt(Math.floor(Math.random() * possible_vowels.length));
            first_name += possible_lower.charAt(Math.floor(Math.random() * possible_lower.length));
        }
        for (var i = 0; i < Math.floor(Math.random() * 2) + 3; i++) {
            last_name += possible_vowels.charAt(Math.floor(Math.random() * possible_vowels.length));
            last_name += possible_lower.charAt(Math.floor(Math.random() * possible_lower.length));
        }
        return first_name + ' ' + last_name;
    };
    LeadDataService.prototype.makeAddress = function () {
        var street_name = "";
        var possible_upper = "ABCDEFGHIJKLMNOPRSTUV";
        var possible_lower = "bcdfghijklmnprstvw";
        var possible_vowels = 'aeiou';
        var routes = ['Ave', 'St', 'Blvd', 'Rd'];
        var cities = ['Buffalo', 'Kenmore', 'Cheektowaga', 'Amherst', 'Williamsville'];
        street_name = possible_upper.charAt(Math.floor(Math.random() * possible_upper.length));
        for (var i = 0; i < Math.floor(Math.random() * 2) + 3; i++) {
            street_name += possible_vowels.charAt(Math.floor(Math.random() * possible_vowels.length));
            street_name += possible_lower.charAt(Math.floor(Math.random() * possible_lower.length));
        }
        return Math.floor(Math.random() * 999) + ' ' + street_name + ' ' + routes[Math.floor(Math.random() * routes.length)] + ', ' + cities[Math.floor(Math.random() * cities.length)] + ' NY';
    };
    LeadDataService.prototype.makePhone = function () {
        var phone = '(716) ';
        phone += (Math.floor(Math.random() * 899) + 100) + '-' + (Math.floor(Math.random() * 8999) + 1000);
        return phone;
    };
    LeadDataService.prototype.makeEmail = function () {
        var email = '';
        var possible = "bcdfghijklmnprstvwaeiou";
        for (var i = 0; i < Math.floor(Math.random() * 2) + 3; i++) {
            email += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        email += '@';
        for (var i = 0; i < Math.floor(Math.random() * 2) + 3; i++) {
            email += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        email += '.com';
        return email;
    };
    LeadDataService.prototype.makeEvent = function () {
        var event = {};
        var dates = [
            "June 10, 2017 22:13:00",
            "June 11, 2017 00:20:00",
            "June 09, 2017 13:49:00",
            "June 10, 2017 17:39:00",
        ];
        var picked_date = dates[Math.floor(Math.random() * dates.length)];
        var date = new Date(picked_date);
        var types = ['claimed', 'called', 'mailed', 'emailed', 'other'];
        var type = types[Math.floor(Math.random() * types.length)];
        var details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        var users = ['Nate', 'Sebe', 'Kenny', 'Ray'];
        var user = users[Math.floor(Math.random() * users.length)];
        return {
            'datetime': date,
            'type': type,
            'details': details,
            'user': user
        };
    };
    return LeadDataService;
}());
LeadDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LeadDataService);

//# sourceMappingURL=lead-data.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_data_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadComponent = (function () {
    function LeadComponent(leadData) {
        this.leadData = leadData;
        this.selected = false;
        this.events = [];
        this.data = {
            'name': '',
            'address': '',
            'phone': '',
            'email': ''
        };
        this.leadFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    LeadComponent.prototype.ngOnInit = function () {
    };
    LeadComponent.prototype.ngOnChanges = function () {
    };
    LeadComponent.prototype.selectThis = function () {
        this.selected = true;
        this.loadEvents();
        this.leadFocus.emit(this);
    };
    LeadComponent.prototype.loadEvents = function () {
        this.events = [];
        for (var _i = 0, _a = this.leadData.getEvents(); _i < _a.length; _i++) {
            var event = _a[_i];
            this.events.push(event);
        }
    };
    LeadComponent.prototype.getEvents = function () {
        return this.events;
    };
    return LeadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], LeadComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], LeadComponent.prototype, "leadFocus", void 0);
LeadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'lead',
        template: __webpack_require__(160),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lead_data_service__["a" /* LeadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lead_data_service__["a" /* LeadDataService */]) === "function" && _a || Object])
], LeadComponent);

var _a;
//# sourceMappingURL=lead.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".datetime-text {\n  font-color: LightGray;\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n  float: right;\n}\n\n.message-text {\n  font-weight: bold;\n  font-size: small;\n}\n\n.event-detail {\n  font-size: small;\n}\n\n.event-detail.type {\n  font-weight: bold;\n}\n\n.event-detail.user {\n  font-weight: bold;\n  font-style: italic;\n}\n.event-detail.user:before{\n    content: \"\\B7   \";\n}\n\n.event-detail.date {\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(157),
        styles: [__webpack_require__(153)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_nav_main_nav_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lead_lead_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lead_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_event_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_nav_main_nav_component__["a" /* MainNavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__lead_lead_component__["a" /* LeadComponent */],
            __WEBPACK_IMPORTED_MODULE_11__event_event_component__["a" /* EventComponent */],
            __WEBPACK_IMPORTED_MODULE_11__event_event_component__["b" /* EventDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__lead_data_service__["a" /* LeadDataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* DatePipe */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_data_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventDetailComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = (function () {
    function EventComponent(leadService, pipe) {
        this.leadService = leadService;
        this.pipe = pipe;
        this.data = {
            'datetime': null,
            'type': '',
            'details': '',
            'user': ''
        };
        this.current_datetime = new Date();
        this.eventFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.onClick = function () {
        this.eventFocus.emit(this);
    };
    EventComponent.prototype.getSimpleMessage = function () {
        var d = this.data;
        var message = d.user;
        if (d.type == 'other') {
            message += ' left a note';
        }
        else {
            message += ' ' + d.type + ' this lead';
        }
        return message;
    };
    EventComponent.prototype.getSimpleDatetime = function () {
        var d = this.data;
        var date = this.current_datetime;
        var diff = (date.getTime() - d.datetime.getTime()) / 1000 / 60; //in minutes
        if (diff < 1) {
            return "(>1m)";
        }
        else if (diff < 60) {
            return "(" + Math.floor(diff) + "m)";
        }
        else if (diff / 60 < 24) {
            return "(" + Math.floor(diff / 60) + 'h)';
        }
        return "(" + this.pipe.transform(d.datetime, 'MMM d') + ")";
    };
    return EventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], EventComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], EventComponent.prototype, "eventFocus", void 0);
EventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'event',
        template: __webpack_require__(159),
        styles: [__webpack_require__(72)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lead_data_service__["a" /* LeadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lead_data_service__["a" /* LeadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */]) === "function" && _b || Object])
], EventComponent);

var EventDetailComponent = (function (_super) {
    __extends(EventDetailComponent, _super);
    function EventDetailComponent(leadService, pipe) {
        var _this = _super.call(this, leadService, pipe) || this;
        _this.leadService = leadService;
        _this.pipe = pipe;
        return _this;
    }
    EventDetailComponent.prototype.ngOnChange = function () {
        console.log("!!!");
    };
    return EventDetailComponent;
}(EventComponent));
EventDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'event-detail',
        template: __webpack_require__(158),
        styles: [__webpack_require__(72)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lead_data_service__["a" /* LeadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lead_data_service__["a" /* LeadDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */]) === "function" && _d || Object])
], EventDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lead_lead_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavComponent = (function () {
    function MainNavComponent(leadData) {
        this.leadData = leadData;
        this.current_lead = null;
        this.current_event = null;
        this.sidenav_button_icon = "chevron_right";
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent.prototype.toggleSideNav = function (event) {
        this.sidenav.toggle();
    };
    MainNavComponent.prototype.toggleExtraNav = function (event) {
        this.extranav.toggle();
    };
    MainNavComponent.prototype.getLeads = function () {
        return this.leadData.getLeads();
    };
    MainNavComponent.prototype.selectLead = function (lead_data) {
        for (var _i = 0, _a = this.leads['_results']; _i < _a.length; _i++) {
            var lead = _a[_i];
            if (!(lead == lead_data)) {
                lead.selected = false;
            }
        }
        this.current_lead = lead_data;
        this.sidenav.open();
    };
    MainNavComponent.prototype.selectEvent = function (event_data) {
        this.current_event = event_data;
    };
    return MainNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */]) === "function" && _a || Object)
], MainNavComponent.prototype, "sidenav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('extranav'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */]) === "function" && _b || Object)
], MainNavComponent.prototype, "extranav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__lead_lead_component__["a" /* LeadComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__lead_lead_component__["a" /* LeadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__lead_lead_component__["a" /* LeadComponent */]) === "function" && _c || Object)
], MainNavComponent.prototype, "leads", void 0);
MainNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'main-nav',
        template: __webpack_require__(161),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__lead_data_service__["a" /* LeadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lead_data_service__["a" /* LeadDataService */]) === "function" && _d || Object])
], MainNavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=main-nav.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.bundle.js.map