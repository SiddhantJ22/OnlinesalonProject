import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="displayAppointments"> Display Appointments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="addAppointment"> Add Appointments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="updatedeleteAppointment"> Edit Appointments</Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;