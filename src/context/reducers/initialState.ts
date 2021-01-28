import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState = async()=> {
    return {
    isLoading: true,
    isSignout: true,
    user: await AsyncStorage.getItem('user'),
    lightTheme: true
    }
}