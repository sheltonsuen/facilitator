(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(e,t,n){"use strict";var a=n(197),r=n(47),c=n(48),o=n(51),l=n(49),i=n(50),u=n(2),s=n.n(u),m=n(72),p=n.n(m),h=n(181),f=n.n(h),E=n(182),d=n.n(E),b=n(162),g=n.n(b),v=n(177),O=n.n(v),j=n(8),y=n(163),w=n.n(y),C=n(183),k=n.n(C),_=n(165),S=n.n(_),B=n(191),N=n.n(B),D=n(166),I=n.n(D),T=n(174),x=n.n(T),A=n(167),R=n.n(A),L=n(190),M=n.n(L),F=n(192),P=n.n(F),U=n(180),J=n.n(U),K={root:{display:"flex"},appBar:{},menuButton:{marginLeft:-12,marginRight:20},content:{paddingTop:"4rem",width:"100%"},menuList:{width:"12rem"}},z=n(161),H={shouldShowMenu:!0,title:"Unicorn"};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=e.shouldShowMenu,n=e.title;return function(e){var u=function(u){function m(){var e,t;Object(r.a)(this,m);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(m)).call.apply(e,[this].concat(a)))).state={open:!1},t._toggleDrawer=function(e){return function(){t.setState({open:e})}},t._renderMenuButton=function(){var e=t.props.classes;return s.a.createElement(g.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:t._toggleDrawer(!0)},s.a.createElement(O.a,null))},t._renderBackButton=function(){var e=t.props,n=e.classes,a=e.goBack;return s.a.createElement(g.a,{className:n.menuButton,color:"inherit","aria-label":"Back",onClick:a},s.a.createElement(J.a,null))},t._handleItemClick=function(e){var n=t.props.push;n&&n(e)},t}return Object(i.a)(m,u),Object(c.a)(m,[{key:"render",value:function(){var r=this,c=this.props,o=c.classes,l=Object(a.a)(c,["classes"]),i=this.state.open;return s.a.createElement("div",{className:o.root},s.a.createElement(f.a,{className:o.appBar},s.a.createElement(d.a,null,t?this._renderMenuButton():this._renderBackButton(),s.a.createElement(w.a,{variant:"title",color:"inherit"},n))),s.a.createElement(k.a,{open:i,onClose:this._toggleDrawer(!1),onOpen:this._toggleDrawer(!0)},s.a.createElement("div",{className:o.menuList},s.a.createElement(S.a,null,s.a.createElement(I.a,{onClick:function(){return r._handleItemClick("/election/add/elector")},button:!0},s.a.createElement(x.a,null,s.a.createElement(M.a,null)),s.a.createElement(R.a,{primary:"Add Elector"}))),s.a.createElement(N.a,null),s.a.createElement(S.a,null,s.a.createElement(I.a,{onClick:function(){return r._handleItemClick("/settings/toggles")},button:!0},s.a.createElement(x.a,null,s.a.createElement(P.a,null)),s.a.createElement(R.a,{primary:"Settings"}))))),s.a.createElement("div",{className:o.content},s.a.createElement(e,l)))}}]),m}(s.a.Component);return p.a.flowRight(Object(j.withStyles)(K),z.a)(u)}}},161:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(37),o=n(20);t.a=function(e){return Object(c.connect)(function(){return{}},{push:o.push,replace:o.replace,go:o.go,goBack:o.goBack,goForward:o.goForward})(function(t){return r.a.createElement(e,t)})}},275:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(273),o=n(274),l=n(47),i=n(48),u=n(51),s=n(49),m=n(50),p=n(72),h=n.n(p),f=n(8),E=n(37),d=n(165),b=n.n(d),g=n(166),v=n.n(g),O=n(167),j=n.n(O),y=n(194),w=n.n(y),C=n(196),k=n.n(C),_=n(261),S=n.n(_),B=n(195),N=n.n(B),D=n(162),I=n.n(D),T=n(259),x=n.n(T),A=n(160),R=n(175),L=n(20),M=n(193),F=n.n(M),P=n(29),U=P.a.ELECTION_START_ELECT,J=P.a.ELECTION_ADD_ELECTOR,K=P.a.ELECTION_FETCH_ELECTORS,z=function(){return function(e){F.a.getItem("electors").then(function(t){var n=h.a.chain(t).sort(function(e){return e.name}).toArray().value();e({type:K,response:{electors:n}})}).catch(function(){})}},H=n(161),q=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r))))._handleElect=function(){var e=n.props,t=e.electors,a=e.startElect,r=e.push;a&&a(t),r("/election/result")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.fetchElectors;e&&e()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.electors,a=e.deleteElector;return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,null,h.a.map(n,function(e,t){return r.a.createElement(v.a,{key:t},r.a.createElement(w.a,null,h.a.upperCase(e.name[0])),r.a.createElement(j.a,{primary:e.name}),r.a.createElement(N.a,null,r.a.createElement(I.a,{"aria-label":"Delete",onClick:function(){return a(e)}},r.a.createElement(x.a,null))))})),r.a.createElement("div",{className:t.bottomKit},r.a.createElement(k.a,{variant:"extendedFab",color:"primary",onClick:this._handleElect},r.a.createElement(S.a,null),r.a.createElement("span",null," Start Random "))))}}]),t}(a.Component),G={startElect:function(e){var t=h.a.chain(e).map(function(e){return Object(R.a)({},e,{value:(h.a.random(0,10)+e.weight)%10})}).sortBy(function(e){return e.value}).first().value();return{type:U,result:t}},fetchElectors:z,deleteElector:function(e){return function(t){F.a.getItem("electors").then(function(t){return delete t[h.a.toUpper(e.name)],F.a.setItem("electors",t)}).then(function(){t(z())}).catch(function(){})}}},Q=h.a.flowRight(Object(A.a)(),Object(f.withStyles)({root:{display:"flex",flexDirection:"column",width:"100%"},bottomKit:{display:"flex",justifyContent:"center",width:"100%",position:"fixed",bottom:"0.5rem"}}),H.a,Object(E.connect)(function(e){return{electors:function(e){return h.a.get(e,"app.election.homePage.response.electors")}(e)}},G))(q),V=n(172),W=n.n(V),X=n(163),Y=n.n(X),Z=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.result,n=e.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(w.a,{className:n.resultAvatar},h.a.upperCase(t.name?t.name[0]:":)")),r.a.createElement(W.a,{className:n.resultDescContainer,elevation:5},r.a.createElement(Y.a,{variant:"h5",omponent:"h3"},"The facilitator is ".concat(t.name)),r.a.createElement(Y.a,{component:"p"},"Please remember to take the ownership :)")))}}]),t}(a.Component),$=h.a.flowRight(Object(A.a)({shouldShowMenu:!1,title:"Result"}),Object(f.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},resultAvatar:{margin:"1rem"},resultDescContainer:Object(R.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}}),Object(E.connect)(function(e){return{result:function(e){return h.a.get(e,"app.election.resultPage.result")}(e)}},{}))(Z),ee=n(262),te=n.n(ee),ne=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={elector:""},n._handleSubmit=function(e){e&&e.stopPropagation(),e&&e.preventDefault();var t=n.props.addElector,a=n.state.elector;n.setState({elector:""}),t&&t(a)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("form",{className:t.formContainer,onSubmit:this._handleSubmit},r.a.createElement(te.a,{value:this.state.elector,placeholder:"Name",onChange:function(t){e.setState({elector:t.target.value})}}),r.a.createElement(k.a,{variant:"contained",size:"large",color:"primary",type:"submit"},"Submit")))}}]),t}(a.Component),ae={addElector:function(e){return function(t){F.a.getItem("electors").then(function(t){return!t&&(t={}),t[h.a.toUpper(e)]={name:e,weight:h.a.random(0,3)},F.a.setItem("electors",t)}).then(function(e){t({type:J,electors:e}),t(Object(L.goBack)())}).catch(function(){})}}},re=h.a.flowRight(Object(A.a)({shouldShowMenu:!1,title:"AddElector"}),Object(f.withStyles)({root:{},formContainer:{display:"flex",justifyContent:"space-around"}}),Object(E.connect)(function(e){return{}},ae))(ne);t.default=function(e){var t=e.match;return r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:Q}),r.a.createElement(o.a,{path:"".concat(t.url,"/home"),component:Q}),r.a.createElement(o.a,{path:"".concat(t.url,"/result"),component:$}),r.a.createElement(o.a,{path:"".concat(t.url,"/add/elector"),component:re}))}}}]);
//# sourceMappingURL=2.6e4ba24d.chunk.js.map