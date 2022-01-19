(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__15NsC",control:"Checkout_control__21NOY",actions:"Checkout_actions__gc8nh",submit:"Checkout_submit__2Io1Z",invalid:"Checkout_invalid__2r1ym"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__l60qy",total:"Cart_total__3G6X_",actions:"Cart_actions__1qOij","button--alt":"Cart_button--alt__D2v35",button:"Cart_button__12iTD"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1VZvj",summary:"CartItem_summary__15h9O",price:"CartItem_price__2l8wX",amount:"CartItem_amount__1vYt7",actions:"CartItem_actions__1e5gS"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__FhtWa",icon:"HeaderCartButton_icon__1rBUE",badge:"HeaderCartButton_badge__20IVI",bump:"HeaderCartButton_bump__21jti"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__1P0Tj","meals-appear":"AvailableMeals_meals-appear__2GQXk",mealsloading:"AvailableMeals_mealsloading__2ohkd",errorHandling:"AvailableMeals_errorHandling__3rHfN"}},function(e,t,n){e.exports={meal:"MealItem_meal__3yOlV",description:"MealItem_description__2VOvx",price:"MealItem_price__3fMJQ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__-4kwu",modal:"Modal_modal__29LGG","slide-down":"Modal_slide-down__2tXNR"}},,function(e,t,n){e.exports={header:"Header_header__2vE9b","main-image":"Header_main-image__3cOhh"}},,,,function(e,t,n){e.exports={card:"Card_card__1pHX1"}},function(e,t,n){e.exports={input:"Input_input__2P5pl"}},function(e,t,n){e.exports={form:"MealItemForm_form__1iXv5"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2_jkH"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/meals.2971f633.jpg",l=n(15),u=n.n(l),d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(0),m=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(9),O=n.n(b);var h=function(e){var t=Object(i.useContext)(d),n=Object(i.useState)(!1),a=Object(r.a)(n,2),c=a[0],s=a[1],o=t.items;Object(i.useEffect)((function(){if(0!==o.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[o]);var l=t.items.reduce((function(e,t){return e+t.amount}),0),u="".concat(O.a.button," ").concat(c?O.a.bump:"");return Object(j.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(j.jsx)("span",{className:O.a.icon,children:Object(j.jsx)(m,{})}),Object(j.jsx)("span",{children:"Your cart"}),Object(j.jsx)("span",{className:O.a.badge,children:l})]})};var x=function(e){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsxs)("header",{className:u.a.header,children:[Object(j.jsx)("h1",{children:"HungryHighs"}),Object(j.jsx)(h,{onClick:e.onShowCart})]}),Object(j.jsx)("div",{className:u.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"A table full of meals"})})]})},p=n(18),f=n(16),_=n.n(f),v=n(11),C=n.n(v),g=n(19),y=n.n(g);var N=function(e){return Object(j.jsx)("div",{className:y.a.card,children:e.children})},k=n(12),A=n.n(k),I=n(4),w=n(20),H=n.n(w),S=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:H.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(I.a)({ref:t},e.input))]})})),M=n(21),F=n.n(M);var P=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(j.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim("").length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(S,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter valid amount (1-5)"})]})};var R=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(i.useContext)(d);return Object(j.jsxs)("li",{className:A.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:A.a.description,children:e.description}),Object(j.jsx)("div",{className:A.a.price,children:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)(P,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})},id:e.id})})]})},E=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useState)(),d=Object(r.a)(u,2),m=d[0],b=d[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(p.a)(_.a.mark((function e(){var t,n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hungry-highs-pt-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){b(e.message),console.log(e.message),l(!1)}))}),[]),o)return Object(j.jsx)("section",{className:C.a.mealsloading,children:Object(j.jsx)("p",{children:"Loading..."})});if(m)return Object(j.jsx)("section",{className:C.a.errorHandling,children:Object(j.jsx)("p",{children:m})});var O=n.map((function(e){return Object(j.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(N,{children:Object(j.jsx)("ul",{children:O})})})},D=n(22),T=n.n(D),B=function(){return Object(j.jsxs)("section",{className:T.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})};var V=function(){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(B,{}),Object(j.jsx)(E,{})]})},X=n(13),Y=n.n(X);function G(e){return Object(j.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})}function J(e){return Object(j.jsx)("div",{className:Y.a.modal,children:Object(j.jsx)("div",{className:Y.a.content,children:e.children})})}var q=document.getElementById("overlays");var z=function(e){return Object(j.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(j.jsx)(G,{onClose:e.onClose}),q),c.a.createPortal(Object(j.jsx)(J,{children:e.children}),q)]})},L=n(5),$=n.n(L),Q=n(6),Z=n.n(Q),U=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:Z.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:Z.a.summary,children:[Object(j.jsx)("span",{className:Z.a.price,children:t}),Object(j.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:Z.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},W=n(3),K=n.n(W),ee=function(e){return""===e.trim()},te=function(e){var t=Object(i.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d="".concat(K.a.control," ").concat(a.name?"":K.a.invalid),m="".concat(K.a.control," ").concat(a.street?"":K.a.invalid),b="".concat(K.a.control," ").concat(a.city?"":K.a.invalid),O="".concat(K.a.control," ").concat(a.postalCode?"":K.a.invalid);return Object(j.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=l.current.value,i=u.current.value,d=!ee(n),j=!ee(a),m=6===r.trim().length,b=!ee(i);c({name:d,street:j,postalCode:m,city:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,city:i,postalCode:r})},children:[Object(j.jsxs)("div",{className:d,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(j.jsx)("p",{children:"Please enter a valid name."})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(j.jsx)("p",{children:"Please enter a valid street."})]}),Object(j.jsxs)("div",{className:O,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(j.jsx)("p",{children:"Please enter a valid postal code( 5 characters)."})]}),Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(j.jsx)("p",{children:"Please enter a valid city."})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:K.a.submit,children:"Confirm"})]})]})};var ne=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),u=l[0],m=l[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],p=Object(i.useContext)(d);console.log(p.totalAmount);var f="$".concat(p.totalAmount.toFixed(2)),_=function(e){p.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},v=function(e){p.removeItem(e)},C=p.items.length>0,g=Object(j.jsx)("ul",{className:$.a["cart-items"],children:p.items.map((function(e){return Object(j.jsx)(U,{name:e.name,price:e.price,amount:e.amount,onRemove:v.bind(null,e.id),onAdd:_.bind(null,e)},e.id)}))}),y=Object(j.jsxs)("div",{className:$.a.actions,children:[Object(j.jsx)("button",{className:$.a["button--alt"],onClick:e.onClose,children:"close"}),C&&Object(j.jsx)("button",{className:$.a.button,onClick:function(){c(!0)},children:"order"})]}),N=Object(j.jsxs)(s.a.Fragment,{children:[g,Object(j.jsxs)("div",{className:$.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:f})]}),a&&Object(j.jsx)(te,{onConfirm:function(e){m(!0),fetch("https://hungry-highs-pt-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:e,orderedItems:p.items})}),m(!1),x(!0),p.clearCart()},onCancel:e.onClose}),!a&&y]}),k=Object(j.jsx)("p",{children:"Placing your order..."}),A=Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("p",{children:"Your Order Has been placed :)"}),Object(j.jsx)("div",{className:$.a.actions,children:Object(j.jsx)("button",{className:$.a.button,onClick:e.onClose,children:"close"})})]});return Object(j.jsxs)(z,{onClose:e.onClose,children:[!u&&!h&&N,u&&k,h&&!u&&A]})},ae=n(17),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(I.a)(Object(I.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ce},ie=function(e){var t=Object(i.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(j.jsx)(d.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ie,{children:[n&&Object(j.jsx)(ne,{onClose:function(){a(!1)}}),Object(j.jsx)(x,{onShowCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(V,{})})]})};c.a.render(Object(j.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.0093ffa0.chunk.js.map