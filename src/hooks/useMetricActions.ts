import { addMetric } from "../context/metricSlice"
import { Metric } from "../interfaces/product"
import { useAppDispatch } from "./store"


export const useMetricActions = () => {

    const dispatch = useAppDispatch()

    const addMetricAction = ({ productId, cantidad,name }: Metric) => {
        dispatch(addMetric({ productId, cantidad,name }))
    }


    return { addMetricAction }
}

