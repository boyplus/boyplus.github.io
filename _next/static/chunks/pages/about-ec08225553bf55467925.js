(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5683:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(5893),i=n(5988),s=n(7294),r=n(9008),o=function(){return(0,a.jsx)(s.Fragment,{children:(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"Thanaphon"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"title",content:"Portfolio"}),(0,a.jsx)("meta",{name:"description",content:"Portfolio of Thanaphon Sombunkaeo"})]})})},c=n(1664),l=[".nav.jsx-2028298055{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".item.jsx-2028298055{font-size:18px;font-weight:300;opacity:0.7;-webkit-transition:0.25s;transition:0.25s;width:120px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".item.jsx-2028298055:hover{opacity:1;-webkit-transition:0.25s;transition:0.25s;}",".active.jsx-2028298055{font-weight:600;opacity:1;}"];l.__hash="2028298055";var d=l,x=function(e){var t=e.page;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-".concat(d.__hash)+" nav",children:[{label:"Home",link:"/",page:"home"},{label:"About me",link:"/about",page:"about"},{label:"Project",link:"/project",page:"project"},{label:"Contact",link:"/contact",page:"contact"}].map((function(e){return(0,a.jsx)("div",{className:"jsx-".concat(d.__hash)+" "+"item ".concat(e.page===t?"active":""),children:(0,a.jsx)(c.default,{href:e.link,children:e.label})},e.label)}))}),(0,a.jsx)(i.default,{id:d.__hash,children:d})]})},p=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-1159898217 box",children:(0,a.jsx)("div",{className:"jsx-1159898217 content",children:"All right reserved \xa9 by Thanaphon Sombunkaeo"})}),(0,a.jsx)(i.default,{id:"1159898217",children:[".box.jsx-1159898217{background-color:rgba(245,245,245,0.5);height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".content.jsx-1159898217{font-weight:400;font-size:18px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;text-align:center;}"]})]})},m=function(e){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{lang:"en",className:"jsx-2906427333",children:[(0,a.jsx)(o,{}),(0,a.jsxs)("div",{className:"jsx-2906427333 contentContainer",children:[(0,a.jsx)(x,{page:e.page}),(0,a.jsx)("div",{style:{minHeight:"80vh"},className:"jsx-2906427333",children:e.children})]}),(0,a.jsx)("div",{className:"jsx-2906427333 footerContainer",children:(0,a.jsx)(p,{})})]}),(0,a.jsx)(i.default,{id:"2906427333",children:[".contentContainer.jsx-2906427333{min-height:90vh;padding:40px 40px 0 40px;}",".footerContainer.jsx-2906427333{min-height:10vh;}","@media only screen and (max-width:720px){.contentContainer.jsx-2906427333{padding:40px 15px 0 15px;}}"]})]})}},6071:function(e,t,n){"use strict";var a=n(3038),i=n(862);t.default=void 0;var s=i(n(7294)),r=n(1689),o=n(2441),c=n(5749),l={};function d(e,t,n,a){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var x=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),i=n&&n.asPath||"/",x=s.default.useMemo((function(){var t=(0,r.resolveHref)(i,e.href,!0),n=a(t,2),s=n[0],o=n[1];return{href:s,as:e.as?(0,r.resolveHref)(i,e.as):o||s}}),[i,e.href,e.as]),p=x.href,m=x.as,u=e.children,h=e.replace,j=e.shallow,f=e.scroll,g=e.locale;"string"===typeof u&&(u=s.default.createElement("a",null,u));var b=s.Children.only(u),y=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),v=a(w,2),k=v[0],N=v[1],T=s.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);(0,s.useEffect)((function(){var e=N&&t&&(0,r.isLocalURL)(p),a="undefined"!==typeof g?g:n&&n.locale,i=l[p+"%"+m+(a?"%"+a:"")];e&&!i&&d(n,p,m,{locale:a})}),[m,p,N,g,t,n]);var C={ref:T,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[i?"replace":"push"](n,a,{shallow:s,locale:c,scroll:o}))}(e,n,p,m,h,j,f,g)},onMouseEnter:function(e){(0,r.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,p,m,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var S="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&(0,r.getDomainLocale)(m,S,n&&n.locales,n&&n.domainLocales);C.href=M||(0,r.addBasePath)((0,r.addLocale)(m,S,n&&n.defaultLocale))}return s.default.cloneElement(b,C)};t.default=x},5749:function(e,t,n){"use strict";var a=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!r,c=(0,i.useRef)(),l=(0,i.useState)(!1),d=a(l,2),x=d[0],p=d[1],m=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||x||e&&e.tagName&&(c.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:i,elements:a}),n}(n),i=a.id,s=a.observer,r=a.elements;return r.set(e,t),s.observe(e),function(){r.delete(e),s.unobserve(e),0===r.size&&(s.disconnect(),o.delete(i))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,x]);return(0,i.useEffect)((function(){if(!r&&!x){var e=(0,s.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[x]),[m,x]};var i=n(7294),s=n(8391),r="undefined"!==typeof IntersectionObserver;var o=new Map},6149:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(5893),i=n(5988),s=n(7294),r=n(5683),o=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-147169515 container",children:[(0,a.jsx)("img",{src:"/images/profile_pic.jpeg",width:"200px",height:"200px",alt:"profile picture",className:"jsx-147169515 profilePic"}),(0,a.jsxs)("div",{className:"jsx-147169515 right",children:[(0,a.jsx)("h1",{className:"jsx-147169515 header name",children:"Thanaphon Sombunkaeo (Boy)"}),(0,a.jsxs)("div",{className:"jsx-147169515 fullStack",children:[(0,a.jsx)("div",{className:"jsx-147169515 line"}),(0,a.jsx)("h3",{style:{color:"grey",marginLeft:"10px"},className:"jsx-147169515",children:"Full stack web developer"})]}),(0,a.jsx)("p",{className:"jsx-147169515 text",children:"Hi everyone, I am a sophomore student in Computer Science at School of Information Techonology, King Mongkut's University of Technology Thonburi (KMUTT)."}),(0,a.jsx)("p",{className:"jsx-147169515 text",children:"I am interested in Algorithms, Data structures, and full stack web development."})]})]}),(0,a.jsx)(i.default,{id:"147169515",children:[".container.jsx-147169515{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:40px;margin-bottom:40px;}",".line.jsx-147169515{width:7px;height:30px;background-color:grey;}",".fullStack.jsx-147169515{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px 0;}",".profilePic.jsx-147169515{border-radius:50%;margin:5px;}",".right.jsx-147169515{padding-left:60px;max-width:60%;}",".name.jsx-147169515{font-size:2.5rem;}",".text.jsx-147169515{font-size:20px;margin-bottom:20px;}","@media only screen and (max-width:1100px){.right.jsx-147169515{max-width:100%;}}","@media only screen and (max-width:900px){.container.jsx-147169515{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.right.jsx-147169515{padding-left:0;}.name.jsx-147169515{text-align:center;font-size:2rem;}}"]})]})},c=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-171343 box",children:[(0,a.jsx)("h1",{className:"jsx-171343 blue",children:"Education"}),(0,a.jsxs)("div",{className:"jsx-171343 schoolContainer",children:[(0,a.jsxs)("div",{className:"jsx-171343 card",children:[(0,a.jsx)("h2",{className:"jsx-171343",children:"King Mongkut's University of Technology Thonburi"}),(0,a.jsx)("p",{className:"jsx-171343 year",children:"2019 - Present"}),(0,a.jsx)("p",{style:{marginTop:"10px"},className:"jsx-171343",children:"I'm currently studying bachelor's second year of Computer Science at School of Information Technology."}),(0,a.jsx)("p",{style:{marginTop:"10px"},className:"jsx-171343",children:"Current GPAX : 3.85"})]}),(0,a.jsxs)("div",{className:"jsx-171343 card",children:[(0,a.jsx)("h2",{className:"jsx-171343",children:"Benjamarachutit Ratchaburi School"}),(0,a.jsx)("p",{className:"jsx-171343 year",children:"2012 - 2018"}),(0,a.jsx)("p",{style:{marginTop:"10px"},className:"jsx-171343",children:"Science-Mathmematics Program (Mathmematics gifted program)"}),(0,a.jsx)("p",{style:{marginTop:"10px"},className:"jsx-171343",children:"GPAX : 3.82"})]})]})]}),(0,a.jsx)(i.default,{id:"171343",children:[".schoolContainer.jsx-171343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".card.jsx-171343{width:50%;padding:20px 20px 0 0;}",".box.jsx-171343{margin-bottom:50px;}",".year.jsx-171343{opacity:0.7;margin-top:3px;}","@media only screen and (max-width:900px){.card.jsx-171343{width:100%;}}"]})]})},l=function(e){var t=e.title,n=e.year,r=e.description;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-1946277161 card",children:[(0,a.jsx)("h3",{className:"jsx-1946277161",children:t}),(0,a.jsx)("p",{className:"jsx-1946277161 year",children:n}),(0,a.jsx)("p",{className:"jsx-1946277161 description",children:r})]}),(0,a.jsx)(i.default,{id:"1946277161",children:[".card.jsx-1946277161{background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;padding:25px 20px;margin-bottom:20px;border-radius:3px;}",".card.jsx-1946277161:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);cursor:default;}",".year.jsx-1946277161{opacity:0.7;margin-top:5px;}",".description.jsx-1946277161{margin-top:10px;}"]})]})},d=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("h1",{className:"jsx-2983576072 blue",children:"Experiences"}),(0,a.jsx)("div",{className:"jsx-2983576072 content",children:[{title:"Computer Olympiad student",year:"2015 - 2018",description:"Informatics olympiad student at Silpakorn University in camp 1, 2, and 3 (National Competition)."},{title:"CS Mentor",year:"2020 - Present",description:"Mentor in Introduction to Programming and Web Application Development for first year student at SIT KMUTT."},{title:"Core team of DSC KMUTT",year:"2020 - Present",description:"Conten Creator who create content about Google services at Developer Student Clubs - KMUTT."},{title:"Computer Olympiad Tutor",year:"2020",description:"Teach students at Benjamarachutit Ratchaburi School. Produced 1 silver in 2020 Thailand Olympiad in Informatics."},{title:"Application Development Leader",year:"2020",description:"Term project in Integrated project I of Computer Science course. Project is online learning plafrom."}].map((function(e){var t=e.title,n=e.year,i=e.description;return(0,a.jsx)("div",{className:"jsx-2983576072 item",children:(0,a.jsx)(l,{title:t,year:n,description:i})},t)}))}),(0,a.jsx)(i.default,{id:"2983576072",children:[".item.jsx-2983576072{width:100%;padding-right:8%;margin-bottom:10px;}",".content.jsx-2983576072{display:grid;margin:20px 0;grid-template-columns:auto auto auto;}","@media only screen and (max-width:950px){.content.jsx-2983576072{grid-template-columns:auto auto;}}","@media only screen and (max-width:500px){.content.jsx-2983576072{grid-template-columns:auto;}.item.jsx-2983576072{padding-right:0;}}"]})]})},x=function(e){var t=e.text;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-1281563591 card",children:(0,a.jsx)("h3",{className:"jsx-1281563591",children:t})}),(0,a.jsx)(i.default,{id:"1281563591",children:[".card.jsx-1281563591{background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;width:150px;height:80px;padding:20px;margin-bottom:20px;border-radius:3px;}",".card.jsx-1281563591:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);cursor:default;}","@media only screen and (max-width:800px){.card.jsx-1281563591{margin:5px;}}","@media only screen and (max-width:350px){.card.jsx-1281563591{width:120px;}}"]})]})},p=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-344323845 container",children:[(0,a.jsx)("h1",{className:"jsx-344323845 blue",children:"Technology Skills"}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"jsx-344323845",children:(0,a.jsx)("div",{className:"jsx-344323845 content",children:["C","C++","Java","Python","HTML","CSS","Javascript","ReactJS","NextJS","VueJS","MongoDB","RDBMS","Docker"].map((function(e){return(0,a.jsx)(x,{text:e},e)}))})})]}),(0,a.jsx)(i.default,{id:"344323845",children:[".container.jsx-344323845{margin-bottom:50px;}",".content.jsx-344323845{width:95%;display:grid;margin-top:20px;grid-template-columns:auto auto auto auto auto;}","@media only screen and (max-width:950px){.content.jsx-344323845{grid-template-columns:auto auto auto;}}","@media only screen and (max-width:800px){.content.jsx-344323845{grid-template-columns:auto auto;}}"]})]})},m=function(e){var t=e.emoji,n=e.text,r=e.year,o=e.desc;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-1784160234 container",children:(0,a.jsx)("div",{className:"jsx-1784160234 card",children:(0,a.jsx)("div",{style:{display:"flex",flexDirection:"column"},className:"jsx-1784160234",children:(0,a.jsxs)("div",{className:"jsx-1784160234 content",children:[(0,a.jsx)("h3",{className:"jsx-1784160234",children:n}),(0,a.jsx)("p",{style:{color:"grey",marginTop:"5px"},className:"jsx-1784160234",children:r}),(0,a.jsxs)("p",{style:{marginTop:"10px",fontWeight:"500"},className:"jsx-1784160234",children:[(0,a.jsx)("span",{style:{marginRight:"8px",fontSize:"1.4rem"},className:"jsx-1784160234",children:t}),o]})]})})})}),(0,a.jsx)(i.default,{id:"1784160234",children:[".card.jsx-1784160234{background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;padding:20px;margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;width:100%;}",".card.jsx-1784160234:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);cursor:default;}",".container.jsx-1784160234{margin-top:30px;padding-right:8%;}","@media only screen and (max-width:500px){.container.jsx-1784160234{padding:0;}.card.jsx-1784160234{margin:0;}}"]})]})},u=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-142484523 container",children:[(0,a.jsx)("h1",{className:"jsx-142484523 blue",children:"Awards"}),(0,a.jsx)("div",{className:"jsx-142484523 content",children:[{emoji:"\ud83e\udd47",text:"Programming Competition Thailand National",year:"2019",desc:"Gold medal (1st place)"},{emoji:"\ud83e\udd49",text:"Thailand Olympaid in Informatics (TOI 14th)",year:"2019",desc:"Bronze medal (28th place)"},{emoji:"\ud83e\udd49",text:"Thailand Olympaid in Informatics (TOI 13th)",year:"2018",desc:"Bronze medal (42th place)"}].map((function(e){return(0,a.jsx)(m,{emoji:e.emoji,text:e.text,year:e.year,desc:e.desc},e.text)}))})]}),(0,a.jsx)(i.default,{id:"142484523",children:[".container.jsx-142484523{padding-bottom:50px;}",".content.jsx-142484523{display:grid;grid-template-columns:auto auto auto;}","@media only screen and (max-width:950px){.content.jsx-142484523{grid-template-columns:auto auto;}}","@media only screen and (max-width:500px){.content.jsx-142484523{grid-template-columns:auto;width:100%;}}"]})]})},h=function(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(r.Z,{page:"about",children:[(0,a.jsx)(o,{}),(0,a.jsxs)("div",{className:"jsx-3465826699 container",children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),(0,a.jsx)(p,{}),(0,a.jsx)(u,{})]})]}),(0,a.jsx)(i.default,{id:"3465826699",children:[".container.jsx-3465826699{margin:0 50px;}","@media only screen and (max-width:1100px){.container.jsx-3465826699{margin-left:0;}}","@media only screen and (max-width:900px){.container.jsx-3465826699{margin:10px 0 0 0;}}"]})]})}},8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(6149)}])},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[12,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);