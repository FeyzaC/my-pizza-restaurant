import "./Main.css";

const Main = (props) => {
  const { img, pizza, kalori, desc } = props;

  return (
    <div className="main">
      <div className="card">
        <img className="cardImg" src={img} alt="cardImg" />
        <h2>{pizza}</h2>
        <h3>{kalori}</h3>
        <p>{desc}</p>
        <button className="btn">Warenkorb</button>
      </div>
    </div>
  );
};

export default Main;
