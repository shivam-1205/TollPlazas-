import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarIcon } from 'lucide-react';
import { deleteVehicel } from '../../../store/actions/tollActions';

export default function Unauthorized() {
    const unauthorized = useSelector(state => state.Reducers.unauthorized);
    const dispatch = useDispatch()
    return (
        <div className="font-Poppins p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                    <CarIcon className="text-indigo-600" /> Unauthorized Vehicle List
                </h2>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-md">
                {unauthorized.length > 0 ? (
                    <table className="min-w-full table-auto bg-white text-left text-sm text-gray-600">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                {Object.keys(unauthorized[0]).map((key, idx) => (
                                    <th key={idx} className="px-6 py-3">
                                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {unauthorized.map((row, index) => (
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
                        No unauthorized vehicle data available.
                    </div>
                )}
            </div>
        </div>
    );
}