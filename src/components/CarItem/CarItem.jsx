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
import sprite from "../../assets/sprite.svg";
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
            onClick={onClickHeart}
            fill={isCarFavorite ? "#3470FF" : "none"}
            stroke={isCarFavorite ? "#3470FF" : "#FFF"}
          >
            <use href={`${sprite}#icon-heart`} />
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
