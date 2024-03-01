import useMediaQuery from "@/hooks/useMediaQuery";
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
      arrows={isMobileScreen ? true : false}
      dots={true}
      centerPadding="0"
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
