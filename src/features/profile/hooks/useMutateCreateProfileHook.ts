import { useMutateCreateProfileApi } from '../api/useMutateCreateProfileApi'
import {toast} from 'react-toastify';

export const useMutateCreateProfileHook = () => {
    const {mutateCreateProfile} = useMutateCreateProfileApi({
        onSuccess: () => {
            toast.success('Create Profile Success')
        }, 

        onError: () => {
            toast.error('Failed')
        }
    })

    return{
        mutateCreateProfile
    }
}