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
import { setIsLoading, setUser } from "../store/actions/authActions";
import Axios from "axios";
import { useSelector } from "react-redux";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const currentUser = useSelector((state) => state.auth.user);

  const registerEmailPassword = (userData) => {
    dispatch(setIsLoading(true));
    return createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
  };

  const loginEmailPassword = (userData) => {
    dispatch(setIsLoading(true));
    return signInWithEmailAndPassword(auth, userData.email, userData.password);
  };

  const getCurrentUser = () => {
    // dispatch(setIsLoading(true));
    onAuthStateChanged(auth, (user) => {
      console.log("I am gcu");
      if (user) {
        console.log(user);
        let newUser;
        Axios.get(`http://localhost:5000/api/auth/user/${user.email}`)
          .then((res) => {
            newUser = {
              databaseUser: { ...res.data },
              ...user,
            };
            console.log(newUser);
            dispatch(setUser(newUser));
          })
          .catch((err) => console.log(err));
        if (currentUser) {
          // dispatch(setIsLoading(false));
        }
      } else {
        dispatch(setUser({}));
        // dispatch(setIsLoading(false));
      }
    });
  };
  console.log(isLoading);
  useEffect(() => {
    // dispatch(setIsLoading(true));
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     Axios.get(`http://localhost:5000/api/auth/user/${user.email}`)
    //       .then((res) => {
    //         console.log(res.data);
    //         dispatch(
    //           setUser({
    //             databaseUser: { ...res.data },
    //             ...user,
    //           })
    //         );
    //       })
    //       .catch((err) => console.log(err));
    //     // setIsLoading(false);
    //   } else {
    //     dispatch(setUser({}));
    //     // setIsLoading(false);
    //   }
    //   dispatch(setIsLoading(false));
    // });

    // dispatch(setIsLoading(true));
    onAuthStateChanged(auth, (user) => {
      console.log("I am gcu");

      // if (user) {
      //   dispatch(setUser(user));
      //   dispatch(setIsLoading(false));
      // } else {
      //   dispatch(setUser({}));
      //   dispatch(setIsLoading(false));
      // }
      if (user) {
        console.log(user);
        let newUser;
        Axios.get(`http://localhost:5000/api/auth/user/${user.email}`)
          .then((res) => {
            newUser = {
              databaseUser: { ...res.data },
              ...user,
            };
            console.log(newUser);
            dispatch(setUser(newUser));
            dispatch(setIsLoading(false));
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(setIsLoading(false));
        dispatch(setUser({}));
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((err) => console.log(err.message))
      .finally(() => dispatch(setIsLoading(false)));
  };

  return {
    registerEmailPassword,
    auth,
    getCurrentUser,

    logOut,
    loginEmailPassword,
  };
};

export default useFirebase;
