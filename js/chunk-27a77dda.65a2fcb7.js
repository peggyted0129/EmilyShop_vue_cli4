(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27a77dda"],{"176a":function(t,s,e){},"4a2f":function(t,s,e){"use strict";e("b1d9")},8418:function(t,s,e){"use strict";var a=e("c04e"),i=e("9bf2"),n=e("5c6c");t.exports=function(t,s,e){var l=a(s);l in t?i.f(t,l,n(0,e)):t[l]=e}},a434:function(t,s,e){"use strict";var a=e("23e7"),i=e("23cb"),n=e("a691"),l=e("50c4"),r=e("7b0b"),c=e("65f0"),o=e("8418"),u=e("1dde"),m=e("ae40"),p=u("splice"),d=m("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,f=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!d},{splice:function(t,s){var e,a,u,m,p,d,b=r(this),C=l(b.length),_=i(t,C),x=arguments.length;if(0===x?e=a=0:1===x?(e=0,a=C-_):(e=x-2,a=f(h(n(s),0),C-_)),C+e-a>v)throw TypeError(g);for(u=c(b,a),m=0;m<a;m++)p=_+m,p in b&&o(u,m,b[p]);if(u.length=a,e<a){for(m=_;m<C-a;m++)p=m+a,d=m+e,p in b?b[d]=b[p]:delete b[d];for(m=C;m>C-a+e;m--)delete b[m-1]}else if(e>a)for(m=C-a;m>_;m--)p=m+a-1,d=m+e-1,p in b?b[d]=b[p]:delete b[d];for(m=0;m<e;m++)b[m+_]=arguments[m+2];return b.length=C-a+e,u}})},a76a:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid px-0"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-lg-3"},[e("BackSidebar")],1),e("div",{staticClass:"col-lg-9"},[e("BackNavbar"),e("Alert"),e("router-view")],1)])])},i=[],n=(e("ac1f"),e("5319"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"back-nav d-flex justify-content-between align-items-center pt-11 pb-3 px-5"},[e("h2",{staticClass:"h4 font-weight-bolder text-topic py-4"},[t._v("Backstage management")]),e("a",{staticClass:"btn btn-topic btn-lg h4",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.signout(s)}}},[t._v("登出")])])}),l=[],r={data:function(){return{}},methods:{signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),s=this;this.$http.post(t).then((function(t){console.log(t.data),t.data.success&&s.$router.push("/login")}))}}},c=r,o=e("2877"),u=Object(o["a"])(c,n,l,!1,null,null,null),m=u.exports,p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-milk d-flex flex-column justify-content-between py-11",staticStyle:{height:"100vh"}},[e("div",{staticClass:"sidebar"},[e("h1",[e("router-link",{staticClass:"pl-9 mb-11",attrs:{to:{name:"Home"}}},[e("span",{staticClass:"material-icons text-topic h1 mr-4"},[t._v("spa")]),e("span",{staticClass:"navbar-font h1 text-topic align-center"},[t._v("Emily")])])],1),e("ul",{staticClass:"sidebar-link"},[e("li",{staticClass:"sidebar-title text-topic position-relative h4 mb-10 pl-9"},[t._v("管理員")]),e("li",{staticClass:"sidebar-list position-relative"},[e("router-link",{staticClass:"d-flex align-items-center py-4 pl-8",attrs:{to:"/admin/products"}},[e("span",{staticClass:"material-icons mr-5"},[t._v(" insert_chart ")]),e("h2",{staticClass:"h5 mb-0"},[t._v("產品列表")])])],1),e("li",{staticClass:"sidebar-list"},[e("router-link",{staticClass:"d-flex align-items-center py-4 pl-8",attrs:{to:"/admin/orders"}},[e("span",{staticClass:"material-icons mr-5"},[t._v(" question_answer ")]),e("h2",{staticClass:"h5 mb-0"},[t._v("訂單列表")])])],1),e("li",{staticClass:"sidebar-list"},[e("router-link",{staticClass:"d-flex align-items-center py-4 pl-8",attrs:{to:"/admin/coupon"}},[e("span",{staticClass:"material-icons mr-5"},[t._v(" assignment ")]),e("h2",{staticClass:"h5 mb-0"},[t._v("優惠券")])])],1)]),e("ul",{staticClass:"sidebar-link"},[e("li",{staticClass:"sidebar-title text-topic position-relative h4 mb-10 pl-9 mt-13"},[t._v("模擬訂單")]),e("li",{staticClass:"sidebar-list"},[e("router-link",{staticClass:"d-flex align-items-center py-4 pl-8",attrs:{to:"/shopping"}},[e("span",{staticClass:"material-icons mr-5"},[t._v(" shopping_cart ")]),e("h2",{staticClass:"h5 mb-0"},[t._v("模擬功能")])])],1)])]),t._m(0)])},d=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar-person d-flex pl-9"},[e("img",{staticClass:"sidebar-pic mr-5",attrs:{src:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week5/emilywang.jpeg",alt:""}}),e("div",{staticClass:"sidebar-mail"},[e("h2",{staticClass:"h6 font-weight-bolder mb-1"},[t._v("Emily Lu")]),e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[t._v("peggyted0129@gmail.com")])])])}],h={data:function(){return{}}},f=h,v=(e("ea8b"),Object(o["a"])(f,p,d,!1,null,null,null)),g=v.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,a){return e("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v(" "+t._s(s.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(a)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)])},C=[],_=(e("4160"),e("a434"),e("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,s){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:s,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var s=this;setTimeout((function(){s.messages.forEach((function(e,a){e.timestamp===t&&s.messages.splice(a,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(s,e)}))}}),x=_,k=(e("4a2f"),Object(o["a"])(x,b,C,!1,null,null,null)),w=k.exports,y={components:{BackNavbar:m,BackSidebar:g,Alert:w},created:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log("myCookie",t),this.$http.defaults.headers.common.Authorization=t},data:function(){return{}}},$=y,E=Object(o["a"])($,a,i,!1,null,null,null);s["default"]=E.exports},b1d9:function(t,s,e){},ea8b:function(t,s,e){"use strict";e("176a")}}]);
//# sourceMappingURL=chunk-27a77dda.65a2fcb7.js.map