(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),s=n(17),i=n.n(s),o=(n(61),n(21)),l=n(7),j=n(106),b=(n(62),n(13)),u=n(51),d=n.n(u),m=n(22),h=Object(m.b)({name:"visibility",initialState:{value:!1},reducers:{toggle:function(e){e.value=!e.value}}}),x=h.actions.toggle,v=function(e){return e.visibility.value},O=h.reducer,p=function(e){var t=Object(b.c)(v),n=r.a.createRef(),a=Object(l.f)(),s={cd:{description:"Navigating between pages.",usage:"cd home|cv",fn:function(){var e=Object.keys(arguments);if(1!==e.length)return"Invalid. Usage: cd home|cv";var t=arguments[e[0]];if("home"===t)a.push("/");else{if("cv"!==t)return"cd home|cv";a.push("/cv")}return"".concat(t," loading")}}};return Object(c.jsx)("div",{className:e.className,style:{height:"300px",display:t?"block":"none"},children:Object(c.jsx)(d.a,{ref:n,commands:s,welcomeMessage:"Welcome to white rabbit hole!",promptLabel:"maemresen@mywebsite:~$"})})},f=n(109),g=n(110),_=n(52),N=n(55),k=(n(99),function(e){var t=Object(b.c)(v),n=Object(b.b)();return Object(c.jsx)(f.a,{bg:"dark",variant:"dark",expand:"lg",className:"text-center",children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(f.a.Brand,{children:"Mehmet Arif Emre \u015een"}),Object(c.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(g.a,{className:"ml-auto",children:[Object(c.jsx)(o.b,{exact:!0,to:"/",activeClassName:"active",className:"nav-link",children:"Home"}),Object(c.jsx)(o.b,{to:"/cv",activeClassName:"active",className:"nav-link",children:"CV"}),Object(c.jsx)("div",{className:"d-inline-block text-secondary",onClick:function(){return n(x())},children:Object(c.jsx)(_.a,{icon:N.a,className:"ml-3 mt-1",size:"2x",style:{color:t?"green":"red"}})})]})})]})})}),w=n.p+"static/media/logo.db36153e.svg",y=n(26),C=Object(m.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),A=C.actions,B=A.increment,T=A.decrement,R=A.incrementByAmount,S=function(e){return e.counter.value},J=C.reducer,M=n(15),P=n.n(M);function D(){var e=Object(b.c)(S),t=Object(b.b)(),n=Object(a.useState)("2"),r=Object(y.a)(n,2),s=r[0],i=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:P.a.row,children:[Object(c.jsx)("button",{className:P.a.button,"aria-label":"Increment value",onClick:function(){return t(B())},children:"+"}),Object(c.jsx)("span",{className:P.a.value,children:e}),Object(c.jsx)("button",{className:P.a.button,"aria-label":"Decrement value",onClick:function(){return t(T())},children:"-"})]}),Object(c.jsxs)("div",{className:P.a.row,children:[Object(c.jsx)("input",{className:P.a.textbox,"aria-label":"Set increment amount",value:s,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{className:P.a.button,onClick:function(){return t(R(Number(s)||0))},children:"Add Amount"}),Object(c.jsx)("button",{className:P.a.asyncButton,onClick:function(){return t((e=Number(s)||0,function(t){setTimeout((function(){t(R(e))}),1e3)}));var e},children:"Add Async"})]})]})}var E=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:w,className:"App-logo",alt:"logo"}),Object(c.jsx)(D,{}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{children:"Learn "}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"}),Object(c.jsx)("span",{children:", "}),Object(c.jsx)("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),Object(c.jsx)("span",{children:", "}),Object(c.jsx)("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),",",Object(c.jsx)("span",{children:" and "}),Object(c.jsx)("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"React Redux"})]})]})})},F=n(107),I=n(108),L=function(){var e=Object(a.useState)(!1),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(c.Fragment,{children:[!n&&Object(c.jsx)(F.a,{md:"12",className:"text-center",children:Object(c.jsx)(I.a,{animation:"border",className:"text-center"})}),Object(c.jsxs)("iframe",{src:"https://maemresen.github.io/resume/cv_mehmet_arif_emre_sen.pdf",title:"title",frameBorder:n?"1":"0",onLoad:function(){return r(!0)},style:{width:"100%",height:"90vh"},children:["Presss me: ",Object(c.jsx)("a",{href:"https://maemresen.github.io/resume/cv_mehmet_arif_emre_sen.pdf",children:"Download PDF"})]})]})};n(103);var W=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)("header",{children:Object(c.jsx)(k,{})}),Object(c.jsx)("main",{className:"mt-4",children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(p,{className:"mb-3"}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(c.jsx)(l.a,{exact:!0,path:"/cv",component:L})]})]})})]})},U=Object(m.a)({reducer:{counter:J,visibility:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{store:U,children:Object(c.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},15:function(e,t,n){e.exports={row:"Counter_row__2k2JV",value:"Counter_value__3eew2",button:"Counter_button__1vsxJ",textbox:"Counter_textbox__ZPPax",asyncButton:"Counter_asyncButton__3dTYl Counter_button__1vsxJ"}},61:function(e,t,n){},99:function(e,t,n){e.exports={"nav-link":"TopMenu_nav-link__2msFT",active:"TopMenu_active__2sUT1"}}},[[104,1,2]]]);
//# sourceMappingURL=main.ced02c6d.chunk.js.map