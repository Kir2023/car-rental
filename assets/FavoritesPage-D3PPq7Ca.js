import{u as i,b as a,j as e,n as s}from"./index-D_2K6hqb.js";import{i as r,e as p,f as d}from"./CarsList.styled-yrxLeb2j.js";const x=i.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${t=>t.$url||"none"};
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`,m=i.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${t=>t.$bottom||"20px"};
  margin-top: ${t=>t.$top||"0px"};

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: ${t=>t.$bottom||"30px"};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
    margin-bottom: ${t=>t.$bottom||"50px"};
  }
`,c=i.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-main);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`,h=()=>{const t=a(r);return e.jsx(x,{children:e.jsx(m,{$top:"50px",children:(t==null?void 0:t.length)>0?e.jsx(p,{children:t==null?void 0:t.map((n,o)=>e.jsx(d,{car:n,index:o},n.id))}):e.jsx(c,{children:e.jsxs("p",{children:["Please select your favorite cars in the"," ",e.jsx(s,{to:"/catalog",children:"Сatalog"}),"."]})})})})};export{h as default};
