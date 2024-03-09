import{u as t,e as P,r as k,j as e,l as S,m as T,a as A,b as D,o as G,p as H}from"./index-D_2K6hqb.js";const N=t.li`
  display: flex;
  width: 100%;
  width: 274px;
  height: 426px;
  flex-basis: calc((100% - 3 * 29px) / 4);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
`,R=t.div`
  display: flex;
  width: 100%;
  height: 354px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`,q=t.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,U=t.img`
  position: absolute;
  top: 0;
  right: -65px;
  height: 268px;
`,O=t.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.667px;
`,Y=t.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 8px;
`,Z=t.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`,$=t.h3`
  font-size: inherit;
  font-weight: inherit;
`,m=t.span`
  color: #3470ff;
`,M=t.div`
  display: flex;
  height: auto;
  gap: 4px;
  flex-direction: column;
`,h=t.ul`
  display: inline-flex;
  height: 28px;
  font-size: 12px;
  gap: 6px;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;
`,s=t.li`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
      content: "";
    }
  }
`,B=t.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,ae=i=>i.cars.cars,de=i=>i.cars.allCars,pe=i=>i.cars.carsBrands,xe=i=>i.cars.isLoading,K=i=>i.favoriteCars.favorites,he=i=>i.filter.filter,ge=i=>i.filter.filterCars,J=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`,Q=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  height: 752;
`,V=t.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: #121417;
  top: 16px;
  right: 16px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.4px;
  cursor: pointer;
`,X=({children:i})=>{const n=document.getElementById("portal-root");return n?P.createPortal(i,n):(console.error("Portal root element not found. Please create a div with id='portal-root' in your HTML."),null)},_=({onClick:i,children:n})=>{const o=l=>{l.code==="Escape"&&i()},r=()=>{i()},c=l=>{l.currentTarget===l.target&&i()};return k.useEffect(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),e.jsx(X,{children:e.jsx(J,{onClick:c,children:e.jsxs(Q,{children:[e.jsx(V,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:r,children:e.jsx("path",{d:"M24 8 8 24M8 8l16 16"})}),n]})})})},ee=t.div`
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 24px;
`,te=t.div`
  display: flex;
  width: 100%;
  height: 604px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`,ie=t.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  background: #f3f3f2;
`,se=t.img`
  position: absolute;
  top: -25px;
  right: 0;
  width: 461px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`,ne=t.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`,E=t.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,oe=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`,re=t.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.42;
  height: 40px;
  overflow-y: scroll;
`,I=t.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`,W=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #363535;
`,j=t.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`,le=({car:i})=>{const{id:n,make:o,model:r,year:c,img:l,rentalPrice:L,mileage:w,type:F,functionalities:g,address:f,fuelConsumption:z,engineSize:u,description:y,accessories:p,rentalConditions:b}=i,v=f==null?void 0:f.split(", ").slice(-2),x=b.split(`
`),C=a=>a.split(": ");return e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(ie,{children:e.jsx(se,{src:l||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU",alt:o})}),e.jsxs(ne,{children:[e.jsxs(E,{children:[e.jsxs(oe,{children:[o,e.jsxs(m,{children:[" ",r]}),", ",c]}),e.jsxs(M,{children:[e.jsxs(h,{children:[e.jsx(s,{children:v[0]}),e.jsx(s,{children:v[1]}),e.jsxs(s,{children:["Id: ",n]}),e.jsxs(s,{children:["Year: ",c]}),e.jsxs(s,{children:["Type: ",F]})]}),e.jsxs(h,{children:[e.jsxs(s,{children:["Fuel Consumption: ",z]}),e.jsxs(s,{children:["Engine Size: ",u]})]})]}),e.jsx(re,{children:y})]}),e.jsxs(E,{children:[e.jsx(I,{children:"Accessories and functionalities:"}),e.jsxs(M,{children:[e.jsx(h,{children:p==null?void 0:p.map((a,d)=>e.jsx(s,{children:a},d))}),e.jsx(h,{children:g==null?void 0:g.map((a,d)=>e.jsx(s,{children:a},d))})]})]}),e.jsxs(E,{children:[e.jsx(I,{children:"Rental Conditions:"}),e.jsxs(M,{$gap:"8px",children:[e.jsxs(W,{children:[e.jsxs(j,{children:[C(x[0])[0],":"," ",e.jsx(m,{children:C(x[0])[1]})]}),e.jsx(j,{children:x[1]})]}),e.jsxs(W,{children:[e.jsx(j,{children:x[2]}),e.jsxs(j,{children:["Mileage: ",e.jsx(m,{children:S(w)})]}),e.jsxs(j,{children:["Price: ",e.jsxs(m,{children:[T(L),"$"]})]})]})]})]})]})]}),e.jsx(B,{width:"168px",onClick:()=>window.location.href="tel:+380730000000",children:"Rental car"})]},n)},fe=({car:i})=>{const n=A(),o=D(K),{id:r,make:c,model:l,year:L,img:w,rentalPrice:F,rentalCompany:g,type:f,functionalities:z,address:u}=i,y=u==null?void 0:u.split(", ").slice(-2),[p,b]=k.useState(!1),[v,x]=k.useState(!1);k.useEffect(()=>{o!=null&&o.some(d=>d.id===r)?b(!0):b(!1)},[o,r]);const C=()=>{n(p?G(r):H(i))},a=()=>{x(d=>!d)};return e.jsxs(N,{children:[v&&e.jsx(_,{onClick:a,children:e.jsx(le,{car:i},r)}),e.jsxs(R,{children:[e.jsxs(q,{children:[e.jsx(U,{src:w||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU",alt:c}),e.jsx(O,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:C,fill:p?"#3470FF":"none",stroke:p?"#3470FF":"#FFF",children:e.jsx("path",{d:"M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"})})]}),e.jsxs(Y,{children:[e.jsxs(Z,{children:[e.jsxs($,{children:[c,e.jsxs(m,{children:[" ",l]}),", ",L]}),e.jsx("p",{children:F})]}),e.jsxs(M,{children:[e.jsxs(h,{children:[e.jsx(s,{children:y[0]}),e.jsx(s,{children:y[1]}),e.jsx(s,{children:g}),e.jsx(s,{children:"Premium"})]}),e.jsxs(h,{children:[e.jsx(s,{children:f}),e.jsx(s,{children:c}),e.jsx(s,{children:r}),e.jsx(s,{children:z[0]})]})]})]})]}),e.jsx(B,{onClick:a,children:"Learn more"})]},r)},ue=t.section`
  margin: 0 auto;
  width: 100%;
`,je=t.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: 0 auto;
  padding: 0px 128px;
`,me=t.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 40px;
  color: #121417;
  margin: 0 auto;
`,we=t.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`,ye=t.p`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;export{je as C,me as E,ye as L,ue as S,ae as a,de as b,ge as c,he as d,we as e,fe as f,pe as g,V as h,K as i,xe as s};
