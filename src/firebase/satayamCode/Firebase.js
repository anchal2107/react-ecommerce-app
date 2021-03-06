import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();

    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
    this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  doFacebookSignIn = () => this.auth.signInWithPopup(this.facebookAuthProvider);
  doSignOut = () => this.auth.signOut();

  onAuthChangeListener = (next, fallback = () => {}) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              imagePath: authUser.photoURL,
              username: authUser.displayName,
              ...dbUser,
            };
            next(user);
          });
      } else {
        fallback();
      }
    });
  };
  // user = (uid) => this.db.ref(`/users/${uid}`);

  // setOrderData = (uid, products) => {
  //   //Using time stamp as order id
  //   const currentTimeStamp = Math.floor(Date.now() / 1000);
  //   this.db.ref(`/users/${uid}/orders/${currentTimeStamp}/`).set(products);
  // };

  // getOrderData = async (uid) => {
  //   let ref = this.db.ref(`/users/${uid}/orders/`);
  //   return await ref.once("value");
  // };

  // getWishListData = async (uid) => {
  //   let ref = this.db.ref(`/users/${uid}/WishList/`);
  //   return await ref.once("value");
  // };

  // updateWishItem = (uid, product) => {
  //   this.db.ref(`/users/${uid}/WishList/${product.id}`).update(product);
  // };

  // deleteWishItem = (uid, productid) => {
  //   this.db.ref(`/users/${uid}/WishList/${productid}`).remove();
  // };

  // setDefaultAddress = (uid, address) => {
  //   this.db.ref(`/users/${uid}/defaultAddress/`).set(address);
  // };

  // getDefaultAddress = async (uid) => {
  //   let ref = this.db.ref(`/users/${uid}/defaultAddress/`);
  //   return await ref.once("value");
  // };
}

export default Firebase;
