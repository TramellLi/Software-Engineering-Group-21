(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wayne/Desktop/Software-Engineering-Group-21-main/dev/04_Development/demo02/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = 'http://localhost:3000/api';
        this.REST_API_SERVER_C = 'http://localhost:3000/Comments';
        this.REST_API_SERVER_B = 'http://localhost:3000/BodyParts';
    }
    getAll() {
        return this.httpClient.get(this.REST_API_SERVER);
    }
    // public putAll(backValue: any): Observable<any>{
    //   return this.httpClient.post(this.REST_API_SERVER, backValue);
    // }
    getComments() {
        return this.httpClient.get(this.REST_API_SERVER_C);
    }
    getBodyParts() {
        return this.httpClient.get(this.REST_API_SERVER_B);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "k7d8");
/* harmony import */ var _main_body_main_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-body/main-body.component */ "o46Q");



class AppComponent {
    constructor() {
        // project title
        this.title = 'Posture Right';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 1, consts: [["id", "header", 1, "areas"], [2, "min-width", "2000px"], ["id", "body_left"], ["id", "votesBarBox"], ["id", "votesBar"], ["id", "body_right"], ["id", "footer", 1, "areas"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-bar-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-main-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Disclaimer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " These These suggestions are not offered as a substitute for the qualified medical advice or treatment you have received from your personal physician. We strongly recommend that you consult with your own physician or physiotherapist before beginning any exercise. You should be in good physical condition and be able to participate in these exercise. You should understand that when participating in any exercise, there is the possibility of physical injury. If you engage in these exercise or exercise programs listed here, you agree that you do so at your own risk, are voluntarily participating in these activities, assume all risk of injury to yourself and agree to release and discharge our website from any and all claims or causes of action. known or unknown, arising out of Make Painful painful negligence.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, directives: [_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], _main_body_main_body_component__WEBPACK_IMPORTED_MODULE_2__["MainBodyComponent"]], styles: ["#votesBar[_ngcontent-%COMP%]{\n  background-color: #80808030;\n  height: auto;\n  width: auto;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n  height:auto !important;\n\n  min-height:344px;\n}\n.areas[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n#header[_ngcontent-%COMP%]{\n  height: 60px ;\n  margin: 30px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: rgb(162,181,205);\n  position: sticky;\n  top : 30px;\n  z-index: 999;\n  text-align: center;\n  font-family: Silom;\n  font-size: 45px;\n  line-height: 60px;\n  color: #46505a;\n}\n\n#footer[_ngcontent-%COMP%]{\n  margin: 10px 200px 0 200px;\n  height: 60px;\n  clear: right;\n  font-size: 14px;\n  font-family: Arial;\n  position: relative;\n  top: 10px;\n}\n#votesBarBox[_ngcontent-%COMP%]{\n  min-width: 1620px;\n\n}\n#body_left[_ngcontent-%COMP%]{\n  display: inline-block;\n  \n  border-radius: 0 45px 45px 0;\n  height: 800px;\n  width: 1100px;\n  min-width: 500px;\n  background-color: rgb(238,233,233);\n}\n#body_right[_ngcontent-%COMP%]{\n  display: inline-block;\n  position: relative;\n  border-radius: 45px;\n  height: 800px;\n  width: 30%;\n  min-width: 400px;\n  vertical-align: top;\n  \n  \n  float: right ;\n  right: 0;\n  z-index: 500;\n  position: fixed;\n}\n#card-right[_ngcontent-%COMP%]{\n  height: 800px;\n  width: 300px;\n  min-width: 300px;\n  display: inline-block;\n  border: red solid 1px;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQztFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7O0VBRXRCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBLG9DQUFvQztBQUNwQztFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVGhpcyBpcyBmb3IgdGhlIGJhciBjaGFydCBvZiB2ZXRlcyovXG4jdm90ZXNCYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAzMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lcntcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xuXG4gIG1pbi1oZWlnaHQ6MzQ0cHg7XG59XG4uYXJlYXN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLypUaGlzIGlzIGZvciB0aGUgdG9wIGJhciovXG4jaGVhZGVye1xuICBoZWlnaHQ6IDYwcHggO1xuICBtYXJnaW46IDMwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsMTgxLDIwNSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcCA6IDMwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogU2lsb207XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiAjNDY1MDVhO1xufVxuXG4vKlRoaXMgaXMgZm9yIHRoZSBib3R0b20gZGlzY2xhaW1lciovXG4jZm9vdGVye1xuICBtYXJnaW46IDEwcHggMjAwcHggMCAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjbGVhcjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cblxuI3ZvdGVzQmFyQm94e1xuICBtaW4td2lkdGg6IDE2MjBweDtcblxufVxuXG4jYm9keV9sZWZ0e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXG4gIGJvcmRlci1yYWRpdXM6IDAgNDVweCA0NXB4IDA7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsMjMzLDIzMyk7XG59XG5cbiNib2R5X3JpZ2h0e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LDI0NSwyNDUpOyovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsqL1xuICBmbG9hdDogcmlnaHQgO1xuICByaWdodDogMDtcbiAgei1pbmRleDogNTAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNjYXJkLXJpZ2h0e1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "k7d8");
/* harmony import */ var _main_body_main_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-body/main-body.component */ "o46Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"],
        _main_body_main_body_component__WEBPACK_IMPORTED_MODULE_7__["MainBodyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]] }); })();


/***/ }),

/***/ "k7d8":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BarChartComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarChartComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const barChartLabel_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clkbtn(barChartLabel_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const barChartLabel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", barChartLabel_r3, " ");
} }
function BarChartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r6, " ");
} }
// Here are some test or not used imports.
// import { BODYPARTS } from '../tempBody';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';
// import { Service } from '../service';
// import { NzMessageService } from 'ng-zorro-antd';
class BarChartComponent {
    // not used commands
    // @ViewChild('regionCharts', {static: false}) regionCharts: any;
    // @Input() addItemStream: Observable<any> | undefined;
    constructor(dataService, changeDetectorRef) {
        this.dataService = dataService;
        this.changeDetectorRef = changeDetectorRef;
        // bar chart attributes, data are not used in real, styles are used
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                labels: { fontColor: 'black' }
            },
            scales: {
                xAxes: [{
                        ticks: { fontColor: 'black', beginAtZero: true,
                            backdropColor: { color: 'rgba(255,255,255,0.1)' } },
                        gridLines: { color: 'rgba(255,255,255,0.1)' },
                        color: { color: 'rgba(255,255,255,0.1)' },
                        borderColor: { color: 'rgba(255,255,255,0.1)' },
                        display: true
                    }],
                yAxes: [{
                        ticks: { fontColor: 'black' },
                        gridLines: { color: 'rgba(255,255,255,0.1)' },
                        display: false
                    }]
            },
        };
        this.comments = ['Test comment 1', 'Test comment 2', 'Test comment 3'];
        this.barChartLabels = ['Head', 'Eyes', 'Neck Pain', 'Shoulder', 'Cervical', 'Lumbar', 'Hand', 'Limb Pain', 'Foot'];
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [3, 2, 1, 4, 8, 6, 7, 5, 8], label: 'Vote if you got same pain by click buttons on the right' },
        ];
        this.barChartPlugins = [];
        this.barChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(90,85,85,0.3)',
            },
        ];
        this.bodyParts = [];
        // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective | undefined;
        // chart: BaseChartDirective;
        this.stats = [];
        this.currentdata = null;
        this.currentIndex = -1;
        this.title = '';
        this.indexOfBar = 0;
        this.tstString = '';
        this.backValue = {
            barChartLabels: [],
            barChartData: []
        };
        // render barchart
        this.retrieveData();
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.retrieveData();
        this.retrieveComments();
        this.retrieveBodyParts();
        // this.clkbtn()
        // @ts-ignore
        // document.getElementById('myChart').ontimeupdate(this.clkbtn());
    }
    // tslint:disable-next-line:typedef
    ngOnChange() {
        this.retrieveComments();
    }
    // cellect data of vote from back end
    // tslint:disable-next-line:typedef
    retrieveData() {
        this.dataService.getAll().subscribe(data => {
            this.stats = data;
            // now let's update the fields
            this.barChartLabels = this.stats.barChartLabels;
            this.barChartData = this.stats.barChartData;
        }, error => {
            console.log(error);
        });
    }
    // cellect data of comments from back end
    // tslint:disable-next-line:typedef
    retrieveComments() {
        this.dataService.getComments().subscribe(data => {
            this.stats = data;
            // now let's update the fields
            console.log(data);
            for (let i = 0; i < 6; i++) {
                this.comments[i] = this.stats[i].content + '¬';
            }
        }, error => {
            console.log(error);
        });
    }
    // cellect data of bodyparts from back end
    // tslint:disable-next-line:typedef
    retrieveBodyParts() {
        this.dataService.getBodyParts().subscribe(data => {
            this.bodyParts = data;
            // now let's update the fields
            console.log('zzz' + data);
            // for (let i = 0; i < 6; i++) {
            //   this.comments[i] = this.bodyParts[i].content + '¬';
            // }
        }, error => {
            console.log(error);
        });
        return this.bodyParts;
    }
    // button list event
    // tslint:disable-next-line:typedef
    clkbtn(barChartLabel) {
        this.indexOfBar = this.barChartLabels.indexOf(barChartLabel);
        this.barChartData[0].data[this.indexOfBar]++;
        this.barChartLegend = false;
        this.changeDetectorRef.reattach();
        // this.retrieveComments();
        this.barChartLegend = true;
        this.backValue.barChartData = this.barChartData;
        this.backValue.barChartLabels = this.barChartLabels;
        // this.dataService.putAll(this.backValue).subscribe();
        this.retrieveData();
        // this.update();
        // this.regionCharts.chartInstance.setOption(this.barChartData);
        // @ts-ignore
        // document.getElementById('myChart').ontimeupdate(this.clkbtn());
        // this.ngOnChange();
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], decls: 18, vars: 10, consts: [[2, "display", "inline-block", "width", "500px"], ["id", "myChart", "baseChart", "", "width", "2", "height", "3", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], [2, "display", "inline-block", "height", "800px", "width", "150px", "position", "absolute", "left", "550px", "font-family", "Silom"], ["style", "display: block; width: 120px; margin: 38px 0 37px 0; height: 40px; border-radius: 5px", 3, "click", 4, "ngFor", "ngForOf"], [2, "display", "inline-block", "height", "700px", "width", "300px", "margin", "50px", "position", "absolute", "left", "680px", "border-radius", "30px", "padding", "20px", "background-color", "#e9e2e5", "font-family", "Silom"], [4, "ngFor", "ngForOf"], [2, "position", "absolute", "left", "20px", "top", "500px"], ["id", "textBox", "type", "text", "size", "15px"], ["commentValue", ""], [2, "display", "block", "width", "120px", "margin", "38px 0 37px 0", "height", "40px", "border-radius", "5px", 3, "click"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BarChartComponent_button_3_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BarChartComponent_div_10_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.barChartLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tstString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["canvas[_ngcontent-%COMP%]{\n  height: 1000px;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQztFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFHQSxTQUFTO0FBQ1QsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLElBQUk7QUFHSixPQUFPO0FBQ1AsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsSUFBSTtBQUNKLE9BQU87QUFDUCxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixJQUFJO0FBQ0osT0FBTztBQUNQLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLElBQUk7QUFDSixPQUFPO0FBQ1AsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsSUFBSTtBQUNKLE9BQU87QUFDUCxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixJQUFJO0FBQ0osT0FBTztBQUNQLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLElBQUk7QUFFSixZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLElBQUk7QUFFSixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixJQUFJO0FBRUosWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLElBQUk7QUFFSixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixJQUFJIiwiZmlsZSI6ImJhci1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBpcyB0aGUgc2l6ZSBvZiBiYXJjaGFydCovXG5jYW52YXN7XG4gIGhlaWdodDogMTAwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cblxuLyojaW1nMXsqL1xuLyogIHotaW5kZXg6MTsqL1xuLyogIHBvc2l0aW9uOnJlbGF0aXZlOyovXG4vKiAgbGVmdDoxMDBweDsqL1xuLyogIHRvcDowcHg7Ki9cbi8qfSovXG5cblxuLyouczF7Ki9cbi8qICB6LWluZGV4OiAxMDAwOyovXG4vKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4vKiAgZGlzcGxheTogbm9uZTsqL1xuLyp9Ki9cbi8qLnMyeyovXG4vKiAgei1pbmRleDogMTAwMTsqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuLyogIGRpc3BsYXk6IG5vbmU7Ki9cbi8qfSovXG4vKi5zM3sqL1xuLyogIHotaW5kZXg6IDEwMDI7Ki9cbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qICBkaXNwbGF5OiBub25lOyovXG4vKn0qL1xuLyouczR7Ki9cbi8qICB6LWluZGV4OiAxMDAzOyovXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKiAgZGlzcGxheTogbm9uZTsqL1xuLyp9Ki9cbi8qLnM1eyovXG4vKiAgei1pbmRleDogMTAwNDsqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuLyogIGRpc3BsYXk6IG5vbmU7Ki9cbi8qfSovXG4vKi5zNnsqL1xuLyogIHotaW5kZXg6IDEwMDU7Ki9cbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qICBkaXNwbGF5OiBub25lOyovXG4vKn0qL1xuXG4vKi5jaXJjbGUxeyovXG4vKiAgdmVydGljYWwtYWxpZ246IHRvcDsqL1xuLyogIHotaW5kZXg6IDEwMDsqL1xuLyogIHdpZHRoOiAxMHB4OyovXG4vKiAgaGVpZ2h0OiAxMHB4OyovXG4vKiAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xuLyogIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7Ki9cbi8qICBib3gtc2l6aW5nOiBib3JkZXItYm94OyovXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKiAgbGVmdDogMzcwcHg7Ki9cbi8qICB0b3A6IDE0MHB4OyovXG4vKn0qL1xuXG4vKi5jaXJjbGUyeyovXG4vKiAgei1pbmRleDogMTAxOyovXG4vKiAgd2lkdGg6IDEwcHg7Ki9cbi8qICBoZWlnaHQ6IDEwcHg7Ki9cbi8qICBib3JkZXItcmFkaXVzOiAxMHB4OyovXG4vKiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTsqL1xuLyogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qICBsZWZ0OiAyMDBweDsqL1xuLyogIHRvcDogMTMwcHg7Ki9cbi8qfSovXG5cbi8qLmNpcmNsZTN7Ki9cbi8qICB6LWluZGV4OiAxMDI7Ki9cbi8qICB3aWR0aDogMTBweDsqL1xuLyogIGhlaWdodDogMTBweDsqL1xuLyogIGJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cbi8qICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlOyovXG4vKiAgYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuLyogIGxlZnQ6IDM4MHB4OyovXG4vKiAgdG9wOiAzMDBweDsqL1xuLyp9Ki9cblxuLyouY2lyY2xlNHsqL1xuLyogIHotaW5kZXg6IDEwMzsqL1xuLyogIHdpZHRoOiAxMHB4OyovXG4vKiAgaGVpZ2h0OiAxMHB4OyovXG4vKiAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xuLyogIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7Ki9cbi8qICBib3gtc2l6aW5nOiBib3JkZXItYm94OyovXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKiAgbGVmdDogMzkwcHg7Ki9cbi8qICB0b3A6IDM2MHB4OyovXG4vKn0qL1xuXG4vKi5jaXJjbGU1eyovXG4vKiAgei1pbmRleDogMTA0OyovXG4vKiAgd2lkdGg6IDEwcHg7Ki9cbi8qICBoZWlnaHQ6IDEwcHg7Ki9cbi8qICBib3JkZXItcmFkaXVzOiAxMHB4OyovXG4vKiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTsqL1xuLyogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qICBsZWZ0OiAxODVweDsqL1xuLyogIHRvcDogNDI1cHg7Ki9cbi8qfSovXG5cbi8qLmNpcmNsZTZ7Ki9cbi8qICB6LWluZGV4OiAxMDU7Ki9cbi8qICB3aWR0aDogMTBweDsqL1xuLyogIGhlaWdodDogMTBweDsqL1xuLyogIGJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cbi8qICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlOyovXG4vKiAgYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xuLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuLyogIGxlZnQ6IDQwNXB4OyovXG4vKiAgdG9wOiA1NzVweDsqL1xuLyp9Ki9cbiJdfQ== */"] });


/***/ }),

/***/ "o46Q":
/*!**************************************************!*\
  !*** ./src/app/main-body/main-body.component.ts ***!
  \**************************************************/
/*! exports provided: MainBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBodyComponent", function() { return MainBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainBodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainBodyComponent.ɵfac = function MainBodyComponent_Factory(t) { return new (t || MainBodyComponent)(); };
MainBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBodyComponent, selectors: [["app-main-body"]], decls: 22, vars: 0, consts: [[2, "z-index", "800", "display", "inline-block", "position", "relative", "float", "right", "font-family", "Silom", "font-size", "20px"], ["id", "img1", "src", "/assets/body.png", "alt", "body", "useMap", "#planetMap"], ["name", "planetMap", "id", "planetMap"], ["shape", "circle", "coords", "270,140,15", "alt", "Shoulder", "id", "s1", "onMouseOver", "show1()", 1, "tmp"], ["shape", "circle", "coords", "100,130,15", "alt", "Neck", "id", "s2", "onMouseOver", "show2()", 1, "tmp"], ["shape", "circle", "coords", "280,300,15", "alt", "Back", "id", "s3", "onMouseOver", "show3()", 1, "tmp"], ["shape", "circle", "coords", "290,360,15", "alt", "Lumbar", "id", "s4", "onMouseOver", "show4()", 1, "tmp"], ["shape", "circle", "coords", "85,425,15", "alt", "Wrist", "id", "s5", "onMouseOver", "show5()", 1, "tmp"], ["shape", "circle", "coords", "305,575,15", "alt", "Leg", "id", "s6", "onMouseOver", "show6()", 1, "tmp"], ["shape", "circle", "coords", "170,65,15", "alt", "Eyes", "id", "s7", "onMouseOver", "show7()", 1, "tmp"], ["shape", "circle", "coords", "120,30,15", "alt", "Head", "id", "s8", "onMouseOver", "show8()", 1, "tmp"], ["shape", "circle", "coords", "320,675,15", "alt", "Foot", "id", "s9", "onMouseOver", "show9()", 1, "tmp"], ["id", "circle1", 1, "circle1"], ["id", "circle2", 1, "circle2"], ["id", "circle3", 1, "circle3"], ["id", "circle4", 1, "circle4"], ["id", "circle5", 1, "circle5"], ["id", "circle6", 1, "circle6"], ["id", "circle7", 1, "circle7"], ["id", "circle8", 1, "circle8"], ["id", "circle9", 1, "circle9"]], template: function MainBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hover mouse on red circles.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "area", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "area", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "area", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "area", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "area", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "area", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "area", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "area", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 20);
    } }, styles: ["#img1[_ngcontent-%COMP%]{\n  z-index:1;\n  position:absolute;\n  left:0px;\n  top:0px;\n  \n  \n}\n\n.circle1[_ngcontent-%COMP%]{\n  z-index: 100;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 270px;\n  top: 140px;\n}\n\n.circle2[_ngcontent-%COMP%]{\n  z-index: 101;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 100px;\n  top: 130px;\n}\n\n.circle3[_ngcontent-%COMP%]{\n  z-index: 102;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 280px;\n  top: 300px;\n}\n\n.circle4[_ngcontent-%COMP%]{\n  z-index: 103;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 290px;\n  top: 360px;\n}\n\n.circle5[_ngcontent-%COMP%]{\n  z-index: 104;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 85px;\n  top: 425px;\n}\n\n.circle6[_ngcontent-%COMP%]{\n  z-index: 105;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 305px;\n  top: 575px;\n}\n\n.circle7[_ngcontent-%COMP%]{\n  z-index: 106;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 170px;\n  top: 65px;\n}\n\n.circle8[_ngcontent-%COMP%]{\n  z-index: 106;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 120px;\n  top: 30px;\n}\n\n.circle9[_ngcontent-%COMP%]{\n  z-index: 106;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  border: 2px solid red;\n  box-sizing: border-box;\n  position: absolute;\n  left: 330px;\n  top: 680px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoibWFpbi1ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1nMXtcbiAgei1pbmRleDoxO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDowcHg7XG4gIHRvcDowcHg7XG4gIC8qaGVpZ2h0OiA4MDBweDsqL1xuICAvKndpZHRoOiAzOTJweDsqL1xufVxuXG4uY2lyY2xlMXtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjcwcHg7XG4gIHRvcDogMTQwcHg7XG59XG5cbi5jaXJjbGUye1xuICB6LWluZGV4OiAxMDE7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgdG9wOiAxMzBweDtcbn1cblxuLmNpcmNsZTN7XG4gIHotaW5kZXg6IDEwMjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI4MHB4O1xuICB0b3A6IDMwMHB4O1xufVxuXG4uY2lyY2xlNHtcbiAgei1pbmRleDogMTAzO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjkwcHg7XG4gIHRvcDogMzYwcHg7XG59XG5cbi5jaXJjbGU1e1xuICB6LWluZGV4OiAxMDQ7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4NXB4O1xuICB0b3A6IDQyNXB4O1xufVxuXG4uY2lyY2xlNntcbiAgei1pbmRleDogMTA1O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzA1cHg7XG4gIHRvcDogNTc1cHg7XG59XG5cbi5jaXJjbGU3e1xuICB6LWluZGV4OiAxMDY7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNzBweDtcbiAgdG9wOiA2NXB4O1xufVxuXG4uY2lyY2xlOHtcbiAgei1pbmRleDogMTA2O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIwcHg7XG4gIHRvcDogMzBweDtcbn1cblxuLmNpcmNsZTl7XG4gIHotaW5kZXg6IDEwNjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMzMHB4O1xuICB0b3A6IDY4MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "k7d8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'bar-chart', component: _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"] },
    { path: '**', component: _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map