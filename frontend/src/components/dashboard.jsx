import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        profilePic: ""
    });

    const handleLogout = () => {
        window.location.href = 'http://localhost:5001/auth/logout'; 
    }

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetch('http://localhost:5001/auth/user/info', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });

                const result = await response.json();

                if (result?.status) {
                    setUser({
                        name: result.name,
                        email: result.email,
                        profilePic: result.picture,
                    });
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };
        getInfo();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <main className="flex-1 p-10">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold text-gray-800">User Profile</h1>
                </header>

                <section className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <div className="flex items-center space-x-6">
                        <img
                            src={user.profilePic || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-24 h-24 rounded-full shadow-md"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    <button
                        className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                        onClick={handleLogout} 
                    >
                        Log Out
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
