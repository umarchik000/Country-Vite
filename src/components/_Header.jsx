import { useTheme } from "../hooks/useTheme"

export default function Header({ }) {

    const { theme, setTheme } = useTheme()

    return (
        <>
            <header className={theme == "dark" ? "dark" : ""}>
                <div className="container">
                    <div className="header-wrapper">
                        <h1>Where in the world?</h1>
                        <div className="Mode">
                            <img src="/src/assets/icons/Path.svg" alt="" />
                            <select className={`Mods ${theme == "dark" ? "dark" : ""}`} defaultValue={theme} onChange={(e) => setTheme(e.target.value)}>
                                <option value="light">LIGHT</option>
                                <option value="dark">DARK</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )


}