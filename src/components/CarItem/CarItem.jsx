/* eslint-disable react/prop-types */
import {
  Button,
  CarCard,
  CarItemStyle,
  DescriptItem,
  DescriptList,
  DescriptListWrap,
  DescriptionWrap,
  Heart,
  Img,
  ImgWrap,
  Span,
  TitleH3,
  TitleWrap,
} from "./CarItem.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCar,
  deleteFavoriteCar,
} from "../../redux/favoriteCarsSlice.js/favoriteCarsSlice";
import { selectFavoriteCars } from "../../redux/selectors";
import { ModalWindowWrap } from "../../components/ModalWindowWrap/ModalWindowWrap";
import { ModalReadMore } from "../../components/ModalReadMore/ModalReadMore";

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;
  const cityCountry = address?.split(", ").slice(-2);

  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some((car) => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(addFavoriteCar(car));
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <CarItemStyle key={id}>
      {showModal && (
        <ModalWindowWrap onClick={toggleModal}>
          <ModalReadMore car={car} key={id} />
        </ModalWindowWrap>
      )}
      <CarCard>
        <ImgWrap>
          <Img
            src={
              img
                ? img
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfcwPgLjMU-2yndNFijsBcYym0xgW8CZoy59h7iGThL5Ii5b-Gt3g69LOn5pM3vEygkM&usqp=CAU"
            }
            alt={make}
          />
          <Heart
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickHeart}
            fill={isCarFavorite ? "#3470FF" : "none"}
            stroke={isCarFavorite ? "#3470FF" : "#FFF"}
          >
            <path d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z" />
          </Heart>
        </ImgWrap>
        <DescriptionWrap>
          <TitleWrap>
            <TitleH3>
              {make}
              {<Span> {model}</Span>}, {year}
            </TitleH3>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DescriptListWrap>
            <DescriptList>
              <DescriptItem>{cityCountry[0]}</DescriptItem>
              <DescriptItem>{cityCountry[1]}</DescriptItem>
              <DescriptItem>{rentalCompany}</DescriptItem>
              <DescriptItem>Premium</DescriptItem>
            </DescriptList>
            <DescriptList>
              <DescriptItem>{type}</DescriptItem>
              <DescriptItem>{make}</DescriptItem>
              <DescriptItem>{id}</DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <Button onClick={toggleModal}>Learn more</Button>
    </CarItemStyle>
  );
};
