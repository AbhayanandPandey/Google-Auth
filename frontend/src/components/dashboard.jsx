import React from 'react';

import { useEffect } from 'react';
function Dashboard() {

    const user = {
        name: "",
        email: "",
        profilePic: ""
    }
    useEffect(() => {
        const getInfo = async () => {
            fetch('http://localhost:5001/auth/user/info', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'

        })
        const result = await response.json()
        console.log(result)
        if (result) {
            user.name = result.name
            user.email = result.email
            user.profilePic = result.picture
        }
    };
    getInfo();
    },[])
    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Main Content */}
            <main className="flex-1 p-10">
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800 flex flex-col justify-center align-middle text-center ">User Profile</h1>
                </header>

                <section className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <div className="flex items-center space-x-6">
                        <img
                            src={user.profilePic}
                            alt="not found"
                            className="w-24 h-24 rounded-full shadow-md"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    <div className='mt-6 flex flex-col items-center justify-center cursor-pointer border-2 rounded-2xl bg-blue-600 text-white '>
                        <h3 className="text-xl font-semibold text-white p-1">
                            Log Out</h3>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard
