(this["webpackJsonphit-the-circle"]=this["webpackJsonphit-the-circle"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(9),n(10),function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"leadsquared"))}),i=function(e){return r.a.createElement("div",{className:"layout"},r.a.createElement(o,null),e.children)},u=n(1),s=function(e){return Math.floor(Math.random()*e)+1},m=function(e,t){return"number"===typeof e&&"number"===typeof t?e===t:"string"===typeof e&&"string"===typeof t?e.toLowerCase()===t.toLowerCase():void 0},d=function(e){return r.a.createElement("h2",{className:"heading"},e.heading)},f=(n(11),function(e){return r.a.createElement("input",{maxLength:e.maxLength,type:e.type,placeholder:e.placeholder,id:e.id,value:e.value,onChange:function(t){return e.inputChangeHandler(t)},disabled:e.disabled})}),h=function(e){return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement("label",null,"Score "),r.a.createElement(f,{type:"number",placeholder:"Score",value:e.score,disabled:!0}))},E=function(e){var t=Object(a.useState)(function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t}(36)),n=Object(u.a)(t,1)[0];return console.log("==selectedPosition====",e.autoSelectedPosition),r.a.createElement("div",{className:"circle-wrapper"},n.map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("div",{className:"circle",onClick:function(){return m(e.autoSelectedPosition,0)?"":(n=t,void(m(e.autoSelectedPosition,n)?(e.incrementScore(),e.changeAutoSelectedPosition()):e.decrementScore()));var n}}),t%6===0&&r.a.createElement("br",null))})))},p=(n(12),function(e){return r.a.createElement("button",{disabled:e.disabled,onClick:function(){return e.buttonClickHandler()}},e.name)}),b=function(e){return r.a.createElement("div",{className:"controls"},r.a.createElement(p,{name:e.autoSelectedPosition?"Playing":"Play",buttonClickHandler:e.startGame}),r.a.createElement(p,{name:"Stop",buttonClickHandler:e.stopGame,disabled:!e.autoSelectedPosition}))},S=(n(13),function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(0),i=Object(u.a)(o,2),m=i[0],f=i[1];return r.a.createElement("div",{className:"content"},r.a.createElement(d,{heading:"Hit the circle"}),r.a.createElement("p",null,"Testing your skill how many circles you can hit ?"),r.a.createElement("p",null,"Click on Play button to start the game"),r.a.createElement(h,{score:c}),r.a.createElement("hr",null),r.a.createElement(E,{autoSelectedPosition:m,incrementScore:function(){return l((function(e){return e+1}))},decrementScore:function(){return l((function(e){return e-1}))},changeAutoSelectedPosition:function(){return f(s(36))}}),r.a.createElement("hr",null),r.a.createElement(b,{autoSelectedPosition:m,startGame:function(){f(s(36))},stopGame:function(){alert("Your final score is "+c),l(0),f(0)}}))}),g=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(i,null,r.a.createElement(S,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.76773fe0.chunk.js.map