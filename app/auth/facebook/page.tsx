"use client";

import {useSocialAuthenticateMutation} from "@/lib/features/auth/authApiSlice";
import useSocialAuth from "@/hooks/use-social-auth";
import Spinner from "@/components/common/Spinner";
export default function Facebook() {
  const [facebookAuthenticate] = useSocialAuthenticateMutation()

  useSocialAuth(facebookAuthenticate, 'facebook')

  return (
    <div className='w-full h-screen flex items-center justify-center px-4 theme-zinc'>
      <Spinner size={300}/>
    </div>
  )
}