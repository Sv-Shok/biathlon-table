(this.webpackJsonpbiatlon=this.webpackJsonpbiatlon||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),r=n.n(i),s=(n(12),n(2)),j=n(6),l=(n(13),n(0)),b=function(e){var t=e.player,n=t.winPlace,c=t.name,a=t.hit,i=t.rateOfFire;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.idx+1}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:a}),Object(l.jsxs)("td",{children:[i," sec"]})]})})},o=function(){var e=[{winPlace:3,name:"Sveta",hit:5,rateOfFire:20},{winPlace:5,name:"Vasa",hit:3,rateOfFire:11},{winPlace:6,name:"Petia",hit:2,rateOfFire:12},{winPlace:2,name:"Katia",hit:4,rateOfFire:6},{winPlace:4,name:"Ania",hit:4,rateOfFire:15},{winPlace:1,name:"Roman",hit:5,rateOfFire:10}],t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),O=o[0],h=o[1];Object(c.useEffect)((function(){i(e.sort((function(e,t){return e.winPlace-t.winPlace})))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{className:"label",children:["Search by name:",Object(l.jsx)("input",{type:"text",name:"name",onChange:function(t){!function(t){var n=JSON.parse(JSON.stringify(e)).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));i(Object(s.a)(n))}(t.target.value)}})]}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"\u2116"}),Object(l.jsx)("th",{children:"WinPlace"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Hit"}),Object(l.jsx)("th",{children:"RateOfFire"})]})}),Object(l.jsx)("tbody",{children:a.length?a.map((function(e,t){return Object(l.jsx)(b,{player:e,idx:t},e.winPlace)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:"Loading..."})})})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{className:"label",children:["Sort:",Object(l.jsxs)("select",{value:O,onChange:function(e){var t=e.target.value;h(t),function(e){switch(e){case"win":i(Object(s.a)(a.sort((function(e,t){return e.winPlace-t.winPlace}))));break;case"name":i(Object(s.a)(a.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}))));break;case"hit":i(Object(s.a)(a.sort((function(e,t){return t.hit-e.hit}))));break;case"rateOfFire":i(Object(s.a)(a.sort((function(e,t){return e.rateOfFire-t.rateOfFire}))));break;default:i(Object(s.a)(a))}}(t)},className:"select",children:[Object(l.jsx)("option",{value:"win",children:"sortByWin"}),Object(l.jsx)("option",{value:"name",children:"sortByName"}),Object(l.jsx)("option",{value:"hit",children:"sortByHit"}),Object(l.jsx)("option",{value:"rateOfFire",children:"sortByRateOfFire"})]})]})})]})},O=(n(15),function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Biathlon table"}),Object(l.jsx)(o,{})]})});r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a42766d.chunk.js.map