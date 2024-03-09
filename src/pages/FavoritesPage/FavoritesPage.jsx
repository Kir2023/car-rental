/* eslint-disable react/no-unescaped-entities */
import { CarsListStyle } from "../../components/CarsList/CarsList.styled";
import {
  Container,
  EmptyPage,
  EmptyPageImg,
  EmptyPageText,
  Section,
} from "./FavoritesPage.styled";
import { CarItem } from "../../components/CarItem/CarItem";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import EmptyImg from "../../assets/img-favorite-empty.jpg";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <Section>
      <Container $top="50px">
        {favoriteCars?.length > 0 ? (
          <CarsListStyle>
            {favoriteCars?.map((car, index) => (
              <CarItem car={car} key={car.id} index={index} />
            ))}
          </CarsListStyle>
        ) : (
          <EmptyPage>
            <EmptyPageImg src={EmptyImg} />
            <EmptyPageText>
              You haven't added any cars to favorites. Please select a car from
              the catalog.
            </EmptyPageText>
          </EmptyPage>
        )}
      </Container>
    </Section>
  );
};

export default FavoritesPage;
