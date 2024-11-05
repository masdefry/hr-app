import { mutateUpdateProfileApi } from '../api/mutateUpdateProfileApi'
import {toast} from 'react-toastify';

export const mutateUpdateProfileHook = () => {
    const {mutateUpdateProfile} = mutateUpdateProfileApi({
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