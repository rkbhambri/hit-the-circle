(this["webpackJsonphit-the-circle"]=this["webpackJsonphit-the-circle"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(9),n(10),function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("p",null,"leadsquared"))}),l=function(e){return o.a.createElement("div",{className:"layout"},o.a.createElement(i,null),e.children)},u=n(1),s=function(e){return Math.floor(Math.random()*e)+1},d=function(e,t){return"number"===typeof e&&"number"===typeof t?e===t:"string"===typeof e&&"string"===typeof t?e.toLowerCase()===t.toLowerCase():void 0},m=function(e){return o.a.createElement("h2",{className:"heading"},e.heading)},f=(n(11),function(e){return o.a.createElement("input",{maxLength:e.maxLength,type:e.type,placeholder:e.placeholder,id:e.id,value:e.value,onChange:function(t){return e.inputChangeHandler(t)},disabled:e.disabled})}),h=function(e){return o.a.createElement("div",{style:{textAlign:"right"}},o.a.createElement("label",null,"Score "),o.a.createElement(f,{type:"number",placeholder:"Score",value:e.score,disabled:!0}))},p=function(e){var t=Object(a.useState)(function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t}(36)),n=Object(u.a)(t,1)[0];return console.log("==selectedPosition====",e.autoSelectedPosition),o.a.createElement("div",{className:"circle-wrapper"},n.map((function(t){return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement("div",{className:"circle",onClick:function(){return d(e.autoSelectedPosition,0)?"":(n=t,void(d(e.autoSelectedPosition,n)?(e.incrementScore(),e.changeAutoSelectedPosition()):e.decrementScore()));var n}}),t%6===0&&o.a.createElement("br",null))})))},g=(n(12),function(e){return o.a.createElement("button",{disabled:e.disabled,onClick:function(){return e.buttonClickHandler()}},e.name)}),v=function(e){return o.a.createElement("div",{className:"controls"},o.a.createElement(g,{name:e.autoSelectedPosition?"Playing":"Play",buttonClickHandler:e.startGame}),o.a.createElement(g,{name:"Stop",buttonClickHandler:e.stopGame,disabled:!e.autoSelectedPosition}))},E=(n(13),function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(0),l=Object(u.a)(i,2),d=l[0],f=l[1];return o.a.createElement("div",{className:"content"},o.a.createElement(m,{heading:"Hit the circle"}),o.a.createElement("p",null,"Testing your skill how many circles you can hit ?"),o.a.createElement("p",null,"Click on Play button to start the game"),o.a.createElement(h,{score:r}),o.a.createElement("hr",null),o.a.createElement(p,{autoSelectedPosition:d,incrementScore:function(){return c((function(e){return e+1}))},decrementScore:function(){return c((function(e){return e-1}))},changeAutoSelectedPosition:function(){return f(s(36))}}),o.a.createElement("hr",null),o.a.createElement(v,{autoSelectedPosition:d,startGame:function(){f(s(36))},stopGame:function(){alert("Your final score is "+r),c(0),f(0)}}))}),b=function(e){return o.a.createElement("div",{className:"app"},o.a.createElement(l,null,o.a.createElement(E,null)))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hit-the-circle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hit-the-circle","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.83168a1d.chunk.js.map