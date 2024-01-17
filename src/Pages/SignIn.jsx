import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link, useNavigate } from "react-router-dom";

import logoBlack from "../assets/img/logo-black.svg";
import googleColorIcon from "../assets/img/google-color-icon.svg";
import logoOriginals from '../assets/img/logo-originals-color.svg'

import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Css
import "../assets/Css/signIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard/booking");
  }, [user, loading]);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="center">
        <img className="img" src={logoBlack} alt="Logo" />
        <Card className="card" style={{ boxShadow: "none" }}>
          <CardContent className="cardContent">
            <h3>Login</h3>
            <Divider className="divider" />
            <div className="subCard">
              <label>Your Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="custom-input"
              />
              <label>Your Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="custom-input"
              />
              <div className="checkbox-container">
                <span>
                  <Checkbox
                    checked={isChecked}
                    onChange={handleChange}
                    style={{ color: isChecked ? "#1569ef" : "#ced4da" }}
                  />
                  <Typography>Remember Me</Typography>
                </span>
              </div>

              <button
                className="login-btn"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Login
                <ArrowForwardIcon
                  style={{ height: "20px", width: "20px", marginLeft: "5px" }}
                />
              </button>

              <div className="divider-container">
                <Divider className="second-divider" />
                <Typography className="or">Or:</Typography>
                <Divider className="second-divider" />
              </div>

              {/* Google Login */}
              <div style={{ marginTop: "20px" }}>
                <button className="google-btn" onClick={signInWithGoogle}>
                  <img
                    className="google-img"
                    src={googleColorIcon}
                    alt="google"
                  />
                  Login With google
                </button>
              </div>
              <div className="forgot">
                <Link className="link" to="/reset">
                  Forgot Your Password?
                </Link>
                <Link className="link" to="/register">
                  Not Registered Yet?
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <img className="logo-originals" src={logoOriginals} alt="icons" />
        <Typography style={{fontSize: '.875rem',color:'GrayText'}}>
          Part of the AppSumo family. © 2024 Sumo Group, Inc. All rights
          reserved. Terms. Privacy.
        </Typography>
      </div>
    </>
  );
};

export default SignIn;
