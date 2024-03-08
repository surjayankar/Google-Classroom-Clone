import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV1pIYbmjL8Sefq1UvbX3BECuML6yYDfY",
    authDomain: "classroom-clone-c34e5.firebaseapp.com",
    projectId: "classroom-clone-c34e5",
    storageBucket: "classroom-clone-c34e5.appspot.com",
    messagingSenderId: "1051417965870",
    appId: "1:1051417965870:web:f1c966a300613a4cc236bf",
    measurementId: "G-8EVY846726"
  };
  const app=firebase.initializeApp(firebaseConfig);
  const auth=app.auth();
  const db=app.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

// Sign in and check or create account in firestore
const signInWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    console.log(response.user);
    const user = response.user;
    console.log(`User ID - ${user.uid}`);
    const querySnapshot = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (querySnapshot.docs.length === 0) {
      // create a new user
      await db.collection("users").add({
        uid: user.uid,
        enrolledClassrooms: [],
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };
