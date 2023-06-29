import "../../scss/settings/Home/home_columns.scss";

const Home_columns = () => {
  return (
    <>
      <div className="container_3columns">
        <div className="first_column">
          <div className="number">10</div>
          <span className="title">ODDANYCH WORKÓW</span>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="secondary_column">
          <div className="number">5</div>
          <span className="title">WSPARTYCH ORGANIZACJI</span>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="third_column">
          <div className="number">7</div>
          <span className="title">ZORGANIZOWANYCH ZBIÓREK</span>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home_columns;
