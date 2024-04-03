import {useLoginMutation} from "@/lib/features/auth/authApiSlice";
import {FormEvent, useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";
import {setAuth} from "@/lib/features/auth/authSlice";
import {useAppDispatch} from "@/lib/hooks";


export default function useLogin() {
  const [login, {isLoading}] = useLoginMutation()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {toast} = useToast()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {email, password} = formData;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    login({email, password})
      .unwrap()
      .then(() => {
        dispatch(setAuth())

        toast({
          description: "Login successfully.",
        })
        router.push("/dashboard")
      })
      .catch((err: Error) => {
        toast({
          variant: "destructive",
          title: "Failed to log in.",
          description: err.message,
        })
      })
  }

  return {
    email,
    password,
    isLoading,
    onSubmit,
    onChange,
  }
}