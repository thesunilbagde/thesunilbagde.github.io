(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=s,e.useAmp=function(){return s(i.default.useContext(a.AmpStateContext))}},"/h46":function(t,e,n){n("cHUd")("Map")},"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"4mXO":function(t,e,n){t.exports=n("7TPF")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=i(n("q1tI")),s=i(n("Xuae")),u=n("lwAK"),c=n("FYa8"),l=n("/0+H");function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function m(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);t.has(s)?a=!1:t.add(s)}switch(i.type){case"title":case"base":e.has(i.type)?a=!1:e.add(i.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=i.props[l],p=o[l]||new r;p.has(f)?a=!1:(p.add(f),o[l]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var h=s.default();function v(t){var e=t.children;return a.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(h,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)}))}))}v.rewind=h.rewind,e.default=v},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"AT/M":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},LX0d:function(t,e,n){t.exports=n("UDep")},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),o=n.n(r),i=n("Z7t5"),a=n.n(i);function s(t){return(s="function"===typeof a.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function u(t){return(u="function"===typeof a.a&&"symbol"===s(o.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":s(t)})(t)}var c=n("AT/M");function l(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return l}))},Mj6V:function(t,e,n){var r,o;void 0===(o="function"===typeof(r=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}t.configure=function(t){var n,r;for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&(e[n]=r);return this},t.status=null,t.set=function(a){var s=t.isStarted();a=n(a,e.minimum,1),t.status=1===a?null:a;var u=t.render(!s),c=u.querySelector(e.barSelector),l=e.speed,f=e.easing;return u.offsetWidth,o((function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),i(c,function(t,n,o){var i;return(i="translate3d"===e.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+n+"ms "+o,i}(a,l,f)),1===a?(i(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){i(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){t.remove(),n()}),l)}),l)):setTimeout(n,l)})),this},t.isStarted=function(){return"number"===typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout((function(){t.status&&(t.trickle(),n())}),e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var r=t.status;return r?("number"!==typeof e&&(e=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always((function(){0===--n?(e=0,t.done()):t.set((e-n)/e)})),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=e.template;var a,u=o.querySelector(e.barSelector),c=n?"-100":r(t.status||0),f=document.querySelector(e.parent);return i(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(a=o.querySelector(e.spinnerSelector))&&l(a),f!=document.body&&s(f,"nprogress-custom-parent"),f.appendChild(o),o},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&l(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),i=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,o=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((r=t[o]+i)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,o,i=arguments;if(2==i.length)for(n in e)void 0!==(o=e[n])&&e.hasOwnProperty(n)&&r(t,n,o);else r(t,i[1],i[2])}}();function a(t,e){return("string"==typeof t?t:c(t)).indexOf(" "+e+" ")>=0}function s(t,e){var n=c(t),r=n+e;a(n,e)||(t.className=r.substring(1))}function u(t,e){var n,r=c(t);a(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function c(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function l(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?r.call(e,n,e,t):r)||(t.exports=o)},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},PQhJ:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("nOHt"),a=n.n(i),s=n("8Kt/"),u=n.n(s),c=n("Mj6V"),l=n.n(c),f=n("mqFp"),p=n.n(f),d=o.a.createElement;a.a.onRouteChangeStart=function(t){l.a.start()},a.a.onRouteChangeComplete=function(){return l.a.done()},a.a.onRouteChangeError=function(){return l.a.done()},e.a=function(t){var e=t.title,n=t.description,r=t.children;return d("div",null,d(u.a,null,d("title",null,e||"Sunil Bagde - Web Developer & Writer"),!1!==n&&d("meta",{name:"description",content:n||p.a.siteDescription})),d("div",{className:"flex flex-col min-h-full"},r))}},QIz2:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),s=o.a.createElement;e.a=function(t){var e=t.title,n=t.description,r=t.image,o=t.url;return s(a.a,null,s("meta",{name:"twitter:site",content:"@iamsunil786"}),s("meta",{name:"twitter:card",content:r?"summary_large_image":"summary"}),e&&s("meta",{name:"og:title",content:e}),o&&s("meta",{name:"og:url",content:o}),n&&s("meta",{name:"description",content:n}),n&&s("meta",{name:"og:description",content:n}),s("meta",{name:"og:image",content:"https://im-sunil.github.io/img/me.jpg"}))}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),o=n.n(r),i=n("TRZx"),a=n.n(i);function s(t,e){return(s=a.a||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}n.d(e,"a",(function(){return u}))},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},UXZV:function(t,e,n){t.exports=n("UbbE")},UbbE:function(t,e,n){n("o8NH"),t.exports=n("WEpk").Object.assign},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),s=n("NwJ3"),u=n("tEej"),c=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,f,p=i(t),d="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,g=0,y=l(p);if(v&&(h=r(h,m>2?arguments[2]:void 0,2)),void 0==y||d==Array&&s(y))for(n=new d(e=u(p.length));e>g;g++)c(n,g,v?h(p[g],g):p[g]);else for(f=y.call(p),n=new d;!(o=f.next()).done;g++)c(n,g,v?a(f,h,[o.value,g],!0):o.value);return n.length=g,n}})},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),a=n("2GTP"),s=n("EXMj"),u=n("oioR"),c=n("MPFp"),l=n("UO39"),f=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,m=n("n3ko"),h=p?"_s":"size",v=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,r){s(t,l,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&u(r,n,t[c],t)}));return i(l.prototype,{clear:function(){for(var t=m(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=m(this,e),r=v(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[h]--}return!!r},forEach:function(t){m(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!v(m(this,e),t)}}),p&&r(l.prototype,"size",{get:function(){return m(this,e)[h]}}),l},def:function(t,e,n){var r,o,i=v(t,e);return i?i.v=n:(t._l=i={i:o=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:v,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=m(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),s=n("WaGi"),u=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new l;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){function l(t){var s;return r(this,l),s=o(this,i(l).call(this,t)),p&&(e.add(a(s)),n(a(s))),s}return u(l,c),s(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),s(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},ZHh6:function(t,e,n){"use strict";var r=n("0iUn"),o=n("sLSF"),i=n("MI3g"),a=n("a7VT"),s=n("AT/M"),u=n("Tit0"),c=n("hfKm"),l=n.n(c);var f=n("q1tI"),p=n.n(f),d=n("YFqc"),m=n.n(d),h=(n("nOHt"),p.a.createElement,n("mqFp")),v=n.n(h),g=n("kOwS"),y=n("qNsG"),b=n("yLiY"),w=n.n(b),x=p.a.createElement,_=w()().publicRuntimeConfig.basePath||"",k=_.endsWith("/");function S(t){var e,n=t.href,r=t.children,o=Object(y.a)(t,["href","children"]);return e=k||n.startsWith("/")?"".concat(_).concat(n):"".concat(_,"/").concat(n),x(m.a,Object(g.a)({href:n,as:e},o),r)}n.d(e,"a",(function(){return N}));var O=p.a.createElement,N=function(t){function e(t){var n,o,u,c;return Object(r.a)(this,e),n=Object(i.a)(this,Object(a.a)(e).call(this,t)),o=Object(s.a)(n),c=function(){window.scrollY>60?n.setState({scrolled:!0}):n.setState({scrolled:!1})},(u="headerOnScroll")in o?l()(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,n.state={scrolled:!1,isOpen:!1},n}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.headerOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.headerOnScroll)}},{key:"render",value:function(){return O("header",{id:"header",className:"".concat(this.state.scrolled?"scroll":""," w-full bg-white lg:p-2 xs:border-2 xs:border-gray-200 sm:border-2 sm:border-gray-200 md:border-2 md:border-gray-200 lg:border-0 fixed top-0 z-50")},O("div",{className:"w-full container mx-auto flex flex-wrap items-center mt-0 py-3 xs:px-4 sm:px-4 md:px-4 lg:px-0"},O("div",{className:"brand justify-between flex items-center xs:w-full sm:w-full md:w-full md:px-0 lg:px-0 lg:w-1/2"},O(S,{href:"/"},O("a",{className:"flex text-black font-bold no-underline hover:no-underline"},O("span",{className:"text-lg"},v.a.siteTitle)))),O("nav",{className:"w-full flex-grow xs:hidden sm:hidden lg:flex lg:items-center lg:w-1/2 lg:block mt-2 lg:mt-0",id:"nav-content",role:"navigation","aria-label":"main navigation"},O("ul",{className:"lg:flex flex-1 items-center lg:justify-end md:px-0 py-2"},O("li",{className:"lg:mr-3 lg:ml-3 lg:invisible xs:pb-1"},O(S,{href:"/"},O("a",{className:"text-gray-600 hover:underline"},"Home"))),O("li",{className:"lg:mr-3 lg:ml-3 xs:py-1 sm:py-3"},O(S,{href:"/about"},O("a",{className:"text-gray-600 hover:underline"},"About"))),O("li",{className:"lg:mr-3 lg:ml-3 xs:py-1 sm:py-3"},O(S,{href:"/posts"},O("a",{className:"text-gray-600 hover:underline"},"Posts"))),O("li",{className:"lg:mr-3 lg:ml-3 xs:py-1 sm:py-3"},O(S,{href:"/contact"},O("a",{className:"text-gray-600 hover:underline"},"Contact")))))),O("nav",{className:"py-3 px-4 lg:hidden xl:hidden",role:"navigation"},O("ul",{className:"flex items-center justify-between"},O("li",{className:""},O(S,{href:"/"},O("a",{className:"text-gray-600 font-normal"},"Home"))),O("li",null,O(S,{href:"/about"},O("a",{className:"text-gray-600 font-normal"},"About"))),O("li",null,O(S,{href:"/posts"},O("a",{className:"text-gray-600 font-normal"},"Posts"))),O("li",{className:""},O(S,{href:"/contact"},O("a",{className:"text-gray-600 font-normal"},"Contact"))))))}}]),e}(p.a.Component)},a7VT:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("Bhuq"),o=n.n(r),i=n("TRZx"),a=n.n(i);function s(t){return(s=a.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},aIN1:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("0iUn"),o=n("sLSF"),i=n("MI3g"),a=n("a7VT"),s=n("Tit0"),u=n("q1tI"),c=n.n(u),l=c.a.createElement,f=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l("footer",{className:"flex-shrink-0 pt-10 pb-10 pr-5 pl-5"},l("div",{className:"flex items-center justify-center"},l("span",{className:"text-gray-500"},"\xa9 ",(new Date).getFullYear())),l("div",{className:"flex items-center justify-center"},l("a",{href:"https://github.com/im-sunil",className:"text-gray-500 mr-2 ml-2 hover:text-blue-400",target:"_blank",rel:"noopener noreferrer"},"GitHub"),l("a",{href:"https://twitter.com/iamsunil786",className:"text-gray-500 mr-2 ml-2 hover:text-blue-400",target:"_blank",rel:"noopener noreferrer"},"Twitter")))}}]),e}(c.a.Component)},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),u=n("LX0d"),c=n("KI45"),l=n("5Uuq");e.__esModule=!0,e.default=void 0;var f,p=n("CxY0"),d=l(n("q1tI")),m=c(n("nOHt")),h=n("g/15");function v(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var g=new u,y=window.IntersectionObserver,b={};function w(){return f||(y?f=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){function e(t){var n;return r(this,e),(n=i(this,a(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:v(t),as:e?v(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),s=s?(0,p.resolve)(u,s):a,t.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return s(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=b[this.getHref()];this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();m.default.prefetch(t),b[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var i=d.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch()},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),d.default.cloneElement(i,a)}}]),e}(d.Component);e.default=x},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(t,e,n){n("aPfg")("Map")},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},kOwS:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("UXZV"),o=n.n(r);function i(){return(i=o.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},mqFp:function(t,e){t.exports={siteTitle:"Sunil Bagde",siteDescription:"Sunil Bagde is a web developer and writer with a passion for Laravel & JavaScript",siteUrl:"https://im-sunil.github.io",sitePostsUrl:"https://im-sunil.github.io/posts/",siteAuthor:"Sunil Bagde",siteAuthorImage:"img/profile.jpg",twitterAccount:"@iamsunil786"}},o8NH:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F,"Object",{assign:n("kwZ1")})},qNsG:function(t,e,n){"use strict";var r=n("4mXO"),o=n.n(r),i=n("pLtp"),a=n.n(i);function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,o={},i=a()(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(o.a){var s=o()(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return s}))},sLSF:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hfKm"),o=n.n(r);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")},yLiY:function(t,e,n){"use strict";var r;n("hfKm")(e,"__esModule",{value:!0}),e.default=function(){return r},e.setConfig=function(t){r=t}}}]);