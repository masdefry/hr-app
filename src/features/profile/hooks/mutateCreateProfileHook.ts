import { useMutateCreateProfileApi } from '../api/useMutateCreateProfileApi'
import {toast} from 'react-toastify';

export const mutateCreateProfileHook = () => {
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