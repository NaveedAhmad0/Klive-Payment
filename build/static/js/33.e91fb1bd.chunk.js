(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[33],{530:function(e,t,r){"use strict";r.r(t);var n=r(71),a=r(22),o=r(70),l=r.n(o),i=r(0),c=r.n(i),u=r(47);function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),l=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var l=r.delegate;if(l){var i=w(l,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,l),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var m={};function p(){}function d(){}function h(){}var f={};i(f,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,a)&&(f=y);var g=h.prototype=p.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function l(){return new t((function(n,l){!function n(a,o,l,i){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,l,i)}),(function(e){n("throw",e,l,i)})):t.resolve(m).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,i)}))}i(c.arg)}(a,o,n,l)}))}return n=n?n.then(l,l):l()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=h,i(g,"constructor",h),i(h,"constructor",d),d.displayName=i(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),i(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var l=new b(c(t,r,n,a),o);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},E(g),i(g,l,"Generator"),i(g,a,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return l.type="throw",l.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),o=t[0],m=(t[1],Object(i.useState)("")),p=Object(a.a)(m,2),d=p[0],h=p[1],f=Object(i.useState)(""),v=Object(a.a)(f,2),y=v[0],g=v[1],E=Object(i.useState)(""),b=Object(a.a)(E,2),w=b[0],x=b[1],N=Object(i.useState)(""),j=Object(a.a)(N,2),O=j[0],L=j[1],S=Object(i.useState)(""),C=Object(a.a)(S,2),G=C[0],k=C[1],F=Object(i.useState)(""),I=Object(a.a)(F,2),_=I[0],U=I[1],P=Object(i.useState)(""),A=Object(a.a)(P,2),z=A[0],T=A[1],D=Object(i.useState)(""),J=Object(a.a)(D,2),M=J[0],Y=J[1],Z=Object(i.useState)(!1),q=Object(a.a)(Z,2),B=q[0],H=q[1];function K(){return(K=Object(n.a)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(o,y,w,O,G,_,z,M),e.prev=2,e.next=5,l.a.patch("https://backend.klivepay.com/api/admin/update-profile?email=admin%40mail.com",JSON.stringify({userName:d,surName:y,mobile:w,address:O,province:G,district:_,subdistrict:z,pincode:M}),{headers:{"Content-Type":"application/json"}});case 5:r=e.sent,console.log("mail",o),console.log(JSON.stringify(null===r||void 0===r?void 0:r.data)),H(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){B&&alert("Profile changed Succesfully!")}),[B]),c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("h4",{className:"card-title"},"Personal admin Information"),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row flex-column mt-5 mx-auto"},c.a.createElement("img",{className:"img-lg mx-auto rounded-circle",src:r(48),alt:"Profile"}),c.a.createElement("div",{className:"mt-2 mx-auto"},c.a.createElement("p",null,"Merchant Code: ",c.a.createElement("span",{className:"text-primary"},"M010303")),c.a.createElement("p",{className:"mx-auto"},"Email: ",c.a.createElement("span",{className:"text-primary"},"info@gmail.com")))),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-sample"},c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,{className:"row"},c.a.createElement("label",{htmlFor:"exampleInputUsername1"},"System Username"),c.a.createElement(u.a.Control,{type:"text",id:"exampleInputUsername1",onChange:function(e){return h(e.target.value)},value:d,placeholder:"info@gmilail.com",size:"lg"}))),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,null,c.a.createElement("label",{htmlFor:"exampleSelectGender"},"Surname"),c.a.createElement(u.a.Control,{type:"text",id:"exampleInputUsername1",onChange:function(e){return g(e.target.value)},value:y,placeholder:"info@gmilail.com",size:"lg"})))),c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,{className:"row"},c.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Contact Phone Number"),c.a.createElement(u.a.Control,{type:"text",id:"exampleInputUsername1",onChange:function(e){return x(parseInt(e.target.value))},value:w,placeholder:"info@gmilail.com"}))),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,{className:"row"},c.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Address"),c.a.createElement(u.a.Control,{type:"text",onChange:function(e){return L(e.target.value)},value:O,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement("div",{className:"col-md-5 "},c.a.createElement(u.a.Group,null,c.a.createElement("label",{htmlFor:"exampleSelectGender"},"Province"),c.a.createElement(u.a.Control,{type:"text",onChange:function(e){return k(e.target.value)},value:G,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"}))),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,null,c.a.createElement("label",{htmlFor:"exampleSelectGender"},"District/District"),c.a.createElement(u.a.Control,{type:"text",onChange:function(e){return U(e.target.value)},value:_,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,null,c.a.createElement("label",{htmlFor:"exampleSelectGender"},"Sub-Division"),c.a.createElement(u.a.Control,{type:"text",onChange:function(e){return T(e.target.value)},value:z,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"}))),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(u.a.Group,null,c.a.createElement("label",{htmlFor:"exampleSelectGender"},"Zip Code"),c.a.createElement(u.a.Control,{type:"text",onChange:function(e){return Y(e.target.value)},value:M,id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"mx-auto col-md-11"},c.a.createElement("button",{onClick:function(e){return function(e){return K.apply(this,arguments)}(e)},className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")))))))}}}]);
//# sourceMappingURL=33.e91fb1bd.chunk.js.map