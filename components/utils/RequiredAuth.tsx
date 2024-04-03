"use client";

import {useAppSelector} from "@/lib/hooks";
import {redirect, useRouter} from "next/navigation";
import Spinner from "@/components/common/Spinner";


interface Props {
  children: React.ReactNode;
}

export default function RequiredAuth({children}: Props) {
  const router = useRouter();
  const {isAuthenticated, isLoading} = useAppSelector(state => state.auth)

  if (isLoading) {
    return <Spinner size={200}/>
  }

  if (!isAuthenticated) {
    redirect('/auth/login')
  }


  return (
    <>{children}</>
  )
}