// import GoogleButton from "react-google-button";
import { auth, provider, facebookProvider } from "../config/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { LiaFacebookF } from "react-icons/lia";
import { VscGithubAlt } from "react-icons/vsc";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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

  const handleFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGithub = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInstagram = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handleTwitter = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  // const handleSignOut = async () => {
  //   await signOut(auth);
  //   navigate("/");
  // };

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
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="loginPageArea container">
      <div className="loginSide">
        <div className="text-top">
          <h1>Welcome Back!</h1>
          <h3>The Faster You Fill this Form The Faster You Enjoy!</h3>
        </div>
        <div className="input-area">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="submitBtn" onClick={handleLogin}>
            Login
          </button>
        </div>

        <hr />
        <div className="social-login">
          <FcGoogle className="social-icon" onClick={handleGoogle} />
          <FaTwitter className="social-icon" onClick={handleTwitter} />
          <BiLogoInstagramAlt
            className="social-icon"
            onClick={handleInstagram}
          />
          <LiaFacebookF className="social-icon" onClick={handleFacebook} />
          <VscGithubAlt className="social-icon" onClick={handleGithub} />
        </div>
      </div>
      <div className="imgSide">
        <img
          src="/assets/ian-scargill-O-CQq6A5Qjw-unsplash.jpg"
          alt="Login Page image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Login;
