(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(t,e,n){"use strict";var a=n(2),r=n.n(a),o=n(39),i=n(19);e.a=function(t){return Object(o.connect)(function(){return{}},{push:i.push,replace:i.replace,go:i.go,goBack:i.goBack,goForward:i.goForward})(function(e){return r.a.createElement(t,e)})}},182:function(t,e,n){"use strict";n.d(e,"b",function(){return p}),n.d(e,"a",function(){return g});var a=n(174),r=n(45),o=n(180),i=n.n(o),c=n(74),u=n.n(c),s=r.a.SETTINGS_TOGGLE_TOGGLES,l=r.a.SETTINGS_FETCH_TOGGLES,p=function(t){return function(e,n){var r=u.a.get(n(),"app.settings.togglesPage.toggles"),o=Object(a.a)({},r);u.a.forEach(t,function(t){return t&&(o[t]=!o[t])}),i.a.setItem("toggles",o).then(function(t){return e({type:s,toggles:t})})}},g=function(){return function(t){return i.a.getItem("toggles").then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t({type:l,toggles:e}),e})}}},286:function(t,e,n){"use strict";n.r(e);var a=n(47),r=n(48),o=n(51),i=n(49),c=n(50),u=n(2),s=n.n(u),l=n(282),p=n(284),g=n(39),h=n(74),f=n.n(h),d=n(76),b=n(273),m=n.n(b),v=n(173),O=n.n(v),j=n(272),y=n.n(j),E=function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c))))._renderNextButton=function(){var t=n.props,e=t.handleNext,a=t.activeStep,r=t.steps;return s.a.createElement(O.a,{size:"small",onClick:e,disabled:a===r-1},s.a.createElement(y.a,null))},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props,e=t.classes,n=t.activeStep,a=t.steps;return s.a.createElement(m.a,{variant:"dots",steps:a,position:"bottom",activeStep:n,className:e.root,nextButton:this._renderNextButton()})}}]),e}(u.Component),w=f.a.flowRight(Object(d.withStyles)({root:{maxWidth:400,flexGrow:1,justifyContent:"center",background:"rgba(0, 0, 0, 0)"}}))(E),S=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w,null))}}]),e}(u.Component),N=n(66),L=N.a.LANDING_FETCH_LANDING_STATUS,_=N.a.LANDING_FETCH_LANDING_PAGE,k=n(162),x=function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).state={count:n.props.counter},n._hanleCount=function(){var t=n.state.count,e=n.props.handleDone,a=t-1;n.setState({count:a}),0===a&&(e&&e(),clearInterval(n.interval))},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.interval=setInterval(this._hanleCount,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.props.classes,e=this.state.count;return s.a.createElement("div",{className:t.count},e)}}]),e}(u.Component),G=f.a.flowRight(Object(d.withStyles)(function(t){return{count:{border:"dashed white",position:"fixed",textAlign:"right",paddingLeft:"0.5rem",paddingRight:"0.5rem",margin:"1rem",fontSize:"1.5rem",color:t.palette.secondary.light,top:0,right:0,zIndex:1}}}))(x),T=function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c))))._handleNext=function(){n.props.push("/election/home")},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.isFirstLanding,n=t.fetchLandingStatus,a=t.fetchLandingPage,r=t.push;e?r("/first/landing"):n(),a&&a()}},{key:"render",value:function(){var t=this.props,e=(t.brand,t.classes,t.counter);return s.a.createElement("div",null,s.a.createElement(G,{handleDone:this._handleNext,counter:e}))}}]),e}(u.Component),C={fetchLandingStatus:function(){return function(t){new Promise(function(t){return t({})}).then(function(e){t({type:L,value:e})})}},fetchLandingPage:function(){return{type:_}}},I=f.a.flowRight(Object(d.withStyles)({brand:{position:"fixed",top:0,left:0,right:0,bottom:0,maxWidth:"100%",maxHeight:"100%"}}),k.a,Object(g.connect)(function(t){return{isFirstLanding:f.a.get(t,"app.landing.isFirstLanding"),counter:f.a.get(t,"app.landing.landingPage.counter"),brand:f.a.get(t,"app.landing.landingPage.brand")}},C))(T),A=n(182);n.d(e,"Landing",function(){return D});var D=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.fetchToggles,n=t.push;e&&e().then(function(t){!t.landingAnimation&&n("/election/home")})}},{key:"render",value:function(){this.props.toggles;return s.a.createElement(l.a,null,s.a.createElement(p.a,{exact:!0,path:"/",component:I}),s.a.createElement(p.a,{path:"/first/landing",component:S}))}}]),e}(u.Component),F={fetchToggles:A.a},P=f.a.flowRight(k.a,Object(g.connect)(function(t){return{toggles:f.a.get(t,"app.settings.togglesPage.toggles")}},F));e.default=P(D)}}]);
//# sourceMappingURL=4.b7086fdc.chunk.js.map