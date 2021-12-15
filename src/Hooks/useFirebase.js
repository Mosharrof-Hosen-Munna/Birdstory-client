import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../firebase/firebase.init";
import { setUser } from "../store/actions/actions";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const registerEmailPassword = (userData) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
  };

  const loginEmailPassword = (userData) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, userData.email, userData.password);
  };

  // const getCurrentUser = () => {
  //   setIsLoading(true);
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("glkdjfglksdfjglksdfjglsdkfgj");
  //     if (user) {
  //       dispatch(setUser(user));
  //     } else {
  //       dispatch(setUser({}));
  //     }
  //     console.log("gdfgjsdlfgkjdsfg");
  //     setIsLoading(false);
  //   });
  // };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser({}));
      }
      setIsLoading(false);
    });
  }, []);
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  };

  return {
    registerEmailPassword,
    auth,
    // getCurrentUser,
    setIsLoading,
    isLoading,
    logOut,
    loginEmailPassword,
  };
};

export default useFirebase;