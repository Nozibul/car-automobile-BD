
    import {  useEffect, useState } from "react";
    import initializeFirebase from "../../firebase/firebase.init"
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged  } from "firebase/auth";



    initializeFirebase()
     
    const useFirebase = () =>{
        const auth = getAuth();

        const [user, setUser] = useState({})
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState("")
    

        // get register user
        const createRegisterUser = (email, password) =>{
            setIsLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
               
              setUser(result.user);
              setError('')
            })
            .catch((error) => {
                setError(error.message);              
            })
            .finally(()=> setIsLoading(false));
            
        }

       // get login user
       const createLoginUser = (email, password) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          setError('')
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
          
       }

   // observe user
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe ;
    },[])


       // sign in user
       const logOut =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setError('')
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=>setIsLoading(false));
       } 
    
    return {
        user, createRegisterUser ,createLoginUser,isLoading,logOut, error
    }
  }
export default useFirebase ;