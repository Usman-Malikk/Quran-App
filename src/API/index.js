import axios from '../Config/axios'
import { onLoading, onLoadingOff } from '../Redux/Slices/loaderSlice'

export const GetRequest = async (info) => {
    const { route, headers = {}, dispatch } = info
    dispatch(onLoading())
    const result = await axios.get(route, headers)
    if (result.status === 200) {
        dispatch(onLoadingOff())
        return result
    }
    else {
        dispatch(onLoadingOff())
        throw result
    }
}
//Post 
export const PostRequest = async (info) => {
    const { route, headers = {}, dispatch } = info
    dispatch(onLoading())
    const result = await axios.post(route, data, headers)
    if (result.status === 200) {
        dispatch(onLoadingOff())
        return result
    }
    else {
        dispatch(onLoadingOff())
        throw result
    }
}



