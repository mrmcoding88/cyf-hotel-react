import Card from "./Card";
const TouristInfoCards = () => {
  const cityInformation = [
    {
      name: "Glas",
      description: "testing description",
      imgUrl: "",
      moreInfo: ""
    },
    {
      name: "Manch",
      description: "testing description",
      imgUrl: "",
      moreInfo: ""
    },
    {
      name: "Lond",
      description: "testing description",
      imgUrl: "",
      moreInfo: ""
    }
  ];
  return (
    <div>
      {cityInformation.map((city, index) => (
        <Card key={index} city={city} />
      ))}
    </div>
  );
};
export default TouristInfoCards;
