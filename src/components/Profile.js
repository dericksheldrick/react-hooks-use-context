import React, { useContext } from "react";
import Interests from "./Interests";
import {userContext} from '../context/user' // importing the userContet we craeted 

function Profile({ theme }) {

  const user = useContext(UserContext); //call useContext using our userContext
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
