"use strict";(self.webpackChunkfunparadigm=self.webpackChunkfunparadigm||[]).push([[8460],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},189:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Fluid Simulation",u={unversionedId:"softwares/noodlesplate/samples/fluid_simu",id:"softwares/noodlesplate/samples/fluid_simu",title:"Fluid Simulation",description:"Test Case : Fluid Simu 2d",source:"@site/docs/softwares/noodlesplate/samples/fluid_simu.md",sourceDirName:"softwares/noodlesplate/samples",slug:"/softwares/noodlesplate/samples/fluid_simu",permalink:"/blog_funparadigm/docs/softwares/noodlesplate/samples/fluid_simu",editUrl:"https://blog.funparadigm.com/tree/main/packages/create-docusaurus/templates/shared/docs/softwares/noodlesplate/samples/fluid_simu.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fluid Height map",permalink:"/blog_funparadigm/docs/softwares/noodlesplate/samples/fluid_height_map"},next:{title:"Protean Cloud",permalink:"/blog_funparadigm/docs/softwares/noodlesplate/samples/protean_cloud"}},p={},c=[],f={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fluid-simulation"},"Fluid Simulation"),(0,i.kt)("p",null,"Test Case : Fluid Simu 2d"),(0,i.kt)("p",null,"this shader is a fluid simulation\nTo be opened in NoodlesPlate"),(0,i.kt)("p",null,"this shader demonstrate the different features :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tunable iterations count selectable via comboboxvia "),(0,i.kt)("li",{parentName:"ul"},"uniforms tuning"),(0,i.kt)("li",{parentName:"ul"},"use of many fbo attachements"),(0,i.kt)("li",{parentName:"ul"},"multipass")),(0,i.kt)("p",null,"Some pictures of what i rely :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pict0",src:n(8943).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"Pict1",src:n(1810).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"Pict2",src:n(1711).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"Pict3",src:n(7819).Z,width:"1280",height:"720"})))}d.isMDXComponent=!0},8943:function(e,t,n){t.Z=n.p+"assets/images/pict0-b868292ffa16329089669e30d528a6ea.png"},1810:function(e,t,n){t.Z=n.p+"assets/images/pict1-5b3867647d3d1d1829bb05e5b9b5b08e.png"},1711:function(e,t,n){t.Z=n.p+"assets/images/pict2-7daf3ae944b63f83192770c32618f188.png"},7819:function(e,t,n){t.Z=n.p+"assets/images/pict3-8fd6e5668c476abe683477bb108d8b60.png"}}]);