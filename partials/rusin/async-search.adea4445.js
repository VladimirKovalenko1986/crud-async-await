!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequirea9a2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){r[e]=n},n.parcelRequirea9a2=a);var c=a("bpxeT"),u=a("2TvXO");var o={searchForm:document.querySelector(".js-search"),addCountry:document.querySelector(".js-add"),list:document.querySelector(".js-list"),conteinerWrapper:document.querySelector(".js-wrapper")},i='<input class="search-input" type="text" name="country" />';function s(){return s=e(c)(e(u).mark((function n(t){var r,a,o;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.map(function(){var n=e(c)(e(u).mark((function n(t){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/name/".concat(t));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=3,Promise.allSettled(r);case 3:return a=n.sent,o=a.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value[0]})),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=e(c)(e(u).mark((function n(t){var r,a,o;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"http://api.weatherapi.com/v1","9832fca16a6240d9a17162137242801",r=t.map(function(){var n=e(c)(e(u).mark((function n(t){var r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({key:"9832fca16a6240d9a17162137242801",q:t,lang:"uk"}),e.next=3,fetch("".concat("http://api.weatherapi.com/v1","/current.json?").concat(r));case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=5,Promise.allSettled(r);case 5:return a=n.sent,o=a.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})),n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(e){return e.map((function(e){var n=e.current,t=n.condition,r=t.icon,a=t.text,c=n.temp_c,u=e.location,o=u.country,i=u.name;return' <li class="weather-item">\n          <div>\n            <h2>'.concat(o,"</h2>\n            <h3>").concat(i,'</h3>\n          </div>\n          <img class="weather-img" src="').concat(r,'" alt="').concat(a,'" />\n          <p>').concat(a,"</p>\n          <p>").concat(c,"°C</p>\n        </li>")})).join("")}o.addCountry.addEventListener("click",(function(){o.conteinerWrapper.insertAdjacentHTML("beforeend",i)})),o.searchForm.addEventListener("submit",(function(n){n.preventDefault(),function(e){return s.apply(this,arguments)}(new FormData(n.currentTarget).getAll("country").filter((function(e){return e})).map((function(e){return e.trim()}))).then((t=e(c)(e(u).mark((function n(t){var r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.map((function(e){return e.capital[0]})),e.next=3,p(r);case 3:a=e.sent,o.list.innerHTML=l(a);case 5:case"end":return e.stop()}}),n)}))),function(e){return t.apply(this,arguments)})).catch((function(e){return console.log(e)})).finally((function(){o.searchForm.reset(),o.conteinerWrapper.innerHTML=i}));var t}))}();
//# sourceMappingURL=async-search.adea4445.js.map