(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(18),a=n.n(s),i=(n(70),n(26),n(12)),o=n(11),l=n(7),j=n(36),d=n.n(j),u=n(111),b=function(e,t){var n="myChat."+e,c=Object(r.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),s=Object(l.a)(c,2),a=s[0],i=s[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[a,n]),[a,i]},O=Object(r.createContext)(),x=function(){return Object(r.useContext)(O)},f=function(e){var t=e.children,n=b("id"),r=Object(l.a)(n,2),s={id:r[0],setId:r[1],createId:function(){return Object(u.a)()}};return Object(c.jsx)(O.Provider,{value:s,children:t})},h=Object(r.createContext)(),v=function(){return Object(r.useContext)(h)},m=function(e){var t=e.children,n=b("contacts",[]),r=Object(l.a)(n,2),s=r[0],a=r[1],i={contacts:s,createContact:function(e,t){a((function(n){return[].concat(Object(o.a)(n),[{id:e,name:t}])}))}};return Object(c.jsx)(h.Provider,{value:i,children:t})},p=Object(r.createContext)(),g=function(){return Object(r.useContext)(p)},C=function(e){var t=e.children,n=b("conversations",[]),s=Object(l.a)(n,2),a=s[0],j=s[1],d=Object(r.useState)(0),u=Object(l.a)(d,2),O=u[0],f=u[1],h=v().contacts,m=N().socket,g=x().id,C=a.map((function(e){var t=e.recipients,n=e.messages,c=t.map((function(e){var t=h.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),r=n.map((function(e){var t=h.find((function(t){return t.id===e.sender})),n=t&&t.name||e.sender,c=g===e.sender;return Object(i.a)(Object(i.a)({},e),{},{senderName:n,fromMe:c})}));return Object(i.a)(Object(i.a)({},a),{},{recipients:c,messages:r})})),y=Object(r.useCallback)((function(e){var t=e.recipients,n=e.sender,c=e.text;console.log("message received"),j((function(e){var r=!0,s={sender:n,text:c},a=e.map((function(e){return console.log(e.recipient,t),n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(r=!1,Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[s])})):e;var n,c}));return r?[].concat(Object(o.a)(e),[{recipients:t,messages:[s]}]):a}))}),[j]);Object(r.useEffect)((function(){if(m)return m.on("receive-message",y),function(){return m.off("receive-message")}}),[m,y]);var I={conversations:a,createConversation:function(e){j((function(t){return[].concat(Object(o.a)(t),[{recipients:e,messages:[]}])}))},formattedConversations:C,selectedConversationId:O,selectedConversation:C[O],setSelectedConversationId:f,sendMessage:function(e,t){m.emit("send-message",{recipients:e,text:t}),y({recipients:e,sender:g,text:t})},addMessageToConversation:y};return Object(c.jsx)(p.Provider,{value:I,children:t})},y=Object(r.createContext)(),N=function(){return Object(r.useContext)(y)},I=function(e){var t=e.children,n=x().id,s=Object(r.useState)(),a=Object(l.a)(s,2),i=a[0],o=a[1];Object(r.useEffect)((function(){var e=d()(window.location,{query:{id:n}});return o(e),function(){return e.close()}}),[n]);var j={socket:i};return Object(c.jsx)(y.Provider,{value:j,children:t})},S=n(113),k=n(112),w=n(114),z=n(106),B=n(109),M=n(110);function D(e){var t=e.closeModal,n=Object(r.useState)([]),s=Object(l.a)(n,2),a=s[0],i=s[1],j=v().contacts,d=g().createConversation,u=function(e){i((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):[].concat(Object(o.a)(t),[e])}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B.a.Header,{closeButton:!0,children:"Cseveg\xe9s l\xe9trehoz\xe1sa"}),Object(c.jsx)(B.a.Body,{children:Object(c.jsxs)(M.a,{onSubmit:function(e){e.preventDefault(),d(a),t()},children:[j.map((function(e){return Object(c.jsx)(M.a.Group,{controlId:e.id,children:Object(c.jsx)(M.a.Check,{type:"checkbox",value:a.includes(e.id),label:e.name,onChange:u.bind(null,e.id)})},e.id)})),Object(c.jsx)(z.a,{type:"submit",children:"L\xe9trehoz\xe1s"})]})})]})}var K=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=g(),i=a.formattedConversations,o=a.selectedConversationId,j=a.setSelectedConversationId,d=function(){s(!1)};return Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100",children:[Object(c.jsx)("div",{children:Object(c.jsx)(w.a,{variant:"flush",children:i.map((function(e,t){return Object(c.jsx)(w.a.Item,{active:t===o,action:!0,onClick:j.bind(null,t),children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})}),Object(c.jsx)(z.a,{className:"rounded-0",onClick:function(){s(!0)},children:"Cseveg\xe9s l\xe9trehoz\xe1sa"}),Object(c.jsx)(B.a,{show:n,onHide:d,children:Object(c.jsx)(D,{closeModal:d})})]})};function L(e){var t=e.closeModal,n=Object(r.useRef)(),s=Object(r.useRef)(),a=v().createContact;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B.a.Header,{closeButton:!0,children:"Bar\xe1t hozz\xe1ad\xe1sa"}),Object(c.jsx)(B.a.Body,{children:Object(c.jsxs)(M.a,{onSubmit:function(e){e.preventDefault(),a(n.current.value,s.current.value),t()},children:[Object(c.jsxs)(M.a.Group,{children:[Object(c.jsx)(M.a.Label,{children:"ID"}),Object(c.jsx)(M.a.Control,{type:"text",ref:n,required:!0})]}),Object(c.jsxs)(M.a.Group,{children:[Object(c.jsx)(M.a.Label,{children:"N\xe9v"}),Object(c.jsx)(M.a.Control,{type:"text",ref:s,required:!0})]}),Object(c.jsx)(z.a,{type:"submit",children:"Hozz\xe1ad"})]})})]})}var P=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=v().contacts,i=function(){s(!1)};return Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100",children:[Object(c.jsx)("div",{children:Object(c.jsx)(w.a,{variant:"flush",children:a.map((function(e){return Object(c.jsx)(w.a.Item,{children:e.name},e.id)}))})}),Object(c.jsx)(z.a,{className:"rounded-0",onClick:function(){s(!0)},children:"Bar\xe1t hozz\xe1ad\xe1sa"}),Object(c.jsx)(B.a,{show:n,onHide:i,children:Object(c.jsx)(L,{closeModal:i})})]})},q="conversations",G="friends",H=function(){var e=Object(r.useState)(q),t=Object(l.a)(e,2),n=t[0],s=t[1],a=x().id;return Object(c.jsx)("div",{style:{width:"250px"},className:"d-flex flex-column",children:Object(c.jsxs)(S.a.Container,{activeKey:n,onSelect:s,children:[Object(c.jsxs)(k.a,{variant:"tabs",className:"justify-content-center",children:[Object(c.jsx)(k.a.Item,{children:Object(c.jsx)(k.a.Link,{eventKey:q,children:"Besz\xe9lget\xe9sek"})}),Object(c.jsx)(k.a.Item,{children:Object(c.jsx)(k.a.Link,{eventKey:G,children:"Bar\xe1tok"})})]}),Object(c.jsxs)(S.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(c.jsx)(S.a.Pane,{eventKey:q,className:"h-100",children:Object(c.jsx)(K,{})}),Object(c.jsx)(S.a.Pane,{eventKey:G,className:"h-100",children:Object(c.jsx)(P,{})})]}),Object(c.jsxs)("div",{className:"p-2 border-top border-right small",children:["ID: ",Object(c.jsx)("span",{className:"text-muted",children:a})]})]})})},E=n(107),J=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=g(),i=a.sendMessage,o=a.selectedConversation,j=o.recipients,d=o.messages,u=Object(r.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]);return Object(c.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(c.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:d.map((function(e,t){var n=e.text,r=e.senderName,s=e.fromMe,a=d.length-1===t;return Object(c.jsxs)("div",{ref:a?u:null,className:"my-1 d-flex flex-column\n                                    ".concat(s?"align-self-end align-items-end":"align-items-start"),children:[Object(c.jsx)("div",{className:"rounded px-2 py-1 ".concat(s?"bg-primary text-white":"border"),children:n}),Object(c.jsx)("div",{className:"text-muted small ".concat(s?"text-right":""),children:s?"Te":r})]},t)}))})}),Object(c.jsx)(M.a,{onSubmit:function(e){e.preventDefault();var t=j.map((function(e){return e.id}));i(t,n),s("")},children:Object(c.jsx)(M.a.Group,{className:"m-2",children:Object(c.jsxs)(E.a,{children:[Object(c.jsx)(M.a.Control,{type:"textarea",required:!0,value:n,onChange:function(e){s(e.target.value)},style:{height:"75px",resize:"none"}}),Object(c.jsx)(E.a.Append,{children:Object(c.jsx)(z.a,{type:"submit",children:"K\xfcld\xe9s"})})]})})})]})},R=function(e){var t=g().selectedConversation;return Object(c.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(c.jsx)(H,{}),t&&Object(c.jsx)(J,{})]})},F=n(108),T=function(){var e=Object(r.useRef)(),t=x(),n=t.setId,s=t.createId,a=function(t){t.preventDefault(),n(e.current.value)};return Object(c.jsx)(F.a,{className:"d-flex align-items-center",style:{height:"100vh"},children:Object(c.jsxs)(M.a,{className:"w-100",onSubmit:a,children:[Object(c.jsxs)(M.a.Group,{children:[Object(c.jsx)(M.a.Label,{children:"ID"}),Object(c.jsx)(M.a.Control,{type:"text",ref:e,required:!0})]}),Object(c.jsx)(z.a,{type:"submit",className:"mr-2",onClick:a,children:"Bel\xe9p\xe9s"}),Object(c.jsx)(z.a,{variant:"secondary",onClick:function(){var e=s();n(e)},children:"Regisztr\xe1ci\xf3"})]})})};var A=function(){var e=x().id;return Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)(R,{}):Object(c.jsx)(T,{})})};a.a.render(Object(c.jsx)(f,{children:Object(c.jsx)(I,{children:Object(c.jsx)(m,{children:Object(c.jsx)(C,{children:Object(c.jsx)(A,{})})})})}),document.getElementById("root"))},97:function(e,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.3aeb8d8c.chunk.js.map