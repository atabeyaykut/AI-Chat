import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/context/UserContext'

function Home() {
    const { isAuthenticated, user, logout, login } = useUser();
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="home-container">
                {isAuthenticated ? (
                    <>
                        <p className="welcome-text">Welcome {user.username}</p>
                        <div className="action-buttons">
                            <button onClick={() => navigate("/chat")}>
                                Start Chat
                            </button>
                            <button
                                className="danger"
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="welcome-text">Welcome to Chat App</p>
                        <div className="action-buttons">
                            <button onClick={login}>
                                Login
                            </button>
                            <button
                                className="secondary"
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home