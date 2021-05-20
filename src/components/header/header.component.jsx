import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/snakedragoncirclering.svg";
import "./header.styles.scss";
import * as Path from "../route/constants.path";
import {auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to={Path.PATH_SHOP}>
        SHOP
      </Link>
      <Link className="option" to={Path.PATH_HOMEPAGE}>
        Home
      </Link>
      {currentUser ? (
        <div onClick={()=>{auth.signOut()}} className="option">SignOut</div>
      ) : (
        <Link className="option" to={Path.PATH_SIGNINANDSIGNUP}>
          SignIn And SignUp
        </Link>
      )}
    </div>
  </div>
);
const mapStateToProps= state=>({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
