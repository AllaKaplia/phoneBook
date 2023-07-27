"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[707],{3246:function(n,e,i){i.d(e,{Fq:function(){return f},NV:function(){return x},QF:function(){return h},_s:function(){return u},d3:function(){return m}});var t,r,a,o,s,d,l=i(168),c=i(3081),p=i(5705),x=c.Z.span(t||(t=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 8px;\n    margin-top: 8px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #27874f;\n"]))),u=(0,c.Z)(p.gN)(r||(r=(0,l.Z)(["\n    font: inherit;\n    background-color: #c4f8af;\n    border: none;\n    border-bottom: 2px solid #27874f;\n    outline: none;\n    padding: theme.spacing(1); \n    padding-top: 25px;\n    padding-right: 12px;\n    padding-bottom: 8px;\n    padding-left: 12px;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n"]))),m=c.Z.div(a||(a=(0,l.Z)(["\n    margin: 0 auto;\n    max-width: 600px;\n    margin-bottom: 40px;\n    flex-direction: column;\n    border: 2px solid #27874f;\n    border-radius: 10px;\n    padding: 10px;\n"]))),h=c.Z.h1(o||(o=(0,l.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    text-align: center;\n    font-weight: 700;\n    font-size: 40px;\n    color: #0b9448;\n    margin-bottom: 20px;\n    margin-top: 10px;\n"]))),f=((0,c.Z)(p.Bc)(s||(s=(0,l.Z)(["\n    color: red;\n    font-size: 14px;\n    margin-top: 5px;\n"]))),c.Z.div(d||(d=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 25px;\n"]))))},6300:function(n,e,i){i.d(e,{Do:function(){return u},a9:function(){return p},aV:function(){return f},qu:function(){return x},xv:function(){return h},zT:function(){return m}});var t,r,a,o,s,d,l=i(168),c=i(3081),p=c.Z.div(t||(t=(0,l.Z)(["\n    padding-left: 15px;\n    padding-right: 15px;\n\n    @media screen and (min-width: 480px) {\n        width: 396px;\n        margin: 0 auto;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 738px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        width: 1440px;\n    }\n"]))),x=c.Z.h1(r||(r=(0,l.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    text-align: center;\n    font-weight: 700;\n    font-size: 40px;\n    color: #0b9448;\n    margin-bottom: 20px;\n"]))),u=c.Z.div(a||(a=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 35px;\n"]))),m=c.Z.img(o||(o=(0,l.Z)(["\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);\n"]))),h=c.Z.span(s||(s=(0,l.Z)(["\n    font-size: 18px;\n    font-weight: 600;\n    color: #27874f;\n"]))),f=c.Z.ul(d||(d=(0,l.Z)(["\n    padding: 15px;\n    font-size: 18px;\n    color: #39aa39;\n"])))},8707:function(n,e,i){i.r(e),i.d(e,{default:function(){return v}});var t=i(3246),r=i(6300),a=i(5705),o=i(9434),s=i(5822),d=i(6727),l=i(6915),c=i(2151),p=i(4613),x=i(9481),u=i(5218),m=i(184),h={name:"",email:"",password:""},f=d.Ry().shape({name:d.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is invalid").required("Name is required"),email:d.Z_().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"E-mail is invalid").email().required("E-mail is required"),password:d.Z_().length(10,"Enter 10 symbols").required("Password is required")}),g=function(){var n=(0,o.I0)();return(0,m.jsx)(t.d3,{children:(0,m.jsx)(a.J9,{initialValues:h,validationSchema:f,onSubmit:function(e,i){var t=i.resetForm;n((0,s.z2)(e)),t(),u.ZP.success("You have successfully created a profile in the PhoneBook application!")},children:(0,m.jsx)(a.l0,{autoComplete:"off",children:(0,m.jsxs)(t.Fq,{children:[(0,m.jsxs)("label",{children:[(0,m.jsxs)(t.NV,{children:[" ",(0,m.jsx)(c.Z,{})," Username:"]}),(0,m.jsx)(t._s,{type:"text",name:"name",placeholder:"Enter username"}),(0,m.jsx)(a.Bc,{name:"name",component:"div"})]}),(0,m.jsxs)("label",{children:[(0,m.jsxs)(t.NV,{children:[" ",(0,m.jsx)(p.Z,{})," Your e-mail address:"]}),(0,m.jsx)(t._s,{type:"email",name:"email",placeholder:"Enter e-mail address"}),(0,m.jsx)(a.Bc,{name:"email",component:"div"})]}),(0,m.jsxs)("label",{children:[(0,m.jsxs)(t.NV,{children:[" ",(0,m.jsx)(x.Z,{})," Enter your password:"]}),(0,m.jsx)(t._s,{type:"password",name:"password",placeholder:"Enter password"}),(0,m.jsx)(a.Bc,{name:"password",component:"div"})]}),(0,m.jsx)(l.Z,{variant:"contained",color:"success",type:"submit",children:"Register"})]})})})})},v=function(){return(0,m.jsxs)(r.a9,{children:[(0,m.jsx)(t.QF,{children:"Register your profile"}),(0,m.jsx)(g,{})]})}},2151:function(n,e,i){var t=i(4836);e.Z=void 0;var r=t(i(5649)),a=i(184),o=(0,r.default)((0,a.jsx)("path",{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zm4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z"}),"GroupAdd");e.Z=o},4613:function(n,e,i){var t=i(4836);e.Z=void 0;var r=t(i(5649)),a=i(184),o=(0,r.default)((0,a.jsx)("path",{d:"M12 19c0-3.87 3.13-7 7-7 1.08 0 2.09.25 3 .68V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"}),"MarkEmailRead");e.Z=o},9481:function(n,e,i){var t=i(4836);e.Z=void 0;var r=t(i(5649)),a=i(184),o=(0,r.default)((0,a.jsx)("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password");e.Z=o}}]);
//# sourceMappingURL=707.55a62c4d.chunk.js.map