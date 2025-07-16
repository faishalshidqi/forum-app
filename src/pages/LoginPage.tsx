import LoginInput from "@/components/LoginInput";
import {useAppDispatch} from "@/states";
import {asyncSetAuthUser} from "@/states/authUser/action.ts";

export function LoginPage() {
    const dispatch = useAppDispatch()

    const onLogin = ({email, password}: { email: string, password: string }) => {
        dispatch(asyncSetAuthUser({email, password}))
    }

    return (
        <section className='bg-gray-100 min-h-screen flex box-border justify-center items-center'>
            <LoginInput onLogin={onLogin}/>
        </section>
    )
}