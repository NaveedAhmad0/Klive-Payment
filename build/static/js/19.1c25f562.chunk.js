(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[19],{127:function(e,a,t){"use strict";a.a="https://backend.klivepay.com/api"},531:function(e,a,t){"use strict";t.r(a);var l=t(33),n=t(130),c=t.n(n),s=(t(503),t(0)),r=t.n(s),o=t(134);t(127);a.default=function(){var e=Object(s.useState)([]),a=Object(l.a)(e,2),t=a[0],n=a[1],m=Object(s.useState)(null),i=Object(l.a)(m,2),u=(i[0],i[1],Object(s.useState)([])),d=Object(l.a)(u,2),p=d[0],v=d[1],h=Object(s.useState)([]),E=Object(l.a)(h,2),g=E[0],b=E[1];Object(s.useEffect)((function(){c.a.get("https://backend.klivepay.com/api/admin/get-merchant-list").then((function(e){for(var a=[],t=0;t<e.data.length;t++)a.push({email:e.data[t].email});n(a),console.log("sample",a)}))}),[]),console.log(t);return r.a.createElement("div",null,r.a.createElement("div",{className:"col-12 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-sample"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(o.a.Group,{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(o.a.Control,{type:"text",placeholder:"Users Email",onChange:function(e){return v(e.target.value)},value:p})))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(o.a.Group,{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("select",{"aria-multiselectable":!0,"multiselect-serach":"true",value:g,onChange:function(e){return function(e,a){var t=[e.target.value];b(t)}(e)},className:"form-control ","data-live-search":"true"},r.a.createElement("option",null,"Select Merchant"),t.length?t.map((function(e){return r.a.createElement("option",{value:e.email},e.email)})):""))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("button",{onClick:function(e){e.preventDefault();try{c.a.patch("https://backend.klivepay.com/api/admin/assign-merchnat-to-user",JSON.stringify({merchantEmail:g,userEmail:p}),{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),alert("Asssigned sucessfully!")}))}catch(a){a&&alert("something went wrong!"),console.log(a)}console.log("merchantEmail",g),console.log("merch",t)},className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree"))))))))}}}]);
//# sourceMappingURL=19.1c25f562.chunk.js.map