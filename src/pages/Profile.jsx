import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Profile() {
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
        <h1>My Profile</h1>

        <p>Welcome to your profile!</p>

        {user && (
          <>
            <h3>Email: {user.email}</h3>
            <p>Your account is successfully connected with Firebase.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;