(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t){},125:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(25),a=n.n(s),i=n(32),o=(n(86),n(10)),l=(n(36),n(18)),j=n(17),u=n(8),d=n(46),b=n.n(d),O=n(64),x=(n(115),O.a.initializeApp({apiKey:"AIzaSyAV9VmkIqYUsuNAJXTQmqQQbK4dAOOXEDs",authDomain:"cset-epp.firebaseapp.com",databaseURL:"https://cset-epp.firebaseio.com",projectId:"cset-epp",storageBucket:"cset-epp.appspot.com",messagingSenderId:"392120683765",appId:"1:392120683765:web:f645f869846af1612ac9bc",measurementId:"G-7CTJF9P1ND"}),O.a.auth()),h=Object(r.createContext)(),f=function(){return Object(r.useContext)(h)},m=function(e){var t=e.children,n=Object(r.useState)(),s=Object(u.a)(n,2),a=s[0],i=s[1];Object(r.useEffect)((function(){return x.onAuthStateChanged((function(e){e?i(e):i()}))}),[]);var o={signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},login:function(e,t){return x.signInWithEmailAndPassword(e,t)},currentUser:a,logout:function(){return x.signOut()}};return Object(c.jsx)(h.Provider,{value:o,children:t})},v=function(e,t){var n="myChat."+e,c=Object(r.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),s=Object(u.a)(c,2),a=s[0],i=s[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[a,n]),[a,i]},p=Object(r.createContext)(),g=function(){return Object(r.useContext)(p)},y=function(e){var t=e.children,n=v("contacts",[]),r=Object(u.a)(n,2),s=r[0],a=r[1],i={contacts:s,createContact:function(e,t){a((function(n){return[].concat(Object(j.a)(n),[{id:e,name:t}])}))}};return Object(c.jsx)(p.Provider,{value:i,children:t})},C=Object(r.createContext)(),N=function(){return Object(r.useContext)(C)},w=function(e){var t=e.children,n=v("conversations",[]),s=Object(u.a)(n,2),a=s[0],i=s[1],o=Object(r.useState)(0),d=Object(u.a)(o,2),b=d[0],O=d[1],x=g().contacts,h=k().socket,m=f().currentUser,p=(m=void 0===m?{}:m).email,y=void 0===p?"":p,N=a.map((function(e){var t=e.recipients,n=e.messages,c=t.map((function(e){var t=x.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),r=n.map((function(e){var t=x.find((function(t){return t.id===e.sender})),n=t&&t.name||e.sender,c=y===e.sender;return Object(l.a)(Object(l.a)({},e),{},{senderName:n,fromMe:c})}));return Object(l.a)(Object(l.a)({},a),{},{recipients:c,messages:r})})),w=Object(r.useCallback)((function(e){var t=e.recipients,n=e.sender,c=e.text;i((function(e){var r=!0,s={sender:n,text:c},a=e.map((function(e){return n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(r=!1,Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(j.a)(e.messages),[s])})):e;var n,c}));return r?[].concat(Object(j.a)(e),[{recipients:t,messages:[s]}]):a}))}),[i]);Object(r.useEffect)((function(){if(h)return h.on("receive-message",w),function(){return h.off("receive-message")}}),[h,w]);var S={conversations:a,createConversation:function(e){i((function(t){return[].concat(Object(j.a)(t),[{recipients:e,messages:[]}])}))},formattedConversations:N,selectedConversationId:b,selectedConversation:N[b],setSelectedConversationId:O,sendMessage:function(e,t){h.emit("send-message",{recipients:e,text:t}),w({recipients:e,sender:y,text:t})},addMessageToConversation:w};return Object(c.jsx)(C.Provider,{value:S,children:t})},S=window.location.origin,z=Object(r.createContext)(),k=function(){return Object(r.useContext)(z)},I=function(e){var t=e.children,n=f().currentUser,s=(n=void 0===n?{}:n).email,a=void 0===s?"":s,i=Object(r.useState)(),o=Object(u.a)(i,2),l=o[0],j=o[1];Object(r.useEffect)((function(){var e=b()(S.replace(/(http)(s)?:\/\//,"ws$2://"),{query:{id:a}});return j(e),function(){return e.close()}}),[a]);var d={socket:l};return Object(c.jsx)(z.Provider,{value:d,children:t})},B=n(133),q=n(134),E=n(135),L=n(127),A=n(131),G=n(132);function R(e){var t=e.closeModal,n=Object(r.useState)([]),s=Object(u.a)(n,2),a=s[0],i=s[1],o=g().contacts,l=N().createConversation,d=function(e){i((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):[].concat(Object(j.a)(t),[e])}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(A.a.Header,{closeButton:!0,children:"Cseveg\xe9s l\xe9trehoz\xe1sa"}),Object(c.jsx)(A.a.Body,{children:Object(c.jsxs)(G.a,{onSubmit:function(e){e.preventDefault(),l(a),t()},children:[o.length?o.map((function(e){return Object(c.jsx)(G.a.Group,{controlId:e.id,children:Object(c.jsx)(G.a.Check,{type:"checkbox",value:a.includes(e.id),label:e.name,onChange:d.bind(null,e.id)})},e.id)})):Object(c.jsx)("p",{children:"Nincs m\xe9g bar\xe1tod"}),!!o.length&&Object(c.jsx)(L.a,{type:"submit",children:"L\xe9trehoz\xe1s"})]})})]})}var J=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=N(),i=a.formattedConversations,o=a.selectedConversationId,l=a.setSelectedConversationId,j=function(){s(!1)};return Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100",children:[Object(c.jsx)("div",{children:Object(c.jsx)(E.a,{variant:"flush",children:i.map((function(e,t){return Object(c.jsx)(E.a.Item,{active:t===o,action:!0,onClick:l.bind(null,t),children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})}),Object(c.jsx)(L.a,{className:"rounded-0",onClick:function(){s(!0)},children:"Cseveg\xe9s l\xe9trehoz\xe1sa"}),Object(c.jsx)(A.a,{show:n,onHide:j,children:Object(c.jsx)(R,{closeModal:j})})]})};function K(e){var t=e.closeModal,n=Object(r.useRef)(),s=Object(r.useRef)(),a=g().createContact;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(A.a.Header,{closeButton:!0,children:"Bar\xe1t hozz\xe1ad\xe1sa"}),Object(c.jsx)(A.a.Body,{children:Object(c.jsxs)(G.a,{onSubmit:function(e){e.preventDefault(),a(n.current.value,s.current.value),t()},children:[Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"E-mail"}),Object(c.jsx)(G.a.Control,{type:"text",ref:n,required:!0})]}),Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"N\xe9v"}),Object(c.jsx)(G.a.Control,{type:"text",ref:s,required:!0})]}),Object(c.jsx)(L.a,{type:"submit",children:"Hozz\xe1ad"})]})})]})}var M=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=g().contacts,i=function(){s(!1)};return Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100",children:[Object(c.jsx)("div",{children:Object(c.jsx)(E.a,{variant:"flush",children:a.map((function(e){return Object(c.jsx)(E.a.Item,{children:e.name},e.id)}))})}),Object(c.jsx)(L.a,{className:"rounded-0",onClick:function(){s(!0)},children:"Bar\xe1t hozz\xe1ad\xe1sa"}),Object(c.jsx)(A.a,{show:n,onHide:i,children:Object(c.jsx)(K,{closeModal:i})})]})},P="conversations",D="friends",U=function(){var e=Object(r.useState)(P),t=Object(u.a)(e,2),n=t[0],s=t[1],a=f(),i=a.currentUser,o=(i=void 0===i?{}:i).email,l=void 0===o?"":o,j=a.logout;return Object(c.jsx)("div",{style:{width:"250px"},className:"d-flex flex-column",children:Object(c.jsxs)(B.a.Container,{activeKey:n,onSelect:s,children:[Object(c.jsxs)(q.a,{variant:"tabs",className:"justify-content-center",children:[Object(c.jsx)(q.a.Item,{children:Object(c.jsx)(q.a.Link,{eventKey:P,children:"Besz\xe9lget\xe9sek"})}),Object(c.jsx)(q.a.Item,{children:Object(c.jsx)(q.a.Link,{eventKey:D,children:"Bar\xe1tok"})})]}),Object(c.jsxs)(B.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(c.jsx)(B.a.Pane,{eventKey:P,className:"h-100",children:Object(c.jsx)(J,{})}),Object(c.jsx)(B.a.Pane,{eventKey:D,className:"h-100",children:Object(c.jsx)(M,{})})]}),Object(c.jsxs)("div",{className:"p-2 border-top border-right small",children:["Bejelentkezve: ",Object(c.jsx)("span",{className:"text-muted",children:l})]}),Object(c.jsx)("div",{className:"p-2 border-top border-right small",style:{cursor:"pointer"},onClick:function(){j()},children:"Kijelentkez\xe9s"})]})})},H=n(128),T=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=N(),i=a.sendMessage,o=a.selectedConversation,l=o.recipients,j=o.messages,d=Object(r.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]);return Object(c.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(c.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:j.map((function(e,t){var n=e.text,r=e.senderName,s=e.fromMe,a=j.length-1===t;return Object(c.jsxs)("div",{ref:a?d:null,className:"my-1 d-flex flex-column\n                                    ".concat(s?"align-self-end align-items-end":"align-items-start"),children:[Object(c.jsx)("div",{className:"rounded px-2 py-1 ".concat(s?"bg-primary text-white":"border"),children:n}),Object(c.jsx)("div",{className:"text-muted small ".concat(s?"text-right":""),children:s?"Te":r})]},t)}))})}),Object(c.jsx)(G.a,{onSubmit:function(e){e.preventDefault();var t=l.map((function(e){return e.id}));i(t,n),s("")},children:Object(c.jsx)(G.a.Group,{className:"m-2",children:Object(c.jsxs)(H.a,{children:[Object(c.jsx)(G.a.Control,{type:"textarea",required:!0,value:n,onChange:function(e){s(e.target.value)},style:{height:"75px",resize:"none"}}),Object(c.jsx)(H.a.Append,{children:Object(c.jsx)(L.a,{type:"submit",children:"K\xfcld\xe9s"})})]})})})]})},W=function(e){var t=N().selectedConversation;return Object(c.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(c.jsx)(U,{}),t&&Object(c.jsx)(T,{})]})},F=n(129),Q=n(136),V=n(130),X=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(r.useRef)(),o=Object(r.useRef)(),l=f().login,j=function(e){e.preventDefault(),l(a.current.value,o.current.value).catch((function(e){return s(e.message)}))};return Object(c.jsx)(F.a,{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:Object(c.jsx)(Q.a,{className:"w-100",style:{maxWidth:"400px"},children:Object(c.jsxs)(Q.a.Body,{children:[Object(c.jsxs)(G.a,{className:"w-100",onSubmit:j,children:[Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"E-mail"}),Object(c.jsx)(G.a.Control,{type:"text",ref:a,required:!0})]}),Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"Jelsz\xf3"}),Object(c.jsx)(G.a.Control,{type:"password",ref:o,required:!0})]}),n&&Object(c.jsx)(V.a,{variant:"danger",children:n}),Object(c.jsx)(L.a,{type:"submit",className:"mr-2",onClick:j,children:"Bel\xe9p\xe9s"})]}),Object(c.jsx)("div",{className:"w-100 text-center mt-2",children:Object(c.jsx)(i.b,{to:"/signup",children:"Regisztr\xe1ci\xf3"})})]})})})},Y=Object(o.f)((function(e){var t=e.history,n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],d=f().signup;return Object(c.jsx)(F.a,{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:Object(c.jsx)(Q.a,{className:"w-100",style:{maxWidth:"400px"},children:Object(c.jsx)(Q.a.Body,{children:Object(c.jsxs)(G.a,{className:"w-100",onSubmit:function(e){e.preventDefault(),s.current.value===a.current.value?d(n.current.value,s.current.value).then((function(){n.current.value="",s.current.value="",a.current.value="",t.push("/")})).catch((function(e){return j(e.message)})):j("A jelsz\xf3 nem egyezik.")},children:[Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"E-mail"}),Object(c.jsx)(G.a.Control,{type:"text",ref:n,required:!0})]}),Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"Jelsz\xf3"}),Object(c.jsx)(G.a.Control,{type:"password",ref:s,required:!0})]}),Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"Jelsz\xf3 m\xe9gegyszer"}),Object(c.jsx)(G.a.Control,{type:"password",ref:a,required:!0})]}),l&&Object(c.jsx)(V.a,{variant:"danger",children:l}),Object(c.jsx)(L.a,{type:"submit",className:"mr-2",children:"Regisztr\xe1ci\xf3"})]})})})})}));var $=function(){var e=f().currentUser;return Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/signup",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(o.a,{path:"/",children:e?Object(c.jsx)(W,{}):Object(c.jsx)(X,{})})]})};a.a.render(Object(c.jsx)(m,{children:Object(c.jsx)(I,{children:Object(c.jsx)(y,{children:Object(c.jsx)(w,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)($,{})})})})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.1d00a92b.chunk.js.map