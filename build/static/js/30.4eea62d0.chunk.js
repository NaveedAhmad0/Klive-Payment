(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[30],{531:function(e,a,t){"use strict";t.r(a);var m=t(22),l=t(70),c=t.n(l),s=t(0),r=t.n(s),n=t(47),i=t(5);a.default=function(){var e=Object(s.useState)(""),a=Object(m.a)(e,2),l=a[0],d=(a[1],Object(s.useState)("")),o=Object(m.a)(d,2),E=o[0],u=o[1],p=Object(s.useState)(""),N=Object(m.a)(p,2),b=N[0],x=N[1],v=Object(s.useState)(""),h=Object(m.a)(v,2),j=h[0],f=h[1],S=Object(s.useState)(""),O=Object(m.a)(S,2),y=O[0],w=O[1],G=Object(s.useState)(""),k=Object(m.a)(G,2),g=k[0],F=k[1],A=Object(s.useState)(""),D=Object(m.a)(A,2),P=D[0],I=D[1],M=Object(s.useState)(""),C=Object(m.a)(M,2),J=C[0],U=C[1],T=Object(s.useState)(""),Z=Object(m.a)(T,2),q=Z[0],z=Z[1];return Object(s.useEffect)((function(){c.a.get("https://backend.klivepay.com/api/admin/get-profile?email=admin%40mail.com").then((function(e){f(e.data.admin.mobile),u(e.data.admin.name),x(e.data.admin.surName),w(e.data.admin.address),F(e.data.admin.province),I(e.data.admin.district),U(e.data.admin.subDistrict),z(e.data.admin.pincode),console.log("DATA IS ",e.data.admin)}))}),[]),r.a.createElement("div",{className:"col-12 grid-margin"},r.a.createElement("h4",{className:"card-title"},"Personal admin Information"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row flex-column mt-5 mx-auto"},r.a.createElement("img",{className:"img-lg mx-auto rounded-circle",src:t(48),alt:"Profile"}),r.a.createElement("div",{className:"mt-2 mx-auto"},r.a.createElement("p",null,"Merchant Code: ",r.a.createElement("span",{className:"text-primary"},"M010303")),r.a.createElement("p",{className:"mx-auto"},"Email: ",r.a.createElement("span",{className:"text-primary"},l)))),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-sample"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,{className:" d-flex"},r.a.createElement("h5",{htmlFor:"exampleInputUsername1",className:"text-primary"},"System Username :-"),r.a.createElement("h6",{className:"ms-2"},E))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,{className:"d-flex"},r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"SurName :-"),r.a.createElement("h6",{className:"ms-2"},b)))),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,{className:"row"},r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Mobile :-",r.a.createElement("span",{className:"text-black ms-1"},j)))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,{className:"row"},r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Address :-",r.a.createElement("span",{className:" text-black ms-2"},y))))),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5 "},r.a.createElement(n.a.Group,null,r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Province :-",r.a.createElement("span",{className:"text-black ms-2"},g)))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,null,r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"District :-",r.a.createElement("span",{className:"text-black ms-2"},P))))),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,null,r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Sub-Division :-",r.a.createElement("span",{className:"text-black ms-2"},J)))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(n.a.Group,null,r.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Zip Code :-",r.a.createElement("span",{className:"text-black ms-2"},q))))),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"mx-auto col-md-11"},r.a.createElement(i.b,{to:"/admin/edit-AdminProfile",className:"text-white"},r.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Edit profile"))))))))}}}]);
//# sourceMappingURL=30.4eea62d0.chunk.js.map