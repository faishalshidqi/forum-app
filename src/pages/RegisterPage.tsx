import RegisterInput from "@/components/RegisterInput.tsx";
import {useAppDispatch} from "@/states";
import {asyncRegisterUser} from "@/states/users/action.ts";
import {useNavigate} from "react-router-dom";

export default function RegisterPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onRegister = ({email, name, password}: {email: string, name: string, password: string}) => {
        dispatch(asyncRegisterUser({email, name, password}))
        navigate('/')
    }

    return (
        <section className='bg-gray-100 min-h-screen flex box-border justify-center items-center'>
            <RegisterInput onRegister={onRegister}/>
        </section>
    )
}