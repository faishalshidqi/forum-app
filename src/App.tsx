import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "./states";
import {asyncPreloadProcess} from "./states/preload/action.ts";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import HomePage from './pages/HomePage.tsx';
import {SidebarTrigger} from "@/components/ui/sidebar.tsx";
import AppSidebar from "@/components/AppSidebar.tsx";

function App() {
    const auth = useAppSelector((states) => states.auth)
    const preload = useAppSelector((states) => states.preload)

    const dispatch = useAppDispatch()

    console.log(auth)
    useEffect(() => {
        dispatch(asyncPreloadProcess())
    }, [dispatch])

    if (preload) {
        return (
            <p>Loading...</p>
        )
    }
    /*
    const onLogout = () => {
        dispatch(asyncUnsetAuthUser())
    }
     */

    if (auth.name == '' && auth.email == '') {
        return (
            <main>
                <Routes>
                    <Route path='/*' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Routes>
            </main>
        )
    }
    return (
        <>
            <AppSidebar/>
            <SidebarTrigger/>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
