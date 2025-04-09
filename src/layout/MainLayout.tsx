import { Outlet } from "react-router-dom"

import NavigationBar from "../components/NavigationBar"
import Input from "../components/Input"
import Footer from "../components/Footer"

import '../styles/layout/mainLayout.scss'

function MainLayout() {
    return (
        <div className="mainLayout">
            <div className="header">
                <NavigationBar />
                <Input />
            </div>

            <div className="space"></div>
            <Outlet />

            <Footer />

        </div>
    )
}

export default MainLayout