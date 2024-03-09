import "./Home.css";

export const Home = () => {
  return (
    <section className="home">
      <div className="column">
        <img src="images/photos/3.jpg" alt="Lisa" className="image" />
      </div>

      <div className="column">
        <div className="table">
          <div className="row">
            <div className="title">Name:</div>
            <div className="title">Lisa</div>
          </div>
          <div className="row">
            <div className="text">Breed:</div>
            <div className="text">British Shorthair</div>
          </div>
          <div className="row">
            <div className="text">Color:</div>
            <div className="text">NY-11</div>
          </div>
          <div className="row">
            <div className="text">Gender:</div>
            <div className="text">Female</div>
          </div>
          <div className="row">
            <div className="text">Birth:</div>
            <div className="text">20.08.2023</div>
          </div>
        </div>
      </div>
    </section>
  );
};
