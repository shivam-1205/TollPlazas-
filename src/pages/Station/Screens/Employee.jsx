import React from 'react';
import { useSelector } from 'react-redux';
import { PlusCircle, Info, User } from 'lucide-react';
import AddEmployee from './AddEmployee';

export default function Employee() {
    const employee = useSelector(state => state.Reducers.employee);
    const [show, setShow] = React.useState(false);

    return (
        <div className="font-Poppins p-6 bg-gray-50 min-h-screen">
            {show && <AddEmployee setShow={setShow} />}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                    <User className="text-indigo-600" /> Employee
                </h2>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md"
                >
                    <PlusCircle size={18} /> Add Employee
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                {employee?.length > 0 ? (
                    <table className="min-w-full table-auto text-sm text-gray-700">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                            <tr>
                                {Object.keys(employee[0]).map((key, idx) => (
                                    <th key={idx} className="px-6 py-3 whitespace-nowrap text-start">
                                        {key
                                            .replace(/_/g, ' ')
                                            .replace(/\b\w/g, l => l.toUpperCase())}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {employee.map((row, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    {Object.entries(row).map(([_, val], i) => (
                                        <td key={i} className="px-6 py-3 whitespace-nowrap">
                                            {typeof val === 'object' && val !== null
                                                ? val?.name || val?.id || '—'
                                                : val ?? '—'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                        <Info className="w-10 h-10 mb-2" />
                        <p className="italic text-lg">No Employee data available</p>
                    </div>
                )}
            </div>
        </div>
    );
}
