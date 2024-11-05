'use client';
import {useQueryGetProfileHook} from '@/features/profile/hooks/useQueryGetProfileHook'
import FormProfile from '@/features/profile/components/FormProfile'
import { useMutateUpdateProfileHook } from '../../../../features/profile/hooks/useMutateUpdateProfileHook';

export default function EditProfilePage(){

    const {dataUserProfile} = useQueryGetProfileHook()
    const {mutateUpdateProfile} = useMutateUpdateProfileHook()

    if(!dataUserProfile?.birthDate && !dataUserProfile?.address && !dataUserProfile?.phoneNumber) return(
        <></>
    )

    return(
        <main>
            <FormProfile 
                birthDate={dataUserProfile?.birthDate}
                address={dataUserProfile?.address}
                phoneNumber={dataUserProfile?.phoneNumber}
                isEdit={true}
                mutateUpdateProfile={useMutateUpdateProfileHook}
            />
        </main>
    )
}