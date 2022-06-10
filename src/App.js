import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="app">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
