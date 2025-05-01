import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";

export const stationLogin = (data, setLoading, navigate) => {

    return async (dispatch) => {
        try {
            await axios.post(baseURL + 'v1/station/station-login/', data)
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
                    navigate("/station-dashboard")
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

export const regsiterWorker = (data, setLoading) => {

    return async (dispatch) => {
        try {
            await axiosIns.post(baseURL + 'v1/station/worker-register/', data)
                .then((res) => {
                    toast.success(res?.data?.message || "Worker added Successfully", {
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
                    dispatch(getWorker())
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

export const getOrders = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + 'v1/order/station-orders/')
                .then((res) => {
                    dispatch({
                        type: "SET_ORDER",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const getWorker = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + 'v1/station/get-worker/')
                .then((res) => {
                    dispatch({
                        type: "SET_WORKER",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const getFuelStatus = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + 'v1/station/get-fuel/')
                .then((res) => {
                    dispatch({
                        type: "SET_FUEL",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const getStationStatus = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + 'v1/station/get-status/')
                .then((res) => {
                    dispatch({
                        type: "SET_STATION",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const toogleStatus = () => {
    return async (dispatch) => {
        try {
            await axiosIns.put(baseURL + 'v1/station/toggle-status/')
                .then((res) => {
                    dispatch({
                        type: "SET_STATION",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const toogleFuel = () => {
    return async (dispatch) => {
        try {
            await axiosIns.put(baseURL + 'v1/station/toggle-fuel/')
                .then((res) => {
                    dispatch({
                        type: "SET_FUEL",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const getPrice = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + 'v1/station/get-price/')
                .then((res) => {
                    dispatch({
                        type: "SET_PRICE",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const getIncome = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + 'v1/order/station-total-income/')
                .then((res) => {
                    dispatch({
                        type: "SET_INCOME",
                        payload: res?.data?.total_income
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}

export const updatePrice = (amount) => {
    return async (dispatch) => {
        try {
            await axiosIns.put(baseURL + `v1/station/update-price/?amount=${amount}`,)
                .then((res) => {
                    dispatch({
                        type: "SET_PRICE",
                        payload: res.data
                    })
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
                });
        }
        catch (error) {
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
        }
    }
}