import { addMetric, metricUpdated } from "../context/metricSlice"
import { Metric } from "../interfaces/product"
import { useAppDispatch } from "./store"


export const useMetricActions = () => {

    const dispatch = useAppDispatch()

    const addMetricAction = ({ productId, cantidad }: Metric) => {
        dispatch(addMetric({ productId, cantidad }))
    }

    const updateMetricAction = ({ productId, cantidad }: Metric) => {
        dispatch(metricUpdated({ productId, cantidad }))
    }


    return { addMetricAction, updateMetricAction }
}

