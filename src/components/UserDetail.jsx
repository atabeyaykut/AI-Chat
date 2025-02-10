import React from 'react'
import { useUser } from '../contextAPI/UserContext.jsx'

function UserDetail() {
    const { user, logout } = useUser()

    return (
        <div className="absolute right-0 top-16 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">User Details</h3>
            <div className="space-y-2">
                <p className="text-gray-300">Username: {user.username}</p>
                <p className="text-gray-300">Email: {user.email}</p>
            </div>
            <button
                onClick={logout}
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
                Logout
            </button>
        </div>
    )
}

export default UserDetail