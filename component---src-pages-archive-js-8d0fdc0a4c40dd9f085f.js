"use strict";(self.webpackChunkc4dm_website=self.webpackChunkc4dm_website||[]).push([[231],{2015:function(e,t,a){var s=a(6540);t.A=e=>{let{text:t,backgroundColor:a,textColor:c,className:l}=e;return s.createElement("div",{className:`parallelogram has-background-${a} ${l}`},s.createElement("h1",{className:`is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered has-text-weight-bold has-text-${c}`},t))}},2399:function(e,t,a){var s=a(6540);t.A=e=>{const t=Object.keys(e).length;return s.createElement("div",{className:"card table-card columns"},s.createElement("div",{className:`card-image column ${t>1?"is-2-desktop":"is-full"} is-full-mobile`},s.createElement("div",{className:"media"},s.createElement("div",{className:"media-content"},e.first))),t>1?s.createElement("div",{className:`card-content column ${t>2?"is-one-fifth":"is-four-fifths"} is-full-mobile`},s.createElement("div",{className:"media"},s.createElement("div",{className:"media-content"},e.second))):void 0,t>2?s.createElement("div",{className:"card-content column is-three-fifths is-full-mobile"},s.createElement("div",{className:"media"},s.createElement("div",{className:"media-content"},e.third))):void 0)}},3229:function(e,t,a){a.r(t);var s=a(4794),c=a(6540),l=a(3895),r=a(2015),i=a(2399);t.default=e=>{let{pageContext:t}=e;const{breadcrumb:{crumbs:a}}=t,n=(0,s.useStaticQuery)("2927640795");return c.createElement(l.A,{name:"Archive",crumbs:a},c.createElement("section",{className:"section"},c.createElement(r.A,{text:"Archive",backgroundColor:"primary",textColor:"white",className:"mb-6"}),c.createElement("p",{className:"title is-4 pt-5"},"Archive Entries"),n.archive.nodes.map((e=>{return c.createElement("div",{className:"card-image row is-three-fifths pt-3",key:e.id},c.createElement(s.Link,{to:e.fields.slug},c.createElement(i.A,{first:null,second:(t=e.frontmatter.title,c.createElement(c.Fragment,null,c.createElement("p",{className:"title is-4"},t||"New Entry"," "),c.createElement("div",{className:"card-footer p-2 has-text-centered is-align-self-center"},"Read More")))})));var t}))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-8d0fdc0a4c40dd9f085f.js.map