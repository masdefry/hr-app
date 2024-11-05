import { mutateCreateProfileApi } from '../api/mutateCreateProfileApi'
import {toast} from 'react-toastify';

export const mutateCreateProfileHook = () => {
    const {mutateCreateProfile} = mutateCreateProfileApi({
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