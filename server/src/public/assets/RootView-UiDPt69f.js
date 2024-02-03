import{s as o,j as n,S as s,a as i,B as e,u as a,b as r,H as c,r as d,O as l,F as x}from"./index-DfkM8Vo7.js";const u=o("div")`
	.bouncing-loader{
		display: flex;
		justify-content: center;
	}

	.bouncing-loader > div {
		width: 16px;
		height: 16px;
		margin: 3px 6px;
		border-radius: 50%;
		background-color: #ffffff;
		opacity: 1;
		animation: bouncing-loader 0.6s infinite alternate;
	}

	@keyframes bouncing-loader {
		to {
			opacity: 0.1;
			transform: translateY(-16px);
		}
	}

	.bouncing-loader > div:nth-of-type(2) {
		animation-delay: 0.2s;
	}

	.bouncing-loader > div:nth-of-type(3) {
		animation-delay: 0.4s;
	}
`;function h(){return n.jsx(u,{children:n.jsxs("div",{className:"bouncing-loader",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]})})}function j(){return n.jsxs(s,{justifyContent:"center",alignItems:"center",zIndex:10,sx:{position:"absolute",width:"100vw",height:"100vh",backgroundColor:"custom.theme.lightGreen"},children:[n.jsx("img",{src:i,alt:"Stitch Sense Logo"}),n.jsx(e,{mt:5,children:n.jsx(h,{})})]})}function g(){const t=a().pathname==="/";return n.jsxs(n.Fragment,{children:[n.jsx(r,{}),!t&&n.jsx(c,{}),n.jsx(d.Suspense,{fallback:n.jsx(j,{}),children:n.jsx(e,{component:"main",children:n.jsx(l,{})})}),n.jsx(x,{})]})}export{g as default};
