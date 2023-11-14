import GoogleButton from "react-google-button";
import { auth, provider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // setEmail("");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    // setPassword("");
  };

  console.log(email, password);

  const handleLogin = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <GoogleButton onClick={handleGoogle} />
      <button onClick={handleSignOut}>sign out</button>

      <div>
        <form>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="enter Your password"
            onChange={handlePasswordChange}
          />
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
