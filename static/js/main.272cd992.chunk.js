(this["webpackJsonpmy-pokedex"]=this["webpackJsonpmy-pokedex"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(4),r=t.n(i),o=(t(9),t(10),t(3)),s=(t(11),t(0)),d=function(e){var n=e.pokemon;return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{width:"100",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.id,".png"),alt:""}),n.name]})},u=(t(13),[{id:1,name:"Bulbasaur"},{id:2,name:"Ivysaur"},{id:3,name:"Venusaur"},{id:4,name:"Charmander"},{id:5,name:"Charmeleon"},{id:6,name:"Charizard"},{id:7,name:"Squirtle"},{id:8,name:"Wartortle"},{id:9,name:"Blastoise"}]),l=function(){var e=Object(a.useState)(u),n=Object(o.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(),r=Object(o.a)(i,2),l=r[0];r[1];return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("input",{type:"search",value:l,placeholder:"Find a pokemon!",onChange:function(e){var n=t.filter((function(n){return n.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())}));c(n),console.log(n)}}),Object(s.jsx)("button",{onClick:function(){c(u)},children:"Remove Filter"}),Object(s.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(d,{pokemon:e})},e.id)}))})]})},m=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(l,{})})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.272cd992.chunk.js.map