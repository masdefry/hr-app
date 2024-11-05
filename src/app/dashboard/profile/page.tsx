'use client';
import HeaderTitle from '@/components/HeaderTitle'
import DisplayProfile from '@/features/profile/components/DisplayProfile';
import FormProfile from '@/features/profile/components/FormProfile';

import {useQueryGetProfileHook} from '@/features/profile/hooks/useQueryGetProfileHook';
import { useMutateCreateProfileHook } from '@/features/profile/hooks/useMutateCreateProfileHook';

export default function ProfilePage(){

    const {dataUserProfile} = useQueryGetProfileHook()
    const {mutateCreateProfile} = useMutateCreateProfileHook()

    return(
        <main>
            <HeaderTitle title='Account Profile' />
            {
                dataUserProfile?.birthDate && dataUserProfile?.phoneNumber && dataUserProfile?.address?
                    <DisplayProfile
                        birthDate={dataUserProfile?.birthDate}
                        phoneNumber={dataUserProfile?.phoneNumber}
                        address={dataUserProfile?.address}
                        imagesProfile={dataUserProfile?.userProfileImage}
                    />
                :
                    <FormProfile
                        mutateCreateProfile={mutateCreateProfile}
                    />
            }
        </main>
    )
}