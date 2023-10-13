import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metric } from "../interfaces/product";


const Initial_Metric: Metric[] = [
   
]

export const metricSlice = createSlice({
    name: 'metrics',
    initialState: Initial_Metric,
    reducers: {
        addMetric: (state, action: PayloadAction<Metric>) => {
            state.push(action.payload)
        }
    }
})

export const { addMetric } = metricSlice.actions
export default metricSlice.reducer