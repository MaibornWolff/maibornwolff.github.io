(this["webpackJsonpmaibornwolff.github.io"]=this["webpackJsonpmaibornwolff.github.io"]||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){},28:function(e){e.exports=JSON.parse('{"header":{},"body":{"jumbo-overlay":"Open Source Projekte bei MaibornWolff","info-box-lead-1":"Wir lieben Open Source und wollen etwas zur\xfcckgeben, mit Projekten wie ","info-box-lead-2":"und","projects-headline":"Open Source Projekte"},"footer":{"top":"zur\xfcck zum Anfang"}}')},29:function(e){e.exports=JSON.parse('{"header":{},"body":{"jumbo-overlay":"Open Source at MaibornWolff GmbH","info-box-lead-1":"We love Open Source and want to give back something with projects like","info-box-lead-2":"and","projects-headline":"Open Source Projects"},"footer":{"top":"Back to top"}}')},32:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);n(32),n(11);var a=n(3),c=(n(18),n(1)),s=n.n(c),r=n(20),o=n.n(r),A=n(6),i=Object(A.b)({initialState:{isInLightMode:!0},name:"darkModeState",reducers:{setIsInLightMode:function(e,t){e.isInLightMode=t.payload}}}),l=i.actions.setIsInLightMode,d=function(e){return e.darkModeState.isInLightMode},j=i.reducer,g=n(2),b=n(0),u=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(g.b)();return Object(b.jsx)("div",{className:"nav-item darkmode-flex",children:Object(b.jsx)(o.a,{onChange:function(){r(l(n)),document.body.classList.add(n?"light-mode":"dark-mode"),document.body.classList.remove(n?"dark-mode":"light-mode"),s(!n)},checked:n,size:50,className:"nav-link dark-toggle"})})},w=(n(51),Object(A.b)({initialState:{isRendered:!1,data:[],dataSafe:[],currentLanguage:"en"},name:"openSourceProjectState",reducers:{setIsRendered:function(e){e.isRendered=!0},setData:function(e,t){e.data=t.payload},setDataSafe:function(e,t){e.dataSafe=t.payload},setLanguage:function(e,t){e.currentLanguage=t.payload}}})),O=w.actions,f=O.setIsRendered,m=O.setData,h=O.setDataSafe,v=O.setLanguage,p=function(e){return e.openSourceProjectState.dataSafe},x=function(e){return e.openSourceProjectState.currentLanguage},B=w.reducer,M=(n(52),function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(g.b)();return Object(b.jsxs)("div",{className:"languages",children:["en",Object(b.jsxs)("div",{className:"wrg-toggle ".concat(n?"wrg-toggle--checked":""),onClick:function(){s(!n),r(v(n?"en":"de"))},children:[Object(b.jsxs)("div",{className:"wrg-toggle-container",children:[Object(b.jsx)("div",{className:"wrg-toggle-check"}),Object(b.jsx)("div",{className:"wrg-toggle-uncheck"})]}),Object(b.jsx)("div",{className:"wrg-toggle-circle"}),Object(b.jsx)("input",{className:"wrg-toggle-input",type:"checkbox","aria-label":"Toggle Button"})]}),"de"]})}),y=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(g.c)(d);return Object(b.jsxs)("div",{className:"dd-container",children:[Object(b.jsx)("div",{className:"block",children:Object(b.jsx)("button",{className:"navbar-toggler ".concat(r?"light-mode":"dark-mode"),type:"button","data-toggle":"collapse","data-target":"#navbar-maibornwolff-opensource","aria-controls":"navbar-maibornwolff-opensource","aria-label":"Toggle navigation",onClick:function(){s(!n)},children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(b.jsx)("div",{className:"".concat(r?"light-mode":"dark-mode"," ").concat(n?"list-show":"list-hide"),children:Object(b.jsxs)("div",{className:"dropdown-items",children:[Object(b.jsx)("a",{className:"nav-link ".concat(r?"light-mode":"dark-mode"),href:"https://www.maibornwolff.de",children:"Homepage"}),Object(b.jsxs)("div",{className:"nav-bar-toggles",children:[Object(b.jsx)(M,{}),Object(b.jsx)(u,{})," "]})]})})]})},N=function(){var e=Object(g.c)(d);return Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link ".concat(e?"light-mode":"dark-mode"),href:"https://www.maibornwolff.de",children:"Homepage"})}),Object(b.jsx)("li",{className:"nav-item"})]})},W=(n(53),function(e){var t="https://http.cat/"+e.errCode.toString();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{className:"cat-error-img",src:t,alt:"Error: "+e.errCode.toString()})})}),D=(n(54),function(e){return Object(g.c)(d)?Object(b.jsx)("div",{className:"card border-primary mb-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.repo.name}),Object(b.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.repo.language}),Object(b.jsx)("p",{className:"card-text",children:e.repo.description}),Object(b.jsx)("a",{target:"_blank",href:e.repo.html_url,className:"card-link light-mode",rel:"noopener noreferrer",children:"Repository"})]})}):Object(b.jsx)("div",{className:"card-dark border-primary mb-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title-dark",children:e.repo.name}),Object(b.jsx)("h6",{className:"card-subtitle mb-2 text-muted-dark",children:e.repo.language}),Object(b.jsx)("p",{className:"card-text-dark",children:e.repo.description}),Object(b.jsx)("a",{target:"_blank",href:e.repo.html_url,className:"card-link link-dark",rel:"noopener noreferrer",children:"Repository"})]})})});var L=function(e){var t=Object(g.b)(),n=Object(g.c)(p),s=Object(c.useState)(!1),r=Object(a.a)(s,2),o=r[0],A=r[1],i=Object(c.useState)(404),l=Object(a.a)(i,2),j=l[0],u=l[1],w=Object(g.c)(d);Object(c.useEffect)((function(){new Promise((function(e,t){var n=new XMLHttpRequest;n.open("GET","https://api.github.com/orgs/MaibornWolff/repos?per_page=100",!0),n.responseType="json",n.onload=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status?e(n.response):t(n.status)},n.onerror=function(){t(n.status)},n.send(null),n.onerror=function(){t(n.status)}})).then((function(e){var n=e.filter((function(e){return!e.archived}));t(h(n))})).catch((function(e){A(!0),u(e)})),t(f()),document.getElementById("progress-bar").classList.add("invisible")}),[t]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"headline ".concat(w?"headline":"headline-dark"),id:"headline-opensource-projects",children:e.headline}),Object(b.jsx)("div",{id:"maibornwolff-opensource-projects",className:"card-columns",children:o?Object(b.jsx)(W,{errCode:j}):"undefined"!==typeof n&&n.map((function(e){return Object(b.jsx)(D,{repo:e},e.id)}))})," "]})},V=n(23),Y=function(e){return Object(b.jsx)("div",{className:"parallax-container",children:Object(b.jsx)(V.Parallax,{bgImage:e.backGroundImage,contentClassName:"bgimage",strength:400,bgImageStyle:{top:"-60%"}})})},G=n(30),C=function(e){var t=Object(g.c)(d);return Object(b.jsxs)("p",{className:"lead",children:[Object(b.jsx)("h3",{className:t?"headline":"headline-dark",children:e.headline})," ",Object(b.jsx)(b.Fragment,{children:e.text1})," ",Object(b.jsx)("a",{className:t?"light-mode":"dark-mode",target:"_blank",href:"https://github.com/MaibornWolff/clean-air",rel:"noopener noreferrer",children:"CleanAir"})," ",Object(b.jsx)(b.Fragment,{children:e.text2})," ",Object(b.jsx)("a",{className:t?"light-mode":"dark-mode",target:"_blank",href:"https://github.com/MaibornWolff/codecharta",rel:"noopener noreferrer",children:"CodeCharta"}),"."]})},k=(n(55),function(){var e=Math.ceil(21);return Object(b.jsx)("svg",{version:"1.1",x:"0px",y:"0px",width:e,height:e,viewBox:"0 0 635 635",style:{fill:"#727272"},children:Object(b.jsx)("g",{children:Object(b.jsx)("path",{d:"M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905 c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891 c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702 C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092 c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"})})})}),S=function(){var e=Object(g.c)(p),t=Object(g.b)(),n=Object(g.c)(d),s=Object(c.useState)(),r=Object(a.a)(s,2),o=r[0],A=r[1],i=function(n){for(var a,c=new RegExp(n,"i"),s=[],r=0;r<e.length;r++)(c.test(e[r].description)||c.test(e[r].name)||c.test(e[r].language))&&s.push(e[r]);t(m(s)),null===(a=document.getElementById("open-source-projects"))||void 0===a||a.scrollIntoView({block:"end",behavior:"smooth"})};return Object(b.jsxs)("div",{className:"search-bar",children:[Object(b.jsx)("input",{className:"search-field ".concat(n?"light-mode":"dark-mode"),type:"text",placeholder:"Search...",onKeyPress:function(e){if(13===e.which||13===e.keyCode)return i(o)},onChange:function(e){A(e.target.value)}}),Object(b.jsx)("button",{type:"button",className:"search-button ".concat(n?"light-mode":"dark-mode"),onClick:function(){i(o)},children:Object(b.jsx)(k,{})})]})};var Z=function(e){var t=Object(c.useState)(),n=Object(a.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var t;(t=e.url,new Promise((function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="text",n.onload=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&e(n.responseText)},n.send(null)}))).then((function(e){r(e)}))})),Object(b.jsx)("p",{className:e.className,children:s})},I=n.p+"static/media/farbexplosion.26b81ece.jpg",z=n(62);var X=function(){var e=Object(z.a)(),t=e.t,n=e.i18n,s=Object(g.c)(d),r=Object(c.useState)(),o=Object(a.a)(r,2),A=o[0],i=o[1],l=Object(g.c)(x),j=(new Date).getFullYear();return l!==A&&(n.changeLanguage(l),i(l)),Object(c.useEffect)((function(){var e;null===(e=document.querySelector(".loader"))||void 0===e||e.classList.add("loader--hide")})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{id:"top-of-page",children:Object(b.jsx)(G.a,{id:"progress-bar",animated:!0,now:100})})," ",Object(b.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:Object(b.jsxs)("div",{className:"navbar container",children:[Object(b.jsxs)("a",{className:"navbar-brand",href:"https://www.maibornwolff.de",children:[Object(b.jsx)("img",{src:s?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAC0CAMAAAAAT1hSAAAATlBMVEVMaXEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAynAi6jAAAAGXRSTlMA8NDggCAQwECgkDBgULBw++S49Mx+9vd5TlnKpgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAABFRJREFUeJztnOlyozAQhI3QxWWy9/L+L7rFZXMILI0GiLPdv1JxUM2nGbUOFN+ipOwgHdfOtdJW5kY0Mxkja0uIypYyN8YMTRljcllR2qFJ1VnabEpkpfIHkfetptK7PB6pmpIYk8lRxjw/EHnxuqWiNm6OiUzt3zPBslnyiLd2DBX17Ot0H6jId9I7z1F+CJCWQwBivwR0NUSa1hvWoEuxT7CQKLk9RmVDcXmNClX38WaOP1aPBPsrYU3QwJJK/0ZVn0qzyGORBaM0mx0Tw2KqwOfsvXtsEoaisrDxaNm35WFTK/XRZ0PZ6xiWVnn0+KnSZQeH8yRl+2MdPl6W6hsiS3fFImLmsY7HKPV6dvERuVvbxLTdmdRRHXK7WdM0f36zwERE09d5TG+M+vvBxNLqTho9heBITCsbP2KmSgmG1FWZoDjZUiUrS6tgM+hCyDiWFLG+7FJOCIGjynpXZFcWCpOEzv1OmLAFpr+Ef9l0MBxD5jCYAJx3gPHGaWEEyxLvSBhPnC4zLOvvY2G8rKDkKrNDrDkQp2KDkYfDvJxGi3YFwGHNXbccr/0jCsE0ad4U79psS8meE7SlfueAOdwBRpntENrqSFmOe/KTYJpGboXQVQeLA9jTYLYDNnuoIdK+J5kcEu7Aqu2PAnWGOT/lTIBmqzN1Kox74ZKH74I2xHM84y+HC6tX7u2tMy2g13oOzbgs4HamBfRaTTpth6YsMPyHGq+1TI6hHIU4dX5qVslRb52aZXIyttScbWi9ZsnRbIZWXALTNNM5R7LNNcdvON2abkPTBR1Z+iKYJnlGbPc3CgG6xgOa2ah/dw9oZsubdr3J4gEnrzdnGgEqtv3zdYX2LK6crdCOeSHgp9HV2BztdiHM6GqKbc95/l5gqn6nWbJNnefuoJfqzwEzruPNC/25eRiZ4PLnS4fNOHDYNgNXrThHqWHokmcbbWv5uJx6zkH6tuxgAsQDATvOL0l33epaE+gpJNUE5i/P82vnzmaYP+/EQ8HuVU8jcjlcTRU6ytLupbXW4x7ujsxgq5TMJJOLjlXriybilc3jblIR8apEDOsaAs3iCD5uzzndOUa01Bs0YadmlwuIGJy5pdKrjUxjVms7eokszlc0uWIVkUavjZA+2yznB/KLOdvFFXSjaAw9Wf7uBzWI5W6EvKaw3QAInzylI6HUUvtYtX4BzWoTQaX5tmqd6gMRNKuHvhNjWI/as2lyx0NUj76exoAGNKABzaelCT9N+8w04atO0IAGNKABDWhAAxrQgAY0YXJtikADGtCABjSgAQ1oQAMa0IAGNKABDWhAAxrQgAY0oAENaEADGtCABjQX0agvReO8qAsa0IAGNKABzQE0q38SfWua1UOgAc3/RRP8BTCfmib4ux9AAxrQgAY0oAENaEADGtCABjSgAQ1oQAMa0IAGNKABDWhAAxrQfAUaliBA42wINJ04aX79NCStv/s0J7VjTPEPx7bTiD5VbjoAAAAASUVORK5CYII=":"data:image/png;base64,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",className:"mwlogo",alt:"maibornwolffs logo"})," "]}),Object(b.jsxs)("div",{className:"navbar-right-content",children:[Object(b.jsxs)("div",{className:"nav-item dropdown-flex",children:[Object(b.jsx)(y,{})," "]}),Object(b.jsxs)("div",{className:"collapse navbar-collapse remove",id:"navbar-maibornwolff-opensource",children:[Object(b.jsx)(N,{})," "]}),Object(b.jsx)("div",{className:"nav-item searchfield-flex",children:Object(b.jsx)(S,{})}),Object(b.jsxs)("div",{className:"nav-bar-toggles remove",children:[Object(b.jsx)(M,{}),Object(b.jsx)(u,{})," "]})]})]})})]}),Object(b.jsxs)("main",{role:"main",children:[" ",Object(b.jsx)(Y,{backGroundImage:I}),Object(b.jsx)("section",{className:"grey-info-box ".concat(s?"light-mode":"dark-mode"),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(C,{headline:t("body.jumbo-overlay"),text1:t("body.info-box-lead-1"),text2:t("body.info-box-lead-2")}),Object(b.jsx)(Z,{url:"https://api.github.com/zen",className:"lead"})," "]})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",id:"open-source-projects",children:[Object(b.jsx)(L,{headline:t("body.projects-headline")})," "]})})]}),Object(b.jsx)("footer",{className:"text-muted",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("p",{className:"float-right",children:[Object(b.jsx)("a",{className:s?"light-mode":"dark-mode",href:"#top-of-page",children:t("footer.top")})," "]}),Object(b.jsxs)("p",{className:s?"light-mode":"dark-mode",children:["\xa9 2019-",j," MaibornWolff GmbH "]})]})})]})})},P=n(9),R=n.n(P),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},U=Object(A.a)({reducer:{openSourceProjectState:B,darkModeState:j}}),H=n(4),q=n(17),E=n(8),T=n(28),K=n(29);q.a.use(E.e).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},resources:{de:{translation:Object(H.a)({},T)},en:{translation:Object(H.a)({},K)}}});q.a;var Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all "),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(){return Object(b.jsx)("div",{children:"loading..."})};R.a.render(Object(b.jsx)(g.a,{store:U,children:Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(_,{}),children:Object(b.jsx)(X,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service ")}))):J(t,e)}))}}(),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.2b58d210.chunk.js.map