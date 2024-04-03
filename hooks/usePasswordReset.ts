import {useResetPasswordMutation} from "@/lib/features/auth/authApiSlice";
import {FormEvent, useState} from "react";
import {useToast} from "@/components/ui/use-toast";


export default function usePasswordReset() {
  const [resetPassword, {isLoading}] = useResetPasswordMutation()

  const [email, setEmail] = useState('')

  const {toast} = useToast()

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(email)
    resetPassword(email)
      .unwrap()
      .then(() => {
        toast({
          description: "Request sent, check your email",
        })
      })
      .catch((err) => {
        console.log(err)
        toast({
          variant: "destructive",
          title: "Failed to send request.",
          description: ''
        })
      })
  }

  return {
    email,
    isLoading,
    onSubmit,
    onChange,
  }
}