(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[36],{546:function(e,a,t){"use strict";t.r(a);var m=t(22),c=t(70),l=t.n(c),r=t(0),s=t.n(r),n=t(47),o=t(5);a.default=function(){var e=Object(r.useState)(""),a=Object(m.a)(e,2),c=a[0],i=a[1],d=Object(r.useState)(""),E=Object(m.a)(d,2),u=E[0],p=E[1],N=Object(r.useState)(""),h=Object(m.a)(N,2),b=h[0],v=h[1],x=Object(r.useState)(""),j=Object(m.a)(x,2),f=j[0],S=j[1],O=Object(r.useState)(""),y=Object(m.a)(O,2),w=y[0],G=y[1],g=Object(r.useState)(""),k=Object(m.a)(g,2),F=k[0],D=k[1],A=Object(r.useState)(""),C=Object(m.a)(A,2),I=C[0],M=C[1],P=Object(r.useState)(""),J=Object(m.a)(P,2),U=J[0],z=J[1],T=Object(r.useState)(""),Z=Object(m.a)(T,2),q=Z[0],B=Z[1];return Object(r.useEffect)((function(){l.a.get("https://backend.klivepay.com/api/merchant/get-profile?email=merchant%40mail.com").then((function(e){i(e.data.merchant.email),S(e.data.merchant.mobile),p(e.data.merchant.name),v(e.data.merchant.surname),G(e.data.merchant.address),D(e.data.merchant.province),M(e.data.merchant.district),z(e.data.merchant.subDivision),B(e.data.merchant.zipCode),console.log("DATA IS ",e.data.merchant)}))}),[]),s.a.createElement("div",{className:"col-12 grid-margin"},s.a.createElement("h4",{className:"card-title"},"Personal Information"),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"row flex-column mt-5 mx-auto"},s.a.createElement("img",{className:"img-lg mx-auto rounded-circle",src:t(48),alt:"Profile"}),s.a.createElement("div",{className:"mt-2 mx-auto"},s.a.createElement("p",null,"Merchant Code: ",s.a.createElement("span",{className:"text-primary"},"M010303")),s.a.createElement("p",{className:"mx-auto"},"Email: ",s.a.createElement("span",{className:"text-primary"},c)))),s.a.createElement("div",{className:"card-body"},s.a.createElement("form",{className:"form-sample"},s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,{className:" d-flex"},s.a.createElement("h5",{htmlFor:"exampleInputUsername1",className:"text-primary"},"System Username :-"),s.a.createElement("h6",{className:"ms-2"},u))),s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,{className:"d-flex"},s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Surname :-"),s.a.createElement("h6",{className:"ms-2"},b)))),s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,{className:"row"},s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Mobile :-",s.a.createElement("span",{className:"text-black ms-1"},f)))),s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,{className:"row"},s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Address :-"),s.a.createElement("h6",{className:"ms-2"},w)))),s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-md-5 "},s.a.createElement(n.a.Group,null,s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Province :-"),s.a.createElement("h6",{className:"ms-2"},F))),s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,null,s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"District :-"),s.a.createElement("h6",{className:"ms-2"},I)))),s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,null,s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Sub-Division :-"),s.a.createElement("h6",{className:"ms-2"},U))),s.a.createElement("div",{className:"col-md-5"},s.a.createElement(n.a.Group,null,s.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Zip Code :-"),s.a.createElement("h6",{className:"ms-2"},q)))),s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:"mx-auto col-md-11"},s.a.createElement(o.b,{to:"/merchant/profile",className:"text-white"},s.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Edit profile"))))))))}}}]);
//# sourceMappingURL=36.9dd5324f.chunk.js.map