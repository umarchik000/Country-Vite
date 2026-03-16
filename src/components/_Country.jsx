import { useTheme } from "../hooks/useTheme"

export default function Country({children}) {

    const {theme} = useTheme()

    return <ul className={`Earth ${theme == "dark" ? "dark" : ""}`}>{children}</ul>
}