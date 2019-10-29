import SlickCarousel from "react-slick";
import * as S from "./styled";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <S.NavButtonPrev onClick={onClick}>
      <S.NavIcon name="arrowLeft" />
    </S.NavButtonPrev>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <S.NavButtonNext onClick={onClick}>
      <S.NavIcon name="arrowRight" />
    </S.NavButtonNext>
  );
}

const Carousel = ({ children }) => {
  let settings = {
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return <SlickCarousel {...settings}>{children}</SlickCarousel>;
};

export default Carousel;
