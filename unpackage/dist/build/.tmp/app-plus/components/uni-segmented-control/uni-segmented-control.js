(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-segmented-control/uni-segmented-control"],{"2b9d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};n.default=r},"4fb0":function(t,n,e){},"54b7":function(t,n,e){"use strict";e.r(n);var r=e("2b9d"),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,function(){return r[t]})}(c);n["default"]=u.a},"5ec1":function(t,n,e){"use strict";var r=e("4fb0"),u=e.n(r);u.a},"8ef6":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u})},f598:function(t,n,e){"use strict";e.r(n);var r=e("8ef6"),u=e("54b7");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("5ec1");var i=e("2877"),o=Object(i["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-segmented-control/uni-segmented-control-create-component',
    {
        'components/uni-segmented-control/uni-segmented-control-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("f598"))
        })
    },
    [['components/uni-segmented-control/uni-segmented-control-create-component']]
]);                
