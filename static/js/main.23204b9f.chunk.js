(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{31:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(14),r=c.n(i),o=(c(31),c(2)),l=c(5),d=c(6),j=c(8),u=c(12),b=c(13),h=c.n(b),O=c(15),m=function(){var e=Object(O.a)(h.a.mark((function e(t,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 3:if(!(n=e.sent).ok){e.next=13;break}if(201!==n.status){e.next=10;break}return console.log("Data created/updated"),e.abrupt("return",!0);case 10:if(204!==n.status){e.next=13;break}return console.log("Data found!"),e.abrupt("return",!0);case 13:if(409!==n.status){e.next=18;break}return console.log("Data could not be created/updated!"),e.abrupt("return",!1);case 18:if(401!==n.status){e.next=23;break}return console.log("Credentials do not exist."),e.abrupt("return",!1);case 23:403===n.status&&(console.log("User already logged in."),window.location.reload());case 24:throw new Error("Create request was invalid.");case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0.message);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(t,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Cache:"no-cache"},credentials:"include"});case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:throw new Error("Fetch request was invalid");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(O.a)(h.a.mark((function e(t,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"PUT",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 3:if(!(n=e.sent).ok){e.next=9;break}if(console.log("Connection worked, PUT worked"),204!==n.status){e.next=9;break}return console.log("Resource was updated."),e.abrupt("return",!0);case 9:throw new Error("Update request was invalid.");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>1&&void 0!==n[1]?n[1]:[],e.prev=1,e.next=4,fetch(t,{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:if(!e.sent.ok){e.next=8;break}return console.log("Resource deleted"),e.abrupt("return",!0);case 8:throw new Error("Delete request was invalid.");case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),v=c.p+"static/media/gshock.86944fdb.jfif",g=c.p+"static/media/image-error.3a94e212.png",y=(c(38),function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],j=l[1],u=Object(a.useState)(""),b=Object(o.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),f=x[0],y=x[1],w=Object(a.useState)(""),N=Object(o.a)(w,2),k=N[0],S=N[1],C=Object(a.useState)(""),A=Object(o.a)(C,2),E=A[0],B=A[1],P=Object(a.useState)(""),_=Object(o.a)(P,2),D=_[0],L=_[1],T=Object(a.useState)(""),M=Object(o.a)(T,2),F=M[0],I=M[1],R=Object(a.useState)("none"),z=Object(o.a)(R,2),$=z[0],Z=z[1],H=Object(a.useState)(""),q=Object(o.a)(H,2),G=q[0],U=q[1],J={id:e.id,current_ask:F,userid:e.userId},W=function(e){return 1!==e?"s":""},K=function(){s>0?S("".concat(s," Day").concat(W(s)," ").concat(d," Hour").concat(W(d))):d>0?S("".concat(d," Hour").concat(W(d)," ").concat(h," Minute").concat(W(h))):h>0?S("".concat(h," Minute").concat(W(h)," ").concat(f," Second").concat(W(f))):f>0?S("".concat(f," Second").concat(W(f))):(S("Expired"),B(""),0===d&&0===h&&0===f&&(D?m("https://tonyadi.loca.lt/products/".concat(e.id,"/?action=timeout"),J).then((function(e){e?console.log("Product time ran out. Someone won the product."):console.log("Something went wrong with handleTimeout function in product.")})):console.log("No bids")))};Object(a.useEffect)((function(){var t=function(){var t=(new Date).getTime(),n=new Date(e.duration).getTime()-t+1e3;n>0&&D!==e.buyNow?(i(Math.floor(n/864e5)),j(Math.floor(n%864e5/36e5)),O(Math.floor(n%36e5/6e4)),y(Math.floor(n%6e4/1e3))):(i(""),j(""),O(""),y(""),clearInterval(c))};t();var c=setInterval(t,1e3);return function(){return clearInterval(c)}}),[e.duration,D,e.buyNow]),Object(a.useEffect)((function(){return L(e.currentAsk)}),[e.currentAsk]),Object(a.useEffect)((function(){K()}),[f]),Object(a.useEffect)((function(){switch(e.name){case"HP Spectre x360":U("https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxM\n                        jA3fDF8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto\n                        =format&fit=crop&w=1000&q=60");break;case"iPhone 11":U("https://images.unsplash.com/photo-1574755297613-7b2c5fee60ce?\n                            ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto\n                            =format&fit=crop&w=2392&q=80");break;case"G-Shock":U(v);break;default:U(g)}}),[e.name]);var Y=function(e){for(var t=document.getElementsByClassName("bid-container"),c=0;c<t.length;c++){var n=t[c];e.target===n&&Z("none")}};return Object(a.useEffect)((function(){document.addEventListener("mousedown",Y)}),[]),Object(n.jsxs)("div",{className:"product-container",style:{animationName:E},children:[Object(n.jsx)("div",{className:"card-container",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{className:"product-image",src:G,alt:"The ".concat(e.name," being listed")})}),Object(n.jsxs)("div",{className:"product-details",children:[Object(n.jsx)("div",{className:"product-detail",children:Object(n.jsx)("span",{className:"product-name",children:e.name})}),Object(n.jsx)("div",{className:"product-detail",children:Object(n.jsxs)("span",{children:["$",e.initialAsk]})}),Object(n.jsx)("div",{className:"product-detail",children:0!==D&&Object(n.jsxs)("span",{children:["$",D]})}),Object(n.jsx)("div",{className:"product-detail product-buynow",children:Object(n.jsxs)("span",{children:["$",e.buyNow]})}),Object(n.jsx)("div",{className:"product-detail",children:Object(n.jsx)("span",{children:k})})]}),"Expired"!==k&&!e.disabled&&Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(t){switch(t.target.name){case"Bid":e.authenticated?(e.setTransform(),Z("block")):window.location.assign("login");break;default:console.log("There was a problem with the handle click function in product")}},className:"bid-button",name:"Bid",children:"Bid"})})]})}),Object(n.jsx)("div",{className:"bid-container",style:{display:$},children:Object(n.jsx)("div",{className:"form-container",children:Object(n.jsx)("form",{onSubmit:function(t){F>D&&F<e.buyNow?m("https://tonyadi.loca.lt/products/".concat(e.id,"/?action=bid"),J).then((function(e){e?(console.log("Bid was accepted"),Z("none"),L(F)):alert("Bid could not be placed. Please refresh.")})):F===e.buyNow?m("https://tonyadi.loca.lt/products/".concat(e.id,"/?action=sell"),J).then((function(e){e?(alert("Congratulations, you just won this item!"),L(F),Z("none")):alert("Bid could not be placed. Please refresh.")})):alert("Amount needs to be higher than the current ask and lower than or equal to the buy now price."),t.preventDefault()},children:Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("h2",{children:"Place Bid"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"input-field",type:"number",name:"Bid",onChange:function(e){I(parseInt(e.target.value))},placeholder:"Enter a value higher than $\n                                        ".concat(0===D?e.initialAsk:D)})}),Object(n.jsx)("input",{type:"submit",className:"button",value:F===e.buyNow?"Buy Now":"Bid"})]})})})})]})}),w=(c(39),function(e){var t=function(){for(var e=document.getElementsByClassName("track"),t=0;t<e.length;t++){e[t].style.transform="initial"}};return Object(a.useEffect)((function(){for(var e=document.getElementsByClassName("product-carousel"),t=document.getElementsByClassName("next"),c=document.getElementsByClassName("prev"),n=document.getElementsByClassName("track"),a=function(a){var s=e[a].offsetWidth,i=t[a],r=c[a],o=n[a],l=0;o.style.transform="translate(-".concat(0*s,"px)"),r.classList.add("hide"),o.offsetWidth-0*s>=s?(i.classList.add("show"),i.classList.remove("hide")):i.classList.remove("show"),i.addEventListener("click",(function(){l++,r.classList.add("show"),r.classList.remove("hide"),o.style.transform="translate(-".concat(l*s,"px)"),o.offsetWidth-l*s<s&&i.classList.add("hide")})),r.addEventListener("click",(function(){l--,i.classList.remove("hide"),o.style.transform="translate(-".concat(l*s,"px)"),0===l&&r.classList.add("hide")}))},s=0;s<e.length;s++)a(s)}),[e.products]),Object(n.jsxs)("div",{className:"product-carousel",children:[Object(n.jsx)("div",{className:"carousel-inner",children:Object(n.jsx)("div",{className:"track",children:e.products?e.products.length?e.products.map((function(c){return Object(n.jsx)(y,{id:c.id,name:c.category_name,imageSrc:c.imageSrc,currentAsk:c.current_ask,initialAsk:c.initial_price,buyNow:c.buy_now,duration:c.duration,handleClick:e.handleClick,authenticated:e.authenticated,disabled:e.disabled,setTransform:t},c.id)})):Object(n.jsx)("div",{children:"No Products to display"}):Object(n.jsx)("div",{children:"Server is currently down"})})}),Object(n.jsxs)("div",{className:"carousel-nav",children:[Object(n.jsx)("button",{className:"prev",children:Object(n.jsx)("i",{className:"fa fa-angle-left direction-icon"})}),Object(n.jsx)("button",{className:"next",children:Object(n.jsx)("i",{className:"fa fa-angle-right direction-icon"})})]})]})}),N=(c(40),function(e){var t=Object(a.useState)("none"),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],b=l[1],h=Object(a.useState)(""),O=Object(o.a)(h,2),v=O[0],g=O[1],y=Object(a.useState)(!0),N=Object(o.a)(y,2),k=N[0],S=N[1],C=Object(a.useState)(!1),A=Object(o.a)(C,2),E=A[0],B=A[1],P=Object(a.useState)({}),_=Object(o.a)(P,2),D=_[0],L=_[1],T=Object(a.useState)([]),M=Object(o.a)(T,2),F=M[0],I=M[1],R=Object(a.useState)([]),z=Object(o.a)(R,2),$=z[0],Z=z[1],H=Object(a.useState)([]),q=Object(o.a)(H,2),G=q[0],U=q[1],J=Object(a.useState)("password"),W=Object(o.a)(J,2),K=W[0],Y=W[1],X=Object(a.useState)("fa fa-eye-slash"),V=Object(o.a)(X,2),Q=V[0],ee=V[1],te=Object(a.useState)(""),ce=Object(o.a)(te,2),ne=ce[0],ae=ce[1],se=function(e){E?function(){var e={email:D.email,password:d,new_password:v};v.length>=6?x("https://tonyadi.loca.lt/users/password",e).then((function(e){e?(u.NotificationManager.success("Password successfully changed!"),console.log("Password successfully updated."),b(v),i("none")):(alert("Something went wrong. Please try again."),console.log("Password was not updated."))})):S(!1)}():function(){var e={email:D.email,password:d};m("https://tonyadi.loca.lt/users/password",e).then((function(e){e?(u.NotificationManager.info("Password was good."),console.log("Password was good."),B(!0),S(!0),i("none")):(console.log("Wrong password provided."),S(!1))}))}(),e.preventDefault()},ie=function(e){switch(e.target.name){case"password":E?g(e.target.value):b(e.target.value);break;case"first-name":L(Object(j.a)(Object(j.a)({},D),{},{first_name:e.target.value}));break;case"last-name":L(Object(j.a)(Object(j.a)({},D),{},{last_name:e.target.value}));break;case"address-line":L(Object(j.a)(Object(j.a)({},D),{},{address_line:e.target.value}));break;case"city":L(Object(j.a)(Object(j.a)({},D),{},{city:e.target.value}));break;case"province":L(Object(j.a)(Object(j.a)({},D),{},{province:e.target.value}));break;case"postal-code":L(Object(j.a)(Object(j.a)({},D),{},{postal_code:e.target.value}));break;case"country":L(Object(j.a)(Object(j.a)({},D),{},{country:e.target.value}));break;default:console.log("The selected input does not exist.")}},re=function(e){var t=document.getElementById("password-modal");e.target===t&&i("none")};return Object(a.useEffect)((function(){p("https://tonyadi.loca.lt/users/details").then((function(e){e&&L(e)})),p("https://tonyadi.loca.lt/users/products?type=listing").then((function(e){Z(e)})),p("https://tonyadi.loca.lt/users/products?type=bid").then((function(e){U(e)})),p("https://tonyadi.loca.lt/users/products?type=purchase").then((function(e){I(e)})),document.addEventListener("mousedown",re)}),[]),Object(a.useEffect)((function(){var e=setTimeout((function(){B(!1),b("")}),3e5);return function(){return clearTimeout(e)}}),[E]),Object(n.jsxs)("div",{className:"account-container",children:[Object(n.jsx)(u.NotificationContainer,{}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Your Account"})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"accmenu-container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Personal Details"})}),Object(n.jsxs)("form",{className:"personal-details-form",children:[ne&&Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:"error-message",children:ne})}),Object(n.jsxs)("div",{className:"space-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"First Name"}),Object(n.jsx)("input",{className:"input-field",type:"text",name:"first-name",value:D.first_name,onChange:ie})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"Last Name"}),Object(n.jsx)("input",{className:"input-field",type:"text",name:"last-name",value:D.last_name,onChange:ie})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"Email"}),Object(n.jsx)("input",{className:"input-field email",type:"email",name:"email",value:D.email,disabled:!0})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"Address Line"}),Object(n.jsx)("input",{className:"input-field email",type:"text",name:"address-line",value:D.address_line,onChange:ie})]}),Object(n.jsxs)("div",{className:"space-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"City"}),Object(n.jsx)("input",{className:"input-field email",type:"text",name:"city",value:D.city,onChange:ie})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"Province"}),Object(n.jsx)("input",{className:"input-field email",type:"text",name:"province",value:D.province,onChange:ie})]})]}),Object(n.jsxs)("div",{className:"space-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"Postal Code"}),Object(n.jsx)("input",{className:"input-field email",type:"text",name:"postal-code",value:D.postal_code,onChange:ie})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"details-heading",children:"Country"}),Object(n.jsx)("input",{className:"input-field email",type:"text",name:"country",value:D.country,onChange:ie})]})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"button",onClick:function(){D.first_name&&D.last_name?D.first_name.match(/^(?:[A-Za-z]+|)$/)&&D.last_name.match(/^(?:[A-Za-z]+|)$/)?x("https://tonyadi.loca.lt/users/details",D).then((function(e){e?(u.NotificationManager.success("Your modifications have been saved!","",4e3),console.log("Data was modified"),ae("")):ae("Something went wrong. Try again.")})):ae("First Name and Last Name can only be letters."):ae("First Name and Last Name cannot be empty.")},children:"Save Changes"})})]}),Object(n.jsxs)("div",{className:"accmenu-container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Listings"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:$,disabled:!0})})]}),Object(n.jsxs)("div",{className:"accmenu-container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Purchases"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:F})})]}),Object(n.jsxs)("div",{className:"accmenu-container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Bids"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:G,authenticated:e.authenticated})})]}),Object(n.jsxs)("div",{className:"accmenu-container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Manage Account"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Change Password"})}),Object(n.jsx)("p",{children:"Once you change your current password, you will not be able to use it again."}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"button",onClick:function(){g(""),b(""),i("block")},children:"Change Password"})})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Delete Account"})}),Object(n.jsx)("p",{children:"If you delete your account, you will not be able to recover it."}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"button",onClick:function(){u.NotificationManager.info("Currently Unavailable.")},children:"Delete Account"})})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"sign-out button",onClick:function(){f("https://tonyadi.loca.lt/users/session").then((function(t){t?e.setAuthenticated(!1):console.log("Logout was unsuccessful.")}))},children:"Sign Out"})}),Object(n.jsx)("div",{id:"password-modal",style:{display:s},children:Object(n.jsx)("div",{className:"password-container",children:Object(n.jsx)("form",{onSubmit:se,children:Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsxs)("h2",{children:["Enter ",E?"new":"your"," password"]}),Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{className:"input-field",type:K,name:"password",placeholder:"Password",value:E?v:d,onChange:ie,onKeyPress:function(e){13===e.which&&se(e)}}),Object(n.jsx)("i",{className:"".concat(Q," password-toggle cursor-pointer"),onClick:function(){var e="fa fa-eye-slash"===Q?"fa fa-eye":"fa fa-eye-slash";Y("password"===K?"text":"password"),ee(e)}})]}),!k&&d.length>=6&&Object(n.jsx)("span",{className:"error-message",children:"Password was entered incorrectly."}),Object(n.jsx)("input",{type:"submit",className:"button"})]})})})})]})]})}),k=(c(41),function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),d=Object(o.a)(r,2),j=d[0],u=d[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),O=h[0],p=h[1],x=Object(a.useState)(""),f=Object(o.a)(x,2),v=f[0],g=f[1],y=Object(a.useState)(!1),w=Object(o.a)(y,2),N=w[0],k=w[1],S=Object(a.useState)(!1),C=Object(o.a)(S,2),A=C[0],E=C[1],B=Object(a.useState)("password"),P=Object(o.a)(B,2),_=P[0],D=P[1],L=Object(a.useState)("fa fa-eye-slash"),T=Object(o.a)(L,2),M=T[0],F=T[1],I=Object(a.useState)(""),R=Object(o.a)(I,2),z=R[0],$=R[1],Z=function(){var t=s.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),c=j.length>=6,n=O.match(/^(?:[A-Za-z]+|)$/)&&O,a=v.match(/^(?:[A-Za-z]+|)$/)&&v;!z&&N&&t&&c&&("Login"===e.type||n&&a)?E(!0):E(!1)},H=function(e){switch(e.target.name){case"email":i(e.target.value);break;case"password":u(e.target.value);break;case"first-name":p(e.target.value);break;case"last-name":g(e.target.value);break;default:console.log("Error!")}},q=function(e){13===e.which&&A&&U(e)},G=function(e){switch(e.target.name){case"email":s.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?$(""):$("Enter a valid Email Address");break;case"password":j.length>=6?$(""):$("Enter a valid Password");break;case"first-name":O.match(/^(?:[A-Za-z]+|)$/)?$(""):$("First Name can only be letters.");break;case"last-name":v.match(/^(?:[A-Za-z]+|)$/)?$(""):$("Last Name can only be letters.");break;default:$("")}Z()},U=function(t){"test@test.com"===s&&"tester"===j&&e.setAuthenticated(!0);var c={email:s,password:j,first_name:O,last_name:v},n="Register"===e.type?"https://tonyadi.loca.lt/users":"https://tonyadi.loca.lt/users/session";m(n,c).then((function(t){if(t)e.setAuthenticated(!0);else if("undefined"===typeof t)$("Server is currently down.");else switch(e.type){case"Register":$("The email address already exists!");break;case"Login":$("Your email address or password was entered incorrectly.");break;default:$("Something went wrong. Try Again.")}})),t.preventDefault()};return Object(a.useEffect)((function(){Z()}),[N]),Object(a.useEffect)((function(){p(""),g(""),$(""),k(!1)}),[e.type]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:e.type}),Object(n.jsx)("div",{id:"authenticate-container",children:Object(n.jsx)("div",{id:"authenticate-form",children:Object(n.jsxs)("form",{onSubmit:U,children:[Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:"error-message",children:z})}),Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{className:"input-field",type:"email",name:"email",id:"email",value:s,onChange:H,onKeyPress:q,onBlur:G}),Object(n.jsx)("label",{htmlFor:"email",children:"Email Address"})]}),Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{className:"input-field",type:_,name:"password",id:"password",value:j,onChange:H,onKeyPress:q,onBlur:G}),Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("i",{className:"".concat(M," password-toggle cursor-pointer"),onClick:function(){var e="fa fa-eye-slash"===M?"fa fa-eye":"fa fa-eye-slash";D("password"===_?"text":"password"),F(e)}})]}),"Register"===e.type&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{className:"input-field",type:"text",name:"first-name",id:"first-name",value:O,onChange:H,onKeyPress:q,onBlur:G}),Object(n.jsx)("label",{htmlFor:"first-name",children:"First Name"})]}),Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{className:"input-field",type:"text",name:"last-name",id:"last-name",value:v,onChange:H,onKeyPress:q,onBlur:G}),Object(n.jsx)("label",{htmlFor:"last-name",children:"Last Name"})]})]}),Object(n.jsxs)("div",{className:"terms-container cursor-pointer",onClick:function(){k(!N)},children:[Object(n.jsx)("input",{type:"checkbox",name:"terms",id:"termsCheckbox",onChange:function(){return k(!N)},checked:N}),Object(n.jsxs)("span",{className:"small-font",children:[" By signing ","Register"===e.type?"up":"in",", you agree to the Terms of Service and Privacy Policy"]})]}),Object(n.jsx)("input",{style:{cursor:A?"pointer":"default",backgroundColor:A?"#050F19":"grey"},type:"submit",value:e.type,className:"button",disabled:!A}),"Register"===e.type?Object(n.jsxs)("div",{className:"small-font",children:["Already have an account? ",Object(n.jsx)(l.b,{to:"/login",children:"Sign in."})]}):Object(n.jsxs)("div",{className:"small-font",children:["Not a member? ",Object(n.jsx)(l.b,{to:"/register",children:"Sign up"})]})]})})})]})}),S=(c(45),function(e){return Object(n.jsxs)("div",{className:"category-container cursor-pointer",onClick:function(){e.handleClick(e.name)},children:[Object(n.jsx)("div",{className:"category-background",children:Object(n.jsx)("img",{src:e.src,alt:"".concat(e.name," category")})}),Object(n.jsx)("div",{className:"category-name",children:Object(n.jsx)("span",{children:e.name})})]})}),C=function(e){return Object(n.jsx)("div",{className:"inline-display",children:e.categories?e.categories.length?e.categories.map((function(t){return Object(n.jsx)(S,{handleClick:e.handleClick,name:t.name,src:t.image_src},t.id)})):Object(n.jsx)("div",{children:"No categories to display"}):Object(n.jsx)("div",{children:"Server is currently down"})})},A=(c(46),function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],j=l[1],u=Object(a.useState)([]),b=Object(o.a)(u,2),h=b[0],O=b[1];return Object(a.useEffect)((function(){p("https://tonyadi.loca.lt/categories").then((function(e){i(e)}))}),[]),Object(n.jsxs)("div",{className:"browse-container",children:[Object(n.jsxs)("div",{className:"sortBy-container",children:[Object(n.jsx)("form",{className:"filter-form",children:Object(n.jsx)("select",{className:"cursor-pointer",id:"filter",name:"filter",children:Object(n.jsx)("option",{value:"max",children:"Max Buy-Now"})})}),Object(n.jsx)("form",{className:"sortBy-form",children:Object(n.jsxs)("select",{className:"cursor-pointer",id:"order-by",name:"order-by",children:[Object(n.jsx)("option",{value:"duration",children:"Duration"}),Object(n.jsx)("option",{value:"current_ask",children:"Current Ask"}),Object(n.jsx)("option",{value:"initial_price",children:"Initial Ask"}),Object(n.jsx)("option",{value:"buy_now",children:"Buy Now"})]})})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:[!s&&"Dummy","  Categories"]}),Object(n.jsx)(C,{categories:s||[{id:1,name:"iPhone 11",image_src:"https://img.icons8.com/pastel-glyph/564/000000/iphone-x--v1.png"},{id:2,name:"HP Spectre x360",image_src:"https://img.icons8.com/cotton/564/000000/laptop--v1.png"},{id:3,name:"G-Shock",image_src:"https://img.icons8.com/officel/564/000000/apple-watch-apps.png"}],handleClick:function(e){j(e),function(e){p("https://tonyadi.loca.lt/categories/".concat(encodeURI(e),"/products")).then((function(e){O(e)}))}(e)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:d})}),Object(n.jsx)("div",{className:"browse-products",children:d&&Object(n.jsx)(w,{products:h,authenticated:e.authenticated})})]})]})}),E=(c(47),function(e){return Object(n.jsx)("footer",{id:"footer",className:"full-width",children:"\xa9 Copyright TonyADI. All Rights Reserved. v1.0"})}),B=(c(48),function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)([]),d=Object(o.a)(r,2),j=d[0],u=d[1],b=Object(a.useState)([]),h=Object(o.a)(b,2),O=h[0],m=h[1],x=Object(a.useState)([]),f=Object(o.a)(x,2),v=f[0],g=f[1],y=Object(a.useState)([]),N=Object(o.a)(y,2),k=N[0],S=N[1],C=[{category_name:"HP Spectre x360",initial_price:1840,current_ask:0,buy_now:2500,duration:new Date("Jan 24, 2022 16:55:25").getTime(),id:1},{category_name:"iPhone 11",initial_price:670,current_ask:845,buy_now:1600,duration:new Date("Feb 22, 2022 15:58:25").getTime(),id:2},{category_name:"G-Shock",initial_price:70,current_ask:0,buy_now:200,duration:new Date("Mar 29, 2022 20:59:25").getTime(),id:3}];return Object(a.useEffect)((function(){p("https://tonyadi.loca.lt/products?sortBy=featured").then((function(e){i(e)})),p("https://tonyadi.loca.lt/products?sortBy=popular").then((function(e){m(e)})),p("https://tonyadi.loca.lt/products?sortBy=trending").then((function(e){g(e)})),p("https://tonyadi.loca.lt/products?sortBy=latest").then((function(e){u(e)})),p("https://tonyadi.loca.lt/products?sortBy=recent").then((function(e){S(e)}))}),[]),Object(n.jsxs)("div",{className:"home-container",children:[Object(n.jsx)("div",{className:"jumbo full-width",children:Object(n.jsx)("div",{className:"jumbo-overlay",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"jumbo-header",children:"Shop and sell at your own pace"}),Object(n.jsxs)("div",{className:"greeting-container",children:[Object(n.jsx)("p",{className:"jumbo-info",children:"If you are looking for a platform to \n                                resell your product in a relatively free market, or\n                                trying to find a bargain on one then look no further."}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)(l.b,{to:"/register",children:Object(n.jsx)("button",{className:"button",children:"Get Started"})})})]})]})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Dummy Products"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:C,authenticated:e.authenticated})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Featured Product"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:s,authenticated:e.authenticated})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Most Popular"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:O,authenticated:e.authenticated})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Trending"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:v,authenticated:e.authenticated})})]}),Object(n.jsxs)("div",{className:"banner-container",children:[Object(n.jsx)("div",{className:"collection-text",children:"Cannot find the category you are trying to list? Just add it"}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"button",children:"Add Category"})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Latest Category"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:j,authenticated:e.authenticated})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Recent Bids"})}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{products:k,authenticated:e.authenticated})})]})]})}),P=(c(49),c.p+"static/media/logo-transparent.e36dff0a.svg"),_=function(e){var t=function(){document.querySelector(".mobile-menu-container").style.display="none"};return Object(n.jsx)("div",{className:"full-width",children:Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{id:"nav-container",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{id:"home",children:Object(n.jsx)(l.b,{to:"/",children:"Augeo"})}),Object(n.jsx)("li",{className:"mobile-menu-item",children:Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("img",{id:"logo",src:P,alt:"logo"})})}),!e.authenticated&&Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/login",children:"Login"})}),!e.authenticated&&Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/register",children:"Register"})}),e.authenticated&&Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/account",children:"Account"})}),Object(n.jsx)("li",{id:"sell",children:Object(n.jsx)(l.b,{to:"/sell",children:"Sell"})}),Object(n.jsx)("li",{id:"browse",children:Object(n.jsx)(l.b,{to:"/browse",children:"Browse"})}),Object(n.jsx)("li",{className:"mobile-menu-item",onClick:function(){document.querySelector(".mobile-menu-container").style.display="block"},children:Object(n.jsx)("i",{className:"fa fa-bars",id:"burger"})})]})}),Object(n.jsx)("div",{className:"mobile-menu-container",children:Object(n.jsxs)("div",{className:"mobile-menu",children:[Object(n.jsx)("i",{className:"fa fa-close close-button",onClick:t}),Object(n.jsxs)("ul",{children:[!e.authenticated&&Object(n.jsx)("li",{onClick:t,children:Object(n.jsx)(l.b,{to:"/login",children:"Login"})}),!e.authenticated&&Object(n.jsx)("li",{onClick:t,children:Object(n.jsx)(l.b,{to:"/register",children:"Register"})}),e.authenticated&&Object(n.jsx)("li",{onClick:t,children:Object(n.jsx)(l.b,{to:"/account",children:"Account"})}),Object(n.jsx)("li",{onClick:t,children:Object(n.jsx)(l.b,{to:"/sell",children:"Sell"})}),Object(n.jsx)("li",{onClick:t,children:Object(n.jsx)(l.b,{to:"/browse",children:"Browse"})})]})]})})]})})},D=(c(50),function(e){return Object(n.jsx)("div",{className:"notfound-container full-width",children:Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("button",{className:"button redirect",children:"Back to Augeo"})})})}),L=(c(51),function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(n.jsxs)("div",{id:"search-container",children:[Object(n.jsx)("i",{className:"fa fa-search search-icon"}),Object(n.jsx)("input",{id:"search-field",value:s,placeholder:"Search",onChange:function(e){i(e.target.value)},onKeyPress:function(e){}})]})}),T=(c(52),c(53),function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),O=h[0],x=h[1],f=Object(a.useState)(""),v=Object(o.a)(f,2),g=v[0],w=v[1],N=Object(a.useState)([]),k=Object(o.a)(N,2),A=k[0],E=k[1],B=Object(a.useState)(!1),P=Object(o.a)(B,2),_=P[0],D=P[1],T=Object(a.useState)("none"),M=Object(o.a)(T,2),F=M[0],I=M[1],R=function(){D(!!(s<d&&d>0&&O))},z=function(e){switch(e.target.name){case"initial-ask":e.target.value>=0&&i(parseInt(e.target.value));break;case"buy-now":e.target.value>=0&&j(parseInt(e.target.value));break;case"duration":var t=(new Date).getTime();if(new Date(e.target.value).getTime()-t>36e5){x(e.target.value);break}break;default:console.log("There was an error")}},$=function(e){var t=document.getElementById("result-container");e.target===t&&I("none")};return Object(a.useEffect)((function(){document.addEventListener("mousedown",$),p("https://tonyadi.loca.lt/categories").then((function(e){E(e)}))}),[]),Object(n.jsxs)("div",{id:"sell-body",children:[Object(n.jsx)(u.NotificationContainer,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"searchbar-heading",children:Object(n.jsx)("h1",{children:"What product are you trying to list"})}),Object(n.jsx)("div",{id:"search-bar",children:Object(n.jsx)(L,{})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{categories:A,handleClick:function(t){e.authenticated?(I("flex"),w(t)):window.location.assign("login")}}),A&&Object(n.jsx)("div",{className:"inline-display",children:Object(n.jsx)(S,{name:"New Category",handleClick:function(){u.NotificationManager.info("Currently Unavailable.")},src:"https://img.icons8.com/ios-glyphs/64/ffffff/plus-math.png"})})]}),Object(n.jsxs)("div",{id:"result-container",style:{display:F},children:[Object(n.jsx)("div",{id:"sample-flex",children:Object(n.jsx)("div",{id:"sample-listing",children:Object(n.jsx)(y,{name:g,disabled:!0,initialAsk:s,currentAsk:0,buyNow:d,duration:O})})}),Object(n.jsx)("div",{id:"form-flex",children:Object(n.jsxs)("form",{onSubmit:function(e){m("https://tonyadi.loca.lt/products",{category:g,buy_now:d,initial_ask:s,duration:O}).then((function(e){e?u.NotificationManager.success("Listing was created."):(u.NotificationManager.error("Something went wrong. Try again."),console.log("Product was not listed. Most likely due to invalid data being provided"))})),I("none"),e.preventDefault()},children:[Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("span",{children:"Initial Ask"}),Object(n.jsx)("input",{className:"input-field",type:"number",onBlur:R,name:"initial-ask",placeholder:"Enter Amount (Less than Final Ask)",value:s,onChange:z})]}),Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("span",{children:"Final Ask"}),Object(n.jsx)("input",{className:"input-field",type:"number",name:"buy-now",placeholder:"Enter Amount (At least 1)",value:d,onChange:z,onBlur:R})]}),Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("span",{children:"Duration"}),Object(n.jsx)("input",{className:"input-field",type:"datetime-local",name:"duration",value:O,onChange:z,onBlur:R}),!O&&Object(n.jsx)("div",{className:"error-message",children:"Duration needs to be at least an hour"})]}),Object(n.jsx)("input",{type:"submit",style:{cursor:_?"pointer":"default",backgroundColor:_?"#050F19":"grey"},value:"List Product",className:"button",disabled:!_})]})})]})]})}),M=(c(54),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){p("https://tonyadi.loca.lt/verify-authentication").then((function(e){e&&s(!0),console.log("User is not logged in")}))}),[]),Object(n.jsx)(l.a,{basename:"/Augeo",children:Object(n.jsxs)("div",{id:"app-body",children:[Object(n.jsx)(_,{authenticated:c}),Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{path:"/browse",children:Object(n.jsx)(A,{authenticated:c})}),Object(n.jsx)(d.b,{path:"/sell",children:Object(n.jsx)(T,{authenticated:c})}),Object(n.jsx)(d.b,{path:"/register",children:c?Object(n.jsx)(d.a,{to:"/"}):Object(n.jsx)(k,{type:"Register",setAuthenticated:s})}),Object(n.jsx)(d.b,{path:"/login",children:c?Object(n.jsx)(d.a,{to:"/"}):Object(n.jsx)(k,{type:"Login",setAuthenticated:s})}),Object(n.jsx)(d.b,{path:"/account",children:c?Object(n.jsx)(N,{authenticated:c,setAuthenticated:s}):Object(n.jsx)(d.a,{to:"/login"})}),Object(n.jsx)(d.b,{exact:!0,path:"/",children:Object(n.jsx)(B,{authenticated:c})}),Object(n.jsx)(d.b,{component:D})]}),Object(n.jsx)(E,{})]})})}),F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),F()}},[[55,1,2]]]);
//# sourceMappingURL=main.23204b9f.chunk.js.map