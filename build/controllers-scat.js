!function(){function e(n,r,i){function t(o,c){if(!r[o]){if(!n[o]){var u="function"==typeof require&&require;if(!c&&u)return u(o,!0);if(s)return s(o,!0);var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var d=r[o]={exports:{}};n[o][0].call(d.exports,function(e){var r=n[o][1][e];return t(r||e)},d,d.exports,e,n,r,i)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)t(i[o]);return t}return e}()({1:[function(e,n,r){"use strict";function i(e,n){function r(){f.availableByPassengers=f.orderInfo.passengers.map(function(e,n){return f.service.itemsByPassengers[n].length&&"KZ"===e.nationalityCode&&e.documentNumberDiscount&&(o(e)||i())}),f.insuranceAvailable=t()&&!s()}function i(){return f.orderInfo.passengers.some(function(e){return o(e)&&e.documentNumberDiscount&&"KZ"===e.nationalityCode})}function t(){return f.orderInfo.passengers.some(function(e){return o(e)&&"KZ"===e.nationalityCode})}function s(){return f.orderInfo.plainFlights.some(function(n){var r=e.getCityByCode(n.destinationcity),i=e.getCityByCode(n.origincity);return!r||!i||"KZ"!==r.countryEn||"KZ"!==i.countryEn})}function o(n){var r=moment(e.sessionParams.todayDate,"DD.MM.YYYY").diff(moment(n.dateOfBirth,"DD.MM.YYYY"),"years");return r>=18}function c(){f.locked||(f.service.active=!f.service.active,f.service.active?1===f.service.items.length&&e.modifyExtraService(d(f.service.items[0])):e.removeExtraService({code:f.service.onlineMode?"insuranceOnline":"insurance"}))}function u(r,t){f.locked||(f.orderInfo.passengers[t].documentNumberDiscount?e[f.service.itemsByPassengers[t][r].selected?"removeExtraService":"modifyExtraService"](d(f.service.itemsByPassengers[t][r],f.orderInfo.passengers[t].id)):o(f.orderInfo.passengers[t])||i()?f.saveIinHandlers[t]().then(function(){u(r,t)}):n.race(f.saveIinHandlers.filter(function(e,n){return n!==t}).map(function(e){return e()})).then(function(){u(r,t)}))}function a(e){return{value:e.price||Big(e.insurance_premium||0).plus(e.luggage_premium||0).toFixed(2),currency:e.currency}}function d(e,n){var r={code:"insurance",ins:e.ins,tins:e.tins,passenger_id:n};return f.service.onlineMode&&(r.code="insuranceOnline",r.productCode=e.productCode),r}var f=this;f.switchService=c,f.switchServiceItem=u,f.getInsuranceFullPrice=a,f.updateAvailable=r,f.saveIinHandlers=[],f.orderInfo=e.getOrderInfo(),r()}angular.module("app").component("esInsuranceIin",{templateUrl:"components/es-insurance-with-iin/es-insurance-with-iin.html",controller:["backend","$q",i],controllerAs:"vm",bindings:{service:"=service",locked:"=locked",hasOtherServices:"="}})},{}],2:[function(e,n,r){"use strict";alert("hello world")},{}],3:[function(e,n,r){"use strict";e("./components/es-insurance/es-insurance"),e("./components/es-insurance-with-iin/es-insurance-with-iin")},{"./components/es-insurance-with-iin/es-insurance-with-iin":1,"./components/es-insurance/es-insurance":2}]},{},[3]);
//# sourceMappingURL=controllers-scat.js.map