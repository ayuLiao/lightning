(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{r7nV:function(e,t,a){"use strict";a.r(t);a("IzEo");var r,n,l,i,c=a("bx4M"),s=(a("6UJt"),a("DFOY")),u=(a("5NDa"),a("5rEg")),o=a("jehZ"),p=a.n(o),m=(a("14J3"),a("BMrR")),d=(a("jCWc"),a("kPKH")),f=(a("+L6B"),a("2/Rp")),h=(a("T2oS"),a("W9HT")),b=a("p0pE"),E=a.n(b),y=a("d6i3"),g=a.n(y),v=a("qIgq"),k=a.n(v),_=a("1l/V"),x=a.n(_),j=a("2Taf"),O=a.n(j),V=a("vZ4D"),w=a.n(V),q=a("rlhR"),R=a.n(q),D=a("MhPg"),S=a.n(D),C=a("l4Ni"),F=a.n(C),P=a("ujKo"),T=a.n(P),z=(a("FJo9"),a("L41K")),M=(a("y8nQ"),a("Vl3Y")),I=(a("OaEy"),a("2fM7")),K=(a("Znn+"),a("ZTPi")),A=a("q1tI"),N=a.n(A),B=a("LvDl"),J=a("bKel"),L=a.n(J),U=a("3a4m"),Z=a.n(U),H=a("Hx5s"),G=a("MuoO"),W=a("BSml"),Y=a("9Ndd"),Q=a("rr6D"),X=a("I2cA"),$=a("3Rrz"),ee=a("KNTv"),te=a("8hbc");function ae(e){var t=re();return function(){var a,r=T()(e);if(t){var n=T()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return F()(this,a)}}function re(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var ne={labelCol:{xs:{span:24},sm:{span:4},lg:{span:3},xl:{span:3},xxl:{span:2}},wrapperCol:{xs:{span:24},sm:{span:20},md:{span:15},lg:{span:15},xl:{span:10},xxl:{span:7}}},le=Y["a"].Select,ie=Y["a"].TextArea,ce=Y["a"].Switch,se=K["a"].TabPane,ue=I["a"].Option,oe=M["a"].Item,pe=z["a"].Step,me=(r=Object(G["connect"])(function(e){var t=e.content,a=t.schemas,r=t.adminConfig,n=e.loading;return{schemas:a,adminConfig:r,loading:n.models.content}}),n=Object(te["e"])(function(){return{appModels:Object(te["M"])()}}),L()(l=r(l=n((i=function(e){S()(a,e);var t=ae(a);function a(){var e;O()(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),e.state={operation:void 0,model:void 0,current:0,checkValues:!1},e.schemasData=function(){return new Promise(function(t){var a=[],r=0,n=function n(){r>10&&t("schemas\u6570\u636e\u9519\u8bef"),setTimeout(function(){var l=e.props.schemas;a=l,Object(B["isEmpty"])(a)?(r+=1,n()):t(a)},500)};n()})},e.handleSubmit=x()(g.a.mark(function t(){var a,r,n,l,i,c,s,u,o,p,m,d,f,h,b,E,y,v,_,x,j,O,V,w,q,D,S,C,F,P;return g.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.props.form,r=a.getFieldValue,n=a.getFieldsValue,l=a.validateFields,e.setState({checkValues:!0}),t.next=4,l();case 4:if(Object(X["f"])(r("parameter"))&&Object(X["g"])(r("setfield"))&&Object(X["d"])(r("filter"))){t.next=6;break}return t.abrupt("return");case 6:if(i=R()(e),c=i.operation,s=i.isUpdate,u=r("app__model"),c&&u){t.next=10;break}return t.abrupt("return");case 10:if(o=n(),p=o.app__model,m=o.parameter,d=o.ordering,f=o.displayfield,h=o.paging,b=o.page,E=o.size,y=o.pk,v=o.setfield,_=o.func_name,x=o.filter,j=k()(p,2),O=j[0],V=j[1],w={app:O,model:V},Q["a"].default.forEach(function(e){w[e]=o[e]}),w.disable=!w.disable,w.operation=c,w.groups&&(w.groups=w.groups.map(function(e){return e.id})),q=function(){var e={name:y,default:void 0,desc:"\u4e3b\u952e",required:!0,is_array:!1,type:"pk"};w.parameter.push(e)},"list"===c&&(w.parameter=Object(X["i"])(m),w.ordering=d,w.displayfield=f,h&&(D=E.name,S=E.default,C={name:b,default:1,desc:"\u9875\u7801\u53c2\u6570",required:!1,is_array:!1,type:"PAGE_IDX"},F={name:D,default:S,desc:"\u9875\u957f\u53c2\u6570",required:!1,is_array:!1,type:"PAGE_SIZE"},w.parameter.push(C),w.parameter.push(F)),w.filter=Object(X["h"])(x)),"retrieve"===c&&(w.displayfield=f,w.parameter=[],q()),"create"===c&&(w.parameter=Object(X["i"])(m),w.displayfield=f,w.setfield=Object(X["j"])(v)),"update"!==c&&"replace"!==c||(w.parameter=Object(X["i"])(m),q(),w.displayfield=f,w.setfield=Object(X["j"])(v)),"delete"===c&&(w.parameter=[],q()),"update_by_condition"===c&&(w.parameter=Object(X["i"])(m),w.setfield=Object(X["j"])(v),w.filter=Object(X["h"])(x)),"delete_by_condition"===c&&(w.parameter=Object(X["i"])(m),w.filter=Object(X["h"])(x)),"func"===c&&(w.parameter=Object(X["i"])(m),w.func_name=_),!s){t.next=33;break}return P=e.props.match.params.id,t.next=31,Object(ee["a"])(w,parseInt(P,0));case 31:return Z.a.push("/content/api_db__api"),t.abrupt("return");case 33:return t.next=35,Object(ee["a"])(w);case 35:Z.a.push("/content/api_db__api");case 36:case"end":return t.stop()}},t)})),e}return w()(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0===e||e)&&this.setDefaultValues(e)}},{key:"setDefaultValues",value:function(){var e=x()(g.a.mark(function e(t){var a,r,n,l,i,c,s,u,o,p,m,d,f,h,b;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this.props,r=a.form.setFieldsValue,n=a.dispatch,l=this.props.schemas,e.next=4,n({type:"content/detail",payload:{model:"api_db__api",id:t}});case 4:return i=e.sent,c=i.operation,s=i.slug,e.next=8,Object(ee["b"])(s);case 8:if(u=e.sent,this.setState({operation:c,model:u.app__model}),!Object(B["isEmpty"])(l)){e.next=14;break}return e.next=13,this.schemasData();case 13:l=e.sent;case 14:return e.next=16,Object(X["c"])(u,l);case 16:o=e.sent,p=o.displayfield,m=o.filter,d=o.parameter,f=o.setfield,h=o.pk,b={displayfield:p,filter:m,parameter:d,setfield:f,pk:h},delete o.displayfield,delete o.filter,delete o.parameter,delete o.setfield,delete o.pk,r(E()({},o),function(){setTimeout(function(){return r(b)},2e3)});case 25:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"schemas",value:function(){var e=this.props.schemas;return e.api_db__api||[]}},{key:"next",value:function(){var e=x()(g.a.mark(function e(){var t,a,r,n,l;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.state.current,a=this.props.form,r=a.validateFields,n=a.getFieldValue,0!==t){e.next=5;break}return e.next=5,r(["func_name","slug","app__model","size","page","pk"]);case 5:if(1!==t){e.next=11;break}return this.setState({checkValues:!0}),e.next=9,r();case 9:if(Object(X["f"])(n("parameter"))&&Object(X["g"])(n("setfield"))&&Object(X["d"])(n("filter"))){e.next=11;break}return e.abrupt("return");case 11:l=t+1,this.setState({current:l});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"prev",value:function(){var e=this.state.current,t=e-1;this.setState({current:t})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,r=a.getFieldDecorator,n=a.getFieldValue,l=a.resetFields,i=t.schemas,o=t.appModels,b=this.state,E=b.current,y=b.checkValues,g=this.operation,v=this.isUpdate;if(Object(B["isEmpty"])(i))return N.a.createElement(h["a"],null);var k=function(e){return g&&Q["a"][g].includes(e)},_=this.model,x=function(){return Object($["a"])({dollarData:n("parameter")})},j=N.a.createElement("div",null,N.a.createElement(m["a"],null,N.a.createElement(d["a"],{sm:{offset:2},xl:{offset:1}},N.a.createElement(f["a"],{size:"large",style:{marginRight:15},onClick:l},"\u53d6\u6d88"),N.a.createElement(f["a"],{size:"large",type:"primary",onClick:this.handleSubmit},"\u63d0\u4ea4")))),O=N.a.createElement("div",null,N.a.createElement(oe,p()({label:"\u64cd\u4f5c"},ne),r("operation",{initialValue:g})(N.a.createElement(le,{field:this.schemas().fields.find(function(e){return"operation"===e.name}),choices:this.schemas().fields.find(function(e){return"operation"===e.name}).choices,options:{disable:!0},disabled:!0}))),k("func_name")&&N.a.createElement(oe,p()({required:!0,label:"\u4e91\u51fd\u6570\u540d"},ne),r("func_name",{rules:[{message:"\u8bf7\u8f93\u5165\u4e91\u51fd\u6570\u540d",required:!0}]})(N.a.createElement(u["a"],{placeholder:"\u8bf7\u8f93\u5165"}))),N.a.createElement(oe,p()({label:"\u540d\u79f0"},ne),r("name",{})(N.a.createElement(u["a"],{placeholder:"\u8bf7\u8f93\u5165"}))),N.a.createElement(oe,p()({required:!0,label:"\u8def\u5f84"},ne),r("slug",{rules:[{message:"\u8bf7\u8f93\u5165\u8def\u5f84",required:!0}]})(N.a.createElement(u["a"],{placeholder:"\u8bf7\u8f93\u5165"}))),N.a.createElement(oe,p()({required:!0,label:"\u6a21\u578b"},ne),r("app__model",{rules:[{message:"\u8bf7\u9009\u62e9\u6a21\u578b",required:!0}]})(N.a.createElement(s["a"],{options:o,placeholder:"\u8bf7\u9009\u62e9",displayRender:function(e){return e.join("__")}}))),k("paging")&&N.a.createElement(oe,p()({label:"\u5206\u9875"},ne),r("paging",{initialValue:!1})(N.a.createElement(ce,null))),n("paging")&&k("size")&&N.a.createElement("div",null,N.a.createElement(oe,p()({required:!0,label:"\u9875\u957f\u53c2\u6570"},ne),r("size",{initialValue:{name:"pageSize",default:30},rules:[{validator:X["e"]}]})(N.a.createElement(W["b"],null))),N.a.createElement(oe,p()({required:!0,label:"\u9875\u7801\u53c2\u6570"},ne),r("page",{initialValue:"pageNumber",rules:[{message:"\u8bf7\u8f93\u5165\u9875\u7801\u53c2\u6570",required:!0}]})(N.a.createElement(u["a"],null)))),k("pk")&&N.a.createElement(oe,p()({required:!0,label:"\u4e3b\u952e"},ne),r("pk",{initialValue:"id",rules:[{message:"\u8bf7\u8f93\u5165\u4e3b\u952e",required:!0}]})(N.a.createElement(u["a"],null))),N.a.createElement(oe,p()({label:"\u8bf4\u660e"},ne,{wrapperCol:{xs:{span:24},sm:{span:20},xxl:{span:15}}}),r("summary",{})(N.a.createElement(ie,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8",field:this.schemas().fields.find(function(e){return"summary"===e.name})}))),N.a.createElement(oe,p()({label:"\u542f\u7528"},ne),r("disable",{initialValue:!1})(N.a.createElement(ce,null)))),V=N.a.createElement("div",null,k("parameter")&&_&&N.a.createElement(oe,null,r("parameter",{initialValue:{}})(N.a.createElement(W["c"],{schemas:i,model:_,operation:g,isNew:!v}))),k("setfield")&&_&&N.a.createElement(oe,null,r("setfield",{initialValue:{}})(N.a.createElement(W["e"],{schemas:i,model:_,operation:g,getParameterValue:function(){return n("parameter")},isNew:!v}))),k("displayfield")&&_&&N.a.createElement(oe,null,r("displayfield",{initialValue:[]})(N.a.createElement(W["a"],{schemas:i,model:_}))),k("filter")&&_&&N.a.createElement("div",null,N.a.createElement("div",{style:{paddingBottom:2}},N.a.createElement("span",{style:{fontSize:26}},"\u8fc7\u6ee4\u89c4\u5219")),N.a.createElement(oe,null,r("filter",{initialValue:[]})(N.a.createElement(W["d"],{columns:Object(X["k"])(i,_),getVariableData:x,systemData:Q["b"]})))),k("ordering")&&N.a.createElement(oe,p()({label:"\u6392\u5e8f"},ne,{labelCol:{xs:{span:24},sm:{span:2},xl:{span:1}}}),r("ordering",{})(N.a.createElement(I["a"],{placeholder:"\u8bf7\u9009\u62e9",mode:"multiple",allowClear:!0},Object(X["l"])(i,_).map(function(e){return N.a.createElement(ue,{key:e.key,value:e.key},e.label)}))))),w=N.a.createElement("div",null,N.a.createElement(oe,p()({label:"\u8981\u6c42\u767b\u5f55"},ne),r("logined",{initialValue:!1})(N.a.createElement(ce,null))),N.a.createElement(oe,p()({label:"\u89d2\u8272"},ne),r("groups",{})(N.a.createElement(le,{field:this.schemas().fields.find(function(e){return"groups"===e.name})})))),q=function(){return N.a.createElement(z["a"],{current:E,style:{marginBottom:30}},N.a.createElement(pe,{key:0,title:"\u57fa\u672c\u4fe1\u606f"}),N.a.createElement(pe,{key:1,title:"\u64cd\u4f5c\u914d\u7f6e"}),N.a.createElement(pe,{key:2,title:"\u6743\u9650\u914d\u7f6e"}))},R=N.a.createElement("div",null,N.a.createElement(M["a"],null,N.a.createElement(c["a"],null,v?N.a.createElement("div",null,N.a.createElement(K["a"],{defaultActiveKey:"1"},N.a.createElement(se,{tab:"\u57fa\u672c\u4fe1\u606f",key:"1",forceRender:!0},O),N.a.createElement(se,{tab:"\u64cd\u4f5c\u914d\u7f6e",key:"2",forceRender:!0},V),N.a.createElement(se,{tab:"\u6743\u9650\u914d\u7f6e",key:"3",forceRender:!0},w)),j):N.a.createElement("div",null,N.a.createElement("div",{style:{marginTop:30}},N.a.createElement(K["a"],{defaultActiveKey:"0",renderTabBar:q,activeKey:"".concat(E)},N.a.createElement(se,{key:"0",forceRender:!0},O),N.a.createElement(se,{key:"1",forceRender:!0},V),N.a.createElement(se,{key:"2",forceRender:!0},w))),N.a.createElement(m["a"],null,N.a.createElement(d["a"],{sm:{offset:2},xl:{offset:1}},E<2&&N.a.createElement(f["a"],{type:"primary",onClick:function(){return e.next()}},"\u4e0b\u4e00\u6b65"),E>0&&N.a.createElement(f["a"],{style:{marginLeft:8,marginRight:8},onClick:function(){return e.prev()}},"\u4e0a\u4e00\u6b65"),2===E&&N.a.createElement(f["a"],{style:{marginLeft:8,marginRight:8},onClick:l},"\u53d6\u6d88"),2===E&&N.a.createElement(f["a"],{type:"primary",onClick:this.handleSubmit},"\u63d0\u4ea4")))))));return N.a.createElement(X["a"].Provider,{value:y},R)}},{key:"operation",get:function(){var e=this.props.location.query.operation,t=this.isUpdate;return!e&&t?this.state.operation:e}},{key:"isUpdate",get:function(){var e=this.props,t=e.match.params.id,a=e.location.query.operation;return!(a||0!==t&&!t)}},{key:"model",get:function(){var e=this.props.form.getFieldValue,t=e("app__model"),a=this.state.model;if(Object(B["isEmpty"])(t))return a;var r="".concat(t[0],"__").concat(t[1]);return r}}]),a}(A["PureComponent"]),l=i))||l)||l)||l),de=M["a"].create()(me);t["default"]=function(e){return N.a.createElement(H["b"],null,N.a.createElement(de,e))}}}]);