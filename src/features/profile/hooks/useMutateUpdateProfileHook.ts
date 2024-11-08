import { useMutateUpdateProfileApi } from '../api/useMutateUpdateProfileApi'
import {toast} from 'react-toastify';

export const useMutateUpdateProfileHook = () => {
    const {mutateUpdateProfile} = useMutateUpdateProfileApi({
        onSuccess: () => {
            toast.success('Update Profile Success')
        },
        onError: () => {
            toast.error('Failed')
        }
    })

    return{
        mutateUpdateProfile
    }
}