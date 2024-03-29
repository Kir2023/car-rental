import { Hourglass } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        colors={["#306cce", "#72a1ed"]}
      />
    </LoaderWrapper>
  );
};
