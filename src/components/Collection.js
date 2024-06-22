import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Board Members"
          data-align="center"
        >
          Board Members
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div className="abs_img" data-bg-img="/img/Faculty.png" />
                  <img src="/img/Faculty.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/Faculty.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div className="abs_img" data-bg-img="/img/logo.png" />
                  <img src="/img/logo.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/logo.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div className="abs_img" data-bg-img="/img/2.jpg" />
                  <img src="/img/2.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/2.jpg" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <p>
            Our team members at VIT AVR Club are a fusion of tech wizards,
            creative minds, and passionate VR enthusiasts, all united to
            redefine the virtual experience." 🌟🔮🚀
          </p>
          {/* <Link href="/collection"> */}
          <Link href="/TeamMembers">
            <a className="metaportal_fn_button">
              <span>View All Team Members</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collection;
