(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"5WY0":function(e,t,a){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},cq3J:function(e,t,a){"use strict";a.r(t);a("14J3");var r,s,n,i,o=a("BMrR"),l=(a("+L6B"),a("2/Rp")),c=(a("jCWc"),a("kPKH")),p=(a("Q9mQ"),a("diRs")),m=(a("MXD1"),a("CFYs")),d=a("p0pE"),u=a.n(d),g=(a("2qtc"),a("kLXV")),f=a("2Taf"),h=a.n(f),v=a("vZ4D"),E=a.n(v),w=a("MhPg"),b=a.n(w),y=a("l4Ni"),M=a.n(y),O=a("ujKo"),j=a.n(O),k=(a("5NDa"),a("5rEg")),F=(a("OaEy"),a("2fM7")),P=(a("y8nQ"),a("Vl3Y")),S=a("q1tI"),C=a.n(S),q=a("MuoO"),D=a("Y2fQ"),N=a("wY1l"),x=a.n(N),z=a("3a4m"),R=a.n(z),I=a("5WY0"),V=a.n(I);function Y(e){var t=W();return function(){var a,r=j()(e);if(t){var s=j()(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return M()(this,a)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var J=P["a"].Item,Q=F["a"].Option,B=k["a"].Group,G={ok:C.a.createElement("div",{className:V.a.success},C.a.createElement(D["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:C.a.createElement("div",{className:V.a.warning},C.a.createElement(D["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:C.a.createElement("div",{className:V.a.error},C.a.createElement(D["FormattedMessage"],{id:"validation.password.strength.short"}))},L={ok:"success",pass:"normal",poor:"exception"},T=(r=Object(q["connect"])(function(e){var t=e.register,a=e.loading;return{register:t,submitting:a.effects["register/submit"]}}),s=P["a"].create(),r(n=s((i=function(e){b()(a,e);var t=Y(a);function a(){var e;h()(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return e=t.call.apply(t,[this].concat(s)),e.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},e.onGetCaptcha=function(){var t=59;e.setState({count:t}),e.interval=setInterval(function(){t-=1,e.setState({count:t}),0===t&&clearInterval(e.interval)},1e3),g["a"].info({title:Object(D["formatMessage"])({id:"app.login.verification-code-warning"})})},e.getPasswordStatus=function(){var t=e.props.form,a=t.getFieldValue("password");return a&&a.length>9?"ok":a&&a.length>5?"pass":"poor"},e.handleSubmit=function(t){t.preventDefault();var a=e.props,r=a.form,s=a.dispatch;r.validateFields({force:!0},function(t,a){if(!t){var r=e.state.prefix;s({type:"register/submit",payload:u()({},a,{prefix:r})})}})},e.handleConfirmBlur=function(t){var a=t.target.value,r=e.state.confirmDirty;e.setState({confirmDirty:r||!!a})},e.checkConfirm=function(t,a,r){var s=e.props.form;a&&a!==s.getFieldValue("password")?r(Object(D["formatMessage"])({id:"validation.password.twice"})):r()},e.checkPassword=function(t,a,r){var s=e.state,n=s.visible,i=s.confirmDirty;if(a)if(e.setState({help:""}),n||e.setState({visible:!!a}),a.length<6)r("error");else{var o=e.props.form;a&&i&&o.validateFields(["confirm"],{force:!0}),r()}else e.setState({help:Object(D["formatMessage"])({id:"validation.password.required"}),visible:!!a}),r("error")},e.changePrefix=function(t){e.setState({prefix:t})},e.renderPasswordProgress=function(){var t=e.props.form,a=t.getFieldValue("password"),r=e.getPasswordStatus();return a&&a.length?C.a.createElement("div",{className:V.a["progress-".concat(r)]},C.a.createElement(m["a"],{status:L[r],className:V.a.progress,strokeWidth:6,percent:10*a.length>100?100:10*a.length,showInfo:!1})):null},e}return E()(a,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,a=e.register,r=t.getFieldValue("mail");"ok"===a.status&&R.a.push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,s=this.state,n=s.count,i=s.prefix,m=s.help,d=s.visible;return C.a.createElement("div",{className:V.a.main},C.a.createElement("h3",null,C.a.createElement(D["FormattedMessage"],{id:"app.register.register"})),C.a.createElement(P["a"],{onSubmit:this.handleSubmit},C.a.createElement(J,null,r("mail",{rules:[{required:!0,message:Object(D["formatMessage"])({id:"validation.email.required"})},{type:"email",message:Object(D["formatMessage"])({id:"validation.email.wrong-format"})}]})(C.a.createElement(k["a"],{size:"large",placeholder:Object(D["formatMessage"])({id:"form.email.placeholder"})}))),C.a.createElement(J,{help:m},C.a.createElement(p["a"],{getPopupContainer:function(e){return e.parentNode},content:C.a.createElement("div",{style:{padding:"4px 0"}},G[this.getPasswordStatus()],this.renderPasswordProgress(),C.a.createElement("div",{style:{marginTop:10}},C.a.createElement(D["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:d},r("password",{rules:[{validator:this.checkPassword}]})(C.a.createElement(k["a"],{size:"large",type:"password",placeholder:Object(D["formatMessage"])({id:"form.password.placeholder"})})))),C.a.createElement(J,null,r("confirm",{rules:[{required:!0,message:Object(D["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(C.a.createElement(k["a"],{size:"large",type:"password",placeholder:Object(D["formatMessage"])({id:"form.confirm-password.placeholder"})}))),C.a.createElement(J,null,C.a.createElement(B,{compact:!0},C.a.createElement(F["a"],{size:"large",value:i,onChange:this.changePrefix,style:{width:"20%"}},C.a.createElement(Q,{value:"86"},"+86"),C.a.createElement(Q,{value:"87"},"+87")),r("mobile",{rules:[{required:!0,message:Object(D["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(D["formatMessage"])({id:"validation.phone-number.wrong-format"})}]})(C.a.createElement(k["a"],{size:"large",style:{width:"80%"},placeholder:Object(D["formatMessage"])({id:"form.phone-number.placeholder"})})))),C.a.createElement(J,null,C.a.createElement(o["a"],{gutter:8},C.a.createElement(c["a"],{span:16},r("captcha",{rules:[{required:!0,message:Object(D["formatMessage"])({id:"validation.verification-code.required"})}]})(C.a.createElement(k["a"],{size:"large",placeholder:Object(D["formatMessage"])({id:"form.verification-code.placeholder"})}))),C.a.createElement(c["a"],{span:8},C.a.createElement(l["a"],{size:"large",disabled:n,className:V.a.getCaptcha,onClick:this.onGetCaptcha},n?"".concat(n," s"):Object(D["formatMessage"])({id:"app.register.get-verification-code"}))))),C.a.createElement(J,null,C.a.createElement(l["a"],{size:"large",loading:a,className:V.a.submit,type:"primary",htmlType:"submit"},C.a.createElement(D["FormattedMessage"],{id:"app.register.register"})),C.a.createElement(x.a,{className:V.a.login,to:"/User/Login"},C.a.createElement(D["FormattedMessage"],{id:"app.register.sign-in"})))))}}]),a}(S["Component"]),n=i))||n)||n);t["default"]=T}}]);