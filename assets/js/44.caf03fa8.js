(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{397:function(i,n,t){"use strict";t.r(n);var e={props:["urls"],data:function(){return{slide:0,sliding:null,parsed:[]}},mounted:function(){this.parsed=JSON.parse(this.urls)},methods:{onSlideStart:function(i){this.sliding=!0},onSlideEnd:function(i){this.sliding=!1}}},s=t(0),l=Object(s.a)(e,function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("div",[t("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":i.onSlideStart,"sliding-end":i.onSlideEnd},model:{value:i.slide,callback:function(n){i.slide=n},expression:"slide"}},i._l(i.parsed,function(i){return t("b-carousel-slide",{key:i,attrs:{"img-src":i}})}),1)],1)},[],!1,null,null,null);n.default=l.exports}}]);