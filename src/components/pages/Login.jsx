import React from "react";
import { useUser } from "../../contextAPI/UserContext";

const Login = () => {
    const { isAuthenticated, logout, username } = useUser();

    return (
        <div className="page-container">
            <div className="form-container">
                {isAuthenticated ? (
                    <div className="text-center">
                        <p className="welcome-text">Hi {username}</p>
                        <button onClick={logout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <p className="welcome-text">
                        Good bye and take care
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;