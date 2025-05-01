import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";



export const getCustomer = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/admin/get-users/')
                .then((res) => {
                    dispatch({
                        type: 'GET_CUSTOMERS',
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


export const getVehicle = () => {
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

export const getallWallet = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/user/all-wallet-admin/')
                .then((res) => {
                    dispatch({
                        type: 'GET_WALLET',
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

export const updateWallet = (data) => {
    return async (dispatch) => {
        try {
            await axiosIns.put(`v1/user/update-wallet-admin/?amount=${data.amount}&user=${data.user}`)
                .then((res) => {
                    dispatch(getallWallet())
                    toast.success('Wallet updated successfully', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'light'
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