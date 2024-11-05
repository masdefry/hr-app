import {useMutation} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import { AxiosResponse, AxiosError } from 'axios'

interface IMutateUpdateProfileApi{
    onSuccess: (res: AxiosResponse) => void, 
    onError: (err: AxiosError) => void
}

export const useMutateUpdateProfileApi = ({onSuccess, onError}: IMutateUpdateProfileApi) => {
    const {mutate: mutateUpdateProfile} = useMutation<AxiosResponse, AxiosError, FormData>({
        mutationFn: async(fd) => {
            return await instance.put('/users', fd)
        }, 

        onSuccess, 
        onError
    })

    return {
        mutateUpdateProfile
    }
}