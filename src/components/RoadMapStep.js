import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="RoadMap"
          data-align="center"
        >
          RoadMap
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
                      <p className="date">October 09, 2023</p>
                      <h3 className="title">VR Showdown Smackdown</h3>
                      <p className="desc">
                      Get your game face on for an epic VR gaming competition that will test your skills and crown the ultimate champion.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 02</span>
                    <div className="item_in">
                      <p className="date">October 17, 2023</p>
                      <h3 className="title">Artistry in Virtual Reality</h3>
                      <p className="desc">
                      Unleash your creativity in the virtual realm with an art exhibition that merges the digital and physical worlds.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 03</span>
                    <div className="item_in">
                      <p className="date">October 28, 2023</p>
                      <h3 className="title">VR Tech Talk & Chill</h3>
                      <p className="desc">
                      Kick back and dive deep into the latest VR tech trends with expert speakers, discussions, and plenty of chill vibes..
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 04</span>
                    <div className="item_in">
                      <p className="date">November 11, 2023</p>
                      <h3 className="title">VR Escape Room Adventure</h3>
                      <p className="desc">
                      Embark on a thrilling virtual escape room challenge where you must work together to solve puzzles and break free
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 05</span>
                    <div className="item_in">
                      <p className="date">November 23, 2023</p>
                      <h3 className="title">VR Movie Night Under the Stars</h3>
                      <p className="desc">
                      Experience cinematic magic like never before with a virtual movie night under a virtual starry sky.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 06</span>
                    <div className="item_in">
                      <p className="date">December 02, 2023</p>
                      <h3 className="title">VR Game Jam Bonanza</h3>
                      <p className="desc">
                      Join forces with fellow gamers and developers for a high-speed game jam to create innovative VR games in record time.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 07</span>
                    <div className="item_in">
                      <p className="date">January 14, 2024</p>
                      <h3 className="title">VR Karaoke Party</h3>
                      <p className="desc">
                      Grab the mic and sing your heart out in a virtual world filled with your favorite tunes and a lively crowd. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 08</span>
                    <div className="item_in">
                      <p className="date">January 28, 2024</p>
                      <h3 className="title">VR Fitness Challenge</h3>
                      <p className="desc">
                      Break a sweat and have a blast with VR fitness challenges that make working out feel like an adventure.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 09</span>
                    <div className="item_in">
                      <p className="date">February 12, 2024</p>
                      <h3 className="title">VR Hackathon: Building the Future</h3>
                      <p className="desc">
                      Put your coding and VR skills to the test in a hackathon that aims to create groundbreaking virtual experiences.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="Event">Event 10</span>
                    <div className="item_in">
                      <p className="date">February 27, 2024</p>
                      <h3 className="title">VR World Tour</h3>
                      <p className="desc">
                      Take a globe-trotting journey without leaving your seat as you explore famous landmarks and exotic destinations through VR travel experiences.
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
