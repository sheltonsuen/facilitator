(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(e,t,a){"use strict";var n=a(196),o=a(45),r=a(46),l=a(49),c=a(47),i=a(48),s=a(2),u=a.n(s),d=a(156),p=a.n(d),h=a(180),m=a.n(h),f=a(181),g=a.n(f),b=a(161),v=a.n(b),y=a(176),k=a.n(y),E=a(72),w=a(162),C=a.n(w),O=a(182),B=a.n(O),_=a(164),S=a.n(_),j=a(190),F=a.n(j),x=a(165),N=a.n(x),I=a(173),T=a.n(I),M=a(166),P=a.n(M),$=a(189),G=a.n($),A=a(191),L=a.n(A),R=a(179),z=a.n(R),H={root:{display:"flex"},appBar:{},menuButton:{marginLeft:-12,marginRight:20},content:{paddingTop:"4rem",width:"100%"},menuList:{width:"12rem"}},D=a(160),V={shouldShowMenu:!0,title:"Unicorn"};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=e.shouldShowMenu,a=e.title;return function(e){var s=function(s){function d(){var e,t;Object(o.a)(this,d);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(c.a)(d)).call.apply(e,[this].concat(n)))).state={open:!1},t._toggleDrawer=function(e){return function(){t.setState({open:e})}},t._renderMenuButton=function(){var e=t.props.classes;return u.a.createElement(v.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:t._toggleDrawer(!0)},u.a.createElement(k.a,null))},t._renderBackButton=function(){var e=t.props,a=e.classes,n=e.goBack;return u.a.createElement(v.a,{className:a.menuButton,color:"inherit","aria-label":"Back",onClick:n},u.a.createElement(z.a,null))},t._handleItemClick=function(e){var a=t.props.push;a&&a(e)},t}return Object(i.a)(d,s),Object(r.a)(d,[{key:"render",value:function(){var o=this,r=this.props,l=r.classes,c=Object(n.a)(r,["classes"]),i=this.state.open;return u.a.createElement("div",{className:l.root},u.a.createElement(m.a,{className:l.appBar},u.a.createElement(g.a,null,t?this._renderMenuButton():this._renderBackButton(),u.a.createElement(C.a,{variant:"title",color:"inherit"},a))),u.a.createElement(B.a,{open:i,onClose:this._toggleDrawer(!1),onOpen:this._toggleDrawer(!0)},u.a.createElement("div",{className:l.menuList},u.a.createElement(S.a,null,u.a.createElement(N.a,{onClick:function(){return o._handleItemClick("/election/add/elector")},button:!0},u.a.createElement(T.a,null,u.a.createElement(G.a,null)),u.a.createElement(P.a,{primary:"Add Elector"}))),u.a.createElement(F.a,null),u.a.createElement(S.a,null,u.a.createElement(N.a,{onClick:function(){return o._handleItemClick("/settings/toggles")},button:!0},u.a.createElement(T.a,null,u.a.createElement(L.a,null)),u.a.createElement(P.a,{primary:"Settings"}))))),u.a.createElement("div",{className:l.content},u.a.createElement(e,c)))}}]),d}(u.a.Component);return p.a.flowRight(Object(E.withStyles)(H),D.a)(s)}}},160:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(35),l=a(19);t.a=function(e){return Object(r.connect)(function(){return{}},{push:l.push,replace:l.replace,go:l.go,goBack:l.goBack,goForward:l.goForward})(function(t){return o.a.createElement(e,t)})}},268:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(2)),r=(0,n(a(157)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("defs",null,o.default.createElement("path",{id:"a",d:"M0 0h24v24H0V0z"})),o.default.createElement("defs",null,o.default.createElement("path",{id:"c",d:"M0 0h24v24H0V0z"})),o.default.createElement("path",{d:"M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),"Airplay");t.default=r},269:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(270))},270:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(11)),r=n(a(12)),l=n(a(2)),c=(n(a(0)),n(a(70))),i=n(a(43)),s=a(71),u=n(a(271)),d=function(e){return{root:{display:"inline-flex",width:62,position:"relative",flexShrink:0,verticalAlign:"middle"},icon:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},iconChecked:{boxShadow:e.shadows[2]},switchBase:{zIndex:1,padding:0,height:48,width:48,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},checked:{transform:"translateX(14px)","& + $bar":{opacity:.5}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"& + $bar":{backgroundColor:e.palette.primary.main}}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"& + $bar":{backgroundColor:e.palette.secondary.main}}},disabled:{"& + $bar":{opacity:"light"===e.palette.type?.12:.1},"& $icon":{boxShadow:e.shadows[1]},"&$switchBase":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800],"& + $bar":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}}},bar:{borderRadius:7,display:"block",position:"absolute",width:34,height:14,top:"50%",left:"50%",marginTop:-7,marginLeft:-17,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}};function p(e){var t=e.classes,a=e.className,n=e.color,i=(0,r.default)(e,["classes","className","color"]);return l.default.createElement("span",{className:(0,c.default)(t.root,a)},l.default.createElement(u.default,(0,o.default)({type:"checkbox",icon:l.default.createElement("span",{className:t.icon}),classes:{root:(0,c.default)(t.switchBase,t["color".concat((0,s.capitalize)(n))]),checked:t.checked,disabled:t.disabled},checkedIcon:l.default.createElement("span",{className:(0,c.default)(t.icon,t.iconChecked)})},i)),l.default.createElement("span",{className:t.bar}))}t.styles=d,p.propTypes={},p.defaultProps={color:"secondary"};var h=(0,i.default)(d,{name:"MuiSwitch"})(p);t.default=h},271:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(11)),r=n(a(18)),l=n(a(12)),c=n(a(30)),i=n(a(31)),s=n(a(32)),u=n(a(33)),d=n(a(34)),p=n(a(2)),h=n(a(0)),m=n(a(70)),f=n(a(43)),g=n(a(161)),b={root:{display:"inline-flex",alignItems:"center",transition:"none","&:hover":{backgroundColor:"transparent"}},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}};t.styles=b;var v=function(e){function t(e){var a;return(0,c.default)(this,t),(a=(0,s.default)(this,(0,u.default)(t).call(this))).handleFocus=function(e){a.props.onFocus&&a.props.onFocus(e);var t=a.context.muiFormControl;t&&t.onFocus&&t.onFocus(e)},a.handleBlur=function(e){a.props.onBlur&&a.props.onBlur(e);var t=a.context.muiFormControl;t&&t.onBlur&&t.onBlur(e)},a.handleInputChange=function(e){var t=e.target.checked;a.isControlled||a.setState({checked:t}),a.props.onChange&&a.props.onChange(e,t)},a.isControlled=null!=e.checked,a.state={},a.isControlled||(a.state.checked=void 0!==e.defaultChecked&&e.defaultChecked),a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.autoFocus,n=t.checked,c=t.checkedIcon,i=t.classes,s=t.className,u=t.disabled,d=t.icon,h=t.id,f=t.inputProps,b=t.inputRef,v=t.name,y=(t.onBlur,t.onChange,t.onFocus,t.readOnly),k=t.required,E=t.tabIndex,w=t.type,C=t.value,O=(0,l.default)(t,["autoFocus","checked","checkedIcon","classes","className","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=this.context.muiFormControl,_=u;B&&"undefined"===typeof _&&(_=B.disabled);var S=this.isControlled?n:this.state.checked,j="checkbox"===w||"radio"===w;return p.default.createElement(g.default,(0,o.default)({component:"span",className:(0,m.default)(i.root,(e={},(0,r.default)(e,i.checked,S),(0,r.default)(e,i.disabled,_),e),s),disabled:_,tabIndex:null,role:void 0,onFocus:this.handleFocus,onBlur:this.handleBlur},O),S?c:d,p.default.createElement("input",(0,o.default)({autoFocus:a,checked:S,className:i.input,disabled:_,id:j&&h,name:v,onChange:this.handleInputChange,readOnly:y,ref:b,required:k,tabIndex:E,type:w,value:C},f)))}}]),t}(p.default.Component);v.propTypes={},v.contextTypes={muiFormControl:h.default.object};var y=(0,f.default)(b,{name:"MuiSwitchBase"})(v);t.default=y},276:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(273),l=a(274),c=a(45),i=a(46),s=a(49),u=a(47),d=a(48),p=a(35),h=a(156),m=a.n(h),f=a(72),g=a(164),b=a.n(g),v=a(165),y=a.n(v),k=a(173),E=a.n(k),w=a(194),C=a.n(w),O=a(166),B=a.n(O),_=a(269),S=a.n(_),j=a(268),F=a.n(j),x=a(174),N=a(41),I=a(192),T=a.n(I),M=N.a.SETTINGS_TOGGLE_TOGGLES,P=(N.a.SETTINGS_FETCH_TOGGLES,a(159)),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o))))._handleSwitchToggle=function(e){var t=a.props.toggleToggles;t&&t([e])},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.toggles;return o.a.createElement("div",{className:a.root},o.a.createElement(b.a,null,o.a.createElement(y.a,null,o.a.createElement(E.a,null,o.a.createElement(F.a,null)),o.a.createElement(B.a,{primary:"\u9996\u5c4f\u52a8\u753b"}),o.a.createElement(C.a,null,o.a.createElement(S.a,{onChange:function(){return e._handleSwitchToggle("landingAnimation")},checked:n.landingAnimation})))))}}]),t}(n.Component),G={toggleToggles:function(e){return function(t,a){var n=m.a.get(a(),"app.settings.togglesPage.toggles"),o=Object(x.a)({},n);m.a.forEach(e,function(e){return e&&(o[e]=!o[e])}),T.a.setItem("toggles",o).then(function(e){return t({type:M,toggles:e})})}}},A=m.a.flowRight(Object(P.a)({shouldShowMenu:!1,title:"Settings"}),Object(f.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}),Object(p.connect)(function(e){return{toggles:m.a.get(e,"app.settings.togglesPage.toggles")}},G))($);t.default=function(e){var t=e.match;return o.a.createElement(r.a,null,o.a.createElement(l.a,{path:"".concat(t.url,"/toggles"),component:A}))}}}]);
//# sourceMappingURL=3.b48fc1eb.chunk.js.map