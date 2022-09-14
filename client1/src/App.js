// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
// import {render} from 'react-dom';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/routing/PrivateRoute';
// import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';

const App = () => {
  return (
  <Router>
    <div className='app'>

      <Routes>
        {/* <PrivateRoute exact path="/" element={<PrivateScreen/>}/> */}
        <Route exact path="/login" element={<LoginScreen/>}/>
        <Route exact path="/register" element={<RegisterScreen/>}/>
        <Route exact path="/forgotpassword" element={<ForgotPasswordScreen/>}/>
        <Route exact path="/resetpassword/:resetToken" element={ResetPasswordScreen}/>
      </Routes>

    </div>
  </Router>
  );
};






// const App = () => {
// 	return (
// 		<div>

//         <Routes>
//           <Route path="/" element={<LoginScreen />} />
//           <Route path="/login" element={<LoginScreen />}/>
//           <Route path="/register" element={<RegisterScreen />}/>
         
//         </Routes>

// 		</div>
// 	)
// }

export default App;
