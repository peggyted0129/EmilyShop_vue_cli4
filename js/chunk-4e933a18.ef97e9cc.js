(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e933a18"],{"6c3f":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"my-8 text-topic row justify-content-center"},[e("form",{staticClass:"col-md-6",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.order.products,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"py-5 align-middle"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"py-5 align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),e("td",{staticClass:"py-5 align-middle text-right"},[t._v(t._s(s.final_total))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-danger text-right py-5 font-weight-bolder",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-danger text-right font-weight-bolder py-5"},[t._v(t._s(t.order.total))])])])]),e("table",{staticClass:"table mb-0"},[e("tbody",[e("tr",[e("th",{staticClass:"py-5",attrs:{width:"150"}},[t._v("Email")]),e("td",{staticClass:"py-5 pl-12"},[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",{staticClass:"py-5"},[t._v("姓名")]),e("td",{staticClass:"py-5 pl-12"},[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{staticClass:"py-5"},[t._v("收件人電話")]),e("td",{staticClass:"py-5 pl-12"},[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",{staticClass:"py-5"},[t._v("收件人地址")]),e("td",{staticClass:"py-5 pl-12"},[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{staticClass:"py-5"},[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success pl-8"},[t._v("付款完成")]):e("span",{staticClass:"pl-8"},[t._v("尚未付款")])])])])]),!1===t.order.is_paid?e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",{staticClass:"py-5"},[t._v("品名")]),e("th",{staticClass:"py-5"},[t._v("數量")]),e("th",{staticClass:"py-5"},[t._v("單價")])])}],i=(e("99af"),{data:function(){return{orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(s).then((function(s){console.log("getOrder",s.data),t.order=s.data.order,t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(s).then((function(s){console.log("payOrder",s.data),s.data.success&&t.getOrder(),t.isLoading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}}),o=i,n=e("2877"),c=Object(n["a"])(o,r,a,!1,null,null,null);s["default"]=c.exports},8418:function(t,s,e){"use strict";var r=e("c04e"),a=e("9bf2"),i=e("5c6c");t.exports=function(t,s,e){var o=r(s);o in t?a.f(t,o,i(0,e)):t[o]=e}},"99af":function(t,s,e){"use strict";var r=e("23e7"),a=e("d039"),i=e("e8b5"),o=e("861d"),n=e("7b0b"),c=e("50c4"),d=e("8418"),l=e("65f0"),p=e("1dde"),u=e("b622"),h=e("2d00"),f=u("isConcatSpreadable"),_=9007199254740991,v="Maximum allowed index exceeded",y=h>=51||!a((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=p("concat"),C=function(t){if(!o(t))return!1;var s=t[f];return void 0!==s?!!s:i(t)},b=!y||!g;r({target:"Array",proto:!0,forced:b},{concat:function(t){var s,e,r,a,i,o=n(this),p=l(o,0),u=0;for(s=-1,r=arguments.length;s<r;s++)if(i=-1===s?o:arguments[s],C(i)){if(a=c(i.length),u+a>_)throw TypeError(v);for(e=0;e<a;e++,u++)e in i&&d(p,u,i[e])}else{if(u>=_)throw TypeError(v);d(p,u++,i)}return p.length=u,p}})}}]);
//# sourceMappingURL=chunk-4e933a18.ef97e9cc.js.map