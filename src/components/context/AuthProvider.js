import { createContext, useState } from "react";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return(
        <AuthContext.provider value={{ auth, setAuth }}>
            {children} 
            {/* /*components nested inside the auth provider*/}
        </AuthContext.provider>
    )
}

export default AuthContext;