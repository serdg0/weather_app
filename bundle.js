!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i={};function c(e,n,t){for(var o=0;o<n.length;o++){var r={css:n[o][1],media:n[o][2],sourceMap:n[o][3]};i[e][o]?i[e][o](r):i[e].push(h(r,t))}}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,n){var t,o,r;if(n.singleton){var a=m++;t=p||(p=s(n)),o=d.bind(null,t,a,!1),r=d.bind(null,t,a,!0)}else t=s(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),e=t.base?e+t.base:e,n=n||[],i[e]||(i[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){i[e]||(i[e]=[]),c(e,n,t);for(var o=n.length;o<i[e].length;o++)i[e][o]();i[e].length=n.length,0===i[e].length&&delete i[e]}}}},function(e,n,t){var o=t(3),r=t(4),a=t(5);n=o(!1);var i=r(a);n.push([e.i,"@font-face {\n    font-family: 'pelaa';\n    src: url("+i+");\n}\n* {\n    font-family: 'pelaa';\n    color: orangered;\n}\nbody {\n    background-image: linear-gradient(to right, #E0EAFC, #CFDEF3);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput:invalid {\n    border: 3px dashed red;\n}\n\nimg:before {\n    display: none;\n}\n\ninput:valid {\n    color: goldenrod;\n}\n\ninput:hover {\n    background-image: linear-gradient(to right, #E0EAFC, #CFDEF3);\n}\n\nbutton {\n    background-color: rgba(255,0,0,0.6);\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r)}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"92f08b1a067998ce80279e398cf849da.ttf"},function(e,n,t){"use strict";t.r(n);var o=async function(e){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f132c91445a8aee3a82a174f4a71eb7a`,{mode:"cors"});return await n.json()};var r=async function(e){const n=document.getElementById("weather"),t=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=I9ttJdsXY4zLUIHMMVnnx4wVt4h9xDV6&s=weather+sky+${e}`,{mode:"cors"}),o=await t.json();n.src=o.data.images.original.url};var a=async function(){const e=document.getElementById("city");document.getElementById("submit").onclick=async function(){const n=e.value.toLowerCase(),t=await o(n);if(null==t.message){const e=t.weather[0].main;await async function(e){const n=parseFloat(e.main.temp).toFixed(2);document.getElementById("celsius").innerHTML="Celsius: "+(n-273.15).toFixed(1),document.getElementById("fahrenheit").innerHTML="Fahrenheit: "+(9*(n-273.15)/5+32).toFixed(1),document.getElementById("description").innerHTML="Status: "+e.weather[0].description}(t),await r(e)}else document.getElementById("celsius").innerHTML="FAILED TASK BRO/SIS"};const n=await fetch("https://api.giphy.com/v1/gifs/ASd0Ukj0y3qMM?api_key=I9ttJdsXY4zLUIHMMVnnx4wVt4h9xDV6"),t=await n.json();document.getElementById("weather").src=t.data.images.original.url};t(0);a()}]);