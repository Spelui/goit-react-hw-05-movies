(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{11:function(e,t,a){e.exports={home__list:"HomePage_home__list__3r7oT",home__item:"HomePage_home__item__18GZo",home__text:"HomePage_home__text__31--0",home__link:"HomePage_home__link__2ZyiO",home__poster:"HomePage_home__poster__30-0P",home__title:"HomePage_home__title__3ldVQ",home__data:"HomePage_home__data__9szN5"}},13:function(e,t,a){e.exports={header:"Header_header__ikc5o",header__list:"Header_header__list__1slCm",header__item:"Header_header__item__7iYTm",active:"Header_active__1MAA0",header__link:"Header_header__link__3PdU8"}},15:function(e,t,a){e.exports={cast:"Cast_cast__3q2mO",cast__item:"Cast_cast__item__1zPsM",cast__poster:"Cast_cast__poster__3YP8k",cast__name:"Cast_cast__name__2SPha",cast__character:"Cast_cast__character__1ZERa"}},18:function(e,t,a){e.exports={reviews__item:"Reviews_reviews__item__3NVXP",reviews__autor:"Reviews_reviews__autor__2-Tzx",reviews__content:"Reviews_reviews__content__qzDW-"}},21:function(e,t,a){e.exports={form:"MoviePage_form__36dip",search:"MoviePage_search__1HUJ-",btn:"MoviePage_btn__3F9Zy"}},32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(10),s=a(25),i=a.n(s),o=(a(32),a(3)),_=a(13),l=a.n(_),u=a(0),j=function(e){var t=e.name,a=e.path;return Object(u.jsx)("li",{className:l.a.header__item,children:Object(u.jsx)(r.c,{to:a,className:l.a.header__link,activeClassName:l.a.active,children:t})})},h=function(){return Object(u.jsx)("header",{className:l.a.header,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("nav",{className:l.a.header__nav,children:Object(u.jsxs)("ul",{className:l.a.header__list,children:[Object(u.jsx)(j,{name:"Home",path:"/homepage"}),Object(u.jsx)(j,{name:"Movies",path:"/movies"})]})})})})},v=a(20),m=a(5),d=a(12),p=a(2),b=a.n(p),x="https://api.themoviedb.org/3/",O="d930634ce0b5b68ed871edac308461c8",f=function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.next=3,fetch("".concat(x,"trending/movie/week?api_key=").concat(O,"&page=").concat(t));case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=3,fetch("".concat(x,"search/movie?api_key=").concat(O,"&query=").concat(t,"&page=").concat(a));case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"movie/").concat(t,"?api_key=").concat(O));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"movie/").concat(t,"/credits?api_key=").concat(O));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"movie/").concat(t,"/reviews?api_key=").concat(O));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a.p+"static/media/image-not-found.3ec7d811.jpg",y=a(11),M=a.n(y),D=function(e){var t=e.id,a=e.title,c=e.poster,n=e.data,s="https://image.tmdb.org/t/p/w200/".concat(c);return Object(u.jsx)("li",{id:t,className:M.a.home__item,children:Object(u.jsxs)(r.b,{to:"/movies/".concat(t),className:M.a.home__link,children:[Object(u.jsx)("img",{className:M.a.home__poster,src:c?s:P,alt:a}),Object(u.jsxs)("div",{className:M.a.home__text,children:[Object(u.jsx)("h2",{className:M.a.home__title,children:a}),Object(u.jsxs)("p",{className:M.a.home__data,children:[Object(u.jsx)("b",{children:"Release date:"})," ",n]})]})]})})},C=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,n(Object(v.a)(t.results)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.messege);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(u.jsx)("section",{className:M.a.home,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("ul",{className:M.a.home__list,children:a.map((function(e){var t=e.id,a=e.title,c=e.poster_path,n=e.release_date;return Object(u.jsx)(D,{id:t,title:a,poster:c,data:n},t)}))})})})},H=function(e){var t=e.children;return Object(u.jsx)("main",{children:t})},S=a(21),E=a.n(S),R=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),i=s[0],o=s[1],_=function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:return a=e.sent,o(Object(v.a)(a.results)),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:E.a.form,onSubmit:function(e){e.preventDefault(),console.log(e),_(a)},children:[Object(u.jsx)("input",{className:E.a.search,onChange:function(e){n(e.target.value)},type:"text",placeholder:"Search",value:a}),Object(u.jsx)("button",{className:E.a.btn,type:"submit",children:"Search"})]})}),Object(u.jsx)("ul",{className:M.a.home__list,children:i.map((function(e){var t=e.id,a=e.title,c=e.poster_path;return Object(u.jsx)(D,{id:t,title:a,poster:c})}))})]})})},q=a(15),z=a.n(q),G=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(o.i)();return Object(c.useEffect)((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(r.id);case 3:t=e.sent,n(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r.id]),Object(u.jsx)("ul",{className:z.a.cast,children:a.map((function(e){var t=e.id,a=e.name,c=e.character,n=e.profile_path;return Object(u.jsxs)("li",{className:z.a.cast__item,children:[Object(u.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200/".concat(n):P,alt:a,className:z.a.cast__poster}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:z.a.cast__name,children:a}),Object(u.jsx)("p",{className:z.a.cast__character,children:c})]})]},t)}))})},J=a(18),B=a.n(J),I=function(){var e,t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],r=a[1],s=Object(o.i)();return Object(c.useEffect)((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(s.id);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s.id]),console.log(n),Object(u.jsx)("ul",{className:B.a.reviews,children:null===(e=n.results)||void 0===e?void 0:e.map((function(e){var t=e.author,a=e.content,c=e.id;return Object(u.jsxs)("li",{className:B.a.reviews__item,children:[Object(u.jsx)("p",{className:B.a.reviews__autor,children:t}),Object(u.jsx)("p",{className:B.a.reviews__content,children:a})]},c)}))})},T=a(6),Z=a.n(T),A=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(o.i)(),i=Object(o.j)(),_=Object(o.g)(),l=Object(o.h)(),j=function(e){switch(l.pathname){case i.url:break;case"".concat(i.url,"/cast"):case"".concat(i.url,"/reviews"):_.goBack()}};Object(c.useEffect)((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(s.id);case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s.id]);var h=a.genres,v=a.poster_path,p=a.overview,x=a.original_title,O=a.vote_average,f="https://image.tmdb.org/t/p/w200/".concat(v),g=null===h||void 0===h?void 0:h.map((function(e){return e.name})).join(", ");return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("button",{className:Z.a.btn,type:"button",onClick:function(){return _.goBack()},children:"Go Back"}),Object(u.jsxs)("div",{className:Z.a.details__card,children:[Object(u.jsx)("img",{src:f,alt:"",className:Z.a.img}),Object(u.jsxs)("div",{className:Z.a.text,children:[Object(u.jsx)("h2",{className:Z.a.title,children:x}),Object(u.jsx)("p",{className:Z.a.average,children:O}),Object(u.jsx)("p",{className:Z.a.overview,children:"Overview"}),Object(u.jsx)("p",{className:Z.a.overview__text,children:p}),Object(u.jsx)("p",{className:Z.a.genres,children:"Genres"}),Object(u.jsx)("p",{className:Z.a.genres__text,children:g})]})]}),Object(u.jsxs)("div",{className:Z.a.link,children:[Object(u.jsx)(r.c,{to:"".concat(i.url,"/cast"),onClick:j,className:Z.a.link__cast,activeClassName:Z.a.active,children:"Cast"}),Object(u.jsx)(r.c,{to:"".concat(i.url,"/reviews"),onClick:j,className:Z.a.link__reviews,activeClassName:Z.a.active,children:"Reviews"})]}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"".concat(i.path,"/cast"),children:Object(u.jsx)(G,{})}),Object(u.jsx)(o.b,{path:"".concat(i.path,"/reviews"),children:Object(u.jsx)(I,{})})]})]})})},F=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(H,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/goit-react-hw-05-movies",render:function(){return Object(u.jsx)(o.a,{to:"/homepage"})}}),Object(u.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(o.a,{to:"/homepage"})}}),Object(u.jsx)(o.b,{path:"/homepage",children:Object(u.jsx)(C,{})}),Object(u.jsx)(o.b,{exact:!0,path:"/movies",children:Object(u.jsx)(R,{})}),Object(u.jsx)(o.b,{path:"/movies/:id",children:Object(u.jsx)(A,{})})]})})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(F,{})})}),document.getElementById("root"))},6:function(e,t,a){e.exports={details__card:"MovieDetailsPage_details__card__2q9cM",btn:"MovieDetailsPage_btn__2W9Rp",img:"MovieDetailsPage_img__3Lrf0",text:"MovieDetailsPage_text__JuwtW",title:"MovieDetailsPage_title__21I3c",average:"MovieDetailsPage_average__1hGQr",overview:"MovieDetailsPage_overview__274Qf",overview__text:"MovieDetailsPage_overview__text__3KX7I",genres:"MovieDetailsPage_genres__125ts",genres__text:"MovieDetailsPage_genres__text__3_mJp",link:"MovieDetailsPage_link__3GvFI",link__cast:"MovieDetailsPage_link__cast__4CUzN",link__reviews:"MovieDetailsPage_link__reviews__ihAEb",active:"MovieDetailsPage_active__2Tiqu"}}},[[43,1,2]]]);
//# sourceMappingURL=main.9b7a90ad.chunk.js.map