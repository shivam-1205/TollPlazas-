import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";

export const adminLogin = (data, setLoading, navigate) => {

    return async (dispatch) => {
        try {
            await axios.post(baseURL + 'v1/admin/admin-login/', data)
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
                    navigate("/admin-dashboard")
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

export const getData = (setData) => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/admin/total-tolls/')
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}


export const getCameras = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/toll/get-camera/')
                .then((res) => {
                    dispatch({
                        type: 'GET_CAMERAS',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const postCamera = (data) => {
    return async (dispatch) => {
        try {
            await axiosIns.post('v1/toll/add-camera/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    dispatch(getCameras())
                    toast.success(res?.data?.message || "Camera added successfully", {
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
        }
    };
}

export const getTolls = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/toll/get-toll-station/')
                .then((res) => {
                    dispatch({
                        type: 'GET_TOLLS',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getExpenses = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/toll/get-expense/')
                .then((res) => {
                    dispatch({
                        type: 'GET_EXPENSES',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const postExpense = (data, setLoading) => {
    setLoading(true)
    return async (dispatch) => {
        try {
            await axiosIns.post('v1/toll/add-expense', data)
                .then((res) => {
                    dispatch(getExpenses())
                    toast.success(res?.data?.message || "Expense added successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false)
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
                    setLoading(false)

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
            setLoading(false)
        }
    };
}


export const getEmployees = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/toll/get-employee/')
                .then((res) => {
                    dispatch({
                        type: 'GET_EMPLOYEES',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {

            console.log(error);
        }
    }
}

export const postEmployees = (data, setLoading) => {
    setLoading(true)
    return async (dispatch) => {
        try {
            await axiosIns.post('v1/toll/add-employee/', data)
                .then((res) => {
                    dispatch(getEmployees())
                    toast.success(res?.data?.message || "employee added successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false)
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
                    setLoading(false)

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
            setLoading(false)
        }
    };
}


export const postToll = (data) => {
    return async (dispatch) => {
        try {
            await axiosIns.post('v1/toll/add-toll-station/', data)
                .then((res) => {
                    dispatch(getTolls())
                    toast.success(res?.data?.message || "Camera added successfully", {
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
        }
    };
}



export const getFeed = (ip, port, setURL, setShow1) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(`v1/stream/start_stream/?rtsp_url=rtsp://admin:123456@${ip}:${port}/stream1&stream_name=stream1`)
                .then((res) => {
                    console.log(res.data)
                    setURL(res?.data?.hls_url)
                    setShow1(true)
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getAllVehicle = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/user/all-vehicles')
                .then((res) => {
                    dispatch({
                        type: 'GET_VEHICLES',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getUnauthorizedVehicle = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('unauthorized-vehicles')
                .then((res) => {
                    dispatch({
                        type: 'GET_UNAUTHORIZED',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const deleteVehicel = (id) => {
    return async (dispatch) => {
        try {
            await axiosIns.delete(`v1/user/vehicle/${id}`)
                .then((res) => {
                    dispatch(getAllVehicle())
                    toast.success(res?.data?.message || "Vehicle deleted successfully", {
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
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {

            console.log(error);
        }
    }
}


