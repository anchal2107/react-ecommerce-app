import React from "react";
import "./App.css";
import MainContentWithRoute from "./components/route/route.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  SubcribtionFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubcribtionFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser({ userAuth });
    });
  }
  componentWillUnmount() {
    this.unSubcribtionFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <MainContentWithRoute />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
