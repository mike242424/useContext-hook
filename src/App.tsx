import { UserContext } from "./context/userContext";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the 'name' property of the 'user' object
    setUser({ ...user, name: e.target.value });
  };

  return (
    <UserContext.Provider value={user}>
      <input type="text" onChange={handleNameChange} />
      <Dashboard />
    </UserContext.Provider>
  );
};

export default App;
