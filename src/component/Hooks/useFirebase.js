
    import {  useEffect, useState } from "react";
    import initializeFirebase from "../../firebase/firebase.init"
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword 
      ,GoogleAuthProvider,signInWithPopup, updateProfile,signOut,onAuthStateChanged  } from "firebase/auth";



    initializeFirebase()
     
    const useFirebase = () =>{
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();


        const [user, setUser] = useState({})
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState("")
        const [admin, setAdmin]= useState('')
    

        // get register user
        const createRegisterUser = (name, email, password, history) =>{
            setIsLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              const newUser = {email, displayName: name}
              setUser(newUser)

              // save user to database
               saveUserToDatabase(email, name, 'POST') 

              // send name to firebase 
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                setError(error.message); 
              });
              history.replace('/')
              setError('')
            })
            .catch((error) => {
                setError(error.message);              
            })
            .finally(()=> setIsLoading(false));
            
        }

       // get login user
       const createLoginUser = (email, password, location, history) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const destination = location?.state?.from || '/'
          history.replace(destination)
          setUser(result.user);
         
          setError('')
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
          
       }

       // google sign in
   const signInWithGoogle = (location, history)=>{
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      setError('')
      const user= (result.user) 
      saveUserToDatabase(user?.email, user?.displayName, 'PUT')
      setUser(user)

      history.push(location?.state?.from || '/' )
      
    }).catch((error) => {
      setError(error.message);
    }).finally(()=> setIsLoading(false));

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
    },[auth])


     //  load admin 
     useEffect(()=>{
       fetch(`http://localhost:5000/users/${user?.email}`)
       .then(res=>res.json())
       .then(data=>setAdmin(data?.admin))
     },[user?.email])



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


       // save user to database
       const saveUserToDatabase = (email, displayName, method)=>{
         const user = {email, displayName }
           fetch('http://localhost:5000/users',{
             method: method,
             headers:{
               'content-type':'application/json'
             },
             body: JSON.stringify(user)
           })
           .then()
       }
    
    return {
        user, createRegisterUser ,createLoginUser,signInWithGoogle,isLoading,logOut, error , admin
    }
  }
export default useFirebase ;