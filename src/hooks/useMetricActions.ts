import { addMetric } from "../context/metricSlice"
import { Metric } from "../interfaces/product"
import { useAppDispatch } from "./store"


export const useMetricActions = () => {

    const dispatch = useAppDispatch()

    const addMetricAction = ({ productId, cantidad }: Metric) => {
        dispatch(addMetric({ productId, cantidad }))
    }


    return { addMetricAction }
}

