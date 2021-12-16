import {
  createUserWithEmailAndPassword,
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuthentication from "./firebase.init";

initializeAuthentication();

const UseFirebase = () => {

  const [users, setUsers] = useState({});

  // console.log(users)

  const auth = getAuth();

  const registerUser = (email, password,name) => {
    console.log(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const newUser={email, displayName:name}
        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          
        })
          .then(() => {
            // Profile updated!
            // ...
            alert("updated")
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        console.log(user);


        setUsers(newUser);
        // ...
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  console.log(users);

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUsers(user);
        // ...

        // sweet alert 2
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };


  // google sign in

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn=()=>{

    signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const user = result.user;

    setUsers(user);
    // ...
  }).catch((error) => {
  
    const errorMessage = error.message;
   console.log(errorMessage);
    
  });
  }


  //   observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const uid = user.uid;
       setUsers(user)
      } else {
        // User is signed out
        // ...
        setUsers({});
      }
    });
  }, []);


  // logout

  const logOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setUsers({});
    }).catch((error) => {
      // An error happened.
    });
  }

  return {
    registerUser,
    loginUser,
    users,
    setUsers,
    logOut,
    googleSignIn
  };
};

export default UseFirebase;
