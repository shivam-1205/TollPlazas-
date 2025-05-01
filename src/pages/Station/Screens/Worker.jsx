import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddWorker from './AddWorker';

export default function BusinessGroup() {
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10; // Number of rows per page

    // Fetching GoalData from Redux state
    const GoalData = useSelector(state => state.Reducers.worker);

    // Apply search filter and update filteredData
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredData(GoalData);
        } else {
            setFilteredData(
                GoalData?.filter(goals =>
                    Object.values(goals).some(value =>
                        value != null && String(value).toLowerCase().includes(searchQuery.toLowerCase())
                    )
                )
            );
        }
    }, [searchQuery, GoalData]);

    // Pagination logic
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData?.slice(startIndex, startIndex + rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="font-Poppins min-h-screen flex flex-col items-center bg-gray-100">
            {show && <AddWorker setShow={setShow} />}

            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Worker Management</h2>

            {/* Search and Add Worker Section */}
            <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-screen">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-10 w-full sm:w-96 rounded-lg border border-gray-300 px-4 mb-4 sm:mb-0 text-gray-700 focus:outline-none focus:border-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        onClick={() => setShow(!show)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
                    >
                        Add Worker
                    </button>
                </div>

                {/* Data Table */}
                {filteredData.length === 0 ? (
                    <p className="text-center text-gray-500">No results found</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-gray-600">
                            <thead className="bg-gray-200 text-gray-700 text-xs uppercase">
                                <tr>
                                    {Object.keys(GoalData[0])?.map(key => (
                                        <th key={key} className="px-6 py-3">
                                            {key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData?.map((goals, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                                        {Object.keys(goals)?.map(key => (
                                            <td key={key} className="px-6 py-4">
                                                {goals[key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination Controls */}
                {filteredData.length > rowsPerPage && (
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg disabled:bg-gray-400 transition-all"
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-700">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg disabled:bg-gray-400 transition-all"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
