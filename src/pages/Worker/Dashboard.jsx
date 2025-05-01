import React from 'react'
import { useDispatch } from 'react-redux'
import { getCard } from '../../store/actions/workerActions'
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);

    return (
        <div className='flex justify-center items-center h-screen font-Poppins'>
            {
                loading ? (
                    <div className='w-full h-full flex justify-center items-center'>
                        <ThreeDots
                            visible={true}
                            height="40"
                            width="40"
                            color="#007bff"
                            radius="5"
                            ariaLabel="three-dots-loading"
                        />
                    </div>
                ) :
                    <button
                        onClick={() => {
                            dispatch(getCard(setLoading, navigate))
                        }}
                        className='bg-blue-500 h-[200px] w-[200px] text-3xl rounded-full text-white '>
                        Start
                    </button>
            }

        </div>
    )
}
