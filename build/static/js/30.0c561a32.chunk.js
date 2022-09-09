(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[30],{122:function(e,a,t){"use strict";var l=t(1),s=t(2),r=t(5),c=t.n(r),i=t(0),m=t.n(i),n=(t(77),t(4)),o=t.n(n),d=["as","className","type","tooltip"],u={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},b=m.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.className,n=e.type,o=void 0===n?"valid":n,u=e.tooltip,b=void 0!==u&&u,f=Object(s.a)(e,d);return m.a.createElement(r,Object(l.a)({},f,{ref:a,className:c()(i,o+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=u;var f=b,v=m.a.createContext({controlId:void 0}),p=t(6),N=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],x=m.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,d=e.type,u=void 0===d?"checkbox":d,b=e.isValid,f=void 0!==b&&b,x=e.isInvalid,E=void 0!==x&&x,h=e.isStatic,O=e.as,j=void 0===O?"input":O,y=Object(s.a)(e,N),P=Object(i.useContext)(v),w=P.controlId,F=P.custom?[n,"custom-control-input"]:[r,"form-check-input"],I=F[0],C=F[1];return r=Object(p.a)(I,C),m.a.createElement(j,Object(l.a)({},y,{ref:a,type:u,id:t||w,className:c()(o,r,f&&"is-valid",E&&"is-invalid",h&&"position-static")}))}));x.displayName="FormCheckInput";var E=x,h=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,o=e.htmlFor,d=Object(s.a)(e,h),u=Object(i.useContext)(v),b=u.controlId,f=u.custom?[r,"custom-control-label"]:[t,"form-check-label"],N=f[0],x=f[1];return t=Object(p.a)(N,x),m.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:o||b,className:c()(n,t)}))}));O.displayName="FormCheckLabel";var j=O,y=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],P=m.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,o=e.inline,d=void 0!==o&&o,u=e.disabled,b=void 0!==u&&u,N=e.isValid,x=void 0!==N&&N,h=e.isInvalid,O=void 0!==h&&h,P=e.feedbackTooltip,w=void 0!==P&&P,F=e.feedback,I=e.className,C=e.style,k=e.title,g=void 0===k?"":k,S=e.type,G=void 0===S?"checkbox":S,R=e.label,V=e.children,T=e.custom,L=e.as,z=void 0===L?"input":L,M=Object(s.a)(e,y),A="switch"===G||T,D=A?[n,"custom-control"]:[r,"form-check"],J=D[0],U=D[1];r=Object(p.a)(J,U);var Z=Object(i.useContext)(v).controlId,q=Object(i.useMemo)((function(){return{controlId:t||Z,custom:A}}),[Z,A,t]),B=A||null!=R&&!1!==R&&!V,H=m.a.createElement(E,Object(l.a)({},M,{type:"switch"===G?"checkbox":G,ref:a,isValid:x,isInvalid:O,isStatic:!B,disabled:b,as:z}));return m.a.createElement(v.Provider,{value:q},m.a.createElement("div",{style:C,className:c()(I,r,A&&"custom-"+G,d&&r+"-inline")},V||m.a.createElement(m.a.Fragment,null,H,B&&m.a.createElement(j,{title:g},R),(x||O)&&m.a.createElement(f,{type:x?"valid":"invalid",tooltip:w},F))))}));P.displayName="FormCheck",P.Input=E,P.Label=j;var w=P,F=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],I=m.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,d=e.isValid,u=e.isInvalid,b=e.lang,f=e.as,N=void 0===f?"input":f,x=Object(s.a)(e,F),E=Object(i.useContext)(v),h=E.controlId,O=E.custom?[n,"custom-file-input"]:[r,"form-control-file"],j=O[0],y=O[1];return r=Object(p.a)(j,y),m.a.createElement(N,Object(l.a)({},x,{ref:a,id:t||h,type:"file",lang:b,className:c()(o,r,d&&"is-valid",u&&"is-invalid")}))}));I.displayName="FormFileInput";var C=I,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,o=e.htmlFor,d=Object(s.a)(e,k),u=Object(i.useContext)(v),b=u.controlId,f=u.custom?[r,"custom-file-label"]:[t,"form-file-label"],N=f[0],x=f[1];return t=Object(p.a)(N,x),m.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:o||b,className:c()(n,t),"data-browse":d["data-browse"]}))}));g.displayName="FormFileLabel";var S=g,G=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],R=m.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,o=e.disabled,d=void 0!==o&&o,u=e.isValid,b=void 0!==u&&u,N=e.isInvalid,x=void 0!==N&&N,E=e.feedbackTooltip,h=void 0!==E&&E,O=e.feedback,j=e.className,y=e.style,P=e.label,w=e.children,F=e.custom,I=e.lang,k=e["data-browse"],g=e.as,R=void 0===g?"div":g,V=e.inputAs,T=void 0===V?"input":V,L=Object(s.a)(e,G),z=F?[n,"custom"]:[r,"form-file"],M=z[0],A=z[1];r=Object(p.a)(M,A);var D=Object(i.useContext)(v).controlId,J=Object(i.useMemo)((function(){return{controlId:t||D,custom:F}}),[D,F,t]),U=null!=P&&!1!==P&&!w,Z=m.a.createElement(C,Object(l.a)({},L,{ref:a,isValid:b,isInvalid:x,disabled:d,as:T,lang:I}));return m.a.createElement(v.Provider,{value:J},m.a.createElement(R,{style:y,className:c()(j,r,F&&"custom-file")},w||m.a.createElement(m.a.Fragment,null,F?m.a.createElement(m.a.Fragment,null,Z,U&&m.a.createElement(S,{"data-browse":k},P)):m.a.createElement(m.a.Fragment,null,U&&m.a.createElement(S,null,P),Z),(b||x)&&m.a.createElement(f,{type:b?"valid":"invalid",tooltip:h},O))))}));R.displayName="FormFile",R.Input=C,R.Label=S;var V=R,T=(t(43),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),L=m.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,o=e.bsCustomPrefix,d=e.type,u=e.size,b=e.htmlSize,f=e.id,N=e.className,x=e.isValid,E=void 0!==x&&x,h=e.isInvalid,O=void 0!==h&&h,j=e.plaintext,y=e.readOnly,P=e.custom,w=e.as,F=void 0===w?"input":w,I=Object(s.a)(e,T),C=Object(i.useContext)(v).controlId,k=P?[o,"custom"]:[n,"form-control"],g=k[0],S=k[1];if(n=Object(p.a)(g,S),j)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===d){var G;(G={})[n+"-file"]=!0,t=G}else if("range"===d){var R;(R={})[n+"-range"]=!0,t=R}else if("select"===F&&P){var V;(V={})[n+"-select"]=!0,V[n+"-select-"+u]=u,t=V}else{var L;(L={})[n]=!0,L[n+"-"+u]=u,t=L}return m.a.createElement(F,Object(l.a)({},I,{type:d,size:b,ref:a,readOnly:y,id:f||C,className:c()(N,t,E&&"is-valid",O&&"is-invalid")}))}));L.displayName="FormControl";var z=Object.assign(L,{Feedback:f}),M=["bsPrefix","className","children","controlId","as"],A=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,o=e.controlId,d=e.as,u=void 0===d?"div":d,b=Object(s.a)(e,M);t=Object(p.a)(t,"form-group");var f=Object(i.useMemo)((function(){return{controlId:o}}),[o]);return m.a.createElement(v.Provider,{value:f},m.a.createElement(u,Object(l.a)({},b,{ref:a,className:c()(r,t)}),n))}));A.displayName="FormGroup";var D=A,J=["bsPrefix","className","as"],U=["xl","lg","md","sm","xs"],Z=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,n=void 0===i?"div":i,o=Object(s.a)(e,J),d=Object(p.a)(t,"col"),u=[],b=[];return U.forEach((function(e){var a,t,l,s=o[e];if(delete o[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var c="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+d+c:""+d+c+"-"+a),null!=l&&b.push("order"+c+"-"+l),null!=t&&b.push("offset"+c+"-"+t)})),u.length||u.push(d),m.a.createElement(n,Object(l.a)({},o,{ref:a,className:c.a.apply(void 0,[r].concat(u,b))}))}));Z.displayName="Col";var q=Z,B=["as","bsPrefix","column","srOnly","className","htmlFor"],H=m.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,o=e.column,d=e.srOnly,u=e.className,b=e.htmlFor,f=Object(s.a)(e,B),N=Object(i.useContext)(v).controlId;n=Object(p.a)(n,"form-label");var x="col-form-label";"string"===typeof o&&(x=x+" "+x+"-"+o);var E=c()(u,n,d&&"sr-only",o&&x);return b=b||N,o?m.a.createElement(q,Object(l.a)({ref:a,as:"label",className:E,htmlFor:b},f)):m.a.createElement(r,Object(l.a)({ref:a,className:E,htmlFor:b},f))}));H.displayName="FormLabel",H.defaultProps={column:!1,srOnly:!1};var K=H,Q=["bsPrefix","className","as","muted"],W=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,n=void 0===i?"small":i,o=e.muted,d=Object(s.a)(e,Q);return t=Object(p.a)(t,"form-text"),m.a.createElement(n,Object(l.a)({},d,{ref:a,className:c()(r,t,o&&"text-muted")}))}));W.displayName="FormText";var X=W,Y=m.a.forwardRef((function(e,a){return m.a.createElement(w,Object(l.a)({},e,{ref:a,type:"switch"}))}));Y.displayName="Switch",Y.Input=w.Input,Y.Label=w.Label;var $=Y,_=t(44),ee=["bsPrefix","inline","className","validated","as"],ae=Object(_.a)("form-row"),te=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,i=e.className,n=e.validated,o=e.as,d=void 0===o?"form":o,u=Object(s.a)(e,ee);return t=Object(p.a)(t,"form"),m.a.createElement(d,Object(l.a)({},u,{ref:a,className:c()(i,n&&"was-validated",r&&t+"-inline")}))}));te.displayName="Form",te.defaultProps={inline:!1},te.Row=ae,te.Group=D,te.Control=z,te.Check=w,te.File=V,te.Switch=$,te.Label=K,te.Text=X;a.a=te},544:function(e,a,t){"use strict";t.r(a);var l=t(34),s=t(127),r=t.n(s),c=t(0),i=t.n(c),m=t(122),n=t(3);a.default=function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),s=a[0],o=a[1],d=Object(c.useState)(""),u=Object(l.a)(d,2),b=u[0],f=u[1],v=Object(c.useState)(""),p=Object(l.a)(v,2),N=p[0],x=p[1],E=Object(c.useState)(""),h=Object(l.a)(E,2),O=h[0],j=h[1],y=Object(c.useState)(""),P=Object(l.a)(y,2),w=P[0],F=P[1],I=Object(c.useState)(""),C=Object(l.a)(I,2),k=C[0],g=C[1],S=Object(c.useState)(""),G=Object(l.a)(S,2),R=G[0],V=G[1],T=Object(c.useState)(""),L=Object(l.a)(T,2),z=L[0],M=L[1],A=Object(c.useState)(""),D=Object(l.a)(A,2),J=D[0],U=D[1];return Object(c.useEffect)((function(){r.a.get("https://backend.klivepay.com/api/merchant/get-profile?email=merchant%40mail.com").then((function(e){o(e.data.merchant.email),j(e.data.merchant.mobile),f(e.data.merchant.name),x(e.data.merchant.surname),F(e.data.merchant.address),g(e.data.merchant.province),V(e.data.merchant.district),M(e.data.merchant.subDivision),U(e.data.merchant.zipCode),console.log("DATA IS ",e.data.merchant)}))}),[]),i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("h4",{className:"card-title"},"Personal Information"),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"row flex-column mt-5 mx-auto"},i.a.createElement("img",{className:"img-lg mx-auto rounded-circle",src:t(45),alt:"Profile"}),i.a.createElement("div",{className:"mt-2 mx-auto"},i.a.createElement("p",null,"Merchant Code: ",i.a.createElement("span",{className:"text-primary"},"M010303")),i.a.createElement("p",{className:"mx-auto"},"Email: ",i.a.createElement("span",{className:"text-primary"},s)))),i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-sample"},i.a.createElement("div",{className:"row justify-content-around"},i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,{className:" d-flex"},i.a.createElement("h5",{htmlFor:"exampleInputUsername1",className:"text-primary"},"System Username :-"),i.a.createElement("h6",{className:"ms-2"},b))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,{className:"d-flex"},i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Surname :-"),i.a.createElement("h6",{className:"ms-2"},N)))),i.a.createElement("div",{className:"row justify-content-around"},i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Mobile :-",i.a.createElement("span",{className:"text-black ms-1"},O)))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Address :-"),i.a.createElement("h6",{className:"ms-2"},w)))),i.a.createElement("div",{className:"row justify-content-around"},i.a.createElement("div",{className:"col-md-5 "},i.a.createElement(m.a.Group,null,i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Province :-"),i.a.createElement("h6",{className:"ms-2"},k))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,null,i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"District :-"),i.a.createElement("h6",{className:"ms-2"},R)))),i.a.createElement("div",{className:"row justify-content-around"},i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,null,i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Sub-Division :-"),i.a.createElement("h6",{className:"ms-2"},z))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement(m.a.Group,null,i.a.createElement("h5",{htmlFor:"exampleSelectGender",className:"text-primary"},"Zip Code :-"),i.a.createElement("h6",{className:"ms-2"},J)))),i.a.createElement("div",{className:"row "},i.a.createElement("div",{className:"mx-auto col-md-11"},i.a.createElement(n.b,{to:"/merchant/profile",className:"text-white"},i.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Edit profile"))))))))}}}]);
//# sourceMappingURL=30.0c561a32.chunk.js.map