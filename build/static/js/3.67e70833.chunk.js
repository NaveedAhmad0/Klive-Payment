(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[3],{127:function(e,a,t){"use strict";var l=t(1),r=t(3),c=t(5),s=t.n(c),i=t(0),n=t.n(i),o=(t(77),t(4)),m=t.n(o),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},f=n.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"div":t,i=e.className,o=e.type,m=void 0===o?"valid":o,u=e.tooltip,f=void 0!==u&&u,b=Object(r.a)(e,d);return n.a.createElement(c,Object(l.a)({},b,{ref:a,className:s()(i,m+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=u;var b=f,p=n.a.createContext({controlId:void 0}),v=t(6),E=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],N=n.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,b=void 0!==f&&f,N=e.isInvalid,x=void 0!==N&&N,y=e.isStatic,O=e.as,h=void 0===O?"input":O,j=Object(r.a)(e,E),P=Object(i.useContext)(p),F=P.controlId,w=P.custom?[o,"custom-control-input"]:[c,"form-check-input"],I=w[0],g=w[1];return c=Object(v.a)(I,g),n.a.createElement(h,Object(l.a)({},j,{ref:a,type:u,id:t||F,className:s()(m,c,b&&"is-valid",x&&"is-invalid",y&&"position-static")}))}));N.displayName="FormCheckInput";var x=N,y=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(r.a)(e,y),u=Object(i.useContext)(p),f=u.controlId,b=u.custom?[c,"custom-control-label"]:[t,"form-check-label"],E=b[0],N=b[1];return t=Object(v.a)(E,N),n.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||f,className:s()(o,t)}))}));O.displayName="FormCheckLabel";var h=O,j=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],P=n.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,f=void 0!==u&&u,E=e.isValid,N=void 0!==E&&E,y=e.isInvalid,O=void 0!==y&&y,P=e.feedbackTooltip,F=void 0!==P&&P,w=e.feedback,I=e.className,g=e.style,C=e.title,S=void 0===C?"":C,k=e.type,G=void 0===k?"checkbox":k,R=e.label,z=e.children,V=e.custom,M=e.as,D=void 0===M?"input":M,L=Object(r.a)(e,j),T="switch"===G||V,U=T?[o,"custom-control"]:[c,"form-check"],A=U[0],J=U[1];c=Object(v.a)(A,J);var q=Object(i.useContext)(p).controlId,B=Object(i.useMemo)((function(){return{controlId:t||q,custom:T}}),[q,T,t]),H=T||null!=R&&!1!==R&&!z,K=n.a.createElement(x,Object(l.a)({},L,{type:"switch"===G?"checkbox":G,ref:a,isValid:N,isInvalid:O,isStatic:!H,disabled:f,as:D}));return n.a.createElement(p.Provider,{value:B},n.a.createElement("div",{style:g,className:s()(I,c,T&&"custom-"+G,d&&c+"-inline")},z||n.a.createElement(n.a.Fragment,null,K,H&&n.a.createElement(h,{title:S},R),(N||O)&&n.a.createElement(b,{type:N?"valid":"invalid",tooltip:F},w))))}));P.displayName="FormCheck",P.Input=x,P.Label=h;var F=P,w=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],I=n.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.lang,b=e.as,E=void 0===b?"input":b,N=Object(r.a)(e,w),x=Object(i.useContext)(p),y=x.controlId,O=x.custom?[o,"custom-file-input"]:[c,"form-control-file"],h=O[0],j=O[1];return c=Object(v.a)(h,j),n.a.createElement(E,Object(l.a)({},N,{ref:a,id:t||y,type:"file",lang:f,className:s()(m,c,d&&"is-valid",u&&"is-invalid")}))}));I.displayName="FormFileInput";var g=I,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],S=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(r.a)(e,C),u=Object(i.useContext)(p),f=u.controlId,b=u.custom?[c,"custom-file-label"]:[t,"form-file-label"],E=b[0],N=b[1];return t=Object(v.a)(E,N),n.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||f,className:s()(o,t),"data-browse":d["data-browse"]}))}));S.displayName="FormFileLabel";var k=S,G=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],R=n.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,f=void 0!==u&&u,E=e.isInvalid,N=void 0!==E&&E,x=e.feedbackTooltip,y=void 0!==x&&x,O=e.feedback,h=e.className,j=e.style,P=e.label,F=e.children,w=e.custom,I=e.lang,C=e["data-browse"],S=e.as,R=void 0===S?"div":S,z=e.inputAs,V=void 0===z?"input":z,M=Object(r.a)(e,G),D=w?[o,"custom"]:[c,"form-file"],L=D[0],T=D[1];c=Object(v.a)(L,T);var U=Object(i.useContext)(p).controlId,A=Object(i.useMemo)((function(){return{controlId:t||U,custom:w}}),[U,w,t]),J=null!=P&&!1!==P&&!F,q=n.a.createElement(g,Object(l.a)({},M,{ref:a,isValid:f,isInvalid:N,disabled:d,as:V,lang:I}));return n.a.createElement(p.Provider,{value:A},n.a.createElement(R,{style:j,className:s()(h,c,w&&"custom-file")},F||n.a.createElement(n.a.Fragment,null,w?n.a.createElement(n.a.Fragment,null,q,J&&n.a.createElement(k,{"data-browse":C},P)):n.a.createElement(n.a.Fragment,null,J&&n.a.createElement(k,null,P),q),(f||N)&&n.a.createElement(b,{type:f?"valid":"invalid",tooltip:y},O))))}));R.displayName="FormFile",R.Input=g,R.Label=k;var z=R,V=(t(43),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),M=n.a.forwardRef((function(e,a){var t,c,o=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,f=e.htmlSize,b=e.id,E=e.className,N=e.isValid,x=void 0!==N&&N,y=e.isInvalid,O=void 0!==y&&y,h=e.plaintext,j=e.readOnly,P=e.custom,F=e.as,w=void 0===F?"input":F,I=Object(r.a)(e,V),g=Object(i.useContext)(p).controlId,C=P?[m,"custom"]:[o,"form-control"],S=C[0],k=C[1];if(o=Object(v.a)(S,k),h)(c={})[o+"-plaintext"]=!0,t=c;else if("file"===d){var G;(G={})[o+"-file"]=!0,t=G}else if("range"===d){var R;(R={})[o+"-range"]=!0,t=R}else if("select"===w&&P){var z;(z={})[o+"-select"]=!0,z[o+"-select-"+u]=u,t=z}else{var M;(M={})[o]=!0,M[o+"-"+u]=u,t=M}return n.a.createElement(w,Object(l.a)({},I,{type:d,size:f,ref:a,readOnly:j,id:b||g,className:s()(E,t,x&&"is-valid",O&&"is-invalid")}))}));M.displayName="FormControl";var D=Object.assign(M,{Feedback:b}),L=["bsPrefix","className","children","controlId","as"],T=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(r.a)(e,L);t=Object(v.a)(t,"form-group");var b=Object(i.useMemo)((function(){return{controlId:m}}),[m]);return n.a.createElement(p.Provider,{value:b},n.a.createElement(u,Object(l.a)({},f,{ref:a,className:s()(c,t)}),o))}));T.displayName="FormGroup";var U=T,A=["bsPrefix","className","as"],J=["xl","lg","md","sm","xs"],q=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.as,o=void 0===i?"div":i,m=Object(r.a)(e,A),d=Object(v.a)(t,"col"),u=[],f=[];return J.forEach((function(e){var a,t,l,r=m[e];if(delete m[e],"object"===typeof r&&null!=r){var c=r.span;a=void 0===c||c,t=r.offset,l=r.order}else a=r;var s="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+d+s:""+d+s+"-"+a),null!=l&&f.push("order"+s+"-"+l),null!=t&&f.push("offset"+s+"-"+t)})),u.length||u.push(d),n.a.createElement(o,Object(l.a)({},m,{ref:a,className:s.a.apply(void 0,[c].concat(u,f))}))}));q.displayName="Col";var B=q,H=["as","bsPrefix","column","srOnly","className","htmlFor"],K=n.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"label":t,o=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,f=e.htmlFor,b=Object(r.a)(e,H),E=Object(i.useContext)(p).controlId;o=Object(v.a)(o,"form-label");var N="col-form-label";"string"===typeof m&&(N=N+" "+N+"-"+m);var x=s()(u,o,d&&"sr-only",m&&N);return f=f||E,m?n.a.createElement(B,Object(l.a)({ref:a,as:"label",className:x,htmlFor:f},b)):n.a.createElement(c,Object(l.a)({ref:a,className:x,htmlFor:f},b))}));K.displayName="FormLabel",K.defaultProps={column:!1,srOnly:!1};var Q=K,W=["bsPrefix","className","as","muted"],X=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.as,o=void 0===i?"small":i,m=e.muted,d=Object(r.a)(e,W);return t=Object(v.a)(t,"form-text"),n.a.createElement(o,Object(l.a)({},d,{ref:a,className:s()(c,t,m&&"text-muted")}))}));X.displayName="FormText";var Y=X,Z=n.a.forwardRef((function(e,a){return n.a.createElement(F,Object(l.a)({},e,{ref:a,type:"switch"}))}));Z.displayName="Switch",Z.Input=F.Input,Z.Label=F.Label;var $=Z,_=t(44),ee=["bsPrefix","inline","className","validated","as"],ae=Object(_.a)("form-row"),te=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.inline,i=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(r.a)(e,ee);return t=Object(v.a)(t,"form"),n.a.createElement(d,Object(l.a)({},u,{ref:a,className:s()(i,o&&"was-validated",c&&t+"-inline")}))}));te.displayName="Form",te.defaultProps={inline:!1},te.Row=ae,te.Group=U,te.Control=D,te.Check=F,te.File=z,te.Switch=$,te.Label=Q,te.Text=Y;a.a=te},179:function(e,a,t){"use strict";var l=t(0),r=t.n(l),c=t(127);a.a=function(){return r.a.createElement("div",{className:"col-12 grid-margin"},r.a.createElement("h4",{className:"card-title"},"Personal Information"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row flex-column mt-5 mx-auto"},r.a.createElement("img",{className:"img-lg mx-auto rounded-circle",src:t(45),alt:"Profile"}),r.a.createElement("div",{className:"mt-2 mx-auto"},r.a.createElement("p",null,"Merchant Code: ",r.a.createElement("span",{className:"text-primary"},"M010303")),r.a.createElement("p",{className:"mx-auto"},"Email: ",r.a.createElement("span",{className:"text-primary"},"info@gmail.com")))),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-sample"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,{className:"row"},r.a.createElement("label",{htmlFor:"exampleInputUsername1"},"System Username"),r.a.createElement(c.a.Control,{type:"text",id:"exampleInputUsername1",placeholder:"info@gmilail.com",size:"lg"}))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,null,r.a.createElement("label",{htmlFor:"exampleSelectGender"},"Gender"),r.a.createElement("select",{className:"form-control",size:"lg",id:"exampleSelectGender"},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))))),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,{className:"row"},r.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Contact Phone Number"),r.a.createElement(c.a.Control,{type:"text",id:"exampleInputUsername1",placeholder:"info@gmilail.com"}))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,{className:"row"},r.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Address"),r.a.createElement(c.a.Control,{type:"text",id:"exampleInputUsername1",placeholder:"Full Address",size:"lg"})))),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5 "},r.a.createElement(c.a.Group,null,r.a.createElement("label",{htmlFor:"exampleSelectGender"},"Province"),r.a.createElement("select",{className:"form-control ",size:"lg",placeholder:"Select Province",id:"exampleSelectGender"},r.a.createElement("option",null,"Select Province"),r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female")))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,null,r.a.createElement("label",{htmlFor:"exampleSelectGender"},"District/District"),r.a.createElement("select",{className:"form-control ",size:"lg",placeholder:"Select Province",id:"exampleSelectGender"},r.a.createElement("option",null,"Select District"),r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))))),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,null,r.a.createElement("label",{htmlFor:"exampleSelectGender"},"District/District"),r.a.createElement("select",{className:"form-control ",size:"lg",placeholder:"Select Province",id:"exampleSelectGender"},r.a.createElement("option",null,"Select District"),r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female")))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(c.a.Group,null,r.a.createElement("label",{htmlFor:"exampleSelectGender"},"District/District"),r.a.createElement("select",{className:"form-control ",size:"lg",placeholder:"Select Province",id:"exampleSelectGender"},r.a.createElement("option",null,"Select District"),r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"))))),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"mx-auto col-md-11"},r.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")))))))}}}]);
//# sourceMappingURL=3.67e70833.chunk.js.map