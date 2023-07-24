"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[497],{5497:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,o,i,a,s,c,u=t(2791),d=t(9434),l=t(5705),m=t(5218),f=t(8539),p=t(1219),h=t(6351),x=t(168),b=t(5706),g=(0,b.Z)(l.Field)(r||(r=(0,x.Z)(["\n    padding: 5px;\n    width: 200px;\n    border: 2px solid greenyellow;\n    border-radius: 5px;\n"]))),Z=b.Z.button(o||(o=(0,x.Z)(["\n    display: flex;\n    gap: 5px;\n    background-color: rgb(38 209 135);\n    color: #6d2b65;\n    border: 3px solid rgb(30 159 139);\n    border-radius: 20px;\n    padding: 5px 20px;\n    font-size: 18px;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    &:hover, &:focus {\n        background-color: rgb(30 159 139);\n        border: 3px solid rgb(38 209 135);\n        color: #fff;\n    }\n"]))),w=b.Z.label(i||(i=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-bottom: 10px;\n"]))),y=(b.Z.p(a||(a=(0,x.Z)(["\n    color: red;\n"]))),b.Z.div(s||(s=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n"])))),j=b.Z.div(c||(c=(0,x.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]))),v=t(3524),k=t(184),_=f.Ry().shape({name:f.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is invalid").required("Name is required"),number:f.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number is invalid").required("Phone number is required")}),C={name:"",number:""},A=function(){var n=(0,d.I0)(),e=(0,d.v9)(h.hF);(0,u.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(e))}),[e]);return(0,k.jsx)(l.Formik,{initialValues:C,validationSchema:_,onSubmit:function(t,r){var o=r.resetForm,i=e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})),a=e.find((function(n){return n.number===t.number}));i?m.ZP.error("A contact with this name already exists!"):a?m.ZP.error("A contact with this number already exists!"):(n((0,p.uK)(t)),o())},children:(0,k.jsx)(l.Form,{autoComplete:"off",children:(0,k.jsxs)(j,{children:[(0,k.jsxs)(y,{children:[(0,k.jsxs)(w,{children:["The name of the new contact",(0,k.jsx)(g,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(w,{children:["Phone number",(0,k.jsx)(g,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,k.jsxs)(Z,{type:"submit",children:[(0,k.jsx)(v.klH,{}),"Add contact"]})]})})})}},6351:function(n,e,t){t.d(e,{hF:function(){return s},mj:function(){return a},xU:function(){return o},zh:function(){return i}});var r=t(6916),o=function(n){return n.contacts.contacts.isLoading},i=function(n){return n.contacts.contacts.error},a=function(n){return n.contacts.filter},s=(0,r.P1)([function(n){return n.contacts.contacts.items},a],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=497.ffdaf8c2.chunk.js.map