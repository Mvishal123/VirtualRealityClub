import Link from "next/link";
const About = () => {
  return (
    <section id="about">
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/4.jpg">
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/5.jpg" />
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
              Hey there, tech enthusiasts and virtual adventurers!<br></br> We are VIT Chennai's VR Club, and we're here to redefine the way you experience technology. 🚀<br></br>We are a dynamic group of students passionate about all things virtual reality. <br></br>Our club is a hub for the latest VR innovations, immersive experiences, and creative tech endeavors. 🎮💡
              <br></br><br></br>What We Do:<br></br><br></br>🔮 Explore Immersive Realms:<br></br> Dive into mind-bending virtual worlds that blur the line between reality and imagination. Experience breathtaking adventures right from our campus.<br></br>🌐Digitalize Personal Space:<br></br> Discover how VR can transform your personal space with cutting-edge visualization techniques. From gaming to design, we've got you covered.<br></br>🌈 Mixed Reality Magic:<br></br>We're all about creating mixed reality experiences that'll leave you in awe. From augmented reality art installations to VR-powered education, we're pushing boundaries.<br></br>💡 Tech Innovation:<br></br>Stay on the bleeding edge of technology as we explore the latest VR gadgets, software, and trends. We love experimenting and tinkering with new tech toys.<br></br><br></br> Join the VR Revolution:<br></br>Whether you're a VR veteran or just curious about this futuristic tech, we welcome all VIT Chennai students to join our club. Together, we'll venture into uncharted digital territories and redefine what's possible.<br></br>
              <br></br>Ready to unlock the limitless potential of virtual reality? Join us at VIT Chennai VR Club, where dreams go digital🌐🚀
              </p>
              <p>
              Let's dive into the future together!
              </p>
            </div>
            <a
              href="/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </div>
      {/* !About Shortcode */}
      <div className="container">
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="Fun-tastic Events in VR Club">
             Fun-tastic Events in VR Club
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Get ready for a whirlwind of excitement with our Fun-tastic Events at VIT Chennai VR Club! 🎉
              </p>
              <p>
              Get ready for a blast! 🚀 Our Fun-tastic Events at VIT Chennai VR Club are all about mixing learning with a whole lot of fun. From epic gaming showdowns to mind-bending art exhibits, we've got something for everyone. Join us and let's make tech awesome together! 🎉🎮🎨
              </p>
              <p>
              Join the party at VIT Chennai VR Club's Fun-tastic Events! 🥳🕹️ We're cooking up a storm of fun and excitement with gaming competitions, VR adventures, and mind-blowing tech showcases. Don't miss out on the most electrifying events on campus! Stay tuned for a wild ride with us. 🎉🎮🚀
              </p>
            </div>
            <Link href="/nft-single">
              <a className="metaportal_fn_button">
                <span>Join Now</span>
              </a>
            </Link>
          </div>
          <div className="right_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Play</h3>
                      <p>Jump into the virtual playground and score a chance to win!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Learn</h3>
                      <p>Unleash the Coolest VR Tech in Town!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">Enjoy</h3>
                      <p>Summon your coding to conjure up some digital magic!</p>
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
