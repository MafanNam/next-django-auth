import {useRegisterMutation} from "@/lib/features/authApiSlice";
import {FormEvent, useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";


export default function useRegister() {
  const [register, {isLoading}] = useRegisterMutation()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    type_profile: 'candidate',
    email: '',
    password: '',
    re_password: '',
  })

  const {toast} = useToast()
  const router = useRouter()

  const {first_name, last_name, type_profile, email, password, re_password} = formData;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  function onValueChange(value: string) {
    setFormData({...formData, type_profile: value})
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    register({first_name, last_name, type_profile, email, password, re_password})
      .unwrap()
      .then(() => {
        toast({
          description: "Please check email to verify account.",
        })
        router.push("/auth/login")
      })
      .catch((err: Error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: err.message,
        })
      })
  }

  return {
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
  }
}