import{u as i,e as P,r as C,j as e,l as S,m as T,a as A,b as D,o as G,p as H}from"./index-CasB4ESn.js";const N=i.li`
  display: flex;
  width: 100%;
  width: 274px;
  height: 426px;
  flex-basis: calc((100% - 3 * 29px) / 4);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
`,R=i.div`
  display: flex;
  width: 100%;
  height: 354px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`,q=i.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,U=i.img`
  position: absolute;
  top: 0;
  right: -65px;
  height: 268px;
`,O=i.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
`,Y=i.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 8px;
`,$=i.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`,Z=i.h3`
  font-size: inherit;
  font-weight: inherit;
`,m=i.span`
  color: #3470ff;
`,M=i.div`
  display: flex;
  height: auto;
  gap: 4px;
  flex-direction: column;
`,h=i.ul`
  display: inline-flex;
  height: 28px;
  font-size: 12px;
  gap: 6px;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;
`,s=i.li`
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
`,W=i.button`
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
`,K="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='icon-chevron-down'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3.2'%20d='m8%2012%208%208%208-8'/%3e%3c/symbol%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M27.787%206.147a7.345%207.345%200%200%200-5.187-2.15%207.33%207.33%200%200%200-5.187%202.15L16%207.56l-1.413-1.413a7.333%207.333%200%200%200-10.374%200%207.333%207.333%200%200%200%200%2010.374L16%2028.308l11.787-11.787a7.345%207.345%200%200%200%202.15-5.187%207.33%207.33%200%200%200-2.15-5.187z'/%3e%3c/symbol%3e%3csymbol%20id='icon-x'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.4'%20d='M24%208%208%2024M8%208l16%2016'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",de=t=>t.cars.cars,pe=t=>t.cars.allCars,xe=t=>t.cars.carsBrands,he=t=>t.cars.isLoading,J=t=>t.favoriteCars.favorites,ge=t=>t.filter.filter,fe=t=>t.filter.filterCars,Q=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`,V=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  height: 752;
`,X=i.svg`
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
`,_=({children:t})=>{const o=document.getElementById("portal-root");return o?P.createPortal(t,o):(console.error("Portal root element not found. Please create a div with id='portal-root' in your HTML."),null)},ee=({onClick:t,children:o})=>{const n=l=>{l.code==="Escape"&&t()},r=()=>{t()},c=l=>{l.currentTarget===l.target&&t()};return C.useEffect(()=>(window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)})),e.jsx(_,{children:e.jsx(Q,{onClick:c,children:e.jsxs(V,{children:[e.jsx(X,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:r,children:e.jsx("path",{d:"M24 8 8 24M8 8l16 16"})}),o]})})})},ie=i.div`
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 24px;
`,te=i.div`
  display: flex;
  width: 100%;
  height: 604px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`,se=i.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  background: #f3f3f2;
`,oe=i.img`
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
`,ne=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`,B=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,re=i.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`,le=i.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.42;
  height: 40px;
  overflow-y: scroll;
`,E=i.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`,I=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #363535;
`,j=i.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`,ce=({car:t})=>{const{id:o,make:n,model:r,year:c,img:l,rentalPrice:L,mileage:w,type:F,functionalities:g,address:f,fuelConsumption:z,engineSize:u,description:y,accessories:p,rentalConditions:b}=t,v=f==null?void 0:f.split(", ").slice(-2),x=b.split(`
`),k=a=>a.split(": ");return e.jsxs(ie,{children:[e.jsxs(te,{children:[e.jsx(se,{children:e.jsx(oe,{src:l||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU",alt:n})}),e.jsxs(ne,{children:[e.jsxs(B,{children:[e.jsxs(re,{children:[n,e.jsxs(m,{children:[" ",r]}),", ",c]}),e.jsxs(M,{children:[e.jsxs(h,{children:[e.jsx(s,{children:v[0]}),e.jsx(s,{children:v[1]}),e.jsxs(s,{children:["Id: ",o]}),e.jsxs(s,{children:["Year: ",c]}),e.jsxs(s,{children:["Type: ",F]})]}),e.jsxs(h,{children:[e.jsxs(s,{children:["Fuel Consumption: ",z]}),e.jsxs(s,{children:["Engine Size: ",u]})]})]}),e.jsx(le,{children:y})]}),e.jsxs(B,{children:[e.jsx(E,{children:"Accessories and functionalities:"}),e.jsxs(M,{children:[e.jsx(h,{children:p==null?void 0:p.map((a,d)=>e.jsx(s,{children:a},d))}),e.jsx(h,{children:g==null?void 0:g.map((a,d)=>e.jsx(s,{children:a},d))})]})]}),e.jsxs(B,{children:[e.jsx(E,{children:"Rental Conditions:"}),e.jsxs(M,{$gap:"8px",children:[e.jsxs(I,{children:[e.jsxs(j,{children:[k(x[0])[0],":"," ",e.jsx(m,{children:k(x[0])[1]})]}),e.jsx(j,{children:x[1]})]}),e.jsxs(I,{children:[e.jsx(j,{children:x[2]}),e.jsxs(j,{children:["Mileage: ",e.jsx(m,{children:S(w)})]}),e.jsxs(j,{children:["Price: ",e.jsxs(m,{children:[T(L),"$"]})]})]})]})]})]})]}),e.jsx(W,{width:"168px",onClick:()=>window.location.href="tel:+380730000000",children:"Rental car"})]},o)},ue=({car:t})=>{const o=A(),n=D(J),{id:r,make:c,model:l,year:L,img:w,rentalPrice:F,rentalCompany:g,type:f,functionalities:z,address:u}=t,y=u==null?void 0:u.split(", ").slice(-2),[p,b]=C.useState(!1),[v,x]=C.useState(!1);C.useEffect(()=>{n!=null&&n.some(d=>d.id===r)?b(!0):b(!1)},[n,r]);const k=()=>{o(p?G(r):H(t))},a=()=>{x(d=>!d)};return e.jsxs(N,{children:[v&&e.jsx(ee,{onClick:a,children:e.jsx(ce,{car:t},r)}),e.jsxs(R,{children:[e.jsxs(q,{children:[e.jsx(U,{src:w||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU",alt:c}),e.jsx(O,{onClick:k,fill:p?"#3470FF":"none",stroke:p?"#3470FF":"#FFF",children:e.jsx("use",{href:`${K}#icon-heart`})})]}),e.jsxs(Y,{children:[e.jsxs($,{children:[e.jsxs(Z,{children:[c,e.jsxs(m,{children:[" ",l]}),", ",L]}),e.jsx("p",{children:F})]}),e.jsxs(M,{children:[e.jsxs(h,{children:[e.jsx(s,{children:y[0]}),e.jsx(s,{children:y[1]}),e.jsx(s,{children:g}),e.jsx(s,{children:"Premium"})]}),e.jsxs(h,{children:[e.jsx(s,{children:f}),e.jsx(s,{children:c}),e.jsx(s,{children:r}),e.jsx(s,{children:z[0]})]})]})]})]}),e.jsx(W,{onClick:a,children:"Learn more"})]},r)},je=i.section`
  margin: 0 auto;
  width: 100%;
`,me=i.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: 0 auto;
  padding: 0px 128px;
`,we=i.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 40px;
  color: #121417;
  margin: 0 auto;
`,ye=i.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`,be=i.p`
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
`;export{me as C,we as E,be as L,je as S,de as a,pe as b,fe as c,ge as d,ye as e,ue as f,xe as g,X as h,K as i,J as j,he as s};
