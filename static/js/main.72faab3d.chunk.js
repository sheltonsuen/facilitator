(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{154:function(e,n,t){"use strict";t.r(n);var o=t(44),r=t.n(o),a=(t(83),t(2)),c=t.n(a),i=t(35),s=t(19),l=t(273),u=t(274),d=t(42),E=t.n(d),g=t(45),T=t(46),f=t(49),h=t(47),p=t(48),O=t(67),v=t.n(O),b=t(72),w=function(e){function n(){return Object(g.a)(this,n),Object(f.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(T.a)(n,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:e.root},c.a.createElement(v.a,{className:e.spinner}))}}]),n}(a.Component),_=Object(b.withStyles)({root:{display:"flex",justifyContent:"center",width:"100%"},spinner:{padding:"2rem"}})(w),L=E()({loader:function(){return Promise.all([t.e(0),t.e(5),t.e(2)]).then(t.bind(null,275))},loading:_}),m=E()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,276))},loading:_}),C=c.a.createElement(l.a,null,c.a.createElement(u.a,{exact:!0,path:"/",component:L}),c.a.createElement(u.a,{path:"/election",component:L}),c.a.createElement(u.a,{path:"/settings",component:m})),S=t(5),G=t(68),j=t(69),N=t.n(j),I=Object(S.c)({landingPage:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"LANDING_FETCH_LANDING_PAGE":default:return{counter:3,brand:"https://up.enterdesk.com/edpic/76/54/b2/7654b28b1df8bed811dba6e29f3b2840.jpg"}}},firstLandingPage:N.a}),y=t(27),k=y.a.ELECTION_FETCH_ELECTORS,R=Object(S.c)({response:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return n.response;default:return e}}}),A=y.a.ELECTION_START_ELECT,P={},F=Object(S.c)({result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A:return n.result;default:return e}}}),H=Object(S.c)({homePage:R,resultPage:F}),D=t(41),W=D.a.SETTINGS_TOGGLE_TOGGLES,x=D.a.SETTINGS_FETCH_TOGGLES,U={landingAnimation:!1},B=Object(S.c)({toggles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:case W:return n.toggles;default:return e}}}),J=Object(S.c)({togglesPage:B}),M=Object(S.c)({landing:I,election:H,settings:J}),Q=Object(S.c)({app:M}),$=t(10),q=Object($.a)(),z=S.d,K=Object(S.e)(Object(s.connectRouter)(q)(Q),z(Object(S.a)(Object(s.routerMiddleware)(q),G.a))),V=c.a.createElement(i.Provider,{store:K},c.a.createElement(s.ConnectedRouter,{history:q},C)),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(V,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");X?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Y(n,e)})}}()},27:function(e,n,t){"use strict";n.a={ELECTION_START_ELECT:"ELECTION_START_ELECT",ELECTION_ADD_ELECTOR:"ELECTION_ADD_ELECTOR",ELECTION_FETCH_ELECTORS:"ELECTION_FETCH_ELECTORS"}},41:function(e,n,t){"use strict";n.a={SETTINGS_TOGGLE_TOGGLES:"SETTINGS_TOGGLE_TOGGLES",SETTINGS_FETCH_TOGGLES:"SETTINGS_FETCH_TOGGLES"}},69:function(e,n){},78:function(e,n,t){e.exports=t(154)},83:function(e,n,t){}},[[78,6,4]]]);
//# sourceMappingURL=main.72faab3d.chunk.js.map