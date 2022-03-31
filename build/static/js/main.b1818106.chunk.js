(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(62),c=t.n(r),m=(t(73),t(75),t(77),t(79),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",null,n.a.createElement("img",{className:"nav_img",src:"../img/rsb.jpg",alt:"logo"}),n.a.createElement("a",{href:"/"},"HOME"),n.a.createElement("a",{href:"/products"},"DECKS"),n.a.createElement("a",{href:"/checkout"},"CHECKOUT")))}),s=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"hero__wrap",style:{backgroundImage:'url("./img/halfpipe.jpeg")'}},n.a.createElement("img",{className:"logo_rsb",src:"./img/rsb.jpg",alt:"logo"}),n.a.createElement("div",{className:"header-content"},n.a.createElement("p",null,"Don't skate without updated accessories."),n.a.createElement("p",null,"Find the right deck for the best price."))),n.a.createElement("section",{className:"percent_"},n.a.createElement("h1",{className:"percent20"},"Buy 2 Decks & get the 3rd 20% off"),n.a.createElement("h1",{className:"percent30"},"Sign up with email & get 30% first purchase")),n.a.createElement("section",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement("img",{className:"rail",src:"../img/skate.jpeg",alt:"skating_rail"})),n.a.createElement("div",{className:"column"},n.a.createElement("h2",{className:"RSB"},"RSB SKATESHOP"),n.a.createElement("p",{className:"RSB_para"},"I know what the skaters want. Growing up skating, I would always complain about not getting the right graphic on my board, my boarding being the wrong size, or how easily it was for my board to break. Here at RSB Skate shop, we are obligated to finding the skater the right deck, a stable deck. It can be costly having to keep buying decks when they are not reliable.")))),n.a.createElement("section",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement("img",{className:"rail",src:"../img/boardslide.jpeg",alt:"boardsliding"})),n.a.createElement("div",{className:"column"},n.a.createElement("h2",{className:"RSB"},"DECKS"),n.a.createElement("p",{className:"RSB_para"},'The decks are made from durable seven-layered American Maple wood, that are interlaid by water-based glue and put together by high pressure. All of the decks are 33" long, with a deck-width of 8.25". Because concave is one of the most important parts of the deck, all of our skateboards are medium concave.')))))},i=t(4),o=t(5),u=t(8),d=t(3),p=t(7),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={products:[],error:null},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/getpost",{mode:"cors",credentials:"true"}).then(function(e){return e.json()}).then(function(a){e.setState({products:a})},function(a){e.setState({error:a})})}},{key:"render",value:function(){var e=this.state.products;return n.a.createElement(n.a.Fragment,null,e.map(function(e,a){return n.a.createElement("div",{className:"searchBtn"},n.a.createElement("div",{id:"search-container"},n.a.createElement("input",{type:"search",id:"search-input",placeholder:"Search deck description here.."}),n.a.createElement("button",{id:"search"},"Search")),n.a.createElement("div",{id:"buttons"},n.a.createElement("button",{className:"button-value",onClick:"filterProducts('all')"},"All"),n.a.createElement("button",{className:"button-value",onClick:"filterProducts('decks')"},"Decks"),n.a.createElement("button",{className:"button-value",onClick:"filterProducts('price')"},"Price"),n.a.createElement("button",{className:"button-value",onClick:"filterProducts('name')"},"whatever")),n.a.createElement("div",{id:"products"}))}),n.a.createElement("div",{className:"decks"},e.map(function(e,a){return n.a.createElement("div",{key:a,className:"items",style:{paddingTop:"50px"}},n.a.createElement("h2",null,e.deck_name),n.a.createElement("a",{href:"./img/brown.jpeg",target:"_blank"},n.a.createElement("img",{src:e.deck_image,alt:"brown"})),n.a.createElement("h2",{style:{paddingTop:"10px"}},e.deck_spec,": ",e.deck_size),n.a.createElement("h2",{style:{paddingTop:"10px"}},"$",e.deck_price))}),";"))}}]),a}(n.a.Component),h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"hero-img"},n.a.createElement("img",{src:"../img/girl.jpeg.crdownload",alt:"img1"}),n.a.createElement("h1",null,"Don't Skate Alone.")),n.a.createElement("div",{className:"hero-img"},n.a.createElement("img",{src:"../img/pink.jpeg",alt:"img2"}),n.a.createElement("h1",null,"Skate witch-yo.")),n.a.createElement("div",{className:"hero-img"},n.a.createElement("img",{src:"../img/skate_team.jpeg",alt:"img3"}),n.a.createElement("h1",null,"GIRL.")))),n.a.createElement("div",{className:"searchBtn"},n.a.createElement("div",{id:"search-container"},n.a.createElement("input",{type:"search",id:"search-input",placeholder:"Search deck  description here.."}),n.a.createElement("button",{id:"search"},"Search")),n.a.createElement("div",{id:"buttons"},n.a.createElement("button",{className:"button-value",onClick:"filterProducts('all')"},"All"),n.a.createElement("button",{className:"button-value",onClick:"filterProducts('decks')"},"Pro"),n.a.createElement("button",{className:"button-value",onClick:"filterProducts('price')"},"Standard"),n.a.createElement("button",{className:"button-value",onClick:"filterProducts('name')"},"Price")),n.a.createElement("div",{id:"products"})),n.a.createElement("h1",{className:"price"},"| Click on Deck |"),n.a.createElement(E,null))},g=t(35),f=t.n(g),b=t(63),v=t(27),k=v.a().shape({name:v.b().required(),email:v.b().email().required()}),N=function(){var e=Object(b.a)(f.a.mark(function e(a){var t,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={name:a.target[0].value,email:a.target[1].value},e.next=4,k.isValid(t);case 4:l=e.sent,console.log(l);case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"rowCheckout"},n.a.createElement("div",{className:"col-75"},n.a.createElement("div",{className:"container"},n.a.createElement("form",{action:"/action_page.php",onSubmit:N},n.a.createElement("div",{className:"rowCheckout"},n.a.createElement("div",{className:"col-50"},n.a.createElement("h3",null,"Billing Address"),n.a.createElement("label",{for:"fname"},n.a.createElement("i",{className:"fa fa-user"})," Full Name"),n.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Rashaad Bracley"}),n.a.createElement("label",{for:"email"},n.a.createElement("i",{className:"fa fa-envelope"})," Email"),n.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"Rsamuel@example.com"}),n.a.createElement("label",{for:"adr"},n.a.createElement("i",{className:"fa fa-address-card-o"})," Address"),n.a.createElement("input",{type:"text",id:"adr",name:"address",placeholder:"542 W. 15th Street"}),n.a.createElement("label",{for:"city"},n.a.createElement("i",{className:"fa fa-institution"})," City"),n.a.createElement("input",{type:"text",id:"city",name:"city",placeholder:"Fort Mill"}),n.a.createElement("div",{className:"rowCheckout"},n.a.createElement("div",{className:"col-50"},n.a.createElement("label",{for:"state"},"State"),n.a.createElement("input",{type:"text",id:"state",name:"state",placeholder:"SC"})),n.a.createElement("div",{className:"col-50"},n.a.createElement("label",{for:"zip"},"Zip"),n.a.createElement("input",{type:"text",id:"zip",name:"zip",placeholder:"29707"})))),n.a.createElement("div",{className:"col-50"},n.a.createElement("h3",null,"Payment"),n.a.createElement("label",{for:"fname"},"Accepted Cards"),n.a.createElement("div",{className:"icon-container"},n.a.createElement("i",{className:"fa fa-cc-visa",style:{color:"navy blue"}}),n.a.createElement("i",{className:"fa fa-cc-amex",style:{color:"blue"}}),n.a.createElement("i",{className:"fa fa-cc-mastercard",style:{color:"red"}}),n.a.createElement("i",{className:"fa fa-cc-discover",style:{color:"orange"}})),n.a.createElement("label",{for:"cname"},"Name on Card"),n.a.createElement("input",{type:"text",id:"cname",name:"cardname",placeholder:"Rashaad S. Bracley"}),n.a.createElement("label",{for:"ccnum"},"Credit card number"),n.a.createElement("input",{type:"text",id:"ccnum",name:"cardnumber",placeholder:"336-867-5309"}),n.a.createElement("label",{for:"expmonth"},"Exp Month"),n.a.createElement("input",{type:"text",id:"expmonth",name:"expmonth",placeholder:"September"}),n.a.createElement("div",{className:"rowCheckout"},n.a.createElement("div",{className:"col-50"},n.a.createElement("label",{for:"expyear"},"Exp Year"),n.a.createElement("input",{type:"text",id:"expyear",name:"expyear",placeholder:"2050"})),n.a.createElement("div",{className:"col-50"},n.a.createElement("label",{for:"cvv"},"CVV"),n.a.createElement("input",{type:"text",id:"cvv",name:"cvv",placeholder:"352"}))))),n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",checked:"checked",name:"sameadr"}),"Shipping address same as billing"),n.a.createElement("input",{type:"submit",value:"Continue to checkout",className:"btn"})))),n.a.createElement("div",{className:"col-25"},n.a.createElement("div",{className:"container"},n.a.createElement("h4",null,"Cart",n.a.createElement("span",{className:"price",style:{color:"black"}},n.a.createElement("i",{className:"fa fa-shopping-cart"})," ",n.a.createElement("b",null,"4"))),n.a.createElement("p",null,n.a.createElement("a",{href:"./img/sad_girl.jpeg",target:"_blank"},"The Sad Girl"),n.a.createElement("span",{className:"price"},"$60")),n.a.createElement("p",null,n.a.createElement("a",{href:"./img/mint_green.jpeg",target:"_blank"},"The Minty Girl"),n.a.createElement("span",{className:"price"},"$60")),n.a.createElement("p",null,n.a.createElement("a",{href:"./img/grass_pin.jpeg",target:"_blank"},"The Gass Pointe"," "),n.a.createElement("span",{className:"price"},"$60")),n.a.createElement("p",null,n.a.createElement("a",{href:"./img/carolina_blu.jpeg",target:"_blank"},"The Carolina Girl"),n.a.createElement("span",{className:"price"},"$60")),n.a.createElement("hr",null),n.a.createElement("p",null,"Total"," ",n.a.createElement("span",{className:"price",style:{color:"black"}},n.a.createElement("b",null,"$240")))))))},w=t(38),C=t(37),S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{id:"main-footer"},n.a.createElement("a",{href:"https://www.instagram.com/birdshavebeaks/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(w.a,{icon:C.a})),n.a.createElement("a",{href:"https://www.linkedin.com/in/rashaad-bracley-44588a212/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(w.a,{icon:C.b})),n.a.createElement("p",null,"Rashaad Ecommerce: Copyright \xa92022"),n.a.createElement("img",{className:"rsb_img",src:"../img/rsb.jpg",alt:"logo"})))},x=t(67),_=t(0);var j=function(){return n.a.createElement(x.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(m,null),n.a.createElement(_.c,null,n.a.createElement(_.a,{path:"/",element:n.a.createElement(s,null)}),n.a.createElement(_.a,{path:"/products",element:n.a.createElement(h,null)}),n.a.createElement(_.a,{path:"/checkout",element:n.a.createElement(y,null)})),n.a.createElement(S,null)))},P=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,185)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),P()},68:function(e,a,t){e.exports=t(184)},73:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){}},[[68,3,2]]]);
//# sourceMappingURL=main.b1818106.chunk.js.map