(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){"use strict";n.r(t);n(162);var r=n(0),a=n.n(r),l=n(171),o=(n(38),n(168)),i=n.n(o),u=n(216),c=n.n(u),d=n(161),f=n.n(d),s=n(8),p=n.n(s),m=n(267),b=n(153),y=n(180),h=n(175),g=n.n(h),v=n(163),E=n.n(v),O=n(232),w=n.n(O),x=n(191),j=n(174),_=n.n(j),k=n(157),S=n.n(k),P=n(192),C=n.n(P),R=n(259),M=n.n(R),z=n(263),T=n.n(z),N=n(194),A=n.n(N),L=n(265),F=n.n(L),I=n(152),B={Alert:g.a,Button:E.a,Chat:w.a,Component:y.a,Expandable:x.Expandable,ExpandableChildren:x.ExpandableChildren,ExpandableButton:x.ExpandableButton,Header:_.a,Heading:f.a,Icon:S.a,icons:k.icons,List:C.a,ResourceAccess:M.a,RecordFields:T.a,Text:A.a,TextInput:F.a,colors:I.colors},D=Object(b.default)("div",{target:"ex262az0"})({margin:"0 calc(-1rem + -1px)"}),W=Object(b.default)("div",{target:"ex262az1"})({border:"solid 1px "+I.colors.grey[400],marginBottom:"-1px"}),q=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={showEditor:!1},t}return p()(t,e),t.prototype.render=function(){var e=this.props.live.error;return a.a.createElement(D,null,a.a.createElement(W,null,a.a.createElement(m.c,{style:{padding:"1rem"}})),a.a.createElement("div",{className:"code__editor"},a.a.createElement(m.a,{ignoreTabKey:!0})),e&&a.a.createElement(g.a,{intent:"error"},a.a.createElement(m.b,null)))},t}(a.a.Component),U=Object(m.e)(q),G=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.code;return a.a.createElement(m.d,{code:e,scope:Object.assign({},B),mountStylesheet:!1},a.a.createElement(U,null))},t}(a.a.Component),H=(n(83),n(82),n(52),n(154),n(53),function(e){var t=e.palette;return a.a.createElement("section",null,a.a.createElement(f.a,{level:3,size:"medium"},t),a.a.createElement("ol",null,Object.keys(I.colors[t]).map(function(e,n){return a.a.createElement("li",{key:n,style:{background:I.colors[t][e],padding:"0.5rem 1rem",fontWeight:"600",color:e>400||"blue"==e?"white":"",display:"flex",justifyContent:"space-between",margin:"0 -1rem"}},a.a.createElement("span",null,e),a.a.createElement("span",null,I.colors[t][e]))})))}),Q=n(164),V=Object(b.default)("pre",{target:"e12odihs0"})({display:"block",background:I.colors.grey[100],border:"solid 1px "+I.colors.grey[400],padding:"1rem",margin:"0 -1rem",code:{background:"none",padding:"0"}}),J=Object(b.default)("code",{target:"e12odihs1"})({display:"inline-block",background:I.colors.grey[200],borderRadius:"3px",padding:"0 0.25rem",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"80%"}),K=new c.a({components:{h2:function(e){var t=e.children,n=i()(e,["children"]);return a.a.createElement(f.a,Object.assign({level:2,size:"large"},n),t)},h3:function(e){var t=e.children,n=i()(e,["children"]);return a.a.createElement(f.a,Object.assign({level:3,size:"medium"},n),t)},h4:function(e){var t=e.children,n=i()(e,["children"]);return a.a.createElement(f.a,Object.assign({level:4,size:"small"},n),t)},h5:function(e){var t=e.children,n=i()(e,["children"]);return a.a.createElement(f.a,Object.assign({level:5,size:"xsmall"},n),t)},h6:function(e){var t=e.children,n=i()(e,["children"]);return a.a.createElement(f.a,Object.assign({level:6,size:"xsmall"},n),t)},a:function(e){var t=e.children,n=i()(e,["children"]);return a.a.createElement("a",n,t)},p:function(e){var t=e.children;return a.a.createElement(A.a,null,t)},strong:function(e){var t=e.children;return a.a.createElement("strong",{style:{fontWeight:"600"}},t)},"live-code":G,code:function(e){var t=e.children;return a.a.createElement(J,null,t)},ul:function(e){var t=e.children;return a.a.createElement(C.a,{type:"bulleted"},t)},ol:function(e){var t=e.children;return a.a.createElement(C.a,{type:"numbered"},t)},pre:V,"color-palette":function(){return a.a.createElement("article",null,Object.keys(I.colors).map(function(e,t){return a.a.createElement(H,{palette:e,key:t})}))},"research-insight":function(e){var t=e.children;return a.a.createElement("p",{style:{borderLeft:"solid 4px",borderLeftColor:I.colors.blue[600],padding:"0.5rem 1rem",margin:"1rem -1rem",background:I.colors.blue[300]}},a.a.createElement("b",{style:{fontWeight:"700"}},"💡 Research insight:")," ",t)},text:A.a,iconography:function(){return a.a.createElement("ul",{style:{display:"flex",flexFlow:"row wrap",width:"100%"}},Object.keys(k.icons).map(function(e,t){return a.a.createElement("li",{key:t,style:{flex:"1 1 10rem",maxWidth:"10rem",height:"6rem",marginRight:"1rem"}},a.a.createElement("div",{style:{display:"flex",padding:"1rem",background:I.colors.grey[200],alignItems:"center",justifyContent:"center"}},a.a.createElement(S.a,{icon:e,size:24})),a.a.createElement("span",{style:{fontWeight:"600"}},e))}))},"gatsby-link":function(e){var t=e.to,n=e.children;return a.a.createElement(Q.Link,{to:t},n)},"color-intent":function(){return a.a.createElement("article",null,a.a.createElement("ol",null,Object.keys(I.intent_colors).map(function(e,t){return a.a.createElement("li",{key:t,style:{background:I.intent_colors[e],padding:"0.5rem 1rem",fontWeight:"600",color:"white",display:"flex",justifyContent:"space-between",margin:"0 -1rem"}},a.a.createElement("span",null,e),a.a.createElement("span",null,I.intent_colors[e]))})))}},createElement:function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n=[]),"div"===e?a.a.createElement(a.a.Fragment,t,n):a.a.createElement(e,t,n)}}).Compiler,X=function(e){var t=e.htmlAst;return a.a.createElement(a.a.Fragment,null,K(t))};n.d(t,"query",function(){return Z});var Y=Object(b.default)("footer",{target:"eyajrzh0"})({margin:"2rem 0"}),Z="1915642290";t.default=function(e){var t=e.data,n=t.markdownRemark.htmlAst,r=t.markdownRemark.frontmatter.title,o=t.markdownRemark.fields.name;return a.a.createElement(l.a,null,a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement(f.a,{level:1,size:"xlarge",style:{marginTop:"0"}},r)),a.a.createElement("div",{className:"y-spacing"},a.a.createElement(X,{htmlAst:n})),a.a.createElement(Y,null,a.a.createElement("a",{href:"https://github.com/mlibrary/umich-lib-components-react/edit/master/www/docs/"+o+".md"},"Edit this page on Github"))))}},163:function(e,t,n){"use strict";n(165),n(89),n(86),n(82),n(52),n(154),n(84),n(38),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(4)),l=i(n(153)),o=n(152);function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){var t=e.kind,n=e.small,r={display:"inline-block",padding:"0.5rem 1rem",borderRadius:"4px",fontSize:"1rem",cursor:"pointer",border:"none",background:"none",fontFamily:"inherit",textDecoration:"none"};switch(t){case"start":r=d({},r,{background:o.colors.blue[500],color:"white",borderBottom:o.colors.blue[600],borderBottomWidth:"3px",borderBottomStyle:"solid",padding:"0.5rem 1.15rem",fontWeight:"600",fontSize:"1.25rem"});break;case"primary":r=d({},r,{background:o.colors.blue[500],color:"white",borderBottom:o.colors.blue[600],borderBottomWidth:"3px",borderBottomStyle:"solid"});break;case"secondary":r=d({},r,{background:"transparent",color:o.colors.grey[600],borderColor:o.colors.grey[500],borderWidth:"1px",borderStyle:"solid"});break;case"tertiary":r=d({},r,{textDecoration:"underline",color:o.colors.grey[600],padding:"0"})}return n&&(r=d({},r,{fontSize:"0.875rem",padding:"tertiary"===t?"0":"0.25rem 0.5rem"})),r},p=(0,l.default)("button",{target:"ekfka2k0"})(d({},o.RESET_BUTTON),function(e){return s(e)}),m=(0,l.default)("a",{target:"ekfka2k1"})(d({},o.RESET_BUTTON),function(e){return s(e)}),b=function(e){var t=e.children,n=e.href,a=e.disabled,l=(e.className,e.kind),o=e.type,i=e.small,d=c(e,["children","href","disabled","className","kind","type","small"]),f=r.default.createElement(p,u({},d,{kind:l,small:i,disabled:a,type:o}),t),s=r.default.createElement(m,u({},d,{href:n,kind:l,small:i,disabled:a,type:o}),t);return n?s:f};b.propTypes={children:a.default.node,className:a.default.string,disabled:a.default.bool,small:a.default.bool,kind:a.default.oneOf(["start","primary","secondary","tertiary"]).isRequired,href:a.default.string,type:a.default.oneOf(["button","reset","submit"])},b.defaultProps={type:"button",disabled:!1,small:!1,kind:"primary"};var y=b;t.default=y},167:function(e,t,n){"use strict";n(85),n(158),n(159),n(160),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.ExpandableContext=t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=(r=n(4))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.createContext();t.ExpandableContext=f;var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return u(r,(n=r=u(this,(e=c(t)).call.apply(e,[this].concat(l))),r.state={expanded:!1,toggleExpanded:function(){r.setState({expanded:!r.state.expanded})},disabled:!1,disable:function(){r.setState({disabled:!0})}},n))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){return a.default.createElement(f.Provider,{value:this.state},this.props.children)}}])&&i(n.prototype,r),l&&i(n,l),t}();s.propTypes={expanded:l.default.bool,disabled:l.default.bool},s.defaultProps={expanded:!1};var p=s;t.default=p},191:function(e,t,n){"use strict";n(151),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Expandable",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ExpandableButton",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ExpandableChildren",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ExpandableProvider",{enumerable:!0,get:function(){return o.default}});var r=i(n(167)),a=i(n(253)),l=i(n(257)),o=i(n(258));function i(e){return e&&e.__esModule?e:{default:e}}},192:function(e,t,n){"use strict";n(89),n(86),n(82),n(52),n(154),n(84),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(153)),l=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={margin:"0",padding:"0",listStyle:"none"},f=(0,a.default)("ul",{target:"eq4hrz10"})(u({},d)),s={marginLeft:"1.5rem"},p=(0,a.default)("ul",{target:"eq4hrz11"})(u({},d,s,{listStyle:"disc"})),m=(0,a.default)("ol",{target:"eq4hrz12"})(u({},d,s,{listStyle:"decimal"})),b=function(e){var t=e.className,n=e.children,a=e.type;i(e,["className","children","type"]);return"bulleted"===a?r.default.createElement(p,{className:t},n):"numbered"===a?r.default.createElement(m,{className:t},n):r.default.createElement(f,{className:t},n)};b.propTypes={type:l.default.bool};var y=b;t.default=y},194:function(e,t,n){"use strict";n(165),n(82),n(52),n(154),n(84),n(38),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(153)),l=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=(0,a.default)("p",{target:"e1t48qfy0"})({fontSize:"1rem"},function(e){return{display:e.inline&&"inline"}},function(e){return{fontSize:e.small&&"0.875rem"}}),d=function(e){var t=e.className,n=e.children,a=e.inline,l=e.small,o=u(e,["className","children","inline","small"]);return r.default.createElement(c,i({className:t},o,{inline:a,small:l}),n)};d.propTypes={inline:l.default.bool,small:l.default.bool,children:l.default.node.isRequired},d.defaultProps={inline:!1,small:!1,italic:!1};var f=d;t.default=f},232:function(e,t,n){"use strict";n(233),n(85),n(158),n(159),n(160),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(234)),l=d(n(4)),o=d(n(163)),i=d(n(157)),u=n(83),c=n(152);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){var t=e.className;return r.default.createElement("svg",{className:t,width:"282.682",height:"130.146",viewBox:"0 0 282.682 130.146"},r.default.createElement("path",{id:"bubble_3_",fill:"#FFCF01",d:"M179.486,29.948c-41.058-21.774-107.634-21.774-148.689,0 c-41.062,21.773-41.062,57.076,0,78.851c3.595,1.905,7.393,3.639,11.354,5.209c-5.937,9.262-14.562,16.14-14.562,16.14 s18.048-0.609,32.208-10.465c39.087,9.902,87.309,6.283,119.689-10.884C220.548,87.023,220.548,51.721,179.486,29.948z"}),r.default.createElement("path",{id:"bubble_2_",fill:"#064473",d:"M268.192,0H110.389c-8.005,0-14.491,6.488-14.491,14.487v65.787 c0,8.005,6.486,14.489,14.491,14.489h60.09c13.492,16.812,41.679,20.023,41.679,20.023s-9.593-9.021-14.533-20.023h70.567 c8.009,0,14.489-6.484,14.489-14.489V14.487C282.682,6.488,276.2,0,268.192,0z"}),r.default.createElement("g",{fill:"#FFF"},r.default.createElement("path",{d:"M140.418,59.408l-3.94,14.202h-12.971l16.911-55.33h16.418l17.157,55.33h-13.463l-4.27-14.202H140.418z M154.455,50.05l-3.448-11.739c-0.984-3.283-1.97-7.388-2.791-10.672h-0.164c-0.82,3.284-1.642,7.471-2.545,10.672l-3.283,11.739 H154.455z"}),r.default.createElement("path",{d:"M181.628,62.692c2.299,1.396,7.061,3.037,10.754,3.037c3.777,0,5.336-1.313,5.336-3.366 c0-2.052-1.23-3.037-5.91-4.597c-8.291-2.791-11.492-7.307-11.41-12.067c0-7.471,6.402-13.135,16.336-13.135 c4.68,0,8.865,1.067,11.328,2.298l-2.217,8.62c-1.805-0.985-5.254-2.299-8.701-2.299c-3.037,0-4.762,1.231-4.762,3.284 c0,1.888,1.561,2.873,6.486,4.597c7.634,2.627,10.836,6.485,10.918,12.396c0,7.47-5.911,12.971-17.404,12.971 c-5.254,0-9.933-1.149-12.971-2.792L181.628,62.692z"})),r.default.createElement("path",{fill:"#FFF",d:"M232.064,50.378h0.164c0.902-1.642,1.888-3.283,2.873-4.843l8.127-12.068h15.022l-14.366,16.255 l16.419,23.889h-15.352l-9.687-16.501l-3.201,3.94V73.61h-12.479V15.325h12.479V50.378z"}))},h=(0,u.css)("position:fixed;right:1rem;margin-left:1rem;bottom:0;max-width:22rem;background:white;z-index:100;border-radius:4px 4px 0 0;box-shadow:rgba(0,0,0,0.4) 0px 0px 3px 1px;"),g=(0,u.css)({borderRadius:"4px 4px 0 0",padding:"0.5rem 1rem",width:"100%",fontSize:"1rem",border:"none",cursor:"pointer"}),v=(0,u.css)("width:100%;height:100%;border:none;max-height:25rem;min-height:24rem;"),E=(0,u.css)({display:"flex",justifyContent:"space-between",alignItems:"center"}),O=(0,u.css)({width:"2.5rem",height:"1.5rem",marginRight:"0.5rem"}),w=(0,u.css)({marginLeft:"1.5rem"}),x=(0,u.css)("display:flex;align-items:center;"),j=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return p(r,(n=r=p(this,(e=m(t)).call.apply(e,[this].concat(l))),r.state={open:!1},r.isFixed=function(){if("undefined"!=typeof window&&window.innerWidth<c.BREAKPOINTS.LARGESCREEN)return!1;return r.props.fixed},r.handleClick=function(){r.isFixed()?r.setState({open:!r.state.open}):window.open("https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279","_blank","resizable=1, height=500, width=400")},n))}var n,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.default.Component),n=t,(l=[{key:"componentDidMount",value:function(){var e=this;a.default.get("https://libraryh3lp-com.proxy.lib.umich.edu/presence/jid/umlibraryaskalibrarian/chat.libraryh3lp.com/text").then(function(t){if(t.data)switch(t.data){case"available":e.setState({status:"online"});break;case"unavailable":e.setState({status:"offline"})}})}},{key:"render",value:function(){var e=this.state,t=e.status,n=e.open,a=this.isFixed();return"online"===t?a?r.default.createElement("div",{className:h},r.default.createElement("button",{className:g,onClick:this.handleClick,kind:"secondary","aria-expanded":n},r.default.createElement("span",{className:E},r.default.createElement("span",{className:x},r.default.createElement(y,{className:O}),r.default.createElement("span",null,"Ask a Librarian")),n?r.default.createElement(i.default,{icon:"expand_more",size:28,className:w}):r.default.createElement(i.default,{icon:"show_less",size:28,className:w}))),r.default.createElement("iframe",{hidden:!n,src:"https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279",className:v,title:"Chat with Ask a Librarian"})):r.default.createElement(o.default,{onClick:this.handleClick,kind:"secondary"},r.default.createElement("span",{className:E},r.default.createElement(y,{className:O}),r.default.createElement("span",null,"Ask a Librarian"))):null}}])&&s(n.prototype,l),u&&s(n,u),t}();j.propTypes={fixed:l.default.bool},j.defaultProps={fixed:!1};var _=j;t.default=_},253:function(e,t,n){"use strict";n(162),n(86),n(254),n(85),n(158),n(38),n(159),n(160),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=n(167),o=(r=n(163))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e.filter(function(e){return!!e}).join(" ").trim()},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.context;return e.disabled?null:a.default.createElement(o.default,u({},this.props,{onClick:function(){return e.toggleExpanded()}}),e.expanded?p(["Show fewer",this.props.name]):p(["Show all",this.props.count,this.props.name]))}}])&&c(n.prototype,r),l&&c(n,l),t}();t.default=function(e){return a.default.createElement(l.ExpandableContext.Consumer,null,function(t){return a.default.createElement(m,u({},e,{context:t}))})}},257:function(e,t,n){"use strict";n(85),n(158),n(159),n(160),n(38),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=(r=n(4))&&r.__esModule?r:{default:r},o=n(167);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.context,n=e.children,r=e.show;n.length<=r&&!t.disabled&&t.disable()}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.children,r=e.show;return a.default.createElement(a.default.Fragment,null,t.expanded?n:n.slice(0,r))}}])&&c(n.prototype,r),l&&c(n,l),t}();p.propTypes={show:l.default.number},p.defaultProps={show:3};t.default=function(e){return a.default.createElement(o.ExpandableContext.Consumer,null,function(t){return a.default.createElement(p,i({},e,{context:t}))})}},258:function(e,t,n){"use strict";n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r},l=n(167);t.default=function(e){return a.default.createElement(l.ExpandableContext.Consumer,null,function(t){return a.default.createElement(a.default.Fragment,null,e.children(t))})}},259:function(e,t,n){"use strict";n(53),n(162),n(260),n(262),n(85),n(158),n(159),n(160),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(4)),l=c(n(157)),o=n(191),i=c(n(153)),u=n(152);function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y,h,g=(0,i.default)("figure",{target:"efocwzy0"})({overflowX:"auto",overflowY:"visible",margin:0,padding:0,"tr:not(:last-child)":{borderBottom:"solid 1px ".concat(u.colors.grey[400])}}),v=(0,i.default)("figcaption",{target:"efocwzy1"})((b={},y=u.MEDIA_QUERIES.LARGESCREEN,h={display:"flex",alignItems:"baseline",flexWrap:"wrap"},y in b?Object.defineProperty(b,y,{value:h,enumerable:!0,configurable:!0,writable:!0}):b[y]=h,b)),E=(0,i.default)("div",{target:"efocwzy2"})({}),O=(0,i.default)("ul",{target:"efocwzy3"})({fontSize:"0.875rem",margin:0,padding:0,listStyle:"none"}),w=(0,i.default)("th",{target:"efocwzy4"})({fontSize:"0.875rem",color:u.colors.grey[600],borderBottom:"solid 2px ".concat(u.colors.grey[400])}),x={padding:"0.5rem 0",textAlign:"left","&:not(:last-child)":{paddingRight:"1rem"}},j=(0,i.default)("table",{target:"efocwzy5"})({borderCollapse:"collapse",borderSpacing:"0",width:"100%",minWidth:"30rem",tableLayout:"fixed",tbody:{"tr:not(:last-child)":{borderBottom:"solid 1px ".concat(u.colors.grey[400])}},td:x,th:x}),_=function(e){var t=e.cell,n=e.renderAnchor;return r.default.createElement(r.default.Fragment,null,t.icon&&r.default.createElement(l.default,{icon:t.icon,style:{marginRight:"0.25rem"}}),t.href?r.default.createElement("a",{href:t.href},t.text):t.to?n(t):t.html?r.default.createElement("span",{dangerouslySetInnerHTML:{__html:t.html}}):r.default.createElement(r.default.Fragment,null,t.text))},k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).captionId="caption-"+Math.random().toString(36).substr(2,9),n.summaryId="summary-"+Math.random().toString(36).substr(2,9),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.default.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.caption,n=e.notes,a=e.captionLink,l=e.headings,i=e.rows,c=e.name,d=e.renderAnchor;return r.default.createElement(g,null,r.default.createElement(o.Expandable,null,r.default.createElement(v,null,t&&r.default.createElement(E,{className:"x-spacing"},r.default.createElement("span",{style:{fontWeight:"600"}},t),a&&r.default.createElement("a",{href:a.href,style:{fontSize:"0.875rem"}},a.text),n&&r.default.createElement(O,null,n.map(function(e,t){return r.default.createElement("li",{key:t},e)})))),r.default.createElement(j,null,r.default.createElement("thead",null,r.default.createElement("tr",null,l.map(function(e,t){return r.default.createElement(w,{scope:"col",key:t},e)}))),r.default.createElement("tbody",null,r.default.createElement("tr",null,i[0].map(function(e,t){return r.default.createElement("td",{key:t,style:{color:"".concat(u.intent_colors[e.intent])}},r.default.createElement(_,{cell:e,renderAnchor:d}))})),i.length>6&&r.default.createElement("tr",null,r.default.createElement("td",{colSpan:"".concat(l.length)},r.default.createElement(o.ExpandableButton,{kind:"secondary",small:!0,count:i.length,name:c}))),r.default.createElement(o.ExpandableChildren,{show:0},i.slice(1).map(function(e,t){return r.default.createElement("tr",{key:t},e.map(function(e,t){return r.default.createElement("td",{key:t,style:{color:"".concat(u.intent_colors[e.intent])}},r.default.createElement(_,{cell:e,renderAnchor:d}))}))})),r.default.createElement(o.ExpandableProvider,null,function(e){return r.default.createElement(r.default.Fragment,null,i.length>1&&(e.expanded||i.length<=6)?r.default.createElement("tr",null,r.default.createElement("td",{colSpan:"".concat(l.length)},r.default.createElement(o.ExpandableButton,{kind:"secondary",small:!0,count:i.length,name:c}))):null)})))))}}])&&f(n.prototype,a),l&&f(n,l),t}();k.propTypes={headings:a.default.array.isRequired,rows:a.default.array.isRequired,name:a.default.string,caption:a.default.string,captionLink:a.default.shape({text:a.default.string.isRequired,href:a.default.string.isRequired}),notes:a.default.array,renderAnchor:a.default.func};var S=k;t.default=S},263:function(e,t,n){"use strict";n(53),n(264),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=u(n(0)),l=u(n(4)),o=u(n(153)),i=n(152);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=(0,o.default)("dl",{target:"e4o15k10"})((c(r={width:"100%"},i.MEDIA_QUERIES.LARGESCREEN,{display:"table"}),c(r,"dt",c({color:i.colors.grey[600],fontSize:"0.875rem",padding:"0.5rem 1rem 0 1rem"},i.MEDIA_QUERIES.LARGESCREEN,{padding:"0.5rem 1rem",fontSize:"1rem",display:"table-cell",width:"12rem"})),c(r,"dd",c({marginInlineStart:"0",padding:"0 1rem 0.5rem 1rem"},i.MEDIA_QUERIES.LARGESCREEN,{padding:"0.5rem 1rem",display:"table-cell"})),r)),f=(0,o.default)("div",{target:"e4o15k11"})(c({paddingRight:"1rem"},i.MEDIA_QUERIES.LARGESCREEN,{display:"table-row"}),function(e){return!e.condensed&&{"&:nth-child(odd)":{background:i.colors.grey[100]},"&:nth-child(even)":{background:i.colors.grey[200]}}},function(e){return e.condensed&&{dt:{paddingTop:"0",paddingLeft:"0",paddingBottom:"0.25rem"},dd:{paddingRight:"0",paddingTop:"0",paddingLeft:"0",paddingBottom:"0.25rem"}}}),s=(0,o.default)("ol",{target:"e4o15k12"})({margin:"0",padding:"0",listStyle:"none",li:{display:"inline-block","&:not(:first-child)::before":{position:"relative",content:'""',display:"inline-block",width:"0.35rem",height:"0.35rem",borderRight:"2px solid",borderTop:"2px solid",borderColor:i.colors.grey[600],transform:"rotate(45deg)",marginLeft:"0.25rem",marginRight:"0.5rem"}}}),p=function e(t){var n=t.desc,r=t.renderAnchor;return Array.isArray(n)?a.default.createElement(s,null,n.map(function(t,n){return a.default.createElement("li",{className:"field-nested__desc",key:n},a.default.createElement(e,{desc:t,renderAnchor:r}))})):n.href?a.default.createElement("a",{href:n.href},n.text):n.to?r(n):n.text},m=function(e){var t=e.field,n=e.renderAnchor,r=e.condensed,l=t.term,o=t.description;return a.default.createElement(f,{condensed:r},a.default.createElement("dt",null,l),a.default.createElement("dd",null,o.map(function(e,t){return a.default.createElement("span",{className:"record-fields__description-item",key:t},a.default.createElement(p,{desc:e,renderAnchor:n}))})))},b=function(e){var t=e.fields,n=e.renderAnchor,r=e.condensed;return a.default.createElement(d,null,t.map(function(e,t){return a.default.createElement(m,{field:e,condensed:r,renderAnchor:n,key:t})}))};b.propTypes={fields:l.default.array.isRequired,condensed:l.default.bool,renderAnchor:l.default.func},b.defaultProps={condensed:!1};var y=b;t.default=y},265:function(e,t,n){"use strict";n(82),n(52),n(154),n(84),n(38),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(4)),l=c(n(153)),o=n(152),i=c(n(266)),u=c(n(181));function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=(0,l.default)("div",{target:"e1wfkg6h0"})({width:"100%",boxSizing:"border-box"},function(e){var t=e.invalid;return{borderLeft:t&&"solid 4px ".concat(o.colors.red[600]),paddingLeft:t&&"1rem"}}),p=(0,l.default)("label",{target:"e1wfkg6h1"})({base:o.base,display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}),m=(0,l.default)("span",{target:"e1wfkg6h2"})({display:"block",color:o.colors.grey[600]}),b=(0,l.default)("p",{target:"e1wfkg6h3"})({marginTop:"0.5rem",color:o.colors.red[600],fontWeight:"600"}),y=function(e){var t=e.labelText,n=e.descriptionText,a=(e.className,e.id),l=e.placeholder,o=e.type,c=e.onChange,y=e.onClick,h=e.hideLabel,g=e.invalid,v=e.invalidText,E=f(e,["labelText","descriptionText","className","id","placeholder","type","onChange","onClick","hideLabel","invalid","invalidText"]),O={id:a,onChange:function(e){E.disabled||c(e)},onClick:function(e){E.disabled||y(e)},placeholder:l,type:o},w=a+"-error-msg",x=n?r.default.createElement(m,null,n):null,j=t?r.default.createElement(p,{htmlFor:a},r.default.createElement("span",null,t),x):null,_=g?r.default.createElement(b,{id:w},v):null,k=g?r.default.createElement(i.default,d({},E,O,{invalid:!0,"data-invalid":!0,"aria-invalid":!0,"aria-describedby":w})):r.default.createElement(i.default,d({},E,O));return r.default.createElement(s,{invalid:g},h?r.default.createElement(u.default,null,j):r.default.createElement(r.default.Fragment,null,j),k,_)};y.propTypes={id:a.default.string.isRequired,labelText:a.default.node.isRequired,hideLabel:a.default.bool,className:a.default.string,defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,onChange:a.default.func,onClick:a.default.func,placeholder:a.default.string,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),invalid:a.default.bool,invalidText:a.default.string},y.defaultProps={disabled:!1,type:"text",onChange:function(){},onClick:function(){},invalid:!1,invalidText:""};var h=y;t.default=h},266:function(e,t,n){"use strict";n(82),n(52),n(154),n(84),n(38),n(151),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(153)),l=n(152);function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=(0,a.default)("input",{target:"es9mw4s0"})(l.base,{fontSize:"1rem",color:l.colors.grey[700],margin:"0",border:"solid 1px rgba(0,0,0,0.5)",boxShadow:"inset 0 1px 4px rgba(0,0,0,0.1)",borderRadius:"4px",padding:"0.5rem 0.75rem",width:"100%",appearance:"textfield",fontFamily:"inherit",boxSizing:"border-box"},function(e){var t=e.invalid;return{borderColor:t&&l.colors.red[600],borderWidth:t&&"2px"}});t.default=function(e){var t=e.className,n=u(e,["className"]);return r.default.createElement(c,i({className:t},n))}}}]);
//# sourceMappingURL=component---src-templates-doc-js-4e9f0679d971f980c492.js.map