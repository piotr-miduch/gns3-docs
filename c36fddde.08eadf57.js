(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(2),o=r(9),i=(r(0),r(211)),a=r(213),u={id:"qemu-system-uuid",title:"Qemu system UUID",sidebar_label:"Qemu system UUID"},s={id:"emulators/qemu-system-uuid",isDocsHomePage:!1,title:"Qemu system UUID",description:"Like any real computer, Qemu attributes a UUID to the system. This is stored in the SMBIOS:",source:"@site/docs/emulators/qemu-system-uuid.md",permalink:"../docs/emulators/qemu-system-uuid",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/qemu-system-uuid.md",sidebar_label:"Qemu system UUID",sidebar:"someSidebar",previous:{title:"VPCS",permalink:"../docs/emulators/vpcs"},next:{title:"Contribute to GNS3",permalink:"../docs/contribute/contribute-to-gns3"}},c=[],l={rightToc:c};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Like any real computer, Qemu attributes a UUID to the system. This is stored in the SMBIOS:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://software.intel.com/en-us/Uniqueness-of-UUID"}),"https://software.intel.com/en-us/Uniqueness-of-UUID")),Object(i.b)("p",null,"Most of the time, you won\u2019t need to set a UUID yourself. However this information could be used by vendors (for example), to check for a valid licence."),Object(i.b)("p",null,"A UUID is generated by default for each node included in a project. This UUID is kept across machine reboots."),Object(i.b)("p",null,"To force a UUID, you will have to pass the ",Object(i.b)("inlineCode",{parentName:"p"},"-uuid")," option to the Qemu command line. This can be set in the advanced settings tab, when editing a nodes global configuration:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/emulators/qemu-system-uuid/1.jpg")}))}m.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,b=m["".concat(a,".").concat(f)]||m[f]||p[f]||i;return r?o.a.createElement(b,u(u({ref:t},c),{},{components:r})):o.a.createElement(b,u({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},212:function(e,t,r){"use strict";var n=r(0),o=r(52);t.a=function(){return Object(n.useContext)(o.a)}},213:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(76);var n=r(212),o=r(214);function i(e,t){var r=void 0===t?{}:t,i=r.forcePrependBaseUrl,a=void 0!==i&&i,u=r.absolute,s=void 0!==u&&u,c=Object(n.a)().siteConfig,l=(c=void 0===c?{}:c).baseUrl,m=void 0===l?"/":l,p=c.url;if(!e)return e;if(a)return m+e;if(!Object(o.a)(e))return e;var f=m+e.replace(/^\//,"");return s?p+f:f}},214:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))}}]);