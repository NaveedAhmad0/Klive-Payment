(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[9],{129:function(e,t,a){"use strict";function r(e,t,a,r,n,l,o){try{var c=e[l](o),m=c.value}catch(i){return void a(i)}c.done?t(m):Promise.resolve(m).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,l){var o=e.apply(t,a);function c(e){r(o,n,l,c,m,"next",e)}function m(e){r(o,n,l,c,m,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return n}))},131:function(e,t,a){"use strict";t.a="https://backend.klivepay.com/api"},507:function(e,t,a){},536:function(e,t,a){"use strict";a.r(t);var r=a(129),n=a(35),l=a(133),o=a.n(l),c=a(0),m=a.n(c),i=a(6),s=a(131),u=a(507),d=a.n(u);function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,a){return e[t]=a}}function m(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,l=Object.create(n.prototype),o=new I(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return k()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=g(o,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var m=i(e,t,a);if("normal"===m.type){if(r=a.done?"completed":"suspendedYield",m.arg===s)continue;return{value:m.arg,done:a.done}}"throw"===m.type&&(r="completed",a.method="throw",a.arg=m.arg)}}}(e,a,o),l}function i(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=m;var s={};function u(){}function d(){}function h(){}var f={};c(f,n,(function(){return this}));var E=Object.getPrototypeOf,v=E&&E(E(F([])));v&&v!==t&&a.call(v,n)&&(f=v);var b=h.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var m=i(e[n],e,l);if("throw"!==m.type){var s=m.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,c)}))}c(m.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function g(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=i(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function F(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,c(b,"constructor",h),c(h,"constructor",d),d.displayName=c(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(N.prototype),c(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new N(m(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(b),c(b,o,"Generator"),c(b,n,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=F,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),m=a.call(l,"finallyLoc");if(c&&m){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:F(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e=Object(i.h)(),t=Object(c.useState)({id:0,name:"",mobile:"",email:"",merchantName:"",personType:"",InitialShop:"",firstName:"",surName:"",yearOfBirth:"",monthOfBirth:"",dayOfBirth:"",address:"",province:"",district:"",subDivision:"",pincode:0,shopType:"",creditCard:"",weChat:"",livePayment:"",mobileBanking:"",trueWallet:"",shopeePay:"",alone:"",website:"",facebook:"",linkedin:"",instagram:"",other:"",company:"",bank:"",bankAccount:0,rnfCode:"",domestic:"",inter:"",rateQrCode:"",rateBarCode:"",copyOfId:"",logo:"",bankBook:"",otherDocument:"",transaction:"",withdraw:""}),l=Object(n.a)(t,2),u=l[0],h=l[1],f=u.id,E=u.name,v=u.mobile,b=u.email,y=u.merchantName,N=u.InitialShop,g=u.firstName,w=u.yearOfBirth,x=u.monthOfBirth,I=u.dayOfBirth,F=u.address,k=u.province,O=u.district,U=u.subDivision,C=u.inter,B=u.rnfCode,L=u.bank,j=u.logo,P=u.rateQrCode,S=u.domestic,T=u.company,A=u.bankAccount,_=u.website,D=u.facebook,M=u.linkedin,G=u.instagram,W=u.other,Q=u.transaction,R=u.withdraw,J=Object(c.useState)({}),Y=Object(n.a)(J,2),z=Y[0],H=Y[1],q=Object(c.useState)({}),K=Object(n.a)(q,2),V=K[0],X=K[1],Z=Object(c.useState)(!1),$=Object(n.a)(Z,2),ee=($[0],$[1]),te=e.state.merchantId;function ae(){return(ae=Object(r.a)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o.a.patch("".concat(s.a,"/admin/fees-by-id?merchantId=").concat(te),JSON.stringify({TransactionFee:parseInt(z),withdrawFee:parseInt(V)}),{headers:{"Content-Type":"application/json"}}).then((function(e){H(""),X(""),console.log(e),alert("Fee Added Succesfully")}));case 4:e.sent,ee(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("something went wrong"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var re=e.state.merchantdataEmail,ne=Object(c.useCallback)((function(){try{o.a.get("".concat(s.a,"/merchant/get-profile?email=").concat(re)).then((function(e){h({id:e.data.merchant.id,name:e.data.merchant.name,mobile:e.data.merchant.mobile,email:e.data.merchant.email,merchantName:e.data.merchant.merchantName,personType:e.data.merchant.personType,InitialShop:e.data.merchant.InitialShop,firstName:e.data.merchant.firstName,surName:e.data.merchant.surName,yearOfBirth:e.data.merchant.yearOfBirth,monthOfBirth:e.data.merchant.monthOfBirth,dayOfBirth:e.data.merchant.dayOfBirth,address:e.data.merchant.address,province:e.data.merchant.province,district:e.data.merchant.district,subDivision:e.data.merchant.subDivision,pincode:e.data.merchant.pincode,shopType:e.data.merchant.shopType,creditCard:e.data.merchant.creditCard,weChat:e.data.merchant.weChat,livePayment:e.data.merchant.livePayment,mobileBanking:e.data.merchant.mobileBanking,trueWallet:e.data.merchant.trueWallet,shopeePay:e.data.merchant.shopeePay,alone:e.data.merchant.alone,website:e.data.merchant.website,facebook:e.data.merchant.facebook,linkedin:e.data.merchant.linkedin,instagram:e.data.merchant.instagram,other:e.data.merchant.other,company:e.data.merchant.company,bank:e.data.merchant.bank,bankAccount:e.data.merchant.bankAccount,rnfCode:e.data.merchant.rnfCode,domestic:e.data.merchant.domestic,inter:e.data.merchant.inter,rateQrCode:e.data.merchant.rateQrCode,rateBarCode:e.data.merchant.rateBarCode,copyOfId:e.data.merchant.copyOfId,logo:e.data.merchant.logo,bankBook:e.data.merchant.bankBook,otherDocument:e.data.merchant.otherDocument,transaction:e.data.merchant.transaction,withdraw:e.data.merchant.withdraw}),console.log("merchant DATA IS ",e.data.merchant)}))}catch(e){console.log(e)}}),[z,V]);return Object(c.useEffect)((function(){ne()}),[]),Object(c.useEffect)((function(){ne()}),[z,V]),m.a.createElement("div",{className:"col-12 grid-margin userProfileMain"},m.a.createElement("h4",{className:"card-title fs-3"},"Personal Admin Information"),m.a.createElement("div",{className:"card userProfileCard-2 "},m.a.createElement("div",{className:"row flex-column mt-5 mx-auto card text-white w-30 mb-5",style:{backgroundColor:"#007BFF",fontWeight:"500",lineHeight:"1",fontSize:"10px"}},m.a.createElement("img",{className:"profile-img mt-3 mb-2",src:a(68),alt:"Profile"}),m.a.createElement("div",{className:"mt-2 mx-auto"},m.a.createElement("p",{className:"text-white"},"Merchant Code: ",m.a.createElement("span",{className:"text-warning"},"M010303")),m.a.createElement("p",{className:"text-white"},"Email: ",m.a.createElement("span",{className:"text-warning"},b)))),m.a.createElement("div",{className:"col-12 grid-margin"},m.a.createElement("h4",{className:"card-title fs-4"},"Merchant Personal Information"),m.a.createElement("div",{className:"card userCard p-lg-2"},m.a.createElement("div",{className:"card-body ".concat(d.a.usercardbody)},m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Merchant ID :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:f})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:" form-label"},"Merchant Name :"),m.a.createElement("input",{className:"form-control",id:"inputPassword4",value:y})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Merchant Name English :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:E})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Email Address :"),m.a.createElement("input",{className:"form-control",id:"inputPassword4",value:b})),m.a.createElement("div",{class:"col-md-12"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Initial Shop :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:N}))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"First Name:"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:g})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Email :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:b})),m.a.createElement("div",{class:"col-md-4"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Year of Birth :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:w})),m.a.createElement("div",{class:"col-md-4"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Month Of Birth :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:x})),m.a.createElement("div",{class:"col-md-4"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Day Of Birth :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:I})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Contact Number :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:v})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Address :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:F}))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Provience :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:k})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Sub Division :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:U})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"District :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:O})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Mobile no :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:v}))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Web Site :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:_})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Linked in :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:M})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Facebok :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:D})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Instagram :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:G})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Other :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:W}))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Copy Of Id Card (Up to 5mb):"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4"})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Book Bank :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4"})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Company :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:T})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label text-primary"},"Bank Account :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:A})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Domestic :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:S})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Rate Of QR Code :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:P}))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Logo :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:j})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Other document: :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4"})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Bank :"),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:L})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Rnf Code :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:B})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Inter :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:C})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Rate Of Bar Code :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4"})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Transaction Fee :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:Q})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Withdraw Fee :"," "),m.a.createElement("input",{className:"form-control",id:"inputEmail4",value:R}))),m.a.createElement("br",null),m.a.createElement("form",{className:"row g-3 form-sample"},m.a.createElement("h3",null,"Add Fee to this merchant"),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"TransactionFee :"),m.a.createElement("input",{className:"form-control",type:"number",value:z,onChange:function(e){return H(parseInt(e.target.value))}})),m.a.createElement("div",{class:"col-md-6"},m.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"withdrawFee :"," "),m.a.createElement("input",{className:"form-control",type:"number",value:V,onChange:function(e){return X(parseInt(e.target.value))}})),m.a.createElement("div",{class:"col-md-12 text-center"},m.a.createElement("button",{type:"button",className:"btn text-center btn-success w-100  rounded-pill",onClick:function(e){return ae.apply(this,arguments)}}," ","Add Fee"," "))))),m.a.createElement("br",null),m.a.createElement("div",{className:"text-center"}))))}}}]);
//# sourceMappingURL=9.f5a519b2.chunk.js.map