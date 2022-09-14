import {useState, useEffect} from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';
// import "./style.css";

const LoginScreen = ({history}) => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")){
            history.push("/");
        }
    }, [history]);
    

    const LoginHandler = async (e) => {
        e.PreventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

       

        try{
            const {data} = await axios.post("/api/auth/login", {email, password}, config);
            localStorage.setItem("authToken",data.token);
            history.push("/");

        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }

    }



    return (
        <section className="flex">

        <form onSubmit={LoginHandler} className="form_log">
          <center>
            {/* <img src={gct_logo} className="logo" alt="gct_logo" /> */}
            <h4 className="head">GCTERP LOGIN</h4>
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

          <label htmlFor='password'>Password</label>
          <input
            type="password" id="password"
            value={password}
					  onChange={(e) => setPassword(e.target.value)}
            className="pwd"
            placeholder="Enter Password"
            required=""
            tabIndex={2}
          />
          <span>
          <Link className="fpd" to="/forgotpassword">Forget Password?</Link> 
          </span>
          <br/>
          


         
          <br />
          <button type="submit">LOGIN</button>
          {error && <span color='red'>{error}</span>}

        </form>
      </section >

    )
  
}

export default LoginScreen;