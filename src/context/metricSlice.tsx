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
        },
        metricUpdated: (state, action: PayloadAction<Metric>) => {
            const { productId, cantidad } = action.payload
            const foundMetric = state.find(metric => metric.productId === productId)
            if (foundMetric) {
                foundMetric.cantidad = cantidad
            }
        }
    }
})

export const { addMetric,metricUpdated } = metricSlice.actions
export default metricSlice.reducer