"use strict";var precacheConfig=[["/developer-coding-evaluation/index.html","e9082a229a2b704c88765ec73cf8f6a9"],["/developer-coding-evaluation/static/css/main.c7e060be.css","62a24cffa7041ad9e9841a7661614ad8"],["/developer-coding-evaluation/static/js/main.049c7ede.js","4ba5460763cd77de1deb298abeeee855"],["/developer-coding-evaluation/static/media/Effra_Std_Bd.3a46ed06.ttf","3a46ed063ee3a290da1a16b736db9a55"],["/developer-coding-evaluation/static/media/Effra_Std_Lt.6ac0a198.ttf","6ac0a1988341ed311f14fd64b6597266"],["/developer-coding-evaluation/static/media/Effra_Std_Md.08f70587.ttf","08f7058726747e3a09c5b018cf74fa98"],["/developer-coding-evaluation/static/media/Effra_Std_Rg.2c0f01f7.ttf","2c0f01f70349cddfe194b8ba9df23378"],["/developer-coding-evaluation/static/media/icon-appdev.3a7a3ce0.svg","3a7a3ce05454b5aaf6fb67827e01268d"],["/developer-coding-evaluation/static/media/icon-ba.5d841635.svg","5d841635d1a6442028eddff9b7a1a872"],["/developer-coding-evaluation/static/media/icon-bi.75d3fe76.svg","75d3fe76faee0d70ed7de9261438f1a2"],["/developer-coding-evaluation/static/media/icon-facebook.b5f39618.svg","b5f3961841e02e8737944d2019800c14"],["/developer-coding-evaluation/static/media/icon-g+.6d928f99.svg","6d928f9974578ee2baa83bc1c3aed4c7"],["/developer-coding-evaluation/static/media/icon-twitter.b569a364.svg","b569a364dbc774cf9ad257cf705e6b95"],["/developer-coding-evaluation/static/media/logo-rackroom.89508752.png","89508752f428f78ad6b1d6e8a9e281c9"],["/developer-coding-evaluation/static/media/pic-chhn-bg.0e44251b.png","0e44251be6b9c2f3119a239989b81365"],["/developer-coding-evaluation/static/media/pic-chhn.b9d5b086.png","b9d5b0869d61d75d09c9b877b362407a"],["/developer-coding-evaluation/static/media/pic-fifththird-bg.8e7a6811.png","8e7a68118c1e7b93e564a6463d776c80"],["/developer-coding-evaluation/static/media/pic-fifththird.dc7b7f5a.png","dc7b7f5af26f5df3d4b01c7e85272687"],["/developer-coding-evaluation/static/media/pic-gojo-bg.ae46dc03.png","ae46dc03ad6c3a54900d0473bc4edc56"],["/developer-coding-evaluation/static/media/pic-gojo.38d43eed.png","38d43eed47cabc23f439c2dbeb7e87f5"],["/developer-coding-evaluation/static/media/pic-hero.4dd9465e.png","4dd9465e9971aa8d17ef8d726f0f73b5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),i=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var i="/developer-coding-evaluation/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});