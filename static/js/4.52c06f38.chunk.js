(this["webpackJsonpmy-react-app-1"]=this["webpackJsonpmy-react-app-1"]||[]).push([[4],{290:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1CSRj",dialogsItems:"Dialogs_dialogsItems__1Y9WI",messages:"Dialogs_messages__1oVvQ",textarea:"Dialogs_textarea__5PQRz",btn:"Dialogs_btn__2GLwX"}},291:function(e,a,t){e.exports={link:"DialogsItem_link__1NJJt",activeLink:"DialogsItem_activeLink__2w8wu"}},296:function(e,a,t){"use strict";t.r(a);var n=t(126),s=t(0),i=t.n(s),l=t(290),r=t.n(l),c=t(291),o=t.n(c),m=t(12),u=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",null,i.a.createElement(m.b,{activeClassName:o.a.activeLink,className:o.a.link,to:a},e.name))},d=function(e){return i.a.createElement("div",{className:r.a.message},e.message)},g=t(10),b=t(88),p=t(127),f=t(32),v=t(85),_=Object(v.a)(50),E=Object(p.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(b.a,{component:f.b,validate:[v.b,_],name:"newMessageText",placeholder:"Enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Submit")))})),h=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(u,{key:e.id,id:e.id,name:e.name})})),n=a.messages.map((function(e){return i.a.createElement(d,{key:e.id,id:e.id,message:e.message})}));return e.isAuth?i.a.createElement("div",null,i.a.createElement("div",{className:r.a.dialogs},i.a.createElement("div",{className:r.a.dialogsItems},t),i.a.createElement("div",{className:r.a.messages},i.a.createElement("div",null,n))),i.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageText)}})):i.a.createElement(g.a,{to:"/login"})},j=t(13),k=t(34),O=t(35),w=t(37),y=t(36),D=function(e){return{isAuth:e.auth.isAuth}},N=t(8);a.default=Object(N.d)(Object(j.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.a)(a))}}})),(function(e){var a=function(a){Object(w.a)(n,a);var t=Object(y.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(g.a,{to:"/login"})}}]),n}(i.a.Component);return Object(j.b)(D)(a)}))(h)}}]);
//# sourceMappingURL=4.52c06f38.chunk.js.map