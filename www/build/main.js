webpackJsonp([0],{

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_example_api_example__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ui_ui__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, apiExampleProvider, uiProvider) {
        this.navCtrl = navCtrl;
        this.apiExampleProvider = apiExampleProvider;
        this.uiProvider = uiProvider;
    }
    HomePage.prototype.success = function () {
        var observable = this.apiExampleProvider.success();
        observable = this.uiProvider.pipeLoader(observable);
        observable = this.uiProvider.pipeErrorHandler(observable);
        observable.subscribe(function () {
        }, function () { });
    };
    HomePage.prototype.error = function () {
        var observable = this.apiExampleProvider.error();
        observable = this.uiProvider.pipeLoader(observable);
        observable = this.uiProvider.pipeErrorHandler(observable);
        observable.subscribe(function () {
        }, function () { });
    };
    HomePage.prototype.networkError = function () {
        var observable = this.apiExampleProvider.networkError();
        observable = this.uiProvider.pipeLoader(observable);
        observable = this.uiProvider.pipeErrorHandler(observable);
        observable.subscribe(function () {
        }, function () { });
    };
    HomePage.prototype.loaderOnly = function () {
        var observable = this.apiExampleProvider.success();
        observable = this.uiProvider.pipeLoader(observable);
        observable.subscribe(function () { }, function (error) { });
    };
    HomePage.prototype.errorOnly = function () {
        var observable = this.apiExampleProvider.networkError();
        observable = this.uiProvider.pipeErrorHandler(observable);
        observable.subscribe(function () {
        }, function () { });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/apple/projects/ionic/rxjs_sample/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Ionic Blank\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div text-center>\n		<button (tap)=\'success()\' ion-button>\n			Simulate success\n		</button>\n	</div>\n	<div text-center>\n		<button (tap)=\'error()\' ion-button>\n			Simulate error\n		</button>\n	</div>\n	<div text-center>\n		<button (tap)=\'networkError()\' ion-button>\n			Simulate network error\n		</button>\n	</div>\n	<div text-center>\n		<button (tap)=\'loaderOnly()\' ion-button>\n			Simulate loader only\n		</button>\n	</div>\n	<div text-center>\n		<button (tap)=\'errorOnly()\' ion-button>\n			Simulate error toaster only\n		</button>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/apple/projects/ionic/rxjs_sample/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_example_api_example__["a" /* ApiExampleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ui_ui__["a" /* UiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiExampleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiExampleProvider = /** @class */ (function () {
    function ApiExampleProvider(api) {
        this.api = api;
    }
    ApiExampleProvider.prototype.success = function () {
        return this.api.post('success', {});
    };
    ApiExampleProvider.prototype.error = function () {
        return this.api.post('error', {});
    };
    ApiExampleProvider.prototype.networkError = function () {
        return this.api.post('network_error', {});
    };
    ApiExampleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */]])
    ], ApiExampleProvider);
    return ApiExampleProvider;
}());

//# sourceMappingURL=api-example.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_DeferObservable__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_DeferObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_DeferObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiProvider = /** @class */ (function () {
    function ApiProvider() {
    }
    ApiProvider.prototype.post = function (url, data) {
        // we are using DeferObservable instead of creating
        // promise with "from" operator like below
        // 
        // let observable = from(new Promise((resolve, reject)=>{resolve()}))
        //
        // what above method will do is it will immediately execute promise as soon as called
        // even though observable is not subscribed
        // but we only want to execute promise 
        // when observable will be subscribed
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_DeferObservable__["DeferObservable"](function () {
            // this is our promise ( in reality it will be promise returned from firebase )
            return new Promise(function (resolve, reject) {
                var response = {
                    status: null,
                    msg: '',
                    data: {}
                };
                if (url == 'success') {
                    response.status = true;
                    response.data = {};
                    response.msg = '';
                }
                else if (url == 'error') {
                    response.status = false;
                    response.data = {};
                    response.msg = 'Something went wrong! Please try again later....';
                }
                // random timeout to simulate latency
                var timeout = Math.ceil(Math.random() * 5000);
                setTimeout(function () {
                    if (url == 'success') {
                        // resolves a promise
                        return resolve(response);
                    }
                    else if (url == 'error') {
                        // resolves a promise but infact error is there from server
                        // so we need to extract error from response parser
                        return resolve(response);
                    }
                    else if (url == 'network_error') {
                        // rejects the promise, some network error occurred
                        return reject("Serve is down..");
                    }
                }, timeout);
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["mergeMap"])(function (data) {
            // This callback only will be called if promise resolved successfully
            // If promise rejects then we have to handle error in pipe
            // using catchError function
            // now there are two cases
            // if promise resolve it ONLY MEANS REQUEST IS COMPLETED successfully
            // it doesn't mean that task we wanted to perform is completed on backend
            // ex : this two cases will resolve promise ( because request made successfully )
            // {
            // 	status : false,
            // 	data : null,
            // 	msg : "Oops! you dont have permission to team."
            // }
            // {
            // 	status : true,
            // 	data : [{x:y},{z:w}],
            // 	msg : ''
            // }
            // below case will reject promise 
            // suppose server returns 404, or 403 or any other like 500 (depends on backend)
            // then you have to handle those error using adding catchError in pipe
            // here we are parsing response
            // as we have static data we dont need to parse the response
            // but you can put some parsing logic according to your application
            // ex : maybe you want to show some different error message 
            // or if backend guy changes the response structure you can handle it from responseParser function
            return _this.responseParser(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
                // in practice you have to parse proper error over here
                // i.e error.status == 403 then message could be "Unauthorized access"
                //
                // but here we know that error will be string ( reject method from above )
                observer.error(error);
                observer.complete();
            });
        }));
    };
    ApiProvider.prototype.responseParser = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            if (data.status) {
                // extracting data and passing that data ahead
                // in pipe
                observer.next(data.data);
                observer.complete();
            }
            else {
                // passing data
                observer.error(data.msg);
                observer.complete();
            }
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiProvider = /** @class */ (function () {
    function UiProvider(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    UiProvider.prototype.pipeLoader = function (observable) {
        var loader = this.loadingCtrl.create();
        loader.present();
        return observable.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["mergeMap"])(function (data) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                loader.dismiss().then(function () {
                    observer.next(data);
                    observer.complete();
                });
            });
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                loader.dismiss().then(function () {
                    observer.error(error);
                    observer.complete();
                });
            });
        }));
    };
    UiProvider.prototype.pipeErrorHandler = function (observable) {
        var _this = this;
        return observable.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.toastCtrl.create({
                    message: error,
                    duration: 3000
                }).present();
                observer.error(error);
                observer.complete();
            });
        }));
    };
    UiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], UiProvider);
    return UiProvider;
}());

//# sourceMappingURL=ui.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_example_api_example__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ui_ui__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_api_example_api_example__["a" /* ApiExampleProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_ui_ui__["a" /* UiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/apple/projects/ionic/rxjs_sample/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/apple/projects/ionic/rxjs_sample/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map