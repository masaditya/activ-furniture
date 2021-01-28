
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { LOGIN_FAILED, LOGIN_SUCCESS, RESTORE_TOKEN } from "../actionTypes";

// export const RestoreToken = async () => {
//     let response = await AsyncStorage.getItem('token')
//         .then(result => {
//             if (result) {
//                 return {
//                     type: RESTORE_TOKEN,
//                     payload: {
//                         token: result,
//                     },
//                 };
//             } else {
//                 return {
//                     type: RESTORE_TOKEN,
//                     payload: {
//                         token: result,
//                     },
//                 };
//             }
//         })
//         .catch(error => {
//             return {};
//         });
//     return response;
// };

// export const Login = async data => {
//     const response = await Axios.post(urlServer + 'login', data)
//         .then(result => {
//             if (result.data.success) {
//                 const {
//                     token
//                 } = result.data;
//                 AsyncStorage.setItem('token', token);
//                 return {
//                     type: LOGIN_SUCCESS,
//                     payload: {
//                         token: token,
//                     },
//                 };
//             } else {
//                 return {
//                     type: LOGIN_FAILED,
//                     payload: {},
//                 };
//             }
//         })
//         .catch(err => {
//             alert('Invalid Credentials');
//         });
//     return response;
// };

// export const Logout = async () => {
//     const response = await AsyncStorage.clear()
//         .then(result => {
//             return {
//                 type: LOGOUT_SUCCESS,
//             };
//         })
//         .catch(err => {});
//     return response;
// };