import React from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../store/actions/workerActions';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Fill() {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const { state } = useLocation()
    return (
        <div className="p-6 bg-gray-50 min-h-screen font-Poppins">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <header className="bg-primary text-black p-6 text-center">
                    <h1 className="text-2xl font-bold">Order Details</h1>
                </header>

                <div className="p-6 space-y-6">
                    {/* Order Details */}
                    <div className="border-b pb-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Information</h2>
                        <div className="">
                            <p><span className="font-medium text-gray-600">Order ID:</span> {state.order_id}</p>
                            <p className='text-green-600 font-semibold'><span className="font-medium  text-green-600">Amount:</span> ₹{state.amount}</p>
                            <p className='text-red-600 font-semibold'><span className="font-medium text-red-600">Status:</span> {state.status}</p>
                            <p><span className="font-medium text-gray-600">Booking Slot:</span> {state.booking_slot}</p>
                        </div>
                    </div>

                    {/* Station Details */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Station Details</h2>
                        <div className="">
                            <p><span className="font-medium text-gray-600">Name:</span> {state.station.name}</p>
                            <p><span className="font-medium text-gray-600">Location:</span> {state.station.location}</p>
                        </div>
                    </div>

                    <div className="">
                        <button
                            onClick={() => {
                                dispatch(updateOrder(state.id, setLoading, navigate));
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md">Fill Fuel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
