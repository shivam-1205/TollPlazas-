import React from 'react';
import { useSelector } from 'react-redux';
import AddTolls from './AddTolls';
import { PlusCircle } from 'lucide-react';

export default function Tolls() {
    const [show, setShow] = React.useState(false);
    const tolls = useSelector(state => state.Reducers.toll);

    return (
        <div className="font-Poppins p-4 bg-gray-50 min-h-screen">
            {show && <AddTolls setShow={setShow} />}

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">Toll Management</h2>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md"
                >
                    <PlusCircle size={18} /> Add Toll
                </button>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-sm bg-white p-4">
                <table className="min-w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            {tolls.length > 0 && Object.keys(tolls[0]).map(key => (
                                <th key={key} className="px-6 py-3 whitespace-nowrap">
                                    {key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tolls.map((toll, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                {Object.keys(toll).map(key => (
                                    <td key={key} className="px-6 py-3 whitespace-nowrap text-sm">
                                        {typeof toll[key] === 'object' && toll[key] !== null
                                            ? toll[key].name
                                            : String(toll[key])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {tolls.length === 0 && (
                    <div className="text-center py-6 text-gray-500 italic">
                        No tolls available. Click "Add Toll" to create one.
                    </div>
                )}
            </div>
        </div>
    );
}
