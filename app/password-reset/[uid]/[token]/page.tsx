import PasswordResetConfirmForm from "@/components/forms/password-reset-confirm-form";

interface Props {
  params: {
    uid: string;
    token: string;
  }
}

export default function PasswordReset({params: {uid, token}}: Props) {
  return (
    <div className='w-full h-screen flex items-center justify-center px-4 theme-zinc'>
      <PasswordResetConfirmForm uid={uid} token={token}/>
    </div>
  )
}