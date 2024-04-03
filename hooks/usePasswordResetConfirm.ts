import {useResetPasswordConfirmMutation} from "@/lib/features/auth/authApiSlice";
import {FormEvent, useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";


export default function usePasswordResetConfirm({uid, token}: {uid: string, token: string}) {
  const [resetPasswordConfirm, {isLoading}] = useResetPasswordConfirmMutation()
  const router = useRouter();
  const {toast} = useToast()

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: '',
  })

  const {new_password, re_new_password} = formData;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    resetPasswordConfirm({uid, token, new_password, re_new_password})
      .unwrap()
      .then(() => {
        toast({
          description: "Password reset successfully",
        })
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err)
        toast({
          variant: "destructive",
          title: "Password reset failed",
        })
      })
  }

  return {
    new_password,
    re_new_password,
    isLoading,
    onSubmit,
    onChange,
  }
}