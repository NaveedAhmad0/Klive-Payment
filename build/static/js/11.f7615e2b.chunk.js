(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[11],{129:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=(t(119),t(120)),s=t.n(r),c=t(121),d=t.n(c),m=t(122),i=t.n(m),o=m.Search.SearchBar,u=[{dataField:"id",text:"Order number",sort:!0,classes:"deal-row",headerClasses:"deal-header"},{dataField:"code",text:"Voucher code",classes:"deal-row-2",headerClasses:"deal-header"},{dataField:"purchasedate",text:"Purchase date",classes:"deal-row",headerClasses:"deal-header"},{dataField:"status",text:"Status",classes:"deal-row",headerClasses:"deal-header"},{dataField:"branchredeem",text:"Branch redeemed",headerClasses:"deal-header"},{dataField:"redemptiondate",text:"Redemption date",headerClasses:"deal-header"}],E=[{id:1003,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1004,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1005,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1006,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1007,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"}],h={paginationSize:4,pageStartIndex:1,alwaysShowAllBtns:!0,withFirstAndLast:!1,hideSizePerPage:!0,hidePageListOnlyOnePage:!0,showTotal:!1,disablePageTitle:!0};a.a=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 grid-margin"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"table-responsive"},n.a.createElement(i.a,{keyField:"id",data:E,columns:u,search:!0},(function(e){return n.a.createElement("div",null,n.a.createElement("h3",null,"Input something at below input field:"),n.a.createElement(o,Object.assign({},e.searchProps,{className:"custome-search-field",style:{color:"white"},delay:500,placeholder:"Search Something!!!"})),n.a.createElement("hr",null),n.a.createElement(s.a,Object.assign({},e.baseProps,{pagination:d()(h)})))})))))))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"row"})))}},463:function(e,a,t){e.exports={darkBG:"Modal_darkBG__2FBD3",centered:"Modal_centered__2XQUy",modal:"Modal_modal__V3N3V",modalHeader:"Modal_modalHeader__2eKOV",heading:"Modal_heading__3yaIR",modalContent:"Modal_modalContent__3ajmI",modalActions:"Modal_modalActions__3Djph",actionsContainer:"Modal_actionsContainer__1KJMW",deleteBtn:"Modal_deleteBtn__3_lDH",confirmBtn:"Modal_confirmBtn__3-sZK",key:"Modal_key__1IB8i",value:"Modal_value__2zZXu"}},503:function(e,a,t){"use strict";t.r(a);var l=t(35),n=t(0),r=t.n(n),s=(t(119),t(129)),c=t(463),d=t.n(c),m=function(e){var a=e.setIsOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.darkBG,onClick:function(){return a(!1)}}),r.a.createElement("div",{className:d.a.centered},r.a.createElement("div",{className:d.a.modal},r.a.createElement("div",{className:d.a.modalHeader},r.a.createElement("p",{className:d.a.heading},"Manual Withdrawal Request")),r.a.createElement("div",{className:d.a.modalContent},r.a.createElement("div",{className:d.a.key},r.a.createElement("h5",null,"Amount Requested")),r.a.createElement("div",{className:d.a.value},r.a.createElement("p",null,"USD-17,567,78"))),r.a.createElement("div",{className:d.a.modalContent},r.a.createElement("div",{className:d.a.key},r.a.createElement("h5",null,"Amount Requested")),r.a.createElement("div",{className:d.a.value},r.a.createElement("div",{className:"user-tranaction-inputs pe-4"},r.a.createElement("select",{className:"form-select user-tranaction-inputs-design "},r.a.createElement("option",{selected:!0},"Merchant"),r.a.createElement("option",{value:"1"},"Mr."),r.a.createElement("option",{value:"2"},"Mrs.")),r.a.createElement("a",{href:"#h"},r.a.createElement("h6",{className:"text-info "},"+ Add Account"))))),r.a.createElement("div",{className:d.a.modalContent},r.a.createElement("div",{className:d.a.key},r.a.createElement("h5",null,"Comments")),r.a.createElement("div",{className:d.a.value},r.a.createElement("div",{class:"form-group pe-4"},r.a.createElement("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"2"})))),r.a.createElement("div",{className:d.a.modalActions},r.a.createElement("div",{className:d.a.actionsContainer},r.a.createElement("button",{className:d.a.deleteBtn,onClick:function(){return a(!1)}},"Cancel"),r.a.createElement("button",{className:d.a.confirmBtn,onClick:function(){return a(!1)}},"Confirm"))))))};a.default=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"row page-title-header"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h4",{className:"page-title"},"Withdrawal Request")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin"},r.a.createElement("div",{className:"d-flex newboxcss2 shadow-lg"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h4",{className:"mb-0 font-weight-medium text-primary"},"Available for withdrawal"),r.a.createElement("h3",{className:"mb-0 font-weight-semibold"},"-17,577,89"),r.a.createElement("p",{className:"mb-0"},"USD")))),r.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin "},r.a.createElement("div",{className:"d-flex newboxcss2 shadow-lg"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h5",{className:"mb-0 font-weight-medium text-info"},"Current Balance"),r.a.createElement("h3",{className:"mb-0 font-weight-semibold"},"15,577,62"),r.a.createElement("p",{className:"mb-0"},"USD"))))),r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin"},r.a.createElement("button",{className:"btn btn-success btn-lg rounded-pill",onClick:function(){return c(!0)}},"Request Withdrawal")),t&&r.a.createElement(m,{setIsOpen:c})),r.a.createElement(s.a,null))}}}]);
//# sourceMappingURL=11.f7615e2b.chunk.js.map