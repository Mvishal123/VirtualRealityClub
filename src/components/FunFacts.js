import Counter from "./Counter";

const FunFacts = () => {
  return (
    <section id="fun_facts">
      <div className="container">
        <div className="fn_cs_counter_list">
          <ul>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={23} />
                  <span className="suffix" />
                </h3>
                <p>Total Events</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  {/* <Counter end={2.4} decimals={2} /> */}
                  <Counter end={500} />
                  <span className="suffix">k+</span>
                  <span className="suffix" />
                </h3>
                <p>Team Members</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={9.5} />
                  <span className="suffix">k+</span>
                </h3>
                <p>Total Viewers</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={1.8} decimals={1} />
                  <span className="suffix">L+</span>
                </h3>
                <p>Total Funding</p>
                <div className="divider" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FunFacts;
