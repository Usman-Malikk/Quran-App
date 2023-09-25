import { Alert } from "react-native";
import { GetRequest, PostRequest } from ".";
import { Routes } from "./routes";
import Toast from 'react-native-toast-message'
import { ErrorHandler } from "./ErrorHandler";
import { onLoading, onLoadingOff } from "../Redux/Slices/loaderSlice";



export const getChapters = async (dispatch) => {
    try {
        const result = await GetRequest({
            route: Routes.getChapters,
            dispatch:dispatch
        })
        return result
    } catch (e) {
        ErrorHandler(e)
        return e
    }
}

export const getChapterRecitation = async (dispatch,id) => {
    try {
        const result = await GetRequest({
            route: Routes.chapterRecitation+`${id}?language=en&words=true&page=1&per_page=100000000`,
            dispatch:dispatch
        })
        return result
    } catch (e) {
        ErrorHandler(e)
        return e
    }
}

export const getChapterRecitationInArabic = async (dispatch,id) => {
    try {
        const result = await GetRequest({
            route: Routes.chapterInArabic+`?chapter_number=${id}`,
            dispatch:dispatch
        })
        return result
    } catch (e) {
        ErrorHandler(e)
        return e
    }
}

export const getChapterAudio = async (dispatch,id) => {
    try {
        const result = await GetRequest({
            route: Routes.chapterAudio+id,
            dispatch:dispatch
        })
        return result
    } catch (e) {
        ErrorHandler(e)
        return e
    }
}

export const getChapterDetail = async (dispatch,id) => {
    try {
        const result = await GetRequest({
            route: Routes.chapterDetail+`${id}/info?language=en`,
            dispatch:dispatch
        })
        return result
    } catch (e) {
        ErrorHandler(e)
        return e
    }
}