(this["webpackJsonpfe_maibornwolff.github.io"]=this["webpackJsonpfe_maibornwolff.github.io"]||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){},28:function(e){e.exports=JSON.parse('{"header":{},"body":{"jumbo-overlay":"Open Source Projekte bei MaibornWolff","info-box-lead-1":"Wir lieben Open Source und wollen etwas zur\xfcckgeben, mit Projekten wie ","info-box-lead-2":"und","projects-headline":"Open Source Projekte"},"footer":{"top":"zur\xfcck zum Anfang"}}')},29:function(e){e.exports=JSON.parse('{"header":{},"body":{"jumbo-overlay":"Open Source at MaibornWolff GmbH","info-box-lead-1":"We love Open Source and want to give back with projects like","info-box-lead-2":"and","projects-headline":"Open Source Projects"},"footer":{"top":"Back to top"}}')},32:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);n(32),n(11);var a=n(3),c=(n(18),n(1)),o=n.n(c),r=n(20),s=n.n(r),i=n(6),l=Object(i.b)({initialState:{isInLightMode:!0},name:"darkModeState",reducers:{setIsInLightMode:function(e,t){e.isInLightMode=t.payload}}}),d=l.actions.setIsInLightMode,u=function(e){return e.darkModeState.isInLightMode},j=l.reducer,b=n(2),g=n(0),h=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(b.b)();return Object(g.jsx)("div",{className:"nav-item darkmode-flex",children:Object(g.jsx)(s.a,{onChange:function(){r(d(n)),document.body.classList.add(n?"light-mode":"dark-mode"),document.body.classList.remove(n?"dark-mode":"light-mode"),o(!n)},checked:n,size:50,className:"nav-link dark-toggle"})})},f=(n(51),Object(i.b)({initialState:{isRendered:!1,data:[],dataSafe:[],currentLanguage:"en"},name:"openSourceProjectState",reducers:{setIsRendered:function(e){e.isRendered=!0},setData:function(e,t){e.data=t.payload},setDataSafe:function(e,t){e.dataSafe=t.payload},setLanguage:function(e,t){e.currentLanguage=t.payload}}})),m=f.actions,O=m.setIsRendered,p=m.setData,x=m.setDataSafe,v=m.setLanguage,A=function(e){return e.openSourceProjectState.dataSafe},w=function(e){return e.openSourceProjectState.currentLanguage},k=f.reducer,N=(n(52),function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(b.b)();return Object(g.jsxs)("div",{className:"languages",children:["en",Object(g.jsxs)("div",{className:"wrg-toggle ".concat(n?"wrg-toggle--checked":""),onClick:function(){o(!n),r(v(n?"en":"de"))},children:[Object(g.jsxs)("div",{className:"wrg-toggle-container",children:[Object(g.jsx)("div",{className:"wrg-toggle-check"}),Object(g.jsx)("div",{className:"wrg-toggle-uncheck"})]}),Object(g.jsx)("div",{className:"wrg-toggle-circle"}),Object(g.jsx)("input",{className:"wrg-toggle-input",type:"checkbox","aria-label":"Toggle Button"})]}),"de"]})}),y=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(b.c)(u);return Object(g.jsxs)("div",{className:"dd-container",children:[Object(g.jsx)("div",{className:"block",children:Object(g.jsx)("button",{className:"navbar-toggler ".concat(r?"light-mode":"dark-mode"),type:"button","data-toggle":"collapse","data-target":"#navbar-maibornwolff-opensource","aria-controls":"navbar-maibornwolff-opensource","aria-label":"Toggle navigation",onClick:function(){o(!n)},children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(g.jsx)("div",{className:"".concat(r?"light-mode":"dark-mode"," ").concat(n?"list-show":"list-hide"),children:Object(g.jsxs)("div",{className:"dropdown-items",children:[Object(g.jsx)("a",{className:"nav-link ".concat(r?"light-mode":"dark-mode"),href:"https://www.maibornwolff.de",children:"Homepage"}),Object(g.jsxs)("div",{className:"nav-bar-toggles",children:[Object(g.jsx)(N,{}),Object(g.jsx)(h,{})," "]})]})})]})},I=function(){var e=Object(b.c)(u);return Object(g.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link ".concat(e?"light-mode":"dark-mode"),href:"https://www.maibornwolff.de",children:"Homepage"})}),Object(g.jsx)("li",{className:"nav-item"})]})},L=(n(53),function(e){var t="https://http.cat/"+e.errCode.toString();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{className:"cat-error-img",src:t,alt:"Error: "+e.errCode.toString()})})}),C=(n(54),function(e){return Object(g.jsx)("div",{className:"card border-primary mb-3",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h5",{className:"card-title",children:e.repo.name}),Object(g.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.repo.language}),Object(g.jsx)("p",{className:"card-text",children:e.repo.description}),Object(g.jsx)("a",{target:"_blank",href:e.repo.html_url,className:"card-link light-mode",rel:"noopener noreferrer",children:"Repository"})]})})});var B=function(e){var t=Object(b.b)(),n=Object(b.c)(A),o=Object(c.useState)(!1),r=Object(a.a)(o,2),s=r[0],i=r[1],l=Object(c.useState)(404),d=Object(a.a)(l,2),u=d[0],j=d[1];Object(c.useEffect)((function(){new Promise((function(e,t){var n=new XMLHttpRequest;n.open("GET","https://api.github.com/orgs/MaibornWolff/repos?per_page=100",!0),n.responseType="json",n.onload=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status?e(n.response):t(n.status)},n.onerror=function(){t(n.status)},n.send(null),n.onerror=function(){t(n.status)}})).then((function(e){var n=e.filter((function(e){return!e.archived}));t(x(n))})).catch((function(e){i(!0),j(e)})),t(O()),document.getElementById("progress-bar").classList.add("invisible")}),[t]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{id:"headline-opensource-projects",children:e.headline}),Object(g.jsx)("div",{id:"maibornwolff-opensource-projects",className:"card-columns",children:s?Object(g.jsx)(L,{errCode:u}):"undefined"!==typeof n&&n.map((function(e){return Object(g.jsx)(C,{repo:e},e.id)}))})," "]})},P=n(23),G=function(e){return Object(g.jsx)("div",{className:"parallax-container",children:Object(g.jsx)(P.Parallax,{bgImage:e.backGroundImage,contentClassName:"bgimage",strength:400,bgImageStyle:{top:"-60%"},children:Object(g.jsx)("section",{className:"jumbotron text-center",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("h2",{className:"jumbotron-heading",children:e.overlayText})})})})})},V=n(30),X=function(e){var t=Object(b.c)(u);return Object(g.jsxs)("p",{className:"lead",children:[Object(g.jsx)(g.Fragment,{children:e.text1})," ",Object(g.jsx)("a",{className:t?"light-mode":"dark-mode",target:"_blank",href:"https://github.com/MaibornWolff/clean-air",rel:"noopener noreferrer",children:"CleanAir"})," ",Object(g.jsx)(g.Fragment,{children:e.text2})," ",Object(g.jsx)("a",{className:t?"light-mode":"dark-mode",target:"_blank",href:"https://github.com/MaibornWolff/codecharta",rel:"noopener noreferrer",children:"CodeCharta"}),"."]})},T=(n(55),function(){var e=Math.ceil(21);return Object(g.jsx)("svg",{version:"1.1",x:"0px",y:"0px",width:e,height:e,viewBox:"0 0 635 635",style:{fill:"#727272"},children:Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905\r c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891\r c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702\r C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092\r c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"})})})}),q=function(){var e=Object(b.c)(A),t=Object(b.b)(),n=Object(b.c)(u),o=Object(c.useState)(),r=Object(a.a)(o,2),s=r[0],i=r[1],l=function(n){for(var a,c=new RegExp(n,"i"),o=[],r=0;r<e.length;r++)(c.test(e[r].description)||c.test(e[r].name)||c.test(e[r].language))&&o.push(e[r]);t(p(o)),null===(a=document.getElementById("open-source-projects"))||void 0===a||a.scrollIntoView({block:"end",behavior:"smooth"})};return Object(g.jsxs)("div",{className:"search-bar",children:[Object(g.jsx)("input",{className:"search-field ".concat(n?"light-mode":"dark-mode"),type:"text",placeholder:"Search...",onKeyPress:function(e){if(13===e.which||13===e.keyCode)return l(s)},onChange:function(e){i(e.target.value)}}),Object(g.jsx)("button",{type:"button",className:"search-button ".concat(n?"light-mode":"dark-mode"),onClick:function(){l(s)},children:Object(g.jsx)(T,{})})]})};var E=function(e){var t=Object(c.useState)(),n=Object(a.a)(t,2),o=n[0],r=n[1];return Object(c.useEffect)((function(){var t;(t=e.url,new Promise((function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="text",n.onload=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&e(n.responseText)},n.send(null)}))).then((function(e){r(e)}))})),Object(g.jsx)("p",{className:e.className,children:o})},S=n.p+"static/media/window-cats.9dfd9a93.jpg",U=n(62);var F=function(){var e=Object(U.a)(),t=e.t,n=e.i18n,o=Object(b.c)(u),r=Object(c.useState)(),s=Object(a.a)(r,2),i=s[0],l=s[1],d=Object(b.c)(w);return d!==i&&(n.changeLanguage(d),l(d)),Object(c.useEffect)((function(){var e;null===(e=document.querySelector(".loader"))||void 0===e||e.classList.add("loader--hide")})),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("header",{children:[Object(g.jsx)("div",{id:"top-of-page",children:Object(g.jsx)(V.a,{id:"progress-bar",animated:!0,now:100})})," ",Object(g.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:Object(g.jsxs)("div",{className:"navbar container",children:[Object(g.jsxs)("a",{className:"navbar-brand",href:"https://www.maibornwolff.de",children:[Object(g.jsx)("img",{src:"data:image/png;base64,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",className:"mwlogo",alt:"maibornwolffs logo"})," "]}),Object(g.jsxs)("div",{className:"navbar-right-content",children:[Object(g.jsxs)("div",{className:"nav-item dropdown-flex",children:[Object(g.jsx)(y,{})," "]}),Object(g.jsxs)("div",{className:"collapse navbar-collapse remove",id:"navbar-maibornwolff-opensource",children:[Object(g.jsx)(I,{})," "]}),Object(g.jsx)("div",{className:"nav-item searchfield-flex",children:Object(g.jsx)(q,{})}),Object(g.jsxs)("div",{className:"nav-bar-toggles remove",children:[Object(g.jsx)(N,{}),Object(g.jsx)(h,{})," "]})]})]})})]}),Object(g.jsxs)("main",{role:"main",children:[" ",Object(g.jsx)(G,{backGroundImage:S,overlayText:t("body.jumbo-overlay")}),Object(g.jsx)("section",{className:"grey-info-box ".concat(o?"light-mode":"dark-mode"),children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(X,{text1:t("body.info-box-lead-1"),text2:t("body.info-box-lead-2")}),Object(g.jsx)(E,{url:"https://api.github.com/zen",className:"lead"})," "]})}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",id:"open-source-projects",children:[Object(g.jsx)(B,{headline:t("body.projects-headline")})," "]})})]}),Object(g.jsx)("footer",{className:"text-muted",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("p",{className:"float-right",children:[Object(g.jsx)("a",{className:o?"light-mode":"dark-mode",href:"#top-of-page",children:t("footer.top")})," "]}),Object(g.jsx)("p",{children:"\xa9 2019-2020 MaibornWolff GmbH"})]})})]})})},H=n(9),K=n.n(H),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},D=Object(i.a)({reducer:{openSourceProjectState:k,darkModeState:j}}),R=n(4),Z=n(17),z=n(8),Q=n(28),Y=n(29);Z.a.use(z.e).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},resources:{de:{translation:Object(R.a)({},Q)},en:{translation:Object(R.a)({},Y)}}});Z.a;var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all "),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(){return Object(g.jsx)("div",{children:"loading..."})};K.a.render(Object(g.jsx)(b.a,{store:D,children:Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(c.Suspense,{fallback:Object(g.jsx)(_,{}),children:Object(g.jsx)(F,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service ")}))):J(t,e)}))}}(),M()}},[[61,1,2]]]);
//# sourceMappingURL=main.409d6e4f.chunk.js.map