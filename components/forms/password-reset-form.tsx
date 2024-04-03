"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";
import Link from "next/link";
import usePasswordReset from "@/hooks/usePasswordReset";


export default function PasswordResetForm() {
  const {
    email,
    onSubmit,
    onChange,
    isLoading,
  } = usePasswordReset();

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
                <Input
                  className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                  placeholder="Enter your email"
                  id='email'
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
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