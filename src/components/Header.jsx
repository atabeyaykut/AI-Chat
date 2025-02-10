import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import UserDetail from './UserDetail'
import { useUser } from '../contextAPI/UserContext.jsx'

function Header() {
    const [isValid, setIsValid] = useState(false)
    const { isAuthenticated } = useUser()

    return (
        <header className="bg-gray-800 shadow-md fixed w-full top-0 z-50">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <NavLink to="/" className="flex items-center space-x-2">
                    <img src='/react.svg' alt="Logo" className="h-8 w-8 hover:rotate-180 transition-transform" />
                </NavLink>

                {isAuthenticated ? (
                    <div className="flex items-center space-x-4">
                        <Link to="/chat" className="text-gray-300 hover:text-white transition-colors">Chat</Link>
                        <button
                            onClick={() => setIsValid(!isValid)}
                            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Profile
                        </button>
                        {isValid && <UserDetail />}
                    </div>
                ) : (
                    <p className="text-gray-300 text-sm md:text-base">Welcome to my chat page</p>
                )}
            </nav>
        </header>
    )
}

export default Header