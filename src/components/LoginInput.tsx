import useStringInput from "@/hooks/useStringInput.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export default function LoginInput({onLogin}: {onLogin: ({email, password}: {email: string, password: string}) => void}) {
    const [email, onEmailChanged] = useStringInput('')
    const [password, onPasswordChanged] = useStringInput('')

    const onSubmit = (event: {preventDefault: () => void}) =>{
        event.preventDefault()
        onLogin({email: email as string, password: password as string})
    }

    return (
        <div className='bg-secondary rounded-2xl flex max-w-4xl p-5 items-center'>
            <div className='md:w-1/2 px-8'>
                <h2 className='font-bold text-3xl text-primary'>Login</h2>
                <form className='flex flex-col gap-4' onSubmit={onSubmit}>
                    <input className='bg-background focus:outline-primary p-2 rounded-xl border-2 mt-8' type='email' value={email as string} onChange={onEmailChanged as (event: {target: {value: string}}) => void} placeholder='Email'/>
                    <input className='bg-background focus:outline-primary p-2 rounded-xl border-2' type='password' value={password as string} onChange={onPasswordChanged as (event: {target: {value: string}}) => void} placeholder='Password'/>
                    <Button className='w-full font-bold py-2 px-4 mb-7 rounded-b-lg' type='submit'>Submit</Button>
                </form>
                <div className='mt-4 text-sm flex justify-between items-center container-mr'>
                    <Link to='/register' className='underline'>Click here to register.</Link>
                </div>
            </div>
            <div className='md:block hidden w-1/2'>
                <img className='rounded-2xl max-h-max' src='https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080' alt='register page image'/>
            </div>
        </div>
    )
}