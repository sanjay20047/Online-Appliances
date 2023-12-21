import "./register.css"
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate=useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form >
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              minLength={3}
              maxLength={20}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
             
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
              maxLength={16}
              minLength={8}
                type="password"
                required
              />
             
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                required
              />
          </div>
          <div className="form-group">
            <button id='btnr' type="submit" onClick={() => navigate("/home")}>SignUp</button> 
          </div>
        </form>
      
        
      </div>
    </div>
  );
};

export default Register;
