(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(33),i=n.n(r),o=(n(84),n(4)),l=n(30),u=n(14),d=n(15),j=n(150),b=n(149),h=n(6),m=n(152),p=n(148),O=n(31),f=n.n(O),x=n(45),g=function(){var e=Object(x.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 3:if(!(a=e.sent).ok){e.next=13;break}if(201!==a.status){e.next=10;break}return console.log("Data created/updated"),e.abrupt("return",!0);case 10:if(204!==a.status){e.next=13;break}return console.log("Data found!"),e.abrupt("return",!0);case 13:if(409!==a.status){e.next=18;break}return console.log("Data could not be created/updated!"),e.abrupt("return",!1);case 18:if(401!==a.status){e.next=23;break}return console.log("Credentials do not exist."),e.abrupt("return",!1);case 23:403===a.status&&(console.log("User already logged in."),window.location.reload());case 24:throw new Error("Create request was invalid.");case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0.message);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Cache:"no-cache"},credentials:"include"});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:throw new Error("Fetch request was invalid");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(x.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"PUT",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 3:if(!(a=e.sent).ok){e.next=9;break}if(console.log("Connection worked, PUT worked"),204!==a.status){e.next=9;break}return console.log("Resource was updated."),e.abrupt("return",!0);case 9:throw new Error("Update request was invalid.");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(x.a)(f.a.mark((function e(t){var n,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:[],e.prev=1,e.next=4,fetch(t,{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!e.sent.ok){e.next=8;break}return console.log("Resource deleted"),e.abrupt("return",!0);case 8:throw new Error("Delete request was invalid.");case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.info,n=e.infoStyle,c=e.containerStyle;return Object(a.jsx)("div",{className:"product-detail ".concat(c||""),children:Object(a.jsx)("span",{className:n||"",children:t})})},N=function(e){var t=e.modalStyle,n=e.containerStyle,c=e.heading,s=e.handleChange,r=e.name,i=e.children,o=e.display,l=e.value,u=e.type,d=e.placeholder,j=e.submitValue,b=e.handleSubmit;return Object(a.jsx)("div",{className:t,style:{display:o},children:Object(a.jsxs)("div",{className:n,children:[" ",Object(a.jsx)("form",{onSubmit:b,children:Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("h2",{children:c}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{className:"input-field",type:u,name:r,onChange:s,value:l,placeholder:d}),i]}),Object(a.jsx)("input",{type:"submit",className:"button",value:j})]})})]})})},S=(n(86),function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(e.currentAsk),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(c.useState)("none"),f=Object(o.a)(O,2),x=f[0],v=f[1],y=Object(c.useContext)($),w=Object(c.useContext)(W),S={id:e.id,current_ask:m,userid:e.userId},C=function(e){return 1!==e?"s":""};Object(c.useEffect)((function(){var t=new Date(e.duration).getTime(),n=function(){var n=(new Date).getTime(),c=t-n+1e3;if(c>0&&d!==e.buyNow){var i=Math.floor(c/864e5),o=Math.floor(c%864e5/36e5),l=Math.floor(c%36e5/6e4),u=Math.floor(c%6e4/1e3);i>0?r("".concat(i," Day").concat(C(i)," ").concat(o?"".concat(o," Hour").concat(C(o)):"")):o>0?r("".concat(o," Hour").concat(C(o)," ").concat(l?"".concat(l," Minute").concat(C(l)):"")):l>0?r("".concat(l," Minute").concat(C(l)," ").concat(u?"".concat(u," Second").concat(C(u)):"")):u>0&&r("".concat(u," Second").concat(C(u)))}else 0===c?("Expired"===s&&d&&g("https://augeo-server.herokuapp.com/products/".concat(e.id,"/?action=timeout"),S).then((function(e){e?console.log("Product time ran out. Someone won the product."):console.log("Something went wrong with handleTimeout.")})),r("Expired"),clearInterval(a)):(r("Expired"),clearInterval(a))};n();var a=setInterval(n,1e3);return function(){return clearInterval(a)}}),[e.duration,d,e.buyNow]);var A=function(e){"bid-container"===e.target.className&&v("none")};Object(c.useEffect)((function(){document.addEventListener("mousedown",A)}),[]);var P=[{infoStyle:"product-name",info:e.name},{info:"$".concat(e.initialAsk)},{info:0!==d&&"$".concat(d)},{containerStyle:"product-buynow",info:"$".concat(e.buyNow)},{info:s}];return Object(a.jsxs)("div",{className:"product-container",children:[Object(a.jsx)("div",{className:"card-container",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("img",{className:"product-image",src:e.imageSrc,alt:"The ".concat(e.name," being listed")})}),P.map((function(e){return Object(a.jsx)(k,{info:e.info,containerStyle:e.containerStyle,infoStyle:e.infoStyle},e.info)})),"Expired"!==s&&!e.disabled&&Object(a.jsx)(u.b,{onClick:function(t){switch(t.target.name){case"Bid":y&&(e.setTransform(),v("block"));break;default:console.log("There was a problem with the handle click function in product")}},className:"bid-button",name:"Bid",to:y?"/":"/login",children:"Bid"})]})}),Object(a.jsx)(N,{modalStyle:"bid-container",containerStyle:"form-container",heading:"Place Bid",handleChange:function(e){p(parseInt(e.target.value)||"")},handleSubmit:function(t){m>d&&m>=e.initialAsk&&m<e.buyNow?g("https://augeo-server.herokuapp.com/products/".concat(e.id,"/?action=bid"),S).then((function(e){e?(j(m),w({message:"Congratulations, you just won this item!",severity:"success",open:!0})):w({message:"Bid could not be placed. Please refresh!",severity:"warning",open:!0})})):m===e.buyNow?g("https://augeo-server.herokuapp.com/products/".concat(e.id,"/?action=sell"),S).then((function(e){e?(j(m),w({message:"Congratulations, you just won this item!",severity:"success",open:!0})):w({message:"Bid could not be placed. Please refresh!",severity:"warning",open:!0})})):w({message:"Bid is lower than the current ask or more than the buy now price.",severity:"warning",open:!0}),t.preventDefault(),v("none")},display:x,name:"Bid",value:m,type:"number",submitValue:m===e.buyNow?"Buy Now":"Bid",placeholder:"Enter a value higher than $".concat(0===d?e.initialAsk:d)})]})}),C=(n(92),function(e){var t=e.heading,n=e.handleClick,s=e.disabled,r=e.products,i=function(){for(var e=document.getElementsByClassName("track"),t=0;t<e.length;t++){e[t].style.transform="initial"}};return Object(c.useEffect)((function(){for(var e=document.getElementsByClassName("product-carousel"),t=document.getElementsByClassName("next"),n=document.getElementsByClassName("prev"),a=document.getElementsByClassName("track"),c=function(c){var s=e[c].offsetWidth,r=t[c],i=n[c],o=a[c],l=0;o.style.transform="translate(-".concat(0*s,"px)"),i.classList.add("hide"),o.offsetWidth-0*s>=s?(r.classList.add("show"),r.classList.remove("hide")):r.classList.remove("show"),r.addEventListener("click",(function(){l++,i.classList.add("show"),i.classList.remove("hide"),o.style.transform="translate(-".concat(l*s,"px)"),o.offsetWidth-l*s<s&&r.classList.add("hide")})),i.addEventListener("click",(function(){l--,r.classList.remove("hide"),o.style.transform="translate(-".concat(l*s,"px)"),0===l&&i.classList.add("hide")}))},s=0;s<e.length;s++)c(s)}),[r]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t||"Products"}),Object(a.jsxs)("div",{className:"product-carousel",children:[Object(a.jsx)("div",{className:"carousel-inner",children:Object(a.jsx)("div",{className:"track",children:r?r.length?r.map((function(e){return Object(a.jsx)(S,{id:e.id,name:e.category_name,imageSrc:e.imageSrc,currentAsk:e.current_ask,initialAsk:e.initial_price,buyNow:e.buy_now,duration:e.duration,handleClick:n,disabled:s,setTransform:i},e.id)})):Object(a.jsx)("div",{children:"No Products to display"}):Object(a.jsx)("div",{children:"Server is currently down"})})}),Object(a.jsxs)("div",{className:"carousel-nav",children:[Object(a.jsx)("button",{className:"prev",children:Object(a.jsx)("i",{className:"fa fa-angle-left direction-icon"})}),Object(a.jsx)("button",{className:"next",children:Object(a.jsx)("i",{className:"fa fa-angle-right direction-icon"})})]})]})]})}),A=(n(93),function(e){var t=Object(c.useState)("none"),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),u=Object(o.a)(i,2),d=u[0],j=u[1],b=Object(c.useState)(""),O=Object(o.a)(b,2),f=O[0],x=O[1],k=Object(c.useState)(!1),S=Object(o.a)(k,2),A=S[0],P=S[1],B=Object(c.useState)({}),E=Object(o.a)(B,2),_=E[0],L=E[1],D=Object(c.useState)([]),T=Object(o.a)(D,2),F=T[0],M=T[1],I=Object(c.useState)([]),R=Object(o.a)(I,2),H=R[0],z=R[1],$=Object(c.useState)([]),Z=Object(o.a)($,2),G=Z[0],J=Z[1],q=Object(c.useState)("password"),Y=Object(o.a)(q,2),U=Y[0],V=Y[1],X=Object(c.useContext)(W),K=function(e){switch(e.target.name){case"password":A?x(e.target.value):j(e.target.value);break;default:L(Object(l.a)(Object(l.a)({},_),{},Object(h.a)({},e.target.name,e.target.value)))}},Q=function(e){"password-modal"===e.target.className&&r("none")};Object(c.useEffect)((function(){v("https://augeo-server.herokuapp.com/users/details").then((function(e){e&&L(e)})),v("https://augeo-server.herokuapp.com/users/products?type=listing").then((function(e){z(e)})),v("https://augeo-server.herokuapp.com/users/products?type=bid").then((function(e){J(e)})),v("https://augeo-server.herokuapp.com/users/products?type=purchase").then((function(e){M(e)})),document.addEventListener("mousedown",Q)}),[]);return Object(c.useEffect)((function(){var e=setTimeout((function(){P(!1),j("")}),3e5);return function(){return clearTimeout(e)}}),[A]),Object(a.jsxs)("div",{className:"account-container",children:[Object(a.jsx)("h1",{children:"Your Account"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"accmenu-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Personal Details"})}),Object(a.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,marginLeft:"0",marginRight:"25px"},"& .MuiFormControl-fullWidth":{width:"95%"},width:470,maxWidth:"100%"},noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(p.a,{label:"First Name",variant:"outlined",onChange:K,value:_.first_name,name:"first_name",InputLabelProps:{shrink:!0}}),Object(a.jsx)(p.a,{label:"Last Name",variant:"outlined",onChange:K,value:_.last_name,name:"last_name",InputLabelProps:{shrink:!0}}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{disabled:!0,label:"Email",variant:"outlined",value:_.email,name:"email",fullWidth:!0,InputLabelProps:{shrink:!0}}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{label:"Address",variant:"outlined",onChange:K,value:_.address_line,name:"address_line",fullWidth:!0,InputLabelProps:{shrink:!0}}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{label:"City",variant:"outlined",onChange:K,value:_.city,name:"city",InputLabelProps:{shrink:!0}}),Object(a.jsx)(p.a,{label:"Province",variant:"outlined",onChange:K,value:_.province,name:"province",InputLabelProps:{shrink:!0}}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{label:"Postal Code",variant:"outlined",onChange:K,value:_.postal_code,name:"postal_code",InputLabelProps:{shrink:!0}}),Object(a.jsx)(p.a,{label:"Country",variant:"outlined",onChange:K,value:_.country,name:"country",InputLabelProps:{shrink:!0}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button",onClick:function(){_.first_name&&_.last_name?_.first_name.match(/^(?:[A-Za-z]+|)$/)&&_.last_name.match(/^(?:[A-Za-z]+|)$/)?y("https://augeo-server.herokuapp.com/users/details",_).then((function(e){X(e?{open:!0,message:"Your modifications have been saved!",severity:"success"}:{open:!0,message:"Something went wrong. Please try again.",severity:"warning"})})):X({open:!0,message:"First name and last name can only be letters.",severity:"warning"}):X({open:!0,message:"First name and last name cannot be empty.",severity:"warning"})},children:"Save Changes"})})]}),Object(a.jsx)("div",{className:"accmenu-container",children:Object(a.jsx)(C,{heading:"Listings",products:H,disabled:!0})}),Object(a.jsx)("div",{className:"accmenu-container",children:Object(a.jsx)(C,{heading:"Purchases",products:F})}),Object(a.jsx)("div",{className:"accmenu-container",children:Object(a.jsx)(C,{heading:"Bids",products:G})}),Object(a.jsxs)("div",{className:"accmenu-container",children:[Object(a.jsx)("h2",{children:"Manage Account"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("b",{children:"Change Password"})}),Object(a.jsx)("p",{children:"Once you change your current password, you will not be able to use it again."}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button",onClick:function(){x(""),j(""),r("block")},children:"Change Password"})})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("b",{children:"Delete Account"})}),Object(a.jsx)("p",{children:"If you delete your account, you will not be able to recover it."}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button delete-acc",onClick:function(){X({open:!0,message:"This is currently unavailable",severity:"info"})},children:"Delete Account"})})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"sign-out button",onClick:function(){w("https://augeo-server.herokuapp.com/users/session").then((function(t){t?e.setAuthenticated(!1):X({open:!0,message:"Something went wrong. Please try again.",severity:"warning"})}))},children:"Sign Out"})}),Object(a.jsx)(N,{modalStyle:"password-modal",containerStyle:"password-container",heading:"Enter ".concat(A?"new":"your"," password"),handleChange:K,handleSubmit:function(e){A?function(){var e={email:_.email,password:d,new_password:f};f.length>=6?y("https://augeo-server.herokuapp.com/users/password",e).then((function(e){e?(X({open:!0,message:"Your modifications have been saved!",severity:"success"}),j(f),r("none")):(X({open:!0,message:"Something went wrong. Please try again.",severity:"warning"}),console.log("Password was not updated."))})):X({open:!0,message:"Password needs to be at least 6 characters.",severity:"warning"})}():function(){var e={email:_.email,password:d};g("https://augeo-server.herokuapp.com/users/password",e).then((function(e){e?P(!0):(console.log("Wrong password provided."),X({open:!0,message:"Wrong password provided",severity:"warning"}))}))}(),e.preventDefault()},display:s,name:"password",value:A?f:d,type:U,placeholder:"Password",children:Object(a.jsx)("i",{className:"".concat("text"===U?"fa fa-eye":"fa fa-eye-slash"," \n                                password-toggle cursor-pointer"),onClick:function(){V("password"===U?"text":"password")}})})]})]})}),P=(n(95),function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),x=f[0],v=f[1],y=Object(c.useState)(!1),w=Object(o.a)(y,2),k=w[0],N=w[1],S=Object(c.useState)(!1),C=Object(o.a)(S,2),A=C[0],P=C[1],B=Object(c.useState)("password"),E=Object(o.a)(B,2),_=E[0],L=E[1],D=Object(c.useState)(""),T=Object(o.a)(D,2),F=T[0],M=T[1],I=Object(c.useState)(!1),R=Object(o.a)(I,2),H=R[0],z=R[1],$=function(e){switch(e.target.name){case"email":r(e.target.value);break;case"password":j(e.target.value);break;case"first-name":p(e.target.value);break;case"last-name":v(e.target.value);break;default:return}},W=function(e){switch(e.target.name){case"email":s.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?M(""):M("Enter a valid Email Address");break;case"password":d.length>=6?M(""):M("Enter a valid Password");break;case"first-name":m.match(/^(?:[A-Za-z]+|)$/)?M(""):M("First Name can only be letters.");break;case"last-name":x.match(/^(?:[A-Za-z]+|)$/)?M(""):M("Last Name can only be letters.");break;default:M("")}z(!1)};return Object(c.useEffect)((function(){H||function(){var t=s.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),n=d.length>=6,a=m&&m.match(/^(?:[A-Za-z]+|)$/),c=x&&x.match(/^(?:[A-Za-z]+|)$/),r=!F&&k&&t&&n&&("Login"===e.type||a&&c);P(r)}()}),[k,H]),Object(c.useEffect)((function(){p(""),v(""),M(""),N(!1)}),[e.type]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:e.type}),Object(a.jsx)("div",{id:"authenticate-container",children:Object(a.jsx)("div",{id:"authenticate-form",children:Object(a.jsxs)("form",{onSubmit:function(t){"test@test.com"===s&&"tester"===d&&e.setAuthenticated(!0);var n={email:s,password:d,first_name:m,last_name:x},a="Login"===e.type?"/session":"";g("https://augeo-server.herokuapp.com/users".concat(a),n).then((function(t){if(t)e.setAuthenticated(!0);else if("undefined"===typeof t)M("Server is currently down.");else switch(e.type){case"Register":M("The email address already exists!");break;case"Login":M("Your email address or password was entered incorrectly.");break;default:M("Something went wrong. Try Again.")}})),t.preventDefault()},children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"error-message",children:F})}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{className:"input-field",type:"email",name:"email",id:"email",value:s,onChange:$,onBlur:W,onFocus:function(){return z(!0)},required:!0}),Object(a.jsx)("label",{htmlFor:"email",children:"Email Address"})]}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{className:"input-field",type:_,name:"password",id:"password",value:d,onChange:$,onBlur:W,onFocus:function(){return z(!0)}}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("i",{className:"".concat("text"===_?"fa fa-eye":"fa fa-eye-slash"," \n                                   password-toggle cursor-pointer"),onClick:function(){L("password"===_?"text":"password")}})]}),"Register"===e.type&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{className:"input-field",type:"text",name:"first-name",id:"first-name",value:m,onChange:$,onBlur:W,onFocus:function(){return z(!0)}}),Object(a.jsx)("label",{htmlFor:"first-name",children:"First Name"})]}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{className:"input-field",type:"text",name:"last-name",id:"last-name",value:x,onChange:$,onBlur:W,onFocus:function(){return z(!0)}}),Object(a.jsx)("label",{htmlFor:"last-name",children:"Last Name"})]})]}),Object(a.jsxs)("div",{className:"terms-container cursor-pointer",onClick:function(){N(!k)},children:[Object(a.jsx)("input",{type:"checkbox",name:"terms",id:"termsCheckbox",onChange:function(){return N(!k)},checked:k}),Object(a.jsxs)("span",{className:"small-font",children:["By signing ","Register"===e.type?"up":"in",", you agree to the Terms of Service and Privacy Policy"]})]}),Object(a.jsx)("input",{style:{cursor:A?"pointer":"default",backgroundColor:A?"#519ec0":"grey"},type:"submit",value:e.type,className:"button",disabled:!A}),"Register"===e.type?Object(a.jsxs)("div",{className:"small-font",children:["Already have an account? ",Object(a.jsx)(u.b,{to:"/login",children:"Sign in."})]}):Object(a.jsxs)("div",{className:"small-font",children:["Not a member? ",Object(a.jsx)(u.b,{to:"/register",children:"Sign up"})]})]})})})]})}),B=n.p+"static/media/default-category.d6a05a17.png",E=(n(96),function(e){var t=e.name,n=e.handleClick,c=e.src;return Object(a.jsxs)("div",{className:"category-container cursor-pointer",onClick:function(){return n(t)},children:[Object(a.jsx)("div",{className:"category-background",children:Object(a.jsx)("img",{src:c,alt:"".concat(t," category")})}),Object(a.jsx)("div",{className:"category-name",children:Object(a.jsx)("span",{children:t})})]})});E.defaultProps={src:B};var _=function(e){var t=e.categories,n=e.handleClick;return Object(a.jsx)("div",{className:"category-list",children:t?t.length?t.map((function(e){return Object(a.jsx)(E,{handleClick:n,name:e.name,src:e.image_src},e.id)})):Object(a.jsx)("div",{children:"No categories to display"}):Object(a.jsx)("div",{children:"Server is currently down"})})},L=(n(97),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),b=j[0],h=j[1];return Object(c.useEffect)((function(){v("https://augeo-server.herokuapp.com/categories").then((function(e){s(e)}))}),[]),Object(a.jsxs)("div",{className:"browse-container",children:[Object(a.jsxs)("div",{className:"sortBy-container",children:[Object(a.jsx)("form",{className:"filter-form",children:Object(a.jsx)("select",{className:"cursor-pointer",id:"filter",name:"filter",children:Object(a.jsx)("option",{value:"max",children:"Max Buy-Now"})})}),Object(a.jsx)("form",{className:"sortBy-form",children:Object(a.jsxs)("select",{className:"cursor-pointer",id:"order-by",name:"order-by",children:[Object(a.jsx)("option",{value:"duration",children:"Duration"}),Object(a.jsx)("option",{value:"current_ask",children:"Current Ask"}),Object(a.jsx)("option",{value:"initial_price",children:"Initial Ask"}),Object(a.jsx)("option",{value:"buy_now",children:"Buy Now"})]})})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[!n&&"Dummy","  Categories"]}),Object(a.jsx)(_,{categories:n||[{id:1,name:"iPhone 11",image_src:"https://img.icons8.com/officel/344/iphone-x.png"},{id:2,name:"HP Spectre x360",image_src:"https://img.icons8.com/officel/344/laptop.png"},{id:3,name:"G-Shock",image_src:"https://img.icons8.com/officel/564/000000/apple-watch-apps.png"}],handleClick:function(e){u(e),function(e){v("https://augeo-server.herokuapp.com/categories/".concat(encodeURI(e),"/products")).then((function(e){h(e)}))}(e)}})]}),Object(a.jsx)("div",{className:"browse-products",children:l&&Object(a.jsx)(C,{heading:l,products:b})})]})}),D=(n(98),function(e){var t=e.text;return Object(a.jsx)("footer",{id:"footer",children:t})}),T=(n(99),function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(c.useState)([]),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(c.useState)([]),f=Object(o.a)(O,2),x=f[0],g=f[1],y=Object(c.useState)([]),w=Object(o.a)(y,2),k=w[0],N=w[1],S=Object(c.useContext)($),A=Object(c.useContext)(W),P=[{category_name:"HP Spectre x360",initial_price:1840,current_ask:0,buy_now:2500,duration:new Date("Jun 24, 2022 16:55:25").getTime(),id:1,imageSrc:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxM\n                      jA3fDF8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto\n                      =format&fit=crop&w=1000&q=60"},{category_name:"iPhone 11",initial_price:670,current_ask:845,buy_now:1600,duration:new Date("Jun 22, 2022 15:58:25").getTime(),id:2,imageSrc:"https://images.unsplash.com/photo-1574755297613-7b2c5fee60ce?\n                       ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto\n                       =format&fit=crop&w=2392&q=80"},{category_name:"G-Shock",initial_price:70,current_ask:0,buy_now:200,duration:new Date("Jun 4, 2022 20:59:25").getTime(),id:3,imageSrc:"https://images.unsplash.com/photo-1574755297613-7b2c5fee60ce?\n                       ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto\n                       =format&fit=crop&w=2392&q=80"}];return Object(c.useEffect)((function(){v("https://augeo-server.herokuapp.com/products?sortBy=featured").then((function(e){r(e)})),v("https://augeo-server.herokuapp.com/products?sortBy=popular").then((function(e){p(e)})),v("https://augeo-server.herokuapp.com/products?sortBy=trending").then((function(e){g(e)})),v("https://augeo-server.herokuapp.com/products?sortBy=latest").then((function(e){j(e)})),v("https://augeo-server.herokuapp.com/products?sortBy=recent").then((function(e){N(e)}))}),[]),Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)("div",{className:"jumbo",children:Object(a.jsx)("div",{className:"jumbo-overlay",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"jumbo-header",children:"Shop and sell at your own pace"}),Object(a.jsxs)("div",{className:"greeting-container",children:[Object(a.jsx)("p",{className:"jumbo-info",children:"If you are looking for a platform to \n                                resell your product in a relatively free market, or\n                                trying to find a bargain on one then look no further."}),Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)(u.b,{to:S?"/browse":"/login",children:Object(a.jsx)("button",{className:"button",children:"Get Started"})})})]})]})})}),Object(a.jsx)(C,{heading:"Dummy Products",products:P}),Object(a.jsx)(C,{heading:"Featured Product",products:s}),Object(a.jsx)(C,{heading:"Most Popular",products:m}),Object(a.jsx)(C,{heading:"Trending",products:x}),Object(a.jsxs)("div",{className:"banner-container",children:[Object(a.jsx)("div",{className:"collection-text",children:"Cannot find the category you are trying to list? Just add it"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button",onClick:function(){A({message:"This is currently unavailable",severity:"info",open:!0})},children:"Add Category"})})]}),Object(a.jsx)(C,{heading:"Latest Category",products:d}),Object(a.jsx)(C,{heading:"Recent Bids",products:k})]})}),F=(n(100),function(e){var t=e.logo,n=e.title;return Object(a.jsxs)("div",{className:"intro-container",children:[Object(a.jsx)("div",{className:"logo-container",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t,alt:"site-logo"}),Object(a.jsx)("h1",{children:n})]})}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsx)("div",{className:"author-container",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Made By"}),Object(a.jsx)("h1",{children:" Emmanuel Tony-Adiari"})]})})]})}),M=(n(101),n.p+"static/media/logo-transparent.e36dff0a.svg"),I=function(e){var t=e.mobileMenuRef,n=Object(c.useContext)($),s=function(){t.current.style.display="none"},r=function(e){"mobile-menu-container fade-in"===e.target.className&&(t.current.style.display="none")};return Object(c.useEffect)((function(){document.addEventListener("mousedown",r)}),[]),Object(a.jsx)("div",{className:"full-width",children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("div",{id:"nav-container",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{id:"home",children:Object(a.jsx)(u.b,{to:"/",children:"Augeo"})}),Object(a.jsx)("li",{className:"mobile-menu-item",children:Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("img",{id:"logo",src:M,alt:"logo"})})}),!n&&Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/login",children:"Login"})}),!n&&Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/register",children:"Register"})}),n&&Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/account",children:"Account"})}),Object(a.jsx)("li",{id:"sell",children:Object(a.jsx)(u.b,{to:"/sell",children:"Sell"})}),Object(a.jsx)("li",{id:"browse",children:Object(a.jsx)(u.b,{to:"/browse",children:"Browse"})}),Object(a.jsx)("li",{className:"mobile-menu-item",onClick:function(){t.current.style.display="block",t.current.classList.add("fade-in")},children:Object(a.jsx)("i",{className:"fa fa-bars",id:"burger"})})]})}),Object(a.jsx)("div",{className:"mobile-menu-container",ref:t,children:Object(a.jsxs)("div",{className:"mobile-menu",children:[Object(a.jsx)("i",{className:"fa fa-close close-button",onClick:s}),Object(a.jsxs)("ul",{children:[!n&&Object(a.jsx)("li",{onClick:s,children:Object(a.jsx)(u.b,{to:"/login",children:"Login"})}),!n&&Object(a.jsx)("li",{onClick:s,children:Object(a.jsx)(u.b,{to:"/register",children:"Register"})}),n&&Object(a.jsx)("li",{onClick:s,children:Object(a.jsx)(u.b,{to:"/account",children:"Account"})}),Object(a.jsx)("li",{onClick:s,children:Object(a.jsx)(u.b,{to:"/sell",children:"Sell"})}),Object(a.jsx)("li",{onClick:s,children:Object(a.jsx)(u.b,{to:"/browse",children:"Browse"})})]})]})})]})})},R=(n(102),function(e){return Object(a.jsx)("div",{className:"notfound-container full-width",children:Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("button",{className:"button redirect",children:"Back to Augeo"})})})}),H=(n(103),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1];return Object(a.jsxs)("div",{id:"search-container",style:{boxShadow:l?"0px 0px 1px 1px #007bff":"0px 0px 1px 1px #e5e5e5"},children:[Object(a.jsx)("i",{className:"fa fa-search search-icon"}),Object(a.jsx)("input",{id:"search-field",value:n,placeholder:"Search",onChange:function(e){s(e.target.value)},onKeyPress:function(e){},onFocus:function(){return u(!0)},onBlur:function(){return u(!1)}})]})}),z=(n(104),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)(""),j=Object(o.a)(d,2),b=j[0],h=j[1],m=Object(c.useState)(""),p=Object(o.a)(m,2),O=p[0],f=p[1],x=Object(c.useState)([]),y=Object(o.a)(x,2),w=y[0],k=y[1],N=Object(c.useState)(!1),C=Object(o.a)(N,2),A=C[0],P=C[1],B=Object(c.useState)("none"),E=Object(o.a)(B,2),L=E[0],D=E[1],T=Object(c.useContext)($),F=Object(c.useContext)(W),M=function(){P(!!(n<l&&l>0&&b))},I=function(e){switch(e.target.name){case"initial-ask":e.target.value>=0&&s(parseInt(e.target.value));break;case"buy-now":e.target.value>=0&&u(parseInt(e.target.value));break;case"duration":var t=(new Date).getTime();if(new Date(e.target.value).getTime()-t>36e5){h(e.target.value);break}break;default:console.log("There was an error")}},R=function(e){var t=document.getElementById("result-container");e.target===t&&D("none")};return Object(c.useEffect)((function(){document.addEventListener("mousedown",R),v("https://augeo-server.herokuapp.com/categories").then((function(e){k(e)}))}),[]),Object(a.jsxs)("div",{id:"sell-body",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"searchbar-heading",children:Object(a.jsx)("h1",{children:"What product are you trying to list"})}),Object(a.jsx)("div",{id:"search-bar",children:Object(a.jsx)(H,{})})]}),Object(a.jsx)("div",{children:Object(a.jsx)(_,{categories:w,handleClick:function(e){T?(D("flex"),f(e)):F({message:"You need to login before listing a product.",severity:"info",open:!0})}})}),Object(a.jsxs)("div",{id:"result-container",style:{display:L},children:[Object(a.jsx)("div",{id:"sample-flex",children:Object(a.jsx)("div",{id:"sample-listing",children:Object(a.jsx)(S,{name:O,disabled:!0,initialAsk:n,currentAsk:0,buyNow:l,duration:b})})}),Object(a.jsx)("div",{id:"form-flex",children:Object(a.jsxs)("form",{onSubmit:function(e){g("https://augeo-server.herokuapp.com/products",{category:O,buy_now:l,initial_ask:n,duration:b}).then((function(e){e?F({message:"Listing was created!",severity:"success",open:!0}):(F({message:"Something went wrong. Try again.",severity:"warning",open:!0}),console.log("Product was not listed. Most likely due to invalid data being provided"))})),D("none"),e.preventDefault()},children:[Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("span",{children:"Initial Ask"}),Object(a.jsx)("input",{className:"input-field",type:"number",onBlur:M,name:"initial-ask",placeholder:"Enter Amount (Less than Final Ask)",value:n,onChange:I})]}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("span",{children:"Final Ask"}),Object(a.jsx)("input",{className:"input-field",type:"number",name:"buy-now",placeholder:"Enter Amount (At least 1)",value:l,onChange:I,onBlur:M})]}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("span",{children:"Duration"}),Object(a.jsx)("input",{className:"input-field",type:"datetime-local",name:"duration",value:b,onChange:I,onBlur:M}),!b&&Object(a.jsx)("div",{className:"error-message",children:"Duration needs to be at least an hour"})]}),Object(a.jsx)("input",{type:"submit",style:{cursor:A?"pointer":"default",backgroundColor:A?"#050F19":"grey"},value:"List Product",className:"button",disabled:!A})]})})]})]})}),$=(n(105),s.a.createContext(!1)),W=s.a.createContext(),Z=s.a.forwardRef((function(e,t){return Object(a.jsx)(b.a,Object(l.a)({elevation:6,ref:t,variant:"filled"},e))})),G=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({open:!1,message:"",severity:""}),i=Object(o.a)(r,2),b=i[0],h=i[1],m=Object(c.useRef)();return Object(c.useEffect)((function(){v("https://augeo-server.herokuapp.com/verify-authentication").then((function(e){e&&s(!0),console.log("User is not logged in")}))}),[]),Object(a.jsx)(u.a,{basename:"/Augeo",children:Object(a.jsx)($.Provider,{value:n,children:Object(a.jsx)(W.Provider,{value:h,children:Object(a.jsxs)("div",{id:"app-body",children:[Object(a.jsx)(F,{title:"Augeo",logo:M}),Object(a.jsx)(j.a,{open:b.open,autoHideDuration:4e3,onClose:function(){return h(Object(l.a)(Object(l.a)({},b),{},{open:!1}))},children:Object(a.jsx)(Z,{onClose:function(){return h(Object(l.a)(Object(l.a)({},b),{},{open:!1}))},severity:b.severity,sx:{width:"100%"},children:b.message})}),Object(a.jsx)(I,{mobileMenuRef:m}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/browse",children:Object(a.jsx)(L,{})}),Object(a.jsx)(d.b,{path:"/sell",children:Object(a.jsx)(z,{})}),Object(a.jsx)(d.b,{path:"/register",children:n?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(P,{type:"Register",setAuthenticated:s})}),Object(a.jsx)(d.b,{path:"/login",children:n?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(P,{type:"Login",setAuthenticated:s})}),Object(a.jsx)(d.b,{path:"/account",children:n?Object(a.jsx)(A,{setAuthenticated:s}):Object(a.jsx)(d.a,{to:"/login"})}),Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(T,{})}),Object(a.jsx)(d.b,{component:R})]}),Object(a.jsx)(D,{text:"\xa9 Copyright TonyADI. All Rights Reserved. v1.0"})]})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),J()},84:function(e,t,n){},86:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.a2821500.chunk.js.map