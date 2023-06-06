var e=Object.defineProperty,t=(t,o,r)=>(((t,o,r)=>{o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r})(t,"symbol"!=typeof o?o+"":o,r),r);import{r as o,n as r,R as n}from"./@styled-components-af6378f6.js";import{r as i}from"./@react-dom-28b7cc7a.js";import{c as s}from"./@zustand-73aff654.js";import{a}from"./@axios-a8ee11a1.js";import{N as c}from"./@nprogress-09aea038.js";import{C as l}from"./@crypto-js-a622d131.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var d={exports:{}},p={},u=o,h=Symbol.for("react.element"),m=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,f=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,o){var r,n={},i=null,s=null;for(r in void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)g.call(t,r)&&!x.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:h,type:e,key:i,ref:s,props:n,_owner:f.current}}p.Fragment=m,p.jsx=b,p.jsxs=b,d.exports=p;var y=d.exports,v={},w=i;v.createRoot=w.createRoot,v.hydrateRoot=w.hydrateRoot;const j=new class{constructor(){t(this,"service"),t(this,"baseURL","https://wisecloud-sg.wiseasy.com/wisecloud-gateway-open-platform"),t(this,"md5",(e=>l.MD5(e).toString())),t(this,"appSecret","CQdQBkJJTzxbUZFjtEznNWTfAJcANEVb"),t(this,"accessKeyId","6479baa5f17ac1000199d8f7"),this.service=a.create({baseURL:this.baseURL,timeout:6e4}),this.service.interceptors.request.use((async e=>(c.start(),e.headers.nonce=this.uuid(),e.headers.timestamp=(new Date).getTime(),e.headers["Accept-Language"]="en-US",e.data=this.signatrue(e.data),e)),(e=>Promise.reject(e))),this.service.interceptors.response.use((e=>{c.done();const t=e.data;return e.status>=200&&e.status<300?(t.code,t):Promise.reject(new Error(t.message||"Error"))}),(e=>(c.done(),Promise.reject(e))))}async post(e,t,o){return await this.service.post(e,t,o).catch((e=>({code:-1,data:null,message:e})))}async get(e,t){return await this.service.get(e,t).catch((e=>({code:-1,data:null,message:e})))}uuid(){var e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.substring(t.lastIndexOf("/")+1)}signatrue(e){let t="";["broadcastNumber","commandKey","content","sn","submitType","voiceType","voiceZipperInfo"].forEach(((o,r)=>{const n=e[o];if(Array.isArray(n))return t+=`&${o}=`,void n.forEach((e=>{["code","lang","type","voiceText"].forEach((o=>{e[o]&&(t+=`&${o}=${e[o]}`)}))}));t+=`${0!==r?"&":""}${o}=${e[o]}`})),t=t.replace("voiceZipperInfo=&","voiceZipperInfo=");const o=this.md5(t+this.appSecret);return{version:"1.0",accessKeyId:this.accessKeyId,timestamp:(new Date).getTime(),nonce:this.uuid(),signType:"MD5",signatureValue:o,encryptionSwitch:"off",data:JSON.stringify(e)}}};function k(e){let t=[],o=Math.floor(e/100);o>0&&(t.push(`${o}`),t.push("100"));var r=Math.floor(e%100);if(r>=10&&r<21?t.push(`${r}`.padEnd(2,"0")):(r>=21&&t.push(`${Math.floor(r/10)}`.padEnd(2,"0")),t.push(`${Math.floor(e%100%10)}`)),e.toString().includes(".")){t.push("DOT");var n=e.toString().split(".");for(let e of n[1])t.push(e)}return t}function N(e){const t=function(e){if(e>999999.99)return[];let t=e.toLocaleString("en-us",{maximumFractionDigits:2,minimumFractionDigits:2}).split(",");const o=[];return 1===t.length?o.push(...k(Number(t[0]))):(o.push(...k(Number(t[0]))),o.push("1000"),o.push(...k(Number(t[1])))),o.map((e=>({code:`V00002_EN_N_${e}`,voiceText:e,type:"code"})))}(e),o={broadcastNumber:e,commandKey:"voice",content:`Wechat pay,$${e} received`,sn:function(e){let t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);if(null!=o)return decodeURIComponent(o[2]);return null}("sn")??"WQRJ002215000013",submitType:1,voiceType:"localZipper",voiceZipperInfo:[...t,{code:"V00002_EN_U_DOLLARS",voiceText:"$",type:"code"},{code:"V00002_EN_A_RECEIVE",voiceText:"Recevied",type:"code"}]};return j.post("/wisecloud-gateway-open-platform/voice/service/api/delivery/pushMsg",o).then((e=>0===e.code))}const S=s(((e,t)=>({key:"app",amount:"0.00",generate(){e({orderNo:(new Date).getTime()+""})},toHome(){e({key:"app",amount:"0.00"})},pushMsg:()=>{const{amount:o}=t();N(+o).then((t=>t&&e({key:"result"})))},setAmount:t=>e({amount:t})})));const R=r.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  grid-row-gap: 8px;
  grid-column-gap: 8px;
  background-color: #f6f6f6;
  padding: 8px;

  .item {
    background-color: white;
    min-height: 48px;
    border-radius: 6px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: "wechat";
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);

    &:active {
      box-shadow: none;
      color: #2d6ded;
    }

    img {
      width: 24px;
    }

    &:nth-child(12) {
      grid-column-start: span 2;
    }

    &:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &:nth-child(11) {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 5;
      background-color: #2d6ded;
      color: white;
      font-family: Arial, "Times New Roman", "Microsoft YaHei", SimHei;

      &:active {
        color: #2d6ded;
        background-color: white;
      }
    }
  }
`,E=({submit:e,onChanged:t})=>y.jsx(R,{children:[1,2,3,"del",4,5,6,7,8,9,"Pay",0,"."].map(((o,r)=>y.jsx("div",{className:"item",onClick:()=>{navigator.vibrate&&navigator.vibrate([50]),"Pay"!==o?t(`${o}`):e()},children:"del"===o?y.jsx("img",{src:"/backspace.png"}):o},`${r}`)))}),_=r.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
  justify-content: space-between;
  background-color: #eaeaea;
`,$=r.div`
  text-align: center;
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;

  .left {
    text-align: left;
    .title {
      font-weight: bolder;
      display: flex;
      align-items: center;
    }
    .order {
      font-size: 12px;
    }
  }

  .icons {
    background-color: white;
    padding: 4px;
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`,L=r.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-end;
  flex: 1;
  border-radius: 12px 12px 0 0;

  .amount {
    padding: 32px;
    text-align: left;

    label {
    }

    .input {
      font-family: "wechat";
      margin: 0 auto;
      border-radius: 12px;
      font-size: 60px;
      font-weight: bolder;
      text-align: left;
      line-height: 56px;
      outline: none;
      margin-top: 32px;
      min-height: 56px;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span,
    label {
      font-size: 20px;
      color: #e9e9e9;
    }
    span {
      font-size: 50px;
    }
  }
`;const O=({visible:e,onClose:t})=>y.jsx(y.Fragment,{children:e&&y.jsx(T,{children:y.jsxs("div",{className:"modal-content",children:[y.jsx("span",{className:"close",onClick:()=>t&&t(),children:"×"}),y.jsx("p",{children:"If the bottom keyboard is blocked, click the icon to enter full screen mode"})]})})}),T=r.div`
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 80%; /* Could be more or less, depending on screen size */
    border-radius: 12px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`,M=({})=>{const{pushMsg:e,setAmount:t,amount:r,generate:n,orderNo:i}=S();o.useEffect((()=>{n()}),[]);const[s,a]=o.useState(!1),c=o.useMemo((()=>navigator.userAgent.includes("EdgA")&&navigator.userAgent.includes("Mobile")),[]);return y.jsxs(_,{id:"app-pay",children:[y.jsxs($,{children:[y.jsxs("div",{className:"left",children:[y.jsxs("div",{className:"title",children:["Pay to Wiseasy"," ",c&&y.jsx("svg",{style:{marginLeft:12},onClick:()=>{return e="#app-pay",void((t=document.querySelector(e)||document.documentElement).requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen());var e,t},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"22435",width:"16",height:"16",children:y.jsx("path",{d:"M213.333333 213.333333 426.666667 213.333333 426.666667 298.666667 298.666667 298.666667 298.666667 426.666667 213.333333 426.666667 213.333333 213.333333M597.333333 213.333333 810.666667 213.333333 810.666667 426.666667 725.333333 426.666667 725.333333 298.666667 597.333333 298.666667 597.333333 213.333333M725.333333 597.333333 810.666667 597.333333 810.666667 810.666667 597.333333 810.666667 597.333333 725.333333 725.333333 725.333333 725.333333 597.333333M426.666667 725.333333 426.666667 810.666667 213.333333 810.666667 213.333333 597.333333 298.666667 597.333333 298.666667 725.333333 426.666667 725.333333Z","p-id":"22436"})})]}),y.jsxs("div",{className:"order",children:["Order ID: ",i]})]}),y.jsx("img",{src:"https://wisecloud3-oss-dev.oss-cn-beijing.aliyuncs.com/markdown/wisecloud_logo_u&d_s.png",className:"icons",alt:"Vite logo"})]}),y.jsxs(L,{children:[y.jsxs("div",{className:"amount",children:[y.jsx("label",{children:"Amount "}),y.jsx("div",{}),y.jsxs("div",{id:"number-pad",placeholder:"请输入数字",className:"input",onClick:()=>{},children:["$",r]})]}),y.jsxs("div",{className:"content",children:[y.jsx("label",{children:"QS2 Payment Voice Broadcasting"}),y.jsx("span",{children:"Demo"})]}),y.jsx("div",{children:y.jsx(E,{submit:()=>e(),onChanged:e=>{let o=r;if("0.00"===o&&(o=""),"del"===e){let e=`${o}`;return e=e.slice(0,e.length-1),""===o||""===e?void t("0.00"):void t(e)}if("."!==e)t(o+e);else{if(""===o)return void t("0.");if(o.includes("."))return;t(o+".")}}})})]}),y.jsx(O,{visible:s,onClose:()=>a(!1)})]})},C=r.div`
  background-color: #ffffff;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  .succeed {
    width: 64px;
    align-self: center;
    height: 64px;
    background-color: #09bb07;
    border-radius: 50%;
    margin: 32px 0 16px;
  }

  .text {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #09bb07;
  }

  .label {
    margin-top: 36px;
    font-size: 18px;
    text-align: center;
    color: #666666;
  }

  .amount {
    font-family: "wechat";
    margin: 0px auto 35px;
    border-radius: 12px;
    font-size: 40px;
    font-weight: bolder;
  }
`,I=r.div`
  background-color: #2d6ded;
  height: 56px;
  font-weight: bold;
  color: white;
  line-height: 56px;
  border-radius: 6px;

  margin: 120px 16px 0;
  text-align: center;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: none;
  }
`,z=r.div`
  /* background-color: #eaeaea; */
  /* height: 100px; */
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
  margin: 0 16px;

  .result-content-item {
    height: 32px;
    display: flex;
    color: black;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;

    label {
      color: #666;
    }

    span {
      font-weight: bold;
    }
  }
`,A=({})=>{const{orderNo:e,amount:t,toHome:o}=S();return y.jsxs(C,{children:[y.jsx("img",{className:"succeed",src:"/succeed.svg"}),y.jsx("div",{className:"text",children:"Succeed!"}),y.jsx("div",{className:"label",children:"Amount"}),y.jsxs("div",{className:"amount",children:["$",(+t).toFixed(2)]}),y.jsxs(z,{children:[y.jsxs("div",{className:"result-content-item",children:[y.jsx("label",{children:"Order ID:"}),y.jsx("span",{children:e??"3293828393829"})]}),y.jsxs("div",{className:"result-content-item",children:[y.jsx("label",{children:"Pay time:"}),y.jsx("span",{children:(new Date).toLocaleString()})]})]}),y.jsx(I,{onClick:()=>o(),children:"Back"})]})};function F(){const{key:e}=S();return y.jsx(y.Fragment,{children:"app"===e?y.jsx(M,{}):y.jsx(A,{})})}v.createRoot(document.getElementById("root")).render(y.jsx(n.StrictMode,{children:y.jsx(F,{})}));
