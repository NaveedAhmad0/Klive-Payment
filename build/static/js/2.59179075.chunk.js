(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[2],{130:function(e,a,t){"use strict";var l=t(1),s=t(2),r=t(4),c=t.n(r),o=t(0),i=t.n(o),n=(t(77),t(3)),m=t.n(n),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},b=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,n=e.type,m=void 0===n?"valid":n,u=e.tooltip,b=void 0!==u&&u,f=Object(s.a)(e,d);return i.a.createElement(r,Object(l.a)({},f,{ref:a,className:c()(o,m+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=u;var f=b,v=i.a.createContext({controlId:void 0}),p=t(5),N=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],E=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,b=e.isValid,f=void 0!==b&&b,E=e.isInvalid,x=void 0!==E&&E,y=e.isStatic,O=e.as,h=void 0===O?"input":O,j=Object(s.a)(e,N),w=Object(o.useContext)(v),P=w.controlId,C=w.custom?[n,"custom-control-input"]:[r,"form-check-input"],k=C[0],F=C[1];return r=Object(p.a)(k,F),i.a.createElement(h,Object(l.a)({},j,{ref:a,type:u,id:t||P,className:c()(m,r,f&&"is-valid",x&&"is-invalid",y&&"position-static")}))}));E.displayName="FormCheckInput";var x=E,y=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(s.a)(e,y),u=Object(o.useContext)(v),b=u.controlId,f=u.custom?[r,"custom-control-label"]:[t,"form-check-label"],N=f[0],E=f[1];return t=Object(p.a)(N,E),i.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:c()(n,t)}))}));O.displayName="FormCheckLabel";var h=O,j=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],w=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,b=void 0!==u&&u,N=e.isValid,E=void 0!==N&&N,y=e.isInvalid,O=void 0!==y&&y,w=e.feedbackTooltip,P=void 0!==w&&w,C=e.feedback,k=e.className,F=e.style,I=e.title,g=void 0===I?"":I,R=e.type,V=void 0===R?"checkbox":R,T=e.label,G=e.children,S=e.custom,L=e.as,z=void 0===L?"input":L,A=Object(s.a)(e,j),M="switch"===V||S,D=M?[n,"custom-control"]:[r,"form-check"],J=D[0],K=D[1];r=Object(p.a)(J,K);var q=Object(o.useContext)(v).controlId,B=Object(o.useMemo)((function(){return{controlId:t||q,custom:M}}),[q,M,t]),H=M||null!=T&&!1!==T&&!G,Q=i.a.createElement(x,Object(l.a)({},A,{type:"switch"===V?"checkbox":V,ref:a,isValid:E,isInvalid:O,isStatic:!H,disabled:b,as:z}));return i.a.createElement(v.Provider,{value:B},i.a.createElement("div",{style:F,className:c()(k,r,M&&"custom-"+V,d&&r+"-inline")},G||i.a.createElement(i.a.Fragment,null,Q,H&&i.a.createElement(h,{title:g},T),(E||O)&&i.a.createElement(f,{type:E?"valid":"invalid",tooltip:P},C))))}));w.displayName="FormCheck",w.Input=x,w.Label=h;var P=w,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,b=e.lang,f=e.as,N=void 0===f?"input":f,E=Object(s.a)(e,C),x=Object(o.useContext)(v),y=x.controlId,O=x.custom?[n,"custom-file-input"]:[r,"form-control-file"],h=O[0],j=O[1];return r=Object(p.a)(h,j),i.a.createElement(N,Object(l.a)({},E,{ref:a,id:t||y,type:"file",lang:b,className:c()(m,r,d&&"is-valid",u&&"is-invalid")}))}));k.displayName="FormFileInput";var F=k,I=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(s.a)(e,I),u=Object(o.useContext)(v),b=u.controlId,f=u.custom?[r,"custom-file-label"]:[t,"form-file-label"],N=f[0],E=f[1];return t=Object(p.a)(N,E),i.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:c()(n,t),"data-browse":d["data-browse"]}))}));g.displayName="FormFileLabel";var R=g,V=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,b=void 0!==u&&u,N=e.isInvalid,E=void 0!==N&&N,x=e.feedbackTooltip,y=void 0!==x&&x,O=e.feedback,h=e.className,j=e.style,w=e.label,P=e.children,C=e.custom,k=e.lang,I=e["data-browse"],g=e.as,T=void 0===g?"div":g,G=e.inputAs,S=void 0===G?"input":G,L=Object(s.a)(e,V),z=C?[n,"custom"]:[r,"form-file"],A=z[0],M=z[1];r=Object(p.a)(A,M);var D=Object(o.useContext)(v).controlId,J=Object(o.useMemo)((function(){return{controlId:t||D,custom:C}}),[D,C,t]),K=null!=w&&!1!==w&&!P,q=i.a.createElement(F,Object(l.a)({},L,{ref:a,isValid:b,isInvalid:E,disabled:d,as:S,lang:k}));return i.a.createElement(v.Provider,{value:J},i.a.createElement(T,{style:j,className:c()(h,r,C&&"custom-file")},P||i.a.createElement(i.a.Fragment,null,C?i.a.createElement(i.a.Fragment,null,q,K&&i.a.createElement(R,{"data-browse":I},w)):i.a.createElement(i.a.Fragment,null,K&&i.a.createElement(R,null,w),q),(b||E)&&i.a.createElement(f,{type:b?"valid":"invalid",tooltip:y},O))))}));T.displayName="FormFile",T.Input=F,T.Label=R;var G=T,S=(t(41),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),L=i.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,b=e.htmlSize,f=e.id,N=e.className,E=e.isValid,x=void 0!==E&&E,y=e.isInvalid,O=void 0!==y&&y,h=e.plaintext,j=e.readOnly,w=e.custom,P=e.as,C=void 0===P?"input":P,k=Object(s.a)(e,S),F=Object(o.useContext)(v).controlId,I=w?[m,"custom"]:[n,"form-control"],g=I[0],R=I[1];if(n=Object(p.a)(g,R),h)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===d){var V;(V={})[n+"-file"]=!0,t=V}else if("range"===d){var T;(T={})[n+"-range"]=!0,t=T}else if("select"===C&&w){var G;(G={})[n+"-select"]=!0,G[n+"-select-"+u]=u,t=G}else{var L;(L={})[n]=!0,L[n+"-"+u]=u,t=L}return i.a.createElement(C,Object(l.a)({},k,{type:d,size:b,ref:a,readOnly:j,id:f||F,className:c()(N,t,x&&"is-valid",O&&"is-invalid")}))}));L.displayName="FormControl";var z=Object.assign(L,{Feedback:f}),A=["bsPrefix","className","children","controlId","as"],M=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,b=Object(s.a)(e,A);t=Object(p.a)(t,"form-group");var f=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return i.a.createElement(v.Provider,{value:f},i.a.createElement(u,Object(l.a)({},b,{ref:a,className:c()(r,t)}),n))}));M.displayName="FormGroup";var D=M,J=["bsPrefix","className","as"],K=["xl","lg","md","sm","xs"],q=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"div":o,m=Object(s.a)(e,J),d=Object(p.a)(t,"col"),u=[],b=[];return K.forEach((function(e){var a,t,l,s=m[e];if(delete m[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var c="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+d+c:""+d+c+"-"+a),null!=l&&b.push("order"+c+"-"+l),null!=t&&b.push("offset"+c+"-"+t)})),u.length||u.push(d),i.a.createElement(n,Object(l.a)({},m,{ref:a,className:c.a.apply(void 0,[r].concat(u,b))}))}));q.displayName="Col";var B=q,H=["as","bsPrefix","column","srOnly","className","htmlFor"],Q=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,b=e.htmlFor,f=Object(s.a)(e,H),N=Object(o.useContext)(v).controlId;n=Object(p.a)(n,"form-label");var E="col-form-label";"string"===typeof m&&(E=E+" "+E+"-"+m);var x=c()(u,n,d&&"sr-only",m&&E);return b=b||N,m?i.a.createElement(B,Object(l.a)({ref:a,as:"label",className:x,htmlFor:b},f)):i.a.createElement(r,Object(l.a)({ref:a,className:x,htmlFor:b},f))}));Q.displayName="FormLabel",Q.defaultProps={column:!1,srOnly:!1};var U=Q,W=["bsPrefix","className","as","muted"],X=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"small":o,m=e.muted,d=Object(s.a)(e,W);return t=Object(p.a)(t,"form-text"),i.a.createElement(n,Object(l.a)({},d,{ref:a,className:c()(r,t,m&&"text-muted")}))}));X.displayName="FormText";var Y=X,Z=i.a.forwardRef((function(e,a){return i.a.createElement(P,Object(l.a)({},e,{ref:a,type:"switch"}))}));Z.displayName="Switch",Z.Input=P.Input,Z.Label=P.Label;var $=Z,_=t(42),ee=["bsPrefix","inline","className","validated","as"],ae=Object(_.a)("form-row"),te=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,o=e.className,n=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(s.a)(e,ee);return t=Object(p.a)(t,"form"),i.a.createElement(d,Object(l.a)({},u,{ref:a,className:c()(o,n&&"was-validated",r&&t+"-inline")}))}));te.displayName="Form",te.defaultProps={inline:!1},te.Row=ae,te.Group=D,te.Control=z,te.Check=P,te.File=G,te.Switch=$,te.Label=U,te.Text=Y;a.a=te},152:function(e,a,t){"use strict";var l=t(0),s=t.n(l),r=t(130);a.a=function(){return s.a.createElement("div",{className:"col-12 grid-margin"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("form",{className:"form-sample"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("div",{className:"form-check"},s.a.createElement("label",{className:"form-check-label text-muted"},s.a.createElement("input",{type:"checkbox",className:"form-check-input"}),s.a.createElement("i",{className:"input-helper"}),"Transaction Date"))),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("div",{className:"form-check"},s.a.createElement("label",{className:"form-check-label text-muted"},s.a.createElement("input",{type:"checkbox",className:"form-check-input"}),s.a.createElement("i",{className:"input-helper"}),"Payment Date")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"Keywords"})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"All Channel"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("select",{className:"form-control"},s.a.createElement("option",null,"Male"),s.a.createElement("option",null,"Female"))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"Trans. Status"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("select",{className:"form-control"},s.a.createElement("option",null,"Category1"),s.a.createElement("option",null,"Category2"),s.a.createElement("option",null,"Category3"),s.a.createElement("option",null,"Category4"))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"Trans. Status"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"date"})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"date"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")))))))}}}]);
//# sourceMappingURL=2.59179075.chunk.js.map