(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(12),c=s.n(a),r=(s(38),s(31)),o=s(23),u=(s(39),s(65)),j=s(69),i=s(67),b=s(66),m=s(68),l=s(63),h=s(64),d=(s(40),s(5));var O=function(e){var t=e.message,s=e.username===t.username;return Object(d.jsx)("div",{className:"message ".concat(s&&"message_user"),children:Object(d.jsx)(m.a,{className:s?"message_userCard":"message_guestCard",children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(h.a,{color:"white",variant:"h5",component:"h2",children:[t.username,": ",t.text]})})})})};var p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)([{username:"saurabh",text:"hey guys"},{username:"sam",text:"hii"},{username:"chauhan",text:"whatsapp!!"}]),m=Object(o.a)(c,2),l=m[0],h=m[1],p=Object(n.useState)(""),x=Object(o.a)(p,2),g=x[0],f=x[1];return Object(n.useEffect)((function(){f(prompt("please enter your name"))}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("img",{src:"https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"}),Object(d.jsx)("h1",{children:"Facebook Messenger"}),Object(d.jsxs)("h2",{children:["Hello ",g]}),Object(d.jsx)("form",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(i.a,{h:!0,children:"Enter Message.."}),Object(d.jsx)(b.a,{value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)(u.a,{type:"submit",disabled:!s,variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),h([].concat(Object(r.a)(l),[{username:g,text:s}])),a("")},children:"Send messages"})]})}),l.map((function(e){return Object(d.jsx)(O,{message:e,username:g})}))]})};c.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.805a91cb.chunk.js.map