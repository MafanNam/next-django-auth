"use client";

import Link from "next/link"

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
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import Spinner from "@/components/common/Spinner";
import useRegister from "@/hooks/useRegister";


export default function RegisterForm() {
  const {
    first_name,
    last_name,
    type_profile,
    email,
    password,
    re_password,
    isLoading,
    onSubmit,
    onChange,
    onValueChange,
  } = useRegister();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first_name">First name</Label>
              <Input id="first_name" name='first_name' placeholder="Max" value={first_name} onChange={onChange} required/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last_name">Last name</Label>
              <Input id="last_name" name='last_name' placeholder="Robinson" value={last_name} onChange={onChange} required/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type_profile">Select Type Profile:</Label>
            <RadioGroup defaultValue="candidate" name='type_profile' onValueChange={onValueChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="candidate" id="r1"/>
                <Label htmlFor="r1">Candidate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="r2"/>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input id="password" name='password' type="password" value={password} onChange={onChange} required/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password Confirm</Label>
            <Input id="re_password" name='re_password' type="password" value={re_password} onChange={onChange} required/>
          </div>
          <Button type="submit" className="w-full">
            {isLoading ? <Spinner size={25}/> : 'Create an account'}
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
        </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}