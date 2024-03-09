import "./Comparison.css";

export const Comparison = () => {
  return (
    <section className="comparison">
      <div className="column">
        <h1 className="title">From:</h1>

        <img src="images/photos/album/1.jpg" alt="From" className="image" />
      </div>

      <div className="column">
        <h1 className="title">To:</h1>

        <img src="images/photos/album/2.jpg" alt="To" className="image" />
      </div>
    </section>
  );
};
