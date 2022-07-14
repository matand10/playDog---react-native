import React, { useState } from "react";
import NavigationBar from "../cmps/NavigationBar";

const MainApp = ({ route }) => {
  const [user, setUser] = useState(route.params.user);
  return <NavigationBar user={user} />;
};
export default MainApp;
