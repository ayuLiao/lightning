(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{r7nV:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("SePM");var n=l(a("PMX6"));a("lNFX");var u=l(a("VE2L"));a("4X2C");var i=l(a("xvon")),d=l(a("jehZ"));a("e+1C");var f=l(a("Nd5c"));a("ER8q");var s=l(a("Ai5L"));a("eNCU");var c=l(a("pjJH"));a("smr7");var o=l(a("DlTu")),m=l(a("p0pE")),p=l(a("d6i3")),h=l(a("qIgq")),E=l(a("1l/V")),y=l(a("2Taf")),v=l(a("vZ4D")),g=l(a("rlhR")),k=l(a("MhPg")),b=l(a("l4Ni")),_=l(a("ujKo"));a("5RCp");var x=l(a("a82I"));a("vmZS");var V=l(a("NjVP"));a("yavW");var S=l(a("WuMn"));a("Ahcs");var P,w,F,C,D=l(a("k0dM")),q=r(a("q1tI")),R=a("LvDl"),z=l(a("bKel")),A=l(a("3a4m")),M=a("Hx5s"),N=a("Hg0r"),T=a("BSml"),I=a("9Ndd"),j=a("rr6D"),K=a("I2cA"),H=a("3Rrz"),U=a("KNTv"),W=a("jfUH");function B(e){var t=L();return function(){var a,l=(0,_.default)(e);if(t){var r=(0,_.default)(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return(0,b.default)(this,a)}}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var X={labelCol:{xs:{span:24},sm:{span:4},lg:{span:3},xl:{span:3},xxl:{span:2}},wrapperCol:{xs:{span:24},sm:{span:20},md:{span:15},lg:{span:15},xl:{span:10},xxl:{span:7}}},Z=I.bsmWidgets.Select,J=I.bsmWidgets.TextArea,O=I.bsmWidgets.Switch,G=D.default.TabPane,Q=S.default.Option,Y=V.default.Item,$=x.default.Step,ee=(P=(0,N.connect)(function(e){var t=e.content,a=t.schemas,l=t.adminConfig,r=e.loading;return{schemas:a,adminConfig:l,loading:r.models.content}}),w=(0,W.connectHook)(function(){return{appModels:(0,W.useModelsData)()}}),(0,z.default)(F=P(F=w((C=function(e){(0,k.default)(a,e);var t=B(a);function a(){var e;(0,y.default)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),e.state={operation:void 0,model:void 0,current:0,checkValues:!1},e.schemasData=function(){return new Promise(function(t){var a=[],l=0,r=function r(){l>10&&t("schemas\u6570\u636e\u9519\u8bef"),setTimeout(function(){var n=e.props.schemas;a=n,(0,R.isEmpty)(a)?(l+=1,r()):t(a)},500)};r()})},e.handleSubmit=(0,E.default)(p.default.mark(function t(){var a,l,r,n,u,i,d,f,s,c,o,m,E,y,v,k,b,_,x,V,S,P,w,F,C,D,q,R,z,M;return p.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.props.form,l=a.getFieldValue,r=a.getFieldsValue,n=a.validateFields,e.setState({checkValues:!0}),t.next=4,n();case 4:if((0,K.checkParameter)(l("parameter"))&&(0,K.checkSetfield)(l("setfield"))&&(0,K.checkFilter)(l("filter"))){t.next=6;break}return t.abrupt("return");case 6:if(u=(0,g.default)(e),i=u.operation,d=u.isUpdate,f=l("app__model"),i&&f){t.next=10;break}return t.abrupt("return");case 10:if(s=r(),c=s.app__model,o=s.parameter,m=s.ordering,E=s.displayfield,y=s.paging,v=s.page,k=s.size,b=s.pk,_=s.setfield,x=s.func_name,V=s.filter,S=(0,h.default)(c,2),P=S[0],w=S[1],F={app:P,model:w},j.formConfig.default.forEach(function(e){F[e]=s[e]}),F.disable=!F.disable,F.operation=i,F.groups&&(F.groups=F.groups.map(function(e){return e.id})),C=function(){var e={name:b,default:void 0,desc:"\u4e3b\u952e",required:!0,is_array:!1,type:"pk"};F.parameter.push(e)},"list"===i&&(F.parameter=(0,K.formatParameter)(o),F.ordering=m,F.displayfield=E,y&&(D=k.name,q=k.default,R={name:v,default:1,desc:"\u9875\u7801\u53c2\u6570",required:!1,is_array:!1,type:"PAGE_IDX"},z={name:D,default:q,desc:"\u9875\u957f\u53c2\u6570",required:!1,is_array:!1,type:"PAGE_SIZE"},F.parameter.push(R),F.parameter.push(z)),F.filter=(0,K.formatFilter)(V)),"retrieve"===i&&(F.displayfield=E,F.parameter=[],C()),"create"===i&&(F.parameter=(0,K.formatParameter)(o),F.displayfield=E,F.setfield=(0,K.formatSetField)(_)),"update"!==i&&"replace"!==i||(F.parameter=(0,K.formatParameter)(o),C(),F.displayfield=E,F.setfield=(0,K.formatSetField)(_)),"delete"===i&&(F.parameter=[],C()),"update_by_condition"===i&&(F.parameter=(0,K.formatParameter)(o),F.setfield=(0,K.formatSetField)(_),F.filter=(0,K.formatFilter)(V)),"delete_by_condition"===i&&(F.parameter=(0,K.formatParameter)(o),F.filter=(0,K.formatFilter)(V)),"func"===i&&(F.parameter=(0,K.formatParameter)(o),F.func_name=x),!d){t.next=33;break}return M=e.props.match.params.id,t.next=31,(0,U.aipSave)(F,parseInt(M,0));case 31:return A.default.push("/content/api_db__api"),t.abrupt("return");case 33:return t.next=35,(0,U.aipSave)(F);case 35:A.default.push("/content/api_db__api");case 36:case"end":return t.stop()}},t)})),e}return(0,v.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0===e||e)&&this.setDefaultValues(e)}},{key:"setDefaultValues",value:function(){var e=(0,E.default)(p.default.mark(function e(t){var a,l,r,n,u,i,d,f,s,c,o,h,E,y,v;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this.props,l=a.form.setFieldsValue,r=a.dispatch,n=this.props.schemas,e.next=4,r({type:"content/detail",payload:{model:"api_db__api",id:t}});case 4:return u=e.sent,i=u.operation,d=u.slug,e.next=8,(0,U.getApiDetail)(d);case 8:if(f=e.sent,this.setState({operation:i,model:f.app__model}),!(0,R.isEmpty)(n)){e.next=14;break}return e.next=13,this.schemasData();case 13:n=e.sent;case 14:return e.next=16,(0,K.apiFormat)(f,n);case 16:s=e.sent,c=s.displayfield,o=s.filter,h=s.parameter,E=s.setfield,y=s.pk,v={displayfield:c,filter:o,parameter:h,setfield:E,pk:y},delete s.displayfield,delete s.filter,delete s.parameter,delete s.setfield,delete s.pk,l((0,m.default)({},s),function(){setTimeout(function(){return l(v)},2e3)});case 25:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"schemas",value:function(){var e=this.props.schemas;return e.api_db__api||[]}},{key:"next",value:function(){var e=(0,E.default)(p.default.mark(function e(){var t,a,l,r,n;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.state.current,a=this.props.form,l=a.validateFields,r=a.getFieldValue,0!==t){e.next=5;break}return e.next=5,l(["func_name","slug","app__model","size","page","pk"]);case 5:if(1!==t){e.next=11;break}return this.setState({checkValues:!0}),e.next=9,l();case 9:if((0,K.checkParameter)(r("parameter"))&&(0,K.checkSetfield)(r("setfield"))&&(0,K.checkFilter)(r("filter"))){e.next=11;break}return e.abrupt("return");case 11:n=t+1,this.setState({current:n});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"prev",value:function(){var e=this.state.current,t=e-1;this.setState({current:t})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=a.getFieldDecorator,r=a.getFieldValue,m=a.resetFields,p=t.schemas,h=t.appModels,E=this.state,y=E.current,v=E.checkValues,g=this.operation,k=this.isUpdate;if((0,R.isEmpty)(p))return q.default.createElement(o.default,null);var b=function(e){return g&&j.formConfig[g].includes(e)},_=this.model,P=function(){return(0,H.getDollarData)({dollarData:r("parameter")})},w=q.default.createElement("div",null,q.default.createElement(f.default,null,q.default.createElement(s.default,{sm:{offset:2},xl:{offset:1}},q.default.createElement(c.default,{size:"large",style:{marginRight:15},onClick:m},"\u53d6\u6d88"),q.default.createElement(c.default,{size:"large",type:"primary",onClick:this.handleSubmit},"\u63d0\u4ea4")))),F=q.default.createElement("div",null,q.default.createElement(Y,(0,d.default)({label:"\u64cd\u4f5c"},X),l("operation",{initialValue:g})(q.default.createElement(Z,{field:this.schemas().fields.find(function(e){return"operation"===e.name}),choices:this.schemas().fields.find(function(e){return"operation"===e.name}).choices,options:{disable:!0},disabled:!0}))),b("func_name")&&q.default.createElement(Y,(0,d.default)({required:!0,label:"\u4e91\u51fd\u6570\u540d"},X),l("func_name",{rules:[{message:"\u8bf7\u8f93\u5165\u4e91\u51fd\u6570\u540d",required:!0}]})(q.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165"}))),q.default.createElement(Y,(0,d.default)({label:"\u540d\u79f0"},X),l("name",{})(q.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165"}))),q.default.createElement(Y,(0,d.default)({required:!0,label:"\u8def\u5f84"},X),l("slug",{rules:[{message:"\u8bf7\u8f93\u5165\u8def\u5f84",required:!0}]})(q.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165"}))),q.default.createElement(Y,(0,d.default)({required:!0,label:"\u6a21\u578b"},X),l("app__model",{rules:[{message:"\u8bf7\u9009\u62e9\u6a21\u578b",required:!0}]})(q.default.createElement(u.default,{options:h,placeholder:"\u8bf7\u9009\u62e9",displayRender:function(e){return e.join("__")}}))),b("paging")&&q.default.createElement(Y,(0,d.default)({label:"\u5206\u9875"},X),l("paging",{initialValue:!1})(q.default.createElement(O,null))),r("paging")&&b("size")&&q.default.createElement("div",null,q.default.createElement(Y,(0,d.default)({required:!0,label:"\u9875\u957f\u53c2\u6570"},X),l("size",{initialValue:{name:"pageSize",default:30},rules:[{validator:K.checkPageSize}]})(q.default.createElement(T.PageSize,null))),q.default.createElement(Y,(0,d.default)({required:!0,label:"\u9875\u7801\u53c2\u6570"},X),l("page",{initialValue:"pageNumber",rules:[{message:"\u8bf7\u8f93\u5165\u9875\u7801\u53c2\u6570",required:!0}]})(q.default.createElement(i.default,null)))),b("pk")&&q.default.createElement(Y,(0,d.default)({required:!0,label:"\u4e3b\u952e"},X),l("pk",{initialValue:"id",rules:[{message:"\u8bf7\u8f93\u5165\u4e3b\u952e",required:!0}]})(q.default.createElement(i.default,null))),q.default.createElement(Y,(0,d.default)({label:"\u8bf4\u660e"},X,{wrapperCol:{xs:{span:24},sm:{span:20},xxl:{span:15}}}),l("summary",{})(q.default.createElement(J,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8",field:this.schemas().fields.find(function(e){return"summary"===e.name})}))),q.default.createElement(Y,(0,d.default)({label:"\u542f\u7528"},X),l("disable",{initialValue:!1})(q.default.createElement(O,null)))),C=q.default.createElement("div",null,b("parameter")&&_&&q.default.createElement(Y,null,l("parameter",{initialValue:{}})(q.default.createElement(T.Parameter,{schemas:p,model:_,operation:g,isNew:!k}))),b("setfield")&&_&&q.default.createElement(Y,null,l("setfield",{initialValue:{}})(q.default.createElement(T.SetField,{schemas:p,model:_,operation:g,getParameterValue:function(){return r("parameter")},isNew:!k}))),b("displayfield")&&_&&q.default.createElement(Y,null,l("displayfield",{initialValue:[]})(q.default.createElement(T.DisplayField,{schemas:p,model:_}))),b("filter")&&_&&q.default.createElement("div",null,q.default.createElement("div",{style:{paddingBottom:2}},q.default.createElement("span",{style:{fontSize:26}},"\u8fc7\u6ee4\u89c4\u5219")),q.default.createElement(Y,null,l("filter",{initialValue:[]})(q.default.createElement(T.QueryBuilder,{columns:(0,K.getFilterColumns)(p,_),getVariableData:P,systemData:j.systemData})))),b("ordering")&&q.default.createElement(Y,(0,d.default)({label:"\u6392\u5e8f"},X,{labelCol:{xs:{span:24},sm:{span:2},xl:{span:1}}}),l("ordering",{})(q.default.createElement(S.default,{placeholder:"\u8bf7\u9009\u62e9",mode:"multiple",allowClear:!0},(0,K.getOrderingKeys)(p,_).map(function(e){return q.default.createElement(Q,{key:e.key,value:e.key},e.label)}))))),z=q.default.createElement("div",null,q.default.createElement(Y,(0,d.default)({label:"\u8981\u6c42\u767b\u5f55"},X),l("logined",{initialValue:!1})(q.default.createElement(O,null))),q.default.createElement(Y,(0,d.default)({label:"\u89d2\u8272"},X),l("groups",{})(q.default.createElement(Z,{field:this.schemas().fields.find(function(e){return"groups"===e.name})})))),A=function(){return q.default.createElement(x.default,{current:y,style:{marginBottom:30}},q.default.createElement($,{key:0,title:"\u57fa\u672c\u4fe1\u606f"}),q.default.createElement($,{key:1,title:"\u64cd\u4f5c\u914d\u7f6e"}),q.default.createElement($,{key:2,title:"\u6743\u9650\u914d\u7f6e"}))},M=q.default.createElement("div",null,q.default.createElement(V.default,null,q.default.createElement(n.default,null,k?q.default.createElement("div",null,q.default.createElement(D.default,{defaultActiveKey:"1"},q.default.createElement(G,{tab:"\u57fa\u672c\u4fe1\u606f",key:"1",forceRender:!0},F),q.default.createElement(G,{tab:"\u64cd\u4f5c\u914d\u7f6e",key:"2",forceRender:!0},C),q.default.createElement(G,{tab:"\u6743\u9650\u914d\u7f6e",key:"3",forceRender:!0},z)),w):q.default.createElement("div",null,q.default.createElement("div",{style:{marginTop:30}},q.default.createElement(D.default,{defaultActiveKey:"0",renderTabBar:A,activeKey:"".concat(y)},q.default.createElement(G,{key:"0",forceRender:!0},F),q.default.createElement(G,{key:"1",forceRender:!0},C),q.default.createElement(G,{key:"2",forceRender:!0},z))),q.default.createElement(f.default,null,q.default.createElement(s.default,{sm:{offset:2},xl:{offset:1}},y<2&&q.default.createElement(c.default,{type:"primary",onClick:function(){return e.next()}},"\u4e0b\u4e00\u6b65"),y>0&&q.default.createElement(c.default,{style:{marginLeft:8,marginRight:8},onClick:function(){return e.prev()}},"\u4e0a\u4e00\u6b65"),2===y&&q.default.createElement(c.default,{style:{marginLeft:8,marginRight:8},onClick:m},"\u53d6\u6d88"),2===y&&q.default.createElement(c.default,{type:"primary",onClick:this.handleSubmit},"\u63d0\u4ea4")))))));return q.default.createElement(K.CheckValues.Provider,{value:v},M)}},{key:"operation",get:function(){var e=this.props.location.query.operation,t=this.isUpdate;return!e&&t?this.state.operation:e}},{key:"isUpdate",get:function(){var e=this.props,t=e.match.params.id,a=e.location.query.operation;return!(a||0!==t&&!t)}},{key:"model",get:function(){var e=this.props.form.getFieldValue,t=e("app__model"),a=this.state.model;if((0,R.isEmpty)(t))return a;var l="".concat(t[0],"__").concat(t[1]);return l}}]),a}(q.PureComponent),F=C))||F)||F)||F),te=V.default.create()(ee),ae=function(e){return q.default.createElement(M.PageHeaderWrapper,null,q.default.createElement(te,e))};t.default=ae}}]);