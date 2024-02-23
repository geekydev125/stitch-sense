import{ah as _,ai as T,aj as b,ak as w,r as O,l as D,s as W,B as m,n as $,j as t,C as P,x as v,T as g,o as S}from"./index-PUloDbvA.js";import{a as R,w as q}from"./GreenButton-XMsSbn_2.js";const M=Object.freeze(Object.defineProperty({__proto__:null,default:_,private_createBreakpoints:T},Symbol.toStringTag,{value:"Module"}));var d={};const B=b(M);var h={};const C=b(w);var x;function E(){if(x)return h;x=1,Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var r=c(O),u=C;function s(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(s=function(a){return a?n:o})(e)}function c(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=s(o);if(n&&n.has(e))return n.get(e);var a={__proto__:null},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var p=k?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(a,i,p):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}function l(e){return Object.keys(e).length===0}function j(e=null){const o=r.useContext(u.ThemeContext);return!o||l(o)?e:o}return h.default=j,h}var f,y=D;Object.defineProperty(d,"__esModule",{value:!0});d.systemDefaultTheme=f=d.default=void 0;var z=y(B),L=y(E());const N=d.systemDefaultTheme=(0,z.default)();function I(r=N){return(0,L.default)(r)}f=d.default=I;const U=W(m)`
    background-repeat: no-repeat;
    background-attachment: fixed; 

    position: relative;
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        background-color: rgba(0,0,0,0.5);
    }

    .logo {
        width: auto;
        max-height: 150px;
    }
`;function V({viewTitle:r,imageSrcSmallScreen:u,imageSrcLargeScreen:s}){const c=f(),l=$(c.breakpoints.down("sm"));return t.jsx(U,{sx:{backgroundImage:{xs:`url(${u})`,lg:`url(${s})`},backgroundSize:"contain",minHeight:{xs:"15vh",sm:"20vh",md:"20vh",lg:"26vh"}},children:t.jsx(m,{className:"overlay",height:"100%",children:t.jsx(P,{sx:{height:"100%"},children:t.jsxs(v,{pl:{md:5},height:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",children:[l?t.jsx(g,{variant:"h2",component:"h2",color:"custom.theme.almostWhite",children:r}):t.jsx(g,{variant:"h3",component:"h2",color:"custom.theme.almostWhite",children:r}),t.jsx(m,{component:"img",className:"logo",alt:"Stitch Sense Logo",src:S,height:{xs:70,md:100}})]})})})})}function G(r,{viewTitle:u,imageSrcSmallScreen:s,imageSrcLargeScreen:c}){return l=>t.jsxs(t.Fragment,{children:[t.jsx(V,{viewTitle:u,imageSrcSmallScreen:s,imageSrcLargeScreen:c}),t.jsx(v,{component:"main",flexGrow:1,sx:{background:`url(${R})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"top right"},children:t.jsx(m,{sx:{background:`url(${q})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"bottom left"},children:t.jsx(r,{...l})})})]})}export{G as i};
