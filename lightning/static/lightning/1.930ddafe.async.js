(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{teak:function(e,t,n){"use strict";n.r(t);var a=n("p0pE"),r=n.n(a),s=n("d6i3"),c=n.n(s),p=n("HP82");t.default={namespace:"bsmSetting",state:{},effects:{getSettings:c.a.mark(function e(t,n){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.call,r=n.put,e.next=3,a(p.getSettings);case 3:return s=e.sent,e.next=6,r({type:"changeSettings",payload:s});case 6:return e.next=8,r({type:"saveSettings",payload:s});case 8:case"end":return e.stop()}},e)}),changeSettings:c.a.mark(function e(t,n){var a,r,s,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,r=n.put,s=Object.keys(a),p={},s.forEach(function(e){void 0!==a[e]&&(p[e]=a[e])}),e.next=7,r({type:"setting/changeDefaultSettings",payload:p});case 7:case"end":return e.stop()}},e)})},reducers:{saveSettings:function(e,t){var n=t.payload;return r()({},e,n)}}}}}]);