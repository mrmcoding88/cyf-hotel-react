import { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [profileInfo, setProfileInfo] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfileInfo(data);
      });

    // async function fetchProfile() {
    //   const profileResponse = fetch(
    //     `https://cyf-react.glitch.me/customers/${id}`
    //   );
    //   const profileData = await (await profileResponse).json();
    //   console.log(profileData);
    // }
    // fetchProfile();
  }, [id]);
  return profileInfo != null ? (
    <ul>
      <li> Customer id : {profileInfo.id}</li>
      <li>Customer Name : {profileInfo.firstName}</li>
      <li>Customer Eamai: {profileInfo.email}</li>
    </ul>
  ) : (
    <p>loading</p>
  );
};
export default CustomerProfile;
