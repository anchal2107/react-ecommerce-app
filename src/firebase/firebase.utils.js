import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdErdPpBrU45gXD9rdFBTz05080fg6fo",
  authDomain: "ecommerce-app-13956.firebaseapp.com",
  projectId: "ecommerce-app-13956",
  storageBucket: "ecommerce-app-13956.appspot.com",
  messagingSenderId: "775548337337",
  appId: "1:775548337337:web:1f899928944c5146212f68",
};
firebase.initializeApp(firebaseConfig);
export const auth =firebase.auth();
export const firestore= firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);

// import React from "react";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAhdErdPpBrU45gXD9rdFBTz05080fg6fo",
//   authDomain: "ecommerce-app-13956.firebaseapp.com",
//   projectId: "ecommerce-app-13956",
//   storageBucket: "ecommerce-app-13956.appspot.com",
//   messagingSenderId: "775548337337",
//   appId: "1:775548337337:web:1f899928944c5146212f68",
// };
// class Firebase extends React.Component {
//   constructor() {
//     super();
//     firebase.initializeApp(firebaseConfig);
//     this.auth = firebase.auth();
//     // eslint-disable-next-line no-undef
//     this.firestore = firebase.firestore();
//   }

//   doGoogleSignIn = () => {
//     // Initialize Firebase
//     var googleSignInProvider = new firebase.auth.GoogleAuthProvider();
//     googleSignInProvider.setCustomParameters({ prompt: "select_account" });
//     const signInWithGoogle = this.auth.signInWithPopup(googleSignInProvider);
//     return signInWithGoogle;
//   };
// }
// export default Firebase;
