import {useState, useEffect} from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
// import "./style.css";

const RegisterScreen = ({history}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            history.push("/");
        }
    }, [history]);

    const RegisterHandler = async (e) => {
        e.PreventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if(password !== confirmpassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(()=>{
                setError("")
            }, 5000)
            return setError("Passwords does not match");
        }

        try{
            const {data} = await axios.post("/api/auth/register", {username, email, password}, config);
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

        <form onSubmit={RegisterHandler} className="form_log">
          <center>
            {/* <img src={gct_logo} className="logo" alt="gct_logo" /> */}
            <h4 className="head">GCTERP</h4>
          </center>
          <br />
          
          <label htmlFor='uname'>Username</label>
          <input type="text" id='uname'
            className="uname"
            value={username}
					  onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required=""
          />
          <br />

          <label htmlFor='email'>Email</label>
          <input type="email" id='email'
            className="uname"
            value={email}
					  onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            required=""
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
          />
          <br/>

          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type="confirmpassword" id="confirm-password"
            value={confirmpassword}
					  onChange={(e) => setConfirmPassword(e.target.value)}
            className="pwd"
            placeholder="Enter Password"
            required=""
          />

         
          <br />
          <button type="submit" value="Register">REGISTER</button>
          {error && <span color='red'>{error}</span>}

        </form>
      </section >

    )
  
}

export default RegisterScreen;