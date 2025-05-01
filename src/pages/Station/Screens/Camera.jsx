import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCamera from './AddCamera';
import ViewFeed from './ViewFeed';
import { getFeed } from '../../../store/actions/tollActions';
import { VideoIcon, PlusCircle } from 'lucide-react';

export default function Camera() {
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [current, setCurrent] = React.useState({});
    const dispatch = useDispatch();
    const [url, setUrl] = React.useState(null);
    const cameras = useSelector(state => state.Reducers.camera);

    return (
        <div className="font-Poppins p-4 bg-gray-50 min-h-screen">
            {show && <AddCamera setShow={setShow} />}
            {show1 && <ViewFeed setShow={setShow1} url={url} />}

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                    <VideoIcon size={28} className="text-blue-600" /> Live Cameras
                </h2>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md"
                >
                    <PlusCircle size={18} /> Add Camera
                </button>
            </div>

            {cameras.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cameras.map((camera, index) => (
                        <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                            <div className="bg-gray-800 text-white px-4 py-2 text-sm font-semibold">
                                {camera.camera_location || `Camera ${index + 1}`}
                            </div>
                            <iframe
                                src={camera.camera_url}
                                className="w-full h-64"
                                allowFullScreen
                                title={camera.camera_location}
                            ></iframe>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500 italic">
                    No cameras found. Click "Add Camera" to set up a feed.
                </div>
            )}
        </div>
    );
}