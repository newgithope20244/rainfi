"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{50246:function(e,r,a){var t=a(11720),__assign=function(){return(__assign=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function __spreadArray(e,r,a){if(a||2==arguments.length)for(var t,n=0,i=r.length;n<i;n++)!t&&n in r||(t||(t=Array.prototype.slice.call(r,0,n)),t[n]=r[n]);return e.concat(t||r)}var escapeRegExp=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},n={k:1e3,m:1e6,b:1e9},parseAbbrValue=function(e,r){void 0===r&&(r=".");var a=RegExp("(\\d+("+escapeRegExp(r)+"\\d*)?)([kmb])$","i"),t=e.match(a);if(t){var i=t[1],o=n[t[3].toLowerCase()];return Number(i.replace(r,"."))*o}},removeSeparators=function(e,r){void 0===r&&(r=",");var a=RegExp(escapeRegExp(r),"g");return e.replace(a,"")},removeInvalidChars=function(e,r){var a=RegExp("[^\\d"+escapeRegExp(r.join(""))+"]","gi");return e.replace(a,"")},cleanValue=function(e){var r=e.value,a=e.groupSeparator,t=void 0===a?",":a,n=e.decimalSeparator,i=void 0===n?".":n,o=e.allowDecimals,l=e.decimalsLimit,u=void 0===l?2:l,s=e.allowNegativeValue,c=e.disableAbbreviations,p=void 0!==c&&c,d=e.prefix,f=void 0===d?"":d,g=e.transformRawValue,v=(void 0===g?function(e){return e}:g)(r);if("-"===v)return v;var m=p?[]:["k","m","b"],_=RegExp("((^|\\D)-\\d)|(-"+escapeRegExp(f)+")").test(v),S=RegExp("(\\d+)-?"+escapeRegExp(f)).exec(r)||[],y=S[0],x=S[1],b=removeInvalidChars(removeSeparators(f?y?v.replace(y,"").concat(x):v.replace(f,""):v,t),__spreadArray([t,i],m)),h=b;if(!p){if(m.some(function(e){return e===b.toLowerCase().replace(i,"")}))return"";var w=parseAbbrValue(b,i);w&&(h=String(w))}var E=_&&(void 0===s||s)?"-":"";if(i&&h.includes(i)){var V=b.split(i),R=V[0],A=V[1],C=u&&A?A.slice(0,u):A;return""+E+R+(void 0===o||o?""+i+C:"")}return""+E+h},fixedDecimalValue=function(e,r,a){if(void 0!==a&&e.length>1){if(0===a)return e.replace(r,"");if(e.includes(r)){var t=e.split(r),n=t[0],i=t[1];if(i.length===a)return e;if(i.length>a)return""+n+r+i.slice(0,a)}var o=e.length>a?RegExp("(\\d+)(\\d{"+a+"})"):RegExp("(\\d)(\\d+)"),l=e.match(o);if(l){var n=l[1],i=l[2];return""+n+r+i}}return e},getSuffix=function(e,r){var a=r.groupSeparator,t=r.decimalSeparator,n=RegExp("\\d([^"+escapeRegExp(void 0===a?",":a)+escapeRegExp(void 0===t?".":t)+"0-9]+)"),i=e.match(n);return i?i[1]:void 0},formatValue=function(e){var r=e.value,a=e.decimalSeparator,t=e.intlConfig,n=e.decimalScale,i=e.prefix,o=void 0===i?"":i,l=e.suffix,u=void 0===l?"":l;if(""===r||void 0===r)return"";if("-"===r)return"-";var s=RegExp("^\\d?-"+(o?escapeRegExp(o)+"?":"")+"\\d").test(r),c="."!==a?replaceDecimalSeparator(r,a,s):r,p={minimumFractionDigits:n||0,maximumFractionDigits:20},d=replaceParts((t?new Intl.NumberFormat(t.locale,t.currency?__assign(__assign({},p),{style:"currency",currency:t.currency}):p):new Intl.NumberFormat(void 0,p)).formatToParts(Number(c)),e),f=getSuffix(d,__assign({},e)),g=r.slice(-1)===a?a:"",v=(c.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return(void 0===n&&v&&a&&(d=d.includes(a)?d.replace(RegExp("(\\d+)("+escapeRegExp(a)+")(\\d+)","g"),"$1$2"+v):f&&!u?d.replace(f,""+a+v+f):""+d+a+v),u&&g)?""+d+g+u:f&&g?d.replace(f,""+g+f):f&&u?d.replace(f,""+g+u):[d,g,u].join("")},replaceDecimalSeparator=function(e,r,a){var t=e;return r&&"."!==r&&(t=t.replace(RegExp(escapeRegExp(r),"g"),"."),a&&"-"===r&&(t="-"+t.slice(1))),t},replaceParts=function(e,r){var a=r.prefix,t=r.groupSeparator,n=r.decimalSeparator,i=r.decimalScale,o=r.disableGroupSeparators,l=void 0!==o&&o;return e.reduce(function(e,r,o){var u=r.type,s=r.value;return 0===o&&a?"minusSign"===u?[s,a]:"currency"===u?__spreadArray(__spreadArray([],e),[a]):[a,s]:"currency"===u?a?e:__spreadArray(__spreadArray([],e),[s]):"group"===u?l?e:__spreadArray(__spreadArray([],e),[void 0!==t?t:s]):"decimal"===u?void 0!==i&&0===i?e:__spreadArray(__spreadArray([],e),[void 0!==n?n:s]):"fraction"===u?__spreadArray(__spreadArray([],e),[void 0!==i?s.slice(0,i):s]):__spreadArray(__spreadArray([],e),[s])},[""]).join("")},i={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},getLocaleConfig=function(e){var r=e||{},a=r.locale,t=r.currency;return(a?new Intl.NumberFormat(a,t?{currency:t,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce(function(e,r,a){return"currency"===r.type?0===a?__assign(__assign({},e),{currencySymbol:r.value,prefix:r.value}):__assign(__assign({},e),{currencySymbol:r.value,suffix:r.value}):"group"===r.type?__assign(__assign({},e),{groupSeparator:r.value}):"decimal"===r.type?__assign(__assign({},e),{decimalSeparator:r.value}):e},i)},isNumber=function(e){return RegExp(/\d/,"gi").test(e)},padTrimValue=function(e,r,a){if(void 0===r&&(r="."),void 0===a||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var t=e.split(r),n=t[0],i=t[1];if(0===a)return n;var o=i||"";if(o.length<a)for(;o.length<a;)o+="0";else o=o.slice(0,a);return""+n+r+o},repositionCursor=function(e){var r=e.selectionStart,a=e.value,t=e.lastKeyStroke,n=e.stateValue,i=e.groupSeparator,o=r,l=a;if(n&&o){var u=a.split("");return"Backspace"===t&&n[o]===i&&(u.splice(o-1,1),o-=1),"Delete"===t&&n[o]===i&&(u.splice(o,1),o+=1),{modifiedValue:l=u.join(""),cursorPosition:o}}return{modifiedValue:l,cursorPosition:r}},o=(0,t.forwardRef)(function(e,r){var a=e.allowDecimals,n=e.allowNegativeValue,i=e.id,o=e.name,l=e.className,u=e.customInput,s=e.decimalsLimit,c=e.defaultValue,p=e.disabled,d=e.maxLength,f=e.value,g=e.onValueChange,v=e.fixedDecimalLength,m=e.placeholder,_=e.decimalScale,S=e.prefix,y=e.suffix,x=e.intlConfig,b=e.step,h=e.min,w=e.max,E=e.disableGroupSeparators,V=void 0!==E&&E,R=e.disableAbbreviations,A=e.decimalSeparator,C=e.groupSeparator,D=e.onChange,N=e.onFocus,F=e.onBlur,k=e.onKeyDown,L=e.onKeyUp,O=e.transformRawValue,I=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)0>r.indexOf(t[n])&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a}(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(A&&isNumber(A))throw Error("decimalSeparator cannot be a number");if(C&&isNumber(C))throw Error("groupSeparator cannot be a number");var P=(0,t.useMemo)(function(){return getLocaleConfig(x)},[x]),j=A||P.decimalSeparator||"",K=C||P.groupSeparator||"";if(j&&K&&j===K&&!1===V)throw Error("decimalSeparator cannot be the same as groupSeparator");var U={decimalSeparator:j,groupSeparator:K,disableGroupSeparators:V,intlConfig:x,prefix:S||P.prefix,suffix:y},T={decimalSeparator:j,groupSeparator:K,allowDecimals:void 0===a||a,decimalsLimit:s||v||2,allowNegativeValue:void 0===n||n,disableAbbreviations:void 0!==R&&R,prefix:S||P.prefix,transformRawValue:O},$=null!=c?formatValue(__assign(__assign({},U),{decimalScale:_,value:String(c)})):null!=f?formatValue(__assign(__assign({},U),{decimalScale:_,value:String(f)})):"",B=(0,t.useState)($),G=B[0],M=B[1],H=(0,t.useState)(!1),Z=H[0],q=H[1],z=(0,t.useState)(0),J=z[0],Q=z[1],W=(0,t.useState)(0),X=W[0],Y=W[1],ee=(0,t.useState)(null),er=ee[0],ea=ee[1],et=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,function(){return et.current});var processChange=function(e,r){q(!0);var a=repositionCursor({selectionStart:r,value:e,lastKeyStroke:er,stateValue:G,groupSeparator:K}),t=a.modifiedValue,n=a.cursorPosition,i=cleanValue(__assign({value:t},T));if(!d||!(i.replace(/-/g,"").length>d)){if(""===i||"-"===i||i===j){g&&g(void 0,o,{float:null,formatted:"",value:""}),M(i),Q(1);return}var l=parseFloat(j?i.replace(j,"."):i),u=formatValue(__assign({value:i},U));if(null!=n){var s=n+(u.length-e.length);Q(s=s<=0?S?S.length:0:s),Y(X+1)}M(u),g&&g(i,o,{float:l,formatted:u,value:i})}};(0,t.useEffect)(function(){Z&&"-"!==G&&et.current&&document.activeElement===et.current&&et.current.setSelectionRange(J,J)},[G,J,et,Z,X]);var en=__assign({type:"text",inputMode:"decimal",id:i,name:o,className:l,onChange:function(e){var r=e.target;processChange(r.value,r.selectionStart),D&&D(e)},onBlur:function(e){var r=e.target.value,a=cleanValue(__assign({value:r},T));if("-"===a||a===j||!a){M(""),F&&F(e);return}var t=padTrimValue(fixedDecimalValue(a,j,v),j,void 0!==_?_:v),n=parseFloat(t.replace(j,".")),i=formatValue(__assign(__assign({},U),{value:t}));g&&g(t,o,{float:n,formatted:i,value:t}),M(i),F&&F(e)},onFocus:function(e){return N&&N(e),G?G.length:0},onKeyDown:function(e){var r=e.key;if(ea(r),b&&("ArrowUp"===r||"ArrowDown"===r)){e.preventDefault(),Q(G.length);var a=parseFloat(null!=f?String(f).replace(j,"."):cleanValue(__assign({value:G},T)))||0,t="ArrowUp"===r?a+b:a-b;if(void 0!==h&&t<h||void 0!==w&&t>w)return;var n=String(b).includes(".")?Number(String(b).split(".")[1].length):void 0;processChange(String(n?t.toFixed(n):t).replace(".",j))}k&&k(e)},onKeyUp:function(e){var r=e.key,a=e.currentTarget.selectionStart;if("ArrowUp"!==r&&"ArrowDown"!==r&&"-"!==G){var t=getSuffix(G,{groupSeparator:K,decimalSeparator:j});if(t&&a&&a>G.length-t.length&&et.current){var n=G.length-t.length;et.current.setSelectionRange(n,n)}}L&&L(e)},placeholder:m,disabled:void 0!==p&&p,value:null==f||"-"===G||j&&G===j?G:formatValue(__assign(__assign({},U),{decimalScale:Z?void 0:_,value:String(f)})),ref:et},I);return u?t.default.createElement(u,__assign({},en)):t.default.createElement("input",__assign({},en))});o.displayName="CurrencyInput",r.Z=o}}]);