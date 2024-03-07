import { Outlet } from "react-router";
import { Suspense } from "react";
import { MainContainer } from "./SharedLayout.styled";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default SharedLayout;
