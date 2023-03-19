import React, { useEffect, useState } from "react";
import { ProfileData } from "../../components/ProfileData/ProfileData";
import { Layout } from "../../components/Layout/Layout";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Profile</h1>
      <ProfileData />
    </Layout>
  );
};

export default Profile;
