import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link> {" | "}

      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link> {" | "}
          <Link to="/profile">Profile</Link> {" | "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> {" | "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;