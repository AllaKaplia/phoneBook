"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[493],{5706:function(e,t,r){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return ze}});var a=r(2791),i=r.t(a,2),o=r(9791);var s=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=Math.abs,u=String.fromCharCode,l=Object.assign;function f(e){return e.trim()}function p(e,t,r){return e.replace(t,r)}function d(e,t){return e.indexOf(t)}function h(e,t){return 0|e.charCodeAt(t)}function v(e,t,r){return e.slice(t,r)}function m(e){return e.length}function g(e){return e.length}function y(e,t){return t.push(e),e}var b=1,w=1,k=0,_=0,x=0,C="";function $(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:b,column:w,length:o,return:""}}function A(e,t){return l($("",null,null,"",null,null,0),e,{length:-e.length},t)}function S(){return x=_>0?h(C,--_):0,w--,10===x&&(w=1,b--),x}function E(){return x=_<k?h(C,_++):0,w++,10===x&&(w=1,b++),x}function O(){return h(C,_)}function P(){return _}function j(e,t){return v(C,e,t)}function N(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z(e){return b=w=1,k=m(C=e),_=0,[]}function R(e){return C="",e}function G(e){return f(j(_-1,q(91===e?e+2:40===e?e+1:e)))}function I(e){for(;(x=O())&&x<33;)E();return N(e)>2||N(x)>3?"":" "}function T(e,t){for(;--t&&E()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return j(e,P()+(t<6&&32==O()&&32==E()))}function q(e){for(;E();)switch(x){case e:return _;case 34:case 39:34!==e&&39!==e&&q(x);break;case 40:41===e&&q(e);break;case 92:E()}return _}function F(e,t){for(;E()&&e+x!==57&&(e+x!==84||47!==O()););return"/*"+j(t,_-1)+"*"+u(47===e?e:E())}function M(e){for(;!N(O());)E();return j(e,_)}var W="-ms-",L="-moz-",Z="-webkit-",D="comm",H="rule",B="decl",U="@keyframes";function J(e,t){for(var r="",n=g(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function K(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case B:return e.return=e.return||e.value;case D:return"";case U:return e.return=e.value+"{"+J(e.children,n)+"}";case H:e.value=e.props.join(",")}return m(r=J(e.children,n))?e.return=e.value+"{"+r+"}":""}function Q(e){return R(V("",null,null,null,[""],e=z(e),0,[0],e))}function V(e,t,r,n,a,i,o,s,c){for(var l=0,f=0,v=o,g=0,b=0,w=0,k=1,_=1,x=1,C=0,$="",A=a,j=i,N=n,z=$;_;)switch(w=C,C=E()){case 40:if(108!=w&&58==h(z,v-1)){-1!=d(z+=p(G(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:z+=G(C);break;case 9:case 10:case 13:case 32:z+=I(w);break;case 92:z+=T(P()-1,7);continue;case 47:switch(O()){case 42:case 47:y(Y(F(E(),P()),t,r),c);break;default:z+="/"}break;case 123*k:s[l++]=m(z)*x;case 125*k:case 59:case 0:switch(C){case 0:case 125:_=0;case 59+f:-1==x&&(z=p(z,/\f/g,"")),b>0&&m(z)-v&&y(b>32?ee(z+";",n,r,v-1):ee(p(z," ","")+";",n,r,v-2),c);break;case 59:z+=";";default:if(y(N=X(z,t,r,l,f,a,s,$,A=[],j=[],v),i),123===C)if(0===f)V(z,t,N,N,A,i,v,s,j);else switch(99===g&&110===h(z,3)?100:g){case 100:case 108:case 109:case 115:V(e,N,N,n&&y(X(e,N,N,0,0,a,s,$,a,A=[],v),j),a,j,v,s,n?A:j);break;default:V(z,N,N,N,[""],j,0,s,j)}}l=f=b=0,k=x=1,$=z="",v=o;break;case 58:v=1+m(z),b=w;default:if(k<1)if(123==C)--k;else if(125==C&&0==k++&&125==S())continue;switch(z+=u(C),C*k){case 38:x=f>0?1:(z+="\f",-1);break;case 44:s[l++]=(m(z)-1)*x,x=1;break;case 64:45===O()&&(z+=G(E())),g=O(),f=v=m($=z+=M(P())),C++;break;case 45:45===w&&2==m(z)&&(k=0)}}return i}function X(e,t,r,n,a,i,o,s,u,l,d){for(var h=a-1,m=0===a?i:[""],y=g(m),b=0,w=0,k=0;b<n;++b)for(var _=0,x=v(e,h+1,h=c(w=o[b])),C=e;_<y;++_)(C=f(w>0?m[_]+" "+x:p(x,/&\f/g,m[_])))&&(u[k++]=C);return $(e,t,r,0===a?H:s,u,l,d)}function Y(e,t,r){return $(e,t,r,D,u(x),v(e,2,-2),0)}function ee(e,t,r,n){return $(e,t,r,B,v(e,0,n),v(e,n+1,-1),n)}var te=function(e,t,r){for(var n=0,a=0;n=a,a=O(),38===n&&12===a&&(t[r]=1),!N(a);)E();return j(e,_)},re=function(e,t){return R(function(e,t){var r=-1,n=44;do{switch(N(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=te(_-1,t,r);break;case 2:e[r]+=G(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=u(n)}}while(n=E());return e}(z(e),t))},ne=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(r))&&!n){ne.set(e,!0);for(var a=[],i=re(t,a),o=r.props,s=0,c=0;s<i.length;s++)for(var u=0;u<o.length;u++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[u]):o[u]+" "+i[s]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function oe(e,t){switch(function(e,t){return 45^h(e,0)?(((t<<2^h(e,0))<<2^h(e,1))<<2^h(e,2))<<2^h(e,3):0}(e,t)){case 5103:return"-webkit-print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+L+e+W+e+e;case 6828:case 4268:return Z+e+W+e+e;case 6165:return Z+e+W+"flex-"+e+e;case 5187:return Z+e+p(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return Z+e+W+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return Z+e+W+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+W+p(e,"shrink","negative")+e;case 5292:return Z+e+W+p(e,"basis","preferred-size")+e;case 6060:return"-webkit-box-"+p(e,"-grow","")+Z+e+W+p(e,"grow","positive")+e;case 4554:return Z+p(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,"-webkit-$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-t>6)switch(h(e,t+1)){case 109:if(45!==h(e,t+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==h(e,t+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?oe(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==h(e,t+1))break;case 6444:switch(h(e,m(e)-3-(~d(e,"!important")&&10))){case 107:return p(e,":",":-webkit-")+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===h(e,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+e}break;case 5936:switch(h(e,t+11)){case 114:return Z+e+W+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+W+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+W+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+W+e+e}return e}var se=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=oe(e.value,e.length);break;case U:return J([A(e,{value:p(e.value,"@","@-webkit-")})],n);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([A(e,{props:[p(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return J([A(e,{props:[p(t,/:(plac\w+)/,":-webkit-input-$1")]}),A(e,{props:[p(t,/:(plac\w+)/,":-moz-$1")]}),A(e,{props:[p(t,/:(plac\w+)/,"-ms-input-$1")]})],n)}return""}))}}],ce=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||se;var a,i,o={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;c.push(e)}));var u,l,f=[K,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],p=function(e){var t=g(e);return function(r,n,a,i){for(var o="",s=0;s<t;s++)o+=e[s](r,n,a,i)||"";return o}}([ae,ie].concat(n,f));i=function(e,t,r,n){u=r,J(Q(e?e+"{"+t.styles+"}":t.styles),p),n&&(d.inserted[t.name]=!0)};var d={key:t,sheet:new s({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return d.sheet.hydrate(c),d};var ue={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le=r(9797),fe=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,de=function(e){return 45===e.charCodeAt(1)},he=function(e){return null!=e&&"boolean"!==typeof e},ve=(0,le.Z)((function(e){return de(e)?e:e.replace(fe,"-$&").toLowerCase()})),me=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(pe,(function(e,t,r){return ye={name:t,styles:r,next:ye},t}))}return 1===ue[e]||de(e)||"number"!==typeof t||0===t?t:t+"px"};function ge(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ye={name:r.name,styles:r.styles,next:ye},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ye={name:n.name,styles:n.styles,next:ye},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=ge(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!==typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":he(o)&&(n+=ve(i)+":"+me(i,o)+";");else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=ge(e,t,o);switch(i){case"animation":case"animationName":n+=ve(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)he(o[c])&&(n+=ve(i)+":"+me(i,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=ye,i=r(e);return ye=a,ge(e,t,i)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var ye,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var we=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ye=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=ge(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=ge(r,t,e[o]),n&&(a+=i[o]);be.lastIndex=0;for(var s,c="";null!==(s=be.exec(a));)c+="-"+s[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+c;return{name:u,styles:a,next:ye}},ke=!!i.useInsertionEffect&&i.useInsertionEffect,_e=ke||function(e){return e()},xe=(ke||a.useLayoutEffect,a.createContext("undefined"!==typeof HTMLElement?ce({key:"css"}):null));xe.Provider;var Ce=function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(xe);return e(t,n,r)}))};var $e=a.createContext({});function Ae(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var Se=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},Ee=o.Z,Oe=function(e){return"theme"!==e},Pe=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?Ee:Oe},je=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},Ne=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return Se(t,r,n),_e((function(){return function(e,t,r){Se(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)})),null},ze=function e(t,r){var i,o,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(i=r.label,o=r.target);var u=je(t,r,s),l=u||Pe(c),f=!l("as");return function(){var p=arguments,d=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&d.push("label:"+i+";"),null==p[0]||void 0===p[0].raw)d.push.apply(d,p);else{0,d.push(p[0][0]);for(var h=p.length,v=1;v<h;v++)d.push(p[v],p[0][v])}var m=Ce((function(e,t,r){var n=f&&e.as||c,i="",s=[],p=e;if(null==e.theme){for(var h in p={},e)p[h]=e[h];p.theme=a.useContext($e)}"string"===typeof e.className?i=Ae(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var v=we(d.concat(s),t.registered,p);i+=t.key+"-"+v.name,void 0!==o&&(i+=" "+o);var m=f&&void 0===u?Pe(n):l,g={};for(var y in e)f&&"as"===y||m(y)&&(g[y]=e[y]);return g.className=i,g.ref=r,a.createElement(a.Fragment,null,a.createElement(Ne,{cache:t,serialized:v,isStringTag:"string"===typeof n}),a.createElement(n,g))}));return m.displayName=void 0!==i?i:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=c,m.__emotion_styles=d,m.__emotion_forwardProp=u,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(t,a){return e(t,n({},r,a,{shouldForwardProp:je(m,a,!0)})).apply(void 0,d)},m}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){ze[e]=ze(e)}))},6916:function(e,t,r){r.d(t,{P1:function(){return c}});var n="NOT_FOUND";var a=function(e,t){return e===t};function i(e,t){var r="object"===typeof t?t:{equalityCheck:t},i=r.equalityCheck,o=void 0===i?a:i,s=r.maxSize,c=void 0===s?1:s,u=r.resultEqualityCheck,l=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,a=0;a<n;a++)if(!e(t[a],r[a]))return!1;return!0}}(o),f=1===c?function(e){var t;return{get:function(r){return t&&e(t.key,r)?t.value:n},put:function(e,r){t={key:e,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var r=[];function a(e){var a=r.findIndex((function(r){return t(e,r.key)}));if(a>-1){var i=r[a];return a>0&&(r.splice(a,1),r.unshift(i)),i.value}return n}return{get:a,put:function(t,i){a(t)===n&&(r.unshift({key:t,value:i}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(c,l);function p(){var t=f.get(arguments);if(t===n){if(t=e.apply(null,arguments),u){var r=f.getEntries(),a=r.find((function(e){return u(e.value,t)}));a&&(t=a.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function s(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var i,s=0,c={memoizeOptions:void 0},u=n.pop();if("object"===typeof u&&(c=u,u=n.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,f=l.memoizeOptions,p=void 0===f?r:f,d=Array.isArray(p)?p:[p],h=o(n),v=e.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],t=h.length,r=0;r<t;r++)e.push(h[r].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:v,dependencies:h,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),m};return a}var c=s(i)}}]);
//# sourceMappingURL=493.ae5a5374.chunk.js.map