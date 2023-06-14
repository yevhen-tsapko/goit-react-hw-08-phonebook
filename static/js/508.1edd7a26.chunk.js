"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[508],{2508:function(e,n,a){a.r(n),a.d(n,{default:function(){return M}});var i=a(9434),r=a(3634),t=function(e){return e.contacts},l=function(e){var n=e.contacts.items,a=e.filter;return a?function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(n,a):n},s=a(4087),o=a(1148),d=a(1413),u=a(4363),c=a(7872),m=a(2791),v=a(184);function h(e){var n=e.viewBox,a=void 0===n?"0 0 24 24":n,i=e.d,r=e.displayName,t=e.defaultProps,l=void 0===t?{}:t,s=m.Children.toArray(e.path),o=(0,c.G)((function(e,n){return(0,v.jsx)(u.J,(0,d.Z)((0,d.Z)((0,d.Z)({ref:n,viewBox:a},l),e),{},{children:s.length?s:(0,v.jsx)("path",{fill:"currentColor",d:i})}))}));return o.displayName=r,o}var f=h({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"}),p=a(4925),x=a(4224),b=["icon","children","isRound","aria-label"],y=(0,c.G)((function(e,n){var a=e.icon,i=e.children,r=e.isRound,t=e["aria-label"],l=(0,p.Z)(e,b),s=a||i,o=(0,m.isValidElement)(s)?(0,m.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return(0,v.jsx)(x.z,(0,d.Z)((0,d.Z)({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":t},l),{},{children:o}))}));y.displayName="IconButton";var Z=function(){var e=(0,i.I0)(),n=(0,i.v9)(t).items;return(0,v.jsxs)(s.xu,{as:"form",onSubmit:function(a){a.preventDefault();var i=a.currentTarget.elements;!function(e,n){return n.some((function(n){return n.name===e}))}(i.name.value,n)?(e((0,r.uK)({name:i.name.value,number:i.number.value})),e((0,r.yF)())):alert("".concat(i.name.value," is alredy in contacts")),a.currentTarget.reset()},maxW:"50%",children:[(0,v.jsxs)(s.xu,{as:"label",display:"block",fontSize:20,children:["Name",(0,v.jsx)(o.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,bg:"white"})]}),(0,v.jsxs)(s.xu,{as:"label",display:"block",fontSize:20,mt:2,children:["Number",(0,v.jsx)(o.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,bg:"white"})]}),(0,v.jsx)(y,{type:"submit",icon:(0,v.jsx)(f,{}),mt:4,color:"black",colorScheme:"blue"})]})},g=a(4808),j=a(9219),I=a(2996),k=a(2503),C=a(6992),N=["className"],R=(0,c.G)((function(e,n){var a=(0,j.mq)("Heading",e),i=(0,I.Lr)(e),r=(i.className,(0,p.Z)(i,N));return(0,v.jsx)(k.m.h2,(0,d.Z)((0,d.Z)({ref:n,className:(0,C.cx)("chakra-heading",e.className)},r),{},{__css:a}))}));R.displayName="Heading";var _=function(){var e=(0,i.I0)();return(0,v.jsxs)(s.xu,{as:"label",display:"block",fontSize:20,maxW:"50%",children:[(0,v.jsx)(R,{size:"md",mb:3,children:"Find contacts by name"}),(0,v.jsx)(o.I,{type:"text",onChange:function(n){var a=n.target.value.trim().toLowerCase();e((0,g.Tv)(a))},bg:"white"})]})},F=h({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),L=a(4942),S=a(9439),T=a(9886);var P=["children","styleType","stylePosition","spacing"],q=["as"],z=["as"],w=(0,T.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),A=(0,S.Z)(w,2),B=A[0],H=A[1],O=(0,c.G)((function(e,n){var a=(0,j.jC)("List",e),i=(0,I.Lr)(e),r=i.children,t=i.styleType,l=void 0===t?"none":t,s=i.stylePosition,o=i.spacing,u=(0,p.Z)(i,P),c=function(e){return m.Children.toArray(e).filter((function(e){return(0,m.isValidElement)(e)}))}(r),h=o?(0,L.Z)({},"& > *:not(style) ~ *:not(style)",{mt:o}):{};return(0,v.jsx)(B,{value:a,children:(0,v.jsx)(k.m.ul,(0,d.Z)((0,d.Z)({ref:n,listStyleType:l,listStylePosition:s,role:"list",__css:(0,d.Z)((0,d.Z)({},a.container),h)},u),{},{children:c}))})}));O.displayName="List",(0,c.G)((function(e,n){e.as;var a=(0,p.Z)(e,q);return(0,v.jsx)(O,(0,d.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},a))})).displayName="OrderedList",(0,c.G)((function(e,n){e.as;var a=(0,p.Z)(e,z);return(0,v.jsx)(O,(0,d.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},a))})).displayName="UnorderedList";var G=(0,c.G)((function(e,n){var a=H();return(0,v.jsx)(k.m.li,(0,d.Z)((0,d.Z)({ref:n},e),{},{__css:a.item}))}));G.displayName="ListItem",(0,c.G)((function(e,n){var a=H();return(0,v.jsx)(u.J,(0,d.Z)((0,d.Z)({ref:n,role:"presentation"},e),{},{__css:a.icon}))})).displayName="ListIcon";var D=function(){var e=(0,i.I0)();(0,m.useEffect)((function(){e((0,r.yF)())}),[e]);var n=(0,i.v9)(t),a=n.isLoading,s=n.error,o=(0,i.v9)(l);return(0,v.jsxs)("div",{children:[a&&(0,v.jsx)("b",{children:"Loading tasks..."}),s&&(0,v.jsx)("b",{children:s}),o.length>0&&(0,v.jsx)(O,{children:o.map((function(n){var a=n.name,i=n.number,t=n.id;return(0,v.jsxs)(G,{fontSize:"26px",children:[a,": ",i,(0,v.jsx)(y,{colorScheme:"blue",size:"sm",ml:3,"aria-label":"Delete contact",borderRadius:"50%",icon:(0,v.jsx)(F,{boxSize:"10px",color:"black"}),type:"button","data-id":t,onClick:function(n){e((0,r.GK)(n.currentTarget.dataset.id))}})]},t)}))})]})},M=function(){return(0,v.jsxs)("div",{children:[(0,v.jsx)(R,{size:"lg",textAlign:"center",children:"Adding contact"}),(0,v.jsx)(Z,{}),(0,v.jsx)(R,{size:"lg",textAlign:"center",textTransform:"uppercase",children:"Contacts"}),(0,v.jsx)(_,{}),(0,v.jsx)(D,{})]})}},1148:function(e,n,a){a.d(n,{I:function(){return L}});var i=a(1413),r=a(4925),t=a(9439),l=a(9886),s=a(4591),o=a(7872),d=a(9219),u=a(2996),c=a(2503),m=a(6992),v=a(2791),h=a(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],x=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,t.Z)(x,2),y=b[0],Z=b[1],g=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,t.Z)(g,2),I=j[0],k=j[1];var C=(0,o.G)((function(e,n){var a=(0,d.jC)("Form",e),l=function(e){var n=e.id,a=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,f),c=(0,v.useId)(),h=n||"field-".concat(c),p="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),y=(0,v.useState)(!1),Z=(0,t.Z)(y,2),g=Z[0],j=Z[1],I=(0,v.useState)(!1),k=(0,t.Z)(I,2),C=k[0],N=k[1],R=(0,v.useState)(!1),_=(0,t.Z)(R,2),F=_[0],L=_[1],S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&N(!0)}))})}),[b]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,F,l,d,p]),P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[x]),q=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),z=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!F,onFocus:function(){return L(!0)},onBlur:function(){return L(!1)},hasFeedbackText:g,setHasFeedbackText:j,hasHelpText:C,setHasHelpText:N,id:h,labelId:p,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:S,getErrorMessageProps:P,getRootProps:q,getLabelProps:T,getRequiredIndicatorProps:z}}((0,u.Lr)(e)),o=l.getRootProps,x=(l.htmlProps,(0,r.Z)(l,p)),b=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(I,{value:x,children:(0,h.jsx)(y,{value:a,children:(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:a.container}))})})}));C.displayName="FormControl",(0,o.G)((function(e,n){var a=k(),r=Z(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:r.helperText,className:t}))})).displayName="FormHelperText";var N=["isDisabled","isInvalid","isReadOnly","isRequired"],R=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function _(e){var n=function(e){var n,a,t,l=k(),s=e.id,o=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,v=e.isInvalid,h=e.isReadOnly,f=e.isDisabled,p=e.onFocus,x=e.onBlur,b=(0,r.Z)(e,R),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&y.push(l.feedbackId);(null==l?void 0:l.hasHelpText)&&y.push(l.helpTextId);return(0,i.Z)((0,i.Z)({},b),{},{"aria-describedby":y.join(" ")||void 0,id:null!=s?s:null==l?void 0:l.id,isDisabled:null!=(n=null!=o?o:f)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(a=null!=d?d:h)?a:null==l?void 0:l.isReadOnly,isRequired:null!=(t=null!=u?u:c)?t:null==l?void 0:l.isRequired,isInvalid:null!=v?v:null==l?void 0:l.isInvalid,onFocus:(0,m.v0)(null==l?void 0:l.onFocus,p),onBlur:(0,m.v0)(null==l?void 0:l.onBlur,x)})}(e),a=n.isDisabled,t=n.isInvalid,l=n.isReadOnly,s=n.isRequired,o=(0,r.Z)(n,N);return(0,i.Z)((0,i.Z)({},o),{},{disabled:a,readOnly:l,required:s,"aria-invalid":(0,m.Qm)(t),"aria-required":(0,m.Qm)(s),"aria-readonly":(0,m.Qm)(l)})}var F=["htmlSize"],L=(0,o.G)((function(e,n){var a=e.htmlSize,t=(0,r.Z)(e,F),l=(0,d.jC)("Input",t),s=_((0,u.Lr)(t)),o=(0,m.cx)("chakra-input",e.className);return(0,h.jsx)(c.m.input,(0,i.Z)((0,i.Z)({size:a},s),{},{__css:l.field,ref:n,className:o}))}));L.displayName="Input",L.id="Input"}}]);
//# sourceMappingURL=508.1edd7a26.chunk.js.map