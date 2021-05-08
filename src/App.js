import React from "react";
import "./App.css";
import MainContentWithRoute from "./components/route/route.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubcribtionFromAuth = null;
  componentDidMount() {
    this.unSubcribtionFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubcribtionFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <MainContentWithRoute />
      </div>
    );
  }
}

export default App;
