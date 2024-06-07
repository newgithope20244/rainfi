(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2871,8929],{94184:function(e,t){var n;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var r=classNames.apply(null,n);r&&e.push(r)}}else if("object"===l){if(n.toString===Object.prototype.toString)for(var a in n)o.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(n=(function(){return classNames}).apply(t,[]))&&(e.exports=n)}()},82871:function(e,t,n){"use strict";n.r(t);var o=n(97997),l=n(11720),r=n(94184),a=n.n(r),i=n(78929),s=n(26630),c=n(41664),d=n.n(c),u=n(54306),f=n(12012);t.default=()=>{let{publicKey:e}=(0,u.O)(),[t,n]=(0,l.useState)(!1),[r,c]=(0,l.useState)(!1),[m,p]=(0,l.useState)(0);(0,l.useRef)(null),(0,l.useEffect)(()=>{e&&(0,f.yS)(e).then(e=>{if(e){let e=localStorage.getItem("rainfi-last-closed-timestamp"),t=checkForNewFeatures(e);p(parseInt(e)),t?(n(!0),c(!0)):e||n(!0)}})},[e]);let handleClose=()=>{localStorage.setItem("rainfi-last-closed-timestamp",Date.now().toString()),n(!1)},checkForNewFeatures=e=>v.some(t=>new Date(t.date).getTime()>parseInt(e)),v=[{title:"Lenders: Auto swap collateral on tokens loans liquidated!",date:"2024-02-23",description:"We will now automatically swap the collateral of a loan and re-inject it in the pool when a liquidation happens. Please check the FAQ for more information.",link:"/faq"},{title:"New Droplets Live!",date:"2024-01-12",description:"We enhanced the droplets calculation to be more fair and more interesting for our users.",link:"/droplets"},{title:"Notifications Live (beta)",date:"2024-01-09",description:"You can now subscribe to notifications to be notified about event regarding your pool or your loans, please note that it's still in beta and some fail can happen.",link:"/lend"},{title:"New Pool page",date:"2024-01-09",description:"The pool page has been redesigned to be more user friendly and to include more information, as well as the pool creation/update.",link:"/lend"},{title:"All Pools page",date:"2024-01-09",description:"We added a page to show all the active pools on our protocol.",link:"/pools"},{title:"New Droplets Leaderboard",date:"2023-12-10",description:"We enhanced the droplets section to also include a leaderboard.",link:"/droplets"},{title:"Collateral Value added to loan activity",date:"2023-12-09",description:"Your loan activity tab now display all your loans, both as lender and borrower, and includes the collateral value of your loans. No need to do the math yourself anymore!",link:"/dashboard/activity"}];return(0,o.tZ)("div",{className:a()("table relative"),children:t&&(0,o.tZ)("div",{children:(0,o.tZ)(i.Z,{center:!0,open:t,onClose:()=>n(!1),showCloseIcon:!1,classNames:{overlay:"customOverlayBlur"},children:(0,o.tZ)("div",{className:"bg-white dark:bg-[#090b11] overflow-hidden sm:max-w-[500px]",children:(0,o.BX)("div",{className:"px-4 pb-4 py-2",children:[(0,o.tZ)("h2",{className:"mb-5 text-black dark:text-gray-100 font-bold",children:"Recent features"}),(0,o.tZ)("div",{className:"overflow-y-auto h-[400px] mb-5 md:mb-10 bg-[#eafaff] dark:bg-secondary-dark p-2 rounded-xl",children:v.map((e,t)=>(0,o.tZ)("div",{className:"group cursor-pointer flex items-center justify-center p-3 rounded-2xl gap-2",children:(0,o.BX)("div",{className:"font-bold text-black dark:text-gray-200 gap-2 text-left",children:[(0,o.BX)("div",{className:"flex justify-between",children:[(0,o.tZ)("p",{className:"pb-2 text-yellow-500 dark:text-yellow-500 font-bold text-left",children:e.title}),(0,o.BX)("p",{className:"pb-2 text-gray-600 dark:text-gray-400 font-bold text-left",children:[(0,s.VG)(new Date(e.date))," ago"]})]}),(0,o.tZ)("p",{className:"flex justify-center items-center text-gray-700 dark:text-gray-400",children:e.description}),(0,o.tZ)("p",{className:"text-main_2 text-[11px] lg:text-[13px]",children:(0,o.tZ)(d(),{href:e.link,rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Click here to see it!"})}),(null==v?void 0:v.length)!==t+1&&(0,o.tZ)("div",{className:"border-[1px] mt-4 border-gray-300 dark:border-gray-700 mx-8"})]})},"".concat(e.date," - ").concat(t)))}),(0,o.BX)("p",{className:"text-main_2 text-[11px] lg:text-[13px]",children:[" By interacting with Rain.fi and it’s protocol you agree to our "," ",(0,o.tZ)(d(),{href:"/legal",target:"_blank",rel:"noopener noreferrer",children:(0,o.tZ)("button",{className:"text-blue-500 hover:underline",children:"Terms & Conditions."})})]}),(0,o.BX)("div",{className:"p-2 text-center flex flex-col justify-center",children:[(0,o.tZ)("button",{onClick:()=>{r?handleClose():n(!1)},className:"p-3 mx-20 text-base action-button rounded-lg text-white",children:"Close"}),(0,o.BX)("p",{onClick:()=>c(e=>!e),className:"mt-3 cursor-pointer text-gray-800 text-[11px] lg:text-[13px] flex items-center justify-center gap-2",children:[(0,o.tZ)("label",{className:"flex items-center",children:(0,o.tZ)("input",{type:"checkbox",className:"h-5 w-5 focus:ring-0 focus:outline-none rounded-md",checked:r,onChange:()=>null})}),"Hide until next update."]})]})]})})})})})}},70743:function(e){!function(t){var n,o,l=!1;function on(e){if("undefined"!=typeof document&&!l){var t=document.documentElement;o=window.pageYOffset,document.documentElement.scrollHeight>window.innerHeight?t.style.width="calc(100% - "+function(){if(void 0!==n)return n;var e=document.documentElement,t=document.createElement("div");return t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),e.appendChild(t),n=t.offsetWidth-t.clientWidth,e.removeChild(t),n}()+"px)":t.style.width="100%",t.style.position="fixed",t.style.top=-o+"px",t.style.overflow="hidden",l=!0}}function off(){if("undefined"!=typeof document&&l){var e=document.documentElement;e.style.width="",e.style.position="",e.style.top="",e.style.overflow="",window.scroll(0,o),l=!1}}var r={on:on,off:off,toggle:function(){if(l){off();return}on()}};void 0!==e.exports?e.exports=r:t.noScroll=r}(this)},78929:function(e,t,n){"use strict";var o=n(11720),l=n(94184),r=n.n(l),a=n(70743),i=n.n(a);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n(34155);var CloseIcon=function(e){var t=e.classes,n=e.classNames,l=e.styles,a=e.id,i=e.closeIcon,s=e.onClickCloseIcon;return o.default.createElement("button",{id:a,className:r()(t.closeButton,null==n?void 0:n.closeButton),style:null==l?void 0:l.closeButton,onClick:s,"data-testid":"close-button"},i||o.default.createElement("svg",{className:null==n?void 0:n.closeIcon,style:null==l?void 0:l.closeIcon,xmlns:"http://www.w3.org/2000/svg",width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},o.default.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},s=[],c={modals:function(){return s},add:function(e,t){-1===s.findIndex(function(t){return t.element===e})&&s.push({element:e,blockScroll:t})},remove:function(e){var t=s.findIndex(function(t){return t.element===e});-1!==t&&s.splice(t,1)},isTopModal:function(e){var t;return!!s.length&&(null===(t=s[s.length-1])||void 0===t?void 0:t.element)===e}},d="undefined"!=typeof window,blockNoScroll=function(){i().on()},unblockNoScroll=function(){0===c.modals().filter(function(e){return e.blockScroll}).length&&i().off()},u=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function getAllTabbingElements(e){for(var t=e.querySelectorAll(u.join(",")),n=[],o=0;o<t.length;o++){var l=t[o];!l.disabled&&function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?e.getAttribute("contentEditable")?0:e.tabIndex:t}(l)>-1&&!(null===l.offsetParent||"hidden"===getComputedStyle(l).visibility)&&n.push(l)}return n}var FocusTrap=function(e){var t=e.container,n=(0,o.useRef)();return(0,o.useEffect)(function(){var handleKeyEvent=function(e){(null==t?void 0:t.current)&&function(e,t){if(e&&"Tab"===e.key&&t&&t.contains&&t.contains(e.target)){var n=getAllTabbingElements(t),o=n[0],l=n[n.length-1];e.shiftKey&&e.target===o?(l.focus(),e.preventDefault()):e.shiftKey||e.target!==l||(o.focus(),e.preventDefault())}}(e,t.current)};if(d&&document.addEventListener("keydown",handleKeyEvent),d&&(null==t?void 0:t.current)){var e=getAllTabbingElements(t.current);e[0]&&(-1!==u.findIndex(function(e){var t;return null===(t=document.activeElement)||void 0===t?void 0:t.matches(e)})&&(n.current=document.activeElement),e[0].focus())}return function(){if(d){var e;document.removeEventListener("keydown",handleKeyEvent),null===(e=n.current)||void 0===e||e.focus()}}},[t]),null},f={overlay:"react-responsive-modal-overlay",modal:"react-responsive-modal-modal",modalCenter:"react-responsive-modal-modalCenter",closeButton:"react-responsive-modal-closeButton",animationIn:"react-responsive-modal-fadeIn",animationOut:"react-responsive-modal-fadeOut"};t.Z=function(e){var t,n,l=e.open,a=e.center,i=e.blockScroll,s=void 0===i||i,u=e.closeOnEsc,m=void 0===u||u,p=e.closeOnOverlayClick,v=void 0===p||p,h=e.container,g=e.showCloseIcon,y=void 0===g||g,b=e.closeIconId,x=e.closeIcon,w=e.focusTrapped,k=void 0===w||w,E=e.animationDuration,N=e.classNames,C=e.styles,P=e.role,I=e.ariaDescribedby,M=e.ariaLabelledby,O=e.modalId,j=e.onClose,S=e.onEscKeyDown,Z=e.onOverlayClick,T=e.onAnimationEnd,A=e.children,B=(0,o.useRef)(null),L=(0,o.useRef)(null),D=(0,o.useRef)(null);null===D.current&&d&&(D.current=document.createElement("div"));var K=(0,o.useState)(l),W=K[0],_=K[1],handleOpen=function(){c.add(D.current,s),s&&blockNoScroll(),!D.current||h||document.body.contains(D.current)||document.body.appendChild(D.current),document.addEventListener("keydown",handleKeydown)},handleClose=function(){c.remove(D.current),s&&unblockNoScroll(),D.current&&!h&&document.body.contains(D.current)&&document.body.removeChild(D.current),document.removeEventListener("keydown",handleKeydown)},handleKeydown=function(e){27===e.keyCode&&c.isTopModal(D.current)&&(S&&S(e),m&&j())};(0,o.useEffect)(function(){return l&&handleOpen(),function(){W&&handleClose()}},[]),(0,o.useEffect)(function(){l&&!W&&(_(!0),handleOpen())},[l]);var handleModalEvent=function(){L.current=!1};return W?o.default.createPortal(o.default.createElement("div",{style:_extends({animation:(l?null!==(t=null==N?void 0:N.animationIn)&&void 0!==t?t:f.animationIn:null!==(n=null==N?void 0:N.animationOut)&&void 0!==n?n:f.animationOut)+" "+(void 0===E?500:E)+"ms"},null==C?void 0:C.overlay),className:r()(f.overlay,null==N?void 0:N.overlay),onClick:function(e){if(null===L.current&&(L.current=!0),!L.current){L.current=null;return}Z&&Z(e),v&&j(),L.current=null},onAnimationEnd:function(){l||(_(!1),handleClose()),s&&unblockNoScroll(),T&&T()},"data-testid":"overlay"},o.default.createElement("div",{ref:B,className:r()(f.modal,a&&f.modalCenter,null==N?void 0:N.modal),style:null==C?void 0:C.modal,onMouseDown:handleModalEvent,onMouseUp:handleModalEvent,onClick:handleModalEvent,id:O,role:void 0===P?"dialog":P,"aria-modal":"true","aria-labelledby":M,"aria-describedby":I,"data-testid":"modal"},k&&o.default.createElement(FocusTrap,{container:B}),A,y&&o.default.createElement(CloseIcon,{classes:f,classNames:N,styles:C,closeIcon:x,onClickCloseIcon:function(){j()},id:b}))),h||D.current):null}},54306:function(e,t,n){"use strict";n.d(t,{O:function(){return useWallet},z:function(){return a}});var o=n(11720);let l=[],r={autoConnect:!1,connecting:!1,connected:!1,disconnecting:!1,select(){logMissingProviderError("call","select")},connect:()=>Promise.reject(logMissingProviderError("call","connect")),disconnect:()=>Promise.reject(logMissingProviderError("call","disconnect")),sendTransaction:()=>Promise.reject(logMissingProviderError("call","sendTransaction")),signTransaction:()=>Promise.reject(logMissingProviderError("call","signTransaction")),signAllTransactions:()=>Promise.reject(logMissingProviderError("call","signAllTransactions")),signMessage:()=>Promise.reject(logMissingProviderError("call","signMessage")),signIn:()=>Promise.reject(logMissingProviderError("call","signIn"))};function logMissingProviderError(e,t){let n=Error(`You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);return console.error(n),n}Object.defineProperty(r,"wallets",{get:()=>(logMissingProviderError("read","wallets"),l)}),Object.defineProperty(r,"wallet",{get:()=>(logMissingProviderError("read","wallet"),null)}),Object.defineProperty(r,"publicKey",{get:()=>(logMissingProviderError("read","publicKey"),null)});let a=(0,o.createContext)(r);function useWallet(){return(0,o.useContext)(a)}}}]);