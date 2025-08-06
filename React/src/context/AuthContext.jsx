import { createContext, useContext, useEffect, useState } from "react";
import { firebaseLogin, firebaseLogout, firebaseObserveUser } from "../firebase/auth";

const AuthContext = createContext();


function AuthProvider(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

        async function login(email, senha) {
            await firebaseLogin(email, senha);
            setIsAuthenticated(true);
        }

        async function logout() {
            await firebaseLogout();
            setIsAuthenticated(false);
            
        }
        
        useEffect(() =>{
            const unsubscribe = firebaseObserveUser((user)=>{
                if (user) {
                    setIsAuthenticated(true);
                }else{
                    setIsAuthenticated(false);
                }
                setIsLoading(false);
            });
            return () =>{
                unsubscribe();
            }
        }, []);

        if(isLoading){
            return <div>Carregando...</div>
        }


        return(
            <AuthContext.Provider value={{isAuthenticated, login, logout}}>
                {props.children}
            </AuthContext.Provider>
        )
}


function useAuth() {
    return useContext(AuthContext);
}

export {
    useAuth,
    AuthProvider
};