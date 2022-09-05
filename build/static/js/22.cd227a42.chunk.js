(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[22],{127:function(e,a,t){"use strict";var l=t(1),s=t(2),r=t(5),i=t.n(r),o=t(0),c=t.n(o),n=(t(77),t(4)),m=t.n(n),d=["as","className","type","tooltip"],f={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},b=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,n=e.type,m=void 0===n?"valid":n,f=e.tooltip,b=void 0!==f&&f,u=Object(s.a)(e,d);return c.a.createElement(r,Object(l.a)({},u,{ref:a,className:i()(o,m+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=f;var u=b,v=c.a.createContext({controlId:void 0}),p=t(6),x=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],N=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.type,f=void 0===d?"checkbox":d,b=e.isValid,u=void 0!==b&&b,N=e.isInvalid,O=void 0!==N&&N,h=e.isStatic,j=e.as,y=void 0===j?"input":j,E=Object(s.a)(e,x),P=Object(o.useContext)(v),w=P.controlId,C=P.custom?[n,"custom-control-input"]:[r,"form-check-input"],I=C[0],g=C[1];return r=Object(p.a)(I,g),c.a.createElement(y,Object(l.a)({},E,{ref:a,type:f,id:t||w,className:i()(m,r,u&&"is-valid",O&&"is-invalid",h&&"position-static")}))}));N.displayName="FormCheckInput";var O=N,h=["bsPrefix","bsCustomPrefix","className","htmlFor"],j=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(s.a)(e,h),f=Object(o.useContext)(v),b=f.controlId,u=f.custom?[r,"custom-control-label"]:[t,"form-check-label"],x=u[0],N=u[1];return t=Object(p.a)(x,N),c.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:i()(n,t)}))}));j.displayName="FormCheckLabel";var y=j,E=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],P=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,f=e.disabled,b=void 0!==f&&f,x=e.isValid,N=void 0!==x&&x,h=e.isInvalid,j=void 0!==h&&h,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,I=e.className,g=e.style,F=e.title,k=void 0===F?"":F,R=e.type,V=void 0===R?"checkbox":R,L=e.label,S=e.children,T=e.custom,z=e.as,G=void 0===z?"input":z,M=Object(s.a)(e,E),A="switch"===V||T,D=A?[n,"custom-control"]:[r,"form-check"],J=D[0],U=D[1];r=Object(p.a)(J,U);var q=Object(o.useContext)(v).controlId,B=Object(o.useMemo)((function(){return{controlId:t||q,custom:A}}),[q,A,t]),H=A||null!=L&&!1!==L&&!S,K=c.a.createElement(O,Object(l.a)({},M,{type:"switch"===V?"checkbox":V,ref:a,isValid:N,isInvalid:j,isStatic:!H,disabled:b,as:G}));return c.a.createElement(v.Provider,{value:B},c.a.createElement("div",{style:g,className:i()(I,r,A&&"custom-"+V,d&&r+"-inline")},S||c.a.createElement(c.a.Fragment,null,K,H&&c.a.createElement(y,{title:k},L),(N||j)&&c.a.createElement(u,{type:N?"valid":"invalid",tooltip:w},C))))}));P.displayName="FormCheck",P.Input=O,P.Label=y;var w=P,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],I=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,f=e.isInvalid,b=e.lang,u=e.as,x=void 0===u?"input":u,N=Object(s.a)(e,C),O=Object(o.useContext)(v),h=O.controlId,j=O.custom?[n,"custom-file-input"]:[r,"form-control-file"],y=j[0],E=j[1];return r=Object(p.a)(y,E),c.a.createElement(x,Object(l.a)({},N,{ref:a,id:t||h,type:"file",lang:b,className:i()(m,r,d&&"is-valid",f&&"is-invalid")}))}));I.displayName="FormFileInput";var g=I,F=["bsPrefix","bsCustomPrefix","className","htmlFor"],k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(s.a)(e,F),f=Object(o.useContext)(v),b=f.controlId,u=f.custom?[r,"custom-file-label"]:[t,"form-file-label"],x=u[0],N=u[1];return t=Object(p.a)(x,N),c.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:i()(n,t),"data-browse":d["data-browse"]}))}));k.displayName="FormFileLabel";var R=k,V=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],L=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,f=e.isValid,b=void 0!==f&&f,x=e.isInvalid,N=void 0!==x&&x,O=e.feedbackTooltip,h=void 0!==O&&O,j=e.feedback,y=e.className,E=e.style,P=e.label,w=e.children,C=e.custom,I=e.lang,F=e["data-browse"],k=e.as,L=void 0===k?"div":k,S=e.inputAs,T=void 0===S?"input":S,z=Object(s.a)(e,V),G=C?[n,"custom"]:[r,"form-file"],M=G[0],A=G[1];r=Object(p.a)(M,A);var D=Object(o.useContext)(v).controlId,J=Object(o.useMemo)((function(){return{controlId:t||D,custom:C}}),[D,C,t]),U=null!=P&&!1!==P&&!w,q=c.a.createElement(g,Object(l.a)({},z,{ref:a,isValid:b,isInvalid:N,disabled:d,as:T,lang:I}));return c.a.createElement(v.Provider,{value:J},c.a.createElement(L,{style:E,className:i()(y,r,C&&"custom-file")},w||c.a.createElement(c.a.Fragment,null,C?c.a.createElement(c.a.Fragment,null,q,U&&c.a.createElement(R,{"data-browse":F},P)):c.a.createElement(c.a.Fragment,null,U&&c.a.createElement(R,null,P),q),(b||N)&&c.a.createElement(u,{type:b?"valid":"invalid",tooltip:h},j))))}));L.displayName="FormFile",L.Input=g,L.Label=R;var S=L,T=(t(43),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),z=c.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,f=e.size,b=e.htmlSize,u=e.id,x=e.className,N=e.isValid,O=void 0!==N&&N,h=e.isInvalid,j=void 0!==h&&h,y=e.plaintext,E=e.readOnly,P=e.custom,w=e.as,C=void 0===w?"input":w,I=Object(s.a)(e,T),g=Object(o.useContext)(v).controlId,F=P?[m,"custom"]:[n,"form-control"],k=F[0],R=F[1];if(n=Object(p.a)(k,R),y)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===d){var V;(V={})[n+"-file"]=!0,t=V}else if("range"===d){var L;(L={})[n+"-range"]=!0,t=L}else if("select"===C&&P){var S;(S={})[n+"-select"]=!0,S[n+"-select-"+f]=f,t=S}else{var z;(z={})[n]=!0,z[n+"-"+f]=f,t=z}return c.a.createElement(C,Object(l.a)({},I,{type:d,size:b,ref:a,readOnly:E,id:u||g,className:i()(x,t,O&&"is-valid",j&&"is-invalid")}))}));z.displayName="FormControl";var G=Object.assign(z,{Feedback:u}),M=["bsPrefix","className","children","controlId","as"],A=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,m=e.controlId,d=e.as,f=void 0===d?"div":d,b=Object(s.a)(e,M);t=Object(p.a)(t,"form-group");var u=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(v.Provider,{value:u},c.a.createElement(f,Object(l.a)({},b,{ref:a,className:i()(r,t)}),n))}));A.displayName="FormGroup";var D=A,J=["bsPrefix","className","as"],U=["xl","lg","md","sm","xs"],q=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"div":o,m=Object(s.a)(e,J),d=Object(p.a)(t,"col"),f=[],b=[];return U.forEach((function(e){var a,t,l,s=m[e];if(delete m[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var i="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+d+i:""+d+i+"-"+a),null!=l&&b.push("order"+i+"-"+l),null!=t&&b.push("offset"+i+"-"+t)})),f.length||f.push(d),c.a.createElement(n,Object(l.a)({},m,{ref:a,className:i.a.apply(void 0,[r].concat(f,b))}))}));q.displayName="Col";var B=q,H=["as","bsPrefix","column","srOnly","className","htmlFor"],K=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,m=e.column,d=e.srOnly,f=e.className,b=e.htmlFor,u=Object(s.a)(e,H),x=Object(o.useContext)(v).controlId;n=Object(p.a)(n,"form-label");var N="col-form-label";"string"===typeof m&&(N=N+" "+N+"-"+m);var O=i()(f,n,d&&"sr-only",m&&N);return b=b||x,m?c.a.createElement(B,Object(l.a)({ref:a,as:"label",className:O,htmlFor:b},u)):c.a.createElement(r,Object(l.a)({ref:a,className:O,htmlFor:b},u))}));K.displayName="FormLabel",K.defaultProps={column:!1,srOnly:!1};var Q=K,W=["bsPrefix","className","as","muted"],X=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"small":o,m=e.muted,d=Object(s.a)(e,W);return t=Object(p.a)(t,"form-text"),c.a.createElement(n,Object(l.a)({},d,{ref:a,className:i()(r,t,m&&"text-muted")}))}));X.displayName="FormText";var Y=X,Z=c.a.forwardRef((function(e,a){return c.a.createElement(w,Object(l.a)({},e,{ref:a,type:"switch"}))}));Z.displayName="Switch",Z.Input=w.Input,Z.Label=w.Label;var $=Z,_=t(44),ee=["bsPrefix","inline","className","validated","as"],ae=Object(_.a)("form-row"),te=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,o=e.className,n=e.validated,m=e.as,d=void 0===m?"form":m,f=Object(s.a)(e,ee);return t=Object(p.a)(t,"form"),c.a.createElement(d,Object(l.a)({},f,{ref:a,className:i()(o,n&&"was-validated",r&&t+"-inline")}))}));te.displayName="Form",te.defaultProps={inline:!1},te.Row=ae,te.Group=D,te.Control=G,te.Check=w,te.File=S,te.Switch=$,te.Label=Q,te.Text=Y;a.a=te},489:function(e,a,t){"use strict";t.r(a),t.d(a,"UserLogin",(function(){return d}));var l=t(11),s=t(12),r=t(14),i=t(13),o=t(0),c=t.n(o),n=t(3),m=t(127),d=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center auth px-0"},c.a.createElement("div",{className:"row w-100 mx-0"},c.a.createElement("div",{className:"col-lg-4 mx-auto"},c.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},c.a.createElement("div",{className:"brand-logo"}),c.a.createElement(m.a,{className:"pt-3"},c.a.createElement(m.a.Group,{className:"d-flex search-field"},c.a.createElement(m.a.Control,{type:"email",placeholder:"Email",size:"lg",className:"h-auto"})),c.a.createElement(m.a.Group,{className:"d-flex search-field"},c.a.createElement(m.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto"})),c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-black"},"Forgot password?"),c.a.createElement("div",{className:"mt-3"},c.a.createElement(n.b,{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",to:"/dashboard"},"SIGN IN")),c.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account?"," ",c.a.createElement(n.b,{to:"/user-pages/register",className:"text-primary"},"Login"))))))))}}]),t}(o.Component);a.default=d}}]);
//# sourceMappingURL=22.cd227a42.chunk.js.map