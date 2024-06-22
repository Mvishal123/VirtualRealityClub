import Link from "next/link";
const About = () => {
  return (
    <section id="about">
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="">
            <video
              src="/video1.mp4"
              type="video/mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
            ></video>
          </div>
          <div className="bg_overlay">
            <h3></h3>

            <div className="bg_image" data-bg-img="" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="About Us">
              About Us
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Welcome to the AVR Club at VIT Chennai! 🚀🕶️ <br></br>
                <br></br>Immerse yourself in the realms of augmented and virtual
                reality, where reality and imagination collide. 🌐✨<br></br>
                <br></br>The AVR Club is not just a club; it’s a portal to an
                alternate reality where innovation knows no bounds! 🌈🔍
                <br></br>
                <br></br>We are a dynamic team of tech enthusiasts, visionaries
                and we’re here to explore the limitless possibilities this world
                has to offer. 💻🌌<br></br>
                <br></br>Join us at the AVR Club and be ready to witness reality
                through a new lens. 👓🌟<br></br>The future is virtual, and the
                adventure begins here!🌐🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* !About Shortcode */}
      <div className="container">
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="main-grid">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Play</h3>
                      <p>
                        Jump into the virtual playground and score a chance to
                        win!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Play</h3>
                      <p>
                        Jump into the virtual playground and score a chance to
                        win!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Play</h3>
                      <p>
                        Jump into the virtual playground and score a chance to
                        win!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Learn</h3>
                      <p>Unleash the Coolest AVR Tech in Town!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Enjoy</h3>
                      <p>
                        Summon your coding to conjure up some digital magic!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Develop</h3>
                      <p>Let's create and add to the digital universe!</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            {/* <div className="fn_cs_video">
              <img src="/img/video/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/7e90gBu4pas"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div> */}
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
    </section>
  );
};
export default About;

export const About2 = () => (
  <section id="about2">
    <div className="container small">
      <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="Join Now">
            Join Now
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
              As the first hero of the Meta Legends, collection has over 9,999
              unique skins drawn from the different missions and challenges he
              faced throughout his life.
            </p>
            <p>
              The artwork has been hand-drawned by Robert Green in the
              traditional anime style and composited by Layla Efiyo.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find us On Discord</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/2.jpg" />
        </div>
      </div>
      <div className="fn_cs_collection_info">
        <h3 className="fn__gradient_title">10,000</h3>
        <h3
          className="fn__maintitle upper"
          data-text="Total Items in Collection"
        >
          Total Items in Collection
        </h3>
        <p>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {`don't`} look even slightly
          believable.
        </p>
      </div>
    </div>
    <div className="fn_cs_video bg">
      <div className="abs_img" data-bg-img="/img/video/1.jpg" />
      <a
        className="popup-youtube"
        href="https://www.youtube.com/embed/7e90gBu4pas"
      >
        {/* <img src="/svg/play.svg" alt="" className="fn__svg" /> */}
      </a>
    </div>
    <div className="container">
      {/* Steps Shortcode */}
      <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
        <ul>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">01</h3>
                <p>Connect your Wallet</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">02</h3>
                <p>Select Your Quantity</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">03</h3>
                <p>Confirm The Transaction</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">04</h3>
                <p>Receive Your {`NFT’s`}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* !Steps Shortcode */}
      <div className="fn_cs_join">
        <div className="join_in">
          <h3 className="fn__maintitle upper" data-text="Join Our Community">
            Join Our Community
          </h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {`don't`} look even slightly
            believable.
          </p>
          <div className="buttons">
            <a
              href="https://opensea.io/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Buy On Opensea</span>
            </a>
            <a
              href="#"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhiteList Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
