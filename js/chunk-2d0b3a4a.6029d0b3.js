(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3a4a"],{"28f4":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"indexCollection"}},[s("ul",{staticClass:"release-item"},e._l(e.videoArr,(function(t,a){return s("li",{key:a,staticClass:"release-video-item"},[s("a",{staticClass:"releaseImage",attrs:{href:""},on:{mouseenter:function(t){return e.showBg(a)},mouseleave:function(t){return e.hiddenBg(a)}}},[s("img",{attrs:{src:t.image,alt:""}}),s("span",{staticClass:"time-video"},[e._v(e._s(t.playTime))]),s("div",{ref:"scroll",refInFor:!0,attrs:{id:"scrollbackground"}})]),s("p",{staticClass:"release-item-title"},[e._v(e._s(t.title))]),s("div",{staticClass:"i-release-meta"},[s("span",{staticClass:"i-release-data"},[s("em",{staticClass:"i-info-icon i-info-time"}),e._v(e._s(t.date)+" ")]),s("span",{staticClass:"i-release-data"},[s("em",{staticClass:"i-info-icon i-info-play"}),e._v(e._s(t.playCount)+" ")])])])})),0)])},i=[],n=s("b6d1"),r={name:"IndexCollection",data:function(){return{videoArr:""}},methods:{showBg:function(e){var t=this.$refs.scroll;t[e].style.background="rgba(127,127,127,0.5)"},hiddenBg:function(e){var t=this.$refs.scroll;t[e].style.background="rgba(127,127,127,0)"}},created:function(){var e=this;Object(n["d"])("https://www.lcxin666.com",(function(t){e.videoArr=t}),(function(e){console.log(e)}))}},l=r,o=s("2877"),c=Object(o["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b3a4a.6029d0b3.js.map