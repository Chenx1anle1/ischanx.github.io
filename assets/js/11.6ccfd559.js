(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{595:function(t,n,a){"use strict";a.r(n);var e=a(20),l=a.n(e),o={data:function(){return{data:null,ac:0,fail:0,total:0}},mounted:function(){var t=this;l()({method:"get",url:"https://vjudge.net/user/solveDetail/mchanx"}).then((function(n){console.log(n);var a=n.data,e=a.acRecords,l=a.failRecords,o=0,r=0;for(var c in e)o+=e[c].length;for(var i in l)r+=l[i].length;var s=o+r;console.log(o,r,s),t.data=a,t.ac=o,t.fail=r,t.total=s}))},methods:{}},r=a(1),c=Object(r.a)(o,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",[a("h4",[t._v("Virtual Judge")]),t._v(" "),a("b",[t._v("已通过题目数：")]),t._v(t._s(t.ac)+"\n        "),a("b",[t._v("尚未通过题目数:")]),t._v(t._s(t.fail)+"\n        "),a("b",[t._v("总共:")]),t._v(t._s(t.total)+"\n    ")])])}),[],!1,null,null,null);n.default=c.exports}}]);