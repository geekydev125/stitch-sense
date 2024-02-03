import{j as e,B as t,x as r,T as a,C as p,l as m,G as i,z as c}from"./index-9FoZLJz1.js";import{i as u}from"./isTitledView-0dYGctDo.js";import{H as h}from"./GreenButton-wS0pAd4W.js";import{e as x,S as g}from"./SimpleEmployeeCard-NZuHUteP.js";import{C as l}from"./CustomDivider-l_Pd-D1f.js";import{C as f}from"./CallToActionSection--CNxdaFb.js";const j="/assets/missing-photo-x4rKnylz.jpg";function b({firstName:s,lastName:n,position:d,imageSrc:o}){return e.jsxs(t,{children:[e.jsx(t,{component:"img",src:o?`${r("employees",o)}`:j,alt:`${s} ${n} Photo`,sx:{width:"100%",height:{xs:"300px",sm:"400px",lg:"500px"},objectFit:"cover"},loading:"lazy"}),e.jsxs(t,{textAlign:"center",color:"custom.theme.darkGray",mt:2,mb:4,children:[e.jsxs(a,{textTransform:"uppercase",variant:"h5",component:"p",fontWeight:"500",children:[s," ",n]}),e.jsx(a,{variant:"body1",component:"p",children:d})]})]})}const v=[{firstName:"Ganimir",lastName:"Vangelov",position:"Chief Operations Officer",imageSrc:"ganimir-vangelov.jpg"},{firstName:"Chavdar",lastName:"Dobrev",position:"Chief Operations Officer",imageSrc:"chavdar-dobrev.jpg"},{firstName:"Plamen",lastName:"Petrov",position:"Chief Operations Officer",imageSrc:"plamen-petrov.jpg"},{firstName:"Name",lastName:"Name",position:"Fashion Designer",imageSrc:null},{firstName:"Name",lastName:"Name",position:"Designer",imageSrc:null},{firstName:"Name",lastName:"Name",position:"Clothing Operations Manager",imageSrc:null}];function y(){return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"About",description:"Learn about Stitch Sense's story, values, and commitment to excellence in clothing manufacturing, catering to wholesalers and retailers with dedication and expertise."}),e.jsx(t,{mt:5,mb:{xs:3,md:8},children:e.jsxs(p,{children:[e.jsxs(t,{p:{xs:1,md:5},component:"section",children:[e.jsxs(a,{variant:"body1",component:"p",textAlign:"justify",color:"custom.theme.darkGray",children:["With ",e.jsx(t,{component:"span",textTransform:"uppercase",fontWeight:"bold",children:"over a decade of expertise in the dynamic realm of fashion"}),", we proudly stand as a seasoned clothing manufacturer. Our commitment to excellence has propelled us into various facets of the industry."]}),e.jsx("br",{}),e.jsx(a,{variant:"body1",component:"p",textAlign:"justify",color:"custom.theme.darkGray",children:"Functioning as a premier white-label provider, our clientele spans diverse retail landscapes—from mass and specialty outlets to department stores, off-price retailers, and cutting-edge e-commerce platforms. Our core focus revolves around ensuring rapid market delivery and adopting direct-to-consumer strategies."}),e.jsx("br",{}),e.jsxs(a,{variant:"body1",component:"p",pb:2,textAlign:"justify",color:"custom.theme.darkGray",children:["Based in Europe, we are the creative force behind renowned clothing brands such as ",e.jsx(t,{component:"span",fontWeight:"bold",children:"Badinka, CandyCatz and RaveKitties"}),". For more than 10 years, these brands have curated captivating fashion experiences for our delighted customers, showcasing our unwavering dedication to style and quality."]})]}),e.jsxs(t,{component:"section",children:[e.jsx(m,{title:"OUR IMPACT ON EMPLOYEES",variant:"h5",justify:"left",p:2,mb:2}),e.jsx(i,{container:!0,spacing:{xs:1,md:2},children:x.map(s=>e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsx(g,{...s})},c()))})]}),e.jsx(l,{mt:{xs:3,md:6},mb:{xs:3,md:3}}),e.jsxs(t,{component:"section",children:[e.jsx(m,{title:"OUR TEAM",variant:"h5",justify:"left",p:2,mb:2}),e.jsx(i,{container:!0,spacing:{xs:1,md:2},children:v.map(s=>e.jsx(i,{item:!0,xs:6,sm:4,children:e.jsx(b,{...s})},c()))})]}),e.jsx(l,{mt:{xs:1,md:3},mb:{xs:4,md:5}}),e.jsx(f,{})]})})]})}const k=u(y,{viewTitle:"About Us",imageSrcSmallScreen:r("title-backgrounds","about-background-small-screen.jpg"),imageSrcLargeScreen:r("title-backgrounds","about-background-large-screen.jpg")});export{k as default};
