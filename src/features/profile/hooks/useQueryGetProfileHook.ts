import { useQueryGetProfileApi } from '../api/useQueryGetProfileApi'

export const useQueryGetProfileHook = () => {
    const {dataUserProfile} = useQueryGetProfileApi()

    return{
        dataUserProfile
    }
}