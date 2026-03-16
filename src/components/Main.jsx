import { useTheme } from "../hooks/useTheme"
import Home from "../pages/_Home"
import Single from "../pages/_Single"
import { Routes, Route } from "react-router-dom"


export default function Main() {

    const {theme, setTheme} = useTheme()

    return (
        <>
            <main className={theme == "dark" ? "dark" : ""}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/single/:name" element={<Single />} />
                </Routes>
            </main></>
    )
}