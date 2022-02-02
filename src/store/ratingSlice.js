import { createSlice } from "@reduxjs/toolkit";
import json from '../assets/data.json';


const initialState = {
    data : json.data,
    intervalId : null,
    timerId : null
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setRatingByID(state, action) {
            const index = state.data.findIndex(elem => elem.id === action.payload.id)
            state.data[index].rate = action.payload.rate
        },
        sortList(state) {
            const newData = state.data.slice().sort((a, b) => {
                return b.rate - a.rate
            })
            state.data = newData
        },
        randomize(state) {
            state.data.map(item => {
                item.rate = Math.floor(Math.random()*5 + 1)
            })
        },
        setTimerId(state, action) {
            state.timerId = action.payload
        },
        setIntervalId(state, action) {
            state.intervalId = action.payload
        }
    }
})

export const actionCreators = listSlice.actions

export default listSlice.reducer