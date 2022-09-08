(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[27],{125:function(e,a,t){"use strict";var l=t(1),s=t(2),r=t(5),i=t.n(r),o=t(0),c=t.n(o),n=(t(77),t(4)),d=t.n(n),m=["as","className","type","tooltip"],f={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},u=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,n=e.type,d=void 0===n?"valid":n,f=e.tooltip,u=void 0!==f&&f,b=Object(s.a)(e,m);return c.a.createElement(r,Object(l.a)({},b,{ref:a,className:i()(o,d+"-"+(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f;var b=u,v=c.a.createContext({controlId:void 0}),p=t(6),N=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],x=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.type,f=void 0===m?"checkbox":m,u=e.isValid,b=void 0!==u&&u,x=e.isInvalid,O=void 0!==x&&x,j=e.isStatic,y=e.as,P=void 0===y?"input":y,h=Object(s.a)(e,N),E=Object(o.useContext)(v),w=E.controlId,C=E.custom?[n,"custom-control-input"]:[r,"form-check-input"],I=C[0],F=C[1];return r=Object(p.a)(I,F),c.a.createElement(P,Object(l.a)({},h,{ref:a,type:f,id:t||w,className:i()(d,r,b&&"is-valid",O&&"is-invalid",j&&"position-static")}))}));x.displayName="FormCheckInput";var O=x,j=["bsPrefix","bsCustomPrefix","className","htmlFor"],y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(s.a)(e,j),f=Object(o.useContext)(v),u=f.controlId,b=f.custom?[r,"custom-control-label"]:[t,"form-check-label"],N=b[0],x=b[1];return t=Object(p.a)(N,x),c.a.createElement("label",Object(l.a)({},m,{ref:a,htmlFor:d||u,className:i()(n,t)}))}));y.displayName="FormCheckLabel";var P=y,h=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],E=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,f=e.disabled,u=void 0!==f&&f,N=e.isValid,x=void 0!==N&&N,j=e.isInvalid,y=void 0!==j&&j,E=e.feedbackTooltip,w=void 0!==E&&E,C=e.feedback,I=e.className,F=e.style,k=e.title,g=void 0===k?"":k,R=e.type,V=void 0===R?"checkbox":R,L=e.label,T=e.children,S=e.custom,z=e.as,G=void 0===z?"input":z,M=Object(s.a)(e,h),A="switch"===V||S,J=A?[n,"custom-control"]:[r,"form-check"],q=J[0],B=J[1];r=Object(p.a)(q,B);var D=Object(o.useContext)(v).controlId,H=Object(o.useMemo)((function(){return{controlId:t||D,custom:A}}),[D,A,t]),K=A||null!=L&&!1!==L&&!T,Q=c.a.createElement(O,Object(l.a)({},M,{type:"switch"===V?"checkbox":V,ref:a,isValid:x,isInvalid:y,isStatic:!K,disabled:u,as:G}));return c.a.createElement(v.Provider,{value:H},c.a.createElement("div",{style:F,className:i()(I,r,A&&"custom-"+V,m&&r+"-inline")},T||c.a.createElement(c.a.Fragment,null,Q,K&&c.a.createElement(P,{title:g},L),(x||y)&&c.a.createElement(b,{type:x?"valid":"invalid",tooltip:w},C))))}));E.displayName="FormCheck",E.Input=O,E.Label=P;var w=E,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],I=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.isValid,f=e.isInvalid,u=e.lang,b=e.as,N=void 0===b?"input":b,x=Object(s.a)(e,C),O=Object(o.useContext)(v),j=O.controlId,y=O.custom?[n,"custom-file-input"]:[r,"form-control-file"],P=y[0],h=y[1];return r=Object(p.a)(P,h),c.a.createElement(N,Object(l.a)({},x,{ref:a,id:t||j,type:"file",lang:u,className:i()(d,r,m&&"is-valid",f&&"is-invalid")}))}));I.displayName="FormFileInput";var F=I,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(s.a)(e,k),f=Object(o.useContext)(v),u=f.controlId,b=f.custom?[r,"custom-file-label"]:[t,"form-file-label"],N=b[0],x=b[1];return t=Object(p.a)(N,x),c.a.createElement("label",Object(l.a)({},m,{ref:a,htmlFor:d||u,className:i()(n,t),"data-browse":m["data-browse"]}))}));g.displayName="FormFileLabel";var R=g,V=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],L=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,f=e.isValid,u=void 0!==f&&f,N=e.isInvalid,x=void 0!==N&&N,O=e.feedbackTooltip,j=void 0!==O&&O,y=e.feedback,P=e.className,h=e.style,E=e.label,w=e.children,C=e.custom,I=e.lang,k=e["data-browse"],g=e.as,L=void 0===g?"div":g,T=e.inputAs,S=void 0===T?"input":T,z=Object(s.a)(e,V),G=C?[n,"custom"]:[r,"form-file"],M=G[0],A=G[1];r=Object(p.a)(M,A);var J=Object(o.useContext)(v).controlId,q=Object(o.useMemo)((function(){return{controlId:t||J,custom:C}}),[J,C,t]),B=null!=E&&!1!==E&&!w,D=c.a.createElement(F,Object(l.a)({},z,{ref:a,isValid:u,isInvalid:x,disabled:m,as:S,lang:I}));return c.a.createElement(v.Provider,{value:q},c.a.createElement(L,{style:h,className:i()(P,r,C&&"custom-file")},w||c.a.createElement(c.a.Fragment,null,C?c.a.createElement(c.a.Fragment,null,D,B&&c.a.createElement(R,{"data-browse":k},E)):c.a.createElement(c.a.Fragment,null,B&&c.a.createElement(R,null,E),D),(u||x)&&c.a.createElement(b,{type:u?"valid":"invalid",tooltip:j},y))))}));L.displayName="FormFile",L.Input=F,L.Label=R;var T=L,S=(t(43),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),z=c.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,f=e.size,u=e.htmlSize,b=e.id,N=e.className,x=e.isValid,O=void 0!==x&&x,j=e.isInvalid,y=void 0!==j&&j,P=e.plaintext,h=e.readOnly,E=e.custom,w=e.as,C=void 0===w?"input":w,I=Object(s.a)(e,S),F=Object(o.useContext)(v).controlId,k=E?[d,"custom"]:[n,"form-control"],g=k[0],R=k[1];if(n=Object(p.a)(g,R),P)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===m){var V;(V={})[n+"-file"]=!0,t=V}else if("range"===m){var L;(L={})[n+"-range"]=!0,t=L}else if("select"===C&&E){var T;(T={})[n+"-select"]=!0,T[n+"-select-"+f]=f,t=T}else{var z;(z={})[n]=!0,z[n+"-"+f]=f,t=z}return c.a.createElement(C,Object(l.a)({},I,{type:m,size:u,ref:a,readOnly:h,id:b||F,className:i()(N,t,O&&"is-valid",y&&"is-invalid")}))}));z.displayName="FormControl";var G=Object.assign(z,{Feedback:b}),M=["bsPrefix","className","children","controlId","as"],A=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,d=e.controlId,m=e.as,f=void 0===m?"div":m,u=Object(s.a)(e,M);t=Object(p.a)(t,"form-group");var b=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(v.Provider,{value:b},c.a.createElement(f,Object(l.a)({},u,{ref:a,className:i()(r,t)}),n))}));A.displayName="FormGroup";var J=A,q=["bsPrefix","className","as"],B=["xl","lg","md","sm","xs"],D=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"div":o,d=Object(s.a)(e,q),m=Object(p.a)(t,"col"),f=[],u=[];return B.forEach((function(e){var a,t,l,s=d[e];if(delete d[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var i="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+m+i:""+m+i+"-"+a),null!=l&&u.push("order"+i+"-"+l),null!=t&&u.push("offset"+i+"-"+t)})),f.length||f.push(m),c.a.createElement(n,Object(l.a)({},d,{ref:a,className:i.a.apply(void 0,[r].concat(f,u))}))}));D.displayName="Col";var H=D,K=["as","bsPrefix","column","srOnly","className","htmlFor"],Q=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,d=e.column,m=e.srOnly,f=e.className,u=e.htmlFor,b=Object(s.a)(e,K),N=Object(o.useContext)(v).controlId;n=Object(p.a)(n,"form-label");var x="col-form-label";"string"===typeof d&&(x=x+" "+x+"-"+d);var O=i()(f,n,m&&"sr-only",d&&x);return u=u||N,d?c.a.createElement(H,Object(l.a)({ref:a,as:"label",className:O,htmlFor:u},b)):c.a.createElement(r,Object(l.a)({ref:a,className:O,htmlFor:u},b))}));Q.displayName="FormLabel",Q.defaultProps={column:!1,srOnly:!1};var U=Q,W=["bsPrefix","className","as","muted"],X=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,m=Object(s.a)(e,W);return t=Object(p.a)(t,"form-text"),c.a.createElement(n,Object(l.a)({},m,{ref:a,className:i()(r,t,d&&"text-muted")}))}));X.displayName="FormText";var Y=X,Z=c.a.forwardRef((function(e,a){return c.a.createElement(w,Object(l.a)({},e,{ref:a,type:"switch"}))}));Z.displayName="Switch",Z.Input=w.Input,Z.Label=w.Label;var $=Z,_=t(44),ee=["bsPrefix","inline","className","validated","as"],ae=Object(_.a)("form-row"),te=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,o=e.className,n=e.validated,d=e.as,m=void 0===d?"form":d,f=Object(s.a)(e,ee);return t=Object(p.a)(t,"form"),c.a.createElement(m,Object(l.a)({},f,{ref:a,className:i()(o,n&&"was-validated",r&&t+"-inline")}))}));te.displayName="Form",te.defaultProps={inline:!1},te.Row=ae,te.Group=J,te.Control=G,te.Check=w,te.File=T,te.Switch=$,te.Label=U,te.Text=Y;a.a=te},531:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),r=t(125);a.default=function(){return s.a.createElement("div",{className:"card"},s.a.createElement("h4",null,"Online",s.a.createElement("br",null),"Payment"),s.a.createElement("div",{className:"card-body"},s.a.createElement("form",{className:"forms-sample"},s.a.createElement(r.a.Group,null,s.a.createElement(r.a.Control,{type:"password",className:"form-control rounded",id:"exampleInputName1",placeholder:"Old Password"})),s.a.createElement(r.a.Group,null,s.a.createElement(r.a.Control,{type:"password",className:"form-control rounded",id:"exampleInputEmail3",placeholder:"New Password"})),s.a.createElement(r.a.Group,null,s.a.createElement(r.a.Control,{type:"password",className:"form-control rounded",id:"exampleInputPassword4",placeholder:"Confirm Password"})),s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:"mx-auto col-md-12"},s.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Change Password"))))))}}}]);
//# sourceMappingURL=27.49beec1e.chunk.js.map