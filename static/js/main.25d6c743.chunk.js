(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);n(8);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=n(5),o=n(3),u=n(0),l=function(e){var t=e.value,n=e.handleClickProp;return Object(u.jsx)("button",{type:"button",className:"square",onClick:n,children:t})};l.defaultProps={value:null};var j=l,b=function(e){var t=e.squares,n=e.handleClickProp,c=function(e){return Object(u.jsx)(j,{value:t[e],handleClickProp:function(){return n(e)}})};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"board-row",children:[c(0),c(1),c(2)]}),Object(u.jsxs)("div",{className:"board-row",children:[c(3),c(4),c(5)]}),Object(u.jsxs)("div",{className:"board-row",children:[c(6),c(7),c(8)]})]})},d=function(){var e,t=Object(c.useState)([{squares:Object(i.a)(Array(9).fill(null))}]),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!0),l=Object(o.a)(s,2),j=l[0],d=l[1],O=Object(c.useState)(0),h=Object(o.a)(O,2),f=h[0],v=h[1],x=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var c=Object(o.a)(t[n],3),r=c[0],a=c[1],s=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[s])return e[r]}return null},m=r.map((function(e,t){var n=t?"Go to move #".concat(t):"Go to game start";return Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",onClick:function(){return function(e){v(e),d(e%2===0)}(t)},children:n})},e.squares.join(""))})),p=r[f],g=x(p.squares);return e=g?"Winner: ".concat(g):"Next player: ".concat(j?"X":"O"),Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("div",{className:"game-board",children:Object(u.jsx)(b,{squares:p.squares,handleClickProp:function(e){return function(e){var t=r.slice(0,f+1),n=t[t.length-1],c=Object(i.a)(n.squares);x(c)||c[e]||(c[e]=j?"X":"O",a((function(e){return[].concat(Object(i.a)(e),[{squares:c}])})),d((function(e){return!e})),v(t.length))}(e)}})}),Object(u.jsxs)("div",{className:"game-info",children:[Object(u.jsx)("div",{children:e}),Object(u.jsx)("ol",{children:m})]})]})},O=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))});s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.25d6c743.chunk.js.map