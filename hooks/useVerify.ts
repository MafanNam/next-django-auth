import {useVerifyMutation} from "@/lib/features/auth/authApiSlice";
import {useAppDispatch} from "@/lib/hooks";
import {useEffect} from "react";
import {finishInitialLoad, setAuth} from "@/lib/features/auth/authSlice";


export default function useVerify() {
  const dispatch = useAppDispatch();

  const [verify] = useVerifyMutation();


  useEffect(() => {
      verify(undefined)
        .unwrap()
        .then(() => {
          dispatch(setAuth())
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          dispatch(finishInitialLoad());
        })
  }, [dispatch, verify])
}