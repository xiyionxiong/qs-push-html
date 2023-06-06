var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var n={exports:{}},o={},a=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.iterator;var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function S(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||v}function w(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||v}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=S.prototype;var C=_.prototype=new w;C.constructor=_,g(C,S.prototype),C.isPureReactComponent=!0;var $=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,n)&&!R.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:E.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return o=o(c=e),e=""===n?"."+A(c,0):n,$(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),O(o,t,r,"",(function(e){return e}))):null!=o&&(I(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(c=0,n=""===n?".":n+":",$(e))for(var u=0;u<e.length;u++){var l=n+A(i=e[u],u);c+=O(i,t,r,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=O(i=i.value,t,r,l=n+A(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function j(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},D={transition:null},F={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:E};o.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o.Component=S,o.Fragment=i,o.Profiler=u,o.PureComponent=_,o.StrictMode=c,o.Suspense=d,o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,o.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=g({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=E.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!R.hasOwnProperty(u)&&(n[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)n.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:a,type:e.type,key:o,ref:s,props:n,_owner:i}},o.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},o.createElement=k,o.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},o.createRef=function(){return{current:null}},o.forwardRef=function(e){return{$$typeof:p,render:e}},o.isValidElement=I,o.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:N}},o.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},o.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},o.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},o.useCallback=function(e,t){return T.current.useCallback(e,t)},o.useContext=function(e){return T.current.useContext(e)},o.useDebugValue=function(){},o.useDeferredValue=function(e){return T.current.useDeferredValue(e)},o.useEffect=function(e,t){return T.current.useEffect(e,t)},o.useId=function(){return T.current.useId()},o.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},o.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},o.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},o.useMemo=function(e,t){return T.current.useMemo(e,t)},o.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},o.useRef=function(e){return T.current.useRef(e)},o.useState=function(e){return T.current.useState(e)},o.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},o.useTransition=function(){return T.current.useTransition()},o.version="18.2.0",n.exports=o;var z=n.exports;const G=t(z);var L=function(){return L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},L.apply(this,arguments)};function B(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var M="-ms-",Y="-moz-",W="-webkit-",q="comm",U="rule",H="decl",V="@import",Z="@keyframes",J="@layer",K=Math.abs,Q=String.fromCharCode,X=Object.assign;function ee(e){return e.trim()}function te(e,t){return(e=t.exec(e))?e[0]:e}function re(e,t,r){return e.replace(t,r)}function ne(e,t){return e.indexOf(t)}function oe(e,t){return 0|e.charCodeAt(t)}function ae(e,t,r){return e.slice(t,r)}function se(e){return e.length}function ie(e){return e.length}function ce(e,t){return t.push(e),e}var ue=1,le=1,fe=0,pe=0,de=0,he="";function ye(e,t,r,n,o,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:ue,column:le,length:s,return:""}}function me(e,t){return X(ye("",null,null,"",null,null,0),e,{length:-e.length},t)}function ve(){return de=pe<fe?oe(he,pe++):0,le++,10===de&&(le=1,ue++),de}function ge(){return oe(he,pe)}function be(){return pe}function Se(e,t){return ae(he,e,t)}function we(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _e(e){return ee(Se(pe-1,xe(91===e?e+2:40===e?e+1:e)))}function Ce(e){for(;(de=ge())&&de<33;)ve();return we(e)>2||we(de)>3?"":" "}function $e(e,t){for(;--t&&ve()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return Se(e,be()+(t<6&&32==ge()&&32==ve()))}function xe(e){for(;ve();)switch(de){case e:return pe;case 34:case 39:34!==e&&39!==e&&xe(de);break;case 40:41===e&&xe(e);break;case 92:ve()}return pe}function Ee(e,t){for(;ve()&&e+de!==57&&(e+de!==84||47!==ge()););return"/*"+Se(t,pe-1)+"*"+Q(47===e?e:ve())}function Re(e){for(;!we(ge());)ve();return Se(e,pe)}function ke(e){return function(e){return he="",e}(Ie("",null,null,null,[""],e=function(e){return ue=le=1,fe=se(he=e),pe=0,[]}(e),0,[0],e))}function Ie(e,t,r,n,o,a,s,i,c){for(var u=0,l=0,f=s,p=0,d=0,h=0,y=1,m=1,v=1,g=0,b="",S=o,w=a,_=n,C=b;m;)switch(h=g,g=ve()){case 40:if(108!=h&&58==oe(C,f-1)){-1!=ne(C+=re(_e(g),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:C+=_e(g);break;case 9:case 10:case 13:case 32:C+=Ce(h);break;case 92:C+=$e(be()-1,7);continue;case 47:switch(ge()){case 42:case 47:ce(Ae(Ee(ve(),be()),t,r),c);break;default:C+="/"}break;case 123*y:i[u++]=se(C)*v;case 125*y:case 59:case 0:switch(g){case 0:case 125:m=0;case 59+l:-1==v&&(C=re(C,/\f/g,"")),d>0&&se(C)-f&&ce(d>32?Oe(C+";",n,r,f-1):Oe(re(C," ","")+";",n,r,f-2),c);break;case 59:C+=";";default:if(ce(_=Pe(C,t,r,u,l,o,i,b,S=[],w=[],f),a),123===g)if(0===l)Ie(C,t,_,_,S,a,f,i,w);else switch(99===p&&110===oe(C,3)?100:p){case 100:case 108:case 109:case 115:Ie(e,_,_,n&&ce(Pe(e,_,_,0,0,o,i,b,o,S=[],f),w),o,w,f,i,n?S:w);break;default:Ie(C,_,_,_,[""],w,0,i,w)}}u=l=d=0,y=v=1,b=C="",f=s;break;case 58:f=1+se(C),d=h;default:if(y<1)if(123==g)--y;else if(125==g&&0==y++&&125==(de=pe>0?oe(he,--pe):0,le--,10===de&&(le=1,ue--),de))continue;switch(C+=Q(g),g*y){case 38:v=l>0?1:(C+="\f",-1);break;case 44:i[u++]=(se(C)-1)*v,v=1;break;case 64:45===ge()&&(C+=_e(ve())),p=ge(),l=f=se(b=C+=Re(be())),g++;break;case 45:45===h&&2==se(C)&&(y=0)}}return a}function Pe(e,t,r,n,o,a,s,i,c,u,l){for(var f=o-1,p=0===o?a:[""],d=ie(p),h=0,y=0,m=0;h<n;++h)for(var v=0,g=ae(e,f+1,f=K(y=s[h])),b=e;v<d;++v)(b=ee(y>0?p[v]+" "+g:re(g,/&\f/g,p[v])))&&(c[m++]=b);return ye(e,t,r,0===o?U:i,c,u,l)}function Ae(e,t,r){return ye(e,t,r,q,Q(de),ae(e,2,-2),0)}function Oe(e,t,r,n){return ye(e,t,r,H,ae(e,0,n),ae(e,n+1,-1),n)}function je(e,t,r){switch(function(e,t){return 45^oe(e,0)?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Y+e+M+e+e;case 5936:switch(oe(e,t+11)){case 114:return W+e+M+re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+M+re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+M+re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+M+e+e;case 6165:return W+e+M+"flex-"+e+e;case 5187:return W+e+re(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+M+"flex-$1$2")+e;case 5443:return W+e+M+"flex-item-"+re(e,/flex-|-self/g,"")+(te(e,/flex-|baseline/)?"":M+"grid-row-"+re(e,/flex-|-self/g,""))+e;case 4675:return W+e+M+"flex-line-pack"+re(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+M+re(e,"shrink","negative")+e;case 5292:return W+e+M+re(e,"basis","preferred-size")+e;case 6060:return W+"box-"+re(e,"-grow","")+W+e+M+re(e,"grow","positive")+e;case 4554:return W+re(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return re(re(re(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return re(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return re(re(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!te(e,/flex-|baseline/))return M+"grid-column-align"+ae(e,t)+e;break;case 2592:case 3360:return M+re(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,te(e.props,/grid-\w+-end/)}))?~ne(e+(r=r[t].value),"span")?e:M+re(e,"-start","")+e+M+"grid-row-span:"+(~ne(r,"span")?te(r,/\d+/):+te(r,/\d+/)-+te(e,/\d+/))+";":M+re(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return te(e.props,/grid-\w+-start/)}))?e:M+re(re(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return re(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(oe(e,t+1)){case 109:if(45!==oe(e,t+4))break;case 102:return re(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Y+(108==oe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~ne(e,"stretch")?je(re(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return re(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,a,s,i){return M+r+":"+n+i+(o?M+r+"-span:"+(a?s:+s-+n)+i:"")+e}));case 4949:if(121===oe(e,t+6))return re(e,":",":"+W)+e;break;case 6444:switch(oe(e,45===oe(e,14)?18:11)){case 120:return re(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(45===oe(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+M+"$2box$3")+e;case 100:return re(e,":",":"+M)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(e,"scroll-","scroll-snap-")+e}return e}function Ne(e,t){for(var r="",n=ie(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Te(e,t,r,n){switch(e.type){case J:if(e.children.length)break;case V:case H:return e.return=e.return||e.value;case q:return"";case Z:return e.return=e.value+"{"+Ne(e.children,n)+"}";case U:e.value=e.props.join(",")}return se(r=Ne(e.children,n))?e.return=e.value+"{"+r+"}":""}function De(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case H:return void(e.return=je(e.value,e.length,r));case Z:return Ne([me(e,{value:re(e.value,"@","@"+W)})],n);case U:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(te(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ne([me(e,{props:[re(t,/:(read-\w+)/,":"+Y+"$1")]})],n);case"::placeholder":return Ne([me(e,{props:[re(t,/:(plac\w+)/,":"+W+"input-$1")]}),me(e,{props:[re(t,/:(plac\w+)/,":"+Y+"$1")]}),me(e,{props:[re(t,/:(plac\w+)/,M+"input-$1")]})],n)}return""}))}}var Fe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ge="undefined"!=typeof window&&"HTMLElement"in window,Le=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),Be=Object.freeze([]),Me=Object.freeze({});var Ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),We=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qe=/(^-|-$)/g;function Ue(e){return e.replace(We,"-").replace(qe,"")}var He=/(a)(d)/gi,Ve=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ze(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Ve(t%52)+r;return(Ve(t%52)+r).replace(He,"$1-$2")}var Je,Ke=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Qe=function(e){return Ke(5381,e)};function Xe(e){return"string"==typeof e&&!0}var et="function"==typeof Symbol&&Symbol.for,tt=et?Symbol.for("react.memo"):60115,rt=et?Symbol.for("react.forward_ref"):60112,nt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ot={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},at={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},st=((Je={})[rt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Je[tt]=at,Je);function it(e){return("type"in(t=e)&&t.type.$$typeof)===tt?at:"$$typeof"in e?st[e.$$typeof]:nt;var t}var ct=Object.defineProperty,ut=Object.getOwnPropertyNames,lt=Object.getOwnPropertySymbols,ft=Object.getOwnPropertyDescriptor,pt=Object.getPrototypeOf,dt=Object.prototype;function ht(e,t,r){if("string"!=typeof t){if(dt){var n=pt(t);n&&n!==dt&&ht(e,n,r)}var o=ut(t);lt&&(o=o.concat(lt(t)));for(var a=it(e),s=it(t),i=0;i<o.length;++i){var c=o[i];if(!(c in ot||r&&r[c]||s&&c in s||a&&c in a)){var u=ft(t,c);try{ct(e,c,u)}catch(l){}}}}return e}function yt(e){return"function"==typeof e}function mt(e){return"object"==typeof e&&"styledComponentId"in e}function vt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function bt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function St(e,t,r){if(void 0===r&&(r=!1),!r&&!bt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=St(e[n],t[n]);else if(bt(t))for(var n in t)e[n]=St(e[n],t[n]);return e}function wt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _t=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw wt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat("/*!sc*/\n");return t},e}(),Ct=new Map,$t=new Map,xt=1,Et=function(e){if(Ct.has(e))return Ct.get(e);for(;$t.has(xt);)xt++;var t=xt++;return Ct.set(e,t),$t.set(t,e),t},Rt=function(e,t){Ct.set(e,t),$t.set(t,e)},kt="style[".concat(ze,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),It=new RegExp("^".concat(ze,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pt=function(e,t,r){for(var n,o=r.split(","),a=0,s=o.length;a<s;a++)(n=o[a])&&e.registerName(t,n)},At=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),o=[],a=0,s=n.length;a<s;a++){var i=n[a].trim();if(i){var c=i.match(It);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(Rt(l,u),Pt(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};var Ot=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(ze))return n}}(r),a=void 0!==o?o.nextSibling:null;n.setAttribute(ze,"active"),n.setAttribute("data-styled-version","6.0.0-rc.3");var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},jt=function(){function e(e){this.element=Ot(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw wt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Nt=function(){function e(e){this.element=Ot(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Tt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Dt=Ge,Ft={isServer:!Ge,useCSSOMInjection:!Le},zt=function(){function e(e,t,r){void 0===e&&(e=Me),void 0===t&&(t={}),this.options=L(L({},Ft),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ge&&Dt&&(Dt=!1,function(e){for(var t=document.querySelectorAll(kt),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(ze)&&(At(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}return e.registerId=function(e){return Et(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(L(L({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new Tt(r):t?new jt(r):new Nt(r),new _t(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Et(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Et(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Et(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,a=(o=r,$t.get(o));if(void 0===a)return"continue";var s=e.names.get(a),i=t.getGroup(r);if(void 0===s||0===i.length)return"continue";var c="".concat(ze,".g").concat(r,'[id="').concat(a,'"]'),u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+="".concat(e,","))})),n+="".concat(i).concat(c,'{content:"').concat(u,'"}').concat("/*!sc*/\n")},a=0;a<r;a++)o(a);return n}(this)},e}(),Gt=/&/g,Lt=/^\s*\/\/.*$/gm;function Bt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Bt(e.children,t)),e}))}var Mt=new zt,Yt=function(e){var t,r,n,o=void 0===e?Me:e,a=o.options,s=void 0===a?Me:a,i=o.plugins,c=void 0===i?Be:i,u=function(e,n,o){return o===r||o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===U&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Gt,r).replace(n,u))})),s.prefix&&l.push(De),l.push(Te);var f=function(e,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(Lt,""),u=ke(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);s.namespace&&(u=Bt(u,s.namespace));var f,p,d,h=[];return Ne(u,(f=l.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})),p=ie(f),function(e,t,r,n){for(var o="",a=0;a<p;a++)o+=f[a](e,t,r,n)||"";return o})),h};return f.hash=c.length?c.reduce((function(e,t){return t.name||wt(15),Ke(e,t.name)}),5381).toString():"",f}(),Wt=G.createContext({shouldForwardProp:void 0,styleSheet:Mt,stylis:Yt});function qt(){return z.useContext(Wt)}Wt.Consumer,G.createContext(void 0);var Ut=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Yt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){throw wt(12,String(r.name))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Yt),this.name+e.hash},e}(),Ht=function(e){return e>="A"&&e<="Z"};function Vt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Ht(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Zt=function(e){return null==e||!1===e||""===e},Jt=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Zt(a)&&(Array.isArray(a)&&a.isCss||yt(a)?n.push("".concat(Vt(o),":"),a,";"):bt(a)?n.push.apply(n,B(B(["".concat(o," {")],Jt(a),!1),["}"],!1)):n.push("".concat(Vt(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Fe||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Kt(e,t,r,n){return Zt(e)?[]:mt(e)?[".".concat(e.styledComponentId)]:yt(e)?!yt(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Kt(e(t),t,r,n):e instanceof Ut?r?(e.inject(r,n),[e.getName(n)]):[e]:bt(e)?Jt(e):Array.isArray(e)?e.flatMap((function(e){return Kt(e,t,r,n)})):[e.toString()];var o}var Qt=Qe("6.0.0-rc.3"),Xt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(yt(r)&&!mt(r))return!1}return!0}(e),this.componentId=t,this.baseHash=Ke(Qt,t),this.baseStyle=r,zt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=vt(n,this.staticRulesId);else{var o=gt(Kt(this.rules,e,t,r)),a=Ze(Ke(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}n=vt(n,a),this.staticRulesId=a}else{for(var i=Ke(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=gt(Kt(l,e,t,r));i=Ke(i,f),c+=f}}if(c){var p=Ze(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=vt(n,p)}}return n},e}(),er=G.createContext(void 0);er.Consumer;var tr={};function rr(e,t,r){var n,o,a=mt(e),s=e,i=!Xe(e),c=t.componentId,u=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Ue(e);tr[r]=(tr[r]||0)+1;var n="".concat(r,"-").concat(function(e){return Ze(Qe(e)>>>0)}("6.0.0-rc.3"+r+tr[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):c,l=t.displayName,f=void 0===l?Xe(o=e)?"styled.".concat(o):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(o),")"):l,p=null!==(n=t.attrs)&&void 0!==n?n:[],d=t.displayName&&t.componentId?"".concat(Ue(t.displayName),"-").concat(t.componentId):t.componentId||u,h=a&&s.attrs?s.attrs.concat(p).filter(Boolean):p,y=t.shouldForwardProp;if(a&&s.shouldForwardProp){var m=s.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(e,t){return m(e,t)&&v(e,t)}}else y=m}var g=new Xt(r,d,a?s.componentStyle:void 0),b=g.isStatic&&0===p.length;function S(e,t){return function(e,t,r,n){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,i=e.foldedComponentIds,c=e.styledComponentId,u=e.target,l=z.useContext(er),f=qt(),p=e.shouldForwardProp||f.shouldForwardProp,d=function(e,t,r){for(var n,o=L(L({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var s=yt(n=e[a])?n(o):n;for(var i in s)o[i]="className"===i?vt(o[i],s[i]):"style"===i?L(L({},o[i]),s[i]):s[i]}return t.className&&(o.className=vt(o.className,t.className)),o}(o,t,function(e,t,r){return void 0===r&&(r=Me),e.theme!==r.theme&&e.theme||t||r.theme}(t,l,s)||Me),h=d.as||u,y={};for(var m in d)void 0===d[m]||"$"===m[0]||"as"===m||"theme"===m||("forwardedAs"===m?y.as=d.forwardedAs:p&&!p(m,h)||(y[m]=d[m]));var v,g,b,S,w=(v=a,g=n,b=d,S=qt(),v.generateAndInjectStyles(g?Me:b,S.styleSheet,S.stylis)),_=vt(i,c);return w&&(_+=" "+w),d.className&&(_+=" "+d.className),y[Xe(h)&&!Ye.has(h)?"class":"className"]=_,y.ref=r,z.createElement(h,y)}(w,e,t,b)}S.displayName=f;var w=G.forwardRef(S);return w.attrs=h,w.componentStyle=g,w.displayName=f,w.shouldForwardProp=y,w.foldedComponentIds=a?vt(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=d,w.target=a?s.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)St(e,o[n],!0);return e}({},s.defaultProps,e):e}}),Object.defineProperty(w,"toString",{value:function(){return".".concat(w.styledComponentId)}}),i&&ht(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function nr(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var or=function(e){return Object.assign(e,{isCss:!0})};function ar(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(yt(e)||bt(e))return or(Kt(nr(Be,B([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Kt(n):or(Kt(nr(n,t)))}function sr(e,t,r){if(void 0===r&&(r=Me),!t)throw wt(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,ar.apply(void 0,B([n],o,!1)))};return n.attrs=function(n){return sr(e,t,L(L({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return sr(e,t,L(L({},r),n))},n}function ir(e){return sr(rr,e)}var cr=ir;Ye.forEach((function(e){cr[e]=ir(e)}));export{G as R,r as a,e as c,t as g,cr as n,z as r};