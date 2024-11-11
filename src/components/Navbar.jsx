import logo from "../assets/logo.svg"
import { Menu, X } from "lucide-react"
import { navItems } from "../constants"
import { useState } from "react"

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <a href="">
                  <img className="w-28 mr-2" src={logo} alt="logo" />
                </a>
                <div className="flex items-center space-x-12 text-black">
                  <ul className="hidden lg:flex ml-14 space-x-12">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                      </li>
                  )) }
                  </ul>
                  <div className="hidden lg:flex justify-center space-x-12 items-center text-white">
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                      Objednat trenéra
                    </a>
                  </div>
                </div>
                
                <div className="lg:hidden md:flex flex-col justify-end text-black">
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen &&  (
              <div className="fixed mt-3 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center space-y-6 lg:hidden">
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <li key={index} className="text-center">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-6">
                  <a href="#" className="py-2 px-3 border rounded-md">Ceník</a>
                  <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Objednat trenéra</a>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar