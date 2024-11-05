import { useQueryGetProfileApi } from '../api/useQueryGetProfileApi'

export const queryGetProfileHook = () => {
    const {dataUserProfile} = useQueryGetProfileApi()

    return{
        dataUserProfile
    }
}