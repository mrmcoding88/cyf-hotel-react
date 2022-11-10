const RestaurantButton = ({ orderOne }) => {
  const handleAddOrder = orderOne;
  return (
    <button className="btn btn-primary" onClick={handleAddOrder}>
      Add
    </button>
  );
};

export default RestaurantButton;
