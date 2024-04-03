"use client";

import Link from "next/link"
import useLogin from "@/hooks/useLogin";

import {Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Spinner from "@/components/common/Spinner";
import {Checkbox} from "@/components/ui/checkbox";
import {ImFacebook, ImGoogle} from "react-icons/im";
import {continueWithFacebook, continueWithGoogle} from "@/utils";

export default function LoginForm() {
  const {
    email,
    password,
    onSubmit,
    onChange,
    isLoading,
  } = useLogin();

  // const [persist, setPersist] = usePersist()

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name='email'
                placeholder="m@example.com"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/password-reset" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" name='password' type="password" value={password} onChange={onChange} required/>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Checkbox id='persist'/>
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Trust Tgis Device
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full">
              {isLoading ? <Spinner size={25}/> : 'Login'}
            </Button>
            <Button variant="outline" type='button' className="w-full bg-red-200 dark:bg-red-950" onClick={continueWithGoogle}>
              <ImGoogle className='mr-3'/>Login with Google
            </Button>
            <Button variant="outline" type='button' className="w-full bg-blue-200 dark:bg-blue-950" onClick={continueWithFacebook}>
              <ImFacebook className='mr-3'/>Login with Facebook
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}