import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";

export const workerLogin = (data, setLoading, navigate) => {
    return async (dispatch) => {
        try {
            await axios.post(baseURL + 'v1/station/worker-login/', data)
                .then((res) => {
                    toast.success(res?.data?.message || "Authentication done Successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(res.data)
                    localStorage.setItem('access', res?.data?.access_token)
                    navigate("/worker-dashboard")
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || "Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "An error occurred during login.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    };
};

export const getCard = (setLoading, navigate) => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/station/card-fetch/')
                .then((res) => {
                    console.log(res.data)
                    navigate('/fill-data', {
                        state: res.data
                    })
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setLoading(false)
                    toast.error(err?.response?.data?.message || "No Order Found", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error?.response?.data?.message || "No Order Found", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
}

export const updateOrder = (data, setLoading, navigate) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(`v1/station/order-update/?order_id=${data}`)
                .then((res) => {
                    alert('Fuel Filled Successfully')
                    navigate(-1)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setLoading(false)
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
}