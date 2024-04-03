"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";
import Link from "next/link";
import usePasswordResetConfirm from "@/hooks/usePasswordResetConfirm";


interface Props {
  uid: string,
  token: string,
}

export default function PasswordResetConfirmForm({uid, token}: Props) {
  const {
    new_password,
    re_new_password,
    onSubmit,
    onChange,
    isLoading,
  } = usePasswordResetConfirm({uid, token});

  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Reset Your Password
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and take control of your inbox. Fast, secure, and designed for modern life.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2" onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input id="new_password" name='new_password' type="password" value={new_password} onChange={onChange}
                         required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password Confirm</Label>
                  <Input id="re_new_password" name='re_new_password' type="password" value={re_new_password}
                         onChange={onChange}
                         required/>
                </div>
                <Button className="bg-white text-black" type="submit">
                  {isLoading ? <Spinner size={25}/> : 'Send'}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                Did you remember your password?{" "}
                <Link href="/auth/login" className="underline">
                  Login
                </Link>
              </div>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.
                <Link className="underline underline-offset-2 text-white" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}