(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);n(13);var c=n(1),r=n.n(c),a=n(11),s=n.n(a),i=n(7),u=n(3),l=n(25),o=n(22),j=n(23),b=n(24),d=n(0),f=function(e){var t=e.value,n=e.handleClickProp,c=e.highlight;return Object(d.jsx)("button",{type:"button",className:"square".concat(c?" bg-success":""),onClick:n,children:t})};f.defaultProps={value:null};var O=f,h=function(e){var t=e.squares,n=e.handleClickProp,c=e.winnerSquares;return Object(d.jsx)("div",{children:Object(i.a)(Array(3).keys()).map((function(e){return Object(d.jsx)("div",{children:Object(i.a)(Array(3).keys()).map((function(r){return function(e){return Object(d.jsx)(O,{value:t[e],highlight:c.includes(e),handleClickProp:function(){return n(e)}},e)}(3*e+r)}))},e)}))})},m=function(){var e,t=Object(c.useState)([{squares:Object(i.a)(Array(9).fill(null)),location:["Easter","Egg"]}]),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!0),f=Object(u.a)(s,2),O=f[0],m=f[1],x=Object(c.useState)(0),v=Object(u.a)(x,2),g=v[0],p=v[1],y=Object(c.useState)(!0),q=Object(u.a)(y,2),k=q[0],C=q[1],N=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var c=Object(u.a)(t[n],3),r=c[0],a=c[1],s=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[s])return[e[r],t[n]]}return null},S=r.map((function(e,t){var n=Object(u.a)(e.location,2),c=n[0],r=n[1],a=t?Object(d.jsxs)("span",{children:["Go to move #",t,Object(d.jsx)("br",{className:"d-md-none"}),"(Col: ",r,", Row: ",c,")"]}):"Go to game start";return Object(d.jsx)("div",{children:Object(d.jsx)(l.a,{className:"mb-1 ".concat(t===g?" fw-bold":""),onClick:function(){return function(e){p(e),m(e%2===0)}(t)},size:"sm",variant:"secondary",children:a})},e.squares.join(""))})),w=r[g],P=N(w.squares);return e=P?"Winner: ".concat(P[0]):w.squares.every((function(e){return e}))?"Draw":"Next player: ".concat(O?"X":"O"),Object(d.jsx)(o.a,{as:"main",className:"min-vh-100 d-flex flex-column justify-content-center pt-5",children:Object(d.jsxs)(j.a,{className:"mx-0 justify-content-center",rows:2,children:[Object(d.jsx)(b.a,{className:"d-flex justify-content-end align-items-center",children:Object(d.jsx)(h,{squares:w.squares,winnerSquares:P?P[1]:[],handleClickProp:function(e){return function(e){var t=r.slice(0,g+1),n=t[t.length-1],c=Object(i.a)(n.squares);if(!N(c)&&!c[e]){c[e]=O?"X":"O";var s=[Math.floor(e/3),e%3];a([].concat(Object(i.a)(t),[{squares:c,location:s}])),m((function(e){return!e})),p(t.length)}}(e)}})}),Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(l.a,{onClick:function(){return C((function(e){return!e}))},children:["Sort: ",k?"Ascending":"Descending"]}),Object(d.jsx)("p",{className:"lead my-2",children:e}),Object(d.jsx)("ul",{className:"mb-0 list-unstyled d-flex flex-column".concat(k?"":"-reverse"),children:S})]})]})})},x=(n(19),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))});s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.1845c963.chunk.js.map