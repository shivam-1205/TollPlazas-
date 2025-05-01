import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import StationSidebar from './components/StationSidebar';
import Camera from './Screens/Camera';
import Tolls from './Screens/Tolls';
import Employee from './Screens/Employee';
import Expenses from './Screens/Expenses';
import Ownership from './Screens/Ownership';
import WalletM from './Screens/WalletM';
import Unauthorized from './Screens/Unauthorized';

import {
    getCameras,
    getEmployees,
    getExpenses,
    getTolls,
    getUnauthorizedVehicle
} from '../../store/actions/tollActions';

import {
    getallWallet,
    getCustomer,
    getVehicle
} from '../../store/actions/customerAction';

// Lazy-loaded screens
const Main = lazy(() => import('./Screens/Main'));
const Worker = lazy(() => import('./Screens/Worker'));
const Customers = lazy(() => import('./Screens/Customers'));
const Vehicle = lazy(() => import('./Screens/Vehicle'));

export default function SDashboard() {
    const [path, setPath] = useState("dashboard");
    const dispatch = useDispatch();

    useEffect(() => {
        setPath("dashboard");
        dispatch(getCameras());
        dispatch(getTolls());
        dispatch(getCustomer());
        dispatch(getVehicle());
        dispatch(getEmployees());
        dispatch(getExpenses());
        dispatch(getallWallet());
        dispatch(getUnauthorizedVehicle());
    }, [dispatch]);

    const renderComponent = () => {
        switch (path) {
            case 'dashboard':
                return <Main />;
            case 'camera':
                return <Camera />;
            case 'toll':
                return <Tolls />;
            case 'employee':
                return <Employee />;
            case 'expenses':
                return <Expenses />;
            case 'customer':
                return <Customers />;
            case 'ownership':
                return <Ownership />;
            case 'walletm':
                return <WalletM />;
            case 'vehicle':
                return <Vehicle />;
            case 'unauthorized':
                return <Unauthorized />;
            case 'worker':
                return <Worker />;
            default:
                return <Main />;
        }
    };

    return (
        <div className="w-screen flex bg-slate-50">
            {/* Sidebar */}
            <div className="w-64 transition-all duration-300 ease-in-out">
                <StationSidebar setPath={setPath} />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-2 transition-all duration-300 ease-in-out">
                <Suspense
                    fallback={
                        <div className="w-full h-full flex justify-center items-center">
                            <ThreeDots
                                visible={true}
                                height="40"
                                width="40"
                                color="#007bff"
                                radius="5"
                                ariaLabel="three-dots-loading"
                            />
                        </div>
                    }
                >
                    {renderComponent()}
                </Suspense>
            </div>

            {/* Emergency Button */}
            <div className="fixed bottom-10 right-10 z-50">
                <a
                    href="tel:9309546185"
                    className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all"
                >
                    Emergency
                </a>
            </div>
        </div>
    );
}
