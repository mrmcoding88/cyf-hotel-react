const SearchResutl = props => {
  let totalNight;
  function calcTotalNight(entrance, exit) {
    const checkinDate = Date.parse(entrance);
    const checkoutDate = Date.parse(exit);
    const totalTime = Math.abs(checkoutDate - checkinDate);
    totalNight = Math.floor(totalTime / (1000 * 60 * 60 * 24));
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">FristName</th>
          <th scope="col">Surename</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckinDate</th>
          <th scope="col">CheckoutDate</th>
          <th scope="col">Total Night</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((fakeInfo, index) => {
          calcTotalNight(fakeInfo.checkInDate, fakeInfo.checkOutDate);
          return (
            <tr key={index}>
              <td>{fakeInfo.id}</td>
              <td>{fakeInfo.title}</td>
              <td>{fakeInfo.firstName}</td>
              <td>{fakeInfo.surname}</td>
              <td>{fakeInfo.email}</td>
              <td>{fakeInfo.roomId}</td>
              <td>{fakeInfo.checkInDate}</td>
              <td>{fakeInfo.checkOutDate}</td>
              <td>{totalNight}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResutl;
