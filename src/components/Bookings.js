import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (!res.ok) {
          throw new Error("Some bad thing happend");
        }
        return res.json();
      })
      .then(
        data => {
          setBookings(data);
          setLoading(false);
        },
        error => {
          setError(error.toString());
          setLoading(false);
        }
      );
  }, []);

  const search = searchVal => {
    const filteredBooking = bookings.filter(
      booking =>
        booking.firstName == searchVal ||
        booking.surname == searchVal ||
        booking.id == searchVal
    );
    setBookings(filteredBooking);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <p>the bookings are loading</p>
        ) : error != "" ? (
          <p>{error}</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
