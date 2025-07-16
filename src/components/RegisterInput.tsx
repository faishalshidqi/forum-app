import useStringInput from "@/hooks/useStringInput.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Eye, EyeOff} from "lucide-react";

export default function RegisterInput({onRegister}: {onRegister: ({email, name, password}: {name: string, email: string, password: string}) => void}) {
    //const [seePassword, onTogglePassword] = useBooleanInput(false)
    const [email, onEmailChanged] = useStringInput('')
    const [password, onPasswordChanged] = useStringInput('')
    const [name, onNameChanged] = useStringInput('')

    const onSubmit = (event: {preventDefault: () => void}) => {
        event.preventDefault()
        onRegister({name: name as string, email: email as string, password: password as string})
    }

    return (
        <div className='bg-secondary rounded-2xl flex max-w-4xl p-5 items-center'>
            <div className='md:w-1/2 px-8'>
                <h2 className='font-bold text-3xl text-primary'>Register</h2>
                <form className='flex flex-col gap-4' onSubmit={onSubmit}>
                    <input className='bg-background focus:outline-primary p-2 rounded-xl border-2 mt-8' type='email' value={email as string} onChange={onEmailChanged as (event: {target: {value: string}}) => void} placeholder='Email'/>
                    <input className='bg-background focus:outline-primary p-2 rounded-xl border-2' type='text' value={name as string} onChange={onNameChanged as (event: {target: {value: string}}) => void} placeholder='Name'/>
                    <div className='relative bg-background focus:outline-primary p-2 rounded-xl border-2'>
                        <input className='max-w-max' type='password' value={password as string} onChange={onPasswordChanged as (event: {target: {value: string}}) => void} placeholder='Password'/>
                        <Eye className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 hidden'  color='var(--ring)'/>
                        <EyeOff className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100' color='var(--ring)'/>
                    </div>
                    <Button className='w-full font-bold py-2 px-4 mb-7 rounded-b-lg' type='submit'>Submit</Button>
                </form>
                <div className='mt-4 text-sm flex justify-between items-center container-mr'>
                    <Link to='/' className='underline'>Click here to login.</Link>
                </div>
            </div>
            <div className='md:block hidden w-1/2'>
                <img className='rounded-2xl max-h-max' src='https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080' alt='register page image'/>
            </div>
        </div>
    )
}