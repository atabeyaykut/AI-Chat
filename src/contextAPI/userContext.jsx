import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: null,
        email: null,
        password: null
    })
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (userData) => {
        setUser(userData)
        setIsAuthenticated(true)
        navigate("/chat")
    }

    const logout = () => {
        setUser({
            username: null,
            email: null,
            password: null
        })
        setIsAuthenticated(false)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
