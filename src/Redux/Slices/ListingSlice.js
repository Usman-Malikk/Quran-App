import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chapters: [],

}
export const ListingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {
        saveChaptersData: (state,action) => {
            state.chapters = action.payload
        },
        saveParaData: (state) => {
            state.chapters = false
        },
        savePageData: (state) => {
            state.chapters = false
        },
        saveHijibData: (state) => {
            state.chapters = false
        },

    },
})

// Action creators are generated for each case reducer function
export const { saveChaptersData, saveParaData,savePageData,saveHijibData} = ListingSlice.actions

export default ListingSlice.reducer