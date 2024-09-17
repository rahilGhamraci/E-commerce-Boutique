import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout( ){
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar></Navbar>
            <main>
                <Outlet className="my-16 flex-grow"></Outlet>
            </main>
            <Footer></Footer> 
          
        </div>
    );
}
   