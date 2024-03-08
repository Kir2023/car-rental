import{u as i,e as S,r as k,j as e,l as T,m as A,a as D,b as $,o as G,p as H}from"./index-BqtwjSbc.js";const N=i.li`
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
`,Z=i.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`,K=i.h3`
  font-size: inherit;
  font-weight: inherit;
`,j=i.span`
  color: #3470ff;
`,M=i.div`
  display: flex;
  height: auto;
  gap: 4px;
  flex-direction: column;
`,x=i.ul`
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
`,B=i.button`
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
`,P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='icon-chevron-down'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3.2'%20d='m8%2012%208%208%208-8'/%3e%3c/symbol%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M27.787%206.147a7.345%207.345%200%200%200-5.187-2.15%207.33%207.33%200%200%200-5.187%202.15L16%207.56l-1.413-1.413a7.333%207.333%200%200%200-10.374%200%207.333%207.333%200%200%200%200%2010.374L16%2028.308l11.787-11.787a7.345%207.345%200%200%200%202.15-5.187%207.33%207.33%200%200%200-2.15-5.187z'/%3e%3c/symbol%3e%3csymbol%20id='icon-x'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.4'%20d='M24%208%208%2024M8%208l16%2016'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",de=t=>t.cars.cars,pe=t=>t.cars.allCars,xe=t=>t.cars.carsBrands,he=t=>t.cars.isLoading,J=t=>t.favoriteCars.favorites,ge=t=>t.filter.filter,fe=t=>t.filter.filterCars,Q=i.div`
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
  top: ${t=>t.$top||"16px"};
  right: ${t=>t.$right||"16px"};
  cursor: pointer;
`,_=({children:t})=>{const n=document.getElementById("portal-root");return n?S.createPortal(t,n):(console.error("Portal root element not found. Please create a div with id='portal-root' in your HTML."),null)},ee=({onClick:t,children:n})=>{const o=l=>{l.code==="Escape"&&t()},r=()=>{t()},c=l=>{l.currentTarget===l.target&&t()};return k.useEffect(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),e.jsx(_,{children:e.jsx(Q,{onClick:c,children:e.jsxs(V,{children:[e.jsx(X,{onClick:r,children:e.jsx("use",{href:`${P}#icon-x`})}),n]})})})},ie=i.div`
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
`,ne=i.img`
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
`,oe=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`,E=i.div`
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
`,I=i.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`,W=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #363535;
`,u=i.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`,ce=({car:t})=>{const{id:n,make:o,model:r,year:c,img:l,rentalPrice:L,mileage:m,type:F,functionalities:h,address:g,fuelConsumption:z,engineSize:f,description:w,accessories:d,rentalConditions:y}=t,b=g==null?void 0:g.split(", ").slice(-2),p=y.split(`
`),v=a=>a.split(": ");return e.jsxs(ie,{children:[e.jsxs(te,{children:[e.jsx(se,{children:e.jsx(ne,{src:l||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU",alt:o})}),e.jsxs(oe,{children:[e.jsxs(E,{children:[e.jsxs(re,{children:[o,e.jsxs(j,{children:[" ",r]}),", ",c]}),e.jsxs(M,{children:[e.jsxs(x,{children:[e.jsx(s,{children:b[0]}),e.jsx(s,{children:b[1]}),e.jsxs(s,{children:["Id: ",n]}),e.jsxs(s,{children:["Year: ",c]}),e.jsxs(s,{children:["Type: ",F]})]}),e.jsxs(x,{children:[e.jsxs(s,{children:["Fuel Consumption: ",z]}),e.jsxs(s,{children:["Engine Size: ",f]})]})]}),e.jsx(le,{children:w})]}),e.jsxs(E,{children:[e.jsx(I,{children:"Accessories and functionalities:"}),e.jsxs(M,{children:[e.jsx(x,{children:d==null?void 0:d.map(a=>e.jsx(s,{children:a}))}),e.jsx(x,{children:h==null?void 0:h.map(a=>e.jsx(s,{children:a}))})]})]}),e.jsxs(E,{children:[e.jsx(I,{children:"Rental Conditions:"}),e.jsxs(M,{$gap:"8px",children:[e.jsxs(W,{children:[e.jsxs(u,{children:[v(p[0])[0],":"," ",e.jsx(j,{children:v(p[0])[1]})]}),e.jsx(u,{children:p[1]})]}),e.jsxs(W,{children:[e.jsx(u,{children:p[2]}),e.jsxs(u,{children:["Mileage: ",e.jsx(j,{children:T(m)})]}),e.jsxs(u,{children:["Price: ",e.jsxs(j,{children:[A(L),"$"]})]})]})]})]})]})]}),e.jsx(B,{width:"168px",onClick:()=>window.location.href="tel:+380730000000",children:"Rental car"})]},n)},ue=({car:t})=>{const n=D(),o=$(J),{id:r,make:c,model:l,year:L,img:m,rentalPrice:F,rentalCompany:h,type:g,functionalities:z,address:f}=t,w=f==null?void 0:f.split(", ").slice(-2),[d,y]=k.useState(!1),[b,p]=k.useState(!1);k.useEffect(()=>{o!=null&&o.some(C=>C.id===r)?y(!0):y(!1)},[o,r]);const v=()=>{n(d?G(r):H(t))},a=()=>{p(C=>!C)};return e.jsxs(N,{children:[b&&e.jsx(ee,{onClick:a,children:e.jsx(ce,{car:t},r)}),e.jsxs(R,{children:[e.jsxs(q,{children:[e.jsx(U,{src:m||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU",alt:c}),e.jsx(O,{onClick:v,fill:d?"#3470FF":"none",stroke:d?"#3470FF":"#FFF",children:e.jsx("use",{href:`${P}#icon-heart`})})]}),e.jsxs(Y,{children:[e.jsxs(Z,{children:[e.jsxs(K,{children:[c,e.jsxs(j,{children:[" ",l]}),", ",L]}),e.jsx("p",{children:F})]}),e.jsxs(M,{children:[e.jsxs(x,{children:[e.jsx(s,{children:w[0]}),e.jsx(s,{children:w[1]}),e.jsx(s,{children:h}),e.jsx(s,{children:"Premium"})]}),e.jsxs(x,{children:[e.jsx(s,{children:g}),e.jsx(s,{children:c}),e.jsx(s,{children:r}),e.jsx(s,{children:z[0]})]})]})]})]}),e.jsx(B,{onClick:a,children:"Learn more"})]},r)},je=i.section`
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
`;export{me as C,we as E,be as L,je as S,de as a,pe as b,fe as c,ge as d,ye as e,ue as f,xe as g,X as h,P as i,J as j,he as s};
