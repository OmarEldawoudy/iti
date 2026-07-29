import { Outlet } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout ()
{
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            {/* <About></About> */}
        </>



    )

}