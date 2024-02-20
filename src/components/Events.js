import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
import Link from "next/link";
const RoadMapSlider = () => {
  return (
    <section id="events">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Events"
          data-align="center"
        >
          Events
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 01</span>
                    <div className="item_in">
                      <p className="date">June 02, 2023</p>
                      <h3 className="title">Curtain Raiser</h3>
                      <p className="desc">
                        Step into a virtual realm at our club's curtain raiser event - where reality gets redefined
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 02</span>
                    <div className="item_in">
                      <p className="date">June 13, 2023</p>
                      <h3 className="title">Virtual Escape</h3>
                      <p className="desc">
                        Learn, Compete, Win !
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 03</span>
                    <div className="item_in">
                      <p className="date">August 11, 2023</p>
                      <h3 className="title">Club Expo</h3>
                      <p className="desc">
                        Club Expo Experience - where innovation meets excitement, creating unforgettable moments4
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 04</span>
                    <div className="item_in">
                      <p className="date">September 1, 2023</p>
                      <h3 className="title">Clueminati</h3>
                      <p className="desc">
                        Experience a mysterious event where you will solve puzzles, find clues and conquer thriller challenges
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 05</span>
                    <div className="item_in">
                      <p className="date">September 27, 2023</p>
                      <h3 className="title">HACK-A-THON Unity Workshop</h3>
                      <p className="desc">
                        Dive into the future of art at our online 3D Painting Event
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 06</span>
                    <div className="item_in">
                      <p className="date">October 06, 2023</p>
                      <h3 className="title">Gamers Nexus</h3>
                      <p className="desc">
                        Gear up and immerse yourself in high-octane AVR gaming with your own AVR headset.
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 07</span>
                    <div className="item_in">
                      <p className="date">January 2024</p>
                      <h3 className="title">Upcoming</h3>
                      <p className="desc">
                        Stay Tuned!
                        <Link href="/">
                          <a className="metaportal_fn_button">
                            <span>View more</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;
