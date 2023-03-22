import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import { selectUser } from "../../store/User";
import { imgPath } from "../../helpers";
import "./Profile.scss";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Profile</h1>
      <section className="section--profile">
        <div className="profile-block col-10 row mx-auto">
          <div className="image-wrapper col-6">
            <img src={`${imgPath}/img/users/${user.photo}`} />
          </div>
          <div className="info-wrapper col-6">
            <p>
              <span className="green-text">First Name:</span> {user.firstName}
            </p>
            <p>
              <span className="green-text">Last Name:</span> {user.lastName}
            </p>
            <p>
              <span className="green-text">Email:</span> {user.email}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
