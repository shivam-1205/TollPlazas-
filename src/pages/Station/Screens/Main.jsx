import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    PieChart, Pie, Cell, Tooltip as PieTooltip,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer
} from 'recharts';
import { getData } from '../../../store/actions/tollActions';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default function Main() {
    const customer = useSelector(state => state.Reducers.customer);
    const expense = useSelector(state => state.Reducers.expense);
    const unauthorized = useSelector(state => state.Reducers.unauthorized);
    const vehicle = useSelector(state => state.Reducers.vehicle);
    const tolls = useSelector(state => state.Reducers.toll);
    const cameras = useSelector(state => state.Reducers.camera);
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(getData(setData));
    }, [dispatch]);

    const pieData = [
        { name: 'Total Tolls', value: data?.total_tolls?.length || 0 },
        { name: 'Total Customers', value: customer?.length || 0 },
    ];

    const totalIncome = data?.total_income || 0;
    const totalExpenses = expense?.reduce((acc, curr) => acc + (curr.amount || 0), 0);

    const barData = [
        {
            name: 'Amount',
            Revenue: totalIncome,
            Expenses: totalExpenses,
        },
    ];

    const vehicleData = [
        {
            name: 'Vehicle',
            Authorized: vehicle?.length || 0,
            UnAuthorized: unauthorized?.length || 0,
        },
    ];

    const tollData = [
        {
            name: 'Toll vs Camera',
            Tolls: tolls?.length || 0,
            Cameras: cameras?.length || 0,
        },
    ];

    return (
        <div className="font-Poppins p-4 bg-gray-50 min-h-screen">
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Dashboard Overview</h3>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                    <h4 className="text-gray-600 text-lg">Total Tolls</h4>
                    <p className="text-3xl font-bold text-blue-600">
                        {data?.total_tolls?.length || 0}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-yellow-400">
                    <h4 className="text-gray-600 text-lg">Total Customers</h4>
                    <p className="text-3xl font-bold text-yellow-600">
                        {customer?.length || 0}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-indigo-600">
                    <h4 className="text-gray-600 text-lg">Revenue</h4>
                    <p className="text-3xl font-bold text-indigo-600">
                        ₹{Number(totalIncome).toLocaleString()}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500">
                    <h4 className="text-gray-600 text-lg">Total Expenses</h4>
                    <p className="text-3xl font-bold text-red-500">
                        ₹{Number(totalExpenses).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Pie Chart */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h4 className="text-xl font-semibold text-gray-700 mb-4">System Overview</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <PieTooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Revenue vs Expenses</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Revenue" fill="#4ade80" />
                            <Bar dataKey="Expenses" fill="#f87171" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h4 className="text-xl font-semibold text-gray-700 mb-4">UnAuthorized vs Authorized</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={vehicleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="UnAuthorized" fill="#f87171" />
                            <Bar dataKey="Authorized" fill="#4ade80" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Tolls vs Cameras</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={tollData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Tolls" fill="#4ade80" />
                            <Bar dataKey="Cameras" fill="#f87171" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Latest Tolls */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Latest Tolls</h3>
            <div className="bg-white rounded-2xl shadow-md p-6 text-gray-600">
                <p className="text-center italic">Coming Soon: Real-time toll data will be shown here.</p>
            </div>
        </div>
    );
}
