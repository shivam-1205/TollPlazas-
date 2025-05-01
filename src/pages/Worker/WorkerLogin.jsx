import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { workerLogin } from '../../store/actions/workerActions';
import { useNavigate } from 'react-router-dom';

const WorkerLogin = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if (!phone || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }
        dispatch(workerLogin({ "phone_number": phone, "otp": password }, setLoading, navigate))
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 font-Poppins">
            <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded-3xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">
                    Worker Login
                </h2>

                {errorMessage && (
                    <div className="text-red-500 text-center font-medium">{errorMessage}</div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                    {/* Phone input */}
                    <div>
                        <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* OTP input */}
                    <div>
                        <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                            Passcode
                        </label>
                        <OtpInput
                            containerStyle={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '10px',
                                marginTop: '8px',
                            }}
                            inputStyle={{
                                width: '50px',
                                height: '50px',
                                border: '2px solid #ccc',
                                borderRadius: '10px',
                                textAlign: 'center',
                                fontSize: '20px',
                                color: '#333',
                                padding: '10px',
                                transition: 'border-color 0.2s ease',
                            }}
                            value={password}
                            onChange={setPassword}
                            numInputs={4}
                            renderSeparator={<span className="text-gray-600">-</span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>

                    {/* Login button */}
                    <div className="flex justify-center">
                        <button
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

export default WorkerLogin;
