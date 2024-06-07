"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9142,3217],{15347:function(e,t,a){var r,n=a(11720);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.Z=function(e){return n.createElement("svg",_extends({viewBox:"0 0 33 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=n.createElement("path",{d:"M27.284 2.081A26.413 26.413 0 0 0 20.83.113a.099.099 0 0 0-.104.048 18.004 18.004 0 0 0-.803 1.625 24.524 24.524 0 0 0-7.248 0A16.315 16.315 0 0 0 11.86.16a.101.101 0 0 0-.105-.05 26.393 26.393 0 0 0-6.452 1.97.092.092 0 0 0-.043.035C1.151 8.159.024 14.053.577 19.873a.106.106 0 0 0 .041.073 26.456 26.456 0 0 0 7.917 3.936.103.103 0 0 0 .11-.034 18.279 18.279 0 0 0 1.62-2.593.099.099 0 0 0-.019-.116.096.096 0 0 0-.035-.021c-.854-.322-1.68-.71-2.473-1.16a.099.099 0 0 1-.01-.165c.166-.123.332-.251.49-.38a.099.099 0 0 1 .104-.013c5.187 2.33 10.805 2.33 15.932 0a.099.099 0 0 1 .104.012c.159.13.324.258.491.38a.1.1 0 0 1 .04.085.1.1 0 0 1-.047.08c-.79.455-1.612.84-2.475 1.16a.1.1 0 0 0-.054.138c.476.907 1.02 1.771 1.618 2.591a.1.1 0 0 0 .111.038 26.367 26.367 0 0 0 7.929-3.938.1.1 0 0 0 .042-.072c.66-6.728-1.107-12.575-4.688-17.756a.08.08 0 0 0-.041-.037ZM11.04 16.33c-1.561 0-2.849-1.412-2.849-3.144 0-1.733 1.263-3.144 2.85-3.144 1.598 0 2.874 1.423 2.849 3.144 0 1.733-1.263 3.144-2.85 3.144Zm10.535 0c-1.563 0-2.85-1.412-2.85-3.144 0-1.733 1.262-3.144 2.85-3.144 1.598 0 2.874 1.423 2.85 3.144 0 1.733-1.25 3.144-2.85 3.144Z"})))}},23306:function(e,t,a){var r,n=a(11720);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.Z=function(e){return n.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 41.756 41.756",xmlSpace:"preserve"},e),r||(r=n.createElement("path",{d:"M27.948 20.878 40.291 8.536a5 5 0 1 0-7.07-7.071L20.878 13.809 8.535 1.465a5 5 0 0 0-7.07 7.071l12.342 12.342L1.465 33.22a5 5 0 1 0 7.07 7.071l12.343-12.342 12.343 12.343c.976.977 2.256 1.464 3.535 1.464s2.56-.487 3.535-1.464a5 5 0 0 0 0-7.071L27.948 20.878z"})))}},18881:function(e,t,a){a.d(t,{Bl:function(){return safeImage},E5:function(){return parseFormToPoolData},ew:function(){return parseFormToUpdatePoolData},xV:function(){return parseMyPoolToFormData}});var r=a(26630);let parseFormToUpdatePoolData=(e,t)=>({collections:removeCollectionsDuplicates(e.collections,"id").map(e=>({collection:e.id,collectionLtv:100*e.ltv,exposure:100*e.exposure})),isCompounded:e.withCompoundInterest,loanLiquidation:1e3,isMortgageEnabled:e.isMortgageEnabled,optMinAmountPerLoan:(e.minAmountPerLoan||0)*t.decimals,optLoanCurve:{baseInterest:100*e.baseInterestRate,interestRate:100*e.interestRate,curveRate:100*e.curveRateLiquidity,curveRateDay:100*e.curveRateDuration,maxDuration:86400*e.loanDuration,maxAmount:(e.maxAmountPerLoan||e.poolAmount)*t.decimals},optMortgageCurve:{baseInterest:100*e.baseInterestRate,interestRate:100*e.interestRate,curveRate:100*e.curveRateLiquidity,curveRateDay:100*e.curveRateDuration,maxDuration:86400*e.loanDuration,maxAmount:(e.maxAmountPerLoan||e.poolAmount)*t.decimals},optConditions:{isEnabled:!!e.withConditions,minAge:86400*e.minAge||0,minLoan:e.minLoan||0,minVolume:e.minVolume||0,liquidationThreshold:100*e.liquidationThreshold||0,padding1:0,padding2:0},optLiquidation:{isAutoSellEnabled:!1,percentageMaxLoss:!1,loanLiquidation:1e3,mortgageLiquidation:2e3}}),parseFormToPoolData=(e,t)=>({loanToValue:500,amount:e.poolAmount*t.decimals,baseInterest:100*e.baseInterestRate,interestRate:100*e.interestRate,curveRate:100*e.curveRateLiquidity,curveRateDay:100*e.curveRateDuration,apy:(0,r.NM)(e.baseInterestRate*(365/e.loanDuration),2),maxDuration:e.loanDuration,maxAmount:(e.maxAmountPerLoan||e.poolAmount)*t.decimals,compound:e.withCompoundInterest,isMortgageEnabled:e.isMortgageEnabled,collections:e.collections.map(e=>({collection:e.id,collectionLtv:100*e.ltv,exposure:100*e.exposure}))}),parseMyPoolToFormData=(e,t)=>e?{poolName:e.name,poolCurrency:e.currency,poolAmount:e.totalAmount/t.decimals,poolImage:e.thumbnail,apy:(0,r.NM)(e.loanCurve.baseInterest/100*(365/(e.loanCurve.maxDuration/86400)),2),loanDuration:e.loanCurve.maxDuration/86400,loanToValue:0,maxAmountPerLoan:e.loanCurve.maxAmount/t.decimals,baseInterestRate:e.loanCurve.baseInterest/100,interestRate:e.loanCurve.interestRate/100,curveRateLiquidity:e.loanCurve.curveRate/100,curveRateDuration:e.loanCurve.curveRateDay/100,withCompoundInterest:e.isCompounded,isMortgageEnabled:e.isMortgageEnabled,minAmountPerLoan:e.minAmountPerLoan/t.decimals,withConditions:e.conditions.isEnabled,minAge:e.conditions.minAge/86400||0,minLoan:e.conditions.minLoan||0,minVolume:e.conditions.minVolume||0,liquidationThreshold:e.conditions.liquidationThreshold/100||0,isPrivateLoanEnabled:"11111111111111111111111111111111"!==e.whitelist,lookupTable:e.whitelist,lookupTableAddresses:[],collections:e.collections.map(e=>({id:e.collection,ltv:e.collectionLtv/100,exposure:e.exposure/100})),tokens:[]}:null,safeImage=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.startsWith("https://api-v2.rain.fi/image/".concat(t,"/"))?e:"https://api-v2.rain.fi/image/".concat(t,"/").concat(e)},removeCollectionsDuplicates=(e,t)=>{let a={};return e.forEach(e=>{a[e[t]]=e}),Object.values(a)}},29142:function(e,t,a){a.r(t),a.d(t,{SolanaStatusProvider:function(){return SolanaStatusProvider}});var r=a(97997),n=a(11720),i=a(70766),l=a(26630),s=a(56432),o=a(12012),c=a(29750),d=a(1892);let u=(0,n.createContext)({tps:0,balance:0,balanceToken:{},prices:{},pyth:{},refreshPyth:()=>null,refreshBalance:()=>null}),SolanaStatusProvider=e=>{var t;let{children:a}=e,{publicKey:m,connected:h}=(0,c.yG)(),{setWebsiteUpdateVisible:g,rpcToken:x,supportedCurrencies:p}=(0,n.useContext)(s.default),[f,v]=(0,n.useState)(0),[y,w]=(0,n.useState)(0),[N,b]=(0,n.useState)({}),[k,Z]=(0,n.useState)({}),[S,T]=(0,n.useState)(null===(t=Object.values(l.Mf))||void 0===t?void 0:t.reduce((e,t)=>({...e,[t.mint]:{mint:t.mint,balance:0}}),{})),C=(0,d.Z)(),refreshTps=async()=>{let e=await (0,o.Mm)();v(e)},refreshPyth=async()=>{try{var e;let t=(await (0,o.kZ)()).prices,a={},r={};null===(e=Object.values(p))||void 0===e||e.forEach((e,n)=>{let i=e.mint,l=e.pyth,s=t[i];r[l]=s,"sol"===l?a[l]=s:a[l]=r.sol/s}),b(a),Z(r)}catch(e){console.log(e)}},refreshBalance=async()=>{if(!m)return;let e=await (0,o.wX)(m.toBase58()),t=[];for(let a in e)e.hasOwnProperty(a)&&t.push({mint:a,balance:e[a]});let a=Object.entries(e).map(e=>{let[t,a]=e;return{mint:t,balance:a}});T(a.reduce((e,t)=>({...e,[t.mint]:t}),{})),w(e.So11111111111111111111111111111111111111112)};return(0,i.Z)(async()=>{x&&p&&!C&&(await refreshTps(),await refreshPyth())},3e4),(0,i.Z)(async()=>{if(!C){let e=await (0,l.u)();e?g(!0):g(!1)}},6e5),(0,n.useEffect)(()=>{p&&!C&&(refreshTps(),refreshPyth())},[p,C]),(0,n.useEffect)(()=>{m&&h&&!C&&refreshBalance()},[m,h,C]),(0,n.useEffect)(()=>{p&&T(Object.values(p).reduce((e,t)=>({...e,[t.mint]:{mint:t.mint,balance:0}}),{}))},[p]),(0,r.tZ)(u.Provider,{value:{tps:f,balance:y,prices:k,balanceToken:S,pyth:N,refreshPyth,refreshBalance},children:a})};u.displayName="SolanaStatusContext",SolanaStatusProvider.displayName="SolanaStatusProvider",t.default=u},56432:function(e,t,a){a.r(t),a.d(t,{TransactionState:function(){return n},VitalsProvider:function(){return VitalsProvider}});var r,n,i=a(97997),l=a(18881),s=a(22774),o=a(11720),c=a(12012),d=a(72174);(r=n||(n={}))[r.PREPARING=0]="PREPARING",r[r.WAITING_FOR_SIGNATURE=1]="WAITING_FOR_SIGNATURE",r[r.SENDING=2]="SENDING",r[r.CONFIRMED=3]="CONFIRMED",r[r.ERROR=4]="ERROR";let getInitialTheme=()=>{if(window.localStorage){let e=window.localStorage.getItem("color-theme");if("string"==typeof e)return e;let t=window.matchMedia("(prefers-color-scheme: dark)");t.matches}return"dark"},u=(0,o.createContext)({theme:"dark",rpcUrl:null,rpcToken:"",isWebsiteUpdateVisible:!1,errorLog:"",isVisible:!1,transactionState:null,supportedCurrencies:{},setTransactionState:()=>null,setRpcUrl:()=>null,setVisible:()=>null,setTheme:()=>void 0,setWebsiteUpdateVisible:()=>null,setErrorLog:()=>null}),VitalsProvider=e=>{let{initialTheme:t,children:a}=e,[r,n]=(0,o.useState)(getInitialTheme()),[m,h]=(0,o.useState)(!1),[g,x]=(0,o.useState)(!1),[p,f]=(0,o.useState)(null),[v,y]=(0,o.useState)(null),[w,N]=(0,o.useState)(null),[b,k]=(0,s.ZP)("rainfi-rpc","https://rainfi-main4f9-3005.mainnet.rpcpool.com"),[Z,S]=(0,o.useState)("true"),T=(0,o.useRef)(null);(0,o.useEffect)(()=>{w&&(T.current?(0,d.handleTransactionToast)(w.status,w.txid,w.name,T.current,w.error):T.current=(0,d.handleTransactionToast)(w.status,w.txid,w.name,T.current),(3===w.status||4===w.status)&&(N(null),T.current=null))},[w]),(0,o.useEffect)(()=>{(0,c.lz)().then(e=>{let{tokens:t}=e;Object.values(t).forEach(e=>{e.image=(0,l.Bl)(e.image,500)}),y(t)})},[]);let rawSetTheme=e=>{let t=window.document.documentElement,a="dark"===e;t.classList.remove(a?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&rawSetTheme(t),(0,o.useEffect)(()=>{rawSetTheme(r),document.body.style.backgroundColor="dark"==r?"#081725":"#dff5fc"},[r]),(0,i.tZ)(u.Provider,{value:{transactionState:w,rpcUrl:b,rpcToken:Z,theme:r,supportedCurrencies:v,isWebsiteUpdateVisible:g,errorLog:p,isVisible:m,setTransactionState:N,setRpcUrl:k,setVisible:h,setTheme:n,setWebsiteUpdateVisible:x,setErrorLog:f},children:a})};u.displayName="VitalsContext",VitalsProvider.displayName="VitalsProvider",t.default=u},70766:function(e,t,a){var r=a(11720),n=a(79959);t.Z=function(e,t){let a=(0,r.useRef)(e);(0,n.Z)(()=>{a.current=e},[e]),(0,r.useEffect)(()=>{if(!t)return;let e=setInterval(()=>a.current(),t);return()=>clearInterval(e)},[t])}},79959:function(e,t,a){var r=a(11720);let n=r.useLayoutEffect;t.Z=n},22774:function(e,t,a){a.d(t,{FH:function(){return useLocalStorageStringState},ZP:function(){return useLocalLocalStoreState}});var r=a(11720);let getLocalStorageItem=(e,t)=>{try{let a=localStorage.getItem(e);return null!==a?a:t}catch(e){return console.error("Error accessing localStorage:",e),t}};function useLocalStorageStringState(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,[a,n]=(0,r.useState)(()=>getLocalStorageItem(e,t));return(0,r.useEffect)(()=>{let handleStorageChange=t=>{t.key===e&&n(t.newValue)};return window.addEventListener("storage",handleStorageChange),()=>{window.removeEventListener("storage",handleStorageChange)}},[e]),[a,t=>{try{null===t?localStorage.removeItem(e):localStorage.setItem(e,t),n(t)}catch(e){console.error("Error setting localStorage item:",e)}}]}function useLocalLocalStoreState(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,[a,n]=useLocalStorageStringState(e,t?JSON.stringify(t):null);return[(0,r.useMemo)(()=>a?JSON.parse(a):null,[a]),e=>{try{n(e?JSON.stringify(e):null)}catch(e){console.error("Error stringifying state:",e)}}]}},1892:function(e,t,a){let r,n;a.d(t,{Z:function(){return usePageVisibility}});var i=a(11720);function usePageVisibility(){var e,t,a;if("undefined"==typeof document)return!1;document&&void 0!==(null===(e=document)||void 0===e?void 0:e.hidden)?(r="hidden",n="visibilitychange"):document&&void 0!==(null===(t=document)||void 0===t?void 0:t.msHidden)?(r="msHidden",n="msvisibilitychange"):document&&void 0!==(null===(a=document)||void 0===a?void 0:a.webkitHidden)&&(r="webkitHidden",n="webkitvisibilitychange");let l=!!r&&document[r],[s,o]=(0,i.useState)(l);return(0,i.useEffect)(()=>{let handleVisibilityChange=()=>{r&&o(document[r])};return n&&document.addEventListener(n,handleVisibilityChange,!1),()=>{n&&document.removeEventListener(n,handleVisibilityChange)}},[]),s}},72174:function(e,t,a){a.r(t),a.d(t,{handleTransactionToast:function(){return handleTransactionToast},notify:function(){return h},toastOptions:function(){return m}});var r,n=a(97997),i=a(11720),l=a(41664),s=a.n(l);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var success=function(e){return i.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",style:{enableBackground:"new 0 0 52 52"},xmlSpace:"preserve"},e),r||(r=i.createElement("path",{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329-16 18a1.997 1.997 0 0 1-2.745.233l-10-8a2 2 0 0 1 2.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 0 1 2.99 2.659z",fill:"#4ec794"})))},o=a(23306),c=a(15347),d=a(55678),u=a(56432);let m={position:"bottom-left",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,transition:null,pauseOnHover:!0,icon:!1,draggable:!0,closeButton:!1,progress:void 0,style:{borderRadius:10,width:330,padding:5,margin:10}},h={info:e=>{let{message:t="",description:a}=e;return d.Am.warning((0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:t}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:a})]}),m)},success:e=>{let{message:t="",description:a,txid:r="",name:i=""}=e;return d.Am.success((0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl font-medium",children:"Transaction Success"}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:t||a}),(0,n.tZ)(s(),{target:"blank",className:"",href:"https://explorer.solana.com/tx/"+r,children:(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.tZ)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm force-underline",children:"View transaction"}),(0,n.BX)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm",children:[": ",i]})]})})]}),m)},warning:e=>{let{message:t="",description:a,txid:r="",type:i="info",placement:l="bottomLeft"}=e;return d.Am.warning((0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl font-medium",children:t}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:a})]}),m)},wait:e=>{let{message:t="",description:a}=e;return d.Am.loading((0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:t}),(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.BX)("svg",{className:"animate-spin mr-2 h-4 w-4 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.tZ)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.tZ)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:a})]})]}),m)},close:e=>d.Am.dismiss(e),destroy:()=>d.Am.dismiss("all"),error:e=>{var t;let{message:a="",description:r}=e;d.Am.error((0,n.BX)("div",{className:"flex flex-col gap-2 px-4 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute -top-[5px] right-1"}),(0,n.BX)("div",{className:"text-gray-800 dark:text-white text-xl font-medium",children:["Transaction Failed (",r||a,")"]}),(null===(t=r||a)||void 0===t?void 0:t.includes("block height exceeded"))&&(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"The transaction was not confirmed in time. This is due to network congestion. Please try again in few mins."}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"Please reach out to us on Discord if you need assistance."}),(0,n.tZ)(s(),{passHref:!0,legacyBehavior:!1,target:"blank",className:"text-gray-800 dark:text-gray-300",href:"https://discord.gg/rainfi",children:(0,n.BX)("div",{className:"inline-flex items-center text-gray-800 dark:text-gray-400 px-1 py-0.5 gap-2 rounded-md hover:bg-gray-100 dark:bg-opacity-20 border border-gray-500",children:["Discord",(0,n.tZ)(c.Z,{width:15,className:"fill-gray-800 dark:fill-gray-400"})]})})]}),m)},promise:async(e,t)=>{let{name:a="",txid:r="info"}=t;return d.Am.promise(e,{pending:{render:()=>(0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:"Processing Transaction"}),!r&&(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"Sending the transaction(s) to the network and waiting for them to confirm.."}),r&&(0,n.tZ)(s(),{legacyBehavior:!1,target:"blank",href:"https://explorer.solana.com/tx/"+r,children:(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.BX)("svg",{className:"animate-spin mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.tZ)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.tZ)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,n.tZ)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm force-underline",children:"View transaction"}),(0,n.BX)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm",children:[": ",a]})]})})]})},success:{render(e){let{data:t}=e;return(0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:"Transaction Success"}),(0,n.tZ)(s(),{legacyBehavior:!1,target:"blank",className:"",href:"https://explorer.solana.com/tx/"+r,children:(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.tZ)(success,{width:15,className:"mr-2"}),(0,n.tZ)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm force-underline",children:"View transaction"}),(0,n.BX)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm",children:[": ",a]})]})})]})}},error:{}},m)}};function handleTransactionToast(e,t,a,r,i){switch(e){case u.TransactionState.PREPARING:return(0,d.Am)((0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:"Preparing Transaction"}),(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.BX)("svg",{className:"animate-spin mr-2 h-4 w-4 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.tZ)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.tZ)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"Transaction is being prepared"})]})]}),{...m,autoClose:65e3});case u.TransactionState.WAITING_FOR_SIGNATURE:return d.Am.update(r,{render:(0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:"Waiting for signature approve"}),(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.BX)("svg",{className:"animate-spin mr-2 h-4 w-4 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.tZ)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.tZ)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"Please approve the transaction in your wallet"})]})]}),...{...m,autoClose:65e3}});case u.TransactionState.SENDING:return d.Am.update(r,{render:(0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:"Processing Transaction"}),!t&&(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"Sending the transaction(s) to the network and waiting for them to confirm.."}),t&&(0,n.tZ)(s(),{legacyBehavior:!1,target:"blank",href:"https://explorer.solana.com/tx/"+t,children:(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.BX)("svg",{className:"animate-spin mr-2 h-4 w-4 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.tZ)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.tZ)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,n.tZ)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm force-underline",children:"View transaction"}),(0,n.BX)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm",children:[": ",a]})]})})]}),...{...m,autoClose:65e3}});case u.TransactionState.CONFIRMED:return d.Am.update(r,{render:(0,n.BX)("div",{className:"flex flex-col gap-2 px-3 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute top-1 right-1"}),(0,n.tZ)("div",{className:"text-gray-800 dark:text-white text-xl",children:"Transaction Success"}),(0,n.tZ)(s(),{legacyBehavior:!1,target:"blank",className:"",href:"https://explorer.solana.com/tx/"+t,children:(0,n.BX)("div",{className:"flex items-center gap-1",children:[(0,n.tZ)(success,{width:15,className:"mr-2"}),(0,n.tZ)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm force-underline",children:"View transaction"}),(0,n.BX)("div",{className:"text-gray-600 !dark:text-gray-300 !text-sm",children:[": ",a]})]})})]}),...m});case u.TransactionState.ERROR:return d.Am.update(r,{render:(0,n.BX)("div",{className:"flex flex-col gap-2 px-4 my-2 relative",children:[(0,n.tZ)(o.Z,{width:10,className:"fill-gray-500 absolute -top-[5px] right-1"}),(0,n.BX)("div",{className:"text-gray-800 dark:text-white text-xl font-medium",children:["Transaction Failed (",i,")"]}),(null==i?void 0:i.includes("block height exceeded"))&&(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"The transaction was not confirmed in time. This is due to network congestion. Please try again in few mins."}),(0,n.tZ)("span",{className:"text-gray-600 dark:text-gray-400",children:"Please reach out to us on Discord if you need assistance."}),(0,n.tZ)(s(),{passHref:!0,legacyBehavior:!1,target:"blank",className:"text-gray-800 dark:text-gray-300",href:"https://discord.gg/rainfi",children:(0,n.BX)("div",{className:"inline-flex items-center text-gray-800 dark:text-gray-400 px-1 py-0.5 gap-2 rounded-md hover:bg-gray-100 dark:bg-opacity-20 border border-gray-500",children:["Discord",(0,n.tZ)(c.Z,{width:15,className:"fill-gray-800 dark:fill-gray-400"})]})})]}),...m});default:return h.info({message:"Transaction Info"})}}}}]);