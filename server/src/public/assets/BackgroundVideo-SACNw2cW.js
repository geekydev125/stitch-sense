import{r as n,j as e,S as r,y as i,B as a}from"./index-DfkM8Vo7.js";const d="/assets/stitching-hd-black-white-dYHfwPvm.mp4",u="/assets/video-poster-SOOHniPX.jpg";function l(o){const t=n.useRef(null),s=()=>{t.current!=null&&t.current.play()};return e.jsxs(r,{direction:"row",justifyContent:"flex-end",children:[e.jsx(i,{sx:{display:"none",zIndex:1},onClick:s,children:"Play Video"}),e.jsxs(a,{component:"video",poster:u,ref:t,sx:{height:{...o},margin:{xs:"0 auto",md:"0 0 0 auto"},pointerEvents:"none"},autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:[e.jsx("source",{src:d,type:"video/mp4"}),"Your browser does not support the video tag."]})]})}export{l as default};
