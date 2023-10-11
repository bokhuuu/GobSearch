import { Outlet } from "react-router-dom"

export const CareersLayout = () => {
    return (
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

            <Outlet />
        </div>
    )
}
