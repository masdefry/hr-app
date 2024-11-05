import {useMutation} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import { AxiosResponse, AxiosError } from 'axios'

interface IMutateCreateProfileApi{
    onSuccess: (res: AxiosResponse) => void, 
    onError: (err: AxiosError) => void
}

export const useMutateCreateProfileApi = ({onSuccess, onError}: IMutateCreateProfileApi) => {
    const {mutate: mutateCreateProfile} = useMutation<AxiosResponse, AxiosError, FormData>({
        mutationFn: async(fd: FormData) => {
            return await instance.post('/users', fd)
        },
        onSuccess, 
        onError 
    })

    return{
        mutateCreateProfile
    }
}