import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Dashboard</h1>
        <p>Welcome to your personal dashboard!</p>
        {user && <h3>Logged in as: {user.email}</h3>}
      </div>
    </div>
  );
}

export default Dashboard;