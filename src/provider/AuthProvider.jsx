import React, { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "Hablu Mia",
    email: "hablu@example.com",
  });
  const userData = { user, setUser };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
