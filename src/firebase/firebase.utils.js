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

//createUserProfileDocument check carefull its doing nothing just will 
//add email in our firestore i.e database if its not there...
export const createUserProfileDocument = async (userAuth, additionData)=>{
  if(!userAuth)return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot =await userRef.get();
  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createAt= new Date();
    try{
        await  userRef.set({
              displayName,
              email,
              createAt,
              ...additionData
          })
    }catch(error){
      console.log('error creating user : ', error.message)
    }

  }
    return userRef;
}
