(this["webpackJsonprev-it"]=this["webpackJsonprev-it"]||[]).push([[7],{47:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(11),n=c(0),r=c(3),i=c(21),o=c(26),a=(c(47),c(1));t.default=function(e){var t=Object(n.useState)(e.cache),c=Object(s.a)(t,2),u=c[0],d=c[1],l=Object(r.g)().push,j=Object(r.i)().query,h=Object(i.b)();return Object(n.useEffect)((function(){e.cache.products||(d({}),o.d(j).then((function(t){console.log("JSON",t),d(t),e.setCache(t),e.setLastSearchText(j)})).catch((function(e){return console.warn("error making API request:",e)})))}),[j]),Object(a.jsxs)("div",{className:"home",children:[Object(a.jsxs)("h2",{children:['Results for "',j,'"']}),Object(a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},"data-testid":"searchThumbnails",children:"products"in u?u.products.map((function(t,c){return Object(a.jsxs)("div",{style:{backgroundColor:"white",margin:40,width:380,justifyContent:"center",cursor:"pointer"},children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t.largeImage,alt:t.name,onClick:function(s){return function(t,c,s){console.log("ev",t,c,s),t.shiftKey?h({type:"favourites/add",payload:c}):(e.setSlideshowIndex(s),l("/productDetail/".concat(c.sku)))}(s,t,c)}})}),Object(a.jsxs)("div",{children:[t.name," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:["Review: ",t.customerReviewCount," || Average: ",t.customerReviewAverage," || Top Rated:"," ",t.customerTopRated]})]},c)})):Object(a.jsx)("p",{children:"Loading results..."})})]})}}}]);
//# sourceMappingURL=7.7ee2a34d.chunk.js.map