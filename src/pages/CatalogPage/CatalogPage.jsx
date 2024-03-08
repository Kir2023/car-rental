import { CarsList } from "../../components/CarsList/CarsList";
import { Filters } from "../../components/Filters/Filters";
import { Container, Section } from "./CatalogPage.styled";

const CatalogPage = () => {
  return (
    <>
      <Section>
        <Container $top="50px">
          <Filters />
        </Container>
      </Section>
      <CarsList />
    </>
  );
};

export default CatalogPage;
