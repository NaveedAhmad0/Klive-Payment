(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[18],{167:function(e,t,a){"use strict";function r(e,t,a,r,n,o,i){try{var c=e[o](i),l=c.value}catch(s){return void a(s)}c.done?t(l):Promise.resolve(l).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function c(e){r(i,n,o,c,l,"next",e)}function l(e){r(i,n,o,c,l,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return n}))},168:function(e,t,a){"use strict";t.a="https://backend.klivepay.com/api"},510:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgB7ZftccIwDIZf9zpARkgnADYIE5QNygbtBmQEOgHdhHQC6ATJBu0GqhTLnMoVLtxZyR+eO8Wxz7EUWfJHgIGI5lzMkZcfkRBCc7EHK65YWvKlZSnPdQdtbLXeqeSmVBFvLNgbHczf79XCGo4YPVvbLh4gfV+wVCwFfJixrBA9vDx5wczRN43L5twDQsPyCV+SJ4Sl9UCNkWBdW9W5twZ4zf1/BhRJ6WkKOCgCRiTpfcDETG7AIxxg71ZcPGPImpKCAZmQ/KYbyBqEPNSai51WP3B9Tdmlj7J5gIc56HBvA/pGvbkMsLk9sH+PSxbcsqhlM4BDSPb6RquvQ7/LnYbviFt6TfGg84V4CLlMziDU8WqaKg2NESXilju70m3d6/UwYAhJ730zEgP6KKVxDySlNeCo7xuMx4uWjQShXMUO2tDB52JiKVWEp/7JRqzI/2pmaSmeGfAn9bSxgN/lRDhyxqdpxy8cAKN6r4lreQAAAABJRU5ErkJggg=="},533:function(e,t,a){"use strict";a.r(t);var r=a(167),n=a(19),o=a(0),i=a.n(o),c=(a(267),a(176),a(177)),l=a.n(c),s=a(178),m=a.n(s),u=a(179),d=a.n(u),h=a(510),f=a.n(h),p=a(75),v=a.n(p),y=(a(168),a(6)),g=a(53),w=a(51);function E(){E=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,o=Object.create(n.prototype),i=new A(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return O()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=b(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=s(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var m={};function u(){}function d(){}function h(){}var f={};c(f,n,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==t&&a.call(v,n)&&(f=v);var y=h.prototype=u.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var m=l.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){m.value=e,i(m)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=h,c(y,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new w(l(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,n,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=L,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}u.Search.SearchBar;var b={paginationSize:4,pageStartIndex:1,alwaysShowAllBtns:!0,withFirstAndLast:!1,hideSizePerPage:!0,hidePageListOnlyOnePage:!0,showTotal:!1,disablePageTitle:!0};t.default=function(){Object(y.g)();var e=Object(o.useState)(!0),t=Object(n.a)(e,2),a=(t[0],t[1]),c=Object(o.useState)([]),s=Object(n.a)(c,2),h=s[0],p=s[1];console.log("items is",h),Object(o.useEffect)((function(){var e=function(){var e=Object(r.a)(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://backend.klivepay.com/api/admin/sandBox-transactionList").then((function(e){console.log(e.data);for(var t=[],r=0;r<e.data.length;r+=1)t.push({id:e.data[r].id,transactionType:e.data[r].transactionType,payeeProxyId:e.data[r].payeeProxyId,payeeProxyType:e.data[r].payeeProxyType,payeeAccountNumber:e.data[r].payeeAccountNumber,payeeName:e.data[r].payeeName,payerAccountNumber:e.data[r].payerAccountNumber,payerName:e.data[r].payerName,amount:e.data[r].amount,transactionId:e.data[r].transactionId,billPaymentRef1:e.data[r].billPaymentRef1,billPaymentRef2:e.data[r].billPaymentRef2,billPaymentRef3:e.data[r].billPaymentRef3});p(t),a(!1),setTimeout((function(){a(!1)}),3e3)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();Object(r.a)(E().mark((function t(){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}),[]);var x=u.Search.SearchBar,N=Object(o.useState)(""),A=Object(n.a)(N,2),L=A[0],O=A[1],P=Object(o.useState)(""),S=Object(n.a)(P,2),j=S[0],k=S[1],T=Object(o.useState)(""),B=Object(n.a)(T,2),C=B[0],_=B[1],I=Object(o.useState)(""),R=Object(n.a)(I,2),G=R[0],F=R[1];return Object(o.useEffect)((function(){v.a.get("https://backend.klivepay.com/api/admin/TotalCount").then((function(e){O(e.data.Total_paid_WithdrawAmount),k(e.data.Total_pending_WithdrawAmount),_(e.data.users_count),F(e.data.merchant_count)}))}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:"row page-title-header"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"page-header"},i.a.createElement("h4",{className:"pageUser-title"},"Admin Dashboard")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-3 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin threeCards"},i.a.createElement("div",{className:"d-flex newboxcss"},i.a.createElement("div",{className:"wrapper py-2"},i.a.createElement("h6",{className:"mb-0 font-weight-medium text-white"},"Amount Paid"),i.a.createElement("h5",{className:"mb-0 font-weight-semibold"},"$ ",L)),i.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},i.a.createElement("div",{className:""},i.a.createElement("img",{src:f.a,alt:"cardpic"}))))),i.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin "},i.a.createElement("div",{className:"d-flex newboxcss"},i.a.createElement("div",{className:"wrapper py-2"},i.a.createElement("h6",{className:"mb-0 font-weight-medium text-white"},"Amount Pending"),i.a.createElement("h5",{className:"mb-0 font-weight-semibold"},"$ ",j)),i.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},i.a.createElement("div",{className:""},i.a.createElement(g.a,{size:"2x",icon:w.a}))))),i.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin"},i.a.createElement("div",{className:"d-flex newboxcss"},i.a.createElement("div",{className:"wrapper py-2"},i.a.createElement("h6",{className:"mb-0 font-weight-medium text-white"},"Total Users"),i.a.createElement("h5",{className:"mb-0 font-weight-semibold"},C)),i.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},i.a.createElement("div",{className:""},i.a.createElement(g.a,{size:"2x",icon:w.c}))))),i.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin"},i.a.createElement("div",{className:"d-flex newboxcss"},i.a.createElement("div",{className:"wrapper py-2"},i.a.createElement("h6",{className:"mb-0 font-weight-medium text-white"},"Total Merchants"),i.a.createElement("h5",{className:"mb-0 font-weight-semibold"},G)),i.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},i.a.createElement("div",{className:""},i.a.createElement(g.a,{size:"2x",icon:w.c})))))))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"table-responsive"},i.a.createElement(d.a,{keyField:"id",data:h,columns:[{dataField:"id",text:"Id",sort:!0,classes:"deal-row",headerClasses:"deal-header"},{dataField:"payerAccountNumber",text:"User Account Number",classes:"deal-row",headerClasses:"deal-header"},{dataField:"payerName",text:"Payer Name",classes:"deal-row-2",headerClasses:"deal-header"},{dataField:"amount",text:"Amount",classes:"deal-row",headerClasses:"deal-header"},{dataField:"transactionType",text:"Transaction Type",classes:"deal-row",headerClasses:"deal-header"}],search:!0},(function(e){return i.a.createElement("div",null,i.a.createElement("h3",null,"Search:"),i.a.createElement(x,Object.assign({},e.searchProps,{className:"custome-search-field",style:{color:"white"},delay:500,placeholder:"Search..."})),i.a.createElement("hr",null),i.a.createElement(l.a,Object.assign({},e.baseProps,{pagination:m()(b)})))})))))))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"row"}))))}}}]);
//# sourceMappingURL=18.56bd919e.chunk.js.map