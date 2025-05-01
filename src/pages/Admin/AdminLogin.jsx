import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../store/actions/tollActions';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Please fill in both fields');
            return;
        }

        dispatch(adminLogin(email, password, navigate))

        setEmail('');
        setPassword('');
        setErrorMessage('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 font-Poppins">
            <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">
                    Admin Login
                </h2>

                {errorMessage && (
                    <div className="text-red-500 text-center font-medium">{errorMessage}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
