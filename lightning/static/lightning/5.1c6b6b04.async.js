(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{r7nV:function(e,t,a){"use strict";a.r(t);a("IzEo");var r,n,l,i=a("bx4M"),c=(a("6UJt"),a("DFOY")),s=(a("5NDa"),a("5rEg")),u=a("jehZ"),o=a.n(u),p=(a("14J3"),a("BMrR")),m=(a("jCWc"),a("kPKH")),d=(a("+L6B"),a("2/Rp")),f=(a("T2oS"),a("W9HT")),h=a("p0pE"),b=a.n(h),E=a("d6i3"),y=a.n(E),g=a("qIgq"),v=a.n(g),k=a("1l/V"),_=a.n(k),j=a("2Taf"),x=a.n(j),O=a("vZ4D"),V=a.n(O),w=a("rlhR"),q=a.n(w),R=a("MhPg"),D=a.n(R),S=a("l4Ni"),C=a.n(S),F=a("ujKo"),P=a.n(F),T=(a("FJo9"),a("L41K")),z=(a("y8nQ"),a("Vl3Y")),I=(a("OaEy"),a("2fM7")),K=(a("Znn+"),a("ZTPi")),M=a("q1tI"),A=a.n(M),N=a("LvDl"),B=a("bKel"),L=a.n(B),U=a("3a4m"),J=a.n(U),Z=a("Hx5s"),H=a("MuoO"),G=a("BSml"),W=a("9Ndd"),Y=a("rr6D"),Q=a("I2cA"),X=a("3Rrz"),$=a("KNTv"),ee=a("jfUH");function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=P()(e);if(t){var n=P()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return C()(this,a)}}var ae={labelCol:{xs:{span:24},sm:{span:4},lg:{span:3},xl:{span:3},xxl:{span:2}},wrapperCol:{xs:{span:24},sm:{span:20},md:{span:15},lg:{span:15},xl:{span:10},xxl:{span:7}}},re=W.a.Select,ne=W.a.TextArea,le=W.a.Switch,ie=K.a.TabPane,ce=I.a.Option,se=z.a.Item,ue=T.a.Step,oe=(r=Object(H.connect)(function(e){var t=e.content;return{schemas:t.schemas,adminConfig:t.adminConfig,loading:e.loading.models.content}}),n=Object(ee.e)(function(){return{appModels:Object(ee.L)()}}),L()(l=r(l=n(l=function(e){D()(a,e);var t=te(a);function a(){var e;x()(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={operation:void 0,model:void 0,current:0,checkValues:!1},e.schemasData=function(){return new Promise(function(t){var a=[],r=0;!function n(){r>10&&t("schemas数据错误"),setTimeout(function(){var l=e.props.schemas;a=l,Object(N.isEmpty)(a)?(r+=1,n()):t(a)},500)}()})},e.handleSubmit=_()(y.a.mark(function t(){var a,r,n,l,i,c,s,u,o,p,m,d,f,h,b,E,g,k,_,j,x,O,V,w,R,D,S,C,F,P;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.form,r=a.getFieldValue,n=a.getFieldsValue,l=a.validateFields,e.setState({checkValues:!0}),t.next=4,l();case 4:if(Object(Q.f)(r("parameter"))&&Object(Q.g)(r("setfield"))&&Object(Q.d)(r("filter"))){t.next=6;break}return t.abrupt("return");case 6:if(i=q()(e),c=i.operation,s=i.isUpdate,u=r("app__model"),c&&u){t.next=10;break}return t.abrupt("return");case 10:if(o=n(),p=o.app__model,m=o.parameter,d=o.ordering,f=o.displayfield,h=o.paging,b=o.page,E=o.size,g=o.pk,k=o.setfield,_=o.func_name,j=o.filter,x=v()(p,2),O=x[0],V=x[1],w={app:O,model:V},Y.a.default.forEach(function(e){w[e]=o[e]}),w.disable=!w.disable,w.operation=c,w.groups&&(w.groups=w.groups.map(function(e){return e.id})),R=function(){var e={name:g,default:void 0,desc:"主键",required:!0,is_array:!1,type:"pk"};w.parameter.push(e)},"list"===c&&(w.parameter=Object(Q.i)(m),w.ordering=d,w.displayfield=f,h&&(D=E.name,S=E.default,C={name:b,default:1,desc:"页码参数",required:!1,is_array:!1,type:"PAGE_IDX"},F={name:D,default:S,desc:"页长参数",required:!1,is_array:!1,type:"PAGE_SIZE"},w.parameter.push(C),w.parameter.push(F)),w.filter=Object(Q.h)(j)),"retrieve"===c&&(w.displayfield=f,w.parameter=[],R()),"create"===c&&(w.parameter=Object(Q.i)(m),w.displayfield=f,w.setfield=Object(Q.j)(k)),"update"!==c&&"replace"!==c||(w.parameter=Object(Q.i)(m),R(),w.displayfield=f,w.setfield=Object(Q.j)(k)),"delete"===c&&(w.parameter=[],R()),"update_by_condition"===c&&(w.parameter=Object(Q.i)(m),w.setfield=Object(Q.j)(k),w.filter=Object(Q.h)(j)),"delete_by_condition"===c&&(w.parameter=Object(Q.i)(m),w.filter=Object(Q.h)(j)),"func"===c&&(w.parameter=Object(Q.i)(m),w.func_name=_),!s){t.next=33;break}return P=e.props.match.params.id,t.next=31,Object($.a)(w,parseInt(P,0));case 31:return J.a.push("/content/api_db__api"),t.abrupt("return");case 33:return t.next=35,Object($.a)(w);case 35:J.a.push("/content/api_db__api");case 36:case"end":return t.stop()}},t)})),e}return V()(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0===e||e)&&this.setDefaultValues(e)}},{key:"setDefaultValues",value:function(){var e=_()(y.a.mark(function e(t){var a,r,n,l,i,c,s,u,o,p,m,d,f,h,E;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,r=a.form.setFieldsValue,n=a.dispatch,l=this.props.schemas,e.next=4,n({type:"content/detail",payload:{model:"api_db__api",id:t}});case 4:return i=e.sent,c=i.operation,s=i.slug,e.next=8,Object($.b)(s);case 8:if(u=e.sent,this.setState({operation:c,model:u.app__model}),!Object(N.isEmpty)(l)){e.next=14;break}return e.next=13,this.schemasData();case 13:l=e.sent;case 14:return e.next=16,Object(Q.c)(u,l);case 16:o=e.sent,p=o.displayfield,m=o.filter,d=o.parameter,f=o.setfield,h=o.pk,E={displayfield:p,filter:m,parameter:d,setfield:f,pk:h},delete o.displayfield,delete o.filter,delete o.parameter,delete o.setfield,delete o.pk,r(b()({},o),function(){setTimeout(function(){return r(E)},2e3)});case 25:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"schemas",value:function(){var e=this.props.schemas;return e.api_db__api||[]}},{key:"next",value:function(){var e=_()(y.a.mark(function e(){var t,a,r,n,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.current,a=this.props.form,r=a.validateFields,n=a.getFieldValue,0!==t){e.next=5;break}return e.next=5,r(["func_name","slug","app__model","size","page","pk"]);case 5:if(1!==t){e.next=11;break}return this.setState({checkValues:!0}),e.next=9,r();case 9:if(Object(Q.f)(n("parameter"))&&Object(Q.g)(n("setfield"))&&Object(Q.d)(n("filter"))){e.next=11;break}return e.abrupt("return");case 11:l=t+1,this.setState({current:l});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,r=a.getFieldDecorator,n=a.getFieldValue,l=a.resetFields,u=t.schemas,h=t.appModels,b=this.state,E=b.current,y=b.checkValues,g=this.operation,v=this.isUpdate;if(Object(N.isEmpty)(u))return A.a.createElement(f.a,null);var k=function(e){return g&&Y.a[g].includes(e)},_=this.model,j=A.a.createElement("div",null,A.a.createElement(p.a,null,A.a.createElement(m.a,{sm:{offset:2},xl:{offset:1}},A.a.createElement(d.a,{size:"large",style:{marginRight:15},onClick:l},"取消"),A.a.createElement(d.a,{size:"large",type:"primary",onClick:this.handleSubmit},"提交")))),x=A.a.createElement("div",null,A.a.createElement(se,o()({label:"操作"},ae),r("operation",{initialValue:g})(A.a.createElement(re,{field:this.schemas().fields.find(function(e){return"operation"===e.name}),choices:this.schemas().fields.find(function(e){return"operation"===e.name}).choices,options:{disable:!0},disabled:!0}))),k("func_name")&&A.a.createElement(se,o()({required:!0,label:"云函数名"},ae),r("func_name",{rules:[{message:"请输入云函数名",required:!0}]})(A.a.createElement(s.a,{placeholder:"请输入"}))),A.a.createElement(se,o()({label:"名称"},ae),r("name",{})(A.a.createElement(s.a,{placeholder:"请输入"}))),A.a.createElement(se,o()({required:!0,label:"路径"},ae),r("slug",{rules:[{message:"请输入路径",required:!0}]})(A.a.createElement(s.a,{placeholder:"请输入"}))),A.a.createElement(se,o()({required:!0,label:"模型"},ae),r("app__model",{rules:[{message:"请选择模型",required:!0}]})(A.a.createElement(c.a,{options:h,placeholder:"请选择",displayRender:function(e){return e.join("__")}}))),k("paging")&&A.a.createElement(se,o()({label:"分页"},ae),r("paging",{initialValue:!1})(A.a.createElement(le,null))),n("paging")&&k("size")&&A.a.createElement("div",null,A.a.createElement(se,o()({required:!0,label:"页长参数"},ae),r("size",{initialValue:{name:"pageSize",default:30},rules:[{validator:Q.e}]})(A.a.createElement(G.b,null))),A.a.createElement(se,o()({required:!0,label:"页码参数"},ae),r("page",{initialValue:"pageNumber",rules:[{message:"请输入页码参数",required:!0}]})(A.a.createElement(s.a,null)))),k("pk")&&A.a.createElement(se,o()({required:!0,label:"主键"},ae),r("pk",{initialValue:"id",rules:[{message:"请输入主键",required:!0}]})(A.a.createElement(s.a,null))),A.a.createElement(se,o()({label:"说明"},ae,{wrapperCol:{xs:{span:24},sm:{span:20},xxl:{span:15}}}),r("summary",{})(A.a.createElement(ne,{placeholder:"请输入备注",field:this.schemas().fields.find(function(e){return"summary"===e.name})}))),A.a.createElement(se,o()({label:"启用"},ae),r("disable",{initialValue:!1})(A.a.createElement(le,null)))),O=A.a.createElement("div",null,k("parameter")&&_&&A.a.createElement(se,null,r("parameter",{initialValue:{}})(A.a.createElement(G.c,{schemas:u,model:_,operation:g,isNew:!v}))),k("setfield")&&_&&A.a.createElement(se,null,r("setfield",{initialValue:{}})(A.a.createElement(G.e,{schemas:u,model:_,operation:g,getParameterValue:function(){return n("parameter")},isNew:!v}))),k("displayfield")&&_&&A.a.createElement(se,null,r("displayfield",{initialValue:[]})(A.a.createElement(G.a,{schemas:u,model:_}))),k("filter")&&_&&A.a.createElement("div",null,A.a.createElement("div",{style:{paddingBottom:2}},A.a.createElement("span",{style:{fontSize:26}},"过滤规则")),A.a.createElement(se,null,r("filter",{initialValue:[]})(A.a.createElement(G.d,{columns:Object(Q.k)(u,_),getVariableData:function(){return Object(X.a)({dollarData:n("parameter")})},systemData:Y.b})))),k("ordering")&&A.a.createElement(se,o()({label:"排序"},ae,{labelCol:{xs:{span:24},sm:{span:2},xl:{span:1}}}),r("ordering",{})(A.a.createElement(I.a,{placeholder:"请选择",mode:"multiple",allowClear:!0},Object(Q.l)(u,_).map(function(e){return A.a.createElement(ce,{key:e.key,value:e.key},e.label)}))))),V=A.a.createElement("div",null,A.a.createElement(se,o()({label:"要求登录"},ae),r("logined",{initialValue:!1})(A.a.createElement(le,null))),A.a.createElement(se,o()({label:"角色"},ae),r("groups",{})(A.a.createElement(re,{field:this.schemas().fields.find(function(e){return"groups"===e.name})})))),w=A.a.createElement("div",null,A.a.createElement(z.a,null,A.a.createElement(i.a,null,v?A.a.createElement("div",null,A.a.createElement(K.a,{defaultActiveKey:"1"},A.a.createElement(ie,{tab:"基本信息",key:"1",forceRender:!0},x),A.a.createElement(ie,{tab:"操作配置",key:"2",forceRender:!0},O),A.a.createElement(ie,{tab:"权限配置",key:"3",forceRender:!0},V)),j):A.a.createElement("div",null,A.a.createElement("div",{style:{marginTop:30}},A.a.createElement(K.a,{defaultActiveKey:"0",renderTabBar:function(){return A.a.createElement(T.a,{current:E,style:{marginBottom:30}},A.a.createElement(ue,{key:0,title:"基本信息"}),A.a.createElement(ue,{key:1,title:"操作配置"}),A.a.createElement(ue,{key:2,title:"权限配置"}))},activeKey:"".concat(E)},A.a.createElement(ie,{key:"0",forceRender:!0},x),A.a.createElement(ie,{key:"1",forceRender:!0},O),A.a.createElement(ie,{key:"2",forceRender:!0},V))),A.a.createElement(p.a,null,A.a.createElement(m.a,{sm:{offset:2},xl:{offset:1}},E<2&&A.a.createElement(d.a,{type:"primary",onClick:function(){return e.next()}},"下一步"),E>0&&A.a.createElement(d.a,{style:{marginLeft:8,marginRight:8},onClick:function(){return e.prev()}},"上一步"),2===E&&A.a.createElement(d.a,{style:{marginLeft:8,marginRight:8},onClick:l},"取消"),2===E&&A.a.createElement(d.a,{type:"primary",onClick:this.handleSubmit},"提交")))))));return A.a.createElement(Q.a.Provider,{value:y},w)}},{key:"operation",get:function(){var e=this.props.location.query.operation,t=this.isUpdate;return!e&&t?this.state.operation:e}},{key:"isUpdate",get:function(){var e=this.props,t=e.match.params.id;return!(e.location.query.operation||0!==t&&!t)}},{key:"model",get:function(){var e=(0,this.props.form.getFieldValue)("app__model"),t=this.state.model;return Object(N.isEmpty)(e)?t:"".concat(e[0],"__").concat(e[1])}}]),a}(M.PureComponent))||l)||l)||l),pe=z.a.create()(oe);t.default=function(e){return A.a.createElement(Z.b,null,A.a.createElement(pe,e))}}}]);