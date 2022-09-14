import { useState } from "react";
import axios from "axios";
// import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const ForgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

    return (
        <section className="flex">

        <form onSubmit={ForgotPasswordHandler} className="form_log">
          <center>
            {/* <img src={gct_logo} className="logo" alt="gct_logo" /> */}
            <h4 className="head">GCTERP</h4>
            <p>Forgot Password</p>
          </center>
          <br />

          

          <label htmlFor='email'>Email</label>
          <input type="email" id='email'
            className="uname"
            value={email}
					  onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            required=""
            tabIndex={1}
          />
          <br />
          


         
          <br />
          <button type="submit">Send Email</button>
          {error && <span color='red'>{error}</span>}
          {success && <span color='green'>{success}</span>}

        </form>
      </section >

    )
  
}

export default ForgotPasswordScreen;