"use client";

import {useSocialAuthenticateMutation} from "@/lib/features/auth/authApiSlice";
import useSocialAuth from "@/hooks/use-social-auth";
import Spinner from "@/components/common/Spinner";

export default function Google() {
  const [googleAuthenticate, {isLoading}] = useSocialAuthenticateMutation()
  useSocialAuth(googleAuthenticate, 'google-oauth2')

  return (
      <div className='w-full h-screen flex items-center justify-center px-4 theme-zinc'>
        <Spinner size={300}/>
      </div>
  )
}