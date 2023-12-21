import "./login.css"
// import Google from "@mui/icons-material/Google";
// import FaceBook from "@mui/icons-material/Facebook";
// import LinkedIn from "@mui/icons-material/LinkedIn";
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div id="b1">
    <div className="login-container">
      <div className="login-box">
     
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              maxLength={20}
              minLength={3}
    
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
            maxLength={16}
            minLength={8}
              required
            />
          </div>
          <div className="form-group">
            <button id="btnl" type="button"><Link to="..\">Login</Link></button>  
          </div>
          {/* <div className="Social_media"> 
          <div id="Go"><Google/></div>
           <div id="fa"> <FaceBook/></div>
            <div id="Lin"><LinkedIn/></div>
          </div> */}
          <div id="l_r">
            <p>If Want To Create An Account ?<Link to="/register" id="link_si">SignUp</Link></p>
          </div>
        </form>
        
      </div>
    </div>
    </div>

  );
};

export default Login;
