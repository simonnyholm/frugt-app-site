import {BsArrowLeftShort, BsSearch} from "react-icons/bs";
import { useState } from "react";
import Logo from "../image/Logo.png";
import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import TokenContext from "../Contexts/TokenContext";




export default function Layout() {
	const {setToken} = useContext(TokenContext)
  const [open,setOpen] = useState(true);

	function signout() {
		setToken(null)
		window.location.href("/")
	}

	return (
		<div className="flex">


			<nav className={`bg-beige h-screen p-5 pt-8 ${open?"w-72":"w-30"} duration-300 relative`}>
			<div><img src={Logo} alt="logo" className={`object-contain h-12 w-12 cursor-pointer block mr-2 duration-200 ${open && "rotate-[360deg]"} `} /></div>
			<BsArrowLeftShort className={` bg-white text-black text-3xl rounded-full top-9  absolute -right-3 border border-black cursor-pointer" ${!open && "rotate-180"}`} onClick={()=> setOpen(!open)}/>

				<menu>
					<li>
						{/* <Link to="/">Home</Link> */}
					</li>
					<li>
						<Link to="/">VareKatalog</Link>
					</li>
                    <li>
						<Link to="/orders">Bestilinger</Link>
					</li>
                    <li>
						<Link to="/costumerbase">Kundebase</Link>
					</li>
					<li>
						<button onClick={signout}>Sign out</button>
					</li>
				</menu>
			</nav>
			<div >
                {/* <div className="flex items-center rounded-md bg-beige mt-6 pl-2 pr-80 ml-20 py-3 ">
                    <BsSearch className="text-lg block float-left cursor-pointer ml-4"/>
                    <input type={"search"} placeholder="Search" className="text-base bg-transparent w-100% text-black focus:outline-none ml-3" />
                </div> */}
       </div>
			<main>
				<Outlet />
			</main>
		</div>
	)
}
