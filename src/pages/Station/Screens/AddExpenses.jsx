import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postExpense } from '../../../store/actions/tollActions';

export default function AddExpenses({ setShow }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('amount', amount);
        formData.append('description', description);
        formData.append('date', date);
        setLoading(true);
        dispatch(postExpense(formData, setLoading));
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 overflow-auto font-Poppins">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 relative">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                    <h3 className="text-gray-800 text-xl font-semibold">Add Expense</h3>
                    <svg
                        onClick={() => setShow(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500"
                        viewBox="0 0 320.591 320.591"
                    >
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        />
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        />
                    </svg>
                </div>

                <div className="space-y-6 mt-4">
                    <div>
                        <label htmlFor="amount" className="block text-lg font-semibold text-gray-700">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter expense amount"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter expense description"
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-lg font-semibold text-gray-700">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                    <button
                        onClick={() => setShow(false)}
                        type="button"
                        className="px-6 py-2 rounded-lg text-gray-700 text-sm font-semibold bg-gray-200 hover:bg-gray-300 transition-all"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="px-6 py-2 rounded-lg text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 transition-all"
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
}
