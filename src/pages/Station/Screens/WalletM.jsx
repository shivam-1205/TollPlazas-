import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Currency } from 'lucide-react';
import { deleteVehicel } from '../../../store/actions/tollActions';
import UpdateBalance from './UpdateBalance';

export default function WalletM() {
    const wallet = useSelector(state => state.Reducers.wallet);
    const [show, setShow] = React.useState(false);
    const [current, setCurrent] = React.useState({});
    const dispatch = useDispatch()
    return (
        <div className="font-Poppins p-6 bg-gray-50 min-h-screen">
            {
                show && <UpdateBalance setShow={setShow} data={current} />
            }
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                    <Currency className="text-indigo-600" /> Balance Management
                </h2>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-md">
                {wallet.length > 0 ? (
                    <table className="min-w-full table-auto bg-white text-left text-sm text-gray-600">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                {Object.keys(wallet[0]).map((key, idx) => (
                                    <th key={idx} className="px-6 py-3">
                                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </th>
                                ))}
                                <th>
                                    Update Balance
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {wallet.map((row, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    {Object.entries(row).map(([key, val], i) => (
                                        <td key={i} className="px-6 py-3 whitespace-nowrap">
                                            {typeof val === 'object' && val !== null ? JSON.stringify(val) : String(val)}
                                        </td>
                                    ))}
                                    <td>
                                        <button
                                            onClick={() => {
                                                setShow(!show)
                                                setCurrent(row)
                                            }}
                                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-red-700 transition-all">
                                            update
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                ) : (
                    <div className="text-center py-20 text-gray-500 italic">
                        No Wallet data available.
                    </div>
                )}
            </div>
        </div>
    );
}