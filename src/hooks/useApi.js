import React, { useState } from 'react'


export const useApi = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(undefined);

    const requset = async (param, func) => {

        try {
            setIsLoading(true)
            const { data } = await func(param)
            if (data) setData(data)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setErrors("Something went wrong !")

        }

    }

    return { requset, data, isLoading, errors }
}
