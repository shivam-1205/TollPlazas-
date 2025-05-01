import React from 'react';
import { useSelector } from 'react-redux';
import { UserIcon } from 'lucide-react';

export default function Customers() {
    const customer = useSelector(state => state.Reducers.customer);

    return (
        <div className="font-Poppins p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                    <UserIcon className="text-blue-600" /> Customers
                </h2>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-md">
                {customer.length > 0 ? (
                    <table className="min-w-full table-auto bg-white text-left text-sm text-gray-600">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                {Object.keys(customer[0]).map((key, idx) => (
                                    <th key={idx} className="px-6 py-3">
                                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {customer.map((row, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    {Object.entries(row).map(([key, val], i) => (
                                        <td key={i} className="px-6 py-3 whitespace-nowrap">
                                            {typeof val === 'object' && val !== null ? JSON.stringify(val) : String(val)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center py-20 text-gray-500 italic">
                        No customer data available.
                    </div>
                )}
            </div>
        </div>
    );
}