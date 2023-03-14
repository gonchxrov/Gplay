import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/User";

export function ProfileData() {
  const user = useSelector(selectUser);

  return (
    <div>
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
      </div>
    </div>
  );
}
