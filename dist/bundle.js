!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";async function a(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f132c91445a8aee3a82a174f4a71eb7a`,{mode:"cors"});return await t.json()}n.r(t);var o=async function(e,t){const n="I9ttJdsXY4zLUIHMMVnnx4wVt4h9xDV6",a=document.getElementById("gif"),o=document.getElementById("weather"),r=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${n}&s=${e}`,{mode:"cors"}),i=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${n}&s=weather+sky+${t}`,{mode:"cors"}),c=await r.json();a.src=c.data.images.original.url;const u=await i.json();o.src=u.data.images.original.url};var r=()=>{const e=document.getElementById("city").value;document.getElementById("submit").onclick=async function(){console.log(typeof e);const t=await async function(e){return(await a(e)).weather[0].main}(e);await async function(){const e=document.getElementById("city").value.toLowerCase(),t=await a(e),n=parseFloat(t.main.temp).toFixed(2);document.getElementById("celsius").innerHTML="Celsius: "+(n-273.15).toFixed(1),document.getElementById("fahrenheit").innerHTML="Fahrenheit: "+(9*(n-273.15)/5+32).toFixed(1),document.getElementById("description").innerHTML="Status: "+t.weather[0].description}(),await o(e,t)}};document.getElementById("city").value="POLAND",r()}]);