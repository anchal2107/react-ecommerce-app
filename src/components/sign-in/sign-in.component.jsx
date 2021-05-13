import "./sign-in.styles.scss";
import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", pasword: "" });
    } catch (error) {
      console.error(" Error :", error.message);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title"> I am already User</h2>
        <span> Sign In here</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton>Submit Form</CustomButton>
            <CustomButton onClick={this.handleGoogleSignIn} isBlueButton type='button'>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
