const Card = props => {
  const cityName = props.city["name"];
  const cityImg = props.city["imagUrl"];
  const cityDescription = props.city["description"];
  const moreInfo = props.city["moreInfo"];

  return (
    <div className="card">
      <img src={cityImg} className="card-img-top" />
      <div className="card-body">
        <p>{cityDescription}</p>
        <a href={moreInfo} className="btn btn-primary">
          Go {cityName}
        </a>
      </div>
    </div>
  );
};
export default Card;
