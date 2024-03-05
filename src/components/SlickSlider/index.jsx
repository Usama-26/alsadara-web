import useMediaQuery from "@/hooks/useMediaQuery";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Slider from "react-slick";

export default function SlickSlider({ visibleSlides = 3, children }) {
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <Slider
      centerMode={true}
      accessibility={true}
      slidesToShow={visibleSlides}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={5000}
      infinite={true}
      swipeToSlide
      centerPadding="0"
      prevArrow={<SamplePrevArrow />}
      nextArrow={<SampleNextArrow />}
      responsive={[
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ]}
      customPaging={(i) => {
        return (
          <span className="active-dot w-3 h-3 transition-all duration-150 lg:inline-block hidden rounded-full bg-gray-300"></span>
        );
      }}
      dotsClass="slick-dots slick-thumbs"
    >
      {children}
    </Slider>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className={`${className} !-translate-y-8 opacity-80 hover:opacity-100`}
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-8 h-8 stroke-primary-light stroke-2" />
    </span>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className={`${className} !-translate-y-8 opacity-80 hover:opacity-100`}
      onClick={onClick}
    >
      <ChevronRightIcon className="w-8 h-8 stroke-primary-light stroke-2" />
    </span>
  );
}
