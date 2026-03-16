import { createRoot } from 'react-dom/client'
import './assets/scss/css/main.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
