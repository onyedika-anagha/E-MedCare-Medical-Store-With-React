import Slider from "react-slick";

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <a
      className="slick-prev slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left" alt="Arrow Icon"></i>
    </a>
  );
};

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <a
      className="slick-next slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right" alt="Arrow Icon"></i>
    </a>
  );
};
const slideSettings = {
  className: "ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1",
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  fade: true,
  cssEase: "linear",
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
};

const HomeSliderArea = () => {
  return (
    <>
      {/* SLIDER AREA START (slider-3) */}
      <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <Slider {...slideSettings}>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---"
            data-bg="/img/slider/13.jpg"
            id="slider-1"
          >
            <div className="ltn__slide-item-inner  text-left">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-syringe" />
                          </span>{" "}
                          100% genuine Products
                        </h6>
                        <h1 className="slide-title animated ">
                          Get 20% Discount <br />
                          Of N95 Mask
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <a
                            href="shop.html"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---"
            data-bg="/img/slider/11.jpg"
            id="slider-2"
          >
            <div className="ltn__slide-item-inner text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
                          </a>
                        </div>
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-syringe" />
                          </span>{" "}
                          100% genuine Products
                        </h6>
                        <h1 className="slide-title animated ">
                          Get 20% Discount <br />
                          Of N95 Mask
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <a
                            href="shop.html"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---"
            data-bg="/img/slider/12.jpg"
            id="slider-3"
          >
            <div className="ltn__slide-item-inner  text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-syringe" />
                          </span>{" "}
                          100% genuine Products
                        </h6>
                        <h1 className="slide-title animated ">
                          Get 20% Discount <br />
                          Of N95 Mask
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <a
                            href="shop.html"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </Slider>
      </div>
      {/* SLIDER AREA END */}
    </>
  );
};

export default HomeSliderArea;
