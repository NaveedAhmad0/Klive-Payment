(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[30],{495:function(e,a,t){"use strict";t.r(a),t.d(a,"UserDashboard",(function(){return w}));var s=t(33),r=t(61),o=t(11),i=t(12),l=t(29),d=t(14),n=t(13),c=t(0),m=t.n(c),h=t(144),y=(t(119),t(120)),p=t.n(y),f=t(121),g=t.n(f),u=t(122),b=t.n(u),D=u.Search.SearchBar,v=[{dataField:"id",text:"Order number",sort:!0,classes:"deal-row",headerClasses:"deal-header"},{dataField:"code",text:"Voucher code",classes:"deal-row-2",headerClasses:"deal-header"},{dataField:"purchasedate",text:"Purchase date",classes:"deal-row",headerClasses:"deal-header"},{dataField:"status",text:"Status",classes:"deal-row",headerClasses:"deal-header"},{dataField:"branchredeem",text:"Branch redeemed",headerClasses:"deal-header"},{dataField:"redemptiondate",text:"Redemption date",headerClasses:"deal-header"}],C=[{id:1003,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1004,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1005,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"}],E={paginationSize:4,pageStartIndex:1,alwaysShowAllBtns:!0,withFirstAndLast:!1,hideSizePerPage:!0,hidePageListOnlyOnePage:!0,showTotal:!1,disablePageTitle:!0},w=function(e){Object(d.a)(t,e);var a=Object(n.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).changeChartOneData=function(e){var a=e.target.id;s.state.active===a?s.setState({active:""}):s.setState({active:a});var t=s.state.datasets[0],o=s.state.datasets[1],i=Object(r.a)({},t),l=Object(r.a)({},o);i.data=[60,75,65,130,130,145,110,145,155,149,170],l.data=[0,25,20,40,70,52,49,90,70,94,110,135];var d={datasets:[i,l]};try{s.setState(d)}catch(e){throw Error(e)}},s.changeChartTwoData=function(e){var a=e.target.id;s.state.active===a?s.setState({active:""}):s.setState({active:a});var t=s.state.datasets[0],o=s.state.datasets[1],i=Object(r.a)({},t),l=Object(r.a)({},o);i.data=[130,145,155,60,75,65,130,110,145,149,170],l.data=[0,70,52,90,25,20,40,70,49,94,110,135],console.log("this is:",i.data),console.log("this is:",l.data);var d={datasets:[i,l]};try{s.setState(d)}catch(e){throw Error(e)}},s.changeChartThreeData=function(e){var a=e.target.id;s.state.active===a?s.setState({active:""}):s.setState({active:a});var t=s.state.datasets[0],o=s.state.datasets[1],i=Object(r.a)({},t),l=Object(r.a)({},o);i.data=[130,75,65,130,110,145,155,60,145,149,170],l.data=[0,70,52,94,110,135,90,25,20,40,70,49],console.log("this is:",i.data),console.log("this is:",l.data);var d={datasets:[i,l]};try{s.setState(d)}catch(e){throw Error(e)}},s.changeChartFourData=function(e){var a=e.target.id;s.state.active===a?s.setState({active:""}):s.setState({active:a});var t=s.state.datasets[0],o=s.state.datasets[1],i=Object(r.a)({},t),l=Object(r.a)({},o);i.data=[130,145,65,130,75,145,149,170,110,155,60],l.data=[0,70,90,25,40,20,94,110,135,70,49,52],console.log("this is:",i.data),console.log("this is:",l.data);var d={datasets:[i,l]};try{s.setState(d)}catch(e){throw Error(e)}},s.usersDoughnutChartData={datasets:[{data:[80,34,100],backgroundColor:["#19d895","#2196f3","#dde4eb"],borderColor:["#19d895","#2196f3","#dde4eb"]}],labels:["Request","Email"]},s.usersDoughnutChartOptions={cutoutPercentage:70,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0,maintainAspectRatio:!0,showScale:!0,legend:{display:!1},layout:{padding:{left:0,right:0,top:0,bottom:0}}},s.amountDueBarData={labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],datasets:[{label:"Profit",data:[39,19,25,16,31,39,12,18,33,24],backgroundColor:["#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3"],borderColor:["#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3","#2196f3"],borderWidth:2,fill:!0}]},s.amountDueBarOptions={layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{responsive:!0,maintainAspectRatio:!0,yAxes:[{display:!1,gridLines:{color:"rgba(0, 0, 0, 0.03)"}}],xAxes:[{display:!1,barPercentage:.4,gridLines:{display:!1}}]},legend:{display:!1}},s.totalRevenueData={labels:["Day01","Day02","Day03","Day04","Day05","Day06","Day07","Day08","Day09","Day10","Day11","Day12","Day13","Day14","Day15","Day16","Day17","Day18","Day19","Day20","Day21","Day22","Day23","Day24","Day25","Day26","Day27","Day28","Day29","Day30","Day31","Day32","Day33","Day34","Day35","Day36","Day37","Day38","Day39","Day40","Day41","Day42","Day43","Day44","Day45","Day46","Day47","Day48","Day49","Day50","Day51","Day52","Day53","Day54","Day55","Day56","Day57","Day58","Day59","Day60","Day61","Day62","Day63","Day64","Day65","Day66","Day67","Day68","Day69","Day70","Day71","Day72","Day73","Day74","Day75","Day76","Day77","Day78","Day79","Day80","Day81","Day82"],datasets:[{label:"Total Revenue",data:[56,55,59,59,59,57,56,57,54,56,58,57,59,58,59,57,55,56,54,52,49,48,50,50,46,45,49,50,52,53,52,55,54,53,56,55,56,55,54,55,57,58,56,55,56,57,58,59,58,57,55,53,52,55,57,55,54,52,55,57,56,57,58,59,58,59,57,56,55,57,58,59,60,62,60,59,58,57,56,57,56,58,59],borderColor:"#9B86F1",backgroundColor:"rgba(255,255,255,0.2)",borderWidth:3,fill:"origin"}]},s.totalRevenueOptions={responsive:!0,maintainAspectRatio:!0,scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},stepsize:100},s.realTimeStatisticsData={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Profit",data:[330,380,230,400,309,530,340],backgroundColor:"#0f5bff",borderColor:"#0f5bff",borderWidth:0},{label:"Target",data:[600,600,600,600,600,600,600],backgroundColor:"#e5e9f2",borderColor:"#e5e9f2",borderWidth:0}]},s.realTimeStatisticsOptions={responsive:!0,maintainAspectRatio:!0,layout:{padding:{left:0,right:25,top:0,bottom:0}},scales:{yAxes:[{display:!1,gridLines:{display:!1}}],xAxes:[{stacked:!0,ticks:{display:!1,beginAtZero:!0,fontColor:"#f3f3f3"},gridLines:{display:!1,color:"#f3f3f3",zeroLineColor:"0,0,0,0"},barPercentage:.5}]},legend:{display:!1},elements:{point:{radius:0}}},s.marketingOverviewData={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],datasets:[{label:"OVERDUE",data:[145,238,148,293,242,235,256,334],backgroundColor:"#826af9",borderColor:"#826af9",borderWidth:0},{label:"SNOOZED",data:[330,380,230,400,309,430,340,310],borderColor:"#9e86ff",borderWidth:0},{label:"COMPLETED",data:[375,440,284,450,386,480,400,365],backgroundColor:"#d0aeff",borderColor:"#d0aeff",borderWidth:0},{label:"PENDING",data:[425,480,324,490,426,520,440,405],backgroundColor:"#f7d2ff",borderColor:"#f7d2ff",borderWidth:0}]},s.marketingOverviewOptions={responsive:!0,maintainAspectRatio:!0,layout:{padding:{left:0,right:0,top:20,bottom:0}},scales:{yAxes:[{ticks:{max:400,display:!0,beginAtZero:!0,fontColor:"#b9b8b8",stepSize:100},gridLines:{display:!1,color:"#dde4eb",zeroLineColor:"#dde4eb"}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0,fontColor:"#b9b8b8",color:"#dde4eb",zeroLineColor:"#dde4eb"},gridLines:{display:!0,color:"#dde4eb",zeroLineColor:"#dde4eb"},barPercentage:.2}]},legend:{display:!1},elements:{point:{radius:0}}},s.state={visitChartData:{},impressionChartData:{},conversionChartData:{},downloadChartData:{},salesStatisticsChartData:{},netProfitChartData:{},totaltransactionChartData:{},areaOptions:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},stepsize:100},salesStaticsOptions:{responsive:!0,animation:{animateScale:!0,animateRotate:!0},elements:{point:{radius:3},line:{tension:0}},layout:{padding:{left:0,right:0,top:0,bottom:0}},legend:!1,scales:{xAxes:[{display:!1,ticks:{display:!1,beginAtZero:!1},gridLines:{drawBorder:!1,color:"#f8f8f8",zeroLineColor:"#f8f8f8"}}],yAxes:[{ticks:{max:200,min:0,stepSize:50,fontColor:"#8b9298",beginAtZero:!1},gridLines:{color:"#f8f8f8",zeroLineColor:"#f8f8f8",display:!0,drawBorder:!1}}]}},netProfitOptions:{scale:{ticks:{beginAtZero:!0,min:0,max:100,stepSize:20,display:!1},pointLabels:{fontSize:14,fontColor:"#6c757c",color:"#f3f3f3",zeroLineColor:"#f3f3f3"},angleLines:{color:"#f3f3f3",zeroLineColor:"#f3f3f3"},gridLines:{color:"#f3f3f3",zeroLineColor:"#f3f3f3"}},legend:!1},totaltransactionChartOptions:{responsive:!0,animation:{animateScale:!0,animateRotate:!0},elements:{point:{radius:0}},layout:{padding:{left:-10,right:0,top:0,bottom:-10}},legend:!1,scales:{xAxes:[{gridLines:{display:!1,color:"#fff",zeroLineColor:"#fff"},ticks:{display:!1,color:"#fff",zeroLineColor:"#fff"}}],yAxes:[{gridLines:{display:!1,color:"#fff",zeroLineColor:"#fff"},ticks:{display:!1,color:"#fff",zeroLineColor:"#fff"}}]}},todos:[{id:1,task:"Pick up kids from school",isCompleted:!1},{id:2,task:"Prepare for presentation",isCompleted:!1},{id:3,task:"Print Statements",isCompleted:!1},{id:4,task:"Create invoice",isCompleted:!1},{id:5,task:"Call John",isCompleted:!1}],inputValue:"",active:""},s.statusChangedHandler=s.statusChangedHandler.bind(Object(l.a)(s)),s.addTodo=s.addTodo.bind(Object(l.a)(s)),s.removeTodo=s.removeTodo.bind(Object(l.a)(s)),s.inputChangeHandler=s.inputChangeHandler.bind(Object(l.a)(s)),s}return Object(i.a)(t,[{key:"statusChangedHandler",value:function(e,a){var t=Object(r.a)({},this.state.todos[a]);t.isCompleted=e.target.checked;var o=Object(s.a)(this.state.todos);o[a]=t,this.setState({todos:o})}},{key:"addTodo",value:function(e){e.preventDefault();var a=Object(s.a)(this.state.todos);a.unshift({id:a.length?a[a.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:a,inputValue:""})}},{key:"removeTodo",value:function(e){var a=Object(s.a)(this.state.todos);a.splice(e,1),this.setState({todos:a})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"toggleProBanner",value:function(){document.querySelector(".proBanner").classList.toggle("hide")}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"row page-title-header"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"page-header"},m.a.createElement("h4",{className:"pageUser-title"},"Dashboard")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin"},m.a.createElement("div",{className:"d-flex newboxcss"},m.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4 mr-1"},m.a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16",height:"2em",width:"2em",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"}))),m.a.createElement("div",{className:"wrapper"},m.a.createElement("h4",{className:"mb-0 font-weight-medium text-primary"},"Main Account"),m.a.createElement("h3",{className:"mb-0 font-weight-semibold"},"32,451"),m.a.createElement("p",{className:"mb-0 text-muted"},"+14.00(+0.50%)")))),m.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin "},m.a.createElement("div",{className:"d-flex newboxcss2 shadow-lg"},m.a.createElement("div",{className:"wrapper"},m.a.createElement("h3",{className:"mb-0 font-weight-semibold"},"15,236"),m.a.createElement("h5",{className:"mb-0 font-weight-medium text-primary"},"Impressions"),m.a.createElement("p",{className:"mb-0 text-muted"},"+138.97(+0.54%)")),m.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},m.a.createElement(h.Line,{ref:"chart",data:this.state.impressionChartData,options:this.state.areaOptions,datasetKeyProvider:this.state.datasetKeyProvider,height:50,width:100,id:"imoressionChart"})))),m.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin"},m.a.createElement("div",{className:"d-flex newboxcss2 shadow-lg"},m.a.createElement("div",{className:"wrapper"},m.a.createElement("h3",{className:"mb-0 font-weight-semibold"},"7,688"),m.a.createElement("h5",{className:"mb-0 font-weight-medium text-primary"},"Conversion"),m.a.createElement("p",{className:"mb-0 text-muted"},"+57.62(+0.76%)")),m.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},m.a.createElement(h.Line,{ref:"chart",data:this.state.conversionChartData,options:this.state.areaOptions,datasetKeyProvider:this.state.datasetKeyProvider,height:50,width:100,id:"conversionChart"})))),m.a.createElement("div",{className:"col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin"},m.a.createElement("div",{className:"d-flex newboxcss2 shadow-lg"},m.a.createElement("div",{className:"wrapper"},m.a.createElement("h3",{className:"mb-0 font-weight-semibold"},"1,553"),m.a.createElement("h5",{className:"mb-0 font-weight-medium text-primary"},"Downloads"),m.a.createElement("p",{className:"mb-0 text-muted"},"+138.97(+0.54%)")),m.a.createElement("div",{className:"wrapper my-auto ml-auto ml-lg-4"},m.a.createElement(h.Line,{ref:"chart",data:this.state.downloadChartData,options:this.state.areaOptions,datasetKeyProvider:this.state.datasetKeyProvider,height:50,width:100,id:"downloadChart"}))))))))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"page-header"},m.a.createElement("h4",{className:"pageUser-title"},"Transaction History")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"table-responsive"},m.a.createElement(b.a,{keyField:"id",data:C,columns:v,search:!0},(function(e){return m.a.createElement("div",null,m.a.createElement("h3",null,"Input something at below input field:"),m.a.createElement(D,Object.assign({},e.searchProps,{className:"custome-search-field",style:{color:"white"},delay:500,placeholder:"Search Something!!!"})),m.a.createElement("hr",null),m.a.createElement(p.a,Object.assign({},e.baseProps,{pagination:g()(E)})))})))))))),m.a.createElement("div",{className:"col-md-4"},m.a.createElement("div",{className:"row"}))))}}]),t}(c.Component);a.default=w}}]);
//# sourceMappingURL=30.2184d4b5.chunk.js.map