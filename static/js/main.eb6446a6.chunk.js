(this["webpackJsonpabound-test-app"]=this["webpackJsonpabound-test-app"]||[]).push([[0],{50:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),i=e.n(c),o=e(21),a=e.n(o),u=e(3),s=e(2),d=e(22),f={black:"#000000",lightPink:"#FEDFE7",lightBlue:"#D3E0FF",lightRed:"#E96245",white:"#FFFFFF"};function l(){var n=Object(u.a)(["\n  ","\n\n  * {\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n\n  @media (max-width: 1024px) {\n    font-size: 14px;\n  }\n\n  @media (max-width: 600px) {\n    font-size: 12px;\n  }\n\n  html, body {\n    height: 100%;\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 300;\n    font-size: 1rem;\n  }\n\n  h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    font-size: 1.5rem;\n  }\n\n  button {\n    cursor: pointer;\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 3px;\n    padding: 5px 10px;\n    margin: 5px 10px;\n  }\n"]);return l=function(){return n},n}var j=Object(s.a)(l(),d.a,f.white,f.black);function b(){var n=Object(u.a)(["\n  display: flex;\n  min-height: 4rem;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return n},n}var x=s.c.nav(b()),h=function(){return Object(r.jsx)(x,{children:Object(r.jsx)("h1",{children:"Abound Test App"})})},p=e(6),O=e(26),m=e.n(O),g=e(27);function v(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  flex: 0 1 auto;\n  align-self: center;\n  height: 3rem;\n  cursor: ","; ;\n"]);return v=function(){return n},n}function C(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 75%;\n\n  * {\n    padding: 0.5rem;\n  }\n"]);return C=function(){return n},n}function k(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 30px;\n"]);return k=function(){return n},n}var y=s.c.div(k(),f.lightBlue),F=s.c.div(C()),w=s.c.button(v(),(function(n){return n.outOfStock?f.lightRed:"white"}),(function(n){return n.outOfStock?"white":"black"}),(function(n){return n.outOfStock?"not-allowed":"pointer"})),$=function(n){var t=n.data,e=n.addToCart,c=n.cartContents,i="out_of_stock"===t.gsx$availability.$t,o="$ ".concat((t.gsx$priceincents.$t/100).toFixed(2));return Object(r.jsxs)(y,{children:[Object(r.jsxs)(F,{outOfStock:i,children:[Object(r.jsx)("h2",{children:t.gsx$name.$t}),Object(r.jsx)("div",{children:t.gsx$description.$t}),Object(r.jsx)("div",{children:o})]}),Object(r.jsx)(w,{onClick:i?function(){}:function(){e([].concat(Object(g.a)(c),[{id:Date.now(),name:t.gsx$name.$t,price:t.gsx$priceincents.$t}]))},outOfStock:i,children:i?"Out of Stock":"Add to Cart"})]})};$.defaultProps={cartContents:[]};var S=$;function z(){var n=Object(u.a)(["\n  align-self: center;\n  font-size: 2rem;\n"]);return z=function(){return n},n}var T=s.c.div(z()),E=function(){return Object(r.jsx)(T,{children:"Loading..."})};function P(){var n=Object(u.a)(["\n  align-self: center;\n  font-size: 2rem;\n"]);return P=function(){return n},n}var A=s.c.div(P()),B=function(){return Object(r.jsx)(A,{children:"Error!"})};function D(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  flex: 0 1 75%;\n"]);return D=function(){return n},n}var I=s.c.div(D()),L=function(n){var t=n.addToCart,e=n.cartContents,i=Object(c.useState)("loading"),o=Object(p.a)(i,2),a=o[0],u=o[1],s=Object(c.useState)([]),d=Object(p.a)(s,2),f=d[0],l=d[1];return Object(c.useEffect)((function(){m.a.get("https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json").then((function(n){l(n.data.feed.entry),u("")})).catch((function(){u("error")}))}),[]),"loading"===a?Object(r.jsx)(E,{}):"error"===a?Object(r.jsx)(B,{}):Object(r.jsxs)(I,{children:[Object(r.jsx)("h1",{children:"Products"}),f.map((function(n){return Object(r.jsx)(S,{data:n,addToCart:t,cartContents:e},n.id.$t)}))]})};L.defaultProps={cartContents:[]};var M=L;function _(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 30px;\n\n  div {\n    margin: 0.5rem;\n  }\n"]);return _=function(){return n},n}function X(){var n=Object(u.a)(["\n  margin: 1rem;\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  flex: 0 1 25%;\n  border: 1px solid ",";\n\n  div {\n    margin: 0.5rem;\n  }\n"]);return Z=function(){return n},n}var J=s.c.div(Z(),f.black),K=s.c.h1(X()),R=s.c.div(_(),f.lightPink),q=function(n){var t=n.cartContents,e=n.removeFromCart;return Object(r.jsxs)(J,{children:[Object(r.jsx)(K,{children:"Cart"}),0===t.length?Object(r.jsx)(R,{children:"Cart is empty!"}):t.map((function(n){return Object(r.jsxs)(R,{children:[Object(r.jsx)("div",{children:n.name}),Object(r.jsx)("div",{children:(c=n.price,"$ ".concat((c/100).toFixed(2)))}),Object(r.jsx)("button",{type:"button",onClick:function(){return r=n.id,e(t.filter((function(n){return n.id!==r})));var r},children:"X"})]},n.id);var c})),Object(r.jsxs)("div",{children:["Total:",function(){var n=(t.map((function(n){return n.price})).reduce((function(n,t){return n+parseInt(t,10)}),0)/100).toFixed(2);return n?" $ ".concat(n):" N/A"}()]})]})};q.defaultProps={cartContents:[]};var H=q;function N(){var n=Object(u.a)(["\n  display: flex;\n  margin: 2rem;\n  justify-content: space-between;\n"]);return N=function(){return n},n}var V=s.c.div(N()),Y=function(){var n=Object(c.useState)([]),t=Object(p.a)(n,2),e=t[0],i=t[1];return Object(r.jsxs)(V,{children:[Object(r.jsx)(M,{cartContents:e,addToCart:i}),Object(r.jsx)(H,{cartContents:e,removeFromCart:i})]})},G=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(h,{}),Object(r.jsx)(Y,{})]})},Q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,51)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),Q()}},[[50,1,2]]]);
//# sourceMappingURL=main.eb6446a6.chunk.js.map