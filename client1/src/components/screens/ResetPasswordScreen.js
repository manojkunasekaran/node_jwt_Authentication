import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import "./style.css";

const ResetPasswordScreen = ({match}) => {
   
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

  
    

    const ResetPasswordHandler = async (e) => {
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
            const {data} = await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`, {password}, config);
           console.log(data);
            setSuccess(data.data);

        } catch (error) {
            setError(error.response.data.error);
            
            setTimeout(() => {
                setError("");
            }, 5000);
        }

    }



    return (
        <section className="flex">

        <form onSubmit={ResetPasswordHandler} className="form_log">
          <center>
            {/* <img src={gct_logo} className="logo" alt="gct_logo" /> */}
            <h4 className="head">GCTERP</h4>
            <p>Reset Password</p>
          </center>
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
          <button type="submit">Reset Password</button>
          {error && <span color='red'>{error}</span>}
          {success && <span color='green'>{success} Click here to <Link to="/login">Login</Link></span>}

        </form>
      </section >

    )
  
}

export default ResetPasswordScreen;