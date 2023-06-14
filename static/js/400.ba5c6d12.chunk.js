"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[400],{7400:function(e,l,i){i.r(l);var a=i(9434),n=i(9273),r=i(4087),s=i(1148),o=i(4224),t=i(184);l.default=function(){var e=(0,a.I0)();return(0,t.jsxs)(r.xu,{as:"form",border:"1px",m:10,p:10,onSubmit:function(l){l.preventDefault();var i=l.currentTarget;e((0,n.Ib)({email:i.elements.email.value,password:i.elements.password.value})),i.reset()},autoComplete:"off",borderColor:"black",width:"50%",children:[(0,t.jsxs)(r.xu,{as:"label",display:"block",mt:5,fontSize:20,children:["Email",(0,t.jsx)(s.I,{type:"email",name:"email",bg:"white"})]}),(0,t.jsxs)(r.xu,{as:"label",display:"block",mt:5,fontSize:20,children:["Password",(0,t.jsx)(s.I,{type:"password",name:"password",bg:"white"})]}),(0,t.jsx)(o.z,{display:"block",type:"submit",as:"button",mt:5,bg:"black",p:2,color:"white",borderRadius:5,mr:"auto",ml:"auto",children:"Log in"})]})}},1148:function(e,l,i){i.d(l,{I:function(){return j}});var a=i(1413),n=i(4925),r=i(9439),s=i(9886),o=i(4591),t=i(7872),d=i(9219),u=i(2996),c=i(2503),v=i(6992),p=i(2791),m=i(184),b=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],f=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,r.Z)(f,2),Z=x[0],g=x[1],y=(0,s.k)({strict:!1,name:"FormControlContext"}),k=(0,r.Z)(y,2),I=k[0],R=k[1];var F=(0,t.G)((function(e,l){var i=(0,d.jC)("Form",e),s=function(e){var l=e.id,i=e.isRequired,s=e.isInvalid,t=e.isDisabled,d=e.isReadOnly,u=(0,n.Z)(e,b),c=(0,p.useId)(),m=l||"field-".concat(c),h="".concat(m,"-label"),f="".concat(m,"-feedback"),x="".concat(m,"-helptext"),Z=(0,p.useState)(!1),g=(0,r.Z)(Z,2),y=g[0],k=g[1],I=(0,p.useState)(!1),R=(0,r.Z)(I,2),F=R[0],C=R[1],q=(0,p.useState)(!1),P=(0,r.Z)(q,2),_=P[0],j=P[1],w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,o.lq)(l,(function(e){e&&C(!0)}))})}),[x]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:l,"data-focus":(0,v.PB)(_),"data-disabled":(0,v.PB)(t),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,t,_,s,d,h]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:f},e),{},{ref:(0,o.lq)(l,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[f]),S=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:l,role:"group"})}),[u]),D=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:l,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!t,isFocused:!!_,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},hasFeedbackText:y,setHasFeedbackText:k,hasHelpText:F,setHasHelpText:C,id:m,labelId:h,feedbackId:f,helpTextId:x,htmlProps:u,getHelpTextProps:w,getErrorMessageProps:O,getRootProps:S,getLabelProps:T,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),t=s.getRootProps,f=(s.htmlProps,(0,n.Z)(s,h)),x=(0,v.cx)("chakra-form-control",e.className);return(0,m.jsx)(I,{value:f,children:(0,m.jsx)(Z,{value:i,children:(0,m.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},t({},l)),{},{className:x,__css:i.container}))})})}));F.displayName="FormControl",(0,t.G)((function(e,l){var i=R(),n=g(),r=(0,v.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getHelpTextProps(e,l)),{},{__css:n.helperText,className:r}))})).displayName="FormHelperText";var C=["isDisabled","isInvalid","isReadOnly","isRequired"],q=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function P(e){var l=function(e){var l,i,r,s=R(),o=e.id,t=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,p=e.isInvalid,m=e.isReadOnly,b=e.isDisabled,h=e.onFocus,f=e.onBlur,x=(0,n.Z)(e,q),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&Z.push(s.feedbackId);(null==s?void 0:s.hasHelpText)&&Z.push(s.helpTextId);return(0,a.Z)((0,a.Z)({},x),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=o?o:null==s?void 0:s.id,isDisabled:null!=(l=null!=t?t:b)?l:null==s?void 0:s.isDisabled,isReadOnly:null!=(i=null!=d?d:m)?i:null==s?void 0:s.isReadOnly,isRequired:null!=(r=null!=u?u:c)?r:null==s?void 0:s.isRequired,isInvalid:null!=p?p:null==s?void 0:s.isInvalid,onFocus:(0,v.v0)(null==s?void 0:s.onFocus,h),onBlur:(0,v.v0)(null==s?void 0:s.onBlur,f)})}(e),i=l.isDisabled,r=l.isInvalid,s=l.isReadOnly,o=l.isRequired,t=(0,n.Z)(l,C);return(0,a.Z)((0,a.Z)({},t),{},{disabled:i,readOnly:s,required:o,"aria-invalid":(0,v.Qm)(r),"aria-required":(0,v.Qm)(o),"aria-readonly":(0,v.Qm)(s)})}var _=["htmlSize"],j=(0,t.G)((function(e,l){var i=e.htmlSize,r=(0,n.Z)(e,_),s=(0,d.jC)("Input",r),o=P((0,u.Lr)(r)),t=(0,v.cx)("chakra-input",e.className);return(0,m.jsx)(c.m.input,(0,a.Z)((0,a.Z)({size:i},o),{},{__css:s.field,ref:l,className:t}))}));j.displayName="Input",j.id="Input"}}]);
//# sourceMappingURL=400.ba5c6d12.chunk.js.map