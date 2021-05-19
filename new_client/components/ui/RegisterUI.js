import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterUI.css";

const RegisterUI = ({ history }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [userrole, setUserrole] = useState("");
    const [error, setError] = useState("");

    
  
    const registerHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      if (password !== confirmpassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords do not match");
      }
  
      try {
        const { data } = await axios.post(
          "/api/auth/register",
          {
            firstname,
            lastname,
            username,
            email,
            telephone,
            password,
            userrole,
          },
          config
        );
  
        localStorage.setItem("authToken", data.token);
  
        history.push("/");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };
  
    return (
      <div className="register-ui">
        <form onSubmit={registerHandler} className="register-ui__form">
          <h3 className="register-ui__title">Register</h3>
          {error && <span className="error-message">{error}</span>}

          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              required
              id="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              required
              id="lastname"
              placeholder="Last Name"
              value={firstname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Contact Number:</label>
            <input
              type="text"
              required
              id="telephone"
              placeholder="Telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userrole">User Role:</label>
            <input
              type="text"
              required
              id="userrole"
              placeholder="Buyer or Seller"
              value={firstname}
              onChange={(e) => setUserrole(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
  
          <span className="register-ui__subtext">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    );
  };
  
  export default RegisterUI;