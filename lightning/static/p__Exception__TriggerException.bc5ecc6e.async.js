(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{GsTM:function(r,t,e){"use strict";e.r(t);e("IzEo");var n,a,o,i=e("bx4M"),c=(e("T2oS"),e("W9HT")),u=(e("+L6B"),e("2/Rp")),l=e("2Taf"),s=e.n(l),f=e("vZ4D"),p=e.n(f),g=e("MhPg"),d=e.n(g),y=e("l4Ni"),h=e.n(y),v=e("ujKo"),E=e.n(v),m=e("q1tI"),w=e.n(m),k=e("MuoO"),C=e("uUKN"),R=e.n(C);function b(r){var t=x();return function(){var e,n=E()(r);if(t){var a=E()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return h()(this,e)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(r){return!1}}var M=(n=Object(k["connect"])(function(r){return{isloading:r.error.isloading}}),n((o=function(r){d()(e,r);var t=b(e);function e(){var r;s()(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),r.state={isloading:!1},r.triggerError=function(t){r.setState({isloading:!0});var e=r.props.dispatch;e({type:"error/query",payload:{code:t}})},r}return p()(e,[{key:"render",value:function(){var r=this,t=this.state.isloading;return w.a.createElement(i["a"],null,w.a.createElement(c["a"],{spinning:t,wrapperClassName:R.a.trigger},w.a.createElement(u["a"],{type:"danger",onClick:function(){return r.triggerError(401)}},"\u89e6\u53d1401"),w.a.createElement(u["a"],{type:"danger",onClick:function(){return r.triggerError(403)}},"\u89e6\u53d1403"),w.a.createElement(u["a"],{type:"danger",onClick:function(){return r.triggerError(500)}},"\u89e6\u53d1500"),w.a.createElement(u["a"],{type:"danger",onClick:function(){return r.triggerError(404)}},"\u89e6\u53d1404")))}}]),e}(m["PureComponent"]),a=o))||a);t["default"]=M},uUKN:function(r,t,e){r.exports={trigger:"antd-pro-pages-exception-style-trigger"}}}]);