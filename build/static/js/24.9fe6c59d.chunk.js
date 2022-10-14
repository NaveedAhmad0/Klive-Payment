(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[24],{134:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(4),i=a.n(o),s=a(0),l=a.n(s),c=(a(79),a(3)),u=a.n(c),d=["as","className","type","tooltip"],f={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},p=l.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,s=e.className,c=e.type,u=void 0===c?"valid":c,f=e.tooltip,p=void 0!==f&&f,m=Object(n.a)(e,d);return l.a.createElement(o,Object(r.a)({},m,{ref:t,className:i()(s,u+"-"+(p?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=f;var m=p,b=l.a.createContext({controlId:void 0}),h=a(5),v=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.type,f=void 0===d?"checkbox":d,p=e.isValid,m=void 0!==p&&p,y=e.isInvalid,O=void 0!==y&&y,g=e.isStatic,x=e.as,w=void 0===x?"input":x,j=Object(n.a)(e,v),k=Object(s.useContext)(b),N=k.controlId,P=k.custom?[c,"custom-control-input"]:[o,"form-check-input"],C=P[0],E=P[1];return o=Object(h.a)(C,E),l.a.createElement(w,Object(r.a)({},j,{ref:t,type:f,id:a||N,className:i()(u,o,m&&"is-valid",O&&"is-invalid",g&&"position-static")}))}));y.displayName="FormCheckInput";var O=y,g=["bsPrefix","bsCustomPrefix","className","htmlFor"],x=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(n.a)(e,g),f=Object(s.useContext)(b),p=f.controlId,m=f.custom?[o,"custom-control-label"]:[a,"form-check-label"],v=m[0],y=m[1];return a=Object(h.a)(v,y),l.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||p,className:i()(c,a)}))}));x.displayName="FormCheckLabel";var w=x,j=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],k=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,c=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,f=e.disabled,p=void 0!==f&&f,v=e.isValid,y=void 0!==v&&v,g=e.isInvalid,x=void 0!==g&&g,k=e.feedbackTooltip,N=void 0!==k&&k,P=e.feedback,C=e.className,E=e.style,S=e.title,I=void 0===S?"":S,F=e.type,R=void 0===F?"checkbox":F,T=e.label,_=e.children,D=e.custom,L=e.as,V=void 0===L?"input":L,A=Object(n.a)(e,j),M="switch"===R||D,z=M?[c,"custom-control"]:[o,"form-check"],K=z[0],U=z[1];o=Object(h.a)(K,U);var W=Object(s.useContext)(b).controlId,q=Object(s.useMemo)((function(){return{controlId:a||W,custom:M}}),[W,M,a]),G=M||null!=T&&!1!==T&&!_,J=l.a.createElement(O,Object(r.a)({},A,{type:"switch"===R?"checkbox":R,ref:t,isValid:y,isInvalid:x,isStatic:!G,disabled:p,as:V}));return l.a.createElement(b.Provider,{value:q},l.a.createElement("div",{style:E,className:i()(C,o,M&&"custom-"+R,d&&o+"-inline")},_||l.a.createElement(l.a.Fragment,null,J,G&&l.a.createElement(w,{title:I},T),(y||x)&&l.a.createElement(m,{type:y?"valid":"invalid",tooltip:N},P))))}));k.displayName="FormCheck",k.Input=O,k.Label=w;var N=k,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],C=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,p=e.lang,m=e.as,v=void 0===m?"input":m,y=Object(n.a)(e,P),O=Object(s.useContext)(b),g=O.controlId,x=O.custom?[c,"custom-file-input"]:[o,"form-control-file"],w=x[0],j=x[1];return o=Object(h.a)(w,j),l.a.createElement(v,Object(r.a)({},y,{ref:t,id:a||g,type:"file",lang:p,className:i()(u,o,d&&"is-valid",f&&"is-invalid")}))}));C.displayName="FormFileInput";var E=C,S=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(n.a)(e,S),f=Object(s.useContext)(b),p=f.controlId,m=f.custom?[o,"custom-file-label"]:[a,"form-file-label"],v=m[0],y=m[1];return a=Object(h.a)(v,y),l.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||p,className:i()(c,a),"data-browse":d["data-browse"]}))}));I.displayName="FormFileLabel";var F=I,R=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,c=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,f=e.isValid,p=void 0!==f&&f,v=e.isInvalid,y=void 0!==v&&v,O=e.feedbackTooltip,g=void 0!==O&&O,x=e.feedback,w=e.className,j=e.style,k=e.label,N=e.children,P=e.custom,C=e.lang,S=e["data-browse"],I=e.as,T=void 0===I?"div":I,_=e.inputAs,D=void 0===_?"input":_,L=Object(n.a)(e,R),V=P?[c,"custom"]:[o,"form-file"],A=V[0],M=V[1];o=Object(h.a)(A,M);var z=Object(s.useContext)(b).controlId,K=Object(s.useMemo)((function(){return{controlId:a||z,custom:P}}),[z,P,a]),U=null!=k&&!1!==k&&!N,W=l.a.createElement(E,Object(r.a)({},L,{ref:t,isValid:p,isInvalid:y,disabled:d,as:D,lang:C}));return l.a.createElement(b.Provider,{value:K},l.a.createElement(T,{style:j,className:i()(w,o,P&&"custom-file")},N||l.a.createElement(l.a.Fragment,null,P?l.a.createElement(l.a.Fragment,null,W,U&&l.a.createElement(F,{"data-browse":S},k)):l.a.createElement(l.a.Fragment,null,U&&l.a.createElement(F,null,k),W),(p||y)&&l.a.createElement(m,{type:p?"valid":"invalid",tooltip:g},x))))}));T.displayName="FormFile",T.Input=E,T.Label=F;var _=T,D=(a(41),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),L=l.a.forwardRef((function(e,t){var a,o,c=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,p=e.htmlSize,m=e.id,v=e.className,y=e.isValid,O=void 0!==y&&y,g=e.isInvalid,x=void 0!==g&&g,w=e.plaintext,j=e.readOnly,k=e.custom,N=e.as,P=void 0===N?"input":N,C=Object(n.a)(e,D),E=Object(s.useContext)(b).controlId,S=k?[u,"custom"]:[c,"form-control"],I=S[0],F=S[1];if(c=Object(h.a)(I,F),w)(o={})[c+"-plaintext"]=!0,a=o;else if("file"===d){var R;(R={})[c+"-file"]=!0,a=R}else if("range"===d){var T;(T={})[c+"-range"]=!0,a=T}else if("select"===P&&k){var _;(_={})[c+"-select"]=!0,_[c+"-select-"+f]=f,a=_}else{var L;(L={})[c]=!0,L[c+"-"+f]=f,a=L}return l.a.createElement(P,Object(r.a)({},C,{type:d,size:p,ref:t,readOnly:j,id:m||E,className:i()(v,a,O&&"is-valid",x&&"is-invalid")}))}));L.displayName="FormControl";var V=Object.assign(L,{Feedback:m}),A=["bsPrefix","className","children","controlId","as"],M=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,p=Object(n.a)(e,A);a=Object(h.a)(a,"form-group");var m=Object(s.useMemo)((function(){return{controlId:u}}),[u]);return l.a.createElement(b.Provider,{value:m},l.a.createElement(f,Object(r.a)({},p,{ref:t,className:i()(o,a)}),c))}));M.displayName="FormGroup";var z=M,K=["bsPrefix","className","as"],U=["xl","lg","md","sm","xs"],W=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.as,c=void 0===s?"div":s,u=Object(n.a)(e,K),d=Object(h.a)(a,"col"),f=[],p=[];return U.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&p.push("order"+i+"-"+r),null!=a&&p.push("offset"+i+"-"+a)})),f.length||f.push(d),l.a.createElement(c,Object(r.a)({},u,{ref:t,className:i.a.apply(void 0,[o].concat(f,p))}))}));W.displayName="Col";var q=W,G=["as","bsPrefix","column","srOnly","className","htmlFor"],J=l.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"label":a,c=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,p=e.htmlFor,m=Object(n.a)(e,G),v=Object(s.useContext)(b).controlId;c=Object(h.a)(c,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var O=i()(f,c,d&&"sr-only",u&&y);return p=p||v,u?l.a.createElement(q,Object(r.a)({ref:t,as:"label",className:O,htmlFor:p},m)):l.a.createElement(o,Object(r.a)({ref:t,className:O,htmlFor:p},m))}));J.displayName="FormLabel",J.defaultProps={column:!1,srOnly:!1};var B=J,H=["bsPrefix","className","as","muted"],Y=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.as,c=void 0===s?"small":s,u=e.muted,d=Object(n.a)(e,H);return a=Object(h.a)(a,"form-text"),l.a.createElement(c,Object(r.a)({},d,{ref:t,className:i()(o,a,u&&"text-muted")}))}));Y.displayName="FormText";var $=Y,Q=l.a.forwardRef((function(e,t){return l.a.createElement(N,Object(r.a)({},e,{ref:t,type:"switch"}))}));Q.displayName="Switch",Q.Input=N.Input,Q.Label=N.Label;var X=Q,Z=a(42),ee=["bsPrefix","inline","className","validated","as"],te=Object(Z.a)("form-row"),ae=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,s=e.className,c=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(n.a)(e,ee);return a=Object(h.a)(a,"form"),l.a.createElement(d,Object(r.a)({},f,{ref:t,className:i()(s,c&&"was-validated",o&&a+"-inline")}))}));ae.displayName="Form",ae.defaultProps={inline:!1},ae.Row=te,ae.Group=z,ae.Control=V,ae.Check=N,ae.File=_,ae.Switch=X,ae.Label=B,ae.Text=$;t.a=ae},503:function(e,t,a){e.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=a(0)},function(e,t,a){e.exports=a(3)()},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(1),i=a.n(o);function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,e);var t,a,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=p(e);if(t){var n=p(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return f(this,a)}}(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={placeholder:t.props.placeholder,showDropdown:!1,selected:t.props.selected,options:[]},t}return t=o,(a=[{key:"setSelected",value:function(){}},{key:"setOptions",value:function(){var e=this;if(0!=this.props.options.length){var t=[];"object"===c(this.props.options[0])?this.props.options.map((function(a,r){var n=a[e.props.optionKey],o=a[e.props.optionLabel];t.push({key:n,label:o})})):"string"==typeof this.props.options[0]&&this.props.options.map((function(e){t.push({key:e,label:e})})),this.setState({options:t})}else console.log("React Dropdown Multiselect Error: options array is empty.")}},{key:"componentDidMount",value:function(){this.setOptions(),document.addEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"handleClickOutside",value:function(e){!1!==this.state.showDropdown&&0==this.node.contains(e.target)&&this.setState({showDropdown:!1})}},{key:"getPlaceholderValue",value:function(){if(0==this.state.selected.length)return this.props.placeholder;if(null!==this.props.placeholderMultipleChecked&&this.state.selected.length>1)return this.props.placeholderMultipleChecked;var e=s(this.state.options);if(0==e.length)return this.props.placeholder;var t=[];return this.props.optionKey,this.state.selected.map((function(a){var r=e.find((function(e){return e.key==a}));t.push(r.label)})),t.join(", ")}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"handleClick",value:function(){this.setState({showDropdown:!this.state.showDropdown})}},{key:"handleChange",value:function(e){if(void 0!==e.currentTarget){var t=s(this.state.selected),a=e.currentTarget.value;if(e.currentTarget.checked)t.push(a);else{var r=t.indexOf(a);t.splice(r,1)}this.setState({selected:t}),void 0!==this.props.handleOnChange&&this.props.handleOnChange(t)}}},{key:"handleSelectDeselectAll",value:function(){if(this.state.selected.length==this.state.options.length)this.setState({selected:[]}),void 0!==this.props.handleOnChange&&this.props.handleOnChange([]);else{var e=this.state.options,t=[];e.map((function(e){t.push(e.key.toString())})),this.setState({selected:t}),void 0!==this.props.handleOnChange&&this.props.handleOnChange(t)}}},{key:"render",value:function(){var e=this,t=1==this.state.showDropdown?"dropdown-menu show":"dropdown-menu";return n.a.createElement("div",{className:"dropdown",ref:function(t){return e.node=t}},n.a.createElement("button",{className:"btn dropdown-toggle ".concat(this.props.buttonClass),type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return e.handleClick()},style:{width:"100%",overflow:"hidden"}},n.a.createElement("span",{style:{overflow:"hidden",textOverflow:"ellipsis",width:"100%",float:"left",textAlign:"left",paddingRight:"6px",marginRight:"-6px"}},this.getPlaceholderValue())),n.a.createElement("div",{className:t,style:{padding:0,width:"100%"}},!0===this.props.showSelectToggle&&n.a.createElement("div",{className:"btn-group btn-group-sm btn-block"},n.a.createElement("button",{className:"actions-btn btn btn-light",onClick:function(){return e.handleSelectDeselectAll()}},this.props.selectDeselectLabel)),this.state.options.map((function(t,a){return n.a.createElement("div",{key:a,className:"dropdown-item"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{value:t.key,id:"multiselect-".concat(e.props.name,"-").concat(a),className:"form-check-input",type:"checkbox",name:"".concat(e.props.name,"[]"),onChange:function(t){return e.handleChange(t)},checked:e.state.selected.indexOf(t.key.toString())>-1?"checked":""}),n.a.createElement("label",{className:"form-check-label",style:{userSelect:"none",width:"100%"},htmlFor:"multiselect-".concat(e.props.name,"-").concat(a)},t.label)))}))))}}])&&u(t.prototype,a),o}(n.a.Component);m.propTypes={buttonClass:i.a.string,selected:i.a.array,value:i.a.array,placeholder:i.a.string,selectDeselectLabel:i.a.string,placeholderMultipleChecked:i.a.string,options:i.a.array.isRequired,name:i.a.string.isRequired,showSelectToggle:i.a.bool,optionKey:i.a.string,optionLabel:i.a.string},m.defaultProps={placeholder:"Nothing selected",selectDeselectLabel:"Select/Deselect All",buttonClass:"btn-light",placeholderMultipleChecked:null,selected:[],showSelectToggle:!0,optionKey:"key",optionLabel:"label"},t.default=m},function(e,t,a){"use strict";var r=a(4);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])}}]);
//# sourceMappingURL=24.9fe6c59d.chunk.js.map